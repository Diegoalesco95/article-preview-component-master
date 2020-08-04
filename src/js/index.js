//  handle for button
const handleClick = () => {
  const actions = document.querySelector('.card__actions');
  const elements = document.querySelectorAll('.avatar, .information');
  const shared = document.querySelector('.shared-options');
  if (shared.style.display === 'flex') {
    shared.style.display = '';
    actions.classList.remove('active');
    elements.forEach((elm) => {
      elm.style.display = '';
    });
  } else {
    shared.style.display = 'flex';
    actions.classList.add('active');
    elements.forEach((elm) => {
      elm.style.display = 'none';
    });
  }
};

// Add Listeners
document.querySelector('.share-button').addEventListener('click', handleClick);
