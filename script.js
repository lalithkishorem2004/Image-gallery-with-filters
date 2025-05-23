function filterGallery(category) {
  const items = document.querySelectorAll('.image-item');

  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}
