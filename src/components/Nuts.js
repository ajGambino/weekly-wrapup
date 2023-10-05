import React from 'react';

const Nuts = () => {
  const topPlayers = {
    QB: [
      { name: 'Josh Allen', fpts: 36.5, owner: 'AJ' },
      { name: 'Anthony Richardson', fpts: 32.1, owner: 'AJ' },
      { name: 'Justin Fields', fpts: 30.2, owner: 'Det', note: 'thanks nasty' },
    ],
    RB: [
      { name: 'Christian McCaffrey', fpts: 48.7, owner: 'Deez' },
      { name: 'David Montgomery', fpts: 34.1, owner: 'AJ' },
      { name: 'Josh Jacobs', fpts: 27.9, owner: 'Det' },
    ],
    WR: [
      { name: 'AJ Brown', fpts: 38.5, owner: 'AJ' },
      { name: 'Stefon Diggs', fpts: 36, owner: 'Craig' },
      { name: 'Nico Collins', fpts: 35.8, owner: 'Wilding' },
    ],
    TE: [
      { name: 'Cole Kmet', fpts: 27.6, owner: 'Det', note: 'THANKS NASTY!' },
      { name: 'Mark Andrews', fpts: 25, owner: 'Craig' },
      { name: 'Jonnu Smith', fpts: 15.5, owner: 'FA' },
    ],
    DST: [
      { name: 'Seahawks', fpts: 29, owner: 'Deez' },
      { name: 'Cowboys', fpts: 26, owner: 'Wilding' },
      { name: 'Jaguars', fpts: 21, owner: 'FA' },
    ],
  };

  return (
    <div className="fantasy-football-table" id="nuts">
      <h2>Top Plays of Week 4</h2>
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
