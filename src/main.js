import { fetchImages } from './js/pixabay-api';
import {
  renderImages,
  showLoader,
  hideLoader,
  showError,
} from './js/render-functions.js';

document.querySelector('.form').addEventListener('submit', async event => {
  event.preventDefault();
  const query = event.target.elements['search-text'].value.trim();

  if (!query) {
    showError('Enter search query');
    return;
  }

  showLoader();
  try {
    const images = await fetchImages(query);
    hideLoader();

    if (images.length === 0) {
      showError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    } else {
      renderImages(images);
    }
  } catch {
    hideLoader();
    showError(
      'Sorry, there are no images matching your search query. Please try again!'
    );
  }
});
