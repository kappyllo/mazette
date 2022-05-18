'strict';

const modalBg = document.querySelector('.modal-bg');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelector('.getstartedbtn');
const btnOpenNav = document.querySelector('.hamburger');
const btnCloseNav = document.querySelector('.closeBtn');
const navOnMobile = document.querySelector('.navbar');

btnOpenModal.addEventListener('click', function () {
  modalBg.classList.remove('hidden');
});

btnCloseModal.addEventListener('click', function () {
  modalBg.classList.add('hidden');
});

btnOpenNav.addEventListener('click', function () {
  navOnMobile.style.display = 'flex';
});

btnCloseNav.addEventListener('click', function () {
  navOnMobile.style.display = 'none';
});
