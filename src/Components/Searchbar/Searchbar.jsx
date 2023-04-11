import { useEffect, useState } from 'react';
import './Searchbar.css';
import { fetchAllCenturies, fetchAllClassifications } from '../../api';

const Searchbar = () => {
  // States to Populate drop down menus
  const [classifications, setClassifications] = useState([]);
  const [centuries, setCenturies] = useState([]);
  //States to change search values
  const [query, setQuery] = useState('');
  const [classification, setClassification] = useState('Any');
  const [century, setCentury] = useState('Any');

  useEffect(() => {
    const classifications = fetchAllClassifications();
    const centuries = fetchAllCenturies();

    Promise.all([classifications, centuries]).then((values) => {
      setQuery('');
      setClassifications(values[0]);
      setCenturies(values[1]);
    });
  }, []);

  return (
    <form
      id="searchbar"
      onSubmit={async (e) => {
        e.preventDefault();
        setQuery('');
        setClassification('Any');
        setCentury('Any');
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
          <option value="Any">Any</option>
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
          <option value="Any">Any</option>
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
