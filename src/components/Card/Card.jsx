import React from "react";


export const Card = ({imgCharacter, nameCharacter, quoteCharacter}) => {
    return (
        <div>
            <img  className="bg-teal-800" src={imgCharacter} alt={nameCharacter} />
            <h2>{nameCharacter}</h2>
            <p>{quoteCharacter}</p>
        </div>
    )
}