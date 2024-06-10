const lazyLoading = () => {
  const lazyImgs = document.querySelectorAll(".lazy");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("loading");
          img.classList.add("loaded");
          observer.unobserve(img); //once it is lazy loaded so it doesn't load again
        }
      });
    }
    //all 3 are default so they are not needed:
    //{
    //root: null, //observes entire page
    //rootMargin: "0px",
    //threshold: 0, //how much of the image needs to be visible 0-100
    //}
  );

  //all images are being observed
  lazyImgs.forEach((img) => {
    observer.observe(img);
  });
};
export default lazyLoading;
