import React from 'react';

function HappyBanner({ steps }) {
    return (
        <div className="happy banner">
            <p>
                <strong>Congratulations!</strong> Got it in
                <strong>{' ' + steps} guesses</strong>.
            </p>
        </div>
    );
}

export default HappyBanner;
