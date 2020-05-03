import React, { useState } from 'react';

const Cards = (props) => {
    return (
        <div className="cards">
            {props.values.map((value, id) =>
                <Card key={id} element={{ id, value }} onCardClick={props.onCardClick} />
            )}
        </div>
    )
}

const Card = (props) => {
    return (
        <button className="card card-style" onClick={() => props.onCardClick(props.element)} >
            {props.element.value}
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

const GameStatus = (props) => {
    const selected = (props.selected) ? props.selected.value : '-';
    return (
        <div className="game-status">
            <div className="status card-selected">
                <span>{selected}</span>
                <label>Selecionado</label>
            </div>
            <div className="status game-hits">
                <span>{props.hits}</span>
                <label>Pontos</label>
            </div>
        </div>
    )
}

const ScrenRestartGame = (props) => {
    return (
        <button onClick={() => props.startNewGame()}>Reiniciar</button>
    )
}

export default function Game(props) {
    const [values] = useState(["A", "B", "C", "C", "B", "A"]);
    const [selected, setSelected] = useState(null);
    const [hits, setHits] = useState(0);
    const [gameStatus, setGameStatus] = useState('active');

    const isFirstCardSelected = () => selected === null;
    const isCorrectElem = (elem) => elem.value === selected.value && elem.id !== selected.id;
    const isGameFinished = () => hits === values.length

    const onCardClick = (elem) => {

        if (isFirstCardSelected()) {
            setSelected(elem);
        } else {
            if (isCorrectElem(elem))
                setHits(hits + 2);

            setSelected(null)
        }
    }

    if (isGameFinished())
        setGameStatus('finished')

    return (
        <div className="game">
            <div>
                <GameTitle show1="Trend Topics" show2="Memory Game" />
            </div>
            <div>
                {gameStatus === 'active' ?
                    (<Cards values={values} onCardClick={onCardClick} />) :
                    (<ScrenRestartGame {...props} />)
                }
            </div>
            <GameStatus selected={selected} hits={hits} />
        </div>
    )
}