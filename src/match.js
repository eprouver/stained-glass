const start = document.getElementById("s-match");
const holder = document.getElementById("holder");
const randOne = document.getElementById("rand-one");
const randTwo = document.getElementById("rand-two");
let booping = false;
let timer;
const beepBoop = () => {
  if (!booping || timer > 900) {
    setTimeout(() => {
      if (randOne.innerText !== randTwo.innerText) {
        zzfx(
          ...[
            1,
            0,
            819,
            ,
            ,
            ,
            1,
            2,
            ,
            ,
            80,
            0.05,
            0.02,
            ,
            ,
            ,
            0.04,
            0.84,
            0.55,
            0.05,
          ]
        );
      } else {
        //zzfx(...[2.02,0,700,,,,1,2,,,-80,.12,.02,,,,.04,.84,.76,.05]);
        zzfx(
          ...[
            1.5,
            0,
            25.40639,
            ,
            0.54,
            ,
            2,
            10,
            ,
            ,
            50,
            ,
            ,
            0.2,
            ,
            ,
            0.17,
            0.5,
            0.11,
          ]
        ); // Trumpet one
      }
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
        0.45,
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

  timer *= Math.max(1.06, timer / (600 * weightedRandomNumber(0.3, 1)));
  setTimeout(() => {
    const transfer = randOne.innerText + randTwo.innerText;
    while (
      randOne.innerText + randTwo.innerText === transfer ||
      randOne.innerText === randTwo.innerText ||
      randOne.innerText == "" ||
      randTwo.innerText == ""
    ) {
      if (Math.random() > 0.5) {
        randOne.innerText = emojis[~~(Math.random() * emojis.length)];
      } else {
        randTwo.innerText = emojis[~~(Math.random() * emojis.length)];
      }
    }

    beepBoop();
  }, Math.min(700, timer));
};

start.onclick = () => {
  timer = 100;
  booping = true;
  start.disabled = true;
  beepBoop();
};
