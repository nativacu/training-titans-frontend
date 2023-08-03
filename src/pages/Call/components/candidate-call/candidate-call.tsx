import "./candidate-call.scss";

import { IonButton, IonIcon } from "@ionic/react";
import { volumeMediumOutline, micOutline } from "ionicons/icons";

const CandidateCall = () => {
  return (
    <>
      <div className="card-call">
        <h3>Candidate</h3>
        <div className="card-content" id="secundary">
          <div className="icon">
            <IonIcon slot="start" icon={volumeMediumOutline} />
          </div>
        </div>
      </div>
      <div className="card-call">
        <h3>You</h3>
        <div className="card-content" id="primary">
          <div className="icon">
            <IonIcon slot="start" icon={micOutline} />
          </div>
        </div>
      </div>
      <IonButton size="default" color="danger" style={{ width: "100%" }}>
        <IonIcon slot="start" icon={micOutline} /> Record
      </IonButton>
    </>
  );
};

export default CandidateCall;
