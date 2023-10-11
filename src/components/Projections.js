import React from 'react';

const Projections = () => {
  const projectionData = [
    { name: 'Det', projRecord: '9-5', playoffOdds: '93%', rankChange: '+1', champion: '19%' },
    { name: 'Fajt', projRecord: '9-5', playoffOdds: '88%', rankChange: "-1", champion:'13%'  },
    { name: 'Bosko', projRecord: '8-6', playoffOdds: '87%', rankChange: "+1", champion: '17%'  },
    { name: 'AJ', projRecord: '8-6', playoffOdds: '84%', rankChange: "+2", champion: '25%' },
    { name: 'Deez', projRecord: '8-6', playoffOdds: '78%', rankChange: "-2", champion: '11%' },
    { name: 'Brian', projRecord: '7-7', playoffOdds: '51%', rankChange: "+1", champion: '5%' },
    { name: 'Greg', projRecord: '7-7', playoffOdds: '50%', rankChange: "+1", champion: '6%' },
    { name: 'Craig', projRecord: '6-8', playoffOdds: '37%', rankChange: "+1", champion: '3%' },
    { name: 'Wilding', projRecord: '6-8', playoffOdds: '31%', rankChange: "-4", champion: '1%' },
    { name: 'Nasty', projRecord: '3-11', playoffOdds: '<1%', rankChange: "--", champion: '<1%' },
  ];

  return (
    <div className="projection-table" id="projections">
      <h2>Projections</h2>
      <div className="projections-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Proj. Record</th>
            <th>Playoff Odds</th>
            <th>Rank Change</th>
            <th>Champion</th>
          </tr>
        </thead>
        <tbody>
          {projectionData.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.projRecord}</td>
              <td>{player.playoffOdds}</td>
              <td>{player.rankChange}</td>
              <td>{player.champion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div></div>
  );
};

export default Projections;
