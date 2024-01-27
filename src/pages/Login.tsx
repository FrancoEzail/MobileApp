import { Comp_Login } from '../components/ExploreLogin';
import {IonRouterLink } from '@ionic/react';
const Login: React.FC = () => {
    return(
        <div className='container-login'>
            <div className='retour-btn'>
            <IonRouterLink href='/home'>
                <span><i className='fas fa-angle-left'></i></span>
            </IonRouterLink>
            </div>
            <Comp_Login />
        </div>
    );
}
export default Login;