var boxEl = document.querySelector('.box');

boxEl.addEventListener('mouseover', function(evt) {
  console.log('mouse over - hover vào');
})

boxEl.addEventListener('mouseleave', function(evt) {
  console.log('mouse leave - hover ra');
})

boxEl.addEventListener('mousemove', function(evt) {
  // console.log('mouse move', evt);
  boxEl.innerHTML = `
    <p>ClientX: ${evt.clientX}px - ClientY ${evt.clientY}px</p>
    <p>PageX: ${evt.pageX}px - PageY ${evt.pageY}px</p>
    <p>ScreenX: ${evt.screenX}px - ScreenY ${evt.screenY}px</p>
    <p>OffsetX: ${evt.offsetX}px - OffsetY ${evt.offsetY}px</p>
  `
})

boxEl.addEventListener('mousedown', function(evt) {
  console.log('mouse down');
})

boxEl.addEventListener('mouseup', function(evt) {
  console.log('mouse up');
})

boxEl.addEventListener('click', function(evt) {
  console.log('click');
})

// kéo thả (mousedown -> mousemove -> mouseup)
// isMouseDown = true
// isMouseDown = false