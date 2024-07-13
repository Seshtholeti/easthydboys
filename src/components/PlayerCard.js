import React from 'react';
import './PlayerCard.css';

const PlayerCard = ({ player }) => {
  return (
    <div className="player-card">
      <img src={player.imageUrl} alt={player.name} className="player-photo" />
      <h2>{player.name}</h2>
      <p>Matches: {player.matches}</p>
      <p>Runs: {player.runs}</p>
      <p>Batting Average: {player.battingAverage}</p>
      <p>Wickets: {player.wickets}</p>
      <p>Bowling Economy: {player.bowlingEconomy}</p>
      <p>Catches: {player.catches}</p>
      <p>Run Outs: {player.runOuts}</p>
    </div>
  );
};

export default PlayerCard;
