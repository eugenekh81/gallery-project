const API_KEY = '33432531-7b80a154fee85f6f8f513c2a2';
const BASE_URL = 'https://pixabay.com/api/';

const form = document.getElementById('search-form');
const gallery = document.getElementById('gallery');

form.addEventListener('submit', e => {
  e.preventDefault();
  const [input, button] = e.target.elements;
  loadData(input.value);
});

const loadData = async (query = '') => {
  form.elements[0].disabled = 'true';

  const response = await fetch(
    `${BASE_URL}?key=${API_KEY}&${query ? 'q=' : ''}${query}`
  );

  const data = await response.json();

  form.elements[0].disabled = 'false';
  form.elements[0].value = '';
  console.log(data, '<<<<');
};

function renderCard() {
  return `

  `
}
