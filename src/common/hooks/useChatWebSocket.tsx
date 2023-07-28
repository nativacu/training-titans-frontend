import { useEffect, useState } from 'react';
// import consumer, { CHANNEL_ID } from '../helpers/cable';
import { Consumer, createConsumer } from '@rails/actioncable';
import { SESSION_ID } from '../constants/session-id';

interface WebSocketData {
  connected: boolean;
  data: any;
}

const CHANNEL_ID = { channel: 'ChatChannel' };

const useChatWebSocket = (conversationId: number) => {
  const URL = `ws://localhost:3000/cable?token=${SESSION_ID}&conversation_id=${conversationId}`;
  const [consumer, setConsumer] = useState<Consumer>(createConsumer(URL));

  const [webSocketData, setWebSocketData] = useState<WebSocketData>({
    connected: false,
    data: null,
  });

  useEffect(() => {
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
          console.log(data);
          setWebSocketData({ connected: true, data });
        },
      }
    );

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const sendChatMessage = (message: string) => {
    makeMessage({ action: 'respond', data: message })
  };

  const endChat = () => {
    makeMessage({action: 'terminate'});
  }

  const makeMessage = (data: {action: 'respond' | 'terminate', data?: string}) => {
    consumer?.send({
      identifier: JSON.stringify(CHANNEL_ID),
      command: 'message',
      data: JSON.stringify(data),
    });
  }

  return { webSocketData, sendChatMessage, endChat };
};

export default useChatWebSocket;