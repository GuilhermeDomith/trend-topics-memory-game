import React from 'react';

const Card = ({ card }) => {
    return (
        <button
            hidden={card.isHidden}
            className="card card-style"
            onClick={card.click} >
            {card.value}
        </button>
    )
}

const Cards = ({ cards }) => {
    return (
        <div className="cards">
            {cards.map((card) =>
                <Card key={card.id} card={card} />
            )}
        </div>
    )
}

export default Cards;