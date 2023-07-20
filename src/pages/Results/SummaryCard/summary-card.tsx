import { IonButton, IonCard, IonCardContent, IonCardTitle, IonIcon } from "@ionic/react"
import { downloadOutline } from "ionicons/icons";
import './summary-card.scss';
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface SummaryCardProps {
    transcript: string
}

export const SummaryCard: React.FC<SummaryCardProps> = ({transcript}: SummaryCardProps) => {
    const [t] = useTranslation('common');

    useEffect(() => {
        // Call the API to get the download url
        // Set the download url in the state variable
    }, [transcript]);
    
    return (
        <IonCard className="ion-padding summary-card">
            <IonCardTitle>
                <div className="summary-card__header">
                    <span>{t('RESULTS_PAGE.SUMMARY.TITLE')}</span>
                    
                    <IonButton className="download-button">
                        <IonIcon size="large" icon={downloadOutline}/>
                    </IonButton>
                </div>
            </IonCardTitle>

            <IonCardContent>
                {transcript}
            </IonCardContent>
        </IonCard>
    );
}