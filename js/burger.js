const menuButton = document.querySelector('.icon-menu');
const addClassToMenu = () => { document.body.classList.toggle("open-menu")}
menuButton.addEventListener('click', addClassToMenu)