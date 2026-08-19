const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const searchButton = document.querySelector('[data-search]');
const searchPanel = document.querySelector('.search-panel');
const toast = document.querySelector('.toast');

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  document.querySelectorAll('.nav a').forEach(item => item.classList.remove('active'));
  link.classList.add('active');
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

searchButton.addEventListener('click', () => {
  searchPanel.classList.add('open');
  searchPanel.setAttribute('aria-hidden', 'false');
  setTimeout(() => searchPanel.querySelector('input').focus(), 50);
});

searchPanel.addEventListener('click', event => {
  if (event.target === searchPanel) {
    searchPanel.classList.remove('open');
    searchPanel.setAttribute('aria-hidden', 'true');
  }
});

searchPanel.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  const query = event.currentTarget.querySelector('input').value.trim();
  if (!query) {
    event.currentTarget.querySelector('input').focus();
    return;
  }

  window.location.href = `produtos.html?busca=${encodeURIComponent(query)}`;
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') searchPanel.classList.remove('open');
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}
