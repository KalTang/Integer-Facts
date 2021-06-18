import { useState } from 'react';
import axios from 'axios';
import './styles/app.css';
import Header from './components/Header';
import Search from './components/Search';
import ResultDisplay from './components/ResultDisplay';
import Loader from './utils/Loader';

function App() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    const handleSearch = async (e) => {
        try {
            if (search) {
                const triviaData = await axios(
                    `http://numbersapi.com/${search}/trivia`
                );

                if (triviaData) {
                    setData(triviaData.data);
                }
            } else {
                setData(<Loader />);
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    console.log(data);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await axios(`http://numbersapi.com/${input}/trivia`);
    //         console.log(result.data);
    //         setData(result.data);
    //     };

    //     fetchData();
    // }, [console.log(`query >>>>> ${input}`)]);
    return (
        <div className="container">
            <Header />
            <Search
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            />
            <ResultDisplay data={data} />
        </div>
    );
}

export default App;
