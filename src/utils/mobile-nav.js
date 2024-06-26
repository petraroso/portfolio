const mobileNav = () => {
  const headerButtons = document.querySelectorAll(".header__bars");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLink = document.querySelectorAll(".mobile-nav__link");

  let isMobileNavOpen = false; //state

  headerButtons.forEach((headerButton) => {
    headerButton.addEventListener("click", () => {
      isMobileNavOpen = !isMobileNavOpen;
      if (isMobileNavOpen) {
        mobileNav.style.display = "flex";
        document.body.style.overflowY = "hidden";
        document.body.style.position = "absolute";
        document.body.style.top = "0";
        document.body.style.bottom = "0";
        document.body.style.left = "0";
        document.body.style.right = "0";
      } else {
        mobileNav.style.display = "none";
        document.body.style.overflowY = "auto";
      }
    });
  });

  mobileLink.forEach((link) => {
    link.addEventListener("click", () => {
      isMobileNavOpen = false;
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    });
  });

  const resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
      if (
        entry.target.style.display === "flex" &&
        entry.contentRect.width > 640
      ) {
        entry.target.style.display = "none";
        document.body.style.overflowY = "auto";
        isMobileNavOpen = false;
      }
    }
  });

  resizeObserver.observe(mobileNav);
};
export default mobileNav;
