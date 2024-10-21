import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.getElementById('search-form');

import { loadData } from './js/pixabay-api';
import { clearGallery, renderGallery } from './js/render-functions';

form.addEventListener('submit', async e => {
  e.preventDefault();



  const [input, button] = e.target.elements;
  clearGallery();
  console.log('cleared gallery');

  const images = await loadData(input.value);

  form.elements[0].value = '';

  if (!images.length) {
    return iziToast.error({
      position: 'topRight',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  }

  renderGallery(images);
});
