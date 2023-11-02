import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessWordList from '../GuessWordList/GuessWordList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [words, setWords] = useState([]);
    const handleSubmit = (guessInputValue) => {
        const nextWord = { id: crypto.randomUUID(), label: guessInputValue };
        setWords([...words, nextWord]);
    };

    return (
        <>
            <GuessWordList words={words} answer={answer} />
            <GuessInput onSubmit={handleSubmit} />
        </>
    );
}

export default Game;
