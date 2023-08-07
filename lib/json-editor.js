var Se = Object.defineProperty;
var _e = (t, e, n) => e in t ? Se(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Tt = (t, e, n) => (_e(t, typeof e != "symbol" ? e + "" : e, n), n), Ot = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var f = (t, e, n) => (Ot(t, e, "read from private field"), n ? n.call(t) : e.get(t)), b = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, P = (t, e, n, i) => (Ot(t, e, "write to private field"), i ? i.call(t, n) : e.set(t, n), n);
var d = (t, e, n) => (Ot(t, e, "access private method"), n);
const S = document, dt = window, ie = S.documentElement, j = S.createElement.bind(S), se = j("div"), $t = j("table"), Be = j("tbody"), Gt = j("tr"), { isArray: Lt, prototype: re } = Array, { concat: Me, filter: Ht, indexOf: oe, map: ce, push: Pe, slice: ae, some: It, splice: De } = re, He = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ie = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ue = /<.+>/, je = /^\w+$/;
function Ut(t, e) {
  const n = Ve(e);
  return !t || !n && !U(e) && !E(e) ? [] : !n && Ie.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && je.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
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
      if (i = He.test(e) && U(s) ? s.getElementById(e.slice(1).replace(/\\/g, "")) : Ue.test(e) ? fe(e) : Bt(s) ? s.find(e) : R(s) ? c(s).find(e) : Ut(e, s), !i)
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
const o = Rt.prototype, c = o.init;
c.fn = c.prototype = o;
o.length = 0;
o.splice = De;
typeof Symbol == "function" && (o[Symbol.iterator] = re[Symbol.iterator]);
function Bt(t) {
  return t instanceof Rt;
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
function E(t) {
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
function R(t) {
  return typeof t == "string";
}
function x(t) {
  return t === void 0;
}
function st(t) {
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
c.isWindow = et;
c.isFunction = V;
c.isArray = Lt;
c.isNumeric = ue;
c.isPlainObject = jt;
function L(t, e, n) {
  if (n) {
    let i = t.length;
    for (; i--; )
      if (e.call(t[i], i, t[i]) === !1)
        return t;
  } else if (jt(t)) {
    const i = Object.keys(t);
    for (let s = 0, r = i.length; s < r; s++) {
      const a = i[s];
      if (e.call(t[a], a, t[a]) === !1)
        return t;
    }
  } else
    for (let i = 0, s = t.length; i < s; i++)
      if (e.call(t[i], i, t[i]) === !1)
        return t;
  return t;
}
c.each = L;
o.each = function(t) {
  return L(this, t);
};
o.empty = function() {
  return this.each((t, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function pt(...t) {
  const e = Je(t[0]) ? t.shift() : !1, n = t.shift(), i = t.length;
  if (!n)
    return {};
  if (!i)
    return pt(e, c, n);
  for (let s = 0; s < i; s++) {
    const r = t[s];
    for (const a in r)
      e && (Lt(r[a]) || jt(r[a])) ? ((!n[a] || n[a].constructor !== r[a].constructor) && (n[a] = new r[a].constructor()), pt(e, n[a], r[a])) : n[a] = r[a];
  }
  return n;
}
c.extend = pt;
o.extend = function(t) {
  return pt(o, t);
};
const Fe = /\S+/g;
function At(t) {
  return R(t) ? t.match(Fe) || [] : [];
}
o.toggleClass = function(t, e) {
  const n = At(t), i = !x(e);
  return this.each((s, r) => {
    E(r) && L(n, (a, u) => {
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
    E(i) && L(e, (s, r) => {
      i.removeAttribute(r);
    });
  });
};
function Ze(t, e) {
  if (t) {
    if (R(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !E(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return st(n) ? void 0 : n;
      }
      return x(e) ? this : st(e) ? this.removeAttr(t) : this.each((n, i) => {
        E(i) && i.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
o.attr = Ze;
o.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
o.hasClass = function(t) {
  return !!t && It.call(this, (e) => E(e) && e.classList.contains(t));
};
o.get = function(t) {
  return x(t) ? ae.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
};
o.eq = function(t) {
  return c(this.get(t));
};
o.first = function() {
  return this.eq(0);
};
o.last = function() {
  return this.eq(-1);
};
function We(t) {
  return x(t) ? this.get().map((e) => E(e) || Ye(e) ? e.textContent : "").join("") : this.each((e, n) => {
    E(n) && (n.textContent = t);
  });
}
o.text = We;
function _(t, e, n) {
  if (!E(t))
    return;
  const i = dt.getComputedStyle(t, null);
  return n ? i.getPropertyValue(e) || void 0 : i[e] || t.style[e];
}
function O(t, e) {
  return parseInt(_(t, e), 10) || 0;
}
function Kt(t, e) {
  return O(t, `border${e ? "Left" : "Top"}Width`) + O(t, `padding${e ? "Left" : "Top"}`) + O(t, `padding${e ? "Right" : "Bottom"}`) + O(t, `border${e ? "Right" : "Bottom"}Width`);
}
const St = {};
function Ge(t) {
  if (St[t])
    return St[t];
  const e = j(t);
  S.body.insertBefore(e, null);
  const n = _(e, "display");
  return S.body.removeChild(e), St[t] = n !== "none" ? n : "block";
}
function qt(t) {
  return _(t, "display") === "none";
}
function le(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function xt(t) {
  return R(t) ? (e, n) => le(n, t) : V(t) ? t : Bt(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
o.filter = function(t) {
  const e = xt(t);
  return c(Ht.call(this, (n, i) => e.call(n, i, n)));
};
function D(t, e) {
  return e ? t.filter(e) : t;
}
o.detach = function(t) {
  return D(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const Ke = /^\s*<(\w+)[^>]*>/, qe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, zt = {
  "*": se,
  tr: Be,
  td: Gt,
  th: Gt,
  thead: $t,
  tbody: $t,
  tfoot: $t
};
function fe(t) {
  if (!R(t))
    return [];
  if (qe.test(t))
    return [j(RegExp.$1)];
  const e = Ke.test(t) && RegExp.$1, n = zt[e] || zt["*"];
  return n.innerHTML = t, c(n.childNodes).detach().get();
}
c.parseHTML = fe;
o.has = function(t) {
  const e = R(t) ? (n, i) => Ut(t, i).length : (n, i) => i.contains(t);
  return this.filter(e);
};
o.not = function(t) {
  const e = xt(t);
  return this.filter((n, i) => (!R(t) || E(i)) && !e.call(i, n, i));
};
function B(t, e, n, i) {
  const s = [], r = V(e), a = i && xt(i);
  for (let u = 0, p = t.length; u < p; u++)
    if (r) {
      const l = e(t[u]);
      l.length && Pe.apply(s, l);
    } else {
      let l = t[u][e];
      for (; l != null && !(i && a(-1, l)); )
        s.push(l), l = n ? l[e] : null;
    }
  return s;
}
function he(t) {
  return t.multiple && t.options ? B(Ht.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function ze(t) {
  return arguments.length ? this.each((e, n) => {
    const i = n.multiple && n.options;
    if (i || we.test(n.type)) {
      const s = Lt(t) ? ce.call(t, String) : st(t) ? [] : [String(t)];
      i ? L(n.options, (r, a) => {
        a.selected = s.indexOf(a.value) >= 0;
      }, !0) : n.checked = s.indexOf(n.value) >= 0;
    } else
      n.value = x(t) || st(t) ? "" : t;
  }) : this[0] && he(this[0]);
}
o.val = ze;
o.is = function(t) {
  const e = xt(t);
  return It.call(this, (n, i) => e.call(n, i, n));
};
c.guid = 1;
function $(t) {
  return t.length > 1 ? Ht.call(t, (e, n, i) => oe.call(i, e) === n) : t;
}
c.unique = $;
o.add = function(t, e) {
  return c($(this.get().concat(c(t, e).get())));
};
o.children = function(t) {
  return D(c($(B(this, (e) => e.children))), t);
};
o.parent = function(t) {
  return D(c($(B(this, "parentNode"))), t);
};
o.index = function(t) {
  const e = t ? c(t)[0] : this[0], n = t ? this : c(e).parent().children();
  return oe.call(n, e);
};
o.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const n = this.parent();
  return n.length ? n.closest(t) : e;
};
o.siblings = function(t) {
  return D(c($(B(this, (e) => c(e).parent().children().not(e)))), t);
};
o.find = function(t) {
  return c($(B(this, (e) => Ut(t, e))));
};
const Xe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Qe = /^$|^module$|\/(java|ecma)script/i, tn = ["type", "src", "nonce", "noModule"];
function en(t, e) {
  const n = c(t);
  n.filter("script").add(n.find("script")).each((i, s) => {
    if (Qe.test(s.type) && ie.contains(s)) {
      const r = j("script");
      r.text = s.textContent.replace(Xe, ""), L(tn, (a, u) => {
        s[u] && (r[u] = s[u]);
      }), e.head.insertBefore(r, null), e.head.removeChild(r);
    }
  });
}
function nn(t, e, n, i, s) {
  i ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), s && en(e, t.ownerDocument);
}
function H(t, e, n, i, s, r, a, u) {
  return L(t, (p, l) => {
    L(c(l), (g, k) => {
      L(c(e), (v, C) => {
        const M = n ? k : C, m = n ? C : k, Y = n ? g : v;
        nn(M, Y ? m.cloneNode(!0) : m, i, s, !Y);
      }, u);
    }, a);
  }, r), e;
}
o.after = function() {
  return H(arguments, this, !1, !1, !1, !0, !0);
};
o.append = function() {
  return H(arguments, this, !1, !1, !0);
};
function sn(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (x(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, i) => {
    E(i) && (e ? c(i).empty().append(t) : i.innerHTML = t);
  });
}
o.html = sn;
o.appendTo = function(t) {
  return H(arguments, this, !0, !1, !0);
};
o.wrapInner = function(t) {
  return this.each((e, n) => {
    const i = c(n), s = i.contents();
    s.length ? s.wrapAll(t) : i.append(t);
  });
};
o.before = function() {
  return H(arguments, this, !1, !0);
};
o.wrapAll = function(t) {
  let e = c(t), n = e[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(e), this.appendTo(n);
};
o.wrap = function(t) {
  return this.each((e, n) => {
    const i = c(t)[0];
    c(n).wrapAll(e ? i.cloneNode(!0) : i);
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
  return c($(B(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
o.next = function(t, e, n) {
  return D(c($(B(this, "nextElementSibling", e, n))), t);
};
o.nextAll = function(t) {
  return this.next(t, !0);
};
o.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
o.parents = function(t, e) {
  return D(c($(B(this, "parentElement", !0, e))), t);
};
o.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
o.prev = function(t, e, n) {
  return D(c($(B(this, "previousElementSibling", e, n))), t);
};
o.prevAll = function(t) {
  return this.prev(t, !0);
};
o.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
o.map = function(t) {
  return c(Me.apply([], ce.call(this, (e, n) => t.call(e, n, e))));
};
o.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
o.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && _(n, "position") === "static"; )
      n = n.offsetParent;
    return n || ie;
  });
};
o.slice = function(t, e) {
  return c(ae.call(this, t, e));
};
const rn = /-([a-z])/g;
function Vt(t) {
  return t.replace(rn, (e, n) => n.toUpperCase());
}
o.ready = function(t) {
  const e = () => setTimeout(t, 0, c);
  return S.readyState !== "loading" ? e() : S.addEventListener("DOMContentLoaded", e), this;
};
o.unwrap = function() {
  return this.parent().each((t, e) => {
    if (e.tagName === "BODY")
      return;
    const n = c(e);
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
    if (s !== t && E(s)) {
      const r = c(s).offset();
      n.top -= r.top + O(s, "borderTopWidth"), n.left -= r.left + O(s, "borderLeftWidth");
    }
  }
  return {
    top: n.top - O(t, "marginTop"),
    left: n.left - O(t, "marginLeft")
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
o.prop = function(t, e) {
  if (t) {
    if (R(t))
      return t = de[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, i) => {
        i[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
o.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[de[t] || t];
  });
};
const on = /^--/;
function Yt(t) {
  return on.test(t);
}
const _t = {}, { style: cn } = se, an = ["webkit", "moz", "ms"];
function un(t, e = Yt(t)) {
  if (e)
    return t;
  if (!_t[t]) {
    const n = Vt(t), i = `${n[0].toUpperCase()}${n.slice(1)}`, s = `${n} ${an.join(`${i} `)}${i}`.split(" ");
    L(s, (r, a) => {
      if (a in cn)
        return _t[t] = a, !1;
    });
  }
  return _t[t];
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
  if (R(t)) {
    const n = Yt(t);
    return t = un(t, n), arguments.length < 2 ? this[0] && _(this[0], t, n) : t ? (e = pe(t, e, n), this.each((i, s) => {
      E(s) && (n ? s.style.setProperty(t, e) : s.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
o.css = fn;
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
  if (R(t))
    return arguments.length < 2 ? this[0] && Xt(this[0], t) : x(e) ? this : this.each((n, i) => {
      dn(i, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
o.data = pn;
function ye(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
L([!0, !1], (t, e) => {
  L(["Width", "Height"], (n, i) => {
    const s = `${e ? "outer" : "inner"}${i}`;
    o[s] = function(r) {
      if (this[0])
        return et(this[0]) ? e ? this[0][`inner${i}`] : this[0].document.documentElement[`client${i}`] : U(this[0]) ? ye(this[0], i) : this[0][`${e ? "offset" : "client"}${i}`] + (r && e ? O(this[0], `margin${n ? "Top" : "Left"}`) + O(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
L(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  o[n] = function(i) {
    if (!this[0])
      return x(i) ? void 0 : this;
    if (!arguments.length)
      return et(this[0]) ? this[0].document.documentElement[`client${e}`] : U(this[0]) ? ye(this[0], e) : this[0].getBoundingClientRect()[n] - Kt(this[0], !t);
    const s = parseInt(i, 10);
    return this.each((r, a) => {
      if (!E(a))
        return;
      const u = _(a, "boxSizing");
      a.style[n] = pe(n, s + (u === "border-box" ? Kt(a, !t) : 0));
    });
  };
});
const Qt = "___cd";
o.toggle = function(t) {
  return this.each((e, n) => {
    if (!E(n))
      return;
    const i = qt(n);
    (x(t) ? i : t) ? (n.style.display = n[Qt] || "", qt(n) && (n.style.display = Ge(n.tagName))) : i || (n[Qt] = _(n, "display"), n.style.display = "none");
  });
};
o.hide = function() {
  return this.toggle(!1);
};
o.show = function() {
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
o.trigger = function(t, e) {
  if (R(t)) {
    const [i, s] = Wt(t), r = Zt(i);
    if (!r)
      return this;
    const a = gn.test(r) ? "MouseEvents" : "HTMLEvents";
    t = S.createEvent(a), t.initEvent(r, !0, !0), t.namespace = s.join(Jt), t.___ot = i;
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
function gt(t, e, n, i, s) {
  const r = be(t);
  if (e)
    r[e] && (r[e] = r[e].filter(([a, u, p]) => {
      if (s && p.guid !== s.guid || !Ce(a, n) || i && i !== u)
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
      !E(s) && !U(s) && !et(s) || gt(s);
    });
  else if (R(t))
    V(e) && (n = e, e = ""), L(At(t), (i, s) => {
      const [r, a] = Wt(s), u = Zt(r);
      this.each((p, l) => {
        !E(l) && !U(l) && !et(l) || gt(l, u, a, e, n);
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
  return c(t).replaceWith(this), this;
};
function mn(t, e, n, i, s) {
  if (!R(t)) {
    for (const r in t)
      this.on(r, e, n, t[r], s);
    return this;
  }
  return R(e) || (x(e) || st(e) ? e = "" : x(n) ? (n = e, e = "") : (i = n, n = e, e = "")), V(i) || (i = n, n = void 0), i ? (L(At(t), (r, a) => {
    const [u, p] = Wt(a), l = Zt(u), g = u in me, k = u in Ft;
    l && this.each((v, C) => {
      if (!E(C) && !U(C) && !et(C))
        return;
      const M = function(m) {
        if (m.target[`___i${m.type}`])
          return m.stopImmediatePropagation();
        if (m.namespace && !Ce(p, m.namespace.split(Jt)) || !e && (k && (m.target !== C || m.___ot === l) || g && m.relatedTarget && C.contains(m.relatedTarget)))
          return;
        let Y = C;
        if (e) {
          let J = m.target;
          for (; !le(J, e); )
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
        const $e = i.call(Y, m, m.___td);
        s && gt(C, l, p, e, M), $e === !1 && (m.preventDefault(), m.stopPropagation());
      };
      M.guid = i.guid = i.guid || c.guid++, yn(C, l, p, e, M);
    });
  }), this) : this;
}
o.on = mn;
function bn(t, e, n, i) {
  return this.on(t, e, n, i, !0);
}
o.one = bn;
const Cn = /\r?\n/g;
function wn(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(Cn, `\r
`))}`;
}
const vn = /file|reset|submit|button|image/i, we = /radio|checkbox/i;
o.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    L(n.elements || [n], (i, s) => {
      if (s.disabled || !s.name || s.tagName === "FIELDSET" || vn.test(s.type) || we.test(s.type) && !s.checked)
        return;
      const r = he(s);
      if (!x(r)) {
        const a = Lt(r) ? r : [r];
        L(a, (u, p) => {
          t += wn(s.name, p);
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
}, kn = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12L10 8L6 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', Ln = '<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-90, 10, 10)"><path d="M7 9L10 12L13 9" fill="currentColor"/><path d="M7 9L10 12L13 9H7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>', Rn = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', ve = {
  object: '<svg viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-object"><g transform="translate(0 1)"><path d="M2.296 5.166C2.296 7.238 3.78 8.162 5.166 8.162C6.538 8.162 8.022 7.238 8.022 5.166C8.022 3.094 6.538 2.156 5.166 2.156C3.78 2.156 2.296 3.094 2.296 5.166ZM0 5.18C0 2.03 2.366 0 5.166 0C7.952 0 10.318 2.03 10.318 5.18C10.318 8.316 7.952 10.346 5.166 10.346C2.366 10.346 0 8.316 0 5.18Z" fill="currentColor"/></g></svg>',
  array: '<svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-array"><path d="M7.728 9.926L6.902 7.658H2.87L2.044 9.926H0L3.808 0H6.048L9.828 9.926H7.728ZM4.886 2.142L3.514 5.894H6.258L4.886 2.142Z" fill="currentColor"/></svg>',
  string: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-string"><g transform="translate(0 1)"><path d="M7.39203 2.576L5.65603 3.108C5.55803 2.562 5.11003 1.708 3.85003 1.708C2.91203 1.708 2.29603 2.31 2.29603 2.968C2.29603 3.514 2.64603 3.948 3.37403 4.088L4.76003 4.354C6.56603 4.704 7.53203 5.88 7.53203 7.28C7.53203 8.806 6.25803 10.346 3.94803 10.346C1.31603 10.346 0.154031 8.652 3.05176e-05 7.238L1.79203 6.762C1.87603 7.742 2.56203 8.624 3.96203 8.624C4.99803 8.624 5.57203 8.106 5.57203 7.406C5.57203 6.832 5.13803 6.384 4.36803 6.23L2.98203 5.95C1.40003 5.628 0.378031 4.606 0.378031 3.108C0.378031 1.344 1.96003 0 3.83603 0C6.24403 0 7.16803 1.456 7.39203 2.576Z" fill="currentColor"/></g></svg>',
  number: '<svg viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-number"><path d="M8.47003 9.926H6.44003L1.93203 2.884V9.926H3.05176e-05V0H2.40803L6.53803 6.566V0H8.47003V9.926Z" fill="currentColor"/></svg>',
  boolean: '<svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-boolean"><path d="M3.05176e-05 0H3.57003C5.50203 0 6.59403 1.134 6.59403 2.674C6.59403 3.696 5.97803 4.522 5.15203 4.802C6.11803 5.04 6.90203 5.922 6.90203 7.154C6.90203 8.764 5.69803 9.926 3.83603 9.926H3.05176e-05V0ZM1.90403 4.102H3.27603C4.15803 4.102 4.69003 3.612 4.69003 2.856C4.69003 2.1 4.20003 1.624 3.26203 1.624H1.90403V4.102ZM1.90403 8.316H3.47203C4.41003 8.316 4.97003 7.826 4.97003 7.028C4.97003 6.244 4.46603 5.698 3.50003 5.698H1.90403V8.316Z" fill="currentColor"/></svg>',
  null: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="t-null"><g transform="translate(0 1.5)"><path d="M3.808 10.15C1.694 10.15 0 8.848 0 6.412V0H1.932V6.272C1.932 7.574 2.66 8.26 3.808 8.26C4.984 8.26 5.698 7.574 5.698 6.272V0H7.63V6.412C7.63 8.848 5.936 10.15 3.808 10.15Z" fill="currentColor"/></g></svg>'
}, An = [
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
var W, N, G, yt, Ne, mt, Ee, bt, ke;
class xn {
  constructor(e, n, i = !1) {
    b(this, yt);
    b(this, mt);
    b(this, bt);
    b(this, W, void 0);
    b(this, N, {
      node: void 0,
      type: void 0,
      dialog: void 0
    });
    b(this, G, void 0);
    P(this, W, e), f(this, N).node = c(n), P(this, G, String(f(this, N).node.data("type"))), f(this, N).type = f(this, N).node.find("& > .node__body > .type"), f(this, N).type.addClass("open"), f(this, N).dialog = d(this, yt, Ne).call(this, An, f(this, G), i), f(this, N).dialog.on("click", (s) => s.stopPropagation()), f(this, N).dialog.find("button").on("click", (s) => d(this, mt, Ee).call(this, s)), f(this, W).customContext(f(this, N).dialog.get(0), {
      node: f(this, N).node.get(0),
      type: f(this, G),
      isRoot: i
    }, c), f(this, N).type.append(f(this, N).dialog), c(window).on(Z.CLICK, (s) => this.close(s)), c(window).on(Z.KEYUP, (s) => d(this, bt, ke).call(this, s));
  }
  close() {
    f(this, N).type.removeClass("open"), f(this, N).dialog.remove(), c(window).off(Z.CLICK), c(window).off(Z.KEYUP), delete f(this, W).context;
  }
}
W = new WeakMap(), N = new WeakMap(), G = new WeakMap(), yt = new WeakSet(), Ne = function(e, n, i = !1) {
  function s(u, p) {
    let l = "";
    const { key: g, label: k, children: v } = u;
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
        C = ' class="type"', M = `<i class="type-icon type-icon--${g}">${ve[g]}</i>`, m = ` data-mode="${p}" data-type="${g}"`, p === "change-type" && g === n && (m = " disabled");
        break;
    }
    return l += `<li${C}>`, l += `<button type="button"${m}>`, l += M, l += `<em class="label">${k}</em>`, (g === "change-type" || g === "insert") && (l += `<span class="arrow">${kn}</span>`), l += "</button>", (v == null ? void 0 : v.length) > 0 && (l += '<div class="children">', l += r(v, g), l += "</div>"), l += "</li>", l;
  }
  function r(u, p = void 0) {
    let l = "<ol>";
    for (let g in u)
      l += s(u[g], p);
    return l += "</ol>", l;
  }
  let a = `<nav class="context${i ? " is-root" : ""}">`;
  return a += r(e), a += "</nav>", c(a);
}, mt = new WeakSet(), Ee = function(e) {
  const n = c(e.currentTarget), i = n.data("mode");
  let s = String(n.data("type"));
  s = s === "undefined" ? "" : s, this.close(), this.selectItem && typeof this.selectItem == "function" && this.selectItem(f(this, N).node, i, s);
}, bt = new WeakSet(), ke = function(e) {
  e.code === "Escape" && this.close();
};
function ee(t) {
  return t == null ? "null" : Array.isArray(t) ? "array" : typeof t == "string" ? "string" : typeof t == "number" ? "number" : typeof t == "boolean" ? "boolean" : "object";
}
function Tn(t) {
  try {
    return typeof t == "string" ? JSON.parse(t) : Array.isArray(t) ? Object.assign([], t) : c.isPlainObject(t) ? Object.assign({}, t) : {};
  } catch (e) {
    console.error("error", e.message);
  }
}
function On(t) {
  return Array.isArray(t) ? t.length : c.isPlainObject(t) ? Object.keys(t).length : 0;
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
var w, y, K, Ct, Le, rt, Mt, q, at, wt, Re, vt, Ae, z, ut, X, lt, ot, Pt, A, T, ct, Dt, I, it, Q, ft, tt, ht, Nt, xe, Et, Te, kt, Oe;
class Sn {
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
    b(this, ct);
    /**
     * NODE EVENTS
     */
    b(this, I);
    b(this, Q);
    b(this, tt);
    b(this, Nt);
    b(this, Et);
    b(this, kt);
    b(this, w, { wrap: null, body: null, tree: null });
    Tt(this, "options");
    Tt(this, "context");
    b(this, y, void 0);
    b(this, K, !1);
    f(this, w).wrap = c(e), f(this, w).body = c('<div class="json-editor"></div>'), this.options = new Proxy(Object.assign({}, Nn, n), {
      get: (i, s) => i[s],
      set: d(this, Ct, Le).bind(this)
    }), f(this, w).wrap.append(f(this, w).body), d(this, rt, Mt).call(this, this.options.theme), this.replace({});
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
    n = { ...En, ...n };
    const { data: s, between: r, open: a, callback: u } = n;
    e = c(e);
    const { key: p, value: l, type: g } = s, k = d(this, q, at).call(this, g, !1);
    d(this, z, ut).call(this, k, { ...s, open: a }), d(this, I, it).call(this, k);
    const v = e.find("& > .node__children > ul");
    r === "before" ? v.prepend(k) : v.append(k), (g === h.ARRAY || g === h.OBJECT) && u && typeof u == "function" && u(k.get(0), l), i && d(this, A, T).call(this);
  }
  /**
   * remove node
   * @param {HTMLElement} $node
   * @param {boolean} useUpdate
   */
  removeNode(e, n = !0) {
    e = c(e), e.remove(), n && d(this, A, T).call(this);
  }
  /**
   * change type
   * @param {HTMLElement} node
   * @param {'object'|'array'|'string'|'number'|'boolean'|'null'} type
   * @param {boolean} useUpdate
   */
  changeType(e, n, i = !0) {
    const s = c(e), r = {
      key: s.find("& > .node__body .key").text(),
      value: d(this, ot, Pt).call(this, s),
      type: n,
      open: s.hasClass("open")
    }, a = s.find("& > .node__children > .tree").html(), u = s.hasClass("root");
    s.empty(), s.html(d(this, q, at).call(this, n, u).html()), a && s.find("& > .node__children > .tree").html(a), d(this, z, ut).call(this, s, r), d(this, I, it).call(this, s), s.attr("data-type", n), i && d(this, A, T).call(this);
  }
  /**
   * duplicate
   * @param {HTMLElement} $target
   * @param {boolean} useUpdate
   */
  duplicate(e, n = !0) {
    e = c(e);
    const i = c(e.get(0).outerHTML);
    d(this, I, it).call(this, i), e.after(i), n && d(this, A, T).call(this);
  }
  fold(e, n) {
    e = c(e), n === void 0 ? e.toggleClass("open") : n === !0 ? e.addClass("open") : e.removeClass("open");
  }
  clear() {
    f(this, w).tree && (f(this, w).body.empty(), this.replace({}, !1), d(this, A, T).call(this));
  }
  destroy() {
    c(window).off(F.END).off(Z.CLICK).off(Z.KEYUP), f(this, w).wrap.empty();
  }
  /**
   * replace
   * @param {object|array} data
   * @param {boolean} useUpdate
   */
  replace(e, n = !0) {
    f(this, w).body.empty(), e = Tn(e);
    const i = d(this, wt, Re).call(this, e);
    this.import(i, e, !1), n && d(this, A, T).call(this);
  }
  /**
   * import data
   * @param {HTMLElement} target
   * @param {object|array} data
   * @param {boolean} useUpdate
   */
  import(e, n, i = !0) {
    c.each(n, (s, r) => {
      const a = ee(r), u = { key: s, value: r, type: a };
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
    let i = d(this, ct, Dt).call(this);
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
w = new WeakMap(), y = new WeakMap(), K = new WeakMap(), Ct = new WeakSet(), Le = function(e, n, i) {
  switch (e[n] = i, n) {
    case "theme":
      d(this, rt, Mt).call(this, i);
      break;
  }
  return !0;
}, rt = new WeakSet(), Mt = function(e) {
  e = ["system", "light", "dark"].indexOf(e) > -1 ? e : "system", f(this, w).body.attr("data-theme", e);
}, q = new WeakSet(), at = function(e, n = !1) {
  let i = `<li data-type="${e}" class="node${n ? " root" : ""}">`;
  return i += '<div class="node__body">', n || (i += `<div class="sort">${Rn}</div>`), i += '<div class="type"><button type="button"></button></div>', (e === h.OBJECT || e === h.ARRAY) && (i += `<button type="button" class="fold">${Ln}</button>`), n || (i += '<div class="key"></div>'), i += '<em class="count"></em>', n || (i += '<div class="value"></div>'), i += "</div>", i += '<div class="node__children"><ul class="tree"/></div>', i += "</li>", c(i);
}, wt = new WeakSet(), Re = function(e) {
  const n = ee(e), i = d(this, q, at).call(this, n, !0);
  return d(this, z, ut).call(this, i, {
    key: void 0,
    value: e,
    type: n,
    open: !0
  }), d(this, I, it).call(this, i), f(this, w).tree = c("<ul/>"), f(this, w).tree.append(i), f(this, w).body.append(f(this, w).tree), i;
}, vt = new WeakSet(), Ae = function(e, n, i) {
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
  const { key: i, value: s, type: r, open: a } = n, u = e.hasClass("root"), p = e.children(".node__body");
  if (p.find(".type > button").html(`<i class="type-icon type-icon--${r}">${ve[r]}</i>`), (r === h.OBJECT || r === h.ARRAY) && this.fold(e, a), !u) {
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
    const l = On(s);
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
  this.options.live && this.preview && typeof this.preview == "function" && this.preview(d(this, ct, Dt).call(this));
}, ct = new WeakSet(), Dt = function() {
  const e = (s, r) => {
    let a = r === h.ARRAY ? [] : {};
    return s.find("& > .node__children > ul > li").each((p, l) => {
      if (!(r === h.ARRAY || r === h.OBJECT))
        return !0;
      l = c(l);
      const g = d(this, X, lt).call(this, l);
      switch (g) {
        case h.OBJECT:
        case h.ARRAY:
          switch (r) {
            case h.ARRAY:
              a.push(e(l, g));
              break;
            case h.OBJECT:
              const v = l.find("& > .node__body > .key").text();
              v && (a[v] = e(l, g));
              break;
          }
          break;
        case h.STRING:
        case h.NUMBER:
        case h.BOOLEAN:
        case h.NULL:
          const k = d(this, ot, Pt).call(this, l);
          switch (r) {
            case h.ARRAY:
              a.push(k);
              break;
            case h.OBJECT:
              const v = l.find("& > .node__body > .key").text();
              v && (a[v] = k);
              break;
          }
          break;
      }
    }), a;
  }, n = f(this, w).tree.children(".node"), i = d(this, X, lt).call(this, n);
  return e(n, i);
}, I = new WeakSet(), it = function(e) {
  const n = e.find(".sort");
  n.length && n.on(F.START, d(this, Nt, xe).bind(this)), e.find(".type > button").on("click", async (u) => {
    const p = c(u.currentTarget);
    if (u.stopPropagation(), p.parent().hasClass("open"))
      this.context && this.context.close();
    else {
      this.context && this.context.close();
      const l = p.closest(".node").hasClass("root");
      this.context = new xn(this, p.closest(".node"), l), this.context.selectItem = (g, k, v) => d(this, vt, Ae).call(this, g, k, v);
    }
  }), e.find(".fold").on("click", (u) => {
    const l = c(u.currentTarget).closest(".node");
    this.fold(l);
  });
  const i = e.find(".key > .label-field");
  i.length && i.on("keydown", (u) => {
    if (u.keyCode === 13 || ne(u))
      return u.preventDefault();
  }).on("input", (u) => d(this, Q, ft).call(this, u)).on("blur", (u) => d(this, tt, ht).call(this, u));
  const s = e.find(".value > .type-string");
  s.length && s.on("keydown", (u) => {
    if (ne(u))
      return u.preventDefault();
  }).on("input", (u) => d(this, Q, ft).call(this, u)).on("blur", (u) => d(this, tt, ht).call(this, u));
  const r = e.find(".value > .type-number");
  r.length && r.on("input", (u) => d(this, Q, ft).call(this, u)).on("blur", (u) => d(this, tt, ht).call(this, u));
  const a = e.find(".value > .type-boolean");
  a.length && a.on("click", (u) => {
    const p = c(u.currentTarget), l = !p.data("value");
    p.data("value", l).find("i").text(l.toString().toUpperCase()), d(this, A, T).call(this);
  });
}, Q = new WeakSet(), ft = function() {
  P(this, K, !0);
}, tt = new WeakSet(), ht = function() {
  f(this, K) && (d(this, A, T).call(this), P(this, K, !1));
}, Nt = new WeakSet(), xe = function(e) {
  if (P(this, y, {}), f(this, y).$node = c(e.currentTarget).closest(".node"), f(this, y).$area = f(this, y).$node.parent(), f(this, y).$nodes = f(this, y).$area.children(".node"), f(this, y).$nodes.length < 2) {
    P(this, y, void 0);
    return;
  }
  f(this, y).$nodes.on(F.MOVE, d(this, Et, Te).bind(this)), c(window).on(F.END, d(this, kt, Oe).bind(this));
}, Et = new WeakSet(), Te = function(e) {
  const n = c(e.currentTarget), i = n.children(".node__body");
  if (!(i.length > 0))
    return;
  const { y: s, height: r } = i.get(0).getBoundingClientRect(), a = r * 0.5 < e.y - s;
  if (f(this, y).activeNode || (f(this, w).body.addClass("dragging"), f(this, y).$area.addClass("drag-area"), f(this, y).$node.addClass("drag-select")), f(this, y).activeNode !== n.get(0))
    f(this, y).activeNode && c(f(this, y).activeNode).removeClass(nt.ALL), f(this, y).activeNode = n.get(0);
  else if (f(this, y).half === a)
    return;
  f(this, y).half = a, n.removeClass(nt.ALL).addClass(a ? nt.END : nt.START);
}, kt = new WeakSet(), Oe = function(e) {
  f(this, w).body.removeClass("dragging"), f(this, y).$area.removeClass("drag-area"), f(this, y).$node.removeClass("drag-select"), f(this, y).$nodes.removeClass(nt.ALL), f(this, y).$nodes.off(F.MOVE), c(window).off(F.END), f(this, y).half ? f(this, y).$node.insertAfter(f(this, y).activeNode) : f(this, y).$node.insertBefore(f(this, y).activeNode), P(this, y, void 0), d(this, A, T).call(this);
};
export {
  Sn as default
};
