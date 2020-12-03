import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';

import { refs } from './mainRefs.js';

export function openLightbox(evt) {
    const src = evt.target.dataset.src;
    console.log(src);
    const instance = basicLightbox.create(`<img src="${src}">`);
    // console.dir(instance);
    instance.show();

}

refs.galleryCont.addEventListener('click', openLightbox);
