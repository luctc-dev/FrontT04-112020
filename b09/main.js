

// function tinhTong(a, b) {
//   return a + b;
// }
// var giaTriTraVe = tinhTong(20, 30); // 50
debugger;
var number1 = 20;
var number2 = 30;

function tinhTongPhienBan(a) {
  return function(b) {
    return a + b;
  }
}

// var giaTriTraVe2 = tinhTongPhienBan(number1);
var giaTriTraVe3 = tinhTongPhienBan(number1)(number2);


// (number2); // 50