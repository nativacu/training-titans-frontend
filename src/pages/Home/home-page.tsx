import { IonContent, IonHeader, IonPage } from '@ionic/react';
import { TechStackCard } from '../../components/TechStackCard/tech-stack-card';
import { AppTitle } from '../../components/AppTitle/app-title';
import './home-page.scss';

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="no-shadow-header">
        <AppTitle/>
      </IonHeader>
      <IonContent fullscreen>
        <div className='ion-flex'>
          <TechStackCard id={1} label='Test Card' onClick={(id) => console.log(id)} trainingCount={0} footer={(<>footer</>)}>
            dajshiahd
          </TechStackCard>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default HomePage;
