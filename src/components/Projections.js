import React from 'react';

const Projections = () => {
  const projectionData = [
    { name: 'Det', projRecord: '9-5', playoffOdds: '93%' },
    { name: 'Bosko', projRecord: '8-6', playoffOdds: '88%' },
    { name: 'Deez', projRecord: '8-6', playoffOdds: '85%' },
    { name: 'Wilding', projRecord: '8-6', playoffOdds: '63%' },
    { name: 'AJ', projRecord: '7-7', playoffOdds: '70%' },
    { name: 'Fajt', projRecord: '7-7', playoffOdds: '61%' },
    { name: 'Brian', projRecord: '7-7', playoffOdds: '61%' },
    { name: 'Greg', projRecord: '6-8', playoffOdds: '38%' },
    { name: 'Craig', projRecord: '6-8', playoffOdds: '28%' },
    { name: 'Nasty', projRecord: '3-11', playoffOdds: '2%' },
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
          </tr>
        </thead>
        <tbody>
          {projectionData.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.projRecord}</td>
              <td>{player.playoffOdds}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div></div>
  );
};

export default Projections;
