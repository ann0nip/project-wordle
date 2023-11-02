import React from 'react';
import { range } from '../../utils';

function Guess({ word }) {
    return (
        <p className="guess">
            {range(5).map((index) => (
                <span key={index} className="cell">
                    {word ? word.label[index] : ''}
                </span>
            ))}
        </p>
    );
}

export default Guess;
