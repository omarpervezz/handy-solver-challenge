$( document ).ready(function() {
    $(".about-slider").owlCarousel({
        dots:true,
        navigation: true,
        responsiveClass: true,
        autoHeight: true,
        autoPlay: false,
        smartSpeed: 800,
        nav: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        navigationText: ["", ""],
        
      });
});