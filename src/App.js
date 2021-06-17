import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/app.css';
import Header from './components/Header';
import Search from './components/Search';
import ResultDisplay from './components/ResultDisplay';

function App() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://numbersapi.com/${query}/trivia`);
            console.log(result.data);
            setData(result.data);
        };

        fetchData();
    }, [console.log(query)]);
    return (
        <div className="container">
            <Header />
            <Search input={(i) => setQuery(i)} />
            <ResultDisplay />
        </div>
    );
}

export default App;
