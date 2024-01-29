import {IonRouterLink } from '@ionic/react';
const Comp_Login: React.FC = () => { 
    return(
        <div className="login-card">
            <div className='head-log'>
                <div className='retour-btn'>
                    <IonRouterLink href='/home'>
                        <span><i className='fas fa-angle-left'></i></span>
                    </IonRouterLink>
                </div>
                <div className='table-title'>
                    <h3>Veuillez-vous connectez</h3>
                </div>
                <div className='right-arrow-log'>
                    <span><i className="fas fa-arrow-right"></i></span>
                </div>
            </div>

            <div className="comp-log">
                <div className="have-account">
                    <p>Pas de compte? 
                    <IonRouterLink href='/inscription'>
                        <span><a>S' inscrire</a></span>
                    </IonRouterLink>
                    </p>
                </div>
                <div className="login-title">
                    <h1 className="fill-text">Welcome</h1>
                    <h1 className="stroke-text">to Culture</h1>
                    <h1 className="stroke-text">moderne</h1>
                </div>
                <div className="form-group-log">
                    <div className="form-input-log">
                        <input type="email" name="" id="" placeholder="Entrer votre Email"/>
                    </div>
                    <div className="form-input-log">
                        <input type="password" name="" id="" placeholder="Entrer votre Mot de passe"/>
                    </div>
                    <div className='btn-log'>
                        <div className='icon-btn-log'>
                            <span><i className='fas fa-angle-double-right'></i></span>
                        </div>
                        <IonRouterLink href='/accueil'>
                            <input type="submit" value="Se connecter"/>
                        </IonRouterLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Comp_Inscrit: React.FC = () => { 
    return(
        <>
            <div className="login-card">
            <div className='head-log'>
                <div className='retour-btn'>
                <IonRouterLink href='/home'>
                    <span><i className='fas fa-angle-left'></i></span>
                </IonRouterLink>
                </div>
                    <div className='table-title'>
                        <h3>Veuillez-vous inscrire</h3>
                    </div>
                <div className='right-arrow-log'>
                    <span><i className="fas fa-arrow-right"></i></span>
                </div>
            </div>
                <div className="comp-log">
                    <div className="have-account">
                        <p>Deja inscrit? 
                        <IonRouterLink href='/login'>
                            <span><a>Se connecter</a></span>
                        </IonRouterLink>
                        </p>
                    </div>
                    <div className="form-group-log">
                        <div className="form-input-log">
                            <input type="text" name="" id="" placeholder="Entrer votre Nom"/>
                        </div>
                        <div className="form-input-log">
                            <input type="email" name="" id="" placeholder="Entrer votre Email"/>
                        </div>
                        <div className="form-input-log">
                            <input type="password" name="" id="" placeholder="Entrer votre Mot de passe"/>
                        </div>
                        <div className="form-input-log">
                            <input type="password" name="" id="" placeholder="Confirmer Mot de passe"/>
                        </div>
                        <div className='btn-log'>
                            <div className='icon-btn-log'>
                                <span><i className='fas fa-angle-double-right'></i></span>
                            </div>
                            <IonRouterLink href='/accueil'>
                                <input type="submit" value="S' inscrire"/>
                            </IonRouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export {Comp_Login, Comp_Inscrit};
