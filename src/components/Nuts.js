import React from 'react';

const Nuts = () => {
  const topPlayers = {
    Qb: [
      { name: 'Josh Allen', fpts: 36.5, owner: 'AJ' },
      { name: 'Anthony Richardson', fpts: 32.1, owner: 'AJ' },
      { name: 'Justin Fields', fpts: 30.2, owner: 'Det', note: 'thanks nasty' },
    ],
    Rb: [
      { name: 'CMC', fpts: 48.7, owner: 'Deez' },
      { name: 'Montgomery', fpts: 34.1, owner: 'AJ' },
      { name: 'Josh Jacobs', fpts: 27.9, owner: 'Det' },
    ],
    Wr: [
      { name: 'AJ Brown', fpts: 38.5, owner: 'AJ' },
      { name: 'Diggs', fpts: 36, owner: 'Craig' },
      { name: 'Nico Collins', fpts: 35.8, owner: 'Wilding' },
    ],
    Te: [
      { name: 'Cole Kmet', fpts: 27.6, owner: 'Det', note: 'THANKS NASTY!' },
      { name: 'Mark Andrews', fpts: 25, owner: 'Craig' },
      { name: 'Jonnu Smith', fpts: 15.5, owner: 'FA' },
    ],
    D: [
      { name: 'Seahawks', fpts: 29, owner: 'Deez' },
      { name: 'Cowboys', fpts: 26, owner: 'Wilding' },
      { name: 'Jaguars', fpts: 21, owner: 'FA' },
    ],
  };

  return (
    <div className="fantasy-football-table">
      <h2>Top Plays of Week 4</h2>
      <table>
        <tbody>
          {Object.keys(topPlayers).map((position) => (
            <tr key={position}>
              <td>{position}</td>
              <td>
                <ol>
                  {topPlayers[position].map((player, index) => (
                    <li key={index}>
                      {player.name} {player.fpts} - {player.owner}{' '}
                      {player.note && `(${player.note})`}
                    </li>
                  ))}
                </ol>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Nuts;
