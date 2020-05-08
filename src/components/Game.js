import React, { useState } from 'react';
import Utils from '../utils';
import Cards from './Cards';
import GameTitle from './GameTitle';
import FooterStatus from './FooterStatus';
import ScrenRestartGame from './ScreenRestartGame';


const generateCardsByValues = (values) => {
    const cardValues = Utils.shuffleArray(Utils.duplicateArray(values))

    let cards = cardValues.map((elem, index) => ({
        id: index,
        value: elem,
        isHidden: false
    }));

    return cards;
}


const useGameState = ({ values }) => {
    const [cards] = useState(generateCardsByValues(values));
    const [flipped, setFlipped] = useState(null);
    const [hits, setHits] = useState(0);

    const flippedCardsMatch = (card) => card.value === flipped.value && card.id !== flipped.id;
    const isFirstPairFlipped = flipped === null;
    const gameStatus = (hits === values.length) ? 'finished' : 'active';


    const cardClicked = (card) => {
        if (isFirstPairFlipped) {
            setFlipped(card);
            return;
        }

        if (flippedCardsMatch(card)) {
            card.isHidden = true;
            flipped.isHidden = true;
            setHits(hits + 1);
        }

        setFlipped(null)
    }


    cards.forEach(card => {
        card.click = () => cardClicked(card);
    });

    return { cards, flippedCard: flipped, hits, gameStatus }
}


const Game = ({ startNewGame, values }) => {
    const {
        cards,
        flippedCard,
        hits,
        gameStatus
    } = useGameState({ values });

    return (
        <div className="game">
            <div>
                <GameTitle show1="Trending Topics" show2="Memory Game" />
            </div>
            <div>
                {gameStatus === 'active' ?
                    (<Cards cards={cards} />) :
                    (<ScrenRestartGame startNewGame={startNewGame} />)
                }
            </div>
            <FooterStatus flippedCard={flippedCard} hits={hits} />
        </div>
    )
}


export default Game;
