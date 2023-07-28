import './home-page.scss';
import { IonRow, useIonRouter } from '@ionic/react';
import { TechStackCard } from '../../components/TechStackCard/tech-stack-card';
import CardContainer from '../../components/CardContainer/card-container';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { TechProfile } from '../../common/types/TechStack';
import NewTechStackModal from './components/NewTechStackModal/new-tech-stack-modal';
import { GeneralService } from '../../services/general.service';
import { PageContainer } from '../../components/PageContainer/page-container';

const HomePage: React.FC = () => {
  const [t] = useTranslation('common');
  const router = useIonRouter();
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
          <IonRow className='ion-justify-content-between gap-4'>
            <TechStackCard
              onClick={() => setModalIsOpen(true)} />
            {
              profiles.map((profile) => {
                return (
                  <TechStackCard
                    key={`profile-${profile.id}`}
                    profile={profile}
                    onClick={(id) => router.push(`/call/${id}/`, 'root')} />
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
