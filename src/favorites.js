import { createBaseMarkup } from './partials/markup';
import spriteUrl from '/images/icon-sprites.svg';
const LOCALSTORAGE_FAV_KEY = "favorite-articles";

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    document.querySelector('.articles_container').innerHTML = makeMarkup();
});

function makeMarkup() {
    const objArr = JSON.parse(localStorage.getItem(LOCALSTORAGE_FAV_KEY));
    const markup = objArr.map(article => {
      if (!article) {
        return;
      }

      const { section, title, description, url, date, img, imgCaption, id } =
        article;

      return `<li class="article" data-id="${id}">
     <div class="article_img_wrapper">
       <p class="already-read is-hidden">Already read</p>
       <p class="article_category">${section}</p>
       <img class="article_img" src="${img}" alt="${imgCaption}" width="395" height="395">
       <div class="article_flag">
       <button class="article_flag--add"><span class="article_flag_text">Add to favorite</span>
         <svg width="16" height="16">
         <use href="${spriteUrl}#heart_contur" width="16" height="16"></use>
        </svg>
         </button>
         <button class="article_flag--remove is-hidden"><span class="article_flag_text">Remove from favorite</span>
         <svg width="16" height="16">
         <use href="${spriteUrl}#heart_fill" width="16" height="16"></use>
       </svg>
          </button>
         </div>
     </div>
     <div class="article_text_wrapper">
       <h2 class="article_title">${title}</h2>
       <p class="article_text">${description}</p>
     </div>
     <div class="article_info_wrapper">
       <p class="article_date">${date}</p>
       <a href="${url}" class="read-more" target="_blank">Read more</a>
     </div>
     </li>`;
    })
        .join('');

  return markup;
}
