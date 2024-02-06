import {IonRouterLink } from '@ionic/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
const Comp_Login: React.FC = () => { 
    const history = useHistory();
    const [email, setEmail] = useState(""); 
    const [mdp, setMdp] = useState("");
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleMdpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMdp(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.get(`https://farm-production.up.railway.app/user/${email}/${mdp}`);
            const userId = response.data.id;
            const userNom = response.data.nom;
            const userEmail = response.data.email;
            
            localStorage.setItem('userId', userId);
            localStorage.setItem('userNom', userNom);
            localStorage.setItem('userEmail', userEmail);
            
            history.push(`/accueil/${userId}`);
        } catch (error) {
            console.error("Error:", error);
        }
    };

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
                    <form onSubmit={handleSubmit}>
                        <div className="form-input-log">
                            <input type="email" name="email" id="" placeholder="Entrer votre Email" onChange={handleEmailChange}/>
                        </div>
                        <div className="form-input-log">
                            <input type="password" name="mdp" id="" placeholder="Entrer votre Mot de passe" onChange={handleMdpChange}/>
                        </div>
                        <div className='btn-log'>
                            <div className='icon-btn-log'>
                                <span><i className='fas fa-angle-double-right'></i></span>
                            </div>
                            <input type="submit" value="Se connecter"/>
                        </div>
                    </form>
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
