var arrSound = document.querySelectorAll('.sound');

for(var index = 0; index <= 6; index++) {

  arrSound[index].addEventListener('click', function() {
    var currSound = this;
    var char = currSound.innerText.toUpperCase();
    
    // var selectorStr = 'src="sounds/' + char + '.wav"';
    var selectorStr = `[src="sounds/${char}.wav"]`; // Template string - ES6
    var targetAudio = document.querySelector(selectorStr);

    targetAudio.pause();
    targetAudio.currentTime = 0;

    targetAudio.play();
  })
  
  // (function () {
  //   var sound = arrSound[index];

  //   sound.addEventListener('click', function() {
  //     console.log(sound);
  //   })
  // })()

  // hamRieng();
}

// console.log("sound = ", sound);


// Scope
// Closure -> Tầm vực con có thể sử dụng bộ nhớ bên ngoài của tầm vực cha
// IIFE Function
// Invoked function <=> Call function