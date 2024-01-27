(() => {
  // Toggle VIDEO
  const toggleVideo = document.querySelector("button");
  let isToggle = false;
  const iVideo = document.querySelector(".i-video");
  toggleVideo?.addEventListener("click", (eve) => {
    eve.preventDefault();
    isToggle = !isToggle;
    if (isToggle) {
      iVideo?.classList.remove("hidden");
    } else {
      iVideo?.classList.add("hidden");
    }
  });
  //  TOGGLE MENU
  const toggleMenubars = document.querySelector(".toggle__menubars");

  const primary__menu = document.querySelector(".primary__menu");
  toggleMenubars?.addEventListener("click", (event) => {
    primary__menu?.classList.toggle("hidden");
    primary__menu?.classList.add("flex");
  });
})();
