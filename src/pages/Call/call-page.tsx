import {
  IonCol,
  IonContent,
  IonPage,
  IonRow,
  IonButton,
  IonIcon,
  useIonRouter,
} from "@ionic/react";
import "./call-page.scss";
import { PageSubtitle } from "../../components/PageContainer/PageSubtitle/page-subtitle";
import CardContainer from "../../components/CardContainer/card-container";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import CandidateCall from "./components/voice-call/voice-call";
import TranscriptCall from "./components/chat/chat";

import { exit } from "ionicons/icons";

const CallPage: React.FC = () => {
  const [t] = useTranslation("common");
  const router = useIonRouter();

  const handleClose = () => router.push('/results', 'forward');

  useEffect(() => { }, []);

  return (
    <IonPage className="call-page">
      <IonContent fullscreen>
        <div className="call-page-container">
          <IonRow className="call-header ion-justify-content-center ion-align-items-start">
            <IonCol>
              <PageSubtitle translationKey="Training React and Next Js" />
            </IonCol>
            <IonCol className="ion-text-right">
              <IonButton size="default" color="danger" fill="clear" onClick={handleClose}>
                <IonIcon slot="end" icon={exit} /> End training
              </IonButton>
            </IonCol>
          </IonRow>

          <CardContainer className="ion-flex call-container">
            <IonRow>
              <IonCol size="3">
                <CandidateCall />
              </IonCol>
              <IonCol size="9" className="chat">
                <TranscriptCall />
              </IonCol>
            </IonRow>
          </CardContainer>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CallPage;
