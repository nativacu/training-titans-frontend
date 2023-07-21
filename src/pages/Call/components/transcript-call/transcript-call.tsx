import "./transcript-call.scss";

import { IonButton, IonIcon } from "@ionic/react";
import { volumeMediumOutline, micOutline, sendOutline } from "ionicons/icons";

import { IonCol, IonContent, IonHeader, IonPage, IonRow } from "@ionic/react";

const TranscriptCall = () => {
  const transcript = [
    {
      type: "You",
      text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      type: "Candidate",
      text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      type: "You",
      text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
  ];

  return (
    <div className="section">
      <h2 className="subtitle">Transcript</h2>
      {transcript.map((item, index) => (
        <div className="card" key={index}>
          <h3>{item.type}</h3>
          <div className="content">{item.text}</div>
        </div>
      ))}

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
          />
        </IonCol>
        <IonCol size="2">
          <IonButton size="default" color="primary" style={{ width: "100%" }}>
            <IonIcon slot="start" icon={sendOutline} /> Send
          </IonButton>
        </IonCol>
      </IonRow>
    </div>
  );
};

export default TranscriptCall;
