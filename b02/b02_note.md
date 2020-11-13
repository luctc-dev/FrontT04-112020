- System design
- Kỹ thuật chia layout (dàn trang). Căn chỉnh vị trí của một phần tử trên trang Web

- position (Vị trí)
  Căn chỉnh trên, dưới, trái, phải, giữa, ...
  + Vị trí bất thường (Phần này nó đè lên phần tử khác)
  + Vị trí bình thường

    static, relative, absolute
    Mặc định mình khôgn xét gì cả thì nó là position: static;
    top, left, right, bottom

  + position: static;
    -> Không thể dùng top, left, right, bottom để điều chỉnh vị trí
    -> Chỉ dùng được margin-top, margin-left, margin-right, margin-bottom để điều chỉnh vị trí.

  + position: relative;
    -> Có thể dùng top, left, right, bottom để điều chỉnh vị trí
    -> Cũng có thểs dùng được margin-top, margin-left, margin-right, margin-bottom để điều chỉnh vị trí.

  + position: absolute;
    -> Có thể dùng top, left, right, bottom để điều chỉnh vị trí
    -> Cũng có thểs dùng được margin-top, margin-left, margin-right, margin-bottom để điều chỉnh vị trí.
    -> Khi dùng absolute -> Giống như mình tách hẵn ra một layer mới
      -> Những thằng xung quanh không còn ảnh hưởng bởi vị trí của thằng absolute nữa
    -> Khi minh dùng (top, left, right, bottom) phải chỉ định nó chạy theo ai????
    -> Để xác định absolute này nó chạy theo ai ?????
      -> Cho thằng đó là position relative (ĐIều kiện 1)
      -> Thằng đó phải là phần tử cha (ĐIều kiện 2)

    -> top = 50%, bottom = 50% -> Sẽ tính theo chiều cao của phần tử cha
    -> translateY(50%) -> Tính theo chiều cao của bản thân nó

    -> left = 20%, right = 30$ -> Sẽ tính theo độ rộng (width) của phần tử cha
    -> translateX(50%) -> Tính theo độ rộng của bản thân nó

    -> Bài toán đưa phần tử vào giữa trung tâm mà không cần tính toán (Quy về % để nó tự tính)
      transform: translate(0x, 0y);
      transform: translateX(0x) translateY(0y);

      -> Khảo sát thử giả trị % nó tính theo cái gì??????
        -> Chạy thử từ 0 -> 100% xem nó nằm đâu

  + position: fixed;
    -> Toàn bộ tính chất của absolute
    -> Chỉ khác 1 điểm duy nhất
      + absolute -> chạy theo thằng cha gần nhất là relative
      + fixed -> luôn luôn chạy theo màn hình
    

- display (Hiển thị)
  Hiển thị thành 3 cột, 2 cột, 4 cột, ....