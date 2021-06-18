import React from 'react';
import { Typography } from '@material-ui/core';
import '../styles/resultDisplay.css';

const ResultDisplay = ({ data }) => {
    return (
        <div className="SearchResults">
            <Typography>{data}</Typography>
        </div>
    );
};

export default ResultDisplay;
