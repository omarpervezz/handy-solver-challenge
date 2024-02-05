import updateProgressBar from "./progressbar.js";
import loader from "./loader.js";
import './smooth-navigation.js'
import './mobile-menu.js'
import './sticky-navigation.js';
import './about-sider.js';
import './testimonial-slider.js';
import './aos-initialization.js';

document.addEventListener("DOMContentLoaded", function () {
   loader(updateProgressBar)
});