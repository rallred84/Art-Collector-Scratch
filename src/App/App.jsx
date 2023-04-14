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
  //Is Loading State
  const [isLoading, setIsLoading] = useState(false);

  // States to Populate drop down menus
  const [classifications, setClassifications] = useState([]);
  const [centuries, setCenturies] = useState([]);
  //States to change search values
  const [query, setQuery] = useState('');
  const [classification, setClassification] = useState('any');
  const [century, setCentury] = useState('any');
  //States to populate search results window
  const [searchResultList, setSearchResultList] = useState([]);
  // State to populate single item view window
  const [singleItemDetails, setSingleItemDetails] = useState({});

  useEffect(() => {
    const classifications = fetchAllClassifications();
    const centuries = fetchAllCenturies();
    // setIsLoading(true);
    Promise.all([classifications, centuries]).then((values) => {
      setQuery('');
      setClassifications(values[0]);
      setCenturies(values[1]);
    });
  }, []);

  const IsLoading = () => {
    if (isLoading) {
      return (
        <div className="loading">
          <span>LOADING</span>
        </div>
      );
    }
  };

  return (
    <div className="app">
      <IsLoading />
      <Header />
      <Searchbar
        //Is Loading
        setIsLoading={setIsLoading}
        //Drop down menu values
        classifications={classifications}
        centuries={centuries}
        //Search values and setting functions
        query={query}
        setQuery={setQuery}
        classification={classification}
        setClassification={setClassification}
        century={century}
        setCentury={setCentury}
        //Search result api request and state setting
        fetchSearchResults={fetchSearchResults}
        setSearchResultList={setSearchResultList}
      />
      <div id="main">
        <SearchResults
          setIsLoading={setIsLoading}
          searchResultList={searchResultList}
          setSingleItemDetails={setSingleItemDetails}
        />
        <SingleItemView
          setIsLoading={setIsLoading}
          setSearchResultList={setSearchResultList}
          singleItemDetails={singleItemDetails}
        />
      </div>
    </div>
  );
}

export default App;
