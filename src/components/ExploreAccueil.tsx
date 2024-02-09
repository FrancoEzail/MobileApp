import React, { useState, useCallback, useEffect  } from 'react';
import data_img from '../data_img';
import { useDropzone } from 'react-dropzone';
import {IonRouterLink } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';
interface RouteParams {
    userId : string;
}
interface User {
    id: string;
    email: string;
    nom: string;
}
const Comp_profil: React.FC = () =>  {
    const [users, setUsers] = useState<User | null>(null);
    const { userId } = useParams<RouteParams>();
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://farm-production.up.railway.app/user/${userId}`);
            setUsers(response.data);
          } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
          }
        };
    
        fetchData();
      }, [userId]);
    return(
       <div className="profil-box">
            <div className="profil-img">
            <IonRouterLink href={`/profil/${userId}`}>
            {
                data_img.map((profil, index) => (
                    <img src={profil.profil} alt=""/>            
                ))
            }  
            </IonRouterLink>
            </div>
            <div className="profil-card">
                {users ? (
                    <div className="nom-email">
                        <h5>{users.nom}</h5>
                        <p>{users.email}</p>
                    </div>
               ): null}
                <div className='ellipsis'>
                    <span><i className="fas fa-ellipsis-v"></i></span>
                </div>
            </div>
        </div>
    );  
};

export const fetchData = async (apiUrl: string) => {
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données");
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erreur de requête :", error);
      throw error;
    }
};

const Comp_SubTitle: React.FC = () =>  {
    return(
        <div className="sub-title">
            <div className="circle">
                <span><i className="fas fa-circle"></i></span>
                <span><i className="far fa-circle"></i></span>
            </div>
            <div className="text-sub-title">
                <h1>Liste des</h1>
                <h1>terrains</h1>
            </div>
        </div>
    );  
};

const Comp_filtre: React.FC = () =>  {
    const [boutonActif, setBoutonActif] = useState<number | null>(1);
    const handleClick = (bouton: number) => {
      setTimeout(() => {
        setBoutonActif(bouton);
      }, 200);
    };
    const [allTerrain, setAllTerrain] = useState<any[]>([]);
    useEffect(() => {
        const fetchAllData = async () => {
          try {
            const dataTerrain = await fetchData("https://farm-production.up.railway.app/terrain/all");
            setAllTerrain(dataTerrain);
          } catch (error) {

          }
        };
        fetchAllData();
    }, []); 
    return(
        <div className="fitlre-box">
            <div className="filtre-box2"  style={{ margin: '10px 0' }}>
                <div className='right-arrow'>
                    <div className='table-title'>
                        <h3>Détails par proprio</h3>
                    </div>
                    <span><i className="fas fa-arrow-right"></i></span>
                </div>
                <div className="limit-scroll-2">
                <table className="tableau_style">
                    <thead>
                        <tr>
                            <th>Proprio</th>
                            <th>Terrain</th>
                            <th>Nombre Parcelle</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {allTerrain.map((terrain, index) => (
                            <tr key={index}>
                                <td>{terrain.idUtilisateur}</td>                    
                                <td>{terrain.id}</td>
                                <td>{terrain.nbParcelle}</td>
                                <td><span><i className="far fa-comment"></i></span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>  
            </div>
        </div>
    );
};



const Comp_formulaire: React.FC = () =>  {
    const [allRegion, setAllRegion] = useState<any[]>([]);
    useEffect(() => {
        const fetchAllData = async () => {
          try {
            const dataRegion = await fetchData("https://farm-production.up.railway.app/loc/all");
            setAllRegion(dataRegion);
          } catch (error) {

          }
        };
    
        fetchAllData();
    }, []); 
    const history = useHistory();
    const[nbrParcelle, setNbrParcelle] = useState(0);
    const[loc, setLoc] = useState("loc1");
    const[descrit, setDescrit] = useState("");
    const { userId } = useParams<RouteParams>();

    const handleNbrChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNbrParcelle(parseInt(e.target.value));
    }

    const handleLocChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLoc(e.target.value);
    }

    const handleDescritChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescrit(e.target.value);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.get(`https://farm-production.up.railway.app/terrain/create/${loc}/${descrit}/${userId}/${nbrParcelle}`);
            // const terrain_id = response.data.id;
            // localStorage.setItem('terrain_id',terrain_id);
            console.log(response.data);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    
    return(
        <div className="card-form">
            <div className="sub-title-form">
                <h3>Créer un terrain</h3>
                <div className="circle2">
                    <span><i className="fas fa-circle"></i></span>
                    <span><i className="far fa-circle"></i></span>
                </div>
            </div>
            <div className="form-group">
                <form onSubmit={handleSubmit}>
                    <div className="form-input">
                        <select name="loc" onChange={handleLocChange} value={loc}>
                        {allRegion.map((region, index) => (
                            <option key={region.id} value={region.id}>{region.nom}</option>
                        ))}
                        </select>
                    </div>
                    <div className="form-input">
                        <input type="number" placeholder="Nombre de parcelle" name="nbrParcelle" onChange={handleNbrChange} />
                    </div>
                    <div className="form-input">
                        <input type="text" placeholder='Description' name='descrit' onChange={handleDescritChange} />
                    </div>
                    <div className='sub-btn'>
                        <input type="submit" value="Valider" />
                        <div className='right-arrow-btn'>
                            <span><i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );  
};

const Comp_Card: React.FC = () =>  {
    return(
        <div className='card-pub'>
            <div className='card_pub-img'>
            {
                data_img.map((katsaka, index) => (
                    <img src={katsaka.katsaka} alt=""/>            
                ))
            }  
            </div>
            <div className='descrit'>
                <div className='left-descrit'>
                    <h5>Corn</h5>
                    <span><i className='fas fa-map-marked-alt'></i><p>Marovoay</p></span>
                </div>
                <div className='right-descrit'>
                    <p>150Kg</p>
                    <h5>$200.99</h5>
                </div>
            </div>
        </div>
    );  
};

const Comp_img: React.FC = () =>  {
    return(
        <div className='sary'>
        {
            data_img.map((parcelle, index) => (
                <img src={parcelle.parcelle} alt=""/>            
            ))
        } 
        </div>
    ); 
};
export {Comp_SubTitle, Comp_filtre, Comp_profil, Comp_formulaire, Comp_Card, Comp_img};