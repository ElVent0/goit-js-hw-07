import { galleryItems } from './gallery-items.js';
// Change code below this line 

const galleryList = document.querySelector(".gallery");
const galleryMarkup = createGalleryItems(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryItems(images) {
    return images.map(item => {
    return `
  <a class="gallery__item" href="${item.original}">
    <img 
        class="gallery__image" 
        src="${item.preview}" 
        alt="${item.description}" 
        />
  </a>
`;
    }).join("");
};

let lightbox;

galleryList.addEventListener("click", (event) => {
    if(!event.target.classList.contains('gallery__image')) {
        return;
    };

    event.preventDefault();

    lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captionsData: 'alt',
    });
});

