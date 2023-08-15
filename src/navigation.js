const windowScale = () => {
  const hScale = window.innerHeight / config.height;
  const wScale = window.innerWidth / config.width;
  config.size = hScale > wScale ? wScale : hScale;
  container.style = `transform: scale(${config.size})`;
};

window.onresize = windowScale;
windowScale();

const viewportTransform = (val) => {
  val = val.map((val) => -val);
  return `transform: rotateZ(${val[5]}deg) rotateY(${val[4]}deg) rotateX(${val[3]}deg) translate3d(${val[0]}px, ${val[1]}px, ${val[2]}px)`;
};

const contentTransform = (val) => {
  return `transform: translate(-50%, -50%) translate3d(${val[0]}px, ${val[1]}px, ${val[2]}px) rotateX(${val[3]}deg) rotateY(${val[4]}deg) rotateZ(${val[5]}deg);`;
};

let ns, points, degs, vals, progress;

const reset = () => {
  ns = null;
  points = [0, 0, 0];
  degs = [0, 0, 0];
  viewport.style = viewportTransform(config.base);
};

const nextSlide = (ns) => {
  slides.forEach((slide) => slide.classList.remove("active"));
  ns.classList.add("active");
  points = Object.values(ns.dataset).map((n) => Number(n));
  degs = [0, currentIndex * -15, 0];

  vals = points.concat(degs);

  ns.style = contentTransform(vals);
  viewport.append(ns);

  container.style = `transform: scale(${config.size})`;

  windowScale();
  ns.style = contentTransform(vals);
  viewport.style = viewportTransform(vals);
  currentIndex = (currentIndex + 1) % slideValues.length;
  //   zzfx(
  //     ...[0.25, 0, 420, 0.22, 0.5, 0.3, , 19, , , 234, , 0.18, , , , , 0.9, , 0.5]
  //   );
};

slides.forEach((slide, index) => {
  points = Object.values(slide.dataset).map((n) => Number(n));
  degs = [0, index * -15, 0];

  vals = points.concat(degs);
  slide.style = contentTransform(vals);
});

reset(false);

const slideValues = ["middle", "gboard", "window"]; // Your array of slide values
let currentIndex = 0; // Initial index

// Event listener for space bar key press
document.body.addEventListener("keyup", (e) => {
  e.stopPropagation();
  e.preventDefault();
  if (e.key === " ") {
    nextSlide(document.getElementById(slideValues[currentIndex]));
  }
});
