import { useState, useEffect } from 'react';
import './App.css';
import Header from '../Components/Header/Header';
import Searchbar from '../Components/Searchbar/Searchbar';
import SearchResults from '../Components/SearchResults/SearchResults';
import SingleItemView from '../Components/SingleItemView/SingleItemView';

import {
  fetchAllCenturies,
  fetchAllClassifications,
  fetchSearchResults,
} from '../api';

function App() {
  // States to Populate drop down menus
  const [classifications, setClassifications] = useState([]);
  const [centuries, setCenturies] = useState([]);
  //States to change search values
  const [query, setQuery] = useState('');
  const [classification, setClassification] = useState('any');
  const [century, setCentury] = useState('any');

  const [searchResultList, setSearchResultList] = useState([]);

  useEffect(() => {
    const classifications = fetchAllClassifications();
    const centuries = fetchAllCenturies();

    Promise.all([classifications, centuries]).then((values) => {
      setQuery('');
      setClassifications(values[0]);
      setCenturies(values[1]);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Searchbar
        classifications={classifications}
        setClassifications={setClassifications}
        centuries={centuries}
        setCenturies={setCenturies}
        query={query}
        setQuery={setQuery}
        setClassification={setClassification}
        century={century}
        setCentury={setCentury}
        searchResultList={searchResultList}
        setSearchResultList={setSearchResultList}
        classification={classification}
        fetchAllCenturies={fetchAllCenturies}
        fetchAllClassifications={fetchAllClassifications}
        fetchSearchResults={fetchSearchResults}
      />
      <div id="body">
        <SearchResults searchResultList={searchResultList} />
        <SingleItemView />
      </div>
    </div>
  );
}

export default App;
