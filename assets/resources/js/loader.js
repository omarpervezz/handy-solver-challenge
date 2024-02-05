export default function loader(progressbar) {
    setTimeout(function () {
       hideLoader();
    }, 2000);
    window.onscroll = function () {
       progressbar()
    };
    window.onload = function () {
       hideLoader();
    };
 
 
 }
 
 function hideLoader() {
    // Hide the loader
    document.querySelector('.loader-wrapper').style.display = 'none';
 
 }