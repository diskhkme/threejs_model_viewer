var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const r of i) if (r.type === "childList") for (const o of r.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: true, subtree: true });
  function t(i) {
    const r = {};
    return i.integrity && (r.integrity = i.integrity), i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? r.credentials = "include" : i.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r;
  }
  function n(i) {
    if (i.ep) return;
    i.ep = true;
    const r = t(i);
    fetch(i.href, r);
  }
})();
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
const Qo = "174", Ti = { ROTATE: 0, DOLLY: 1, PAN: 2 }, Ei = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, nh = 0, Ra = 1, ih = 2, sc = 1, sh = 2, vn = 3, bn = 0, Ut = 1, sn = 2, On = 0, Ai = 1, Ca = 2, Pa = 3, La = 4, rh = 5, Zn = 100, oh = 101, ah = 102, lh = 103, ch = 104, hh = 200, uh = 201, dh = 202, fh = 203, oo = 204, ao = 205, ph = 206, mh = 207, gh = 208, _h = 209, xh = 210, vh = 211, Mh = 212, yh = 213, Sh = 214, lo = 0, co = 1, ho = 2, Pi = 3, uo = 4, fo = 5, po = 6, mo = 7, rc = 0, Eh = 1, bh = 2, Bn = 0, Th = 1, Ah = 2, wh = 3, Rh = 4, Ch = 5, Ph = 6, Lh = 7, Da = "attached", Dh = "detached", oc = 300, Li = 301, Di = 302, go = 303, _o = 304, gr = 306, Ii = 1e3, Nn = 1001, hr = 1002, Ct = 1003, ac = 1004, rs = 1005, Bt = 1006, ir = 1007, yn = 1008, Tn = 1009, lc = 1010, cc = 1011, hs = 1012, ea = 1013, ei = 1014, Jt = 1015, xs = 1016, ta = 1017, na = 1018, Ui = 1020, hc = 35902, uc = 1021, dc = 1022, Xt = 1023, fc = 1024, pc = 1025, wi = 1026, Ni = 1027, ia = 1028, sa = 1029, mc = 1030, ra = 1031, oa = 1033, sr = 33776, rr = 33777, or = 33778, ar = 33779, xo = 35840, vo = 35841, Mo = 35842, yo = 35843, So = 36196, Eo = 37492, bo = 37496, To = 37808, Ao = 37809, wo = 37810, Ro = 37811, Co = 37812, Po = 37813, Lo = 37814, Do = 37815, Io = 37816, Uo = 37817, No = 37818, Fo = 37819, Oo = 37820, Bo = 37821, lr = 36492, zo = 36494, ko = 36495, gc = 36283, Vo = 36284, Ho = 36285, Go = 36286, us = 2300, ds = 2301, yr = 2302, Ia = 2400, Ua = 2401, Na = 2402, Ih = 2500, Uh = 0, _c = 1, Wo = 2, Nh = 3200, Fh = 3201, xc = 0, Oh = 1, Un = "", Mt = "srgb", Lt = "srgb-linear", ur = "linear", Qe = "srgb", si = 7680, Fa = 519, Bh = 512, zh = 513, kh = 514, vc = 515, Vh = 516, Hh = 517, Gh = 518, Wh = 519, Xo = 35044, Oa = "300 es", Sn = 2e3, dr = 2001;
class ni {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    const n = this._listeners;
    return n === void 0 ? false : n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    const n = this._listeners;
    if (n === void 0) return;
    const i = n[e];
    if (i !== void 0) {
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const n = t[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let r = 0, o = i.length; r < o; r++) i[r].call(this, e);
      e.target = null;
    }
  }
}
const St = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Ba = 1234567;
const as = Math.PI / 180, Fi = 180 / Math.PI;
function Qt() {
  const s = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (St[s & 255] + St[s >> 8 & 255] + St[s >> 16 & 255] + St[s >> 24 & 255] + "-" + St[e & 255] + St[e >> 8 & 255] + "-" + St[e >> 16 & 15 | 64] + St[e >> 24 & 255] + "-" + St[t & 63 | 128] + St[t >> 8 & 255] + "-" + St[t >> 16 & 255] + St[t >> 24 & 255] + St[n & 255] + St[n >> 8 & 255] + St[n >> 16 & 255] + St[n >> 24 & 255]).toLowerCase();
}
function Ne(s, e, t) {
  return Math.max(e, Math.min(t, s));
}
function aa(s, e) {
  return (s % e + e) % e;
}
function Xh(s, e, t, n, i) {
  return n + (s - e) * (i - n) / (t - e);
}
function Yh(s, e, t) {
  return s !== e ? (t - s) / (e - s) : 0;
}
function ls(s, e, t) {
  return (1 - t) * s + t * e;
}
function qh(s, e, t, n) {
  return ls(s, e, 1 - Math.exp(-t * n));
}
function jh(s, e = 1) {
  return e - Math.abs(aa(s, e * 2) - e);
}
function $h(s, e, t) {
  return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * (3 - 2 * s));
}
function Kh(s, e, t) {
  return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * s * (s * (s * 6 - 15) + 10));
}
function Zh(s, e) {
  return s + Math.floor(Math.random() * (e - s + 1));
}
function Jh(s, e) {
  return s + Math.random() * (e - s);
}
function Qh(s) {
  return s * (0.5 - Math.random());
}
function eu(s) {
  s !== void 0 && (Ba = s);
  let e = Ba += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function tu(s) {
  return s * as;
}
function nu(s) {
  return s * Fi;
}
function iu(s) {
  return (s & s - 1) === 0 && s !== 0;
}
function su(s) {
  return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2));
}
function ru(s) {
  return Math.pow(2, Math.floor(Math.log(s) / Math.LN2));
}
function ou(s, e, t, n, i) {
  const r = Math.cos, o = Math.sin, a = r(t / 2), l = o(t / 2), c = r((e + n) / 2), h = o((e + n) / 2), u = r((e - n) / 2), d = o((e - n) / 2), p = r((n - e) / 2), g = o((n - e) / 2);
  switch (i) {
    case "XYX":
      s.set(a * h, l * u, l * d, a * c);
      break;
    case "YZY":
      s.set(l * d, a * h, l * u, a * c);
      break;
    case "ZXZ":
      s.set(l * u, l * d, a * h, a * c);
      break;
    case "XZX":
      s.set(a * h, l * g, l * p, a * c);
      break;
    case "YXY":
      s.set(l * p, a * h, l * g, a * c);
      break;
    case "ZYZ":
      s.set(l * g, l * p, a * h, a * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function Zt(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return s / 4294967295;
    case Uint16Array:
      return s / 65535;
    case Uint8Array:
      return s / 255;
    case Int32Array:
      return Math.max(s / 2147483647, -1);
    case Int16Array:
      return Math.max(s / 32767, -1);
    case Int8Array:
      return Math.max(s / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Ze(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return Math.round(s * 4294967295);
    case Uint16Array:
      return Math.round(s * 65535);
    case Uint8Array:
      return Math.round(s * 255);
    case Int32Array:
      return Math.round(s * 2147483647);
    case Int16Array:
      return Math.round(s * 32767);
    case Int8Array:
      return Math.round(s * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Mc = { DEG2RAD: as, RAD2DEG: Fi, generateUUID: Qt, clamp: Ne, euclideanModulo: aa, mapLinear: Xh, inverseLerp: Yh, lerp: ls, damp: qh, pingpong: jh, smoothstep: $h, smootherstep: Kh, randInt: Zh, randFloat: Jh, randFloatSpread: Qh, seededRandom: eu, degToRad: tu, radToDeg: nu, isPowerOfTwo: iu, ceilPowerOfTwo: su, floorPowerOfTwo: ru, setQuaternionFromProperEuler: ou, normalize: Ze, denormalize: Zt };
class Me {
  constructor(e = 0, t = 0) {
    Me.prototype.isVector2 = true, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Ne(this.x, e.x, t.x), this.y = Ne(this.y, e.y, t.y), this;
  }
  clampScalar(e, t) {
    return this.x = Ne(this.x, e, t), this.y = Ne(this.y, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ne(n, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Ne(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), r = this.x - e.x, o = this.y - e.y;
    return this.x = r * n - o * i + e.x, this.y = r * i + o * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class De {
  constructor(e, t, n, i, r, o, a, l, c) {
    De.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, i, r, o, a, l, c);
  }
  set(e, t, n, i, r, o, a, l, c) {
    const h = this.elements;
    return h[0] = e, h[1] = i, h[2] = a, h[3] = t, h[4] = r, h[5] = l, h[6] = n, h[7] = o, h[8] = c, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, o = n[0], a = n[3], l = n[6], c = n[1], h = n[4], u = n[7], d = n[2], p = n[5], g = n[8], _ = i[0], m = i[3], f = i[6], b = i[1], T = i[4], M = i[7], L = i[2], C = i[5], A = i[8];
    return r[0] = o * _ + a * b + l * L, r[3] = o * m + a * T + l * C, r[6] = o * f + a * M + l * A, r[1] = c * _ + h * b + u * L, r[4] = c * m + h * T + u * C, r[7] = c * f + h * M + u * A, r[2] = d * _ + p * b + g * L, r[5] = d * m + p * T + g * C, r[8] = d * f + p * M + g * A, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8];
    return t * o * h - t * a * c - n * r * h + n * a * l + i * r * c - i * o * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8], u = h * o - a * c, d = a * l - h * r, p = c * r - o * l, g = t * u + n * d + i * p;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / g;
    return e[0] = u * _, e[1] = (i * c - h * n) * _, e[2] = (a * n - i * o) * _, e[3] = d * _, e[4] = (h * t - i * l) * _, e[5] = (i * r - a * t) * _, e[6] = p * _, e[7] = (n * l - c * t) * _, e[8] = (o * t - n * r) * _, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, r, o, a) {
    const l = Math.cos(r), c = Math.sin(r);
    return this.set(n * l, n * c, -n * (l * o + c * a) + o + e, -i * c, i * l, -i * (-c * o + l * a) + a + t, 0, 0, 1), this;
  }
  scale(e, t) {
    return this.premultiply(Sr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Sr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Sr.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return false;
    return true;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Sr = new De();
function yc(s) {
  for (let e = s.length - 1; e >= 0; --e) if (s[e] >= 65535) return true;
  return false;
}
function fs(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
function au() {
  const s = fs("canvas");
  return s.style.display = "block", s;
}
const za = {};
function $n(s) {
  s in za || (za[s] = true, console.warn(s));
}
function lu(s, e, t) {
  return new Promise(function(n, i) {
    function r() {
      switch (s.clientWaitSync(e, s.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case s.WAIT_FAILED:
          i();
          break;
        case s.TIMEOUT_EXPIRED:
          setTimeout(r, t);
          break;
        default:
          n();
      }
    }
    setTimeout(r, t);
  });
}
function cu(s) {
  const e = s.elements;
  e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
}
function hu(s) {
  const e = s.elements;
  e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
}
const ka = new De().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), Va = new De().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function uu() {
  const s = { enabled: true, workingColorSpace: Lt, spaces: {}, convert: function(i, r, o) {
    return this.enabled === false || r === o || !r || !o || (this.spaces[r].transfer === Qe && (i.r = En(i.r), i.g = En(i.g), i.b = En(i.b)), this.spaces[r].primaries !== this.spaces[o].primaries && (i.applyMatrix3(this.spaces[r].toXYZ), i.applyMatrix3(this.spaces[o].fromXYZ)), this.spaces[o].transfer === Qe && (i.r = Ri(i.r), i.g = Ri(i.g), i.b = Ri(i.b))), i;
  }, fromWorkingColorSpace: function(i, r) {
    return this.convert(i, this.workingColorSpace, r);
  }, toWorkingColorSpace: function(i, r) {
    return this.convert(i, r, this.workingColorSpace);
  }, getPrimaries: function(i) {
    return this.spaces[i].primaries;
  }, getTransfer: function(i) {
    return i === Un ? ur : this.spaces[i].transfer;
  }, getLuminanceCoefficients: function(i, r = this.workingColorSpace) {
    return i.fromArray(this.spaces[r].luminanceCoefficients);
  }, define: function(i) {
    Object.assign(this.spaces, i);
  }, _getMatrix: function(i, r, o) {
    return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ);
  }, _getDrawingBufferColorSpace: function(i) {
    return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace;
  }, _getUnpackColorSpace: function(i = this.workingColorSpace) {
    return this.spaces[i].workingColorSpaceConfig.unpackColorSpace;
  } }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return s.define({ [Lt]: { primaries: e, whitePoint: n, transfer: ur, toXYZ: ka, fromXYZ: Va, luminanceCoefficients: t, workingColorSpaceConfig: { unpackColorSpace: Mt }, outputColorSpaceConfig: { drawingBufferColorSpace: Mt } }, [Mt]: { primaries: e, whitePoint: n, transfer: Qe, toXYZ: ka, fromXYZ: Va, luminanceCoefficients: t, outputColorSpaceConfig: { drawingBufferColorSpace: Mt } } }), s;
}
const He = uu();
function En(s) {
  return s < 0.04045 ? s * 0.0773993808 : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function Ri(s) {
  return s < 31308e-7 ? s * 12.92 : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
let ri;
class du {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      ri === void 0 && (ri = fs("canvas")), ri.width = e.width, ri.height = e.height;
      const n = ri.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = ri;
    }
    return t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = fs("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), r = i.data;
      for (let o = 0; o < r.length; o++) r[o] = En(r[o] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(En(t[n] / 255) * 255) : t[n] = En(t[n]);
      return { data: t, width: e.width, height: e.height };
    } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let fu = 0;
class la {
  constructor(e = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: fu++ }), this.uuid = Qt(), this.data = e, this.dataReady = true, this.version = 0;
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" }, i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let o = 0, a = i.length; o < a; o++) i[o].isDataTexture ? r.push(Er(i[o].image)) : r.push(Er(i[o]));
      } else r = Er(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Er(s) {
  return typeof HTMLImageElement < "u" && s instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && s instanceof ImageBitmap ? du.getDataURL(s) : s.data ? { data: Array.from(s.data), width: s.width, height: s.height, type: s.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let pu = 0;
class pt extends ni {
  constructor(e = pt.DEFAULT_IMAGE, t = pt.DEFAULT_MAPPING, n = Nn, i = Nn, r = Bt, o = yn, a = Xt, l = Tn, c = pt.DEFAULT_ANISOTROPY, h = Un) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: pu++ }), this.uuid = Qt(), this.name = "", this.source = new la(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new Me(0, 0), this.repeat = new Me(1, 1), this.center = new Me(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new De(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = true, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = { metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(e).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== oc) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
      case Ii:
        e.x = e.x - Math.floor(e.x);
        break;
      case Nn:
        e.x = e.x < 0 ? 0 : 1;
        break;
      case hr:
        Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
        break;
    }
    if (e.y < 0 || e.y > 1) switch (this.wrapT) {
      case Ii:
        e.y = e.y - Math.floor(e.y);
        break;
      case Nn:
        e.y = e.y < 0 ? 0 : 1;
        break;
      case hr:
        Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
        break;
    }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === true && (this.version++, this.source.needsUpdate = true);
  }
  set needsPMREMUpdate(e) {
    e === true && this.pmremVersion++;
  }
}
pt.DEFAULT_IMAGE = null;
pt.DEFAULT_MAPPING = oc;
pt.DEFAULT_ANISOTROPY = 1;
class qe {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    qe.prototype.isVector4 = true, this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, r = this.w, o = e.elements;
    return this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * r, this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * r, this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * r, this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * r, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, r;
    const l = e.elements, c = l[0], h = l[4], u = l[8], d = l[1], p = l[5], g = l[9], _ = l[2], m = l[6], f = l[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(u - _) < 0.01 && Math.abs(g - m) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(u + _) < 0.1 && Math.abs(g + m) < 0.1 && Math.abs(c + p + f - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const T = (c + 1) / 2, M = (p + 1) / 2, L = (f + 1) / 2, C = (h + d) / 4, A = (u + _) / 4, N = (g + m) / 4;
      return T > M && T > L ? T < 0.01 ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(T), i = C / n, r = A / n) : M > L ? M < 0.01 ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(M), n = C / i, r = N / i) : L < 0.01 ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(L), n = A / r, i = N / r), this.set(n, i, r, t), this;
    }
    let b = Math.sqrt((m - g) * (m - g) + (u - _) * (u - _) + (d - h) * (d - h));
    return Math.abs(b) < 1e-3 && (b = 1), this.x = (m - g) / b, this.y = (u - _) / b, this.z = (d - h) / b, this.w = Math.acos((c + p + f - 1) / 2), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Ne(this.x, e.x, t.x), this.y = Ne(this.y, e.y, t.y), this.z = Ne(this.z, e.z, t.z), this.w = Ne(this.w, e.w, t.w), this;
  }
  clampScalar(e, t) {
    return this.x = Ne(this.x, e, t), this.y = Ne(this.y, e, t), this.z = Ne(this.z, e, t), this.w = Ne(this.w, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ne(n, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class mu extends ni {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = true, this.width = e, this.height = t, this.depth = 1, this.scissor = new qe(0, 0, e, t), this.scissorTest = false, this.viewport = new qe(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    n = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: Bt, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1 }, n);
    const r = new pt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    r.flipY = false, r.generateMipmaps = n.generateMipmaps, r.internalFormat = n.internalFormat, this.textures = [];
    const o = n.count;
    for (let a = 0; a < o; a++) this.textures[a] = r.clone(), this.textures[a].isRenderTargetTexture = true, this.textures[a].renderTarget = this;
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e;
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let i = 0, r = this.textures.length; i < r; i++) this.textures[i].image.width = e, this.textures[i].image.height = t, this.textures[i].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let t = 0, n = e.textures.length; t < n; t++) {
      this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = true, this.textures[t].renderTarget = this;
      const i = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new la(i);
    }
    return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class ti extends mu {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = true;
  }
}
class Sc extends pt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = Ct, this.minFilter = Ct, this.wrapR = Nn, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class gu extends pt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = Ct, this.minFilter = Ct, this.wrapR = Nn, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class an {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = true, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, r, o, a) {
    let l = n[i + 0], c = n[i + 1], h = n[i + 2], u = n[i + 3];
    const d = r[o + 0], p = r[o + 1], g = r[o + 2], _ = r[o + 3];
    if (a === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
      return;
    }
    if (a === 1) {
      e[t + 0] = d, e[t + 1] = p, e[t + 2] = g, e[t + 3] = _;
      return;
    }
    if (u !== _ || l !== d || c !== p || h !== g) {
      let m = 1 - a;
      const f = l * d + c * p + h * g + u * _, b = f >= 0 ? 1 : -1, T = 1 - f * f;
      if (T > Number.EPSILON) {
        const L = Math.sqrt(T), C = Math.atan2(L, f * b);
        m = Math.sin(m * C) / L, a = Math.sin(a * C) / L;
      }
      const M = a * b;
      if (l = l * m + d * M, c = c * m + p * M, h = h * m + g * M, u = u * m + _ * M, m === 1 - a) {
        const L = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
        l *= L, c *= L, h *= L, u *= L;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, o) {
    const a = n[i], l = n[i + 1], c = n[i + 2], h = n[i + 3], u = r[o], d = r[o + 1], p = r[o + 2], g = r[o + 3];
    return e[t] = a * g + h * u + l * p - c * d, e[t + 1] = l * g + h * d + c * u - a * p, e[t + 2] = c * g + h * p + a * d - l * u, e[t + 3] = h * g - a * u - l * d - c * p, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = true) {
    const n = e._x, i = e._y, r = e._z, o = e._order, a = Math.cos, l = Math.sin, c = a(n / 2), h = a(i / 2), u = a(r / 2), d = l(n / 2), p = l(i / 2), g = l(r / 2);
    switch (o) {
      case "XYZ":
        this._x = d * h * u + c * p * g, this._y = c * p * u - d * h * g, this._z = c * h * g + d * p * u, this._w = c * h * u - d * p * g;
        break;
      case "YXZ":
        this._x = d * h * u + c * p * g, this._y = c * p * u - d * h * g, this._z = c * h * g - d * p * u, this._w = c * h * u + d * p * g;
        break;
      case "ZXY":
        this._x = d * h * u - c * p * g, this._y = c * p * u + d * h * g, this._z = c * h * g + d * p * u, this._w = c * h * u - d * p * g;
        break;
      case "ZYX":
        this._x = d * h * u - c * p * g, this._y = c * p * u + d * h * g, this._z = c * h * g - d * p * u, this._w = c * h * u + d * p * g;
        break;
      case "YZX":
        this._x = d * h * u + c * p * g, this._y = c * p * u + d * h * g, this._z = c * h * g - d * p * u, this._w = c * h * u - d * p * g;
        break;
      case "XZY":
        this._x = d * h * u - c * p * g, this._y = c * p * u - d * h * g, this._z = c * h * g + d * p * u, this._w = c * h * u + d * p * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return t === true && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], r = t[8], o = t[1], a = t[5], l = t[9], c = t[2], h = t[6], u = t[10], d = n + a + u;
    if (d > 0) {
      const p = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / p, this._x = (h - l) * p, this._y = (r - c) * p, this._z = (o - i) * p;
    } else if (n > a && n > u) {
      const p = 2 * Math.sqrt(1 + n - a - u);
      this._w = (h - l) / p, this._x = 0.25 * p, this._y = (i + o) / p, this._z = (r + c) / p;
    } else if (a > u) {
      const p = 2 * Math.sqrt(1 + a - n - u);
      this._w = (r - c) / p, this._x = (i + o) / p, this._y = 0.25 * p, this._z = (l + h) / p;
    } else {
      const p = 2 * Math.sqrt(1 + u - n - a);
      this._w = (o - i) / p, this._x = (r + c) / p, this._y = (l + h) / p, this._z = 0.25 * p;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Ne(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, r = e._z, o = e._w, a = t._x, l = t._y, c = t._z, h = t._w;
    return this._x = n * h + o * a + i * c - r * l, this._y = i * h + o * l + r * a - n * c, this._z = r * h + o * c + n * l - i * a, this._w = o * h - n * a - i * l - r * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, i = this._y, r = this._z, o = this._w;
    let a = o * e._w + n * e._x + i * e._y + r * e._z;
    if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1) return this._w = o, this._x = n, this._y = i, this._z = r, this;
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const p = 1 - t;
      return this._w = p * o + t * this._w, this._x = p * n + t * this._x, this._y = p * i + t * this._y, this._z = p * r + t * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, a), u = Math.sin((1 - t) * h) / c, d = Math.sin(t * h) / c;
    return this._w = o * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = r * u + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), i = Math.sqrt(1 - n), r = Math.sqrt(n);
    return this.set(i * Math.sin(e), i * Math.cos(e), r * Math.sin(t), r * Math.cos(t));
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class R {
  constructor(e = 0, t = 0, n = 0) {
    R.prototype.isVector3 = true, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(Ha.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Ha.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements, o = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
    return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * o, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * o, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * o, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, r = e.x, o = e.y, a = e.z, l = e.w, c = 2 * (o * i - a * n), h = 2 * (a * t - r * i), u = 2 * (r * n - o * t);
    return this.x = t + l * c + o * u - a * h, this.y = n + l * h + a * c - r * u, this.z = i + l * u + r * h - o * c, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Ne(this.x, e.x, t.x), this.y = Ne(this.y, e.y, t.y), this.z = Ne(this.z, e.z, t.z), this;
  }
  clampScalar(e, t) {
    return this.x = Ne(this.x, e, t), this.y = Ne(this.y, e, t), this.z = Ne(this.z, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ne(n, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, r = e.z, o = t.x, a = t.y, l = t.z;
    return this.x = i * l - r * a, this.y = r * o - n * l, this.z = n * a - i * o, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return br.copy(this).projectOnVector(e), this.sub(br);
  }
  reflect(e) {
    return this.sub(br.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Ne(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const br = new R(), Ha = new an();
class tn {
  constructor(e = new R(1 / 0, 1 / 0, 1 / 0), t = new R(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(jt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(jt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = jt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = false) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = false) {
    e.updateWorldMatrix(false, false);
    const n = e.geometry;
    if (n !== void 0) {
      const r = n.getAttribute("position");
      if (t === true && r !== void 0 && e.isInstancedMesh !== true) for (let o = 0, a = r.count; o < a; o++) e.isMesh === true ? e.getVertexPosition(o, jt) : jt.fromBufferAttribute(r, o), jt.applyMatrix4(e.matrixWorld), this.expandByPoint(jt);
      else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), As.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), As.copy(n.boundingBox)), As.applyMatrix4(e.matrixWorld), this.union(As);
    }
    const i = e.children;
    for (let r = 0, o = i.length; r < o; r++) this.expandByObject(i[r], t);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, jt), jt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return false;
    this.getCenter(qi), ws.subVectors(this.max, qi), oi.subVectors(e.a, qi), ai.subVectors(e.b, qi), li.subVectors(e.c, qi), An.subVectors(ai, oi), wn.subVectors(li, ai), Hn.subVectors(oi, li);
    let t = [0, -An.z, An.y, 0, -wn.z, wn.y, 0, -Hn.z, Hn.y, An.z, 0, -An.x, wn.z, 0, -wn.x, Hn.z, 0, -Hn.x, -An.y, An.x, 0, -wn.y, wn.x, 0, -Hn.y, Hn.x, 0];
    return !Tr(t, oi, ai, li, ws) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Tr(t, oi, ai, li, ws)) ? false : (Rs.crossVectors(An, wn), t = [Rs.x, Rs.y, Rs.z], Tr(t, oi, ai, li, ws));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, jt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(jt).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (fn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), fn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), fn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), fn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), fn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), fn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), fn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), fn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(fn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const fn = [new R(), new R(), new R(), new R(), new R(), new R(), new R(), new R()], jt = new R(), As = new tn(), oi = new R(), ai = new R(), li = new R(), An = new R(), wn = new R(), Hn = new R(), qi = new R(), ws = new R(), Rs = new R(), Gn = new R();
function Tr(s, e, t, n, i) {
  for (let r = 0, o = s.length - 3; r <= o; r += 3) {
    Gn.fromArray(s, r);
    const a = i.x * Math.abs(Gn.x) + i.y * Math.abs(Gn.y) + i.z * Math.abs(Gn.z), l = e.dot(Gn), c = t.dot(Gn), h = n.dot(Gn);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > a) return false;
  }
  return true;
}
const _u = new tn(), ji = new R(), Ar = new R();
class cn {
  constructor(e = new R(), t = -1) {
    this.isSphere = true, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : _u.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let r = 0, o = e.length; r < o; r++) i = Math.max(i, n.distanceToSquared(e[r]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
    ji.subVectors(e, this.center);
    const t = ji.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(ji, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === true ? this.radius = Math.max(this.radius, e.radius) : (Ar.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(ji.copy(e.center).add(Ar)), this.expandByPoint(ji.copy(e.center).sub(Ar))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const pn = new R(), wr = new R(), Cs = new R(), Rn = new R(), Rr = new R(), Ps = new R(), Cr = new R();
class Vi {
  constructor(e = new R(), t = new R(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, pn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = pn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (pn.copy(this.origin).addScaledVector(this.direction, t), pn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    wr.copy(e).add(t).multiplyScalar(0.5), Cs.copy(t).sub(e).normalize(), Rn.copy(this.origin).sub(wr);
    const r = e.distanceTo(t) * 0.5, o = -this.direction.dot(Cs), a = Rn.dot(this.direction), l = -Rn.dot(Cs), c = Rn.lengthSq(), h = Math.abs(1 - o * o);
    let u, d, p, g;
    if (h > 0) if (u = o * l - a, d = o * a - l, g = r * h, u >= 0) if (d >= -g) if (d <= g) {
      const _ = 1 / h;
      u *= _, d *= _, p = u * (u + o * d + 2 * a) + d * (o * u + d + 2 * l) + c;
    } else d = r, u = Math.max(0, -(o * d + a)), p = -u * u + d * (d + 2 * l) + c;
    else d = -r, u = Math.max(0, -(o * d + a)), p = -u * u + d * (d + 2 * l) + c;
    else d <= -g ? (u = Math.max(0, -(-o * r + a)), d = u > 0 ? -r : Math.min(Math.max(-r, -l), r), p = -u * u + d * (d + 2 * l) + c) : d <= g ? (u = 0, d = Math.min(Math.max(-r, -l), r), p = d * (d + 2 * l) + c) : (u = Math.max(0, -(o * r + a)), d = u > 0 ? r : Math.min(Math.max(-r, -l), r), p = -u * u + d * (d + 2 * l) + c);
    else d = o > 0 ? -r : r, u = Math.max(0, -(o * d + a)), p = -u * u + d * (d + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(wr).addScaledVector(Cs, d), p;
  }
  intersectSphere(e, t) {
    pn.subVectors(e.center, this.origin);
    const n = pn.dot(this.direction), i = pn.dot(pn) - n * n, r = e.radius * e.radius;
    if (i > r) return null;
    const o = Math.sqrt(r - i), a = n - o, l = n + o;
    return l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, r, o, a, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return c >= 0 ? (n = (e.min.x - d.x) * c, i = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, i = (e.min.x - d.x) * c), h >= 0 ? (r = (e.min.y - d.y) * h, o = (e.max.y - d.y) * h) : (r = (e.max.y - d.y) * h, o = (e.min.y - d.y) * h), n > o || r > i || ((r > n || isNaN(n)) && (n = r), (o < i || isNaN(i)) && (i = o), u >= 0 ? (a = (e.min.z - d.z) * u, l = (e.max.z - d.z) * u) : (a = (e.max.z - d.z) * u, l = (e.min.z - d.z) * u), n > l || a > i) || ((a > n || n !== n) && (n = a), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, pn) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    Rr.subVectors(t, e), Ps.subVectors(n, e), Cr.crossVectors(Rr, Ps);
    let o = this.direction.dot(Cr), a;
    if (o > 0) {
      if (i) return null;
      a = 1;
    } else if (o < 0) a = -1, o = -o;
    else return null;
    Rn.subVectors(this.origin, e);
    const l = a * this.direction.dot(Ps.crossVectors(Rn, Ps));
    if (l < 0) return null;
    const c = a * this.direction.dot(Rr.cross(Rn));
    if (c < 0 || l + c > o) return null;
    const h = -a * Rn.dot(Cr);
    return h < 0 ? null : this.at(h / o, r);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Pe {
  constructor(e, t, n, i, r, o, a, l, c, h, u, d, p, g, _, m) {
    Pe.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, i, r, o, a, l, c, h, u, d, p, g, _, m);
  }
  set(e, t, n, i, r, o, a, l, c, h, u, d, p, g, _, m) {
    const f = this.elements;
    return f[0] = e, f[4] = t, f[8] = n, f[12] = i, f[1] = r, f[5] = o, f[9] = a, f[13] = l, f[2] = c, f[6] = h, f[10] = u, f[14] = d, f[3] = p, f[7] = g, f[11] = _, f[15] = m, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Pe().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / ci.setFromMatrixColumn(e, 0).length(), r = 1 / ci.setFromMatrixColumn(e, 1).length(), o = 1 / ci.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z, o = Math.cos(n), a = Math.sin(n), l = Math.cos(i), c = Math.sin(i), h = Math.cos(r), u = Math.sin(r);
    if (e.order === "XYZ") {
      const d = o * h, p = o * u, g = a * h, _ = a * u;
      t[0] = l * h, t[4] = -l * u, t[8] = c, t[1] = p + g * c, t[5] = d - _ * c, t[9] = -a * l, t[2] = _ - d * c, t[6] = g + p * c, t[10] = o * l;
    } else if (e.order === "YXZ") {
      const d = l * h, p = l * u, g = c * h, _ = c * u;
      t[0] = d + _ * a, t[4] = g * a - p, t[8] = o * c, t[1] = o * u, t[5] = o * h, t[9] = -a, t[2] = p * a - g, t[6] = _ + d * a, t[10] = o * l;
    } else if (e.order === "ZXY") {
      const d = l * h, p = l * u, g = c * h, _ = c * u;
      t[0] = d - _ * a, t[4] = -o * u, t[8] = g + p * a, t[1] = p + g * a, t[5] = o * h, t[9] = _ - d * a, t[2] = -o * c, t[6] = a, t[10] = o * l;
    } else if (e.order === "ZYX") {
      const d = o * h, p = o * u, g = a * h, _ = a * u;
      t[0] = l * h, t[4] = g * c - p, t[8] = d * c + _, t[1] = l * u, t[5] = _ * c + d, t[9] = p * c - g, t[2] = -c, t[6] = a * l, t[10] = o * l;
    } else if (e.order === "YZX") {
      const d = o * l, p = o * c, g = a * l, _ = a * c;
      t[0] = l * h, t[4] = _ - d * u, t[8] = g * u + p, t[1] = u, t[5] = o * h, t[9] = -a * h, t[2] = -c * h, t[6] = p * u + g, t[10] = d - _ * u;
    } else if (e.order === "XZY") {
      const d = o * l, p = o * c, g = a * l, _ = a * c;
      t[0] = l * h, t[4] = -u, t[8] = c * h, t[1] = d * u + _, t[5] = o * h, t[9] = p * u - g, t[2] = g * u - p, t[6] = a * h, t[10] = _ * u + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(xu, e, vu);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return Ft.subVectors(e, t), Ft.lengthSq() === 0 && (Ft.z = 1), Ft.normalize(), Cn.crossVectors(n, Ft), Cn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Ft.x += 1e-4 : Ft.z += 1e-4, Ft.normalize(), Cn.crossVectors(n, Ft)), Cn.normalize(), Ls.crossVectors(Ft, Cn), i[0] = Cn.x, i[4] = Ls.x, i[8] = Ft.x, i[1] = Cn.y, i[5] = Ls.y, i[9] = Ft.y, i[2] = Cn.z, i[6] = Ls.z, i[10] = Ft.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, o = n[0], a = n[4], l = n[8], c = n[12], h = n[1], u = n[5], d = n[9], p = n[13], g = n[2], _ = n[6], m = n[10], f = n[14], b = n[3], T = n[7], M = n[11], L = n[15], C = i[0], A = i[4], N = i[8], S = i[12], y = i[1], P = i[5], G = i[9], z = i[13], j = i[2], $ = i[6], X = i[10], Z = i[14], V = i[3], se = i[7], he = i[11], xe = i[15];
    return r[0] = o * C + a * y + l * j + c * V, r[4] = o * A + a * P + l * $ + c * se, r[8] = o * N + a * G + l * X + c * he, r[12] = o * S + a * z + l * Z + c * xe, r[1] = h * C + u * y + d * j + p * V, r[5] = h * A + u * P + d * $ + p * se, r[9] = h * N + u * G + d * X + p * he, r[13] = h * S + u * z + d * Z + p * xe, r[2] = g * C + _ * y + m * j + f * V, r[6] = g * A + _ * P + m * $ + f * se, r[10] = g * N + _ * G + m * X + f * he, r[14] = g * S + _ * z + m * Z + f * xe, r[3] = b * C + T * y + M * j + L * V, r[7] = b * A + T * P + M * $ + L * se, r[11] = b * N + T * G + M * X + L * he, r[15] = b * S + T * z + M * Z + L * xe, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], r = e[12], o = e[1], a = e[5], l = e[9], c = e[13], h = e[2], u = e[6], d = e[10], p = e[14], g = e[3], _ = e[7], m = e[11], f = e[15];
    return g * (+r * l * u - i * c * u - r * a * d + n * c * d + i * a * p - n * l * p) + _ * (+t * l * p - t * c * d + r * o * d - i * o * p + i * c * h - r * l * h) + m * (+t * c * u - t * a * p - r * o * u + n * o * p + r * a * h - n * c * h) + f * (-i * a * h - t * l * u + t * a * d + i * o * u - n * o * d + n * l * h);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8], u = e[9], d = e[10], p = e[11], g = e[12], _ = e[13], m = e[14], f = e[15], b = u * m * c - _ * d * c + _ * l * p - a * m * p - u * l * f + a * d * f, T = g * d * c - h * m * c - g * l * p + o * m * p + h * l * f - o * d * f, M = h * _ * c - g * u * c + g * a * p - o * _ * p - h * a * f + o * u * f, L = g * u * l - h * _ * l - g * a * d + o * _ * d + h * a * m - o * u * m, C = t * b + n * T + i * M + r * L;
    if (C === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const A = 1 / C;
    return e[0] = b * A, e[1] = (_ * d * r - u * m * r - _ * i * p + n * m * p + u * i * f - n * d * f) * A, e[2] = (a * m * r - _ * l * r + _ * i * c - n * m * c - a * i * f + n * l * f) * A, e[3] = (u * l * r - a * d * r - u * i * c + n * d * c + a * i * p - n * l * p) * A, e[4] = T * A, e[5] = (h * m * r - g * d * r + g * i * p - t * m * p - h * i * f + t * d * f) * A, e[6] = (g * l * r - o * m * r - g * i * c + t * m * c + o * i * f - t * l * f) * A, e[7] = (o * d * r - h * l * r + h * i * c - t * d * c - o * i * p + t * l * p) * A, e[8] = M * A, e[9] = (g * u * r - h * _ * r - g * n * p + t * _ * p + h * n * f - t * u * f) * A, e[10] = (o * _ * r - g * a * r + g * n * c - t * _ * c - o * n * f + t * a * f) * A, e[11] = (h * a * r - o * u * r - h * n * c + t * u * c + o * n * p - t * a * p) * A, e[12] = L * A, e[13] = (h * _ * i - g * u * i + g * n * d - t * _ * d - h * n * m + t * u * m) * A, e[14] = (g * a * i - o * _ * i - g * n * l + t * _ * l + o * n * m - t * a * m) * A, e[15] = (o * u * i - h * a * i + h * n * l - t * u * l - o * n * d + t * a * d) * A, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= r, t[1] *= n, t[5] *= i, t[9] *= r, t[2] *= n, t[6] *= i, t[10] *= r, t[3] *= n, t[7] *= i, t[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), r = 1 - n, o = e.x, a = e.y, l = e.z, c = r * o, h = r * a;
    return this.set(c * o + n, c * a - i * l, c * l + i * a, 0, c * a + i * l, h * a + n, h * l - i * o, 0, c * l - i * a, h * l + i * o, r * l * l + n, 0, 0, 0, 0, 1), this;
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, i, r, o) {
    return this.set(1, n, r, 0, e, 1, o, 0, t, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const i = this.elements, r = t._x, o = t._y, a = t._z, l = t._w, c = r + r, h = o + o, u = a + a, d = r * c, p = r * h, g = r * u, _ = o * h, m = o * u, f = a * u, b = l * c, T = l * h, M = l * u, L = n.x, C = n.y, A = n.z;
    return i[0] = (1 - (_ + f)) * L, i[1] = (p + M) * L, i[2] = (g - T) * L, i[3] = 0, i[4] = (p - M) * C, i[5] = (1 - (d + f)) * C, i[6] = (m + b) * C, i[7] = 0, i[8] = (g + T) * A, i[9] = (m - b) * A, i[10] = (1 - (d + _)) * A, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = ci.set(i[0], i[1], i[2]).length();
    const o = ci.set(i[4], i[5], i[6]).length(), a = ci.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], $t.copy(this);
    const c = 1 / r, h = 1 / o, u = 1 / a;
    return $t.elements[0] *= c, $t.elements[1] *= c, $t.elements[2] *= c, $t.elements[4] *= h, $t.elements[5] *= h, $t.elements[6] *= h, $t.elements[8] *= u, $t.elements[9] *= u, $t.elements[10] *= u, t.setFromRotationMatrix($t), n.x = r, n.y = o, n.z = a, this;
  }
  makePerspective(e, t, n, i, r, o, a = Sn) {
    const l = this.elements, c = 2 * r / (t - e), h = 2 * r / (n - i), u = (t + e) / (t - e), d = (n + i) / (n - i);
    let p, g;
    if (a === Sn) p = -(o + r) / (o - r), g = -2 * o * r / (o - r);
    else if (a === dr) p = -o / (o - r), g = -o * r / (o - r);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return l[0] = c, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = h, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = p, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, r, o, a = Sn) {
    const l = this.elements, c = 1 / (t - e), h = 1 / (n - i), u = 1 / (o - r), d = (t + e) * c, p = (n + i) * h;
    let g, _;
    if (a === Sn) g = (o + r) * u, _ = -2 * u;
    else if (a === dr) g = r * u, _ = -1 * u;
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -d, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[13] = -p, l[2] = 0, l[6] = 0, l[10] = _, l[14] = -g, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++) if (t[i] !== n[i]) return false;
    return true;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const ci = new R(), $t = new Pe(), xu = new R(0, 0, 0), vu = new R(1, 1, 1), Cn = new R(), Ls = new R(), Ft = new R(), Ga = new Pe(), Wa = new an();
class ln {
  constructor(e = 0, t = 0, n = 0, i = ln.DEFAULT_ORDER) {
    this.isEuler = true, this._x = e, this._y = t, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = true) {
    const i = e.elements, r = i[0], o = i[4], a = i[8], l = i[1], c = i[5], h = i[9], u = i[2], d = i[6], p = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Ne(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-h, p), this._z = Math.atan2(-o, r)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Ne(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(a, p), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Ne(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, p), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-Ne(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-o, c));
        break;
      case "YZX":
        this._z = Math.asin(Ne(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(a, p));
        break;
      case "XZY":
        this._z = Math.asin(-Ne(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-h, p), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Ga.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ga, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Wa.setFromEuler(this), this.setFromQuaternion(Wa, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
ln.DEFAULT_ORDER = "XYZ";
class ca {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let Mu = 0;
const Xa = new R(), hi = new an(), mn = new Pe(), Ds = new R(), $i = new R(), yu = new R(), Su = new an(), Ya = new R(1, 0, 0), qa = new R(0, 1, 0), ja = new R(0, 0, 1), $a = { type: "added" }, Eu = { type: "removed" }, ui = { type: "childadded", child: null }, Pr = { type: "childremoved", child: null };
class rt extends ni {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: Mu++ }), this.uuid = Qt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = rt.DEFAULT_UP.clone();
    const e = new R(), t = new ln(), n = new an(), i = new R(1, 1, 1);
    function r() {
      n.setFromEuler(t, false);
    }
    function o() {
      t.setFromQuaternion(n, void 0, false);
    }
    t._onChange(r), n._onChange(o), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: e }, rotation: { configurable: true, enumerable: true, value: t }, quaternion: { configurable: true, enumerable: true, value: n }, scale: { configurable: true, enumerable: true, value: i }, modelViewMatrix: { value: new Pe() }, normalMatrix: { value: new De() } }), this.matrix = new Pe(), this.matrixWorld = new Pe(), this.matrixAutoUpdate = rt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new ca(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, true);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return hi.setFromAxisAngle(e, t), this.quaternion.multiply(hi), this;
  }
  rotateOnWorldAxis(e, t) {
    return hi.setFromAxisAngle(e, t), this.quaternion.premultiply(hi), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Ya, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(qa, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(ja, e);
  }
  translateOnAxis(e, t) {
    return Xa.copy(e).applyQuaternion(this.quaternion), this.position.add(Xa.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Ya, e);
  }
  translateY(e) {
    return this.translateOnAxis(qa, e);
  }
  translateZ(e) {
    return this.translateOnAxis(ja, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(mn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Ds.copy(e) : Ds.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(true, false), $i.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? mn.lookAt($i, Ds, this.up) : mn.lookAt(Ds, $i, this.up), this.quaternion.setFromRotationMatrix(mn), i && (mn.extractRotation(i.matrixWorld), hi.setFromRotationMatrix(mn), this.quaternion.premultiply(hi.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent($a), ui.child = e, this.dispatchEvent(ui), ui.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Eu), Pr.child = e, this.dispatchEvent(Pr), Pr.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(true, false), mn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(true, false), mn.multiply(e.parent.matrixWorld)), e.applyMatrix4(mn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(false, true), e.dispatchEvent($a), ui.child = e, this.dispatchEvent(ui), ui.child = null, this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0) return o;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const i = this.children;
    for (let r = 0, o = i.length; r < o; r++) i[r].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(true, false), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose($i, e, yu), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose($i, Su, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(true, false);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === false) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, e = true);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === true && n !== null && n.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === true) {
      const i = this.children;
      for (let r = 0, o = i.length; r < o; r++) i[r].updateWorldMatrix(false, true);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.6, type: "Object", generator: "Object3D.toJSON" });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === true && (i.castShadow = true), this.receiveShadow === true && (i.receiveShadow = true), this.visible === false && (i.visible = false), this.frustumCulled === false && (i.frustumCulled = false), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === false && (i.matrixAutoUpdate = false), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map((a) => ({ boxInitialized: a.boxInitialized, boxMin: a.box.min.toArray(), boxMax: a.box.max.toArray(), sphereInitialized: a.sphereInitialized, sphereRadius: a.sphere.radius, sphereCenter: a.sphere.center.toArray() })), i.maxInstanceCount = this._maxInstanceCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(e), this._colorsTexture !== null && (i.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (i.boundingSphere = { center: i.boundingSphere.center.toArray(), radius: i.boundingSphere.radius }), this.boundingBox !== null && (i.boundingBox = { min: i.boundingBox.min.toArray(), max: i.boundingBox.max.toArray() }));
    function r(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l)) for (let c = 0, h = l.length; c < h; c++) {
          const u = l[c];
          r(e.shapes, u);
        }
        else r(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const a = [];
      for (let l = 0, c = this.material.length; l < c; l++) a.push(r(e.materials, this.material[l]));
      i.material = a;
    } else i.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let a = 0; a < this.children.length; a++) i.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const l = this.animations[a];
        i.animations.push(r(e.animations, l));
      }
    }
    if (t) {
      const a = o(e.geometries), l = o(e.materials), c = o(e.textures), h = o(e.images), u = o(e.shapes), d = o(e.skeletons), p = o(e.animations), g = o(e.nodes);
      a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), p.length > 0 && (n.animations = p), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function o(a) {
      const l = [];
      for (const c in a) {
        const h = a[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = true) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === true) for (let n = 0; n < e.children.length; n++) {
      const i = e.children[n];
      this.add(i.clone());
    }
    return this;
  }
}
rt.DEFAULT_UP = new R(0, 1, 0);
rt.DEFAULT_MATRIX_AUTO_UPDATE = true;
rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
const Kt = new R(), gn = new R(), Lr = new R(), _n = new R(), di = new R(), fi = new R(), Ka = new R(), Dr = new R(), Ir = new R(), Ur = new R(), Nr = new qe(), Fr = new qe(), Or = new qe();
class Wt {
  constructor(e = new R(), t = new R(), n = new R()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Kt.subVectors(e, t), i.cross(Kt);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, r) {
    Kt.subVectors(i, t), gn.subVectors(n, t), Lr.subVectors(e, t);
    const o = Kt.dot(Kt), a = Kt.dot(gn), l = Kt.dot(Lr), c = gn.dot(gn), h = gn.dot(Lr), u = o * c - a * a;
    if (u === 0) return r.set(0, 0, 0), null;
    const d = 1 / u, p = (c * l - a * h) * d, g = (o * h - a * l) * d;
    return r.set(1 - p - g, g, p);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, _n) === null ? false : _n.x >= 0 && _n.y >= 0 && _n.x + _n.y <= 1;
  }
  static getInterpolation(e, t, n, i, r, o, a, l) {
    return this.getBarycoord(e, t, n, i, _n) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, _n.x), l.addScaledVector(o, _n.y), l.addScaledVector(a, _n.z), l);
  }
  static getInterpolatedAttribute(e, t, n, i, r, o) {
    return Nr.setScalar(0), Fr.setScalar(0), Or.setScalar(0), Nr.fromBufferAttribute(e, t), Fr.fromBufferAttribute(e, n), Or.fromBufferAttribute(e, i), o.setScalar(0), o.addScaledVector(Nr, r.x), o.addScaledVector(Fr, r.y), o.addScaledVector(Or, r.z), o;
  }
  static isFrontFacing(e, t, n, i) {
    return Kt.subVectors(n, t), gn.subVectors(e, t), Kt.cross(gn).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Kt.subVectors(this.c, this.b), gn.subVectors(this.a, this.b), Kt.cross(gn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Wt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Wt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, i, r) {
    return Wt.getInterpolation(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return Wt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Wt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, r = this.c;
    let o, a;
    di.subVectors(i, n), fi.subVectors(r, n), Dr.subVectors(e, n);
    const l = di.dot(Dr), c = fi.dot(Dr);
    if (l <= 0 && c <= 0) return t.copy(n);
    Ir.subVectors(e, i);
    const h = di.dot(Ir), u = fi.dot(Ir);
    if (h >= 0 && u <= h) return t.copy(i);
    const d = l * u - h * c;
    if (d <= 0 && l >= 0 && h <= 0) return o = l / (l - h), t.copy(n).addScaledVector(di, o);
    Ur.subVectors(e, r);
    const p = di.dot(Ur), g = fi.dot(Ur);
    if (g >= 0 && p <= g) return t.copy(r);
    const _ = p * c - l * g;
    if (_ <= 0 && c >= 0 && g <= 0) return a = c / (c - g), t.copy(n).addScaledVector(fi, a);
    const m = h * g - p * u;
    if (m <= 0 && u - h >= 0 && p - g >= 0) return Ka.subVectors(r, i), a = (u - h) / (u - h + (p - g)), t.copy(i).addScaledVector(Ka, a);
    const f = 1 / (m + _ + d);
    return o = _ * f, a = d * f, t.copy(n).addScaledVector(di, o).addScaledVector(fi, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Ec = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, Pn = { h: 0, s: 0, l: 0 }, Is = { h: 0, s: 0, l: 0 };
function Br(s, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? s + (e - s) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? s + (e - s) * 6 * (2 / 3 - t) : s;
}
class Ee {
  constructor(e, t, n) {
    return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const i = e;
      i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Mt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, He.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = He.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, He.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = He.workingColorSpace) {
    if (e = aa(e, 1), t = Ne(t, 0, 1), n = Ne(n, 0, 1), t === 0) this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r;
      this.r = Br(o, r, e + 1 / 3), this.g = Br(o, r, e), this.b = Br(o, r, e - 1 / 3);
    }
    return He.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Mt) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let r;
      const o = i[1], a = i[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, t);
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, t);
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, t);
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = i[1], o = r.length;
      if (o === 3) return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, t);
      if (o === 6) return this.setHex(parseInt(r, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Mt) {
    const n = Ec[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = En(e.r), this.g = En(e.g), this.b = En(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Ri(e.r), this.g = Ri(e.g), this.b = Ri(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Mt) {
    return He.fromWorkingColorSpace(Et.copy(this), e), Math.round(Ne(Et.r * 255, 0, 255)) * 65536 + Math.round(Ne(Et.g * 255, 0, 255)) * 256 + Math.round(Ne(Et.b * 255, 0, 255));
  }
  getHexString(e = Mt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = He.workingColorSpace) {
    He.fromWorkingColorSpace(Et.copy(this), t);
    const n = Et.r, i = Et.g, r = Et.b, o = Math.max(n, i, r), a = Math.min(n, i, r);
    let l, c;
    const h = (a + o) / 2;
    if (a === o) l = 0, c = 0;
    else {
      const u = o - a;
      switch (c = h <= 0.5 ? u / (o + a) : u / (2 - o - a), o) {
        case n:
          l = (i - r) / u + (i < r ? 6 : 0);
          break;
        case i:
          l = (r - n) / u + 2;
          break;
        case r:
          l = (n - i) / u + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = h, e;
  }
  getRGB(e, t = He.workingColorSpace) {
    return He.fromWorkingColorSpace(Et.copy(this), t), e.r = Et.r, e.g = Et.g, e.b = Et.b, e;
  }
  getStyle(e = Mt) {
    He.fromWorkingColorSpace(Et.copy(this), e);
    const t = Et.r, n = Et.g, i = Et.b;
    return e !== Mt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Pn), this.setHSL(Pn.h + e, Pn.s + t, Pn.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(Pn), e.getHSL(Is);
    const n = ls(Pn.h, Is.h, t), i = ls(Pn.s, Is.s, t), r = ls(Pn.l, Is.l, t);
    return this.setHSL(n, i, r), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, i = this.b, r = e.elements;
    return this.r = r[0] * t + r[3] * n + r[6] * i, this.g = r[1] * t + r[4] * n + r[7] * i, this.b = r[2] * t + r[5] * n + r[8] * i, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Et = new Ee();
Ee.NAMES = Ec;
let bu = 0;
class en extends ni {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: bu++ }), this.uuid = Qt(), this.name = "", this.type = "Material", this.blending = Ai, this.side = bn, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = oo, this.blendDst = ao, this.blendEquation = Zn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Ee(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Pi, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = Fa, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = si, this.stencilZFail = si, this.stencilZPass = si, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0) for (const t in e) {
      const n = e[t];
      if (n === void 0) {
        console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
        continue;
      }
      const i = this[t];
      if (i === void 0) {
        console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
        continue;
      }
      i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = { metadata: { version: 4.6, type: "Material", generator: "Material.toJSON" } };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Ai && (n.blending = this.blending), this.side !== bn && (n.side = this.side), this.vertexColors === true && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === true && (n.transparent = true), this.blendSrc !== oo && (n.blendSrc = this.blendSrc), this.blendDst !== ao && (n.blendDst = this.blendDst), this.blendEquation !== Zn && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== Pi && (n.depthFunc = this.depthFunc), this.depthTest === false && (n.depthTest = this.depthTest), this.depthWrite === false && (n.depthWrite = this.depthWrite), this.colorWrite === false && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Fa && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== si && (n.stencilFail = this.stencilFail), this.stencilZFail !== si && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== si && (n.stencilZPass = this.stencilZPass), this.stencilWrite === true && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === true && (n.polygonOffset = true), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === true && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === true && (n.alphaHash = true), this.alphaToCoverage === true && (n.alphaToCoverage = true), this.premultipliedAlpha === true && (n.premultipliedAlpha = true), this.forceSinglePass === true && (n.forceSinglePass = true), this.wireframe === true && (n.wireframe = true), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (n.flatShading = true), this.visible === false && (n.visible = false), this.toneMapped === false && (n.toneMapped = false), this.fog === false && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(r) {
      const o = [];
      for (const a in r) {
        const l = r[a];
        delete l.metadata, o.push(l);
      }
      return o;
    }
    if (t) {
      const r = i(e.textures), o = i(e.images);
      r.length > 0 && (n.textures = r), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r) n[r] = t[r].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class rn extends en {
  constructor(e) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new Ee(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new ln(), this.combine = rc, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const ut = new R(), Us = new Me();
let Tu = 0;
class Pt {
  constructor(e, t, n = false) {
    if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, Object.defineProperty(this, "id", { value: Tu++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Xo, this.updateRanges = [], this.gpuType = Jt, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, r = this.itemSize; i < r; i++) this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) Us.fromBufferAttribute(this, t), Us.applyMatrix3(e), this.setXY(t, Us.x, Us.y);
    else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) ut.fromBufferAttribute(this, t), ut.applyMatrix3(e), this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++) ut.fromBufferAttribute(this, t), ut.applyMatrix4(e), this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++) ut.fromBufferAttribute(this, t), ut.applyNormalMatrix(e), this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++) ut.fromBufferAttribute(this, t), ut.transformDirection(e), this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = Zt(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = Ze(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Zt(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Ze(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Zt(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Ze(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Zt(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Ze(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Zt(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Ze(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Ze(t, this.array), n = Ze(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = Ze(t, this.array), n = Ze(n, this.array), i = Ze(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e *= this.itemSize, this.normalized && (t = Ze(t, this.array), n = Ze(n, this.array), i = Ze(i, this.array), r = Ze(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (e.name = this.name), this.usage !== Xo && (e.usage = this.usage), e;
  }
}
class bc extends Pt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Tc extends Pt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Tt extends Pt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Au = 0;
const Ht = new Pe(), zr = new rt(), pi = new R(), Ot = new tn(), Ki = new tn(), _t = new R();
class xt extends ni {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: Au++ }), this.uuid = Qt(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (yc(e) ? Tc : bc)(e, 1) : this.index = e, this;
  }
  setIndirect(e) {
    return this.indirect = e, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = true);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new De().getNormalMatrix(e);
      n.applyNormalMatrix(r), n.needsUpdate = true;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Ht.makeRotationFromQuaternion(e), this.applyMatrix4(Ht), this;
  }
  rotateX(e) {
    return Ht.makeRotationX(e), this.applyMatrix4(Ht), this;
  }
  rotateY(e) {
    return Ht.makeRotationY(e), this.applyMatrix4(Ht), this;
  }
  rotateZ(e) {
    return Ht.makeRotationZ(e), this.applyMatrix4(Ht), this;
  }
  translate(e, t, n) {
    return Ht.makeTranslation(e, t, n), this.applyMatrix4(Ht), this;
  }
  scale(e, t, n) {
    return Ht.makeScale(e, t, n), this.applyMatrix4(Ht), this;
  }
  lookAt(e) {
    return zr.lookAt(e), zr.updateMatrix(), this.applyMatrix4(zr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(pi).negate(), this.translate(pi.x, pi.y, pi.z), this;
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let i = 0, r = e.length; i < r; i++) {
        const o = e[i];
        n.push(o.x, o.y, o.z || 0);
      }
      this.setAttribute("position", new Tt(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let i = 0; i < n; i++) {
        const r = e[i];
        t.setXYZ(i, r.x, r.y, r.z || 0);
      }
      e.length > t.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = true;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new tn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new R(-1 / 0, -1 / 0, -1 / 0), new R(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t) for (let n = 0, i = t.length; n < i; n++) {
        const r = t[n];
        Ot.setFromBufferAttribute(r), this.morphTargetsRelative ? (_t.addVectors(this.boundingBox.min, Ot.min), this.boundingBox.expandByPoint(_t), _t.addVectors(this.boundingBox.max, Ot.max), this.boundingBox.expandByPoint(_t)) : (this.boundingBox.expandByPoint(Ot.min), this.boundingBox.expandByPoint(Ot.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new cn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new R(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Ot.setFromBufferAttribute(e), t) for (let r = 0, o = t.length; r < o; r++) {
        const a = t[r];
        Ki.setFromBufferAttribute(a), this.morphTargetsRelative ? (_t.addVectors(Ot.min, Ki.min), Ot.expandByPoint(_t), _t.addVectors(Ot.max, Ki.max), Ot.expandByPoint(_t)) : (Ot.expandByPoint(Ki.min), Ot.expandByPoint(Ki.max));
      }
      Ot.getCenter(n);
      let i = 0;
      for (let r = 0, o = e.count; r < o; r++) _t.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared(_t));
      if (t) for (let r = 0, o = t.length; r < o; r++) {
        const a = t[r], l = this.morphTargetsRelative;
        for (let c = 0, h = a.count; c < h; c++) _t.fromBufferAttribute(a, c), l && (pi.fromBufferAttribute(e, c), _t.add(pi)), i = Math.max(i, n.distanceToSquared(_t));
      }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, i = t.normal, r = t.uv;
    this.hasAttribute("tangent") === false && this.setAttribute("tangent", new Pt(new Float32Array(4 * n.count), 4));
    const o = this.getAttribute("tangent"), a = [], l = [];
    for (let N = 0; N < n.count; N++) a[N] = new R(), l[N] = new R();
    const c = new R(), h = new R(), u = new R(), d = new Me(), p = new Me(), g = new Me(), _ = new R(), m = new R();
    function f(N, S, y) {
      c.fromBufferAttribute(n, N), h.fromBufferAttribute(n, S), u.fromBufferAttribute(n, y), d.fromBufferAttribute(r, N), p.fromBufferAttribute(r, S), g.fromBufferAttribute(r, y), h.sub(c), u.sub(c), p.sub(d), g.sub(d);
      const P = 1 / (p.x * g.y - g.x * p.y);
      isFinite(P) && (_.copy(h).multiplyScalar(g.y).addScaledVector(u, -p.y).multiplyScalar(P), m.copy(u).multiplyScalar(p.x).addScaledVector(h, -g.x).multiplyScalar(P), a[N].add(_), a[S].add(_), a[y].add(_), l[N].add(m), l[S].add(m), l[y].add(m));
    }
    let b = this.groups;
    b.length === 0 && (b = [{ start: 0, count: e.count }]);
    for (let N = 0, S = b.length; N < S; ++N) {
      const y = b[N], P = y.start, G = y.count;
      for (let z = P, j = P + G; z < j; z += 3) f(e.getX(z + 0), e.getX(z + 1), e.getX(z + 2));
    }
    const T = new R(), M = new R(), L = new R(), C = new R();
    function A(N) {
      L.fromBufferAttribute(i, N), C.copy(L);
      const S = a[N];
      T.copy(S), T.sub(L.multiplyScalar(L.dot(S))).normalize(), M.crossVectors(C, S);
      const P = M.dot(l[N]) < 0 ? -1 : 1;
      o.setXYZW(N, T.x, T.y, T.z, P);
    }
    for (let N = 0, S = b.length; N < S; ++N) {
      const y = b[N], P = y.start, G = y.count;
      for (let z = P, j = P + G; z < j; z += 3) A(e.getX(z + 0)), A(e.getX(z + 1)), A(e.getX(z + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0) n = new Pt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else for (let d = 0, p = n.count; d < p; d++) n.setXYZ(d, 0, 0, 0);
      const i = new R(), r = new R(), o = new R(), a = new R(), l = new R(), c = new R(), h = new R(), u = new R();
      if (e) for (let d = 0, p = e.count; d < p; d += 3) {
        const g = e.getX(d + 0), _ = e.getX(d + 1), m = e.getX(d + 2);
        i.fromBufferAttribute(t, g), r.fromBufferAttribute(t, _), o.fromBufferAttribute(t, m), h.subVectors(o, r), u.subVectors(i, r), h.cross(u), a.fromBufferAttribute(n, g), l.fromBufferAttribute(n, _), c.fromBufferAttribute(n, m), a.add(h), l.add(h), c.add(h), n.setXYZ(g, a.x, a.y, a.z), n.setXYZ(_, l.x, l.y, l.z), n.setXYZ(m, c.x, c.y, c.z);
      }
      else for (let d = 0, p = t.count; d < p; d += 3) i.fromBufferAttribute(t, d + 0), r.fromBufferAttribute(t, d + 1), o.fromBufferAttribute(t, d + 2), h.subVectors(o, r), u.subVectors(i, r), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++) _t.fromBufferAttribute(e, t), _t.normalize(), e.setXYZ(t, _t.x, _t.y, _t.z);
  }
  toNonIndexed() {
    function e(a, l) {
      const c = a.array, h = a.itemSize, u = a.normalized, d = new c.constructor(l.length * h);
      let p = 0, g = 0;
      for (let _ = 0, m = l.length; _ < m; _++) {
        a.isInterleavedBufferAttribute ? p = l[_] * a.data.stride + a.offset : p = l[_] * h;
        for (let f = 0; f < h; f++) d[g++] = c[p++];
      }
      return new Pt(d, h, u);
    }
    if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new xt(), n = this.index.array, i = this.attributes;
    for (const a in i) {
      const l = i[a], c = e(l, n);
      t.setAttribute(a, c);
    }
    const r = this.morphAttributes;
    for (const a in r) {
      const l = [], c = r[a];
      for (let h = 0, u = c.length; h < u; h++) {
        const d = c[h], p = e(d, n);
        l.push(p);
      }
      t.morphAttributes[a] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, l = o.length; a < l; a++) {
      const c = o[a];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = { metadata: { version: 4.6, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const i = {};
    let r = false;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let u = 0, d = c.length; u < d; u++) {
        const p = c[u];
        h.push(p.toJSON(e.data));
      }
      h.length > 0 && (i[l] = h, r = true);
    }
    r && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (e.data.boundingSphere = { center: a.center.toArray(), radius: a.radius }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const c in i) {
      const h = i[c];
      this.setAttribute(c, h.clone(t));
    }
    const r = e.morphAttributes;
    for (const c in r) {
      const h = [], u = r[c];
      for (let d = 0, p = u.length; d < p; d++) h.push(u[d].clone(t));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, h = o.length; c < h; c++) {
      const u = o[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Za = new Pe(), Wn = new Vi(), Ns = new cn(), Ja = new R(), Fs = new R(), Os = new R(), Bs = new R(), kr = new R(), zs = new R(), Qa = new R(), ks = new R();
class ft extends rt {
  constructor(e = new xt(), t = new rn()) {
    super(), this.isMesh = true, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = i.length; r < o; r++) {
          const a = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, r = n.morphAttributes.position, o = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const a = this.morphTargetInfluences;
    if (r && a) {
      zs.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const h = a[l], u = r[l];
        h !== 0 && (kr.fromBufferAttribute(u, e), o ? zs.addScaledVector(kr, h) : zs.addScaledVector(kr.sub(t), h));
      }
      t.add(zs);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, r = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Ns.copy(n.boundingSphere), Ns.applyMatrix4(r), Wn.copy(e.ray).recast(e.near), !(Ns.containsPoint(Wn.origin) === false && (Wn.intersectSphere(Ns, Ja) === null || Wn.origin.distanceToSquared(Ja) > (e.far - e.near) ** 2)) && (Za.copy(r).invert(), Wn.copy(e.ray).applyMatrix4(Za), !(n.boundingBox !== null && Wn.intersectsBox(n.boundingBox) === false) && this._computeIntersections(e, t, Wn)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const r = this.geometry, o = this.material, a = r.index, l = r.attributes.position, c = r.attributes.uv, h = r.attributes.uv1, u = r.attributes.normal, d = r.groups, p = r.drawRange;
    if (a !== null) if (Array.isArray(o)) for (let g = 0, _ = d.length; g < _; g++) {
      const m = d[g], f = o[m.materialIndex], b = Math.max(m.start, p.start), T = Math.min(a.count, Math.min(m.start + m.count, p.start + p.count));
      for (let M = b, L = T; M < L; M += 3) {
        const C = a.getX(M), A = a.getX(M + 1), N = a.getX(M + 2);
        i = Vs(this, f, e, n, c, h, u, C, A, N), i && (i.faceIndex = Math.floor(M / 3), i.face.materialIndex = m.materialIndex, t.push(i));
      }
    }
    else {
      const g = Math.max(0, p.start), _ = Math.min(a.count, p.start + p.count);
      for (let m = g, f = _; m < f; m += 3) {
        const b = a.getX(m), T = a.getX(m + 1), M = a.getX(m + 2);
        i = Vs(this, o, e, n, c, h, u, b, T, M), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
      }
    }
    else if (l !== void 0) if (Array.isArray(o)) for (let g = 0, _ = d.length; g < _; g++) {
      const m = d[g], f = o[m.materialIndex], b = Math.max(m.start, p.start), T = Math.min(l.count, Math.min(m.start + m.count, p.start + p.count));
      for (let M = b, L = T; M < L; M += 3) {
        const C = M, A = M + 1, N = M + 2;
        i = Vs(this, f, e, n, c, h, u, C, A, N), i && (i.faceIndex = Math.floor(M / 3), i.face.materialIndex = m.materialIndex, t.push(i));
      }
    }
    else {
      const g = Math.max(0, p.start), _ = Math.min(l.count, p.start + p.count);
      for (let m = g, f = _; m < f; m += 3) {
        const b = m, T = m + 1, M = m + 2;
        i = Vs(this, o, e, n, c, h, u, b, T, M), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
      }
    }
  }
}
function wu(s, e, t, n, i, r, o, a) {
  let l;
  if (e.side === Ut ? l = n.intersectTriangle(o, r, i, true, a) : l = n.intersectTriangle(i, r, o, e.side === bn, a), l === null) return null;
  ks.copy(a), ks.applyMatrix4(s.matrixWorld);
  const c = t.ray.origin.distanceTo(ks);
  return c < t.near || c > t.far ? null : { distance: c, point: ks.clone(), object: s };
}
function Vs(s, e, t, n, i, r, o, a, l, c) {
  s.getVertexPosition(a, Fs), s.getVertexPosition(l, Os), s.getVertexPosition(c, Bs);
  const h = wu(s, e, t, n, Fs, Os, Bs, Qa);
  if (h) {
    const u = new R();
    Wt.getBarycoord(Qa, Fs, Os, Bs, u), i && (h.uv = Wt.getInterpolatedAttribute(i, a, l, c, u, new Me())), r && (h.uv1 = Wt.getInterpolatedAttribute(r, a, l, c, u, new Me())), o && (h.normal = Wt.getInterpolatedAttribute(o, a, l, c, u, new R()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const d = { a, b: l, c, normal: new R(), materialIndex: 0 };
    Wt.getNormal(Fs, Os, Bs, d.normal), h.face = d, h.barycoord = u;
  }
  return h;
}
class vs extends xt {
  constructor(e = 1, t = 1, n = 1, i = 1, r = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: n, widthSegments: i, heightSegments: r, depthSegments: o };
    const a = this;
    i = Math.floor(i), r = Math.floor(r), o = Math.floor(o);
    const l = [], c = [], h = [], u = [];
    let d = 0, p = 0;
    g("z", "y", "x", -1, -1, n, t, e, o, r, 0), g("z", "y", "x", 1, -1, n, t, -e, o, r, 1), g("x", "z", "y", 1, 1, e, n, t, i, o, 2), g("x", "z", "y", 1, -1, e, n, -t, i, o, 3), g("x", "y", "z", 1, -1, e, t, n, i, r, 4), g("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(l), this.setAttribute("position", new Tt(c, 3)), this.setAttribute("normal", new Tt(h, 3)), this.setAttribute("uv", new Tt(u, 2));
    function g(_, m, f, b, T, M, L, C, A, N, S) {
      const y = M / A, P = L / N, G = M / 2, z = L / 2, j = C / 2, $ = A + 1, X = N + 1;
      let Z = 0, V = 0;
      const se = new R();
      for (let he = 0; he < X; he++) {
        const xe = he * P - z;
        for (let Fe = 0; Fe < $; Fe++) {
          const tt = Fe * y - G;
          se[_] = tt * b, se[m] = xe * T, se[f] = j, c.push(se.x, se.y, se.z), se[_] = 0, se[m] = 0, se[f] = C > 0 ? 1 : -1, h.push(se.x, se.y, se.z), u.push(Fe / A), u.push(1 - he / N), Z += 1;
        }
      }
      for (let he = 0; he < N; he++) for (let xe = 0; xe < A; xe++) {
        const Fe = d + xe + $ * he, tt = d + xe + $ * (he + 1), W = d + (xe + 1) + $ * (he + 1), ee = d + (xe + 1) + $ * he;
        l.push(Fe, tt, ee), l.push(tt, W, ee), V += 6;
      }
      a.addGroup(p, V, S), p += V, d += Z;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new vs(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Oi(s) {
  const e = {};
  for (const t in s) {
    e[t] = {};
    for (const n in s[t]) {
      const i = s[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function Rt(s) {
  const e = {};
  for (let t = 0; t < s.length; t++) {
    const n = Oi(s[t]);
    for (const i in n) e[i] = n[i];
  }
  return e;
}
function Ru(s) {
  const e = [];
  for (let t = 0; t < s.length; t++) e.push(s[t].clone());
  return e;
}
function Ac(s) {
  const e = s.getRenderTarget();
  return e === null ? s.outputColorSpace : e.isXRRenderTarget === true ? e.texture.colorSpace : He.workingColorSpace;
}
const Cu = { clone: Oi, merge: Rt };
var Pu = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Lu = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class zn extends en {
  constructor(e) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Pu, this.fragmentShader = Lu, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Oi(e.uniforms), this.uniformsGroups = Ru(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const o = this.uniforms[i].value;
      o && o.isTexture ? t.uniforms[i] = { type: "t", value: o.toJSON(e).uuid } : o && o.isColor ? t.uniforms[i] = { type: "c", value: o.getHex() } : o && o.isVector2 ? t.uniforms[i] = { type: "v2", value: o.toArray() } : o && o.isVector3 ? t.uniforms[i] = { type: "v3", value: o.toArray() } : o && o.isVector4 ? t.uniforms[i] = { type: "v4", value: o.toArray() } : o && o.isMatrix3 ? t.uniforms[i] = { type: "m3", value: o.toArray() } : o && o.isMatrix4 ? t.uniforms[i] = { type: "m4", value: o.toArray() } : t.uniforms[i] = { value: o };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const i in this.extensions) this.extensions[i] === true && (n[i] = true);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class ha extends rt {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new Pe(), this.projectionMatrix = new Pe(), this.projectionMatrixInverse = new Pe(), this.coordinateSystem = Sn;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Ln = new R(), el = new Me(), tl = new Me();
class bt extends ha {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Fi * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(as * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Fi * 2 * Math.atan(Math.tan(as * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    Ln.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(Ln.x, Ln.y).multiplyScalar(-e / Ln.z), Ln.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Ln.x, Ln.y).multiplyScalar(-e / Ln.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, el, tl), t.subVectors(tl, el);
  }
  setViewOffset(e, t, n, i, r, o) {
    this.aspect = e / t, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(as * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -0.5 * i;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth, c = o.fullHeight;
      r += o.offsetX * i / l, t -= o.offsetY * n / c, i *= o.width / l, n *= o.height / c;
    }
    const a = this.filmOffset;
    a !== 0 && (r += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const mi = -90, gi = 1;
class Du extends rt {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new bt(mi, gi, e, t);
    i.layers = this.layers, this.add(i);
    const r = new bt(mi, gi, e, t);
    r.layers = this.layers, this.add(r);
    const o = new bt(mi, gi, e, t);
    o.layers = this.layers, this.add(o);
    const a = new bt(mi, gi, e, t);
    a.layers = this.layers, this.add(a);
    const l = new bt(mi, gi, e, t);
    l.layers = this.layers, this.add(l);
    const c = new bt(mi, gi, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, i, r, o, a, l] = t;
    for (const c of t) this.remove(c);
    if (e === Sn) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === dr) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t) this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [r, o, a, l, c, h] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), p = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = false;
    const _ = n.texture.generateMipmaps;
    n.texture.generateMipmaps = false, e.setRenderTarget(n, 0, i), e.render(t, r), e.setRenderTarget(n, 1, i), e.render(t, o), e.setRenderTarget(n, 2, i), e.render(t, a), e.setRenderTarget(n, 3, i), e.render(t, l), e.setRenderTarget(n, 4, i), e.render(t, c), n.texture.generateMipmaps = _, e.setRenderTarget(n, 5, i), e.render(t, h), e.setRenderTarget(u, d, p), e.xr.enabled = g, n.texture.needsPMREMUpdate = true;
  }
}
class wc extends pt {
  constructor(e, t, n, i, r, o, a, l, c, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : Li, super(e, t, n, i, r, o, a, l, c, h), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Iu extends ti {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = true;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new wc(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : false, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Bt;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = { uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			` }, i = new vs(5, 5, 5), r = new zn({ name: "CubemapFromEquirect", uniforms: Oi(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: Ut, blending: On });
    r.uniforms.tEquirect.value = t;
    const o = new ft(i, r), a = t.minFilter;
    return t.minFilter === yn && (t.minFilter = Bt), new Du(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const r = e.getRenderTarget();
    for (let o = 0; o < 6; o++) e.setRenderTarget(this, o), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
class Qn extends rt {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
}
const Uu = { type: "move" };
class Vr {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Qn(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Qn(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new R(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new R()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Qn(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new R(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new R()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = false), this._grip !== null && (this._grip.visible = false), this._hand !== null && (this._hand.visible = false), this;
  }
  update(e, t, n) {
    let i = null, r = null, o = null;
    const a = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        o = true;
        for (const _ of e.hand.values()) {
          const m = t.getJointPose(_, n), f = this._getHandJoint(c, _);
          m !== null && (f.matrix.fromArray(m.transform.matrix), f.matrix.decompose(f.position, f.rotation, f.scale), f.matrixWorldNeedsUpdate = true, f.jointRadius = m.radius), f.visible = m !== null;
        }
        const h = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], d = h.position.distanceTo(u.position), p = 0.02, g = 5e-3;
        c.inputState.pinching && d > p + g ? (c.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !c.inputState.pinching && d <= p - g && (c.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this }));
      } else l !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = true, r.linearVelocity ? (l.hasLinearVelocity = true, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = false, r.angularVelocity ? (l.hasAngularVelocity = true, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = false));
      a !== null && (i = t.getPose(e.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = true, i.linearVelocity ? (a.hasLinearVelocity = true, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = false, i.angularVelocity ? (a.hasAngularVelocity = true, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = false, this.dispatchEvent(Uu)));
    }
    return a !== null && (a.visible = i !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = o !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Qn();
      n.matrixAutoUpdate = false, n.visible = false, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class Rc extends rt {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new ln(), this.environmentIntensity = 1, this.environmentRotation = new ln(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class Cc {
  constructor(e, t) {
    this.isInterleavedBuffer = true, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Xo, this.updateRanges = [], this.version = 0, this.uuid = Qt();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let i = 0, r = this.stride; i < r; i++) this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Qt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Qt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride };
  }
}
const wt = new R();
class ps {
  constructor(e, t, n, i = false) {
    this.isInterleavedBufferAttribute = true, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++) wt.fromBufferAttribute(this, t), wt.applyMatrix4(e), this.setXYZ(t, wt.x, wt.y, wt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++) wt.fromBufferAttribute(this, t), wt.applyNormalMatrix(e), this.setXYZ(t, wt.x, wt.y, wt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++) wt.fromBufferAttribute(this, t), wt.transformDirection(e), this.setXYZ(t, wt.x, wt.y, wt.z);
    return this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (n = Zt(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = Ze(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
  }
  setX(e, t) {
    return this.normalized && (t = Ze(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = Ze(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = Ze(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = Ze(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = Zt(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = Zt(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = Zt(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = Zt(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ze(t, this.array), n = Ze(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ze(t, this.array), n = Ze(n, this.array), i = Ze(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Ze(t, this.array), n = Ze(n, this.array), i = Ze(i, this.array), r = Ze(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = r, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[i + r]);
      }
      return new Pt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new ps(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[i + r]);
      }
      return { itemSize: this.itemSize, type: this.array.constructor.name, array: t, normalized: this.normalized };
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), { isInterleavedBufferAttribute: true, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized };
  }
}
class Pc extends en {
  constructor(e) {
    super(), this.isSpriteMaterial = true, this.type = "SpriteMaterial", this.color = new Ee(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = true, this.transparent = true, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
let _i;
const Zi = new R(), xi = new R(), vi = new R(), Mi = new Me(), Ji = new Me(), Lc = new Pe(), Hs = new R(), Qi = new R(), Gs = new R(), nl = new Me(), Hr = new Me(), il = new Me();
class Nu extends rt {
  constructor(e = new Pc()) {
    if (super(), this.isSprite = true, this.type = "Sprite", _i === void 0) {
      _i = new xt();
      const t = new Float32Array([-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5, 0, 0, 1]), n = new Cc(t, 5);
      _i.setIndex([0, 1, 2, 0, 2, 3]), _i.setAttribute("position", new ps(n, 3, 0, false)), _i.setAttribute("uv", new ps(n, 2, 3, false));
    }
    this.geometry = _i, this.material = e, this.center = new Me(0.5, 0.5);
  }
  raycast(e, t) {
    e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), xi.setFromMatrixScale(this.matrixWorld), Lc.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), vi.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === false && xi.multiplyScalar(-vi.z);
    const n = this.material.rotation;
    let i, r;
    n !== 0 && (r = Math.cos(n), i = Math.sin(n));
    const o = this.center;
    Ws(Hs.set(-0.5, -0.5, 0), vi, o, xi, i, r), Ws(Qi.set(0.5, -0.5, 0), vi, o, xi, i, r), Ws(Gs.set(0.5, 0.5, 0), vi, o, xi, i, r), nl.set(0, 0), Hr.set(1, 0), il.set(1, 1);
    let a = e.ray.intersectTriangle(Hs, Qi, Gs, false, Zi);
    if (a === null && (Ws(Qi.set(-0.5, 0.5, 0), vi, o, xi, i, r), Hr.set(0, 1), a = e.ray.intersectTriangle(Hs, Gs, Qi, false, Zi), a === null)) return;
    const l = e.ray.origin.distanceTo(Zi);
    l < e.near || l > e.far || t.push({ distance: l, point: Zi.clone(), uv: Wt.getInterpolation(Zi, Hs, Qi, Gs, nl, Hr, il, new Me()), face: null, object: this });
  }
  copy(e, t) {
    return super.copy(e, t), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
  }
}
function Ws(s, e, t, n, i, r) {
  Mi.subVectors(s, t).addScalar(0.5).multiply(n), i !== void 0 ? (Ji.x = r * Mi.x - i * Mi.y, Ji.y = i * Mi.x + r * Mi.y) : Ji.copy(Mi), s.copy(e), s.x += Ji.x, s.y += Ji.y, s.applyMatrix4(Lc);
}
const sl = new R(), rl = new qe(), ol = new qe(), Fu = new R(), al = new Pe(), Xs = new R(), Gr = new cn(), ll = new Pe(), Wr = new Vi();
class Ou extends ft {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = true, this.type = "SkinnedMesh", this.bindMode = Da, this.bindMatrix = new Pe(), this.bindMatrixInverse = new Pe(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new tn()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++) this.getVertexPosition(n, Xs), this.boundingBox.expandByPoint(Xs);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new cn()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++) this.getVertexPosition(n, Xs), this.boundingSphere.expandByPoint(Xs);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Gr.copy(this.boundingSphere), Gr.applyMatrix4(i), e.ray.intersectsSphere(Gr) !== false && (ll.copy(i).invert(), Wr.copy(e.ray).applyMatrix4(ll), !(this.boundingBox !== null && Wr.intersectsBox(this.boundingBox) === false) && this._computeIntersections(e, t, Wr)));
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(true), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new qe(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const r = 1 / e.manhattanLength();
      r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === Da ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === Dh ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    rl.fromBufferAttribute(i.attributes.skinIndex, e), ol.fromBufferAttribute(i.attributes.skinWeight, e), sl.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const o = ol.getComponent(r);
      if (o !== 0) {
        const a = rl.getComponent(r);
        al.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), t.addScaledVector(Fu.copy(sl).applyMatrix4(al), o);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class Dc extends rt {
  constructor() {
    super(), this.isBone = true, this.type = "Bone";
  }
}
class Ic extends pt {
  constructor(e = null, t = 1, n = 1, i, r, o, a, l, c = Ct, h = Ct, u, d) {
    super(null, o, a, l, c, h, i, r, u, d), this.isDataTexture = true, this.image = { data: e, width: t, height: n }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
const cl = new Pe(), Bu = new Pe();
class ua {
  constructor(e = [], t = []) {
    this.uuid = Qt(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0) this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++) this.boneInverses.push(new Pe());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Pe();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
    for (let r = 0, o = e.length; r < o; r++) {
      const a = e[r] ? e[r].matrixWorld : Bu;
      cl.multiplyMatrices(a, t[r]), cl.toArray(n, r * 16);
    }
    i !== null && (i.needsUpdate = true);
  }
  clone() {
    return new ua(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new Ic(t, e, e, Xt, Jt);
    return n.needsUpdate = true, this.boneMatrices = t, this.boneTexture = n, this;
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e) return i;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const r = e.bones[n];
      let o = t[r];
      o === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), o = new Dc()), this.bones.push(o), this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = { metadata: { version: 4.6, type: "Skeleton", generator: "Skeleton.toJSON" }, bones: [], boneInverses: [] };
    e.uuid = this.uuid;
    const t = this.bones, n = this.boneInverses;
    for (let i = 0, r = t.length; i < r; i++) {
      const o = t[i];
      e.bones.push(o.uuid);
      const a = n[i];
      e.boneInverses.push(a.toArray());
    }
    return e;
  }
}
class Yo extends Pt {
  constructor(e, t, n, i = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = true, this.meshPerAttribute = i;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = true, e;
  }
}
const yi = new Pe(), hl = new Pe(), Ys = [], ul = new tn(), zu = new Pe(), es = new ft(), ts = new cn();
class ku extends ft {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = true, this.instanceMatrix = new Yo(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++) this.setMatrixAt(i, zu);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new tn()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++) this.getMatrixAt(n, yi), ul.copy(e.boundingBox).applyMatrix4(yi), this.boundingBox.union(ul);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new cn()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++) this.getMatrixAt(n, yi), ts.copy(e.boundingSphere).applyMatrix4(yi), this.boundingSphere.union(ts);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  getMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = this.morphTexture.source.data.data, r = n.length + 1, o = e * r + 1;
    for (let a = 0; a < n.length; a++) n[a] = i[o + a];
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (es.geometry = this.geometry, es.material = this.material, es.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), ts.copy(this.boundingSphere), ts.applyMatrix4(n), e.ray.intersectsSphere(ts) !== false)) for (let r = 0; r < i; r++) {
      this.getMatrixAt(r, yi), hl.multiplyMatrices(n, yi), es.matrixWorld = hl, es.raycast(e, Ys);
      for (let o = 0, a = Ys.length; o < a; o++) {
        const l = Ys[o];
        l.instanceId = r, l.object = this, t.push(l);
      }
      Ys.length = 0;
    }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new Yo(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = n.length + 1;
    this.morphTexture === null && (this.morphTexture = new Ic(new Float32Array(i * this.count), i, this.count, ia, Jt));
    const r = this.morphTexture.source.data.data;
    let o = 0;
    for (let c = 0; c < n.length; c++) o += n[c];
    const a = this.geometry.morphTargetsRelative ? 1 : 1 - o, l = i * e;
    r[l] = a, r.set(n, l + 1);
  }
  updateMorphTargets() {
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null);
  }
}
const Xr = new R(), Vu = new R(), Hu = new De();
class In {
  constructor(e = new R(1, 0, 0), t = 0) {
    this.isPlane = true, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = Xr.subVectors(n, t).cross(Vu.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Xr), i = this.normal.dot(n);
    if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(n, r);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Hu.getNormalMatrix(e), i = this.coplanarPoint(Xr).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(r), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Xn = new cn(), qs = new R();
class da {
  constructor(e = new In(), t = new In(), n = new In(), i = new In(), r = new In(), o = new In()) {
    this.planes = [e, t, n, i, r, o];
  }
  set(e, t, n, i, r, o) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(o), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = Sn) {
    const n = this.planes, i = e.elements, r = i[0], o = i[1], a = i[2], l = i[3], c = i[4], h = i[5], u = i[6], d = i[7], p = i[8], g = i[9], _ = i[10], m = i[11], f = i[12], b = i[13], T = i[14], M = i[15];
    if (n[0].setComponents(l - r, d - c, m - p, M - f).normalize(), n[1].setComponents(l + r, d + c, m + p, M + f).normalize(), n[2].setComponents(l + o, d + h, m + g, M + b).normalize(), n[3].setComponents(l - o, d - h, m - g, M - b).normalize(), n[4].setComponents(l - a, d - u, m - _, M - T).normalize(), t === Sn) n[5].setComponents(l + a, d + u, m + _, M + T).normalize();
    else if (t === dr) n[5].setComponents(a, u, _, T).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), Xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Xn);
  }
  intersectsSprite(e) {
    return Xn.center.set(0, 0, 0), Xn.radius = 0.7071067811865476, Xn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Xn);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let r = 0; r < 6; r++) if (t[r].distanceToPoint(n) < i) return false;
    return true;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (qs.x = i.normal.x > 0 ? e.max.x : e.min.x, qs.y = i.normal.y > 0 ? e.max.y : e.min.y, qs.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(qs) < 0) return false;
    }
    return true;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return false;
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ms extends en {
  constructor(e) {
    super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new Ee(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const fr = new R(), pr = new R(), dl = new Pe(), ns = new Vi(), js = new cn(), Yr = new R(), fl = new R();
class ms extends rt {
  constructor(e = new xt(), t = new Ms()) {
    super(), this.isLine = true, this.type = "Line", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, r = t.count; i < r; i++) fr.fromBufferAttribute(t, i - 1), pr.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += fr.distanceTo(pr);
      e.setAttribute("lineDistance", new Tt(n, 1));
    } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Line.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), js.copy(n.boundingSphere), js.applyMatrix4(i), js.radius += r, e.ray.intersectsSphere(js) === false) return;
    dl.copy(i).invert(), ns.copy(e.ray).applyMatrix4(dl);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = this.isLineSegments ? 2 : 1, h = n.index, d = n.attributes.position;
    if (h !== null) {
      const p = Math.max(0, o.start), g = Math.min(h.count, o.start + o.count);
      for (let _ = p, m = g - 1; _ < m; _ += c) {
        const f = h.getX(_), b = h.getX(_ + 1), T = $s(this, e, ns, l, f, b, _);
        T && t.push(T);
      }
      if (this.isLineLoop) {
        const _ = h.getX(g - 1), m = h.getX(p), f = $s(this, e, ns, l, _, m, g - 1);
        f && t.push(f);
      }
    } else {
      const p = Math.max(0, o.start), g = Math.min(d.count, o.start + o.count);
      for (let _ = p, m = g - 1; _ < m; _ += c) {
        const f = $s(this, e, ns, l, _, _ + 1, _);
        f && t.push(f);
      }
      if (this.isLineLoop) {
        const _ = $s(this, e, ns, l, g - 1, p, g - 1);
        _ && t.push(_);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = i.length; r < o; r++) {
          const a = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
}
function $s(s, e, t, n, i, r, o) {
  const a = s.geometry.attributes.position;
  if (fr.fromBufferAttribute(a, i), pr.fromBufferAttribute(a, r), t.distanceSqToSegment(fr, pr, Yr, fl) > n) return;
  Yr.applyMatrix4(s.matrixWorld);
  const c = e.ray.origin.distanceTo(Yr);
  if (!(c < e.near || c > e.far)) return { distance: c, point: fl.clone().applyMatrix4(s.matrixWorld), index: o, face: null, faceIndex: null, barycoord: null, object: s };
}
const pl = new R(), ml = new R();
class fa extends ms {
  constructor(e, t) {
    super(e, t), this.isLineSegments = true, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, r = t.count; i < r; i += 2) pl.fromBufferAttribute(t, i), ml.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + pl.distanceTo(ml);
      e.setAttribute("lineDistance", new Tt(n, 1));
    } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Gu extends ms {
  constructor(e, t) {
    super(e, t), this.isLineLoop = true, this.type = "LineLoop";
  }
}
class Uc extends en {
  constructor(e) {
    super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new Ee(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const gl = new Pe(), qo = new Vi(), Ks = new cn(), Zs = new R();
class Wu extends rt {
  constructor(e = new xt(), t = new Uc()) {
    super(), this.isPoints = true, this.type = "Points", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Points.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Ks.copy(n.boundingSphere), Ks.applyMatrix4(i), Ks.radius += r, e.ray.intersectsSphere(Ks) === false) return;
    gl.copy(i).invert(), qo.copy(e.ray).applyMatrix4(gl);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = n.index, u = n.attributes.position;
    if (c !== null) {
      const d = Math.max(0, o.start), p = Math.min(c.count, o.start + o.count);
      for (let g = d, _ = p; g < _; g++) {
        const m = c.getX(g);
        Zs.fromBufferAttribute(u, m), _l(Zs, m, l, i, e, t, this);
      }
    } else {
      const d = Math.max(0, o.start), p = Math.min(u.count, o.start + o.count);
      for (let g = d, _ = p; g < _; g++) Zs.fromBufferAttribute(u, g), _l(Zs, g, l, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = i.length; r < o; r++) {
          const a = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
}
function _l(s, e, t, n, i, r, o) {
  const a = qo.distanceSqToPoint(s);
  if (a < t) {
    const l = new R();
    qo.closestPointToPoint(s, l), l.applyMatrix4(n);
    const c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far) return;
    r.push({ distance: c, distanceToRay: Math.sqrt(a), point: l, index: e, face: null, faceIndex: null, barycoord: null, object: o });
  }
}
class Xu extends pt {
  constructor(e, t, n, i, r, o, a, l, c) {
    super(e, t, n, i, r, o, a, l, c), this.isCanvasTexture = true, this.needsUpdate = true;
  }
}
class Nc extends pt {
  constructor(e, t, n, i, r, o, a, l, c, h = wi) {
    if (h !== wi && h !== Ni) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === wi && (n = ei), n === void 0 && h === Ni && (n = Ui), super(null, i, r, o, a, l, h, n, c), this.isDepthTexture = true, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : Ct, this.minFilter = l !== void 0 ? l : Ct, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new la(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class _r extends xt {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: n, heightSegments: i };
    const r = e / 2, o = t / 2, a = Math.floor(n), l = Math.floor(i), c = a + 1, h = l + 1, u = e / a, d = t / l, p = [], g = [], _ = [], m = [];
    for (let f = 0; f < h; f++) {
      const b = f * d - o;
      for (let T = 0; T < c; T++) {
        const M = T * u - r;
        g.push(M, -b, 0), _.push(0, 0, 1), m.push(T / a), m.push(1 - f / l);
      }
    }
    for (let f = 0; f < l; f++) for (let b = 0; b < a; b++) {
      const T = b + c * f, M = b + c * (f + 1), L = b + 1 + c * (f + 1), C = b + 1 + c * f;
      p.push(T, M, C), p.push(M, L, C);
    }
    this.setIndex(p), this.setAttribute("position", new Tt(g, 3)), this.setAttribute("normal", new Tt(_, 3)), this.setAttribute("uv", new Tt(m, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new _r(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class gs extends xt {
  constructor(e = 1, t = 32, n = 16, i = 0, r = Math.PI * 2, o = 0, a = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = { radius: e, widthSegments: t, heightSegments: n, phiStart: i, phiLength: r, thetaStart: o, thetaLength: a }, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
    const l = Math.min(o + a, Math.PI);
    let c = 0;
    const h = [], u = new R(), d = new R(), p = [], g = [], _ = [], m = [];
    for (let f = 0; f <= n; f++) {
      const b = [], T = f / n;
      let M = 0;
      f === 0 && o === 0 ? M = 0.5 / t : f === n && l === Math.PI && (M = -0.5 / t);
      for (let L = 0; L <= t; L++) {
        const C = L / t;
        u.x = -e * Math.cos(i + C * r) * Math.sin(o + T * a), u.y = e * Math.cos(o + T * a), u.z = e * Math.sin(i + C * r) * Math.sin(o + T * a), g.push(u.x, u.y, u.z), d.copy(u).normalize(), _.push(d.x, d.y, d.z), m.push(C + M, 1 - T), b.push(c++);
      }
      h.push(b);
    }
    for (let f = 0; f < n; f++) for (let b = 0; b < t; b++) {
      const T = h[f][b + 1], M = h[f][b], L = h[f + 1][b], C = h[f + 1][b + 1];
      (f !== 0 || o > 0) && p.push(T, M, C), (f !== n - 1 || l < Math.PI) && p.push(M, L, C);
    }
    this.setIndex(p), this.setAttribute("position", new Tt(g, 3)), this.setAttribute("normal", new Tt(_, 3)), this.setAttribute("uv", new Tt(m, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new gs(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
  }
}
class pa extends en {
  constructor(e) {
    super(), this.isMeshStandardMaterial = true, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Ee(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ee(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = xc, this.normalScale = new Me(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new ln(), this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class hn extends pa {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = true, this.defines = { STANDARD: "", PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Me(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", { get: function() {
      return Ne(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
    }, set: function(t) {
      this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
    } }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Ee(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Ee(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Ee(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(e) {
    this._dispersion > 0 != e > 0 && this.version++, this._dispersion = e;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "", PHYSICAL: "" }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.dispersion = e.dispersion, this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
class Yu extends en {
  constructor(e) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = Nh, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class qu extends en {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
function Js(s, e, t) {
  return !s || !t && s.constructor === e ? s : typeof e.BYTES_PER_ELEMENT == "number" ? new e(s) : Array.prototype.slice.call(s);
}
function ju(s) {
  return ArrayBuffer.isView(s) && !(s instanceof DataView);
}
function $u(s) {
  function e(i, r) {
    return s[i] - s[r];
  }
  const t = s.length, n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function xl(s, e, t) {
  const n = s.length, i = new s.constructor(n);
  for (let r = 0, o = 0; o !== n; ++r) {
    const a = t[r] * e;
    for (let l = 0; l !== e; ++l) i[o++] = s[a + l];
  }
  return i;
}
function Fc(s, e, t, n) {
  let i = 1, r = s[0];
  for (; r !== void 0 && r[n] === void 0; ) r = s[i++];
  if (r === void 0) return;
  let o = r[n];
  if (o !== void 0) if (Array.isArray(o)) do
    o = r[n], o !== void 0 && (e.push(r.time), t.push(...o)), r = s[i++];
  while (r !== void 0);
  else if (o.toArray !== void 0) do
    o = r[n], o !== void 0 && (e.push(r.time), o.toArray(t, t.length)), r = s[i++];
  while (r !== void 0);
  else do
    o = r[n], o !== void 0 && (e.push(r.time), t.push(o)), r = s[i++];
  while (r !== void 0);
}
class ys {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], r = t[n - 1];
    n: {
      e: {
        let o;
        t: {
          i: if (!(e < i)) {
            for (let a = n + 2; ; ) {
              if (i === void 0) {
                if (e < r) break i;
                return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === a) break;
              if (r = i, i = t[++n], e < i) break e;
            }
            o = t.length;
            break t;
          }
          if (!(e >= r)) {
            const a = t[1];
            e < a && (n = 2, r = a);
            for (let l = n - 2; ; ) {
              if (r === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === l) break;
              if (i = r, r = t[--n - 1], e >= r) break e;
            }
            o = n, n = 0;
            break t;
          }
          break n;
        }
        for (; n < o; ) {
          const a = n + o >>> 1;
          e < t[a] ? o = a : n = a + 1;
        }
        if (i = t[n], r = t[n - 1], r === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0) return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, r, i);
    }
    return this.interpolate_(n, r, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i;
    for (let o = 0; o !== i; ++o) t[o] = n[r + o];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class Ku extends ys {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: Ia, endingEnd: Ia };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let r = e - 2, o = e + 1, a = i[r], l = i[o];
    if (a === void 0) switch (this.getSettings_().endingStart) {
      case Ua:
        r = e, a = 2 * t - n;
        break;
      case Na:
        r = i.length - 2, a = t + i[r] - i[r + 1];
        break;
      default:
        r = e, a = n;
    }
    if (l === void 0) switch (this.getSettings_().endingEnd) {
      case Ua:
        o = e, l = 2 * n - t;
        break;
      case Na:
        o = 1, l = n + i[1] - i[0];
        break;
      default:
        o = e - 1, l = t;
    }
    const c = (n - t) * 0.5, h = this.valueSize;
    this._weightPrev = c / (t - a), this._weightNext = c / (l - n), this._offsetPrev = r * h, this._offsetNext = o * h;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, h = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, p = this._weightNext, g = (n - t) / (i - t), _ = g * g, m = _ * g, f = -d * m + 2 * d * _ - d * g, b = (1 + d) * m + (-1.5 - 2 * d) * _ + (-0.5 + d) * g + 1, T = (-1 - p) * m + (1.5 + p) * _ + 0.5 * g, M = p * m - p * _;
    for (let L = 0; L !== a; ++L) r[L] = f * o[h + L] + b * o[c + L] + T * o[l + L] + M * o[u + L];
    return r;
  }
}
class Zu extends ys {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, h = (n - t) / (i - t), u = 1 - h;
    for (let d = 0; d !== a; ++d) r[d] = o[c + d] * u + o[l + d] * h;
    return r;
  }
}
class Ju extends ys {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class un {
  constructor(e, t, n, i) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = Js(t, this.TimeBufferType), this.values = Js(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON) n = t.toJSON(e);
    else {
      n = { name: e.name, times: Js(e.times, Array), values: Js(e.values, Array) };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Ju(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Zu(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Ku(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case us:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case ds:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case yr:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0) if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
      else throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return us;
      case this.InterpolantFactoryMethodLinear:
        return ds;
      case this.InterpolantFactoryMethodSmooth:
        return yr;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e;
    }
    return this;
  }
  trim(e, t) {
    const n = this.times, i = n.length;
    let r = 0, o = i - 1;
    for (; r !== i && n[r] < e; ) ++r;
    for (; o !== -1 && n[o] > t; ) --o;
    if (++o, r !== 0 || o !== i) {
      r >= o && (o = Math.max(o, 1), r = o - 1);
      const a = this.getValueSize();
      this.times = n.slice(r, o), this.values = this.values.slice(r * a, o * a);
    }
    return this;
  }
  validate() {
    let e = true;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = false);
    const n = this.times, i = this.values, r = n.length;
    r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = false);
    let o = null;
    for (let a = 0; a !== r; a++) {
      const l = n[a];
      if (typeof l == "number" && isNaN(l)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, l), e = false;
        break;
      }
      if (o !== null && o > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, a, l, o), e = false;
        break;
      }
      o = l;
    }
    if (i !== void 0 && ju(i)) for (let a = 0, l = i.length; a !== l; ++a) {
      const c = i[a];
      if (isNaN(c)) {
        console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, c), e = false;
        break;
      }
    }
    return e;
  }
  optimize() {
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === yr, r = e.length - 1;
    let o = 1;
    for (let a = 1; a < r; ++a) {
      let l = false;
      const c = e[a], h = e[a + 1];
      if (c !== h && (a !== 1 || c !== e[0])) if (i) l = true;
      else {
        const u = a * n, d = u - n, p = u + n;
        for (let g = 0; g !== n; ++g) {
          const _ = t[u + g];
          if (_ !== t[d + g] || _ !== t[p + g]) {
            l = true;
            break;
          }
        }
      }
      if (l) {
        if (a !== o) {
          e[o] = e[a];
          const u = a * n, d = o * n;
          for (let p = 0; p !== n; ++p) t[d + p] = t[u + p];
        }
        ++o;
      }
    }
    if (r > 0) {
      e[o] = e[r];
      for (let a = r * n, l = o * n, c = 0; c !== n; ++c) t[l + c] = t[a + c];
      ++o;
    }
    return o !== e.length ? (this.times = e.slice(0, o), this.values = t.slice(0, o * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = this.times.slice(), t = this.values.slice(), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
un.prototype.TimeBufferType = Float32Array;
un.prototype.ValueBufferType = Float32Array;
un.prototype.DefaultInterpolation = ds;
class Hi extends un {
  constructor(e, t, n) {
    super(e, t, n);
  }
}
Hi.prototype.ValueTypeName = "bool";
Hi.prototype.ValueBufferType = Array;
Hi.prototype.DefaultInterpolation = us;
Hi.prototype.InterpolantFactoryMethodLinear = void 0;
Hi.prototype.InterpolantFactoryMethodSmooth = void 0;
class Oc extends un {
}
Oc.prototype.ValueTypeName = "color";
class Bi extends un {
}
Bi.prototype.ValueTypeName = "number";
class Qu extends ys {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = (n - t) / (i - t);
    let c = e * a;
    for (let h = c + a; c !== h; c += 4) an.slerpFlat(r, 0, o, c - a, o, c, l);
    return r;
  }
}
class zi extends un {
  InterpolantFactoryMethodLinear(e) {
    return new Qu(this.times, this.values, this.getValueSize(), e);
  }
}
zi.prototype.ValueTypeName = "quaternion";
zi.prototype.InterpolantFactoryMethodSmooth = void 0;
class Gi extends un {
  constructor(e, t, n) {
    super(e, t, n);
  }
}
Gi.prototype.ValueTypeName = "string";
Gi.prototype.ValueBufferType = Array;
Gi.prototype.DefaultInterpolation = us;
Gi.prototype.InterpolantFactoryMethodLinear = void 0;
Gi.prototype.InterpolantFactoryMethodSmooth = void 0;
class ki extends un {
}
ki.prototype.ValueTypeName = "vector";
class ed {
  constructor(e = "", t = -1, n = [], i = Ih) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = Qt(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let o = 0, a = n.length; o !== a; ++o) t.push(nd(n[o]).scale(i));
    const r = new this(e.name, e.duration, t, e.blendMode);
    return r.uuid = e.uuid, r;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, i = { name: e.name, duration: e.duration, tracks: t, uuid: e.uuid, blendMode: e.blendMode };
    for (let r = 0, o = n.length; r !== o; ++r) t.push(un.toJSON(n[r]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const r = t.length, o = [];
    for (let a = 0; a < r; a++) {
      let l = [], c = [];
      l.push((a + r - 1) % r, a, (a + 1) % r), c.push(0, 1, 0);
      const h = $u(l);
      l = xl(l, 1, h), c = xl(c, 1, h), !i && l[0] === 0 && (l.push(r), c.push(c[0])), o.push(new Bi(".morphTargetInfluences[" + t[a].name + "]", l, c).scale(1 / n));
    }
    return new this(e, -1, o);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++) if (n[i].name === t) return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {}, r = /^([\w-]*?)([\d]+)$/;
    for (let a = 0, l = e.length; a < l; a++) {
      const c = e[a], h = c.name.match(r);
      if (h && h.length > 1) {
        const u = h[1];
        let d = i[u];
        d || (i[u] = d = []), d.push(c);
      }
    }
    const o = [];
    for (const a in i) o.push(this.CreateFromMorphTargetSequence(a, i[a], t, n));
    return o;
  }
  static parseAnimation(e, t) {
    if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(u, d, p, g, _) {
      if (p.length !== 0) {
        const m = [], f = [];
        Fc(p, m, f, g), m.length !== 0 && _.push(new u(d, m, f));
      }
    }, i = [], r = e.name || "default", o = e.fps || 30, a = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let u = 0; u < c.length; u++) {
      const d = c[u].keys;
      if (!(!d || d.length === 0)) if (d[0].morphTargets) {
        const p = {};
        let g;
        for (g = 0; g < d.length; g++) if (d[g].morphTargets) for (let _ = 0; _ < d[g].morphTargets.length; _++) p[d[g].morphTargets[_]] = -1;
        for (const _ in p) {
          const m = [], f = [];
          for (let b = 0; b !== d[g].morphTargets.length; ++b) {
            const T = d[g];
            m.push(T.time), f.push(T.morphTarget === _ ? 1 : 0);
          }
          i.push(new Bi(".morphTargetInfluence[" + _ + "]", m, f));
        }
        l = p.length * o;
      } else {
        const p = ".bones[" + t[u].name + "]";
        n(ki, p + ".position", d, "pos", i), n(zi, p + ".quaternion", d, "rot", i), n(ki, p + ".scale", d, "scl", i);
      }
    }
    return i.length === 0 ? null : new this(r, l, i, a);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const r = this.tracks[n];
      t = Math.max(t, r.times[r.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = true;
    for (let t = 0; t < this.tracks.length; t++) e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function td(s) {
  switch (s.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Bi;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return ki;
    case "color":
      return Oc;
    case "quaternion":
      return zi;
    case "bool":
    case "boolean":
      return Hi;
    case "string":
      return Gi;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + s);
}
function nd(s) {
  if (s.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = td(s.type);
  if (s.times === void 0) {
    const t = [], n = [];
    Fc(s.keys, t, n, "value"), s.times = t, s.values = n;
  }
  return e.parse !== void 0 ? e.parse(s) : new e(s.name, s.times, s.values, s.interpolation);
}
const Fn = { enabled: false, files: {}, add: function(s, e) {
  this.enabled !== false && (this.files[s] = e);
}, get: function(s) {
  if (this.enabled !== false) return this.files[s];
}, remove: function(s) {
  delete this.files[s];
}, clear: function() {
  this.files = {};
} };
class id {
  constructor(e, t, n) {
    const i = this;
    let r = false, o = 0, a = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      a++, r === false && i.onStart !== void 0 && i.onStart(h, o, a), r = true;
    }, this.itemEnd = function(h) {
      o++, i.onProgress !== void 0 && i.onProgress(h, o, a), o === a && (r = false, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(h) {
      i.onError !== void 0 && i.onError(h);
    }, this.resolveURL = function(h) {
      return l ? l(h) : h;
    }, this.setURLModifier = function(h) {
      return l = h, this;
    }, this.addHandler = function(h, u) {
      return c.push(h, u), this;
    }, this.removeHandler = function(h) {
      const u = c.indexOf(h);
      return u !== -1 && c.splice(u, 2), this;
    }, this.getHandler = function(h) {
      for (let u = 0, d = c.length; u < d; u += 2) {
        const p = c[u], g = c[u + 1];
        if (p.global && (p.lastIndex = 0), p.test(h)) return g;
      }
      return null;
    };
  }
}
const sd = new id();
class Wi {
  constructor(e) {
    this.manager = e !== void 0 ? e : sd, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, r) {
      n.load(e, i, t, r);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
Wi.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const xn = {};
class rd extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class Bc extends Wi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = Fn.get(e);
    if (r !== void 0) return this.manager.itemStart(e), setTimeout(() => {
      t && t(r), this.manager.itemEnd(e);
    }, 0), r;
    if (xn[e] !== void 0) {
      xn[e].push({ onLoad: t, onProgress: n, onError: i });
      return;
    }
    xn[e] = [], xn[e].push({ onLoad: t, onProgress: n, onError: i });
    const o = new Request(e, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin" }), a = this.mimeType, l = this.responseType;
    fetch(o).then((c) => {
      if (c.status === 200 || c.status === 0) {
        if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0) return c;
        const h = xn[e], u = c.body.getReader(), d = c.headers.get("X-File-Size") || c.headers.get("Content-Length"), p = d ? parseInt(d) : 0, g = p !== 0;
        let _ = 0;
        const m = new ReadableStream({ start(f) {
          b();
          function b() {
            u.read().then(({ done: T, value: M }) => {
              if (T) f.close();
              else {
                _ += M.byteLength;
                const L = new ProgressEvent("progress", { lengthComputable: g, loaded: _, total: p });
                for (let C = 0, A = h.length; C < A; C++) {
                  const N = h[C];
                  N.onProgress && N.onProgress(L);
                }
                f.enqueue(M), b();
              }
            }, (T) => {
              f.error(T);
            });
          }
        } });
        return new Response(m);
      } else throw new rd(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
    }).then((c) => {
      switch (l) {
        case "arraybuffer":
          return c.arrayBuffer();
        case "blob":
          return c.blob();
        case "document":
          return c.text().then((h) => new DOMParser().parseFromString(h, a));
        case "json":
          return c.json();
        default:
          if (a === void 0) return c.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(a), d = u && u[1] ? u[1].toLowerCase() : void 0, p = new TextDecoder(d);
            return c.arrayBuffer().then((g) => p.decode(g));
          }
      }
    }).then((c) => {
      Fn.add(e, c);
      const h = xn[e];
      delete xn[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const p = h[u];
        p.onLoad && p.onLoad(c);
      }
    }).catch((c) => {
      const h = xn[e];
      if (h === void 0) throw this.manager.itemError(e), c;
      delete xn[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const p = h[u];
        p.onError && p.onError(c);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class od extends Wi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, o = Fn.get(e);
    if (o !== void 0) return r.manager.itemStart(e), setTimeout(function() {
      t && t(o), r.manager.itemEnd(e);
    }, 0), o;
    const a = fs("img");
    function l() {
      h(), Fn.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function c(u) {
      h(), i && i(u), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function h() {
      a.removeEventListener("load", l, false), a.removeEventListener("error", c, false);
    }
    return a.addEventListener("load", l, false), a.addEventListener("error", c, false), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(e), a.src = e, a;
  }
}
class ad extends Wi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new pt(), o = new od(this.manager);
    return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(a) {
      r.image = a, r.needsUpdate = true, t !== void 0 && t(r);
    }, n, i), r;
  }
}
class Ss extends rt {
  constructor(e, t = 1) {
    super(), this.isLight = true, this.type = "Light", this.color = new Ee(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (t.object.target = this.target.uuid), t;
  }
}
const qr = new Pe(), vl = new R(), Ml = new R();
class ma {
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Me(512, 512), this.map = null, this.mapPass = null, this.matrix = new Pe(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new da(), this._frameExtents = new Me(1, 1), this._viewportCount = 1, this._viewports = [new qe(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    vl.setFromMatrixPosition(e.matrixWorld), t.position.copy(vl), Ml.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Ml), t.updateMatrixWorld(), qr.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(qr), n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), n.multiply(qr);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(false).object, delete e.camera.matrix, e;
  }
}
class ld extends ma {
  constructor() {
    super(new bt(50, 1, 0.5, 500)), this.isSpotLightShadow = true, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = Fi * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, r = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class cd extends Ss {
  constructor(e, t, n = 0, i = Math.PI / 3, r = 0, o = 2) {
    super(e, t), this.isSpotLight = true, this.type = "SpotLight", this.position.copy(rt.DEFAULT_UP), this.updateMatrix(), this.target = new rt(), this.distance = n, this.angle = i, this.penumbra = r, this.decay = o, this.map = null, this.shadow = new ld();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
const yl = new Pe(), is = new R(), jr = new R();
class hd extends ma {
  constructor() {
    super(new bt(90, 1, 0.5, 500)), this.isPointLightShadow = true, this._frameExtents = new Me(4, 2), this._viewportCount = 6, this._viewports = [new qe(2, 1, 1, 1), new qe(0, 1, 1, 1), new qe(3, 1, 1, 1), new qe(1, 1, 1, 1), new qe(3, 0, 1, 1), new qe(1, 0, 1, 1)], this._cubeDirections = [new R(1, 0, 0), new R(-1, 0, 0), new R(0, 0, 1), new R(0, 0, -1), new R(0, 1, 0), new R(0, -1, 0)], this._cubeUps = [new R(0, 1, 0), new R(0, 1, 0), new R(0, 1, 0), new R(0, 1, 0), new R(0, 0, 1), new R(0, 0, -1)];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, r = e.distance || n.far;
    r !== n.far && (n.far = r, n.updateProjectionMatrix()), is.setFromMatrixPosition(e.matrixWorld), n.position.copy(is), jr.copy(n.position), jr.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(jr), n.updateMatrixWorld(), i.makeTranslation(-is.x, -is.y, -is.z), yl.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(yl);
  }
}
class ud extends Ss {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = true, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new hd();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class Es extends ha {
  constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = r, this.far = o, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, r, o) {
    this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let r = n - e, o = n + e, a = i + t, l = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += c * this.view.offsetX, o = r + c * this.view.width, a -= h * this.view.offsetY, l = a - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, o, a, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
class dd extends ma {
  constructor() {
    super(new Es(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
  }
}
class mr extends Ss {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(rt.DEFAULT_UP), this.updateMatrix(), this.target = new rt(), this.shadow = new dd();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class zc extends Ss {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = true, this.type = "AmbientLight";
  }
}
class cs {
  static decodeText(e) {
    if (console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."), typeof TextDecoder < "u") return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++) t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}
class fd extends Wi {
  constructor(e) {
    super(e), this.isImageBitmapLoader = true, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, o = Fn.get(e);
    if (o !== void 0) {
      if (r.manager.itemStart(e), o.then) {
        o.then((c) => {
          t && t(c), r.manager.itemEnd(e);
        }).catch((c) => {
          i && i(c);
        });
        return;
      }
      return setTimeout(function() {
        t && t(o), r.manager.itemEnd(e);
      }, 0), o;
    }
    const a = {};
    a.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", a.headers = this.requestHeader;
    const l = fetch(e, a).then(function(c) {
      return c.blob();
    }).then(function(c) {
      return createImageBitmap(c, Object.assign(r.options, { colorSpaceConversion: "none" }));
    }).then(function(c) {
      return Fn.add(e, c), t && t(c), r.manager.itemEnd(e), c;
    }).catch(function(c) {
      i && i(c), Fn.remove(e), r.manager.itemError(e), r.manager.itemEnd(e);
    });
    Fn.add(e, l), r.manager.itemStart(e);
  }
}
class pd extends bt {
  constructor(e = []) {
    super(), this.isArrayCamera = true, this.cameras = e, this.index = 0;
  }
}
const ga = "\\[\\]\\.:\\/", md = new RegExp("[" + ga + "]", "g"), _a = "[^" + ga + "]", gd = "[^" + ga.replace("\\.", "") + "]", _d = /((?:WC+[\/:])*)/.source.replace("WC", _a), xd = /(WCOD+)?/.source.replace("WCOD", gd), vd = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", _a), Md = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", _a), yd = new RegExp("^" + _d + xd + vd + Md + "$"), Sd = ["material", "materials", "bones", "map"];
class Ed {
  constructor(e, t, n) {
    const i = n || Je.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind();
  }
}
class Je {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || Je.parseTrackName(t), this.node = Je.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new Je.Composite(e, t, n) : new Je(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(md, "");
  }
  static parseTrackName(e) {
    const t = yd.exec(e);
    if (t === null) throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = { nodeName: t[2], objectName: t[3], objectIndex: t[4], propertyName: t[5], propertyIndex: t[6] }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const r = n.nodeName.substring(i + 1);
      Sd.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r);
    }
    if (n.propertyName === null || n.propertyName.length === 0) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  }
  static findNode(e, t) {
    if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0) return n;
    }
    if (e.children) {
      const n = function(r) {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          if (a.name === t || a.uuid === t) return a;
          const l = n(a.children);
          if (l) return l;
        }
        return null;
      }, i = n(e.children);
      if (i) return i;
    }
    return null;
  }
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = true;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
    this.targetObject.needsUpdate = true;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = true;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = true;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  bind() {
    let e = this.node;
    const t = this.parsedPath, n = t.objectName, i = t.propertyName;
    let r = t.propertyIndex;
    if (e || (e = Je.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (n) {
      let c = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let h = 0; h < e.length; h++) if (e[h].name === c) {
            c = h;
            break;
          }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (c !== void 0) {
        if (e[c] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[c];
      }
    }
    const o = e[i];
    if (o === void 0) {
      const c = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", e);
      return;
    }
    let a = this.Versioning.None;
    this.targetObject = e, e.isMaterial === true ? a = this.Versioning.NeedsUpdate : e.isObject3D === true && (a = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (r !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[r] !== void 0 && (r = e.morphTargetDictionary[r]);
      }
      l = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = r;
    } else o.fromArray !== void 0 && o.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (l = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][a];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
Je.Composite = Ed;
Je.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 };
Je.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 };
Je.prototype.GetterByBindingType = [Je.prototype._getValue_direct, Je.prototype._getValue_array, Je.prototype._getValue_arrayElement, Je.prototype._getValue_toArray];
Je.prototype.SetterByBindingTypeAndVersioning = [[Je.prototype._setValue_direct, Je.prototype._setValue_direct_setNeedsUpdate, Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [Je.prototype._setValue_array, Je.prototype._setValue_array_setNeedsUpdate, Je.prototype._setValue_array_setMatrixWorldNeedsUpdate], [Je.prototype._setValue_arrayElement, Je.prototype._setValue_arrayElement_setNeedsUpdate, Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [Je.prototype._setValue_fromArray, Je.prototype._setValue_fromArray_setNeedsUpdate, Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
const Sl = new Pe();
class bd {
  constructor(e, t, n = 0, i = 1 / 0) {
    this.ray = new Vi(e, t), this.near = n, this.far = i, this.camera = null, this.layers = new ca(), this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  setFromXRController(e) {
    return Sl.identity().extractRotation(e.matrixWorld), this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(Sl), this;
  }
  intersectObject(e, t = true, n = []) {
    return jo(e, this, n, t), n.sort(El), n;
  }
  intersectObjects(e, t = true, n = []) {
    for (let i = 0, r = e.length; i < r; i++) jo(e[i], this, n, t);
    return n.sort(El), n;
  }
}
function El(s, e) {
  return s.distance - e.distance;
}
function jo(s, e, t, n) {
  let i = true;
  if (s.layers.test(e.layers) && s.raycast(e, t) === false && (i = false), i === true && n === true) {
    const r = s.children;
    for (let o = 0, a = r.length; o < a; o++) jo(r[o], e, t, true);
  }
}
class bl {
  constructor(e = 1, t = 0, n = 0) {
    this.radius = e, this.phi = t, this.theta = n;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  makeSafe() {
    return this.phi = Ne(this.phi, 1e-6, Math.PI - 1e-6), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(Ne(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Td extends fa {
  constructor(e = 10, t = 10, n = 4473924, i = 8947848) {
    n = new Ee(n), i = new Ee(i);
    const r = t / 2, o = e / t, a = e / 2, l = [], c = [];
    for (let d = 0, p = 0, g = -a; d <= t; d++, g += o) {
      l.push(-a, 0, g, a, 0, g), l.push(g, 0, -a, g, 0, a);
      const _ = d === r ? n : i;
      _.toArray(c, p), p += 3, _.toArray(c, p), p += 3, _.toArray(c, p), p += 3, _.toArray(c, p), p += 3;
    }
    const h = new xt();
    h.setAttribute("position", new Tt(l, 3)), h.setAttribute("color", new Tt(c, 3));
    const u = new Ms({ vertexColors: true, toneMapped: false });
    super(h, u), this.type = "GridHelper";
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class kc extends fa {
  constructor(e = 1) {
    const t = [0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e], n = [1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1], i = new xt();
    i.setAttribute("position", new Tt(t, 3)), i.setAttribute("color", new Tt(n, 3));
    const r = new Ms({ vertexColors: true, toneMapped: false });
    super(i, r), this.type = "AxesHelper";
  }
  setColors(e, t, n) {
    const i = new Ee(), r = this.geometry.attributes.color.array;
    return i.set(e), i.toArray(r, 0), i.toArray(r, 3), i.set(t), i.toArray(r, 6), i.toArray(r, 9), i.set(n), i.toArray(r, 12), i.toArray(r, 15), this.geometry.attributes.color.needsUpdate = true, this;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class Ad extends ni {
  constructor(e, t = null) {
    super(), this.object = e, this.domElement = t, this.enabled = true, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect() {
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
}
function Tl(s, e, t, n) {
  const i = wd(n);
  switch (t) {
    case uc:
      return s * e;
    case fc:
      return s * e;
    case pc:
      return s * e * 2;
    case ia:
      return s * e / i.components * i.byteLength;
    case sa:
      return s * e / i.components * i.byteLength;
    case mc:
      return s * e * 2 / i.components * i.byteLength;
    case ra:
      return s * e * 2 / i.components * i.byteLength;
    case dc:
      return s * e * 3 / i.components * i.byteLength;
    case Xt:
      return s * e * 4 / i.components * i.byteLength;
    case oa:
      return s * e * 4 / i.components * i.byteLength;
    case sr:
    case rr:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case or:
    case ar:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case vo:
    case yo:
      return Math.max(s, 16) * Math.max(e, 8) / 4;
    case xo:
    case Mo:
      return Math.max(s, 8) * Math.max(e, 8) / 2;
    case So:
    case Eo:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case bo:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case To:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ao:
      return Math.floor((s + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case wo:
      return Math.floor((s + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Ro:
      return Math.floor((s + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case Co:
      return Math.floor((s + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Po:
      return Math.floor((s + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Lo:
      return Math.floor((s + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Do:
      return Math.floor((s + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Io:
      return Math.floor((s + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case Uo:
      return Math.floor((s + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case No:
      return Math.floor((s + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Fo:
      return Math.floor((s + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case Oo:
      return Math.floor((s + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case Bo:
      return Math.floor((s + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case lr:
    case zo:
    case ko:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 16;
    case gc:
    case Vo:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 8;
    case Ho:
    case Go:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function wd(s) {
  switch (s) {
    case Tn:
    case lc:
      return { byteLength: 1, components: 1 };
    case hs:
    case cc:
    case xs:
      return { byteLength: 2, components: 1 };
    case ta:
    case na:
      return { byteLength: 2, components: 4 };
    case ei:
    case ea:
    case Jt:
      return { byteLength: 4, components: 1 };
    case hc:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${s}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: Qo } }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Qo);
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function Vc() {
  let s = null, e = false, t = null, n = null;
  function i(r, o) {
    t(r, o), n = s.requestAnimationFrame(i);
  }
  return { start: function() {
    e !== true && t !== null && (n = s.requestAnimationFrame(i), e = true);
  }, stop: function() {
    s.cancelAnimationFrame(n), e = false;
  }, setAnimationLoop: function(r) {
    t = r;
  }, setContext: function(r) {
    s = r;
  } };
}
function Rd(s) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(a, l) {
    const c = a.array, h = a.usage, u = c.byteLength, d = s.createBuffer();
    s.bindBuffer(l, d), s.bufferData(l, c, h), a.onUploadCallback();
    let p;
    if (c instanceof Float32Array) p = s.FLOAT;
    else if (c instanceof Uint16Array) a.isFloat16BufferAttribute ? p = s.HALF_FLOAT : p = s.UNSIGNED_SHORT;
    else if (c instanceof Int16Array) p = s.SHORT;
    else if (c instanceof Uint32Array) p = s.UNSIGNED_INT;
    else if (c instanceof Int32Array) p = s.INT;
    else if (c instanceof Int8Array) p = s.BYTE;
    else if (c instanceof Uint8Array) p = s.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) p = s.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return { buffer: d, type: p, bytesPerElement: c.BYTES_PER_ELEMENT, version: a.version, size: u };
  }
  function n(a, l, c) {
    const h = l.array, u = l.updateRanges;
    if (s.bindBuffer(c, a), u.length === 0) s.bufferSubData(c, 0, h);
    else {
      u.sort((p, g) => p.start - g.start);
      let d = 0;
      for (let p = 1; p < u.length; p++) {
        const g = u[d], _ = u[p];
        _.start <= g.start + g.count + 1 ? g.count = Math.max(g.count, _.start + _.count - g.start) : (++d, u[d] = _);
      }
      u.length = d + 1;
      for (let p = 0, g = u.length; p < g; p++) {
        const _ = u[p];
        s.bufferSubData(c, _.start * h.BYTES_PER_ELEMENT, h, _.start, _.count);
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function i(a) {
    return a.isInterleavedBufferAttribute && (a = a.data), e.get(a);
  }
  function r(a) {
    a.isInterleavedBufferAttribute && (a = a.data);
    const l = e.get(a);
    l && (s.deleteBuffer(l.buffer), e.delete(a));
  }
  function o(a, l) {
    if (a.isInterleavedBufferAttribute && (a = a.data), a.isGLBufferAttribute) {
      const h = e.get(a);
      (!h || h.version < a.version) && e.set(a, { buffer: a.buffer, type: a.type, bytesPerElement: a.elementSize, version: a.version });
      return;
    }
    const c = e.get(a);
    if (c === void 0) e.set(a, t(a, l));
    else if (c.version < a.version) {
      if (c.size !== a.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, a, l), c.version = a.version;
    }
  }
  return { get: i, remove: r, update: o };
}
var Cd = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Pd = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, Ld = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Dd = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Id = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Ud = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Nd = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Fd = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Od = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, Bd = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, zd = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, kd = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Vd = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Hd = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Gd = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Wd = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, Xd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Yd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, qd = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, jd = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, $d = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Kd = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Zd = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, Jd = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Qd = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, ef = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, tf = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, nf = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, sf = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, rf = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, of = "gl_FragColor = linearToOutputTexel( gl_FragColor );", af = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, lf = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, cf = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, hf = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, uf = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, df = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, ff = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, pf = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, mf = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, gf = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, _f = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, xf = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, vf = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Mf = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, yf = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, Sf = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, Ef = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, bf = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Tf = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Af = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, wf = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, Rf = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, Cf = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Pf = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Lf = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Df = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, If = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Uf = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Nf = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, Ff = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Of = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Bf = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, zf = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, kf = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Vf = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Hf = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Gf = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Wf = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Xf = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, Yf = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, qf = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, jf = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, $f = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Kf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Zf = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Jf = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Qf = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, ep = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, tp = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, np = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, ip = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, sp = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, rp = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, op = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, ap = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, lp = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, cp = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, hp = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, up = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, dp = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, fp = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, pp = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, mp = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, gp = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, _p = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, xp = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, vp = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Mp = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, yp = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Sp = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Ep = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, bp = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, Tp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Ap = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, wp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, Rp = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Cp = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Pp = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Lp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Dp = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Ip = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Up = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Np = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, Fp = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, Op = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Bp = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, zp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, kp = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Vp = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Hp = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Gp = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Wp = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Xp = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Yp = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, qp = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, jp = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, $p = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Kp = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Zp = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Jp = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Qp = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, em = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, tm = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, nm = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, im = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, sm = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, rm = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, om = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, am = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, lm = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Ue = { alphahash_fragment: Cd, alphahash_pars_fragment: Pd, alphamap_fragment: Ld, alphamap_pars_fragment: Dd, alphatest_fragment: Id, alphatest_pars_fragment: Ud, aomap_fragment: Nd, aomap_pars_fragment: Fd, batching_pars_vertex: Od, batching_vertex: Bd, begin_vertex: zd, beginnormal_vertex: kd, bsdfs: Vd, iridescence_fragment: Hd, bumpmap_pars_fragment: Gd, clipping_planes_fragment: Wd, clipping_planes_pars_fragment: Xd, clipping_planes_pars_vertex: Yd, clipping_planes_vertex: qd, color_fragment: jd, color_pars_fragment: $d, color_pars_vertex: Kd, color_vertex: Zd, common: Jd, cube_uv_reflection_fragment: Qd, defaultnormal_vertex: ef, displacementmap_pars_vertex: tf, displacementmap_vertex: nf, emissivemap_fragment: sf, emissivemap_pars_fragment: rf, colorspace_fragment: of, colorspace_pars_fragment: af, envmap_fragment: lf, envmap_common_pars_fragment: cf, envmap_pars_fragment: hf, envmap_pars_vertex: uf, envmap_physical_pars_fragment: Sf, envmap_vertex: df, fog_vertex: ff, fog_pars_vertex: pf, fog_fragment: mf, fog_pars_fragment: gf, gradientmap_pars_fragment: _f, lightmap_pars_fragment: xf, lights_lambert_fragment: vf, lights_lambert_pars_fragment: Mf, lights_pars_begin: yf, lights_toon_fragment: Ef, lights_toon_pars_fragment: bf, lights_phong_fragment: Tf, lights_phong_pars_fragment: Af, lights_physical_fragment: wf, lights_physical_pars_fragment: Rf, lights_fragment_begin: Cf, lights_fragment_maps: Pf, lights_fragment_end: Lf, logdepthbuf_fragment: Df, logdepthbuf_pars_fragment: If, logdepthbuf_pars_vertex: Uf, logdepthbuf_vertex: Nf, map_fragment: Ff, map_pars_fragment: Of, map_particle_fragment: Bf, map_particle_pars_fragment: zf, metalnessmap_fragment: kf, metalnessmap_pars_fragment: Vf, morphinstance_vertex: Hf, morphcolor_vertex: Gf, morphnormal_vertex: Wf, morphtarget_pars_vertex: Xf, morphtarget_vertex: Yf, normal_fragment_begin: qf, normal_fragment_maps: jf, normal_pars_fragment: $f, normal_pars_vertex: Kf, normal_vertex: Zf, normalmap_pars_fragment: Jf, clearcoat_normal_fragment_begin: Qf, clearcoat_normal_fragment_maps: ep, clearcoat_pars_fragment: tp, iridescence_pars_fragment: np, opaque_fragment: ip, packing: sp, premultiplied_alpha_fragment: rp, project_vertex: op, dithering_fragment: ap, dithering_pars_fragment: lp, roughnessmap_fragment: cp, roughnessmap_pars_fragment: hp, shadowmap_pars_fragment: up, shadowmap_pars_vertex: dp, shadowmap_vertex: fp, shadowmask_pars_fragment: pp, skinbase_vertex: mp, skinning_pars_vertex: gp, skinning_vertex: _p, skinnormal_vertex: xp, specularmap_fragment: vp, specularmap_pars_fragment: Mp, tonemapping_fragment: yp, tonemapping_pars_fragment: Sp, transmission_fragment: Ep, transmission_pars_fragment: bp, uv_pars_fragment: Tp, uv_pars_vertex: Ap, uv_vertex: wp, worldpos_vertex: Rp, background_vert: Cp, background_frag: Pp, backgroundCube_vert: Lp, backgroundCube_frag: Dp, cube_vert: Ip, cube_frag: Up, depth_vert: Np, depth_frag: Fp, distanceRGBA_vert: Op, distanceRGBA_frag: Bp, equirect_vert: zp, equirect_frag: kp, linedashed_vert: Vp, linedashed_frag: Hp, meshbasic_vert: Gp, meshbasic_frag: Wp, meshlambert_vert: Xp, meshlambert_frag: Yp, meshmatcap_vert: qp, meshmatcap_frag: jp, meshnormal_vert: $p, meshnormal_frag: Kp, meshphong_vert: Zp, meshphong_frag: Jp, meshphysical_vert: Qp, meshphysical_frag: em, meshtoon_vert: tm, meshtoon_frag: nm, points_vert: im, points_frag: sm, shadow_vert: rm, shadow_frag: om, sprite_vert: am, sprite_frag: lm }, te = { common: { diffuse: { value: new Ee(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new De() }, alphaMap: { value: null }, alphaMapTransform: { value: new De() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new De() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new De() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new De() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new De() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new De() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new De() }, normalScale: { value: new Me(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new De() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new De() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new De() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new De() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Ee(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Ee(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new De() }, alphaTest: { value: 0 }, uvTransform: { value: new De() } }, sprite: { diffuse: { value: new Ee(16777215) }, opacity: { value: 1 }, center: { value: new Me(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new De() }, alphaMap: { value: null }, alphaMapTransform: { value: new De() }, alphaTest: { value: 0 } } }, nn = { basic: { uniforms: Rt([te.common, te.specularmap, te.envmap, te.aomap, te.lightmap, te.fog]), vertexShader: Ue.meshbasic_vert, fragmentShader: Ue.meshbasic_frag }, lambert: { uniforms: Rt([te.common, te.specularmap, te.envmap, te.aomap, te.lightmap, te.emissivemap, te.bumpmap, te.normalmap, te.displacementmap, te.fog, te.lights, { emissive: { value: new Ee(0) } }]), vertexShader: Ue.meshlambert_vert, fragmentShader: Ue.meshlambert_frag }, phong: { uniforms: Rt([te.common, te.specularmap, te.envmap, te.aomap, te.lightmap, te.emissivemap, te.bumpmap, te.normalmap, te.displacementmap, te.fog, te.lights, { emissive: { value: new Ee(0) }, specular: { value: new Ee(1118481) }, shininess: { value: 30 } }]), vertexShader: Ue.meshphong_vert, fragmentShader: Ue.meshphong_frag }, standard: { uniforms: Rt([te.common, te.envmap, te.aomap, te.lightmap, te.emissivemap, te.bumpmap, te.normalmap, te.displacementmap, te.roughnessmap, te.metalnessmap, te.fog, te.lights, { emissive: { value: new Ee(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Ue.meshphysical_vert, fragmentShader: Ue.meshphysical_frag }, toon: { uniforms: Rt([te.common, te.aomap, te.lightmap, te.emissivemap, te.bumpmap, te.normalmap, te.displacementmap, te.gradientmap, te.fog, te.lights, { emissive: { value: new Ee(0) } }]), vertexShader: Ue.meshtoon_vert, fragmentShader: Ue.meshtoon_frag }, matcap: { uniforms: Rt([te.common, te.bumpmap, te.normalmap, te.displacementmap, te.fog, { matcap: { value: null } }]), vertexShader: Ue.meshmatcap_vert, fragmentShader: Ue.meshmatcap_frag }, points: { uniforms: Rt([te.points, te.fog]), vertexShader: Ue.points_vert, fragmentShader: Ue.points_frag }, dashed: { uniforms: Rt([te.common, te.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Ue.linedashed_vert, fragmentShader: Ue.linedashed_frag }, depth: { uniforms: Rt([te.common, te.displacementmap]), vertexShader: Ue.depth_vert, fragmentShader: Ue.depth_frag }, normal: { uniforms: Rt([te.common, te.bumpmap, te.normalmap, te.displacementmap, { opacity: { value: 1 } }]), vertexShader: Ue.meshnormal_vert, fragmentShader: Ue.meshnormal_frag }, sprite: { uniforms: Rt([te.sprite, te.fog]), vertexShader: Ue.sprite_vert, fragmentShader: Ue.sprite_frag }, background: { uniforms: { uvTransform: { value: new De() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Ue.background_vert, fragmentShader: Ue.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new De() } }, vertexShader: Ue.backgroundCube_vert, fragmentShader: Ue.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Ue.cube_vert, fragmentShader: Ue.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Ue.equirect_vert, fragmentShader: Ue.equirect_frag }, distanceRGBA: { uniforms: Rt([te.common, te.displacementmap, { referencePosition: { value: new R() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Ue.distanceRGBA_vert, fragmentShader: Ue.distanceRGBA_frag }, shadow: { uniforms: Rt([te.lights, te.fog, { color: { value: new Ee(0) }, opacity: { value: 1 } }]), vertexShader: Ue.shadow_vert, fragmentShader: Ue.shadow_frag } };
nn.physical = { uniforms: Rt([nn.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new De() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new De() }, clearcoatNormalScale: { value: new Me(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new De() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new De() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new De() }, sheen: { value: 0 }, sheenColor: { value: new Ee(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new De() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new De() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new De() }, transmissionSamplerSize: { value: new Me() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new De() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Ee(0) }, specularColor: { value: new Ee(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new De() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new De() }, anisotropyVector: { value: new Me() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new De() } }]), vertexShader: Ue.meshphysical_vert, fragmentShader: Ue.meshphysical_frag };
const Qs = { r: 0, b: 0, g: 0 }, Yn = new ln(), cm = new Pe();
function hm(s, e, t, n, i, r, o) {
  const a = new Ee(0);
  let l = r === true ? 0 : 1, c, h, u = null, d = 0, p = null;
  function g(T) {
    let M = T.isScene === true ? T.background : null;
    return M && M.isTexture && (M = (T.backgroundBlurriness > 0 ? t : e).get(M)), M;
  }
  function _(T) {
    let M = false;
    const L = g(T);
    L === null ? f(a, l) : L && L.isColor && (f(L, 1), M = true);
    const C = s.xr.getEnvironmentBlendMode();
    C === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : C === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o), (s.autoClear || M) && (n.buffers.depth.setTest(true), n.buffers.depth.setMask(true), n.buffers.color.setMask(true), s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil));
  }
  function m(T, M) {
    const L = g(M);
    L && (L.isCubeTexture || L.mapping === gr) ? (h === void 0 && (h = new ft(new vs(1, 1, 1), new zn({ name: "BackgroundCubeMaterial", uniforms: Oi(nn.backgroundCube.uniforms), vertexShader: nn.backgroundCube.vertexShader, fragmentShader: nn.backgroundCube.fragmentShader, side: Ut, depthTest: false, depthWrite: false, fog: false })), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(C, A, N) {
      this.matrixWorld.copyPosition(N.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), i.update(h)), Yn.copy(M.backgroundRotation), Yn.x *= -1, Yn.y *= -1, Yn.z *= -1, L.isCubeTexture && L.isRenderTargetTexture === false && (Yn.y *= -1, Yn.z *= -1), h.material.uniforms.envMap.value = L, h.material.uniforms.flipEnvMap.value = L.isCubeTexture && L.isRenderTargetTexture === false ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = M.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = M.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(cm.makeRotationFromEuler(Yn)), h.material.toneMapped = He.getTransfer(L.colorSpace) !== Qe, (u !== L || d !== L.version || p !== s.toneMapping) && (h.material.needsUpdate = true, u = L, d = L.version, p = s.toneMapping), h.layers.enableAll(), T.unshift(h, h.geometry, h.material, 0, 0, null)) : L && L.isTexture && (c === void 0 && (c = new ft(new _r(2, 2), new zn({ name: "BackgroundMaterial", uniforms: Oi(nn.background.uniforms), vertexShader: nn.background.vertexShader, fragmentShader: nn.background.fragmentShader, side: bn, depthTest: false, depthWrite: false, fog: false })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), i.update(c)), c.material.uniforms.t2D.value = L, c.material.uniforms.backgroundIntensity.value = M.backgroundIntensity, c.material.toneMapped = He.getTransfer(L.colorSpace) !== Qe, L.matrixAutoUpdate === true && L.updateMatrix(), c.material.uniforms.uvTransform.value.copy(L.matrix), (u !== L || d !== L.version || p !== s.toneMapping) && (c.material.needsUpdate = true, u = L, d = L.version, p = s.toneMapping), c.layers.enableAll(), T.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function f(T, M) {
    T.getRGB(Qs, Ac(s)), n.buffers.color.setClear(Qs.r, Qs.g, Qs.b, M, o);
  }
  function b() {
    h !== void 0 && (h.geometry.dispose(), h.material.dispose(), h = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
  }
  return { getClearColor: function() {
    return a;
  }, setClearColor: function(T, M = 1) {
    a.set(T), l = M, f(a, l);
  }, getClearAlpha: function() {
    return l;
  }, setClearAlpha: function(T) {
    l = T, f(a, l);
  }, render: _, addToRenderList: m, dispose: b };
}
function um(s, e) {
  const t = s.getParameter(s.MAX_VERTEX_ATTRIBS), n = {}, i = d(null);
  let r = i, o = false;
  function a(y, P, G, z, j) {
    let $ = false;
    const X = u(z, G, P);
    r !== X && (r = X, c(r.object)), $ = p(y, z, G, j), $ && g(y, z, G, j), j !== null && e.update(j, s.ELEMENT_ARRAY_BUFFER), ($ || o) && (o = false, M(y, P, G, z), j !== null && s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, e.get(j).buffer));
  }
  function l() {
    return s.createVertexArray();
  }
  function c(y) {
    return s.bindVertexArray(y);
  }
  function h(y) {
    return s.deleteVertexArray(y);
  }
  function u(y, P, G) {
    const z = G.wireframe === true;
    let j = n[y.id];
    j === void 0 && (j = {}, n[y.id] = j);
    let $ = j[P.id];
    $ === void 0 && ($ = {}, j[P.id] = $);
    let X = $[z];
    return X === void 0 && (X = d(l()), $[z] = X), X;
  }
  function d(y) {
    const P = [], G = [], z = [];
    for (let j = 0; j < t; j++) P[j] = 0, G[j] = 0, z[j] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: P, enabledAttributes: G, attributeDivisors: z, object: y, attributes: {}, index: null };
  }
  function p(y, P, G, z) {
    const j = r.attributes, $ = P.attributes;
    let X = 0;
    const Z = G.getAttributes();
    for (const V in Z) if (Z[V].location >= 0) {
      const he = j[V];
      let xe = $[V];
      if (xe === void 0 && (V === "instanceMatrix" && y.instanceMatrix && (xe = y.instanceMatrix), V === "instanceColor" && y.instanceColor && (xe = y.instanceColor)), he === void 0 || he.attribute !== xe || xe && he.data !== xe.data) return true;
      X++;
    }
    return r.attributesNum !== X || r.index !== z;
  }
  function g(y, P, G, z) {
    const j = {}, $ = P.attributes;
    let X = 0;
    const Z = G.getAttributes();
    for (const V in Z) if (Z[V].location >= 0) {
      let he = $[V];
      he === void 0 && (V === "instanceMatrix" && y.instanceMatrix && (he = y.instanceMatrix), V === "instanceColor" && y.instanceColor && (he = y.instanceColor));
      const xe = {};
      xe.attribute = he, he && he.data && (xe.data = he.data), j[V] = xe, X++;
    }
    r.attributes = j, r.attributesNum = X, r.index = z;
  }
  function _() {
    const y = r.newAttributes;
    for (let P = 0, G = y.length; P < G; P++) y[P] = 0;
  }
  function m(y) {
    f(y, 0);
  }
  function f(y, P) {
    const G = r.newAttributes, z = r.enabledAttributes, j = r.attributeDivisors;
    G[y] = 1, z[y] === 0 && (s.enableVertexAttribArray(y), z[y] = 1), j[y] !== P && (s.vertexAttribDivisor(y, P), j[y] = P);
  }
  function b() {
    const y = r.newAttributes, P = r.enabledAttributes;
    for (let G = 0, z = P.length; G < z; G++) P[G] !== y[G] && (s.disableVertexAttribArray(G), P[G] = 0);
  }
  function T(y, P, G, z, j, $, X) {
    X === true ? s.vertexAttribIPointer(y, P, G, j, $) : s.vertexAttribPointer(y, P, G, z, j, $);
  }
  function M(y, P, G, z) {
    _();
    const j = z.attributes, $ = G.getAttributes(), X = P.defaultAttributeValues;
    for (const Z in $) {
      const V = $[Z];
      if (V.location >= 0) {
        let se = j[Z];
        if (se === void 0 && (Z === "instanceMatrix" && y.instanceMatrix && (se = y.instanceMatrix), Z === "instanceColor" && y.instanceColor && (se = y.instanceColor)), se !== void 0) {
          const he = se.normalized, xe = se.itemSize, Fe = e.get(se);
          if (Fe === void 0) continue;
          const tt = Fe.buffer, W = Fe.type, ee = Fe.bytesPerElement, me = W === s.INT || W === s.UNSIGNED_INT || se.gpuType === ea;
          if (se.isInterleavedBufferAttribute) {
            const re = se.data, be = re.stride, Ye = se.offset;
            if (re.isInstancedInterleavedBuffer) {
              for (let Ae = 0; Ae < V.locationSize; Ae++) f(V.location + Ae, re.meshPerAttribute);
              y.isInstancedMesh !== true && z._maxInstanceCount === void 0 && (z._maxInstanceCount = re.meshPerAttribute * re.count);
            } else for (let Ae = 0; Ae < V.locationSize; Ae++) m(V.location + Ae);
            s.bindBuffer(s.ARRAY_BUFFER, tt);
            for (let Ae = 0; Ae < V.locationSize; Ae++) T(V.location + Ae, xe / V.locationSize, W, he, be * ee, (Ye + xe / V.locationSize * Ae) * ee, me);
          } else {
            if (se.isInstancedBufferAttribute) {
              for (let re = 0; re < V.locationSize; re++) f(V.location + re, se.meshPerAttribute);
              y.isInstancedMesh !== true && z._maxInstanceCount === void 0 && (z._maxInstanceCount = se.meshPerAttribute * se.count);
            } else for (let re = 0; re < V.locationSize; re++) m(V.location + re);
            s.bindBuffer(s.ARRAY_BUFFER, tt);
            for (let re = 0; re < V.locationSize; re++) T(V.location + re, xe / V.locationSize, W, he, xe * ee, xe / V.locationSize * re * ee, me);
          }
        } else if (X !== void 0) {
          const he = X[Z];
          if (he !== void 0) switch (he.length) {
            case 2:
              s.vertexAttrib2fv(V.location, he);
              break;
            case 3:
              s.vertexAttrib3fv(V.location, he);
              break;
            case 4:
              s.vertexAttrib4fv(V.location, he);
              break;
            default:
              s.vertexAttrib1fv(V.location, he);
          }
        }
      }
    }
    b();
  }
  function L() {
    N();
    for (const y in n) {
      const P = n[y];
      for (const G in P) {
        const z = P[G];
        for (const j in z) h(z[j].object), delete z[j];
        delete P[G];
      }
      delete n[y];
    }
  }
  function C(y) {
    if (n[y.id] === void 0) return;
    const P = n[y.id];
    for (const G in P) {
      const z = P[G];
      for (const j in z) h(z[j].object), delete z[j];
      delete P[G];
    }
    delete n[y.id];
  }
  function A(y) {
    for (const P in n) {
      const G = n[P];
      if (G[y.id] === void 0) continue;
      const z = G[y.id];
      for (const j in z) h(z[j].object), delete z[j];
      delete G[y.id];
    }
  }
  function N() {
    S(), o = true, r !== i && (r = i, c(r.object));
  }
  function S() {
    i.geometry = null, i.program = null, i.wireframe = false;
  }
  return { setup: a, reset: N, resetDefaultState: S, dispose: L, releaseStatesOfGeometry: C, releaseStatesOfProgram: A, initAttributes: _, enableAttribute: m, disableUnusedAttributes: b };
}
function dm(s, e, t) {
  let n;
  function i(c) {
    n = c;
  }
  function r(c, h) {
    s.drawArrays(n, c, h), t.update(h, n, 1);
  }
  function o(c, h, u) {
    u !== 0 && (s.drawArraysInstanced(n, c, h, u), t.update(h, n, u));
  }
  function a(c, h, u) {
    if (u === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, h, 0, u);
    let p = 0;
    for (let g = 0; g < u; g++) p += h[g];
    t.update(p, n, 1);
  }
  function l(c, h, u, d) {
    if (u === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null) for (let g = 0; g < c.length; g++) o(c[g], h[g], d[g]);
    else {
      p.multiDrawArraysInstancedWEBGL(n, c, 0, h, 0, d, 0, u);
      let g = 0;
      for (let _ = 0; _ < u; _++) g += h[_] * d[_];
      t.update(g, n, 1);
    }
  }
  this.setMode = i, this.render = r, this.renderInstances = o, this.renderMultiDraw = a, this.renderMultiDrawInstances = l;
}
function fm(s, e, t, n) {
  let i;
  function r() {
    if (i !== void 0) return i;
    if (e.has("EXT_texture_filter_anisotropic") === true) {
      const A = e.get("EXT_texture_filter_anisotropic");
      i = s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else i = 0;
    return i;
  }
  function o(A) {
    return !(A !== Xt && n.convert(A) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function a(A) {
    const N = A === xs && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(A !== Tn && n.convert(A) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE) && A !== Jt && !N);
  }
  function l(A) {
    if (A === "highp") {
      if (s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.HIGH_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT).precision > 0) return "highp";
      A = "mediump";
    }
    return A === "mediump" && s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.MEDIUM_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const h = l(c);
  h !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", h, "instead."), c = h);
  const u = t.logarithmicDepthBuffer === true, d = t.reverseDepthBuffer === true && e.has("EXT_clip_control"), p = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS), g = s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS), _ = s.getParameter(s.MAX_TEXTURE_SIZE), m = s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE), f = s.getParameter(s.MAX_VERTEX_ATTRIBS), b = s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS), T = s.getParameter(s.MAX_VARYING_VECTORS), M = s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS), L = g > 0, C = s.getParameter(s.MAX_SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: r, getMaxPrecision: l, textureFormatReadable: o, textureTypeReadable: a, precision: c, logarithmicDepthBuffer: u, reverseDepthBuffer: d, maxTextures: p, maxVertexTextures: g, maxTextureSize: _, maxCubemapSize: m, maxAttributes: f, maxVertexUniforms: b, maxVaryings: T, maxFragmentUniforms: M, vertexTextures: L, maxSamples: C };
}
function pm(s) {
  const e = this;
  let t = null, n = 0, i = false, r = false;
  const o = new In(), a = new De(), l = { value: null, needsUpdate: false };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d) {
    const p = u.length !== 0 || d || n !== 0 || i;
    return i = d, n = u.length, p;
  }, this.beginShadows = function() {
    r = true, h(null);
  }, this.endShadows = function() {
    r = false;
  }, this.setGlobalState = function(u, d) {
    t = h(u, d, 0);
  }, this.setState = function(u, d, p) {
    const g = u.clippingPlanes, _ = u.clipIntersection, m = u.clipShadows, f = s.get(u);
    if (!i || g === null || g.length === 0 || r && !m) r ? h(null) : c();
    else {
      const b = r ? 0 : n, T = b * 4;
      let M = f.clippingState || null;
      l.value = M, M = h(g, d, T, p);
      for (let L = 0; L !== T; ++L) M[L] = t[L];
      f.clippingState = M, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += b;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(u, d, p, g) {
    const _ = u !== null ? u.length : 0;
    let m = null;
    if (_ !== 0) {
      if (m = l.value, g !== true || m === null) {
        const f = p + _ * 4, b = d.matrixWorldInverse;
        a.getNormalMatrix(b), (m === null || m.length < f) && (m = new Float32Array(f));
        for (let T = 0, M = p; T !== _; ++T, M += 4) o.copy(u[T]).applyMatrix4(b, a), o.normal.toArray(m, M), m[M + 3] = o.constant;
      }
      l.value = m, l.needsUpdate = true;
    }
    return e.numPlanes = _, e.numIntersection = 0, m;
  }
}
function mm(s) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === go ? o.mapping = Li : a === _o && (o.mapping = Di), o;
  }
  function n(o) {
    if (o && o.isTexture) {
      const a = o.mapping;
      if (a === go || a === _o) if (e.has(o)) {
        const l = e.get(o).texture;
        return t(l, o.mapping);
      } else {
        const l = o.image;
        if (l && l.height > 0) {
          const c = new Iu(l.height);
          return c.fromEquirectangularTexture(s, o), e.set(o, c), o.addEventListener("dispose", i), t(c.texture, o.mapping);
        } else return null;
      }
    }
    return o;
  }
  function i(o) {
    const a = o.target;
    a.removeEventListener("dispose", i);
    const l = e.get(a);
    l !== void 0 && (e.delete(a), l.dispose());
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: n, dispose: r };
}
const bi = 4, Al = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Jn = 20, $r = new Es(), wl = new Ee();
let Kr = null, Zr = 0, Jr = 0, Qr = false;
const Kn = (1 + Math.sqrt(5)) / 2, Si = 1 / Kn, Rl = [new R(-Kn, Si, 0), new R(Kn, Si, 0), new R(-Si, 0, Kn), new R(Si, 0, Kn), new R(0, Kn, -Si), new R(0, Kn, Si), new R(-1, 1, -1), new R(1, 1, -1), new R(-1, 1, 1), new R(1, 1, 1)], gm = new R();
class Cl {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100, r = {}) {
    const { size: o = 256, position: a = gm } = r;
    Kr = this._renderer.getRenderTarget(), Zr = this._renderer.getActiveCubeFace(), Jr = this._renderer.getActiveMipmapLevel(), Qr = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(o);
    const l = this._allocateTargets();
    return l.depthBuffer = true, this._sceneToCubeUV(e, n, i, l, a), t > 0 && this._blur(l, 0, 0, t), this._applyPMREM(l), this._cleanup(l), l;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Dl(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Ll(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Kr, Zr, Jr), this._renderer.xr.enabled = Qr, e.scissorTest = false, er(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Li || e.mapping === Di ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Kr = this._renderer.getRenderTarget(), Zr = this._renderer.getActiveCubeFace(), Jr = this._renderer.getActiveMipmapLevel(), Qr = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = { magFilter: Bt, minFilter: Bt, generateMipmaps: false, type: xs, format: Xt, colorSpace: Lt, depthBuffer: false }, i = Pl(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Pl(e, t, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = _m(r)), this._blurMaterial = xm(r, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new ft(this._lodPlanes[0], e);
    this._renderer.compile(t, $r);
  }
  _sceneToCubeUV(e, t, n, i, r) {
    const l = new bt(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], h = [1, 1, 1, -1, -1, -1], u = this._renderer, d = u.autoClear, p = u.toneMapping;
    u.getClearColor(wl), u.toneMapping = Bn, u.autoClear = false;
    const g = new rn({ name: "PMREM.Background", side: Ut, depthWrite: false, depthTest: false }), _ = new ft(new vs(), g);
    let m = false;
    const f = e.background;
    f ? f.isColor && (g.color.copy(f), e.background = null, m = true) : (g.color.copy(wl), m = true);
    for (let b = 0; b < 6; b++) {
      const T = b % 3;
      T === 0 ? (l.up.set(0, c[b], 0), l.position.set(r.x, r.y, r.z), l.lookAt(r.x + h[b], r.y, r.z)) : T === 1 ? (l.up.set(0, 0, c[b]), l.position.set(r.x, r.y, r.z), l.lookAt(r.x, r.y + h[b], r.z)) : (l.up.set(0, c[b], 0), l.position.set(r.x, r.y, r.z), l.lookAt(r.x, r.y, r.z + h[b]));
      const M = this._cubeSize;
      er(i, T * M, b > 2 ? M : 0, M, M), u.setRenderTarget(i), m && u.render(_, l), u.render(e, l);
    }
    _.geometry.dispose(), _.material.dispose(), u.toneMapping = p, u.autoClear = d, e.background = f;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === Li || e.mapping === Di;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Dl()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Ll());
    const r = i ? this._cubemapMaterial : this._equirectMaterial, o = new ft(this._lodPlanes[0], r), a = r.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    er(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, $r);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = false;
    const i = this._lodPlanes.length;
    for (let r = 1; r < i; r++) {
      const o = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), a = Rl[(i - r - 1) % Rl.length];
      this._blur(e, r - 1, r, o, a);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, r) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(e, o, t, n, i, "latitudinal", r), this._halfBlur(o, e, n, n, i, "longitudinal", r);
  }
  _halfBlur(e, t, n, i, r, o, a) {
    const l = this._renderer, c = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
    const h = 3, u = new ft(this._lodPlanes[i], c), d = c.uniforms, p = this._sizeLods[n] - 1, g = isFinite(r) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * Jn - 1), _ = r / g, m = isFinite(r) ? 1 + Math.floor(h * _) : Jn;
    m > Jn && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jn}`);
    const f = [];
    let b = 0;
    for (let A = 0; A < Jn; ++A) {
      const N = A / _, S = Math.exp(-N * N / 2);
      f.push(S), A === 0 ? b += S : A < m && (b += 2 * S);
    }
    for (let A = 0; A < f.length; A++) f[A] = f[A] / b;
    d.envMap.value = e.texture, d.samples.value = m, d.weights.value = f, d.latitudinal.value = o === "latitudinal", a && (d.poleAxis.value = a);
    const { _lodMax: T } = this;
    d.dTheta.value = g, d.mipInt.value = T - n;
    const M = this._sizeLods[i], L = 3 * M * (i > T - bi ? i - T + bi : 0), C = 4 * (this._cubeSize - M);
    er(t, L, C, 3 * M, 2 * M), l.setRenderTarget(t), l.render(u, $r);
  }
}
function _m(s) {
  const e = [], t = [], n = [];
  let i = s;
  const r = s - bi + 1 + Al.length;
  for (let o = 0; o < r; o++) {
    const a = Math.pow(2, i);
    t.push(a);
    let l = 1 / a;
    o > s - bi ? l = Al[o - s + bi - 1] : o === 0 && (l = 0), n.push(l);
    const c = 1 / (a - 2), h = -c, u = 1 + c, d = [h, h, u, h, u, u, h, h, u, u, h, u], p = 6, g = 6, _ = 3, m = 2, f = 1, b = new Float32Array(_ * g * p), T = new Float32Array(m * g * p), M = new Float32Array(f * g * p);
    for (let C = 0; C < p; C++) {
      const A = C % 3 * 2 / 3 - 1, N = C > 2 ? 0 : -1, S = [A, N, 0, A + 2 / 3, N, 0, A + 2 / 3, N + 1, 0, A, N, 0, A + 2 / 3, N + 1, 0, A, N + 1, 0];
      b.set(S, _ * g * C), T.set(d, m * g * C);
      const y = [C, C, C, C, C, C];
      M.set(y, f * g * C);
    }
    const L = new xt();
    L.setAttribute("position", new Pt(b, _)), L.setAttribute("uv", new Pt(T, m)), L.setAttribute("faceIndex", new Pt(M, f)), e.push(L), i > bi && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Pl(s, e, t) {
  const n = new ti(s, e, t);
  return n.texture.mapping = gr, n.texture.name = "PMREM.cubeUv", n.scissorTest = true, n;
}
function er(s, e, t, n, i) {
  s.viewport.set(e, t, n, i), s.scissor.set(e, t, n, i);
}
function xm(s, e, t) {
  const n = new Float32Array(Jn), i = new R(0, 1, 0);
  return new zn({ name: "SphericalGaussianBlur", defines: { n: Jn, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${s}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: i } }, vertexShader: xa(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: On, depthTest: false, depthWrite: false });
}
function Ll() {
  return new zn({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: xa(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: On, depthTest: false, depthWrite: false });
}
function Dl() {
  return new zn({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: xa(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: On, depthTest: false, depthWrite: false });
}
function xa() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function vm(s) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const l = a.mapping, c = l === go || l === _o, h = l === Li || l === Di;
      if (c || h) {
        let u = e.get(a);
        const d = u !== void 0 ? u.texture.pmremVersion : 0;
        if (a.isRenderTargetTexture && a.pmremVersion !== d) return t === null && (t = new Cl(s)), u = c ? t.fromEquirectangular(a, u) : t.fromCubemap(a, u), u.texture.pmremVersion = a.pmremVersion, e.set(a, u), u.texture;
        if (u !== void 0) return u.texture;
        {
          const p = a.image;
          return c && p && p.height > 0 || h && p && i(p) ? (t === null && (t = new Cl(s)), u = c ? t.fromEquirectangular(a) : t.fromCubemap(a), u.texture.pmremVersion = a.pmremVersion, e.set(a, u), a.addEventListener("dispose", r), u.texture) : null;
        }
      }
    }
    return a;
  }
  function i(a) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++) a[h] !== void 0 && l++;
    return l === c;
  }
  function r(a) {
    const l = a.target;
    l.removeEventListener("dispose", r);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function o() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return { get: n, dispose: o };
}
function Mm(s) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = s.getExtension("WEBGL_depth_texture") || s.getExtension("MOZ_WEBGL_depth_texture") || s.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = s.getExtension("EXT_texture_filter_anisotropic") || s.getExtension("MOZ_EXT_texture_filter_anisotropic") || s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = s.getExtension("WEBGL_compressed_texture_s3tc") || s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = s.getExtension("WEBGL_compressed_texture_pvrtc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = s.getExtension(n);
    }
    return e[n] = i, i;
  }
  return { has: function(n) {
    return t(n) !== null;
  }, init: function() {
    t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
  }, get: function(n) {
    const i = t(n);
    return i === null && $n("THREE.WebGLRenderer: " + n + " extension not supported."), i;
  } };
}
function ym(s, e, t, n) {
  const i = {}, r = /* @__PURE__ */ new WeakMap();
  function o(u) {
    const d = u.target;
    d.index !== null && e.remove(d.index);
    for (const g in d.attributes) e.remove(d.attributes[g]);
    d.removeEventListener("dispose", o), delete i[d.id];
    const p = r.get(d);
    p && (e.remove(p), r.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === true && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function a(u, d) {
    return i[d.id] === true || (d.addEventListener("dispose", o), i[d.id] = true, t.memory.geometries++), d;
  }
  function l(u) {
    const d = u.attributes;
    for (const p in d) e.update(d[p], s.ARRAY_BUFFER);
  }
  function c(u) {
    const d = [], p = u.index, g = u.attributes.position;
    let _ = 0;
    if (p !== null) {
      const b = p.array;
      _ = p.version;
      for (let T = 0, M = b.length; T < M; T += 3) {
        const L = b[T + 0], C = b[T + 1], A = b[T + 2];
        d.push(L, C, C, A, A, L);
      }
    } else if (g !== void 0) {
      const b = g.array;
      _ = g.version;
      for (let T = 0, M = b.length / 3 - 1; T < M; T += 3) {
        const L = T + 0, C = T + 1, A = T + 2;
        d.push(L, C, C, A, A, L);
      }
    } else return;
    const m = new (yc(d) ? Tc : bc)(d, 1);
    m.version = _;
    const f = r.get(u);
    f && e.remove(f), r.set(u, m);
  }
  function h(u) {
    const d = r.get(u);
    if (d) {
      const p = u.index;
      p !== null && d.version < p.version && c(u);
    } else c(u);
    return r.get(u);
  }
  return { get: a, update: l, getWireframeAttribute: h };
}
function Sm(s, e, t) {
  let n;
  function i(d) {
    n = d;
  }
  let r, o;
  function a(d) {
    r = d.type, o = d.bytesPerElement;
  }
  function l(d, p) {
    s.drawElements(n, p, r, d * o), t.update(p, n, 1);
  }
  function c(d, p, g) {
    g !== 0 && (s.drawElementsInstanced(n, p, r, d * o, g), t.update(p, n, g));
  }
  function h(d, p, g) {
    if (g === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, p, 0, r, d, 0, g);
    let m = 0;
    for (let f = 0; f < g; f++) m += p[f];
    t.update(m, n, 1);
  }
  function u(d, p, g, _) {
    if (g === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null) for (let f = 0; f < d.length; f++) c(d[f] / o, p[f], _[f]);
    else {
      m.multiDrawElementsInstancedWEBGL(n, p, 0, r, d, 0, _, 0, g);
      let f = 0;
      for (let b = 0; b < g; b++) f += p[b] * _[b];
      t.update(f, n, 1);
    }
  }
  this.setMode = i, this.setIndex = a, this.render = l, this.renderInstances = c, this.renderMultiDraw = h, this.renderMultiDrawInstances = u;
}
function Em(s) {
  const e = { geometries: 0, textures: 0 }, t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(r, o, a) {
    switch (t.calls++, o) {
      case s.TRIANGLES:
        t.triangles += a * (r / 3);
        break;
      case s.LINES:
        t.lines += a * (r / 2);
        break;
      case s.LINE_STRIP:
        t.lines += a * (r - 1);
        break;
      case s.LINE_LOOP:
        t.lines += a * r;
        break;
      case s.POINTS:
        t.points += a * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function i() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return { memory: e, render: t, programs: null, autoReset: true, reset: i, update: n };
}
function bm(s, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), i = new qe();
  function r(o, a, l) {
    const c = o.morphTargetInfluences, h = a.morphAttributes.position || a.morphAttributes.normal || a.morphAttributes.color, u = h !== void 0 ? h.length : 0;
    let d = n.get(a);
    if (d === void 0 || d.count !== u) {
      let y = function() {
        N.dispose(), n.delete(a), a.removeEventListener("dispose", y);
      };
      var p = y;
      d !== void 0 && d.texture.dispose();
      const g = a.morphAttributes.position !== void 0, _ = a.morphAttributes.normal !== void 0, m = a.morphAttributes.color !== void 0, f = a.morphAttributes.position || [], b = a.morphAttributes.normal || [], T = a.morphAttributes.color || [];
      let M = 0;
      g === true && (M = 1), _ === true && (M = 2), m === true && (M = 3);
      let L = a.attributes.position.count * M, C = 1;
      L > e.maxTextureSize && (C = Math.ceil(L / e.maxTextureSize), L = e.maxTextureSize);
      const A = new Float32Array(L * C * 4 * u), N = new Sc(A, L, C, u);
      N.type = Jt, N.needsUpdate = true;
      const S = M * 4;
      for (let P = 0; P < u; P++) {
        const G = f[P], z = b[P], j = T[P], $ = L * C * 4 * P;
        for (let X = 0; X < G.count; X++) {
          const Z = X * S;
          g === true && (i.fromBufferAttribute(G, X), A[$ + Z + 0] = i.x, A[$ + Z + 1] = i.y, A[$ + Z + 2] = i.z, A[$ + Z + 3] = 0), _ === true && (i.fromBufferAttribute(z, X), A[$ + Z + 4] = i.x, A[$ + Z + 5] = i.y, A[$ + Z + 6] = i.z, A[$ + Z + 7] = 0), m === true && (i.fromBufferAttribute(j, X), A[$ + Z + 8] = i.x, A[$ + Z + 9] = i.y, A[$ + Z + 10] = i.z, A[$ + Z + 11] = j.itemSize === 4 ? i.w : 1);
        }
      }
      d = { count: u, texture: N, size: new Me(L, C) }, n.set(a, d), a.addEventListener("dispose", y);
    }
    if (o.isInstancedMesh === true && o.morphTexture !== null) l.getUniforms().setValue(s, "morphTexture", o.morphTexture, t);
    else {
      let g = 0;
      for (let m = 0; m < c.length; m++) g += c[m];
      const _ = a.morphTargetsRelative ? 1 : 1 - g;
      l.getUniforms().setValue(s, "morphTargetBaseInfluence", _), l.getUniforms().setValue(s, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(s, "morphTargetsTexture", d.texture, t), l.getUniforms().setValue(s, "morphTargetsTextureSize", d.size);
  }
  return { update: r };
}
function Tm(s, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function r(l) {
    const c = n.render.frame, h = l.geometry, u = e.get(l, h);
    if (i.get(u) !== c && (e.update(u), i.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === false && l.addEventListener("dispose", a), i.get(l) !== c && (t.update(l.instanceMatrix, s.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, s.ARRAY_BUFFER), i.set(l, c))), l.isSkinnedMesh) {
      const d = l.skeleton;
      i.get(d) !== c && (d.update(), i.set(d, c));
    }
    return u;
  }
  function o() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener("dispose", a), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: r, dispose: o };
}
const Hc = new pt(), Il = new Nc(1, 1), Gc = new Sc(), Wc = new gu(), Xc = new wc(), Ul = [], Nl = [], Fl = new Float32Array(16), Ol = new Float32Array(9), Bl = new Float32Array(4);
function Xi(s, e, t) {
  const n = s[0];
  if (n <= 0 || n > 0) return s;
  const i = e * t;
  let r = Ul[i];
  if (r === void 0 && (r = new Float32Array(i), Ul[i] = r), e !== 0) {
    n.toArray(r, 0);
    for (let o = 1, a = 0; o !== e; ++o) a += t, s[o].toArray(r, a);
  }
  return r;
}
function mt(s, e) {
  if (s.length !== e.length) return false;
  for (let t = 0, n = s.length; t < n; t++) if (s[t] !== e[t]) return false;
  return true;
}
function gt(s, e) {
  for (let t = 0, n = e.length; t < n; t++) s[t] = e[t];
}
function xr(s, e) {
  let t = Nl[e];
  t === void 0 && (t = new Int32Array(e), Nl[e] = t);
  for (let n = 0; n !== e; ++n) t[n] = s.allocateTextureUnit();
  return t;
}
function Am(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1f(this.addr, e), t[0] = e);
}
function wm(s, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (s.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (mt(t, e)) return;
    s.uniform2fv(this.addr, e), gt(t, e);
  }
}
function Rm(s, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (s.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (mt(t, e)) return;
    s.uniform3fv(this.addr, e), gt(t, e);
  }
}
function Cm(s, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (mt(t, e)) return;
    s.uniform4fv(this.addr, e), gt(t, e);
  }
}
function Pm(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (mt(t, e)) return;
    s.uniformMatrix2fv(this.addr, false, e), gt(t, e);
  } else {
    if (mt(t, n)) return;
    Bl.set(n), s.uniformMatrix2fv(this.addr, false, Bl), gt(t, n);
  }
}
function Lm(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (mt(t, e)) return;
    s.uniformMatrix3fv(this.addr, false, e), gt(t, e);
  } else {
    if (mt(t, n)) return;
    Ol.set(n), s.uniformMatrix3fv(this.addr, false, Ol), gt(t, n);
  }
}
function Dm(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (mt(t, e)) return;
    s.uniformMatrix4fv(this.addr, false, e), gt(t, e);
  } else {
    if (mt(t, n)) return;
    Fl.set(n), s.uniformMatrix4fv(this.addr, false, Fl), gt(t, n);
  }
}
function Im(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1i(this.addr, e), t[0] = e);
}
function Um(s, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (s.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (mt(t, e)) return;
    s.uniform2iv(this.addr, e), gt(t, e);
  }
}
function Nm(s, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (mt(t, e)) return;
    s.uniform3iv(this.addr, e), gt(t, e);
  }
}
function Fm(s, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (mt(t, e)) return;
    s.uniform4iv(this.addr, e), gt(t, e);
  }
}
function Om(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1ui(this.addr, e), t[0] = e);
}
function Bm(s, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (s.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (mt(t, e)) return;
    s.uniform2uiv(this.addr, e), gt(t, e);
  }
}
function zm(s, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (mt(t, e)) return;
    s.uniform3uiv(this.addr, e), gt(t, e);
  }
}
function km(s, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (mt(t, e)) return;
    s.uniform4uiv(this.addr, e), gt(t, e);
  }
}
function Vm(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i);
  let r;
  this.type === s.SAMPLER_2D_SHADOW ? (Il.compareFunction = vc, r = Il) : r = Hc, t.setTexture2D(e || r, i);
}
function Hm(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || Wc, i);
}
function Gm(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || Xc, i);
}
function Wm(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || Gc, i);
}
function Xm(s) {
  switch (s) {
    case 5126:
      return Am;
    case 35664:
      return wm;
    case 35665:
      return Rm;
    case 35666:
      return Cm;
    case 35674:
      return Pm;
    case 35675:
      return Lm;
    case 35676:
      return Dm;
    case 5124:
    case 35670:
      return Im;
    case 35667:
    case 35671:
      return Um;
    case 35668:
    case 35672:
      return Nm;
    case 35669:
    case 35673:
      return Fm;
    case 5125:
      return Om;
    case 36294:
      return Bm;
    case 36295:
      return zm;
    case 36296:
      return km;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Vm;
    case 35679:
    case 36299:
    case 36307:
      return Hm;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Gm;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Wm;
  }
}
function Ym(s, e) {
  s.uniform1fv(this.addr, e);
}
function qm(s, e) {
  const t = Xi(e, this.size, 2);
  s.uniform2fv(this.addr, t);
}
function jm(s, e) {
  const t = Xi(e, this.size, 3);
  s.uniform3fv(this.addr, t);
}
function $m(s, e) {
  const t = Xi(e, this.size, 4);
  s.uniform4fv(this.addr, t);
}
function Km(s, e) {
  const t = Xi(e, this.size, 4);
  s.uniformMatrix2fv(this.addr, false, t);
}
function Zm(s, e) {
  const t = Xi(e, this.size, 9);
  s.uniformMatrix3fv(this.addr, false, t);
}
function Jm(s, e) {
  const t = Xi(e, this.size, 16);
  s.uniformMatrix4fv(this.addr, false, t);
}
function Qm(s, e) {
  s.uniform1iv(this.addr, e);
}
function eg(s, e) {
  s.uniform2iv(this.addr, e);
}
function tg(s, e) {
  s.uniform3iv(this.addr, e);
}
function ng(s, e) {
  s.uniform4iv(this.addr, e);
}
function ig(s, e) {
  s.uniform1uiv(this.addr, e);
}
function sg(s, e) {
  s.uniform2uiv(this.addr, e);
}
function rg(s, e) {
  s.uniform3uiv(this.addr, e);
}
function og(s, e) {
  s.uniform4uiv(this.addr, e);
}
function ag(s, e, t) {
  const n = this.cache, i = e.length, r = xr(t, i);
  mt(n, r) || (s.uniform1iv(this.addr, r), gt(n, r));
  for (let o = 0; o !== i; ++o) t.setTexture2D(e[o] || Hc, r[o]);
}
function lg(s, e, t) {
  const n = this.cache, i = e.length, r = xr(t, i);
  mt(n, r) || (s.uniform1iv(this.addr, r), gt(n, r));
  for (let o = 0; o !== i; ++o) t.setTexture3D(e[o] || Wc, r[o]);
}
function cg(s, e, t) {
  const n = this.cache, i = e.length, r = xr(t, i);
  mt(n, r) || (s.uniform1iv(this.addr, r), gt(n, r));
  for (let o = 0; o !== i; ++o) t.setTextureCube(e[o] || Xc, r[o]);
}
function hg(s, e, t) {
  const n = this.cache, i = e.length, r = xr(t, i);
  mt(n, r) || (s.uniform1iv(this.addr, r), gt(n, r));
  for (let o = 0; o !== i; ++o) t.setTexture2DArray(e[o] || Gc, r[o]);
}
function ug(s) {
  switch (s) {
    case 5126:
      return Ym;
    case 35664:
      return qm;
    case 35665:
      return jm;
    case 35666:
      return $m;
    case 35674:
      return Km;
    case 35675:
      return Zm;
    case 35676:
      return Jm;
    case 5124:
    case 35670:
      return Qm;
    case 35667:
    case 35671:
      return eg;
    case 35668:
    case 35672:
      return tg;
    case 35669:
    case 35673:
      return ng;
    case 5125:
      return ig;
    case 36294:
      return sg;
    case 36295:
      return rg;
    case 36296:
      return og;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return ag;
    case 35679:
    case 36299:
    case 36307:
      return lg;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return cg;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return hg;
  }
}
class dg {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Xm(t.type);
  }
}
class fg {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = ug(t.type);
  }
}
class pg {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let r = 0, o = i.length; r !== o; ++r) {
      const a = i[r];
      a.setValue(e, t[a.id], n);
    }
  }
}
const eo = /(\w+)(\])?(\[|\.)?/g;
function zl(s, e) {
  s.seq.push(e), s.map[e.id] = e;
}
function mg(s, e, t) {
  const n = s.name, i = n.length;
  for (eo.lastIndex = 0; ; ) {
    const r = eo.exec(n), o = eo.lastIndex;
    let a = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === i) {
      zl(t, c === void 0 ? new dg(a, s, e) : new fg(a, s, e));
      break;
    } else {
      let u = t.map[a];
      u === void 0 && (u = new pg(a), zl(t, u)), t = u;
    }
  }
}
class cr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const r = e.getActiveUniform(t, i), o = e.getUniformLocation(t, r.name);
      mg(r, o, this);
    }
  }
  setValue(e, t, n, i) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let r = 0, o = t.length; r !== o; ++r) {
      const a = t[r], l = n[a.id];
      l.needsUpdate !== false && a.setValue(e, l.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
      const o = e[i];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function kl(s, e, t) {
  const n = s.createShader(e);
  return s.shaderSource(n, t), s.compileShader(n), n;
}
const gg = 37297;
let _g = 0;
function xg(s, e) {
  const t = s.split(`
`), n = [], i = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let o = i; o < r; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
const Vl = new De();
function vg(s) {
  He._getMatrix(Vl, He.workingColorSpace, s);
  const e = `mat3( ${Vl.elements.map((t) => t.toFixed(4))} )`;
  switch (He.getTransfer(s)) {
    case ur:
      return [e, "LinearTransferOETF"];
    case Qe:
      return [e, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", s), [e, "LinearTransferOETF"];
  }
}
function Hl(s, e, t) {
  const n = s.getShaderParameter(e, s.COMPILE_STATUS), i = s.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const o = parseInt(r[1]);
    return t.toUpperCase() + `

` + i + `

` + xg(s.getShaderSource(e), o);
  } else return i;
}
function Mg(s, e) {
  const t = vg(e);
  return [`vec4 ${s}( vec4 value ) {`, `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`, "}"].join(`
`);
}
function yg(s, e) {
  let t;
  switch (e) {
    case Th:
      t = "Linear";
      break;
    case Ah:
      t = "Reinhard";
      break;
    case wh:
      t = "Cineon";
      break;
    case Rh:
      t = "ACESFilmic";
      break;
    case Ph:
      t = "AgX";
      break;
    case Lh:
      t = "Neutral";
      break;
    case Ch:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + s + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const tr = new R();
function Sg() {
  He.getLuminanceCoefficients(tr);
  const s = tr.x.toFixed(4), e = tr.y.toFixed(4), t = tr.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${s}, ${e}, ${t} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function Eg(s) {
  return [s.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", s.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(os).join(`
`);
}
function bg(s) {
  const e = [];
  for (const t in s) {
    const n = s[t];
    n !== false && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Tg(s, e) {
  const t = {}, n = s.getProgramParameter(e, s.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const r = s.getActiveAttrib(e, i), o = r.name;
    let a = 1;
    r.type === s.FLOAT_MAT2 && (a = 2), r.type === s.FLOAT_MAT3 && (a = 3), r.type === s.FLOAT_MAT4 && (a = 4), t[o] = { type: r.type, location: s.getAttribLocation(e, o), locationSize: a };
  }
  return t;
}
function os(s) {
  return s !== "";
}
function Gl(s, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return s.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Wl(s, e) {
  return s.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Ag = /^[ \t]*#include +<([\w\d./]+)>/gm;
function $o(s) {
  return s.replace(Ag, Rg);
}
const wg = /* @__PURE__ */ new Map();
function Rg(s, e) {
  let t = Ue[e];
  if (t === void 0) {
    const n = wg.get(e);
    if (n !== void 0) t = Ue[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return $o(t);
}
const Cg = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Xl(s) {
  return s.replace(Cg, Pg);
}
function Pg(s, e, t, n) {
  let i = "";
  for (let r = parseInt(e); r < parseInt(t); r++) i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function Yl(s) {
  let e = `precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;
  return s.precision === "highp" ? e += `
#define HIGH_PRECISION` : s.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : s.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function Lg(s) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return s.shadowMapType === sc ? e = "SHADOWMAP_TYPE_PCF" : s.shadowMapType === sh ? e = "SHADOWMAP_TYPE_PCF_SOFT" : s.shadowMapType === vn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Dg(s) {
  let e = "ENVMAP_TYPE_CUBE";
  if (s.envMap) switch (s.envMapMode) {
    case Li:
    case Di:
      e = "ENVMAP_TYPE_CUBE";
      break;
    case gr:
      e = "ENVMAP_TYPE_CUBE_UV";
      break;
  }
  return e;
}
function Ig(s) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (s.envMap) switch (s.envMapMode) {
    case Di:
      e = "ENVMAP_MODE_REFRACTION";
      break;
  }
  return e;
}
function Ug(s) {
  let e = "ENVMAP_BLENDING_NONE";
  if (s.envMap) switch (s.combine) {
    case rc:
      e = "ENVMAP_BLENDING_MULTIPLY";
      break;
    case Eh:
      e = "ENVMAP_BLENDING_MIX";
      break;
    case bh:
      e = "ENVMAP_BLENDING_ADD";
      break;
  }
  return e;
}
function Ng(s) {
  const e = s.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function Fg(s, e, t, n) {
  const i = s.getContext(), r = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const l = Lg(t), c = Dg(t), h = Ig(t), u = Ug(t), d = Ng(t), p = Eg(t), g = bg(r), _ = i.createProgram();
  let m, f, b = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (m = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter(os).join(`
`), m.length > 0 && (m += `
`), f = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter(os).join(`
`), f.length > 0 && (f += `
`)) : (m = [Yl(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.batchingColor ? "#define USE_BATCHING_COLOR" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + h : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === false ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(os).join(`
`), f = [Yl(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + c : "", t.envMap ? "#define " + h : "", t.envMap ? "#define " + u : "", d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "", d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "", d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== Bn ? "#define TONE_MAPPING" : "", t.toneMapping !== Bn ? Ue.tonemapping_pars_fragment : "", t.toneMapping !== Bn ? yg("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Ue.colorspace_pars_fragment, Mg("linearToOutputTexel", t.outputColorSpace), Sg(), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(os).join(`
`)), o = $o(o), o = Gl(o, t), o = Wl(o, t), a = $o(a), a = Gl(a, t), a = Wl(a, t), o = Xl(o), a = Xl(a), t.isRawShaderMaterial !== true && (b = `#version 300 es
`, m = [p, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + m, f = ["#define varying in", t.glslVersion === Oa ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === Oa ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + f);
  const T = b + m + o, M = b + f + a, L = kl(i, i.VERTEX_SHADER, T), C = kl(i, i.FRAGMENT_SHADER, M);
  i.attachShader(_, L), i.attachShader(_, C), t.index0AttributeName !== void 0 ? i.bindAttribLocation(_, 0, t.index0AttributeName) : t.morphTargets === true && i.bindAttribLocation(_, 0, "position"), i.linkProgram(_);
  function A(P) {
    if (s.debug.checkShaderErrors) {
      const G = i.getProgramInfoLog(_).trim(), z = i.getShaderInfoLog(L).trim(), j = i.getShaderInfoLog(C).trim();
      let $ = true, X = true;
      if (i.getProgramParameter(_, i.LINK_STATUS) === false) if ($ = false, typeof s.debug.onShaderError == "function") s.debug.onShaderError(i, _, L, C);
      else {
        const Z = Hl(i, L, "vertex"), V = Hl(i, C, "fragment");
        console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(_, i.VALIDATE_STATUS) + `

Material Name: ` + P.name + `
Material Type: ` + P.type + `

Program Info Log: ` + G + `
` + Z + `
` + V);
      }
      else G !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", G) : (z === "" || j === "") && (X = false);
      X && (P.diagnostics = { runnable: $, programLog: G, vertexShader: { log: z, prefix: m }, fragmentShader: { log: j, prefix: f } });
    }
    i.deleteShader(L), i.deleteShader(C), N = new cr(i, _), S = Tg(i, _);
  }
  let N;
  this.getUniforms = function() {
    return N === void 0 && A(this), N;
  };
  let S;
  this.getAttributes = function() {
    return S === void 0 && A(this), S;
  };
  let y = t.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return y === false && (y = i.getProgramParameter(_, gg)), y;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(_), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = _g++, this.cacheKey = e, this.usedTimes = 1, this.program = _, this.vertexShader = L, this.fragmentShader = C, this;
}
let Og = 0;
class Bg {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), r = this._getShaderStage(n), o = this._getShaderCacheForMaterial(e);
    return o.has(i) === false && (o.add(i), i.usedTimes++), o.has(r) === false && (o.add(r), r.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new zg(e), t.set(e, n)), n;
  }
}
class zg {
  constructor(e) {
    this.id = Og++, this.code = e, this.usedTimes = 0;
  }
}
function kg(s, e, t, n, i, r, o) {
  const a = new ca(), l = new Bg(), c = /* @__PURE__ */ new Set(), h = [], u = i.logarithmicDepthBuffer, d = i.vertexTextures;
  let p = i.precision;
  const g = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function _(S) {
    return c.add(S), S === 0 ? "uv" : `uv${S}`;
  }
  function m(S, y, P, G, z) {
    const j = G.fog, $ = z.geometry, X = S.isMeshStandardMaterial ? G.environment : null, Z = (S.isMeshStandardMaterial ? t : e).get(S.envMap || X), V = Z && Z.mapping === gr ? Z.image.height : null, se = g[S.type];
    S.precision !== null && (p = i.getMaxPrecision(S.precision), p !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", p, "instead."));
    const he = $.morphAttributes.position || $.morphAttributes.normal || $.morphAttributes.color, xe = he !== void 0 ? he.length : 0;
    let Fe = 0;
    $.morphAttributes.position !== void 0 && (Fe = 1), $.morphAttributes.normal !== void 0 && (Fe = 2), $.morphAttributes.color !== void 0 && (Fe = 3);
    let tt, W, ee, me;
    if (se) {
      const Ke = nn[se];
      tt = Ke.vertexShader, W = Ke.fragmentShader;
    } else tt = S.vertexShader, W = S.fragmentShader, l.update(S), ee = l.getVertexShaderID(S), me = l.getFragmentShaderID(S);
    const re = s.getRenderTarget(), be = s.state.buffers.depth.getReversed(), Ye = z.isInstancedMesh === true, Ae = z.isBatchedMesh === true, ct = !!S.map, ot = !!S.matcap, Be = !!Z, w = !!S.aoMap, zt = !!S.lightMap, ze = !!S.bumpMap, ke = !!S.normalMap, ve = !!S.displacementMap, it = !!S.emissiveMap, _e = !!S.metalnessMap, E = !!S.roughnessMap, x = S.anisotropy > 0, F = S.clearcoat > 0, Y = S.dispersion > 0, K = S.iridescence > 0, H = S.sheen > 0, ge = S.transmission > 0, oe = x && !!S.anisotropyMap, ue = F && !!S.clearcoatMap, Ge = F && !!S.clearcoatNormalMap, Q = F && !!S.clearcoatRoughnessMap, de = K && !!S.iridescenceMap, Te = K && !!S.iridescenceThicknessMap, we = H && !!S.sheenColorMap, fe = H && !!S.sheenRoughnessMap, Ve = !!S.specularMap, Ie = !!S.specularColorMap, nt = !!S.specularIntensityMap, D = ge && !!S.transmissionMap, ne = ge && !!S.thicknessMap, k = !!S.gradientMap, q = !!S.alphaMap, le = S.alphaTest > 0, ae = !!S.alphaHash, Le = !!S.extensions;
    let at = Bn;
    S.toneMapped && (re === null || re.isXRRenderTarget === true) && (at = s.toneMapping);
    const yt = { shaderID: se, shaderType: S.type, shaderName: S.name, vertexShader: tt, fragmentShader: W, defines: S.defines, customVertexShaderID: ee, customFragmentShaderID: me, isRawShaderMaterial: S.isRawShaderMaterial === true, glslVersion: S.glslVersion, precision: p, batching: Ae, batchingColor: Ae && z._colorsTexture !== null, instancing: Ye, instancingColor: Ye && z.instanceColor !== null, instancingMorph: Ye && z.morphTexture !== null, supportsVertexTextures: d, outputColorSpace: re === null ? s.outputColorSpace : re.isXRRenderTarget === true ? re.texture.colorSpace : Lt, alphaToCoverage: !!S.alphaToCoverage, map: ct, matcap: ot, envMap: Be, envMapMode: Be && Z.mapping, envMapCubeUVHeight: V, aoMap: w, lightMap: zt, bumpMap: ze, normalMap: ke, displacementMap: d && ve, emissiveMap: it, normalMapObjectSpace: ke && S.normalMapType === Oh, normalMapTangentSpace: ke && S.normalMapType === xc, metalnessMap: _e, roughnessMap: E, anisotropy: x, anisotropyMap: oe, clearcoat: F, clearcoatMap: ue, clearcoatNormalMap: Ge, clearcoatRoughnessMap: Q, dispersion: Y, iridescence: K, iridescenceMap: de, iridescenceThicknessMap: Te, sheen: H, sheenColorMap: we, sheenRoughnessMap: fe, specularMap: Ve, specularColorMap: Ie, specularIntensityMap: nt, transmission: ge, transmissionMap: D, thicknessMap: ne, gradientMap: k, opaque: S.transparent === false && S.blending === Ai && S.alphaToCoverage === false, alphaMap: q, alphaTest: le, alphaHash: ae, combine: S.combine, mapUv: ct && _(S.map.channel), aoMapUv: w && _(S.aoMap.channel), lightMapUv: zt && _(S.lightMap.channel), bumpMapUv: ze && _(S.bumpMap.channel), normalMapUv: ke && _(S.normalMap.channel), displacementMapUv: ve && _(S.displacementMap.channel), emissiveMapUv: it && _(S.emissiveMap.channel), metalnessMapUv: _e && _(S.metalnessMap.channel), roughnessMapUv: E && _(S.roughnessMap.channel), anisotropyMapUv: oe && _(S.anisotropyMap.channel), clearcoatMapUv: ue && _(S.clearcoatMap.channel), clearcoatNormalMapUv: Ge && _(S.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: Q && _(S.clearcoatRoughnessMap.channel), iridescenceMapUv: de && _(S.iridescenceMap.channel), iridescenceThicknessMapUv: Te && _(S.iridescenceThicknessMap.channel), sheenColorMapUv: we && _(S.sheenColorMap.channel), sheenRoughnessMapUv: fe && _(S.sheenRoughnessMap.channel), specularMapUv: Ve && _(S.specularMap.channel), specularColorMapUv: Ie && _(S.specularColorMap.channel), specularIntensityMapUv: nt && _(S.specularIntensityMap.channel), transmissionMapUv: D && _(S.transmissionMap.channel), thicknessMapUv: ne && _(S.thicknessMap.channel), alphaMapUv: q && _(S.alphaMap.channel), vertexTangents: !!$.attributes.tangent && (ke || x), vertexColors: S.vertexColors, vertexAlphas: S.vertexColors === true && !!$.attributes.color && $.attributes.color.itemSize === 4, pointsUvs: z.isPoints === true && !!$.attributes.uv && (ct || q), fog: !!j, useFog: S.fog === true, fogExp2: !!j && j.isFogExp2, flatShading: S.flatShading === true, sizeAttenuation: S.sizeAttenuation === true, logarithmicDepthBuffer: u, reverseDepthBuffer: be, skinning: z.isSkinnedMesh === true, morphTargets: $.morphAttributes.position !== void 0, morphNormals: $.morphAttributes.normal !== void 0, morphColors: $.morphAttributes.color !== void 0, morphTargetsCount: xe, morphTextureStride: Fe, numDirLights: y.directional.length, numPointLights: y.point.length, numSpotLights: y.spot.length, numSpotLightMaps: y.spotLightMap.length, numRectAreaLights: y.rectArea.length, numHemiLights: y.hemi.length, numDirLightShadows: y.directionalShadowMap.length, numPointLightShadows: y.pointShadowMap.length, numSpotLightShadows: y.spotShadowMap.length, numSpotLightShadowsWithMaps: y.numSpotLightShadowsWithMaps, numLightProbes: y.numLightProbes, numClippingPlanes: o.numPlanes, numClipIntersection: o.numIntersection, dithering: S.dithering, shadowMapEnabled: s.shadowMap.enabled && P.length > 0, shadowMapType: s.shadowMap.type, toneMapping: at, decodeVideoTexture: ct && S.map.isVideoTexture === true && He.getTransfer(S.map.colorSpace) === Qe, decodeVideoTextureEmissive: it && S.emissiveMap.isVideoTexture === true && He.getTransfer(S.emissiveMap.colorSpace) === Qe, premultipliedAlpha: S.premultipliedAlpha, doubleSided: S.side === sn, flipSided: S.side === Ut, useDepthPacking: S.depthPacking >= 0, depthPacking: S.depthPacking || 0, index0AttributeName: S.index0AttributeName, extensionClipCullDistance: Le && S.extensions.clipCullDistance === true && n.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (Le && S.extensions.multiDraw === true || Ae) && n.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"), customProgramCacheKey: S.customProgramCacheKey() };
    return yt.vertexUv1s = c.has(1), yt.vertexUv2s = c.has(2), yt.vertexUv3s = c.has(3), c.clear(), yt;
  }
  function f(S) {
    const y = [];
    if (S.shaderID ? y.push(S.shaderID) : (y.push(S.customVertexShaderID), y.push(S.customFragmentShaderID)), S.defines !== void 0) for (const P in S.defines) y.push(P), y.push(S.defines[P]);
    return S.isRawShaderMaterial === false && (b(y, S), T(y, S), y.push(s.outputColorSpace)), y.push(S.customProgramCacheKey), y.join();
  }
  function b(S, y) {
    S.push(y.precision), S.push(y.outputColorSpace), S.push(y.envMapMode), S.push(y.envMapCubeUVHeight), S.push(y.mapUv), S.push(y.alphaMapUv), S.push(y.lightMapUv), S.push(y.aoMapUv), S.push(y.bumpMapUv), S.push(y.normalMapUv), S.push(y.displacementMapUv), S.push(y.emissiveMapUv), S.push(y.metalnessMapUv), S.push(y.roughnessMapUv), S.push(y.anisotropyMapUv), S.push(y.clearcoatMapUv), S.push(y.clearcoatNormalMapUv), S.push(y.clearcoatRoughnessMapUv), S.push(y.iridescenceMapUv), S.push(y.iridescenceThicknessMapUv), S.push(y.sheenColorMapUv), S.push(y.sheenRoughnessMapUv), S.push(y.specularMapUv), S.push(y.specularColorMapUv), S.push(y.specularIntensityMapUv), S.push(y.transmissionMapUv), S.push(y.thicknessMapUv), S.push(y.combine), S.push(y.fogExp2), S.push(y.sizeAttenuation), S.push(y.morphTargetsCount), S.push(y.morphAttributeCount), S.push(y.numDirLights), S.push(y.numPointLights), S.push(y.numSpotLights), S.push(y.numSpotLightMaps), S.push(y.numHemiLights), S.push(y.numRectAreaLights), S.push(y.numDirLightShadows), S.push(y.numPointLightShadows), S.push(y.numSpotLightShadows), S.push(y.numSpotLightShadowsWithMaps), S.push(y.numLightProbes), S.push(y.shadowMapType), S.push(y.toneMapping), S.push(y.numClippingPlanes), S.push(y.numClipIntersection), S.push(y.depthPacking);
  }
  function T(S, y) {
    a.disableAll(), y.supportsVertexTextures && a.enable(0), y.instancing && a.enable(1), y.instancingColor && a.enable(2), y.instancingMorph && a.enable(3), y.matcap && a.enable(4), y.envMap && a.enable(5), y.normalMapObjectSpace && a.enable(6), y.normalMapTangentSpace && a.enable(7), y.clearcoat && a.enable(8), y.iridescence && a.enable(9), y.alphaTest && a.enable(10), y.vertexColors && a.enable(11), y.vertexAlphas && a.enable(12), y.vertexUv1s && a.enable(13), y.vertexUv2s && a.enable(14), y.vertexUv3s && a.enable(15), y.vertexTangents && a.enable(16), y.anisotropy && a.enable(17), y.alphaHash && a.enable(18), y.batching && a.enable(19), y.dispersion && a.enable(20), y.batchingColor && a.enable(21), S.push(a.mask), a.disableAll(), y.fog && a.enable(0), y.useFog && a.enable(1), y.flatShading && a.enable(2), y.logarithmicDepthBuffer && a.enable(3), y.reverseDepthBuffer && a.enable(4), y.skinning && a.enable(5), y.morphTargets && a.enable(6), y.morphNormals && a.enable(7), y.morphColors && a.enable(8), y.premultipliedAlpha && a.enable(9), y.shadowMapEnabled && a.enable(10), y.doubleSided && a.enable(11), y.flipSided && a.enable(12), y.useDepthPacking && a.enable(13), y.dithering && a.enable(14), y.transmission && a.enable(15), y.sheen && a.enable(16), y.opaque && a.enable(17), y.pointsUvs && a.enable(18), y.decodeVideoTexture && a.enable(19), y.decodeVideoTextureEmissive && a.enable(20), y.alphaToCoverage && a.enable(21), S.push(a.mask);
  }
  function M(S) {
    const y = g[S.type];
    let P;
    if (y) {
      const G = nn[y];
      P = Cu.clone(G.uniforms);
    } else P = S.uniforms;
    return P;
  }
  function L(S, y) {
    let P;
    for (let G = 0, z = h.length; G < z; G++) {
      const j = h[G];
      if (j.cacheKey === y) {
        P = j, ++P.usedTimes;
        break;
      }
    }
    return P === void 0 && (P = new Fg(s, y, S, r), h.push(P)), P;
  }
  function C(S) {
    if (--S.usedTimes === 0) {
      const y = h.indexOf(S);
      h[y] = h[h.length - 1], h.pop(), S.destroy();
    }
  }
  function A(S) {
    l.remove(S);
  }
  function N() {
    l.dispose();
  }
  return { getParameters: m, getProgramCacheKey: f, getUniforms: M, acquireProgram: L, releaseProgram: C, releaseShaderCache: A, programs: h, dispose: N };
}
function Vg() {
  let s = /* @__PURE__ */ new WeakMap();
  function e(o) {
    return s.has(o);
  }
  function t(o) {
    let a = s.get(o);
    return a === void 0 && (a = {}, s.set(o, a)), a;
  }
  function n(o) {
    s.delete(o);
  }
  function i(o, a, l) {
    s.get(o)[a] = l;
  }
  function r() {
    s = /* @__PURE__ */ new WeakMap();
  }
  return { has: e, get: t, remove: n, update: i, dispose: r };
}
function Hg(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.material.id !== e.material.id ? s.material.id - e.material.id : s.z !== e.z ? s.z - e.z : s.id - e.id;
}
function ql(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.z !== e.z ? e.z - s.z : s.id - e.id;
}
function jl() {
  const s = [];
  let e = 0;
  const t = [], n = [], i = [];
  function r() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function o(u, d, p, g, _, m) {
    let f = s[e];
    return f === void 0 ? (f = { id: u.id, object: u, geometry: d, material: p, groupOrder: g, renderOrder: u.renderOrder, z: _, group: m }, s[e] = f) : (f.id = u.id, f.object = u, f.geometry = d, f.material = p, f.groupOrder = g, f.renderOrder = u.renderOrder, f.z = _, f.group = m), e++, f;
  }
  function a(u, d, p, g, _, m) {
    const f = o(u, d, p, g, _, m);
    p.transmission > 0 ? n.push(f) : p.transparent === true ? i.push(f) : t.push(f);
  }
  function l(u, d, p, g, _, m) {
    const f = o(u, d, p, g, _, m);
    p.transmission > 0 ? n.unshift(f) : p.transparent === true ? i.unshift(f) : t.unshift(f);
  }
  function c(u, d) {
    t.length > 1 && t.sort(u || Hg), n.length > 1 && n.sort(d || ql), i.length > 1 && i.sort(d || ql);
  }
  function h() {
    for (let u = e, d = s.length; u < d; u++) {
      const p = s[u];
      if (p.id === null) break;
      p.id = null, p.object = null, p.geometry = null, p.material = null, p.group = null;
    }
  }
  return { opaque: t, transmissive: n, transparent: i, init: r, push: a, unshift: l, finish: h, sort: c };
}
function Gg() {
  let s = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const r = s.get(n);
    let o;
    return r === void 0 ? (o = new jl(), s.set(n, [o])) : i >= r.length ? (o = new jl(), r.push(o)) : o = r[i], o;
  }
  function t() {
    s = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: t };
}
function Wg() {
  const s = {};
  return { get: function(e) {
    if (s[e.id] !== void 0) return s[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { direction: new R(), color: new Ee() };
        break;
      case "SpotLight":
        t = { position: new R(), direction: new R(), color: new Ee(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        t = { position: new R(), color: new Ee(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        t = { direction: new R(), skyColor: new Ee(), groundColor: new Ee() };
        break;
      case "RectAreaLight":
        t = { color: new Ee(), position: new R(), halfWidth: new R(), halfHeight: new R() };
        break;
    }
    return s[e.id] = t, t;
  } };
}
function Xg() {
  const s = {};
  return { get: function(e) {
    if (s[e.id] !== void 0) return s[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Me() };
        break;
      case "SpotLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Me() };
        break;
      case "PointLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Me(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return s[e.id] = t, t;
  } };
}
let Yg = 0;
function qg(s, e) {
  return (e.castShadow ? 2 : 0) - (s.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (s.map ? 1 : 0);
}
function jg(s) {
  const e = new Wg(), t = Xg(), n = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let c = 0; c < 9; c++) n.probe.push(new R());
  const i = new R(), r = new Pe(), o = new Pe();
  function a(c) {
    let h = 0, u = 0, d = 0;
    for (let S = 0; S < 9; S++) n.probe[S].set(0, 0, 0);
    let p = 0, g = 0, _ = 0, m = 0, f = 0, b = 0, T = 0, M = 0, L = 0, C = 0, A = 0;
    c.sort(qg);
    for (let S = 0, y = c.length; S < y; S++) {
      const P = c[S], G = P.color, z = P.intensity, j = P.distance, $ = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
      if (P.isAmbientLight) h += G.r * z, u += G.g * z, d += G.b * z;
      else if (P.isLightProbe) {
        for (let X = 0; X < 9; X++) n.probe[X].addScaledVector(P.sh.coefficients[X], z);
        A++;
      } else if (P.isDirectionalLight) {
        const X = e.get(P);
        if (X.color.copy(P.color).multiplyScalar(P.intensity), P.castShadow) {
          const Z = P.shadow, V = t.get(P);
          V.shadowIntensity = Z.intensity, V.shadowBias = Z.bias, V.shadowNormalBias = Z.normalBias, V.shadowRadius = Z.radius, V.shadowMapSize = Z.mapSize, n.directionalShadow[p] = V, n.directionalShadowMap[p] = $, n.directionalShadowMatrix[p] = P.shadow.matrix, b++;
        }
        n.directional[p] = X, p++;
      } else if (P.isSpotLight) {
        const X = e.get(P);
        X.position.setFromMatrixPosition(P.matrixWorld), X.color.copy(G).multiplyScalar(z), X.distance = j, X.coneCos = Math.cos(P.angle), X.penumbraCos = Math.cos(P.angle * (1 - P.penumbra)), X.decay = P.decay, n.spot[_] = X;
        const Z = P.shadow;
        if (P.map && (n.spotLightMap[L] = P.map, L++, Z.updateMatrices(P), P.castShadow && C++), n.spotLightMatrix[_] = Z.matrix, P.castShadow) {
          const V = t.get(P);
          V.shadowIntensity = Z.intensity, V.shadowBias = Z.bias, V.shadowNormalBias = Z.normalBias, V.shadowRadius = Z.radius, V.shadowMapSize = Z.mapSize, n.spotShadow[_] = V, n.spotShadowMap[_] = $, M++;
        }
        _++;
      } else if (P.isRectAreaLight) {
        const X = e.get(P);
        X.color.copy(G).multiplyScalar(z), X.halfWidth.set(P.width * 0.5, 0, 0), X.halfHeight.set(0, P.height * 0.5, 0), n.rectArea[m] = X, m++;
      } else if (P.isPointLight) {
        const X = e.get(P);
        if (X.color.copy(P.color).multiplyScalar(P.intensity), X.distance = P.distance, X.decay = P.decay, P.castShadow) {
          const Z = P.shadow, V = t.get(P);
          V.shadowIntensity = Z.intensity, V.shadowBias = Z.bias, V.shadowNormalBias = Z.normalBias, V.shadowRadius = Z.radius, V.shadowMapSize = Z.mapSize, V.shadowCameraNear = Z.camera.near, V.shadowCameraFar = Z.camera.far, n.pointShadow[g] = V, n.pointShadowMap[g] = $, n.pointShadowMatrix[g] = P.shadow.matrix, T++;
        }
        n.point[g] = X, g++;
      } else if (P.isHemisphereLight) {
        const X = e.get(P);
        X.skyColor.copy(P.color).multiplyScalar(z), X.groundColor.copy(P.groundColor).multiplyScalar(z), n.hemi[f] = X, f++;
      }
    }
    m > 0 && (s.has("OES_texture_float_linear") === true ? (n.rectAreaLTC1 = te.LTC_FLOAT_1, n.rectAreaLTC2 = te.LTC_FLOAT_2) : (n.rectAreaLTC1 = te.LTC_HALF_1, n.rectAreaLTC2 = te.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = u, n.ambient[2] = d;
    const N = n.hash;
    (N.directionalLength !== p || N.pointLength !== g || N.spotLength !== _ || N.rectAreaLength !== m || N.hemiLength !== f || N.numDirectionalShadows !== b || N.numPointShadows !== T || N.numSpotShadows !== M || N.numSpotMaps !== L || N.numLightProbes !== A) && (n.directional.length = p, n.spot.length = _, n.rectArea.length = m, n.point.length = g, n.hemi.length = f, n.directionalShadow.length = b, n.directionalShadowMap.length = b, n.pointShadow.length = T, n.pointShadowMap.length = T, n.spotShadow.length = M, n.spotShadowMap.length = M, n.directionalShadowMatrix.length = b, n.pointShadowMatrix.length = T, n.spotLightMatrix.length = M + L - C, n.spotLightMap.length = L, n.numSpotLightShadowsWithMaps = C, n.numLightProbes = A, N.directionalLength = p, N.pointLength = g, N.spotLength = _, N.rectAreaLength = m, N.hemiLength = f, N.numDirectionalShadows = b, N.numPointShadows = T, N.numSpotShadows = M, N.numSpotMaps = L, N.numLightProbes = A, n.version = Yg++);
  }
  function l(c, h) {
    let u = 0, d = 0, p = 0, g = 0, _ = 0;
    const m = h.matrixWorldInverse;
    for (let f = 0, b = c.length; f < b; f++) {
      const T = c[f];
      if (T.isDirectionalLight) {
        const M = n.directional[u];
        M.direction.setFromMatrixPosition(T.matrixWorld), i.setFromMatrixPosition(T.target.matrixWorld), M.direction.sub(i), M.direction.transformDirection(m), u++;
      } else if (T.isSpotLight) {
        const M = n.spot[p];
        M.position.setFromMatrixPosition(T.matrixWorld), M.position.applyMatrix4(m), M.direction.setFromMatrixPosition(T.matrixWorld), i.setFromMatrixPosition(T.target.matrixWorld), M.direction.sub(i), M.direction.transformDirection(m), p++;
      } else if (T.isRectAreaLight) {
        const M = n.rectArea[g];
        M.position.setFromMatrixPosition(T.matrixWorld), M.position.applyMatrix4(m), o.identity(), r.copy(T.matrixWorld), r.premultiply(m), o.extractRotation(r), M.halfWidth.set(T.width * 0.5, 0, 0), M.halfHeight.set(0, T.height * 0.5, 0), M.halfWidth.applyMatrix4(o), M.halfHeight.applyMatrix4(o), g++;
      } else if (T.isPointLight) {
        const M = n.point[d];
        M.position.setFromMatrixPosition(T.matrixWorld), M.position.applyMatrix4(m), d++;
      } else if (T.isHemisphereLight) {
        const M = n.hemi[_];
        M.direction.setFromMatrixPosition(T.matrixWorld), M.direction.transformDirection(m), _++;
      }
    }
  }
  return { setup: a, setupView: l, state: n };
}
function $l(s) {
  const e = new jg(s), t = [], n = [];
  function i(h) {
    c.camera = h, t.length = 0, n.length = 0;
  }
  function r(h) {
    t.push(h);
  }
  function o(h) {
    n.push(h);
  }
  function a() {
    e.setup(t);
  }
  function l(h) {
    e.setupView(t, h);
  }
  const c = { lightsArray: t, shadowsArray: n, camera: null, lights: e, transmissionRenderTarget: {} };
  return { init: i, state: c, setupLights: a, setupLightsView: l, pushLight: r, pushShadow: o };
}
function $g(s) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(i, r = 0) {
    const o = e.get(i);
    let a;
    return o === void 0 ? (a = new $l(s), e.set(i, [a])) : r >= o.length ? (a = new $l(s), o.push(a)) : a = o[r], a;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: t, dispose: n };
}
const Kg = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Zg = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Jg(s, e, t) {
  let n = new da();
  const i = new Me(), r = new Me(), o = new qe(), a = new Yu({ depthPacking: Fh }), l = new qu(), c = {}, h = t.maxTextureSize, u = { [bn]: Ut, [Ut]: bn, [sn]: sn }, d = new zn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new Me() }, radius: { value: 4 } }, vertexShader: Kg, fragmentShader: Zg }), p = d.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const g = new xt();
  g.setAttribute("position", new Pt(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const _ = new ft(g, d), m = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = sc;
  let f = this.type;
  this.render = function(C, A, N) {
    if (m.enabled === false || m.autoUpdate === false && m.needsUpdate === false || C.length === 0) return;
    const S = s.getRenderTarget(), y = s.getActiveCubeFace(), P = s.getActiveMipmapLevel(), G = s.state;
    G.setBlending(On), G.buffers.color.setClear(1, 1, 1, 1), G.buffers.depth.setTest(true), G.setScissorTest(false);
    const z = f !== vn && this.type === vn, j = f === vn && this.type !== vn;
    for (let $ = 0, X = C.length; $ < X; $++) {
      const Z = C[$], V = Z.shadow;
      if (V === void 0) {
        console.warn("THREE.WebGLShadowMap:", Z, "has no shadow.");
        continue;
      }
      if (V.autoUpdate === false && V.needsUpdate === false) continue;
      i.copy(V.mapSize);
      const se = V.getFrameExtents();
      if (i.multiply(se), r.copy(V.mapSize), (i.x > h || i.y > h) && (i.x > h && (r.x = Math.floor(h / se.x), i.x = r.x * se.x, V.mapSize.x = r.x), i.y > h && (r.y = Math.floor(h / se.y), i.y = r.y * se.y, V.mapSize.y = r.y)), V.map === null || z === true || j === true) {
        const xe = this.type !== vn ? { minFilter: Ct, magFilter: Ct } : {};
        V.map !== null && V.map.dispose(), V.map = new ti(i.x, i.y, xe), V.map.texture.name = Z.name + ".shadowMap", V.camera.updateProjectionMatrix();
      }
      s.setRenderTarget(V.map), s.clear();
      const he = V.getViewportCount();
      for (let xe = 0; xe < he; xe++) {
        const Fe = V.getViewport(xe);
        o.set(r.x * Fe.x, r.y * Fe.y, r.x * Fe.z, r.y * Fe.w), G.viewport(o), V.updateMatrices(Z, xe), n = V.getFrustum(), M(A, N, V.camera, Z, this.type);
      }
      V.isPointLightShadow !== true && this.type === vn && b(V, N), V.needsUpdate = false;
    }
    f = this.type, m.needsUpdate = false, s.setRenderTarget(S, y, P);
  };
  function b(C, A) {
    const N = e.update(_);
    d.defines.VSM_SAMPLES !== C.blurSamples && (d.defines.VSM_SAMPLES = C.blurSamples, p.defines.VSM_SAMPLES = C.blurSamples, d.needsUpdate = true, p.needsUpdate = true), C.mapPass === null && (C.mapPass = new ti(i.x, i.y)), d.uniforms.shadow_pass.value = C.map.texture, d.uniforms.resolution.value = C.mapSize, d.uniforms.radius.value = C.radius, s.setRenderTarget(C.mapPass), s.clear(), s.renderBufferDirect(A, null, N, d, _, null), p.uniforms.shadow_pass.value = C.mapPass.texture, p.uniforms.resolution.value = C.mapSize, p.uniforms.radius.value = C.radius, s.setRenderTarget(C.map), s.clear(), s.renderBufferDirect(A, null, N, p, _, null);
  }
  function T(C, A, N, S) {
    let y = null;
    const P = N.isPointLight === true ? C.customDistanceMaterial : C.customDepthMaterial;
    if (P !== void 0) y = P;
    else if (y = N.isPointLight === true ? l : a, s.localClippingEnabled && A.clipShadows === true && Array.isArray(A.clippingPlanes) && A.clippingPlanes.length !== 0 || A.displacementMap && A.displacementScale !== 0 || A.alphaMap && A.alphaTest > 0 || A.map && A.alphaTest > 0) {
      const G = y.uuid, z = A.uuid;
      let j = c[G];
      j === void 0 && (j = {}, c[G] = j);
      let $ = j[z];
      $ === void 0 && ($ = y.clone(), j[z] = $, A.addEventListener("dispose", L)), y = $;
    }
    if (y.visible = A.visible, y.wireframe = A.wireframe, S === vn ? y.side = A.shadowSide !== null ? A.shadowSide : A.side : y.side = A.shadowSide !== null ? A.shadowSide : u[A.side], y.alphaMap = A.alphaMap, y.alphaTest = A.alphaTest, y.map = A.map, y.clipShadows = A.clipShadows, y.clippingPlanes = A.clippingPlanes, y.clipIntersection = A.clipIntersection, y.displacementMap = A.displacementMap, y.displacementScale = A.displacementScale, y.displacementBias = A.displacementBias, y.wireframeLinewidth = A.wireframeLinewidth, y.linewidth = A.linewidth, N.isPointLight === true && y.isMeshDistanceMaterial === true) {
      const G = s.properties.get(y);
      G.light = N;
    }
    return y;
  }
  function M(C, A, N, S, y) {
    if (C.visible === false) return;
    if (C.layers.test(A.layers) && (C.isMesh || C.isLine || C.isPoints) && (C.castShadow || C.receiveShadow && y === vn) && (!C.frustumCulled || n.intersectsObject(C))) {
      C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, C.matrixWorld);
      const z = e.update(C), j = C.material;
      if (Array.isArray(j)) {
        const $ = z.groups;
        for (let X = 0, Z = $.length; X < Z; X++) {
          const V = $[X], se = j[V.materialIndex];
          if (se && se.visible) {
            const he = T(C, se, S, y);
            C.onBeforeShadow(s, C, A, N, z, he, V), s.renderBufferDirect(N, null, z, he, C, V), C.onAfterShadow(s, C, A, N, z, he, V);
          }
        }
      } else if (j.visible) {
        const $ = T(C, j, S, y);
        C.onBeforeShadow(s, C, A, N, z, $, null), s.renderBufferDirect(N, null, z, $, C, null), C.onAfterShadow(s, C, A, N, z, $, null);
      }
    }
    const G = C.children;
    for (let z = 0, j = G.length; z < j; z++) M(G[z], A, N, S, y);
  }
  function L(C) {
    C.target.removeEventListener("dispose", L);
    for (const N in c) {
      const S = c[N], y = C.target.uuid;
      y in S && (S[y].dispose(), delete S[y]);
    }
  }
}
const Qg = { [lo]: co, [ho]: po, [uo]: mo, [Pi]: fo, [co]: lo, [po]: ho, [mo]: uo, [fo]: Pi };
function e_(s, e) {
  function t() {
    let D = false;
    const ne = new qe();
    let k = null;
    const q = new qe(0, 0, 0, 0);
    return { setMask: function(le) {
      k !== le && !D && (s.colorMask(le, le, le, le), k = le);
    }, setLocked: function(le) {
      D = le;
    }, setClear: function(le, ae, Le, at, yt) {
      yt === true && (le *= at, ae *= at, Le *= at), ne.set(le, ae, Le, at), q.equals(ne) === false && (s.clearColor(le, ae, Le, at), q.copy(ne));
    }, reset: function() {
      D = false, k = null, q.set(-1, 0, 0, 0);
    } };
  }
  function n() {
    let D = false, ne = false, k = null, q = null, le = null;
    return { setReversed: function(ae) {
      if (ne !== ae) {
        const Le = e.get("EXT_clip_control");
        ne ? Le.clipControlEXT(Le.LOWER_LEFT_EXT, Le.ZERO_TO_ONE_EXT) : Le.clipControlEXT(Le.LOWER_LEFT_EXT, Le.NEGATIVE_ONE_TO_ONE_EXT);
        const at = le;
        le = null, this.setClear(at);
      }
      ne = ae;
    }, getReversed: function() {
      return ne;
    }, setTest: function(ae) {
      ae ? re(s.DEPTH_TEST) : be(s.DEPTH_TEST);
    }, setMask: function(ae) {
      k !== ae && !D && (s.depthMask(ae), k = ae);
    }, setFunc: function(ae) {
      if (ne && (ae = Qg[ae]), q !== ae) {
        switch (ae) {
          case lo:
            s.depthFunc(s.NEVER);
            break;
          case co:
            s.depthFunc(s.ALWAYS);
            break;
          case ho:
            s.depthFunc(s.LESS);
            break;
          case Pi:
            s.depthFunc(s.LEQUAL);
            break;
          case uo:
            s.depthFunc(s.EQUAL);
            break;
          case fo:
            s.depthFunc(s.GEQUAL);
            break;
          case po:
            s.depthFunc(s.GREATER);
            break;
          case mo:
            s.depthFunc(s.NOTEQUAL);
            break;
          default:
            s.depthFunc(s.LEQUAL);
        }
        q = ae;
      }
    }, setLocked: function(ae) {
      D = ae;
    }, setClear: function(ae) {
      le !== ae && (ne && (ae = 1 - ae), s.clearDepth(ae), le = ae);
    }, reset: function() {
      D = false, k = null, q = null, le = null, ne = false;
    } };
  }
  function i() {
    let D = false, ne = null, k = null, q = null, le = null, ae = null, Le = null, at = null, yt = null;
    return { setTest: function(Ke) {
      D || (Ke ? re(s.STENCIL_TEST) : be(s.STENCIL_TEST));
    }, setMask: function(Ke) {
      ne !== Ke && !D && (s.stencilMask(Ke), ne = Ke);
    }, setFunc: function(Ke, Yt, dn) {
      (k !== Ke || q !== Yt || le !== dn) && (s.stencilFunc(Ke, Yt, dn), k = Ke, q = Yt, le = dn);
    }, setOp: function(Ke, Yt, dn) {
      (ae !== Ke || Le !== Yt || at !== dn) && (s.stencilOp(Ke, Yt, dn), ae = Ke, Le = Yt, at = dn);
    }, setLocked: function(Ke) {
      D = Ke;
    }, setClear: function(Ke) {
      yt !== Ke && (s.clearStencil(Ke), yt = Ke);
    }, reset: function() {
      D = false, ne = null, k = null, q = null, le = null, ae = null, Le = null, at = null, yt = null;
    } };
  }
  const r = new t(), o = new n(), a = new i(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let h = {}, u = {}, d = /* @__PURE__ */ new WeakMap(), p = [], g = null, _ = false, m = null, f = null, b = null, T = null, M = null, L = null, C = null, A = new Ee(0, 0, 0), N = 0, S = false, y = null, P = null, G = null, z = null, j = null;
  const $ = s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let X = false, Z = 0;
  const V = s.getParameter(s.VERSION);
  V.indexOf("WebGL") !== -1 ? (Z = parseFloat(/^WebGL (\d)/.exec(V)[1]), X = Z >= 1) : V.indexOf("OpenGL ES") !== -1 && (Z = parseFloat(/^OpenGL ES (\d)/.exec(V)[1]), X = Z >= 2);
  let se = null, he = {};
  const xe = s.getParameter(s.SCISSOR_BOX), Fe = s.getParameter(s.VIEWPORT), tt = new qe().fromArray(xe), W = new qe().fromArray(Fe);
  function ee(D, ne, k, q) {
    const le = new Uint8Array(4), ae = s.createTexture();
    s.bindTexture(D, ae), s.texParameteri(D, s.TEXTURE_MIN_FILTER, s.NEAREST), s.texParameteri(D, s.TEXTURE_MAG_FILTER, s.NEAREST);
    for (let Le = 0; Le < k; Le++) D === s.TEXTURE_3D || D === s.TEXTURE_2D_ARRAY ? s.texImage3D(ne, 0, s.RGBA, 1, 1, q, 0, s.RGBA, s.UNSIGNED_BYTE, le) : s.texImage2D(ne + Le, 0, s.RGBA, 1, 1, 0, s.RGBA, s.UNSIGNED_BYTE, le);
    return ae;
  }
  const me = {};
  me[s.TEXTURE_2D] = ee(s.TEXTURE_2D, s.TEXTURE_2D, 1), me[s.TEXTURE_CUBE_MAP] = ee(s.TEXTURE_CUBE_MAP, s.TEXTURE_CUBE_MAP_POSITIVE_X, 6), me[s.TEXTURE_2D_ARRAY] = ee(s.TEXTURE_2D_ARRAY, s.TEXTURE_2D_ARRAY, 1, 1), me[s.TEXTURE_3D] = ee(s.TEXTURE_3D, s.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), o.setClear(1), a.setClear(0), re(s.DEPTH_TEST), o.setFunc(Pi), ze(false), ke(Ra), re(s.CULL_FACE), w(On);
  function re(D) {
    h[D] !== true && (s.enable(D), h[D] = true);
  }
  function be(D) {
    h[D] !== false && (s.disable(D), h[D] = false);
  }
  function Ye(D, ne) {
    return u[D] !== ne ? (s.bindFramebuffer(D, ne), u[D] = ne, D === s.DRAW_FRAMEBUFFER && (u[s.FRAMEBUFFER] = ne), D === s.FRAMEBUFFER && (u[s.DRAW_FRAMEBUFFER] = ne), true) : false;
  }
  function Ae(D, ne) {
    let k = p, q = false;
    if (D) {
      k = d.get(ne), k === void 0 && (k = [], d.set(ne, k));
      const le = D.textures;
      if (k.length !== le.length || k[0] !== s.COLOR_ATTACHMENT0) {
        for (let ae = 0, Le = le.length; ae < Le; ae++) k[ae] = s.COLOR_ATTACHMENT0 + ae;
        k.length = le.length, q = true;
      }
    } else k[0] !== s.BACK && (k[0] = s.BACK, q = true);
    q && s.drawBuffers(k);
  }
  function ct(D) {
    return g !== D ? (s.useProgram(D), g = D, true) : false;
  }
  const ot = { [Zn]: s.FUNC_ADD, [oh]: s.FUNC_SUBTRACT, [ah]: s.FUNC_REVERSE_SUBTRACT };
  ot[lh] = s.MIN, ot[ch] = s.MAX;
  const Be = { [hh]: s.ZERO, [uh]: s.ONE, [dh]: s.SRC_COLOR, [oo]: s.SRC_ALPHA, [xh]: s.SRC_ALPHA_SATURATE, [gh]: s.DST_COLOR, [ph]: s.DST_ALPHA, [fh]: s.ONE_MINUS_SRC_COLOR, [ao]: s.ONE_MINUS_SRC_ALPHA, [_h]: s.ONE_MINUS_DST_COLOR, [mh]: s.ONE_MINUS_DST_ALPHA, [vh]: s.CONSTANT_COLOR, [Mh]: s.ONE_MINUS_CONSTANT_COLOR, [yh]: s.CONSTANT_ALPHA, [Sh]: s.ONE_MINUS_CONSTANT_ALPHA };
  function w(D, ne, k, q, le, ae, Le, at, yt, Ke) {
    if (D === On) {
      _ === true && (be(s.BLEND), _ = false);
      return;
    }
    if (_ === false && (re(s.BLEND), _ = true), D !== rh) {
      if (D !== m || Ke !== S) {
        if ((f !== Zn || M !== Zn) && (s.blendEquation(s.FUNC_ADD), f = Zn, M = Zn), Ke) switch (D) {
          case Ai:
            s.blendFuncSeparate(s.ONE, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA);
            break;
          case Ca:
            s.blendFunc(s.ONE, s.ONE);
            break;
          case Pa:
            s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
            break;
          case La:
            s.blendFuncSeparate(s.ZERO, s.SRC_COLOR, s.ZERO, s.SRC_ALPHA);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", D);
            break;
        }
        else switch (D) {
          case Ai:
            s.blendFuncSeparate(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA);
            break;
          case Ca:
            s.blendFunc(s.SRC_ALPHA, s.ONE);
            break;
          case Pa:
            s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
            break;
          case La:
            s.blendFunc(s.ZERO, s.SRC_COLOR);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", D);
            break;
        }
        b = null, T = null, L = null, C = null, A.set(0, 0, 0), N = 0, m = D, S = Ke;
      }
      return;
    }
    le = le || ne, ae = ae || k, Le = Le || q, (ne !== f || le !== M) && (s.blendEquationSeparate(ot[ne], ot[le]), f = ne, M = le), (k !== b || q !== T || ae !== L || Le !== C) && (s.blendFuncSeparate(Be[k], Be[q], Be[ae], Be[Le]), b = k, T = q, L = ae, C = Le), (at.equals(A) === false || yt !== N) && (s.blendColor(at.r, at.g, at.b, yt), A.copy(at), N = yt), m = D, S = false;
  }
  function zt(D, ne) {
    D.side === sn ? be(s.CULL_FACE) : re(s.CULL_FACE);
    let k = D.side === Ut;
    ne && (k = !k), ze(k), D.blending === Ai && D.transparent === false ? w(On) : w(D.blending, D.blendEquation, D.blendSrc, D.blendDst, D.blendEquationAlpha, D.blendSrcAlpha, D.blendDstAlpha, D.blendColor, D.blendAlpha, D.premultipliedAlpha), o.setFunc(D.depthFunc), o.setTest(D.depthTest), o.setMask(D.depthWrite), r.setMask(D.colorWrite);
    const q = D.stencilWrite;
    a.setTest(q), q && (a.setMask(D.stencilWriteMask), a.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask), a.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)), it(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), D.alphaToCoverage === true ? re(s.SAMPLE_ALPHA_TO_COVERAGE) : be(s.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function ze(D) {
    y !== D && (D ? s.frontFace(s.CW) : s.frontFace(s.CCW), y = D);
  }
  function ke(D) {
    D !== nh ? (re(s.CULL_FACE), D !== P && (D === Ra ? s.cullFace(s.BACK) : D === ih ? s.cullFace(s.FRONT) : s.cullFace(s.FRONT_AND_BACK))) : be(s.CULL_FACE), P = D;
  }
  function ve(D) {
    D !== G && (X && s.lineWidth(D), G = D);
  }
  function it(D, ne, k) {
    D ? (re(s.POLYGON_OFFSET_FILL), (z !== ne || j !== k) && (s.polygonOffset(ne, k), z = ne, j = k)) : be(s.POLYGON_OFFSET_FILL);
  }
  function _e(D) {
    D ? re(s.SCISSOR_TEST) : be(s.SCISSOR_TEST);
  }
  function E(D) {
    D === void 0 && (D = s.TEXTURE0 + $ - 1), se !== D && (s.activeTexture(D), se = D);
  }
  function x(D, ne, k) {
    k === void 0 && (se === null ? k = s.TEXTURE0 + $ - 1 : k = se);
    let q = he[k];
    q === void 0 && (q = { type: void 0, texture: void 0 }, he[k] = q), (q.type !== D || q.texture !== ne) && (se !== k && (s.activeTexture(k), se = k), s.bindTexture(D, ne || me[D]), q.type = D, q.texture = ne);
  }
  function F() {
    const D = he[se];
    D !== void 0 && D.type !== void 0 && (s.bindTexture(D.type, null), D.type = void 0, D.texture = void 0);
  }
  function Y() {
    try {
      s.compressedTexImage2D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function K() {
    try {
      s.compressedTexImage3D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function H() {
    try {
      s.texSubImage2D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ge() {
    try {
      s.texSubImage3D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function oe() {
    try {
      s.compressedTexSubImage2D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ue() {
    try {
      s.compressedTexSubImage3D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Ge() {
    try {
      s.texStorage2D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Q() {
    try {
      s.texStorage3D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function de() {
    try {
      s.texImage2D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Te() {
    try {
      s.texImage3D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function we(D) {
    tt.equals(D) === false && (s.scissor(D.x, D.y, D.z, D.w), tt.copy(D));
  }
  function fe(D) {
    W.equals(D) === false && (s.viewport(D.x, D.y, D.z, D.w), W.copy(D));
  }
  function Ve(D, ne) {
    let k = c.get(ne);
    k === void 0 && (k = /* @__PURE__ */ new WeakMap(), c.set(ne, k));
    let q = k.get(D);
    q === void 0 && (q = s.getUniformBlockIndex(ne, D.name), k.set(D, q));
  }
  function Ie(D, ne) {
    const q = c.get(ne).get(D);
    l.get(ne) !== q && (s.uniformBlockBinding(ne, q, D.__bindingPointIndex), l.set(ne, q));
  }
  function nt() {
    s.disable(s.BLEND), s.disable(s.CULL_FACE), s.disable(s.DEPTH_TEST), s.disable(s.POLYGON_OFFSET_FILL), s.disable(s.SCISSOR_TEST), s.disable(s.STENCIL_TEST), s.disable(s.SAMPLE_ALPHA_TO_COVERAGE), s.blendEquation(s.FUNC_ADD), s.blendFunc(s.ONE, s.ZERO), s.blendFuncSeparate(s.ONE, s.ZERO, s.ONE, s.ZERO), s.blendColor(0, 0, 0, 0), s.colorMask(true, true, true, true), s.clearColor(0, 0, 0, 0), s.depthMask(true), s.depthFunc(s.LESS), o.setReversed(false), s.clearDepth(1), s.stencilMask(4294967295), s.stencilFunc(s.ALWAYS, 0, 4294967295), s.stencilOp(s.KEEP, s.KEEP, s.KEEP), s.clearStencil(0), s.cullFace(s.BACK), s.frontFace(s.CCW), s.polygonOffset(0, 0), s.activeTexture(s.TEXTURE0), s.bindFramebuffer(s.FRAMEBUFFER, null), s.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), s.bindFramebuffer(s.READ_FRAMEBUFFER, null), s.useProgram(null), s.lineWidth(1), s.scissor(0, 0, s.canvas.width, s.canvas.height), s.viewport(0, 0, s.canvas.width, s.canvas.height), h = {}, se = null, he = {}, u = {}, d = /* @__PURE__ */ new WeakMap(), p = [], g = null, _ = false, m = null, f = null, b = null, T = null, M = null, L = null, C = null, A = new Ee(0, 0, 0), N = 0, S = false, y = null, P = null, G = null, z = null, j = null, tt.set(0, 0, s.canvas.width, s.canvas.height), W.set(0, 0, s.canvas.width, s.canvas.height), r.reset(), o.reset(), a.reset();
  }
  return { buffers: { color: r, depth: o, stencil: a }, enable: re, disable: be, bindFramebuffer: Ye, drawBuffers: Ae, useProgram: ct, setBlending: w, setMaterial: zt, setFlipSided: ze, setCullFace: ke, setLineWidth: ve, setPolygonOffset: it, setScissorTest: _e, activeTexture: E, bindTexture: x, unbindTexture: F, compressedTexImage2D: Y, compressedTexImage3D: K, texImage2D: de, texImage3D: Te, updateUBOMapping: Ve, uniformBlockBinding: Ie, texStorage2D: Ge, texStorage3D: Q, texSubImage2D: H, texSubImage3D: ge, compressedTexSubImage2D: oe, compressedTexSubImage3D: ue, scissor: we, viewport: fe, reset: nt };
}
function t_(s, e, t, n, i, r, o) {
  const a = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), c = new Me(), h = /* @__PURE__ */ new WeakMap();
  let u;
  const d = /* @__PURE__ */ new WeakMap();
  let p = false;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(E, x) {
    return p ? new OffscreenCanvas(E, x) : fs("canvas");
  }
  function _(E, x, F) {
    let Y = 1;
    const K = _e(E);
    if ((K.width > F || K.height > F) && (Y = F / Math.max(K.width, K.height)), Y < 1) if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap || typeof VideoFrame < "u" && E instanceof VideoFrame) {
      const H = Math.floor(Y * K.width), ge = Math.floor(Y * K.height);
      u === void 0 && (u = g(H, ge));
      const oe = x ? g(H, ge) : u;
      return oe.width = H, oe.height = ge, oe.getContext("2d").drawImage(E, 0, 0, H, ge), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + K.width + "x" + K.height + ") to (" + H + "x" + ge + ")."), oe;
    } else return "data" in E && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + K.width + "x" + K.height + ")."), E;
    return E;
  }
  function m(E) {
    return E.generateMipmaps;
  }
  function f(E) {
    s.generateMipmap(E);
  }
  function b(E) {
    return E.isWebGLCubeRenderTarget ? s.TEXTURE_CUBE_MAP : E.isWebGL3DRenderTarget ? s.TEXTURE_3D : E.isWebGLArrayRenderTarget || E.isCompressedArrayTexture ? s.TEXTURE_2D_ARRAY : s.TEXTURE_2D;
  }
  function T(E, x, F, Y, K = false) {
    if (E !== null) {
      if (s[E] !== void 0) return s[E];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
    }
    let H = x;
    if (x === s.RED && (F === s.FLOAT && (H = s.R32F), F === s.HALF_FLOAT && (H = s.R16F), F === s.UNSIGNED_BYTE && (H = s.R8)), x === s.RED_INTEGER && (F === s.UNSIGNED_BYTE && (H = s.R8UI), F === s.UNSIGNED_SHORT && (H = s.R16UI), F === s.UNSIGNED_INT && (H = s.R32UI), F === s.BYTE && (H = s.R8I), F === s.SHORT && (H = s.R16I), F === s.INT && (H = s.R32I)), x === s.RG && (F === s.FLOAT && (H = s.RG32F), F === s.HALF_FLOAT && (H = s.RG16F), F === s.UNSIGNED_BYTE && (H = s.RG8)), x === s.RG_INTEGER && (F === s.UNSIGNED_BYTE && (H = s.RG8UI), F === s.UNSIGNED_SHORT && (H = s.RG16UI), F === s.UNSIGNED_INT && (H = s.RG32UI), F === s.BYTE && (H = s.RG8I), F === s.SHORT && (H = s.RG16I), F === s.INT && (H = s.RG32I)), x === s.RGB_INTEGER && (F === s.UNSIGNED_BYTE && (H = s.RGB8UI), F === s.UNSIGNED_SHORT && (H = s.RGB16UI), F === s.UNSIGNED_INT && (H = s.RGB32UI), F === s.BYTE && (H = s.RGB8I), F === s.SHORT && (H = s.RGB16I), F === s.INT && (H = s.RGB32I)), x === s.RGBA_INTEGER && (F === s.UNSIGNED_BYTE && (H = s.RGBA8UI), F === s.UNSIGNED_SHORT && (H = s.RGBA16UI), F === s.UNSIGNED_INT && (H = s.RGBA32UI), F === s.BYTE && (H = s.RGBA8I), F === s.SHORT && (H = s.RGBA16I), F === s.INT && (H = s.RGBA32I)), x === s.RGB && F === s.UNSIGNED_INT_5_9_9_9_REV && (H = s.RGB9_E5), x === s.RGBA) {
      const ge = K ? ur : He.getTransfer(Y);
      F === s.FLOAT && (H = s.RGBA32F), F === s.HALF_FLOAT && (H = s.RGBA16F), F === s.UNSIGNED_BYTE && (H = ge === Qe ? s.SRGB8_ALPHA8 : s.RGBA8), F === s.UNSIGNED_SHORT_4_4_4_4 && (H = s.RGBA4), F === s.UNSIGNED_SHORT_5_5_5_1 && (H = s.RGB5_A1);
    }
    return (H === s.R16F || H === s.R32F || H === s.RG16F || H === s.RG32F || H === s.RGBA16F || H === s.RGBA32F) && e.get("EXT_color_buffer_float"), H;
  }
  function M(E, x) {
    let F;
    return E ? x === null || x === ei || x === Ui ? F = s.DEPTH24_STENCIL8 : x === Jt ? F = s.DEPTH32F_STENCIL8 : x === hs && (F = s.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : x === null || x === ei || x === Ui ? F = s.DEPTH_COMPONENT24 : x === Jt ? F = s.DEPTH_COMPONENT32F : x === hs && (F = s.DEPTH_COMPONENT16), F;
  }
  function L(E, x) {
    return m(E) === true || E.isFramebufferTexture && E.minFilter !== Ct && E.minFilter !== Bt ? Math.log2(Math.max(x.width, x.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? x.mipmaps.length : 1;
  }
  function C(E) {
    const x = E.target;
    x.removeEventListener("dispose", C), N(x), x.isVideoTexture && h.delete(x);
  }
  function A(E) {
    const x = E.target;
    x.removeEventListener("dispose", A), y(x);
  }
  function N(E) {
    const x = n.get(E);
    if (x.__webglInit === void 0) return;
    const F = E.source, Y = d.get(F);
    if (Y) {
      const K = Y[x.__cacheKey];
      K.usedTimes--, K.usedTimes === 0 && S(E), Object.keys(Y).length === 0 && d.delete(F);
    }
    n.remove(E);
  }
  function S(E) {
    const x = n.get(E);
    s.deleteTexture(x.__webglTexture);
    const F = E.source, Y = d.get(F);
    delete Y[x.__cacheKey], o.memory.textures--;
  }
  function y(E) {
    const x = n.get(E);
    if (E.depthTexture && (E.depthTexture.dispose(), n.remove(E.depthTexture)), E.isWebGLCubeRenderTarget) for (let Y = 0; Y < 6; Y++) {
      if (Array.isArray(x.__webglFramebuffer[Y])) for (let K = 0; K < x.__webglFramebuffer[Y].length; K++) s.deleteFramebuffer(x.__webglFramebuffer[Y][K]);
      else s.deleteFramebuffer(x.__webglFramebuffer[Y]);
      x.__webglDepthbuffer && s.deleteRenderbuffer(x.__webglDepthbuffer[Y]);
    }
    else {
      if (Array.isArray(x.__webglFramebuffer)) for (let Y = 0; Y < x.__webglFramebuffer.length; Y++) s.deleteFramebuffer(x.__webglFramebuffer[Y]);
      else s.deleteFramebuffer(x.__webglFramebuffer);
      if (x.__webglDepthbuffer && s.deleteRenderbuffer(x.__webglDepthbuffer), x.__webglMultisampledFramebuffer && s.deleteFramebuffer(x.__webglMultisampledFramebuffer), x.__webglColorRenderbuffer) for (let Y = 0; Y < x.__webglColorRenderbuffer.length; Y++) x.__webglColorRenderbuffer[Y] && s.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);
      x.__webglDepthRenderbuffer && s.deleteRenderbuffer(x.__webglDepthRenderbuffer);
    }
    const F = E.textures;
    for (let Y = 0, K = F.length; Y < K; Y++) {
      const H = n.get(F[Y]);
      H.__webglTexture && (s.deleteTexture(H.__webglTexture), o.memory.textures--), n.remove(F[Y]);
    }
    n.remove(E);
  }
  let P = 0;
  function G() {
    P = 0;
  }
  function z() {
    const E = P;
    return E >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + i.maxTextures), P += 1, E;
  }
  function j(E) {
    const x = [];
    return x.push(E.wrapS), x.push(E.wrapT), x.push(E.wrapR || 0), x.push(E.magFilter), x.push(E.minFilter), x.push(E.anisotropy), x.push(E.internalFormat), x.push(E.format), x.push(E.type), x.push(E.generateMipmaps), x.push(E.premultiplyAlpha), x.push(E.flipY), x.push(E.unpackAlignment), x.push(E.colorSpace), x.join();
  }
  function $(E, x) {
    const F = n.get(E);
    if (E.isVideoTexture && ve(E), E.isRenderTargetTexture === false && E.version > 0 && F.__version !== E.version) {
      const Y = E.image;
      if (Y === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (Y.complete === false) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        W(F, E, x);
        return;
      }
    }
    t.bindTexture(s.TEXTURE_2D, F.__webglTexture, s.TEXTURE0 + x);
  }
  function X(E, x) {
    const F = n.get(E);
    if (E.version > 0 && F.__version !== E.version) {
      W(F, E, x);
      return;
    }
    t.bindTexture(s.TEXTURE_2D_ARRAY, F.__webglTexture, s.TEXTURE0 + x);
  }
  function Z(E, x) {
    const F = n.get(E);
    if (E.version > 0 && F.__version !== E.version) {
      W(F, E, x);
      return;
    }
    t.bindTexture(s.TEXTURE_3D, F.__webglTexture, s.TEXTURE0 + x);
  }
  function V(E, x) {
    const F = n.get(E);
    if (E.version > 0 && F.__version !== E.version) {
      ee(F, E, x);
      return;
    }
    t.bindTexture(s.TEXTURE_CUBE_MAP, F.__webglTexture, s.TEXTURE0 + x);
  }
  const se = { [Ii]: s.REPEAT, [Nn]: s.CLAMP_TO_EDGE, [hr]: s.MIRRORED_REPEAT }, he = { [Ct]: s.NEAREST, [ac]: s.NEAREST_MIPMAP_NEAREST, [rs]: s.NEAREST_MIPMAP_LINEAR, [Bt]: s.LINEAR, [ir]: s.LINEAR_MIPMAP_NEAREST, [yn]: s.LINEAR_MIPMAP_LINEAR }, xe = { [Bh]: s.NEVER, [Wh]: s.ALWAYS, [zh]: s.LESS, [vc]: s.LEQUAL, [kh]: s.EQUAL, [Gh]: s.GEQUAL, [Vh]: s.GREATER, [Hh]: s.NOTEQUAL };
  function Fe(E, x) {
    if (x.type === Jt && e.has("OES_texture_float_linear") === false && (x.magFilter === Bt || x.magFilter === ir || x.magFilter === rs || x.magFilter === yn || x.minFilter === Bt || x.minFilter === ir || x.minFilter === rs || x.minFilter === yn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), s.texParameteri(E, s.TEXTURE_WRAP_S, se[x.wrapS]), s.texParameteri(E, s.TEXTURE_WRAP_T, se[x.wrapT]), (E === s.TEXTURE_3D || E === s.TEXTURE_2D_ARRAY) && s.texParameteri(E, s.TEXTURE_WRAP_R, se[x.wrapR]), s.texParameteri(E, s.TEXTURE_MAG_FILTER, he[x.magFilter]), s.texParameteri(E, s.TEXTURE_MIN_FILTER, he[x.minFilter]), x.compareFunction && (s.texParameteri(E, s.TEXTURE_COMPARE_MODE, s.COMPARE_REF_TO_TEXTURE), s.texParameteri(E, s.TEXTURE_COMPARE_FUNC, xe[x.compareFunction])), e.has("EXT_texture_filter_anisotropic") === true) {
      if (x.magFilter === Ct || x.minFilter !== rs && x.minFilter !== yn || x.type === Jt && e.has("OES_texture_float_linear") === false) return;
      if (x.anisotropy > 1 || n.get(x).__currentAnisotropy) {
        const F = e.get("EXT_texture_filter_anisotropic");
        s.texParameterf(E, F.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(x.anisotropy, i.getMaxAnisotropy())), n.get(x).__currentAnisotropy = x.anisotropy;
      }
    }
  }
  function tt(E, x) {
    let F = false;
    E.__webglInit === void 0 && (E.__webglInit = true, x.addEventListener("dispose", C));
    const Y = x.source;
    let K = d.get(Y);
    K === void 0 && (K = {}, d.set(Y, K));
    const H = j(x);
    if (H !== E.__cacheKey) {
      K[H] === void 0 && (K[H] = { texture: s.createTexture(), usedTimes: 0 }, o.memory.textures++, F = true), K[H].usedTimes++;
      const ge = K[E.__cacheKey];
      ge !== void 0 && (K[E.__cacheKey].usedTimes--, ge.usedTimes === 0 && S(x)), E.__cacheKey = H, E.__webglTexture = K[H].texture;
    }
    return F;
  }
  function W(E, x, F) {
    let Y = s.TEXTURE_2D;
    (x.isDataArrayTexture || x.isCompressedArrayTexture) && (Y = s.TEXTURE_2D_ARRAY), x.isData3DTexture && (Y = s.TEXTURE_3D);
    const K = tt(E, x), H = x.source;
    t.bindTexture(Y, E.__webglTexture, s.TEXTURE0 + F);
    const ge = n.get(H);
    if (H.version !== ge.__version || K === true) {
      t.activeTexture(s.TEXTURE0 + F);
      const oe = He.getPrimaries(He.workingColorSpace), ue = x.colorSpace === Un ? null : He.getPrimaries(x.colorSpace), Ge = x.colorSpace === Un || oe === ue ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, x.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, x.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ge);
      let Q = _(x.image, false, i.maxTextureSize);
      Q = it(x, Q);
      const de = r.convert(x.format, x.colorSpace), Te = r.convert(x.type);
      let we = T(x.internalFormat, de, Te, x.colorSpace, x.isVideoTexture);
      Fe(Y, x);
      let fe;
      const Ve = x.mipmaps, Ie = x.isVideoTexture !== true, nt = ge.__version === void 0 || K === true, D = H.dataReady, ne = L(x, Q);
      if (x.isDepthTexture) we = M(x.format === Ni, x.type), nt && (Ie ? t.texStorage2D(s.TEXTURE_2D, 1, we, Q.width, Q.height) : t.texImage2D(s.TEXTURE_2D, 0, we, Q.width, Q.height, 0, de, Te, null));
      else if (x.isDataTexture) if (Ve.length > 0) {
        Ie && nt && t.texStorage2D(s.TEXTURE_2D, ne, we, Ve[0].width, Ve[0].height);
        for (let k = 0, q = Ve.length; k < q; k++) fe = Ve[k], Ie ? D && t.texSubImage2D(s.TEXTURE_2D, k, 0, 0, fe.width, fe.height, de, Te, fe.data) : t.texImage2D(s.TEXTURE_2D, k, we, fe.width, fe.height, 0, de, Te, fe.data);
        x.generateMipmaps = false;
      } else Ie ? (nt && t.texStorage2D(s.TEXTURE_2D, ne, we, Q.width, Q.height), D && t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, Q.width, Q.height, de, Te, Q.data)) : t.texImage2D(s.TEXTURE_2D, 0, we, Q.width, Q.height, 0, de, Te, Q.data);
      else if (x.isCompressedTexture) if (x.isCompressedArrayTexture) {
        Ie && nt && t.texStorage3D(s.TEXTURE_2D_ARRAY, ne, we, Ve[0].width, Ve[0].height, Q.depth);
        for (let k = 0, q = Ve.length; k < q; k++) if (fe = Ve[k], x.format !== Xt) if (de !== null) if (Ie) {
          if (D) if (x.layerUpdates.size > 0) {
            const le = Tl(fe.width, fe.height, x.format, x.type);
            for (const ae of x.layerUpdates) {
              const Le = fe.data.subarray(ae * le / fe.data.BYTES_PER_ELEMENT, (ae + 1) * le / fe.data.BYTES_PER_ELEMENT);
              t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, k, 0, 0, ae, fe.width, fe.height, 1, de, Le);
            }
            x.clearLayerUpdates();
          } else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, k, 0, 0, 0, fe.width, fe.height, Q.depth, de, fe.data);
        } else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY, k, we, fe.width, fe.height, Q.depth, 0, fe.data, 0, 0);
        else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else Ie ? D && t.texSubImage3D(s.TEXTURE_2D_ARRAY, k, 0, 0, 0, fe.width, fe.height, Q.depth, de, Te, fe.data) : t.texImage3D(s.TEXTURE_2D_ARRAY, k, we, fe.width, fe.height, Q.depth, 0, de, Te, fe.data);
      } else {
        Ie && nt && t.texStorage2D(s.TEXTURE_2D, ne, we, Ve[0].width, Ve[0].height);
        for (let k = 0, q = Ve.length; k < q; k++) fe = Ve[k], x.format !== Xt ? de !== null ? Ie ? D && t.compressedTexSubImage2D(s.TEXTURE_2D, k, 0, 0, fe.width, fe.height, de, fe.data) : t.compressedTexImage2D(s.TEXTURE_2D, k, we, fe.width, fe.height, 0, fe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ie ? D && t.texSubImage2D(s.TEXTURE_2D, k, 0, 0, fe.width, fe.height, de, Te, fe.data) : t.texImage2D(s.TEXTURE_2D, k, we, fe.width, fe.height, 0, de, Te, fe.data);
      }
      else if (x.isDataArrayTexture) if (Ie) {
        if (nt && t.texStorage3D(s.TEXTURE_2D_ARRAY, ne, we, Q.width, Q.height, Q.depth), D) if (x.layerUpdates.size > 0) {
          const k = Tl(Q.width, Q.height, x.format, x.type);
          for (const q of x.layerUpdates) {
            const le = Q.data.subarray(q * k / Q.data.BYTES_PER_ELEMENT, (q + 1) * k / Q.data.BYTES_PER_ELEMENT);
            t.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, q, Q.width, Q.height, 1, de, Te, le);
          }
          x.clearLayerUpdates();
        } else t.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, 0, Q.width, Q.height, Q.depth, de, Te, Q.data);
      } else t.texImage3D(s.TEXTURE_2D_ARRAY, 0, we, Q.width, Q.height, Q.depth, 0, de, Te, Q.data);
      else if (x.isData3DTexture) Ie ? (nt && t.texStorage3D(s.TEXTURE_3D, ne, we, Q.width, Q.height, Q.depth), D && t.texSubImage3D(s.TEXTURE_3D, 0, 0, 0, 0, Q.width, Q.height, Q.depth, de, Te, Q.data)) : t.texImage3D(s.TEXTURE_3D, 0, we, Q.width, Q.height, Q.depth, 0, de, Te, Q.data);
      else if (x.isFramebufferTexture) {
        if (nt) if (Ie) t.texStorage2D(s.TEXTURE_2D, ne, we, Q.width, Q.height);
        else {
          let k = Q.width, q = Q.height;
          for (let le = 0; le < ne; le++) t.texImage2D(s.TEXTURE_2D, le, we, k, q, 0, de, Te, null), k >>= 1, q >>= 1;
        }
      } else if (Ve.length > 0) {
        if (Ie && nt) {
          const k = _e(Ve[0]);
          t.texStorage2D(s.TEXTURE_2D, ne, we, k.width, k.height);
        }
        for (let k = 0, q = Ve.length; k < q; k++) fe = Ve[k], Ie ? D && t.texSubImage2D(s.TEXTURE_2D, k, 0, 0, de, Te, fe) : t.texImage2D(s.TEXTURE_2D, k, we, de, Te, fe);
        x.generateMipmaps = false;
      } else if (Ie) {
        if (nt) {
          const k = _e(Q);
          t.texStorage2D(s.TEXTURE_2D, ne, we, k.width, k.height);
        }
        D && t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, de, Te, Q);
      } else t.texImage2D(s.TEXTURE_2D, 0, we, de, Te, Q);
      m(x) && f(Y), ge.__version = H.version, x.onUpdate && x.onUpdate(x);
    }
    E.__version = x.version;
  }
  function ee(E, x, F) {
    if (x.image.length !== 6) return;
    const Y = tt(E, x), K = x.source;
    t.bindTexture(s.TEXTURE_CUBE_MAP, E.__webglTexture, s.TEXTURE0 + F);
    const H = n.get(K);
    if (K.version !== H.__version || Y === true) {
      t.activeTexture(s.TEXTURE0 + F);
      const ge = He.getPrimaries(He.workingColorSpace), oe = x.colorSpace === Un ? null : He.getPrimaries(x.colorSpace), ue = x.colorSpace === Un || ge === oe ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, x.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, x.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, ue);
      const Ge = x.isCompressedTexture || x.image[0].isCompressedTexture, Q = x.image[0] && x.image[0].isDataTexture, de = [];
      for (let q = 0; q < 6; q++) !Ge && !Q ? de[q] = _(x.image[q], true, i.maxCubemapSize) : de[q] = Q ? x.image[q].image : x.image[q], de[q] = it(x, de[q]);
      const Te = de[0], we = r.convert(x.format, x.colorSpace), fe = r.convert(x.type), Ve = T(x.internalFormat, we, fe, x.colorSpace), Ie = x.isVideoTexture !== true, nt = H.__version === void 0 || Y === true, D = K.dataReady;
      let ne = L(x, Te);
      Fe(s.TEXTURE_CUBE_MAP, x);
      let k;
      if (Ge) {
        Ie && nt && t.texStorage2D(s.TEXTURE_CUBE_MAP, ne, Ve, Te.width, Te.height);
        for (let q = 0; q < 6; q++) {
          k = de[q].mipmaps;
          for (let le = 0; le < k.length; le++) {
            const ae = k[le];
            x.format !== Xt ? we !== null ? Ie ? D && t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + q, le, 0, 0, ae.width, ae.height, we, ae.data) : t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + q, le, Ve, ae.width, ae.height, 0, ae.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ie ? D && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + q, le, 0, 0, ae.width, ae.height, we, fe, ae.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + q, le, Ve, ae.width, ae.height, 0, we, fe, ae.data);
          }
        }
      } else {
        if (k = x.mipmaps, Ie && nt) {
          k.length > 0 && ne++;
          const q = _e(de[0]);
          t.texStorage2D(s.TEXTURE_CUBE_MAP, ne, Ve, q.width, q.height);
        }
        for (let q = 0; q < 6; q++) if (Q) {
          Ie ? D && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, 0, 0, de[q].width, de[q].height, we, fe, de[q].data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, Ve, de[q].width, de[q].height, 0, we, fe, de[q].data);
          for (let le = 0; le < k.length; le++) {
            const Le = k[le].image[q].image;
            Ie ? D && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + q, le + 1, 0, 0, Le.width, Le.height, we, fe, Le.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + q, le + 1, Ve, Le.width, Le.height, 0, we, fe, Le.data);
          }
        } else {
          Ie ? D && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, 0, 0, we, fe, de[q]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, Ve, we, fe, de[q]);
          for (let le = 0; le < k.length; le++) {
            const ae = k[le];
            Ie ? D && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + q, le + 1, 0, 0, we, fe, ae.image[q]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + q, le + 1, Ve, we, fe, ae.image[q]);
          }
        }
      }
      m(x) && f(s.TEXTURE_CUBE_MAP), H.__version = K.version, x.onUpdate && x.onUpdate(x);
    }
    E.__version = x.version;
  }
  function me(E, x, F, Y, K, H) {
    const ge = r.convert(F.format, F.colorSpace), oe = r.convert(F.type), ue = T(F.internalFormat, ge, oe, F.colorSpace), Ge = n.get(x), Q = n.get(F);
    if (Q.__renderTarget = x, !Ge.__hasExternalTextures) {
      const de = Math.max(1, x.width >> H), Te = Math.max(1, x.height >> H);
      K === s.TEXTURE_3D || K === s.TEXTURE_2D_ARRAY ? t.texImage3D(K, H, ue, de, Te, x.depth, 0, ge, oe, null) : t.texImage2D(K, H, ue, de, Te, 0, ge, oe, null);
    }
    t.bindFramebuffer(s.FRAMEBUFFER, E), ke(x) ? a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, Y, K, Q.__webglTexture, 0, ze(x)) : (K === s.TEXTURE_2D || K >= s.TEXTURE_CUBE_MAP_POSITIVE_X && K <= s.TEXTURE_CUBE_MAP_NEGATIVE_Z) && s.framebufferTexture2D(s.FRAMEBUFFER, Y, K, Q.__webglTexture, H), t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function re(E, x, F) {
    if (s.bindRenderbuffer(s.RENDERBUFFER, E), x.depthBuffer) {
      const Y = x.depthTexture, K = Y && Y.isDepthTexture ? Y.type : null, H = M(x.stencilBuffer, K), ge = x.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, oe = ze(x);
      ke(x) ? a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, oe, H, x.width, x.height) : F ? s.renderbufferStorageMultisample(s.RENDERBUFFER, oe, H, x.width, x.height) : s.renderbufferStorage(s.RENDERBUFFER, H, x.width, x.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, ge, s.RENDERBUFFER, E);
    } else {
      const Y = x.textures;
      for (let K = 0; K < Y.length; K++) {
        const H = Y[K], ge = r.convert(H.format, H.colorSpace), oe = r.convert(H.type), ue = T(H.internalFormat, ge, oe, H.colorSpace), Ge = ze(x);
        F && ke(x) === false ? s.renderbufferStorageMultisample(s.RENDERBUFFER, Ge, ue, x.width, x.height) : ke(x) ? a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, Ge, ue, x.width, x.height) : s.renderbufferStorage(s.RENDERBUFFER, ue, x.width, x.height);
      }
    }
    s.bindRenderbuffer(s.RENDERBUFFER, null);
  }
  function be(E, x) {
    if (x && x.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(s.FRAMEBUFFER, E), !(x.depthTexture && x.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const Y = n.get(x.depthTexture);
    Y.__renderTarget = x, (!Y.__webglTexture || x.depthTexture.image.width !== x.width || x.depthTexture.image.height !== x.height) && (x.depthTexture.image.width = x.width, x.depthTexture.image.height = x.height, x.depthTexture.needsUpdate = true), $(x.depthTexture, 0);
    const K = Y.__webglTexture, H = ze(x);
    if (x.depthTexture.format === wi) ke(x) ? a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, K, 0, H) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, K, 0);
    else if (x.depthTexture.format === Ni) ke(x) ? a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, K, 0, H) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, K, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function Ye(E) {
    const x = n.get(E), F = E.isWebGLCubeRenderTarget === true;
    if (x.__boundDepthTexture !== E.depthTexture) {
      const Y = E.depthTexture;
      if (x.__depthDisposeCallback && x.__depthDisposeCallback(), Y) {
        const K = () => {
          delete x.__boundDepthTexture, delete x.__depthDisposeCallback, Y.removeEventListener("dispose", K);
        };
        Y.addEventListener("dispose", K), x.__depthDisposeCallback = K;
      }
      x.__boundDepthTexture = Y;
    }
    if (E.depthTexture && !x.__autoAllocateDepthBuffer) {
      if (F) throw new Error("target.depthTexture not supported in Cube render targets");
      be(x.__webglFramebuffer, E);
    } else if (F) {
      x.__webglDepthbuffer = [];
      for (let Y = 0; Y < 6; Y++) if (t.bindFramebuffer(s.FRAMEBUFFER, x.__webglFramebuffer[Y]), x.__webglDepthbuffer[Y] === void 0) x.__webglDepthbuffer[Y] = s.createRenderbuffer(), re(x.__webglDepthbuffer[Y], E, false);
      else {
        const K = E.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, H = x.__webglDepthbuffer[Y];
        s.bindRenderbuffer(s.RENDERBUFFER, H), s.framebufferRenderbuffer(s.FRAMEBUFFER, K, s.RENDERBUFFER, H);
      }
    } else if (t.bindFramebuffer(s.FRAMEBUFFER, x.__webglFramebuffer), x.__webglDepthbuffer === void 0) x.__webglDepthbuffer = s.createRenderbuffer(), re(x.__webglDepthbuffer, E, false);
    else {
      const Y = E.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, K = x.__webglDepthbuffer;
      s.bindRenderbuffer(s.RENDERBUFFER, K), s.framebufferRenderbuffer(s.FRAMEBUFFER, Y, s.RENDERBUFFER, K);
    }
    t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function Ae(E, x, F) {
    const Y = n.get(E);
    x !== void 0 && me(Y.__webglFramebuffer, E, E.texture, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, 0), F !== void 0 && Ye(E);
  }
  function ct(E) {
    const x = E.texture, F = n.get(E), Y = n.get(x);
    E.addEventListener("dispose", A);
    const K = E.textures, H = E.isWebGLCubeRenderTarget === true, ge = K.length > 1;
    if (ge || (Y.__webglTexture === void 0 && (Y.__webglTexture = s.createTexture()), Y.__version = x.version, o.memory.textures++), H) {
      F.__webglFramebuffer = [];
      for (let oe = 0; oe < 6; oe++) if (x.mipmaps && x.mipmaps.length > 0) {
        F.__webglFramebuffer[oe] = [];
        for (let ue = 0; ue < x.mipmaps.length; ue++) F.__webglFramebuffer[oe][ue] = s.createFramebuffer();
      } else F.__webglFramebuffer[oe] = s.createFramebuffer();
    } else {
      if (x.mipmaps && x.mipmaps.length > 0) {
        F.__webglFramebuffer = [];
        for (let oe = 0; oe < x.mipmaps.length; oe++) F.__webglFramebuffer[oe] = s.createFramebuffer();
      } else F.__webglFramebuffer = s.createFramebuffer();
      if (ge) for (let oe = 0, ue = K.length; oe < ue; oe++) {
        const Ge = n.get(K[oe]);
        Ge.__webglTexture === void 0 && (Ge.__webglTexture = s.createTexture(), o.memory.textures++);
      }
      if (E.samples > 0 && ke(E) === false) {
        F.__webglMultisampledFramebuffer = s.createFramebuffer(), F.__webglColorRenderbuffer = [], t.bindFramebuffer(s.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
        for (let oe = 0; oe < K.length; oe++) {
          const ue = K[oe];
          F.__webglColorRenderbuffer[oe] = s.createRenderbuffer(), s.bindRenderbuffer(s.RENDERBUFFER, F.__webglColorRenderbuffer[oe]);
          const Ge = r.convert(ue.format, ue.colorSpace), Q = r.convert(ue.type), de = T(ue.internalFormat, Ge, Q, ue.colorSpace, E.isXRRenderTarget === true), Te = ze(E);
          s.renderbufferStorageMultisample(s.RENDERBUFFER, Te, de, E.width, E.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + oe, s.RENDERBUFFER, F.__webglColorRenderbuffer[oe]);
        }
        s.bindRenderbuffer(s.RENDERBUFFER, null), E.depthBuffer && (F.__webglDepthRenderbuffer = s.createRenderbuffer(), re(F.__webglDepthRenderbuffer, E, true)), t.bindFramebuffer(s.FRAMEBUFFER, null);
      }
    }
    if (H) {
      t.bindTexture(s.TEXTURE_CUBE_MAP, Y.__webglTexture), Fe(s.TEXTURE_CUBE_MAP, x);
      for (let oe = 0; oe < 6; oe++) if (x.mipmaps && x.mipmaps.length > 0) for (let ue = 0; ue < x.mipmaps.length; ue++) me(F.__webglFramebuffer[oe][ue], E, x, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + oe, ue);
      else me(F.__webglFramebuffer[oe], E, x, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + oe, 0);
      m(x) && f(s.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ge) {
      for (let oe = 0, ue = K.length; oe < ue; oe++) {
        const Ge = K[oe], Q = n.get(Ge);
        t.bindTexture(s.TEXTURE_2D, Q.__webglTexture), Fe(s.TEXTURE_2D, Ge), me(F.__webglFramebuffer, E, Ge, s.COLOR_ATTACHMENT0 + oe, s.TEXTURE_2D, 0), m(Ge) && f(s.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let oe = s.TEXTURE_2D;
      if ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (oe = E.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY), t.bindTexture(oe, Y.__webglTexture), Fe(oe, x), x.mipmaps && x.mipmaps.length > 0) for (let ue = 0; ue < x.mipmaps.length; ue++) me(F.__webglFramebuffer[ue], E, x, s.COLOR_ATTACHMENT0, oe, ue);
      else me(F.__webglFramebuffer, E, x, s.COLOR_ATTACHMENT0, oe, 0);
      m(x) && f(oe), t.unbindTexture();
    }
    E.depthBuffer && Ye(E);
  }
  function ot(E) {
    const x = E.textures;
    for (let F = 0, Y = x.length; F < Y; F++) {
      const K = x[F];
      if (m(K)) {
        const H = b(E), ge = n.get(K).__webglTexture;
        t.bindTexture(H, ge), f(H), t.unbindTexture();
      }
    }
  }
  const Be = [], w = [];
  function zt(E) {
    if (E.samples > 0) {
      if (ke(E) === false) {
        const x = E.textures, F = E.width, Y = E.height;
        let K = s.COLOR_BUFFER_BIT;
        const H = E.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, ge = n.get(E), oe = x.length > 1;
        if (oe) for (let ue = 0; ue < x.length; ue++) t.bindFramebuffer(s.FRAMEBUFFER, ge.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + ue, s.RENDERBUFFER, null), t.bindFramebuffer(s.FRAMEBUFFER, ge.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + ue, s.TEXTURE_2D, null, 0);
        t.bindFramebuffer(s.READ_FRAMEBUFFER, ge.__webglMultisampledFramebuffer), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, ge.__webglFramebuffer);
        for (let ue = 0; ue < x.length; ue++) {
          if (E.resolveDepthBuffer && (E.depthBuffer && (K |= s.DEPTH_BUFFER_BIT), E.stencilBuffer && E.resolveStencilBuffer && (K |= s.STENCIL_BUFFER_BIT)), oe) {
            s.framebufferRenderbuffer(s.READ_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.RENDERBUFFER, ge.__webglColorRenderbuffer[ue]);
            const Ge = n.get(x[ue]).__webglTexture;
            s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, Ge, 0);
          }
          s.blitFramebuffer(0, 0, F, Y, 0, 0, F, Y, K, s.NEAREST), l === true && (Be.length = 0, w.length = 0, Be.push(s.COLOR_ATTACHMENT0 + ue), E.depthBuffer && E.resolveDepthBuffer === false && (Be.push(H), w.push(H), s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, w)), s.invalidateFramebuffer(s.READ_FRAMEBUFFER, Be));
        }
        if (t.bindFramebuffer(s.READ_FRAMEBUFFER, null), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), oe) for (let ue = 0; ue < x.length; ue++) {
          t.bindFramebuffer(s.FRAMEBUFFER, ge.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + ue, s.RENDERBUFFER, ge.__webglColorRenderbuffer[ue]);
          const Ge = n.get(x[ue]).__webglTexture;
          t.bindFramebuffer(s.FRAMEBUFFER, ge.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + ue, s.TEXTURE_2D, Ge, 0);
        }
        t.bindFramebuffer(s.DRAW_FRAMEBUFFER, ge.__webglMultisampledFramebuffer);
      } else if (E.depthBuffer && E.resolveDepthBuffer === false && l) {
        const x = E.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT;
        s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, [x]);
      }
    }
  }
  function ze(E) {
    return Math.min(i.maxSamples, E.samples);
  }
  function ke(E) {
    const x = n.get(E);
    return E.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === true && x.__useRenderToTexture !== false;
  }
  function ve(E) {
    const x = o.render.frame;
    h.get(E) !== x && (h.set(E, x), E.update());
  }
  function it(E, x) {
    const F = E.colorSpace, Y = E.format, K = E.type;
    return E.isCompressedTexture === true || E.isVideoTexture === true || F !== Lt && F !== Un && (He.getTransfer(F) === Qe ? (Y !== Xt || K !== Tn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)), x;
  }
  function _e(E) {
    return typeof HTMLImageElement < "u" && E instanceof HTMLImageElement ? (c.width = E.naturalWidth || E.width, c.height = E.naturalHeight || E.height) : typeof VideoFrame < "u" && E instanceof VideoFrame ? (c.width = E.displayWidth, c.height = E.displayHeight) : (c.width = E.width, c.height = E.height), c;
  }
  this.allocateTextureUnit = z, this.resetTextureUnits = G, this.setTexture2D = $, this.setTexture2DArray = X, this.setTexture3D = Z, this.setTextureCube = V, this.rebindTextures = Ae, this.setupRenderTarget = ct, this.updateRenderTargetMipmap = ot, this.updateMultisampleRenderTarget = zt, this.setupDepthRenderbuffer = Ye, this.setupFrameBufferTexture = me, this.useMultisampledRTT = ke;
}
function n_(s, e) {
  function t(n, i = Un) {
    let r;
    const o = He.getTransfer(i);
    if (n === Tn) return s.UNSIGNED_BYTE;
    if (n === ta) return s.UNSIGNED_SHORT_4_4_4_4;
    if (n === na) return s.UNSIGNED_SHORT_5_5_5_1;
    if (n === hc) return s.UNSIGNED_INT_5_9_9_9_REV;
    if (n === lc) return s.BYTE;
    if (n === cc) return s.SHORT;
    if (n === hs) return s.UNSIGNED_SHORT;
    if (n === ea) return s.INT;
    if (n === ei) return s.UNSIGNED_INT;
    if (n === Jt) return s.FLOAT;
    if (n === xs) return s.HALF_FLOAT;
    if (n === uc) return s.ALPHA;
    if (n === dc) return s.RGB;
    if (n === Xt) return s.RGBA;
    if (n === fc) return s.LUMINANCE;
    if (n === pc) return s.LUMINANCE_ALPHA;
    if (n === wi) return s.DEPTH_COMPONENT;
    if (n === Ni) return s.DEPTH_STENCIL;
    if (n === ia) return s.RED;
    if (n === sa) return s.RED_INTEGER;
    if (n === mc) return s.RG;
    if (n === ra) return s.RG_INTEGER;
    if (n === oa) return s.RGBA_INTEGER;
    if (n === sr || n === rr || n === or || n === ar) if (o === Qe) if (r = e.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
      if (n === sr) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (n === rr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (n === or) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (n === ar) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (r = e.get("WEBGL_compressed_texture_s3tc"), r !== null) {
      if (n === sr) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (n === rr) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (n === or) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (n === ar) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (n === xo || n === vo || n === Mo || n === yo) if (r = e.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
      if (n === xo) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (n === vo) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (n === Mo) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (n === yo) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (n === So || n === Eo || n === bo) if (r = e.get("WEBGL_compressed_texture_etc"), r !== null) {
      if (n === So || n === Eo) return o === Qe ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
      if (n === bo) return o === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
    } else return null;
    if (n === To || n === Ao || n === wo || n === Ro || n === Co || n === Po || n === Lo || n === Do || n === Io || n === Uo || n === No || n === Fo || n === Oo || n === Bo) if (r = e.get("WEBGL_compressed_texture_astc"), r !== null) {
      if (n === To) return o === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (n === Ao) return o === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (n === wo) return o === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (n === Ro) return o === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (n === Co) return o === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (n === Po) return o === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (n === Lo) return o === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (n === Do) return o === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (n === Io) return o === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (n === Uo) return o === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (n === No) return o === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (n === Fo) return o === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (n === Oo) return o === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (n === Bo) return o === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (n === lr || n === zo || n === ko) if (r = e.get("EXT_texture_compression_bptc"), r !== null) {
      if (n === lr) return o === Qe ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (n === zo) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (n === ko) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (n === gc || n === Vo || n === Ho || n === Go) if (r = e.get("EXT_texture_compression_rgtc"), r !== null) {
      if (n === lr) return r.COMPRESSED_RED_RGTC1_EXT;
      if (n === Vo) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (n === Ho) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (n === Go) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return n === Ui ? s.UNSIGNED_INT_24_8 : s[n] !== void 0 ? s[n] : null;
  }
  return { convert: t };
}
const i_ = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, s_ = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class r_ {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, n) {
    if (this.texture === null) {
      const i = new pt(), r = e.properties.get(i);
      r.__webglTexture = t.texture, (t.depthNear !== n.depthNear || t.depthFar !== n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = i;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new zn({ vertexShader: i_, fragmentShader: s_, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: t.z }, depthHeight: { value: t.w } } });
      this.mesh = new ft(new _r(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class o_ extends ni {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, r = 1, o = null, a = "local-floor", l = 1, c = null, h = null, u = null, d = null, p = null, g = null;
    const _ = new r_(), m = t.getContextAttributes();
    let f = null, b = null;
    const T = [], M = [], L = new Me();
    let C = null;
    const A = new bt();
    A.viewport = new qe();
    const N = new bt();
    N.viewport = new qe();
    const S = [A, N], y = new pd();
    let P = null, G = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(W) {
      let ee = T[W];
      return ee === void 0 && (ee = new Vr(), T[W] = ee), ee.getTargetRaySpace();
    }, this.getControllerGrip = function(W) {
      let ee = T[W];
      return ee === void 0 && (ee = new Vr(), T[W] = ee), ee.getGripSpace();
    }, this.getHand = function(W) {
      let ee = T[W];
      return ee === void 0 && (ee = new Vr(), T[W] = ee), ee.getHandSpace();
    };
    function z(W) {
      const ee = M.indexOf(W.inputSource);
      if (ee === -1) return;
      const me = T[ee];
      me !== void 0 && (me.update(W.inputSource, W.frame, c || o), me.dispatchEvent({ type: W.type, data: W.inputSource }));
    }
    function j() {
      i.removeEventListener("select", z), i.removeEventListener("selectstart", z), i.removeEventListener("selectend", z), i.removeEventListener("squeeze", z), i.removeEventListener("squeezestart", z), i.removeEventListener("squeezeend", z), i.removeEventListener("end", j), i.removeEventListener("inputsourceschange", $);
      for (let W = 0; W < T.length; W++) {
        const ee = M[W];
        ee !== null && (M[W] = null, T[W].disconnect(ee));
      }
      P = null, G = null, _.reset(), e.setRenderTarget(f), p = null, d = null, u = null, i = null, b = null, tt.stop(), n.isPresenting = false, e.setPixelRatio(C), e.setSize(L.width, L.height, false), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(W) {
      r = W, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(W) {
      a = W, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || o;
    }, this.setReferenceSpace = function(W) {
      c = W;
    }, this.getBaseLayer = function() {
      return d !== null ? d : p;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(W) {
      if (i = W, i !== null) {
        if (f = e.getRenderTarget(), i.addEventListener("select", z), i.addEventListener("selectstart", z), i.addEventListener("selectend", z), i.addEventListener("squeeze", z), i.addEventListener("squeezestart", z), i.addEventListener("squeezeend", z), i.addEventListener("end", j), i.addEventListener("inputsourceschange", $), m.xrCompatible !== true && await t.makeXRCompatible(), C = e.getPixelRatio(), e.getSize(L), typeof XRWebGLBinding < "u" && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let me = null, re = null, be = null;
          m.depth && (be = m.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, me = m.stencil ? Ni : wi, re = m.stencil ? Ui : ei);
          const Ye = { colorFormat: t.RGBA8, depthFormat: be, scaleFactor: r };
          u = new XRWebGLBinding(i, t), d = u.createProjectionLayer(Ye), i.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, false), b = new ti(d.textureWidth, d.textureHeight, { format: Xt, type: Tn, depthTexture: new Nc(d.textureWidth, d.textureHeight, re, void 0, void 0, void 0, void 0, void 0, void 0, me), stencilBuffer: m.stencil, colorSpace: e.outputColorSpace, samples: m.antialias ? 4 : 0, resolveDepthBuffer: d.ignoreDepthValues === false, resolveStencilBuffer: d.ignoreDepthValues === false });
        } else {
          const me = { antialias: m.antialias, alpha: true, depth: m.depth, stencil: m.stencil, framebufferScaleFactor: r };
          p = new XRWebGLLayer(i, t, me), i.updateRenderState({ baseLayer: p }), e.setPixelRatio(1), e.setSize(p.framebufferWidth, p.framebufferHeight, false), b = new ti(p.framebufferWidth, p.framebufferHeight, { format: Xt, type: Tn, colorSpace: e.outputColorSpace, stencilBuffer: m.stencil, resolveDepthBuffer: p.ignoreDepthValues === false, resolveStencilBuffer: p.ignoreDepthValues === false });
        }
        b.isXRRenderTarget = true, this.setFoveation(l), c = null, o = await i.requestReferenceSpace(a), tt.setContext(i), tt.start(), n.isPresenting = true, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null) return i.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return _.getDepthTexture();
    };
    function $(W) {
      for (let ee = 0; ee < W.removed.length; ee++) {
        const me = W.removed[ee], re = M.indexOf(me);
        re >= 0 && (M[re] = null, T[re].disconnect(me));
      }
      for (let ee = 0; ee < W.added.length; ee++) {
        const me = W.added[ee];
        let re = M.indexOf(me);
        if (re === -1) {
          for (let Ye = 0; Ye < T.length; Ye++) if (Ye >= M.length) {
            M.push(me), re = Ye;
            break;
          } else if (M[Ye] === null) {
            M[Ye] = me, re = Ye;
            break;
          }
          if (re === -1) break;
        }
        const be = T[re];
        be && be.connect(me);
      }
    }
    const X = new R(), Z = new R();
    function V(W, ee, me) {
      X.setFromMatrixPosition(ee.matrixWorld), Z.setFromMatrixPosition(me.matrixWorld);
      const re = X.distanceTo(Z), be = ee.projectionMatrix.elements, Ye = me.projectionMatrix.elements, Ae = be[14] / (be[10] - 1), ct = be[14] / (be[10] + 1), ot = (be[9] + 1) / be[5], Be = (be[9] - 1) / be[5], w = (be[8] - 1) / be[0], zt = (Ye[8] + 1) / Ye[0], ze = Ae * w, ke = Ae * zt, ve = re / (-w + zt), it = ve * -w;
      if (ee.matrixWorld.decompose(W.position, W.quaternion, W.scale), W.translateX(it), W.translateZ(ve), W.matrixWorld.compose(W.position, W.quaternion, W.scale), W.matrixWorldInverse.copy(W.matrixWorld).invert(), be[10] === -1) W.projectionMatrix.copy(ee.projectionMatrix), W.projectionMatrixInverse.copy(ee.projectionMatrixInverse);
      else {
        const _e = Ae + ve, E = ct + ve, x = ze - it, F = ke + (re - it), Y = ot * ct / E * _e, K = Be * ct / E * _e;
        W.projectionMatrix.makePerspective(x, F, Y, K, _e, E), W.projectionMatrixInverse.copy(W.projectionMatrix).invert();
      }
    }
    function se(W, ee) {
      ee === null ? W.matrixWorld.copy(W.matrix) : W.matrixWorld.multiplyMatrices(ee.matrixWorld, W.matrix), W.matrixWorldInverse.copy(W.matrixWorld).invert();
    }
    this.updateCamera = function(W) {
      if (i === null) return;
      let ee = W.near, me = W.far;
      _.texture !== null && (_.depthNear > 0 && (ee = _.depthNear), _.depthFar > 0 && (me = _.depthFar)), y.near = N.near = A.near = ee, y.far = N.far = A.far = me, (P !== y.near || G !== y.far) && (i.updateRenderState({ depthNear: y.near, depthFar: y.far }), P = y.near, G = y.far), A.layers.mask = W.layers.mask | 2, N.layers.mask = W.layers.mask | 4, y.layers.mask = A.layers.mask | N.layers.mask;
      const re = W.parent, be = y.cameras;
      se(y, re);
      for (let Ye = 0; Ye < be.length; Ye++) se(be[Ye], re);
      be.length === 2 ? V(y, A, N) : y.projectionMatrix.copy(A.projectionMatrix), he(W, y, re);
    };
    function he(W, ee, me) {
      me === null ? W.matrix.copy(ee.matrixWorld) : (W.matrix.copy(me.matrixWorld), W.matrix.invert(), W.matrix.multiply(ee.matrixWorld)), W.matrix.decompose(W.position, W.quaternion, W.scale), W.updateMatrixWorld(true), W.projectionMatrix.copy(ee.projectionMatrix), W.projectionMatrixInverse.copy(ee.projectionMatrixInverse), W.isPerspectiveCamera && (W.fov = Fi * 2 * Math.atan(1 / W.projectionMatrix.elements[5]), W.zoom = 1);
    }
    this.getCamera = function() {
      return y;
    }, this.getFoveation = function() {
      if (!(d === null && p === null)) return l;
    }, this.setFoveation = function(W) {
      l = W, d !== null && (d.fixedFoveation = W), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = W);
    }, this.hasDepthSensing = function() {
      return _.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return _.getMesh(y);
    };
    let xe = null;
    function Fe(W, ee) {
      if (h = ee.getViewerPose(c || o), g = ee, h !== null) {
        const me = h.views;
        p !== null && (e.setRenderTargetFramebuffer(b, p.framebuffer), e.setRenderTarget(b));
        let re = false;
        me.length !== y.cameras.length && (y.cameras.length = 0, re = true);
        for (let Ae = 0; Ae < me.length; Ae++) {
          const ct = me[Ae];
          let ot = null;
          if (p !== null) ot = p.getViewport(ct);
          else {
            const w = u.getViewSubImage(d, ct);
            ot = w.viewport, Ae === 0 && (e.setRenderTargetTextures(b, w.colorTexture, d.ignoreDepthValues ? void 0 : w.depthStencilTexture), e.setRenderTarget(b));
          }
          let Be = S[Ae];
          Be === void 0 && (Be = new bt(), Be.layers.enable(Ae), Be.viewport = new qe(), S[Ae] = Be), Be.matrix.fromArray(ct.transform.matrix), Be.matrix.decompose(Be.position, Be.quaternion, Be.scale), Be.projectionMatrix.fromArray(ct.projectionMatrix), Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(), Be.viewport.set(ot.x, ot.y, ot.width, ot.height), Ae === 0 && (y.matrix.copy(Be.matrix), y.matrix.decompose(y.position, y.quaternion, y.scale)), re === true && y.cameras.push(Be);
        }
        const be = i.enabledFeatures;
        if (be && be.includes("depth-sensing") && i.depthUsage == "gpu-optimized" && u) {
          const Ae = u.getDepthInformation(me[0]);
          Ae && Ae.isValid && Ae.texture && _.init(e, Ae, i.renderState);
        }
      }
      for (let me = 0; me < T.length; me++) {
        const re = M[me], be = T[me];
        re !== null && be !== void 0 && be.update(re, ee, c || o);
      }
      xe && xe(W, ee), ee.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: ee }), g = null;
    }
    const tt = new Vc();
    tt.setAnimationLoop(Fe), this.setAnimationLoop = function(W) {
      xe = W;
    }, this.dispose = function() {
    };
  }
}
const qn = new ln(), a_ = new Pe();
function l_(s, e) {
  function t(m, f) {
    m.matrixAutoUpdate === true && m.updateMatrix(), f.value.copy(m.matrix);
  }
  function n(m, f) {
    f.color.getRGB(m.fogColor.value, Ac(s)), f.isFog ? (m.fogNear.value = f.near, m.fogFar.value = f.far) : f.isFogExp2 && (m.fogDensity.value = f.density);
  }
  function i(m, f, b, T, M) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial ? r(m, f) : f.isMeshToonMaterial ? (r(m, f), u(m, f)) : f.isMeshPhongMaterial ? (r(m, f), h(m, f)) : f.isMeshStandardMaterial ? (r(m, f), d(m, f), f.isMeshPhysicalMaterial && p(m, f, M)) : f.isMeshMatcapMaterial ? (r(m, f), g(m, f)) : f.isMeshDepthMaterial ? r(m, f) : f.isMeshDistanceMaterial ? (r(m, f), _(m, f)) : f.isMeshNormalMaterial ? r(m, f) : f.isLineBasicMaterial ? (o(m, f), f.isLineDashedMaterial && a(m, f)) : f.isPointsMaterial ? l(m, f, b, T) : f.isSpriteMaterial ? c(m, f) : f.isShadowMaterial ? (m.color.value.copy(f.color), m.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = false);
  }
  function r(m, f) {
    m.opacity.value = f.opacity, f.color && m.diffuse.value.copy(f.color), f.emissive && m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (m.map.value = f.map, t(f.map, m.mapTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.bumpMap && (m.bumpMap.value = f.bumpMap, t(f.bumpMap, m.bumpMapTransform), m.bumpScale.value = f.bumpScale, f.side === Ut && (m.bumpScale.value *= -1)), f.normalMap && (m.normalMap.value = f.normalMap, t(f.normalMap, m.normalMapTransform), m.normalScale.value.copy(f.normalScale), f.side === Ut && m.normalScale.value.negate()), f.displacementMap && (m.displacementMap.value = f.displacementMap, t(f.displacementMap, m.displacementMapTransform), m.displacementScale.value = f.displacementScale, m.displacementBias.value = f.displacementBias), f.emissiveMap && (m.emissiveMap.value = f.emissiveMap, t(f.emissiveMap, m.emissiveMapTransform)), f.specularMap && (m.specularMap.value = f.specularMap, t(f.specularMap, m.specularMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
    const b = e.get(f), T = b.envMap, M = b.envMapRotation;
    T && (m.envMap.value = T, qn.copy(M), qn.x *= -1, qn.y *= -1, qn.z *= -1, T.isCubeTexture && T.isRenderTargetTexture === false && (qn.y *= -1, qn.z *= -1), m.envMapRotation.value.setFromMatrix4(a_.makeRotationFromEuler(qn)), m.flipEnvMap.value = T.isCubeTexture && T.isRenderTargetTexture === false ? -1 : 1, m.reflectivity.value = f.reflectivity, m.ior.value = f.ior, m.refractionRatio.value = f.refractionRatio), f.lightMap && (m.lightMap.value = f.lightMap, m.lightMapIntensity.value = f.lightMapIntensity, t(f.lightMap, m.lightMapTransform)), f.aoMap && (m.aoMap.value = f.aoMap, m.aoMapIntensity.value = f.aoMapIntensity, t(f.aoMap, m.aoMapTransform));
  }
  function o(m, f) {
    m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, f.map && (m.map.value = f.map, t(f.map, m.mapTransform));
  }
  function a(m, f) {
    m.dashSize.value = f.dashSize, m.totalSize.value = f.dashSize + f.gapSize, m.scale.value = f.scale;
  }
  function l(m, f, b, T) {
    m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, m.size.value = f.size * b, m.scale.value = T * 0.5, f.map && (m.map.value = f.map, t(f.map, m.uvTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
  }
  function c(m, f) {
    m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, m.rotation.value = f.rotation, f.map && (m.map.value = f.map, t(f.map, m.mapTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
  }
  function h(m, f) {
    m.specular.value.copy(f.specular), m.shininess.value = Math.max(f.shininess, 1e-4);
  }
  function u(m, f) {
    f.gradientMap && (m.gradientMap.value = f.gradientMap);
  }
  function d(m, f) {
    m.metalness.value = f.metalness, f.metalnessMap && (m.metalnessMap.value = f.metalnessMap, t(f.metalnessMap, m.metalnessMapTransform)), m.roughness.value = f.roughness, f.roughnessMap && (m.roughnessMap.value = f.roughnessMap, t(f.roughnessMap, m.roughnessMapTransform)), f.envMap && (m.envMapIntensity.value = f.envMapIntensity);
  }
  function p(m, f, b) {
    m.ior.value = f.ior, f.sheen > 0 && (m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), m.sheenRoughness.value = f.sheenRoughness, f.sheenColorMap && (m.sheenColorMap.value = f.sheenColorMap, t(f.sheenColorMap, m.sheenColorMapTransform)), f.sheenRoughnessMap && (m.sheenRoughnessMap.value = f.sheenRoughnessMap, t(f.sheenRoughnessMap, m.sheenRoughnessMapTransform))), f.clearcoat > 0 && (m.clearcoat.value = f.clearcoat, m.clearcoatRoughness.value = f.clearcoatRoughness, f.clearcoatMap && (m.clearcoatMap.value = f.clearcoatMap, t(f.clearcoatMap, m.clearcoatMapTransform)), f.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap, t(f.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), f.clearcoatNormalMap && (m.clearcoatNormalMap.value = f.clearcoatNormalMap, t(f.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), f.side === Ut && m.clearcoatNormalScale.value.negate())), f.dispersion > 0 && (m.dispersion.value = f.dispersion), f.iridescence > 0 && (m.iridescence.value = f.iridescence, m.iridescenceIOR.value = f.iridescenceIOR, m.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1], f.iridescenceMap && (m.iridescenceMap.value = f.iridescenceMap, t(f.iridescenceMap, m.iridescenceMapTransform)), f.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = f.iridescenceThicknessMap, t(f.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), f.transmission > 0 && (m.transmission.value = f.transmission, m.transmissionSamplerMap.value = b.texture, m.transmissionSamplerSize.value.set(b.width, b.height), f.transmissionMap && (m.transmissionMap.value = f.transmissionMap, t(f.transmissionMap, m.transmissionMapTransform)), m.thickness.value = f.thickness, f.thicknessMap && (m.thicknessMap.value = f.thicknessMap, t(f.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = f.attenuationDistance, m.attenuationColor.value.copy(f.attenuationColor)), f.anisotropy > 0 && (m.anisotropyVector.value.set(f.anisotropy * Math.cos(f.anisotropyRotation), f.anisotropy * Math.sin(f.anisotropyRotation)), f.anisotropyMap && (m.anisotropyMap.value = f.anisotropyMap, t(f.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = f.specularIntensity, m.specularColor.value.copy(f.specularColor), f.specularColorMap && (m.specularColorMap.value = f.specularColorMap, t(f.specularColorMap, m.specularColorMapTransform)), f.specularIntensityMap && (m.specularIntensityMap.value = f.specularIntensityMap, t(f.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function g(m, f) {
    f.matcap && (m.matcap.value = f.matcap);
  }
  function _(m, f) {
    const b = e.get(f).light;
    m.referencePosition.value.setFromMatrixPosition(b.matrixWorld), m.nearDistance.value = b.shadow.camera.near, m.farDistance.value = b.shadow.camera.far;
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: i };
}
function c_(s, e, t, n) {
  let i = {}, r = {}, o = [];
  const a = s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(b, T) {
    const M = T.program;
    n.uniformBlockBinding(b, M);
  }
  function c(b, T) {
    let M = i[b.id];
    M === void 0 && (g(b), M = h(b), i[b.id] = M, b.addEventListener("dispose", m));
    const L = T.program;
    n.updateUBOMapping(b, L);
    const C = e.render.frame;
    r[b.id] !== C && (d(b), r[b.id] = C);
  }
  function h(b) {
    const T = u();
    b.__bindingPointIndex = T;
    const M = s.createBuffer(), L = b.__size, C = b.usage;
    return s.bindBuffer(s.UNIFORM_BUFFER, M), s.bufferData(s.UNIFORM_BUFFER, L, C), s.bindBuffer(s.UNIFORM_BUFFER, null), s.bindBufferBase(s.UNIFORM_BUFFER, T, M), M;
  }
  function u() {
    for (let b = 0; b < a; b++) if (o.indexOf(b) === -1) return o.push(b), b;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(b) {
    const T = i[b.id], M = b.uniforms, L = b.__cache;
    s.bindBuffer(s.UNIFORM_BUFFER, T);
    for (let C = 0, A = M.length; C < A; C++) {
      const N = Array.isArray(M[C]) ? M[C] : [M[C]];
      for (let S = 0, y = N.length; S < y; S++) {
        const P = N[S];
        if (p(P, C, S, L) === true) {
          const G = P.__offset, z = Array.isArray(P.value) ? P.value : [P.value];
          let j = 0;
          for (let $ = 0; $ < z.length; $++) {
            const X = z[$], Z = _(X);
            typeof X == "number" || typeof X == "boolean" ? (P.__data[0] = X, s.bufferSubData(s.UNIFORM_BUFFER, G + j, P.__data)) : X.isMatrix3 ? (P.__data[0] = X.elements[0], P.__data[1] = X.elements[1], P.__data[2] = X.elements[2], P.__data[3] = 0, P.__data[4] = X.elements[3], P.__data[5] = X.elements[4], P.__data[6] = X.elements[5], P.__data[7] = 0, P.__data[8] = X.elements[6], P.__data[9] = X.elements[7], P.__data[10] = X.elements[8], P.__data[11] = 0) : (X.toArray(P.__data, j), j += Z.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          s.bufferSubData(s.UNIFORM_BUFFER, G, P.__data);
        }
      }
    }
    s.bindBuffer(s.UNIFORM_BUFFER, null);
  }
  function p(b, T, M, L) {
    const C = b.value, A = T + "_" + M;
    if (L[A] === void 0) return typeof C == "number" || typeof C == "boolean" ? L[A] = C : L[A] = C.clone(), true;
    {
      const N = L[A];
      if (typeof C == "number" || typeof C == "boolean") {
        if (N !== C) return L[A] = C, true;
      } else if (N.equals(C) === false) return N.copy(C), true;
    }
    return false;
  }
  function g(b) {
    const T = b.uniforms;
    let M = 0;
    const L = 16;
    for (let A = 0, N = T.length; A < N; A++) {
      const S = Array.isArray(T[A]) ? T[A] : [T[A]];
      for (let y = 0, P = S.length; y < P; y++) {
        const G = S[y], z = Array.isArray(G.value) ? G.value : [G.value];
        for (let j = 0, $ = z.length; j < $; j++) {
          const X = z[j], Z = _(X), V = M % L, se = V % Z.boundary, he = V + se;
          M += se, he !== 0 && L - he < Z.storage && (M += L - he), G.__data = new Float32Array(Z.storage / Float32Array.BYTES_PER_ELEMENT), G.__offset = M, M += Z.storage;
        }
      }
    }
    const C = M % L;
    return C > 0 && (M += L - C), b.__size = M, b.__cache = {}, this;
  }
  function _(b) {
    const T = { boundary: 0, storage: 0 };
    return typeof b == "number" || typeof b == "boolean" ? (T.boundary = 4, T.storage = 4) : b.isVector2 ? (T.boundary = 8, T.storage = 8) : b.isVector3 || b.isColor ? (T.boundary = 16, T.storage = 12) : b.isVector4 ? (T.boundary = 16, T.storage = 16) : b.isMatrix3 ? (T.boundary = 48, T.storage = 48) : b.isMatrix4 ? (T.boundary = 64, T.storage = 64) : b.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", b), T;
  }
  function m(b) {
    const T = b.target;
    T.removeEventListener("dispose", m);
    const M = o.indexOf(T.__bindingPointIndex);
    o.splice(M, 1), s.deleteBuffer(i[T.id]), delete i[T.id], delete r[T.id];
  }
  function f() {
    for (const b in i) s.deleteBuffer(i[b]);
    o = [], i = {}, r = {};
  }
  return { bind: l, update: c, dispose: f };
}
class Yc {
  constructor(e = {}) {
    const { canvas: t = au(), context: n = null, depth: i = true, stencil: r = false, alpha: o = false, antialias: a = false, premultipliedAlpha: l = true, preserveDrawingBuffer: c = false, powerPreference: h = "default", failIfMajorPerformanceCaveat: u = false, reverseDepthBuffer: d = false } = e;
    this.isWebGLRenderer = true;
    let p;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      p = n.getContextAttributes().alpha;
    } else p = o;
    const g = new Uint32Array(4), _ = new Int32Array(4);
    let m = null, f = null;
    const b = [], T = [];
    this.domElement = t, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this._outputColorSpace = Mt, this.toneMapping = Bn, this.toneMappingExposure = 1;
    const M = this;
    let L = false, C = 0, A = 0, N = null, S = -1, y = null;
    const P = new qe(), G = new qe();
    let z = null;
    const j = new Ee(0);
    let $ = 0, X = t.width, Z = t.height, V = 1, se = null, he = null;
    const xe = new qe(0, 0, X, Z), Fe = new qe(0, 0, X, Z);
    let tt = false;
    const W = new da();
    let ee = false, me = false;
    this.transmissionResolutionScale = 1;
    const re = new Pe(), be = new Pe(), Ye = new R(), Ae = new qe(), ct = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    let ot = false;
    function Be() {
      return N === null ? V : 1;
    }
    let w = n;
    function zt(v, I) {
      return t.getContext(v, I);
    }
    try {
      const v = { alpha: true, depth: i, stencil: r, antialias: a, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: h, failIfMajorPerformanceCaveat: u };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Qo}`), t.addEventListener("webglcontextlost", q, false), t.addEventListener("webglcontextrestored", le, false), t.addEventListener("webglcontextcreationerror", ae, false), w === null) {
        const I = "webgl2";
        if (w = zt(I, v), w === null) throw zt(I) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (v) {
      throw console.error("THREE.WebGLRenderer: " + v.message), v;
    }
    let ze, ke, ve, it, _e, E, x, F, Y, K, H, ge, oe, ue, Ge, Q, de, Te, we, fe, Ve, Ie, nt, D;
    function ne() {
      ze = new Mm(w), ze.init(), Ie = new n_(w, ze), ke = new fm(w, ze, e, Ie), ve = new e_(w, ze), ke.reverseDepthBuffer && d && ve.buffers.depth.setReversed(true), it = new Em(w), _e = new Vg(), E = new t_(w, ze, ve, _e, ke, Ie, it), x = new mm(M), F = new vm(M), Y = new Rd(w), nt = new um(w, Y), K = new ym(w, Y, it, nt), H = new Tm(w, K, Y, it), we = new bm(w, ke, E), Q = new pm(_e), ge = new kg(M, x, F, ze, ke, nt, Q), oe = new l_(M, _e), ue = new Gg(), Ge = new $g(ze), Te = new hm(M, x, F, ve, H, p, l), de = new Jg(M, H, ke), D = new c_(w, it, ke, ve), fe = new dm(w, ze, it), Ve = new Sm(w, ze, it), it.programs = ge.programs, M.capabilities = ke, M.extensions = ze, M.properties = _e, M.renderLists = ue, M.shadowMap = de, M.state = ve, M.info = it;
    }
    ne();
    const k = new o_(M, w);
    this.xr = k, this.getContext = function() {
      return w;
    }, this.getContextAttributes = function() {
      return w.getContextAttributes();
    }, this.forceContextLoss = function() {
      const v = ze.get("WEBGL_lose_context");
      v && v.loseContext();
    }, this.forceContextRestore = function() {
      const v = ze.get("WEBGL_lose_context");
      v && v.restoreContext();
    }, this.getPixelRatio = function() {
      return V;
    }, this.setPixelRatio = function(v) {
      v !== void 0 && (V = v, this.setSize(X, Z, false));
    }, this.getSize = function(v) {
      return v.set(X, Z);
    }, this.setSize = function(v, I, O = true) {
      if (k.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      X = v, Z = I, t.width = Math.floor(v * V), t.height = Math.floor(I * V), O === true && (t.style.width = v + "px", t.style.height = I + "px"), this.setViewport(0, 0, v, I);
    }, this.getDrawingBufferSize = function(v) {
      return v.set(X * V, Z * V).floor();
    }, this.setDrawingBufferSize = function(v, I, O) {
      X = v, Z = I, V = O, t.width = Math.floor(v * O), t.height = Math.floor(I * O), this.setViewport(0, 0, v, I);
    }, this.getCurrentViewport = function(v) {
      return v.copy(P);
    }, this.getViewport = function(v) {
      return v.copy(xe);
    }, this.setViewport = function(v, I, O, B) {
      v.isVector4 ? xe.set(v.x, v.y, v.z, v.w) : xe.set(v, I, O, B), ve.viewport(P.copy(xe).multiplyScalar(V).round());
    }, this.getScissor = function(v) {
      return v.copy(Fe);
    }, this.setScissor = function(v, I, O, B) {
      v.isVector4 ? Fe.set(v.x, v.y, v.z, v.w) : Fe.set(v, I, O, B), ve.scissor(G.copy(Fe).multiplyScalar(V).round());
    }, this.getScissorTest = function() {
      return tt;
    }, this.setScissorTest = function(v) {
      ve.setScissorTest(tt = v);
    }, this.setOpaqueSort = function(v) {
      se = v;
    }, this.setTransparentSort = function(v) {
      he = v;
    }, this.getClearColor = function(v) {
      return v.copy(Te.getClearColor());
    }, this.setClearColor = function() {
      Te.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return Te.getClearAlpha();
    }, this.setClearAlpha = function() {
      Te.setClearAlpha(...arguments);
    }, this.clear = function(v = true, I = true, O = true) {
      let B = 0;
      if (v) {
        let U = false;
        if (N !== null) {
          const J = N.texture.format;
          U = J === oa || J === ra || J === sa;
        }
        if (U) {
          const J = N.texture.type, ie = J === Tn || J === ei || J === hs || J === Ui || J === ta || J === na, ce = Te.getClearColor(), pe = Te.getClearAlpha(), Re = ce.r, Ce = ce.g, ye = ce.b;
          ie ? (g[0] = Re, g[1] = Ce, g[2] = ye, g[3] = pe, w.clearBufferuiv(w.COLOR, 0, g)) : (_[0] = Re, _[1] = Ce, _[2] = ye, _[3] = pe, w.clearBufferiv(w.COLOR, 0, _));
        } else B |= w.COLOR_BUFFER_BIT;
      }
      I && (B |= w.DEPTH_BUFFER_BIT), O && (B |= w.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), w.clear(B);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", q, false), t.removeEventListener("webglcontextrestored", le, false), t.removeEventListener("webglcontextcreationerror", ae, false), Te.dispose(), ue.dispose(), Ge.dispose(), _e.dispose(), x.dispose(), F.dispose(), H.dispose(), nt.dispose(), D.dispose(), ge.dispose(), k.dispose(), k.removeEventListener("sessionstart", ya), k.removeEventListener("sessionend", Sa), kn.stop();
    };
    function q(v) {
      v.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), L = true;
    }
    function le() {
      console.log("THREE.WebGLRenderer: Context Restored."), L = false;
      const v = it.autoReset, I = de.enabled, O = de.autoUpdate, B = de.needsUpdate, U = de.type;
      ne(), it.autoReset = v, de.enabled = I, de.autoUpdate = O, de.needsUpdate = B, de.type = U;
    }
    function ae(v) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", v.statusMessage);
    }
    function Le(v) {
      const I = v.target;
      I.removeEventListener("dispose", Le), at(I);
    }
    function at(v) {
      yt(v), _e.remove(v);
    }
    function yt(v) {
      const I = _e.get(v).programs;
      I !== void 0 && (I.forEach(function(O) {
        ge.releaseProgram(O);
      }), v.isShaderMaterial && ge.releaseShaderCache(v));
    }
    this.renderBufferDirect = function(v, I, O, B, U, J) {
      I === null && (I = ct);
      const ie = U.isMesh && U.matrixWorld.determinant() < 0, ce = Kc(v, I, O, B, U);
      ve.setMaterial(B, ie);
      let pe = O.index, Re = 1;
      if (B.wireframe === true) {
        if (pe = K.getWireframeAttribute(O), pe === void 0) return;
        Re = 2;
      }
      const Ce = O.drawRange, ye = O.attributes.position;
      let We = Ce.start * Re, je = (Ce.start + Ce.count) * Re;
      J !== null && (We = Math.max(We, J.start * Re), je = Math.min(je, (J.start + J.count) * Re)), pe !== null ? (We = Math.max(We, 0), je = Math.min(je, pe.count)) : ye != null && (We = Math.max(We, 0), je = Math.min(je, ye.count));
      const ht = je - We;
      if (ht < 0 || ht === 1 / 0) return;
      nt.setup(U, B, ce, O, pe);
      let lt, Xe = fe;
      if (pe !== null && (lt = Y.get(pe), Xe = Ve, Xe.setIndex(lt)), U.isMesh) B.wireframe === true ? (ve.setLineWidth(B.wireframeLinewidth * Be()), Xe.setMode(w.LINES)) : Xe.setMode(w.TRIANGLES);
      else if (U.isLine) {
        let Se = B.linewidth;
        Se === void 0 && (Se = 1), ve.setLineWidth(Se * Be()), U.isLineSegments ? Xe.setMode(w.LINES) : U.isLineLoop ? Xe.setMode(w.LINE_LOOP) : Xe.setMode(w.LINE_STRIP);
      } else U.isPoints ? Xe.setMode(w.POINTS) : U.isSprite && Xe.setMode(w.TRIANGLES);
      if (U.isBatchedMesh) if (U._multiDrawInstances !== null) $n("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), Xe.renderMultiDrawInstances(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount, U._multiDrawInstances);
      else if (ze.get("WEBGL_multi_draw")) Xe.renderMultiDraw(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount);
      else {
        const Se = U._multiDrawStarts, vt = U._multiDrawCounts, $e = U._multiDrawCount, qt = pe ? Y.get(pe).bytesPerElement : 1, ii = _e.get(B).currentProgram.getUniforms();
        for (let Nt = 0; Nt < $e; Nt++) ii.setValue(w, "_gl_DrawID", Nt), Xe.render(Se[Nt] / qt, vt[Nt]);
      }
      else if (U.isInstancedMesh) Xe.renderInstances(We, ht, U.count);
      else if (O.isInstancedBufferGeometry) {
        const Se = O._maxInstanceCount !== void 0 ? O._maxInstanceCount : 1 / 0, vt = Math.min(O.instanceCount, Se);
        Xe.renderInstances(We, ht, vt);
      } else Xe.render(We, ht);
    };
    function Ke(v, I, O) {
      v.transparent === true && v.side === sn && v.forceSinglePass === false ? (v.side = Ut, v.needsUpdate = true, Ts(v, I, O), v.side = bn, v.needsUpdate = true, Ts(v, I, O), v.side = sn) : Ts(v, I, O);
    }
    this.compile = function(v, I, O = null) {
      O === null && (O = v), f = Ge.get(O), f.init(I), T.push(f), O.traverseVisible(function(U) {
        U.isLight && U.layers.test(I.layers) && (f.pushLight(U), U.castShadow && f.pushShadow(U));
      }), v !== O && v.traverseVisible(function(U) {
        U.isLight && U.layers.test(I.layers) && (f.pushLight(U), U.castShadow && f.pushShadow(U));
      }), f.setupLights();
      const B = /* @__PURE__ */ new Set();
      return v.traverse(function(U) {
        if (!(U.isMesh || U.isPoints || U.isLine || U.isSprite)) return;
        const J = U.material;
        if (J) if (Array.isArray(J)) for (let ie = 0; ie < J.length; ie++) {
          const ce = J[ie];
          Ke(ce, O, U), B.add(ce);
        }
        else Ke(J, O, U), B.add(J);
      }), f = T.pop(), B;
    }, this.compileAsync = function(v, I, O = null) {
      const B = this.compile(v, I, O);
      return new Promise((U) => {
        function J() {
          if (B.forEach(function(ie) {
            _e.get(ie).currentProgram.isReady() && B.delete(ie);
          }), B.size === 0) {
            U(v);
            return;
          }
          setTimeout(J, 10);
        }
        ze.get("KHR_parallel_shader_compile") !== null ? J() : setTimeout(J, 10);
      });
    };
    let Yt = null;
    function dn(v) {
      Yt && Yt(v);
    }
    function ya() {
      kn.stop();
    }
    function Sa() {
      kn.start();
    }
    const kn = new Vc();
    kn.setAnimationLoop(dn), typeof self < "u" && kn.setContext(self), this.setAnimationLoop = function(v) {
      Yt = v, k.setAnimationLoop(v), v === null ? kn.stop() : kn.start();
    }, k.addEventListener("sessionstart", ya), k.addEventListener("sessionend", Sa), this.render = function(v, I) {
      if (I !== void 0 && I.isCamera !== true) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (L === true) return;
      if (v.matrixWorldAutoUpdate === true && v.updateMatrixWorld(), I.parent === null && I.matrixWorldAutoUpdate === true && I.updateMatrixWorld(), k.enabled === true && k.isPresenting === true && (k.cameraAutoUpdate === true && k.updateCamera(I), I = k.getCamera()), v.isScene === true && v.onBeforeRender(M, v, I, N), f = Ge.get(v, T.length), f.init(I), T.push(f), be.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse), W.setFromProjectionMatrix(be), me = this.localClippingEnabled, ee = Q.init(this.clippingPlanes, me), m = ue.get(v, b.length), m.init(), b.push(m), k.enabled === true && k.isPresenting === true) {
        const J = M.xr.getDepthSensingMesh();
        J !== null && vr(J, I, -1 / 0, M.sortObjects);
      }
      vr(v, I, 0, M.sortObjects), m.finish(), M.sortObjects === true && m.sort(se, he), ot = k.enabled === false || k.isPresenting === false || k.hasDepthSensing() === false, ot && Te.addToRenderList(m, v), this.info.render.frame++, ee === true && Q.beginShadows();
      const O = f.state.shadowsArray;
      de.render(O, v, I), ee === true && Q.endShadows(), this.info.autoReset === true && this.info.reset();
      const B = m.opaque, U = m.transmissive;
      if (f.setupLights(), I.isArrayCamera) {
        const J = I.cameras;
        if (U.length > 0) for (let ie = 0, ce = J.length; ie < ce; ie++) {
          const pe = J[ie];
          ba(B, U, v, pe);
        }
        ot && Te.render(v);
        for (let ie = 0, ce = J.length; ie < ce; ie++) {
          const pe = J[ie];
          Ea(m, v, pe, pe.viewport);
        }
      } else U.length > 0 && ba(B, U, v, I), ot && Te.render(v), Ea(m, v, I);
      N !== null && A === 0 && (E.updateMultisampleRenderTarget(N), E.updateRenderTargetMipmap(N)), v.isScene === true && v.onAfterRender(M, v, I), nt.resetDefaultState(), S = -1, y = null, T.pop(), T.length > 0 ? (f = T[T.length - 1], ee === true && Q.setGlobalState(M.clippingPlanes, f.state.camera)) : f = null, b.pop(), b.length > 0 ? m = b[b.length - 1] : m = null;
    };
    function vr(v, I, O, B) {
      if (v.visible === false) return;
      if (v.layers.test(I.layers)) {
        if (v.isGroup) O = v.renderOrder;
        else if (v.isLOD) v.autoUpdate === true && v.update(I);
        else if (v.isLight) f.pushLight(v), v.castShadow && f.pushShadow(v);
        else if (v.isSprite) {
          if (!v.frustumCulled || W.intersectsSprite(v)) {
            B && Ae.setFromMatrixPosition(v.matrixWorld).applyMatrix4(be);
            const ie = H.update(v), ce = v.material;
            ce.visible && m.push(v, ie, ce, O, Ae.z, null);
          }
        } else if ((v.isMesh || v.isLine || v.isPoints) && (!v.frustumCulled || W.intersectsObject(v))) {
          const ie = H.update(v), ce = v.material;
          if (B && (v.boundingSphere !== void 0 ? (v.boundingSphere === null && v.computeBoundingSphere(), Ae.copy(v.boundingSphere.center)) : (ie.boundingSphere === null && ie.computeBoundingSphere(), Ae.copy(ie.boundingSphere.center)), Ae.applyMatrix4(v.matrixWorld).applyMatrix4(be)), Array.isArray(ce)) {
            const pe = ie.groups;
            for (let Re = 0, Ce = pe.length; Re < Ce; Re++) {
              const ye = pe[Re], We = ce[ye.materialIndex];
              We && We.visible && m.push(v, ie, We, O, Ae.z, ye);
            }
          } else ce.visible && m.push(v, ie, ce, O, Ae.z, null);
        }
      }
      const J = v.children;
      for (let ie = 0, ce = J.length; ie < ce; ie++) vr(J[ie], I, O, B);
    }
    function Ea(v, I, O, B) {
      const U = v.opaque, J = v.transmissive, ie = v.transparent;
      f.setupLightsView(O), ee === true && Q.setGlobalState(M.clippingPlanes, O), B && ve.viewport(P.copy(B)), U.length > 0 && bs(U, I, O), J.length > 0 && bs(J, I, O), ie.length > 0 && bs(ie, I, O), ve.buffers.depth.setTest(true), ve.buffers.depth.setMask(true), ve.buffers.color.setMask(true), ve.setPolygonOffset(false);
    }
    function ba(v, I, O, B) {
      if ((O.isScene === true ? O.overrideMaterial : null) !== null) return;
      f.state.transmissionRenderTarget[B.id] === void 0 && (f.state.transmissionRenderTarget[B.id] = new ti(1, 1, { generateMipmaps: true, type: ze.has("EXT_color_buffer_half_float") || ze.has("EXT_color_buffer_float") ? xs : Tn, minFilter: yn, samples: 4, stencilBuffer: r, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: He.workingColorSpace }));
      const J = f.state.transmissionRenderTarget[B.id], ie = B.viewport || P;
      J.setSize(ie.z * M.transmissionResolutionScale, ie.w * M.transmissionResolutionScale);
      const ce = M.getRenderTarget();
      M.setRenderTarget(J), M.getClearColor(j), $ = M.getClearAlpha(), $ < 1 && M.setClearColor(16777215, 0.5), M.clear(), ot && Te.render(O);
      const pe = M.toneMapping;
      M.toneMapping = Bn;
      const Re = B.viewport;
      if (B.viewport !== void 0 && (B.viewport = void 0), f.setupLightsView(B), ee === true && Q.setGlobalState(M.clippingPlanes, B), bs(v, O, B), E.updateMultisampleRenderTarget(J), E.updateRenderTargetMipmap(J), ze.has("WEBGL_multisampled_render_to_texture") === false) {
        let Ce = false;
        for (let ye = 0, We = I.length; ye < We; ye++) {
          const je = I[ye], ht = je.object, lt = je.geometry, Xe = je.material, Se = je.group;
          if (Xe.side === sn && ht.layers.test(B.layers)) {
            const vt = Xe.side;
            Xe.side = Ut, Xe.needsUpdate = true, Ta(ht, O, B, lt, Xe, Se), Xe.side = vt, Xe.needsUpdate = true, Ce = true;
          }
        }
        Ce === true && (E.updateMultisampleRenderTarget(J), E.updateRenderTargetMipmap(J));
      }
      M.setRenderTarget(ce), M.setClearColor(j, $), Re !== void 0 && (B.viewport = Re), M.toneMapping = pe;
    }
    function bs(v, I, O) {
      const B = I.isScene === true ? I.overrideMaterial : null;
      for (let U = 0, J = v.length; U < J; U++) {
        const ie = v[U], ce = ie.object, pe = ie.geometry, Re = B === null ? ie.material : B, Ce = ie.group;
        ce.layers.test(O.layers) && Ta(ce, I, O, pe, Re, Ce);
      }
    }
    function Ta(v, I, O, B, U, J) {
      v.onBeforeRender(M, I, O, B, U, J), v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse, v.matrixWorld), v.normalMatrix.getNormalMatrix(v.modelViewMatrix), U.onBeforeRender(M, I, O, B, v, J), U.transparent === true && U.side === sn && U.forceSinglePass === false ? (U.side = Ut, U.needsUpdate = true, M.renderBufferDirect(O, I, B, U, v, J), U.side = bn, U.needsUpdate = true, M.renderBufferDirect(O, I, B, U, v, J), U.side = sn) : M.renderBufferDirect(O, I, B, U, v, J), v.onAfterRender(M, I, O, B, U, J);
    }
    function Ts(v, I, O) {
      I.isScene !== true && (I = ct);
      const B = _e.get(v), U = f.state.lights, J = f.state.shadowsArray, ie = U.state.version, ce = ge.getParameters(v, U.state, J, I, O), pe = ge.getProgramCacheKey(ce);
      let Re = B.programs;
      B.environment = v.isMeshStandardMaterial ? I.environment : null, B.fog = I.fog, B.envMap = (v.isMeshStandardMaterial ? F : x).get(v.envMap || B.environment), B.envMapRotation = B.environment !== null && v.envMap === null ? I.environmentRotation : v.envMapRotation, Re === void 0 && (v.addEventListener("dispose", Le), Re = /* @__PURE__ */ new Map(), B.programs = Re);
      let Ce = Re.get(pe);
      if (Ce !== void 0) {
        if (B.currentProgram === Ce && B.lightsStateVersion === ie) return wa(v, ce), Ce;
      } else ce.uniforms = ge.getUniforms(v), v.onBeforeCompile(ce, M), Ce = ge.acquireProgram(ce, pe), Re.set(pe, Ce), B.uniforms = ce.uniforms;
      const ye = B.uniforms;
      return (!v.isShaderMaterial && !v.isRawShaderMaterial || v.clipping === true) && (ye.clippingPlanes = Q.uniform), wa(v, ce), B.needsLights = Jc(v), B.lightsStateVersion = ie, B.needsLights && (ye.ambientLightColor.value = U.state.ambient, ye.lightProbe.value = U.state.probe, ye.directionalLights.value = U.state.directional, ye.directionalLightShadows.value = U.state.directionalShadow, ye.spotLights.value = U.state.spot, ye.spotLightShadows.value = U.state.spotShadow, ye.rectAreaLights.value = U.state.rectArea, ye.ltc_1.value = U.state.rectAreaLTC1, ye.ltc_2.value = U.state.rectAreaLTC2, ye.pointLights.value = U.state.point, ye.pointLightShadows.value = U.state.pointShadow, ye.hemisphereLights.value = U.state.hemi, ye.directionalShadowMap.value = U.state.directionalShadowMap, ye.directionalShadowMatrix.value = U.state.directionalShadowMatrix, ye.spotShadowMap.value = U.state.spotShadowMap, ye.spotLightMatrix.value = U.state.spotLightMatrix, ye.spotLightMap.value = U.state.spotLightMap, ye.pointShadowMap.value = U.state.pointShadowMap, ye.pointShadowMatrix.value = U.state.pointShadowMatrix), B.currentProgram = Ce, B.uniformsList = null, Ce;
    }
    function Aa(v) {
      if (v.uniformsList === null) {
        const I = v.currentProgram.getUniforms();
        v.uniformsList = cr.seqWithValue(I.seq, v.uniforms);
      }
      return v.uniformsList;
    }
    function wa(v, I) {
      const O = _e.get(v);
      O.outputColorSpace = I.outputColorSpace, O.batching = I.batching, O.batchingColor = I.batchingColor, O.instancing = I.instancing, O.instancingColor = I.instancingColor, O.instancingMorph = I.instancingMorph, O.skinning = I.skinning, O.morphTargets = I.morphTargets, O.morphNormals = I.morphNormals, O.morphColors = I.morphColors, O.morphTargetsCount = I.morphTargetsCount, O.numClippingPlanes = I.numClippingPlanes, O.numIntersection = I.numClipIntersection, O.vertexAlphas = I.vertexAlphas, O.vertexTangents = I.vertexTangents, O.toneMapping = I.toneMapping;
    }
    function Kc(v, I, O, B, U) {
      I.isScene !== true && (I = ct), E.resetTextureUnits();
      const J = I.fog, ie = B.isMeshStandardMaterial ? I.environment : null, ce = N === null ? M.outputColorSpace : N.isXRRenderTarget === true ? N.texture.colorSpace : Lt, pe = (B.isMeshStandardMaterial ? F : x).get(B.envMap || ie), Re = B.vertexColors === true && !!O.attributes.color && O.attributes.color.itemSize === 4, Ce = !!O.attributes.tangent && (!!B.normalMap || B.anisotropy > 0), ye = !!O.morphAttributes.position, We = !!O.morphAttributes.normal, je = !!O.morphAttributes.color;
      let ht = Bn;
      B.toneMapped && (N === null || N.isXRRenderTarget === true) && (ht = M.toneMapping);
      const lt = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color, Xe = lt !== void 0 ? lt.length : 0, Se = _e.get(B), vt = f.state.lights;
      if (ee === true && (me === true || v !== y)) {
        const At = v === y && B.id === S;
        Q.setState(B, v, At);
      }
      let $e = false;
      B.version === Se.__version ? (Se.needsLights && Se.lightsStateVersion !== vt.state.version || Se.outputColorSpace !== ce || U.isBatchedMesh && Se.batching === false || !U.isBatchedMesh && Se.batching === true || U.isBatchedMesh && Se.batchingColor === true && U.colorTexture === null || U.isBatchedMesh && Se.batchingColor === false && U.colorTexture !== null || U.isInstancedMesh && Se.instancing === false || !U.isInstancedMesh && Se.instancing === true || U.isSkinnedMesh && Se.skinning === false || !U.isSkinnedMesh && Se.skinning === true || U.isInstancedMesh && Se.instancingColor === true && U.instanceColor === null || U.isInstancedMesh && Se.instancingColor === false && U.instanceColor !== null || U.isInstancedMesh && Se.instancingMorph === true && U.morphTexture === null || U.isInstancedMesh && Se.instancingMorph === false && U.morphTexture !== null || Se.envMap !== pe || B.fog === true && Se.fog !== J || Se.numClippingPlanes !== void 0 && (Se.numClippingPlanes !== Q.numPlanes || Se.numIntersection !== Q.numIntersection) || Se.vertexAlphas !== Re || Se.vertexTangents !== Ce || Se.morphTargets !== ye || Se.morphNormals !== We || Se.morphColors !== je || Se.toneMapping !== ht || Se.morphTargetsCount !== Xe) && ($e = true) : ($e = true, Se.__version = B.version);
      let qt = Se.currentProgram;
      $e === true && (qt = Ts(B, I, U));
      let ii = false, Nt = false, Yi = false;
      const st = qt.getUniforms(), kt = Se.uniforms;
      if (ve.useProgram(qt.program) && (ii = true, Nt = true, Yi = true), B.id !== S && (S = B.id, Nt = true), ii || y !== v) {
        ve.buffers.depth.getReversed() ? (re.copy(v.projectionMatrix), cu(re), hu(re), st.setValue(w, "projectionMatrix", re)) : st.setValue(w, "projectionMatrix", v.projectionMatrix), st.setValue(w, "viewMatrix", v.matrixWorldInverse);
        const Dt = st.map.cameraPosition;
        Dt !== void 0 && Dt.setValue(w, Ye.setFromMatrixPosition(v.matrixWorld)), ke.logarithmicDepthBuffer && st.setValue(w, "logDepthBufFC", 2 / (Math.log(v.far + 1) / Math.LN2)), (B.isMeshPhongMaterial || B.isMeshToonMaterial || B.isMeshLambertMaterial || B.isMeshBasicMaterial || B.isMeshStandardMaterial || B.isShaderMaterial) && st.setValue(w, "isOrthographic", v.isOrthographicCamera === true), y !== v && (y = v, Nt = true, Yi = true);
      }
      if (U.isSkinnedMesh) {
        st.setOptional(w, U, "bindMatrix"), st.setOptional(w, U, "bindMatrixInverse");
        const At = U.skeleton;
        At && (At.boneTexture === null && At.computeBoneTexture(), st.setValue(w, "boneTexture", At.boneTexture, E));
      }
      U.isBatchedMesh && (st.setOptional(w, U, "batchingTexture"), st.setValue(w, "batchingTexture", U._matricesTexture, E), st.setOptional(w, U, "batchingIdTexture"), st.setValue(w, "batchingIdTexture", U._indirectTexture, E), st.setOptional(w, U, "batchingColorTexture"), U._colorsTexture !== null && st.setValue(w, "batchingColorTexture", U._colorsTexture, E));
      const Vt = O.morphAttributes;
      if ((Vt.position !== void 0 || Vt.normal !== void 0 || Vt.color !== void 0) && we.update(U, O, qt), (Nt || Se.receiveShadow !== U.receiveShadow) && (Se.receiveShadow = U.receiveShadow, st.setValue(w, "receiveShadow", U.receiveShadow)), B.isMeshGouraudMaterial && B.envMap !== null && (kt.envMap.value = pe, kt.flipEnvMap.value = pe.isCubeTexture && pe.isRenderTargetTexture === false ? -1 : 1), B.isMeshStandardMaterial && B.envMap === null && I.environment !== null && (kt.envMapIntensity.value = I.environmentIntensity), Nt && (st.setValue(w, "toneMappingExposure", M.toneMappingExposure), Se.needsLights && Zc(kt, Yi), J && B.fog === true && oe.refreshFogUniforms(kt, J), oe.refreshMaterialUniforms(kt, B, V, Z, f.state.transmissionRenderTarget[v.id]), cr.upload(w, Aa(Se), kt, E)), B.isShaderMaterial && B.uniformsNeedUpdate === true && (cr.upload(w, Aa(Se), kt, E), B.uniformsNeedUpdate = false), B.isSpriteMaterial && st.setValue(w, "center", U.center), st.setValue(w, "modelViewMatrix", U.modelViewMatrix), st.setValue(w, "normalMatrix", U.normalMatrix), st.setValue(w, "modelMatrix", U.matrixWorld), B.isShaderMaterial || B.isRawShaderMaterial) {
        const At = B.uniformsGroups;
        for (let Dt = 0, Mr = At.length; Dt < Mr; Dt++) {
          const Vn = At[Dt];
          D.update(Vn, qt), D.bind(Vn, qt);
        }
      }
      return qt;
    }
    function Zc(v, I) {
      v.ambientLightColor.needsUpdate = I, v.lightProbe.needsUpdate = I, v.directionalLights.needsUpdate = I, v.directionalLightShadows.needsUpdate = I, v.pointLights.needsUpdate = I, v.pointLightShadows.needsUpdate = I, v.spotLights.needsUpdate = I, v.spotLightShadows.needsUpdate = I, v.rectAreaLights.needsUpdate = I, v.hemisphereLights.needsUpdate = I;
    }
    function Jc(v) {
      return v.isMeshLambertMaterial || v.isMeshToonMaterial || v.isMeshPhongMaterial || v.isMeshStandardMaterial || v.isShadowMaterial || v.isShaderMaterial && v.lights === true;
    }
    this.getActiveCubeFace = function() {
      return C;
    }, this.getActiveMipmapLevel = function() {
      return A;
    }, this.getRenderTarget = function() {
      return N;
    }, this.setRenderTargetTextures = function(v, I, O) {
      _e.get(v.texture).__webglTexture = I, _e.get(v.depthTexture).__webglTexture = O;
      const B = _e.get(v);
      B.__hasExternalTextures = true, B.__autoAllocateDepthBuffer = O === void 0, B.__autoAllocateDepthBuffer || ze.has("WEBGL_multisampled_render_to_texture") === true && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), B.__useRenderToTexture = false);
    }, this.setRenderTargetFramebuffer = function(v, I) {
      const O = _e.get(v);
      O.__webglFramebuffer = I, O.__useDefaultFramebuffer = I === void 0;
    };
    const Qc = w.createFramebuffer();
    this.setRenderTarget = function(v, I = 0, O = 0) {
      N = v, C = I, A = O;
      let B = true, U = null, J = false, ie = false;
      if (v) {
        const pe = _e.get(v);
        if (pe.__useDefaultFramebuffer !== void 0) ve.bindFramebuffer(w.FRAMEBUFFER, null), B = false;
        else if (pe.__webglFramebuffer === void 0) E.setupRenderTarget(v);
        else if (pe.__hasExternalTextures) E.rebindTextures(v, _e.get(v.texture).__webglTexture, _e.get(v.depthTexture).__webglTexture);
        else if (v.depthBuffer) {
          const ye = v.depthTexture;
          if (pe.__boundDepthTexture !== ye) {
            if (ye !== null && _e.has(ye) && (v.width !== ye.image.width || v.height !== ye.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            E.setupDepthRenderbuffer(v);
          }
        }
        const Re = v.texture;
        (Re.isData3DTexture || Re.isDataArrayTexture || Re.isCompressedArrayTexture) && (ie = true);
        const Ce = _e.get(v).__webglFramebuffer;
        v.isWebGLCubeRenderTarget ? (Array.isArray(Ce[I]) ? U = Ce[I][O] : U = Ce[I], J = true) : v.samples > 0 && E.useMultisampledRTT(v) === false ? U = _e.get(v).__webglMultisampledFramebuffer : Array.isArray(Ce) ? U = Ce[O] : U = Ce, P.copy(v.viewport), G.copy(v.scissor), z = v.scissorTest;
      } else P.copy(xe).multiplyScalar(V).floor(), G.copy(Fe).multiplyScalar(V).floor(), z = tt;
      if (O !== 0 && (U = Qc), ve.bindFramebuffer(w.FRAMEBUFFER, U) && B && ve.drawBuffers(v, U), ve.viewport(P), ve.scissor(G), ve.setScissorTest(z), J) {
        const pe = _e.get(v.texture);
        w.framebufferTexture2D(w.FRAMEBUFFER, w.COLOR_ATTACHMENT0, w.TEXTURE_CUBE_MAP_POSITIVE_X + I, pe.__webglTexture, O);
      } else if (ie) {
        const pe = _e.get(v.texture), Re = I;
        w.framebufferTextureLayer(w.FRAMEBUFFER, w.COLOR_ATTACHMENT0, pe.__webglTexture, O, Re);
      } else if (v !== null && O !== 0) {
        const pe = _e.get(v.texture);
        w.framebufferTexture2D(w.FRAMEBUFFER, w.COLOR_ATTACHMENT0, w.TEXTURE_2D, pe.__webglTexture, O);
      }
      S = -1;
    }, this.readRenderTargetPixels = function(v, I, O, B, U, J, ie) {
      if (!(v && v.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ce = _e.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && ie !== void 0 && (ce = ce[ie]), ce) {
        ve.bindFramebuffer(w.FRAMEBUFFER, ce);
        try {
          const pe = v.texture, Re = pe.format, Ce = pe.type;
          if (!ke.textureFormatReadable(Re)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!ke.textureTypeReadable(Ce)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          I >= 0 && I <= v.width - B && O >= 0 && O <= v.height - U && w.readPixels(I, O, B, U, Ie.convert(Re), Ie.convert(Ce), J);
        } finally {
          const pe = N !== null ? _e.get(N).__webglFramebuffer : null;
          ve.bindFramebuffer(w.FRAMEBUFFER, pe);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(v, I, O, B, U, J, ie) {
      if (!(v && v.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let ce = _e.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && ie !== void 0 && (ce = ce[ie]), ce) {
        const pe = v.texture, Re = pe.format, Ce = pe.type;
        if (!ke.textureFormatReadable(Re)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!ke.textureTypeReadable(Ce)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (I >= 0 && I <= v.width - B && O >= 0 && O <= v.height - U) {
          ve.bindFramebuffer(w.FRAMEBUFFER, ce);
          const ye = w.createBuffer();
          w.bindBuffer(w.PIXEL_PACK_BUFFER, ye), w.bufferData(w.PIXEL_PACK_BUFFER, J.byteLength, w.STREAM_READ), w.readPixels(I, O, B, U, Ie.convert(Re), Ie.convert(Ce), 0);
          const We = N !== null ? _e.get(N).__webglFramebuffer : null;
          ve.bindFramebuffer(w.FRAMEBUFFER, We);
          const je = w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return w.flush(), await lu(w, je, 4), w.bindBuffer(w.PIXEL_PACK_BUFFER, ye), w.getBufferSubData(w.PIXEL_PACK_BUFFER, 0, J), w.deleteBuffer(ye), w.deleteSync(je), J;
        } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(v, I = null, O = 0) {
      v.isTexture !== true && ($n("WebGLRenderer: copyFramebufferToTexture function signature has changed."), I = arguments[0] || null, v = arguments[1]);
      const B = Math.pow(2, -O), U = Math.floor(v.image.width * B), J = Math.floor(v.image.height * B), ie = I !== null ? I.x : 0, ce = I !== null ? I.y : 0;
      E.setTexture2D(v, 0), w.copyTexSubImage2D(w.TEXTURE_2D, O, 0, 0, ie, ce, U, J), ve.unbindTexture();
    };
    const eh = w.createFramebuffer(), th = w.createFramebuffer();
    this.copyTextureToTexture = function(v, I, O = null, B = null, U = 0, J = null) {
      v.isTexture !== true && ($n("WebGLRenderer: copyTextureToTexture function signature has changed."), B = arguments[0] || null, v = arguments[1], I = arguments[2], J = arguments[3] || 0, O = null), J === null && (U !== 0 ? ($n("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), J = U, U = 0) : J = 0);
      let ie, ce, pe, Re, Ce, ye, We, je, ht;
      const lt = v.isCompressedTexture ? v.mipmaps[J] : v.image;
      if (O !== null) ie = O.max.x - O.min.x, ce = O.max.y - O.min.y, pe = O.isBox3 ? O.max.z - O.min.z : 1, Re = O.min.x, Ce = O.min.y, ye = O.isBox3 ? O.min.z : 0;
      else {
        const Vt = Math.pow(2, -U);
        ie = Math.floor(lt.width * Vt), ce = Math.floor(lt.height * Vt), v.isDataArrayTexture ? pe = lt.depth : v.isData3DTexture ? pe = Math.floor(lt.depth * Vt) : pe = 1, Re = 0, Ce = 0, ye = 0;
      }
      B !== null ? (We = B.x, je = B.y, ht = B.z) : (We = 0, je = 0, ht = 0);
      const Xe = Ie.convert(I.format), Se = Ie.convert(I.type);
      let vt;
      I.isData3DTexture ? (E.setTexture3D(I, 0), vt = w.TEXTURE_3D) : I.isDataArrayTexture || I.isCompressedArrayTexture ? (E.setTexture2DArray(I, 0), vt = w.TEXTURE_2D_ARRAY) : (E.setTexture2D(I, 0), vt = w.TEXTURE_2D), w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL, I.flipY), w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL, I.premultiplyAlpha), w.pixelStorei(w.UNPACK_ALIGNMENT, I.unpackAlignment);
      const $e = w.getParameter(w.UNPACK_ROW_LENGTH), qt = w.getParameter(w.UNPACK_IMAGE_HEIGHT), ii = w.getParameter(w.UNPACK_SKIP_PIXELS), Nt = w.getParameter(w.UNPACK_SKIP_ROWS), Yi = w.getParameter(w.UNPACK_SKIP_IMAGES);
      w.pixelStorei(w.UNPACK_ROW_LENGTH, lt.width), w.pixelStorei(w.UNPACK_IMAGE_HEIGHT, lt.height), w.pixelStorei(w.UNPACK_SKIP_PIXELS, Re), w.pixelStorei(w.UNPACK_SKIP_ROWS, Ce), w.pixelStorei(w.UNPACK_SKIP_IMAGES, ye);
      const st = v.isDataArrayTexture || v.isData3DTexture, kt = I.isDataArrayTexture || I.isData3DTexture;
      if (v.isDepthTexture) {
        const Vt = _e.get(v), At = _e.get(I), Dt = _e.get(Vt.__renderTarget), Mr = _e.get(At.__renderTarget);
        ve.bindFramebuffer(w.READ_FRAMEBUFFER, Dt.__webglFramebuffer), ve.bindFramebuffer(w.DRAW_FRAMEBUFFER, Mr.__webglFramebuffer);
        for (let Vn = 0; Vn < pe; Vn++) st && (w.framebufferTextureLayer(w.READ_FRAMEBUFFER, w.COLOR_ATTACHMENT0, _e.get(v).__webglTexture, U, ye + Vn), w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER, w.COLOR_ATTACHMENT0, _e.get(I).__webglTexture, J, ht + Vn)), w.blitFramebuffer(Re, Ce, ie, ce, We, je, ie, ce, w.DEPTH_BUFFER_BIT, w.NEAREST);
        ve.bindFramebuffer(w.READ_FRAMEBUFFER, null), ve.bindFramebuffer(w.DRAW_FRAMEBUFFER, null);
      } else if (U !== 0 || v.isRenderTargetTexture || _e.has(v)) {
        const Vt = _e.get(v), At = _e.get(I);
        ve.bindFramebuffer(w.READ_FRAMEBUFFER, eh), ve.bindFramebuffer(w.DRAW_FRAMEBUFFER, th);
        for (let Dt = 0; Dt < pe; Dt++) st ? w.framebufferTextureLayer(w.READ_FRAMEBUFFER, w.COLOR_ATTACHMENT0, Vt.__webglTexture, U, ye + Dt) : w.framebufferTexture2D(w.READ_FRAMEBUFFER, w.COLOR_ATTACHMENT0, w.TEXTURE_2D, Vt.__webglTexture, U), kt ? w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER, w.COLOR_ATTACHMENT0, At.__webglTexture, J, ht + Dt) : w.framebufferTexture2D(w.DRAW_FRAMEBUFFER, w.COLOR_ATTACHMENT0, w.TEXTURE_2D, At.__webglTexture, J), U !== 0 ? w.blitFramebuffer(Re, Ce, ie, ce, We, je, ie, ce, w.COLOR_BUFFER_BIT, w.NEAREST) : kt ? w.copyTexSubImage3D(vt, J, We, je, ht + Dt, Re, Ce, ie, ce) : w.copyTexSubImage2D(vt, J, We, je, Re, Ce, ie, ce);
        ve.bindFramebuffer(w.READ_FRAMEBUFFER, null), ve.bindFramebuffer(w.DRAW_FRAMEBUFFER, null);
      } else kt ? v.isDataTexture || v.isData3DTexture ? w.texSubImage3D(vt, J, We, je, ht, ie, ce, pe, Xe, Se, lt.data) : I.isCompressedArrayTexture ? w.compressedTexSubImage3D(vt, J, We, je, ht, ie, ce, pe, Xe, lt.data) : w.texSubImage3D(vt, J, We, je, ht, ie, ce, pe, Xe, Se, lt) : v.isDataTexture ? w.texSubImage2D(w.TEXTURE_2D, J, We, je, ie, ce, Xe, Se, lt.data) : v.isCompressedTexture ? w.compressedTexSubImage2D(w.TEXTURE_2D, J, We, je, lt.width, lt.height, Xe, lt.data) : w.texSubImage2D(w.TEXTURE_2D, J, We, je, ie, ce, Xe, Se, lt);
      w.pixelStorei(w.UNPACK_ROW_LENGTH, $e), w.pixelStorei(w.UNPACK_IMAGE_HEIGHT, qt), w.pixelStorei(w.UNPACK_SKIP_PIXELS, ii), w.pixelStorei(w.UNPACK_SKIP_ROWS, Nt), w.pixelStorei(w.UNPACK_SKIP_IMAGES, Yi), J === 0 && I.generateMipmaps && w.generateMipmap(vt), ve.unbindTexture();
    }, this.copyTextureToTexture3D = function(v, I, O = null, B = null, U = 0) {
      return v.isTexture !== true && ($n("WebGLRenderer: copyTextureToTexture3D function signature has changed."), O = arguments[0] || null, B = arguments[1] || null, v = arguments[2], I = arguments[3], U = arguments[4] || 0), $n('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(v, I, O, B, U);
    }, this.initRenderTarget = function(v) {
      _e.get(v).__webglFramebuffer === void 0 && E.setupRenderTarget(v);
    }, this.initTexture = function(v) {
      v.isCubeTexture ? E.setTextureCube(v, 0) : v.isData3DTexture ? E.setTexture3D(v, 0) : v.isDataArrayTexture || v.isCompressedArrayTexture ? E.setTexture2DArray(v, 0) : E.setTexture2D(v, 0), ve.unbindTexture();
    }, this.resetState = function() {
      C = 0, A = 0, N = null, ve.reset(), nt.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return Sn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorspace = He._getDrawingBufferColorSpace(e), t.unpackColorSpace = He._getUnpackColorSpace();
  }
}
/**
* lil-gui
* https://lil-gui.georgealways.com
* @version 0.17.0
* @author George Michael Brower
* @license MIT
*/
class on {
  constructor(e, t, n, i, r = "div") {
    this.parent = e, this.object = t, this.property = n, this._disabled = false, this._hidden = false, this.initialValue = this.getValue(), this.domElement = document.createElement("div"), this.domElement.classList.add("controller"), this.domElement.classList.add(i), this.$name = document.createElement("div"), this.$name.classList.add("name"), on.nextNameID = on.nextNameID || 0, this.$name.id = "lil-gui-name-" + ++on.nextNameID, this.$widget = document.createElement(r), this.$widget.classList.add("widget"), this.$disable = this.$widget, this.domElement.appendChild(this.$name), this.domElement.appendChild(this.$widget), this.parent.children.push(this), this.parent.controllers.push(this), this.parent.$children.appendChild(this.domElement), this._listenCallback = this._listenCallback.bind(this), this.name(n);
  }
  name(e) {
    return this._name = e, this.$name.innerHTML = e, this;
  }
  onChange(e) {
    return this._onChange = e, this;
  }
  _callOnChange() {
    this.parent._callOnChange(this), this._onChange !== void 0 && this._onChange.call(this, this.getValue()), this._changed = true;
  }
  onFinishChange(e) {
    return this._onFinishChange = e, this;
  }
  _callOnFinishChange() {
    this._changed && (this.parent._callOnFinishChange(this), this._onFinishChange !== void 0 && this._onFinishChange.call(this, this.getValue())), this._changed = false;
  }
  reset() {
    return this.setValue(this.initialValue), this._callOnFinishChange(), this;
  }
  enable(e = true) {
    return this.disable(!e);
  }
  disable(e = true) {
    return e === this._disabled || (this._disabled = e, this.domElement.classList.toggle("disabled", e), this.$disable.toggleAttribute("disabled", e)), this;
  }
  show(e = true) {
    return this._hidden = !e, this.domElement.style.display = this._hidden ? "none" : "", this;
  }
  hide() {
    return this.show(false);
  }
  options(e) {
    const t = this.parent.add(this.object, this.property, e);
    return t.name(this._name), this.destroy(), t;
  }
  min(e) {
    return this;
  }
  max(e) {
    return this;
  }
  step(e) {
    return this;
  }
  decimals(e) {
    return this;
  }
  listen(e = true) {
    return this._listening = e, this._listenCallbackID !== void 0 && (cancelAnimationFrame(this._listenCallbackID), this._listenCallbackID = void 0), this._listening && this._listenCallback(), this;
  }
  _listenCallback() {
    this._listenCallbackID = requestAnimationFrame(this._listenCallback);
    const e = this.save();
    e !== this._listenPrevValue && this.updateDisplay(), this._listenPrevValue = e;
  }
  getValue() {
    return this.object[this.property];
  }
  setValue(e) {
    return this.object[this.property] = e, this._callOnChange(), this.updateDisplay(), this;
  }
  updateDisplay() {
    return this;
  }
  load(e) {
    return this.setValue(e), this._callOnFinishChange(), this;
  }
  save() {
    return this.getValue();
  }
  destroy() {
    this.listen(false), this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.controllers.splice(this.parent.controllers.indexOf(this), 1), this.parent.$children.removeChild(this.domElement);
  }
}
class h_ extends on {
  constructor(e, t, n) {
    super(e, t, n, "boolean", "label"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "checkbox"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$widget.appendChild(this.$input), this.$input.addEventListener("change", () => {
      this.setValue(this.$input.checked), this._callOnFinishChange();
    }), this.$disable = this.$input, this.updateDisplay();
  }
  updateDisplay() {
    return this.$input.checked = this.getValue(), this;
  }
}
function Ko(s) {
  let e, t;
  return (e = s.match(/(#|0x)?([a-f0-9]{6})/i)) ? t = e[2] : (e = s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/)) ? t = parseInt(e[1]).toString(16).padStart(2, 0) + parseInt(e[2]).toString(16).padStart(2, 0) + parseInt(e[3]).toString(16).padStart(2, 0) : (e = s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)) && (t = e[1] + e[1] + e[2] + e[2] + e[3] + e[3]), !!t && "#" + t;
}
const u_ = { isPrimitive: true, match: (s) => typeof s == "string", fromHexString: Ko, toHexString: Ko }, _s = { isPrimitive: true, match: (s) => typeof s == "number", fromHexString: (s) => parseInt(s.substring(1), 16), toHexString: (s) => "#" + s.toString(16).padStart(6, 0) }, d_ = { isPrimitive: false, match: Array.isArray, fromHexString(s, e, t = 1) {
  const n = _s.fromHexString(s);
  e[0] = (n >> 16 & 255) / 255 * t, e[1] = (n >> 8 & 255) / 255 * t, e[2] = (255 & n) / 255 * t;
}, toHexString: ([s, e, t], n = 1) => _s.toHexString(s * (n = 255 / n) << 16 ^ e * n << 8 ^ t * n << 0) }, f_ = { isPrimitive: false, match: (s) => Object(s) === s, fromHexString(s, e, t = 1) {
  const n = _s.fromHexString(s);
  e.r = (n >> 16 & 255) / 255 * t, e.g = (n >> 8 & 255) / 255 * t, e.b = (255 & n) / 255 * t;
}, toHexString: ({ r: s, g: e, b: t }, n = 1) => _s.toHexString(s * (n = 255 / n) << 16 ^ e * n << 8 ^ t * n << 0) }, p_ = [u_, _s, d_, f_];
class m_ extends on {
  constructor(e, t, n, i) {
    var r;
    super(e, t, n, "color"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "color"), this.$input.setAttribute("tabindex", -1), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$text = document.createElement("input"), this.$text.setAttribute("type", "text"), this.$text.setAttribute("spellcheck", "false"), this.$text.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("display"), this.$display.appendChild(this.$input), this.$widget.appendChild(this.$display), this.$widget.appendChild(this.$text), this._format = (r = this.initialValue, p_.find((o) => o.match(r))), this._rgbScale = i, this._initialValueHexString = this.save(), this._textFocused = false, this.$input.addEventListener("input", () => {
      this._setValueFromHexString(this.$input.value);
    }), this.$input.addEventListener("blur", () => {
      this._callOnFinishChange();
    }), this.$text.addEventListener("input", () => {
      const o = Ko(this.$text.value);
      o && this._setValueFromHexString(o);
    }), this.$text.addEventListener("focus", () => {
      this._textFocused = true, this.$text.select();
    }), this.$text.addEventListener("blur", () => {
      this._textFocused = false, this.updateDisplay(), this._callOnFinishChange();
    }), this.$disable = this.$text, this.updateDisplay();
  }
  reset() {
    return this._setValueFromHexString(this._initialValueHexString), this;
  }
  _setValueFromHexString(e) {
    if (this._format.isPrimitive) {
      const t = this._format.fromHexString(e);
      this.setValue(t);
    } else this._format.fromHexString(e, this.getValue(), this._rgbScale), this._callOnChange(), this.updateDisplay();
  }
  save() {
    return this._format.toHexString(this.getValue(), this._rgbScale);
  }
  load(e) {
    return this._setValueFromHexString(e), this._callOnFinishChange(), this;
  }
  updateDisplay() {
    return this.$input.value = this._format.toHexString(this.getValue(), this._rgbScale), this._textFocused || (this.$text.value = this.$input.value.substring(1)), this.$display.style.backgroundColor = this.$input.value, this;
  }
}
class to extends on {
  constructor(e, t, n) {
    super(e, t, n, "function"), this.$button = document.createElement("button"), this.$button.appendChild(this.$name), this.$widget.appendChild(this.$button), this.$button.addEventListener("click", (i) => {
      i.preventDefault(), this.getValue().call(this.object);
    }), this.$button.addEventListener("touchstart", () => {
    }, { passive: true }), this.$disable = this.$button;
  }
}
class g_ extends on {
  constructor(e, t, n, i, r, o) {
    super(e, t, n, "number"), this._initInput(), this.min(i), this.max(r);
    const a = o !== void 0;
    this.step(a ? o : this._getImplicitStep(), a), this.updateDisplay();
  }
  decimals(e) {
    return this._decimals = e, this.updateDisplay(), this;
  }
  min(e) {
    return this._min = e, this._onUpdateMinMax(), this;
  }
  max(e) {
    return this._max = e, this._onUpdateMinMax(), this;
  }
  step(e, t = true) {
    return this._step = e, this._stepExplicit = t, this;
  }
  updateDisplay() {
    const e = this.getValue();
    if (this._hasSlider) {
      let t = (e - this._min) / (this._max - this._min);
      t = Math.max(0, Math.min(t, 1)), this.$fill.style.width = 100 * t + "%";
    }
    return this._inputFocused || (this.$input.value = this._decimals === void 0 ? e : e.toFixed(this._decimals)), this;
  }
  _initInput() {
    this.$input = document.createElement("input"), this.$input.setAttribute("type", "number"), this.$input.setAttribute("step", "any"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$widget.appendChild(this.$input), this.$disable = this.$input;
    const e = (h) => {
      const u = parseFloat(this.$input.value);
      isNaN(u) || (this._snapClampSetValue(u + h), this.$input.value = this.getValue());
    };
    let t, n, i, r, o, a = false;
    const l = (h) => {
      if (a) {
        const u = h.clientX - t, d = h.clientY - n;
        Math.abs(d) > 5 ? (h.preventDefault(), this.$input.blur(), a = false, this._setDraggingStyle(true, "vertical")) : Math.abs(u) > 5 && c();
      }
      if (!a) {
        const u = h.clientY - i;
        o -= u * this._step * this._arrowKeyMultiplier(h), r + o > this._max ? o = this._max - r : r + o < this._min && (o = this._min - r), this._snapClampSetValue(r + o);
      }
      i = h.clientY;
    }, c = () => {
      this._setDraggingStyle(false, "vertical"), this._callOnFinishChange(), window.removeEventListener("mousemove", l), window.removeEventListener("mouseup", c);
    };
    this.$input.addEventListener("input", () => {
      let h = parseFloat(this.$input.value);
      isNaN(h) || (this._stepExplicit && (h = this._snap(h)), this.setValue(this._clamp(h)));
    }), this.$input.addEventListener("keydown", (h) => {
      h.code === "Enter" && this.$input.blur(), h.code === "ArrowUp" && (h.preventDefault(), e(this._step * this._arrowKeyMultiplier(h))), h.code === "ArrowDown" && (h.preventDefault(), e(this._step * this._arrowKeyMultiplier(h) * -1));
    }), this.$input.addEventListener("wheel", (h) => {
      this._inputFocused && (h.preventDefault(), e(this._step * this._normalizeMouseWheel(h)));
    }, { passive: false }), this.$input.addEventListener("mousedown", (h) => {
      t = h.clientX, n = i = h.clientY, a = true, r = this.getValue(), o = 0, window.addEventListener("mousemove", l), window.addEventListener("mouseup", c);
    }), this.$input.addEventListener("focus", () => {
      this._inputFocused = true;
    }), this.$input.addEventListener("blur", () => {
      this._inputFocused = false, this.updateDisplay(), this._callOnFinishChange();
    });
  }
  _initSlider() {
    this._hasSlider = true, this.$slider = document.createElement("div"), this.$slider.classList.add("slider"), this.$fill = document.createElement("div"), this.$fill.classList.add("fill"), this.$slider.appendChild(this.$fill), this.$widget.insertBefore(this.$slider, this.$input), this.domElement.classList.add("hasSlider");
    const e = (d) => {
      const p = this.$slider.getBoundingClientRect();
      let g = (_ = d, m = p.left, f = p.right, b = this._min, T = this._max, (_ - m) / (f - m) * (T - b) + b);
      var _, m, f, b, T;
      this._snapClampSetValue(g);
    }, t = (d) => {
      e(d.clientX);
    }, n = () => {
      this._callOnFinishChange(), this._setDraggingStyle(false), window.removeEventListener("mousemove", t), window.removeEventListener("mouseup", n);
    };
    let i, r, o = false;
    const a = (d) => {
      d.preventDefault(), this._setDraggingStyle(true), e(d.touches[0].clientX), o = false;
    }, l = (d) => {
      if (o) {
        const p = d.touches[0].clientX - i, g = d.touches[0].clientY - r;
        Math.abs(p) > Math.abs(g) ? a(d) : (window.removeEventListener("touchmove", l), window.removeEventListener("touchend", c));
      } else d.preventDefault(), e(d.touches[0].clientX);
    }, c = () => {
      this._callOnFinishChange(), this._setDraggingStyle(false), window.removeEventListener("touchmove", l), window.removeEventListener("touchend", c);
    }, h = this._callOnFinishChange.bind(this);
    let u;
    this.$slider.addEventListener("mousedown", (d) => {
      this._setDraggingStyle(true), e(d.clientX), window.addEventListener("mousemove", t), window.addEventListener("mouseup", n);
    }), this.$slider.addEventListener("touchstart", (d) => {
      d.touches.length > 1 || (this._hasScrollBar ? (i = d.touches[0].clientX, r = d.touches[0].clientY, o = true) : a(d), window.addEventListener("touchmove", l, { passive: false }), window.addEventListener("touchend", c));
    }, { passive: false }), this.$slider.addEventListener("wheel", (d) => {
      if (Math.abs(d.deltaX) < Math.abs(d.deltaY) && this._hasScrollBar) return;
      d.preventDefault();
      const p = this._normalizeMouseWheel(d) * this._step;
      this._snapClampSetValue(this.getValue() + p), this.$input.value = this.getValue(), clearTimeout(u), u = setTimeout(h, 400);
    }, { passive: false });
  }
  _setDraggingStyle(e, t = "horizontal") {
    this.$slider && this.$slider.classList.toggle("active", e), document.body.classList.toggle("lil-gui-dragging", e), document.body.classList.toggle("lil-gui-" + t, e);
  }
  _getImplicitStep() {
    return this._hasMin && this._hasMax ? (this._max - this._min) / 1e3 : 0.1;
  }
  _onUpdateMinMax() {
    !this._hasSlider && this._hasMin && this._hasMax && (this._stepExplicit || this.step(this._getImplicitStep(), false), this._initSlider(), this.updateDisplay());
  }
  _normalizeMouseWheel(e) {
    let { deltaX: t, deltaY: n } = e;
    return Math.floor(e.deltaY) !== e.deltaY && e.wheelDelta && (t = 0, n = -e.wheelDelta / 120, n *= this._stepExplicit ? 1 : 10), t + -n;
  }
  _arrowKeyMultiplier(e) {
    let t = this._stepExplicit ? 1 : 10;
    return e.shiftKey ? t *= 10 : e.altKey && (t /= 10), t;
  }
  _snap(e) {
    const t = Math.round(e / this._step) * this._step;
    return parseFloat(t.toPrecision(15));
  }
  _clamp(e) {
    return e < this._min && (e = this._min), e > this._max && (e = this._max), e;
  }
  _snapClampSetValue(e) {
    this.setValue(this._clamp(this._snap(e)));
  }
  get _hasScrollBar() {
    const e = this.parent.root.$children;
    return e.scrollHeight > e.clientHeight;
  }
  get _hasMin() {
    return this._min !== void 0;
  }
  get _hasMax() {
    return this._max !== void 0;
  }
}
class __ extends on {
  constructor(e, t, n, i) {
    super(e, t, n, "option"), this.$select = document.createElement("select"), this.$select.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("display"), this._values = Array.isArray(i) ? i : Object.values(i), this._names = Array.isArray(i) ? i : Object.keys(i), this._names.forEach((r) => {
      const o = document.createElement("option");
      o.innerHTML = r, this.$select.appendChild(o);
    }), this.$select.addEventListener("change", () => {
      this.setValue(this._values[this.$select.selectedIndex]), this._callOnFinishChange();
    }), this.$select.addEventListener("focus", () => {
      this.$display.classList.add("focus");
    }), this.$select.addEventListener("blur", () => {
      this.$display.classList.remove("focus");
    }), this.$widget.appendChild(this.$select), this.$widget.appendChild(this.$display), this.$disable = this.$select, this.updateDisplay();
  }
  updateDisplay() {
    const e = this.getValue(), t = this._values.indexOf(e);
    return this.$select.selectedIndex = t, this.$display.innerHTML = t === -1 ? e : this._names[t], this;
  }
}
class x_ extends on {
  constructor(e, t, n) {
    super(e, t, n, "string"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "text"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$input.addEventListener("input", () => {
      this.setValue(this.$input.value);
    }), this.$input.addEventListener("keydown", (i) => {
      i.code === "Enter" && this.$input.blur();
    }), this.$input.addEventListener("blur", () => {
      this._callOnFinishChange();
    }), this.$widget.appendChild(this.$input), this.$disable = this.$input, this.updateDisplay();
  }
  updateDisplay() {
    return this.$input.value = this.getValue(), this;
  }
}
let Kl = false;
class va {
  constructor({ parent: e, autoPlace: t = e === void 0, container: n, width: i, title: r = "Controls", injectStyles: o = true, touchStyles: a = true } = {}) {
    if (this.parent = e, this.root = e ? e.root : this, this.children = [], this.controllers = [], this.folders = [], this._closed = false, this._hidden = false, this.domElement = document.createElement("div"), this.domElement.classList.add("lil-gui"), this.$title = document.createElement("div"), this.$title.classList.add("title"), this.$title.setAttribute("role", "button"), this.$title.setAttribute("aria-expanded", true), this.$title.setAttribute("tabindex", 0), this.$title.addEventListener("click", () => this.openAnimated(this._closed)), this.$title.addEventListener("keydown", (l) => {
      l.code !== "Enter" && l.code !== "Space" || (l.preventDefault(), this.$title.click());
    }), this.$title.addEventListener("touchstart", () => {
    }, { passive: true }), this.$children = document.createElement("div"), this.$children.classList.add("children"), this.domElement.appendChild(this.$title), this.domElement.appendChild(this.$children), this.title(r), a && this.domElement.classList.add("allow-touch-styles"), this.parent) return this.parent.children.push(this), this.parent.folders.push(this), void this.parent.$children.appendChild(this.domElement);
    this.domElement.classList.add("root"), !Kl && o && (function(l) {
      const c = document.createElement("style");
      c.innerHTML = l;
      const h = document.querySelector("head link[rel=stylesheet], head style");
      h ? document.head.insertBefore(c, h) : document.head.appendChild(c);
    }('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"\u2195";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"\u25BE";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"\u25B8"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"\u2713";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'), Kl = true), n ? n.appendChild(this.domElement) : t && (this.domElement.classList.add("autoPlace"), document.body.appendChild(this.domElement)), i && this.domElement.style.setProperty("--width", i + "px"), this.domElement.addEventListener("keydown", (l) => l.stopPropagation()), this.domElement.addEventListener("keyup", (l) => l.stopPropagation());
  }
  add(e, t, n, i, r) {
    if (Object(n) === n) return new __(this, e, t, n);
    const o = e[t];
    switch (typeof o) {
      case "number":
        return new g_(this, e, t, n, i, r);
      case "boolean":
        return new h_(this, e, t);
      case "string":
        return new x_(this, e, t);
      case "function":
        return new to(this, e, t);
    }
    console.error(`gui.add failed
	property:`, t, `
	object:`, e, `
	value:`, o);
  }
  addColor(e, t, n = 1) {
    return new m_(this, e, t, n);
  }
  addFolder(e) {
    return new va({ parent: this, title: e });
  }
  load(e, t = true) {
    return e.controllers && this.controllers.forEach((n) => {
      n instanceof to || n._name in e.controllers && n.load(e.controllers[n._name]);
    }), t && e.folders && this.folders.forEach((n) => {
      n._title in e.folders && n.load(e.folders[n._title]);
    }), this;
  }
  save(e = true) {
    const t = { controllers: {}, folders: {} };
    return this.controllers.forEach((n) => {
      if (!(n instanceof to)) {
        if (n._name in t.controllers) throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);
        t.controllers[n._name] = n.save();
      }
    }), e && this.folders.forEach((n) => {
      if (n._title in t.folders) throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);
      t.folders[n._title] = n.save();
    }), t;
  }
  open(e = true) {
    return this._closed = !e, this.$title.setAttribute("aria-expanded", !this._closed), this.domElement.classList.toggle("closed", this._closed), this;
  }
  close() {
    return this.open(false);
  }
  show(e = true) {
    return this._hidden = !e, this.domElement.style.display = this._hidden ? "none" : "", this;
  }
  hide() {
    return this.show(false);
  }
  openAnimated(e = true) {
    return this._closed = !e, this.$title.setAttribute("aria-expanded", !this._closed), requestAnimationFrame(() => {
      const t = this.$children.clientHeight;
      this.$children.style.height = t + "px", this.domElement.classList.add("transition");
      const n = (r) => {
        r.target === this.$children && (this.$children.style.height = "", this.domElement.classList.remove("transition"), this.$children.removeEventListener("transitionend", n));
      };
      this.$children.addEventListener("transitionend", n);
      const i = e ? this.$children.scrollHeight : 0;
      this.domElement.classList.toggle("closed", !e), requestAnimationFrame(() => {
        this.$children.style.height = i + "px";
      });
    }), this;
  }
  title(e) {
    return this._title = e, this.$title.innerHTML = e, this;
  }
  reset(e = true) {
    return (e ? this.controllersRecursive() : this.controllers).forEach((t) => t.reset()), this;
  }
  onChange(e) {
    return this._onChange = e, this;
  }
  _callOnChange(e) {
    this.parent && this.parent._callOnChange(e), this._onChange !== void 0 && this._onChange.call(this, { object: e.object, property: e.property, value: e.getValue(), controller: e });
  }
  onFinishChange(e) {
    return this._onFinishChange = e, this;
  }
  _callOnFinishChange(e) {
    this.parent && this.parent._callOnFinishChange(e), this._onFinishChange !== void 0 && this._onFinishChange.call(this, { object: e.object, property: e.property, value: e.getValue(), controller: e });
  }
  destroy() {
    this.parent && (this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.folders.splice(this.parent.folders.indexOf(this), 1)), this.domElement.parentElement && this.domElement.parentElement.removeChild(this.domElement), Array.from(this.children).forEach((e) => e.destroy());
  }
  controllersRecursive() {
    let e = Array.from(this.controllers);
    return this.folders.forEach((t) => {
      e = e.concat(t.controllersRecursive());
    }), e;
  }
  foldersRecursive() {
    let e = Array.from(this.folders);
    return this.folders.forEach((t) => {
      e = e.concat(t.foldersRecursive());
    }), e;
  }
}
class v_ {
  constructor() {
    __publicField(this, "scene");
    __publicField(this, "camera");
    __publicField(this, "renderer");
    __publicField(this, "viewportSize", 10);
    __publicField(this, "loadedModels", []);
    this.scene = new Rc(), this.scene.background = new Ee(15790320);
    const e = 100, t = 100, n = e / t;
    this.camera = new Es(-this.viewportSize * n / 2, this.viewportSize * n / 2, this.viewportSize / 2, -this.viewportSize / 2, 0.1, 1e3), this.camera.position.set(10, 10, 10), this.camera.lookAt(0, 0, 0), this.renderer = new Yc({ antialias: true, preserveDrawingBuffer: true }), this.renderer.setSize(e, t), this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.shadowMap.enabled = true, this.setupLights(), window.addEventListener("resize", this.onWindowResize.bind(this));
  }
  setupLights() {
    const e = new zc(16777215, 0.3);
    this.scene.add(e);
    const t = new mr(16777215, 0.7);
    t.position.set(1, 1, 1), t.castShadow = true, t.shadow.mapSize.width = 2048, t.shadow.mapSize.height = 2048, t.shadow.camera.near = 0.5, t.shadow.camera.far = 50, t.shadow.bias = -1e-3, this.scene.add(t);
    const n = new mr(16777215, 0.3);
    n.position.set(-1, -1, -1), this.scene.add(n);
  }
  onWindowResize() {
    const e = window.innerWidth / window.innerHeight;
    this.camera.left = -this.viewportSize * e / 2, this.camera.right = this.viewportSize * e / 2, this.camera.top = this.viewportSize / 2, this.camera.bottom = -this.viewportSize / 2, this.camera.updateProjectionMatrix(), this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
  onResize(e, t) {
    if (e === 0 || t === 0) return;
    const n = e / t;
    this.camera.left = -this.viewportSize * n / 2, this.camera.right = this.viewportSize * n / 2, this.camera.top = this.viewportSize / 2, this.camera.bottom = -this.viewportSize / 2, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t);
  }
  setViewportSize(e) {
    this.viewportSize = e;
  }
  getScene() {
    return this.scene;
  }
  getCamera() {
    return this.camera;
  }
  getRenderer() {
    return this.renderer;
  }
  render() {
    this.renderer.render(this.scene, this.camera);
  }
  getDomElement() {
    return this.renderer.domElement;
  }
  addLoadedModel(e) {
    this.loadedModels.push(e), this.scene.add(e), console.log("SceneManager: Model added", e.uuid, this.loadedModels);
  }
  getLoadedModels() {
    return this.loadedModels;
  }
  removeLoadedModel(e) {
    const t = this.scene.getObjectByProperty("uuid", e);
    t && this.scene.remove(t);
    const n = this.loadedModels.findIndex((i) => i.uuid === e);
    n !== -1 && this.loadedModels.splice(n, 1), console.log("SceneManager: Model removed", e, this.loadedModels);
  }
}
const Zl = { type: "change" }, Ma = { type: "start" }, qc = { type: "end" }, nr = new Vi(), Jl = new In(), M_ = Math.cos(70 * Mc.DEG2RAD), dt = new R(), It = 2 * Math.PI, et = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }, no = 1e-6;
class y_ extends Ad {
  constructor(e, t = null) {
    super(e, t), this.state = et.NONE, this.enabled = true, this.target = new R(), this.cursor = new R(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.zoomToCursor = false, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Ti.ROTATE, MIDDLE: Ti.DOLLY, RIGHT: Ti.PAN }, this.touches = { ONE: Ei.ROTATE, TWO: Ei.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new R(), this._lastQuaternion = new an(), this._lastTargetPosition = new R(), this._quat = new an().setFromUnitVectors(e.up, new R(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new bl(), this._sphericalDelta = new bl(), this._scale = 1, this._panOffset = new R(), this._rotateStart = new Me(), this._rotateEnd = new Me(), this._rotateDelta = new Me(), this._panStart = new Me(), this._panEnd = new Me(), this._panDelta = new Me(), this._dollyStart = new Me(), this._dollyEnd = new Me(), this._dollyDelta = new Me(), this._dollyDirection = new R(), this._mouse = new Me(), this._performCursorZoom = false, this._pointers = [], this._pointerPositions = {}, this._controlActive = false, this._onPointerMove = E_.bind(this), this._onPointerDown = S_.bind(this), this._onPointerUp = b_.bind(this), this._onContextMenu = L_.bind(this), this._onMouseWheel = w_.bind(this), this._onKeyDown = R_.bind(this), this._onTouchStart = C_.bind(this), this._onTouchMove = P_.bind(this), this._onMouseDown = T_.bind(this), this._onMouseMove = A_.bind(this), this._interceptControlDown = D_.bind(this), this._interceptControlUp = I_.bind(this), this.domElement !== null && this.connect(), this.update();
  }
  connect() {
    this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: false }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: true, capture: true }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: true }), this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(e) {
    e.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = e;
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(Zl), this.update(), this.state = et.NONE;
  }
  update(e = null) {
    const t = this.object.position;
    dt.copy(t).sub(this.target), dt.applyQuaternion(this._quat), this._spherical.setFromVector3(dt), this.autoRotate && this.state === et.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle, i = this.maxAzimuthAngle;
    isFinite(n) && isFinite(i) && (n < -Math.PI ? n += It : n > Math.PI && (n -= It), i < -Math.PI ? i += It : i > Math.PI && (i -= It), n <= i ? this._spherical.theta = Math.max(n, Math.min(i, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + i) / 2 ? Math.max(n, this._spherical.theta) : Math.min(i, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === true ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let r = false;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const o = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = o != this._spherical.radius;
    }
    if (dt.setFromSpherical(this._spherical), dt.applyQuaternion(this._quatInverse), t.copy(this.target).add(dt), this.object.lookAt(this.target), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let o = null;
      if (this.object.isPerspectiveCamera) {
        const a = dt.length();
        o = this._clampDistance(a * this._scale);
        const l = a - o;
        this.object.position.addScaledVector(this._dollyDirection, l), this.object.updateMatrixWorld(), r = !!l;
      } else if (this.object.isOrthographicCamera) {
        const a = new R(this._mouse.x, this._mouse.y, 0);
        a.unproject(this.object);
        const l = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = l !== this.object.zoom;
        const c = new R(this._mouse.x, this._mouse.y, 0);
        c.unproject(this.object), this.object.position.sub(c).add(a), this.object.updateMatrixWorld(), o = dt.length();
      } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = false;
      o !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position) : (nr.origin.copy(this.object.position), nr.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(nr.direction)) < M_ ? this.object.lookAt(this.target) : (Jl.setFromNormalAndCoplanarPoint(this.object.up, this.target), nr.intersectPlane(Jl, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const o = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), o !== this.object.zoom && (this.object.updateProjectionMatrix(), r = true);
    }
    return this._scale = 1, this._performCursorZoom = false, r || this._lastPosition.distanceToSquared(this.object.position) > no || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > no || this._lastTargetPosition.distanceToSquared(this.target) > no ? (this.dispatchEvent(Zl), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), true) : false;
  }
  _getAutoRotationAngle(e) {
    return e !== null ? It / 60 * this.autoRotateSpeed * e : It / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(e) {
    const t = Math.abs(e * 0.01);
    return Math.pow(0.95, this.zoomSpeed * t);
  }
  _rotateLeft(e) {
    this._sphericalDelta.theta -= e;
  }
  _rotateUp(e) {
    this._sphericalDelta.phi -= e;
  }
  _panLeft(e, t) {
    dt.setFromMatrixColumn(t, 0), dt.multiplyScalar(-e), this._panOffset.add(dt);
  }
  _panUp(e, t) {
    this.screenSpacePanning === true ? dt.setFromMatrixColumn(t, 1) : (dt.setFromMatrixColumn(t, 0), dt.crossVectors(this.object.up, dt)), dt.multiplyScalar(e), this._panOffset.add(dt);
  }
  _pan(e, t) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const i = this.object.position;
      dt.copy(i).sub(this.target);
      let r = dt.length();
      r *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * e * r / n.clientHeight, this.object.matrix), this._panUp(2 * t * r / n.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = false);
  }
  _dollyOut(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _dollyIn(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _updateZoomParameters(e, t) {
    if (!this.zoomToCursor) return;
    this._performCursorZoom = true;
    const n = this.domElement.getBoundingClientRect(), i = e - n.left, r = t - n.top, o = n.width, a = n.height;
    this._mouse.x = i / o * 2 - 1, this._mouse.y = -(r / a) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(e) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, e));
  }
  _handleMouseDownRotate(e) {
    this._rotateStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownDolly(e) {
    this._updateZoomParameters(e.clientX, e.clientX), this._dollyStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownPan(e) {
    this._panStart.set(e.clientX, e.clientY);
  }
  _handleMouseMoveRotate(e) {
    this._rotateEnd.set(e.clientX, e.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(It * this._rotateDelta.x / t.clientHeight), this._rotateUp(It * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(e) {
    this._dollyEnd.set(e.clientX, e.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(e) {
    this._panEnd.set(e.clientX, e.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(e) {
    this._updateZoomParameters(e.clientX, e.clientY), e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)), this.update();
  }
  _handleKeyDown(e) {
    let t = false;
    switch (e.code) {
      case this.keys.UP:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(It * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), t = true;
        break;
      case this.keys.BOTTOM:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(-It * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), t = true;
        break;
      case this.keys.LEFT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(It * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), t = true;
        break;
      case this.keys.RIGHT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(-It * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), t = true;
        break;
    }
    t && (e.preventDefault(), this.update());
  }
  _handleTouchStartRotate(e) {
    if (this._pointers.length === 1) this._rotateStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), i = 0.5 * (e.pageY + t.y);
      this._rotateStart.set(n, i);
    }
  }
  _handleTouchStartPan(e) {
    if (this._pointers.length === 1) this._panStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), i = 0.5 * (e.pageY + t.y);
      this._panStart.set(n, i);
    }
  }
  _handleTouchStartDolly(e) {
    const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, i = e.pageY - t.y, r = Math.sqrt(n * n + i * i);
    this._dollyStart.set(0, r);
  }
  _handleTouchStartDollyPan(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enablePan && this._handleTouchStartPan(e);
  }
  _handleTouchStartDollyRotate(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enableRotate && this._handleTouchStartRotate(e);
  }
  _handleTouchMoveRotate(e) {
    if (this._pointers.length == 1) this._rotateEnd.set(e.pageX, e.pageY);
    else {
      const n = this._getSecondPointerPosition(e), i = 0.5 * (e.pageX + n.x), r = 0.5 * (e.pageY + n.y);
      this._rotateEnd.set(i, r);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(It * this._rotateDelta.x / t.clientHeight), this._rotateUp(It * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(e) {
    if (this._pointers.length === 1) this._panEnd.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), i = 0.5 * (e.pageY + t.y);
      this._panEnd.set(n, i);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(e) {
    const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, i = e.pageY - t.y, r = Math.sqrt(n * n + i * i);
    this._dollyEnd.set(0, r), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const o = (e.pageX + t.x) * 0.5, a = (e.pageY + t.y) * 0.5;
    this._updateZoomParameters(o, a);
  }
  _handleTouchMoveDollyPan(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enablePan && this._handleTouchMovePan(e);
  }
  _handleTouchMoveDollyRotate(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enableRotate && this._handleTouchMoveRotate(e);
  }
  _addPointer(e) {
    this._pointers.push(e.pointerId);
  }
  _removePointer(e) {
    delete this._pointerPositions[e.pointerId];
    for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) {
      this._pointers.splice(t, 1);
      return;
    }
  }
  _isTrackingPointer(e) {
    for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) return true;
    return false;
  }
  _trackPointer(e) {
    let t = this._pointerPositions[e.pointerId];
    t === void 0 && (t = new Me(), this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
  }
  _getSecondPointerPosition(e) {
    const t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[t];
  }
  _customWheelEvent(e) {
    const t = e.deltaMode, n = { clientX: e.clientX, clientY: e.clientY, deltaY: e.deltaY };
    switch (t) {
      case 1:
        n.deltaY *= 16;
        break;
      case 2:
        n.deltaY *= 100;
        break;
    }
    return e.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
  }
}
function S_(s) {
  this.enabled !== false && (this._pointers.length === 0 && (this.domElement.setPointerCapture(s.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(s) && (this._addPointer(s), s.pointerType === "touch" ? this._onTouchStart(s) : this._onMouseDown(s)));
}
function E_(s) {
  this.enabled !== false && (s.pointerType === "touch" ? this._onTouchMove(s) : this._onMouseMove(s));
}
function b_(s) {
  switch (this._removePointer(s), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(s.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(qc), this.state = et.NONE;
      break;
    case 1:
      const e = this._pointers[0], t = this._pointerPositions[e];
      this._onTouchStart({ pointerId: e, pageX: t.x, pageY: t.y });
      break;
  }
}
function T_(s) {
  let e;
  switch (s.button) {
    case 0:
      e = this.mouseButtons.LEFT;
      break;
    case 1:
      e = this.mouseButtons.MIDDLE;
      break;
    case 2:
      e = this.mouseButtons.RIGHT;
      break;
    default:
      e = -1;
  }
  switch (e) {
    case Ti.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseDownDolly(s), this.state = et.DOLLY;
      break;
    case Ti.ROTATE:
      if (s.ctrlKey || s.metaKey || s.shiftKey) {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(s), this.state = et.PAN;
      } else {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(s), this.state = et.ROTATE;
      }
      break;
    case Ti.PAN:
      if (s.ctrlKey || s.metaKey || s.shiftKey) {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(s), this.state = et.ROTATE;
      } else {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(s), this.state = et.PAN;
      }
      break;
    default:
      this.state = et.NONE;
  }
  this.state !== et.NONE && this.dispatchEvent(Ma);
}
function A_(s) {
  switch (this.state) {
    case et.ROTATE:
      if (this.enableRotate === false) return;
      this._handleMouseMoveRotate(s);
      break;
    case et.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseMoveDolly(s);
      break;
    case et.PAN:
      if (this.enablePan === false) return;
      this._handleMouseMovePan(s);
      break;
  }
}
function w_(s) {
  this.enabled === false || this.enableZoom === false || this.state !== et.NONE || (s.preventDefault(), this.dispatchEvent(Ma), this._handleMouseWheel(this._customWheelEvent(s)), this.dispatchEvent(qc));
}
function R_(s) {
  this.enabled !== false && this._handleKeyDown(s);
}
function C_(s) {
  switch (this._trackPointer(s), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case Ei.ROTATE:
          if (this.enableRotate === false) return;
          this._handleTouchStartRotate(s), this.state = et.TOUCH_ROTATE;
          break;
        case Ei.PAN:
          if (this.enablePan === false) return;
          this._handleTouchStartPan(s), this.state = et.TOUCH_PAN;
          break;
        default:
          this.state = et.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case Ei.DOLLY_PAN:
          if (this.enableZoom === false && this.enablePan === false) return;
          this._handleTouchStartDollyPan(s), this.state = et.TOUCH_DOLLY_PAN;
          break;
        case Ei.DOLLY_ROTATE:
          if (this.enableZoom === false && this.enableRotate === false) return;
          this._handleTouchStartDollyRotate(s), this.state = et.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = et.NONE;
      }
      break;
    default:
      this.state = et.NONE;
  }
  this.state !== et.NONE && this.dispatchEvent(Ma);
}
function P_(s) {
  switch (this._trackPointer(s), this.state) {
    case et.TOUCH_ROTATE:
      if (this.enableRotate === false) return;
      this._handleTouchMoveRotate(s), this.update();
      break;
    case et.TOUCH_PAN:
      if (this.enablePan === false) return;
      this._handleTouchMovePan(s), this.update();
      break;
    case et.TOUCH_DOLLY_PAN:
      if (this.enableZoom === false && this.enablePan === false) return;
      this._handleTouchMoveDollyPan(s), this.update();
      break;
    case et.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === false && this.enableRotate === false) return;
      this._handleTouchMoveDollyRotate(s), this.update();
      break;
    default:
      this.state = et.NONE;
  }
}
function L_(s) {
  this.enabled !== false && s.preventDefault();
}
function D_(s) {
  s.key === "Control" && (this._controlActive = true, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function I_(s) {
  s.key === "Control" && (this._controlActive = false, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
class U_ {
  constructor(e, t, n) {
    __publicField(this, "controls");
    __publicField(this, "camera");
    __publicField(this, "renderer");
    __publicField(this, "sceneManager");
    __publicField(this, "raycaster", new bd());
    __publicField(this, "pointer", new Me());
    __publicField(this, "sphereInter");
    __publicField(this, "isVertexSelectionMode", false);
    __publicField(this, "selectedVertices", /* @__PURE__ */ new Map());
    __publicField(this, "selectionHelpers", /* @__PURE__ */ new Map());
    __publicField(this, "onVertexSelected", null);
    this.camera = e, this.renderer = t, this.sceneManager = n, this.controls = new y_(e, this.renderer.domElement), this.controls.enableDamping = true;
    const i = new gs(0.05), r = new rn({ color: 16711680 });
    this.sphereInter = new ft(i, r), this.sphereInter.visible = false, this.sceneManager.getScene().add(this.sphereInter), this.renderer.domElement.addEventListener("pointerdown", this.onPointerDown.bind(this));
  }
  setVertexSelectionMode(e) {
    this.isVertexSelectionMode = e, this.controls.enabled = !e, e || (this.clearSelection(), this.sphereInter.visible = false), console.log(`Vertex selection mode: ${e ? "ON" : "OFF"}`);
  }
  getVertexSelectionMode() {
    return this.isVertexSelectionMode;
  }
  clearSelection() {
    this.selectedVertices.clear(), this.selectionHelpers.forEach((e) => this.sceneManager.getScene().remove(e)), this.selectionHelpers.clear(), this.onVertexSelected && this.onVertexSelected(null);
  }
  onPointerDown(e) {
    if (console.log("onPointerDown"), !this.isVertexSelectionMode) return;
    const n = this.renderer.domElement.getBoundingClientRect(), i = e.clientX - n.left, r = e.clientY - n.top;
    this.pointer.x = i / n.width * 2 - 1, this.pointer.y = -(r / n.height) * 2 + 1, this.raycaster.setFromCamera(this.pointer, this.camera);
    const o = this.sceneManager.getLoadedModels(), a = this.raycaster.intersectObjects(o, true);
    if (a.length > 0) {
      const l = a[0], c = l.object;
      if (c instanceof ft && c.geometry instanceof xt) {
        const h = c, d = h.geometry.attributes.position;
        if (!d) {
          console.warn("Mesh does not have position attribute.");
          return;
        }
        const p = l.point;
        let g = -1, _ = 1 / 0;
        const m = new R();
        let f = new R();
        for (let b = 0; b < d.count; b++) {
          m.fromBufferAttribute(d, b);
          const T = m.clone().applyMatrix4(h.matrixWorld), M = p.distanceToSquared(T);
          M < _ && (_ = M, g = b, f.copy(T));
        }
        if (g !== -1) {
          console.log(`Selected vertex index: ${g} on model: ${h.uuid}`), this.sphereInter.position.copy(f), this.sphereInter.visible = true, this.selectedVertices.has(h.uuid) && this.removeSelectionHelper(h.uuid);
          const b = { object: h, vertexIndex: g, worldPosition: f };
          this.selectedVertices.set(h.uuid, b), this.addOrUpdateSelectionHelper(h.uuid, f), this.onVertexSelected && this.onVertexSelected({ uuid: h.uuid, ...b });
        }
      }
    } else this.sphereInter.visible = false;
  }
  addOrUpdateSelectionHelper(e, t) {
    let n = this.selectionHelpers.get(e);
    if (!n) {
      const i = new gs(0.03), r = new rn({ color: 65280, depthTest: false });
      n = new ft(i, r), n.renderOrder = 999, this.sceneManager.getScene().add(n), this.selectionHelpers.set(e, n);
    }
    n.position.copy(t);
  }
  removeSelectionHelper(e) {
    const t = this.selectionHelpers.get(e);
    t && (this.sceneManager.getScene().remove(t), this.selectionHelpers.delete(e));
  }
  update() {
    this.controls.update();
  }
  getControls() {
    return this.controls;
  }
  setTarget(e, t, n) {
    this.controls.target.set(e, t, n), this.controls.update();
  }
}
function Ql(s, e) {
  if (e === Uh) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), s;
  if (e === Wo || e === _c) {
    let t = s.getIndex();
    if (t === null) {
      const o = [], a = s.getAttribute("position");
      if (a !== void 0) {
        for (let l = 0; l < a.count; l++) o.push(l);
        s.setIndex(o), t = s.getIndex();
      } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), s;
    }
    const n = t.count - 2, i = [];
    if (e === Wo) for (let o = 1; o <= n; o++) i.push(t.getX(0)), i.push(t.getX(o)), i.push(t.getX(o + 1));
    else for (let o = 0; o < n; o++) o % 2 === 0 ? (i.push(t.getX(o)), i.push(t.getX(o + 1)), i.push(t.getX(o + 2))) : (i.push(t.getX(o + 2)), i.push(t.getX(o + 1)), i.push(t.getX(o)));
    i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const r = s.clone();
    return r.setIndex(i), r.clearGroups(), r;
  } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), s;
}
class N_ extends Wi {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new k_(t);
    }), this.register(function(t) {
      return new V_(t);
    }), this.register(function(t) {
      return new K_(t);
    }), this.register(function(t) {
      return new Z_(t);
    }), this.register(function(t) {
      return new J_(t);
    }), this.register(function(t) {
      return new G_(t);
    }), this.register(function(t) {
      return new W_(t);
    }), this.register(function(t) {
      return new X_(t);
    }), this.register(function(t) {
      return new Y_(t);
    }), this.register(function(t) {
      return new z_(t);
    }), this.register(function(t) {
      return new q_(t);
    }), this.register(function(t) {
      return new H_(t);
    }), this.register(function(t) {
      return new $_(t);
    }), this.register(function(t) {
      return new j_(t);
    }), this.register(function(t) {
      return new O_(t);
    }), this.register(function(t) {
      return new Q_(t);
    }), this.register(function(t) {
      return new ex(t);
    });
  }
  load(e, t, n, i) {
    const r = this;
    let o;
    if (this.resourcePath !== "") o = this.resourcePath;
    else if (this.path !== "") {
      const c = cs.extractUrlBase(e);
      o = cs.resolveURL(c, this.path);
    } else o = cs.extractUrlBase(e);
    this.manager.itemStart(e);
    const a = function(c) {
      i ? i(c) : console.error(c), r.manager.itemError(e), r.manager.itemEnd(e);
    }, l = new Bc(this.manager);
    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(c) {
      try {
        r.parse(c, o, function(h) {
          t(h), r.manager.itemEnd(e);
        }, a);
      } catch (h) {
        a(h);
      }
    }, n, a);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, i) {
    let r;
    const o = {}, a = {}, l = new TextDecoder();
    if (typeof e == "string") r = JSON.parse(e);
    else if (e instanceof ArrayBuffer) if (l.decode(new Uint8Array(e, 0, 4)) === jc) {
      try {
        o[Oe.KHR_BINARY_GLTF] = new tx(e);
      } catch (u) {
        i && i(u);
        return;
      }
      r = JSON.parse(o[Oe.KHR_BINARY_GLTF].content);
    } else r = JSON.parse(l.decode(e));
    else r = e;
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const c = new px(r, { path: t || this.resourcePath || "", crossOrigin: this.crossOrigin, requestHeader: this.requestHeader, manager: this.manager, ktx2Loader: this.ktx2Loader, meshoptDecoder: this.meshoptDecoder });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let h = 0; h < this.pluginCallbacks.length; h++) {
      const u = this.pluginCallbacks[h](c);
      u.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), a[u.name] = u, o[u.name] = true;
    }
    if (r.extensionsUsed) for (let h = 0; h < r.extensionsUsed.length; ++h) {
      const u = r.extensionsUsed[h], d = r.extensionsRequired || [];
      switch (u) {
        case Oe.KHR_MATERIALS_UNLIT:
          o[u] = new B_();
          break;
        case Oe.KHR_DRACO_MESH_COMPRESSION:
          o[u] = new nx(r, this.dracoLoader);
          break;
        case Oe.KHR_TEXTURE_TRANSFORM:
          o[u] = new ix();
          break;
        case Oe.KHR_MESH_QUANTIZATION:
          o[u] = new sx();
          break;
        default:
          d.indexOf(u) >= 0 && a[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
      }
    }
    c.setExtensions(o), c.setPlugins(a), c.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, r) {
      n.parse(e, t, i, r);
    });
  }
}
function F_() {
  let s = {};
  return { get: function(e) {
    return s[e];
  }, add: function(e, t) {
    s[e] = t;
  }, remove: function(e) {
    delete s[e];
  }, removeAll: function() {
    s = {};
  } };
}
const Oe = { KHR_BINARY_GLTF: "KHR_binary_glTF", KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression", KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual", KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat", KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion", KHR_MATERIALS_IOR: "KHR_materials_ior", KHR_MATERIALS_SHEEN: "KHR_materials_sheen", KHR_MATERIALS_SPECULAR: "KHR_materials_specular", KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission", KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence", KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy", KHR_MATERIALS_UNLIT: "KHR_materials_unlit", KHR_MATERIALS_VOLUME: "KHR_materials_volume", KHR_TEXTURE_BASISU: "KHR_texture_basisu", KHR_TEXTURE_TRANSFORM: "KHR_texture_transform", KHR_MESH_QUANTIZATION: "KHR_mesh_quantization", KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength", EXT_MATERIALS_BUMP: "EXT_materials_bump", EXT_TEXTURE_WEBP: "EXT_texture_webp", EXT_TEXTURE_AVIF: "EXT_texture_avif", EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression", EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing" };
class O_ {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, r.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let i = t.cache.get(n);
    if (i) return i;
    const r = t.json, l = ((r.extensions && r.extensions[this.name] || {}).lights || [])[e];
    let c;
    const h = new Ee(16777215);
    l.color !== void 0 && h.setRGB(l.color[0], l.color[1], l.color[2], Lt);
    const u = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        c = new mr(h), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new ud(h), c.distance = u;
        break;
      case "spot":
        c = new cd(h), c.distance = u, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return c.position.set(0, 0, 0), Mn(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), i = Promise.resolve(c), t.cache.add(n, i), i;
  }
  getDependency(e, t) {
    if (e === "light") return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, r = n.json.nodes[e], a = (r.extensions && r.extensions[this.name] || {}).light;
    return a === void 0 ? null : this._loadLight(a).then(function(l) {
      return n._getNodeRef(t.cache, a, l);
    });
  }
}
class B_ {
  constructor() {
    this.name = Oe.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return rn;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new Ee(1, 1, 1), e.opacity = 1;
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const o = r.baseColorFactor;
        e.color.setRGB(o[0], o[1], o[2], Lt), e.opacity = o[3];
      }
      r.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", r.baseColorTexture, Mt));
    }
    return Promise.all(i);
  }
}
class z_ {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name].emissiveStrength;
    return r !== void 0 && (t.emissiveIntensity = r), Promise.resolve();
  }
}
class k_ {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : hn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    if (o.clearcoatFactor !== void 0 && (t.clearcoat = o.clearcoatFactor), o.clearcoatTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatMap", o.clearcoatTexture)), o.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = o.clearcoatRoughnessFactor), o.clearcoatRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), o.clearcoatNormalTexture !== void 0 && (r.push(n.assignTexture(t, "clearcoatNormalMap", o.clearcoatNormalTexture)), o.clearcoatNormalTexture.scale !== void 0)) {
      const a = o.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new Me(a, a);
    }
    return Promise.all(r);
  }
}
class V_ {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : hn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name];
    return t.dispersion = r.dispersion !== void 0 ? r.dispersion : 0, Promise.resolve();
  }
}
class H_ {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : hn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    return o.iridescenceFactor !== void 0 && (t.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (t.iridescenceIOR = o.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), o.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(r);
  }
}
class G_ {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : hn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [];
    t.sheenColor = new Ee(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const o = i.extensions[this.name];
    if (o.sheenColorFactor !== void 0) {
      const a = o.sheenColorFactor;
      t.sheenColor.setRGB(a[0], a[1], a[2], Lt);
    }
    return o.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && r.push(n.assignTexture(t, "sheenColorMap", o.sheenColorTexture, Mt)), o.sheenRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(r);
  }
}
class W_ {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : hn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    return o.transmissionFactor !== void 0 && (t.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && r.push(n.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(r);
  }
}
class X_ {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : hn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    t.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0, o.thicknessTexture !== void 0 && r.push(n.assignTexture(t, "thicknessMap", o.thicknessTexture)), t.attenuationDistance = o.attenuationDistance || 1 / 0;
    const a = o.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new Ee().setRGB(a[0], a[1], a[2], Lt), Promise.all(r);
  }
}
class Y_ {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : hn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name];
    return t.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve();
  }
}
class q_ {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : hn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    t.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && r.push(n.assignTexture(t, "specularIntensityMap", o.specularTexture));
    const a = o.specularColorFactor || [1, 1, 1];
    return t.specularColor = new Ee().setRGB(a[0], a[1], a[2], Lt), o.specularColorTexture !== void 0 && r.push(n.assignTexture(t, "specularColorMap", o.specularColorTexture, Mt)), Promise.all(r);
  }
}
class j_ {
  constructor(e) {
    this.parser = e, this.name = Oe.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : hn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    return t.bumpScale = o.bumpFactor !== void 0 ? o.bumpFactor : 1, o.bumpTexture !== void 0 && r.push(n.assignTexture(t, "bumpMap", o.bumpTexture)), Promise.all(r);
  }
}
class $_ {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : hn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    return o.anisotropyStrength !== void 0 && (t.anisotropy = o.anisotropyStrength), o.anisotropyRotation !== void 0 && (t.anisotropyRotation = o.anisotropyRotation), o.anisotropyTexture !== void 0 && r.push(n.assignTexture(t, "anisotropyMap", o.anisotropyTexture)), Promise.all(r);
  }
}
class K_ {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name]) return null;
    const r = i.extensions[this.name], o = t.options.ktx2Loader;
    if (!o) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, r.source, o);
  }
}
class Z_ {
  constructor(e) {
    this.parser = e, this.name = Oe.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, r = i.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const o = r.extensions[t], a = i.images[o.source];
    let l = n.textureLoader;
    if (a.uri) {
      const c = n.options.manager.getHandler(a.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(e, o.source, l);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class J_ {
  constructor(e) {
    this.parser = e, this.name = Oe.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, r = i.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const o = r.extensions[t], a = i.images[o.source];
    let l = n.textureLoader;
    if (a.uri) {
      const c = n.options.manager.getHandler(a.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(e, o.source, l);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class Q_ {
  constructor(e) {
    this.name = Oe.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], r = this.parser.getDependency("buffer", i.buffer), o = this.parser.options.meshoptDecoder;
      if (!o || !o.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return r.then(function(a) {
        const l = i.byteOffset || 0, c = i.byteLength || 0, h = i.count, u = i.byteStride, d = new Uint8Array(a, l, c);
        return o.decodeGltfBufferAsync ? o.decodeGltfBufferAsync(h, u, d, i.mode, i.filter).then(function(p) {
          return p.buffer;
        }) : o.ready.then(function() {
          const p = new ArrayBuffer(h * u);
          return o.decodeGltfBuffer(new Uint8Array(p), h, u, d, i.mode, i.filter), p;
        });
      });
    } else return null;
  }
}
class ex {
  constructor(e) {
    this.name = Oe.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0) return null;
    const i = t.meshes[n.mesh];
    for (const c of i.primitives) if (c.mode !== Gt.TRIANGLES && c.mode !== Gt.TRIANGLE_STRIP && c.mode !== Gt.TRIANGLE_FAN && c.mode !== void 0) return null;
    const o = n.extensions[this.name].attributes, a = [], l = {};
    for (const c in o) a.push(this.parser.getDependency("accessor", o[c]).then((h) => (l[c] = h, l[c])));
    return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((c) => {
      const h = c.pop(), u = h.isGroup ? h.children : [h], d = c[0].count, p = [];
      for (const g of u) {
        const _ = new Pe(), m = new R(), f = new an(), b = new R(1, 1, 1), T = new ku(g.geometry, g.material, d);
        for (let M = 0; M < d; M++) l.TRANSLATION && m.fromBufferAttribute(l.TRANSLATION, M), l.ROTATION && f.fromBufferAttribute(l.ROTATION, M), l.SCALE && b.fromBufferAttribute(l.SCALE, M), T.setMatrixAt(M, _.compose(m, f, b));
        for (const M in l) if (M === "_COLOR_0") {
          const L = l[M];
          T.instanceColor = new Yo(L.array, L.itemSize, L.normalized);
        } else M !== "TRANSLATION" && M !== "ROTATION" && M !== "SCALE" && g.geometry.setAttribute(M, l[M]);
        rt.prototype.copy.call(T, g), this.parser.assignFinalMaterial(T), p.push(T);
      }
      return h.isGroup ? (h.clear(), h.add(...p), h) : p[0];
    }));
  }
}
const jc = "glTF", ss = 12, ec = { JSON: 1313821514, BIN: 5130562 };
class tx {
  constructor(e) {
    this.name = Oe.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, ss), n = new TextDecoder();
    if (this.header = { magic: n.decode(new Uint8Array(e.slice(0, 4))), version: t.getUint32(4, true), length: t.getUint32(8, true) }, this.header.magic !== jc) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - ss, r = new DataView(e, ss);
    let o = 0;
    for (; o < i; ) {
      const a = r.getUint32(o, true);
      o += 4;
      const l = r.getUint32(o, true);
      if (o += 4, l === ec.JSON) {
        const c = new Uint8Array(e, ss + o, a);
        this.content = n.decode(c);
      } else if (l === ec.BIN) {
        const c = ss + o;
        this.body = e.slice(c, c + a);
      }
      o += a;
    }
    if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class nx {
  constructor(e, t) {
    if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = Oe.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, r = e.extensions[this.name].bufferView, o = e.extensions[this.name].attributes, a = {}, l = {}, c = {};
    for (const h in o) {
      const u = Zo[h] || h.toLowerCase();
      a[u] = o[h];
    }
    for (const h in e.attributes) {
      const u = Zo[h] || h.toLowerCase();
      if (o[h] !== void 0) {
        const d = n.accessors[e.attributes[h]], p = Ci[d.componentType];
        c[u] = p.name, l[u] = d.normalized === true;
      }
    }
    return t.getDependency("bufferView", r).then(function(h) {
      return new Promise(function(u, d) {
        i.decodeDracoFile(h, function(p) {
          for (const g in p.attributes) {
            const _ = p.attributes[g], m = l[g];
            m !== void 0 && (_.normalized = m);
          }
          u(p);
        }, a, c, Lt, d);
      });
    });
  }
}
class ix {
  constructor() {
    this.name = Oe.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = true), e;
  }
}
class sx {
  constructor() {
    this.name = Oe.KHR_MESH_QUANTIZATION;
  }
}
class $c extends ys {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i * 3 + i;
    for (let o = 0; o !== i; o++) t[o] = n[r + o];
    return t;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = a * 2, c = a * 3, h = i - t, u = (n - t) / h, d = u * u, p = d * u, g = e * c, _ = g - c, m = -2 * p + 3 * d, f = p - d, b = 1 - m, T = f - d + u;
    for (let M = 0; M !== a; M++) {
      const L = o[_ + M + a], C = o[_ + M + l] * h, A = o[g + M + a], N = o[g + M] * h;
      r[M] = b * L + T * C + m * A + f * N;
    }
    return r;
  }
}
const rx = new an();
class ox extends $c {
  interpolate_(e, t, n, i) {
    const r = super.interpolate_(e, t, n, i);
    return rx.fromArray(r).normalize().toArray(r), r;
  }
}
const Gt = { POINTS: 0, LINES: 1, LINE_LOOP: 2, LINE_STRIP: 3, TRIANGLES: 4, TRIANGLE_STRIP: 5, TRIANGLE_FAN: 6 }, Ci = { 5120: Int8Array, 5121: Uint8Array, 5122: Int16Array, 5123: Uint16Array, 5125: Uint32Array, 5126: Float32Array }, tc = { 9728: Ct, 9729: Bt, 9984: ac, 9985: ir, 9986: rs, 9987: yn }, nc = { 33071: Nn, 33648: hr, 10497: Ii }, io = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 }, Zo = { POSITION: "position", NORMAL: "normal", TANGENT: "tangent", TEXCOORD_0: "uv", TEXCOORD_1: "uv1", TEXCOORD_2: "uv2", TEXCOORD_3: "uv3", COLOR_0: "color", WEIGHTS_0: "skinWeight", JOINTS_0: "skinIndex" }, Dn = { scale: "scale", translation: "position", rotation: "quaternion", weights: "morphTargetInfluences" }, ax = { CUBICSPLINE: void 0, LINEAR: ds, STEP: us }, so = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" };
function lx(s) {
  return s.DefaultMaterial === void 0 && (s.DefaultMaterial = new pa({ color: 16777215, emissive: 0, metalness: 1, roughness: 1, transparent: false, depthTest: true, side: bn })), s.DefaultMaterial;
}
function jn(s, e, t) {
  for (const n in t.extensions) s[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function Mn(s, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(s.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function cx(s, e, t) {
  let n = false, i = false, r = false;
  for (let c = 0, h = e.length; c < h; c++) {
    const u = e[c];
    if (u.POSITION !== void 0 && (n = true), u.NORMAL !== void 0 && (i = true), u.COLOR_0 !== void 0 && (r = true), n && i && r) break;
  }
  if (!n && !i && !r) return Promise.resolve(s);
  const o = [], a = [], l = [];
  for (let c = 0, h = e.length; c < h; c++) {
    const u = e[c];
    if (n) {
      const d = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : s.attributes.position;
      o.push(d);
    }
    if (i) {
      const d = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : s.attributes.normal;
      a.push(d);
    }
    if (r) {
      const d = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : s.attributes.color;
      l.push(d);
    }
  }
  return Promise.all([Promise.all(o), Promise.all(a), Promise.all(l)]).then(function(c) {
    const h = c[0], u = c[1], d = c[2];
    return n && (s.morphAttributes.position = h), i && (s.morphAttributes.normal = u), r && (s.morphAttributes.color = d), s.morphTargetsRelative = true, s;
  });
}
function hx(s, e) {
  if (s.updateMorphTargets(), e.weights !== void 0) for (let t = 0, n = e.weights.length; t < n; t++) s.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (s.morphTargetInfluences.length === t.length) {
      s.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++) s.morphTargetDictionary[t[n]] = n;
    } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function ux(s) {
  let e;
  const t = s.extensions && s.extensions[Oe.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + ro(t.attributes) : e = s.indices + ":" + ro(s.attributes) + ":" + s.mode, s.targets !== void 0) for (let n = 0, i = s.targets.length; n < i; n++) e += ":" + ro(s.targets[n]);
  return e;
}
function ro(s) {
  let e = "";
  const t = Object.keys(s).sort();
  for (let n = 0, i = t.length; n < i; n++) e += t[n] + ":" + s[t[n]] + ";";
  return e;
}
function Jo(s) {
  switch (s) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function dx(s) {
  return s.search(/\.jpe?g($|\?)/i) > 0 || s.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : s.search(/\.webp($|\?)/i) > 0 || s.search(/^data\:image\/webp/) === 0 ? "image/webp" : s.search(/\.ktx2($|\?)/i) > 0 || s.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
const fx = new Pe();
class px {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new F_(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = false, i = -1, r = false, o = -1;
    if (typeof navigator < "u") {
      const a = navigator.userAgent;
      n = /^((?!chrome|android).)*safari/i.test(a) === true;
      const l = a.match(/Version\/(\d+)/);
      i = n && l ? parseInt(l[1], 10) : -1, r = a.indexOf("Firefox") > -1, o = r ? a.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || n && i < 17 || r && o < 98 ? this.textureLoader = new ad(this.options.manager) : this.textureLoader = new fd(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Bc(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(true);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, i = this.json, r = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(o) {
      return o._markDefs && o._markDefs();
    }), Promise.all(this._invokeAll(function(o) {
      return o.beforeRoot && o.beforeRoot();
    })).then(function() {
      return Promise.all([n.getDependencies("scene"), n.getDependencies("animation"), n.getDependencies("camera")]);
    }).then(function(o) {
      const a = { scene: o[0][i.scene || 0], scenes: o[0], animations: o[1], cameras: o[2], asset: i.asset, parser: n, userData: {} };
      return jn(r, a, i), Mn(a, i), Promise.all(n._invokeAll(function(l) {
        return l.afterRoot && l.afterRoot(a);
      })).then(function() {
        for (const l of a.scenes) l.updateMatrixWorld();
        e(a);
      });
    }).catch(t);
  }
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, r = t.length; i < r; i++) {
      const o = t[i].joints;
      for (let a = 0, l = o.length; a < l; a++) e[o[a]].isBone = true;
    }
    for (let i = 0, r = e.length; i < r; i++) {
      const o = e[i];
      o.mesh !== void 0 && (this._addNodeRef(this.meshCache, o.mesh), o.skin !== void 0 && (n[o.mesh].isSkinnedMesh = true)), o.camera !== void 0 && this._addNodeRef(this.cameraCache, o.camera);
    }
  }
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const i = n.clone(), r = (o, a) => {
      const l = this.associations.get(o);
      l != null && this.associations.set(a, l);
      for (const [c, h] of o.children.entries()) r(h, a.children[c]);
    };
    return r(n, i), i.name += "_instance_" + e.uses[t]++, i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const r = e(t[i]);
      r && n.push(r);
    }
    return n;
  }
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function(r) {
            return r.loadNode && r.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function(r) {
            return r.loadMesh && r.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function(r) {
            return r.loadBufferView && r.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function(r) {
            return r.loadMaterial && r.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function(r) {
            return r.loadTexture && r.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function(r) {
            return r.loadAnimation && r.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (i = this._invokeOne(function(r) {
            return r != this && r.getDependency && r.getDependency(e, t);
          }), !i) throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, i);
    }
    return i;
  }
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(i.map(function(r, o) {
        return n.getDependency(e, o);
      })), this.cache.add(e, t);
    }
    return t;
  }
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[Oe.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(r, o) {
      n.load(cs.resolveURL(t.uri, i.path), r, void 0, function() {
        o(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const i = t.byteLength || 0, r = t.byteOffset || 0;
      return n.slice(r, r + i);
    });
  }
  loadAccessor(e) {
    const t = this, n = this.json, i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const o = io[i.type], a = Ci[i.componentType], l = i.normalized === true, c = new a(i.count * o);
      return Promise.resolve(new Pt(c, o, l));
    }
    const r = [];
    return i.bufferView !== void 0 ? r.push(this.getDependency("bufferView", i.bufferView)) : r.push(null), i.sparse !== void 0 && (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(r).then(function(o) {
      const a = o[0], l = io[i.type], c = Ci[i.componentType], h = c.BYTES_PER_ELEMENT, u = h * l, d = i.byteOffset || 0, p = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === true;
      let _, m;
      if (p && p !== u) {
        const f = Math.floor(d / p), b = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + f + ":" + i.count;
        let T = t.cache.get(b);
        T || (_ = new c(a, f * p, i.count * p / h), T = new Cc(_, p / h), t.cache.add(b, T)), m = new ps(T, l, d % p / h, g);
      } else a === null ? _ = new c(i.count * l) : _ = new c(a, d, i.count * l), m = new Pt(_, l, g);
      if (i.sparse !== void 0) {
        const f = io.SCALAR, b = Ci[i.sparse.indices.componentType], T = i.sparse.indices.byteOffset || 0, M = i.sparse.values.byteOffset || 0, L = new b(o[1], T, i.sparse.count * f), C = new c(o[2], M, i.sparse.count * l);
        a !== null && (m = new Pt(m.array.slice(), m.itemSize, m.normalized)), m.normalized = false;
        for (let A = 0, N = L.length; A < N; A++) {
          const S = L[A];
          if (m.setX(S, C[A * l]), l >= 2 && m.setY(S, C[A * l + 1]), l >= 3 && m.setZ(S, C[A * l + 2]), l >= 4 && m.setW(S, C[A * l + 3]), l >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        m.normalized = g;
      }
      return m;
    });
  }
  loadTexture(e) {
    const t = this.json, n = this.options, r = t.textures[e].source, o = t.images[r];
    let a = this.textureLoader;
    if (o.uri) {
      const l = n.manager.getHandler(o.uri);
      l !== null && (a = l);
    }
    return this.loadTextureImage(e, r, a);
  }
  loadTextureImage(e, t, n) {
    const i = this, r = this.json, o = r.textures[e], a = r.images[t], l = (a.uri || a.bufferView) + ":" + o.sampler;
    if (this.textureCache[l]) return this.textureCache[l];
    const c = this.loadImageSource(t, n).then(function(h) {
      h.flipY = false, h.name = o.name || a.name || "", h.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === false && (h.name = a.uri);
      const d = (r.samplers || {})[o.sampler] || {};
      return h.magFilter = tc[d.magFilter] || Bt, h.minFilter = tc[d.minFilter] || yn, h.wrapS = nc[d.wrapS] || Ii, h.wrapT = nc[d.wrapT] || Ii, h.generateMipmaps = !h.isCompressedTexture && h.minFilter !== Ct && h.minFilter !== Bt, i.associations.set(h, { textures: e }), h;
    }).catch(function() {
      return null;
    });
    return this.textureCache[l] = c, c;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, r = this.options;
    if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then((u) => u.clone());
    const o = i.images[e], a = self.URL || self.webkitURL;
    let l = o.uri || "", c = false;
    if (o.bufferView !== void 0) l = n.getDependency("bufferView", o.bufferView).then(function(u) {
      c = true;
      const d = new Blob([u], { type: o.mimeType });
      return l = a.createObjectURL(d), l;
    });
    else if (o.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const h = Promise.resolve(l).then(function(u) {
      return new Promise(function(d, p) {
        let g = d;
        t.isImageBitmapLoader === true && (g = function(_) {
          const m = new pt(_);
          m.needsUpdate = true, d(m);
        }), t.load(cs.resolveURL(u, r.path), g, void 0, p);
      });
    }).then(function(u) {
      return c === true && a.revokeObjectURL(l), Mn(u, o), u.userData.mimeType = o.mimeType || dx(o.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", l), u;
    });
    return this.sourceCache[e] = h, h;
  }
  assignTexture(e, t, n, i) {
    const r = this;
    return this.getDependency("texture", n.index).then(function(o) {
      if (!o) return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (o = o.clone(), o.channel = n.texCoord), r.extensions[Oe.KHR_TEXTURE_TRANSFORM]) {
        const a = n.extensions !== void 0 ? n.extensions[Oe.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const l = r.associations.get(o);
          o = r.extensions[Oe.KHR_TEXTURE_TRANSFORM].extendTexture(o, a), r.associations.set(o, l);
        }
      }
      return i !== void 0 && (o.colorSpace = i), e[t] = o, o;
    });
  }
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0, r = t.attributes.color !== void 0, o = t.attributes.normal === void 0;
    if (e.isPoints) {
      const a = "PointsMaterial:" + n.uuid;
      let l = this.cache.get(a);
      l || (l = new Uc(), en.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = false, this.cache.add(a, l)), n = l;
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(a);
      l || (l = new Ms(), en.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, this.cache.add(a, l)), n = l;
    }
    if (i || r || o) {
      let a = "ClonedMaterial:" + n.uuid + ":";
      i && (a += "derivative-tangents:"), r && (a += "vertex-colors:"), o && (a += "flat-shading:");
      let l = this.cache.get(a);
      l || (l = n.clone(), r && (l.vertexColors = true), o && (l.flatShading = true), i && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(a, l), this.associations.set(l, this.associations.get(n))), n = l;
    }
    e.material = n;
  }
  getMaterialType() {
    return pa;
  }
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, r = n.materials[e];
    let o;
    const a = {}, l = r.extensions || {}, c = [];
    if (l[Oe.KHR_MATERIALS_UNLIT]) {
      const u = i[Oe.KHR_MATERIALS_UNLIT];
      o = u.getMaterialType(), c.push(u.extendParams(a, r, t));
    } else {
      const u = r.pbrMetallicRoughness || {};
      if (a.color = new Ee(1, 1, 1), a.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const d = u.baseColorFactor;
        a.color.setRGB(d[0], d[1], d[2], Lt), a.opacity = d[3];
      }
      u.baseColorTexture !== void 0 && c.push(t.assignTexture(a, "map", u.baseColorTexture, Mt)), a.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, a.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(a, "metalnessMap", u.metallicRoughnessTexture)), c.push(t.assignTexture(a, "roughnessMap", u.metallicRoughnessTexture))), o = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), c.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, a);
      })));
    }
    r.doubleSided === true && (a.side = sn);
    const h = r.alphaMode || so.OPAQUE;
    if (h === so.BLEND ? (a.transparent = true, a.depthWrite = false) : (a.transparent = false, h === so.MASK && (a.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && o !== rn && (c.push(t.assignTexture(a, "normalMap", r.normalTexture)), a.normalScale = new Me(1, 1), r.normalTexture.scale !== void 0)) {
      const u = r.normalTexture.scale;
      a.normalScale.set(u, u);
    }
    if (r.occlusionTexture !== void 0 && o !== rn && (c.push(t.assignTexture(a, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && o !== rn) {
      const u = r.emissiveFactor;
      a.emissive = new Ee().setRGB(u[0], u[1], u[2], Lt);
    }
    return r.emissiveTexture !== void 0 && o !== rn && c.push(t.assignTexture(a, "emissiveMap", r.emissiveTexture, Mt)), Promise.all(c).then(function() {
      const u = new o(a);
      return r.name && (u.name = r.name), Mn(u, r), t.associations.set(u, { materials: e }), r.extensions && jn(i, u, r), u;
    });
  }
  createUniqueName(e) {
    const t = Je.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function r(a) {
      return n[Oe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(l) {
        return ic(l, a, t);
      });
    }
    const o = [];
    for (let a = 0, l = e.length; a < l; a++) {
      const c = e[a], h = ux(c), u = i[h];
      if (u) o.push(u.promise);
      else {
        let d;
        c.extensions && c.extensions[Oe.KHR_DRACO_MESH_COMPRESSION] ? d = r(c) : d = ic(new xt(), c, t), i[h] = { primitive: c, promise: d }, o.push(d);
      }
    }
    return Promise.all(o);
  }
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, r = n.meshes[e], o = r.primitives, a = [];
    for (let l = 0, c = o.length; l < c; l++) {
      const h = o[l].material === void 0 ? lx(this.cache) : this.getDependency("material", o[l].material);
      a.push(h);
    }
    return a.push(t.loadGeometries(o)), Promise.all(a).then(function(l) {
      const c = l.slice(0, l.length - 1), h = l[l.length - 1], u = [];
      for (let p = 0, g = h.length; p < g; p++) {
        const _ = h[p], m = o[p];
        let f;
        const b = c[p];
        if (m.mode === Gt.TRIANGLES || m.mode === Gt.TRIANGLE_STRIP || m.mode === Gt.TRIANGLE_FAN || m.mode === void 0) f = r.isSkinnedMesh === true ? new Ou(_, b) : new ft(_, b), f.isSkinnedMesh === true && f.normalizeSkinWeights(), m.mode === Gt.TRIANGLE_STRIP ? f.geometry = Ql(f.geometry, _c) : m.mode === Gt.TRIANGLE_FAN && (f.geometry = Ql(f.geometry, Wo));
        else if (m.mode === Gt.LINES) f = new fa(_, b);
        else if (m.mode === Gt.LINE_STRIP) f = new ms(_, b);
        else if (m.mode === Gt.LINE_LOOP) f = new Gu(_, b);
        else if (m.mode === Gt.POINTS) f = new Wu(_, b);
        else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
        Object.keys(f.geometry.morphAttributes).length > 0 && hx(f, r), f.name = t.createUniqueName(r.name || "mesh_" + e), Mn(f, r), m.extensions && jn(i, f, m), t.assignFinalMaterial(f), u.push(f);
      }
      for (let p = 0, g = u.length; p < g; p++) t.associations.set(u[p], { meshes: e, primitives: p });
      if (u.length === 1) return r.extensions && jn(i, u[0], r), u[0];
      const d = new Qn();
      r.extensions && jn(i, d, r), t.associations.set(d, { meshes: e });
      for (let p = 0, g = u.length; p < g; p++) d.add(u[p]);
      return d;
    });
  }
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new bt(Mc.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new Es(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), Mn(t, n), Promise.resolve(t);
  }
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let i = 0, r = t.joints.length; i < r; i++) n.push(this._loadNodeShallow(t.joints[i]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
      const r = i.pop(), o = i, a = [], l = [];
      for (let c = 0, h = o.length; c < h; c++) {
        const u = o[c];
        if (u) {
          a.push(u);
          const d = new Pe();
          r !== null && d.fromArray(r.array, c * 16), l.push(d);
        } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
      }
      return new ua(a, l);
    });
  }
  loadAnimation(e) {
    const t = this.json, n = this, i = t.animations[e], r = i.name ? i.name : "animation_" + e, o = [], a = [], l = [], c = [], h = [];
    for (let u = 0, d = i.channels.length; u < d; u++) {
      const p = i.channels[u], g = i.samplers[p.sampler], _ = p.target, m = _.node, f = i.parameters !== void 0 ? i.parameters[g.input] : g.input, b = i.parameters !== void 0 ? i.parameters[g.output] : g.output;
      _.node !== void 0 && (o.push(this.getDependency("node", m)), a.push(this.getDependency("accessor", f)), l.push(this.getDependency("accessor", b)), c.push(g), h.push(_));
    }
    return Promise.all([Promise.all(o), Promise.all(a), Promise.all(l), Promise.all(c), Promise.all(h)]).then(function(u) {
      const d = u[0], p = u[1], g = u[2], _ = u[3], m = u[4], f = [];
      for (let b = 0, T = d.length; b < T; b++) {
        const M = d[b], L = p[b], C = g[b], A = _[b], N = m[b];
        if (M === void 0) continue;
        M.updateMatrix && M.updateMatrix();
        const S = n._createAnimationTracks(M, L, C, A, N);
        if (S) for (let y = 0; y < S.length; y++) f.push(S[y]);
      }
      return new ed(r, void 0, f);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(r) {
      const o = n._getNodeRef(n.meshCache, i.mesh, r);
      return i.weights !== void 0 && o.traverse(function(a) {
        if (a.isMesh) for (let l = 0, c = i.weights.length; l < c; l++) a.morphTargetInfluences[l] = i.weights[l];
      }), o;
    });
  }
  loadNode(e) {
    const t = this.json, n = this, i = t.nodes[e], r = n._loadNodeShallow(e), o = [], a = i.children || [];
    for (let c = 0, h = a.length; c < h; c++) o.push(n.getDependency("node", a[c]));
    const l = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
    return Promise.all([r, Promise.all(o), l]).then(function(c) {
      const h = c[0], u = c[1], d = c[2];
      d !== null && h.traverse(function(p) {
        p.isSkinnedMesh && p.bind(d, fx);
      });
      for (let p = 0, g = u.length; p < g; p++) h.add(u[p]);
      return h;
    });
  }
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, i = this;
    if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
    const r = t.nodes[e], o = r.name ? i.createUniqueName(r.name) : "", a = [], l = i._invokeOne(function(c) {
      return c.createNodeMesh && c.createNodeMesh(e);
    });
    return l && a.push(l), r.camera !== void 0 && a.push(i.getDependency("camera", r.camera).then(function(c) {
      return i._getNodeRef(i.cameraCache, r.camera, c);
    })), i._invokeAll(function(c) {
      return c.createNodeAttachment && c.createNodeAttachment(e);
    }).forEach(function(c) {
      a.push(c);
    }), this.nodeCache[e] = Promise.all(a).then(function(c) {
      let h;
      if (r.isBone === true ? h = new Dc() : c.length > 1 ? h = new Qn() : c.length === 1 ? h = c[0] : h = new rt(), h !== c[0]) for (let u = 0, d = c.length; u < d; u++) h.add(c[u]);
      if (r.name && (h.userData.name = r.name, h.name = o), Mn(h, r), r.extensions && jn(n, h, r), r.matrix !== void 0) {
        const u = new Pe();
        u.fromArray(r.matrix), h.applyMatrix4(u);
      } else r.translation !== void 0 && h.position.fromArray(r.translation), r.rotation !== void 0 && h.quaternion.fromArray(r.rotation), r.scale !== void 0 && h.scale.fromArray(r.scale);
      return i.associations.has(h) || i.associations.set(h, {}), i.associations.get(h).nodes = e, h;
    }), this.nodeCache[e];
  }
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], i = this, r = new Qn();
    n.name && (r.name = i.createUniqueName(n.name)), Mn(r, n), n.extensions && jn(t, r, n);
    const o = n.nodes || [], a = [];
    for (let l = 0, c = o.length; l < c; l++) a.push(i.getDependency("node", o[l]));
    return Promise.all(a).then(function(l) {
      for (let h = 0, u = l.length; h < u; h++) r.add(l[h]);
      const c = (h) => {
        const u = /* @__PURE__ */ new Map();
        for (const [d, p] of i.associations) (d instanceof en || d instanceof pt) && u.set(d, p);
        return h.traverse((d) => {
          const p = i.associations.get(d);
          p != null && u.set(d, p);
        }), u;
      };
      return i.associations = c(r), r;
    });
  }
  _createAnimationTracks(e, t, n, i, r) {
    const o = [], a = e.name ? e.name : e.uuid, l = [];
    Dn[r.path] === Dn.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && l.push(d.name ? d.name : d.uuid);
    }) : l.push(a);
    let c;
    switch (Dn[r.path]) {
      case Dn.weights:
        c = Bi;
        break;
      case Dn.rotation:
        c = zi;
        break;
      case Dn.position:
      case Dn.scale:
        c = ki;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            c = Bi;
            break;
          case 2:
          case 3:
          default:
            c = ki;
            break;
        }
        break;
    }
    const h = i.interpolation !== void 0 ? ax[i.interpolation] : ds, u = this._getArrayFromAccessor(n);
    for (let d = 0, p = l.length; d < p; d++) {
      const g = new c(l[d] + "." + Dn[r.path], t.array, u, h);
      i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(g), o.push(g);
    }
    return o;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = Jo(t.constructor), i = new Float32Array(t.length);
      for (let r = 0, o = t.length; r < o; r++) i[r] = t[r] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const i = this instanceof zi ? ox : $c;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
  }
}
function mx(s, e, t) {
  const n = e.attributes, i = new tn();
  if (n.POSITION !== void 0) {
    const a = t.json.accessors[n.POSITION], l = a.min, c = a.max;
    if (l !== void 0 && c !== void 0) {
      if (i.set(new R(l[0], l[1], l[2]), new R(c[0], c[1], c[2])), a.normalized) {
        const h = Jo(Ci[a.componentType]);
        i.min.multiplyScalar(h), i.max.multiplyScalar(h);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else return;
  const r = e.targets;
  if (r !== void 0) {
    const a = new R(), l = new R();
    for (let c = 0, h = r.length; c < h; c++) {
      const u = r[c];
      if (u.POSITION !== void 0) {
        const d = t.json.accessors[u.POSITION], p = d.min, g = d.max;
        if (p !== void 0 && g !== void 0) {
          if (l.setX(Math.max(Math.abs(p[0]), Math.abs(g[0]))), l.setY(Math.max(Math.abs(p[1]), Math.abs(g[1]))), l.setZ(Math.max(Math.abs(p[2]), Math.abs(g[2]))), d.normalized) {
            const _ = Jo(Ci[d.componentType]);
            l.multiplyScalar(_);
          }
          a.max(l);
        } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(a);
  }
  s.boundingBox = i;
  const o = new cn();
  i.getCenter(o.center), o.radius = i.min.distanceTo(i.max) / 2, s.boundingSphere = o;
}
function ic(s, e, t) {
  const n = e.attributes, i = [];
  function r(o, a) {
    return t.getDependency("accessor", o).then(function(l) {
      s.setAttribute(a, l);
    });
  }
  for (const o in n) {
    const a = Zo[o] || o.toLowerCase();
    a in s.attributes || i.push(r(n[o], a));
  }
  if (e.indices !== void 0 && !s.index) {
    const o = t.getDependency("accessor", e.indices).then(function(a) {
      s.setIndex(a);
    });
    i.push(o);
  }
  return He.workingColorSpace !== Lt && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${He.workingColorSpace}" not supported.`), Mn(s, e), mx(s, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? cx(s, e.targets, t) : s;
  });
}
class gx {
  static getSupportedExtension(e) {
    var _a2;
    return ((_a2 = e.split(".").pop()) == null ? void 0 : _a2.toLowerCase()) || "";
  }
  static loadModel(e, t) {
    const n = this.getSupportedExtension(e);
    n === "glb" || n === "gltf" ? this.loadGLTF(e, t) : t.onError && t.onError(`\uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uD30C\uC77C \uD615\uC2DD: ${n}`);
  }
  static loadGLTF(e, t) {
    new N_().load(e, (i) => {
      t.onLoad(i.scene);
    }, (i) => {
      if (i.lengthComputable && t.onProgress) {
        const r = Math.floor(i.loaded / i.total * 100);
        t.onProgress(r);
      }
    }, (i) => {
      t.onError && t.onError(i);
    });
  }
}
class _x {
  constructor() {
    __publicField(this, "element");
    this.element = document.createElement("div"), this.element.id = "loader", this.setupStyles(), this.hide(), document.body.appendChild(this.element);
  }
  setupStyles() {
    this.element.style.position = "absolute", this.element.style.top = "50%", this.element.style.left = "50%", this.element.style.transform = "translate(-50%, -50%)", this.element.style.color = "white", this.element.style.backgroundColor = "rgba(0, 0, 0, 0.7)", this.element.style.padding = "20px", this.element.style.borderRadius = "10px", this.element.style.zIndex = "1000";
  }
  show(e = "\uBAA8\uB378 \uB85C\uB529 \uC911...") {
    this.element.textContent = e, this.element.style.display = "block";
  }
  updateProgress(e) {
    this.element.textContent = `\uBAA8\uB378 \uB85C\uB529 \uC911... ${e}%`;
  }
  hide() {
    this.element.style.display = "none";
  }
  showError(e) {
    this.element.textContent = e, setTimeout(() => this.hide(), 3e3);
  }
}
class xx {
  constructor(e, t) {
    __publicField(this, "onModelUrlReceived");
    __publicField(this, "onModelUnload");
    this.onModelUrlReceived = e, this.onModelUnload = t, window.addEventListener("message", this.handleMessage.bind(this)), this.checkUrlParameters();
  }
  handleMessage(e) {
    var _a2, _b;
    ((_a2 = e.data) == null ? void 0 : _a2.type) === "loadModel" ? this.onModelUrlReceived(e.data.modelUrl, e.data.modelId) : ((_b = e.data) == null ? void 0 : _b.type) === "unloadModel" && this.onModelUnload(e.data.modelId);
  }
  checkUrlParameters() {
    const e = new URLSearchParams(window.location.search), t = e.get("modelUrl"), n = e.get("modelId") || "default";
    t && this.onModelUrlReceived(t, n);
  }
  sendModelLoadedMessage(e, t) {
    window.parent && window.parent.postMessage({ type: "modelLoaded", success: e, error: t }, "*");
  }
  sendModelUnloadedMessage() {
    window.parent && window.parent.postMessage({ type: "modelUnloaded" }, "*");
  }
}
class vx {
  constructor(e) {
    __publicField(this, "scene");
    __publicField(this, "camera");
    __publicField(this, "renderer");
    __publicField(this, "axesHelper");
    __publicField(this, "axesLabels", []);
    __publicField(this, "mainCamera");
    __publicField(this, "cameraDistance", 3.5);
    this.mainCamera = e, this.scene = new Rc(), this.scene.background = new Ee(2236962), this.camera = new bt(50, 1, 0.1, 100), this.camera.position.set(0, 0, this.cameraDistance), this.camera.lookAt(0, 0, 0), this.renderer = new Yc({ antialias: true, alpha: true }), this.renderer.setSize(100, 100), this.renderer.setPixelRatio(window.devicePixelRatio);
    const t = document.createElement("div");
    t.style.position = "absolute", t.style.bottom = "20px", t.style.right = "20px", t.style.width = "100px", t.style.height = "100px", t.style.borderRadius = "5px", t.style.overflow = "hidden", t.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)", t.appendChild(this.renderer.domElement), document.body.appendChild(t), this.createAxes(), this.animate();
  }
  createAxes() {
    this.axesHelper = new kc(1), this.scene.add(this.axesHelper), this.createAxisLabel("X", new R(1 + 0.2, 0, 0), "#ff0000"), this.createAxisLabel("Y", new R(0, 1 + 0.2, 0), "#00ff00"), this.createAxisLabel("Z", new R(0, 0, 1 + 0.2), "#0000ff");
    const t = new gs(0.05, 16, 16), n = new rn({ color: 16777215 }), i = new ft(t, n);
    this.scene.add(i);
    const r = new mr(16777215, 1);
    r.position.set(1, 1, 1), this.scene.add(r);
    const o = new zc(16777215, 0.5);
    this.scene.add(o);
  }
  createAxisLabel(e, t, n) {
    const i = document.createElement("canvas");
    i.width = 64, i.height = 64;
    const r = i.getContext("2d");
    r && (r.fillStyle = "rgba(255, 255, 255, 0)", r.fillRect(0, 0, i.width, i.height), r.font = "bold 48px Arial", r.textAlign = "center", r.textBaseline = "middle", r.fillStyle = n, r.fillText(e, i.width / 2, i.height / 2));
    const o = new Xu(i), a = new Pc({ map: o, transparent: true }), l = new Nu(a);
    l.position.copy(t), l.scale.set(0.5, 0.5, 0.5), this.scene.add(l), this.axesLabels.push(l);
  }
  update() {
    if (this.mainCamera instanceof Es || this.mainCamera instanceof bt) {
      const e = new R();
      e.copy(this.mainCamera.position).normalize();
      const t = e.multiplyScalar(this.cameraDistance);
      this.camera.position.set(t.x, t.y, t.z), this.camera.lookAt(0, 0, 0), this.axesLabels.forEach((n) => {
        n.rotation.copy(this.axesHelper.rotation);
      });
    }
  }
  animate() {
    requestAnimationFrame(this.animate.bind(this)), this.update(), this.renderer.render(this.scene, this.camera);
  }
}
class Mx {
  constructor(e) {
    __publicField(this, "container");
    __publicField(this, "camera");
    this.camera = e, this.container = document.createElement("div"), this.container.style.position = "absolute", this.container.style.top = "20px", this.container.style.right = "20px", this.container.style.display = "flex", this.container.style.flexDirection = "column", this.container.style.gap = "5px", document.body.appendChild(this.container), this.createViewButton("\uC815\uBA74", () => this.setFrontView()), this.createViewButton("\uD6C4\uBA74", () => this.setBackView()), this.createViewButton("\uC88C\uCE21", () => this.setLeftView()), this.createViewButton("\uC6B0\uCE21", () => this.setRightView()), this.createViewButton("\uC0C1\uB2E8", () => this.setTopView()), this.createViewButton("\uD558\uB2E8", () => this.setBottomView()), this.createViewButton("\uB4F1\uAC01", () => this.setIsometricView());
  }
  createViewButton(e, t) {
    const n = document.createElement("button");
    n.textContent = e, n.style.padding = "8px 12px", n.style.backgroundColor = "#4285F4", n.style.color = "white", n.style.border = "none", n.style.borderRadius = "4px", n.style.cursor = "pointer", n.style.fontWeight = "bold", n.style.width = "80px", n.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)", n.addEventListener("mouseenter", () => {
      n.style.backgroundColor = "#3367D6";
    }), n.addEventListener("mouseleave", () => {
      n.style.backgroundColor = "#4285F4";
    }), n.addEventListener("click", t), this.container.appendChild(n);
  }
  setFrontView() {
    this.setCameraPosition(0, 0, 20);
  }
  setBackView() {
    this.setCameraPosition(0, 0, -20);
  }
  setLeftView() {
    this.setCameraPosition(-20, 0, 0);
  }
  setRightView() {
    this.setCameraPosition(20, 0, 0);
  }
  setTopView() {
    this.setCameraPosition(0, 20, 0);
  }
  setBottomView() {
    this.setCameraPosition(0, -20, 0);
  }
  setIsometricView() {
    this.setCameraPosition(11.5, 11.5, 11.5);
  }
  setCameraPosition(e, t, n) {
    this.camera.position.set(e, t, n), this.camera.lookAt(0, 0, 0);
  }
}
class yx {
  constructor(e, t = 20, n = 20) {
    __publicField(this, "scene");
    __publicField(this, "gridSize");
    __publicField(this, "gridDivisions");
    __publicField(this, "gridHelper");
    __publicField(this, "axesHelper");
    this.scene = e, this.gridSize = t, this.gridDivisions = n, this.createGrid(), this.createAxes();
  }
  createGrid() {
    this.gridHelper = new Td(this.gridSize, this.gridDivisions, 8947848, 13421772), this.gridHelper.position.y = -0.01, this.scene.add(this.gridHelper);
    const e = new Ms({ color: 4473924, linewidth: 2 }), t = new xt().setFromPoints([new R(-this.gridSize / 2, 0, 0), new R(this.gridSize / 2, 0, 0)]), n = new ms(t, e);
    this.scene.add(n);
    const i = new xt().setFromPoints([new R(0, 0, -this.gridSize / 2), new R(0, 0, this.gridSize / 2)]), r = new ms(i, e);
    this.scene.add(r);
  }
  createAxes() {
    this.axesHelper = new kc(this.gridSize / 10), this.scene.add(this.axesHelper), this.addAxisLabels();
  }
  addAxisLabels() {
  }
  setVisible(e) {
    this.gridHelper.visible = e, this.axesHelper.visible = e;
  }
  setGridSize(e, t) {
    this.scene.remove(this.gridHelper), this.gridSize = e, this.gridDivisions = t, this.createGrid();
  }
}
class Sx {
  constructor() {
    __publicField(this, "container");
    __publicField(this, "infoItems", {});
    this.container = document.createElement("div"), this.container.id = "model-info-panel", this.container.style.backgroundColor = "rgba(0, 0, 0, 0.7)", this.container.style.color = "white", this.container.style.padding = "10px", this.container.style.borderRadius = "5px", this.container.style.fontFamily = "Arial, sans-serif", this.container.style.fontSize = "12px", this.container.style.width = "250px", this.container.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)", this.addInfoItem("fileName", "\uD30C\uC77C\uBA85: "), this.addInfoItem("vertices", "\uC815\uC810 \uC218: "), this.addInfoItem("triangles", "\uC0BC\uAC01\uD615 \uC218: "), this.addInfoItem("materials", "\uC7AC\uC9C8 \uC218: "), this.addInfoItem("dimensions", "\uCE58\uC218: "), this.hide();
  }
  addInfoItem(e, t) {
    const n = document.createElement("div");
    n.style.margin = "5px 0";
    const i = document.createElement("span");
    i.textContent = t, i.style.fontWeight = "bold";
    const r = document.createElement("span");
    r.id = `info-${e}`, n.appendChild(i), n.appendChild(r), this.container.appendChild(n), this.infoItems[e] = r;
  }
  updateModelInfo(e, t) {
    let n = 0, i = 0, r = 0;
    const o = /* @__PURE__ */ new Set();
    e.traverse((c) => {
      if (c instanceof ft) {
        const h = c.geometry;
        if (h instanceof xt) {
          const u = h.getAttribute("position");
          u && (n += u.count, h.index ? i += h.index.count / 3 : i += u.count / 3);
        }
        Array.isArray(c.material) ? c.material.forEach((u) => o.add(u)) : c.material && o.add(c.material);
      }
    }), r = o.size;
    const a = new tn().setFromObject(e), l = new R();
    a.getSize(l), this.infoItems.fileName.textContent = t, this.infoItems.vertices.textContent = n.toLocaleString(), this.infoItems.triangles.textContent = i.toLocaleString(), this.infoItems.materials.textContent = r.toString(), this.infoItems.dimensions.textContent = `X: ${l.x.toFixed(2)}, Y: ${l.y.toFixed(2)}, Z: ${l.z.toFixed(2)}`;
  }
  hide() {
    this.container.style.display = "none";
  }
  show() {
    this.container.style.display = "block";
  }
  getElement() {
    return this.container;
  }
}
class Ex {
  constructor(e) {
    __publicField(this, "selectedVerticesData", /* @__PURE__ */ new Map());
    __publicField(this, "referenceModelInfo", null);
    __publicField(this, "controlsManager");
    __publicField(this, "onAlignmentComplete", null);
    this.controlsManager = e;
  }
  updateSelection(e) {
    this.selectedVerticesData.set(e.uuid, e), console.log("AlignmentManager: Selection updated", this.selectedVerticesData);
  }
  setReference(e) {
    this.referenceModelInfo = e, console.log("AlignmentManager: Reference set", this.referenceModelInfo);
  }
  getSelectedVertices() {
    return this.selectedVerticesData;
  }
  getReferenceModel() {
    return this.referenceModelInfo;
  }
  canAlign() {
    return this.referenceModelInfo !== null && this.selectedVerticesData.size >= 2;
  }
  clear() {
    this.selectedVerticesData.clear(), this.referenceModelInfo = null, this.controlsManager.clearSelection(), console.log("AlignmentManager: Cleared all selections and reference.");
  }
  performAlignment() {
    if (!this.canAlign()) return console.warn("AlignmentManager: Cannot align. Reference or sufficient selections missing."), this.referenceModelInfo ? alert("\uC815\uB82C\uD560 \uB2E4\uB978 \uBAA8\uB378\uC758 \uC815\uC810\uC744 \uD558\uB098 \uC774\uC0C1 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.") : alert("\uAE30\uC900 \uBAA8\uB378\uC758 \uC815\uC810\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694."), false;
    console.log("AlignmentManager: Starting alignment...");
    const e = this.referenceModelInfo.worldPosition.clone();
    return this.selectedVerticesData.forEach((t) => {
      if (t.uuid === this.referenceModelInfo.uuid) return;
      let n = null;
      if (n = t.object.parent, n) {
        const i = t.worldPosition.clone(), r = new R().subVectors(e, i);
        console.log(`AlignmentManager: Aligning model ${t.uuid}: moving by`, r), n.position.add(r), n.updateMatrixWorld(true);
      } else console.warn(`AlignmentManager: Could not determine the object to align for UUID ${t.uuid}`);
    }), console.log("AlignmentManager: Alignment finished."), this.clear(), this.onAlignmentComplete && this.onAlignmentComplete(), true;
  }
}
class bx {
  constructor(e = "scene-tree-container") {
    __publicField(this, "container");
    __publicField(this, "selectedNodeElement", null);
    __publicField(this, "onNodeSelected", null);
    __publicField(this, "onNodeVisibilityChange", null);
    __publicField(this, "modelIdentifier", "mainModel");
    let t = document.getElementById(e);
    t || (t = document.createElement("div"), t.id = e, document.body.appendChild(t)), this.container = t, this.container.classList.add("scene-tree-container"), this.container.addEventListener("click", (n) => {
      (n.target === this.container || n.target instanceof HTMLElement && n.target.closest(".scene-tree-node") === null) && this.deselectNode();
    });
  }
  buildTree(e) {
    for (; this.container.firstChild; ) this.container.removeChild(this.container.firstChild);
    const t = document.createElement("ul");
    t.classList.add("scene-tree-root"), this.selectedNodeElement = null, e.forEach((n) => {
      const i = this.createTreeNode(n, true);
      i && t.appendChild(i);
    }), this.container.appendChild(t);
  }
  createTreeNode(e, t = false) {
    if (e instanceof Ss || e instanceof ha || e.type === "GridHelper" || e.type === "AxesHelper" || e.name === "ViewCube") return null;
    const n = document.createElement("li");
    if (n.classList.add("scene-tree-node"), t) {
      n.classList.add("scene-tree-root-model"), n.dataset.uuid = e.uuid;
      const o = document.createElement("input");
      o.type = "checkbox", o.checked = e.visible, o.title = "\uBAA8\uB378 \uD45C\uC2DC/\uC228\uAE30\uAE30", o.addEventListener("change", (a) => {
        a.stopPropagation();
        const l = a.target.checked;
        this.onNodeVisibilityChange && this.onNodeVisibilityChange(e.uuid, l);
      }), n.appendChild(o);
    }
    const i = document.createElement("span"), r = e.name || e.type || `Object (${e.uuid.substring(0, 6)})`;
    if (i.textContent = `${r}`, t && this.onNodeSelected && i.addEventListener("click", (o) => {
      o.stopPropagation();
      const a = o.target.closest(".scene-tree-root-model");
      a instanceof HTMLElement && this.selectNode(a, e.uuid);
    }), n.appendChild(i), !t && e.children.length > 0) {
      const o = document.createElement("ul");
      o.classList.add("scene-tree-children");
      let a = false;
      e.children.forEach((l) => {
        const c = this.createTreeNode(l, false);
        c && (o.appendChild(c), a = true);
      }), a && n.appendChild(o);
    }
    return n;
  }
  show() {
    this.container.style.display = "block";
  }
  hide() {
    this.container.style.display = "none";
  }
  selectNode(e, t) {
    if (this.selectedNodeElement === e) {
      this.deselectNode();
      return;
    }
    this.deselectNode(), this.selectedNodeElement = e, this.selectedNodeElement.classList.add("selected"), this.onNodeSelected && this.onNodeSelected(t);
  }
  deselectNode() {
    this.selectedNodeElement && (this.selectedNodeElement.classList.remove("selected"), this.selectedNodeElement = null, this.onNodeSelected && this.onNodeSelected(null));
  }
}
class Tx {
  constructor() {
    __publicField(this, "sceneManager");
    __publicField(this, "controlsManager");
    __publicField(this, "alignmentManager");
    __publicField(this, "loadingIndicator");
    __publicField(this, "messageHandler");
    __publicField(this, "viewCube");
    __publicField(this, "standardViewButtons");
    __publicField(this, "gridAndAxes");
    __publicField(this, "modelInfoPanel");
    __publicField(this, "gui");
    __publicField(this, "mainContentArea");
    __publicField(this, "sceneTreeViewer");
    __publicField(this, "currentModelUUID", null);
    __publicField(this, "models", /* @__PURE__ */ new Map());
    __publicField(this, "currentlySelectedModelUUIDInTree", null);
    __publicField(this, "toggleSelectModeButton");
    __publicField(this, "clearSelectionButton");
    __publicField(this, "alignButton");
    this.sceneManager = new v_(), this.mainContentArea = document.createElement("div"), this.mainContentArea.classList.add("main-content-area"), document.body.appendChild(this.mainContentArea), this.mainContentArea.appendChild(this.sceneManager.getDomElement()), this.controlsManager = new U_(this.sceneManager.getCamera(), this.sceneManager.getRenderer(), this.sceneManager), this.alignmentManager = new Ex(this.controlsManager), this.sceneTreeViewer = new bx("scene-tree-container"), this.sceneTreeViewer.onNodeSelected = this.handleNodeSelection.bind(this), this.sceneTreeViewer.onNodeVisibilityChange = this.handleNodeVisibilityChange.bind(this), this.loadingIndicator = new _x(), this.messageHandler = new xx(this.loadModel.bind(this), this.unloadModel.bind(this)), this.viewCube = new vx(this.sceneManager.getCamera());
    const e = document.getElementById("view-cube-container");
    e ? this.mainContentArea.appendChild(e) : console.warn("ViewCube element not found by ID 'view-cube-container'"), this.standardViewButtons = new Mx(this.sceneManager.getCamera());
    const t = document.getElementById("standard-view-buttons-container");
    if (t ? this.mainContentArea.appendChild(t) : console.warn("StandardViewButtons element not found by ID 'standard-view-buttons-container'"), this.gridAndAxes = new yx(this.sceneManager.getScene()), this.modelInfoPanel = new Sx(), this.modelInfoPanel.getElement) this.mainContentArea.appendChild(this.modelInfoPanel.getElement());
    else {
      console.warn("ModelInfoPanel does not have getElement method, attempting direct append.");
      try {
        this.mainContentArea.appendChild(this.modelInfoPanel);
      } catch (n) {
        console.error("Failed to append ModelInfoPanel", n);
      }
    }
    this.gui = new va({ autoPlace: false }), this.gui.domElement.style.position = "absolute", this.gui.domElement.style.bottom = "10px", this.gui.domElement.style.right = "10px", this.mainContentArea.appendChild(this.gui.domElement), this.setupGUI(), this.animate(), this.controlsManager.onVertexSelected = this.handleVertexSelection.bind(this), this.alignmentManager.onAlignmentComplete = () => {
      this.alignButton.disabled = true, this.clearSelectionButton.disabled = true;
    }, this.createUI(), this.sceneTreeViewer.buildTree(this.sceneManager.getLoadedModels()), window.addEventListener("resize", this.onWindowResize.bind(this)), this.onWindowResize();
  }
  setupGUI() {
    const e = this.gui.addFolder("\uBDF0 \uC124\uC815"), t = { showGrid: true, backgroundColor: "#f0f0f0" };
    e.add(t, "showGrid").onChange((n) => {
      this.gridAndAxes.setVisible(n);
    }), e.addColor(t, "backgroundColor").onChange((n) => {
      this.sceneManager.getScene().background = new Ee(n);
    }), e.open();
  }
  loadModel(e, t) {
    if (!e) {
      console.warn("\uBAA8\uB378 URL\uC774 \uC81C\uACF5\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.");
      return;
    }
    this.loadingIndicator.show();
    const n = { onLoad: (i) => {
      const r = e.split("/").pop() || `Model_${t}`;
      i.name = r, i.userData.type = "mainModel", this.models.set(t, i.uuid), this.sceneManager.addLoadedModel(i);
      const o = new tn().setFromObject(i), a = o.getCenter(new R()), l = o.getSize(new R()), c = Math.max(l.x, l.y, l.z);
      this.sceneManager.setViewportSize(c * 1.5), this.controlsManager.setTarget(a.x, a.y, a.z), this.modelInfoPanel.updateModelInfo(i, r), this.modelInfoPanel.show && this.modelInfoPanel.show(), this.currentlySelectedModelUUIDInTree = i.uuid, this.loadingIndicator.hide(), this.messageHandler.sendModelLoadedMessage(true), this.sceneTreeViewer.buildTree(this.sceneManager.getLoadedModels());
    }, onProgress: (i) => {
      this.loadingIndicator.updateProgress(i);
    }, onError: (i) => {
      console.error("\uBAA8\uB378 \uB85C\uB4DC \uC911 \uC624\uB958 \uBC1C\uC0DD:", i), this.loadingIndicator.showError("\uBAA8\uB378 \uB85C\uB4DC \uC2E4\uD328"), this.messageHandler.sendModelLoadedMessage(false, i instanceof Error ? i.message : String(i)), this.modelInfoPanel && this.modelInfoPanel.hide && this.modelInfoPanel.hide(), this.currentlySelectedModelUUIDInTree = null;
    } };
    gx.loadModel(e, n);
  }
  unloadModel(e) {
    const t = this.models.get(e);
    if (t) {
      const n = this.sceneManager.getScene().getObjectByProperty("uuid", t);
      n && (n.traverse((i) => {
        i instanceof ft && (i.geometry && i.geometry.dispose(), Array.isArray(i.material) ? i.material.forEach((r) => r.dispose()) : i.material && i.material.dispose());
      }), this.sceneManager.getScene().remove(n)), this.models.delete(e), this.messageHandler.sendModelUnloadedMessage(), this.sceneTreeViewer.buildTree(this.sceneManager.getLoadedModels()), this.currentlySelectedModelUUIDInTree === t && this.handleNodeSelection(null);
    }
  }
  handleVertexSelection(e) {
    e ? (console.log("Vertex selected in ModelViewer:", e), this.alignmentManager.updateSelection(e), !this.alignmentManager.getReferenceModel() && this.alignmentManager.getSelectedVertices().size === 1 && (this.alignmentManager.setReference(e), console.log("Reference model set in ModelViewer based on first selection")), this.updateAlignmentButtons()) : (console.log("Selection cleared notification in ModelViewer"), this.updateAlignmentButtons());
  }
  handleNodeSelection(e) {
    if (console.log("Node selected in tree:", e), this.currentlySelectedModelUUIDInTree = e, e) {
      const t = this.sceneManager.getScene().getObjectByProperty("uuid", e);
      if (t) {
        const n = t.name || `Model_${e.substring(0, 6)}`;
        this.modelInfoPanel.updateModelInfo(t, n), this.modelInfoPanel.show && this.modelInfoPanel.show();
      } else console.warn(`Selected model with UUID ${e} not found in scene.`), this.modelInfoPanel.hide && this.modelInfoPanel.hide();
    } else this.modelInfoPanel.hide && this.modelInfoPanel.hide();
  }
  handleNodeVisibilityChange(e, t) {
    console.log(`Node visibility change: UUID=${e}, Visible=${t}`);
    const n = this.sceneManager.getScene().getObjectByProperty("uuid", e);
    n ? n.visible = t : console.warn(`Model object with UUID ${e} not found for visibility change.`);
  }
  createUI() {
    const e = document.createElement("div");
    e.id = "controlsContainer", this.toggleSelectModeButton = document.createElement("button"), this.toggleSelectModeButton.textContent = "\uC815\uC810 \uC120\uD0DD \uC2DC\uC791", this.toggleSelectModeButton.onclick = () => {
      const t = this.controlsManager.getVertexSelectionMode();
      this.controlsManager.setVertexSelectionMode(!t), this.toggleSelectModeButton.textContent = t ? "\uC815\uC810 \uC120\uD0DD \uC2DC\uC791" : "\uC815\uC810 \uC120\uD0DD \uC885\uB8CC", t ? this.updateAlignmentButtons() : (this.alignButton.disabled = true, this.clearSelectionButton.disabled = true);
    }, e.appendChild(this.toggleSelectModeButton), this.clearSelectionButton = document.createElement("button"), this.clearSelectionButton.textContent = "\uC120\uD0DD \uCD08\uAE30\uD654", this.clearSelectionButton.disabled = true, this.clearSelectionButton.onclick = () => {
      this.alignmentManager.clear(), this.updateAlignmentButtons();
    }, e.appendChild(this.clearSelectionButton), this.alignButton = document.createElement("button"), this.alignButton.textContent = "\uBAA8\uB378 \uC815\uB82C", this.alignButton.disabled = true, this.alignButton.onclick = () => {
      if (this.controlsManager.getVertexSelectionMode()) {
        alert("\uBA3C\uC800 '\uC815\uC810 \uC120\uD0DD \uC885\uB8CC' \uBC84\uD2BC\uC744 \uB20C\uB7EC\uC8FC\uC138\uC694.");
        return;
      }
      this.alignmentManager.performAlignment();
    }, e.appendChild(this.alignButton), this.mainContentArea.appendChild(e);
  }
  updateAlignmentButtons() {
    const e = this.alignmentManager.canAlign(), t = this.alignmentManager.getSelectedVertices().size > 0, n = this.controlsManager.getVertexSelectionMode();
    this.alignButton.disabled = n || !e, this.clearSelectionButton.disabled = n || !t;
  }
  onWindowResize() {
    const e = this.mainContentArea.clientWidth, t = this.mainContentArea.clientHeight;
    this.sceneManager.onResize(e, t), this.viewCube && typeof this.viewCube.onResize == "function" && this.viewCube.onResize(e, t);
  }
  animate() {
    requestAnimationFrame(this.animate.bind(this)), this.controlsManager.update(), this.viewCube && this.viewCube.update(), this.sceneManager.render();
  }
}
window.addEventListener("DOMContentLoaded", () => {
  new Tx();
});
