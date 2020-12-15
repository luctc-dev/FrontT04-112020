
function checkNaN(value) {
  if (value !== value) {
    return true;
  }
  return false;
}

var mapFromNumberToChar = {
  "1": "A",
  "2": "B",
  "3": "C",
  "4": "D",
  "5": "E",
  "6": "F",
  "7": "G",
}

document.addEventListener('keyup', function(evt) {
  var number = Number(evt.key);
  var numberChar = evt.keyCode;
  var char = evt.key.toUpperCase();
  selectorStr = '';

  if (!checkNaN(number) && number <= 7 && number >= 1) {
    char = mapFromNumberToChar[number];
    selectorStr = `[src="sounds/${char}.wav"]`;
  } else if (numberChar >= 65 && numberChar <= 71) {
    selectorStr = `[src="sounds/${char}.wav"]`;
  }

  if (selectorStr) {
    var targetAudio = document.querySelector(selectorStr);

    targetAudio.pause();
    targetAudio.currentTime = 0;

    targetAudio.play();
  }
})