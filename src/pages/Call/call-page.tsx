import {
  IonCol,
  IonContent,
  IonHeader,
  IonPage,
  IonRow,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { AppTitle } from "../../components/AppTitle/app-title";
import "./call-page.scss";
import { PageSubtitle } from "../../components/PageContainer/PageSubtitle/page-subtitle";
import CardContainer from "../../components/CardContainer/card-container";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import CandidateCall from "./components/candidate-call/candidate-call";
import TranscriptCall from "./components/transcript-call/transcript-call";

import {
  volumeMediumOutline,
  sendOutline,
  reloadOutline,
  closeOutline,
} from "ionicons/icons";

const HomePage: React.FC = () => {
  const [t] = useTranslation("common");

  useEffect(() => {}, []);

  return (
    <IonPage>
      <IonHeader className="no-shadow-header">
        <AppTitle />
      </IonHeader>
      <IonContent fullscreen>
        <div className="home-container">
          <IonRow
            style={{
              justifyContent: "center",
              alignItems: "Center",
              marginTop: "2em",
            }}
          >
            <IonCol>
              <PageSubtitle translationKey="Training React and Next Js" />
            </IonCol>
            <IonCol style={{ textAlign: "right" }}>
              <IonButton size="default" color="danger" fill="outline">
                <IonIcon slot="start" icon={closeOutline} /> Finish
              </IonButton>
              <IonButton size="default" color="primary">
                <IonIcon slot="start" icon={reloadOutline} /> Restart
              </IonButton>
            </IonCol>
          </IonRow>
          <h2 className="subtitle">Call</h2>
          <CardContainer className="ion-flex tech-stack-list">
            <IonRow
              style={{
                width: "100% !important",
              }}
            >
              <IonCol size="3">
                <CandidateCall />
              </IonCol>
              <IonCol size="9">
                <TranscriptCall />
              </IonCol>
            </IonRow>
          </CardContainer>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
