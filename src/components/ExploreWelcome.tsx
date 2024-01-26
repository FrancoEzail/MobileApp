import data_img from '../data_img';
import {IonRouterLink } from '@ionic/react';
import { useHistory } from 'react-router-dom';
const Comp_Welcome: React.FC = () => {
    const history = useHistory();
    const navigateToMainAccueil = () => {
        history.push('/mainAccueil');
    };

    return (
        <div className="welcome">
            <div className="grand-title">
                <h1>Grow Your</h1>
                <h1>Own <span>Favourite</span></h1>
                <h1>Culture</h1>
            </div>
            <div className="welc-group-btn">
                <div className="home-btn">
                    <a href="">Home <span><i className="fas fa-home"></i></span></a>
                </div>
                <div className="sign-btn">
                <IonRouterLink onClick={navigateToMainAccueil}>
                    <a>Sign in</a><span><i className="fas fa-arrow-right"></i></span>
                </IonRouterLink>
                </div>
            </div>
        </div>
    );
};

const Comp_Card_Shop: React.FC = () => {
    return(
        <div className="card">
            <div className="card-img">
            {
                data_img.map((parcel, index) => (
                    <img src={parcel.parcelle} alt=""/>            
                ))
            }   
            </div>
            <div className="card-detail">
                <h4>Culture</h4>
                <div className="shop-btn">
                    <a href="">SHOP NOW</a>
                </div>
            </div>
        </div>
    );
};
export { Comp_Welcome , Comp_Card_Shop };