var Be = Object.defineProperty;
var Me = (t, e, o) => e in t ? Be(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var At = (t, e, o) => (Me(t, typeof e != "symbol" ? e + "" : e, o), o), St = (t, e, o) => {
  if (!e.has(t))
    throw TypeError("Cannot " + o);
};
var u = (t, e, o) => (St(t, e, "read from private field"), o ? o.call(t) : e.get(t)), m = (t, e, o) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, o);
}, M = (t, e, o, n) => (St(t, e, "write to private field"), n ? n.call(t, o) : e.set(t, o), o);
var f = (t, e, o) => (St(t, e, "access private method"), o);
const T = document, ft = window, ie = T.documentElement, P = T.createElement.bind(T), re = P("div"), Tt = P("table"), ze = P("tbody"), Gt = P("tr"), { isArray: Et, prototype: se } = Array, { concat: He, filter: It, indexOf: ae, map: ce, push: Ie, slice: le, some: Ut, splice: Ue } = se, Pe = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, De = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ve = /<.+>/, Ye = /^\w+$/;
function Pt(t, e) {
  const o = Je(e);
  return !t || !o && !U(e) && !C(e) ? [] : !o && De.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !o && Ye.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class Nt {
  constructor(e, o) {
    if (!e)
      return;
    if (Bt(e))
      return e;
    let n = e;
    if (E(e)) {
      const i = o || T;
      if (n = Pe.test(e) && U(i) ? i.getElementById(e.slice(1).replace(/\\/g, "")) : Ve.test(e) ? he(e) : Bt(i) ? i.find(e) : E(i) ? a(i).find(e) : Pt(e, i), !n)
        return;
    } else if (D(e))
      return this.ready(e);
    (n.nodeType || n === ft) && (n = [n]), this.length = n.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = n[i];
  }
  init(e, o) {
    return new Nt(e, o);
  }
}
const s = Nt.prototype, a = s.init;
a.fn = a.prototype = s;
s.length = 0;
s.splice = Ue;
typeof Symbol == "function" && (s[Symbol.iterator] = se[Symbol.iterator]);
function Bt(t) {
  return t instanceof Nt;
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
function C(t) {
  return !!t && t.nodeType === 1;
}
function Fe(t) {
  return !!t && t.nodeType === 3;
}
function Ze(t) {
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
function de(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function Dt(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
a.isWindow = et;
a.isFunction = D;
a.isArray = Et;
a.isNumeric = de;
a.isPlainObject = Dt;
function _(t, e, o) {
  if (o) {
    let n = t.length;
    for (; n--; )
      if (e.call(t[n], n, t[n]) === !1)
        return t;
  } else if (Dt(t)) {
    const n = Object.keys(t);
    for (let i = 0, r = n.length; i < r; i++) {
      const c = n[i];
      if (e.call(t[c], c, t[c]) === !1)
        return t;
    }
  } else
    for (let n = 0, i = t.length; n < i; n++)
      if (e.call(t[n], n, t[n]) === !1)
        return t;
  return t;
}
a.each = _;
s.each = function(t) {
  return _(this, t);
};
s.empty = function() {
  return this.each((t, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function pt(...t) {
  const e = Ze(t[0]) ? t.shift() : !1, o = t.shift(), n = t.length;
  if (!o)
    return {};
  if (!n)
    return pt(e, a, o);
  for (let i = 0; i < n; i++) {
    const r = t[i];
    for (const c in r)
      e && (Et(r[c]) || Dt(r[c])) ? ((!o[c] || o[c].constructor !== r[c].constructor) && (o[c] = new r[c].constructor()), pt(e, o[c], r[c])) : o[c] = r[c];
  }
  return o;
}
a.extend = pt;
s.extend = function(t) {
  return pt(s, t);
};
const We = /\S+/g;
function Lt(t) {
  return E(t) ? t.match(We) || [] : [];
}
s.toggleClass = function(t, e) {
  const o = Lt(t), n = !L(e);
  return this.each((i, r) => {
    C(r) && _(o, (c, l) => {
      n ? e ? r.classList.add(l) : r.classList.remove(l) : r.classList.toggle(l);
    });
  });
};
s.addClass = function(t) {
  return this.toggleClass(t, !0);
};
s.removeAttr = function(t) {
  const e = Lt(t);
  return this.each((o, n) => {
    C(n) && _(e, (i, r) => {
      n.removeAttribute(r);
    });
  });
};
function Ge(t, e) {
  if (t) {
    if (E(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !C(this[0]))
          return;
        const o = this[0].getAttribute(t);
        return it(o) ? void 0 : o;
      }
      return L(e) ? this : it(e) ? this.removeAttr(t) : this.each((o, n) => {
        C(n) && n.setAttribute(t, e);
      });
    }
    for (const o in t)
      this.attr(o, t[o]);
    return this;
  }
}
s.attr = Ge;
s.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
s.hasClass = function(t) {
  return !!t && Ut.call(this, (e) => C(e) && e.classList.contains(t));
};
s.get = function(t) {
  return L(t) ? le.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
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
function Ke(t) {
  return L(t) ? this.get().map((e) => C(e) || Fe(e) ? e.textContent : "").join("") : this.each((e, o) => {
    C(o) && (o.textContent = t);
  });
}
s.text = Ke;
function O(t, e, o) {
  if (!C(t))
    return;
  const n = ft.getComputedStyle(t, null);
  return o ? n.getPropertyValue(e) || void 0 : n[e] || t.style[e];
}
function A(t, e) {
  return parseInt(O(t, e), 10) || 0;
}
function Kt(t, e) {
  return A(t, `border${e ? "Left" : "Top"}Width`) + A(t, `padding${e ? "Left" : "Top"}`) + A(t, `padding${e ? "Right" : "Bottom"}`) + A(t, `border${e ? "Right" : "Bottom"}Width`);
}
const Ot = {};
function qe(t) {
  if (Ot[t])
    return Ot[t];
  const e = P(t);
  T.body.insertBefore(e, null);
  const o = O(e, "display");
  return T.body.removeChild(e), Ot[t] = o !== "none" ? o : "block";
}
function qt(t) {
  return O(t, "display") === "none";
}
function ue(t, e) {
  const o = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!o && !!e && o.call(t, e);
}
function Rt(t) {
  return E(t) ? (e, o) => ue(o, t) : D(t) ? t : Bt(t) ? (e, o) => t.is(o) : t ? (e, o) => o === t : () => !1;
}
s.filter = function(t) {
  const e = Rt(t);
  return a(It.call(this, (o, n) => e.call(o, n, o)));
};
function z(t, e) {
  return e ? t.filter(e) : t;
}
s.detach = function(t) {
  return z(this, t).each((e, o) => {
    o.parentNode && o.parentNode.removeChild(o);
  }), this;
};
const Xe = /^\s*<(\w+)[^>]*>/, Qe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Xt = {
  "*": re,
  tr: ze,
  td: Gt,
  th: Gt,
  thead: Tt,
  tbody: Tt,
  tfoot: Tt
};
function he(t) {
  if (!E(t))
    return [];
  if (Qe.test(t))
    return [P(RegExp.$1)];
  const e = Xe.test(t) && RegExp.$1, o = Xt[e] || Xt["*"];
  return o.innerHTML = t, a(o.childNodes).detach().get();
}
a.parseHTML = he;
s.has = function(t) {
  const e = E(t) ? (o, n) => Pt(t, n).length : (o, n) => n.contains(t);
  return this.filter(e);
};
s.not = function(t) {
  const e = Rt(t);
  return this.filter((o, n) => (!E(t) || C(n)) && !e.call(n, o, n));
};
function $(t, e, o, n) {
  const i = [], r = D(e), c = n && Rt(n);
  for (let l = 0, p = t.length; l < p; l++)
    if (r) {
      const d = e(t[l]);
      d.length && Ie.apply(i, d);
    } else {
      let d = t[l][e];
      for (; d != null && !(n && c(-1, d)); )
        i.push(d), d = o ? d[e] : null;
    }
  return i;
}
function fe(t) {
  return t.multiple && t.options ? $(It.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function to(t) {
  return arguments.length ? this.each((e, o) => {
    const n = o.multiple && o.options;
    if (n || we.test(o.type)) {
      const i = Et(t) ? ce.call(t, String) : it(t) ? [] : [String(t)];
      n ? _(o.options, (r, c) => {
        c.selected = i.indexOf(c.value) >= 0;
      }, !0) : o.checked = i.indexOf(o.value) >= 0;
    } else
      o.value = L(t) || it(t) ? "" : t;
  }) : this[0] && fe(this[0]);
}
s.val = to;
s.is = function(t) {
  const e = Rt(t);
  return Ut.call(this, (o, n) => e.call(o, n, o));
};
a.guid = 1;
function S(t) {
  return t.length > 1 ? It.call(t, (e, o, n) => ae.call(n, e) === o) : t;
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
  const e = t ? a(t)[0] : this[0], o = t ? this : a(e).parent().children();
  return ae.call(o, e);
};
s.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const o = this.parent();
  return o.length ? o.closest(t) : e;
};
s.siblings = function(t) {
  return z(a(S($(this, (e) => a(e).parent().children().not(e)))), t);
};
s.find = function(t) {
  return a(S($(this, (e) => Pt(t, e))));
};
const eo = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, oo = /^$|^module$|\/(java|ecma)script/i, no = ["type", "src", "nonce", "noModule"];
function io(t, e) {
  const o = a(t);
  o.filter("script").add(o.find("script")).each((n, i) => {
    if (oo.test(i.type) && ie.contains(i)) {
      const r = P("script");
      r.text = i.textContent.replace(eo, ""), _(no, (c, l) => {
        i[l] && (r[l] = i[l]);
      }), e.head.insertBefore(r, null), e.head.removeChild(r);
    }
  });
}
function ro(t, e, o, n, i) {
  n ? t.insertBefore(e, o ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, o ? t : t.nextSibling), i && io(e, t.ownerDocument);
}
function H(t, e, o, n, i, r, c, l) {
  return _(t, (p, d) => {
    _(a(d), (b, k) => {
      _(a(e), (w, v) => {
        const B = o ? k : v, y = o ? v : k, V = o ? b : w;
        ro(B, V ? y.cloneNode(!0) : y, n, i, !V);
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
function so(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (L(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((o, n) => {
    C(n) && (e ? a(n).empty().append(t) : n.innerHTML = t);
  });
}
s.html = so;
s.appendTo = function(t) {
  return H(arguments, this, !0, !1, !0);
};
s.wrapInner = function(t) {
  return this.each((e, o) => {
    const n = a(o), i = n.contents();
    i.length ? i.wrapAll(t) : n.append(t);
  });
};
s.before = function() {
  return H(arguments, this, !1, !0);
};
s.wrapAll = function(t) {
  let e = a(t), o = e[0];
  for (; o.children.length; )
    o = o.firstElementChild;
  return this.first().before(e), this.appendTo(o);
};
s.wrap = function(t) {
  return this.each((e, o) => {
    const n = a(t)[0];
    a(o).wrapAll(e ? n.cloneNode(!0) : n);
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
s.next = function(t, e, o) {
  return z(a(S($(this, "nextElementSibling", e, o))), t);
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
s.prev = function(t, e, o) {
  return z(a(S($(this, "previousElementSibling", e, o))), t);
};
s.prevAll = function(t) {
  return this.prev(t, !0);
};
s.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
s.map = function(t) {
  return a(He.apply([], ce.call(this, (e, o) => t.call(e, o, e))));
};
s.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
s.offsetParent = function() {
  return this.map((t, e) => {
    let o = e.offsetParent;
    for (; o && O(o, "position") === "static"; )
      o = o.offsetParent;
    return o || ie;
  });
};
s.slice = function(t, e) {
  return a(le.call(this, t, e));
};
const ao = /-([a-z])/g;
function Vt(t) {
  return t.replace(ao, (e, o) => o.toUpperCase());
}
s.ready = function(t) {
  const e = () => setTimeout(t, 0, a);
  return T.readyState !== "loading" ? e() : T.addEventListener("DOMContentLoaded", e), this;
};
s.unwrap = function() {
  return this.parent().each((t, e) => {
    if (e.tagName === "BODY")
      return;
    const o = a(e);
    o.replaceWith(o.children());
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
  const e = O(t, "position") === "fixed", o = e ? t.getBoundingClientRect() : this.offset();
  if (!e) {
    const n = t.ownerDocument;
    let i = t.offsetParent || n.documentElement;
    for (; (i === n.body || i === n.documentElement) && O(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== t && C(i)) {
      const r = a(i).offset();
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
s.prop = function(t, e) {
  if (t) {
    if (E(t))
      return t = pe[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((o, n) => {
        n[t] = e;
      });
    for (const o in t)
      this.prop(o, t[o]);
    return this;
  }
};
s.removeProp = function(t) {
  return this.each((e, o) => {
    delete o[pe[t] || t];
  });
};
const co = /^--/;
function Yt(t) {
  return co.test(t);
}
const $t = {}, { style: lo } = re, uo = ["webkit", "moz", "ms"];
function ho(t, e = Yt(t)) {
  if (e)
    return t;
  if (!$t[t]) {
    const o = Vt(t), n = `${o[0].toUpperCase()}${o.slice(1)}`, i = `${o} ${uo.join(`${n} `)}${n}`.split(" ");
    _(i, (r, c) => {
      if (c in lo)
        return $t[t] = c, !1;
    });
  }
  return $t[t];
}
const fo = {
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
function be(t, e, o = Yt(t)) {
  return !o && !fo[t] && de(e) ? `${e}px` : e;
}
function po(t, e) {
  if (E(t)) {
    const o = Yt(t);
    return t = ho(t, o), arguments.length < 2 ? this[0] && O(this[0], t, o) : t ? (e = be(t, e, o), this.each((n, i) => {
      C(i) && (o ? i.style.setProperty(t, e) : i.style[t] = e);
    })) : this;
  }
  for (const o in t)
    this.css(o, t[o]);
  return this;
}
s.css = po;
function ge(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const bo = /^\s+|\s+$/;
function Qt(t, e) {
  const o = t.dataset[e] || t.dataset[Vt(e)];
  return bo.test(o) ? o : ge(JSON.parse, o);
}
function go(t, e, o) {
  o = ge(JSON.stringify, o), t.dataset[Vt(e)] = o;
}
function yo(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const o = {};
    for (const n in this[0].dataset)
      o[n] = Qt(this[0], n);
    return o;
  }
  if (E(t))
    return arguments.length < 2 ? this[0] && Qt(this[0], t) : L(e) ? this : this.each((o, n) => {
      go(n, t, e);
    });
  for (const o in t)
    this.data(o, t[o]);
  return this;
}
s.data = yo;
function ye(t, e) {
  const o = t.documentElement;
  return Math.max(t.body[`scroll${e}`], o[`scroll${e}`], t.body[`offset${e}`], o[`offset${e}`], o[`client${e}`]);
}
_([!0, !1], (t, e) => {
  _(["Width", "Height"], (o, n) => {
    const i = `${e ? "outer" : "inner"}${n}`;
    s[i] = function(r) {
      if (this[0])
        return et(this[0]) ? e ? this[0][`inner${n}`] : this[0].document.documentElement[`client${n}`] : U(this[0]) ? ye(this[0], n) : this[0][`${e ? "offset" : "client"}${n}`] + (r && e ? A(this[0], `margin${o ? "Top" : "Left"}`) + A(this[0], `margin${o ? "Bottom" : "Right"}`) : 0);
    };
  });
});
_(["Width", "Height"], (t, e) => {
  const o = e.toLowerCase();
  s[o] = function(n) {
    if (!this[0])
      return L(n) ? void 0 : this;
    if (!arguments.length)
      return et(this[0]) ? this[0].document.documentElement[`client${e}`] : U(this[0]) ? ye(this[0], e) : this[0].getBoundingClientRect()[o] - Kt(this[0], !t);
    const i = parseInt(n, 10);
    return this.each((r, c) => {
      if (!C(c))
        return;
      const l = O(c, "boxSizing");
      c.style[o] = be(o, i + (l === "border-box" ? Kt(c, !t) : 0));
    });
  };
});
const te = "___cd";
s.toggle = function(t) {
  return this.each((e, o) => {
    if (!C(o))
      return;
    const n = qt(o);
    (L(t) ? n : t) ? (o.style.display = o[te] || "", qt(o) && (o.style.display = qe(o.tagName))) : n || (o[te] = O(o, "display"), o.style.display = "none");
  });
};
s.hide = function() {
  return this.toggle(!1);
};
s.show = function() {
  return this.toggle(!0);
};
const ee = "___ce", Jt = ".", Ft = { focus: "focusin", blur: "focusout" }, me = { mouseenter: "mouseover", mouseleave: "mouseout" }, mo = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Zt(t) {
  return me[t] || Ft[t] || t;
}
function Wt(t) {
  const e = t.split(Jt);
  return [e[0], e.slice(1).sort()];
}
s.trigger = function(t, e) {
  if (E(t)) {
    const [n, i] = Wt(t), r = Zt(n);
    if (!r)
      return this;
    const c = mo.test(r) ? "MouseEvents" : "HTMLEvents";
    t = T.createEvent(c), t.initEvent(r, !0, !0), t.namespace = i.join(Jt), t.___ot = n;
  }
  t.___td = e;
  const o = t.___ot in Ft;
  return this.each((n, i) => {
    o && D(i[t.___ot]) && (i[`___i${t.type}`] = !0, i[t.___ot](), i[`___i${t.type}`] = !1), i.dispatchEvent(t);
  });
};
function ve(t) {
  return t[ee] = t[ee] || {};
}
function vo(t, e, o, n, i) {
  const r = ve(t);
  r[e] = r[e] || [], r[e].push([o, n, i]), t.addEventListener(e, i);
}
function xe(t, e) {
  return !e || !Ut.call(e, (o) => t.indexOf(o) < 0);
}
function bt(t, e, o, n, i) {
  const r = ve(t);
  if (e)
    r[e] && (r[e] = r[e].filter(([c, l, p]) => {
      if (i && p.guid !== i.guid || !xe(c, o) || n && n !== l)
        return !0;
      t.removeEventListener(e, p);
    }));
  else
    for (e in r)
      bt(t, e, o, n, i);
}
s.off = function(t, e, o) {
  if (L(t))
    this.each((n, i) => {
      !C(i) && !U(i) && !et(i) || bt(i);
    });
  else if (E(t))
    D(e) && (o = e, e = ""), _(Lt(t), (n, i) => {
      const [r, c] = Wt(i), l = Zt(r);
      this.each((p, d) => {
        !C(d) && !U(d) && !et(d) || bt(d, l, c, e, o);
      });
    });
  else
    for (const n in t)
      this.off(n, t[n]);
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
function xo(t, e, o, n, i) {
  if (!E(t)) {
    for (const r in t)
      this.on(r, e, o, t[r], i);
    return this;
  }
  return E(e) || (L(e) || it(e) ? e = "" : L(o) ? (o = e, e = "") : (n = o, o = e, e = "")), D(n) || (n = o, o = void 0), n ? (_(Lt(t), (r, c) => {
    const [l, p] = Wt(c), d = Zt(l), b = l in me, k = l in Ft;
    d && this.each((w, v) => {
      if (!C(v) && !U(v) && !et(v))
        return;
      const B = function(y) {
        if (y.target[`___i${y.type}`])
          return y.stopImmediatePropagation();
        if (y.namespace && !xe(p, y.namespace.split(Jt)) || !e && (k && (y.target !== v || y.___ot === d) || b && y.relatedTarget && v.contains(y.relatedTarget)))
          return;
        let V = v;
        if (e) {
          let Y = y.target;
          for (; !ue(Y, e); )
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
            return o;
          }
        });
        const $e = n.call(V, y, y.___td);
        i && bt(v, d, p, e, B), $e === !1 && (y.preventDefault(), y.stopPropagation());
      };
      B.guid = n.guid = n.guid || a.guid++, vo(v, d, p, e, B);
    });
  }), this) : this;
}
s.on = xo;
function wo(t, e, o, n) {
  return this.on(t, e, o, n, !0);
}
s.one = wo;
const jo = /\r?\n/g;
function Co(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(jo, `\r
`))}`;
}
const ko = /file|reset|submit|button|image/i, we = /radio|checkbox/i;
s.serialize = function() {
  let t = "";
  return this.each((e, o) => {
    _(o.elements || [o], (n, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || ko.test(i.type) || we.test(i.type) && !i.checked)
        return;
      const r = fe(i);
      if (!L(r)) {
        const c = Et(r) ? r : [r];
        _(c, (l, p) => {
          t += Co(i.name, p);
        });
      }
    });
  }), t.slice(1);
};
function oe(t) {
  return t == null ? "null" : Array.isArray(t) ? "array" : typeof t == "string" ? "string" : typeof t == "number" ? "number" : typeof t == "boolean" ? "boolean" : "object";
}
function je(t) {
  try {
    return typeof t == "string" ? JSON.parse(t) : Array.isArray(t) ? Object.assign([], t) : a.isPlainObject(t) ? Object.assign({}, t) : {};
  } catch (e) {
    console.error("error", e.message);
  }
}
function _o(t) {
  return Array.isArray(t) ? t.length : a.isPlainObject(t) ? Object.keys(t).length : 0;
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
const Eo = {
  live: !1,
  // live update
  theme: "system"
  // system,light,dark
}, No = {
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
}, ot = {
  START: "drag-over-start",
  END: "drag-over-end",
  ALL: "drag-over-start drag-over-end"
}, Lo = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12L10 8L6 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', Ro = '<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-90, 10, 10)"><path d="M7 9L10 12L13 9" fill="currentColor"/><path d="M7 9L10 12L13 9H7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>', Ao = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', Ce = {
  object: '<svg viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-object"><g transform="translate(0 1)"><path d="M2.296 5.166C2.296 7.238 3.78 8.162 5.166 8.162C6.538 8.162 8.022 7.238 8.022 5.166C8.022 3.094 6.538 2.156 5.166 2.156C3.78 2.156 2.296 3.094 2.296 5.166ZM0 5.18C0 2.03 2.366 0 5.166 0C7.952 0 10.318 2.03 10.318 5.18C10.318 8.316 7.952 10.346 5.166 10.346C2.366 10.346 0 8.316 0 5.18Z" fill="currentColor"/></g></svg>',
  array: '<svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-array"><path d="M7.728 9.926L6.902 7.658H2.87L2.044 9.926H0L3.808 0H6.048L9.828 9.926H7.728ZM4.886 2.142L3.514 5.894H6.258L4.886 2.142Z" fill="currentColor"/></svg>',
  string: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-string"><g transform="translate(0 1)"><path d="M7.39203 2.576L5.65603 3.108C5.55803 2.562 5.11003 1.708 3.85003 1.708C2.91203 1.708 2.29603 2.31 2.29603 2.968C2.29603 3.514 2.64603 3.948 3.37403 4.088L4.76003 4.354C6.56603 4.704 7.53203 5.88 7.53203 7.28C7.53203 8.806 6.25803 10.346 3.94803 10.346C1.31603 10.346 0.154031 8.652 3.05176e-05 7.238L1.79203 6.762C1.87603 7.742 2.56203 8.624 3.96203 8.624C4.99803 8.624 5.57203 8.106 5.57203 7.406C5.57203 6.832 5.13803 6.384 4.36803 6.23L2.98203 5.95C1.40003 5.628 0.378031 4.606 0.378031 3.108C0.378031 1.344 1.96003 0 3.83603 0C6.24403 0 7.16803 1.456 7.39203 2.576Z" fill="currentColor"/></g></svg>',
  number: '<svg viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-number"><path d="M8.47003 9.926H6.44003L1.93203 2.884V9.926H3.05176e-05V0H2.40803L6.53803 6.566V0H8.47003V9.926Z" fill="currentColor"/></svg>',
  boolean: '<svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-boolean"><path d="M3.05176e-05 0H3.57003C5.50203 0 6.59403 1.134 6.59403 2.674C6.59403 3.696 5.97803 4.522 5.15203 4.802C6.11803 5.04 6.90203 5.922 6.90203 7.154C6.90203 8.764 5.69803 9.926 3.83603 9.926H3.05176e-05V0ZM1.90403 4.102H3.27603C4.15803 4.102 4.69003 3.612 4.69003 2.856C4.69003 2.1 4.20003 1.624 3.26203 1.624H1.90403V4.102ZM1.90403 8.316H3.47203C4.41003 8.316 4.97003 7.826 4.97003 7.028C4.97003 6.244 4.46603 5.698 3.50003 5.698H1.90403V8.316Z" fill="currentColor"/></svg>',
  null: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-null"><g transform="translate(0 1.5)"><path d="M3.808 10.15C1.694 10.15 0 8.848 0 6.412V0H1.932V6.272C1.932 7.574 2.66 8.26 3.808 8.26C4.984 8.26 5.698 7.574 5.698 6.272V0H7.63V6.412C7.63 8.848 5.936 10.15 3.808 10.15Z" fill="currentColor"/></g></svg>'
}, So = [
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
var Z, j, W, gt, ke, yt, _e, mt, Ee;
class To {
  constructor(e, o, n = !1) {
    m(this, gt);
    m(this, yt);
    m(this, mt);
    m(this, Z, void 0);
    m(this, j, {
      node: void 0,
      type: void 0,
      dialog: void 0
    });
    m(this, W, void 0);
    M(this, Z, e), u(this, j).node = a(o), M(this, W, String(u(this, j).node.data("type"))), u(this, j).type = u(this, j).node.find("& > .node__body > .type"), u(this, j).type.addClass("open"), u(this, j).dialog = f(this, gt, ke).call(this, So, u(this, W), n), u(this, j).dialog.on("click", (i) => i.stopPropagation()), u(this, j).dialog.find("button").on("click", (i) => f(this, yt, _e).call(this, i)), u(this, Z).customContext(u(this, j).dialog.get(0), {
      node: u(this, j).node.get(0),
      type: u(this, W),
      isRoot: n
    }, a), u(this, j).type.append(u(this, j).dialog), a(window).on(F.CLICK, (i) => this.close(i)), a(window).on(F.KEYUP, (i) => f(this, mt, Ee).call(this, i));
  }
  close() {
    u(this, j).type.removeClass("open"), u(this, j).dialog.remove(), a(window).off(F.CLICK), a(window).off(F.KEYUP), delete u(this, Z).context;
  }
}
Z = new WeakMap(), j = new WeakMap(), W = new WeakMap(), gt = new WeakSet(), ke = function(e, o, n = !1) {
  function i(l, p) {
    let d = "";
    const { key: b, label: k, children: w } = l;
    if (n)
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
        if ([h.STRING, h.NUMBER, h.BOOLEAN, h.NULL].indexOf(o) > -1)
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
        v = ' class="type"', B = `<i class="type-icon type-icon--${b}">${Ce[b]}</i>`, y = ` data-mode="${p}" data-type="${b}"`, p === "change-type" && b === o && (y = " disabled");
        break;
    }
    return d += `<li${v}>`, d += `<button type="button"${y}>`, d += B, d += `<em class="label">${k}</em>`, (b === "change-type" || b === "insert") && (d += `<span class="arrow">${Lo}</span>`), d += "</button>", (w == null ? void 0 : w.length) > 0 && (d += '<div class="children">', d += r(w, b), d += "</div>"), d += "</li>", d;
  }
  function r(l, p = void 0) {
    let d = "<ol>";
    for (let b in l)
      d += i(l[b], p);
    return d += "</ol>", d;
  }
  let c = `<nav class="context${n ? " is-root" : ""}">`;
  return c += r(e), c += "</nav>", a(c);
}, yt = new WeakSet(), _e = function(e) {
  const o = a(e.currentTarget), n = o.data("mode");
  let i = String(o.data("type"));
  i = i === "undefined" ? "" : i, this.close(), this.selectItem && typeof this.selectItem == "function" && this.selectItem(u(this, j).node, n, i);
}, mt = new WeakSet(), Ee = function(e) {
  e.code === "Escape" && this.close();
};
var x, g, G, vt, Ne, rt, Mt, K, ct, xt, Le, wt, Re, q, lt, X, dt, st, zt, N, R, at, Ht, I, nt, Q, ut, tt, ht, jt, Ae, Ct, Se, kt, Te;
class Oo {
  constructor(e, o = {}) {
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
    m(this, x, { wrap: null, body: null, tree: null });
    At(this, "options");
    At(this, "context");
    m(this, g, void 0);
    m(this, G, !1);
    u(this, x).wrap = a(e), u(this, x).body = a('<div class="json-editor"></div>'), this.options = new Proxy(Object.assign({}, Eo, o), {
      get: (n, i) => n[i],
      set: f(this, vt, Ne).bind(this)
    }), u(this, x).wrap.append(u(this, x).body), f(this, rt, Mt).call(this, this.options.theme), this.replace({});
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
  addNode(e, o, n = !0) {
    o = { ...No, ...o };
    const { data: i, between: r, open: c, callback: l } = o;
    e = a(e);
    const { key: p, value: d, type: b } = i, k = f(this, K, ct).call(this, b, !1);
    f(this, q, lt).call(this, k, { ...i, open: c }), f(this, I, nt).call(this, k);
    const w = e.find("& > .node__children > ul");
    r === "before" ? w.prepend(k) : w.append(k), (b === h.ARRAY || b === h.OBJECT) && l && typeof l == "function" && l(k.get(0), d), n && f(this, N, R).call(this);
  }
  /**
   * remove node
   * @param {HTMLElement} $node
   * @param {boolean} useUpdate
   */
  removeNode(e, o = !0) {
    e = a(e), e.remove(), o && f(this, N, R).call(this);
  }
  /**
   * change type
   * @param {HTMLElement} node
   * @param {'object'|'array'|'string'|'number'|'boolean'|'null'} type
   * @param {boolean} useUpdate
   */
  changeType(e, o, n = !0) {
    const i = a(e), r = {
      key: i.find("& > .node__body .key").text(),
      value: f(this, st, zt).call(this, i),
      type: o,
      open: i.hasClass("open")
    }, c = i.find("& > .node__children > .tree").html(), l = i.hasClass("root");
    i.empty(), i.html(f(this, K, ct).call(this, o, l).html()), c && i.find("& > .node__children > .tree").html(c), f(this, q, lt).call(this, i, r), f(this, I, nt).call(this, i), i.attr("data-type", o), n && f(this, N, R).call(this);
  }
  /**
   * duplicate
   * @param {HTMLElement} $target
   * @param {boolean} useUpdate
   */
  duplicate(e, o = !0) {
    e = a(e);
    const n = a(e.get(0).outerHTML);
    f(this, I, nt).call(this, n), e.after(n), o && f(this, N, R).call(this);
  }
  fold(e, o) {
    e = a(e), o === void 0 ? e.toggleClass("open") : o === !0 ? e.addClass("open") : e.removeClass("open");
  }
  clear() {
    u(this, x).tree && (u(this, x).body.empty(), this.replace({}, !1), f(this, N, R).call(this));
  }
  destroy() {
    a(window).off(J.END).off(F.CLICK).off(F.KEYUP), u(this, x).wrap.empty();
  }
  /**
   * replace
   * @param {object|array} data
   * @param {boolean} useUpdate
   */
  replace(e, o = !0) {
    u(this, x).body.empty(), e = je(e);
    const n = f(this, xt, Le).call(this, e);
    this.import(n, e, !1), o && f(this, N, R).call(this);
  }
  /**
   * import data
   * @param {HTMLElement} target
   * @param {object|array} data
   * @param {boolean} useUpdate
   */
  import(e, o, n = !0) {
    a.each(o, (i, r) => {
      const c = oe(r), l = { key: i, value: r, type: c };
      this.addNode(e, {
        data: l,
        open: !1,
        callback: (p, d) => this.import(p, d, !1)
      }, !1);
    }), n && f(this, N, R).call(this);
  }
  /**
   * export
   * @param {boolean} json
   * @param {number|boolean} space (number: space count, true: tab, false: 0)
   * @return {array|object}
   */
  export(e = !1, o = 2) {
    let n = f(this, at, Ht).call(this);
    if (e) {
      let i = 2;
      return o === !0 ? i = "	" : typeof o === h.NUMBER && (i = o), JSON.stringify(n, null, i);
    } else
      return n;
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
x = new WeakMap(), g = new WeakMap(), G = new WeakMap(), vt = new WeakSet(), Ne = function(e, o, n) {
  switch (e[o] = n, o) {
    case "theme":
      f(this, rt, Mt).call(this, n);
      break;
  }
  return !0;
}, rt = new WeakSet(), Mt = function(e) {
  e = ["system", "light", "dark"].indexOf(e) > -1 ? e : "system", u(this, x).body.attr("data-theme", e);
}, K = new WeakSet(), ct = function(e, o = !1) {
  let n = `<li data-type="${e}" class="node${o ? " root" : ""}">`;
  return n += '<div class="node__body">', o || (n += `<div class="sort">${Ao}</div>`), n += '<div class="type"><button type="button"></button></div>', (e === h.OBJECT || e === h.ARRAY) && (n += `<button type="button" class="fold">${Ro}</button>`), o || (n += '<div class="key"></div>'), n += '<em class="count"></em>', o || (n += '<div class="value"></div>'), n += "</div>", n += '<div class="node__children"><ul class="tree"/></div>', n += "</li>", a(n);
}, xt = new WeakSet(), Le = function(e) {
  const o = oe(e), n = f(this, K, ct).call(this, o, !0);
  return f(this, q, lt).call(this, n, {
    key: void 0,
    value: e,
    type: o,
    open: !0
  }), f(this, I, nt).call(this, n), u(this, x).tree = a("<ul/>"), u(this, x).tree.append(n), u(this, x).body.append(u(this, x).tree), n;
}, wt = new WeakSet(), Re = function(e, o, n) {
  switch (o) {
    case "change-type":
      this.changeType(e, n);
      break;
    case "insert":
      this.fold(e, !0), this.addNode(e, {
        data: { key: "", value: "", type: n }
      });
      break;
    case "duplicate":
      this.duplicate(e);
      break;
    case "remove":
      this.removeNode(e);
      break;
  }
}, q = new WeakSet(), lt = function(e, o) {
  const { key: n, value: i, type: r, open: c } = o, l = e.hasClass("root"), p = e.children(".node__body");
  if (p.find(".type > button").html(`<i class="type-icon type-icon--${r}">${Ce[r]}</i>`), (r === h.OBJECT || r === h.ARRAY) && this.fold(e, c), !l) {
    p.find(".key").html(`<div class="label-field" contenteditable="true" data-placeholder="empty">${n}</div>`);
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
    const d = _o(i);
    isNaN(d) || p.find(".count").text(d);
  }
}, X = new WeakSet(), dt = function(e) {
  return String(e.data("type"));
}, st = new WeakSet(), zt = function(e) {
  const o = f(this, X, dt).call(this, e), n = e.find("& > .node__body > .value");
  switch (o) {
    case h.OBJECT:
    case h.ARRAY:
      return "";
    case h.STRING:
      return n.children(".type-string").get(0).innerText || "";
    case h.NUMBER:
      return Number(n.children(".type-number").val());
    case h.BOOLEAN:
      return n.children(".type-boolean").data("value");
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
              const w = d.find("& > .node__body > .key").text();
              w && (c[w] = e(d, b));
              break;
          }
          break;
        case h.STRING:
        case h.NUMBER:
        case h.BOOLEAN:
        case h.NULL:
          const k = f(this, st, zt).call(this, d);
          switch (r) {
            case h.ARRAY:
              c.push(k);
              break;
            case h.OBJECT:
              const w = d.find("& > .node__body > .key").text();
              w && (c[w] = k);
              break;
          }
          break;
      }
    }), c;
  }, o = u(this, x).tree.children(".node"), n = f(this, X, dt).call(this, o);
  return e(o, n);
}, I = new WeakSet(), nt = function(e) {
  const o = e.find(".sort");
  o.length && o.on(J.START, f(this, jt, Ae).bind(this)), e.find(".type > button").on("click", async (l) => {
    const p = a(l.currentTarget);
    if (l.stopPropagation(), p.parent().hasClass("open"))
      this.context && this.context.close();
    else {
      this.context && this.context.close();
      const d = p.closest(".node").hasClass("root");
      this.context = new To(this, p.closest(".node"), d), this.context.selectItem = (b, k, w) => f(this, wt, Re).call(this, b, k, w);
    }
  }), e.find(".fold").on("click", (l) => {
    const d = a(l.currentTarget).closest(".node");
    this.fold(d);
  });
  const n = e.find(".key > .label-field");
  n.length && n.on("keydown", (l) => {
    if (l.keyCode === 13 || ne(l))
      return l.preventDefault();
  }).on("input", (l) => f(this, Q, ut).call(this, l)).on("blur", (l) => f(this, tt, ht).call(this, l));
  const i = e.find(".value > .type-string");
  i.length && i.on("keydown", (l) => {
    if (ne(l))
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
}, jt = new WeakSet(), Ae = function(e) {
  if (M(this, g, {}), u(this, g).$node = a(e.currentTarget).closest(".node"), u(this, g).$area = u(this, g).$node.parent(), u(this, g).$nodes = u(this, g).$area.children(".node"), u(this, g).$nodes.length < 2) {
    M(this, g, void 0);
    return;
  }
  u(this, g).$nodes.on(J.MOVE, f(this, Ct, Se).bind(this)), a(window).on(J.END, f(this, kt, Te).bind(this));
}, Ct = new WeakSet(), Se = function(e) {
  const o = a(e.currentTarget), n = o.children(".node__body");
  if (!(n.length > 0))
    return;
  const { y: i, height: r } = n.get(0).getBoundingClientRect(), c = r * 0.5 < e.y - i;
  if (u(this, g).activeNode || (u(this, x).body.addClass("dragging"), u(this, g).$area.addClass("drag-area"), u(this, g).$node.addClass("drag-select")), u(this, g).activeNode !== o.get(0))
    u(this, g).activeNode && a(u(this, g).activeNode).removeClass(ot.ALL), u(this, g).activeNode = o.get(0);
  else if (u(this, g).half === c)
    return;
  u(this, g).half = c, o.removeClass(ot.ALL).addClass(c ? ot.END : ot.START);
}, kt = new WeakSet(), Te = function(e) {
  u(this, x).body.removeClass("dragging"), u(this, g).$area.removeClass("drag-area"), u(this, g).$node.removeClass("drag-select"), u(this, g).$nodes.removeClass(ot.ALL), u(this, g).$nodes.off(J.MOVE), a(window).off(J.END), u(this, g).half ? u(this, g).$node.insertAfter(u(this, g).activeNode) : u(this, g).$node.insertBefore(u(this, g).activeNode), M(this, g, void 0), f(this, N, R).call(this);
};
const $o = `.json-editor{--json-editor-font-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";--json-editor-font-eng: "Helvetica Neue", sans-serif;--json-editor-color-base: hsl(0 0% 13%);--json-editor-color-blur: hsl(0 0% 67%);--json-editor-color-object: hsl(174 66% 39%);--json-editor-color-array: hsl(191 75% 53%);--json-editor-color-string: hsl(5 87% 59%);--json-editor-color-number: hsl(33 89% 55%);--json-editor-color-boolean: hsl(45 89% 54%);--json-editor-color-null: hsl(0 0% 58%);--json-editor-color-active: hsla(0 0% 0% / 6%);--json-editor-color-focus: hsl(10, 95%, 54%);--json-editor-color-error: hsl(0 96% 52%);--json-editor-font-size: 13px;font-family:var(--json-editor-font-base);color:var(--json-editor-color-base);font-size:16px;line-height:1.15}.json-editor>ul{position:relative;margin:0;padding:0;list-style:none}.json-editor.dragging{cursor:move;-webkit-user-select:none;user-select:none}.json-editor.dragging *{cursor:move!important;-webkit-user-select:none!important;user-select:none!important}.json-editor[data-theme=dark]{--json-editor-color-base: hsl(0 0% 95%);--json-editor-color-blur: hsl(0 0% 72%);--json-editor-color-active: hsla(0 0% 100% / 15%);--json-editor-color-error: hsl(0, 100%, 60%);--json-editor-color-focus: hsl(161, 94%, 55%)}@media (prefers-color-scheme: dark){.json-editor[data-theme=system],.json-editor:not([data-theme]),.json-editor[data-theme=""]{--json-editor-color-base: hsl(0 0% 95%);--json-editor-color-blur: hsl(0 0% 72%);--json-editor-color-active: hsla(0 0% 100% / 15%);--json-editor-color-error: hsl(0, 100%, 60%);--json-editor-color-focus: hsl(161, 94%, 55%)}}.json-editor .type-icon{display:grid;width:var(--type-size, 24px);height:var(--type-size, 24px);place-content:center;box-sizing:border-box;border-radius:4px;background:var(--type-icon-color, #aaa)}.json-editor .type-icon svg{display:block;box-sizing:border-box;color:#fff;width:var(--type-icon-width)}.json-editor .type-icon--object{--type-icon-color: var(--json-editor-color-object);--type-icon-width: calc(var(--type-icon-size, 10px) + 1px)}.json-editor .type-icon--array{--type-icon-color: var(--json-editor-color-array);--type-icon-width: var(--type-icon-size, 10px)}.json-editor .type-icon--string{--type-icon-color: var(--json-editor-color-string);--type-icon-width: calc(var(--type-icon-size, 10px) - 2px)}.json-editor .type-icon--number{--type-icon-color: var(--json-editor-color-number);--type-icon-width: calc(var(--type-icon-size, 10px) - 1px)}.json-editor .type-icon--boolean{--type-icon-color: var(--json-editor-color-boolean);--type-icon-width: calc(var(--type-icon-size, 10px) - 3px)}.json-editor .type-icon--null{--type-icon-color: var(--json-editor-color-null);--type-icon-width: calc(var(--type-icon-size, 10px) - 2px)}.json-editor .label-field{margin:-4px 0;padding:4px 6px;min-width:var(--label-min-width, unset);min-height:24px;outline:none;font-size:var(--json-editor-font-size);color:var(--json-editor-color-base);line-height:1.42;box-sizing:border-box;border-radius:2px;background-color:#0000;box-shadow:0 0 0 .5px #0000;transition:background-color .16s ease-out,box-shadow .2s ease-out;cursor:text;word-break:break-all}.json-editor .label-field:hover,.json-editor .label-field:focus{background-color:var(--json-editor-color-active)}.json-editor .label-field:empty:before{content:attr(data-placeholder);color:var(--json-editor-color-blur)}.json-editor .label-field[type=number]{border:none;width:120px}.json-editor .label-field[type=number]::-webkit-outer-spin-button,.json-editor .label-field[type=number]::-webkit-inner-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none}.json-editor .label-null{display:block;padding:0 6px;color:var(--json-editor-color-blur);font-style:normal;letter-spacing:-.5px;-webkit-user-select:none;user-select:none;font-size:var(--json-editor-font-size)}.json-editor .label-switch{--switch-width: 36px;--switch-height: 18px;--switch-offset: 3px;--switch-speed: .1s;--switch-unit-size: calc(var(--switch-height) - (var(--switch-offset) * 2));display:block;margin:0 0 0 6px;padding:2px 0;background:none;border:none;font-size:0;cursor:pointer}.json-editor .label-switch span{display:block;position:relative;padding:var(--switch-offset);width:var(--switch-width);height:var(--switch-height);border-radius:calc(var(--switch-height) * .5);box-shadow:inset 0 0 0 1px var(--json-editor-color-blur);transition:box-shadow .16s ease-out;box-sizing:border-box}.json-editor .label-switch i{display:block;width:var(--switch-unit-size);height:var(--switch-unit-size);background-color:var(--switch-unit-color, var(--json-editor-color-blur));border-radius:var(--switch-unit-size);pointer-events:none;transform:translate(var(--switch-unit-x));transition:transform var(--switch-speed) ease-out,width var(--switch-speed) ease-out,background-color .24s ease-out}.json-editor .label-switch:active span{box-shadow:inset 0 0 0 1px var(--json-editor-color-active)}.json-editor .label-switch:active[data-value=false] i{width:calc(var(--switch-unit-size) + 6px)}.json-editor .label-switch:active[data-value=true] i{width:calc(var(--switch-unit-size) + 6px);transform:translate(calc(var(--switch-width) - var(--switch-offset) * 2 - var(--switch-unit-size) - 6px))}.json-editor .label-switch:focus-visible{outline:none}.json-editor .label-switch:focus-visible span{outline:2px solid var(--json-editor-color-focus);outline-offset:1px}.json-editor .label-switch[data-value=false]{--switch-unit-x: 0}.json-editor .label-switch[data-value=true]{--switch-unit-x: calc(var(--switch-width) - (var(--switch-offset) * 2) - var(--switch-unit-size));--switch-unit-color: var(--json-editor-color-focus)}.json-editor .node{position:relative}.json-editor .node__body{position:relative;display:flex;align-items:center;box-sizing:border-box;padding:4px 0;transition:opacity .12s ease-out}.json-editor .node__body>.sort{display:block;box-sizing:border-box;cursor:move;margin:-4px 4px -4px 0;padding:4px 0}.json-editor .node__body>.sort svg{display:block;width:24px;color:var(--json-editor-color-base)}.json-editor .node__body>.sort:active{opacity:.5}.json-editor .node__body>.type{position:relative}.json-editor .node__body>.type>button{display:block;margin:-2px;padding:2px;box-sizing:border-box;border:none;background:none;outline:none;cursor:pointer;transition:opacity .12s ease-out;border-radius:6px}.json-editor .node__body>.type>button:active{opacity:.5}.json-editor .node__body>.type>button:focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-1px}.json-editor .node__body>.type.open>button{opacity:.5}.json-editor .node__body>.fold{display:block;width:28px;height:28px;margin:-8px -8px -8px 0;padding:0;background:none;border:none;box-sizing:border-box;cursor:pointer}.json-editor .node__body>.fold:focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-6px}.json-editor .node__body>.fold svg{display:block;margin:0 auto;width:20px;rotate:0deg;box-sizing:border-box;transition:rotate,.16s ease-out;color:var(--json-editor-color-base)}.json-editor .node__body>.key{margin-left:6px;--label-min-width: 48px}.json-editor .node__body>.count{display:block;margin:0;pointer-events:none;padding:0 0 0 8px;color:var(--json-editor-color-blur);font-style:normal;-webkit-user-select:none;user-select:none;font-size:14px;line-height:normal}.json-editor .node__body>.value{display:flex;align-items:center;gap:0 6px;font-size:var(--json-editor-font-size);line-height:1.42;--label-min-width: 78px}.json-editor .node__body>.value:before{content:":"}.json-editor .node__children>.tree{--color-line: hsla(0 0% 72% / 100%);position:relative;display:none;margin:0;padding:0 0 0 26px;list-style:none;box-sizing:border-box}.json-editor .node__children>.tree:not(:empty):before{content:"";display:block;position:absolute;left:11px;top:6px;bottom:14px;width:4px;border-width:0 0 0 1px;border-style:dashed;border-color:var(--color-line)}.json-editor .node__children>.tree:not(:empty):after{content:"";display:block;position:absolute;left:9px;bottom:13px;width:5px;height:5px;background:var(--color-line);border-radius:50%}.json-editor .node.open>.node__body .fold svg{rotate:90deg}.json-editor .node.open>.node__children>.tree{display:grid}.json-editor .node.open>.node__children>.tree:empty{display:none}.json-editor .node[data-type=object]>.node__body .count:before{content:"{"}.json-editor .node[data-type=object]>.node__body .count:after{content:"}"}.json-editor .node[data-type=object]>.node__body .value{display:none}.json-editor .node[data-type=array]>.node__body .count:before{content:"["}.json-editor .node[data-type=array]>.node__body .count:after{content:"]"}.json-editor .node[data-type=array]>.node__body .value{display:none}.json-editor .node[data-type=array]>.node__children>.tree>.node>.node__body>.key{display:none}.json-editor .node[data-type=string]>.node__body .fold,.json-editor .node[data-type=number]>.node__body .fold,.json-editor .node[data-type=boolean]>.node__body .fold,.json-editor .node[data-type=null]>.node__body .fold{display:none}.json-editor .node[data-type=string]>.node__children>.tree,.json-editor .node[data-type=number]>.node__children>.tree,.json-editor .node[data-type=boolean]>.node__children>.tree,.json-editor .node[data-type=null]>.node__children>.tree{display:none}.json-editor .node:before,.json-editor .node:after{display:none;content:"";position:absolute;left:0;right:0;height:4px;background-color:var(--json-editor-color-focus);border-radius:4px}.json-editor .node:before{top:-2px}.json-editor .node:after{bottom:-2px}.json-editor .node.drag-over-start:before{display:block}.json-editor .node.drag-over-end:after{display:block}.json-editor.dragging .node:not(.root)>.node__body{opacity:.25}.json-editor.dragging .drag-area>.node>.node__body{opacity:unset}.json-editor .drag-select{background-color:#00000014}.json-editor[data-theme=dark] .node__children>.tree{--color-line: hsla(0 0% 36% / 100%)}.json-editor[data-theme=dark] .drag-select{background-color:#ffffff14}@media (prefers-color-scheme: dark){.json-editor[data-theme=system] .node__children>.tree,.json-editor:not([data-theme]) .node__children>.tree,.json-editor[data-theme=""] .node__children>.tree{--color-line: hsla(0 0% 36% / 100%)}.json-editor[data-theme=system] .drag-select,.json-editor:not([data-theme]) .drag-select,.json-editor[data-theme=""] .drag-select{background-color:#ffffff14}}.json-editor .context{--context-border-radius: 4px;--context-color-line: hsl(0 0% 88%);--context-color-item-active: hsl(0 0% 92%);--context-color-bg: hsl(0 0% 100%);position:absolute;top:-8px;right:-8px;z-index:2}.json-editor .context.is-root{left:28px}.json-editor .context ol{position:absolute;left:0;margin:0;padding:0;list-style:none;background:var(--context-color-line);border-radius:var(--context-border-radius);box-shadow:0 4px 32px #0000001a,0 2px 8px #0003,0 0 0 1px #0000000d}.json-editor .context li{position:relative}.json-editor .context li:not(:first-child){margin-top:1px}.json-editor .context li:first-child>button{border-top-left-radius:var(--context-border-radius);border-top-right-radius:var(--context-border-radius)}.json-editor .context li:last-child>button{border-bottom-left-radius:var(--context-border-radius);border-bottom-right-radius:var(--context-border-radius)}.json-editor .context li.type>button{grid-template-columns:auto 1fr;gap:8px}.json-editor .context li.type>button:disabled>*{opacity:.25}.json-editor .context li.dropdown:hover>button,.json-editor .context li.dropdown:focus-within>button{background-color:var(--context-color-item-active)}.json-editor .context li.dropdown:hover>.children,.json-editor .context li.dropdown:focus-within>.children{opacity:1;pointer-events:auto}.json-editor .context li.dropdown>button{grid-template-columns:1fr auto}.json-editor .context li.remove .label{color:var(--json-editor-color-error)}.json-editor .context button{display:grid;align-items:center;margin:0;padding:8px 12px;min-width:150px;text-align:left;box-sizing:border-box;background-color:var(--context-color-bg);border:none;cursor:pointer;border-radius:0;transition:background-color .12s ease-out;font-family:var(--json-editor-font-base);font-size:12px;letter-spacing:-.25px;outline:none;color:var(--json-editor-color-base)}.json-editor .context button:hover,.json-editor .context button:active{background-color:var(--context-color-item-active)}.json-editor .context button:not(.parent):focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-2px}.json-editor .context button:disabled{cursor:default}.json-editor .context .label{display:block;font-style:normal;pointer-events:none;-webkit-user-select:none;user-select:none}.json-editor .context .type-icon{--type-size: 16px;--type-icon-size: 8px}.json-editor .context .arrow{display:block;margin:0 -4px 0 0;pointer-events:none}.json-editor .context .arrow svg{display:block;width:16px}.json-editor .context .children{position:absolute;top:-12px;right:4px;z-index:2;pointer-events:none;opacity:0;transition:opacity .24s ease-out}.json-editor .context .children ol{top:0;left:0}.json-editor[data-theme=dark] .context{--context-color-line: hsl(0 0% 24%);--context-color-bg: hsl(0 0% 16%);--context-color-item-active: hsl(0 0% 24%)}@media (prefers-color-scheme: dark){.json-editor[data-theme=system] .context,.json-editor:not([data-theme]) .context,.json-editor[data-theme=""] .context{--context-color-line: hsl(0 0% 24%);--context-color-bg: hsl(0 0% 16%);--context-color-item-active: hsl(0 0% 24%)}}
`;
var _t, Oe;
class Mo extends HTMLElement {
  constructor() {
    super();
    m(this, _t);
    this.attachShadow({ mode: "open" });
    const o = document.createElement("template");
    o.innerHTML = '<div id="json-editor"></div>';
    const n = new CSSStyleSheet();
    n.replaceSync($o), this.shadowRoot.appendChild(o.content.cloneNode(!0)), this.shadowRoot.adoptedStyleSheets = [n], this.root = this.shadowRoot.childNodes[0], this.ready = !1, this.data = {}, this.options = {
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
  attributeChangedCallback(o, n, i) {
    if (n !== i)
      switch (o) {
        case "src":
          this.data = je(i), this.core && this.core.replace(this.data, !1);
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
    this.core = new Oo(this.root, this.options), this.core.replace(this.data, !0), this.core.preview = (o) => {
      this.data = o, f(this, _t, Oe).call(this, "update", { data: o });
    };
  }
  /**
   * unmounted component
   */
  disconnectedCallback() {
    console.warn("disconnectedCallback()"), this.core && (this.core.destroy(), delete this.core, this.root.innerHTML = "");
  }
}
_t = new WeakSet(), Oe = function(o, n) {
  this.dispatchEvent(new CustomEvent(o, {
    detail: n
  }));
};
export {
  Mo as default
};
