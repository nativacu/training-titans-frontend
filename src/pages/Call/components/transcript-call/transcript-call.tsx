import "./transcript-call.scss";

import { IonButton, IonIcon } from "@ionic/react";
import { sendOutline } from "ionicons/icons";

import { IonCol, IonRow } from "@ionic/react";
import { useEffect, useState } from "react";
import useChatWebSocket from "../../../../common/hooks/useChatWebSocket";

interface Message {
  type: "you" | "candidate";
  text: string;
}

const TranscriptCall = () => {
  const [transcript, setTranscript] = useState<Message[]>([]);
  const [message, setMessage] = useState("");  
  const { webSocketData, sendMessage } = useChatWebSocket();

  const handleClick = () => {
    if (message.length) {
      setTranscript([...transcript, {type: "you", text: message}]);
      sendMessage(message);
    }
  }

  useEffect(() => {
    if (webSocketData.data) {
      setTranscript([...transcript, {type: "candidate", text: webSocketData.data}])
    }
  }, [webSocketData]);


  return (
    <div className="section">
      <h2 className="subtitle">Transcript</h2>

      <div className="content-transcript">
        {transcript.map((item, index) => (
          <div className={`card `} key={index}>
            {/* <h3>{item.type}</h3> */}
            <div className={`content ${item.type === "you" && "you"}`}>
              {item.text}
            </div>
          </div>
        ))}
      </div>

      <IonRow
        style={{
          justifyContent: "center",
          alignItems: "Center",
          marginTop: "2em",
        }}
      >
        <IonCol size="10">
          <input
            type="text"
            className="input"
            placeholder="Write something..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </IonCol>
        <IonCol size="2">
          <IonButton size="default" color="primary" style={{ width: "100%" }} onClick={handleClick}>
            <IonIcon slot="start" icon={sendOutline} /> Send
          </IonButton>
        </IonCol>
      </IonRow>
    </div>
  );
};

export default TranscriptCall;
