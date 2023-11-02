import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessWordList({ words = [] }) {
    return (
        <div className="guess-results">
            {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
                <Guess key={num} word={words[num]} />
            ))}
        </div>
    );
}

export default GuessWordList;