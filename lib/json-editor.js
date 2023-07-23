var Ye = Object.defineProperty;
var et = (n, e, t) => e in n ? Ye(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var F = (n, e, t) => (et(n, typeof e != "symbol" ? e + "" : e, t), t);
function z() {
}
function tt(n, e) {
  for (const t in e)
    n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function Ae(n) {
  return n();
}
function je() {
  return /* @__PURE__ */ Object.create(null);
}
function Y(n) {
  n.forEach(Ae);
}
function Re(n) {
  return typeof n == "function";
}
function I(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function nt(n) {
  return Object.keys(n).length === 0;
}
function ot(n, e, t, o) {
  if (n) {
    const r = Ve(n, e, t, o);
    return n[0](r);
  }
}
function Ve(n, e, t, o) {
  return n[1] && o ? tt(t.ctx.slice(), n[1](o(e))) : t.ctx;
}
function rt(n, e, t, o) {
  if (n[2] && o) {
    const r = n[2](o(t));
    if (e.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const l = [], i = Math.max(e.dirty.length, r.length);
      for (let u = 0; u < i; u += 1)
        l[u] = e.dirty[u] | r[u];
      return l;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function lt(n, e, t, o, r, l) {
  if (r) {
    const i = Ve(e, t, o, l);
    n.p(i, r);
  }
}
function it(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let o = 0; o < t; o++)
      e[o] = -1;
    return e;
  }
  return -1;
}
function j(n, e) {
  n.appendChild(e);
}
function A(n, e, t) {
  const o = st(n);
  if (!o.getElementById(e)) {
    const r = w("style");
    r.id = e, r.textContent = t, ut(o, r);
  }
}
function st(n) {
  if (!n)
    return document;
  const e = n.getRootNode ? n.getRootNode() : n.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : n.ownerDocument;
}
function ut(n, e) {
  return j(
    /** @type {Document} */
    n.head || n,
    e
  ), e.sheet;
}
function x(n, e, t) {
  n.insertBefore(e, t || null);
}
function y(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function fe(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function w(n) {
  return document.createElement(n);
}
function L(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function ee(n) {
  return document.createTextNode(n);
}
function H() {
  return ee(" ");
}
function Ze() {
  return ee("");
}
function P(n, e, t, o) {
  return n.addEventListener(e, t, o), () => n.removeEventListener(e, t, o);
}
function at(n) {
  return function(e) {
    return e.stopPropagation(), n.call(this, e);
  };
}
function c(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
const ct = ["width", "height"];
function ft(n, e) {
  const t = Object.getOwnPropertyDescriptors(n.__proto__);
  for (const o in e)
    e[o] == null ? n.removeAttribute(o) : o === "style" ? n.style.cssText = e[o] : o === "__value" ? n.value = n[o] = e[o] : t[o] && t[o].set && ct.indexOf(o) === -1 ? n[o] = e[o] : c(n, o, e[o]);
}
function dt(n, e) {
  Object.keys(e).forEach((t) => {
    bt(n, t, e[t]);
  });
}
function bt(n, e, t) {
  e in n ? n[e] = typeof n[e] == "boolean" && t === "" ? !0 : t : c(n, e, t);
}
function pt(n) {
  return /-/.test(n) ? dt : ft;
}
function ht(n) {
  return Array.from(n.childNodes);
}
function ie(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function k(n, e, t) {
  n.classList.toggle(e, !!t);
}
function mt(n, e, { bubbles: t = !1, cancelable: o = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: o });
}
function gt(n) {
  const e = {};
  return n.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
let ne;
function te(n) {
  ne = n;
}
function de() {
  if (!ne)
    throw new Error("Function called outside component initialization");
  return ne;
}
function De(n) {
  de().$$.on_mount.push(n);
}
function Fe(n) {
  de().$$.on_destroy.push(n);
}
function se() {
  const n = de();
  return (e, t, { cancelable: o = !1 } = {}) => {
    const r = n.$$.callbacks[e];
    if (r) {
      const l = mt(
        /** @type {string} */
        e,
        t,
        { cancelable: o }
      );
      return r.slice().forEach((i) => {
        i.call(n, l);
      }), !l.defaultPrevented;
    }
    return !0;
  };
}
function _t(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((o) => o.call(this, e));
}
const G = [], J = [];
let Q = [];
const ae = [], $t = /* @__PURE__ */ Promise.resolve();
let ce = !1;
function jt() {
  ce || (ce = !0, $t.then(C));
}
function le(n) {
  Q.push(n);
}
function be(n) {
  ae.push(n);
}
const ue = /* @__PURE__ */ new Set();
let q = 0;
function C() {
  if (q !== 0)
    return;
  const n = ne;
  do {
    try {
      for (; q < G.length; ) {
        const e = G[q];
        q++, te(e), wt(e.$$);
      }
    } catch (e) {
      throw G.length = 0, q = 0, e;
    }
    for (te(null), G.length = 0, q = 0; J.length; )
      J.pop()();
    for (let e = 0; e < Q.length; e += 1) {
      const t = Q[e];
      ue.has(t) || (ue.add(t), t());
    }
    Q.length = 0;
  } while (G.length);
  for (; ae.length; )
    ae.pop()();
  ce = !1, ue.clear(), te(n);
}
function wt(n) {
  if (n.fragment !== null) {
    n.update(), Y(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(le);
  }
}
function yt(n) {
  const e = [], t = [];
  Q.forEach((o) => n.indexOf(o) === -1 ? e.push(o) : t.push(o)), t.forEach((o) => o()), Q = e;
}
const oe = /* @__PURE__ */ new Set();
let K;
function O() {
  K = {
    r: 0,
    c: [],
    p: K
    // parent group
  };
}
function M() {
  K.r || Y(K.c), K = K.p;
}
function h(n, e) {
  n && n.i && (oe.delete(n), n.i(e));
}
function _(n, e, t, o) {
  if (n && n.o) {
    if (oe.has(n))
      return;
    oe.add(n), K.c.push(() => {
      oe.delete(n), o && (t && n.d(1), o());
    }), n.o(e);
  } else
    o && o();
}
function W(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function pe(n, e, t) {
  const o = n.$$.props[e];
  o !== void 0 && (n.$$.bound[o] = t, t(n.$$.ctx[o]));
}
function N(n) {
  n && n.c();
}
function S(n, e, t) {
  const { fragment: o, after_update: r } = n.$$;
  o && o.m(e, t), le(() => {
    const l = n.$$.on_mount.map(Ae).filter(Re);
    n.$$.on_destroy ? n.$$.on_destroy.push(...l) : Y(l), n.$$.on_mount = [];
  }), r.forEach(le);
}
function T(n, e) {
  const t = n.$$;
  t.fragment !== null && (yt(t.after_update), Y(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function vt(n, e) {
  n.$$.dirty[0] === -1 && (G.push(n), jt(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function R(n, e, t, o, r, l, i, u = [-1]) {
  const s = ne;
  te(n);
  const a = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: z,
    not_equal: r,
    bound: je(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (s ? s.$$.context : [])),
    // everything else
    callbacks: je(),
    dirty: u,
    skip_bound: !1,
    root: e.target || s.$$.root
  };
  i && i(a.root);
  let d = !1;
  if (a.ctx = t ? t(n, e.props || {}, (f, p, ...b) => {
    const g = b.length ? b[0] : p;
    return a.ctx && r(a.ctx[f], a.ctx[f] = g) && (!a.skip_bound && a.bound[f] && a.bound[f](g), d && vt(n, f)), p;
  }) : [], a.update(), d = !0, Y(a.before_update), a.fragment = o ? o(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = ht(e.target);
      a.fragment && a.fragment.l(f), f.forEach(y);
    } else
      a.fragment && a.fragment.c();
    e.intro && h(n.$$.fragment), S(n, e.target, e.anchor), C();
  }
  te(s);
}
let Pe;
typeof HTMLElement == "function" && (Pe = class extends HTMLElement {
  constructor(e, t, o) {
    super();
    /** The Svelte component constructor */
    F(this, "$$ctor");
    /** Slots */
    F(this, "$$s");
    /** The Svelte component instance */
    F(this, "$$c");
    /** Whether or not the custom element is connected */
    F(this, "$$cn", !1);
    /** Component props data */
    F(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    F(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    F(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    F(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    F(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = t, o && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, t, o) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const r = this.$$c.$on(e, t);
      this.$$l_u.set(t, r);
    }
    super.addEventListener(e, t, o);
  }
  removeEventListener(e, t, o) {
    if (super.removeEventListener(e, t, o), this.$$c) {
      const r = this.$$l_u.get(t);
      r && (r(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(l) {
        return () => {
          let i;
          return {
            c: function() {
              i = w("slot"), l !== "default" && c(i, "name", l);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(a, d) {
              x(a, i, d);
            },
            d: function(a) {
              a && y(i);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn)
        return;
      const t = {}, o = gt(this);
      for (const l of this.$$s)
        l in o && (t[l] = [e(l)]);
      for (const l of this.attributes) {
        const i = this.$$g_p(l.name);
        i in this.$$d || (this.$$d[i] = re(i, l.value, this.$$p_d, "toProp"));
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
      const r = () => {
        this.$$r = !0;
        for (const l in this.$$p_d)
          if (this.$$d[l] = this.$$c.$$.ctx[this.$$c.$$.props[l]], this.$$p_d[l].reflect) {
            const i = re(
              l,
              this.$$d[l],
              this.$$p_d,
              "toAttribute"
            );
            i == null ? this.removeAttribute(l) : this.setAttribute(this.$$p_d[l].attribute || l, i);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(r), r();
      for (const l in this.$$l)
        for (const i of this.$$l[l]) {
          const u = this.$$c.$on(l, i);
          this.$$l_u.set(i, u);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, t, o) {
    var r;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = re(e, o, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [e]: this.$$d[e] }));
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
function re(n, e, t, o) {
  var l;
  const r = (l = t[n]) == null ? void 0 : l.type;
  if (e = r === "Boolean" && typeof e != "boolean" ? e != null : e, !o || !t[n])
    return e;
  if (o === "toAttribute")
    switch (r) {
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
    switch (r) {
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
function V(n, e, t, o, r, l) {
  let i = class extends Pe {
    constructor() {
      super(n, t, r), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (u) => (e[u].attribute || u).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((u) => {
    Object.defineProperty(i.prototype, u, {
      get() {
        return this.$$c && u in this.$$c ? this.$$c[u] : this.$$d[u];
      },
      set(s) {
        var a;
        s = re(u, s, e), this.$$d[u] = s, (a = this.$$c) == null || a.$set({ [u]: s });
      }
    });
  }), o.forEach((u) => {
    Object.defineProperty(i.prototype, u, {
      get() {
        var s;
        return (s = this.$$c) == null ? void 0 : s[u];
      }
    });
  }), l && (i = l(i)), n.element = /** @type {any} */
  i, i;
}
class Z {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    F(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    F(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    T(this, 1), this.$destroy = z;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!Re(t))
      return z;
    const o = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return o.push(t), () => {
      const r = o.indexOf(t);
      r !== -1 && o.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !nt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const kt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(kt);
function Ue(n) {
  return n == null ? "null" : Array.isArray(n) ? "array" : typeof n == "string" ? "string" : typeof n == "number" ? "number" : typeof n == "boolean" ? "boolean" : "object";
}
function xt(n) {
  A(n, "je-1mapbmh", "svg.je-1mapbmh{display:block;box-sizing:border-box;color:var(--type-icon-color, var(--json-editor-color-base))}svg.object.je-1mapbmh{width:calc(var(--type-icon-size, 10px) + 1px)}svg.array.je-1mapbmh{width:var(--type-icon-size, 10px)}svg.string.je-1mapbmh{width:calc(var(--type-icon-size, 10px) - 2px)}svg.number.je-1mapbmh{width:calc(var(--type-icon-size, 10px) - 1px)}svg.boolean.je-1mapbmh{width:calc(var(--type-icon-size, 10px) - 3px)}svg.null.je-1mapbmh{width:calc(var(--type-icon-size, 10px) - 2px)}");
}
function Ct(n) {
  let e, t, o;
  return {
    c() {
      e = L("svg"), t = L("g"), o = L("path"), c(o, "d", "M3.808 10.15C1.694 10.15 0 8.848 0 6.412V0H1.932V6.272C1.932 7.574 2.66 8.26 3.808 8.26C4.984 8.26 5.698 7.574 5.698 6.272V0H7.63V6.412C7.63 8.848 5.936 10.15 3.808 10.15Z"), c(o, "fill", "currentColor"), c(t, "transform", "translate(0 1.5)"), c(e, "viewBox", "0 0 8 12"), c(e, "fill", "none"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "class", "null je-1mapbmh");
    },
    m(r, l) {
      x(r, e, l), j(e, t), j(t, o);
    },
    d(r) {
      r && y(e);
    }
  };
}
function zt(n) {
  let e, t, o;
  return {
    c() {
      e = L("svg"), t = L("g"), o = L("path"), c(o, "d", "M3.05176e-05 0H3.57003C5.50203 0 6.59403 1.134 6.59403 2.674C6.59403 3.696 5.97803 4.522 5.15203 4.802C6.11803 5.04 6.90203 5.922 6.90203 7.154C6.90203 8.764 5.69803 9.926 3.83603 9.926H3.05176e-05V0ZM1.90403 4.102H3.27603C4.15803 4.102 4.69003 3.612 4.69003 2.856C4.69003 2.1 4.20003 1.624 3.26203 1.624H1.90403V4.102ZM1.90403 8.316H3.47203C4.41003 8.316 4.97003 7.826 4.97003 7.028C4.97003 6.244 4.46603 5.698 3.50003 5.698H1.90403V8.316Z"), c(o, "fill", "currentColor"), c(t, "transform", "translate(0 .75)"), c(e, "viewBox", "0 0 7 11"), c(e, "fill", "none"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "class", "boolean je-1mapbmh");
    },
    m(r, l) {
      x(r, e, l), j(e, t), j(t, o);
    },
    d(r) {
      r && y(e);
    }
  };
}
function Lt(n) {
  let e, t, o;
  return {
    c() {
      e = L("svg"), t = L("g"), o = L("path"), c(o, "d", "M8.47003 9.926H6.44003L1.93203 2.884V9.926H3.05176e-05V0H2.40803L6.53803 6.566V0H8.47003V9.926Z"), c(o, "fill", "currentColor"), c(t, "transform", "translate(0 1)"), c(e, "viewBox", "0 0 9 11"), c(e, "fill", "none"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "class", "number je-1mapbmh");
    },
    m(r, l) {
      x(r, e, l), j(e, t), j(t, o);
    },
    d(r) {
      r && y(e);
    }
  };
}
function Et(n) {
  let e, t, o;
  return {
    c() {
      e = L("svg"), t = L("g"), o = L("path"), c(o, "d", "M7.39203 2.576L5.65603 3.108C5.55803 2.562 5.11003 1.708 3.85003 1.708C2.91203 1.708 2.29603 2.31 2.29603 2.968C2.29603 3.514 2.64603 3.948 3.37403 4.088L4.76003 4.354C6.56603 4.704 7.53203 5.88 7.53203 7.28C7.53203 8.806 6.25803 10.346 3.94803 10.346C1.31603 10.346 0.154031 8.652 3.05176e-05 7.238L1.79203 6.762C1.87603 7.742 2.56203 8.624 3.96203 8.624C4.99803 8.624 5.57203 8.106 5.57203 7.406C5.57203 6.832 5.13803 6.384 4.36803 6.23L2.98203 5.95C1.40003 5.628 0.378031 4.606 0.378031 3.108C0.378031 1.344 1.96003 0 3.83603 0C6.24403 0 7.16803 1.456 7.39203 2.576Z"), c(o, "fill", "currentColor"), c(t, "transform", "translate(0 1.5)"), c(e, "viewBox", "0 0 8 12"), c(e, "fill", "none"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "class", "string je-1mapbmh");
    },
    m(r, l) {
      x(r, e, l), j(e, t), j(t, o);
    },
    d(r) {
      r && y(e);
    }
  };
}
function St(n) {
  let e, t;
  return {
    c() {
      e = L("svg"), t = L("path"), c(t, "d", "M7.728 9.926L6.902 7.658H2.87L2.044 9.926H0L3.808 0H6.048L9.828 9.926H7.728ZM4.886 2.142L3.514 5.894H6.258L4.886 2.142Z"), c(t, "fill", "currentColor"), c(e, "viewBox", "0 0 10 10"), c(e, "fill", "none"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "class", "array je-1mapbmh");
    },
    m(o, r) {
      x(o, e, r), j(e, t);
    },
    d(o) {
      o && y(e);
    }
  };
}
function Tt(n) {
  let e, t, o;
  return {
    c() {
      e = L("svg"), t = L("g"), o = L("path"), c(o, "d", "M2.296 5.166C2.296 7.238 3.78 8.162 5.166 8.162C6.538 8.162 8.022 7.238 8.022 5.166C8.022 3.094 6.538 2.156 5.166 2.156C3.78 2.156 2.296 3.094 2.296 5.166ZM0 5.18C0 2.03 2.366 0 5.166 0C7.952 0 10.318 2.03 10.318 5.18C10.318 8.316 7.952 10.346 5.166 10.346C2.366 10.346 0 8.316 0 5.18Z"), c(o, "fill", "currentColor"), c(t, "transform", "translate(0 1)"), c(e, "viewBox", "0 0 11 12"), c(e, "fill", "none"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "class", "object je-1mapbmh");
    },
    m(r, l) {
      x(r, e, l), j(e, t), j(t, o);
    },
    d(r) {
      r && y(e);
    }
  };
}
function Nt(n) {
  let e;
  function t(l, i) {
    if (
      /*name*/
      l[0] === "object"
    )
      return Tt;
    if (
      /*name*/
      l[0] === "array"
    )
      return St;
    if (
      /*name*/
      l[0] === "string"
    )
      return Et;
    if (
      /*name*/
      l[0] === "number"
    )
      return Lt;
    if (
      /*name*/
      l[0] === "boolean"
    )
      return zt;
    if (
      /*name*/
      l[0] === "null"
    )
      return Ct;
  }
  let o = t(n), r = o && o(n);
  return {
    c() {
      r && r.c(), e = Ze();
    },
    m(l, i) {
      r && r.m(l, i), x(l, e, i);
    },
    p(l, [i]) {
      o !== (o = t(l)) && (r && r.d(1), r = o && o(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    i: z,
    o: z,
    d(l) {
      l && y(e), r && r.d(l);
    }
  };
}
function Bt(n, e, t) {
  let { name: o = "object" } = e;
  return n.$$set = (r) => {
    "name" in r && t(0, o = r.name);
  }, [o];
}
class Ke extends Z {
  constructor(e) {
    super(), R(this, e, Bt, Nt, I, { name: 0 }, xt);
  }
  get name() {
    return this.$$.ctx[0];
  }
  set name(e) {
    this.$$set({ name: e }), C();
  }
}
V(Ke, { name: {} }, [], [], !0);
function Ot(n) {
  A(n, "je-nueyac", "i.je-nueyac{display:grid;width:var(--type-size, 24px);height:var(--type-size, 24px);place-content:center;box-sizing:border-box;border-radius:4px;--type-icon-color:hsl(0 0% 100%)}i.object.je-nueyac{background:var(--json-editor-color-object)}i.array.je-nueyac{background:var(--json-editor-color-array)}i.string.je-nueyac{background:var(--json-editor-color-string)}i.number.je-nueyac{background:var(--json-editor-color-number)}i.boolean.je-nueyac{background:var(--json-editor-color-boolean)}i.null.je-nueyac{background:var(--json-editor-color-null)}");
}
function Mt(n) {
  let e, t, o;
  return t = new Ke({ props: { name: (
    /*name*/
    n[0]
  ) } }), {
    c() {
      e = w("i"), N(t.$$.fragment), c(e, "class", "je-nueyac"), k(
        e,
        "object",
        /*name*/
        n[0] === "object"
      ), k(
        e,
        "array",
        /*name*/
        n[0] === "array"
      ), k(
        e,
        "string",
        /*name*/
        n[0] === "string"
      ), k(
        e,
        "number",
        /*name*/
        n[0] === "number"
      ), k(
        e,
        "boolean",
        /*name*/
        n[0] === "boolean"
      ), k(
        e,
        "null",
        /*name*/
        n[0] === "null"
      );
    },
    m(r, l) {
      x(r, e, l), S(t, e, null), o = !0;
    },
    p(r, [l]) {
      const i = {};
      l & /*name*/
      1 && (i.name = /*name*/
      r[0]), t.$set(i), (!o || l & /*name*/
      1) && k(
        e,
        "object",
        /*name*/
        r[0] === "object"
      ), (!o || l & /*name*/
      1) && k(
        e,
        "array",
        /*name*/
        r[0] === "array"
      ), (!o || l & /*name*/
      1) && k(
        e,
        "string",
        /*name*/
        r[0] === "string"
      ), (!o || l & /*name*/
      1) && k(
        e,
        "number",
        /*name*/
        r[0] === "number"
      ), (!o || l & /*name*/
      1) && k(
        e,
        "boolean",
        /*name*/
        r[0] === "boolean"
      ), (!o || l & /*name*/
      1) && k(
        e,
        "null",
        /*name*/
        r[0] === "null"
      );
    },
    i(r) {
      o || (h(t.$$.fragment, r), o = !0);
    },
    o(r) {
      _(t.$$.fragment, r), o = !1;
    },
    d(r) {
      r && y(e), T(t);
    }
  };
}
function Ht(n, e, t) {
  let { name: o = "object" } = e;
  return n.$$set = (r) => {
    "name" in r && t(0, o = r.name);
  }, [o];
}
class he extends Z {
  constructor(e) {
    super(), R(this, e, Ht, Mt, I, { name: 0 }, Ot);
  }
  get name() {
    return this.$$.ctx[0];
  }
  set name(e) {
    this.$$set({ name: e }), C();
  }
}
V(he, { name: {} }, [], [], !0);
function It(n) {
  A(n, "je-b4rfk7", "button.je-b4rfk7{display:block;width:32px;height:32px;margin:-8px;padding:0;background:none;border:none;box-sizing:border-box;cursor:pointer}button.je-b4rfk7:active{opacity:0.5}button.je-b4rfk7:focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-6px}svg.je-b4rfk7{display:block;margin:0 auto;width:var(--fold-arrow-size, 20px);rotate:0deg;box-sizing:border-box;transition:rotate, 160ms ease-out}svg.open.je-b4rfk7{rotate:90deg}");
}
function At(n) {
  let e, t, o, r, l, i, u;
  return {
    c() {
      e = w("button"), t = L("svg"), o = L("g"), r = L("path"), l = L("path"), c(r, "d", "M7 9L10 12L13 9"), c(r, "fill", "currentColor"), c(l, "d", "M7 9L10 12L13 9H7Z"), c(l, "stroke", "currentColor"), c(l, "stroke-width", "2"), c(l, "stroke-linecap", "round"), c(l, "stroke-linejoin", "round"), c(o, "transform", "rotate(-90, 10, 10)"), c(t, "viewBox", "0 0 20 20"), c(t, "fill", "none"), c(t, "xmlns", "http://www.w3.org/2000/svg"), c(t, "class", "je-b4rfk7"), k(
        t,
        "open",
        /*open*/
        n[0]
      ), c(e, "type", "button"), c(e, "class", "je-b4rfk7");
    },
    m(s, a) {
      x(s, e, a), j(e, t), j(t, o), j(o, r), j(o, l), i || (u = P(
        e,
        "click",
        /*onClickButton*/
        n[1]
      ), i = !0);
    },
    p(s, [a]) {
      a & /*open*/
      1 && k(
        t,
        "open",
        /*open*/
        s[0]
      );
    },
    i: z,
    o: z,
    d(s) {
      s && y(e), i = !1, u();
    }
  };
}
function Rt(n, e, t) {
  const o = se();
  let { open: r = !1 } = e;
  function l() {
    o("click");
  }
  return n.$$set = (i) => {
    "open" in i && t(0, r = i.open);
  }, [r, l];
}
class Je extends Z {
  constructor(e) {
    super(), R(this, e, Rt, At, I, { open: 0 }, It);
  }
  get open() {
    return this.$$.ctx[0];
  }
  set open(e) {
    this.$$set({ open: e }), C();
  }
}
V(Je, { open: { type: "Boolean" } }, [], [], !0);
function Vt(n) {
  A(n, "je-gs2urc", "svg.je-gs2urc{display:block;width:24px}");
}
function Zt(n) {
  let e, t, o, r;
  return {
    c() {
      e = L("svg"), t = L("path"), o = L("path"), r = L("path"), c(t, "d", "M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"), c(t, "stroke", "currentColor"), c(t, "stroke-linecap", "round"), c(t, "stroke-linejoin", "round"), c(o, "d", "M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z"), c(o, "stroke", "currentColor"), c(o, "stroke-linecap", "round"), c(o, "stroke-linejoin", "round"), c(r, "d", "M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z"), c(r, "stroke", "currentColor"), c(r, "stroke-linecap", "round"), c(r, "stroke-linejoin", "round"), c(e, "viewBox", "0 0 24 24"), c(e, "fill", "none"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "class", "je-gs2urc");
    },
    m(l, i) {
      x(l, e, i), j(e, t), j(e, o), j(e, r);
    },
    p: z,
    i: z,
    o: z,
    d(l) {
      l && y(e);
    }
  };
}
class Xe extends Z {
  constructor(e) {
    super(), R(this, e, null, Zt, I, {}, Vt);
  }
}
V(Xe, {}, [], [], !0);
function Dt(n) {
  A(n, "je-1z00s46", "div.je-1z00s46{display:block;margin:-4px 0;padding:4px 6px;min-width:var(--label-min-width, unset);min-height:24px;outline:none;font-size:var(--json-editor-font-size);line-height:1.42;box-sizing:border-box;border-radius:2px;background-color:hsla(0, 0%, 0%, 0);box-shadow:0 0 0 0.5px hsla(0, 0%, 0%, 0);transition:background-color 160ms ease-out, box-shadow 200ms ease-out;cursor:text}div.key.je-1z00s46{display:flex}div.je-1z00s46:hover,div.je-1z00s46:focus{background-color:var(--json-editor-color-active)}div.je-1z00s46:focus{box-shadow:0 0 0 0.5px hsla(0, 0%, 0%, 0.25)}div.je-1z00s46:empty:before{content:attr(data-placeholder);color:var(--json-editor-color-blur)}");
}
function Ft(n) {
  let e, t, o;
  return {
    c() {
      e = w("div"), c(e, "contenteditable", "true"), c(
        e,
        "data-placeholder",
        /*placeholder*/
        n[2]
      ), c(e, "class", "je-1z00s46"), /*value*/
      n[0] === void 0 && le(() => (
        /*div_input_handler*/
        n[6].call(e)
      )), k(
        e,
        "value",
        /*mode*/
        n[1] === "value"
      ), k(
        e,
        "key",
        /*mode*/
        n[1] === "key"
      );
    },
    m(r, l) {
      x(r, e, l), /*value*/
      n[0] !== void 0 && (e.innerText = /*value*/
      n[0]), t || (o = [
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
    p(r, [l]) {
      l & /*placeholder*/
      4 && c(
        e,
        "data-placeholder",
        /*placeholder*/
        r[2]
      ), l & /*value*/
      1 && /*value*/
      r[0] !== e.innerText && (e.innerText = /*value*/
      r[0]), l & /*mode*/
      2 && k(
        e,
        "value",
        /*mode*/
        r[1] === "value"
      ), l & /*mode*/
      2 && k(
        e,
        "key",
        /*mode*/
        r[1] === "key"
      );
    },
    i: z,
    o: z,
    d(r) {
      r && y(e), t = !1, Y(o);
    }
  };
}
function Pt(n, e, t) {
  let { mode: o = "value" } = e, { value: r = "" } = e, { placeholder: l = "empty" } = e, { type: i = "" } = e;
  function u(d) {
    if (o === "key" && d.keyCode === 13)
      return d.preventDefault();
    if (d.ctrlKey || d.metaKey)
      switch (d.keyCode) {
        case 66:
        case 98:
          d.preventDefault();
          break;
        case 73:
        case 105:
          d.preventDefault();
          break;
        case 85:
        case 117:
          d.preventDefault();
          break;
      }
  }
  function s(d) {
    if (i === "number") {
      if (d.code === "Period")
        return r.indexOf(".") > -1 ? d.preventDefault() : void 0;
      if (isNaN(String.fromCharCode(d.which)))
        return d.preventDefault();
    }
  }
  function a() {
    r = this.innerText, t(0, r);
  }
  return n.$$set = (d) => {
    "mode" in d && t(1, o = d.mode), "value" in d && t(0, r = d.value), "placeholder" in d && t(2, l = d.placeholder), "type" in d && t(5, i = d.type);
  }, [r, o, l, u, s, i, a];
}
class me extends Z {
  constructor(e) {
    super(), R(
      this,
      e,
      Pt,
      Ft,
      I,
      {
        mode: 1,
        value: 0,
        placeholder: 2,
        type: 5
      },
      Dt
    );
  }
  get mode() {
    return this.$$.ctx[1];
  }
  set mode(e) {
    this.$$set({ mode: e }), C();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), C();
  }
  get placeholder() {
    return this.$$.ctx[2];
  }
  set placeholder(e) {
    this.$$set({ placeholder: e }), C();
  }
  get type() {
    return this.$$.ctx[5];
  }
  set type(e) {
    this.$$set({ type: e }), C();
  }
}
V(me, { mode: {}, value: {}, placeholder: {}, type: {} }, [], [], !0);
function Ut(n) {
  A(n, "je-18p5lty", "em.je-18p5lty{display:block;padding:0 6px;color:var(--json-editor-color-blur);font-style:normal;letter-spacing:-0.5px;user-select:none;font-size:var(--json-editor-font-size)}");
}
function Kt(n) {
  let e;
  return {
    c() {
      e = w("em"), e.textContent = "NULL", c(e, "class", "label-null je-18p5lty");
    },
    m(t, o) {
      x(t, e, o);
    },
    p: z,
    i: z,
    o: z,
    d(t) {
      t && y(e);
    }
  };
}
class ge extends Z {
  constructor(e) {
    super(), R(this, e, null, Kt, I, {}, Ut);
  }
}
V(ge, {}, [], [], !0);
function Jt(n) {
  A(n, "je-8v0uwd", ".item-key.je-8v0uwd.je-8v0uwd{display:flex;align-items:center;justify-content:flex-start;gap:0}.sort.je-8v0uwd.je-8v0uwd{display:block;box-sizing:border-box;cursor:move;padding:0 4px 0 0}.fold.je-8v0uwd.je-8v0uwd{margin:0 0 0 5px}.type.je-8v0uwd.je-8v0uwd{display:block;margin:-2px -2px -2px -4px;padding:2px;box-sizing:border-box;border:none;background:none;outline:none;cursor:pointer;transition:opacity 120ms ease-out;border-radius:6px}.type.je-8v0uwd.je-8v0uwd:active{opacity:0.5}.type.je-8v0uwd.je-8v0uwd:focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-1px}.type.open.je-8v0uwd.je-8v0uwd{opacity:0.25}.label.je-8v0uwd.je-8v0uwd{margin:0 0 0 6px;--label-min-width:42px}.count.je-8v0uwd.je-8v0uwd{display:block;margin:0;pointer-events:none;padding:0 0 0 6px}.count.je-8v0uwd em.je-8v0uwd{display:block;color:var(--json-editor-color-blur);font-style:normal;user-select:none;font-size:14px}");
}
function we(n) {
  let e, t, o;
  return t = new Xe({}), {
    c() {
      e = w("div"), N(t.$$.fragment), c(e, "class", "sort je-8v0uwd");
    },
    m(r, l) {
      x(r, e, l), S(t, e, null), o = !0;
    },
    i(r) {
      o || (h(t.$$.fragment, r), o = !0);
    },
    o(r) {
      _(t.$$.fragment, r), o = !1;
    },
    d(r) {
      r && y(e), T(t);
    }
  };
}
function ye(n) {
  let e, t, o;
  return t = new Je({ props: { open: (
    /*fold*/
    n[2]
  ) } }), t.$on(
    "click",
    /*onClickFold*/
    n[10]
  ), {
    c() {
      e = w("p"), N(t.$$.fragment), c(e, "class", "fold je-8v0uwd");
    },
    m(r, l) {
      x(r, e, l), S(t, e, null), o = !0;
    },
    p(r, l) {
      const i = {};
      l & /*fold*/
      4 && (i.open = /*fold*/
      r[2]), t.$set(i);
    },
    i(r) {
      o || (h(t.$$.fragment, r), o = !0);
    },
    o(r) {
      _(t.$$.fragment, r), o = !1;
    },
    d(r) {
      r && y(e), T(t);
    }
  };
}
function ve(n) {
  let e, t, o, r;
  const l = [qt, Xt], i = [];
  function u(s, a) {
    return (
      /*labelType*/
      s[4] === "null" ? 0 : 1
    );
  }
  return e = u(n), t = i[e] = l[e](n), {
    c() {
      t.c(), o = Ze();
    },
    m(s, a) {
      i[e].m(s, a), x(s, o, a), r = !0;
    },
    p(s, a) {
      let d = e;
      e = u(s), e === d ? i[e].p(s, a) : (O(), _(i[d], 1, 1, () => {
        i[d] = null;
      }), M(), t = i[e], t ? t.p(s, a) : (t = i[e] = l[e](s), t.c()), h(t, 1), t.m(o.parentNode, o));
    },
    i(s) {
      r || (h(t), r = !0);
    },
    o(s) {
      _(t), r = !1;
    },
    d(s) {
      s && y(o), i[e].d(s);
    }
  };
}
function Xt(n) {
  let e, t, o, r;
  function l(u) {
    n[12](u);
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
    n[0]), t = new me({ props: i }), J.push(() => pe(t, "value", l)), {
      c() {
        e = w("div"), N(t.$$.fragment), c(e, "class", "label je-8v0uwd");
      },
      m(u, s) {
        x(u, e, s), S(t, e, null), r = !0;
      },
      p(u, s) {
        const a = {};
        s & /*labelType*/
        16 && (a.mode = /*labelType*/
        u[4]), s & /*type*/
        2 && (a.type = /*type*/
        u[1]), !o && s & /*label*/
        1 && (o = !0, a.value = /*label*/
        u[0], be(() => o = !1)), t.$set(a);
      },
      i(u) {
        r || (h(t.$$.fragment, u), r = !0);
      },
      o(u) {
        _(t.$$.fragment, u), r = !1;
      },
      d(u) {
        u && y(e), T(t);
      }
    }
  );
}
function qt(n) {
  let e, t;
  return e = new ge({}), {
    c() {
      N(e.$$.fragment);
    },
    m(o, r) {
      S(e, o, r), t = !0;
    },
    p: z,
    i(o) {
      t || (h(e.$$.fragment, o), t = !0);
    },
    o(o) {
      _(e.$$.fragment, o), t = !1;
    },
    d(o) {
      T(e, o);
    }
  };
}
function ke(n) {
  let e;
  function t(l, i) {
    if (
      /*type*/
      l[1] === "array"
    )
      return Qt;
    if (
      /*type*/
      l[1] === "object"
    )
      return Gt;
  }
  let o = t(n), r = o && o(n);
  return {
    c() {
      e = w("p"), r && r.c(), c(e, "class", "count je-8v0uwd");
    },
    m(l, i) {
      x(l, e, i), r && r.m(e, null);
    },
    p(l, i) {
      o === (o = t(l)) && r ? r.p(l, i) : (r && r.d(1), r = o && o(l), r && (r.c(), r.m(e, null)));
    },
    d(l) {
      l && y(e), r && r.d();
    }
  };
}
function Gt(n) {
  let e, t = `{${/*count*/
  n[3]}}`, o;
  return {
    c() {
      e = w("em"), o = ee(t), c(e, "class", "je-8v0uwd");
    },
    m(r, l) {
      x(r, e, l), j(e, o);
    },
    p(r, l) {
      l & /*count*/
      8 && t !== (t = `{${/*count*/
      r[3]}}`) && ie(o, t);
    },
    d(r) {
      r && y(e);
    }
  };
}
function Qt(n) {
  let e, t = `[${/*count*/
  n[3]}]`, o;
  return {
    c() {
      e = w("em"), o = ee(t), c(e, "class", "je-8v0uwd");
    },
    m(r, l) {
      x(r, e, l), j(e, o);
    },
    p(r, l) {
      l & /*count*/
      8 && t !== (t = `[${/*count*/
      r[3]}]`) && ie(o, t);
    },
    d(r) {
      r && y(e);
    }
  };
}
function Wt(n) {
  let e, t, o, r, l, i, u, s, a, d, f = (
    /*useSort*/
    n[6] && we()
  );
  r = new he({ props: { name: (
    /*type*/
    n[1]
  ) } });
  let p = (
    /*useFold*/
    n[5] && ye(n)
  ), b = (
    /*useLabel*/
    n[7] && ve(n)
  ), g = (
    /*useCount*/
    n[8] && ke(n)
  );
  return {
    c() {
      e = w("div"), f && f.c(), t = H(), o = w("button"), N(r.$$.fragment), l = H(), p && p.c(), i = H(), b && b.c(), u = H(), g && g.c(), c(o, "type", "button"), c(o, "class", "type je-8v0uwd"), k(
        o,
        "open",
        /*openContext*/
        n[9]
      ), c(e, "class", "item-key je-8v0uwd");
    },
    m(m, v) {
      x(m, e, v), f && f.m(e, null), j(e, t), j(e, o), S(r, o, null), j(e, l), p && p.m(e, null), j(e, i), b && b.m(e, null), j(e, u), g && g.m(e, null), s = !0, a || (d = P(
        o,
        "click",
        /*onClickOpenContext*/
        n[11]
      ), a = !0);
    },
    p(m, [v]) {
      /*useSort*/
      m[6] ? f ? v & /*useSort*/
      64 && h(f, 1) : (f = we(), f.c(), h(f, 1), f.m(e, t)) : f && (O(), _(f, 1, 1, () => {
        f = null;
      }), M());
      const $ = {};
      v & /*type*/
      2 && ($.name = /*type*/
      m[1]), r.$set($), (!s || v & /*openContext*/
      512) && k(
        o,
        "open",
        /*openContext*/
        m[9]
      ), /*useFold*/
      m[5] ? p ? (p.p(m, v), v & /*useFold*/
      32 && h(p, 1)) : (p = ye(m), p.c(), h(p, 1), p.m(e, i)) : p && (O(), _(p, 1, 1, () => {
        p = null;
      }), M()), /*useLabel*/
      m[7] ? b ? (b.p(m, v), v & /*useLabel*/
      128 && h(b, 1)) : (b = ve(m), b.c(), h(b, 1), b.m(e, u)) : b && (O(), _(b, 1, 1, () => {
        b = null;
      }), M()), /*useCount*/
      m[8] ? g ? g.p(m, v) : (g = ke(m), g.c(), g.m(e, null)) : g && (g.d(1), g = null);
    },
    i(m) {
      s || (h(f), h(r.$$.fragment, m), h(p), h(b), s = !0);
    },
    o(m) {
      _(f), _(r.$$.fragment, m), _(p), _(b), s = !1;
    },
    d(m) {
      m && y(e), f && f.d(), T(r), p && p.d(), b && b.d(), g && g.d(), a = !1, d();
    }
  };
}
function Yt(n, e, t) {
  const o = se();
  let { type: r = "object" } = e, { fold: l = !1 } = e, { count: i = 0 } = e, { label: u = "" } = e, { labelType: s = "key" } = e, { useFold: a = !1 } = e, { useSort: d = !1 } = e, { useLabel: f = !1 } = e, { useCount: p = !1 } = e, { openContext: b = !1 } = e;
  function g() {
    o("fold", !l);
  }
  function m($) {
    o("context", { element: $.currentTarget });
  }
  function v($) {
    u = $, t(0, u);
  }
  return n.$$set = ($) => {
    "type" in $ && t(1, r = $.type), "fold" in $ && t(2, l = $.fold), "count" in $ && t(3, i = $.count), "label" in $ && t(0, u = $.label), "labelType" in $ && t(4, s = $.labelType), "useFold" in $ && t(5, a = $.useFold), "useSort" in $ && t(6, d = $.useSort), "useLabel" in $ && t(7, f = $.useLabel), "useCount" in $ && t(8, p = $.useCount), "openContext" in $ && t(9, b = $.openContext);
  }, [
    u,
    r,
    l,
    i,
    s,
    a,
    d,
    f,
    p,
    b,
    g,
    m,
    v
  ];
}
class _e extends Z {
  constructor(e) {
    super(), R(
      this,
      e,
      Yt,
      Wt,
      I,
      {
        type: 1,
        fold: 2,
        count: 3,
        label: 0,
        labelType: 4,
        useFold: 5,
        useSort: 6,
        useLabel: 7,
        useCount: 8,
        openContext: 9
      },
      Jt
    );
  }
  get type() {
    return this.$$.ctx[1];
  }
  set type(e) {
    this.$$set({ type: e }), C();
  }
  get fold() {
    return this.$$.ctx[2];
  }
  set fold(e) {
    this.$$set({ fold: e }), C();
  }
  get count() {
    return this.$$.ctx[3];
  }
  set count(e) {
    this.$$set({ count: e }), C();
  }
  get label() {
    return this.$$.ctx[0];
  }
  set label(e) {
    this.$$set({ label: e }), C();
  }
  get labelType() {
    return this.$$.ctx[4];
  }
  set labelType(e) {
    this.$$set({ labelType: e }), C();
  }
  get useFold() {
    return this.$$.ctx[5];
  }
  set useFold(e) {
    this.$$set({ useFold: e }), C();
  }
  get useSort() {
    return this.$$.ctx[6];
  }
  set useSort(e) {
    this.$$set({ useSort: e }), C();
  }
  get useLabel() {
    return this.$$.ctx[7];
  }
  set useLabel(e) {
    this.$$set({ useLabel: e }), C();
  }
  get useCount() {
    return this.$$.ctx[8];
  }
  set useCount(e) {
    this.$$set({ useCount: e }), C();
  }
  get openContext() {
    return this.$$.ctx[9];
  }
  set openContext(e) {
    this.$$set({ openContext: e }), C();
  }
}
V(_e, { type: {}, fold: { type: "Boolean" }, count: {}, label: {}, labelType: {}, useFold: { type: "Boolean" }, useSort: { type: "Boolean" }, useLabel: { type: "Boolean" }, useCount: { type: "Boolean" }, openContext: { type: "Boolean" } }, [], [], !0);
function en(n) {
  A(n, "je-6lgimd", "svg.je-6lgimd{display:block;width:var(--icon-arrow-right, 16px)}");
}
function tn(n) {
  let e, t;
  return {
    c() {
      e = L("svg"), t = L("path"), c(t, "d", "M6 12L10 8L6 4"), c(t, "stroke", "currentColor"), c(t, "stroke-linecap", "round"), c(t, "stroke-linejoin", "round"), c(e, "viewBox", "0 0 16 16"), c(e, "fill", "none"), c(e, "xmlns", "http://www.w3.org/2000/svg"), c(e, "class", "je-6lgimd");
    },
    m(o, r) {
      x(o, e, r), j(e, t);
    },
    p: z,
    i: z,
    o: z,
    d(o) {
      o && y(e);
    }
  };
}
class qe extends Z {
  constructor(e) {
    super(), R(this, e, null, tn, I, {}, en);
  }
}
V(qe, {}, [], [], !0);
function nn(n) {
  A(n, "je-ubut2x", "li.je-ubut2x.je-ubut2x.je-ubut2x{position:relative}li.je-ubut2x.je-ubut2x.je-ubut2x:not(:first-child){margin-top:1px}li.je-ubut2x:first-child>button.je-ubut2x.je-ubut2x{border-top-left-radius:var(--context-border-radius);border-top-right-radius:var(--context-border-radius)}li.je-ubut2x:last-child>button.je-ubut2x.je-ubut2x{border-bottom-left-radius:var(--context-border-radius);border-bottom-right-radius:var(--context-border-radius)}li.type.je-ubut2x>button.je-ubut2x.je-ubut2x{grid-template-columns:auto 1fr;gap:8px}li.type.je-ubut2x>button.je-ubut2x:disabled>.je-ubut2x{opacity:0.25}li.dropdown.je-ubut2x:hover>button.je-ubut2x.je-ubut2x,li.dropdown.je-ubut2x:focus-within>button.je-ubut2x.je-ubut2x{background-color:var(--context-color-item-active)}li.dropdown.je-ubut2x:hover > .context,li.dropdown.je-ubut2x:focus-within > .context{opacity:1;pointer-events:auto}li.dropdown.je-ubut2x>button.je-ubut2x.je-ubut2x{grid-template-columns:1fr auto}li.remove.je-ubut2x .label.je-ubut2x.je-ubut2x{color:var(--json-editor-color-error)}button.je-ubut2x.je-ubut2x.je-ubut2x{display:grid;align-items:center;margin:0;padding:8px 12px;min-width:150px;text-align:left;box-sizing:border-box;background-color:var(--json-editor-color-bg);border:none;cursor:pointer;border-radius:0;transition:background-color 120ms ease-out;font-family:var(--json-editor-font-base);font-size:12px;letter-spacing:-0.25px;outline:none;color:var(--json-editor-color-base)}button.je-ubut2x.je-ubut2x.je-ubut2x:hover,button.je-ubut2x.je-ubut2x.je-ubut2x:active{background-color:var(--context-color-item-active)}button.je-ubut2x.je-ubut2x.je-ubut2x:not(.parent):focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-2px}button.je-ubut2x.je-ubut2x.je-ubut2x:disabled{cursor:default}.label.je-ubut2x.je-ubut2x.je-ubut2x{display:block;font-style:normal;pointer-events:none;user-select:none}.icon-type.je-ubut2x.je-ubut2x.je-ubut2x{--type-size:16px;--type-icon-size:8px}.arrow.je-ubut2x.je-ubut2x.je-ubut2x{display:block;margin:0 -4px 0 0;pointer-events:none}");
}
function xe(n) {
  let e, t, o;
  return t = new he({ props: { name: (
    /*type*/
    n[1]
  ) } }), {
    c() {
      e = w("span"), N(t.$$.fragment), c(e, "class", "icon-type je-ubut2x");
    },
    m(r, l) {
      x(r, e, l), S(t, e, null), o = !0;
    },
    p(r, l) {
      const i = {};
      l & /*type*/
      2 && (i.name = /*type*/
      r[1]), t.$set(i);
    },
    i(r) {
      o || (h(t.$$.fragment, r), o = !0);
    },
    o(r) {
      _(t.$$.fragment, r), o = !1;
    },
    d(r) {
      r && y(e), T(t);
    }
  };
}
function Ce(n) {
  let e, t, o;
  return t = new qe({}), {
    c() {
      e = w("span"), N(t.$$.fragment), c(e, "class", "arrow je-ubut2x");
    },
    m(r, l) {
      x(r, e, l), S(t, e, null), o = !0;
    },
    i(r) {
      o || (h(t.$$.fragment, r), o = !0);
    },
    o(r) {
      _(t.$$.fragment, r), o = !1;
    },
    d(r) {
      r && y(e), T(t);
    }
  };
}
function on(n) {
  let e, t, o, r, l, i, u, s, a, d, f = (
    /*type*/
    n[1] && xe(n)
  ), p = (
    /*mode*/
    n[0] === "dropdown" && Ce()
  );
  const b = (
    /*#slots*/
    n[6].default
  ), g = ot(
    b,
    n,
    /*$$scope*/
    n[5],
    null
  );
  return {
    c() {
      e = w("li"), t = w("button"), f && f.c(), o = H(), r = w("em"), l = ee(
        /*label*/
        n[2]
      ), i = H(), p && p.c(), u = H(), g && g.c(), c(r, "class", "label je-ubut2x"), c(t, "type", "button"), t.disabled = /*disabled*/
      n[3], c(t, "class", "je-ubut2x"), c(e, "class", "je-ubut2x"), k(
        e,
        "dropdown",
        /*mode*/
        n[0] === "dropdown"
      ), k(
        e,
        "remove",
        /*mode*/
        n[0] === "remove"
      ), k(
        e,
        "type",
        /*mode*/
        n[0] === "type"
      );
    },
    m(m, v) {
      x(m, e, v), j(e, t), f && f.m(t, null), j(t, o), j(t, r), j(r, l), j(t, i), p && p.m(t, null), j(e, u), g && g.m(e, null), s = !0, a || (d = P(
        t,
        "click",
        /*click_handler*/
        n[7]
      ), a = !0);
    },
    p(m, [v]) {
      /*type*/
      m[1] ? f ? (f.p(m, v), v & /*type*/
      2 && h(f, 1)) : (f = xe(m), f.c(), h(f, 1), f.m(t, o)) : f && (O(), _(f, 1, 1, () => {
        f = null;
      }), M()), (!s || v & /*label*/
      4) && ie(
        l,
        /*label*/
        m[2]
      ), /*mode*/
      m[0] === "dropdown" ? p ? v & /*mode*/
      1 && h(p, 1) : (p = Ce(), p.c(), h(p, 1), p.m(t, null)) : p && (O(), _(p, 1, 1, () => {
        p = null;
      }), M()), (!s || v & /*disabled*/
      8) && (t.disabled = /*disabled*/
      m[3]), g && g.p && (!s || v & /*$$scope*/
      32) && lt(
        g,
        b,
        m,
        /*$$scope*/
        m[5],
        s ? rt(
          b,
          /*$$scope*/
          m[5],
          v,
          null
        ) : it(
          /*$$scope*/
          m[5]
        ),
        null
      ), (!s || v & /*mode*/
      1) && k(
        e,
        "dropdown",
        /*mode*/
        m[0] === "dropdown"
      ), (!s || v & /*mode*/
      1) && k(
        e,
        "remove",
        /*mode*/
        m[0] === "remove"
      ), (!s || v & /*mode*/
      1) && k(
        e,
        "type",
        /*mode*/
        m[0] === "type"
      );
    },
    i(m) {
      s || (h(f), h(p), h(g, m), s = !0);
    },
    o(m) {
      _(f), _(p), _(g, m), s = !1;
    },
    d(m) {
      m && y(e), f && f.d(), p && p.d(), g && g.d(m), a = !1, d();
    }
  };
}
function rn(n, e, t) {
  let { $$slots: o = {}, $$scope: r } = e;
  const l = se();
  let { mode: i = void 0 } = e, { type: u = void 0 } = e, { label: s = "" } = e, { disabled: a = !1 } = e;
  const d = () => l("select");
  return n.$$set = (f) => {
    "mode" in f && t(0, i = f.mode), "type" in f && t(1, u = f.type), "label" in f && t(2, s = f.label), "disabled" in f && t(3, a = f.disabled), "$$scope" in f && t(5, r = f.$$scope);
  }, [i, u, s, a, l, r, o, d];
}
class X extends Z {
  constructor(e) {
    super(), R(this, e, rn, on, I, { mode: 0, type: 1, label: 2, disabled: 3 }, nn);
  }
  get mode() {
    return this.$$.ctx[0];
  }
  set mode(e) {
    this.$$set({ mode: e }), C();
  }
  get type() {
    return this.$$.ctx[1];
  }
  set type(e) {
    this.$$set({ type: e }), C();
  }
  get label() {
    return this.$$.ctx[2];
  }
  set label(e) {
    this.$$set({ label: e }), C();
  }
  get disabled() {
    return this.$$.ctx[3];
  }
  set disabled(e) {
    this.$$set({ disabled: e }), C();
  }
}
V(X, { mode: {}, type: {}, label: {}, disabled: { type: "Boolean" } }, ["default"], [], !0);
function ln(n) {
  A(n, "je-w6v8es", ".context.je-w6v8es.je-w6v8es{--context-border-radius:4px;--context-color-line:hsl(0 0% 88%);--context-color-item-active:hsl(0 0% 92%);position:absolute;top:-8px;left:56px;z-index:2}.context.is-root.je-w6v8es.je-w6v8es{left:28px}.context.je-w6v8es .context{top:0;right:0;left:auto;opacity:0;pointer-events:none;transition:opacity 200ms ease-out}.context.je-w6v8es .context > ul{left:-4px;top:-8px}.context.je-w6v8es>ul.je-w6v8es{position:absolute;left:0;margin:0;padding:0;list-style:none;background:var(--context-color-line);border-radius:var(--context-border-radius);box-shadow:0 4px 32px 0 hsla(0, 0%, 0%, 0.1), 0 2px 8px 0 hsla(0, 0%, 0%, 0.2), 0 0 0 1px hsla(0, 0%, 0%, 0.05)}");
}
function ze(n, e, t) {
  const o = n.slice();
  return o[18] = e[t].key, o[19] = e[t].label, o;
}
function Le(n, e, t) {
  const o = n.slice();
  return o[18] = e[t].key, o[19] = e[t].label, o;
}
function Ee(n) {
  let e, t;
  function o() {
    return (
      /*select_handler*/
      n[10](
        /*key*/
        n[18]
      )
    );
  }
  return e = new X({
    props: {
      mode: "type",
      type: (
        /*key*/
        n[18]
      ),
      label: (
        /*label*/
        n[19]
      ),
      disabled: (
        /*key*/
        n[18] === /*type*/
        n[0]
      )
    }
  }), e.$on("select", o), {
    c() {
      N(e.$$.fragment);
    },
    m(r, l) {
      S(e, r, l), t = !0;
    },
    p(r, l) {
      n = r;
      const i = {};
      l & /*chnageTypes*/
      8 && (i.type = /*key*/
      n[18]), l & /*chnageTypes*/
      8 && (i.label = /*label*/
      n[19]), l & /*chnageTypes, type*/
      9 && (i.disabled = /*key*/
      n[18] === /*type*/
      n[0]), e.$set(i);
    },
    i(r) {
      t || (h(e.$$.fragment, r), t = !0);
    },
    o(r) {
      _(e.$$.fragment, r), t = !1;
    },
    d(r) {
      T(e, r);
    }
  };
}
function sn(n) {
  let e, t, o, r = W(
    /*chnageTypes*/
    n[3]
  ), l = [];
  for (let u = 0; u < r.length; u += 1)
    l[u] = Ee(Le(n, r, u));
  const i = (u) => _(l[u], 1, 1, () => {
    l[u] = null;
  });
  return {
    c() {
      e = w("div"), t = w("ul");
      for (let u = 0; u < l.length; u += 1)
        l[u].c();
      c(t, "class", "je-w6v8es"), c(e, "class", "context je-w6v8es");
    },
    m(u, s) {
      x(u, e, s), j(e, t);
      for (let a = 0; a < l.length; a += 1)
        l[a] && l[a].m(t, null);
      o = !0;
    },
    p(u, s) {
      if (s & /*chnageTypes, type, onClickItem*/
      265) {
        r = W(
          /*chnageTypes*/
          u[3]
        );
        let a;
        for (a = 0; a < r.length; a += 1) {
          const d = Le(u, r, a);
          l[a] ? (l[a].p(d, s), h(l[a], 1)) : (l[a] = Ee(d), l[a].c(), h(l[a], 1), l[a].m(t, null));
        }
        for (O(), a = r.length; a < l.length; a += 1)
          i(a);
        M();
      }
    },
    i(u) {
      if (!o) {
        for (let s = 0; s < r.length; s += 1)
          h(l[s]);
        o = !0;
      }
    },
    o(u) {
      l = l.filter(Boolean);
      for (let s = 0; s < l.length; s += 1)
        _(l[s]);
      o = !1;
    },
    d(u) {
      u && y(e), fe(l, u);
    }
  };
}
function Se(n) {
  let e, t;
  return e = new X({
    props: {
      mode: "dropdown",
      label: "Insert Item",
      disabled: !0,
      $$slots: { default: [un] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(o, r) {
      S(e, o, r), t = !0;
    },
    p(o, r) {
      const l = {};
      r & /*$$scope*/
      16777216 && (l.$$scope = { dirty: r, ctx: o }), e.$set(l);
    },
    i(o) {
      t || (h(e.$$.fragment, o), t = !0);
    },
    o(o) {
      _(e.$$.fragment, o), t = !1;
    },
    d(o) {
      T(e, o);
    }
  };
}
function Te(n) {
  let e, t;
  function o() {
    return (
      /*select_handler_1*/
      n[11](
        /*key*/
        n[18]
      )
    );
  }
  return e = new X({
    props: {
      mode: "type",
      type: (
        /*key*/
        n[18]
      ),
      label: (
        /*label*/
        n[19]
      )
    }
  }), e.$on("select", o), {
    c() {
      N(e.$$.fragment);
    },
    m(r, l) {
      S(e, r, l), t = !0;
    },
    p(r, l) {
      n = r;
    },
    i(r) {
      t || (h(e.$$.fragment, r), t = !0);
    },
    o(r) {
      _(e.$$.fragment, r), t = !1;
    },
    d(r) {
      T(e, r);
    }
  };
}
function un(n) {
  let e, t, o, r = W(
    /*types*/
    n[7]
  ), l = [];
  for (let u = 0; u < r.length; u += 1)
    l[u] = Te(ze(n, r, u));
  const i = (u) => _(l[u], 1, 1, () => {
    l[u] = null;
  });
  return {
    c() {
      e = w("div"), t = w("ul");
      for (let u = 0; u < l.length; u += 1)
        l[u].c();
      c(t, "class", "je-w6v8es"), c(e, "class", "context je-w6v8es");
    },
    m(u, s) {
      x(u, e, s), j(e, t);
      for (let a = 0; a < l.length; a += 1)
        l[a] && l[a].m(t, null);
      o = !0;
    },
    p(u, s) {
      if (s & /*types, onClickItem*/
      384) {
        r = W(
          /*types*/
          u[7]
        );
        let a;
        for (a = 0; a < r.length; a += 1) {
          const d = ze(u, r, a);
          l[a] ? (l[a].p(d, s), h(l[a], 1)) : (l[a] = Te(d), l[a].c(), h(l[a], 1), l[a].m(t, null));
        }
        for (O(), a = r.length; a < l.length; a += 1)
          i(a);
        M();
      }
    },
    i(u) {
      if (!o) {
        for (let s = 0; s < r.length; s += 1)
          h(l[s]);
        o = !0;
      }
    },
    o(u) {
      l = l.filter(Boolean);
      for (let s = 0; s < l.length; s += 1)
        _(l[s]);
      o = !1;
    },
    d(u) {
      u && y(e), fe(l, u);
    }
  };
}
function Ne(n) {
  let e, t;
  return e = new X({ props: { label: "Duplicate" } }), e.$on(
    "select",
    /*select_handler_2*/
    n[12]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(o, r) {
      S(e, o, r), t = !0;
    },
    p: z,
    i(o) {
      t || (h(e.$$.fragment, o), t = !0);
    },
    o(o) {
      _(e.$$.fragment, o), t = !1;
    },
    d(o) {
      T(e, o);
    }
  };
}
function Be(n) {
  let e, t;
  return e = new X({
    props: { mode: "remove", label: "Remove" }
  }), e.$on(
    "select",
    /*select_handler_3*/
    n[13]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(o, r) {
      S(e, o, r), t = !0;
    },
    p: z,
    i(o) {
      t || (h(e.$$.fragment, o), t = !0);
    },
    o(o) {
      _(e.$$.fragment, o), t = !1;
    },
    d(o) {
      T(e, o);
    }
  };
}
function an(n) {
  let e, t, o, r, l, i, u, s, a;
  o = new X({
    props: {
      mode: "dropdown",
      label: "Change Type",
      disabled: !0,
      $$slots: { default: [sn] },
      $$scope: { ctx: n }
    }
  });
  let d = (
    /*useItemInsert*/
    n[6] && Se(n)
  ), f = (
    /*useItemDuplicate*/
    n[5] && Ne(n)
  ), p = (
    /*useItemRemove*/
    n[4] && Be(n)
  );
  return {
    c() {
      e = w("div"), t = w("ul"), N(o.$$.fragment), r = H(), d && d.c(), l = H(), f && f.c(), i = H(), p && p.c(), c(t, "class", "je-w6v8es"), c(e, "tabindex", "-1"), c(e, "class", "context je-w6v8es"), k(
        e,
        "is-root",
        /*isRoot*/
        n[1]
      );
    },
    m(b, g) {
      x(b, e, g), j(e, t), S(o, t, null), j(t, r), d && d.m(t, null), j(t, l), f && f.m(t, null), j(t, i), p && p.m(t, null), n[14](e), u = !0, s || (a = P(e, "click", at(
        /*click_handler*/
        n[9]
      )), s = !0);
    },
    p(b, [g]) {
      const m = {};
      g & /*$$scope, chnageTypes, type*/
      16777225 && (m.$$scope = { dirty: g, ctx: b }), o.$set(m), /*useItemInsert*/
      b[6] ? d ? (d.p(b, g), g & /*useItemInsert*/
      64 && h(d, 1)) : (d = Se(b), d.c(), h(d, 1), d.m(t, l)) : d && (O(), _(d, 1, 1, () => {
        d = null;
      }), M()), /*useItemDuplicate*/
      b[5] ? f ? (f.p(b, g), g & /*useItemDuplicate*/
      32 && h(f, 1)) : (f = Ne(b), f.c(), h(f, 1), f.m(t, i)) : f && (O(), _(f, 1, 1, () => {
        f = null;
      }), M()), /*useItemRemove*/
      b[4] ? p ? (p.p(b, g), g & /*useItemRemove*/
      16 && h(p, 1)) : (p = Be(b), p.c(), h(p, 1), p.m(t, null)) : p && (O(), _(p, 1, 1, () => {
        p = null;
      }), M()), (!u || g & /*isRoot*/
      2) && k(
        e,
        "is-root",
        /*isRoot*/
        b[1]
      );
    },
    i(b) {
      u || (h(o.$$.fragment, b), h(d), h(f), h(p), u = !0);
    },
    o(b) {
      _(o.$$.fragment, b), _(d), _(f), _(p), u = !1;
    },
    d(b) {
      b && y(e), T(o), d && d.d(), f && f.d(), p && p.d(), n[14](null), s = !1, a();
    }
  };
}
function cn(n, e, t) {
  let o, r, l, i;
  const u = se();
  let { type: s } = e, { isRoot: a = !1 } = e, d;
  const f = [
    { key: "object", label: "Object" },
    { key: "array", label: "Array" },
    { key: "string", label: "String" },
    { key: "number", label: "Number" },
    { key: "boolean", label: "Boolean" },
    { key: "null", label: "Null" }
  ];
  function p(B) {
    u("close");
  }
  function b(B) {
    if (B.code === "Escape")
      return u("close");
  }
  function g(B, We) {
    u("select", { action: B, type: We });
  }
  De(() => {
    setTimeout(
      () => {
        window.addEventListener("click", p), window.addEventListener("keyup", b), d.focus();
      },
      60
    );
  }), Fe(() => {
    window.removeEventListener("click", p), window.removeEventListener("keyup", b);
  });
  function m(B) {
    _t.call(this, n, B);
  }
  const v = (B) => g("change-type", B), $ = (B) => g("insert", B), D = () => g("duplicate"), E = () => g("remove");
  function U(B) {
    J[B ? "unshift" : "push"](() => {
      d = B, t(2, d);
    });
  }
  return n.$$set = (B) => {
    "type" in B && t(0, s = B.type), "isRoot" in B && t(1, a = B.isRoot);
  }, n.$$.update = () => {
    n.$$.dirty & /*type*/
    1 && t(6, o = (() => s === "object" || s === "array")()), n.$$.dirty & /*isRoot*/
    2 && t(5, r = (() => !a)()), n.$$.dirty & /*isRoot*/
    2 && t(4, l = (() => !a)()), n.$$.dirty & /*isRoot*/
    2 && t(3, i = (() => a ? Object.assign([], f).splice(0, 2) : f)());
  }, [
    s,
    a,
    d,
    i,
    l,
    r,
    o,
    f,
    g,
    m,
    v,
    $,
    D,
    E,
    U
  ];
}
class Ge extends Z {
  constructor(e) {
    super(), R(this, e, cn, an, I, { type: 0, isRoot: 1 }, ln);
  }
  get type() {
    return this.$$.ctx[0];
  }
  set type(e) {
    this.$$set({ type: e }), C();
  }
  get isRoot() {
    return this.$$.ctx[1];
  }
  set isRoot(e) {
    this.$$set({ isRoot: e }), C();
  }
}
V(Ge, { type: {}, isRoot: { type: "Boolean" } }, [], [], !0);
function fn(n) {
  A(n, "je-1wbd1fz", "button.je-1wbd1fz.je-1wbd1fz{--switch-width:36px;--switch-height:18px;--switch-offset:3px;--switch-speed:100ms;--switch-unit-size:calc(var(--switch-height) - (var(--switch-offset) * 2));display:block;margin:0 0 0 6px;padding:2px 0;background:none;border:none;font-size:0;cursor:pointer}button.off.je-1wbd1fz.je-1wbd1fz{--switch-unit-x:0}button.on.je-1wbd1fz.je-1wbd1fz{--switch-unit-x:calc(var(--switch-width) - (var(--switch-offset) * 2) - var(--switch-unit-size))}button.on.je-1wbd1fz i.je-1wbd1fz{background-color:var(--json-editor-color-focus)}button.je-1wbd1fz:active span.je-1wbd1fz{box-shadow:inset 0 0 0 1px var(--json-editor-color-active)}button:active.off.je-1wbd1fz i.je-1wbd1fz{width:calc(var(--switch-unit-size) + 6px)}button:active.on.je-1wbd1fz i.je-1wbd1fz{width:calc(var(--switch-unit-size) + 6px);transform:translateX(calc(var(--switch-width) - var(--switch-offset) * 2 - var(--switch-unit-size) - 6px))}button.je-1wbd1fz.je-1wbd1fz:focus-visible{outline:none}button.je-1wbd1fz:focus-visible span.je-1wbd1fz{outline:2px solid var(--json-editor-color-focus);outline-offset:1px}span.je-1wbd1fz.je-1wbd1fz{display:block;position:relative;padding:var(--switch-offset);width:var(--switch-width);height:var(--switch-height);border-radius:calc(var(--switch-height) * 0.5);box-shadow:inset 0 0 0 1px var(--json-editor-color-blur);transition:box-shadow 160ms ease-out;box-sizing:border-box}i.je-1wbd1fz.je-1wbd1fz{display:block;width:var(--switch-unit-size);height:var(--switch-unit-size);background-color:var(--json-editor-color-blur);border-radius:var(--switch-unit-size);pointer-events:none;transform:translateX(var(--switch-unit-x));transition:transform var(--switch-speed) ease-out, width var(--switch-speed) ease-out, background-color 240ms ease-out}");
}
function dn(n) {
  let e, t, o, r, l, i;
  return {
    c() {
      e = w("button"), t = w("span"), o = w("i"), r = ee(
        /*_value*/
        n[1]
      ), c(o, "class", "je-1wbd1fz"), c(t, "class", "je-1wbd1fz"), c(e, "type", "button"), c(e, "class", "je-1wbd1fz"), k(
        e,
        "on",
        /*_value*/
        n[1] === "true"
      ), k(
        e,
        "off",
        /*_value*/
        n[1] === "false"
      );
    },
    m(u, s) {
      x(u, e, s), j(e, t), j(t, o), j(o, r), l || (i = P(
        e,
        "click",
        /*click_handler*/
        n[2]
      ), l = !0);
    },
    p(u, [s]) {
      s & /*_value*/
      2 && ie(
        r,
        /*_value*/
        u[1]
      ), s & /*_value*/
      2 && k(
        e,
        "on",
        /*_value*/
        u[1] === "true"
      ), s & /*_value*/
      2 && k(
        e,
        "off",
        /*_value*/
        u[1] === "false"
      );
    },
    i: z,
    o: z,
    d(u) {
      u && y(e), l = !1, i();
    }
  };
}
function bn(n, e, t) {
  let o, { value: r } = e;
  const l = () => {
    t(0, r = !r);
  };
  return n.$$set = (i) => {
    "value" in i && t(0, r = i.value);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    1 && t(1, o = r.toString());
  }, [r, o, l];
}
class Qe extends Z {
  constructor(e) {
    super(), R(this, e, bn, dn, I, { value: 0 }, fn);
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), C();
  }
}
V(Qe, { value: {} }, [], [], !0);
function pn(n) {
  A(n, "je-105b55", 'dl.je-105b55.je-105b55{margin:0;display:flex;align-items:center;gap:0 6px}dl.je-105b55 dt.je-105b55{position:relative;box-sizing:border-box}dl.je-105b55 dd.je-105b55{display:flex;align-items:center;gap:0 5px;margin:0;box-sizing:border-box;font-size:var(--json-editor-font-size);--label-min-width:72px}dl.je-105b55 dd.je-105b55:before{content:":"}ul.je-105b55.je-105b55{position:relative;display:none;margin:6px 0 0;padding:0 0 0 24px;list-style:none;gap:6px 0}ul.je-105b55.je-105b55:before{content:"";display:block;position:absolute;left:11px;top:0;bottom:11px;width:4px;border-width:0 0 0 1px;border-style:dashed;border-color:hsl(0, 0%, 72%)}ul.je-105b55.je-105b55:after{content:"";display:block;position:absolute;left:9px;bottom:10px;width:5px;height:5px;background:hsl(0, 0%, 72%);border-radius:50%}ul.show.je-105b55.je-105b55{display:grid}');
}
function Oe(n, e, t) {
  const o = n.slice();
  return o[17] = e[t].key, o[18] = e[t].value, o;
}
function hn(n) {
  let e, t;
  return e = new _e({
    props: {
      type: (
        /*type*/
        n[7]
      ),
      label: (
        /*parentType*/
        n[2] === "array" ? "" : (
          /*keyName*/
          n[3]
        )
      ),
      labelType: (
        /*parentType*/
        n[2] === "array" ? "" : "key"
      ),
      useFold: !1,
      useLabel: (
        /*parentType*/
        n[2] !== "array"
      ),
      useCount: !1,
      useSort: !0,
      openContext: !!/*context*/
      n[5]
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
      N(e.$$.fragment);
    },
    m(o, r) {
      S(e, o, r), t = !0;
    },
    p(o, r) {
      const l = {};
      r & /*parentType, keyName*/
      12 && (l.label = /*parentType*/
      o[2] === "array" ? "" : (
        /*keyName*/
        o[3]
      )), r & /*parentType*/
      4 && (l.labelType = /*parentType*/
      o[2] === "array" ? "" : "key"), r & /*parentType*/
      4 && (l.useLabel = /*parentType*/
      o[2] !== "array"), r & /*context*/
      32 && (l.openContext = !!/*context*/
      o[5]), e.$set(l);
    },
    i(o) {
      t || (h(e.$$.fragment, o), t = !0);
    },
    o(o) {
      _(e.$$.fragment, o), t = !1;
    },
    d(o) {
      T(e, o);
    }
  };
}
function mn(n) {
  let e, t;
  return e = new _e({
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
      n[6],
      openContext: !!/*context*/
      n[5]
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
      N(e.$$.fragment);
    },
    m(o, r) {
      S(e, o, r), t = !0;
    },
    p(o, r) {
      const l = {};
      r & /*fold*/
      16 && (l.fold = /*fold*/
      o[4]), r & /*keyName*/
      8 && (l.label = /*keyName*/
      o[3]), r & /*parentType*/
      4 && (l.useLabel = /*parentType*/
      o[2] === "object"), r & /*context*/
      32 && (l.openContext = !!/*context*/
      o[5]), e.$set(l);
    },
    i(o) {
      t || (h(e.$$.fragment, o), t = !0);
    },
    o(o) {
      _(e.$$.fragment, o), t = !1;
    },
    d(o) {
      T(e, o);
    }
  };
}
function Me(n) {
  let e, t;
  return e = new Ge({
    props: {
      isRoot: (
        /*isRoot*/
        n[6]
      ),
      type: (
        /*type*/
        n[7]
      )
    }
  }), e.$on(
    "close",
    /*onCloseContext*/
    n[13]
  ), e.$on(
    "select",
    /*onSelectContextItem*/
    n[12]
  ), {
    c() {
      N(e.$$.fragment);
    },
    m(o, r) {
      S(e, o, r), t = !0;
    },
    p: z,
    i(o) {
      t || (h(e.$$.fragment, o), t = !0);
    },
    o(o) {
      _(e.$$.fragment, o), t = !1;
    },
    d(o) {
      T(e, o);
    }
  };
}
function gn(n) {
  let e, t, o, r;
  const l = [jn, $n, _n], i = [];
  function u(s, a) {
    return (
      /*type*/
      s[7] === "null" ? 0 : (
        /*type*/
        s[7] === "boolean" ? 1 : 2
      )
    );
  }
  return t = u(n), o = i[t] = l[t](n), {
    c() {
      e = w("dd"), o.c(), c(e, "class", "je-105b55");
    },
    m(s, a) {
      x(s, e, a), i[t].m(e, null), r = !0;
    },
    p(s, a) {
      o.p(s, a);
    },
    i(s) {
      r || (h(o), r = !0);
    },
    o(s) {
      _(o), r = !1;
    },
    d(s) {
      s && y(e), i[t].d();
    }
  };
}
function _n(n) {
  let e, t, o;
  function r(i) {
    n[15](i);
  }
  let l = { mode: "value", type: (
    /*type*/
    n[7]
  ) };
  return (
    /*data*/
    n[0] !== void 0 && (l.value = /*data*/
    n[0]), e = new me({ props: l }), J.push(() => pe(e, "value", r)), {
      c() {
        N(e.$$.fragment);
      },
      m(i, u) {
        S(e, i, u), o = !0;
      },
      p(i, u) {
        const s = {};
        !t && u & /*data*/
        1 && (t = !0, s.value = /*data*/
        i[0], be(() => t = !1)), e.$set(s);
      },
      i(i) {
        o || (h(e.$$.fragment, i), o = !0);
      },
      o(i) {
        _(e.$$.fragment, i), o = !1;
      },
      d(i) {
        T(e, i);
      }
    }
  );
}
function $n(n) {
  let e, t, o;
  function r(i) {
    n[14](i);
  }
  let l = {};
  return (
    /*data*/
    n[0] !== void 0 && (l.value = /*data*/
    n[0]), e = new Qe({ props: l }), J.push(() => pe(e, "value", r)), {
      c() {
        N(e.$$.fragment);
      },
      m(i, u) {
        S(e, i, u), o = !0;
      },
      p(i, u) {
        const s = {};
        !t && u & /*data*/
        1 && (t = !0, s.value = /*data*/
        i[0], be(() => t = !1)), e.$set(s);
      },
      i(i) {
        o || (h(e.$$.fragment, i), o = !0);
      },
      o(i) {
        _(e.$$.fragment, i), o = !1;
      },
      d(i) {
        T(e, i);
      }
    }
  );
}
function jn(n) {
  let e, t;
  return e = new ge({}), {
    c() {
      N(e.$$.fragment);
    },
    m(o, r) {
      S(e, o, r), t = !0;
    },
    p: z,
    i(o) {
      t || (h(e.$$.fragment, o), t = !0);
    },
    o(o) {
      _(e.$$.fragment, o), t = !1;
    },
    d(o) {
      T(e, o);
    }
  };
}
function wn(n) {
  let e, t, o = W(
    /*children*/
    n[8]
  ), r = [];
  for (let i = 0; i < o.length; i += 1)
    r[i] = He(Oe(n, o, i));
  const l = (i) => _(r[i], 1, 1, () => {
    r[i] = null;
  });
  return {
    c() {
      e = w("ul");
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
      c(e, "class", "je-105b55"), k(
        e,
        "show",
        /*fold*/
        n[4]
      );
    },
    m(i, u) {
      x(i, e, u);
      for (let s = 0; s < r.length; s += 1)
        r[s] && r[s].m(e, null);
      t = !0;
    },
    p(i, u) {
      if (u & /*root, type, children*/
      386) {
        o = W(
          /*children*/
          i[8]
        );
        let s;
        for (s = 0; s < o.length; s += 1) {
          const a = Oe(i, o, s);
          r[s] ? (r[s].p(a, u), h(r[s], 1)) : (r[s] = He(a), r[s].c(), h(r[s], 1), r[s].m(e, null));
        }
        for (O(), s = o.length; s < r.length; s += 1)
          l(s);
        M();
      }
      (!t || u & /*fold*/
      16) && k(
        e,
        "show",
        /*fold*/
        i[4]
      );
    },
    i(i) {
      if (!t) {
        for (let u = 0; u < o.length; u += 1)
          h(r[u]);
        t = !0;
      }
    },
    o(i) {
      r = r.filter(Boolean);
      for (let u = 0; u < r.length; u += 1)
        _(r[u]);
      t = !1;
    },
    d(i) {
      i && y(e), fe(r, i);
    }
  };
}
function He(n) {
  let e, t;
  return e = new $e({
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
        n[17]
      ),
      data: (
        /*value*/
        n[18]
      )
    }
  }), {
    c() {
      N(e.$$.fragment);
    },
    m(o, r) {
      S(e, o, r), t = !0;
    },
    p(o, r) {
      const l = {};
      r & /*root*/
      2 && (l.root = /*root*/
      o[1]), e.$set(l);
    },
    i(o) {
      t || (h(e.$$.fragment, o), t = !0);
    },
    o(o) {
      _(e.$$.fragment, o), t = !1;
    },
    d(o) {
      T(e, o);
    }
  };
}
function yn(n) {
  var v;
  let e, t, o, r, l, i, u, s, a;
  const d = [mn, hn], f = [];
  function p($, D) {
    return (
      /*type*/
      $[7] === "object" || /*type*/
      $[7] === "array" ? 0 : (
        /*type*/
        $[7] === "string" || /*type*/
        $[7] === "number" || /*type*/
        $[7] === "boolean" || /*type*/
        $[7] === "null" ? 1 : -1
      )
    );
  }
  ~(r = p(n)) && (l = f[r] = d[r](n));
  let b = (
    /*context*/
    n[5] && Me(n)
  ), g = (
    /*useValue*/
    n[9] && gn(n)
  ), m = (
    /*children*/
    ((v = n[8]) == null ? void 0 : v.length) > 0 && wn(n)
  );
  return {
    c() {
      e = w(/*isRoot*/
      n[6] ? "div" : "li"), t = w("dl"), o = w("dt"), l && l.c(), i = H(), b && b.c(), u = H(), g && g.c(), s = H(), m && m.c(), c(o, "class", "je-105b55"), c(t, "class", "je-105b55"), pt(/*isRoot*/
      n[6] ? "div" : "li")(e, {
        class: "item je-105b55",
        "data-type": (
          /*type*/
          n[7]
        )
      });
    },
    m($, D) {
      x($, e, D), j(e, t), j(t, o), ~r && f[r].m(o, null), j(o, i), b && b.m(o, null), j(o, u), g && g.m(t, null), j(e, s), m && m.m(e, null), a = !0;
    },
    p($, D) {
      var E;
      l && l.p($, D), /*context*/
      $[5] ? b ? (b.p($, D), D & /*context*/
      32 && h(b, 1)) : (b = Me($), b.c(), h(b, 1), b.m(o, u)) : b && (O(), _(b, 1, 1, () => {
        b = null;
      }), M()), /*useValue*/
      $[9] && g.p($, D), /*children*/
      ((E = $[8]) == null ? void 0 : E.length) > 0 && m.p($, D);
    },
    i($) {
      a || (h(l), h(b), h(g), h(m), a = !0);
    },
    o($) {
      _(l), _(b), _(g), _(m), a = !1;
    },
    d($) {
      $ && y(e), ~r && f[r].d(), b && b.d(), g && g.d(), m && m.d();
    }
  };
}
function vn(n) {
  let e = (/*isRoot*/
  n[6] ? "div" : "li") && yn(n);
  return {
    c() {
      e && e.c();
    },
    m(t, o) {
      e && e.m(t, o);
    },
    p(t, [o]) {
      /*isRoot*/
      t[6], e.p(t, o);
    },
    i: z,
    o(t) {
      _(e, t);
    },
    d(t) {
      e && e.d(t);
    }
  };
}
function kn(n, e) {
  switch (e) {
    case "object":
      return Object.entries(n).map(([t, o]) => ({ key: t, value: o }));
    case "array":
      return n.map((t, o) => ({ key: o, value: t }));
    default:
      return [];
  }
}
function xn(n, e) {
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
function Cn(n, e, t) {
  let { root: o } = e, { data: r } = e, { parentType: l } = e, { keyName: i = "" } = e, u = !l, s = !0, a, d = Ue(r), f = kn(r, d), p = xn(l, d);
  function b({ detail: E }) {
    t(4, s = E);
  }
  function g(E) {
    if (E.detail, a !== void 0) {
      v();
      return;
    }
    t(5, a = {});
  }
  function m(E) {
    const { action: U, type: B } = E.detail;
    switch (U) {
      case "change-type":
        console.log("onSelectContextItem()", U, B);
        break;
      case "insert":
        console.log(r), console.log("onSelectContextItem()", U, B);
        break;
      case "duplicate":
        console.log("onSelectContextItem()", U);
        break;
      case "remove":
        console.log("onSelectContextItem()", U);
        break;
    }
    v();
  }
  function v() {
    t(5, a = void 0);
  }
  function $(E) {
    r = E, t(0, r);
  }
  function D(E) {
    r = E, t(0, r);
  }
  return n.$$set = (E) => {
    "root" in E && t(1, o = E.root), "data" in E && t(0, r = E.data), "parentType" in E && t(2, l = E.parentType), "keyName" in E && t(3, i = E.keyName);
  }, [
    r,
    o,
    l,
    i,
    s,
    a,
    u,
    d,
    f,
    p,
    b,
    g,
    m,
    v,
    $,
    D
  ];
}
class $e extends Z {
  constructor(e) {
    super(), R(
      this,
      e,
      Cn,
      vn,
      I,
      {
        root: 1,
        data: 0,
        parentType: 2,
        keyName: 3
      },
      pn
    );
  }
  get root() {
    return this.$$.ctx[1];
  }
  set root(e) {
    this.$$set({ root: e }), C();
  }
  get data() {
    return this.$$.ctx[0];
  }
  set data(e) {
    this.$$set({ data: e }), C();
  }
  get parentType() {
    return this.$$.ctx[2];
  }
  set parentType(e) {
    this.$$set({ parentType: e }), C();
  }
  get keyName() {
    return this.$$.ctx[3];
  }
  set keyName(e) {
    this.$$set({ keyName: e }), C();
  }
}
V($e, { root: {}, data: {}, parentType: {}, keyName: {} }, [], [], !0);
function zn(n) {
  A(n, "je-1lfk02e", '.json-editor.je-1lfk02e{--json-editor-font-base:-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";--json-editor-font-eng:"Helvetica Neue", sans-serif;--json-editor-color-bg:hsl(0 0% 100%);--json-editor-color-base:hsl(0 0% 13%);--json-editor-color-blur:hsl(0 0% 67%);--json-editor-color-object:hsl(174 66% 39%);--json-editor-color-array:hsl(191 75% 53%);--json-editor-color-string:hsl(5 87% 59%);--json-editor-color-number:hsl(33 89% 55%);--json-editor-color-boolean:hsl(45 89% 54%);--json-editor-color-null:hsl(0 0% 58%);--json-editor-color-active:hsla(0 0% 0% / 6%);--json-editor-color-focus:hsl(5 87% 59%);--json-editor-color-error:hsl(0 96% 52%);--json-editor-font-size:13px;font-family:var(--json-editor-font-base);color:var(--json-editor-color-base);font-size:16px;line-height:1.15}');
}
function Ln(n) {
  let e, t;
  return e = new $e({
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
      N(e.$$.fragment);
    },
    m(o, r) {
      S(e, o, r), t = !0;
    },
    p(o, r) {
      const l = {};
      r & /*root*/
      2 && (l.root = /*root*/
      o[1]), r & /*data*/
      1 && (l.data = /*data*/
      o[0]), e.$set(l);
    },
    i(o) {
      t || (h(e.$$.fragment, o), t = !0);
    },
    o(o) {
      _(e.$$.fragment, o), t = !1;
    },
    d(o) {
      T(e, o);
    }
  };
}
function En(n) {
  let e;
  return {
    c() {
      e = w("div"), e.textContent = ".error";
    },
    m(t, o) {
      x(t, e, o);
    },
    p: z,
    i: z,
    o: z,
    d(t) {
      t && y(e);
    }
  };
}
function Sn(n) {
  let e, t, o, r;
  const l = [En, Ln], i = [];
  function u(s, a) {
    return (
      /*error*/
      s[2] ? 0 : 1
    );
  }
  return t = u(n), o = i[t] = l[t](n), {
    c() {
      e = w("div"), o.c(), c(e, "class", "json-editor je-1lfk02e");
    },
    m(s, a) {
      x(s, e, a), i[t].m(e, null), n[4](e), r = !0;
    },
    p(s, [a]) {
      let d = t;
      t = u(s), t === d ? i[t].p(s, a) : (O(), _(i[d], 1, 1, () => {
        i[d] = null;
      }), M(), o = i[t], o ? o.p(s, a) : (o = i[t] = l[t](s), o.c()), h(o, 1), o.m(e, null));
    },
    i(s) {
      r || (h(o), r = !0);
    },
    o(s) {
      _(o), r = !1;
    },
    d(s) {
      s && y(e), i[t].d(), n[4](null);
    }
  };
}
function Ie({ detail: n }) {
  const { foo: e } = n;
  console.log("onRootEvent", n, e);
}
function Tn(n, e, t) {
  let { data: o } = e, r, l, i, u;
  De(() => {
    r.addEventListener("json-editor", Ie);
  }), Fe(() => {
    console.log("on destroy json-editor"), r.removeEventListener("json-editor", Ie);
  });
  function s(a) {
    J[a ? "unshift" : "push"](() => {
      r = a, t(1, r);
    });
  }
  return n.$$set = (a) => {
    "data" in a && t(0, o = a.data);
  }, n.$$.update = () => {
    if (n.$$.dirty & /*data, type*/
    9)
      try {
        switch (typeof o == "string" && t(0, o = JSON.parse(o)), t(3, l = Ue(o)), l) {
          case "object":
            i = Object.entries(o).map(([a, d]) => ({ key: a, value: d }));
            break;
          case "array":
            i = o.map((a, d) => ({ key: d, value: a }));
            break;
        }
      } catch (a) {
        console.error("ERROR =>", a), t(2, u = { message: a.message });
      }
  }, [o, r, u, l, s];
}
class Nn extends Z {
  constructor(e) {
    super(), R(this, e, Tn, Sn, I, { data: 0 }, zn);
  }
  get data() {
    return this.$$.ctx[0];
  }
  set data(e) {
    this.$$set({ data: e }), C();
  }
}
V(Nn, { data: { reflect: !0, type: "String", attribute: "data" } }, [], [], !1);
export {
  Nn as default
};
