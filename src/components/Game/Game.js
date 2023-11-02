import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessWordList from '../GuessWordList/GuessWordList';
import SadBanner from '../SadBanner/SadBanner';
import HappyBanner from '../HappyBanner/HappyBanner';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [words, setWords] = useState([]);
    const [sadBanner, setSadBanner] = useState(false);
    const [happyBanner, setHappyBanner] = useState(false);
    const handleSubmit = (guessInputValue) => {
        const nextWord = { id: crypto.randomUUID(), label: guessInputValue };
        const nextWords = [...words, nextWord];
        setWords(nextWords);

        if (answer === guessInputValue) {
            setHappyBanner(true);
            return true;
        }

        if (nextWords.length >= 6) setSadBanner(true);
    };

    return (
        <>
            <GuessWordList words={words} answer={answer} />
            <GuessInput
                onSubmit={handleSubmit}
                disabled={sadBanner || happyBanner}
            />
            {sadBanner && <SadBanner answer={answer} />}
            {happyBanner && <HappyBanner steps={words.length} />}
        </>
    );
}

export default Game;
