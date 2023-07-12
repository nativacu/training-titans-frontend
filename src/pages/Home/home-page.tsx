import { IonCol, IonContent, IonHeader, IonPage, IonRow } from '@ionic/react';
import { TechStackCard } from '../../components/TechStackCard/tech-stack-card';
import { AppTitle } from '../../components/AppTitle/app-title';
import { WebSocketService } from '../../services/web-socket-service';

import './home-page.scss';
import { PageSubtitle } from '../../components/PageContainer/PageSubtitle/page-subtitle';
import CardContainer from '../../components/CardContainer/card-container';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { TechStack } from '../../common/types/TechStack';
import NewTechStackModal from './components/NewTechStackModal/new-tech-stack-modal';

const HomePage: React.FC = () => {
  const [t] = useTranslation('common');

  const [techStacks, setTechStacks] = useState<TechStack[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  useEffect(() => {
    setTechStacks([
      {
        id: 1,
        creationDate: '01 Jul. 2023',
        name: 'React and NextJs',
        trainingCount: 2
      },
      {
        id: 2,
        creationDate: '01 Jul. 2023',
        name: 'Angular and NextJs',
        trainingCount: 0
      },
      {
        id: 3,
        creationDate: '01 Jul. 2023',
        name: 'Ionic React',
        trainingCount: 0
      },
      {
        id: 4,
        creationDate: '01 Jul. 2023',
        name: 'AWS and MySQL',
        trainingCount: 0
      }
    ])
  }, [])

  return (
    <IonPage>
      <IonHeader className="no-shadow-header">
        <AppTitle />
      </IonHeader>
      <IonContent fullscreen>
        <div className='home-container'>
          <IonRow>
            <PageSubtitle translationKey='HOME_PAGE.WELCOME' />
          </IonRow>
          <CardContainer className='ion-flex tech-stack-list'>
            <h2>{t('HOME_PAGE.SUBTITLE')}</h2>
            <IonRow className='gap-4'>
              <TechStackCard
                onClick={() => setModalIsOpen(true)} />
              {
                techStacks.map((stack) => {
                  return (
                    <TechStackCard
                      key={`stack-${stack.id}`}
                      techStack={stack}
                      onClick={(id) => console.log(id)} />
                  )
                })
              }
            </IonRow>
          </CardContainer>
        </div>
        <NewTechStackModal
          isOpen={modalIsOpen}
          onConfirm={() => { console.log('confirm') }}
          onDismiss={() => setModalIsOpen(false)}
        />
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
