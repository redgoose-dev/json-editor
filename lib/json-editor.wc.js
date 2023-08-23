var Be = Object.defineProperty;
var $e = (t, e, o) => e in t ? Be(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var Y = (t, e, o) => ($e(t, typeof e != "symbol" ? e + "" : e, o), o), St = (t, e, o) => {
  if (!e.has(t))
    throw TypeError("Cannot " + o);
};
var b = (t, e, o) => (St(t, e, "read from private field"), o ? o.call(t) : e.get(t)), x = (t, e, o) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, o);
}, B = (t, e, o, n) => (St(t, e, "write to private field"), n ? n.call(t, o) : e.set(t, o), o);
var h = (t, e, o) => (St(t, e, "access private method"), o);
const L = document, pt = window, ie = L.documentElement, P = L.createElement.bind(L), re = P("div"), Tt = P("table"), Me = P("tbody"), Gt = P("tr"), { isArray: Et, prototype: se } = Array, { concat: ze, filter: It, indexOf: ae, map: ce, push: He, slice: le, some: Ut, splice: Ie } = se, Ue = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Pe = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, De = /<.+>/, Ve = /^\w+$/;
function Pt(t, e) {
  const o = Je(e);
  return !t || !o && !U(e) && !v(e) ? [] : !o && Pe.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !o && Ve.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class At {
  constructor(e, o) {
    if (!e)
      return;
    if ($t(e))
      return e;
    let n = e;
    if (j(e)) {
      const i = o || L;
      if (n = Ue.test(e) && U(i) ? i.getElementById(e.slice(1).replace(/\\/g, "")) : De.test(e) ? he(e) : $t(i) ? i.find(e) : j(i) ? s(i).find(e) : Pt(e, i), !n)
        return;
    } else if (D(e))
      return this.ready(e);
    (n.nodeType || n === pt) && (n = [n]), this.length = n.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = n[i];
  }
  init(e, o) {
    return new At(e, o);
  }
}
const a = At.prototype, s = a.init;
s.fn = s.prototype = a;
a.length = 0;
a.splice = Ie;
typeof Symbol == "function" && (a[Symbol.iterator] = se[Symbol.iterator]);
function $t(t) {
  return t instanceof At;
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
function v(t) {
  return !!t && t.nodeType === 1;
}
function Ye(t) {
  return !!t && t.nodeType === 3;
}
function Fe(t) {
  return typeof t == "boolean";
}
function D(t) {
  return typeof t == "function";
}
function j(t) {
  return typeof t == "string";
}
function k(t) {
  return t === void 0;
}
function st(t) {
  return t === null;
}
function de(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function Dt(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
s.isWindow = et;
s.isFunction = D;
s.isArray = Et;
s.isNumeric = de;
s.isPlainObject = Dt;
function w(t, e, o) {
  if (o) {
    let n = t.length;
    for (; n--; )
      if (e.call(t[n], n, t[n]) === !1)
        return t;
  } else if (Dt(t)) {
    const n = Object.keys(t);
    for (let i = 0, r = n.length; i < r; i++) {
      const l = n[i];
      if (e.call(t[l], l, t[l]) === !1)
        return t;
    }
  } else
    for (let n = 0, i = t.length; n < i; n++)
      if (e.call(t[n], n, t[n]) === !1)
        return t;
  return t;
}
s.each = w;
a.each = function(t) {
  return w(this, t);
};
a.empty = function() {
  return this.each((t, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function bt(...t) {
  const e = Fe(t[0]) ? t.shift() : !1, o = t.shift(), n = t.length;
  if (!o)
    return {};
  if (!n)
    return bt(e, s, o);
  for (let i = 0; i < n; i++) {
    const r = t[i];
    for (const l in r)
      e && (Et(r[l]) || Dt(r[l])) ? ((!o[l] || o[l].constructor !== r[l].constructor) && (o[l] = new r[l].constructor()), bt(e, o[l], r[l])) : o[l] = r[l];
  }
  return o;
}
s.extend = bt;
a.extend = function(t) {
  return bt(a, t);
};
const Ze = /\S+/g;
function Rt(t) {
  return j(t) ? t.match(Ze) || [] : [];
}
a.toggleClass = function(t, e) {
  const o = Rt(t), n = !k(e);
  return this.each((i, r) => {
    v(r) && w(o, (l, c) => {
      n ? e ? r.classList.add(c) : r.classList.remove(c) : r.classList.toggle(c);
    });
  });
};
a.addClass = function(t) {
  return this.toggleClass(t, !0);
};
a.removeAttr = function(t) {
  const e = Rt(t);
  return this.each((o, n) => {
    v(n) && w(e, (i, r) => {
      n.removeAttribute(r);
    });
  });
};
function We(t, e) {
  if (t) {
    if (j(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !v(this[0]))
          return;
        const o = this[0].getAttribute(t);
        return st(o) ? void 0 : o;
      }
      return k(e) ? this : st(e) ? this.removeAttr(t) : this.each((o, n) => {
        v(n) && n.setAttribute(t, e);
      });
    }
    for (const o in t)
      this.attr(o, t[o]);
    return this;
  }
}
a.attr = We;
a.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
a.hasClass = function(t) {
  return !!t && Ut.call(this, (e) => v(e) && e.classList.contains(t));
};
a.get = function(t) {
  return k(t) ? le.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
};
a.eq = function(t) {
  return s(this.get(t));
};
a.first = function() {
  return this.eq(0);
};
a.last = function() {
  return this.eq(-1);
};
function Ge(t) {
  return k(t) ? this.get().map((e) => v(e) || Ye(e) ? e.textContent : "").join("") : this.each((e, o) => {
    v(o) && (o.textContent = t);
  });
}
a.text = Ge;
function S(t, e, o) {
  if (!v(t))
    return;
  const n = pt.getComputedStyle(t, null);
  return o ? n.getPropertyValue(e) || void 0 : n[e] || t.style[e];
}
function A(t, e) {
  return parseInt(S(t, e), 10) || 0;
}
function Kt(t, e) {
  return A(t, `border${e ? "Left" : "Top"}Width`) + A(t, `padding${e ? "Left" : "Top"}`) + A(t, `padding${e ? "Right" : "Bottom"}`) + A(t, `border${e ? "Right" : "Bottom"}Width`);
}
const Ot = {};
function Ke(t) {
  if (Ot[t])
    return Ot[t];
  const e = P(t);
  L.body.insertBefore(e, null);
  const o = S(e, "display");
  return L.body.removeChild(e), Ot[t] = o !== "none" ? o : "block";
}
function qt(t) {
  return S(t, "display") === "none";
}
function ue(t, e) {
  const o = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!o && !!e && o.call(t, e);
}
function Lt(t) {
  return j(t) ? (e, o) => ue(o, t) : D(t) ? t : $t(t) ? (e, o) => t.is(o) : t ? (e, o) => o === t : () => !1;
}
a.filter = function(t) {
  const e = Lt(t);
  return s(It.call(this, (o, n) => e.call(o, n, o)));
};
function $(t, e) {
  return e ? t.filter(e) : t;
}
a.detach = function(t) {
  return $(this, t).each((e, o) => {
    o.parentNode && o.parentNode.removeChild(o);
  }), this;
};
const qe = /^\s*<(\w+)[^>]*>/, Xe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Xt = {
  "*": re,
  tr: Me,
  td: Gt,
  th: Gt,
  thead: Tt,
  tbody: Tt,
  tfoot: Tt
};
function he(t) {
  if (!j(t))
    return [];
  if (Xe.test(t))
    return [P(RegExp.$1)];
  const e = qe.test(t) && RegExp.$1, o = Xt[e] || Xt["*"];
  return o.innerHTML = t, s(o.childNodes).detach().get();
}
s.parseHTML = he;
a.has = function(t) {
  const e = j(t) ? (o, n) => Pt(t, n).length : (o, n) => n.contains(t);
  return this.filter(e);
};
a.not = function(t) {
  const e = Lt(t);
  return this.filter((o, n) => (!j(t) || v(n)) && !e.call(n, o, n));
};
function T(t, e, o, n) {
  const i = [], r = D(e), l = n && Lt(n);
  for (let c = 0, f = t.length; c < f; c++)
    if (r) {
      const d = e(t[c]);
      d.length && He.apply(i, d);
    } else {
      let d = t[c][e];
      for (; d != null && !(n && l(-1, d)); )
        i.push(d), d = o ? d[e] : null;
    }
  return i;
}
function fe(t) {
  return t.multiple && t.options ? T(It.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function Qe(t) {
  return arguments.length ? this.each((e, o) => {
    const n = o.multiple && o.options;
    if (n || we.test(o.type)) {
      const i = Et(t) ? ce.call(t, String) : st(t) ? [] : [String(t)];
      n ? w(o.options, (r, l) => {
        l.selected = i.indexOf(l.value) >= 0;
      }, !0) : o.checked = i.indexOf(o.value) >= 0;
    } else
      o.value = k(t) || st(t) ? "" : t;
  }) : this[0] && fe(this[0]);
}
a.val = Qe;
a.is = function(t) {
  const e = Lt(t);
  return Ut.call(this, (o, n) => e.call(o, n, o));
};
s.guid = 1;
function R(t) {
  return t.length > 1 ? It.call(t, (e, o, n) => ae.call(n, e) === o) : t;
}
s.unique = R;
a.add = function(t, e) {
  return s(R(this.get().concat(s(t, e).get())));
};
a.children = function(t) {
  return $(s(R(T(this, (e) => e.children))), t);
};
a.parent = function(t) {
  return $(s(R(T(this, "parentNode"))), t);
};
a.index = function(t) {
  const e = t ? s(t)[0] : this[0], o = t ? this : s(e).parent().children();
  return ae.call(o, e);
};
a.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const o = this.parent();
  return o.length ? o.closest(t) : e;
};
a.siblings = function(t) {
  return $(s(R(T(this, (e) => s(e).parent().children().not(e)))), t);
};
a.find = function(t) {
  return s(R(T(this, (e) => Pt(t, e))));
};
const to = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, eo = /^$|^module$|\/(java|ecma)script/i, oo = ["type", "src", "nonce", "noModule"];
function no(t, e) {
  const o = s(t);
  o.filter("script").add(o.find("script")).each((n, i) => {
    if (eo.test(i.type) && ie.contains(i)) {
      const r = P("script");
      r.text = i.textContent.replace(to, ""), w(oo, (l, c) => {
        i[c] && (r[c] = i[c]);
      }), e.head.insertBefore(r, null), e.head.removeChild(r);
    }
  });
}
function io(t, e, o, n, i) {
  n ? t.insertBefore(e, o ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, o ? t : t.nextSibling), i && no(e, t.ownerDocument);
}
function M(t, e, o, n, i, r, l, c) {
  return w(t, (f, d) => {
    w(s(d), (p, _) => {
      w(s(e), (N, m) => {
        const O = o ? _ : m, y = o ? m : _, V = o ? p : N;
        io(O, V ? y.cloneNode(!0) : y, n, i, !V);
      }, c);
    }, l);
  }, r), e;
}
a.after = function() {
  return M(arguments, this, !1, !1, !1, !0, !0);
};
a.append = function() {
  return M(arguments, this, !1, !1, !0);
};
function ro(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (k(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((o, n) => {
    v(n) && (e ? s(n).empty().append(t) : n.innerHTML = t);
  });
}
a.html = ro;
a.appendTo = function(t) {
  return M(arguments, this, !0, !1, !0);
};
a.wrapInner = function(t) {
  return this.each((e, o) => {
    const n = s(o), i = n.contents();
    i.length ? i.wrapAll(t) : n.append(t);
  });
};
a.before = function() {
  return M(arguments, this, !1, !0);
};
a.wrapAll = function(t) {
  let e = s(t), o = e[0];
  for (; o.children.length; )
    o = o.firstElementChild;
  return this.first().before(e), this.appendTo(o);
};
a.wrap = function(t) {
  return this.each((e, o) => {
    const n = s(t)[0];
    s(o).wrapAll(e ? n.cloneNode(!0) : n);
  });
};
a.insertAfter = function(t) {
  return M(arguments, this, !0, !1, !1, !1, !1, !0);
};
a.insertBefore = function(t) {
  return M(arguments, this, !0, !0);
};
a.prepend = function() {
  return M(arguments, this, !1, !0, !0, !0, !0);
};
a.prependTo = function(t) {
  return M(arguments, this, !0, !0, !0, !1, !1, !0);
};
a.contents = function() {
  return s(R(T(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
a.next = function(t, e, o) {
  return $(s(R(T(this, "nextElementSibling", e, o))), t);
};
a.nextAll = function(t) {
  return this.next(t, !0);
};
a.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
a.parents = function(t, e) {
  return $(s(R(T(this, "parentElement", !0, e))), t);
};
a.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
a.prev = function(t, e, o) {
  return $(s(R(T(this, "previousElementSibling", e, o))), t);
};
a.prevAll = function(t) {
  return this.prev(t, !0);
};
a.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
a.map = function(t) {
  return s(ze.apply([], ce.call(this, (e, o) => t.call(e, o, e))));
};
a.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
a.offsetParent = function() {
  return this.map((t, e) => {
    let o = e.offsetParent;
    for (; o && S(o, "position") === "static"; )
      o = o.offsetParent;
    return o || ie;
  });
};
a.slice = function(t, e) {
  return s(le.call(this, t, e));
};
const so = /-([a-z])/g;
function Vt(t) {
  return t.replace(so, (e, o) => o.toUpperCase());
}
a.ready = function(t) {
  const e = () => setTimeout(t, 0, s);
  return L.readyState !== "loading" ? e() : L.addEventListener("DOMContentLoaded", e), this;
};
a.unwrap = function() {
  return this.parent().each((t, e) => {
    if (e.tagName === "BODY")
      return;
    const o = s(e);
    o.replaceWith(o.children());
  }), this;
};
a.offset = function() {
  const t = this[0];
  if (!t)
    return;
  const e = t.getBoundingClientRect();
  return {
    top: e.top + pt.pageYOffset,
    left: e.left + pt.pageXOffset
  };
};
a.position = function() {
  const t = this[0];
  if (!t)
    return;
  const e = S(t, "position") === "fixed", o = e ? t.getBoundingClientRect() : this.offset();
  if (!e) {
    const n = t.ownerDocument;
    let i = t.offsetParent || n.documentElement;
    for (; (i === n.body || i === n.documentElement) && S(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== t && v(i)) {
      const r = s(i).offset();
      o.top -= r.top + A(i, "borderTopWidth"), o.left -= r.left + A(i, "borderLeftWidth");
    }
  }
  return {
    top: o.top - A(t, "marginTop"),
    left: o.left - A(t, "marginLeft")
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
a.prop = function(t, e) {
  if (t) {
    if (j(t))
      return t = pe[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((o, n) => {
        n[t] = e;
      });
    for (const o in t)
      this.prop(o, t[o]);
    return this;
  }
};
a.removeProp = function(t) {
  return this.each((e, o) => {
    delete o[pe[t] || t];
  });
};
const ao = /^--/;
function Jt(t) {
  return ao.test(t);
}
const Bt = {}, { style: co } = re, lo = ["webkit", "moz", "ms"];
function uo(t, e = Jt(t)) {
  if (e)
    return t;
  if (!Bt[t]) {
    const o = Vt(t), n = `${o[0].toUpperCase()}${o.slice(1)}`, i = `${o} ${lo.join(`${n} `)}${n}`.split(" ");
    w(i, (r, l) => {
      if (l in co)
        return Bt[t] = l, !1;
    });
  }
  return Bt[t];
}
const ho = {
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
function be(t, e, o = Jt(t)) {
  return !o && !ho[t] && de(e) ? `${e}px` : e;
}
function fo(t, e) {
  if (j(t)) {
    const o = Jt(t);
    return t = uo(t, o), arguments.length < 2 ? this[0] && S(this[0], t, o) : t ? (e = be(t, e, o), this.each((n, i) => {
      v(i) && (o ? i.style.setProperty(t, e) : i.style[t] = e);
    })) : this;
  }
  for (const o in t)
    this.css(o, t[o]);
  return this;
}
a.css = fo;
function ge(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const po = /^\s+|\s+$/;
function Qt(t, e) {
  const o = t.dataset[e] || t.dataset[Vt(e)];
  return po.test(o) ? o : ge(JSON.parse, o);
}
function bo(t, e, o) {
  o = ge(JSON.stringify, o), t.dataset[Vt(e)] = o;
}
function go(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const o = {};
    for (const n in this[0].dataset)
      o[n] = Qt(this[0], n);
    return o;
  }
  if (j(t))
    return arguments.length < 2 ? this[0] && Qt(this[0], t) : k(e) ? this : this.each((o, n) => {
      bo(n, t, e);
    });
  for (const o in t)
    this.data(o, t[o]);
  return this;
}
a.data = go;
function ye(t, e) {
  const o = t.documentElement;
  return Math.max(t.body[`scroll${e}`], o[`scroll${e}`], t.body[`offset${e}`], o[`offset${e}`], o[`client${e}`]);
}
w([!0, !1], (t, e) => {
  w(["Width", "Height"], (o, n) => {
    const i = `${e ? "outer" : "inner"}${n}`;
    a[i] = function(r) {
      if (this[0])
        return et(this[0]) ? e ? this[0][`inner${n}`] : this[0].document.documentElement[`client${n}`] : U(this[0]) ? ye(this[0], n) : this[0][`${e ? "offset" : "client"}${n}`] + (r && e ? A(this[0], `margin${o ? "Top" : "Left"}`) + A(this[0], `margin${o ? "Bottom" : "Right"}`) : 0);
    };
  });
});
w(["Width", "Height"], (t, e) => {
  const o = e.toLowerCase();
  a[o] = function(n) {
    if (!this[0])
      return k(n) ? void 0 : this;
    if (!arguments.length)
      return et(this[0]) ? this[0].document.documentElement[`client${e}`] : U(this[0]) ? ye(this[0], e) : this[0].getBoundingClientRect()[o] - Kt(this[0], !t);
    const i = parseInt(n, 10);
    return this.each((r, l) => {
      if (!v(l))
        return;
      const c = S(l, "boxSizing");
      l.style[o] = be(o, i + (c === "border-box" ? Kt(l, !t) : 0));
    });
  };
});
const te = "___cd";
a.toggle = function(t) {
  return this.each((e, o) => {
    if (!v(o))
      return;
    const n = qt(o);
    (k(t) ? n : t) ? (o.style.display = o[te] || "", qt(o) && (o.style.display = Ke(o.tagName))) : n || (o[te] = S(o, "display"), o.style.display = "none");
  });
};
a.hide = function() {
  return this.toggle(!1);
};
a.show = function() {
  return this.toggle(!0);
};
const ee = "___ce", Yt = ".", Ft = { focus: "focusin", blur: "focusout" }, me = { mouseenter: "mouseover", mouseleave: "mouseout" }, yo = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Zt(t) {
  return me[t] || Ft[t] || t;
}
function Wt(t) {
  const e = t.split(Yt);
  return [e[0], e.slice(1).sort()];
}
a.trigger = function(t, e) {
  if (j(t)) {
    const [n, i] = Wt(t), r = Zt(n);
    if (!r)
      return this;
    const l = yo.test(r) ? "MouseEvents" : "HTMLEvents";
    t = L.createEvent(l), t.initEvent(r, !0, !0), t.namespace = i.join(Yt), t.___ot = n;
  }
  t.___td = e;
  const o = t.___ot in Ft;
  return this.each((n, i) => {
    o && D(i[t.___ot]) && (i[`___i${t.type}`] = !0, i[t.___ot](), i[`___i${t.type}`] = !1), i.dispatchEvent(t);
  });
};
function xe(t) {
  return t[ee] = t[ee] || {};
}
function mo(t, e, o, n, i) {
  const r = xe(t);
  r[e] = r[e] || [], r[e].push([o, n, i]), t.addEventListener(e, i);
}
function ve(t, e) {
  return !e || !Ut.call(e, (o) => t.indexOf(o) < 0);
}
function gt(t, e, o, n, i) {
  const r = xe(t);
  if (e)
    r[e] && (r[e] = r[e].filter(([l, c, f]) => {
      if (i && f.guid !== i.guid || !ve(l, o) || n && n !== c)
        return !0;
      t.removeEventListener(e, f);
    }));
  else
    for (e in r)
      gt(t, e, o, n, i);
}
a.off = function(t, e, o) {
  if (k(t))
    this.each((n, i) => {
      !v(i) && !U(i) && !et(i) || gt(i);
    });
  else if (j(t))
    D(e) && (o = e, e = ""), w(Rt(t), (n, i) => {
      const [r, l] = Wt(i), c = Zt(r);
      this.each((f, d) => {
        !v(d) && !U(d) && !et(d) || gt(d, c, l, e, o);
      });
    });
  else
    for (const n in t)
      this.off(n, t[n]);
  return this;
};
a.remove = function(t) {
  return $(this, t).detach().off(), this;
};
a.replaceWith = function(t) {
  return this.before(t).remove();
};
a.replaceAll = function(t) {
  return s(t).replaceWith(this), this;
};
function xo(t, e, o, n, i) {
  if (!j(t)) {
    for (const r in t)
      this.on(r, e, o, t[r], i);
    return this;
  }
  return j(e) || (k(e) || st(e) ? e = "" : k(o) ? (o = e, e = "") : (n = o, o = e, e = "")), D(n) || (n = o, o = void 0), n ? (w(Rt(t), (r, l) => {
    const [c, f] = Wt(l), d = Zt(c), p = c in me, _ = c in Ft;
    d && this.each((N, m) => {
      if (!v(m) && !U(m) && !et(m))
        return;
      const O = function(y) {
        if (y.target[`___i${y.type}`])
          return y.stopImmediatePropagation();
        if (y.namespace && !ve(f, y.namespace.split(Yt)) || !e && (_ && (y.target !== m || y.___ot === d) || p && y.relatedTarget && m.contains(y.relatedTarget)))
          return;
        let V = m;
        if (e) {
          let J = y.target;
          for (; !ue(J, e); )
            if (J === m || (J = J.parentNode, !J))
              return;
          V = J;
        }
        Object.defineProperty(y, "currentTarget", {
          configurable: !0,
          get() {
            return V;
          }
        }), Object.defineProperty(y, "delegateTarget", {
          configurable: !0,
          get() {
            return m;
          }
        }), Object.defineProperty(y, "data", {
          configurable: !0,
          get() {
            return o;
          }
        });
        const Oe = n.call(V, y, y.___td);
        i && gt(m, d, f, e, O), Oe === !1 && (y.preventDefault(), y.stopPropagation());
      };
      O.guid = n.guid = n.guid || s.guid++, mo(m, d, f, e, O);
    });
  }), this) : this;
}
a.on = xo;
function vo(t, e, o, n) {
  return this.on(t, e, o, n, !0);
}
a.one = vo;
const wo = /\r?\n/g;
function jo(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(wo, `\r
`))}`;
}
const Co = /file|reset|submit|button|image/i, we = /radio|checkbox/i;
a.serialize = function() {
  let t = "";
  return this.each((e, o) => {
    w(o.elements || [o], (n, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || Co.test(i.type) || we.test(i.type) && !i.checked)
        return;
      const r = fe(i);
      if (!k(r)) {
        const l = Et(r) ? r : [r];
        w(l, (c, f) => {
          t += jo(i.name, f);
        });
      }
    });
  }), t.slice(1);
};
const ko = {
  live: !1,
  // live update
  theme: "system"
  // system,light,dark
}, _o = {
  open: !0,
  callback: void 0
}, u = {
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
}, ot = {
  START: "drag-over-start",
  END: "drag-over-end",
  ALL: "drag-over-start drag-over-end"
}, No = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12L10 8L6 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', Eo = '<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-90, 10, 10)"><path d="M7 9L10 12L13 9" fill="currentColor"/><path d="M7 9L10 12L13 9H7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>', Ao = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', je = {
  object: '<svg viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-object"><g transform="translate(0 1)"><path d="M2.296 5.166C2.296 7.238 3.78 8.162 5.166 8.162C6.538 8.162 8.022 7.238 8.022 5.166C8.022 3.094 6.538 2.156 5.166 2.156C3.78 2.156 2.296 3.094 2.296 5.166ZM0 5.18C0 2.03 2.366 0 5.166 0C7.952 0 10.318 2.03 10.318 5.18C10.318 8.316 7.952 10.346 5.166 10.346C2.366 10.346 0 8.316 0 5.18Z" fill="currentColor"/></g></svg>',
  array: '<svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-array"><path d="M7.728 9.926L6.902 7.658H2.87L2.044 9.926H0L3.808 0H6.048L9.828 9.926H7.728ZM4.886 2.142L3.514 5.894H6.258L4.886 2.142Z" fill="currentColor"/></svg>',
  string: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-string"><g transform="translate(0 1)"><path d="M7.39203 2.576L5.65603 3.108C5.55803 2.562 5.11003 1.708 3.85003 1.708C2.91203 1.708 2.29603 2.31 2.29603 2.968C2.29603 3.514 2.64603 3.948 3.37403 4.088L4.76003 4.354C6.56603 4.704 7.53203 5.88 7.53203 7.28C7.53203 8.806 6.25803 10.346 3.94803 10.346C1.31603 10.346 0.154031 8.652 3.05176e-05 7.238L1.79203 6.762C1.87603 7.742 2.56203 8.624 3.96203 8.624C4.99803 8.624 5.57203 8.106 5.57203 7.406C5.57203 6.832 5.13803 6.384 4.36803 6.23L2.98203 5.95C1.40003 5.628 0.378031 4.606 0.378031 3.108C0.378031 1.344 1.96003 0 3.83603 0C6.24403 0 7.16803 1.456 7.39203 2.576Z" fill="currentColor"/></g></svg>',
  number: '<svg viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-number"><path d="M8.47003 9.926H6.44003L1.93203 2.884V9.926H3.05176e-05V0H2.40803L6.53803 6.566V0H8.47003V9.926Z" fill="currentColor"/></svg>',
  boolean: '<svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-boolean"><path d="M3.05176e-05 0H3.57003C5.50203 0 6.59403 1.134 6.59403 2.674C6.59403 3.696 5.97803 4.522 5.15203 4.802C6.11803 5.04 6.90203 5.922 6.90203 7.154C6.90203 8.764 5.69803 9.926 3.83603 9.926H3.05176e-05V0ZM1.90403 4.102H3.27603C4.15803 4.102 4.69003 3.612 4.69003 2.856C4.69003 2.1 4.20003 1.624 3.26203 1.624H1.90403V4.102ZM1.90403 8.316H3.47203C4.41003 8.316 4.97003 7.826 4.97003 7.028C4.97003 6.244 4.46603 5.698 3.50003 5.698H1.90403V8.316Z" fill="currentColor"/></svg>',
  null: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-null"><g transform="translate(0 1.5)"><path d="M3.808 10.15C1.694 10.15 0 8.848 0 6.412V0H1.932V6.272C1.932 7.574 2.66 8.26 3.808 8.26C4.984 8.26 5.698 7.574 5.698 6.272V0H7.63V6.412C7.63 8.848 5.936 10.15 3.808 10.15Z" fill="currentColor"/></g></svg>'
}, Ro = [
  {
    key: "change-type",
    label: "Change type",
    children: [
      { key: u.OBJECT, label: "Object" },
      { key: u.ARRAY, label: "Array" },
      { key: u.STRING, label: "String" },
      { key: u.NUMBER, label: "Number" },
      { key: u.BOOLEAN, label: "Boolean" },
      { key: u.NULL, label: "Null" }
    ]
  },
  {
    key: "insert",
    label: "Insert",
    children: [
      { key: u.OBJECT, label: "Object" },
      { key: u.ARRAY, label: "Array" },
      { key: u.STRING, label: "String" },
      { key: u.NUMBER, label: "Number" },
      { key: u.BOOLEAN, label: "Boolean" },
      { key: u.NULL, label: "Null" }
    ]
  },
  { key: "duplicate", label: "Duplicate" },
  { key: "remove", label: "Remove" }
];
var W, G, yt, Ce, mt, ke, xt, _e;
class Lo {
  constructor(e, o, n = !1) {
    x(this, yt);
    x(this, mt);
    x(this, xt);
    x(this, W, void 0);
    Y(this, "el", {
      node: void 0,
      type: void 0,
      dialog: void 0
    });
    x(this, G, void 0);
    B(this, W, e), this.el.node = s(o), B(this, G, String(this.el.node.data("type"))), this.el.type = this.el.node.find("& > .node__body > .type"), this.el.type.addClass("open"), this.el.dialog = h(this, yt, Ce).call(this, Ro, b(this, G), n), this.el.dialog.on("click", (i) => i.stopPropagation()), this.el.dialog.find("button").on("click", (i) => h(this, mt, ke).call(this, i)), b(this, W).customContext(this.el.dialog.get(0), {
      node: this.el.node.get(0),
      type: b(this, G),
      isRoot: n
    }, s), this.el.type.append(this.el.dialog), s("body").on(Z.CLICK, (i) => this.close(i)), s(window).on(Z.KEYUP, (i) => h(this, xt, _e).call(this, i));
  }
  close() {
    this.el.type.removeClass("open"), this.el.dialog.remove(), s("body").off(Z.CLICK), s(window).off(Z.KEYUP), delete b(this, W).context;
  }
}
W = new WeakMap(), G = new WeakMap(), yt = new WeakSet(), Ce = function(e, o, n = !1) {
  function i(c, f) {
    let d = "";
    const { key: p, label: _, children: N } = c;
    if (n)
      switch (p) {
        case u.STRING:
        case u.NUMBER:
        case u.BOOLEAN:
        case u.NULL:
          if (f === "change-type")
            return "";
          break;
        case "duplicate":
        case "remove":
          return "";
      }
    let m = "", O = "", y = "";
    switch (p) {
      case "change-type":
        m = ' class="dropdown"', y = " disabled";
        break;
      case "insert":
        if ([u.STRING, u.NUMBER, u.BOOLEAN, u.NULL].indexOf(o) > -1)
          return "";
        m = ' class="dropdown"', y = " disabled";
        break;
      case "duplicate":
        m = ' class="duplicate"', y = ' data-mode="duplicate"';
        break;
      case "remove":
        m = ' class="remove"', y = ' data-mode="remove"';
        break;
      case u.OBJECT:
      case u.ARRAY:
      case u.STRING:
      case u.NUMBER:
      case u.BOOLEAN:
      case u.NULL:
        m = ' class="type"', O = `<i class="type-icon type-icon--${p}">${je[p]}</i>`, y = ` data-mode="${f}" data-type="${p}"`, f === "change-type" && p === o && (y = " disabled");
        break;
    }
    return d += `<li${m}>`, d += `<button type="button"${y}>`, d += O, d += `<em class="label">${_}</em>`, (p === "change-type" || p === "insert") && (d += `<span class="arrow">${No}</span>`), d += "</button>", (N == null ? void 0 : N.length) > 0 && (d += '<div class="children">', d += r(N, p), d += "</div>"), d += "</li>", d;
  }
  function r(c, f = void 0) {
    let d = "<ol>";
    for (let p in c)
      d += i(c[p], f);
    return d += "</ol>", d;
  }
  let l = `<nav class="context${n ? " is-root" : ""}">`;
  return l += r(e), l += "</nav>", s(l);
}, mt = new WeakSet(), ke = function(e) {
  const o = s(e.currentTarget), n = o.data("mode");
  let i = String(o.data("type"));
  i = i === "undefined" ? "" : i, this.close(), this.selectItem && typeof this.selectItem == "function" && this.selectItem(this.el.node, n, i);
}, xt = new WeakSet(), _e = function(e) {
  e.code === "Escape" && this.close();
};
function oe(t) {
  return t == null ? "null" : Array.isArray(t) ? "array" : typeof t == "string" ? "string" : typeof t == "number" ? "number" : typeof t == "boolean" ? "boolean" : "object";
}
function So(t) {
  try {
    return typeof t == "string" ? JSON.parse(t) : Array.isArray(t) ? Object.assign([], t) : s.isPlainObject(t) ? Object.assign({}, t) : {};
  } catch (e) {
    console.error("error", e.message);
  }
}
function To(t) {
  return Array.isArray(t) ? t.length : s.isPlainObject(t) ? Object.keys(t).length : 0;
}
function ne(t) {
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
var g, K, vt, Ne, at, Mt, q, dt, wt, Ee, jt, Ae, X, ut, z, nt, ct, zt, C, E, lt, Ht, H, it, I, rt, Q, ht, tt, ft, Ct, Re, kt, Le, _t, Se;
class Oo {
  constructor(e, o = {}) {
    x(this, vt);
    x(this, at);
    x(this, q);
    x(this, wt);
    x(this, jt);
    x(this, X);
    x(this, z);
    x(this, ct);
    x(this, C);
    x(this, lt);
    x(this, H);
    /**
     * NODE EVENTS
     */
    x(this, I);
    x(this, Q);
    x(this, tt);
    x(this, Ct);
    x(this, kt);
    x(this, _t);
    Y(this, "$");
    Y(this, "el", { wrap: null, body: null, tree: null });
    Y(this, "options");
    Y(this, "context");
    x(this, g, void 0);
    x(this, K, !1);
    this.$ = s, this.el.wrap = s(e), this.el.body = s('<div class="json-editor"></div>'), this.options = new Proxy(Object.assign({}, ko, o), {
      get: (n, i) => n[i],
      set: h(this, vt, Ne).bind(this)
    }), this.el.wrap.append(this.el.body), h(this, at, Mt).call(this, this.options.theme), this.replace({}, !1);
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
  addNode(e, o, n = {}, i = !0, r = !0) {
    n = { ..._o, ...n };
    const { open: l, callback: c } = n;
    e = s(e);
    const f = o.type === void 0 ? oe(o.value) : o.type, d = h(this, q, dt).call(this, f, !1);
    h(this, X, ut).call(this, d, { ...o, open: l, type: f }), h(this, I, rt).call(this, d), e.find("& > .node__children > ul").append(d), r && h(this, H, it).call(this, e), (f === u.ARRAY || f === u.OBJECT) && c && typeof c == "function" && c(d.get(0), o.value), i && h(this, C, E).call(this);
  }
  /**
   * remove node
   * @param {HTMLElement} $node
   * @param {boolean} useUpdate
   */
  removeNode(e, o = !0) {
    e = s(e);
    const n = e.parent().closest(".node");
    e.remove(), h(this, H, it).call(this, n), o && h(this, C, E).call(this);
  }
  /**
   * change type
   * @param {HTMLElement} node
   * @param {'object'|'array'|'string'|'number'|'boolean'|'null'} type
   * @param {boolean} useUpdate
   */
  changeType(e, o, n = !0) {
    const i = s(e), r = {
      key: i.find("& > .node__body .key").text(),
      value: h(this, ct, zt).call(this, i),
      type: o,
      open: i.hasClass("open")
    }, l = i.find("& > .node__children > .tree").html(), c = i.hasClass("root");
    i.empty(), i.html(h(this, q, dt).call(this, o, c).html()), l && i.find("& > .node__children > .tree").html(l), h(this, X, ut).call(this, i, r), h(this, I, rt).call(this, i), i.attr("data-type", o), n && h(this, C, E).call(this);
  }
  /**
   * duplicate
   * @param {HTMLElement} $target
   * @param {boolean} useUpdate
   */
  duplicate(e, o = !0) {
    e = s(e);
    const n = s(e.get(0).outerHTML);
    h(this, I, rt).call(this, n), e.after(n), h(this, H, it).call(this, e.parent().closest(".node")), o && h(this, C, E).call(this);
  }
  /**
   * fold node
   * @param {HTMLElement} $node
   * @param {boolean} sw
   */
  fold(e, o) {
    e = s(e), o === void 0 ? e.toggleClass("open") : o === !0 ? e.addClass("open") : e.removeClass("open");
  }
  clear() {
    this.el.tree && (this.el.body.empty(), this.replace({}, !1), h(this, C, E).call(this));
  }
  destroy() {
    s(window).off(F.END).off(Z.CLICK).off(Z.KEYUP), this.el.wrap.empty();
  }
  /**
   * replace
   * @param {object|array} data
   * @param {boolean} useUpdate
   */
  replace(e, o = !0) {
    this.el.body.empty(), e = So(e);
    const n = h(this, wt, Ee).call(this, e);
    this.import(n, e, !1, !1), o && h(this, C, E).call(this);
  }
  /**
   * import data
   * @param {HTMLElement} $target
   * @param {object|array} data
   * @param {boolean} useUpdate
   * @param {boolean} useUpdateCount
   */
  import(e, o, n = !0, i = !0) {
    e = s(e), s.each(o, (r, l) => {
      const c = { key: r, value: l }, f = {
        open: !1,
        callback: (d, p) => this.import(d, p, !1, !1)
      };
      this.addNode(e, c, f, !1, !1);
    }), i && h(this, H, it).call(this, e), n && h(this, C, E).call(this);
  }
  /**
   * export
   * @param {HTMLElement} $node
   * @param {boolean} json
   * @param {number|boolean} space (number: space count, true: tab, false: 0)
   * @return {array|object}
   */
  export(e = void 0, o, n = 2) {
    let i = h(this, lt, Ht).call(this, e);
    if (o) {
      let r = 2;
      return n === !0 ? r = "	" : typeof n === u.NUMBER && (r = n), JSON.stringify(i, null, r);
    } else
      return i;
  }
  /**
   * preview
   * @param {array|object} src
   */
  preview(e) {
  }
  customContext(e, { node: o, type: n, isRoot: i }, r) {
  }
}
g = new WeakMap(), K = new WeakMap(), vt = new WeakSet(), Ne = function(e, o, n) {
  switch (e[o] = n, o) {
    case "theme":
      h(this, at, Mt).call(this, n);
      break;
  }
  return !0;
}, at = new WeakSet(), Mt = function(e) {
  e = ["system", "light", "dark"].indexOf(e) > -1 ? e : "system", this.el.body.attr("data-theme", e);
}, q = new WeakSet(), dt = function(e, o = !1) {
  let n = `<li data-type="${e}" class="node${o ? " root" : ""}">`;
  return n += '<div class="node__body">', o || (n += `<div class="sort">${Ao}</div>`), n += '<div class="type"><button type="button"></button></div>', (e === u.OBJECT || e === u.ARRAY) && (n += `<button type="button" class="fold">${Eo}</button>`), o || (n += '<div class="key"></div>'), n += '<em class="count"></em>', o || (n += '<div class="value"></div>'), n += "</div>", n += '<div class="node__children"><ul class="tree"/></div>', n += "</li>", s(n);
}, wt = new WeakSet(), Ee = function(e) {
  const o = oe(e), n = h(this, q, dt).call(this, o, !0);
  return h(this, X, ut).call(this, n, {
    key: void 0,
    value: e,
    type: o,
    open: !0
  }), h(this, I, rt).call(this, n), this.el.tree = s("<ul/>"), this.el.tree.append(n), this.el.body.append(this.el.tree), n;
}, jt = new WeakSet(), Ae = function(e, o, n) {
  switch (o) {
    case "change-type":
      this.changeType(e, n);
      break;
    case "insert":
      this.fold(e, !0), this.addNode(e, { key: "", value: "", type: n });
      break;
    case "duplicate":
      this.duplicate(e);
      break;
    case "remove":
      this.removeNode(e);
      break;
  }
}, X = new WeakSet(), ut = function(e, o) {
  const { key: n, value: i, type: r, open: l } = o, c = e.hasClass("root"), f = e.children(".node__body");
  if (f.find(".type > button").html(`<i class="type-icon type-icon--${r}">${je[r]}</i>`), (r === u.OBJECT || r === u.ARRAY) && this.fold(e, l), !c) {
    f.find(".key").html(`<div class="label-field" contenteditable="true" data-placeholder="empty">${n}</div>`);
    const d = f.find(".value");
    let p;
    switch (r) {
      case u.STRING:
        d.html(`<div contenteditable="true" data-placeholder="empty" class="label-field type-string">${String(i)}</div>`);
        break;
      case u.NUMBER:
        p = Number(i), isNaN(p) && (p = 0), d.html(`<input type="number" value="${p}" placeholder="0" class="label-field type-number"/>`);
        break;
      case u.BOOLEAN:
        p = i === "false" ? !1 : !!i, d.html(`<button type="button" data-value="${p}" class="label-switch type-boolean"><span><i>${p.toString().toUpperCase()}</i></span></button>`);
        break;
      case u.NULL:
        d.html('<em class="label-null type-null">NULL</em>');
        break;
    }
  }
  if (r === u.OBJECT || r === u.ARRAY) {
    const d = To(i);
    isNaN(d) || f.find(".count").text(d);
  }
}, z = new WeakSet(), nt = function(e) {
  return String(e.data("type"));
}, ct = new WeakSet(), zt = function(e) {
  const o = h(this, z, nt).call(this, e), n = e.find("& > .node__body > .value");
  switch (o) {
    case u.OBJECT:
    case u.ARRAY:
      return "";
    case u.STRING:
      return n.children(".type-string").get(0).innerText || "";
    case u.NUMBER:
      return Number(n.children(".type-number").val());
    case u.BOOLEAN:
      return n.children(".type-boolean").data("value");
    case u.NULL:
      return null;
  }
}, C = new WeakSet(), E = function() {
  this.options.live && this.preview && typeof this.preview == "function" && this.preview(h(this, lt, Ht).call(this));
}, lt = new WeakSet(), Ht = function(e) {
  const o = (r, l) => {
    let c = l === u.ARRAY ? [] : {};
    return r.find("& > .node__children > ul > li").each((d, p) => {
      if (!(l === u.ARRAY || l === u.OBJECT))
        return !0;
      p = s(p);
      const _ = h(this, z, nt).call(this, p);
      switch (_) {
        case u.OBJECT:
        case u.ARRAY:
          switch (l) {
            case u.ARRAY:
              c.push(o(p, _));
              break;
            case u.OBJECT:
              const m = p.find("& > .node__body > .key").text();
              m && (c[m] = o(p, _));
              break;
          }
          break;
        case u.STRING:
        case u.NUMBER:
        case u.BOOLEAN:
        case u.NULL:
          const N = h(this, ct, zt).call(this, p);
          switch (l) {
            case u.ARRAY:
              c.push(N);
              break;
            case u.OBJECT:
              const m = p.find("& > .node__body > .key").text();
              m && (c[m] = N);
              break;
          }
          break;
      }
    }), c;
  };
  e = s(e);
  const n = (e == null ? void 0 : e.length) > 0 ? e : this.el.tree.children(".node"), i = h(this, z, nt).call(this, n);
  return [u.OBJECT, u.ARRAY].includes(i) ? o(n, i) : void 0;
}, H = new WeakSet(), it = function(e) {
  e = s(e);
  const o = h(this, z, nt).call(this, e);
  if (!(o === "object" || o === "array"))
    return;
  const n = e.find("& > .node__children > ul > li").length;
  isNaN(n) || e.find("& > .node__body > .count").text(n);
}, I = new WeakSet(), rt = function(e) {
  const o = e.find(".sort");
  o.length && o.on(F.START, h(this, Ct, Re).bind(this)), e.find(".type > button").on("click", async (c) => {
    const f = s(c.currentTarget);
    if (c.stopPropagation(), f.parent().hasClass("open"))
      this.context && this.context.close();
    else {
      this.context && this.context.close();
      const d = f.closest(".node").hasClass("root");
      this.context = new Lo(this, f.closest(".node"), d), this.context.selectItem = (p, _, N) => h(this, jt, Ae).call(this, p, _, N);
    }
  }), e.find(".fold").on("click", (c) => {
    const d = s(c.currentTarget).closest(".node");
    this.fold(d);
  });
  const n = e.find(".key > .label-field");
  n.length && n.on("keydown", (c) => {
    if (c.keyCode === 13 || ne(c))
      return c.preventDefault();
  }).on("input", (c) => h(this, Q, ht).call(this, c)).on("blur", (c) => h(this, tt, ft).call(this, c));
  const i = e.find(".value > .type-string");
  i.length && i.on("keydown", (c) => {
    if (ne(c))
      return c.preventDefault();
  }).on("input", (c) => h(this, Q, ht).call(this, c)).on("blur", (c) => h(this, tt, ft).call(this, c));
  const r = e.find(".value > .type-number");
  r.length && r.on("input", (c) => h(this, Q, ht).call(this, c)).on("blur", (c) => h(this, tt, ft).call(this, c));
  const l = e.find(".value > .type-boolean");
  l.length && l.on("click", (c) => {
    const f = s(c.currentTarget), d = !f.data("value");
    f.data("value", d).find("i").text(d.toString().toUpperCase()), h(this, C, E).call(this);
  });
}, Q = new WeakSet(), ht = function() {
  B(this, K, !0);
}, tt = new WeakSet(), ft = function() {
  b(this, K) && (h(this, C, E).call(this), B(this, K, !1));
}, Ct = new WeakSet(), Re = function(e) {
  if (B(this, g, {}), b(this, g).$node = s(e.currentTarget).closest(".node"), b(this, g).$area = b(this, g).$node.parent(), b(this, g).$nodes = b(this, g).$area.children(".node"), b(this, g).$nodes.length < 2) {
    B(this, g, void 0);
    return;
  }
  b(this, g).$nodes.on(F.MOVE, h(this, kt, Le).bind(this)), s(window).on(F.END, h(this, _t, Se).bind(this));
}, kt = new WeakSet(), Le = function(e) {
  let o;
  if (e.pointerType === "touch") {
    const { clientX: c, clientY: f } = e, d = document.elementFromPoint(c, f).closest(".node");
    if (!b(this, g).$nodes.get().includes(d))
      return;
    o = s(d);
  } else
    o = s(e.currentTarget);
  const n = o.children(".node__body");
  if (!(n.length > 0))
    return;
  const { y: i, height: r } = n.get(0).getBoundingClientRect(), l = r * 0.5 < e.y - i;
  if (b(this, g).activeNode || (this.el.body.addClass("dragging"), b(this, g).$area.addClass("drag-area"), b(this, g).$node.addClass("drag-select")), b(this, g).activeNode !== o.get(0))
    b(this, g).activeNode && s(b(this, g).activeNode).removeClass(ot.ALL), b(this, g).activeNode = o.get(0);
  else if (b(this, g).half === l)
    return;
  b(this, g).half = l, o.removeClass(ot.ALL).addClass(l ? ot.END : ot.START);
}, _t = new WeakSet(), Se = function() {
  this.el.body.removeClass("dragging"), b(this, g).$area.removeClass("drag-area"), b(this, g).$node.removeClass("drag-select"), b(this, g).$nodes.removeClass(ot.ALL), b(this, g).$nodes.off(F.MOVE), s(window).off(F.END), b(this, g).half ? b(this, g).$node.insertAfter(b(this, g).activeNode) : b(this, g).$node.insertBefore(b(this, g).activeNode), B(this, g, void 0), h(this, C, E).call(this);
};
const Bo = `.json-editor{--json-editor-font-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";--json-editor-font-eng: "Helvetica Neue", sans-serif;--json-editor-color-base: hsl(0 0% 13%);--json-editor-color-blur: hsl(0 0% 67%);--json-editor-color-object: hsl(168 73% 43%);--json-editor-color-array: hsl(191 75% 53%);--json-editor-color-string: hsl(5 87% 59%);--json-editor-color-number: hsl(33 89% 55%);--json-editor-color-boolean: hsl(45 89% 54%);--json-editor-color-null: hsl(0 0% 58%);--json-editor-color-active: hsla(0 0% 0% / 6%);--json-editor-color-focus: hsl(10, 95%, 54%);--json-editor-color-error: hsl(0 96% 52%);--json-editor-font-size: 13px;font-family:var(--json-editor-font-base);color:var(--json-editor-color-base);font-size:16px;line-height:1.15}.json-editor>ul{position:relative;margin:-4px 0;padding:0;list-style:none}.json-editor.dragging{cursor:move;-webkit-user-select:none;user-select:none}.json-editor.dragging *{cursor:move!important;-webkit-user-select:none!important;user-select:none!important}.json-editor[data-theme=dark]{--json-editor-color-base: hsl(0 0% 95%);--json-editor-color-blur: hsl(0 0% 72%);--json-editor-color-active: hsla(0 0% 100% / 15%);--json-editor-color-error: hsl(0, 100%, 60%);--json-editor-color-focus: hsl(161, 94%, 55%)}@media (prefers-color-scheme: dark){.json-editor[data-theme=system],.json-editor:not([data-theme]),.json-editor[data-theme=""]{--json-editor-color-base: hsl(0 0% 95%);--json-editor-color-blur: hsl(0 0% 72%);--json-editor-color-active: hsla(0 0% 100% / 15%);--json-editor-color-error: hsl(0, 100%, 60%);--json-editor-color-focus: hsl(161, 94%, 55%)}}.json-editor .type-icon{display:grid;width:var(--type-size, 24px);height:var(--type-size, 24px);place-content:center;box-sizing:border-box;border-radius:4px;background:var(--type-icon-color, #aaa)}.json-editor .type-icon svg{display:block;box-sizing:border-box;color:#fff;width:var(--type-icon-width)}.json-editor .type-icon--object{--type-icon-color: var(--json-editor-color-object);--type-icon-width: calc(var(--type-icon-size, 10px) + 1px)}.json-editor .type-icon--array{--type-icon-color: var(--json-editor-color-array);--type-icon-width: var(--type-icon-size, 10px)}.json-editor .type-icon--string{--type-icon-color: var(--json-editor-color-string);--type-icon-width: calc(var(--type-icon-size, 10px) - 2px)}.json-editor .type-icon--number{--type-icon-color: var(--json-editor-color-number);--type-icon-width: calc(var(--type-icon-size, 10px) - 1px)}.json-editor .type-icon--boolean{--type-icon-color: var(--json-editor-color-boolean);--type-icon-width: calc(var(--type-icon-size, 10px) - 3px)}.json-editor .type-icon--null{--type-icon-color: var(--json-editor-color-null);--type-icon-width: calc(var(--type-icon-size, 10px) - 2px)}.json-editor .label-field{margin:-4px 0;padding:4px 6px;min-width:var(--label-min-width, unset);min-height:24px;outline:none;font-size:var(--json-editor-font-size);color:var(--json-editor-color-base);line-height:1.42;box-sizing:border-box;border-radius:2px;background-color:#0000;box-shadow:0 0 0 .5px #0000;transition:background-color .16s ease-out,box-shadow .2s ease-out;cursor:text;word-break:break-all}.json-editor .label-field:hover,.json-editor .label-field:focus{background-color:var(--json-editor-color-active)}.json-editor .label-field:empty:before{content:attr(data-placeholder);color:var(--json-editor-color-blur)}.json-editor .label-field[type=number]{border:none;width:160px}.json-editor .label-field[type=number]::-webkit-outer-spin-button,.json-editor .label-field[type=number]::-webkit-inner-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none}.json-editor .label-null{display:block;padding:0 6px;color:var(--json-editor-color-blur);font-style:normal;letter-spacing:-.5px;-webkit-user-select:none;user-select:none;font-size:var(--json-editor-font-size)}.json-editor .label-switch{--switch-width: 36px;--switch-height: 18px;--switch-offset: 3px;--switch-speed: .1s;--switch-unit-size: calc(var(--switch-height) - (var(--switch-offset) * 2));display:block;margin:0 0 0 6px;padding:2px 0;background:none;border:none;font-size:0;cursor:pointer;-webkit-tap-highlight-color:transparent}.json-editor .label-switch span{display:block;position:relative;padding:var(--switch-offset);width:var(--switch-width);height:var(--switch-height);border-radius:calc(var(--switch-height) * .5);box-shadow:inset 0 0 0 1px var(--json-editor-color-blur);transition:box-shadow .16s ease-out;box-sizing:border-box}.json-editor .label-switch i{display:block;width:var(--switch-unit-size);height:var(--switch-unit-size);background-color:var(--switch-unit-color, var(--json-editor-color-blur));border-radius:var(--switch-unit-size);pointer-events:none;transform:translate(var(--switch-unit-x));transition:transform var(--switch-speed) ease-out,width var(--switch-speed) ease-out,background-color .24s ease-out}.json-editor .label-switch:active span{box-shadow:inset 0 0 0 1px var(--json-editor-color-active)}.json-editor .label-switch:active[data-value=false] i{width:calc(var(--switch-unit-size) + 6px)}.json-editor .label-switch:active[data-value=true] i{width:calc(var(--switch-unit-size) + 6px);transform:translate(calc(var(--switch-width) - var(--switch-offset) * 2 - var(--switch-unit-size) - 6px))}.json-editor .label-switch:focus-visible{outline:none}.json-editor .label-switch:focus-visible span{outline:2px solid var(--json-editor-color-focus);outline-offset:1px}.json-editor .label-switch[data-value=false]{--switch-unit-x: 0}.json-editor .label-switch[data-value=true]{--switch-unit-x: calc(var(--switch-width) - (var(--switch-offset) * 2) - var(--switch-unit-size));--switch-unit-color: var(--json-editor-color-focus)}.json-editor .node{position:relative;-webkit-user-select:none}.json-editor .node__body{position:relative;display:flex;align-items:center;box-sizing:border-box;padding:4px 0;transition:opacity .12s ease-out}.json-editor .node__body>.sort{display:block;box-sizing:border-box;cursor:move;margin:-4px 4px -4px 0;padding:4px 0;touch-action:none}.json-editor .node__body>.sort svg{display:block;width:24px;color:var(--json-editor-color-base)}.json-editor .node__body>.sort:active{opacity:.5}.json-editor .node__body>.type{position:relative}.json-editor .node__body>.type>button{display:block;margin:-2px;padding:2px;box-sizing:border-box;border:none;background:none;outline:none;cursor:pointer;transition:opacity .12s ease-out;border-radius:6px;-webkit-tap-highlight-color:transparent}.json-editor .node__body>.type>button:active{opacity:.5}.json-editor .node__body>.type>button:focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-1px}.json-editor .node__body>.type.open>button{opacity:.5}.json-editor .node__body>.fold{display:block;width:28px;height:28px;margin:-8px -8px -8px 0;padding:0;background:none;border:none;box-sizing:border-box;cursor:pointer;-webkit-tap-highlight-color:transparent}.json-editor .node__body>.fold:focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-6px}.json-editor .node__body>.fold:active{opacity:.5}.json-editor .node__body>.fold svg{display:block;margin:0 auto;width:20px;rotate:0deg;box-sizing:border-box;transition:rotate,.16s ease-out;color:var(--json-editor-color-base)}.json-editor .node__body>.key{margin-left:6px;--label-min-width: 48px}.json-editor .node__body>.count{display:block;margin:0;pointer-events:none;padding:0 0 0 8px;color:var(--json-editor-color-blur);font-style:normal;-webkit-user-select:none;user-select:none;font-size:13px;line-height:normal;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace}.json-editor .node__body>.value{position:relative;flex:1;display:flex;align-items:center;gap:0 6px;font-size:var(--json-editor-font-size);line-height:1.42;--label-min-width: 78px}.json-editor .node__body>.value:before{content:":"}.json-editor .node__children>.tree{--color-line: hsla(0 0% 72% / 100%);position:relative;display:none;margin:0;padding:0 0 0 26px;list-style:none;box-sizing:border-box}.json-editor .node__children>.tree:not(:empty):before{content:"";display:block;position:absolute;left:11px;top:6px;bottom:14px;width:4px;border-width:0 0 0 1px;border-style:dashed;border-color:var(--color-line)}.json-editor .node__children>.tree:not(:empty):after{content:"";display:block;position:absolute;left:9px;bottom:13px;width:5px;height:5px;background:var(--color-line);border-radius:50%}.json-editor .node.open>.node__body .fold svg{rotate:90deg}.json-editor .node.open>.node__children>.tree{display:grid}.json-editor .node.open>.node__children>.tree:empty{display:none}.json-editor .node[data-type=object]>.node__body .count:before{content:"{"}.json-editor .node[data-type=object]>.node__body .count:after{content:"}"}.json-editor .node[data-type=object]>.node__body .value{display:none}.json-editor .node[data-type=array]>.node__body .count:before{content:"["}.json-editor .node[data-type=array]>.node__body .count:after{content:"]"}.json-editor .node[data-type=array]>.node__body .value{display:none}.json-editor .node[data-type=array]>.node__children>.tree>.node>.node__body>.key{display:none}.json-editor .node[data-type=string]>.node__body .fold,.json-editor .node[data-type=number]>.node__body .fold,.json-editor .node[data-type=boolean]>.node__body .fold,.json-editor .node[data-type=null]>.node__body .fold{display:none}.json-editor .node[data-type=string]>.node__children>.tree,.json-editor .node[data-type=number]>.node__children>.tree,.json-editor .node[data-type=boolean]>.node__children>.tree,.json-editor .node[data-type=null]>.node__children>.tree{display:none}.json-editor .node:before,.json-editor .node:after{display:none;content:"";position:absolute;left:0;right:0;height:4px;background-color:var(--json-editor-color-focus);border-radius:4px}.json-editor .node:before{top:-2px}.json-editor .node:after{bottom:-2px}.json-editor .node.drag-over-start:before{display:block}.json-editor .node.drag-over-end:after{display:block}.json-editor.dragging .node:not(.root)>.node__body{opacity:.25}.json-editor.dragging .drag-area>.node>.node__body{opacity:unset}.json-editor .drag-select{background-color:#00000014}.json-editor[data-theme=dark] .node__children>.tree{--color-line: hsla(0 0% 36% / 100%)}.json-editor[data-theme=dark] .drag-select{background-color:#ffffff14}@media (prefers-color-scheme: dark){.json-editor[data-theme=system] .node__children>.tree,.json-editor:not([data-theme]) .node__children>.tree,.json-editor[data-theme=""] .node__children>.tree{--color-line: hsla(0 0% 36% / 100%)}.json-editor[data-theme=system] .drag-select,.json-editor:not([data-theme]) .drag-select,.json-editor[data-theme=""] .drag-select{background-color:#ffffff14}}.json-editor .context{--context-border-radius: 4px;--context-color-line: hsl(0 0% 88%);--context-color-item-active: hsl(0 0% 92%);--context-color-bg: hsl(0 0% 100%);--context-shadow: 0 4px 36px 0 hsla(0 0% 0% / 12%), 0 2px 12px 0 hsla(0 0% 0% / 20%), 0 0 0 1px hsla(0 0% 0% / 8%);position:absolute;top:-8px;right:-8px;z-index:2}.json-editor .context.is-root{left:28px}.json-editor .context ol{position:absolute;left:0;margin:0;padding:0;list-style:none;background:var(--context-color-line);border-radius:var(--context-border-radius);box-shadow:var(--context-shadow)}.json-editor .context li{position:relative}.json-editor .context li:not(:first-child){margin-top:1px}.json-editor .context li:first-child>button{border-top-left-radius:var(--context-border-radius);border-top-right-radius:var(--context-border-radius)}.json-editor .context li:last-child>button{border-bottom-left-radius:var(--context-border-radius);border-bottom-right-radius:var(--context-border-radius)}.json-editor .context li.type>button{grid-template-columns:auto 1fr;gap:8px}.json-editor .context li.type>button:disabled>*{opacity:.25}.json-editor .context li.dropdown:hover>button,.json-editor .context li.dropdown:focus-within>button{background-color:var(--context-color-item-active)}.json-editor .context li.dropdown:hover>.children,.json-editor .context li.dropdown:focus-within>.children{opacity:1;pointer-events:auto}.json-editor .context li.dropdown>button{grid-template-columns:1fr auto}.json-editor .context li.remove .label{color:var(--json-editor-color-error)}.json-editor .context button{display:grid;align-items:center;margin:0;padding:8px 12px;min-width:150px;text-align:left;box-sizing:border-box;background-color:var(--context-color-bg);border:none;cursor:pointer;border-radius:0;transition:background-color .12s ease-out;font-family:var(--json-editor-font-base);font-size:12px;letter-spacing:-.25px;outline:none;color:var(--json-editor-color-base);-webkit-tap-highlight-color:transparent}.json-editor .context button:hover,.json-editor .context button:active{background-color:var(--context-color-item-active)}.json-editor .context button:not(.parent):focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-2px}.json-editor .context button:disabled{cursor:default}.json-editor .context .label{display:block;font-style:normal;pointer-events:none;-webkit-user-select:none;user-select:none}.json-editor .context .type-icon{--type-size: 16px;--type-icon-size: 8px}.json-editor .context .arrow{display:block;margin:0 -4px 0 0;pointer-events:none}.json-editor .context .arrow svg{display:block;width:16px}.json-editor .context .children{position:absolute;top:-12px;right:4px;z-index:2;pointer-events:none;opacity:0;transition:opacity .24s ease-out}.json-editor .context .children ol{top:0;left:0}.json-editor[data-theme=dark] .context{--context-color-line: hsl(0 0% 0%);--context-color-bg: hsl(0 0% 16%);--context-color-item-active: hsl(0 0% 24%);--context-shadow: 0 4px 36px 0 hsla(0 0% 0% / 24%), 0 2px 8px 0 hsla(0 0% 0% / 32%), 0 0 0 1px hsla(0 0% 0% / 20%)}@media (prefers-color-scheme: dark){.json-editor[data-theme=system] .context,.json-editor:not([data-theme]) .context,.json-editor[data-theme=""] .context{--context-color-line: hsl(0 0% 0%);--context-color-bg: hsl(0 0% 16%);--context-color-item-active: hsl(0 0% 24%);--context-shadow: 0 4px 36px 0 hsla(0 0% 0% / 24%), 0 2px 8px 0 hsla(0 0% 0% / 32%), 0 0 0 1px hsla(0 0% 0% / 20%)}}
`;
var Nt, Te;
class Mo extends HTMLElement {
  constructor() {
    super();
    x(this, Nt);
    this.attachShadow({ mode: "open" });
    const o = document.createElement("template");
    o.innerHTML = '<div id="json-editor"></div>';
    const n = new CSSStyleSheet();
    n.replaceSync(Bo), this.shadowRoot.appendChild(o.content.cloneNode(!0)), this.shadowRoot.adoptedStyleSheets = [n], this.root = this.shadowRoot.childNodes[0], this.ready = !1, this.options = {
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
   * change attributes
   */
  attributeChangedCallback(o, n, i) {
    if (n !== i)
      switch (o) {
        case "theme":
          this.options.theme = i, this.core && (this.core.options.theme = this.options.theme);
          break;
        case "live":
          this.options.live = ["true", "1"].includes(i), this.core && (this.core.options.live = this.options.live);
          break;
      }
  }
  /**
   * mounted component
   */
  connectedCallback() {
    this.core = new Oo(this.root, this.options), this.core.replace(JSON.parse(this.props.src), !1), this.core.preview = (o) => {
      this.setAttribute("src", JSON.stringify(o)), h(this, Nt, Te).call(this, "update", { data: o });
    };
  }
  /**
   * unmounted component
   */
  disconnectedCallback() {
    this.core && (this.core.destroy(), delete this.core, this.root.innerHTML = "");
  }
  /**
   * change src
   * @param {object|array} src
   */
  change(o) {
    this.setAttribute("src", JSON.stringify(o)), this.core.replace(o, !0);
  }
}
Nt = new WeakSet(), Te = function(o, n) {
  this.dispatchEvent(new CustomEvent(o, {
    detail: n
  }));
};
export {
  Mo as default
};
