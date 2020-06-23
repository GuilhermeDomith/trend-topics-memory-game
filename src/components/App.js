import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import '../styles/App.css';
import Game from './Game';
import requests from '../utils/requests';

const useStateApp = () => {
  const [gameId, setGameId] = useState(1)
  const [values, setValues] = useState([])

  const startNewGame = () => setGameId(gameId + 1);

  const updateValues = () => {
    if (values.length === 0) {
      requests.getRepositories().then(repos => {
        setValues(repos);
      });
      console.log("Valores sendo atualizados")
    }
    console.log("Valores nao sendo atualizados")
  }

  console.log(values);
  return { gameId, values, startNewGame, updateValues }
}

function App() {
  const {
    gameId,
    values,
    startNewGame,
    updateValues
  } = useStateApp();

  useEffect(() => {
    console.log('user effect');
    updateValues();
  })

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
