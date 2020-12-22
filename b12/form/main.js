let formEl = document.querySelector('.form-login');

let emailEl = formEl.querySelector('[type="email"]');
let emailValue = '';

let passwordEl = formEl.querySelector('.password');
let passwordValue = '';

let checkboxEl = formEl.querySelector('.form-check-input');
let isRememberMe = false;

let selectEl = formEl.querySelector('select');
let listOptions = selectEl.querySelectorAll('option');
let provinceValue = '';

let submitEl = formEl.querySelector('[type="submit"]');

function kiemTraEmailHopLe() {
  let isHopLe = emailValue.endsWith('@gmail.com')
  let smallEl = emailEl.nextElementSibling;

  if (isHopLe === true) {
    // Đúng
    smallEl.innerText = '';
    return true;
  } else {
    // Sai -> 2 loại sai 
    // Rỗng 
    // Có nhập nhưng sai định dạng
    if (emailValue === '') {
      smallEl.innerText = 'Email không được rỗng.';
    } else {
      smallEl.innerText = 'Email không đúng định dạng. Nhập lại đi bạn ơi.';
    }
    return false;
  }
}

function checkStartWithCharacter() {
  let regex = /^[A-Za-z]/;
  if (passwordValue.match(regex) === null) {
    // Không bắt đầu bằng ký tự
    return false;
  } else {
    // Thoả mãn bắt đầu bằng ký tự
    return true;
  }
}

function checkPassword() {
  let regex = /^[A-Za-z]\w{7,14}$/;
  let isValid = passwordValue.match(regex)
  let smallEl = passwordEl.parentElement.querySelector('small');
  
  if(isValid === null) {
    // Sai
    if (passwordValue.length === 0) {
      smallEl.innerText = 'Đây là trường bắt buộc';
    } else if(checkStartWithCharacter() === true) {
      if (passwordValue.length < 8) {
        smallEl.innerText = 'Mật khẩu phải ít nhất 8 ký tự';
      } else if (passwordValue.length > 15) {
        smallEl.innerText = 'Mật khẩu chỉ dài tối đa 15 ký tự';
      }
    } else {
      smallEl.innerText = 'Mật khẩu phải bắt đầu bằng ký tự.';
    }
    return false;
  } else {
    // Dung
    smallEl.innerText = '';
    return true;
  }

}

emailEl.addEventListener('input', function(evt) {
  emailValue = this.value;
  kiemTraEmailHopLe();
})

passwordEl.addEventListener('input', function(evt) {
  passwordValue = this.value;
  checkPassword();
})

checkboxEl.addEventListener('change', function(evt) {
  isRememberMe = this.checked
})

selectEl.addEventListener('change', function(evt) {
  console.log('select run', this.value);
})

submitEl.addEventListener('click', function(evt) {
  evt.preventDefault(); // Ngăn chặn hành vi mặc định của form submit sang server

  let emailValid = kiemTraEmailHopLe();
  let passwordValid = checkPassword();

  // Nếu một trong hai thằng chỉ cần tồn tại 1 thằng là false -> sai 
  // Cả hai thằng bắt buộc phải là true 
  if (emailValid === false || passwordValid === false) {
    // Form nhập liệu bị sai
    console.log('form bi sai');
  } else {
    // Form nhập liệu đúng
    // Khi đã kiểm tra xong rồi -> submit lại
    console.log('form dung');
    formEl.submit(); // Ngăn xong rồi thì chủ động dùng Javscript để submit lại
  }
});

function setInitProvinceValue() {
  let isFlag = false; 
  // Nếu linhcanh = false -> không có thằng nào được khai báo selected
  // Nếu linhcanh = true -> có một thằng được khai báo selected
  
  for(let index = 0; index < listOptions.length; index++) {
    let currentOption = listOptions[index];
    if (currentOption.getAttribute('selected') !== null) {
      // Option này đang được chọn bằng thuộc tính selected
      provinceValue = currentOption.value;
      isFlag = true;
    }
    
  }

  // Nếu không có bất kỳ option nào được khai báo thuộc tính 
  // selected -> Thì mặc định lấy thằng đầu tiên
  // Kỹ thuật lính canh (Cử 1 thằng đứng canh)
  if(isFlag === false) {
    provinceValue = listOptions[0].value;
  }
}

setInitProvinceValue();

console.log("provinceValue", provinceValue);
