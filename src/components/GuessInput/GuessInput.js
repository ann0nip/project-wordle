import React, { useState } from 'react';

function GuessInput({ onSubmit, disabled }) {
    const [inputValue, setInputValue] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();

        onSubmit(inputValue);
        setInputValue('');
    };

    return (
        <form className="guess-input-wrapper" onSubmit={handleOnSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                onChange={(e) => {
                    const nextInputValue = e.target.value.toUpperCase();
                    setInputValue(nextInputValue);
                }}
                minLength={5}
                maxLength={5}
                pattern="[a-zA-Z]{5}"
                required
                type="text"
                value={inputValue}
                disabled={disabled}
            />
        </form>
    );
}

export default GuessInput;
