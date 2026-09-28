const page = document.querySelector('.opening-page');
const openTrigger = document.querySelector('.open-trigger');
const closeTrigger = document.querySelector('.close-trigger');
const replay = document.querySelector('.replay');

function openPortfolio() {
  page.classList.add('is-open');
  document.querySelector('.reveal').setAttribute('aria-hidden', 'false');
  openTrigger.setAttribute('aria-expanded', 'true');
}

function closePortfolio() {
  page.classList.remove('is-open');
  document.querySelector('.reveal').setAttribute('aria-hidden', 'true');
  openTrigger.setAttribute('aria-expanded', 'false');
}

openTrigger.addEventListener('click', openPortfolio);
closeTrigger.addEventListener('click', closePortfolio);
replay.addEventListener('click', closePortfolio);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && page.classList.contains('is-open')) closePortfolio();
});
