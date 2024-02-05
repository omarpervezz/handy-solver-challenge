window.addEventListener("scroll", (event) => {
  const scroll = window.scrollY;
  const header = document.querySelector("header");

  if (scroll > 20) {
     header.classList.add("backDrop", "animate__fadeInDownBig");
  } else {
     header.classList.remove("backDrop", "animate__fadeInDownBig");
  }
});