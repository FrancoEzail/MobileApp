import './ExploreHeader.css';
import React, { useState } from "react";
interface HeaderProps {}
const ExploreHeader: React.FC<HeaderProps> = () => {
    const [show, setShow] = useState(false);
    const menu_burger = () => {
        setShow(!show);
    }
    return(
        <header>
            <nav className='nav_bar'>
                <img src="./ws_logo.svg" alt="" className='logo'/>
                <div className={`nav_links ${show ? "mobile-menu" : "nav_links"}`}>
                    <ul>                       
                        <li><a href="#">Live</a></li>
                        <li><a href="#">Statistics</a></li>
                        <li><a href="#">Pre-match</a></li>
                        <li><a href="#">Key info</a></li>
                    </ul>
                </div>
                <img src="./burger.png" alt="burger_menu" onClick={menu_burger} className='burger_menu'></img>
            </nav>
        </header>
    );
};

export default ExploreHeader;