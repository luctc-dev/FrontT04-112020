let listBox = document.querySelectorAll('.box');

for(let index = 0; index < listBox.length; index++) {
  let box = listBox[index];

  box.addEventListener('click', function(e) {
    if(this.classList.contains('box-red') == true) {
      this.classList.remove('box-red');
      this.classList.add('box-blue');
    } else if (this.classList.contains('box-blue') == true) {
      this.classList.remove('box-blue');
      this.classList.add('box-green');
    } else if (this.classList.contains('box-green') == true) {
      this.classList.remove('box-green');
      this.classList.add('box-red');
    }
  });
}


