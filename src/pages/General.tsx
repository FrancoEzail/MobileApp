import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import ExploreHeader from '../components/ExploreHeader';
import './General.css';

const General: React.FC = () => {
  return (
    <div className='page'>
        <ExploreHeader />
        <ExploreContainer />
    </div>
  );
};

export default General;
