//  handle for button
const handleClick = () => {
  const shared = document.querySelector('.card__actions--shared');
  const isActive = shared.classList.contains('active');
  if (isActive) {
    button.style.backgroundColor = '';
    button.style.color = '';
    shared.style.animation = '0.3s shareClose forwards';
    shared.classList.remove('active');
  } else {
    button.style.backgroundColor = '#6d7f97';
    button.style.color = '#ecf2f8';
    shared.style.animation = '0.3s shareOpen forwards';
    shared.classList.add('active');
  }
};

// Add Listeners
const button = document.querySelector('.share-button');
const shareButton = button.addEventListener('click', handleClick);
