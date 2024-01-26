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
                <div className="burger_menu">
                    <span onClick={menu_burger}><i className="fas fa-align-left"></i></span>
                </div>
                <div className={`nav_links ${show ? "mobile-menu" : "nav_links"}`}>
                    <ul>                       
                        <li><a href="#">Live</a></li>
                        <li><a href="#">Statistics</a></li>
                        <li><a href="#">Pre-match</a></li>
                        <li><a href="#">Key info</a></li>
                    </ul>
                </div>
                <div className="header-right">
                    <span><i className="fas fa-search"></i></span>
                    <span><i className="fas fa-user"></i></span>
                </div>
            </nav>
        </header>
    );
};

export default ExploreHeader;