// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стnpmв
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);




const galleryContainer = document.querySelector('.gallery');
galleryContainer.addEventListener('click', openImgOriginal)

function galleryCreate(galleryItems) {
   return galleryItems.map(img => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${img.original}">
          <img
            class="gallery__image"
            src="${img.preview}"
            data-source="${img.original}"
            alt="${img.description}"
          />
        </a>
      </div>`
    }).join("")
} 
galleryContainer.insertAdjacentHTML('afterbegin', galleryCreate(galleryItems))

function openImgOriginal(e) {
  e.preventDefault()
  if(e.target.nodeName !== 'IMG'){
    return;
  }
    const instance = basicLightbox.create(`
    <img src='${e.target.dataset.source}' width="800" height="600">
`)

instance.show() 
if (instance.visible()){
window.addEventListener('keydown', closeModal)
}
function closeModal(e) {
  if(e.code === 'Escape'){
    instance.close()
window.removeEventListener('keydown', closeModal)   
  }
}
}
