import { useEffect, useState } from 'react';
import consumer, { CHANNEL_ID } from '../../helpers/cable';

interface WebSocketData {
  connected: boolean;
  data: any;
}

const useChatWebSocket = () => {
  const [webSocketData, setWebSocketData] = useState<WebSocketData>({
    connected: false,
    data: null,
  });

  useEffect(() => {
    const subscription = consumer.subscriptions.create(
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
      subscription.unsubscribe();
    };
  }, []);

  const sendMessage = (message: string) => {
    const action = { action: 'respond', data: message };

    consumer.send({
      identifier: JSON.stringify(CHANNEL_ID),
      command: 'message',
      data: JSON.stringify(action),
    });
  };

  return { webSocketData, sendMessage };
};

export default useChatWebSocket;