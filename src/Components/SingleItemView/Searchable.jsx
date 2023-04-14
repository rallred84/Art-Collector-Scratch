import { fetchSearchResultsfromKeyword } from '../../api';

const Searchable = ({ fact, setSearchResultList, setIsLoading }) => {
  return (
    <td>
      <span
        className="searchable"
        onClick={() => {
          setIsLoading(true);
          Promise.resolve(fetchSearchResultsfromKeyword(fact)).then(
            (values) => {
              setSearchResultList(values);
              setTimeout(() => {
                setIsLoading(false);
              }, 500);
            }
          );
        }}
      >
        {fact.value}
      </span>
    </td>
  );
};

export default Searchable;
