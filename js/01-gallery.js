import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
	galleryList: document.querySelector('.gallery'),
}

refs.galleryList.insertAdjacentHTML('beforeend', renderMarkup(galleryItems))
refs.galleryList.addEventListener('click', onImgClick)

function renderMarkup(itemsArray) {
    return itemsArray.map(({original, preview, description})=>
        `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
    ).join('')
}
function onImgClick(e) {
	e.preventDefault()
	if (e.target.tagName!='IMG') {
		return
	}
	const original = `<img src="${e.target.dataset.source}"/>`;
	addEventListener('keydown', onEscPress)
	return basicLightbox.create(original).show()
}
function onEscPress(e) {
	if (e.key != 'Escape') {
		return
	}
	removeEventListener('keydown', onEscPress);
}