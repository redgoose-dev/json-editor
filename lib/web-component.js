var Ae = Object.defineProperty;
var Re = (t, e, n) => e in t ? Ae(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Nt = (t, e, n) => (Re(t, typeof e != "symbol" ? e + "" : e, n), n), St = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var u = (t, e, n) => (St(t, e, "read from private field"), n ? n.call(t) : e.get(t)), g = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, M = (t, e, n, o) => (St(t, e, "write to private field"), o ? o.call(t, n) : e.set(t, n), n);
var f = (t, e, n) => (St(t, e, "access private method"), n);
const A = document, dt = window, ee = A.documentElement, V = A.createElement.bind(A), ne = V("div"), $t = V("table"), Oe = V("tbody"), Wt = V("tr"), { isArray: kt, prototype: oe } = Array, { concat: ze, filter: Mt, indexOf: ie, map: re, push: Me, slice: se, some: Bt, splice: Be } = oe, He = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, De = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Pe = /<.+>/, Ie = /^\w+$/;
function Ht(t, e) {
  const n = Ve(e);
  return !t || !n && !I(e) && !x(e) ? [] : !n && De.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && Ie.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class Ct {
  constructor(e, n) {
    if (!e)
      return;
    if (At(e))
      return e;
    let o = e;
    if (E(e)) {
      const i = n || A;
      if (o = He.test(e) && I(i) ? i.getElementById(e.slice(1).replace(/\\/g, "")) : Pe.test(e) ? le(e) : At(i) ? i.find(e) : E(i) ? a(i).find(e) : Ht(e, i), !o)
        return;
    } else if (U(e))
      return this.ready(e);
    (o.nodeType || o === dt) && (o = [o]), this.length = o.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = o[i];
  }
  init(e, n) {
    return new Ct(e, n);
  }
}
const s = Ct.prototype, a = s.init;
a.fn = a.prototype = s;
s.length = 0;
s.splice = Be;
typeof Symbol == "function" && (s[Symbol.iterator] = oe[Symbol.iterator]);
function At(t) {
  return t instanceof Ct;
}
function G(t) {
  return !!t && t === t.window;
}
function I(t) {
  return !!t && t.nodeType === 9;
}
function Ve(t) {
  return !!t && t.nodeType === 11;
}
function x(t) {
  return !!t && t.nodeType === 1;
}
function Ue(t) {
  return !!t && t.nodeType === 3;
}
function Fe(t) {
  return typeof t == "boolean";
}
function U(t) {
  return typeof t == "function";
}
function E(t) {
  return typeof t == "string";
}
function S(t) {
  return t === void 0;
}
function tt(t) {
  return t === null;
}
function ae(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function Dt(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
a.isWindow = G;
a.isFunction = U;
a.isArray = kt;
a.isNumeric = ae;
a.isPlainObject = Dt;
function j(t, e, n) {
  if (n) {
    let o = t.length;
    for (; o--; )
      if (e.call(t[o], o, t[o]) === !1)
        return t;
  } else if (Dt(t)) {
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
a.each = j;
s.each = function(t) {
  return j(this, t);
};
s.empty = function() {
  return this.each((t, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function ut(...t) {
  const e = Fe(t[0]) ? t.shift() : !1, n = t.shift(), o = t.length;
  if (!n)
    return {};
  if (!o)
    return ut(e, a, n);
  for (let i = 0; i < o; i++) {
    const r = t[i];
    for (const c in r)
      e && (kt(r[c]) || Dt(r[c])) ? ((!n[c] || n[c].constructor !== r[c].constructor) && (n[c] = new r[c].constructor()), ut(e, n[c], r[c])) : n[c] = r[c];
  }
  return n;
}
a.extend = ut;
s.extend = function(t) {
  return ut(s, t);
};
const Ze = /\S+/g;
function _t(t) {
  return E(t) ? t.match(Ze) || [] : [];
}
s.toggleClass = function(t, e) {
  const n = _t(t), o = !S(e);
  return this.each((i, r) => {
    x(r) && j(n, (c, d) => {
      o ? e ? r.classList.add(d) : r.classList.remove(d) : r.classList.toggle(d);
    });
  });
};
s.addClass = function(t) {
  return this.toggleClass(t, !0);
};
s.removeAttr = function(t) {
  const e = _t(t);
  return this.each((n, o) => {
    x(o) && j(e, (i, r) => {
      o.removeAttribute(r);
    });
  });
};
function We(t, e) {
  if (t) {
    if (E(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !x(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return tt(n) ? void 0 : n;
      }
      return S(e) ? this : tt(e) ? this.removeAttr(t) : this.each((n, o) => {
        x(o) && o.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
s.attr = We;
s.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
s.hasClass = function(t) {
  return !!t && Bt.call(this, (e) => x(e) && e.classList.contains(t));
};
s.get = function(t) {
  return S(t) ? se.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
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
function Je(t) {
  return S(t) ? this.get().map((e) => x(e) || Ue(e) ? e.textContent : "").join("") : this.each((e, n) => {
    x(n) && (n.textContent = t);
  });
}
s.text = Je;
function R(t, e, n) {
  if (!x(t))
    return;
  const o = dt.getComputedStyle(t, null);
  return n ? o.getPropertyValue(e) || void 0 : o[e] || t.style[e];
}
function L(t, e) {
  return parseInt(R(t, e), 10) || 0;
}
function Jt(t, e) {
  return L(t, `border${e ? "Left" : "Top"}Width`) + L(t, `padding${e ? "Left" : "Top"}`) + L(t, `padding${e ? "Right" : "Bottom"}`) + L(t, `border${e ? "Right" : "Bottom"}Width`);
}
const Lt = {};
function qe(t) {
  if (Lt[t])
    return Lt[t];
  const e = V(t);
  A.body.insertBefore(e, null);
  const n = R(e, "display");
  return A.body.removeChild(e), Lt[t] = n !== "none" ? n : "block";
}
function qt(t) {
  return R(t, "display") === "none";
}
function ce(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function Et(t) {
  return E(t) ? (e, n) => ce(n, t) : U(t) ? t : At(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
s.filter = function(t) {
  const e = Et(t);
  return a(Mt.call(this, (n, o) => e.call(n, o, n)));
};
function B(t, e) {
  return e ? t.filter(e) : t;
}
s.detach = function(t) {
  return B(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const Ye = /^\s*<(\w+)[^>]*>/, Ge = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Yt = {
  "*": ne,
  tr: Oe,
  td: Wt,
  th: Wt,
  thead: $t,
  tbody: $t,
  tfoot: $t
};
function le(t) {
  if (!E(t))
    return [];
  if (Ge.test(t))
    return [V(RegExp.$1)];
  const e = Ye.test(t) && RegExp.$1, n = Yt[e] || Yt["*"];
  return n.innerHTML = t, a(n.childNodes).detach().get();
}
a.parseHTML = le;
s.has = function(t) {
  const e = E(t) ? (n, o) => Ht(t, o).length : (n, o) => o.contains(t);
  return this.filter(e);
};
s.not = function(t) {
  const e = Et(t);
  return this.filter((n, o) => (!E(t) || x(o)) && !e.call(o, n, o));
};
function O(t, e, n, o) {
  const i = [], r = U(e), c = o && Et(o);
  for (let d = 0, h = t.length; d < h; d++)
    if (r) {
      const l = e(t[d]);
      l.length && Me.apply(i, l);
    } else {
      let l = t[d][e];
      for (; l != null && !(o && c(-1, l)); )
        i.push(l), l = n ? l[e] : null;
    }
  return i;
}
function de(t) {
  return t.multiple && t.options ? O(Mt.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function Ke(t) {
  return arguments.length ? this.each((e, n) => {
    const o = n.multiple && n.options;
    if (o || me.test(n.type)) {
      const i = kt(t) ? re.call(t, String) : tt(t) ? [] : [String(t)];
      o ? j(n.options, (r, c) => {
        c.selected = i.indexOf(c.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = S(t) || tt(t) ? "" : t;
  }) : this[0] && de(this[0]);
}
s.val = Ke;
s.is = function(t) {
  const e = Et(t);
  return Bt.call(this, (n, o) => e.call(n, o, n));
};
a.guid = 1;
function T(t) {
  return t.length > 1 ? Mt.call(t, (e, n, o) => ie.call(o, e) === n) : t;
}
a.unique = T;
s.add = function(t, e) {
  return a(T(this.get().concat(a(t, e).get())));
};
s.children = function(t) {
  return B(a(T(O(this, (e) => e.children))), t);
};
s.parent = function(t) {
  return B(a(T(O(this, "parentNode"))), t);
};
s.index = function(t) {
  const e = t ? a(t)[0] : this[0], n = t ? this : a(e).parent().children();
  return ie.call(n, e);
};
s.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const n = this.parent();
  return n.length ? n.closest(t) : e;
};
s.siblings = function(t) {
  return B(a(T(O(this, (e) => a(e).parent().children().not(e)))), t);
};
s.find = function(t) {
  return a(T(O(this, (e) => Ht(t, e))));
};
const Xe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Qe = /^$|^module$|\/(java|ecma)script/i, tn = ["type", "src", "nonce", "noModule"];
function en(t, e) {
  const n = a(t);
  n.filter("script").add(n.find("script")).each((o, i) => {
    if (Qe.test(i.type) && ee.contains(i)) {
      const r = V("script");
      r.text = i.textContent.replace(Xe, ""), j(tn, (c, d) => {
        i[d] && (r[d] = i[d]);
      }), e.head.insertBefore(r, null), e.head.removeChild(r);
    }
  });
}
function nn(t, e, n, o, i) {
  o ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), i && en(e, t.ownerDocument);
}
function H(t, e, n, o, i, r, c, d) {
  return j(t, (h, l) => {
    j(a(l), (p, w) => {
      j(a(e), (v, m) => {
        const z = n ? w : m, b = n ? m : w, F = n ? p : v;
        nn(z, F ? b.cloneNode(!0) : b, o, i, !F);
      }, d);
    }, c);
  }, r), e;
}
s.after = function() {
  return H(arguments, this, !1, !1, !1, !0, !0);
};
s.append = function() {
  return H(arguments, this, !1, !1, !0);
};
function on(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (S(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, o) => {
    x(o) && (e ? a(o).empty().append(t) : o.innerHTML = t);
  });
}
s.html = on;
s.appendTo = function(t) {
  return H(arguments, this, !0, !1, !0);
};
s.wrapInner = function(t) {
  return this.each((e, n) => {
    const o = a(n), i = o.contents();
    i.length ? i.wrapAll(t) : o.append(t);
  });
};
s.before = function() {
  return H(arguments, this, !1, !0);
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
  return H(arguments, this, !0, !1, !1, !1, !1, !0);
};
s.insertBefore = function(t) {
  return H(arguments, this, !0, !0);
};
s.prepend = function() {
  return H(arguments, this, !1, !0, !0, !0, !0);
};
s.prependTo = function(t) {
  return H(arguments, this, !0, !0, !0, !1, !1, !0);
};
s.contents = function() {
  return a(T(O(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
s.next = function(t, e, n) {
  return B(a(T(O(this, "nextElementSibling", e, n))), t);
};
s.nextAll = function(t) {
  return this.next(t, !0);
};
s.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
s.parents = function(t, e) {
  return B(a(T(O(this, "parentElement", !0, e))), t);
};
s.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
s.prev = function(t, e, n) {
  return B(a(T(O(this, "previousElementSibling", e, n))), t);
};
s.prevAll = function(t) {
  return this.prev(t, !0);
};
s.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
s.map = function(t) {
  return a(ze.apply([], re.call(this, (e, n) => t.call(e, n, e))));
};
s.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
s.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && R(n, "position") === "static"; )
      n = n.offsetParent;
    return n || ee;
  });
};
s.slice = function(t, e) {
  return a(se.call(this, t, e));
};
const rn = /-([a-z])/g;
function Pt(t) {
  return t.replace(rn, (e, n) => n.toUpperCase());
}
s.ready = function(t) {
  const e = () => setTimeout(t, 0, a);
  return A.readyState !== "loading" ? e() : A.addEventListener("DOMContentLoaded", e), this;
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
    top: e.top + dt.pageYOffset,
    left: e.left + dt.pageXOffset
  };
};
s.position = function() {
  const t = this[0];
  if (!t)
    return;
  const e = R(t, "position") === "fixed", n = e ? t.getBoundingClientRect() : this.offset();
  if (!e) {
    const o = t.ownerDocument;
    let i = t.offsetParent || o.documentElement;
    for (; (i === o.body || i === o.documentElement) && R(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== t && x(i)) {
      const r = a(i).offset();
      n.top -= r.top + L(i, "borderTopWidth"), n.left -= r.left + L(i, "borderLeftWidth");
    }
  }
  return {
    top: n.top - L(t, "marginTop"),
    left: n.left - L(t, "marginLeft")
  };
};
const ue = {
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
    if (E(t))
      return t = ue[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, o) => {
        o[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
s.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[ue[t] || t];
  });
};
const sn = /^--/;
function It(t) {
  return sn.test(t);
}
const Tt = {}, { style: an } = ne, cn = ["webkit", "moz", "ms"];
function ln(t, e = It(t)) {
  if (e)
    return t;
  if (!Tt[t]) {
    const n = Pt(t), o = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${cn.join(`${o} `)}${o}`.split(" ");
    j(i, (r, c) => {
      if (c in an)
        return Tt[t] = c, !1;
    });
  }
  return Tt[t];
}
const dn = {
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
function fe(t, e, n = It(t)) {
  return !n && !dn[t] && ae(e) ? `${e}px` : e;
}
function un(t, e) {
  if (E(t)) {
    const n = It(t);
    return t = ln(t, n), arguments.length < 2 ? this[0] && R(this[0], t, n) : t ? (e = fe(t, e, n), this.each((o, i) => {
      x(i) && (n ? i.style.setProperty(t, e) : i.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
s.css = un;
function he(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const fn = /^\s+|\s+$/;
function Gt(t, e) {
  const n = t.dataset[e] || t.dataset[Pt(e)];
  return fn.test(n) ? n : he(JSON.parse, n);
}
function hn(t, e, n) {
  n = he(JSON.stringify, n), t.dataset[Pt(e)] = n;
}
function pn(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const o in this[0].dataset)
      n[o] = Gt(this[0], o);
    return n;
  }
  if (E(t))
    return arguments.length < 2 ? this[0] && Gt(this[0], t) : S(e) ? this : this.each((n, o) => {
      hn(o, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
s.data = pn;
function pe(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
j([!0, !1], (t, e) => {
  j(["Width", "Height"], (n, o) => {
    const i = `${e ? "outer" : "inner"}${o}`;
    s[i] = function(r) {
      if (this[0])
        return G(this[0]) ? e ? this[0][`inner${o}`] : this[0].document.documentElement[`client${o}`] : I(this[0]) ? pe(this[0], o) : this[0][`${e ? "offset" : "client"}${o}`] + (r && e ? L(this[0], `margin${n ? "Top" : "Left"}`) + L(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
j(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  s[n] = function(o) {
    if (!this[0])
      return S(o) ? void 0 : this;
    if (!arguments.length)
      return G(this[0]) ? this[0].document.documentElement[`client${e}`] : I(this[0]) ? pe(this[0], e) : this[0].getBoundingClientRect()[n] - Jt(this[0], !t);
    const i = parseInt(o, 10);
    return this.each((r, c) => {
      if (!x(c))
        return;
      const d = R(c, "boxSizing");
      c.style[n] = fe(n, i + (d === "border-box" ? Jt(c, !t) : 0));
    });
  };
});
const Kt = "___cd";
s.toggle = function(t) {
  return this.each((e, n) => {
    if (!x(n))
      return;
    const o = qt(n);
    (S(t) ? o : t) ? (n.style.display = n[Kt] || "", qt(n) && (n.style.display = qe(n.tagName))) : o || (n[Kt] = R(n, "display"), n.style.display = "none");
  });
};
s.hide = function() {
  return this.toggle(!1);
};
s.show = function() {
  return this.toggle(!0);
};
const Xt = "___ce", Vt = ".", Ut = { focus: "focusin", blur: "focusout" }, be = { mouseenter: "mouseover", mouseleave: "mouseout" }, bn = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Ft(t) {
  return be[t] || Ut[t] || t;
}
function Zt(t) {
  const e = t.split(Vt);
  return [e[0], e.slice(1).sort()];
}
s.trigger = function(t, e) {
  if (E(t)) {
    const [o, i] = Zt(t), r = Ft(o);
    if (!r)
      return this;
    const c = bn.test(r) ? "MouseEvents" : "HTMLEvents";
    t = A.createEvent(c), t.initEvent(r, !0, !0), t.namespace = i.join(Vt), t.___ot = o;
  }
  t.___td = e;
  const n = t.___ot in Ut;
  return this.each((o, i) => {
    n && U(i[t.___ot]) && (i[`___i${t.type}`] = !0, i[t.___ot](), i[`___i${t.type}`] = !1), i.dispatchEvent(t);
  });
};
function ge(t) {
  return t[Xt] = t[Xt] || {};
}
function gn(t, e, n, o, i) {
  const r = ge(t);
  r[e] = r[e] || [], r[e].push([n, o, i]), t.addEventListener(e, i);
}
function ye(t, e) {
  return !e || !Bt.call(e, (n) => t.indexOf(n) < 0);
}
function ft(t, e, n, o, i) {
  const r = ge(t);
  if (e)
    r[e] && (r[e] = r[e].filter(([c, d, h]) => {
      if (i && h.guid !== i.guid || !ye(c, n) || o && o !== d)
        return !0;
      t.removeEventListener(e, h);
    }));
  else
    for (e in r)
      ft(t, e, n, o, i);
}
s.off = function(t, e, n) {
  if (S(t))
    this.each((o, i) => {
      !x(i) && !I(i) && !G(i) || ft(i);
    });
  else if (E(t))
    U(e) && (n = e, e = ""), j(_t(t), (o, i) => {
      const [r, c] = Zt(i), d = Ft(r);
      this.each((h, l) => {
        !x(l) && !I(l) && !G(l) || ft(l, d, c, e, n);
      });
    });
  else
    for (const o in t)
      this.off(o, t[o]);
  return this;
};
s.remove = function(t) {
  return B(this, t).detach().off(), this;
};
s.replaceWith = function(t) {
  return this.before(t).remove();
};
s.replaceAll = function(t) {
  return a(t).replaceWith(this), this;
};
function yn(t, e, n, o, i) {
  if (!E(t)) {
    for (const r in t)
      this.on(r, e, n, t[r], i);
    return this;
  }
  return E(e) || (S(e) || tt(e) ? e = "" : S(n) ? (n = e, e = "") : (o = n, n = e, e = "")), U(o) || (o = n, n = void 0), o ? (j(_t(t), (r, c) => {
    const [d, h] = Zt(c), l = Ft(d), p = d in be, w = d in Ut;
    l && this.each((v, m) => {
      if (!x(m) && !I(m) && !G(m))
        return;
      const z = function(b) {
        if (b.target[`___i${b.type}`])
          return b.stopImmediatePropagation();
        if (b.namespace && !ye(h, b.namespace.split(Vt)) || !e && (w && (b.target !== m || b.___ot === l) || p && b.relatedTarget && m.contains(b.relatedTarget)))
          return;
        let F = m;
        if (e) {
          let Z = b.target;
          for (; !ce(Z, e); )
            if (Z === m || (Z = Z.parentNode, !Z))
              return;
          F = Z;
        }
        Object.defineProperty(b, "currentTarget", {
          configurable: !0,
          get() {
            return F;
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
        const Te = o.call(F, b, b.___td);
        i && ft(m, l, h, e, z), Te === !1 && (b.preventDefault(), b.stopPropagation());
      };
      z.guid = o.guid = o.guid || a.guid++, gn(m, l, h, e, z);
    });
  }), this) : this;
}
s.on = yn;
function mn(t, e, n, o) {
  return this.on(t, e, n, o, !0);
}
s.one = mn;
const vn = /\r?\n/g;
function xn(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(vn, `\r
`))}`;
}
const wn = /file|reset|submit|button|image/i, me = /radio|checkbox/i;
s.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    j(n.elements || [n], (o, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || wn.test(i.type) || me.test(i.type) && !i.checked)
        return;
      const r = de(i);
      if (!S(r)) {
        const c = kt(r) ? r : [r];
        j(c, (d, h) => {
          t += xn(i.name, h);
        });
      }
    });
  }), t.slice(1);
};
function Qt(t) {
  return t == null ? "null" : Array.isArray(t) ? "array" : typeof t == "string" ? "string" : typeof t == "number" ? "number" : typeof t == "boolean" ? "boolean" : "object";
}
function ve(t) {
  try {
    return typeof t == "string" ? JSON.parse(t) : Array.isArray(t) ? Object.assign([], t) : a.isPlainObject(t) ? Object.assign({}, t) : {};
  } catch (e) {
    console.error("error", e.message);
  }
}
function jn(t) {
  return Array.isArray(t) ? t.length : a.isPlainObject(t) ? Object.keys(t).length : 0;
}
function te(t) {
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
const kn = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12L10 8L6 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', Cn = '<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-90, 10, 10)"><path d="M7 9L10 12L13 9" fill="currentColor"/><path d="M7 9L10 12L13 9H7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>', _n = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', xe = {
  object: '<svg viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-object"><g transform="translate(0 1)"><path d="M2.296 5.166C2.296 7.238 3.78 8.162 5.166 8.162C6.538 8.162 8.022 7.238 8.022 5.166C8.022 3.094 6.538 2.156 5.166 2.156C3.78 2.156 2.296 3.094 2.296 5.166ZM0 5.18C0 2.03 2.366 0 5.166 0C7.952 0 10.318 2.03 10.318 5.18C10.318 8.316 7.952 10.346 5.166 10.346C2.366 10.346 0 8.316 0 5.18Z" fill="currentColor"/></g></svg>',
  array: '<svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-array"><path d="M7.728 9.926L6.902 7.658H2.87L2.044 9.926H0L3.808 0H6.048L9.828 9.926H7.728ZM4.886 2.142L3.514 5.894H6.258L4.886 2.142Z" fill="currentColor"/></svg>',
  string: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-string"><g transform="translate(0 1.5)"><path d="M7.39203 2.576L5.65603 3.108C5.55803 2.562 5.11003 1.708 3.85003 1.708C2.91203 1.708 2.29603 2.31 2.29603 2.968C2.29603 3.514 2.64603 3.948 3.37403 4.088L4.76003 4.354C6.56603 4.704 7.53203 5.88 7.53203 7.28C7.53203 8.806 6.25803 10.346 3.94803 10.346C1.31603 10.346 0.154031 8.652 3.05176e-05 7.238L1.79203 6.762C1.87603 7.742 2.56203 8.624 3.96203 8.624C4.99803 8.624 5.57203 8.106 5.57203 7.406C5.57203 6.832 5.13803 6.384 4.36803 6.23L2.98203 5.95C1.40003 5.628 0.378031 4.606 0.378031 3.108C0.378031 1.344 1.96003 0 3.83603 0C6.24403 0 7.16803 1.456 7.39203 2.576Z" fill="currentColor"/></g></svg>',
  number: '<svg viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-number"><g transform="translate(0 1)"><path d="M8.47003 9.926H6.44003L1.93203 2.884V9.926H3.05176e-05V0H2.40803L6.53803 6.566V0H8.47003V9.926Z" fill="currentColor"/></g></svg>',
  boolean: '<svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-boolean"><g transform="translate(0 .75)"><path d="M3.05176e-05 0H3.57003C5.50203 0 6.59403 1.134 6.59403 2.674C6.59403 3.696 5.97803 4.522 5.15203 4.802C6.11803 5.04 6.90203 5.922 6.90203 7.154C6.90203 8.764 5.69803 9.926 3.83603 9.926H3.05176e-05V0ZM1.90403 4.102H3.27603C4.15803 4.102 4.69003 3.612 4.69003 2.856C4.69003 2.1 4.20003 1.624 3.26203 1.624H1.90403V4.102ZM1.90403 8.316H3.47203C4.41003 8.316 4.97003 7.826 4.97003 7.028C4.97003 6.244 4.46603 5.698 3.50003 5.698H1.90403V8.316Z" fill="currentColor"/></g></svg>',
  null: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-null"><g transform="translate(0 1.5)"><path d="M3.808 10.15C1.694 10.15 0 8.848 0 6.412V0H1.932V6.272C1.932 7.574 2.66 8.26 3.808 8.26C4.984 8.26 5.698 7.574 5.698 6.272V0H7.63V6.412C7.63 8.848 5.936 10.15 3.808 10.15Z" fill="currentColor"/></g></svg>'
}, En = [
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
var et, C, nt, ht, we, pt, je, bt, ke;
class Nn {
  constructor(e, n, o) {
    g(this, ht);
    g(this, pt);
    g(this, bt);
    g(this, et, void 0);
    g(this, C, {
      node: void 0,
      type: void 0,
      dialog: void 0
    });
    g(this, nt, void 0);
    M(this, et, e), u(this, C).node = n, M(this, nt, String(u(this, C).node.data("type"))), u(this, C).type = u(this, C).node.find("& > .node__body > .type"), u(this, C).type.addClass("open"), u(this, C).dialog = f(this, ht, we).call(this, En, u(this, nt), o), u(this, C).dialog.on("click", (i) => i.stopPropagation()), u(this, C).dialog.find("button").on("click", (i) => f(this, pt, je).call(this, i)), u(this, C).type.append(u(this, C).dialog), a(window).on("click.json-editor-context", (i) => this.close(i)), a(window).on("keyup.json-editor-context", (i) => f(this, bt, ke).call(this, i));
  }
  close() {
    u(this, C).type.removeClass("open"), u(this, C).dialog.remove(), a(window).off("click.json-editor-context"), a(window).off("keyup.json-editor-context"), delete u(this, et).context;
  }
}
et = new WeakMap(), C = new WeakMap(), nt = new WeakMap(), ht = new WeakSet(), we = function(e, n, o = !1) {
  function i(d, h) {
    let l = "";
    const { key: p, label: w, children: v } = d;
    if (o)
      switch (p) {
        case "string":
        case "number":
        case "boolean":
        case "null":
          if (h === "change-type")
            return "";
          break;
        case "duplicate":
        case "remove":
          return "";
      }
    let m = "", z = "", b = "";
    switch (p) {
      case "change-type":
        m = ' class="dropdown"', b = " disabled";
        break;
      case "insert":
        if (["string", "number", "boolean", "null"].indexOf(n) > -1)
          return "";
        m = ' class="dropdown"', b = " disabled";
        break;
      case "duplicate":
        m = ' class="duplicate"', b = ' data-mode="duplicate"';
        break;
      case "remove":
        m = ' class="remove"', b = ' data-mode="remove"';
        break;
      case "object":
      case "array":
      case "string":
      case "number":
      case "boolean":
      case "null":
        m = ' class="type"', z = `<i class="type-icon type-icon--${p}">${xe[p]}</i>`, b = ` data-mode="${h}" data-type="${p}"`, h === "change-type" && p === n && (b = " disabled");
        break;
    }
    return l += `<li${m}>`, l += `<button type="button"${b}>`, l += z, l += `<em class="label">${w}</em>`, (p === "change-type" || p === "insert") && (l += `<span class="arrow">${kn}</span>`), l += "</button>", (v == null ? void 0 : v.length) > 0 && (l += '<div class="children">', l += r(v, p), l += "</div>"), l += "</li>", l;
  }
  function r(d, h = void 0) {
    let l = "<ol>";
    for (let p in d)
      l += i(d[p], h);
    return l += "</ol>", l;
  }
  let c = `<nav class="context${o ? " is-root" : ""}">`;
  return c += r(e), c += "</nav>", a(c);
}, pt = new WeakSet(), je = function(e) {
  const n = a(e.currentTarget), o = n.data("mode");
  let i = String(n.data("type"));
  i = i === "undefined" ? "" : i, this.close(), this.selectItem && typeof this.selectItem == "function" && this.selectItem(u(this, C).node, o, i);
}, bt = new WeakSet(), ke = function(e) {
  e.code === "Escape" && this.close();
};
const Sn = {
  live: !1,
  // live update
  theme: "system"
  // system,light,dark
}, $n = {
  data: void 0,
  between: "after",
  open: !0,
  callback: void 0
}, k = {
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
var _, y, D, gt, Ce, ot, Rt, W, st, yt, _e, mt, Ee, J, at, q, ct, it, Ot, N, $, rt, zt, P, Q, Y, lt, vt, Ne, xt, Se, wt, $e;
class Ln {
  constructor(e, n = {}) {
    g(this, gt);
    g(this, ot);
    g(this, W);
    g(this, yt);
    g(this, mt);
    g(this, J);
    g(this, q);
    g(this, it);
    g(this, N);
    g(this, rt);
    /**
     * NODE EVENTS
     */
    g(this, P);
    g(this, Y);
    g(this, vt);
    g(this, xt);
    g(this, wt);
    g(this, _, {
      wrap: null,
      tree: null
    });
    Nt(this, "options");
    Nt(this, "context");
    g(this, y, void 0);
    g(this, D, void 0);
    u(this, _).wrap = a(e), this.options = new Proxy(Object.assign({}, Sn, n), {
      get: (o, i) => o[i],
      set: f(this, gt, Ce).bind(this)
    }), f(this, ot, Rt).call(this, this.options.theme);
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
  addNode(e, n, o = !0) {
    n = { ...$n, ...n };
    const { data: i, between: r, open: c, callback: d } = n;
    e = a(e);
    const { key: h, value: l, type: p } = i, w = f(this, W, st).call(this, p, !1);
    f(this, J, at).call(this, w, { ...i, open: c }), f(this, P, Q).call(this, w);
    const v = e.find("& > .node__children > ul");
    r === "before" ? v.prepend(w) : v.append(w), (p === "array" || p === "object") && d && typeof d == "function" && d(w.get(0), l), o && f(this, N, $).call(this);
  }
  /**
   * change type
   * @param {HTMLElement} node
   * @param {string} type
   * @param {boolean} useUpdate
   */
  changeType(e, n, o = !0) {
    const i = a(e), r = {
      key: i.find("& > .node__body .key").text(),
      value: f(this, it, Ot).call(this, i),
      type: n,
      open: i.hasClass("open")
    }, c = i.find("& > .node__children > .tree").html(), d = i.hasClass("root");
    i.empty(), i.html(f(this, W, st).call(this, n, d).html()), c && i.find("& > .node__children > .tree").html(c), f(this, J, at).call(this, i, r), f(this, P, Q).call(this, i), i.attr("data-type", n), o && f(this, N, $).call(this);
  }
  /**
   * duplicate
   * @param {HTMLElement} $target
   * @param {boolean} useUpdate
   */
  duplicate(e, n = !0) {
    e = a(e);
    const o = a(e.get(0).outerHTML);
    f(this, P, Q).call(this, o), e.after(o), n && f(this, N, $).call(this);
  }
  removeNode(e, n = !0) {
    e.remove(), n && f(this, N, $).call(this);
  }
  fold(e, n) {
    e = a(e), n === void 0 ? e.toggleClass("open") : n === !0 ? e.addClass("open") : e.removeClass("open");
  }
  clear() {
    u(this, _).tree && (u(this, _).wrap.empty(), f(this, N, $).call(this));
  }
  destroy() {
  }
  /**
   * replace
   * @param {object|array} src
   * @param {boolean} useUpdate
   */
  replace(e, n = !0) {
    u(this, _).wrap.empty(), e = ve(e);
    const o = f(this, yt, _e).call(this, e);
    this.import(o, e, !1), n && f(this, N, $).call(this);
  }
  /**
   * import data
   * @param {HTMLElement} target
   * @param {object|array} src
   * @param {boolean} useUpdate
   */
  import(e, n, o = !0) {
    a.each(n, (i, r) => {
      const c = Qt(r), d = { key: i, value: r, type: c };
      this.addNode(e, {
        data: d,
        open: !1,
        callback: (h, l) => this.import(h, l, !1)
      }, !1);
    }), o && f(this, N, $).call(this);
  }
  /**
   * export
   * @param {boolean} json
   * @param {number|boolean} space (number: space count, true: tab, false: 0)
   * @return {array|object}
   */
  export(e = !1, n = 2) {
    let o = f(this, rt, zt).call(this);
    if (e) {
      let i = 2;
      return n === !0 ? i = "	" : typeof n == "number" && (i = n), JSON.stringify(o, null, i);
    } else
      return o;
  }
  /**
   * preview
   * @param {array|object} src
   */
  preview(e) {
  }
}
_ = new WeakMap(), y = new WeakMap(), D = new WeakMap(), gt = new WeakSet(), Ce = function(e, n, o) {
  switch (e[n] = o, n) {
    case "theme":
      f(this, ot, Rt).call(this, o);
      break;
  }
  return !0;
}, ot = new WeakSet(), Rt = function(e) {
  e = ["system", "light", "dark"].indexOf(e) > -1 ? e : "system", u(this, _).wrap.attr("data-theme", e);
}, W = new WeakSet(), st = function(e, n = !1) {
  let o = `<li data-type="${e}" class="node${n ? " root" : ""}">`;
  return o += '<div class="node__body">', n || (o += `<div class="sort">${_n}</div>`), o += '<div class="type"><button type="button"></button></div>', (e === k.OBJECT || e === k.ARRAY) && (o += `<button type="button" class="fold">${Cn}</button>`), n || (o += '<div class="key"></div>'), o += '<em class="count"></em>', n || (o += '<div class="value"></div>'), o += "</div>", o += '<div class="node__children"><ul class="tree"/></div>', o += "</li>", a(o);
}, yt = new WeakSet(), _e = function(e) {
  const n = Qt(e), o = f(this, W, st).call(this, n, !0);
  return f(this, J, at).call(this, o, {
    key: void 0,
    value: e,
    type: n,
    open: !0
  }), f(this, P, Q).call(this, o), u(this, _).tree = a("<ul/>"), u(this, _).tree.append(o), u(this, _).wrap.append(u(this, _).tree), o;
}, mt = new WeakSet(), Ee = function(e, n, o) {
  switch (n) {
    case "change-type":
      this.changeType(e, o);
      break;
    case "insert":
      this.fold(e, !0), this.addNode(e, {
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
}, J = new WeakSet(), at = function(e, n) {
  const { key: o, value: i, type: r, open: c } = n, d = e.hasClass("root"), h = e.children(".node__body");
  if (h.find(".type > button").html(`<i class="type-icon type-icon--${r}">${xe[r]}</i>`), (r === k.OBJECT || r === k.ARRAY) && this.fold(e, c), !d) {
    h.find(".key").html(`<div class="label-field" contenteditable="true" data-placeholder="empty">${o}</div>`);
    const l = h.find(".value");
    let p;
    switch (r) {
      case k.STRING:
        l.html(`<div contenteditable="true" data-placeholder="empty" class="label-field type-string">${String(i)}</div>`);
        break;
      case k.NUMBER:
        p = Number(i), isNaN(p) && (p = 0), l.html(`<input type="number" value="${p}" placeholder="0" class="label-field type-number"/>`);
        break;
      case k.BOOLEAN:
        p = i === "false" ? !1 : !!i, l.html(`<button type="button" data-value="${p}" class="label-switch type-boolean"><span><i>${p.toString().toUpperCase()}</i></span></button>`);
        break;
      case k.NULL:
        l.html('<em class="label-null type-null">NULL</em>');
        break;
    }
  }
  if (r === k.OBJECT || r === k.ARRAY) {
    const l = jn(i);
    isNaN(l) || h.find(".count").text(l);
  }
}, q = new WeakSet(), ct = function(e) {
  return String(e.data("type"));
}, it = new WeakSet(), Ot = function(e) {
  const n = f(this, q, ct).call(this, e), o = e.find("& > .node__body > .value");
  switch (n) {
    case k.OBJECT:
    case k.ARRAY:
      return "";
    case k.STRING:
      return o.children(".type-string").text() || "";
    case k.NUMBER:
      return Number(o.children(".type-number").val());
    case k.BOOLEAN:
      return o.children(".type-boolean").data("value");
    case k.NULL:
      return null;
  }
}, N = new WeakSet(), $ = function() {
  this.options.live && this.preview && typeof this.preview == "function" && this.preview(f(this, rt, zt).call(this));
}, rt = new WeakSet(), zt = function() {
  const e = (i, r) => {
    let c = r === "array" ? [] : {};
    return i.find("& > .node__children > ul > li").each((h, l) => {
      if (!(r === "array" || r === "object"))
        return !0;
      l = a(l);
      const p = f(this, q, ct).call(this, l);
      switch (p) {
        case "object":
        case "array":
          switch (r) {
            case "array":
              c.push(e(l, p));
              break;
            case "object":
              const v = l.find("& > .node__body > .key").text();
              v && (c[v] = e(l, p));
              break;
          }
          break;
        case "string":
        case "number":
        case "boolean":
        case "null":
          const w = f(this, it, Ot).call(this, l);
          switch (r) {
            case "array":
              c.push(w);
              break;
            case "object":
              const v = l.find("& > .node__body > .key").text();
              v && (c[v] = w);
              break;
          }
          break;
      }
    }), c;
  }, n = u(this, _).tree.children(".node"), o = f(this, q, ct).call(this, n);
  return e(n, o);
}, P = new WeakSet(), Q = function(e) {
  const n = e.find(".sort");
  n.length && n.on(K.START, f(this, vt, Ne).bind(this)), e.find(".type > button").on("click", async (d) => {
    const h = a(d.currentTarget);
    if (d.stopPropagation(), h.parent().hasClass("open"))
      this.context && this.context.close();
    else {
      this.context && this.context.close();
      const l = h.closest(".node").hasClass("root");
      this.context = new Nn(this, h.closest(".node"), l), this.context.selectItem = (p, w, v) => f(this, mt, Ee).call(this, p, w, v);
    }
  }), e.find(".fold").on("click", (d) => {
    const l = a(d.currentTarget).closest(".node");
    this.fold(l);
  });
  const o = e.find(".key > .label-field");
  o.length && o.on("keydown", (d) => {
    if (d.keyCode === 13 || te(d))
      return d.preventDefault();
  }).on("input", (d) => f(this, Y, lt).call(this, d));
  const i = e.find(".value > .type-string");
  i.length && i.on("keydown", (d) => {
    if (te(d))
      return d.preventDefault();
  }).on("input", (d) => f(this, Y, lt).call(this, d));
  const r = e.find(".value > .type-number");
  r.length && r.on("input", (d) => f(this, Y, lt).call(this, d));
  const c = e.find(".value > .type-boolean");
  c.length && c.on("click", (d) => {
    const h = a(d.currentTarget), l = !h.data("value");
    h.data("value", l).find("i").text(l.toString().toUpperCase()), f(this, N, $).call(this);
  });
}, Y = new WeakSet(), lt = function(e) {
  u(this, D) && (clearInterval(u(this, D)), M(this, D, void 0)), M(this, D, setTimeout(() => f(this, N, $).call(this), 600));
}, vt = new WeakSet(), Ne = function(e) {
  if (M(this, y, {}), u(this, y).$node = a(e.currentTarget).closest(".node"), u(this, y).$area = u(this, y).$node.parent(), u(this, y).$nodes = u(this, y).$area.children(".node"), u(this, y).$nodes.length < 2) {
    M(this, y, void 0);
    return;
  }
  u(this, y).$nodes.on(K.MOVE, f(this, xt, Se).bind(this)), a(window).on(K.END, f(this, wt, $e).bind(this));
}, xt = new WeakSet(), Se = function(e) {
  const n = a(e.currentTarget), o = n.children(".node__body");
  if (!(o.length > 0))
    return;
  const { y: i, height: r } = o.get(0).getBoundingClientRect(), c = r * 0.5 < e.y - i;
  if (u(this, y).activeNode || (u(this, _).wrap.addClass("dragging"), u(this, y).$area.addClass("drag-area"), u(this, y).$node.addClass("drag-select")), u(this, y).activeNode !== n.get(0))
    u(this, y).activeNode && a(u(this, y).activeNode).removeClass(X.ALL), u(this, y).activeNode = n.get(0);
  else if (u(this, y).half === c)
    return;
  u(this, y).half = c, n.removeClass(X.ALL).addClass(c ? X.END : X.START);
}, wt = new WeakSet(), $e = function(e) {
  u(this, _).wrap.removeClass("dragging"), u(this, y).$area.removeClass("drag-area"), u(this, y).$node.removeClass("drag-select"), u(this, y).$nodes.removeClass(X.ALL), u(this, y).$nodes.off(K.MOVE), a(window).off(K.END), M(this, y, void 0), f(this, N, $).call(this);
};
const Tn = `.json-editor{--json-editor-font-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";--json-editor-font-eng: "Helvetica Neue", sans-serif;--json-editor-color-bg: hsl(0 0% 100%);--json-editor-color-base: hsl(0 0% 13%);--json-editor-color-blur: hsl(0 0% 67%);--json-editor-color-object: hsl(174 66% 39%);--json-editor-color-array: hsl(191 75% 53%);--json-editor-color-string: hsl(5 87% 59%);--json-editor-color-number: hsl(33 89% 55%);--json-editor-color-boolean: hsl(45 89% 54%);--json-editor-color-null: hsl(0 0% 58%);--json-editor-color-active: hsla(0 0% 0% / 6%);--json-editor-color-focus: hsl(5 87% 59%);--json-editor-color-error: hsl(0 96% 52%);--json-editor-font-size: 13px;font-family:var(--json-editor-font-base);color:var(--json-editor-color-base);font-size:16px;line-height:1.15}.json-editor>ul{position:relative;margin:0;padding:0;list-style:none}.json-editor.dragging{cursor:move;-webkit-user-select:none;user-select:none}.json-editor.dragging *{cursor:move!important;-webkit-user-select:none!important;user-select:none!important}.json-editor .type-icon{display:grid;width:var(--type-size, 24px);height:var(--type-size, 24px);place-content:center;box-sizing:border-box;border-radius:4px;background:var(--type-icon-color, #aaa)}.json-editor .type-icon svg{display:block;box-sizing:border-box;color:#fff;width:var(--type-icon-width)}.json-editor .type-icon--object{--type-icon-color: var(--json-editor-color-object);--type-icon-width: calc(var(--type-icon-size, 10px) + 1px)}.json-editor .type-icon--array{--type-icon-color: var(--json-editor-color-array);--type-icon-width: var(--type-icon-size, 10px)}.json-editor .type-icon--string{--type-icon-color: var(--json-editor-color-string);--type-icon-width: calc(var(--type-icon-size, 10px) - 2px)}.json-editor .type-icon--number{--type-icon-color: var(--json-editor-color-number);--type-icon-width: calc(var(--type-icon-size, 10px) - 1px)}.json-editor .type-icon--boolean{--type-icon-color: var(--json-editor-color-boolean);--type-icon-width: calc(var(--type-icon-size, 10px) - 3px)}.json-editor .type-icon--null{--type-icon-color: var(--json-editor-color-null);--type-icon-width: calc(var(--type-icon-size, 10px) - 2px)}.json-editor .label-field{margin:-4px 0;padding:4px 6px;min-width:var(--label-min-width, unset);min-height:24px;outline:none;font-size:var(--json-editor-font-size);line-height:1.42;box-sizing:border-box;border-radius:2px;background-color:#0000;box-shadow:0 0 0 .5px #0000;transition:background-color .16s ease-out,box-shadow .2s ease-out;cursor:text}.json-editor .label-field:hover,.json-editor .label-field:focus{background-color:var(--json-editor-color-active)}.json-editor .label-field:focus{box-shadow:0 0 0 .5px #00000040}.json-editor .label-field:empty:before{content:attr(data-placeholder);color:var(--json-editor-color-blur)}.json-editor .label-field[type=number]{border:none;width:100px}.json-editor .label-field[type=number]::-webkit-outer-spin-button,.json-editor .label-field[type=number]::-webkit-inner-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none}.json-editor .label-null{display:block;padding:0 6px;color:var(--json-editor-color-blur);font-style:normal;letter-spacing:-.5px;-webkit-user-select:none;user-select:none;font-size:var(--json-editor-font-size)}.json-editor .label-switch{--switch-width: 36px;--switch-height: 18px;--switch-offset: 3px;--switch-speed: .1s;--switch-unit-size: calc(var(--switch-height) - (var(--switch-offset) * 2));display:block;margin:0 0 0 6px;padding:2px 0;background:none;border:none;font-size:0;cursor:pointer}.json-editor .label-switch span{display:block;position:relative;padding:var(--switch-offset);width:var(--switch-width);height:var(--switch-height);border-radius:calc(var(--switch-height) * .5);box-shadow:inset 0 0 0 1px var(--json-editor-color-blur);transition:box-shadow .16s ease-out;box-sizing:border-box}.json-editor .label-switch i{display:block;width:var(--switch-unit-size);height:var(--switch-unit-size);background-color:var(--switch-unit-color, var(--json-editor-color-blur));border-radius:var(--switch-unit-size);pointer-events:none;transform:translate(var(--switch-unit-x));transition:transform var(--switch-speed) ease-out,width var(--switch-speed) ease-out,background-color .24s ease-out}.json-editor .label-switch:active span{box-shadow:inset 0 0 0 1px var(--json-editor-color-active)}.json-editor .label-switch:active[data-value=false] i{width:calc(var(--switch-unit-size) + 6px)}.json-editor .label-switch:active[data-value=true] i{width:calc(var(--switch-unit-size) + 6px);transform:translate(calc(var(--switch-width) - var(--switch-offset) * 2 - var(--switch-unit-size) - 6px))}.json-editor .label-switch:focus-visible{outline:none}.json-editor .label-switch:focus-visible span{outline:2px solid var(--json-editor-color-focus);outline-offset:1px}.json-editor .label-switch[data-value=false]{--switch-unit-x: 0}.json-editor .label-switch[data-value=true]{--switch-unit-x: calc(var(--switch-width) - (var(--switch-offset) * 2) - var(--switch-unit-size));--switch-unit-color: var(--json-editor-color-focus)}.json-editor .node{position:relative}.json-editor .node__body{position:relative;display:flex;align-items:center;box-sizing:border-box;padding:4px 0;transition:opacity .12s ease-out}.json-editor .node__body>.sort{display:block;box-sizing:border-box;cursor:move;margin:-4px 4px -4px 0;padding:4px 0}.json-editor .node__body>.sort svg{display:block;width:24px}.json-editor .node__body>.sort:active{opacity:.5}.json-editor .node__body>.type{position:relative}.json-editor .node__body>.type>button{display:block;margin:-2px;padding:2px;box-sizing:border-box;border:none;background:none;outline:none;cursor:pointer;transition:opacity .12s ease-out;border-radius:6px}.json-editor .node__body>.type>button:active{opacity:.5}.json-editor .node__body>.type>button:focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-1px}.json-editor .node__body>.type.open>button{opacity:.25}.json-editor .node__body>.fold{display:block;width:28px;height:28px;margin:-8px -8px -8px 0;padding:0;background:none;border:none;box-sizing:border-box;cursor:pointer}.json-editor .node__body>.fold:focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-6px}.json-editor .node__body>.fold svg{display:block;margin:0 auto;width:20px;rotate:0deg;box-sizing:border-box;transition:rotate,.16s ease-out}.json-editor .node__body>.key{margin-left:6px;--label-min-width: 42px}.json-editor .node__body>.count{display:block;margin:0;pointer-events:none;padding:0 0 0 8px;color:var(--json-editor-color-blur);font-style:normal;-webkit-user-select:none;user-select:none;font-size:14px;line-height:normal}.json-editor .node__body>.value{display:flex;align-items:center;gap:0 6px;font-size:var(--json-editor-font-size);line-height:1.42;--label-min-width: 72px}.json-editor .node__body>.value:before{content:":"}.json-editor .node__children>.tree{position:relative;display:none;margin:0;padding:0 0 0 26px;list-style:none;box-sizing:border-box}.json-editor .node__children>.tree:not(:empty):before{content:"";display:block;position:absolute;left:11px;top:6px;bottom:14px;width:4px;border-width:0 0 0 1px;border-style:dashed;border-color:#b8b8b8}.json-editor .node__children>.tree:not(:empty):after{content:"";display:block;position:absolute;left:9px;bottom:13px;width:5px;height:5px;background:hsl(0,0%,72%);border-radius:50%}.json-editor .node.open>.node__body .fold svg{rotate:90deg}.json-editor .node.open>.node__children>.tree{display:grid}.json-editor .node.open>.node__children>.tree:empty{display:none}.json-editor .node[data-type=object]>.node__body .count:before{content:"{"}.json-editor .node[data-type=object]>.node__body .count:after{content:"}"}.json-editor .node[data-type=object]>.node__body .value{display:none}.json-editor .node[data-type=array]>.node__body .count:before{content:"["}.json-editor .node[data-type=array]>.node__body .count:after{content:"]"}.json-editor .node[data-type=array]>.node__body .value{display:none}.json-editor .node[data-type=array]>.node__children>.tree>.node>.node__body>.key{display:none}.json-editor .node[data-type=string]>.node__body .fold,.json-editor .node[data-type=number]>.node__body .fold,.json-editor .node[data-type=boolean]>.node__body .fold,.json-editor .node[data-type=null]>.node__body .fold{display:none}.json-editor .node[data-type=string]>.node__children>.tree,.json-editor .node[data-type=number]>.node__children>.tree,.json-editor .node[data-type=boolean]>.node__children>.tree,.json-editor .node[data-type=null]>.node__children>.tree{display:none}.json-editor .node:before,.json-editor .node:after{display:none;content:"";position:absolute;left:0;right:0;height:4px;background-color:var(--json-editor-color-focus);border-radius:4px}.json-editor .node:before{top:-2px}.json-editor .node:after{bottom:-2px}.json-editor .node.drag-over-start:before{display:block}.json-editor .node.drag-over-end:after{display:block}.json-editor.dragging .node:not(.root)>.node__body{opacity:.25}.json-editor.dragging .drag-area>.node>.node__body{opacity:unset}.json-editor .drag-select{background-color:#0000000d}.json-editor .context{--context-border-radius: 4px;--context-color-line: hsl(0 0% 88%);--context-color-item-active: hsl(0 0% 92%);position:absolute;top:-8px;right:-8px;z-index:2}.json-editor .context.is-root{left:28px}.json-editor .context ol{position:absolute;left:0;margin:0;padding:0;list-style:none;background:var(--context-color-line);border-radius:var(--context-border-radius);box-shadow:0 4px 32px #0000001a,0 2px 8px #0003,0 0 0 1px #0000000d}.json-editor .context li{position:relative}.json-editor .context li:not(:first-child){margin-top:1px}.json-editor .context li:first-child>button{border-top-left-radius:var(--context-border-radius);border-top-right-radius:var(--context-border-radius)}.json-editor .context li:last-child>button{border-bottom-left-radius:var(--context-border-radius);border-bottom-right-radius:var(--context-border-radius)}.json-editor .context li.type>button{grid-template-columns:auto 1fr;gap:8px}.json-editor .context li.type>button:disabled>*{opacity:.25}.json-editor .context li.dropdown:hover>button,.json-editor .context li.dropdown:focus-within>button{background-color:var(--context-color-item-active)}.json-editor .context li.dropdown:hover>.children,.json-editor .context li.dropdown:focus-within>.children{opacity:1;pointer-events:auto}.json-editor .context li.dropdown>button{grid-template-columns:1fr auto}.json-editor .context li.remove .label{color:var(--json-editor-color-error)}.json-editor .context button{display:grid;align-items:center;margin:0;padding:8px 12px;min-width:150px;text-align:left;box-sizing:border-box;background-color:var(--json-editor-color-bg);border:none;cursor:pointer;border-radius:0;transition:background-color .12s ease-out;font-family:var(--json-editor-font-base);font-size:12px;letter-spacing:-.25px;outline:none;color:var(--json-editor-color-base)}.json-editor .context button:hover,.json-editor .context button:active{background-color:var(--context-color-item-active)}.json-editor .context button:not(.parent):focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-2px}.json-editor .context button:disabled{cursor:default}.json-editor .context .label{display:block;font-style:normal;pointer-events:none;-webkit-user-select:none;user-select:none}.json-editor .context .type-icon{--type-size: 16px;--type-icon-size: 8px}.json-editor .context .arrow{display:block;margin:0 -4px 0 0;pointer-events:none}.json-editor .context .arrow svg{display:block;width:16px}.json-editor .context .children{position:absolute;top:-12px;right:4px;z-index:2;pointer-events:none;opacity:0;transition:opacity .24s ease-out}.json-editor .context .children ol{top:0;left:0}
`;
var jt, Le;
class Rn extends HTMLElement {
  constructor() {
    super();
    g(this, jt);
    this.attachShadow({ mode: "open" });
    const n = document.createElement("template");
    n.innerHTML = '<div class="json-editor"></div>';
    const o = new CSSStyleSheet();
    o.replaceSync(Tn), this.shadowRoot.appendChild(n.content.cloneNode(!0)), this.shadowRoot.adoptedStyleSheets = [o], this.root = this.shadowRoot.childNodes[0], this.ready = !1, this.data = {}, this.options = {
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
          this.data = ve(i), this.core && this.core.replace(this.data, !1);
          break;
        case "theme":
          this.options.theme = i, this.core && (this.core.options.theme = this.options.theme);
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
    this.core = new Ln(this.root, this.options), this.core.replace(this.data, !0), this.core.preview = (n) => {
      this.data = n, f(this, jt, Le).call(this, "update", { data: n });
    };
  }
  /**
   * unmounted component
   */
  disconnectedCallback() {
    console.warn("disconnectedCallback()"), this.core && (this.core.destroy(), delete this.core, this.root.innerHTML = "");
  }
  adoptedCallback() {
    console.warn("adoptedCallback()");
  }
}
jt = new WeakSet(), Le = function(n, o) {
  this.dispatchEvent(new CustomEvent(n, {
    detail: o
  }));
};
export {
  Rn as default
};
