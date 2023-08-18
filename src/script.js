/* https://medialab.github.io/iwanthue/ */

let c, ctx;
const size = 200;
const complexity = 50;
const colors = [
  "#0288db",
  "#00b3c7",
  "#086dbd",
  "#01c0cc",
  "#4783d8",
  "#45d2ef",
  "#49c0ff",
  "#0091bb",
  "#76a3ff",
  "#019ce5",
];

function main(holder) {
  const bord = div();
  const crest = div({ class: "crest" });
  const cover = div({ class: "cover" });

  bord.onclick = () => {
    crest.innerText = captured.shift();
    bord.classList.toggle("open");
    document.getElementById("panes").innerHTML = captured.join(" ");
    zzfx(
      ...[
        ,
        0,
        100,
        0.14,
        0.5,
        0.41,
        ,
        15,
        ,
        ,
        20,
        0.25,
        0.19,
        ,
        ,
        ,
        ,
        0.52,
        0.23,
        0.4,
      ]
    );

    if (captured.length == 0) {
      if (document.getElementsByClassName("open").length == 9) {
        setTimeout(win, 1000);
        return;
      }
      nextSlide("middle");
    }
  };

  bord.classList.add("bord");
  c = document.createElement("canvas");
  c.classList.add("glass");
  c.width = size;
  c.height = size;
  ctx = c.getContext("2d");

  // Actual generation code
  let p = [];
  (x = f = 0), (w = []);
  for (; f < (s = size); f++) {
    w[f] = [];
  }
  for (let i = 0; i < (l = complexity); i++) {
    p.push([~~((r = m.random)() * s), ~~(r() * s), ~~(r() * size)]);
  }

  for (let x = 0; x < s; x++) {
    for (let y = 0; y < s; y++) {
      for (let n = 1 / (j = 0); j < l; j++) {
        let q = p[j];
        (d = m.hypot(q[0] - x, q[1] - y)) < n && ((n = d), (w[x][y] = q[2]));
      }
    }
  }

  draw();
  bord.appendChild(c);
  bord.appendChild(crest);
  bord.appendChild(cover);
  holder.appendChild(bord);
}

function draw() {
  for (var x = 0; x < size; x++) {
    for (var y = 0; y < size; y++) {
      ctx.fillStyle = "black";
      if (w[x - 1] && w[x + 1]) {
        if (
          w[x][y] == w[x - 1][y] &&
          w[x][y] == w[x][y - 1] &&
          w[x][y] == w[x + 1][y] &&
          w[x][y] == w[x][y + 1]
        ) {
          ctx.fillStyle = colors[w[x][y] % colors.length];
          ctx.fillRect(x, y, 1, 1);
        }
      } else {
        ctx.fillRect(x - 2, y - 2, 5, 5);
      }
    }
  }
}

setTimeout(() => {
  for (let i = 1; i < 4; i++) {
    const holdme = document.getElementById(`holder${i}`);
    main(holdme);
    main(holdme);
    main(holdme);
  }

  function cloneCanvas(oldCanvas) {
    //create a new canvas
    var newCanvas = document.createElement("canvas");
    var context = newCanvas.getContext("2d");

    //set dimensions
    newCanvas.width = oldCanvas.width;
    newCanvas.height = oldCanvas.height;

    //apply the old canvas to the new one
    context.drawImage(oldCanvas, 0, 0);

    //return the new canvas
    return newCanvas;
  }

  /* Rosetta window */
  const holder = document.getElementById("holder");
  const panes = document.getElementsByClassName("glass");
  const central = document.getElementById("central");
  central.style.backgroundImage = `url(${panes[6].toDataURL()})`;
  central.style.backgroundSize = "cover";

  emojis.slice(0, 10).forEach((month, i) => {
    if (i == 1) return;
    const hh = div();
    const size = "188px";
    hh.classList.add("circle");
    hh.style.transform = `translate(
    calc(cos(${55 + 36 * i}deg) * ${size}), 
    calc(sin(${55 + 36 * i}deg) * ${size})
  )`;
    hh.style.filter = `contrast(0.8) brightness(1.2)`;

    hh.style.backgroundImage = `url(${panes[i % panes.length].toDataURL()})`;
    hh.style.backgroundSize = "cover";
    const text = div();
    text.innerText = month;
    hh.appendChild(text);

    holder.appendChild(hh);
  });
}, 0);
