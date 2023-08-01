const fontSizeSlider = document.getElementById('font-size-slider');
const mainContent = document.querySelector('main');

fontSizeSlider.addEventListener('input', () => {
  const fontSize = fontSizeSlider.value + 'px';
  mainContent.style.fontSize = fontSize;
});
