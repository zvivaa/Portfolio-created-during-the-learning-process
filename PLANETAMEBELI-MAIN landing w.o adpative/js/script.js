$(function() {var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 3,
        margin: 10,
        loop: false,
        nav: true,
        mouseDrag: true,
        touchDrag: true,
        dots: true,  
        Responsive:{
            0:{
                items:1
            },
            600:{
                item:2
            },
            1000:{
                item:3
            }
        }
    });
});