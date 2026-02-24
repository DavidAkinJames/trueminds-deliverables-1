const categoryItems = document.querySelectorAll(
  '.categories__list li[data-category]',
);
// Match the class used in markup: .menu__section
const menuSections = document.querySelectorAll('.menu__section[data-category]');
const emptyState = document.getElementById('empty-category-state');

if (!categoryItems.length || !menuSections.length) {
  console.warn(
    'Menu categories not initialized: check .categories__list items or .menu__section sections.',
  );
} else {
  function setActiveCategory(category) {
    let hasMatch = false;

    categoryItems.forEach((item) => {
      const isActive = item.dataset.category === category;
      item.classList.toggle('active', isActive);
      item.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    menuSections.forEach((section) => {
      const isMatch = section.dataset.category === category;
      section.classList.toggle('is-hidden', !isMatch);
      if (isMatch) hasMatch = true;
    });

    if (emptyState) {
      emptyState.classList.toggle('is-visible', !hasMatch);
    }
  }

  categoryItems.forEach((item) => {
    item.addEventListener('click', () => {
      setActiveCategory(item.dataset.category);
    });

    item.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setActiveCategory(item.dataset.category);
      }
    });
  });

  const defaultActive = document.querySelector(
    '.categories__list li.active[data-category]',
  );
  setActiveCategory(defaultActive ? defaultActive.dataset.category : 'popular');
}
//

const nav = document.querySelector('.dashboard__nav');
const navToggle = nav?.querySelector('.nav__toggle');
const navLinks = nav?.querySelector('.dashboard__nav-links');

if (nav && navToggle && navLinks) {
  const closeNav = () => {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation menu');
  };

  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute(
      'aria-label',
      isOpen ? 'Close navigation menu' : 'Open navigation menu',
    );
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 640) {
        closeNav();
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 640) {
      closeNav();
    }
  });
}
