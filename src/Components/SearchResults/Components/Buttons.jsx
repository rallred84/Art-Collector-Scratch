import { fetchWithURL } from '../../../api';

const Buttons = ({
  className,
  buttonName,
  url,
  setSearchResultList,
  setSearchResultInfo,
}) => {
  if (className === 'active-button') {
    return (
      <button
        className={className}
        onClick={() => {
          Promise.resolve(fetchWithURL(url)).then((values) => {
            setSearchResultList(values.records);
            setSearchResultInfo(values.info);
          });
        }}
      >
        {buttonName}
      </button>
    );
  } else {
    return <button className={className}>{buttonName}</button>;
  }
};

export default Buttons;
