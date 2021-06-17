const burgerButton = document.getElementsByClassName('burger-button')[0];
const lienmenu = document.getElementsByClassName('lienmenu')[0];

burgerButton.addEventListener('click',() => {
lienmenu.classList.toggle('active')

})