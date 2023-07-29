var ge = Object.defineProperty;
var ye = (t, e, n) => e in t ? ge(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var zt = (t, e, n) => (ye(t, typeof e != "symbol" ? e + "" : e, n), n), ut = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var h = (t, e, n) => (ut(t, e, "read from private field"), n ? n.call(t) : e.get(t)), y = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, dt = (t, e, n, o) => (ut(t, e, "write to private field"), o ? o.call(t, n) : e.set(t, n), n);
var g = (t, e, n) => (ut(t, e, "access private method"), n);
const S = document, J = window, Dt = S.documentElement, H = S.createElement.bind(S), It = H("div"), ft = H("table"), me = H("tbody"), Tt = H("tr"), { isArray: st, prototype: Vt } = Array, { concat: xe, filter: vt, indexOf: Ft, map: Ut, push: we, slice: Zt, some: kt, splice: ve } = Vt, ke = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ce = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, _e = /<.+>/, je = /^\w+$/;
function Ct(t, e) {
  const n = $e(e);
  return !t || !n && !A(e) && !m(e) ? [] : !n && Ce.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && je.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class at {
  constructor(e, n) {
    if (!e)
      return;
    if (bt(e))
      return e;
    let o = e;
    if (k(e)) {
      const i = n || S;
      if (o = ke.test(e) && A(i) ? i.getElementById(e.slice(1).replace(/\\/g, "")) : _e.test(e) ? Jt(e) : bt(i) ? i.find(e) : k(i) ? a(i).find(e) : Ct(e, i), !o)
        return;
    } else if (O(e))
      return this.ready(e);
    (o.nodeType || o === J) && (o = [o]), this.length = o.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = o[i];
  }
  init(e, n) {
    return new at(e, n);
  }
}
const s = at.prototype, a = s.init;
a.fn = a.prototype = s;
s.length = 0;
s.splice = ve;
typeof Symbol == "function" && (s[Symbol.iterator] = Vt[Symbol.iterator]);
function bt(t) {
  return t instanceof at;
}
function B(t) {
  return !!t && t === t.window;
}
function A(t) {
  return !!t && t.nodeType === 9;
}
function $e(t) {
  return !!t && t.nodeType === 11;
}
function m(t) {
  return !!t && t.nodeType === 1;
}
function Se(t) {
  return !!t && t.nodeType === 3;
}
function Ee(t) {
  return typeof t == "boolean";
}
function O(t) {
  return typeof t == "function";
}
function k(t) {
  return typeof t == "string";
}
function C(t) {
  return t === void 0;
}
function D(t) {
  return t === null;
}
function Wt(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function _t(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
a.isWindow = B;
a.isFunction = O;
a.isArray = st;
a.isNumeric = Wt;
a.isPlainObject = _t;
function x(t, e, n) {
  if (n) {
    let o = t.length;
    for (; o--; )
      if (e.call(t[o], o, t[o]) === !1)
        return t;
  } else if (_t(t)) {
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
function K(...t) {
  const e = Ee(t[0]) ? t.shift() : !1, n = t.shift(), o = t.length;
  if (!n)
    return {};
  if (!o)
    return K(e, a, n);
  for (let i = 0; i < o; i++) {
    const r = t[i];
    for (const c in r)
      e && (st(r[c]) || _t(r[c])) ? ((!n[c] || n[c].constructor !== r[c].constructor) && (n[c] = new r[c].constructor()), K(e, n[c], r[c])) : n[c] = r[c];
  }
  return n;
}
a.extend = K;
s.extend = function(t) {
  return K(s, t);
};
const Ne = /\S+/g;
function ct(t) {
  return k(t) ? t.match(Ne) || [] : [];
}
s.toggleClass = function(t, e) {
  const n = ct(t), o = !C(e);
  return this.each((i, r) => {
    m(r) && x(n, (c, u) => {
      o ? e ? r.classList.add(u) : r.classList.remove(u) : r.classList.toggle(u);
    });
  });
};
s.addClass = function(t) {
  return this.toggleClass(t, !0);
};
s.removeAttr = function(t) {
  const e = ct(t);
  return this.each((n, o) => {
    m(o) && x(e, (i, r) => {
      o.removeAttribute(r);
    });
  });
};
function Le(t, e) {
  if (t) {
    if (k(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !m(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return D(n) ? void 0 : n;
      }
      return C(e) ? this : D(e) ? this.removeAttr(t) : this.each((n, o) => {
        m(o) && o.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
s.attr = Le;
s.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
s.hasClass = function(t) {
  return !!t && kt.call(this, (e) => m(e) && e.classList.contains(t));
};
s.get = function(t) {
  return C(t) ? Zt.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
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
function ze(t) {
  return C(t) ? this.get().map((e) => m(e) || Se(e) ? e.textContent : "").join("") : this.each((e, n) => {
    m(n) && (n.textContent = t);
  });
}
s.text = ze;
function E(t, e, n) {
  if (!m(t))
    return;
  const o = J.getComputedStyle(t, null);
  return n ? o.getPropertyValue(e) || void 0 : o[e] || t.style[e];
}
function j(t, e) {
  return parseInt(E(t, e), 10) || 0;
}
function Mt(t, e) {
  return j(t, `border${e ? "Left" : "Top"}Width`) + j(t, `padding${e ? "Left" : "Top"}`) + j(t, `padding${e ? "Right" : "Bottom"}`) + j(t, `border${e ? "Right" : "Bottom"}Width`);
}
const pt = {};
function Te(t) {
  if (pt[t])
    return pt[t];
  const e = H(t);
  S.body.insertBefore(e, null);
  const n = E(e, "display");
  return S.body.removeChild(e), pt[t] = n !== "none" ? n : "block";
}
function At(t) {
  return E(t, "display") === "none";
}
function qt(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function lt(t) {
  return k(t) ? (e, n) => qt(n, t) : O(t) ? t : bt(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
s.filter = function(t) {
  const e = lt(t);
  return a(vt.call(this, (n, o) => e.call(n, o, n)));
};
function z(t, e) {
  return e ? t.filter(e) : t;
}
s.detach = function(t) {
  return z(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const Me = /^\s*<(\w+)[^>]*>/, Ae = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Ht = {
  "*": It,
  tr: me,
  td: Tt,
  th: Tt,
  thead: ft,
  tbody: ft,
  tfoot: ft
};
function Jt(t) {
  if (!k(t))
    return [];
  if (Ae.test(t))
    return [H(RegExp.$1)];
  const e = Me.test(t) && RegExp.$1, n = Ht[e] || Ht["*"];
  return n.innerHTML = t, a(n.childNodes).detach().get();
}
a.parseHTML = Jt;
s.has = function(t) {
  const e = k(t) ? (n, o) => Ct(t, o).length : (n, o) => o.contains(t);
  return this.filter(e);
};
s.not = function(t) {
  const e = lt(t);
  return this.filter((n, o) => (!k(t) || m(o)) && !e.call(o, n, o));
};
function N(t, e, n, o) {
  const i = [], r = O(e), c = o && lt(o);
  for (let u = 0, d = t.length; u < d; u++)
    if (r) {
      const l = e(t[u]);
      l.length && we.apply(i, l);
    } else {
      let l = t[u][e];
      for (; l != null && !(o && c(-1, l)); )
        i.push(l), l = n ? l[e] : null;
    }
  return i;
}
function Kt(t) {
  return t.multiple && t.options ? N(vt.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function He(t) {
  return arguments.length ? this.each((e, n) => {
    const o = n.multiple && n.options;
    if (o || oe.test(n.type)) {
      const i = st(t) ? Ut.call(t, String) : D(t) ? [] : [String(t)];
      o ? x(n.options, (r, c) => {
        c.selected = i.indexOf(c.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = C(t) || D(t) ? "" : t;
  }) : this[0] && Kt(this[0]);
}
s.val = He;
s.is = function(t) {
  const e = lt(t);
  return kt.call(this, (n, o) => e.call(n, o, n));
};
a.guid = 1;
function $(t) {
  return t.length > 1 ? vt.call(t, (e, n, o) => Ft.call(o, e) === n) : t;
}
a.unique = $;
s.add = function(t, e) {
  return a($(this.get().concat(a(t, e).get())));
};
s.children = function(t) {
  return z(a($(N(this, (e) => e.children))), t);
};
s.parent = function(t) {
  return z(a($(N(this, "parentNode"))), t);
};
s.index = function(t) {
  const e = t ? a(t)[0] : this[0], n = t ? this : a(e).parent().children();
  return Ft.call(n, e);
};
s.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const n = this.parent();
  return n.length ? n.closest(t) : e;
};
s.siblings = function(t) {
  return z(a($(N(this, (e) => a(e).parent().children().not(e)))), t);
};
s.find = function(t) {
  return a($(N(this, (e) => Ct(t, e))));
};
const Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Re = /^$|^module$|\/(java|ecma)script/i, Pe = ["type", "src", "nonce", "noModule"];
function Be(t, e) {
  const n = a(t);
  n.filter("script").add(n.find("script")).each((o, i) => {
    if (Re.test(i.type) && Dt.contains(i)) {
      const r = H("script");
      r.text = i.textContent.replace(Oe, ""), x(Pe, (c, u) => {
        i[u] && (r[u] = i[u]);
      }), e.head.insertBefore(r, null), e.head.removeChild(r);
    }
  });
}
function De(t, e, n, o, i) {
  o ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), i && Be(e, t.ownerDocument);
}
function T(t, e, n, o, i, r, c, u) {
  return x(t, (d, l) => {
    x(a(l), (p, v) => {
      x(a(e), (M, b) => {
        const L = n ? v : b, f = n ? b : v, R = n ? p : M;
        De(L, R ? f.cloneNode(!0) : f, o, i, !R);
      }, u);
    }, c);
  }, r), e;
}
s.after = function() {
  return T(arguments, this, !1, !1, !1, !0, !0);
};
s.append = function() {
  return T(arguments, this, !1, !1, !0);
};
function Ie(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (C(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, o) => {
    m(o) && (e ? a(o).empty().append(t) : o.innerHTML = t);
  });
}
s.html = Ie;
s.appendTo = function(t) {
  return T(arguments, this, !0, !1, !0);
};
s.wrapInner = function(t) {
  return this.each((e, n) => {
    const o = a(n), i = o.contents();
    i.length ? i.wrapAll(t) : o.append(t);
  });
};
s.before = function() {
  return T(arguments, this, !1, !0);
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
  return T(arguments, this, !0, !1, !1, !1, !1, !0);
};
s.insertBefore = function(t) {
  return T(arguments, this, !0, !0);
};
s.prepend = function() {
  return T(arguments, this, !1, !0, !0, !0, !0);
};
s.prependTo = function(t) {
  return T(arguments, this, !0, !0, !0, !1, !1, !0);
};
s.contents = function() {
  return a($(N(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
s.next = function(t, e, n) {
  return z(a($(N(this, "nextElementSibling", e, n))), t);
};
s.nextAll = function(t) {
  return this.next(t, !0);
};
s.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
s.parents = function(t, e) {
  return z(a($(N(this, "parentElement", !0, e))), t);
};
s.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
s.prev = function(t, e, n) {
  return z(a($(N(this, "previousElementSibling", e, n))), t);
};
s.prevAll = function(t) {
  return this.prev(t, !0);
};
s.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
s.map = function(t) {
  return a(xe.apply([], Ut.call(this, (e, n) => t.call(e, n, e))));
};
s.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
s.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && E(n, "position") === "static"; )
      n = n.offsetParent;
    return n || Dt;
  });
};
s.slice = function(t, e) {
  return a(Zt.call(this, t, e));
};
const Ve = /-([a-z])/g;
function jt(t) {
  return t.replace(Ve, (e, n) => n.toUpperCase());
}
s.ready = function(t) {
  const e = () => setTimeout(t, 0, a);
  return S.readyState !== "loading" ? e() : S.addEventListener("DOMContentLoaded", e), this;
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
    top: e.top + J.pageYOffset,
    left: e.left + J.pageXOffset
  };
};
s.position = function() {
  const t = this[0];
  if (!t)
    return;
  const e = E(t, "position") === "fixed", n = e ? t.getBoundingClientRect() : this.offset();
  if (!e) {
    const o = t.ownerDocument;
    let i = t.offsetParent || o.documentElement;
    for (; (i === o.body || i === o.documentElement) && E(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== t && m(i)) {
      const r = a(i).offset();
      n.top -= r.top + j(i, "borderTopWidth"), n.left -= r.left + j(i, "borderLeftWidth");
    }
  }
  return {
    top: n.top - j(t, "marginTop"),
    left: n.left - j(t, "marginLeft")
  };
};
const Yt = {
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
    if (k(t))
      return t = Yt[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, o) => {
        o[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
s.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[Yt[t] || t];
  });
};
const Fe = /^--/;
function $t(t) {
  return Fe.test(t);
}
const ht = {}, { style: Ue } = It, Ze = ["webkit", "moz", "ms"];
function We(t, e = $t(t)) {
  if (e)
    return t;
  if (!ht[t]) {
    const n = jt(t), o = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${Ze.join(`${o} `)}${o}`.split(" ");
    x(i, (r, c) => {
      if (c in Ue)
        return ht[t] = c, !1;
    });
  }
  return ht[t];
}
const qe = {
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
function Gt(t, e, n = $t(t)) {
  return !n && !qe[t] && Wt(e) ? `${e}px` : e;
}
function Je(t, e) {
  if (k(t)) {
    const n = $t(t);
    return t = We(t, n), arguments.length < 2 ? this[0] && E(this[0], t, n) : t ? (e = Gt(t, e, n), this.each((o, i) => {
      m(i) && (n ? i.style.setProperty(t, e) : i.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
s.css = Je;
function Xt(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const Ke = /^\s+|\s+$/;
function Ot(t, e) {
  const n = t.dataset[e] || t.dataset[jt(e)];
  return Ke.test(n) ? n : Xt(JSON.parse, n);
}
function Ye(t, e, n) {
  n = Xt(JSON.stringify, n), t.dataset[jt(e)] = n;
}
function Ge(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const o in this[0].dataset)
      n[o] = Ot(this[0], o);
    return n;
  }
  if (k(t))
    return arguments.length < 2 ? this[0] && Ot(this[0], t) : C(e) ? this : this.each((n, o) => {
      Ye(o, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
s.data = Ge;
function Qt(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
x([!0, !1], (t, e) => {
  x(["Width", "Height"], (n, o) => {
    const i = `${e ? "outer" : "inner"}${o}`;
    s[i] = function(r) {
      if (this[0])
        return B(this[0]) ? e ? this[0][`inner${o}`] : this[0].document.documentElement[`client${o}`] : A(this[0]) ? Qt(this[0], o) : this[0][`${e ? "offset" : "client"}${o}`] + (r && e ? j(this[0], `margin${n ? "Top" : "Left"}`) + j(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
x(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  s[n] = function(o) {
    if (!this[0])
      return C(o) ? void 0 : this;
    if (!arguments.length)
      return B(this[0]) ? this[0].document.documentElement[`client${e}`] : A(this[0]) ? Qt(this[0], e) : this[0].getBoundingClientRect()[n] - Mt(this[0], !t);
    const i = parseInt(o, 10);
    return this.each((r, c) => {
      if (!m(c))
        return;
      const u = E(c, "boxSizing");
      c.style[n] = Gt(n, i + (u === "border-box" ? Mt(c, !t) : 0));
    });
  };
});
const Rt = "___cd";
s.toggle = function(t) {
  return this.each((e, n) => {
    if (!m(n))
      return;
    const o = At(n);
    (C(t) ? o : t) ? (n.style.display = n[Rt] || "", At(n) && (n.style.display = Te(n.tagName))) : o || (n[Rt] = E(n, "display"), n.style.display = "none");
  });
};
s.hide = function() {
  return this.toggle(!1);
};
s.show = function() {
  return this.toggle(!0);
};
const Pt = "___ce", St = ".", Et = { focus: "focusin", blur: "focusout" }, te = { mouseenter: "mouseover", mouseleave: "mouseout" }, Xe = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Nt(t) {
  return te[t] || Et[t] || t;
}
function Lt(t) {
  const e = t.split(St);
  return [e[0], e.slice(1).sort()];
}
s.trigger = function(t, e) {
  if (k(t)) {
    const [o, i] = Lt(t), r = Nt(o);
    if (!r)
      return this;
    const c = Xe.test(r) ? "MouseEvents" : "HTMLEvents";
    t = S.createEvent(c), t.initEvent(r, !0, !0), t.namespace = i.join(St), t.___ot = o;
  }
  t.___td = e;
  const n = t.___ot in Et;
  return this.each((o, i) => {
    n && O(i[t.___ot]) && (i[`___i${t.type}`] = !0, i[t.___ot](), i[`___i${t.type}`] = !1), i.dispatchEvent(t);
  });
};
function ee(t) {
  return t[Pt] = t[Pt] || {};
}
function Qe(t, e, n, o, i) {
  const r = ee(t);
  r[e] = r[e] || [], r[e].push([n, o, i]), t.addEventListener(e, i);
}
function ne(t, e) {
  return !e || !kt.call(e, (n) => t.indexOf(n) < 0);
}
function Y(t, e, n, o, i) {
  const r = ee(t);
  if (e)
    r[e] && (r[e] = r[e].filter(([c, u, d]) => {
      if (i && d.guid !== i.guid || !ne(c, n) || o && o !== u)
        return !0;
      t.removeEventListener(e, d);
    }));
  else
    for (e in r)
      Y(t, e, n, o, i);
}
s.off = function(t, e, n) {
  if (C(t))
    this.each((o, i) => {
      !m(i) && !A(i) && !B(i) || Y(i);
    });
  else if (k(t))
    O(e) && (n = e, e = ""), x(ct(t), (o, i) => {
      const [r, c] = Lt(i), u = Nt(r);
      this.each((d, l) => {
        !m(l) && !A(l) && !B(l) || Y(l, u, c, e, n);
      });
    });
  else
    for (const o in t)
      this.off(o, t[o]);
  return this;
};
s.remove = function(t) {
  return z(this, t).detach().off(), this;
};
s.replaceWith = function(t) {
  return this.before(t).remove();
};
s.replaceAll = function(t) {
  return a(t).replaceWith(this), this;
};
function tn(t, e, n, o, i) {
  if (!k(t)) {
    for (const r in t)
      this.on(r, e, n, t[r], i);
    return this;
  }
  return k(e) || (C(e) || D(e) ? e = "" : C(n) ? (n = e, e = "") : (o = n, n = e, e = "")), O(o) || (o = n, n = void 0), o ? (x(ct(t), (r, c) => {
    const [u, d] = Lt(c), l = Nt(u), p = u in te, v = u in Et;
    l && this.each((M, b) => {
      if (!m(b) && !A(b) && !B(b))
        return;
      const L = function(f) {
        if (f.target[`___i${f.type}`])
          return f.stopImmediatePropagation();
        if (f.namespace && !ne(d, f.namespace.split(St)) || !e && (v && (f.target !== b || f.___ot === l) || p && f.relatedTarget && b.contains(f.relatedTarget)))
          return;
        let R = b;
        if (e) {
          let P = f.target;
          for (; !qt(P, e); )
            if (P === b || (P = P.parentNode, !P))
              return;
          R = P;
        }
        Object.defineProperty(f, "currentTarget", {
          configurable: !0,
          get() {
            return R;
          }
        }), Object.defineProperty(f, "delegateTarget", {
          configurable: !0,
          get() {
            return b;
          }
        }), Object.defineProperty(f, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const be = o.call(R, f, f.___td);
        i && Y(b, l, d, e, L), be === !1 && (f.preventDefault(), f.stopPropagation());
      };
      L.guid = o.guid = o.guid || a.guid++, Qe(b, l, d, e, L);
    });
  }), this) : this;
}
s.on = tn;
function en(t, e, n, o) {
  return this.on(t, e, n, o, !0);
}
s.one = en;
const nn = /\r?\n/g;
function on(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(nn, `\r
`))}`;
}
const rn = /file|reset|submit|button|image/i, oe = /radio|checkbox/i;
s.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    x(n.elements || [n], (o, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || rn.test(i.type) || oe.test(i.type) && !i.checked)
        return;
      const r = Kt(i);
      if (!C(r)) {
        const c = st(r) ? r : [r];
        x(c, (u, d) => {
          t += on(i.name, d);
        });
      }
    });
  }), t.slice(1);
};
function Bt(t) {
  return t == null ? "null" : Array.isArray(t) ? "array" : typeof t == "string" ? "string" : typeof t == "number" ? "number" : typeof t == "boolean" ? "boolean" : "object";
}
function ie(t) {
  try {
    return typeof t == "string" ? JSON.parse(t) : Array.isArray(t) ? Object.assign([], t) : a.isPlainObject(t) ? Object.assign({}, t) : {};
  } catch (e) {
    console.error("error", e.message);
  }
}
function sn(t) {
  return Array.isArray(t) ? t.length : a.isPlainObject(t) ? Object.keys(t).length : NaN;
}
const an = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12L10 8L6 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', cn = '<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-90, 10, 10)"><path d="M7 9L10 12L13 9" fill="currentColor"/><path d="M7 9L10 12L13 9H7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>', ln = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', re = {
  object: '<svg viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1)"><path d="M2.296 5.166C2.296 7.238 3.78 8.162 5.166 8.162C6.538 8.162 8.022 7.238 8.022 5.166C8.022 3.094 6.538 2.156 5.166 2.156C3.78 2.156 2.296 3.094 2.296 5.166ZM0 5.18C0 2.03 2.366 0 5.166 0C7.952 0 10.318 2.03 10.318 5.18C10.318 8.316 7.952 10.346 5.166 10.346C2.366 10.346 0 8.316 0 5.18Z" fill="currentColor"/></g></svg>',
  array: '<svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.728 9.926L6.902 7.658H2.87L2.044 9.926H0L3.808 0H6.048L9.828 9.926H7.728ZM4.886 2.142L3.514 5.894H6.258L4.886 2.142Z" fill="currentColor"/></svg>',
  string: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1.5)"><path d="M7.39203 2.576L5.65603 3.108C5.55803 2.562 5.11003 1.708 3.85003 1.708C2.91203 1.708 2.29603 2.31 2.29603 2.968C2.29603 3.514 2.64603 3.948 3.37403 4.088L4.76003 4.354C6.56603 4.704 7.53203 5.88 7.53203 7.28C7.53203 8.806 6.25803 10.346 3.94803 10.346C1.31603 10.346 0.154031 8.652 3.05176e-05 7.238L1.79203 6.762C1.87603 7.742 2.56203 8.624 3.96203 8.624C4.99803 8.624 5.57203 8.106 5.57203 7.406C5.57203 6.832 5.13803 6.384 4.36803 6.23L2.98203 5.95C1.40003 5.628 0.378031 4.606 0.378031 3.108C0.378031 1.344 1.96003 0 3.83603 0C6.24403 0 7.16803 1.456 7.39203 2.576Z" fill="currentColor"/></g></svg>',
  number: '<svg viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1)"><path d="M8.47003 9.926H6.44003L1.93203 2.884V9.926H3.05176e-05V0H2.40803L6.53803 6.566V0H8.47003V9.926Z" fill="currentColor"/></g></svg>',
  boolean: '<svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 .75)"><path d="M3.05176e-05 0H3.57003C5.50203 0 6.59403 1.134 6.59403 2.674C6.59403 3.696 5.97803 4.522 5.15203 4.802C6.11803 5.04 6.90203 5.922 6.90203 7.154C6.90203 8.764 5.69803 9.926 3.83603 9.926H3.05176e-05V0ZM1.90403 4.102H3.27603C4.15803 4.102 4.69003 3.612 4.69003 2.856C4.69003 2.1 4.20003 1.624 3.26203 1.624H1.90403V4.102ZM1.90403 8.316H3.47203C4.41003 8.316 4.97003 7.826 4.97003 7.028C4.97003 6.244 4.46603 5.698 3.50003 5.698H1.90403V8.316Z" fill="currentColor"/></g></svg>',
  null: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1.5)"><path d="M3.808 10.15C1.694 10.15 0 8.848 0 6.412V0H1.932V6.272C1.932 7.574 2.66 8.26 3.808 8.26C4.984 8.26 5.698 7.574 5.698 6.272V0H7.63V6.412C7.63 8.848 5.936 10.15 3.808 10.15Z" fill="currentColor"/></g></svg>'
}, un = [
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
var I, w, V, G, se, X, ae, Q, ce;
class dn {
  constructor(e, n, o) {
    y(this, G);
    y(this, X);
    y(this, Q);
    y(this, I, void 0);
    y(this, w, {
      node: void 0,
      type: void 0,
      dialog: void 0
    });
    y(this, V, void 0);
    dt(this, I, e), h(this, w).node = n, dt(this, V, h(this, w).node.data("type")), h(this, w).type = h(this, w).node.find("& > .node__body > .type"), h(this, w).type.addClass("open"), h(this, w).dialog = g(this, G, se).call(this, un, h(this, V), o), h(this, w).dialog.on("click", (i) => i.stopPropagation()), h(this, w).dialog.find("button").on("click", (i) => g(this, X, ae).call(this, i)), h(this, w).type.append(h(this, w).dialog), a(window).on("click.json-editor-context", (i) => this.close(i)), a(window).on("keyup.json-editor-context", (i) => g(this, Q, ce).call(this, i));
  }
  close() {
    h(this, w).type.removeClass("open"), h(this, w).dialog.remove(), a(window).off("click.json-editor-context"), a(window).off("keyup.json-editor-context"), delete h(this, I).context;
  }
}
I = new WeakMap(), w = new WeakMap(), V = new WeakMap(), G = new WeakSet(), se = function(e, n, o = !1) {
  function i(u, d) {
    let l = "";
    const { key: p, label: v, children: M } = u;
    if (o)
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
    let b = "", L = "", f = "";
    switch (p) {
      case "change-type":
        b = ' class="dropdown"', f = " disabled";
        break;
      case "insert":
        if (["string", "number", "boolean", "null"].indexOf(n) > -1)
          return "";
        b = ' class="dropdown"', f = " disabled";
        break;
      case "duplicate":
        b = ' class="duplicate"', f = ' data-mode="duplicate"';
        break;
      case "remove":
        b = ' class="remove"', f = ' data-mode="remove"';
        break;
      case "object":
      case "array":
      case "string":
      case "number":
      case "boolean":
      case "null":
        b = ' class="type"', L = `<i class="type-icon type-icon--${p}">${re[p]}</i>`, f = ` data-mode="${d}" data-type="${p}"`, d === "change-type" && p === n && (f = " disabled");
        break;
    }
    return l += `<li${b}>`, l += `<button type="button"${f}>`, l += L, l += `<em class="label">${v}</em>`, (p === "change-type" || p === "insert") && (l += `<span class="arrow">${an}</span>`), l += "</button>", (M == null ? void 0 : M.length) > 0 && (l += '<div class="children">', l += r(M, p), l += "</div>"), l += "</li>", l;
  }
  function r(u, d = void 0) {
    let l = "<ol>";
    for (let p in u)
      l += i(u[p], d);
    return l += "</ol>", l;
  }
  let c = `<nav class="context${o ? " is-root" : ""}">`;
  return c += r(e), c += "</nav>", a(c);
}, X = new WeakSet(), ae = function(e) {
  const n = a(e.currentTarget), o = n.data("mode");
  let i = String(n.data("type"));
  i = i === "undefined" ? "" : i, this.selectItem && typeof this.selectItem == "function" && this.selectItem(h(this, w).node, o, i), this.close();
}, Q = new WeakSet(), ce = function(e) {
  e.code === "Escape" && this.close();
};
const fn = {
  target: void 0,
  data: void 0,
  between: "after",
  open: !0,
  callback: void 0
};
var _, F, gt, tt, le, et, ue, U, yt, nt, de, Z, mt, ot, fe, it, pe, W, xt, rt, he;
class pn {
  constructor(e, n) {
    y(this, F);
    y(this, tt);
    y(this, et);
    y(this, U);
    y(this, nt);
    y(this, Z);
    y(this, ot);
    y(this, it);
    y(this, W);
    y(this, rt);
    y(this, _, {
      wrap: null,
      tree: null
    });
    zt(this, "context");
    h(this, _).wrap = a(e), this.replace(n);
  }
  clear() {
    h(this, _).tree && h(this, _).wrap.empty();
  }
  /**
   * replace
   * @param {object|array} src
   */
  replace(e) {
    this.clear(), e = ie(e);
    const n = g(this, tt, le).call(this, e);
    this.import(n, e);
  }
  /**
   * import data
   * @param {HTMLElement} target
   * @param {object|array} src
   */
  import(e, n) {
    a(e), a.each(n, (o, i) => {
      const r = Bt(i), c = { key: o, value: i, type: r };
      this.addNode({
        target: e,
        data: c,
        between: "after",
        open: !1,
        callback: (u, d) => this.import(u, d)
      });
    });
  }
  /**
   * add node
   * @param {HTMLElement} target
   * @param {object} data
   * @param {'before'|'after'} between
   * @param {function} callback
   */
  addNode(e) {
    e = Object.assign({}, fn, e);
    const { target: n, data: o, between: i, open: r, callback: c } = e, u = a(n), { key: d, value: l, type: p } = o, v = g(this, F, gt).call(this, p);
    g(this, nt, de).call(this, v), g(this, Z, mt).call(this, v, r), g(this, U, yt).call(this, v, p), g(this, ot, fe).call(this, v, d), g(this, W, xt).call(this, v, l), g(this, it, pe).call(this, v, p, l), g(this, et, ue).call(this, u.find("& > .node__children > ul"), v, i), (p === "array" || p === "object") && c && typeof c == "function" && c(v.get(0), l);
  }
  changeNodeType(e, n) {
    a(e).attr("data-type", n);
  }
  duplicateNode(e) {
  }
  removeNode(e) {
  }
  controlFold(e, n) {
    const o = a(e);
    n === void 0 ? o.toggleClass("open") : n === !0 ? o.addClass("open") : o.removeClass("open");
  }
  destroy() {
  }
}
_ = new WeakMap(), F = new WeakSet(), gt = function(e, n = !1) {
  let o = `<li data-type="${e}" class="node">`;
  return o += '<div class="node__body">', n || (o += `<span class="sort">${ln}</span>`), o += '<div class="type"><button type="button"></button></div>', o += `<button type="button" class="fold">${cn}</button>`, n || (o += '<div class="key"></div>'), o += '<em class="count"></em>', n || (o += '<div class="value"></div>'), o += "</div>", o += '<div class="node__children"><ul class="tree"/></div>', o += "</li>", a(o);
}, tt = new WeakSet(), le = function(e) {
  const n = Bt(e), o = g(this, F, gt).call(this, n, !0);
  return g(this, Z, mt).call(this, o, !0), g(this, U, yt).call(this, o, n, !0), g(this, W, xt).call(this, o, e), h(this, _).tree = a('<ul class="root"/>'), h(this, _).tree.append(o), h(this, _).wrap.append(h(this, _).tree), o;
}, et = new WeakSet(), ue = function(e, n, o) {
  switch (o) {
    case "before":
      e.prepend(n);
      break;
    default:
      e.append(n);
      break;
  }
}, U = new WeakSet(), yt = function(e, n, o = !1) {
  const r = e.find(".type").children("button");
  r.html(`<i class="type-icon type-icon--${n}">${re[n]}</i>`), r.on("click", async (c) => {
    const u = a(c.currentTarget);
    c.stopPropagation(), u.parent().hasClass("open") ? this.context && this.context.close() : (this.context && this.context.close(), this.context = new dn(this, u.closest(".node"), o), this.context.selectItem = (d, l, p) => g(this, rt, he).call(this, d, l, p));
  });
}, nt = new WeakSet(), de = function(e) {
}, Z = new WeakSet(), mt = function(e, n) {
  const o = e.find(".fold");
  this.controlFold(e, n), o.on("click", (i) => {
    const c = a(i.currentTarget).closest(".node");
    this.controlFold(c);
  });
}, ot = new WeakSet(), fe = function(e, n) {
  const o = e.find(".key");
  let i;
  function r(c) {
    if (c.keyCode === 13)
      return c.preventDefault();
  }
  i = a(`<div class="label-field" contenteditable="true" data-placeholder="empty">${n}</div>`), i.on("keydown", r), i && o.empty().append(i);
}, it = new WeakSet(), pe = function(e, n, o) {
  const i = e.find(".value");
  let r;
  function c(d) {
    if (a(this), d.ctrlKey || d.metaKey)
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
  function u(d) {
    const l = a(d.currentTarget), p = !l.data("value");
    l.data("value", p).find("i").text(p.toString().toUpperCase());
  }
  switch (n) {
    case "string":
      r = a(`<div class="label-field" contenteditable="true" data-placeholder="empty">${o}</div>`), r.on("keydown", c);
      break;
    case "number":
      r = a(`<input type="number" value="${o}" placeholder="0" class="label-field"/>`);
      break;
    case "boolean":
      r = a(`<button type="button" data-value="${o}" class="label-switch"><span><i>${o.toString().toUpperCase()}</i></span></button>`), r.on("click", u);
      break;
    case "null":
      r = a('<em class="label-null">NULL</em>');
      break;
  }
  r && i.empty().append(r);
}, W = new WeakSet(), xt = function(e, n) {
  const o = e.find(".count"), i = sn(n);
  isNaN(i) || o.text(i);
}, rt = new WeakSet(), he = function(e, n, o) {
  switch (console.group("#selectContextMenu()"), console.log(this), console.log(e), console.log(n), console.log(o), console.groupEnd(), n) {
    case "change-type":
      this.changeNodeType(e, o);
      break;
    case "insert":
      this.controlFold(e, !0), this.addNode({
        target: e,
        data: {
          key: "",
          value: "",
          type: o
        },
        between: "after",
        open: !0
      });
      break;
    case "duplicate":
      this.duplicateNode(e);
      break;
    case "remove":
      this.removeNode(e);
      break;
  }
};
const hn = `.json-editor{--json-editor-font-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";--json-editor-font-eng: "Helvetica Neue", sans-serif;--json-editor-color-bg: hsl(0 0% 100%);--json-editor-color-base: hsl(0 0% 13%);--json-editor-color-blur: hsl(0 0% 67%);--json-editor-color-object: hsl(174 66% 39%);--json-editor-color-array: hsl(191 75% 53%);--json-editor-color-string: hsl(5 87% 59%);--json-editor-color-number: hsl(33 89% 55%);--json-editor-color-boolean: hsl(45 89% 54%);--json-editor-color-null: hsl(0 0% 58%);--json-editor-color-active: hsla(0 0% 0% / 6%);--json-editor-color-focus: hsl(5 87% 59%);--json-editor-color-error: hsl(0 96% 52%);--json-editor-font-size: 13px;font-family:var(--json-editor-font-base);color:var(--json-editor-color-base);font-size:16px;line-height:1.15}.root{position:relative;margin:0;padding:0;list-style:none}.type-icon{display:grid;width:var(--type-size, 24px);height:var(--type-size, 24px);place-content:center;box-sizing:border-box;border-radius:4px;background:var(--type-icon-color, #aaa)}.type-icon svg{display:block;box-sizing:border-box;color:#fff;width:var(--type-icon-width)}.type-icon--object{--type-icon-color: var(--json-editor-color-object);--type-icon-width: calc(var(--type-icon-size, 10px) + 1px)}.type-icon--array{--type-icon-color: var(--json-editor-color-array);--type-icon-width: var(--type-icon-size, 10px)}.type-icon--string{--type-icon-color: var(--json-editor-color-string);--type-icon-width: calc(var(--type-icon-size, 10px) - 2px)}.type-icon--number{--type-icon-color: var(--json-editor-color-number);--type-icon-width: calc(var(--type-icon-size, 10px) - 1px)}.type-icon--boolean{--type-icon-color: var(--json-editor-color-boolean);--type-icon-width: calc(var(--type-icon-size, 10px) - 3px)}.type-icon--null{--type-icon-color: var(--json-editor-color-null);--type-icon-width: calc(var(--type-icon-size, 10px) - 2px)}.label-field{margin:-4px 0;padding:4px 6px;min-width:var(--label-min-width, unset);min-height:24px;outline:none;font-size:var(--json-editor-font-size);line-height:1.42;box-sizing:border-box;border-radius:2px;background-color:#0000;box-shadow:0 0 0 .5px #0000;transition:background-color .16s ease-out,box-shadow .2s ease-out;cursor:text}.label-field:hover,.label-field:focus{background-color:var(--json-editor-color-active)}.label-field:focus{box-shadow:0 0 0 .5px #00000040}.label-field:empty:before{content:attr(data-placeholder);color:var(--json-editor-color-blur)}.label-field[type=number]{border:none;width:100px}.label-field[type=number]::-webkit-outer-spin-button,.label-field[type=number]::-webkit-inner-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none}.label-null{display:block;padding:0 6px;color:var(--json-editor-color-blur);font-style:normal;letter-spacing:-.5px;-webkit-user-select:none;user-select:none;font-size:var(--json-editor-font-size)}.label-switch{--switch-width: 36px;--switch-height: 18px;--switch-offset: 3px;--switch-speed: .1s;--switch-unit-size: calc(var(--switch-height) - (var(--switch-offset) * 2));display:block;margin:0 0 0 6px;padding:2px 0;background:none;border:none;font-size:0;cursor:pointer}.label-switch span{display:block;position:relative;padding:var(--switch-offset);width:var(--switch-width);height:var(--switch-height);border-radius:calc(var(--switch-height) * .5);box-shadow:inset 0 0 0 1px var(--json-editor-color-blur);transition:box-shadow .16s ease-out;box-sizing:border-box}.label-switch i{display:block;width:var(--switch-unit-size);height:var(--switch-unit-size);background-color:var(--switch-unit-color, var(--json-editor-color-blur));border-radius:var(--switch-unit-size);pointer-events:none;transform:translate(var(--switch-unit-x));transition:transform var(--switch-speed) ease-out,width var(--switch-speed) ease-out,background-color .24s ease-out}.label-switch:active span{box-shadow:inset 0 0 0 1px var(--json-editor-color-active)}.label-switch:active[data-value=false] i{width:calc(var(--switch-unit-size) + 6px)}.label-switch:active[data-value=true] i{width:calc(var(--switch-unit-size) + 6px);transform:translate(calc(var(--switch-width) - var(--switch-offset) * 2 - var(--switch-unit-size) - 6px))}.label-switch:focus-visible{outline:none}.label-switch:focus-visible span{outline:2px solid var(--json-editor-color-focus);outline-offset:1px}.label-switch[data-value=false]{--switch-unit-x: 0}.label-switch[data-value=true]{--switch-unit-x: calc(var(--switch-width) - (var(--switch-offset) * 2) - var(--switch-unit-size));--switch-unit-color: var(--json-editor-color-object)}.node__body{position:relative;display:flex;align-items:center;box-sizing:border-box}.node__body>.sort{display:block;box-sizing:border-box;cursor:move;padding:0 4px 0 0}.node__body>.sort svg{display:block;width:24px}.node__body>.type{position:relative}.node__body>.type>button{display:block;margin:-2px -2px -2px -4px;padding:2px;box-sizing:border-box;border:none;background:none;outline:none;cursor:pointer;transition:opacity .12s ease-out;border-radius:6px}.node__body>.type>button:active{opacity:.5}.node__body>.type>button:focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-1px}.node__body>.type.open>button{opacity:.25}.node__body>.fold{display:block;width:28px;height:28px;margin:-8px -8px -8px 0;padding:0;background:none;border:none;box-sizing:border-box;cursor:pointer}.node__body>.fold:focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-6px}.node__body>.fold svg{display:block;margin:0 auto;width:var(--fold-arrow-size, 20px);rotate:0deg;box-sizing:border-box;transition:rotate,.16s ease-out}.node__body>.key{margin-left:6px;--label-min-width: 42px}.node__body>.count{display:block;margin:0;pointer-events:none;padding:0 0 0 8px;color:var(--json-editor-color-blur);font-style:normal;-webkit-user-select:none;user-select:none;font-size:14px;line-height:normal}.node__body>.value{display:flex;align-items:center;gap:0 6px;font-size:var(--json-editor-font-size);line-height:1.42;--label-min-width: 72px}.node__body>.value:before{content:":"}.node__children>.tree{position:relative;display:none;gap:6px 0;margin:6px 0 0;padding:0 0 0 24px;list-style:none}.node__children>.tree:not(:empty):before{content:"";display:block;position:absolute;left:10px;top:0;bottom:11px;width:4px;border-width:0 0 0 1px;border-style:dashed;border-color:#b8b8b8}.node__children>.tree:not(:empty):after{content:"";display:block;position:absolute;left:8px;bottom:10px;width:5px;height:5px;background:hsl(0,0%,72%);border-radius:50%}.node.open>.node__body .fold svg{rotate:90deg}.node.open>.node__children>.tree{display:grid}.node.open>.node__children>.tree:empty{display:none}.node[data-type=object]>.node__body .count:before{content:"{"}.node[data-type=object]>.node__body .count:after{content:"}"}.node[data-type=object]>.node__body .value{display:none}.node[data-type=array]>.node__body .count:before{content:"["}.node[data-type=array]>.node__body .count:after{content:"]"}.node[data-type=array]>.node__body .value{display:none}.node[data-type=string]>.node__body .fold{display:none}.node[data-type=number]>.node__body .fold{display:none}.node[data-type=boolean]>.node__body .fold{display:none}.node[data-type=null]>.node__body .fold{display:none}.context{--context-border-radius: 4px;--context-color-line: hsl(0 0% 88%);--context-color-item-active: hsl(0 0% 92%);position:absolute;top:-8px;right:-8px;z-index:2}.context.is-root{left:28px}.context ol{position:absolute;left:0;margin:0;padding:0;list-style:none;background:var(--context-color-line);border-radius:var(--context-border-radius);box-shadow:0 4px 32px #0000001a,0 2px 8px #0003,0 0 0 1px #0000000d}.context li{position:relative}.context li:not(:first-child){margin-top:1px}.context li:first-child>button{border-top-left-radius:var(--context-border-radius);border-top-right-radius:var(--context-border-radius)}.context li:last-child>button{border-bottom-left-radius:var(--context-border-radius);border-bottom-right-radius:var(--context-border-radius)}.context li.type>button{grid-template-columns:auto 1fr;gap:8px}.context li.type>button:disabled>*{opacity:.25}.context li.dropdown:hover>button,.context li.dropdown:focus-within>button{background-color:var(--context-color-item-active)}.context li.dropdown:hover>.children,.context li.dropdown:focus-within>.children{opacity:1;pointer-events:auto}.context li.dropdown>button{grid-template-columns:1fr auto}.context li.remove .label{color:var(--json-editor-color-error)}.context button{display:grid;align-items:center;margin:0;padding:8px 12px;min-width:150px;text-align:left;box-sizing:border-box;background-color:var(--json-editor-color-bg);border:none;cursor:pointer;border-radius:0;transition:background-color .12s ease-out;font-family:var(--json-editor-font-base);font-size:12px;letter-spacing:-.25px;outline:none;color:var(--json-editor-color-base)}.context button:hover,.context button:active{background-color:var(--context-color-item-active)}.context button:not(.parent):focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-2px}.context button:disabled{cursor:default}.context .label{display:block;font-style:normal;pointer-events:none;-webkit-user-select:none;user-select:none}.context .type-icon{--type-size: 16px;--type-icon-size: 8px}.context .arrow{display:block;margin:0 -4px 0 0;pointer-events:none}.context .arrow svg{display:block;width:16px}.context .children{position:absolute;top:-12px;right:4px;z-index:2;pointer-events:none;opacity:0;transition:opacity .24s ease-out}.context .children ol{top:0;left:0}
`;
var q, wt;
class gn extends HTMLElement {
  constructor() {
    super();
    y(this, q);
    this.attachShadow({
      mode: "open"
    });
    const n = document.createElement("template");
    n.innerHTML = '<div class="json-editor"></div>';
    const o = new CSSStyleSheet();
    o.replaceSync(hn), this.shadowRoot.appendChild(n.content.cloneNode(!0)), this.shadowRoot.adoptedStyleSheets = [o], this.root = this.shadowRoot.childNodes[0], this.ready = !1, this.data = {};
  }
  static get observedAttributes() {
    return ["src", "theme"];
  }
  get props() {
    return {
      src: this.getAttribute("src"),
      theme: this.getAttribute("theme")
    };
  }
  /**
   * 속성값이 변경됐을때 호출되는 영역
   */
  attributeChangedCallback(n, o, i) {
    if (o !== i)
      switch (n) {
        case "src":
          this.data = ie(i), this.core && this.core.replace(this.data);
          break;
      }
  }
  /**
   * mounted component
   */
  connectedCallback() {
    this.root.addEventListener("json-editor", g(this, q, wt)), this.core = new pn(this.root, this.data);
  }
  /**
   * unmounted component
   */
  disconnectedCallback() {
    console.warn("disconnectedCallback()"), this.root.removeEventListener("json-editor", g(this, q, wt)), this.core && (this.core.destroy(), delete this.core, this.root.innerHTML = "");
  }
  adoptedCallback() {
    console.warn("adoptedCallback()");
  }
}
q = new WeakSet(), wt = function(n) {
  console.log("#onRootEvent", n);
};
export {
  gn as default
};
