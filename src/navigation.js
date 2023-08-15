const viewport = document.getElementById("viewport");
const container = document.getElementById("container");

const config = {
  height: 1000,
  width: 1200,
  base: [0, 0, -2000, 0, 0, 0],
};

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
  points = Object.values(ns.dataset).map((n) => Number(n));
  degs = degs.map((p) => randBetween(0, 0));

  vals = points.concat(degs);

  ns.style = contentTransform(vals);
  viewport.append(ns);

  container.style = `transform: scale(${config.size})`;

  windowScale();
  ns.style = contentTransform(vals);
  viewport.style = viewportTransform(vals);
  currentIndex = (currentIndex + 1) % slideValues.length;
};

[...document.getElementsByClassName("slide")].forEach((slide) => {
  points = Object.values(slide.dataset).map((n) => Number(n));
  degs = [0, 0, 0];

  vals = points.concat(degs);
  slide.style = contentTransform(vals);
});

reset(false);

const slideValues = ["start", "middle", "window", "gboard"]; // Your array of slide values
let currentIndex = 0; // Initial index

// Event listener for space bar key press
document.body.addEventListener("keyup", (e) => {
  e.stopPropagation();
  e.preventDefault();
  if (e.key === " ") {
    nextSlide(document.getElementById(slideValues[currentIndex]));
  }
});
