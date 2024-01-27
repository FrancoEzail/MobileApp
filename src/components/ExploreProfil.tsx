import data_img from '../data_img';

const Comp_parcelle_culture: React.FC = () => {
    return(
        <div className="filtre-box">
            <div className='right-arrow'>
                <div className='table-title'>
                    <h3>Liste parcelle par culture</h3>
                </div>
                <span><i className="fas fa-arrow-right"></i></span>
            </div>
            <div className="limit-scroll-1">
            <table className="tableau_style">
                <thead>
                    <tr>
                        <th>Culture</th>
                        <th>Parcelle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Corn</td>
                        <td>P1</td>
                    </tr>
                    <tr>
                        <td>Corn</td>
                        <td>P1</td>
                    </tr>
                    <tr>
                        <td>Corn</td>
                        <td>P1</td>
                    </tr>
                </tbody>
            </table>
            </div>  
        </div>
    );
};

const Comp_parcelle_detail: React.FC = () => {
    return(
    <div className="filtre-box2">
        <div className='right-arrow'>
            <div className='table-title'>
                <h3>Details parcelle</h3>
            </div>
            <span><i className="fas fa-arrow-right"></i></span>
        </div>
        <div className="limit-scroll-2">
            <table className="tableau_style">
                <thead>
                    <tr>
                        <th>Parcelle</th>
                        <th>Culture</th>
                        <th>Etat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>P1</td>
                        <td>Corn</td>                    
                        <td>En cours</td>
                    </tr>
                    <tr>
                        <td>P1</td>
                        <td>Corn</td>                    
                        <td>En cours</td>
                    </tr>
                    <tr>
                        <td>P1</td>
                        <td>Corn</td>                    
                        <td>En cours</td>
                    </tr>
                </tbody>
            </table>
        </div>  
    </div>
    );
};

const Comp_historique: React.FC = () => {
    return(
    <div className="filtre-box2">
        <div className='right-arrow'>
            <div className='table-title'>
                <h3>Historique culture finis</h3>
            </div>
            <span><i className="fas fa-arrow-right"></i></span>
        </div>
        <div className="limit-scroll-2">
            <table className="tableau_style">
                <thead>
                    <tr>
                        <th>Culture</th>
                        <th>Recolte</th>
                        <th>Etat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Corn</td>
                        <td>1500Kg</td>                    
                        <td>En cours</td>
                    </tr>
                    <tr>
                        <td>Corn</td>
                        <td>1500Kg</td>                    
                        <td>En cours</td>
                    </tr>
                    <tr>
                        <td>Corn</td>
                        <td>1500Kg</td>                    
                        <td>En cours</td>
                    </tr>
                    <tr>
                        <td>Corn</td>
                        <td>1500Kg</td>                    
                        <td>En cours</td>
                    </tr>
                </tbody>
            </table>
        </div>  
    </div>
    );
};

const Comp_discu: React.FC = () => {
    return(
        <div className='discu-card'>
        <div className='discu-title'>
            <div className='table-title'>
                <h3>Discussion</h3>
            </div>
            <div className="circle">
                <span><i className="fas fa-circle"></i></span>
                <span><i className="far fa-circle"></i></span>
            </div>
        </div>
        <div className='discu-list'>
            <div className='discu-links'>
                {
                    data_img.map((profil, index) => (
                        <img src={profil.profil} alt="" className='discu-profil-img'/>            
                    ))
                }  
                <p className='nom-profil'>Jean</p>
            </div>
            <div className='discu-links'>
                {
                    data_img.map((p2, index) => (
                        <img src={p2.p2} alt="" className='discu-profil-img'/>            
                    ))
                }  
                <p className='nom-profil'>Franco</p>
            </div>
            <div className='discu-links'>
                {
                    data_img.map((p3, index) => (
                        <img src={p3.p3} alt="" className='discu-profil-img'/>            
                    ))
                }  
                <p className='nom-profil'>Mini</p>
            </div>
            <div className='discu-links'>
               {
                    data_img.map((p4, index) => (
                        <img src={p4.p4} alt="" className='discu-profil-img'/>            
                    ))
                }  
                <p className='nom-profil'>Toky</p>
            </div>
            <div className='discu-links'>
                {
                    data_img.map((profil, index) => (
                        <img src={profil.profil} alt="" className='discu-profil-img'/>            
                    ))
                }  
                <p className='nom-profil'>Rason</p>
            </div>
            <div className='discu-links'>
                {
                    data_img.map((p2, index) => (
                        <img src={p2.p2} alt="" className='discu-profil-img'/>            
                    ))
                }  
                <p className='nom-profil'>Joh</p>
            </div>
            <div className='discu-links'>
                {
                    data_img.map((p3, index) => (
                        <img src={p3.p3} alt="" className='discu-profil-img'/>            
                    ))
                }  
                <p className='nom-profil'>Nary</p>
            </div>
        </div>
        <div className='bloc-discu'>
            <div className='bloc-message'>
                <div className='mess-receive'>
                    {
                        data_img.map((p2, index) => (
                            <img src={p2.p2} alt="" className='discu-profil-img'/>            
                        ))
                    }  
                    <div className='mess-p'>
                        <p>Kez!!</p>
                    </div>
                    <div className='time-p'>
                        <p>8:00</p>
                    </div>
                </div>
                <div className='mess-send'>
                    <div className='time-p'>
                        <p>8:00</p>
                    </div>
                    <div className='mess-p2'>
                        <p>Kez!!</p>
                    </div>
                    {
                        data_img.map((p2, index) => (
                            <img src={p2.p2} alt="" className='discu-profil-img'/>            
                        ))
                    }  
                </div>
            </div>
            <div className='input-message'>
                <input type="text" placeholder='Votre message..' />
                <div className='icon-btn'>
                    <span><i className='fas fa-paper-plane'></i></span>
                </div>
            </div>
        </div>
    </div>
    );
};

export { Comp_parcelle_culture, Comp_parcelle_detail, Comp_historique, Comp_discu };