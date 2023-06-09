import './Searchbar.css';

const Searchbar = ({
  setIsLoading,
  classifications,
  centuries,
  query,
  setQuery,
  classification,
  setClassification,
  century,
  setCentury,
  fetchSearchResults,
  setSearchResultList,
  setSearchResultInfo,
}) => {
  let classificationNames = classifications.map((value) => value.name);
  classificationNames = classificationNames.sort();
  return (
    <form
      id="searchbar"
      onSubmit={async (e) => {
        e.preventDefault();
        setIsLoading(true);
        Promise.resolve(
          fetchSearchResults(century, classification, query)
        ).then((values) => {
          setSearchResultList(values.records);
          setSearchResultInfo(values.info);
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
        });
        setQuery('');
        setClassification('any');
        setCentury('any');
      }}
    >
      <fieldset id="query">
        <label className="form-label">Query</label>
        <input
          type="text"
          className="query-input"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </fieldset>
      <fieldset id="classification">
        <label className="form-label">
          Classification{' '}
          <span className="option-count">({classifications.length})</span>
        </label>
        <select
          name="classification"
          id="classification"
          value={classification}
          onChange={(e) => {
            setClassification(e.target.value);
          }}
        >
          <option value="any">Any</option>
          {classifications.map((classification) => {
            return (
              <option key={classification.id}>{classification.name}</option>
            );
          })}
        </select>
      </fieldset>
      <fieldset id="century">
        <label className="form-label">
          Century <span className="option-count">({centuries.length})</span>
        </label>
        <select
          name="century"
          id="century"
          value={century}
          onChange={(e) => {
            setCentury(e.target.value);
          }}
        >
          <option value="any">Any</option>
          {centuries.map((century) => {
            return <option key={century.id}>{century.name}</option>;
          })}
        </select>
      </fieldset>

      <button id="form-submit">Search</button>
    </form>
  );
};

export default Searchbar;
