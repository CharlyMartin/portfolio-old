function togglingItems() {
  const brandTop = document.querySelector("#brand").getBoundingClientRect().top;
  const bannerHeight = document.querySelector(".background-light").offsetHeight;

  const button = document.querySelector(".btn-orange-transparent");
  const picture = document.querySelector(".sidebar-picture img");

  function isScolled() {
    return (brandTop + window.scrollY) > bannerHeight;
  }

  function isSafari() {
    return window.navigator.vendor.includes("Apple");
  }

  function toggleButton() {
    // console.log(brandTop, window.scrollY, bannerHeight);
    if (isScolled()) {
      button.classList.add("button-active");
    } else {
      button.classList.remove("button-active");
    };
  }

  function togglePicture() {
    if (isScolled() && isSafari()) {
      picture.style.visibility = "hidden";
    } else {
      picture.style.visibility = "visible";
    };
  }

  window.addEventListener('scroll', toggleButton);
  window.addEventListener('scroll', togglePicture);
}

export default togglingItems;
