var _e = Object.defineProperty;
var $e = (t, e, n) => e in t ? _e(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var xt = (t, e, n) => ($e(t, typeof e != "symbol" ? e + "" : e, n), n), Ot = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var l = (t, e, n) => (Ot(t, e, "read from private field"), n ? n.call(t) : e.get(t)), C = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, P = (t, e, n, i) => (Ot(t, e, "write to private field"), i ? i.call(t, n) : e.set(t, n), n);
var d = (t, e, n) => (Ot(t, e, "access private method"), n);
const _ = document, dt = window, ie = _.documentElement, j = _.createElement.bind(_), se = j("div"), St = j("table"), Be = j("tbody"), Gt = j("tr"), { isArray: Rt, prototype: re } = Array, { concat: Me, filter: Ht, indexOf: oe, map: ce, push: Pe, slice: ae, some: It, splice: De } = re, He = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ie = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ue = /<.+>/, je = /^\w+$/;
function Ut(t, e) {
  const n = Ve(e);
  return !t || !n && !U(e) && !N(e) ? [] : !n && Ie.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && je.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class Lt {
  constructor(e, n) {
    if (!e)
      return;
    if (Bt(e))
      return e;
    let i = e;
    if (L(e)) {
      const s = n || _;
      if (i = He.test(e) && U(s) ? s.getElementById(e.slice(1).replace(/\\/g, "")) : Ue.test(e) ? fe(e) : Bt(s) ? s.find(e) : L(s) ? c(s).find(e) : Ut(e, s), !i)
        return;
    } else if (V(e))
      return this.ready(e);
    (i.nodeType || i === dt) && (i = [i]), this.length = i.length;
    for (let s = 0, r = this.length; s < r; s++)
      this[s] = i[s];
  }
  init(e, n) {
    return new Lt(e, n);
  }
}
const o = Lt.prototype, c = o.init;
c.fn = c.prototype = o;
o.length = 0;
o.splice = De;
typeof Symbol == "function" && (o[Symbol.iterator] = re[Symbol.iterator]);
function Bt(t) {
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
function N(t) {
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
function L(t) {
  return typeof t == "string";
}
function T(t) {
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
c.isArray = Rt;
c.isNumeric = ue;
c.isPlainObject = jt;
function k(t, e, n) {
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
c.each = k;
o.each = function(t) {
  return k(this, t);
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
    for (const u in r)
      e && (Rt(r[u]) || jt(r[u])) ? ((!n[u] || n[u].constructor !== r[u].constructor) && (n[u] = new r[u].constructor()), pt(e, n[u], r[u])) : n[u] = r[u];
  }
  return n;
}
c.extend = pt;
o.extend = function(t) {
  return pt(o, t);
};
const Fe = /\S+/g;
function At(t) {
  return L(t) ? t.match(Fe) || [] : [];
}
o.toggleClass = function(t, e) {
  const n = At(t), i = !T(e);
  return this.each((s, r) => {
    N(r) && k(n, (u, a) => {
      i ? e ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
o.addClass = function(t) {
  return this.toggleClass(t, !0);
};
o.removeAttr = function(t) {
  const e = At(t);
  return this.each((n, i) => {
    N(i) && k(e, (s, r) => {
      i.removeAttribute(r);
    });
  });
};
function Ze(t, e) {
  if (t) {
    if (L(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !N(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return st(n) ? void 0 : n;
      }
      return T(e) ? this : st(e) ? this.removeAttr(t) : this.each((n, i) => {
        N(i) && i.setAttribute(t, e);
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
  return !!t && It.call(this, (e) => N(e) && e.classList.contains(t));
};
o.get = function(t) {
  return T(t) ? ae.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
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
  return T(t) ? this.get().map((e) => N(e) || Ye(e) ? e.textContent : "").join("") : this.each((e, n) => {
    N(n) && (n.textContent = t);
  });
}
o.text = We;
function $(t, e, n) {
  if (!N(t))
    return;
  const i = dt.getComputedStyle(t, null);
  return n ? i.getPropertyValue(e) || void 0 : i[e] || t.style[e];
}
function O(t, e) {
  return parseInt($(t, e), 10) || 0;
}
function Kt(t, e) {
  return O(t, `border${e ? "Left" : "Top"}Width`) + O(t, `padding${e ? "Left" : "Top"}`) + O(t, `padding${e ? "Right" : "Bottom"}`) + O(t, `border${e ? "Right" : "Bottom"}Width`);
}
const _t = {};
function Ge(t) {
  if (_t[t])
    return _t[t];
  const e = j(t);
  _.body.insertBefore(e, null);
  const n = $(e, "display");
  return _.body.removeChild(e), _t[t] = n !== "none" ? n : "block";
}
function qt(t) {
  return $(t, "display") === "none";
}
function le(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function Tt(t) {
  return L(t) ? (e, n) => le(n, t) : V(t) ? t : Bt(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
o.filter = function(t) {
  const e = Tt(t);
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
  thead: St,
  tbody: St,
  tfoot: St
};
function fe(t) {
  if (!L(t))
    return [];
  if (qe.test(t))
    return [j(RegExp.$1)];
  const e = Ke.test(t) && RegExp.$1, n = zt[e] || zt["*"];
  return n.innerHTML = t, c(n.childNodes).detach().get();
}
c.parseHTML = fe;
o.has = function(t) {
  const e = L(t) ? (n, i) => Ut(t, i).length : (n, i) => i.contains(t);
  return this.filter(e);
};
o.not = function(t) {
  const e = Tt(t);
  return this.filter((n, i) => (!L(t) || N(i)) && !e.call(i, n, i));
};
function B(t, e, n, i) {
  const s = [], r = V(e), u = i && Tt(i);
  for (let a = 0, g = t.length; a < g; a++)
    if (r) {
      const h = e(t[a]);
      h.length && Pe.apply(s, h);
    } else {
      let h = t[a][e];
      for (; h != null && !(i && u(-1, h)); )
        s.push(h), h = n ? h[e] : null;
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
      const s = Rt(t) ? ce.call(t, String) : st(t) ? [] : [String(t)];
      i ? k(n.options, (r, u) => {
        u.selected = s.indexOf(u.value) >= 0;
      }, !0) : n.checked = s.indexOf(n.value) >= 0;
    } else
      n.value = T(t) || st(t) ? "" : t;
  }) : this[0] && he(this[0]);
}
o.val = ze;
o.is = function(t) {
  const e = Tt(t);
  return It.call(this, (n, i) => e.call(n, i, n));
};
c.guid = 1;
function S(t) {
  return t.length > 1 ? Ht.call(t, (e, n, i) => oe.call(i, e) === n) : t;
}
c.unique = S;
o.add = function(t, e) {
  return c(S(this.get().concat(c(t, e).get())));
};
o.children = function(t) {
  return D(c(S(B(this, (e) => e.children))), t);
};
o.parent = function(t) {
  return D(c(S(B(this, "parentNode"))), t);
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
  return D(c(S(B(this, (e) => c(e).parent().children().not(e)))), t);
};
o.find = function(t) {
  return c(S(B(this, (e) => Ut(t, e))));
};
const Xe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Qe = /^$|^module$|\/(java|ecma)script/i, tn = ["type", "src", "nonce", "noModule"];
function en(t, e) {
  const n = c(t);
  n.filter("script").add(n.find("script")).each((i, s) => {
    if (Qe.test(s.type) && ie.contains(s)) {
      const r = j("script");
      r.text = s.textContent.replace(Xe, ""), k(tn, (u, a) => {
        s[a] && (r[a] = s[a]);
      }), e.head.insertBefore(r, null), e.head.removeChild(r);
    }
  });
}
function nn(t, e, n, i, s) {
  i ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), s && en(e, t.ownerDocument);
}
function H(t, e, n, i, s, r, u, a) {
  return k(t, (g, h) => {
    k(c(h), (p, v) => {
      k(c(e), (R, b) => {
        const M = n ? v : b, m = n ? b : v, Y = n ? p : R;
        nn(M, Y ? m.cloneNode(!0) : m, i, s, !Y);
      }, a);
    }, u);
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
  if (T(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, i) => {
    N(i) && (e ? c(i).empty().append(t) : i.innerHTML = t);
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
  return c(S(B(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
o.next = function(t, e, n) {
  return D(c(S(B(this, "nextElementSibling", e, n))), t);
};
o.nextAll = function(t) {
  return this.next(t, !0);
};
o.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
o.parents = function(t, e) {
  return D(c(S(B(this, "parentElement", !0, e))), t);
};
o.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
o.prev = function(t, e, n) {
  return D(c(S(B(this, "previousElementSibling", e, n))), t);
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
    for (; n && $(n, "position") === "static"; )
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
  return _.readyState !== "loading" ? e() : _.addEventListener("DOMContentLoaded", e), this;
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
  const e = $(t, "position") === "fixed", n = e ? t.getBoundingClientRect() : this.offset();
  if (!e) {
    const i = t.ownerDocument;
    let s = t.offsetParent || i.documentElement;
    for (; (s === i.body || s === i.documentElement) && $(s, "position") === "static"; )
      s = s.parentNode;
    if (s !== t && N(s)) {
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
    if (L(t))
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
const $t = {}, { style: cn } = se, an = ["webkit", "moz", "ms"];
function un(t, e = Yt(t)) {
  if (e)
    return t;
  if (!$t[t]) {
    const n = Vt(t), i = `${n[0].toUpperCase()}${n.slice(1)}`, s = `${n} ${an.join(`${i} `)}${i}`.split(" ");
    k(s, (r, u) => {
      if (u in cn)
        return $t[t] = u, !1;
    });
  }
  return $t[t];
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
  if (L(t)) {
    const n = Yt(t);
    return t = un(t, n), arguments.length < 2 ? this[0] && $(this[0], t, n) : t ? (e = pe(t, e, n), this.each((i, s) => {
      N(s) && (n ? s.style.setProperty(t, e) : s.style[t] = e);
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
  if (L(t))
    return arguments.length < 2 ? this[0] && Xt(this[0], t) : T(e) ? this : this.each((n, i) => {
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
k([!0, !1], (t, e) => {
  k(["Width", "Height"], (n, i) => {
    const s = `${e ? "outer" : "inner"}${i}`;
    o[s] = function(r) {
      if (this[0])
        return et(this[0]) ? e ? this[0][`inner${i}`] : this[0].document.documentElement[`client${i}`] : U(this[0]) ? ye(this[0], i) : this[0][`${e ? "offset" : "client"}${i}`] + (r && e ? O(this[0], `margin${n ? "Top" : "Left"}`) + O(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
k(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  o[n] = function(i) {
    if (!this[0])
      return T(i) ? void 0 : this;
    if (!arguments.length)
      return et(this[0]) ? this[0].document.documentElement[`client${e}`] : U(this[0]) ? ye(this[0], e) : this[0].getBoundingClientRect()[n] - Kt(this[0], !t);
    const s = parseInt(i, 10);
    return this.each((r, u) => {
      if (!N(u))
        return;
      const a = $(u, "boxSizing");
      u.style[n] = pe(n, s + (a === "border-box" ? Kt(u, !t) : 0));
    });
  };
});
const Qt = "___cd";
o.toggle = function(t) {
  return this.each((e, n) => {
    if (!N(n))
      return;
    const i = qt(n);
    (T(t) ? i : t) ? (n.style.display = n[Qt] || "", qt(n) && (n.style.display = Ge(n.tagName))) : i || (n[Qt] = $(n, "display"), n.style.display = "none");
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
  if (L(t)) {
    const [i, s] = Wt(t), r = Zt(i);
    if (!r)
      return this;
    const u = gn.test(r) ? "MouseEvents" : "HTMLEvents";
    t = _.createEvent(u), t.initEvent(r, !0, !0), t.namespace = s.join(Jt), t.___ot = i;
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
    r[e] && (r[e] = r[e].filter(([u, a, g]) => {
      if (s && g.guid !== s.guid || !Ce(u, n) || i && i !== a)
        return !0;
      t.removeEventListener(e, g);
    }));
  else
    for (e in r)
      gt(t, e, n, i, s);
}
o.off = function(t, e, n) {
  if (T(t))
    this.each((i, s) => {
      !N(s) && !U(s) && !et(s) || gt(s);
    });
  else if (L(t))
    V(e) && (n = e, e = ""), k(At(t), (i, s) => {
      const [r, u] = Wt(s), a = Zt(r);
      this.each((g, h) => {
        !N(h) && !U(h) && !et(h) || gt(h, a, u, e, n);
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
  if (!L(t)) {
    for (const r in t)
      this.on(r, e, n, t[r], s);
    return this;
  }
  return L(e) || (T(e) || st(e) ? e = "" : T(n) ? (n = e, e = "") : (i = n, n = e, e = "")), V(i) || (i = n, n = void 0), i ? (k(At(t), (r, u) => {
    const [a, g] = Wt(u), h = Zt(a), p = a in me, v = a in Ft;
    h && this.each((R, b) => {
      if (!N(b) && !U(b) && !et(b))
        return;
      const M = function(m) {
        if (m.target[`___i${m.type}`])
          return m.stopImmediatePropagation();
        if (m.namespace && !Ce(g, m.namespace.split(Jt)) || !e && (v && (m.target !== b || m.___ot === h) || p && m.relatedTarget && b.contains(m.relatedTarget)))
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
        s && gt(b, h, g, e, M), Se === !1 && (m.preventDefault(), m.stopPropagation());
      };
      M.guid = i.guid = i.guid || c.guid++, yn(b, h, g, e, M);
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
    k(n.elements || [n], (i, s) => {
      if (s.disabled || !s.name || s.tagName === "FIELDSET" || vn.test(s.type) || we.test(s.type) && !s.checked)
        return;
      const r = he(s);
      if (!T(r)) {
        const u = Rt(r) ? r : [r];
        k(u, (a, g) => {
          t += wn(s.name, g);
        });
      }
    });
  }), t.slice(1);
};
const En = {
  live: !1,
  // live update
  theme: "system"
  // system,light,dark
}, Nn = {
  data: void 0,
  between: "after",
  open: !0,
  callback: void 0
}, f = {
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
}, kn = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12L10 8L6 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', Rn = '<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-90, 10, 10)"><path d="M7 9L10 12L13 9" fill="currentColor"/><path d="M7 9L10 12L13 9H7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>', Ln = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', ve = {
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
var W, E, G, yt, Ee, mt, Ne, bt, ke;
class Tn {
  constructor(e, n, i = !1) {
    C(this, yt);
    C(this, mt);
    C(this, bt);
    C(this, W, void 0);
    C(this, E, {
      node: void 0,
      type: void 0,
      dialog: void 0
    });
    C(this, G, void 0);
    P(this, W, e), l(this, E).node = c(n), P(this, G, String(l(this, E).node.data("type"))), l(this, E).type = l(this, E).node.find("& > .node__body > .type"), l(this, E).type.addClass("open"), l(this, E).dialog = d(this, yt, Ee).call(this, An, l(this, G), i), l(this, E).dialog.on("click", (s) => s.stopPropagation()), l(this, E).dialog.find("button").on("click", (s) => d(this, mt, Ne).call(this, s)), l(this, W).customContext(l(this, E).dialog.get(0), {
      node: l(this, E).node.get(0),
      type: l(this, G),
      isRoot: i
    }, c), l(this, E).type.append(l(this, E).dialog), c(window).on(Z.CLICK, (s) => this.close(s)), c(window).on(Z.KEYUP, (s) => d(this, bt, ke).call(this, s));
  }
  close() {
    l(this, E).type.removeClass("open"), l(this, E).dialog.remove(), c(window).off(Z.CLICK), c(window).off(Z.KEYUP), delete l(this, W).context;
  }
}
W = new WeakMap(), E = new WeakMap(), G = new WeakMap(), yt = new WeakSet(), Ee = function(e, n, i = !1) {
  function s(a, g) {
    let h = "";
    const { key: p, label: v, children: R } = a;
    if (i)
      switch (p) {
        case f.STRING:
        case f.NUMBER:
        case f.BOOLEAN:
        case f.NULL:
          if (g === "change-type")
            return "";
          break;
        case "duplicate":
        case "remove":
          return "";
      }
    let b = "", M = "", m = "";
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
        b = ' class="type"', M = `<i class="type-icon type-icon--${p}">${ve[p]}</i>`, m = ` data-mode="${g}" data-type="${p}"`, g === "change-type" && p === n && (m = " disabled");
        break;
    }
    return h += `<li${b}>`, h += `<button type="button"${m}>`, h += M, h += `<em class="label">${v}</em>`, (p === "change-type" || p === "insert") && (h += `<span class="arrow">${kn}</span>`), h += "</button>", (R == null ? void 0 : R.length) > 0 && (h += '<div class="children">', h += r(R, p), h += "</div>"), h += "</li>", h;
  }
  function r(a, g = void 0) {
    let h = "<ol>";
    for (let p in a)
      h += s(a[p], g);
    return h += "</ol>", h;
  }
  let u = `<nav class="context${i ? " is-root" : ""}">`;
  return u += r(e), u += "</nav>", c(u);
}, mt = new WeakSet(), Ne = function(e) {
  const n = c(e.currentTarget), i = n.data("mode");
  let s = String(n.data("type"));
  s = s === "undefined" ? "" : s, this.close(), this.selectItem && typeof this.selectItem == "function" && this.selectItem(l(this, E).node, i, s);
}, bt = new WeakSet(), ke = function(e) {
  e.code === "Escape" && this.close();
};
function ee(t) {
  return t == null ? "null" : Array.isArray(t) ? "array" : typeof t == "string" ? "string" : typeof t == "number" ? "number" : typeof t == "boolean" ? "boolean" : "object";
}
function xn(t) {
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
var w, y, K, Ct, Re, rt, Mt, q, at, wt, Le, vt, Ae, z, ut, X, lt, ot, Pt, A, x, ct, Dt, I, it, Q, ft, tt, ht, Et, Te, Nt, xe, kt, Oe;
class _n {
  constructor(e, n = {}) {
    C(this, Ct);
    C(this, rt);
    C(this, q);
    C(this, wt);
    C(this, vt);
    C(this, z);
    C(this, X);
    C(this, ot);
    C(this, A);
    C(this, ct);
    /**
     * NODE EVENTS
     */
    C(this, I);
    C(this, Q);
    C(this, tt);
    C(this, Et);
    C(this, Nt);
    C(this, kt);
    C(this, w, { wrap: null, body: null, tree: null });
    xt(this, "options");
    xt(this, "context");
    C(this, y, void 0);
    C(this, K, !1);
    l(this, w).wrap = c(e), l(this, w).body = c('<div class="json-editor"></div>'), this.options = new Proxy(Object.assign({}, En, n), {
      get: (i, s) => i[s],
      set: d(this, Ct, Re).bind(this)
    }), l(this, w).wrap.append(l(this, w).body), d(this, rt, Mt).call(this, this.options.theme), this.replace({}, !1);
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
    n = { ...Nn, ...n };
    const { data: s, between: r, open: u, callback: a } = n;
    e = c(e);
    const { key: g, value: h, type: p } = s, v = d(this, q, at).call(this, p, !1);
    d(this, z, ut).call(this, v, { ...s, open: u }), d(this, I, it).call(this, v);
    const R = e.find("& > .node__children > ul");
    r === "before" ? R.prepend(v) : R.append(v), (p === f.ARRAY || p === f.OBJECT) && a && typeof a == "function" && a(v.get(0), h), i && d(this, A, x).call(this);
  }
  /**
   * remove node
   * @param {HTMLElement} $node
   * @param {boolean} useUpdate
   */
  removeNode(e, n = !0) {
    e = c(e), e.remove(), n && d(this, A, x).call(this);
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
    }, u = s.find("& > .node__children > .tree").html(), a = s.hasClass("root");
    s.empty(), s.html(d(this, q, at).call(this, n, a).html()), u && s.find("& > .node__children > .tree").html(u), d(this, z, ut).call(this, s, r), d(this, I, it).call(this, s), s.attr("data-type", n), i && d(this, A, x).call(this);
  }
  /**
   * duplicate
   * @param {HTMLElement} $target
   * @param {boolean} useUpdate
   */
  duplicate(e, n = !0) {
    e = c(e);
    const i = c(e.get(0).outerHTML);
    d(this, I, it).call(this, i), e.after(i), n && d(this, A, x).call(this);
  }
  fold(e, n) {
    e = c(e), n === void 0 ? e.toggleClass("open") : n === !0 ? e.addClass("open") : e.removeClass("open");
  }
  clear() {
    l(this, w).tree && (l(this, w).body.empty(), this.replace({}, !1), d(this, A, x).call(this));
  }
  destroy() {
    c(window).off(F.END).off(Z.CLICK).off(Z.KEYUP), l(this, w).wrap.empty();
  }
  /**
   * replace
   * @param {object|array} data
   * @param {boolean} useUpdate
   */
  replace(e, n = !0) {
    l(this, w).body.empty(), e = xn(e);
    const i = d(this, wt, Le).call(this, e);
    this.import(i, e, !1), n && d(this, A, x).call(this);
  }
  /**
   * import data
   * @param {HTMLElement} target
   * @param {object|array} data
   * @param {boolean} useUpdate
   */
  import(e, n, i = !0) {
    c.each(n, (s, r) => {
      const u = ee(r), a = { key: s, value: r, type: u };
      this.addNode(e, {
        data: a,
        open: !1,
        callback: (g, h) => this.import(g, h, !1)
      }, !1);
    }), i && d(this, A, x).call(this);
  }
  /**
   * export
   * @param {HTMLElement} $node
   * @param {boolean} json
   * @param {number|boolean} space (number: space count, true: tab, false: 0)
   * @return {array|object}
   */
  export(e = void 0, n, i = 2) {
    let s = d(this, ct, Dt).call(this, e);
    if (n) {
      let r = 2;
      return i === !0 ? r = "	" : typeof i === f.NUMBER && (r = i), JSON.stringify(s, null, r);
    } else
      return s;
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
w = new WeakMap(), y = new WeakMap(), K = new WeakMap(), Ct = new WeakSet(), Re = function(e, n, i) {
  switch (e[n] = i, n) {
    case "theme":
      d(this, rt, Mt).call(this, i);
      break;
  }
  return !0;
}, rt = new WeakSet(), Mt = function(e) {
  e = ["system", "light", "dark"].indexOf(e) > -1 ? e : "system", l(this, w).body.attr("data-theme", e);
}, q = new WeakSet(), at = function(e, n = !1) {
  let i = `<li data-type="${e}" class="node${n ? " root" : ""}">`;
  return i += '<div class="node__body">', n || (i += `<div class="sort">${Ln}</div>`), i += '<div class="type"><button type="button"></button></div>', (e === f.OBJECT || e === f.ARRAY) && (i += `<button type="button" class="fold">${Rn}</button>`), n || (i += '<div class="key"></div>'), i += '<em class="count"></em>', n || (i += '<div class="value"></div>'), i += "</div>", i += '<div class="node__children"><ul class="tree"/></div>', i += "</li>", c(i);
}, wt = new WeakSet(), Le = function(e) {
  const n = ee(e), i = d(this, q, at).call(this, n, !0);
  return d(this, z, ut).call(this, i, {
    key: void 0,
    value: e,
    type: n,
    open: !0
  }), d(this, I, it).call(this, i), l(this, w).tree = c("<ul/>"), l(this, w).tree.append(i), l(this, w).body.append(l(this, w).tree), i;
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
  const { key: i, value: s, type: r, open: u } = n, a = e.hasClass("root"), g = e.children(".node__body");
  if (g.find(".type > button").html(`<i class="type-icon type-icon--${r}">${ve[r]}</i>`), (r === f.OBJECT || r === f.ARRAY) && this.fold(e, u), !a) {
    g.find(".key").html(`<div class="label-field" contenteditable="true" data-placeholder="empty">${i}</div>`);
    const h = g.find(".value");
    let p;
    switch (r) {
      case f.STRING:
        h.html(`<div contenteditable="true" data-placeholder="empty" class="label-field type-string">${String(s)}</div>`);
        break;
      case f.NUMBER:
        p = Number(s), isNaN(p) && (p = 0), h.html(`<input type="number" value="${p}" placeholder="0" class="label-field type-number"/>`);
        break;
      case f.BOOLEAN:
        p = s === "false" ? !1 : !!s, h.html(`<button type="button" data-value="${p}" class="label-switch type-boolean"><span><i>${p.toString().toUpperCase()}</i></span></button>`);
        break;
      case f.NULL:
        h.html('<em class="label-null type-null">NULL</em>');
        break;
    }
  }
  if (r === f.OBJECT || r === f.ARRAY) {
    const h = On(s);
    isNaN(h) || g.find(".count").text(h);
  }
}, X = new WeakSet(), lt = function(e) {
  return String(e.data("type"));
}, ot = new WeakSet(), Pt = function(e) {
  const n = d(this, X, lt).call(this, e), i = e.find("& > .node__body > .value");
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
}, A = new WeakSet(), x = function() {
  this.options.live && this.preview && typeof this.preview == "function" && this.preview(d(this, ct, Dt).call(this));
}, ct = new WeakSet(), Dt = function(e) {
  const n = (r, u) => {
    let a = u === f.ARRAY ? [] : {};
    return r.find("& > .node__children > ul > li").each((h, p) => {
      if (!(u === f.ARRAY || u === f.OBJECT))
        return !0;
      p = c(p);
      const v = d(this, X, lt).call(this, p);
      switch (v) {
        case f.OBJECT:
        case f.ARRAY:
          switch (u) {
            case f.ARRAY:
              a.push(n(p, v));
              break;
            case f.OBJECT:
              const b = p.find("& > .node__body > .key").text();
              b && (a[b] = n(p, v));
              break;
          }
          break;
        case f.STRING:
        case f.NUMBER:
        case f.BOOLEAN:
        case f.NULL:
          const R = d(this, ot, Pt).call(this, p);
          switch (u) {
            case f.ARRAY:
              a.push(R);
              break;
            case f.OBJECT:
              const b = p.find("& > .node__body > .key").text();
              b && (a[b] = R);
              break;
          }
          break;
      }
    }), a;
  };
  e = c(e);
  const i = (e == null ? void 0 : e.length) > 0 ? e : l(this, w).tree.children(".node"), s = d(this, X, lt).call(this, i);
  return [f.OBJECT, f.ARRAY].includes(s) ? n(i, s) : void 0;
}, I = new WeakSet(), it = function(e) {
  const n = e.find(".sort");
  n.length && n.on(F.START, d(this, Et, Te).bind(this)), e.find(".type > button").on("click", async (a) => {
    const g = c(a.currentTarget);
    if (a.stopPropagation(), g.parent().hasClass("open"))
      this.context && this.context.close();
    else {
      this.context && this.context.close();
      const h = g.closest(".node").hasClass("root");
      this.context = new Tn(this, g.closest(".node"), h), this.context.selectItem = (p, v, R) => d(this, vt, Ae).call(this, p, v, R);
    }
  }), e.find(".fold").on("click", (a) => {
    const h = c(a.currentTarget).closest(".node");
    this.fold(h);
  });
  const i = e.find(".key > .label-field");
  i.length && i.on("keydown", (a) => {
    if (a.keyCode === 13 || ne(a))
      return a.preventDefault();
  }).on("input", (a) => d(this, Q, ft).call(this, a)).on("blur", (a) => d(this, tt, ht).call(this, a));
  const s = e.find(".value > .type-string");
  s.length && s.on("keydown", (a) => {
    if (ne(a))
      return a.preventDefault();
  }).on("input", (a) => d(this, Q, ft).call(this, a)).on("blur", (a) => d(this, tt, ht).call(this, a));
  const r = e.find(".value > .type-number");
  r.length && r.on("input", (a) => d(this, Q, ft).call(this, a)).on("blur", (a) => d(this, tt, ht).call(this, a));
  const u = e.find(".value > .type-boolean");
  u.length && u.on("click", (a) => {
    const g = c(a.currentTarget), h = !g.data("value");
    g.data("value", h).find("i").text(h.toString().toUpperCase()), d(this, A, x).call(this);
  });
}, Q = new WeakSet(), ft = function() {
  P(this, K, !0);
}, tt = new WeakSet(), ht = function() {
  l(this, K) && (d(this, A, x).call(this), P(this, K, !1));
}, Et = new WeakSet(), Te = function(e) {
  if (P(this, y, {}), l(this, y).$node = c(e.currentTarget).closest(".node"), l(this, y).$area = l(this, y).$node.parent(), l(this, y).$nodes = l(this, y).$area.children(".node"), l(this, y).$nodes.length < 2) {
    P(this, y, void 0);
    return;
  }
  l(this, y).$nodes.on(F.MOVE, d(this, Nt, xe).bind(this)), c(window).on(F.END, d(this, kt, Oe).bind(this));
}, Nt = new WeakSet(), xe = function(e) {
  const n = c(e.currentTarget), i = n.children(".node__body");
  if (!(i.length > 0))
    return;
  const { y: s, height: r } = i.get(0).getBoundingClientRect(), u = r * 0.5 < e.y - s;
  if (l(this, y).activeNode || (l(this, w).body.addClass("dragging"), l(this, y).$area.addClass("drag-area"), l(this, y).$node.addClass("drag-select")), l(this, y).activeNode !== n.get(0))
    l(this, y).activeNode && c(l(this, y).activeNode).removeClass(nt.ALL), l(this, y).activeNode = n.get(0);
  else if (l(this, y).half === u)
    return;
  l(this, y).half = u, n.removeClass(nt.ALL).addClass(u ? nt.END : nt.START);
}, kt = new WeakSet(), Oe = function(e) {
  l(this, w).body.removeClass("dragging"), l(this, y).$area.removeClass("drag-area"), l(this, y).$node.removeClass("drag-select"), l(this, y).$nodes.removeClass(nt.ALL), l(this, y).$nodes.off(F.MOVE), c(window).off(F.END), l(this, y).half ? l(this, y).$node.insertAfter(l(this, y).activeNode) : l(this, y).$node.insertBefore(l(this, y).activeNode), P(this, y, void 0), d(this, A, x).call(this);
};
export {
  _n as default
};
