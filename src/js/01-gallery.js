// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery .gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
  captionClass: 'gallery__captionClass',
});

const createGalletyMarkup = gallery =>
  gallery
    .map(
      ({ original, preview, description }) =>
        `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`
    )
    .join('');

galleryRef.innerHTML = createGalletyMarkup(galleryItems);

lightbox.refresh();
// Change code below this line

console.log(galleryItems);
