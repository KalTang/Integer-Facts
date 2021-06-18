import React from 'react';
import '../styles/resultDisplay.css';

const ResultDisplay = ({ data }) => {
    return (
        <div className="SearchResults">
            <p>{data}</p>
        </div>
    );
};

export default ResultDisplay;
