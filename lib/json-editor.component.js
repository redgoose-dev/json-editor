var he = Object.defineProperty;
var be = (t, e, n) => e in t ? he(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Nt = (t, e, n) => (be(t, typeof e != "symbol" ? e + "" : e, n), n), lt = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var p = (t, e, n) => (lt(t, e, "read from private field"), n ? n.call(t) : e.get(t)), m = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, ut = (t, e, n, o) => (lt(t, e, "write to private field"), o ? o.call(t, n) : e.set(t, n), n);
var g = (t, e, n) => (lt(t, e, "access private method"), n);
const S = document, J = window, Bt = S.documentElement, A = S.createElement.bind(S), Dt = A("div"), dt = A("table"), ge = A("tbody"), zt = A("tr"), { isArray: rt, prototype: Vt } = Array, { concat: ye, filter: wt, indexOf: It, map: Ft, push: me, slice: Ut, some: vt, splice: xe } = Vt, we = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, ve = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, ke = /<.+>/, Ce = /^\w+$/;
function kt(t, e) {
  const n = _e(e);
  return !t || !n && !T(e) && !x(e) ? [] : !n && ve.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && Ce.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class st {
  constructor(e, n) {
    if (!e)
      return;
    if (ht(e))
      return e;
    let o = e;
    if (k(e)) {
      const i = n || S;
      if (o = we.test(e) && T(i) ? i.getElementById(e.slice(1).replace(/\\/g, "")) : ke.test(e) ? qt(e) : ht(i) ? i.find(e) : k(i) ? c(i).find(e) : kt(e, i), !o)
        return;
    } else if (M(e))
      return this.ready(e);
    (o.nodeType || o === J) && (o = [o]), this.length = o.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = o[i];
  }
  init(e, n) {
    return new st(e, n);
  }
}
const s = st.prototype, c = s.init;
c.fn = c.prototype = s;
s.length = 0;
s.splice = xe;
typeof Symbol == "function" && (s[Symbol.iterator] = Vt[Symbol.iterator]);
function ht(t) {
  return t instanceof st;
}
function R(t) {
  return !!t && t === t.window;
}
function T(t) {
  return !!t && t.nodeType === 9;
}
function _e(t) {
  return !!t && t.nodeType === 11;
}
function x(t) {
  return !!t && t.nodeType === 1;
}
function $e(t) {
  return !!t && t.nodeType === 3;
}
function je(t) {
  return typeof t == "boolean";
}
function M(t) {
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
function Zt(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function Ct(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
c.isWindow = R;
c.isFunction = M;
c.isArray = rt;
c.isNumeric = Zt;
c.isPlainObject = Ct;
function w(t, e, n) {
  if (n) {
    let o = t.length;
    for (; o--; )
      if (e.call(t[o], o, t[o]) === !1)
        return t;
  } else if (Ct(t)) {
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
c.each = w;
s.each = function(t) {
  return w(this, t);
};
s.empty = function() {
  return this.each((t, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function K(...t) {
  const e = je(t[0]) ? t.shift() : !1, n = t.shift(), o = t.length;
  if (!n)
    return {};
  if (!o)
    return K(e, c, n);
  for (let i = 0; i < o; i++) {
    const r = t[i];
    for (const a in r)
      e && (rt(r[a]) || Ct(r[a])) ? ((!n[a] || n[a].constructor !== r[a].constructor) && (n[a] = new r[a].constructor()), K(e, n[a], r[a])) : n[a] = r[a];
  }
  return n;
}
c.extend = K;
s.extend = function(t) {
  return K(s, t);
};
const Se = /\S+/g;
function at(t) {
  return k(t) ? t.match(Se) || [] : [];
}
s.toggleClass = function(t, e) {
  const n = at(t), o = !C(e);
  return this.each((i, r) => {
    x(r) && w(n, (a, u) => {
      o ? e ? r.classList.add(u) : r.classList.remove(u) : r.classList.toggle(u);
    });
  });
};
s.addClass = function(t) {
  return this.toggleClass(t, !0);
};
s.removeAttr = function(t) {
  const e = at(t);
  return this.each((n, o) => {
    x(o) && w(e, (i, r) => {
      o.removeAttribute(r);
    });
  });
};
function Ee(t, e) {
  if (t) {
    if (k(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !x(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return D(n) ? void 0 : n;
      }
      return C(e) ? this : D(e) ? this.removeAttr(t) : this.each((n, o) => {
        x(o) && o.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
s.attr = Ee;
s.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
s.hasClass = function(t) {
  return !!t && vt.call(this, (e) => x(e) && e.classList.contains(t));
};
s.get = function(t) {
  return C(t) ? Ut.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
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
function Le(t) {
  return C(t) ? this.get().map((e) => x(e) || $e(e) ? e.textContent : "").join("") : this.each((e, n) => {
    x(n) && (n.textContent = t);
  });
}
s.text = Le;
function E(t, e, n) {
  if (!x(t))
    return;
  const o = J.getComputedStyle(t, null);
  return n ? o.getPropertyValue(e) || void 0 : o[e] || t.style[e];
}
function $(t, e) {
  return parseInt(E(t, e), 10) || 0;
}
function Tt(t, e) {
  return $(t, `border${e ? "Left" : "Top"}Width`) + $(t, `padding${e ? "Left" : "Top"}`) + $(t, `padding${e ? "Right" : "Bottom"}`) + $(t, `border${e ? "Right" : "Bottom"}Width`);
}
const ft = {};
function Ne(t) {
  if (ft[t])
    return ft[t];
  const e = A(t);
  S.body.insertBefore(e, null);
  const n = E(e, "display");
  return S.body.removeChild(e), ft[t] = n !== "none" ? n : "block";
}
function At(t) {
  return E(t, "display") === "none";
}
function Wt(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function ct(t) {
  return k(t) ? (e, n) => Wt(n, t) : M(t) ? t : ht(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
s.filter = function(t) {
  const e = ct(t);
  return c(wt.call(this, (n, o) => e.call(n, o, n)));
};
function N(t, e) {
  return e ? t.filter(e) : t;
}
s.detach = function(t) {
  return N(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const ze = /^\s*<(\w+)[^>]*>/, Te = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Mt = {
  "*": Dt,
  tr: ge,
  td: zt,
  th: zt,
  thead: dt,
  tbody: dt,
  tfoot: dt
};
function qt(t) {
  if (!k(t))
    return [];
  if (Te.test(t))
    return [A(RegExp.$1)];
  const e = ze.test(t) && RegExp.$1, n = Mt[e] || Mt["*"];
  return n.innerHTML = t, c(n.childNodes).detach().get();
}
c.parseHTML = qt;
s.has = function(t) {
  const e = k(t) ? (n, o) => kt(t, o).length : (n, o) => o.contains(t);
  return this.filter(e);
};
s.not = function(t) {
  const e = ct(t);
  return this.filter((n, o) => (!k(t) || x(o)) && !e.call(o, n, o));
};
function L(t, e, n, o) {
  const i = [], r = M(e), a = o && ct(o);
  for (let u = 0, l = t.length; u < l; u++)
    if (r) {
      const d = e(t[u]);
      d.length && me.apply(i, d);
    } else {
      let d = t[u][e];
      for (; d != null && !(o && a(-1, d)); )
        i.push(d), d = n ? d[e] : null;
    }
  return i;
}
function Jt(t) {
  return t.multiple && t.options ? L(wt.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function Ae(t) {
  return arguments.length ? this.each((e, n) => {
    const o = n.multiple && n.options;
    if (o || ne.test(n.type)) {
      const i = rt(t) ? Ft.call(t, String) : D(t) ? [] : [String(t)];
      o ? w(n.options, (r, a) => {
        a.selected = i.indexOf(a.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = C(t) || D(t) ? "" : t;
  }) : this[0] && Jt(this[0]);
}
s.val = Ae;
s.is = function(t) {
  const e = ct(t);
  return vt.call(this, (n, o) => e.call(n, o, n));
};
c.guid = 1;
function j(t) {
  return t.length > 1 ? wt.call(t, (e, n, o) => It.call(o, e) === n) : t;
}
c.unique = j;
s.add = function(t, e) {
  return c(j(this.get().concat(c(t, e).get())));
};
s.children = function(t) {
  return N(c(j(L(this, (e) => e.children))), t);
};
s.parent = function(t) {
  return N(c(j(L(this, "parentNode"))), t);
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
  return N(c(j(L(this, (e) => c(e).parent().children().not(e)))), t);
};
s.find = function(t) {
  return c(j(L(this, (e) => kt(t, e))));
};
const Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, He = /^$|^module$|\/(java|ecma)script/i, Oe = ["type", "src", "nonce", "noModule"];
function Re(t, e) {
  const n = c(t);
  n.filter("script").add(n.find("script")).each((o, i) => {
    if (He.test(i.type) && Bt.contains(i)) {
      const r = A("script");
      r.text = i.textContent.replace(Me, ""), w(Oe, (a, u) => {
        i[u] && (r[u] = i[u]);
      }), e.head.insertBefore(r, null), e.head.removeChild(r);
    }
  });
}
function Pe(t, e, n, o, i) {
  o ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), i && Re(e, t.ownerDocument);
}
function z(t, e, n, o, i, r, a, u) {
  return w(t, (l, d) => {
    w(c(d), (f, h) => {
      w(c(e), (P, y) => {
        const B = n ? h : y, b = n ? y : h, H = n ? f : P;
        Pe(B, H ? b.cloneNode(!0) : b, o, i, !H);
      }, u);
    }, a);
  }, r), e;
}
s.after = function() {
  return z(arguments, this, !1, !1, !1, !0, !0);
};
s.append = function() {
  return z(arguments, this, !1, !1, !0);
};
function Be(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (C(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, o) => {
    x(o) && (e ? c(o).empty().append(t) : o.innerHTML = t);
  });
}
s.html = Be;
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
  return c(j(L(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
s.next = function(t, e, n) {
  return N(c(j(L(this, "nextElementSibling", e, n))), t);
};
s.nextAll = function(t) {
  return this.next(t, !0);
};
s.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
s.parents = function(t, e) {
  return N(c(j(L(this, "parentElement", !0, e))), t);
};
s.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
s.prev = function(t, e, n) {
  return N(c(j(L(this, "previousElementSibling", e, n))), t);
};
s.prevAll = function(t) {
  return this.prev(t, !0);
};
s.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
s.map = function(t) {
  return c(ye.apply([], Ft.call(this, (e, n) => t.call(e, n, e))));
};
s.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
s.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && E(n, "position") === "static"; )
      n = n.offsetParent;
    return n || Bt;
  });
};
s.slice = function(t, e) {
  return c(Ut.call(this, t, e));
};
const De = /-([a-z])/g;
function _t(t) {
  return t.replace(De, (e, n) => n.toUpperCase());
}
s.ready = function(t) {
  const e = () => setTimeout(t, 0, c);
  return S.readyState !== "loading" ? e() : S.addEventListener("DOMContentLoaded", e), this;
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
    if (i !== t && x(i)) {
      const r = c(i).offset();
      n.top -= r.top + $(i, "borderTopWidth"), n.left -= r.left + $(i, "borderLeftWidth");
    }
  }
  return {
    top: n.top - $(t, "marginTop"),
    left: n.left - $(t, "marginLeft")
  };
};
const Kt = {
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
      return t = Kt[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, o) => {
        o[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
s.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[Kt[t] || t];
  });
};
const Ve = /^--/;
function $t(t) {
  return Ve.test(t);
}
const pt = {}, { style: Ie } = Dt, Fe = ["webkit", "moz", "ms"];
function Ue(t, e = $t(t)) {
  if (e)
    return t;
  if (!pt[t]) {
    const n = _t(t), o = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${Fe.join(`${o} `)}${o}`.split(" ");
    w(i, (r, a) => {
      if (a in Ie)
        return pt[t] = a, !1;
    });
  }
  return pt[t];
}
const Ze = {
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
function Yt(t, e, n = $t(t)) {
  return !n && !Ze[t] && Zt(e) ? `${e}px` : e;
}
function We(t, e) {
  if (k(t)) {
    const n = $t(t);
    return t = Ue(t, n), arguments.length < 2 ? this[0] && E(this[0], t, n) : t ? (e = Yt(t, e, n), this.each((o, i) => {
      x(i) && (n ? i.style.setProperty(t, e) : i.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
s.css = We;
function Gt(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const qe = /^\s+|\s+$/;
function Ht(t, e) {
  const n = t.dataset[e] || t.dataset[_t(e)];
  return qe.test(n) ? n : Gt(JSON.parse, n);
}
function Je(t, e, n) {
  n = Gt(JSON.stringify, n), t.dataset[_t(e)] = n;
}
function Ke(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const o in this[0].dataset)
      n[o] = Ht(this[0], o);
    return n;
  }
  if (k(t))
    return arguments.length < 2 ? this[0] && Ht(this[0], t) : C(e) ? this : this.each((n, o) => {
      Je(o, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
s.data = Ke;
function Xt(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
w([!0, !1], (t, e) => {
  w(["Width", "Height"], (n, o) => {
    const i = `${e ? "outer" : "inner"}${o}`;
    s[i] = function(r) {
      if (this[0])
        return R(this[0]) ? e ? this[0][`inner${o}`] : this[0].document.documentElement[`client${o}`] : T(this[0]) ? Xt(this[0], o) : this[0][`${e ? "offset" : "client"}${o}`] + (r && e ? $(this[0], `margin${n ? "Top" : "Left"}`) + $(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
w(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  s[n] = function(o) {
    if (!this[0])
      return C(o) ? void 0 : this;
    if (!arguments.length)
      return R(this[0]) ? this[0].document.documentElement[`client${e}`] : T(this[0]) ? Xt(this[0], e) : this[0].getBoundingClientRect()[n] - Tt(this[0], !t);
    const i = parseInt(o, 10);
    return this.each((r, a) => {
      if (!x(a))
        return;
      const u = E(a, "boxSizing");
      a.style[n] = Yt(n, i + (u === "border-box" ? Tt(a, !t) : 0));
    });
  };
});
const Ot = "___cd";
s.toggle = function(t) {
  return this.each((e, n) => {
    if (!x(n))
      return;
    const o = At(n);
    (C(t) ? o : t) ? (n.style.display = n[Ot] || "", At(n) && (n.style.display = Ne(n.tagName))) : o || (n[Ot] = E(n, "display"), n.style.display = "none");
  });
};
s.hide = function() {
  return this.toggle(!1);
};
s.show = function() {
  return this.toggle(!0);
};
const Rt = "___ce", jt = ".", St = { focus: "focusin", blur: "focusout" }, Qt = { mouseenter: "mouseover", mouseleave: "mouseout" }, Ye = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Et(t) {
  return Qt[t] || St[t] || t;
}
function Lt(t) {
  const e = t.split(jt);
  return [e[0], e.slice(1).sort()];
}
s.trigger = function(t, e) {
  if (k(t)) {
    const [o, i] = Lt(t), r = Et(o);
    if (!r)
      return this;
    const a = Ye.test(r) ? "MouseEvents" : "HTMLEvents";
    t = S.createEvent(a), t.initEvent(r, !0, !0), t.namespace = i.join(jt), t.___ot = o;
  }
  t.___td = e;
  const n = t.___ot in St;
  return this.each((o, i) => {
    n && M(i[t.___ot]) && (i[`___i${t.type}`] = !0, i[t.___ot](), i[`___i${t.type}`] = !1), i.dispatchEvent(t);
  });
};
function te(t) {
  return t[Rt] = t[Rt] || {};
}
function Ge(t, e, n, o, i) {
  const r = te(t);
  r[e] = r[e] || [], r[e].push([n, o, i]), t.addEventListener(e, i);
}
function ee(t, e) {
  return !e || !vt.call(e, (n) => t.indexOf(n) < 0);
}
function Y(t, e, n, o, i) {
  const r = te(t);
  if (e)
    r[e] && (r[e] = r[e].filter(([a, u, l]) => {
      if (i && l.guid !== i.guid || !ee(a, n) || o && o !== u)
        return !0;
      t.removeEventListener(e, l);
    }));
  else
    for (e in r)
      Y(t, e, n, o, i);
}
s.off = function(t, e, n) {
  if (C(t))
    this.each((o, i) => {
      !x(i) && !T(i) && !R(i) || Y(i);
    });
  else if (k(t))
    M(e) && (n = e, e = ""), w(at(t), (o, i) => {
      const [r, a] = Lt(i), u = Et(r);
      this.each((l, d) => {
        !x(d) && !T(d) && !R(d) || Y(d, u, a, e, n);
      });
    });
  else
    for (const o in t)
      this.off(o, t[o]);
  return this;
};
s.remove = function(t) {
  return N(this, t).detach().off(), this;
};
s.replaceWith = function(t) {
  return this.before(t).remove();
};
s.replaceAll = function(t) {
  return c(t).replaceWith(this), this;
};
function Xe(t, e, n, o, i) {
  if (!k(t)) {
    for (const r in t)
      this.on(r, e, n, t[r], i);
    return this;
  }
  return k(e) || (C(e) || D(e) ? e = "" : C(n) ? (n = e, e = "") : (o = n, n = e, e = "")), M(o) || (o = n, n = void 0), o ? (w(at(t), (r, a) => {
    const [u, l] = Lt(a), d = Et(u), f = u in Qt, h = u in St;
    d && this.each((P, y) => {
      if (!x(y) && !T(y) && !R(y))
        return;
      const B = function(b) {
        if (b.target[`___i${b.type}`])
          return b.stopImmediatePropagation();
        if (b.namespace && !ee(l, b.namespace.split(jt)) || !e && (h && (b.target !== y || b.___ot === d) || f && b.relatedTarget && y.contains(b.relatedTarget)))
          return;
        let H = y;
        if (e) {
          let O = b.target;
          for (; !Wt(O, e); )
            if (O === y || (O = O.parentNode, !O))
              return;
          H = O;
        }
        Object.defineProperty(b, "currentTarget", {
          configurable: !0,
          get() {
            return H;
          }
        }), Object.defineProperty(b, "delegateTarget", {
          configurable: !0,
          get() {
            return y;
          }
        }), Object.defineProperty(b, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const pe = o.call(H, b, b.___td);
        i && Y(y, d, l, e, B), pe === !1 && (b.preventDefault(), b.stopPropagation());
      };
      B.guid = o.guid = o.guid || c.guid++, Ge(y, d, l, e, B);
    });
  }), this) : this;
}
s.on = Xe;
function Qe(t, e, n, o) {
  return this.on(t, e, n, o, !0);
}
s.one = Qe;
const tn = /\r?\n/g;
function en(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(tn, `\r
`))}`;
}
const nn = /file|reset|submit|button|image/i, ne = /radio|checkbox/i;
s.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    w(n.elements || [n], (o, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || nn.test(i.type) || ne.test(i.type) && !i.checked)
        return;
      const r = Jt(i);
      if (!C(r)) {
        const a = rt(r) ? r : [r];
        w(a, (u, l) => {
          t += en(i.name, l);
        });
      }
    });
  }), t.slice(1);
};
function Pt(t) {
  return t == null ? "null" : Array.isArray(t) ? "array" : typeof t == "string" ? "string" : typeof t == "number" ? "number" : typeof t == "boolean" ? "boolean" : "object";
}
function oe(t) {
  try {
    return typeof t == "string" ? JSON.parse(t) : Array.isArray(t) ? Object.assign([], t) : c.isPlainObject(t) ? Object.assign({}, t) : {};
  } catch (e) {
    console.error("error", e.message);
  }
}
function on(t) {
  return Array.isArray(t) ? t.length : c.isPlainObject(t) ? Object.keys(t).length : NaN;
}
const rn = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12L10 8L6 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', sn = '<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-90, 10, 10)"><path d="M7 9L10 12L13 9" fill="currentColor"/><path d="M7 9L10 12L13 9H7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>', an = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', ie = {
  object: '<svg viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1)"><path d="M2.296 5.166C2.296 7.238 3.78 8.162 5.166 8.162C6.538 8.162 8.022 7.238 8.022 5.166C8.022 3.094 6.538 2.156 5.166 2.156C3.78 2.156 2.296 3.094 2.296 5.166ZM0 5.18C0 2.03 2.366 0 5.166 0C7.952 0 10.318 2.03 10.318 5.18C10.318 8.316 7.952 10.346 5.166 10.346C2.366 10.346 0 8.316 0 5.18Z" fill="currentColor"/></g></svg>',
  array: '<svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.728 9.926L6.902 7.658H2.87L2.044 9.926H0L3.808 0H6.048L9.828 9.926H7.728ZM4.886 2.142L3.514 5.894H6.258L4.886 2.142Z" fill="currentColor"/></svg>',
  string: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1.5)"><path d="M7.39203 2.576L5.65603 3.108C5.55803 2.562 5.11003 1.708 3.85003 1.708C2.91203 1.708 2.29603 2.31 2.29603 2.968C2.29603 3.514 2.64603 3.948 3.37403 4.088L4.76003 4.354C6.56603 4.704 7.53203 5.88 7.53203 7.28C7.53203 8.806 6.25803 10.346 3.94803 10.346C1.31603 10.346 0.154031 8.652 3.05176e-05 7.238L1.79203 6.762C1.87603 7.742 2.56203 8.624 3.96203 8.624C4.99803 8.624 5.57203 8.106 5.57203 7.406C5.57203 6.832 5.13803 6.384 4.36803 6.23L2.98203 5.95C1.40003 5.628 0.378031 4.606 0.378031 3.108C0.378031 1.344 1.96003 0 3.83603 0C6.24403 0 7.16803 1.456 7.39203 2.576Z" fill="currentColor"/></g></svg>',
  number: '<svg viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1)"><path d="M8.47003 9.926H6.44003L1.93203 2.884V9.926H3.05176e-05V0H2.40803L6.53803 6.566V0H8.47003V9.926Z" fill="currentColor"/></g></svg>',
  boolean: '<svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 .75)"><path d="M3.05176e-05 0H3.57003C5.50203 0 6.59403 1.134 6.59403 2.674C6.59403 3.696 5.97803 4.522 5.15203 4.802C6.11803 5.04 6.90203 5.922 6.90203 7.154C6.90203 8.764 5.69803 9.926 3.83603 9.926H3.05176e-05V0ZM1.90403 4.102H3.27603C4.15803 4.102 4.69003 3.612 4.69003 2.856C4.69003 2.1 4.20003 1.624 3.26203 1.624H1.90403V4.102ZM1.90403 8.316H3.47203C4.41003 8.316 4.97003 7.826 4.97003 7.028C4.97003 6.244 4.46603 5.698 3.50003 5.698H1.90403V8.316Z" fill="currentColor"/></g></svg>',
  null: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1.5)"><path d="M3.808 10.15C1.694 10.15 0 8.848 0 6.412V0H1.932V6.272C1.932 7.574 2.66 8.26 3.808 8.26C4.984 8.26 5.698 7.574 5.698 6.272V0H7.63V6.412C7.63 8.848 5.936 10.15 3.808 10.15Z" fill="currentColor"/></g></svg>'
}, cn = [
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
var V, v, I, G, re, X, se, Q, ae;
class ln {
  constructor(e, n, o) {
    m(this, G);
    m(this, X);
    m(this, Q);
    m(this, V, void 0);
    m(this, v, {
      node: void 0,
      type: void 0,
      dialog: void 0
    });
    m(this, I, void 0);
    ut(this, V, e), p(this, v).node = n, ut(this, I, p(this, v).node.data("type")), p(this, v).type = p(this, v).node.find("& > .node__body > .type"), p(this, v).type.addClass("open"), p(this, v).dialog = g(this, G, re).call(this, cn, p(this, I), o), p(this, v).dialog.on("click", (i) => i.stopPropagation()), p(this, v).dialog.find("button").on("click", (i) => g(this, X, se).call(this, i)), p(this, v).type.append(p(this, v).dialog), c(window).on("click.json-editor-context", (i) => this.close(i)), c(window).on("keyup.json-editor-context", (i) => g(this, Q, ae).call(this, i));
  }
  close() {
    p(this, v).type.removeClass("open"), p(this, v).dialog.remove(), c(window).off("click.json-editor-context"), c(window).off("keyup.json-editor-context"), p(this, V).context = void 0;
  }
}
V = new WeakMap(), v = new WeakMap(), I = new WeakMap(), G = new WeakSet(), re = function(e, n, o = !1) {
  function i(a, u = void 0) {
    var d;
    let l = "<ol>";
    for (let f in a) {
      if (o && u === "change-type")
        switch (a[f].key) {
          case "string":
          case "number":
          case "boolean":
          case "null":
            continue;
        }
      let h = "", P = "", y = "";
      switch (a[f].key) {
        case "change-type":
          h = ' class="dropdown"', y = " disabled";
          break;
        case "insert":
          h = ' class="dropdown"', y = " disabled";
          break;
        case "duplicate":
          if (h = ' class="duplicate"', o)
            continue;
          break;
        case "remove":
          if (h = ' class="remove"', o)
            continue;
          break;
        case "object":
        case "array":
        case "string":
        case "number":
        case "boolean":
        case "null":
          h = ' class="type"', P = `<i class="type-icon type-icon--${a[f].key}">${ie[a[f].key]}</i>`, u === "change-type" && a[f].key === n && (y = " disabled");
          break;
      }
      l += `<li${h}>`, l += `<button type="button"${y}>`, l += P, l += `<em class="label">${a[f].label}</em>`, (a[f].key === "change-type" || a[f].key === "insert") && (l += `<span class="arrow">${rn}</span>`), l += "</button>", ((d = a[f].children) == null ? void 0 : d.length) > 0 && (l += '<div class="children">', l += i(a[f].children, a[f].key), l += "</div>"), l += "</li>";
    }
    return l += "</ol>", l;
  }
  let r = `<nav class="context${o ? " is-root" : ""}">`;
  return r += i(e), r += "</nav>", c(r);
}, X = new WeakSet(), se = function(e) {
  const n = c(e.currentTarget);
  console.log("#onClickItem()", n), this.close();
}, Q = new WeakSet(), ae = function(e) {
  e.code === "Escape" && this.close();
};
const un = {
  target: void 0,
  data: void 0,
  between: "after",
  open: !0,
  callback: void 0
};
var _, F, bt, tt, ce, et, le, U, gt, nt, ue, Z, yt, ot, de, it, fe, W, mt;
class dn {
  constructor(e, n) {
    m(this, F);
    m(this, tt);
    m(this, et);
    m(this, U);
    m(this, nt);
    m(this, Z);
    m(this, ot);
    m(this, it);
    m(this, W);
    m(this, _, {
      wrap: null,
      tree: null
    });
    Nt(this, "context");
    p(this, _).wrap = c(e), this.replace(n);
  }
  clear() {
    p(this, _).tree && p(this, _).wrap.empty();
  }
  /**
   * replace
   * @param {object|array} src
   */
  replace(e) {
    this.clear(), e = oe(e);
    const n = g(this, tt, ce).call(this, e);
    this.import(n, e);
  }
  /**
   * import data
   * @param {HTMLElement} target
   * @param {object|array} src
   */
  import(e, n) {
    c(e), c.each(n, (o, i) => {
      const r = Pt(i), a = { key: o, value: i, type: r };
      this.addNode({
        target: e,
        data: a,
        between: "after",
        open: !1,
        callback: (u, l) => this.import(u, l)
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
    const { target: n, data: o, between: i, open: r, callback: a } = e, u = c(n), { key: l, value: d, type: f } = o, h = g(this, F, bt).call(this, f);
    g(this, nt, ue).call(this, h), g(this, Z, yt).call(this, h, r), g(this, U, gt).call(this, h, f), g(this, ot, de).call(this, h, l), g(this, W, mt).call(this, h, d), g(this, it, fe).call(this, h, f, d), g(this, et, le).call(this, u.find("& > .node__children > ul"), h, i), (f === "array" || f === "object") && a && typeof a == "function" && a(h.get(0), d);
  }
  changeNodeType(e, n) {
    c(e).attr("data-type", n);
  }
  duplicateNode() {
  }
  removeNode() {
  }
  controlFold(e, n) {
    const o = c(e);
    n === void 0 ? o.toggleClass("open") : n === !0 ? o.addClass("open") : o.removeClass("open");
  }
  destroy() {
  }
}
_ = new WeakMap(), F = new WeakSet(), bt = function(e, n = !1) {
  let o = `<li data-type="${e}" class="node">`;
  return o += '<div class="node__body">', n || (o += `<span class="sort">${an}</span>`), o += '<div class="type"><button type="button"></button></div>', o += `<button type="button" class="fold">${sn}</button>`, n || (o += '<div class="key"></div>'), o += '<em class="count"></em>', n || (o += '<div class="value"></div>'), o += "</div>", o += '<div class="node__children"><ul class="tree"/></div>', o += "</li>", c(o);
}, tt = new WeakSet(), ce = function(e) {
  const n = Pt(e), o = g(this, F, bt).call(this, n, !0);
  return g(this, Z, yt).call(this, o, !0), g(this, U, gt).call(this, o, n, !0), g(this, W, mt).call(this, o, e), p(this, _).tree = c('<ul class="root"/>'), p(this, _).tree.append(o), p(this, _).wrap.append(p(this, _).tree), o;
}, et = new WeakSet(), le = function(e, n, o) {
  switch (o) {
    case "before":
      e.prepend(n);
      break;
    default:
      e.append(n);
      break;
  }
}, U = new WeakSet(), gt = function(e, n, o = !1) {
  const r = e.find(".type").children("button");
  r.html(`<i class="type-icon type-icon--${n}">${ie[n]}</i>`), r.on("click", async (a) => {
    const u = c(a.currentTarget);
    a.stopPropagation(), u.hasClass("open") ? this.context && this.context.close() : (this.context && this.context.close(), this.context = new ln(this, u.closest(".node"), o));
  });
}, nt = new WeakSet(), ue = function(e) {
}, Z = new WeakSet(), yt = function(e, n) {
  const o = e.find(".fold");
  this.controlFold(e, n), o.on("click", (i) => {
    const a = c(i.currentTarget).closest(".node");
    this.controlFold(a);
  });
}, ot = new WeakSet(), de = function(e, n) {
  const o = e.find(".key");
  let i;
  function r(a) {
    if (a.keyCode === 13)
      return a.preventDefault();
  }
  i = c(`<div class="label-field" contenteditable="true" data-placeholder="empty">${n}</div>`), i.on("keydown", r), i && o.empty().append(i);
}, it = new WeakSet(), fe = function(e, n, o) {
  const i = e.find(".value");
  let r;
  function a(l) {
    if (c(this), l.ctrlKey || l.metaKey)
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
  function u(l) {
    const d = c(l.currentTarget), f = !d.data("value");
    d.data("value", f).find("i").text(f.toString().toUpperCase());
  }
  switch (n) {
    case "string":
      r = c(`<div class="label-field" contenteditable="true" data-placeholder="empty">${o}</div>`), r.on("keydown", a);
      break;
    case "number":
      r = c(`<input type="number" value="${o}" placeholder="0" class="label-field"/>`);
      break;
    case "boolean":
      r = c(`<button type="button" data-value="${o}" class="label-switch"><span><i>${o.toString().toUpperCase()}</i></span></button>`), r.on("click", u);
      break;
    case "null":
      r = c('<em class="label-null">NULL</em>');
      break;
  }
  r && i.empty().append(r);
}, W = new WeakSet(), mt = function(e, n) {
  const o = e.find(".count"), i = on(n);
  isNaN(i) || o.text(i);
};
const fn = `.json-editor{--json-editor-font-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";--json-editor-font-eng: "Helvetica Neue", sans-serif;--json-editor-color-bg: hsl(0 0% 100%);--json-editor-color-base: hsl(0 0% 13%);--json-editor-color-blur: hsl(0 0% 67%);--json-editor-color-object: hsl(174 66% 39%);--json-editor-color-array: hsl(191 75% 53%);--json-editor-color-string: hsl(5 87% 59%);--json-editor-color-number: hsl(33 89% 55%);--json-editor-color-boolean: hsl(45 89% 54%);--json-editor-color-null: hsl(0 0% 58%);--json-editor-color-active: hsla(0 0% 0% / 6%);--json-editor-color-focus: hsl(5 87% 59%);--json-editor-color-error: hsl(0 96% 52%);--json-editor-font-size: 13px;font-family:var(--json-editor-font-base);color:var(--json-editor-color-base);font-size:16px;line-height:1.15}.root{position:relative;margin:0;padding:0;list-style:none}.type-icon{display:grid;width:var(--type-size, 24px);height:var(--type-size, 24px);place-content:center;box-sizing:border-box;border-radius:4px;background:var(--type-icon-color, #aaa)}.type-icon svg{display:block;box-sizing:border-box;color:#fff;width:var(--type-icon-width)}.type-icon--object{--type-icon-color: var(--json-editor-color-object);--type-icon-width: calc(var(--type-icon-size, 10px) + 1px)}.type-icon--array{--type-icon-color: var(--json-editor-color-array);--type-icon-width: var(--type-icon-size, 10px)}.type-icon--string{--type-icon-color: var(--json-editor-color-string);--type-icon-width: calc(var(--type-icon-size, 10px) - 2px)}.type-icon--number{--type-icon-color: var(--json-editor-color-number);--type-icon-width: calc(var(--type-icon-size, 10px) - 1px)}.type-icon--boolean{--type-icon-color: var(--json-editor-color-boolean);--type-icon-width: calc(var(--type-icon-size, 10px) - 3px)}.type-icon--null{--type-icon-color: var(--json-editor-color-null);--type-icon-width: calc(var(--type-icon-size, 10px) - 2px)}.label-field{margin:-4px 0;padding:4px 6px;min-width:var(--label-min-width, unset);min-height:24px;outline:none;font-size:var(--json-editor-font-size);line-height:1.42;box-sizing:border-box;border-radius:2px;background-color:#0000;box-shadow:0 0 0 .5px #0000;transition:background-color .16s ease-out,box-shadow .2s ease-out;cursor:text}.label-field:hover,.label-field:focus{background-color:var(--json-editor-color-active)}.label-field:focus{box-shadow:0 0 0 .5px #00000040}.label-field:empty:before{content:attr(data-placeholder);color:var(--json-editor-color-blur)}.label-field[type=number]{border:none;width:100px}.label-field[type=number]::-webkit-outer-spin-button,.label-field[type=number]::-webkit-inner-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none}.label-null{display:block;padding:0 6px;color:var(--json-editor-color-blur);font-style:normal;letter-spacing:-.5px;-webkit-user-select:none;user-select:none;font-size:var(--json-editor-font-size)}.label-switch{--switch-width: 36px;--switch-height: 18px;--switch-offset: 3px;--switch-speed: .1s;--switch-unit-size: calc(var(--switch-height) - (var(--switch-offset) * 2));display:block;margin:0 0 0 6px;padding:2px 0;background:none;border:none;font-size:0;cursor:pointer}.label-switch span{display:block;position:relative;padding:var(--switch-offset);width:var(--switch-width);height:var(--switch-height);border-radius:calc(var(--switch-height) * .5);box-shadow:inset 0 0 0 1px var(--json-editor-color-blur);transition:box-shadow .16s ease-out;box-sizing:border-box}.label-switch i{display:block;width:var(--switch-unit-size);height:var(--switch-unit-size);background-color:var(--switch-unit-color, var(--json-editor-color-blur));border-radius:var(--switch-unit-size);pointer-events:none;transform:translate(var(--switch-unit-x));transition:transform var(--switch-speed) ease-out,width var(--switch-speed) ease-out,background-color .24s ease-out}.label-switch:active span{box-shadow:inset 0 0 0 1px var(--json-editor-color-active)}.label-switch:active[data-value=false] i{width:calc(var(--switch-unit-size) + 6px)}.label-switch:active[data-value=true] i{width:calc(var(--switch-unit-size) + 6px);transform:translate(calc(var(--switch-width) - var(--switch-offset) * 2 - var(--switch-unit-size) - 6px))}.label-switch:focus-visible{outline:none}.label-switch:focus-visible span{outline:2px solid var(--json-editor-color-focus);outline-offset:1px}.label-switch[data-value=false]{--switch-unit-x: 0}.label-switch[data-value=true]{--switch-unit-x: calc(var(--switch-width) - (var(--switch-offset) * 2) - var(--switch-unit-size));--switch-unit-color: var(--json-editor-color-object)}.node__body{position:relative;display:flex;align-items:center;box-sizing:border-box}.node__body>.sort{display:block;box-sizing:border-box;cursor:move;padding:0 4px 0 0}.node__body>.sort svg{display:block;width:24px}.node__body>.type{position:relative}.node__body>.type>button{display:block;margin:-2px -2px -2px -4px;padding:2px;box-sizing:border-box;border:none;background:none;outline:none;cursor:pointer;transition:opacity .12s ease-out;border-radius:6px}.node__body>.type>button:active{opacity:.5}.node__body>.type>button:focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-1px}.node__body>.type.open>button{opacity:.25}.node__body>.fold{display:block;width:28px;height:28px;margin:-8px -8px -8px 0;padding:0;background:none;border:none;box-sizing:border-box;cursor:pointer}.node__body>.fold:focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-6px}.node__body>.fold svg{display:block;margin:0 auto;width:var(--fold-arrow-size, 20px);rotate:0deg;box-sizing:border-box;transition:rotate,.16s ease-out}.node__body>.key{margin-left:6px;--label-min-width: 42px}.node__body>.count{display:block;margin:0;pointer-events:none;padding:0 0 0 8px;color:var(--json-editor-color-blur);font-style:normal;-webkit-user-select:none;user-select:none;font-size:14px;line-height:normal}.node__body>.value{display:flex;align-items:center;gap:0 6px;font-size:var(--json-editor-font-size);line-height:1.42;--label-min-width: 72px}.node__body>.value:before{content:":"}.node__children>.tree{position:relative;display:none;gap:6px 0;margin:6px 0 0;padding:0 0 0 24px;list-style:none}.node__children>.tree:not(:empty):before{content:"";display:block;position:absolute;left:10px;top:0;bottom:11px;width:4px;border-width:0 0 0 1px;border-style:dashed;border-color:#b8b8b8}.node__children>.tree:not(:empty):after{content:"";display:block;position:absolute;left:8px;bottom:10px;width:5px;height:5px;background:hsl(0,0%,72%);border-radius:50%}.node.open>.node__body .fold svg{rotate:90deg}.node.open>.node__children>.tree{display:grid}.node[data-type=object]>.node__body .count:before{content:"{"}.node[data-type=object]>.node__body .count:after{content:"}"}.node[data-type=object]>.node__body .value{display:none}.node[data-type=array]>.node__body .count:before{content:"["}.node[data-type=array]>.node__body .count:after{content:"]"}.node[data-type=array]>.node__body .value{display:none}.node[data-type=string]>.node__body .fold{display:none}.node[data-type=number]>.node__body .fold{display:none}.node[data-type=boolean]>.node__body .fold{display:none}.node[data-type=null]>.node__body .fold{display:none}.context{--context-border-radius: 4px;--context-color-line: hsl(0 0% 88%);--context-color-item-active: hsl(0 0% 92%);position:absolute;top:-8px;right:-8px;z-index:2;border:1px solid red}.context.is-root{left:28px}.context ol{position:absolute;left:0;margin:0;padding:0;list-style:none;background:var(--context-color-line);border-radius:var(--context-border-radius);box-shadow:0 4px 32px #0000001a,0 2px 8px #0003,0 0 0 1px #0000000d}.context li{position:relative}.context li:not(:first-child){margin-top:1px}.context li:first-child>button{border-top-left-radius:var(--context-border-radius);border-top-right-radius:var(--context-border-radius)}.context li:last-child>button{border-bottom-left-radius:var(--context-border-radius);border-bottom-right-radius:var(--context-border-radius)}.context li.type>button{grid-template-columns:auto 1fr;gap:8px}.context li.type>button:disabled>*{opacity:.25}.context li.dropdown:hover>button,.context li.dropdown:focus-within>button{background-color:var(--context-color-item-active)}.context li.dropdown:hover>.children,.context li.dropdown:focus-within>.children{opacity:1;pointer-events:auto}.context li.dropdown>button{grid-template-columns:1fr auto}.context li.remove .label{color:var(--json-editor-color-error)}.context button{display:grid;align-items:center;margin:0;padding:8px 12px;min-width:150px;text-align:left;box-sizing:border-box;background-color:var(--json-editor-color-bg);border:none;cursor:pointer;border-radius:0;transition:background-color .12s ease-out;font-family:var(--json-editor-font-base);font-size:12px;letter-spacing:-.25px;outline:none;color:var(--json-editor-color-base)}.context button:hover,.context button:active{background-color:var(--context-color-item-active)}.context button:not(.parent):focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-2px}.context button:disabled{cursor:default}.context .label{display:block;font-style:normal;pointer-events:none;-webkit-user-select:none;user-select:none}.context .type-icon{--type-size: 16px;--type-icon-size: 8px}.context .arrow{display:block;margin:0 -4px 0 0;pointer-events:none}.context .arrow svg{display:block;width:16px}.context .children{position:absolute;top:-12px;right:4px;z-index:2;pointer-events:none;opacity:0;transition:opacity .24s ease-out}.context .children ol{top:0;left:0}
`;
var q, xt;
class hn extends HTMLElement {
  constructor() {
    super();
    m(this, q);
    this.attachShadow({
      mode: "open"
    });
    const n = document.createElement("template");
    n.innerHTML = '<div class="json-editor"></div>';
    const o = new CSSStyleSheet();
    o.replaceSync(fn), this.shadowRoot.appendChild(n.content.cloneNode(!0)), this.shadowRoot.adoptedStyleSheets = [o], this.root = this.shadowRoot.childNodes[0], this.ready = !1, this.data = {};
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
          this.data = oe(i), this.core && this.core.replace(this.data);
          break;
      }
  }
  /**
   * mounted component
   */
  connectedCallback() {
    this.root.addEventListener("json-editor", g(this, q, xt)), this.core = new dn(this.root, this.data);
  }
  /**
   * unmounted component
   */
  disconnectedCallback() {
    console.warn("disconnectedCallback()"), this.root.removeEventListener("json-editor", g(this, q, xt)), this.core && (this.core.destroy(), delete this.core, this.root.innerHTML = "");
  }
  adoptedCallback() {
    console.warn("adoptedCallback()");
  }
}
q = new WeakSet(), xt = function(n) {
  console.log("#onRootEvent", n);
};
export {
  hn as default
};
