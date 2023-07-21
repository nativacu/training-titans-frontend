import { IonButton, IonCard, IonCardContent, IonCardTitle, IonIcon } from "@ionic/react"
import { downloadOutline } from "ionicons/icons";
import './summary-card.scss';
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface SummaryCardProps {
    transcript: string
}

export const SummaryCard: React.FC<SummaryCardProps> = ({transcript}: SummaryCardProps) => {
    const [t] = useTranslation('common');
    const [downloadUrl, setDownloadUrl] = useState<string>('');

    useEffect(() => {
        const blob = new Blob([transcript], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        setDownloadUrl(url);
    }, [transcript]);
    

    return (
        <IonCard className="ion-padding summary-card">
            <IonCardTitle>
                <div className="summary-card__header">
                    <span>{t('RESULTS_PAGE.SUMMARY.TITLE')}</span>
                    
                    <IonButton className="download-button" href={downloadUrl} download="interview_transcript.txt">
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