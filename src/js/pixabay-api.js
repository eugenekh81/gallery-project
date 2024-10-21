const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://pixabay.com/api/';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFE_SEARCH = 'true';

export const loadData = async (query = '') => {
  const response = await fetch(
    `${BASE_URL}?key=${API_KEY}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFE_SEARCH}&${
      query ? 'q=' : ''
    }${query}`
  );

  const { hits } = await response.json();

  return hits;
};
