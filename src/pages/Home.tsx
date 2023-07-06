import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.scss';
import { TechStackCard } from '../components/TechStackCard/tech-stack-card';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='ion-flex'>
          <TechStackCard id={1} label='Test Card' onClick={(id) => console.log(id)} trainingCount={0} footer={(<>footer</>)}>
            dajshiahd
          </TechStackCard>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Home;
