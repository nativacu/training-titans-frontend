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
  reloadOutline,
  closeOutline,
} from "ionicons/icons";
import { useHistory } from "react-router";

const HomePage: React.FC = () => {
  const [t] = useTranslation("common");
  const history = useHistory();

  const handleClose = () => {
    history.push({
      pathname: '/results',
      state: {
        positiveFeedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus eget justo a facilisis. Nullam semper id neque ut malesuada. Aenean elementum lectus eget laoreet tincidunt. Nunc aliquam elit id consequat dignissim. Mauris vitae tellus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum enim sed diam suscipit sodales. Mauris nec ex eget diam sagittis tempor condimentum eu nisl. Cras sagittis pharetra varius. Proin lorem arcu, blandit ac pharetra sed, viverra ut mauris. Ut ut sapien nec erat tincidunt eleifend semper vitae diam. Mauris lacinia tempus ex, a pulvinar justo cursus id. Morbi vitae velit ac nisi imperdiet finibus.",
        negativeFeedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus eget justo a facilisis. Nullam semper id neque ut malesuada. Aenean elementum lectus eget laoreet tincidunt. Nunc aliquam elit id consequat dignissim. Mauris vitae tellus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum enim sed diam suscipit sodales. Mauris nec ex eget diam sagittis tempor condimentum eu nisl. Cras sagittis pharetra varius. Proin lorem arcu, blandit ac pharetra sed, viverra ut mauris. Ut ut sapien nec erat tincidunt eleifend semper vitae diam. Mauris lacinia tempus ex, a pulvinar justo cursus id. Morbi vitae velit ac nisi imperdiet finibus.",
        transcript:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus eget justo a facilisis. Nullam semper id neque ut malesuada. Aenean elementum lectus eget laoreet tincidunt. Nunc aliquam elit id consequat dignissim. Mauris vitae tellus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum enim sed diam suscipit sodales. Mauris nec ex eget diam sagittis tempor condimentum eu nisl. Cras sagittis pharetra varius. Proin lorem arcu, blandit ac pharetra sed, viverra ut mauris. Ut ut sapien nec erat tincidunt eleifend semper vitae diam. Mauris lacinia tempus ex, a pulvinar justo cursus id. Morbi vitae velit ac nisi imperdiet finibus. bUt vestibulum finibus velit, non ullamcorper ex molestie quis. Mauris porttitor dapibus leo, at interdum justo efficitur vel. Nulla blandit ullamcorper leo, id elementum lectus tristique a. Cras imperdiet faucibus posuere. Pellentesque hendrerit sapien non nulla lobortis luctus. Proin libero lacus, condimentum ac nunc nec, ornare pellentesque nulla. Nam in risus dui. Mauris convallis mi augue, in elementum nulla pellentesque ultrices. Duis ultricies quam vitae metus placerat, eu ultrices nisi scelerisque."
      }
    });
  };  

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
              <IonButton size="default" color="danger" fill="outline" onClick={handleClose}>
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
