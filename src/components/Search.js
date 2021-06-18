import React, { useState } from 'react';
import '../styles/search.css';
import { TextField } from '@material-ui/core';

const Search = ({ search, setSearch, handleSearch }) => {
    return (
        <div>
            <form>
                <TextField
                    type="text"
                    variant="standard"
                    placeholder="Enter a number"
                    id="search"
                    className="input"
                    value={search}
                    onKeyUp={handleSearch}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
        </div>
    );
};

export default Search;
