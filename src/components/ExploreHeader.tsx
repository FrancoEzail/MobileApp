import React, { useState } from "react";
import {IonRouterLink } from '@ionic/react';
import { useParams } from "react-router";
interface HeaderProps {}
interface RouteParams {
    userId : string;
}
const ExploreHeader: React.FC<HeaderProps> = () => {
    const [show, setShow] = useState(false);
    const menu_burger = () => {
        setShow(!show);
    }
    const { userId } = useParams<RouteParams>();
    return(
        <header>
            <nav className='nav_bar'>
                <div className="burger_menu">
                    <span onClick={menu_burger}><i className="fas fa-align-left"></i></span>
                </div>
                <div className={`nav_links ${show ? "mobile-menu" : "nav_links"}`}>
                    <ul>                       
                        <IonRouterLink href={`/accueil/${userId}`}>
                            <li><a>Home</a></li>
                        </IonRouterLink>
                        <IonRouterLink href={`/profil/${userId}`}>
                            <li><a>Profil</a></li>
                        </IonRouterLink>
                        <IonRouterLink href='/'>
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