import './ExploreContainer.css';
import React, { useEffect, useState } from 'react';
interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const teamTableGeneral = 
  [
    {"equipe": "Bayern Munich","competition": "Bundesliga","goal": 43,"shotsPerGame": 19.9,"yellowCard": 17,"redCard": 1,"possession": 62.9,"passSuccess": 88.8,"aerialWonPerGame": 12.8,"note": 7.16},{"equipe": "Paris Saint-Germain","competition": "Ligue 1","goal": 34,"shotsPerGame": 16.6,"yellowCard": 17,"redCard": 0,"possession": 68.0,"passSuccess": 90.6,"aerialWonPerGame": 7.0,"note": 7.04},{"equipe": "Bayer Leverkusen","competition": "Bundesliga","goal": 37,"shotsPerGame": 16.3,"yellowCard": 23,"redCard": 0,"possession": 60.6,"passSuccess": 88.9,"aerialWonPerGame": 9.6,"note": 6.98},{"equipe": "Manchester City","competition": "Premier League","goal": 33,"shotsPerGame": 16.5,"yellowCard": 23,"redCard": 2,"possession": 62.3,"passSuccess": 90.2,"aerialWonPerGame": 7.9,"note": 6.96},{"equipe": "Real Madrid","competition": "LaLiga","goal": 33,"shotsPerGame": 17.1,"yellowCard": 28,"redCard": 1,"possession": 58.3,"passSuccess": 90.0,"aerialWonPerGame": 8.1,"note": 6.93},{"equipe": "Inter","competition": "Serie A","goal": 30,"shotsPerGame": 16.3,"yellowCard": 17,"redCard": 0,"possession": 55.6,"passSuccess": 86.4,"aerialWonPerGame": 15.2,"note": 6.89},{"equipe": "VfB Stuttgart","competition": "Bundesliga","goal": 33,"shotsPerGame": 16.2,"yellowCard": 17,"redCard": 0,"possession": 57.7,"passSuccess": 85.9,"aerialWonPerGame": 15.2,"note": 6.87},{"equipe": "Atletico Madrid","competition": "LaLiga","goal": 30,"shotsPerGame": 13.5,"yellowCard": 25,"redCard": 1,"possession": 52.8,"passSuccess": 84.7,"aerialWonPerGame": 12.7,"note": 6.84},{"equipe": "Newcastle","competition": "Premier League","goal": 32,"shotsPerGame": 13.8,"yellowCard": 38,"redCard": 0,"possession": 53.6,"passSuccess": 84.3,"aerialWonPerGame": 11.5,"note": 6.83},{"equipe": "Barcelona","competition": "LaLiga","goal": 27,"shotsPerGame": 15.4,"yellowCard": 33,"redCard": 1,"possession": 66.7,"passSuccess": 89.2,"aerialWonPerGame": 12.1,"note": 6.81},{"equipe": "Tottenham","competition": "Premier League","goal": 25,"shotsPerGame": 16.2,"yellowCard": 34,"redCard": 3,"possession": 60.3,"passSuccess": 88.0,"aerialWonPerGame": 8.8,"note": 6.80},{"equipe": "Liverpool","competition": "Premier League","goal": 28,"shotsPerGame": 17.3,"yellowCard": 23,"redCard": 4,"possession": 57.1,"passSuccess": 86.1,"aerialWonPerGame": 14.4,"note": 6.79},{"equipe": "RB Leipzig","competition": "Bundesliga","goal": 31,"shotsPerGame": 15.2,"yellowCard": 21,"redCard": 0,"possession": 58.9,"passSuccess": 84.8,"aerialWonPerGame": 12.7,"note": 6.79},{"equipe": "Arsenal","competition": "Premier League","goal": 29,"shotsPerGame": 14.9,"yellowCard": 18,"redCard": 2,"possession": 60.8,"passSuccess": 87.3,"aerialWonPerGame": 13.0,"note": 6.78},{"equipe": "Monaco","competition": "Ligue 1","goal": 27,"shotsPerGame": 14.7,"yellowCard": 31,"redCard": 0,"possession": 55.2,"passSuccess": 83.4,"aerialWonPerGame": 11.2,"note": 6.78},{"equipe": "Napoli","competition": "Serie A","goal": 26,"shotsPerGame": 17.9,"yellowCard": 23,"redCard": 1,"possession": 58.5,"passSuccess": 86.8,"aerialWonPerGame": 11.1,"note": 6.77},{"equipe": "Aston Villa","competition": "Premier League","goal": 31,"shotsPerGame": 14.9,"yellowCard": 32,"redCard": 0,"possession": 52.3,"passSuccess": 86.2,"aerialWonPerGame": 8.2,"note": 6.76},{"equipe": "Juventus","competition": "Serie A","goal": 22,"shotsPerGame": 14.1,"yellowCard": 37,"redCard": 0,"possession": 46.5,"passSuccess": 83.5,"aerialWonPerGame": 13.8,"note": 6.76},{"equipe": "Lille","competition": "Ligue 1","goal": 17,"shotsPerGame": 12.5,"yellowCard": 28,"redCard": 1,"possession": 57.1,"passSuccess": 85.4,"aerialWonPerGame": 11.7,"note": 6.76},{"equipe": "Girona","competition": "LaLiga","goal": 34,"shotsPerGame": 13.4,"yellowCard": 35,"redCard": 0,"possession": 58.0,"passSuccess": 87.3,"aerialWonPerGame": 11.8,"note": 6.74}
  ];  
  const teamTableHome = 
  [
    {"equipe":"Bayern Munich","competition":"Bundesliga","goal":27,"shotsPerGame":21.7,"yellowCard":4,"redCard":1,"possession":61.9,"passSuccess":88.8,"aerialWonPerGame":13,"note":7.21},{"equipe":"Bayer Leverkusen","competition":"Bundesliga","goal":21,"shotsPerGame":19.3,"yellowCard":8,"redCard":0,"possession":65.5,"passSuccess":90.2,"aerialWonPerGame":11.7,"note":7.05},{"equipe":"Aston Villa","competition":"Premier League","goal":23,"shotsPerGame":15.3,"yellowCard":17,"redCard":0,"possession":57.6,"passSuccess":86.8,"aerialWonPerGame":9.5,"note":7.04},{"equipe":"Liverpool","competition":"Premier League","goal":17,"shotsPerGame":21.5,"yellowCard":5,"redCard":1,"possession":66.9,"passSuccess":87.9,"aerialWonPerGame":19.5,"note":7.04},{"equipe":"Manchester City","competition":"Premier League","goal":17,"shotsPerGame":12.5,"yellowCard":9,"redCard":2,"possession":60.6,"passSuccess":90.4,"aerialWonPerGame":7.5,"note":7.03},{"equipe":"VfB Stuttgart","competition":"Bundesliga","goal":22,"shotsPerGame":18.6,"yellowCard":9,"redCard":0,"possession":59.3,"passSuccess":87.3,"aerialWonPerGame":14.7,"note":7.01},{"equipe":"Paris Saint-Germain","competition":"Ligue 1","goal":20,"shotsPerGame":15.6,"yellowCard":5,"redCard":0,"possession":70.8,"passSuccess":91.0,"aerialWonPerGame":6.4,"note":7.01},{"equipe":"Real Madrid","competition":"LaLiga","goal":17,"shotsPerGame":18.9,"yellowCard":13,"redCard":0,"possession":61.3,"passSuccess":89.8,"aerialWonPerGame":8.3,"note":6.98},{"equipe":"Newcastle","competition":"Premier League","goal":19,"shotsPerGame":15.5,"yellowCard":21,"redCard":0,"possession":54.5,"passSuccess":83.6,"aerialWonPerGame":13.5,"note":6.96},{"equipe":"RB Leipzig","competition":"Bundesliga","goal":21,"shotsPerGame":16.6,"yellowCard":11,"redCard":0,"possession":59.0,"passSuccess":86.7,"aerialWonPerGame":9.9,"note":6.91},{"equipe":"Barcelona","competition":"LaLiga","goal":15,"shotsPerGame":16,"yellowCard":16,"redCard":0,"possession":65.7,"passSuccess":89.1,"aerialWonPerGame":10,"note":6.89},{"equipe":"Inter","competition":"Serie A","goal":17,"shotsPerGame":17.7,"yellowCard":9,"redCard":0,"possession":52.0,"passSuccess":86.2,"aerialWonPerGame":13,"note":6.89},{"equipe":"Marseille","competition":"Ligue 1","goal":7,"shotsPerGame":15,"yellowCard":5,"redCard":0,"possession":52.0,"passSuccess":85.5,"aerialWonPerGame":10.4,"note":6.89},{"equipe":"Monaco","competition":"Ligue 1","goal":13,"shotsPerGame":13.2,"yellowCard":14,"redCard":0,"possession":55.4,"passSuccess":83.1,"aerialWonPerGame":11.5,"note":6.87},{"equipe":"Atletico Madrid","competition":"LaLiga","goal":17,"shotsPerGame":16,"yellowCard":11,"redCard":0,"possession":53.4,"passSuccess":85.8,"aerialWonPerGame":13.1,"note":6.84},{"equipe":"Roma","competition":"Serie A","goal":18,"shotsPerGame":14.1,"yellowCard":11,"redCard":0,"possession":54.3,"passSuccess":84.4,"note":6.84},{"equipe":"Lille","competition":"Ligue 1","goal":8,"shotsPerGame":12.3,"yellowCard":9,"redCard":1,"possession":56.8,"passSuccess":83.4,"aerialWonPerGame":13.2,"note":6.83},{"equipe":"Real Betis","competition":"LaLiga","goal":10,"shotsPerGame":15.3,"yellowCard":14,"redCard":0,"possession":53.0,"passSuccess":86.0,"aerialWonPerGame":12.3,"note":6.82},{"equipe":"Arsenal","competition":"Premier League","goal":20,"shotsPerGame":15.5,"yellowCard":10,"redCard":1,"possession":61.0,"passSuccess":88.3,"aerialWonPerGame":12.6,"note":6.81},{"equipe":"Athletic Bilbao","competition":"LaLiga","goal":22,"shotsPerGame":14.3,"yellowCard":21,"redCard":1,"possession":53.5,"passSuccess":80.6,"aerialWonPerGame":14.3,"note":6.79}
  ]; 
  const teamTableAway = 
  [
    {"equipe":"Bayern Munich","competition":"Bundesliga","goal":16,"shotsPerGame":18.2,"yellowCard":13,"redCard":0,"possession":63.9,"passSuccess":88.8,"aerialWonPerGame":12.5,"note":7.12},{"equipe":"Paris Saint-Germain","competition":"Ligue 1","goal":14,"shotsPerGame":17.8,"yellowCard":12,"redCard":0,"possession":64.9,"passSuccess":89.9,"aerialWonPerGame":7.7,"note":7.07},{"equipe":"Bayer Leverkusen","competition":"Bundesliga","goal":16,"shotsPerGame":13.2,"yellowCard":15,"redCard":0,"possession":55.7,"passSuccess":87.5,"aerialWonPerGame":7.5,"note":6.91},{"equipe":"Inter","competition":"Serie A","goal":13,"shotsPerGame":14.7,"yellowCard":8,"redCard":0,"possession":59.8,"passSuccess":86.6,"aerialWonPerGame":17.8,"note":6.89},{"equipe":"Manchester City","competition":"Premier League","goal":16,"shotsPerGame":19.9,"yellowCard":14,"redCard":0,"possession":63.8,"passSuccess":90.1,"aerialWonPerGame":8.3,"note":6.89},{"equipe":"Real Madrid","competition":"LaLiga","goal":16,"shotsPerGame":15.5,"yellowCard":15,"redCard":1,"possession":55.6,"passSuccess":90.3,"aerialWonPerGame":8.0,"note":6.88},{"equipe":"Napoli","competition":"Serie A","goal":16,"shotsPerGame":16.0,"yellowCard":17,"redCard":0,"possession":57.2,"passSuccess":85.7,"aerialWonPerGame":11.7,"note":6.86},{"equipe":"Tottenham","competition":"Premier League","goal":15,"shotsPerGame":14.3,"yellowCard":19,"redCard":1,"possession":62.1,"passSuccess":88.2,"aerialWonPerGame":9.6,"note":6.84},{"equipe":"Atletico Madrid","competition":"LaLiga","goal":13,"shotsPerGame":10.5,"yellowCard":14,"redCard":1,"possession":52.0,"passSuccess":83.5,"aerialWonPerGame":12.2,"note":6.83},{"equipe":"Juventus","competition":"Serie A","goal":11,"shotsPerGame":11.9,"yellowCard":19,"redCard":0,"possession":45.9,"passSuccess":83.3,"aerialWonPerGame":14.0,"note":6.78},{"equipe":"Hoffenheim","competition":"Bundesliga","goal":16,"shotsPerGame":12.6,"yellowCard":21,"redCard":0,"possession":49.1,"passSuccess":78.9,"aerialWonPerGame":16.7,"note":6.78},{"equipe":"Arsenal","competition":"Premier League","goal":9,"shotsPerGame":14.0,"yellowCard":8,"redCard":1,"possession":60.5,"passSuccess":85.9,"aerialWonPerGame":13.5,"note":6.75},{"equipe":"Girona","competition":"LaLiga","goal":16,"shotsPerGame":13.4,"yellowCard":19,"redCard":0,"possession":54.8,"passSuccess":85.6,"aerialWonPerGame":13.0,"note":6.75},{"equipe":"Barcelona","competition":"LaLiga","goal":12,"shotsPerGame":14.7,"yellowCard":17,"redCard":1,"possession":67.8,"passSuccess":89.2,"aerialWonPerGame":14.3,"note":6.74},{"equipe":"Crystal Palace","competition":"Premier League","goal":7,"shotsPerGame":12.9,"yellowCard":14,"redCard":0,"possession":42.0,"passSuccess":78.0,"aerialWonPerGame":16.4,"note":6.74},{"equipe":"Everton","competition":"Premier League","goal":10,"shotsPerGame":11.3,"yellowCard":14,"redCard":1,"possession":37.9,"passSuccess":73.4,"aerialWonPerGame":19.9,"note":6.73},{"equipe":"VfB Stuttgart","competition":"Bundesliga","goal":11,"shotsPerGame":13.3,"yellowCard":8,"redCard":0,"possession":55.9,"passSuccess":84.2,"aerialWonPerGame":15.7,"note":6.72},{"equipe":"Chelsea","competition":"Premier League","goal":12,"shotsPerGame":12.5,"yellowCard":25,"redCard":1,"possession":59.0,"passSuccess":87.8,"aerialWonPerGame":10.0,"note":6.71},{"equipe":"Manchester United","competition":"Premier League","goal":8,"shotsPerGame":12.3,"yellowCard":13,"redCard":0,"possession":47.7,"passSuccess":79.9,"aerialWonPerGame":14.6,"note":6.70},{"equipe":"Monaco","competition":"Ligue 1","goal":14,"shotsPerGame":16.0,"yellowCard":17,"redCard":0,"possession":54.9,"passSuccess":83.6,"aerialWonPerGame":11.0,"note":6.70}
  ]; 
  
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setDataLoaded(true);
    };
    fetchData();
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
        <h2>Football Team Stats</h2>
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
            {teamTableGeneral.map((team, index) => (
                <tr key={index}>
                  <td>{team.equipe}</td>
                  <td>{team.competition}</td>
                  <td className='centre'>{team.goal}</td>
                  <td>{team.shotsPerGame}</td>
                  <td className='centre'><p className='yellow'>{team.yellowCard}</p></td>
                  <td className='centre'><p className='red'>{team.redCard}</p></td>
                  <td className='centre'>{team.possession}%</td>
                  <td className='centre'>{team.passSuccess}%</td>
                  <td className='centre'>{team.aerialWonPerGame}</td>
                  <td className='note'>{team.note}</td>
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
            {teamTableHome.map((team, index) => (
                <tr key={index}>
                  <td>{team.equipe}</td>
                  <td>{team.competition}</td>
                  <td className='centre'>{team.goal}</td>
                  <td>{team.shotsPerGame}</td>
                  <td className='centre'><p className='yellow'>{team.yellowCard}</p></td>
                  <td className='centre'><p className='red'>{team.redCard}</p></td>
                  <td className='centre'>{team.possession}%</td>
                  <td className='centre'>{team.passSuccess}%</td>
                  <td className='centre'>{team.aerialWonPerGame}</td>
                  <td className='note'>{team.note}</td>
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
            {teamTableAway.map((team, index) => (
                <tr key={index}>
                  <td>{team.equipe}</td>
                  <td>{team.competition}</td>
                  <td className='centre'>{team.goal}</td>
                  <td>{team.shotsPerGame}</td>
                  <td className='centre'><p className='yellow'>{team.yellowCard}</p></td>
                  <td className='centre'><p className='red'>{team.redCard}</p></td>
                  <td className='centre'>{team.possession}%</td>
                  <td className='centre'>{team.passSuccess}%</td>
                  <td className='centre'>{team.aerialWonPerGame}</td>
                  <td className='note'>{team.note}</td>
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
