var de = Object.defineProperty;
var ue = (t, e, n) => e in t ? de(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var St = (t, e, n) => (ue(t, typeof e != "symbol" ? e + "" : e, n), n), dt = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var p = (t, e, n) => (dt(t, e, "read from private field"), n ? n.call(t) : e.get(t)), v = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, ut = (t, e, n, o) => (dt(t, e, "write to private field"), o ? o.call(t, n) : e.set(t, n), n);
var g = (t, e, n) => (dt(t, e, "access private method"), n);
const $ = document, K = window, Bt = $.documentElement, B = $.createElement.bind($), Ht = B("div"), ft = B("table"), fe = B("tbody"), Nt = B("tr"), { isArray: st, prototype: Pt } = Array, { concat: he, filter: yt, indexOf: It, map: Dt, push: pe, slice: Vt, some: mt, splice: be } = Pt, ge = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, ye = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, me = /<.+>/, xe = /^\w+$/;
function xt(t, e) {
  const n = we(e);
  return !t || !n && !M(e) && !y(e) ? [] : !n && ye.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && xe.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class at {
  constructor(e, n) {
    if (!e)
      return;
    if (bt(e))
      return e;
    let o = e;
    if (C(e)) {
      const i = n || $;
      if (o = ge.test(e) && M(i) ? i.getElementById(e.slice(1).replace(/\\/g, "")) : me.test(e) ? Zt(e) : bt(i) ? i.find(e) : C(i) ? c(i).find(e) : xt(e, i), !o)
        return;
    } else if (H(e))
      return this.ready(e);
    (o.nodeType || o === K) && (o = [o]), this.length = o.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = o[i];
  }
  init(e, n) {
    return new at(e, n);
  }
}
const s = at.prototype, c = s.init;
c.fn = c.prototype = s;
s.length = 0;
s.splice = be;
typeof Symbol == "function" && (s[Symbol.iterator] = Pt[Symbol.iterator]);
function bt(t) {
  return t instanceof at;
}
function F(t) {
  return !!t && t === t.window;
}
function M(t) {
  return !!t && t.nodeType === 9;
}
function we(t) {
  return !!t && t.nodeType === 11;
}
function y(t) {
  return !!t && t.nodeType === 1;
}
function ve(t) {
  return !!t && t.nodeType === 3;
}
function Ce(t) {
  return typeof t == "boolean";
}
function H(t) {
  return typeof t == "function";
}
function C(t) {
  return typeof t == "string";
}
function k(t) {
  return t === void 0;
}
function Z(t) {
  return t === null;
}
function Ft(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function wt(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
c.isWindow = F;
c.isFunction = H;
c.isArray = st;
c.isNumeric = Ft;
c.isPlainObject = wt;
function m(t, e, n) {
  if (n) {
    let o = t.length;
    for (; o--; )
      if (e.call(t[o], o, t[o]) === !1)
        return t;
  } else if (wt(t)) {
    const o = Object.keys(t);
    for (let i = 0, r = o.length; i < r; i++) {
      const a = o[i];
      if (e.call(t[a], a, t[a]) === !1)
        return t;
    }
  } else
    for (let o = 0, i = t.length; o < i; o++)
      if (e.call(t[o], o, t[o]) === !1)
        return t;
  return t;
}
c.each = m;
s.each = function(t) {
  return m(this, t);
};
s.empty = function() {
  return this.each((t, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function X(...t) {
  const e = Ce(t[0]) ? t.shift() : !1, n = t.shift(), o = t.length;
  if (!n)
    return {};
  if (!o)
    return X(e, c, n);
  for (let i = 0; i < o; i++) {
    const r = t[i];
    for (const a in r)
      e && (st(r[a]) || wt(r[a])) ? ((!n[a] || n[a].constructor !== r[a].constructor) && (n[a] = new r[a].constructor()), X(e, n[a], r[a])) : n[a] = r[a];
  }
  return n;
}
c.extend = X;
s.extend = function(t) {
  return X(s, t);
};
const ke = /\S+/g;
function ct(t) {
  return C(t) ? t.match(ke) || [] : [];
}
s.toggleClass = function(t, e) {
  const n = ct(t), o = !k(e);
  return this.each((i, r) => {
    y(r) && m(n, (a, d) => {
      o ? e ? r.classList.add(d) : r.classList.remove(d) : r.classList.toggle(d);
    });
  });
};
s.addClass = function(t) {
  return this.toggleClass(t, !0);
};
s.removeAttr = function(t) {
  const e = ct(t);
  return this.each((n, o) => {
    y(o) && m(e, (i, r) => {
      o.removeAttribute(r);
    });
  });
};
function _e(t, e) {
  if (t) {
    if (C(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !y(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return Z(n) ? void 0 : n;
      }
      return k(e) ? this : Z(e) ? this.removeAttr(t) : this.each((n, o) => {
        y(o) && o.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
s.attr = _e;
s.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
s.hasClass = function(t) {
  return !!t && mt.call(this, (e) => y(e) && e.classList.contains(t));
};
s.get = function(t) {
  return k(t) ? Vt.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
};
s.eq = function(t) {
  return c(this.get(t));
};
s.first = function() {
  return this.eq(0);
};
s.last = function() {
  return this.eq(-1);
};
function je(t) {
  return k(t) ? this.get().map((e) => y(e) || ve(e) ? e.textContent : "").join("") : this.each((e, n) => {
    y(n) && (n.textContent = t);
  });
}
s.text = je;
function L(t, e, n) {
  if (!y(t))
    return;
  const o = K.getComputedStyle(t, null);
  return n ? o.getPropertyValue(e) || void 0 : o[e] || t.style[e];
}
function S(t, e) {
  return parseInt(L(t, e), 10) || 0;
}
function $t(t, e) {
  return S(t, `border${e ? "Left" : "Top"}Width`) + S(t, `padding${e ? "Left" : "Top"}`) + S(t, `padding${e ? "Right" : "Bottom"}`) + S(t, `border${e ? "Right" : "Bottom"}Width`);
}
const ht = {};
function Ee(t) {
  if (ht[t])
    return ht[t];
  const e = B(t);
  $.body.insertBefore(e, null);
  const n = L(e, "display");
  return $.body.removeChild(e), ht[t] = n !== "none" ? n : "block";
}
function Lt(t) {
  return L(t, "display") === "none";
}
function Ut(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function lt(t) {
  return C(t) ? (e, n) => Ut(n, t) : H(t) ? t : bt(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
s.filter = function(t) {
  const e = lt(t);
  return c(yt.call(this, (n, o) => e.call(n, o, n)));
};
function R(t, e) {
  return e ? t.filter(e) : t;
}
s.detach = function(t) {
  return R(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const Se = /^\s*<(\w+)[^>]*>/, Ne = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Tt = {
  "*": Ht,
  tr: fe,
  td: Nt,
  th: Nt,
  thead: ft,
  tbody: ft,
  tfoot: ft
};
function Zt(t) {
  if (!C(t))
    return [];
  if (Ne.test(t))
    return [B(RegExp.$1)];
  const e = Se.test(t) && RegExp.$1, n = Tt[e] || Tt["*"];
  return n.innerHTML = t, c(n.childNodes).detach().get();
}
c.parseHTML = Zt;
s.has = function(t) {
  const e = C(t) ? (n, o) => xt(t, o).length : (n, o) => o.contains(t);
  return this.filter(e);
};
s.not = function(t) {
  const e = lt(t);
  return this.filter((n, o) => (!C(t) || y(o)) && !e.call(o, n, o));
};
function T(t, e, n, o) {
  const i = [], r = H(e), a = o && lt(o);
  for (let d = 0, u = t.length; d < u; d++)
    if (r) {
      const l = e(t[d]);
      l.length && pe.apply(i, l);
    } else {
      let l = t[d][e];
      for (; l != null && !(o && a(-1, l)); )
        i.push(l), l = n ? l[e] : null;
    }
  return i;
}
function Wt(t) {
  return t.multiple && t.options ? T(yt.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function $e(t) {
  return arguments.length ? this.each((e, n) => {
    const o = n.multiple && n.options;
    if (o || te.test(n.type)) {
      const i = st(t) ? Dt.call(t, String) : Z(t) ? [] : [String(t)];
      o ? m(n.options, (r, a) => {
        a.selected = i.indexOf(a.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = k(t) || Z(t) ? "" : t;
  }) : this[0] && Wt(this[0]);
}
s.val = $e;
s.is = function(t) {
  const e = lt(t);
  return mt.call(this, (n, o) => e.call(n, o, n));
};
c.guid = 1;
function N(t) {
  return t.length > 1 ? yt.call(t, (e, n, o) => It.call(o, e) === n) : t;
}
c.unique = N;
s.add = function(t, e) {
  return c(N(this.get().concat(c(t, e).get())));
};
s.children = function(t) {
  return R(c(N(T(this, (e) => e.children))), t);
};
s.parent = function(t) {
  return R(c(N(T(this, "parentNode"))), t);
};
s.index = function(t) {
  const e = t ? c(t)[0] : this[0], n = t ? this : c(e).parent().children();
  return It.call(n, e);
};
s.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const n = this.parent();
  return n.length ? n.closest(t) : e;
};
s.siblings = function(t) {
  return R(c(N(T(this, (e) => c(e).parent().children().not(e)))), t);
};
s.find = function(t) {
  return c(N(T(this, (e) => xt(t, e))));
};
const Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Te = /^$|^module$|\/(java|ecma)script/i, Ae = ["type", "src", "nonce", "noModule"];
function Re(t, e) {
  const n = c(t);
  n.filter("script").add(n.find("script")).each((o, i) => {
    if (Te.test(i.type) && Bt.contains(i)) {
      const r = B("script");
      r.text = i.textContent.replace(Le, ""), m(Ae, (a, d) => {
        i[d] && (r[d] = i[d]);
      }), e.head.insertBefore(r, null), e.head.removeChild(r);
    }
  });
}
function ze(t, e, n, o, i) {
  o ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), i && Re(e, t.ownerDocument);
}
function z(t, e, n, o, i, r, a, d) {
  return m(t, (u, l) => {
    m(c(l), (f, _) => {
      m(c(e), (j, b) => {
        const A = n ? _ : b, h = n ? b : _, P = n ? f : j;
        ze(A, P ? h.cloneNode(!0) : h, o, i, !P);
      }, d);
    }, a);
  }, r), e;
}
s.after = function() {
  return z(arguments, this, !1, !1, !1, !0, !0);
};
s.append = function() {
  return z(arguments, this, !1, !1, !0);
};
function Oe(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (k(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, o) => {
    y(o) && (e ? c(o).empty().append(t) : o.innerHTML = t);
  });
}
s.html = Oe;
s.appendTo = function(t) {
  return z(arguments, this, !0, !1, !0);
};
s.wrapInner = function(t) {
  return this.each((e, n) => {
    const o = c(n), i = o.contents();
    i.length ? i.wrapAll(t) : o.append(t);
  });
};
s.before = function() {
  return z(arguments, this, !1, !0);
};
s.wrapAll = function(t) {
  let e = c(t), n = e[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(e), this.appendTo(n);
};
s.wrap = function(t) {
  return this.each((e, n) => {
    const o = c(t)[0];
    c(n).wrapAll(e ? o.cloneNode(!0) : o);
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
  return c(N(T(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
s.next = function(t, e, n) {
  return R(c(N(T(this, "nextElementSibling", e, n))), t);
};
s.nextAll = function(t) {
  return this.next(t, !0);
};
s.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
s.parents = function(t, e) {
  return R(c(N(T(this, "parentElement", !0, e))), t);
};
s.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
s.prev = function(t, e, n) {
  return R(c(N(T(this, "previousElementSibling", e, n))), t);
};
s.prevAll = function(t) {
  return this.prev(t, !0);
};
s.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
s.map = function(t) {
  return c(he.apply([], Dt.call(this, (e, n) => t.call(e, n, e))));
};
s.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
s.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && L(n, "position") === "static"; )
      n = n.offsetParent;
    return n || Bt;
  });
};
s.slice = function(t, e) {
  return c(Vt.call(this, t, e));
};
const Me = /-([a-z])/g;
function vt(t) {
  return t.replace(Me, (e, n) => n.toUpperCase());
}
s.ready = function(t) {
  const e = () => setTimeout(t, 0, c);
  return $.readyState !== "loading" ? e() : $.addEventListener("DOMContentLoaded", e), this;
};
s.unwrap = function() {
  return this.parent().each((t, e) => {
    if (e.tagName === "BODY")
      return;
    const n = c(e);
    n.replaceWith(n.children());
  }), this;
};
s.offset = function() {
  const t = this[0];
  if (!t)
    return;
  const e = t.getBoundingClientRect();
  return {
    top: e.top + K.pageYOffset,
    left: e.left + K.pageXOffset
  };
};
s.position = function() {
  const t = this[0];
  if (!t)
    return;
  const e = L(t, "position") === "fixed", n = e ? t.getBoundingClientRect() : this.offset();
  if (!e) {
    const o = t.ownerDocument;
    let i = t.offsetParent || o.documentElement;
    for (; (i === o.body || i === o.documentElement) && L(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== t && y(i)) {
      const r = c(i).offset();
      n.top -= r.top + S(i, "borderTopWidth"), n.left -= r.left + S(i, "borderLeftWidth");
    }
  }
  return {
    top: n.top - S(t, "marginTop"),
    left: n.left - S(t, "marginLeft")
  };
};
const Jt = {
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
      return t = Jt[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, o) => {
        o[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
s.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[Jt[t] || t];
  });
};
const Be = /^--/;
function Ct(t) {
  return Be.test(t);
}
const pt = {}, { style: He } = Ht, Pe = ["webkit", "moz", "ms"];
function Ie(t, e = Ct(t)) {
  if (e)
    return t;
  if (!pt[t]) {
    const n = vt(t), o = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${Pe.join(`${o} `)}${o}`.split(" ");
    m(i, (r, a) => {
      if (a in He)
        return pt[t] = a, !1;
    });
  }
  return pt[t];
}
const De = {
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
function qt(t, e, n = Ct(t)) {
  return !n && !De[t] && Ft(e) ? `${e}px` : e;
}
function Ve(t, e) {
  if (C(t)) {
    const n = Ct(t);
    return t = Ie(t, n), arguments.length < 2 ? this[0] && L(this[0], t, n) : t ? (e = qt(t, e, n), this.each((o, i) => {
      y(i) && (n ? i.style.setProperty(t, e) : i.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
s.css = Ve;
function Yt(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const Fe = /^\s+|\s+$/;
function At(t, e) {
  const n = t.dataset[e] || t.dataset[vt(e)];
  return Fe.test(n) ? n : Yt(JSON.parse, n);
}
function Ue(t, e, n) {
  n = Yt(JSON.stringify, n), t.dataset[vt(e)] = n;
}
function Ze(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const o in this[0].dataset)
      n[o] = At(this[0], o);
    return n;
  }
  if (C(t))
    return arguments.length < 2 ? this[0] && At(this[0], t) : k(e) ? this : this.each((n, o) => {
      Ue(o, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
s.data = Ze;
function Gt(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
m([!0, !1], (t, e) => {
  m(["Width", "Height"], (n, o) => {
    const i = `${e ? "outer" : "inner"}${o}`;
    s[i] = function(r) {
      if (this[0])
        return F(this[0]) ? e ? this[0][`inner${o}`] : this[0].document.documentElement[`client${o}`] : M(this[0]) ? Gt(this[0], o) : this[0][`${e ? "offset" : "client"}${o}`] + (r && e ? S(this[0], `margin${n ? "Top" : "Left"}`) + S(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
m(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  s[n] = function(o) {
    if (!this[0])
      return k(o) ? void 0 : this;
    if (!arguments.length)
      return F(this[0]) ? this[0].document.documentElement[`client${e}`] : M(this[0]) ? Gt(this[0], e) : this[0].getBoundingClientRect()[n] - $t(this[0], !t);
    const i = parseInt(o, 10);
    return this.each((r, a) => {
      if (!y(a))
        return;
      const d = L(a, "boxSizing");
      a.style[n] = qt(n, i + (d === "border-box" ? $t(a, !t) : 0));
    });
  };
});
const Rt = "___cd";
s.toggle = function(t) {
  return this.each((e, n) => {
    if (!y(n))
      return;
    const o = Lt(n);
    (k(t) ? o : t) ? (n.style.display = n[Rt] || "", Lt(n) && (n.style.display = Ee(n.tagName))) : o || (n[Rt] = L(n, "display"), n.style.display = "none");
  });
};
s.hide = function() {
  return this.toggle(!1);
};
s.show = function() {
  return this.toggle(!0);
};
const zt = "___ce", kt = ".", _t = { focus: "focusin", blur: "focusout" }, Kt = { mouseenter: "mouseover", mouseleave: "mouseout" }, We = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function jt(t) {
  return Kt[t] || _t[t] || t;
}
function Et(t) {
  const e = t.split(kt);
  return [e[0], e.slice(1).sort()];
}
s.trigger = function(t, e) {
  if (C(t)) {
    const [o, i] = Et(t), r = jt(o);
    if (!r)
      return this;
    const a = We.test(r) ? "MouseEvents" : "HTMLEvents";
    t = $.createEvent(a), t.initEvent(r, !0, !0), t.namespace = i.join(kt), t.___ot = o;
  }
  t.___td = e;
  const n = t.___ot in _t;
  return this.each((o, i) => {
    n && H(i[t.___ot]) && (i[`___i${t.type}`] = !0, i[t.___ot](), i[`___i${t.type}`] = !1), i.dispatchEvent(t);
  });
};
function Xt(t) {
  return t[zt] = t[zt] || {};
}
function Je(t, e, n, o, i) {
  const r = Xt(t);
  r[e] = r[e] || [], r[e].push([n, o, i]), t.addEventListener(e, i);
}
function Qt(t, e) {
  return !e || !mt.call(e, (n) => t.indexOf(n) < 0);
}
function Q(t, e, n, o, i) {
  const r = Xt(t);
  if (e)
    r[e] && (r[e] = r[e].filter(([a, d, u]) => {
      if (i && u.guid !== i.guid || !Qt(a, n) || o && o !== d)
        return !0;
      t.removeEventListener(e, u);
    }));
  else
    for (e in r)
      Q(t, e, n, o, i);
}
s.off = function(t, e, n) {
  if (k(t))
    this.each((o, i) => {
      !y(i) && !M(i) && !F(i) || Q(i);
    });
  else if (C(t))
    H(e) && (n = e, e = ""), m(ct(t), (o, i) => {
      const [r, a] = Et(i), d = jt(r);
      this.each((u, l) => {
        !y(l) && !M(l) && !F(l) || Q(l, d, a, e, n);
      });
    });
  else
    for (const o in t)
      this.off(o, t[o]);
  return this;
};
s.remove = function(t) {
  return R(this, t).detach().off(), this;
};
s.replaceWith = function(t) {
  return this.before(t).remove();
};
s.replaceAll = function(t) {
  return c(t).replaceWith(this), this;
};
function qe(t, e, n, o, i) {
  if (!C(t)) {
    for (const r in t)
      this.on(r, e, n, t[r], i);
    return this;
  }
  return C(e) || (k(e) || Z(e) ? e = "" : k(n) ? (n = e, e = "") : (o = n, n = e, e = "")), H(o) || (o = n, n = void 0), o ? (m(ct(t), (r, a) => {
    const [d, u] = Et(a), l = jt(d), f = d in Kt, _ = d in _t;
    l && this.each((j, b) => {
      if (!y(b) && !M(b) && !F(b))
        return;
      const A = function(h) {
        if (h.target[`___i${h.type}`])
          return h.stopImmediatePropagation();
        if (h.namespace && !Qt(u, h.namespace.split(kt)) || !e && (_ && (h.target !== b || h.___ot === l) || f && h.relatedTarget && b.contains(h.relatedTarget)))
          return;
        let P = b;
        if (e) {
          let I = h.target;
          for (; !Ut(I, e); )
            if (I === b || (I = I.parentNode, !I))
              return;
          P = I;
        }
        Object.defineProperty(h, "currentTarget", {
          configurable: !0,
          get() {
            return P;
          }
        }), Object.defineProperty(h, "delegateTarget", {
          configurable: !0,
          get() {
            return b;
          }
        }), Object.defineProperty(h, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const le = o.call(P, h, h.___td);
        i && Q(b, l, u, e, A), le === !1 && (h.preventDefault(), h.stopPropagation());
      };
      A.guid = o.guid = o.guid || c.guid++, Je(b, l, u, e, A);
    });
  }), this) : this;
}
s.on = qe;
function Ye(t, e, n, o) {
  return this.on(t, e, n, o, !0);
}
s.one = Ye;
const Ge = /\r?\n/g;
function Ke(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(Ge, `\r
`))}`;
}
const Xe = /file|reset|submit|button|image/i, te = /radio|checkbox/i;
s.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    m(n.elements || [n], (o, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || Xe.test(i.type) || te.test(i.type) && !i.checked)
        return;
      const r = Wt(i);
      if (!k(r)) {
        const a = st(r) ? r : [r];
        m(a, (d, u) => {
          t += Ke(i.name, u);
        });
      }
    });
  }), t.slice(1);
};
function Ot(t) {
  return t == null ? "null" : Array.isArray(t) ? "array" : typeof t == "string" ? "string" : typeof t == "number" ? "number" : typeof t == "boolean" ? "boolean" : "object";
}
function ee(t) {
  try {
    return typeof t == "string" ? JSON.parse(t) : Array.isArray(t) ? Object.assign([], t) : c.isPlainObject(t) ? Object.assign({}, t) : {};
  } catch (e) {
    console.error("error", e.message);
  }
}
function Qe(t) {
  return Array.isArray(t) ? t.length : c.isPlainObject(t) ? Object.keys(t).length : 0;
}
function Mt(t) {
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
const tn = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12L10 8L6 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', en = '<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-90, 10, 10)"><path d="M7 9L10 12L13 9" fill="currentColor"/><path d="M7 9L10 12L13 9H7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>', nn = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', ne = {
  object: '<svg viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-object"><g transform="translate(0 1)"><path d="M2.296 5.166C2.296 7.238 3.78 8.162 5.166 8.162C6.538 8.162 8.022 7.238 8.022 5.166C8.022 3.094 6.538 2.156 5.166 2.156C3.78 2.156 2.296 3.094 2.296 5.166ZM0 5.18C0 2.03 2.366 0 5.166 0C7.952 0 10.318 2.03 10.318 5.18C10.318 8.316 7.952 10.346 5.166 10.346C2.366 10.346 0 8.316 0 5.18Z" fill="currentColor"/></g></svg>',
  array: '<svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-array"><path d="M7.728 9.926L6.902 7.658H2.87L2.044 9.926H0L3.808 0H6.048L9.828 9.926H7.728ZM4.886 2.142L3.514 5.894H6.258L4.886 2.142Z" fill="currentColor"/></svg>',
  string: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-string"><g transform="translate(0 1.5)"><path d="M7.39203 2.576L5.65603 3.108C5.55803 2.562 5.11003 1.708 3.85003 1.708C2.91203 1.708 2.29603 2.31 2.29603 2.968C2.29603 3.514 2.64603 3.948 3.37403 4.088L4.76003 4.354C6.56603 4.704 7.53203 5.88 7.53203 7.28C7.53203 8.806 6.25803 10.346 3.94803 10.346C1.31603 10.346 0.154031 8.652 3.05176e-05 7.238L1.79203 6.762C1.87603 7.742 2.56203 8.624 3.96203 8.624C4.99803 8.624 5.57203 8.106 5.57203 7.406C5.57203 6.832 5.13803 6.384 4.36803 6.23L2.98203 5.95C1.40003 5.628 0.378031 4.606 0.378031 3.108C0.378031 1.344 1.96003 0 3.83603 0C6.24403 0 7.16803 1.456 7.39203 2.576Z" fill="currentColor"/></g></svg>',
  number: '<svg viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-number"><g transform="translate(0 1)"><path d="M8.47003 9.926H6.44003L1.93203 2.884V9.926H3.05176e-05V0H2.40803L6.53803 6.566V0H8.47003V9.926Z" fill="currentColor"/></g></svg>',
  boolean: '<svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-boolean"><g transform="translate(0 .75)"><path d="M3.05176e-05 0H3.57003C5.50203 0 6.59403 1.134 6.59403 2.674C6.59403 3.696 5.97803 4.522 5.15203 4.802C6.11803 5.04 6.90203 5.922 6.90203 7.154C6.90203 8.764 5.69803 9.926 3.83603 9.926H3.05176e-05V0ZM1.90403 4.102H3.27603C4.15803 4.102 4.69003 3.612 4.69003 2.856C4.69003 2.1 4.20003 1.624 3.26203 1.624H1.90403V4.102ZM1.90403 8.316H3.47203C4.41003 8.316 4.97003 7.826 4.97003 7.028C4.97003 6.244 4.46603 5.698 3.50003 5.698H1.90403V8.316Z" fill="currentColor"/></g></svg>',
  null: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-null"><g transform="translate(0 1.5)"><path d="M3.808 10.15C1.694 10.15 0 8.848 0 6.412V0H1.932V6.272C1.932 7.574 2.66 8.26 3.808 8.26C4.984 8.26 5.698 7.574 5.698 6.272V0H7.63V6.412C7.63 8.848 5.936 10.15 3.808 10.15Z" fill="currentColor"/></g></svg>'
}, on = [
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
var W, w, J, tt, oe, et, ie, nt, re;
class rn {
  constructor(e, n, o) {
    v(this, tt);
    v(this, et);
    v(this, nt);
    v(this, W, void 0);
    v(this, w, {
      node: void 0,
      type: void 0,
      dialog: void 0
    });
    v(this, J, void 0);
    ut(this, W, e), p(this, w).node = n, ut(this, J, String(p(this, w).node.data("type"))), p(this, w).type = p(this, w).node.find("& > .node__body > .type"), p(this, w).type.addClass("open"), p(this, w).dialog = g(this, tt, oe).call(this, on, p(this, J), o), p(this, w).dialog.on("click", (i) => i.stopPropagation()), p(this, w).dialog.find("button").on("click", (i) => g(this, et, ie).call(this, i)), p(this, w).type.append(p(this, w).dialog), c(window).on("click.json-editor-context", (i) => this.close(i)), c(window).on("keyup.json-editor-context", (i) => g(this, nt, re).call(this, i));
  }
  close() {
    p(this, w).type.removeClass("open"), p(this, w).dialog.remove(), c(window).off("click.json-editor-context"), c(window).off("keyup.json-editor-context"), delete p(this, W).context;
  }
}
W = new WeakMap(), w = new WeakMap(), J = new WeakMap(), tt = new WeakSet(), oe = function(e, n, o = !1) {
  function i(d, u) {
    let l = "";
    const { key: f, label: _, children: j } = d;
    if (o)
      switch (f) {
        case "string":
        case "number":
        case "boolean":
        case "null":
          if (u === "change-type")
            return "";
          break;
        case "duplicate":
        case "remove":
          return "";
      }
    let b = "", A = "", h = "";
    switch (f) {
      case "change-type":
        b = ' class="dropdown"', h = " disabled";
        break;
      case "insert":
        if (["string", "number", "boolean", "null"].indexOf(n) > -1)
          return "";
        b = ' class="dropdown"', h = " disabled";
        break;
      case "duplicate":
        b = ' class="duplicate"', h = ' data-mode="duplicate"';
        break;
      case "remove":
        b = ' class="remove"', h = ' data-mode="remove"';
        break;
      case "object":
      case "array":
      case "string":
      case "number":
      case "boolean":
      case "null":
        b = ' class="type"', A = `<i class="type-icon type-icon--${f}">${ne[f]}</i>`, h = ` data-mode="${u}" data-type="${f}"`, u === "change-type" && f === n && (h = " disabled");
        break;
    }
    return l += `<li${b}>`, l += `<button type="button"${h}>`, l += A, l += `<em class="label">${_}</em>`, (f === "change-type" || f === "insert") && (l += `<span class="arrow">${tn}</span>`), l += "</button>", (j == null ? void 0 : j.length) > 0 && (l += '<div class="children">', l += r(j, f), l += "</div>"), l += "</li>", l;
  }
  function r(d, u = void 0) {
    let l = "<ol>";
    for (let f in d)
      l += i(d[f], u);
    return l += "</ol>", l;
  }
  let a = `<nav class="context${o ? " is-root" : ""}">`;
  return a += r(e), a += "</nav>", c(a);
}, et = new WeakSet(), ie = function(e) {
  const n = c(e.currentTarget), o = n.data("mode");
  let i = String(n.data("type"));
  i = i === "undefined" ? "" : i, this.close(), this.selectItem && typeof this.selectItem == "function" && this.selectItem(p(this, w).node, o, i);
}, nt = new WeakSet(), re = function(e) {
  e.code === "Escape" && this.close();
};
const sn = {
  target: void 0,
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
};
var E, D, Y, ot, se, it, ae, V, G, O, U, rt, ce;
class an {
  constructor(e, n) {
    v(this, D);
    v(this, ot);
    v(this, it);
    v(this, V);
    v(this, O);
    v(this, rt);
    v(this, E, {
      wrap: null,
      tree: null
    });
    St(this, "context");
    p(this, E).wrap = c(e), this.replace(n);
  }
  /**
   * replace
   * @param {object|array} src
   */
  replace(e) {
    this.clear(), e = ee(e);
    const n = g(this, ot, se).call(this, e);
    this.import(n, e);
  }
  /**
   * import data
   * @param {HTMLElement} target
   * @param {object|array} src
   */
  import(e, n) {
    c.each(n, (o, i) => {
      const r = Ot(i), a = { key: o, value: i, type: r };
      this.addNode({
        target: e,
        data: a,
        open: !1,
        callback: (d, u) => this.import(d, u)
      });
    });
  }
  /**
   * add node
   * @param {object} options
   */
  addNode(e) {
    e = { ...sn, ...e };
    const { target: n, data: o, between: i, open: r, callback: a } = e, d = c(n), { key: u, value: l, type: f } = o, _ = g(this, D, Y).call(this, f, !1);
    g(this, V, G).call(this, _, { ...o, open: r }), g(this, O, U).call(this, _);
    const j = d.find("& > .node__children > ul");
    i === "before" ? j.prepend(_) : j.append(_), (f === "array" || f === "object") && a && typeof a == "function" && a(_.get(0), l);
  }
  changeNodeType(e, n) {
    const o = c(e), i = {
      key: o.find("& > .node__body .key").text(),
      value: g(this, rt, ce).call(this, o),
      type: n,
      open: o.hasClass("open")
    }, r = o.find("& > .node__children > .tree").html();
    o.empty(), o.html(g(this, D, Y).call(this, n, !1).html()), r && o.find("& > .node__children > .tree").html(r), g(this, V, G).call(this, o, i), g(this, O, U).call(this, o), o.attr("data-type", n);
  }
  duplicateNode(e) {
    e = c(e);
    const n = c(e.get(0).outerHTML);
    g(this, O, U).call(this, n), e.after(n);
  }
  removeNode(e) {
    e.remove();
  }
  controlFold(e, n) {
    const o = c(e);
    n === void 0 ? o.toggleClass("open") : n === !0 ? o.addClass("open") : o.removeClass("open");
  }
  clear() {
    p(this, E).tree && p(this, E).wrap.empty();
  }
  destroy() {
  }
}
E = new WeakMap(), D = new WeakSet(), Y = function(e, n = !1) {
  let o = `<li data-type="${e}" class="node${n ? " root" : ""}">`;
  return o += '<div class="node__body">', n || (o += `<span class="sort">${nn}</span>`), o += '<div class="type"><button type="button"></button></div>', (e === x.OBJECT || e === x.ARRAY) && (o += `<button type="button" class="fold">${en}</button>`), n || (o += '<div class="key"></div>'), o += '<em class="count"></em>', n || (o += '<div class="value"></div>'), o += "</div>", o += '<div class="node__children"><ul class="tree"/></div>', o += "</li>", c(o);
}, ot = new WeakSet(), se = function(e) {
  const n = Ot(e), o = g(this, D, Y).call(this, n, !0);
  return g(this, V, G).call(this, o, {
    key: void 0,
    value: e,
    type: n,
    open: !0
  }), g(this, O, U).call(this, o), p(this, E).tree = c("<ul/>"), p(this, E).tree.append(o), p(this, E).wrap.append(p(this, E).tree), o;
}, it = new WeakSet(), ae = function(e, n, o) {
  switch (n) {
    case "change-type":
      this.changeNodeType(e, o);
      break;
    case "insert":
      this.controlFold(e, !0), this.addNode({
        target: e,
        data: { key: "", value: "", type: o }
      });
      break;
    case "duplicate":
      this.duplicateNode(e);
      break;
    case "remove":
      this.removeNode(e);
      break;
  }
}, V = new WeakSet(), G = function(e, n) {
  const { key: o, value: i, type: r, open: a } = n, d = e.hasClass("root"), u = e.children(".node__body");
  if (u.find(".type > button").html(`<i class="type-icon type-icon--${r}">${ne[r]}</i>`), (r === x.OBJECT || r === x.ARRAY) && this.controlFold(e, a), !d) {
    u.find(".key").html(`<div class="label-field" contenteditable="true" data-placeholder="empty">${o}</div>`);
    const l = u.find(".value");
    let f;
    switch (r) {
      case x.STRING:
        l.html(`<div contenteditable="true" data-placeholder="empty" class="label-field type-string">${String(i)}</div>`);
        break;
      case x.NUMBER:
        f = Number(i), isNaN(f) && (f = 0), l.html(`<input type="number" value="${f}" placeholder="0" class="label-field type-number"/>`);
        break;
      case x.BOOLEAN:
        f = i === "false" ? !1 : !!i, l.html(`<button type="button" data-value="${f}" class="label-switch type-boolean"><span><i>${f.toString().toUpperCase()}</i></span></button>`);
        break;
      case x.NULL:
        l.html('<em class="label-null type-null">NULL</em>');
        break;
    }
  }
  if (r === x.OBJECT || r === x.ARRAY) {
    const l = Qe(i);
    isNaN(l) || u.find(".count").text(l);
  }
}, O = new WeakSet(), U = function(e) {
  const n = e.hasClass("root");
  e.find(".type > button").on("click", async (a) => {
    const d = c(a.currentTarget);
    a.stopPropagation(), d.parent().hasClass("open") ? this.context && this.context.close() : (this.context && this.context.close(), this.context = new rn(this, d.closest(".node"), n), this.context.selectItem = (u, l, f) => g(this, it, ae).call(this, u, l, f));
  }), e.find(".fold").on("click", (a) => {
    const u = c(a.currentTarget).closest(".node");
    this.controlFold(u);
  });
  const o = e.find(".key > .label-field");
  o.length && o.on("keydown", (a) => {
    if (a.keyCode === 13)
      return a.preventDefault();
    Mt(a) && a.preventDefault();
  });
  const i = e.find(".value > .type-string");
  i.length && i.on("keydown", (a) => {
    Mt(a) && a.preventDefault();
  });
  const r = e.find(".value > .type-boolean");
  r.length && r.on("click", (a) => {
    const d = c(a.currentTarget), u = !d.data("value");
    d.data("value", u).find("i").text(u.toString().toUpperCase());
  });
}, rt = new WeakSet(), ce = function(e) {
  const n = String(e.data("type")), o = e.find("& > .node__body > .value");
  switch (n) {
    case x.OBJECT:
    case x.ARRAY:
      return "";
    case x.STRING:
      return o.children(".type-string").text() || "";
    case x.NUMBER:
      return Number(o.children(".type-number").val());
    case x.BOOLEAN:
      return o.children(".type-boolean").data("value");
    case x.NULL:
      return null;
  }
};
const cn = `.json-editor{--json-editor-font-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";--json-editor-font-eng: "Helvetica Neue", sans-serif;--json-editor-color-bg: hsl(0 0% 100%);--json-editor-color-base: hsl(0 0% 13%);--json-editor-color-blur: hsl(0 0% 67%);--json-editor-color-object: hsl(174 66% 39%);--json-editor-color-array: hsl(191 75% 53%);--json-editor-color-string: hsl(5 87% 59%);--json-editor-color-number: hsl(33 89% 55%);--json-editor-color-boolean: hsl(45 89% 54%);--json-editor-color-null: hsl(0 0% 58%);--json-editor-color-active: hsla(0 0% 0% / 6%);--json-editor-color-focus: hsl(5 87% 59%);--json-editor-color-error: hsl(0 96% 52%);--json-editor-font-size: 13px;font-family:var(--json-editor-font-base);color:var(--json-editor-color-base);font-size:16px;line-height:1.15}.json-editor>ul{position:relative;margin:0;padding:0;list-style:none}.type-icon{display:grid;width:var(--type-size, 24px);height:var(--type-size, 24px);place-content:center;box-sizing:border-box;border-radius:4px;background:var(--type-icon-color, #aaa)}.type-icon svg{display:block;box-sizing:border-box;color:#fff;width:var(--type-icon-width)}.type-icon--object{--type-icon-color: var(--json-editor-color-object);--type-icon-width: calc(var(--type-icon-size, 10px) + 1px)}.type-icon--array{--type-icon-color: var(--json-editor-color-array);--type-icon-width: var(--type-icon-size, 10px)}.type-icon--string{--type-icon-color: var(--json-editor-color-string);--type-icon-width: calc(var(--type-icon-size, 10px) - 2px)}.type-icon--number{--type-icon-color: var(--json-editor-color-number);--type-icon-width: calc(var(--type-icon-size, 10px) - 1px)}.type-icon--boolean{--type-icon-color: var(--json-editor-color-boolean);--type-icon-width: calc(var(--type-icon-size, 10px) - 3px)}.type-icon--null{--type-icon-color: var(--json-editor-color-null);--type-icon-width: calc(var(--type-icon-size, 10px) - 2px)}.label-field{margin:-4px 0;padding:4px 6px;min-width:var(--label-min-width, unset);min-height:24px;outline:none;font-size:var(--json-editor-font-size);line-height:1.42;box-sizing:border-box;border-radius:2px;background-color:#0000;box-shadow:0 0 0 .5px #0000;transition:background-color .16s ease-out,box-shadow .2s ease-out;cursor:text}.label-field:hover,.label-field:focus{background-color:var(--json-editor-color-active)}.label-field:focus{box-shadow:0 0 0 .5px #00000040}.label-field:empty:before{content:attr(data-placeholder);color:var(--json-editor-color-blur)}.label-field[type=number]{border:none;width:100px}.label-field[type=number]::-webkit-outer-spin-button,.label-field[type=number]::-webkit-inner-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none}.label-null{display:block;padding:0 6px;color:var(--json-editor-color-blur);font-style:normal;letter-spacing:-.5px;-webkit-user-select:none;user-select:none;font-size:var(--json-editor-font-size)}.label-switch{--switch-width: 36px;--switch-height: 18px;--switch-offset: 3px;--switch-speed: .1s;--switch-unit-size: calc(var(--switch-height) - (var(--switch-offset) * 2));display:block;margin:0 0 0 6px;padding:2px 0;background:none;border:none;font-size:0;cursor:pointer}.label-switch span{display:block;position:relative;padding:var(--switch-offset);width:var(--switch-width);height:var(--switch-height);border-radius:calc(var(--switch-height) * .5);box-shadow:inset 0 0 0 1px var(--json-editor-color-blur);transition:box-shadow .16s ease-out;box-sizing:border-box}.label-switch i{display:block;width:var(--switch-unit-size);height:var(--switch-unit-size);background-color:var(--switch-unit-color, var(--json-editor-color-blur));border-radius:var(--switch-unit-size);pointer-events:none;transform:translate(var(--switch-unit-x));transition:transform var(--switch-speed) ease-out,width var(--switch-speed) ease-out,background-color .24s ease-out}.label-switch:active span{box-shadow:inset 0 0 0 1px var(--json-editor-color-active)}.label-switch:active[data-value=false] i{width:calc(var(--switch-unit-size) + 6px)}.label-switch:active[data-value=true] i{width:calc(var(--switch-unit-size) + 6px);transform:translate(calc(var(--switch-width) - var(--switch-offset) * 2 - var(--switch-unit-size) - 6px))}.label-switch:focus-visible{outline:none}.label-switch:focus-visible span{outline:2px solid var(--json-editor-color-focus);outline-offset:1px}.label-switch[data-value=false]{--switch-unit-x: 0}.label-switch[data-value=true]{--switch-unit-x: calc(var(--switch-width) - (var(--switch-offset) * 2) - var(--switch-unit-size));--switch-unit-color: var(--json-editor-color-object)}.node__body{position:relative;display:flex;align-items:center;box-sizing:border-box}.node__body>.sort{display:block;box-sizing:border-box;cursor:move;padding:0 4px 0 0}.node__body>.sort svg{display:block;width:24px}.node__body>.type{position:relative}.node__body>.type>button{display:block;margin:-2px -2px -2px -4px;padding:2px;box-sizing:border-box;border:none;background:none;outline:none;cursor:pointer;transition:opacity .12s ease-out;border-radius:6px}.node__body>.type>button:active{opacity:.5}.node__body>.type>button:focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-1px}.node__body>.type.open>button{opacity:.25}.node__body>.fold{display:block;width:28px;height:28px;margin:-8px -8px -8px 0;padding:0;background:none;border:none;box-sizing:border-box;cursor:pointer}.node__body>.fold:focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-6px}.node__body>.fold svg{display:block;margin:0 auto;width:var(--fold-arrow-size, 20px);rotate:0deg;box-sizing:border-box;transition:rotate,.16s ease-out}.node__body>.key{margin-left:6px;--label-min-width: 42px}.node__body>.count{display:block;margin:0;pointer-events:none;padding:0 0 0 8px;color:var(--json-editor-color-blur);font-style:normal;-webkit-user-select:none;user-select:none;font-size:14px;line-height:normal}.node__body>.value{display:flex;align-items:center;gap:0 6px;font-size:var(--json-editor-font-size);line-height:1.42;--label-min-width: 72px}.node__body>.value:before{content:":"}.node__children>.tree{position:relative;display:none;gap:6px 0;margin:6px 0 0;padding:0 0 0 24px;list-style:none}.node__children>.tree:not(:empty):before{content:"";display:block;position:absolute;left:10px;top:0;bottom:11px;width:4px;border-width:0 0 0 1px;border-style:dashed;border-color:#b8b8b8}.node__children>.tree:not(:empty):after{content:"";display:block;position:absolute;left:8px;bottom:10px;width:5px;height:5px;background:hsl(0,0%,72%);border-radius:50%}.node.open>.node__body .fold svg{rotate:90deg}.node.open>.node__children>.tree{display:grid}.node.open>.node__children>.tree:empty{display:none}.node[data-type=object]>.node__body .count:before{content:"{"}.node[data-type=object]>.node__body .count:after{content:"}"}.node[data-type=object]>.node__body .value{display:none}.node[data-type=array]>.node__body .count:before{content:"["}.node[data-type=array]>.node__body .count:after{content:"]"}.node[data-type=array]>.node__body .value{display:none}.node[data-type=array]>.node__children>.tree>.node>.node__body>.key{display:none}.node[data-type=string]>.node__body .fold,.node[data-type=number]>.node__body .fold,.node[data-type=boolean]>.node__body .fold,.node[data-type=null]>.node__body .fold{display:none}.node[data-type=string]>.node__children>.tree,.node[data-type=number]>.node__children>.tree,.node[data-type=boolean]>.node__children>.tree,.node[data-type=null]>.node__children>.tree{display:none}.context{--context-border-radius: 4px;--context-color-line: hsl(0 0% 88%);--context-color-item-active: hsl(0 0% 92%);position:absolute;top:-8px;right:-8px;z-index:2}.context.is-root{left:28px}.context ol{position:absolute;left:0;margin:0;padding:0;list-style:none;background:var(--context-color-line);border-radius:var(--context-border-radius);box-shadow:0 4px 32px #0000001a,0 2px 8px #0003,0 0 0 1px #0000000d}.context li{position:relative}.context li:not(:first-child){margin-top:1px}.context li:first-child>button{border-top-left-radius:var(--context-border-radius);border-top-right-radius:var(--context-border-radius)}.context li:last-child>button{border-bottom-left-radius:var(--context-border-radius);border-bottom-right-radius:var(--context-border-radius)}.context li.type>button{grid-template-columns:auto 1fr;gap:8px}.context li.type>button:disabled>*{opacity:.25}.context li.dropdown:hover>button,.context li.dropdown:focus-within>button{background-color:var(--context-color-item-active)}.context li.dropdown:hover>.children,.context li.dropdown:focus-within>.children{opacity:1;pointer-events:auto}.context li.dropdown>button{grid-template-columns:1fr auto}.context li.remove .label{color:var(--json-editor-color-error)}.context button{display:grid;align-items:center;margin:0;padding:8px 12px;min-width:150px;text-align:left;box-sizing:border-box;background-color:var(--json-editor-color-bg);border:none;cursor:pointer;border-radius:0;transition:background-color .12s ease-out;font-family:var(--json-editor-font-base);font-size:12px;letter-spacing:-.25px;outline:none;color:var(--json-editor-color-base)}.context button:hover,.context button:active{background-color:var(--context-color-item-active)}.context button:not(.parent):focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-2px}.context button:disabled{cursor:default}.context .label{display:block;font-style:normal;pointer-events:none;-webkit-user-select:none;user-select:none}.context .type-icon{--type-size: 16px;--type-icon-size: 8px}.context .arrow{display:block;margin:0 -4px 0 0;pointer-events:none}.context .arrow svg{display:block;width:16px}.context .children{position:absolute;top:-12px;right:4px;z-index:2;pointer-events:none;opacity:0;transition:opacity .24s ease-out}.context .children ol{top:0;left:0}
`;
var q, gt;
class dn extends HTMLElement {
  constructor() {
    super();
    v(this, q);
    this.attachShadow({
      mode: "open"
    });
    const n = document.createElement("template");
    n.innerHTML = '<div class="json-editor"></div>';
    const o = new CSSStyleSheet();
    o.replaceSync(cn), this.shadowRoot.appendChild(n.content.cloneNode(!0)), this.shadowRoot.adoptedStyleSheets = [o], this.root = this.shadowRoot.childNodes[0], this.ready = !1, this.data = {};
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
          this.data = ee(i), this.core && this.core.replace(this.data);
          break;
      }
  }
  /**
   * mounted component
   */
  connectedCallback() {
    this.root.addEventListener("json-editor", g(this, q, gt)), this.core = new an(this.root, this.data);
  }
  /**
   * unmounted component
   */
  disconnectedCallback() {
    console.warn("disconnectedCallback()"), this.root.removeEventListener("json-editor", g(this, q, gt)), this.core && (this.core.destroy(), delete this.core, this.root.innerHTML = "");
  }
  adoptedCallback() {
    console.warn("adoptedCallback()");
  }
}
q = new WeakSet(), gt = function(n) {
  console.log("#onRootEvent", n);
};
export {
  dn as default
};
