
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const btns = document.querySelectorAll('.plan__btn');
const modalNoBtn = document.querySelector('.modal__action--negative');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  })
})


backdrop.addEventListener('click', closeModal);
modalNoBtn.addEventListener('click', closeModal);


function closeModal() {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
}