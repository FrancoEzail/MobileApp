import {Comp_SubTitle, Comp_filtre, Comp_profil, Comp_formulaire, Comp_Card, Comp_img} from '../components/ExploreAccueil';
import ExploreHeader from '../components/ExploreHeader';
const Accueil: React.FC = () => {
    return(
        <>
            <ExploreHeader />
            <div className="container-accueil">
                <div className="left-section">
                    <Comp_SubTitle />
                    <Comp_filtre />
                </div>
                <div className="center-section">
                    <Comp_profil />
                    <Comp_formulaire />
                </div>
                <div className="right-section">
                    <Comp_Card />
                    <Comp_img />
                </div>
            </div>
        </>
    );
}
export default Accueil;