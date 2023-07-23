var Ae = Object.defineProperty;
var Ve = (n, e, t) => e in n ? Ae(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var O = (n, e, t) => (Ve(n, typeof e != "symbol" ? e + "" : e, t), t);
function x() {
}
function Ce(n) {
  return n();
}
function pe() {
  return /* @__PURE__ */ Object.create(null);
}
function J(n) {
  n.forEach(Ce);
}
function je(n) {
  return typeof n == "function";
}
function B(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function Fe(n) {
  return Object.keys(n).length === 0;
}
function p(n, e) {
  n.appendChild(e);
}
function H(n, e, t) {
  const r = Ze(n);
  if (!r.getElementById(e)) {
    const o = y("style");
    o.id = e, o.textContent = t, De(r, o);
  }
}
function Ze(n) {
  if (!n)
    return document;
  const e = n.getRootNode ? n.getRootNode() : n.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : n.ownerDocument;
}
function De(n, e) {
  return p(
    /** @type {Document} */
    n.head || n,
    e
  ), e.sheet;
}
function w(n, e, t) {
  n.insertBefore(e, t || null);
}
function k(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function Pe(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function y(n) {
  return document.createElement(n);
}
function E(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function Q(n) {
  return document.createTextNode(n);
}
function V() {
  return Q(" ");
}
function se() {
  return Q("");
}
function P(n, e, t, r) {
  return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r);
}
function Re(n) {
  return function(e) {
    return e.stopPropagation(), n.call(this, e);
  };
}
function u(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
const Ie = ["width", "height"];
function Ue(n, e) {
  const t = Object.getOwnPropertyDescriptors(n.__proto__);
  for (const r in e)
    e[r] == null ? n.removeAttribute(r) : r === "style" ? n.style.cssText = e[r] : r === "__value" ? n.value = n[r] = e[r] : t[r] && t[r].set && Ie.indexOf(r) === -1 ? n[r] = e[r] : u(n, r, e[r]);
}
function Ke(n, e) {
  Object.keys(e).forEach((t) => {
    Je(n, t, e[t]);
  });
}
function Je(n, e, t) {
  e in n ? n[e] = typeof n[e] == "boolean" && t === "" ? !0 : t : u(n, e, t);
}
function Xe(n) {
  return /-/.test(n) ? Ke : Ue;
}
function Ge(n) {
  return Array.from(n.childNodes);
}
function ie(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function z(n, e, t) {
  n.classList.toggle(e, !!t);
}
function Qe(n, e, { bubbles: t = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: r });
}
function We(n) {
  const e = {};
  return n.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
let G;
function X(n) {
  G = n;
}
function le() {
  if (!G)
    throw new Error("Function called outside component initialization");
  return G;
}
function ze(n) {
  le().$$.on_mount.push(n);
}
function Le(n) {
  le().$$.on_destroy.push(n);
}
function ue() {
  const n = le();
  return (e, t, { cancelable: r = !1 } = {}) => {
    const o = n.$$.callbacks[e];
    if (o) {
      const s = Qe(
        /** @type {string} */
        e,
        t,
        { cancelable: r }
      );
      return o.slice().forEach((i) => {
        i.call(n, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
function Ye(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((r) => r.call(this, e));
}
const U = [], R = [];
let K = [];
const re = [], et = /* @__PURE__ */ Promise.resolve();
let oe = !1;
function tt() {
  oe || (oe = !0, et.then(L));
}
function ee(n) {
  K.push(n);
}
function ce(n) {
  re.push(n);
}
const ne = /* @__PURE__ */ new Set();
let I = 0;
function L() {
  if (I !== 0)
    return;
  const n = G;
  do {
    try {
      for (; I < U.length; ) {
        const e = U[I];
        I++, X(e), nt(e.$$);
      }
    } catch (e) {
      throw U.length = 0, I = 0, e;
    }
    for (X(null), U.length = 0, I = 0; R.length; )
      R.pop()();
    for (let e = 0; e < K.length; e += 1) {
      const t = K[e];
      ne.has(t) || (ne.add(t), t());
    }
    K.length = 0;
  } while (U.length);
  for (; re.length; )
    re.pop()();
  oe = !1, ne.clear(), X(n);
}
function nt(n) {
  if (n.fragment !== null) {
    n.update(), J(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(ee);
  }
}
function rt(n) {
  const e = [], t = [];
  K.forEach((r) => n.indexOf(r) === -1 ? e.push(r) : t.push(r)), t.forEach((r) => r()), K = e;
}
const W = /* @__PURE__ */ new Set();
let D;
function F() {
  D = {
    r: 0,
    c: [],
    p: D
    // parent group
  };
}
function Z() {
  D.r || J(D.c), D = D.p;
}
function m(n, e) {
  n && n.i && (W.delete(n), n.i(e));
}
function g(n, e, t, r) {
  if (n && n.o) {
    if (W.has(n))
      return;
    W.add(n), D.c.push(() => {
      W.delete(n), r && (t && n.d(1), r());
    }), n.o(e);
  } else
    r && r();
}
function be(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function ae(n, e, t) {
  const r = n.$$.props[e];
  r !== void 0 && (n.$$.bound[r] = t, t(n.$$.ctx[r]));
}
function S(n) {
  n && n.c();
}
function T(n, e, t) {
  const { fragment: r, after_update: o } = n.$$;
  r && r.m(e, t), ee(() => {
    const s = n.$$.on_mount.map(Ce).filter(je);
    n.$$.on_destroy ? n.$$.on_destroy.push(...s) : J(s), n.$$.on_mount = [];
  }), o.forEach(ee);
}
function N(n, e) {
  const t = n.$$;
  t.fragment !== null && (rt(t.after_update), J(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function ot(n, e) {
  n.$$.dirty[0] === -1 && (U.push(n), tt(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function M(n, e, t, r, o, s, i, c = [-1]) {
  const l = G;
  X(n);
  const a = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: x,
    not_equal: o,
    bound: pe(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: pe(),
    dirty: c,
    skip_bound: !1,
    root: e.target || l.$$.root
  };
  i && i(a.root);
  let f = !1;
  if (a.ctx = t ? t(n, e.props || {}, (b, $, ...d) => {
    const _ = d.length ? d[0] : $;
    return a.ctx && o(a.ctx[b], a.ctx[b] = _) && (!a.skip_bound && a.bound[b] && a.bound[b](_), f && ot(n, b)), $;
  }) : [], a.update(), f = !0, J(a.before_update), a.fragment = r ? r(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      const b = Ge(e.target);
      a.fragment && a.fragment.l(b), b.forEach(k);
    } else
      a.fragment && a.fragment.c();
    e.intro && m(n.$$.fragment), T(n, e.target, e.anchor), L();
  }
  X(l);
}
let Ee;
typeof HTMLElement == "function" && (Ee = class extends HTMLElement {
  constructor(e, t, r) {
    super();
    /** The Svelte component constructor */
    O(this, "$$ctor");
    /** Slots */
    O(this, "$$s");
    /** The Svelte component instance */
    O(this, "$$c");
    /** Whether or not the custom element is connected */
    O(this, "$$cn", !1);
    /** Component props data */
    O(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    O(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    O(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    O(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    O(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = t, r && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, t, r) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const o = this.$$c.$on(e, t);
      this.$$l_u.set(t, o);
    }
    super.addEventListener(e, t, r);
  }
  removeEventListener(e, t, r) {
    if (super.removeEventListener(e, t, r), this.$$c) {
      const o = this.$$l_u.get(t);
      o && (o(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(s) {
        return () => {
          let i;
          return {
            c: function() {
              i = y("slot"), s !== "default" && u(i, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(a, f) {
              w(a, i, f);
            },
            d: function(a) {
              a && k(i);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn)
        return;
      const t = {}, r = We(this);
      for (const s of this.$$s)
        s in r && (t[s] = [e(s)]);
      for (const s of this.attributes) {
        const i = this.$$g_p(s.name);
        i in this.$$d || (this.$$d[i] = Y(i, s.value, this.$$p_d, "toProp"));
      }
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$scope: {
            ctx: []
          }
        }
      });
      const o = () => {
        this.$$r = !0;
        for (const s in this.$$p_d)
          if (this.$$d[s] = this.$$c.$$.ctx[this.$$c.$$.props[s]], this.$$p_d[s].reflect) {
            const i = Y(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            i == null ? this.removeAttribute(s) : this.setAttribute(this.$$p_d[s].attribute || s, i);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(o), o();
      for (const s in this.$$l)
        for (const i of this.$$l[s]) {
          const c = this.$$c.$on(s, i);
          this.$$l_u.set(i, c);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, t, r) {
    var o;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Y(e, r, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(e) {
    return Object.keys(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Y(n, e, t, r) {
  var s;
  const o = (s = t[n]) == null ? void 0 : s.type;
  if (e = o === "Boolean" && typeof e != "boolean" ? e != null : e, !r || !t[n])
    return e;
  if (r === "toAttribute")
    switch (o) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (o) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function q(n, e, t, r, o, s) {
  let i = class extends Ee {
    constructor() {
      super(n, t, o), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (c) => (e[c].attribute || c).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((c) => {
    Object.defineProperty(i.prototype, c, {
      get() {
        return this.$$c && c in this.$$c ? this.$$c[c] : this.$$d[c];
      },
      set(l) {
        var a;
        l = Y(c, l, e), this.$$d[c] = l, (a = this.$$c) == null || a.$set({ [c]: l });
      }
    });
  }), r.forEach((c) => {
    Object.defineProperty(i.prototype, c, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[c];
      }
    });
  }), s && (i = s(i)), n.element = /** @type {any} */
  i, i;
}
class A {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    O(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    O(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    N(this, 1), this.$destroy = x;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!je(t))
      return x;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(t), () => {
      const o = r.indexOf(t);
      o !== -1 && r.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Fe(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const st = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(st);
function Te(n) {
  return n == null ? "null" : Array.isArray(n) ? "array" : typeof n == "string" ? "string" : typeof n == "number" ? "number" : typeof n == "boolean" ? "boolean" : "object";
}
function it(n) {
  H(n, "sv-1mapbmh", "svg.sv-1mapbmh{display:block;box-sizing:border-box;color:var(--type-icon-color, var(--json-editor-color-base))}svg.object.sv-1mapbmh{width:calc(var(--type-icon-size, 10px) + 1px)}svg.array.sv-1mapbmh{width:var(--type-icon-size, 10px)}svg.string.sv-1mapbmh{width:calc(var(--type-icon-size, 10px) - 2px)}svg.number.sv-1mapbmh{width:calc(var(--type-icon-size, 10px) - 1px)}svg.boolean.sv-1mapbmh{width:calc(var(--type-icon-size, 10px) - 3px)}svg.null.sv-1mapbmh{width:calc(var(--type-icon-size, 10px) - 2px)}");
}
function lt(n) {
  let e, t, r;
  return {
    c() {
      e = E("svg"), t = E("g"), r = E("path"), u(r, "d", "M3.808 10.15C1.694 10.15 0 8.848 0 6.412V0H1.932V6.272C1.932 7.574 2.66 8.26 3.808 8.26C4.984 8.26 5.698 7.574 5.698 6.272V0H7.63V6.412C7.63 8.848 5.936 10.15 3.808 10.15Z"), u(r, "fill", "currentColor"), u(t, "transform", "translate(0 1.25)"), u(e, "viewBox", "0 0 8 12"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "class", "null sv-1mapbmh");
    },
    m(o, s) {
      w(o, e, s), p(e, t), p(t, r);
    },
    d(o) {
      o && k(e);
    }
  };
}
function ut(n) {
  let e, t;
  return {
    c() {
      e = E("svg"), t = E("path"), u(t, "d", "M3.05176e-05 0H3.57003C5.50203 0 6.59403 1.134 6.59403 2.674C6.59403 3.696 5.97803 4.522 5.15203 4.802C6.11803 5.04 6.90203 5.922 6.90203 7.154C6.90203 8.764 5.69803 9.926 3.83603 9.926H3.05176e-05V0ZM1.90403 4.102H3.27603C4.15803 4.102 4.69003 3.612 4.69003 2.856C4.69003 2.1 4.20003 1.624 3.26203 1.624H1.90403V4.102ZM1.90403 8.316H3.47203C4.41003 8.316 4.97003 7.826 4.97003 7.028C4.97003 6.244 4.46603 5.698 3.50003 5.698H1.90403V8.316Z"), u(t, "fill", "currentColor"), u(e, "viewBox", "0 0 7 10"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "class", "boolean sv-1mapbmh");
    },
    m(r, o) {
      w(r, e, o), p(e, t);
    },
    d(r) {
      r && k(e);
    }
  };
}
function ct(n) {
  let e, t;
  return {
    c() {
      e = E("svg"), t = E("path"), u(t, "d", "M8.47003 9.926H6.44003L1.93203 2.884V9.926H3.05176e-05V0H2.40803L6.53803 6.566V0H8.47003V9.926Z"), u(t, "fill", "currentColor"), u(e, "viewBox", "0 0 9 10"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "class", "number sv-1mapbmh");
    },
    m(r, o) {
      w(r, e, o), p(e, t);
    },
    d(r) {
      r && k(e);
    }
  };
}
function at(n) {
  let e, t;
  return {
    c() {
      e = E("svg"), t = E("path"), u(t, "d", "M7.39203 2.576L5.65603 3.108C5.55803 2.562 5.11003 1.708 3.85003 1.708C2.91203 1.708 2.29603 2.31 2.29603 2.968C2.29603 3.514 2.64603 3.948 3.37403 4.088L4.76003 4.354C6.56603 4.704 7.53203 5.88 7.53203 7.28C7.53203 8.806 6.25803 10.346 3.94803 10.346C1.31603 10.346 0.154031 8.652 3.05176e-05 7.238L1.79203 6.762C1.87603 7.742 2.56203 8.624 3.96203 8.624C4.99803 8.624 5.57203 8.106 5.57203 7.406C5.57203 6.832 5.13803 6.384 4.36803 6.23L2.98203 5.95C1.40003 5.628 0.378031 4.606 0.378031 3.108C0.378031 1.344 1.96003 0 3.83603 0C6.24403 0 7.16803 1.456 7.39203 2.576Z"), u(t, "fill", "currentColor"), u(e, "viewBox", "0 0 8 11"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "class", "string sv-1mapbmh");
    },
    m(r, o) {
      w(r, e, o), p(e, t);
    },
    d(r) {
      r && k(e);
    }
  };
}
function ft(n) {
  let e, t;
  return {
    c() {
      e = E("svg"), t = E("path"), u(t, "d", "M7.728 9.926L6.902 7.658H2.87L2.044 9.926H0L3.808 0H6.048L9.828 9.926H7.728ZM4.886 2.142L3.514 5.894H6.258L4.886 2.142Z"), u(t, "fill", "currentColor"), u(e, "viewBox", "0 0 10 10"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "class", "array sv-1mapbmh");
    },
    m(r, o) {
      w(r, e, o), p(e, t);
    },
    d(r) {
      r && k(e);
    }
  };
}
function dt(n) {
  let e, t;
  return {
    c() {
      e = E("svg"), t = E("path"), u(t, "d", "M2.296 5.166C2.296 7.238 3.78 8.162 5.166 8.162C6.538 8.162 8.022 7.238 8.022 5.166C8.022 3.094 6.538 2.156 5.166 2.156C3.78 2.156 2.296 3.094 2.296 5.166ZM0 5.18C0 2.03 2.366 0 5.166 0C7.952 0 10.318 2.03 10.318 5.18C10.318 8.316 7.952 10.346 5.166 10.346C2.366 10.346 0 8.316 0 5.18Z"), u(t, "fill", "currentColor"), u(e, "viewBox", "0 0 11 11"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "class", "object sv-1mapbmh");
    },
    m(r, o) {
      w(r, e, o), p(e, t);
    },
    d(r) {
      r && k(e);
    }
  };
}
function ht(n) {
  let e;
  function t(s, i) {
    if (
      /*name*/
      s[0] === "object"
    )
      return dt;
    if (
      /*name*/
      s[0] === "array"
    )
      return ft;
    if (
      /*name*/
      s[0] === "string"
    )
      return at;
    if (
      /*name*/
      s[0] === "number"
    )
      return ct;
    if (
      /*name*/
      s[0] === "boolean"
    )
      return ut;
    if (
      /*name*/
      s[0] === "null"
    )
      return lt;
  }
  let r = t(n), o = r && r(n);
  return {
    c() {
      o && o.c(), e = se();
    },
    m(s, i) {
      o && o.m(s, i), w(s, e, i);
    },
    p(s, [i]) {
      r !== (r = t(s)) && (o && o.d(1), o = r && r(s), o && (o.c(), o.m(e.parentNode, e)));
    },
    i: x,
    o: x,
    d(s) {
      s && k(e), o && o.d(s);
    }
  };
}
function mt(n, e, t) {
  let { name: r = "object" } = e;
  return n.$$set = (o) => {
    "name" in o && t(0, r = o.name);
  }, [r];
}
class Ne extends A {
  constructor(e) {
    super(), M(this, e, mt, ht, B, { name: 0 }, it);
  }
  get name() {
    return this.$$.ctx[0];
  }
  set name(e) {
    this.$$set({ name: e }), L();
  }
}
q(Ne, { name: {} }, [], [], !0);
function pt(n) {
  H(n, "sv-nueyac", "i.sv-nueyac{display:grid;width:var(--type-size, 24px);height:var(--type-size, 24px);place-content:center;box-sizing:border-box;border-radius:4px;--type-icon-color:hsl(0 0% 100%)}i.object.sv-nueyac{background:var(--json-editor-color-object)}i.array.sv-nueyac{background:var(--json-editor-color-array)}i.string.sv-nueyac{background:var(--json-editor-color-string)}i.number.sv-nueyac{background:var(--json-editor-color-number)}i.boolean.sv-nueyac{background:var(--json-editor-color-boolean)}i.null.sv-nueyac{background:var(--json-editor-color-null)}");
}
function bt(n) {
  let e, t, r;
  return t = new Ne({ props: { name: (
    /*name*/
    n[0]
  ) } }), {
    c() {
      e = y("i"), S(t.$$.fragment), u(e, "class", "sv-nueyac"), z(
        e,
        "object",
        /*name*/
        n[0] === "object"
      ), z(
        e,
        "array",
        /*name*/
        n[0] === "array"
      ), z(
        e,
        "string",
        /*name*/
        n[0] === "string"
      ), z(
        e,
        "number",
        /*name*/
        n[0] === "number"
      ), z(
        e,
        "boolean",
        /*name*/
        n[0] === "boolean"
      ), z(
        e,
        "null",
        /*name*/
        n[0] === "null"
      );
    },
    m(o, s) {
      w(o, e, s), T(t, e, null), r = !0;
    },
    p(o, [s]) {
      const i = {};
      s & /*name*/
      1 && (i.name = /*name*/
      o[0]), t.$set(i), (!r || s & /*name*/
      1) && z(
        e,
        "object",
        /*name*/
        o[0] === "object"
      ), (!r || s & /*name*/
      1) && z(
        e,
        "array",
        /*name*/
        o[0] === "array"
      ), (!r || s & /*name*/
      1) && z(
        e,
        "string",
        /*name*/
        o[0] === "string"
      ), (!r || s & /*name*/
      1) && z(
        e,
        "number",
        /*name*/
        o[0] === "number"
      ), (!r || s & /*name*/
      1) && z(
        e,
        "boolean",
        /*name*/
        o[0] === "boolean"
      ), (!r || s & /*name*/
      1) && z(
        e,
        "null",
        /*name*/
        o[0] === "null"
      );
    },
    i(o) {
      r || (m(t.$$.fragment, o), r = !0);
    },
    o(o) {
      g(t.$$.fragment, o), r = !1;
    },
    d(o) {
      o && k(e), N(t);
    }
  };
}
function vt(n, e, t) {
  let { name: r = "object" } = e;
  return n.$$set = (o) => {
    "name" in o && t(0, r = o.name);
  }, [r];
}
class Se extends A {
  constructor(e) {
    super(), M(this, e, vt, bt, B, { name: 0 }, pt);
  }
  get name() {
    return this.$$.ctx[0];
  }
  set name(e) {
    this.$$set({ name: e }), L();
  }
}
q(Se, { name: {} }, [], [], !0);
function gt(n) {
  H(n, "sv-b4rfk7", "button.sv-b4rfk7{display:block;width:32px;height:32px;margin:-8px;padding:0;background:none;border:none;box-sizing:border-box;cursor:pointer}button.sv-b4rfk7:active{opacity:0.5}button.sv-b4rfk7:focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-6px}svg.sv-b4rfk7{display:block;margin:0 auto;width:var(--fold-arrow-size, 20px);rotate:0deg;box-sizing:border-box;transition:rotate, 160ms ease-out}svg.open.sv-b4rfk7{rotate:90deg}");
}
function _t(n) {
  let e, t, r, o, s, i, c;
  return {
    c() {
      e = y("button"), t = E("svg"), r = E("g"), o = E("path"), s = E("path"), u(o, "d", "M7 9L10 12L13 9"), u(o, "fill", "currentColor"), u(s, "d", "M7 9L10 12L13 9H7Z"), u(s, "stroke", "currentColor"), u(s, "stroke-width", "2"), u(s, "stroke-linecap", "round"), u(s, "stroke-linejoin", "round"), u(r, "transform", "rotate(-90, 10, 10)"), u(t, "viewBox", "0 0 20 20"), u(t, "fill", "none"), u(t, "xmlns", "http://www.w3.org/2000/svg"), u(t, "class", "sv-b4rfk7"), z(
        t,
        "open",
        /*open*/
        n[0]
      ), u(e, "type", "button"), u(e, "class", "sv-b4rfk7");
    },
    m(l, a) {
      w(l, e, a), p(e, t), p(t, r), p(r, o), p(r, s), i || (c = P(
        e,
        "click",
        /*onClickButton*/
        n[1]
      ), i = !0);
    },
    p(l, [a]) {
      a & /*open*/
      1 && z(
        t,
        "open",
        /*open*/
        l[0]
      );
    },
    i: x,
    o: x,
    d(l) {
      l && k(e), i = !1, c();
    }
  };
}
function $t(n, e, t) {
  const r = ue();
  let { open: o = !1 } = e;
  function s() {
    r("click");
  }
  return n.$$set = (i) => {
    "open" in i && t(0, o = i.open);
  }, [o, s];
}
class Oe extends A {
  constructor(e) {
    super(), M(this, e, $t, _t, B, { open: 0 }, gt);
  }
  get open() {
    return this.$$.ctx[0];
  }
  set open(e) {
    this.$$set({ open: e }), L();
  }
}
q(Oe, { open: { type: "Boolean" } }, [], [], !0);
function yt(n) {
  H(n, "sv-gs2urc", "svg.sv-gs2urc{display:block;width:24px}");
}
function kt(n) {
  let e, t, r, o;
  return {
    c() {
      e = E("svg"), t = E("path"), r = E("path"), o = E("path"), u(t, "d", "M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"), u(t, "stroke", "currentColor"), u(t, "stroke-linecap", "round"), u(t, "stroke-linejoin", "round"), u(r, "d", "M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z"), u(r, "stroke", "currentColor"), u(r, "stroke-linecap", "round"), u(r, "stroke-linejoin", "round"), u(o, "d", "M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z"), u(o, "stroke", "currentColor"), u(o, "stroke-linecap", "round"), u(o, "stroke-linejoin", "round"), u(e, "viewBox", "0 0 24 24"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "class", "sv-gs2urc");
    },
    m(s, i) {
      w(s, e, i), p(e, t), p(e, r), p(e, o);
    },
    p: x,
    i: x,
    o: x,
    d(s) {
      s && k(e);
    }
  };
}
class Be extends A {
  constructor(e) {
    super(), M(this, e, null, kt, B, {}, yt);
  }
}
q(Be, {}, [], [], !0);
function wt(n) {
  H(n, "sv-1z00s46", "div.sv-1z00s46{display:block;margin:-4px 0;padding:4px 6px;min-width:var(--label-min-width, unset);min-height:24px;outline:none;font-size:var(--json-editor-font-size);line-height:1.42;box-sizing:border-box;border-radius:2px;background-color:hsla(0, 0%, 0%, 0);box-shadow:0 0 0 0.5px hsla(0, 0%, 0%, 0);transition:background-color 160ms ease-out, box-shadow 200ms ease-out;cursor:text}div.key.sv-1z00s46{display:flex}div.sv-1z00s46:hover,div.sv-1z00s46:focus{background-color:var(--json-editor-color-active)}div.sv-1z00s46:focus{box-shadow:0 0 0 0.5px hsla(0, 0%, 0%, 0.25)}div.sv-1z00s46:empty:before{content:attr(data-placeholder);color:var(--json-editor-color-blur)}");
}
function xt(n) {
  let e, t, r;
  return {
    c() {
      e = y("div"), u(e, "contenteditable", "true"), u(
        e,
        "data-placeholder",
        /*placeholder*/
        n[2]
      ), u(e, "class", "sv-1z00s46"), /*value*/
      n[0] === void 0 && ee(() => (
        /*div_input_handler*/
        n[6].call(e)
      )), z(
        e,
        "value",
        /*mode*/
        n[1] === "value"
      ), z(
        e,
        "key",
        /*mode*/
        n[1] === "key"
      );
    },
    m(o, s) {
      w(o, e, s), /*value*/
      n[0] !== void 0 && (e.innerText = /*value*/
      n[0]), t || (r = [
        P(
          e,
          "input",
          /*div_input_handler*/
          n[6]
        ),
        P(
          e,
          "keydown",
          /*onKeydown*/
          n[3]
        ),
        P(
          e,
          "keypress",
          /*onKeypress*/
          n[4]
        )
      ], t = !0);
    },
    p(o, [s]) {
      s & /*placeholder*/
      4 && u(
        e,
        "data-placeholder",
        /*placeholder*/
        o[2]
      ), s & /*value*/
      1 && /*value*/
      o[0] !== e.innerText && (e.innerText = /*value*/
      o[0]), s & /*mode*/
      2 && z(
        e,
        "value",
        /*mode*/
        o[1] === "value"
      ), s & /*mode*/
      2 && z(
        e,
        "key",
        /*mode*/
        o[1] === "key"
      );
    },
    i: x,
    o: x,
    d(o) {
      o && k(e), t = !1, J(r);
    }
  };
}
function Ct(n, e, t) {
  let { mode: r = "value" } = e, { value: o = "" } = e, { placeholder: s = "empty" } = e, { type: i = "" } = e;
  function c(f) {
    if (r === "key" && f.keyCode === 13)
      return f.preventDefault();
    if (f.ctrlKey || f.metaKey)
      switch (f.keyCode) {
        case 66:
        case 98:
          f.preventDefault();
          break;
        case 73:
        case 105:
          f.preventDefault();
          break;
        case 85:
        case 117:
          f.preventDefault();
          break;
      }
  }
  function l(f) {
    if (i === "number") {
      if (f.code === "Period")
        return o.indexOf(".") > -1 ? f.preventDefault() : void 0;
      if (isNaN(String.fromCharCode(f.which)))
        return f.preventDefault();
    }
  }
  function a() {
    o = this.innerText, t(0, o);
  }
  return n.$$set = (f) => {
    "mode" in f && t(1, r = f.mode), "value" in f && t(0, o = f.value), "placeholder" in f && t(2, s = f.placeholder), "type" in f && t(5, i = f.type);
  }, [o, r, s, c, l, i, a];
}
class fe extends A {
  constructor(e) {
    super(), M(
      this,
      e,
      Ct,
      xt,
      B,
      {
        mode: 1,
        value: 0,
        placeholder: 2,
        type: 5
      },
      wt
    );
  }
  get mode() {
    return this.$$.ctx[1];
  }
  set mode(e) {
    this.$$set({ mode: e }), L();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), L();
  }
  get placeholder() {
    return this.$$.ctx[2];
  }
  set placeholder(e) {
    this.$$set({ placeholder: e }), L();
  }
  get type() {
    return this.$$.ctx[5];
  }
  set type(e) {
    this.$$set({ type: e }), L();
  }
}
q(fe, { mode: {}, value: {}, placeholder: {}, type: {} }, [], [], !0);
function jt(n) {
  H(n, "sv-18p5lty", "em.sv-18p5lty{display:block;padding:0 6px;color:var(--json-editor-color-blur);font-style:normal;letter-spacing:-0.5px;user-select:none;font-size:var(--json-editor-font-size)}");
}
function zt(n) {
  let e;
  return {
    c() {
      e = y("em"), e.textContent = "NULL", u(e, "class", "label-null sv-18p5lty");
    },
    m(t, r) {
      w(t, e, r);
    },
    p: x,
    i: x,
    o: x,
    d(t) {
      t && k(e);
    }
  };
}
class de extends A {
  constructor(e) {
    super(), M(this, e, null, zt, B, {}, jt);
  }
}
q(de, {}, [], [], !0);
function Lt(n) {
  H(n, "sv-14zm2vf", ".item-key.sv-14zm2vf.sv-14zm2vf{display:flex;align-items:center;justify-content:flex-start;gap:0 6px}.sort.sv-14zm2vf.sv-14zm2vf{display:block;box-sizing:border-box;cursor:move}.fold.sv-14zm2vf.sv-14zm2vf{margin:0 0 0 4px}.type.sv-14zm2vf.sv-14zm2vf{display:block;margin:-2px;padding:2px;box-sizing:border-box;border:none;background:none;outline:none;cursor:pointer;transition:opacity 120ms ease-out;border-radius:6px}.type.sv-14zm2vf.sv-14zm2vf:active{opacity:0.5}.type.sv-14zm2vf.sv-14zm2vf:focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-1px}.label.sv-14zm2vf.sv-14zm2vf{--label-min-width:42px}.count.sv-14zm2vf.sv-14zm2vf{display:block;margin:0;pointer-events:none}.count.sv-14zm2vf em.sv-14zm2vf{display:block;color:var(--json-editor-color-blur);font-style:normal;user-select:none;font-size:14px}");
}
function ve(n) {
  let e, t, r;
  return t = new Be({}), {
    c() {
      e = y("div"), S(t.$$.fragment), u(e, "class", "sort sv-14zm2vf");
    },
    m(o, s) {
      w(o, e, s), T(t, e, null), r = !0;
    },
    i(o) {
      r || (m(t.$$.fragment, o), r = !0);
    },
    o(o) {
      g(t.$$.fragment, o), r = !1;
    },
    d(o) {
      o && k(e), N(t);
    }
  };
}
function ge(n) {
  let e, t, r;
  return t = new Oe({ props: { open: (
    /*fold*/
    n[2]
  ) } }), t.$on(
    "click",
    /*onClickFold*/
    n[9]
  ), {
    c() {
      e = y("p"), S(t.$$.fragment), u(e, "class", "fold sv-14zm2vf");
    },
    m(o, s) {
      w(o, e, s), T(t, e, null), r = !0;
    },
    p(o, s) {
      const i = {};
      s & /*fold*/
      4 && (i.open = /*fold*/
      o[2]), t.$set(i);
    },
    i(o) {
      r || (m(t.$$.fragment, o), r = !0);
    },
    o(o) {
      g(t.$$.fragment, o), r = !1;
    },
    d(o) {
      o && k(e), N(t);
    }
  };
}
function _e(n) {
  let e, t, r, o;
  const s = [Tt, Et], i = [];
  function c(l, a) {
    return (
      /*labelType*/
      l[4] === "null" ? 0 : 1
    );
  }
  return e = c(n), t = i[e] = s[e](n), {
    c() {
      t.c(), r = se();
    },
    m(l, a) {
      i[e].m(l, a), w(l, r, a), o = !0;
    },
    p(l, a) {
      let f = e;
      e = c(l), e === f ? i[e].p(l, a) : (F(), g(i[f], 1, 1, () => {
        i[f] = null;
      }), Z(), t = i[e], t ? t.p(l, a) : (t = i[e] = s[e](l), t.c()), m(t, 1), t.m(r.parentNode, r));
    },
    i(l) {
      o || (m(t), o = !0);
    },
    o(l) {
      g(t), o = !1;
    },
    d(l) {
      l && k(r), i[e].d(l);
    }
  };
}
function Et(n) {
  let e, t, r, o;
  function s(c) {
    n[11](c);
  }
  let i = {
    mode: (
      /*labelType*/
      n[4]
    ),
    type: (
      /*type*/
      n[1]
    )
  };
  return (
    /*label*/
    n[0] !== void 0 && (i.value = /*label*/
    n[0]), t = new fe({ props: i }), R.push(() => ae(t, "value", s)), {
      c() {
        e = y("div"), S(t.$$.fragment), u(e, "class", "label sv-14zm2vf");
      },
      m(c, l) {
        w(c, e, l), T(t, e, null), o = !0;
      },
      p(c, l) {
        const a = {};
        l & /*labelType*/
        16 && (a.mode = /*labelType*/
        c[4]), l & /*type*/
        2 && (a.type = /*type*/
        c[1]), !r && l & /*label*/
        1 && (r = !0, a.value = /*label*/
        c[0], ce(() => r = !1)), t.$set(a);
      },
      i(c) {
        o || (m(t.$$.fragment, c), o = !0);
      },
      o(c) {
        g(t.$$.fragment, c), o = !1;
      },
      d(c) {
        c && k(e), N(t);
      }
    }
  );
}
function Tt(n) {
  let e, t;
  return e = new de({}), {
    c() {
      S(e.$$.fragment);
    },
    m(r, o) {
      T(e, r, o), t = !0;
    },
    p: x,
    i(r) {
      t || (m(e.$$.fragment, r), t = !0);
    },
    o(r) {
      g(e.$$.fragment, r), t = !1;
    },
    d(r) {
      N(e, r);
    }
  };
}
function $e(n) {
  let e;
  function t(s, i) {
    if (
      /*type*/
      s[1] === "array"
    )
      return St;
    if (
      /*type*/
      s[1] === "object"
    )
      return Nt;
  }
  let r = t(n), o = r && r(n);
  return {
    c() {
      e = y("p"), o && o.c(), u(e, "class", "count sv-14zm2vf");
    },
    m(s, i) {
      w(s, e, i), o && o.m(e, null);
    },
    p(s, i) {
      r === (r = t(s)) && o ? o.p(s, i) : (o && o.d(1), o = r && r(s), o && (o.c(), o.m(e, null)));
    },
    d(s) {
      s && k(e), o && o.d();
    }
  };
}
function Nt(n) {
  let e, t = `{${/*count*/
  n[3]}}`, r;
  return {
    c() {
      e = y("em"), r = Q(t), u(e, "class", "sv-14zm2vf");
    },
    m(o, s) {
      w(o, e, s), p(e, r);
    },
    p(o, s) {
      s & /*count*/
      8 && t !== (t = `{${/*count*/
      o[3]}}`) && ie(r, t);
    },
    d(o) {
      o && k(e);
    }
  };
}
function St(n) {
  let e, t = `[${/*count*/
  n[3]}]`, r;
  return {
    c() {
      e = y("em"), r = Q(t), u(e, "class", "sv-14zm2vf");
    },
    m(o, s) {
      w(o, e, s), p(e, r);
    },
    p(o, s) {
      s & /*count*/
      8 && t !== (t = `[${/*count*/
      o[3]}]`) && ie(r, t);
    },
    d(o) {
      o && k(e);
    }
  };
}
function Ot(n) {
  let e, t, r, o, s, i, c, l, a, f, b = (
    /*useSort*/
    n[6] && ve()
  );
  o = new Se({ props: { name: (
    /*type*/
    n[1]
  ) } });
  let $ = (
    /*useFold*/
    n[5] && ge(n)
  ), d = (
    /*useLabel*/
    n[7] && _e(n)
  ), _ = (
    /*useCount*/
    n[8] && $e(n)
  );
  return {
    c() {
      e = y("div"), b && b.c(), t = V(), r = y("button"), S(o.$$.fragment), s = V(), $ && $.c(), i = V(), d && d.c(), c = V(), _ && _.c(), u(r, "type", "button"), u(r, "class", "type sv-14zm2vf"), u(e, "class", "item-key sv-14zm2vf");
    },
    m(v, h) {
      w(v, e, h), b && b.m(e, null), p(e, t), p(e, r), T(o, r, null), p(e, s), $ && $.m(e, null), p(e, i), d && d.m(e, null), p(e, c), _ && _.m(e, null), l = !0, a || (f = P(
        r,
        "click",
        /*onClickOpenContext*/
        n[10]
      ), a = !0);
    },
    p(v, [h]) {
      /*useSort*/
      v[6] ? b ? h & /*useSort*/
      64 && m(b, 1) : (b = ve(), b.c(), m(b, 1), b.m(e, t)) : b && (F(), g(b, 1, 1, () => {
        b = null;
      }), Z());
      const C = {};
      h & /*type*/
      2 && (C.name = /*type*/
      v[1]), o.$set(C), /*useFold*/
      v[5] ? $ ? ($.p(v, h), h & /*useFold*/
      32 && m($, 1)) : ($ = ge(v), $.c(), m($, 1), $.m(e, i)) : $ && (F(), g($, 1, 1, () => {
        $ = null;
      }), Z()), /*useLabel*/
      v[7] ? d ? (d.p(v, h), h & /*useLabel*/
      128 && m(d, 1)) : (d = _e(v), d.c(), m(d, 1), d.m(e, c)) : d && (F(), g(d, 1, 1, () => {
        d = null;
      }), Z()), /*useCount*/
      v[8] ? _ ? _.p(v, h) : (_ = $e(v), _.c(), _.m(e, null)) : _ && (_.d(1), _ = null);
    },
    i(v) {
      l || (m(b), m(o.$$.fragment, v), m($), m(d), l = !0);
    },
    o(v) {
      g(b), g(o.$$.fragment, v), g($), g(d), l = !1;
    },
    d(v) {
      v && k(e), b && b.d(), N(o), $ && $.d(), d && d.d(), _ && _.d(), a = !1, f();
    }
  };
}
function Bt(n, e, t) {
  const r = ue();
  let { type: o = "object" } = e, { fold: s = !1 } = e, { count: i = 0 } = e, { label: c = "" } = e, { labelType: l = "key" } = e, { useFold: a = !1 } = e, { useSort: f = !1 } = e, { useLabel: b = !1 } = e, { useCount: $ = !1 } = e;
  function d() {
    r("fold", !s);
  }
  function _(h) {
    r("context", { element: h.currentTarget });
  }
  function v(h) {
    c = h, t(0, c);
  }
  return n.$$set = (h) => {
    "type" in h && t(1, o = h.type), "fold" in h && t(2, s = h.fold), "count" in h && t(3, i = h.count), "label" in h && t(0, c = h.label), "labelType" in h && t(4, l = h.labelType), "useFold" in h && t(5, a = h.useFold), "useSort" in h && t(6, f = h.useSort), "useLabel" in h && t(7, b = h.useLabel), "useCount" in h && t(8, $ = h.useCount);
  }, [
    c,
    o,
    s,
    i,
    l,
    a,
    f,
    b,
    $,
    d,
    _,
    v
  ];
}
class te extends A {
  constructor(e) {
    super(), M(
      this,
      e,
      Bt,
      Ot,
      B,
      {
        type: 1,
        fold: 2,
        count: 3,
        label: 0,
        labelType: 4,
        useFold: 5,
        useSort: 6,
        useLabel: 7,
        useCount: 8
      },
      Lt
    );
  }
  get type() {
    return this.$$.ctx[1];
  }
  set type(e) {
    this.$$set({ type: e }), L();
  }
  get fold() {
    return this.$$.ctx[2];
  }
  set fold(e) {
    this.$$set({ fold: e }), L();
  }
  get count() {
    return this.$$.ctx[3];
  }
  set count(e) {
    this.$$set({ count: e }), L();
  }
  get label() {
    return this.$$.ctx[0];
  }
  set label(e) {
    this.$$set({ label: e }), L();
  }
  get labelType() {
    return this.$$.ctx[4];
  }
  set labelType(e) {
    this.$$set({ labelType: e }), L();
  }
  get useFold() {
    return this.$$.ctx[5];
  }
  set useFold(e) {
    this.$$set({ useFold: e }), L();
  }
  get useSort() {
    return this.$$.ctx[6];
  }
  set useSort(e) {
    this.$$set({ useSort: e }), L();
  }
  get useLabel() {
    return this.$$.ctx[7];
  }
  set useLabel(e) {
    this.$$set({ useLabel: e }), L();
  }
  get useCount() {
    return this.$$.ctx[8];
  }
  set useCount(e) {
    this.$$set({ useCount: e }), L();
  }
}
q(te, { type: {}, fold: { type: "Boolean" }, count: {}, label: {}, labelType: {}, useFold: { type: "Boolean" }, useSort: { type: "Boolean" }, useLabel: { type: "Boolean" }, useCount: { type: "Boolean" } }, [], [], !0);
function Ht(n) {
  H(n, "sv-6lgimd", "svg.sv-6lgimd{display:block;width:var(--icon-arrow-right, 16px)}");
}
function Mt(n) {
  let e, t;
  return {
    c() {
      e = E("svg"), t = E("path"), u(t, "d", "M6 12L10 8L6 4"), u(t, "stroke", "currentColor"), u(t, "stroke-linecap", "round"), u(t, "stroke-linejoin", "round"), u(e, "viewBox", "0 0 16 16"), u(e, "fill", "none"), u(e, "xmlns", "http://www.w3.org/2000/svg"), u(e, "class", "sv-6lgimd");
    },
    m(r, o) {
      w(r, e, o), p(e, t);
    },
    p: x,
    i: x,
    o: x,
    d(r) {
      r && k(e);
    }
  };
}
class He extends A {
  constructor(e) {
    super(), M(this, e, null, Mt, B, {}, Ht);
  }
}
q(He, {}, [], [], !0);
function qt(n) {
  H(n, "sv-hhdml0", ".context.sv-hhdml0.sv-hhdml0{--context-border-radius:4px;position:absolute;left:20px;margin:4px 0 0 0;z-index:2;background:#fff;border-radius:var(--context-border-radius);box-shadow:0 4px 32px 0 hsla(0, 0%, 0%, 0.1), 0 2px 8px 0 hsla(0, 0%, 0%, 0.2)}ul.sv-hhdml0.sv-hhdml0{margin:0;padding:0;list-style:none}li.sv-hhdml0.sv-hhdml0:not(:first-child){border-top:1px solid hsl(0, 0%, 88%)}button.sv-hhdml0.sv-hhdml0{display:grid;grid-template-columns:1fr auto;align-items:center;margin:0;padding:8px 12px;min-width:150px;text-align:left;box-sizing:border-box;background-color:transparent;border:none;cursor:pointer;font-size:12px;border-radius:0;transition:background-color 120ms ease-out}button.sv-hhdml0.sv-hhdml0:first-child{border-top-left-radius:var(--context-border-radius);border-top-right-radius:var(--context-border-radius)}button.sv-hhdml0.sv-hhdml0:last-child{border-bottom-left-radius:var(--context-border-radius);border-bottom-right-radius:var(--context-border-radius)}button.sv-hhdml0.sv-hhdml0:hover,button.sv-hhdml0.sv-hhdml0:active{background-color:hsl(0, 0%, 96%)}button.sv-hhdml0 span.sv-hhdml0{pointer-events:none;user-select:none}button.sv-hhdml0 i.sv-hhdml0{display:block;margin:0 -4px 0 0;pointer-events:none}");
}
function At(n) {
  let e, t, r, o, s, i, c, l, a, f, b, $, d, _, v;
  return l = new He({}), {
    c() {
      e = y("div"), t = y("ul"), r = y("li"), o = y("button"), s = y("span"), s.textContent = "Change type", i = V(), c = y("i"), S(l.$$.fragment), a = V(), f = y("li"), f.innerHTML = '<button type="button" class="sv-hhdml0"><span class="sv-hhdml0">Duplicate item</span></button>', b = V(), $ = y("li"), $.innerHTML = '<button type="button" class="sv-hhdml0"><span class="sv-hhdml0">Remove item</span></button>', u(s, "class", "sv-hhdml0"), u(c, "class", "sv-hhdml0"), u(o, "type", "button"), u(o, "class", "sv-hhdml0"), u(r, "class", "sv-hhdml0"), u(f, "class", "sv-hhdml0"), u($, "class", "sv-hhdml0"), u(t, "class", "sv-hhdml0"), u(e, "tabindex", "-1"), u(e, "class", "context sv-hhdml0");
    },
    m(h, C) {
      w(h, e, C), p(e, t), p(t, r), p(r, o), p(o, s), p(o, i), p(o, c), T(l, c, null), p(t, a), p(t, f), p(t, b), p(t, $), n[2](e), d = !0, _ || (v = P(e, "click", Re(
        /*click_handler*/
        n[1]
      )), _ = !0);
    },
    p: x,
    i(h) {
      d || (m(l.$$.fragment, h), d = !0);
    },
    o(h) {
      g(l.$$.fragment, h), d = !1;
    },
    d(h) {
      h && k(e), N(l), n[2](null), _ = !1, v();
    }
  };
}
function Vt(n, e, t) {
  const r = ue();
  let o;
  function s(a) {
    r("close");
  }
  function i(a) {
    if (a.code === "Escape")
      return r("close");
  }
  ze(() => {
    setTimeout(
      () => {
        window.addEventListener("click", s), window.addEventListener("keyup", i), o.focus();
      },
      60
    );
  }), Le(() => {
    window.removeEventListener("click", s), window.removeEventListener("keyup", i);
  });
  function c(a) {
    Ye.call(this, n, a);
  }
  function l(a) {
    R[a ? "unshift" : "push"](() => {
      o = a, t(0, o);
    });
  }
  return [o, c, l];
}
class Me extends A {
  constructor(e) {
    super(), M(this, e, Vt, At, B, {}, qt);
  }
}
q(Me, {}, [], [], !0);
function Ft(n) {
  H(n, "sv-1rydf8h", "button.sv-1rydf8h.sv-1rydf8h{--switch-width:36px;--switch-height:18px;--switch-offset:3px;--switch-speed:80ms;--switch-unit-size:calc(var(--switch-height) - (var(--switch-offset) * 2));display:block;margin:0 0 0 6px;padding:2px 0;background:none;border:none;font-size:0;cursor:pointer}button.sv-1rydf8h span.sv-1rydf8h{display:block;position:relative;padding:var(--switch-offset);width:var(--switch-width);height:var(--switch-height);border-radius:calc(var(--switch-height) * 0.5);box-shadow:inset 0 0 0 1px var(--json-editor-color-blur);transition:box-shadow 160ms ease-out;box-sizing:border-box}button.sv-1rydf8h i.sv-1rydf8h{display:block;width:var(--switch-unit-size);height:var(--switch-unit-size);background:var(--json-editor-color-blur);border-radius:var(--switch-unit-size);pointer-events:none;transform:translateX(var(--switch-unit-x));transition:transform var(--switch-speed) ease-out, width var(--switch-speed) ease-out}button.off.sv-1rydf8h.sv-1rydf8h{--switch-unit-x:0}button.on.sv-1rydf8h.sv-1rydf8h{--switch-unit-x:calc(var(--switch-width) - (var(--switch-offset) * 2) - var(--switch-unit-size))}button.sv-1rydf8h:active span.sv-1rydf8h{box-shadow:inset 0 0 0 1px var(--json-editor-color-active)}button:active.off.sv-1rydf8h i.sv-1rydf8h{width:calc(var(--switch-unit-size) + 6px)}button:active.on.sv-1rydf8h i.sv-1rydf8h{width:calc(var(--switch-unit-size) + 6px);transform:translateX(calc(var(--switch-width) - var(--switch-offset) * 2 - var(--switch-unit-size) - 6px))}button.sv-1rydf8h.sv-1rydf8h:focus-visible{outline:none}button.sv-1rydf8h:focus-visible span.sv-1rydf8h{outline:2px solid var(--json-editor-color-focus);outline-offset:1px}");
}
function Zt(n) {
  let e, t, r, o, s, i;
  return {
    c() {
      e = y("button"), t = y("span"), r = y("i"), o = Q(
        /*_value*/
        n[1]
      ), u(r, "class", "sv-1rydf8h"), u(t, "class", "sv-1rydf8h"), u(e, "type", "button"), u(e, "class", "sv-1rydf8h"), z(
        e,
        "on",
        /*_value*/
        n[1] === "true"
      ), z(
        e,
        "off",
        /*_value*/
        n[1] === "false"
      );
    },
    m(c, l) {
      w(c, e, l), p(e, t), p(t, r), p(r, o), s || (i = P(
        e,
        "click",
        /*click_handler*/
        n[2]
      ), s = !0);
    },
    p(c, [l]) {
      l & /*_value*/
      2 && ie(
        o,
        /*_value*/
        c[1]
      ), l & /*_value*/
      2 && z(
        e,
        "on",
        /*_value*/
        c[1] === "true"
      ), l & /*_value*/
      2 && z(
        e,
        "off",
        /*_value*/
        c[1] === "false"
      );
    },
    i: x,
    o: x,
    d(c) {
      c && k(e), s = !1, i();
    }
  };
}
function Dt(n, e, t) {
  let r, { value: o } = e;
  const s = () => {
    t(0, o = !o);
  };
  return n.$$set = (i) => {
    "value" in i && t(0, o = i.value);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    1 && t(1, r = o.toString());
  }, [o, r, s];
}
class qe extends A {
  constructor(e) {
    super(), M(this, e, Dt, Zt, B, { value: 0 }, Ft);
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), L();
  }
}
q(qe, { value: {} }, [], [], !0);
function Pt(n) {
  H(n, "sv-mbt52q", 'dl.sv-mbt52q.sv-mbt52q{margin:0;display:flex;align-items:center;gap:0 6px}dl.sv-mbt52q dt.sv-mbt52q{position:relative;box-sizing:border-box}dl.sv-mbt52q dd.sv-mbt52q{display:flex;align-items:center;gap:0 3px;margin:0;box-sizing:border-box;font-size:var(--json-editor-font-size);--label-min-width:72px}dl.sv-mbt52q dd.sv-mbt52q:before{content:":"}ul.sv-mbt52q.sv-mbt52q{position:relative;display:none;margin:6px 0 0;padding:0 0 0 30px;list-style:none;gap:6px 0}ul.sv-mbt52q.sv-mbt52q:before{content:"";display:block;position:absolute;left:11px;top:0;bottom:11px;width:4px;border-width:0 0 0 1px;border-style:dashed;border-color:hsl(0, 0%, 72%)}ul.sv-mbt52q.sv-mbt52q:after{content:"";display:block;position:absolute;left:9px;bottom:10px;width:5px;height:5px;background:hsl(0, 0%, 72%);border-radius:50%}ul.show.sv-mbt52q.sv-mbt52q{display:grid}');
}
function ye(n, e, t) {
  const r = n.slice();
  return r[16] = e[t].key, r[17] = e[t].value, r;
}
function Rt(n) {
  let e, t, r, o;
  const s = [Kt, Ut], i = [];
  function c(l, a) {
    return (
      /*parentType*/
      l[2] === "array" ? 0 : 1
    );
  }
  return e = c(n), t = i[e] = s[e](n), {
    c() {
      t.c(), r = se();
    },
    m(l, a) {
      i[e].m(l, a), w(l, r, a), o = !0;
    },
    p(l, a) {
      let f = e;
      e = c(l), e === f ? i[e].p(l, a) : (F(), g(i[f], 1, 1, () => {
        i[f] = null;
      }), Z(), t = i[e], t ? t.p(l, a) : (t = i[e] = s[e](l), t.c()), m(t, 1), t.m(r.parentNode, r));
    },
    i(l) {
      o || (m(t), o = !0);
    },
    o(l) {
      g(t), o = !1;
    },
    d(l) {
      l && k(r), i[e].d(l);
    }
  };
}
function It(n) {
  let e, t;
  return e = new te({
    props: {
      type: (
        /*type*/
        n[7]
      ),
      fold: (
        /*fold*/
        n[4]
      ),
      count: (
        /*children*/
        n[8].length
      ),
      label: (
        /*keyName*/
        n[3]
      ),
      labelType: "key",
      useFold: !0,
      useLabel: (
        /*parentType*/
        n[2] === "object"
      ),
      useCount: !0,
      useSort: !/*isRoot*/
      n[6]
    }
  }), e.$on(
    "fold",
    /*onChangeFold*/
    n[10]
  ), e.$on(
    "context",
    /*onOpenContext*/
    n[11]
  ), {
    c() {
      S(e.$$.fragment);
    },
    m(r, o) {
      T(e, r, o), t = !0;
    },
    p(r, o) {
      const s = {};
      o & /*fold*/
      16 && (s.fold = /*fold*/
      r[4]), o & /*keyName*/
      8 && (s.label = /*keyName*/
      r[3]), o & /*parentType*/
      4 && (s.useLabel = /*parentType*/
      r[2] === "object"), e.$set(s);
    },
    i(r) {
      t || (m(e.$$.fragment, r), t = !0);
    },
    o(r) {
      g(e.$$.fragment, r), t = !1;
    },
    d(r) {
      N(e, r);
    }
  };
}
function Ut(n) {
  let e, t;
  return e = new te({
    props: {
      type: (
        /*type*/
        n[7]
      ),
      label: (
        /*keyName*/
        n[3]
      ),
      labelType: "key",
      useFold: !1,
      useLabel: !0,
      useCount: !1,
      useSort: !0
    }
  }), e.$on(
    "fold",
    /*onChangeFold*/
    n[10]
  ), e.$on(
    "context",
    /*onOpenContext*/
    n[11]
  ), {
    c() {
      S(e.$$.fragment);
    },
    m(r, o) {
      T(e, r, o), t = !0;
    },
    p(r, o) {
      const s = {};
      o & /*keyName*/
      8 && (s.label = /*keyName*/
      r[3]), e.$set(s);
    },
    i(r) {
      t || (m(e.$$.fragment, r), t = !0);
    },
    o(r) {
      g(e.$$.fragment, r), t = !1;
    },
    d(r) {
      N(e, r);
    }
  };
}
function Kt(n) {
  let e, t;
  return e = new te({
    props: {
      type: (
        /*type*/
        n[7]
      ),
      useFold: !1,
      useLabel: !1,
      useCount: !1,
      useSort: !0
    }
  }), e.$on(
    "fold",
    /*onChangeFold*/
    n[10]
  ), e.$on(
    "context",
    /*onOpenContext*/
    n[11]
  ), {
    c() {
      S(e.$$.fragment);
    },
    m(r, o) {
      T(e, r, o), t = !0;
    },
    p: x,
    i(r) {
      t || (m(e.$$.fragment, r), t = !0);
    },
    o(r) {
      g(e.$$.fragment, r), t = !1;
    },
    d(r) {
      N(e, r);
    }
  };
}
function ke(n) {
  let e, t;
  return e = new Me({}), e.$on(
    "close",
    /*onCloseContext*/
    n[12]
  ), {
    c() {
      S(e.$$.fragment);
    },
    m(r, o) {
      T(e, r, o), t = !0;
    },
    p: x,
    i(r) {
      t || (m(e.$$.fragment, r), t = !0);
    },
    o(r) {
      g(e.$$.fragment, r), t = !1;
    },
    d(r) {
      N(e, r);
    }
  };
}
function Jt(n) {
  let e, t, r, o;
  const s = [Qt, Gt, Xt], i = [];
  function c(l, a) {
    return (
      /*type*/
      l[7] === "null" ? 0 : (
        /*type*/
        l[7] === "boolean" ? 1 : 2
      )
    );
  }
  return t = c(n), r = i[t] = s[t](n), {
    c() {
      e = y("dd"), r.c(), u(e, "class", "sv-mbt52q");
    },
    m(l, a) {
      w(l, e, a), i[t].m(e, null), o = !0;
    },
    p(l, a) {
      r.p(l, a);
    },
    i(l) {
      o || (m(r), o = !0);
    },
    o(l) {
      g(r), o = !1;
    },
    d(l) {
      l && k(e), i[t].d();
    }
  };
}
function Xt(n) {
  let e, t, r;
  function o(i) {
    n[14](i);
  }
  let s = { mode: "value", type: (
    /*type*/
    n[7]
  ) };
  return (
    /*data*/
    n[0] !== void 0 && (s.value = /*data*/
    n[0]), e = new fe({ props: s }), R.push(() => ae(e, "value", o)), {
      c() {
        S(e.$$.fragment);
      },
      m(i, c) {
        T(e, i, c), r = !0;
      },
      p(i, c) {
        const l = {};
        !t && c & /*data*/
        1 && (t = !0, l.value = /*data*/
        i[0], ce(() => t = !1)), e.$set(l);
      },
      i(i) {
        r || (m(e.$$.fragment, i), r = !0);
      },
      o(i) {
        g(e.$$.fragment, i), r = !1;
      },
      d(i) {
        N(e, i);
      }
    }
  );
}
function Gt(n) {
  let e, t, r;
  function o(i) {
    n[13](i);
  }
  let s = {};
  return (
    /*data*/
    n[0] !== void 0 && (s.value = /*data*/
    n[0]), e = new qe({ props: s }), R.push(() => ae(e, "value", o)), {
      c() {
        S(e.$$.fragment);
      },
      m(i, c) {
        T(e, i, c), r = !0;
      },
      p(i, c) {
        const l = {};
        !t && c & /*data*/
        1 && (t = !0, l.value = /*data*/
        i[0], ce(() => t = !1)), e.$set(l);
      },
      i(i) {
        r || (m(e.$$.fragment, i), r = !0);
      },
      o(i) {
        g(e.$$.fragment, i), r = !1;
      },
      d(i) {
        N(e, i);
      }
    }
  );
}
function Qt(n) {
  let e, t;
  return e = new de({}), {
    c() {
      S(e.$$.fragment);
    },
    m(r, o) {
      T(e, r, o), t = !0;
    },
    p: x,
    i(r) {
      t || (m(e.$$.fragment, r), t = !0);
    },
    o(r) {
      g(e.$$.fragment, r), t = !1;
    },
    d(r) {
      N(e, r);
    }
  };
}
function Wt(n) {
  let e, t, r = be(
    /*children*/
    n[8]
  ), o = [];
  for (let i = 0; i < r.length; i += 1)
    o[i] = we(ye(n, r, i));
  const s = (i) => g(o[i], 1, 1, () => {
    o[i] = null;
  });
  return {
    c() {
      e = y("ul");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      u(e, "class", "sv-mbt52q"), z(
        e,
        "show",
        /*fold*/
        n[4]
      );
    },
    m(i, c) {
      w(i, e, c);
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(e, null);
      t = !0;
    },
    p(i, c) {
      if (c & /*root, type, children*/
      386) {
        r = be(
          /*children*/
          i[8]
        );
        let l;
        for (l = 0; l < r.length; l += 1) {
          const a = ye(i, r, l);
          o[l] ? (o[l].p(a, c), m(o[l], 1)) : (o[l] = we(a), o[l].c(), m(o[l], 1), o[l].m(e, null));
        }
        for (F(), l = r.length; l < o.length; l += 1)
          s(l);
        Z();
      }
      (!t || c & /*fold*/
      16) && z(
        e,
        "show",
        /*fold*/
        i[4]
      );
    },
    i(i) {
      if (!t) {
        for (let c = 0; c < r.length; c += 1)
          m(o[c]);
        t = !0;
      }
    },
    o(i) {
      o = o.filter(Boolean);
      for (let c = 0; c < o.length; c += 1)
        g(o[c]);
      t = !1;
    },
    d(i) {
      i && k(e), Pe(o, i);
    }
  };
}
function we(n) {
  let e, t;
  return e = new he({
    props: {
      root: (
        /*root*/
        n[1]
      ),
      parentType: (
        /*type*/
        n[7]
      ),
      keyName: (
        /*key*/
        n[16]
      ),
      data: (
        /*value*/
        n[17]
      )
    }
  }), {
    c() {
      S(e.$$.fragment);
    },
    m(r, o) {
      T(e, r, o), t = !0;
    },
    p(r, o) {
      const s = {};
      o & /*root*/
      2 && (s.root = /*root*/
      r[1]), e.$set(s);
    },
    i(r) {
      t || (m(e.$$.fragment, r), t = !0);
    },
    o(r) {
      g(e.$$.fragment, r), t = !1;
    },
    d(r) {
      N(e, r);
    }
  };
}
function Yt(n) {
  var h;
  let e, t, r, o, s, i, c, l, a;
  const f = [It, Rt], b = [];
  function $(C, j) {
    return (
      /*type*/
      C[7] === "object" || /*type*/
      C[7] === "array" ? 0 : (
        /*type*/
        C[7] === "string" || /*type*/
        C[7] === "number" || /*type*/
        C[7] === "boolean" || /*type*/
        C[7] === "null" ? 1 : -1
      )
    );
  }
  ~(o = $(n)) && (s = b[o] = f[o](n));
  let d = (
    /*context*/
    n[5] && ke(n)
  ), _ = (
    /*useValue*/
    n[9] && Jt(n)
  ), v = (
    /*children*/
    ((h = n[8]) == null ? void 0 : h.length) > 0 && Wt(n)
  );
  return {
    c() {
      e = y(/*isRoot*/
      n[6] ? "div" : "li"), t = y("dl"), r = y("dt"), s && s.c(), i = V(), d && d.c(), c = V(), _ && _.c(), l = V(), v && v.c(), u(r, "class", "sv-mbt52q"), u(t, "class", "sv-mbt52q"), Xe(/*isRoot*/
      n[6] ? "div" : "li")(e, {
        class: "item sv-mbt52q",
        "data-type": (
          /*type*/
          n[7]
        )
      });
    },
    m(C, j) {
      w(C, e, j), p(e, t), p(t, r), ~o && b[o].m(r, null), p(r, i), d && d.m(r, null), p(r, c), _ && _.m(t, null), p(e, l), v && v.m(e, null), a = !0;
    },
    p(C, j) {
      var me;
      s && s.p(C, j), /*context*/
      C[5] ? d ? (d.p(C, j), j & /*context*/
      32 && m(d, 1)) : (d = ke(C), d.c(), m(d, 1), d.m(r, c)) : d && (F(), g(d, 1, 1, () => {
        d = null;
      }), Z()), /*useValue*/
      C[9] && _.p(C, j), /*children*/
      ((me = C[8]) == null ? void 0 : me.length) > 0 && v.p(C, j);
    },
    i(C) {
      a || (m(s), m(d), m(_), m(v), a = !0);
    },
    o(C) {
      g(s), g(d), g(_), g(v), a = !1;
    },
    d(C) {
      C && k(e), ~o && b[o].d(), d && d.d(), _ && _.d(), v && v.d();
    }
  };
}
function en(n) {
  let e = (/*isRoot*/
  n[6] ? "div" : "li") && Yt(n);
  return {
    c() {
      e && e.c();
    },
    m(t, r) {
      e && e.m(t, r);
    },
    p(t, [r]) {
      /*isRoot*/
      t[6], e.p(t, r);
    },
    i: x,
    o(t) {
      g(e, t);
    },
    d(t) {
      e && e.d(t);
    }
  };
}
function tn(n, e) {
  switch (e) {
    case "object":
      return Object.entries(n).map(([t, r]) => ({ key: t, value: r }));
    case "array":
      return n.map((t, r) => ({ key: r, value: t }));
    default:
      return [];
  }
}
function nn(n, e) {
  switch (e) {
    case "string":
    case "number":
    case "boolean":
    case "null":
      return !0;
    default:
      return !1;
  }
}
function rn(n, e, t) {
  let { root: r } = e, { data: o } = e, { parentType: s } = e, { keyName: i = "" } = e, c = !s, l = !0, a, f = Te(o), b = tn(o, f), $ = nn(s, f);
  function d({ detail: j }) {
    t(4, l = j);
  }
  function _(j) {
    if (j.detail, a !== void 0) {
      v();
      return;
    }
    t(5, a = {});
  }
  function v(j) {
    t(5, a = void 0);
  }
  function h(j) {
    o = j, t(0, o);
  }
  function C(j) {
    o = j, t(0, o);
  }
  return n.$$set = (j) => {
    "root" in j && t(1, r = j.root), "data" in j && t(0, o = j.data), "parentType" in j && t(2, s = j.parentType), "keyName" in j && t(3, i = j.keyName);
  }, [
    o,
    r,
    s,
    i,
    l,
    a,
    c,
    f,
    b,
    $,
    d,
    _,
    v,
    h,
    C
  ];
}
class he extends A {
  constructor(e) {
    super(), M(
      this,
      e,
      rn,
      en,
      B,
      {
        root: 1,
        data: 0,
        parentType: 2,
        keyName: 3
      },
      Pt
    );
  }
  get root() {
    return this.$$.ctx[1];
  }
  set root(e) {
    this.$$set({ root: e }), L();
  }
  get data() {
    return this.$$.ctx[0];
  }
  set data(e) {
    this.$$set({ data: e }), L();
  }
  get parentType() {
    return this.$$.ctx[2];
  }
  set parentType(e) {
    this.$$set({ parentType: e }), L();
  }
  get keyName() {
    return this.$$.ctx[3];
  }
  set keyName(e) {
    this.$$set({ keyName: e }), L();
  }
}
q(he, { root: {}, data: {}, parentType: {}, keyName: {} }, [], [], !0);
function on(n) {
  H(n, "sv-1u20ram", '.json-editor.sv-1u20ram{--json-editor-font-base:-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";--json-editor-font-eng:"Helvetica Neue", sans-serif;--json-editor-color-base:hsl(0 0% 13%);--json-editor-color-blur:hsl(0 0% 67%);--json-editor-color-object:hsl(174 66% 39%);--json-editor-color-array:hsl(191 75% 53%);--json-editor-color-string:hsl(5 87% 59%);--json-editor-color-number:hsl(33 89% 55%);--json-editor-color-boolean:hsl(45 89% 54%);--json-editor-color-null:hsl(0 0% 58%);--json-editor-color-active:hsla(0 0% 0% / 6%);--json-editor-color-focus:hsl(5 87% 59%);--json-editor-font-size:13px;font-family:var(--json-editor-font-base);color:var(--json-editor-color-base);font-size:16px;line-height:1.15}');
}
function sn(n) {
  let e, t;
  return e = new he({
    props: {
      root: (
        /*root*/
        n[1]
      ),
      parentType: void 0,
      keyName: void 0,
      data: (
        /*data*/
        n[0]
      )
    }
  }), {
    c() {
      S(e.$$.fragment);
    },
    m(r, o) {
      T(e, r, o), t = !0;
    },
    p(r, o) {
      const s = {};
      o & /*root*/
      2 && (s.root = /*root*/
      r[1]), o & /*data*/
      1 && (s.data = /*data*/
      r[0]), e.$set(s);
    },
    i(r) {
      t || (m(e.$$.fragment, r), t = !0);
    },
    o(r) {
      g(e.$$.fragment, r), t = !1;
    },
    d(r) {
      N(e, r);
    }
  };
}
function ln(n) {
  let e;
  return {
    c() {
      e = y("div"), e.textContent = ".error";
    },
    m(t, r) {
      w(t, e, r);
    },
    p: x,
    i: x,
    o: x,
    d(t) {
      t && k(e);
    }
  };
}
function un(n) {
  let e, t, r, o;
  const s = [ln, sn], i = [];
  function c(l, a) {
    return (
      /*error*/
      l[2] ? 0 : 1
    );
  }
  return t = c(n), r = i[t] = s[t](n), {
    c() {
      e = y("div"), r.c(), u(e, "class", "json-editor sv-1u20ram");
    },
    m(l, a) {
      w(l, e, a), i[t].m(e, null), n[4](e), o = !0;
    },
    p(l, [a]) {
      let f = t;
      t = c(l), t === f ? i[t].p(l, a) : (F(), g(i[f], 1, 1, () => {
        i[f] = null;
      }), Z(), r = i[t], r ? r.p(l, a) : (r = i[t] = s[t](l), r.c()), m(r, 1), r.m(e, null));
    },
    i(l) {
      o || (m(r), o = !0);
    },
    o(l) {
      g(r), o = !1;
    },
    d(l) {
      l && k(e), i[t].d(), n[4](null);
    }
  };
}
function xe({ detail: n }) {
  const { foo: e } = n;
  console.log("onRootEvent", n, e);
}
function cn(n, e, t) {
  let { data: r } = e, o, s, i, c;
  ze(() => {
    o.addEventListener("json-editor", xe);
  }), Le(() => {
    console.log("on destroy json-editor"), o.removeEventListener("json-editor", xe);
  });
  function l(a) {
    R[a ? "unshift" : "push"](() => {
      o = a, t(1, o);
    });
  }
  return n.$$set = (a) => {
    "data" in a && t(0, r = a.data);
  }, n.$$.update = () => {
    if (n.$$.dirty & /*data, type*/
    9)
      try {
        switch (typeof r == "string" && t(0, r = JSON.parse(r)), t(3, s = Te(r)), s) {
          case "object":
            i = Object.entries(r).map(([a, f]) => ({ key: a, value: f }));
            break;
          case "array":
            i = r.map((a, f) => ({ key: f, value: a }));
            break;
        }
      } catch (a) {
        console.error("ERROR =>", a), t(2, c = { message: a.message });
      }
  }, [r, o, c, s, l];
}
class an extends A {
  constructor(e) {
    super(), M(this, e, cn, un, B, { data: 0 }, on);
  }
  get data() {
    return this.$$.ctx[0];
  }
  set data(e) {
    this.$$set({ data: e }), L();
  }
}
q(an, { data: { reflect: !0, type: "String", attribute: "data" } }, [], [], !1);
export {
  an as default
};