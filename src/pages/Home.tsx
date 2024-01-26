import ExploreHeader from '../components/ExploreHeader';
import data_img from '../data_img';
import { Comp_Welcome , Comp_Card_Shop } from '../components/ExploreWelcome';
const Home: React.FC = () => {
    return (
        <>
        <ExploreHeader />
            <div className="container-welcome">
                <Comp_Welcome></Comp_Welcome>
                <div className="right-img">
                    {
                        data_img.map((parcel, index) => (
                            <img src={parcel.parcelle} alt=""/>            
                        ))
                    }   
                </div>
                <div className="card-list">
                    <Comp_Card_Shop></Comp_Card_Shop>
                    <Comp_Card_Shop></Comp_Card_Shop>
                    <Comp_Card_Shop></Comp_Card_Shop>
                </div>
            </div>
        </>
    );
};
export default Home;