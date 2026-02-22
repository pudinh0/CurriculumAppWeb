const menuBtn = document.getElementById('menu-toggle');
const navegador = document.getElementById('navegador');

menuBtn.addEventListener('click', () => {
    navegador.classList.toggle('active');
});