import { useState } from 'react';
import './App.css';
import Header from '../Components/Header/Header';
import Searchbar from '../Components/Searchbar/Searchbar';
import SearchResults from '../Components/SearchResults/SearchResults';
import SingleItemView from '../Components/SingleItemView/SingleItemView';

function App() {
  return (
    <div className="App">
      <Header />
      <Searchbar />
      <div id="body">
        <SearchResults />
        <SingleItemView />
      </div>
    </div>
  );
}

export default App;
