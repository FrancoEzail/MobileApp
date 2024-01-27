import { Comp_Inscrit } from '../components/ExploreLogin';
import {IonRouterLink } from '@ionic/react';
const Inscrit: React.FC = () => {
    return(
        <div className='container-login'>
            <div className='retour-btn'>
            <IonRouterLink href='/home'>
                <span><i className='fas fa-angle-left'></i></span>
            </IonRouterLink>
            </div>
            <Comp_Inscrit />
        </div>
    );
};
export default Inscrit;