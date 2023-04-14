import Searchable from './Searchable';

const People = ({ singleItemDetails, setSearchResultList }) => {
  if (singleItemDetails.people) {
    const facts = [];
    const personArray = singleItemDetails.people;
    personArray.map((person) => {
      const factName = person.role;
      const factValue = person.name;
      facts.push({ name: factName, value: factValue });
    });
    return facts.map((fact, idx) => {
      return (
        <tr key={idx}>
          <td>{fact.name}</td>
          <Searchable fact={fact} setSearchResultList={setSearchResultList} />
        </tr>
      );
    });
  }
};

export default People;
