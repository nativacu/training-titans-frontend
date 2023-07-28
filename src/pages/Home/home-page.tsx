import { IonCol, IonContent, IonHeader, IonPage, IonRow } from '@ionic/react';
import { TechStackCard } from '../../components/TechStackCard/tech-stack-card';
import { AppTitle } from '../../components/AppTitle/app-title';
import { WebSocketComponent } from '../../services/web-socket-service';

import './home-page.scss';
import { PageSubtitle } from '../../components/PageContainer/PageSubtitle/page-subtitle';
import CardContainer from '../../components/CardContainer/card-container';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { TechProfile, TechStack } from '../../common/types/TechStack';
import NewTechStackModal from './components/NewTechStackModal/new-tech-stack-modal';
import { GeneralService } from '../../services/general.service';
import { PageContainer } from '../../components/PageContainer/page-container';

const HomePage: React.FC = () => {
  const [t] = useTranslation('common');

  const [profiles, setProfiles] = useState<TechProfile[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    new GeneralService().getProfiles().then((result) => {
      setProfiles([...result.data.profiles])
    })
  }, [])

  return (
    <PageContainer subtitle={'HOME_PAGE.SUBTITLE'} className='home-page'>
      <div className='home-container'>
        <CardContainer className='ion-flex tech-stack-list'>
          <IonRow className='ion-justify-content-between'>
            <TechStackCard
              onClick={() => setModalIsOpen(true)} />
            {
              profiles.map((profile) => {
                return (
                  <TechStackCard
                    key={`profile-${profile.id}`}
                    profile={profile}
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
    </PageContainer>
  );
};

export default HomePage;
