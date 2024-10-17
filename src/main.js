

const API_KEY = process.env.API_KEY;
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

  const { hits } = await response.json();

  renderGallery(hits);

  form.elements[0].disabled = 'false';
  form.elements[0].value = '';
};

function renderGallery(data) {
  const markup = data.map(img => renderCard(img)).join('');

  gallery.innerHTML = markup;
}

function renderCard({ webformatURL, tags, views, likes, downloads, comments }) {
  return `
            <li class="gallery__item card">
              <img
                class="card__image"
                src="${webformatURL}"
                alt="${tags}"
              >
              <div class="card__info info">
                <ul class="info__list">
                  <li class="info__item">
                    <h3 class="info__title">Likes</h3>
                    <p class="info__value">
                      ${likes}
                    </p>
                  </li>
                  <li class="info__item">
                    <h3 class="info__title">Views</h3>
                    <p class="info__value">
                      ${views}
                    </p>
                  </li>
                  <li class="info__item">
                    <h3 class="info__title">Comments</h3>
                    <p class="info__value">
                    ${comments}
                    </p>
                  </li>
                  <li class="info__item">
                    <h3 class="info__title">Downloads</h3>
                    <p class="info__value">
                    ${downloads}
                    </p>
                  </li>
                </ul>
              </div>
            </li>
  `;
}

const img = {
  id: 7696955,
  pageURL:
    'https://pixabay.com/photos/flower-ladybug-insect-snowdrops-7696955/',
  type: 'photo',
  tags: 'flower, ladybug, insect',
  previewURL:
    'https://cdn.pixabay.com/photo/2023/01/04/15/01/flower-7696955_150.jpg',
  previewWidth: 98,
  previewHeight: 150,
  webformatURL:
    'https://pixabay.com/get/g4d56abce9a02a6fb27b095bdcdcee94dea2efc97d8c8b089e0435f9e954cd3761c5402a112d10fe796f2b3d65c2a074c4e5e95857fc2d0d00a31712e05c2e2c7_640.jpg',
  webformatWidth: 416,
  webformatHeight: 640,
  largeImageURL:
    'https://pixabay.com/get/g5bb82285f1227a319cd50ff02504b73e05129fc37b57069e9a22425a9881ca2c11dacd040256945533770066e0da6c5601fd9bf6a532e03b2c875644181c6fe1_1280.jpg',
  imageWidth: 3331,
  imageHeight: 5124,
  imageSize: 2536236,
  views: 199959,
  downloads: 178311,
  collections: 3487,
  likes: 373,
  comments: 77,
  user_id: 298457,
  user: 'Pat_Photographies',
  userImageURL:
    'https://cdn.pixabay.com/user/2019/08/16/09-52-22-553_250x250.jpg',
};
