let listBoxTrungThuong = document.querySelectorAll('.box-ma-trung-thuong');
// let boxTrungThuong1 = listBoxTrungThuong[0];
// let boxTrungThuong2 = listBoxTrungThuong[1];

window.addEventListener('scroll', function() {
  for(let idx = 0; idx < listBoxTrungThuong.length; idx++) {
    detectElementInViewport(
      listBoxTrungThuong[idx], 
      function() {
        setTimeout(() => {
          listBoxTrungThuong[idx].classList.add('hien-thi');
        }, 500);
      }
    );
  }

  // detectElementInViewport(boxTrungThuong1, function() {
  //   setTimeout(() => {
  //     boxTrungThuong1.classList.add('hien-thi');
  //   }, 1000);
  // });
  // detectElementInViewport(boxTrungThuong2, function() {
  //   setTimeout(() => {
  //     boxTrungThuong2.classList.add('hien-thi');
  //   }, 3000);
  // });

  detectElementInViewport(
    document.querySelector('.box'),
    function() {
      document.querySelector('.box').classList.add('box-effect');
    }
  )

})