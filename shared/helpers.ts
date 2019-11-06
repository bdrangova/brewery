const API_KEY = 'a5c1b917e7ba62dcd79f434ed73bc72d';
const API_BEER_URL = 'https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beer/';
const API_BREWERY_URL = 'https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/brewery/'

async function fetchRandomBeerId() {
  const url = `${API_BEER_URL}random?key=${API_KEY}`;
  return fetch(url)
    .then((response) => 
    response.json())
    .then((response) => 
    response.data.id);
}

async function fetchBeer(id: string) {
  const url = `${API_BEER_URL}${id}?key=${API_KEY}&withBreweries=Y`;
  return fetch(url)
    .then((response) => 
    response.json())
    .then((response) => 
    response.data);
}

export async function generateBeer() {
  const beerId = await fetchRandomBeerId();
  const beer = await fetchBeer(beerId);
  return beer;
}

export async function fetchBrewery(breweryId) {
  return fetch(`${API_BREWERY_URL}${breweryId}?key=${API_KEY}`)
  .then((response) => 
  response.json())
  .then((response) => 
  response.data);
}
