const menu = document.querySelector('.menu')
const menuIcon = document.querySelector('.menu i')
const dropdown_menu = document.querySelector('.dropdown_menu');
menu.addEventListener('click',()=>{
dropdown_menu.classList.toggle("open");
const isOpen = dropdown_menu.classList.contains('open')
menuIcon.classList = isOpen
?'fa-solid fa-xmark'
:'fa-solid fa-bars'


})
