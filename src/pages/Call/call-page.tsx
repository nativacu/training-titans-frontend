import {
	IonCol,
	IonContent,
	IonHeader,
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

import { RouteComponentProps, useLocation } from "react-router";
import { LocationState } from "history";
import { exit } from "ionicons/icons";
import VoiceCall from "./components/voice-call/voice-call";
import Chat from "./components/chat/chat";

interface CallPageProps extends RouteComponentProps<{
    callId: string;
}> { callId: string; }


const CallPage: React.FC<CallPageProps> = ({ match }) => {
	const [t] = useTranslation("common");
	const callId = match.params.callId;
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
								<VoiceCall />
							</IonCol>
							<IonCol size="9" className="chat">
								<Chat callId={Number(callId)} />
							</IonCol>
						</IonRow>
					</CardContainer>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default CallPage;
