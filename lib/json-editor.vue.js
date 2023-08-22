var Be = Object.defineProperty;
var $e = (t, e, n) => e in t ? Be(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var et = (t, e, n) => ($e(t, typeof e != "symbol" ? e + "" : e, n), n), Ot = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var g = (t, e, n) => (Ot(t, e, "read from private field"), n ? n.call(t) : e.get(t)), C = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, $ = (t, e, n, i) => (Ot(t, e, "write to private field"), i ? i.call(t, n) : e.set(t, n), n);
var h = (t, e, n) => (Ot(t, e, "access private method"), n);
import { ref as Me, onMounted as Pe, onBeforeUnmount as He, watch as Gt, openBlock as Ue, createElementBlock as De } from "vue";
const O = document, pt = window, se = O.documentElement, j = O.createElement.bind(O), re = j("div"), _t = j("table"), Ie = j("tbody"), Kt = j("tr"), { isArray: Lt, prototype: oe } = Array, { concat: je, filter: Ut, indexOf: ce, map: ae, push: Ve, slice: ue, some: Dt, splice: Ye } = oe, Je = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Fe = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ze = /<.+>/, We = /^\w+$/;
function It(t, e) {
  const n = Ge(e);
  return !t || !n && !I(e) && !v(e) ? [] : !n && Fe.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && We.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class At {
  constructor(e, n) {
    if (!e)
      return;
    if ($t(e))
      return e;
    let i = e;
    if (k(e)) {
      const s = n || O;
      if (i = Je.test(e) && I(s) ? s.getElementById(e.slice(1).replace(/\\/g, "")) : Ze.test(e) ? he(e) : $t(s) ? s.find(e) : k(s) ? o(s).find(e) : It(e, s), !i)
        return;
    } else if (V(e))
      return this.ready(e);
    (i.nodeType || i === pt) && (i = [i]), this.length = i.length;
    for (let s = 0, r = this.length; s < r; s++)
      this[s] = i[s];
  }
  init(e, n) {
    return new At(e, n);
  }
}
const a = At.prototype, o = a.init;
o.fn = o.prototype = a;
a.length = 0;
a.splice = Ye;
typeof Symbol == "function" && (a[Symbol.iterator] = oe[Symbol.iterator]);
function $t(t) {
  return t instanceof At;
}
function tt(t) {
  return !!t && t === t.window;
}
function I(t) {
  return !!t && t.nodeType === 9;
}
function Ge(t) {
  return !!t && t.nodeType === 11;
}
function v(t) {
  return !!t && t.nodeType === 1;
}
function Ke(t) {
  return !!t && t.nodeType === 3;
}
function qe(t) {
  return typeof t == "boolean";
}
function V(t) {
  return typeof t == "function";
}
function k(t) {
  return typeof t == "string";
}
function L(t) {
  return t === void 0;
}
function ot(t) {
  return t === null;
}
function le(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function jt(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
o.isWindow = tt;
o.isFunction = V;
o.isArray = Lt;
o.isNumeric = le;
o.isPlainObject = jt;
function N(t, e, n) {
  if (n) {
    let i = t.length;
    for (; i--; )
      if (e.call(t[i], i, t[i]) === !1)
        return t;
  } else if (jt(t)) {
    const i = Object.keys(t);
    for (let s = 0, r = i.length; s < r; s++) {
      const u = i[s];
      if (e.call(t[u], u, t[u]) === !1)
        return t;
    }
  } else
    for (let i = 0, s = t.length; i < s; i++)
      if (e.call(t[i], i, t[i]) === !1)
        return t;
  return t;
}
o.each = N;
a.each = function(t) {
  return N(this, t);
};
a.empty = function() {
  return this.each((t, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function gt(...t) {
  const e = qe(t[0]) ? t.shift() : !1, n = t.shift(), i = t.length;
  if (!n)
    return {};
  if (!i)
    return gt(e, o, n);
  for (let s = 0; s < i; s++) {
    const r = t[s];
    for (const u in r)
      e && (Lt(r[u]) || jt(r[u])) ? ((!n[u] || n[u].constructor !== r[u].constructor) && (n[u] = new r[u].constructor()), gt(e, n[u], r[u])) : n[u] = r[u];
  }
  return n;
}
o.extend = gt;
a.extend = function(t) {
  return gt(a, t);
};
const ze = /\S+/g;
function xt(t) {
  return k(t) ? t.match(ze) || [] : [];
}
a.toggleClass = function(t, e) {
  const n = xt(t), i = !L(e);
  return this.each((s, r) => {
    v(r) && N(n, (u, c) => {
      i ? e ? r.classList.add(c) : r.classList.remove(c) : r.classList.toggle(c);
    });
  });
};
a.addClass = function(t) {
  return this.toggleClass(t, !0);
};
a.removeAttr = function(t) {
  const e = xt(t);
  return this.each((n, i) => {
    v(i) && N(e, (s, r) => {
      i.removeAttribute(r);
    });
  });
};
function Xe(t, e) {
  if (t) {
    if (k(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !v(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return ot(n) ? void 0 : n;
      }
      return L(e) ? this : ot(e) ? this.removeAttr(t) : this.each((n, i) => {
        v(i) && i.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
a.attr = Xe;
a.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
a.hasClass = function(t) {
  return !!t && Dt.call(this, (e) => v(e) && e.classList.contains(t));
};
a.get = function(t) {
  return L(t) ? ue.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
};
a.eq = function(t) {
  return o(this.get(t));
};
a.first = function() {
  return this.eq(0);
};
a.last = function() {
  return this.eq(-1);
};
function Qe(t) {
  return L(t) ? this.get().map((e) => v(e) || Ke(e) ? e.textContent : "").join("") : this.each((e, n) => {
    v(n) && (n.textContent = t);
  });
}
a.text = Qe;
function _(t, e, n) {
  if (!v(t))
    return;
  const i = pt.getComputedStyle(t, null);
  return n ? i.getPropertyValue(e) || void 0 : i[e] || t.style[e];
}
function x(t, e) {
  return parseInt(_(t, e), 10) || 0;
}
function qt(t, e) {
  return x(t, `border${e ? "Left" : "Top"}Width`) + x(t, `padding${e ? "Left" : "Top"}`) + x(t, `padding${e ? "Right" : "Bottom"}`) + x(t, `border${e ? "Right" : "Bottom"}Width`);
}
const St = {};
function tn(t) {
  if (St[t])
    return St[t];
  const e = j(t);
  O.body.insertBefore(e, null);
  const n = _(e, "display");
  return O.body.removeChild(e), St[t] = n !== "none" ? n : "block";
}
function zt(t) {
  return _(t, "display") === "none";
}
function fe(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function Tt(t) {
  return k(t) ? (e, n) => fe(n, t) : V(t) ? t : $t(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
a.filter = function(t) {
  const e = Tt(t);
  return o(Ut.call(this, (n, i) => e.call(n, i, n)));
};
function M(t, e) {
  return e ? t.filter(e) : t;
}
a.detach = function(t) {
  return M(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const en = /^\s*<(\w+)[^>]*>/, nn = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Xt = {
  "*": re,
  tr: Ie,
  td: Kt,
  th: Kt,
  thead: _t,
  tbody: _t,
  tfoot: _t
};
function he(t) {
  if (!k(t))
    return [];
  if (nn.test(t))
    return [j(RegExp.$1)];
  const e = en.test(t) && RegExp.$1, n = Xt[e] || Xt["*"];
  return n.innerHTML = t, o(n.childNodes).detach().get();
}
o.parseHTML = he;
a.has = function(t) {
  const e = k(t) ? (n, i) => It(t, i).length : (n, i) => i.contains(t);
  return this.filter(e);
};
a.not = function(t) {
  const e = Tt(t);
  return this.filter((n, i) => (!k(t) || v(i)) && !e.call(i, n, i));
};
function S(t, e, n, i) {
  const s = [], r = V(e), u = i && Tt(i);
  for (let c = 0, d = t.length; c < d; c++)
    if (r) {
      const f = e(t[c]);
      f.length && Ve.apply(s, f);
    } else {
      let f = t[c][e];
      for (; f != null && !(i && u(-1, f)); )
        s.push(f), f = n ? f[e] : null;
    }
  return s;
}
function de(t) {
  return t.multiple && t.options ? S(Ut.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function sn(t) {
  return arguments.length ? this.each((e, n) => {
    const i = n.multiple && n.options;
    if (i || ve.test(n.type)) {
      const s = Lt(t) ? ae.call(t, String) : ot(t) ? [] : [String(t)];
      i ? N(n.options, (r, u) => {
        u.selected = s.indexOf(u.value) >= 0;
      }, !0) : n.checked = s.indexOf(n.value) >= 0;
    } else
      n.value = L(t) || ot(t) ? "" : t;
  }) : this[0] && de(this[0]);
}
a.val = sn;
a.is = function(t) {
  const e = Tt(t);
  return Dt.call(this, (n, i) => e.call(n, i, n));
};
o.guid = 1;
function T(t) {
  return t.length > 1 ? Ut.call(t, (e, n, i) => ce.call(i, e) === n) : t;
}
o.unique = T;
a.add = function(t, e) {
  return o(T(this.get().concat(o(t, e).get())));
};
a.children = function(t) {
  return M(o(T(S(this, (e) => e.children))), t);
};
a.parent = function(t) {
  return M(o(T(S(this, "parentNode"))), t);
};
a.index = function(t) {
  const e = t ? o(t)[0] : this[0], n = t ? this : o(e).parent().children();
  return ce.call(n, e);
};
a.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const n = this.parent();
  return n.length ? n.closest(t) : e;
};
a.siblings = function(t) {
  return M(o(T(S(this, (e) => o(e).parent().children().not(e)))), t);
};
a.find = function(t) {
  return o(T(S(this, (e) => It(t, e))));
};
const rn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, on = /^$|^module$|\/(java|ecma)script/i, cn = ["type", "src", "nonce", "noModule"];
function an(t, e) {
  const n = o(t);
  n.filter("script").add(n.find("script")).each((i, s) => {
    if (on.test(s.type) && se.contains(s)) {
      const r = j("script");
      r.text = s.textContent.replace(rn, ""), N(cn, (u, c) => {
        s[c] && (r[c] = s[c]);
      }), e.head.insertBefore(r, null), e.head.removeChild(r);
    }
  });
}
function un(t, e, n, i, s) {
  i ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), s && an(e, t.ownerDocument);
}
function P(t, e, n, i, s, r, u, c) {
  return N(t, (d, f) => {
    N(o(f), (p, E) => {
      N(o(e), (w, m) => {
        const B = n ? E : m, b = n ? m : E, Y = n ? p : w;
        un(B, Y ? b.cloneNode(!0) : b, i, s, !Y);
      }, c);
    }, u);
  }, r), e;
}
a.after = function() {
  return P(arguments, this, !1, !1, !1, !0, !0);
};
a.append = function() {
  return P(arguments, this, !1, !1, !0);
};
function ln(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (L(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, i) => {
    v(i) && (e ? o(i).empty().append(t) : i.innerHTML = t);
  });
}
a.html = ln;
a.appendTo = function(t) {
  return P(arguments, this, !0, !1, !0);
};
a.wrapInner = function(t) {
  return this.each((e, n) => {
    const i = o(n), s = i.contents();
    s.length ? s.wrapAll(t) : i.append(t);
  });
};
a.before = function() {
  return P(arguments, this, !1, !0);
};
a.wrapAll = function(t) {
  let e = o(t), n = e[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(e), this.appendTo(n);
};
a.wrap = function(t) {
  return this.each((e, n) => {
    const i = o(t)[0];
    o(n).wrapAll(e ? i.cloneNode(!0) : i);
  });
};
a.insertAfter = function(t) {
  return P(arguments, this, !0, !1, !1, !1, !1, !0);
};
a.insertBefore = function(t) {
  return P(arguments, this, !0, !0);
};
a.prepend = function() {
  return P(arguments, this, !1, !0, !0, !0, !0);
};
a.prependTo = function(t) {
  return P(arguments, this, !0, !0, !0, !1, !1, !0);
};
a.contents = function() {
  return o(T(S(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
a.next = function(t, e, n) {
  return M(o(T(S(this, "nextElementSibling", e, n))), t);
};
a.nextAll = function(t) {
  return this.next(t, !0);
};
a.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
a.parents = function(t, e) {
  return M(o(T(S(this, "parentElement", !0, e))), t);
};
a.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
a.prev = function(t, e, n) {
  return M(o(T(S(this, "previousElementSibling", e, n))), t);
};
a.prevAll = function(t) {
  return this.prev(t, !0);
};
a.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
a.map = function(t) {
  return o(je.apply([], ae.call(this, (e, n) => t.call(e, n, e))));
};
a.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
a.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && _(n, "position") === "static"; )
      n = n.offsetParent;
    return n || se;
  });
};
a.slice = function(t, e) {
  return o(ue.call(this, t, e));
};
const fn = /-([a-z])/g;
function Vt(t) {
  return t.replace(fn, (e, n) => n.toUpperCase());
}
a.ready = function(t) {
  const e = () => setTimeout(t, 0, o);
  return O.readyState !== "loading" ? e() : O.addEventListener("DOMContentLoaded", e), this;
};
a.unwrap = function() {
  return this.parent().each((t, e) => {
    if (e.tagName === "BODY")
      return;
    const n = o(e);
    n.replaceWith(n.children());
  }), this;
};
a.offset = function() {
  const t = this[0];
  if (!t)
    return;
  const e = t.getBoundingClientRect();
  return {
    top: e.top + pt.pageYOffset,
    left: e.left + pt.pageXOffset
  };
};
a.position = function() {
  const t = this[0];
  if (!t)
    return;
  const e = _(t, "position") === "fixed", n = e ? t.getBoundingClientRect() : this.offset();
  if (!e) {
    const i = t.ownerDocument;
    let s = t.offsetParent || i.documentElement;
    for (; (s === i.body || s === i.documentElement) && _(s, "position") === "static"; )
      s = s.parentNode;
    if (s !== t && v(s)) {
      const r = o(s).offset();
      n.top -= r.top + x(s, "borderTopWidth"), n.left -= r.left + x(s, "borderLeftWidth");
    }
  }
  return {
    top: n.top - x(t, "marginTop"),
    left: n.left - x(t, "marginLeft")
  };
};
const pe = {
  /* GENERAL */
  class: "className",
  contenteditable: "contentEditable",
  /* LABEL */
  for: "htmlFor",
  /* INPUT */
  readonly: "readOnly",
  maxlength: "maxLength",
  tabindex: "tabIndex",
  /* TABLE */
  colspan: "colSpan",
  rowspan: "rowSpan",
  /* IMAGE */
  usemap: "useMap"
};
a.prop = function(t, e) {
  if (t) {
    if (k(t))
      return t = pe[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, i) => {
        i[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
a.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[pe[t] || t];
  });
};
const hn = /^--/;
function Yt(t) {
  return hn.test(t);
}
const Bt = {}, { style: dn } = re, pn = ["webkit", "moz", "ms"];
function gn(t, e = Yt(t)) {
  if (e)
    return t;
  if (!Bt[t]) {
    const n = Vt(t), i = `${n[0].toUpperCase()}${n.slice(1)}`, s = `${n} ${pn.join(`${i} `)}${i}`.split(" ");
    N(s, (r, u) => {
      if (u in dn)
        return Bt[t] = u, !1;
    });
  }
  return Bt[t];
}
const yn = {
  animationIterationCount: !0,
  columnCount: !0,
  flexGrow: !0,
  flexShrink: !0,
  fontWeight: !0,
  gridArea: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnStart: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowStart: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  widows: !0,
  zIndex: !0
};
function ge(t, e, n = Yt(t)) {
  return !n && !yn[t] && le(e) ? `${e}px` : e;
}
function mn(t, e) {
  if (k(t)) {
    const n = Yt(t);
    return t = gn(t, n), arguments.length < 2 ? this[0] && _(this[0], t, n) : t ? (e = ge(t, e, n), this.each((i, s) => {
      v(s) && (n ? s.style.setProperty(t, e) : s.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
a.css = mn;
function ye(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const bn = /^\s+|\s+$/;
function Qt(t, e) {
  const n = t.dataset[e] || t.dataset[Vt(e)];
  return bn.test(n) ? n : ye(JSON.parse, n);
}
function Cn(t, e, n) {
  n = ye(JSON.stringify, n), t.dataset[Vt(e)] = n;
}
function wn(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const i in this[0].dataset)
      n[i] = Qt(this[0], i);
    return n;
  }
  if (k(t))
    return arguments.length < 2 ? this[0] && Qt(this[0], t) : L(e) ? this : this.each((n, i) => {
      Cn(i, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
a.data = wn;
function me(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
N([!0, !1], (t, e) => {
  N(["Width", "Height"], (n, i) => {
    const s = `${e ? "outer" : "inner"}${i}`;
    a[s] = function(r) {
      if (this[0])
        return tt(this[0]) ? e ? this[0][`inner${i}`] : this[0].document.documentElement[`client${i}`] : I(this[0]) ? me(this[0], i) : this[0][`${e ? "offset" : "client"}${i}`] + (r && e ? x(this[0], `margin${n ? "Top" : "Left"}`) + x(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
N(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  a[n] = function(i) {
    if (!this[0])
      return L(i) ? void 0 : this;
    if (!arguments.length)
      return tt(this[0]) ? this[0].document.documentElement[`client${e}`] : I(this[0]) ? me(this[0], e) : this[0].getBoundingClientRect()[n] - qt(this[0], !t);
    const s = parseInt(i, 10);
    return this.each((r, u) => {
      if (!v(u))
        return;
      const c = _(u, "boxSizing");
      u.style[n] = ge(n, s + (c === "border-box" ? qt(u, !t) : 0));
    });
  };
});
const te = "___cd";
a.toggle = function(t) {
  return this.each((e, n) => {
    if (!v(n))
      return;
    const i = zt(n);
    (L(t) ? i : t) ? (n.style.display = n[te] || "", zt(n) && (n.style.display = tn(n.tagName))) : i || (n[te] = _(n, "display"), n.style.display = "none");
  });
};
a.hide = function() {
  return this.toggle(!1);
};
a.show = function() {
  return this.toggle(!0);
};
const ee = "___ce", Jt = ".", Ft = { focus: "focusin", blur: "focusout" }, be = { mouseenter: "mouseover", mouseleave: "mouseout" }, vn = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Zt(t) {
  return be[t] || Ft[t] || t;
}
function Wt(t) {
  const e = t.split(Jt);
  return [e[0], e.slice(1).sort()];
}
a.trigger = function(t, e) {
  if (k(t)) {
    const [i, s] = Wt(t), r = Zt(i);
    if (!r)
      return this;
    const u = vn.test(r) ? "MouseEvents" : "HTMLEvents";
    t = O.createEvent(u), t.initEvent(r, !0, !0), t.namespace = s.join(Jt), t.___ot = i;
  }
  t.___td = e;
  const n = t.___ot in Ft;
  return this.each((i, s) => {
    n && V(s[t.___ot]) && (s[`___i${t.type}`] = !0, s[t.___ot](), s[`___i${t.type}`] = !1), s.dispatchEvent(t);
  });
};
function Ce(t) {
  return t[ee] = t[ee] || {};
}
function Nn(t, e, n, i, s) {
  const r = Ce(t);
  r[e] = r[e] || [], r[e].push([n, i, s]), t.addEventListener(e, s);
}
function we(t, e) {
  return !e || !Dt.call(e, (n) => t.indexOf(n) < 0);
}
function yt(t, e, n, i, s) {
  const r = Ce(t);
  if (e)
    r[e] && (r[e] = r[e].filter(([u, c, d]) => {
      if (s && d.guid !== s.guid || !we(u, n) || i && i !== c)
        return !0;
      t.removeEventListener(e, d);
    }));
  else
    for (e in r)
      yt(t, e, n, i, s);
}
a.off = function(t, e, n) {
  if (L(t))
    this.each((i, s) => {
      !v(s) && !I(s) && !tt(s) || yt(s);
    });
  else if (k(t))
    V(e) && (n = e, e = ""), N(xt(t), (i, s) => {
      const [r, u] = Wt(s), c = Zt(r);
      this.each((d, f) => {
        !v(f) && !I(f) && !tt(f) || yt(f, c, u, e, n);
      });
    });
  else
    for (const i in t)
      this.off(i, t[i]);
  return this;
};
a.remove = function(t) {
  return M(this, t).detach().off(), this;
};
a.replaceWith = function(t) {
  return this.before(t).remove();
};
a.replaceAll = function(t) {
  return o(t).replaceWith(this), this;
};
function En(t, e, n, i, s) {
  if (!k(t)) {
    for (const r in t)
      this.on(r, e, n, t[r], s);
    return this;
  }
  return k(e) || (L(e) || ot(e) ? e = "" : L(n) ? (n = e, e = "") : (i = n, n = e, e = "")), V(i) || (i = n, n = void 0), i ? (N(xt(t), (r, u) => {
    const [c, d] = Wt(u), f = Zt(c), p = c in be, E = c in Ft;
    f && this.each((w, m) => {
      if (!v(m) && !I(m) && !tt(m))
        return;
      const B = function(b) {
        if (b.target[`___i${b.type}`])
          return b.stopImmediatePropagation();
        if (b.namespace && !we(d, b.namespace.split(Jt)) || !e && (E && (b.target !== m || b.___ot === f) || p && b.relatedTarget && m.contains(b.relatedTarget)))
          return;
        let Y = m;
        if (e) {
          let J = b.target;
          for (; !fe(J, e); )
            if (J === m || (J = J.parentNode, !J))
              return;
          Y = J;
        }
        Object.defineProperty(b, "currentTarget", {
          configurable: !0,
          get() {
            return Y;
          }
        }), Object.defineProperty(b, "delegateTarget", {
          configurable: !0,
          get() {
            return m;
          }
        }), Object.defineProperty(b, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const Se = i.call(Y, b, b.___td);
        s && yt(m, f, d, e, B), Se === !1 && (b.preventDefault(), b.stopPropagation());
      };
      B.guid = i.guid = i.guid || o.guid++, Nn(m, f, d, e, B);
    });
  }), this) : this;
}
a.on = En;
function kn(t, e, n, i) {
  return this.on(t, e, n, i, !0);
}
a.one = kn;
const Rn = /\r?\n/g;
function Ln(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(Rn, `\r
`))}`;
}
const An = /file|reset|submit|button|image/i, ve = /radio|checkbox/i;
a.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    N(n.elements || [n], (i, s) => {
      if (s.disabled || !s.name || s.tagName === "FIELDSET" || An.test(s.type) || ve.test(s.type) && !s.checked)
        return;
      const r = de(s);
      if (!L(r)) {
        const u = Lt(r) ? r : [r];
        N(u, (c, d) => {
          t += Ln(s.name, d);
        });
      }
    });
  }), t.slice(1);
};
const xn = {
  live: !1,
  // live update
  theme: "system"
  // system,light,dark
}, Tn = {
  data: void 0,
  between: "after",
  open: !0,
  callback: void 0
}, l = {
  OBJECT: "object",
  ARRAY: "array",
  STRING: "string",
  NUMBER: "number",
  BOOLEAN: "boolean",
  NULL: "null"
}, F = {
  START: "pointerdown",
  MOVE: "pointermove",
  END: "pointerup.json-editor pointercancel.json-editor"
}, Z = {
  CLICK: "click.json-editor-context",
  KEYUP: "keyup.json-editor-context"
}, nt = {
  START: "drag-over-start",
  END: "drag-over-end",
  ALL: "drag-over-start drag-over-end"
}, On = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12L10 8L6 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', _n = '<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-90, 10, 10)"><path d="M7 9L10 12L13 9" fill="currentColor"/><path d="M7 9L10 12L13 9H7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>', Sn = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', Ne = {
  object: '<svg viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-object"><g transform="translate(0 1)"><path d="M2.296 5.166C2.296 7.238 3.78 8.162 5.166 8.162C6.538 8.162 8.022 7.238 8.022 5.166C8.022 3.094 6.538 2.156 5.166 2.156C3.78 2.156 2.296 3.094 2.296 5.166ZM0 5.18C0 2.03 2.366 0 5.166 0C7.952 0 10.318 2.03 10.318 5.18C10.318 8.316 7.952 10.346 5.166 10.346C2.366 10.346 0 8.316 0 5.18Z" fill="currentColor"/></g></svg>',
  array: '<svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-array"><path d="M7.728 9.926L6.902 7.658H2.87L2.044 9.926H0L3.808 0H6.048L9.828 9.926H7.728ZM4.886 2.142L3.514 5.894H6.258L4.886 2.142Z" fill="currentColor"/></svg>',
  string: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-string"><g transform="translate(0 1)"><path d="M7.39203 2.576L5.65603 3.108C5.55803 2.562 5.11003 1.708 3.85003 1.708C2.91203 1.708 2.29603 2.31 2.29603 2.968C2.29603 3.514 2.64603 3.948 3.37403 4.088L4.76003 4.354C6.56603 4.704 7.53203 5.88 7.53203 7.28C7.53203 8.806 6.25803 10.346 3.94803 10.346C1.31603 10.346 0.154031 8.652 3.05176e-05 7.238L1.79203 6.762C1.87603 7.742 2.56203 8.624 3.96203 8.624C4.99803 8.624 5.57203 8.106 5.57203 7.406C5.57203 6.832 5.13803 6.384 4.36803 6.23L2.98203 5.95C1.40003 5.628 0.378031 4.606 0.378031 3.108C0.378031 1.344 1.96003 0 3.83603 0C6.24403 0 7.16803 1.456 7.39203 2.576Z" fill="currentColor"/></g></svg>',
  number: '<svg viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-number"><path d="M8.47003 9.926H6.44003L1.93203 2.884V9.926H3.05176e-05V0H2.40803L6.53803 6.566V0H8.47003V9.926Z" fill="currentColor"/></svg>',
  boolean: '<svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-boolean"><path d="M3.05176e-05 0H3.57003C5.50203 0 6.59403 1.134 6.59403 2.674C6.59403 3.696 5.97803 4.522 5.15203 4.802C6.11803 5.04 6.90203 5.922 6.90203 7.154C6.90203 8.764 5.69803 9.926 3.83603 9.926H3.05176e-05V0ZM1.90403 4.102H3.27603C4.15803 4.102 4.69003 3.612 4.69003 2.856C4.69003 2.1 4.20003 1.624 3.26203 1.624H1.90403V4.102ZM1.90403 8.316H3.47203C4.41003 8.316 4.97003 7.826 4.97003 7.028C4.97003 6.244 4.46603 5.698 3.50003 5.698H1.90403V8.316Z" fill="currentColor"/></svg>',
  null: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-null"><g transform="translate(0 1.5)"><path d="M3.808 10.15C1.694 10.15 0 8.848 0 6.412V0H1.932V6.272C1.932 7.574 2.66 8.26 3.808 8.26C4.984 8.26 5.698 7.574 5.698 6.272V0H7.63V6.412C7.63 8.848 5.936 10.15 3.808 10.15Z" fill="currentColor"/></g></svg>'
}, Bn = [
  {
    key: "change-type",
    label: "Change type",
    children: [
      { key: l.OBJECT, label: "Object" },
      { key: l.ARRAY, label: "Array" },
      { key: l.STRING, label: "String" },
      { key: l.NUMBER, label: "Number" },
      { key: l.BOOLEAN, label: "Boolean" },
      { key: l.NULL, label: "Null" }
    ]
  },
  {
    key: "insert",
    label: "Insert",
    children: [
      { key: l.OBJECT, label: "Object" },
      { key: l.ARRAY, label: "Array" },
      { key: l.STRING, label: "String" },
      { key: l.NUMBER, label: "Number" },
      { key: l.BOOLEAN, label: "Boolean" },
      { key: l.NULL, label: "Null" }
    ]
  },
  { key: "duplicate", label: "Duplicate" },
  { key: "remove", label: "Remove" }
];
var W, G, mt, Ee, bt, ke, Ct, Re;
class $n {
  constructor(e, n, i = !1) {
    C(this, mt);
    C(this, bt);
    C(this, Ct);
    C(this, W, void 0);
    et(this, "el", {
      node: void 0,
      type: void 0,
      dialog: void 0
    });
    C(this, G, void 0);
    $(this, W, e), this.el.node = o(n), $(this, G, String(this.el.node.data("type"))), this.el.type = this.el.node.find("& > .node__body > .type"), this.el.type.addClass("open"), this.el.dialog = h(this, mt, Ee).call(this, Bn, g(this, G), i), this.el.dialog.on("click", (s) => s.stopPropagation()), this.el.dialog.find("button").on("click", (s) => h(this, bt, ke).call(this, s)), g(this, W).customContext(this.el.dialog.get(0), {
      node: this.el.node.get(0),
      type: g(this, G),
      isRoot: i
    }, o), this.el.type.append(this.el.dialog), o("body").on(Z.CLICK, (s) => this.close(s)), o(window).on(Z.KEYUP, (s) => h(this, Ct, Re).call(this, s));
  }
  close() {
    this.el.type.removeClass("open"), this.el.dialog.remove(), o("body").off(Z.CLICK), o(window).off(Z.KEYUP), delete g(this, W).context;
  }
}
W = new WeakMap(), G = new WeakMap(), mt = new WeakSet(), Ee = function(e, n, i = !1) {
  function s(c, d) {
    let f = "";
    const { key: p, label: E, children: w } = c;
    if (i)
      switch (p) {
        case l.STRING:
        case l.NUMBER:
        case l.BOOLEAN:
        case l.NULL:
          if (d === "change-type")
            return "";
          break;
        case "duplicate":
        case "remove":
          return "";
      }
    let m = "", B = "", b = "";
    switch (p) {
      case "change-type":
        m = ' class="dropdown"', b = " disabled";
        break;
      case "insert":
        if ([l.STRING, l.NUMBER, l.BOOLEAN, l.NULL].indexOf(n) > -1)
          return "";
        m = ' class="dropdown"', b = " disabled";
        break;
      case "duplicate":
        m = ' class="duplicate"', b = ' data-mode="duplicate"';
        break;
      case "remove":
        m = ' class="remove"', b = ' data-mode="remove"';
        break;
      case l.OBJECT:
      case l.ARRAY:
      case l.STRING:
      case l.NUMBER:
      case l.BOOLEAN:
      case l.NULL:
        m = ' class="type"', B = `<i class="type-icon type-icon--${p}">${Ne[p]}</i>`, b = ` data-mode="${d}" data-type="${p}"`, d === "change-type" && p === n && (b = " disabled");
        break;
    }
    return f += `<li${m}>`, f += `<button type="button"${b}>`, f += B, f += `<em class="label">${E}</em>`, (p === "change-type" || p === "insert") && (f += `<span class="arrow">${On}</span>`), f += "</button>", (w == null ? void 0 : w.length) > 0 && (f += '<div class="children">', f += r(w, p), f += "</div>"), f += "</li>", f;
  }
  function r(c, d = void 0) {
    let f = "<ol>";
    for (let p in c)
      f += s(c[p], d);
    return f += "</ol>", f;
  }
  let u = `<nav class="context${i ? " is-root" : ""}">`;
  return u += r(e), u += "</nav>", o(u);
}, bt = new WeakSet(), ke = function(e) {
  const n = o(e.currentTarget), i = n.data("mode");
  let s = String(n.data("type"));
  s = s === "undefined" ? "" : s, this.close(), this.selectItem && typeof this.selectItem == "function" && this.selectItem(this.el.node, i, s);
}, Ct = new WeakSet(), Re = function(e) {
  e.code === "Escape" && this.close();
};
function ne(t) {
  return t == null ? "null" : Array.isArray(t) ? "array" : typeof t == "string" ? "string" : typeof t == "number" ? "number" : typeof t == "boolean" ? "boolean" : "object";
}
function Mn(t) {
  try {
    return typeof t == "string" ? JSON.parse(t) : Array.isArray(t) ? Object.assign([], t) : o.isPlainObject(t) ? Object.assign({}, t) : {};
  } catch (e) {
    console.error("error", e.message);
  }
}
function Pn(t) {
  return Array.isArray(t) ? t.length : o.isPlainObject(t) ? Object.keys(t).length : 0;
}
function ie(t) {
  if (t.ctrlKey || t.metaKey)
    switch (t.keyCode) {
      case 66:
      case 98:
      case 73:
      case 105:
      case 85:
      case 117:
        return !0;
    }
  return !1;
}
var y, K, wt, Le, ct, Mt, q, lt, vt, Ae, Nt, xe, z, ft, H, it, at, Pt, R, A, ut, Ht, U, st, D, rt, X, ht, Q, dt, Et, Te, kt, Oe, Rt, _e;
class Hn {
  constructor(e, n = {}) {
    C(this, wt);
    C(this, ct);
    C(this, q);
    C(this, vt);
    C(this, Nt);
    C(this, z);
    C(this, H);
    C(this, at);
    C(this, R);
    C(this, ut);
    C(this, U);
    /**
     * NODE EVENTS
     */
    C(this, D);
    C(this, X);
    C(this, Q);
    C(this, Et);
    C(this, kt);
    C(this, Rt);
    et(this, "el", { wrap: null, body: null, tree: null });
    et(this, "options");
    et(this, "context");
    C(this, y, void 0);
    C(this, K, !1);
    this.$ = o, this.el.wrap = o(e), this.el.body = o('<div class="json-editor"></div>'), this.options = new Proxy(Object.assign({}, xn, n), {
      get: (i, s) => i[s],
      set: h(this, wt, Le).bind(this)
    }), this.el.wrap.append(this.el.body), h(this, ct, Mt).call(this, this.options.theme), this.replace({}, !1);
  }
  /**
   * PUBLIC METHODS
   */
  /**
   * add node
   * @param {HTMLElement} $target
   * @param {object} options
   * @param {boolean} useUpdate
   * @param {boolean} useUpdateCount
   */
  addNode(e, n, i = !0, s = !0) {
    n = { ...Tn, ...n };
    const { data: r, between: u, open: c, callback: d } = n;
    e = o(e);
    const { key: f, value: p, type: E } = r, w = h(this, q, lt).call(this, E, !1);
    h(this, z, ft).call(this, w, { ...r, open: c }), h(this, D, rt).call(this, w);
    const m = e.find("& > .node__children > ul");
    u === "before" ? m.prepend(w) : m.append(w), s && h(this, U, st).call(this, e), (E === l.ARRAY || E === l.OBJECT) && d && typeof d == "function" && d(w.get(0), p), i && h(this, R, A).call(this);
  }
  /**
   * remove node
   * @param {HTMLElement} $node
   * @param {boolean} useUpdate
   */
  removeNode(e, n = !0) {
    e = o(e);
    const i = e.parent().closest(".node");
    e.remove(), h(this, U, st).call(this, i), n && h(this, R, A).call(this);
  }
  /**
   * change type
   * @param {HTMLElement} node
   * @param {'object'|'array'|'string'|'number'|'boolean'|'null'} type
   * @param {boolean} useUpdate
   */
  changeType(e, n, i = !0) {
    const s = o(e), r = {
      key: s.find("& > .node__body .key").text(),
      value: h(this, at, Pt).call(this, s),
      type: n,
      open: s.hasClass("open")
    }, u = s.find("& > .node__children > .tree").html(), c = s.hasClass("root");
    s.empty(), s.html(h(this, q, lt).call(this, n, c).html()), u && s.find("& > .node__children > .tree").html(u), h(this, z, ft).call(this, s, r), h(this, D, rt).call(this, s), s.attr("data-type", n), i && h(this, R, A).call(this);
  }
  /**
   * duplicate
   * @param {HTMLElement} $target
   * @param {boolean} useUpdate
   */
  duplicate(e, n = !0) {
    e = o(e);
    const i = o(e.get(0).outerHTML);
    h(this, D, rt).call(this, i), e.after(i), h(this, U, st).call(this, e.parent().closest(".node")), n && h(this, R, A).call(this);
  }
  /**
   * fold node
   * @param {HTMLElement} $node
   * @param {boolean} sw
   */
  fold(e, n) {
    e = o(e), n === void 0 ? e.toggleClass("open") : n === !0 ? e.addClass("open") : e.removeClass("open");
  }
  clear() {
    this.el.tree && (this.el.body.empty(), this.replace({}, !1), h(this, R, A).call(this));
  }
  destroy() {
    o(window).off(F.END).off(Z.CLICK).off(Z.KEYUP), this.el.wrap.empty();
  }
  /**
   * replace
   * @param {object|array} data
   * @param {boolean} useUpdate
   */
  replace(e, n = !0) {
    this.el.body.empty(), e = Mn(e);
    const i = h(this, vt, Ae).call(this, e);
    this.import(i, e, !1, !1), n && h(this, R, A).call(this);
  }
  /**
   * import data
   * @param {HTMLElement} $target
   * @param {object|array} data
   * @param {boolean} useUpdate
   * @param {boolean} useUpdateCount
   */
  import(e, n, i = !0, s = !0) {
    e = o(e), o.each(n, (r, u) => {
      const c = ne(u), d = { key: r, value: u, type: c };
      this.addNode(e, {
        data: d,
        open: !1,
        callback: (f, p) => this.import(f, p, !1, !1)
      }, !1, !1);
    }), s && h(this, U, st).call(this, e), i && h(this, R, A).call(this);
  }
  /**
   * export
   * @param {HTMLElement} $node
   * @param {boolean} json
   * @param {number|boolean} space (number: space count, true: tab, false: 0)
   * @return {array|object}
   */
  export(e = void 0, n, i = 2) {
    let s = h(this, ut, Ht).call(this, e);
    if (n) {
      let r = 2;
      return i === !0 ? r = "	" : typeof i === l.NUMBER && (r = i), JSON.stringify(s, null, r);
    } else
      return s;
  }
  /**
   * preview
   * @param {array|object} src
   */
  preview(e) {
  }
  customContext(e, { node: n, type: i, isRoot: s }, r) {
  }
}
y = new WeakMap(), K = new WeakMap(), wt = new WeakSet(), Le = function(e, n, i) {
  switch (e[n] = i, n) {
    case "theme":
      h(this, ct, Mt).call(this, i);
      break;
  }
  return !0;
}, ct = new WeakSet(), Mt = function(e) {
  e = ["system", "light", "dark"].indexOf(e) > -1 ? e : "system", this.el.body.attr("data-theme", e);
}, q = new WeakSet(), lt = function(e, n = !1) {
  let i = `<li data-type="${e}" class="node${n ? " root" : ""}">`;
  return i += '<div class="node__body">', n || (i += `<div class="sort">${Sn}</div>`), i += '<div class="type"><button type="button"></button></div>', (e === l.OBJECT || e === l.ARRAY) && (i += `<button type="button" class="fold">${_n}</button>`), n || (i += '<div class="key"></div>'), i += '<em class="count"></em>', n || (i += '<div class="value"></div>'), i += "</div>", i += '<div class="node__children"><ul class="tree"/></div>', i += "</li>", o(i);
}, vt = new WeakSet(), Ae = function(e) {
  const n = ne(e), i = h(this, q, lt).call(this, n, !0);
  return h(this, z, ft).call(this, i, {
    key: void 0,
    value: e,
    type: n,
    open: !0
  }), h(this, D, rt).call(this, i), this.el.tree = o("<ul/>"), this.el.tree.append(i), this.el.body.append(this.el.tree), i;
}, Nt = new WeakSet(), xe = function(e, n, i) {
  switch (n) {
    case "change-type":
      this.changeType(e, i);
      break;
    case "insert":
      this.fold(e, !0), this.addNode(e, {
        data: { key: "", value: "", type: i }
      });
      break;
    case "duplicate":
      this.duplicate(e);
      break;
    case "remove":
      this.removeNode(e);
      break;
  }
}, z = new WeakSet(), ft = function(e, n) {
  const { key: i, value: s, type: r, open: u } = n, c = e.hasClass("root"), d = e.children(".node__body");
  if (d.find(".type > button").html(`<i class="type-icon type-icon--${r}">${Ne[r]}</i>`), (r === l.OBJECT || r === l.ARRAY) && this.fold(e, u), !c) {
    d.find(".key").html(`<div class="label-field" contenteditable="true" data-placeholder="empty">${i}</div>`);
    const f = d.find(".value");
    let p;
    switch (r) {
      case l.STRING:
        f.html(`<div contenteditable="true" data-placeholder="empty" class="label-field type-string">${String(s)}</div>`);
        break;
      case l.NUMBER:
        p = Number(s), isNaN(p) && (p = 0), f.html(`<input type="number" value="${p}" placeholder="0" class="label-field type-number"/>`);
        break;
      case l.BOOLEAN:
        p = s === "false" ? !1 : !!s, f.html(`<button type="button" data-value="${p}" class="label-switch type-boolean"><span><i>${p.toString().toUpperCase()}</i></span></button>`);
        break;
      case l.NULL:
        f.html('<em class="label-null type-null">NULL</em>');
        break;
    }
  }
  if (r === l.OBJECT || r === l.ARRAY) {
    const f = Pn(s);
    isNaN(f) || d.find(".count").text(f);
  }
}, H = new WeakSet(), it = function(e) {
  return String(e.data("type"));
}, at = new WeakSet(), Pt = function(e) {
  const n = h(this, H, it).call(this, e), i = e.find("& > .node__body > .value");
  switch (n) {
    case l.OBJECT:
    case l.ARRAY:
      return "";
    case l.STRING:
      return i.children(".type-string").get(0).innerText || "";
    case l.NUMBER:
      return Number(i.children(".type-number").val());
    case l.BOOLEAN:
      return i.children(".type-boolean").data("value");
    case l.NULL:
      return null;
  }
}, R = new WeakSet(), A = function() {
  this.options.live && this.preview && typeof this.preview == "function" && this.preview(h(this, ut, Ht).call(this));
}, ut = new WeakSet(), Ht = function(e) {
  const n = (r, u) => {
    let c = u === l.ARRAY ? [] : {};
    return r.find("& > .node__children > ul > li").each((f, p) => {
      if (!(u === l.ARRAY || u === l.OBJECT))
        return !0;
      p = o(p);
      const E = h(this, H, it).call(this, p);
      switch (E) {
        case l.OBJECT:
        case l.ARRAY:
          switch (u) {
            case l.ARRAY:
              c.push(n(p, E));
              break;
            case l.OBJECT:
              const m = p.find("& > .node__body > .key").text();
              m && (c[m] = n(p, E));
              break;
          }
          break;
        case l.STRING:
        case l.NUMBER:
        case l.BOOLEAN:
        case l.NULL:
          const w = h(this, at, Pt).call(this, p);
          switch (u) {
            case l.ARRAY:
              c.push(w);
              break;
            case l.OBJECT:
              const m = p.find("& > .node__body > .key").text();
              m && (c[m] = w);
              break;
          }
          break;
      }
    }), c;
  };
  e = o(e);
  const i = (e == null ? void 0 : e.length) > 0 ? e : this.el.tree.children(".node"), s = h(this, H, it).call(this, i);
  return [l.OBJECT, l.ARRAY].includes(s) ? n(i, s) : void 0;
}, U = new WeakSet(), st = function(e) {
  e = o(e);
  const n = h(this, H, it).call(this, e);
  if (!(n === "object" || n === "array"))
    return;
  const i = e.find("& > .node__children > ul > li").length;
  isNaN(i) || e.find("& > .node__body > .count").text(i);
}, D = new WeakSet(), rt = function(e) {
  const n = e.find(".sort");
  n.length && n.on(F.START, h(this, Et, Te).bind(this)), e.find(".type > button").on("click", async (c) => {
    const d = o(c.currentTarget);
    if (c.stopPropagation(), d.parent().hasClass("open"))
      this.context && this.context.close();
    else {
      this.context && this.context.close();
      const f = d.closest(".node").hasClass("root");
      this.context = new $n(this, d.closest(".node"), f), this.context.selectItem = (p, E, w) => h(this, Nt, xe).call(this, p, E, w);
    }
  }), e.find(".fold").on("click", (c) => {
    const f = o(c.currentTarget).closest(".node");
    this.fold(f);
  });
  const i = e.find(".key > .label-field");
  i.length && i.on("keydown", (c) => {
    if (c.keyCode === 13 || ie(c))
      return c.preventDefault();
  }).on("input", (c) => h(this, X, ht).call(this, c)).on("blur", (c) => h(this, Q, dt).call(this, c));
  const s = e.find(".value > .type-string");
  s.length && s.on("keydown", (c) => {
    if (ie(c))
      return c.preventDefault();
  }).on("input", (c) => h(this, X, ht).call(this, c)).on("blur", (c) => h(this, Q, dt).call(this, c));
  const r = e.find(".value > .type-number");
  r.length && r.on("input", (c) => h(this, X, ht).call(this, c)).on("blur", (c) => h(this, Q, dt).call(this, c));
  const u = e.find(".value > .type-boolean");
  u.length && u.on("click", (c) => {
    const d = o(c.currentTarget), f = !d.data("value");
    d.data("value", f).find("i").text(f.toString().toUpperCase()), h(this, R, A).call(this);
  });
}, X = new WeakSet(), ht = function() {
  $(this, K, !0);
}, Q = new WeakSet(), dt = function() {
  g(this, K) && (h(this, R, A).call(this), $(this, K, !1));
}, Et = new WeakSet(), Te = function(e) {
  if ($(this, y, {}), g(this, y).$node = o(e.currentTarget).closest(".node"), g(this, y).$area = g(this, y).$node.parent(), g(this, y).$nodes = g(this, y).$area.children(".node"), g(this, y).$nodes.length < 2) {
    $(this, y, void 0);
    return;
  }
  g(this, y).$nodes.on(F.MOVE, h(this, kt, Oe).bind(this)), o(window).on(F.END, h(this, Rt, _e).bind(this));
}, kt = new WeakSet(), Oe = function(e) {
  let n;
  if (e.pointerType === "touch") {
    const { clientX: c, clientY: d } = e, f = document.elementFromPoint(c, d).closest(".node");
    if (!g(this, y).$nodes.get().includes(f))
      return;
    n = o(f);
  } else
    n = o(e.currentTarget);
  const i = n.children(".node__body");
  if (!(i.length > 0))
    return;
  const { y: s, height: r } = i.get(0).getBoundingClientRect(), u = r * 0.5 < e.y - s;
  if (g(this, y).activeNode || (this.el.body.addClass("dragging"), g(this, y).$area.addClass("drag-area"), g(this, y).$node.addClass("drag-select")), g(this, y).activeNode !== n.get(0))
    g(this, y).activeNode && o(g(this, y).activeNode).removeClass(nt.ALL), g(this, y).activeNode = n.get(0);
  else if (g(this, y).half === u)
    return;
  g(this, y).half = u, n.removeClass(nt.ALL).addClass(u ? nt.END : nt.START);
}, Rt = new WeakSet(), _e = function() {
  this.el.body.removeClass("dragging"), g(this, y).$area.removeClass("drag-area"), g(this, y).$node.removeClass("drag-select"), g(this, y).$nodes.removeClass(nt.ALL), g(this, y).$nodes.off(F.MOVE), o(window).off(F.END), g(this, y).half ? g(this, y).$node.insertAfter(g(this, y).activeNode) : g(this, y).$node.insertBefore(g(this, y).activeNode), $(this, y, void 0), h(this, R, A).call(this);
};
const In = {
  __name: "index",
  props: {
    live: { type: Boolean, default: !1 },
    theme: { type: String, default: "system" }
  },
  emits: ["init", "update"],
  setup(t, { expose: e, emit: n }) {
    const i = t, s = Me();
    let r;
    function u() {
      return r;
    }
    return Pe(() => {
      r = new Hn(s.value, {
        live: i.live,
        theme: i.theme
      }), r.preview = (c) => n("update", c), n("init", r);
    }), He(() => {
      r.destroy(), s.value.innerHTML = "";
    }), Gt(() => i.live, (c) => {
      r.options.live = c;
    }), Gt(() => i.theme, (c) => {
      r.options.theme = c;
    }), e({
      core: u
    }), (c, d) => (Ue(), De("div", {
      ref_key: "$editor",
      ref: s
    }, null, 512));
  }
};
export {
  In as default
};
