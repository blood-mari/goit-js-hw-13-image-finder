import { refs } from './mainRefs.js';
import BaseApiService from "./apiService";
import cardItemTpl from '../templates/cardItem.hbs';
import './pnotify';

const imageApiService = new BaseApiService;

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
    event.preventDefault();
    clearGallery();
    imageApiService.inputQuery = event.target.elements.query.value.trim();

    if (imageApiService.inputQuery === '') {

        imageApiService.pushError('Enter your query');

        return;
    }

    imageApiService.resetPage();

    fetchImages();
}

function galleryMarkUp(hits) {
    refs.galleryCont.insertAdjacentHTML('beforeend', cardItemTpl(hits));
}

function clearGallery() {
    refs.galleryCont.innerHTML = '';
}

function changeIconsOnSearch() {
    refs.spinner.classList.toggle('hidden');
    refs.searchIcon.classList.toggle('hidden');
}

function fetchImages() {
    changeIconsOnSearch();
    imageApiService.getQuery().then(hits => {
        if (hits.length === 0) {
            changeIconsOnSearch();
            imageApiService.pushError('No matches found');
        }

            if (hits.length > 0) {
                changeIconsOnSearch();
                galleryMarkUp(hits);
            }
    });
}

const scrollTo = entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting && imageApiService.inputQuery !== '') {
            imageApiService.getQuery().then(images => {
                    galleryMarkUp(images);
                    imageApiService.incrementPage();

            });
        }
    });
}

const options = {
    rootMargin: '250px',
}

const observer = new IntersectionObserver(scrollTo, options);

observer.observe(refs.loadMoreBtn);