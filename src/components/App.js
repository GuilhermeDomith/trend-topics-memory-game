import React, { useState } from 'react';
//import logo from './logo.svg';
import '../styles/App.css';
import Game from './Game'

function App() {
  const [gameId, setGameId] = useState(1)

  const startNewGame = () => setGameId(gameId + 1);
  const values = ['A', 'B', 'C'];

  return (
    <div>
      <Game
        key={gameId}
        startNewGame={startNewGame}
        values={values}
      />
    </div>
  );
}

export default App;
