const gallery = document.getElementById('gallery');

export function clearGallery() {
  gallery.innerHTML = '';
}

export function renderGallery(data) {
  const markup = data.map(img => renderCard(img)).join('');

  gallery.innerHTML = markup;
}

export function renderCard({
  webformatURL,
  tags,
  views,
  likes,
  downloads,
  comments,
}) {
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
