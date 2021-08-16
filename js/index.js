var mySwiper = new Swiper('#ongoingHack', {
    // Optional parameters
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    direction: 'horizontal',
    loop: false,
    spaceBetween: 30,
    breakpoints: {
        375: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        425: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        756: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
     
    }
});


var mySwiper = new Swiper('#ongoingHacks', {
    // Optional parameters
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    direction: 'horizontal',
    loop: false,
    spaceBetween: 30,
    breakpoints: {
        375: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        425: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        756: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1440: {
            slidesPerView: 7,
            spaceBetween: 5,
        },
    }
});


var mySwiper = new Swiper('#Testimonials', {
    // Optional parameters
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    direction: 'horizontal',
    loop: false,
    spaceBetween: 30,
    breakpoints: {
        375: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    }
});


var swiper = new Swiper('#initiative', {
    // Optional parameters
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});