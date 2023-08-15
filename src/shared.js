const viewport = document.getElementById("viewport");
const container = document.getElementById("container");
const slides = [...document.getElementsByClassName("slide")];

const config = {
  height: 1000,
  width: 1200,
  base: [0, 2000, 0, 0, 0, 0],
};

const m = Math;
const randBetween = (min, max) => {
  return ~~(m.random() * (max - min + 1) + min);
};

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
  "🌷",
  "⚔️",
  "📜",
  "👑",
  "🦄",
  "🍄",
  "🦔",
  "🌹",
  "🌻",
  "🌼",
  "🌱",
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
  "🖤",
  "❤️",
  "🐌",
  "🦨",
  "🐢",
  "👁️",
  "💎",
  "💪🏽",
  "🔥",
  "☄️",
  "✊🏼",
  "☀️",
  "🕯️",
];

// ZzFXMicro - Zuper Zmall Zound Zynth - v1.2.0 by Frank Force ~ 880 bytes
zzfxV = 0.3; // volume
zzfx = // play sound
  (
    p = 1,
    k = 0.05,
    b = 220,
    e = 0,
    r = 0,
    t = 0.1,
    q = 0,
    D = 1,
    u = 0,
    y = 0,
    v = 0,
    z = 0,
    l = 0,
    E = 0,
    A = 0,
    F = 0,
    c = 0,
    w = 1,
    m = 0,
    B = 0,
    M = Math,
    R = 44100,
    d = 2 * M.PI,
    G = (u *= (500 * d) / R / R),
    C = (b *= ((1 - k + 2 * k * M.random((k = []))) * d) / R),
    g = 0,
    H = 0,
    a = 0,
    n = 1,
    I = 0,
    J = 0,
    f = 0,
    x,
    h
  ) => {
    e = R * e + 9;
    m *= R;
    r *= R;
    t *= R;
    c *= R;
    y *= (500 * d) / R ** 3;
    A *= d / R;
    v *= d / R;
    z *= R;
    l = (R * l) | 0;
    for (h = (e + m + r + t + c) | 0; a < h; k[a++] = f)
      ++J % ((100 * F) | 0) ||
        ((f = q
          ? 1 < q
            ? 2 < q
              ? 3 < q
                ? M.sin((g % d) ** 3)
                : M.max(M.min(M.tan(g), 1), -1)
              : 1 - (((((2 * g) / d) % 2) + 2) % 2)
            : 1 - 4 * M.abs(M.round(g / d) - g / d)
          : M.sin(g)),
        (f =
          (l ? 1 - B + B * M.sin((d * a) / l) : 1) *
          (0 < f ? 1 : -1) *
          M.abs(f) ** D *
          zzfxV *
          p *
          (a < e
            ? a / e
            : a < e + m
            ? 1 - ((a - e) / m) * (1 - w)
            : a < e + m + r
            ? w
            : a < h - c
            ? ((h - a - c) / t) * w
            : 0)),
        (f = c
          ? f / 2 +
            (c > a ? 0 : ((a < h - c ? 1 : (h - a) / c) * k[(a - c) | 0]) / 2)
          : f)),
        (x = (b += u += y) * M.cos(A * H++)),
        (g += x - x * E * (1 - ((1e9 * (M.sin(a) + 1)) % 2))),
        n && ++n > z && ((b += v), (C += v), (n = 0)),
        !l || ++I % l || ((b = C), (u = G), (n ||= 1));
    p = zzfxX.createBuffer(1, h, R);
    p.getChannelData(0).set(k);
    b = zzfxX.createBufferSource();
    b.buffer = p;
    b.connect(zzfxX.destination);
    b.start();
    return b;
  };
zzfxX = new AudioContext();

function weightedRandomNumber(min, max) {
  const lambda = 0.3;
  const exponent = -lambda * m.random();
  const scaled = ~~(
    ((m.pow(m.E, exponent) - 1) / (m.pow(m.E, -lambda) - 1)) *
    (max - min + 1)
  );

  return min + scaled;
}

{
  let e, t, l, r, o, n, f, s, a, i, d, u, _, w, g, h, v, S, c, y, V, b;
  (n = (o = Object).getPrototypeOf),
    (f = document),
    (s = (e, t, l, r) => (e ?? (setTimeout(l, r), new Set())).add(t)),
    (a = (e, t, r) => {
      let o = l;
      l = t;
      try {
        return e(r);
      } catch (e) {
        return console.error(e), r;
      } finally {
        l = o;
      }
    }),
    (i = (e) => (e.t = e.t.filter((e) => e.l?.isConnected))),
    (u = n(
      (d = {
        get val() {
          return l?.add(this), this.o;
        },
        get oldVal() {
          return l?.add(this), this.i;
        },
        set val(e) {
          let l = this;
          if (e !== l.o) {
            l.o = e;
            let r = new Set();
            for (let e of [...l.u])
              v(e.f, e.s), (e.g = 1), e.h.forEach(r.add, r);
            for (let e of r) e.u = e.u.filter((e) => !e.g);
            l.t.length ? (t = s(t, l, V)) : (l.i = e);
          }
        },
      })
    )),
    (_ = n(a)),
    (w = (e) => ({ __proto__: d, o: e, i: e, t: [], u: [] })),
    (g = (e) => n(e ?? 0) === d),
    (h = (t, l) => {
      let o = new Set(),
        n = { f: t },
        d = a(t, o, l);
      for (let t of o)
        (r = s(r, t, () => (r.forEach(i), (r = e)), 1e3)), t.t.push(n);
      return (n.l = (d ?? f).nodeType ? d : new Text(d));
    }),
    (v = (e, t = w()) => {
      let l = new Set(),
        r = { f: e, h: l, s: t };
      t.val = a(e, l);
      for (let e of l) e.u.push(r);
      return t;
    }),
    (c = {}),
    (y = (t) =>
      new Proxy(
        (l, ...r) => {
          let [s, ...a] = n(r[0] ?? 0) === u ? r : [{}, ...r],
            i = t ? f.createElementNS(t, l) : f.createElement(l);
          for (let [t, r] of o.entries(s)) {
            let f = (l) =>
                l ? o.getOwnPropertyDescriptor(l, t) ?? f(n(l)) : e,
              s = l + "," + t,
              a = c[s] ?? (c[s] = f(n(i))?.set ?? 0),
              u = a ? a.bind(i) : i.setAttribute.bind(i, t),
              w = n(r ?? 0);
            w === d
              ? h(() => (u(r.val), i))
              : w !== _ || (t.startsWith("on") && !r.v)
              ? u(r)
              : h(() => (u(r()), i));
          }
          return S(i, ...a);
        },
        { get: (t, l) => t.bind(e, l) }
      )),
    (V = () => {
      let l = [...t].filter((e) => e.o !== e.i);
      t = e;
      for (let t of new Set(l.flatMap(i))) {
        let l = t.l,
          r = h(t.f, l);
        (t.l = e), r !== l && (r != e ? l.replaceWith(r) : l.remove());
      }
      for (let e of l) e.i = e.o;
    }),
    (b = {
      add: (S = (t, ...l) => {
        for (let r of l.flat(1 / 0)) {
          let l = n(r ?? 0),
            o = l === d ? h(() => r.val) : l === _ ? h(r) : r;
          o != e && t.append(o);
        }
        return t;
      }),
      _: (e) => ((e.v = 1), e),
      tags: y(),
      tagsNS: y,
      state: w,
      val: (e) => (g(e) ? e.val : e),
      oldVal: (e) => (g(e) ? e.oldVal : e),
      derive: v,
    }),
    (window.van = b);
}

const synth = window.speechSynthesis;
let voice, utterance;
const speak = (text) => {
  utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = voice;
  utterance.volume = 0.4;
  utterance.rate = 0.8;
  //   utterance.pitch = 0.8;
  synth.speak(utterance);
};

// Wait for the voices to be loaded
window.speechSynthesis.onvoiceschanged = function () {
  // Get all available voices
  const voices = speechSynthesis.getVoices();
  // Find the British male voice
  voice = voices.filter((voice) => voice.lang === "en-GB")[0];
  console.log(voices.filter((voice) => voice.lang === "en-GB"));
  speak("Ready");
};
