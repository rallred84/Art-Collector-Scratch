const apiUrl = 'https://api.harvardartmuseums.org';
const apiKey = 'apikey=e6d75dd5-4fd0-4efe-aa06-f4a9374ab437';

export async function fetchAllClassifications() {
  try {
    const response = await fetch(`${apiUrl}/classification?${apiKey}&size=100`);
    const data = await response.json();
    return data.records;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchAllCenturies() {
  try {
    const response = await fetch(`${apiUrl}/century?${apiKey}&size=100`);
    const data = await response.json();
    return data.records;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchSearchResults(century, classification, queryString) {
  try {
    const response = await fetch(
      `${apiUrl}/object?${apiKey}&century=${century}&classification=${classification}&keyword=${queryString}`
    );
    const data = await response.json();
    return data.records;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchSearchResultsfromKeyword(fact) {
  try {
    const keyName = fact.searchId.toLowerCase();
    const keyValue = fact.searchValue;

    const response = await fetch(
      `${apiUrl}/object?${apiKey}&${keyName}=${keyValue}`
    );
    const data = await response.json();
    return data.records;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchSingleItem(id) {
  try {
    const response = await fetch(`${apiUrl}/object?${apiKey}&id=${id}`);
    const data = await response.json();
    return data.records[0];
  } catch (error) {
    console.log(error);
  }
}
