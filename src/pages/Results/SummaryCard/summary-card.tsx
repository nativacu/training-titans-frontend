import { IonButton, IonCard, IonCardContent, IonCardTitle, IonIcon } from "@ionic/react"
import { downloadOutline } from "ionicons/icons";
import './summary-card.scss';
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { TranscriptEntry } from "../../../common/types/InterviewResults";

interface SummaryCardProps {
    transcript: TranscriptEntry[];
}

export const SummaryCard: React.FC<SummaryCardProps> = ({transcript}: SummaryCardProps) => {
    const [t] = useTranslation('common');
    const [downloadUrl, setDownloadUrl] = useState<string>('');

    useEffect(() => {
        const blob = new Blob([transcript.join('\n')], { type: 'text/plain' });
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
                {transcript.map((entry, index) => (
                    <div key={index}>
                        <div>
                            <h2>YOU</h2>
                            <div>{entry.interviewer}</div>
                        </div>
                        
                        <div>
                            <h2>CANDIDATE</h2>
                            <div>{entry.candidate}</div>
                        </div>
                    </div>

                ))}
            </IonCardContent>
        </IonCard>
    );
}