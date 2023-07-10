import { IonTitle } from "@ionic/react"
import './app-title.scss';

export const AppTitle = () => {
    return (
        <IonTitle color="primary" className="ion-text-center ion-text-primary">
            <h1 className="app-title">Training Titans</h1>
        </IonTitle>
    )
}