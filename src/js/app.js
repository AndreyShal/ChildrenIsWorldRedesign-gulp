import * as flsFunctions from "./modules/functions.js";
import * as flsFunctionsMenuHidden from "./modules/menuHidden.js";
import Swiper, { Navigation, Pagination } from 'swiper';

flsFunctions.isWebp();
flsFunctionsMenuHidden.scrollMenu();

const swiper1 = new Swiper('.swiper-main-menu', {
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: '.swiper-button-next-unique',
        prevEl: '.swiper-button-prev-unique',
    },

    // Default parameters
    slidesPerView: 0,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    // Responsive breakpoints1
    breakpoints: {
        // when window width is >= 360px
        360: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        // when window width is >= 768px
        1000.95: {
            slidesPerView: 7,
            spaceBetween: 0,
        },
        // when window width is >= 1378px
        1440.95: {
            slidesPerView: 10,
            // spaceBetween: 80,
        },
    }
})


