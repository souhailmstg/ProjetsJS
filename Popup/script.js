document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openPopup');
  const closeBtn = document.getElementById('closePopup');
  const popup = document.getElementById('popup');

  openBtn.addEventListener('click', () => {
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Bloquer le scroll
  });

  closeBtn.addEventListener('click', closePopup);

  window.addEventListener('click', (event) => {
    if (event.target === popup) {
      closePopup();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePopup();
  });

  function closePopup() {
    popup.style.display = 'none';
    document.body.style.overflow = 'auto'; // Rétablir le scroll
  }
});
