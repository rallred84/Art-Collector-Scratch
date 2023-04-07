import { useState } from 'react';
import './App.css';
import Header from './Header';
import Searchbar from './Searchbar';
import SearchResults from './SearchResults';
import SingleItemView from './SingleItemView';

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
