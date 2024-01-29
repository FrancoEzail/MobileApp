import React, { useState } from "react";
import {IonRouterLink } from '@ionic/react';
interface HeaderProps {}
const ExploreHeader: React.FC<HeaderProps> = () => {
    const [show, setShow] = useState(false);
    const menu_burger = () => {
        setShow(!show);
    }
    return(
        <header>
            <nav className='nav_bar'>
                <div className="burger_menu">
                    <span onClick={menu_burger}><i className="fas fa-align-left"></i></span>
                </div>
                <div className={`nav_links ${show ? "mobile-menu" : "nav_links"}`}>
                    <ul>                       
                        <li><a href="">Home</a></li>
                        <IonRouterLink href='/accueil'>
                            <li><a>Parcelle</a></li>
                        </IonRouterLink>
                        <IonRouterLink href='/profil'>
                            <li><a>Profil</a></li>
                        </IonRouterLink>
                        <IonRouterLink href='/login'>
                            <li><a>Log out</a></li>
                        </IonRouterLink>
                    </ul>
                </div>
                <div className="header-right">
                    <span><i className="fas fa-search"></i></span>
                    <IonRouterLink href='/profil' className="fotsy">
                        <span><i className="fas fa-user"></i></span>
                    </IonRouterLink>
                </div>
            </nav>
        </header>
    );
};

export default ExploreHeader;