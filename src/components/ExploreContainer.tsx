import './ExploreContainer.css';
import React, { useEffect, useState } from 'react';
interface ContainerProps { }

// services/apiService.js

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


const ExploreContainer: React.FC<ContainerProps> = () => {
  const [statsDataGeneral, setStatsDataGeneral] = useState<any[]>([]);
  const [statsDataDomicile, setStatsDataDomicile] = useState<any[]>([]);
  const [statsDataExterieur, setStatsDataExterieur] = useState<any[]>([]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const dataGeneral = await fetchData("https://projet-stat-foot-laravel.onrender.com/api/show-stats-general?fbclid=IwAR05mAWGXJW9f2LOv5yFe3debvdfJ1C63KU3P8ipkJS3Kl9vmFktlllEmRc");
        const dataDomicile = await fetchData("https://projet-stat-foot-laravel.onrender.com/api/show-stats-domicile?fbclid=IwAR25E_mpgLQqJTdC8082w-XLGZqxfssoebDIwA5XItO2ntfHWBQIOK5Tm7w");
        const dataExterieur = await fetchData("https://projet-stat-foot-laravel.onrender.com/api/show-stats-exterieur?fbclid=IwAR0hVValV2RqDgU-JnfXMxYO7YYNesOMfH2fQMEJKT46gGp3esy9VMzCsno");
        
        setStatsDataGeneral(dataGeneral);
        setStatsDataDomicile(dataDomicile);
        setStatsDataExterieur(dataExterieur);
      } catch (error) {
        // Gérer l'erreur ici
      }
    };

    fetchAllData();
  }, []); 

  const [boutonActif, setBoutonActif] = useState<number | null>(1);
  const handleClick = (bouton: number) => {
    setTimeout(() => {
      setBoutonActif(bouton);
    }, 200);
  };
  return (
    <div className="content">
      <div id="container">
        <h2>Football Team Stats General</h2>
        <nav className='_bar'>
          <div className="_links">
            <ul>
              <li className={boutonActif === 1 ? 'active' : ''} onClick={() => handleClick(1)}><a>General</a></li>
              <li className={boutonActif === 2 ? 'active' : ''} onClick={() => handleClick(2)}><a>Home</a></li>
              <li className={boutonActif === 3 ? 'active' : ''} onClick={() => handleClick(3)}><a>Away</a></li>
            </ul>
          </div>
        </nav>
        {/* GENERAL STATS */}
        { boutonActif === 1 &&(

        <table id="teamStatsTable" className="">
          <thead>
                <tr>
                    <th>Team</th>
                    <th>Competition</th>
                    <th>Goal</th>
                    <th>Shots Per Game</th>
                    <th>Yellow Cards</th>
                    <th>Red Cards</th>
                    <th>Possession</th>
                    <th>Pass Success</th>
                    <th>Aerials Won Per Game</th>
                    <th>Note</th>
                </tr>
            </thead>
            <tbody>
            {statsDataGeneral.map((team, index) => (
                <tr key={index}>
                  <td>{team.gen_equ_stat_equipe}</td>
                  <td>{team.gen_equ_stat_ligue}</td>
                  <td className='centre'>{team.gen_equ_stat_but}</td>
                  <td>{(team.gen_equ_stat_tir_match *1).toFixed(1)}</td>
                  <td className='centre'><p className='yellow'>{team.gen_equ_stat_carton_jaune}</p></td>
                  <td className='centre'><p className='red'>{team.gen_equ_stat_carton_rouge}</p></td>
                  <td className='centre'>{(team.gen_equ_stat_possession*1).toFixed(2)}%</td>
                  <td className='centre'>{(team.gen_equ_stat_passe_reussie*1).toFixed(2)}%</td>
                  <td className='centre'>{(team.gen_equ_stat_aerien_gagne*1).toFixed(2)}</td>
                  <td className='note'>{(team.gen_equ_stat_note*1).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
        </table>
        )}
        {/* HOME STATS */}
        { boutonActif === 2 &&(

        <table id="teamStatsTable" className="">
          <thead>
                <tr>
                    <th>Team</th>
                    <th>Competition</th>
                    <th>Goal</th>
                    <th>Shots Per Game</th>
                    <th>Yellow Cards</th>
                    <th>Red Cards</th>
                    <th>Possession</th>
                    <th>Pass Success</th>
                    <th>Aerials Won Per Game</th>
                    <th>Note</th>
                </tr>
            </thead>
            <tbody>
            {statsDataDomicile.map((team, index) => (
                <tr key={index}>
                  <td>{team.gen_equ_stat_equipe}</td>
                  <td>{team.gen_equ_stat_ligue}</td>
                  <td className='centre'>{team.gen_equ_stat_but}</td>
                  <td>{(team.gen_equ_stat_tir_match *1).toFixed(1)}</td>
                  <td className='centre'><p className='yellow'>{team.gen_equ_stat_carton_jaune}</p></td>
                  <td className='centre'><p className='red'>{team.gen_equ_stat_carton_rouge}</p></td>
                  <td className='centre'>{(team.gen_equ_stat_possession*1).toFixed(2)}%</td>
                  <td className='centre'>{(team.gen_equ_stat_passe_reussie*1).toFixed(2)}%</td>
                  <td className='centre'>{(team.gen_equ_stat_aerien_gagne*1).toFixed(2)}</td>
                  <td className='note'>{(team.gen_equ_stat_note*1).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
        </table>
        )}

        {/* AWAY STATS */}
        { boutonActif === 3 &&(

        <table id="teamStatsTable" className="">
          <thead>
                <tr>
                    <th>Team</th>
                    <th>Competition</th>
                    <th>Goal</th>
                    <th>Shots Per Game</th>
                    <th>Yellow Cards</th>
                    <th>Red Cards</th>
                    <th>Possession</th>
                    <th>Pass Success</th>
                    <th>Aerials Won Per Game</th>
                    <th>Note</th>
                </tr>
            </thead>
            <tbody>
            {statsDataExterieur.map((team, index) => (
                <tr key={index}>
                  <td>{team.gen_equ_stat_equipe}</td>
                  <td>{team.gen_equ_stat_ligue}</td>
                  <td className='centre'>{team.gen_equ_stat_but}</td>
                  <td>{(team.gen_equ_stat_tir_match *1).toFixed(1)}</td>
                  <td className='centre'><p className='yellow'>{team.gen_equ_stat_carton_jaune}</p></td>
                  <td className='centre'><p className='red'>{team.gen_equ_stat_carton_rouge}</p></td>
                  <td className='centre'>{(team.gen_equ_stat_possession*1).toFixed(2)}%</td>
                  <td className='centre'>{(team.gen_equ_stat_passe_reussie*1).toFixed(2)}%</td>
                  <td className='centre'>{(team.gen_equ_stat_aerien_gagne*1).toFixed(2)}</td>
                  <td className='note'>{(team.gen_equ_stat_note*1).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
        </table>
        )}
      </div>
    </div>
  );
};

export default ExploreContainer;
