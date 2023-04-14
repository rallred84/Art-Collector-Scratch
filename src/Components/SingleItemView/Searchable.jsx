import { fetchSearchResultsfromKeyword } from '../../api';

const Searchable = ({ fact, setSearchResultList }) => {
  return (
    <td>
      <span
        className="searchable"
        onClick={() => {
          Promise.resolve(fetchSearchResultsfromKeyword(fact)).then((values) =>
            setSearchResultList(values)
          );
        }}
      >
        {fact.value}
      </span>
    </td>
  );
};

export default Searchable;
