import { fetchSearchResultsfromKeyword } from '../../api';

const Searchable = ({
  fact,
  setSearchResultList,
  setSearchResultInfo,
  setIsLoading,
}) => {
  return (
    <td>
      <span
        className="searchable"
        onClick={() => {
          setIsLoading(true);
          Promise.resolve(fetchSearchResultsfromKeyword(fact)).then(
            (values) => {
              setSearchResultList(values.records);
              setSearchResultInfo(values.info);
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
