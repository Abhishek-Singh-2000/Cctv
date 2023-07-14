$('.first-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause:false,
    animateOut: 'fadeOut',
    dots: true ,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

