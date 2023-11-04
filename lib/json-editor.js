var Pe = Object.defineProperty;
var Ue = (t, e, n) => e in t ? Pe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var $ = (t, e, n) => (Ue(t, typeof e != "symbol" ? e + "" : e, n), n), _t = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var g = (t, e, n) => (_t(t, e, "read from private field"), n ? n.call(t) : e.get(t)), b = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, M = (t, e, n, i) => (_t(t, e, "write to private field"), i ? i.call(t, n) : e.set(t, n), n);
var d = (t, e, n) => (_t(t, e, "access private method"), n);
const O = document, gt = window, ae = O.documentElement, Y = O.createElement.bind(O), le = Y("div"), Bt = Y("table"), je = Y("tbody"), zt = Y("tr"), { isArray: At, prototype: ue } = Array, { concat: He, filter: Ht, indexOf: fe, map: de, push: Ve, slice: he, some: Vt, splice: Ye } = ue, Fe = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Je = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ke = /<.+>/, Ze = /^\w+$/;
function Yt(t, e) {
  const n = We(e);
  return !t || !n && !V(e) && !v(e) ? [] : !n && Je.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && Ze.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class Lt {
  constructor(e, n) {
    if (!e)
      return;
    if (Dt(e))
      return e;
    let i = e;
    if (E(e)) {
      const s = n || O;
      if (i = Fe.test(e) && V(s) ? s.getElementById(e.slice(1).replace(/\\/g, "")) : Ke.test(e) ? ye(e) : Dt(s) ? s.find(e) : E(s) ? o(s).find(e) : Yt(e, s), !i)
        return;
    } else if (F(e))
      return this.ready(e);
    (i.nodeType || i === gt) && (i = [i]), this.length = i.length;
    for (let s = 0, r = this.length; s < r; s++)
      this[s] = i[s];
  }
  init(e, n) {
    return new Lt(e, n);
  }
}
const c = Lt.prototype, o = c.init;
o.fn = o.prototype = c;
c.length = 0;
c.splice = Ye;
typeof Symbol == "function" && (c[Symbol.iterator] = ue[Symbol.iterator]);
function Dt(t) {
  return t instanceof Lt;
}
function et(t) {
  return !!t && t === t.window;
}
function V(t) {
  return !!t && t.nodeType === 9;
}
function We(t) {
  return !!t && t.nodeType === 11;
}
function v(t) {
  return !!t && t.nodeType === 1;
}
function Ge(t) {
  return !!t && t.nodeType === 3;
}
function qe(t) {
  return typeof t == "boolean";
}
function F(t) {
  return typeof t == "function";
}
function E(t) {
  return typeof t == "string";
}
function k(t) {
  return t === void 0;
}
function ot(t) {
  return t === null;
}
function pe(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function Ft(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
o.isWindow = et;
o.isFunction = F;
o.isArray = At;
o.isNumeric = pe;
o.isPlainObject = Ft;
function N(t, e, n) {
  if (n) {
    let i = t.length;
    for (; i--; )
      if (e.call(t[i], i, t[i]) === !1)
        return t;
  } else if (Ft(t)) {
    const i = Object.keys(t);
    for (let s = 0, r = i.length; s < r; s++) {
      const l = i[s];
      if (e.call(t[l], l, t[l]) === !1)
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
function yt(...t) {
  const e = qe(t[0]) ? t.shift() : !1, n = t.shift(), i = t.length;
  if (!n)
    return {};
  if (!i)
    return yt(e, o, n);
  for (let s = 0; s < i; s++) {
    const r = t[s];
    for (const l in r)
      e && (At(r[l]) || Ft(r[l])) ? ((!n[l] || n[l].constructor !== r[l].constructor) && (n[l] = new r[l].constructor()), yt(e, n[l], r[l])) : n[l] = r[l];
  }
  return n;
}
o.extend = yt;
c.extend = function(t) {
  return yt(c, t);
};
const ze = /\S+/g;
function Ot(t) {
  return E(t) ? t.match(ze) || [] : [];
}
c.toggleClass = function(t, e) {
  const n = Ot(t), i = !k(e);
  return this.each((s, r) => {
    v(r) && N(n, (l, a) => {
      i ? e ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
c.addClass = function(t) {
  return this.toggleClass(t, !0);
};
c.removeAttr = function(t) {
  const e = Ot(t);
  return this.each((n, i) => {
    v(i) && N(e, (s, r) => {
      i.removeAttribute(r);
    });
  });
};
function Xe(t, e) {
  if (t) {
    if (E(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !v(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return ot(n) ? void 0 : n;
      }
      return k(e) ? this : ot(e) ? this.removeAttr(t) : this.each((n, i) => {
        v(i) && i.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
c.attr = Xe;
c.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
c.hasClass = function(t) {
  return !!t && Vt.call(this, (e) => v(e) && e.classList.contains(t));
};
c.get = function(t) {
  return k(t) ? he.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
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
function Qe(t) {
  return k(t) ? this.get().map((e) => v(e) || Ge(e) ? e.textContent : "").join("") : this.each((e, n) => {
    v(n) && (n.textContent = t);
  });
}
c.text = Qe;
function S(t, e, n) {
  if (!v(t))
    return;
  const i = gt.getComputedStyle(t, null);
  return n ? i.getPropertyValue(e) || void 0 : i[e] || t.style[e];
}
function A(t, e) {
  return parseInt(S(t, e), 10) || 0;
}
function Xt(t, e) {
  return A(t, `border${e ? "Left" : "Top"}Width`) + A(t, `padding${e ? "Left" : "Top"}`) + A(t, `padding${e ? "Right" : "Bottom"}`) + A(t, `border${e ? "Right" : "Bottom"}Width`);
}
const $t = {};
function tn(t) {
  if ($t[t])
    return $t[t];
  const e = Y(t);
  O.body.insertBefore(e, null);
  const n = S(e, "display");
  return O.body.removeChild(e), $t[t] = n !== "none" ? n : "block";
}
function Qt(t) {
  return S(t, "display") === "none";
}
function ge(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function St(t) {
  return E(t) ? (e, n) => ge(n, t) : F(t) ? t : Dt(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
c.filter = function(t) {
  const e = St(t);
  return o(Ht.call(this, (n, i) => e.call(n, i, n)));
};
function D(t, e) {
  return e ? t.filter(e) : t;
}
c.detach = function(t) {
  return D(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const en = /^\s*<(\w+)[^>]*>/, nn = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, te = {
  "*": le,
  tr: je,
  td: zt,
  th: zt,
  thead: Bt,
  tbody: Bt,
  tfoot: Bt
};
function ye(t) {
  if (!E(t))
    return [];
  if (nn.test(t))
    return [Y(RegExp.$1)];
  const e = en.test(t) && RegExp.$1, n = te[e] || te["*"];
  return n.innerHTML = t, o(n.childNodes).detach().get();
}
o.parseHTML = ye;
c.has = function(t) {
  const e = E(t) ? (n, i) => Yt(t, i).length : (n, i) => i.contains(t);
  return this.filter(e);
};
c.not = function(t) {
  const e = St(t);
  return this.filter((n, i) => (!E(t) || v(i)) && !e.call(i, n, i));
};
function _(t, e, n, i) {
  const s = [], r = F(e), l = i && St(i);
  for (let a = 0, h = t.length; a < h; a++)
    if (r) {
      const f = e(t[a]);
      f.length && Ve.apply(s, f);
    } else {
      let f = t[a][e];
      for (; f != null && !(i && l(-1, f)); )
        s.push(f), f = n ? f[e] : null;
    }
  return s;
}
function me(t) {
  return t.multiple && t.options ? _(Ht.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function sn(t) {
  return arguments.length ? this.each((e, n) => {
    const i = n.multiple && n.options;
    if (i || Te.test(n.type)) {
      const s = At(t) ? de.call(t, String) : ot(t) ? [] : [String(t)];
      i ? N(n.options, (r, l) => {
        l.selected = s.indexOf(l.value) >= 0;
      }, !0) : n.checked = s.indexOf(n.value) >= 0;
    } else
      n.value = k(t) || ot(t) ? "" : t;
  }) : this[0] && me(this[0]);
}
c.val = sn;
c.is = function(t) {
  const e = St(t);
  return Vt.call(this, (n, i) => e.call(n, i, n));
};
o.guid = 1;
function L(t) {
  return t.length > 1 ? Ht.call(t, (e, n, i) => fe.call(i, e) === n) : t;
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
  return fe.call(n, e);
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
  return o(L(_(this, (e) => Yt(t, e))));
};
const rn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, on = /^$|^module$|\/(java|ecma)script/i, cn = ["type", "src", "nonce", "noModule"];
function an(t, e) {
  const n = o(t);
  n.filter("script").add(n.find("script")).each((i, s) => {
    if (on.test(s.type) && ae.contains(s)) {
      const r = Y("script");
      r.text = s.textContent.replace(rn, ""), N(cn, (l, a) => {
        s[a] && (r[a] = s[a]);
      }), e.head.insertBefore(r, null), e.head.removeChild(r);
    }
  });
}
function ln(t, e, n, i, s) {
  i ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), s && an(e, t.ownerDocument);
}
function I(t, e, n, i, s, r, l, a) {
  return N(t, (h, f) => {
    N(o(f), (p, w) => {
      N(o(e), (R, C) => {
        const B = n ? w : C, m = n ? C : w, J = n ? p : R;
        ln(B, J ? m.cloneNode(!0) : m, i, s, !J);
      }, a);
    }, l);
  }, r), e;
}
c.after = function() {
  return I(arguments, this, !1, !1, !1, !0, !0);
};
c.append = function() {
  return I(arguments, this, !1, !1, !0);
};
function un(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (k(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, i) => {
    v(i) && (e ? o(i).empty().append(t) : i.innerHTML = t);
  });
}
c.html = un;
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
  return o(He.apply([], de.call(this, (e, n) => t.call(e, n, e))));
};
c.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
c.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && S(n, "position") === "static"; )
      n = n.offsetParent;
    return n || ae;
  });
};
c.slice = function(t, e) {
  return o(he.call(this, t, e));
};
const fn = /-([a-z])/g;
function Jt(t) {
  return t.replace(fn, (e, n) => n.toUpperCase());
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
    top: e.top + gt.pageYOffset,
    left: e.left + gt.pageXOffset
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
      n.top -= r.top + A(s, "borderTopWidth"), n.left -= r.left + A(s, "borderLeftWidth");
    }
  }
  return {
    top: n.top - A(t, "marginTop"),
    left: n.left - A(t, "marginLeft")
  };
};
const be = {
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
    if (E(t))
      return t = be[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, i) => {
        i[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
c.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[be[t] || t];
  });
};
const dn = /^--/;
function Kt(t) {
  return dn.test(t);
}
const Mt = {}, { style: hn } = le, pn = ["webkit", "moz", "ms"];
function gn(t, e = Kt(t)) {
  if (e)
    return t;
  if (!Mt[t]) {
    const n = Jt(t), i = `${n[0].toUpperCase()}${n.slice(1)}`, s = `${n} ${pn.join(`${i} `)}${i}`.split(" ");
    N(s, (r, l) => {
      if (l in hn)
        return Mt[t] = l, !1;
    });
  }
  return Mt[t];
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
function Ce(t, e, n = Kt(t)) {
  return !n && !yn[t] && pe(e) ? `${e}px` : e;
}
function mn(t, e) {
  if (E(t)) {
    const n = Kt(t);
    return t = gn(t, n), arguments.length < 2 ? this[0] && S(this[0], t, n) : t ? (e = Ce(t, e, n), this.each((i, s) => {
      v(s) && (n ? s.style.setProperty(t, e) : s.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
c.css = mn;
function we(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const bn = /^\s+|\s+$/;
function ee(t, e) {
  const n = t.dataset[e] || t.dataset[Jt(e)];
  return bn.test(n) ? n : we(JSON.parse, n);
}
function Cn(t, e, n) {
  n = we(JSON.stringify, n), t.dataset[Jt(e)] = n;
}
function wn(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const i in this[0].dataset)
      n[i] = ee(this[0], i);
    return n;
  }
  if (E(t))
    return arguments.length < 2 ? this[0] && ee(this[0], t) : k(e) ? this : this.each((n, i) => {
      Cn(i, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
c.data = wn;
function ve(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
N([!0, !1], (t, e) => {
  N(["Width", "Height"], (n, i) => {
    const s = `${e ? "outer" : "inner"}${i}`;
    c[s] = function(r) {
      if (this[0])
        return et(this[0]) ? e ? this[0][`inner${i}`] : this[0].document.documentElement[`client${i}`] : V(this[0]) ? ve(this[0], i) : this[0][`${e ? "offset" : "client"}${i}`] + (r && e ? A(this[0], `margin${n ? "Top" : "Left"}`) + A(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
N(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  c[n] = function(i) {
    if (!this[0])
      return k(i) ? void 0 : this;
    if (!arguments.length)
      return et(this[0]) ? this[0].document.documentElement[`client${e}`] : V(this[0]) ? ve(this[0], e) : this[0].getBoundingClientRect()[n] - Xt(this[0], !t);
    const s = parseInt(i, 10);
    return this.each((r, l) => {
      if (!v(l))
        return;
      const a = S(l, "boxSizing");
      l.style[n] = Ce(n, s + (a === "border-box" ? Xt(l, !t) : 0));
    });
  };
});
const ne = "___cd";
c.toggle = function(t) {
  return this.each((e, n) => {
    if (!v(n))
      return;
    const i = Qt(n);
    (k(t) ? i : t) ? (n.style.display = n[ne] || "", Qt(n) && (n.style.display = tn(n.tagName))) : i || (n[ne] = S(n, "display"), n.style.display = "none");
  });
};
c.hide = function() {
  return this.toggle(!1);
};
c.show = function() {
  return this.toggle(!0);
};
const ie = "___ce", Zt = ".", Wt = { focus: "focusin", blur: "focusout" }, Ne = { mouseenter: "mouseover", mouseleave: "mouseout" }, vn = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Gt(t) {
  return Ne[t] || Wt[t] || t;
}
function qt(t) {
  const e = t.split(Zt);
  return [e[0], e.slice(1).sort()];
}
c.trigger = function(t, e) {
  if (E(t)) {
    const [i, s] = qt(t), r = Gt(i);
    if (!r)
      return this;
    const l = vn.test(r) ? "MouseEvents" : "HTMLEvents";
    t = O.createEvent(l), t.initEvent(r, !0, !0), t.namespace = s.join(Zt), t.___ot = i;
  }
  t.___td = e;
  const n = t.___ot in Wt;
  return this.each((i, s) => {
    n && F(s[t.___ot]) && (s[`___i${t.type}`] = !0, s[t.___ot](), s[`___i${t.type}`] = !1), s.dispatchEvent(t);
  });
};
function xe(t) {
  return t[ie] = t[ie] || {};
}
function Nn(t, e, n, i, s) {
  const r = xe(t);
  r[e] = r[e] || [], r[e].push([n, i, s]), t.addEventListener(e, s);
}
function Ee(t, e) {
  return !e || !Vt.call(e, (n) => t.indexOf(n) < 0);
}
function mt(t, e, n, i, s) {
  const r = xe(t);
  if (e)
    r[e] && (r[e] = r[e].filter(([l, a, h]) => {
      if (s && h.guid !== s.guid || !Ee(l, n) || i && i !== a)
        return !0;
      t.removeEventListener(e, h);
    }));
  else
    for (e in r)
      mt(t, e, n, i, s);
}
c.off = function(t, e, n) {
  if (k(t))
    this.each((i, s) => {
      !v(s) && !V(s) && !et(s) || mt(s);
    });
  else if (E(t))
    F(e) && (n = e, e = ""), N(Ot(t), (i, s) => {
      const [r, l] = qt(s), a = Gt(r);
      this.each((h, f) => {
        !v(f) && !V(f) && !et(f) || mt(f, a, l, e, n);
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
function xn(t, e, n, i, s) {
  if (!E(t)) {
    for (const r in t)
      this.on(r, e, n, t[r], s);
    return this;
  }
  return E(e) || (k(e) || ot(e) ? e = "" : k(n) ? (n = e, e = "") : (i = n, n = e, e = "")), F(i) || (i = n, n = void 0), i ? (N(Ot(t), (r, l) => {
    const [a, h] = qt(l), f = Gt(a), p = a in Ne, w = a in Wt;
    f && this.each((R, C) => {
      if (!v(C) && !V(C) && !et(C))
        return;
      const B = function(m) {
        if (m.target[`___i${m.type}`])
          return m.stopImmediatePropagation();
        if (m.namespace && !Ee(h, m.namespace.split(Zt)) || !e && (w && (m.target !== C || m.___ot === f) || p && m.relatedTarget && C.contains(m.relatedTarget)))
          return;
        let J = C;
        if (e) {
          let K = m.target;
          for (; !ge(K, e); )
            if (K === C || (K = K.parentNode, !K))
              return;
          J = K;
        }
        Object.defineProperty(m, "currentTarget", {
          configurable: !0,
          get() {
            return J;
          }
        }), Object.defineProperty(m, "delegateTarget", {
          configurable: !0,
          get() {
            return C;
          }
        }), Object.defineProperty(m, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const Ie = i.call(J, m, m.___td);
        s && mt(C, f, h, e, B), Ie === !1 && (m.preventDefault(), m.stopPropagation());
      };
      B.guid = i.guid = i.guid || o.guid++, Nn(C, f, h, e, B);
    });
  }), this) : this;
}
c.on = xn;
function En(t, e, n, i) {
  return this.on(t, e, n, i, !0);
}
c.one = En;
const Tn = /\r?\n/g;
function kn(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(Tn, `\r
`))}`;
}
const Rn = /file|reset|submit|button|image/i, Te = /radio|checkbox/i;
c.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    N(n.elements || [n], (i, s) => {
      if (s.disabled || !s.name || s.tagName === "FIELDSET" || Rn.test(s.type) || Te.test(s.type) && !s.checked)
        return;
      const r = me(s);
      if (!k(r)) {
        const l = At(r) ? r : [r];
        N(l, (a, h) => {
          t += kn(s.name, h);
        });
      }
    });
  }), t.slice(1);
};
const An = {
  live: !1,
  // live update
  theme: "system",
  // system,light,dark
  edit: "all"
  // all,value,none
}, Ln = {
  open: !0,
  callback: void 0
}, u = {
  OBJECT: "object",
  ARRAY: "array",
  STRING: "string",
  NUMBER: "number",
  BOOLEAN: "boolean",
  NULL: "null"
}, Z = {
  START: "pointerdown",
  MOVE: "pointermove",
  END: "pointerup.json-editor pointercancel.json-editor"
}, W = {
  CLICK: "click.json-editor-context",
  KEYUP: "keyup.json-editor-context"
}, nt = {
  START: "drag-over-start",
  END: "drag-over-end",
  ALL: "drag-over-start drag-over-end"
}, On = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12L10 8L6 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', Sn = '<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-90, 10, 10)"><path d="M7 9L10 12L13 9" fill="currentColor"/><path d="M7 9L10 12L13 9H7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>', _n = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', ke = {
  object: '<svg viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-object"><g transform="translate(0 1)"><path d="M2.296 5.166C2.296 7.238 3.78 8.162 5.166 8.162C6.538 8.162 8.022 7.238 8.022 5.166C8.022 3.094 6.538 2.156 5.166 2.156C3.78 2.156 2.296 3.094 2.296 5.166ZM0 5.18C0 2.03 2.366 0 5.166 0C7.952 0 10.318 2.03 10.318 5.18C10.318 8.316 7.952 10.346 5.166 10.346C2.366 10.346 0 8.316 0 5.18Z" fill="currentColor"/></g></svg>',
  array: '<svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-array"><path d="M7.728 9.926L6.902 7.658H2.87L2.044 9.926H0L3.808 0H6.048L9.828 9.926H7.728ZM4.886 2.142L3.514 5.894H6.258L4.886 2.142Z" fill="currentColor"/></svg>',
  string: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-string"><g transform="translate(0 1)"><path d="M7.39203 2.576L5.65603 3.108C5.55803 2.562 5.11003 1.708 3.85003 1.708C2.91203 1.708 2.29603 2.31 2.29603 2.968C2.29603 3.514 2.64603 3.948 3.37403 4.088L4.76003 4.354C6.56603 4.704 7.53203 5.88 7.53203 7.28C7.53203 8.806 6.25803 10.346 3.94803 10.346C1.31603 10.346 0.154031 8.652 3.05176e-05 7.238L1.79203 6.762C1.87603 7.742 2.56203 8.624 3.96203 8.624C4.99803 8.624 5.57203 8.106 5.57203 7.406C5.57203 6.832 5.13803 6.384 4.36803 6.23L2.98203 5.95C1.40003 5.628 0.378031 4.606 0.378031 3.108C0.378031 1.344 1.96003 0 3.83603 0C6.24403 0 7.16803 1.456 7.39203 2.576Z" fill="currentColor"/></g></svg>',
  number: '<svg viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-number"><path d="M8.47003 9.926H6.44003L1.93203 2.884V9.926H3.05176e-05V0H2.40803L6.53803 6.566V0H8.47003V9.926Z" fill="currentColor"/></svg>',
  boolean: '<svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-boolean"><path d="M3.05176e-05 0H3.57003C5.50203 0 6.59403 1.134 6.59403 2.674C6.59403 3.696 5.97803 4.522 5.15203 4.802C6.11803 5.04 6.90203 5.922 6.90203 7.154C6.90203 8.764 5.69803 9.926 3.83603 9.926H3.05176e-05V0ZM1.90403 4.102H3.27603C4.15803 4.102 4.69003 3.612 4.69003 2.856C4.69003 2.1 4.20003 1.624 3.26203 1.624H1.90403V4.102ZM1.90403 8.316H3.47203C4.41003 8.316 4.97003 7.826 4.97003 7.028C4.97003 6.244 4.46603 5.698 3.50003 5.698H1.90403V8.316Z" fill="currentColor"/></svg>',
  null: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-null"><g transform="translate(0 1.5)"><path d="M3.808 10.15C1.694 10.15 0 8.848 0 6.412V0H1.932V6.272C1.932 7.574 2.66 8.26 3.808 8.26C4.984 8.26 5.698 7.574 5.698 6.272V0H7.63V6.412C7.63 8.848 5.936 10.15 3.808 10.15Z" fill="currentColor"/></g></svg>'
};
var P, G, bt, Re, Ct, Ae, wt, Le, vt, Oe;
class Bn {
  constructor(e, n, i = !1) {
    b(this, bt);
    b(this, Ct);
    b(this, wt);
    b(this, vt);
    b(this, P, void 0);
    $(this, "el", {
      node: void 0,
      type: void 0,
      dialog: void 0
    });
    b(this, G, void 0);
    M(this, P, e), this.el.node = o(n), M(this, G, String(this.el.node.data("type"))), this.el.type = this.el.node.find("& > .node__body > .type"), this.el.type.addClass("open"), this.el.dialog = d(this, Ct, Ae).call(this, d(this, bt, Re).call(this), g(this, G), i), this.el.dialog.on("click", (s) => s.stopPropagation()), this.el.dialog.find("button").on("click", (s) => d(this, wt, Le).call(this, s)), g(this, P).el.wrap.get(0).dispatchEvent(new CustomEvent("context", {
      detail: {
        body: this.el.dialog.get(0),
        node: this.el.node.get(0),
        type: g(this, G),
        isRoot: i,
        $: o
      }
    })), this.el.type.append(this.el.dialog), o(window).on(W.CLICK, (s) => this.close(s)), o(window).on(W.KEYUP, (s) => d(this, vt, Oe).call(this, s));
  }
  close() {
    this.el.type.removeClass("open"), this.el.dialog.remove(), o(window).off(W.CLICK), o(window).off(W.KEYUP), delete g(this, P).context;
  }
}
P = new WeakMap(), G = new WeakMap(), bt = new WeakSet(), Re = function() {
  const { lang: e } = g(this, P);
  return [
    {
      key: "change-type",
      label: e.contextChangeType,
      // Change type
      children: [
        {
          key: u.OBJECT,
          label: e.contextTypeObject
          // Object
        },
        {
          key: u.ARRAY,
          label: e.contextTypeArray
          // Array
        },
        {
          key: u.STRING,
          label: e.contextTypeString
          // String
        },
        {
          key: u.NUMBER,
          label: e.contextTypeNumber
          // Number
        },
        {
          key: u.BOOLEAN,
          label: e.contextTypeBoolean
          // Boolean
        },
        {
          key: u.NULL,
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
          key: u.OBJECT,
          label: e.contextTypeObject
          // Object
        },
        {
          key: u.ARRAY,
          label: e.contextTypeArray
          // Array
        },
        {
          key: u.STRING,
          label: e.contextTypeString
          // String
        },
        {
          key: u.NUMBER,
          label: e.contextTypeNumber
          // Number
        },
        {
          key: u.BOOLEAN,
          label: e.contextTypeBoolean
          // Boolean
        },
        {
          key: u.NULL,
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
}, Ct = new WeakSet(), Ae = function(e, n, i = !1) {
  function s(a, h) {
    let f = "";
    const { key: p, label: w, children: R } = a;
    if (i)
      switch (p) {
        case u.STRING:
        case u.NUMBER:
        case u.BOOLEAN:
        case u.NULL:
          if (h === "change-type")
            return "";
          break;
        case "duplicate":
        case "remove":
          return "";
      }
    let C = "", B = "", m = "";
    switch (p) {
      case "change-type":
        C = ' class="dropdown"', m = " disabled";
        break;
      case "insert":
        if ([u.STRING, u.NUMBER, u.BOOLEAN, u.NULL].indexOf(n) > -1)
          return "";
        C = ' class="dropdown"', m = " disabled";
        break;
      case "duplicate":
        C = ' class="duplicate"', m = ' data-mode="duplicate"';
        break;
      case "remove":
        C = ' class="remove"', m = ' data-mode="remove"';
        break;
      case u.OBJECT:
      case u.ARRAY:
      case u.STRING:
      case u.NUMBER:
      case u.BOOLEAN:
      case u.NULL:
        C = ' class="type"', B = `<i class="type-icon type-icon--${p}">${ke[p]}</i>`, m = ` data-mode="${h}" data-type="${p}"`, h === "change-type" && p === n && (m = " disabled");
        break;
    }
    return f += `<li${C}>`, f += `<button type="button"${m}>`, f += B, f += `<em class="label">${w}</em>`, (p === "change-type" || p === "insert") && (f += `<span class="arrow">${On}</span>`), f += "</button>", (R == null ? void 0 : R.length) > 0 && (f += '<div class="children">', f += r(R, p), f += "</div>"), f += "</li>", f;
  }
  function r(a, h = void 0) {
    let f = "<ol>";
    for (let p in a)
      f += s(a[p], h);
    return f += "</ol>", f;
  }
  let l = `<nav class="context${i ? " is-root" : ""}">`;
  return l += r(e), l += "</nav>", o(l);
}, wt = new WeakSet(), Le = function(e) {
  const n = o(e.currentTarget), i = n.data("mode");
  let s = String(n.data("type"));
  s = s === "undefined" ? "" : s, this.close(), this.selectItem && typeof this.selectItem == "function" && this.selectItem(this.el.node, i, s);
}, vt = new WeakSet(), Oe = function(e) {
  e.code === "Escape" && this.close();
};
function se(t) {
  return t == null ? "null" : Array.isArray(t) ? "array" : typeof t == "string" ? "string" : typeof t == "number" ? "number" : typeof t == "boolean" ? "boolean" : "object";
}
function $n(t) {
  try {
    return typeof t == "string" ? JSON.parse(t) : Array.isArray(t) ? Object.assign([], t) : o.isPlainObject(t) ? Object.assign({}, t) : {};
  } catch (e) {
    console.error("error", e.message);
  }
}
function Mn(t) {
  return Array.isArray(t) ? t.length : o.isPlainObject(t) ? Object.keys(t).length : 0;
}
function re(t) {
  if (t.ctrlKey || t.metaKey)
    switch (t.code) {
      case "KeyB":
      case "KeyI":
      case "KeyU":
        return !0;
    }
  return !1;
}
function oe(t) {
  t.preventDefault();
  const e = t.currentTarget, n = document.createRange();
  n.selectNodeContents(e);
  const i = window.getSelection();
  i.removeAllRanges(), i.addRange(n);
}
function ce(t) {
  t.preventDefault();
  let n = (t.originalEvent || t).clipboardData.getData("text/plain");
  document.execCommand("insertText", !1, n);
}
const Dn = {
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
var y, q, Nt, Se, ct, It, z, ft, xt, _e, Et, Be, X, dt, U, it, at, Pt, x, T, lt, Ut, j, st, ut, jt, H, rt, Q, ht, tt, pt, Tt, $e, kt, Me, Rt, De;
class In {
  constructor(e, n = {}) {
    b(this, Nt);
    b(this, ct);
    b(this, z);
    b(this, xt);
    b(this, Et);
    b(this, X);
    b(this, U);
    b(this, at);
    b(this, x);
    b(this, lt);
    b(this, j);
    b(this, ut);
    /**
     * NODE EVENTS
     */
    b(this, H);
    b(this, Q);
    b(this, tt);
    b(this, Tt);
    b(this, kt);
    b(this, Rt);
    $(this, "$");
    $(this, "el", { wrap: null, body: null, tree: null });
    $(this, "options");
    $(this, "context");
    b(this, y, void 0);
    b(this, q, !1);
    $(this, "lang", Dn);
    this.$ = o, this.el.wrap = o(e), this.el.body = o('<div class="json-editor"></div>'), this.options = new Proxy(Object.assign({}, An, n), {
      get: (i, s) => i[s],
      set: d(this, Nt, Se).bind(this)
    }), this.updateLanguage(), this.el.wrap.append(this.el.body), d(this, ct, It).call(this, this.options.theme), d(this, ut, jt).call(this, this.options.edit), this.replace({}, !1);
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
    i = { ...Ln, ...i };
    const { open: l, callback: a } = i;
    e = o(e);
    const h = n.type === void 0 ? se(n.value) : n.type, f = d(this, z, ft).call(this, h, !1);
    d(this, X, dt).call(this, f, {
      ...n,
      open: l,
      type: h,
      depth: e.data("depth") + 1
    }), d(this, H, rt).call(this, f), e.find("& > .node__children > ul").append(f), r && d(this, j, st).call(this, e), (h === u.ARRAY || h === u.OBJECT) && a && typeof a == "function" && a(f.get(0), n.value), s && d(this, x, T).call(this);
  }
  /**
   * remove node
   * @param {HTMLElement} $node
   * @param {boolean} useUpdate
   */
  removeNode(e, n = !0) {
    e = o(e);
    const i = e.parent().closest(".node");
    e.remove(), d(this, j, st).call(this, i), n && d(this, x, T).call(this);
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
      value: d(this, at, Pt).call(this, s),
      type: n,
      open: s.hasClass("open"),
      depth: s.data("depth")
    }, l = s.find("& > .node__children > .tree").html(), a = s.hasClass("root");
    s.empty(), s.html(d(this, z, ft).call(this, n, a).html()), l && s.find("& > .node__children > .tree").html(l), d(this, X, dt).call(this, s, r), d(this, H, rt).call(this, s), s.attr("data-type", n), i && d(this, x, T).call(this);
  }
  changeKey(e, n) {
    o(e).find(".key > div").text(n), d(this, x, T).call(this);
  }
  changeValue(e, n) {
    o(e).find(".value > div").text(n), d(this, x, T).call(this);
  }
  /**
   * duplicate
   * @param {HTMLElement} $target
   * @param {boolean} useUpdate
   */
  duplicate(e, n = !0) {
    e = o(e);
    const i = o(e.get(0).outerHTML);
    d(this, H, rt).call(this, i), e.after(i), d(this, j, st).call(this, e.parent().closest(".node")), n && d(this, x, T).call(this);
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
    this.el.tree && (this.el.body.empty(), this.replace({}, !1), d(this, x, T).call(this));
  }
  destroy() {
    o(window).off(Z.END).off(W.CLICK).off(W.KEYUP), this.el.wrap.empty();
  }
  /**
   * replace
   * @param {object|array} data
   * @param {boolean} useUpdate
   */
  replace(e, n = !0) {
    this.el.body.empty(), e = $n(e);
    const i = d(this, xt, _e).call(this, e);
    this.import(i, e, !1, !1), n && d(this, x, T).call(this);
  }
  /**
   * import data
   * @param {HTMLElement} $target
   * @param {object|array} data
   * @param {boolean} useUpdate
   * @param {boolean} useUpdateCount
   */
  import(e, n, i = !0, s = !0) {
    e = o(e), o.each(n, (r, l) => {
      const a = { key: r, value: l }, h = {
        open: !1,
        callback: (f, p) => this.import(f, p, !1, !1)
      };
      this.addNode(e, a, h, !1, !1);
    }), s && d(this, j, st).call(this, e), i && d(this, x, T).call(this);
  }
  /**
   * export
   * @param {HTMLElement} $node
   * @param {boolean} json
   * @param {number|boolean} space (number: space count, true: tab, false: 0)
   * @return {array|object}
   */
  export(e = void 0, n, i = 2) {
    let s = d(this, lt, Ut).call(this, e);
    if (n) {
      let r = 2;
      return i === !0 ? r = "	" : typeof i === u.NUMBER && (r = i), JSON.stringify(s, null, r);
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
y = new WeakMap(), q = new WeakMap(), Nt = new WeakSet(), Se = function(e, n, i) {
  switch (e[n] = i, n) {
    case "theme":
      d(this, ct, It).call(this, i);
      break;
    case "edit":
      d(this, ut, jt).call(this, i);
      break;
  }
  return !0;
}, ct = new WeakSet(), It = function(e) {
  e = ["system", "light", "dark"].indexOf(e) > -1 ? e : "system", this.el.body.attr("data-theme", e);
}, z = new WeakSet(), ft = function(e, n = !1) {
  const { lang: i } = this;
  let s = `<li data-type="${e}" class="node${n ? " root" : ""}">`;
  return s += '<div class="node__body">', n || (s += `<div class="sort" title="${i.nodeChangeSort}">${_n}</div>`), s += `<div class="type"><button type="button" title="${i.nodeContextMenu}"></button></div>`, (e === u.OBJECT || e === u.ARRAY) && (s += `<button type="button" title="${i.nodeFold}" class="fold">${Sn}</button>`), n || (s += '<div class="key"></div>'), s += '<em class="count"></em>', n || (s += '<div class="value"></div>'), s += "</div>", s += '<div class="node__children"><ul class="tree"/></div>', s += "</li>", o(s);
}, xt = new WeakSet(), _e = function(e) {
  const n = se(e), i = d(this, z, ft).call(this, n, !0);
  return d(this, X, dt).call(this, i, {
    key: void 0,
    value: e,
    type: n,
    open: !0,
    depth: 0
  }), d(this, H, rt).call(this, i), this.el.tree = o("<ul/>"), this.el.tree.append(i), this.el.body.append(this.el.tree), i;
}, Et = new WeakSet(), Be = function(e, n, i) {
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
}, X = new WeakSet(), dt = function(e, n) {
  const { key: i, value: s, type: r, open: l, depth: a } = n, h = e.hasClass("root"), f = e.children(".node__body");
  if (f.find(".type > button").html(`<i class="type-icon type-icon--${r}">${ke[r]}</i>`), (r === u.OBJECT || r === u.ARRAY) && this.fold(e, l), a !== void 0 && e.attr("data-depth", a), !h) {
    f.find(".key").html(`<div class="label-field" contenteditable="true" data-placeholder="empty">${i}</div>`);
    const p = f.find(".value");
    let w;
    switch (r) {
      case u.STRING:
        p.html(`<div contenteditable="true" data-placeholder="empty" class="label-field type-string">${String(s)}</div>`);
        break;
      case u.NUMBER:
        w = Number(s), isNaN(w) && (w = 0), p.html(`<input type="number" value="${w}" placeholder="0" class="label-field type-number"/>`);
        break;
      case u.BOOLEAN:
        w = s === "false" ? !1 : !!s, p.html(`<button type="button" data-value="${w}" class="label-switch type-boolean"><span><i>${w.toString().toUpperCase()}</i></span></button>`);
        break;
      case u.NULL:
        p.html('<em class="label-null type-null">NULL</em>');
        break;
    }
  }
  if (r === u.OBJECT || r === u.ARRAY) {
    const p = Mn(s);
    isNaN(p) || f.find(".count").text(p);
  }
}, U = new WeakSet(), it = function(e) {
  return String(e.data("type"));
}, at = new WeakSet(), Pt = function(e) {
  const n = d(this, U, it).call(this, e), i = e.find("& > .node__body > .value");
  switch (n) {
    case u.OBJECT:
    case u.ARRAY:
      return "";
    case u.STRING:
      return i.children(".type-string").get(0).innerText || "";
    case u.NUMBER:
      return Number(i.children(".type-number").val());
    case u.BOOLEAN:
      return i.children(".type-boolean").data("value");
    case u.NULL:
      return null;
  }
}, x = new WeakSet(), T = function() {
  this.options.live && this.el.wrap.get(0).dispatchEvent(new CustomEvent("update", {
    detail: d(this, lt, Ut).call(this)
  }));
}, lt = new WeakSet(), Ut = function(e) {
  const n = (r, l) => {
    let a = l === u.ARRAY ? [] : {};
    return r.find("& > .node__children > ul > li").each((f, p) => {
      if (!(l === u.ARRAY || l === u.OBJECT))
        return !0;
      p = o(p);
      const w = d(this, U, it).call(this, p);
      switch (w) {
        case u.OBJECT:
        case u.ARRAY:
          switch (l) {
            case u.ARRAY:
              a.push(n(p, w));
              break;
            case u.OBJECT:
              const C = p.find("& > .node__body > .key").text();
              C && (a[C] = n(p, w));
              break;
          }
          break;
        case u.STRING:
        case u.NUMBER:
        case u.BOOLEAN:
        case u.NULL:
          const R = d(this, at, Pt).call(this, p);
          switch (l) {
            case u.ARRAY:
              a.push(R);
              break;
            case u.OBJECT:
              const C = p.find("& > .node__body > .key").text();
              C && (a[C] = R);
              break;
          }
          break;
      }
    }), a;
  };
  e = o(e);
  const i = (e == null ? void 0 : e.length) > 0 ? e : this.el.tree.children(".node"), s = d(this, U, it).call(this, i);
  if ([u.OBJECT, u.ARRAY].includes(s))
    return n(i, s);
}, j = new WeakSet(), st = function(e) {
  e = o(e);
  const n = d(this, U, it).call(this, e);
  if (!(n === "object" || n === "array"))
    return;
  const i = e.find("& > .node__children > ul > li").length;
  isNaN(i) || e.find("& > .node__body > .count").text(i);
}, ut = new WeakSet(), jt = function(e) {
  e === "all" ? this.el.body.removeAttr("data-edit") : this.el.body.attr("data-edit", e);
}, H = new WeakSet(), rt = function(e) {
  const n = e.find(".sort");
  n.length && n.on(Z.START, d(this, Tt, $e).bind(this)), e.find(".type > button").on("click", async (a) => {
    if (a.stopPropagation(), this.options.edit !== "all")
      return;
    const h = o(a.currentTarget);
    if (h.parent().hasClass("open"))
      this.context && this.context.close();
    else {
      this.context && this.context.close();
      const f = h.closest(".node").hasClass("root");
      this.context = new Bn(this, h.closest(".node"), f), this.context.selectItem = (p, w, R) => d(this, Et, Be).call(this, p, w, R);
    }
  }), e.find(".fold").on("click", (a) => {
    const f = o(a.currentTarget).closest(".node");
    this.fold(f);
  });
  const i = e.find(".key > .label-field");
  i.length && (i.on("keydown", (a) => {
    if (this.options.edit === "all" && (a.code === "Enter" || re(a)))
      return a.preventDefault();
  }).on("input", (a) => d(this, Q, ht).call(this, a)).on("blur", (a) => d(this, tt, pt).call(this, a)), this.options.edit !== "all" ? i.on("dblclick", oe) : i.on("paste", ce));
  const s = e.find(".value > .type-string");
  s.length && (s.on("keydown", (a) => {
    if (this.options.edit !== "none" && re(a))
      return a.preventDefault();
  }).on("input", (a) => d(this, Q, ht).call(this, a)).on("blur", (a) => d(this, tt, pt).call(this, a)), this.options.edit === "none" ? s.on("dblclick", oe) : s.on("paste", ce));
  const r = e.find(".value > .type-number");
  r.length && r.on("keydown", (a) => {
    this.options.edit === "none" && a.preventDefault();
  }).on("input", (a) => d(this, Q, ht).call(this, a)).on("blur", (a) => d(this, tt, pt).call(this, a));
  const l = e.find(".value > .type-boolean");
  l.length && l.on("click", (a) => {
    if (this.options.edit === "none")
      return;
    const h = o(a.currentTarget), f = !h.data("value");
    h.data("value", f).find("i").text(f.toString().toUpperCase()), d(this, x, T).call(this);
  });
}, Q = new WeakSet(), ht = function() {
  M(this, q, !0);
}, tt = new WeakSet(), pt = function() {
  g(this, q) && (d(this, x, T).call(this), M(this, q, !1));
}, Tt = new WeakSet(), $e = function(e) {
  if (M(this, y, {}), g(this, y).$node = o(e.currentTarget).closest(".node"), g(this, y).$area = g(this, y).$node.parent(), g(this, y).$nodes = g(this, y).$area.children(".node"), g(this, y).$nodes.length < 2) {
    M(this, y, void 0);
    return;
  }
  g(this, y).$nodes.on(Z.MOVE, d(this, kt, Me).bind(this)), o(window).on(Z.END, d(this, Rt, De).bind(this));
}, kt = new WeakSet(), Me = function(e) {
  let n;
  if (e.pointerType === "touch") {
    const { clientX: a, clientY: h } = e, f = document.elementFromPoint(a, h).closest(".node");
    if (!g(this, y).$nodes.get().includes(f))
      return;
    n = o(f);
  } else
    n = o(e.currentTarget);
  const i = n.children(".node__body");
  if (!(i.length > 0))
    return;
  const { y: s, height: r } = i.get(0).getBoundingClientRect(), l = r * 0.5 < e.y - s;
  if (g(this, y).activeNode || (this.el.body.addClass("dragging"), g(this, y).$area.addClass("drag-area"), g(this, y).$node.addClass("drag-select")), g(this, y).activeNode !== n.get(0))
    g(this, y).activeNode && o(g(this, y).activeNode).removeClass(nt.ALL), g(this, y).activeNode = n.get(0);
  else if (g(this, y).half === l)
    return;
  g(this, y).half = l, n.removeClass(nt.ALL).addClass(l ? nt.END : nt.START);
}, Rt = new WeakSet(), De = function() {
  this.el.body.removeClass("dragging"), g(this, y).$area.removeClass("drag-area"), g(this, y).$node.removeClass("drag-select"), g(this, y).$nodes.removeClass(nt.ALL), g(this, y).$nodes.off(Z.MOVE), o(window).off(Z.END), g(this, y).half ? g(this, y).$node.insertAfter(g(this, y).activeNode) : g(this, y).$node.insertBefore(g(this, y).activeNode), M(this, y, void 0), d(this, x, T).call(this);
}, $(In, "foo", "bar");
export {
  In as default
};
