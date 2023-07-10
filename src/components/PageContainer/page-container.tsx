import { IonContent } from "@ionic/react";
import { AppTitle } from "../AppTitle/app-title"
import { PageSubtitle } from "./PageSubtitle/page-subtitle";

interface PageContainerProps {
    subtitle: string,
    children: JSX.Element[] | string,
}

export const PageContainer = ({ subtitle, children }: PageContainerProps) => {
    return (
        <IonContent className="page-container ion-padding">
            <AppTitle/>
            <PageSubtitle translationKey={subtitle}/>
            {children}
        </IonContent>
    );
};