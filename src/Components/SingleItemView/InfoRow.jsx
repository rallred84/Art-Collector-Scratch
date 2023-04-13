import SingleItemView from './SingleItemView';

const InfoRow = ({ fact }) => {
  if (fact[1]) {
    return (
      <tr>
        <td>{fact[0]}</td>
        <td>{fact[1]}</td>
      </tr>
    );
  }
};
export default InfoRow;
