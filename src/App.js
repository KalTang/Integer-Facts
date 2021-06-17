import { useState } from 'react';
import './styles/app.css';
import Header from './components/Header';
import Search from './components/Search';
import ResultDisplay from './components/ResultDisplay';

function App() {
    return (
        <div className="container">
            <Header />
            <Search />
            <ResultDisplay />
        </div>
    );
}

export default App;
