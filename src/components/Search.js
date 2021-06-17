import React, { useState } from 'react';
import '../styles/search.css';
import { TextField } from '@material-ui/core';

const Search = () => {
    const [input, setInput] = useState('');

    return (
        <div>
            <form>
                <TextField
                    type="text"
                    variant="outlined"
                    placeholder="Enter a number"
                    id="search"
                    className="input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </form>
        </div>
    );
};

export default Search;
