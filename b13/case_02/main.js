let boxMaTrungThuongElement = document.querySelector('.box-ma-trung-thuong')

let soLanChay = 0

function hamHienThiBoxTrungThuong() {
  console.log("chay hieu ung");
  soLanChay = soLanChay + 1
  // chayHieuUngBoxTrungThuongChua = true;
  boxMaTrungThuongElement.classList.add('hien-thi');
}

window.addEventListener('scroll', function(evt) {
  let objDOMRect = boxMaTrungThuongElement.getBoundingClientRect()
  let heightBox = objDOMRect.height;
  let scrollTop = window.scrollY;
  let heightWindow = window.innerHeight;
  let offsetTopBoxWithViewPort = objDOMRect.top;
  let offsetTopBoxWithBody = scrollTop + offsetTopBoxWithViewPort;

  if (
    scrollTop >= offsetTopBoxWithBody - heightWindow && 
    scrollTop <= offsetTopBoxWithBody + heightBox
  ) {
    if (soLanChay < 2) {
      setTimeout(() => {
        hamHienThiBoxTrungThuong();
      }, 1000);
    }
  } else {
  }
});


/**
 * 
 * 

1. Làm sao biết được khi nào user scroll thanh cuộn cửa sổ màn hình (Dùng Event)
2. Làm sao lấy được giá trị scroll thanh cuộn theo trục y (window.scrollY)
3. Làm sao lấy được chiều cao của màn hình (window.innerHeight)
4. Làm sao lấy được chiều cao của bất kỳ phần tử nào đó?

 */