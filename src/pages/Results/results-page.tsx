import './results-page.scss';
import { PageContainer } from "../../components/PageContainer/page-container";
import { RecommendationCard } from './RecommendationCard/recommendation-card';
import { SummaryCard } from './SummaryCard/summary-card';
import { IonCol, IonContent, IonGrid, IonRow } from '@ionic/react';
import { match } from 'react-router-dom';
import { useInterviewContext } from '../../common/hooks/useInterviewContext';

export const ResultsPage: React.FC<any> = ({ match }) => {
	const callId = Number(match.params.callId || 0);
    const { interviewResults } = useInterviewContext();

    // Temporary data
    const transcript = 'hello world'.repeat(100);
    return (
        <PageContainer subtitle='RESULTS_PAGE.SUBTITLE' className='results-page'>
            <IonGrid>
                <IonRow>
                    <IonCol size='6'>
                        <IonRow>
                            <RecommendationCard
                                isPositive={true}
                                content={ interviewResults?.feedback && interviewResults.feedback.positive}
                            />
                        </IonRow>
                        <IonRow>
                            <RecommendationCard
                                isPositive={false}
                                content={interviewResults?.feedback && interviewResults.feedback.negative}
                            />
                        </IonRow>
                    </IonCol>
                    <IonCol size='6' className='results-page__column'>
                        <SummaryCard transcript={transcript} />
                    </IonCol>
                </IonRow>
            </IonGrid>
        </PageContainer>
    );
}