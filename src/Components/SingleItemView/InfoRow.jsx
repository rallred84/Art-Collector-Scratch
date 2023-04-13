import { fetchSearchResultsfromKeyword } from '../../api';
import SingleItemView from './SingleItemView';

//fact array is as follows:
//Index 0: Row Name
//Index 1: Row Value
//Index 2: (optional) Row Searchable
const InfoRow = ({ fact, setSearchResultList }) => {
  if (fact[1]) {
    return (
      <tr>
        <td>{fact[0]}</td>
        {fact[2] ? (
          <td>
            <span
              className="searchable"
              onClick={() => {
                Promise.resolve(fetchSearchResultsfromKeyword(fact)).then(
                  (values) => setSearchResultList(values)
                );
              }}
            >
              {fact[1]}
            </span>
          </td>
        ) : (
          <td>{fact[1]}</td>
        )}
      </tr>
    );
  }
};
export default InfoRow;
