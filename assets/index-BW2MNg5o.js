var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const r of i) if (r.type === "childList") for (const a of r.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
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
const lo = "174", Ni = { ROTATE: 0, DOLLY: 1, PAN: 2 }, Li = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, bh = 0, Ho = 1, Th = 2, Ec = 1, Ah = 2, En = 3, Cn = 0, Ot = 1, ln = 2, Vn = 0, Ui = 1, Vo = 2, Go = 3, Wo = 4, wh = 5, ri = 100, Rh = 101, Ch = 102, Ph = 103, Lh = 104, Dh = 200, Ih = 201, Nh = 202, Uh = 203, da = 204, fa = 205, Oh = 206, Fh = 207, Bh = 208, kh = 209, zh = 210, Hh = 211, Vh = 212, Gh = 213, Wh = 214, pa = 0, ma = 1, _a = 2, ki = 3, ga = 4, va = 5, xa = 6, ya = 7, bc = 0, Xh = 1, Yh = 2, Gn = 0, qh = 1, jh = 2, Kh = 3, $h = 4, Zh = 5, Jh = 6, Qh = 7, Xo = "attached", eu = "detached", Tc = 300, zi = 301, Hi = 302, Ma = 303, Sa = 304, Sr = 306, Vi = 1e3, zn = 1001, mr = 1002, Pt = 1003, Ac = 1004, fs = 1005, zt = 1006, lr = 1007, Tn = 1008, Pn = 1009, wc = 1010, Rc = 1011, Ss = 1012, co = 1013, ci = 1014, en = 1015, ws = 1016, ho = 1017, uo = 1018, Gi = 1020, Cc = 35902, Pc = 1021, Lc = 1022, Yt = 1023, Dc = 1024, Ic = 1025, Oi = 1026, Wi = 1027, fo = 1028, po = 1029, Nc = 1030, mo = 1031, _o = 1033, cr = 33776, hr = 33777, ur = 33778, dr = 33779, Ea = 35840, ba = 35841, Ta = 35842, Aa = 35843, wa = 36196, Ra = 37492, Ca = 37496, Pa = 37808, La = 37809, Da = 37810, Ia = 37811, Na = 37812, Ua = 37813, Oa = 37814, Fa = 37815, Ba = 37816, ka = 37817, za = 37818, Ha = 37819, Va = 37820, Ga = 37821, fr = 36492, Wa = 36494, Xa = 36495, Uc = 36283, Ya = 36284, qa = 36285, ja = 36286, Es = 2300, bs = 2301, Rr = 2302, Yo = 2400, qo = 2401, jo = 2402, tu = 2500, nu = 0, Oc = 1, Ka = 2, iu = 3200, su = 3201, go = 0, ru = 1, kn = "", St = "srgb", Dt = "srgb-linear", _r = "linear", tt = "srgb", pi = 7680, Ko = 519, au = 512, ou = 513, lu = 514, Fc = 515, cu = 516, hu = 517, uu = 518, du = 519, $a = 35044, $o = "300 es", An = 2e3, gr = 2001;
class ui {
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
      for (let r = 0, a = i.length; r < a; r++) i[r].call(this, e);
      e.target = null;
    }
  }
}
const bt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Zo = 1234567;
const _s = Math.PI / 180, Xi = 180 / Math.PI;
function tn() {
  const s3 = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (bt[s3 & 255] + bt[s3 >> 8 & 255] + bt[s3 >> 16 & 255] + bt[s3 >> 24 & 255] + "-" + bt[e & 255] + bt[e >> 8 & 255] + "-" + bt[e >> 16 & 15 | 64] + bt[e >> 24 & 255] + "-" + bt[t & 63 | 128] + bt[t >> 8 & 255] + "-" + bt[t >> 16 & 255] + bt[t >> 24 & 255] + bt[n & 255] + bt[n >> 8 & 255] + bt[n >> 16 & 255] + bt[n >> 24 & 255]).toLowerCase();
}
function Fe(s3, e, t) {
  return Math.max(e, Math.min(t, s3));
}
function vo(s3, e) {
  return (s3 % e + e) % e;
}
function fu(s3, e, t, n, i) {
  return n + (s3 - e) * (i - n) / (t - e);
}
function pu(s3, e, t) {
  return s3 !== e ? (t - s3) / (e - s3) : 0;
}
function gs(s3, e, t) {
  return (1 - t) * s3 + t * e;
}
function mu(s3, e, t, n) {
  return gs(s3, e, 1 - Math.exp(-t * n));
}
function _u(s3, e = 1) {
  return e - Math.abs(vo(s3, e * 2) - e);
}
function gu(s3, e, t) {
  return s3 <= e ? 0 : s3 >= t ? 1 : (s3 = (s3 - e) / (t - e), s3 * s3 * (3 - 2 * s3));
}
function vu(s3, e, t) {
  return s3 <= e ? 0 : s3 >= t ? 1 : (s3 = (s3 - e) / (t - e), s3 * s3 * s3 * (s3 * (s3 * 6 - 15) + 10));
}
function xu(s3, e) {
  return s3 + Math.floor(Math.random() * (e - s3 + 1));
}
function yu(s3, e) {
  return s3 + Math.random() * (e - s3);
}
function Mu(s3) {
  return s3 * (0.5 - Math.random());
}
function Su(s3) {
  s3 !== void 0 && (Zo = s3);
  let e = Zo += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Eu(s3) {
  return s3 * _s;
}
function bu(s3) {
  return s3 * Xi;
}
function Tu(s3) {
  return (s3 & s3 - 1) === 0 && s3 !== 0;
}
function Au(s3) {
  return Math.pow(2, Math.ceil(Math.log(s3) / Math.LN2));
}
function wu(s3) {
  return Math.pow(2, Math.floor(Math.log(s3) / Math.LN2));
}
function Ru(s3, e, t, n, i) {
  const r = Math.cos, a = Math.sin, o = r(t / 2), l = a(t / 2), c = r((e + n) / 2), h = a((e + n) / 2), u = r((e - n) / 2), d = a((e - n) / 2), p = r((n - e) / 2), _ = a((n - e) / 2);
  switch (i) {
    case "XYX":
      s3.set(o * h, l * u, l * d, o * c);
      break;
    case "YZY":
      s3.set(l * d, o * h, l * u, o * c);
      break;
    case "ZXZ":
      s3.set(l * u, l * d, o * h, o * c);
      break;
    case "XZX":
      s3.set(o * h, l * _, l * p, o * c);
      break;
    case "YXY":
      s3.set(l * p, o * h, l * _, o * c);
      break;
    case "ZYZ":
      s3.set(l * _, l * p, o * h, o * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function Jt(s3, e) {
  switch (e.constructor) {
    case Float32Array:
      return s3;
    case Uint32Array:
      return s3 / 4294967295;
    case Uint16Array:
      return s3 / 65535;
    case Uint8Array:
      return s3 / 255;
    case Int32Array:
      return Math.max(s3 / 2147483647, -1);
    case Int16Array:
      return Math.max(s3 / 32767, -1);
    case Int8Array:
      return Math.max(s3 / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Qe(s3, e) {
  switch (e.constructor) {
    case Float32Array:
      return s3;
    case Uint32Array:
      return Math.round(s3 * 4294967295);
    case Uint16Array:
      return Math.round(s3 * 65535);
    case Uint8Array:
      return Math.round(s3 * 255);
    case Int32Array:
      return Math.round(s3 * 2147483647);
    case Int16Array:
      return Math.round(s3 * 32767);
    case Int8Array:
      return Math.round(s3 * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Bc = { DEG2RAD: _s, RAD2DEG: Xi, generateUUID: tn, clamp: Fe, euclideanModulo: vo, mapLinear: fu, inverseLerp: pu, lerp: gs, damp: mu, pingpong: _u, smoothstep: gu, smootherstep: vu, randInt: xu, randFloat: yu, randFloatSpread: Mu, seededRandom: Su, degToRad: Eu, radToDeg: bu, isPowerOfTwo: Tu, ceilPowerOfTwo: Au, floorPowerOfTwo: wu, setQuaternionFromProperEuler: Ru, normalize: Qe, denormalize: Jt };
class we {
  constructor(e = 0, t = 0) {
    we.prototype.isVector2 = true, this.x = e, this.y = t;
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
    return this.x = Fe(this.x, e.x, t.x), this.y = Fe(this.y, e.y, t.y), this;
  }
  clampScalar(e, t) {
    return this.x = Fe(this.x, e, t), this.y = Fe(this.y, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Fe(n, e, t));
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
    return Math.acos(Fe(n, -1, 1));
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
    const n = Math.cos(t), i = Math.sin(t), r = this.x - e.x, a = this.y - e.y;
    return this.x = r * n - a * i + e.x, this.y = r * i + a * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ie {
  constructor(e, t, n, i, r, a, o, l, c) {
    Ie.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, i, r, a, o, l, c);
  }
  set(e, t, n, i, r, a, o, l, c) {
    const h = this.elements;
    return h[0] = e, h[1] = i, h[2] = o, h[3] = t, h[4] = r, h[5] = l, h[6] = n, h[7] = a, h[8] = c, this;
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
    const n = e.elements, i = t.elements, r = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], h = n[4], u = n[7], d = n[2], p = n[5], _ = n[8], g = i[0], m = i[3], f = i[6], T = i[1], b = i[4], M = i[7], L = i[2], R = i[5], A = i[8];
    return r[0] = a * g + o * T + l * L, r[3] = a * m + o * b + l * R, r[6] = a * f + o * M + l * A, r[1] = c * g + h * T + u * L, r[4] = c * m + h * b + u * R, r[7] = c * f + h * M + u * A, r[2] = d * g + p * T + _ * L, r[5] = d * m + p * b + _ * R, r[8] = d * f + p * M + _ * A, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8];
    return t * a * h - t * o * c - n * r * h + n * o * l + i * r * c - i * a * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], u = h * a - o * c, d = o * l - h * r, p = c * r - a * l, _ = t * u + n * d + i * p;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const g = 1 / _;
    return e[0] = u * g, e[1] = (i * c - h * n) * g, e[2] = (o * n - i * a) * g, e[3] = d * g, e[4] = (h * t - i * l) * g, e[5] = (i * r - o * t) * g, e[6] = p * g, e[7] = (n * l - c * t) * g, e[8] = (a * t - n * r) * g, this;
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
  setUvTransform(e, t, n, i, r, a, o) {
    const l = Math.cos(r), c = Math.sin(r);
    return this.set(n * l, n * c, -n * (l * a + c * o) + a + e, -i * c, i * l, -i * (-c * a + l * o) + o + t, 0, 0, 1), this;
  }
  scale(e, t) {
    return this.premultiply(Cr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Cr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Cr.makeTranslation(e, t)), this;
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
const Cr = new Ie();
function kc(s3) {
  for (let e = s3.length - 1; e >= 0; --e) if (s3[e] >= 65535) return true;
  return false;
}
function Ts(s3) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s3);
}
function Cu() {
  const s3 = Ts("canvas");
  return s3.style.display = "block", s3;
}
const Jo = {};
function ii(s3) {
  s3 in Jo || (Jo[s3] = true, console.warn(s3));
}
function Pu(s3, e, t) {
  return new Promise(function(n, i) {
    function r() {
      switch (s3.clientWaitSync(e, s3.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case s3.WAIT_FAILED:
          i();
          break;
        case s3.TIMEOUT_EXPIRED:
          setTimeout(r, t);
          break;
        default:
          n();
      }
    }
    setTimeout(r, t);
  });
}
function Lu(s3) {
  const e = s3.elements;
  e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
}
function Du(s3) {
  const e = s3.elements;
  e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
}
const Qo = new Ie().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), el = new Ie().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function Iu() {
  const s3 = { enabled: true, workingColorSpace: Dt, spaces: {}, convert: function(i, r, a) {
    return this.enabled === false || r === a || !r || !a || (this.spaces[r].transfer === tt && (i.r = wn(i.r), i.g = wn(i.g), i.b = wn(i.b)), this.spaces[r].primaries !== this.spaces[a].primaries && (i.applyMatrix3(this.spaces[r].toXYZ), i.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === tt && (i.r = Fi(i.r), i.g = Fi(i.g), i.b = Fi(i.b))), i;
  }, fromWorkingColorSpace: function(i, r) {
    return this.convert(i, this.workingColorSpace, r);
  }, toWorkingColorSpace: function(i, r) {
    return this.convert(i, r, this.workingColorSpace);
  }, getPrimaries: function(i) {
    return this.spaces[i].primaries;
  }, getTransfer: function(i) {
    return i === kn ? _r : this.spaces[i].transfer;
  }, getLuminanceCoefficients: function(i, r = this.workingColorSpace) {
    return i.fromArray(this.spaces[r].luminanceCoefficients);
  }, define: function(i) {
    Object.assign(this.spaces, i);
  }, _getMatrix: function(i, r, a) {
    return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ);
  }, _getDrawingBufferColorSpace: function(i) {
    return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace;
  }, _getUnpackColorSpace: function(i = this.workingColorSpace) {
    return this.spaces[i].workingColorSpaceConfig.unpackColorSpace;
  } }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return s3.define({ [Dt]: { primaries: e, whitePoint: n, transfer: _r, toXYZ: Qo, fromXYZ: el, luminanceCoefficients: t, workingColorSpaceConfig: { unpackColorSpace: St }, outputColorSpaceConfig: { drawingBufferColorSpace: St } }, [St]: { primaries: e, whitePoint: n, transfer: tt, toXYZ: Qo, fromXYZ: el, luminanceCoefficients: t, outputColorSpaceConfig: { drawingBufferColorSpace: St } } }), s3;
}
const We = Iu();
function wn(s3) {
  return s3 < 0.04045 ? s3 * 0.0773993808 : Math.pow(s3 * 0.9478672986 + 0.0521327014, 2.4);
}
function Fi(s3) {
  return s3 < 31308e-7 ? s3 * 12.92 : 1.055 * Math.pow(s3, 0.41666) - 0.055;
}
let mi;
class Nu {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      mi === void 0 && (mi = Ts("canvas")), mi.width = e.width, mi.height = e.height;
      const n = mi.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = mi;
    }
    return t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Ts("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), r = i.data;
      for (let a = 0; a < r.length; a++) r[a] = wn(r[a] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(wn(t[n] / 255) * 255) : t[n] = wn(t[n]);
      return { data: t, width: e.width, height: e.height };
    } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Uu = 0;
class xo {
  constructor(e = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: Uu++ }), this.uuid = tn(), this.data = e, this.dataReady = true, this.version = 0;
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
        for (let a = 0, o = i.length; a < o; a++) i[a].isDataTexture ? r.push(Pr(i[a].image)) : r.push(Pr(i[a]));
      } else r = Pr(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Pr(s3) {
  return typeof HTMLImageElement < "u" && s3 instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s3 instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && s3 instanceof ImageBitmap ? Nu.getDataURL(s3) : s3.data ? { data: Array.from(s3.data), width: s3.width, height: s3.height, type: s3.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Ou = 0;
class xt extends ui {
  constructor(e = xt.DEFAULT_IMAGE, t = xt.DEFAULT_MAPPING, n = zn, i = zn, r = zt, a = Tn, o = Yt, l = Pn, c = xt.DEFAULT_ANISOTROPY, h = kn) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: Ou++ }), this.uuid = tn(), this.name = "", this.source = new xo(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new we(0, 0), this.repeat = new we(1, 1), this.center = new we(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Ie(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.pmremVersion = 0;
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
    if (this.mapping !== Tc) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
      case Vi:
        e.x = e.x - Math.floor(e.x);
        break;
      case zn:
        e.x = e.x < 0 ? 0 : 1;
        break;
      case mr:
        Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
        break;
    }
    if (e.y < 0 || e.y > 1) switch (this.wrapT) {
      case Vi:
        e.y = e.y - Math.floor(e.y);
        break;
      case zn:
        e.y = e.y < 0 ? 0 : 1;
        break;
      case mr:
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
xt.DEFAULT_IMAGE = null;
xt.DEFAULT_MAPPING = Tc;
xt.DEFAULT_ANISOTROPY = 1;
class Ke {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    Ke.prototype.isVector4 = true, this.x = e, this.y = t, this.z = n, this.w = i;
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
    const t = this.x, n = this.y, i = this.z, r = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * r, this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * r, this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * r, this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * r, this;
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
    const l = e.elements, c = l[0], h = l[4], u = l[8], d = l[1], p = l[5], _ = l[9], g = l[2], m = l[6], f = l[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(u - g) < 0.01 && Math.abs(_ - m) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(u + g) < 0.1 && Math.abs(_ + m) < 0.1 && Math.abs(c + p + f - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const b = (c + 1) / 2, M = (p + 1) / 2, L = (f + 1) / 2, R = (h + d) / 4, A = (u + g) / 4, U = (_ + m) / 4;
      return b > M && b > L ? b < 0.01 ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(b), i = R / n, r = A / n) : M > L ? M < 0.01 ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(M), n = R / i, r = U / i) : L < 0.01 ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(L), n = A / r, i = U / r), this.set(n, i, r, t), this;
    }
    let T = Math.sqrt((m - _) * (m - _) + (u - g) * (u - g) + (d - h) * (d - h));
    return Math.abs(T) < 1e-3 && (T = 1), this.x = (m - _) / T, this.y = (u - g) / T, this.z = (d - h) / T, this.w = Math.acos((c + p + f - 1) / 2), this;
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
    return this.x = Fe(this.x, e.x, t.x), this.y = Fe(this.y, e.y, t.y), this.z = Fe(this.z, e.z, t.z), this.w = Fe(this.w, e.w, t.w), this;
  }
  clampScalar(e, t) {
    return this.x = Fe(this.x, e, t), this.y = Fe(this.y, e, t), this.z = Fe(this.z, e, t), this.w = Fe(this.w, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Fe(n, e, t));
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
class Fu extends ui {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = true, this.width = e, this.height = t, this.depth = 1, this.scissor = new Ke(0, 0, e, t), this.scissorTest = false, this.viewport = new Ke(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    n = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: zt, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1 }, n);
    const r = new xt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    r.flipY = false, r.generateMipmaps = n.generateMipmaps, r.internalFormat = n.internalFormat, this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++) this.textures[o] = r.clone(), this.textures[o].isRenderTargetTexture = true, this.textures[o].renderTarget = this;
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
      this.textures[t].source = new xo(i);
    }
    return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class hi extends Fu {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = true;
  }
}
class zc extends xt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = Pt, this.minFilter = Pt, this.wrapR = zn, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Bu extends xt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = Pt, this.minFilter = Pt, this.wrapR = zn, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class cn {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = true, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, r, a, o) {
    let l = n[i + 0], c = n[i + 1], h = n[i + 2], u = n[i + 3];
    const d = r[a + 0], p = r[a + 1], _ = r[a + 2], g = r[a + 3];
    if (o === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
      return;
    }
    if (o === 1) {
      e[t + 0] = d, e[t + 1] = p, e[t + 2] = _, e[t + 3] = g;
      return;
    }
    if (u !== g || l !== d || c !== p || h !== _) {
      let m = 1 - o;
      const f = l * d + c * p + h * _ + u * g, T = f >= 0 ? 1 : -1, b = 1 - f * f;
      if (b > Number.EPSILON) {
        const L = Math.sqrt(b), R = Math.atan2(L, f * T);
        m = Math.sin(m * R) / L, o = Math.sin(o * R) / L;
      }
      const M = o * T;
      if (l = l * m + d * M, c = c * m + p * M, h = h * m + _ * M, u = u * m + g * M, m === 1 - o) {
        const L = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
        l *= L, c *= L, h *= L, u *= L;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, a) {
    const o = n[i], l = n[i + 1], c = n[i + 2], h = n[i + 3], u = r[a], d = r[a + 1], p = r[a + 2], _ = r[a + 3];
    return e[t] = o * _ + h * u + l * p - c * d, e[t + 1] = l * _ + h * d + c * u - o * p, e[t + 2] = c * _ + h * p + o * d - l * u, e[t + 3] = h * _ - o * u - l * d - c * p, e;
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
    const n = e._x, i = e._y, r = e._z, a = e._order, o = Math.cos, l = Math.sin, c = o(n / 2), h = o(i / 2), u = o(r / 2), d = l(n / 2), p = l(i / 2), _ = l(r / 2);
    switch (a) {
      case "XYZ":
        this._x = d * h * u + c * p * _, this._y = c * p * u - d * h * _, this._z = c * h * _ + d * p * u, this._w = c * h * u - d * p * _;
        break;
      case "YXZ":
        this._x = d * h * u + c * p * _, this._y = c * p * u - d * h * _, this._z = c * h * _ - d * p * u, this._w = c * h * u + d * p * _;
        break;
      case "ZXY":
        this._x = d * h * u - c * p * _, this._y = c * p * u + d * h * _, this._z = c * h * _ + d * p * u, this._w = c * h * u - d * p * _;
        break;
      case "ZYX":
        this._x = d * h * u - c * p * _, this._y = c * p * u + d * h * _, this._z = c * h * _ - d * p * u, this._w = c * h * u + d * p * _;
        break;
      case "YZX":
        this._x = d * h * u + c * p * _, this._y = c * p * u + d * h * _, this._z = c * h * _ - d * p * u, this._w = c * h * u - d * p * _;
        break;
      case "XZY":
        this._x = d * h * u - c * p * _, this._y = c * p * u - d * h * _, this._z = c * h * _ + d * p * u, this._w = c * h * u + d * p * _;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === true && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], r = t[8], a = t[1], o = t[5], l = t[9], c = t[2], h = t[6], u = t[10], d = n + o + u;
    if (d > 0) {
      const p = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / p, this._x = (h - l) * p, this._y = (r - c) * p, this._z = (a - i) * p;
    } else if (n > o && n > u) {
      const p = 2 * Math.sqrt(1 + n - o - u);
      this._w = (h - l) / p, this._x = 0.25 * p, this._y = (i + a) / p, this._z = (r + c) / p;
    } else if (o > u) {
      const p = 2 * Math.sqrt(1 + o - n - u);
      this._w = (r - c) / p, this._x = (i + a) / p, this._y = 0.25 * p, this._z = (l + h) / p;
    } else {
      const p = 2 * Math.sqrt(1 + u - n - o);
      this._w = (a - i) / p, this._x = (r + c) / p, this._y = (l + h) / p, this._z = 0.25 * p;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Fe(this.dot(e), -1, 1)));
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
    const n = e._x, i = e._y, r = e._z, a = e._w, o = t._x, l = t._y, c = t._z, h = t._w;
    return this._x = n * h + a * o + i * c - r * l, this._y = i * h + a * l + r * o - n * c, this._z = r * h + a * c + n * l - i * o, this._w = a * h - n * o - i * l - r * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, i = this._y, r = this._z, a = this._w;
    let o = a * e._w + n * e._x + i * e._y + r * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1) return this._w = a, this._x = n, this._y = i, this._z = r, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const p = 1 - t;
      return this._w = p * a + t * this._w, this._x = p * n + t * this._x, this._y = p * i + t * this._y, this._z = p * r + t * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, o), u = Math.sin((1 - t) * h) / c, d = Math.sin(t * h) / c;
    return this._w = a * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = r * u + this._z * d, this._onChangeCallback(), this;
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
class P {
  constructor(e = 0, t = 0, n = 0) {
    P.prototype.isVector3 = true, this.x = e, this.y = t, this.z = n;
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
    return this.applyQuaternion(tl.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(tl.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements, a = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
    return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * a, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * a, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * a, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, r = e.x, a = e.y, o = e.z, l = e.w, c = 2 * (a * i - o * n), h = 2 * (o * t - r * i), u = 2 * (r * n - a * t);
    return this.x = t + l * c + a * u - o * h, this.y = n + l * h + o * c - r * u, this.z = i + l * u + r * h - a * c, this;
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
    return this.x = Fe(this.x, e.x, t.x), this.y = Fe(this.y, e.y, t.y), this.z = Fe(this.z, e.z, t.z), this;
  }
  clampScalar(e, t) {
    return this.x = Fe(this.x, e, t), this.y = Fe(this.y, e, t), this.z = Fe(this.z, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Fe(n, e, t));
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
    const n = e.x, i = e.y, r = e.z, a = t.x, o = t.y, l = t.z;
    return this.x = i * l - r * o, this.y = r * a - n * l, this.z = n * o - i * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Lr.copy(this).projectOnVector(e), this.sub(Lr);
  }
  reflect(e) {
    return this.sub(Lr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Fe(n, -1, 1));
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
const Lr = new P(), tl = new cn();
class un {
  constructor(e = new P(1 / 0, 1 / 0, 1 / 0), t = new P(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(Kt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(Kt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Kt.copy(t).multiplyScalar(0.5);
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
      if (t === true && r !== void 0 && e.isInstancedMesh !== true) for (let a = 0, o = r.count; a < o; a++) e.isMesh === true ? e.getVertexPosition(a, Kt) : Kt.fromBufferAttribute(r, a), Kt.applyMatrix4(e.matrixWorld), this.expandByPoint(Kt);
      else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Ds.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Ds.copy(n.boundingBox)), Ds.applyMatrix4(e.matrixWorld), this.union(Ds);
    }
    const i = e.children;
    for (let r = 0, a = i.length; r < a; r++) this.expandByObject(i[r], t);
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
    return this.clampPoint(e.center, Kt), Kt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return false;
    this.getCenter(ns), Is.subVectors(this.max, ns), _i.subVectors(e.a, ns), gi.subVectors(e.b, ns), vi.subVectors(e.c, ns), Ln.subVectors(gi, _i), Dn.subVectors(vi, gi), $n.subVectors(_i, vi);
    let t = [0, -Ln.z, Ln.y, 0, -Dn.z, Dn.y, 0, -$n.z, $n.y, Ln.z, 0, -Ln.x, Dn.z, 0, -Dn.x, $n.z, 0, -$n.x, -Ln.y, Ln.x, 0, -Dn.y, Dn.x, 0, -$n.y, $n.x, 0];
    return !Dr(t, _i, gi, vi, Is) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Dr(t, _i, gi, vi, Is)) ? false : (Ns.crossVectors(Ln, Dn), t = [Ns.x, Ns.y, Ns.z], Dr(t, _i, gi, vi, Is));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Kt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Kt).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (gn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), gn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), gn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), gn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), gn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), gn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), gn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), gn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(gn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const gn = [new P(), new P(), new P(), new P(), new P(), new P(), new P(), new P()], Kt = new P(), Ds = new un(), _i = new P(), gi = new P(), vi = new P(), Ln = new P(), Dn = new P(), $n = new P(), ns = new P(), Is = new P(), Ns = new P(), Zn = new P();
function Dr(s3, e, t, n, i) {
  for (let r = 0, a = s3.length - 3; r <= a; r += 3) {
    Zn.fromArray(s3, r);
    const o = i.x * Math.abs(Zn.x) + i.y * Math.abs(Zn.y) + i.z * Math.abs(Zn.z), l = e.dot(Zn), c = t.dot(Zn), h = n.dot(Zn);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o) return false;
  }
  return true;
}
const ku = new un(), is = new P(), Ir = new P();
class dn {
  constructor(e = new P(), t = -1) {
    this.isSphere = true, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : ku.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let r = 0, a = e.length; r < a; r++) i = Math.max(i, n.distanceToSquared(e[r]));
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
    is.subVectors(e, this.center);
    const t = is.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(is, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === true ? this.radius = Math.max(this.radius, e.radius) : (Ir.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(is.copy(e.center).add(Ir)), this.expandByPoint(is.copy(e.center).sub(Ir))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const vn = new P(), Nr = new P(), Us = new P(), In = new P(), Ur = new P(), Os = new P(), Or = new P();
class Rs {
  constructor(e = new P(), t = new P(0, 0, -1)) {
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
    return this.origin.copy(this.at(e, vn)), this;
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
    const t = vn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (vn.copy(this.origin).addScaledVector(this.direction, t), vn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    Nr.copy(e).add(t).multiplyScalar(0.5), Us.copy(t).sub(e).normalize(), In.copy(this.origin).sub(Nr);
    const r = e.distanceTo(t) * 0.5, a = -this.direction.dot(Us), o = In.dot(this.direction), l = -In.dot(Us), c = In.lengthSq(), h = Math.abs(1 - a * a);
    let u, d, p, _;
    if (h > 0) if (u = a * l - o, d = a * o - l, _ = r * h, u >= 0) if (d >= -_) if (d <= _) {
      const g = 1 / h;
      u *= g, d *= g, p = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * l) + c;
    } else d = r, u = Math.max(0, -(a * d + o)), p = -u * u + d * (d + 2 * l) + c;
    else d = -r, u = Math.max(0, -(a * d + o)), p = -u * u + d * (d + 2 * l) + c;
    else d <= -_ ? (u = Math.max(0, -(-a * r + o)), d = u > 0 ? -r : Math.min(Math.max(-r, -l), r), p = -u * u + d * (d + 2 * l) + c) : d <= _ ? (u = 0, d = Math.min(Math.max(-r, -l), r), p = d * (d + 2 * l) + c) : (u = Math.max(0, -(a * r + o)), d = u > 0 ? r : Math.min(Math.max(-r, -l), r), p = -u * u + d * (d + 2 * l) + c);
    else d = a > 0 ? -r : r, u = Math.max(0, -(a * d + o)), p = -u * u + d * (d + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(Nr).addScaledVector(Us, d), p;
  }
  intersectSphere(e, t) {
    vn.subVectors(e.center, this.origin);
    const n = vn.dot(this.direction), i = vn.dot(vn) - n * n, r = e.radius * e.radius;
    if (i > r) return null;
    const a = Math.sqrt(r - i), o = n - a, l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
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
    let n, i, r, a, o, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return c >= 0 ? (n = (e.min.x - d.x) * c, i = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, i = (e.min.x - d.x) * c), h >= 0 ? (r = (e.min.y - d.y) * h, a = (e.max.y - d.y) * h) : (r = (e.max.y - d.y) * h, a = (e.min.y - d.y) * h), n > a || r > i || ((r > n || isNaN(n)) && (n = r), (a < i || isNaN(i)) && (i = a), u >= 0 ? (o = (e.min.z - d.z) * u, l = (e.max.z - d.z) * u) : (o = (e.max.z - d.z) * u, l = (e.min.z - d.z) * u), n > l || o > i) || ((o > n || n !== n) && (n = o), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, vn) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    Ur.subVectors(t, e), Os.subVectors(n, e), Or.crossVectors(Ur, Os);
    let a = this.direction.dot(Or), o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0) o = -1, a = -a;
    else return null;
    In.subVectors(this.origin, e);
    const l = o * this.direction.dot(Os.crossVectors(In, Os));
    if (l < 0) return null;
    const c = o * this.direction.dot(Ur.cross(In));
    if (c < 0 || l + c > a) return null;
    const h = -o * In.dot(Or);
    return h < 0 ? null : this.at(h / a, r);
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
class Ne {
  constructor(e, t, n, i, r, a, o, l, c, h, u, d, p, _, g, m) {
    Ne.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, i, r, a, o, l, c, h, u, d, p, _, g, m);
  }
  set(e, t, n, i, r, a, o, l, c, h, u, d, p, _, g, m) {
    const f = this.elements;
    return f[0] = e, f[4] = t, f[8] = n, f[12] = i, f[1] = r, f[5] = a, f[9] = o, f[13] = l, f[2] = c, f[6] = h, f[10] = u, f[14] = d, f[3] = p, f[7] = _, f[11] = g, f[15] = m, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Ne().fromArray(this.elements);
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
    const t = this.elements, n = e.elements, i = 1 / xi.setFromMatrixColumn(e, 0).length(), r = 1 / xi.setFromMatrixColumn(e, 1).length(), a = 1 / xi.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(i), c = Math.sin(i), h = Math.cos(r), u = Math.sin(r);
    if (e.order === "XYZ") {
      const d = a * h, p = a * u, _ = o * h, g = o * u;
      t[0] = l * h, t[4] = -l * u, t[8] = c, t[1] = p + _ * c, t[5] = d - g * c, t[9] = -o * l, t[2] = g - d * c, t[6] = _ + p * c, t[10] = a * l;
    } else if (e.order === "YXZ") {
      const d = l * h, p = l * u, _ = c * h, g = c * u;
      t[0] = d + g * o, t[4] = _ * o - p, t[8] = a * c, t[1] = a * u, t[5] = a * h, t[9] = -o, t[2] = p * o - _, t[6] = g + d * o, t[10] = a * l;
    } else if (e.order === "ZXY") {
      const d = l * h, p = l * u, _ = c * h, g = c * u;
      t[0] = d - g * o, t[4] = -a * u, t[8] = _ + p * o, t[1] = p + _ * o, t[5] = a * h, t[9] = g - d * o, t[2] = -a * c, t[6] = o, t[10] = a * l;
    } else if (e.order === "ZYX") {
      const d = a * h, p = a * u, _ = o * h, g = o * u;
      t[0] = l * h, t[4] = _ * c - p, t[8] = d * c + g, t[1] = l * u, t[5] = g * c + d, t[9] = p * c - _, t[2] = -c, t[6] = o * l, t[10] = a * l;
    } else if (e.order === "YZX") {
      const d = a * l, p = a * c, _ = o * l, g = o * c;
      t[0] = l * h, t[4] = g - d * u, t[8] = _ * u + p, t[1] = u, t[5] = a * h, t[9] = -o * h, t[2] = -c * h, t[6] = p * u + _, t[10] = d - g * u;
    } else if (e.order === "XZY") {
      const d = a * l, p = a * c, _ = o * l, g = o * c;
      t[0] = l * h, t[4] = -u, t[8] = c * h, t[1] = d * u + g, t[5] = a * h, t[9] = p * u - _, t[2] = _ * u - p, t[6] = o * h, t[10] = g * u + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(zu, e, Hu);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return Bt.subVectors(e, t), Bt.lengthSq() === 0 && (Bt.z = 1), Bt.normalize(), Nn.crossVectors(n, Bt), Nn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Bt.x += 1e-4 : Bt.z += 1e-4, Bt.normalize(), Nn.crossVectors(n, Bt)), Nn.normalize(), Fs.crossVectors(Bt, Nn), i[0] = Nn.x, i[4] = Fs.x, i[8] = Bt.x, i[1] = Nn.y, i[5] = Fs.y, i[9] = Bt.y, i[2] = Nn.z, i[6] = Fs.z, i[10] = Bt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], h = n[1], u = n[5], d = n[9], p = n[13], _ = n[2], g = n[6], m = n[10], f = n[14], T = n[3], b = n[7], M = n[11], L = n[15], R = i[0], A = i[4], U = i[8], S = i[12], y = i[1], C = i[5], W = i[9], z = i[13], $ = i[2], Z = i[6], q = i[10], Q = i[14], V = i[3], ae = i[7], de = i[11], ye = i[15];
    return r[0] = a * R + o * y + l * $ + c * V, r[4] = a * A + o * C + l * Z + c * ae, r[8] = a * U + o * W + l * q + c * de, r[12] = a * S + o * z + l * Q + c * ye, r[1] = h * R + u * y + d * $ + p * V, r[5] = h * A + u * C + d * Z + p * ae, r[9] = h * U + u * W + d * q + p * de, r[13] = h * S + u * z + d * Q + p * ye, r[2] = _ * R + g * y + m * $ + f * V, r[6] = _ * A + g * C + m * Z + f * ae, r[10] = _ * U + g * W + m * q + f * de, r[14] = _ * S + g * z + m * Q + f * ye, r[3] = T * R + b * y + M * $ + L * V, r[7] = T * A + b * C + M * Z + L * ae, r[11] = T * U + b * W + M * q + L * de, r[15] = T * S + b * z + M * Q + L * ye, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], r = e[12], a = e[1], o = e[5], l = e[9], c = e[13], h = e[2], u = e[6], d = e[10], p = e[14], _ = e[3], g = e[7], m = e[11], f = e[15];
    return _ * (+r * l * u - i * c * u - r * o * d + n * c * d + i * o * p - n * l * p) + g * (+t * l * p - t * c * d + r * a * d - i * a * p + i * c * h - r * l * h) + m * (+t * c * u - t * o * p - r * a * u + n * a * p + r * o * h - n * c * h) + f * (-i * o * h - t * l * u + t * o * d + i * a * u - n * a * d + n * l * h);
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
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], u = e[9], d = e[10], p = e[11], _ = e[12], g = e[13], m = e[14], f = e[15], T = u * m * c - g * d * c + g * l * p - o * m * p - u * l * f + o * d * f, b = _ * d * c - h * m * c - _ * l * p + a * m * p + h * l * f - a * d * f, M = h * g * c - _ * u * c + _ * o * p - a * g * p - h * o * f + a * u * f, L = _ * u * l - h * g * l - _ * o * d + a * g * d + h * o * m - a * u * m, R = t * T + n * b + i * M + r * L;
    if (R === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const A = 1 / R;
    return e[0] = T * A, e[1] = (g * d * r - u * m * r - g * i * p + n * m * p + u * i * f - n * d * f) * A, e[2] = (o * m * r - g * l * r + g * i * c - n * m * c - o * i * f + n * l * f) * A, e[3] = (u * l * r - o * d * r - u * i * c + n * d * c + o * i * p - n * l * p) * A, e[4] = b * A, e[5] = (h * m * r - _ * d * r + _ * i * p - t * m * p - h * i * f + t * d * f) * A, e[6] = (_ * l * r - a * m * r - _ * i * c + t * m * c + a * i * f - t * l * f) * A, e[7] = (a * d * r - h * l * r + h * i * c - t * d * c - a * i * p + t * l * p) * A, e[8] = M * A, e[9] = (_ * u * r - h * g * r - _ * n * p + t * g * p + h * n * f - t * u * f) * A, e[10] = (a * g * r - _ * o * r + _ * n * c - t * g * c - a * n * f + t * o * f) * A, e[11] = (h * o * r - a * u * r - h * n * c + t * u * c + a * n * p - t * o * p) * A, e[12] = L * A, e[13] = (h * g * i - _ * u * i + _ * n * d - t * g * d - h * n * m + t * u * m) * A, e[14] = (_ * o * i - a * g * i - _ * n * l + t * g * l + a * n * m - t * o * m) * A, e[15] = (a * u * i - h * o * i + h * n * l - t * u * l - a * n * d + t * o * d) * A, this;
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
    const n = Math.cos(t), i = Math.sin(t), r = 1 - n, a = e.x, o = e.y, l = e.z, c = r * a, h = r * o;
    return this.set(c * a + n, c * o - i * l, c * l + i * o, 0, c * o + i * l, h * o + n, h * l - i * a, 0, c * l - i * o, h * l + i * a, r * l * l + n, 0, 0, 0, 0, 1), this;
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, i, r, a) {
    return this.set(1, n, r, 0, e, 1, a, 0, t, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const i = this.elements, r = t._x, a = t._y, o = t._z, l = t._w, c = r + r, h = a + a, u = o + o, d = r * c, p = r * h, _ = r * u, g = a * h, m = a * u, f = o * u, T = l * c, b = l * h, M = l * u, L = n.x, R = n.y, A = n.z;
    return i[0] = (1 - (g + f)) * L, i[1] = (p + M) * L, i[2] = (_ - b) * L, i[3] = 0, i[4] = (p - M) * R, i[5] = (1 - (d + f)) * R, i[6] = (m + T) * R, i[7] = 0, i[8] = (_ + b) * A, i[9] = (m - T) * A, i[10] = (1 - (d + g)) * A, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = xi.set(i[0], i[1], i[2]).length();
    const a = xi.set(i[4], i[5], i[6]).length(), o = xi.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], $t.copy(this);
    const c = 1 / r, h = 1 / a, u = 1 / o;
    return $t.elements[0] *= c, $t.elements[1] *= c, $t.elements[2] *= c, $t.elements[4] *= h, $t.elements[5] *= h, $t.elements[6] *= h, $t.elements[8] *= u, $t.elements[9] *= u, $t.elements[10] *= u, t.setFromRotationMatrix($t), n.x = r, n.y = a, n.z = o, this;
  }
  makePerspective(e, t, n, i, r, a, o = An) {
    const l = this.elements, c = 2 * r / (t - e), h = 2 * r / (n - i), u = (t + e) / (t - e), d = (n + i) / (n - i);
    let p, _;
    if (o === An) p = -(a + r) / (a - r), _ = -2 * a * r / (a - r);
    else if (o === gr) p = -a / (a - r), _ = -a * r / (a - r);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = c, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = h, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = p, l[14] = _, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, r, a, o = An) {
    const l = this.elements, c = 1 / (t - e), h = 1 / (n - i), u = 1 / (a - r), d = (t + e) * c, p = (n + i) * h;
    let _, g;
    if (o === An) _ = (a + r) * u, g = -2 * u;
    else if (o === gr) _ = r * u, g = -1 * u;
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -d, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[13] = -p, l[2] = 0, l[6] = 0, l[10] = g, l[14] = -_, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
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
const xi = new P(), $t = new Ne(), zu = new P(0, 0, 0), Hu = new P(1, 1, 1), Nn = new P(), Fs = new P(), Bt = new P(), nl = new Ne(), il = new cn();
class hn {
  constructor(e = 0, t = 0, n = 0, i = hn.DEFAULT_ORDER) {
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
    const i = e.elements, r = i[0], a = i[4], o = i[8], l = i[1], c = i[5], h = i[9], u = i[2], d = i[6], p = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Fe(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, p), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Fe(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Fe(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, p), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-Fe(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(Fe(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(o, p));
        break;
      case "XZY":
        this._z = Math.asin(-Fe(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-h, p), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return nl.makeRotationFromQuaternion(e), this.setFromRotationMatrix(nl, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return il.setFromEuler(this), this.setFromQuaternion(il, e);
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
hn.DEFAULT_ORDER = "XYZ";
class Hc {
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
let Vu = 0;
const sl = new P(), yi = new cn(), xn = new Ne(), Bs = new P(), ss = new P(), Gu = new P(), Wu = new cn(), rl = new P(1, 0, 0), al = new P(0, 1, 0), ol = new P(0, 0, 1), ll = { type: "added" }, Xu = { type: "removed" }, Mi = { type: "childadded", child: null }, Fr = { type: "childremoved", child: null };
class ct extends ui {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: Vu++ }), this.uuid = tn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ct.DEFAULT_UP.clone();
    const e = new P(), t = new hn(), n = new cn(), i = new P(1, 1, 1);
    function r() {
      n.setFromEuler(t, false);
    }
    function a() {
      t.setFromQuaternion(n, void 0, false);
    }
    t._onChange(r), n._onChange(a), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: e }, rotation: { configurable: true, enumerable: true, value: t }, quaternion: { configurable: true, enumerable: true, value: n }, scale: { configurable: true, enumerable: true, value: i }, modelViewMatrix: { value: new Ne() }, normalMatrix: { value: new Ie() } }), this.matrix = new Ne(), this.matrixWorld = new Ne(), this.matrixAutoUpdate = ct.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new Hc(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.userData = {};
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
    return yi.setFromAxisAngle(e, t), this.quaternion.multiply(yi), this;
  }
  rotateOnWorldAxis(e, t) {
    return yi.setFromAxisAngle(e, t), this.quaternion.premultiply(yi), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(rl, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(al, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(ol, e);
  }
  translateOnAxis(e, t) {
    return sl.copy(e).applyQuaternion(this.quaternion), this.position.add(sl.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(rl, e);
  }
  translateY(e) {
    return this.translateOnAxis(al, e);
  }
  translateZ(e) {
    return this.translateOnAxis(ol, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(xn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Bs.copy(e) : Bs.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(true, false), ss.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? xn.lookAt(ss, Bs, this.up) : xn.lookAt(Bs, ss, this.up), this.quaternion.setFromRotationMatrix(xn), i && (xn.extractRotation(i.matrixWorld), yi.setFromRotationMatrix(xn), this.quaternion.premultiply(yi.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(ll), Mi.child = e, this.dispatchEvent(Mi), Mi.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Xu), Fr.child = e, this.dispatchEvent(Fr), Fr.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(true, false), xn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(true, false), xn.multiply(e.parent.matrixWorld)), e.applyMatrix4(xn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(false, true), e.dispatchEvent(ll), Mi.child = e, this.dispatchEvent(Mi), Mi.child = null, this;
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
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const i = this.children;
    for (let r = 0, a = i.length; r < a; r++) i[r].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(true, false), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(ss, e, Gu), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(ss, Wu, e), e;
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
      for (let r = 0, a = i.length; r < a; r++) i[r].updateWorldMatrix(false, true);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.6, type: "Object", generator: "Object3D.toJSON" });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === true && (i.castShadow = true), this.receiveShadow === true && (i.receiveShadow = true), this.visible === false && (i.visible = false), this.frustumCulled === false && (i.frustumCulled = false), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === false && (i.matrixAutoUpdate = false), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map((o) => ({ boxInitialized: o.boxInitialized, boxMin: o.box.min.toArray(), boxMax: o.box.max.toArray(), sphereInitialized: o.sphereInitialized, sphereRadius: o.sphere.radius, sphereCenter: o.sphere.center.toArray() })), i.maxInstanceCount = this._maxInstanceCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(e), this._colorsTexture !== null && (i.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (i.boundingSphere = { center: i.boundingSphere.center.toArray(), radius: i.boundingSphere.radius }), this.boundingBox !== null && (i.boundingBox = { min: i.boundingBox.min.toArray(), max: i.boundingBox.max.toArray() }));
    function r(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l)) for (let c = 0, h = l.length; c < h; c++) {
          const u = l[c];
          r(e.shapes, u);
        }
        else r(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const o = [];
      for (let l = 0, c = this.material.length; l < c; l++) o.push(r(e.materials, this.material[l]));
      i.material = o;
    } else i.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++) i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        i.animations.push(r(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries), l = a(e.materials), c = a(e.textures), h = a(e.images), u = a(e.shapes), d = a(e.skeletons), p = a(e.animations), _ = a(e.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), p.length > 0 && (n.animations = p), _.length > 0 && (n.nodes = _);
    }
    return n.object = i, n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const h = o[c];
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
ct.DEFAULT_UP = new P(0, 1, 0);
ct.DEFAULT_MATRIX_AUTO_UPDATE = true;
ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
const Zt = new P(), yn = new P(), Br = new P(), Mn = new P(), Si = new P(), Ei = new P(), cl = new P(), kr = new P(), zr = new P(), Hr = new P(), Vr = new Ke(), Gr = new Ke(), Wr = new Ke();
class Qt {
  constructor(e = new P(), t = new P(), n = new P()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Zt.subVectors(e, t), i.cross(Zt);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, r) {
    Zt.subVectors(i, t), yn.subVectors(n, t), Br.subVectors(e, t);
    const a = Zt.dot(Zt), o = Zt.dot(yn), l = Zt.dot(Br), c = yn.dot(yn), h = yn.dot(Br), u = a * c - o * o;
    if (u === 0) return r.set(0, 0, 0), null;
    const d = 1 / u, p = (c * l - o * h) * d, _ = (a * h - o * l) * d;
    return r.set(1 - p - _, _, p);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, Mn) === null ? false : Mn.x >= 0 && Mn.y >= 0 && Mn.x + Mn.y <= 1;
  }
  static getInterpolation(e, t, n, i, r, a, o, l) {
    return this.getBarycoord(e, t, n, i, Mn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, Mn.x), l.addScaledVector(a, Mn.y), l.addScaledVector(o, Mn.z), l);
  }
  static getInterpolatedAttribute(e, t, n, i, r, a) {
    return Vr.setScalar(0), Gr.setScalar(0), Wr.setScalar(0), Vr.fromBufferAttribute(e, t), Gr.fromBufferAttribute(e, n), Wr.fromBufferAttribute(e, i), a.setScalar(0), a.addScaledVector(Vr, r.x), a.addScaledVector(Gr, r.y), a.addScaledVector(Wr, r.z), a;
  }
  static isFrontFacing(e, t, n, i) {
    return Zt.subVectors(n, t), yn.subVectors(e, t), Zt.cross(yn).dot(i) < 0;
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
    return Zt.subVectors(this.c, this.b), yn.subVectors(this.a, this.b), Zt.cross(yn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Qt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Qt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, i, r) {
    return Qt.getInterpolation(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return Qt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Qt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, r = this.c;
    let a, o;
    Si.subVectors(i, n), Ei.subVectors(r, n), kr.subVectors(e, n);
    const l = Si.dot(kr), c = Ei.dot(kr);
    if (l <= 0 && c <= 0) return t.copy(n);
    zr.subVectors(e, i);
    const h = Si.dot(zr), u = Ei.dot(zr);
    if (h >= 0 && u <= h) return t.copy(i);
    const d = l * u - h * c;
    if (d <= 0 && l >= 0 && h <= 0) return a = l / (l - h), t.copy(n).addScaledVector(Si, a);
    Hr.subVectors(e, r);
    const p = Si.dot(Hr), _ = Ei.dot(Hr);
    if (_ >= 0 && p <= _) return t.copy(r);
    const g = p * c - l * _;
    if (g <= 0 && c >= 0 && _ <= 0) return o = c / (c - _), t.copy(n).addScaledVector(Ei, o);
    const m = h * _ - p * u;
    if (m <= 0 && u - h >= 0 && p - _ >= 0) return cl.subVectors(r, i), o = (u - h) / (u - h + (p - _)), t.copy(i).addScaledVector(cl, o);
    const f = 1 / (m + g + d);
    return a = g * f, o = d * f, t.copy(n).addScaledVector(Si, a).addScaledVector(Ei, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Vc = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, Un = { h: 0, s: 0, l: 0 }, ks = { h: 0, s: 0, l: 0 };
function Xr(s3, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? s3 + (e - s3) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? s3 + (e - s3) * 6 * (2 / 3 - t) : s3;
}
let Le = class {
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
  setHex(e, t = St) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, We.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = We.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, We.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = We.workingColorSpace) {
    if (e = vo(e, 1), t = Fe(t, 0, 1), n = Fe(n, 0, 1), t === 0) this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - r;
      this.r = Xr(a, r, e + 1 / 3), this.g = Xr(a, r, e), this.b = Xr(a, r, e - 1 / 3);
    }
    return We.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = St) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let r;
      const a = i[1], o = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, t);
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, t);
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, t);
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = i[1], a = r.length;
      if (a === 3) return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, t);
      if (a === 6) return this.setHex(parseInt(r, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = St) {
    const n = Vc[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = wn(e.r), this.g = wn(e.g), this.b = wn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Fi(e.r), this.g = Fi(e.g), this.b = Fi(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = St) {
    return We.fromWorkingColorSpace(Tt.copy(this), e), Math.round(Fe(Tt.r * 255, 0, 255)) * 65536 + Math.round(Fe(Tt.g * 255, 0, 255)) * 256 + Math.round(Fe(Tt.b * 255, 0, 255));
  }
  getHexString(e = St) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = We.workingColorSpace) {
    We.fromWorkingColorSpace(Tt.copy(this), t);
    const n = Tt.r, i = Tt.g, r = Tt.b, a = Math.max(n, i, r), o = Math.min(n, i, r);
    let l, c;
    const h = (o + a) / 2;
    if (o === a) l = 0, c = 0;
    else {
      const u = a - o;
      switch (c = h <= 0.5 ? u / (a + o) : u / (2 - a - o), a) {
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
  getRGB(e, t = We.workingColorSpace) {
    return We.fromWorkingColorSpace(Tt.copy(this), t), e.r = Tt.r, e.g = Tt.g, e.b = Tt.b, e;
  }
  getStyle(e = St) {
    We.fromWorkingColorSpace(Tt.copy(this), e);
    const t = Tt.r, n = Tt.g, i = Tt.b;
    return e !== St ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Un), this.setHSL(Un.h + e, Un.s + t, Un.l + n);
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
    this.getHSL(Un), e.getHSL(ks);
    const n = gs(Un.h, ks.h, t), i = gs(Un.s, ks.s, t), r = gs(Un.l, ks.l, t);
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
};
const Tt = new Le();
Le.NAMES = Vc;
let Yu = 0;
class nn extends ui {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: Yu++ }), this.uuid = tn(), this.name = "", this.type = "Material", this.blending = Ui, this.side = Cn, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = da, this.blendDst = fa, this.blendEquation = ri, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Le(0, 0, 0), this.blendAlpha = 0, this.depthFunc = ki, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = Ko, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = pi, this.stencilZFail = pi, this.stencilZPass = pi, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Ui && (n.blending = this.blending), this.side !== Cn && (n.side = this.side), this.vertexColors === true && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === true && (n.transparent = true), this.blendSrc !== da && (n.blendSrc = this.blendSrc), this.blendDst !== fa && (n.blendDst = this.blendDst), this.blendEquation !== ri && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== ki && (n.depthFunc = this.depthFunc), this.depthTest === false && (n.depthTest = this.depthTest), this.depthWrite === false && (n.depthWrite = this.depthWrite), this.colorWrite === false && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Ko && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== pi && (n.stencilFail = this.stencilFail), this.stencilZFail !== pi && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== pi && (n.stencilZPass = this.stencilZPass), this.stencilWrite === true && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === true && (n.polygonOffset = true), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === true && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === true && (n.alphaHash = true), this.alphaToCoverage === true && (n.alphaToCoverage = true), this.premultipliedAlpha === true && (n.premultipliedAlpha = true), this.forceSinglePass === true && (n.forceSinglePass = true), this.wireframe === true && (n.wireframe = true), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (n.flatShading = true), this.visible === false && (n.visible = false), this.toneMapped === false && (n.toneMapped = false), this.fog === false && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(r) {
      const a = [];
      for (const o in r) {
        const l = r[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (t) {
      const r = i(e.textures), a = i(e.images);
      r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a);
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
class oi extends nn {
  constructor(e) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new Le(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new hn(), this.combine = bc, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const pt = new P(), zs = new we();
let qu = 0;
class Lt {
  constructor(e, t, n = false) {
    if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, Object.defineProperty(this, "id", { value: qu++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = $a, this.updateRanges = [], this.gpuType = en, this.version = 0;
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
    if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) zs.fromBufferAttribute(this, t), zs.applyMatrix3(e), this.setXY(t, zs.x, zs.y);
    else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) pt.fromBufferAttribute(this, t), pt.applyMatrix3(e), this.setXYZ(t, pt.x, pt.y, pt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++) pt.fromBufferAttribute(this, t), pt.applyMatrix4(e), this.setXYZ(t, pt.x, pt.y, pt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++) pt.fromBufferAttribute(this, t), pt.applyNormalMatrix(e), this.setXYZ(t, pt.x, pt.y, pt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++) pt.fromBufferAttribute(this, t), pt.transformDirection(e), this.setXYZ(t, pt.x, pt.y, pt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = Jt(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = Qe(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Jt(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Jt(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Jt(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Jt(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Qe(t, this.array), n = Qe(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = Qe(t, this.array), n = Qe(n, this.array), i = Qe(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e *= this.itemSize, this.normalized && (t = Qe(t, this.array), n = Qe(n, this.array), i = Qe(i, this.array), r = Qe(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (e.name = this.name), this.usage !== $a && (e.usage = this.usage), e;
  }
}
class Gc extends Lt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Wc extends Lt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Rn extends Lt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let ju = 0;
const Wt = new Ne(), Yr = new ct(), bi = new P(), kt = new un(), rs = new un(), vt = new P();
class fn extends ui {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: ju++ }), this.uuid = tn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (kc(e) ? Wc : Gc)(e, 1) : this.index = e, this;
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
      const r = new Ie().getNormalMatrix(e);
      n.applyNormalMatrix(r), n.needsUpdate = true;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Wt.makeRotationFromQuaternion(e), this.applyMatrix4(Wt), this;
  }
  rotateX(e) {
    return Wt.makeRotationX(e), this.applyMatrix4(Wt), this;
  }
  rotateY(e) {
    return Wt.makeRotationY(e), this.applyMatrix4(Wt), this;
  }
  rotateZ(e) {
    return Wt.makeRotationZ(e), this.applyMatrix4(Wt), this;
  }
  translate(e, t, n) {
    return Wt.makeTranslation(e, t, n), this.applyMatrix4(Wt), this;
  }
  scale(e, t, n) {
    return Wt.makeScale(e, t, n), this.applyMatrix4(Wt), this;
  }
  lookAt(e) {
    return Yr.lookAt(e), Yr.updateMatrix(), this.applyMatrix4(Yr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(bi).negate(), this.translate(bi.x, bi.y, bi.z), this;
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let i = 0, r = e.length; i < r; i++) {
        const a = e[i];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new Rn(n, 3));
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
    this.boundingBox === null && (this.boundingBox = new un());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new P(-1 / 0, -1 / 0, -1 / 0), new P(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t) for (let n = 0, i = t.length; n < i; n++) {
        const r = t[n];
        kt.setFromBufferAttribute(r), this.morphTargetsRelative ? (vt.addVectors(this.boundingBox.min, kt.min), this.boundingBox.expandByPoint(vt), vt.addVectors(this.boundingBox.max, kt.max), this.boundingBox.expandByPoint(vt)) : (this.boundingBox.expandByPoint(kt.min), this.boundingBox.expandByPoint(kt.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new dn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new P(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (kt.setFromBufferAttribute(e), t) for (let r = 0, a = t.length; r < a; r++) {
        const o = t[r];
        rs.setFromBufferAttribute(o), this.morphTargetsRelative ? (vt.addVectors(kt.min, rs.min), kt.expandByPoint(vt), vt.addVectors(kt.max, rs.max), kt.expandByPoint(vt)) : (kt.expandByPoint(rs.min), kt.expandByPoint(rs.max));
      }
      kt.getCenter(n);
      let i = 0;
      for (let r = 0, a = e.count; r < a; r++) vt.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared(vt));
      if (t) for (let r = 0, a = t.length; r < a; r++) {
        const o = t[r], l = this.morphTargetsRelative;
        for (let c = 0, h = o.count; c < h; c++) vt.fromBufferAttribute(o, c), l && (bi.fromBufferAttribute(e, c), vt.add(bi)), i = Math.max(i, n.distanceToSquared(vt));
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
    this.hasAttribute("tangent") === false && this.setAttribute("tangent", new Lt(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], l = [];
    for (let U = 0; U < n.count; U++) o[U] = new P(), l[U] = new P();
    const c = new P(), h = new P(), u = new P(), d = new we(), p = new we(), _ = new we(), g = new P(), m = new P();
    function f(U, S, y) {
      c.fromBufferAttribute(n, U), h.fromBufferAttribute(n, S), u.fromBufferAttribute(n, y), d.fromBufferAttribute(r, U), p.fromBufferAttribute(r, S), _.fromBufferAttribute(r, y), h.sub(c), u.sub(c), p.sub(d), _.sub(d);
      const C = 1 / (p.x * _.y - _.x * p.y);
      isFinite(C) && (g.copy(h).multiplyScalar(_.y).addScaledVector(u, -p.y).multiplyScalar(C), m.copy(u).multiplyScalar(p.x).addScaledVector(h, -_.x).multiplyScalar(C), o[U].add(g), o[S].add(g), o[y].add(g), l[U].add(m), l[S].add(m), l[y].add(m));
    }
    let T = this.groups;
    T.length === 0 && (T = [{ start: 0, count: e.count }]);
    for (let U = 0, S = T.length; U < S; ++U) {
      const y = T[U], C = y.start, W = y.count;
      for (let z = C, $ = C + W; z < $; z += 3) f(e.getX(z + 0), e.getX(z + 1), e.getX(z + 2));
    }
    const b = new P(), M = new P(), L = new P(), R = new P();
    function A(U) {
      L.fromBufferAttribute(i, U), R.copy(L);
      const S = o[U];
      b.copy(S), b.sub(L.multiplyScalar(L.dot(S))).normalize(), M.crossVectors(R, S);
      const C = M.dot(l[U]) < 0 ? -1 : 1;
      a.setXYZW(U, b.x, b.y, b.z, C);
    }
    for (let U = 0, S = T.length; U < S; ++U) {
      const y = T[U], C = y.start, W = y.count;
      for (let z = C, $ = C + W; z < $; z += 3) A(e.getX(z + 0)), A(e.getX(z + 1)), A(e.getX(z + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0) n = new Lt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else for (let d = 0, p = n.count; d < p; d++) n.setXYZ(d, 0, 0, 0);
      const i = new P(), r = new P(), a = new P(), o = new P(), l = new P(), c = new P(), h = new P(), u = new P();
      if (e) for (let d = 0, p = e.count; d < p; d += 3) {
        const _ = e.getX(d + 0), g = e.getX(d + 1), m = e.getX(d + 2);
        i.fromBufferAttribute(t, _), r.fromBufferAttribute(t, g), a.fromBufferAttribute(t, m), h.subVectors(a, r), u.subVectors(i, r), h.cross(u), o.fromBufferAttribute(n, _), l.fromBufferAttribute(n, g), c.fromBufferAttribute(n, m), o.add(h), l.add(h), c.add(h), n.setXYZ(_, o.x, o.y, o.z), n.setXYZ(g, l.x, l.y, l.z), n.setXYZ(m, c.x, c.y, c.z);
      }
      else for (let d = 0, p = t.count; d < p; d += 3) i.fromBufferAttribute(t, d + 0), r.fromBufferAttribute(t, d + 1), a.fromBufferAttribute(t, d + 2), h.subVectors(a, r), u.subVectors(i, r), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++) vt.fromBufferAttribute(e, t), vt.normalize(), e.setXYZ(t, vt.x, vt.y, vt.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, h = o.itemSize, u = o.normalized, d = new c.constructor(l.length * h);
      let p = 0, _ = 0;
      for (let g = 0, m = l.length; g < m; g++) {
        o.isInterleavedBufferAttribute ? p = l[g] * o.data.stride + o.offset : p = l[g] * h;
        for (let f = 0; f < h; f++) d[_++] = c[p++];
      }
      return new Lt(d, h, u);
    }
    if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new fn(), n = this.index.array, i = this.attributes;
    for (const o in i) {
      const l = i[o], c = e(l, n);
      t.setAttribute(o, c);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const l = [], c = r[o];
      for (let h = 0, u = c.length; h < u; h++) {
        const d = c[h], p = e(d, n);
        l.push(p);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
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
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = { center: o.center.toArray(), radius: o.radius }), e;
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
    const a = e.groups;
    for (let c = 0, h = a.length; c < h; c++) {
      const u = a[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const hl = new Ne(), Jn = new Rs(), Hs = new dn(), ul = new P(), Vs = new P(), Gs = new P(), Ws = new P(), qr = new P(), Xs = new P(), dl = new P(), Ys = new P();
class Ut extends ct {
  constructor(e = new fn(), t = new oi()) {
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
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, r = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const o = this.morphTargetInfluences;
    if (r && o) {
      Xs.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const h = o[l], u = r[l];
        h !== 0 && (qr.fromBufferAttribute(u, e), a ? Xs.addScaledVector(qr, h) : Xs.addScaledVector(qr.sub(t), h));
      }
      t.add(Xs);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, r = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Hs.copy(n.boundingSphere), Hs.applyMatrix4(r), Jn.copy(e.ray).recast(e.near), !(Hs.containsPoint(Jn.origin) === false && (Jn.intersectSphere(Hs, ul) === null || Jn.origin.distanceToSquared(ul) > (e.far - e.near) ** 2)) && (hl.copy(r).invert(), Jn.copy(e.ray).applyMatrix4(hl), !(n.boundingBox !== null && Jn.intersectsBox(n.boundingBox) === false) && this._computeIntersections(e, t, Jn)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const r = this.geometry, a = this.material, o = r.index, l = r.attributes.position, c = r.attributes.uv, h = r.attributes.uv1, u = r.attributes.normal, d = r.groups, p = r.drawRange;
    if (o !== null) if (Array.isArray(a)) for (let _ = 0, g = d.length; _ < g; _++) {
      const m = d[_], f = a[m.materialIndex], T = Math.max(m.start, p.start), b = Math.min(o.count, Math.min(m.start + m.count, p.start + p.count));
      for (let M = T, L = b; M < L; M += 3) {
        const R = o.getX(M), A = o.getX(M + 1), U = o.getX(M + 2);
        i = qs(this, f, e, n, c, h, u, R, A, U), i && (i.faceIndex = Math.floor(M / 3), i.face.materialIndex = m.materialIndex, t.push(i));
      }
    }
    else {
      const _ = Math.max(0, p.start), g = Math.min(o.count, p.start + p.count);
      for (let m = _, f = g; m < f; m += 3) {
        const T = o.getX(m), b = o.getX(m + 1), M = o.getX(m + 2);
        i = qs(this, a, e, n, c, h, u, T, b, M), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
      }
    }
    else if (l !== void 0) if (Array.isArray(a)) for (let _ = 0, g = d.length; _ < g; _++) {
      const m = d[_], f = a[m.materialIndex], T = Math.max(m.start, p.start), b = Math.min(l.count, Math.min(m.start + m.count, p.start + p.count));
      for (let M = T, L = b; M < L; M += 3) {
        const R = M, A = M + 1, U = M + 2;
        i = qs(this, f, e, n, c, h, u, R, A, U), i && (i.faceIndex = Math.floor(M / 3), i.face.materialIndex = m.materialIndex, t.push(i));
      }
    }
    else {
      const _ = Math.max(0, p.start), g = Math.min(l.count, p.start + p.count);
      for (let m = _, f = g; m < f; m += 3) {
        const T = m, b = m + 1, M = m + 2;
        i = qs(this, a, e, n, c, h, u, T, b, M), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
      }
    }
  }
}
function Ku(s3, e, t, n, i, r, a, o) {
  let l;
  if (e.side === Ot ? l = n.intersectTriangle(a, r, i, true, o) : l = n.intersectTriangle(i, r, a, e.side === Cn, o), l === null) return null;
  Ys.copy(o), Ys.applyMatrix4(s3.matrixWorld);
  const c = t.ray.origin.distanceTo(Ys);
  return c < t.near || c > t.far ? null : { distance: c, point: Ys.clone(), object: s3 };
}
function qs(s3, e, t, n, i, r, a, o, l, c) {
  s3.getVertexPosition(o, Vs), s3.getVertexPosition(l, Gs), s3.getVertexPosition(c, Ws);
  const h = Ku(s3, e, t, n, Vs, Gs, Ws, dl);
  if (h) {
    const u = new P();
    Qt.getBarycoord(dl, Vs, Gs, Ws, u), i && (h.uv = Qt.getInterpolatedAttribute(i, o, l, c, u, new we())), r && (h.uv1 = Qt.getInterpolatedAttribute(r, o, l, c, u, new we())), a && (h.normal = Qt.getInterpolatedAttribute(a, o, l, c, u, new P()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const d = { a: o, b: l, c, normal: new P(), materialIndex: 0 };
    Qt.getNormal(Vs, Gs, Ws, d.normal), h.face = d, h.barycoord = u;
  }
  return h;
}
class $i extends fn {
  constructor(e = 1, t = 1, n = 1, i = 1, r = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: n, widthSegments: i, heightSegments: r, depthSegments: a };
    const o = this;
    i = Math.floor(i), r = Math.floor(r), a = Math.floor(a);
    const l = [], c = [], h = [], u = [];
    let d = 0, p = 0;
    _("z", "y", "x", -1, -1, n, t, e, a, r, 0), _("z", "y", "x", 1, -1, n, t, -e, a, r, 1), _("x", "z", "y", 1, 1, e, n, t, i, a, 2), _("x", "z", "y", 1, -1, e, n, -t, i, a, 3), _("x", "y", "z", 1, -1, e, t, n, i, r, 4), _("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(l), this.setAttribute("position", new Rn(c, 3)), this.setAttribute("normal", new Rn(h, 3)), this.setAttribute("uv", new Rn(u, 2));
    function _(g, m, f, T, b, M, L, R, A, U, S) {
      const y = M / A, C = L / U, W = M / 2, z = L / 2, $ = R / 2, Z = A + 1, q = U + 1;
      let Q = 0, V = 0;
      const ae = new P();
      for (let de = 0; de < q; de++) {
        const ye = de * C - z;
        for (let Be = 0; Be < Z; Be++) {
          const it = Be * y - W;
          ae[g] = it * T, ae[m] = ye * b, ae[f] = $, c.push(ae.x, ae.y, ae.z), ae[g] = 0, ae[m] = 0, ae[f] = R > 0 ? 1 : -1, h.push(ae.x, ae.y, ae.z), u.push(Be / A), u.push(1 - de / U), Q += 1;
        }
      }
      for (let de = 0; de < U; de++) for (let ye = 0; ye < A; ye++) {
        const Be = d + ye + Z * de, it = d + ye + Z * (de + 1), X = d + (ye + 1) + Z * (de + 1), ne = d + (ye + 1) + Z * de;
        l.push(Be, it, ne), l.push(it, X, ne), V += 6;
      }
      o.addGroup(p, V, S), p += V, d += Q;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new $i(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Yi(s3) {
  const e = {};
  for (const t in s3) {
    e[t] = {};
    for (const n in s3[t]) {
      const i = s3[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function Rt(s3) {
  const e = {};
  for (let t = 0; t < s3.length; t++) {
    const n = Yi(s3[t]);
    for (const i in n) e[i] = n[i];
  }
  return e;
}
function $u(s3) {
  const e = [];
  for (let t = 0; t < s3.length; t++) e.push(s3[t].clone());
  return e;
}
function Xc(s3) {
  const e = s3.getRenderTarget();
  return e === null ? s3.outputColorSpace : e.isXRRenderTarget === true ? e.texture.colorSpace : We.workingColorSpace;
}
const Zu = { clone: Yi, merge: Rt };
var Ju = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Qu = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Wn extends nn {
  constructor(e) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Ju, this.fragmentShader = Qu, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Yi(e.uniforms), this.uniformsGroups = $u(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture ? t.uniforms[i] = { type: "t", value: a.toJSON(e).uuid } : a && a.isColor ? t.uniforms[i] = { type: "c", value: a.getHex() } : a && a.isVector2 ? t.uniforms[i] = { type: "v2", value: a.toArray() } : a && a.isVector3 ? t.uniforms[i] = { type: "v3", value: a.toArray() } : a && a.isVector4 ? t.uniforms[i] = { type: "v4", value: a.toArray() } : a && a.isMatrix3 ? t.uniforms[i] = { type: "m3", value: a.toArray() } : a && a.isMatrix4 ? t.uniforms[i] = { type: "m4", value: a.toArray() } : t.uniforms[i] = { value: a };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const i in this.extensions) this.extensions[i] === true && (n[i] = true);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Yc extends ct {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new Ne(), this.projectionMatrix = new Ne(), this.projectionMatrixInverse = new Ne(), this.coordinateSystem = An;
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
const On = new P(), fl = new we(), pl = new we();
class Ct extends Yc {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Xi * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(_s * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Xi * 2 * Math.atan(Math.tan(_s * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    On.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(On.x, On.y).multiplyScalar(-e / On.z), On.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(On.x, On.y).multiplyScalar(-e / On.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, fl, pl), t.subVectors(pl, fl);
  }
  setViewOffset(e, t, n, i, r, a) {
    this.aspect = e / t, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(_s * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth, c = a.fullHeight;
      r += a.offsetX * i / l, t -= a.offsetY * n / c, i *= a.width / l, n *= a.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (r += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Ti = -90, Ai = 1;
class ed extends ct {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new Ct(Ti, Ai, e, t);
    i.layers = this.layers, this.add(i);
    const r = new Ct(Ti, Ai, e, t);
    r.layers = this.layers, this.add(r);
    const a = new Ct(Ti, Ai, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Ct(Ti, Ai, e, t);
    o.layers = this.layers, this.add(o);
    const l = new Ct(Ti, Ai, e, t);
    l.layers = this.layers, this.add(l);
    const c = new Ct(Ti, Ai, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, i, r, a, o, l] = t;
    for (const c of t) this.remove(c);
    if (e === An) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === gr) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t) this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [r, a, o, l, c, h] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), p = e.getActiveMipmapLevel(), _ = e.xr.enabled;
    e.xr.enabled = false;
    const g = n.texture.generateMipmaps;
    n.texture.generateMipmaps = false, e.setRenderTarget(n, 0, i), e.render(t, r), e.setRenderTarget(n, 1, i), e.render(t, a), e.setRenderTarget(n, 2, i), e.render(t, o), e.setRenderTarget(n, 3, i), e.render(t, l), e.setRenderTarget(n, 4, i), e.render(t, c), n.texture.generateMipmaps = g, e.setRenderTarget(n, 5, i), e.render(t, h), e.setRenderTarget(u, d, p), e.xr.enabled = _, n.texture.needsPMREMUpdate = true;
  }
}
class qc extends xt {
  constructor(e, t, n, i, r, a, o, l, c, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : zi, super(e, t, n, i, r, a, o, l, c, h), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class td extends hi {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = true;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new qc(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : false, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : zt;
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
			` }, i = new $i(5, 5, 5), r = new Wn({ name: "CubemapFromEquirect", uniforms: Yi(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: Ot, blending: Vn });
    r.uniforms.tEquirect.value = t;
    const a = new Ut(i, r), o = t.minFilter;
    return t.minFilter === Tn && (t.minFilter = zt), new ed(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const r = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
class li extends ct {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
}
const nd = { type: "move" };
class jr {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new li(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new li(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new P(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new P()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new li(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new P(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new P()), this._grip;
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
    let i = null, r = null, a = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        a = true;
        for (const g of e.hand.values()) {
          const m = t.getJointPose(g, n), f = this._getHandJoint(c, g);
          m !== null && (f.matrix.fromArray(m.transform.matrix), f.matrix.decompose(f.position, f.rotation, f.scale), f.matrixWorldNeedsUpdate = true, f.jointRadius = m.radius), f.visible = m !== null;
        }
        const h = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], d = h.position.distanceTo(u.position), p = 0.02, _ = 5e-3;
        c.inputState.pinching && d > p + _ ? (c.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !c.inputState.pinching && d <= p - _ && (c.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this }));
      } else l !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = true, r.linearVelocity ? (l.hasLinearVelocity = true, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = false, r.angularVelocity ? (l.hasAngularVelocity = true, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = false));
      o !== null && (i = t.getPose(e.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = true, i.linearVelocity ? (o.hasLinearVelocity = true, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = false, i.angularVelocity ? (o.hasAngularVelocity = true, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = false, this.dispatchEvent(nd)));
    }
    return o !== null && (o.visible = i !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = a !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new li();
      n.matrixAutoUpdate = false, n.visible = false, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class id extends ct {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new hn(), this.environmentIntensity = 1, this.environmentRotation = new hn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class sd {
  constructor(e, t) {
    this.isInterleavedBuffer = true, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = $a, this.updateRanges = [], this.version = 0, this.uuid = tn();
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
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = tn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = tn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride };
  }
}
const wt = new P();
class yo {
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
    return this.normalized && (n = Jt(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = Qe(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
  }
  setX(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = Qe(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = Jt(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = Jt(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = Jt(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = Jt(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Qe(t, this.array), n = Qe(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Qe(t, this.array), n = Qe(n, this.array), i = Qe(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Qe(t, this.array), n = Qe(n, this.array), i = Qe(i, this.array), r = Qe(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = r, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[i + r]);
      }
      return new Lt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new yo(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
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
const ml = new P(), _l = new Ke(), gl = new Ke(), rd = new P(), vl = new Ne(), js = new P(), Kr = new dn(), xl = new Ne(), $r = new Rs();
class ad extends Ut {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = true, this.type = "SkinnedMesh", this.bindMode = Xo, this.bindMatrix = new Ne(), this.bindMatrixInverse = new Ne(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new un()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++) this.getVertexPosition(n, js), this.boundingBox.expandByPoint(js);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new dn()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++) this.getVertexPosition(n, js), this.boundingSphere.expandByPoint(js);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Kr.copy(this.boundingSphere), Kr.applyMatrix4(i), e.ray.intersectsSphere(Kr) !== false && (xl.copy(i).invert(), $r.copy(e.ray).applyMatrix4(xl), !(this.boundingBox !== null && $r.intersectsBox(this.boundingBox) === false) && this._computeIntersections(e, t, $r)));
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
    const e = new Ke(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const r = 1 / e.manhattanLength();
      r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === Xo ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === eu ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    _l.fromBufferAttribute(i.attributes.skinIndex, e), gl.fromBufferAttribute(i.attributes.skinWeight, e), ml.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const a = gl.getComponent(r);
      if (a !== 0) {
        const o = _l.getComponent(r);
        vl.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), t.addScaledVector(rd.copy(ml).applyMatrix4(vl), a);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class jc extends ct {
  constructor() {
    super(), this.isBone = true, this.type = "Bone";
  }
}
class Kc extends xt {
  constructor(e = null, t = 1, n = 1, i, r, a, o, l, c = Pt, h = Pt, u, d) {
    super(null, a, o, l, c, h, i, r, u, d), this.isDataTexture = true, this.image = { data: e, width: t, height: n }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
const yl = new Ne(), od = new Ne();
class Mo {
  constructor(e = [], t = []) {
    this.uuid = tn(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0) this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++) this.boneInverses.push(new Ne());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Ne();
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
    for (let r = 0, a = e.length; r < a; r++) {
      const o = e[r] ? e[r].matrixWorld : od;
      yl.multiplyMatrices(o, t[r]), yl.toArray(n, r * 16);
    }
    i !== null && (i.needsUpdate = true);
  }
  clone() {
    return new Mo(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new Kc(t, e, e, Yt, en);
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
      let a = t[r];
      a === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), a = new jc()), this.bones.push(a), this.boneInverses.push(new Ne().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = { metadata: { version: 4.6, type: "Skeleton", generator: "Skeleton.toJSON" }, bones: [], boneInverses: [] };
    e.uuid = this.uuid;
    const t = this.bones, n = this.boneInverses;
    for (let i = 0, r = t.length; i < r; i++) {
      const a = t[i];
      e.bones.push(a.uuid);
      const o = n[i];
      e.boneInverses.push(o.toArray());
    }
    return e;
  }
}
class Za extends Lt {
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
const wi = new Ne(), Ml = new Ne(), Ks = [], Sl = new un(), ld = new Ne(), as = new Ut(), os = new dn();
class cd extends Ut {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = true, this.instanceMatrix = new Za(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++) this.setMatrixAt(i, ld);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new un()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++) this.getMatrixAt(n, wi), Sl.copy(e.boundingBox).applyMatrix4(wi), this.boundingBox.union(Sl);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new dn()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++) this.getMatrixAt(n, wi), os.copy(e.boundingSphere).applyMatrix4(wi), this.boundingSphere.union(os);
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
    const n = t.morphTargetInfluences, i = this.morphTexture.source.data.data, r = n.length + 1, a = e * r + 1;
    for (let o = 0; o < n.length; o++) n[o] = i[a + o];
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (as.geometry = this.geometry, as.material = this.material, as.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), os.copy(this.boundingSphere), os.applyMatrix4(n), e.ray.intersectsSphere(os) !== false)) for (let r = 0; r < i; r++) {
      this.getMatrixAt(r, wi), Ml.multiplyMatrices(n, wi), as.matrixWorld = Ml, as.raycast(e, Ks);
      for (let a = 0, o = Ks.length; a < o; a++) {
        const l = Ks[a];
        l.instanceId = r, l.object = this, t.push(l);
      }
      Ks.length = 0;
    }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new Za(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = n.length + 1;
    this.morphTexture === null && (this.morphTexture = new Kc(new Float32Array(i * this.count), i, this.count, fo, en));
    const r = this.morphTexture.source.data.data;
    let a = 0;
    for (let c = 0; c < n.length; c++) a += n[c];
    const o = this.geometry.morphTargetsRelative ? 1 : 1 - a, l = i * e;
    r[l] = o, r.set(n, l + 1);
  }
  updateMorphTargets() {
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null);
  }
}
const Zr = new P(), hd = new P(), ud = new Ie();
class Bn {
  constructor(e = new P(1, 0, 0), t = 0) {
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
    const i = Zr.subVectors(n, t).cross(hd.subVectors(e, t)).normalize();
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
    const n = e.delta(Zr), i = this.normal.dot(n);
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
    const n = t || ud.getNormalMatrix(e), i = this.coplanarPoint(Zr).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
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
const Qn = new dn(), $s = new P();
class So {
  constructor(e = new Bn(), t = new Bn(), n = new Bn(), i = new Bn(), r = new Bn(), a = new Bn()) {
    this.planes = [e, t, n, i, r, a];
  }
  set(e, t, n, i, r, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(r), o[5].copy(a), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = An) {
    const n = this.planes, i = e.elements, r = i[0], a = i[1], o = i[2], l = i[3], c = i[4], h = i[5], u = i[6], d = i[7], p = i[8], _ = i[9], g = i[10], m = i[11], f = i[12], T = i[13], b = i[14], M = i[15];
    if (n[0].setComponents(l - r, d - c, m - p, M - f).normalize(), n[1].setComponents(l + r, d + c, m + p, M + f).normalize(), n[2].setComponents(l + a, d + h, m + _, M + T).normalize(), n[3].setComponents(l - a, d - h, m - _, M - T).normalize(), n[4].setComponents(l - o, d - u, m - g, M - b).normalize(), t === An) n[5].setComponents(l + o, d + u, m + g, M + b).normalize();
    else if (t === gr) n[5].setComponents(o, u, g, b).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), Qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Qn);
  }
  intersectsSprite(e) {
    return Qn.center.set(0, 0, 0), Qn.radius = 0.7071067811865476, Qn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Qn);
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
      if ($s.x = i.normal.x > 0 ? e.max.x : e.min.x, $s.y = i.normal.y > 0 ? e.max.y : e.min.y, $s.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint($s) < 0) return false;
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
class $c extends nn {
  constructor(e) {
    super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new Le(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const vr = new P(), xr = new P(), El = new Ne(), ls = new Rs(), Zs = new dn(), Jr = new P(), bl = new P();
class Eo extends ct {
  constructor(e = new fn(), t = new $c()) {
    super(), this.isLine = true, this.type = "Line", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, r = t.count; i < r; i++) vr.fromBufferAttribute(t, i - 1), xr.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += vr.distanceTo(xr);
      e.setAttribute("lineDistance", new Rn(n, 1));
    } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Zs.copy(n.boundingSphere), Zs.applyMatrix4(i), Zs.radius += r, e.ray.intersectsSphere(Zs) === false) return;
    El.copy(i).invert(), ls.copy(e.ray).applyMatrix4(El);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = this.isLineSegments ? 2 : 1, h = n.index, d = n.attributes.position;
    if (h !== null) {
      const p = Math.max(0, a.start), _ = Math.min(h.count, a.start + a.count);
      for (let g = p, m = _ - 1; g < m; g += c) {
        const f = h.getX(g), T = h.getX(g + 1), b = Js(this, e, ls, l, f, T, g);
        b && t.push(b);
      }
      if (this.isLineLoop) {
        const g = h.getX(_ - 1), m = h.getX(p), f = Js(this, e, ls, l, g, m, _ - 1);
        f && t.push(f);
      }
    } else {
      const p = Math.max(0, a.start), _ = Math.min(d.count, a.start + a.count);
      for (let g = p, m = _ - 1; g < m; g += c) {
        const f = Js(this, e, ls, l, g, g + 1, g);
        f && t.push(f);
      }
      if (this.isLineLoop) {
        const g = Js(this, e, ls, l, _ - 1, p, _ - 1);
        g && t.push(g);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
}
function Js(s3, e, t, n, i, r, a) {
  const o = s3.geometry.attributes.position;
  if (vr.fromBufferAttribute(o, i), xr.fromBufferAttribute(o, r), t.distanceSqToSegment(vr, xr, Jr, bl) > n) return;
  Jr.applyMatrix4(s3.matrixWorld);
  const c = e.ray.origin.distanceTo(Jr);
  if (!(c < e.near || c > e.far)) return { distance: c, point: bl.clone().applyMatrix4(s3.matrixWorld), index: a, face: null, faceIndex: null, barycoord: null, object: s3 };
}
const Tl = new P(), Al = new P();
class dd extends Eo {
  constructor(e, t) {
    super(e, t), this.isLineSegments = true, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, r = t.count; i < r; i += 2) Tl.fromBufferAttribute(t, i), Al.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Tl.distanceTo(Al);
      e.setAttribute("lineDistance", new Rn(n, 1));
    } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class fd extends Eo {
  constructor(e, t) {
    super(e, t), this.isLineLoop = true, this.type = "LineLoop";
  }
}
class Zc extends nn {
  constructor(e) {
    super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new Le(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const wl = new Ne(), Ja = new Rs(), Qs = new dn(), er = new P();
class pd extends ct {
  constructor(e = new fn(), t = new Zc()) {
    super(), this.isPoints = true, this.type = "Points", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Qs.copy(n.boundingSphere), Qs.applyMatrix4(i), Qs.radius += r, e.ray.intersectsSphere(Qs) === false) return;
    wl.copy(i).invert(), Ja.copy(e.ray).applyMatrix4(wl);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = n.index, u = n.attributes.position;
    if (c !== null) {
      const d = Math.max(0, a.start), p = Math.min(c.count, a.start + a.count);
      for (let _ = d, g = p; _ < g; _++) {
        const m = c.getX(_);
        er.fromBufferAttribute(u, m), Rl(er, m, l, i, e, t, this);
      }
    } else {
      const d = Math.max(0, a.start), p = Math.min(u.count, a.start + a.count);
      for (let _ = d, g = p; _ < g; _++) er.fromBufferAttribute(u, _), Rl(er, _, l, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
}
function Rl(s3, e, t, n, i, r, a) {
  const o = Ja.distanceSqToPoint(s3);
  if (o < t) {
    const l = new P();
    Ja.closestPointToPoint(s3, l), l.applyMatrix4(n);
    const c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far) return;
    r.push({ distance: c, distanceToRay: Math.sqrt(o), point: l, index: e, face: null, faceIndex: null, barycoord: null, object: a });
  }
}
class Jc extends xt {
  constructor(e, t, n, i, r, a, o, l, c, h = Oi) {
    if (h !== Oi && h !== Wi) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === Oi && (n = ci), n === void 0 && h === Wi && (n = Gi), super(null, i, r, a, o, l, h, n, c), this.isDepthTexture = true, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : Pt, this.minFilter = l !== void 0 ? l : Pt, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new xo(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class Er extends fn {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: n, heightSegments: i };
    const r = e / 2, a = t / 2, o = Math.floor(n), l = Math.floor(i), c = o + 1, h = l + 1, u = e / o, d = t / l, p = [], _ = [], g = [], m = [];
    for (let f = 0; f < h; f++) {
      const T = f * d - a;
      for (let b = 0; b < c; b++) {
        const M = b * u - r;
        _.push(M, -T, 0), g.push(0, 0, 1), m.push(b / o), m.push(1 - f / l);
      }
    }
    for (let f = 0; f < l; f++) for (let T = 0; T < o; T++) {
      const b = T + c * f, M = T + c * (f + 1), L = T + 1 + c * (f + 1), R = T + 1 + c * f;
      p.push(b, M, R), p.push(M, L, R);
    }
    this.setIndex(p), this.setAttribute("position", new Rn(_, 3)), this.setAttribute("normal", new Rn(g, 3)), this.setAttribute("uv", new Rn(m, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Er(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class bo extends nn {
  constructor(e) {
    super(), this.isMeshStandardMaterial = true, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Le(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Le(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = go, this.normalScale = new we(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new hn(), this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class pn extends bo {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = true, this.defines = { STANDARD: "", PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new we(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", { get: function() {
      return Fe(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
    }, set: function(t) {
      this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
    } }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Le(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Le(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Le(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
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
class md extends nn {
  constructor(e) {
    super(), this.isMeshNormalMaterial = true, this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = go, this.normalScale = new we(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.flatShading = false, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.flatShading = e.flatShading, this;
  }
}
class _d extends nn {
  constructor(e) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = iu, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class gd extends nn {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
function tr(s3, e, t) {
  return !s3 || !t && s3.constructor === e ? s3 : typeof e.BYTES_PER_ELEMENT == "number" ? new e(s3) : Array.prototype.slice.call(s3);
}
function vd(s3) {
  return ArrayBuffer.isView(s3) && !(s3 instanceof DataView);
}
function xd(s3) {
  function e(i, r) {
    return s3[i] - s3[r];
  }
  const t = s3.length, n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function Cl(s3, e, t) {
  const n = s3.length, i = new s3.constructor(n);
  for (let r = 0, a = 0; a !== n; ++r) {
    const o = t[r] * e;
    for (let l = 0; l !== e; ++l) i[a++] = s3[o + l];
  }
  return i;
}
function Qc(s3, e, t, n) {
  let i = 1, r = s3[0];
  for (; r !== void 0 && r[n] === void 0; ) r = s3[i++];
  if (r === void 0) return;
  let a = r[n];
  if (a !== void 0) if (Array.isArray(a)) do
    a = r[n], a !== void 0 && (e.push(r.time), t.push(...a)), r = s3[i++];
  while (r !== void 0);
  else if (a.toArray !== void 0) do
    a = r[n], a !== void 0 && (e.push(r.time), a.toArray(t, t.length)), r = s3[i++];
  while (r !== void 0);
  else do
    a = r[n], a !== void 0 && (e.push(r.time), t.push(a)), r = s3[i++];
  while (r !== void 0);
}
class Cs {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], r = t[n - 1];
    n: {
      e: {
        let a;
        t: {
          i: if (!(e < i)) {
            for (let o = n + 2; ; ) {
              if (i === void 0) {
                if (e < r) break i;
                return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === o) break;
              if (r = i, i = t[++n], e < i) break e;
            }
            a = t.length;
            break t;
          }
          if (!(e >= r)) {
            const o = t[1];
            e < o && (n = 2, r = o);
            for (let l = n - 2; ; ) {
              if (r === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === l) break;
              if (i = r, r = t[--n - 1], e >= r) break e;
            }
            a = n, n = 0;
            break t;
          }
          break n;
        }
        for (; n < a; ) {
          const o = n + a >>> 1;
          e < t[o] ? a = o : n = o + 1;
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
    for (let a = 0; a !== i; ++a) t[a] = n[r + a];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class yd extends Cs {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: Yo, endingEnd: Yo };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let r = e - 2, a = e + 1, o = i[r], l = i[a];
    if (o === void 0) switch (this.getSettings_().endingStart) {
      case qo:
        r = e, o = 2 * t - n;
        break;
      case jo:
        r = i.length - 2, o = t + i[r] - i[r + 1];
        break;
      default:
        r = e, o = n;
    }
    if (l === void 0) switch (this.getSettings_().endingEnd) {
      case qo:
        a = e, l = 2 * n - t;
        break;
      case jo:
        a = 1, l = n + i[1] - i[0];
        break;
      default:
        a = e - 1, l = t;
    }
    const c = (n - t) * 0.5, h = this.valueSize;
    this._weightPrev = c / (t - o), this._weightNext = c / (l - n), this._offsetPrev = r * h, this._offsetNext = a * h;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, h = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, p = this._weightNext, _ = (n - t) / (i - t), g = _ * _, m = g * _, f = -d * m + 2 * d * g - d * _, T = (1 + d) * m + (-1.5 - 2 * d) * g + (-0.5 + d) * _ + 1, b = (-1 - p) * m + (1.5 + p) * g + 0.5 * _, M = p * m - p * g;
    for (let L = 0; L !== o; ++L) r[L] = f * a[h + L] + T * a[c + L] + b * a[l + L] + M * a[u + L];
    return r;
  }
}
class Md extends Cs {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, h = (n - t) / (i - t), u = 1 - h;
    for (let d = 0; d !== o; ++d) r[d] = a[c + d] * u + a[l + d] * h;
    return r;
  }
}
class Sd extends Cs {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class mn {
  constructor(e, t, n, i) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = tr(t, this.TimeBufferType), this.values = tr(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON) n = t.toJSON(e);
    else {
      n = { name: e.name, times: tr(e.times, Array), values: tr(e.values, Array) };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Sd(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Md(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new yd(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case Es:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case bs:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Rr:
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
        return Es;
      case this.InterpolantFactoryMethodLinear:
        return bs;
      case this.InterpolantFactoryMethodSmooth:
        return Rr;
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
    let r = 0, a = i - 1;
    for (; r !== i && n[r] < e; ) ++r;
    for (; a !== -1 && n[a] > t; ) --a;
    if (++a, r !== 0 || a !== i) {
      r >= a && (a = Math.max(a, 1), r = a - 1);
      const o = this.getValueSize();
      this.times = n.slice(r, a), this.values = this.values.slice(r * o, a * o);
    }
    return this;
  }
  validate() {
    let e = true;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = false);
    const n = this.times, i = this.values, r = n.length;
    r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = false);
    let a = null;
    for (let o = 0; o !== r; o++) {
      const l = n[o];
      if (typeof l == "number" && isNaN(l)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, l), e = false;
        break;
      }
      if (a !== null && a > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, l, a), e = false;
        break;
      }
      a = l;
    }
    if (i !== void 0 && vd(i)) for (let o = 0, l = i.length; o !== l; ++o) {
      const c = i[o];
      if (isNaN(c)) {
        console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, c), e = false;
        break;
      }
    }
    return e;
  }
  optimize() {
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === Rr, r = e.length - 1;
    let a = 1;
    for (let o = 1; o < r; ++o) {
      let l = false;
      const c = e[o], h = e[o + 1];
      if (c !== h && (o !== 1 || c !== e[0])) if (i) l = true;
      else {
        const u = o * n, d = u - n, p = u + n;
        for (let _ = 0; _ !== n; ++_) {
          const g = t[u + _];
          if (g !== t[d + _] || g !== t[p + _]) {
            l = true;
            break;
          }
        }
      }
      if (l) {
        if (o !== a) {
          e[a] = e[o];
          const u = o * n, d = a * n;
          for (let p = 0; p !== n; ++p) t[d + p] = t[u + p];
        }
        ++a;
      }
    }
    if (r > 0) {
      e[a] = e[r];
      for (let o = r * n, l = a * n, c = 0; c !== n; ++c) t[l + c] = t[o + c];
      ++a;
    }
    return a !== e.length ? (this.times = e.slice(0, a), this.values = t.slice(0, a * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = this.times.slice(), t = this.values.slice(), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
mn.prototype.TimeBufferType = Float32Array;
mn.prototype.ValueBufferType = Float32Array;
mn.prototype.DefaultInterpolation = bs;
class Zi extends mn {
  constructor(e, t, n) {
    super(e, t, n);
  }
}
Zi.prototype.ValueTypeName = "bool";
Zi.prototype.ValueBufferType = Array;
Zi.prototype.DefaultInterpolation = Es;
Zi.prototype.InterpolantFactoryMethodLinear = void 0;
Zi.prototype.InterpolantFactoryMethodSmooth = void 0;
class eh extends mn {
}
eh.prototype.ValueTypeName = "color";
class qi extends mn {
}
qi.prototype.ValueTypeName = "number";
class Ed extends Cs {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = (n - t) / (i - t);
    let c = e * o;
    for (let h = c + o; c !== h; c += 4) cn.slerpFlat(r, 0, a, c - o, a, c, l);
    return r;
  }
}
class ji extends mn {
  InterpolantFactoryMethodLinear(e) {
    return new Ed(this.times, this.values, this.getValueSize(), e);
  }
}
ji.prototype.ValueTypeName = "quaternion";
ji.prototype.InterpolantFactoryMethodSmooth = void 0;
class Ji extends mn {
  constructor(e, t, n) {
    super(e, t, n);
  }
}
Ji.prototype.ValueTypeName = "string";
Ji.prototype.ValueBufferType = Array;
Ji.prototype.DefaultInterpolation = Es;
Ji.prototype.InterpolantFactoryMethodLinear = void 0;
Ji.prototype.InterpolantFactoryMethodSmooth = void 0;
class Ki extends mn {
}
Ki.prototype.ValueTypeName = "vector";
class bd {
  constructor(e = "", t = -1, n = [], i = tu) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = tn(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a) t.push(Ad(n[a]).scale(i));
    const r = new this(e.name, e.duration, t, e.blendMode);
    return r.uuid = e.uuid, r;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, i = { name: e.name, duration: e.duration, tracks: t, uuid: e.uuid, blendMode: e.blendMode };
    for (let r = 0, a = n.length; r !== a; ++r) t.push(mn.toJSON(n[r]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const r = t.length, a = [];
    for (let o = 0; o < r; o++) {
      let l = [], c = [];
      l.push((o + r - 1) % r, o, (o + 1) % r), c.push(0, 1, 0);
      const h = xd(l);
      l = Cl(l, 1, h), c = Cl(c, 1, h), !i && l[0] === 0 && (l.push(r), c.push(c[0])), a.push(new qi(".morphTargetInfluences[" + t[o].name + "]", l, c).scale(1 / n));
    }
    return new this(e, -1, a);
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
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o], h = c.name.match(r);
      if (h && h.length > 1) {
        const u = h[1];
        let d = i[u];
        d || (i[u] = d = []), d.push(c);
      }
    }
    const a = [];
    for (const o in i) a.push(this.CreateFromMorphTargetSequence(o, i[o], t, n));
    return a;
  }
  static parseAnimation(e, t) {
    if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(u, d, p, _, g) {
      if (p.length !== 0) {
        const m = [], f = [];
        Qc(p, m, f, _), m.length !== 0 && g.push(new u(d, m, f));
      }
    }, i = [], r = e.name || "default", a = e.fps || 30, o = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let u = 0; u < c.length; u++) {
      const d = c[u].keys;
      if (!(!d || d.length === 0)) if (d[0].morphTargets) {
        const p = {};
        let _;
        for (_ = 0; _ < d.length; _++) if (d[_].morphTargets) for (let g = 0; g < d[_].morphTargets.length; g++) p[d[_].morphTargets[g]] = -1;
        for (const g in p) {
          const m = [], f = [];
          for (let T = 0; T !== d[_].morphTargets.length; ++T) {
            const b = d[_];
            m.push(b.time), f.push(b.morphTarget === g ? 1 : 0);
          }
          i.push(new qi(".morphTargetInfluence[" + g + "]", m, f));
        }
        l = p.length * a;
      } else {
        const p = ".bones[" + t[u].name + "]";
        n(Ki, p + ".position", d, "pos", i), n(ji, p + ".quaternion", d, "rot", i), n(Ki, p + ".scale", d, "scl", i);
      }
    }
    return i.length === 0 ? null : new this(r, l, i, o);
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
function Td(s3) {
  switch (s3.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return qi;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Ki;
    case "color":
      return eh;
    case "quaternion":
      return ji;
    case "bool":
    case "boolean":
      return Zi;
    case "string":
      return Ji;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + s3);
}
function Ad(s3) {
  if (s3.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = Td(s3.type);
  if (s3.times === void 0) {
    const t = [], n = [];
    Qc(s3.keys, t, n, "value"), s3.times = t, s3.values = n;
  }
  return e.parse !== void 0 ? e.parse(s3) : new e(s3.name, s3.times, s3.values, s3.interpolation);
}
const Hn = { enabled: false, files: {}, add: function(s3, e) {
  this.enabled !== false && (this.files[s3] = e);
}, get: function(s3) {
  if (this.enabled !== false) return this.files[s3];
}, remove: function(s3) {
  delete this.files[s3];
}, clear: function() {
  this.files = {};
} };
class wd {
  constructor(e, t, n) {
    const i = this;
    let r = false, a = 0, o = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      o++, r === false && i.onStart !== void 0 && i.onStart(h, a, o), r = true;
    }, this.itemEnd = function(h) {
      a++, i.onProgress !== void 0 && i.onProgress(h, a, o), a === o && (r = false, i.onLoad !== void 0 && i.onLoad());
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
        const p = c[u], _ = c[u + 1];
        if (p.global && (p.lastIndex = 0), p.test(h)) return _;
      }
      return null;
    };
  }
}
const Rd = new wd();
class Qi {
  constructor(e) {
    this.manager = e !== void 0 ? e : Rd, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {};
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
Qi.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const Sn = {};
class Cd extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class th extends Qi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = Hn.get(e);
    if (r !== void 0) return this.manager.itemStart(e), setTimeout(() => {
      t && t(r), this.manager.itemEnd(e);
    }, 0), r;
    if (Sn[e] !== void 0) {
      Sn[e].push({ onLoad: t, onProgress: n, onError: i });
      return;
    }
    Sn[e] = [], Sn[e].push({ onLoad: t, onProgress: n, onError: i });
    const a = new Request(e, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin" }), o = this.mimeType, l = this.responseType;
    fetch(a).then((c) => {
      if (c.status === 200 || c.status === 0) {
        if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0) return c;
        const h = Sn[e], u = c.body.getReader(), d = c.headers.get("X-File-Size") || c.headers.get("Content-Length"), p = d ? parseInt(d) : 0, _ = p !== 0;
        let g = 0;
        const m = new ReadableStream({ start(f) {
          T();
          function T() {
            u.read().then(({ done: b, value: M }) => {
              if (b) f.close();
              else {
                g += M.byteLength;
                const L = new ProgressEvent("progress", { lengthComputable: _, loaded: g, total: p });
                for (let R = 0, A = h.length; R < A; R++) {
                  const U = h[R];
                  U.onProgress && U.onProgress(L);
                }
                f.enqueue(M), T();
              }
            }, (b) => {
              f.error(b);
            });
          }
        } });
        return new Response(m);
      } else throw new Cd(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
    }).then((c) => {
      switch (l) {
        case "arraybuffer":
          return c.arrayBuffer();
        case "blob":
          return c.blob();
        case "document":
          return c.text().then((h) => new DOMParser().parseFromString(h, o));
        case "json":
          return c.json();
        default:
          if (o === void 0) return c.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(o), d = u && u[1] ? u[1].toLowerCase() : void 0, p = new TextDecoder(d);
            return c.arrayBuffer().then((_) => p.decode(_));
          }
      }
    }).then((c) => {
      Hn.add(e, c);
      const h = Sn[e];
      delete Sn[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const p = h[u];
        p.onLoad && p.onLoad(c);
      }
    }).catch((c) => {
      const h = Sn[e];
      if (h === void 0) throw this.manager.itemError(e), c;
      delete Sn[e];
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
class Pd extends Qi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, a = Hn.get(e);
    if (a !== void 0) return r.manager.itemStart(e), setTimeout(function() {
      t && t(a), r.manager.itemEnd(e);
    }, 0), a;
    const o = Ts("img");
    function l() {
      h(), Hn.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function c(u) {
      h(), i && i(u), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function h() {
      o.removeEventListener("load", l, false), o.removeEventListener("error", c, false);
    }
    return o.addEventListener("load", l, false), o.addEventListener("error", c, false), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), r.manager.itemStart(e), o.src = e, o;
  }
}
class Ld extends Qi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new xt(), a = new Pd(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      r.image = o, r.needsUpdate = true, t !== void 0 && t(r);
    }, n, i), r;
  }
}
class br extends ct {
  constructor(e, t = 1) {
    super(), this.isLight = true, this.type = "Light", this.color = new Le(e), this.intensity = t;
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
const Qr = new Ne(), Pl = new P(), Ll = new P();
class To {
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new we(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ne(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new So(), this._frameExtents = new we(1, 1), this._viewportCount = 1, this._viewports = [new Ke(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    Pl.setFromMatrixPosition(e.matrixWorld), t.position.copy(Pl), Ll.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Ll), t.updateMatrixWorld(), Qr.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Qr), n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), n.multiply(Qr);
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
class Dd extends To {
  constructor() {
    super(new Ct(50, 1, 0.5, 500)), this.isSpotLightShadow = true, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = Xi * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, r = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class Id extends br {
  constructor(e, t, n = 0, i = Math.PI / 3, r = 0, a = 2) {
    super(e, t), this.isSpotLight = true, this.type = "SpotLight", this.position.copy(ct.DEFAULT_UP), this.updateMatrix(), this.target = new ct(), this.distance = n, this.angle = i, this.penumbra = r, this.decay = a, this.map = null, this.shadow = new Dd();
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
const Dl = new Ne(), cs = new P(), ea = new P();
class Nd extends To {
  constructor() {
    super(new Ct(90, 1, 0.5, 500)), this.isPointLightShadow = true, this._frameExtents = new we(4, 2), this._viewportCount = 6, this._viewports = [new Ke(2, 1, 1, 1), new Ke(0, 1, 1, 1), new Ke(3, 1, 1, 1), new Ke(1, 1, 1, 1), new Ke(3, 0, 1, 1), new Ke(1, 0, 1, 1)], this._cubeDirections = [new P(1, 0, 0), new P(-1, 0, 0), new P(0, 0, 1), new P(0, 0, -1), new P(0, 1, 0), new P(0, -1, 0)], this._cubeUps = [new P(0, 1, 0), new P(0, 1, 0), new P(0, 1, 0), new P(0, 1, 0), new P(0, 0, 1), new P(0, 0, -1)];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, r = e.distance || n.far;
    r !== n.far && (n.far = r, n.updateProjectionMatrix()), cs.setFromMatrixPosition(e.matrixWorld), n.position.copy(cs), ea.copy(n.position), ea.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(ea), n.updateMatrixWorld(), i.makeTranslation(-cs.x, -cs.y, -cs.z), Dl.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Dl);
  }
}
class Ud extends br {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = true, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new Nd();
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
class Ao extends Yc {
  constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = r, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, r, a) {
    this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let r = n - e, a = n + e, o = i + t, l = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += c * this.view.offsetX, a = r + c * this.view.width, o -= h * this.view.offsetY, l = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, a, o, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
class Od extends To {
  constructor() {
    super(new Ao(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
  }
}
class nh extends br {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(ct.DEFAULT_UP), this.updateMatrix(), this.target = new ct(), this.shadow = new Od();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class Fd extends br {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = true, this.type = "AmbientLight";
  }
}
class vs {
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
class Bd extends Qi {
  constructor(e) {
    super(e), this.isImageBitmapLoader = true, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, a = Hn.get(e);
    if (a !== void 0) {
      if (r.manager.itemStart(e), a.then) {
        a.then((c) => {
          t && t(c), r.manager.itemEnd(e);
        }).catch((c) => {
          i && i(c);
        });
        return;
      }
      return setTimeout(function() {
        t && t(a), r.manager.itemEnd(e);
      }, 0), a;
    }
    const o = {};
    o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader;
    const l = fetch(e, o).then(function(c) {
      return c.blob();
    }).then(function(c) {
      return createImageBitmap(c, Object.assign(r.options, { colorSpaceConversion: "none" }));
    }).then(function(c) {
      return Hn.add(e, c), t && t(c), r.manager.itemEnd(e), c;
    }).catch(function(c) {
      i && i(c), Hn.remove(e), r.manager.itemError(e), r.manager.itemEnd(e);
    });
    Hn.add(e, l), r.manager.itemStart(e);
  }
}
class kd extends Ct {
  constructor(e = []) {
    super(), this.isArrayCamera = true, this.cameras = e, this.index = 0;
  }
}
const wo = "\\[\\]\\.:\\/", zd = new RegExp("[" + wo + "]", "g"), Ro = "[^" + wo + "]", Hd = "[^" + wo.replace("\\.", "") + "]", Vd = /((?:WC+[\/:])*)/.source.replace("WC", Ro), Gd = /(WCOD+)?/.source.replace("WCOD", Hd), Wd = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Ro), Xd = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Ro), Yd = new RegExp("^" + Vd + Gd + Wd + Xd + "$"), qd = ["material", "materials", "bones", "map"];
class jd {
  constructor(e, t, n) {
    const i = n || et.parseTrackName(t);
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
class et {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || et.parseTrackName(t), this.node = et.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new et.Composite(e, t, n) : new et(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(zd, "");
  }
  static parseTrackName(e) {
    const t = Yd.exec(e);
    if (t === null) throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = { nodeName: t[2], objectName: t[3], objectIndex: t[4], propertyName: t[5], propertyIndex: t[6] }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const r = n.nodeName.substring(i + 1);
      qd.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r);
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
        for (let a = 0; a < r.length; a++) {
          const o = r[a];
          if (o.name === t || o.uuid === t) return o;
          const l = n(o.children);
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
    if (e || (e = et.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
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
    const a = e[i];
    if (a === void 0) {
      const c = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", e);
      return;
    }
    let o = this.Versioning.None;
    this.targetObject = e, e.isMaterial === true ? o = this.Versioning.NeedsUpdate : e.isObject3D === true && (o = this.Versioning.MatrixWorldNeedsUpdate);
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
      l = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = r;
    } else a.fromArray !== void 0 && a.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (l = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][o];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
et.Composite = jd;
et.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 };
et.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 };
et.prototype.GetterByBindingType = [et.prototype._getValue_direct, et.prototype._getValue_array, et.prototype._getValue_arrayElement, et.prototype._getValue_toArray];
et.prototype.SetterByBindingTypeAndVersioning = [[et.prototype._setValue_direct, et.prototype._setValue_direct_setNeedsUpdate, et.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [et.prototype._setValue_array, et.prototype._setValue_array_setNeedsUpdate, et.prototype._setValue_array_setMatrixWorldNeedsUpdate], [et.prototype._setValue_arrayElement, et.prototype._setValue_arrayElement_setNeedsUpdate, et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [et.prototype._setValue_fromArray, et.prototype._setValue_fromArray_setNeedsUpdate, et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
class Il {
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
    return this.phi = Fe(this.phi, 1e-6, Math.PI - 1e-6), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(Fe(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Kd extends ui {
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
function Nl(s3, e, t, n) {
  const i = $d(n);
  switch (t) {
    case Pc:
      return s3 * e;
    case Dc:
      return s3 * e;
    case Ic:
      return s3 * e * 2;
    case fo:
      return s3 * e / i.components * i.byteLength;
    case po:
      return s3 * e / i.components * i.byteLength;
    case Nc:
      return s3 * e * 2 / i.components * i.byteLength;
    case mo:
      return s3 * e * 2 / i.components * i.byteLength;
    case Lc:
      return s3 * e * 3 / i.components * i.byteLength;
    case Yt:
      return s3 * e * 4 / i.components * i.byteLength;
    case _o:
      return s3 * e * 4 / i.components * i.byteLength;
    case cr:
    case hr:
      return Math.floor((s3 + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case ur:
    case dr:
      return Math.floor((s3 + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case ba:
    case Aa:
      return Math.max(s3, 16) * Math.max(e, 8) / 4;
    case Ea:
    case Ta:
      return Math.max(s3, 8) * Math.max(e, 8) / 2;
    case wa:
    case Ra:
      return Math.floor((s3 + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Ca:
      return Math.floor((s3 + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Pa:
      return Math.floor((s3 + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case La:
      return Math.floor((s3 + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case Da:
      return Math.floor((s3 + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Ia:
      return Math.floor((s3 + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case Na:
      return Math.floor((s3 + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Ua:
      return Math.floor((s3 + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Oa:
      return Math.floor((s3 + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Fa:
      return Math.floor((s3 + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Ba:
      return Math.floor((s3 + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case ka:
      return Math.floor((s3 + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case za:
      return Math.floor((s3 + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Ha:
      return Math.floor((s3 + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case Va:
      return Math.floor((s3 + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case Ga:
      return Math.floor((s3 + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case fr:
    case Wa:
    case Xa:
      return Math.ceil(s3 / 4) * Math.ceil(e / 4) * 16;
    case Uc:
    case Ya:
      return Math.ceil(s3 / 4) * Math.ceil(e / 4) * 8;
    case qa:
    case ja:
      return Math.ceil(s3 / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function $d(s3) {
  switch (s3) {
    case Pn:
    case wc:
      return { byteLength: 1, components: 1 };
    case Ss:
    case Rc:
    case ws:
      return { byteLength: 2, components: 1 };
    case ho:
    case uo:
      return { byteLength: 2, components: 4 };
    case ci:
    case co:
    case en:
      return { byteLength: 4, components: 1 };
    case Cc:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${s3}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: lo } }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = lo);
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function ih() {
  let s3 = null, e = false, t = null, n = null;
  function i(r, a) {
    t(r, a), n = s3.requestAnimationFrame(i);
  }
  return { start: function() {
    e !== true && t !== null && (n = s3.requestAnimationFrame(i), e = true);
  }, stop: function() {
    s3.cancelAnimationFrame(n), e = false;
  }, setAnimationLoop: function(r) {
    t = r;
  }, setContext: function(r) {
    s3 = r;
  } };
}
function Zd(s3) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, l) {
    const c = o.array, h = o.usage, u = c.byteLength, d = s3.createBuffer();
    s3.bindBuffer(l, d), s3.bufferData(l, c, h), o.onUploadCallback();
    let p;
    if (c instanceof Float32Array) p = s3.FLOAT;
    else if (c instanceof Uint16Array) o.isFloat16BufferAttribute ? p = s3.HALF_FLOAT : p = s3.UNSIGNED_SHORT;
    else if (c instanceof Int16Array) p = s3.SHORT;
    else if (c instanceof Uint32Array) p = s3.UNSIGNED_INT;
    else if (c instanceof Int32Array) p = s3.INT;
    else if (c instanceof Int8Array) p = s3.BYTE;
    else if (c instanceof Uint8Array) p = s3.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) p = s3.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return { buffer: d, type: p, bytesPerElement: c.BYTES_PER_ELEMENT, version: o.version, size: u };
  }
  function n(o, l, c) {
    const h = l.array, u = l.updateRanges;
    if (s3.bindBuffer(c, o), u.length === 0) s3.bufferSubData(c, 0, h);
    else {
      u.sort((p, _) => p.start - _.start);
      let d = 0;
      for (let p = 1; p < u.length; p++) {
        const _ = u[d], g = u[p];
        g.start <= _.start + _.count + 1 ? _.count = Math.max(_.count, g.start + g.count - _.start) : (++d, u[d] = g);
      }
      u.length = d + 1;
      for (let p = 0, _ = u.length; p < _; p++) {
        const g = u[p];
        s3.bufferSubData(c, g.start * h.BYTES_PER_ELEMENT, h, g.start, g.count);
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function i(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function r(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = e.get(o);
    l && (s3.deleteBuffer(l.buffer), e.delete(o));
  }
  function a(o, l) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const h = e.get(o);
      (!h || h.version < o.version) && e.set(o, { buffer: o.buffer, type: o.type, bytesPerElement: o.elementSize, version: o.version });
      return;
    }
    const c = e.get(o);
    if (c === void 0) e.set(o, t(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, o, l), c.version = o.version;
    }
  }
  return { get: i, remove: r, update: a };
}
var Jd = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Qd = `#ifdef USE_ALPHAHASH
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
#endif`, ef = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, tf = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, nf = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, sf = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, rf = `#ifdef USE_AOMAP
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
#endif`, af = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, of = `#ifdef USE_BATCHING
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
#endif`, lf = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, cf = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, hf = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, uf = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, df = `#ifdef USE_IRIDESCENCE
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
#endif`, ff = `#ifdef USE_BUMPMAP
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
#endif`, pf = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, mf = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, _f = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, gf = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, vf = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, xf = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, yf = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Mf = `#if defined( USE_COLOR_ALPHA )
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
#endif`, Sf = `#define PI 3.141592653589793
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
} // validated`, Ef = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, bf = `vec3 transformedNormal = objectNormal;
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
#endif`, Tf = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Af = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, wf = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Rf = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Cf = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Pf = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Lf = `#ifdef USE_ENVMAP
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
#endif`, Df = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, If = `#ifdef USE_ENVMAP
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
#endif`, Nf = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Uf = `#ifdef USE_ENVMAP
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
#endif`, Of = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Ff = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Bf = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, kf = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, zf = `#ifdef USE_GRADIENTMAP
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
}`, Hf = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Vf = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Gf = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Wf = `uniform bool receiveShadow;
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
#endif`, Xf = `#ifdef USE_ENVMAP
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
#endif`, Yf = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, qf = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, jf = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Kf = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, $f = `PhysicalMaterial material;
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
#endif`, Zf = `struct PhysicalMaterial {
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
}`, Jf = `
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
#endif`, Qf = `#if defined( RE_IndirectDiffuse )
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
#endif`, ep = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, tp = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, np = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, ip = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, sp = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, rp = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, ap = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, op = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, lp = `#if defined( USE_POINTS_UV )
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
#endif`, cp = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, hp = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, up = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, dp = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, fp = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, pp = `#ifdef USE_MORPHTARGETS
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
#endif`, mp = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, _p = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, gp = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, vp = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, xp = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, yp = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Mp = `#ifdef USE_NORMALMAP
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
#endif`, Sp = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Ep = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, bp = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Tp = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Ap = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, wp = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, Rp = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Cp = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Pp = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Lp = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Dp = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Ip = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Np = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, Up = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, Op = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, Fp = `float getShadowMask() {
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
}`, Bp = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, kp = `#ifdef USE_SKINNING
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
#endif`, zp = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Hp = `#ifdef USE_SKINNING
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
#endif`, Vp = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Gp = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Wp = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Xp = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, Yp = `#ifdef USE_TRANSMISSION
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
#endif`, qp = `#ifdef USE_TRANSMISSION
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
#endif`, jp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Kp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, $p = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Zp = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Jp = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Qp = `uniform sampler2D t2D;
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
}`, em = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, tm = `#ifdef ENVMAP_TYPE_CUBE
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
}`, nm = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, im = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, sm = `#include <common>
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
}`, rm = `#if DEPTH_PACKING == 3200
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
}`, am = `#define DISTANCE
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
}`, om = `#define DISTANCE
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
}`, lm = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, cm = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, hm = `uniform float scale;
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
}`, um = `uniform vec3 diffuse;
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
}`, dm = `#include <common>
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
}`, fm = `uniform vec3 diffuse;
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
}`, pm = `#define LAMBERT
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
}`, mm = `#define LAMBERT
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
}`, _m = `#define MATCAP
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
}`, gm = `#define MATCAP
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
}`, vm = `#define NORMAL
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
}`, xm = `#define NORMAL
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
}`, ym = `#define PHONG
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
}`, Mm = `#define PHONG
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
}`, Sm = `#define STANDARD
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
}`, Em = `#define STANDARD
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
}`, bm = `#define TOON
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
}`, Tm = `#define TOON
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
}`, Am = `uniform float size;
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
}`, wm = `uniform vec3 diffuse;
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
}`, Rm = `#include <common>
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
}`, Cm = `uniform vec3 color;
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
}`, Pm = `uniform float rotation;
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
}`, Lm = `uniform vec3 diffuse;
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
}`, Oe = { alphahash_fragment: Jd, alphahash_pars_fragment: Qd, alphamap_fragment: ef, alphamap_pars_fragment: tf, alphatest_fragment: nf, alphatest_pars_fragment: sf, aomap_fragment: rf, aomap_pars_fragment: af, batching_pars_vertex: of, batching_vertex: lf, begin_vertex: cf, beginnormal_vertex: hf, bsdfs: uf, iridescence_fragment: df, bumpmap_pars_fragment: ff, clipping_planes_fragment: pf, clipping_planes_pars_fragment: mf, clipping_planes_pars_vertex: _f, clipping_planes_vertex: gf, color_fragment: vf, color_pars_fragment: xf, color_pars_vertex: yf, color_vertex: Mf, common: Sf, cube_uv_reflection_fragment: Ef, defaultnormal_vertex: bf, displacementmap_pars_vertex: Tf, displacementmap_vertex: Af, emissivemap_fragment: wf, emissivemap_pars_fragment: Rf, colorspace_fragment: Cf, colorspace_pars_fragment: Pf, envmap_fragment: Lf, envmap_common_pars_fragment: Df, envmap_pars_fragment: If, envmap_pars_vertex: Nf, envmap_physical_pars_fragment: Xf, envmap_vertex: Uf, fog_vertex: Of, fog_pars_vertex: Ff, fog_fragment: Bf, fog_pars_fragment: kf, gradientmap_pars_fragment: zf, lightmap_pars_fragment: Hf, lights_lambert_fragment: Vf, lights_lambert_pars_fragment: Gf, lights_pars_begin: Wf, lights_toon_fragment: Yf, lights_toon_pars_fragment: qf, lights_phong_fragment: jf, lights_phong_pars_fragment: Kf, lights_physical_fragment: $f, lights_physical_pars_fragment: Zf, lights_fragment_begin: Jf, lights_fragment_maps: Qf, lights_fragment_end: ep, logdepthbuf_fragment: tp, logdepthbuf_pars_fragment: np, logdepthbuf_pars_vertex: ip, logdepthbuf_vertex: sp, map_fragment: rp, map_pars_fragment: ap, map_particle_fragment: op, map_particle_pars_fragment: lp, metalnessmap_fragment: cp, metalnessmap_pars_fragment: hp, morphinstance_vertex: up, morphcolor_vertex: dp, morphnormal_vertex: fp, morphtarget_pars_vertex: pp, morphtarget_vertex: mp, normal_fragment_begin: _p, normal_fragment_maps: gp, normal_pars_fragment: vp, normal_pars_vertex: xp, normal_vertex: yp, normalmap_pars_fragment: Mp, clearcoat_normal_fragment_begin: Sp, clearcoat_normal_fragment_maps: Ep, clearcoat_pars_fragment: bp, iridescence_pars_fragment: Tp, opaque_fragment: Ap, packing: wp, premultiplied_alpha_fragment: Rp, project_vertex: Cp, dithering_fragment: Pp, dithering_pars_fragment: Lp, roughnessmap_fragment: Dp, roughnessmap_pars_fragment: Ip, shadowmap_pars_fragment: Np, shadowmap_pars_vertex: Up, shadowmap_vertex: Op, shadowmask_pars_fragment: Fp, skinbase_vertex: Bp, skinning_pars_vertex: kp, skinning_vertex: zp, skinnormal_vertex: Hp, specularmap_fragment: Vp, specularmap_pars_fragment: Gp, tonemapping_fragment: Wp, tonemapping_pars_fragment: Xp, transmission_fragment: Yp, transmission_pars_fragment: qp, uv_pars_fragment: jp, uv_pars_vertex: Kp, uv_vertex: $p, worldpos_vertex: Zp, background_vert: Jp, background_frag: Qp, backgroundCube_vert: em, backgroundCube_frag: tm, cube_vert: nm, cube_frag: im, depth_vert: sm, depth_frag: rm, distanceRGBA_vert: am, distanceRGBA_frag: om, equirect_vert: lm, equirect_frag: cm, linedashed_vert: hm, linedashed_frag: um, meshbasic_vert: dm, meshbasic_frag: fm, meshlambert_vert: pm, meshlambert_frag: mm, meshmatcap_vert: _m, meshmatcap_frag: gm, meshnormal_vert: vm, meshnormal_frag: xm, meshphong_vert: ym, meshphong_frag: Mm, meshphysical_vert: Sm, meshphysical_frag: Em, meshtoon_vert: bm, meshtoon_frag: Tm, points_vert: Am, points_frag: wm, shadow_vert: Rm, shadow_frag: Cm, sprite_vert: Pm, sprite_frag: Lm }, ie = { common: { diffuse: { value: new Le(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Ie() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ie() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Ie() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Ie() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Ie() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Ie() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Ie() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Ie() }, normalScale: { value: new we(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Ie() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Ie() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Ie() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Ie() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Le(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Le(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Ie() }, alphaTest: { value: 0 }, uvTransform: { value: new Ie() } }, sprite: { diffuse: { value: new Le(16777215) }, opacity: { value: 1 }, center: { value: new we(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Ie() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ie() }, alphaTest: { value: 0 } } }, on = { basic: { uniforms: Rt([ie.common, ie.specularmap, ie.envmap, ie.aomap, ie.lightmap, ie.fog]), vertexShader: Oe.meshbasic_vert, fragmentShader: Oe.meshbasic_frag }, lambert: { uniforms: Rt([ie.common, ie.specularmap, ie.envmap, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.fog, ie.lights, { emissive: { value: new Le(0) } }]), vertexShader: Oe.meshlambert_vert, fragmentShader: Oe.meshlambert_frag }, phong: { uniforms: Rt([ie.common, ie.specularmap, ie.envmap, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.fog, ie.lights, { emissive: { value: new Le(0) }, specular: { value: new Le(1118481) }, shininess: { value: 30 } }]), vertexShader: Oe.meshphong_vert, fragmentShader: Oe.meshphong_frag }, standard: { uniforms: Rt([ie.common, ie.envmap, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.roughnessmap, ie.metalnessmap, ie.fog, ie.lights, { emissive: { value: new Le(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Oe.meshphysical_vert, fragmentShader: Oe.meshphysical_frag }, toon: { uniforms: Rt([ie.common, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.gradientmap, ie.fog, ie.lights, { emissive: { value: new Le(0) } }]), vertexShader: Oe.meshtoon_vert, fragmentShader: Oe.meshtoon_frag }, matcap: { uniforms: Rt([ie.common, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.fog, { matcap: { value: null } }]), vertexShader: Oe.meshmatcap_vert, fragmentShader: Oe.meshmatcap_frag }, points: { uniforms: Rt([ie.points, ie.fog]), vertexShader: Oe.points_vert, fragmentShader: Oe.points_frag }, dashed: { uniforms: Rt([ie.common, ie.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Oe.linedashed_vert, fragmentShader: Oe.linedashed_frag }, depth: { uniforms: Rt([ie.common, ie.displacementmap]), vertexShader: Oe.depth_vert, fragmentShader: Oe.depth_frag }, normal: { uniforms: Rt([ie.common, ie.bumpmap, ie.normalmap, ie.displacementmap, { opacity: { value: 1 } }]), vertexShader: Oe.meshnormal_vert, fragmentShader: Oe.meshnormal_frag }, sprite: { uniforms: Rt([ie.sprite, ie.fog]), vertexShader: Oe.sprite_vert, fragmentShader: Oe.sprite_frag }, background: { uniforms: { uvTransform: { value: new Ie() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Oe.background_vert, fragmentShader: Oe.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Ie() } }, vertexShader: Oe.backgroundCube_vert, fragmentShader: Oe.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Oe.cube_vert, fragmentShader: Oe.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Oe.equirect_vert, fragmentShader: Oe.equirect_frag }, distanceRGBA: { uniforms: Rt([ie.common, ie.displacementmap, { referencePosition: { value: new P() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Oe.distanceRGBA_vert, fragmentShader: Oe.distanceRGBA_frag }, shadow: { uniforms: Rt([ie.lights, ie.fog, { color: { value: new Le(0) }, opacity: { value: 1 } }]), vertexShader: Oe.shadow_vert, fragmentShader: Oe.shadow_frag } };
on.physical = { uniforms: Rt([on.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Ie() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Ie() }, clearcoatNormalScale: { value: new we(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Ie() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Ie() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Ie() }, sheen: { value: 0 }, sheenColor: { value: new Le(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Ie() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Ie() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Ie() }, transmissionSamplerSize: { value: new we() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Ie() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Le(0) }, specularColor: { value: new Le(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Ie() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Ie() }, anisotropyVector: { value: new we() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Ie() } }]), vertexShader: Oe.meshphysical_vert, fragmentShader: Oe.meshphysical_frag };
const nr = { r: 0, b: 0, g: 0 }, ei = new hn(), Dm = new Ne();
function Im(s3, e, t, n, i, r, a) {
  const o = new Le(0);
  let l = r === true ? 0 : 1, c, h, u = null, d = 0, p = null;
  function _(b) {
    let M = b.isScene === true ? b.background : null;
    return M && M.isTexture && (M = (b.backgroundBlurriness > 0 ? t : e).get(M)), M;
  }
  function g(b) {
    let M = false;
    const L = _(b);
    L === null ? f(o, l) : L && L.isColor && (f(L, 1), M = true);
    const R = s3.xr.getEnvironmentBlendMode();
    R === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : R === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (s3.autoClear || M) && (n.buffers.depth.setTest(true), n.buffers.depth.setMask(true), n.buffers.color.setMask(true), s3.clear(s3.autoClearColor, s3.autoClearDepth, s3.autoClearStencil));
  }
  function m(b, M) {
    const L = _(M);
    L && (L.isCubeTexture || L.mapping === Sr) ? (h === void 0 && (h = new Ut(new $i(1, 1, 1), new Wn({ name: "BackgroundCubeMaterial", uniforms: Yi(on.backgroundCube.uniforms), vertexShader: on.backgroundCube.vertexShader, fragmentShader: on.backgroundCube.fragmentShader, side: Ot, depthTest: false, depthWrite: false, fog: false })), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(R, A, U) {
      this.matrixWorld.copyPosition(U.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), i.update(h)), ei.copy(M.backgroundRotation), ei.x *= -1, ei.y *= -1, ei.z *= -1, L.isCubeTexture && L.isRenderTargetTexture === false && (ei.y *= -1, ei.z *= -1), h.material.uniforms.envMap.value = L, h.material.uniforms.flipEnvMap.value = L.isCubeTexture && L.isRenderTargetTexture === false ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = M.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = M.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(Dm.makeRotationFromEuler(ei)), h.material.toneMapped = We.getTransfer(L.colorSpace) !== tt, (u !== L || d !== L.version || p !== s3.toneMapping) && (h.material.needsUpdate = true, u = L, d = L.version, p = s3.toneMapping), h.layers.enableAll(), b.unshift(h, h.geometry, h.material, 0, 0, null)) : L && L.isTexture && (c === void 0 && (c = new Ut(new Er(2, 2), new Wn({ name: "BackgroundMaterial", uniforms: Yi(on.background.uniforms), vertexShader: on.background.vertexShader, fragmentShader: on.background.fragmentShader, side: Cn, depthTest: false, depthWrite: false, fog: false })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), i.update(c)), c.material.uniforms.t2D.value = L, c.material.uniforms.backgroundIntensity.value = M.backgroundIntensity, c.material.toneMapped = We.getTransfer(L.colorSpace) !== tt, L.matrixAutoUpdate === true && L.updateMatrix(), c.material.uniforms.uvTransform.value.copy(L.matrix), (u !== L || d !== L.version || p !== s3.toneMapping) && (c.material.needsUpdate = true, u = L, d = L.version, p = s3.toneMapping), c.layers.enableAll(), b.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function f(b, M) {
    b.getRGB(nr, Xc(s3)), n.buffers.color.setClear(nr.r, nr.g, nr.b, M, a);
  }
  function T() {
    h !== void 0 && (h.geometry.dispose(), h.material.dispose(), h = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
  }
  return { getClearColor: function() {
    return o;
  }, setClearColor: function(b, M = 1) {
    o.set(b), l = M, f(o, l);
  }, getClearAlpha: function() {
    return l;
  }, setClearAlpha: function(b) {
    l = b, f(o, l);
  }, render: g, addToRenderList: m, dispose: T };
}
function Nm(s3, e) {
  const t = s3.getParameter(s3.MAX_VERTEX_ATTRIBS), n = {}, i = d(null);
  let r = i, a = false;
  function o(y, C, W, z, $) {
    let Z = false;
    const q = u(z, W, C);
    r !== q && (r = q, c(r.object)), Z = p(y, z, W, $), Z && _(y, z, W, $), $ !== null && e.update($, s3.ELEMENT_ARRAY_BUFFER), (Z || a) && (a = false, M(y, C, W, z), $ !== null && s3.bindBuffer(s3.ELEMENT_ARRAY_BUFFER, e.get($).buffer));
  }
  function l() {
    return s3.createVertexArray();
  }
  function c(y) {
    return s3.bindVertexArray(y);
  }
  function h(y) {
    return s3.deleteVertexArray(y);
  }
  function u(y, C, W) {
    const z = W.wireframe === true;
    let $ = n[y.id];
    $ === void 0 && ($ = {}, n[y.id] = $);
    let Z = $[C.id];
    Z === void 0 && (Z = {}, $[C.id] = Z);
    let q = Z[z];
    return q === void 0 && (q = d(l()), Z[z] = q), q;
  }
  function d(y) {
    const C = [], W = [], z = [];
    for (let $ = 0; $ < t; $++) C[$] = 0, W[$] = 0, z[$] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: C, enabledAttributes: W, attributeDivisors: z, object: y, attributes: {}, index: null };
  }
  function p(y, C, W, z) {
    const $ = r.attributes, Z = C.attributes;
    let q = 0;
    const Q = W.getAttributes();
    for (const V in Q) if (Q[V].location >= 0) {
      const de = $[V];
      let ye = Z[V];
      if (ye === void 0 && (V === "instanceMatrix" && y.instanceMatrix && (ye = y.instanceMatrix), V === "instanceColor" && y.instanceColor && (ye = y.instanceColor)), de === void 0 || de.attribute !== ye || ye && de.data !== ye.data) return true;
      q++;
    }
    return r.attributesNum !== q || r.index !== z;
  }
  function _(y, C, W, z) {
    const $ = {}, Z = C.attributes;
    let q = 0;
    const Q = W.getAttributes();
    for (const V in Q) if (Q[V].location >= 0) {
      let de = Z[V];
      de === void 0 && (V === "instanceMatrix" && y.instanceMatrix && (de = y.instanceMatrix), V === "instanceColor" && y.instanceColor && (de = y.instanceColor));
      const ye = {};
      ye.attribute = de, de && de.data && (ye.data = de.data), $[V] = ye, q++;
    }
    r.attributes = $, r.attributesNum = q, r.index = z;
  }
  function g() {
    const y = r.newAttributes;
    for (let C = 0, W = y.length; C < W; C++) y[C] = 0;
  }
  function m(y) {
    f(y, 0);
  }
  function f(y, C) {
    const W = r.newAttributes, z = r.enabledAttributes, $ = r.attributeDivisors;
    W[y] = 1, z[y] === 0 && (s3.enableVertexAttribArray(y), z[y] = 1), $[y] !== C && (s3.vertexAttribDivisor(y, C), $[y] = C);
  }
  function T() {
    const y = r.newAttributes, C = r.enabledAttributes;
    for (let W = 0, z = C.length; W < z; W++) C[W] !== y[W] && (s3.disableVertexAttribArray(W), C[W] = 0);
  }
  function b(y, C, W, z, $, Z, q) {
    q === true ? s3.vertexAttribIPointer(y, C, W, $, Z) : s3.vertexAttribPointer(y, C, W, z, $, Z);
  }
  function M(y, C, W, z) {
    g();
    const $ = z.attributes, Z = W.getAttributes(), q = C.defaultAttributeValues;
    for (const Q in Z) {
      const V = Z[Q];
      if (V.location >= 0) {
        let ae = $[Q];
        if (ae === void 0 && (Q === "instanceMatrix" && y.instanceMatrix && (ae = y.instanceMatrix), Q === "instanceColor" && y.instanceColor && (ae = y.instanceColor)), ae !== void 0) {
          const de = ae.normalized, ye = ae.itemSize, Be = e.get(ae);
          if (Be === void 0) continue;
          const it = Be.buffer, X = Be.type, ne = Be.bytesPerElement, ge = X === s3.INT || X === s3.UNSIGNED_INT || ae.gpuType === co;
          if (ae.isInterleavedBufferAttribute) {
            const oe = ae.data, be = oe.stride, je = ae.offset;
            if (oe.isInstancedInterleavedBuffer) {
              for (let Ae = 0; Ae < V.locationSize; Ae++) f(V.location + Ae, oe.meshPerAttribute);
              y.isInstancedMesh !== true && z._maxInstanceCount === void 0 && (z._maxInstanceCount = oe.meshPerAttribute * oe.count);
            } else for (let Ae = 0; Ae < V.locationSize; Ae++) m(V.location + Ae);
            s3.bindBuffer(s3.ARRAY_BUFFER, it);
            for (let Ae = 0; Ae < V.locationSize; Ae++) b(V.location + Ae, ye / V.locationSize, X, de, be * ne, (je + ye / V.locationSize * Ae) * ne, ge);
          } else {
            if (ae.isInstancedBufferAttribute) {
              for (let oe = 0; oe < V.locationSize; oe++) f(V.location + oe, ae.meshPerAttribute);
              y.isInstancedMesh !== true && z._maxInstanceCount === void 0 && (z._maxInstanceCount = ae.meshPerAttribute * ae.count);
            } else for (let oe = 0; oe < V.locationSize; oe++) m(V.location + oe);
            s3.bindBuffer(s3.ARRAY_BUFFER, it);
            for (let oe = 0; oe < V.locationSize; oe++) b(V.location + oe, ye / V.locationSize, X, de, ye * ne, ye / V.locationSize * oe * ne, ge);
          }
        } else if (q !== void 0) {
          const de = q[Q];
          if (de !== void 0) switch (de.length) {
            case 2:
              s3.vertexAttrib2fv(V.location, de);
              break;
            case 3:
              s3.vertexAttrib3fv(V.location, de);
              break;
            case 4:
              s3.vertexAttrib4fv(V.location, de);
              break;
            default:
              s3.vertexAttrib1fv(V.location, de);
          }
        }
      }
    }
    T();
  }
  function L() {
    U();
    for (const y in n) {
      const C = n[y];
      for (const W in C) {
        const z = C[W];
        for (const $ in z) h(z[$].object), delete z[$];
        delete C[W];
      }
      delete n[y];
    }
  }
  function R(y) {
    if (n[y.id] === void 0) return;
    const C = n[y.id];
    for (const W in C) {
      const z = C[W];
      for (const $ in z) h(z[$].object), delete z[$];
      delete C[W];
    }
    delete n[y.id];
  }
  function A(y) {
    for (const C in n) {
      const W = n[C];
      if (W[y.id] === void 0) continue;
      const z = W[y.id];
      for (const $ in z) h(z[$].object), delete z[$];
      delete W[y.id];
    }
  }
  function U() {
    S(), a = true, r !== i && (r = i, c(r.object));
  }
  function S() {
    i.geometry = null, i.program = null, i.wireframe = false;
  }
  return { setup: o, reset: U, resetDefaultState: S, dispose: L, releaseStatesOfGeometry: R, releaseStatesOfProgram: A, initAttributes: g, enableAttribute: m, disableUnusedAttributes: T };
}
function Um(s3, e, t) {
  let n;
  function i(c) {
    n = c;
  }
  function r(c, h) {
    s3.drawArrays(n, c, h), t.update(h, n, 1);
  }
  function a(c, h, u) {
    u !== 0 && (s3.drawArraysInstanced(n, c, h, u), t.update(h, n, u));
  }
  function o(c, h, u) {
    if (u === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, h, 0, u);
    let p = 0;
    for (let _ = 0; _ < u; _++) p += h[_];
    t.update(p, n, 1);
  }
  function l(c, h, u, d) {
    if (u === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null) for (let _ = 0; _ < c.length; _++) a(c[_], h[_], d[_]);
    else {
      p.multiDrawArraysInstancedWEBGL(n, c, 0, h, 0, d, 0, u);
      let _ = 0;
      for (let g = 0; g < u; g++) _ += h[g] * d[g];
      t.update(_, n, 1);
    }
  }
  this.setMode = i, this.render = r, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l;
}
function Om(s3, e, t, n) {
  let i;
  function r() {
    if (i !== void 0) return i;
    if (e.has("EXT_texture_filter_anisotropic") === true) {
      const A = e.get("EXT_texture_filter_anisotropic");
      i = s3.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else i = 0;
    return i;
  }
  function a(A) {
    return !(A !== Yt && n.convert(A) !== s3.getParameter(s3.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(A) {
    const U = A === ws && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(A !== Pn && n.convert(A) !== s3.getParameter(s3.IMPLEMENTATION_COLOR_READ_TYPE) && A !== en && !U);
  }
  function l(A) {
    if (A === "highp") {
      if (s3.getShaderPrecisionFormat(s3.VERTEX_SHADER, s3.HIGH_FLOAT).precision > 0 && s3.getShaderPrecisionFormat(s3.FRAGMENT_SHADER, s3.HIGH_FLOAT).precision > 0) return "highp";
      A = "mediump";
    }
    return A === "mediump" && s3.getShaderPrecisionFormat(s3.VERTEX_SHADER, s3.MEDIUM_FLOAT).precision > 0 && s3.getShaderPrecisionFormat(s3.FRAGMENT_SHADER, s3.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const h = l(c);
  h !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", h, "instead."), c = h);
  const u = t.logarithmicDepthBuffer === true, d = t.reverseDepthBuffer === true && e.has("EXT_clip_control"), p = s3.getParameter(s3.MAX_TEXTURE_IMAGE_UNITS), _ = s3.getParameter(s3.MAX_VERTEX_TEXTURE_IMAGE_UNITS), g = s3.getParameter(s3.MAX_TEXTURE_SIZE), m = s3.getParameter(s3.MAX_CUBE_MAP_TEXTURE_SIZE), f = s3.getParameter(s3.MAX_VERTEX_ATTRIBS), T = s3.getParameter(s3.MAX_VERTEX_UNIFORM_VECTORS), b = s3.getParameter(s3.MAX_VARYING_VECTORS), M = s3.getParameter(s3.MAX_FRAGMENT_UNIFORM_VECTORS), L = _ > 0, R = s3.getParameter(s3.MAX_SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: r, getMaxPrecision: l, textureFormatReadable: a, textureTypeReadable: o, precision: c, logarithmicDepthBuffer: u, reverseDepthBuffer: d, maxTextures: p, maxVertexTextures: _, maxTextureSize: g, maxCubemapSize: m, maxAttributes: f, maxVertexUniforms: T, maxVaryings: b, maxFragmentUniforms: M, vertexTextures: L, maxSamples: R };
}
function Fm(s3) {
  const e = this;
  let t = null, n = 0, i = false, r = false;
  const a = new Bn(), o = new Ie(), l = { value: null, needsUpdate: false };
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
    const _ = u.clippingPlanes, g = u.clipIntersection, m = u.clipShadows, f = s3.get(u);
    if (!i || _ === null || _.length === 0 || r && !m) r ? h(null) : c();
    else {
      const T = r ? 0 : n, b = T * 4;
      let M = f.clippingState || null;
      l.value = M, M = h(_, d, b, p);
      for (let L = 0; L !== b; ++L) M[L] = t[L];
      f.clippingState = M, this.numIntersection = g ? this.numPlanes : 0, this.numPlanes += T;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(u, d, p, _) {
    const g = u !== null ? u.length : 0;
    let m = null;
    if (g !== 0) {
      if (m = l.value, _ !== true || m === null) {
        const f = p + g * 4, T = d.matrixWorldInverse;
        o.getNormalMatrix(T), (m === null || m.length < f) && (m = new Float32Array(f));
        for (let b = 0, M = p; b !== g; ++b, M += 4) a.copy(u[b]).applyMatrix4(T, o), a.normal.toArray(m, M), m[M + 3] = a.constant;
      }
      l.value = m, l.needsUpdate = true;
    }
    return e.numPlanes = g, e.numIntersection = 0, m;
  }
}
function Bm(s3) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === Ma ? a.mapping = zi : o === Sa && (a.mapping = Hi), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === Ma || o === Sa) if (e.has(a)) {
        const l = e.get(a).texture;
        return t(l, a.mapping);
      } else {
        const l = a.image;
        if (l && l.height > 0) {
          const c = new td(l.height);
          return c.fromEquirectangularTexture(s3, a), e.set(a, c), a.addEventListener("dispose", i), t(c.texture, a.mapping);
        } else return null;
      }
    }
    return a;
  }
  function i(a) {
    const o = a.target;
    o.removeEventListener("dispose", i);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: n, dispose: r };
}
const Di = 4, Ul = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], ai = 20, ta = new Ao(), Ol = new Le();
let na = null, ia = 0, sa = 0, ra = false;
const si = (1 + Math.sqrt(5)) / 2, Ri = 1 / si, Fl = [new P(-si, Ri, 0), new P(si, Ri, 0), new P(-Ri, 0, si), new P(Ri, 0, si), new P(0, si, -Ri), new P(0, si, Ri), new P(-1, 1, -1), new P(1, 1, -1), new P(-1, 1, 1), new P(1, 1, 1)], km = new P();
class Bl {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100, r = {}) {
    const { size: a = 256, position: o = km } = r;
    na = this._renderer.getRenderTarget(), ia = this._renderer.getActiveCubeFace(), sa = this._renderer.getActiveMipmapLevel(), ra = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(a);
    const l = this._allocateTargets();
    return l.depthBuffer = true, this._sceneToCubeUV(e, n, i, l, o), t > 0 && this._blur(l, 0, 0, t), this._applyPMREM(l), this._cleanup(l), l;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Hl(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = zl(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(na, ia, sa), this._renderer.xr.enabled = ra, e.scissorTest = false, ir(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === zi || e.mapping === Hi ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), na = this._renderer.getRenderTarget(), ia = this._renderer.getActiveCubeFace(), sa = this._renderer.getActiveMipmapLevel(), ra = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = { magFilter: zt, minFilter: zt, generateMipmaps: false, type: ws, format: Yt, colorSpace: Dt, depthBuffer: false }, i = kl(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = kl(e, t, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = zm(r)), this._blurMaterial = Hm(r, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new Ut(this._lodPlanes[0], e);
    this._renderer.compile(t, ta);
  }
  _sceneToCubeUV(e, t, n, i, r) {
    const l = new Ct(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], h = [1, 1, 1, -1, -1, -1], u = this._renderer, d = u.autoClear, p = u.toneMapping;
    u.getClearColor(Ol), u.toneMapping = Gn, u.autoClear = false;
    const _ = new oi({ name: "PMREM.Background", side: Ot, depthWrite: false, depthTest: false }), g = new Ut(new $i(), _);
    let m = false;
    const f = e.background;
    f ? f.isColor && (_.color.copy(f), e.background = null, m = true) : (_.color.copy(Ol), m = true);
    for (let T = 0; T < 6; T++) {
      const b = T % 3;
      b === 0 ? (l.up.set(0, c[T], 0), l.position.set(r.x, r.y, r.z), l.lookAt(r.x + h[T], r.y, r.z)) : b === 1 ? (l.up.set(0, 0, c[T]), l.position.set(r.x, r.y, r.z), l.lookAt(r.x, r.y + h[T], r.z)) : (l.up.set(0, c[T], 0), l.position.set(r.x, r.y, r.z), l.lookAt(r.x, r.y, r.z + h[T]));
      const M = this._cubeSize;
      ir(i, b * M, T > 2 ? M : 0, M, M), u.setRenderTarget(i), m && u.render(g, l), u.render(e, l);
    }
    g.geometry.dispose(), g.material.dispose(), u.toneMapping = p, u.autoClear = d, e.background = f;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === zi || e.mapping === Hi;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Hl()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = zl());
    const r = i ? this._cubemapMaterial : this._equirectMaterial, a = new Ut(this._lodPlanes[0], r), o = r.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    ir(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, ta);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = false;
    const i = this._lodPlanes.length;
    for (let r = 1; r < i; r++) {
      const a = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = Fl[(i - r - 1) % Fl.length];
      this._blur(e, r - 1, r, a, o);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, n, i, "latitudinal", r), this._halfBlur(a, e, n, n, i, "longitudinal", r);
  }
  _halfBlur(e, t, n, i, r, a, o) {
    const l = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
    const h = 3, u = new Ut(this._lodPlanes[i], c), d = c.uniforms, p = this._sizeLods[n] - 1, _ = isFinite(r) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * ai - 1), g = r / _, m = isFinite(r) ? 1 + Math.floor(h * g) : ai;
    m > ai && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ai}`);
    const f = [];
    let T = 0;
    for (let A = 0; A < ai; ++A) {
      const U = A / g, S = Math.exp(-U * U / 2);
      f.push(S), A === 0 ? T += S : A < m && (T += 2 * S);
    }
    for (let A = 0; A < f.length; A++) f[A] = f[A] / T;
    d.envMap.value = e.texture, d.samples.value = m, d.weights.value = f, d.latitudinal.value = a === "latitudinal", o && (d.poleAxis.value = o);
    const { _lodMax: b } = this;
    d.dTheta.value = _, d.mipInt.value = b - n;
    const M = this._sizeLods[i], L = 3 * M * (i > b - Di ? i - b + Di : 0), R = 4 * (this._cubeSize - M);
    ir(t, L, R, 3 * M, 2 * M), l.setRenderTarget(t), l.render(u, ta);
  }
}
function zm(s3) {
  const e = [], t = [], n = [];
  let i = s3;
  const r = s3 - Di + 1 + Ul.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, i);
    t.push(o);
    let l = 1 / o;
    a > s3 - Di ? l = Ul[a - s3 + Di - 1] : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), h = -c, u = 1 + c, d = [h, h, u, h, u, u, h, h, u, u, h, u], p = 6, _ = 6, g = 3, m = 2, f = 1, T = new Float32Array(g * _ * p), b = new Float32Array(m * _ * p), M = new Float32Array(f * _ * p);
    for (let R = 0; R < p; R++) {
      const A = R % 3 * 2 / 3 - 1, U = R > 2 ? 0 : -1, S = [A, U, 0, A + 2 / 3, U, 0, A + 2 / 3, U + 1, 0, A, U, 0, A + 2 / 3, U + 1, 0, A, U + 1, 0];
      T.set(S, g * _ * R), b.set(d, m * _ * R);
      const y = [R, R, R, R, R, R];
      M.set(y, f * _ * R);
    }
    const L = new fn();
    L.setAttribute("position", new Lt(T, g)), L.setAttribute("uv", new Lt(b, m)), L.setAttribute("faceIndex", new Lt(M, f)), e.push(L), i > Di && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function kl(s3, e, t) {
  const n = new hi(s3, e, t);
  return n.texture.mapping = Sr, n.texture.name = "PMREM.cubeUv", n.scissorTest = true, n;
}
function ir(s3, e, t, n, i) {
  s3.viewport.set(e, t, n, i), s3.scissor.set(e, t, n, i);
}
function Hm(s3, e, t) {
  const n = new Float32Array(ai), i = new P(0, 1, 0);
  return new Wn({ name: "SphericalGaussianBlur", defines: { n: ai, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${s3}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: i } }, vertexShader: Co(), fragmentShader: `

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
		`, blending: Vn, depthTest: false, depthWrite: false });
}
function zl() {
  return new Wn({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: Co(), fragmentShader: `

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
		`, blending: Vn, depthTest: false, depthWrite: false });
}
function Hl() {
  return new Wn({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: Co(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: Vn, depthTest: false, depthWrite: false });
}
function Co() {
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
function Vm(s3) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === Ma || l === Sa, h = l === zi || l === Hi;
      if (c || h) {
        let u = e.get(o);
        const d = u !== void 0 ? u.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== d) return t === null && (t = new Bl(s3)), u = c ? t.fromEquirectangular(o, u) : t.fromCubemap(o, u), u.texture.pmremVersion = o.pmremVersion, e.set(o, u), u.texture;
        if (u !== void 0) return u.texture;
        {
          const p = o.image;
          return c && p && p.height > 0 || h && p && i(p) ? (t === null && (t = new Bl(s3)), u = c ? t.fromEquirectangular(o) : t.fromCubemap(o), u.texture.pmremVersion = o.pmremVersion, e.set(o, u), o.addEventListener("dispose", r), u.texture) : null;
        }
      }
    }
    return o;
  }
  function i(o) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++) o[h] !== void 0 && l++;
    return l === c;
  }
  function r(o) {
    const l = o.target;
    l.removeEventListener("dispose", r);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return { get: n, dispose: a };
}
function Gm(s3) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = s3.getExtension("WEBGL_depth_texture") || s3.getExtension("MOZ_WEBGL_depth_texture") || s3.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = s3.getExtension("EXT_texture_filter_anisotropic") || s3.getExtension("MOZ_EXT_texture_filter_anisotropic") || s3.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = s3.getExtension("WEBGL_compressed_texture_s3tc") || s3.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || s3.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = s3.getExtension("WEBGL_compressed_texture_pvrtc") || s3.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = s3.getExtension(n);
    }
    return e[n] = i, i;
  }
  return { has: function(n) {
    return t(n) !== null;
  }, init: function() {
    t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
  }, get: function(n) {
    const i = t(n);
    return i === null && ii("THREE.WebGLRenderer: " + n + " extension not supported."), i;
  } };
}
function Wm(s3, e, t, n) {
  const i = {}, r = /* @__PURE__ */ new WeakMap();
  function a(u) {
    const d = u.target;
    d.index !== null && e.remove(d.index);
    for (const _ in d.attributes) e.remove(d.attributes[_]);
    d.removeEventListener("dispose", a), delete i[d.id];
    const p = r.get(d);
    p && (e.remove(p), r.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === true && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function o(u, d) {
    return i[d.id] === true || (d.addEventListener("dispose", a), i[d.id] = true, t.memory.geometries++), d;
  }
  function l(u) {
    const d = u.attributes;
    for (const p in d) e.update(d[p], s3.ARRAY_BUFFER);
  }
  function c(u) {
    const d = [], p = u.index, _ = u.attributes.position;
    let g = 0;
    if (p !== null) {
      const T = p.array;
      g = p.version;
      for (let b = 0, M = T.length; b < M; b += 3) {
        const L = T[b + 0], R = T[b + 1], A = T[b + 2];
        d.push(L, R, R, A, A, L);
      }
    } else if (_ !== void 0) {
      const T = _.array;
      g = _.version;
      for (let b = 0, M = T.length / 3 - 1; b < M; b += 3) {
        const L = b + 0, R = b + 1, A = b + 2;
        d.push(L, R, R, A, A, L);
      }
    } else return;
    const m = new (kc(d) ? Wc : Gc)(d, 1);
    m.version = g;
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
  return { get: o, update: l, getWireframeAttribute: h };
}
function Xm(s3, e, t) {
  let n;
  function i(d) {
    n = d;
  }
  let r, a;
  function o(d) {
    r = d.type, a = d.bytesPerElement;
  }
  function l(d, p) {
    s3.drawElements(n, p, r, d * a), t.update(p, n, 1);
  }
  function c(d, p, _) {
    _ !== 0 && (s3.drawElementsInstanced(n, p, r, d * a, _), t.update(p, n, _));
  }
  function h(d, p, _) {
    if (_ === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, p, 0, r, d, 0, _);
    let m = 0;
    for (let f = 0; f < _; f++) m += p[f];
    t.update(m, n, 1);
  }
  function u(d, p, _, g) {
    if (_ === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null) for (let f = 0; f < d.length; f++) c(d[f] / a, p[f], g[f]);
    else {
      m.multiDrawElementsInstancedWEBGL(n, p, 0, r, d, 0, g, 0, _);
      let f = 0;
      for (let T = 0; T < _; T++) f += p[T] * g[T];
      t.update(f, n, 1);
    }
  }
  this.setMode = i, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = h, this.renderMultiDrawInstances = u;
}
function Ym(s3) {
  const e = { geometries: 0, textures: 0 }, t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(r, a, o) {
    switch (t.calls++, a) {
      case s3.TRIANGLES:
        t.triangles += o * (r / 3);
        break;
      case s3.LINES:
        t.lines += o * (r / 2);
        break;
      case s3.LINE_STRIP:
        t.lines += o * (r - 1);
        break;
      case s3.LINE_LOOP:
        t.lines += o * r;
        break;
      case s3.POINTS:
        t.points += o * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return { memory: e, render: t, programs: null, autoReset: true, reset: i, update: n };
}
function qm(s3, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), i = new Ke();
  function r(a, o, l) {
    const c = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = h !== void 0 ? h.length : 0;
    let d = n.get(o);
    if (d === void 0 || d.count !== u) {
      let y = function() {
        U.dispose(), n.delete(o), o.removeEventListener("dispose", y);
      };
      var p = y;
      d !== void 0 && d.texture.dispose();
      const _ = o.morphAttributes.position !== void 0, g = o.morphAttributes.normal !== void 0, m = o.morphAttributes.color !== void 0, f = o.morphAttributes.position || [], T = o.morphAttributes.normal || [], b = o.morphAttributes.color || [];
      let M = 0;
      _ === true && (M = 1), g === true && (M = 2), m === true && (M = 3);
      let L = o.attributes.position.count * M, R = 1;
      L > e.maxTextureSize && (R = Math.ceil(L / e.maxTextureSize), L = e.maxTextureSize);
      const A = new Float32Array(L * R * 4 * u), U = new zc(A, L, R, u);
      U.type = en, U.needsUpdate = true;
      const S = M * 4;
      for (let C = 0; C < u; C++) {
        const W = f[C], z = T[C], $ = b[C], Z = L * R * 4 * C;
        for (let q = 0; q < W.count; q++) {
          const Q = q * S;
          _ === true && (i.fromBufferAttribute(W, q), A[Z + Q + 0] = i.x, A[Z + Q + 1] = i.y, A[Z + Q + 2] = i.z, A[Z + Q + 3] = 0), g === true && (i.fromBufferAttribute(z, q), A[Z + Q + 4] = i.x, A[Z + Q + 5] = i.y, A[Z + Q + 6] = i.z, A[Z + Q + 7] = 0), m === true && (i.fromBufferAttribute($, q), A[Z + Q + 8] = i.x, A[Z + Q + 9] = i.y, A[Z + Q + 10] = i.z, A[Z + Q + 11] = $.itemSize === 4 ? i.w : 1);
        }
      }
      d = { count: u, texture: U, size: new we(L, R) }, n.set(o, d), o.addEventListener("dispose", y);
    }
    if (a.isInstancedMesh === true && a.morphTexture !== null) l.getUniforms().setValue(s3, "morphTexture", a.morphTexture, t);
    else {
      let _ = 0;
      for (let m = 0; m < c.length; m++) _ += c[m];
      const g = o.morphTargetsRelative ? 1 : 1 - _;
      l.getUniforms().setValue(s3, "morphTargetBaseInfluence", g), l.getUniforms().setValue(s3, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(s3, "morphTargetsTexture", d.texture, t), l.getUniforms().setValue(s3, "morphTargetsTextureSize", d.size);
  }
  return { update: r };
}
function jm(s3, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function r(l) {
    const c = n.render.frame, h = l.geometry, u = e.get(l, h);
    if (i.get(u) !== c && (e.update(u), i.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === false && l.addEventListener("dispose", o), i.get(l) !== c && (t.update(l.instanceMatrix, s3.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, s3.ARRAY_BUFFER), i.set(l, c))), l.isSkinnedMesh) {
      const d = l.skeleton;
      i.get(d) !== c && (d.update(), i.set(d, c));
    }
    return u;
  }
  function a() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: r, dispose: a };
}
const sh = new xt(), Vl = new Jc(1, 1), rh = new zc(), ah = new Bu(), oh = new qc(), Gl = [], Wl = [], Xl = new Float32Array(16), Yl = new Float32Array(9), ql = new Float32Array(4);
function es(s3, e, t) {
  const n = s3[0];
  if (n <= 0 || n > 0) return s3;
  const i = e * t;
  let r = Gl[i];
  if (r === void 0 && (r = new Float32Array(i), Gl[i] = r), e !== 0) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== e; ++a) o += t, s3[a].toArray(r, o);
  }
  return r;
}
function _t(s3, e) {
  if (s3.length !== e.length) return false;
  for (let t = 0, n = s3.length; t < n; t++) if (s3[t] !== e[t]) return false;
  return true;
}
function gt(s3, e) {
  for (let t = 0, n = e.length; t < n; t++) s3[t] = e[t];
}
function Tr(s3, e) {
  let t = Wl[e];
  t === void 0 && (t = new Int32Array(e), Wl[e] = t);
  for (let n = 0; n !== e; ++n) t[n] = s3.allocateTextureUnit();
  return t;
}
function Km(s3, e) {
  const t = this.cache;
  t[0] !== e && (s3.uniform1f(this.addr, e), t[0] = e);
}
function $m(s3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (s3.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (_t(t, e)) return;
    s3.uniform2fv(this.addr, e), gt(t, e);
  }
}
function Zm(s3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s3.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (s3.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (_t(t, e)) return;
    s3.uniform3fv(this.addr, e), gt(t, e);
  }
}
function Jm(s3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s3.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (_t(t, e)) return;
    s3.uniform4fv(this.addr, e), gt(t, e);
  }
}
function Qm(s3, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (_t(t, e)) return;
    s3.uniformMatrix2fv(this.addr, false, e), gt(t, e);
  } else {
    if (_t(t, n)) return;
    ql.set(n), s3.uniformMatrix2fv(this.addr, false, ql), gt(t, n);
  }
}
function e_(s3, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (_t(t, e)) return;
    s3.uniformMatrix3fv(this.addr, false, e), gt(t, e);
  } else {
    if (_t(t, n)) return;
    Yl.set(n), s3.uniformMatrix3fv(this.addr, false, Yl), gt(t, n);
  }
}
function t_(s3, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (_t(t, e)) return;
    s3.uniformMatrix4fv(this.addr, false, e), gt(t, e);
  } else {
    if (_t(t, n)) return;
    Xl.set(n), s3.uniformMatrix4fv(this.addr, false, Xl), gt(t, n);
  }
}
function n_(s3, e) {
  const t = this.cache;
  t[0] !== e && (s3.uniform1i(this.addr, e), t[0] = e);
}
function i_(s3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (s3.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (_t(t, e)) return;
    s3.uniform2iv(this.addr, e), gt(t, e);
  }
}
function s_(s3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s3.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (_t(t, e)) return;
    s3.uniform3iv(this.addr, e), gt(t, e);
  }
}
function r_(s3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s3.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (_t(t, e)) return;
    s3.uniform4iv(this.addr, e), gt(t, e);
  }
}
function a_(s3, e) {
  const t = this.cache;
  t[0] !== e && (s3.uniform1ui(this.addr, e), t[0] = e);
}
function o_(s3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (s3.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (_t(t, e)) return;
    s3.uniform2uiv(this.addr, e), gt(t, e);
  }
}
function l_(s3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s3.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (_t(t, e)) return;
    s3.uniform3uiv(this.addr, e), gt(t, e);
  }
}
function c_(s3, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s3.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (_t(t, e)) return;
    s3.uniform4uiv(this.addr, e), gt(t, e);
  }
}
function h_(s3, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s3.uniform1i(this.addr, i), n[0] = i);
  let r;
  this.type === s3.SAMPLER_2D_SHADOW ? (Vl.compareFunction = Fc, r = Vl) : r = sh, t.setTexture2D(e || r, i);
}
function u_(s3, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s3.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || ah, i);
}
function d_(s3, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s3.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || oh, i);
}
function f_(s3, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s3.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || rh, i);
}
function p_(s3) {
  switch (s3) {
    case 5126:
      return Km;
    case 35664:
      return $m;
    case 35665:
      return Zm;
    case 35666:
      return Jm;
    case 35674:
      return Qm;
    case 35675:
      return e_;
    case 35676:
      return t_;
    case 5124:
    case 35670:
      return n_;
    case 35667:
    case 35671:
      return i_;
    case 35668:
    case 35672:
      return s_;
    case 35669:
    case 35673:
      return r_;
    case 5125:
      return a_;
    case 36294:
      return o_;
    case 36295:
      return l_;
    case 36296:
      return c_;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return h_;
    case 35679:
    case 36299:
    case 36307:
      return u_;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return d_;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return f_;
  }
}
function m_(s3, e) {
  s3.uniform1fv(this.addr, e);
}
function __(s3, e) {
  const t = es(e, this.size, 2);
  s3.uniform2fv(this.addr, t);
}
function g_(s3, e) {
  const t = es(e, this.size, 3);
  s3.uniform3fv(this.addr, t);
}
function v_(s3, e) {
  const t = es(e, this.size, 4);
  s3.uniform4fv(this.addr, t);
}
function x_(s3, e) {
  const t = es(e, this.size, 4);
  s3.uniformMatrix2fv(this.addr, false, t);
}
function y_(s3, e) {
  const t = es(e, this.size, 9);
  s3.uniformMatrix3fv(this.addr, false, t);
}
function M_(s3, e) {
  const t = es(e, this.size, 16);
  s3.uniformMatrix4fv(this.addr, false, t);
}
function S_(s3, e) {
  s3.uniform1iv(this.addr, e);
}
function E_(s3, e) {
  s3.uniform2iv(this.addr, e);
}
function b_(s3, e) {
  s3.uniform3iv(this.addr, e);
}
function T_(s3, e) {
  s3.uniform4iv(this.addr, e);
}
function A_(s3, e) {
  s3.uniform1uiv(this.addr, e);
}
function w_(s3, e) {
  s3.uniform2uiv(this.addr, e);
}
function R_(s3, e) {
  s3.uniform3uiv(this.addr, e);
}
function C_(s3, e) {
  s3.uniform4uiv(this.addr, e);
}
function P_(s3, e, t) {
  const n = this.cache, i = e.length, r = Tr(t, i);
  _t(n, r) || (s3.uniform1iv(this.addr, r), gt(n, r));
  for (let a = 0; a !== i; ++a) t.setTexture2D(e[a] || sh, r[a]);
}
function L_(s3, e, t) {
  const n = this.cache, i = e.length, r = Tr(t, i);
  _t(n, r) || (s3.uniform1iv(this.addr, r), gt(n, r));
  for (let a = 0; a !== i; ++a) t.setTexture3D(e[a] || ah, r[a]);
}
function D_(s3, e, t) {
  const n = this.cache, i = e.length, r = Tr(t, i);
  _t(n, r) || (s3.uniform1iv(this.addr, r), gt(n, r));
  for (let a = 0; a !== i; ++a) t.setTextureCube(e[a] || oh, r[a]);
}
function I_(s3, e, t) {
  const n = this.cache, i = e.length, r = Tr(t, i);
  _t(n, r) || (s3.uniform1iv(this.addr, r), gt(n, r));
  for (let a = 0; a !== i; ++a) t.setTexture2DArray(e[a] || rh, r[a]);
}
function N_(s3) {
  switch (s3) {
    case 5126:
      return m_;
    case 35664:
      return __;
    case 35665:
      return g_;
    case 35666:
      return v_;
    case 35674:
      return x_;
    case 35675:
      return y_;
    case 35676:
      return M_;
    case 5124:
    case 35670:
      return S_;
    case 35667:
    case 35671:
      return E_;
    case 35668:
    case 35672:
      return b_;
    case 35669:
    case 35673:
      return T_;
    case 5125:
      return A_;
    case 36294:
      return w_;
    case 36295:
      return R_;
    case 36296:
      return C_;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return P_;
    case 35679:
    case 36299:
    case 36307:
      return L_;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return D_;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return I_;
  }
}
class U_ {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = p_(t.type);
  }
}
class O_ {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = N_(t.type);
  }
}
class F_ {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let r = 0, a = i.length; r !== a; ++r) {
      const o = i[r];
      o.setValue(e, t[o.id], n);
    }
  }
}
const aa = /(\w+)(\])?(\[|\.)?/g;
function jl(s3, e) {
  s3.seq.push(e), s3.map[e.id] = e;
}
function B_(s3, e, t) {
  const n = s3.name, i = n.length;
  for (aa.lastIndex = 0; ; ) {
    const r = aa.exec(n), a = aa.lastIndex;
    let o = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === i) {
      jl(t, c === void 0 ? new U_(o, s3, e) : new O_(o, s3, e));
      break;
    } else {
      let u = t.map[o];
      u === void 0 && (u = new F_(o), jl(t, u)), t = u;
    }
  }
}
class pr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const r = e.getActiveUniform(t, i), a = e.getUniformLocation(t, r.name);
      B_(r, a, this);
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
    for (let r = 0, a = t.length; r !== a; ++r) {
      const o = t[r], l = n[o.id];
      l.needsUpdate !== false && o.setValue(e, l.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
      const a = e[i];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function Kl(s3, e, t) {
  const n = s3.createShader(e);
  return s3.shaderSource(n, t), s3.compileShader(n), n;
}
const k_ = 37297;
let z_ = 0;
function H_(s3, e) {
  const t = s3.split(`
`), n = [], i = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let a = i; a < r; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
const $l = new Ie();
function V_(s3) {
  We._getMatrix($l, We.workingColorSpace, s3);
  const e = `mat3( ${$l.elements.map((t) => t.toFixed(4))} )`;
  switch (We.getTransfer(s3)) {
    case _r:
      return [e, "LinearTransferOETF"];
    case tt:
      return [e, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", s3), [e, "LinearTransferOETF"];
  }
}
function Zl(s3, e, t) {
  const n = s3.getShaderParameter(e, s3.COMPILE_STATUS), i = s3.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const a = parseInt(r[1]);
    return t.toUpperCase() + `

` + i + `

` + H_(s3.getShaderSource(e), a);
  } else return i;
}
function G_(s3, e) {
  const t = V_(e);
  return [`vec4 ${s3}( vec4 value ) {`, `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`, "}"].join(`
`);
}
function W_(s3, e) {
  let t;
  switch (e) {
    case qh:
      t = "Linear";
      break;
    case jh:
      t = "Reinhard";
      break;
    case Kh:
      t = "Cineon";
      break;
    case $h:
      t = "ACESFilmic";
      break;
    case Jh:
      t = "AgX";
      break;
    case Qh:
      t = "Neutral";
      break;
    case Zh:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + s3 + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const sr = new P();
function X_() {
  We.getLuminanceCoefficients(sr);
  const s3 = sr.x.toFixed(4), e = sr.y.toFixed(4), t = sr.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${s3}, ${e}, ${t} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function Y_(s3) {
  return [s3.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", s3.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(ps).join(`
`);
}
function q_(s3) {
  const e = [];
  for (const t in s3) {
    const n = s3[t];
    n !== false && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function j_(s3, e) {
  const t = {}, n = s3.getProgramParameter(e, s3.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const r = s3.getActiveAttrib(e, i), a = r.name;
    let o = 1;
    r.type === s3.FLOAT_MAT2 && (o = 2), r.type === s3.FLOAT_MAT3 && (o = 3), r.type === s3.FLOAT_MAT4 && (o = 4), t[a] = { type: r.type, location: s3.getAttribLocation(e, a), locationSize: o };
  }
  return t;
}
function ps(s3) {
  return s3 !== "";
}
function Jl(s3, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return s3.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Ql(s3, e) {
  return s3.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const K_ = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Qa(s3) {
  return s3.replace(K_, Z_);
}
const $_ = /* @__PURE__ */ new Map();
function Z_(s3, e) {
  let t = Oe[e];
  if (t === void 0) {
    const n = $_.get(e);
    if (n !== void 0) t = Oe[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return Qa(t);
}
const J_ = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function ec(s3) {
  return s3.replace(J_, Q_);
}
function Q_(s3, e, t, n) {
  let i = "";
  for (let r = parseInt(e); r < parseInt(t); r++) i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function tc(s3) {
  let e = `precision ${s3.precision} float;
	precision ${s3.precision} int;
	precision ${s3.precision} sampler2D;
	precision ${s3.precision} samplerCube;
	precision ${s3.precision} sampler3D;
	precision ${s3.precision} sampler2DArray;
	precision ${s3.precision} sampler2DShadow;
	precision ${s3.precision} samplerCubeShadow;
	precision ${s3.precision} sampler2DArrayShadow;
	precision ${s3.precision} isampler2D;
	precision ${s3.precision} isampler3D;
	precision ${s3.precision} isamplerCube;
	precision ${s3.precision} isampler2DArray;
	precision ${s3.precision} usampler2D;
	precision ${s3.precision} usampler3D;
	precision ${s3.precision} usamplerCube;
	precision ${s3.precision} usampler2DArray;
	`;
  return s3.precision === "highp" ? e += `
#define HIGH_PRECISION` : s3.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : s3.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function eg(s3) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return s3.shadowMapType === Ec ? e = "SHADOWMAP_TYPE_PCF" : s3.shadowMapType === Ah ? e = "SHADOWMAP_TYPE_PCF_SOFT" : s3.shadowMapType === En && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function tg(s3) {
  let e = "ENVMAP_TYPE_CUBE";
  if (s3.envMap) switch (s3.envMapMode) {
    case zi:
    case Hi:
      e = "ENVMAP_TYPE_CUBE";
      break;
    case Sr:
      e = "ENVMAP_TYPE_CUBE_UV";
      break;
  }
  return e;
}
function ng(s3) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (s3.envMap) switch (s3.envMapMode) {
    case Hi:
      e = "ENVMAP_MODE_REFRACTION";
      break;
  }
  return e;
}
function ig(s3) {
  let e = "ENVMAP_BLENDING_NONE";
  if (s3.envMap) switch (s3.combine) {
    case bc:
      e = "ENVMAP_BLENDING_MULTIPLY";
      break;
    case Xh:
      e = "ENVMAP_BLENDING_MIX";
      break;
    case Yh:
      e = "ENVMAP_BLENDING_ADD";
      break;
  }
  return e;
}
function sg(s3) {
  const e = s3.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function rg(s3, e, t, n) {
  const i = s3.getContext(), r = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const l = eg(t), c = tg(t), h = ng(t), u = ig(t), d = sg(t), p = Y_(t), _ = q_(r), g = i.createProgram();
  let m, f, T = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (m = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, _].filter(ps).join(`
`), m.length > 0 && (m += `
`), f = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, _].filter(ps).join(`
`), f.length > 0 && (f += `
`)) : (m = [tc(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, _, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.batchingColor ? "#define USE_BATCHING_COLOR" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + h : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === false ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(ps).join(`
`), f = [tc(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, _, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + c : "", t.envMap ? "#define " + h : "", t.envMap ? "#define " + u : "", d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "", d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "", d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== Gn ? "#define TONE_MAPPING" : "", t.toneMapping !== Gn ? Oe.tonemapping_pars_fragment : "", t.toneMapping !== Gn ? W_("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Oe.colorspace_pars_fragment, G_("linearToOutputTexel", t.outputColorSpace), X_(), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(ps).join(`
`)), a = Qa(a), a = Jl(a, t), a = Ql(a, t), o = Qa(o), o = Jl(o, t), o = Ql(o, t), a = ec(a), o = ec(o), t.isRawShaderMaterial !== true && (T = `#version 300 es
`, m = [p, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + m, f = ["#define varying in", t.glslVersion === $o ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === $o ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + f);
  const b = T + m + a, M = T + f + o, L = Kl(i, i.VERTEX_SHADER, b), R = Kl(i, i.FRAGMENT_SHADER, M);
  i.attachShader(g, L), i.attachShader(g, R), t.index0AttributeName !== void 0 ? i.bindAttribLocation(g, 0, t.index0AttributeName) : t.morphTargets === true && i.bindAttribLocation(g, 0, "position"), i.linkProgram(g);
  function A(C) {
    if (s3.debug.checkShaderErrors) {
      const W = i.getProgramInfoLog(g).trim(), z = i.getShaderInfoLog(L).trim(), $ = i.getShaderInfoLog(R).trim();
      let Z = true, q = true;
      if (i.getProgramParameter(g, i.LINK_STATUS) === false) if (Z = false, typeof s3.debug.onShaderError == "function") s3.debug.onShaderError(i, g, L, R);
      else {
        const Q = Zl(i, L, "vertex"), V = Zl(i, R, "fragment");
        console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(g, i.VALIDATE_STATUS) + `

Material Name: ` + C.name + `
Material Type: ` + C.type + `

Program Info Log: ` + W + `
` + Q + `
` + V);
      }
      else W !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", W) : (z === "" || $ === "") && (q = false);
      q && (C.diagnostics = { runnable: Z, programLog: W, vertexShader: { log: z, prefix: m }, fragmentShader: { log: $, prefix: f } });
    }
    i.deleteShader(L), i.deleteShader(R), U = new pr(i, g), S = j_(i, g);
  }
  let U;
  this.getUniforms = function() {
    return U === void 0 && A(this), U;
  };
  let S;
  this.getAttributes = function() {
    return S === void 0 && A(this), S;
  };
  let y = t.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return y === false && (y = i.getProgramParameter(g, k_)), y;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(g), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = z_++, this.cacheKey = e, this.usedTimes = 1, this.program = g, this.vertexShader = L, this.fragmentShader = R, this;
}
let ag = 0;
class og {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), r = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(i) === false && (a.add(i), i.usedTimes++), a.has(r) === false && (a.add(r), r.usedTimes++), this;
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
    return n === void 0 && (n = new lg(e), t.set(e, n)), n;
  }
}
class lg {
  constructor(e) {
    this.id = ag++, this.code = e, this.usedTimes = 0;
  }
}
function cg(s3, e, t, n, i, r, a) {
  const o = new Hc(), l = new og(), c = /* @__PURE__ */ new Set(), h = [], u = i.logarithmicDepthBuffer, d = i.vertexTextures;
  let p = i.precision;
  const _ = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function g(S) {
    return c.add(S), S === 0 ? "uv" : `uv${S}`;
  }
  function m(S, y, C, W, z) {
    const $ = W.fog, Z = z.geometry, q = S.isMeshStandardMaterial ? W.environment : null, Q = (S.isMeshStandardMaterial ? t : e).get(S.envMap || q), V = Q && Q.mapping === Sr ? Q.image.height : null, ae = _[S.type];
    S.precision !== null && (p = i.getMaxPrecision(S.precision), p !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", p, "instead."));
    const de = Z.morphAttributes.position || Z.morphAttributes.normal || Z.morphAttributes.color, ye = de !== void 0 ? de.length : 0;
    let Be = 0;
    Z.morphAttributes.position !== void 0 && (Be = 1), Z.morphAttributes.normal !== void 0 && (Be = 2), Z.morphAttributes.color !== void 0 && (Be = 3);
    let it, X, ne, ge;
    if (ae) {
      const Je = on[ae];
      it = Je.vertexShader, X = Je.fragmentShader;
    } else it = S.vertexShader, X = S.fragmentShader, l.update(S), ne = l.getVertexShaderID(S), ge = l.getFragmentShaderID(S);
    const oe = s3.getRenderTarget(), be = s3.state.buffers.depth.getReversed(), je = z.isInstancedMesh === true, Ae = z.isBatchedMesh === true, dt = !!S.map, lt = !!S.matcap, ze = !!Q, w = !!S.aoMap, Ht = !!S.lightMap, He = !!S.bumpMap, Ve = !!S.normalMap, Me = !!S.displacementMap, at = !!S.emissiveMap, xe = !!S.metalnessMap, E = !!S.roughnessMap, v = S.anisotropy > 0, O = S.clearcoat > 0, j = S.dispersion > 0, J = S.iridescence > 0, G = S.sheen > 0, ve = S.transmission > 0, le = v && !!S.anisotropyMap, fe = O && !!S.clearcoatMap, Xe = O && !!S.clearcoatNormalMap, te = O && !!S.clearcoatRoughnessMap, pe = J && !!S.iridescenceMap, Te = J && !!S.iridescenceThicknessMap, Re = G && !!S.sheenColorMap, me = G && !!S.sheenRoughnessMap, Ge = !!S.specularMap, Ue = !!S.specularColorMap, st = !!S.specularIntensityMap, D = ve && !!S.transmissionMap, se = ve && !!S.thicknessMap, H = !!S.gradientMap, K = !!S.alphaMap, he = S.alphaTest > 0, ce = !!S.alphaHash, De = !!S.extensions;
    let ht = Gn;
    S.toneMapped && (oe === null || oe.isXRRenderTarget === true) && (ht = s3.toneMapping);
    const Et = { shaderID: ae, shaderType: S.type, shaderName: S.name, vertexShader: it, fragmentShader: X, defines: S.defines, customVertexShaderID: ne, customFragmentShaderID: ge, isRawShaderMaterial: S.isRawShaderMaterial === true, glslVersion: S.glslVersion, precision: p, batching: Ae, batchingColor: Ae && z._colorsTexture !== null, instancing: je, instancingColor: je && z.instanceColor !== null, instancingMorph: je && z.morphTexture !== null, supportsVertexTextures: d, outputColorSpace: oe === null ? s3.outputColorSpace : oe.isXRRenderTarget === true ? oe.texture.colorSpace : Dt, alphaToCoverage: !!S.alphaToCoverage, map: dt, matcap: lt, envMap: ze, envMapMode: ze && Q.mapping, envMapCubeUVHeight: V, aoMap: w, lightMap: Ht, bumpMap: He, normalMap: Ve, displacementMap: d && Me, emissiveMap: at, normalMapObjectSpace: Ve && S.normalMapType === ru, normalMapTangentSpace: Ve && S.normalMapType === go, metalnessMap: xe, roughnessMap: E, anisotropy: v, anisotropyMap: le, clearcoat: O, clearcoatMap: fe, clearcoatNormalMap: Xe, clearcoatRoughnessMap: te, dispersion: j, iridescence: J, iridescenceMap: pe, iridescenceThicknessMap: Te, sheen: G, sheenColorMap: Re, sheenRoughnessMap: me, specularMap: Ge, specularColorMap: Ue, specularIntensityMap: st, transmission: ve, transmissionMap: D, thicknessMap: se, gradientMap: H, opaque: S.transparent === false && S.blending === Ui && S.alphaToCoverage === false, alphaMap: K, alphaTest: he, alphaHash: ce, combine: S.combine, mapUv: dt && g(S.map.channel), aoMapUv: w && g(S.aoMap.channel), lightMapUv: Ht && g(S.lightMap.channel), bumpMapUv: He && g(S.bumpMap.channel), normalMapUv: Ve && g(S.normalMap.channel), displacementMapUv: Me && g(S.displacementMap.channel), emissiveMapUv: at && g(S.emissiveMap.channel), metalnessMapUv: xe && g(S.metalnessMap.channel), roughnessMapUv: E && g(S.roughnessMap.channel), anisotropyMapUv: le && g(S.anisotropyMap.channel), clearcoatMapUv: fe && g(S.clearcoatMap.channel), clearcoatNormalMapUv: Xe && g(S.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: te && g(S.clearcoatRoughnessMap.channel), iridescenceMapUv: pe && g(S.iridescenceMap.channel), iridescenceThicknessMapUv: Te && g(S.iridescenceThicknessMap.channel), sheenColorMapUv: Re && g(S.sheenColorMap.channel), sheenRoughnessMapUv: me && g(S.sheenRoughnessMap.channel), specularMapUv: Ge && g(S.specularMap.channel), specularColorMapUv: Ue && g(S.specularColorMap.channel), specularIntensityMapUv: st && g(S.specularIntensityMap.channel), transmissionMapUv: D && g(S.transmissionMap.channel), thicknessMapUv: se && g(S.thicknessMap.channel), alphaMapUv: K && g(S.alphaMap.channel), vertexTangents: !!Z.attributes.tangent && (Ve || v), vertexColors: S.vertexColors, vertexAlphas: S.vertexColors === true && !!Z.attributes.color && Z.attributes.color.itemSize === 4, pointsUvs: z.isPoints === true && !!Z.attributes.uv && (dt || K), fog: !!$, useFog: S.fog === true, fogExp2: !!$ && $.isFogExp2, flatShading: S.flatShading === true, sizeAttenuation: S.sizeAttenuation === true, logarithmicDepthBuffer: u, reverseDepthBuffer: be, skinning: z.isSkinnedMesh === true, morphTargets: Z.morphAttributes.position !== void 0, morphNormals: Z.morphAttributes.normal !== void 0, morphColors: Z.morphAttributes.color !== void 0, morphTargetsCount: ye, morphTextureStride: Be, numDirLights: y.directional.length, numPointLights: y.point.length, numSpotLights: y.spot.length, numSpotLightMaps: y.spotLightMap.length, numRectAreaLights: y.rectArea.length, numHemiLights: y.hemi.length, numDirLightShadows: y.directionalShadowMap.length, numPointLightShadows: y.pointShadowMap.length, numSpotLightShadows: y.spotShadowMap.length, numSpotLightShadowsWithMaps: y.numSpotLightShadowsWithMaps, numLightProbes: y.numLightProbes, numClippingPlanes: a.numPlanes, numClipIntersection: a.numIntersection, dithering: S.dithering, shadowMapEnabled: s3.shadowMap.enabled && C.length > 0, shadowMapType: s3.shadowMap.type, toneMapping: ht, decodeVideoTexture: dt && S.map.isVideoTexture === true && We.getTransfer(S.map.colorSpace) === tt, decodeVideoTextureEmissive: at && S.emissiveMap.isVideoTexture === true && We.getTransfer(S.emissiveMap.colorSpace) === tt, premultipliedAlpha: S.premultipliedAlpha, doubleSided: S.side === ln, flipSided: S.side === Ot, useDepthPacking: S.depthPacking >= 0, depthPacking: S.depthPacking || 0, index0AttributeName: S.index0AttributeName, extensionClipCullDistance: De && S.extensions.clipCullDistance === true && n.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (De && S.extensions.multiDraw === true || Ae) && n.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"), customProgramCacheKey: S.customProgramCacheKey() };
    return Et.vertexUv1s = c.has(1), Et.vertexUv2s = c.has(2), Et.vertexUv3s = c.has(3), c.clear(), Et;
  }
  function f(S) {
    const y = [];
    if (S.shaderID ? y.push(S.shaderID) : (y.push(S.customVertexShaderID), y.push(S.customFragmentShaderID)), S.defines !== void 0) for (const C in S.defines) y.push(C), y.push(S.defines[C]);
    return S.isRawShaderMaterial === false && (T(y, S), b(y, S), y.push(s3.outputColorSpace)), y.push(S.customProgramCacheKey), y.join();
  }
  function T(S, y) {
    S.push(y.precision), S.push(y.outputColorSpace), S.push(y.envMapMode), S.push(y.envMapCubeUVHeight), S.push(y.mapUv), S.push(y.alphaMapUv), S.push(y.lightMapUv), S.push(y.aoMapUv), S.push(y.bumpMapUv), S.push(y.normalMapUv), S.push(y.displacementMapUv), S.push(y.emissiveMapUv), S.push(y.metalnessMapUv), S.push(y.roughnessMapUv), S.push(y.anisotropyMapUv), S.push(y.clearcoatMapUv), S.push(y.clearcoatNormalMapUv), S.push(y.clearcoatRoughnessMapUv), S.push(y.iridescenceMapUv), S.push(y.iridescenceThicknessMapUv), S.push(y.sheenColorMapUv), S.push(y.sheenRoughnessMapUv), S.push(y.specularMapUv), S.push(y.specularColorMapUv), S.push(y.specularIntensityMapUv), S.push(y.transmissionMapUv), S.push(y.thicknessMapUv), S.push(y.combine), S.push(y.fogExp2), S.push(y.sizeAttenuation), S.push(y.morphTargetsCount), S.push(y.morphAttributeCount), S.push(y.numDirLights), S.push(y.numPointLights), S.push(y.numSpotLights), S.push(y.numSpotLightMaps), S.push(y.numHemiLights), S.push(y.numRectAreaLights), S.push(y.numDirLightShadows), S.push(y.numPointLightShadows), S.push(y.numSpotLightShadows), S.push(y.numSpotLightShadowsWithMaps), S.push(y.numLightProbes), S.push(y.shadowMapType), S.push(y.toneMapping), S.push(y.numClippingPlanes), S.push(y.numClipIntersection), S.push(y.depthPacking);
  }
  function b(S, y) {
    o.disableAll(), y.supportsVertexTextures && o.enable(0), y.instancing && o.enable(1), y.instancingColor && o.enable(2), y.instancingMorph && o.enable(3), y.matcap && o.enable(4), y.envMap && o.enable(5), y.normalMapObjectSpace && o.enable(6), y.normalMapTangentSpace && o.enable(7), y.clearcoat && o.enable(8), y.iridescence && o.enable(9), y.alphaTest && o.enable(10), y.vertexColors && o.enable(11), y.vertexAlphas && o.enable(12), y.vertexUv1s && o.enable(13), y.vertexUv2s && o.enable(14), y.vertexUv3s && o.enable(15), y.vertexTangents && o.enable(16), y.anisotropy && o.enable(17), y.alphaHash && o.enable(18), y.batching && o.enable(19), y.dispersion && o.enable(20), y.batchingColor && o.enable(21), S.push(o.mask), o.disableAll(), y.fog && o.enable(0), y.useFog && o.enable(1), y.flatShading && o.enable(2), y.logarithmicDepthBuffer && o.enable(3), y.reverseDepthBuffer && o.enable(4), y.skinning && o.enable(5), y.morphTargets && o.enable(6), y.morphNormals && o.enable(7), y.morphColors && o.enable(8), y.premultipliedAlpha && o.enable(9), y.shadowMapEnabled && o.enable(10), y.doubleSided && o.enable(11), y.flipSided && o.enable(12), y.useDepthPacking && o.enable(13), y.dithering && o.enable(14), y.transmission && o.enable(15), y.sheen && o.enable(16), y.opaque && o.enable(17), y.pointsUvs && o.enable(18), y.decodeVideoTexture && o.enable(19), y.decodeVideoTextureEmissive && o.enable(20), y.alphaToCoverage && o.enable(21), S.push(o.mask);
  }
  function M(S) {
    const y = _[S.type];
    let C;
    if (y) {
      const W = on[y];
      C = Zu.clone(W.uniforms);
    } else C = S.uniforms;
    return C;
  }
  function L(S, y) {
    let C;
    for (let W = 0, z = h.length; W < z; W++) {
      const $ = h[W];
      if ($.cacheKey === y) {
        C = $, ++C.usedTimes;
        break;
      }
    }
    return C === void 0 && (C = new rg(s3, y, S, r), h.push(C)), C;
  }
  function R(S) {
    if (--S.usedTimes === 0) {
      const y = h.indexOf(S);
      h[y] = h[h.length - 1], h.pop(), S.destroy();
    }
  }
  function A(S) {
    l.remove(S);
  }
  function U() {
    l.dispose();
  }
  return { getParameters: m, getProgramCacheKey: f, getUniforms: M, acquireProgram: L, releaseProgram: R, releaseShaderCache: A, programs: h, dispose: U };
}
function hg() {
  let s3 = /* @__PURE__ */ new WeakMap();
  function e(a) {
    return s3.has(a);
  }
  function t(a) {
    let o = s3.get(a);
    return o === void 0 && (o = {}, s3.set(a, o)), o;
  }
  function n(a) {
    s3.delete(a);
  }
  function i(a, o, l) {
    s3.get(a)[o] = l;
  }
  function r() {
    s3 = /* @__PURE__ */ new WeakMap();
  }
  return { has: e, get: t, remove: n, update: i, dispose: r };
}
function ug(s3, e) {
  return s3.groupOrder !== e.groupOrder ? s3.groupOrder - e.groupOrder : s3.renderOrder !== e.renderOrder ? s3.renderOrder - e.renderOrder : s3.material.id !== e.material.id ? s3.material.id - e.material.id : s3.z !== e.z ? s3.z - e.z : s3.id - e.id;
}
function nc(s3, e) {
  return s3.groupOrder !== e.groupOrder ? s3.groupOrder - e.groupOrder : s3.renderOrder !== e.renderOrder ? s3.renderOrder - e.renderOrder : s3.z !== e.z ? e.z - s3.z : s3.id - e.id;
}
function ic() {
  const s3 = [];
  let e = 0;
  const t = [], n = [], i = [];
  function r() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function a(u, d, p, _, g, m) {
    let f = s3[e];
    return f === void 0 ? (f = { id: u.id, object: u, geometry: d, material: p, groupOrder: _, renderOrder: u.renderOrder, z: g, group: m }, s3[e] = f) : (f.id = u.id, f.object = u, f.geometry = d, f.material = p, f.groupOrder = _, f.renderOrder = u.renderOrder, f.z = g, f.group = m), e++, f;
  }
  function o(u, d, p, _, g, m) {
    const f = a(u, d, p, _, g, m);
    p.transmission > 0 ? n.push(f) : p.transparent === true ? i.push(f) : t.push(f);
  }
  function l(u, d, p, _, g, m) {
    const f = a(u, d, p, _, g, m);
    p.transmission > 0 ? n.unshift(f) : p.transparent === true ? i.unshift(f) : t.unshift(f);
  }
  function c(u, d) {
    t.length > 1 && t.sort(u || ug), n.length > 1 && n.sort(d || nc), i.length > 1 && i.sort(d || nc);
  }
  function h() {
    for (let u = e, d = s3.length; u < d; u++) {
      const p = s3[u];
      if (p.id === null) break;
      p.id = null, p.object = null, p.geometry = null, p.material = null, p.group = null;
    }
  }
  return { opaque: t, transmissive: n, transparent: i, init: r, push: o, unshift: l, finish: h, sort: c };
}
function dg() {
  let s3 = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const r = s3.get(n);
    let a;
    return r === void 0 ? (a = new ic(), s3.set(n, [a])) : i >= r.length ? (a = new ic(), r.push(a)) : a = r[i], a;
  }
  function t() {
    s3 = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: t };
}
function fg() {
  const s3 = {};
  return { get: function(e) {
    if (s3[e.id] !== void 0) return s3[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { direction: new P(), color: new Le() };
        break;
      case "SpotLight":
        t = { position: new P(), direction: new P(), color: new Le(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        t = { position: new P(), color: new Le(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        t = { direction: new P(), skyColor: new Le(), groundColor: new Le() };
        break;
      case "RectAreaLight":
        t = { color: new Le(), position: new P(), halfWidth: new P(), halfHeight: new P() };
        break;
    }
    return s3[e.id] = t, t;
  } };
}
function pg() {
  const s3 = {};
  return { get: function(e) {
    if (s3[e.id] !== void 0) return s3[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new we() };
        break;
      case "SpotLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new we() };
        break;
      case "PointLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new we(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return s3[e.id] = t, t;
  } };
}
let mg = 0;
function _g(s3, e) {
  return (e.castShadow ? 2 : 0) - (s3.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (s3.map ? 1 : 0);
}
function gg(s3) {
  const e = new fg(), t = pg(), n = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let c = 0; c < 9; c++) n.probe.push(new P());
  const i = new P(), r = new Ne(), a = new Ne();
  function o(c) {
    let h = 0, u = 0, d = 0;
    for (let S = 0; S < 9; S++) n.probe[S].set(0, 0, 0);
    let p = 0, _ = 0, g = 0, m = 0, f = 0, T = 0, b = 0, M = 0, L = 0, R = 0, A = 0;
    c.sort(_g);
    for (let S = 0, y = c.length; S < y; S++) {
      const C = c[S], W = C.color, z = C.intensity, $ = C.distance, Z = C.shadow && C.shadow.map ? C.shadow.map.texture : null;
      if (C.isAmbientLight) h += W.r * z, u += W.g * z, d += W.b * z;
      else if (C.isLightProbe) {
        for (let q = 0; q < 9; q++) n.probe[q].addScaledVector(C.sh.coefficients[q], z);
        A++;
      } else if (C.isDirectionalLight) {
        const q = e.get(C);
        if (q.color.copy(C.color).multiplyScalar(C.intensity), C.castShadow) {
          const Q = C.shadow, V = t.get(C);
          V.shadowIntensity = Q.intensity, V.shadowBias = Q.bias, V.shadowNormalBias = Q.normalBias, V.shadowRadius = Q.radius, V.shadowMapSize = Q.mapSize, n.directionalShadow[p] = V, n.directionalShadowMap[p] = Z, n.directionalShadowMatrix[p] = C.shadow.matrix, T++;
        }
        n.directional[p] = q, p++;
      } else if (C.isSpotLight) {
        const q = e.get(C);
        q.position.setFromMatrixPosition(C.matrixWorld), q.color.copy(W).multiplyScalar(z), q.distance = $, q.coneCos = Math.cos(C.angle), q.penumbraCos = Math.cos(C.angle * (1 - C.penumbra)), q.decay = C.decay, n.spot[g] = q;
        const Q = C.shadow;
        if (C.map && (n.spotLightMap[L] = C.map, L++, Q.updateMatrices(C), C.castShadow && R++), n.spotLightMatrix[g] = Q.matrix, C.castShadow) {
          const V = t.get(C);
          V.shadowIntensity = Q.intensity, V.shadowBias = Q.bias, V.shadowNormalBias = Q.normalBias, V.shadowRadius = Q.radius, V.shadowMapSize = Q.mapSize, n.spotShadow[g] = V, n.spotShadowMap[g] = Z, M++;
        }
        g++;
      } else if (C.isRectAreaLight) {
        const q = e.get(C);
        q.color.copy(W).multiplyScalar(z), q.halfWidth.set(C.width * 0.5, 0, 0), q.halfHeight.set(0, C.height * 0.5, 0), n.rectArea[m] = q, m++;
      } else if (C.isPointLight) {
        const q = e.get(C);
        if (q.color.copy(C.color).multiplyScalar(C.intensity), q.distance = C.distance, q.decay = C.decay, C.castShadow) {
          const Q = C.shadow, V = t.get(C);
          V.shadowIntensity = Q.intensity, V.shadowBias = Q.bias, V.shadowNormalBias = Q.normalBias, V.shadowRadius = Q.radius, V.shadowMapSize = Q.mapSize, V.shadowCameraNear = Q.camera.near, V.shadowCameraFar = Q.camera.far, n.pointShadow[_] = V, n.pointShadowMap[_] = Z, n.pointShadowMatrix[_] = C.shadow.matrix, b++;
        }
        n.point[_] = q, _++;
      } else if (C.isHemisphereLight) {
        const q = e.get(C);
        q.skyColor.copy(C.color).multiplyScalar(z), q.groundColor.copy(C.groundColor).multiplyScalar(z), n.hemi[f] = q, f++;
      }
    }
    m > 0 && (s3.has("OES_texture_float_linear") === true ? (n.rectAreaLTC1 = ie.LTC_FLOAT_1, n.rectAreaLTC2 = ie.LTC_FLOAT_2) : (n.rectAreaLTC1 = ie.LTC_HALF_1, n.rectAreaLTC2 = ie.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = u, n.ambient[2] = d;
    const U = n.hash;
    (U.directionalLength !== p || U.pointLength !== _ || U.spotLength !== g || U.rectAreaLength !== m || U.hemiLength !== f || U.numDirectionalShadows !== T || U.numPointShadows !== b || U.numSpotShadows !== M || U.numSpotMaps !== L || U.numLightProbes !== A) && (n.directional.length = p, n.spot.length = g, n.rectArea.length = m, n.point.length = _, n.hemi.length = f, n.directionalShadow.length = T, n.directionalShadowMap.length = T, n.pointShadow.length = b, n.pointShadowMap.length = b, n.spotShadow.length = M, n.spotShadowMap.length = M, n.directionalShadowMatrix.length = T, n.pointShadowMatrix.length = b, n.spotLightMatrix.length = M + L - R, n.spotLightMap.length = L, n.numSpotLightShadowsWithMaps = R, n.numLightProbes = A, U.directionalLength = p, U.pointLength = _, U.spotLength = g, U.rectAreaLength = m, U.hemiLength = f, U.numDirectionalShadows = T, U.numPointShadows = b, U.numSpotShadows = M, U.numSpotMaps = L, U.numLightProbes = A, n.version = mg++);
  }
  function l(c, h) {
    let u = 0, d = 0, p = 0, _ = 0, g = 0;
    const m = h.matrixWorldInverse;
    for (let f = 0, T = c.length; f < T; f++) {
      const b = c[f];
      if (b.isDirectionalLight) {
        const M = n.directional[u];
        M.direction.setFromMatrixPosition(b.matrixWorld), i.setFromMatrixPosition(b.target.matrixWorld), M.direction.sub(i), M.direction.transformDirection(m), u++;
      } else if (b.isSpotLight) {
        const M = n.spot[p];
        M.position.setFromMatrixPosition(b.matrixWorld), M.position.applyMatrix4(m), M.direction.setFromMatrixPosition(b.matrixWorld), i.setFromMatrixPosition(b.target.matrixWorld), M.direction.sub(i), M.direction.transformDirection(m), p++;
      } else if (b.isRectAreaLight) {
        const M = n.rectArea[_];
        M.position.setFromMatrixPosition(b.matrixWorld), M.position.applyMatrix4(m), a.identity(), r.copy(b.matrixWorld), r.premultiply(m), a.extractRotation(r), M.halfWidth.set(b.width * 0.5, 0, 0), M.halfHeight.set(0, b.height * 0.5, 0), M.halfWidth.applyMatrix4(a), M.halfHeight.applyMatrix4(a), _++;
      } else if (b.isPointLight) {
        const M = n.point[d];
        M.position.setFromMatrixPosition(b.matrixWorld), M.position.applyMatrix4(m), d++;
      } else if (b.isHemisphereLight) {
        const M = n.hemi[g];
        M.direction.setFromMatrixPosition(b.matrixWorld), M.direction.transformDirection(m), g++;
      }
    }
  }
  return { setup: o, setupView: l, state: n };
}
function sc(s3) {
  const e = new gg(s3), t = [], n = [];
  function i(h) {
    c.camera = h, t.length = 0, n.length = 0;
  }
  function r(h) {
    t.push(h);
  }
  function a(h) {
    n.push(h);
  }
  function o() {
    e.setup(t);
  }
  function l(h) {
    e.setupView(t, h);
  }
  const c = { lightsArray: t, shadowsArray: n, camera: null, lights: e, transmissionRenderTarget: {} };
  return { init: i, state: c, setupLights: o, setupLightsView: l, pushLight: r, pushShadow: a };
}
function vg(s3) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(i, r = 0) {
    const a = e.get(i);
    let o;
    return a === void 0 ? (o = new sc(s3), e.set(i, [o])) : r >= a.length ? (o = new sc(s3), a.push(o)) : o = a[r], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: t, dispose: n };
}
const xg = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, yg = `uniform sampler2D shadow_pass;
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
function Mg(s3, e, t) {
  let n = new So();
  const i = new we(), r = new we(), a = new Ke(), o = new _d({ depthPacking: su }), l = new gd(), c = {}, h = t.maxTextureSize, u = { [Cn]: Ot, [Ot]: Cn, [ln]: ln }, d = new Wn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new we() }, radius: { value: 4 } }, vertexShader: xg, fragmentShader: yg }), p = d.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const _ = new fn();
  _.setAttribute("position", new Lt(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const g = new Ut(_, d), m = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = Ec;
  let f = this.type;
  this.render = function(R, A, U) {
    if (m.enabled === false || m.autoUpdate === false && m.needsUpdate === false || R.length === 0) return;
    const S = s3.getRenderTarget(), y = s3.getActiveCubeFace(), C = s3.getActiveMipmapLevel(), W = s3.state;
    W.setBlending(Vn), W.buffers.color.setClear(1, 1, 1, 1), W.buffers.depth.setTest(true), W.setScissorTest(false);
    const z = f !== En && this.type === En, $ = f === En && this.type !== En;
    for (let Z = 0, q = R.length; Z < q; Z++) {
      const Q = R[Z], V = Q.shadow;
      if (V === void 0) {
        console.warn("THREE.WebGLShadowMap:", Q, "has no shadow.");
        continue;
      }
      if (V.autoUpdate === false && V.needsUpdate === false) continue;
      i.copy(V.mapSize);
      const ae = V.getFrameExtents();
      if (i.multiply(ae), r.copy(V.mapSize), (i.x > h || i.y > h) && (i.x > h && (r.x = Math.floor(h / ae.x), i.x = r.x * ae.x, V.mapSize.x = r.x), i.y > h && (r.y = Math.floor(h / ae.y), i.y = r.y * ae.y, V.mapSize.y = r.y)), V.map === null || z === true || $ === true) {
        const ye = this.type !== En ? { minFilter: Pt, magFilter: Pt } : {};
        V.map !== null && V.map.dispose(), V.map = new hi(i.x, i.y, ye), V.map.texture.name = Q.name + ".shadowMap", V.camera.updateProjectionMatrix();
      }
      s3.setRenderTarget(V.map), s3.clear();
      const de = V.getViewportCount();
      for (let ye = 0; ye < de; ye++) {
        const Be = V.getViewport(ye);
        a.set(r.x * Be.x, r.y * Be.y, r.x * Be.z, r.y * Be.w), W.viewport(a), V.updateMatrices(Q, ye), n = V.getFrustum(), M(A, U, V.camera, Q, this.type);
      }
      V.isPointLightShadow !== true && this.type === En && T(V, U), V.needsUpdate = false;
    }
    f = this.type, m.needsUpdate = false, s3.setRenderTarget(S, y, C);
  };
  function T(R, A) {
    const U = e.update(g);
    d.defines.VSM_SAMPLES !== R.blurSamples && (d.defines.VSM_SAMPLES = R.blurSamples, p.defines.VSM_SAMPLES = R.blurSamples, d.needsUpdate = true, p.needsUpdate = true), R.mapPass === null && (R.mapPass = new hi(i.x, i.y)), d.uniforms.shadow_pass.value = R.map.texture, d.uniforms.resolution.value = R.mapSize, d.uniforms.radius.value = R.radius, s3.setRenderTarget(R.mapPass), s3.clear(), s3.renderBufferDirect(A, null, U, d, g, null), p.uniforms.shadow_pass.value = R.mapPass.texture, p.uniforms.resolution.value = R.mapSize, p.uniforms.radius.value = R.radius, s3.setRenderTarget(R.map), s3.clear(), s3.renderBufferDirect(A, null, U, p, g, null);
  }
  function b(R, A, U, S) {
    let y = null;
    const C = U.isPointLight === true ? R.customDistanceMaterial : R.customDepthMaterial;
    if (C !== void 0) y = C;
    else if (y = U.isPointLight === true ? l : o, s3.localClippingEnabled && A.clipShadows === true && Array.isArray(A.clippingPlanes) && A.clippingPlanes.length !== 0 || A.displacementMap && A.displacementScale !== 0 || A.alphaMap && A.alphaTest > 0 || A.map && A.alphaTest > 0) {
      const W = y.uuid, z = A.uuid;
      let $ = c[W];
      $ === void 0 && ($ = {}, c[W] = $);
      let Z = $[z];
      Z === void 0 && (Z = y.clone(), $[z] = Z, A.addEventListener("dispose", L)), y = Z;
    }
    if (y.visible = A.visible, y.wireframe = A.wireframe, S === En ? y.side = A.shadowSide !== null ? A.shadowSide : A.side : y.side = A.shadowSide !== null ? A.shadowSide : u[A.side], y.alphaMap = A.alphaMap, y.alphaTest = A.alphaTest, y.map = A.map, y.clipShadows = A.clipShadows, y.clippingPlanes = A.clippingPlanes, y.clipIntersection = A.clipIntersection, y.displacementMap = A.displacementMap, y.displacementScale = A.displacementScale, y.displacementBias = A.displacementBias, y.wireframeLinewidth = A.wireframeLinewidth, y.linewidth = A.linewidth, U.isPointLight === true && y.isMeshDistanceMaterial === true) {
      const W = s3.properties.get(y);
      W.light = U;
    }
    return y;
  }
  function M(R, A, U, S, y) {
    if (R.visible === false) return;
    if (R.layers.test(A.layers) && (R.isMesh || R.isLine || R.isPoints) && (R.castShadow || R.receiveShadow && y === En) && (!R.frustumCulled || n.intersectsObject(R))) {
      R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse, R.matrixWorld);
      const z = e.update(R), $ = R.material;
      if (Array.isArray($)) {
        const Z = z.groups;
        for (let q = 0, Q = Z.length; q < Q; q++) {
          const V = Z[q], ae = $[V.materialIndex];
          if (ae && ae.visible) {
            const de = b(R, ae, S, y);
            R.onBeforeShadow(s3, R, A, U, z, de, V), s3.renderBufferDirect(U, null, z, de, R, V), R.onAfterShadow(s3, R, A, U, z, de, V);
          }
        }
      } else if ($.visible) {
        const Z = b(R, $, S, y);
        R.onBeforeShadow(s3, R, A, U, z, Z, null), s3.renderBufferDirect(U, null, z, Z, R, null), R.onAfterShadow(s3, R, A, U, z, Z, null);
      }
    }
    const W = R.children;
    for (let z = 0, $ = W.length; z < $; z++) M(W[z], A, U, S, y);
  }
  function L(R) {
    R.target.removeEventListener("dispose", L);
    for (const U in c) {
      const S = c[U], y = R.target.uuid;
      y in S && (S[y].dispose(), delete S[y]);
    }
  }
}
const Sg = { [pa]: ma, [_a]: xa, [ga]: ya, [ki]: va, [ma]: pa, [xa]: _a, [ya]: ga, [va]: ki };
function Eg(s3, e) {
  function t() {
    let D = false;
    const se = new Ke();
    let H = null;
    const K = new Ke(0, 0, 0, 0);
    return { setMask: function(he) {
      H !== he && !D && (s3.colorMask(he, he, he, he), H = he);
    }, setLocked: function(he) {
      D = he;
    }, setClear: function(he, ce, De, ht, Et) {
      Et === true && (he *= ht, ce *= ht, De *= ht), se.set(he, ce, De, ht), K.equals(se) === false && (s3.clearColor(he, ce, De, ht), K.copy(se));
    }, reset: function() {
      D = false, H = null, K.set(-1, 0, 0, 0);
    } };
  }
  function n() {
    let D = false, se = false, H = null, K = null, he = null;
    return { setReversed: function(ce) {
      if (se !== ce) {
        const De = e.get("EXT_clip_control");
        se ? De.clipControlEXT(De.LOWER_LEFT_EXT, De.ZERO_TO_ONE_EXT) : De.clipControlEXT(De.LOWER_LEFT_EXT, De.NEGATIVE_ONE_TO_ONE_EXT);
        const ht = he;
        he = null, this.setClear(ht);
      }
      se = ce;
    }, getReversed: function() {
      return se;
    }, setTest: function(ce) {
      ce ? oe(s3.DEPTH_TEST) : be(s3.DEPTH_TEST);
    }, setMask: function(ce) {
      H !== ce && !D && (s3.depthMask(ce), H = ce);
    }, setFunc: function(ce) {
      if (se && (ce = Sg[ce]), K !== ce) {
        switch (ce) {
          case pa:
            s3.depthFunc(s3.NEVER);
            break;
          case ma:
            s3.depthFunc(s3.ALWAYS);
            break;
          case _a:
            s3.depthFunc(s3.LESS);
            break;
          case ki:
            s3.depthFunc(s3.LEQUAL);
            break;
          case ga:
            s3.depthFunc(s3.EQUAL);
            break;
          case va:
            s3.depthFunc(s3.GEQUAL);
            break;
          case xa:
            s3.depthFunc(s3.GREATER);
            break;
          case ya:
            s3.depthFunc(s3.NOTEQUAL);
            break;
          default:
            s3.depthFunc(s3.LEQUAL);
        }
        K = ce;
      }
    }, setLocked: function(ce) {
      D = ce;
    }, setClear: function(ce) {
      he !== ce && (se && (ce = 1 - ce), s3.clearDepth(ce), he = ce);
    }, reset: function() {
      D = false, H = null, K = null, he = null, se = false;
    } };
  }
  function i() {
    let D = false, se = null, H = null, K = null, he = null, ce = null, De = null, ht = null, Et = null;
    return { setTest: function(Je) {
      D || (Je ? oe(s3.STENCIL_TEST) : be(s3.STENCIL_TEST));
    }, setMask: function(Je) {
      se !== Je && !D && (s3.stencilMask(Je), se = Je);
    }, setFunc: function(Je, qt, _n) {
      (H !== Je || K !== qt || he !== _n) && (s3.stencilFunc(Je, qt, _n), H = Je, K = qt, he = _n);
    }, setOp: function(Je, qt, _n) {
      (ce !== Je || De !== qt || ht !== _n) && (s3.stencilOp(Je, qt, _n), ce = Je, De = qt, ht = _n);
    }, setLocked: function(Je) {
      D = Je;
    }, setClear: function(Je) {
      Et !== Je && (s3.clearStencil(Je), Et = Je);
    }, reset: function() {
      D = false, se = null, H = null, K = null, he = null, ce = null, De = null, ht = null, Et = null;
    } };
  }
  const r = new t(), a = new n(), o = new i(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let h = {}, u = {}, d = /* @__PURE__ */ new WeakMap(), p = [], _ = null, g = false, m = null, f = null, T = null, b = null, M = null, L = null, R = null, A = new Le(0, 0, 0), U = 0, S = false, y = null, C = null, W = null, z = null, $ = null;
  const Z = s3.getParameter(s3.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let q = false, Q = 0;
  const V = s3.getParameter(s3.VERSION);
  V.indexOf("WebGL") !== -1 ? (Q = parseFloat(/^WebGL (\d)/.exec(V)[1]), q = Q >= 1) : V.indexOf("OpenGL ES") !== -1 && (Q = parseFloat(/^OpenGL ES (\d)/.exec(V)[1]), q = Q >= 2);
  let ae = null, de = {};
  const ye = s3.getParameter(s3.SCISSOR_BOX), Be = s3.getParameter(s3.VIEWPORT), it = new Ke().fromArray(ye), X = new Ke().fromArray(Be);
  function ne(D, se, H, K) {
    const he = new Uint8Array(4), ce = s3.createTexture();
    s3.bindTexture(D, ce), s3.texParameteri(D, s3.TEXTURE_MIN_FILTER, s3.NEAREST), s3.texParameteri(D, s3.TEXTURE_MAG_FILTER, s3.NEAREST);
    for (let De = 0; De < H; De++) D === s3.TEXTURE_3D || D === s3.TEXTURE_2D_ARRAY ? s3.texImage3D(se, 0, s3.RGBA, 1, 1, K, 0, s3.RGBA, s3.UNSIGNED_BYTE, he) : s3.texImage2D(se + De, 0, s3.RGBA, 1, 1, 0, s3.RGBA, s3.UNSIGNED_BYTE, he);
    return ce;
  }
  const ge = {};
  ge[s3.TEXTURE_2D] = ne(s3.TEXTURE_2D, s3.TEXTURE_2D, 1), ge[s3.TEXTURE_CUBE_MAP] = ne(s3.TEXTURE_CUBE_MAP, s3.TEXTURE_CUBE_MAP_POSITIVE_X, 6), ge[s3.TEXTURE_2D_ARRAY] = ne(s3.TEXTURE_2D_ARRAY, s3.TEXTURE_2D_ARRAY, 1, 1), ge[s3.TEXTURE_3D] = ne(s3.TEXTURE_3D, s3.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), oe(s3.DEPTH_TEST), a.setFunc(ki), He(false), Ve(Ho), oe(s3.CULL_FACE), w(Vn);
  function oe(D) {
    h[D] !== true && (s3.enable(D), h[D] = true);
  }
  function be(D) {
    h[D] !== false && (s3.disable(D), h[D] = false);
  }
  function je(D, se) {
    return u[D] !== se ? (s3.bindFramebuffer(D, se), u[D] = se, D === s3.DRAW_FRAMEBUFFER && (u[s3.FRAMEBUFFER] = se), D === s3.FRAMEBUFFER && (u[s3.DRAW_FRAMEBUFFER] = se), true) : false;
  }
  function Ae(D, se) {
    let H = p, K = false;
    if (D) {
      H = d.get(se), H === void 0 && (H = [], d.set(se, H));
      const he = D.textures;
      if (H.length !== he.length || H[0] !== s3.COLOR_ATTACHMENT0) {
        for (let ce = 0, De = he.length; ce < De; ce++) H[ce] = s3.COLOR_ATTACHMENT0 + ce;
        H.length = he.length, K = true;
      }
    } else H[0] !== s3.BACK && (H[0] = s3.BACK, K = true);
    K && s3.drawBuffers(H);
  }
  function dt(D) {
    return _ !== D ? (s3.useProgram(D), _ = D, true) : false;
  }
  const lt = { [ri]: s3.FUNC_ADD, [Rh]: s3.FUNC_SUBTRACT, [Ch]: s3.FUNC_REVERSE_SUBTRACT };
  lt[Ph] = s3.MIN, lt[Lh] = s3.MAX;
  const ze = { [Dh]: s3.ZERO, [Ih]: s3.ONE, [Nh]: s3.SRC_COLOR, [da]: s3.SRC_ALPHA, [zh]: s3.SRC_ALPHA_SATURATE, [Bh]: s3.DST_COLOR, [Oh]: s3.DST_ALPHA, [Uh]: s3.ONE_MINUS_SRC_COLOR, [fa]: s3.ONE_MINUS_SRC_ALPHA, [kh]: s3.ONE_MINUS_DST_COLOR, [Fh]: s3.ONE_MINUS_DST_ALPHA, [Hh]: s3.CONSTANT_COLOR, [Vh]: s3.ONE_MINUS_CONSTANT_COLOR, [Gh]: s3.CONSTANT_ALPHA, [Wh]: s3.ONE_MINUS_CONSTANT_ALPHA };
  function w(D, se, H, K, he, ce, De, ht, Et, Je) {
    if (D === Vn) {
      g === true && (be(s3.BLEND), g = false);
      return;
    }
    if (g === false && (oe(s3.BLEND), g = true), D !== wh) {
      if (D !== m || Je !== S) {
        if ((f !== ri || M !== ri) && (s3.blendEquation(s3.FUNC_ADD), f = ri, M = ri), Je) switch (D) {
          case Ui:
            s3.blendFuncSeparate(s3.ONE, s3.ONE_MINUS_SRC_ALPHA, s3.ONE, s3.ONE_MINUS_SRC_ALPHA);
            break;
          case Vo:
            s3.blendFunc(s3.ONE, s3.ONE);
            break;
          case Go:
            s3.blendFuncSeparate(s3.ZERO, s3.ONE_MINUS_SRC_COLOR, s3.ZERO, s3.ONE);
            break;
          case Wo:
            s3.blendFuncSeparate(s3.ZERO, s3.SRC_COLOR, s3.ZERO, s3.SRC_ALPHA);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", D);
            break;
        }
        else switch (D) {
          case Ui:
            s3.blendFuncSeparate(s3.SRC_ALPHA, s3.ONE_MINUS_SRC_ALPHA, s3.ONE, s3.ONE_MINUS_SRC_ALPHA);
            break;
          case Vo:
            s3.blendFunc(s3.SRC_ALPHA, s3.ONE);
            break;
          case Go:
            s3.blendFuncSeparate(s3.ZERO, s3.ONE_MINUS_SRC_COLOR, s3.ZERO, s3.ONE);
            break;
          case Wo:
            s3.blendFunc(s3.ZERO, s3.SRC_COLOR);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", D);
            break;
        }
        T = null, b = null, L = null, R = null, A.set(0, 0, 0), U = 0, m = D, S = Je;
      }
      return;
    }
    he = he || se, ce = ce || H, De = De || K, (se !== f || he !== M) && (s3.blendEquationSeparate(lt[se], lt[he]), f = se, M = he), (H !== T || K !== b || ce !== L || De !== R) && (s3.blendFuncSeparate(ze[H], ze[K], ze[ce], ze[De]), T = H, b = K, L = ce, R = De), (ht.equals(A) === false || Et !== U) && (s3.blendColor(ht.r, ht.g, ht.b, Et), A.copy(ht), U = Et), m = D, S = false;
  }
  function Ht(D, se) {
    D.side === ln ? be(s3.CULL_FACE) : oe(s3.CULL_FACE);
    let H = D.side === Ot;
    se && (H = !H), He(H), D.blending === Ui && D.transparent === false ? w(Vn) : w(D.blending, D.blendEquation, D.blendSrc, D.blendDst, D.blendEquationAlpha, D.blendSrcAlpha, D.blendDstAlpha, D.blendColor, D.blendAlpha, D.premultipliedAlpha), a.setFunc(D.depthFunc), a.setTest(D.depthTest), a.setMask(D.depthWrite), r.setMask(D.colorWrite);
    const K = D.stencilWrite;
    o.setTest(K), K && (o.setMask(D.stencilWriteMask), o.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask), o.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)), at(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), D.alphaToCoverage === true ? oe(s3.SAMPLE_ALPHA_TO_COVERAGE) : be(s3.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function He(D) {
    y !== D && (D ? s3.frontFace(s3.CW) : s3.frontFace(s3.CCW), y = D);
  }
  function Ve(D) {
    D !== bh ? (oe(s3.CULL_FACE), D !== C && (D === Ho ? s3.cullFace(s3.BACK) : D === Th ? s3.cullFace(s3.FRONT) : s3.cullFace(s3.FRONT_AND_BACK))) : be(s3.CULL_FACE), C = D;
  }
  function Me(D) {
    D !== W && (q && s3.lineWidth(D), W = D);
  }
  function at(D, se, H) {
    D ? (oe(s3.POLYGON_OFFSET_FILL), (z !== se || $ !== H) && (s3.polygonOffset(se, H), z = se, $ = H)) : be(s3.POLYGON_OFFSET_FILL);
  }
  function xe(D) {
    D ? oe(s3.SCISSOR_TEST) : be(s3.SCISSOR_TEST);
  }
  function E(D) {
    D === void 0 && (D = s3.TEXTURE0 + Z - 1), ae !== D && (s3.activeTexture(D), ae = D);
  }
  function v(D, se, H) {
    H === void 0 && (ae === null ? H = s3.TEXTURE0 + Z - 1 : H = ae);
    let K = de[H];
    K === void 0 && (K = { type: void 0, texture: void 0 }, de[H] = K), (K.type !== D || K.texture !== se) && (ae !== H && (s3.activeTexture(H), ae = H), s3.bindTexture(D, se || ge[D]), K.type = D, K.texture = se);
  }
  function O() {
    const D = de[ae];
    D !== void 0 && D.type !== void 0 && (s3.bindTexture(D.type, null), D.type = void 0, D.texture = void 0);
  }
  function j() {
    try {
      s3.compressedTexImage2D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function J() {
    try {
      s3.compressedTexImage3D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function G() {
    try {
      s3.texSubImage2D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ve() {
    try {
      s3.texSubImage3D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function le() {
    try {
      s3.compressedTexSubImage2D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function fe() {
    try {
      s3.compressedTexSubImage3D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Xe() {
    try {
      s3.texStorage2D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function te() {
    try {
      s3.texStorage3D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function pe() {
    try {
      s3.texImage2D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Te() {
    try {
      s3.texImage3D(...arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Re(D) {
    it.equals(D) === false && (s3.scissor(D.x, D.y, D.z, D.w), it.copy(D));
  }
  function me(D) {
    X.equals(D) === false && (s3.viewport(D.x, D.y, D.z, D.w), X.copy(D));
  }
  function Ge(D, se) {
    let H = c.get(se);
    H === void 0 && (H = /* @__PURE__ */ new WeakMap(), c.set(se, H));
    let K = H.get(D);
    K === void 0 && (K = s3.getUniformBlockIndex(se, D.name), H.set(D, K));
  }
  function Ue(D, se) {
    const K = c.get(se).get(D);
    l.get(se) !== K && (s3.uniformBlockBinding(se, K, D.__bindingPointIndex), l.set(se, K));
  }
  function st() {
    s3.disable(s3.BLEND), s3.disable(s3.CULL_FACE), s3.disable(s3.DEPTH_TEST), s3.disable(s3.POLYGON_OFFSET_FILL), s3.disable(s3.SCISSOR_TEST), s3.disable(s3.STENCIL_TEST), s3.disable(s3.SAMPLE_ALPHA_TO_COVERAGE), s3.blendEquation(s3.FUNC_ADD), s3.blendFunc(s3.ONE, s3.ZERO), s3.blendFuncSeparate(s3.ONE, s3.ZERO, s3.ONE, s3.ZERO), s3.blendColor(0, 0, 0, 0), s3.colorMask(true, true, true, true), s3.clearColor(0, 0, 0, 0), s3.depthMask(true), s3.depthFunc(s3.LESS), a.setReversed(false), s3.clearDepth(1), s3.stencilMask(4294967295), s3.stencilFunc(s3.ALWAYS, 0, 4294967295), s3.stencilOp(s3.KEEP, s3.KEEP, s3.KEEP), s3.clearStencil(0), s3.cullFace(s3.BACK), s3.frontFace(s3.CCW), s3.polygonOffset(0, 0), s3.activeTexture(s3.TEXTURE0), s3.bindFramebuffer(s3.FRAMEBUFFER, null), s3.bindFramebuffer(s3.DRAW_FRAMEBUFFER, null), s3.bindFramebuffer(s3.READ_FRAMEBUFFER, null), s3.useProgram(null), s3.lineWidth(1), s3.scissor(0, 0, s3.canvas.width, s3.canvas.height), s3.viewport(0, 0, s3.canvas.width, s3.canvas.height), h = {}, ae = null, de = {}, u = {}, d = /* @__PURE__ */ new WeakMap(), p = [], _ = null, g = false, m = null, f = null, T = null, b = null, M = null, L = null, R = null, A = new Le(0, 0, 0), U = 0, S = false, y = null, C = null, W = null, z = null, $ = null, it.set(0, 0, s3.canvas.width, s3.canvas.height), X.set(0, 0, s3.canvas.width, s3.canvas.height), r.reset(), a.reset(), o.reset();
  }
  return { buffers: { color: r, depth: a, stencil: o }, enable: oe, disable: be, bindFramebuffer: je, drawBuffers: Ae, useProgram: dt, setBlending: w, setMaterial: Ht, setFlipSided: He, setCullFace: Ve, setLineWidth: Me, setPolygonOffset: at, setScissorTest: xe, activeTexture: E, bindTexture: v, unbindTexture: O, compressedTexImage2D: j, compressedTexImage3D: J, texImage2D: pe, texImage3D: Te, updateUBOMapping: Ge, uniformBlockBinding: Ue, texStorage2D: Xe, texStorage3D: te, texSubImage2D: G, texSubImage3D: ve, compressedTexSubImage2D: le, compressedTexSubImage3D: fe, scissor: Re, viewport: me, reset: st };
}
function bg(s3, e, t, n, i, r, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), c = new we(), h = /* @__PURE__ */ new WeakMap();
  let u;
  const d = /* @__PURE__ */ new WeakMap();
  let p = false;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function _(E, v) {
    return p ? new OffscreenCanvas(E, v) : Ts("canvas");
  }
  function g(E, v, O) {
    let j = 1;
    const J = xe(E);
    if ((J.width > O || J.height > O) && (j = O / Math.max(J.width, J.height)), j < 1) if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap || typeof VideoFrame < "u" && E instanceof VideoFrame) {
      const G = Math.floor(j * J.width), ve = Math.floor(j * J.height);
      u === void 0 && (u = _(G, ve));
      const le = v ? _(G, ve) : u;
      return le.width = G, le.height = ve, le.getContext("2d").drawImage(E, 0, 0, G, ve), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + J.width + "x" + J.height + ") to (" + G + "x" + ve + ")."), le;
    } else return "data" in E && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + J.width + "x" + J.height + ")."), E;
    return E;
  }
  function m(E) {
    return E.generateMipmaps;
  }
  function f(E) {
    s3.generateMipmap(E);
  }
  function T(E) {
    return E.isWebGLCubeRenderTarget ? s3.TEXTURE_CUBE_MAP : E.isWebGL3DRenderTarget ? s3.TEXTURE_3D : E.isWebGLArrayRenderTarget || E.isCompressedArrayTexture ? s3.TEXTURE_2D_ARRAY : s3.TEXTURE_2D;
  }
  function b(E, v, O, j, J = false) {
    if (E !== null) {
      if (s3[E] !== void 0) return s3[E];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
    }
    let G = v;
    if (v === s3.RED && (O === s3.FLOAT && (G = s3.R32F), O === s3.HALF_FLOAT && (G = s3.R16F), O === s3.UNSIGNED_BYTE && (G = s3.R8)), v === s3.RED_INTEGER && (O === s3.UNSIGNED_BYTE && (G = s3.R8UI), O === s3.UNSIGNED_SHORT && (G = s3.R16UI), O === s3.UNSIGNED_INT && (G = s3.R32UI), O === s3.BYTE && (G = s3.R8I), O === s3.SHORT && (G = s3.R16I), O === s3.INT && (G = s3.R32I)), v === s3.RG && (O === s3.FLOAT && (G = s3.RG32F), O === s3.HALF_FLOAT && (G = s3.RG16F), O === s3.UNSIGNED_BYTE && (G = s3.RG8)), v === s3.RG_INTEGER && (O === s3.UNSIGNED_BYTE && (G = s3.RG8UI), O === s3.UNSIGNED_SHORT && (G = s3.RG16UI), O === s3.UNSIGNED_INT && (G = s3.RG32UI), O === s3.BYTE && (G = s3.RG8I), O === s3.SHORT && (G = s3.RG16I), O === s3.INT && (G = s3.RG32I)), v === s3.RGB_INTEGER && (O === s3.UNSIGNED_BYTE && (G = s3.RGB8UI), O === s3.UNSIGNED_SHORT && (G = s3.RGB16UI), O === s3.UNSIGNED_INT && (G = s3.RGB32UI), O === s3.BYTE && (G = s3.RGB8I), O === s3.SHORT && (G = s3.RGB16I), O === s3.INT && (G = s3.RGB32I)), v === s3.RGBA_INTEGER && (O === s3.UNSIGNED_BYTE && (G = s3.RGBA8UI), O === s3.UNSIGNED_SHORT && (G = s3.RGBA16UI), O === s3.UNSIGNED_INT && (G = s3.RGBA32UI), O === s3.BYTE && (G = s3.RGBA8I), O === s3.SHORT && (G = s3.RGBA16I), O === s3.INT && (G = s3.RGBA32I)), v === s3.RGB && O === s3.UNSIGNED_INT_5_9_9_9_REV && (G = s3.RGB9_E5), v === s3.RGBA) {
      const ve = J ? _r : We.getTransfer(j);
      O === s3.FLOAT && (G = s3.RGBA32F), O === s3.HALF_FLOAT && (G = s3.RGBA16F), O === s3.UNSIGNED_BYTE && (G = ve === tt ? s3.SRGB8_ALPHA8 : s3.RGBA8), O === s3.UNSIGNED_SHORT_4_4_4_4 && (G = s3.RGBA4), O === s3.UNSIGNED_SHORT_5_5_5_1 && (G = s3.RGB5_A1);
    }
    return (G === s3.R16F || G === s3.R32F || G === s3.RG16F || G === s3.RG32F || G === s3.RGBA16F || G === s3.RGBA32F) && e.get("EXT_color_buffer_float"), G;
  }
  function M(E, v) {
    let O;
    return E ? v === null || v === ci || v === Gi ? O = s3.DEPTH24_STENCIL8 : v === en ? O = s3.DEPTH32F_STENCIL8 : v === Ss && (O = s3.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : v === null || v === ci || v === Gi ? O = s3.DEPTH_COMPONENT24 : v === en ? O = s3.DEPTH_COMPONENT32F : v === Ss && (O = s3.DEPTH_COMPONENT16), O;
  }
  function L(E, v) {
    return m(E) === true || E.isFramebufferTexture && E.minFilter !== Pt && E.minFilter !== zt ? Math.log2(Math.max(v.width, v.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? v.mipmaps.length : 1;
  }
  function R(E) {
    const v = E.target;
    v.removeEventListener("dispose", R), U(v), v.isVideoTexture && h.delete(v);
  }
  function A(E) {
    const v = E.target;
    v.removeEventListener("dispose", A), y(v);
  }
  function U(E) {
    const v = n.get(E);
    if (v.__webglInit === void 0) return;
    const O = E.source, j = d.get(O);
    if (j) {
      const J = j[v.__cacheKey];
      J.usedTimes--, J.usedTimes === 0 && S(E), Object.keys(j).length === 0 && d.delete(O);
    }
    n.remove(E);
  }
  function S(E) {
    const v = n.get(E);
    s3.deleteTexture(v.__webglTexture);
    const O = E.source, j = d.get(O);
    delete j[v.__cacheKey], a.memory.textures--;
  }
  function y(E) {
    const v = n.get(E);
    if (E.depthTexture && (E.depthTexture.dispose(), n.remove(E.depthTexture)), E.isWebGLCubeRenderTarget) for (let j = 0; j < 6; j++) {
      if (Array.isArray(v.__webglFramebuffer[j])) for (let J = 0; J < v.__webglFramebuffer[j].length; J++) s3.deleteFramebuffer(v.__webglFramebuffer[j][J]);
      else s3.deleteFramebuffer(v.__webglFramebuffer[j]);
      v.__webglDepthbuffer && s3.deleteRenderbuffer(v.__webglDepthbuffer[j]);
    }
    else {
      if (Array.isArray(v.__webglFramebuffer)) for (let j = 0; j < v.__webglFramebuffer.length; j++) s3.deleteFramebuffer(v.__webglFramebuffer[j]);
      else s3.deleteFramebuffer(v.__webglFramebuffer);
      if (v.__webglDepthbuffer && s3.deleteRenderbuffer(v.__webglDepthbuffer), v.__webglMultisampledFramebuffer && s3.deleteFramebuffer(v.__webglMultisampledFramebuffer), v.__webglColorRenderbuffer) for (let j = 0; j < v.__webglColorRenderbuffer.length; j++) v.__webglColorRenderbuffer[j] && s3.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);
      v.__webglDepthRenderbuffer && s3.deleteRenderbuffer(v.__webglDepthRenderbuffer);
    }
    const O = E.textures;
    for (let j = 0, J = O.length; j < J; j++) {
      const G = n.get(O[j]);
      G.__webglTexture && (s3.deleteTexture(G.__webglTexture), a.memory.textures--), n.remove(O[j]);
    }
    n.remove(E);
  }
  let C = 0;
  function W() {
    C = 0;
  }
  function z() {
    const E = C;
    return E >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + i.maxTextures), C += 1, E;
  }
  function $(E) {
    const v = [];
    return v.push(E.wrapS), v.push(E.wrapT), v.push(E.wrapR || 0), v.push(E.magFilter), v.push(E.minFilter), v.push(E.anisotropy), v.push(E.internalFormat), v.push(E.format), v.push(E.type), v.push(E.generateMipmaps), v.push(E.premultiplyAlpha), v.push(E.flipY), v.push(E.unpackAlignment), v.push(E.colorSpace), v.join();
  }
  function Z(E, v) {
    const O = n.get(E);
    if (E.isVideoTexture && Me(E), E.isRenderTargetTexture === false && E.version > 0 && O.__version !== E.version) {
      const j = E.image;
      if (j === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (j.complete === false) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        X(O, E, v);
        return;
      }
    }
    t.bindTexture(s3.TEXTURE_2D, O.__webglTexture, s3.TEXTURE0 + v);
  }
  function q(E, v) {
    const O = n.get(E);
    if (E.version > 0 && O.__version !== E.version) {
      X(O, E, v);
      return;
    }
    t.bindTexture(s3.TEXTURE_2D_ARRAY, O.__webglTexture, s3.TEXTURE0 + v);
  }
  function Q(E, v) {
    const O = n.get(E);
    if (E.version > 0 && O.__version !== E.version) {
      X(O, E, v);
      return;
    }
    t.bindTexture(s3.TEXTURE_3D, O.__webglTexture, s3.TEXTURE0 + v);
  }
  function V(E, v) {
    const O = n.get(E);
    if (E.version > 0 && O.__version !== E.version) {
      ne(O, E, v);
      return;
    }
    t.bindTexture(s3.TEXTURE_CUBE_MAP, O.__webglTexture, s3.TEXTURE0 + v);
  }
  const ae = { [Vi]: s3.REPEAT, [zn]: s3.CLAMP_TO_EDGE, [mr]: s3.MIRRORED_REPEAT }, de = { [Pt]: s3.NEAREST, [Ac]: s3.NEAREST_MIPMAP_NEAREST, [fs]: s3.NEAREST_MIPMAP_LINEAR, [zt]: s3.LINEAR, [lr]: s3.LINEAR_MIPMAP_NEAREST, [Tn]: s3.LINEAR_MIPMAP_LINEAR }, ye = { [au]: s3.NEVER, [du]: s3.ALWAYS, [ou]: s3.LESS, [Fc]: s3.LEQUAL, [lu]: s3.EQUAL, [uu]: s3.GEQUAL, [cu]: s3.GREATER, [hu]: s3.NOTEQUAL };
  function Be(E, v) {
    if (v.type === en && e.has("OES_texture_float_linear") === false && (v.magFilter === zt || v.magFilter === lr || v.magFilter === fs || v.magFilter === Tn || v.minFilter === zt || v.minFilter === lr || v.minFilter === fs || v.minFilter === Tn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), s3.texParameteri(E, s3.TEXTURE_WRAP_S, ae[v.wrapS]), s3.texParameteri(E, s3.TEXTURE_WRAP_T, ae[v.wrapT]), (E === s3.TEXTURE_3D || E === s3.TEXTURE_2D_ARRAY) && s3.texParameteri(E, s3.TEXTURE_WRAP_R, ae[v.wrapR]), s3.texParameteri(E, s3.TEXTURE_MAG_FILTER, de[v.magFilter]), s3.texParameteri(E, s3.TEXTURE_MIN_FILTER, de[v.minFilter]), v.compareFunction && (s3.texParameteri(E, s3.TEXTURE_COMPARE_MODE, s3.COMPARE_REF_TO_TEXTURE), s3.texParameteri(E, s3.TEXTURE_COMPARE_FUNC, ye[v.compareFunction])), e.has("EXT_texture_filter_anisotropic") === true) {
      if (v.magFilter === Pt || v.minFilter !== fs && v.minFilter !== Tn || v.type === en && e.has("OES_texture_float_linear") === false) return;
      if (v.anisotropy > 1 || n.get(v).__currentAnisotropy) {
        const O = e.get("EXT_texture_filter_anisotropic");
        s3.texParameterf(E, O.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, i.getMaxAnisotropy())), n.get(v).__currentAnisotropy = v.anisotropy;
      }
    }
  }
  function it(E, v) {
    let O = false;
    E.__webglInit === void 0 && (E.__webglInit = true, v.addEventListener("dispose", R));
    const j = v.source;
    let J = d.get(j);
    J === void 0 && (J = {}, d.set(j, J));
    const G = $(v);
    if (G !== E.__cacheKey) {
      J[G] === void 0 && (J[G] = { texture: s3.createTexture(), usedTimes: 0 }, a.memory.textures++, O = true), J[G].usedTimes++;
      const ve = J[E.__cacheKey];
      ve !== void 0 && (J[E.__cacheKey].usedTimes--, ve.usedTimes === 0 && S(v)), E.__cacheKey = G, E.__webglTexture = J[G].texture;
    }
    return O;
  }
  function X(E, v, O) {
    let j = s3.TEXTURE_2D;
    (v.isDataArrayTexture || v.isCompressedArrayTexture) && (j = s3.TEXTURE_2D_ARRAY), v.isData3DTexture && (j = s3.TEXTURE_3D);
    const J = it(E, v), G = v.source;
    t.bindTexture(j, E.__webglTexture, s3.TEXTURE0 + O);
    const ve = n.get(G);
    if (G.version !== ve.__version || J === true) {
      t.activeTexture(s3.TEXTURE0 + O);
      const le = We.getPrimaries(We.workingColorSpace), fe = v.colorSpace === kn ? null : We.getPrimaries(v.colorSpace), Xe = v.colorSpace === kn || le === fe ? s3.NONE : s3.BROWSER_DEFAULT_WEBGL;
      s3.pixelStorei(s3.UNPACK_FLIP_Y_WEBGL, v.flipY), s3.pixelStorei(s3.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), s3.pixelStorei(s3.UNPACK_ALIGNMENT, v.unpackAlignment), s3.pixelStorei(s3.UNPACK_COLORSPACE_CONVERSION_WEBGL, Xe);
      let te = g(v.image, false, i.maxTextureSize);
      te = at(v, te);
      const pe = r.convert(v.format, v.colorSpace), Te = r.convert(v.type);
      let Re = b(v.internalFormat, pe, Te, v.colorSpace, v.isVideoTexture);
      Be(j, v);
      let me;
      const Ge = v.mipmaps, Ue = v.isVideoTexture !== true, st = ve.__version === void 0 || J === true, D = G.dataReady, se = L(v, te);
      if (v.isDepthTexture) Re = M(v.format === Wi, v.type), st && (Ue ? t.texStorage2D(s3.TEXTURE_2D, 1, Re, te.width, te.height) : t.texImage2D(s3.TEXTURE_2D, 0, Re, te.width, te.height, 0, pe, Te, null));
      else if (v.isDataTexture) if (Ge.length > 0) {
        Ue && st && t.texStorage2D(s3.TEXTURE_2D, se, Re, Ge[0].width, Ge[0].height);
        for (let H = 0, K = Ge.length; H < K; H++) me = Ge[H], Ue ? D && t.texSubImage2D(s3.TEXTURE_2D, H, 0, 0, me.width, me.height, pe, Te, me.data) : t.texImage2D(s3.TEXTURE_2D, H, Re, me.width, me.height, 0, pe, Te, me.data);
        v.generateMipmaps = false;
      } else Ue ? (st && t.texStorage2D(s3.TEXTURE_2D, se, Re, te.width, te.height), D && t.texSubImage2D(s3.TEXTURE_2D, 0, 0, 0, te.width, te.height, pe, Te, te.data)) : t.texImage2D(s3.TEXTURE_2D, 0, Re, te.width, te.height, 0, pe, Te, te.data);
      else if (v.isCompressedTexture) if (v.isCompressedArrayTexture) {
        Ue && st && t.texStorage3D(s3.TEXTURE_2D_ARRAY, se, Re, Ge[0].width, Ge[0].height, te.depth);
        for (let H = 0, K = Ge.length; H < K; H++) if (me = Ge[H], v.format !== Yt) if (pe !== null) if (Ue) {
          if (D) if (v.layerUpdates.size > 0) {
            const he = Nl(me.width, me.height, v.format, v.type);
            for (const ce of v.layerUpdates) {
              const De = me.data.subarray(ce * he / me.data.BYTES_PER_ELEMENT, (ce + 1) * he / me.data.BYTES_PER_ELEMENT);
              t.compressedTexSubImage3D(s3.TEXTURE_2D_ARRAY, H, 0, 0, ce, me.width, me.height, 1, pe, De);
            }
            v.clearLayerUpdates();
          } else t.compressedTexSubImage3D(s3.TEXTURE_2D_ARRAY, H, 0, 0, 0, me.width, me.height, te.depth, pe, me.data);
        } else t.compressedTexImage3D(s3.TEXTURE_2D_ARRAY, H, Re, me.width, me.height, te.depth, 0, me.data, 0, 0);
        else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else Ue ? D && t.texSubImage3D(s3.TEXTURE_2D_ARRAY, H, 0, 0, 0, me.width, me.height, te.depth, pe, Te, me.data) : t.texImage3D(s3.TEXTURE_2D_ARRAY, H, Re, me.width, me.height, te.depth, 0, pe, Te, me.data);
      } else {
        Ue && st && t.texStorage2D(s3.TEXTURE_2D, se, Re, Ge[0].width, Ge[0].height);
        for (let H = 0, K = Ge.length; H < K; H++) me = Ge[H], v.format !== Yt ? pe !== null ? Ue ? D && t.compressedTexSubImage2D(s3.TEXTURE_2D, H, 0, 0, me.width, me.height, pe, me.data) : t.compressedTexImage2D(s3.TEXTURE_2D, H, Re, me.width, me.height, 0, me.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ue ? D && t.texSubImage2D(s3.TEXTURE_2D, H, 0, 0, me.width, me.height, pe, Te, me.data) : t.texImage2D(s3.TEXTURE_2D, H, Re, me.width, me.height, 0, pe, Te, me.data);
      }
      else if (v.isDataArrayTexture) if (Ue) {
        if (st && t.texStorage3D(s3.TEXTURE_2D_ARRAY, se, Re, te.width, te.height, te.depth), D) if (v.layerUpdates.size > 0) {
          const H = Nl(te.width, te.height, v.format, v.type);
          for (const K of v.layerUpdates) {
            const he = te.data.subarray(K * H / te.data.BYTES_PER_ELEMENT, (K + 1) * H / te.data.BYTES_PER_ELEMENT);
            t.texSubImage3D(s3.TEXTURE_2D_ARRAY, 0, 0, 0, K, te.width, te.height, 1, pe, Te, he);
          }
          v.clearLayerUpdates();
        } else t.texSubImage3D(s3.TEXTURE_2D_ARRAY, 0, 0, 0, 0, te.width, te.height, te.depth, pe, Te, te.data);
      } else t.texImage3D(s3.TEXTURE_2D_ARRAY, 0, Re, te.width, te.height, te.depth, 0, pe, Te, te.data);
      else if (v.isData3DTexture) Ue ? (st && t.texStorage3D(s3.TEXTURE_3D, se, Re, te.width, te.height, te.depth), D && t.texSubImage3D(s3.TEXTURE_3D, 0, 0, 0, 0, te.width, te.height, te.depth, pe, Te, te.data)) : t.texImage3D(s3.TEXTURE_3D, 0, Re, te.width, te.height, te.depth, 0, pe, Te, te.data);
      else if (v.isFramebufferTexture) {
        if (st) if (Ue) t.texStorage2D(s3.TEXTURE_2D, se, Re, te.width, te.height);
        else {
          let H = te.width, K = te.height;
          for (let he = 0; he < se; he++) t.texImage2D(s3.TEXTURE_2D, he, Re, H, K, 0, pe, Te, null), H >>= 1, K >>= 1;
        }
      } else if (Ge.length > 0) {
        if (Ue && st) {
          const H = xe(Ge[0]);
          t.texStorage2D(s3.TEXTURE_2D, se, Re, H.width, H.height);
        }
        for (let H = 0, K = Ge.length; H < K; H++) me = Ge[H], Ue ? D && t.texSubImage2D(s3.TEXTURE_2D, H, 0, 0, pe, Te, me) : t.texImage2D(s3.TEXTURE_2D, H, Re, pe, Te, me);
        v.generateMipmaps = false;
      } else if (Ue) {
        if (st) {
          const H = xe(te);
          t.texStorage2D(s3.TEXTURE_2D, se, Re, H.width, H.height);
        }
        D && t.texSubImage2D(s3.TEXTURE_2D, 0, 0, 0, pe, Te, te);
      } else t.texImage2D(s3.TEXTURE_2D, 0, Re, pe, Te, te);
      m(v) && f(j), ve.__version = G.version, v.onUpdate && v.onUpdate(v);
    }
    E.__version = v.version;
  }
  function ne(E, v, O) {
    if (v.image.length !== 6) return;
    const j = it(E, v), J = v.source;
    t.bindTexture(s3.TEXTURE_CUBE_MAP, E.__webglTexture, s3.TEXTURE0 + O);
    const G = n.get(J);
    if (J.version !== G.__version || j === true) {
      t.activeTexture(s3.TEXTURE0 + O);
      const ve = We.getPrimaries(We.workingColorSpace), le = v.colorSpace === kn ? null : We.getPrimaries(v.colorSpace), fe = v.colorSpace === kn || ve === le ? s3.NONE : s3.BROWSER_DEFAULT_WEBGL;
      s3.pixelStorei(s3.UNPACK_FLIP_Y_WEBGL, v.flipY), s3.pixelStorei(s3.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), s3.pixelStorei(s3.UNPACK_ALIGNMENT, v.unpackAlignment), s3.pixelStorei(s3.UNPACK_COLORSPACE_CONVERSION_WEBGL, fe);
      const Xe = v.isCompressedTexture || v.image[0].isCompressedTexture, te = v.image[0] && v.image[0].isDataTexture, pe = [];
      for (let K = 0; K < 6; K++) !Xe && !te ? pe[K] = g(v.image[K], true, i.maxCubemapSize) : pe[K] = te ? v.image[K].image : v.image[K], pe[K] = at(v, pe[K]);
      const Te = pe[0], Re = r.convert(v.format, v.colorSpace), me = r.convert(v.type), Ge = b(v.internalFormat, Re, me, v.colorSpace), Ue = v.isVideoTexture !== true, st = G.__version === void 0 || j === true, D = J.dataReady;
      let se = L(v, Te);
      Be(s3.TEXTURE_CUBE_MAP, v);
      let H;
      if (Xe) {
        Ue && st && t.texStorage2D(s3.TEXTURE_CUBE_MAP, se, Ge, Te.width, Te.height);
        for (let K = 0; K < 6; K++) {
          H = pe[K].mipmaps;
          for (let he = 0; he < H.length; he++) {
            const ce = H[he];
            v.format !== Yt ? Re !== null ? Ue ? D && t.compressedTexSubImage2D(s3.TEXTURE_CUBE_MAP_POSITIVE_X + K, he, 0, 0, ce.width, ce.height, Re, ce.data) : t.compressedTexImage2D(s3.TEXTURE_CUBE_MAP_POSITIVE_X + K, he, Ge, ce.width, ce.height, 0, ce.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ue ? D && t.texSubImage2D(s3.TEXTURE_CUBE_MAP_POSITIVE_X + K, he, 0, 0, ce.width, ce.height, Re, me, ce.data) : t.texImage2D(s3.TEXTURE_CUBE_MAP_POSITIVE_X + K, he, Ge, ce.width, ce.height, 0, Re, me, ce.data);
          }
        }
      } else {
        if (H = v.mipmaps, Ue && st) {
          H.length > 0 && se++;
          const K = xe(pe[0]);
          t.texStorage2D(s3.TEXTURE_CUBE_MAP, se, Ge, K.width, K.height);
        }
        for (let K = 0; K < 6; K++) if (te) {
          Ue ? D && t.texSubImage2D(s3.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, 0, 0, pe[K].width, pe[K].height, Re, me, pe[K].data) : t.texImage2D(s3.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, Ge, pe[K].width, pe[K].height, 0, Re, me, pe[K].data);
          for (let he = 0; he < H.length; he++) {
            const De = H[he].image[K].image;
            Ue ? D && t.texSubImage2D(s3.TEXTURE_CUBE_MAP_POSITIVE_X + K, he + 1, 0, 0, De.width, De.height, Re, me, De.data) : t.texImage2D(s3.TEXTURE_CUBE_MAP_POSITIVE_X + K, he + 1, Ge, De.width, De.height, 0, Re, me, De.data);
          }
        } else {
          Ue ? D && t.texSubImage2D(s3.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, 0, 0, Re, me, pe[K]) : t.texImage2D(s3.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, Ge, Re, me, pe[K]);
          for (let he = 0; he < H.length; he++) {
            const ce = H[he];
            Ue ? D && t.texSubImage2D(s3.TEXTURE_CUBE_MAP_POSITIVE_X + K, he + 1, 0, 0, Re, me, ce.image[K]) : t.texImage2D(s3.TEXTURE_CUBE_MAP_POSITIVE_X + K, he + 1, Ge, Re, me, ce.image[K]);
          }
        }
      }
      m(v) && f(s3.TEXTURE_CUBE_MAP), G.__version = J.version, v.onUpdate && v.onUpdate(v);
    }
    E.__version = v.version;
  }
  function ge(E, v, O, j, J, G) {
    const ve = r.convert(O.format, O.colorSpace), le = r.convert(O.type), fe = b(O.internalFormat, ve, le, O.colorSpace), Xe = n.get(v), te = n.get(O);
    if (te.__renderTarget = v, !Xe.__hasExternalTextures) {
      const pe = Math.max(1, v.width >> G), Te = Math.max(1, v.height >> G);
      J === s3.TEXTURE_3D || J === s3.TEXTURE_2D_ARRAY ? t.texImage3D(J, G, fe, pe, Te, v.depth, 0, ve, le, null) : t.texImage2D(J, G, fe, pe, Te, 0, ve, le, null);
    }
    t.bindFramebuffer(s3.FRAMEBUFFER, E), Ve(v) ? o.framebufferTexture2DMultisampleEXT(s3.FRAMEBUFFER, j, J, te.__webglTexture, 0, He(v)) : (J === s3.TEXTURE_2D || J >= s3.TEXTURE_CUBE_MAP_POSITIVE_X && J <= s3.TEXTURE_CUBE_MAP_NEGATIVE_Z) && s3.framebufferTexture2D(s3.FRAMEBUFFER, j, J, te.__webglTexture, G), t.bindFramebuffer(s3.FRAMEBUFFER, null);
  }
  function oe(E, v, O) {
    if (s3.bindRenderbuffer(s3.RENDERBUFFER, E), v.depthBuffer) {
      const j = v.depthTexture, J = j && j.isDepthTexture ? j.type : null, G = M(v.stencilBuffer, J), ve = v.stencilBuffer ? s3.DEPTH_STENCIL_ATTACHMENT : s3.DEPTH_ATTACHMENT, le = He(v);
      Ve(v) ? o.renderbufferStorageMultisampleEXT(s3.RENDERBUFFER, le, G, v.width, v.height) : O ? s3.renderbufferStorageMultisample(s3.RENDERBUFFER, le, G, v.width, v.height) : s3.renderbufferStorage(s3.RENDERBUFFER, G, v.width, v.height), s3.framebufferRenderbuffer(s3.FRAMEBUFFER, ve, s3.RENDERBUFFER, E);
    } else {
      const j = v.textures;
      for (let J = 0; J < j.length; J++) {
        const G = j[J], ve = r.convert(G.format, G.colorSpace), le = r.convert(G.type), fe = b(G.internalFormat, ve, le, G.colorSpace), Xe = He(v);
        O && Ve(v) === false ? s3.renderbufferStorageMultisample(s3.RENDERBUFFER, Xe, fe, v.width, v.height) : Ve(v) ? o.renderbufferStorageMultisampleEXT(s3.RENDERBUFFER, Xe, fe, v.width, v.height) : s3.renderbufferStorage(s3.RENDERBUFFER, fe, v.width, v.height);
      }
    }
    s3.bindRenderbuffer(s3.RENDERBUFFER, null);
  }
  function be(E, v) {
    if (v && v.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(s3.FRAMEBUFFER, E), !(v.depthTexture && v.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const j = n.get(v.depthTexture);
    j.__renderTarget = v, (!j.__webglTexture || v.depthTexture.image.width !== v.width || v.depthTexture.image.height !== v.height) && (v.depthTexture.image.width = v.width, v.depthTexture.image.height = v.height, v.depthTexture.needsUpdate = true), Z(v.depthTexture, 0);
    const J = j.__webglTexture, G = He(v);
    if (v.depthTexture.format === Oi) Ve(v) ? o.framebufferTexture2DMultisampleEXT(s3.FRAMEBUFFER, s3.DEPTH_ATTACHMENT, s3.TEXTURE_2D, J, 0, G) : s3.framebufferTexture2D(s3.FRAMEBUFFER, s3.DEPTH_ATTACHMENT, s3.TEXTURE_2D, J, 0);
    else if (v.depthTexture.format === Wi) Ve(v) ? o.framebufferTexture2DMultisampleEXT(s3.FRAMEBUFFER, s3.DEPTH_STENCIL_ATTACHMENT, s3.TEXTURE_2D, J, 0, G) : s3.framebufferTexture2D(s3.FRAMEBUFFER, s3.DEPTH_STENCIL_ATTACHMENT, s3.TEXTURE_2D, J, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function je(E) {
    const v = n.get(E), O = E.isWebGLCubeRenderTarget === true;
    if (v.__boundDepthTexture !== E.depthTexture) {
      const j = E.depthTexture;
      if (v.__depthDisposeCallback && v.__depthDisposeCallback(), j) {
        const J = () => {
          delete v.__boundDepthTexture, delete v.__depthDisposeCallback, j.removeEventListener("dispose", J);
        };
        j.addEventListener("dispose", J), v.__depthDisposeCallback = J;
      }
      v.__boundDepthTexture = j;
    }
    if (E.depthTexture && !v.__autoAllocateDepthBuffer) {
      if (O) throw new Error("target.depthTexture not supported in Cube render targets");
      be(v.__webglFramebuffer, E);
    } else if (O) {
      v.__webglDepthbuffer = [];
      for (let j = 0; j < 6; j++) if (t.bindFramebuffer(s3.FRAMEBUFFER, v.__webglFramebuffer[j]), v.__webglDepthbuffer[j] === void 0) v.__webglDepthbuffer[j] = s3.createRenderbuffer(), oe(v.__webglDepthbuffer[j], E, false);
      else {
        const J = E.stencilBuffer ? s3.DEPTH_STENCIL_ATTACHMENT : s3.DEPTH_ATTACHMENT, G = v.__webglDepthbuffer[j];
        s3.bindRenderbuffer(s3.RENDERBUFFER, G), s3.framebufferRenderbuffer(s3.FRAMEBUFFER, J, s3.RENDERBUFFER, G);
      }
    } else if (t.bindFramebuffer(s3.FRAMEBUFFER, v.__webglFramebuffer), v.__webglDepthbuffer === void 0) v.__webglDepthbuffer = s3.createRenderbuffer(), oe(v.__webglDepthbuffer, E, false);
    else {
      const j = E.stencilBuffer ? s3.DEPTH_STENCIL_ATTACHMENT : s3.DEPTH_ATTACHMENT, J = v.__webglDepthbuffer;
      s3.bindRenderbuffer(s3.RENDERBUFFER, J), s3.framebufferRenderbuffer(s3.FRAMEBUFFER, j, s3.RENDERBUFFER, J);
    }
    t.bindFramebuffer(s3.FRAMEBUFFER, null);
  }
  function Ae(E, v, O) {
    const j = n.get(E);
    v !== void 0 && ge(j.__webglFramebuffer, E, E.texture, s3.COLOR_ATTACHMENT0, s3.TEXTURE_2D, 0), O !== void 0 && je(E);
  }
  function dt(E) {
    const v = E.texture, O = n.get(E), j = n.get(v);
    E.addEventListener("dispose", A);
    const J = E.textures, G = E.isWebGLCubeRenderTarget === true, ve = J.length > 1;
    if (ve || (j.__webglTexture === void 0 && (j.__webglTexture = s3.createTexture()), j.__version = v.version, a.memory.textures++), G) {
      O.__webglFramebuffer = [];
      for (let le = 0; le < 6; le++) if (v.mipmaps && v.mipmaps.length > 0) {
        O.__webglFramebuffer[le] = [];
        for (let fe = 0; fe < v.mipmaps.length; fe++) O.__webglFramebuffer[le][fe] = s3.createFramebuffer();
      } else O.__webglFramebuffer[le] = s3.createFramebuffer();
    } else {
      if (v.mipmaps && v.mipmaps.length > 0) {
        O.__webglFramebuffer = [];
        for (let le = 0; le < v.mipmaps.length; le++) O.__webglFramebuffer[le] = s3.createFramebuffer();
      } else O.__webglFramebuffer = s3.createFramebuffer();
      if (ve) for (let le = 0, fe = J.length; le < fe; le++) {
        const Xe = n.get(J[le]);
        Xe.__webglTexture === void 0 && (Xe.__webglTexture = s3.createTexture(), a.memory.textures++);
      }
      if (E.samples > 0 && Ve(E) === false) {
        O.__webglMultisampledFramebuffer = s3.createFramebuffer(), O.__webglColorRenderbuffer = [], t.bindFramebuffer(s3.FRAMEBUFFER, O.__webglMultisampledFramebuffer);
        for (let le = 0; le < J.length; le++) {
          const fe = J[le];
          O.__webglColorRenderbuffer[le] = s3.createRenderbuffer(), s3.bindRenderbuffer(s3.RENDERBUFFER, O.__webglColorRenderbuffer[le]);
          const Xe = r.convert(fe.format, fe.colorSpace), te = r.convert(fe.type), pe = b(fe.internalFormat, Xe, te, fe.colorSpace, E.isXRRenderTarget === true), Te = He(E);
          s3.renderbufferStorageMultisample(s3.RENDERBUFFER, Te, pe, E.width, E.height), s3.framebufferRenderbuffer(s3.FRAMEBUFFER, s3.COLOR_ATTACHMENT0 + le, s3.RENDERBUFFER, O.__webglColorRenderbuffer[le]);
        }
        s3.bindRenderbuffer(s3.RENDERBUFFER, null), E.depthBuffer && (O.__webglDepthRenderbuffer = s3.createRenderbuffer(), oe(O.__webglDepthRenderbuffer, E, true)), t.bindFramebuffer(s3.FRAMEBUFFER, null);
      }
    }
    if (G) {
      t.bindTexture(s3.TEXTURE_CUBE_MAP, j.__webglTexture), Be(s3.TEXTURE_CUBE_MAP, v);
      for (let le = 0; le < 6; le++) if (v.mipmaps && v.mipmaps.length > 0) for (let fe = 0; fe < v.mipmaps.length; fe++) ge(O.__webglFramebuffer[le][fe], E, v, s3.COLOR_ATTACHMENT0, s3.TEXTURE_CUBE_MAP_POSITIVE_X + le, fe);
      else ge(O.__webglFramebuffer[le], E, v, s3.COLOR_ATTACHMENT0, s3.TEXTURE_CUBE_MAP_POSITIVE_X + le, 0);
      m(v) && f(s3.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ve) {
      for (let le = 0, fe = J.length; le < fe; le++) {
        const Xe = J[le], te = n.get(Xe);
        t.bindTexture(s3.TEXTURE_2D, te.__webglTexture), Be(s3.TEXTURE_2D, Xe), ge(O.__webglFramebuffer, E, Xe, s3.COLOR_ATTACHMENT0 + le, s3.TEXTURE_2D, 0), m(Xe) && f(s3.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let le = s3.TEXTURE_2D;
      if ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (le = E.isWebGL3DRenderTarget ? s3.TEXTURE_3D : s3.TEXTURE_2D_ARRAY), t.bindTexture(le, j.__webglTexture), Be(le, v), v.mipmaps && v.mipmaps.length > 0) for (let fe = 0; fe < v.mipmaps.length; fe++) ge(O.__webglFramebuffer[fe], E, v, s3.COLOR_ATTACHMENT0, le, fe);
      else ge(O.__webglFramebuffer, E, v, s3.COLOR_ATTACHMENT0, le, 0);
      m(v) && f(le), t.unbindTexture();
    }
    E.depthBuffer && je(E);
  }
  function lt(E) {
    const v = E.textures;
    for (let O = 0, j = v.length; O < j; O++) {
      const J = v[O];
      if (m(J)) {
        const G = T(E), ve = n.get(J).__webglTexture;
        t.bindTexture(G, ve), f(G), t.unbindTexture();
      }
    }
  }
  const ze = [], w = [];
  function Ht(E) {
    if (E.samples > 0) {
      if (Ve(E) === false) {
        const v = E.textures, O = E.width, j = E.height;
        let J = s3.COLOR_BUFFER_BIT;
        const G = E.stencilBuffer ? s3.DEPTH_STENCIL_ATTACHMENT : s3.DEPTH_ATTACHMENT, ve = n.get(E), le = v.length > 1;
        if (le) for (let fe = 0; fe < v.length; fe++) t.bindFramebuffer(s3.FRAMEBUFFER, ve.__webglMultisampledFramebuffer), s3.framebufferRenderbuffer(s3.FRAMEBUFFER, s3.COLOR_ATTACHMENT0 + fe, s3.RENDERBUFFER, null), t.bindFramebuffer(s3.FRAMEBUFFER, ve.__webglFramebuffer), s3.framebufferTexture2D(s3.DRAW_FRAMEBUFFER, s3.COLOR_ATTACHMENT0 + fe, s3.TEXTURE_2D, null, 0);
        t.bindFramebuffer(s3.READ_FRAMEBUFFER, ve.__webglMultisampledFramebuffer), t.bindFramebuffer(s3.DRAW_FRAMEBUFFER, ve.__webglFramebuffer);
        for (let fe = 0; fe < v.length; fe++) {
          if (E.resolveDepthBuffer && (E.depthBuffer && (J |= s3.DEPTH_BUFFER_BIT), E.stencilBuffer && E.resolveStencilBuffer && (J |= s3.STENCIL_BUFFER_BIT)), le) {
            s3.framebufferRenderbuffer(s3.READ_FRAMEBUFFER, s3.COLOR_ATTACHMENT0, s3.RENDERBUFFER, ve.__webglColorRenderbuffer[fe]);
            const Xe = n.get(v[fe]).__webglTexture;
            s3.framebufferTexture2D(s3.DRAW_FRAMEBUFFER, s3.COLOR_ATTACHMENT0, s3.TEXTURE_2D, Xe, 0);
          }
          s3.blitFramebuffer(0, 0, O, j, 0, 0, O, j, J, s3.NEAREST), l === true && (ze.length = 0, w.length = 0, ze.push(s3.COLOR_ATTACHMENT0 + fe), E.depthBuffer && E.resolveDepthBuffer === false && (ze.push(G), w.push(G), s3.invalidateFramebuffer(s3.DRAW_FRAMEBUFFER, w)), s3.invalidateFramebuffer(s3.READ_FRAMEBUFFER, ze));
        }
        if (t.bindFramebuffer(s3.READ_FRAMEBUFFER, null), t.bindFramebuffer(s3.DRAW_FRAMEBUFFER, null), le) for (let fe = 0; fe < v.length; fe++) {
          t.bindFramebuffer(s3.FRAMEBUFFER, ve.__webglMultisampledFramebuffer), s3.framebufferRenderbuffer(s3.FRAMEBUFFER, s3.COLOR_ATTACHMENT0 + fe, s3.RENDERBUFFER, ve.__webglColorRenderbuffer[fe]);
          const Xe = n.get(v[fe]).__webglTexture;
          t.bindFramebuffer(s3.FRAMEBUFFER, ve.__webglFramebuffer), s3.framebufferTexture2D(s3.DRAW_FRAMEBUFFER, s3.COLOR_ATTACHMENT0 + fe, s3.TEXTURE_2D, Xe, 0);
        }
        t.bindFramebuffer(s3.DRAW_FRAMEBUFFER, ve.__webglMultisampledFramebuffer);
      } else if (E.depthBuffer && E.resolveDepthBuffer === false && l) {
        const v = E.stencilBuffer ? s3.DEPTH_STENCIL_ATTACHMENT : s3.DEPTH_ATTACHMENT;
        s3.invalidateFramebuffer(s3.DRAW_FRAMEBUFFER, [v]);
      }
    }
  }
  function He(E) {
    return Math.min(i.maxSamples, E.samples);
  }
  function Ve(E) {
    const v = n.get(E);
    return E.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === true && v.__useRenderToTexture !== false;
  }
  function Me(E) {
    const v = a.render.frame;
    h.get(E) !== v && (h.set(E, v), E.update());
  }
  function at(E, v) {
    const O = E.colorSpace, j = E.format, J = E.type;
    return E.isCompressedTexture === true || E.isVideoTexture === true || O !== Dt && O !== kn && (We.getTransfer(O) === tt ? (j !== Yt || J !== Pn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", O)), v;
  }
  function xe(E) {
    return typeof HTMLImageElement < "u" && E instanceof HTMLImageElement ? (c.width = E.naturalWidth || E.width, c.height = E.naturalHeight || E.height) : typeof VideoFrame < "u" && E instanceof VideoFrame ? (c.width = E.displayWidth, c.height = E.displayHeight) : (c.width = E.width, c.height = E.height), c;
  }
  this.allocateTextureUnit = z, this.resetTextureUnits = W, this.setTexture2D = Z, this.setTexture2DArray = q, this.setTexture3D = Q, this.setTextureCube = V, this.rebindTextures = Ae, this.setupRenderTarget = dt, this.updateRenderTargetMipmap = lt, this.updateMultisampleRenderTarget = Ht, this.setupDepthRenderbuffer = je, this.setupFrameBufferTexture = ge, this.useMultisampledRTT = Ve;
}
function Tg(s3, e) {
  function t(n, i = kn) {
    let r;
    const a = We.getTransfer(i);
    if (n === Pn) return s3.UNSIGNED_BYTE;
    if (n === ho) return s3.UNSIGNED_SHORT_4_4_4_4;
    if (n === uo) return s3.UNSIGNED_SHORT_5_5_5_1;
    if (n === Cc) return s3.UNSIGNED_INT_5_9_9_9_REV;
    if (n === wc) return s3.BYTE;
    if (n === Rc) return s3.SHORT;
    if (n === Ss) return s3.UNSIGNED_SHORT;
    if (n === co) return s3.INT;
    if (n === ci) return s3.UNSIGNED_INT;
    if (n === en) return s3.FLOAT;
    if (n === ws) return s3.HALF_FLOAT;
    if (n === Pc) return s3.ALPHA;
    if (n === Lc) return s3.RGB;
    if (n === Yt) return s3.RGBA;
    if (n === Dc) return s3.LUMINANCE;
    if (n === Ic) return s3.LUMINANCE_ALPHA;
    if (n === Oi) return s3.DEPTH_COMPONENT;
    if (n === Wi) return s3.DEPTH_STENCIL;
    if (n === fo) return s3.RED;
    if (n === po) return s3.RED_INTEGER;
    if (n === Nc) return s3.RG;
    if (n === mo) return s3.RG_INTEGER;
    if (n === _o) return s3.RGBA_INTEGER;
    if (n === cr || n === hr || n === ur || n === dr) if (a === tt) if (r = e.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
      if (n === cr) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (n === hr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (n === ur) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (n === dr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (r = e.get("WEBGL_compressed_texture_s3tc"), r !== null) {
      if (n === cr) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (n === hr) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (n === ur) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (n === dr) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (n === Ea || n === ba || n === Ta || n === Aa) if (r = e.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
      if (n === Ea) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (n === ba) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (n === Ta) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (n === Aa) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (n === wa || n === Ra || n === Ca) if (r = e.get("WEBGL_compressed_texture_etc"), r !== null) {
      if (n === wa || n === Ra) return a === tt ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
      if (n === Ca) return a === tt ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
    } else return null;
    if (n === Pa || n === La || n === Da || n === Ia || n === Na || n === Ua || n === Oa || n === Fa || n === Ba || n === ka || n === za || n === Ha || n === Va || n === Ga) if (r = e.get("WEBGL_compressed_texture_astc"), r !== null) {
      if (n === Pa) return a === tt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (n === La) return a === tt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (n === Da) return a === tt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (n === Ia) return a === tt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (n === Na) return a === tt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (n === Ua) return a === tt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (n === Oa) return a === tt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (n === Fa) return a === tt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (n === Ba) return a === tt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (n === ka) return a === tt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (n === za) return a === tt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (n === Ha) return a === tt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (n === Va) return a === tt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (n === Ga) return a === tt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (n === fr || n === Wa || n === Xa) if (r = e.get("EXT_texture_compression_bptc"), r !== null) {
      if (n === fr) return a === tt ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (n === Wa) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (n === Xa) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (n === Uc || n === Ya || n === qa || n === ja) if (r = e.get("EXT_texture_compression_rgtc"), r !== null) {
      if (n === fr) return r.COMPRESSED_RED_RGTC1_EXT;
      if (n === Ya) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (n === qa) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (n === ja) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return n === Gi ? s3.UNSIGNED_INT_24_8 : s3[n] !== void 0 ? s3[n] : null;
  }
  return { convert: t };
}
const Ag = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, wg = `
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
class Rg {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, n) {
    if (this.texture === null) {
      const i = new xt(), r = e.properties.get(i);
      r.__webglTexture = t.texture, (t.depthNear !== n.depthNear || t.depthFar !== n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = i;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new Wn({ vertexShader: Ag, fragmentShader: wg, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: t.z }, depthHeight: { value: t.w } } });
      this.mesh = new Ut(new Er(20, 20), n);
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
class Cg extends ui {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, r = 1, a = null, o = "local-floor", l = 1, c = null, h = null, u = null, d = null, p = null, _ = null;
    const g = new Rg(), m = t.getContextAttributes();
    let f = null, T = null;
    const b = [], M = [], L = new we();
    let R = null;
    const A = new Ct();
    A.viewport = new Ke();
    const U = new Ct();
    U.viewport = new Ke();
    const S = [A, U], y = new kd();
    let C = null, W = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(X) {
      let ne = b[X];
      return ne === void 0 && (ne = new jr(), b[X] = ne), ne.getTargetRaySpace();
    }, this.getControllerGrip = function(X) {
      let ne = b[X];
      return ne === void 0 && (ne = new jr(), b[X] = ne), ne.getGripSpace();
    }, this.getHand = function(X) {
      let ne = b[X];
      return ne === void 0 && (ne = new jr(), b[X] = ne), ne.getHandSpace();
    };
    function z(X) {
      const ne = M.indexOf(X.inputSource);
      if (ne === -1) return;
      const ge = b[ne];
      ge !== void 0 && (ge.update(X.inputSource, X.frame, c || a), ge.dispatchEvent({ type: X.type, data: X.inputSource }));
    }
    function $() {
      i.removeEventListener("select", z), i.removeEventListener("selectstart", z), i.removeEventListener("selectend", z), i.removeEventListener("squeeze", z), i.removeEventListener("squeezestart", z), i.removeEventListener("squeezeend", z), i.removeEventListener("end", $), i.removeEventListener("inputsourceschange", Z);
      for (let X = 0; X < b.length; X++) {
        const ne = M[X];
        ne !== null && (M[X] = null, b[X].disconnect(ne));
      }
      C = null, W = null, g.reset(), e.setRenderTarget(f), p = null, d = null, u = null, i = null, T = null, it.stop(), n.isPresenting = false, e.setPixelRatio(R), e.setSize(L.width, L.height, false), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(X) {
      r = X, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(X) {
      o = X, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(X) {
      c = X;
    }, this.getBaseLayer = function() {
      return d !== null ? d : p;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return _;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(X) {
      if (i = X, i !== null) {
        if (f = e.getRenderTarget(), i.addEventListener("select", z), i.addEventListener("selectstart", z), i.addEventListener("selectend", z), i.addEventListener("squeeze", z), i.addEventListener("squeezestart", z), i.addEventListener("squeezeend", z), i.addEventListener("end", $), i.addEventListener("inputsourceschange", Z), m.xrCompatible !== true && await t.makeXRCompatible(), R = e.getPixelRatio(), e.getSize(L), typeof XRWebGLBinding < "u" && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let ge = null, oe = null, be = null;
          m.depth && (be = m.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, ge = m.stencil ? Wi : Oi, oe = m.stencil ? Gi : ci);
          const je = { colorFormat: t.RGBA8, depthFormat: be, scaleFactor: r };
          u = new XRWebGLBinding(i, t), d = u.createProjectionLayer(je), i.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, false), T = new hi(d.textureWidth, d.textureHeight, { format: Yt, type: Pn, depthTexture: new Jc(d.textureWidth, d.textureHeight, oe, void 0, void 0, void 0, void 0, void 0, void 0, ge), stencilBuffer: m.stencil, colorSpace: e.outputColorSpace, samples: m.antialias ? 4 : 0, resolveDepthBuffer: d.ignoreDepthValues === false, resolveStencilBuffer: d.ignoreDepthValues === false });
        } else {
          const ge = { antialias: m.antialias, alpha: true, depth: m.depth, stencil: m.stencil, framebufferScaleFactor: r };
          p = new XRWebGLLayer(i, t, ge), i.updateRenderState({ baseLayer: p }), e.setPixelRatio(1), e.setSize(p.framebufferWidth, p.framebufferHeight, false), T = new hi(p.framebufferWidth, p.framebufferHeight, { format: Yt, type: Pn, colorSpace: e.outputColorSpace, stencilBuffer: m.stencil, resolveDepthBuffer: p.ignoreDepthValues === false, resolveStencilBuffer: p.ignoreDepthValues === false });
        }
        T.isXRRenderTarget = true, this.setFoveation(l), c = null, a = await i.requestReferenceSpace(o), it.setContext(i), it.start(), n.isPresenting = true, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null) return i.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return g.getDepthTexture();
    };
    function Z(X) {
      for (let ne = 0; ne < X.removed.length; ne++) {
        const ge = X.removed[ne], oe = M.indexOf(ge);
        oe >= 0 && (M[oe] = null, b[oe].disconnect(ge));
      }
      for (let ne = 0; ne < X.added.length; ne++) {
        const ge = X.added[ne];
        let oe = M.indexOf(ge);
        if (oe === -1) {
          for (let je = 0; je < b.length; je++) if (je >= M.length) {
            M.push(ge), oe = je;
            break;
          } else if (M[je] === null) {
            M[je] = ge, oe = je;
            break;
          }
          if (oe === -1) break;
        }
        const be = b[oe];
        be && be.connect(ge);
      }
    }
    const q = new P(), Q = new P();
    function V(X, ne, ge) {
      q.setFromMatrixPosition(ne.matrixWorld), Q.setFromMatrixPosition(ge.matrixWorld);
      const oe = q.distanceTo(Q), be = ne.projectionMatrix.elements, je = ge.projectionMatrix.elements, Ae = be[14] / (be[10] - 1), dt = be[14] / (be[10] + 1), lt = (be[9] + 1) / be[5], ze = (be[9] - 1) / be[5], w = (be[8] - 1) / be[0], Ht = (je[8] + 1) / je[0], He = Ae * w, Ve = Ae * Ht, Me = oe / (-w + Ht), at = Me * -w;
      if (ne.matrixWorld.decompose(X.position, X.quaternion, X.scale), X.translateX(at), X.translateZ(Me), X.matrixWorld.compose(X.position, X.quaternion, X.scale), X.matrixWorldInverse.copy(X.matrixWorld).invert(), be[10] === -1) X.projectionMatrix.copy(ne.projectionMatrix), X.projectionMatrixInverse.copy(ne.projectionMatrixInverse);
      else {
        const xe = Ae + Me, E = dt + Me, v = He - at, O = Ve + (oe - at), j = lt * dt / E * xe, J = ze * dt / E * xe;
        X.projectionMatrix.makePerspective(v, O, j, J, xe, E), X.projectionMatrixInverse.copy(X.projectionMatrix).invert();
      }
    }
    function ae(X, ne) {
      ne === null ? X.matrixWorld.copy(X.matrix) : X.matrixWorld.multiplyMatrices(ne.matrixWorld, X.matrix), X.matrixWorldInverse.copy(X.matrixWorld).invert();
    }
    this.updateCamera = function(X) {
      if (i === null) return;
      let ne = X.near, ge = X.far;
      g.texture !== null && (g.depthNear > 0 && (ne = g.depthNear), g.depthFar > 0 && (ge = g.depthFar)), y.near = U.near = A.near = ne, y.far = U.far = A.far = ge, (C !== y.near || W !== y.far) && (i.updateRenderState({ depthNear: y.near, depthFar: y.far }), C = y.near, W = y.far), A.layers.mask = X.layers.mask | 2, U.layers.mask = X.layers.mask | 4, y.layers.mask = A.layers.mask | U.layers.mask;
      const oe = X.parent, be = y.cameras;
      ae(y, oe);
      for (let je = 0; je < be.length; je++) ae(be[je], oe);
      be.length === 2 ? V(y, A, U) : y.projectionMatrix.copy(A.projectionMatrix), de(X, y, oe);
    };
    function de(X, ne, ge) {
      ge === null ? X.matrix.copy(ne.matrixWorld) : (X.matrix.copy(ge.matrixWorld), X.matrix.invert(), X.matrix.multiply(ne.matrixWorld)), X.matrix.decompose(X.position, X.quaternion, X.scale), X.updateMatrixWorld(true), X.projectionMatrix.copy(ne.projectionMatrix), X.projectionMatrixInverse.copy(ne.projectionMatrixInverse), X.isPerspectiveCamera && (X.fov = Xi * 2 * Math.atan(1 / X.projectionMatrix.elements[5]), X.zoom = 1);
    }
    this.getCamera = function() {
      return y;
    }, this.getFoveation = function() {
      if (!(d === null && p === null)) return l;
    }, this.setFoveation = function(X) {
      l = X, d !== null && (d.fixedFoveation = X), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = X);
    }, this.hasDepthSensing = function() {
      return g.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return g.getMesh(y);
    };
    let ye = null;
    function Be(X, ne) {
      if (h = ne.getViewerPose(c || a), _ = ne, h !== null) {
        const ge = h.views;
        p !== null && (e.setRenderTargetFramebuffer(T, p.framebuffer), e.setRenderTarget(T));
        let oe = false;
        ge.length !== y.cameras.length && (y.cameras.length = 0, oe = true);
        for (let Ae = 0; Ae < ge.length; Ae++) {
          const dt = ge[Ae];
          let lt = null;
          if (p !== null) lt = p.getViewport(dt);
          else {
            const w = u.getViewSubImage(d, dt);
            lt = w.viewport, Ae === 0 && (e.setRenderTargetTextures(T, w.colorTexture, d.ignoreDepthValues ? void 0 : w.depthStencilTexture), e.setRenderTarget(T));
          }
          let ze = S[Ae];
          ze === void 0 && (ze = new Ct(), ze.layers.enable(Ae), ze.viewport = new Ke(), S[Ae] = ze), ze.matrix.fromArray(dt.transform.matrix), ze.matrix.decompose(ze.position, ze.quaternion, ze.scale), ze.projectionMatrix.fromArray(dt.projectionMatrix), ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(), ze.viewport.set(lt.x, lt.y, lt.width, lt.height), Ae === 0 && (y.matrix.copy(ze.matrix), y.matrix.decompose(y.position, y.quaternion, y.scale)), oe === true && y.cameras.push(ze);
        }
        const be = i.enabledFeatures;
        if (be && be.includes("depth-sensing") && i.depthUsage == "gpu-optimized" && u) {
          const Ae = u.getDepthInformation(ge[0]);
          Ae && Ae.isValid && Ae.texture && g.init(e, Ae, i.renderState);
        }
      }
      for (let ge = 0; ge < b.length; ge++) {
        const oe = M[ge], be = b[ge];
        oe !== null && be !== void 0 && be.update(oe, ne, c || a);
      }
      ye && ye(X, ne), ne.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: ne }), _ = null;
    }
    const it = new ih();
    it.setAnimationLoop(Be), this.setAnimationLoop = function(X) {
      ye = X;
    }, this.dispose = function() {
    };
  }
}
const ti = new hn(), Pg = new Ne();
function Lg(s3, e) {
  function t(m, f) {
    m.matrixAutoUpdate === true && m.updateMatrix(), f.value.copy(m.matrix);
  }
  function n(m, f) {
    f.color.getRGB(m.fogColor.value, Xc(s3)), f.isFog ? (m.fogNear.value = f.near, m.fogFar.value = f.far) : f.isFogExp2 && (m.fogDensity.value = f.density);
  }
  function i(m, f, T, b, M) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial ? r(m, f) : f.isMeshToonMaterial ? (r(m, f), u(m, f)) : f.isMeshPhongMaterial ? (r(m, f), h(m, f)) : f.isMeshStandardMaterial ? (r(m, f), d(m, f), f.isMeshPhysicalMaterial && p(m, f, M)) : f.isMeshMatcapMaterial ? (r(m, f), _(m, f)) : f.isMeshDepthMaterial ? r(m, f) : f.isMeshDistanceMaterial ? (r(m, f), g(m, f)) : f.isMeshNormalMaterial ? r(m, f) : f.isLineBasicMaterial ? (a(m, f), f.isLineDashedMaterial && o(m, f)) : f.isPointsMaterial ? l(m, f, T, b) : f.isSpriteMaterial ? c(m, f) : f.isShadowMaterial ? (m.color.value.copy(f.color), m.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = false);
  }
  function r(m, f) {
    m.opacity.value = f.opacity, f.color && m.diffuse.value.copy(f.color), f.emissive && m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (m.map.value = f.map, t(f.map, m.mapTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.bumpMap && (m.bumpMap.value = f.bumpMap, t(f.bumpMap, m.bumpMapTransform), m.bumpScale.value = f.bumpScale, f.side === Ot && (m.bumpScale.value *= -1)), f.normalMap && (m.normalMap.value = f.normalMap, t(f.normalMap, m.normalMapTransform), m.normalScale.value.copy(f.normalScale), f.side === Ot && m.normalScale.value.negate()), f.displacementMap && (m.displacementMap.value = f.displacementMap, t(f.displacementMap, m.displacementMapTransform), m.displacementScale.value = f.displacementScale, m.displacementBias.value = f.displacementBias), f.emissiveMap && (m.emissiveMap.value = f.emissiveMap, t(f.emissiveMap, m.emissiveMapTransform)), f.specularMap && (m.specularMap.value = f.specularMap, t(f.specularMap, m.specularMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
    const T = e.get(f), b = T.envMap, M = T.envMapRotation;
    b && (m.envMap.value = b, ti.copy(M), ti.x *= -1, ti.y *= -1, ti.z *= -1, b.isCubeTexture && b.isRenderTargetTexture === false && (ti.y *= -1, ti.z *= -1), m.envMapRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(ti)), m.flipEnvMap.value = b.isCubeTexture && b.isRenderTargetTexture === false ? -1 : 1, m.reflectivity.value = f.reflectivity, m.ior.value = f.ior, m.refractionRatio.value = f.refractionRatio), f.lightMap && (m.lightMap.value = f.lightMap, m.lightMapIntensity.value = f.lightMapIntensity, t(f.lightMap, m.lightMapTransform)), f.aoMap && (m.aoMap.value = f.aoMap, m.aoMapIntensity.value = f.aoMapIntensity, t(f.aoMap, m.aoMapTransform));
  }
  function a(m, f) {
    m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, f.map && (m.map.value = f.map, t(f.map, m.mapTransform));
  }
  function o(m, f) {
    m.dashSize.value = f.dashSize, m.totalSize.value = f.dashSize + f.gapSize, m.scale.value = f.scale;
  }
  function l(m, f, T, b) {
    m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, m.size.value = f.size * T, m.scale.value = b * 0.5, f.map && (m.map.value = f.map, t(f.map, m.uvTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
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
  function p(m, f, T) {
    m.ior.value = f.ior, f.sheen > 0 && (m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), m.sheenRoughness.value = f.sheenRoughness, f.sheenColorMap && (m.sheenColorMap.value = f.sheenColorMap, t(f.sheenColorMap, m.sheenColorMapTransform)), f.sheenRoughnessMap && (m.sheenRoughnessMap.value = f.sheenRoughnessMap, t(f.sheenRoughnessMap, m.sheenRoughnessMapTransform))), f.clearcoat > 0 && (m.clearcoat.value = f.clearcoat, m.clearcoatRoughness.value = f.clearcoatRoughness, f.clearcoatMap && (m.clearcoatMap.value = f.clearcoatMap, t(f.clearcoatMap, m.clearcoatMapTransform)), f.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap, t(f.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), f.clearcoatNormalMap && (m.clearcoatNormalMap.value = f.clearcoatNormalMap, t(f.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), f.side === Ot && m.clearcoatNormalScale.value.negate())), f.dispersion > 0 && (m.dispersion.value = f.dispersion), f.iridescence > 0 && (m.iridescence.value = f.iridescence, m.iridescenceIOR.value = f.iridescenceIOR, m.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1], f.iridescenceMap && (m.iridescenceMap.value = f.iridescenceMap, t(f.iridescenceMap, m.iridescenceMapTransform)), f.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = f.iridescenceThicknessMap, t(f.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), f.transmission > 0 && (m.transmission.value = f.transmission, m.transmissionSamplerMap.value = T.texture, m.transmissionSamplerSize.value.set(T.width, T.height), f.transmissionMap && (m.transmissionMap.value = f.transmissionMap, t(f.transmissionMap, m.transmissionMapTransform)), m.thickness.value = f.thickness, f.thicknessMap && (m.thicknessMap.value = f.thicknessMap, t(f.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = f.attenuationDistance, m.attenuationColor.value.copy(f.attenuationColor)), f.anisotropy > 0 && (m.anisotropyVector.value.set(f.anisotropy * Math.cos(f.anisotropyRotation), f.anisotropy * Math.sin(f.anisotropyRotation)), f.anisotropyMap && (m.anisotropyMap.value = f.anisotropyMap, t(f.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = f.specularIntensity, m.specularColor.value.copy(f.specularColor), f.specularColorMap && (m.specularColorMap.value = f.specularColorMap, t(f.specularColorMap, m.specularColorMapTransform)), f.specularIntensityMap && (m.specularIntensityMap.value = f.specularIntensityMap, t(f.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function _(m, f) {
    f.matcap && (m.matcap.value = f.matcap);
  }
  function g(m, f) {
    const T = e.get(f).light;
    m.referencePosition.value.setFromMatrixPosition(T.matrixWorld), m.nearDistance.value = T.shadow.camera.near, m.farDistance.value = T.shadow.camera.far;
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: i };
}
function Dg(s3, e, t, n) {
  let i = {}, r = {}, a = [];
  const o = s3.getParameter(s3.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(T, b) {
    const M = b.program;
    n.uniformBlockBinding(T, M);
  }
  function c(T, b) {
    let M = i[T.id];
    M === void 0 && (_(T), M = h(T), i[T.id] = M, T.addEventListener("dispose", m));
    const L = b.program;
    n.updateUBOMapping(T, L);
    const R = e.render.frame;
    r[T.id] !== R && (d(T), r[T.id] = R);
  }
  function h(T) {
    const b = u();
    T.__bindingPointIndex = b;
    const M = s3.createBuffer(), L = T.__size, R = T.usage;
    return s3.bindBuffer(s3.UNIFORM_BUFFER, M), s3.bufferData(s3.UNIFORM_BUFFER, L, R), s3.bindBuffer(s3.UNIFORM_BUFFER, null), s3.bindBufferBase(s3.UNIFORM_BUFFER, b, M), M;
  }
  function u() {
    for (let T = 0; T < o; T++) if (a.indexOf(T) === -1) return a.push(T), T;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(T) {
    const b = i[T.id], M = T.uniforms, L = T.__cache;
    s3.bindBuffer(s3.UNIFORM_BUFFER, b);
    for (let R = 0, A = M.length; R < A; R++) {
      const U = Array.isArray(M[R]) ? M[R] : [M[R]];
      for (let S = 0, y = U.length; S < y; S++) {
        const C = U[S];
        if (p(C, R, S, L) === true) {
          const W = C.__offset, z = Array.isArray(C.value) ? C.value : [C.value];
          let $ = 0;
          for (let Z = 0; Z < z.length; Z++) {
            const q = z[Z], Q = g(q);
            typeof q == "number" || typeof q == "boolean" ? (C.__data[0] = q, s3.bufferSubData(s3.UNIFORM_BUFFER, W + $, C.__data)) : q.isMatrix3 ? (C.__data[0] = q.elements[0], C.__data[1] = q.elements[1], C.__data[2] = q.elements[2], C.__data[3] = 0, C.__data[4] = q.elements[3], C.__data[5] = q.elements[4], C.__data[6] = q.elements[5], C.__data[7] = 0, C.__data[8] = q.elements[6], C.__data[9] = q.elements[7], C.__data[10] = q.elements[8], C.__data[11] = 0) : (q.toArray(C.__data, $), $ += Q.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          s3.bufferSubData(s3.UNIFORM_BUFFER, W, C.__data);
        }
      }
    }
    s3.bindBuffer(s3.UNIFORM_BUFFER, null);
  }
  function p(T, b, M, L) {
    const R = T.value, A = b + "_" + M;
    if (L[A] === void 0) return typeof R == "number" || typeof R == "boolean" ? L[A] = R : L[A] = R.clone(), true;
    {
      const U = L[A];
      if (typeof R == "number" || typeof R == "boolean") {
        if (U !== R) return L[A] = R, true;
      } else if (U.equals(R) === false) return U.copy(R), true;
    }
    return false;
  }
  function _(T) {
    const b = T.uniforms;
    let M = 0;
    const L = 16;
    for (let A = 0, U = b.length; A < U; A++) {
      const S = Array.isArray(b[A]) ? b[A] : [b[A]];
      for (let y = 0, C = S.length; y < C; y++) {
        const W = S[y], z = Array.isArray(W.value) ? W.value : [W.value];
        for (let $ = 0, Z = z.length; $ < Z; $++) {
          const q = z[$], Q = g(q), V = M % L, ae = V % Q.boundary, de = V + ae;
          M += ae, de !== 0 && L - de < Q.storage && (M += L - de), W.__data = new Float32Array(Q.storage / Float32Array.BYTES_PER_ELEMENT), W.__offset = M, M += Q.storage;
        }
      }
    }
    const R = M % L;
    return R > 0 && (M += L - R), T.__size = M, T.__cache = {}, this;
  }
  function g(T) {
    const b = { boundary: 0, storage: 0 };
    return typeof T == "number" || typeof T == "boolean" ? (b.boundary = 4, b.storage = 4) : T.isVector2 ? (b.boundary = 8, b.storage = 8) : T.isVector3 || T.isColor ? (b.boundary = 16, b.storage = 12) : T.isVector4 ? (b.boundary = 16, b.storage = 16) : T.isMatrix3 ? (b.boundary = 48, b.storage = 48) : T.isMatrix4 ? (b.boundary = 64, b.storage = 64) : T.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", T), b;
  }
  function m(T) {
    const b = T.target;
    b.removeEventListener("dispose", m);
    const M = a.indexOf(b.__bindingPointIndex);
    a.splice(M, 1), s3.deleteBuffer(i[b.id]), delete i[b.id], delete r[b.id];
  }
  function f() {
    for (const T in i) s3.deleteBuffer(i[T]);
    a = [], i = {}, r = {};
  }
  return { bind: l, update: c, dispose: f };
}
class Ig {
  constructor(e = {}) {
    const { canvas: t = Cu(), context: n = null, depth: i = true, stencil: r = false, alpha: a = false, antialias: o = false, premultipliedAlpha: l = true, preserveDrawingBuffer: c = false, powerPreference: h = "default", failIfMajorPerformanceCaveat: u = false, reverseDepthBuffer: d = false } = e;
    this.isWebGLRenderer = true;
    let p;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      p = n.getContextAttributes().alpha;
    } else p = a;
    const _ = new Uint32Array(4), g = new Int32Array(4);
    let m = null, f = null;
    const T = [], b = [];
    this.domElement = t, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this._outputColorSpace = St, this.toneMapping = Gn, this.toneMappingExposure = 1;
    const M = this;
    let L = false, R = 0, A = 0, U = null, S = -1, y = null;
    const C = new Ke(), W = new Ke();
    let z = null;
    const $ = new Le(0);
    let Z = 0, q = t.width, Q = t.height, V = 1, ae = null, de = null;
    const ye = new Ke(0, 0, q, Q), Be = new Ke(0, 0, q, Q);
    let it = false;
    const X = new So();
    let ne = false, ge = false;
    this.transmissionResolutionScale = 1;
    const oe = new Ne(), be = new Ne(), je = new P(), Ae = new Ke(), dt = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    let lt = false;
    function ze() {
      return U === null ? V : 1;
    }
    let w = n;
    function Ht(x, I) {
      return t.getContext(x, I);
    }
    try {
      const x = { alpha: true, depth: i, stencil: r, antialias: o, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: h, failIfMajorPerformanceCaveat: u };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${lo}`), t.addEventListener("webglcontextlost", K, false), t.addEventListener("webglcontextrestored", he, false), t.addEventListener("webglcontextcreationerror", ce, false), w === null) {
        const I = "webgl2";
        if (w = Ht(I, x), w === null) throw Ht(I) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (x) {
      throw console.error("THREE.WebGLRenderer: " + x.message), x;
    }
    let He, Ve, Me, at, xe, E, v, O, j, J, G, ve, le, fe, Xe, te, pe, Te, Re, me, Ge, Ue, st, D;
    function se() {
      He = new Gm(w), He.init(), Ue = new Tg(w, He), Ve = new Om(w, He, e, Ue), Me = new Eg(w, He), Ve.reverseDepthBuffer && d && Me.buffers.depth.setReversed(true), at = new Ym(w), xe = new hg(), E = new bg(w, He, Me, xe, Ve, Ue, at), v = new Bm(M), O = new Vm(M), j = new Zd(w), st = new Nm(w, j), J = new Wm(w, j, at, st), G = new jm(w, J, j, at), Re = new qm(w, Ve, E), te = new Fm(xe), ve = new cg(M, v, O, He, Ve, st, te), le = new Lg(M, xe), fe = new dg(), Xe = new vg(He), Te = new Im(M, v, O, Me, G, p, l), pe = new Mg(M, G, Ve), D = new Dg(w, at, Ve, Me), me = new Um(w, He, at), Ge = new Xm(w, He, at), at.programs = ve.programs, M.capabilities = Ve, M.extensions = He, M.properties = xe, M.renderLists = fe, M.shadowMap = pe, M.state = Me, M.info = at;
    }
    se();
    const H = new Cg(M, w);
    this.xr = H, this.getContext = function() {
      return w;
    }, this.getContextAttributes = function() {
      return w.getContextAttributes();
    }, this.forceContextLoss = function() {
      const x = He.get("WEBGL_lose_context");
      x && x.loseContext();
    }, this.forceContextRestore = function() {
      const x = He.get("WEBGL_lose_context");
      x && x.restoreContext();
    }, this.getPixelRatio = function() {
      return V;
    }, this.setPixelRatio = function(x) {
      x !== void 0 && (V = x, this.setSize(q, Q, false));
    }, this.getSize = function(x) {
      return x.set(q, Q);
    }, this.setSize = function(x, I, B = true) {
      if (H.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      q = x, Q = I, t.width = Math.floor(x * V), t.height = Math.floor(I * V), B === true && (t.style.width = x + "px", t.style.height = I + "px"), this.setViewport(0, 0, x, I);
    }, this.getDrawingBufferSize = function(x) {
      return x.set(q * V, Q * V).floor();
    }, this.setDrawingBufferSize = function(x, I, B) {
      q = x, Q = I, V = B, t.width = Math.floor(x * B), t.height = Math.floor(I * B), this.setViewport(0, 0, x, I);
    }, this.getCurrentViewport = function(x) {
      return x.copy(C);
    }, this.getViewport = function(x) {
      return x.copy(ye);
    }, this.setViewport = function(x, I, B, k) {
      x.isVector4 ? ye.set(x.x, x.y, x.z, x.w) : ye.set(x, I, B, k), Me.viewport(C.copy(ye).multiplyScalar(V).round());
    }, this.getScissor = function(x) {
      return x.copy(Be);
    }, this.setScissor = function(x, I, B, k) {
      x.isVector4 ? Be.set(x.x, x.y, x.z, x.w) : Be.set(x, I, B, k), Me.scissor(W.copy(Be).multiplyScalar(V).round());
    }, this.getScissorTest = function() {
      return it;
    }, this.setScissorTest = function(x) {
      Me.setScissorTest(it = x);
    }, this.setOpaqueSort = function(x) {
      ae = x;
    }, this.setTransparentSort = function(x) {
      de = x;
    }, this.getClearColor = function(x) {
      return x.copy(Te.getClearColor());
    }, this.setClearColor = function() {
      Te.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return Te.getClearAlpha();
    }, this.setClearAlpha = function() {
      Te.setClearAlpha(...arguments);
    }, this.clear = function(x = true, I = true, B = true) {
      let k = 0;
      if (x) {
        let N = false;
        if (U !== null) {
          const ee = U.texture.format;
          N = ee === _o || ee === mo || ee === po;
        }
        if (N) {
          const ee = U.texture.type, re = ee === Pn || ee === ci || ee === Ss || ee === Gi || ee === ho || ee === uo, ue = Te.getClearColor(), _e = Te.getClearAlpha(), Ce = ue.r, Pe = ue.g, Se = ue.b;
          re ? (_[0] = Ce, _[1] = Pe, _[2] = Se, _[3] = _e, w.clearBufferuiv(w.COLOR, 0, _)) : (g[0] = Ce, g[1] = Pe, g[2] = Se, g[3] = _e, w.clearBufferiv(w.COLOR, 0, g));
        } else k |= w.COLOR_BUFFER_BIT;
      }
      I && (k |= w.DEPTH_BUFFER_BIT), B && (k |= w.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), w.clear(k);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", K, false), t.removeEventListener("webglcontextrestored", he, false), t.removeEventListener("webglcontextcreationerror", ce, false), Te.dispose(), fe.dispose(), Xe.dispose(), xe.dispose(), v.dispose(), O.dispose(), G.dispose(), st.dispose(), D.dispose(), ve.dispose(), H.dispose(), H.removeEventListener("sessionstart", No), H.removeEventListener("sessionend", Uo), jn.stop();
    };
    function K(x) {
      x.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), L = true;
    }
    function he() {
      console.log("THREE.WebGLRenderer: Context Restored."), L = false;
      const x = at.autoReset, I = pe.enabled, B = pe.autoUpdate, k = pe.needsUpdate, N = pe.type;
      se(), at.autoReset = x, pe.enabled = I, pe.autoUpdate = B, pe.needsUpdate = k, pe.type = N;
    }
    function ce(x) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", x.statusMessage);
    }
    function De(x) {
      const I = x.target;
      I.removeEventListener("dispose", De), ht(I);
    }
    function ht(x) {
      Et(x), xe.remove(x);
    }
    function Et(x) {
      const I = xe.get(x).programs;
      I !== void 0 && (I.forEach(function(B) {
        ve.releaseProgram(B);
      }), x.isShaderMaterial && ve.releaseShaderCache(x));
    }
    this.renderBufferDirect = function(x, I, B, k, N, ee) {
      I === null && (I = dt);
      const re = N.isMesh && N.matrixWorld.determinant() < 0, ue = vh(x, I, B, k, N);
      Me.setMaterial(k, re);
      let _e = B.index, Ce = 1;
      if (k.wireframe === true) {
        if (_e = J.getWireframeAttribute(B), _e === void 0) return;
        Ce = 2;
      }
      const Pe = B.drawRange, Se = B.attributes.position;
      let Ye = Pe.start * Ce, $e = (Pe.start + Pe.count) * Ce;
      ee !== null && (Ye = Math.max(Ye, ee.start * Ce), $e = Math.min($e, (ee.start + ee.count) * Ce)), _e !== null ? (Ye = Math.max(Ye, 0), $e = Math.min($e, _e.count)) : Se != null && (Ye = Math.max(Ye, 0), $e = Math.min($e, Se.count));
      const ft = $e - Ye;
      if (ft < 0 || ft === 1 / 0) return;
      st.setup(N, k, ue, B, _e);
      let ut, qe = me;
      if (_e !== null && (ut = j.get(_e), qe = Ge, qe.setIndex(ut)), N.isMesh) k.wireframe === true ? (Me.setLineWidth(k.wireframeLinewidth * ze()), qe.setMode(w.LINES)) : qe.setMode(w.TRIANGLES);
      else if (N.isLine) {
        let Ee = k.linewidth;
        Ee === void 0 && (Ee = 1), Me.setLineWidth(Ee * ze()), N.isLineSegments ? qe.setMode(w.LINES) : N.isLineLoop ? qe.setMode(w.LINE_LOOP) : qe.setMode(w.LINE_STRIP);
      } else N.isPoints ? qe.setMode(w.POINTS) : N.isSprite && qe.setMode(w.TRIANGLES);
      if (N.isBatchedMesh) if (N._multiDrawInstances !== null) ii("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), qe.renderMultiDrawInstances(N._multiDrawStarts, N._multiDrawCounts, N._multiDrawCount, N._multiDrawInstances);
      else if (He.get("WEBGL_multi_draw")) qe.renderMultiDraw(N._multiDrawStarts, N._multiDrawCounts, N._multiDrawCount);
      else {
        const Ee = N._multiDrawStarts, Mt = N._multiDrawCounts, Ze = N._multiDrawCount, jt = _e ? j.get(_e).bytesPerElement : 1, fi = xe.get(k).currentProgram.getUniforms();
        for (let Ft = 0; Ft < Ze; Ft++) fi.setValue(w, "_gl_DrawID", Ft), qe.render(Ee[Ft] / jt, Mt[Ft]);
      }
      else if (N.isInstancedMesh) qe.renderInstances(Ye, ft, N.count);
      else if (B.isInstancedBufferGeometry) {
        const Ee = B._maxInstanceCount !== void 0 ? B._maxInstanceCount : 1 / 0, Mt = Math.min(B.instanceCount, Ee);
        qe.renderInstances(Ye, ft, Mt);
      } else qe.render(Ye, ft);
    };
    function Je(x, I, B) {
      x.transparent === true && x.side === ln && x.forceSinglePass === false ? (x.side = Ot, x.needsUpdate = true, Ls(x, I, B), x.side = Cn, x.needsUpdate = true, Ls(x, I, B), x.side = ln) : Ls(x, I, B);
    }
    this.compile = function(x, I, B = null) {
      B === null && (B = x), f = Xe.get(B), f.init(I), b.push(f), B.traverseVisible(function(N) {
        N.isLight && N.layers.test(I.layers) && (f.pushLight(N), N.castShadow && f.pushShadow(N));
      }), x !== B && x.traverseVisible(function(N) {
        N.isLight && N.layers.test(I.layers) && (f.pushLight(N), N.castShadow && f.pushShadow(N));
      }), f.setupLights();
      const k = /* @__PURE__ */ new Set();
      return x.traverse(function(N) {
        if (!(N.isMesh || N.isPoints || N.isLine || N.isSprite)) return;
        const ee = N.material;
        if (ee) if (Array.isArray(ee)) for (let re = 0; re < ee.length; re++) {
          const ue = ee[re];
          Je(ue, B, N), k.add(ue);
        }
        else Je(ee, B, N), k.add(ee);
      }), f = b.pop(), k;
    }, this.compileAsync = function(x, I, B = null) {
      const k = this.compile(x, I, B);
      return new Promise((N) => {
        function ee() {
          if (k.forEach(function(re) {
            xe.get(re).currentProgram.isReady() && k.delete(re);
          }), k.size === 0) {
            N(x);
            return;
          }
          setTimeout(ee, 10);
        }
        He.get("KHR_parallel_shader_compile") !== null ? ee() : setTimeout(ee, 10);
      });
    };
    let qt = null;
    function _n(x) {
      qt && qt(x);
    }
    function No() {
      jn.stop();
    }
    function Uo() {
      jn.start();
    }
    const jn = new ih();
    jn.setAnimationLoop(_n), typeof self < "u" && jn.setContext(self), this.setAnimationLoop = function(x) {
      qt = x, H.setAnimationLoop(x), x === null ? jn.stop() : jn.start();
    }, H.addEventListener("sessionstart", No), H.addEventListener("sessionend", Uo), this.render = function(x, I) {
      if (I !== void 0 && I.isCamera !== true) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (L === true) return;
      if (x.matrixWorldAutoUpdate === true && x.updateMatrixWorld(), I.parent === null && I.matrixWorldAutoUpdate === true && I.updateMatrixWorld(), H.enabled === true && H.isPresenting === true && (H.cameraAutoUpdate === true && H.updateCamera(I), I = H.getCamera()), x.isScene === true && x.onBeforeRender(M, x, I, U), f = Xe.get(x, b.length), f.init(I), b.push(f), be.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse), X.setFromProjectionMatrix(be), ge = this.localClippingEnabled, ne = te.init(this.clippingPlanes, ge), m = fe.get(x, T.length), m.init(), T.push(m), H.enabled === true && H.isPresenting === true) {
        const ee = M.xr.getDepthSensingMesh();
        ee !== null && Ar(ee, I, -1 / 0, M.sortObjects);
      }
      Ar(x, I, 0, M.sortObjects), m.finish(), M.sortObjects === true && m.sort(ae, de), lt = H.enabled === false || H.isPresenting === false || H.hasDepthSensing() === false, lt && Te.addToRenderList(m, x), this.info.render.frame++, ne === true && te.beginShadows();
      const B = f.state.shadowsArray;
      pe.render(B, x, I), ne === true && te.endShadows(), this.info.autoReset === true && this.info.reset();
      const k = m.opaque, N = m.transmissive;
      if (f.setupLights(), I.isArrayCamera) {
        const ee = I.cameras;
        if (N.length > 0) for (let re = 0, ue = ee.length; re < ue; re++) {
          const _e = ee[re];
          Fo(k, N, x, _e);
        }
        lt && Te.render(x);
        for (let re = 0, ue = ee.length; re < ue; re++) {
          const _e = ee[re];
          Oo(m, x, _e, _e.viewport);
        }
      } else N.length > 0 && Fo(k, N, x, I), lt && Te.render(x), Oo(m, x, I);
      U !== null && A === 0 && (E.updateMultisampleRenderTarget(U), E.updateRenderTargetMipmap(U)), x.isScene === true && x.onAfterRender(M, x, I), st.resetDefaultState(), S = -1, y = null, b.pop(), b.length > 0 ? (f = b[b.length - 1], ne === true && te.setGlobalState(M.clippingPlanes, f.state.camera)) : f = null, T.pop(), T.length > 0 ? m = T[T.length - 1] : m = null;
    };
    function Ar(x, I, B, k) {
      if (x.visible === false) return;
      if (x.layers.test(I.layers)) {
        if (x.isGroup) B = x.renderOrder;
        else if (x.isLOD) x.autoUpdate === true && x.update(I);
        else if (x.isLight) f.pushLight(x), x.castShadow && f.pushShadow(x);
        else if (x.isSprite) {
          if (!x.frustumCulled || X.intersectsSprite(x)) {
            k && Ae.setFromMatrixPosition(x.matrixWorld).applyMatrix4(be);
            const re = G.update(x), ue = x.material;
            ue.visible && m.push(x, re, ue, B, Ae.z, null);
          }
        } else if ((x.isMesh || x.isLine || x.isPoints) && (!x.frustumCulled || X.intersectsObject(x))) {
          const re = G.update(x), ue = x.material;
          if (k && (x.boundingSphere !== void 0 ? (x.boundingSphere === null && x.computeBoundingSphere(), Ae.copy(x.boundingSphere.center)) : (re.boundingSphere === null && re.computeBoundingSphere(), Ae.copy(re.boundingSphere.center)), Ae.applyMatrix4(x.matrixWorld).applyMatrix4(be)), Array.isArray(ue)) {
            const _e = re.groups;
            for (let Ce = 0, Pe = _e.length; Ce < Pe; Ce++) {
              const Se = _e[Ce], Ye = ue[Se.materialIndex];
              Ye && Ye.visible && m.push(x, re, Ye, B, Ae.z, Se);
            }
          } else ue.visible && m.push(x, re, ue, B, Ae.z, null);
        }
      }
      const ee = x.children;
      for (let re = 0, ue = ee.length; re < ue; re++) Ar(ee[re], I, B, k);
    }
    function Oo(x, I, B, k) {
      const N = x.opaque, ee = x.transmissive, re = x.transparent;
      f.setupLightsView(B), ne === true && te.setGlobalState(M.clippingPlanes, B), k && Me.viewport(C.copy(k)), N.length > 0 && Ps(N, I, B), ee.length > 0 && Ps(ee, I, B), re.length > 0 && Ps(re, I, B), Me.buffers.depth.setTest(true), Me.buffers.depth.setMask(true), Me.buffers.color.setMask(true), Me.setPolygonOffset(false);
    }
    function Fo(x, I, B, k) {
      if ((B.isScene === true ? B.overrideMaterial : null) !== null) return;
      f.state.transmissionRenderTarget[k.id] === void 0 && (f.state.transmissionRenderTarget[k.id] = new hi(1, 1, { generateMipmaps: true, type: He.has("EXT_color_buffer_half_float") || He.has("EXT_color_buffer_float") ? ws : Pn, minFilter: Tn, samples: 4, stencilBuffer: r, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: We.workingColorSpace }));
      const ee = f.state.transmissionRenderTarget[k.id], re = k.viewport || C;
      ee.setSize(re.z * M.transmissionResolutionScale, re.w * M.transmissionResolutionScale);
      const ue = M.getRenderTarget();
      M.setRenderTarget(ee), M.getClearColor($), Z = M.getClearAlpha(), Z < 1 && M.setClearColor(16777215, 0.5), M.clear(), lt && Te.render(B);
      const _e = M.toneMapping;
      M.toneMapping = Gn;
      const Ce = k.viewport;
      if (k.viewport !== void 0 && (k.viewport = void 0), f.setupLightsView(k), ne === true && te.setGlobalState(M.clippingPlanes, k), Ps(x, B, k), E.updateMultisampleRenderTarget(ee), E.updateRenderTargetMipmap(ee), He.has("WEBGL_multisampled_render_to_texture") === false) {
        let Pe = false;
        for (let Se = 0, Ye = I.length; Se < Ye; Se++) {
          const $e = I[Se], ft = $e.object, ut = $e.geometry, qe = $e.material, Ee = $e.group;
          if (qe.side === ln && ft.layers.test(k.layers)) {
            const Mt = qe.side;
            qe.side = Ot, qe.needsUpdate = true, Bo(ft, B, k, ut, qe, Ee), qe.side = Mt, qe.needsUpdate = true, Pe = true;
          }
        }
        Pe === true && (E.updateMultisampleRenderTarget(ee), E.updateRenderTargetMipmap(ee));
      }
      M.setRenderTarget(ue), M.setClearColor($, Z), Ce !== void 0 && (k.viewport = Ce), M.toneMapping = _e;
    }
    function Ps(x, I, B) {
      const k = I.isScene === true ? I.overrideMaterial : null;
      for (let N = 0, ee = x.length; N < ee; N++) {
        const re = x[N], ue = re.object, _e = re.geometry, Ce = k === null ? re.material : k, Pe = re.group;
        ue.layers.test(B.layers) && Bo(ue, I, B, _e, Ce, Pe);
      }
    }
    function Bo(x, I, B, k, N, ee) {
      x.onBeforeRender(M, I, B, k, N, ee), x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, x.matrixWorld), x.normalMatrix.getNormalMatrix(x.modelViewMatrix), N.onBeforeRender(M, I, B, k, x, ee), N.transparent === true && N.side === ln && N.forceSinglePass === false ? (N.side = Ot, N.needsUpdate = true, M.renderBufferDirect(B, I, k, N, x, ee), N.side = Cn, N.needsUpdate = true, M.renderBufferDirect(B, I, k, N, x, ee), N.side = ln) : M.renderBufferDirect(B, I, k, N, x, ee), x.onAfterRender(M, I, B, k, N, ee);
    }
    function Ls(x, I, B) {
      I.isScene !== true && (I = dt);
      const k = xe.get(x), N = f.state.lights, ee = f.state.shadowsArray, re = N.state.version, ue = ve.getParameters(x, N.state, ee, I, B), _e = ve.getProgramCacheKey(ue);
      let Ce = k.programs;
      k.environment = x.isMeshStandardMaterial ? I.environment : null, k.fog = I.fog, k.envMap = (x.isMeshStandardMaterial ? O : v).get(x.envMap || k.environment), k.envMapRotation = k.environment !== null && x.envMap === null ? I.environmentRotation : x.envMapRotation, Ce === void 0 && (x.addEventListener("dispose", De), Ce = /* @__PURE__ */ new Map(), k.programs = Ce);
      let Pe = Ce.get(_e);
      if (Pe !== void 0) {
        if (k.currentProgram === Pe && k.lightsStateVersion === re) return zo(x, ue), Pe;
      } else ue.uniforms = ve.getUniforms(x), x.onBeforeCompile(ue, M), Pe = ve.acquireProgram(ue, _e), Ce.set(_e, Pe), k.uniforms = ue.uniforms;
      const Se = k.uniforms;
      return (!x.isShaderMaterial && !x.isRawShaderMaterial || x.clipping === true) && (Se.clippingPlanes = te.uniform), zo(x, ue), k.needsLights = yh(x), k.lightsStateVersion = re, k.needsLights && (Se.ambientLightColor.value = N.state.ambient, Se.lightProbe.value = N.state.probe, Se.directionalLights.value = N.state.directional, Se.directionalLightShadows.value = N.state.directionalShadow, Se.spotLights.value = N.state.spot, Se.spotLightShadows.value = N.state.spotShadow, Se.rectAreaLights.value = N.state.rectArea, Se.ltc_1.value = N.state.rectAreaLTC1, Se.ltc_2.value = N.state.rectAreaLTC2, Se.pointLights.value = N.state.point, Se.pointLightShadows.value = N.state.pointShadow, Se.hemisphereLights.value = N.state.hemi, Se.directionalShadowMap.value = N.state.directionalShadowMap, Se.directionalShadowMatrix.value = N.state.directionalShadowMatrix, Se.spotShadowMap.value = N.state.spotShadowMap, Se.spotLightMatrix.value = N.state.spotLightMatrix, Se.spotLightMap.value = N.state.spotLightMap, Se.pointShadowMap.value = N.state.pointShadowMap, Se.pointShadowMatrix.value = N.state.pointShadowMatrix), k.currentProgram = Pe, k.uniformsList = null, Pe;
    }
    function ko(x) {
      if (x.uniformsList === null) {
        const I = x.currentProgram.getUniforms();
        x.uniformsList = pr.seqWithValue(I.seq, x.uniforms);
      }
      return x.uniformsList;
    }
    function zo(x, I) {
      const B = xe.get(x);
      B.outputColorSpace = I.outputColorSpace, B.batching = I.batching, B.batchingColor = I.batchingColor, B.instancing = I.instancing, B.instancingColor = I.instancingColor, B.instancingMorph = I.instancingMorph, B.skinning = I.skinning, B.morphTargets = I.morphTargets, B.morphNormals = I.morphNormals, B.morphColors = I.morphColors, B.morphTargetsCount = I.morphTargetsCount, B.numClippingPlanes = I.numClippingPlanes, B.numIntersection = I.numClipIntersection, B.vertexAlphas = I.vertexAlphas, B.vertexTangents = I.vertexTangents, B.toneMapping = I.toneMapping;
    }
    function vh(x, I, B, k, N) {
      I.isScene !== true && (I = dt), E.resetTextureUnits();
      const ee = I.fog, re = k.isMeshStandardMaterial ? I.environment : null, ue = U === null ? M.outputColorSpace : U.isXRRenderTarget === true ? U.texture.colorSpace : Dt, _e = (k.isMeshStandardMaterial ? O : v).get(k.envMap || re), Ce = k.vertexColors === true && !!B.attributes.color && B.attributes.color.itemSize === 4, Pe = !!B.attributes.tangent && (!!k.normalMap || k.anisotropy > 0), Se = !!B.morphAttributes.position, Ye = !!B.morphAttributes.normal, $e = !!B.morphAttributes.color;
      let ft = Gn;
      k.toneMapped && (U === null || U.isXRRenderTarget === true) && (ft = M.toneMapping);
      const ut = B.morphAttributes.position || B.morphAttributes.normal || B.morphAttributes.color, qe = ut !== void 0 ? ut.length : 0, Ee = xe.get(k), Mt = f.state.lights;
      if (ne === true && (ge === true || x !== y)) {
        const At = x === y && k.id === S;
        te.setState(k, x, At);
      }
      let Ze = false;
      k.version === Ee.__version ? (Ee.needsLights && Ee.lightsStateVersion !== Mt.state.version || Ee.outputColorSpace !== ue || N.isBatchedMesh && Ee.batching === false || !N.isBatchedMesh && Ee.batching === true || N.isBatchedMesh && Ee.batchingColor === true && N.colorTexture === null || N.isBatchedMesh && Ee.batchingColor === false && N.colorTexture !== null || N.isInstancedMesh && Ee.instancing === false || !N.isInstancedMesh && Ee.instancing === true || N.isSkinnedMesh && Ee.skinning === false || !N.isSkinnedMesh && Ee.skinning === true || N.isInstancedMesh && Ee.instancingColor === true && N.instanceColor === null || N.isInstancedMesh && Ee.instancingColor === false && N.instanceColor !== null || N.isInstancedMesh && Ee.instancingMorph === true && N.morphTexture === null || N.isInstancedMesh && Ee.instancingMorph === false && N.morphTexture !== null || Ee.envMap !== _e || k.fog === true && Ee.fog !== ee || Ee.numClippingPlanes !== void 0 && (Ee.numClippingPlanes !== te.numPlanes || Ee.numIntersection !== te.numIntersection) || Ee.vertexAlphas !== Ce || Ee.vertexTangents !== Pe || Ee.morphTargets !== Se || Ee.morphNormals !== Ye || Ee.morphColors !== $e || Ee.toneMapping !== ft || Ee.morphTargetsCount !== qe) && (Ze = true) : (Ze = true, Ee.__version = k.version);
      let jt = Ee.currentProgram;
      Ze === true && (jt = Ls(k, I, N));
      let fi = false, Ft = false, ts = false;
      const ot = jt.getUniforms(), Vt = Ee.uniforms;
      if (Me.useProgram(jt.program) && (fi = true, Ft = true, ts = true), k.id !== S && (S = k.id, Ft = true), fi || y !== x) {
        Me.buffers.depth.getReversed() ? (oe.copy(x.projectionMatrix), Lu(oe), Du(oe), ot.setValue(w, "projectionMatrix", oe)) : ot.setValue(w, "projectionMatrix", x.projectionMatrix), ot.setValue(w, "viewMatrix", x.matrixWorldInverse);
        const It = ot.map.cameraPosition;
        It !== void 0 && It.setValue(w, je.setFromMatrixPosition(x.matrixWorld)), Ve.logarithmicDepthBuffer && ot.setValue(w, "logDepthBufFC", 2 / (Math.log(x.far + 1) / Math.LN2)), (k.isMeshPhongMaterial || k.isMeshToonMaterial || k.isMeshLambertMaterial || k.isMeshBasicMaterial || k.isMeshStandardMaterial || k.isShaderMaterial) && ot.setValue(w, "isOrthographic", x.isOrthographicCamera === true), y !== x && (y = x, Ft = true, ts = true);
      }
      if (N.isSkinnedMesh) {
        ot.setOptional(w, N, "bindMatrix"), ot.setOptional(w, N, "bindMatrixInverse");
        const At = N.skeleton;
        At && (At.boneTexture === null && At.computeBoneTexture(), ot.setValue(w, "boneTexture", At.boneTexture, E));
      }
      N.isBatchedMesh && (ot.setOptional(w, N, "batchingTexture"), ot.setValue(w, "batchingTexture", N._matricesTexture, E), ot.setOptional(w, N, "batchingIdTexture"), ot.setValue(w, "batchingIdTexture", N._indirectTexture, E), ot.setOptional(w, N, "batchingColorTexture"), N._colorsTexture !== null && ot.setValue(w, "batchingColorTexture", N._colorsTexture, E));
      const Gt = B.morphAttributes;
      if ((Gt.position !== void 0 || Gt.normal !== void 0 || Gt.color !== void 0) && Re.update(N, B, jt), (Ft || Ee.receiveShadow !== N.receiveShadow) && (Ee.receiveShadow = N.receiveShadow, ot.setValue(w, "receiveShadow", N.receiveShadow)), k.isMeshGouraudMaterial && k.envMap !== null && (Vt.envMap.value = _e, Vt.flipEnvMap.value = _e.isCubeTexture && _e.isRenderTargetTexture === false ? -1 : 1), k.isMeshStandardMaterial && k.envMap === null && I.environment !== null && (Vt.envMapIntensity.value = I.environmentIntensity), Ft && (ot.setValue(w, "toneMappingExposure", M.toneMappingExposure), Ee.needsLights && xh(Vt, ts), ee && k.fog === true && le.refreshFogUniforms(Vt, ee), le.refreshMaterialUniforms(Vt, k, V, Q, f.state.transmissionRenderTarget[x.id]), pr.upload(w, ko(Ee), Vt, E)), k.isShaderMaterial && k.uniformsNeedUpdate === true && (pr.upload(w, ko(Ee), Vt, E), k.uniformsNeedUpdate = false), k.isSpriteMaterial && ot.setValue(w, "center", N.center), ot.setValue(w, "modelViewMatrix", N.modelViewMatrix), ot.setValue(w, "normalMatrix", N.normalMatrix), ot.setValue(w, "modelMatrix", N.matrixWorld), k.isShaderMaterial || k.isRawShaderMaterial) {
        const At = k.uniformsGroups;
        for (let It = 0, wr = At.length; It < wr; It++) {
          const Kn = At[It];
          D.update(Kn, jt), D.bind(Kn, jt);
        }
      }
      return jt;
    }
    function xh(x, I) {
      x.ambientLightColor.needsUpdate = I, x.lightProbe.needsUpdate = I, x.directionalLights.needsUpdate = I, x.directionalLightShadows.needsUpdate = I, x.pointLights.needsUpdate = I, x.pointLightShadows.needsUpdate = I, x.spotLights.needsUpdate = I, x.spotLightShadows.needsUpdate = I, x.rectAreaLights.needsUpdate = I, x.hemisphereLights.needsUpdate = I;
    }
    function yh(x) {
      return x.isMeshLambertMaterial || x.isMeshToonMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isShadowMaterial || x.isShaderMaterial && x.lights === true;
    }
    this.getActiveCubeFace = function() {
      return R;
    }, this.getActiveMipmapLevel = function() {
      return A;
    }, this.getRenderTarget = function() {
      return U;
    }, this.setRenderTargetTextures = function(x, I, B) {
      xe.get(x.texture).__webglTexture = I, xe.get(x.depthTexture).__webglTexture = B;
      const k = xe.get(x);
      k.__hasExternalTextures = true, k.__autoAllocateDepthBuffer = B === void 0, k.__autoAllocateDepthBuffer || He.has("WEBGL_multisampled_render_to_texture") === true && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), k.__useRenderToTexture = false);
    }, this.setRenderTargetFramebuffer = function(x, I) {
      const B = xe.get(x);
      B.__webglFramebuffer = I, B.__useDefaultFramebuffer = I === void 0;
    };
    const Mh = w.createFramebuffer();
    this.setRenderTarget = function(x, I = 0, B = 0) {
      U = x, R = I, A = B;
      let k = true, N = null, ee = false, re = false;
      if (x) {
        const _e = xe.get(x);
        if (_e.__useDefaultFramebuffer !== void 0) Me.bindFramebuffer(w.FRAMEBUFFER, null), k = false;
        else if (_e.__webglFramebuffer === void 0) E.setupRenderTarget(x);
        else if (_e.__hasExternalTextures) E.rebindTextures(x, xe.get(x.texture).__webglTexture, xe.get(x.depthTexture).__webglTexture);
        else if (x.depthBuffer) {
          const Se = x.depthTexture;
          if (_e.__boundDepthTexture !== Se) {
            if (Se !== null && xe.has(Se) && (x.width !== Se.image.width || x.height !== Se.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            E.setupDepthRenderbuffer(x);
          }
        }
        const Ce = x.texture;
        (Ce.isData3DTexture || Ce.isDataArrayTexture || Ce.isCompressedArrayTexture) && (re = true);
        const Pe = xe.get(x).__webglFramebuffer;
        x.isWebGLCubeRenderTarget ? (Array.isArray(Pe[I]) ? N = Pe[I][B] : N = Pe[I], ee = true) : x.samples > 0 && E.useMultisampledRTT(x) === false ? N = xe.get(x).__webglMultisampledFramebuffer : Array.isArray(Pe) ? N = Pe[B] : N = Pe, C.copy(x.viewport), W.copy(x.scissor), z = x.scissorTest;
      } else C.copy(ye).multiplyScalar(V).floor(), W.copy(Be).multiplyScalar(V).floor(), z = it;
      if (B !== 0 && (N = Mh), Me.bindFramebuffer(w.FRAMEBUFFER, N) && k && Me.drawBuffers(x, N), Me.viewport(C), Me.scissor(W), Me.setScissorTest(z), ee) {
        const _e = xe.get(x.texture);
        w.framebufferTexture2D(w.FRAMEBUFFER, w.COLOR_ATTACHMENT0, w.TEXTURE_CUBE_MAP_POSITIVE_X + I, _e.__webglTexture, B);
      } else if (re) {
        const _e = xe.get(x.texture), Ce = I;
        w.framebufferTextureLayer(w.FRAMEBUFFER, w.COLOR_ATTACHMENT0, _e.__webglTexture, B, Ce);
      } else if (x !== null && B !== 0) {
        const _e = xe.get(x.texture);
        w.framebufferTexture2D(w.FRAMEBUFFER, w.COLOR_ATTACHMENT0, w.TEXTURE_2D, _e.__webglTexture, B);
      }
      S = -1;
    }, this.readRenderTargetPixels = function(x, I, B, k, N, ee, re) {
      if (!(x && x.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ue = xe.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && re !== void 0 && (ue = ue[re]), ue) {
        Me.bindFramebuffer(w.FRAMEBUFFER, ue);
        try {
          const _e = x.texture, Ce = _e.format, Pe = _e.type;
          if (!Ve.textureFormatReadable(Ce)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Ve.textureTypeReadable(Pe)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          I >= 0 && I <= x.width - k && B >= 0 && B <= x.height - N && w.readPixels(I, B, k, N, Ue.convert(Ce), Ue.convert(Pe), ee);
        } finally {
          const _e = U !== null ? xe.get(U).__webglFramebuffer : null;
          Me.bindFramebuffer(w.FRAMEBUFFER, _e);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(x, I, B, k, N, ee, re) {
      if (!(x && x.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let ue = xe.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && re !== void 0 && (ue = ue[re]), ue) {
        const _e = x.texture, Ce = _e.format, Pe = _e.type;
        if (!Ve.textureFormatReadable(Ce)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!Ve.textureTypeReadable(Pe)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (I >= 0 && I <= x.width - k && B >= 0 && B <= x.height - N) {
          Me.bindFramebuffer(w.FRAMEBUFFER, ue);
          const Se = w.createBuffer();
          w.bindBuffer(w.PIXEL_PACK_BUFFER, Se), w.bufferData(w.PIXEL_PACK_BUFFER, ee.byteLength, w.STREAM_READ), w.readPixels(I, B, k, N, Ue.convert(Ce), Ue.convert(Pe), 0);
          const Ye = U !== null ? xe.get(U).__webglFramebuffer : null;
          Me.bindFramebuffer(w.FRAMEBUFFER, Ye);
          const $e = w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return w.flush(), await Pu(w, $e, 4), w.bindBuffer(w.PIXEL_PACK_BUFFER, Se), w.getBufferSubData(w.PIXEL_PACK_BUFFER, 0, ee), w.deleteBuffer(Se), w.deleteSync($e), ee;
        } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(x, I = null, B = 0) {
      x.isTexture !== true && (ii("WebGLRenderer: copyFramebufferToTexture function signature has changed."), I = arguments[0] || null, x = arguments[1]);
      const k = Math.pow(2, -B), N = Math.floor(x.image.width * k), ee = Math.floor(x.image.height * k), re = I !== null ? I.x : 0, ue = I !== null ? I.y : 0;
      E.setTexture2D(x, 0), w.copyTexSubImage2D(w.TEXTURE_2D, B, 0, 0, re, ue, N, ee), Me.unbindTexture();
    };
    const Sh = w.createFramebuffer(), Eh = w.createFramebuffer();
    this.copyTextureToTexture = function(x, I, B = null, k = null, N = 0, ee = null) {
      x.isTexture !== true && (ii("WebGLRenderer: copyTextureToTexture function signature has changed."), k = arguments[0] || null, x = arguments[1], I = arguments[2], ee = arguments[3] || 0, B = null), ee === null && (N !== 0 ? (ii("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), ee = N, N = 0) : ee = 0);
      let re, ue, _e, Ce, Pe, Se, Ye, $e, ft;
      const ut = x.isCompressedTexture ? x.mipmaps[ee] : x.image;
      if (B !== null) re = B.max.x - B.min.x, ue = B.max.y - B.min.y, _e = B.isBox3 ? B.max.z - B.min.z : 1, Ce = B.min.x, Pe = B.min.y, Se = B.isBox3 ? B.min.z : 0;
      else {
        const Gt = Math.pow(2, -N);
        re = Math.floor(ut.width * Gt), ue = Math.floor(ut.height * Gt), x.isDataArrayTexture ? _e = ut.depth : x.isData3DTexture ? _e = Math.floor(ut.depth * Gt) : _e = 1, Ce = 0, Pe = 0, Se = 0;
      }
      k !== null ? (Ye = k.x, $e = k.y, ft = k.z) : (Ye = 0, $e = 0, ft = 0);
      const qe = Ue.convert(I.format), Ee = Ue.convert(I.type);
      let Mt;
      I.isData3DTexture ? (E.setTexture3D(I, 0), Mt = w.TEXTURE_3D) : I.isDataArrayTexture || I.isCompressedArrayTexture ? (E.setTexture2DArray(I, 0), Mt = w.TEXTURE_2D_ARRAY) : (E.setTexture2D(I, 0), Mt = w.TEXTURE_2D), w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL, I.flipY), w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL, I.premultiplyAlpha), w.pixelStorei(w.UNPACK_ALIGNMENT, I.unpackAlignment);
      const Ze = w.getParameter(w.UNPACK_ROW_LENGTH), jt = w.getParameter(w.UNPACK_IMAGE_HEIGHT), fi = w.getParameter(w.UNPACK_SKIP_PIXELS), Ft = w.getParameter(w.UNPACK_SKIP_ROWS), ts = w.getParameter(w.UNPACK_SKIP_IMAGES);
      w.pixelStorei(w.UNPACK_ROW_LENGTH, ut.width), w.pixelStorei(w.UNPACK_IMAGE_HEIGHT, ut.height), w.pixelStorei(w.UNPACK_SKIP_PIXELS, Ce), w.pixelStorei(w.UNPACK_SKIP_ROWS, Pe), w.pixelStorei(w.UNPACK_SKIP_IMAGES, Se);
      const ot = x.isDataArrayTexture || x.isData3DTexture, Vt = I.isDataArrayTexture || I.isData3DTexture;
      if (x.isDepthTexture) {
        const Gt = xe.get(x), At = xe.get(I), It = xe.get(Gt.__renderTarget), wr = xe.get(At.__renderTarget);
        Me.bindFramebuffer(w.READ_FRAMEBUFFER, It.__webglFramebuffer), Me.bindFramebuffer(w.DRAW_FRAMEBUFFER, wr.__webglFramebuffer);
        for (let Kn = 0; Kn < _e; Kn++) ot && (w.framebufferTextureLayer(w.READ_FRAMEBUFFER, w.COLOR_ATTACHMENT0, xe.get(x).__webglTexture, N, Se + Kn), w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER, w.COLOR_ATTACHMENT0, xe.get(I).__webglTexture, ee, ft + Kn)), w.blitFramebuffer(Ce, Pe, re, ue, Ye, $e, re, ue, w.DEPTH_BUFFER_BIT, w.NEAREST);
        Me.bindFramebuffer(w.READ_FRAMEBUFFER, null), Me.bindFramebuffer(w.DRAW_FRAMEBUFFER, null);
      } else if (N !== 0 || x.isRenderTargetTexture || xe.has(x)) {
        const Gt = xe.get(x), At = xe.get(I);
        Me.bindFramebuffer(w.READ_FRAMEBUFFER, Sh), Me.bindFramebuffer(w.DRAW_FRAMEBUFFER, Eh);
        for (let It = 0; It < _e; It++) ot ? w.framebufferTextureLayer(w.READ_FRAMEBUFFER, w.COLOR_ATTACHMENT0, Gt.__webglTexture, N, Se + It) : w.framebufferTexture2D(w.READ_FRAMEBUFFER, w.COLOR_ATTACHMENT0, w.TEXTURE_2D, Gt.__webglTexture, N), Vt ? w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER, w.COLOR_ATTACHMENT0, At.__webglTexture, ee, ft + It) : w.framebufferTexture2D(w.DRAW_FRAMEBUFFER, w.COLOR_ATTACHMENT0, w.TEXTURE_2D, At.__webglTexture, ee), N !== 0 ? w.blitFramebuffer(Ce, Pe, re, ue, Ye, $e, re, ue, w.COLOR_BUFFER_BIT, w.NEAREST) : Vt ? w.copyTexSubImage3D(Mt, ee, Ye, $e, ft + It, Ce, Pe, re, ue) : w.copyTexSubImage2D(Mt, ee, Ye, $e, Ce, Pe, re, ue);
        Me.bindFramebuffer(w.READ_FRAMEBUFFER, null), Me.bindFramebuffer(w.DRAW_FRAMEBUFFER, null);
      } else Vt ? x.isDataTexture || x.isData3DTexture ? w.texSubImage3D(Mt, ee, Ye, $e, ft, re, ue, _e, qe, Ee, ut.data) : I.isCompressedArrayTexture ? w.compressedTexSubImage3D(Mt, ee, Ye, $e, ft, re, ue, _e, qe, ut.data) : w.texSubImage3D(Mt, ee, Ye, $e, ft, re, ue, _e, qe, Ee, ut) : x.isDataTexture ? w.texSubImage2D(w.TEXTURE_2D, ee, Ye, $e, re, ue, qe, Ee, ut.data) : x.isCompressedTexture ? w.compressedTexSubImage2D(w.TEXTURE_2D, ee, Ye, $e, ut.width, ut.height, qe, ut.data) : w.texSubImage2D(w.TEXTURE_2D, ee, Ye, $e, re, ue, qe, Ee, ut);
      w.pixelStorei(w.UNPACK_ROW_LENGTH, Ze), w.pixelStorei(w.UNPACK_IMAGE_HEIGHT, jt), w.pixelStorei(w.UNPACK_SKIP_PIXELS, fi), w.pixelStorei(w.UNPACK_SKIP_ROWS, Ft), w.pixelStorei(w.UNPACK_SKIP_IMAGES, ts), ee === 0 && I.generateMipmaps && w.generateMipmap(Mt), Me.unbindTexture();
    }, this.copyTextureToTexture3D = function(x, I, B = null, k = null, N = 0) {
      return x.isTexture !== true && (ii("WebGLRenderer: copyTextureToTexture3D function signature has changed."), B = arguments[0] || null, k = arguments[1] || null, x = arguments[2], I = arguments[3], N = arguments[4] || 0), ii('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(x, I, B, k, N);
    }, this.initRenderTarget = function(x) {
      xe.get(x).__webglFramebuffer === void 0 && E.setupRenderTarget(x);
    }, this.initTexture = function(x) {
      x.isCubeTexture ? E.setTextureCube(x, 0) : x.isData3DTexture ? E.setTexture3D(x, 0) : x.isDataArrayTexture || x.isCompressedArrayTexture ? E.setTexture2DArray(x, 0) : E.setTexture2D(x, 0), Me.unbindTexture();
    }, this.resetState = function() {
      R = 0, A = 0, U = null, Me.reset(), st.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return An;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorspace = We._getDrawingBufferColorSpace(e), t.unpackColorSpace = We._getUnpackColorSpace();
  }
}
const rc = { type: "change" }, Po = { type: "start" }, lh = { type: "end" }, rr = new Rs(), ac = new Bn(), Ng = Math.cos(70 * Bc.DEG2RAD), mt = new P(), Nt = 2 * Math.PI, nt = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }, oa = 1e-6;
class Ug extends Kd {
  constructor(e, t = null) {
    super(e, t), this.state = nt.NONE, this.enabled = true, this.target = new P(), this.cursor = new P(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.zoomToCursor = false, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Ni.ROTATE, MIDDLE: Ni.DOLLY, RIGHT: Ni.PAN }, this.touches = { ONE: Li.ROTATE, TWO: Li.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new P(), this._lastQuaternion = new cn(), this._lastTargetPosition = new P(), this._quat = new cn().setFromUnitVectors(e.up, new P(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Il(), this._sphericalDelta = new Il(), this._scale = 1, this._panOffset = new P(), this._rotateStart = new we(), this._rotateEnd = new we(), this._rotateDelta = new we(), this._panStart = new we(), this._panEnd = new we(), this._panDelta = new we(), this._dollyStart = new we(), this._dollyEnd = new we(), this._dollyDelta = new we(), this._dollyDirection = new P(), this._mouse = new we(), this._performCursorZoom = false, this._pointers = [], this._pointerPositions = {}, this._controlActive = false, this._onPointerMove = Fg.bind(this), this._onPointerDown = Og.bind(this), this._onPointerUp = Bg.bind(this), this._onContextMenu = Xg.bind(this), this._onMouseWheel = Hg.bind(this), this._onKeyDown = Vg.bind(this), this._onTouchStart = Gg.bind(this), this._onTouchMove = Wg.bind(this), this._onMouseDown = kg.bind(this), this._onMouseMove = zg.bind(this), this._interceptControlDown = Yg.bind(this), this._interceptControlUp = qg.bind(this), this.domElement !== null && this.connect(), this.update();
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
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(rc), this.update(), this.state = nt.NONE;
  }
  update(e = null) {
    const t = this.object.position;
    mt.copy(t).sub(this.target), mt.applyQuaternion(this._quat), this._spherical.setFromVector3(mt), this.autoRotate && this.state === nt.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle, i = this.maxAzimuthAngle;
    isFinite(n) && isFinite(i) && (n < -Math.PI ? n += Nt : n > Math.PI && (n -= Nt), i < -Math.PI ? i += Nt : i > Math.PI && (i -= Nt), n <= i ? this._spherical.theta = Math.max(n, Math.min(i, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + i) / 2 ? Math.max(n, this._spherical.theta) : Math.min(i, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === true ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let r = false;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const a = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = a != this._spherical.radius;
    }
    if (mt.setFromSpherical(this._spherical), mt.applyQuaternion(this._quatInverse), t.copy(this.target).add(mt), this.object.lookAt(this.target), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let a = null;
      if (this.object.isPerspectiveCamera) {
        const o = mt.length();
        a = this._clampDistance(o * this._scale);
        const l = o - a;
        this.object.position.addScaledVector(this._dollyDirection, l), this.object.updateMatrixWorld(), r = !!l;
      } else if (this.object.isOrthographicCamera) {
        const o = new P(this._mouse.x, this._mouse.y, 0);
        o.unproject(this.object);
        const l = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = l !== this.object.zoom;
        const c = new P(this._mouse.x, this._mouse.y, 0);
        c.unproject(this.object), this.object.position.sub(c).add(o), this.object.updateMatrixWorld(), a = mt.length();
      } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = false;
      a !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position) : (rr.origin.copy(this.object.position), rr.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(rr.direction)) < Ng ? this.object.lookAt(this.target) : (ac.setFromNormalAndCoplanarPoint(this.object.up, this.target), rr.intersectPlane(ac, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const a = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), a !== this.object.zoom && (this.object.updateProjectionMatrix(), r = true);
    }
    return this._scale = 1, this._performCursorZoom = false, r || this._lastPosition.distanceToSquared(this.object.position) > oa || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > oa || this._lastTargetPosition.distanceToSquared(this.target) > oa ? (this.dispatchEvent(rc), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), true) : false;
  }
  _getAutoRotationAngle(e) {
    return e !== null ? Nt / 60 * this.autoRotateSpeed * e : Nt / 60 / 60 * this.autoRotateSpeed;
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
    mt.setFromMatrixColumn(t, 0), mt.multiplyScalar(-e), this._panOffset.add(mt);
  }
  _panUp(e, t) {
    this.screenSpacePanning === true ? mt.setFromMatrixColumn(t, 1) : (mt.setFromMatrixColumn(t, 0), mt.crossVectors(this.object.up, mt)), mt.multiplyScalar(e), this._panOffset.add(mt);
  }
  _pan(e, t) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const i = this.object.position;
      mt.copy(i).sub(this.target);
      let r = mt.length();
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
    const n = this.domElement.getBoundingClientRect(), i = e - n.left, r = t - n.top, a = n.width, o = n.height;
    this._mouse.x = i / a * 2 - 1, this._mouse.y = -(r / o) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
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
    this._rotateLeft(Nt * this._rotateDelta.x / t.clientHeight), this._rotateUp(Nt * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
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
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(Nt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), t = true;
        break;
      case this.keys.BOTTOM:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(-Nt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), t = true;
        break;
      case this.keys.LEFT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(Nt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), t = true;
        break;
      case this.keys.RIGHT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(-Nt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), t = true;
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
    this._rotateLeft(Nt * this._rotateDelta.x / t.clientHeight), this._rotateUp(Nt * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
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
    const a = (e.pageX + t.x) * 0.5, o = (e.pageY + t.y) * 0.5;
    this._updateZoomParameters(a, o);
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
    t === void 0 && (t = new we(), this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
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
function Og(s3) {
  this.enabled !== false && (this._pointers.length === 0 && (this.domElement.setPointerCapture(s3.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(s3) && (this._addPointer(s3), s3.pointerType === "touch" ? this._onTouchStart(s3) : this._onMouseDown(s3)));
}
function Fg(s3) {
  this.enabled !== false && (s3.pointerType === "touch" ? this._onTouchMove(s3) : this._onMouseMove(s3));
}
function Bg(s3) {
  switch (this._removePointer(s3), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(s3.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(lh), this.state = nt.NONE;
      break;
    case 1:
      const e = this._pointers[0], t = this._pointerPositions[e];
      this._onTouchStart({ pointerId: e, pageX: t.x, pageY: t.y });
      break;
  }
}
function kg(s3) {
  let e;
  switch (s3.button) {
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
    case Ni.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseDownDolly(s3), this.state = nt.DOLLY;
      break;
    case Ni.ROTATE:
      if (s3.ctrlKey || s3.metaKey || s3.shiftKey) {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(s3), this.state = nt.PAN;
      } else {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(s3), this.state = nt.ROTATE;
      }
      break;
    case Ni.PAN:
      if (s3.ctrlKey || s3.metaKey || s3.shiftKey) {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(s3), this.state = nt.ROTATE;
      } else {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(s3), this.state = nt.PAN;
      }
      break;
    default:
      this.state = nt.NONE;
  }
  this.state !== nt.NONE && this.dispatchEvent(Po);
}
function zg(s3) {
  switch (this.state) {
    case nt.ROTATE:
      if (this.enableRotate === false) return;
      this._handleMouseMoveRotate(s3);
      break;
    case nt.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseMoveDolly(s3);
      break;
    case nt.PAN:
      if (this.enablePan === false) return;
      this._handleMouseMovePan(s3);
      break;
  }
}
function Hg(s3) {
  this.enabled === false || this.enableZoom === false || this.state !== nt.NONE || (s3.preventDefault(), this.dispatchEvent(Po), this._handleMouseWheel(this._customWheelEvent(s3)), this.dispatchEvent(lh));
}
function Vg(s3) {
  this.enabled !== false && this._handleKeyDown(s3);
}
function Gg(s3) {
  switch (this._trackPointer(s3), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case Li.ROTATE:
          if (this.enableRotate === false) return;
          this._handleTouchStartRotate(s3), this.state = nt.TOUCH_ROTATE;
          break;
        case Li.PAN:
          if (this.enablePan === false) return;
          this._handleTouchStartPan(s3), this.state = nt.TOUCH_PAN;
          break;
        default:
          this.state = nt.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case Li.DOLLY_PAN:
          if (this.enableZoom === false && this.enablePan === false) return;
          this._handleTouchStartDollyPan(s3), this.state = nt.TOUCH_DOLLY_PAN;
          break;
        case Li.DOLLY_ROTATE:
          if (this.enableZoom === false && this.enableRotate === false) return;
          this._handleTouchStartDollyRotate(s3), this.state = nt.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = nt.NONE;
      }
      break;
    default:
      this.state = nt.NONE;
  }
  this.state !== nt.NONE && this.dispatchEvent(Po);
}
function Wg(s3) {
  switch (this._trackPointer(s3), this.state) {
    case nt.TOUCH_ROTATE:
      if (this.enableRotate === false) return;
      this._handleTouchMoveRotate(s3), this.update();
      break;
    case nt.TOUCH_PAN:
      if (this.enablePan === false) return;
      this._handleTouchMovePan(s3), this.update();
      break;
    case nt.TOUCH_DOLLY_PAN:
      if (this.enableZoom === false && this.enablePan === false) return;
      this._handleTouchMoveDollyPan(s3), this.update();
      break;
    case nt.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === false && this.enableRotate === false) return;
      this._handleTouchMoveDollyRotate(s3), this.update();
      break;
    default:
      this.state = nt.NONE;
  }
}
function Xg(s3) {
  this.enabled !== false && s3.preventDefault();
}
function Yg(s3) {
  s3.key === "Control" && (this._controlActive = true, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function qg(s3) {
  s3.key === "Control" && (this._controlActive = false, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function oc(s3, e) {
  if (e === nu) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), s3;
  if (e === Ka || e === Oc) {
    let t = s3.getIndex();
    if (t === null) {
      const a = [], o = s3.getAttribute("position");
      if (o !== void 0) {
        for (let l = 0; l < o.count; l++) a.push(l);
        s3.setIndex(a), t = s3.getIndex();
      } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), s3;
    }
    const n = t.count - 2, i = [];
    if (e === Ka) for (let a = 1; a <= n; a++) i.push(t.getX(0)), i.push(t.getX(a)), i.push(t.getX(a + 1));
    else for (let a = 0; a < n; a++) a % 2 === 0 ? (i.push(t.getX(a)), i.push(t.getX(a + 1)), i.push(t.getX(a + 2))) : (i.push(t.getX(a + 2)), i.push(t.getX(a + 1)), i.push(t.getX(a)));
    i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const r = s3.clone();
    return r.setIndex(i), r.clearGroups(), r;
  } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), s3;
}
class jg extends Qi {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new Qg(t);
    }), this.register(function(t) {
      return new ev(t);
    }), this.register(function(t) {
      return new cv(t);
    }), this.register(function(t) {
      return new hv(t);
    }), this.register(function(t) {
      return new uv(t);
    }), this.register(function(t) {
      return new nv(t);
    }), this.register(function(t) {
      return new iv(t);
    }), this.register(function(t) {
      return new sv(t);
    }), this.register(function(t) {
      return new rv(t);
    }), this.register(function(t) {
      return new Jg(t);
    }), this.register(function(t) {
      return new av(t);
    }), this.register(function(t) {
      return new tv(t);
    }), this.register(function(t) {
      return new lv(t);
    }), this.register(function(t) {
      return new ov(t);
    }), this.register(function(t) {
      return new $g(t);
    }), this.register(function(t) {
      return new dv(t);
    }), this.register(function(t) {
      return new fv(t);
    });
  }
  load(e, t, n, i) {
    const r = this;
    let a;
    if (this.resourcePath !== "") a = this.resourcePath;
    else if (this.path !== "") {
      const c = vs.extractUrlBase(e);
      a = vs.resolveURL(c, this.path);
    } else a = vs.extractUrlBase(e);
    this.manager.itemStart(e);
    const o = function(c) {
      i ? i(c) : console.error(c), r.manager.itemError(e), r.manager.itemEnd(e);
    }, l = new th(this.manager);
    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(c) {
      try {
        r.parse(c, a, function(h) {
          t(h), r.manager.itemEnd(e);
        }, o);
      } catch (h) {
        o(h);
      }
    }, n, o);
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
    const a = {}, o = {}, l = new TextDecoder();
    if (typeof e == "string") r = JSON.parse(e);
    else if (e instanceof ArrayBuffer) if (l.decode(new Uint8Array(e, 0, 4)) === ch) {
      try {
        a[ke.KHR_BINARY_GLTF] = new pv(e);
      } catch (u) {
        i && i(u);
        return;
      }
      r = JSON.parse(a[ke.KHR_BINARY_GLTF].content);
    } else r = JSON.parse(l.decode(e));
    else r = e;
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const c = new wv(r, { path: t || this.resourcePath || "", crossOrigin: this.crossOrigin, requestHeader: this.requestHeader, manager: this.manager, ktx2Loader: this.ktx2Loader, meshoptDecoder: this.meshoptDecoder });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let h = 0; h < this.pluginCallbacks.length; h++) {
      const u = this.pluginCallbacks[h](c);
      u.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), o[u.name] = u, a[u.name] = true;
    }
    if (r.extensionsUsed) for (let h = 0; h < r.extensionsUsed.length; ++h) {
      const u = r.extensionsUsed[h], d = r.extensionsRequired || [];
      switch (u) {
        case ke.KHR_MATERIALS_UNLIT:
          a[u] = new Zg();
          break;
        case ke.KHR_DRACO_MESH_COMPRESSION:
          a[u] = new mv(r, this.dracoLoader);
          break;
        case ke.KHR_TEXTURE_TRANSFORM:
          a[u] = new _v();
          break;
        case ke.KHR_MESH_QUANTIZATION:
          a[u] = new gv();
          break;
        default:
          d.indexOf(u) >= 0 && o[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
      }
    }
    c.setExtensions(a), c.setPlugins(o), c.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, r) {
      n.parse(e, t, i, r);
    });
  }
}
function Kg() {
  let s3 = {};
  return { get: function(e) {
    return s3[e];
  }, add: function(e, t) {
    s3[e] = t;
  }, remove: function(e) {
    delete s3[e];
  }, removeAll: function() {
    s3 = {};
  } };
}
const ke = { KHR_BINARY_GLTF: "KHR_binary_glTF", KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression", KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual", KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat", KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion", KHR_MATERIALS_IOR: "KHR_materials_ior", KHR_MATERIALS_SHEEN: "KHR_materials_sheen", KHR_MATERIALS_SPECULAR: "KHR_materials_specular", KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission", KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence", KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy", KHR_MATERIALS_UNLIT: "KHR_materials_unlit", KHR_MATERIALS_VOLUME: "KHR_materials_volume", KHR_TEXTURE_BASISU: "KHR_texture_basisu", KHR_TEXTURE_TRANSFORM: "KHR_texture_transform", KHR_MESH_QUANTIZATION: "KHR_mesh_quantization", KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength", EXT_MATERIALS_BUMP: "EXT_materials_bump", EXT_TEXTURE_WEBP: "EXT_texture_webp", EXT_TEXTURE_AVIF: "EXT_texture_avif", EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression", EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing" };
class $g {
  constructor(e) {
    this.parser = e, this.name = ke.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
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
    const h = new Le(16777215);
    l.color !== void 0 && h.setRGB(l.color[0], l.color[1], l.color[2], Dt);
    const u = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        c = new nh(h), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new Ud(h), c.distance = u;
        break;
      case "spot":
        c = new Id(h), c.distance = u, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return c.position.set(0, 0, 0), bn(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), i = Promise.resolve(c), t.cache.add(n, i), i;
  }
  getDependency(e, t) {
    if (e === "light") return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, r = n.json.nodes[e], o = (r.extensions && r.extensions[this.name] || {}).light;
    return o === void 0 ? null : this._loadLight(o).then(function(l) {
      return n._getNodeRef(t.cache, o, l);
    });
  }
}
class Zg {
  constructor() {
    this.name = ke.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return oi;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new Le(1, 1, 1), e.opacity = 1;
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const a = r.baseColorFactor;
        e.color.setRGB(a[0], a[1], a[2], Dt), e.opacity = a[3];
      }
      r.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", r.baseColorTexture, St));
    }
    return Promise.all(i);
  }
}
class Jg {
  constructor(e) {
    this.parser = e, this.name = ke.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name].emissiveStrength;
    return r !== void 0 && (t.emissiveIntensity = r), Promise.resolve();
  }
}
class Qg {
  constructor(e) {
    this.parser = e, this.name = ke.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : pn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    if (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor), a.clearcoatTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)), a.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = a.clearcoatRoughnessFactor), a.clearcoatRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatRoughnessMap", a.clearcoatRoughnessTexture)), a.clearcoatNormalTexture !== void 0 && (r.push(n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)), a.clearcoatNormalTexture.scale !== void 0)) {
      const o = a.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new we(o, o);
    }
    return Promise.all(r);
  }
}
class ev {
  constructor(e) {
    this.parser = e, this.name = ke.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : pn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name];
    return t.dispersion = r.dispersion !== void 0 ? r.dispersion : 0, Promise.resolve();
  }
}
class tv {
  constructor(e) {
    this.parser = e, this.name = ke.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : pn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    return a.iridescenceFactor !== void 0 && (t.iridescence = a.iridescenceFactor), a.iridescenceTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceMap", a.iridescenceTexture)), a.iridescenceIor !== void 0 && (t.iridescenceIOR = a.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), a.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum), a.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum), a.iridescenceThicknessTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceThicknessMap", a.iridescenceThicknessTexture)), Promise.all(r);
  }
}
class nv {
  constructor(e) {
    this.parser = e, this.name = ke.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : pn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [];
    t.sheenColor = new Le(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const a = i.extensions[this.name];
    if (a.sheenColorFactor !== void 0) {
      const o = a.sheenColorFactor;
      t.sheenColor.setRGB(o[0], o[1], o[2], Dt);
    }
    return a.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = a.sheenRoughnessFactor), a.sheenColorTexture !== void 0 && r.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture, St)), a.sheenRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)), Promise.all(r);
  }
}
class iv {
  constructor(e) {
    this.parser = e, this.name = ke.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : pn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    return a.transmissionFactor !== void 0 && (t.transmission = a.transmissionFactor), a.transmissionTexture !== void 0 && r.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)), Promise.all(r);
  }
}
class sv {
  constructor(e) {
    this.parser = e, this.name = ke.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : pn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    t.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0, a.thicknessTexture !== void 0 && r.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)), t.attenuationDistance = a.attenuationDistance || 1 / 0;
    const o = a.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new Le().setRGB(o[0], o[1], o[2], Dt), Promise.all(r);
  }
}
class rv {
  constructor(e) {
    this.parser = e, this.name = ke.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : pn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name];
    return t.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve();
  }
}
class av {
  constructor(e) {
    this.parser = e, this.name = ke.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : pn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    t.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1, a.specularTexture !== void 0 && r.push(n.assignTexture(t, "specularIntensityMap", a.specularTexture));
    const o = a.specularColorFactor || [1, 1, 1];
    return t.specularColor = new Le().setRGB(o[0], o[1], o[2], Dt), a.specularColorTexture !== void 0 && r.push(n.assignTexture(t, "specularColorMap", a.specularColorTexture, St)), Promise.all(r);
  }
}
class ov {
  constructor(e) {
    this.parser = e, this.name = ke.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : pn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    return t.bumpScale = a.bumpFactor !== void 0 ? a.bumpFactor : 1, a.bumpTexture !== void 0 && r.push(n.assignTexture(t, "bumpMap", a.bumpTexture)), Promise.all(r);
  }
}
class lv {
  constructor(e) {
    this.parser = e, this.name = ke.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : pn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    return a.anisotropyStrength !== void 0 && (t.anisotropy = a.anisotropyStrength), a.anisotropyRotation !== void 0 && (t.anisotropyRotation = a.anisotropyRotation), a.anisotropyTexture !== void 0 && r.push(n.assignTexture(t, "anisotropyMap", a.anisotropyTexture)), Promise.all(r);
  }
}
class cv {
  constructor(e) {
    this.parser = e, this.name = ke.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name]) return null;
    const r = i.extensions[this.name], a = t.options.ktx2Loader;
    if (!a) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, r.source, a);
  }
}
class hv {
  constructor(e) {
    this.parser = e, this.name = ke.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, r = i.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const a = r.extensions[t], o = i.images[a.source];
    let l = n.textureLoader;
    if (o.uri) {
      const c = n.options.manager.getHandler(o.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(e, a.source, l);
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
class uv {
  constructor(e) {
    this.parser = e, this.name = ke.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, r = i.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const a = r.extensions[t], o = i.images[a.source];
    let l = n.textureLoader;
    if (o.uri) {
      const c = n.options.manager.getHandler(o.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(e, a.source, l);
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
class dv {
  constructor(e) {
    this.name = ke.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], r = this.parser.getDependency("buffer", i.buffer), a = this.parser.options.meshoptDecoder;
      if (!a || !a.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return r.then(function(o) {
        const l = i.byteOffset || 0, c = i.byteLength || 0, h = i.count, u = i.byteStride, d = new Uint8Array(o, l, c);
        return a.decodeGltfBufferAsync ? a.decodeGltfBufferAsync(h, u, d, i.mode, i.filter).then(function(p) {
          return p.buffer;
        }) : a.ready.then(function() {
          const p = new ArrayBuffer(h * u);
          return a.decodeGltfBuffer(new Uint8Array(p), h, u, d, i.mode, i.filter), p;
        });
      });
    } else return null;
  }
}
class fv {
  constructor(e) {
    this.name = ke.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0) return null;
    const i = t.meshes[n.mesh];
    for (const c of i.primitives) if (c.mode !== Xt.TRIANGLES && c.mode !== Xt.TRIANGLE_STRIP && c.mode !== Xt.TRIANGLE_FAN && c.mode !== void 0) return null;
    const a = n.extensions[this.name].attributes, o = [], l = {};
    for (const c in a) o.push(this.parser.getDependency("accessor", a[c]).then((h) => (l[c] = h, l[c])));
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((c) => {
      const h = c.pop(), u = h.isGroup ? h.children : [h], d = c[0].count, p = [];
      for (const _ of u) {
        const g = new Ne(), m = new P(), f = new cn(), T = new P(1, 1, 1), b = new cd(_.geometry, _.material, d);
        for (let M = 0; M < d; M++) l.TRANSLATION && m.fromBufferAttribute(l.TRANSLATION, M), l.ROTATION && f.fromBufferAttribute(l.ROTATION, M), l.SCALE && T.fromBufferAttribute(l.SCALE, M), b.setMatrixAt(M, g.compose(m, f, T));
        for (const M in l) if (M === "_COLOR_0") {
          const L = l[M];
          b.instanceColor = new Za(L.array, L.itemSize, L.normalized);
        } else M !== "TRANSLATION" && M !== "ROTATION" && M !== "SCALE" && _.geometry.setAttribute(M, l[M]);
        ct.prototype.copy.call(b, _), this.parser.assignFinalMaterial(b), p.push(b);
      }
      return h.isGroup ? (h.clear(), h.add(...p), h) : p[0];
    }));
  }
}
const ch = "glTF", hs = 12, lc = { JSON: 1313821514, BIN: 5130562 };
class pv {
  constructor(e) {
    this.name = ke.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, hs), n = new TextDecoder();
    if (this.header = { magic: n.decode(new Uint8Array(e.slice(0, 4))), version: t.getUint32(4, true), length: t.getUint32(8, true) }, this.header.magic !== ch) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - hs, r = new DataView(e, hs);
    let a = 0;
    for (; a < i; ) {
      const o = r.getUint32(a, true);
      a += 4;
      const l = r.getUint32(a, true);
      if (a += 4, l === lc.JSON) {
        const c = new Uint8Array(e, hs + a, o);
        this.content = n.decode(c);
      } else if (l === lc.BIN) {
        const c = hs + a;
        this.body = e.slice(c, c + o);
      }
      a += o;
    }
    if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class mv {
  constructor(e, t) {
    if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = ke.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, r = e.extensions[this.name].bufferView, a = e.extensions[this.name].attributes, o = {}, l = {}, c = {};
    for (const h in a) {
      const u = eo[h] || h.toLowerCase();
      o[u] = a[h];
    }
    for (const h in e.attributes) {
      const u = eo[h] || h.toLowerCase();
      if (a[h] !== void 0) {
        const d = n.accessors[e.attributes[h]], p = Bi[d.componentType];
        c[u] = p.name, l[u] = d.normalized === true;
      }
    }
    return t.getDependency("bufferView", r).then(function(h) {
      return new Promise(function(u, d) {
        i.decodeDracoFile(h, function(p) {
          for (const _ in p.attributes) {
            const g = p.attributes[_], m = l[_];
            m !== void 0 && (g.normalized = m);
          }
          u(p);
        }, o, c, Dt, d);
      });
    });
  }
}
class _v {
  constructor() {
    this.name = ke.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = true), e;
  }
}
class gv {
  constructor() {
    this.name = ke.KHR_MESH_QUANTIZATION;
  }
}
class hh extends Cs {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i * 3 + i;
    for (let a = 0; a !== i; a++) t[a] = n[r + a];
    return t;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = o * 2, c = o * 3, h = i - t, u = (n - t) / h, d = u * u, p = d * u, _ = e * c, g = _ - c, m = -2 * p + 3 * d, f = p - d, T = 1 - m, b = f - d + u;
    for (let M = 0; M !== o; M++) {
      const L = a[g + M + o], R = a[g + M + l] * h, A = a[_ + M + o], U = a[_ + M] * h;
      r[M] = T * L + b * R + m * A + f * U;
    }
    return r;
  }
}
const vv = new cn();
class xv extends hh {
  interpolate_(e, t, n, i) {
    const r = super.interpolate_(e, t, n, i);
    return vv.fromArray(r).normalize().toArray(r), r;
  }
}
const Xt = { POINTS: 0, LINES: 1, LINE_LOOP: 2, LINE_STRIP: 3, TRIANGLES: 4, TRIANGLE_STRIP: 5, TRIANGLE_FAN: 6 }, Bi = { 5120: Int8Array, 5121: Uint8Array, 5122: Int16Array, 5123: Uint16Array, 5125: Uint32Array, 5126: Float32Array }, cc = { 9728: Pt, 9729: zt, 9984: Ac, 9985: lr, 9986: fs, 9987: Tn }, hc = { 33071: zn, 33648: mr, 10497: Vi }, la = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 }, eo = { POSITION: "position", NORMAL: "normal", TANGENT: "tangent", TEXCOORD_0: "uv", TEXCOORD_1: "uv1", TEXCOORD_2: "uv2", TEXCOORD_3: "uv3", COLOR_0: "color", WEIGHTS_0: "skinWeight", JOINTS_0: "skinIndex" }, Fn = { scale: "scale", translation: "position", rotation: "quaternion", weights: "morphTargetInfluences" }, yv = { CUBICSPLINE: void 0, LINEAR: bs, STEP: Es }, ca = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" };
function Mv(s3) {
  return s3.DefaultMaterial === void 0 && (s3.DefaultMaterial = new bo({ color: 16777215, emissive: 0, metalness: 1, roughness: 1, transparent: false, depthTest: true, side: Cn })), s3.DefaultMaterial;
}
function ni(s3, e, t) {
  for (const n in t.extensions) s3[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function bn(s3, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(s3.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function Sv(s3, e, t) {
  let n = false, i = false, r = false;
  for (let c = 0, h = e.length; c < h; c++) {
    const u = e[c];
    if (u.POSITION !== void 0 && (n = true), u.NORMAL !== void 0 && (i = true), u.COLOR_0 !== void 0 && (r = true), n && i && r) break;
  }
  if (!n && !i && !r) return Promise.resolve(s3);
  const a = [], o = [], l = [];
  for (let c = 0, h = e.length; c < h; c++) {
    const u = e[c];
    if (n) {
      const d = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : s3.attributes.position;
      a.push(d);
    }
    if (i) {
      const d = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : s3.attributes.normal;
      o.push(d);
    }
    if (r) {
      const d = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : s3.attributes.color;
      l.push(d);
    }
  }
  return Promise.all([Promise.all(a), Promise.all(o), Promise.all(l)]).then(function(c) {
    const h = c[0], u = c[1], d = c[2];
    return n && (s3.morphAttributes.position = h), i && (s3.morphAttributes.normal = u), r && (s3.morphAttributes.color = d), s3.morphTargetsRelative = true, s3;
  });
}
function Ev(s3, e) {
  if (s3.updateMorphTargets(), e.weights !== void 0) for (let t = 0, n = e.weights.length; t < n; t++) s3.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (s3.morphTargetInfluences.length === t.length) {
      s3.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++) s3.morphTargetDictionary[t[n]] = n;
    } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function bv(s3) {
  let e;
  const t = s3.extensions && s3.extensions[ke.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + ha(t.attributes) : e = s3.indices + ":" + ha(s3.attributes) + ":" + s3.mode, s3.targets !== void 0) for (let n = 0, i = s3.targets.length; n < i; n++) e += ":" + ha(s3.targets[n]);
  return e;
}
function ha(s3) {
  let e = "";
  const t = Object.keys(s3).sort();
  for (let n = 0, i = t.length; n < i; n++) e += t[n] + ":" + s3[t[n]] + ";";
  return e;
}
function to(s3) {
  switch (s3) {
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
function Tv(s3) {
  return s3.search(/\.jpe?g($|\?)/i) > 0 || s3.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : s3.search(/\.webp($|\?)/i) > 0 || s3.search(/^data\:image\/webp/) === 0 ? "image/webp" : s3.search(/\.ktx2($|\?)/i) > 0 || s3.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
const Av = new Ne();
class wv {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new Kg(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = false, i = -1, r = false, a = -1;
    if (typeof navigator < "u") {
      const o = navigator.userAgent;
      n = /^((?!chrome|android).)*safari/i.test(o) === true;
      const l = o.match(/Version\/(\d+)/);
      i = n && l ? parseInt(l[1], 10) : -1, r = o.indexOf("Firefox") > -1, a = r ? o.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || n && i < 17 || r && a < 98 ? this.textureLoader = new Ld(this.options.manager) : this.textureLoader = new Bd(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new th(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(true);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, i = this.json, r = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(a) {
      return a._markDefs && a._markDefs();
    }), Promise.all(this._invokeAll(function(a) {
      return a.beforeRoot && a.beforeRoot();
    })).then(function() {
      return Promise.all([n.getDependencies("scene"), n.getDependencies("animation"), n.getDependencies("camera")]);
    }).then(function(a) {
      const o = { scene: a[0][i.scene || 0], scenes: a[0], animations: a[1], cameras: a[2], asset: i.asset, parser: n, userData: {} };
      return ni(r, o, i), bn(o, i), Promise.all(n._invokeAll(function(l) {
        return l.afterRoot && l.afterRoot(o);
      })).then(function() {
        for (const l of o.scenes) l.updateMatrixWorld();
        e(o);
      });
    }).catch(t);
  }
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, r = t.length; i < r; i++) {
      const a = t[i].joints;
      for (let o = 0, l = a.length; o < l; o++) e[a[o]].isBone = true;
    }
    for (let i = 0, r = e.length; i < r; i++) {
      const a = e[i];
      a.mesh !== void 0 && (this._addNodeRef(this.meshCache, a.mesh), a.skin !== void 0 && (n[a.mesh].isSkinnedMesh = true)), a.camera !== void 0 && this._addNodeRef(this.cameraCache, a.camera);
    }
  }
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const i = n.clone(), r = (a, o) => {
      const l = this.associations.get(a);
      l != null && this.associations.set(o, l);
      for (const [c, h] of a.children.entries()) r(h, o.children[c]);
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
      t = Promise.all(i.map(function(r, a) {
        return n.getDependency(e, a);
      })), this.cache.add(e, t);
    }
    return t;
  }
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[ke.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(r, a) {
      n.load(vs.resolveURL(t.uri, i.path), r, void 0, function() {
        a(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
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
      const a = la[i.type], o = Bi[i.componentType], l = i.normalized === true, c = new o(i.count * a);
      return Promise.resolve(new Lt(c, a, l));
    }
    const r = [];
    return i.bufferView !== void 0 ? r.push(this.getDependency("bufferView", i.bufferView)) : r.push(null), i.sparse !== void 0 && (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(r).then(function(a) {
      const o = a[0], l = la[i.type], c = Bi[i.componentType], h = c.BYTES_PER_ELEMENT, u = h * l, d = i.byteOffset || 0, p = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, _ = i.normalized === true;
      let g, m;
      if (p && p !== u) {
        const f = Math.floor(d / p), T = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + f + ":" + i.count;
        let b = t.cache.get(T);
        b || (g = new c(o, f * p, i.count * p / h), b = new sd(g, p / h), t.cache.add(T, b)), m = new yo(b, l, d % p / h, _);
      } else o === null ? g = new c(i.count * l) : g = new c(o, d, i.count * l), m = new Lt(g, l, _);
      if (i.sparse !== void 0) {
        const f = la.SCALAR, T = Bi[i.sparse.indices.componentType], b = i.sparse.indices.byteOffset || 0, M = i.sparse.values.byteOffset || 0, L = new T(a[1], b, i.sparse.count * f), R = new c(a[2], M, i.sparse.count * l);
        o !== null && (m = new Lt(m.array.slice(), m.itemSize, m.normalized)), m.normalized = false;
        for (let A = 0, U = L.length; A < U; A++) {
          const S = L[A];
          if (m.setX(S, R[A * l]), l >= 2 && m.setY(S, R[A * l + 1]), l >= 3 && m.setZ(S, R[A * l + 2]), l >= 4 && m.setW(S, R[A * l + 3]), l >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        m.normalized = _;
      }
      return m;
    });
  }
  loadTexture(e) {
    const t = this.json, n = this.options, r = t.textures[e].source, a = t.images[r];
    let o = this.textureLoader;
    if (a.uri) {
      const l = n.manager.getHandler(a.uri);
      l !== null && (o = l);
    }
    return this.loadTextureImage(e, r, o);
  }
  loadTextureImage(e, t, n) {
    const i = this, r = this.json, a = r.textures[e], o = r.images[t], l = (o.uri || o.bufferView) + ":" + a.sampler;
    if (this.textureCache[l]) return this.textureCache[l];
    const c = this.loadImageSource(t, n).then(function(h) {
      h.flipY = false, h.name = a.name || o.name || "", h.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === false && (h.name = o.uri);
      const d = (r.samplers || {})[a.sampler] || {};
      return h.magFilter = cc[d.magFilter] || zt, h.minFilter = cc[d.minFilter] || Tn, h.wrapS = hc[d.wrapS] || Vi, h.wrapT = hc[d.wrapT] || Vi, h.generateMipmaps = !h.isCompressedTexture && h.minFilter !== Pt && h.minFilter !== zt, i.associations.set(h, { textures: e }), h;
    }).catch(function() {
      return null;
    });
    return this.textureCache[l] = c, c;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, r = this.options;
    if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then((u) => u.clone());
    const a = i.images[e], o = self.URL || self.webkitURL;
    let l = a.uri || "", c = false;
    if (a.bufferView !== void 0) l = n.getDependency("bufferView", a.bufferView).then(function(u) {
      c = true;
      const d = new Blob([u], { type: a.mimeType });
      return l = o.createObjectURL(d), l;
    });
    else if (a.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const h = Promise.resolve(l).then(function(u) {
      return new Promise(function(d, p) {
        let _ = d;
        t.isImageBitmapLoader === true && (_ = function(g) {
          const m = new xt(g);
          m.needsUpdate = true, d(m);
        }), t.load(vs.resolveURL(u, r.path), _, void 0, p);
      });
    }).then(function(u) {
      return c === true && o.revokeObjectURL(l), bn(u, a), u.userData.mimeType = a.mimeType || Tv(a.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", l), u;
    });
    return this.sourceCache[e] = h, h;
  }
  assignTexture(e, t, n, i) {
    const r = this;
    return this.getDependency("texture", n.index).then(function(a) {
      if (!a) return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (a = a.clone(), a.channel = n.texCoord), r.extensions[ke.KHR_TEXTURE_TRANSFORM]) {
        const o = n.extensions !== void 0 ? n.extensions[ke.KHR_TEXTURE_TRANSFORM] : void 0;
        if (o) {
          const l = r.associations.get(a);
          a = r.extensions[ke.KHR_TEXTURE_TRANSFORM].extendTexture(a, o), r.associations.set(a, l);
        }
      }
      return i !== void 0 && (a.colorSpace = i), e[t] = a, a;
    });
  }
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0, r = t.attributes.color !== void 0, a = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + n.uuid;
      let l = this.cache.get(o);
      l || (l = new Zc(), nn.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = false, this.cache.add(o, l)), n = l;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(o);
      l || (l = new $c(), nn.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, this.cache.add(o, l)), n = l;
    }
    if (i || r || a) {
      let o = "ClonedMaterial:" + n.uuid + ":";
      i && (o += "derivative-tangents:"), r && (o += "vertex-colors:"), a && (o += "flat-shading:");
      let l = this.cache.get(o);
      l || (l = n.clone(), r && (l.vertexColors = true), a && (l.flatShading = true), i && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(o, l), this.associations.set(l, this.associations.get(n))), n = l;
    }
    e.material = n;
  }
  getMaterialType() {
    return bo;
  }
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, r = n.materials[e];
    let a;
    const o = {}, l = r.extensions || {}, c = [];
    if (l[ke.KHR_MATERIALS_UNLIT]) {
      const u = i[ke.KHR_MATERIALS_UNLIT];
      a = u.getMaterialType(), c.push(u.extendParams(o, r, t));
    } else {
      const u = r.pbrMetallicRoughness || {};
      if (o.color = new Le(1, 1, 1), o.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const d = u.baseColorFactor;
        o.color.setRGB(d[0], d[1], d[2], Dt), o.opacity = d[3];
      }
      u.baseColorTexture !== void 0 && c.push(t.assignTexture(o, "map", u.baseColorTexture, St)), o.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, o.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(o, "metalnessMap", u.metallicRoughnessTexture)), c.push(t.assignTexture(o, "roughnessMap", u.metallicRoughnessTexture))), a = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), c.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, o);
      })));
    }
    r.doubleSided === true && (o.side = ln);
    const h = r.alphaMode || ca.OPAQUE;
    if (h === ca.BLEND ? (o.transparent = true, o.depthWrite = false) : (o.transparent = false, h === ca.MASK && (o.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && a !== oi && (c.push(t.assignTexture(o, "normalMap", r.normalTexture)), o.normalScale = new we(1, 1), r.normalTexture.scale !== void 0)) {
      const u = r.normalTexture.scale;
      o.normalScale.set(u, u);
    }
    if (r.occlusionTexture !== void 0 && a !== oi && (c.push(t.assignTexture(o, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && a !== oi) {
      const u = r.emissiveFactor;
      o.emissive = new Le().setRGB(u[0], u[1], u[2], Dt);
    }
    return r.emissiveTexture !== void 0 && a !== oi && c.push(t.assignTexture(o, "emissiveMap", r.emissiveTexture, St)), Promise.all(c).then(function() {
      const u = new a(o);
      return r.name && (u.name = r.name), bn(u, r), t.associations.set(u, { materials: e }), r.extensions && ni(i, u, r), u;
    });
  }
  createUniqueName(e) {
    const t = et.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function r(o) {
      return n[ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function(l) {
        return uc(l, o, t);
      });
    }
    const a = [];
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o], h = bv(c), u = i[h];
      if (u) a.push(u.promise);
      else {
        let d;
        c.extensions && c.extensions[ke.KHR_DRACO_MESH_COMPRESSION] ? d = r(c) : d = uc(new fn(), c, t), i[h] = { primitive: c, promise: d }, a.push(d);
      }
    }
    return Promise.all(a);
  }
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, r = n.meshes[e], a = r.primitives, o = [];
    for (let l = 0, c = a.length; l < c; l++) {
      const h = a[l].material === void 0 ? Mv(this.cache) : this.getDependency("material", a[l].material);
      o.push(h);
    }
    return o.push(t.loadGeometries(a)), Promise.all(o).then(function(l) {
      const c = l.slice(0, l.length - 1), h = l[l.length - 1], u = [];
      for (let p = 0, _ = h.length; p < _; p++) {
        const g = h[p], m = a[p];
        let f;
        const T = c[p];
        if (m.mode === Xt.TRIANGLES || m.mode === Xt.TRIANGLE_STRIP || m.mode === Xt.TRIANGLE_FAN || m.mode === void 0) f = r.isSkinnedMesh === true ? new ad(g, T) : new Ut(g, T), f.isSkinnedMesh === true && f.normalizeSkinWeights(), m.mode === Xt.TRIANGLE_STRIP ? f.geometry = oc(f.geometry, Oc) : m.mode === Xt.TRIANGLE_FAN && (f.geometry = oc(f.geometry, Ka));
        else if (m.mode === Xt.LINES) f = new dd(g, T);
        else if (m.mode === Xt.LINE_STRIP) f = new Eo(g, T);
        else if (m.mode === Xt.LINE_LOOP) f = new fd(g, T);
        else if (m.mode === Xt.POINTS) f = new pd(g, T);
        else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
        Object.keys(f.geometry.morphAttributes).length > 0 && Ev(f, r), f.name = t.createUniqueName(r.name || "mesh_" + e), bn(f, r), m.extensions && ni(i, f, m), t.assignFinalMaterial(f), u.push(f);
      }
      for (let p = 0, _ = u.length; p < _; p++) t.associations.set(u[p], { meshes: e, primitives: p });
      if (u.length === 1) return r.extensions && ni(i, u[0], r), u[0];
      const d = new li();
      r.extensions && ni(i, d, r), t.associations.set(d, { meshes: e });
      for (let p = 0, _ = u.length; p < _; p++) d.add(u[p]);
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
    return n.type === "perspective" ? t = new Ct(Bc.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new Ao(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), bn(t, n), Promise.resolve(t);
  }
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let i = 0, r = t.joints.length; i < r; i++) n.push(this._loadNodeShallow(t.joints[i]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
      const r = i.pop(), a = i, o = [], l = [];
      for (let c = 0, h = a.length; c < h; c++) {
        const u = a[c];
        if (u) {
          o.push(u);
          const d = new Ne();
          r !== null && d.fromArray(r.array, c * 16), l.push(d);
        } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
      }
      return new Mo(o, l);
    });
  }
  loadAnimation(e) {
    const t = this.json, n = this, i = t.animations[e], r = i.name ? i.name : "animation_" + e, a = [], o = [], l = [], c = [], h = [];
    for (let u = 0, d = i.channels.length; u < d; u++) {
      const p = i.channels[u], _ = i.samplers[p.sampler], g = p.target, m = g.node, f = i.parameters !== void 0 ? i.parameters[_.input] : _.input, T = i.parameters !== void 0 ? i.parameters[_.output] : _.output;
      g.node !== void 0 && (a.push(this.getDependency("node", m)), o.push(this.getDependency("accessor", f)), l.push(this.getDependency("accessor", T)), c.push(_), h.push(g));
    }
    return Promise.all([Promise.all(a), Promise.all(o), Promise.all(l), Promise.all(c), Promise.all(h)]).then(function(u) {
      const d = u[0], p = u[1], _ = u[2], g = u[3], m = u[4], f = [];
      for (let T = 0, b = d.length; T < b; T++) {
        const M = d[T], L = p[T], R = _[T], A = g[T], U = m[T];
        if (M === void 0) continue;
        M.updateMatrix && M.updateMatrix();
        const S = n._createAnimationTracks(M, L, R, A, U);
        if (S) for (let y = 0; y < S.length; y++) f.push(S[y]);
      }
      return new bd(r, void 0, f);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(r) {
      const a = n._getNodeRef(n.meshCache, i.mesh, r);
      return i.weights !== void 0 && a.traverse(function(o) {
        if (o.isMesh) for (let l = 0, c = i.weights.length; l < c; l++) o.morphTargetInfluences[l] = i.weights[l];
      }), a;
    });
  }
  loadNode(e) {
    const t = this.json, n = this, i = t.nodes[e], r = n._loadNodeShallow(e), a = [], o = i.children || [];
    for (let c = 0, h = o.length; c < h; c++) a.push(n.getDependency("node", o[c]));
    const l = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
    return Promise.all([r, Promise.all(a), l]).then(function(c) {
      const h = c[0], u = c[1], d = c[2];
      d !== null && h.traverse(function(p) {
        p.isSkinnedMesh && p.bind(d, Av);
      });
      for (let p = 0, _ = u.length; p < _; p++) h.add(u[p]);
      return h;
    });
  }
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, i = this;
    if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
    const r = t.nodes[e], a = r.name ? i.createUniqueName(r.name) : "", o = [], l = i._invokeOne(function(c) {
      return c.createNodeMesh && c.createNodeMesh(e);
    });
    return l && o.push(l), r.camera !== void 0 && o.push(i.getDependency("camera", r.camera).then(function(c) {
      return i._getNodeRef(i.cameraCache, r.camera, c);
    })), i._invokeAll(function(c) {
      return c.createNodeAttachment && c.createNodeAttachment(e);
    }).forEach(function(c) {
      o.push(c);
    }), this.nodeCache[e] = Promise.all(o).then(function(c) {
      let h;
      if (r.isBone === true ? h = new jc() : c.length > 1 ? h = new li() : c.length === 1 ? h = c[0] : h = new ct(), h !== c[0]) for (let u = 0, d = c.length; u < d; u++) h.add(c[u]);
      if (r.name && (h.userData.name = r.name, h.name = a), bn(h, r), r.extensions && ni(n, h, r), r.matrix !== void 0) {
        const u = new Ne();
        u.fromArray(r.matrix), h.applyMatrix4(u);
      } else r.translation !== void 0 && h.position.fromArray(r.translation), r.rotation !== void 0 && h.quaternion.fromArray(r.rotation), r.scale !== void 0 && h.scale.fromArray(r.scale);
      return i.associations.has(h) || i.associations.set(h, {}), i.associations.get(h).nodes = e, h;
    }), this.nodeCache[e];
  }
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], i = this, r = new li();
    n.name && (r.name = i.createUniqueName(n.name)), bn(r, n), n.extensions && ni(t, r, n);
    const a = n.nodes || [], o = [];
    for (let l = 0, c = a.length; l < c; l++) o.push(i.getDependency("node", a[l]));
    return Promise.all(o).then(function(l) {
      for (let h = 0, u = l.length; h < u; h++) r.add(l[h]);
      const c = (h) => {
        const u = /* @__PURE__ */ new Map();
        for (const [d, p] of i.associations) (d instanceof nn || d instanceof xt) && u.set(d, p);
        return h.traverse((d) => {
          const p = i.associations.get(d);
          p != null && u.set(d, p);
        }), u;
      };
      return i.associations = c(r), r;
    });
  }
  _createAnimationTracks(e, t, n, i, r) {
    const a = [], o = e.name ? e.name : e.uuid, l = [];
    Fn[r.path] === Fn.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && l.push(d.name ? d.name : d.uuid);
    }) : l.push(o);
    let c;
    switch (Fn[r.path]) {
      case Fn.weights:
        c = qi;
        break;
      case Fn.rotation:
        c = ji;
        break;
      case Fn.position:
      case Fn.scale:
        c = Ki;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            c = qi;
            break;
          case 2:
          case 3:
          default:
            c = Ki;
            break;
        }
        break;
    }
    const h = i.interpolation !== void 0 ? yv[i.interpolation] : bs, u = this._getArrayFromAccessor(n);
    for (let d = 0, p = l.length; d < p; d++) {
      const _ = new c(l[d] + "." + Fn[r.path], t.array, u, h);
      i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(_), a.push(_);
    }
    return a;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = to(t.constructor), i = new Float32Array(t.length);
      for (let r = 0, a = t.length; r < a; r++) i[r] = t[r] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const i = this instanceof ji ? xv : hh;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
  }
}
function Rv(s3, e, t) {
  const n = e.attributes, i = new un();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION], l = o.min, c = o.max;
    if (l !== void 0 && c !== void 0) {
      if (i.set(new P(l[0], l[1], l[2]), new P(c[0], c[1], c[2])), o.normalized) {
        const h = to(Bi[o.componentType]);
        i.min.multiplyScalar(h), i.max.multiplyScalar(h);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else return;
  const r = e.targets;
  if (r !== void 0) {
    const o = new P(), l = new P();
    for (let c = 0, h = r.length; c < h; c++) {
      const u = r[c];
      if (u.POSITION !== void 0) {
        const d = t.json.accessors[u.POSITION], p = d.min, _ = d.max;
        if (p !== void 0 && _ !== void 0) {
          if (l.setX(Math.max(Math.abs(p[0]), Math.abs(_[0]))), l.setY(Math.max(Math.abs(p[1]), Math.abs(_[1]))), l.setZ(Math.max(Math.abs(p[2]), Math.abs(_[2]))), d.normalized) {
            const g = to(Bi[d.componentType]);
            l.multiplyScalar(g);
          }
          o.max(l);
        } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(o);
  }
  s3.boundingBox = i;
  const a = new dn();
  i.getCenter(a.center), a.radius = i.min.distanceTo(i.max) / 2, s3.boundingSphere = a;
}
function uc(s3, e, t) {
  const n = e.attributes, i = [];
  function r(a, o) {
    return t.getDependency("accessor", a).then(function(l) {
      s3.setAttribute(o, l);
    });
  }
  for (const a in n) {
    const o = eo[a] || a.toLowerCase();
    o in s3.attributes || i.push(r(n[a], o));
  }
  if (e.indices !== void 0 && !s3.index) {
    const a = t.getDependency("accessor", e.indices).then(function(o) {
      s3.setIndex(o);
    });
    i.push(a);
  }
  return We.workingColorSpace !== Dt && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${We.workingColorSpace}" not supported.`), bn(s3, e), Rv(s3, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? Sv(s3, e.targets, t) : s3;
  });
}
var xs = function() {
  var s3 = 0, e = document.createElement("div");
  e.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", e.addEventListener("click", function(h) {
    h.preventDefault(), n(++s3 % e.children.length);
  }, false);
  function t(h) {
    return e.appendChild(h.dom), h;
  }
  function n(h) {
    for (var u = 0; u < e.children.length; u++) e.children[u].style.display = u === h ? "block" : "none";
    s3 = h;
  }
  var i = (performance || Date).now(), r = i, a = 0, o = t(new xs.Panel("FPS", "#0ff", "#002")), l = t(new xs.Panel("MS", "#0f0", "#020"));
  if (self.performance && self.performance.memory) var c = t(new xs.Panel("MB", "#f08", "#201"));
  return n(0), { REVISION: 16, dom: e, addPanel: t, showPanel: n, begin: function() {
    i = (performance || Date).now();
  }, end: function() {
    a++;
    var h = (performance || Date).now();
    if (l.update(h - i, 200), h >= r + 1e3 && (o.update(a * 1e3 / (h - r), 100), r = h, a = 0, c)) {
      var u = performance.memory;
      c.update(u.usedJSHeapSize / 1048576, u.jsHeapSizeLimit / 1048576);
    }
    return h;
  }, update: function() {
    i = this.end();
  }, domElement: e, setMode: n };
};
xs.Panel = function(s3, e, t) {
  var n = 1 / 0, i = 0, r = Math.round, a = r(window.devicePixelRatio || 1), o = 80 * a, l = 48 * a, c = 3 * a, h = 2 * a, u = 3 * a, d = 15 * a, p = 74 * a, _ = 30 * a, g = document.createElement("canvas");
  g.width = o, g.height = l, g.style.cssText = "width:80px;height:48px";
  var m = g.getContext("2d");
  return m.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif", m.textBaseline = "top", m.fillStyle = t, m.fillRect(0, 0, o, l), m.fillStyle = e, m.fillText(s3, c, h), m.fillRect(u, d, p, _), m.fillStyle = t, m.globalAlpha = 0.9, m.fillRect(u, d, p, _), { dom: g, update: function(f, T) {
    n = Math.min(n, f), i = Math.max(i, f), m.fillStyle = t, m.globalAlpha = 1, m.fillRect(0, 0, o, d), m.fillStyle = e, m.fillText(r(f) + " " + s3 + " (" + r(n) + "-" + r(i) + ")", c, h), m.drawImage(g, u + a, d, p - a, _, u, d, p - a, _), m.fillRect(u + p - a, d, a, _), m.fillStyle = t, m.globalAlpha = 0.9, m.fillRect(u + p - a, d, a, r((1 - f / T) * _));
  } };
};
function Cv(s3) {
  if (!(typeof window > "u")) {
    var e = document.createElement("style");
    return e.setAttribute("type", "text/css"), e.innerHTML = s3, document.head.appendChild(e), s3;
  }
}
function Ii(s3, e) {
  var t = s3.__state.conversionName.toString(), n = Math.round(s3.r), i = Math.round(s3.g), r = Math.round(s3.b), a = s3.a, o = Math.round(s3.h), l = s3.s.toFixed(1), c = s3.v.toFixed(1);
  if (e || t === "THREE_CHAR_HEX" || t === "SIX_CHAR_HEX") {
    for (var h = s3.hex.toString(16); h.length < 6; ) h = "0" + h;
    return "#" + h;
  } else {
    if (t === "CSS_RGB") return "rgb(" + n + "," + i + "," + r + ")";
    if (t === "CSS_RGBA") return "rgba(" + n + "," + i + "," + r + "," + a + ")";
    if (t === "HEX") return "0x" + s3.hex.toString(16);
    if (t === "RGB_ARRAY") return "[" + n + "," + i + "," + r + "]";
    if (t === "RGBA_ARRAY") return "[" + n + "," + i + "," + r + "," + a + "]";
    if (t === "RGB_OBJ") return "{r:" + n + ",g:" + i + ",b:" + r + "}";
    if (t === "RGBA_OBJ") return "{r:" + n + ",g:" + i + ",b:" + r + ",a:" + a + "}";
    if (t === "HSV_OBJ") return "{h:" + o + ",s:" + l + ",v:" + c + "}";
    if (t === "HSVA_OBJ") return "{h:" + o + ",s:" + l + ",v:" + c + ",a:" + a + "}";
  }
  return "unknown format";
}
var dc = Array.prototype.forEach, us = Array.prototype.slice, Y = { BREAK: {}, extend: function(e) {
  return this.each(us.call(arguments, 1), function(t) {
    var n = this.isObject(t) ? Object.keys(t) : [];
    n.forEach((function(i) {
      this.isUndefined(t[i]) || (e[i] = t[i]);
    }).bind(this));
  }, this), e;
}, defaults: function(e) {
  return this.each(us.call(arguments, 1), function(t) {
    var n = this.isObject(t) ? Object.keys(t) : [];
    n.forEach((function(i) {
      this.isUndefined(e[i]) && (e[i] = t[i]);
    }).bind(this));
  }, this), e;
}, compose: function() {
  var e = us.call(arguments);
  return function() {
    for (var t = us.call(arguments), n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
    return t[0];
  };
}, each: function(e, t, n) {
  if (e) {
    if (dc && e.forEach && e.forEach === dc) e.forEach(t, n);
    else if (e.length === e.length + 0) {
      var i = void 0, r = void 0;
      for (i = 0, r = e.length; i < r; i++) if (i in e && t.call(n, e[i], i) === this.BREAK) return;
    } else for (var a in e) if (t.call(n, e[a], a) === this.BREAK) return;
  }
}, defer: function(e) {
  setTimeout(e, 0);
}, debounce: function(e, t, n) {
  var i = void 0;
  return function() {
    var r = this, a = arguments;
    function o() {
      i = null, n || e.apply(r, a);
    }
    var l = n || !i;
    clearTimeout(i), i = setTimeout(o, t), l && e.apply(r, a);
  };
}, toArray: function(e) {
  return e.toArray ? e.toArray() : us.call(e);
}, isUndefined: function(e) {
  return e === void 0;
}, isNull: function(e) {
  return e === null;
}, isNaN: function(s3) {
  function e(t) {
    return s3.apply(this, arguments);
  }
  return e.toString = function() {
    return s3.toString();
  }, e;
}(function(s3) {
  return isNaN(s3);
}), isArray: Array.isArray || function(s3) {
  return s3.constructor === Array;
}, isObject: function(e) {
  return e === Object(e);
}, isNumber: function(e) {
  return e === e + 0;
}, isString: function(e) {
  return e === e + "";
}, isBoolean: function(e) {
  return e === false || e === true;
}, isFunction: function(e) {
  return e instanceof Function;
} }, Pv = [{ litmus: Y.isString, conversions: { THREE_CHAR_HEX: { read: function(e) {
  var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
  return t === null ? false : { space: "HEX", hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString(), 0) };
}, write: Ii }, SIX_CHAR_HEX: { read: function(e) {
  var t = e.match(/^#([A-F0-9]{6})$/i);
  return t === null ? false : { space: "HEX", hex: parseInt("0x" + t[1].toString(), 0) };
}, write: Ii }, CSS_RGB: { read: function(e) {
  var t = e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
  return t === null ? false : { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]) };
}, write: Ii }, CSS_RGBA: { read: function(e) {
  var t = e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
  return t === null ? false : { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]), a: parseFloat(t[4]) };
}, write: Ii } } }, { litmus: Y.isNumber, conversions: { HEX: { read: function(e) {
  return { space: "HEX", hex: e, conversionName: "HEX" };
}, write: function(e) {
  return e.hex;
} } } }, { litmus: Y.isArray, conversions: { RGB_ARRAY: { read: function(e) {
  return e.length !== 3 ? false : { space: "RGB", r: e[0], g: e[1], b: e[2] };
}, write: function(e) {
  return [e.r, e.g, e.b];
} }, RGBA_ARRAY: { read: function(e) {
  return e.length !== 4 ? false : { space: "RGB", r: e[0], g: e[1], b: e[2], a: e[3] };
}, write: function(e) {
  return [e.r, e.g, e.b, e.a];
} } } }, { litmus: Y.isObject, conversions: { RGBA_OBJ: { read: function(e) {
  return Y.isNumber(e.r) && Y.isNumber(e.g) && Y.isNumber(e.b) && Y.isNumber(e.a) ? { space: "RGB", r: e.r, g: e.g, b: e.b, a: e.a } : false;
}, write: function(e) {
  return { r: e.r, g: e.g, b: e.b, a: e.a };
} }, RGB_OBJ: { read: function(e) {
  return Y.isNumber(e.r) && Y.isNumber(e.g) && Y.isNumber(e.b) ? { space: "RGB", r: e.r, g: e.g, b: e.b } : false;
}, write: function(e) {
  return { r: e.r, g: e.g, b: e.b };
} }, HSVA_OBJ: { read: function(e) {
  return Y.isNumber(e.h) && Y.isNumber(e.s) && Y.isNumber(e.v) && Y.isNumber(e.a) ? { space: "HSV", h: e.h, s: e.s, v: e.v, a: e.a } : false;
}, write: function(e) {
  return { h: e.h, s: e.s, v: e.v, a: e.a };
} }, HSV_OBJ: { read: function(e) {
  return Y.isNumber(e.h) && Y.isNumber(e.s) && Y.isNumber(e.v) ? { space: "HSV", h: e.h, s: e.s, v: e.v } : false;
}, write: function(e) {
  return { h: e.h, s: e.s, v: e.v };
} } } }], ds = void 0, ar = void 0, no = function() {
  ar = false;
  var e = arguments.length > 1 ? Y.toArray(arguments) : arguments[0];
  return Y.each(Pv, function(t) {
    if (t.litmus(e)) return Y.each(t.conversions, function(n, i) {
      if (ds = n.read(e), ar === false && ds !== false) return ar = ds, ds.conversionName = i, ds.conversion = n, Y.BREAK;
    }), Y.BREAK;
  }), ar;
}, fc = void 0, yr = { hsv_to_rgb: function(e, t, n) {
  var i = Math.floor(e / 60) % 6, r = e / 60 - Math.floor(e / 60), a = n * (1 - t), o = n * (1 - r * t), l = n * (1 - (1 - r) * t), c = [[n, l, a], [o, n, a], [a, n, l], [a, o, n], [l, a, n], [n, a, o]][i];
  return { r: c[0] * 255, g: c[1] * 255, b: c[2] * 255 };
}, rgb_to_hsv: function(e, t, n) {
  var i = Math.min(e, t, n), r = Math.max(e, t, n), a = r - i, o = void 0, l = void 0;
  if (r !== 0) l = a / r;
  else return { h: NaN, s: 0, v: 0 };
  return e === r ? o = (t - n) / a : t === r ? o = 2 + (n - e) / a : o = 4 + (e - t) / a, o /= 6, o < 0 && (o += 1), { h: o * 360, s: l, v: r / 255 };
}, rgb_to_hex: function(e, t, n) {
  var i = this.hex_with_component(0, 2, e);
  return i = this.hex_with_component(i, 1, t), i = this.hex_with_component(i, 0, n), i;
}, component_from_hex: function(e, t) {
  return e >> t * 8 & 255;
}, hex_with_component: function(e, t, n) {
  return n << (fc = t * 8) | e & ~(255 << fc);
} }, Lv = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s3) {
  return typeof s3;
} : function(s3) {
  return s3 && typeof Symbol == "function" && s3.constructor === Symbol && s3 !== Symbol.prototype ? "symbol" : typeof s3;
}, sn = function(s3, e) {
  if (!(s3 instanceof e)) throw new TypeError("Cannot call a class as a function");
}, rn = /* @__PURE__ */ function() {
  function s3(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(e, i.key, i);
    }
  }
  return function(e, t, n) {
    return t && s3(e.prototype, t), n && s3(e, n), e;
  };
}(), Xn = function s(e, t, n) {
  e === null && (e = Function.prototype);
  var i = Object.getOwnPropertyDescriptor(e, t);
  if (i === void 0) {
    var r = Object.getPrototypeOf(e);
    return r === null ? void 0 : s(r, t, n);
  } else {
    if ("value" in i) return i.value;
    var a = i.get;
    return a === void 0 ? void 0 : a.call(n);
  }
}, Yn = function(s3, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  s3.prototype = Object.create(e && e.prototype, { constructor: { value: s3, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(s3, e) : s3.__proto__ = e);
}, qn = function(s3, e) {
  if (!s3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : s3;
}, yt = function() {
  function s3() {
    if (sn(this, s3), this.__state = no.apply(this, arguments), this.__state === false) throw new Error("Failed to interpret color arguments");
    this.__state.a = this.__state.a || 1;
  }
  return rn(s3, [{ key: "toString", value: function() {
    return Ii(this);
  } }, { key: "toHexString", value: function() {
    return Ii(this, true);
  } }, { key: "toOriginal", value: function() {
    return this.__state.conversion.write(this);
  } }]), s3;
}();
function Lo(s3, e, t) {
  Object.defineProperty(s3, e, { get: function() {
    return this.__state.space === "RGB" ? this.__state[e] : (yt.recalculateRGB(this, e, t), this.__state[e]);
  }, set: function(i) {
    this.__state.space !== "RGB" && (yt.recalculateRGB(this, e, t), this.__state.space = "RGB"), this.__state[e] = i;
  } });
}
function Do(s3, e) {
  Object.defineProperty(s3, e, { get: function() {
    return this.__state.space === "HSV" ? this.__state[e] : (yt.recalculateHSV(this), this.__state[e]);
  }, set: function(n) {
    this.__state.space !== "HSV" && (yt.recalculateHSV(this), this.__state.space = "HSV"), this.__state[e] = n;
  } });
}
yt.recalculateRGB = function(s3, e, t) {
  if (s3.__state.space === "HEX") s3.__state[e] = yr.component_from_hex(s3.__state.hex, t);
  else if (s3.__state.space === "HSV") Y.extend(s3.__state, yr.hsv_to_rgb(s3.__state.h, s3.__state.s, s3.__state.v));
  else throw new Error("Corrupted color state");
};
yt.recalculateHSV = function(s3) {
  var e = yr.rgb_to_hsv(s3.r, s3.g, s3.b);
  Y.extend(s3.__state, { s: e.s, v: e.v }), Y.isNaN(e.h) ? Y.isUndefined(s3.__state.h) && (s3.__state.h = 0) : s3.__state.h = e.h;
};
yt.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"];
Lo(yt.prototype, "r", 2);
Lo(yt.prototype, "g", 1);
Lo(yt.prototype, "b", 0);
Do(yt.prototype, "h");
Do(yt.prototype, "s");
Do(yt.prototype, "v");
Object.defineProperty(yt.prototype, "a", { get: function() {
  return this.__state.a;
}, set: function(e) {
  this.__state.a = e;
} });
Object.defineProperty(yt.prototype, "hex", { get: function() {
  return this.__state.space !== "HEX" && (this.__state.hex = yr.rgb_to_hex(this.r, this.g, this.b), this.__state.space = "HEX"), this.__state.hex;
}, set: function(e) {
  this.__state.space = "HEX", this.__state.hex = e;
} });
var di = function() {
  function s3(e, t) {
    sn(this, s3), this.initialValue = e[t], this.domElement = document.createElement("div"), this.object = e, this.property = t, this.__onChange = void 0, this.__onFinishChange = void 0;
  }
  return rn(s3, [{ key: "onChange", value: function(t) {
    return this.__onChange = t, this;
  } }, { key: "onFinishChange", value: function(t) {
    return this.__onFinishChange = t, this;
  } }, { key: "setValue", value: function(t) {
    return this.object[this.property] = t, this.__onChange && this.__onChange.call(this, t), this.updateDisplay(), this;
  } }, { key: "getValue", value: function() {
    return this.object[this.property];
  } }, { key: "updateDisplay", value: function() {
    return this;
  } }, { key: "isModified", value: function() {
    return this.initialValue !== this.getValue();
  } }]), s3;
}(), Dv = { HTMLEvents: ["change"], MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"], KeyboardEvents: ["keydown"] }, uh = {};
Y.each(Dv, function(s3, e) {
  Y.each(s3, function(t) {
    uh[t] = e;
  });
});
var Iv = /(\d+(\.\d+)?)px/;
function an(s3) {
  if (s3 === "0" || Y.isUndefined(s3)) return 0;
  var e = s3.match(Iv);
  return Y.isNull(e) ? 0 : parseFloat(e[1]);
}
var F = { makeSelectable: function(e, t) {
  e === void 0 || e.style === void 0 || (e.onselectstart = t ? function() {
    return false;
  } : function() {
  }, e.style.MozUserSelect = t ? "auto" : "none", e.style.KhtmlUserSelect = t ? "auto" : "none", e.unselectable = t ? "on" : "off");
}, makeFullscreen: function(e, t, n) {
  var i = n, r = t;
  Y.isUndefined(r) && (r = true), Y.isUndefined(i) && (i = true), e.style.position = "absolute", r && (e.style.left = 0, e.style.right = 0), i && (e.style.top = 0, e.style.bottom = 0);
}, fakeEvent: function(e, t, n, i) {
  var r = n || {}, a = uh[t];
  if (!a) throw new Error("Event type " + t + " not supported.");
  var o = document.createEvent(a);
  switch (a) {
    case "MouseEvents": {
      var l = r.x || r.clientX || 0, c = r.y || r.clientY || 0;
      o.initMouseEvent(t, r.bubbles || false, r.cancelable || true, window, r.clickCount || 1, 0, 0, l, c, false, false, false, false, 0, null);
      break;
    }
    case "KeyboardEvents": {
      var h = o.initKeyboardEvent || o.initKeyEvent;
      Y.defaults(r, { cancelable: true, ctrlKey: false, altKey: false, shiftKey: false, metaKey: false, keyCode: void 0, charCode: void 0 }), h(t, r.bubbles || false, r.cancelable, window, r.ctrlKey, r.altKey, r.shiftKey, r.metaKey, r.keyCode, r.charCode);
      break;
    }
    default: {
      o.initEvent(t, r.bubbles || false, r.cancelable || true);
      break;
    }
  }
  Y.defaults(o, i), e.dispatchEvent(o);
}, bind: function(e, t, n, i) {
  var r = i || false;
  return e.addEventListener ? e.addEventListener(t, n, r) : e.attachEvent && e.attachEvent("on" + t, n), F;
}, unbind: function(e, t, n, i) {
  var r = i || false;
  return e.removeEventListener ? e.removeEventListener(t, n, r) : e.detachEvent && e.detachEvent("on" + t, n), F;
}, addClass: function(e, t) {
  if (e.className === void 0) e.className = t;
  else if (e.className !== t) {
    var n = e.className.split(/ +/);
    n.indexOf(t) === -1 && (n.push(t), e.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""));
  }
  return F;
}, removeClass: function(e, t) {
  if (t) if (e.className === t) e.removeAttribute("class");
  else {
    var n = e.className.split(/ +/), i = n.indexOf(t);
    i !== -1 && (n.splice(i, 1), e.className = n.join(" "));
  }
  else e.className = void 0;
  return F;
}, hasClass: function(e, t) {
  return new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || false;
}, getWidth: function(e) {
  var t = getComputedStyle(e);
  return an(t["border-left-width"]) + an(t["border-right-width"]) + an(t["padding-left"]) + an(t["padding-right"]) + an(t.width);
}, getHeight: function(e) {
  var t = getComputedStyle(e);
  return an(t["border-top-width"]) + an(t["border-bottom-width"]) + an(t["padding-top"]) + an(t["padding-bottom"]) + an(t.height);
}, getOffset: function(e) {
  var t = e, n = { left: 0, top: 0 };
  if (t.offsetParent) do
    n.left += t.offsetLeft, n.top += t.offsetTop, t = t.offsetParent;
  while (t);
  return n;
}, isActive: function(e) {
  return e === document.activeElement && (e.type || e.href);
} }, dh = function(s3) {
  Yn(e, s3);
  function e(t, n) {
    sn(this, e);
    var i = qn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), r = i;
    i.__prev = i.getValue(), i.__checkbox = document.createElement("input"), i.__checkbox.setAttribute("type", "checkbox");
    function a() {
      r.setValue(!r.__prev);
    }
    return F.bind(i.__checkbox, "change", a, false), i.domElement.appendChild(i.__checkbox), i.updateDisplay(), i;
  }
  return rn(e, [{ key: "setValue", value: function(n) {
    var i = Xn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, n);
    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), i;
  } }, { key: "updateDisplay", value: function() {
    return this.getValue() === true ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = true, this.__prev = true) : (this.__checkbox.checked = false, this.__prev = false), Xn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this);
  } }]), e;
}(di), Nv = function(s3) {
  Yn(e, s3);
  function e(t, n, i) {
    sn(this, e);
    var r = qn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), a = i, o = r;
    if (r.__select = document.createElement("select"), Y.isArray(a)) {
      var l = {};
      Y.each(a, function(c) {
        l[c] = c;
      }), a = l;
    }
    return Y.each(a, function(c, h) {
      var u = document.createElement("option");
      u.innerHTML = h, u.setAttribute("value", c), o.__select.appendChild(u);
    }), r.updateDisplay(), F.bind(r.__select, "change", function() {
      var c = this.options[this.selectedIndex].value;
      o.setValue(c);
    }), r.domElement.appendChild(r.__select), r;
  }
  return rn(e, [{ key: "setValue", value: function(n) {
    var i = Xn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, n);
    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), i;
  } }, { key: "updateDisplay", value: function() {
    return F.isActive(this.__select) ? this : (this.__select.value = this.getValue(), Xn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this));
  } }]), e;
}(di), Uv = function(s3) {
  Yn(e, s3);
  function e(t, n) {
    sn(this, e);
    var i = qn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), r = i;
    function a() {
      r.setValue(r.__input.value);
    }
    function o() {
      r.__onFinishChange && r.__onFinishChange.call(r, r.getValue());
    }
    return i.__input = document.createElement("input"), i.__input.setAttribute("type", "text"), F.bind(i.__input, "keyup", a), F.bind(i.__input, "change", a), F.bind(i.__input, "blur", o), F.bind(i.__input, "keydown", function(l) {
      l.keyCode === 13 && this.blur();
    }), i.updateDisplay(), i.domElement.appendChild(i.__input), i;
  }
  return rn(e, [{ key: "updateDisplay", value: function() {
    return F.isActive(this.__input) || (this.__input.value = this.getValue()), Xn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this);
  } }]), e;
}(di);
function pc(s3) {
  var e = s3.toString();
  return e.indexOf(".") > -1 ? e.length - e.indexOf(".") - 1 : 0;
}
var fh = function(s3) {
  Yn(e, s3);
  function e(t, n, i) {
    sn(this, e);
    var r = qn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), a = i || {};
    return r.__min = a.min, r.__max = a.max, r.__step = a.step, Y.isUndefined(r.__step) ? r.initialValue === 0 ? r.__impliedStep = 1 : r.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(r.initialValue)) / Math.LN10)) / 10 : r.__impliedStep = r.__step, r.__precision = pc(r.__impliedStep), r;
  }
  return rn(e, [{ key: "setValue", value: function(n) {
    var i = n;
    return this.__min !== void 0 && i < this.__min ? i = this.__min : this.__max !== void 0 && i > this.__max && (i = this.__max), this.__step !== void 0 && i % this.__step !== 0 && (i = Math.round(i / this.__step) * this.__step), Xn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, i);
  } }, { key: "min", value: function(n) {
    return this.__min = n, this;
  } }, { key: "max", value: function(n) {
    return this.__max = n, this;
  } }, { key: "step", value: function(n) {
    return this.__step = n, this.__impliedStep = n, this.__precision = pc(n), this;
  } }]), e;
}(di);
function Ov(s3, e) {
  var t = Math.pow(10, e);
  return Math.round(s3 * t) / t;
}
var Mr = function(s3) {
  Yn(e, s3);
  function e(t, n, i) {
    sn(this, e);
    var r = qn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n, i));
    r.__truncationSuspended = false;
    var a = r, o = void 0;
    function l() {
      var _ = parseFloat(a.__input.value);
      Y.isNaN(_) || a.setValue(_);
    }
    function c() {
      a.__onFinishChange && a.__onFinishChange.call(a, a.getValue());
    }
    function h() {
      c();
    }
    function u(_) {
      var g = o - _.clientY;
      a.setValue(a.getValue() + g * a.__impliedStep), o = _.clientY;
    }
    function d() {
      F.unbind(window, "mousemove", u), F.unbind(window, "mouseup", d), c();
    }
    function p(_) {
      F.bind(window, "mousemove", u), F.bind(window, "mouseup", d), o = _.clientY;
    }
    return r.__input = document.createElement("input"), r.__input.setAttribute("type", "text"), F.bind(r.__input, "change", l), F.bind(r.__input, "blur", h), F.bind(r.__input, "mousedown", p), F.bind(r.__input, "keydown", function(_) {
      _.keyCode === 13 && (a.__truncationSuspended = true, this.blur(), a.__truncationSuspended = false, c());
    }), r.updateDisplay(), r.domElement.appendChild(r.__input), r;
  }
  return rn(e, [{ key: "updateDisplay", value: function() {
    return this.__input.value = this.__truncationSuspended ? this.getValue() : Ov(this.getValue(), this.__precision), Xn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this);
  } }]), e;
}(fh);
function mc(s3, e, t, n, i) {
  return n + (i - n) * ((s3 - e) / (t - e));
}
var io = function(s3) {
  Yn(e, s3);
  function e(t, n, i, r, a) {
    sn(this, e);
    var o = qn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n, { min: i, max: r, step: a })), l = o;
    o.__background = document.createElement("div"), o.__foreground = document.createElement("div"), F.bind(o.__background, "mousedown", c), F.bind(o.__background, "touchstart", d), F.addClass(o.__background, "slider"), F.addClass(o.__foreground, "slider-fg");
    function c(g) {
      document.activeElement.blur(), F.bind(window, "mousemove", h), F.bind(window, "mouseup", u), h(g);
    }
    function h(g) {
      g.preventDefault();
      var m = l.__background.getBoundingClientRect();
      return l.setValue(mc(g.clientX, m.left, m.right, l.__min, l.__max)), false;
    }
    function u() {
      F.unbind(window, "mousemove", h), F.unbind(window, "mouseup", u), l.__onFinishChange && l.__onFinishChange.call(l, l.getValue());
    }
    function d(g) {
      g.touches.length === 1 && (F.bind(window, "touchmove", p), F.bind(window, "touchend", _), p(g));
    }
    function p(g) {
      var m = g.touches[0].clientX, f = l.__background.getBoundingClientRect();
      l.setValue(mc(m, f.left, f.right, l.__min, l.__max));
    }
    function _() {
      F.unbind(window, "touchmove", p), F.unbind(window, "touchend", _), l.__onFinishChange && l.__onFinishChange.call(l, l.getValue());
    }
    return o.updateDisplay(), o.__background.appendChild(o.__foreground), o.domElement.appendChild(o.__background), o;
  }
  return rn(e, [{ key: "updateDisplay", value: function() {
    var n = (this.getValue() - this.__min) / (this.__max - this.__min);
    return this.__foreground.style.width = n * 100 + "%", Xn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this);
  } }]), e;
}(fh), ph = function(s3) {
  Yn(e, s3);
  function e(t, n, i) {
    sn(this, e);
    var r = qn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), a = r;
    return r.__button = document.createElement("div"), r.__button.innerHTML = i === void 0 ? "Fire" : i, F.bind(r.__button, "click", function(o) {
      return o.preventDefault(), a.fire(), false;
    }), F.addClass(r.__button, "button"), r.domElement.appendChild(r.__button), r;
  }
  return rn(e, [{ key: "fire", value: function() {
    this.__onChange && this.__onChange.call(this), this.getValue().call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue());
  } }]), e;
}(di), so = function(s3) {
  Yn(e, s3);
  function e(t, n) {
    sn(this, e);
    var i = qn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
    i.__color = new yt(i.getValue()), i.__temp = new yt(0);
    var r = i;
    i.domElement = document.createElement("div"), F.makeSelectable(i.domElement, false), i.__selector = document.createElement("div"), i.__selector.className = "selector", i.__saturation_field = document.createElement("div"), i.__saturation_field.className = "saturation-field", i.__field_knob = document.createElement("div"), i.__field_knob.className = "field-knob", i.__field_knob_border = "2px solid ", i.__hue_knob = document.createElement("div"), i.__hue_knob.className = "hue-knob", i.__hue_field = document.createElement("div"), i.__hue_field.className = "hue-field", i.__input = document.createElement("input"), i.__input.type = "text", i.__input_textShadow = "0 1px 1px ", F.bind(i.__input, "keydown", function(g) {
      g.keyCode === 13 && u.call(this);
    }), F.bind(i.__input, "blur", u), F.bind(i.__selector, "mousedown", function() {
      F.addClass(this, "drag").bind(window, "mouseup", function() {
        F.removeClass(r.__selector, "drag");
      });
    }), F.bind(i.__selector, "touchstart", function() {
      F.addClass(this, "drag").bind(window, "touchend", function() {
        F.removeClass(r.__selector, "drag");
      });
    });
    var a = document.createElement("div");
    Y.extend(i.__selector.style, { width: "122px", height: "102px", padding: "3px", backgroundColor: "#222", boxShadow: "0px 1px 3px rgba(0,0,0,0.3)" }), Y.extend(i.__field_knob.style, { position: "absolute", width: "12px", height: "12px", border: i.__field_knob_border + (i.__color.v < 0.5 ? "#fff" : "#000"), boxShadow: "0px 1px 3px rgba(0,0,0,0.5)", borderRadius: "12px", zIndex: 1 }), Y.extend(i.__hue_knob.style, { position: "absolute", width: "15px", height: "2px", borderRight: "4px solid #fff", zIndex: 1 }), Y.extend(i.__saturation_field.style, { width: "100px", height: "100px", border: "1px solid #555", marginRight: "3px", display: "inline-block", cursor: "pointer" }), Y.extend(a.style, { width: "100%", height: "100%", background: "none" }), _c(a, "top", "rgba(0,0,0,0)", "#000"), Y.extend(i.__hue_field.style, { width: "15px", height: "100px", border: "1px solid #555", cursor: "ns-resize", position: "absolute", top: "3px", right: "3px" }), Bv(i.__hue_field), Y.extend(i.__input.style, { outline: "none", textAlign: "center", color: "#fff", border: 0, fontWeight: "bold", textShadow: i.__input_textShadow + "rgba(0,0,0,0.7)" }), F.bind(i.__saturation_field, "mousedown", o), F.bind(i.__saturation_field, "touchstart", o), F.bind(i.__field_knob, "mousedown", o), F.bind(i.__field_knob, "touchstart", o), F.bind(i.__hue_field, "mousedown", l), F.bind(i.__hue_field, "touchstart", l);
    function o(g) {
      p(g), F.bind(window, "mousemove", p), F.bind(window, "touchmove", p), F.bind(window, "mouseup", c), F.bind(window, "touchend", c);
    }
    function l(g) {
      _(g), F.bind(window, "mousemove", _), F.bind(window, "touchmove", _), F.bind(window, "mouseup", h), F.bind(window, "touchend", h);
    }
    function c() {
      F.unbind(window, "mousemove", p), F.unbind(window, "touchmove", p), F.unbind(window, "mouseup", c), F.unbind(window, "touchend", c), d();
    }
    function h() {
      F.unbind(window, "mousemove", _), F.unbind(window, "touchmove", _), F.unbind(window, "mouseup", h), F.unbind(window, "touchend", h), d();
    }
    function u() {
      var g = no(this.value);
      g !== false ? (r.__color.__state = g, r.setValue(r.__color.toOriginal())) : this.value = r.__color.toString();
    }
    function d() {
      r.__onFinishChange && r.__onFinishChange.call(r, r.__color.toOriginal());
    }
    i.__saturation_field.appendChild(a), i.__selector.appendChild(i.__field_knob), i.__selector.appendChild(i.__saturation_field), i.__selector.appendChild(i.__hue_field), i.__hue_field.appendChild(i.__hue_knob), i.domElement.appendChild(i.__input), i.domElement.appendChild(i.__selector), i.updateDisplay();
    function p(g) {
      g.type.indexOf("touch") === -1 && g.preventDefault();
      var m = r.__saturation_field.getBoundingClientRect(), f = g.touches && g.touches[0] || g, T = f.clientX, b = f.clientY, M = (T - m.left) / (m.right - m.left), L = 1 - (b - m.top) / (m.bottom - m.top);
      return L > 1 ? L = 1 : L < 0 && (L = 0), M > 1 ? M = 1 : M < 0 && (M = 0), r.__color.v = L, r.__color.s = M, r.setValue(r.__color.toOriginal()), false;
    }
    function _(g) {
      g.type.indexOf("touch") === -1 && g.preventDefault();
      var m = r.__hue_field.getBoundingClientRect(), f = g.touches && g.touches[0] || g, T = f.clientY, b = 1 - (T - m.top) / (m.bottom - m.top);
      return b > 1 ? b = 1 : b < 0 && (b = 0), r.__color.h = b * 360, r.setValue(r.__color.toOriginal()), false;
    }
    return i;
  }
  return rn(e, [{ key: "updateDisplay", value: function() {
    var n = no(this.getValue());
    if (n !== false) {
      var i = false;
      Y.each(yt.COMPONENTS, function(o) {
        if (!Y.isUndefined(n[o]) && !Y.isUndefined(this.__color.__state[o]) && n[o] !== this.__color.__state[o]) return i = true, {};
      }, this), i && Y.extend(this.__color.__state, n);
    }
    Y.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
    var r = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0, a = 255 - r;
    Y.extend(this.__field_knob.style, { marginLeft: 100 * this.__color.s - 7 + "px", marginTop: 100 * (1 - this.__color.v) - 7 + "px", backgroundColor: this.__temp.toHexString(), border: this.__field_knob_border + "rgb(" + r + "," + r + "," + r + ")" }), this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + "px", this.__temp.s = 1, this.__temp.v = 1, _c(this.__saturation_field, "left", "#fff", this.__temp.toHexString()), this.__input.value = this.__color.toString(), Y.extend(this.__input.style, { backgroundColor: this.__color.toHexString(), color: "rgb(" + r + "," + r + "," + r + ")", textShadow: this.__input_textShadow + "rgba(" + a + "," + a + "," + a + ",.7)" });
  } }]), e;
}(di), Fv = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
function _c(s3, e, t, n) {
  s3.style.background = "", Y.each(Fv, function(i) {
    s3.style.cssText += "background: " + i + "linear-gradient(" + e + ", " + t + " 0%, " + n + " 100%); ";
  });
}
function Bv(s3) {
  s3.style.background = "", s3.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", s3.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", s3.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", s3.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", s3.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
}
var kv = { load: function(e, t) {
  var n = t || document, i = n.createElement("link");
  i.type = "text/css", i.rel = "stylesheet", i.href = e, n.getElementsByTagName("head")[0].appendChild(i);
}, inject: function(e, t) {
  var n = t || document, i = document.createElement("style");
  i.type = "text/css", i.innerHTML = e;
  var r = n.getElementsByTagName("head")[0];
  try {
    r.appendChild(i);
  } catch {
  }
} }, zv = `<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`, Hv = function(e, t) {
  var n = e[t];
  return Y.isArray(arguments[2]) || Y.isObject(arguments[2]) ? new Nv(e, t, arguments[2]) : Y.isNumber(n) ? Y.isNumber(arguments[2]) && Y.isNumber(arguments[3]) ? Y.isNumber(arguments[4]) ? new io(e, t, arguments[2], arguments[3], arguments[4]) : new io(e, t, arguments[2], arguments[3]) : Y.isNumber(arguments[4]) ? new Mr(e, t, { min: arguments[2], max: arguments[3], step: arguments[4] }) : new Mr(e, t, { min: arguments[2], max: arguments[3] }) : Y.isString(n) ? new Uv(e, t) : Y.isFunction(n) ? new ph(e, t, "") : Y.isBoolean(n) ? new dh(e, t) : null;
};
function Vv(s3) {
  setTimeout(s3, 1e3 / 60);
}
var Gv = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || Vv, Wv = function() {
  function s3() {
    sn(this, s3), this.backgroundElement = document.createElement("div"), Y.extend(this.backgroundElement.style, { backgroundColor: "rgba(0,0,0,0.8)", top: 0, left: 0, display: "none", zIndex: "1000", opacity: 0, WebkitTransition: "opacity 0.2s linear", transition: "opacity 0.2s linear" }), F.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), Y.extend(this.domElement.style, { position: "fixed", display: "none", zIndex: "1001", opacity: 0, WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear", transition: "transform 0.2s ease-out, opacity 0.2s linear" }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
    var e = this;
    F.bind(this.backgroundElement, "click", function() {
      e.hide();
    });
  }
  return rn(s3, [{ key: "show", value: function() {
    var t = this;
    this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), Y.defer(function() {
      t.backgroundElement.style.opacity = 1, t.domElement.style.opacity = 1, t.domElement.style.webkitTransform = "scale(1)";
    });
  } }, { key: "hide", value: function() {
    var t = this, n = function i() {
      t.domElement.style.display = "none", t.backgroundElement.style.display = "none", F.unbind(t.domElement, "webkitTransitionEnd", i), F.unbind(t.domElement, "transitionend", i), F.unbind(t.domElement, "oTransitionEnd", i);
    };
    F.bind(this.domElement, "webkitTransitionEnd", n), F.bind(this.domElement, "transitionend", n), F.bind(this.domElement, "oTransitionEnd", n), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)";
  } }, { key: "layout", value: function() {
    this.domElement.style.left = window.innerWidth / 2 - F.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - F.getHeight(this.domElement) / 2 + "px";
  } }]), s3;
}(), Xv = Cv(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);
kv.inject(Xv);
var gc = "dg", vc = 72, xc = 20, As = "Default", ms = function() {
  try {
    return !!window.localStorage;
  } catch {
    return false;
  }
}(), ys = void 0, yc = true, Ci = void 0, ua = false, mh = [], rt = function s2(e) {
  var t = this, n = e || {};
  this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), F.addClass(this.domElement, gc), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], n = Y.defaults(n, { closeOnTop: false, autoPlace: true, width: s2.DEFAULT_WIDTH }), n = Y.defaults(n, { resizable: n.autoPlace, hideable: n.autoPlace }), Y.isUndefined(n.load) ? n.load = { preset: As } : n.preset && (n.load.preset = n.preset), Y.isUndefined(n.parent) && n.hideable && mh.push(this), n.resizable = Y.isUndefined(n.parent) && n.resizable, n.autoPlace && Y.isUndefined(n.scrollable) && (n.scrollable = true);
  var i = ms && localStorage.getItem(Pi(this, "isLocal")) === "true", r = void 0, a = void 0;
  if (Object.defineProperties(this, { parent: { get: function() {
    return n.parent;
  } }, scrollable: { get: function() {
    return n.scrollable;
  } }, autoPlace: { get: function() {
    return n.autoPlace;
  } }, closeOnTop: { get: function() {
    return n.closeOnTop;
  } }, preset: { get: function() {
    return t.parent ? t.getRoot().preset : n.load.preset;
  }, set: function(d) {
    t.parent ? t.getRoot().preset = d : n.load.preset = d, Kv(this), t.revert();
  } }, width: { get: function() {
    return n.width;
  }, set: function(d) {
    n.width = d, oo(t, d);
  } }, name: { get: function() {
    return n.name;
  }, set: function(d) {
    n.name = d, a && (a.innerHTML = n.name);
  } }, closed: { get: function() {
    return n.closed;
  }, set: function(d) {
    n.closed = d, n.closed ? F.addClass(t.__ul, s2.CLASS_CLOSED) : F.removeClass(t.__ul, s2.CLASS_CLOSED), this.onResize(), t.__closeButton && (t.__closeButton.innerHTML = d ? s2.TEXT_OPEN : s2.TEXT_CLOSED);
  } }, load: { get: function() {
    return n.load;
  } }, useLocalStorage: { get: function() {
    return i;
  }, set: function(d) {
    ms && (i = d, d ? F.bind(window, "unload", r) : F.unbind(window, "unload", r), localStorage.setItem(Pi(t, "isLocal"), d));
  } } }), Y.isUndefined(n.parent)) {
    if (this.closed = n.closed || false, F.addClass(this.domElement, s2.CLASS_MAIN), F.makeSelectable(this.domElement, false), ms && i) {
      t.useLocalStorage = true;
      var o = localStorage.getItem(Pi(this, "gui"));
      o && (n.load = JSON.parse(o));
    }
    this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = s2.TEXT_CLOSED, F.addClass(this.__closeButton, s2.CLASS_CLOSE_BUTTON), n.closeOnTop ? (F.addClass(this.__closeButton, s2.CLASS_CLOSE_TOP), this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0])) : (F.addClass(this.__closeButton, s2.CLASS_CLOSE_BOTTOM), this.domElement.appendChild(this.__closeButton)), F.bind(this.__closeButton, "click", function() {
      t.closed = !t.closed;
    });
  } else {
    n.closed === void 0 && (n.closed = true);
    var l = document.createTextNode(n.name);
    F.addClass(l, "controller-name"), a = Io(t, l);
    var c = function(d) {
      return d.preventDefault(), t.closed = !t.closed, false;
    };
    F.addClass(this.__ul, s2.CLASS_CLOSED), F.addClass(a, "title"), F.bind(a, "click", c), n.closed || (this.closed = false);
  }
  n.autoPlace && (Y.isUndefined(n.parent) && (yc && (Ci = document.createElement("div"), F.addClass(Ci, gc), F.addClass(Ci, s2.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(Ci), yc = false), Ci.appendChild(this.domElement), F.addClass(this.domElement, s2.CLASS_AUTO_PLACE)), this.parent || oo(t, n.width)), this.__resizeHandler = function() {
    t.onResizeDebounced();
  }, F.bind(window, "resize", this.__resizeHandler), F.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler), F.bind(this.__ul, "transitionend", this.__resizeHandler), F.bind(this.__ul, "oTransitionEnd", this.__resizeHandler), this.onResize(), n.resizable && jv(this), r = function() {
    ms && localStorage.getItem(Pi(t, "isLocal")) === "true" && localStorage.setItem(Pi(t, "gui"), JSON.stringify(t.getSaveObject()));
  }, this.saveToLocalStorageIfPossible = r;
  function h() {
    var u = t.getRoot();
    u.width += 1, Y.defer(function() {
      u.width -= 1;
    });
  }
  n.parent || h();
};
rt.toggleHide = function() {
  ua = !ua, Y.each(mh, function(s3) {
    s3.domElement.style.display = ua ? "none" : "";
  });
};
rt.CLASS_AUTO_PLACE = "a";
rt.CLASS_AUTO_PLACE_CONTAINER = "ac";
rt.CLASS_MAIN = "main";
rt.CLASS_CONTROLLER_ROW = "cr";
rt.CLASS_TOO_TALL = "taller-than-window";
rt.CLASS_CLOSED = "closed";
rt.CLASS_CLOSE_BUTTON = "close-button";
rt.CLASS_CLOSE_TOP = "close-top";
rt.CLASS_CLOSE_BOTTOM = "close-bottom";
rt.CLASS_DRAG = "drag";
rt.DEFAULT_WIDTH = 245;
rt.TEXT_CLOSED = "Close Controls";
rt.TEXT_OPEN = "Open Controls";
rt._keydownHandler = function(s3) {
  document.activeElement.type !== "text" && (s3.which === vc || s3.keyCode === vc) && rt.toggleHide();
};
F.bind(window, "keydown", rt._keydownHandler, false);
Y.extend(rt.prototype, { add: function(e, t) {
  return Ms(this, e, t, { factoryArgs: Array.prototype.slice.call(arguments, 2) });
}, addColor: function(e, t) {
  return Ms(this, e, t, { color: true });
}, remove: function(e) {
  this.__ul.removeChild(e.__li), this.__controllers.splice(this.__controllers.indexOf(e), 1);
  var t = this;
  Y.defer(function() {
    t.onResize();
  });
}, destroy: function() {
  if (this.parent) throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");
  this.autoPlace && Ci.removeChild(this.domElement);
  var e = this;
  Y.each(this.__folders, function(t) {
    e.removeFolder(t);
  }), F.unbind(window, "keydown", rt._keydownHandler, false), Mc(this);
}, addFolder: function(e) {
  if (this.__folders[e] !== void 0) throw new Error('You already have a folder in this GUI by the name "' + e + '"');
  var t = { name: e, parent: this };
  t.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed, t.load = this.load.folders[e]);
  var n = new rt(t);
  this.__folders[e] = n;
  var i = Io(this, n.domElement);
  return F.addClass(i, "folder"), n;
}, removeFolder: function(e) {
  this.__ul.removeChild(e.domElement.parentElement), delete this.__folders[e.name], this.load && this.load.folders && this.load.folders[e.name] && delete this.load.folders[e.name], Mc(e);
  var t = this;
  Y.each(e.__folders, function(n) {
    e.removeFolder(n);
  }), Y.defer(function() {
    t.onResize();
  });
}, open: function() {
  this.closed = false;
}, close: function() {
  this.closed = true;
}, hide: function() {
  this.domElement.style.display = "none";
}, show: function() {
  this.domElement.style.display = "";
}, onResize: function() {
  var e = this.getRoot();
  if (e.scrollable) {
    var t = F.getOffset(e.__ul).top, n = 0;
    Y.each(e.__ul.childNodes, function(i) {
      e.autoPlace && i === e.__save_row || (n += F.getHeight(i));
    }), window.innerHeight - t - xc < n ? (F.addClass(e.domElement, rt.CLASS_TOO_TALL), e.__ul.style.height = window.innerHeight - t - xc + "px") : (F.removeClass(e.domElement, rt.CLASS_TOO_TALL), e.__ul.style.height = "auto");
  }
  e.__resize_handle && Y.defer(function() {
    e.__resize_handle.style.height = e.__ul.offsetHeight + "px";
  }), e.__closeButton && (e.__closeButton.style.width = e.width + "px");
}, onResizeDebounced: Y.debounce(function() {
  this.onResize();
}, 50), remember: function() {
  if (Y.isUndefined(ys) && (ys = new Wv(), ys.domElement.innerHTML = zv), this.parent) throw new Error("You can only call remember on a top level GUI.");
  var e = this;
  Y.each(Array.prototype.slice.call(arguments), function(t) {
    e.__rememberedObjects.length === 0 && qv(e), e.__rememberedObjects.indexOf(t) === -1 && e.__rememberedObjects.push(t);
  }), this.autoPlace && oo(this, this.width);
}, getRoot: function() {
  for (var e = this; e.parent; ) e = e.parent;
  return e;
}, getSaveObject: function() {
  var e = this.load;
  return e.closed = this.closed, this.__rememberedObjects.length > 0 && (e.preset = this.preset, e.remembered || (e.remembered = {}), e.remembered[this.preset] = or(this)), e.folders = {}, Y.each(this.__folders, function(t, n) {
    e.folders[n] = t.getSaveObject();
  }), e;
}, save: function() {
  this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = or(this), ro(this, false), this.saveToLocalStorageIfPossible();
}, saveAs: function(e) {
  this.load.remembered || (this.load.remembered = {}, this.load.remembered[As] = or(this, true)), this.load.remembered[e] = or(this), this.preset = e, ao(this, e, true), this.saveToLocalStorageIfPossible();
}, revert: function(e) {
  Y.each(this.__controllers, function(t) {
    this.getRoot().load.remembered ? _h(e || this.getRoot(), t) : t.setValue(t.initialValue), t.__onFinishChange && t.__onFinishChange.call(t, t.getValue());
  }, this), Y.each(this.__folders, function(t) {
    t.revert(t);
  }), e || ro(this.getRoot(), false);
}, listen: function(e) {
  var t = this.__listening.length === 0;
  this.__listening.push(e), t && gh(this.__listening);
}, updateDisplay: function() {
  Y.each(this.__controllers, function(e) {
    e.updateDisplay();
  }), Y.each(this.__folders, function(e) {
    e.updateDisplay();
  });
} });
function Io(s3, e, t) {
  var n = document.createElement("li");
  return e && n.appendChild(e), t ? s3.__ul.insertBefore(n, t) : s3.__ul.appendChild(n), s3.onResize(), n;
}
function Mc(s3) {
  F.unbind(window, "resize", s3.__resizeHandler), s3.saveToLocalStorageIfPossible && F.unbind(window, "unload", s3.saveToLocalStorageIfPossible);
}
function ro(s3, e) {
  var t = s3.__preset_select[s3.__preset_select.selectedIndex];
  e ? t.innerHTML = t.value + "*" : t.innerHTML = t.value;
}
function Yv(s3, e, t) {
  if (t.__li = e, t.__gui = s3, Y.extend(t, { options: function(a) {
    if (arguments.length > 1) {
      var o = t.__li.nextElementSibling;
      return t.remove(), Ms(s3, t.object, t.property, { before: o, factoryArgs: [Y.toArray(arguments)] });
    }
    if (Y.isArray(a) || Y.isObject(a)) {
      var l = t.__li.nextElementSibling;
      return t.remove(), Ms(s3, t.object, t.property, { before: l, factoryArgs: [a] });
    }
  }, name: function(a) {
    return t.__li.firstElementChild.firstElementChild.innerHTML = a, t;
  }, listen: function() {
    return t.__gui.listen(t), t;
  }, remove: function() {
    return t.__gui.remove(t), t;
  } }), t instanceof io) {
    var n = new Mr(t.object, t.property, { min: t.__min, max: t.__max, step: t.__step });
    Y.each(["updateDisplay", "onChange", "onFinishChange", "step", "min", "max"], function(r) {
      var a = t[r], o = n[r];
      t[r] = n[r] = function() {
        var l = Array.prototype.slice.call(arguments);
        return o.apply(n, l), a.apply(t, l);
      };
    }), F.addClass(e, "has-slider"), t.domElement.insertBefore(n.domElement, t.domElement.firstElementChild);
  } else if (t instanceof Mr) {
    var i = function(a) {
      if (Y.isNumber(t.__min) && Y.isNumber(t.__max)) {
        var o = t.__li.firstElementChild.firstElementChild.innerHTML, l = t.__gui.__listening.indexOf(t) > -1;
        t.remove();
        var c = Ms(s3, t.object, t.property, { before: t.__li.nextElementSibling, factoryArgs: [t.__min, t.__max, t.__step] });
        return c.name(o), l && c.listen(), c;
      }
      return a;
    };
    t.min = Y.compose(i, t.min), t.max = Y.compose(i, t.max);
  } else t instanceof dh ? (F.bind(e, "click", function() {
    F.fakeEvent(t.__checkbox, "click");
  }), F.bind(t.__checkbox, "click", function(r) {
    r.stopPropagation();
  })) : t instanceof ph ? (F.bind(e, "click", function() {
    F.fakeEvent(t.__button, "click");
  }), F.bind(e, "mouseover", function() {
    F.addClass(t.__button, "hover");
  }), F.bind(e, "mouseout", function() {
    F.removeClass(t.__button, "hover");
  })) : t instanceof so && (F.addClass(e, "color"), t.updateDisplay = Y.compose(function(r) {
    return e.style.borderLeftColor = t.__color.toString(), r;
  }, t.updateDisplay), t.updateDisplay());
  t.setValue = Y.compose(function(r) {
    return s3.getRoot().__preset_select && t.isModified() && ro(s3.getRoot(), true), r;
  }, t.setValue);
}
function _h(s3, e) {
  var t = s3.getRoot(), n = t.__rememberedObjects.indexOf(e.object);
  if (n !== -1) {
    var i = t.__rememberedObjectIndecesToControllers[n];
    if (i === void 0 && (i = {}, t.__rememberedObjectIndecesToControllers[n] = i), i[e.property] = e, t.load && t.load.remembered) {
      var r = t.load.remembered, a = void 0;
      if (r[s3.preset]) a = r[s3.preset];
      else if (r[As]) a = r[As];
      else return;
      if (a[n] && a[n][e.property] !== void 0) {
        var o = a[n][e.property];
        e.initialValue = o, e.setValue(o);
      }
    }
  }
}
function Ms(s3, e, t, n) {
  if (e[t] === void 0) throw new Error('Object "' + e + '" has no property "' + t + '"');
  var i = void 0;
  if (n.color) i = new so(e, t);
  else {
    var r = [e, t].concat(n.factoryArgs);
    i = Hv.apply(s3, r);
  }
  n.before instanceof di && (n.before = n.before.__li), _h(s3, i), F.addClass(i.domElement, "c");
  var a = document.createElement("span");
  F.addClass(a, "property-name"), a.innerHTML = i.property;
  var o = document.createElement("div");
  o.appendChild(a), o.appendChild(i.domElement);
  var l = Io(s3, o, n.before);
  return F.addClass(l, rt.CLASS_CONTROLLER_ROW), i instanceof so ? F.addClass(l, "color") : F.addClass(l, Lv(i.getValue())), Yv(s3, l, i), s3.__controllers.push(i), i;
}
function Pi(s3, e) {
  return document.location.href + "." + e;
}
function ao(s3, e, t) {
  var n = document.createElement("option");
  n.innerHTML = e, n.value = e, s3.__preset_select.appendChild(n), t && (s3.__preset_select.selectedIndex = s3.__preset_select.length - 1);
}
function Sc(s3, e) {
  e.style.display = s3.useLocalStorage ? "block" : "none";
}
function qv(s3) {
  var e = s3.__save_row = document.createElement("li");
  F.addClass(s3.domElement, "has-save"), s3.__ul.insertBefore(e, s3.__ul.firstChild), F.addClass(e, "save-row");
  var t = document.createElement("span");
  t.innerHTML = "&nbsp;", F.addClass(t, "button gears");
  var n = document.createElement("span");
  n.innerHTML = "Save", F.addClass(n, "button"), F.addClass(n, "save");
  var i = document.createElement("span");
  i.innerHTML = "New", F.addClass(i, "button"), F.addClass(i, "save-as");
  var r = document.createElement("span");
  r.innerHTML = "Revert", F.addClass(r, "button"), F.addClass(r, "revert");
  var a = s3.__preset_select = document.createElement("select");
  if (s3.load && s3.load.remembered ? Y.each(s3.load.remembered, function(u, d) {
    ao(s3, d, d === s3.preset);
  }) : ao(s3, As, false), F.bind(a, "change", function() {
    for (var u = 0; u < s3.__preset_select.length; u++) s3.__preset_select[u].innerHTML = s3.__preset_select[u].value;
    s3.preset = this.value;
  }), e.appendChild(a), e.appendChild(t), e.appendChild(n), e.appendChild(i), e.appendChild(r), ms) {
    var o = document.getElementById("dg-local-explain"), l = document.getElementById("dg-local-storage"), c = document.getElementById("dg-save-locally");
    c.style.display = "block", localStorage.getItem(Pi(s3, "isLocal")) === "true" && l.setAttribute("checked", "checked"), Sc(s3, o), F.bind(l, "change", function() {
      s3.useLocalStorage = !s3.useLocalStorage, Sc(s3, o);
    });
  }
  var h = document.getElementById("dg-new-constructor");
  F.bind(h, "keydown", function(u) {
    u.metaKey && (u.which === 67 || u.keyCode === 67) && ys.hide();
  }), F.bind(t, "click", function() {
    h.innerHTML = JSON.stringify(s3.getSaveObject(), void 0, 2), ys.show(), h.focus(), h.select();
  }), F.bind(n, "click", function() {
    s3.save();
  }), F.bind(i, "click", function() {
    var u = prompt("Enter a new preset name.");
    u && s3.saveAs(u);
  }), F.bind(r, "click", function() {
    s3.revert();
  });
}
function jv(s3) {
  var e = void 0;
  s3.__resize_handle = document.createElement("div"), Y.extend(s3.__resize_handle.style, { width: "6px", marginLeft: "-3px", height: "200px", cursor: "ew-resize", position: "absolute" });
  function t(r) {
    return r.preventDefault(), s3.width += e - r.clientX, s3.onResize(), e = r.clientX, false;
  }
  function n() {
    F.removeClass(s3.__closeButton, rt.CLASS_DRAG), F.unbind(window, "mousemove", t), F.unbind(window, "mouseup", n);
  }
  function i(r) {
    return r.preventDefault(), e = r.clientX, F.addClass(s3.__closeButton, rt.CLASS_DRAG), F.bind(window, "mousemove", t), F.bind(window, "mouseup", n), false;
  }
  F.bind(s3.__resize_handle, "mousedown", i), F.bind(s3.__closeButton, "mousedown", i), s3.domElement.insertBefore(s3.__resize_handle, s3.domElement.firstElementChild);
}
function oo(s3, e) {
  s3.domElement.style.width = e + "px", s3.__save_row && s3.autoPlace && (s3.__save_row.style.width = e + "px"), s3.__closeButton && (s3.__closeButton.style.width = e + "px");
}
function or(s3, e) {
  var t = {};
  return Y.each(s3.__rememberedObjects, function(n, i) {
    var r = {}, a = s3.__rememberedObjectIndecesToControllers[i];
    Y.each(a, function(o, l) {
      r[l] = e ? o.initialValue : o.getValue();
    }), t[i] = r;
  }), t;
}
function Kv(s3) {
  for (var e = 0; e < s3.__preset_select.length; e++) s3.__preset_select[e].value === s3.preset && (s3.__preset_select.selectedIndex = e);
}
function gh(s3) {
  s3.length !== 0 && Gv.call(window, function() {
    gh(s3);
  }), Y.each(s3, function(e) {
    e.updateDisplay();
  });
}
var $v = rt;
function Zv(s3) {
  const e = document.getElementById(s3);
  if (!e) throw new Error(`Element with id '${s3}' not found`);
  return e;
}
class Jv {
  constructor() {
    __publicField(this, "scene");
    __publicField(this, "camera");
    __publicField(this, "renderer");
    __publicField(this, "controls");
    __publicField(this, "stats");
    __publicField(this, "gui");
    __publicField(this, "cube");
    __publicField(this, "cubeFolder");
    __publicField(this, "loaderElement");
    this.scene = new id(), this.scene.background = new Le(15790320), this.camera = new Ct(75, window.innerWidth / window.innerHeight, 0.1, 1e3), this.camera.position.z = 1.5, this.renderer = new Ig({ antialias: true }), this.renderer.setSize(window.innerWidth, window.innerHeight), document.body.appendChild(this.renderer.domElement);
    try {
      this.loaderElement = Zv("loader");
    } catch {
      this.loaderElement = document.createElement("div"), this.loaderElement.id = "loader", this.loaderElement.style.position = "absolute", this.loaderElement.style.top = "50%", this.loaderElement.style.left = "50%", this.loaderElement.style.transform = "translate(-50%, -50%)", this.loaderElement.style.color = "white", this.loaderElement.style.backgroundColor = "rgba(0, 0, 0, 0.7)", this.loaderElement.style.padding = "20px", this.loaderElement.style.borderRadius = "10px", this.loaderElement.style.display = "none", this.loaderElement.textContent = "\uBAA8\uB378 \uB85C\uB529 \uC911...", document.body.appendChild(this.loaderElement);
    }
    window.addEventListener("resize", this.onWindowResize.bind(this)), this.controls = new Ug(this.camera, this.renderer.domElement), this.controls.enableDamping = true, this.controls.dampingFactor = 0.25, this.stats = new xs(), document.body.appendChild(this.stats.dom), this.gui = new $v();
    const e = new $i(), t = new md({ wireframe: true });
    this.cube = new Ut(e, t), this.scene.add(this.cube), this.cubeFolder = this.gui.addFolder("\uC784\uC2DC \uD050\uBE0C"), this.cubeFolder.add(this.cube.rotation, "x", 0, Math.PI * 2), this.cubeFolder.add(this.cube.rotation, "y", 0, Math.PI * 2), this.cubeFolder.add(this.cube.rotation, "z", 0, Math.PI * 2), this.cubeFolder.open();
    const n = this.gui.addFolder("\uCE74\uBA54\uB77C");
    n.add(this.camera.position, "z", 0, 20), n.open();
    const i = new Fd(16777215, 0.5);
    this.scene.add(i);
    const r = new nh(16777215, 0.8);
    r.position.set(1, 1, 1), this.scene.add(r), window.addEventListener("message", this.handleMessage.bind(this));
    const o = new URLSearchParams(window.location.search).get("modelUrl");
    o && this.loadModel(o), this.animate();
  }
  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight, this.camera.updateProjectionMatrix(), this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
  handleMessage(e) {
    e.data && "modelUrl" in e.data && e.data.modelUrl && this.loadModel(e.data.modelUrl);
  }
  loadModel(e) {
    var _a2;
    if (!e) {
      console.warn("\uBAA8\uB378 URL\uC774 \uC81C\uACF5\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.");
      return;
    }
    this.loaderElement.style.display = "block";
    const t = ((_a2 = e.split(".").pop()) == null ? void 0 : _a2.toLowerCase()) || "";
    t === "glb" || t === "gltf" ? new jg().load(e, (i) => {
      this.scene.remove(this.cube), this.gui.removeFolder(this.cubeFolder);
      const r = i.scene;
      this.scene.add(r);
      const a = new un().setFromObject(r), o = a.getCenter(new P()), l = a.getSize(new P());
      r.position.sub(o);
      const c = Math.max(l.x, l.y, l.z);
      this.camera.position.z = c * 2, this.camera.lookAt(new P(0, 0, 0)), this.controls.target.set(0, 0, 0), this.controls.update();
      const h = this.gui.addFolder("\uBAA8\uB378");
      h.add(r.rotation, "x", 0, Math.PI * 2), h.add(r.rotation, "y", 0, Math.PI * 2), h.add(r.rotation, "z", 0, Math.PI * 2), h.open(), this.loaderElement.style.display = "none", window.parent && window.parent.postMessage({ type: "modelLoaded", success: true }, "*");
    }, (i) => {
      if (i.lengthComputable) {
        const r = Math.floor(i.loaded / i.total * 100);
        this.loaderElement.textContent = `\uBAA8\uB378 \uB85C\uB529 \uC911... ${r}%`;
      }
    }, (i) => {
      console.error("\uBAA8\uB378 \uB85C\uB4DC \uC911 \uC624\uB958 \uBC1C\uC0DD:", i), this.loaderElement.textContent = "\uBAA8\uB378 \uB85C\uB4DC \uC2E4\uD328", setTimeout(() => {
        this.loaderElement.style.display = "none";
      }, 3e3), window.parent && window.parent.postMessage({ type: "modelLoaded", success: false, error: i instanceof Error ? i.message : String(i) }, "*");
    }) : (console.warn("\uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uD30C\uC77C \uD615\uC2DD:", t), this.loaderElement.textContent = `\uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uD30C\uC77C \uD615\uC2DD: ${t}`, setTimeout(() => {
      this.loaderElement.style.display = "none";
    }, 3e3));
  }
  animate() {
    requestAnimationFrame(this.animate.bind(this)), this.controls.update(), this.renderer.render(this.scene, this.camera), this.stats.update();
  }
}
window.addEventListener("DOMContentLoaded", () => {
  new Jv();
});
