import SearchContent from './Components/SearchContent';

const SearchResults = ({
  setIsLoading,
  searchResultList,
  setSingleItemDetails,
}) => {
  return (
    <div id="search-results">
      <div id="search-toggle">
        <button>Previous</button>
        <button>Next</button>
      </div>
      <div id="search-content">
        <SearchContent
          setIsLoading={setIsLoading}
          searchResultList={searchResultList}
          setSingleItemDetails={setSingleItemDetails}
        />
      </div>
    </div>
  );
};

export default SearchResults;
