import { useState } from 'react';
import SearchResults from './SearchResults';

const SearchContent = ({ searchResultList }) => {
  return (
    <ul>
      {searchResultList.map((result) => {
        return <li key={result.objectid}>{result.title}</li>;
      })}
    </ul>
  );
};

export default SearchContent;
