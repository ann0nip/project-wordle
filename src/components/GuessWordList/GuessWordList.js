import React from 'react';

function GuessWordList({ words = [] }) {
    return (
        <div className="guess-results">
            {words.map((word) => (
                <p key={word.id} className="guess">
                    {word.label}
                </p>
            ))}
        </div>
    );
}

export default GuessWordList;
