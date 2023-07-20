import { IonTitle } from "@ionic/react"
import './app-title.scss';

export const AppTitle = () => {
    return (
        <IonTitle
            color="primary" 
            className="ion-text-center ion-text-primary ion-no-padding app-title">
            <h1>Training Titans</h1>
        </IonTitle>
    )
}