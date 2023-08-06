var _e = Object.defineProperty;
var Be = (t, e, n) => e in t ? _e(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Tt = (t, e, n) => (Be(t, typeof e != "symbol" ? e + "" : e, n), n), Ot = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var f = (t, e, n) => (Ot(t, e, "read from private field"), n ? n.call(t) : e.get(t)), b = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, P = (t, e, n, i) => (Ot(t, e, "write to private field"), i ? i.call(t, n) : e.set(t, n), n);
var d = (t, e, n) => (Ot(t, e, "access private method"), n);
const S = document, dt = window, se = S.documentElement, j = S.createElement.bind(S), re = j("div"), $t = j("table"), Me = j("tbody"), Kt = j("tr"), { isArray: Lt, prototype: oe } = Array, { concat: Pe, filter: It, indexOf: ae, map: ce, push: De, slice: ue, some: Ut, splice: He } = oe, Ie = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ue = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, je = /<.+>/, Ve = /^\w+$/;
function jt(t, e) {
  const n = Ye(e);
  return !t || !n && !U(e) && !N(e) ? [] : !n && Ue.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && Ve.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class Rt {
  constructor(e, n) {
    if (!e)
      return;
    if (Bt(e))
      return e;
    let i = e;
    if (R(e)) {
      const s = n || S;
      if (i = Ie.test(e) && U(s) ? s.getElementById(e.slice(1).replace(/\\/g, "")) : je.test(e) ? he(e) : Bt(s) ? s.find(e) : R(s) ? a(s).find(e) : jt(e, s), !i)
        return;
    } else if (V(e))
      return this.ready(e);
    (i.nodeType || i === dt) && (i = [i]), this.length = i.length;
    for (let s = 0, r = this.length; s < r; s++)
      this[s] = i[s];
  }
  init(e, n) {
    return new Rt(e, n);
  }
}
const o = Rt.prototype, a = o.init;
a.fn = a.prototype = o;
o.length = 0;
o.splice = He;
typeof Symbol == "function" && (o[Symbol.iterator] = oe[Symbol.iterator]);
function Bt(t) {
  return t instanceof Rt;
}
function et(t) {
  return !!t && t === t.window;
}
function U(t) {
  return !!t && t.nodeType === 9;
}
function Ye(t) {
  return !!t && t.nodeType === 11;
}
function N(t) {
  return !!t && t.nodeType === 1;
}
function Je(t) {
  return !!t && t.nodeType === 3;
}
function Fe(t) {
  return typeof t == "boolean";
}
function V(t) {
  return typeof t == "function";
}
function R(t) {
  return typeof t == "string";
}
function x(t) {
  return t === void 0;
}
function st(t) {
  return t === null;
}
function le(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function Vt(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
a.isWindow = et;
a.isFunction = V;
a.isArray = Lt;
a.isNumeric = le;
a.isPlainObject = Vt;
function k(t, e, n) {
  if (n) {
    let i = t.length;
    for (; i--; )
      if (e.call(t[i], i, t[i]) === !1)
        return t;
  } else if (Vt(t)) {
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
function pt(...t) {
  const e = Fe(t[0]) ? t.shift() : !1, n = t.shift(), i = t.length;
  if (!n)
    return {};
  if (!i)
    return pt(e, a, n);
  for (let s = 0; s < i; s++) {
    const r = t[s];
    for (const c in r)
      e && (Lt(r[c]) || Vt(r[c])) ? ((!n[c] || n[c].constructor !== r[c].constructor) && (n[c] = new r[c].constructor()), pt(e, n[c], r[c])) : n[c] = r[c];
  }
  return n;
}
a.extend = pt;
o.extend = function(t) {
  return pt(o, t);
};
const Ze = /\S+/g;
function At(t) {
  return R(t) ? t.match(Ze) || [] : [];
}
o.toggleClass = function(t, e) {
  const n = At(t), i = !x(e);
  return this.each((s, r) => {
    N(r) && k(n, (c, u) => {
      i ? e ? r.classList.add(u) : r.classList.remove(u) : r.classList.toggle(u);
    });
  });
};
o.addClass = function(t) {
  return this.toggleClass(t, !0);
};
o.removeAttr = function(t) {
  const e = At(t);
  return this.each((n, i) => {
    N(i) && k(e, (s, r) => {
      i.removeAttribute(r);
    });
  });
};
function We(t, e) {
  if (t) {
    if (R(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !N(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return st(n) ? void 0 : n;
      }
      return x(e) ? this : st(e) ? this.removeAttr(t) : this.each((n, i) => {
        N(i) && i.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
o.attr = We;
o.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
o.hasClass = function(t) {
  return !!t && Ut.call(this, (e) => N(e) && e.classList.contains(t));
};
o.get = function(t) {
  return x(t) ? ue.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
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
function Ge(t) {
  return x(t) ? this.get().map((e) => N(e) || Je(e) ? e.textContent : "").join("") : this.each((e, n) => {
    N(n) && (n.textContent = t);
  });
}
o.text = Ge;
function _(t, e, n) {
  if (!N(t))
    return;
  const i = dt.getComputedStyle(t, null);
  return n ? i.getPropertyValue(e) || void 0 : i[e] || t.style[e];
}
function O(t, e) {
  return parseInt(_(t, e), 10) || 0;
}
function qt(t, e) {
  return O(t, `border${e ? "Left" : "Top"}Width`) + O(t, `padding${e ? "Left" : "Top"}`) + O(t, `padding${e ? "Right" : "Bottom"}`) + O(t, `border${e ? "Right" : "Bottom"}Width`);
}
const St = {};
function Ke(t) {
  if (St[t])
    return St[t];
  const e = j(t);
  S.body.insertBefore(e, null);
  const n = _(e, "display");
  return S.body.removeChild(e), St[t] = n !== "none" ? n : "block";
}
function zt(t) {
  return _(t, "display") === "none";
}
function fe(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function xt(t) {
  return R(t) ? (e, n) => fe(n, t) : V(t) ? t : Bt(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
o.filter = function(t) {
  const e = xt(t);
  return a(It.call(this, (n, i) => e.call(n, i, n)));
};
function D(t, e) {
  return e ? t.filter(e) : t;
}
o.detach = function(t) {
  return D(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const qe = /^\s*<(\w+)[^>]*>/, ze = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Xt = {
  "*": re,
  tr: Me,
  td: Kt,
  th: Kt,
  thead: $t,
  tbody: $t,
  tfoot: $t
};
function he(t) {
  if (!R(t))
    return [];
  if (ze.test(t))
    return [j(RegExp.$1)];
  const e = qe.test(t) && RegExp.$1, n = Xt[e] || Xt["*"];
  return n.innerHTML = t, a(n.childNodes).detach().get();
}
a.parseHTML = he;
o.has = function(t) {
  const e = R(t) ? (n, i) => jt(t, i).length : (n, i) => i.contains(t);
  return this.filter(e);
};
o.not = function(t) {
  const e = xt(t);
  return this.filter((n, i) => (!R(t) || N(i)) && !e.call(i, n, i));
};
function B(t, e, n, i) {
  const s = [], r = V(e), c = i && xt(i);
  for (let u = 0, p = t.length; u < p; u++)
    if (r) {
      const l = e(t[u]);
      l.length && De.apply(s, l);
    } else {
      let l = t[u][e];
      for (; l != null && !(i && c(-1, l)); )
        s.push(l), l = n ? l[e] : null;
    }
  return s;
}
function de(t) {
  return t.multiple && t.options ? B(It.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function Xe(t) {
  return arguments.length ? this.each((e, n) => {
    const i = n.multiple && n.options;
    if (i || ve.test(n.type)) {
      const s = Lt(t) ? ce.call(t, String) : st(t) ? [] : [String(t)];
      i ? k(n.options, (r, c) => {
        c.selected = s.indexOf(c.value) >= 0;
      }, !0) : n.checked = s.indexOf(n.value) >= 0;
    } else
      n.value = x(t) || st(t) ? "" : t;
  }) : this[0] && de(this[0]);
}
o.val = Xe;
o.is = function(t) {
  const e = xt(t);
  return Ut.call(this, (n, i) => e.call(n, i, n));
};
a.guid = 1;
function $(t) {
  return t.length > 1 ? It.call(t, (e, n, i) => ae.call(i, e) === n) : t;
}
a.unique = $;
o.add = function(t, e) {
  return a($(this.get().concat(a(t, e).get())));
};
o.children = function(t) {
  return D(a($(B(this, (e) => e.children))), t);
};
o.parent = function(t) {
  return D(a($(B(this, "parentNode"))), t);
};
o.index = function(t) {
  const e = t ? a(t)[0] : this[0], n = t ? this : a(e).parent().children();
  return ae.call(n, e);
};
o.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const n = this.parent();
  return n.length ? n.closest(t) : e;
};
o.siblings = function(t) {
  return D(a($(B(this, (e) => a(e).parent().children().not(e)))), t);
};
o.find = function(t) {
  return a($(B(this, (e) => jt(t, e))));
};
const Qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, tn = /^$|^module$|\/(java|ecma)script/i, en = ["type", "src", "nonce", "noModule"];
function nn(t, e) {
  const n = a(t);
  n.filter("script").add(n.find("script")).each((i, s) => {
    if (tn.test(s.type) && se.contains(s)) {
      const r = j("script");
      r.text = s.textContent.replace(Qe, ""), k(en, (c, u) => {
        s[u] && (r[u] = s[u]);
      }), e.head.insertBefore(r, null), e.head.removeChild(r);
    }
  });
}
function sn(t, e, n, i, s) {
  i ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), s && nn(e, t.ownerDocument);
}
function H(t, e, n, i, s, r, c, u) {
  return k(t, (p, l) => {
    k(a(l), (g, E) => {
      k(a(e), (w, C) => {
        const M = n ? E : C, m = n ? C : E, Y = n ? g : w;
        sn(M, Y ? m.cloneNode(!0) : m, i, s, !Y);
      }, u);
    }, c);
  }, r), e;
}
o.after = function() {
  return H(arguments, this, !1, !1, !1, !0, !0);
};
o.append = function() {
  return H(arguments, this, !1, !1, !0);
};
function rn(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (x(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, i) => {
    N(i) && (e ? a(i).empty().append(t) : i.innerHTML = t);
  });
}
o.html = rn;
o.appendTo = function(t) {
  return H(arguments, this, !0, !1, !0);
};
o.wrapInner = function(t) {
  return this.each((e, n) => {
    const i = a(n), s = i.contents();
    s.length ? s.wrapAll(t) : i.append(t);
  });
};
o.before = function() {
  return H(arguments, this, !1, !0);
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
  return H(arguments, this, !0, !1, !1, !1, !1, !0);
};
o.insertBefore = function(t) {
  return H(arguments, this, !0, !0);
};
o.prepend = function() {
  return H(arguments, this, !1, !0, !0, !0, !0);
};
o.prependTo = function(t) {
  return H(arguments, this, !0, !0, !0, !1, !1, !0);
};
o.contents = function() {
  return a($(B(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
o.next = function(t, e, n) {
  return D(a($(B(this, "nextElementSibling", e, n))), t);
};
o.nextAll = function(t) {
  return this.next(t, !0);
};
o.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
o.parents = function(t, e) {
  return D(a($(B(this, "parentElement", !0, e))), t);
};
o.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
o.prev = function(t, e, n) {
  return D(a($(B(this, "previousElementSibling", e, n))), t);
};
o.prevAll = function(t) {
  return this.prev(t, !0);
};
o.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
o.map = function(t) {
  return a(Pe.apply([], ce.call(this, (e, n) => t.call(e, n, e))));
};
o.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
o.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && _(n, "position") === "static"; )
      n = n.offsetParent;
    return n || se;
  });
};
o.slice = function(t, e) {
  return a(ue.call(this, t, e));
};
const on = /-([a-z])/g;
function Yt(t) {
  return t.replace(on, (e, n) => n.toUpperCase());
}
o.ready = function(t) {
  const e = () => setTimeout(t, 0, a);
  return S.readyState !== "loading" ? e() : S.addEventListener("DOMContentLoaded", e), this;
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
    top: e.top + dt.pageYOffset,
    left: e.left + dt.pageXOffset
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
    if (s !== t && N(s)) {
      const r = a(s).offset();
      n.top -= r.top + O(s, "borderTopWidth"), n.left -= r.left + O(s, "borderLeftWidth");
    }
  }
  return {
    top: n.top - O(t, "marginTop"),
    left: n.left - O(t, "marginLeft")
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
o.prop = function(t, e) {
  if (t) {
    if (R(t))
      return t = pe[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, i) => {
        i[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
o.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[pe[t] || t];
  });
};
const an = /^--/;
function Jt(t) {
  return an.test(t);
}
const _t = {}, { style: cn } = re, un = ["webkit", "moz", "ms"];
function ln(t, e = Jt(t)) {
  if (e)
    return t;
  if (!_t[t]) {
    const n = Yt(t), i = `${n[0].toUpperCase()}${n.slice(1)}`, s = `${n} ${un.join(`${i} `)}${i}`.split(" ");
    k(s, (r, c) => {
      if (c in cn)
        return _t[t] = c, !1;
    });
  }
  return _t[t];
}
const fn = {
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
function ge(t, e, n = Jt(t)) {
  return !n && !fn[t] && le(e) ? `${e}px` : e;
}
function hn(t, e) {
  if (R(t)) {
    const n = Jt(t);
    return t = ln(t, n), arguments.length < 2 ? this[0] && _(this[0], t, n) : t ? (e = ge(t, e, n), this.each((i, s) => {
      N(s) && (n ? s.style.setProperty(t, e) : s.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
o.css = hn;
function ye(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const dn = /^\s+|\s+$/;
function Qt(t, e) {
  const n = t.dataset[e] || t.dataset[Yt(e)];
  return dn.test(n) ? n : ye(JSON.parse, n);
}
function pn(t, e, n) {
  n = ye(JSON.stringify, n), t.dataset[Yt(e)] = n;
}
function gn(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const i in this[0].dataset)
      n[i] = Qt(this[0], i);
    return n;
  }
  if (R(t))
    return arguments.length < 2 ? this[0] && Qt(this[0], t) : x(e) ? this : this.each((n, i) => {
      pn(i, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
o.data = gn;
function me(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
k([!0, !1], (t, e) => {
  k(["Width", "Height"], (n, i) => {
    const s = `${e ? "outer" : "inner"}${i}`;
    o[s] = function(r) {
      if (this[0])
        return et(this[0]) ? e ? this[0][`inner${i}`] : this[0].document.documentElement[`client${i}`] : U(this[0]) ? me(this[0], i) : this[0][`${e ? "offset" : "client"}${i}`] + (r && e ? O(this[0], `margin${n ? "Top" : "Left"}`) + O(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
k(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  o[n] = function(i) {
    if (!this[0])
      return x(i) ? void 0 : this;
    if (!arguments.length)
      return et(this[0]) ? this[0].document.documentElement[`client${e}`] : U(this[0]) ? me(this[0], e) : this[0].getBoundingClientRect()[n] - qt(this[0], !t);
    const s = parseInt(i, 10);
    return this.each((r, c) => {
      if (!N(c))
        return;
      const u = _(c, "boxSizing");
      c.style[n] = ge(n, s + (u === "border-box" ? qt(c, !t) : 0));
    });
  };
});
const te = "___cd";
o.toggle = function(t) {
  return this.each((e, n) => {
    if (!N(n))
      return;
    const i = zt(n);
    (x(t) ? i : t) ? (n.style.display = n[te] || "", zt(n) && (n.style.display = Ke(n.tagName))) : i || (n[te] = _(n, "display"), n.style.display = "none");
  });
};
o.hide = function() {
  return this.toggle(!1);
};
o.show = function() {
  return this.toggle(!0);
};
const ee = "___ce", Ft = ".", Zt = { focus: "focusin", blur: "focusout" }, be = { mouseenter: "mouseover", mouseleave: "mouseout" }, yn = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Wt(t) {
  return be[t] || Zt[t] || t;
}
function Gt(t) {
  const e = t.split(Ft);
  return [e[0], e.slice(1).sort()];
}
o.trigger = function(t, e) {
  if (R(t)) {
    const [i, s] = Gt(t), r = Wt(i);
    if (!r)
      return this;
    const c = yn.test(r) ? "MouseEvents" : "HTMLEvents";
    t = S.createEvent(c), t.initEvent(r, !0, !0), t.namespace = s.join(Ft), t.___ot = i;
  }
  t.___td = e;
  const n = t.___ot in Zt;
  return this.each((i, s) => {
    n && V(s[t.___ot]) && (s[`___i${t.type}`] = !0, s[t.___ot](), s[`___i${t.type}`] = !1), s.dispatchEvent(t);
  });
};
function Ce(t) {
  return t[ee] = t[ee] || {};
}
function mn(t, e, n, i, s) {
  const r = Ce(t);
  r[e] = r[e] || [], r[e].push([n, i, s]), t.addEventListener(e, s);
}
function we(t, e) {
  return !e || !Ut.call(e, (n) => t.indexOf(n) < 0);
}
function gt(t, e, n, i, s) {
  const r = Ce(t);
  if (e)
    r[e] && (r[e] = r[e].filter(([c, u, p]) => {
      if (s && p.guid !== s.guid || !we(c, n) || i && i !== u)
        return !0;
      t.removeEventListener(e, p);
    }));
  else
    for (e in r)
      gt(t, e, n, i, s);
}
o.off = function(t, e, n) {
  if (x(t))
    this.each((i, s) => {
      !N(s) && !U(s) && !et(s) || gt(s);
    });
  else if (R(t))
    V(e) && (n = e, e = ""), k(At(t), (i, s) => {
      const [r, c] = Gt(s), u = Wt(r);
      this.each((p, l) => {
        !N(l) && !U(l) && !et(l) || gt(l, u, c, e, n);
      });
    });
  else
    for (const i in t)
      this.off(i, t[i]);
  return this;
};
o.remove = function(t) {
  return D(this, t).detach().off(), this;
};
o.replaceWith = function(t) {
  return this.before(t).remove();
};
o.replaceAll = function(t) {
  return a(t).replaceWith(this), this;
};
function bn(t, e, n, i, s) {
  if (!R(t)) {
    for (const r in t)
      this.on(r, e, n, t[r], s);
    return this;
  }
  return R(e) || (x(e) || st(e) ? e = "" : x(n) ? (n = e, e = "") : (i = n, n = e, e = "")), V(i) || (i = n, n = void 0), i ? (k(At(t), (r, c) => {
    const [u, p] = Gt(c), l = Wt(u), g = u in be, E = u in Zt;
    l && this.each((w, C) => {
      if (!N(C) && !U(C) && !et(C))
        return;
      const M = function(m) {
        if (m.target[`___i${m.type}`])
          return m.stopImmediatePropagation();
        if (m.namespace && !we(p, m.namespace.split(Ft)) || !e && (E && (m.target !== C || m.___ot === l) || g && m.relatedTarget && C.contains(m.relatedTarget)))
          return;
        let Y = C;
        if (e) {
          let J = m.target;
          for (; !fe(J, e); )
            if (J === C || (J = J.parentNode, !J))
              return;
          Y = J;
        }
        Object.defineProperty(m, "currentTarget", {
          configurable: !0,
          get() {
            return Y;
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
        const Se = i.call(Y, m, m.___td);
        s && gt(C, l, p, e, M), Se === !1 && (m.preventDefault(), m.stopPropagation());
      };
      M.guid = i.guid = i.guid || a.guid++, mn(C, l, p, e, M);
    });
  }), this) : this;
}
o.on = bn;
function Cn(t, e, n, i) {
  return this.on(t, e, n, i, !0);
}
o.one = Cn;
const wn = /\r?\n/g;
function vn(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(wn, `\r
`))}`;
}
const Nn = /file|reset|submit|button|image/i, ve = /radio|checkbox/i;
o.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    k(n.elements || [n], (i, s) => {
      if (s.disabled || !s.name || s.tagName === "FIELDSET" || Nn.test(s.type) || ve.test(s.type) && !s.checked)
        return;
      const r = de(s);
      if (!x(r)) {
        const c = Lt(r) ? r : [r];
        k(c, (u, p) => {
          t += vn(s.name, p);
        });
      }
    });
  }), t.slice(1);
};
const En = {
  live: !1,
  // live update
  theme: "system"
  // system,light,dark
}, kn = {
  data: void 0,
  between: "after",
  open: !0,
  callback: void 0
}, h = {
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
}, Ln = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12L10 8L6 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', Rn = '<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-90, 10, 10)"><path d="M7 9L10 12L13 9" fill="currentColor"/><path d="M7 9L10 12L13 9H7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>', An = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', Ne = {
  object: '<svg viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-object"><g transform="translate(0 1)"><path d="M2.296 5.166C2.296 7.238 3.78 8.162 5.166 8.162C6.538 8.162 8.022 7.238 8.022 5.166C8.022 3.094 6.538 2.156 5.166 2.156C3.78 2.156 2.296 3.094 2.296 5.166ZM0 5.18C0 2.03 2.366 0 5.166 0C7.952 0 10.318 2.03 10.318 5.18C10.318 8.316 7.952 10.346 5.166 10.346C2.366 10.346 0 8.316 0 5.18Z" fill="currentColor"/></g></svg>',
  array: '<svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-array"><path d="M7.728 9.926L6.902 7.658H2.87L2.044 9.926H0L3.808 0H6.048L9.828 9.926H7.728ZM4.886 2.142L3.514 5.894H6.258L4.886 2.142Z" fill="currentColor"/></svg>',
  string: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-string"><g transform="translate(0 1.5)"><path d="M7.39203 2.576L5.65603 3.108C5.55803 2.562 5.11003 1.708 3.85003 1.708C2.91203 1.708 2.29603 2.31 2.29603 2.968C2.29603 3.514 2.64603 3.948 3.37403 4.088L4.76003 4.354C6.56603 4.704 7.53203 5.88 7.53203 7.28C7.53203 8.806 6.25803 10.346 3.94803 10.346C1.31603 10.346 0.154031 8.652 3.05176e-05 7.238L1.79203 6.762C1.87603 7.742 2.56203 8.624 3.96203 8.624C4.99803 8.624 5.57203 8.106 5.57203 7.406C5.57203 6.832 5.13803 6.384 4.36803 6.23L2.98203 5.95C1.40003 5.628 0.378031 4.606 0.378031 3.108C0.378031 1.344 1.96003 0 3.83603 0C6.24403 0 7.16803 1.456 7.39203 2.576Z" fill="currentColor"/></g></svg>',
  number: '<svg viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-number"><g transform="translate(0 1)"><path d="M8.47003 9.926H6.44003L1.93203 2.884V9.926H3.05176e-05V0H2.40803L6.53803 6.566V0H8.47003V9.926Z" fill="currentColor"/></g></svg>',
  boolean: '<svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-boolean"><g transform="translate(0 .75)"><path d="M3.05176e-05 0H3.57003C5.50203 0 6.59403 1.134 6.59403 2.674C6.59403 3.696 5.97803 4.522 5.15203 4.802C6.11803 5.04 6.90203 5.922 6.90203 7.154C6.90203 8.764 5.69803 9.926 3.83603 9.926H3.05176e-05V0ZM1.90403 4.102H3.27603C4.15803 4.102 4.69003 3.612 4.69003 2.856C4.69003 2.1 4.20003 1.624 3.26203 1.624H1.90403V4.102ZM1.90403 8.316H3.47203C4.41003 8.316 4.97003 7.826 4.97003 7.028C4.97003 6.244 4.46603 5.698 3.50003 5.698H1.90403V8.316Z" fill="currentColor"/></g></svg>',
  null: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-null"><g transform="translate(0 1.5)"><path d="M3.808 10.15C1.694 10.15 0 8.848 0 6.412V0H1.932V6.272C1.932 7.574 2.66 8.26 3.808 8.26C4.984 8.26 5.698 7.574 5.698 6.272V0H7.63V6.412C7.63 8.848 5.936 10.15 3.808 10.15Z" fill="currentColor"/></g></svg>'
}, xn = [
  {
    key: "change-type",
    label: "Change Type",
    children: [
      { key: h.OBJECT, label: "Object" },
      { key: h.ARRAY, label: "Array" },
      { key: h.STRING, label: "String" },
      { key: h.NUMBER, label: "Number" },
      { key: h.BOOLEAN, label: "Boolean" },
      { key: h.NULL, label: "Null" }
    ]
  },
  {
    key: "insert",
    label: "Insert",
    children: [
      { key: h.OBJECT, label: "Object" },
      { key: h.ARRAY, label: "Array" },
      { key: h.STRING, label: "String" },
      { key: h.NUMBER, label: "Number" },
      { key: h.BOOLEAN, label: "Boolean" },
      { key: h.NULL, label: "Null" }
    ]
  },
  { key: "duplicate", label: "Duplicate" },
  { key: "remove", label: "Remove" }
];
var W, v, G, yt, Ee, mt, ke, bt, Le;
class Tn {
  constructor(e, n, i) {
    b(this, yt);
    b(this, mt);
    b(this, bt);
    b(this, W, void 0);
    b(this, v, {
      node: void 0,
      type: void 0,
      dialog: void 0
    });
    b(this, G, void 0);
    P(this, W, e), f(this, v).node = n, P(this, G, String(f(this, v).node.data("type"))), f(this, v).type = f(this, v).node.find("& > .node__body > .type"), f(this, v).type.addClass("open"), f(this, v).dialog = d(this, yt, Ee).call(this, xn, f(this, G), i), f(this, v).dialog.on("click", (s) => s.stopPropagation()), f(this, v).dialog.find("button").on("click", (s) => d(this, mt, ke).call(this, s)), f(this, W).customContext(f(this, v).dialog.get(0), {
      node: f(this, v).node.get(0),
      type: f(this, G),
      isRoot: i
    }, a), f(this, v).type.append(f(this, v).dialog), a(window).on(Z.CLICK, (s) => this.close(s)), a(window).on(Z.KEYUP, (s) => d(this, bt, Le).call(this, s));
  }
  close() {
    f(this, v).type.removeClass("open"), f(this, v).dialog.remove(), a(window).off(Z.CLICK), a(window).off(Z.KEYUP), delete f(this, W).context;
  }
}
W = new WeakMap(), v = new WeakMap(), G = new WeakMap(), yt = new WeakSet(), Ee = function(e, n, i = !1) {
  function s(u, p) {
    let l = "";
    const { key: g, label: E, children: w } = u;
    if (i)
      switch (g) {
        case h.STRING:
        case h.NUMBER:
        case h.BOOLEAN:
        case h.NULL:
          if (p === "change-type")
            return "";
          break;
        case "duplicate":
        case "remove":
          return "";
      }
    let C = "", M = "", m = "";
    switch (g) {
      case "change-type":
        C = ' class="dropdown"', m = " disabled";
        break;
      case "insert":
        if ([h.STRING, h.NUMBER, h.BOOLEAN, h.NULL].indexOf(n) > -1)
          return "";
        C = ' class="dropdown"', m = " disabled";
        break;
      case "duplicate":
        C = ' class="duplicate"', m = ' data-mode="duplicate"';
        break;
      case "remove":
        C = ' class="remove"', m = ' data-mode="remove"';
        break;
      case h.OBJECT:
      case h.ARRAY:
      case h.STRING:
      case h.NUMBER:
      case h.BOOLEAN:
      case h.NULL:
        C = ' class="type"', M = `<i class="type-icon type-icon--${g}">${Ne[g]}</i>`, m = ` data-mode="${p}" data-type="${g}"`, p === "change-type" && g === n && (m = " disabled");
        break;
    }
    return l += `<li${C}>`, l += `<button type="button"${m}>`, l += M, l += `<em class="label">${E}</em>`, (g === "change-type" || g === "insert") && (l += `<span class="arrow">${Ln}</span>`), l += "</button>", (w == null ? void 0 : w.length) > 0 && (l += '<div class="children">', l += r(w, g), l += "</div>"), l += "</li>", l;
  }
  function r(u, p = void 0) {
    let l = "<ol>";
    for (let g in u)
      l += s(u[g], p);
    return l += "</ol>", l;
  }
  let c = `<nav class="context${i ? " is-root" : ""}">`;
  return c += r(e), c += "</nav>", a(c);
}, mt = new WeakSet(), ke = function(e) {
  const n = a(e.currentTarget), i = n.data("mode");
  let s = String(n.data("type"));
  s = s === "undefined" ? "" : s, this.close(), this.selectItem && typeof this.selectItem == "function" && this.selectItem(f(this, v).node, i, s);
}, bt = new WeakSet(), Le = function(e) {
  e.code === "Escape" && this.close();
};
function ne(t) {
  return t == null ? "null" : Array.isArray(t) ? "array" : typeof t == "string" ? "string" : typeof t == "number" ? "number" : typeof t == "boolean" ? "boolean" : "object";
}
function On(t) {
  try {
    return typeof t == "string" ? JSON.parse(t) : Array.isArray(t) ? Object.assign([], t) : a.isPlainObject(t) ? Object.assign({}, t) : {};
  } catch (e) {
    console.error("error", e.message);
  }
}
function $n(t) {
  return Array.isArray(t) ? t.length : a.isPlainObject(t) ? Object.keys(t).length : 0;
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
var L, y, Ht, K, Ct, Re, rt, Mt, q, ct, wt, Ae, vt, xe, z, ut, X, lt, ot, Pt, A, T, at, Dt, I, it, Q, ft, tt, ht, Nt, Te, Et, Oe, kt, $e;
class _n {
  constructor(e, n = {}) {
    b(this, Ct);
    b(this, rt);
    b(this, q);
    b(this, wt);
    b(this, vt);
    b(this, z);
    b(this, X);
    b(this, ot);
    b(this, A);
    b(this, at);
    /**
     * NODE EVENTS
     */
    b(this, I);
    b(this, Q);
    b(this, tt);
    b(this, Nt);
    b(this, Et);
    b(this, kt);
    b(this, L, { wrap: null, tree: null });
    Tt(this, "options");
    Tt(this, "context");
    b(this, y, void 0);
    b(this, Ht, void 0);
    b(this, K, !1);
    f(this, L).wrap = a(e), this.options = new Proxy(Object.assign({}, En, n), {
      get: (i, s) => i[s],
      set: d(this, Ct, Re).bind(this)
    }), d(this, rt, Mt).call(this, this.options.theme);
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
    n = { ...kn, ...n };
    const { data: s, between: r, open: c, callback: u } = n;
    e = a(e);
    const { key: p, value: l, type: g } = s, E = d(this, q, ct).call(this, g, !1);
    d(this, z, ut).call(this, E, { ...s, open: c }), d(this, I, it).call(this, E);
    const w = e.find("& > .node__children > ul");
    r === "before" ? w.prepend(E) : w.append(E), (g === h.ARRAY || g === h.OBJECT) && u && typeof u == "function" && u(E.get(0), l), i && d(this, A, T).call(this);
  }
  /**
   * remove node
   * @param {HTMLElement} $node
   * @param {boolean} useUpdate
   */
  removeNode(e, n = !0) {
    e = a(e), e.remove(), n && d(this, A, T).call(this);
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
      value: d(this, ot, Pt).call(this, s),
      type: n,
      open: s.hasClass("open")
    }, c = s.find("& > .node__children > .tree").html(), u = s.hasClass("root");
    s.empty(), s.html(d(this, q, ct).call(this, n, u).html()), c && s.find("& > .node__children > .tree").html(c), d(this, z, ut).call(this, s, r), d(this, I, it).call(this, s), s.attr("data-type", n), i && d(this, A, T).call(this);
  }
  /**
   * duplicate
   * @param {HTMLElement} $target
   * @param {boolean} useUpdate
   */
  duplicate(e, n = !0) {
    e = a(e);
    const i = a(e.get(0).outerHTML);
    d(this, I, it).call(this, i), e.after(i), n && d(this, A, T).call(this);
  }
  fold(e, n) {
    e = a(e), n === void 0 ? e.toggleClass("open") : n === !0 ? e.addClass("open") : e.removeClass("open");
  }
  clear() {
    f(this, L).tree && (f(this, L).wrap.empty(), this.replace({}, !1), d(this, A, T).call(this));
  }
  destroy() {
    a(window).off(F.END).off(Z.CLICK).off(Z.KEYUP), f(this, L).wrap.empty();
  }
  /**
   * replace
   * @param {object|array} src
   * @param {boolean} useUpdate
   */
  replace(e, n = !0) {
    f(this, L).wrap.empty(), e = On(e);
    const i = d(this, wt, Ae).call(this, e);
    this.import(i, e, !1), n && d(this, A, T).call(this);
  }
  /**
   * import data
   * @param {HTMLElement} target
   * @param {object|array} src
   * @param {boolean} useUpdate
   */
  import(e, n, i = !0) {
    a.each(n, (s, r) => {
      const c = ne(r), u = { key: s, value: r, type: c };
      this.addNode(e, {
        data: u,
        open: !1,
        callback: (p, l) => this.import(p, l, !1)
      }, !1);
    }), i && d(this, A, T).call(this);
  }
  /**
   * export
   * @param {boolean} json
   * @param {number|boolean} space (number: space count, true: tab, false: 0)
   * @return {array|object}
   */
  export(e = !1, n = 2) {
    let i = d(this, at, Dt).call(this);
    if (e) {
      let s = 2;
      return n === !0 ? s = "	" : typeof n === h.NUMBER && (s = n), JSON.stringify(i, null, s);
    } else
      return i;
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
L = new WeakMap(), y = new WeakMap(), Ht = new WeakMap(), K = new WeakMap(), Ct = new WeakSet(), Re = function(e, n, i) {
  switch (e[n] = i, n) {
    case "theme":
      d(this, rt, Mt).call(this, i);
      break;
  }
  return !0;
}, rt = new WeakSet(), Mt = function(e) {
  e = ["system", "light", "dark"].indexOf(e) > -1 ? e : "system", f(this, L).wrap.attr("data-theme", e);
}, q = new WeakSet(), ct = function(e, n = !1) {
  let i = `<li data-type="${e}" class="node${n ? " root" : ""}">`;
  return i += '<div class="node__body">', n || (i += `<div class="sort">${An}</div>`), i += '<div class="type"><button type="button"></button></div>', (e === h.OBJECT || e === h.ARRAY) && (i += `<button type="button" class="fold">${Rn}</button>`), n || (i += '<div class="key"></div>'), i += '<em class="count"></em>', n || (i += '<div class="value"></div>'), i += "</div>", i += '<div class="node__children"><ul class="tree"/></div>', i += "</li>", a(i);
}, wt = new WeakSet(), Ae = function(e) {
  const n = ne(e), i = d(this, q, ct).call(this, n, !0);
  return d(this, z, ut).call(this, i, {
    key: void 0,
    value: e,
    type: n,
    open: !0
  }), d(this, I, it).call(this, i), f(this, L).tree = a("<ul/>"), f(this, L).tree.append(i), f(this, L).wrap.append(f(this, L).tree), i;
}, vt = new WeakSet(), xe = function(e, n, i) {
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
}, z = new WeakSet(), ut = function(e, n) {
  const { key: i, value: s, type: r, open: c } = n, u = e.hasClass("root"), p = e.children(".node__body");
  if (p.find(".type > button").html(`<i class="type-icon type-icon--${r}">${Ne[r]}</i>`), (r === h.OBJECT || r === h.ARRAY) && this.fold(e, c), !u) {
    p.find(".key").html(`<div class="label-field" contenteditable="true" data-placeholder="empty">${i}</div>`);
    const l = p.find(".value");
    let g;
    switch (r) {
      case h.STRING:
        l.html(`<div contenteditable="true" data-placeholder="empty" class="label-field type-string">${String(s)}</div>`);
        break;
      case h.NUMBER:
        g = Number(s), isNaN(g) && (g = 0), l.html(`<input type="number" value="${g}" placeholder="0" class="label-field type-number"/>`);
        break;
      case h.BOOLEAN:
        g = s === "false" ? !1 : !!s, l.html(`<button type="button" data-value="${g}" class="label-switch type-boolean"><span><i>${g.toString().toUpperCase()}</i></span></button>`);
        break;
      case h.NULL:
        l.html('<em class="label-null type-null">NULL</em>');
        break;
    }
  }
  if (r === h.OBJECT || r === h.ARRAY) {
    const l = $n(s);
    isNaN(l) || p.find(".count").text(l);
  }
}, X = new WeakSet(), lt = function(e) {
  return String(e.data("type"));
}, ot = new WeakSet(), Pt = function(e) {
  const n = d(this, X, lt).call(this, e), i = e.find("& > .node__body > .value");
  switch (n) {
    case h.OBJECT:
    case h.ARRAY:
      return "";
    case h.STRING:
      return i.children(".type-string").text() || "";
    case h.NUMBER:
      return Number(i.children(".type-number").val());
    case h.BOOLEAN:
      return i.children(".type-boolean").data("value");
    case h.NULL:
      return null;
  }
}, A = new WeakSet(), T = function() {
  this.options.live && this.preview && typeof this.preview == "function" && this.preview(d(this, at, Dt).call(this));
}, at = new WeakSet(), Dt = function() {
  const e = (s, r) => {
    let c = r === h.ARRAY ? [] : {};
    return s.find("& > .node__children > ul > li").each((p, l) => {
      if (!(r === h.ARRAY || r === h.OBJECT))
        return !0;
      l = a(l);
      const g = d(this, X, lt).call(this, l);
      switch (g) {
        case h.OBJECT:
        case h.ARRAY:
          switch (r) {
            case h.ARRAY:
              c.push(e(l, g));
              break;
            case h.OBJECT:
              const w = l.find("& > .node__body > .key").text();
              w && (c[w] = e(l, g));
              break;
          }
          break;
        case h.STRING:
        case h.NUMBER:
        case h.BOOLEAN:
        case h.NULL:
          const E = d(this, ot, Pt).call(this, l);
          switch (r) {
            case h.ARRAY:
              c.push(E);
              break;
            case h.OBJECT:
              const w = l.find("& > .node__body > .key").text();
              w && (c[w] = E);
              break;
          }
          break;
      }
    }), c;
  }, n = f(this, L).tree.children(".node"), i = d(this, X, lt).call(this, n);
  return e(n, i);
}, I = new WeakSet(), it = function(e) {
  const n = e.find(".sort");
  n.length && n.on(F.START, d(this, Nt, Te).bind(this)), e.find(".type > button").on("click", async (u) => {
    const p = a(u.currentTarget);
    if (u.stopPropagation(), p.parent().hasClass("open"))
      this.context && this.context.close();
    else {
      this.context && this.context.close();
      const l = p.closest(".node").hasClass("root");
      this.context = new Tn(this, p.closest(".node"), l), this.context.selectItem = (g, E, w) => d(this, vt, xe).call(this, g, E, w);
    }
  }), e.find(".fold").on("click", (u) => {
    const l = a(u.currentTarget).closest(".node");
    this.fold(l);
  });
  const i = e.find(".key > .label-field");
  i.length && i.on("keydown", (u) => {
    if (u.keyCode === 13 || ie(u))
      return u.preventDefault();
  }).on("input", (u) => d(this, Q, ft).call(this, u)).on("blur", (u) => d(this, tt, ht).call(this, u));
  const s = e.find(".value > .type-string");
  s.length && s.on("keydown", (u) => {
    if (ie(u))
      return u.preventDefault();
  }).on("input", (u) => d(this, Q, ft).call(this, u)).on("blur", (u) => d(this, tt, ht).call(this, u));
  const r = e.find(".value > .type-number");
  r.length && r.on("input", (u) => d(this, Q, ft).call(this, u)).on("blur", (u) => d(this, tt, ht).call(this, u));
  const c = e.find(".value > .type-boolean");
  c.length && c.on("click", (u) => {
    const p = a(u.currentTarget), l = !p.data("value");
    p.data("value", l).find("i").text(l.toString().toUpperCase()), d(this, A, T).call(this);
  });
}, Q = new WeakSet(), ft = function() {
  P(this, K, !0);
}, tt = new WeakSet(), ht = function() {
  f(this, K) && (d(this, A, T).call(this), P(this, K, !1));
}, Nt = new WeakSet(), Te = function(e) {
  if (P(this, y, {}), f(this, y).$node = a(e.currentTarget).closest(".node"), f(this, y).$area = f(this, y).$node.parent(), f(this, y).$nodes = f(this, y).$area.children(".node"), f(this, y).$nodes.length < 2) {
    P(this, y, void 0);
    return;
  }
  f(this, y).$nodes.on(F.MOVE, d(this, Et, Oe).bind(this)), a(window).on(F.END, d(this, kt, $e).bind(this));
}, Et = new WeakSet(), Oe = function(e) {
  const n = a(e.currentTarget), i = n.children(".node__body");
  if (!(i.length > 0))
    return;
  const { y: s, height: r } = i.get(0).getBoundingClientRect(), c = r * 0.5 < e.y - s;
  if (f(this, y).activeNode || (f(this, L).wrap.addClass("dragging"), f(this, y).$area.addClass("drag-area"), f(this, y).$node.addClass("drag-select")), f(this, y).activeNode !== n.get(0))
    f(this, y).activeNode && a(f(this, y).activeNode).removeClass(nt.ALL), f(this, y).activeNode = n.get(0);
  else if (f(this, y).half === c)
    return;
  f(this, y).half = c, n.removeClass(nt.ALL).addClass(c ? nt.END : nt.START);
}, kt = new WeakSet(), $e = function(e) {
  f(this, L).wrap.removeClass("dragging"), f(this, y).$area.removeClass("drag-area"), f(this, y).$node.removeClass("drag-select"), f(this, y).$nodes.removeClass(nt.ALL), f(this, y).$nodes.off(F.MOVE), a(window).off(F.END), f(this, y).half ? f(this, y).$node.insertAfter(f(this, y).activeNode) : f(this, y).$node.insertBefore(f(this, y).activeNode), P(this, y, void 0), d(this, A, T).call(this);
};
export {
  _n as default
};
