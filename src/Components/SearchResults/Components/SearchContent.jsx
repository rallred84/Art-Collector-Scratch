import '../SearchResults.css';

const SearchContent = ({ searchResultList }) => {
  return (
    <ul>
      {searchResultList.map((result) => {
        return (
          <div className="search-result-card" key={result.objectid}>
            <img src={result.primaryimageurl} />
            <p>{result.title}</p>
          </div>
        );
      })}
    </ul>
  );
};

export default SearchContent;
