const start = document.getElementById("s-match");
const gmatch = document.getElementById("gmatch");
const randOne = document.getElementById("rand-one");
const randTwo = document.getElementById("rand-two");

function randomName(emoji) {
  const plants = [
    "Rose",
    "Lily",
    "Black",
    "Fern",
    "Violet",
    "Ivy",
    "Holly",
    "Basil",
    "Thyme",
    "Sage",
  ];

  const geographicFeatures = [
    "Hill",
    "Valley",
    "River",
    "Lake",
    "Meadow",
    "Forest",
    "Stone",
    "Cave",
    "Brook",
    "Glen",
    "Field",
  ];

  const suffix = [
    "ham",
    "shire",
    "cott",
    "worth",
    "bury",
    "stead",
    "well",
    "bridge",
    "church",
    "ville",
    "thorn",
  ];

  const randomPlant = plants[Math.floor(Math.random() * plants.length)];
  const randomFeature =
    geographicFeatures[Math.floor(Math.random() * geographicFeatures.length)];
  const randomSuffix =
    Math.random() > 0.5
      ? suffix[Math.floor(Math.random() * suffix.length)]
      : suffix
          .sort(() => 0.5 - Math.random())
          .slice(0, ~~(Math.random() * 3))
          .join("");
  const honorific = Math.random() > 0.5 ? "sir" : "lady";

  return `${honorific} ${
    Math.random() < 0.9 ? "" : "mick"
  }${emoji} ${randomSuffix}, of ${randomPlant}${randomFeature}`;
}

const clearMatch = () => {
  setTimeout(() => {
    randOne.innerText = "";
    randTwo.innerText = "";
  }, 1000);
};

let booping = false;
let timer;
const beepBoop = () => {
  if (!booping || timer > 900) {
    setTimeout(() => {
      zzfx(...trumpet);

      const name1 = randomName(randOne.innerText);
      randOne.onclick = () => {
        if (randOne.innerText == "") return;
        speak(name1);
        nextSlide("gboard");
        clearMatch();
        gameLoop(randOne.innerText);
      };
      const name2 = randomName(randTwo.innerText);
      randTwo.onclick = () => {
        if (randTwo.innerText == "") return;
        speak(name2);
        nextSlide("gboard");
        clearMatch();
        gameLoop(randTwo.innerText);
      };

      speak(`Choose Your Vassal, , , , ${name1}, , or ${name2}`);
    }, 250);
    zzfx(...dink);

    booping = false;
    gmatch.style.pointerEvents = "auto";
    start.disabled = false;
    return;
  } else {
    zzfx(
      ...[
        0.25,
        0.5,
        430.8128,
        ,
        0.03,
        0.07,
        1,
        1.21,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        0.47,
        0.07,
      ]
    );
  }

  timer *= m.max(1.06, timer / (600 * weightedRandomNumber(0.3, 1)));
  setTimeout(() => {
    const transfer = randOne.innerText + randTwo.innerText;
    while (
      randOne.innerText + randTwo.innerText === transfer ||
      randOne.innerText === randTwo.innerText ||
      randOne.innerText == "" ||
      randTwo.innerText == ""
    ) {
      if (m.random() > 0.5) {
        randOne.innerText = emojis[~~(m.random() * emojis.length)];
      } else {
        randTwo.innerText = emojis[~~(m.random() * emojis.length)];
      }
    }

    beepBoop();
  }, m.min(700, timer));
};

start.onclick = () => {
  timer = 100;
  booping = true;
  gmatch.style.pointerEvents = "none";
  start.disabled = true;
  beepBoop();
};

setTimeout(() => {
  document.getElementById("go").style.opacity = "1";
  document.querySelector(".displacement").animate([{ r: "0" }, { r: "300" }], {
    duration: 4000,
    iterations: 1,
    fill: "forwards",
  });
}, 10);
