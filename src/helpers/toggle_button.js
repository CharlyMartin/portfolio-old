function toggleButton() {
  const brandTop = document.querySelector("#brand").getBoundingClientRect().top;
  const bannerHeight = document.querySelector(".background-light").offsetHeight;

  const button = document.querySelector(".btn-orange-transparent");

  function isScolled() {
    return (brandTop + window.scrollY) > bannerHeight;
  }

  function toggleActive() {
    // console.log(brandTop, window.scrollY, bannerHeight);
    if (isScolled()) {
      button.classList.add("button-active");
    } else {
      button.classList.remove("button-active");
    }
  }

  window.addEventListener('scroll', toggleActive);
}

export { toggleButton };
