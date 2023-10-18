import React, { Component } from 'react';

class Sweat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBet: null,
      wagerAmount: '',
    };
  }

  handleBetSelection = (bet) => {
    this.setState({ selectedBet: bet });
  };

  handleWagerAmountChange = (e) => {
    this.setState({ wagerAmount: e.target.value });
  };

  calculatePotentialWin = () => {
    const wagerAmount = parseFloat(this.state.wagerAmount);
    if (!isNaN(wagerAmount)) {
      // Assuming fixed odds of -114
      const odds = -114;
      const potentialWin = (wagerAmount * 100) / Math.abs(odds);
      return potentialWin.toFixed(2); 
    }
    return 0;
  };
  
  render() {
    const matchUps = [
      {
        team1: 'AJ',
        team2: 'Det',
        bets: [
          { name: 'AJ -10', odds: -114 },
          { name: 'Det +10', odds: -114 },
          { name: 'Over 255.5', odds: -114 },
          { name: 'Under 255.5', odds: -114 },
        ],
      },
    
    ];

    return (
      <div>
        <h1>Sportsbook</h1>
        <div className="matchup-container">
          {matchUps.map((matchUp, index) => (
            <div key={index} className="matchup">
              <h2>{matchUp.team1} vs. {matchUp.team2}</h2>
              <div className="bet-options">
                {matchUp.bets.map((bet, betIndex) => (
                  <div key={betIndex} className="bet-option">
                    <button onClick={() => this.handleBetSelection(bet)}>
                      {bet.name}
                    </button>
                    <span>Odds: {bet.odds}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {this.state.selectedBet && (
          <div className="bet-slip">
            <h3>Bet Slip</h3>
            <div className="selected-bet">
              Selected Bet: {this.state.selectedBet.name}
            </div>
            <input
              type="number"
              placeholder="Enter Wager Amount"
              value={this.state.wagerAmount}
              onChange={this.handleWagerAmountChange}
            />
            <div className="potential-win">
              Potential Win: ${this.calculatePotentialWin()}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Sweat;
