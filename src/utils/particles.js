const particles = () => {
  const particlesContainer = document.getElementById("particles");
  for (let i = 0; i < 100; i++) {
    const circleContainer = document.createElement("div");
    circleContainer.className = "circle-container";
    const circle = document.createElement("div");
    circle.className = "circle";
    circleContainer.appendChild(circle);
    particlesContainer.appendChild(circleContainer);
  }
};
export default particles;
