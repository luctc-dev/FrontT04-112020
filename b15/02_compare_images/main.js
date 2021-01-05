let compareImagesEl = document.querySelector('.compare-images');
let layer2 = compareImagesEl.querySelector('.layer-2');
let listImages = compareImagesEl.querySelectorAll('img');

listImages.forEach(function(image) {
  let compareImagesRectDom = compareImagesEl.getBoundingClientRect();
  image.style.width = compareImagesRectDom.width + 'px';
  image.style.height = compareImagesRectDom.height + 'px';
})

compareImagesEl.addEventListener('click', function(evt) {
  let compareImagesRectDom = compareImagesEl.getBoundingClientRect();
  let offsetX = evt.offsetX;
  let width = compareImagesRectDom.width;
  let percent = (offsetX / width) * 100;

  layer2.style.left = percent + '%';
})