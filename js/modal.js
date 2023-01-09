(() => {
  const refs = {
    arrOfOpenBtn: document.querySelectorAll('[data-modal-open]'),
    arrOfCloseBtn: document.querySelectorAll('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  [...refs.arrOfOpenBtn].map(elem => {
    elem.addEventListener('click', toggleModal);
  });

  [...refs.arrOfCloseBtn].map(elem => {
    elem.addEventListener('click', toggleModal);
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
