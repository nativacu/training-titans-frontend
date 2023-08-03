// useConsumer.js
import { useEffect, useState } from 'react';
import { Consumer, createConsumer } from '@rails/actioncable';
import { SESSION_ID } from '../constants/session-id';

const URL = `ws://localhost:3000/cable?token=${SESSION_ID}&conversation_id=`;

let globalConsumer: Consumer | null = null;

const getConsumer = (chatId: number) => {
  if (!globalConsumer) {
    globalConsumer = createConsumer(`${URL}${chatId}`);
  }
  return globalConsumer;
};

const useConsumer = () => {
  const [chatId, setChatId] = useState<number>();
  
  useEffect(() => {
    if (chatId) {
      getConsumer(chatId);
    }
  }, [chatId]);

  return { chatId, setChatId, consumer: globalConsumer };
};

export default useConsumer;
