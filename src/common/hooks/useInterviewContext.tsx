// Context.js
import React, { useContext, useEffect, useState } from "react";
import { InterviewResults, makeInterviewResults } from "../types/InterviewResults";
import { Consumer, createConsumer } from "@rails/actioncable";
import { SESSION_ID } from "../constants/session-id";
 
interface ContextProps {
    children: Array<JSX.Element | string> | JSX.Element | string;
}

interface MyContextValue {
    chatId: number;
    setChatId: React.Dispatch<React.SetStateAction<number>>;
    interviewResults: InterviewResults;
    setInterviewResults: React.Dispatch<React.SetStateAction<InterviewResults>>;
    consumer: Consumer | null;
}

const makeContextValue = (data: Partial<MyContextValue>): MyContextValue => {
    const defaultContextValue: MyContextValue = {
        chatId: 0,
        setChatId: () => {},
        interviewResults: makeInterviewResults({}),
        setInterviewResults: () => {},
        consumer: null,
    };
    return { ...defaultContextValue, ...data };
}

const URL = `ws://localhost:3000/cable?token=${SESSION_ID}&conversation_id=`;

export const Context = React.createContext(makeContextValue({}));
export const ContextProvider = ({ children }: ContextProps) => {
    const [chatId, setChatId] = useState(0);
    const [interviewResults, setInterviewResults] = useState(makeInterviewResults({}));
    const [consumer, setConsumer] = useState<Consumer | null>(null);
    
    useEffect(() => {
        if (!chatId) return;
        setConsumer(createConsumer(`${URL}${chatId}`))
    }, [chatId]);

    return (
        <Context.Provider value={{ chatId, setChatId, consumer, interviewResults, setInterviewResults }}>
            {children}
        </Context.Provider>
    );
};

export const useInterviewContext = () => useContext<MyContextValue>(Context);
