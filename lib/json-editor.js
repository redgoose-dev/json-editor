var nt = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var S = (t, e, n) => (nt(t, e, "read from private field"), n ? n.call(t) : e.get(t)), x = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, kt = (t, e, n, o) => (nt(t, e, "write to private field"), o ? o.call(t, n) : e.set(t, n), n);
var g = (t, e, n) => (nt(t, e, "access private method"), n);
const $ = document, Z = window, Ht = $.documentElement, M = $.createElement.bind($), At = M("div"), ot = M("table"), oe = M("tbody"), $t = M("tr"), { isArray: X, prototype: Rt } = Array, { concat: ie, filter: ht, indexOf: Ot, map: zt, push: re, slice: Pt, some: pt, splice: se } = Rt, ce = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, ae = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, ue = /<.+>/, le = /^\w+$/;
function gt(t, e) {
  const n = de(e);
  return !t || !n && !T(e) && !f(e) ? [] : !n && ae.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && le.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class Q {
  constructor(e, n) {
    if (!e)
      return;
    if (st(e))
      return e;
    let o = e;
    if (y(e)) {
      const i = n || $;
      if (o = ce.test(e) && T(i) ? i.getElementById(e.slice(1).replace(/\\/g, "")) : ue.test(e) ? Dt(e) : st(i) ? i.find(e) : y(i) ? c(i).find(e) : gt(e, i), !o)
        return;
    } else if (H(e))
      return this.ready(e);
    (o.nodeType || o === Z) && (o = [o]), this.length = o.length;
    for (let i = 0, s = this.length; i < s; i++)
      this[i] = o[i];
  }
  init(e, n) {
    return new Q(e, n);
  }
}
const r = Q.prototype, c = r.init;
c.fn = c.prototype = r;
r.length = 0;
r.splice = se;
typeof Symbol == "function" && (r[Symbol.iterator] = Rt[Symbol.iterator]);
function st(t) {
  return t instanceof Q;
}
function O(t) {
  return !!t && t === t.window;
}
function T(t) {
  return !!t && t.nodeType === 9;
}
function de(t) {
  return !!t && t.nodeType === 11;
}
function f(t) {
  return !!t && t.nodeType === 1;
}
function fe(t) {
  return !!t && t.nodeType === 3;
}
function he(t) {
  return typeof t == "boolean";
}
function H(t) {
  return typeof t == "function";
}
function y(t) {
  return typeof t == "string";
}
function w(t) {
  return t === void 0;
}
function P(t) {
  return t === null;
}
function Bt(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function yt(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
c.isWindow = O;
c.isFunction = H;
c.isArray = X;
c.isNumeric = Bt;
c.isPlainObject = yt;
function p(t, e, n) {
  if (n) {
    let o = t.length;
    for (; o--; )
      if (e.call(t[o], o, t[o]) === !1)
        return t;
  } else if (yt(t)) {
    const o = Object.keys(t);
    for (let i = 0, s = o.length; i < s; i++) {
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
function U(...t) {
  const e = he(t[0]) ? t.shift() : !1, n = t.shift(), o = t.length;
  if (!n)
    return {};
  if (!o)
    return U(e, c, n);
  for (let i = 0; i < o; i++) {
    const s = t[i];
    for (const a in s)
      e && (X(s[a]) || yt(s[a])) ? ((!n[a] || n[a].constructor !== s[a].constructor) && (n[a] = new s[a].constructor()), U(e, n[a], s[a])) : n[a] = s[a];
  }
  return n;
}
c.extend = U;
r.extend = function(t) {
  return U(r, t);
};
const pe = /\S+/g;
function tt(t) {
  return y(t) ? t.match(pe) || [] : [];
}
r.toggleClass = function(t, e) {
  const n = tt(t), o = !w(e);
  return this.each((i, s) => {
    f(s) && p(n, (a, u) => {
      o ? e ? s.classList.add(u) : s.classList.remove(u) : s.classList.toggle(u);
    });
  });
};
r.addClass = function(t) {
  return this.toggleClass(t, !0);
};
r.removeAttr = function(t) {
  const e = tt(t);
  return this.each((n, o) => {
    f(o) && p(e, (i, s) => {
      o.removeAttribute(s);
    });
  });
};
function ge(t, e) {
  if (t) {
    if (y(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !f(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return P(n) ? void 0 : n;
      }
      return w(e) ? this : P(e) ? this.removeAttr(t) : this.each((n, o) => {
        f(o) && o.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
r.attr = ge;
r.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
r.hasClass = function(t) {
  return !!t && pt.call(this, (e) => f(e) && e.classList.contains(t));
};
r.get = function(t) {
  return w(t) ? Pt.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
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
  return w(t) ? this.get().map((e) => f(e) || fe(e) ? e.textContent : "").join("") : this.each((e, n) => {
    f(n) && (n.textContent = t);
  });
}
r.text = ye;
function j(t, e, n) {
  if (!f(t))
    return;
  const o = Z.getComputedStyle(t, null);
  return n ? o.getPropertyValue(e) || void 0 : o[e] || t.style[e];
}
function v(t, e) {
  return parseInt(j(t, e), 10) || 0;
}
function jt(t, e) {
  return v(t, `border${e ? "Left" : "Top"}Width`) + v(t, `padding${e ? "Left" : "Top"}`) + v(t, `padding${e ? "Right" : "Bottom"}`) + v(t, `border${e ? "Right" : "Bottom"}Width`);
}
const it = {};
function be(t) {
  if (it[t])
    return it[t];
  const e = M(t);
  $.body.insertBefore(e, null);
  const n = j(e, "display");
  return $.body.removeChild(e), it[t] = n !== "none" ? n : "block";
}
function Et(t) {
  return j(t, "display") === "none";
}
function Vt(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function et(t) {
  return y(t) ? (e, n) => Vt(n, t) : H(t) ? t : st(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
r.filter = function(t) {
  const e = et(t);
  return c(ht.call(this, (n, o) => e.call(n, o, n)));
};
function L(t, e) {
  return e ? t.filter(e) : t;
}
r.detach = function(t) {
  return L(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const me = /^\s*<(\w+)[^>]*>/, xe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, St = {
  "*": At,
  tr: oe,
  td: $t,
  th: $t,
  thead: ot,
  tbody: ot,
  tfoot: ot
};
function Dt(t) {
  if (!y(t))
    return [];
  if (xe.test(t))
    return [M(RegExp.$1)];
  const e = me.test(t) && RegExp.$1, n = St[e] || St["*"];
  return n.innerHTML = t, c(n.childNodes).detach().get();
}
c.parseHTML = Dt;
r.has = function(t) {
  const e = y(t) ? (n, o) => gt(t, o).length : (n, o) => o.contains(t);
  return this.filter(e);
};
r.not = function(t) {
  const e = et(t);
  return this.filter((n, o) => (!y(t) || f(o)) && !e.call(o, n, o));
};
function E(t, e, n, o) {
  const i = [], s = H(e), a = o && et(o);
  for (let u = 0, h = t.length; u < h; u++)
    if (s) {
      const l = e(t[u]);
      l.length && re.apply(i, l);
    } else {
      let l = t[u][e];
      for (; l != null && !(o && a(-1, l)); )
        i.push(l), l = n ? l[e] : null;
    }
  return i;
}
function Ft(t) {
  return t.multiple && t.options ? E(ht.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function we(t) {
  return arguments.length ? this.each((e, n) => {
    const o = n.multiple && n.options;
    if (o || Gt.test(n.type)) {
      const i = X(t) ? zt.call(t, String) : P(t) ? [] : [String(t)];
      o ? p(n.options, (s, a) => {
        a.selected = i.indexOf(a.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = w(t) || P(t) ? "" : t;
  }) : this[0] && Ft(this[0]);
}
r.val = we;
r.is = function(t) {
  const e = et(t);
  return pt.call(this, (n, o) => e.call(n, o, n));
};
c.guid = 1;
function _(t) {
  return t.length > 1 ? ht.call(t, (e, n, o) => Ot.call(o, e) === n) : t;
}
c.unique = _;
r.add = function(t, e) {
  return c(_(this.get().concat(c(t, e).get())));
};
r.children = function(t) {
  return L(c(_(E(this, (e) => e.children))), t);
};
r.parent = function(t) {
  return L(c(_(E(this, "parentNode"))), t);
};
r.index = function(t) {
  const e = t ? c(t)[0] : this[0], n = t ? this : c(e).parent().children();
  return Ot.call(n, e);
};
r.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const n = this.parent();
  return n.length ? n.closest(t) : e;
};
r.siblings = function(t) {
  return L(c(_(E(this, (e) => c(e).parent().children().not(e)))), t);
};
r.find = function(t) {
  return c(_(E(this, (e) => gt(t, e))));
};
const Ce = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ve = /^$|^module$|\/(java|ecma)script/i, _e = ["type", "src", "nonce", "noModule"];
function ke(t, e) {
  const n = c(t);
  n.filter("script").add(n.find("script")).each((o, i) => {
    if (ve.test(i.type) && Ht.contains(i)) {
      const s = M("script");
      s.text = i.textContent.replace(Ce, ""), p(_e, (a, u) => {
        i[u] && (s[u] = i[u]);
      }), e.head.insertBefore(s, null), e.head.removeChild(s);
    }
  });
}
function $e(t, e, n, o, i) {
  o ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), i && ke(e, t.ownerDocument);
}
function N(t, e, n, o, i, s, a, u) {
  return p(t, (h, l) => {
    p(c(l), (k, b) => {
      p(c(e), (_t, m) => {
        const z = n ? b : m, d = n ? m : b, A = n ? k : _t;
        $e(z, A ? d.cloneNode(!0) : d, o, i, !A);
      }, u);
    }, a);
  }, s), e;
}
r.after = function() {
  return N(arguments, this, !1, !1, !1, !0, !0);
};
r.append = function() {
  return N(arguments, this, !1, !1, !0);
};
function je(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (w(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, o) => {
    f(o) && (e ? c(o).empty().append(t) : o.innerHTML = t);
  });
}
r.html = je;
r.appendTo = function(t) {
  return N(arguments, this, !0, !1, !0);
};
r.wrapInner = function(t) {
  return this.each((e, n) => {
    const o = c(n), i = o.contents();
    i.length ? i.wrapAll(t) : o.append(t);
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
    const o = c(t)[0];
    c(n).wrapAll(e ? o.cloneNode(!0) : o);
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
  return c(_(E(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
r.next = function(t, e, n) {
  return L(c(_(E(this, "nextElementSibling", e, n))), t);
};
r.nextAll = function(t) {
  return this.next(t, !0);
};
r.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
r.parents = function(t, e) {
  return L(c(_(E(this, "parentElement", !0, e))), t);
};
r.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
r.prev = function(t, e, n) {
  return L(c(_(E(this, "previousElementSibling", e, n))), t);
};
r.prevAll = function(t) {
  return this.prev(t, !0);
};
r.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
r.map = function(t) {
  return c(ie.apply([], zt.call(this, (e, n) => t.call(e, n, e))));
};
r.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
r.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && j(n, "position") === "static"; )
      n = n.offsetParent;
    return n || Ht;
  });
};
r.slice = function(t, e) {
  return c(Pt.call(this, t, e));
};
const Ee = /-([a-z])/g;
function bt(t) {
  return t.replace(Ee, (e, n) => n.toUpperCase());
}
r.ready = function(t) {
  const e = () => setTimeout(t, 0, c);
  return $.readyState !== "loading" ? e() : $.addEventListener("DOMContentLoaded", e), this;
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
    top: e.top + Z.pageYOffset,
    left: e.left + Z.pageXOffset
  };
};
r.position = function() {
  const t = this[0];
  if (!t)
    return;
  const e = j(t, "position") === "fixed", n = e ? t.getBoundingClientRect() : this.offset();
  if (!e) {
    const o = t.ownerDocument;
    let i = t.offsetParent || o.documentElement;
    for (; (i === o.body || i === o.documentElement) && j(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== t && f(i)) {
      const s = c(i).offset();
      n.top -= s.top + v(i, "borderTopWidth"), n.left -= s.left + v(i, "borderLeftWidth");
    }
  }
  return {
    top: n.top - v(t, "marginTop"),
    left: n.left - v(t, "marginLeft")
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
    if (y(t))
      return t = It[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, o) => {
        o[t] = e;
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
const Se = /^--/;
function mt(t) {
  return Se.test(t);
}
const rt = {}, { style: Le } = At, Ne = ["webkit", "moz", "ms"];
function Te(t, e = mt(t)) {
  if (e)
    return t;
  if (!rt[t]) {
    const n = bt(t), o = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${Ne.join(`${o} `)}${o}`.split(" ");
    p(i, (s, a) => {
      if (a in Le)
        return rt[t] = a, !1;
    });
  }
  return rt[t];
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
function Zt(t, e, n = mt(t)) {
  return !n && !Me[t] && Bt(e) ? `${e}px` : e;
}
function He(t, e) {
  if (y(t)) {
    const n = mt(t);
    return t = Te(t, n), arguments.length < 2 ? this[0] && j(this[0], t, n) : t ? (e = Zt(t, e, n), this.each((o, i) => {
      f(i) && (n ? i.style.setProperty(t, e) : i.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
r.css = He;
function Ut(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const Ae = /^\s+|\s+$/;
function Lt(t, e) {
  const n = t.dataset[e] || t.dataset[bt(e)];
  return Ae.test(n) ? n : Ut(JSON.parse, n);
}
function Re(t, e, n) {
  n = Ut(JSON.stringify, n), t.dataset[bt(e)] = n;
}
function Oe(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const o in this[0].dataset)
      n[o] = Lt(this[0], o);
    return n;
  }
  if (y(t))
    return arguments.length < 2 ? this[0] && Lt(this[0], t) : w(e) ? this : this.each((n, o) => {
      Re(o, t, e);
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
  p(["Width", "Height"], (n, o) => {
    const i = `${e ? "outer" : "inner"}${o}`;
    r[i] = function(s) {
      if (this[0])
        return O(this[0]) ? e ? this[0][`inner${o}`] : this[0].document.documentElement[`client${o}`] : T(this[0]) ? Wt(this[0], o) : this[0][`${e ? "offset" : "client"}${o}`] + (s && e ? v(this[0], `margin${n ? "Top" : "Left"}`) + v(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
p(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  r[n] = function(o) {
    if (!this[0])
      return w(o) ? void 0 : this;
    if (!arguments.length)
      return O(this[0]) ? this[0].document.documentElement[`client${e}`] : T(this[0]) ? Wt(this[0], e) : this[0].getBoundingClientRect()[n] - jt(this[0], !t);
    const i = parseInt(o, 10);
    return this.each((s, a) => {
      if (!f(a))
        return;
      const u = j(a, "boxSizing");
      a.style[n] = Zt(n, i + (u === "border-box" ? jt(a, !t) : 0));
    });
  };
});
const Nt = "___cd";
r.toggle = function(t) {
  return this.each((e, n) => {
    if (!f(n))
      return;
    const o = Et(n);
    (w(t) ? o : t) ? (n.style.display = n[Nt] || "", Et(n) && (n.style.display = be(n.tagName))) : o || (n[Nt] = j(n, "display"), n.style.display = "none");
  });
};
r.hide = function() {
  return this.toggle(!1);
};
r.show = function() {
  return this.toggle(!0);
};
const Tt = "___ce", xt = ".", wt = { focus: "focusin", blur: "focusout" }, qt = { mouseenter: "mouseover", mouseleave: "mouseout" }, ze = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Ct(t) {
  return qt[t] || wt[t] || t;
}
function vt(t) {
  const e = t.split(xt);
  return [e[0], e.slice(1).sort()];
}
r.trigger = function(t, e) {
  if (y(t)) {
    const [o, i] = vt(t), s = Ct(o);
    if (!s)
      return this;
    const a = ze.test(s) ? "MouseEvents" : "HTMLEvents";
    t = $.createEvent(a), t.initEvent(s, !0, !0), t.namespace = i.join(xt), t.___ot = o;
  }
  t.___td = e;
  const n = t.___ot in wt;
  return this.each((o, i) => {
    n && H(i[t.___ot]) && (i[`___i${t.type}`] = !0, i[t.___ot](), i[`___i${t.type}`] = !1), i.dispatchEvent(t);
  });
};
function Jt(t) {
  return t[Tt] = t[Tt] || {};
}
function Pe(t, e, n, o, i) {
  const s = Jt(t);
  s[e] = s[e] || [], s[e].push([n, o, i]), t.addEventListener(e, i);
}
function Yt(t, e) {
  return !e || !pt.call(e, (n) => t.indexOf(n) < 0);
}
function W(t, e, n, o, i) {
  const s = Jt(t);
  if (e)
    s[e] && (s[e] = s[e].filter(([a, u, h]) => {
      if (i && h.guid !== i.guid || !Yt(a, n) || o && o !== u)
        return !0;
      t.removeEventListener(e, h);
    }));
  else
    for (e in s)
      W(t, e, n, o, i);
}
r.off = function(t, e, n) {
  if (w(t))
    this.each((o, i) => {
      !f(i) && !T(i) && !O(i) || W(i);
    });
  else if (y(t))
    H(e) && (n = e, e = ""), p(tt(t), (o, i) => {
      const [s, a] = vt(i), u = Ct(s);
      this.each((h, l) => {
        !f(l) && !T(l) && !O(l) || W(l, u, a, e, n);
      });
    });
  else
    for (const o in t)
      this.off(o, t[o]);
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
function Be(t, e, n, o, i) {
  if (!y(t)) {
    for (const s in t)
      this.on(s, e, n, t[s], i);
    return this;
  }
  return y(e) || (w(e) || P(e) ? e = "" : w(n) ? (n = e, e = "") : (o = n, n = e, e = "")), H(o) || (o = n, n = void 0), o ? (p(tt(t), (s, a) => {
    const [u, h] = vt(a), l = Ct(u), k = u in qt, b = u in wt;
    l && this.each((_t, m) => {
      if (!f(m) && !T(m) && !O(m))
        return;
      const z = function(d) {
        if (d.target[`___i${d.type}`])
          return d.stopImmediatePropagation();
        if (d.namespace && !Yt(h, d.namespace.split(xt)) || !e && (b && (d.target !== m || d.___ot === l) || k && d.relatedTarget && m.contains(d.relatedTarget)))
          return;
        let A = m;
        if (e) {
          let R = d.target;
          for (; !Vt(R, e); )
            if (R === m || (R = R.parentNode, !R))
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
            return m;
          }
        }), Object.defineProperty(d, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const ne = o.call(A, d, d.___td);
        i && W(m, l, h, e, z), ne === !1 && (d.preventDefault(), d.stopPropagation());
      };
      z.guid = o.guid = o.guid || c.guid++, Pe(m, l, h, e, z);
    });
  }), this) : this;
}
r.on = Be;
function Ve(t, e, n, o) {
  return this.on(t, e, n, o, !0);
}
r.one = Ve;
const De = /\r?\n/g;
function Fe(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(De, `\r
`))}`;
}
const Ie = /file|reset|submit|button|image/i, Gt = /radio|checkbox/i;
r.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    p(n.elements || [n], (o, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || Ie.test(i.type) || Gt.test(i.type) && !i.checked)
        return;
      const s = Ft(i);
      if (!w(s)) {
        const a = X(s) ? s : [s];
        p(a, (u, h) => {
          t += Fe(i.name, h);
        });
      }
    });
  }), t.slice(1);
};
function Mt(t) {
  return t == null ? "null" : Array.isArray(t) ? "array" : typeof t == "string" ? "string" : typeof t == "number" ? "number" : typeof t == "boolean" ? "boolean" : "object";
}
function Kt(t) {
  try {
    return typeof t == "string" ? JSON.parse(t) : Array.isArray(t) ? Object.assign([], t) : c.isPlainObject(t) ? Object.assign({}, t) : {};
  } catch (e) {
    console.error("error", e.message);
  }
}
function Ze(t) {
  return Array.isArray(t) ? t.length : c.isPlainObject(t) ? Object.keys(t).length : NaN;
}
class Ue {
  constructor() {
  }
}
const We = {
  target: void 0,
  data: void 0,
  between: "after",
  open: !0,
  callback: void 0
}, qe = '<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-90, 10, 10)"><path d="M7 9L10 12L13 9" fill="currentColor"/><path d="M7 9L10 12L13 9H7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>', Je = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>', Ye = {
  object: '<svg viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1)"><path d="M2.296 5.166C2.296 7.238 3.78 8.162 5.166 8.162C6.538 8.162 8.022 7.238 8.022 5.166C8.022 3.094 6.538 2.156 5.166 2.156C3.78 2.156 2.296 3.094 2.296 5.166ZM0 5.18C0 2.03 2.366 0 5.166 0C7.952 0 10.318 2.03 10.318 5.18C10.318 8.316 7.952 10.346 5.166 10.346C2.366 10.346 0 8.316 0 5.18Z" fill="currentColor"/></g></svg>',
  array: '<svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.728 9.926L6.902 7.658H2.87L2.044 9.926H0L3.808 0H6.048L9.828 9.926H7.728ZM4.886 2.142L3.514 5.894H6.258L4.886 2.142Z" fill="currentColor"/></svg>',
  string: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1.5)"><path d="M7.39203 2.576L5.65603 3.108C5.55803 2.562 5.11003 1.708 3.85003 1.708C2.91203 1.708 2.29603 2.31 2.29603 2.968C2.29603 3.514 2.64603 3.948 3.37403 4.088L4.76003 4.354C6.56603 4.704 7.53203 5.88 7.53203 7.28C7.53203 8.806 6.25803 10.346 3.94803 10.346C1.31603 10.346 0.154031 8.652 3.05176e-05 7.238L1.79203 6.762C1.87603 7.742 2.56203 8.624 3.96203 8.624C4.99803 8.624 5.57203 8.106 5.57203 7.406C5.57203 6.832 5.13803 6.384 4.36803 6.23L2.98203 5.95C1.40003 5.628 0.378031 4.606 0.378031 3.108C0.378031 1.344 1.96003 0 3.83603 0C6.24403 0 7.16803 1.456 7.39203 2.576Z" fill="currentColor"/></g></svg>',
  number: '<svg viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1)"><path d="M8.47003 9.926H6.44003L1.93203 2.884V9.926H3.05176e-05V0H2.40803L6.53803 6.566V0H8.47003V9.926Z" fill="currentColor"/></g></svg>',
  boolean: '<svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 .75)"><path d="M3.05176e-05 0H3.57003C5.50203 0 6.59403 1.134 6.59403 2.674C6.59403 3.696 5.97803 4.522 5.15203 4.802C6.11803 5.04 6.90203 5.922 6.90203 7.154C6.90203 8.764 5.69803 9.926 3.83603 9.926H3.05176e-05V0ZM1.90403 4.102H3.27603C4.15803 4.102 4.69003 3.612 4.69003 2.856C4.69003 2.1 4.20003 1.624 3.26203 1.624H1.90403V4.102ZM1.90403 8.316H3.47203C4.41003 8.316 4.97003 7.826 4.97003 7.028C4.97003 6.244 4.46603 5.698 3.50003 5.698H1.90403V8.316Z" fill="currentColor"/></g></svg>',
  null: '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1.5)"><path d="M3.808 10.15C1.694 10.15 0 8.848 0 6.412V0H1.932V6.272C1.932 7.574 2.66 8.26 3.808 8.26C4.984 8.26 5.698 7.574 5.698 6.272V0H7.63V6.412C7.63 8.848 5.936 10.15 3.808 10.15Z" fill="currentColor"/></g></svg>'
};
var C, q, B, ct, J, Xt, Y, Qt, V, at, ft, Ke, D, ut, G, te, K, ee, F, lt;
class Ge {
  constructor(e, n) {
    x(this, B);
    x(this, J);
    x(this, Y);
    x(this, V);
    x(this, ft);
    x(this, D);
    x(this, G);
    x(this, K);
    x(this, F);
    x(this, C, {
      wrap: null,
      tree: null
    });
    x(this, q, void 0);
    S(this, C).wrap = c(e), kt(this, q, new Ue()), this.replace(n);
  }
  clear() {
    S(this, C).tree && S(this, C).wrap.empty();
  }
  /**
   * replace
   * @param {object|array} src
   */
  replace(e) {
    this.clear(), e = Kt(e);
    const n = g(this, J, Xt).call(this, e);
    this.import(n, e);
  }
  /**
   * import data
   * @param {HTMLElement} target
   * @param {object|array} src
   */
  import(e, n) {
    c(e), c.each(n, (o, i) => {
      const s = Mt(i), a = { key: o, value: i, type: s };
      this.addNode({
        target: e,
        data: a,
        between: "after",
        open: !1,
        callback: (u, h) => this.import(u, h)
      });
    });
  }
  changeType(e, n) {
    c(e).attr("data-type", n);
  }
  /**
   * add node
   * @param {HTMLElement} target
   * @param {object} data
   * @param {'before'|'after'} between
   * @param {function} callback
   */
  addNode(e) {
    e = Object.assign({}, We, e);
    const { target: n, data: o, between: i, open: s, callback: a } = e, u = c(n), { key: h, value: l, type: k } = o, b = g(this, B, ct).call(this, k);
    g(this, D, ut).call(this, b, s), g(this, V, at).call(this, b, k), g(this, G, te).call(this, b, h), g(this, F, lt).call(this, b, l), g(this, K, ee).call(this, b, l), b.find("h3").text(`${k} = ${h} / ${l}`), g(this, Y, Qt).call(this, u.find("& > .node__children > ul"), b, i), (k === "array" || k === "object") && a && typeof a == "function" && a(b.get(0), l);
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
C = new WeakMap(), q = new WeakMap(), B = new WeakSet(), ct = function(e, n = !1) {
  let o = `<li data-type="${e}" class="node">`;
  return o += '<div class="node__body">', n || (o += `<span class="sort">${Je}</span>`), o += '<button type="button" class="type"></button>', o += `<button type="button" class="fold">${qe}</button>`, n || (o += '<div class="field-label key" contenteditable="true"></div>'), o += '<em class="count"></em>', n || (o += '<div class="value"><div class="field-label" contenteditable="true" data-placeholder="empty"></div></div>'), o += "</div>", o += '<div class="node__children"><ul class="tree"/></div>', o += "</li>", c(o);
}, J = new WeakSet(), Xt = function(e) {
  const n = Mt(e), o = g(this, B, ct).call(this, n, !0);
  return g(this, D, ut).call(this, o, !0), g(this, V, at).call(this, o, n), g(this, F, lt).call(this, o, e), S(this, C).tree = c('<ul class="root"/>'), S(this, C).tree.append(o), S(this, C).wrap.append(S(this, C).tree), o;
}, Y = new WeakSet(), Qt = function(e, n, o) {
  switch (o) {
    case "before":
      e.prepend(n);
      break;
    default:
      e.append(n);
      break;
  }
}, V = new WeakSet(), at = function(e, n) {
  e.find(".type").html(`<i class="type-icon type-icon--${n}">${Ye[n]}</i>`);
}, ft = new WeakSet(), Ke = function() {
}, D = new WeakSet(), ut = function(e, n) {
  const o = e.find(".fold");
  this.controlFold(e, n), o.on("click", (i) => {
    const a = c(i.currentTarget).closest(".node");
    this.controlFold(a);
  });
}, G = new WeakSet(), te = function(e, n) {
  e.find(".key").text(n);
}, K = new WeakSet(), ee = function(e, n) {
  e.find(".value > div").text(n);
}, F = new WeakSet(), lt = function(e, n) {
  const o = e.find(".count"), i = Ze(n);
  isNaN(i) || o.text(i);
};
const Xe = `.json-editor{--json-editor-font-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";--json-editor-font-eng: "Helvetica Neue", sans-serif;--json-editor-color-bg: hsl(0 0% 100%);--json-editor-color-base: hsl(0 0% 13%);--json-editor-color-blur: hsl(0 0% 67%);--json-editor-color-object: hsl(174 66% 39%);--json-editor-color-array: hsl(191 75% 53%);--json-editor-color-string: hsl(5 87% 59%);--json-editor-color-number: hsl(33 89% 55%);--json-editor-color-boolean: hsl(45 89% 54%);--json-editor-color-null: hsl(0 0% 58%);--json-editor-color-active: hsla(0 0% 0% / 6%);--json-editor-color-focus: hsl(5 87% 59%);--json-editor-color-error: hsl(0 96% 52%);--json-editor-font-size: 13px;font-family:var(--json-editor-font-base);color:var(--json-editor-color-base);font-size:16px;line-height:1.15}.root{position:relative;margin:0;padding:0;list-style:none}.type-icon{display:grid;width:var(--type-icon-size, 24px);height:var(--type-icon-size, 24px);place-content:center;box-sizing:border-box;border-radius:4px;background:var(--type-icon-color, #aaa)}.type-icon svg{display:block;box-sizing:border-box;color:#fff;width:var(--type-icon-width)}.type-icon--object{--type-icon-color: var(--json-editor-color-object);--type-icon-width: calc(var(--type-icon-size, 10px) + 1px)}.type-icon--array{--type-icon-color: var(--json-editor-color-array);--type-icon-width: var(--type-icon-size, 10px)}.type-icon--string{--type-icon-color: var(--json-editor-color-string);--type-icon-width: calc(var(--type-icon-size, 10px) - 2px)}.type-icon--number{--type-icon-color: var(--json-editor-color-number);--type-icon-width: calc(var(--type-icon-size, 10px) - 1px)}.type-icon--boolean{--type-icon-color: var(--json-editor-color-boolean);--type-icon-width: calc(var(--type-icon-size, 10px) - 3px)}.type-icon--null{--type-icon-color: var(--json-editor-color-null);--type-icon-width: calc(var(--type-icon-size, 10px) - 2px)}.field-label{margin:-4px 0;padding:4px 6px;min-width:var(--label-min-width, unset);min-height:24px;outline:none;font-size:var(--json-editor-font-size);line-height:1.42;box-sizing:border-box;border-radius:2px;background-color:#0000;box-shadow:0 0 0 .5px #0000;transition:background-color .16s ease-out,box-shadow .2s ease-out;cursor:text}.field-label:hover,.field-label:focus{background-color:var(--json-editor-color-active)}.field-label:focus{box-shadow:0 0 0 .5px #00000040}.field-label:empty:before{content:attr(data-placeholder);color:var(--json-editor-color-blur)}.node__body{position:relative;display:flex;align-items:center;box-sizing:border-box}.node__body .sort{display:block;box-sizing:border-box;cursor:move;padding:0 4px 0 0}.node__body .sort svg{display:block;width:24px}.node__body .type{display:block;margin:-2px -2px -2px -4px;padding:2px;box-sizing:border-box;border:none;background:none;outline:none;cursor:pointer;transition:opacity .12s ease-out;border-radius:6px}.node__body .type:active{opacity:.5}.node__body .type:focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-1px}.node__body .type.open{opacity:.25}.node__body .fold{display:block;width:28px;height:28px;margin:-8px -8px -8px 0;padding:0;background:none;border:none;box-sizing:border-box;cursor:pointer}.node__body .fold:focus-visible{outline:2px solid var(--json-editor-color-focus);outline-offset:-6px}.node__body .fold svg{display:block;margin:0 auto;width:var(--fold-arrow-size, 20px);rotate:0deg;box-sizing:border-box;transition:rotate,.16s ease-out}.node__body .key{margin-left:8px;--label-min-width: 42px}.node__body .count{display:block;margin:0;pointer-events:none;padding:0 0 0 8px;color:var(--json-editor-color-blur);font-style:normal;-webkit-user-select:none;user-select:none;font-size:14px;line-height:normal}.node__body .value{display:flex;align-items:center;gap:0 6px;font-size:var(--json-editor-font-size);line-height:1.42;--label-min-width: 72px}.node__body .value:before{content:":"}.node__children>.tree{position:relative;display:none;gap:6px 0;margin:6px 0 0;padding:0 0 0 24px;list-style:none}.node__children>.tree:not(:empty):before{content:"";display:block;position:absolute;left:10px;top:0;bottom:11px;width:4px;border-width:0 0 0 1px;border-style:dashed;border-color:#b8b8b8}.node__children>.tree:not(:empty):after{content:"";display:block;position:absolute;left:8px;bottom:10px;width:5px;height:5px;background:hsl(0,0%,72%);border-radius:50%}.node.open>.node__body .fold svg{rotate:90deg}.node.open>.node__children>.tree{display:grid}.node[data-type=object]>.node__body .count:before{content:"{"}.node[data-type=object]>.node__body .count:after{content:"}"}.node[data-type=object]>.node__body .value{display:none}.node[data-type=array]>.node__body .count:before{content:"["}.node[data-type=array]>.node__body .count:after{content:"]"}.node[data-type=array]>.node__body .value{display:none}.node[data-type=string]>.node__body .fold{display:none}.node[data-type=number]>.node__body .fold{display:none}.node[data-type=boolean]>.node__body .fold{display:none}.node[data-type=null]>.node__body .fold{display:none}
`;
var I, dt;
class tn extends HTMLElement {
  constructor() {
    super();
    x(this, I);
    this.attachShadow({
      mode: "open"
    });
    const n = document.createElement("template");
    n.innerHTML = '<div class="json-editor"></div>';
    const o = new CSSStyleSheet();
    o.replaceSync(Xe), this.shadowRoot.appendChild(n.content.cloneNode(!0)), this.shadowRoot.adoptedStyleSheets = [o], this.root = this.shadowRoot.childNodes[0], this.ready = !1, this.data = {};
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
          this.data = Kt(i), this.core && this.core.replace(this.data);
          break;
      }
  }
  /**
   * mounted component
   */
  connectedCallback() {
    this.root.addEventListener("json-editor", g(this, I, dt)), this.core = new Ge(this.root, this.data);
  }
  /**
   * unmounted component
   */
  disconnectedCallback() {
    console.warn("disconnectedCallback()"), this.root.removeEventListener("json-editor", g(this, I, dt)), this.core && (this.core.destroy(), delete this.core, this.root.innerHTML = "");
  }
  adoptedCallback() {
    console.warn("adoptedCallback()");
  }
}
I = new WeakSet(), dt = function(n) {
  console.log("#onRootEvent", n);
};
export {
  tn as default
};
