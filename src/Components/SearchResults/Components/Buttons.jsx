import { fetchWithURL } from '../../../api';

const Buttons = ({
  className,
  buttonName,
  setIsLoading,
  url,
  setSearchResultList,
  setSearchResultInfo,
}) => {
  if (className === 'active-button') {
    return (
      <button
        className={className}
        onClick={() => {
          setIsLoading(true);
          Promise.resolve(fetchWithURL(url)).then((values) => {
            setSearchResultList(values.records);
            setSearchResultInfo(values.info);
            setIsLoading(false);
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
