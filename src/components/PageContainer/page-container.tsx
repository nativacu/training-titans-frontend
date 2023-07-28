import { IonPage, IonContent, IonHeader } from "@ionic/react";
import { AppTitle } from "../AppTitle/app-title"
import { PageSubtitle } from "./PageSubtitle/page-subtitle";
import './page-container.scss'; 
interface PageContainerProps {
    className: string,
    subtitle: string,
    children: JSX.Element[] | JSX.Element | string,
}

export const PageContainer = ({ className, subtitle, children }: PageContainerProps) => {
    return (
        <IonPage className={`page-container ${className}`}>
            <IonHeader className="no-shadow-header">
                <AppTitle />
            </IonHeader>
            <IonContent fullscreen>
                <PageSubtitle translationKey={subtitle} />
                {children}
            </IonContent>
        </IonPage>
    );
};