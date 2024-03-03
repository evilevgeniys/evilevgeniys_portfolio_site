const hamburger = document.querySelector('.hamburger'), 
      menu = document.querySelector('.menu'),
      closeElement = document.querySelector('.menu__close'),
      closeLink = document.querySelectorAll('.menu__link-item');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElement.addEventListener('click', () => {
    menu.classList.remove('active');
})

closeLink.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    })    
})

