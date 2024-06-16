var we = Object.defineProperty;
var _t = (t) => {
  throw TypeError(t);
};
var ve = (t, e, n) => e in t ? we(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var $ = (t, e, n) => ve(t, typeof e != "symbol" ? e + "" : e, n), dt = (t, e, n) => e.has(t) || _t("Cannot " + n);
var y = (t, e, n) => (dt(t, e, "read from private field"), n ? n.call(t) : e.get(t)), P = (t, e, n) => e.has(t) ? _t("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), M = (t, e, n, i) => (dt(t, e, "write to private field"), i ? i.call(t, n) : e.set(t, n), n), h = (t, e, n) => (dt(t, e, "access private method"), n);
const O = document, rt = window, Ft = O.documentElement, H = O.createElement.bind(O), Jt = H("div"), ht = H("table"), Ne = H("tbody"), Bt = H("tr"), { isArray: at, prototype: Kt } = Array, { concat: xe, filter: Nt, indexOf: Wt, map: Zt, push: Ee, slice: Gt, some: xt, splice: Te } = Kt, ke = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Re = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ae = /<.+>/, Le = /^\w+$/;
function Et(t, e) {
  const n = Oe(e);
  return !t || !n && !j(e) && !v(e) ? [] : !n && Re.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && Le.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class lt {
  constructor(e, n) {
    if (!e)
      return;
    if (yt(e))
      return e;
    let i = e;
    if (x(e)) {
      const s = n || O;
      if (i = ke.test(e) && j(s) ? s.getElementById(e.slice(1).replace(/\\/g, "")) : Ae.test(e) ? Xt(e) : yt(s) ? s.find(e) : x(s) ? o(s).find(e) : Et(e, s), !i)
        return;
    } else if (V(e))
      return this.ready(e);
    (i.nodeType || i === rt) && (i = [i]), this.length = i.length;
    for (let s = 0, r = this.length; s < r; s++)
      this[s] = i[s];
  }
  init(e, n) {
    return new lt(e, n);
  }
}
const c = lt.prototype, o = c.init;
o.fn = o.prototype = c;
c.length = 0;
c.splice = Te;
typeof Symbol == "function" && (c[Symbol.iterator] = Kt[Symbol.iterator]);
function yt(t) {
  return t instanceof lt;
}
function G(t) {
  return !!t && t === t.window;
}
function j(t) {
  return !!t && t.nodeType === 9;
}
function Oe(t) {
  return !!t && t.nodeType === 11;
}
function v(t) {
  return !!t && t.nodeType === 1;
}
function Se(t) {
  return !!t && t.nodeType === 3;
}
function _e(t) {
  return typeof t == "boolean";
}
function V(t) {
  return typeof t == "function";
}
function x(t) {
  return typeof t == "string";
}
function T(t) {
  return t === void 0;
}
function tt(t) {
  return t === null;
}
function qt(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function Tt(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
o.isWindow = G;
o.isFunction = V;
o.isArray = at;
o.isNumeric = qt;
o.isPlainObject = Tt;
function N(t, e, n) {
  if (n) {
    let i = t.length;
    for (; i--; )
      if (e.call(t[i], i, t[i]) === !1)
        return t;
  } else if (Tt(t)) {
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
c.each = function(t) {
  return N(this, t);
};
c.empty = function() {
  return this.each((t, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function ot(...t) {
  const e = _e(t[0]) ? t.shift() : !1, n = t.shift(), i = t.length;
  if (!n)
    return {};
  if (!i)
    return ot(e, o, n);
  for (let s = 0; s < i; s++) {
    const r = t[s];
    for (const u in r)
      e && (at(r[u]) || Tt(r[u])) ? ((!n[u] || n[u].constructor !== r[u].constructor) && (n[u] = new r[u].constructor()), ot(e, n[u], r[u])) : n[u] = r[u];
  }
  return n;
}
o.extend = ot;
c.extend = function(t) {
  return ot(c, t);
};
const Be = /\S+/g;
function ut(t) {
  return x(t) ? t.match(Be) || [] : [];
}
c.toggleClass = function(t, e) {
  const n = ut(t), i = !T(e);
  return this.each((s, r) => {
    v(r) && N(n, (u, a) => {
      i ? e ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
c.addClass = function(t) {
  return this.toggleClass(t, !0);
};
c.removeAttr = function(t) {
  const e = ut(t);
  return this.each((n, i) => {
    v(i) && N(e, (s, r) => {
      i.removeAttribute(r);
    });
  });
};
function $e(t, e) {
  if (t) {
    if (x(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !v(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return tt(n) ? void 0 : n;
      }
      return T(e) ? this : tt(e) ? this.removeAttr(t) : this.each((n, i) => {
        v(i) && i.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
c.attr = $e;
c.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
c.hasClass = function(t) {
  return !!t && xt.call(this, (e) => v(e) && e.classList.contains(t));
};
c.get = function(t) {
  return T(t) ? Gt.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
};
c.eq = function(t) {
  return o(this.get(t));
};
c.first = function() {
  return this.eq(0);
};
c.last = function() {
  return this.eq(-1);
};
function Me(t) {
  return T(t) ? this.get().map((e) => v(e) || Se(e) ? e.textContent : "").join("") : this.each((e, n) => {
    v(n) && (n.textContent = t);
  });
}
c.text = Me;
function S(t, e, n) {
  if (!v(t))
    return;
  const i = rt.getComputedStyle(t, null);
  return n ? i.getPropertyValue(e) || void 0 : i[e] || t.style[e];
}
function R(t, e) {
  return parseInt(S(t, e), 10) || 0;
}
function $t(t, e) {
  return R(t, `border${e ? "Left" : "Top"}Width`) + R(t, `padding${e ? "Left" : "Top"}`) + R(t, `padding${e ? "Right" : "Bottom"}`) + R(t, `border${e ? "Right" : "Bottom"}Width`);
}
const pt = {};
function De(t) {
  if (pt[t])
    return pt[t];
  const e = H(t);
  O.body.insertBefore(e, null);
  const n = S(e, "display");
  return O.body.removeChild(e), pt[t] = n !== "none" ? n : "block";
}
function Mt(t) {
  return S(t, "display") === "none";
}
function zt(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function ft(t) {
  return x(t) ? (e, n) => zt(n, t) : V(t) ? t : yt(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
c.filter = function(t) {
  const e = ft(t);
  return o(Nt.call(this, (n, i) => e.call(n, i, n)));
};
function D(t, e) {
  return e ? t.filter(e) : t;
}
c.detach = function(t) {
  return D(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const Ie = /^\s*<(\w+)[^>]*>/, Pe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Dt = {
  "*": Jt,
  tr: Ne,
  td: Bt,
  th: Bt,
  thead: ht,
  tbody: ht,
  tfoot: ht
};
function Xt(t) {
  if (!x(t))
    return [];
  if (Pe.test(t))
    return [H(RegExp.$1)];
  const e = Ie.test(t) && RegExp.$1, n = Dt[e] || Dt["*"];
  return n.innerHTML = t, o(n.childNodes).detach().get();
}
o.parseHTML = Xt;
c.has = function(t) {
  const e = x(t) ? (n, i) => Et(t, i).length : (n, i) => i.contains(t);
  return this.filter(e);
};
c.not = function(t) {
  const e = ft(t);
  return this.filter((n, i) => (!x(t) || v(i)) && !e.call(i, n, i));
};
function _(t, e, n, i) {
  const s = [], r = V(e), u = i && ft(i);
  for (let a = 0, p = t.length; a < p; a++)
    if (r) {
      const d = e(t[a]);
      d.length && Ee.apply(s, d);
    } else {
      let d = t[a][e];
      for (; d != null && !(i && u(-1, d)); )
        s.push(d), d = n ? d[e] : null;
    }
  return s;
}
function Qt(t) {
  return t.multiple && t.options ? _(Nt.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function Ue(t) {
  return arguments.length ? this.each((e, n) => {
    const i = n.multiple && n.options;
    if (i || ce.test(n.type)) {
      const s = at(t) ? Zt.call(t, String) : tt(t) ? [] : [String(t)];
      i ? N(n.options, (r, u) => {
        u.selected = s.indexOf(u.value) >= 0;
      }, !0) : n.checked = s.indexOf(n.value) >= 0;
    } else
      n.value = T(t) || tt(t) ? "" : t;
  }) : this[0] && Qt(this[0]);
}
c.val = Ue;
c.is = function(t) {
  const e = ft(t);
  return xt.call(this, (n, i) => e.call(n, i, n));
};
o.guid = 1;
function L(t) {
  return t.length > 1 ? Nt.call(t, (e, n, i) => Wt.call(i, e) === n) : t;
}
o.unique = L;
c.add = function(t, e) {
  return o(L(this.get().concat(o(t, e).get())));
};
c.children = function(t) {
  return D(o(L(_(this, (e) => e.children))), t);
};
c.parent = function(t) {
  return D(o(L(_(this, "parentNode"))), t);
};
c.index = function(t) {
  const e = t ? o(t)[0] : this[0], n = t ? this : o(e).parent().children();
  return Wt.call(n, e);
};
c.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const n = this.parent();
  return n.length ? n.closest(t) : e;
};
c.siblings = function(t) {
  return D(o(L(_(this, (e) => o(e).parent().children().not(e)))), t);
};
c.find = function(t) {
  return o(L(_(this, (e) => Et(t, e))));
};
const je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, He = /^$|^module$|\/(java|ecma)script/i, Ve = ["type", "src", "nonce", "noModule"];
function Ye(t, e) {
  const n = o(t);
  n.filter("script").add(n.find("script")).each((i, s) => {
    if (He.test(s.type) && Ft.contains(s)) {
      const r = H("script");
      r.text = s.textContent.replace(je, ""), N(Ve, (u, a) => {
        s[a] && (r[a] = s[a]);
      }), e.head.insertBefore(r, null), e.head.removeChild(r);
    }
  });
}
function Fe(t, e, n, i, s) {
  i ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), s && Ye(e, t.ownerDocument);
}
function I(t, e, n, i, s, r, u, a) {
  return N(t, (p, d) => {
    N(o(d), (g, w) => {
      N(o(e), (k, C) => {
        const B = n ? w : C, b = n ? C : w, Y = n ? g : k;
        Fe(B, Y ? b.cloneNode(!0) : b, i, s, !Y);
      }, a);
    }, u);
  }, r), e;
}
c.after = function() {
  return I(arguments, this, !1, !1, !1, !0, !0);
};
c.append = function() {
  return I(arguments, this, !1, !1, !0);
};
function Je(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (T(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, i) => {
    v(i) && (e ? o(i).empty().append(t) : i.innerHTML = t);
  });
}
c.html = Je;
c.appendTo = function(t) {
  return I(arguments, this, !0, !1, !0);
};
c.wrapInner = function(t) {
  return this.each((e, n) => {
    const i = o(n), s = i.contents();
    s.length ? s.wrapAll(t) : i.append(t);
  });
};
c.before = function() {
  return I(arguments, this, !1, !0);
};
c.wrapAll = function(t) {
  let e = o(t), n = e[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(e), this.appendTo(n);
};
c.wrap = function(t) {
  return this.each((e, n) => {
    const i = o(t)[0];
    o(n).wrapAll(e ? i.cloneNode(!0) : i);
  });
};
c.insertAfter = function(t) {
  return I(arguments, this, !0, !1, !1, !1, !1, !0);
};
c.insertBefore = function(t) {
  return I(arguments, this, !0, !0);
};
c.prepend = function() {
  return I(arguments, this, !1, !0, !0, !0, !0);
};
c.prependTo = function(t) {
  return I(arguments, this, !0, !0, !0, !1, !1, !0);
};
c.contents = function() {
  return o(L(_(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
c.next = function(t, e, n) {
  return D(o(L(_(this, "nextElementSibling", e, n))), t);
};
c.nextAll = function(t) {
  return this.next(t, !0);
};
c.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
c.parents = function(t, e) {
  return D(o(L(_(this, "parentElement", !0, e))), t);
};
c.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
c.prev = function(t, e, n) {
  return D(o(L(_(this, "previousElementSibling", e, n))), t);
};
c.prevAll = function(t) {
  return this.prev(t, !0);
};
c.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
c.map = function(t) {
  return o(xe.apply([], Zt.call(this, (e, n) => t.call(e, n, e))));
};
c.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
c.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && S(n, "position") === "static"; )
      n = n.offsetParent;
    return n || Ft;
  });
};
c.slice = function(t, e) {
  return o(Gt.call(this, t, e));
};
const Ke = /-([a-z])/g;
function kt(t) {
  return t.replace(Ke, (e, n) => n.toUpperCase());
}
c.ready = function(t) {
  const e = () => setTimeout(t, 0, o);
  return O.readyState !== "loading" ? e() : O.addEventListener("DOMContentLoaded", e), this;
};
c.unwrap = function() {
  return this.parent().each((t, e) => {
    if (e.tagName === "BODY")
      return;
    const n = o(e);
    n.replaceWith(n.children());
  }), this;
};
c.offset = function() {
  const t = this[0];
  if (!t)
    return;
  const e = t.getBoundingClientRect();
  return {
    top: e.top + rt.pageYOffset,
    left: e.left + rt.pageXOffset
  };
};
c.position = function() {
  const t = this[0];
  if (!t)
    return;
  const e = S(t, "position") === "fixed", n = e ? t.getBoundingClientRect() : this.offset();
  if (!e) {
    const i = t.ownerDocument;
    let s = t.offsetParent || i.documentElement;
    for (; (s === i.body || s === i.documentElement) && S(s, "position") === "static"; )
      s = s.parentNode;
    if (s !== t && v(s)) {
      const r = o(s).offset();
      n.top -= r.top + R(s, "borderTopWidth"), n.left -= r.left + R(s, "borderLeftWidth");
    }
  }
  return {
    top: n.top - R(t, "marginTop"),
    left: n.left - R(t, "marginLeft")
  };
};
const te = {
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
c.prop = function(t, e) {
  if (t) {
    if (x(t))
      return t = te[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, i) => {
        i[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
c.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[te[t] || t];
  });
};
const We = /^--/;
function Rt(t) {
  return We.test(t);
}
const gt = {}, { style: Ze } = Jt, Ge = ["webkit", "moz", "ms"];
function qe(t, e = Rt(t)) {
  if (e)
    return t;
  if (!gt[t]) {
    const n = kt(t), i = `${n[0].toUpperCase()}${n.slice(1)}`, s = `${n} ${Ge.join(`${i} `)}${i}`.split(" ");
    N(s, (r, u) => {
      if (u in Ze)
        return gt[t] = u, !1;
    });
  }
  return gt[t];
}
const ze = {
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
function ee(t, e, n = Rt(t)) {
  return !n && !ze[t] && qt(e) ? `${e}px` : e;
}
function Xe(t, e) {
  if (x(t)) {
    const n = Rt(t);
    return t = qe(t, n), arguments.length < 2 ? this[0] && S(this[0], t, n) : t ? (e = ee(t, e, n), this.each((i, s) => {
      v(s) && (n ? s.style.setProperty(t, e) : s.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
c.css = Xe;
function ne(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const Qe = /^\s+|\s+$/;
function It(t, e) {
  const n = t.dataset[e] || t.dataset[kt(e)];
  return Qe.test(n) ? n : ne(JSON.parse, n);
}
function tn(t, e, n) {
  n = ne(JSON.stringify, n), t.dataset[kt(e)] = n;
}
function en(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const i in this[0].dataset)
      n[i] = It(this[0], i);
    return n;
  }
  if (x(t))
    return arguments.length < 2 ? this[0] && It(this[0], t) : T(e) ? this : this.each((n, i) => {
      tn(i, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
c.data = en;
function ie(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
N([!0, !1], (t, e) => {
  N(["Width", "Height"], (n, i) => {
    const s = `${e ? "outer" : "inner"}${i}`;
    c[s] = function(r) {
      if (this[0])
        return G(this[0]) ? e ? this[0][`inner${i}`] : this[0].document.documentElement[`client${i}`] : j(this[0]) ? ie(this[0], i) : this[0][`${e ? "offset" : "client"}${i}`] + (r && e ? R(this[0], `margin${n ? "Top" : "Left"}`) + R(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
N(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  c[n] = function(i) {
    if (!this[0])
      return T(i) ? void 0 : this;
    if (!arguments.length)
      return G(this[0]) ? this[0].document.documentElement[`client${e}`] : j(this[0]) ? ie(this[0], e) : this[0].getBoundingClientRect()[n] - $t(this[0], !t);
    const s = parseInt(i, 10);
    return this.each((r, u) => {
      if (!v(u))
        return;
      const a = S(u, "boxSizing");
      u.style[n] = ee(n, s + (a === "border-box" ? $t(u, !t) : 0));
    });
  };
});
const Pt = "___cd";
c.toggle = function(t) {
  return this.each((e, n) => {
    if (!v(n))
      return;
    const i = Mt(n);
    (T(t) ? i : t) ? (n.style.display = n[Pt] || "", Mt(n) && (n.style.display = De(n.tagName))) : i || (n[Pt] = S(n, "display"), n.style.display = "none");
  });
};
c.hide = function() {
  return this.toggle(!1);
};
c.show = function() {
  return this.toggle(!0);
};
const Ut = "___ce", At = ".", Lt = { focus: "focusin", blur: "focusout" }, se = { mouseenter: "mouseover", mouseleave: "mouseout" }, nn = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Ot(t) {
  return se[t] || Lt[t] || t;
}
function St(t) {
  const e = t.split(At);
  return [e[0], e.slice(1).sort()];
}
c.trigger = function(t, e) {
  if (x(t)) {
    const [i, s] = St(t), r = Ot(i);
    if (!r)
      return this;
    const u = nn.test(r) ? "MouseEvents" : "HTMLEvents";
    t = O.createEvent(u), t.initEvent(r, !0, !0), t.namespace = s.join(At), t.___ot = i;
  }
  t.___td = e;
  const n = t.___ot in Lt;
  return this.each((i, s) => {
    n && V(s[t.___ot]) && (s[`___i${t.type}`] = !0, s[t.___ot](), s[`___i${t.type}`] = !1), s.dispatchEvent(t);
  });
};
function re(t) {
  return t[Ut] = t[Ut] || {};
}
function sn(t, e, n, i, s) {
  const r = re(t);
  r[e] = r[e] || [], r[e].push([n, i, s]), t.addEventListener(e, s);
}
function oe(t, e) {
  return !e || !xt.call(e, (n) => t.indexOf(n) < 0);
}
function ct(t, e, n, i, s) {
  const r = re(t);
  if (e)
    r[e] && (r[e] = r[e].filter(([u, a, p]) => {
      if (s && p.guid !== s.guid || !oe(u, n) || i && i !== a)
        return !0;
      t.removeEventListener(e, p);
    }));
  else for (e in r)
    ct(t, e, n, i, s);
}
c.off = function(t, e, n) {
  if (T(t))
    this.each((i, s) => {
      !v(s) && !j(s) && !G(s) || ct(s);
    });
  else if (x(t))
    V(e) && (n = e, e = ""), N(ut(t), (i, s) => {
      const [r, u] = St(s), a = Ot(r);
      this.each((p, d) => {
        !v(d) && !j(d) && !G(d) || ct(d, a, u, e, n);
      });
    });
  else
    for (const i in t)
      this.off(i, t[i]);
  return this;
};
c.remove = function(t) {
  return D(this, t).detach().off(), this;
};
c.replaceWith = function(t) {
  return this.before(t).remove();
};
c.replaceAll = function(t) {
  return o(t).replaceWith(this), this;
};
function rn(t, e, n, i, s) {
  if (!x(t)) {
    for (const r in t)
      this.on(r, e, n, t[r], s);
    return this;
  }
  return x(e) || (T(e) || tt(e) ? e = "" : T(n) ? (n = e, e = "") : (i = n, n = e, e = "")), V(i) || (i = n, n = void 0), i ? (N(ut(t), (r, u) => {
    const [a, p] = St(u), d = Ot(a), g = a in se, w = a in Lt;
    d && this.each((k, C) => {
      if (!v(C) && !j(C) && !G(C))
        return;
      const B = function(b) {
        if (b.target[`___i${b.type}`])
          return b.stopImmediatePropagation();
        if (b.namespace && !oe(p, b.namespace.split(At)) || !e && (w && (b.target !== C || b.___ot === d) || g && b.relatedTarget && C.contains(b.relatedTarget)))
          return;
        let Y = C;
        if (e) {
          let F = b.target;
          for (; !zt(F, e); )
            if (F === C || (F = F.parentNode, !F))
              return;
          Y = F;
        }
        Object.defineProperty(b, "currentTarget", {
          configurable: !0,
          get() {
            return Y;
          }
        }), Object.defineProperty(b, "delegateTarget", {
          configurable: !0,
          get() {
            return C;
          }
        }), Object.defineProperty(b, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const Ce = i.call(Y, b, b.___td);
        s && ct(C, d, p, e, B), Ce === !1 && (b.preventDefault(), b.stopPropagation());
      };
      B.guid = i.guid = i.guid || o.guid++, sn(C, d, p, e, B);
    });
  }), this) : this;
}
c.on = rn;
function on(t, e, n, i) {
  return this.on(t, e, n, i, !0);
}
c.one = on;
const cn = /\r?\n/g;
function an(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(cn, `\r
`))}`;
}
const ln = /file|reset|submit|button|image/i, ce = /radio|checkbox/i;
c.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    N(n.elements || [n], (i, s) => {
      if (s.disabled || !s.name || s.tagName === "FIELDSET" || ln.test(s.type) || ce.test(s.type) && !s.checked)
        return;
      const r = Qt(s);
      if (!T(r)) {
        const u = at(r) ? r : [r];
        N(u, (a, p) => {
          t += an(s.name, p);
        });
      }
    });
  }), t.slice(1);
};
const un = {
  live: !1,
  // live update
  theme: "system",
  // system,light,dark
  edit: "all",
  // all,value,none
  openDepth: 0,
  // open a node with a depth
  node: void 0
  // initial node
}, fn = {
  open: !0,
  callback: void 0
}, f = {
  OBJECT: "object",
  ARRAY: "array",
  STRING: "string",
  NUMBER: "number",
  BOOLEAN: "boolean",
  NULL: "null"
}, J = {
  START: "pointerdown",
  MOVE: "pointermove",
  END: "pointerup.json-editor pointercancel.json-editor"
}, K = {
  CLICK: "click.json-editor-context",
  KEYUP: "keyup.json-editor-context"
}, q = {
  START: "drag-over-start",
  END: "drag-over-end",
  ALL: "drag-over-start drag-over-end"
}, dn = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12L10 8L6 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', hn = '<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-90, 10, 10)"><path d="M7 9L10 12L13 9" fill="currentColor"/><path d="M7 9L10 12L13 9H7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>', pn = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', ae = {
  object: '<svg viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-object"><g transform="translate(0 1)"><path d="M2.296 5.166C2.296 7.238 3.78 8.162 5.166 8.162C6.538 8.162 8.022 7.238 8.022 5.166C8.022 3.094 6.538 2.156 5.166 2.156C3.78 2.156 2.296 3.094 2.296 5.166ZM0 5.18C0 2.03 2.366 0 5.166 0C7.952 0 10.318 2.03 10.318 5.18C10.318 8.316 7.952 10.346 5.166 10.346C2.366 10.346 0 8.316 0 5.18Z" fill="currentColor"/></g></svg>',
  array: '<svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-array"><path d="M7.728 9.926L6.902 7.658H2.87L2.044 9.926H0L3.808 0H6.048L9.828 9.926H7.728ZM4.886 2.142L3.514 5.894H6.258L4.886 2.142Z" fill="currentColor"/></svg>',
  string: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-string"><g transform="translate(0 1)"><path d="M7.39203 2.576L5.65603 3.108C5.55803 2.562 5.11003 1.708 3.85003 1.708C2.91203 1.708 2.29603 2.31 2.29603 2.968C2.29603 3.514 2.64603 3.948 3.37403 4.088L4.76003 4.354C6.56603 4.704 7.53203 5.88 7.53203 7.28C7.53203 8.806 6.25803 10.346 3.94803 10.346C1.31603 10.346 0.154031 8.652 3.05176e-05 7.238L1.79203 6.762C1.87603 7.742 2.56203 8.624 3.96203 8.624C4.99803 8.624 5.57203 8.106 5.57203 7.406C5.57203 6.832 5.13803 6.384 4.36803 6.23L2.98203 5.95C1.40003 5.628 0.378031 4.606 0.378031 3.108C0.378031 1.344 1.96003 0 3.83603 0C6.24403 0 7.16803 1.456 7.39203 2.576Z" fill="currentColor"/></g></svg>',
  number: '<svg viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-number"><path d="M8.47003 9.926H6.44003L1.93203 2.884V9.926H3.05176e-05V0H2.40803L6.53803 6.566V0H8.47003V9.926Z" fill="currentColor"/></svg>',
  boolean: '<svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-boolean"><path d="M3.05176e-05 0H3.57003C5.50203 0 6.59403 1.134 6.59403 2.674C6.59403 3.696 5.97803 4.522 5.15203 4.802C6.11803 5.04 6.90203 5.922 6.90203 7.154C6.90203 8.764 5.69803 9.926 3.83603 9.926H3.05176e-05V0ZM1.90403 4.102H3.27603C4.15803 4.102 4.69003 3.612 4.69003 2.856C4.69003 2.1 4.20003 1.624 3.26203 1.624H1.90403V4.102ZM1.90403 8.316H3.47203C4.41003 8.316 4.97003 7.826 4.97003 7.028C4.97003 6.244 4.46603 5.698 3.50003 5.698H1.90403V8.316Z" fill="currentColor"/></svg>',
  null: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-null"><g transform="translate(0 1.5)"><path d="M3.808 10.15C1.694 10.15 0 8.848 0 6.412V0H1.932V6.272C1.932 7.574 2.66 8.26 3.808 8.26C4.984 8.26 5.698 7.574 5.698 6.272V0H7.63V6.412C7.63 8.848 5.936 10.15 3.808 10.15Z" fill="currentColor"/></g></svg>'
};
var U, W, A, le, ue, fe, de;
class gn {
  constructor(e, n, i = !1) {
    P(this, A);
    P(this, U);
    $(this, "el", {
      node: void 0,
      type: void 0,
      dialog: void 0
    });
    P(this, W);
    M(this, U, e), this.el.node = o(n), M(this, W, String(this.el.node.data("type"))), this.el.type = this.el.node.find("& > .node__body > .type"), this.el.type.addClass("open"), this.el.dialog = h(this, A, ue).call(this, h(this, A, le).call(this), y(this, W), i), this.el.dialog.on("click", (s) => s.stopPropagation()), this.el.dialog.find("button").on("click", (s) => h(this, A, fe).call(this, s)), y(this, U).el.wrap.get(0).dispatchEvent(new CustomEvent("context", {
      detail: {
        body: this.el.dialog.get(0),
        node: this.el.node.get(0),
        type: y(this, W),
        isRoot: i,
        $: o
      }
    })), this.el.type.append(this.el.dialog), o(window).on(K.CLICK, (s) => this.close(s)), o(window).on(K.KEYUP, (s) => h(this, A, de).call(this, s));
  }
  close() {
    this.el.type.removeClass("open"), this.el.dialog.remove(), o(window).off(K.CLICK), o(window).off(K.KEYUP), delete y(this, U).context;
  }
}
U = new WeakMap(), W = new WeakMap(), A = new WeakSet(), le = function() {
  const { lang: e } = y(this, U);
  return [
    {
      key: "change-type",
      label: e.contextChangeType,
      // Change type
      children: [
        {
          key: f.OBJECT,
          label: e.contextTypeObject
          // Object
        },
        {
          key: f.ARRAY,
          label: e.contextTypeArray
          // Array
        },
        {
          key: f.STRING,
          label: e.contextTypeString
          // String
        },
        {
          key: f.NUMBER,
          label: e.contextTypeNumber
          // Number
        },
        {
          key: f.BOOLEAN,
          label: e.contextTypeBoolean
          // Boolean
        },
        {
          key: f.NULL,
          label: e.contextTypeNull
          // Null
        }
      ]
    },
    {
      key: "insert",
      label: e.contextInsertNode,
      // Insert
      children: [
        {
          key: f.OBJECT,
          label: e.contextTypeObject
          // Object
        },
        {
          key: f.ARRAY,
          label: e.contextTypeArray
          // Array
        },
        {
          key: f.STRING,
          label: e.contextTypeString
          // String
        },
        {
          key: f.NUMBER,
          label: e.contextTypeNumber
          // Number
        },
        {
          key: f.BOOLEAN,
          label: e.contextTypeBoolean
          // Boolean
        },
        {
          key: f.NULL,
          label: e.contextTypeNull
          // Null
        }
      ]
    },
    {
      key: "duplicate",
      label: e.contextDuplicate
      // Duplicate
    },
    {
      key: "remove",
      label: e.contextRemove
      // Remove
    }
  ];
}, ue = function(e, n, i = !1) {
  function s(a, p) {
    let d = "";
    const { key: g, label: w, children: k } = a;
    if (i)
      switch (g) {
        case f.STRING:
        case f.NUMBER:
        case f.BOOLEAN:
        case f.NULL:
          if (p === "change-type") return "";
          break;
        case "duplicate":
        case "remove":
          return "";
      }
    let C = "", B = "", b = "";
    switch (g) {
      case "change-type":
        C = ' class="dropdown"', b = " disabled";
        break;
      case "insert":
        if ([f.STRING, f.NUMBER, f.BOOLEAN, f.NULL].indexOf(n) > -1) return "";
        C = ' class="dropdown"', b = " disabled";
        break;
      case "duplicate":
        C = ' class="duplicate"', b = ' data-mode="duplicate"';
        break;
      case "remove":
        C = ' class="remove"', b = ' data-mode="remove"';
        break;
      case f.OBJECT:
      case f.ARRAY:
      case f.STRING:
      case f.NUMBER:
      case f.BOOLEAN:
      case f.NULL:
        C = ' class="type"', B = `<i class="type-icon type-icon--${g}">${ae[g]}</i>`, b = ` data-mode="${p}" data-type="${g}"`, p === "change-type" && g === n && (b = " disabled");
        break;
    }
    return d += `<li${C}>`, d += `<button type="button"${b}>`, d += B, d += `<em class="label">${w}</em>`, (g === "change-type" || g === "insert") && (d += `<span class="arrow">${dn}</span>`), d += "</button>", (k == null ? void 0 : k.length) > 0 && (d += '<div class="children">', d += r(k, g), d += "</div>"), d += "</li>", d;
  }
  function r(a, p = void 0) {
    let d = "<ol>";
    for (let g in a)
      d += s(a[g], p);
    return d += "</ol>", d;
  }
  let u = `<nav class="context${i ? " is-root" : ""}">`;
  return u += r(e), u += "</nav>", o(u);
}, fe = function(e) {
  const n = o(e.currentTarget), i = n.data("mode");
  let s = String(n.data("type"));
  s = s === "undefined" ? "" : s, this.close(), this.selectItem && typeof this.selectItem == "function" && this.selectItem(this.el.node, i, s);
}, de = function(e) {
  e.code === "Escape" && this.close();
};
function jt(t) {
  return t == null ? "null" : Array.isArray(t) ? "array" : typeof t == "string" ? "string" : typeof t == "number" ? "number" : typeof t == "boolean" ? "boolean" : "object";
}
function yn(t) {
  try {
    return typeof t == "string" ? JSON.parse(t) : Array.isArray(t) ? Object.assign([], t) : o.isPlainObject(t) ? Object.assign({}, t) : {};
  } catch (e) {
    console.error("error", e.message);
  }
}
function mn(t) {
  return Array.isArray(t) ? t.length : o.isPlainObject(t) ? Object.keys(t).length : 0;
}
function Ht(t) {
  if (t.ctrlKey || t.metaKey)
    switch (t.code) {
      case "KeyB":
      case "KeyI":
      case "KeyU":
        return !0;
    }
  return !1;
}
function Vt(t) {
  t.preventDefault();
  const e = t.currentTarget, n = document.createRange();
  n.selectNodeContents(e);
  const i = window.getSelection();
  i.removeAllRanges(), i.addRange(n);
}
function Yt(t) {
  t.preventDefault();
  let n = (t.originalEvent || t).clipboardData.getData("text/plain");
  document.execCommand("insertText", !1, n);
}
const bn = {
  nodeChangeSort: "Change node sort",
  nodeContextMenu: "Node context menu",
  nodeFold: "Collapse/Expand",
  contextChangeType: "Change type",
  contextInsertNode: "Insert",
  contextTypeObject: "Object",
  contextTypeArray: "Array",
  contextTypeString: "String",
  contextTypeNumber: "Number",
  contextTypeBoolean: "Boolean",
  contextTypeNull: "Null",
  contextDuplicate: "Duplicate",
  contextRemove: "Remove"
};
var m, Z, l, he, mt, et, pe, ge, nt, z, bt, E, Ct, X, wt, vt, Q, it, st, ye, me, be;
class Cn {
  constructor(e, n = {}) {
    P(this, l);
    $(this, "$");
    $(this, "el", { wrap: null, body: null, tree: null });
    $(this, "options");
    $(this, "context");
    P(this, m);
    P(this, Z, !1);
    $(this, "lang", bn);
    this.$ = o, this.el.wrap = o(e), this.el.body = o('<div class="json-editor"></div>'), this.options = new Proxy(Object.assign({}, un, n), {
      get: (i, s) => i[s],
      set: h(this, l, he).bind(this)
    }), this.updateLanguage(), this.el.wrap.append(this.el.body), h(this, l, mt).call(this, this.options.theme), h(this, l, wt).call(this, this.options.edit), this.replace(n.node || {}, {}, !1), h(this, l, vt).call(this, n.openDepth);
  }
  /**
   * PUBLIC METHODS
   */
  /**
   * add node
   * @param {HTMLElement} $target
   * @param {object} data
   * @param {object} options
   * @param {boolean} useUpdate
   * @param {boolean} useUpdateCount
   */
  addNode(e, n, i = {}, s = !0, r = !0) {
    i = { ...fn, ...i };
    const { open: u, callback: a } = i;
    e = o(e);
    const p = n.type === void 0 ? jt(n.value) : n.type, d = h(this, l, et).call(this, p, !1);
    h(this, l, nt).call(this, d, {
      ...n,
      open: u,
      type: p,
      depth: e.data("depth") + 1
    }), h(this, l, Q).call(this, d), e.find("& > .node__children > ul").append(d), r && h(this, l, X).call(this, e), (p === f.ARRAY || p === f.OBJECT) && a && typeof a == "function" && a(d.get(0), n.value), s && h(this, l, E).call(this);
  }
  /**
   * remove node
   * @param {HTMLElement} $node
   * @param {boolean} useUpdate
   */
  removeNode(e, n = !0) {
    e = o(e);
    const i = e.parent().closest(".node");
    e.remove(), h(this, l, X).call(this, i), n && h(this, l, E).call(this);
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
      value: h(this, l, bt).call(this, s),
      type: n,
      open: s.hasClass("open"),
      depth: s.data("depth")
    }, u = s.find("& > .node__children > .tree").html(), a = s.hasClass("root");
    s.empty(), s.html(h(this, l, et).call(this, n, a).html()), u && s.find("& > .node__children > .tree").html(u), h(this, l, nt).call(this, s, r), h(this, l, Q).call(this, s), s.attr("data-type", n), i && h(this, l, E).call(this);
  }
  changeKey(e, n) {
    o(e).find(".key > div").text(n), h(this, l, E).call(this);
  }
  changeValue(e, n) {
    o(e).find(".value > div").text(n), h(this, l, E).call(this);
  }
  /**
   * duplicate
   * @param {HTMLElement} $target
   * @param {boolean} useUpdate
   */
  duplicate(e, n = !0) {
    e = o(e);
    const i = o(e.get(0).outerHTML);
    h(this, l, Q).call(this, i), e.after(i), h(this, l, X).call(this, e.parent().closest(".node")), n && h(this, l, E).call(this);
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
    this.el.tree && (this.el.body.empty(), this.replace({}, {}, !1), h(this, l, E).call(this));
  }
  destroy() {
    o(window).off(J.END).off(K.CLICK).off(K.KEYUP), this.el.wrap.empty();
  }
  /**
   * replace
   * @param {object|array} data
   * @param {object} options
   * @param {boolean} useUpdate
   */
  replace(e, n = {}, i = !0) {
    this.el.body.empty(), e = yn(e);
    const s = h(this, l, pe).call(this, e);
    this.import(s, e, !1, !1), i && h(this, l, E).call(this), n != null && n.openDepth && h(this, l, vt).call(this, n == null ? void 0 : n.openDepth);
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
      const a = { key: r, value: u }, p = {
        open: !1,
        callback: (d, g) => this.import(d, g, !1, !1)
      };
      this.addNode(e, a, p, !1, !1);
    }), s && h(this, l, X).call(this, e), i && h(this, l, E).call(this);
  }
  /**
   * export
   * @param {HTMLElement} $node
   * @param {boolean} json
   * @param {number|boolean} space (number: space count, true: tab, false: 0)
   * @return {array|object}
   */
  export(e = void 0, n, i = 2) {
    let s = h(this, l, Ct).call(this, e);
    if (n) {
      let r = 2;
      return i === !0 ? r = "	" : typeof i === f.NUMBER && (r = i), JSON.stringify(s, null, r);
    } else
      return s;
  }
  /**
   * update language
   * for prototype
   */
  updateLanguage() {
  }
}
m = new WeakMap(), Z = new WeakMap(), l = new WeakSet(), he = function(e, n, i) {
  switch (e[n] = i, n) {
    case "theme":
      h(this, l, mt).call(this, i);
      break;
    case "edit":
      h(this, l, wt).call(this, i);
      break;
  }
  return !0;
}, mt = function(e) {
  e = ["system", "light", "dark"].indexOf(e) > -1 ? e : "system", this.el.body.attr("data-theme", e);
}, et = function(e, n = !1) {
  const { lang: i } = this;
  let s = `<li data-type="${e}" class="node${n ? " root" : ""}">`;
  return s += '<div class="node__body">', n || (s += `<div class="sort" title="${i.nodeChangeSort}">${pn}</div>`), s += `<div class="type"><button type="button" title="${i.nodeContextMenu}"></button></div>`, (e === f.OBJECT || e === f.ARRAY) && (s += `<button type="button" title="${i.nodeFold}" class="fold">${hn}</button>`), n || (s += '<div class="key"></div>'), s += '<em class="count"></em>', n || (s += '<div class="value"></div>'), s += "</div>", s += '<div class="node__children"><ul class="tree"/></div>', s += "</li>", o(s);
}, pe = function(e) {
  const n = jt(e), i = h(this, l, et).call(this, n, !0);
  return h(this, l, nt).call(this, i, {
    key: void 0,
    value: e,
    type: n,
    open: !0,
    depth: 0
  }), h(this, l, Q).call(this, i), this.el.tree = o("<ul/>"), this.el.tree.append(i), this.el.body.append(this.el.tree), i;
}, ge = function(e, n, i) {
  switch (n) {
    case "change-type":
      this.changeType(e, i);
      break;
    case "insert":
      this.fold(e, !0), this.addNode(e, { key: "", value: "", type: i });
      break;
    case "duplicate":
      this.duplicate(e);
      break;
    case "remove":
      this.removeNode(e);
      break;
  }
}, nt = function(e, n) {
  const { key: i, value: s, type: r, open: u, depth: a } = n, p = e.hasClass("root"), d = e.children(".node__body");
  if (d.find(".type > button").html(`<i class="type-icon type-icon--${r}">${ae[r]}</i>`), (r === f.OBJECT || r === f.ARRAY) && this.fold(e, u), a !== void 0 && e.attr("data-depth", a), !p) {
    d.find(".key").html(`<div class="label-field" contenteditable="true" data-placeholder="empty">${i}</div>`);
    const g = d.find(".value");
    let w;
    switch (r) {
      case f.STRING:
        g.html(`<div contenteditable="true" data-placeholder="empty" class="label-field type-string">${String(s)}</div>`);
        break;
      case f.NUMBER:
        w = Number(s), isNaN(w) && (w = 0), g.html(`<input type="number" value="${w}" placeholder="0" class="label-field type-number"/>`);
        break;
      case f.BOOLEAN:
        w = s === "false" ? !1 : !!s, g.html(`<button type="button" data-value="${w}" class="label-switch type-boolean"><span><i>${w.toString().toUpperCase()}</i></span></button>`);
        break;
      case f.NULL:
        g.html('<em class="label-null type-null">NULL</em>');
        break;
    }
  }
  if (r === f.OBJECT || r === f.ARRAY) {
    const g = mn(s);
    isNaN(g) || d.find(".count").text(g);
  }
}, z = function(e) {
  return String(e.data("type"));
}, bt = function(e) {
  const n = h(this, l, z).call(this, e), i = e.find("& > .node__body > .value");
  switch (n) {
    case f.OBJECT:
    case f.ARRAY:
      return "";
    case f.STRING:
      return i.children(".type-string").get(0).innerText || "";
    case f.NUMBER:
      return Number(i.children(".type-number").val());
    case f.BOOLEAN:
      return i.children(".type-boolean").data("value");
    case f.NULL:
      return null;
  }
}, E = function() {
  this.options.live && this.el.wrap.get(0).dispatchEvent(new CustomEvent("update", {
    detail: h(this, l, Ct).call(this)
  }));
}, Ct = function(e) {
  const n = (r, u) => {
    let a = u === f.ARRAY ? [] : {};
    return r.find("& > .node__children > ul > li").each((d, g) => {
      if (!(u === f.ARRAY || u === f.OBJECT)) return !0;
      g = o(g);
      const w = h(this, l, z).call(this, g);
      switch (w) {
        case f.OBJECT:
        case f.ARRAY:
          switch (u) {
            case f.ARRAY:
              a.push(n(g, w));
              break;
            case f.OBJECT:
              const C = g.find("& > .node__body > .key").text();
              C && (a[C] = n(g, w));
              break;
          }
          break;
        case f.STRING:
        case f.NUMBER:
        case f.BOOLEAN:
        case f.NULL:
          const k = h(this, l, bt).call(this, g);
          switch (u) {
            case f.ARRAY:
              a.push(k);
              break;
            case f.OBJECT:
              const C = g.find("& > .node__body > .key").text();
              C && (a[C] = k);
              break;
          }
          break;
      }
    }), a;
  };
  e = o(e);
  const i = (e == null ? void 0 : e.length) > 0 ? e : this.el.tree.children(".node"), s = h(this, l, z).call(this, i);
  if ([f.OBJECT, f.ARRAY].includes(s))
    return n(i, s);
}, X = function(e) {
  e = o(e);
  const n = h(this, l, z).call(this, e);
  if (!(n === "object" || n === "array")) return;
  const i = e.find("& > .node__children > ul > li").length;
  isNaN(i) || e.find("& > .node__body > .count").text(i);
}, wt = function(e) {
  e === "all" ? this.el.body.removeAttr("data-edit") : this.el.body.attr("data-edit", e);
}, /**
 * depth 이하의 노드를 열어준다.
 * @param {number} depth
 */
vt = function(e = 0) {
  if (!(e > 0)) return;
  this.el.body.find(".node:not(.root)").each((i, s) => {
    o(s).data("depth") < e && this.fold(o(s), !0);
  });
}, /**
 * NODE EVENTS
 */
Q = function(e) {
  const n = e.find(".sort");
  n.length && n.on(J.START, h(this, l, ye).bind(this)), e.find(".type > button").on("click", async (a) => {
    if (a.stopPropagation(), this.options.edit !== "all") return;
    const p = o(a.currentTarget);
    if (p.parent().hasClass("open"))
      this.context && this.context.close();
    else {
      this.context && this.context.close();
      const d = p.closest(".node").hasClass("root");
      this.context = new gn(this, p.closest(".node"), d), this.context.selectItem = (g, w, k) => h(this, l, ge).call(this, g, w, k);
    }
  }), e.find(".fold").on("click", (a) => {
    const d = o(a.currentTarget).closest(".node");
    this.fold(d);
  });
  const i = e.find(".key > .label-field");
  i.length && (i.on("keydown", (a) => {
    if (this.options.edit === "all" && (a.code === "Enter" || Ht(a)))
      return a.preventDefault();
  }).on("input", (a) => h(this, l, it).call(this, a)).on("blur", (a) => h(this, l, st).call(this, a)), this.options.edit !== "all" ? i.on("dblclick", Vt) : i.on("paste", Yt));
  const s = e.find(".value > .type-string");
  s.length && (s.on("keydown", (a) => {
    if (this.options.edit !== "none" && Ht(a))
      return a.preventDefault();
  }).on("input", (a) => h(this, l, it).call(this, a)).on("blur", (a) => h(this, l, st).call(this, a)), this.options.edit === "none" ? s.on("dblclick", Vt) : s.on("paste", Yt));
  const r = e.find(".value > .type-number");
  r.length && r.on("keydown", (a) => {
    this.options.edit === "none" && a.preventDefault();
  }).on("input", (a) => h(this, l, it).call(this, a)).on("blur", (a) => h(this, l, st).call(this, a));
  const u = e.find(".value > .type-boolean");
  u.length && u.on("click", (a) => {
    if (this.options.edit === "none") return;
    const p = o(a.currentTarget), d = !p.data("value");
    p.data("value", d).find("i").text(d.toString().toUpperCase()), h(this, l, E).call(this);
  });
}, it = function() {
  M(this, Z, !0);
}, st = function() {
  y(this, Z) && (h(this, l, E).call(this), M(this, Z, !1));
}, ye = function(e) {
  if (M(this, m, {}), y(this, m).$node = o(e.currentTarget).closest(".node"), y(this, m).$area = y(this, m).$node.parent(), y(this, m).$nodes = y(this, m).$area.children(".node"), y(this, m).$nodes.length < 2) {
    M(this, m, void 0);
    return;
  }
  y(this, m).$nodes.on(J.MOVE, h(this, l, me).bind(this)), o(window).on(J.END, h(this, l, be).bind(this));
}, me = function(e) {
  let n;
  if (e.pointerType === "touch") {
    const { clientX: a, clientY: p } = e, d = document.elementFromPoint(a, p).closest(".node");
    if (!y(this, m).$nodes.get().includes(d)) return;
    n = o(d);
  } else
    n = o(e.currentTarget);
  const i = n.children(".node__body");
  if (!(i.length > 0)) return;
  const { y: s, height: r } = i.get(0).getBoundingClientRect(), u = r * 0.5 < e.y - s;
  if (y(this, m).activeNode || (this.el.body.addClass("dragging"), y(this, m).$area.addClass("drag-area"), y(this, m).$node.addClass("drag-select")), y(this, m).activeNode !== n.get(0))
    y(this, m).activeNode && o(y(this, m).activeNode).removeClass(q.ALL), y(this, m).activeNode = n.get(0);
  else if (y(this, m).half === u)
    return;
  y(this, m).half = u, n.removeClass(q.ALL).addClass(u ? q.END : q.START);
}, be = function() {
  this.el.body.removeClass("dragging"), y(this, m).$area.removeClass("drag-area"), y(this, m).$node.removeClass("drag-select"), y(this, m).$nodes.removeClass(q.ALL), y(this, m).$nodes.off(J.MOVE), o(window).off(J.END), y(this, m).half ? y(this, m).$node.insertAfter(y(this, m).activeNode) : y(this, m).$node.insertBefore(y(this, m).activeNode), M(this, m, void 0), h(this, l, E).call(this);
}, $(Cn, "foo", "bar");
export {
  Cn as default
};
