const Comp_list_terrain: React.FC = () => {
    return(
        <div className="filtre-box">
            <div className='right-arrow'>
                <div className='table-title'>
                    <h3>Liste parcelle en attente de validation</h3>
                </div>
                <span><i className="fas fa-arrow-right"></i></span>
            </div>
            <div className="limit-scroll-1">
            <table className="tableau_style">
                <thead>
                    <tr>
                        <th>Proprio</th>
                        <th>Terrain</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jean</td>
                        <td>P1</td>
                        <td><a href="">Valider</a></td>
                    </tr>
                </tbody>
            </table>
            </div>  
        </div>
    );
};

const Comp_ajout_culture: React.FC = () => {
    return(
        <div className="card-form">
        <div className="sub-title-form">
            <h3>Creer un terrain</h3>
            <div className="circle2">
                <span><i className="fas fa-circle"></i></span>
                <span><i className="far fa-circle"></i></span>
            </div>
        </div>
        <div className="form-group">
            <div className="form-input">
                <input type="text" placeholder="Nom de culture" name=""/>
            </div>
            <div className="form-input">
                <input type="text" placeholder="Rendement" name=""/>
            </div>
            <div className="form-input">
                <input type="number" placeholder="Prix de culture" name=""/>
            </div>
            <div className="form-input">
                <input type="number" placeholder="Durree" name=""/>
            </div>
            <div className='sub-btn'>
                <input type="submit" value="Valider" />
                <div className='right-arrow-btn'>
                    <span><i className="fas fa-arrow-right"></i></span>
                </div>
            </div>
        </div>
    </div>
    );
};

export { Comp_list_terrain, Comp_ajout_culture };
