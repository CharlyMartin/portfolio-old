export function pictureSafari() {
  const picture = document.querySelector(".sidebar-picture img");
  const pictureContainer = document.querySelector(".sidebar-picture");

  function isSafari() {
    return window.navigator.vendor.includes("Apple");
  }

  function removePicture() {
    if (isSafari()) {
      picture.style.visibility = "hidden";
      pictureContainer.style.order = "1";
    }
  }

  removePicture();
}
