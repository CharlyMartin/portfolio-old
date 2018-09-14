function toggleButton() {
  const brandTop = document.querySelector("#brand").getBoundingClientRect().top;
  const bannerHeight = document.querySelector(".background-light").offsetHeight;
  const button = document.querySelector(".btn-orange-transparent");

  window.addEventListener('scroll', function() {
    // console.log(brandTop, window.scrollY, bannerHeight);

    if ((brandTop + window.scrollY) > bannerHeight) {
      button.classList.add("button-active");
    } else {
      button.classList.remove("button-active");
    };
  });
}

export default toggleButton;
