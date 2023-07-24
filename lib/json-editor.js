var et = (t, n, e) => {
  if (!n.has(t))
    throw TypeError("Cannot " + e);
};
var k = (t, n, e) => (et(t, n, "read from private field"), e ? e.call(t) : n.get(t)), b = (t, n, e) => {
  if (n.has(t))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(t) : n.set(t, e);
}, M = (t, n, e, i) => (et(t, n, "write to private field"), i ? i.call(t, e) : n.set(t, e), e);
var C = (t, n, e) => (et(t, n, "access private method"), e);
const S = document, W = window, Ot = S.documentElement, A = S.createElement.bind(S), Nt = A("div"), it = A("table"), Kt = A("tbody"), Et = A("tr"), { isArray: K, prototype: _t } = Array, { concat: Qt, filter: ft, indexOf: At, map: Lt, push: Zt, slice: Pt, some: at, splice: tn } = _t, nn = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, en = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, rn = /<.+>/, sn = /^\w+$/;
function ht(t, n) {
  const e = on(n);
  return !t || !e && !_(n) && !l(n) ? [] : !e && en.test(t) ? n.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !e && sn.test(t) ? n.getElementsByTagName(t) : n.querySelectorAll(t);
}
class Q {
  constructor(n, e) {
    if (!n)
      return;
    if (ot(n))
      return n;
    let i = n;
    if (g(n)) {
      const r = e || S;
      if (i = nn.test(n) && _(r) ? r.getElementById(n.slice(1).replace(/\\/g, "")) : rn.test(n) ? Mt(n) : ot(r) ? r.find(n) : g(r) ? u(r).find(n) : ht(n, r), !i)
        return;
    } else if (L(n))
      return this.ready(n);
    (i.nodeType || i === W) && (i = [i]), this.length = i.length;
    for (let r = 0, o = this.length; r < o; r++)
      this[r] = i[r];
  }
  init(n, e) {
    return new Q(n, e);
  }
}
const s = Q.prototype, u = s.init;
u.fn = u.prototype = s;
s.length = 0;
s.splice = tn;
typeof Symbol == "function" && (s[Symbol.iterator] = _t[Symbol.iterator]);
function ot(t) {
  return t instanceof Q;
}
function D(t) {
  return !!t && t === t.window;
}
function _(t) {
  return !!t && t.nodeType === 9;
}
function on(t) {
  return !!t && t.nodeType === 11;
}
function l(t) {
  return !!t && t.nodeType === 1;
}
function un(t) {
  return !!t && t.nodeType === 3;
}
function cn(t) {
  return typeof t == "boolean";
}
function L(t) {
  return typeof t == "function";
}
function g(t) {
  return typeof t == "string";
}
function m(t) {
  return t === void 0;
}
function H(t) {
  return t === null;
}
function jt(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function lt(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const n = Object.getPrototypeOf(t);
  return n === null || n === Object.prototype;
}
u.isWindow = D;
u.isFunction = L;
u.isArray = K;
u.isNumeric = jt;
u.isPlainObject = lt;
function d(t, n, e) {
  if (e) {
    let i = t.length;
    for (; i--; )
      if (n.call(t[i], i, t[i]) === !1)
        return t;
  } else if (lt(t)) {
    const i = Object.keys(t);
    for (let r = 0, o = i.length; r < o; r++) {
      const c = i[r];
      if (n.call(t[c], c, t[c]) === !1)
        return t;
    }
  } else
    for (let i = 0, r = t.length; i < r; i++)
      if (n.call(t[i], i, t[i]) === !1)
        return t;
  return t;
}
u.each = d;
s.each = function(t) {
  return d(this, t);
};
s.empty = function() {
  return this.each((t, n) => {
    for (; n.firstChild; )
      n.removeChild(n.firstChild);
  });
};
function q(...t) {
  const n = cn(t[0]) ? t.shift() : !1, e = t.shift(), i = t.length;
  if (!e)
    return {};
  if (!i)
    return q(n, u, e);
  for (let r = 0; r < i; r++) {
    const o = t[r];
    for (const c in o)
      n && (K(o[c]) || lt(o[c])) ? ((!e[c] || e[c].constructor !== o[c].constructor) && (e[c] = new o[c].constructor()), q(n, e[c], o[c])) : e[c] = o[c];
  }
  return e;
}
u.extend = q;
s.extend = function(t) {
  return q(s, t);
};
const fn = /\S+/g;
function Z(t) {
  return g(t) ? t.match(fn) || [] : [];
}
s.toggleClass = function(t, n) {
  const e = Z(t), i = !m(n);
  return this.each((r, o) => {
    l(o) && d(e, (c, f) => {
      i ? n ? o.classList.add(f) : o.classList.remove(f) : o.classList.toggle(f);
    });
  });
};
s.addClass = function(t) {
  return this.toggleClass(t, !0);
};
s.removeAttr = function(t) {
  const n = Z(t);
  return this.each((e, i) => {
    l(i) && d(n, (r, o) => {
      i.removeAttribute(o);
    });
  });
};
function an(t, n) {
  if (t) {
    if (g(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !l(this[0]))
          return;
        const e = this[0].getAttribute(t);
        return H(e) ? void 0 : e;
      }
      return m(n) ? this : H(n) ? this.removeAttr(t) : this.each((e, i) => {
        l(i) && i.setAttribute(t, n);
      });
    }
    for (const e in t)
      this.attr(e, t[e]);
    return this;
  }
}
s.attr = an;
s.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
s.hasClass = function(t) {
  return !!t && at.call(this, (n) => l(n) && n.classList.contains(t));
};
s.get = function(t) {
  return m(t) ? Pt.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
};
s.eq = function(t) {
  return u(this.get(t));
};
s.first = function() {
  return this.eq(0);
};
s.last = function() {
  return this.eq(-1);
};
function hn(t) {
  return m(t) ? this.get().map((n) => l(n) || un(n) ? n.textContent : "").join("") : this.each((n, e) => {
    l(e) && (e.textContent = t);
  });
}
s.text = hn;
function $(t, n, e) {
  if (!l(t))
    return;
  const i = W.getComputedStyle(t, null);
  return e ? i.getPropertyValue(n) || void 0 : i[n] || t.style[n];
}
function E(t, n) {
  return parseInt($(t, n), 10) || 0;
}
function wt(t, n) {
  return E(t, `border${n ? "Left" : "Top"}Width`) + E(t, `padding${n ? "Left" : "Top"}`) + E(t, `padding${n ? "Right" : "Bottom"}`) + E(t, `border${n ? "Right" : "Bottom"}Width`);
}
const rt = {};
function ln(t) {
  if (rt[t])
    return rt[t];
  const n = A(t);
  S.body.insertBefore(n, null);
  const e = $(n, "display");
  return S.body.removeChild(n), rt[t] = e !== "none" ? e : "block";
}
function St(t) {
  return $(t, "display") === "none";
}
function kt(t, n) {
  const e = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!e && !!n && e.call(t, n);
}
function tt(t) {
  return g(t) ? (n, e) => kt(e, t) : L(t) ? t : ot(t) ? (n, e) => t.is(e) : t ? (n, e) => e === t : () => !1;
}
s.filter = function(t) {
  const n = tt(t);
  return u(ft.call(this, (e, i) => n.call(e, i, e)));
};
function x(t, n) {
  return n ? t.filter(n) : t;
}
s.detach = function(t) {
  return x(this, t).each((n, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const dn = /^\s*<(\w+)[^>]*>/, gn = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, $t = {
  "*": Nt,
  tr: Kt,
  td: Et,
  th: Et,
  thead: it,
  tbody: it,
  tfoot: it
};
function Mt(t) {
  if (!g(t))
    return [];
  if (gn.test(t))
    return [A(RegExp.$1)];
  const n = dn.test(t) && RegExp.$1, e = $t[n] || $t["*"];
  return e.innerHTML = t, u(e.childNodes).detach().get();
}
u.parseHTML = Mt;
s.has = function(t) {
  const n = g(t) ? (e, i) => ht(t, i).length : (e, i) => i.contains(t);
  return this.filter(n);
};
s.not = function(t) {
  const n = tt(t);
  return this.filter((e, i) => (!g(t) || l(i)) && !n.call(i, e, i));
};
function T(t, n, e, i) {
  const r = [], o = L(n), c = i && tt(i);
  for (let f = 0, y = t.length; f < y; f++)
    if (o) {
      const a = n(t[f]);
      a.length && Zt.apply(r, a);
    } else {
      let a = t[f][n];
      for (; a != null && !(i && c(-1, a)); )
        r.push(a), a = e ? a[n] : null;
    }
  return r;
}
function Dt(t) {
  return t.multiple && t.options ? T(ft.call(t.options, (n) => n.selected && !n.disabled && !n.parentNode.disabled), "value") : t.value || "";
}
function pn(t) {
  return arguments.length ? this.each((n, e) => {
    const i = e.multiple && e.options;
    if (i || Ut.test(e.type)) {
      const r = K(t) ? Lt.call(t, String) : H(t) ? [] : [String(t)];
      i ? d(e.options, (o, c) => {
        c.selected = r.indexOf(c.value) >= 0;
      }, !0) : e.checked = r.indexOf(e.value) >= 0;
    } else
      e.value = m(t) || H(t) ? "" : t;
  }) : this[0] && Dt(this[0]);
}
s.val = pn;
s.is = function(t) {
  const n = tt(t);
  return at.call(this, (e, i) => n.call(e, i, e));
};
u.guid = 1;
function w(t) {
  return t.length > 1 ? ft.call(t, (n, e, i) => At.call(i, n) === e) : t;
}
u.unique = w;
s.add = function(t, n) {
  return u(w(this.get().concat(u(t, n).get())));
};
s.children = function(t) {
  return x(u(w(T(this, (n) => n.children))), t);
};
s.parent = function(t) {
  return x(u(w(T(this, "parentNode"))), t);
};
s.index = function(t) {
  const n = t ? u(t)[0] : this[0], e = t ? this : u(n).parent().children();
  return At.call(e, n);
};
s.closest = function(t) {
  const n = this.filter(t);
  if (n.length)
    return n;
  const e = this.parent();
  return e.length ? e.closest(t) : n;
};
s.siblings = function(t) {
  return x(u(w(T(this, (n) => u(n).parent().children().not(n)))), t);
};
s.find = function(t) {
  return u(w(T(this, (n) => ht(t, n))));
};
const mn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, yn = /^$|^module$|\/(java|ecma)script/i, bn = ["type", "src", "nonce", "noModule"];
function Cn(t, n) {
  const e = u(t);
  e.filter("script").add(e.find("script")).each((i, r) => {
    if (yn.test(r.type) && Ot.contains(r)) {
      const o = A("script");
      o.text = r.textContent.replace(mn, ""), d(bn, (c, f) => {
        r[f] && (o[f] = r[f]);
      }), n.head.insertBefore(o, null), n.head.removeChild(o);
    }
  });
}
function En(t, n, e, i, r) {
  i ? t.insertBefore(n, e ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(n, t) : t.parentNode.insertBefore(n, e ? t : t.nextSibling), r && Cn(n, t.ownerDocument);
}
function O(t, n, e, i, r, o, c, f) {
  return d(t, (y, a) => {
    d(u(a), (nt, F) => {
      d(u(n), (Ct, p) => {
        const B = e ? F : p, h = e ? p : F, P = e ? nt : Ct;
        En(B, P ? h.cloneNode(!0) : h, i, r, !P);
      }, f);
    }, c);
  }, o), n;
}
s.after = function() {
  return O(arguments, this, !1, !1, !1, !0, !0);
};
s.append = function() {
  return O(arguments, this, !1, !1, !0);
};
function wn(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (m(t))
    return this;
  const n = /<script[\s>]/.test(t);
  return this.each((e, i) => {
    l(i) && (n ? u(i).empty().append(t) : i.innerHTML = t);
  });
}
s.html = wn;
s.appendTo = function(t) {
  return O(arguments, this, !0, !1, !0);
};
s.wrapInner = function(t) {
  return this.each((n, e) => {
    const i = u(e), r = i.contents();
    r.length ? r.wrapAll(t) : i.append(t);
  });
};
s.before = function() {
  return O(arguments, this, !1, !0);
};
s.wrapAll = function(t) {
  let n = u(t), e = n[0];
  for (; e.children.length; )
    e = e.firstElementChild;
  return this.first().before(n), this.appendTo(e);
};
s.wrap = function(t) {
  return this.each((n, e) => {
    const i = u(t)[0];
    u(e).wrapAll(n ? i.cloneNode(!0) : i);
  });
};
s.insertAfter = function(t) {
  return O(arguments, this, !0, !1, !1, !1, !1, !0);
};
s.insertBefore = function(t) {
  return O(arguments, this, !0, !0);
};
s.prepend = function() {
  return O(arguments, this, !1, !0, !0, !0, !0);
};
s.prependTo = function(t) {
  return O(arguments, this, !0, !0, !0, !1, !1, !0);
};
s.contents = function() {
  return u(w(T(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
s.next = function(t, n, e) {
  return x(u(w(T(this, "nextElementSibling", n, e))), t);
};
s.nextAll = function(t) {
  return this.next(t, !0);
};
s.nextUntil = function(t, n) {
  return this.next(n, !0, t);
};
s.parents = function(t, n) {
  return x(u(w(T(this, "parentElement", !0, n))), t);
};
s.parentsUntil = function(t, n) {
  return this.parents(n, t);
};
s.prev = function(t, n, e) {
  return x(u(w(T(this, "previousElementSibling", n, e))), t);
};
s.prevAll = function(t) {
  return this.prev(t, !0);
};
s.prevUntil = function(t, n) {
  return this.prev(n, !0, t);
};
s.map = function(t) {
  return u(Qt.apply([], Lt.call(this, (n, e) => t.call(n, e, n))));
};
s.clone = function() {
  return this.map((t, n) => n.cloneNode(!0));
};
s.offsetParent = function() {
  return this.map((t, n) => {
    let e = n.offsetParent;
    for (; e && $(e, "position") === "static"; )
      e = e.offsetParent;
    return e || Ot;
  });
};
s.slice = function(t, n) {
  return u(Pt.call(this, t, n));
};
const Sn = /-([a-z])/g;
function dt(t) {
  return t.replace(Sn, (n, e) => e.toUpperCase());
}
s.ready = function(t) {
  const n = () => setTimeout(t, 0, u);
  return S.readyState !== "loading" ? n() : S.addEventListener("DOMContentLoaded", n), this;
};
s.unwrap = function() {
  return this.parent().each((t, n) => {
    if (n.tagName === "BODY")
      return;
    const e = u(n);
    e.replaceWith(e.children());
  }), this;
};
s.offset = function() {
  const t = this[0];
  if (!t)
    return;
  const n = t.getBoundingClientRect();
  return {
    top: n.top + W.pageYOffset,
    left: n.left + W.pageXOffset
  };
};
s.position = function() {
  const t = this[0];
  if (!t)
    return;
  const n = $(t, "position") === "fixed", e = n ? t.getBoundingClientRect() : this.offset();
  if (!n) {
    const i = t.ownerDocument;
    let r = t.offsetParent || i.documentElement;
    for (; (r === i.body || r === i.documentElement) && $(r, "position") === "static"; )
      r = r.parentNode;
    if (r !== t && l(r)) {
      const o = u(r).offset();
      e.top -= o.top + E(r, "borderTopWidth"), e.left -= o.left + E(r, "borderLeftWidth");
    }
  }
  return {
    top: e.top - E(t, "marginTop"),
    left: e.left - E(t, "marginLeft")
  };
};
const Bt = {
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
s.prop = function(t, n) {
  if (t) {
    if (g(t))
      return t = Bt[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((e, i) => {
        i[t] = n;
      });
    for (const e in t)
      this.prop(e, t[e]);
    return this;
  }
};
s.removeProp = function(t) {
  return this.each((n, e) => {
    delete e[Bt[t] || t];
  });
};
const $n = /^--/;
function gt(t) {
  return $n.test(t);
}
const st = {}, { style: Tn } = Nt, Rn = ["webkit", "moz", "ms"];
function xn(t, n = gt(t)) {
  if (n)
    return t;
  if (!st[t]) {
    const e = dt(t), i = `${e[0].toUpperCase()}${e.slice(1)}`, r = `${e} ${Rn.join(`${i} `)}${i}`.split(" ");
    d(r, (o, c) => {
      if (c in Tn)
        return st[t] = c, !1;
    });
  }
  return st[t];
}
const On = {
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
function Ht(t, n, e = gt(t)) {
  return !e && !On[t] && jt(n) ? `${n}px` : n;
}
function Nn(t, n) {
  if (g(t)) {
    const e = gt(t);
    return t = xn(t, e), arguments.length < 2 ? this[0] && $(this[0], t, e) : t ? (n = Ht(t, n, e), this.each((i, r) => {
      l(r) && (e ? r.style.setProperty(t, n) : r.style[t] = n);
    })) : this;
  }
  for (const e in t)
    this.css(e, t[e]);
  return this;
}
s.css = Nn;
function It(t, n) {
  try {
    return t(n);
  } catch {
    return n;
  }
}
const _n = /^\s+|\s+$/;
function Tt(t, n) {
  const e = t.dataset[n] || t.dataset[dt(n)];
  return _n.test(e) ? e : It(JSON.parse, e);
}
function An(t, n, e) {
  e = It(JSON.stringify, e), t.dataset[dt(n)] = e;
}
function Ln(t, n) {
  if (!t) {
    if (!this[0])
      return;
    const e = {};
    for (const i in this[0].dataset)
      e[i] = Tt(this[0], i);
    return e;
  }
  if (g(t))
    return arguments.length < 2 ? this[0] && Tt(this[0], t) : m(n) ? this : this.each((e, i) => {
      An(i, t, n);
    });
  for (const e in t)
    this.data(e, t[e]);
  return this;
}
s.data = Ln;
function vt(t, n) {
  const e = t.documentElement;
  return Math.max(t.body[`scroll${n}`], e[`scroll${n}`], t.body[`offset${n}`], e[`offset${n}`], e[`client${n}`]);
}
d([!0, !1], (t, n) => {
  d(["Width", "Height"], (e, i) => {
    const r = `${n ? "outer" : "inner"}${i}`;
    s[r] = function(o) {
      if (this[0])
        return D(this[0]) ? n ? this[0][`inner${i}`] : this[0].document.documentElement[`client${i}`] : _(this[0]) ? vt(this[0], i) : this[0][`${n ? "offset" : "client"}${i}`] + (o && n ? E(this[0], `margin${e ? "Top" : "Left"}`) + E(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
d(["Width", "Height"], (t, n) => {
  const e = n.toLowerCase();
  s[e] = function(i) {
    if (!this[0])
      return m(i) ? void 0 : this;
    if (!arguments.length)
      return D(this[0]) ? this[0].document.documentElement[`client${n}`] : _(this[0]) ? vt(this[0], n) : this[0].getBoundingClientRect()[e] - wt(this[0], !t);
    const r = parseInt(i, 10);
    return this.each((o, c) => {
      if (!l(c))
        return;
      const f = $(c, "boxSizing");
      c.style[e] = Ht(e, r + (f === "border-box" ? wt(c, !t) : 0));
    });
  };
});
const Rt = "___cd";
s.toggle = function(t) {
  return this.each((n, e) => {
    if (!l(e))
      return;
    const i = St(e);
    (m(t) ? i : t) ? (e.style.display = e[Rt] || "", St(e) && (e.style.display = ln(e.tagName))) : i || (e[Rt] = $(e, "display"), e.style.display = "none");
  });
};
s.hide = function() {
  return this.toggle(!1);
};
s.show = function() {
  return this.toggle(!0);
};
const xt = "___ce", pt = ".", mt = { focus: "focusin", blur: "focusout" }, Ft = { mouseenter: "mouseover", mouseleave: "mouseout" }, Pn = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function yt(t) {
  return Ft[t] || mt[t] || t;
}
function bt(t) {
  const n = t.split(pt);
  return [n[0], n.slice(1).sort()];
}
s.trigger = function(t, n) {
  if (g(t)) {
    const [i, r] = bt(t), o = yt(i);
    if (!o)
      return this;
    const c = Pn.test(o) ? "MouseEvents" : "HTMLEvents";
    t = S.createEvent(c), t.initEvent(o, !0, !0), t.namespace = r.join(pt), t.___ot = i;
  }
  t.___td = n;
  const e = t.___ot in mt;
  return this.each((i, r) => {
    e && L(r[t.___ot]) && (r[`___i${t.type}`] = !0, r[t.___ot](), r[`___i${t.type}`] = !1), r.dispatchEvent(t);
  });
};
function Wt(t) {
  return t[xt] = t[xt] || {};
}
function jn(t, n, e, i, r) {
  const o = Wt(t);
  o[n] = o[n] || [], o[n].push([e, i, r]), t.addEventListener(n, r);
}
function qt(t, n) {
  return !n || !at.call(n, (e) => t.indexOf(e) < 0);
}
function U(t, n, e, i, r) {
  const o = Wt(t);
  if (n)
    o[n] && (o[n] = o[n].filter(([c, f, y]) => {
      if (r && y.guid !== r.guid || !qt(c, e) || i && i !== f)
        return !0;
      t.removeEventListener(n, y);
    }));
  else
    for (n in o)
      U(t, n, e, i, r);
}
s.off = function(t, n, e) {
  if (m(t))
    this.each((i, r) => {
      !l(r) && !_(r) && !D(r) || U(r);
    });
  else if (g(t))
    L(n) && (e = n, n = ""), d(Z(t), (i, r) => {
      const [o, c] = bt(r), f = yt(o);
      this.each((y, a) => {
        !l(a) && !_(a) && !D(a) || U(a, f, c, n, e);
      });
    });
  else
    for (const i in t)
      this.off(i, t[i]);
  return this;
};
s.remove = function(t) {
  return x(this, t).detach().off(), this;
};
s.replaceWith = function(t) {
  return this.before(t).remove();
};
s.replaceAll = function(t) {
  return u(t).replaceWith(this), this;
};
function kn(t, n, e, i, r) {
  if (!g(t)) {
    for (const o in t)
      this.on(o, n, e, t[o], r);
    return this;
  }
  return g(n) || (m(n) || H(n) ? n = "" : m(e) ? (e = n, n = "") : (i = e, e = n, n = "")), L(i) || (i = e, e = void 0), i ? (d(Z(t), (o, c) => {
    const [f, y] = bt(c), a = yt(f), nt = f in Ft, F = f in mt;
    a && this.each((Ct, p) => {
      if (!l(p) && !_(p) && !D(p))
        return;
      const B = function(h) {
        if (h.target[`___i${h.type}`])
          return h.stopImmediatePropagation();
        if (h.namespace && !qt(y, h.namespace.split(pt)) || !n && (F && (h.target !== p || h.___ot === a) || nt && h.relatedTarget && p.contains(h.relatedTarget)))
          return;
        let P = p;
        if (n) {
          let j = h.target;
          for (; !kt(j, n); )
            if (j === p || (j = j.parentNode, !j))
              return;
          P = j;
        }
        Object.defineProperty(h, "currentTarget", {
          configurable: !0,
          get() {
            return P;
          }
        }), Object.defineProperty(h, "delegateTarget", {
          configurable: !0,
          get() {
            return p;
          }
        }), Object.defineProperty(h, "data", {
          configurable: !0,
          get() {
            return e;
          }
        });
        const Xt = i.call(P, h, h.___td);
        r && U(p, a, y, n, B), Xt === !1 && (h.preventDefault(), h.stopPropagation());
      };
      B.guid = i.guid = i.guid || u.guid++, jn(p, a, y, n, B);
    });
  }), this) : this;
}
s.on = kn;
function Mn(t, n, e, i) {
  return this.on(t, n, e, i, !0);
}
s.one = Mn;
const Dn = /\r?\n/g;
function Bn(t, n) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(n.replace(Dn, `\r
`))}`;
}
const Hn = /file|reset|submit|button|image/i, Ut = /radio|checkbox/i;
s.serialize = function() {
  let t = "";
  return this.each((n, e) => {
    d(e.elements || [e], (i, r) => {
      if (r.disabled || !r.name || r.tagName === "FIELDSET" || Hn.test(r.type) || Ut.test(r.type) && !r.checked)
        return;
      const o = Dt(r);
      if (!m(o)) {
        const c = K(o) ? o : [o];
        d(c, (f, y) => {
          t += Bn(r.name, y);
        });
      }
    });
  }), t.slice(1);
};
class In {
  constructor() {
  }
}
function vn(t) {
  return t == null ? "null" : Array.isArray(t) ? "array" : typeof t == "string" ? "string" : typeof t == "number" ? "number" : typeof t == "boolean" ? "boolean" : "object";
}
var N, V, R, J, Vt, z, Jt, Y, zt;
class Fn {
  constructor(n, e) {
    b(this, J);
    b(this, z);
    b(this, Y);
    b(this, N, {
      wrap: null,
      tree: null
    });
    b(this, V, void 0);
    b(this, R, {});
    k(this, N).wrap = u(n), C(this, J, Vt).call(this, e), M(this, V, new In()), C(this, z, Jt).call(this);
  }
  destroy() {
  }
}
N = new WeakMap(), V = new WeakMap(), R = new WeakMap(), J = new WeakSet(), Vt = function(n) {
  try {
    typeof n == "string" ? M(this, R, JSON.parse(n)) : Array.isArray(n) ? M(this, R, Object.assign([], n)) : u.isPlainObject(n) ? M(this, R, Object.assign([], n)) : M(this, R, {});
  } catch (e) {
    console.error("error", e.message);
  }
}, z = new WeakSet(), Jt = function() {
  k(this, N).tree = u('<ul class="root"/>'), C(this, Y, zt).call(this), k(this, N).wrap.append(k(this, N).tree);
}, Y = new WeakSet(), zt = function() {
  const n = vn(k(this, R));
  console.log(n);
};
const Wn = `:host{--fooo: red}.json-editor{display:block;margin:0;padding:0;list-style:none;border:3px solid var(--fooo)}
`;
var G, Yt, I, ut, X, Gt, v, ct;
class Un extends HTMLElement {
  constructor() {
    super();
    b(this, G);
    b(this, I);
    b(this, X);
    b(this, v);
    this.attachShadow({
      mode: "open"
    });
    const e = document.createElement("template");
    e.innerHTML = '<div class="json-editor"></div>';
    const i = new CSSStyleSheet();
    i.replaceSync(Wn), this.shadowRoot.appendChild(e.content.cloneNode(!0)), this.shadowRoot.adoptedStyleSheets = [i], this.root = this.shadowRoot.childNodes[0], this.ready = !1, this.data = {};
  }
  static get observedAttributes() {
    return ["src"];
  }
  get props() {
    return {
      src: this.getAttribute("src")
    };
  }
  /**
   * 속성값이 변경됐을때 호출되는 영역
   */
  attributeChangedCallback(e, i, r) {
    if (i !== r)
      switch (e) {
        case "src":
          this.data = C(this, G, Yt).call(this, r), this.ready && C(this, I, ut).call(this);
          break;
      }
  }
  /**
   * mounted component
   */
  connectedCallback() {
    this.root.addEventListener("json-editor", C(this, v, ct)), C(this, I, ut).call(this), this.ready = !0;
  }
  /**
   * unmounted component
   */
  disconnectedCallback() {
    this.root.removeEventListener("json-editor", C(this, v, ct)), console.warn("disconnectedCallback()");
  }
  adoptedCallback() {
    console.warn("adoptedCallback()");
  }
}
G = new WeakSet(), Yt = function(e) {
  try {
    return typeof e == "string" ? JSON.parse(e) : Array.isArray(e) ? Object.assign([], e) : u.isPlainObject(e) ? Object.assign([], e) : {};
  } catch (i) {
    console.error("ERROR JSON-EDITOR >", i.message);
  }
}, I = new WeakSet(), ut = function() {
  C(this, X, Gt).call(this), this.core = new Fn(this.root, this.data);
}, X = new WeakSet(), Gt = function() {
  this.core && (this.core.destroy(), delete this.core, this.root.innerHTML = "");
}, v = new WeakSet(), ct = function(e) {
  console.log("#onRootEvent", e);
};
export {
  Un as default
};
