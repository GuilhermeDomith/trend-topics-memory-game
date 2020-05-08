import React from 'react';

const Status = ({ label, value }) => {
    return (
        <div className="status">
            <span>{value}</span>
            <label>{label}</label>
        </div>
    )
}

const FooterStatus = ({ flippedCard, hits }) => {
    return (
        <div className="game-status">
            <Status label="Selecionado" value={(flippedCard != null) ? flippedCard.value : '-'} />
            <Status label="Pontos" value={hits} />
        </div>
    )
}

export default FooterStatus;