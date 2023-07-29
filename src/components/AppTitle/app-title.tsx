import { IonTitle, useIonRouter } from "@ionic/react"
import './app-title.scss';

export const AppTitle = () => {
    const router = useIonRouter();
    return (
        <IonTitle
            onClick={() => router.push('/home', 'back')}
            color="primary" 
            className="ion-text-center ion-text-primary ion-no-padding app-title">
            <h1>SimuLearn</h1>
        </IonTitle>
    )
}