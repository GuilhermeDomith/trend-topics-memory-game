import React from 'react';

const ScrenRestartGame = ({ startNewGame }) => {
    return (
        <button
            onClick={() => startNewGame()}>
            Reiniciar
        </button>
    )
}

export default ScrenRestartGame;