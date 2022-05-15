'strict';

const modalBg = document.querySelector('.modal-bg');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelector('.getstartedbtn');

btnOpenModal.addEventListener('click', function () {
  modalBg.classList.remove('hidden');
});

btnCloseModal.addEventListener('click', function () {
  modalBg.classList.add('hidden');
});
