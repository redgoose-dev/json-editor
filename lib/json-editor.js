var fe = Object.defineProperty;
var de = (t, e, n) => e in t ? fe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Lt = (t, e, n) => (de(t, typeof e != "symbol" ? e + "" : e, n), n), ut = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var h = (t, e, n) => (ut(t, e, "read from private field"), n ? n.call(t) : e.get(t)), b = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, at = (t, e, n, i) => (ut(t, e, "write to private field"), i ? i.call(t, n) : e.set(t, n), n);
var w = (t, e, n) => (ut(t, e, "access private method"), n);
const S = document, z = window, Rt = S.documentElement, M = S.createElement.bind(S), Dt = M("div"), lt = M("table"), he = M("tbody"), Tt = M("tr"), { isArray: rt, prototype: Vt } = Array, { concat: pe, filter: bt, indexOf: jt, map: Ft, push: ge, slice: It, some: wt, splice: ye } = Vt, me = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, be = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, we = /<.+>/, Ce = /^\w+$/;
function Ct(t, e) {
  const n = ke(e);
  return !t || !n && !A(e) && !m(e) ? [] : !n && be.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && Ce.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class st {
  constructor(e, n) {
    if (!e)
      return;
    if (ht(e))
      return e;
    let i = e;
    if ($(e)) {
      const r = n || S;
      if (i = me.test(e) && A(r) ? r.getElementById(e.slice(1).replace(/\\/g, "")) : we.test(e) ? Ut(e) : ht(r) ? r.find(e) : $(r) ? u(r).find(e) : Ct(e, r), !i)
        return;
    } else if (H(e))
      return this.ready(e);
    (i.nodeType || i === z) && (i = [i]), this.length = i.length;
    for (let r = 0, s = this.length; r < s; r++)
      this[r] = i[r];
  }
  init(e, n) {
    return new st(e, n);
  }
}
const o = st.prototype, u = o.init;
u.fn = u.prototype = o;
o.length = 0;
o.splice = ye;
typeof Symbol == "function" && (o[Symbol.iterator] = Vt[Symbol.iterator]);
function ht(t) {
  return t instanceof st;
}
function R(t) {
  return !!t && t === t.window;
}
function A(t) {
  return !!t && t.nodeType === 9;
}
function ke(t) {
  return !!t && t.nodeType === 11;
}
function m(t) {
  return !!t && t.nodeType === 1;
}
function $e(t) {
  return !!t && t.nodeType === 3;
}
function ve(t) {
  return typeof t == "boolean";
}
function H(t) {
  return typeof t == "function";
}
function $(t) {
  return typeof t == "string";
}
function v(t) {
  return t === void 0;
}
function j(t) {
  return t === null;
}
function Zt(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function kt(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
u.isWindow = R;
u.isFunction = H;
u.isArray = rt;
u.isNumeric = Zt;
u.isPlainObject = kt;
function C(t, e, n) {
  if (n) {
    let i = t.length;
    for (; i--; )
      if (e.call(t[i], i, t[i]) === !1)
        return t;
  } else if (kt(t)) {
    const i = Object.keys(t);
    for (let r = 0, s = i.length; r < s; r++) {
      const c = i[r];
      if (e.call(t[c], c, t[c]) === !1)
        return t;
    }
  } else
    for (let i = 0, r = t.length; i < r; i++)
      if (e.call(t[i], i, t[i]) === !1)
        return t;
  return t;
}
u.each = C;
o.each = function(t) {
  return C(this, t);
};
o.empty = function() {
  return this.each((t, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function K(...t) {
  const e = ve(t[0]) ? t.shift() : !1, n = t.shift(), i = t.length;
  if (!n)
    return {};
  if (!i)
    return K(e, u, n);
  for (let r = 0; r < i; r++) {
    const s = t[r];
    for (const c in s)
      e && (rt(s[c]) || kt(s[c])) ? ((!n[c] || n[c].constructor !== s[c].constructor) && (n[c] = new s[c].constructor()), K(e, n[c], s[c])) : n[c] = s[c];
  }
  return n;
}
u.extend = K;
o.extend = function(t) {
  return K(o, t);
};
const xe = /\S+/g;
function ot(t) {
  return $(t) ? t.match(xe) || [] : [];
}
o.toggleClass = function(t, e) {
  const n = ot(t), i = !v(e);
  return this.each((r, s) => {
    m(s) && C(n, (c, l) => {
      i ? e ? s.classList.add(l) : s.classList.remove(l) : s.classList.toggle(l);
    });
  });
};
o.addClass = function(t) {
  return this.toggleClass(t, !0);
};
o.removeAttr = function(t) {
  const e = ot(t);
  return this.each((n, i) => {
    m(i) && C(e, (r, s) => {
      i.removeAttribute(s);
    });
  });
};
function Ee(t, e) {
  if (t) {
    if ($(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !m(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return j(n) ? void 0 : n;
      }
      return v(e) ? this : j(e) ? this.removeAttr(t) : this.each((n, i) => {
        m(i) && i.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
o.attr = Ee;
o.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
o.hasClass = function(t) {
  return !!t && wt.call(this, (e) => m(e) && e.classList.contains(t));
};
o.get = function(t) {
  return v(t) ? It.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
};
o.eq = function(t) {
  return u(this.get(t));
};
o.first = function() {
  return this.eq(0);
};
o.last = function() {
  return this.eq(-1);
};
function Ne(t) {
  return v(t) ? this.get().map((e) => m(e) || $e(e) ? e.textContent : "").join("") : this.each((e, n) => {
    m(n) && (n.textContent = t);
  });
}
o.text = Ne;
function L(t, e, n) {
  if (!m(t))
    return;
  const i = z.getComputedStyle(t, null);
  return n ? i.getPropertyValue(e) || void 0 : i[e] || t.style[e];
}
function E(t, e) {
  return parseInt(L(t, e), 10) || 0;
}
function _t(t, e) {
  return E(t, `border${e ? "Left" : "Top"}Width`) + E(t, `padding${e ? "Left" : "Top"}`) + E(t, `padding${e ? "Right" : "Bottom"}`) + E(t, `border${e ? "Right" : "Bottom"}Width`);
}
const ft = {};
function Se(t) {
  if (ft[t])
    return ft[t];
  const e = M(t);
  S.body.insertBefore(e, null);
  const n = L(e, "display");
  return S.body.removeChild(e), ft[t] = n !== "none" ? n : "block";
}
function Ot(t) {
  return L(t, "display") === "none";
}
function Wt(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function ct(t) {
  return $(t) ? (e, n) => Wt(n, t) : H(t) ? t : ht(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
o.filter = function(t) {
  const e = ct(t);
  return u(bt.call(this, (n, i) => e.call(n, i, n)));
};
function _(t, e) {
  return e ? t.filter(e) : t;
}
o.detach = function(t) {
  return _(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const Le = /^\s*<(\w+)[^>]*>/, Te = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, At = {
  "*": Dt,
  tr: he,
  td: Tt,
  th: Tt,
  thead: lt,
  tbody: lt,
  tfoot: lt
};
function Ut(t) {
  if (!$(t))
    return [];
  if (Te.test(t))
    return [M(RegExp.$1)];
  const e = Le.test(t) && RegExp.$1, n = At[e] || At["*"];
  return n.innerHTML = t, u(n.childNodes).detach().get();
}
u.parseHTML = Ut;
o.has = function(t) {
  const e = $(t) ? (n, i) => Ct(t, i).length : (n, i) => i.contains(t);
  return this.filter(e);
};
o.not = function(t) {
  const e = ct(t);
  return this.filter((n, i) => (!$(t) || m(i)) && !e.call(i, n, i));
};
function T(t, e, n, i) {
  const r = [], s = H(e), c = i && ct(i);
  for (let l = 0, a = t.length; l < a; l++)
    if (s) {
      const f = e(t[l]);
      f.length && ge.apply(r, f);
    } else {
      let f = t[l][e];
      for (; f != null && !(i && c(-1, f)); )
        r.push(f), f = n ? f[e] : null;
    }
  return r;
}
function qt(t) {
  return t.multiple && t.options ? T(bt.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function _e(t) {
  return arguments.length ? this.each((e, n) => {
    const i = n.multiple && n.options;
    if (i || te.test(n.type)) {
      const r = rt(t) ? Ft.call(t, String) : j(t) ? [] : [String(t)];
      i ? C(n.options, (s, c) => {
        c.selected = r.indexOf(c.value) >= 0;
      }, !0) : n.checked = r.indexOf(n.value) >= 0;
    } else
      n.value = v(t) || j(t) ? "" : t;
  }) : this[0] && qt(this[0]);
}
o.val = _e;
o.is = function(t) {
  const e = ct(t);
  return wt.call(this, (n, i) => e.call(n, i, n));
};
u.guid = 1;
function N(t) {
  return t.length > 1 ? bt.call(t, (e, n, i) => jt.call(i, e) === n) : t;
}
u.unique = N;
o.add = function(t, e) {
  return u(N(this.get().concat(u(t, e).get())));
};
o.children = function(t) {
  return _(u(N(T(this, (e) => e.children))), t);
};
o.parent = function(t) {
  return _(u(N(T(this, "parentNode"))), t);
};
o.index = function(t) {
  const e = t ? u(t)[0] : this[0], n = t ? this : u(e).parent().children();
  return jt.call(n, e);
};
o.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const n = this.parent();
  return n.length ? n.closest(t) : e;
};
o.siblings = function(t) {
  return _(u(N(T(this, (e) => u(e).parent().children().not(e)))), t);
};
o.find = function(t) {
  return u(N(T(this, (e) => Ct(t, e))));
};
const Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ae = /^$|^module$|\/(java|ecma)script/i, Me = ["type", "src", "nonce", "noModule"];
function He(t, e) {
  const n = u(t);
  n.filter("script").add(n.find("script")).each((i, r) => {
    if (Ae.test(r.type) && Rt.contains(r)) {
      const s = M("script");
      s.text = r.textContent.replace(Oe, ""), C(Me, (c, l) => {
        r[l] && (s[l] = r[l]);
      }), e.head.insertBefore(s, null), e.head.removeChild(s);
    }
  });
}
function Pe(t, e, n, i, r) {
  i ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), r && He(e, t.ownerDocument);
}
function O(t, e, n, i, r, s, c, l) {
  return C(t, (a, f) => {
    C(u(f), (d, p) => {
      C(u(e), (D, y) => {
        const V = n ? p : y, g = n ? y : p, P = n ? d : D;
        Pe(V, P ? g.cloneNode(!0) : g, i, r, !P);
      }, l);
    }, c);
  }, s), e;
}
o.after = function() {
  return O(arguments, this, !1, !1, !1, !0, !0);
};
o.append = function() {
  return O(arguments, this, !1, !1, !0);
};
function Be(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (v(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, i) => {
    m(i) && (e ? u(i).empty().append(t) : i.innerHTML = t);
  });
}
o.html = Be;
o.appendTo = function(t) {
  return O(arguments, this, !0, !1, !0);
};
o.wrapInner = function(t) {
  return this.each((e, n) => {
    const i = u(n), r = i.contents();
    r.length ? r.wrapAll(t) : i.append(t);
  });
};
o.before = function() {
  return O(arguments, this, !1, !0);
};
o.wrapAll = function(t) {
  let e = u(t), n = e[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(e), this.appendTo(n);
};
o.wrap = function(t) {
  return this.each((e, n) => {
    const i = u(t)[0];
    u(n).wrapAll(e ? i.cloneNode(!0) : i);
  });
};
o.insertAfter = function(t) {
  return O(arguments, this, !0, !1, !1, !1, !1, !0);
};
o.insertBefore = function(t) {
  return O(arguments, this, !0, !0);
};
o.prepend = function() {
  return O(arguments, this, !1, !0, !0, !0, !0);
};
o.prependTo = function(t) {
  return O(arguments, this, !0, !0, !0, !1, !1, !0);
};
o.contents = function() {
  return u(N(T(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
o.next = function(t, e, n) {
  return _(u(N(T(this, "nextElementSibling", e, n))), t);
};
o.nextAll = function(t) {
  return this.next(t, !0);
};
o.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
o.parents = function(t, e) {
  return _(u(N(T(this, "parentElement", !0, e))), t);
};
o.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
o.prev = function(t, e, n) {
  return _(u(N(T(this, "previousElementSibling", e, n))), t);
};
o.prevAll = function(t) {
  return this.prev(t, !0);
};
o.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
o.map = function(t) {
  return u(pe.apply([], Ft.call(this, (e, n) => t.call(e, n, e))));
};
o.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
o.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && L(n, "position") === "static"; )
      n = n.offsetParent;
    return n || Rt;
  });
};
o.slice = function(t, e) {
  return u(It.call(this, t, e));
};
const Re = /-([a-z])/g;
function $t(t) {
  return t.replace(Re, (e, n) => n.toUpperCase());
}
o.ready = function(t) {
  const e = () => setTimeout(t, 0, u);
  return S.readyState !== "loading" ? e() : S.addEventListener("DOMContentLoaded", e), this;
};
o.unwrap = function() {
  return this.parent().each((t, e) => {
    if (e.tagName === "BODY")
      return;
    const n = u(e);
    n.replaceWith(n.children());
  }), this;
};
o.offset = function() {
  const t = this[0];
  if (!t)
    return;
  const e = t.getBoundingClientRect();
  return {
    top: e.top + z.pageYOffset,
    left: e.left + z.pageXOffset
  };
};
o.position = function() {
  const t = this[0];
  if (!t)
    return;
  const e = L(t, "position") === "fixed", n = e ? t.getBoundingClientRect() : this.offset();
  if (!e) {
    const i = t.ownerDocument;
    let r = t.offsetParent || i.documentElement;
    for (; (r === i.body || r === i.documentElement) && L(r, "position") === "static"; )
      r = r.parentNode;
    if (r !== t && m(r)) {
      const s = u(r).offset();
      n.top -= s.top + E(r, "borderTopWidth"), n.left -= s.left + E(r, "borderLeftWidth");
    }
  }
  return {
    top: n.top - E(t, "marginTop"),
    left: n.left - E(t, "marginLeft")
  };
};
const zt = {
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
      return t = zt[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, i) => {
        i[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
o.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[zt[t] || t];
  });
};
const De = /^--/;
function vt(t) {
  return De.test(t);
}
const dt = {}, { style: Ve } = Dt, je = ["webkit", "moz", "ms"];
function Fe(t, e = vt(t)) {
  if (e)
    return t;
  if (!dt[t]) {
    const n = $t(t), i = `${n[0].toUpperCase()}${n.slice(1)}`, r = `${n} ${je.join(`${i} `)}${i}`.split(" ");
    C(r, (s, c) => {
      if (c in Ve)
        return dt[t] = c, !1;
    });
  }
  return dt[t];
}
const Ie = {
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
function Kt(t, e, n = vt(t)) {
  return !n && !Ie[t] && Zt(e) ? `${e}px` : e;
}
function Ze(t, e) {
  if ($(t)) {
    const n = vt(t);
    return t = Fe(t, n), arguments.length < 2 ? this[0] && L(this[0], t, n) : t ? (e = Kt(t, e, n), this.each((i, r) => {
      m(r) && (n ? r.style.setProperty(t, e) : r.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
o.css = Ze;
function Jt(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const We = /^\s+|\s+$/;
function Mt(t, e) {
  const n = t.dataset[e] || t.dataset[$t(e)];
  return We.test(n) ? n : Jt(JSON.parse, n);
}
function Ue(t, e, n) {
  n = Jt(JSON.stringify, n), t.dataset[$t(e)] = n;
}
function qe(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const i in this[0].dataset)
      n[i] = Mt(this[0], i);
    return n;
  }
  if ($(t))
    return arguments.length < 2 ? this[0] && Mt(this[0], t) : v(e) ? this : this.each((n, i) => {
      Ue(i, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
o.data = qe;
function Yt(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
C([!0, !1], (t, e) => {
  C(["Width", "Height"], (n, i) => {
    const r = `${e ? "outer" : "inner"}${i}`;
    o[r] = function(s) {
      if (this[0])
        return R(this[0]) ? e ? this[0][`inner${i}`] : this[0].document.documentElement[`client${i}`] : A(this[0]) ? Yt(this[0], i) : this[0][`${e ? "offset" : "client"}${i}`] + (s && e ? E(this[0], `margin${n ? "Top" : "Left"}`) + E(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
C(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  o[n] = function(i) {
    if (!this[0])
      return v(i) ? void 0 : this;
    if (!arguments.length)
      return R(this[0]) ? this[0].document.documentElement[`client${e}`] : A(this[0]) ? Yt(this[0], e) : this[0].getBoundingClientRect()[n] - _t(this[0], !t);
    const r = parseInt(i, 10);
    return this.each((s, c) => {
      if (!m(c))
        return;
      const l = L(c, "boxSizing");
      c.style[n] = Kt(n, r + (l === "border-box" ? _t(c, !t) : 0));
    });
  };
});
const Ht = "___cd";
o.toggle = function(t) {
  return this.each((e, n) => {
    if (!m(n))
      return;
    const i = Ot(n);
    (v(t) ? i : t) ? (n.style.display = n[Ht] || "", Ot(n) && (n.style.display = Se(n.tagName))) : i || (n[Ht] = L(n, "display"), n.style.display = "none");
  });
};
o.hide = function() {
  return this.toggle(!1);
};
o.show = function() {
  return this.toggle(!0);
};
const Pt = "___ce", xt = ".", Et = { focus: "focusin", blur: "focusout" }, Gt = { mouseenter: "mouseover", mouseleave: "mouseout" }, ze = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Nt(t) {
  return Gt[t] || Et[t] || t;
}
function St(t) {
  const e = t.split(xt);
  return [e[0], e.slice(1).sort()];
}
o.trigger = function(t, e) {
  if ($(t)) {
    const [i, r] = St(t), s = Nt(i);
    if (!s)
      return this;
    const c = ze.test(s) ? "MouseEvents" : "HTMLEvents";
    t = S.createEvent(c), t.initEvent(s, !0, !0), t.namespace = r.join(xt), t.___ot = i;
  }
  t.___td = e;
  const n = t.___ot in Et;
  return this.each((i, r) => {
    n && H(r[t.___ot]) && (r[`___i${t.type}`] = !0, r[t.___ot](), r[`___i${t.type}`] = !1), r.dispatchEvent(t);
  });
};
function Xt(t) {
  return t[Pt] = t[Pt] || {};
}
function Ke(t, e, n, i, r) {
  const s = Xt(t);
  s[e] = s[e] || [], s[e].push([n, i, r]), t.addEventListener(e, r);
}
function Qt(t, e) {
  return !e || !wt.call(e, (n) => t.indexOf(n) < 0);
}
function J(t, e, n, i, r) {
  const s = Xt(t);
  if (e)
    s[e] && (s[e] = s[e].filter(([c, l, a]) => {
      if (r && a.guid !== r.guid || !Qt(c, n) || i && i !== l)
        return !0;
      t.removeEventListener(e, a);
    }));
  else
    for (e in s)
      J(t, e, n, i, r);
}
o.off = function(t, e, n) {
  if (v(t))
    this.each((i, r) => {
      !m(r) && !A(r) && !R(r) || J(r);
    });
  else if ($(t))
    H(e) && (n = e, e = ""), C(ot(t), (i, r) => {
      const [s, c] = St(r), l = Nt(s);
      this.each((a, f) => {
        !m(f) && !A(f) && !R(f) || J(f, l, c, e, n);
      });
    });
  else
    for (const i in t)
      this.off(i, t[i]);
  return this;
};
o.remove = function(t) {
  return _(this, t).detach().off(), this;
};
o.replaceWith = function(t) {
  return this.before(t).remove();
};
o.replaceAll = function(t) {
  return u(t).replaceWith(this), this;
};
function Je(t, e, n, i, r) {
  if (!$(t)) {
    for (const s in t)
      this.on(s, e, n, t[s], r);
    return this;
  }
  return $(e) || (v(e) || j(e) ? e = "" : v(n) ? (n = e, e = "") : (i = n, n = e, e = "")), H(i) || (i = n, n = void 0), i ? (C(ot(t), (s, c) => {
    const [l, a] = St(c), f = Nt(l), d = l in Gt, p = l in Et;
    f && this.each((D, y) => {
      if (!m(y) && !A(y) && !R(y))
        return;
      const V = function(g) {
        if (g.target[`___i${g.type}`])
          return g.stopImmediatePropagation();
        if (g.namespace && !Qt(a, g.namespace.split(xt)) || !e && (p && (g.target !== y || g.___ot === f) || d && g.relatedTarget && y.contains(g.relatedTarget)))
          return;
        let P = y;
        if (e) {
          let B = g.target;
          for (; !Wt(B, e); )
            if (B === y || (B = B.parentNode, !B))
              return;
          P = B;
        }
        Object.defineProperty(g, "currentTarget", {
          configurable: !0,
          get() {
            return P;
          }
        }), Object.defineProperty(g, "delegateTarget", {
          configurable: !0,
          get() {
            return y;
          }
        }), Object.defineProperty(g, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const le = i.call(P, g, g.___td);
        r && J(y, f, a, e, V), le === !1 && (g.preventDefault(), g.stopPropagation());
      };
      V.guid = i.guid = i.guid || u.guid++, Ke(y, f, a, e, V);
    });
  }), this) : this;
}
o.on = Je;
function Ye(t, e, n, i) {
  return this.on(t, e, n, i, !0);
}
o.one = Ye;
const Ge = /\r?\n/g;
function Xe(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(Ge, `\r
`))}`;
}
const Qe = /file|reset|submit|button|image/i, te = /radio|checkbox/i;
o.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    C(n.elements || [n], (i, r) => {
      if (r.disabled || !r.name || r.tagName === "FIELDSET" || Qe.test(r.type) || te.test(r.type) && !r.checked)
        return;
      const s = qt(r);
      if (!v(s)) {
        const c = rt(s) ? s : [s];
        C(c, (l, a) => {
          t += Xe(r.name, a);
        });
      }
    });
  }), t.slice(1);
};
const tn = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12L10 8L6 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', en = '<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-90, 10, 10)"><path d="M7 9L10 12L13 9" fill="currentColor"/><path d="M7 9L10 12L13 9H7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>', nn = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', ee = {
  object: '<svg viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1)"><path d="M2.296 5.166C2.296 7.238 3.78 8.162 5.166 8.162C6.538 8.162 8.022 7.238 8.022 5.166C8.022 3.094 6.538 2.156 5.166 2.156C3.78 2.156 2.296 3.094 2.296 5.166ZM0 5.18C0 2.03 2.366 0 5.166 0C7.952 0 10.318 2.03 10.318 5.18C10.318 8.316 7.952 10.346 5.166 10.346C2.366 10.346 0 8.316 0 5.18Z" fill="currentColor"/></g></svg>',
  array: '<svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.728 9.926L6.902 7.658H2.87L2.044 9.926H0L3.808 0H6.048L9.828 9.926H7.728ZM4.886 2.142L3.514 5.894H6.258L4.886 2.142Z" fill="currentColor"/></svg>',
  string: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1.5)"><path d="M7.39203 2.576L5.65603 3.108C5.55803 2.562 5.11003 1.708 3.85003 1.708C2.91203 1.708 2.29603 2.31 2.29603 2.968C2.29603 3.514 2.64603 3.948 3.37403 4.088L4.76003 4.354C6.56603 4.704 7.53203 5.88 7.53203 7.28C7.53203 8.806 6.25803 10.346 3.94803 10.346C1.31603 10.346 0.154031 8.652 3.05176e-05 7.238L1.79203 6.762C1.87603 7.742 2.56203 8.624 3.96203 8.624C4.99803 8.624 5.57203 8.106 5.57203 7.406C5.57203 6.832 5.13803 6.384 4.36803 6.23L2.98203 5.95C1.40003 5.628 0.378031 4.606 0.378031 3.108C0.378031 1.344 1.96003 0 3.83603 0C6.24403 0 7.16803 1.456 7.39203 2.576Z" fill="currentColor"/></g></svg>',
  number: '<svg viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1)"><path d="M8.47003 9.926H6.44003L1.93203 2.884V9.926H3.05176e-05V0H2.40803L6.53803 6.566V0H8.47003V9.926Z" fill="currentColor"/></g></svg>',
  boolean: '<svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 .75)"><path d="M3.05176e-05 0H3.57003C5.50203 0 6.59403 1.134 6.59403 2.674C6.59403 3.696 5.97803 4.522 5.15203 4.802C6.11803 5.04 6.90203 5.922 6.90203 7.154C6.90203 8.764 5.69803 9.926 3.83603 9.926H3.05176e-05V0ZM1.90403 4.102H3.27603C4.15803 4.102 4.69003 3.612 4.69003 2.856C4.69003 2.1 4.20003 1.624 3.26203 1.624H1.90403V4.102ZM1.90403 8.316H3.47203C4.41003 8.316 4.97003 7.826 4.97003 7.028C4.97003 6.244 4.46603 5.698 3.50003 5.698H1.90403V8.316Z" fill="currentColor"/></g></svg>',
  null: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1.5)"><path d="M3.808 10.15C1.694 10.15 0 8.848 0 6.412V0H1.932V6.272C1.932 7.574 2.66 8.26 3.808 8.26C4.984 8.26 5.698 7.574 5.698 6.272V0H7.63V6.412C7.63 8.848 5.936 10.15 3.808 10.15Z" fill="currentColor"/></g></svg>'
}, rn = [
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
var F, k, I, Y, ne, G, ie, X, re;
class sn {
  constructor(e, n, i) {
    b(this, Y);
    b(this, G);
    b(this, X);
    b(this, F, void 0);
    b(this, k, {
      node: void 0,
      type: void 0,
      dialog: void 0
    });
    b(this, I, void 0);
    at(this, F, e), h(this, k).node = n, at(this, I, h(this, k).node.data("type")), h(this, k).type = h(this, k).node.find("& > .node__body > .type"), h(this, k).type.addClass("open"), h(this, k).dialog = w(this, Y, ne).call(this, rn, h(this, I), i), h(this, k).dialog.on("click", (r) => r.stopPropagation()), h(this, k).dialog.find("button").on("click", (r) => w(this, G, ie).call(this, r)), h(this, k).type.append(h(this, k).dialog), u(window).on("click.json-editor-context", (r) => this.close(r)), u(window).on("keyup.json-editor-context", (r) => w(this, X, re).call(this, r));
  }
  close() {
    h(this, k).type.removeClass("open"), h(this, k).dialog.remove(), u(window).off("click.json-editor-context"), u(window).off("keyup.json-editor-context"), h(this, F).context = void 0;
  }
}
F = new WeakMap(), k = new WeakMap(), I = new WeakMap(), Y = new WeakSet(), ne = function(e, n, i = !1) {
  function r(c, l = void 0) {
    var f;
    let a = "<ol>";
    for (let d in c) {
      if (i && l === "change-type")
        switch (c[d].key) {
          case "string":
          case "number":
          case "boolean":
          case "null":
            continue;
        }
      let p = "", D = "", y = "";
      switch (c[d].key) {
        case "change-type":
          p = ' class="dropdown"', y = " disabled";
          break;
        case "insert":
          p = ' class="dropdown"', y = " disabled";
          break;
        case "duplicate":
          if (p = ' class="duplicate"', i)
            continue;
          break;
        case "remove":
          if (p = ' class="remove"', i)
            continue;
          break;
        case "object":
        case "array":
        case "string":
        case "number":
        case "boolean":
        case "null":
          p = ' class="type"', D = `<i class="type-icon type-icon--${c[d].key}">${ee[c[d].key]}</i>`, l === "change-type" && c[d].key === n && (y = " disabled");
          break;
      }
      a += `<li${p}>`, a += `<button type="button"${y}>`, a += D, a += `<em class="label">${c[d].label}</em>`, (c[d].key === "change-type" || c[d].key === "insert") && (a += `<span class="arrow">${tn}</span>`), a += "</button>", ((f = c[d].children) == null ? void 0 : f.length) > 0 && (a += '<div class="children">', a += r(c[d].children, c[d].key), a += "</div>"), a += "</li>";
    }
    return a += "</ol>", a;
  }
  let s = `<nav class="context${i ? " is-root" : ""}">`;
  return s += r(e), s += "</nav>", u(s);
}, G = new WeakSet(), ie = function(e) {
  const n = u(e.currentTarget);
  console.log("#onClickItem()", n), this.close();
}, X = new WeakSet(), re = function(e) {
  e.code === "Escape" && this.close();
};
function Bt(t) {
  return t == null ? "null" : Array.isArray(t) ? "array" : typeof t == "string" ? "string" : typeof t == "number" ? "number" : typeof t == "boolean" ? "boolean" : "object";
}
function on(t) {
  try {
    return typeof t == "string" ? JSON.parse(t) : Array.isArray(t) ? Object.assign([], t) : u.isPlainObject(t) ? Object.assign({}, t) : {};
  } catch (e) {
    console.error("error", e.message);
  }
}
function cn(t) {
  return Array.isArray(t) ? t.length : u.isPlainObject(t) ? Object.keys(t).length : NaN;
}
const un = {
  target: void 0,
  data: void 0,
  between: "after",
  open: !0,
  callback: void 0
};
var x, Z, pt, Q, se, tt, oe, W, gt, et, ce, U, yt, nt, ue, it, ae, q, mt;
class ln {
  constructor(e, n) {
    b(this, Z);
    b(this, Q);
    b(this, tt);
    b(this, W);
    b(this, et);
    b(this, U);
    b(this, nt);
    b(this, it);
    b(this, q);
    b(this, x, {
      wrap: null,
      tree: null
    });
    Lt(this, "context");
    h(this, x).wrap = u(e), this.replace(n);
  }
  clear() {
    h(this, x).tree && h(this, x).wrap.empty();
  }
  /**
   * replace
   * @param {object|array} src
   */
  replace(e) {
    this.clear(), e = on(e);
    const n = w(this, Q, se).call(this, e);
    this.import(n, e);
  }
  /**
   * import data
   * @param {HTMLElement} target
   * @param {object|array} src
   */
  import(e, n) {
    u(e), u.each(n, (i, r) => {
      const s = Bt(r), c = { key: i, value: r, type: s };
      this.addNode({
        target: e,
        data: c,
        between: "after",
        open: !1,
        callback: (l, a) => this.import(l, a)
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
    e = Object.assign({}, un, e);
    const { target: n, data: i, between: r, open: s, callback: c } = e, l = u(n), { key: a, value: f, type: d } = i, p = w(this, Z, pt).call(this, d);
    w(this, et, ce).call(this, p), w(this, U, yt).call(this, p, s), w(this, W, gt).call(this, p, d), w(this, nt, ue).call(this, p, a), w(this, q, mt).call(this, p, f), w(this, it, ae).call(this, p, d, f), w(this, tt, oe).call(this, l.find("& > .node__children > ul"), p, r), (d === "array" || d === "object") && c && typeof c == "function" && c(p.get(0), f);
  }
  changeNodeType(e, n) {
    u(e).attr("data-type", n);
  }
  duplicateNode() {
  }
  removeNode() {
  }
  controlFold(e, n) {
    const i = u(e);
    n === void 0 ? i.toggleClass("open") : n === !0 ? i.addClass("open") : i.removeClass("open");
  }
  destroy() {
  }
}
x = new WeakMap(), Z = new WeakSet(), pt = function(e, n = !1) {
  let i = `<li data-type="${e}" class="node">`;
  return i += '<div class="node__body">', n || (i += `<span class="sort">${nn}</span>`), i += '<div class="type"><button type="button"></button></div>', i += `<button type="button" class="fold">${en}</button>`, n || (i += '<div class="key"></div>'), i += '<em class="count"></em>', n || (i += '<div class="value"></div>'), i += "</div>", i += '<div class="node__children"><ul class="tree"/></div>', i += "</li>", u(i);
}, Q = new WeakSet(), se = function(e) {
  const n = Bt(e), i = w(this, Z, pt).call(this, n, !0);
  return w(this, U, yt).call(this, i, !0), w(this, W, gt).call(this, i, n, !0), w(this, q, mt).call(this, i, e), h(this, x).tree = u('<ul class="root"/>'), h(this, x).tree.append(i), h(this, x).wrap.append(h(this, x).tree), i;
}, tt = new WeakSet(), oe = function(e, n, i) {
  switch (i) {
    case "before":
      e.prepend(n);
      break;
    default:
      e.append(n);
      break;
  }
}, W = new WeakSet(), gt = function(e, n, i = !1) {
  const s = e.find(".type").children("button");
  s.html(`<i class="type-icon type-icon--${n}">${ee[n]}</i>`), s.on("click", async (c) => {
    const l = u(c.currentTarget);
    c.stopPropagation(), l.hasClass("open") ? this.context && this.context.close() : (this.context && this.context.close(), this.context = new sn(this, l.closest(".node"), i));
  });
}, et = new WeakSet(), ce = function(e) {
}, U = new WeakSet(), yt = function(e, n) {
  const i = e.find(".fold");
  this.controlFold(e, n), i.on("click", (r) => {
    const c = u(r.currentTarget).closest(".node");
    this.controlFold(c);
  });
}, nt = new WeakSet(), ue = function(e, n) {
  const i = e.find(".key");
  let r;
  function s(c) {
    if (c.keyCode === 13)
      return c.preventDefault();
  }
  r = u(`<div class="label-field" contenteditable="true" data-placeholder="empty">${n}</div>`), r.on("keydown", s), r && i.empty().append(r);
}, it = new WeakSet(), ae = function(e, n, i) {
  const r = e.find(".value");
  let s;
  function c(a) {
    if (u(this), a.ctrlKey || a.metaKey)
      switch (a.keyCode) {
        case 66:
        case 98:
          a.preventDefault();
          break;
        case 73:
        case 105:
          a.preventDefault();
          break;
        case 85:
        case 117:
          a.preventDefault();
          break;
      }
  }
  function l(a) {
    const f = u(a.currentTarget), d = !f.data("value");
    f.data("value", d).find("i").text(d.toString().toUpperCase());
  }
  switch (n) {
    case "string":
      s = u(`<div class="label-field" contenteditable="true" data-placeholder="empty">${i}</div>`), s.on("keydown", c);
      break;
    case "number":
      s = u(`<input type="number" value="${i}" placeholder="0" class="label-field"/>`);
      break;
    case "boolean":
      s = u(`<button type="button" data-value="${i}" class="label-switch"><span><i>${i.toString().toUpperCase()}</i></span></button>`), s.on("click", l);
      break;
    case "null":
      s = u('<em class="label-null">NULL</em>');
      break;
  }
  s && r.empty().append(s);
}, q = new WeakSet(), mt = function(e, n) {
  const i = e.find(".count"), r = cn(n);
  isNaN(r) || i.text(r);
};
export {
  ln as default
};
