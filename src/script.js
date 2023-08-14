const emojis = [
  "🐕",
  "🐈",
  "🐁",
  "🐇",
  "🦊",
  "🐻",
  "🐴",
  "🦁",
  "🏰",
  "🏹",
  "🌾",
  "🌷",
  "⚔️",
  "📜",
  "👑",
  "🦄",
  "👼🏼",
  "🍄",
  "🦔",
  "🌹",
  "🌻",
  "🌼",
  "🌱",
  "🌿",
  "☘️",
  "🍀",
  "🌰",
  "🌲",
  "⚜️",
  "🐍",
  "🕊️",
  "🦉",
  "🦢",
  "🍓",
  "🍷",
  "🍇",
  "🍎",
  "🍞",
  "🗝️",
  "🌙",
  "🦗",
  "🔱",
  "🐸",
  "🦚",
  "🐔",
  "💀",
  "🦇",
  "🌈",
  "💐",
  "🐖",
  "🎀",
  "🤝🏻",
  "🥀",
  "🙏🏼",
  "🖤",
  "❤️",
  "🐌",
  "🦨",
  "🐢",
  "👁️",
  "💎",
  "⚱️",
  "💪🏽",
  "🔥",
  "☄️",
  "✊🏼",
  "🩸",
  "☀️"
];

/* https://medialab.github.io/iwanthue/ */

let c, ctx;
const size = 400;
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
  "#019ce5"
];

function main(holder) {
  const bord = document.createElement("div");
  const crest = document.createElement("div");
  crest.classList.add("crest");

  crest.innerText = emojis[~~(Math.random() * emojis.length)];

  bord.classList.add("bord");
  c = document.createElement("canvas");
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
    p.push([~~((r = (m = Math).random)() * s), ~~(r() * s), ~~(r() * size)]);
  }

  for (let x = 0; x < s; x++) {
    for (let y = 0; y < s; y++) {
      for (let n = 1 / (j = 0); j < l; j++) {
        let q = p[j];
        (d = m.hypot(q[0] - x, q[1] - y)) < n && ((n = d), (w[x][y] = q[2]));
      }
    }
  }

  // Generation code end
  draw();
  bord.appendChild(c);
  bord.appendChild(crest);
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

for (let i = 1; i < 4; i++) {
  const holdme = document.getElementById(`holder${i}`);
  main(holdme);
  main(holdme);
  main(holdme);
}

const holder = document.getElementById("holder");

emojis.slice(0,10).forEach((month, i) => {
  if (i == 1) return;
  const div = document.createElement("div");
  const size = "188px";
  div.classList.add("circle");
  div.style.transform = `translate(
    calc(cos(${ 55 + 36 * i}deg) * ${size}), 
    calc(sin(${ 55 + 36 * i}deg) * ${size})
  )`;
  div.style.backgroundColor = colors[~~(Math.random() * colors.length)]

  div.innerText = month;

  holder.appendChild(div);
});
