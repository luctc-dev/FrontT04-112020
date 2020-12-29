

let previousScrollTop = 0;

window.addEventListener('scroll', function() {
  let currentScrollTop = window.scrollY;

  // Xử lý 
  if (currentScrollTop > previousScrollTop) {
    // Scroll Down 
    document.body.classList.add('scroll-down');
    document.body.classList.remove('scroll-up');
  } else if (currentScrollTop < previousScrollTop) {
    // Scroll Up
    document.body.classList.remove('scroll-down');
    document.body.classList.add('scroll-up');
  }

  // Trước khi return (Trước tầm vực hàm bị xoá bỏ)
  previousScrollTop = currentScrollTop;
})