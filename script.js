
const toggle = document.querySelector('.mobile-toggle');
const menu = document.querySelector('.menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
document.querySelectorAll('.amounts button').forEach(btn => {
  btn.addEventListener('click', () => {
    const input = document.querySelector('#amount');
    if(input) input.value = btn.dataset.amount;
  });
});
