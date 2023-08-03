var _e = Object.defineProperty;
var Te = (t, e, n) => e in t ? _e(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var $t = (t, e, n) => (Te(t, typeof e != "symbol" ? e + "" : e, n), n), Lt = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var f = (t, e, n) => (Lt(t, e, "read from private field"), n ? n.call(t) : e.get(t)), m = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, B = (t, e, n, i) => (Lt(t, e, "write to private field"), i ? i.call(t, n) : e.set(t, n), n);
var h = (t, e, n) => (Lt(t, e, "access private method"), n);
const R = document, lt = window, te = R.documentElement, U = R.createElement.bind(R), ee = U("div"), St = U("table"), Ae = U("tbody"), Wt = U("tr"), { isArray: kt, prototype: ne } = Array, { concat: Re, filter: jt, indexOf: ie, map: se, push: Oe, slice: re, some: Bt, splice: Me } = ne, je = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Be = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, He = /<.+>/, De = /^\w+$/;
function Ht(t, e) {
  const n = Pe(e);
  return !t || !n && !I(e) && !w(e) ? [] : !n && Be.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && De.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class xt {
  constructor(e, n) {
    if (!e)
      return;
    if (At(e))
      return e;
    let i = e;
    if ($(e)) {
      const s = n || R;
      if (i = je.test(e) && I(s) ? s.getElementById(e.slice(1).replace(/\\/g, "")) : He.test(e) ? ce(e) : At(s) ? s.find(e) : $(s) ? a(s).find(e) : Ht(e, s), !i)
        return;
    } else if (F(e))
      return this.ready(e);
    (i.nodeType || i === lt) && (i = [i]), this.length = i.length;
    for (let s = 0, r = this.length; s < r; s++)
      this[s] = i[s];
  }
  init(e, n) {
    return new xt(e, n);
  }
}
const o = xt.prototype, a = o.init;
a.fn = a.prototype = o;
o.length = 0;
o.splice = Me;
typeof Symbol == "function" && (o[Symbol.iterator] = ne[Symbol.iterator]);
function At(t) {
  return t instanceof xt;
}
function G(t) {
  return !!t && t === t.window;
}
function I(t) {
  return !!t && t.nodeType === 9;
}
function Pe(t) {
  return !!t && t.nodeType === 11;
}
function w(t) {
  return !!t && t.nodeType === 1;
}
function Ve(t) {
  return !!t && t.nodeType === 3;
}
function Ie(t) {
  return typeof t == "boolean";
}
function F(t) {
  return typeof t == "function";
}
function $(t) {
  return typeof t == "string";
}
function S(t) {
  return t === void 0;
}
function tt(t) {
  return t === null;
}
function oe(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function Dt(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
a.isWindow = G;
a.isFunction = F;
a.isArray = kt;
a.isNumeric = oe;
a.isPlainObject = Dt;
function k(t, e, n) {
  if (n) {
    let i = t.length;
    for (; i--; )
      if (e.call(t[i], i, t[i]) === !1)
        return t;
  } else if (Dt(t)) {
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
a.each = k;
o.each = function(t) {
  return k(this, t);
};
o.empty = function() {
  return this.each((t, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function ft(...t) {
  const e = Ie(t[0]) ? t.shift() : !1, n = t.shift(), i = t.length;
  if (!n)
    return {};
  if (!i)
    return ft(e, a, n);
  for (let s = 0; s < i; s++) {
    const r = t[s];
    for (const c in r)
      e && (kt(r[c]) || Dt(r[c])) ? ((!n[c] || n[c].constructor !== r[c].constructor) && (n[c] = new r[c].constructor()), ft(e, n[c], r[c])) : n[c] = r[c];
  }
  return n;
}
a.extend = ft;
o.extend = function(t) {
  return ft(o, t);
};
const Ue = /\S+/g;
function Et(t) {
  return $(t) ? t.match(Ue) || [] : [];
}
o.toggleClass = function(t, e) {
  const n = Et(t), i = !S(e);
  return this.each((s, r) => {
    w(r) && k(n, (c, l) => {
      i ? e ? r.classList.add(l) : r.classList.remove(l) : r.classList.toggle(l);
    });
  });
};
o.addClass = function(t) {
  return this.toggleClass(t, !0);
};
o.removeAttr = function(t) {
  const e = Et(t);
  return this.each((n, i) => {
    w(i) && k(e, (s, r) => {
      i.removeAttribute(r);
    });
  });
};
function Fe(t, e) {
  if (t) {
    if ($(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !w(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return tt(n) ? void 0 : n;
      }
      return S(e) ? this : tt(e) ? this.removeAttr(t) : this.each((n, i) => {
        w(i) && i.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
o.attr = Fe;
o.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
o.hasClass = function(t) {
  return !!t && Bt.call(this, (e) => w(e) && e.classList.contains(t));
};
o.get = function(t) {
  return S(t) ? re.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
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
function Ze(t) {
  return S(t) ? this.get().map((e) => w(e) || Ve(e) ? e.textContent : "").join("") : this.each((e, n) => {
    w(n) && (n.textContent = t);
  });
}
o.text = Ze;
function O(t, e, n) {
  if (!w(t))
    return;
  const i = lt.getComputedStyle(t, null);
  return n ? i.getPropertyValue(e) || void 0 : i[e] || t.style[e];
}
function T(t, e) {
  return parseInt(O(t, e), 10) || 0;
}
function Jt(t, e) {
  return T(t, `border${e ? "Left" : "Top"}Width`) + T(t, `padding${e ? "Left" : "Top"}`) + T(t, `padding${e ? "Right" : "Bottom"}`) + T(t, `border${e ? "Right" : "Bottom"}Width`);
}
const _t = {};
function We(t) {
  if (_t[t])
    return _t[t];
  const e = U(t);
  R.body.insertBefore(e, null);
  const n = O(e, "display");
  return R.body.removeChild(e), _t[t] = n !== "none" ? n : "block";
}
function qt(t) {
  return O(t, "display") === "none";
}
function ae(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function Nt(t) {
  return $(t) ? (e, n) => ae(n, t) : F(t) ? t : At(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
o.filter = function(t) {
  const e = Nt(t);
  return a(jt.call(this, (n, i) => e.call(n, i, n)));
};
function H(t, e) {
  return e ? t.filter(e) : t;
}
o.detach = function(t) {
  return H(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const Je = /^\s*<(\w+)[^>]*>/, qe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Yt = {
  "*": ee,
  tr: Ae,
  td: Wt,
  th: Wt,
  thead: St,
  tbody: St,
  tfoot: St
};
function ce(t) {
  if (!$(t))
    return [];
  if (qe.test(t))
    return [U(RegExp.$1)];
  const e = Je.test(t) && RegExp.$1, n = Yt[e] || Yt["*"];
  return n.innerHTML = t, a(n.childNodes).detach().get();
}
a.parseHTML = ce;
o.has = function(t) {
  const e = $(t) ? (n, i) => Ht(t, i).length : (n, i) => i.contains(t);
  return this.filter(e);
};
o.not = function(t) {
  const e = Nt(t);
  return this.filter((n, i) => (!$(t) || w(i)) && !e.call(i, n, i));
};
function M(t, e, n, i) {
  const s = [], r = F(e), c = i && Nt(i);
  for (let l = 0, d = t.length; l < d; l++)
    if (r) {
      const u = e(t[l]);
      u.length && Oe.apply(s, u);
    } else {
      let u = t[l][e];
      for (; u != null && !(i && c(-1, u)); )
        s.push(u), u = n ? u[e] : null;
    }
  return s;
}
function ue(t) {
  return t.multiple && t.options ? M(jt.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function Ye(t) {
  return arguments.length ? this.each((e, n) => {
    const i = n.multiple && n.options;
    if (i || me.test(n.type)) {
      const s = kt(t) ? se.call(t, String) : tt(t) ? [] : [String(t)];
      i ? k(n.options, (r, c) => {
        c.selected = s.indexOf(c.value) >= 0;
      }, !0) : n.checked = s.indexOf(n.value) >= 0;
    } else
      n.value = S(t) || tt(t) ? "" : t;
  }) : this[0] && ue(this[0]);
}
o.val = Ye;
o.is = function(t) {
  const e = Nt(t);
  return Bt.call(this, (n, i) => e.call(n, i, n));
};
a.guid = 1;
function A(t) {
  return t.length > 1 ? jt.call(t, (e, n, i) => ie.call(i, e) === n) : t;
}
a.unique = A;
o.add = function(t, e) {
  return a(A(this.get().concat(a(t, e).get())));
};
o.children = function(t) {
  return H(a(A(M(this, (e) => e.children))), t);
};
o.parent = function(t) {
  return H(a(A(M(this, "parentNode"))), t);
};
o.index = function(t) {
  const e = t ? a(t)[0] : this[0], n = t ? this : a(e).parent().children();
  return ie.call(n, e);
};
o.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const n = this.parent();
  return n.length ? n.closest(t) : e;
};
o.siblings = function(t) {
  return H(a(A(M(this, (e) => a(e).parent().children().not(e)))), t);
};
o.find = function(t) {
  return a(A(M(this, (e) => Ht(t, e))));
};
const ze = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ge = /^$|^module$|\/(java|ecma)script/i, Ke = ["type", "src", "nonce", "noModule"];
function Xe(t, e) {
  const n = a(t);
  n.filter("script").add(n.find("script")).each((i, s) => {
    if (Ge.test(s.type) && te.contains(s)) {
      const r = U("script");
      r.text = s.textContent.replace(ze, ""), k(Ke, (c, l) => {
        s[l] && (r[l] = s[l]);
      }), e.head.insertBefore(r, null), e.head.removeChild(r);
    }
  });
}
function Qe(t, e, n, i, s) {
  i ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), s && Xe(e, t.ownerDocument);
}
function D(t, e, n, i, s, r, c, l) {
  return k(t, (d, u) => {
    k(a(u), (p, v) => {
      k(a(e), (C, b) => {
        const j = n ? v : b, g = n ? b : v, Z = n ? p : C;
        Qe(j, Z ? g.cloneNode(!0) : g, i, s, !Z);
      }, l);
    }, c);
  }, r), e;
}
o.after = function() {
  return D(arguments, this, !1, !1, !1, !0, !0);
};
o.append = function() {
  return D(arguments, this, !1, !1, !0);
};
function tn(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (S(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, i) => {
    w(i) && (e ? a(i).empty().append(t) : i.innerHTML = t);
  });
}
o.html = tn;
o.appendTo = function(t) {
  return D(arguments, this, !0, !1, !0);
};
o.wrapInner = function(t) {
  return this.each((e, n) => {
    const i = a(n), s = i.contents();
    s.length ? s.wrapAll(t) : i.append(t);
  });
};
o.before = function() {
  return D(arguments, this, !1, !0);
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
  return D(arguments, this, !0, !1, !1, !1, !1, !0);
};
o.insertBefore = function(t) {
  return D(arguments, this, !0, !0);
};
o.prepend = function() {
  return D(arguments, this, !1, !0, !0, !0, !0);
};
o.prependTo = function(t) {
  return D(arguments, this, !0, !0, !0, !1, !1, !0);
};
o.contents = function() {
  return a(A(M(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
o.next = function(t, e, n) {
  return H(a(A(M(this, "nextElementSibling", e, n))), t);
};
o.nextAll = function(t) {
  return this.next(t, !0);
};
o.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
o.parents = function(t, e) {
  return H(a(A(M(this, "parentElement", !0, e))), t);
};
o.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
o.prev = function(t, e, n) {
  return H(a(A(M(this, "previousElementSibling", e, n))), t);
};
o.prevAll = function(t) {
  return this.prev(t, !0);
};
o.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
o.map = function(t) {
  return a(Re.apply([], se.call(this, (e, n) => t.call(e, n, e))));
};
o.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
o.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && O(n, "position") === "static"; )
      n = n.offsetParent;
    return n || te;
  });
};
o.slice = function(t, e) {
  return a(re.call(this, t, e));
};
const en = /-([a-z])/g;
function Pt(t) {
  return t.replace(en, (e, n) => n.toUpperCase());
}
o.ready = function(t) {
  const e = () => setTimeout(t, 0, a);
  return R.readyState !== "loading" ? e() : R.addEventListener("DOMContentLoaded", e), this;
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
    top: e.top + lt.pageYOffset,
    left: e.left + lt.pageXOffset
  };
};
o.position = function() {
  const t = this[0];
  if (!t)
    return;
  const e = O(t, "position") === "fixed", n = e ? t.getBoundingClientRect() : this.offset();
  if (!e) {
    const i = t.ownerDocument;
    let s = t.offsetParent || i.documentElement;
    for (; (s === i.body || s === i.documentElement) && O(s, "position") === "static"; )
      s = s.parentNode;
    if (s !== t && w(s)) {
      const r = a(s).offset();
      n.top -= r.top + T(s, "borderTopWidth"), n.left -= r.left + T(s, "borderLeftWidth");
    }
  }
  return {
    top: n.top - T(t, "marginTop"),
    left: n.left - T(t, "marginLeft")
  };
};
const le = {
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
      return t = le[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, i) => {
        i[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
o.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[le[t] || t];
  });
};
const nn = /^--/;
function Vt(t) {
  return nn.test(t);
}
const Tt = {}, { style: sn } = ee, rn = ["webkit", "moz", "ms"];
function on(t, e = Vt(t)) {
  if (e)
    return t;
  if (!Tt[t]) {
    const n = Pt(t), i = `${n[0].toUpperCase()}${n.slice(1)}`, s = `${n} ${rn.join(`${i} `)}${i}`.split(" ");
    k(s, (r, c) => {
      if (c in sn)
        return Tt[t] = c, !1;
    });
  }
  return Tt[t];
}
const an = {
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
function fe(t, e, n = Vt(t)) {
  return !n && !an[t] && oe(e) ? `${e}px` : e;
}
function cn(t, e) {
  if ($(t)) {
    const n = Vt(t);
    return t = on(t, n), arguments.length < 2 ? this[0] && O(this[0], t, n) : t ? (e = fe(t, e, n), this.each((i, s) => {
      w(s) && (n ? s.style.setProperty(t, e) : s.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
o.css = cn;
function he(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const un = /^\s+|\s+$/;
function zt(t, e) {
  const n = t.dataset[e] || t.dataset[Pt(e)];
  return un.test(n) ? n : he(JSON.parse, n);
}
function ln(t, e, n) {
  n = he(JSON.stringify, n), t.dataset[Pt(e)] = n;
}
function fn(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const i in this[0].dataset)
      n[i] = zt(this[0], i);
    return n;
  }
  if ($(t))
    return arguments.length < 2 ? this[0] && zt(this[0], t) : S(e) ? this : this.each((n, i) => {
      ln(i, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
o.data = fn;
function de(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
k([!0, !1], (t, e) => {
  k(["Width", "Height"], (n, i) => {
    const s = `${e ? "outer" : "inner"}${i}`;
    o[s] = function(r) {
      if (this[0])
        return G(this[0]) ? e ? this[0][`inner${i}`] : this[0].document.documentElement[`client${i}`] : I(this[0]) ? de(this[0], i) : this[0][`${e ? "offset" : "client"}${i}`] + (r && e ? T(this[0], `margin${n ? "Top" : "Left"}`) + T(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
k(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  o[n] = function(i) {
    if (!this[0])
      return S(i) ? void 0 : this;
    if (!arguments.length)
      return G(this[0]) ? this[0].document.documentElement[`client${e}`] : I(this[0]) ? de(this[0], e) : this[0].getBoundingClientRect()[n] - Jt(this[0], !t);
    const s = parseInt(i, 10);
    return this.each((r, c) => {
      if (!w(c))
        return;
      const l = O(c, "boxSizing");
      c.style[n] = fe(n, s + (l === "border-box" ? Jt(c, !t) : 0));
    });
  };
});
const Gt = "___cd";
o.toggle = function(t) {
  return this.each((e, n) => {
    if (!w(n))
      return;
    const i = qt(n);
    (S(t) ? i : t) ? (n.style.display = n[Gt] || "", qt(n) && (n.style.display = We(n.tagName))) : i || (n[Gt] = O(n, "display"), n.style.display = "none");
  });
};
o.hide = function() {
  return this.toggle(!1);
};
o.show = function() {
  return this.toggle(!0);
};
const Kt = "___ce", It = ".", Ut = { focus: "focusin", blur: "focusout" }, pe = { mouseenter: "mouseover", mouseleave: "mouseout" }, hn = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Ft(t) {
  return pe[t] || Ut[t] || t;
}
function Zt(t) {
  const e = t.split(It);
  return [e[0], e.slice(1).sort()];
}
o.trigger = function(t, e) {
  if ($(t)) {
    const [i, s] = Zt(t), r = Ft(i);
    if (!r)
      return this;
    const c = hn.test(r) ? "MouseEvents" : "HTMLEvents";
    t = R.createEvent(c), t.initEvent(r, !0, !0), t.namespace = s.join(It), t.___ot = i;
  }
  t.___td = e;
  const n = t.___ot in Ut;
  return this.each((i, s) => {
    n && F(s[t.___ot]) && (s[`___i${t.type}`] = !0, s[t.___ot](), s[`___i${t.type}`] = !1), s.dispatchEvent(t);
  });
};
function ge(t) {
  return t[Kt] = t[Kt] || {};
}
function dn(t, e, n, i, s) {
  const r = ge(t);
  r[e] = r[e] || [], r[e].push([n, i, s]), t.addEventListener(e, s);
}
function ye(t, e) {
  return !e || !Bt.call(e, (n) => t.indexOf(n) < 0);
}
function ht(t, e, n, i, s) {
  const r = ge(t);
  if (e)
    r[e] && (r[e] = r[e].filter(([c, l, d]) => {
      if (s && d.guid !== s.guid || !ye(c, n) || i && i !== l)
        return !0;
      t.removeEventListener(e, d);
    }));
  else
    for (e in r)
      ht(t, e, n, i, s);
}
o.off = function(t, e, n) {
  if (S(t))
    this.each((i, s) => {
      !w(s) && !I(s) && !G(s) || ht(s);
    });
  else if ($(t))
    F(e) && (n = e, e = ""), k(Et(t), (i, s) => {
      const [r, c] = Zt(s), l = Ft(r);
      this.each((d, u) => {
        !w(u) && !I(u) && !G(u) || ht(u, l, c, e, n);
      });
    });
  else
    for (const i in t)
      this.off(i, t[i]);
  return this;
};
o.remove = function(t) {
  return H(this, t).detach().off(), this;
};
o.replaceWith = function(t) {
  return this.before(t).remove();
};
o.replaceAll = function(t) {
  return a(t).replaceWith(this), this;
};
function pn(t, e, n, i, s) {
  if (!$(t)) {
    for (const r in t)
      this.on(r, e, n, t[r], s);
    return this;
  }
  return $(e) || (S(e) || tt(e) ? e = "" : S(n) ? (n = e, e = "") : (i = n, n = e, e = "")), F(i) || (i = n, n = void 0), i ? (k(Et(t), (r, c) => {
    const [l, d] = Zt(c), u = Ft(l), p = l in pe, v = l in Ut;
    u && this.each((C, b) => {
      if (!w(b) && !I(b) && !G(b))
        return;
      const j = function(g) {
        if (g.target[`___i${g.type}`])
          return g.stopImmediatePropagation();
        if (g.namespace && !ye(d, g.namespace.split(It)) || !e && (v && (g.target !== b || g.___ot === u) || p && g.relatedTarget && b.contains(g.relatedTarget)))
          return;
        let Z = b;
        if (e) {
          let W = g.target;
          for (; !ae(W, e); )
            if (W === b || (W = W.parentNode, !W))
              return;
          Z = W;
        }
        Object.defineProperty(g, "currentTarget", {
          configurable: !0,
          get() {
            return Z;
          }
        }), Object.defineProperty(g, "delegateTarget", {
          configurable: !0,
          get() {
            return b;
          }
        }), Object.defineProperty(g, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const Se = i.call(Z, g, g.___td);
        s && ht(b, u, d, e, j), Se === !1 && (g.preventDefault(), g.stopPropagation());
      };
      j.guid = i.guid = i.guid || a.guid++, dn(b, u, d, e, j);
    });
  }), this) : this;
}
o.on = pn;
function gn(t, e, n, i) {
  return this.on(t, e, n, i, !0);
}
o.one = gn;
const yn = /\r?\n/g;
function mn(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(yn, `\r
`))}`;
}
const bn = /file|reset|submit|button|image/i, me = /radio|checkbox/i;
o.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    k(n.elements || [n], (i, s) => {
      if (s.disabled || !s.name || s.tagName === "FIELDSET" || bn.test(s.type) || me.test(s.type) && !s.checked)
        return;
      const r = ue(s);
      if (!S(r)) {
        const c = kt(r) ? r : [r];
        k(c, (l, d) => {
          t += mn(s.name, d);
        });
      }
    });
  }), t.slice(1);
};
const Cn = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12L10 8L6 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', wn = '<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-90, 10, 10)"><path d="M7 9L10 12L13 9" fill="currentColor"/><path d="M7 9L10 12L13 9H7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>', vn = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', be = {
  object: '<svg viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-object"><g transform="translate(0 1)"><path d="M2.296 5.166C2.296 7.238 3.78 8.162 5.166 8.162C6.538 8.162 8.022 7.238 8.022 5.166C8.022 3.094 6.538 2.156 5.166 2.156C3.78 2.156 2.296 3.094 2.296 5.166ZM0 5.18C0 2.03 2.366 0 5.166 0C7.952 0 10.318 2.03 10.318 5.18C10.318 8.316 7.952 10.346 5.166 10.346C2.366 10.346 0 8.316 0 5.18Z" fill="currentColor"/></g></svg>',
  array: '<svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-array"><path d="M7.728 9.926L6.902 7.658H2.87L2.044 9.926H0L3.808 0H6.048L9.828 9.926H7.728ZM4.886 2.142L3.514 5.894H6.258L4.886 2.142Z" fill="currentColor"/></svg>',
  string: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-string"><g transform="translate(0 1.5)"><path d="M7.39203 2.576L5.65603 3.108C5.55803 2.562 5.11003 1.708 3.85003 1.708C2.91203 1.708 2.29603 2.31 2.29603 2.968C2.29603 3.514 2.64603 3.948 3.37403 4.088L4.76003 4.354C6.56603 4.704 7.53203 5.88 7.53203 7.28C7.53203 8.806 6.25803 10.346 3.94803 10.346C1.31603 10.346 0.154031 8.652 3.05176e-05 7.238L1.79203 6.762C1.87603 7.742 2.56203 8.624 3.96203 8.624C4.99803 8.624 5.57203 8.106 5.57203 7.406C5.57203 6.832 5.13803 6.384 4.36803 6.23L2.98203 5.95C1.40003 5.628 0.378031 4.606 0.378031 3.108C0.378031 1.344 1.96003 0 3.83603 0C6.24403 0 7.16803 1.456 7.39203 2.576Z" fill="currentColor"/></g></svg>',
  number: '<svg viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-number"><g transform="translate(0 1)"><path d="M8.47003 9.926H6.44003L1.93203 2.884V9.926H3.05176e-05V0H2.40803L6.53803 6.566V0H8.47003V9.926Z" fill="currentColor"/></g></svg>',
  boolean: '<svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-boolean"><g transform="translate(0 .75)"><path d="M3.05176e-05 0H3.57003C5.50203 0 6.59403 1.134 6.59403 2.674C6.59403 3.696 5.97803 4.522 5.15203 4.802C6.11803 5.04 6.90203 5.922 6.90203 7.154C6.90203 8.764 5.69803 9.926 3.83603 9.926H3.05176e-05V0ZM1.90403 4.102H3.27603C4.15803 4.102 4.69003 3.612 4.69003 2.856C4.69003 2.1 4.20003 1.624 3.26203 1.624H1.90403V4.102ZM1.90403 8.316H3.47203C4.41003 8.316 4.97003 7.826 4.97003 7.028C4.97003 6.244 4.46603 5.698 3.50003 5.698H1.90403V8.316Z" fill="currentColor"/></g></svg>',
  null: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-null"><g transform="translate(0 1.5)"><path d="M3.808 10.15C1.694 10.15 0 8.848 0 6.412V0H1.932V6.272C1.932 7.574 2.66 8.26 3.808 8.26C4.984 8.26 5.698 7.574 5.698 6.272V0H7.63V6.412C7.63 8.848 5.936 10.15 3.808 10.15Z" fill="currentColor"/></g></svg>'
}, kn = [
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
var et, E, nt, dt, Ce, pt, we, gt, ve;
class xn {
  constructor(e, n, i) {
    m(this, dt);
    m(this, pt);
    m(this, gt);
    m(this, et, void 0);
    m(this, E, {
      node: void 0,
      type: void 0,
      dialog: void 0
    });
    m(this, nt, void 0);
    B(this, et, e), f(this, E).node = n, B(this, nt, String(f(this, E).node.data("type"))), f(this, E).type = f(this, E).node.find("& > .node__body > .type"), f(this, E).type.addClass("open"), f(this, E).dialog = h(this, dt, Ce).call(this, kn, f(this, nt), i), f(this, E).dialog.on("click", (s) => s.stopPropagation()), f(this, E).dialog.find("button").on("click", (s) => h(this, pt, we).call(this, s)), f(this, E).type.append(f(this, E).dialog), a(window).on("click.json-editor-context", (s) => this.close(s)), a(window).on("keyup.json-editor-context", (s) => h(this, gt, ve).call(this, s));
  }
  close() {
    f(this, E).type.removeClass("open"), f(this, E).dialog.remove(), a(window).off("click.json-editor-context"), a(window).off("keyup.json-editor-context"), delete f(this, et).context;
  }
}
et = new WeakMap(), E = new WeakMap(), nt = new WeakMap(), dt = new WeakSet(), Ce = function(e, n, i = !1) {
  function s(l, d) {
    let u = "";
    const { key: p, label: v, children: C } = l;
    if (i)
      switch (p) {
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
    let b = "", j = "", g = "";
    switch (p) {
      case "change-type":
        b = ' class="dropdown"', g = " disabled";
        break;
      case "insert":
        if (["string", "number", "boolean", "null"].indexOf(n) > -1)
          return "";
        b = ' class="dropdown"', g = " disabled";
        break;
      case "duplicate":
        b = ' class="duplicate"', g = ' data-mode="duplicate"';
        break;
      case "remove":
        b = ' class="remove"', g = ' data-mode="remove"';
        break;
      case "object":
      case "array":
      case "string":
      case "number":
      case "boolean":
      case "null":
        b = ' class="type"', j = `<i class="type-icon type-icon--${p}">${be[p]}</i>`, g = ` data-mode="${d}" data-type="${p}"`, d === "change-type" && p === n && (g = " disabled");
        break;
    }
    return u += `<li${b}>`, u += `<button type="button"${g}>`, u += j, u += `<em class="label">${v}</em>`, (p === "change-type" || p === "insert") && (u += `<span class="arrow">${Cn}</span>`), u += "</button>", (C == null ? void 0 : C.length) > 0 && (u += '<div class="children">', u += r(C, p), u += "</div>"), u += "</li>", u;
  }
  function r(l, d = void 0) {
    let u = "<ol>";
    for (let p in l)
      u += s(l[p], d);
    return u += "</ol>", u;
  }
  let c = `<nav class="context${i ? " is-root" : ""}">`;
  return c += r(e), c += "</nav>", a(c);
}, pt = new WeakSet(), we = function(e) {
  const n = a(e.currentTarget), i = n.data("mode");
  let s = String(n.data("type"));
  s = s === "undefined" ? "" : s, this.close(), this.selectItem && typeof this.selectItem == "function" && this.selectItem(f(this, E).node, i, s);
}, gt = new WeakSet(), ve = function(e) {
  e.code === "Escape" && this.close();
};
function Xt(t) {
  return t == null ? "null" : Array.isArray(t) ? "array" : typeof t == "string" ? "string" : typeof t == "number" ? "number" : typeof t == "boolean" ? "boolean" : "object";
}
function En(t) {
  try {
    return typeof t == "string" ? JSON.parse(t) : Array.isArray(t) ? Object.assign([], t) : a.isPlainObject(t) ? Object.assign({}, t) : {};
  } catch (e) {
    console.error("error", e.message);
  }
}
function Nn(t) {
  return Array.isArray(t) ? t.length : a.isPlainObject(t) ? Object.keys(t).length : 0;
}
function Qt(t) {
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
const $n = {
  live: !1,
  // live update
  theme: "system"
  // system,light,dark
}, Ln = {
  data: void 0,
  between: "after",
  open: !0,
  callback: void 0
}, x = {
  OBJECT: "object",
  ARRAY: "array",
  STRING: "string",
  NUMBER: "number",
  BOOLEAN: "boolean",
  NULL: "null"
}, K = {
  START: "pointerdown",
  MOVE: "pointermove",
  END: "pointerup.json-editor pointercancel.json-editor"
}, X = {
  START: "drag-over-start",
  END: "drag-over-end",
  ALL: "drag-over-start drag-over-end"
};
var N, y, P, yt, ke, it, Rt, J, ot, mt, xe, bt, Ee, q, at, Y, ct, st, Ot, L, _, rt, Mt, V, Q, z, ut, Ct, Ne, wt, $e, vt, Le;
class _n {
  constructor(e, n = {}) {
    m(this, yt);
    m(this, it);
    m(this, J);
    m(this, mt);
    m(this, bt);
    m(this, q);
    m(this, Y);
    m(this, st);
    m(this, L);
    m(this, rt);
    /**
     * NODE EVENTS
     */
    m(this, V);
    m(this, z);
    m(this, Ct);
    m(this, wt);
    m(this, vt);
    m(this, N, {
      wrap: null,
      tree: null
    });
    $t(this, "options");
    $t(this, "context");
    m(this, y, void 0);
    m(this, P, void 0);
    f(this, N).wrap = a(e), this.options = new Proxy(Object.assign({}, $n, n), {
      get: (i, s) => i[s],
      set: h(this, yt, ke).bind(this)
    }), h(this, it, Rt).call(this, this.options.theme);
  }
  /**
   * PUBLIC METHODS
   */
  /**
   * add node
   * @param {HTMLElement} $target
   * @param {object} options
   * @param {boolean} useUpdate
   */
  addNode(e, n, i = !0) {
    n = { ...Ln, ...n };
    const { data: s, between: r, open: c, callback: l } = n;
    e = a(e);
    const { key: d, value: u, type: p } = s, v = h(this, J, ot).call(this, p, !1);
    h(this, q, at).call(this, v, { ...s, open: c }), h(this, V, Q).call(this, v);
    const C = e.find("& > .node__children > ul");
    r === "before" ? C.prepend(v) : C.append(v), (p === "array" || p === "object") && l && typeof l == "function" && l(v.get(0), u), i && h(this, L, _).call(this);
  }
  /**
   * change type
   * @param {HTMLElement} node
   * @param {string} type
   * @param {boolean} useUpdate
   */
  changeType(e, n, i = !0) {
    const s = a(e), r = {
      key: s.find("& > .node__body .key").text(),
      value: h(this, st, Ot).call(this, s),
      type: n,
      open: s.hasClass("open")
    }, c = s.find("& > .node__children > .tree").html(), l = s.hasClass("root");
    s.empty(), s.html(h(this, J, ot).call(this, n, l).html()), c && s.find("& > .node__children > .tree").html(c), h(this, q, at).call(this, s, r), h(this, V, Q).call(this, s), s.attr("data-type", n), i && h(this, L, _).call(this);
  }
  /**
   * duplicate
   * @param {HTMLElement} $target
   * @param {boolean} useUpdate
   */
  duplicate(e, n = !0) {
    e = a(e);
    const i = a(e.get(0).outerHTML);
    h(this, V, Q).call(this, i), e.after(i), n && h(this, L, _).call(this);
  }
  removeNode(e, n = !0) {
    e.remove(), n && h(this, L, _).call(this);
  }
  fold(e, n) {
    e = a(e), n === void 0 ? e.toggleClass("open") : n === !0 ? e.addClass("open") : e.removeClass("open");
  }
  clear() {
    f(this, N).tree && (f(this, N).wrap.empty(), h(this, L, _).call(this));
  }
  destroy() {
  }
  /**
   * replace
   * @param {object|array} src
   * @param {boolean} useUpdate
   */
  replace(e, n = !0) {
    f(this, N).wrap.empty(), e = En(e);
    const i = h(this, mt, xe).call(this, e);
    this.import(i, e, !1), n && h(this, L, _).call(this);
  }
  /**
   * import data
   * @param {HTMLElement} target
   * @param {object|array} src
   * @param {boolean} useUpdate
   */
  import(e, n, i = !0) {
    a.each(n, (s, r) => {
      const c = Xt(r), l = { key: s, value: r, type: c };
      this.addNode(e, {
        data: l,
        open: !1,
        callback: (d, u) => this.import(d, u, !1)
      }, !1);
    }), i && h(this, L, _).call(this);
  }
  /**
   * export
   * @param {boolean} json
   * @param {number|boolean} space (number: space count, true: tab, false: 0)
   * @return {array|object}
   */
  export(e = !1, n = 2) {
    let i = h(this, rt, Mt).call(this);
    if (e) {
      let s = 2;
      return n === !0 ? s = "	" : typeof n == "number" && (s = n), JSON.stringify(i, null, s);
    } else
      return i;
  }
  /**
   * preview
   * @param {array|object} src
   */
  preview(e) {
  }
}
N = new WeakMap(), y = new WeakMap(), P = new WeakMap(), yt = new WeakSet(), ke = function(e, n, i) {
  switch (e[n] = i, n) {
    case "theme":
      h(this, it, Rt).call(this, i);
      break;
  }
  return !0;
}, it = new WeakSet(), Rt = function(e) {
  e = ["system", "light", "dark"].indexOf(e) > -1 ? e : "system", f(this, N).wrap.attr("data-theme", e);
}, J = new WeakSet(), ot = function(e, n = !1) {
  let i = `<li data-type="${e}" class="node${n ? " root" : ""}">`;
  return i += '<div class="node__body">', n || (i += `<div class="sort">${vn}</div>`), i += '<div class="type"><button type="button"></button></div>', (e === x.OBJECT || e === x.ARRAY) && (i += `<button type="button" class="fold">${wn}</button>`), n || (i += '<div class="key"></div>'), i += '<em class="count"></em>', n || (i += '<div class="value"></div>'), i += "</div>", i += '<div class="node__children"><ul class="tree"/></div>', i += "</li>", a(i);
}, mt = new WeakSet(), xe = function(e) {
  const n = Xt(e), i = h(this, J, ot).call(this, n, !0);
  return h(this, q, at).call(this, i, {
    key: void 0,
    value: e,
    type: n,
    open: !0
  }), h(this, V, Q).call(this, i), f(this, N).tree = a("<ul/>"), f(this, N).tree.append(i), f(this, N).wrap.append(f(this, N).tree), i;
}, bt = new WeakSet(), Ee = function(e, n, i) {
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
}, q = new WeakSet(), at = function(e, n) {
  const { key: i, value: s, type: r, open: c } = n, l = e.hasClass("root"), d = e.children(".node__body");
  if (d.find(".type > button").html(`<i class="type-icon type-icon--${r}">${be[r]}</i>`), (r === x.OBJECT || r === x.ARRAY) && this.fold(e, c), !l) {
    d.find(".key").html(`<div class="label-field" contenteditable="true" data-placeholder="empty">${i}</div>`);
    const u = d.find(".value");
    let p;
    switch (r) {
      case x.STRING:
        u.html(`<div contenteditable="true" data-placeholder="empty" class="label-field type-string">${String(s)}</div>`);
        break;
      case x.NUMBER:
        p = Number(s), isNaN(p) && (p = 0), u.html(`<input type="number" value="${p}" placeholder="0" class="label-field type-number"/>`);
        break;
      case x.BOOLEAN:
        p = s === "false" ? !1 : !!s, u.html(`<button type="button" data-value="${p}" class="label-switch type-boolean"><span><i>${p.toString().toUpperCase()}</i></span></button>`);
        break;
      case x.NULL:
        u.html('<em class="label-null type-null">NULL</em>');
        break;
    }
  }
  if (r === x.OBJECT || r === x.ARRAY) {
    const u = Nn(s);
    isNaN(u) || d.find(".count").text(u);
  }
}, Y = new WeakSet(), ct = function(e) {
  return String(e.data("type"));
}, st = new WeakSet(), Ot = function(e) {
  const n = h(this, Y, ct).call(this, e), i = e.find("& > .node__body > .value");
  switch (n) {
    case x.OBJECT:
    case x.ARRAY:
      return "";
    case x.STRING:
      return i.children(".type-string").text() || "";
    case x.NUMBER:
      return Number(i.children(".type-number").val());
    case x.BOOLEAN:
      return i.children(".type-boolean").data("value");
    case x.NULL:
      return null;
  }
}, L = new WeakSet(), _ = function() {
  this.options.live && this.preview && typeof this.preview == "function" && this.preview(h(this, rt, Mt).call(this));
}, rt = new WeakSet(), Mt = function() {
  const e = (s, r) => {
    let c = r === "array" ? [] : {};
    return s.find("& > .node__children > ul > li").each((d, u) => {
      if (!(r === "array" || r === "object"))
        return !0;
      u = a(u);
      const p = h(this, Y, ct).call(this, u);
      switch (p) {
        case "object":
        case "array":
          switch (r) {
            case "array":
              c.push(e(u, p));
              break;
            case "object":
              const C = u.find("& > .node__body > .key").text();
              C && (c[C] = e(u, p));
              break;
          }
          break;
        case "string":
        case "number":
        case "boolean":
        case "null":
          const v = h(this, st, Ot).call(this, u);
          switch (r) {
            case "array":
              c.push(v);
              break;
            case "object":
              const C = u.find("& > .node__body > .key").text();
              C && (c[C] = v);
              break;
          }
          break;
      }
    }), c;
  }, n = f(this, N).tree.children(".node"), i = h(this, Y, ct).call(this, n);
  return e(n, i);
}, V = new WeakSet(), Q = function(e) {
  const n = e.find(".sort");
  n.length && n.on(K.START, h(this, Ct, Ne).bind(this)), e.find(".type > button").on("click", async (l) => {
    const d = a(l.currentTarget);
    if (l.stopPropagation(), d.parent().hasClass("open"))
      this.context && this.context.close();
    else {
      this.context && this.context.close();
      const u = d.closest(".node").hasClass("root");
      this.context = new xn(this, d.closest(".node"), u), this.context.selectItem = (p, v, C) => h(this, bt, Ee).call(this, p, v, C);
    }
  }), e.find(".fold").on("click", (l) => {
    const u = a(l.currentTarget).closest(".node");
    this.fold(u);
  });
  const i = e.find(".key > .label-field");
  i.length && i.on("keydown", (l) => {
    if (l.keyCode === 13 || Qt(l))
      return l.preventDefault();
  }).on("input", (l) => h(this, z, ut).call(this, l));
  const s = e.find(".value > .type-string");
  s.length && s.on("keydown", (l) => {
    if (Qt(l))
      return l.preventDefault();
  }).on("input", (l) => h(this, z, ut).call(this, l));
  const r = e.find(".value > .type-number");
  r.length && r.on("input", (l) => h(this, z, ut).call(this, l));
  const c = e.find(".value > .type-boolean");
  c.length && c.on("click", (l) => {
    const d = a(l.currentTarget), u = !d.data("value");
    d.data("value", u).find("i").text(u.toString().toUpperCase()), h(this, L, _).call(this);
  });
}, z = new WeakSet(), ut = function(e) {
  f(this, P) && (clearInterval(f(this, P)), B(this, P, void 0)), B(this, P, setTimeout(() => h(this, L, _).call(this), 600));
}, Ct = new WeakSet(), Ne = function(e) {
  if (B(this, y, {}), f(this, y).$node = a(e.currentTarget).closest(".node"), f(this, y).$area = f(this, y).$node.parent(), f(this, y).$nodes = f(this, y).$area.children(".node"), f(this, y).$nodes.length < 2) {
    B(this, y, void 0);
    return;
  }
  f(this, y).$nodes.on(K.MOVE, h(this, wt, $e).bind(this)), a(window).on(K.END, h(this, vt, Le).bind(this));
}, wt = new WeakSet(), $e = function(e) {
  const n = a(e.currentTarget), i = n.children(".node__body");
  if (!(i.length > 0))
    return;
  const { y: s, height: r } = i.get(0).getBoundingClientRect(), c = r * 0.5 < e.y - s;
  if (f(this, y).activeNode || (f(this, N).wrap.addClass("dragging"), f(this, y).$area.addClass("drag-area"), f(this, y).$node.addClass("drag-select")), f(this, y).activeNode !== n.get(0))
    f(this, y).activeNode && a(f(this, y).activeNode).removeClass(X.ALL), f(this, y).activeNode = n.get(0);
  else if (f(this, y).half === c)
    return;
  f(this, y).half = c, n.removeClass(X.ALL).addClass(c ? X.END : X.START);
}, vt = new WeakSet(), Le = function(e) {
  f(this, N).wrap.removeClass("dragging"), f(this, y).$area.removeClass("drag-area"), f(this, y).$node.removeClass("drag-select"), f(this, y).$nodes.removeClass(X.ALL), f(this, y).$nodes.off(K.MOVE), a(window).off(K.END), B(this, y, void 0), h(this, L, _).call(this);
};
export {
  _n as default
};
