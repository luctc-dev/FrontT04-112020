// Đối tượng
// Chỉ vật thể, người, sự việc có đặc tính riêng 
// - Thuộc tính (Biến)
// - Phương thức (Hành động -----> Hàm)

// Con người - Đối tượng
// Mắt, Mũi, Miệng, Chân, Tây
// Học sinh đối tượng
    // Tên, Tuổi, Ngày tháng năm sinh, Điểm toán lý hoá, ...
    // tinh điểm trung bình
var teo = {
  name: 'Nguyen van teo', // thuoc tinh thong tuong -> property -> thuộc tính
  age: 28, // thuoc tinh thong thuong -> property
  tinhNamSinh: function() { 
    // thuoc tinh chua mot ham -> method -> phương thức
    return 2020 - this.age;
  }
}

console.log("ten cua teo = ", teo.tinhNamSinh());

// console.log(doiTuong);
// console.log(doiTuong.tenDoiTuong);
// console.log(doiTuong.tuoi + 20);

// Who.What = Value  -> Gán giá trị mới cho đối tượng 
// Who.What -> Lấy giá trị ra để tính toán
