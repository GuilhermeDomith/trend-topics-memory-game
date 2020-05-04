import React, { useState } from 'react';

const Cards = ({ values, onCardClick }) => {
    return (
        <div className="cards">
            {values.map((value, id) =>
                <Card key={id} card={{ id, value }} onCardClick={onCardClick} />
            )}
        </div>
    )
}

const Card = ({ onCardClick, card }) => {
    const [isHidden, setIsHidden] = useState(false)

    card.hidden = () => setIsHidden(true)

    return (
        <button
            hidden={isHidden}
            className="card card-style"
            onClick={(event) => onCardClick(card)} >
            {card.value}
        </button>
    )
}

const GameTitle = (props) => {
    return (
        <div className="title">
            <h1 className="game-title-1">{props.show1}</h1>
            <h2 className="game-title-2">{props.show2}</h2>
        </div>
    )
}

const Status = ({ label, value }) => {
    return (
        <div className="status">
            <span>{value}</span>
            <label>{label}</label>
        </div>
    )
}

const GameStatus = ({ selected, hits }) => {
    return (
        <div className="game-status">
            <Status label="Selecionado" value={(selected) ? selected.value : '-'} />
            <Status label="Pontos" value={hits} />
        </div>
    )
}

const ScrenRestartGame = ({ startNewGame }) => {
    return (
        <button
            onClick={() => startNewGame()}>
            Reiniciar
        </button>
    )
}

export default function Game({ startNewGame, values }) {
    const [cards] = useState(Utils.ramdomArray(Utils.doubleArray(values)));
    const [selected, setSelected] = useState(null);
    const [hits, setHits] = useState(0);

    const areCardsMatch = (card) => card.value === selected.value && card.id !== selected.id;
    const isFirstPair = selected === null;
    const gameStatus = (hits === values.length) ? 'finished' : 'active';

    const onCardClick = (card) => {

        if (isFirstPair) {
            setSelected(card);
        } else {
            if (areCardsMatch(card)) {
                setHits(hits + 1);
                card.hidden();
                selected.hidden();
            }

            setSelected(null)
        }
    }

    return (
        <div className="game">
            <div>
                <GameTitle show1="Trending Topics" show2="Memory Game" />
            </div>
            <div>
                {gameStatus === 'active' ?
                    (<Cards values={cards} onCardClick={onCardClick} />) :
                    (<ScrenRestartGame startNewGame={startNewGame} />)
                }
            </div>
            <GameStatus selected={selected} hits={hits} />
        </div>
    )
}

const Utils = {
    ramdomArray: (array) => array.sort(() => 0.5 - Math.random()),
    doubleArray: (array) => [...array, ...array],
}