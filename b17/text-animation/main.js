let textAnimationEl = document.querySelector('.text-animation');
let textAnimate = textAnimationEl.innerText
let textAnimateHTML = '';
for (let index = 0; index < textAnimate.length; index++) {
  let char = textAnimate[index];
  if (char === ' ') {
    textAnimateHTML = textAnimateHTML + `<span class="empty">-</span>`;
  } else {
    textAnimateHTML = textAnimateHTML + `<span>${char}</span>`;
  }
}
textAnimationEl.innerHTML = textAnimateHTML;

let index = 0;
let listChar = textAnimationEl.querySelectorAll('span');


let mouseEl = document.querySelector('#mouse');
document.addEventListener('mousemove', function(evt) {
  mouseEl.style.left = evt.clientX + 'px';
  mouseEl.style.top = evt.clientY + 'px';
})


textAnimationEl.addEventListener('mouseover', function(evt) {
  mouseEl.classList.add('animated');
})

textAnimationEl.addEventListener('mouseleave', function(evt) {
  mouseEl.classList.remove('animated');
})

// setTimeout(() => {
//   mouseEl.style.backgroundColor = '#000';
//   document.querySelector('#loading').classList.add('hidden');
// }, 1000);

let intervalId = setInterval(() => {
  // TODO: 
  let charEl = listChar[index];

  if (charEl) {
    charEl.classList.add('run');
  } else {
    clearInterval(intervalId);

    setTimeout(() => {
      mouseEl.style.backgroundColor = '#000';
      document.querySelector('#loading').classList.add('hidden');
    }, 300);
  }

  index = index + 1;
}, 50);