const filterItems = document.querySelectorAll('.mixer__item');
const nav = document.querySelector('.mixer__btns');

nav.addEventListener('click', (e) => {
  if (e.target.classList.contains('mixer__btn')) {
    const filterClass = e.target.dataset.filter;

    filterItems.forEach((item) => {
      item.classList.remove('hide');

      if (!item.classList.contains(filterClass) && filterClass !== 'all') {
        item.classList.add('hide');
      }
    });
  }
});
