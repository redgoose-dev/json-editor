var D = Object.defineProperty;
var H = (e, t, n) => t in e ? D(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var u = (e, t, n) => (H(e, typeof t != "symbol" ? t + "" : t, n), n);
function g() {
}
function M(e) {
  return e();
}
function L() {
  return /* @__PURE__ */ Object.create(null);
}
function b(e) {
  e.forEach(M);
}
function R(e) {
  return typeof e == "function";
}
function V(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function z(e) {
  return Object.keys(e).length === 0;
}
function w(e, t) {
  e.appendChild(t);
}
function U(e, t, n) {
  const s = q(e);
  if (!s.getElementById(t)) {
    const r = j("style");
    r.id = t, r.textContent = n, F(s, r);
  }
}
function q(e) {
  if (!e)
    return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function F(e, t) {
  return w(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function I(e, t, n) {
  e.insertBefore(t, n || null);
}
function k(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function j(e) {
  return document.createElement(e);
}
function S(e) {
  return document.createTextNode(e);
}
function J(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function G(e) {
  return Array.from(e.childNodes);
}
function K(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function Q(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let O;
function _(e) {
  O = e;
}
const a = [], P = [];
let h = [];
const B = [], W = /* @__PURE__ */ Promise.resolve();
let x = !1;
function X() {
  x || (x = !0, W.then(N));
}
function E(e) {
  h.push(e);
}
const y = /* @__PURE__ */ new Set();
let d = 0;
function N() {
  if (d !== 0)
    return;
  const e = O;
  do {
    try {
      for (; d < a.length; ) {
        const t = a[d];
        d++, _(t), Y(t.$$);
      }
    } catch (t) {
      throw a.length = 0, d = 0, t;
    }
    for (_(null), a.length = 0, d = 0; P.length; )
      P.pop()();
    for (let t = 0; t < h.length; t += 1) {
      const n = h[t];
      y.has(n) || (y.add(n), n());
    }
    h.length = 0;
  } while (a.length);
  for (; B.length; )
    B.pop()();
  x = !1, y.clear(), _(e);
}
function Y(e) {
  if (e.fragment !== null) {
    e.update(), b(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(E);
  }
}
function Z(e) {
  const t = [], n = [];
  h.forEach((s) => e.indexOf(s) === -1 ? t.push(s) : n.push(s)), n.forEach((s) => s()), h = t;
}
const tt = /* @__PURE__ */ new Set();
function et(e, t) {
  e && e.i && (tt.delete(e), e.i(t));
}
function nt(e, t, n) {
  const { fragment: s, after_update: r } = e.$$;
  s && s.m(t, n), E(() => {
    const o = e.$$.on_mount.map(M).filter(R);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : b(o), e.$$.on_mount = [];
  }), r.forEach(E);
}
function st(e, t) {
  const n = e.$$;
  n.fragment !== null && (Z(n.after_update), b(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ot(e, t) {
  e.$$.dirty[0] === -1 && (a.push(e), X(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function rt(e, t, n, s, r, o, i, $ = [-1]) {
  const f = O;
  _(e);
  const c = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: g,
    not_equal: r,
    bound: L(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: L(),
    dirty: $,
    skip_bound: !1,
    root: t.target || f.$$.root
  };
  i && i(c.root);
  let m = !1;
  if (c.ctx = n ? n(e, t.props || {}, (l, v, ...A) => {
    const C = A.length ? A[0] : v;
    return c.ctx && r(c.ctx[l], c.ctx[l] = C) && (!c.skip_bound && c.bound[l] && c.bound[l](C), m && ot(e, l)), v;
  }) : [], c.update(), m = !0, b(c.before_update), c.fragment = s ? s(c.ctx) : !1, t.target) {
    if (t.hydrate) {
      const l = G(t.target);
      c.fragment && c.fragment.l(l), l.forEach(k);
    } else
      c.fragment && c.fragment.c();
    t.intro && et(e.$$.fragment), nt(e, t.target, t.anchor), N();
  }
  _(f);
}
let T;
typeof HTMLElement == "function" && (T = class extends HTMLElement {
  constructor(t, n, s) {
    super();
    /** The Svelte component constructor */
    u(this, "$$ctor");
    /** Slots */
    u(this, "$$s");
    /** The Svelte component instance */
    u(this, "$$c");
    /** Whether or not the custom element is connected */
    u(this, "$$cn", !1);
    /** Component props data */
    u(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    u(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    u(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    u(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    u(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = t, this.$$s = n, s && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, s) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const r = this.$$c.$on(t, n);
      this.$$l_u.set(n, r);
    }
    super.addEventListener(t, n, s);
  }
  removeEventListener(t, n, s) {
    if (super.removeEventListener(t, n, s), this.$$c) {
      const r = this.$$l_u.get(n);
      r && (r(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(o) {
        return () => {
          let i;
          return {
            c: function() {
              i = j("slot"), o !== "default" && J(i, "name", o);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(c, m) {
              I(c, i, m);
            },
            d: function(c) {
              c && k(i);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn)
        return;
      const n = {}, s = Q(this);
      for (const o of this.$$s)
        o in s && (n[o] = [t(o)]);
      for (const o of this.attributes) {
        const i = this.$$g_p(o.name);
        i in this.$$d || (this.$$d[i] = p(i, o.value, this.$$p_d, "toProp"));
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
      const r = () => {
        this.$$r = !0;
        for (const o in this.$$p_d)
          if (this.$$d[o] = this.$$c.$$.ctx[this.$$c.$$.props[o]], this.$$p_d[o].reflect) {
            const i = p(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            i == null ? this.removeAttribute(o) : this.setAttribute(this.$$p_d[o].attribute || o, i);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(r), r();
      for (const o in this.$$l)
        for (const i of this.$$l[o]) {
          const $ = this.$$c.$on(o, i);
          this.$$l_u.set(i, $);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, s) {
    var r;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = p(t, s, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [t]: this.$$d[t] }));
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
function p(e, t, n, s) {
  var o;
  const r = (o = n[e]) == null ? void 0 : o.type;
  if (t = r === "Boolean" && typeof t != "boolean" ? t != null : t, !s || !n[e])
    return t;
  if (s === "toAttribute")
    switch (r) {
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
    switch (r) {
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
function it(e, t, n, s, r) {
  const o = class extends T {
    constructor() {
      super(e, n, r), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (i) => (t[i].attribute || i).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((i) => {
    Object.defineProperty(o.prototype, i, {
      get() {
        return this.$$c && i in this.$$c ? this.$$c[i] : this.$$d[i];
      },
      set($) {
        var f;
        $ = p(i, $, t), this.$$d[i] = $, (f = this.$$c) == null || f.$set({ [i]: $ });
      }
    });
  }), s.forEach((i) => {
    Object.defineProperty(o.prototype, i, {
      get() {
        var $;
        return ($ = this.$$c) == null ? void 0 : $[i];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
class ct {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    u(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    u(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    st(this, 1), this.$destroy = g;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!R(n))
      return g;
    const s = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return s.push(n), () => {
      const r = s.indexOf(n);
      r !== -1 && s.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !z(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const $t = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add($t);
function ut(e) {
  U(e, "svelte-1olrgnv", ".foo.svelte-1olrgnv{font-size:36px;font-weight:700;color:green}");
}
function ft(e) {
  let t, n, s;
  return {
    c() {
      t = j("div"), n = S("json-editor-lib component123123 => "), s = S(
        /*foo*/
        e[0]
      ), J(t, "class", "foo svelte-1olrgnv");
    },
    m(r, o) {
      I(r, t, o), w(t, n), w(t, s);
    },
    p(r, [o]) {
      o & /*foo*/
      1 && K(
        s,
        /*foo*/
        r[0]
      );
    },
    i: g,
    o: g,
    d(r) {
      r && k(t);
    }
  };
}
function lt(e, t, n) {
  let { foo: s = "" } = t;
  return e.$$set = (r) => {
    "foo" in r && n(0, s = r.foo);
  }, [s];
}
class dt extends ct {
  constructor(t) {
    super(), rt(this, t, lt, ft, V, { foo: 0 }, ut);
  }
  get foo() {
    return this.$$.ctx[0];
  }
  set foo(t) {
    this.$$set({ foo: t }), N();
  }
}
it(dt, { foo: {} }, [], [], !1);
export {
  dt as default
};
