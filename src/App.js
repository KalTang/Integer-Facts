import { useState } from 'react';
import './styles/app.css';
import Header from './components/Header';
import Search from './components/Search';

function App() {
    return (
        <div className="container">
            <Header />
            <Search />
        </div>
    );
}

export default App;
