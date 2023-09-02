var _e = Object.defineProperty;
var Be = (t, e, n) => e in t ? _e(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var F = (t, e, n) => (Be(t, typeof e != "symbol" ? e + "" : e, n), n), Ot = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var g = (t, e, n) => (Ot(t, e, "read from private field"), n ? n.call(t) : e.get(t)), C = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, $ = (t, e, n, i) => (Ot(t, e, "write to private field"), i ? i.call(t, n) : e.set(t, n), n);
var h = (t, e, n) => (Ot(t, e, "access private method"), n);
const O = document, pt = window, ie = O.documentElement, j = O.createElement.bind(O), se = j("div"), St = j("table"), $e = j("tbody"), Gt = j("tr"), { isArray: At, prototype: re } = Array, { concat: Me, filter: Ht, indexOf: oe, map: ce, push: Pe, slice: ae, some: It, splice: De } = re, He = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ie = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ue = /<.+>/, je = /^\w+$/;
function Ut(t, e) {
  const n = Ve(e);
  return !t || !n && !U(e) && !w(e) ? [] : !n && Ie.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && je.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class Lt {
  constructor(e, n) {
    if (!e)
      return;
    if ($t(e))
      return e;
    let i = e;
    if (E(e)) {
      const s = n || O;
      if (i = He.test(e) && U(s) ? s.getElementById(e.slice(1).replace(/\\/g, "")) : Ue.test(e) ? fe(e) : $t(s) ? s.find(e) : E(s) ? o(s).find(e) : Ut(e, s), !i)
        return;
    } else if (V(e))
      return this.ready(e);
    (i.nodeType || i === pt) && (i = [i]), this.length = i.length;
    for (let s = 0, r = this.length; s < r; s++)
      this[s] = i[s];
  }
  init(e, n) {
    return new Lt(e, n);
  }
}
const c = Lt.prototype, o = c.init;
o.fn = o.prototype = c;
c.length = 0;
c.splice = De;
typeof Symbol == "function" && (c[Symbol.iterator] = re[Symbol.iterator]);
function $t(t) {
  return t instanceof Lt;
}
function et(t) {
  return !!t && t === t.window;
}
function U(t) {
  return !!t && t.nodeType === 9;
}
function Ve(t) {
  return !!t && t.nodeType === 11;
}
function w(t) {
  return !!t && t.nodeType === 1;
}
function Ye(t) {
  return !!t && t.nodeType === 3;
}
function Je(t) {
  return typeof t == "boolean";
}
function V(t) {
  return typeof t == "function";
}
function E(t) {
  return typeof t == "string";
}
function R(t) {
  return t === void 0;
}
function ot(t) {
  return t === null;
}
function ue(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function jt(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
o.isWindow = et;
o.isFunction = V;
o.isArray = At;
o.isNumeric = ue;
o.isPlainObject = jt;
function v(t, e, n) {
  if (n) {
    let i = t.length;
    for (; i--; )
      if (e.call(t[i], i, t[i]) === !1)
        return t;
  } else if (jt(t)) {
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
c.each = function(t) {
  return v(this, t);
};
c.empty = function() {
  return this.each((t, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function gt(...t) {
  const e = Je(t[0]) ? t.shift() : !1, n = t.shift(), i = t.length;
  if (!n)
    return {};
  if (!i)
    return gt(e, o, n);
  for (let s = 0; s < i; s++) {
    const r = t[s];
    for (const u in r)
      e && (At(r[u]) || jt(r[u])) ? ((!n[u] || n[u].constructor !== r[u].constructor) && (n[u] = new r[u].constructor()), gt(e, n[u], r[u])) : n[u] = r[u];
  }
  return n;
}
o.extend = gt;
c.extend = function(t) {
  return gt(c, t);
};
const Fe = /\S+/g;
function Tt(t) {
  return E(t) ? t.match(Fe) || [] : [];
}
c.toggleClass = function(t, e) {
  const n = Tt(t), i = !R(e);
  return this.each((s, r) => {
    w(r) && v(n, (u, a) => {
      i ? e ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
c.addClass = function(t) {
  return this.toggleClass(t, !0);
};
c.removeAttr = function(t) {
  const e = Tt(t);
  return this.each((n, i) => {
    w(i) && v(e, (s, r) => {
      i.removeAttribute(r);
    });
  });
};
function Ze(t, e) {
  if (t) {
    if (E(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !w(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return ot(n) ? void 0 : n;
      }
      return R(e) ? this : ot(e) ? this.removeAttr(t) : this.each((n, i) => {
        w(i) && i.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
c.attr = Ze;
c.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
c.hasClass = function(t) {
  return !!t && It.call(this, (e) => w(e) && e.classList.contains(t));
};
c.get = function(t) {
  return R(t) ? ae.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
};
c.eq = function(t) {
  return o(this.get(t));
};
c.first = function() {
  return this.eq(0);
};
c.last = function() {
  return this.eq(-1);
};
function We(t) {
  return R(t) ? this.get().map((e) => w(e) || Ye(e) ? e.textContent : "").join("") : this.each((e, n) => {
    w(n) && (n.textContent = t);
  });
}
c.text = We;
function S(t, e, n) {
  if (!w(t))
    return;
  const i = pt.getComputedStyle(t, null);
  return n ? i.getPropertyValue(e) || void 0 : i[e] || t.style[e];
}
function T(t, e) {
  return parseInt(S(t, e), 10) || 0;
}
function Kt(t, e) {
  return T(t, `border${e ? "Left" : "Top"}Width`) + T(t, `padding${e ? "Left" : "Top"}`) + T(t, `padding${e ? "Right" : "Bottom"}`) + T(t, `border${e ? "Right" : "Bottom"}Width`);
}
const _t = {};
function Ge(t) {
  if (_t[t])
    return _t[t];
  const e = j(t);
  O.body.insertBefore(e, null);
  const n = S(e, "display");
  return O.body.removeChild(e), _t[t] = n !== "none" ? n : "block";
}
function qt(t) {
  return S(t, "display") === "none";
}
function le(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function xt(t) {
  return E(t) ? (e, n) => le(n, t) : V(t) ? t : $t(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
c.filter = function(t) {
  const e = xt(t);
  return o(Ht.call(this, (n, i) => e.call(n, i, n)));
};
function M(t, e) {
  return e ? t.filter(e) : t;
}
c.detach = function(t) {
  return M(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const Ke = /^\s*<(\w+)[^>]*>/, qe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, zt = {
  "*": se,
  tr: $e,
  td: Gt,
  th: Gt,
  thead: St,
  tbody: St,
  tfoot: St
};
function fe(t) {
  if (!E(t))
    return [];
  if (qe.test(t))
    return [j(RegExp.$1)];
  const e = Ke.test(t) && RegExp.$1, n = zt[e] || zt["*"];
  return n.innerHTML = t, o(n.childNodes).detach().get();
}
o.parseHTML = fe;
c.has = function(t) {
  const e = E(t) ? (n, i) => Ut(t, i).length : (n, i) => i.contains(t);
  return this.filter(e);
};
c.not = function(t) {
  const e = xt(t);
  return this.filter((n, i) => (!E(t) || w(i)) && !e.call(i, n, i));
};
function _(t, e, n, i) {
  const s = [], r = V(e), u = i && xt(i);
  for (let a = 0, d = t.length; a < d; a++)
    if (r) {
      const l = e(t[a]);
      l.length && Pe.apply(s, l);
    } else {
      let l = t[a][e];
      for (; l != null && !(i && u(-1, l)); )
        s.push(l), l = n ? l[e] : null;
    }
  return s;
}
function he(t) {
  return t.multiple && t.options ? _(Ht.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function ze(t) {
  return arguments.length ? this.each((e, n) => {
    const i = n.multiple && n.options;
    if (i || we.test(n.type)) {
      const s = At(t) ? ce.call(t, String) : ot(t) ? [] : [String(t)];
      i ? v(n.options, (r, u) => {
        u.selected = s.indexOf(u.value) >= 0;
      }, !0) : n.checked = s.indexOf(n.value) >= 0;
    } else
      n.value = R(t) || ot(t) ? "" : t;
  }) : this[0] && he(this[0]);
}
c.val = ze;
c.is = function(t) {
  const e = xt(t);
  return It.call(this, (n, i) => e.call(n, i, n));
};
o.guid = 1;
function x(t) {
  return t.length > 1 ? Ht.call(t, (e, n, i) => oe.call(i, e) === n) : t;
}
o.unique = x;
c.add = function(t, e) {
  return o(x(this.get().concat(o(t, e).get())));
};
c.children = function(t) {
  return M(o(x(_(this, (e) => e.children))), t);
};
c.parent = function(t) {
  return M(o(x(_(this, "parentNode"))), t);
};
c.index = function(t) {
  const e = t ? o(t)[0] : this[0], n = t ? this : o(e).parent().children();
  return oe.call(n, e);
};
c.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const n = this.parent();
  return n.length ? n.closest(t) : e;
};
c.siblings = function(t) {
  return M(o(x(_(this, (e) => o(e).parent().children().not(e)))), t);
};
c.find = function(t) {
  return o(x(_(this, (e) => Ut(t, e))));
};
const Xe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Qe = /^$|^module$|\/(java|ecma)script/i, tn = ["type", "src", "nonce", "noModule"];
function en(t, e) {
  const n = o(t);
  n.filter("script").add(n.find("script")).each((i, s) => {
    if (Qe.test(s.type) && ie.contains(s)) {
      const r = j("script");
      r.text = s.textContent.replace(Xe, ""), v(tn, (u, a) => {
        s[a] && (r[a] = s[a]);
      }), e.head.insertBefore(r, null), e.head.removeChild(r);
    }
  });
}
function nn(t, e, n, i, s) {
  i ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), s && en(e, t.ownerDocument);
}
function P(t, e, n, i, s, r, u, a) {
  return v(t, (d, l) => {
    v(o(l), (p, A) => {
      v(o(e), (L, b) => {
        const B = n ? A : b, m = n ? b : A, Y = n ? p : L;
        nn(B, Y ? m.cloneNode(!0) : m, i, s, !Y);
      }, a);
    }, u);
  }, r), e;
}
c.after = function() {
  return P(arguments, this, !1, !1, !1, !0, !0);
};
c.append = function() {
  return P(arguments, this, !1, !1, !0);
};
function sn(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (R(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, i) => {
    w(i) && (e ? o(i).empty().append(t) : i.innerHTML = t);
  });
}
c.html = sn;
c.appendTo = function(t) {
  return P(arguments, this, !0, !1, !0);
};
c.wrapInner = function(t) {
  return this.each((e, n) => {
    const i = o(n), s = i.contents();
    s.length ? s.wrapAll(t) : i.append(t);
  });
};
c.before = function() {
  return P(arguments, this, !1, !0);
};
c.wrapAll = function(t) {
  let e = o(t), n = e[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(e), this.appendTo(n);
};
c.wrap = function(t) {
  return this.each((e, n) => {
    const i = o(t)[0];
    o(n).wrapAll(e ? i.cloneNode(!0) : i);
  });
};
c.insertAfter = function(t) {
  return P(arguments, this, !0, !1, !1, !1, !1, !0);
};
c.insertBefore = function(t) {
  return P(arguments, this, !0, !0);
};
c.prepend = function() {
  return P(arguments, this, !1, !0, !0, !0, !0);
};
c.prependTo = function(t) {
  return P(arguments, this, !0, !0, !0, !1, !1, !0);
};
c.contents = function() {
  return o(x(_(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
c.next = function(t, e, n) {
  return M(o(x(_(this, "nextElementSibling", e, n))), t);
};
c.nextAll = function(t) {
  return this.next(t, !0);
};
c.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
c.parents = function(t, e) {
  return M(o(x(_(this, "parentElement", !0, e))), t);
};
c.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
c.prev = function(t, e, n) {
  return M(o(x(_(this, "previousElementSibling", e, n))), t);
};
c.prevAll = function(t) {
  return this.prev(t, !0);
};
c.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
c.map = function(t) {
  return o(Me.apply([], ce.call(this, (e, n) => t.call(e, n, e))));
};
c.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
c.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && S(n, "position") === "static"; )
      n = n.offsetParent;
    return n || ie;
  });
};
c.slice = function(t, e) {
  return o(ae.call(this, t, e));
};
const rn = /-([a-z])/g;
function Vt(t) {
  return t.replace(rn, (e, n) => n.toUpperCase());
}
c.ready = function(t) {
  const e = () => setTimeout(t, 0, o);
  return O.readyState !== "loading" ? e() : O.addEventListener("DOMContentLoaded", e), this;
};
c.unwrap = function() {
  return this.parent().each((t, e) => {
    if (e.tagName === "BODY")
      return;
    const n = o(e);
    n.replaceWith(n.children());
  }), this;
};
c.offset = function() {
  const t = this[0];
  if (!t)
    return;
  const e = t.getBoundingClientRect();
  return {
    top: e.top + pt.pageYOffset,
    left: e.left + pt.pageXOffset
  };
};
c.position = function() {
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
const de = {
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
c.prop = function(t, e) {
  if (t) {
    if (E(t))
      return t = de[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, i) => {
        i[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
c.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[de[t] || t];
  });
};
const on = /^--/;
function Yt(t) {
  return on.test(t);
}
const Bt = {}, { style: cn } = se, an = ["webkit", "moz", "ms"];
function un(t, e = Yt(t)) {
  if (e)
    return t;
  if (!Bt[t]) {
    const n = Vt(t), i = `${n[0].toUpperCase()}${n.slice(1)}`, s = `${n} ${an.join(`${i} `)}${i}`.split(" ");
    v(s, (r, u) => {
      if (u in cn)
        return Bt[t] = u, !1;
    });
  }
  return Bt[t];
}
const ln = {
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
function pe(t, e, n = Yt(t)) {
  return !n && !ln[t] && ue(e) ? `${e}px` : e;
}
function fn(t, e) {
  if (E(t)) {
    const n = Yt(t);
    return t = un(t, n), arguments.length < 2 ? this[0] && S(this[0], t, n) : t ? (e = pe(t, e, n), this.each((i, s) => {
      w(s) && (n ? s.style.setProperty(t, e) : s.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
c.css = fn;
function ge(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const hn = /^\s+|\s+$/;
function Xt(t, e) {
  const n = t.dataset[e] || t.dataset[Vt(e)];
  return hn.test(n) ? n : ge(JSON.parse, n);
}
function dn(t, e, n) {
  n = ge(JSON.stringify, n), t.dataset[Vt(e)] = n;
}
function pn(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const i in this[0].dataset)
      n[i] = Xt(this[0], i);
    return n;
  }
  if (E(t))
    return arguments.length < 2 ? this[0] && Xt(this[0], t) : R(e) ? this : this.each((n, i) => {
      dn(i, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
c.data = pn;
function ye(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
v([!0, !1], (t, e) => {
  v(["Width", "Height"], (n, i) => {
    const s = `${e ? "outer" : "inner"}${i}`;
    c[s] = function(r) {
      if (this[0])
        return et(this[0]) ? e ? this[0][`inner${i}`] : this[0].document.documentElement[`client${i}`] : U(this[0]) ? ye(this[0], i) : this[0][`${e ? "offset" : "client"}${i}`] + (r && e ? T(this[0], `margin${n ? "Top" : "Left"}`) + T(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
v(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  c[n] = function(i) {
    if (!this[0])
      return R(i) ? void 0 : this;
    if (!arguments.length)
      return et(this[0]) ? this[0].document.documentElement[`client${e}`] : U(this[0]) ? ye(this[0], e) : this[0].getBoundingClientRect()[n] - Kt(this[0], !t);
    const s = parseInt(i, 10);
    return this.each((r, u) => {
      if (!w(u))
        return;
      const a = S(u, "boxSizing");
      u.style[n] = pe(n, s + (a === "border-box" ? Kt(u, !t) : 0));
    });
  };
});
const Qt = "___cd";
c.toggle = function(t) {
  return this.each((e, n) => {
    if (!w(n))
      return;
    const i = qt(n);
    (R(t) ? i : t) ? (n.style.display = n[Qt] || "", qt(n) && (n.style.display = Ge(n.tagName))) : i || (n[Qt] = S(n, "display"), n.style.display = "none");
  });
};
c.hide = function() {
  return this.toggle(!1);
};
c.show = function() {
  return this.toggle(!0);
};
const te = "___ce", Jt = ".", Ft = { focus: "focusin", blur: "focusout" }, me = { mouseenter: "mouseover", mouseleave: "mouseout" }, gn = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Zt(t) {
  return me[t] || Ft[t] || t;
}
function Wt(t) {
  const e = t.split(Jt);
  return [e[0], e.slice(1).sort()];
}
c.trigger = function(t, e) {
  if (E(t)) {
    const [i, s] = Wt(t), r = Zt(i);
    if (!r)
      return this;
    const u = gn.test(r) ? "MouseEvents" : "HTMLEvents";
    t = O.createEvent(u), t.initEvent(r, !0, !0), t.namespace = s.join(Jt), t.___ot = i;
  }
  t.___td = e;
  const n = t.___ot in Ft;
  return this.each((i, s) => {
    n && V(s[t.___ot]) && (s[`___i${t.type}`] = !0, s[t.___ot](), s[`___i${t.type}`] = !1), s.dispatchEvent(t);
  });
};
function be(t) {
  return t[te] = t[te] || {};
}
function yn(t, e, n, i, s) {
  const r = be(t);
  r[e] = r[e] || [], r[e].push([n, i, s]), t.addEventListener(e, s);
}
function Ce(t, e) {
  return !e || !It.call(e, (n) => t.indexOf(n) < 0);
}
function yt(t, e, n, i, s) {
  const r = be(t);
  if (e)
    r[e] && (r[e] = r[e].filter(([u, a, d]) => {
      if (s && d.guid !== s.guid || !Ce(u, n) || i && i !== a)
        return !0;
      t.removeEventListener(e, d);
    }));
  else
    for (e in r)
      yt(t, e, n, i, s);
}
c.off = function(t, e, n) {
  if (R(t))
    this.each((i, s) => {
      !w(s) && !U(s) && !et(s) || yt(s);
    });
  else if (E(t))
    V(e) && (n = e, e = ""), v(Tt(t), (i, s) => {
      const [r, u] = Wt(s), a = Zt(r);
      this.each((d, l) => {
        !w(l) && !U(l) && !et(l) || yt(l, a, u, e, n);
      });
    });
  else
    for (const i in t)
      this.off(i, t[i]);
  return this;
};
c.remove = function(t) {
  return M(this, t).detach().off(), this;
};
c.replaceWith = function(t) {
  return this.before(t).remove();
};
c.replaceAll = function(t) {
  return o(t).replaceWith(this), this;
};
function mn(t, e, n, i, s) {
  if (!E(t)) {
    for (const r in t)
      this.on(r, e, n, t[r], s);
    return this;
  }
  return E(e) || (R(e) || ot(e) ? e = "" : R(n) ? (n = e, e = "") : (i = n, n = e, e = "")), V(i) || (i = n, n = void 0), i ? (v(Tt(t), (r, u) => {
    const [a, d] = Wt(u), l = Zt(a), p = a in me, A = a in Ft;
    l && this.each((L, b) => {
      if (!w(b) && !U(b) && !et(b))
        return;
      const B = function(m) {
        if (m.target[`___i${m.type}`])
          return m.stopImmediatePropagation();
        if (m.namespace && !Ce(d, m.namespace.split(Jt)) || !e && (A && (m.target !== b || m.___ot === l) || p && m.relatedTarget && b.contains(m.relatedTarget)))
          return;
        let Y = b;
        if (e) {
          let J = m.target;
          for (; !le(J, e); )
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
        const Se = i.call(Y, m, m.___td);
        s && yt(b, l, d, e, B), Se === !1 && (m.preventDefault(), m.stopPropagation());
      };
      B.guid = i.guid = i.guid || o.guid++, yn(b, l, d, e, B);
    });
  }), this) : this;
}
c.on = mn;
function bn(t, e, n, i) {
  return this.on(t, e, n, i, !0);
}
c.one = bn;
const Cn = /\r?\n/g;
function wn(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(Cn, `\r
`))}`;
}
const vn = /file|reset|submit|button|image/i, we = /radio|checkbox/i;
c.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    v(n.elements || [n], (i, s) => {
      if (s.disabled || !s.name || s.tagName === "FIELDSET" || vn.test(s.type) || we.test(s.type) && !s.checked)
        return;
      const r = he(s);
      if (!R(r)) {
        const u = At(r) ? r : [r];
        v(u, (a, d) => {
          t += wn(s.name, d);
        });
      }
    });
  }), t.slice(1);
};
const Nn = {
  live: !1,
  // live update
  theme: "system"
  // system,light,dark
}, En = {
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
}, kn = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12L10 8L6 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', Rn = '<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-90, 10, 10)"><path d="M7 9L10 12L13 9" fill="currentColor"/><path d="M7 9L10 12L13 9H7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>', An = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', ve = {
  object: '<svg viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-object"><g transform="translate(0 1)"><path d="M2.296 5.166C2.296 7.238 3.78 8.162 5.166 8.162C6.538 8.162 8.022 7.238 8.022 5.166C8.022 3.094 6.538 2.156 5.166 2.156C3.78 2.156 2.296 3.094 2.296 5.166ZM0 5.18C0 2.03 2.366 0 5.166 0C7.952 0 10.318 2.03 10.318 5.18C10.318 8.316 7.952 10.346 5.166 10.346C2.366 10.346 0 8.316 0 5.18Z" fill="currentColor"/></g></svg>',
  array: '<svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-array"><path d="M7.728 9.926L6.902 7.658H2.87L2.044 9.926H0L3.808 0H6.048L9.828 9.926H7.728ZM4.886 2.142L3.514 5.894H6.258L4.886 2.142Z" fill="currentColor"/></svg>',
  string: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-string"><g transform="translate(0 1)"><path d="M7.39203 2.576L5.65603 3.108C5.55803 2.562 5.11003 1.708 3.85003 1.708C2.91203 1.708 2.29603 2.31 2.29603 2.968C2.29603 3.514 2.64603 3.948 3.37403 4.088L4.76003 4.354C6.56603 4.704 7.53203 5.88 7.53203 7.28C7.53203 8.806 6.25803 10.346 3.94803 10.346C1.31603 10.346 0.154031 8.652 3.05176e-05 7.238L1.79203 6.762C1.87603 7.742 2.56203 8.624 3.96203 8.624C4.99803 8.624 5.57203 8.106 5.57203 7.406C5.57203 6.832 5.13803 6.384 4.36803 6.23L2.98203 5.95C1.40003 5.628 0.378031 4.606 0.378031 3.108C0.378031 1.344 1.96003 0 3.83603 0C6.24403 0 7.16803 1.456 7.39203 2.576Z" fill="currentColor"/></g></svg>',
  number: '<svg viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-number"><path d="M8.47003 9.926H6.44003L1.93203 2.884V9.926H3.05176e-05V0H2.40803L6.53803 6.566V0H8.47003V9.926Z" fill="currentColor"/></svg>',
  boolean: '<svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-boolean"><path d="M3.05176e-05 0H3.57003C5.50203 0 6.59403 1.134 6.59403 2.674C6.59403 3.696 5.97803 4.522 5.15203 4.802C6.11803 5.04 6.90203 5.922 6.90203 7.154C6.90203 8.764 5.69803 9.926 3.83603 9.926H3.05176e-05V0ZM1.90403 4.102H3.27603C4.15803 4.102 4.69003 3.612 4.69003 2.856C4.69003 2.1 4.20003 1.624 3.26203 1.624H1.90403V4.102ZM1.90403 8.316H3.47203C4.41003 8.316 4.97003 7.826 4.97003 7.028C4.97003 6.244 4.46603 5.698 3.50003 5.698H1.90403V8.316Z" fill="currentColor"/></svg>',
  null: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-null"><g transform="translate(0 1.5)"><path d="M3.808 10.15C1.694 10.15 0 8.848 0 6.412V0H1.932V6.272C1.932 7.574 2.66 8.26 3.808 8.26C4.984 8.26 5.698 7.574 5.698 6.272V0H7.63V6.412C7.63 8.848 5.936 10.15 3.808 10.15Z" fill="currentColor"/></g></svg>'
}, Ln = [
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
var G, K, mt, Ne, bt, Ee, Ct, ke;
class Tn {
  constructor(e, n, i = !1) {
    C(this, mt);
    C(this, bt);
    C(this, Ct);
    C(this, G, void 0);
    F(this, "el", {
      node: void 0,
      type: void 0,
      dialog: void 0
    });
    C(this, K, void 0);
    $(this, G, e), this.el.node = o(n), $(this, K, String(this.el.node.data("type"))), this.el.type = this.el.node.find("& > .node__body > .type"), this.el.type.addClass("open"), this.el.dialog = h(this, mt, Ne).call(this, Ln, g(this, K), i), this.el.dialog.on("click", (s) => s.stopPropagation()), this.el.dialog.find("button").on("click", (s) => h(this, bt, Ee).call(this, s)), g(this, G).el.wrap.get(0).dispatchEvent(new CustomEvent("context", {
      detail: {
        body: this.el.dialog.get(0),
        node: this.el.node.get(0),
        type: g(this, K),
        isRoot: i,
        $: o
      }
    })), this.el.type.append(this.el.dialog), o(window).on(W.CLICK, (s) => this.close(s)), o(window).on(W.KEYUP, (s) => h(this, Ct, ke).call(this, s));
  }
  close() {
    this.el.type.removeClass("open"), this.el.dialog.remove(), o(window).off(W.CLICK), o(window).off(W.KEYUP), delete g(this, G).context;
  }
}
G = new WeakMap(), K = new WeakMap(), mt = new WeakSet(), Ne = function(e, n, i = !1) {
  function s(a, d) {
    let l = "";
    const { key: p, label: A, children: L } = a;
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
        b = ' class="type"', B = `<i class="type-icon type-icon--${p}">${ve[p]}</i>`, m = ` data-mode="${d}" data-type="${p}"`, d === "change-type" && p === n && (m = " disabled");
        break;
    }
    return l += `<li${b}>`, l += `<button type="button"${m}>`, l += B, l += `<em class="label">${A}</em>`, (p === "change-type" || p === "insert") && (l += `<span class="arrow">${kn}</span>`), l += "</button>", (L == null ? void 0 : L.length) > 0 && (l += '<div class="children">', l += r(L, p), l += "</div>"), l += "</li>", l;
  }
  function r(a, d = void 0) {
    let l = "<ol>";
    for (let p in a)
      l += s(a[p], d);
    return l += "</ol>", l;
  }
  let u = `<nav class="context${i ? " is-root" : ""}">`;
  return u += r(e), u += "</nav>", o(u);
}, bt = new WeakSet(), Ee = function(e) {
  const n = o(e.currentTarget), i = n.data("mode");
  let s = String(n.data("type"));
  s = s === "undefined" ? "" : s, this.close(), this.selectItem && typeof this.selectItem == "function" && this.selectItem(this.el.node, i, s);
}, Ct = new WeakSet(), ke = function(e) {
  e.code === "Escape" && this.close();
};
function ee(t) {
  return t == null ? "null" : Array.isArray(t) ? "array" : typeof t == "string" ? "string" : typeof t == "number" ? "number" : typeof t == "boolean" ? "boolean" : "object";
}
function xn(t) {
  try {
    return typeof t == "string" ? JSON.parse(t) : Array.isArray(t) ? Object.assign([], t) : o.isPlainObject(t) ? Object.assign({}, t) : {};
  } catch (e) {
    console.error("error", e.message);
  }
}
function On(t) {
  return Array.isArray(t) ? t.length : o.isPlainObject(t) ? Object.keys(t).length : 0;
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
var y, q, wt, Re, ct, Mt, z, lt, vt, Ae, Nt, Le, X, ft, D, it, at, Pt, N, k, ut, Dt, H, st, I, rt, Q, ht, tt, dt, Et, Te, kt, xe, Rt, Oe;
class _n {
  constructor(e, n = {}) {
    C(this, wt);
    C(this, ct);
    C(this, z);
    C(this, vt);
    C(this, Nt);
    C(this, X);
    C(this, D);
    C(this, at);
    C(this, N);
    C(this, ut);
    C(this, H);
    /**
     * NODE EVENTS
     */
    C(this, I);
    C(this, Q);
    C(this, tt);
    C(this, Et);
    C(this, kt);
    C(this, Rt);
    F(this, "$");
    F(this, "el", { wrap: null, body: null, tree: null });
    F(this, "options");
    F(this, "context");
    C(this, y, void 0);
    C(this, q, !1);
    this.$ = o, this.el.wrap = o(e), this.el.body = o('<div class="json-editor"></div>'), this.options = new Proxy(Object.assign({}, Nn, n), {
      get: (i, s) => i[s],
      set: h(this, wt, Re).bind(this)
    }), this.el.wrap.append(this.el.body), h(this, ct, Mt).call(this, this.options.theme), this.replace({}, !1);
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
    i = { ...En, ...i };
    const { open: u, callback: a } = i;
    e = o(e);
    const d = n.type === void 0 ? ee(n.value) : n.type, l = h(this, z, lt).call(this, d, !1);
    h(this, X, ft).call(this, l, { ...n, open: u, type: d }), h(this, I, rt).call(this, l), e.find("& > .node__children > ul").append(l), r && h(this, H, st).call(this, e), (d === f.ARRAY || d === f.OBJECT) && a && typeof a == "function" && a(l.get(0), n.value), s && h(this, N, k).call(this);
  }
  /**
   * remove node
   * @param {HTMLElement} $node
   * @param {boolean} useUpdate
   */
  removeNode(e, n = !0) {
    e = o(e);
    const i = e.parent().closest(".node");
    e.remove(), h(this, H, st).call(this, i), n && h(this, N, k).call(this);
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
    }, u = s.find("& > .node__children > .tree").html(), a = s.hasClass("root");
    s.empty(), s.html(h(this, z, lt).call(this, n, a).html()), u && s.find("& > .node__children > .tree").html(u), h(this, X, ft).call(this, s, r), h(this, I, rt).call(this, s), s.attr("data-type", n), i && h(this, N, k).call(this);
  }
  changeKey(e, n) {
    o(e).find(".key > div").text(n), h(this, N, k).call(this);
  }
  changeValue(e, n) {
    o(e).find(".value > div").text(n), h(this, N, k).call(this);
  }
  /**
   * duplicate
   * @param {HTMLElement} $target
   * @param {boolean} useUpdate
   */
  duplicate(e, n = !0) {
    e = o(e);
    const i = o(e.get(0).outerHTML);
    h(this, I, rt).call(this, i), e.after(i), h(this, H, st).call(this, e.parent().closest(".node")), n && h(this, N, k).call(this);
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
    this.el.tree && (this.el.body.empty(), this.replace({}, !1), h(this, N, k).call(this));
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
    this.el.body.empty(), e = xn(e);
    const i = h(this, vt, Ae).call(this, e);
    this.import(i, e, !1, !1), n && h(this, N, k).call(this);
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
      const a = { key: r, value: u }, d = {
        open: !1,
        callback: (l, p) => this.import(l, p, !1, !1)
      };
      this.addNode(e, a, d, !1, !1);
    }), s && h(this, H, st).call(this, e), i && h(this, N, k).call(this);
  }
  /**
   * export
   * @param {HTMLElement} $node
   * @param {boolean} json
   * @param {number|boolean} space (number: space count, true: tab, false: 0)
   * @return {array|object}
   */
  export(e = void 0, n, i = 2) {
    let s = h(this, ut, Dt).call(this, e);
    if (n) {
      let r = 2;
      return i === !0 ? r = "	" : typeof i === f.NUMBER && (r = i), JSON.stringify(s, null, r);
    } else
      return s;
  }
}
y = new WeakMap(), q = new WeakMap(), wt = new WeakSet(), Re = function(e, n, i) {
  switch (e[n] = i, n) {
    case "theme":
      h(this, ct, Mt).call(this, i);
      break;
  }
  return !0;
}, ct = new WeakSet(), Mt = function(e) {
  e = ["system", "light", "dark"].indexOf(e) > -1 ? e : "system", this.el.body.attr("data-theme", e);
}, z = new WeakSet(), lt = function(e, n = !1) {
  let i = `<li data-type="${e}" class="node${n ? " root" : ""}">`;
  return i += '<div class="node__body">', n || (i += `<div class="sort">${An}</div>`), i += '<div class="type"><button type="button"></button></div>', (e === f.OBJECT || e === f.ARRAY) && (i += `<button type="button" class="fold">${Rn}</button>`), n || (i += '<div class="key"></div>'), i += '<em class="count"></em>', n || (i += '<div class="value"></div>'), i += "</div>", i += '<div class="node__children"><ul class="tree"/></div>', i += "</li>", o(i);
}, vt = new WeakSet(), Ae = function(e) {
  const n = ee(e), i = h(this, z, lt).call(this, n, !0);
  return h(this, X, ft).call(this, i, {
    key: void 0,
    value: e,
    type: n,
    open: !0
  }), h(this, I, rt).call(this, i), this.el.tree = o("<ul/>"), this.el.tree.append(i), this.el.body.append(this.el.tree), i;
}, Nt = new WeakSet(), Le = function(e, n, i) {
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
}, X = new WeakSet(), ft = function(e, n) {
  const { key: i, value: s, type: r, open: u } = n, a = e.hasClass("root"), d = e.children(".node__body");
  if (d.find(".type > button").html(`<i class="type-icon type-icon--${r}">${ve[r]}</i>`), (r === f.OBJECT || r === f.ARRAY) && this.fold(e, u), !a) {
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
    const l = On(s);
    isNaN(l) || d.find(".count").text(l);
  }
}, D = new WeakSet(), it = function(e) {
  return String(e.data("type"));
}, at = new WeakSet(), Pt = function(e) {
  const n = h(this, D, it).call(this, e), i = e.find("& > .node__body > .value");
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
}, N = new WeakSet(), k = function() {
  this.options.live && this.el.wrap.get(0).dispatchEvent(new CustomEvent("update", {
    detail: h(this, ut, Dt).call(this)
  }));
}, ut = new WeakSet(), Dt = function(e) {
  const n = (r, u) => {
    let a = u === f.ARRAY ? [] : {};
    return r.find("& > .node__children > ul > li").each((l, p) => {
      if (!(u === f.ARRAY || u === f.OBJECT))
        return !0;
      p = o(p);
      const A = h(this, D, it).call(this, p);
      switch (A) {
        case f.OBJECT:
        case f.ARRAY:
          switch (u) {
            case f.ARRAY:
              a.push(n(p, A));
              break;
            case f.OBJECT:
              const b = p.find("& > .node__body > .key").text();
              b && (a[b] = n(p, A));
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
              a.push(L);
              break;
            case f.OBJECT:
              const b = p.find("& > .node__body > .key").text();
              b && (a[b] = L);
              break;
          }
          break;
      }
    }), a;
  };
  e = o(e);
  const i = (e == null ? void 0 : e.length) > 0 ? e : this.el.tree.children(".node"), s = h(this, D, it).call(this, i);
  return [f.OBJECT, f.ARRAY].includes(s) ? n(i, s) : void 0;
}, H = new WeakSet(), st = function(e) {
  e = o(e);
  const n = h(this, D, it).call(this, e);
  if (!(n === "object" || n === "array"))
    return;
  const i = e.find("& > .node__children > ul > li").length;
  isNaN(i) || e.find("& > .node__body > .count").text(i);
}, I = new WeakSet(), rt = function(e) {
  const n = e.find(".sort");
  n.length && n.on(Z.START, h(this, Et, Te).bind(this)), e.find(".type > button").on("click", async (a) => {
    const d = o(a.currentTarget);
    if (a.stopPropagation(), d.parent().hasClass("open"))
      this.context && this.context.close();
    else {
      this.context && this.context.close();
      const l = d.closest(".node").hasClass("root");
      this.context = new Tn(this, d.closest(".node"), l), this.context.selectItem = (p, A, L) => h(this, Nt, Le).call(this, p, A, L);
    }
  }), e.find(".fold").on("click", (a) => {
    const l = o(a.currentTarget).closest(".node");
    this.fold(l);
  });
  const i = e.find(".key > .label-field");
  i.length && i.on("keydown", (a) => {
    if (a.keyCode === 13 || ne(a))
      return a.preventDefault();
  }).on("input", (a) => h(this, Q, ht).call(this, a)).on("blur", (a) => h(this, tt, dt).call(this, a));
  const s = e.find(".value > .type-string");
  s.length && s.on("keydown", (a) => {
    if (ne(a))
      return a.preventDefault();
  }).on("input", (a) => h(this, Q, ht).call(this, a)).on("blur", (a) => h(this, tt, dt).call(this, a));
  const r = e.find(".value > .type-number");
  r.length && r.on("input", (a) => h(this, Q, ht).call(this, a)).on("blur", (a) => h(this, tt, dt).call(this, a));
  const u = e.find(".value > .type-boolean");
  u.length && u.on("click", (a) => {
    const d = o(a.currentTarget), l = !d.data("value");
    d.data("value", l).find("i").text(l.toString().toUpperCase()), h(this, N, k).call(this);
  });
}, Q = new WeakSet(), ht = function() {
  $(this, q, !0);
}, tt = new WeakSet(), dt = function() {
  g(this, q) && (h(this, N, k).call(this), $(this, q, !1));
}, Et = new WeakSet(), Te = function(e) {
  if ($(this, y, {}), g(this, y).$node = o(e.currentTarget).closest(".node"), g(this, y).$area = g(this, y).$node.parent(), g(this, y).$nodes = g(this, y).$area.children(".node"), g(this, y).$nodes.length < 2) {
    $(this, y, void 0);
    return;
  }
  g(this, y).$nodes.on(Z.MOVE, h(this, kt, xe).bind(this)), o(window).on(Z.END, h(this, Rt, Oe).bind(this));
}, kt = new WeakSet(), xe = function(e) {
  let n;
  if (e.pointerType === "touch") {
    const { clientX: a, clientY: d } = e, l = document.elementFromPoint(a, d).closest(".node");
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
}, Rt = new WeakSet(), Oe = function() {
  this.el.body.removeClass("dragging"), g(this, y).$area.removeClass("drag-area"), g(this, y).$node.removeClass("drag-select"), g(this, y).$nodes.removeClass(nt.ALL), g(this, y).$nodes.off(Z.MOVE), o(window).off(Z.END), g(this, y).half ? g(this, y).$node.insertAfter(g(this, y).activeNode) : g(this, y).$node.insertBefore(g(this, y).activeNode), $(this, y, void 0), h(this, N, k).call(this);
};
export {
  _n as default
};
