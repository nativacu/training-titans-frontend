import { InputChangeEventDetail, IonButton, IonInput } from "@ionic/react";
import { ChangeEvent, useState, useEffect } from "react";
import consumer, { CHANNEL_ID } from "../common/helpers/cable"
import useChatWebSocket from "../common/hooks/useChatWebSocket";

export const WebSocketComponent = () => {
    const [message, setMessage] = useState('');
    const { webSocketData, sendMessage } = useChatWebSocket();
  
    const handleSendMessage = () => {
      sendMessage(message);
      setMessage('');
    };
  
    return (
      <div>
        <div>WebSocket Connected: {webSocketData.connected ? 'Yes' : 'No'}</div>
        <div>WebSocket Data: {webSocketData.data}</div>
        <input value={message} onChange={(e) => setMessage(e.target.value)} />
        <button onClick={handleSendMessage}>Send Message</button>
      </div>
    );
};
