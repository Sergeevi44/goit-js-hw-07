import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
	galleryList: document.querySelector('.gallery'),
	galleryLink: document.querySelector('.gallery__item'),
}

refs.galleryList.insertAdjacentHTML('beforeend', renderMarkup(galleryItems))
refs.galleryList.addEventListener('click', onImgClick)

function renderMarkup(itemsArray) {
    return itemsArray.map(({original, preview, description})=>
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join('')
}

function onImgClick(e) {
	e.preventDefault()
	new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay:250,});
}

// console.log(galleryItems);
