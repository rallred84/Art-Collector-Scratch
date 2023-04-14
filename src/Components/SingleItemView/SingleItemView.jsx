import InfoRow from './InfoRow';
import People from './People';
import './SingleItemView.css';

const SingleItemView = ({ singleItemDetails, setSearchResultList }) => {
  const facts = [
    { name: 'Culture', value: singleItemDetails.culture, searchable: true },
    { name: 'Medium', value: singleItemDetails.medium, searchable: true },
    false,
    {
      name: 'Description',
      value: singleItemDetails.description,
      searchable: false,
    },
    { name: 'Style', value: singleItemDetails.style, searchable: false },
    { name: 'Technique', value: singleItemDetails.technique, searchable: true },
    {
      name: 'Dimensions',
      value: singleItemDetails.dimensions,
      searchable: false,
    },
    {
      name: 'Department',
      value: singleItemDetails.department,
      searchable: false,
    },
    { name: 'Division', value: singleItemDetails.division, searchable: false },
    { name: 'Contact', value: singleItemDetails.contact, searchable: false },
    {
      name: 'Credit Line',
      value: singleItemDetails.creditline,
      searchable: false,
    },
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
                <People
                  singleItemDetails={singleItemDetails}
                  setSearchResultList={setSearchResultList}
                />
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
