import React, { useState } from 'react';
//import logo from './logo.svg';
import '../styles/App.css';
import Game from './Game'

function App() {
  const [gameId, setGameId] = useState(1)

  return (
    <div>
      <Game
        key={gameId}
        startNewGame={() => setGameId(gameId + 1)}
      />
    </div>
  );
}

export default App;
