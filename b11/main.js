var btnDropdown = document.querySelector('[data-toggle="dropdown"]');


btnDropdown.addEventListener('click', function(evt) {
  var dropdownButton = this;
  var dropdownParent = dropdownButton.parentElement;
  var dropdownMenu = dropdownButton.nextElementSibling;
  
  if (dropdownParent.classList.contains('show') === true ) {
    // Phan tu parent CO ton tai class show
    dropdownParent.classList.remove('show');
    dropdownMenu.classList.remove('show');
  } else {
    // Phan tu parent KHONG ton tai class show
    dropdownParent.classList.add('show');
    dropdownMenu.classList.add('show');
  }
})