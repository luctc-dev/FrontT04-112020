let compareImagesEl = document.querySelector('.compare-images');
let layer2 = compareImagesEl.querySelector('.layer-2');
let listImages = compareImagesEl.querySelectorAll('img');

function adjustWidthImage() {
  listImages.forEach(function(image) {
    let compareImagesRectDom = compareImagesEl.getBoundingClientRect();
    image.style.width = compareImagesRectDom.width + 'px';
    image.style.height = compareImagesRectDom.height + 'px';
  })
}

// Nhấn F5 -> Reload lại trang
adjustWidthImage();

// compareImagesEl.addEventListener('click', function(evt) {
//   let compareImagesRectDom = compareImagesEl.getBoundingClientRect();
//   let offsetX = evt.offsetX;
//   let width = compareImagesRectDom.width;
//   let percent = (offsetX / width) * 100;

//   layer2.style.left = percent + '%';
// })

let isMouseDown = false;

compareImagesEl.addEventListener('mousedown', function(evt) {
  isMouseDown = true;
})

compareImagesEl.addEventListener('mousemove', function(evt) {
  if (isMouseDown) {
    let compareImagesRectDom = compareImagesEl.getBoundingClientRect();
    let offsetX = evt.offsetX;
    let width = compareImagesRectDom.width;
    let percent = (offsetX / width) * 100;

    layer2.style.left = percent + '%';
  }
})

compareImagesEl.addEventListener('mouseup', function(evt) {
  isMouseDown = false;
})

window.addEventListener('resize', function(evt) {
  adjustWidthImage();
})