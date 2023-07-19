import { IonCard, IonCardContent, IonCardTitle, IonIcon } from "@ionic/react"
import { closeSharp, checkmarkSharp } from "ionicons/icons";

interface RecommendationCardProps {
    isPositive: boolean,
    content: string
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({isPositive, content}: RecommendationCardProps) => {
    return (
        <IonCard className="ion-padding">
            <IonCardTitle>
                {
                    isPositive ?
                        <span>
                            <IonIcon icon={closeSharp}/>
                            Do
                        </span> :
                        <span>
                            <IonIcon icon={checkmarkSharp}/>
                            Don't
                        </span>
                }
            </IonCardTitle>
            <IonCardContent>
                {content}
            </IonCardContent>
        </IonCard>
    );
}