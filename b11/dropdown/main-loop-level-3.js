let listBtnDropdown = document.querySelectorAll('[data-toggle="dropdown"]');

function removeClassShowExcludeIndex(exlucdeIndex) {
  for(let index = 0; index < listBtnDropdown.length; index++) {
    // 0 1 2 3 4 5 6 7 8 9 10
    if (index !== exlucdeIndex) {
      let dropdownButton = listBtnDropdown[index];
      let dropdownParent = dropdownButton.parentElement;
      let dropdownMenu = dropdownButton.nextElementSibling;

      dropdownParent.classList.remove('show');
      dropdownMenu.classList.remove('show');
    }
  }
}


// let mỗi vòng lặp sẽ có một index lưu trữ lại riêng 
// -> index không được lưu trong global
for(let index = 0; index < listBtnDropdown.length; index++) {
  let btnDropdown = listBtnDropdown[index];
    
  btnDropdown.addEventListener('click', function(evt) {
    // Khi nhấn vào btn dropdown -> Ngừng lan toả sự kiện ngược ra bên ngoài phần tử cha
    evt.stopPropagation();

    let dropdownButton = this;
    let dropdownParent = dropdownButton.parentElement;
    let dropdownMenu = dropdownButton.nextElementSibling;
    
    // Tìm toàn bộ button dropdown (Ngoại trừ index hiện tại)
    removeClassShowExcludeIndex(index);

    // Xử lí cho button hiện tại (this)
    dropdownParent.classList.toggle('show');
    dropdownMenu.classList.toggle('show');
  })  
}

document.addEventListener('click', function(evt) {
  removeClassShowExcludeIndex(-1);
})