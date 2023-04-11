const apiUrl = 'https://api.harvardartmuseums.org';
const apiKey = 'apikey=e6d75dd5-4fd0-4efe-aa06-f4a9374ab437';

export async function fetchAllClassifications() {
  try {
    const response = await fetch(`${apiUrl}/classification?${apiKey}&size=100`);
    let data = await response.json();
    return data.records;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchAllCenturies() {
  try {
    const response = await fetch(`${apiUrl}/century?${apiKey}&size=100`);
    let data = await response.json();
    return data.records;
  } catch (error) {
    console.log(error);
  }
}
