import { IonCard, IonCardContent, IonCardTitle, IonIcon } from "@ionic/react"
import { closeSharp, checkmarkSharp } from "ionicons/icons";
import './recommendation-card.scss';
import { useTranslation } from "react-i18next";

interface RecommendationCardProps {
    isPositive: boolean,
    content: string[]
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({isPositive, content}: RecommendationCardProps) => {
    const [t] = useTranslation('common');

    return (
        <IonCard className="ion-padding recommendation-card">
            <IonCardTitle className="recommendation-card__title">
                <span className="recommendation-card__title">
                    {
                        isPositive ?
                        <>
                            <IonIcon size="large" color="success" icon={checkmarkSharp}/>
                            {t('RESULTS_PAGE.RECOMMENDATIONS.POSITIVE')}
                        </>
                        : 
                        <>
                            <IonIcon size="large" color="danger" icon={closeSharp}/>
                            {t('RESULTS_PAGE.RECOMMENDATIONS.NEGATIVE')}
                        </>
                    }
                </span>
            </IonCardTitle>
            <IonCardContent>                    
                <ul>
                    {content && content.map((item, index) => (
                        <li key={index}>
                        {item}
                        </li>
                    ))}
                </ul>
            </IonCardContent>
        </IonCard>
    );
}