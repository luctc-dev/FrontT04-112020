- Bootstrap 3, 4 (Thư viện code sẵn những chức năng thường dùng)
  + Người ta đã có một team viết sẵn những file css, javascript, ... -> Download về khai báo trong html và sử dụng
  + Grid System

  + Bootstrap 3 
    + Không sử dụng Flex
    + Có hỗ trợ Grid System (Kĩ thuật xây dựng float)
    + Có hỗ trợ icon
    + Có hỗ trợ Responsive (Dưới mobile)
    + Mobile First

  + Bootstrap 4
    + Có sủ dụng Flex
    + Có hỗ trợ Grid System (Kĩ thuật xây dựng bằng flex)
    + Bỏ icon
    + Có hỗ trợ Responsive (Dưới mobile)
    + Mobile First

- Responsive (Cách xây dựng trang Web chạy được cả mobile + desktop)
  + Bản chất của Responsive là sử dụng CSS đè lại CSS
  
  + Mobile First: 
    Phong cách lập trình xây dựng giao diện ở mobile trước rồi sau đó đẩy dần lên máy tính (desktop)
    
    Nếu màn hình >= 768px thì ...
    Nếu màn hình >= 992px thì ...
    Nếu màn hình >= 1200px thì ...
    @media screen and (min-width: 800px)

  + Desktop First 
    Phong cách lập trình xây dựng giao diện ở desktop trước rồi mới đẩy dần xuống điện thoại (mobile)

  + Kẹp trong 1 khoảng
    
    màn hình >= -> phải áp dụng nguyên tắc đè lại CSS
    màn hình <= -> phải áp dụng nguyên tắc đè lại CSS
    <= màn hình <= -> Không cần quan tâm với vấn đề đè lại CSS
  
  
  + Mỗi màn hình sẽ có một đoạn code CSS khác nhau
    + Dùng dung class, đè lại class đó trong mỗi màn hình
    + Mỗi màn hình sẽ có một class riêng
    
    Nếu màn hình >= 0
    .container {
      width: 1170px;
    }

    Nếu màn hình <= 1199px thì ... (Tương ứng với >= 992px)
      .container {
        width: 970px;
      }

    Nếu màn hình <= 991px thì ... (Tương ứng với >= 768px)
      .container {
        width: 750px;
      }

    Nếu màn hình <= 767px thì ... (Tương ứng với <= 767px )
      .container {
       width: 100%;
      }