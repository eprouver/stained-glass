const start = document.getElementById("s-match");
const holder = document.getElementById("holder");
const randOne = document.getElementById("rand-one");
const randTwo = document.getElementById("rand-two");
let booping = false;
let timer;
const beepBoop = () => {
  if (!booping || timer > 900) {
    setTimeout(() => {
      zzfx(...[0.45, 0, 43, , 0.25, 0.25, 2, 22, , , 50, , 0.3, , , , , 0.87]);
    }, 250);
    zzfx(
      ...[
        0.75,
        0,
        730.8128,
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

    booping = false;
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
  start.disabled = true;
  beepBoop();
};
