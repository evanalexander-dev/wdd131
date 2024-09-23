const toggle = document.getElementById('navtoggle');
const nav = document.querySelector('nav');

toggle.addEventListener('click', () => {
  if (nav.classList.contains('closed')) {
    nav.classList.remove('closed');
    toggle.innerHTML = '❌';
  } else {
    nav.classList.add('closed');
    toggle.innerHTML = '☰';
  }
});