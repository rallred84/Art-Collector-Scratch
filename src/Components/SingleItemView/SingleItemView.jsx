import InfoRow from './InfoRow';
import './SingleItemView.css';

const SingleItemView = ({ singleItemDetails, setSearchResultList }) => {
  const facts = [
    ['Culture', singleItemDetails.culture, true],
    ['Medium', singleItemDetails.medium, true],
    false,
    ['Description', singleItemDetails.description, false],
    ['Style', singleItemDetails.style, false],
    ['Technique', singleItemDetails.technique, true],
    ['Dimensions', singleItemDetails.dimensions, false],
    ['Department', singleItemDetails.department, false],
    ['Division', singleItemDetails.division, false],
    ['Contact', singleItemDetails.contact, false],
    ['Credit Line', singleItemDetails.creditline, false],
  ];

  //The different facts look like this:  title, dated, images, primaryimageurl, description, culture, style,technique, medium, dimensions, people, department, division, contact, creditline

  // The <Searchable /> ones are: culture, technique, medium (first toLowerCase it), and person.displayname (one for each PEOPLE)

  //  NOTE: people and images are likely to be arrays, and will need to be mapped over if they exist

  if (singleItemDetails.title) {
    return (
      <div id="single-item-window">
        <div className="single-item-header">
          <h2>{singleItemDetails.title}</h2>
          <h3>{singleItemDetails.dated}</h3>
        </div>
        <div className="single-item-details">
          <div className="single-item-stats">
            <table>
              <tbody>
                {facts.map((fact, idx) => {
                  return (
                    <InfoRow
                      key={idx}
                      fact={fact}
                      setSearchResultList={setSearchResultList}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="single-item-img">
            <img src={singleItemDetails.primaryimageurl} />
          </div>
        </div>
      </div>
    );
  }
};

export default SingleItemView;
