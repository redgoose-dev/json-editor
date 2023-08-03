var we = Object.defineProperty;
var ve = (t, e, n) => e in t ? we(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var bt = (t, e, n) => (ve(t, typeof e != "symbol" ? e + "" : e, n), n), Ct = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var f = (t, e, n) => (Ct(t, e, "read from private field"), n ? n.call(t) : e.get(t)), b = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, U = (t, e, n, i) => (Ct(t, e, "write to private field"), i ? i.call(t, n) : e.set(t, n), n);
var y = (t, e, n) => (Ct(t, e, "access private method"), n);
const A = document, et = window, Zt = A.documentElement, D = A.createElement.bind(A), Wt = D("div"), wt = D("table"), ke = D("tbody"), Bt = D("tr"), { isArray: pt, prototype: Jt } = Array, { concat: $e, filter: xt, indexOf: qt, map: Yt, push: Ee, slice: zt, some: Nt, splice: xe } = Jt, Ne = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Le = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Te = /<.+>/, Se = /^\w+$/;
function Lt(t, e) {
  const n = Ae(e);
  return !t || !n && !H(e) && !C(e) ? [] : !n && Le.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && Se.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class gt {
  constructor(e, n) {
    if (!e)
      return;
    if ($t(e))
      return e;
    let i = e;
    if ($(e)) {
      const s = n || A;
      if (i = Ne.test(e) && H(s) ? s.getElementById(e.slice(1).replace(/\\/g, "")) : Te.test(e) ? Xt(e) : $t(s) ? s.find(e) : $(s) ? a(s).find(e) : Lt(e, s), !i)
        return;
    } else if (P(e))
      return this.ready(e);
    (i.nodeType || i === et) && (i = [i]), this.length = i.length;
    for (let s = 0, r = this.length; s < r; s++)
      this[s] = i[s];
  }
  init(e, n) {
    return new gt(e, n);
  }
}
const o = gt.prototype, a = o.init;
a.fn = a.prototype = o;
o.length = 0;
o.splice = xe;
typeof Symbol == "function" && (o[Symbol.iterator] = Jt[Symbol.iterator]);
function $t(t) {
  return t instanceof gt;
}
function W(t) {
  return !!t && t === t.window;
}
function H(t) {
  return !!t && t.nodeType === 9;
}
function Ae(t) {
  return !!t && t.nodeType === 11;
}
function C(t) {
  return !!t && t.nodeType === 1;
}
function _e(t) {
  return !!t && t.nodeType === 3;
}
function Re(t) {
  return typeof t == "boolean";
}
function P(t) {
  return typeof t == "function";
}
function $(t) {
  return typeof t == "string";
}
function N(t) {
  return t === void 0;
}
function z(t) {
  return t === null;
}
function Gt(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function Tt(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
a.isWindow = W;
a.isFunction = P;
a.isArray = pt;
a.isNumeric = Gt;
a.isPlainObject = Tt;
function w(t, e, n) {
  if (n) {
    let i = t.length;
    for (; i--; )
      if (e.call(t[i], i, t[i]) === !1)
        return t;
  } else if (Tt(t)) {
    const i = Object.keys(t);
    for (let s = 0, r = i.length; s < r; s++) {
      const c = i[s];
      if (e.call(t[c], c, t[c]) === !1)
        return t;
    }
  } else
    for (let i = 0, s = t.length; i < s; i++)
      if (e.call(t[i], i, t[i]) === !1)
        return t;
  return t;
}
a.each = w;
o.each = function(t) {
  return w(this, t);
};
o.empty = function() {
  return this.each((t, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function nt(...t) {
  const e = Re(t[0]) ? t.shift() : !1, n = t.shift(), i = t.length;
  if (!n)
    return {};
  if (!i)
    return nt(e, a, n);
  for (let s = 0; s < i; s++) {
    const r = t[s];
    for (const c in r)
      e && (pt(r[c]) || Tt(r[c])) ? ((!n[c] || n[c].constructor !== r[c].constructor) && (n[c] = new r[c].constructor()), nt(e, n[c], r[c])) : n[c] = r[c];
  }
  return n;
}
a.extend = nt;
o.extend = function(t) {
  return nt(o, t);
};
const Oe = /\S+/g;
function yt(t) {
  return $(t) ? t.match(Oe) || [] : [];
}
o.toggleClass = function(t, e) {
  const n = yt(t), i = !N(e);
  return this.each((s, r) => {
    C(r) && w(n, (c, l) => {
      i ? e ? r.classList.add(l) : r.classList.remove(l) : r.classList.toggle(l);
    });
  });
};
o.addClass = function(t) {
  return this.toggleClass(t, !0);
};
o.removeAttr = function(t) {
  const e = yt(t);
  return this.each((n, i) => {
    C(i) && w(e, (s, r) => {
      i.removeAttribute(r);
    });
  });
};
function Me(t, e) {
  if (t) {
    if ($(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !C(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return z(n) ? void 0 : n;
      }
      return N(e) ? this : z(e) ? this.removeAttr(t) : this.each((n, i) => {
        C(i) && i.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
o.attr = Me;
o.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
o.hasClass = function(t) {
  return !!t && Nt.call(this, (e) => C(e) && e.classList.contains(t));
};
o.get = function(t) {
  return N(t) ? zt.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
};
o.eq = function(t) {
  return a(this.get(t));
};
o.first = function() {
  return this.eq(0);
};
o.last = function() {
  return this.eq(-1);
};
function Be(t) {
  return N(t) ? this.get().map((e) => C(e) || _e(e) ? e.textContent : "").join("") : this.each((e, n) => {
    C(n) && (n.textContent = t);
  });
}
o.text = Be;
function _(t, e, n) {
  if (!C(t))
    return;
  const i = et.getComputedStyle(t, null);
  return n ? i.getPropertyValue(e) || void 0 : i[e] || t.style[e];
}
function T(t, e) {
  return parseInt(_(t, e), 10) || 0;
}
function jt(t, e) {
  return T(t, `border${e ? "Left" : "Top"}Width`) + T(t, `padding${e ? "Left" : "Top"}`) + T(t, `padding${e ? "Right" : "Bottom"}`) + T(t, `border${e ? "Right" : "Bottom"}Width`);
}
const vt = {};
function je(t) {
  if (vt[t])
    return vt[t];
  const e = D(t);
  A.body.insertBefore(e, null);
  const n = _(e, "display");
  return A.body.removeChild(e), vt[t] = n !== "none" ? n : "block";
}
function Ht(t) {
  return _(t, "display") === "none";
}
function Kt(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function mt(t) {
  return $(t) ? (e, n) => Kt(n, t) : P(t) ? t : $t(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
o.filter = function(t) {
  const e = mt(t);
  return a(xt.call(this, (n, i) => e.call(n, i, n)));
};
function M(t, e) {
  return e ? t.filter(e) : t;
}
o.detach = function(t) {
  return M(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const He = /^\s*<(\w+)[^>]*>/, De = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Dt = {
  "*": Wt,
  tr: ke,
  td: Bt,
  th: Bt,
  thead: wt,
  tbody: wt,
  tfoot: wt
};
function Xt(t) {
  if (!$(t))
    return [];
  if (De.test(t))
    return [D(RegExp.$1)];
  const e = He.test(t) && RegExp.$1, n = Dt[e] || Dt["*"];
  return n.innerHTML = t, a(n.childNodes).detach().get();
}
a.parseHTML = Xt;
o.has = function(t) {
  const e = $(t) ? (n, i) => Lt(t, i).length : (n, i) => i.contains(t);
  return this.filter(e);
};
o.not = function(t) {
  const e = mt(t);
  return this.filter((n, i) => (!$(t) || C(i)) && !e.call(i, n, i));
};
function R(t, e, n, i) {
  const s = [], r = P(e), c = i && mt(i);
  for (let l = 0, d = t.length; l < d; l++)
    if (r) {
      const u = e(t[l]);
      u.length && Ee.apply(s, u);
    } else {
      let u = t[l][e];
      for (; u != null && !(i && c(-1, u)); )
        s.push(u), u = n ? u[e] : null;
    }
  return s;
}
function Qt(t) {
  return t.multiple && t.options ? R(xt.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function Pe(t) {
  return arguments.length ? this.each((e, n) => {
    const i = n.multiple && n.options;
    if (i || ae.test(n.type)) {
      const s = pt(t) ? Yt.call(t, String) : z(t) ? [] : [String(t)];
      i ? w(n.options, (r, c) => {
        c.selected = s.indexOf(c.value) >= 0;
      }, !0) : n.checked = s.indexOf(n.value) >= 0;
    } else
      n.value = N(t) || z(t) ? "" : t;
  }) : this[0] && Qt(this[0]);
}
o.val = Pe;
o.is = function(t) {
  const e = mt(t);
  return Nt.call(this, (n, i) => e.call(n, i, n));
};
a.guid = 1;
function S(t) {
  return t.length > 1 ? xt.call(t, (e, n, i) => qt.call(i, e) === n) : t;
}
a.unique = S;
o.add = function(t, e) {
  return a(S(this.get().concat(a(t, e).get())));
};
o.children = function(t) {
  return M(a(S(R(this, (e) => e.children))), t);
};
o.parent = function(t) {
  return M(a(S(R(this, "parentNode"))), t);
};
o.index = function(t) {
  const e = t ? a(t)[0] : this[0], n = t ? this : a(e).parent().children();
  return qt.call(n, e);
};
o.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const n = this.parent();
  return n.length ? n.closest(t) : e;
};
o.siblings = function(t) {
  return M(a(S(R(this, (e) => a(e).parent().children().not(e)))), t);
};
o.find = function(t) {
  return a(S(R(this, (e) => Lt(t, e))));
};
const Ve = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ie = /^$|^module$|\/(java|ecma)script/i, Ue = ["type", "src", "nonce", "noModule"];
function Fe(t, e) {
  const n = a(t);
  n.filter("script").add(n.find("script")).each((i, s) => {
    if (Ie.test(s.type) && Zt.contains(s)) {
      const r = D("script");
      r.text = s.textContent.replace(Ve, ""), w(Ue, (c, l) => {
        s[l] && (r[l] = s[l]);
      }), e.head.insertBefore(r, null), e.head.removeChild(r);
    }
  });
}
function Ze(t, e, n, i, s) {
  i ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), s && Fe(e, t.ownerDocument);
}
function B(t, e, n, i, s, r, c, l) {
  return w(t, (d, u) => {
    w(a(u), (h, E) => {
      w(a(e), (L, m) => {
        const O = n ? E : m, p = n ? m : E, V = n ? h : L;
        Ze(O, V ? p.cloneNode(!0) : p, i, s, !V);
      }, l);
    }, c);
  }, r), e;
}
o.after = function() {
  return B(arguments, this, !1, !1, !1, !0, !0);
};
o.append = function() {
  return B(arguments, this, !1, !1, !0);
};
function We(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (N(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, i) => {
    C(i) && (e ? a(i).empty().append(t) : i.innerHTML = t);
  });
}
o.html = We;
o.appendTo = function(t) {
  return B(arguments, this, !0, !1, !0);
};
o.wrapInner = function(t) {
  return this.each((e, n) => {
    const i = a(n), s = i.contents();
    s.length ? s.wrapAll(t) : i.append(t);
  });
};
o.before = function() {
  return B(arguments, this, !1, !0);
};
o.wrapAll = function(t) {
  let e = a(t), n = e[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(e), this.appendTo(n);
};
o.wrap = function(t) {
  return this.each((e, n) => {
    const i = a(t)[0];
    a(n).wrapAll(e ? i.cloneNode(!0) : i);
  });
};
o.insertAfter = function(t) {
  return B(arguments, this, !0, !1, !1, !1, !1, !0);
};
o.insertBefore = function(t) {
  return B(arguments, this, !0, !0);
};
o.prepend = function() {
  return B(arguments, this, !1, !0, !0, !0, !0);
};
o.prependTo = function(t) {
  return B(arguments, this, !0, !0, !0, !1, !1, !0);
};
o.contents = function() {
  return a(S(R(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
o.next = function(t, e, n) {
  return M(a(S(R(this, "nextElementSibling", e, n))), t);
};
o.nextAll = function(t) {
  return this.next(t, !0);
};
o.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
o.parents = function(t, e) {
  return M(a(S(R(this, "parentElement", !0, e))), t);
};
o.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
o.prev = function(t, e, n) {
  return M(a(S(R(this, "previousElementSibling", e, n))), t);
};
o.prevAll = function(t) {
  return this.prev(t, !0);
};
o.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
o.map = function(t) {
  return a($e.apply([], Yt.call(this, (e, n) => t.call(e, n, e))));
};
o.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
o.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && _(n, "position") === "static"; )
      n = n.offsetParent;
    return n || Zt;
  });
};
o.slice = function(t, e) {
  return a(zt.call(this, t, e));
};
const Je = /-([a-z])/g;
function St(t) {
  return t.replace(Je, (e, n) => n.toUpperCase());
}
o.ready = function(t) {
  const e = () => setTimeout(t, 0, a);
  return A.readyState !== "loading" ? e() : A.addEventListener("DOMContentLoaded", e), this;
};
o.unwrap = function() {
  return this.parent().each((t, e) => {
    if (e.tagName === "BODY")
      return;
    const n = a(e);
    n.replaceWith(n.children());
  }), this;
};
o.offset = function() {
  const t = this[0];
  if (!t)
    return;
  const e = t.getBoundingClientRect();
  return {
    top: e.top + et.pageYOffset,
    left: e.left + et.pageXOffset
  };
};
o.position = function() {
  const t = this[0];
  if (!t)
    return;
  const e = _(t, "position") === "fixed", n = e ? t.getBoundingClientRect() : this.offset();
  if (!e) {
    const i = t.ownerDocument;
    let s = t.offsetParent || i.documentElement;
    for (; (s === i.body || s === i.documentElement) && _(s, "position") === "static"; )
      s = s.parentNode;
    if (s !== t && C(s)) {
      const r = a(s).offset();
      n.top -= r.top + T(s, "borderTopWidth"), n.left -= r.left + T(s, "borderLeftWidth");
    }
  }
  return {
    top: n.top - T(t, "marginTop"),
    left: n.left - T(t, "marginLeft")
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
o.prop = function(t, e) {
  if (t) {
    if ($(t))
      return t = te[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, i) => {
        i[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
o.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[te[t] || t];
  });
};
const qe = /^--/;
function At(t) {
  return qe.test(t);
}
const kt = {}, { style: Ye } = Wt, ze = ["webkit", "moz", "ms"];
function Ge(t, e = At(t)) {
  if (e)
    return t;
  if (!kt[t]) {
    const n = St(t), i = `${n[0].toUpperCase()}${n.slice(1)}`, s = `${n} ${ze.join(`${i} `)}${i}`.split(" ");
    w(s, (r, c) => {
      if (c in Ye)
        return kt[t] = c, !1;
    });
  }
  return kt[t];
}
const Ke = {
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
function ee(t, e, n = At(t)) {
  return !n && !Ke[t] && Gt(e) ? `${e}px` : e;
}
function Xe(t, e) {
  if ($(t)) {
    const n = At(t);
    return t = Ge(t, n), arguments.length < 2 ? this[0] && _(this[0], t, n) : t ? (e = ee(t, e, n), this.each((i, s) => {
      C(s) && (n ? s.style.setProperty(t, e) : s.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
o.css = Xe;
function ne(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const Qe = /^\s+|\s+$/;
function Pt(t, e) {
  const n = t.dataset[e] || t.dataset[St(e)];
  return Qe.test(n) ? n : ne(JSON.parse, n);
}
function tn(t, e, n) {
  n = ne(JSON.stringify, n), t.dataset[St(e)] = n;
}
function en(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const i in this[0].dataset)
      n[i] = Pt(this[0], i);
    return n;
  }
  if ($(t))
    return arguments.length < 2 ? this[0] && Pt(this[0], t) : N(e) ? this : this.each((n, i) => {
      tn(i, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
o.data = en;
function ie(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
w([!0, !1], (t, e) => {
  w(["Width", "Height"], (n, i) => {
    const s = `${e ? "outer" : "inner"}${i}`;
    o[s] = function(r) {
      if (this[0])
        return W(this[0]) ? e ? this[0][`inner${i}`] : this[0].document.documentElement[`client${i}`] : H(this[0]) ? ie(this[0], i) : this[0][`${e ? "offset" : "client"}${i}`] + (r && e ? T(this[0], `margin${n ? "Top" : "Left"}`) + T(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
w(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  o[n] = function(i) {
    if (!this[0])
      return N(i) ? void 0 : this;
    if (!arguments.length)
      return W(this[0]) ? this[0].document.documentElement[`client${e}`] : H(this[0]) ? ie(this[0], e) : this[0].getBoundingClientRect()[n] - jt(this[0], !t);
    const s = parseInt(i, 10);
    return this.each((r, c) => {
      if (!C(c))
        return;
      const l = _(c, "boxSizing");
      c.style[n] = ee(n, s + (l === "border-box" ? jt(c, !t) : 0));
    });
  };
});
const Vt = "___cd";
o.toggle = function(t) {
  return this.each((e, n) => {
    if (!C(n))
      return;
    const i = Ht(n);
    (N(t) ? i : t) ? (n.style.display = n[Vt] || "", Ht(n) && (n.style.display = je(n.tagName))) : i || (n[Vt] = _(n, "display"), n.style.display = "none");
  });
};
o.hide = function() {
  return this.toggle(!1);
};
o.show = function() {
  return this.toggle(!0);
};
const It = "___ce", _t = ".", Rt = { focus: "focusin", blur: "focusout" }, se = { mouseenter: "mouseover", mouseleave: "mouseout" }, nn = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Ot(t) {
  return se[t] || Rt[t] || t;
}
function Mt(t) {
  const e = t.split(_t);
  return [e[0], e.slice(1).sort()];
}
o.trigger = function(t, e) {
  if ($(t)) {
    const [i, s] = Mt(t), r = Ot(i);
    if (!r)
      return this;
    const c = nn.test(r) ? "MouseEvents" : "HTMLEvents";
    t = A.createEvent(c), t.initEvent(r, !0, !0), t.namespace = s.join(_t), t.___ot = i;
  }
  t.___td = e;
  const n = t.___ot in Rt;
  return this.each((i, s) => {
    n && P(s[t.___ot]) && (s[`___i${t.type}`] = !0, s[t.___ot](), s[`___i${t.type}`] = !1), s.dispatchEvent(t);
  });
};
function re(t) {
  return t[It] = t[It] || {};
}
function sn(t, e, n, i, s) {
  const r = re(t);
  r[e] = r[e] || [], r[e].push([n, i, s]), t.addEventListener(e, s);
}
function oe(t, e) {
  return !e || !Nt.call(e, (n) => t.indexOf(n) < 0);
}
function it(t, e, n, i, s) {
  const r = re(t);
  if (e)
    r[e] && (r[e] = r[e].filter(([c, l, d]) => {
      if (s && d.guid !== s.guid || !oe(c, n) || i && i !== l)
        return !0;
      t.removeEventListener(e, d);
    }));
  else
    for (e in r)
      it(t, e, n, i, s);
}
o.off = function(t, e, n) {
  if (N(t))
    this.each((i, s) => {
      !C(s) && !H(s) && !W(s) || it(s);
    });
  else if ($(t))
    P(e) && (n = e, e = ""), w(yt(t), (i, s) => {
      const [r, c] = Mt(s), l = Ot(r);
      this.each((d, u) => {
        !C(u) && !H(u) && !W(u) || it(u, l, c, e, n);
      });
    });
  else
    for (const i in t)
      this.off(i, t[i]);
  return this;
};
o.remove = function(t) {
  return M(this, t).detach().off(), this;
};
o.replaceWith = function(t) {
  return this.before(t).remove();
};
o.replaceAll = function(t) {
  return a(t).replaceWith(this), this;
};
function rn(t, e, n, i, s) {
  if (!$(t)) {
    for (const r in t)
      this.on(r, e, n, t[r], s);
    return this;
  }
  return $(e) || (N(e) || z(e) ? e = "" : N(n) ? (n = e, e = "") : (i = n, n = e, e = "")), P(i) || (i = n, n = void 0), i ? (w(yt(t), (r, c) => {
    const [l, d] = Mt(c), u = Ot(l), h = l in se, E = l in Rt;
    u && this.each((L, m) => {
      if (!C(m) && !H(m) && !W(m))
        return;
      const O = function(p) {
        if (p.target[`___i${p.type}`])
          return p.stopImmediatePropagation();
        if (p.namespace && !oe(d, p.namespace.split(_t)) || !e && (E && (p.target !== m || p.___ot === u) || h && p.relatedTarget && m.contains(p.relatedTarget)))
          return;
        let V = m;
        if (e) {
          let I = p.target;
          for (; !Kt(I, e); )
            if (I === m || (I = I.parentNode, !I))
              return;
          V = I;
        }
        Object.defineProperty(p, "currentTarget", {
          configurable: !0,
          get() {
            return V;
          }
        }), Object.defineProperty(p, "delegateTarget", {
          configurable: !0,
          get() {
            return m;
          }
        }), Object.defineProperty(p, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const Ce = i.call(V, p, p.___td);
        s && it(m, u, d, e, O), Ce === !1 && (p.preventDefault(), p.stopPropagation());
      };
      O.guid = i.guid = i.guid || a.guid++, sn(m, u, d, e, O);
    });
  }), this) : this;
}
o.on = rn;
function on(t, e, n, i) {
  return this.on(t, e, n, i, !0);
}
o.one = on;
const an = /\r?\n/g;
function cn(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(an, `\r
`))}`;
}
const un = /file|reset|submit|button|image/i, ae = /radio|checkbox/i;
o.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    w(n.elements || [n], (i, s) => {
      if (s.disabled || !s.name || s.tagName === "FIELDSET" || un.test(s.type) || ae.test(s.type) && !s.checked)
        return;
      const r = Qt(s);
      if (!N(r)) {
        const c = pt(r) ? r : [r];
        w(c, (l, d) => {
          t += cn(s.name, d);
        });
      }
    });
  }), t.slice(1);
};
const ln = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12L10 8L6 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', fn = '<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-90, 10, 10)"><path d="M7 9L10 12L13 9" fill="currentColor"/><path d="M7 9L10 12L13 9H7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>', dn = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', ce = {
  object: '<svg viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-object"><g transform="translate(0 1)"><path d="M2.296 5.166C2.296 7.238 3.78 8.162 5.166 8.162C6.538 8.162 8.022 7.238 8.022 5.166C8.022 3.094 6.538 2.156 5.166 2.156C3.78 2.156 2.296 3.094 2.296 5.166ZM0 5.18C0 2.03 2.366 0 5.166 0C7.952 0 10.318 2.03 10.318 5.18C10.318 8.316 7.952 10.346 5.166 10.346C2.366 10.346 0 8.316 0 5.18Z" fill="currentColor"/></g></svg>',
  array: '<svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-array"><path d="M7.728 9.926L6.902 7.658H2.87L2.044 9.926H0L3.808 0H6.048L9.828 9.926H7.728ZM4.886 2.142L3.514 5.894H6.258L4.886 2.142Z" fill="currentColor"/></svg>',
  string: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-string"><g transform="translate(0 1.5)"><path d="M7.39203 2.576L5.65603 3.108C5.55803 2.562 5.11003 1.708 3.85003 1.708C2.91203 1.708 2.29603 2.31 2.29603 2.968C2.29603 3.514 2.64603 3.948 3.37403 4.088L4.76003 4.354C6.56603 4.704 7.53203 5.88 7.53203 7.28C7.53203 8.806 6.25803 10.346 3.94803 10.346C1.31603 10.346 0.154031 8.652 3.05176e-05 7.238L1.79203 6.762C1.87603 7.742 2.56203 8.624 3.96203 8.624C4.99803 8.624 5.57203 8.106 5.57203 7.406C5.57203 6.832 5.13803 6.384 4.36803 6.23L2.98203 5.95C1.40003 5.628 0.378031 4.606 0.378031 3.108C0.378031 1.344 1.96003 0 3.83603 0C6.24403 0 7.16803 1.456 7.39203 2.576Z" fill="currentColor"/></g></svg>',
  number: '<svg viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-number"><g transform="translate(0 1)"><path d="M8.47003 9.926H6.44003L1.93203 2.884V9.926H3.05176e-05V0H2.40803L6.53803 6.566V0H8.47003V9.926Z" fill="currentColor"/></g></svg>',
  boolean: '<svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-boolean"><g transform="translate(0 .75)"><path d="M3.05176e-05 0H3.57003C5.50203 0 6.59403 1.134 6.59403 2.674C6.59403 3.696 5.97803 4.522 5.15203 4.802C6.11803 5.04 6.90203 5.922 6.90203 7.154C6.90203 8.764 5.69803 9.926 3.83603 9.926H3.05176e-05V0ZM1.90403 4.102H3.27603C4.15803 4.102 4.69003 3.612 4.69003 2.856C4.69003 2.1 4.20003 1.624 3.26203 1.624H1.90403V4.102ZM1.90403 8.316H3.47203C4.41003 8.316 4.97003 7.826 4.97003 7.028C4.97003 6.244 4.46603 5.698 3.50003 5.698H1.90403V8.316Z" fill="currentColor"/></g></svg>',
  null: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-null"><g transform="translate(0 1.5)"><path d="M3.808 10.15C1.694 10.15 0 8.848 0 6.412V0H1.932V6.272C1.932 7.574 2.66 8.26 3.808 8.26C4.984 8.26 5.698 7.574 5.698 6.272V0H7.63V6.412C7.63 8.848 5.936 10.15 3.808 10.15Z" fill="currentColor"/></g></svg>'
}, hn = [
  {
    key: "change-type",
    label: "Change Type",
    children: [
      { key: "object", label: "Object" },
      { key: "array", label: "Array" },
      { key: "string", label: "String" },
      { key: "number", label: "Number" },
      { key: "boolean", label: "Boolean" },
      { key: "null", label: "Null" }
    ]
  },
  {
    key: "insert",
    label: "Insert",
    children: [
      { key: "object", label: "Object" },
      { key: "array", label: "Array" },
      { key: "string", label: "String" },
      { key: "number", label: "Number" },
      { key: "boolean", label: "Boolean" },
      { key: "null", label: "Null" }
    ]
  },
  { key: "duplicate", label: "Duplicate" },
  { key: "remove", label: "Remove" }
];
var G, k, K, st, ue, rt, le, ot, fe;
class pn {
  constructor(e, n, i) {
    b(this, st);
    b(this, rt);
    b(this, ot);
    b(this, G, void 0);
    b(this, k, {
      node: void 0,
      type: void 0,
      dialog: void 0
    });
    b(this, K, void 0);
    U(this, G, e), f(this, k).node = n, U(this, K, String(f(this, k).node.data("type"))), f(this, k).type = f(this, k).node.find("& > .node__body > .type"), f(this, k).type.addClass("open"), f(this, k).dialog = y(this, st, ue).call(this, hn, f(this, K), i), f(this, k).dialog.on("click", (s) => s.stopPropagation()), f(this, k).dialog.find("button").on("click", (s) => y(this, rt, le).call(this, s)), f(this, k).type.append(f(this, k).dialog), a(window).on("click.json-editor-context", (s) => this.close(s)), a(window).on("keyup.json-editor-context", (s) => y(this, ot, fe).call(this, s));
  }
  close() {
    f(this, k).type.removeClass("open"), f(this, k).dialog.remove(), a(window).off("click.json-editor-context"), a(window).off("keyup.json-editor-context"), delete f(this, G).context;
  }
}
G = new WeakMap(), k = new WeakMap(), K = new WeakMap(), st = new WeakSet(), ue = function(e, n, i = !1) {
  function s(l, d) {
    let u = "";
    const { key: h, label: E, children: L } = l;
    if (i)
      switch (h) {
        case "string":
        case "number":
        case "boolean":
        case "null":
          if (d === "change-type")
            return "";
          break;
        case "duplicate":
        case "remove":
          return "";
      }
    let m = "", O = "", p = "";
    switch (h) {
      case "change-type":
        m = ' class="dropdown"', p = " disabled";
        break;
      case "insert":
        if (["string", "number", "boolean", "null"].indexOf(n) > -1)
          return "";
        m = ' class="dropdown"', p = " disabled";
        break;
      case "duplicate":
        m = ' class="duplicate"', p = ' data-mode="duplicate"';
        break;
      case "remove":
        m = ' class="remove"', p = ' data-mode="remove"';
        break;
      case "object":
      case "array":
      case "string":
      case "number":
      case "boolean":
      case "null":
        m = ' class="type"', O = `<i class="type-icon type-icon--${h}">${ce[h]}</i>`, p = ` data-mode="${d}" data-type="${h}"`, d === "change-type" && h === n && (p = " disabled");
        break;
    }
    return u += `<li${m}>`, u += `<button type="button"${p}>`, u += O, u += `<em class="label">${E}</em>`, (h === "change-type" || h === "insert") && (u += `<span class="arrow">${ln}</span>`), u += "</button>", (L == null ? void 0 : L.length) > 0 && (u += '<div class="children">', u += r(L, h), u += "</div>"), u += "</li>", u;
  }
  function r(l, d = void 0) {
    let u = "<ol>";
    for (let h in l)
      u += s(l[h], d);
    return u += "</ol>", u;
  }
  let c = `<nav class="context${i ? " is-root" : ""}">`;
  return c += r(e), c += "</nav>", a(c);
}, rt = new WeakSet(), le = function(e) {
  const n = a(e.currentTarget), i = n.data("mode");
  let s = String(n.data("type"));
  s = s === "undefined" ? "" : s, this.close(), this.selectItem && typeof this.selectItem == "function" && this.selectItem(f(this, k).node, i, s);
}, ot = new WeakSet(), fe = function(e) {
  e.code === "Escape" && this.close();
};
function Ut(t) {
  return t == null ? "null" : Array.isArray(t) ? "array" : typeof t == "string" ? "string" : typeof t == "number" ? "number" : typeof t == "boolean" ? "boolean" : "object";
}
function gn(t) {
  try {
    return typeof t == "string" ? JSON.parse(t) : Array.isArray(t) ? Object.assign([], t) : a.isPlainObject(t) ? Object.assign({}, t) : {};
  } catch (e) {
    console.error("error", e.message);
  }
}
function yn(t) {
  return Array.isArray(t) ? t.length : a.isPlainObject(t) ? Object.keys(t).length : 0;
}
function Ft(t) {
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
const mn = {
  live: !1,
  // live update
  theme: "system"
}, bn = {
  target: void 0,
  data: void 0,
  between: "after",
  open: !0,
  callback: void 0
}, v = {
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
}, q = {
  START: "drag-over-start",
  END: "drag-over-end",
  ALL: "drag-over-start drag-over-end"
};
var x, g, at, de, X, Et, F, Q, ct, he, ut, pe, Z, tt, lt, ge, j, Y, ft, ye, dt, me, ht, be;
class wn {
  constructor(e, n = {}) {
    b(this, at);
    b(this, X);
    b(this, F);
    b(this, ct);
    b(this, ut);
    b(this, Z);
    b(this, lt);
    /**
     * NODE EVENTS
     */
    b(this, j);
    b(this, ft);
    b(this, dt);
    b(this, ht);
    bt(this, "options");
    b(this, x, {
      wrap: null,
      tree: null
    });
    bt(this, "context");
    b(this, g, void 0);
    f(this, x).wrap = a(e), this.options = new Proxy(Object.assign({}, mn, n), {
      get: (i, s) => i[s],
      set: y(this, at, de).bind(this)
    }), y(this, X, Et).call(this, this.options.theme);
  }
  /**
   * PUBLIC METHODS
   */
  /**
   * replace
   * @param {object|array} src
   */
  replace(e) {
    this.clear(), e = gn(e);
    const n = y(this, ct, he).call(this, e);
    this.import(n, e);
  }
  /**
   * import data
   * @param {HTMLElement} target
   * @param {object|array} src
   */
  import(e, n) {
    a.each(n, (i, s) => {
      const r = Ut(s), c = { key: i, value: s, type: r };
      this.addNode({
        target: e,
        data: c,
        open: !1,
        callback: (l, d) => this.import(l, d)
      });
    });
  }
  /**
   * add node
   * @param {object} options
   */
  addNode(e) {
    e = { ...bn, ...e };
    const { target: n, data: i, between: s, open: r, callback: c } = e, l = a(n), { key: d, value: u, type: h } = i, E = y(this, F, Q).call(this, h, !1);
    y(this, Z, tt).call(this, E, { ...i, open: r }), y(this, j, Y).call(this, E);
    const L = l.find("& > .node__children > ul");
    s === "before" ? L.prepend(E) : L.append(E), (h === "array" || h === "object") && c && typeof c == "function" && c(E.get(0), u);
  }
  changeType(e, n) {
    const i = a(e), s = {
      key: i.find("& > .node__body .key").text(),
      value: y(this, lt, ge).call(this, i),
      type: n,
      open: i.hasClass("open")
    }, r = i.find("& > .node__children > .tree").html();
    i.empty(), i.html(y(this, F, Q).call(this, n, !1).html()), r && i.find("& > .node__children > .tree").html(r), y(this, Z, tt).call(this, i, s), y(this, j, Y).call(this, i), i.attr("data-type", n);
  }
  duplicate(e) {
    e = a(e);
    const n = a(e.get(0).outerHTML);
    y(this, j, Y).call(this, n), e.after(n);
  }
  removeNode(e) {
    e.remove();
  }
  fold(e, n) {
    const i = a(e);
    n === void 0 ? i.toggleClass("open") : n === !0 ? i.addClass("open") : i.removeClass("open");
  }
  clear() {
    f(this, x).tree && f(this, x).wrap.empty();
  }
  update() {
  }
  destroy() {
  }
}
x = new WeakMap(), g = new WeakMap(), at = new WeakSet(), de = function(e, n, i) {
  switch (e[n] = i, n) {
    case "theme":
      y(this, X, Et).call(this, i);
      break;
  }
  return !0;
}, X = new WeakSet(), Et = function(e) {
  e = ["system", "light", "dark"].indexOf(e) > -1 ? e : "system", f(this, x).wrap.attr("data-theme", e);
}, F = new WeakSet(), Q = function(e, n = !1) {
  let i = `<li data-type="${e}" class="node${n ? " root" : ""}">`;
  return i += '<div class="node__body">', n || (i += `<div class="sort">${dn}</div>`), i += '<div class="type"><button type="button"></button></div>', (e === v.OBJECT || e === v.ARRAY) && (i += `<button type="button" class="fold">${fn}</button>`), n || (i += '<div class="key"></div>'), i += '<em class="count"></em>', n || (i += '<div class="value"></div>'), i += "</div>", i += '<div class="node__children"><ul class="tree"/></div>', i += "</li>", a(i);
}, ct = new WeakSet(), he = function(e) {
  const n = Ut(e), i = y(this, F, Q).call(this, n, !0);
  return y(this, Z, tt).call(this, i, {
    key: void 0,
    value: e,
    type: n,
    open: !0
  }), y(this, j, Y).call(this, i), f(this, x).tree = a("<ul/>"), f(this, x).tree.append(i), f(this, x).wrap.append(f(this, x).tree), i;
}, ut = new WeakSet(), pe = function(e, n, i) {
  switch (n) {
    case "change-type":
      this.changeType(e, i);
      break;
    case "insert":
      this.fold(e, !0), this.addNode({
        target: e,
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
}, Z = new WeakSet(), tt = function(e, n) {
  const { key: i, value: s, type: r, open: c } = n, l = e.hasClass("root"), d = e.children(".node__body");
  if (d.find(".type > button").html(`<i class="type-icon type-icon--${r}">${ce[r]}</i>`), (r === v.OBJECT || r === v.ARRAY) && this.fold(e, c), !l) {
    d.find(".key").html(`<div class="label-field" contenteditable="true" data-placeholder="empty">${i}</div>`);
    const u = d.find(".value");
    let h;
    switch (r) {
      case v.STRING:
        u.html(`<div contenteditable="true" data-placeholder="empty" class="label-field type-string">${String(s)}</div>`);
        break;
      case v.NUMBER:
        h = Number(s), isNaN(h) && (h = 0), u.html(`<input type="number" value="${h}" placeholder="0" class="label-field type-number"/>`);
        break;
      case v.BOOLEAN:
        h = s === "false" ? !1 : !!s, u.html(`<button type="button" data-value="${h}" class="label-switch type-boolean"><span><i>${h.toString().toUpperCase()}</i></span></button>`);
        break;
      case v.NULL:
        u.html('<em class="label-null type-null">NULL</em>');
        break;
    }
  }
  if (r === v.OBJECT || r === v.ARRAY) {
    const u = yn(s);
    isNaN(u) || d.find(".count").text(u);
  }
}, lt = new WeakSet(), ge = function(e) {
  const n = String(e.data("type")), i = e.find("& > .node__body > .value");
  switch (n) {
    case v.OBJECT:
    case v.ARRAY:
      return "";
    case v.STRING:
      return i.children(".type-string").text() || "";
    case v.NUMBER:
      return Number(i.children(".type-number").val());
    case v.BOOLEAN:
      return i.children(".type-boolean").data("value");
    case v.NULL:
      return null;
  }
}, j = new WeakSet(), Y = function(e) {
  const n = e.hasClass("root"), i = e.find(".sort");
  i.length && i.on(J.START, y(this, ft, ye).bind(this)), e.find(".type > button").on("click", async (l) => {
    const d = a(l.currentTarget);
    l.stopPropagation(), d.parent().hasClass("open") ? this.context && this.context.close() : (this.context && this.context.close(), this.context = new pn(this, d.closest(".node"), n), this.context.selectItem = (u, h, E) => y(this, ut, pe).call(this, u, h, E));
  }), e.find(".fold").on("click", (l) => {
    const u = a(l.currentTarget).closest(".node");
    this.fold(u);
  });
  const s = e.find(".key > .label-field");
  s.length && s.on("keydown", (l) => {
    if (l.keyCode === 13)
      return l.preventDefault();
    Ft(l) && l.preventDefault();
  });
  const r = e.find(".value > .type-string");
  r.length && r.on("keydown", (l) => {
    Ft(l) && l.preventDefault();
  });
  const c = e.find(".value > .type-boolean");
  c.length && c.on("click", (l) => {
    const d = a(l.currentTarget), u = !d.data("value");
    d.data("value", u).find("i").text(u.toString().toUpperCase());
  });
}, ft = new WeakSet(), ye = function(e) {
  if (U(this, g, {}), f(this, g).$node = a(e.currentTarget).closest(".node"), f(this, g).$area = f(this, g).$node.parent(), f(this, g).$nodes = f(this, g).$area.children(".node"), f(this, g).$nodes.length < 2) {
    U(this, g, void 0);
    return;
  }
  f(this, g).$nodes.on(J.MOVE, y(this, dt, me).bind(this)), a(window).on(J.END, y(this, ht, be).bind(this));
}, dt = new WeakSet(), me = function(e) {
  console.log(this.options);
  const n = a(e.currentTarget), i = n.children(".node__body");
  if (!(i.length > 0))
    return;
  const { y: s, height: r } = i.get(0).getBoundingClientRect(), c = r * 0.5 < e.y - s;
  if (f(this, g).activeNode || (f(this, x).wrap.addClass("dragging"), f(this, g).$area.addClass("drag-area"), f(this, g).$node.addClass("drag-select")), f(this, g).activeNode !== n.get(0))
    f(this, g).activeNode && a(f(this, g).activeNode).removeClass(q.ALL), f(this, g).activeNode = n.get(0);
  else if (f(this, g).half === c)
    return;
  f(this, g).half = c, n.removeClass(q.ALL).addClass(c ? q.END : q.START);
}, ht = new WeakSet(), be = function(e) {
  f(this, x).wrap.removeClass("dragging"), f(this, g).$area.removeClass("drag-area"), f(this, g).$node.removeClass("drag-select"), f(this, g).$nodes.removeClass(q.ALL), f(this, g).$nodes.off(J.MOVE), a(window).off(J.END), U(this, g, void 0);
};
export {
  wn as default
};
