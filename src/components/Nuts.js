import React from 'react';

const Nuts = () => {
  const topPlayers = {
    QB: [
      { name: 'J. Fields', fpts: 33.0, owner: 'Det' },
      { name: 'J. Allen', fpts: 28.8, owner: 'AJ' },
      { name: 'J. Hurts', fpts: 28.3, owner: 'Det', },
    ],
    RB: [
      { name: 'T. Etienne', fpts: 36.4, owner: 'Greg' },
      { name: 'Z. Moss', fpts: 33.5, owner: 'Bosko' },
      { name: 'B. Hall', fpts: 28.4, owner: 'Craig' },
    ],
    WR: [
      { name: 'J. Chase', fpts: 52.2, owner: 'Fajt' },
      { name: 'D. Moore', fpts: 49, owner: 'Craig' },
      { name: 'T. Hill', fpts: 32.1, owner: 'Deez' },
    ],
    TE: [
      { name: 'G. Kittle', fpts: 27.7, owner: 'Fajt' },
      { name: 'D. Goedert', fpts: 25.7, owner: 'Wilding' },
      { name: 'T. Kelce', fpts: 22.7, owner: 'AJ' },
    ],
    DST: [
      { name: 'Saints', fpts: 22, owner: 'Greg' },
      { name: '49ers', fpts: 18, owner: 'Det' },
      { name: 'Jets', fpts: 18, owner: 'Craig' },
    ],
  };

  return (
    <div className="fantasy-football-table" id="nuts">
      <h2>Top Plays of Week 5</h2>
      <div className="positions-container">
        {Object.keys(topPlayers).map((position) => (
          <div key={position} className="position">
            <h3>{position}</h3>
            <table className="position-table">
              <thead>
                <tr>
                  <th> </th>
                  <th>fpts</th>
                  <th>Owner</th>
                </tr>
              </thead>
              <tbody>
                {topPlayers[position].map((player, index) => (
                  <tr key={index}>
                    <td>{index + 1}. {player.name}</td>
                    <td>{player.fpts}</td>
                    <td>{player.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nuts;
