import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import '../css/loader.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
let lightbox;

export function renderImages(images) {
  gallery.innerHTML = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery-item">
          <a href="${largeImageURL}" class="gallery-link">
            <img src="${webformatURL}" alt="${tags}" />
          </a>
          <div class="info">
            <p> likes  ${likes}</p>
            <p> views ${views}</p>
            <p> comments ${comments}</p>
            <p> downloads ${downloads}</p>
          </div>
        </li>`
    )
    .join('');

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a');
  } else {
    lightbox.refresh();
  }
}

export function showLoader() {
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.style.display = 'none';
}

export function showError(message) {
  iziToast.error({ title: 'Error', message });
}
