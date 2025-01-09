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

})();
