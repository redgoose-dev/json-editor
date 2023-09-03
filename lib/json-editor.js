var $e = Object.defineProperty;
var Me = (t, e, n) => e in t ? $e(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var F = (t, e, n) => (Me(t, typeof e != "symbol" ? e + "" : e, n), n), St = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var g = (t, e, n) => (St(t, e, "read from private field"), n ? n.call(t) : e.get(t)), C = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, $ = (t, e, n, i) => (St(t, e, "write to private field"), i ? i.call(t, n) : e.set(t, n), n);
var h = (t, e, n) => (St(t, e, "access private method"), n);
const O = document, gt = window, re = O.documentElement, j = O.createElement.bind(O), oe = j("div"), _t = j("table"), De = j("tbody"), qt = j("tr"), { isArray: Lt, prototype: ce } = Array, { concat: Pe, filter: Ut, indexOf: ae, map: ue, push: He, slice: le, some: jt, splice: Ie } = ce, Ue = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, je = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ve = /<.+>/, Ye = /^\w+$/;
function Vt(t, e) {
  const n = Je(e);
  return !t || !n && !U(e) && !w(e) ? [] : !n && je.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && Ye.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class Tt {
  constructor(e, n) {
    if (!e)
      return;
    if (Mt(e))
      return e;
    let i = e;
    if (N(e)) {
      const s = n || O;
      if (i = Ue.test(e) && U(s) ? s.getElementById(e.slice(1).replace(/\\/g, "")) : Ve.test(e) ? de(e) : Mt(s) ? s.find(e) : N(s) ? o(s).find(e) : Vt(e, s), !i)
        return;
    } else if (V(e))
      return this.ready(e);
    (i.nodeType || i === gt) && (i = [i]), this.length = i.length;
    for (let s = 0, r = this.length; s < r; s++)
      this[s] = i[s];
  }
  init(e, n) {
    return new Tt(e, n);
  }
}
const a = Tt.prototype, o = a.init;
o.fn = o.prototype = a;
a.length = 0;
a.splice = Ie;
typeof Symbol == "function" && (a[Symbol.iterator] = ce[Symbol.iterator]);
function Mt(t) {
  return t instanceof Tt;
}
function et(t) {
  return !!t && t === t.window;
}
function U(t) {
  return !!t && t.nodeType === 9;
}
function Je(t) {
  return !!t && t.nodeType === 11;
}
function w(t) {
  return !!t && t.nodeType === 1;
}
function Fe(t) {
  return !!t && t.nodeType === 3;
}
function Ze(t) {
  return typeof t == "boolean";
}
function V(t) {
  return typeof t == "function";
}
function N(t) {
  return typeof t == "string";
}
function A(t) {
  return t === void 0;
}
function ot(t) {
  return t === null;
}
function fe(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function Yt(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
o.isWindow = et;
o.isFunction = V;
o.isArray = Lt;
o.isNumeric = fe;
o.isPlainObject = Yt;
function v(t, e, n) {
  if (n) {
    let i = t.length;
    for (; i--; )
      if (e.call(t[i], i, t[i]) === !1)
        return t;
  } else if (Yt(t)) {
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
o.each = v;
a.each = function(t) {
  return v(this, t);
};
a.empty = function() {
  return this.each((t, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function yt(...t) {
  const e = Ze(t[0]) ? t.shift() : !1, n = t.shift(), i = t.length;
  if (!n)
    return {};
  if (!i)
    return yt(e, o, n);
  for (let s = 0; s < i; s++) {
    const r = t[s];
    for (const u in r)
      e && (Lt(r[u]) || Yt(r[u])) ? ((!n[u] || n[u].constructor !== r[u].constructor) && (n[u] = new r[u].constructor()), yt(e, n[u], r[u])) : n[u] = r[u];
  }
  return n;
}
o.extend = yt;
a.extend = function(t) {
  return yt(a, t);
};
const We = /\S+/g;
function xt(t) {
  return N(t) ? t.match(We) || [] : [];
}
a.toggleClass = function(t, e) {
  const n = xt(t), i = !A(e);
  return this.each((s, r) => {
    w(r) && v(n, (u, c) => {
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
    w(i) && v(e, (s, r) => {
      i.removeAttribute(r);
    });
  });
};
function Ge(t, e) {
  if (t) {
    if (N(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !w(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return ot(n) ? void 0 : n;
      }
      return A(e) ? this : ot(e) ? this.removeAttr(t) : this.each((n, i) => {
        w(i) && i.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
a.attr = Ge;
a.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
a.hasClass = function(t) {
  return !!t && jt.call(this, (e) => w(e) && e.classList.contains(t));
};
a.get = function(t) {
  return A(t) ? le.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
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
function Ke(t) {
  return A(t) ? this.get().map((e) => w(e) || Fe(e) ? e.textContent : "").join("") : this.each((e, n) => {
    w(n) && (n.textContent = t);
  });
}
a.text = Ke;
function S(t, e, n) {
  if (!w(t))
    return;
  const i = gt.getComputedStyle(t, null);
  return n ? i.getPropertyValue(e) || void 0 : i[e] || t.style[e];
}
function T(t, e) {
  return parseInt(S(t, e), 10) || 0;
}
function zt(t, e) {
  return T(t, `border${e ? "Left" : "Top"}Width`) + T(t, `padding${e ? "Left" : "Top"}`) + T(t, `padding${e ? "Right" : "Bottom"}`) + T(t, `border${e ? "Right" : "Bottom"}Width`);
}
const Bt = {};
function qe(t) {
  if (Bt[t])
    return Bt[t];
  const e = j(t);
  O.body.insertBefore(e, null);
  const n = S(e, "display");
  return O.body.removeChild(e), Bt[t] = n !== "none" ? n : "block";
}
function Xt(t) {
  return S(t, "display") === "none";
}
function he(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function Ot(t) {
  return N(t) ? (e, n) => he(n, t) : V(t) ? t : Mt(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
a.filter = function(t) {
  const e = Ot(t);
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
const ze = /^\s*<(\w+)[^>]*>/, Xe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Qt = {
  "*": oe,
  tr: De,
  td: qt,
  th: qt,
  thead: _t,
  tbody: _t,
  tfoot: _t
};
function de(t) {
  if (!N(t))
    return [];
  if (Xe.test(t))
    return [j(RegExp.$1)];
  const e = ze.test(t) && RegExp.$1, n = Qt[e] || Qt["*"];
  return n.innerHTML = t, o(n.childNodes).detach().get();
}
o.parseHTML = de;
a.has = function(t) {
  const e = N(t) ? (n, i) => Vt(t, i).length : (n, i) => i.contains(t);
  return this.filter(e);
};
a.not = function(t) {
  const e = Ot(t);
  return this.filter((n, i) => (!N(t) || w(i)) && !e.call(i, n, i));
};
function _(t, e, n, i) {
  const s = [], r = V(e), u = i && Ot(i);
  for (let c = 0, d = t.length; c < d; c++)
    if (r) {
      const l = e(t[c]);
      l.length && He.apply(s, l);
    } else {
      let l = t[c][e];
      for (; l != null && !(i && u(-1, l)); )
        s.push(l), l = n ? l[e] : null;
    }
  return s;
}
function pe(t) {
  return t.multiple && t.options ? _(Ut.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function Qe(t) {
  return arguments.length ? this.each((e, n) => {
    const i = n.multiple && n.options;
    if (i || Ee.test(n.type)) {
      const s = Lt(t) ? ue.call(t, String) : ot(t) ? [] : [String(t)];
      i ? v(n.options, (r, u) => {
        u.selected = s.indexOf(u.value) >= 0;
      }, !0) : n.checked = s.indexOf(n.value) >= 0;
    } else
      n.value = A(t) || ot(t) ? "" : t;
  }) : this[0] && pe(this[0]);
}
a.val = Qe;
a.is = function(t) {
  const e = Ot(t);
  return jt.call(this, (n, i) => e.call(n, i, n));
};
o.guid = 1;
function x(t) {
  return t.length > 1 ? Ut.call(t, (e, n, i) => ae.call(i, e) === n) : t;
}
o.unique = x;
a.add = function(t, e) {
  return o(x(this.get().concat(o(t, e).get())));
};
a.children = function(t) {
  return M(o(x(_(this, (e) => e.children))), t);
};
a.parent = function(t) {
  return M(o(x(_(this, "parentNode"))), t);
};
a.index = function(t) {
  const e = t ? o(t)[0] : this[0], n = t ? this : o(e).parent().children();
  return ae.call(n, e);
};
a.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const n = this.parent();
  return n.length ? n.closest(t) : e;
};
a.siblings = function(t) {
  return M(o(x(_(this, (e) => o(e).parent().children().not(e)))), t);
};
a.find = function(t) {
  return o(x(_(this, (e) => Vt(t, e))));
};
const tn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, en = /^$|^module$|\/(java|ecma)script/i, nn = ["type", "src", "nonce", "noModule"];
function sn(t, e) {
  const n = o(t);
  n.filter("script").add(n.find("script")).each((i, s) => {
    if (en.test(s.type) && re.contains(s)) {
      const r = j("script");
      r.text = s.textContent.replace(tn, ""), v(nn, (u, c) => {
        s[c] && (r[c] = s[c]);
      }), e.head.insertBefore(r, null), e.head.removeChild(r);
    }
  });
}
function rn(t, e, n, i, s) {
  i ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), s && sn(e, t.ownerDocument);
}
function D(t, e, n, i, s, r, u, c) {
  return v(t, (d, l) => {
    v(o(l), (p, R) => {
      v(o(e), (L, b) => {
        const B = n ? R : b, m = n ? b : R, Y = n ? p : L;
        rn(B, Y ? m.cloneNode(!0) : m, i, s, !Y);
      }, c);
    }, u);
  }, r), e;
}
a.after = function() {
  return D(arguments, this, !1, !1, !1, !0, !0);
};
a.append = function() {
  return D(arguments, this, !1, !1, !0);
};
function on(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (A(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, i) => {
    w(i) && (e ? o(i).empty().append(t) : i.innerHTML = t);
  });
}
a.html = on;
a.appendTo = function(t) {
  return D(arguments, this, !0, !1, !0);
};
a.wrapInner = function(t) {
  return this.each((e, n) => {
    const i = o(n), s = i.contents();
    s.length ? s.wrapAll(t) : i.append(t);
  });
};
a.before = function() {
  return D(arguments, this, !1, !0);
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
  return D(arguments, this, !0, !1, !1, !1, !1, !0);
};
a.insertBefore = function(t) {
  return D(arguments, this, !0, !0);
};
a.prepend = function() {
  return D(arguments, this, !1, !0, !0, !0, !0);
};
a.prependTo = function(t) {
  return D(arguments, this, !0, !0, !0, !1, !1, !0);
};
a.contents = function() {
  return o(x(_(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
a.next = function(t, e, n) {
  return M(o(x(_(this, "nextElementSibling", e, n))), t);
};
a.nextAll = function(t) {
  return this.next(t, !0);
};
a.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
a.parents = function(t, e) {
  return M(o(x(_(this, "parentElement", !0, e))), t);
};
a.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
a.prev = function(t, e, n) {
  return M(o(x(_(this, "previousElementSibling", e, n))), t);
};
a.prevAll = function(t) {
  return this.prev(t, !0);
};
a.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
a.map = function(t) {
  return o(Pe.apply([], ue.call(this, (e, n) => t.call(e, n, e))));
};
a.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
a.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && S(n, "position") === "static"; )
      n = n.offsetParent;
    return n || re;
  });
};
a.slice = function(t, e) {
  return o(le.call(this, t, e));
};
const cn = /-([a-z])/g;
function Jt(t) {
  return t.replace(cn, (e, n) => n.toUpperCase());
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
    top: e.top + gt.pageYOffset,
    left: e.left + gt.pageXOffset
  };
};
a.position = function() {
  const t = this[0];
  if (!t)
    return;
  const e = S(t, "position") === "fixed", n = e ? t.getBoundingClientRect() : this.offset();
  if (!e) {
    const i = t.ownerDocument;
    let s = t.offsetParent || i.documentElement;
    for (; (s === i.body || s === i.documentElement) && S(s, "position") === "static"; )
      s = s.parentNode;
    if (s !== t && w(s)) {
      const r = o(s).offset();
      n.top -= r.top + T(s, "borderTopWidth"), n.left -= r.left + T(s, "borderLeftWidth");
    }
  }
  return {
    top: n.top - T(t, "marginTop"),
    left: n.left - T(t, "marginLeft")
  };
};
const ge = {
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
    if (N(t))
      return t = ge[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, i) => {
        i[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
a.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[ge[t] || t];
  });
};
const an = /^--/;
function Ft(t) {
  return an.test(t);
}
const $t = {}, { style: un } = oe, ln = ["webkit", "moz", "ms"];
function fn(t, e = Ft(t)) {
  if (e)
    return t;
  if (!$t[t]) {
    const n = Jt(t), i = `${n[0].toUpperCase()}${n.slice(1)}`, s = `${n} ${ln.join(`${i} `)}${i}`.split(" ");
    v(s, (r, u) => {
      if (u in un)
        return $t[t] = u, !1;
    });
  }
  return $t[t];
}
const hn = {
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
function ye(t, e, n = Ft(t)) {
  return !n && !hn[t] && fe(e) ? `${e}px` : e;
}
function dn(t, e) {
  if (N(t)) {
    const n = Ft(t);
    return t = fn(t, n), arguments.length < 2 ? this[0] && S(this[0], t, n) : t ? (e = ye(t, e, n), this.each((i, s) => {
      w(s) && (n ? s.style.setProperty(t, e) : s.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
a.css = dn;
function me(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const pn = /^\s+|\s+$/;
function te(t, e) {
  const n = t.dataset[e] || t.dataset[Jt(e)];
  return pn.test(n) ? n : me(JSON.parse, n);
}
function gn(t, e, n) {
  n = me(JSON.stringify, n), t.dataset[Jt(e)] = n;
}
function yn(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const i in this[0].dataset)
      n[i] = te(this[0], i);
    return n;
  }
  if (N(t))
    return arguments.length < 2 ? this[0] && te(this[0], t) : A(e) ? this : this.each((n, i) => {
      gn(i, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
a.data = yn;
function be(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
v([!0, !1], (t, e) => {
  v(["Width", "Height"], (n, i) => {
    const s = `${e ? "outer" : "inner"}${i}`;
    a[s] = function(r) {
      if (this[0])
        return et(this[0]) ? e ? this[0][`inner${i}`] : this[0].document.documentElement[`client${i}`] : U(this[0]) ? be(this[0], i) : this[0][`${e ? "offset" : "client"}${i}`] + (r && e ? T(this[0], `margin${n ? "Top" : "Left"}`) + T(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
v(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  a[n] = function(i) {
    if (!this[0])
      return A(i) ? void 0 : this;
    if (!arguments.length)
      return et(this[0]) ? this[0].document.documentElement[`client${e}`] : U(this[0]) ? be(this[0], e) : this[0].getBoundingClientRect()[n] - zt(this[0], !t);
    const s = parseInt(i, 10);
    return this.each((r, u) => {
      if (!w(u))
        return;
      const c = S(u, "boxSizing");
      u.style[n] = ye(n, s + (c === "border-box" ? zt(u, !t) : 0));
    });
  };
});
const ee = "___cd";
a.toggle = function(t) {
  return this.each((e, n) => {
    if (!w(n))
      return;
    const i = Xt(n);
    (A(t) ? i : t) ? (n.style.display = n[ee] || "", Xt(n) && (n.style.display = qe(n.tagName))) : i || (n[ee] = S(n, "display"), n.style.display = "none");
  });
};
a.hide = function() {
  return this.toggle(!1);
};
a.show = function() {
  return this.toggle(!0);
};
const ne = "___ce", Zt = ".", Wt = { focus: "focusin", blur: "focusout" }, Ce = { mouseenter: "mouseover", mouseleave: "mouseout" }, mn = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Gt(t) {
  return Ce[t] || Wt[t] || t;
}
function Kt(t) {
  const e = t.split(Zt);
  return [e[0], e.slice(1).sort()];
}
a.trigger = function(t, e) {
  if (N(t)) {
    const [i, s] = Kt(t), r = Gt(i);
    if (!r)
      return this;
    const u = mn.test(r) ? "MouseEvents" : "HTMLEvents";
    t = O.createEvent(u), t.initEvent(r, !0, !0), t.namespace = s.join(Zt), t.___ot = i;
  }
  t.___td = e;
  const n = t.___ot in Wt;
  return this.each((i, s) => {
    n && V(s[t.___ot]) && (s[`___i${t.type}`] = !0, s[t.___ot](), s[`___i${t.type}`] = !1), s.dispatchEvent(t);
  });
};
function we(t) {
  return t[ne] = t[ne] || {};
}
function bn(t, e, n, i, s) {
  const r = we(t);
  r[e] = r[e] || [], r[e].push([n, i, s]), t.addEventListener(e, s);
}
function ve(t, e) {
  return !e || !jt.call(e, (n) => t.indexOf(n) < 0);
}
function mt(t, e, n, i, s) {
  const r = we(t);
  if (e)
    r[e] && (r[e] = r[e].filter(([u, c, d]) => {
      if (s && d.guid !== s.guid || !ve(u, n) || i && i !== c)
        return !0;
      t.removeEventListener(e, d);
    }));
  else
    for (e in r)
      mt(t, e, n, i, s);
}
a.off = function(t, e, n) {
  if (A(t))
    this.each((i, s) => {
      !w(s) && !U(s) && !et(s) || mt(s);
    });
  else if (N(t))
    V(e) && (n = e, e = ""), v(xt(t), (i, s) => {
      const [r, u] = Kt(s), c = Gt(r);
      this.each((d, l) => {
        !w(l) && !U(l) && !et(l) || mt(l, c, u, e, n);
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
function Cn(t, e, n, i, s) {
  if (!N(t)) {
    for (const r in t)
      this.on(r, e, n, t[r], s);
    return this;
  }
  return N(e) || (A(e) || ot(e) ? e = "" : A(n) ? (n = e, e = "") : (i = n, n = e, e = "")), V(i) || (i = n, n = void 0), i ? (v(xt(t), (r, u) => {
    const [c, d] = Kt(u), l = Gt(c), p = c in Ce, R = c in Wt;
    l && this.each((L, b) => {
      if (!w(b) && !U(b) && !et(b))
        return;
      const B = function(m) {
        if (m.target[`___i${m.type}`])
          return m.stopImmediatePropagation();
        if (m.namespace && !ve(d, m.namespace.split(Zt)) || !e && (R && (m.target !== b || m.___ot === l) || p && m.relatedTarget && b.contains(m.relatedTarget)))
          return;
        let Y = b;
        if (e) {
          let J = m.target;
          for (; !he(J, e); )
            if (J === b || (J = J.parentNode, !J))
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
            return b;
          }
        }), Object.defineProperty(m, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const Be = i.call(Y, m, m.___td);
        s && mt(b, l, d, e, B), Be === !1 && (m.preventDefault(), m.stopPropagation());
      };
      B.guid = i.guid = i.guid || o.guid++, bn(b, l, d, e, B);
    });
  }), this) : this;
}
a.on = Cn;
function wn(t, e, n, i) {
  return this.on(t, e, n, i, !0);
}
a.one = wn;
const vn = /\r?\n/g;
function En(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(vn, `\r
`))}`;
}
const Nn = /file|reset|submit|button|image/i, Ee = /radio|checkbox/i;
a.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    v(n.elements || [n], (i, s) => {
      if (s.disabled || !s.name || s.tagName === "FIELDSET" || Nn.test(s.type) || Ee.test(s.type) && !s.checked)
        return;
      const r = pe(s);
      if (!A(r)) {
        const u = Lt(r) ? r : [r];
        v(u, (c, d) => {
          t += En(s.name, d);
        });
      }
    });
  }), t.slice(1);
};
const kn = {
  live: !1,
  // live update
  theme: "system",
  // system,light,dark
  edit: "all"
  // all,value,none
}, An = {
  open: !0,
  callback: void 0
}, f = {
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
}, Rn = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12L10 8L6 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', Ln = '<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-90, 10, 10)"><path d="M7 9L10 12L13 9" fill="currentColor"/><path d="M7 9L10 12L13 9H7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>', Tn = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', Ne = {
  object: '<svg viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-object"><g transform="translate(0 1)"><path d="M2.296 5.166C2.296 7.238 3.78 8.162 5.166 8.162C6.538 8.162 8.022 7.238 8.022 5.166C8.022 3.094 6.538 2.156 5.166 2.156C3.78 2.156 2.296 3.094 2.296 5.166ZM0 5.18C0 2.03 2.366 0 5.166 0C7.952 0 10.318 2.03 10.318 5.18C10.318 8.316 7.952 10.346 5.166 10.346C2.366 10.346 0 8.316 0 5.18Z" fill="currentColor"/></g></svg>',
  array: '<svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-array"><path d="M7.728 9.926L6.902 7.658H2.87L2.044 9.926H0L3.808 0H6.048L9.828 9.926H7.728ZM4.886 2.142L3.514 5.894H6.258L4.886 2.142Z" fill="currentColor"/></svg>',
  string: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-string"><g transform="translate(0 1)"><path d="M7.39203 2.576L5.65603 3.108C5.55803 2.562 5.11003 1.708 3.85003 1.708C2.91203 1.708 2.29603 2.31 2.29603 2.968C2.29603 3.514 2.64603 3.948 3.37403 4.088L4.76003 4.354C6.56603 4.704 7.53203 5.88 7.53203 7.28C7.53203 8.806 6.25803 10.346 3.94803 10.346C1.31603 10.346 0.154031 8.652 3.05176e-05 7.238L1.79203 6.762C1.87603 7.742 2.56203 8.624 3.96203 8.624C4.99803 8.624 5.57203 8.106 5.57203 7.406C5.57203 6.832 5.13803 6.384 4.36803 6.23L2.98203 5.95C1.40003 5.628 0.378031 4.606 0.378031 3.108C0.378031 1.344 1.96003 0 3.83603 0C6.24403 0 7.16803 1.456 7.39203 2.576Z" fill="currentColor"/></g></svg>',
  number: '<svg viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-number"><path d="M8.47003 9.926H6.44003L1.93203 2.884V9.926H3.05176e-05V0H2.40803L6.53803 6.566V0H8.47003V9.926Z" fill="currentColor"/></svg>',
  boolean: '<svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-boolean"><path d="M3.05176e-05 0H3.57003C5.50203 0 6.59403 1.134 6.59403 2.674C6.59403 3.696 5.97803 4.522 5.15203 4.802C6.11803 5.04 6.90203 5.922 6.90203 7.154C6.90203 8.764 5.69803 9.926 3.83603 9.926H3.05176e-05V0ZM1.90403 4.102H3.27603C4.15803 4.102 4.69003 3.612 4.69003 2.856C4.69003 2.1 4.20003 1.624 3.26203 1.624H1.90403V4.102ZM1.90403 8.316H3.47203C4.41003 8.316 4.97003 7.826 4.97003 7.028C4.97003 6.244 4.46603 5.698 3.50003 5.698H1.90403V8.316Z" fill="currentColor"/></svg>',
  null: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-null"><g transform="translate(0 1.5)"><path d="M3.808 10.15C1.694 10.15 0 8.848 0 6.412V0H1.932V6.272C1.932 7.574 2.66 8.26 3.808 8.26C4.984 8.26 5.698 7.574 5.698 6.272V0H7.63V6.412C7.63 8.848 5.936 10.15 3.808 10.15Z" fill="currentColor"/></g></svg>'
}, xn = [
  {
    key: "change-type",
    label: "Change type",
    children: [
      { key: f.OBJECT, label: "Object" },
      { key: f.ARRAY, label: "Array" },
      { key: f.STRING, label: "String" },
      { key: f.NUMBER, label: "Number" },
      { key: f.BOOLEAN, label: "Boolean" },
      { key: f.NULL, label: "Null" }
    ]
  },
  {
    key: "insert",
    label: "Insert",
    children: [
      { key: f.OBJECT, label: "Object" },
      { key: f.ARRAY, label: "Array" },
      { key: f.STRING, label: "String" },
      { key: f.NUMBER, label: "Number" },
      { key: f.BOOLEAN, label: "Boolean" },
      { key: f.NULL, label: "Null" }
    ]
  },
  { key: "duplicate", label: "Duplicate" },
  { key: "remove", label: "Remove" }
];
var G, K, bt, ke, Ct, Ae, wt, Re;
class On {
  constructor(e, n, i = !1) {
    C(this, bt);
    C(this, Ct);
    C(this, wt);
    C(this, G, void 0);
    F(this, "el", {
      node: void 0,
      type: void 0,
      dialog: void 0
    });
    C(this, K, void 0);
    $(this, G, e), this.el.node = o(n), $(this, K, String(this.el.node.data("type"))), this.el.type = this.el.node.find("& > .node__body > .type"), this.el.type.addClass("open"), this.el.dialog = h(this, bt, ke).call(this, xn, g(this, K), i), this.el.dialog.on("click", (s) => s.stopPropagation()), this.el.dialog.find("button").on("click", (s) => h(this, Ct, Ae).call(this, s)), g(this, G).el.wrap.get(0).dispatchEvent(new CustomEvent("context", {
      detail: {
        body: this.el.dialog.get(0),
        node: this.el.node.get(0),
        type: g(this, K),
        isRoot: i,
        $: o
      }
    })), this.el.type.append(this.el.dialog), o(window).on(W.CLICK, (s) => this.close(s)), o(window).on(W.KEYUP, (s) => h(this, wt, Re).call(this, s));
  }
  close() {
    this.el.type.removeClass("open"), this.el.dialog.remove(), o(window).off(W.CLICK), o(window).off(W.KEYUP), delete g(this, G).context;
  }
}
G = new WeakMap(), K = new WeakMap(), bt = new WeakSet(), ke = function(e, n, i = !1) {
  function s(c, d) {
    let l = "";
    const { key: p, label: R, children: L } = c;
    if (i)
      switch (p) {
        case f.STRING:
        case f.NUMBER:
        case f.BOOLEAN:
        case f.NULL:
          if (d === "change-type")
            return "";
          break;
        case "duplicate":
        case "remove":
          return "";
      }
    let b = "", B = "", m = "";
    switch (p) {
      case "change-type":
        b = ' class="dropdown"', m = " disabled";
        break;
      case "insert":
        if ([f.STRING, f.NUMBER, f.BOOLEAN, f.NULL].indexOf(n) > -1)
          return "";
        b = ' class="dropdown"', m = " disabled";
        break;
      case "duplicate":
        b = ' class="duplicate"', m = ' data-mode="duplicate"';
        break;
      case "remove":
        b = ' class="remove"', m = ' data-mode="remove"';
        break;
      case f.OBJECT:
      case f.ARRAY:
      case f.STRING:
      case f.NUMBER:
      case f.BOOLEAN:
      case f.NULL:
        b = ' class="type"', B = `<i class="type-icon type-icon--${p}">${Ne[p]}</i>`, m = ` data-mode="${d}" data-type="${p}"`, d === "change-type" && p === n && (m = " disabled");
        break;
    }
    return l += `<li${b}>`, l += `<button type="button"${m}>`, l += B, l += `<em class="label">${R}</em>`, (p === "change-type" || p === "insert") && (l += `<span class="arrow">${Rn}</span>`), l += "</button>", (L == null ? void 0 : L.length) > 0 && (l += '<div class="children">', l += r(L, p), l += "</div>"), l += "</li>", l;
  }
  function r(c, d = void 0) {
    let l = "<ol>";
    for (let p in c)
      l += s(c[p], d);
    return l += "</ol>", l;
  }
  let u = `<nav class="context${i ? " is-root" : ""}">`;
  return u += r(e), u += "</nav>", o(u);
}, Ct = new WeakSet(), Ae = function(e) {
  const n = o(e.currentTarget), i = n.data("mode");
  let s = String(n.data("type"));
  s = s === "undefined" ? "" : s, this.close(), this.selectItem && typeof this.selectItem == "function" && this.selectItem(this.el.node, i, s);
}, wt = new WeakSet(), Re = function(e) {
  e.code === "Escape" && this.close();
};
function ie(t) {
  return t == null ? "null" : Array.isArray(t) ? "array" : typeof t == "string" ? "string" : typeof t == "number" ? "number" : typeof t == "boolean" ? "boolean" : "object";
}
function Sn(t) {
  try {
    return typeof t == "string" ? JSON.parse(t) : Array.isArray(t) ? Object.assign([], t) : o.isPlainObject(t) ? Object.assign({}, t) : {};
  } catch (e) {
    console.error("error", e.message);
  }
}
function _n(t) {
  return Array.isArray(t) ? t.length : o.isPlainObject(t) ? Object.keys(t).length : 0;
}
function se(t) {
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
var y, q, vt, Le, ct, Dt, z, ft, Et, Te, Nt, xe, X, ht, P, it, at, Pt, E, k, ut, Ht, H, st, lt, It, I, rt, Q, dt, tt, pt, kt, Oe, At, Se, Rt, _e;
class $n {
  constructor(e, n = {}) {
    C(this, vt);
    C(this, ct);
    C(this, z);
    C(this, Et);
    C(this, Nt);
    C(this, X);
    C(this, P);
    C(this, at);
    C(this, E);
    C(this, ut);
    C(this, H);
    C(this, lt);
    /**
     * NODE EVENTS
     */
    C(this, I);
    C(this, Q);
    C(this, tt);
    C(this, kt);
    C(this, At);
    C(this, Rt);
    F(this, "$");
    F(this, "el", { wrap: null, body: null, tree: null });
    F(this, "options");
    F(this, "context");
    C(this, y, void 0);
    C(this, q, !1);
    this.$ = o, this.el.wrap = o(e), this.el.body = o('<div class="json-editor"></div>'), this.options = new Proxy(Object.assign({}, kn, n), {
      get: (i, s) => i[s],
      set: h(this, vt, Le).bind(this)
    }), this.el.wrap.append(this.el.body), h(this, ct, Dt).call(this, this.options.theme), h(this, lt, It).call(this, this.options.edit), this.replace({}, !1);
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
    i = { ...An, ...i };
    const { open: u, callback: c } = i;
    e = o(e);
    const d = n.type === void 0 ? ie(n.value) : n.type, l = h(this, z, ft).call(this, d, !1);
    h(this, X, ht).call(this, l, { ...n, open: u, type: d }), h(this, I, rt).call(this, l), e.find("& > .node__children > ul").append(l), r && h(this, H, st).call(this, e), (d === f.ARRAY || d === f.OBJECT) && c && typeof c == "function" && c(l.get(0), n.value), s && h(this, E, k).call(this);
  }
  /**
   * remove node
   * @param {HTMLElement} $node
   * @param {boolean} useUpdate
   */
  removeNode(e, n = !0) {
    e = o(e);
    const i = e.parent().closest(".node");
    e.remove(), h(this, H, st).call(this, i), n && h(this, E, k).call(this);
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
    s.empty(), s.html(h(this, z, ft).call(this, n, c).html()), u && s.find("& > .node__children > .tree").html(u), h(this, X, ht).call(this, s, r), h(this, I, rt).call(this, s), s.attr("data-type", n), i && h(this, E, k).call(this);
  }
  changeKey(e, n) {
    o(e).find(".key > div").text(n), h(this, E, k).call(this);
  }
  changeValue(e, n) {
    o(e).find(".value > div").text(n), h(this, E, k).call(this);
  }
  /**
   * duplicate
   * @param {HTMLElement} $target
   * @param {boolean} useUpdate
   */
  duplicate(e, n = !0) {
    e = o(e);
    const i = o(e.get(0).outerHTML);
    h(this, I, rt).call(this, i), e.after(i), h(this, H, st).call(this, e.parent().closest(".node")), n && h(this, E, k).call(this);
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
    this.el.tree && (this.el.body.empty(), this.replace({}, !1), h(this, E, k).call(this));
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
    this.el.body.empty(), e = Sn(e);
    const i = h(this, Et, Te).call(this, e);
    this.import(i, e, !1, !1), n && h(this, E, k).call(this);
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
      const c = { key: r, value: u }, d = {
        open: !1,
        callback: (l, p) => this.import(l, p, !1, !1)
      };
      this.addNode(e, c, d, !1, !1);
    }), s && h(this, H, st).call(this, e), i && h(this, E, k).call(this);
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
      return i === !0 ? r = "	" : typeof i === f.NUMBER && (r = i), JSON.stringify(s, null, r);
    } else
      return s;
  }
}
y = new WeakMap(), q = new WeakMap(), vt = new WeakSet(), Le = function(e, n, i) {
  switch (e[n] = i, n) {
    case "theme":
      h(this, ct, Dt).call(this, i);
      break;
    case "edit":
      h(this, lt, It).call(this, i);
      break;
  }
  return !0;
}, ct = new WeakSet(), Dt = function(e) {
  e = ["system", "light", "dark"].indexOf(e) > -1 ? e : "system", this.el.body.attr("data-theme", e);
}, z = new WeakSet(), ft = function(e, n = !1) {
  let i = `<li data-type="${e}" class="node${n ? " root" : ""}">`;
  return i += '<div class="node__body">', n || (i += `<div class="sort">${Tn}</div>`), i += '<div class="type"><button type="button"></button></div>', (e === f.OBJECT || e === f.ARRAY) && (i += `<button type="button" class="fold">${Ln}</button>`), n || (i += '<div class="key"></div>'), i += '<em class="count"></em>', n || (i += '<div class="value"></div>'), i += "</div>", i += '<div class="node__children"><ul class="tree"/></div>', i += "</li>", o(i);
}, Et = new WeakSet(), Te = function(e) {
  const n = ie(e), i = h(this, z, ft).call(this, n, !0);
  return h(this, X, ht).call(this, i, {
    key: void 0,
    value: e,
    type: n,
    open: !0
  }), h(this, I, rt).call(this, i), this.el.tree = o("<ul/>"), this.el.tree.append(i), this.el.body.append(this.el.tree), i;
}, Nt = new WeakSet(), xe = function(e, n, i) {
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
}, X = new WeakSet(), ht = function(e, n) {
  const { key: i, value: s, type: r, open: u } = n, c = e.hasClass("root"), d = e.children(".node__body");
  if (d.find(".type > button").html(`<i class="type-icon type-icon--${r}">${Ne[r]}</i>`), (r === f.OBJECT || r === f.ARRAY) && this.fold(e, u), !c) {
    d.find(".key").html(`<div class="label-field" contenteditable="true" data-placeholder="empty">${i}</div>`);
    const l = d.find(".value");
    let p;
    switch (r) {
      case f.STRING:
        l.html(`<div contenteditable="true" data-placeholder="empty" class="label-field type-string">${String(s)}</div>`);
        break;
      case f.NUMBER:
        p = Number(s), isNaN(p) && (p = 0), l.html(`<input type="number" value="${p}" placeholder="0" class="label-field type-number"/>`);
        break;
      case f.BOOLEAN:
        p = s === "false" ? !1 : !!s, l.html(`<button type="button" data-value="${p}" class="label-switch type-boolean"><span><i>${p.toString().toUpperCase()}</i></span></button>`);
        break;
      case f.NULL:
        l.html('<em class="label-null type-null">NULL</em>');
        break;
    }
  }
  if (r === f.OBJECT || r === f.ARRAY) {
    const l = _n(s);
    isNaN(l) || d.find(".count").text(l);
  }
}, P = new WeakSet(), it = function(e) {
  return String(e.data("type"));
}, at = new WeakSet(), Pt = function(e) {
  const n = h(this, P, it).call(this, e), i = e.find("& > .node__body > .value");
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
}, E = new WeakSet(), k = function() {
  this.options.live && this.el.wrap.get(0).dispatchEvent(new CustomEvent("update", {
    detail: h(this, ut, Ht).call(this)
  }));
}, ut = new WeakSet(), Ht = function(e) {
  const n = (r, u) => {
    let c = u === f.ARRAY ? [] : {};
    return r.find("& > .node__children > ul > li").each((l, p) => {
      if (!(u === f.ARRAY || u === f.OBJECT))
        return !0;
      p = o(p);
      const R = h(this, P, it).call(this, p);
      switch (R) {
        case f.OBJECT:
        case f.ARRAY:
          switch (u) {
            case f.ARRAY:
              c.push(n(p, R));
              break;
            case f.OBJECT:
              const b = p.find("& > .node__body > .key").text();
              b && (c[b] = n(p, R));
              break;
          }
          break;
        case f.STRING:
        case f.NUMBER:
        case f.BOOLEAN:
        case f.NULL:
          const L = h(this, at, Pt).call(this, p);
          switch (u) {
            case f.ARRAY:
              c.push(L);
              break;
            case f.OBJECT:
              const b = p.find("& > .node__body > .key").text();
              b && (c[b] = L);
              break;
          }
          break;
      }
    }), c;
  };
  e = o(e);
  const i = (e == null ? void 0 : e.length) > 0 ? e : this.el.tree.children(".node"), s = h(this, P, it).call(this, i);
  if ([f.OBJECT, f.ARRAY].includes(s))
    return n(i, s);
}, H = new WeakSet(), st = function(e) {
  e = o(e);
  const n = h(this, P, it).call(this, e);
  if (!(n === "object" || n === "array"))
    return;
  const i = e.find("& > .node__children > ul > li").length;
  isNaN(i) || e.find("& > .node__body > .count").text(i);
}, lt = new WeakSet(), It = function(e) {
  e === "all" ? this.el.body.removeAttr("data-edit") : this.el.body.attr("data-edit", e);
}, I = new WeakSet(), rt = function(e) {
  const n = e.find(".sort");
  n.length && n.on(Z.START, h(this, kt, Oe).bind(this)), e.find(".type > button").on("click", async (c) => {
    if (c.stopPropagation(), this.options.edit !== "all")
      return;
    const d = o(c.currentTarget);
    if (d.parent().hasClass("open"))
      this.context && this.context.close();
    else {
      this.context && this.context.close();
      const l = d.closest(".node").hasClass("root");
      this.context = new On(this, d.closest(".node"), l), this.context.selectItem = (p, R, L) => h(this, Nt, xe).call(this, p, R, L);
    }
  }), e.find(".fold").on("click", (c) => {
    const l = o(c.currentTarget).closest(".node");
    this.fold(l);
  });
  const i = e.find(".key > .label-field");
  i.length && i.on("keydown", (c) => {
    if (this.options.edit !== "all" && c.preventDefault(), c.keyCode === 13 || se(c))
      return c.preventDefault();
  }).on("input", (c) => h(this, Q, dt).call(this, c)).on("blur", (c) => h(this, tt, pt).call(this, c));
  const s = e.find(".value > .type-string");
  s.length && s.on("keydown", (c) => {
    if (this.options.edit === "none" && c.preventDefault(), se(c))
      return c.preventDefault();
  }).on("input", (c) => h(this, Q, dt).call(this, c)).on("blur", (c) => h(this, tt, pt).call(this, c));
  const r = e.find(".value > .type-number");
  r.length && r.on("keydown", (c) => {
    this.options.edit === "none" && c.preventDefault();
  }).on("input", (c) => h(this, Q, dt).call(this, c)).on("blur", (c) => h(this, tt, pt).call(this, c));
  const u = e.find(".value > .type-boolean");
  u.length && u.on("click", (c) => {
    if (this.options.edit === "none")
      return;
    const d = o(c.currentTarget), l = !d.data("value");
    d.data("value", l).find("i").text(l.toString().toUpperCase()), h(this, E, k).call(this);
  });
}, Q = new WeakSet(), dt = function() {
  $(this, q, !0);
}, tt = new WeakSet(), pt = function() {
  g(this, q) && (h(this, E, k).call(this), $(this, q, !1));
}, kt = new WeakSet(), Oe = function(e) {
  if ($(this, y, {}), g(this, y).$node = o(e.currentTarget).closest(".node"), g(this, y).$area = g(this, y).$node.parent(), g(this, y).$nodes = g(this, y).$area.children(".node"), g(this, y).$nodes.length < 2) {
    $(this, y, void 0);
    return;
  }
  g(this, y).$nodes.on(Z.MOVE, h(this, At, Se).bind(this)), o(window).on(Z.END, h(this, Rt, _e).bind(this));
}, At = new WeakSet(), Se = function(e) {
  let n;
  if (e.pointerType === "touch") {
    const { clientX: c, clientY: d } = e, l = document.elementFromPoint(c, d).closest(".node");
    if (!g(this, y).$nodes.get().includes(l))
      return;
    n = o(l);
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
  this.el.body.removeClass("dragging"), g(this, y).$area.removeClass("drag-area"), g(this, y).$node.removeClass("drag-select"), g(this, y).$nodes.removeClass(nt.ALL), g(this, y).$nodes.off(Z.MOVE), o(window).off(Z.END), g(this, y).half ? g(this, y).$node.insertAfter(g(this, y).activeNode) : g(this, y).$node.insertBefore(g(this, y).activeNode), $(this, y, void 0), h(this, E, k).call(this);
};
export {
  $n as default
};
