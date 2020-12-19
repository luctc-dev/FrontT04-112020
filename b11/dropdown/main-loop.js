var listBtnDropdown = document.querySelectorAll('[data-toggle="dropdown"]');

for(var index = 0; index < listBtnDropdown.length; index++) {
  var btnDropdown = listBtnDropdown[index];

  btnDropdown.addEventListener('click', function(evt) {
    var dropdownButton = this;
    var dropdownParent = dropdownButton.parentElement;
    var dropdownMenu = dropdownButton.nextElementSibling;
    
    // if (dropdownParent.classList.contains('show') === true ) {
    //   // Phan tu parent CO ton tai class show
    //   dropdownParent.classList.remove('show');
    //   dropdownMenu.classList.remove('show');
    // } else {
    //   // Phan tu parent KHONG ton tai class show
    //   dropdownParent.classList.add('show');
    //   dropdownMenu.classList.add('show');
    // }

    dropdownParent.classList.toggle('show');
    dropdownMenu.classList.toggle('show');
  })
}