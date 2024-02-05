document.querySelectorAll('.nav-link').forEach(function (navLink) {
    navLink.addEventListener('click', function (event) {
       event.preventDefault();
 
       const targetId = this.getAttribute('href').substring(1);
       const targetElement = document.getElementById(targetId);
 
       if (targetElement) {
          const targetOffset = targetElement.offsetTop;
 
          // Smooth scroll
          window.scrollTo({
             top: targetOffset,
             behavior: 'smooth'
          });
       }
    });
 });