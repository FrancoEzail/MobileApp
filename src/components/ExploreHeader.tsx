import React, { useState } from "react";
interface HeaderProps {}
const ExploreHeader: React.FC<HeaderProps> = () => {
    const [show, setShow] = useState(false);
    const menu_burger = () => {
        setShow(!show);
    }
    return(
        <header>
            <div className="header-box">
                <div className="header-left">
                    <span><i className="fas fa-align-left"></i></span>
                </div>
                <div className="header-right">
                    <span><i className="fas fa-search"></i></span>
                    <span><i className="fas fa-user"></i></span>
                </div>
            </div>
            <img src="./burger.png" alt="burger_menu" onClick={menu_burger} className='burger_menu'></img>
        </header>
    );
};

export default ExploreHeader;