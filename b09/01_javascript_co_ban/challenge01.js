// Ngôn ngữ biên dịch (Java, C++, ...) -> Biên dịch về mã máy

// Ngôn ngữ thông dịch -> Chạy từng dòng không biên dịch nguyên file 1 lúc rồi mới chạy
/**

Đọc code chạy qua 2 giai đoạn
1. Giai đoạn phân tích cú pháp
  - Quét hết toàn bộ file code 
    Tìm thấy chỗ nào có dùng từ khoá 'var' 
      -> Mặc định lưu trong bộ nhớ là undefined
    Tìm thấy chỗ nào  có cú pháp khai báo hàm 
      function tenHam() {
        
      }


2. Giai đoạn thực thi

 */


console.log(massMark);

var massMark = 59;
var massJohn = 59;

var heightMark = 1.65;
var heightJohn = 1.65;

var bmiJohn = massJohn / (heightJohn * heightJohn);
// var bmiJohn = massJohn / (heightJohn ** 2);
var bmiMark = massMark / (heightMark * heightMark);
console.log("bmiJohn = ", bmiJohn);
console.log("bmiMark = ", bmiMark);

var isMarkHigher = bmiMark > bmiJohn;
console.log("BMI cua Mark lớn hơn BMI của John? " + isMarkHigher);