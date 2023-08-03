import { useEffect, useState } from 'react';
import { Feedback, InterviewResults } from '../types/InterviewResults';
import useConsumer from './useConsumer';
import useInterviewResults from './useInterviewResults';
import { useInterviewContext } from './useInterviewContext';

interface WebSocketData {
  connected: boolean;
  data: any;
}

const CHANNEL_ID = { channel: 'ChatChannel' };

const useChatWebSocket = (conversationId: number) => {
  const { consumer, chatId, setInterviewResults } = useInterviewContext();

  const [webSocketData, setWebSocketData] = useState<WebSocketData>({
    connected: false,
    data: null,
  });

  const [feedback, setFeedback] = useState<Feedback>();

  useEffect(() => {
    if (feedback){
      setInterviewResults({transcript: [], feedback});
    }
  }, [feedback]);

  useEffect(() => {
    console.log('creating subscription', consumer)
    const subscription = consumer?.subscriptions.create(
      CHANNEL_ID,
      {
        connected: () => {
          console.log('connected');
          setWebSocketData({ connected: true, data: null });
        },
        disconnected: () => {
          console.log('disconnected');
          setWebSocketData({ connected: false, data: null });
        },
        received: (data) => {
          const response = data.message || data.answer;
          const feedback = data.feedback;
          if (response) {
            setWebSocketData({ connected: true, data: response });
          } else if (feedback) {
            setFeedback(feedback);
          } else {
            console.error(data.error)
            console.error(data)
          }
        },
      }
    );

    return () => {
      subscription?.unsubscribe();
    };
  }, [consumer, chatId]);

  const sendChatMessage = (message: string) => {
    makeMessage({ action: 'respond', message })
  };

  const endChat = () => {
    makeMessage({action: 'terminate'});
  }

  const makeMessage = (data: {action: 'respond' | 'terminate', message?: string}) => {
    consumer?.send({
      identifier: JSON.stringify(CHANNEL_ID),
      command: 'message',
      data: JSON.stringify(data),
    });
  }

  return { webSocketData, sendChatMessage, endChat, feedback };
};

export default useChatWebSocket;