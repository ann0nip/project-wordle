import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ value, status }) {
    const cssStatus = status ? `cell ${status}` : 'cell';
    return <span className={cssStatus}>{value}</span>;
}

function Guess({ word, answer }) {
    const result = checkGuess(word ? word.label : undefined, answer);

    return (
        <p className="guess">
            {range(5).map((index) => (
                <Cell
                    key={index}
                    value={result ? result[index].letter : undefined}
                    status={result ? result[index].status : undefined}
                />
            ))}
        </p>
    );
}

export default Guess;
