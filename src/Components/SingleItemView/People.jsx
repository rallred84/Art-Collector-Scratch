import Searchable from './Searchable';

const People = ({ singleItemDetails, setSearchResultList, setIsLoading }) => {
  if (singleItemDetails.people) {
    const facts = [];
    const personArray = singleItemDetails.people;
    personArray.map((person) => {
      const factName = person.role;
      const factValue = person.name;
      const factSearchValue = person.personid;

      facts.push({
        name: factName,
        value: factValue,
        searchId: 'person',
        searchValue: factSearchValue,
      });
    });
    return facts.map((fact, idx) => {
      return (
        <tr key={idx}>
          <td>{fact.name}</td>
          <Searchable
            fact={fact}
            setIsLoading={setIsLoading}
            setSearchResultList={setSearchResultList}
          />
        </tr>
      );
    });
  }
};

export default People;
