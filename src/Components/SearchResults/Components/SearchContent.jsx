import '../SearchResults.css';

const SearchContent = ({ searchResultList }) => {
  return (
    <ul>
      {searchResultList.map((result) => {
        return (
          <div className="search-result-card" key={result.objectid}>
            {
              /* Using a ternary operator to pass an image into the card if the image link exists in the object, otherwise false */
              result.primaryimageurl ? (
                <img src={result.primaryimageurl} />
              ) : (
                false
              )
            }
            <p>{result.title}</p>
          </div>
        );
      })}
    </ul>
  );
};

export default SearchContent;
