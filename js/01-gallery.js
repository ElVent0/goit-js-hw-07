import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(".gallery");
const galleryMarkup = createGalleryItems(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryItems(images) {
    return images.map(item => {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>
`;
    }).join("");
};

let instance;

galleryList.addEventListener("click", (event) => {
    if(!event.target.classList.contains('gallery__image')) {
        return;
    };

    event.preventDefault();

    instance = basicLightbox.create(`
    <div class="modal">
        <img src="${event.target.dataset.source}" alt="${galleryItems.description}"></img>
    </div>
    `);
    instance.show();   
    
    const modalImage = document.querySelector(".modal");

    modalImage.addEventListener("click", () => {
        instance.close();
    });
});