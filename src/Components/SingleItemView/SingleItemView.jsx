import './SingleItemView.css';

const SingleItemView = ({ singleItemDetails }) => {
  if (singleItemDetails.title) {
    return (
      <div id="single-item-window">
        <div className="single-item-header">
          <h2>{singleItemDetails.title}</h2>
          <h3>{singleItemDetails.century}</h3>
        </div>
        <div className="single-item-details">
          <div className="single-item-stats">
            <table>
              <tbody>
                <tr>
                  <td>Culture</td>
                  <td>{singleItemDetails.culture}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="single-item-img"></div>
        </div>
      </div>
    );
  }
};

export default SingleItemView;
