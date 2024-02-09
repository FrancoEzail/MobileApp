import ExploreHeader from '../components/ExploreHeader';
import { Comp_terrain_liste, Comp_parcelle_detail, Comp_historique, Comp_discu } from '../components/ExploreProfil';
import { Comp_profil } from '../components/ExploreAccueil';
const Profil: React.FC = () => {
    return(
        <>
            <ExploreHeader />
            <div className="container-profil">
                <div className="left-section">
                   <Comp_profil />
                   <Comp_terrain_liste />
                </div>
                <div className="center-section">
                   <Comp_parcelle_detail />
                   <Comp_historique />
                </div>
                <div className="right-section">
                  <Comp_discu />
                </div>
            </div>
        </>
    );
}
export default Profil;