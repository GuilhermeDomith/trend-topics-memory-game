import React from 'react';

const GameTitle = (props) => {
    return (
        <div className="title">
            <h1 className="game-title-1">{props.show1}</h1>
            <h2 className="game-title-2">{props.show2}</h2>
        </div>
    )
}

export default GameTitle;