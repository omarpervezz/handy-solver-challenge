const humburger = document.getElementById('humburger')
humburger.addEventListener('click', () => {
  hideMobieMenu.classList.add('opened');
  document.documentElement.classList.add('pushbar_locked');
})

const hideMobieMenu = document.querySelector('.mobile-menu-wrapper')
const mobileMenuItem = document.querySelectorAll('.mobile-menu ul li');
mobileMenuItem.forEach((e) => {
 e.addEventListener('click', () => {
  hideMenu(hideMobieMenu)
  
 });
 
})

function hideMenu(element) {
  if (element.classList.contains('opened')) {
    element.classList.remove('opened');
    document.documentElement.classList.remove('pushbar_locked');
  }
}
