var H = Object.defineProperty;
var I = (e, t, n) => t in e ? H(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var f = (e, t, n) => (I(e, typeof t != "symbol" ? t + "" : t, n), n);
function a() {
}
function S(e) {
  return e();
}
function C() {
  return /* @__PURE__ */ Object.create(null);
}
function p(e) {
  e.forEach(S);
}
function P(e) {
  return typeof e == "function";
}
function R(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function T(e) {
  return Object.keys(e).length === 0;
}
function v(e, t, n) {
  e.insertBefore(t, n || null);
}
function E(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function B(e) {
  return document.createElement(e);
}
function V(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function U(e) {
  return Array.from(e.childNodes);
}
function q(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let k;
function b(e) {
  k = e;
}
const d = [], L = [];
let _ = [];
const N = [], z = /* @__PURE__ */ Promise.resolve();
let w = !1;
function D() {
  w || (w = !0, z.then(M));
}
function x(e) {
  _.push(e);
}
const y = /* @__PURE__ */ new Set();
let h = 0;
function M() {
  if (h !== 0)
    return;
  const e = k;
  do {
    try {
      for (; h < d.length; ) {
        const t = d[h];
        h++, b(t), F(t.$$);
      }
    } catch (t) {
      throw d.length = 0, h = 0, t;
    }
    for (b(null), d.length = 0, h = 0; L.length; )
      L.pop()();
    for (let t = 0; t < _.length; t += 1) {
      const n = _[t];
      y.has(n) || (y.add(n), n());
    }
    _.length = 0;
  } while (d.length);
  for (; N.length; )
    N.pop()();
  w = !1, y.clear(), b(e);
}
function F(e) {
  if (e.fragment !== null) {
    e.update(), p(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(x);
  }
}
function G(e) {
  const t = [], n = [];
  _.forEach((s) => e.indexOf(s) === -1 ? t.push(s) : n.push(s)), n.forEach((s) => s()), _ = t;
}
const K = /* @__PURE__ */ new Set();
function Q(e, t) {
  e && e.i && (K.delete(e), e.i(t));
}
function W(e, t, n) {
  const { fragment: s, after_update: i } = e.$$;
  s && s.m(t, n), x(() => {
    const r = e.$$.on_mount.map(S).filter(P);
    e.$$.on_destroy ? e.$$.on_destroy.push(...r) : p(r), e.$$.on_mount = [];
  }), i.forEach(x);
}
function X(e, t) {
  const n = e.$$;
  n.fragment !== null && (G(n.after_update), p(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Y(e, t) {
  e.$$.dirty[0] === -1 && (d.push(e), D(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Z(e, t, n, s, i, r, c, $ = [-1]) {
  const u = k;
  b(e);
  const o = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: a,
    not_equal: i,
    bound: C(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: C(),
    dirty: $,
    skip_bound: !1,
    root: t.target || u.$$.root
  };
  c && c(o.root);
  let m = !1;
  if (o.ctx = n ? n(e, t.props || {}, (l, O, ...j) => {
    const A = j.length ? j[0] : O;
    return o.ctx && i(o.ctx[l], o.ctx[l] = A) && (!o.skip_bound && o.bound[l] && o.bound[l](A), m && Y(e, l)), O;
  }) : [], o.update(), m = !0, p(o.before_update), o.fragment = s ? s(o.ctx) : !1, t.target) {
    if (t.hydrate) {
      const l = U(t.target);
      o.fragment && o.fragment.l(l), l.forEach(E);
    } else
      o.fragment && o.fragment.c();
    t.intro && Q(e.$$.fragment), W(e, t.target, t.anchor), M();
  }
  b(u);
}
let J;
typeof HTMLElement == "function" && (J = class extends HTMLElement {
  constructor(t, n, s) {
    super();
    /** The Svelte component constructor */
    f(this, "$$ctor");
    /** Slots */
    f(this, "$$s");
    /** The Svelte component instance */
    f(this, "$$c");
    /** Whether or not the custom element is connected */
    f(this, "$$cn", !1);
    /** Component props data */
    f(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    f(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    f(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    f(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    f(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = t, this.$$s = n, s && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, s) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const i = this.$$c.$on(t, n);
      this.$$l_u.set(n, i);
    }
    super.addEventListener(t, n, s);
  }
  removeEventListener(t, n, s) {
    if (super.removeEventListener(t, n, s), this.$$c) {
      const i = this.$$l_u.get(n);
      i && (i(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(r) {
        return () => {
          let c;
          return {
            c: function() {
              c = B("slot"), r !== "default" && V(c, "name", r);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(o, m) {
              v(o, c, m);
            },
            d: function(o) {
              o && E(c);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn)
        return;
      const n = {}, s = q(this);
      for (const r of this.$$s)
        r in s && (n[r] = [t(r)]);
      for (const r of this.attributes) {
        const c = this.$$g_p(r.name);
        c in this.$$d || (this.$$d[c] = g(c, r.value, this.$$p_d, "toProp"));
      }
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$scope: {
            ctx: []
          }
        }
      });
      const i = () => {
        this.$$r = !0;
        for (const r in this.$$p_d)
          if (this.$$d[r] = this.$$c.$$.ctx[this.$$c.$$.props[r]], this.$$p_d[r].reflect) {
            const c = g(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            c == null ? this.removeAttribute(r) : this.setAttribute(this.$$p_d[r].attribute || r, c);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(i), i();
      for (const r in this.$$l)
        for (const c of this.$$l[r]) {
          const $ = this.$$c.$on(r, c);
          this.$$l_u.set(c, $);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, s) {
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = g(t, s, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(t) {
    return Object.keys(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function g(e, t, n, s) {
  var r;
  const i = (r = n[e]) == null ? void 0 : r.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !s || !n[e])
    return t;
  if (s === "toAttribute")
    switch (i) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function tt(e, t, n, s, i, r) {
  let c = class extends J {
    constructor() {
      super(e, n, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        ($) => (t[$].attribute || $).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach(($) => {
    Object.defineProperty(c.prototype, $, {
      get() {
        return this.$$c && $ in this.$$c ? this.$$c[$] : this.$$d[$];
      },
      set(u) {
        var o;
        u = g($, u, t), this.$$d[$] = u, (o = this.$$c) == null || o.$set({ [$]: u });
      }
    });
  }), s.forEach(($) => {
    Object.defineProperty(c.prototype, $, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[$];
      }
    });
  }), r && (c = r(c)), e.element = /** @type {any} */
  c, c;
}
class et {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    f(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    f(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    X(this, 1), this.$destroy = a;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!P(n))
      return a;
    const s = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return s.push(n), () => {
      const i = s.indexOf(n);
      i !== -1 && s.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !T(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const nt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(nt);
function st(e) {
  let t;
  return {
    c() {
      t = B("div"), t.textContent = "hello";
    },
    m(n, s) {
      v(n, t, s);
    },
    p: a,
    i: a,
    o: a,
    d(n) {
      n && E(t);
    }
  };
}
class rt extends et {
  constructor(t) {
    super(), Z(this, t, null, st, R, {});
  }
}
tt(rt, {}, [], [], !0);
export {
  rt as default
};
