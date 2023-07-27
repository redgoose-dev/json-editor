var it = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var S = (t, e, n) => (it(t, e, "read from private field"), n ? n.call(t) : e.get(t)), w = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, kt = (t, e, n, i) => (it(t, e, "write to private field"), i ? i.call(t, n) : e.set(t, n), n);
var g = (t, e, n) => (it(t, e, "access private method"), n);
const j = document, U = window, Mt = j.documentElement, z = j.createElement.bind(j), Ht = z("div"), ot = z("table"), oe = z("tbody"), jt = z("tr"), { isArray: Q, prototype: At } = Array, { concat: re, filter: ht, indexOf: Rt, map: Ot, push: se, slice: Pt, some: pt, splice: ce } = At, ae = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, le = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, ue = /<.+>/, de = /^\w+$/;
function gt(t, e) {
  const n = fe(e);
  return !t || !n && !T(e) && !h(e) ? [] : !n && le.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && de.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class tt {
  constructor(e, n) {
    if (!e)
      return;
    if (ct(e))
      return e;
    let i = e;
    if (b(e)) {
      const o = n || j;
      if (i = ae.test(e) && T(o) ? o.getElementById(e.slice(1).replace(/\\/g, "")) : ue.test(e) ? Vt(e) : ct(o) ? o.find(e) : b(o) ? c(o).find(e) : gt(e, o), !i)
        return;
    } else if (M(e))
      return this.ready(e);
    (i.nodeType || i === U) && (i = [i]), this.length = i.length;
    for (let o = 0, s = this.length; o < s; o++)
      this[o] = i[o];
  }
  init(e, n) {
    return new tt(e, n);
  }
}
const r = tt.prototype, c = r.init;
c.fn = c.prototype = r;
r.length = 0;
r.splice = ce;
typeof Symbol == "function" && (r[Symbol.iterator] = At[Symbol.iterator]);
function ct(t) {
  return t instanceof tt;
}
function R(t) {
  return !!t && t === t.window;
}
function T(t) {
  return !!t && t.nodeType === 9;
}
function fe(t) {
  return !!t && t.nodeType === 11;
}
function h(t) {
  return !!t && t.nodeType === 1;
}
function he(t) {
  return !!t && t.nodeType === 3;
}
function pe(t) {
  return typeof t == "boolean";
}
function M(t) {
  return typeof t == "function";
}
function b(t) {
  return typeof t == "string";
}
function x(t) {
  return t === void 0;
}
function P(t) {
  return t === null;
}
function Bt(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function bt(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
c.isWindow = R;
c.isFunction = M;
c.isArray = Q;
c.isNumeric = Bt;
c.isPlainObject = bt;
function p(t, e, n) {
  if (n) {
    let i = t.length;
    for (; i--; )
      if (e.call(t[i], i, t[i]) === !1)
        return t;
  } else if (bt(t)) {
    const i = Object.keys(t);
    for (let o = 0, s = i.length; o < s; o++) {
      const a = i[o];
      if (e.call(t[a], a, t[a]) === !1)
        return t;
    }
  } else
    for (let i = 0, o = t.length; i < o; i++)
      if (e.call(t[i], i, t[i]) === !1)
        return t;
  return t;
}
c.each = p;
r.each = function(t) {
  return p(this, t);
};
r.empty = function() {
  return this.each((t, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function Z(...t) {
  const e = pe(t[0]) ? t.shift() : !1, n = t.shift(), i = t.length;
  if (!n)
    return {};
  if (!i)
    return Z(e, c, n);
  for (let o = 0; o < i; o++) {
    const s = t[o];
    for (const a in s)
      e && (Q(s[a]) || bt(s[a])) ? ((!n[a] || n[a].constructor !== s[a].constructor) && (n[a] = new s[a].constructor()), Z(e, n[a], s[a])) : n[a] = s[a];
  }
  return n;
}
c.extend = Z;
r.extend = function(t) {
  return Z(r, t);
};
const ge = /\S+/g;
function et(t) {
  return b(t) ? t.match(ge) || [] : [];
}
r.toggleClass = function(t, e) {
  const n = et(t), i = !x(e);
  return this.each((o, s) => {
    h(s) && p(n, (a, l) => {
      i ? e ? s.classList.add(l) : s.classList.remove(l) : s.classList.toggle(l);
    });
  });
};
r.addClass = function(t) {
  return this.toggleClass(t, !0);
};
r.removeAttr = function(t) {
  const e = et(t);
  return this.each((n, i) => {
    h(i) && p(e, (o, s) => {
      i.removeAttribute(s);
    });
  });
};
function be(t, e) {
  if (t) {
    if (b(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !h(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return P(n) ? void 0 : n;
      }
      return x(e) ? this : P(e) ? this.removeAttr(t) : this.each((n, i) => {
        h(i) && i.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
r.attr = be;
r.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
r.hasClass = function(t) {
  return !!t && pt.call(this, (e) => h(e) && e.classList.contains(t));
};
r.get = function(t) {
  return x(t) ? Pt.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
};
r.eq = function(t) {
  return c(this.get(t));
};
r.first = function() {
  return this.eq(0);
};
r.last = function() {
  return this.eq(-1);
};
function ye(t) {
  return x(t) ? this.get().map((e) => h(e) || he(e) ? e.textContent : "").join("") : this.each((e, n) => {
    h(n) && (n.textContent = t);
  });
}
r.text = ye;
function $(t, e, n) {
  if (!h(t))
    return;
  const i = U.getComputedStyle(t, null);
  return n ? i.getPropertyValue(e) || void 0 : i[e] || t.style[e];
}
function _(t, e) {
  return parseInt($(t, e), 10) || 0;
}
function $t(t, e) {
  return _(t, `border${e ? "Left" : "Top"}Width`) + _(t, `padding${e ? "Left" : "Top"}`) + _(t, `padding${e ? "Right" : "Bottom"}`) + _(t, `border${e ? "Right" : "Bottom"}Width`);
}
const rt = {};
function me(t) {
  if (rt[t])
    return rt[t];
  const e = z(t);
  j.body.insertBefore(e, null);
  const n = $(e, "display");
  return j.body.removeChild(e), rt[t] = n !== "none" ? n : "block";
}
function Et(t) {
  return $(t, "display") === "none";
}
function Dt(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function nt(t) {
  return b(t) ? (e, n) => Dt(n, t) : M(t) ? t : ct(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
r.filter = function(t) {
  const e = nt(t);
  return c(ht.call(this, (n, i) => e.call(n, i, n)));
};
function L(t, e) {
  return e ? t.filter(e) : t;
}
r.detach = function(t) {
  return L(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const we = /^\s*<(\w+)[^>]*>/, xe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, St = {
  "*": Ht,
  tr: oe,
  td: jt,
  th: jt,
  thead: ot,
  tbody: ot,
  tfoot: ot
};
function Vt(t) {
  if (!b(t))
    return [];
  if (xe.test(t))
    return [z(RegExp.$1)];
  const e = we.test(t) && RegExp.$1, n = St[e] || St["*"];
  return n.innerHTML = t, c(n.childNodes).detach().get();
}
c.parseHTML = Vt;
r.has = function(t) {
  const e = b(t) ? (n, i) => gt(t, i).length : (n, i) => i.contains(t);
  return this.filter(e);
};
r.not = function(t) {
  const e = nt(t);
  return this.filter((n, i) => (!b(t) || h(i)) && !e.call(i, n, i));
};
function E(t, e, n, i) {
  const o = [], s = M(e), a = i && nt(i);
  for (let l = 0, d = t.length; l < d; l++)
    if (s) {
      const u = e(t[l]);
      u.length && se.apply(o, u);
    } else {
      let u = t[l][e];
      for (; u != null && !(i && a(-1, u)); )
        o.push(u), u = n ? u[e] : null;
    }
  return o;
}
function Ft(t) {
  return t.multiple && t.options ? E(ht.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function ve(t) {
  return arguments.length ? this.each((e, n) => {
    const i = n.multiple && n.options;
    if (i || Yt.test(n.type)) {
      const o = Q(t) ? Ot.call(t, String) : P(t) ? [] : [String(t)];
      i ? p(n.options, (s, a) => {
        a.selected = o.indexOf(a.value) >= 0;
      }, !0) : n.checked = o.indexOf(n.value) >= 0;
    } else
      n.value = x(t) || P(t) ? "" : t;
  }) : this[0] && Ft(this[0]);
}
r.val = ve;
r.is = function(t) {
  const e = nt(t);
  return pt.call(this, (n, i) => e.call(n, i, n));
};
c.guid = 1;
function k(t) {
  return t.length > 1 ? ht.call(t, (e, n, i) => Rt.call(i, e) === n) : t;
}
c.unique = k;
r.add = function(t, e) {
  return c(k(this.get().concat(c(t, e).get())));
};
r.children = function(t) {
  return L(c(k(E(this, (e) => e.children))), t);
};
r.parent = function(t) {
  return L(c(k(E(this, "parentNode"))), t);
};
r.index = function(t) {
  const e = t ? c(t)[0] : this[0], n = t ? this : c(e).parent().children();
  return Rt.call(n, e);
};
r.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const n = this.parent();
  return n.length ? n.closest(t) : e;
};
r.siblings = function(t) {
  return L(c(k(E(this, (e) => c(e).parent().children().not(e)))), t);
};
r.find = function(t) {
  return c(k(E(this, (e) => gt(t, e))));
};
const Ce = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, _e = /^$|^module$|\/(java|ecma)script/i, ke = ["type", "src", "nonce", "noModule"];
function je(t, e) {
  const n = c(t);
  n.filter("script").add(n.find("script")).each((i, o) => {
    if (_e.test(o.type) && Mt.contains(o)) {
      const s = z("script");
      s.text = o.textContent.replace(Ce, ""), p(ke, (a, l) => {
        o[l] && (s[l] = o[l]);
      }), e.head.insertBefore(s, null), e.head.removeChild(s);
    }
  });
}
function $e(t, e, n, i, o) {
  i ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), o && je(e, t.ownerDocument);
}
function N(t, e, n, i, o, s, a, l) {
  return p(t, (d, u) => {
    p(c(u), (v, y) => {
      p(c(e), (_t, m) => {
        const O = n ? y : m, f = n ? m : y, H = n ? v : _t;
        $e(O, H ? f.cloneNode(!0) : f, i, o, !H);
      }, l);
    }, a);
  }, s), e;
}
r.after = function() {
  return N(arguments, this, !1, !1, !1, !0, !0);
};
r.append = function() {
  return N(arguments, this, !1, !1, !0);
};
function Ee(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (x(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, i) => {
    h(i) && (e ? c(i).empty().append(t) : i.innerHTML = t);
  });
}
r.html = Ee;
r.appendTo = function(t) {
  return N(arguments, this, !0, !1, !0);
};
r.wrapInner = function(t) {
  return this.each((e, n) => {
    const i = c(n), o = i.contents();
    o.length ? o.wrapAll(t) : i.append(t);
  });
};
r.before = function() {
  return N(arguments, this, !1, !0);
};
r.wrapAll = function(t) {
  let e = c(t), n = e[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(e), this.appendTo(n);
};
r.wrap = function(t) {
  return this.each((e, n) => {
    const i = c(t)[0];
    c(n).wrapAll(e ? i.cloneNode(!0) : i);
  });
};
r.insertAfter = function(t) {
  return N(arguments, this, !0, !1, !1, !1, !1, !0);
};
r.insertBefore = function(t) {
  return N(arguments, this, !0, !0);
};
r.prepend = function() {
  return N(arguments, this, !1, !0, !0, !0, !0);
};
r.prependTo = function(t) {
  return N(arguments, this, !0, !0, !0, !1, !1, !0);
};
r.contents = function() {
  return c(k(E(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
r.next = function(t, e, n) {
  return L(c(k(E(this, "nextElementSibling", e, n))), t);
};
r.nextAll = function(t) {
  return this.next(t, !0);
};
r.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
r.parents = function(t, e) {
  return L(c(k(E(this, "parentElement", !0, e))), t);
};
r.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
r.prev = function(t, e, n) {
  return L(c(k(E(this, "previousElementSibling", e, n))), t);
};
r.prevAll = function(t) {
  return this.prev(t, !0);
};
r.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
r.map = function(t) {
  return c(re.apply([], Ot.call(this, (e, n) => t.call(e, n, e))));
};
r.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
r.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && $(n, "position") === "static"; )
      n = n.offsetParent;
    return n || Mt;
  });
};
r.slice = function(t, e) {
  return c(Pt.call(this, t, e));
};
const Se = /-([a-z])/g;
function yt(t) {
  return t.replace(Se, (e, n) => n.toUpperCase());
}
r.ready = function(t) {
  const e = () => setTimeout(t, 0, c);
  return j.readyState !== "loading" ? e() : j.addEventListener("DOMContentLoaded", e), this;
};
r.unwrap = function() {
  return this.parent().each((t, e) => {
    if (e.tagName === "BODY")
      return;
    const n = c(e);
    n.replaceWith(n.children());
  }), this;
};
r.offset = function() {
  const t = this[0];
  if (!t)
    return;
  const e = t.getBoundingClientRect();
  return {
    top: e.top + U.pageYOffset,
    left: e.left + U.pageXOffset
  };
};
r.position = function() {
  const t = this[0];
  if (!t)
    return;
  const e = $(t, "position") === "fixed", n = e ? t.getBoundingClientRect() : this.offset();
  if (!e) {
    const i = t.ownerDocument;
    let o = t.offsetParent || i.documentElement;
    for (; (o === i.body || o === i.documentElement) && $(o, "position") === "static"; )
      o = o.parentNode;
    if (o !== t && h(o)) {
      const s = c(o).offset();
      n.top -= s.top + _(o, "borderTopWidth"), n.left -= s.left + _(o, "borderLeftWidth");
    }
  }
  return {
    top: n.top - _(t, "marginTop"),
    left: n.left - _(t, "marginLeft")
  };
};
const It = {
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
r.prop = function(t, e) {
  if (t) {
    if (b(t))
      return t = It[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, i) => {
        i[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
r.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[It[t] || t];
  });
};
const Le = /^--/;
function mt(t) {
  return Le.test(t);
}
const st = {}, { style: Ne } = Ht, Te = ["webkit", "moz", "ms"];
function ze(t, e = mt(t)) {
  if (e)
    return t;
  if (!st[t]) {
    const n = yt(t), i = `${n[0].toUpperCase()}${n.slice(1)}`, o = `${n} ${Te.join(`${i} `)}${i}`.split(" ");
    p(o, (s, a) => {
      if (a in Ne)
        return st[t] = a, !1;
    });
  }
  return st[t];
}
const Me = {
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
function Ut(t, e, n = mt(t)) {
  return !n && !Me[t] && Bt(e) ? `${e}px` : e;
}
function He(t, e) {
  if (b(t)) {
    const n = mt(t);
    return t = ze(t, n), arguments.length < 2 ? this[0] && $(this[0], t, n) : t ? (e = Ut(t, e, n), this.each((i, o) => {
      h(o) && (n ? o.style.setProperty(t, e) : o.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
r.css = He;
function Zt(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const Ae = /^\s+|\s+$/;
function Lt(t, e) {
  const n = t.dataset[e] || t.dataset[yt(e)];
  return Ae.test(n) ? n : Zt(JSON.parse, n);
}
function Re(t, e, n) {
  n = Zt(JSON.stringify, n), t.dataset[yt(e)] = n;
}
function Oe(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const i in this[0].dataset)
      n[i] = Lt(this[0], i);
    return n;
  }
  if (b(t))
    return arguments.length < 2 ? this[0] && Lt(this[0], t) : x(e) ? this : this.each((n, i) => {
      Re(i, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
r.data = Oe;
function Wt(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
p([!0, !1], (t, e) => {
  p(["Width", "Height"], (n, i) => {
    const o = `${e ? "outer" : "inner"}${i}`;
    r[o] = function(s) {
      if (this[0])
        return R(this[0]) ? e ? this[0][`inner${i}`] : this[0].document.documentElement[`client${i}`] : T(this[0]) ? Wt(this[0], i) : this[0][`${e ? "offset" : "client"}${i}`] + (s && e ? _(this[0], `margin${n ? "Top" : "Left"}`) + _(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
p(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  r[n] = function(i) {
    if (!this[0])
      return x(i) ? void 0 : this;
    if (!arguments.length)
      return R(this[0]) ? this[0].document.documentElement[`client${e}`] : T(this[0]) ? Wt(this[0], e) : this[0].getBoundingClientRect()[n] - $t(this[0], !t);
    const o = parseInt(i, 10);
    return this.each((s, a) => {
      if (!h(a))
        return;
      const l = $(a, "boxSizing");
      a.style[n] = Ut(n, o + (l === "border-box" ? $t(a, !t) : 0));
    });
  };
});
const Nt = "___cd";
r.toggle = function(t) {
  return this.each((e, n) => {
    if (!h(n))
      return;
    const i = Et(n);
    (x(t) ? i : t) ? (n.style.display = n[Nt] || "", Et(n) && (n.style.display = me(n.tagName))) : i || (n[Nt] = $(n, "display"), n.style.display = "none");
  });
};
r.hide = function() {
  return this.toggle(!1);
};
r.show = function() {
  return this.toggle(!0);
};
const Tt = "___ce", wt = ".", xt = { focus: "focusin", blur: "focusout" }, qt = { mouseenter: "mouseover", mouseleave: "mouseout" }, Pe = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function vt(t) {
  return qt[t] || xt[t] || t;
}
function Ct(t) {
  const e = t.split(wt);
  return [e[0], e.slice(1).sort()];
}
r.trigger = function(t, e) {
  if (b(t)) {
    const [i, o] = Ct(t), s = vt(i);
    if (!s)
      return this;
    const a = Pe.test(s) ? "MouseEvents" : "HTMLEvents";
    t = j.createEvent(a), t.initEvent(s, !0, !0), t.namespace = o.join(wt), t.___ot = i;
  }
  t.___td = e;
  const n = t.___ot in xt;
  return this.each((i, o) => {
    n && M(o[t.___ot]) && (o[`___i${t.type}`] = !0, o[t.___ot](), o[`___i${t.type}`] = !1), o.dispatchEvent(t);
  });
};
function Jt(t) {
  return t[Tt] = t[Tt] || {};
}
function Be(t, e, n, i, o) {
  const s = Jt(t);
  s[e] = s[e] || [], s[e].push([n, i, o]), t.addEventListener(e, o);
}
function Kt(t, e) {
  return !e || !pt.call(e, (n) => t.indexOf(n) < 0);
}
function W(t, e, n, i, o) {
  const s = Jt(t);
  if (e)
    s[e] && (s[e] = s[e].filter(([a, l, d]) => {
      if (o && d.guid !== o.guid || !Kt(a, n) || i && i !== l)
        return !0;
      t.removeEventListener(e, d);
    }));
  else
    for (e in s)
      W(t, e, n, i, o);
}
r.off = function(t, e, n) {
  if (x(t))
    this.each((i, o) => {
      !h(o) && !T(o) && !R(o) || W(o);
    });
  else if (b(t))
    M(e) && (n = e, e = ""), p(et(t), (i, o) => {
      const [s, a] = Ct(o), l = vt(s);
      this.each((d, u) => {
        !h(u) && !T(u) && !R(u) || W(u, l, a, e, n);
      });
    });
  else
    for (const i in t)
      this.off(i, t[i]);
  return this;
};
r.remove = function(t) {
  return L(this, t).detach().off(), this;
};
r.replaceWith = function(t) {
  return this.before(t).remove();
};
r.replaceAll = function(t) {
  return c(t).replaceWith(this), this;
};
function De(t, e, n, i, o) {
  if (!b(t)) {
    for (const s in t)
      this.on(s, e, n, t[s], o);
    return this;
  }
  return b(e) || (x(e) || P(e) ? e = "" : x(n) ? (n = e, e = "") : (i = n, n = e, e = "")), M(i) || (i = n, n = void 0), i ? (p(et(t), (s, a) => {
    const [l, d] = Ct(a), u = vt(l), v = l in qt, y = l in xt;
    u && this.each((_t, m) => {
      if (!h(m) && !T(m) && !R(m))
        return;
      const O = function(f) {
        if (f.target[`___i${f.type}`])
          return f.stopImmediatePropagation();
        if (f.namespace && !Kt(d, f.namespace.split(wt)) || !e && (y && (f.target !== m || f.___ot === u) || v && f.relatedTarget && m.contains(f.relatedTarget)))
          return;
        let H = m;
        if (e) {
          let A = f.target;
          for (; !Dt(A, e); )
            if (A === m || (A = A.parentNode, !A))
              return;
          H = A;
        }
        Object.defineProperty(f, "currentTarget", {
          configurable: !0,
          get() {
            return H;
          }
        }), Object.defineProperty(f, "delegateTarget", {
          configurable: !0,
          get() {
            return m;
          }
        }), Object.defineProperty(f, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const ie = i.call(H, f, f.___td);
        o && W(m, u, d, e, O), ie === !1 && (f.preventDefault(), f.stopPropagation());
      };
      O.guid = i.guid = i.guid || c.guid++, Be(m, u, d, e, O);
    });
  }), this) : this;
}
r.on = De;
function Ve(t, e, n, i) {
  return this.on(t, e, n, i, !0);
}
r.one = Ve;
const Fe = /\r?\n/g;
function Ie(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(Fe, `\r
`))}`;
}
const Ue = /file|reset|submit|button|image/i, Yt = /radio|checkbox/i;
r.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    p(n.elements || [n], (i, o) => {
      if (o.disabled || !o.name || o.tagName === "FIELDSET" || Ue.test(o.type) || Yt.test(o.type) && !o.checked)
        return;
      const s = Ft(o);
      if (!x(s)) {
        const a = Q(s) ? s : [s];
        p(a, (l, d) => {
          t += Ie(o.name, d);
        });
      }
    });
  }), t.slice(1);
};
function zt(t) {
  return t == null ? "null" : Array.isArray(t) ? "array" : typeof t == "string" ? "string" : typeof t == "number" ? "number" : typeof t == "boolean" ? "boolean" : "object";
}
function Gt(t) {
  try {
    return typeof t == "string" ? JSON.parse(t) : Array.isArray(t) ? Object.assign([], t) : c.isPlainObject(t) ? Object.assign({}, t) : {};
  } catch (e) {
    console.error("error", e.message);
  }
}
function Ze(t) {
  return Array.isArray(t) ? t.length : c.isPlainObject(t) ? Object.keys(t).length : NaN;
}
class We {
  constructor() {
  }
}
const qe = {
  target: void 0,
  data: void 0,
  between: "after",
  open: !0,
  callback: void 0
}, Je = '<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-90, 10, 10)"><path d="M7 9L10 12L13 9" fill="currentColor"/><path d="M7 9L10 12L13 9H7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>', Ke = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', Ye = {
  object: '<svg viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1)"><path d="M2.296 5.166C2.296 7.238 3.78 8.162 5.166 8.162C6.538 8.162 8.022 7.238 8.022 5.166C8.022 3.094 6.538 2.156 5.166 2.156C3.78 2.156 2.296 3.094 2.296 5.166ZM0 5.18C0 2.03 2.366 0 5.166 0C7.952 0 10.318 2.03 10.318 5.18C10.318 8.316 7.952 10.346 5.166 10.346C2.366 10.346 0 8.316 0 5.18Z" fill="currentColor"/></g></svg>',
  array: '<svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.728 9.926L6.902 7.658H2.87L2.044 9.926H0L3.808 0H6.048L9.828 9.926H7.728ZM4.886 2.142L3.514 5.894H6.258L4.886 2.142Z" fill="currentColor"/></svg>',
  string: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1.5)"><path d="M7.39203 2.576L5.65603 3.108C5.55803 2.562 5.11003 1.708 3.85003 1.708C2.91203 1.708 2.29603 2.31 2.29603 2.968C2.29603 3.514 2.64603 3.948 3.37403 4.088L4.76003 4.354C6.56603 4.704 7.53203 5.88 7.53203 7.28C7.53203 8.806 6.25803 10.346 3.94803 10.346C1.31603 10.346 0.154031 8.652 3.05176e-05 7.238L1.79203 6.762C1.87603 7.742 2.56203 8.624 3.96203 8.624C4.99803 8.624 5.57203 8.106 5.57203 7.406C5.57203 6.832 5.13803 6.384 4.36803 6.23L2.98203 5.95C1.40003 5.628 0.378031 4.606 0.378031 3.108C0.378031 1.344 1.96003 0 3.83603 0C6.24403 0 7.16803 1.456 7.39203 2.576Z" fill="currentColor"/></g></svg>',
  number: '<svg viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1)"><path d="M8.47003 9.926H6.44003L1.93203 2.884V9.926H3.05176e-05V0H2.40803L6.53803 6.566V0H8.47003V9.926Z" fill="currentColor"/></g></svg>',
  boolean: '<svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 .75)"><path d="M3.05176e-05 0H3.57003C5.50203 0 6.59403 1.134 6.59403 2.674C6.59403 3.696 5.97803 4.522 5.15203 4.802C6.11803 5.04 6.90203 5.922 6.90203 7.154C6.90203 8.764 5.69803 9.926 3.83603 9.926H3.05176e-05V0ZM1.90403 4.102H3.27603C4.15803 4.102 4.69003 3.612 4.69003 2.856C4.69003 2.1 4.20003 1.624 3.26203 1.624H1.90403V4.102ZM1.90403 8.316H3.47203C4.41003 8.316 4.97003 7.826 4.97003 7.028C4.97003 6.244 4.46603 5.698 3.50003 5.698H1.90403V8.316Z" fill="currentColor"/></g></svg>',
  null: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1.5)"><path d="M3.808 10.15C1.694 10.15 0 8.848 0 6.412V0H1.932V6.272C1.932 7.574 2.66 8.26 3.808 8.26C4.984 8.26 5.698 7.574 5.698 6.272V0H7.63V6.412C7.63 8.848 5.936 10.15 3.808 10.15Z" fill="currentColor"/></g></svg>'
};
var C, q, B, at, J, Xt, K, Qt, D, lt, Y, te, V, ut, G, ee, X, ne, F, dt;
class Ge {
  constructor(e, n) {
    w(this, B);
    w(this, J);
    w(this, K);
    w(this, D);
    w(this, Y);
    w(this, V);
    w(this, G);
    w(this, X);
    w(this, F);
    w(this, C, {
      wrap: null,
      tree: null
    });
    w(this, q, void 0);
    S(this, C).wrap = c(e), kt(this, q, new We()), this.replace(n);
  }
  clear() {
    S(this, C).tree && S(this, C).wrap.empty();
  }
  /**
   * replace
   * @param {object|array} src
   */
  replace(e) {
    this.clear(), e = Gt(e);
    const n = g(this, J, Xt).call(this, e);
    this.import(n, e);
  }
  /**
   * import data
   * @param {HTMLElement} target
   * @param {object|array} src
   */
  import(e, n) {
    c(e), c.each(n, (i, o) => {
      const s = zt(o), a = { key: i, value: o, type: s };
      this.addNode({
        target: e,
        data: a,
        between: "after",
        open: !1,
        callback: (l, d) => this.import(l, d)
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
    e = Object.assign({}, qe, e);
    const { target: n, data: i, between: o, open: s, callback: a } = e, l = c(n), { key: d, value: u, type: v } = i, y = g(this, B, at).call(this, v);
    g(this, Y, te).call(this, y), g(this, V, ut).call(this, y, s), g(this, D, lt).call(this, y, v), g(this, G, ee).call(this, y, d), g(this, F, dt).call(this, y, u), g(this, X, ne).call(this, y, v, u), g(this, K, Qt).call(this, l.find("& > .node__children > ul"), y, o), (v === "array" || v === "object") && a && typeof a == "function" && a(y.get(0), u);
  }
  changeNodeType(e, n) {
    c(e).attr("data-type", n);
  }
  duplicateNode() {
  }
  removeNode() {
  }
  controlFold(e, n) {
    const i = c(e);
    n === void 0 ? i.toggleClass("open") : n === !0 ? i.addClass("open") : i.removeClass("open");
  }
  destroy() {
  }
}
C = new WeakMap(), q = new WeakMap(), B = new WeakSet(), at = function(e, n = !1) {
  let i = `<li data-type="${e}" class="node">`;
  return i += '<div class="node__body">', n || (i += `<span class="sort">${Ke}</span>`), i += '<button type="button" class="type"></button>', i += `<button type="button" class="fold">${Je}</button>`, n || (i += '<div class="key"></div>'), i += '<em class="count"></em>', n || (i += '<div class="value"></div>'), i += "</div>", i += '<div class="node__children"><ul class="tree"/></div>', i += "</li>", c(i);
}, J = new WeakSet(), Xt = function(e) {
  const n = zt(e), i = g(this, B, at).call(this, n, !0);
  return g(this, V, ut).call(this, i, !0), g(this, D, lt).call(this, i, n), g(this, F, dt).call(this, i, e), S(this, C).tree = c('<ul class="root"/>'), S(this, C).tree.append(i), S(this, C).wrap.append(S(this, C).tree), i;
}, K = new WeakSet(), Qt = function(e, n, i) {
  switch (i) {
    case "before":
      e.prepend(n);
      break;
    default:
      e.append(n);
      break;
  }
}, D = new WeakSet(), lt = function(e, n) {
  const i = e.find(".type");
  i.html(`<i class="type-icon type-icon--${n}">${Ye[n]}</i>`), i.on("click", (o) => {
    console.log(c(o.currentTarget));
  });
}, Y = new WeakSet(), te = function(e) {
}, V = new WeakSet(), ut = function(e, n) {
  const i = e.find(".fold");
  this.controlFold(e, n), i.on("click", (o) => {
    const a = c(o.currentTarget).closest(".node");
    this.controlFold(a);
  });
}, G = new WeakSet(), ee = function(e, n) {
  const i = e.find(".key");
  let o;
  function s(a) {
    if (a.keyCode === 13)
      return a.preventDefault();
  }
  o = c(`<div class="label-field" contenteditable="true" data-placeholder="empty">${n}</div>`), o.on("keydown", s), o && i.empty().append(o);
}, X = new WeakSet(), ne = function(e, n, i) {
  const o = e.find(".value");
  let s;
  function a(d) {
    if (c(this), d.ctrlKey || d.metaKey)
      switch (d.keyCode) {
        case 66:
        case 98:
          d.preventDefault();
          break;
        case 73:
        case 105:
          d.preventDefault();
          break;
        case 85:
        case 117:
          d.preventDefault();
          break;
      }
  }
  function l(d) {
    const u = c(d.currentTarget), v = !u.data("value");
    u.data("value", v).find("i").text(v.toString().toUpperCase());
  }
  switch (n) {
    case "string":
      s = c(`<div class="label-field" contenteditable="true" data-placeholder="empty">${i}</div>`), s.on("keydown", a);
      break;
    case "number":
      s = c(`<input type="number" value="${i}" placeholder="0" class="label-field"/>`);
      break;
    case "boolean":
      s = c(`<button type="button" data-value="${i}" class="label-switch"><span><i>${i.toString().toUpperCase()}</i></span></button>`), s.on("click", l);
      break;
    case "null":
      s = c('<em class="label-null">NULL</em>');
      break;
  }
  s && o.empty().append(s);
}, F = new WeakSet(), dt = function(e, n) {
  const i = e.find(".count"), o = Ze(n);
  isNaN(o) || i.text(o);
};
const Xe = `.json-editor{--json-editor-font-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";--json-editor-font-eng: "Helvetica Neue", sans-serif;--json-editor-color-bg: hsl(0 0% 100%);--json-editor-color-base: hsl(0 0% 13%);--json-editor-color-blur: hsl(0 0% 67%);--json-editor-color-object: hsl(174 66% 39%);--json-editor-color-array: hsl(191 75% 53%);--json-editor-color-string: hsl(5 87% 59%);--json-editor-color-number: hsl(33 89% 55%);--json-editor-color-boolean: hsl(45 89% 54%);--json-editor-color-null: hsl(0 0% 58%);--json-editor-color-active: hsla(0 0% 0% / 6%);--json-editor-color-focus: hsl(5 87% 59%);--json-editor-color-error: hsl(0 96% 52%);--json-editor-font-size: 13px;font-family:var(--json-editor-font-base);color:var(--json-editor-color-base);font-size:16px;line-height:1.15}.root{position:relative;margin:0;padding:0;list-style:none}.type-icon{display:grid;width:var(--type-icon-size, 24px);height:var(--type-icon-size, 24px);place-content:center;box-sizing:border-box;border-radius:4px;background:var(--type-icon-color, #aaa)}.type-icon svg{display:block;box-sizing:border-box;color:#fff;width:var(--type-icon-width)}.type-icon--object{--type-icon-color: var(--json-editor-color-object);--type-icon-width: calc(var(--type-icon-size, 10px) + 1px)}.type-icon--array{--type-icon-color: var(--json-editor-color-array);--type-icon-width: var(--type-icon-size, 10px)}.type-icon--string{--type-icon-color: var(--json-editor-color-string);--type-icon-width: calc(var(--type-icon-size, 10px) - 2px)}.type-icon--number{--type-icon-color: var(--json-editor-color-number);--type-icon-width: calc(var(--type-icon-size, 10px) - 1px)}.type-icon--boolean{--type-icon-color: var(--json-editor-color-boolean);--type-icon-width: calc(var(--type-icon-size, 10px) - 3px)}.type-icon--null{--type-icon-color: var(--json-editor-color-null);--type-icon-width: calc(var(--type-icon-size, 10px) - 2px)}.label-field{margin:-4px 0;padding:4px 6px;min-width:var(--label-min-width, unset);min-height:24px;outline:none;font-size:var(--json-editor-font-size);line-height:1.42;box-sizing:border-box;border-radius:2px;background-color:#0000;box-shadow:0 0 0 .5px #0000;transition:background-color .16s ease-out,box-shadow .2s ease-out;cursor:text}.label-field:hover,.label-field:focus{background-color:var(--json-editor-color-active)}.label-field:focus{box-shadow:0 0 0 .5px #00000040}.label-field:empty:before{content:attr(data-placeholder);color:var(--json-editor-color-blur)}.label-field[type=number]{border:none;width:100px}.label-field[type=number]::-webkit-outer-spin-button,.label-field[type=number]::-webkit-inner-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none}.label-null{display:block;padding:0 6px;color:var(--json-editor-color-blur);font-style:normal;letter-spacing:-.5px;-webkit-user-select:none;user-select:none;font-size:var(--json-editor-font-size)}.label-switch{--switch-width: 36px;--switch-height: 18px;--switch-offset: 3px;--switch-speed: .1s;--switch-unit-size: calc(var(--switch-height) - (var(--switch-offset) * 2));display:block;margin:0 0 0 6px;padding:2px 0;background:none;border:none;font-size:0;cursor:pointer}.label-switch span{display:block;position:relative;padding:var(--switch-offset);width:var(--switch-width);height:var(--switch-height);border-radius:calc(var(--switch-height) * .5);box-shadow:inset 0 0 0 1px var(--json-editor-color-blur);transition:box-shadow .16s ease-out;box-sizing:border-box}.label-switch i{display:block;width:var(--switch-unit-size);height:var(--switch-unit-size);background-color:var(--switch-unit-color, var(--json-editor-color-blur));border-radius:var(--switch-unit-size);pointer-events:none;transform:translate(var(--switch-unit-x));transition:transform var(--switch-speed) ease-out,width var(--switch-speed) ease-out,background-color .24s ease-out}.label-switch:active span{box-shadow:inset 0 0 0 1px var(--json-editor-color-active)}.label-switch:active[data-value=false] i{width:calc(var(--switch-unit-size) + 6px)}.label-switch:active[data-value=true] i{width:calc(var(--switch-unit-size) + 6px);transform:translate(calc(var(--switch-width) - var(--switch-offset) * 2 - var(--switch-unit-size) - 6px))}.label-switch:focus-visible{outline:none}.label-switch:focus-visible span{outline:2px solid var(--json-editor-color-focus);outline-offset:1px}.label-switch[data-value=false]{--switch-unit-x: 0}.label-switch[data-value=true]{--switch-unit-x: calc(var(--switch-width) - (var(--switch-offset) * 2) - var(--switch-unit-size));--switch-unit-color: var(--json-editor-color-object)}.node__body{position:relative;display:flex;align-items:center;box-sizing:border-box}.node__body .sort{display:block;box-sizing:border-box;cursor:move;padding:0 4px 0 0}.node__body .sort svg{display:block;width:24px}.node__body .type{display:block;margin:-2px -2px -2px -4px;padding:2px;box-sizing:border-box;border:none;background:none;outline:none;cursor:pointer;transition:opacity .12s ease-out;border-radius:6px}.node__body .type:active{opacity:.5}.node__body .type:focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-1px}.node__body .type.open{opacity:.25}.node__body .fold{display:block;width:28px;height:28px;margin:-8px -8px -8px 0;padding:0;background:none;border:none;box-sizing:border-box;cursor:pointer}.node__body .fold:focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-6px}.node__body .fold svg{display:block;margin:0 auto;width:var(--fold-arrow-size, 20px);rotate:0deg;box-sizing:border-box;transition:rotate,.16s ease-out}.node__body .key{margin-left:6px;--label-min-width: 42px}.node__body .count{display:block;margin:0;pointer-events:none;padding:0 0 0 8px;color:var(--json-editor-color-blur);font-style:normal;-webkit-user-select:none;user-select:none;font-size:14px;line-height:normal}.node__body .value{display:flex;align-items:center;gap:0 6px;font-size:var(--json-editor-font-size);line-height:1.42;--label-min-width: 72px}.node__body .value:before{content:":"}.node__children>.tree{position:relative;display:none;gap:6px 0;margin:6px 0 0;padding:0 0 0 24px;list-style:none}.node__children>.tree:not(:empty):before{content:"";display:block;position:absolute;left:10px;top:0;bottom:11px;width:4px;border-width:0 0 0 1px;border-style:dashed;border-color:#b8b8b8}.node__children>.tree:not(:empty):after{content:"";display:block;position:absolute;left:8px;bottom:10px;width:5px;height:5px;background:hsl(0,0%,72%);border-radius:50%}.node.open>.node__body .fold svg{rotate:90deg}.node.open>.node__children>.tree{display:grid}.node[data-type=object]>.node__body .count:before{content:"{"}.node[data-type=object]>.node__body .count:after{content:"}"}.node[data-type=object]>.node__body .value{display:none}.node[data-type=array]>.node__body .count:before{content:"["}.node[data-type=array]>.node__body .count:after{content:"]"}.node[data-type=array]>.node__body .value{display:none}.node[data-type=string]>.node__body .fold{display:none}.node[data-type=number]>.node__body .fold{display:none}.node[data-type=boolean]>.node__body .fold{display:none}.node[data-type=null]>.node__body .fold{display:none}
`;
var I, ft;
class tn extends HTMLElement {
  constructor() {
    super();
    w(this, I);
    this.attachShadow({
      mode: "open"
    });
    const n = document.createElement("template");
    n.innerHTML = '<div class="json-editor"></div>';
    const i = new CSSStyleSheet();
    i.replaceSync(Xe), this.shadowRoot.appendChild(n.content.cloneNode(!0)), this.shadowRoot.adoptedStyleSheets = [i], this.root = this.shadowRoot.childNodes[0], this.ready = !1, this.data = {};
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
  attributeChangedCallback(n, i, o) {
    if (i !== o)
      switch (n) {
        case "src":
          this.data = Gt(o), this.core && this.core.replace(this.data);
          break;
      }
  }
  /**
   * mounted component
   */
  connectedCallback() {
    this.root.addEventListener("json-editor", g(this, I, ft)), this.core = new Ge(this.root, this.data);
  }
  /**
   * unmounted component
   */
  disconnectedCallback() {
    console.warn("disconnectedCallback()"), this.root.removeEventListener("json-editor", g(this, I, ft)), this.core && (this.core.destroy(), delete this.core, this.root.innerHTML = "");
  }
  adoptedCallback() {
    console.warn("adoptedCallback()");
  }
}
I = new WeakSet(), ft = function(n) {
  console.log("#onRootEvent", n);
};
export {
  tn as default
};
