import React from 'react';
import './results-page.scss';
import { PageContainer } from "../../components/PageContainer/page-container";
import { RecommendationCard } from './RecommendationCard/recommendation-card';
import { SummaryCard } from './SummaryCard/summary-card';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

interface ResultsPageProps {
    positiveFeedback: string,
    negativeFeedback: string,
    transcript: string,
}

export const ResultsPage: React.FC<ResultsPageProps> = (
    {
        positiveFeedback = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus eget justo a facilisis. Nullam semper id neque ut malesuada. Aenean elementum lectus eget laoreet tincidunt. Nunc aliquam elit id consequat dignissim. Mauris vitae tellus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum enim sed diam suscipit sodales. Mauris nec ex eget diam sagittis tempor condimentum eu nisl. Cras sagittis pharetra varius. Proin lorem arcu, blandit ac pharetra sed, viverra ut mauris. Ut ut sapien nec erat tincidunt eleifend semper vitae diam. Mauris lacinia tempus ex, a pulvinar justo cursus id. Morbi vitae velit ac nisi imperdiet finibus.",
        negativeFeedback = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus eget justo a facilisis. Nullam semper id neque ut malesuada. Aenean elementum lectus eget laoreet tincidunt. Nunc aliquam elit id consequat dignissim. Mauris vitae tellus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum enim sed diam suscipit sodales. Mauris nec ex eget diam sagittis tempor condimentum eu nisl. Cras sagittis pharetra varius. Proin lorem arcu, blandit ac pharetra sed, viverra ut mauris. Ut ut sapien nec erat tincidunt eleifend semper vitae diam. Mauris lacinia tempus ex, a pulvinar justo cursus id. Morbi vitae velit ac nisi imperdiet finibus.",
        transcript = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus eget justo a facilisis. Nullam semper id neque ut malesuada. Aenean elementum lectus eget laoreet tincidunt. Nunc aliquam elit id consequat dignissim. Mauris vitae tellus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum enim sed diam suscipit sodales. Mauris nec ex eget diam sagittis tempor condimentum eu nisl. Cras sagittis pharetra varius. Proin lorem arcu, blandit ac pharetra sed, viverra ut mauris. Ut ut sapien nec erat tincidunt eleifend semper vitae diam. Mauris lacinia tempus ex, a pulvinar justo cursus id. Morbi vitae velit ac nisi imperdiet finibus. bUt vestibulum finibus velit, non ullamcorper ex molestie quis. Mauris porttitor dapibus leo, at interdum justo efficitur vel. Nulla blandit ullamcorper leo, id elementum lectus tristique a. Cras imperdiet faucibus posuere. Pellentesque hendrerit sapien non nulla lobortis luctus. Proin libero lacus, condimentum ac nunc nec, ornare pellentesque nulla. Nam in risus dui. Mauris convallis mi augue, in elementum nulla pellentesque ultrices. Duis ultricies quam vitae metus placerat, eu ultrices nisi scelerisque.",
    }: ResultsPageProps) => {
        
    return (
        <PageContainer subtitle='RESULTS_PAGE.SUBTITLE'>
            <IonGrid className='results-page'>
                <IonRow>
                    <IonCol size='6'>
                        <IonRow>
                            <RecommendationCard 
                                isPositive={true}
                                content={positiveFeedback}
                            />
                        </IonRow>
                        <IonRow>
                            <RecommendationCard 
                                isPositive={false}
                                content={negativeFeedback}
                            />
                        </IonRow>
                    </IonCol>
                    <IonCol size='6' className='results-page__column'>
                        <SummaryCard transcript={transcript}/>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </PageContainer>
    );
}