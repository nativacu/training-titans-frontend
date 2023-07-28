import "./chat.scss";

import { IonButton, IonIcon } from "@ionic/react";
import { send } from "ionicons/icons";

import { IonCol, IonRow } from "@ionic/react";
import { useEffect, useState, useRef } from "react";
import useChatWebSocket from "../../../../common/hooks/useChatWebSocket";

interface Message {
  type: "you" | "candidate";
  text: string;
}
interface ChatProps {
  callId: number
}

const Chat: React.FC<ChatProps> = ({ callId }: ChatProps) => {
  const [transcript, setTranscript] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const { webSocketData, sendChatMessage } = useChatWebSocket(callId);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (message.length) {
      setTranscript([...transcript, { type: "you", text: message }]);
      sendChatMessage(message);
      setMessage('');
      inputRef.current?.focus();
    }
  }

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  }

  useEffect(() => {
    if (webSocketData.data) {
      setTranscript([...transcript, { type: "candidate", text: webSocketData.data }])
    }
  }, [webSocketData]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [transcript.length]);

  return (
    <div className="chat-container">

      <div className="content-transcript">
        {/* <div className={`card `}>
          <div className={`content`}>
            text
            <div className="arrow" />
          </div>
        </div> */}
        {transcript.map((item, index) => (
          <div className={`card ${item.type === "you" && "you"}`} key={index}>
            <div className={`content`}>
              {item.text}
            </div>
            <div className="arrow" />
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <IonRow className="ion-justify-content-center ion-align-items-center msg-input-container">
        <IonCol size="11">
          <input
            type="text"
            className="input"
            placeholder="Write something..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </IonCol>
        <IonCol size="1">
          <IonButton size="default" color="primary" style={{ width: "100%" }} className="send-button" onClick={handleClick}>
            <IonIcon icon={send} />
          </IonButton>
        </IonCol>
      </IonRow>
    </div>
  );
};
export default Chat