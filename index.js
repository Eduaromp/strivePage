var navbar = document.querySelector('nav')


window.onscroll = function () {

    // pageYOffset or scrollY
    if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
}

const hiddenCards = document.querySelectorAll('.hidden-card');
const viewMoreButton = document.getElementById('btn-view');

viewMoreButton.addEventListener('click', () => {
  hiddenCards.forEach(card => {
    card.classList.remove('hidden-card');
  });
});

const mediaQuery = window.matchMedia('(max-width: 600px)');
mediaQuery.addListener(event => {
  if (event.matches) {
    hiddenCards.forEach(card => {
      card.classList.add('hidden-card');
    });
  }
});