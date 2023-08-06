var Me = Object.defineProperty;
var ze = (t, e, n) => e in t ? Me(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var At = (t, e, n) => (ze(t, typeof e != "symbol" ? e + "" : e, n), n), St = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var u = (t, e, n) => (St(t, e, "read from private field"), n ? n.call(t) : e.get(t)), m = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, M = (t, e, n, o) => (St(t, e, "write to private field"), o ? o.call(t, n) : e.set(t, n), n);
var f = (t, e, n) => (St(t, e, "access private method"), n);
const T = document, ft = window, re = T.documentElement, P = T.createElement.bind(T), se = P("div"), Tt = P("table"), He = P("tbody"), Kt = P("tr"), { isArray: Et, prototype: ae } = Array, { concat: Ie, filter: Ut, indexOf: ce, map: le, push: Ue, slice: de, some: Pt, splice: Pe } = ae, De = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ve = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ye = /<.+>/, Je = /^\w+$/;
function Dt(t, e) {
  const n = Fe(e);
  return !t || !n && !U(e) && !j(e) ? [] : !n && Ve.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && Je.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class Nt {
  constructor(e, n) {
    if (!e)
      return;
    if (Bt(e))
      return e;
    let o = e;
    if (E(e)) {
      const i = n || T;
      if (o = De.test(e) && U(i) ? i.getElementById(e.slice(1).replace(/\\/g, "")) : Ye.test(e) ? fe(e) : Bt(i) ? i.find(e) : E(i) ? a(i).find(e) : Dt(e, i), !o)
        return;
    } else if (D(e))
      return this.ready(e);
    (o.nodeType || o === ft) && (o = [o]), this.length = o.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = o[i];
  }
  init(e, n) {
    return new Nt(e, n);
  }
}
const s = Nt.prototype, a = s.init;
a.fn = a.prototype = s;
s.length = 0;
s.splice = Pe;
typeof Symbol == "function" && (s[Symbol.iterator] = ae[Symbol.iterator]);
function Bt(t) {
  return t instanceof Nt;
}
function et(t) {
  return !!t && t === t.window;
}
function U(t) {
  return !!t && t.nodeType === 9;
}
function Fe(t) {
  return !!t && t.nodeType === 11;
}
function j(t) {
  return !!t && t.nodeType === 1;
}
function Ze(t) {
  return !!t && t.nodeType === 3;
}
function We(t) {
  return typeof t == "boolean";
}
function D(t) {
  return typeof t == "function";
}
function E(t) {
  return typeof t == "string";
}
function L(t) {
  return t === void 0;
}
function it(t) {
  return t === null;
}
function ue(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function Vt(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
a.isWindow = et;
a.isFunction = D;
a.isArray = Et;
a.isNumeric = ue;
a.isPlainObject = Vt;
function k(t, e, n) {
  if (n) {
    let o = t.length;
    for (; o--; )
      if (e.call(t[o], o, t[o]) === !1)
        return t;
  } else if (Vt(t)) {
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
a.each = k;
s.each = function(t) {
  return k(this, t);
};
s.empty = function() {
  return this.each((t, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function pt(...t) {
  const e = We(t[0]) ? t.shift() : !1, n = t.shift(), o = t.length;
  if (!n)
    return {};
  if (!o)
    return pt(e, a, n);
  for (let i = 0; i < o; i++) {
    const r = t[i];
    for (const c in r)
      e && (Et(r[c]) || Vt(r[c])) ? ((!n[c] || n[c].constructor !== r[c].constructor) && (n[c] = new r[c].constructor()), pt(e, n[c], r[c])) : n[c] = r[c];
  }
  return n;
}
a.extend = pt;
s.extend = function(t) {
  return pt(s, t);
};
const Ge = /\S+/g;
function Lt(t) {
  return E(t) ? t.match(Ge) || [] : [];
}
s.toggleClass = function(t, e) {
  const n = Lt(t), o = !L(e);
  return this.each((i, r) => {
    j(r) && k(n, (c, l) => {
      o ? e ? r.classList.add(l) : r.classList.remove(l) : r.classList.toggle(l);
    });
  });
};
s.addClass = function(t) {
  return this.toggleClass(t, !0);
};
s.removeAttr = function(t) {
  const e = Lt(t);
  return this.each((n, o) => {
    j(o) && k(e, (i, r) => {
      o.removeAttribute(r);
    });
  });
};
function Ke(t, e) {
  if (t) {
    if (E(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !j(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return it(n) ? void 0 : n;
      }
      return L(e) ? this : it(e) ? this.removeAttr(t) : this.each((n, o) => {
        j(o) && o.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
s.attr = Ke;
s.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
s.hasClass = function(t) {
  return !!t && Pt.call(this, (e) => j(e) && e.classList.contains(t));
};
s.get = function(t) {
  return L(t) ? de.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
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
function qe(t) {
  return L(t) ? this.get().map((e) => j(e) || Ze(e) ? e.textContent : "").join("") : this.each((e, n) => {
    j(n) && (n.textContent = t);
  });
}
s.text = qe;
function O(t, e, n) {
  if (!j(t))
    return;
  const o = ft.getComputedStyle(t, null);
  return n ? o.getPropertyValue(e) || void 0 : o[e] || t.style[e];
}
function A(t, e) {
  return parseInt(O(t, e), 10) || 0;
}
function qt(t, e) {
  return A(t, `border${e ? "Left" : "Top"}Width`) + A(t, `padding${e ? "Left" : "Top"}`) + A(t, `padding${e ? "Right" : "Bottom"}`) + A(t, `border${e ? "Right" : "Bottom"}Width`);
}
const Ot = {};
function Xe(t) {
  if (Ot[t])
    return Ot[t];
  const e = P(t);
  T.body.insertBefore(e, null);
  const n = O(e, "display");
  return T.body.removeChild(e), Ot[t] = n !== "none" ? n : "block";
}
function Xt(t) {
  return O(t, "display") === "none";
}
function he(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function Rt(t) {
  return E(t) ? (e, n) => he(n, t) : D(t) ? t : Bt(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
s.filter = function(t) {
  const e = Rt(t);
  return a(Ut.call(this, (n, o) => e.call(n, o, n)));
};
function z(t, e) {
  return e ? t.filter(e) : t;
}
s.detach = function(t) {
  return z(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const Qe = /^\s*<(\w+)[^>]*>/, tn = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Qt = {
  "*": se,
  tr: He,
  td: Kt,
  th: Kt,
  thead: Tt,
  tbody: Tt,
  tfoot: Tt
};
function fe(t) {
  if (!E(t))
    return [];
  if (tn.test(t))
    return [P(RegExp.$1)];
  const e = Qe.test(t) && RegExp.$1, n = Qt[e] || Qt["*"];
  return n.innerHTML = t, a(n.childNodes).detach().get();
}
a.parseHTML = fe;
s.has = function(t) {
  const e = E(t) ? (n, o) => Dt(t, o).length : (n, o) => o.contains(t);
  return this.filter(e);
};
s.not = function(t) {
  const e = Rt(t);
  return this.filter((n, o) => (!E(t) || j(o)) && !e.call(o, n, o));
};
function $(t, e, n, o) {
  const i = [], r = D(e), c = o && Rt(o);
  for (let l = 0, p = t.length; l < p; l++)
    if (r) {
      const d = e(t[l]);
      d.length && Ue.apply(i, d);
    } else {
      let d = t[l][e];
      for (; d != null && !(o && c(-1, d)); )
        i.push(d), d = n ? d[e] : null;
    }
  return i;
}
function pe(t) {
  return t.multiple && t.options ? $(Ut.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function en(t) {
  return arguments.length ? this.each((e, n) => {
    const o = n.multiple && n.options;
    if (o || je.test(n.type)) {
      const i = Et(t) ? le.call(t, String) : it(t) ? [] : [String(t)];
      o ? k(n.options, (r, c) => {
        c.selected = i.indexOf(c.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = L(t) || it(t) ? "" : t;
  }) : this[0] && pe(this[0]);
}
s.val = en;
s.is = function(t) {
  const e = Rt(t);
  return Pt.call(this, (n, o) => e.call(n, o, n));
};
a.guid = 1;
function S(t) {
  return t.length > 1 ? Ut.call(t, (e, n, o) => ce.call(o, e) === n) : t;
}
a.unique = S;
s.add = function(t, e) {
  return a(S(this.get().concat(a(t, e).get())));
};
s.children = function(t) {
  return z(a(S($(this, (e) => e.children))), t);
};
s.parent = function(t) {
  return z(a(S($(this, "parentNode"))), t);
};
s.index = function(t) {
  const e = t ? a(t)[0] : this[0], n = t ? this : a(e).parent().children();
  return ce.call(n, e);
};
s.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const n = this.parent();
  return n.length ? n.closest(t) : e;
};
s.siblings = function(t) {
  return z(a(S($(this, (e) => a(e).parent().children().not(e)))), t);
};
s.find = function(t) {
  return a(S($(this, (e) => Dt(t, e))));
};
const nn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, on = /^$|^module$|\/(java|ecma)script/i, rn = ["type", "src", "nonce", "noModule"];
function sn(t, e) {
  const n = a(t);
  n.filter("script").add(n.find("script")).each((o, i) => {
    if (on.test(i.type) && re.contains(i)) {
      const r = P("script");
      r.text = i.textContent.replace(nn, ""), k(rn, (c, l) => {
        i[l] && (r[l] = i[l]);
      }), e.head.insertBefore(r, null), e.head.removeChild(r);
    }
  });
}
function an(t, e, n, o, i) {
  o ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), i && sn(e, t.ownerDocument);
}
function H(t, e, n, o, i, r, c, l) {
  return k(t, (p, d) => {
    k(a(d), (b, C) => {
      k(a(e), (x, v) => {
        const B = n ? C : v, y = n ? v : C, V = n ? b : x;
        an(B, V ? y.cloneNode(!0) : y, o, i, !V);
      }, l);
    }, c);
  }, r), e;
}
s.after = function() {
  return H(arguments, this, !1, !1, !1, !0, !0);
};
s.append = function() {
  return H(arguments, this, !1, !1, !0);
};
function cn(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (L(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, o) => {
    j(o) && (e ? a(o).empty().append(t) : o.innerHTML = t);
  });
}
s.html = cn;
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
  return a(S($(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
s.next = function(t, e, n) {
  return z(a(S($(this, "nextElementSibling", e, n))), t);
};
s.nextAll = function(t) {
  return this.next(t, !0);
};
s.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
s.parents = function(t, e) {
  return z(a(S($(this, "parentElement", !0, e))), t);
};
s.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
s.prev = function(t, e, n) {
  return z(a(S($(this, "previousElementSibling", e, n))), t);
};
s.prevAll = function(t) {
  return this.prev(t, !0);
};
s.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
s.map = function(t) {
  return a(Ie.apply([], le.call(this, (e, n) => t.call(e, n, e))));
};
s.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
s.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && O(n, "position") === "static"; )
      n = n.offsetParent;
    return n || re;
  });
};
s.slice = function(t, e) {
  return a(de.call(this, t, e));
};
const ln = /-([a-z])/g;
function Yt(t) {
  return t.replace(ln, (e, n) => n.toUpperCase());
}
s.ready = function(t) {
  const e = () => setTimeout(t, 0, a);
  return T.readyState !== "loading" ? e() : T.addEventListener("DOMContentLoaded", e), this;
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
    top: e.top + ft.pageYOffset,
    left: e.left + ft.pageXOffset
  };
};
s.position = function() {
  const t = this[0];
  if (!t)
    return;
  const e = O(t, "position") === "fixed", n = e ? t.getBoundingClientRect() : this.offset();
  if (!e) {
    const o = t.ownerDocument;
    let i = t.offsetParent || o.documentElement;
    for (; (i === o.body || i === o.documentElement) && O(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== t && j(i)) {
      const r = a(i).offset();
      n.top -= r.top + A(i, "borderTopWidth"), n.left -= r.left + A(i, "borderLeftWidth");
    }
  }
  return {
    top: n.top - A(t, "marginTop"),
    left: n.left - A(t, "marginLeft")
  };
};
const be = {
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
      return t = be[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, o) => {
        o[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
s.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[be[t] || t];
  });
};
const dn = /^--/;
function Jt(t) {
  return dn.test(t);
}
const $t = {}, { style: un } = se, hn = ["webkit", "moz", "ms"];
function fn(t, e = Jt(t)) {
  if (e)
    return t;
  if (!$t[t]) {
    const n = Yt(t), o = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${hn.join(`${o} `)}${o}`.split(" ");
    k(i, (r, c) => {
      if (c in un)
        return $t[t] = c, !1;
    });
  }
  return $t[t];
}
const pn = {
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
  return !n && !pn[t] && ue(e) ? `${e}px` : e;
}
function bn(t, e) {
  if (E(t)) {
    const n = Jt(t);
    return t = fn(t, n), arguments.length < 2 ? this[0] && O(this[0], t, n) : t ? (e = ge(t, e, n), this.each((o, i) => {
      j(i) && (n ? i.style.setProperty(t, e) : i.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
s.css = bn;
function ye(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const gn = /^\s+|\s+$/;
function te(t, e) {
  const n = t.dataset[e] || t.dataset[Yt(e)];
  return gn.test(n) ? n : ye(JSON.parse, n);
}
function yn(t, e, n) {
  n = ye(JSON.stringify, n), t.dataset[Yt(e)] = n;
}
function mn(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const o in this[0].dataset)
      n[o] = te(this[0], o);
    return n;
  }
  if (E(t))
    return arguments.length < 2 ? this[0] && te(this[0], t) : L(e) ? this : this.each((n, o) => {
      yn(o, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
s.data = mn;
function me(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
k([!0, !1], (t, e) => {
  k(["Width", "Height"], (n, o) => {
    const i = `${e ? "outer" : "inner"}${o}`;
    s[i] = function(r) {
      if (this[0])
        return et(this[0]) ? e ? this[0][`inner${o}`] : this[0].document.documentElement[`client${o}`] : U(this[0]) ? me(this[0], o) : this[0][`${e ? "offset" : "client"}${o}`] + (r && e ? A(this[0], `margin${n ? "Top" : "Left"}`) + A(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
k(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  s[n] = function(o) {
    if (!this[0])
      return L(o) ? void 0 : this;
    if (!arguments.length)
      return et(this[0]) ? this[0].document.documentElement[`client${e}`] : U(this[0]) ? me(this[0], e) : this[0].getBoundingClientRect()[n] - qt(this[0], !t);
    const i = parseInt(o, 10);
    return this.each((r, c) => {
      if (!j(c))
        return;
      const l = O(c, "boxSizing");
      c.style[n] = ge(n, i + (l === "border-box" ? qt(c, !t) : 0));
    });
  };
});
const ee = "___cd";
s.toggle = function(t) {
  return this.each((e, n) => {
    if (!j(n))
      return;
    const o = Xt(n);
    (L(t) ? o : t) ? (n.style.display = n[ee] || "", Xt(n) && (n.style.display = Xe(n.tagName))) : o || (n[ee] = O(n, "display"), n.style.display = "none");
  });
};
s.hide = function() {
  return this.toggle(!1);
};
s.show = function() {
  return this.toggle(!0);
};
const ne = "___ce", Ft = ".", Zt = { focus: "focusin", blur: "focusout" }, ve = { mouseenter: "mouseover", mouseleave: "mouseout" }, vn = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Wt(t) {
  return ve[t] || Zt[t] || t;
}
function Gt(t) {
  const e = t.split(Ft);
  return [e[0], e.slice(1).sort()];
}
s.trigger = function(t, e) {
  if (E(t)) {
    const [o, i] = Gt(t), r = Wt(o);
    if (!r)
      return this;
    const c = vn.test(r) ? "MouseEvents" : "HTMLEvents";
    t = T.createEvent(c), t.initEvent(r, !0, !0), t.namespace = i.join(Ft), t.___ot = o;
  }
  t.___td = e;
  const n = t.___ot in Zt;
  return this.each((o, i) => {
    n && D(i[t.___ot]) && (i[`___i${t.type}`] = !0, i[t.___ot](), i[`___i${t.type}`] = !1), i.dispatchEvent(t);
  });
};
function xe(t) {
  return t[ne] = t[ne] || {};
}
function xn(t, e, n, o, i) {
  const r = xe(t);
  r[e] = r[e] || [], r[e].push([n, o, i]), t.addEventListener(e, i);
}
function we(t, e) {
  return !e || !Pt.call(e, (n) => t.indexOf(n) < 0);
}
function bt(t, e, n, o, i) {
  const r = xe(t);
  if (e)
    r[e] && (r[e] = r[e].filter(([c, l, p]) => {
      if (i && p.guid !== i.guid || !we(c, n) || o && o !== l)
        return !0;
      t.removeEventListener(e, p);
    }));
  else
    for (e in r)
      bt(t, e, n, o, i);
}
s.off = function(t, e, n) {
  if (L(t))
    this.each((o, i) => {
      !j(i) && !U(i) && !et(i) || bt(i);
    });
  else if (E(t))
    D(e) && (n = e, e = ""), k(Lt(t), (o, i) => {
      const [r, c] = Gt(i), l = Wt(r);
      this.each((p, d) => {
        !j(d) && !U(d) && !et(d) || bt(d, l, c, e, n);
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
function wn(t, e, n, o, i) {
  if (!E(t)) {
    for (const r in t)
      this.on(r, e, n, t[r], i);
    return this;
  }
  return E(e) || (L(e) || it(e) ? e = "" : L(n) ? (n = e, e = "") : (o = n, n = e, e = "")), D(o) || (o = n, n = void 0), o ? (k(Lt(t), (r, c) => {
    const [l, p] = Gt(c), d = Wt(l), b = l in ve, C = l in Zt;
    d && this.each((x, v) => {
      if (!j(v) && !U(v) && !et(v))
        return;
      const B = function(y) {
        if (y.target[`___i${y.type}`])
          return y.stopImmediatePropagation();
        if (y.namespace && !we(p, y.namespace.split(Ft)) || !e && (C && (y.target !== v || y.___ot === d) || b && y.relatedTarget && v.contains(y.relatedTarget)))
          return;
        let V = v;
        if (e) {
          let Y = y.target;
          for (; !he(Y, e); )
            if (Y === v || (Y = Y.parentNode, !Y))
              return;
          V = Y;
        }
        Object.defineProperty(y, "currentTarget", {
          configurable: !0,
          get() {
            return V;
          }
        }), Object.defineProperty(y, "delegateTarget", {
          configurable: !0,
          get() {
            return v;
          }
        }), Object.defineProperty(y, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const Be = o.call(V, y, y.___td);
        i && bt(v, d, p, e, B), Be === !1 && (y.preventDefault(), y.stopPropagation());
      };
      B.guid = o.guid = o.guid || a.guid++, xn(v, d, p, e, B);
    });
  }), this) : this;
}
s.on = wn;
function jn(t, e, n, o) {
  return this.on(t, e, n, o, !0);
}
s.one = jn;
const Cn = /\r?\n/g;
function kn(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(Cn, `\r
`))}`;
}
const _n = /file|reset|submit|button|image/i, je = /radio|checkbox/i;
s.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    k(n.elements || [n], (o, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || _n.test(i.type) || je.test(i.type) && !i.checked)
        return;
      const r = pe(i);
      if (!L(r)) {
        const c = Et(r) ? r : [r];
        k(c, (l, p) => {
          t += kn(i.name, p);
        });
      }
    });
  }), t.slice(1);
};
function oe(t) {
  return t == null ? "null" : Array.isArray(t) ? "array" : typeof t == "string" ? "string" : typeof t == "number" ? "number" : typeof t == "boolean" ? "boolean" : "object";
}
function Ce(t) {
  try {
    return typeof t == "string" ? JSON.parse(t) : Array.isArray(t) ? Object.assign([], t) : a.isPlainObject(t) ? Object.assign({}, t) : {};
  } catch (e) {
    console.error("error", e.message);
  }
}
function En(t) {
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
const Nn = {
  live: !1,
  // live update
  theme: "system"
  // system,light,dark
}, Ln = {
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
}, J = {
  START: "pointerdown",
  MOVE: "pointermove",
  END: "pointerup.json-editor pointercancel.json-editor"
}, F = {
  CLICK: "click.json-editor-context",
  KEYUP: "keyup.json-editor-context"
}, nt = {
  START: "drag-over-start",
  END: "drag-over-end",
  ALL: "drag-over-start drag-over-end"
}, Rn = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12L10 8L6 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', An = '<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-90, 10, 10)"><path d="M7 9L10 12L13 9" fill="currentColor"/><path d="M7 9L10 12L13 9H7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>', Sn = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', ke = {
  object: '<svg viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-object"><g transform="translate(0 1)"><path d="M2.296 5.166C2.296 7.238 3.78 8.162 5.166 8.162C6.538 8.162 8.022 7.238 8.022 5.166C8.022 3.094 6.538 2.156 5.166 2.156C3.78 2.156 2.296 3.094 2.296 5.166ZM0 5.18C0 2.03 2.366 0 5.166 0C7.952 0 10.318 2.03 10.318 5.18C10.318 8.316 7.952 10.346 5.166 10.346C2.366 10.346 0 8.316 0 5.18Z" fill="currentColor"/></g></svg>',
  array: '<svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-array"><path d="M7.728 9.926L6.902 7.658H2.87L2.044 9.926H0L3.808 0H6.048L9.828 9.926H7.728ZM4.886 2.142L3.514 5.894H6.258L4.886 2.142Z" fill="currentColor"/></svg>',
  string: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-string"><g transform="translate(0 1.5)"><path d="M7.39203 2.576L5.65603 3.108C5.55803 2.562 5.11003 1.708 3.85003 1.708C2.91203 1.708 2.29603 2.31 2.29603 2.968C2.29603 3.514 2.64603 3.948 3.37403 4.088L4.76003 4.354C6.56603 4.704 7.53203 5.88 7.53203 7.28C7.53203 8.806 6.25803 10.346 3.94803 10.346C1.31603 10.346 0.154031 8.652 3.05176e-05 7.238L1.79203 6.762C1.87603 7.742 2.56203 8.624 3.96203 8.624C4.99803 8.624 5.57203 8.106 5.57203 7.406C5.57203 6.832 5.13803 6.384 4.36803 6.23L2.98203 5.95C1.40003 5.628 0.378031 4.606 0.378031 3.108C0.378031 1.344 1.96003 0 3.83603 0C6.24403 0 7.16803 1.456 7.39203 2.576Z" fill="currentColor"/></g></svg>',
  number: '<svg viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-number"><g transform="translate(0 1)"><path d="M8.47003 9.926H6.44003L1.93203 2.884V9.926H3.05176e-05V0H2.40803L6.53803 6.566V0H8.47003V9.926Z" fill="currentColor"/></g></svg>',
  boolean: '<svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-boolean"><g transform="translate(0 .75)"><path d="M3.05176e-05 0H3.57003C5.50203 0 6.59403 1.134 6.59403 2.674C6.59403 3.696 5.97803 4.522 5.15203 4.802C6.11803 5.04 6.90203 5.922 6.90203 7.154C6.90203 8.764 5.69803 9.926 3.83603 9.926H3.05176e-05V0ZM1.90403 4.102H3.27603C4.15803 4.102 4.69003 3.612 4.69003 2.856C4.69003 2.1 4.20003 1.624 3.26203 1.624H1.90403V4.102ZM1.90403 8.316H3.47203C4.41003 8.316 4.97003 7.826 4.97003 7.028C4.97003 6.244 4.46603 5.698 3.50003 5.698H1.90403V8.316Z" fill="currentColor"/></g></svg>',
  null: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-null"><g transform="translate(0 1.5)"><path d="M3.808 10.15C1.694 10.15 0 8.848 0 6.412V0H1.932V6.272C1.932 7.574 2.66 8.26 3.808 8.26C4.984 8.26 5.698 7.574 5.698 6.272V0H7.63V6.412C7.63 8.848 5.936 10.15 3.808 10.15Z" fill="currentColor"/></g></svg>'
}, Tn = [
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
var Z, w, W, gt, _e, yt, Ee, mt, Ne;
class On {
  constructor(e, n, o) {
    m(this, gt);
    m(this, yt);
    m(this, mt);
    m(this, Z, void 0);
    m(this, w, {
      node: void 0,
      type: void 0,
      dialog: void 0
    });
    m(this, W, void 0);
    M(this, Z, e), u(this, w).node = n, M(this, W, String(u(this, w).node.data("type"))), u(this, w).type = u(this, w).node.find("& > .node__body > .type"), u(this, w).type.addClass("open"), u(this, w).dialog = f(this, gt, _e).call(this, Tn, u(this, W), o), u(this, w).dialog.on("click", (i) => i.stopPropagation()), u(this, w).dialog.find("button").on("click", (i) => f(this, yt, Ee).call(this, i)), u(this, Z).customContext(u(this, w).dialog.get(0), {
      node: u(this, w).node.get(0),
      type: u(this, W),
      isRoot: o
    }, a), u(this, w).type.append(u(this, w).dialog), a(window).on(F.CLICK, (i) => this.close(i)), a(window).on(F.KEYUP, (i) => f(this, mt, Ne).call(this, i));
  }
  close() {
    u(this, w).type.removeClass("open"), u(this, w).dialog.remove(), a(window).off(F.CLICK), a(window).off(F.KEYUP), delete u(this, Z).context;
  }
}
Z = new WeakMap(), w = new WeakMap(), W = new WeakMap(), gt = new WeakSet(), _e = function(e, n, o = !1) {
  function i(l, p) {
    let d = "";
    const { key: b, label: C, children: x } = l;
    if (o)
      switch (b) {
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
    let v = "", B = "", y = "";
    switch (b) {
      case "change-type":
        v = ' class="dropdown"', y = " disabled";
        break;
      case "insert":
        if ([h.STRING, h.NUMBER, h.BOOLEAN, h.NULL].indexOf(n) > -1)
          return "";
        v = ' class="dropdown"', y = " disabled";
        break;
      case "duplicate":
        v = ' class="duplicate"', y = ' data-mode="duplicate"';
        break;
      case "remove":
        v = ' class="remove"', y = ' data-mode="remove"';
        break;
      case h.OBJECT:
      case h.ARRAY:
      case h.STRING:
      case h.NUMBER:
      case h.BOOLEAN:
      case h.NULL:
        v = ' class="type"', B = `<i class="type-icon type-icon--${b}">${ke[b]}</i>`, y = ` data-mode="${p}" data-type="${b}"`, p === "change-type" && b === n && (y = " disabled");
        break;
    }
    return d += `<li${v}>`, d += `<button type="button"${y}>`, d += B, d += `<em class="label">${C}</em>`, (b === "change-type" || b === "insert") && (d += `<span class="arrow">${Rn}</span>`), d += "</button>", (x == null ? void 0 : x.length) > 0 && (d += '<div class="children">', d += r(x, b), d += "</div>"), d += "</li>", d;
  }
  function r(l, p = void 0) {
    let d = "<ol>";
    for (let b in l)
      d += i(l[b], p);
    return d += "</ol>", d;
  }
  let c = `<nav class="context${o ? " is-root" : ""}">`;
  return c += r(e), c += "</nav>", a(c);
}, yt = new WeakSet(), Ee = function(e) {
  const n = a(e.currentTarget), o = n.data("mode");
  let i = String(n.data("type"));
  i = i === "undefined" ? "" : i, this.close(), this.selectItem && typeof this.selectItem == "function" && this.selectItem(u(this, w).node, o, i);
}, mt = new WeakSet(), Ne = function(e) {
  e.code === "Escape" && this.close();
};
var _, g, It, G, vt, Le, rt, Mt, K, ct, xt, Re, wt, Ae, q, lt, X, dt, st, zt, N, R, at, Ht, I, ot, Q, ut, tt, ht, jt, Se, Ct, Te, kt, Oe;
class $n {
  constructor(e, n = {}) {
    m(this, vt);
    m(this, rt);
    m(this, K);
    m(this, xt);
    m(this, wt);
    m(this, q);
    m(this, X);
    m(this, st);
    m(this, N);
    m(this, at);
    /**
     * NODE EVENTS
     */
    m(this, I);
    m(this, Q);
    m(this, tt);
    m(this, jt);
    m(this, Ct);
    m(this, kt);
    m(this, _, { wrap: null, tree: null });
    At(this, "options");
    At(this, "context");
    m(this, g, void 0);
    m(this, It, void 0);
    m(this, G, !1);
    u(this, _).wrap = a(e), this.options = new Proxy(Object.assign({}, Nn, n), {
      get: (o, i) => o[i],
      set: f(this, vt, Le).bind(this)
    }), f(this, rt, Mt).call(this, this.options.theme);
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
    n = { ...Ln, ...n };
    const { data: i, between: r, open: c, callback: l } = n;
    e = a(e);
    const { key: p, value: d, type: b } = i, C = f(this, K, ct).call(this, b, !1);
    f(this, q, lt).call(this, C, { ...i, open: c }), f(this, I, ot).call(this, C);
    const x = e.find("& > .node__children > ul");
    r === "before" ? x.prepend(C) : x.append(C), (b === h.ARRAY || b === h.OBJECT) && l && typeof l == "function" && l(C.get(0), d), o && f(this, N, R).call(this);
  }
  /**
   * remove node
   * @param {HTMLElement} $node
   * @param {boolean} useUpdate
   */
  removeNode(e, n = !0) {
    e = a(e), e.remove(), n && f(this, N, R).call(this);
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
      value: f(this, st, zt).call(this, i),
      type: n,
      open: i.hasClass("open")
    }, c = i.find("& > .node__children > .tree").html(), l = i.hasClass("root");
    i.empty(), i.html(f(this, K, ct).call(this, n, l).html()), c && i.find("& > .node__children > .tree").html(c), f(this, q, lt).call(this, i, r), f(this, I, ot).call(this, i), i.attr("data-type", n), o && f(this, N, R).call(this);
  }
  /**
   * duplicate
   * @param {HTMLElement} $target
   * @param {boolean} useUpdate
   */
  duplicate(e, n = !0) {
    e = a(e);
    const o = a(e.get(0).outerHTML);
    f(this, I, ot).call(this, o), e.after(o), n && f(this, N, R).call(this);
  }
  fold(e, n) {
    e = a(e), n === void 0 ? e.toggleClass("open") : n === !0 ? e.addClass("open") : e.removeClass("open");
  }
  clear() {
    u(this, _).tree && (u(this, _).wrap.empty(), this.replace({}, !1), f(this, N, R).call(this));
  }
  destroy() {
    a(window).off(J.END).off(F.CLICK).off(F.KEYUP), u(this, _).wrap.empty();
  }
  /**
   * replace
   * @param {object|array} src
   * @param {boolean} useUpdate
   */
  replace(e, n = !0) {
    u(this, _).wrap.empty(), e = Ce(e);
    const o = f(this, xt, Re).call(this, e);
    this.import(o, e, !1), n && f(this, N, R).call(this);
  }
  /**
   * import data
   * @param {HTMLElement} target
   * @param {object|array} src
   * @param {boolean} useUpdate
   */
  import(e, n, o = !0) {
    a.each(n, (i, r) => {
      const c = oe(r), l = { key: i, value: r, type: c };
      this.addNode(e, {
        data: l,
        open: !1,
        callback: (p, d) => this.import(p, d, !1)
      }, !1);
    }), o && f(this, N, R).call(this);
  }
  /**
   * export
   * @param {boolean} json
   * @param {number|boolean} space (number: space count, true: tab, false: 0)
   * @return {array|object}
   */
  export(e = !1, n = 2) {
    let o = f(this, at, Ht).call(this);
    if (e) {
      let i = 2;
      return n === !0 ? i = "	" : typeof n === h.NUMBER && (i = n), JSON.stringify(o, null, i);
    } else
      return o;
  }
  /**
   * preview
   * @param {array|object} src
   */
  preview(e) {
  }
  customContext(e, { node: n, type: o, isRoot: i }, r) {
  }
}
_ = new WeakMap(), g = new WeakMap(), It = new WeakMap(), G = new WeakMap(), vt = new WeakSet(), Le = function(e, n, o) {
  switch (e[n] = o, n) {
    case "theme":
      f(this, rt, Mt).call(this, o);
      break;
  }
  return !0;
}, rt = new WeakSet(), Mt = function(e) {
  e = ["system", "light", "dark"].indexOf(e) > -1 ? e : "system", u(this, _).wrap.attr("data-theme", e);
}, K = new WeakSet(), ct = function(e, n = !1) {
  let o = `<li data-type="${e}" class="node${n ? " root" : ""}">`;
  return o += '<div class="node__body">', n || (o += `<div class="sort">${Sn}</div>`), o += '<div class="type"><button type="button"></button></div>', (e === h.OBJECT || e === h.ARRAY) && (o += `<button type="button" class="fold">${An}</button>`), n || (o += '<div class="key"></div>'), o += '<em class="count"></em>', n || (o += '<div class="value"></div>'), o += "</div>", o += '<div class="node__children"><ul class="tree"/></div>', o += "</li>", a(o);
}, xt = new WeakSet(), Re = function(e) {
  const n = oe(e), o = f(this, K, ct).call(this, n, !0);
  return f(this, q, lt).call(this, o, {
    key: void 0,
    value: e,
    type: n,
    open: !0
  }), f(this, I, ot).call(this, o), u(this, _).tree = a("<ul/>"), u(this, _).tree.append(o), u(this, _).wrap.append(u(this, _).tree), o;
}, wt = new WeakSet(), Ae = function(e, n, o) {
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
}, q = new WeakSet(), lt = function(e, n) {
  const { key: o, value: i, type: r, open: c } = n, l = e.hasClass("root"), p = e.children(".node__body");
  if (p.find(".type > button").html(`<i class="type-icon type-icon--${r}">${ke[r]}</i>`), (r === h.OBJECT || r === h.ARRAY) && this.fold(e, c), !l) {
    p.find(".key").html(`<div class="label-field" contenteditable="true" data-placeholder="empty">${o}</div>`);
    const d = p.find(".value");
    let b;
    switch (r) {
      case h.STRING:
        d.html(`<div contenteditable="true" data-placeholder="empty" class="label-field type-string">${String(i)}</div>`);
        break;
      case h.NUMBER:
        b = Number(i), isNaN(b) && (b = 0), d.html(`<input type="number" value="${b}" placeholder="0" class="label-field type-number"/>`);
        break;
      case h.BOOLEAN:
        b = i === "false" ? !1 : !!i, d.html(`<button type="button" data-value="${b}" class="label-switch type-boolean"><span><i>${b.toString().toUpperCase()}</i></span></button>`);
        break;
      case h.NULL:
        d.html('<em class="label-null type-null">NULL</em>');
        break;
    }
  }
  if (r === h.OBJECT || r === h.ARRAY) {
    const d = En(i);
    isNaN(d) || p.find(".count").text(d);
  }
}, X = new WeakSet(), dt = function(e) {
  return String(e.data("type"));
}, st = new WeakSet(), zt = function(e) {
  const n = f(this, X, dt).call(this, e), o = e.find("& > .node__body > .value");
  switch (n) {
    case h.OBJECT:
    case h.ARRAY:
      return "";
    case h.STRING:
      return o.children(".type-string").text() || "";
    case h.NUMBER:
      return Number(o.children(".type-number").val());
    case h.BOOLEAN:
      return o.children(".type-boolean").data("value");
    case h.NULL:
      return null;
  }
}, N = new WeakSet(), R = function() {
  this.options.live && this.preview && typeof this.preview == "function" && this.preview(f(this, at, Ht).call(this));
}, at = new WeakSet(), Ht = function() {
  const e = (i, r) => {
    let c = r === h.ARRAY ? [] : {};
    return i.find("& > .node__children > ul > li").each((p, d) => {
      if (!(r === h.ARRAY || r === h.OBJECT))
        return !0;
      d = a(d);
      const b = f(this, X, dt).call(this, d);
      switch (b) {
        case h.OBJECT:
        case h.ARRAY:
          switch (r) {
            case h.ARRAY:
              c.push(e(d, b));
              break;
            case h.OBJECT:
              const x = d.find("& > .node__body > .key").text();
              x && (c[x] = e(d, b));
              break;
          }
          break;
        case h.STRING:
        case h.NUMBER:
        case h.BOOLEAN:
        case h.NULL:
          const C = f(this, st, zt).call(this, d);
          switch (r) {
            case h.ARRAY:
              c.push(C);
              break;
            case h.OBJECT:
              const x = d.find("& > .node__body > .key").text();
              x && (c[x] = C);
              break;
          }
          break;
      }
    }), c;
  }, n = u(this, _).tree.children(".node"), o = f(this, X, dt).call(this, n);
  return e(n, o);
}, I = new WeakSet(), ot = function(e) {
  const n = e.find(".sort");
  n.length && n.on(J.START, f(this, jt, Se).bind(this)), e.find(".type > button").on("click", async (l) => {
    const p = a(l.currentTarget);
    if (l.stopPropagation(), p.parent().hasClass("open"))
      this.context && this.context.close();
    else {
      this.context && this.context.close();
      const d = p.closest(".node").hasClass("root");
      this.context = new On(this, p.closest(".node"), d), this.context.selectItem = (b, C, x) => f(this, wt, Ae).call(this, b, C, x);
    }
  }), e.find(".fold").on("click", (l) => {
    const d = a(l.currentTarget).closest(".node");
    this.fold(d);
  });
  const o = e.find(".key > .label-field");
  o.length && o.on("keydown", (l) => {
    if (l.keyCode === 13 || ie(l))
      return l.preventDefault();
  }).on("input", (l) => f(this, Q, ut).call(this, l)).on("blur", (l) => f(this, tt, ht).call(this, l));
  const i = e.find(".value > .type-string");
  i.length && i.on("keydown", (l) => {
    if (ie(l))
      return l.preventDefault();
  }).on("input", (l) => f(this, Q, ut).call(this, l)).on("blur", (l) => f(this, tt, ht).call(this, l));
  const r = e.find(".value > .type-number");
  r.length && r.on("input", (l) => f(this, Q, ut).call(this, l)).on("blur", (l) => f(this, tt, ht).call(this, l));
  const c = e.find(".value > .type-boolean");
  c.length && c.on("click", (l) => {
    const p = a(l.currentTarget), d = !p.data("value");
    p.data("value", d).find("i").text(d.toString().toUpperCase()), f(this, N, R).call(this);
  });
}, Q = new WeakSet(), ut = function() {
  M(this, G, !0);
}, tt = new WeakSet(), ht = function() {
  u(this, G) && (f(this, N, R).call(this), M(this, G, !1));
}, jt = new WeakSet(), Se = function(e) {
  if (M(this, g, {}), u(this, g).$node = a(e.currentTarget).closest(".node"), u(this, g).$area = u(this, g).$node.parent(), u(this, g).$nodes = u(this, g).$area.children(".node"), u(this, g).$nodes.length < 2) {
    M(this, g, void 0);
    return;
  }
  u(this, g).$nodes.on(J.MOVE, f(this, Ct, Te).bind(this)), a(window).on(J.END, f(this, kt, Oe).bind(this));
}, Ct = new WeakSet(), Te = function(e) {
  const n = a(e.currentTarget), o = n.children(".node__body");
  if (!(o.length > 0))
    return;
  const { y: i, height: r } = o.get(0).getBoundingClientRect(), c = r * 0.5 < e.y - i;
  if (u(this, g).activeNode || (u(this, _).wrap.addClass("dragging"), u(this, g).$area.addClass("drag-area"), u(this, g).$node.addClass("drag-select")), u(this, g).activeNode !== n.get(0))
    u(this, g).activeNode && a(u(this, g).activeNode).removeClass(nt.ALL), u(this, g).activeNode = n.get(0);
  else if (u(this, g).half === c)
    return;
  u(this, g).half = c, n.removeClass(nt.ALL).addClass(c ? nt.END : nt.START);
}, kt = new WeakSet(), Oe = function(e) {
  u(this, _).wrap.removeClass("dragging"), u(this, g).$area.removeClass("drag-area"), u(this, g).$node.removeClass("drag-select"), u(this, g).$nodes.removeClass(nt.ALL), u(this, g).$nodes.off(J.MOVE), a(window).off(J.END), u(this, g).half ? u(this, g).$node.insertAfter(u(this, g).activeNode) : u(this, g).$node.insertBefore(u(this, g).activeNode), M(this, g, void 0), f(this, N, R).call(this);
};
const Bn = `.json-editor{--json-editor-font-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";--json-editor-font-eng: "Helvetica Neue", sans-serif;--json-editor-color-bg: hsl(0 0% 100%);--json-editor-color-base: hsl(0 0% 13%);--json-editor-color-blur: hsl(0 0% 67%);--json-editor-color-object: hsl(174 66% 39%);--json-editor-color-array: hsl(191 75% 53%);--json-editor-color-string: hsl(5 87% 59%);--json-editor-color-number: hsl(33 89% 55%);--json-editor-color-boolean: hsl(45 89% 54%);--json-editor-color-null: hsl(0 0% 58%);--json-editor-color-active: hsla(0 0% 0% / 6%);--json-editor-color-focus: hsl(5 87% 59%);--json-editor-color-error: hsl(0 96% 52%);--json-editor-font-size: 13px;font-family:var(--json-editor-font-base);color:var(--json-editor-color-base);font-size:16px;line-height:1.15}.json-editor>ul{position:relative;margin:0;padding:0;list-style:none}.json-editor.dragging{cursor:move;-webkit-user-select:none;user-select:none}.json-editor.dragging *{cursor:move!important;-webkit-user-select:none!important;user-select:none!important}.json-editor .type-icon{display:grid;width:var(--type-size, 24px);height:var(--type-size, 24px);place-content:center;box-sizing:border-box;border-radius:4px;background:var(--type-icon-color, #aaa)}.json-editor .type-icon svg{display:block;box-sizing:border-box;color:#fff;width:var(--type-icon-width)}.json-editor .type-icon--object{--type-icon-color: var(--json-editor-color-object);--type-icon-width: calc(var(--type-icon-size, 10px) + 1px)}.json-editor .type-icon--array{--type-icon-color: var(--json-editor-color-array);--type-icon-width: var(--type-icon-size, 10px)}.json-editor .type-icon--string{--type-icon-color: var(--json-editor-color-string);--type-icon-width: calc(var(--type-icon-size, 10px) - 2px)}.json-editor .type-icon--number{--type-icon-color: var(--json-editor-color-number);--type-icon-width: calc(var(--type-icon-size, 10px) - 1px)}.json-editor .type-icon--boolean{--type-icon-color: var(--json-editor-color-boolean);--type-icon-width: calc(var(--type-icon-size, 10px) - 3px)}.json-editor .type-icon--null{--type-icon-color: var(--json-editor-color-null);--type-icon-width: calc(var(--type-icon-size, 10px) - 2px)}.json-editor .label-field{margin:-4px 0;padding:4px 6px;min-width:var(--label-min-width, unset);min-height:24px;outline:none;font-size:var(--json-editor-font-size);line-height:1.42;box-sizing:border-box;border-radius:2px;background-color:#0000;box-shadow:0 0 0 .5px #0000;transition:background-color .16s ease-out,box-shadow .2s ease-out;cursor:text}.json-editor .label-field:hover,.json-editor .label-field:focus{background-color:var(--json-editor-color-active)}.json-editor .label-field:focus{box-shadow:0 0 0 .5px #00000040}.json-editor .label-field:empty:before{content:attr(data-placeholder);color:var(--json-editor-color-blur)}.json-editor .label-field[type=number]{border:none;width:100px}.json-editor .label-field[type=number]::-webkit-outer-spin-button,.json-editor .label-field[type=number]::-webkit-inner-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none}.json-editor .label-null{display:block;padding:0 6px;color:var(--json-editor-color-blur);font-style:normal;letter-spacing:-.5px;-webkit-user-select:none;user-select:none;font-size:var(--json-editor-font-size)}.json-editor .label-switch{--switch-width: 36px;--switch-height: 18px;--switch-offset: 3px;--switch-speed: .1s;--switch-unit-size: calc(var(--switch-height) - (var(--switch-offset) * 2));display:block;margin:0 0 0 6px;padding:2px 0;background:none;border:none;font-size:0;cursor:pointer}.json-editor .label-switch span{display:block;position:relative;padding:var(--switch-offset);width:var(--switch-width);height:var(--switch-height);border-radius:calc(var(--switch-height) * .5);box-shadow:inset 0 0 0 1px var(--json-editor-color-blur);transition:box-shadow .16s ease-out;box-sizing:border-box}.json-editor .label-switch i{display:block;width:var(--switch-unit-size);height:var(--switch-unit-size);background-color:var(--switch-unit-color, var(--json-editor-color-blur));border-radius:var(--switch-unit-size);pointer-events:none;transform:translate(var(--switch-unit-x));transition:transform var(--switch-speed) ease-out,width var(--switch-speed) ease-out,background-color .24s ease-out}.json-editor .label-switch:active span{box-shadow:inset 0 0 0 1px var(--json-editor-color-active)}.json-editor .label-switch:active[data-value=false] i{width:calc(var(--switch-unit-size) + 6px)}.json-editor .label-switch:active[data-value=true] i{width:calc(var(--switch-unit-size) + 6px);transform:translate(calc(var(--switch-width) - var(--switch-offset) * 2 - var(--switch-unit-size) - 6px))}.json-editor .label-switch:focus-visible{outline:none}.json-editor .label-switch:focus-visible span{outline:2px solid var(--json-editor-color-focus);outline-offset:1px}.json-editor .label-switch[data-value=false]{--switch-unit-x: 0}.json-editor .label-switch[data-value=true]{--switch-unit-x: calc(var(--switch-width) - (var(--switch-offset) * 2) - var(--switch-unit-size));--switch-unit-color: var(--json-editor-color-focus)}.json-editor .node{position:relative}.json-editor .node__body{position:relative;display:flex;align-items:center;box-sizing:border-box;padding:4px 0;transition:opacity .12s ease-out}.json-editor .node__body>.sort{display:block;box-sizing:border-box;cursor:move;margin:-4px 4px -4px 0;padding:4px 0}.json-editor .node__body>.sort svg{display:block;width:24px}.json-editor .node__body>.sort:active{opacity:.5}.json-editor .node__body>.type{position:relative}.json-editor .node__body>.type>button{display:block;margin:-2px;padding:2px;box-sizing:border-box;border:none;background:none;outline:none;cursor:pointer;transition:opacity .12s ease-out;border-radius:6px}.json-editor .node__body>.type>button:active{opacity:.5}.json-editor .node__body>.type>button:focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-1px}.json-editor .node__body>.type.open>button{opacity:.25}.json-editor .node__body>.fold{display:block;width:28px;height:28px;margin:-8px -8px -8px 0;padding:0;background:none;border:none;box-sizing:border-box;cursor:pointer}.json-editor .node__body>.fold:focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-6px}.json-editor .node__body>.fold svg{display:block;margin:0 auto;width:20px;rotate:0deg;box-sizing:border-box;transition:rotate,.16s ease-out}.json-editor .node__body>.key{margin-left:6px;--label-min-width: 42px}.json-editor .node__body>.count{display:block;margin:0;pointer-events:none;padding:0 0 0 8px;color:var(--json-editor-color-blur);font-style:normal;-webkit-user-select:none;user-select:none;font-size:14px;line-height:normal}.json-editor .node__body>.value{display:flex;align-items:center;gap:0 6px;font-size:var(--json-editor-font-size);line-height:1.42;--label-min-width: 72px}.json-editor .node__body>.value:before{content:":"}.json-editor .node__children>.tree{position:relative;display:none;margin:0;padding:0 0 0 26px;list-style:none;box-sizing:border-box}.json-editor .node__children>.tree:not(:empty):before{content:"";display:block;position:absolute;left:11px;top:6px;bottom:14px;width:4px;border-width:0 0 0 1px;border-style:dashed;border-color:#b8b8b8}.json-editor .node__children>.tree:not(:empty):after{content:"";display:block;position:absolute;left:9px;bottom:13px;width:5px;height:5px;background:hsl(0,0%,72%);border-radius:50%}.json-editor .node.open>.node__body .fold svg{rotate:90deg}.json-editor .node.open>.node__children>.tree{display:grid}.json-editor .node.open>.node__children>.tree:empty{display:none}.json-editor .node[data-type=object]>.node__body .count:before{content:"{"}.json-editor .node[data-type=object]>.node__body .count:after{content:"}"}.json-editor .node[data-type=object]>.node__body .value{display:none}.json-editor .node[data-type=array]>.node__body .count:before{content:"["}.json-editor .node[data-type=array]>.node__body .count:after{content:"]"}.json-editor .node[data-type=array]>.node__body .value{display:none}.json-editor .node[data-type=array]>.node__children>.tree>.node>.node__body>.key{display:none}.json-editor .node[data-type=string]>.node__body .fold,.json-editor .node[data-type=number]>.node__body .fold,.json-editor .node[data-type=boolean]>.node__body .fold,.json-editor .node[data-type=null]>.node__body .fold{display:none}.json-editor .node[data-type=string]>.node__children>.tree,.json-editor .node[data-type=number]>.node__children>.tree,.json-editor .node[data-type=boolean]>.node__children>.tree,.json-editor .node[data-type=null]>.node__children>.tree{display:none}.json-editor .node:before,.json-editor .node:after{display:none;content:"";position:absolute;left:0;right:0;height:4px;background-color:var(--json-editor-color-focus);border-radius:4px}.json-editor .node:before{top:-2px}.json-editor .node:after{bottom:-2px}.json-editor .node.drag-over-start:before{display:block}.json-editor .node.drag-over-end:after{display:block}.json-editor.dragging .node:not(.root)>.node__body{opacity:.25}.json-editor.dragging .drag-area>.node>.node__body{opacity:unset}.json-editor .drag-select{background-color:#0000000d}.json-editor .context{--context-border-radius: 4px;--context-color-line: hsl(0 0% 88%);--context-color-item-active: hsl(0 0% 92%);position:absolute;top:-8px;right:-8px;z-index:2}.json-editor .context.is-root{left:28px}.json-editor .context ol{position:absolute;left:0;margin:0;padding:0;list-style:none;background:var(--context-color-line);border-radius:var(--context-border-radius);box-shadow:0 4px 32px #0000001a,0 2px 8px #0003,0 0 0 1px #0000000d}.json-editor .context li{position:relative}.json-editor .context li:not(:first-child){margin-top:1px}.json-editor .context li:first-child>button{border-top-left-radius:var(--context-border-radius);border-top-right-radius:var(--context-border-radius)}.json-editor .context li:last-child>button{border-bottom-left-radius:var(--context-border-radius);border-bottom-right-radius:var(--context-border-radius)}.json-editor .context li.type>button{grid-template-columns:auto 1fr;gap:8px}.json-editor .context li.type>button:disabled>*{opacity:.25}.json-editor .context li.dropdown:hover>button,.json-editor .context li.dropdown:focus-within>button{background-color:var(--context-color-item-active)}.json-editor .context li.dropdown:hover>.children,.json-editor .context li.dropdown:focus-within>.children{opacity:1;pointer-events:auto}.json-editor .context li.dropdown>button{grid-template-columns:1fr auto}.json-editor .context li.remove .label{color:var(--json-editor-color-error)}.json-editor .context button{display:grid;align-items:center;margin:0;padding:8px 12px;min-width:150px;text-align:left;box-sizing:border-box;background-color:var(--json-editor-color-bg);border:none;cursor:pointer;border-radius:0;transition:background-color .12s ease-out;font-family:var(--json-editor-font-base);font-size:12px;letter-spacing:-.25px;outline:none;color:var(--json-editor-color-base)}.json-editor .context button:hover,.json-editor .context button:active{background-color:var(--context-color-item-active)}.json-editor .context button:not(.parent):focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-2px}.json-editor .context button:disabled{cursor:default}.json-editor .context .label{display:block;font-style:normal;pointer-events:none;-webkit-user-select:none;user-select:none}.json-editor .context .type-icon{--type-size: 16px;--type-icon-size: 8px}.json-editor .context .arrow{display:block;margin:0 -4px 0 0;pointer-events:none}.json-editor .context .arrow svg{display:block;width:16px}.json-editor .context .children{position:absolute;top:-12px;right:4px;z-index:2;pointer-events:none;opacity:0;transition:opacity .24s ease-out}.json-editor .context .children ol{top:0;left:0}
`;
var _t, $e;
class zn extends HTMLElement {
  constructor() {
    super();
    m(this, _t);
    this.attachShadow({ mode: "open" });
    const n = document.createElement("template");
    n.innerHTML = '<div class="json-editor"></div>';
    const o = new CSSStyleSheet();
    o.replaceSync(Bn), this.shadowRoot.appendChild(n.content.cloneNode(!0)), this.shadowRoot.adoptedStyleSheets = [o], this.root = this.shadowRoot.childNodes[0], this.ready = !1, this.data = {}, this.options = {
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
          this.data = Ce(i), this.core && this.core.replace(this.data, !1);
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
    this.core = new $n(this.root, this.options), this.core.replace(this.data, !0), this.core.preview = (n) => {
      this.data = n, f(this, _t, $e).call(this, "update", { data: n });
    };
  }
  /**
   * unmounted component
   */
  disconnectedCallback() {
    console.warn("disconnectedCallback()"), this.core && (this.core.destroy(), delete this.core, this.root.innerHTML = "");
  }
}
_t = new WeakSet(), $e = function(n, o) {
  this.dispatchEvent(new CustomEvent(n, {
    detail: o
  }));
};
export {
  zn as default
};
