$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
     items: 1,
     itemsDesktop: [1000, 1],
     itemsDesktopSmall: [979, 1],
     itemsTablet: [768, 1],
     pagination: true,
     navigation: true,
     navigationText: ["", ""],
     autoPlay: false,

  });
  const owl_buttons_container = document.querySelector(".testimonial-wrapper .owl-buttons");
  owl_buttons_container.classList.add("arrow-container");
  const prev = document.querySelectorAll(
     "#testimonial-slider .owl-buttons .owl-prev"
  );

  const next = document.querySelectorAll(
     "#testimonial-slider .owl-buttons .owl-next"
  );
  testimonialController(prev, next);
});
// testimonial controller
function testimonialController(prev, next) {
  for (let i = 0; i < prev.length; i++) {
     const prevStyle = window.getComputedStyle(prev[i], "::before");
     const prevContent = prevStyle.content;
     prev[i].style.setProperty("--prev-before-content", prevContent);
     prev[i].classList.add("btn-prev");
     prev[i].innerHTML = `<i class="fa-solid fa-arrow-left"></i>`;
  }

  for (let i = 0; i < next.length; i++) {
     const nextStyle = window.getComputedStyle(next[i], "::before");
     const nextContent = nextStyle.content;
     next[i].style.setProperty("--next-before-content", nextContent);
     next[i].classList.add("btn-next");
     next[i].innerHTML = `<i class="fa-solid fa-arrow-right"></i>`;
  }
}