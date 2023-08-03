var Ce = Object.defineProperty;
var _e = (t, e, n) => e in t ? Ce(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var vt = (t, e, n) => (_e(t, typeof e != "symbol" ? e + "" : e, n), n), xt = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var u = (t, e, n) => (xt(t, e, "read from private field"), n ? n.call(t) : e.get(t)), y = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, V = (t, e, n, o) => (xt(t, e, "write to private field"), o ? o.call(t, n) : e.set(t, n), n);
var g = (t, e, n) => (xt(t, e, "access private method"), n);
const L = document, nt = window, Wt = L.documentElement, H = L.createElement.bind(L), Jt = H("div"), wt = H("table"), je = H("tbody"), Bt = H("tr"), { isArray: bt, prototype: qt } = Array, { concat: Ee, filter: $t, indexOf: Yt, map: Gt, push: $e, slice: Kt, some: Nt, splice: Ne } = qt, Se = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Le = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Te = /<.+>/, Ae = /^\w+$/;
function St(t, e) {
  const n = Re(e);
  return !t || !n && !B(e) && !v(e) ? [] : !n && Le.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && Ae.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class gt {
  constructor(e, n) {
    if (!e)
      return;
    if (_t(e))
      return e;
    let o = e;
    if (C(e)) {
      const i = n || L;
      if (o = Se.test(e) && B(i) ? i.getElementById(e.slice(1).replace(/\\/g, "")) : Te.test(e) ? te(e) : _t(i) ? i.find(e) : C(i) ? a(i).find(e) : St(e, i), !o)
        return;
    } else if (D(e))
      return this.ready(e);
    (o.nodeType || o === nt) && (o = [o]), this.length = o.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = o[i];
  }
  init(e, n) {
    return new gt(e, n);
  }
}
const s = gt.prototype, a = s.init;
a.fn = a.prototype = s;
s.length = 0;
s.splice = Ne;
typeof Symbol == "function" && (s[Symbol.iterator] = qt[Symbol.iterator]);
function _t(t) {
  return t instanceof gt;
}
function Z(t) {
  return !!t && t === t.window;
}
function B(t) {
  return !!t && t.nodeType === 9;
}
function Re(t) {
  return !!t && t.nodeType === 11;
}
function v(t) {
  return !!t && t.nodeType === 1;
}
function Oe(t) {
  return !!t && t.nodeType === 3;
}
function ze(t) {
  return typeof t == "boolean";
}
function D(t) {
  return typeof t == "function";
}
function C(t) {
  return typeof t == "string";
}
function E(t) {
  return t === void 0;
}
function Y(t) {
  return t === null;
}
function Xt(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function Lt(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
a.isWindow = Z;
a.isFunction = D;
a.isArray = bt;
a.isNumeric = Xt;
a.isPlainObject = Lt;
function x(t, e, n) {
  if (n) {
    let o = t.length;
    for (; o--; )
      if (e.call(t[o], o, t[o]) === !1)
        return t;
  } else if (Lt(t)) {
    const o = Object.keys(t);
    for (let i = 0, r = o.length; i < r; i++) {
      const c = o[i];
      if (e.call(t[c], c, t[c]) === !1)
        return t;
    }
  } else
    for (let o = 0, i = t.length; o < i; o++)
      if (e.call(t[o], o, t[o]) === !1)
        return t;
  return t;
}
a.each = x;
s.each = function(t) {
  return x(this, t);
};
s.empty = function() {
  return this.each((t, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function ot(...t) {
  const e = ze(t[0]) ? t.shift() : !1, n = t.shift(), o = t.length;
  if (!n)
    return {};
  if (!o)
    return ot(e, a, n);
  for (let i = 0; i < o; i++) {
    const r = t[i];
    for (const c in r)
      e && (bt(r[c]) || Lt(r[c])) ? ((!n[c] || n[c].constructor !== r[c].constructor) && (n[c] = new r[c].constructor()), ot(e, n[c], r[c])) : n[c] = r[c];
  }
  return n;
}
a.extend = ot;
s.extend = function(t) {
  return ot(s, t);
};
const Me = /\S+/g;
function yt(t) {
  return C(t) ? t.match(Me) || [] : [];
}
s.toggleClass = function(t, e) {
  const n = yt(t), o = !E(e);
  return this.each((i, r) => {
    v(r) && x(n, (c, d) => {
      o ? e ? r.classList.add(d) : r.classList.remove(d) : r.classList.toggle(d);
    });
  });
};
s.addClass = function(t) {
  return this.toggleClass(t, !0);
};
s.removeAttr = function(t) {
  const e = yt(t);
  return this.each((n, o) => {
    v(o) && x(e, (i, r) => {
      o.removeAttribute(r);
    });
  });
};
function Be(t, e) {
  if (t) {
    if (C(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !v(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return Y(n) ? void 0 : n;
      }
      return E(e) ? this : Y(e) ? this.removeAttr(t) : this.each((n, o) => {
        v(o) && o.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
s.attr = Be;
s.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
s.hasClass = function(t) {
  return !!t && Nt.call(this, (e) => v(e) && e.classList.contains(t));
};
s.get = function(t) {
  return E(t) ? Kt.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
};
s.eq = function(t) {
  return a(this.get(t));
};
s.first = function() {
  return this.eq(0);
};
s.last = function() {
  return this.eq(-1);
};
function He(t) {
  return E(t) ? this.get().map((e) => v(e) || Oe(e) ? e.textContent : "").join("") : this.each((e, n) => {
    v(n) && (n.textContent = t);
  });
}
s.text = He;
function T(t, e, n) {
  if (!v(t))
    return;
  const o = nt.getComputedStyle(t, null);
  return n ? o.getPropertyValue(e) || void 0 : o[e] || t.style[e];
}
function N(t, e) {
  return parseInt(T(t, e), 10) || 0;
}
function Ht(t, e) {
  return N(t, `border${e ? "Left" : "Top"}Width`) + N(t, `padding${e ? "Left" : "Top"}`) + N(t, `padding${e ? "Right" : "Bottom"}`) + N(t, `border${e ? "Right" : "Bottom"}Width`);
}
const kt = {};
function De(t) {
  if (kt[t])
    return kt[t];
  const e = H(t);
  L.body.insertBefore(e, null);
  const n = T(e, "display");
  return L.body.removeChild(e), kt[t] = n !== "none" ? n : "block";
}
function Dt(t) {
  return T(t, "display") === "none";
}
function Qt(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function mt(t) {
  return C(t) ? (e, n) => Qt(n, t) : D(t) ? t : _t(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
s.filter = function(t) {
  const e = mt(t);
  return a($t.call(this, (n, o) => e.call(n, o, n)));
};
function O(t, e) {
  return e ? t.filter(e) : t;
}
s.detach = function(t) {
  return O(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const Pe = /^\s*<(\w+)[^>]*>/, Ie = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Pt = {
  "*": Jt,
  tr: je,
  td: Bt,
  th: Bt,
  thead: wt,
  tbody: wt,
  tfoot: wt
};
function te(t) {
  if (!C(t))
    return [];
  if (Ie.test(t))
    return [H(RegExp.$1)];
  const e = Pe.test(t) && RegExp.$1, n = Pt[e] || Pt["*"];
  return n.innerHTML = t, a(n.childNodes).detach().get();
}
a.parseHTML = te;
s.has = function(t) {
  const e = C(t) ? (n, o) => St(t, o).length : (n, o) => o.contains(t);
  return this.filter(e);
};
s.not = function(t) {
  const e = mt(t);
  return this.filter((n, o) => (!C(t) || v(o)) && !e.call(o, n, o));
};
function A(t, e, n, o) {
  const i = [], r = D(e), c = o && mt(o);
  for (let d = 0, f = t.length; d < f; d++)
    if (r) {
      const l = e(t[d]);
      l.length && $e.apply(i, l);
    } else {
      let l = t[d][e];
      for (; l != null && !(o && c(-1, l)); )
        i.push(l), l = n ? l[e] : null;
    }
  return i;
}
function ee(t) {
  return t.multiple && t.options ? A($t.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function Ve(t) {
  return arguments.length ? this.each((e, n) => {
    const o = n.multiple && n.options;
    if (o || le.test(n.type)) {
      const i = bt(t) ? Gt.call(t, String) : Y(t) ? [] : [String(t)];
      o ? x(n.options, (r, c) => {
        c.selected = i.indexOf(c.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = E(t) || Y(t) ? "" : t;
  }) : this[0] && ee(this[0]);
}
s.val = Ve;
s.is = function(t) {
  const e = mt(t);
  return Nt.call(this, (n, o) => e.call(n, o, n));
};
a.guid = 1;
function S(t) {
  return t.length > 1 ? $t.call(t, (e, n, o) => Yt.call(o, e) === n) : t;
}
a.unique = S;
s.add = function(t, e) {
  return a(S(this.get().concat(a(t, e).get())));
};
s.children = function(t) {
  return O(a(S(A(this, (e) => e.children))), t);
};
s.parent = function(t) {
  return O(a(S(A(this, "parentNode"))), t);
};
s.index = function(t) {
  const e = t ? a(t)[0] : this[0], n = t ? this : a(e).parent().children();
  return Yt.call(n, e);
};
s.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const n = this.parent();
  return n.length ? n.closest(t) : e;
};
s.siblings = function(t) {
  return O(a(S(A(this, (e) => a(e).parent().children().not(e)))), t);
};
s.find = function(t) {
  return a(S(A(this, (e) => St(t, e))));
};
const Ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Fe = /^$|^module$|\/(java|ecma)script/i, Ze = ["type", "src", "nonce", "noModule"];
function We(t, e) {
  const n = a(t);
  n.filter("script").add(n.find("script")).each((o, i) => {
    if (Fe.test(i.type) && Wt.contains(i)) {
      const r = H("script");
      r.text = i.textContent.replace(Ue, ""), x(Ze, (c, d) => {
        i[d] && (r[d] = i[d]);
      }), e.head.insertBefore(r, null), e.head.removeChild(r);
    }
  });
}
function Je(t, e, n, o, i) {
  o ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), i && We(e, t.ownerDocument);
}
function z(t, e, n, o, i, r, c, d) {
  return x(t, (f, l) => {
    x(a(l), (h, _) => {
      x(a(e), ($, m) => {
        const R = n ? _ : m, p = n ? m : _, P = n ? h : $;
        Je(R, P ? p.cloneNode(!0) : p, o, i, !P);
      }, d);
    }, c);
  }, r), e;
}
s.after = function() {
  return z(arguments, this, !1, !1, !1, !0, !0);
};
s.append = function() {
  return z(arguments, this, !1, !1, !0);
};
function qe(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (E(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, o) => {
    v(o) && (e ? a(o).empty().append(t) : o.innerHTML = t);
  });
}
s.html = qe;
s.appendTo = function(t) {
  return z(arguments, this, !0, !1, !0);
};
s.wrapInner = function(t) {
  return this.each((e, n) => {
    const o = a(n), i = o.contents();
    i.length ? i.wrapAll(t) : o.append(t);
  });
};
s.before = function() {
  return z(arguments, this, !1, !0);
};
s.wrapAll = function(t) {
  let e = a(t), n = e[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(e), this.appendTo(n);
};
s.wrap = function(t) {
  return this.each((e, n) => {
    const o = a(t)[0];
    a(n).wrapAll(e ? o.cloneNode(!0) : o);
  });
};
s.insertAfter = function(t) {
  return z(arguments, this, !0, !1, !1, !1, !1, !0);
};
s.insertBefore = function(t) {
  return z(arguments, this, !0, !0);
};
s.prepend = function() {
  return z(arguments, this, !1, !0, !0, !0, !0);
};
s.prependTo = function(t) {
  return z(arguments, this, !0, !0, !0, !1, !1, !0);
};
s.contents = function() {
  return a(S(A(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
s.next = function(t, e, n) {
  return O(a(S(A(this, "nextElementSibling", e, n))), t);
};
s.nextAll = function(t) {
  return this.next(t, !0);
};
s.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
s.parents = function(t, e) {
  return O(a(S(A(this, "parentElement", !0, e))), t);
};
s.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
s.prev = function(t, e, n) {
  return O(a(S(A(this, "previousElementSibling", e, n))), t);
};
s.prevAll = function(t) {
  return this.prev(t, !0);
};
s.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
s.map = function(t) {
  return a(Ee.apply([], Gt.call(this, (e, n) => t.call(e, n, e))));
};
s.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
s.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && T(n, "position") === "static"; )
      n = n.offsetParent;
    return n || Wt;
  });
};
s.slice = function(t, e) {
  return a(Kt.call(this, t, e));
};
const Ye = /-([a-z])/g;
function Tt(t) {
  return t.replace(Ye, (e, n) => n.toUpperCase());
}
s.ready = function(t) {
  const e = () => setTimeout(t, 0, a);
  return L.readyState !== "loading" ? e() : L.addEventListener("DOMContentLoaded", e), this;
};
s.unwrap = function() {
  return this.parent().each((t, e) => {
    if (e.tagName === "BODY")
      return;
    const n = a(e);
    n.replaceWith(n.children());
  }), this;
};
s.offset = function() {
  const t = this[0];
  if (!t)
    return;
  const e = t.getBoundingClientRect();
  return {
    top: e.top + nt.pageYOffset,
    left: e.left + nt.pageXOffset
  };
};
s.position = function() {
  const t = this[0];
  if (!t)
    return;
  const e = T(t, "position") === "fixed", n = e ? t.getBoundingClientRect() : this.offset();
  if (!e) {
    const o = t.ownerDocument;
    let i = t.offsetParent || o.documentElement;
    for (; (i === o.body || i === o.documentElement) && T(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== t && v(i)) {
      const r = a(i).offset();
      n.top -= r.top + N(i, "borderTopWidth"), n.left -= r.left + N(i, "borderLeftWidth");
    }
  }
  return {
    top: n.top - N(t, "marginTop"),
    left: n.left - N(t, "marginLeft")
  };
};
const ne = {
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
s.prop = function(t, e) {
  if (t) {
    if (C(t))
      return t = ne[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, o) => {
        o[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
s.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[ne[t] || t];
  });
};
const Ge = /^--/;
function At(t) {
  return Ge.test(t);
}
const Ct = {}, { style: Ke } = Jt, Xe = ["webkit", "moz", "ms"];
function Qe(t, e = At(t)) {
  if (e)
    return t;
  if (!Ct[t]) {
    const n = Tt(t), o = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${Xe.join(`${o} `)}${o}`.split(" ");
    x(i, (r, c) => {
      if (c in Ke)
        return Ct[t] = c, !1;
    });
  }
  return Ct[t];
}
const tn = {
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
function oe(t, e, n = At(t)) {
  return !n && !tn[t] && Xt(e) ? `${e}px` : e;
}
function en(t, e) {
  if (C(t)) {
    const n = At(t);
    return t = Qe(t, n), arguments.length < 2 ? this[0] && T(this[0], t, n) : t ? (e = oe(t, e, n), this.each((o, i) => {
      v(i) && (n ? i.style.setProperty(t, e) : i.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
s.css = en;
function ie(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const nn = /^\s+|\s+$/;
function It(t, e) {
  const n = t.dataset[e] || t.dataset[Tt(e)];
  return nn.test(n) ? n : ie(JSON.parse, n);
}
function on(t, e, n) {
  n = ie(JSON.stringify, n), t.dataset[Tt(e)] = n;
}
function rn(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const o in this[0].dataset)
      n[o] = It(this[0], o);
    return n;
  }
  if (C(t))
    return arguments.length < 2 ? this[0] && It(this[0], t) : E(e) ? this : this.each((n, o) => {
      on(o, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
s.data = rn;
function re(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
x([!0, !1], (t, e) => {
  x(["Width", "Height"], (n, o) => {
    const i = `${e ? "outer" : "inner"}${o}`;
    s[i] = function(r) {
      if (this[0])
        return Z(this[0]) ? e ? this[0][`inner${o}`] : this[0].document.documentElement[`client${o}`] : B(this[0]) ? re(this[0], o) : this[0][`${e ? "offset" : "client"}${o}`] + (r && e ? N(this[0], `margin${n ? "Top" : "Left"}`) + N(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
x(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  s[n] = function(o) {
    if (!this[0])
      return E(o) ? void 0 : this;
    if (!arguments.length)
      return Z(this[0]) ? this[0].document.documentElement[`client${e}`] : B(this[0]) ? re(this[0], e) : this[0].getBoundingClientRect()[n] - Ht(this[0], !t);
    const i = parseInt(o, 10);
    return this.each((r, c) => {
      if (!v(c))
        return;
      const d = T(c, "boxSizing");
      c.style[n] = oe(n, i + (d === "border-box" ? Ht(c, !t) : 0));
    });
  };
});
const Vt = "___cd";
s.toggle = function(t) {
  return this.each((e, n) => {
    if (!v(n))
      return;
    const o = Dt(n);
    (E(t) ? o : t) ? (n.style.display = n[Vt] || "", Dt(n) && (n.style.display = De(n.tagName))) : o || (n[Vt] = T(n, "display"), n.style.display = "none");
  });
};
s.hide = function() {
  return this.toggle(!1);
};
s.show = function() {
  return this.toggle(!0);
};
const Ut = "___ce", Rt = ".", Ot = { focus: "focusin", blur: "focusout" }, se = { mouseenter: "mouseover", mouseleave: "mouseout" }, sn = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function zt(t) {
  return se[t] || Ot[t] || t;
}
function Mt(t) {
  const e = t.split(Rt);
  return [e[0], e.slice(1).sort()];
}
s.trigger = function(t, e) {
  if (C(t)) {
    const [o, i] = Mt(t), r = zt(o);
    if (!r)
      return this;
    const c = sn.test(r) ? "MouseEvents" : "HTMLEvents";
    t = L.createEvent(c), t.initEvent(r, !0, !0), t.namespace = i.join(Rt), t.___ot = o;
  }
  t.___td = e;
  const n = t.___ot in Ot;
  return this.each((o, i) => {
    n && D(i[t.___ot]) && (i[`___i${t.type}`] = !0, i[t.___ot](), i[`___i${t.type}`] = !1), i.dispatchEvent(t);
  });
};
function ae(t) {
  return t[Ut] = t[Ut] || {};
}
function an(t, e, n, o, i) {
  const r = ae(t);
  r[e] = r[e] || [], r[e].push([n, o, i]), t.addEventListener(e, i);
}
function ce(t, e) {
  return !e || !Nt.call(e, (n) => t.indexOf(n) < 0);
}
function it(t, e, n, o, i) {
  const r = ae(t);
  if (e)
    r[e] && (r[e] = r[e].filter(([c, d, f]) => {
      if (i && f.guid !== i.guid || !ce(c, n) || o && o !== d)
        return !0;
      t.removeEventListener(e, f);
    }));
  else
    for (e in r)
      it(t, e, n, o, i);
}
s.off = function(t, e, n) {
  if (E(t))
    this.each((o, i) => {
      !v(i) && !B(i) && !Z(i) || it(i);
    });
  else if (C(t))
    D(e) && (n = e, e = ""), x(yt(t), (o, i) => {
      const [r, c] = Mt(i), d = zt(r);
      this.each((f, l) => {
        !v(l) && !B(l) && !Z(l) || it(l, d, c, e, n);
      });
    });
  else
    for (const o in t)
      this.off(o, t[o]);
  return this;
};
s.remove = function(t) {
  return O(this, t).detach().off(), this;
};
s.replaceWith = function(t) {
  return this.before(t).remove();
};
s.replaceAll = function(t) {
  return a(t).replaceWith(this), this;
};
function cn(t, e, n, o, i) {
  if (!C(t)) {
    for (const r in t)
      this.on(r, e, n, t[r], i);
    return this;
  }
  return C(e) || (E(e) || Y(e) ? e = "" : E(n) ? (n = e, e = "") : (o = n, n = e, e = "")), D(o) || (o = n, n = void 0), o ? (x(yt(t), (r, c) => {
    const [d, f] = Mt(c), l = zt(d), h = d in se, _ = d in Ot;
    l && this.each(($, m) => {
      if (!v(m) && !B(m) && !Z(m))
        return;
      const R = function(p) {
        if (p.target[`___i${p.type}`])
          return p.stopImmediatePropagation();
        if (p.namespace && !ce(f, p.namespace.split(Rt)) || !e && (_ && (p.target !== m || p.___ot === l) || h && p.relatedTarget && m.contains(p.relatedTarget)))
          return;
        let P = m;
        if (e) {
          let I = p.target;
          for (; !Qt(I, e); )
            if (I === m || (I = I.parentNode, !I))
              return;
          P = I;
        }
        Object.defineProperty(p, "currentTarget", {
          configurable: !0,
          get() {
            return P;
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
        const ke = o.call(P, p, p.___td);
        i && it(m, l, f, e, R), ke === !1 && (p.preventDefault(), p.stopPropagation());
      };
      R.guid = o.guid = o.guid || a.guid++, an(m, l, f, e, R);
    });
  }), this) : this;
}
s.on = cn;
function ln(t, e, n, o) {
  return this.on(t, e, n, o, !0);
}
s.one = ln;
const dn = /\r?\n/g;
function un(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(dn, `\r
`))}`;
}
const fn = /file|reset|submit|button|image/i, le = /radio|checkbox/i;
s.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    x(n.elements || [n], (o, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || fn.test(i.type) || le.test(i.type) && !i.checked)
        return;
      const r = ee(i);
      if (!E(r)) {
        const c = bt(r) ? r : [r];
        x(c, (d, f) => {
          t += un(i.name, f);
        });
      }
    });
  }), t.slice(1);
};
function Ft(t) {
  return t == null ? "null" : Array.isArray(t) ? "array" : typeof t == "string" ? "string" : typeof t == "number" ? "number" : typeof t == "boolean" ? "boolean" : "object";
}
function de(t) {
  try {
    return typeof t == "string" ? JSON.parse(t) : Array.isArray(t) ? Object.assign([], t) : a.isPlainObject(t) ? Object.assign({}, t) : {};
  } catch (e) {
    console.error("error", e.message);
  }
}
function hn(t) {
  return Array.isArray(t) ? t.length : a.isPlainObject(t) ? Object.keys(t).length : 0;
}
function Zt(t) {
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
const pn = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12L10 8L6 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', bn = '<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-90, 10, 10)"><path d="M7 9L10 12L13 9" fill="currentColor"/><path d="M7 9L10 12L13 9H7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>', gn = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', ue = {
  object: '<svg viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-object"><g transform="translate(0 1)"><path d="M2.296 5.166C2.296 7.238 3.78 8.162 5.166 8.162C6.538 8.162 8.022 7.238 8.022 5.166C8.022 3.094 6.538 2.156 5.166 2.156C3.78 2.156 2.296 3.094 2.296 5.166ZM0 5.18C0 2.03 2.366 0 5.166 0C7.952 0 10.318 2.03 10.318 5.18C10.318 8.316 7.952 10.346 5.166 10.346C2.366 10.346 0 8.316 0 5.18Z" fill="currentColor"/></g></svg>',
  array: '<svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-array"><path d="M7.728 9.926L6.902 7.658H2.87L2.044 9.926H0L3.808 0H6.048L9.828 9.926H7.728ZM4.886 2.142L3.514 5.894H6.258L4.886 2.142Z" fill="currentColor"/></svg>',
  string: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-string"><g transform="translate(0 1.5)"><path d="M7.39203 2.576L5.65603 3.108C5.55803 2.562 5.11003 1.708 3.85003 1.708C2.91203 1.708 2.29603 2.31 2.29603 2.968C2.29603 3.514 2.64603 3.948 3.37403 4.088L4.76003 4.354C6.56603 4.704 7.53203 5.88 7.53203 7.28C7.53203 8.806 6.25803 10.346 3.94803 10.346C1.31603 10.346 0.154031 8.652 3.05176e-05 7.238L1.79203 6.762C1.87603 7.742 2.56203 8.624 3.96203 8.624C4.99803 8.624 5.57203 8.106 5.57203 7.406C5.57203 6.832 5.13803 6.384 4.36803 6.23L2.98203 5.95C1.40003 5.628 0.378031 4.606 0.378031 3.108C0.378031 1.344 1.96003 0 3.83603 0C6.24403 0 7.16803 1.456 7.39203 2.576Z" fill="currentColor"/></g></svg>',
  number: '<svg viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-number"><g transform="translate(0 1)"><path d="M8.47003 9.926H6.44003L1.93203 2.884V9.926H3.05176e-05V0H2.40803L6.53803 6.566V0H8.47003V9.926Z" fill="currentColor"/></g></svg>',
  boolean: '<svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-boolean"><g transform="translate(0 .75)"><path d="M3.05176e-05 0H3.57003C5.50203 0 6.59403 1.134 6.59403 2.674C6.59403 3.696 5.97803 4.522 5.15203 4.802C6.11803 5.04 6.90203 5.922 6.90203 7.154C6.90203 8.764 5.69803 9.926 3.83603 9.926H3.05176e-05V0ZM1.90403 4.102H3.27603C4.15803 4.102 4.69003 3.612 4.69003 2.856C4.69003 2.1 4.20003 1.624 3.26203 1.624H1.90403V4.102ZM1.90403 8.316H3.47203C4.41003 8.316 4.97003 7.826 4.97003 7.028C4.97003 6.244 4.46603 5.698 3.50003 5.698H1.90403V8.316Z" fill="currentColor"/></g></svg>',
  null: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-null"><g transform="translate(0 1.5)"><path d="M3.808 10.15C1.694 10.15 0 8.848 0 6.412V0H1.932V6.272C1.932 7.574 2.66 8.26 3.808 8.26C4.984 8.26 5.698 7.574 5.698 6.272V0H7.63V6.412C7.63 8.848 5.936 10.15 3.808 10.15Z" fill="currentColor"/></g></svg>'
}, yn = [
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
var G, k, K, rt, fe, st, he, at, pe;
class mn {
  constructor(e, n, o) {
    y(this, rt);
    y(this, st);
    y(this, at);
    y(this, G, void 0);
    y(this, k, {
      node: void 0,
      type: void 0,
      dialog: void 0
    });
    y(this, K, void 0);
    V(this, G, e), u(this, k).node = n, V(this, K, String(u(this, k).node.data("type"))), u(this, k).type = u(this, k).node.find("& > .node__body > .type"), u(this, k).type.addClass("open"), u(this, k).dialog = g(this, rt, fe).call(this, yn, u(this, K), o), u(this, k).dialog.on("click", (i) => i.stopPropagation()), u(this, k).dialog.find("button").on("click", (i) => g(this, st, he).call(this, i)), u(this, k).type.append(u(this, k).dialog), a(window).on("click.json-editor-context", (i) => this.close(i)), a(window).on("keyup.json-editor-context", (i) => g(this, at, pe).call(this, i));
  }
  close() {
    u(this, k).type.removeClass("open"), u(this, k).dialog.remove(), a(window).off("click.json-editor-context"), a(window).off("keyup.json-editor-context"), delete u(this, G).context;
  }
}
G = new WeakMap(), k = new WeakMap(), K = new WeakMap(), rt = new WeakSet(), fe = function(e, n, o = !1) {
  function i(d, f) {
    let l = "";
    const { key: h, label: _, children: $ } = d;
    if (o)
      switch (h) {
        case "string":
        case "number":
        case "boolean":
        case "null":
          if (f === "change-type")
            return "";
          break;
        case "duplicate":
        case "remove":
          return "";
      }
    let m = "", R = "", p = "";
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
        m = ' class="type"', R = `<i class="type-icon type-icon--${h}">${ue[h]}</i>`, p = ` data-mode="${f}" data-type="${h}"`, f === "change-type" && h === n && (p = " disabled");
        break;
    }
    return l += `<li${m}>`, l += `<button type="button"${p}>`, l += R, l += `<em class="label">${_}</em>`, (h === "change-type" || h === "insert") && (l += `<span class="arrow">${pn}</span>`), l += "</button>", ($ == null ? void 0 : $.length) > 0 && (l += '<div class="children">', l += r($, h), l += "</div>"), l += "</li>", l;
  }
  function r(d, f = void 0) {
    let l = "<ol>";
    for (let h in d)
      l += i(d[h], f);
    return l += "</ol>", l;
  }
  let c = `<nav class="context${o ? " is-root" : ""}">`;
  return c += r(e), c += "</nav>", a(c);
}, st = new WeakSet(), he = function(e) {
  const n = a(e.currentTarget), o = n.data("mode");
  let i = String(n.data("type"));
  i = i === "undefined" ? "" : i, this.close(), this.selectItem && typeof this.selectItem == "function" && this.selectItem(u(this, k).node, o, i);
}, at = new WeakSet(), pe = function(e) {
  e.code === "Escape" && this.close();
};
const vn = {
  live: !1,
  // live update
  theme: "system"
}, xn = {
  target: void 0,
  data: void 0,
  between: "after",
  open: !0,
  callback: void 0
}, w = {
  OBJECT: "object",
  ARRAY: "array",
  STRING: "string",
  NUMBER: "number",
  BOOLEAN: "boolean",
  NULL: "null"
}, W = {
  START: "pointerdown",
  MOVE: "pointermove",
  END: "pointerup.json-editor pointercancel.json-editor"
}, J = {
  START: "drag-over-start",
  END: "drag-over-end",
  ALL: "drag-over-start drag-over-end"
};
var j, b, ct, be, X, jt, U, tt, lt, ge, dt, ye, F, et, ut, me, M, q, ft, ve, ht, xe, pt, we;
class wn {
  constructor(e, n = {}) {
    y(this, ct);
    y(this, X);
    y(this, U);
    y(this, lt);
    y(this, dt);
    y(this, F);
    y(this, ut);
    /**
     * NODE EVENTS
     */
    y(this, M);
    y(this, ft);
    y(this, ht);
    y(this, pt);
    vt(this, "options");
    y(this, j, {
      wrap: null,
      tree: null
    });
    vt(this, "context");
    y(this, b, void 0);
    u(this, j).wrap = a(e), this.options = new Proxy(Object.assign({}, vn, n), {
      get: (o, i) => o[i],
      set: g(this, ct, be).bind(this)
    }), g(this, X, jt).call(this, this.options.theme);
  }
  /**
   * PUBLIC METHODS
   */
  /**
   * replace
   * @param {object|array} src
   */
  replace(e) {
    this.clear(), e = de(e);
    const n = g(this, lt, ge).call(this, e);
    this.import(n, e);
  }
  /**
   * import data
   * @param {HTMLElement} target
   * @param {object|array} src
   */
  import(e, n) {
    a.each(n, (o, i) => {
      const r = Ft(i), c = { key: o, value: i, type: r };
      this.addNode({
        target: e,
        data: c,
        open: !1,
        callback: (d, f) => this.import(d, f)
      });
    });
  }
  /**
   * add node
   * @param {object} options
   */
  addNode(e) {
    e = { ...xn, ...e };
    const { target: n, data: o, between: i, open: r, callback: c } = e, d = a(n), { key: f, value: l, type: h } = o, _ = g(this, U, tt).call(this, h, !1);
    g(this, F, et).call(this, _, { ...o, open: r }), g(this, M, q).call(this, _);
    const $ = d.find("& > .node__children > ul");
    i === "before" ? $.prepend(_) : $.append(_), (h === "array" || h === "object") && c && typeof c == "function" && c(_.get(0), l);
  }
  changeType(e, n) {
    const o = a(e), i = {
      key: o.find("& > .node__body .key").text(),
      value: g(this, ut, me).call(this, o),
      type: n,
      open: o.hasClass("open")
    }, r = o.find("& > .node__children > .tree").html();
    o.empty(), o.html(g(this, U, tt).call(this, n, !1).html()), r && o.find("& > .node__children > .tree").html(r), g(this, F, et).call(this, o, i), g(this, M, q).call(this, o), o.attr("data-type", n);
  }
  duplicate(e) {
    e = a(e);
    const n = a(e.get(0).outerHTML);
    g(this, M, q).call(this, n), e.after(n);
  }
  removeNode(e) {
    e.remove();
  }
  fold(e, n) {
    const o = a(e);
    n === void 0 ? o.toggleClass("open") : n === !0 ? o.addClass("open") : o.removeClass("open");
  }
  clear() {
    u(this, j).tree && u(this, j).wrap.empty();
  }
  update() {
  }
  destroy() {
  }
}
j = new WeakMap(), b = new WeakMap(), ct = new WeakSet(), be = function(e, n, o) {
  switch (n) {
    case "live":
      break;
    case "theme":
      g(this, X, jt).call(this, o);
      break;
  }
  return !0;
}, X = new WeakSet(), jt = function(e) {
  e = ["system", "light", "dark"].indexOf(e) > -1 ? e : "system", u(this, j).wrap.attr("data-theme", e);
}, U = new WeakSet(), tt = function(e, n = !1) {
  let o = `<li data-type="${e}" class="node${n ? " root" : ""}">`;
  return o += '<div class="node__body">', n || (o += `<div class="sort">${gn}</div>`), o += '<div class="type"><button type="button"></button></div>', (e === w.OBJECT || e === w.ARRAY) && (o += `<button type="button" class="fold">${bn}</button>`), n || (o += '<div class="key"></div>'), o += '<em class="count"></em>', n || (o += '<div class="value"></div>'), o += "</div>", o += '<div class="node__children"><ul class="tree"/></div>', o += "</li>", a(o);
}, lt = new WeakSet(), ge = function(e) {
  const n = Ft(e), o = g(this, U, tt).call(this, n, !0);
  return g(this, F, et).call(this, o, {
    key: void 0,
    value: e,
    type: n,
    open: !0
  }), g(this, M, q).call(this, o), u(this, j).tree = a("<ul/>"), u(this, j).tree.append(o), u(this, j).wrap.append(u(this, j).tree), o;
}, dt = new WeakSet(), ye = function(e, n, o) {
  switch (n) {
    case "change-type":
      this.changeType(e, o);
      break;
    case "insert":
      this.fold(e, !0), this.addNode({
        target: e,
        data: { key: "", value: "", type: o }
      });
      break;
    case "duplicate":
      this.duplicate(e);
      break;
    case "remove":
      this.removeNode(e);
      break;
  }
}, F = new WeakSet(), et = function(e, n) {
  const { key: o, value: i, type: r, open: c } = n, d = e.hasClass("root"), f = e.children(".node__body");
  if (f.find(".type > button").html(`<i class="type-icon type-icon--${r}">${ue[r]}</i>`), (r === w.OBJECT || r === w.ARRAY) && this.fold(e, c), !d) {
    f.find(".key").html(`<div class="label-field" contenteditable="true" data-placeholder="empty">${o}</div>`);
    const l = f.find(".value");
    let h;
    switch (r) {
      case w.STRING:
        l.html(`<div contenteditable="true" data-placeholder="empty" class="label-field type-string">${String(i)}</div>`);
        break;
      case w.NUMBER:
        h = Number(i), isNaN(h) && (h = 0), l.html(`<input type="number" value="${h}" placeholder="0" class="label-field type-number"/>`);
        break;
      case w.BOOLEAN:
        h = i === "false" ? !1 : !!i, l.html(`<button type="button" data-value="${h}" class="label-switch type-boolean"><span><i>${h.toString().toUpperCase()}</i></span></button>`);
        break;
      case w.NULL:
        l.html('<em class="label-null type-null">NULL</em>');
        break;
    }
  }
  if (r === w.OBJECT || r === w.ARRAY) {
    const l = hn(i);
    isNaN(l) || f.find(".count").text(l);
  }
}, ut = new WeakSet(), me = function(e) {
  const n = String(e.data("type")), o = e.find("& > .node__body > .value");
  switch (n) {
    case w.OBJECT:
    case w.ARRAY:
      return "";
    case w.STRING:
      return o.children(".type-string").text() || "";
    case w.NUMBER:
      return Number(o.children(".type-number").val());
    case w.BOOLEAN:
      return o.children(".type-boolean").data("value");
    case w.NULL:
      return null;
  }
}, M = new WeakSet(), q = function(e) {
  const n = e.hasClass("root"), o = e.find(".sort");
  o.length && o.on(W.START, g(this, ft, ve).bind(this)), e.find(".type > button").on("click", async (d) => {
    const f = a(d.currentTarget);
    d.stopPropagation(), f.parent().hasClass("open") ? this.context && this.context.close() : (this.context && this.context.close(), this.context = new mn(this, f.closest(".node"), n), this.context.selectItem = (l, h, _) => g(this, dt, ye).call(this, l, h, _));
  }), e.find(".fold").on("click", (d) => {
    const l = a(d.currentTarget).closest(".node");
    this.fold(l);
  });
  const i = e.find(".key > .label-field");
  i.length && i.on("keydown", (d) => {
    if (d.keyCode === 13)
      return d.preventDefault();
    Zt(d) && d.preventDefault();
  });
  const r = e.find(".value > .type-string");
  r.length && r.on("keydown", (d) => {
    Zt(d) && d.preventDefault();
  });
  const c = e.find(".value > .type-boolean");
  c.length && c.on("click", (d) => {
    const f = a(d.currentTarget), l = !f.data("value");
    f.data("value", l).find("i").text(l.toString().toUpperCase());
  });
}, ft = new WeakSet(), ve = function(e) {
  if (V(this, b, {}), u(this, b).$node = a(e.currentTarget).closest(".node"), u(this, b).$area = u(this, b).$node.parent(), u(this, b).$nodes = u(this, b).$area.children(".node"), u(this, b).$nodes.length < 2) {
    V(this, b, void 0);
    return;
  }
  u(this, b).$nodes.on(W.MOVE, g(this, ht, xe).bind(this)), a(window).on(W.END, g(this, pt, we).bind(this));
}, ht = new WeakSet(), xe = function(e) {
  const n = a(e.currentTarget), o = n.children(".node__body");
  if (!(o.length > 0))
    return;
  const { y: i, height: r } = o.get(0).getBoundingClientRect(), c = r * 0.5 < e.y - i;
  if (u(this, b).activeNode || (u(this, j).wrap.addClass("dragging"), u(this, b).$area.addClass("drag-area"), u(this, b).$node.addClass("drag-select")), u(this, b).activeNode !== n.get(0))
    u(this, b).activeNode && a(u(this, b).activeNode).removeClass(J.ALL), u(this, b).activeNode = n.get(0);
  else if (u(this, b).half === c)
    return;
  u(this, b).half = c, n.removeClass(J.ALL).addClass(c ? J.END : J.START);
}, pt = new WeakSet(), we = function(e) {
  u(this, j).wrap.removeClass("dragging"), u(this, b).$area.removeClass("drag-area"), u(this, b).$node.removeClass("drag-select"), u(this, b).$nodes.removeClass(J.ALL), u(this, b).$nodes.off(W.MOVE), a(window).off(W.END), V(this, b, void 0);
};
const kn = `:host [theme=dark]{background:#000}.json-editor{--json-editor-font-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";--json-editor-font-eng: "Helvetica Neue", sans-serif;--json-editor-color-bg: hsl(0 0% 100%);--json-editor-color-base: hsl(0 0% 13%);--json-editor-color-blur: hsl(0 0% 67%);--json-editor-color-object: hsl(174 66% 39%);--json-editor-color-array: hsl(191 75% 53%);--json-editor-color-string: hsl(5 87% 59%);--json-editor-color-number: hsl(33 89% 55%);--json-editor-color-boolean: hsl(45 89% 54%);--json-editor-color-null: hsl(0 0% 58%);--json-editor-color-active: hsla(0 0% 0% / 6%);--json-editor-color-focus: hsl(5 87% 59%);--json-editor-color-error: hsl(0 96% 52%);--json-editor-font-size: 13px;font-family:var(--json-editor-font-base);color:var(--json-editor-color-base);font-size:16px;line-height:1.15}.json-editor>ul{position:relative;margin:0;padding:0;list-style:none}.json-editor.dragging{cursor:move;-webkit-user-select:none;user-select:none}.json-editor.dragging *{cursor:move!important;-webkit-user-select:none!important;user-select:none!important}.type-icon{display:grid;width:var(--type-size, 24px);height:var(--type-size, 24px);place-content:center;box-sizing:border-box;border-radius:4px;background:var(--type-icon-color, #aaa)}.type-icon svg{display:block;box-sizing:border-box;color:#fff;width:var(--type-icon-width)}.type-icon--object{--type-icon-color: var(--json-editor-color-object);--type-icon-width: calc(var(--type-icon-size, 10px) + 1px)}.type-icon--array{--type-icon-color: var(--json-editor-color-array);--type-icon-width: var(--type-icon-size, 10px)}.type-icon--string{--type-icon-color: var(--json-editor-color-string);--type-icon-width: calc(var(--type-icon-size, 10px) - 2px)}.type-icon--number{--type-icon-color: var(--json-editor-color-number);--type-icon-width: calc(var(--type-icon-size, 10px) - 1px)}.type-icon--boolean{--type-icon-color: var(--json-editor-color-boolean);--type-icon-width: calc(var(--type-icon-size, 10px) - 3px)}.type-icon--null{--type-icon-color: var(--json-editor-color-null);--type-icon-width: calc(var(--type-icon-size, 10px) - 2px)}.label-field{margin:-4px 0;padding:4px 6px;min-width:var(--label-min-width, unset);min-height:24px;outline:none;font-size:var(--json-editor-font-size);line-height:1.42;box-sizing:border-box;border-radius:2px;background-color:#0000;box-shadow:0 0 0 .5px #0000;transition:background-color .16s ease-out,box-shadow .2s ease-out;cursor:text}.label-field:hover,.label-field:focus{background-color:var(--json-editor-color-active)}.label-field:focus{box-shadow:0 0 0 .5px #00000040}.label-field:empty:before{content:attr(data-placeholder);color:var(--json-editor-color-blur)}.label-field[type=number]{border:none;width:100px}.label-field[type=number]::-webkit-outer-spin-button,.label-field[type=number]::-webkit-inner-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none}.label-null{display:block;padding:0 6px;color:var(--json-editor-color-blur);font-style:normal;letter-spacing:-.5px;-webkit-user-select:none;user-select:none;font-size:var(--json-editor-font-size)}.label-switch{--switch-width: 36px;--switch-height: 18px;--switch-offset: 3px;--switch-speed: .1s;--switch-unit-size: calc(var(--switch-height) - (var(--switch-offset) * 2));display:block;margin:0 0 0 6px;padding:2px 0;background:none;border:none;font-size:0;cursor:pointer}.label-switch span{display:block;position:relative;padding:var(--switch-offset);width:var(--switch-width);height:var(--switch-height);border-radius:calc(var(--switch-height) * .5);box-shadow:inset 0 0 0 1px var(--json-editor-color-blur);transition:box-shadow .16s ease-out;box-sizing:border-box}.label-switch i{display:block;width:var(--switch-unit-size);height:var(--switch-unit-size);background-color:var(--switch-unit-color, var(--json-editor-color-blur));border-radius:var(--switch-unit-size);pointer-events:none;transform:translate(var(--switch-unit-x));transition:transform var(--switch-speed) ease-out,width var(--switch-speed) ease-out,background-color .24s ease-out}.label-switch:active span{box-shadow:inset 0 0 0 1px var(--json-editor-color-active)}.label-switch:active[data-value=false] i{width:calc(var(--switch-unit-size) + 6px)}.label-switch:active[data-value=true] i{width:calc(var(--switch-unit-size) + 6px);transform:translate(calc(var(--switch-width) - var(--switch-offset) * 2 - var(--switch-unit-size) - 6px))}.label-switch:focus-visible{outline:none}.label-switch:focus-visible span{outline:2px solid var(--json-editor-color-focus);outline-offset:1px}.label-switch[data-value=false]{--switch-unit-x: 0}.label-switch[data-value=true]{--switch-unit-x: calc(var(--switch-width) - (var(--switch-offset) * 2) - var(--switch-unit-size));--switch-unit-color: var(--json-editor-color-focus)}.node{position:relative}.node__body{position:relative;display:flex;align-items:center;box-sizing:border-box;padding:4px 0;transition:opacity .12s ease-out}.node__body>.sort{display:block;box-sizing:border-box;cursor:move;margin:-4px 4px -4px 0;padding:4px 0}.node__body>.sort svg{display:block;width:24px}.node__body>.sort:active{opacity:.5}.node__body>.type{position:relative}.node__body>.type>button{display:block;margin:-2px;padding:2px;box-sizing:border-box;border:none;background:none;outline:none;cursor:pointer;transition:opacity .12s ease-out;border-radius:6px}.node__body>.type>button:active{opacity:.5}.node__body>.type>button:focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-1px}.node__body>.type.open>button{opacity:.25}.node__body>.fold{display:block;width:28px;height:28px;margin:-8px -8px -8px 0;padding:0;background:none;border:none;box-sizing:border-box;cursor:pointer}.node__body>.fold:focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-6px}.node__body>.fold svg{display:block;margin:0 auto;width:var(--fold-arrow-size, 20px);rotate:0deg;box-sizing:border-box;transition:rotate,.16s ease-out}.node__body>.key{margin-left:6px;--label-min-width: 42px}.node__body>.count{display:block;margin:0;pointer-events:none;padding:0 0 0 8px;color:var(--json-editor-color-blur);font-style:normal;-webkit-user-select:none;user-select:none;font-size:14px;line-height:normal}.node__body>.value{display:flex;align-items:center;gap:0 6px;font-size:var(--json-editor-font-size);line-height:1.42;--label-min-width: 72px}.node__body>.value:before{content:":"}.node__children>.tree{position:relative;display:none;margin:0;padding:0 0 0 26px;list-style:none;box-sizing:border-box}.node__children>.tree:not(:empty):before{content:"";display:block;position:absolute;left:11px;top:6px;bottom:14px;width:4px;border-width:0 0 0 1px;border-style:dashed;border-color:#b8b8b8}.node__children>.tree:not(:empty):after{content:"";display:block;position:absolute;left:9px;bottom:13px;width:5px;height:5px;background:hsl(0,0%,72%);border-radius:50%}.node.open>.node__body .fold svg{rotate:90deg}.node.open>.node__children>.tree{display:grid}.node.open>.node__children>.tree:empty{display:none}.node[data-type=object]>.node__body .count:before{content:"{"}.node[data-type=object]>.node__body .count:after{content:"}"}.node[data-type=object]>.node__body .value{display:none}.node[data-type=array]>.node__body .count:before{content:"["}.node[data-type=array]>.node__body .count:after{content:"]"}.node[data-type=array]>.node__body .value{display:none}.node[data-type=array]>.node__children>.tree>.node>.node__body>.key{display:none}.node[data-type=string]>.node__body .fold,.node[data-type=number]>.node__body .fold,.node[data-type=boolean]>.node__body .fold,.node[data-type=null]>.node__body .fold{display:none}.node[data-type=string]>.node__children>.tree,.node[data-type=number]>.node__children>.tree,.node[data-type=boolean]>.node__children>.tree,.node[data-type=null]>.node__children>.tree{display:none}.node:before,.node:after{display:none;content:"";position:absolute;left:0;right:0;height:4px;background-color:var(--json-editor-color-focus);border-radius:4px}.node:before{top:-2px}.node:after{bottom:-2px}.node.drag-over-start:before{display:block}.node.drag-over-end:after{display:block}.dragging .node:not(.root)>.node__body{opacity:.25}.dragging .drag-area>.node>.node__body{opacity:unset}.drag-select{background-color:#0000000d}.context{--context-border-radius: 4px;--context-color-line: hsl(0 0% 88%);--context-color-item-active: hsl(0 0% 92%);position:absolute;top:-8px;right:-8px;z-index:2}.context.is-root{left:28px}.context ol{position:absolute;left:0;margin:0;padding:0;list-style:none;background:var(--context-color-line);border-radius:var(--context-border-radius);box-shadow:0 4px 32px #0000001a,0 2px 8px #0003,0 0 0 1px #0000000d}.context li{position:relative}.context li:not(:first-child){margin-top:1px}.context li:first-child>button{border-top-left-radius:var(--context-border-radius);border-top-right-radius:var(--context-border-radius)}.context li:last-child>button{border-bottom-left-radius:var(--context-border-radius);border-bottom-right-radius:var(--context-border-radius)}.context li.type>button{grid-template-columns:auto 1fr;gap:8px}.context li.type>button:disabled>*{opacity:.25}.context li.dropdown:hover>button,.context li.dropdown:focus-within>button{background-color:var(--context-color-item-active)}.context li.dropdown:hover>.children,.context li.dropdown:focus-within>.children{opacity:1;pointer-events:auto}.context li.dropdown>button{grid-template-columns:1fr auto}.context li.remove .label{color:var(--json-editor-color-error)}.context button{display:grid;align-items:center;margin:0;padding:8px 12px;min-width:150px;text-align:left;box-sizing:border-box;background-color:var(--json-editor-color-bg);border:none;cursor:pointer;border-radius:0;transition:background-color .12s ease-out;font-family:var(--json-editor-font-base);font-size:12px;letter-spacing:-.25px;outline:none;color:var(--json-editor-color-base)}.context button:hover,.context button:active{background-color:var(--context-color-item-active)}.context button:not(.parent):focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-2px}.context button:disabled{cursor:default}.context .label{display:block;font-style:normal;pointer-events:none;-webkit-user-select:none;user-select:none}.context .type-icon{--type-size: 16px;--type-icon-size: 8px}.context .arrow{display:block;margin:0 -4px 0 0;pointer-events:none}.context .arrow svg{display:block;width:16px}.context .children{position:absolute;top:-12px;right:4px;z-index:2;pointer-events:none;opacity:0;transition:opacity .24s ease-out}.context .children ol{top:0;left:0}
`;
var Q, Et;
class _n extends HTMLElement {
  constructor() {
    super();
    y(this, Q);
    this.attachShadow({ mode: "open" });
    const n = document.createElement("template");
    n.innerHTML = '<div class="json-editor"></div>';
    const o = new CSSStyleSheet();
    o.replaceSync(kn), this.shadowRoot.appendChild(n.content.cloneNode(!0)), this.shadowRoot.adoptedStyleSheets = [o], this.root = this.shadowRoot.childNodes[0], this.ready = !1, this.data = {}, this.options = {
      live: !1,
      theme: "system"
      // system,light,dark
    };
  }
  static get observedAttributes() {
    return ["src", "theme", "live"];
  }
  get props() {
    return {
      src: this.getAttribute("src"),
      theme: this.getAttribute("theme"),
      live: this.getAttribute("live")
    };
  }
  /**
   * 속성값이 변경됐을때 호출되는 영역
   */
  attributeChangedCallback(n, o, i) {
    if (o !== i)
      switch (n) {
        case "src":
          this.data = de(i), this.core && this.core.replace(this.data);
          break;
        case "theme":
          this.options.theme = ["system", "light", "dark"].indexOf(i) > -1 ? i : "system", this.core && (this.core.options.theme = this.options.theme);
          break;
        case "live":
          this.options.live = ["true", "1"].indexOf(i) > -1, this.core && (this.core.options.live = this.options.live);
          break;
      }
  }
  /**
   * mounted component
   */
  connectedCallback() {
    this.root.addEventListener("json-editor", g(this, Q, Et)), this.core = new wn(this.root, this.options), this.core.replace(this.data);
  }
  /**
   * unmounted component
   */
  disconnectedCallback() {
    console.warn("disconnectedCallback()"), this.root.removeEventListener("json-editor", g(this, Q, Et)), this.core && (this.core.destroy(), delete this.core, this.root.innerHTML = "");
  }
  adoptedCallback() {
    console.warn("adoptedCallback()");
  }
}
Q = new WeakSet(), Et = function(n) {
  console.log("#onRootEvent", n);
};
export {
  _n as default
};
