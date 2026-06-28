function refreshResolution(){
  var md = new MobileDetect(window.navigator.userAgent);
  if (md.mobile() || md.tablet() || (window.innerWidth < 700)) {
    document.body.classList.add('mobile');
  } else {
    document.body.classList.remove('mobile');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  refreshResolution();
});

window.addEventListener('resize', () => {
  refreshResolution();
});

window.addEventListener("beforeprint", () => {
  document.querySelectorAll(".hideprint").forEach((element) => {
    element.style.opacity = 0;
  });

  document.querySelectorAll(".showprint").forEach((element) => {
    element.style.opacity = 100;
  });
});

window.addEventListener("afterprint", () => {
  document.querySelectorAll(".hideprint").forEach((element) => {
    element.style.opacity = 100;
  });
  
  document.querySelectorAll(".showprint").forEach((element) => {
    element.style.opacity = 0;
  });
});
