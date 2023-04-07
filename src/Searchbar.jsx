import { useEffect, useState } from 'react';
import './Searchbar.css';

const Searchbar = () => {
  const [classifications, setClassifications] = useState([]);
  const [centuries, setCenturies] = useState([]);

  useEffect(() => {
    setClassifications([1, 2, 3]);
    setCenturies(['1900s', '1800s', '1700s']);
  }, []);

  return (
    <form id="searchbar">
      <div id="query">
        <div className="form-label">Query</div>
        <input type="text" className="query-input" />
      </div>
      <div id="classification">
        <div className="form-label">Classification</div>
        <select name="classification" id="classification">
          {classifications.map((classification) => {
            return (
              <option key={classification} value={classification}>
                {classification}
              </option>
            );
          })}
        </select>
      </div>
      <div id="century">
        <div className="form-label">Century</div>
        <select name="century" id="century">
          {}
        </select>
      </div>
      <button id="form-submit">Search</button>
    </form>
  );
};

export default Searchbar;
