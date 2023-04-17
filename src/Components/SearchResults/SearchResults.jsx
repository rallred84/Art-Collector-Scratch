import SearchContent from './Components/SearchContent';
import { fetchWithURL } from '../../api';
import Buttons from './Components/Buttons';

const SearchResults = ({
  setIsLoading,
  setSearchResultList,
  setSearchResultInfo,
  searchResultList,
  searchResultInfo,
  setSingleItemDetails,
}) => {
  return (
    <div id="search-results">
      <div id="search-toggle">
        {searchResultInfo.prev ? (
          <Buttons
            className="active-button"
            buttonName={'Previous'}
            url={searchResultInfo.prev}
            setSearchResultList={setSearchResultList}
            setSearchResultInfo={setSearchResultInfo}
          />
        ) : (
          <Buttons className="inactive-button" buttonName={'Previous'} />
        )}
        {searchResultInfo.next ? (
          <Buttons
            className="active-button"
            buttonName={'Next'}
            url={searchResultInfo.next}
            setSearchResultList={setSearchResultList}
            setSearchResultInfo={setSearchResultInfo}
          />
        ) : (
          <Buttons className="inactive-button" buttonName={'Next'} />
        )}
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
