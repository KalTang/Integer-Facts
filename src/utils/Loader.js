import React from 'react';
import loader from '../assets/loader.gif';

const Loader = () => {
    return (
        <>
            <img
                src={loader}
                alt="loading..."
                style={{ width: '200px', margin: 'auto', display: 'block' }}
            />
        </>
    );
};

export default Loader;
