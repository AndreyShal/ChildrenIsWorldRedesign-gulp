import Swiper, { Navigation, Pagination } from 'swiper';
export function swiperFunctions() {

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

    const swiperMainBanner = new Swiper('.swiper-main-bunner', {
        modules: [Navigation, Pagination],
        navigation: {
            nextEl: '.swiper-button-next-main-banner',
            prevEl: '.swiper-button-prev-main-banner',
            nextEl: '.swiper-main-banner-circle-next',
            prevEl: '.swiper-main-banner-circle-prev',
        },

        // Default parameters
        slidesPerView: 0,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination-main-banner',
        },

        // Responsive breakpoints1
        breakpoints: {
            // when window width is >= 360px
            360: {
                pagination: {
                    type: 'bullets',
                },
                slidesPerView: 1,
                spaceBetween: 0,
            },
            // when window width is >= 768px
            1000.95: {
                // pagination: {
                //     type: 'progressbar',
                // },
                slidesPerView: 1,
                spaceBetween: 10,
            },
            // when window width is >= 1378px
            1440.95: {
                slidesPerView: 1,
                // spaceBetween: 80,
            },
        }
    })

    const swiperCardDefolt = new Swiper('.swiper-curd-defolt', {
        modules: [Navigation, Pagination],
        navigation: {
            nextEl: '.next-card-defolt-arrow',
            prevEl: '.prev-card-defolt-arrow',
        },
        // Default parameters
        slidesPerView: 0,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination-card-defolt',
        },

        // Responsive breakpoints1
        breakpoints: {
            // when window width is >= 360px
            360: {

                slidesPerView: 1.3,
                spaceBetween: 0,
            },
            // when window width is >= 768px
            480.95: {
                // pagination: {
                //     type: 'progressbar',
                // },
                slidesPerView: 2,
                spaceBetween: 10,
            },
            // when window width is >= 768px
            1000.95: {
                // pagination: {
                //     type: 'progressbar',
                // },
                slidesPerView: 3,
                spaceBetween: 10,
            },
            // when window width is >= 1378px
            1440.95: {
                pagination: {
                    type: 'bullets',
                },
                slidesPerView: 4,
                // spaceBetween: 80,
            },
        }
    })

    const swiperMediumBanner = new Swiper('.swiper-mediumBanner', {
        modules: [Navigation, Pagination],
        navigation: {
            nextEl: '.next-mediumBanner-arrow',
            prevEl: '.prev-mediumBanner-arrow',
        },
        // Default parameters
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination-mediumBanner',
        },

        // Responsive breakpoints1
        breakpoints: {
            // when window width is >= 360px
            360: {
                pagination: {
                    type: 'bullets',
                },
                slidesPerView: 1,
                spaceBetween: 20,
            },
            // when window width is >= 768px
            480.95: {
                // slidesPerView: 2,
                // spaceBetween: 20,
            },
            // when window width is >= 768px
            1000.95: {
                // slidesPerView: 3,
                // spaceBetween: 20,
            },
            // when window width is >= 1378px
            1440.95: {
                // slidesPerView: 4,
                // spaceBetween: 30,
            },
        }
    })

    const swiperReviews = new Swiper('.swiper-reviews', {
        modules: [Navigation, Pagination],
        navigation: {
            nextEl: '.next-reviews-arrow',
            prevEl: '.prev-reviews-arrow',
        },
        // Default parameters
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination-reviews',
        },

        // Responsive breakpoints1
        breakpoints: {
            // when window width is >= 360px
            360: {
                slidesPerView: 1.2,
                spaceBetween: 20,
            },
            // when window width is >= 768px
            480.95: {
                pagination: {
                    type: 'bullets',
                },
                slidesPerView: 2,
                spaceBetween: 20,
            },
            // when window width is >= 768px
            1000.95: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            // when window width is >= 1378px
            1440.95: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }
    })
    const toysGames = new Swiper('.swiper-toys-games', {
        modules: [Navigation, Pagination],
        // Default parameters
        slidesPerView: 1,
        spaceBetween: 10,

        // Responsive breakpoints1
        breakpoints: {
            // when window width is >= 360px
            310.95: {
                slidesPerView: 2.5,
                spaceBetween: 10,
            },
            // when window width is >= 768px
            480.95: {
                slidesPerView: 3.7,
                spaceBetween: 20,
            },
        }
    })
    const educationalToys = new Swiper('.swiper-educational-toys', {
        modules: [Navigation, Pagination],
        // Default parameters
        slidesPerView: 1,
        spaceBetween: 10,

        // Responsive breakpoints1
        breakpoints: {
            // when window width is >= 360px
            310.95: {
                slidesPerView: 2.3,
                spaceBetween: 10,
            },
            // when window width is >= 768px
            480.95: {
                slidesPerView: 3.2,
                spaceBetween: 20,
            },
        }
    })
    const productSwiper1 = new Swiper('.swiper-product1', {
        modules: [Navigation, Pagination],
        // Default parameters
        navigation: {
            nextEl: '.product-arrow-next',
            prevEl: '.product-arrow-prev',
        },
        slidesPerView: 1,
        spaceBetween: 10,

        // Responsive breakpoints1
        breakpoints: {
            // when window width is >= 360px
            310.95: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            // when window width is >= 768px
            480.95: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
        }
    })
    const productSwiper2 = new Swiper('.swiper-product2', {
        modules: [Navigation, Pagination],
        // Default parameters
        navigation: {
            nextEl: '.product-arrow-next',
            prevEl: '.product-arrow-prev',
        },
        slidesPerView: 1,
        spaceBetween: 10,

        // Responsive breakpoints1
        breakpoints: {
            // when window width is >= 360px
            310.95: {
                slidesPerView: 3.5,
                spaceBetween: 10,
            },
            // when window width is >= 768px
            480.95: {
                slidesPerView: 3.5,
                spaceBetween: 10,
            },
        }
    })
}

