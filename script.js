document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;

  const btnTheme = document.querySelector('.btn[aria-label="toggle theme"]'); // Updated selector
  const btnHamburger = document.querySelector('.nav__hamburger');

  const addThemeClass = (bodyClass) => {
    body.classList.add(bodyClass);
  };

  const getBodyTheme = localStorage.getItem('portfolio-theme');

  if (getBodyTheme) {
    addThemeClass(getBodyTheme);
  }

  const isDark = () => body.classList.contains('dark');

  const setTheme = (bodyClass) => {
    body.classList.remove('light', 'dark'); // Remove both classes
    addThemeClass(bodyClass);
    localStorage.setItem('portfolio-theme', bodyClass);
  };

  const toggleTheme = () => {
    isDark() ? setTheme('light') : setTheme('dark');
  };

  btnTheme.addEventListener('click', toggleTheme);

  const displayList = () => {
    const navUl = document.querySelector('.nav__list');

    if (btnHamburger.classList.contains('nav__hamburger')) {
      btnHamburger.classList.toggle('active');
      navUl.classList.toggle('display-nav-list');
    }
  };

  btnHamburger.addEventListener('click', displayList);

  const scrollUp = () => {
    const btnScrollTop = document.querySelector('.scroll-top');

    if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      btnScrollTop.style.display = 'block';
    } else {
      btnScrollTop.style.display = 'none';
    }
  };

  document.addEventListener('scroll', scrollUp);
});
