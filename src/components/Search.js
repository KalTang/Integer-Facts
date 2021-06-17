import React from 'react';
import '../styles/search.css';
import { TextField } from '@material-ui/core';

const Search = () => {
    return (
        <div>
            <form>
                <TextField
                    type="text"
                    variant="outlined"
                    placeholder="Enter a number"
                    id="search"
                    className="input"
                />
            </form>
        </div>
    );
};

export default Search;
