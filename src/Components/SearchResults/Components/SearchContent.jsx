import { fetchSingleItem } from '../../../api';
import '../SearchResults.css';

const SearchContent = ({ searchResultList, setSingleItemDetails }) => {
  return (
    <div>
      {searchResultList.map((result) => {
        return (
          <div
            onClick={() => {
              //Want to call an api fetch request for clicked object and set the single item view window with it

              Promise.resolve(fetchSingleItem(result.id)).then((value) =>
                setSingleItemDetails(value)
              );
            }}
            className="search-result-card"
            key={result.objectid}
          >
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
    </div>
  );
};

export default SearchContent;
