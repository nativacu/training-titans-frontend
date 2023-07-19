import { IonButton, IonCard, IonCardContent, IonCardTitle, IonIcon } from "@ionic/react"
import { downloadOutline } from "ionicons/icons";
import './summary-card.scss';
import { useEffect } from "react";

interface SummaryCardProps {
    transcript: string
}

export const SummaryCard: React.FC<SummaryCardProps> = ({transcript}: SummaryCardProps) => {
    useEffect(() => {
        // Call the API to get the download url
        // Set the download url in the state variable
    }, [transcript]);
    
    return (
        <IonCard className="ion-padding summary-card">
            <IonCardTitle>
                <div className="summary-card__header">
                    <span>Summary</span>
                    <IonButton>
                        <IonIcon slot="icon-only" icon={downloadOutline}></IonIcon>
                    </IonButton>
                </div>
                
            </IonCardTitle>
            <IonCardContent>
                {transcript}
            </IonCardContent>
        </IonCard>
    );
}