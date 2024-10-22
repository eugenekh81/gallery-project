import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.getElementById('gallery');

export function clearGallery() {
  gallery.innerHTML = '';
}

const galleryLB = new SimpleLightbox('.gallery a');
console.log(galleryLB);

export function renderGallery(data) {
  const markup = data.map(img => renderCard(img)).join('');

  gallery.innerHTML = markup;
  galleryLB.refresh();
  console.log(galleryLB);
}

export function renderCard({
  webformatURL,
  largeImageURL,
  tags,
  views,
  likes,
  downloads,
  comments,
}) {
  return `
            <a class="gallery__item card" href="${largeImageURL}">
              <img
                class="card__image"
                src="${webformatURL}"
                alt="${tags}"
                loading="lazy"
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
            </a>
  `;
}
