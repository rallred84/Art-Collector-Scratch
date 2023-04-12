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
        query={query}
        setQuery={setQuery}
        classifications={classifications}
        centuries={centuries}
        classification={classification}
        setClassification={setClassification}
        century={century}
        setCentury={setCentury}
        fetchSearchResults={fetchSearchResults}
        setSearchResultList={setSearchResultList}
      />
      <div id="body">
        <SearchResults searchResultList={searchResultList} />
        <SingleItemView />
      </div>
    </div>
  );
}

export default App;
