- Quy định về cách hiển thị của phần tử trên trang Web

- Chia ra 2 dạng chính trong Web 

(Đang phân tích trong trường hợp mặc định 
  -> Không có sự ép buộc nào về position absolute hay bất ki thuộc tính css khác)
# Dạng block element (display: block)
  - Mặc định thường sẽ có độ rộng là 100% (So với phần tử bao bọc bên ngoài) nếu không có sự can thiệp gì về width
  - Luôn luôn đứng 1 mình trên 1 hàng
  - Bất kể width height là bao nhiêu thì cũng luôn luôn đứng 1 mình trên 1 hàng
    -> Không dùng display block để chia column??? 

# Dạng inline element (display: inline ...);
  - Mặc định thường sẽ có độ rộng bằng với nội dung bên trong
  - Có thể đứng chung hàng với những thằng inline khác

  - Những phần tử có tính chất là display: inline:
    -> Không xét width height được cho nó
    -> Bởi vì không xét width height được -> Không ứng dụng trong trường hợp chia column
      (Chia layout 4 column -> Mỗi column sẽ là 100% / 4 -> width: 25%)


# Dạng inline-block elememt (display: inline-block; )
  -> Kết hợp một phần tính chất của cả inline và block;
  -> - Mặc định thường sẽ có độ rộng bằng với nội dung bên trong (Giống inline)
  -> - Có thể đứng chung hàng với những phần tử khác xung quanh (Giống inline)
  -> Inline block sẽ giống block là xét được width height (Giống block element)
    -> Ứng dụng được inline-block trong vấn đề chia column (Vừa xét width được, vừa đứng chung hàng được)


-> Làm sao để phân biệt đâu là block element?? Đâu là inine element??
-> Mình toàn quyền với CSS (Có thể ép buộc thẻ block về inline và ngược lại bằng thuộc tính display)


==================================================

-> Căn dòng theo chiều ngang thì sao ????
-> Không dùng absolute (Dành cho layout đặc biệt, vị trí bất thường)


-> Display block 
-> Có thể dùng margin auto để căn dòng theo chiều ngang


-> Display inline-block???
-> Thường tất cả những dạng inline-block sẽ có tính chất một phần giống với đoạn text, giống chữ cái, ..