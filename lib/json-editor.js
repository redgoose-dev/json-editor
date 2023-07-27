var et = (t, n, e) => {
  if (!n.has(t))
    throw TypeError("Cannot " + e);
};
var N = (t, n, e) => (et(t, n, "read from private field"), e ? e.call(t) : n.get(t)), $ = (t, n, e) => {
  if (n.has(t))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(t) : n.set(t, e);
}, vt = (t, n, e, i) => (et(t, n, "write to private field"), i ? i.call(t, e) : n.set(t, e), e);
var m = (t, n, e) => (et(t, n, "access private method"), e);
const E = document, I = window, Mt = E.documentElement, O = E.createElement.bind(E), Ot = O("div"), it = O("table"), nn = O("tbody"), xt = O("tr"), { isArray: X, prototype: Ht } = Array, { concat: en, filter: lt, indexOf: At, map: Rt, push: rn, slice: Pt, some: dt, splice: sn } = Ht, on = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, un = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, cn = /<.+>/, fn = /^\w+$/;
function ht(t, n) {
  const e = an(n);
  return !t || !e && !M(n) && !h(n) ? [] : !e && un.test(t) ? n.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !e && fn.test(t) ? n.getElementsByTagName(t) : n.querySelectorAll(t);
}
class Q {
  constructor(n, e) {
    if (!n)
      return;
    if (ot(n))
      return n;
    let i = n;
    if (g(n)) {
      const r = e || E;
      if (i = on.test(n) && M(r) ? r.getElementById(n.slice(1).replace(/\\/g, "")) : cn.test(n) ? Dt(n) : ot(r) ? r.find(n) : g(r) ? u(r).find(n) : ht(n, r), !i)
        return;
    } else if (H(n))
      return this.ready(n);
    (i.nodeType || i === I) && (i = [i]), this.length = i.length;
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
s.splice = sn;
typeof Symbol == "function" && (s[Symbol.iterator] = Ht[Symbol.iterator]);
function ot(t) {
  return t instanceof Q;
}
function P(t) {
  return !!t && t === t.window;
}
function M(t) {
  return !!t && t.nodeType === 9;
}
function an(t) {
  return !!t && t.nodeType === 11;
}
function h(t) {
  return !!t && t.nodeType === 1;
}
function ln(t) {
  return !!t && t.nodeType === 3;
}
function dn(t) {
  return typeof t == "boolean";
}
function H(t) {
  return typeof t == "function";
}
function g(t) {
  return typeof t == "string";
}
function b(t) {
  return t === void 0;
}
function j(t) {
  return t === null;
}
function Bt(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function pt(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const n = Object.getPrototypeOf(t);
  return n === null || n === Object.prototype;
}
u.isWindow = P;
u.isFunction = H;
u.isArray = X;
u.isNumeric = Bt;
u.isPlainObject = pt;
function p(t, n, e) {
  if (e) {
    let i = t.length;
    for (; i--; )
      if (n.call(t[i], i, t[i]) === !1)
        return t;
  } else if (pt(t)) {
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
u.each = p;
s.each = function(t) {
  return p(this, t);
};
s.empty = function() {
  return this.each((t, n) => {
    for (; n.firstChild; )
      n.removeChild(n.firstChild);
  });
};
function U(...t) {
  const n = dn(t[0]) ? t.shift() : !1, e = t.shift(), i = t.length;
  if (!e)
    return {};
  if (!i)
    return U(n, u, e);
  for (let r = 0; r < i; r++) {
    const o = t[r];
    for (const c in o)
      n && (X(o[c]) || pt(o[c])) ? ((!e[c] || e[c].constructor !== o[c].constructor) && (e[c] = new o[c].constructor()), U(n, e[c], o[c])) : e[c] = o[c];
  }
  return e;
}
u.extend = U;
s.extend = function(t) {
  return U(s, t);
};
const hn = /\S+/g;
function tt(t) {
  return g(t) ? t.match(hn) || [] : [];
}
s.toggleClass = function(t, n) {
  const e = tt(t), i = !b(n);
  return this.each((r, o) => {
    h(o) && p(e, (c, f) => {
      i ? n ? o.classList.add(f) : o.classList.remove(f) : o.classList.toggle(f);
    });
  });
};
s.addClass = function(t) {
  return this.toggleClass(t, !0);
};
s.removeAttr = function(t) {
  const n = tt(t);
  return this.each((e, i) => {
    h(i) && p(n, (r, o) => {
      i.removeAttribute(o);
    });
  });
};
function pn(t, n) {
  if (t) {
    if (g(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !h(this[0]))
          return;
        const e = this[0].getAttribute(t);
        return j(e) ? void 0 : e;
      }
      return b(n) ? this : j(n) ? this.removeAttr(t) : this.each((e, i) => {
        h(i) && i.setAttribute(t, n);
      });
    }
    for (const e in t)
      this.attr(e, t[e]);
    return this;
  }
}
s.attr = pn;
s.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
s.hasClass = function(t) {
  return !!t && dt.call(this, (n) => h(n) && n.classList.contains(t));
};
s.get = function(t) {
  return b(t) ? Pt.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
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
function gn(t) {
  return b(t) ? this.get().map((n) => h(n) || ln(n) ? n.textContent : "").join("") : this.each((n, e) => {
    h(e) && (e.textContent = t);
  });
}
s.text = gn;
function S(t, n, e) {
  if (!h(t))
    return;
  const i = I.getComputedStyle(t, null);
  return e ? i.getPropertyValue(n) || void 0 : i[n] || t.style[n];
}
function x(t, n) {
  return parseInt(S(t, n), 10) || 0;
}
function kt(t, n) {
  return x(t, `border${n ? "Left" : "Top"}Width`) + x(t, `padding${n ? "Left" : "Top"}`) + x(t, `padding${n ? "Right" : "Bottom"}`) + x(t, `border${n ? "Right" : "Bottom"}Width`);
}
const rt = {};
function mn(t) {
  if (rt[t])
    return rt[t];
  const n = O(t);
  E.body.insertBefore(n, null);
  const e = S(n, "display");
  return E.body.removeChild(n), rt[t] = e !== "none" ? e : "block";
}
function Et(t) {
  return S(t, "display") === "none";
}
function jt(t, n) {
  const e = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!e && !!n && e.call(t, n);
}
function nt(t) {
  return g(t) ? (n, e) => jt(e, t) : H(t) ? t : ot(t) ? (n, e) => t.is(e) : t ? (n, e) => e === t : () => !1;
}
s.filter = function(t) {
  const n = nt(t);
  return u(lt.call(this, (e, i) => n.call(e, i, e)));
};
function T(t, n) {
  return n ? t.filter(n) : t;
}
s.detach = function(t) {
  return T(this, t).each((n, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const yn = /^\s*<(\w+)[^>]*>/, Cn = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, St = {
  "*": Ot,
  tr: nn,
  td: xt,
  th: xt,
  thead: it,
  tbody: it,
  tfoot: it
};
function Dt(t) {
  if (!g(t))
    return [];
  if (Cn.test(t))
    return [O(RegExp.$1)];
  const n = yn.test(t) && RegExp.$1, e = St[n] || St["*"];
  return e.innerHTML = t, u(e.childNodes).detach().get();
}
u.parseHTML = Dt;
s.has = function(t) {
  const n = g(t) ? (e, i) => ht(t, i).length : (e, i) => i.contains(t);
  return this.filter(n);
};
s.not = function(t) {
  const n = nt(t);
  return this.filter((e, i) => (!g(t) || h(i)) && !n.call(i, e, i));
};
function L(t, n, e, i) {
  const r = [], o = H(n), c = i && nt(i);
  for (let f = 0, l = t.length; f < l; f++)
    if (o) {
      const a = n(t[f]);
      a.length && rn.apply(r, a);
    } else {
      let a = t[f][n];
      for (; a != null && !(i && c(-1, a)); )
        r.push(a), a = e ? a[n] : null;
    }
  return r;
}
function Vt(t) {
  return t.multiple && t.options ? L(lt.call(t.options, (n) => n.selected && !n.disabled && !n.parentNode.disabled), "value") : t.value || "";
}
function bn(t) {
  return arguments.length ? this.each((n, e) => {
    const i = e.multiple && e.options;
    if (i || Jt.test(e.type)) {
      const r = X(t) ? Rt.call(t, String) : j(t) ? [] : [String(t)];
      i ? p(e.options, (o, c) => {
        c.selected = r.indexOf(c.value) >= 0;
      }, !0) : e.checked = r.indexOf(e.value) >= 0;
    } else
      e.value = b(t) || j(t) ? "" : t;
  }) : this[0] && Vt(this[0]);
}
s.val = bn;
s.is = function(t) {
  const n = nt(t);
  return dt.call(this, (e, i) => n.call(e, i, e));
};
u.guid = 1;
function k(t) {
  return t.length > 1 ? lt.call(t, (n, e, i) => At.call(i, n) === e) : t;
}
u.unique = k;
s.add = function(t, n) {
  return u(k(this.get().concat(u(t, n).get())));
};
s.children = function(t) {
  return T(u(k(L(this, (n) => n.children))), t);
};
s.parent = function(t) {
  return T(u(k(L(this, "parentNode"))), t);
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
  return T(u(k(L(this, (n) => u(n).parent().children().not(n)))), t);
};
s.find = function(t) {
  return u(k(L(this, (n) => ht(t, n))));
};
const wn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, $n = /^$|^module$|\/(java|ecma)script/i, vn = ["type", "src", "nonce", "noModule"];
function xn(t, n) {
  const e = u(t);
  e.filter("script").add(e.find("script")).each((i, r) => {
    if ($n.test(r.type) && Mt.contains(r)) {
      const o = O("script");
      o.text = r.textContent.replace(wn, ""), p(vn, (c, f) => {
        r[f] && (o[f] = r[f]);
      }), n.head.insertBefore(o, null), n.head.removeChild(o);
    }
  });
}
function kn(t, n, e, i, r) {
  i ? t.insertBefore(n, e ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(n, t) : t.parentNode.insertBefore(n, e ? t : t.nextSibling), r && xn(n, t.ownerDocument);
}
function _(t, n, e, i, r, o, c, f) {
  return p(t, (l, a) => {
    p(u(a), (w, y) => {
      p(u(n), ($t, C) => {
        const B = e ? y : C, d = e ? C : y, A = e ? w : $t;
        kn(B, A ? d.cloneNode(!0) : d, i, r, !A);
      }, f);
    }, c);
  }, o), n;
}
s.after = function() {
  return _(arguments, this, !1, !1, !1, !0, !0);
};
s.append = function() {
  return _(arguments, this, !1, !1, !0);
};
function En(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (b(t))
    return this;
  const n = /<script[\s>]/.test(t);
  return this.each((e, i) => {
    h(i) && (n ? u(i).empty().append(t) : i.innerHTML = t);
  });
}
s.html = En;
s.appendTo = function(t) {
  return _(arguments, this, !0, !1, !0);
};
s.wrapInner = function(t) {
  return this.each((n, e) => {
    const i = u(e), r = i.contents();
    r.length ? r.wrapAll(t) : i.append(t);
  });
};
s.before = function() {
  return _(arguments, this, !1, !0);
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
  return _(arguments, this, !0, !1, !1, !1, !1, !0);
};
s.insertBefore = function(t) {
  return _(arguments, this, !0, !0);
};
s.prepend = function() {
  return _(arguments, this, !1, !0, !0, !0, !0);
};
s.prependTo = function(t) {
  return _(arguments, this, !0, !0, !0, !1, !1, !0);
};
s.contents = function() {
  return u(k(L(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
s.next = function(t, n, e) {
  return T(u(k(L(this, "nextElementSibling", n, e))), t);
};
s.nextAll = function(t) {
  return this.next(t, !0);
};
s.nextUntil = function(t, n) {
  return this.next(n, !0, t);
};
s.parents = function(t, n) {
  return T(u(k(L(this, "parentElement", !0, n))), t);
};
s.parentsUntil = function(t, n) {
  return this.parents(n, t);
};
s.prev = function(t, n, e) {
  return T(u(k(L(this, "previousElementSibling", n, e))), t);
};
s.prevAll = function(t) {
  return this.prev(t, !0);
};
s.prevUntil = function(t, n) {
  return this.prev(n, !0, t);
};
s.map = function(t) {
  return u(en.apply([], Rt.call(this, (n, e) => t.call(n, e, n))));
};
s.clone = function() {
  return this.map((t, n) => n.cloneNode(!0));
};
s.offsetParent = function() {
  return this.map((t, n) => {
    let e = n.offsetParent;
    for (; e && S(e, "position") === "static"; )
      e = e.offsetParent;
    return e || Mt;
  });
};
s.slice = function(t, n) {
  return u(Pt.call(this, t, n));
};
const Sn = /-([a-z])/g;
function gt(t) {
  return t.replace(Sn, (n, e) => e.toUpperCase());
}
s.ready = function(t) {
  const n = () => setTimeout(t, 0, u);
  return E.readyState !== "loading" ? n() : E.addEventListener("DOMContentLoaded", n), this;
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
    top: n.top + I.pageYOffset,
    left: n.left + I.pageXOffset
  };
};
s.position = function() {
  const t = this[0];
  if (!t)
    return;
  const n = S(t, "position") === "fixed", e = n ? t.getBoundingClientRect() : this.offset();
  if (!n) {
    const i = t.ownerDocument;
    let r = t.offsetParent || i.documentElement;
    for (; (r === i.body || r === i.documentElement) && S(r, "position") === "static"; )
      r = r.parentNode;
    if (r !== t && h(r)) {
      const o = u(r).offset();
      e.top -= o.top + x(r, "borderTopWidth"), e.left -= o.left + x(r, "borderLeftWidth");
    }
  }
  return {
    top: e.top - x(t, "marginTop"),
    left: e.left - x(t, "marginLeft")
  };
};
const Ft = {
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
      return t = Ft[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((e, i) => {
        i[t] = n;
      });
    for (const e in t)
      this.prop(e, t[e]);
    return this;
  }
};
s.removeProp = function(t) {
  return this.each((n, e) => {
    delete e[Ft[t] || t];
  });
};
const Ln = /^--/;
function mt(t) {
  return Ln.test(t);
}
const st = {}, { style: Nn } = Ot, Tn = ["webkit", "moz", "ms"];
function _n(t, n = mt(t)) {
  if (n)
    return t;
  if (!st[t]) {
    const e = gt(t), i = `${e[0].toUpperCase()}${e.slice(1)}`, r = `${e} ${Tn.join(`${i} `)}${i}`.split(" ");
    p(r, (o, c) => {
      if (c in Nn)
        return st[t] = c, !1;
    });
  }
  return st[t];
}
const Mn = {
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
function Zt(t, n, e = mt(t)) {
  return !e && !Mn[t] && Bt(n) ? `${n}px` : n;
}
function On(t, n) {
  if (g(t)) {
    const e = mt(t);
    return t = _n(t, e), arguments.length < 2 ? this[0] && S(this[0], t, e) : t ? (n = Zt(t, n, e), this.each((i, r) => {
      h(r) && (e ? r.style.setProperty(t, n) : r.style[t] = n);
    })) : this;
  }
  for (const e in t)
    this.css(e, t[e]);
  return this;
}
s.css = On;
function It(t, n) {
  try {
    return t(n);
  } catch {
    return n;
  }
}
const Hn = /^\s+|\s+$/;
function Lt(t, n) {
  const e = t.dataset[n] || t.dataset[gt(n)];
  return Hn.test(e) ? e : It(JSON.parse, e);
}
function An(t, n, e) {
  e = It(JSON.stringify, e), t.dataset[gt(n)] = e;
}
function Rn(t, n) {
  if (!t) {
    if (!this[0])
      return;
    const e = {};
    for (const i in this[0].dataset)
      e[i] = Lt(this[0], i);
    return e;
  }
  if (g(t))
    return arguments.length < 2 ? this[0] && Lt(this[0], t) : b(n) ? this : this.each((e, i) => {
      An(i, t, n);
    });
  for (const e in t)
    this.data(e, t[e]);
  return this;
}
s.data = Rn;
function Ut(t, n) {
  const e = t.documentElement;
  return Math.max(t.body[`scroll${n}`], e[`scroll${n}`], t.body[`offset${n}`], e[`offset${n}`], e[`client${n}`]);
}
p([!0, !1], (t, n) => {
  p(["Width", "Height"], (e, i) => {
    const r = `${n ? "outer" : "inner"}${i}`;
    s[r] = function(o) {
      if (this[0])
        return P(this[0]) ? n ? this[0][`inner${i}`] : this[0].document.documentElement[`client${i}`] : M(this[0]) ? Ut(this[0], i) : this[0][`${n ? "offset" : "client"}${i}`] + (o && n ? x(this[0], `margin${e ? "Top" : "Left"}`) + x(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
p(["Width", "Height"], (t, n) => {
  const e = n.toLowerCase();
  s[e] = function(i) {
    if (!this[0])
      return b(i) ? void 0 : this;
    if (!arguments.length)
      return P(this[0]) ? this[0].document.documentElement[`client${n}`] : M(this[0]) ? Ut(this[0], n) : this[0].getBoundingClientRect()[e] - kt(this[0], !t);
    const r = parseInt(i, 10);
    return this.each((o, c) => {
      if (!h(c))
        return;
      const f = S(c, "boxSizing");
      c.style[e] = Zt(e, r + (f === "border-box" ? kt(c, !t) : 0));
    });
  };
});
const Nt = "___cd";
s.toggle = function(t) {
  return this.each((n, e) => {
    if (!h(e))
      return;
    const i = Et(e);
    (b(t) ? i : t) ? (e.style.display = e[Nt] || "", Et(e) && (e.style.display = mn(e.tagName))) : i || (e[Nt] = S(e, "display"), e.style.display = "none");
  });
};
s.hide = function() {
  return this.toggle(!1);
};
s.show = function() {
  return this.toggle(!0);
};
const Tt = "___ce", yt = ".", Ct = { focus: "focusin", blur: "focusout" }, Wt = { mouseenter: "mouseover", mouseleave: "mouseout" }, Pn = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function bt(t) {
  return Wt[t] || Ct[t] || t;
}
function wt(t) {
  const n = t.split(yt);
  return [n[0], n.slice(1).sort()];
}
s.trigger = function(t, n) {
  if (g(t)) {
    const [i, r] = wt(t), o = bt(i);
    if (!o)
      return this;
    const c = Pn.test(o) ? "MouseEvents" : "HTMLEvents";
    t = E.createEvent(c), t.initEvent(o, !0, !0), t.namespace = r.join(yt), t.___ot = i;
  }
  t.___td = n;
  const e = t.___ot in Ct;
  return this.each((i, r) => {
    e && H(r[t.___ot]) && (r[`___i${t.type}`] = !0, r[t.___ot](), r[`___i${t.type}`] = !1), r.dispatchEvent(t);
  });
};
function qt(t) {
  return t[Tt] = t[Tt] || {};
}
function Bn(t, n, e, i, r) {
  const o = qt(t);
  o[n] = o[n] || [], o[n].push([e, i, r]), t.addEventListener(n, r);
}
function zt(t, n) {
  return !n || !dt.call(n, (e) => t.indexOf(e) < 0);
}
function W(t, n, e, i, r) {
  const o = qt(t);
  if (n)
    o[n] && (o[n] = o[n].filter(([c, f, l]) => {
      if (r && l.guid !== r.guid || !zt(c, e) || i && i !== f)
        return !0;
      t.removeEventListener(n, l);
    }));
  else
    for (n in o)
      W(t, n, e, i, r);
}
s.off = function(t, n, e) {
  if (b(t))
    this.each((i, r) => {
      !h(r) && !M(r) && !P(r) || W(r);
    });
  else if (g(t))
    H(n) && (e = n, n = ""), p(tt(t), (i, r) => {
      const [o, c] = wt(r), f = bt(o);
      this.each((l, a) => {
        !h(a) && !M(a) && !P(a) || W(a, f, c, n, e);
      });
    });
  else
    for (const i in t)
      this.off(i, t[i]);
  return this;
};
s.remove = function(t) {
  return T(this, t).detach().off(), this;
};
s.replaceWith = function(t) {
  return this.before(t).remove();
};
s.replaceAll = function(t) {
  return u(t).replaceWith(this), this;
};
function jn(t, n, e, i, r) {
  if (!g(t)) {
    for (const o in t)
      this.on(o, n, e, t[o], r);
    return this;
  }
  return g(n) || (b(n) || j(n) ? n = "" : b(e) ? (e = n, n = "") : (i = e, e = n, n = "")), H(i) || (i = e, e = void 0), i ? (p(tt(t), (o, c) => {
    const [f, l] = wt(c), a = bt(f), w = f in Wt, y = f in Ct;
    a && this.each(($t, C) => {
      if (!h(C) && !M(C) && !P(C))
        return;
      const B = function(d) {
        if (d.target[`___i${d.type}`])
          return d.stopImmediatePropagation();
        if (d.namespace && !zt(l, d.namespace.split(yt)) || !n && (y && (d.target !== C || d.___ot === a) || w && d.relatedTarget && C.contains(d.relatedTarget)))
          return;
        let A = C;
        if (n) {
          let R = d.target;
          for (; !jt(R, n); )
            if (R === C || (R = R.parentNode, !R))
              return;
          A = R;
        }
        Object.defineProperty(d, "currentTarget", {
          configurable: !0,
          get() {
            return A;
          }
        }), Object.defineProperty(d, "delegateTarget", {
          configurable: !0,
          get() {
            return C;
          }
        }), Object.defineProperty(d, "data", {
          configurable: !0,
          get() {
            return e;
          }
        });
        const tn = i.call(A, d, d.___td);
        r && W(C, a, l, n, B), tn === !1 && (d.preventDefault(), d.stopPropagation());
      };
      B.guid = i.guid = i.guid || u.guid++, Bn(C, a, l, n, B);
    });
  }), this) : this;
}
s.on = jn;
function Dn(t, n, e, i) {
  return this.on(t, n, e, i, !0);
}
s.one = Dn;
const Vn = /\r?\n/g;
function Fn(t, n) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(n.replace(Vn, `\r
`))}`;
}
const Zn = /file|reset|submit|button|image/i, Jt = /radio|checkbox/i;
s.serialize = function() {
  let t = "";
  return this.each((n, e) => {
    p(e.elements || [e], (i, r) => {
      if (r.disabled || !r.name || r.tagName === "FIELDSET" || Zn.test(r.type) || Jt.test(r.type) && !r.checked)
        return;
      const o = Vt(r);
      if (!b(o)) {
        const c = X(o) ? o : [o];
        p(c, (f, l) => {
          t += Fn(r.name, l);
        });
      }
    });
  }), t.slice(1);
};
class In {
  constructor() {
  }
}
function _t(t) {
  return t == null ? "null" : Array.isArray(t) ? "array" : typeof t == "string" ? "string" : typeof t == "number" ? "number" : typeof t == "boolean" ? "boolean" : "object";
}
function Un(t) {
  try {
    return typeof t == "string" ? JSON.parse(t) : Array.isArray(t) ? Object.assign([], t) : u.isPlainObject(t) ? Object.assign({}, t) : {};
  } catch (n) {
    console.error("error", n.message);
  }
}
function Wn(t) {
  return Array.isArray(t) ? t.length : u.isPlainObject(t) ? Object.keys(t).length : NaN;
}
const qn = {
  target: void 0,
  data: void 0,
  between: "after",
  open: !0,
  callback: void 0
}, zn = '<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-90, 10, 10)"><path d="M7 9L10 12L13 9" fill="currentColor"/><path d="M7 9L10 12L13 9H7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>', Jn = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', Kn = {
  object: '<svg viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1)"><path d="M2.296 5.166C2.296 7.238 3.78 8.162 5.166 8.162C6.538 8.162 8.022 7.238 8.022 5.166C8.022 3.094 6.538 2.156 5.166 2.156C3.78 2.156 2.296 3.094 2.296 5.166ZM0 5.18C0 2.03 2.366 0 5.166 0C7.952 0 10.318 2.03 10.318 5.18C10.318 8.316 7.952 10.346 5.166 10.346C2.366 10.346 0 8.316 0 5.18Z" fill="currentColor"/></g></svg>',
  array: '<svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.728 9.926L6.902 7.658H2.87L2.044 9.926H0L3.808 0H6.048L9.828 9.926H7.728ZM4.886 2.142L3.514 5.894H6.258L4.886 2.142Z" fill="currentColor"/></svg>',
  string: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1.5)"><path d="M7.39203 2.576L5.65603 3.108C5.55803 2.562 5.11003 1.708 3.85003 1.708C2.91203 1.708 2.29603 2.31 2.29603 2.968C2.29603 3.514 2.64603 3.948 3.37403 4.088L4.76003 4.354C6.56603 4.704 7.53203 5.88 7.53203 7.28C7.53203 8.806 6.25803 10.346 3.94803 10.346C1.31603 10.346 0.154031 8.652 3.05176e-05 7.238L1.79203 6.762C1.87603 7.742 2.56203 8.624 3.96203 8.624C4.99803 8.624 5.57203 8.106 5.57203 7.406C5.57203 6.832 5.13803 6.384 4.36803 6.23L2.98203 5.95C1.40003 5.628 0.378031 4.606 0.378031 3.108C0.378031 1.344 1.96003 0 3.83603 0C6.24403 0 7.16803 1.456 7.39203 2.576Z" fill="currentColor"/></g></svg>',
  number: '<svg viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1)"><path d="M8.47003 9.926H6.44003L1.93203 2.884V9.926H3.05176e-05V0H2.40803L6.53803 6.566V0H8.47003V9.926Z" fill="currentColor"/></g></svg>',
  boolean: '<svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 .75)"><path d="M3.05176e-05 0H3.57003C5.50203 0 6.59403 1.134 6.59403 2.674C6.59403 3.696 5.97803 4.522 5.15203 4.802C6.11803 5.04 6.90203 5.922 6.90203 7.154C6.90203 8.764 5.69803 9.926 3.83603 9.926H3.05176e-05V0ZM1.90403 4.102H3.27603C4.15803 4.102 4.69003 3.612 4.69003 2.856C4.69003 2.1 4.20003 1.624 3.26203 1.624H1.90403V4.102ZM1.90403 8.316H3.47203C4.41003 8.316 4.97003 7.826 4.97003 7.028C4.97003 6.244 4.46603 5.698 3.50003 5.698H1.90403V8.316Z" fill="currentColor"/></g></svg>',
  null: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1.5)"><path d="M3.808 10.15C1.694 10.15 0 8.848 0 6.412V0H1.932V6.272C1.932 7.574 2.66 8.26 3.808 8.26C4.984 8.26 5.698 7.574 5.698 6.272V0H7.63V6.412C7.63 8.848 5.936 10.15 3.808 10.15Z" fill="currentColor"/></g></svg>'
};
var v, q, D, ut, z, Kt, J, Yt, V, ct, K, Gt, F, ft, Y, Xt, G, Qt, Z, at;
class Gn {
  constructor(n, e) {
    $(this, D);
    $(this, z);
    $(this, J);
    $(this, V);
    $(this, K);
    $(this, F);
    $(this, Y);
    $(this, G);
    $(this, Z);
    $(this, v, {
      wrap: null,
      tree: null
    });
    $(this, q, void 0);
    N(this, v).wrap = u(n), vt(this, q, new In()), this.replace(e);
  }
  clear() {
    N(this, v).tree && N(this, v).wrap.empty();
  }
  /**
   * replace
   * @param {object|array} src
   */
  replace(n) {
    this.clear(), n = Un(n);
    const e = m(this, z, Kt).call(this, n);
    this.import(e, n);
  }
  /**
   * import data
   * @param {HTMLElement} target
   * @param {object|array} src
   */
  import(n, e) {
    u(n), u.each(e, (i, r) => {
      const o = _t(r), c = { key: i, value: r, type: o };
      this.addNode({
        target: n,
        data: c,
        between: "after",
        open: !1,
        callback: (f, l) => this.import(f, l)
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
  addNode(n) {
    n = Object.assign({}, qn, n);
    const { target: e, data: i, between: r, open: o, callback: c } = n, f = u(e), { key: l, value: a, type: w } = i, y = m(this, D, ut).call(this, w);
    m(this, K, Gt).call(this, y), m(this, F, ft).call(this, y, o), m(this, V, ct).call(this, y, w), m(this, Y, Xt).call(this, y, l), m(this, Z, at).call(this, y, a), m(this, G, Qt).call(this, y, w, a), m(this, J, Yt).call(this, f.find("& > .node__children > ul"), y, r), (w === "array" || w === "object") && c && typeof c == "function" && c(y.get(0), a);
  }
  changeNodeType(n, e) {
    u(n).attr("data-type", e);
  }
  duplicateNode() {
  }
  removeNode() {
  }
  controlFold(n, e) {
    const i = u(n);
    e === void 0 ? i.toggleClass("open") : e === !0 ? i.addClass("open") : i.removeClass("open");
  }
  destroy() {
  }
}
v = new WeakMap(), q = new WeakMap(), D = new WeakSet(), ut = function(n, e = !1) {
  let i = `<li data-type="${n}" class="node">`;
  return i += '<div class="node__body">', e || (i += `<span class="sort">${Jn}</span>`), i += '<button type="button" class="type"></button>', i += `<button type="button" class="fold">${zn}</button>`, e || (i += '<div class="key"></div>'), i += '<em class="count"></em>', e || (i += '<div class="value"></div>'), i += "</div>", i += '<div class="node__children"><ul class="tree"/></div>', i += "</li>", u(i);
}, z = new WeakSet(), Kt = function(n) {
  const e = _t(n), i = m(this, D, ut).call(this, e, !0);
  return m(this, F, ft).call(this, i, !0), m(this, V, ct).call(this, i, e), m(this, Z, at).call(this, i, n), N(this, v).tree = u('<ul class="root"/>'), N(this, v).tree.append(i), N(this, v).wrap.append(N(this, v).tree), i;
}, J = new WeakSet(), Yt = function(n, e, i) {
  switch (i) {
    case "before":
      n.prepend(e);
      break;
    default:
      n.append(e);
      break;
  }
}, V = new WeakSet(), ct = function(n, e) {
  const i = n.find(".type");
  i.html(`<i class="type-icon type-icon--${e}">${Kn[e]}</i>`), i.on("click", (r) => {
    console.log(u(r.currentTarget));
  });
}, K = new WeakSet(), Gt = function(n) {
}, F = new WeakSet(), ft = function(n, e) {
  const i = n.find(".fold");
  this.controlFold(n, e), i.on("click", (r) => {
    const c = u(r.currentTarget).closest(".node");
    this.controlFold(c);
  });
}, Y = new WeakSet(), Xt = function(n, e) {
  const i = n.find(".key");
  let r;
  function o(c) {
    if (c.keyCode === 13)
      return c.preventDefault();
  }
  r = u(`<div class="label-field" contenteditable="true" data-placeholder="empty">${e}</div>`), r.on("keydown", o), r && i.empty().append(r);
}, G = new WeakSet(), Qt = function(n, e, i) {
  const r = n.find(".value");
  let o;
  function c(l) {
    if (u(this), l.ctrlKey || l.metaKey)
      switch (l.keyCode) {
        case 66:
        case 98:
          l.preventDefault();
          break;
        case 73:
        case 105:
          l.preventDefault();
          break;
        case 85:
        case 117:
          l.preventDefault();
          break;
      }
  }
  function f(l) {
    const a = u(l.currentTarget), w = !a.data("value");
    a.data("value", w).find("i").text(w.toString().toUpperCase());
  }
  switch (e) {
    case "string":
      o = u(`<div class="label-field" contenteditable="true" data-placeholder="empty">${i}</div>`), o.on("keydown", c);
      break;
    case "number":
      o = u(`<input type="number" value="${i}" placeholder="0" class="label-field"/>`);
      break;
    case "boolean":
      o = u(`<button type="button" data-value="${i}" class="label-switch"><span><i>${i.toString().toUpperCase()}</i></span></button>`), o.on("click", f);
      break;
    case "null":
      o = u('<em class="label-null">NULL</em>');
      break;
  }
  o && r.empty().append(o);
}, Z = new WeakSet(), at = function(n, e) {
  const i = n.find(".count"), r = Wn(e);
  isNaN(r) || i.text(r);
};
export {
  Gn as default
};
