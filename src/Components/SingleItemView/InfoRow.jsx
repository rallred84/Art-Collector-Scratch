import { fetchSearchResultsfromKeyword } from '../../api';
import NotSearchable from './NotSearchable';
import Searchable from './Searchable';
import SingleItemView from './SingleItemView';

//fact array is as follows:
//Index 0: Row Name
//Index 1: Row Value
//Index 2: (optional) Row Searchable
const InfoRow = ({
  fact,
  setSearchResultList,
  setSearchResultInfo,
  setIsLoading,
}) => {
  if (fact.value) {
    return (
      <tr>
        <td>{fact.name}</td>
        {fact.searchable ? (
          <Searchable
            fact={fact}
            setSearchResultList={setSearchResultList}
            setSearchResultInfo={setSearchResultInfo}
            setIsLoading={setIsLoading}
          />
        ) : (
          <NotSearchable fact={fact} />
        )}
      </tr>
    );
  }
};
export default InfoRow;
