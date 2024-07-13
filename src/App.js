// import React, { useState } from 'react';
// import PlayerCard from './components/PlayerCard';
// import './App.css';

// import teamProfilePic from './assets/teamlogo.jpeg';

// // Import local photos
// import player1Photo from './assets/player1.jpeg';
// import player2Photo from './assets/player2.jpg';
// import player3Photo from './assets/player3.png';
// import player4Photo from './assets/player4.jpeg';
// import player5Photo from './assets/player5.jpeg';
// import player6Photo from './assets/player6.jpeg';
// import player7Photo from './assets/player7.jpeg';
// import player8Photo from './assets/player8.jpeg';
// import player9Photo from './assets/player9.jpeg';
// import player10Photo from './assets/player10.jpeg';
// import player11Photo from './assets/player11.jpeg';
// import player12Photo from './assets/player12.jpg';
// import player13Photo from './assets/player13.jpeg';
// import player14Photo from './assets/player14.jpeg';

// const App = () => {
//   const [players] = useState([
//     {
//       id: 1,
//       name: 'Shiva Reddy',
//       matches: 174,
//       runs: 2173,
//       battingAverage: 16.98,
//       wickets: 189,
//       bowlingEconomy: 7.67,
//       catches: 68,
//       runOuts: 14,
//       imageUrl: player1Photo,
//     },
//     {
//       id: 2,
//       name: 'Vinay',
//       matches: 264,
//       runs: 5390,
//       battingAverage: 23.85,
//       wickets: 162,
//       bowlingEconomy: 7.84,
//       catches: 96,
//       runOuts: 28,
//       imageUrl: player2Photo,
//     },
//     {
//       id: 3,
//       name: 'Ramnath',
//       matches: 76,
//       runs: 194,
//       battingAverage: 6.93,
//       wickets: 84,
//       bowlingEconomy: 8.15,
//       catches: 16,
//       runOuts: 2,
//       imageUrl: player3Photo,
//     },
//     {
//       id: 4,
//       name: 'Seshu Tholeti',
//       matches: 23,
//       runs: 215,
//       battingAverage: 10.85,
//       wickets: 15,
//       bowlingEconomy: 12.84,
//       catches: 7,
//       runOuts: 2,
//       imageUrl: player4Photo,
//     },
//     {
//       id: 5,
//       name: 'Delhi Raj',
//       matches: 61,
//       runs: 1283,
//       battingAverage: 25.66,
//       wickets: 25,
//       bowlingEconomy: 7.00,
//       catches: 32,
//       runOuts: 7,
//       imageUrl: player5Photo,
//     },
//     {
//       id: 6,
//       name: 'Vishnu Vardhan',
//       matches: 21,
//       runs: 196,
//       battingAverage: 23.66,
//       wickets: 0,
//       bowlingEconomy: 0.00,
//       catches: 6,
//       runOuts: 2,
//       imageUrl: player7Photo,
//     },
//     {
//       id: 7,
//       name: 'Neil',
//       matches: 17,
//       runs: 79,
//       battingAverage: 7.90,
//       wickets: 2,
//       bowlingEconomy: 8.00,
//       catches: 2,
//       runOuts: 0,
//       imageUrl: player8Photo,
//     },
//     {
//       id: 8,
//       name: 'Roshan',
//       matches: 28,
//       runs: 403,
//       battingAverage: 25.66,
//       wickets: 25,
//       bowlingEconomy: 7.00,
//       catches: 18,
//       runOuts: 1,
//       imageUrl: player9Photo,
//     },
//     {
//       id: 9,
//       name: 'Bharat Vadrevu',
//       matches: 86,
//       runs: 1321,
//       battingAverage: 21.66,
//       wickets: 64,
//       bowlingEconomy: 7.40,
//       catches: 45,
//       runOuts: 1,
//       imageUrl: player10Photo,
//     },
//     {
//       id: 10,
//       name: 'Shiva Kumar',
//       matches: 142,
//       runs: 2851,
//       battingAverage: 22.66,
//       wickets: 2,
//       bowlingEconomy: 9.29,
//       catches: 45,
//       runOuts: 11,
//       imageUrl: player6Photo,
//     },
//     {
//       id: 11,
//       name: 'Shaik Sameer',
//       matches: 41,
//       runs: 346,
//       battingAverage: 20.66,
//       wickets: 43,
//       bowlingEconomy: 6.78,
//       catches: 13,
//       runOuts: 2,
//       imageUrl: player11Photo,
//     },
//     {
//       id: 12,
//       name: 'Sai',
//       matches: 38,
//       runs: 215,
//       battingAverage: 14.66,
//       wickets: 28,
//       bowlingEconomy: 6.78,
//       catches: 7,
//       runOuts: 4,
//       imageUrl: player12Photo,
//     },
//     {
//       id: 13,
//       name: 'M Durga',
//       matches: 36,
//       runs: 343,
//       battingAverage: 11.86,
//       wickets: 8,
//       bowlingEconomy: 10.78,
//       catches: 9,
//       runOuts: 3,
//       imageUrl: player13Photo,
//     },
//     {
//       id: 14,
//       name: 'Mukesh Katipamu',
//       matches: 177,
//       runs: 3242,
//       battingAverage: 22.86,
//       wickets: 7,
//       bowlingEconomy: 9.78,
//       catches: 49,
//       runOuts: 13,
//       imageUrl: player3Photo,
//     },
//     {
//       id: 15,
//       name: 'Bhargav Chowdary',
//       matches: 55,
//       runs: 818,
//       battingAverage: 21.86,
//       wickets: 33,
//       bowlingEconomy: 7.78,
//       catches: 35,
//       runOuts: 1,
//       imageUrl: player14Photo,
//     },
//     {
//       id: 16,
//       name: 'Madhu',
//       matches: 41,
//       runs: 240,
//       battingAverage: 12.00,
//       wickets: 26,
//       bowlingEconomy: 7.78,
//       catches: 11,
//       runOuts: 1,
//       imageUrl: player3Photo,
//     },
//   ]);

//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredPlayers = players.filter((player) =>
//     player.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <header style={styles.header}>
//         <img src={teamProfilePic} alt="EAST HYD BOYS" style={styles.logo} />
//         <h1 style={styles.title}>EAST HYD BOYS</h1>
//       </header>
//       <div style={{ padding: '10px' }}>
//         <input
//           type="text"
//           placeholder="Search by name..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//           style={styles.searchInput}
//         />
//       </div>
//       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
//         {filteredPlayers.length > 0 ? (
//           filteredPlayers.map((player, index) => (
//             <PlayerCard key={index} player={player} />
//           ))
//         ) : (
//           <div style={styles.noPlayersFound}>
//             <p>No players found</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   header: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '10px 20px',
//     backgroundColor: '#282c34',
//     color: '#ffffff',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     borderRadius: '5px',
//     marginBottom: '20px', // Ensure space between header and search box/cards
//   },
//   logo: {
//     width: '50px',
//     height: '50px',
//     marginRight: '15px',
//     borderRadius: '50%',
//   },
//   title: {
//     fontSize: '1.8rem',
//     fontWeight: 'bold',
//     flex: 1, /* Ensures title takes remaining space */
//     textAlign: 'center', /* Centers title */
//   },
//   searchInput: {
//     padding: '8px',
//     fontSize: '1rem',
//     border: 'none',
//     borderRadius: '5px',
//     width: '100%',
//     maxWidth: '400px',
//     margin: '0 auto',
//     display: 'block',
//     marginBottom: '20px',
//   },
//   noPlayersFound: {
//     textAlign: 'center',
//     width: '100%',
//     padding: '20px',
//     fontSize: '1.2rem',
//     color: '#777',
//   },
// };

// export default App;

import React, { useState } from 'react';
import PlayerCard from './components/PlayerCard';
import './App.css';

import teamProfilePic from './assets/teamlogo.jpeg';

// Import local photos
import player1Photo from './assets/player1.jpeg';
import player2Photo from './assets/player2.jpg';
import player3Photo from './assets/player3.png';
import player4Photo from './assets/player4.jpeg';
import player5Photo from './assets/player5.jpeg';
import player6Photo from './assets/player6.jpeg';
import player7Photo from './assets/player7.jpeg';
import player8Photo from './assets/player8.jpeg';
import player9Photo from './assets/player9.jpeg';
import player10Photo from './assets/player10.jpeg';
import player11Photo from './assets/player11.jpeg';
import player12Photo from './assets/player12.jpg';
import player13Photo from './assets/player13.jpeg';
import player14Photo from './assets/player14.jpeg';

const App = () => {
  const [players, setPlayers] = useState([
    {
      id: 1,
      name: 'Shiva Reddy',
      matches: 174,
      runs: 2173,
      battingAverage: 16.98,
      wickets: 189,
      bowlingEconomy: 7.67,
      catches: 68,
      runOuts: 14,
      imageUrl: player1Photo,
    },
    {
      id: 2,
      name: 'Vinay',
      matches: 264,
      runs: 5390,
      battingAverage: 23.85,
      wickets: 162,
      bowlingEconomy: 7.84,
      catches: 96,
      runOuts: 28,
      imageUrl: player2Photo,
    },
    {
      id: 3,
      name: 'Ramnath',
      matches: 76,
      runs: 194,
      battingAverage: 6.93,
      wickets: 84,
      bowlingEconomy: 8.15,
      catches: 16,
      runOuts: 2,
      imageUrl: player3Photo,
    },
    {
      id: 4,
      name: 'Seshu Tholeti',
      matches: 23,
      runs: 215,
      battingAverage: 10.85,
      wickets: 15,
      bowlingEconomy: 12.84,
      catches: 7,
      runOuts: 2,
      imageUrl: player4Photo,
    },
    {
      id: 5,
      name: 'Delhi Raj',
      matches: 61,
      runs: 1283,
      battingAverage: 25.66,
      wickets: 25,
      bowlingEconomy: 7.00,
      catches: 32,
      runOuts: 7,
      imageUrl: player5Photo,
    },
    {
      id: 6,
      name: 'Vishnu Vardhan',
      matches: 21,
      runs: 196,
      battingAverage: 23.66,
      wickets: 0,
      bowlingEconomy: 0.00,
      catches: 6,
      runOuts: 2,
      imageUrl: player7Photo,
    },
    {
      id: 7,
      name: 'Neil',
      matches: 17,
      runs: 79,
      battingAverage: 7.90,
      wickets: 2,
      bowlingEconomy: 8.00,
      catches: 2,
      runOuts: 0,
      imageUrl: player8Photo,
    },
    {
      id: 8,
      name: 'Roshan',
      matches: 28,
      runs: 403,
      battingAverage: 25.66,
      wickets: 25,
      bowlingEconomy: 7.00,
      catches: 18,
      runOuts: 1,
      imageUrl: player9Photo,
    },
    {
      id: 9,
      name: 'Bharat Vadrevu',
      matches: 86,
      runs: 1321,
      battingAverage: 21.66,
      wickets: 64,
      bowlingEconomy: 7.40,
      catches: 45,
      runOuts: 1,
      imageUrl: player10Photo,
    },
    {
      id: 10,
      name: 'Shiva Kumar',
      matches: 142,
      runs: 2851,
      battingAverage: 22.66,
      wickets: 2,
      bowlingEconomy: 9.29,
      catches: 45,
      runOuts: 11,
      imageUrl: player6Photo,
    },
    {
      id: 11,
      name: 'Shaik Sameer',
      matches: 41,
      runs: 346,
      battingAverage: 20.66,
      wickets: 43,
      bowlingEconomy: 6.78,
      catches: 13,
      runOuts: 2,
      imageUrl: player11Photo,
    },
    {
      id: 12,
      name: 'Sai',
      matches: 38,
      runs: 215,
      battingAverage: 14.66,
      wickets: 28,
      bowlingEconomy: 6.78,
      catches: 7,
      runOuts: 4,
      imageUrl: player12Photo,
    },
    {
      id: 13,
      name: 'M Durga',
      matches: 36,
      runs: 343,
      battingAverage: 11.86,
      wickets: 8,
      bowlingEconomy: 10.78,
      catches: 9,
      runOuts: 3,
      imageUrl: player13Photo,
    },
    {
      id: 14,
      name: 'Mukesh Katipamu',
      matches: 177,
      runs: 3242,
      battingAverage: 22.86,
      wickets: 7,
      bowlingEconomy: 9.78,
      catches: 49,
      runOuts: 13,
      imageUrl: player3Photo,
    },
    {
      id: 15,
      name: 'Bhargav Chowdary',
      matches: 55,
      runs: 818,
      battingAverage: 21.86,
      wickets: 33,
      bowlingEconomy: 7.78,
      catches: 35,
      runOuts: 1,
      imageUrl: player14Photo,
    },
    {
      id: 16,
      name: 'Madhu',
      matches: 41,
      runs: 240,
      battingAverage: 12.00,
      wickets: 26,
      bowlingEconomy: 7.78,
      catches: 11,
      runOuts: 1,
      imageUrl: player3Photo,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [isAddingPlayer, setIsAddingPlayer] = useState(false);

  const [newPlayerName, setNewPlayerName] = useState('');
  const [newPlayerMatches, setNewPlayerMatches] = useState(0);
  const [newPlayerRuns, setNewPlayerRuns] = useState(0);
  const [newPlayerBattingAverage, setNewPlayerBattingAverage] = useState(0);
  const [newPlayerWickets, setNewPlayerWickets] = useState(0);
  const [newPlayerBowlingEconomy, setNewPlayerBowlingEconomy] = useState(0);
  const [newPlayerCatches, setNewPlayerCatches] = useState(0);
  const [newPlayerRunOuts, setNewPlayerRunOuts] = useState(0);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleAddPlayerForm = () => {
    setIsAddingPlayer(!isAddingPlayer);
  };

  const handleAddPlayer = (event) => {
    event.preventDefault();

    const newPlayer = {
      id: players.length + 1, // Generate new ID (example, adjust as per your logic)
      name: newPlayerName,
      matches: parseInt(newPlayerMatches),
      runs: parseInt(newPlayerRuns),
      battingAverage: parseFloat(newPlayerBattingAverage),
      wickets: parseInt(newPlayerWickets),
      bowlingEconomy: parseFloat(newPlayerBowlingEconomy),
      catches: parseInt(newPlayerCatches),
      runOuts: parseInt(newPlayerRunOuts),
      imageUrl: '', // Set the image URL as needed
    };

    setPlayers([...players, newPlayer]);

    // Reset form fields
    setNewPlayerName('');
    setNewPlayerMatches(0);
    setNewPlayerRuns(0);
    setNewPlayerBattingAverage(0);
    setNewPlayerWickets(0);
    setNewPlayerBowlingEconomy(0);
    setNewPlayerCatches(0);
    setNewPlayerRunOuts(0);

    // Close the add player form
    setIsAddingPlayer(false);
  };

  return (
    <div>
      <header style={styles.header}>
        <img src={teamProfilePic} alt="EAST HYD BOYS" style={styles.logo} />
        <h1 style={styles.title}>EAST HYD BOYS</h1>
      </header>
      <div style={{ padding: '20px' }}>
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search players..."
            value={searchTerm}
            onChange={handleSearchChange}
            style={styles.searchInput}
          />
          <button onClick={toggleAddPlayerForm} style={styles.addButton}>
            {isAddingPlayer ? 'Cancel' : 'Add Player'}
          </button>
        </div>

        {isAddingPlayer && (
          <form onSubmit={handleAddPlayer} style={styles.addPlayerForm}>
            <input
              type="text"
              placeholder="Player Name"
              value={newPlayerName}
              onChange={(e) => setNewPlayerName(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Matches Played"
              value={newPlayerMatches}
              onChange={(e) => setNewPlayerMatches(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Runs Scored"
              value={newPlayerRuns}
              onChange={(e) => setNewPlayerRuns(e.target.value)}
              required
            />
            <input
              type="number"
              step="0.01"
              placeholder="Batting Average"
              value={newPlayerBattingAverage}
              onChange={(e) => setNewPlayerBattingAverage(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Wickets Taken"
              value={newPlayerWickets}
              onChange={(e) => setNewPlayerWickets(e.target.value)}
              required
            />
            <input
              type="number"
              step="0.01"
              placeholder="Bowling Economy"
              value={newPlayerBowlingEconomy}
              onChange={(e) => setNewPlayerBowlingEconomy(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Catches"
              value={newPlayerCatches}
              onChange={(e) => setNewPlayerCatches(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Run Outs"
              value={newPlayerRunOuts}
              onChange={(e) => setNewPlayerRunOuts(e.target.value)}
              required
            />
            <button type="submit">Add Player</button>
          </form>
        )}

        <div className="player-container" style={styles.playerContainer}>
          {filteredPlayers.map((player) => (
            <PlayerCard key={player.id} player={player} style={styles.playerCard} />
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
  },
  logo: {
    width: '150px',
    borderRadius: '50%',
  },
  title: {
    margin: '10px 0',
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginBottom: '10px',
  },
  searchInput: {
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginRight: '10px',
    width: '70%',
  },
  addButton: {
    padding: '8px 15px',
    fontSize: '16px',
    borderRadius: '4px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  addPlayerForm: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
    maxWidth: '400px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  playerContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  playerCard: {
    margin: '10px',
  },
};

export default App;


