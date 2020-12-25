function detectElementInViewport(element, callbackFunc) {
  if (element === null) {
    return;
  }
  // if (!element) {
  //   return;
  // }
  
  let objDOMRect = element.getBoundingClientRect()
  let heightBox = objDOMRect.height;
  let scrollTop = window.scrollY;
  let heightWindow = window.innerHeight;
  let offsetTopBoxWithViewPort = objDOMRect.top;
  let offsetTopBoxWithBody = scrollTop + offsetTopBoxWithViewPort;

  if (
    scrollTop >= offsetTopBoxWithBody - heightWindow && 
    scrollTop <= offsetTopBoxWithBody + heightBox
  ) {
    if (typeof callbackFunc === 'function') {
      callbackFunc();
    }
  } else {
  }
}