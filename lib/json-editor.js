//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), s = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, c = /* @__PURE__ */ ((n, r, a) => (a = n == null ? {} : e(i(n)), s(r || !n || !n.__esModule ? t(a, "default", {
	value: n,
	enumerable: !0
}) : a, n)))((/* @__PURE__ */ o(((e, t) => {
	(function() {
		var n = document, r = window, i = n.documentElement, a = n.createElement.bind(n), o = a("div"), s = a("table"), c = a("tbody"), l = a("tr"), u = Array.isArray, d = Array.prototype, f = d.concat, p = d.filter, m = d.indexOf, h = d.map, ee = d.push, g = d.slice, _ = d.some, v = d.splice, y = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, te = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, ne = /<.+>/, b = /^\w+$/;
		function x(e, t) {
			var n = re(t);
			return !e || !n && !D(t) && !O(t) ? [] : !n && te.test(e) ? t.getElementsByClassName(e.slice(1).replace(/\\/g, "")) : !n && b.test(e) ? t.getElementsByTagName(e) : t.querySelectorAll(e);
		}
		var S = function() {
			function e(e, t) {
				if (e) {
					if (T(e)) return e;
					var i = e;
					if (A(e)) {
						var a = t || n;
						if (i = y.test(e) && D(a) ? a.getElementById(e.slice(1).replace(/\\/g, "")) : ne.test(e) ? _e(e) : T(a) ? a.find(e) : A(a) ? w(a).find(e) : x(e, a), !i) return;
					} else if (k(e)) return this.ready(e);
					(i.nodeType || i === r) && (i = [i]), this.length = i.length;
					for (var o = 0, s = this.length; o < s; o++) this[o] = i[o];
				}
			}
			return e.prototype.init = function(t, n) {
				return new e(t, n);
			}, e;
		}(), C = S.prototype, w = C.init;
		w.fn = w.prototype = C, C.length = 0, C.splice = v, typeof Symbol == "function" && (C[Symbol.iterator] = d[Symbol.iterator]);
		function T(e) {
			return e instanceof S;
		}
		function E(e) {
			return !!e && e === e.window;
		}
		function D(e) {
			return !!e && e.nodeType === 9;
		}
		function re(e) {
			return !!e && e.nodeType === 11;
		}
		function O(e) {
			return !!e && e.nodeType === 1;
		}
		function ie(e) {
			return !!e && e.nodeType === 3;
		}
		function ae(e) {
			return typeof e == "boolean";
		}
		function k(e) {
			return typeof e == "function";
		}
		function A(e) {
			return typeof e == "string";
		}
		function j(e) {
			return e === void 0;
		}
		function M(e) {
			return e === null;
		}
		function oe(e) {
			return !isNaN(parseFloat(e)) && isFinite(e);
		}
		function N(e) {
			if (typeof e != "object" || !e) return !1;
			var t = Object.getPrototypeOf(e);
			return t === null || t === Object.prototype;
		}
		w.isWindow = E, w.isFunction = k, w.isArray = u, w.isNumeric = oe, w.isPlainObject = N;
		function P(e, t, n) {
			if (n) {
				for (var r = e.length; r--;) if (t.call(e[r], r, e[r]) === !1) return e;
			} else if (N(e)) for (var i = Object.keys(e), r = 0, a = i.length; r < a; r++) {
				var o = i[r];
				if (t.call(e[o], o, e[o]) === !1) return e;
			}
			else for (var r = 0, a = e.length; r < a; r++) if (t.call(e[r], r, e[r]) === !1) return e;
			return e;
		}
		w.each = P, C.each = function(e) {
			return P(this, e);
		}, C.empty = function() {
			return this.each(function(e, t) {
				for (; t.firstChild;) t.removeChild(t.firstChild);
			});
		};
		function F() {
			var e = [...arguments], t = ae(e[0]) ? e.shift() : !1, n = e.shift(), r = e.length;
			if (!n) return {};
			if (!r) return F(t, w, n);
			for (var i = 0; i < r; i++) {
				var a = e[i];
				for (var o in a) t && (u(a[o]) || N(a[o])) ? ((!n[o] || n[o].constructor !== a[o].constructor) && (n[o] = new a[o].constructor()), F(t, n[o], a[o])) : n[o] = a[o];
			}
			return n;
		}
		w.extend = F, C.extend = function(e) {
			return F(C, e);
		};
		var se = /\S+/g;
		function I(e) {
			return A(e) && e.match(se) || [];
		}
		C.toggleClass = function(e, t) {
			var n = I(e), r = !j(t);
			return this.each(function(e, i) {
				O(i) && P(n, function(e, n) {
					r ? t ? i.classList.add(n) : i.classList.remove(n) : i.classList.toggle(n);
				});
			});
		}, C.addClass = function(e) {
			return this.toggleClass(e, !0);
		}, C.removeAttr = function(e) {
			var t = I(e);
			return this.each(function(e, n) {
				O(n) && P(t, function(e, t) {
					n.removeAttribute(t);
				});
			});
		};
		function ce(e, t) {
			if (e) {
				if (A(e)) {
					if (arguments.length < 2) {
						if (!this[0] || !O(this[0])) return;
						var n = this[0].getAttribute(e);
						return M(n) ? void 0 : n;
					}
					return j(t) ? this : M(t) ? this.removeAttr(e) : this.each(function(n, r) {
						O(r) && r.setAttribute(e, t);
					});
				}
				for (var r in e) this.attr(r, e[r]);
				return this;
			}
		}
		C.attr = ce, C.removeClass = function(e) {
			return arguments.length ? this.toggleClass(e, !1) : this.attr("class", "");
		}, C.hasClass = function(e) {
			return !!e && _.call(this, function(t) {
				return O(t) && t.classList.contains(e);
			});
		}, C.get = function(e) {
			return j(e) ? g.call(this) : (e = Number(e), this[e < 0 ? e + this.length : e]);
		}, C.eq = function(e) {
			return w(this.get(e));
		}, C.first = function() {
			return this.eq(0);
		}, C.last = function() {
			return this.eq(-1);
		};
		function le(e) {
			return j(e) ? this.get().map(function(e) {
				return O(e) || ie(e) ? e.textContent : "";
			}).join("") : this.each(function(t, n) {
				O(n) && (n.textContent = e);
			});
		}
		C.text = le;
		function L(e, t, n) {
			if (O(e)) {
				var i = r.getComputedStyle(e, null);
				return n ? i.getPropertyValue(t) || void 0 : i[t] || e.style[t];
			}
		}
		function R(e, t) {
			return parseInt(L(e, t), 10) || 0;
		}
		function ue(e, t) {
			return R(e, `border${t ? "Left" : "Top"}Width`) + R(e, `padding${t ? "Left" : "Top"}`) + R(e, `padding${t ? "Right" : "Bottom"}`) + R(e, `border${t ? "Right" : "Bottom"}Width`);
		}
		var z = {};
		function de(e) {
			if (z[e]) return z[e];
			var t = a(e);
			n.body.insertBefore(t, null);
			var r = L(t, "display");
			return n.body.removeChild(t), z[e] = r === "none" ? "block" : r;
		}
		function fe(e) {
			return L(e, "display") === "none";
		}
		function pe(e, t) {
			var n = e && (e.matches || e.webkitMatchesSelector || e.msMatchesSelector);
			return !!n && !!t && n.call(e, t);
		}
		function B(e) {
			return A(e) ? function(t, n) {
				return pe(n, e);
			} : k(e) ? e : T(e) ? function(t, n) {
				return e.is(n);
			} : e ? function(t, n) {
				return n === e;
			} : function() {
				return !1;
			};
		}
		C.filter = function(e) {
			var t = B(e);
			return w(p.call(this, function(e, n) {
				return t.call(e, n, e);
			}));
		};
		function V(e, t) {
			return t ? e.filter(t) : e;
		}
		C.detach = function(e) {
			return V(this, e).each(function(e, t) {
				t.parentNode && t.parentNode.removeChild(t);
			}), this;
		};
		var me = /^\s*<(\w+)[^>]*>/, he = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, ge = {
			"*": o,
			tr: c,
			td: l,
			th: l,
			thead: s,
			tbody: s,
			tfoot: s
		};
		function _e(e) {
			if (!A(e)) return [];
			if (he.test(e)) return [a(RegExp.$1)];
			var t = ge[me.test(e) && RegExp.$1] || ge["*"];
			return t.innerHTML = e, w(t.childNodes).detach().get();
		}
		w.parseHTML = _e, C.has = function(e) {
			var t = A(e) ? function(t, n) {
				return x(e, n).length;
			} : function(t, n) {
				return n.contains(e);
			};
			return this.filter(t);
		}, C.not = function(e) {
			var t = B(e);
			return this.filter(function(n, r) {
				return (!A(e) || O(r)) && !t.call(r, n, r);
			});
		};
		function H(e, t, n, r) {
			for (var i = [], a = k(t), o = r && B(r), s = 0, c = e.length; s < c; s++) if (a) {
				var l = t(e[s]);
				l.length && ee.apply(i, l);
			} else for (var u = e[s][t]; u != null && !(r && o(-1, u));) i.push(u), u = n ? u[t] : null;
			return i;
		}
		function ve(e) {
			return e.multiple && e.options ? H(p.call(e.options, function(e) {
				return e.selected && !e.disabled && !e.parentNode.disabled;
			}), "value") : e.value || "";
		}
		function ye(e) {
			return arguments.length ? this.each(function(t, n) {
				var r = n.multiple && n.options;
				if (r || Qe.test(n.type)) {
					var i = u(e) ? h.call(e, String) : M(e) ? [] : [String(e)];
					r ? P(n.options, function(e, t) {
						t.selected = i.indexOf(t.value) >= 0;
					}, !0) : n.checked = i.indexOf(n.value) >= 0;
				} else n.value = j(e) || M(e) ? "" : e;
			}) : this[0] && ve(this[0]);
		}
		C.val = ye, C.is = function(e) {
			var t = B(e);
			return _.call(this, function(e, n) {
				return t.call(e, n, e);
			});
		}, w.guid = 1;
		function U(e) {
			return e.length > 1 ? p.call(e, function(e, t, n) {
				return m.call(n, e) === t;
			}) : e;
		}
		w.unique = U, C.add = function(e, t) {
			return w(U(this.get().concat(w(e, t).get())));
		}, C.children = function(e) {
			return V(w(U(H(this, function(e) {
				return e.children;
			}))), e);
		}, C.parent = function(e) {
			return V(w(U(H(this, "parentNode"))), e);
		}, C.index = function(e) {
			var t = e ? w(e)[0] : this[0], n = e ? this : w(t).parent().children();
			return m.call(n, t);
		}, C.closest = function(e) {
			var t = this.filter(e);
			if (t.length) return t;
			var n = this.parent();
			return n.length ? n.closest(e) : t;
		}, C.siblings = function(e) {
			return V(w(U(H(this, function(e) {
				return w(e).parent().children().not(e);
			}))), e);
		}, C.find = function(e) {
			return w(U(H(this, function(t) {
				return x(e, t);
			})));
		};
		var be = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, xe = /^$|^module$|\/(java|ecma)script/i, Se = [
			"type",
			"src",
			"nonce",
			"noModule"
		];
		function Ce(e, t) {
			var n = w(e);
			n.filter("script").add(n.find("script")).each(function(e, n) {
				if (xe.test(n.type) && i.contains(n)) {
					var r = a("script");
					r.text = n.textContent.replace(be, ""), P(Se, function(e, t) {
						n[t] && (r[t] = n[t]);
					}), t.head.insertBefore(r, null), t.head.removeChild(r);
				}
			});
		}
		function we(e, t, n, r, i) {
			r ? e.insertBefore(t, n ? e.firstChild : null) : e.nodeName === "HTML" ? e.parentNode.replaceChild(t, e) : e.parentNode.insertBefore(t, n ? e : e.nextSibling), i && Ce(t, e.ownerDocument);
		}
		function W(e, t, n, r, i, a, o, s) {
			return P(e, function(e, a) {
				P(w(a), function(e, a) {
					P(w(t), function(t, o) {
						var s = n ? a : o, c = n ? o : a, l = n ? e : t;
						we(s, l ? c.cloneNode(!0) : c, r, i, !l);
					}, s);
				}, o);
			}, a), t;
		}
		C.after = function() {
			return W(arguments, this, !1, !1, !1, !0, !0);
		}, C.append = function() {
			return W(arguments, this, !1, !1, !0);
		};
		function Te(e) {
			if (!arguments.length) return this[0] && this[0].innerHTML;
			if (j(e)) return this;
			var t = /<script[\s>]/.test(e);
			return this.each(function(n, r) {
				O(r) && (t ? w(r).empty().append(e) : r.innerHTML = e);
			});
		}
		C.html = Te, C.appendTo = function(e) {
			return W(arguments, this, !0, !1, !0);
		}, C.wrapInner = function(e) {
			return this.each(function(t, n) {
				var r = w(n), i = r.contents();
				i.length ? i.wrapAll(e) : r.append(e);
			});
		}, C.before = function() {
			return W(arguments, this, !1, !0);
		}, C.wrapAll = function(e) {
			for (var t = w(e), n = t[0]; n.children.length;) n = n.firstElementChild;
			return this.first().before(t), this.appendTo(n);
		}, C.wrap = function(e) {
			return this.each(function(t, n) {
				var r = w(e)[0];
				w(n).wrapAll(t ? r.cloneNode(!0) : r);
			});
		}, C.insertAfter = function(e) {
			return W(arguments, this, !0, !1, !1, !1, !1, !0);
		}, C.insertBefore = function(e) {
			return W(arguments, this, !0, !0);
		}, C.prepend = function() {
			return W(arguments, this, !1, !0, !0, !0, !0);
		}, C.prependTo = function(e) {
			return W(arguments, this, !0, !0, !0, !1, !1, !0);
		}, C.contents = function() {
			return w(U(H(this, function(e) {
				return e.tagName === "IFRAME" ? [e.contentDocument] : e.tagName === "TEMPLATE" ? e.content.childNodes : e.childNodes;
			})));
		}, C.next = function(e, t, n) {
			return V(w(U(H(this, "nextElementSibling", t, n))), e);
		}, C.nextAll = function(e) {
			return this.next(e, !0);
		}, C.nextUntil = function(e, t) {
			return this.next(t, !0, e);
		}, C.parents = function(e, t) {
			return V(w(U(H(this, "parentElement", !0, t))), e);
		}, C.parentsUntil = function(e, t) {
			return this.parents(t, e);
		}, C.prev = function(e, t, n) {
			return V(w(U(H(this, "previousElementSibling", t, n))), e);
		}, C.prevAll = function(e) {
			return this.prev(e, !0);
		}, C.prevUntil = function(e, t) {
			return this.prev(t, !0, e);
		}, C.map = function(e) {
			return w(f.apply([], h.call(this, function(t, n) {
				return e.call(t, n, t);
			})));
		}, C.clone = function() {
			return this.map(function(e, t) {
				return t.cloneNode(!0);
			});
		}, C.offsetParent = function() {
			return this.map(function(e, t) {
				for (var n = t.offsetParent; n && L(n, "position") === "static";) n = n.offsetParent;
				return n || i;
			});
		}, C.slice = function(e, t) {
			return w(g.call(this, e, t));
		};
		var Ee = /-([a-z])/g;
		function G(e) {
			return e.replace(Ee, function(e, t) {
				return t.toUpperCase();
			});
		}
		C.ready = function(e) {
			var t = function() {
				return setTimeout(e, 0, w);
			};
			return n.readyState === "loading" ? n.addEventListener("DOMContentLoaded", t) : t(), this;
		}, C.unwrap = function() {
			return this.parent().each(function(e, t) {
				if (t.tagName !== "BODY") {
					var n = w(t);
					n.replaceWith(n.children());
				}
			}), this;
		}, C.offset = function() {
			var e = this[0];
			if (e) {
				var t = e.getBoundingClientRect();
				return {
					top: t.top + r.pageYOffset,
					left: t.left + r.pageXOffset
				};
			}
		}, C.position = function() {
			var e = this[0];
			if (e) {
				var t = L(e, "position") === "fixed", n = t ? e.getBoundingClientRect() : this.offset();
				if (!t) {
					for (var r = e.ownerDocument, i = e.offsetParent || r.documentElement; (i === r.body || i === r.documentElement) && L(i, "position") === "static";) i = i.parentNode;
					if (i !== e && O(i)) {
						var a = w(i).offset();
						n.top -= a.top + R(i, "borderTopWidth"), n.left -= a.left + R(i, "borderLeftWidth");
					}
				}
				return {
					top: n.top - R(e, "marginTop"),
					left: n.left - R(e, "marginLeft")
				};
			}
		};
		var De = {
			class: "className",
			contenteditable: "contentEditable",
			for: "htmlFor",
			readonly: "readOnly",
			maxlength: "maxLength",
			tabindex: "tabIndex",
			colspan: "colSpan",
			rowspan: "rowSpan",
			usemap: "useMap"
		};
		C.prop = function(e, t) {
			if (e) {
				if (A(e)) return e = De[e] || e, arguments.length < 2 ? this[0] && this[0][e] : this.each(function(n, r) {
					r[e] = t;
				});
				for (var n in e) this.prop(n, e[n]);
				return this;
			}
		}, C.removeProp = function(e) {
			return this.each(function(t, n) {
				delete n[De[e] || e];
			});
		};
		var Oe = /^--/;
		function K(e) {
			return Oe.test(e);
		}
		var q = {}, ke = o.style, Ae = [
			"webkit",
			"moz",
			"ms"
		];
		function je(e, t) {
			if (t === void 0 && (t = K(e)), t) return e;
			if (!q[e]) {
				var n = G(e), r = `${n[0].toUpperCase()}${n.slice(1)}`;
				P(`${n} ${Ae.join(`${r} `)}${r}`.split(" "), function(t, n) {
					if (n in ke) return q[e] = n, !1;
				});
			}
			return q[e];
		}
		var Me = {
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
		function Ne(e, t, n) {
			return n === void 0 && (n = K(e)), !n && !Me[e] && oe(t) ? `${t}px` : t;
		}
		function Pe(e, t) {
			if (A(e)) {
				var n = K(e);
				return e = je(e, n), arguments.length < 2 ? this[0] && L(this[0], e, n) : e ? (t = Ne(e, t, n), this.each(function(r, i) {
					O(i) && (n ? i.style.setProperty(e, t) : i.style[e] = t);
				})) : this;
			}
			for (var r in e) this.css(r, e[r]);
			return this;
		}
		C.css = Pe;
		function Fe(e, t) {
			try {
				return e(t);
			} catch {
				return t;
			}
		}
		var Ie = /^\s+|\s+$/;
		function Le(e, t) {
			var n = e.dataset[t] || e.dataset[G(t)];
			return Ie.test(n) ? n : Fe(JSON.parse, n);
		}
		function Re(e, t, n) {
			n = Fe(JSON.stringify, n), e.dataset[G(t)] = n;
		}
		function ze(e, t) {
			if (!e) {
				if (!this[0]) return;
				var n = {};
				for (var r in this[0].dataset) n[r] = Le(this[0], r);
				return n;
			}
			if (A(e)) return arguments.length < 2 ? this[0] && Le(this[0], e) : j(t) ? this : this.each(function(n, r) {
				Re(r, e, t);
			});
			for (var r in e) this.data(r, e[r]);
			return this;
		}
		C.data = ze;
		function Be(e, t) {
			var n = e.documentElement;
			return Math.max(e.body[`scroll${t}`], n[`scroll${t}`], e.body[`offset${t}`], n[`offset${t}`], n[`client${t}`]);
		}
		P([!0, !1], function(e, t) {
			P(["Width", "Height"], function(e, n) {
				var r = `${t ? "outer" : "inner"}${n}`;
				C[r] = function(r) {
					if (this[0]) return E(this[0]) ? t ? this[0][`inner${n}`] : this[0].document.documentElement[`client${n}`] : D(this[0]) ? Be(this[0], n) : this[0][`${t ? "offset" : "client"}${n}`] + (r && t ? R(this[0], `margin${e ? "Top" : "Left"}`) + R(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
				};
			});
		}), P(["Width", "Height"], function(e, t) {
			var n = t.toLowerCase();
			C[n] = function(r) {
				if (!this[0]) return j(r) ? void 0 : this;
				if (!arguments.length) return E(this[0]) ? this[0].document.documentElement[`client${t}`] : D(this[0]) ? Be(this[0], t) : this[0].getBoundingClientRect()[n] - ue(this[0], !e);
				var i = parseInt(r, 10);
				return this.each(function(t, r) {
					if (O(r)) {
						var a = L(r, "boxSizing");
						r.style[n] = Ne(n, i + (a === "border-box" ? ue(r, !e) : 0));
					}
				});
			};
		});
		var Ve = "___cd";
		C.toggle = function(e) {
			return this.each(function(t, n) {
				if (O(n)) {
					var r = fe(n);
					(j(e) ? r : e) ? (n.style.display = n[Ve] || "", fe(n) && (n.style.display = de(n.tagName))) : r || (n[Ve] = L(n, "display"), n.style.display = "none");
				}
			});
		}, C.hide = function() {
			return this.toggle(!1);
		}, C.show = function() {
			return this.toggle(!0);
		};
		var He = "___ce", J = ".", Y = {
			focus: "focusin",
			blur: "focusout"
		}, X = {
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		}, Ue = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
		function Z(e) {
			return X[e] || Y[e] || e;
		}
		function Q(e) {
			var t = e.split(J);
			return [t[0], t.slice(1).sort()];
		}
		C.trigger = function(e, t) {
			if (A(e)) {
				var r = Q(e), i = r[0], a = r[1], o = Z(i);
				if (!o) return this;
				var s = Ue.test(o) ? "MouseEvents" : "HTMLEvents";
				e = n.createEvent(s), e.initEvent(o, !0, !0), e.namespace = a.join(J), e.___ot = i;
			}
			e.___td = t;
			var c = e.___ot in Y;
			return this.each(function(t, n) {
				c && k(n[e.___ot]) && (n[`___i${e.type}`] = !0, n[e.___ot](), n[`___i${e.type}`] = !1), n.dispatchEvent(e);
			});
		};
		function We(e) {
			return e[He] = e[He] || {};
		}
		function Ge(e, t, n, r, i) {
			var a = We(e);
			a[t] = a[t] || [], a[t].push([
				n,
				r,
				i
			]), e.addEventListener(t, i);
		}
		function Ke(e, t) {
			return !t || !_.call(t, function(t) {
				return e.indexOf(t) < 0;
			});
		}
		function $(e, t, n, r, i) {
			var a = We(e);
			if (t) a[t] && (a[t] = a[t].filter(function(a) {
				var o = a[0], s = a[1], c = a[2];
				if (i && c.guid !== i.guid || !Ke(o, n) || r && r !== s) return !0;
				e.removeEventListener(t, c);
			}));
			else for (t in a) $(e, t, n, r, i);
		}
		C.off = function(e, t, n) {
			var r = this;
			if (j(e)) this.each(function(e, t) {
				!O(t) && !D(t) && !E(t) || $(t);
			});
			else if (A(e)) k(t) && (n = t, t = ""), P(I(e), function(e, i) {
				var a = Q(i), o = a[0], s = a[1], c = Z(o);
				r.each(function(e, r) {
					!O(r) && !D(r) && !E(r) || $(r, c, s, t, n);
				});
			});
			else for (var i in e) this.off(i, e[i]);
			return this;
		}, C.remove = function(e) {
			return V(this, e).detach().off(), this;
		}, C.replaceWith = function(e) {
			return this.before(e).remove();
		}, C.replaceAll = function(e) {
			return w(e).replaceWith(this), this;
		};
		function qe(e, t, n, r, i) {
			var a = this;
			if (!A(e)) {
				for (var o in e) this.on(o, t, n, e[o], i);
				return this;
			}
			return A(t) || (j(t) || M(t) ? t = "" : j(n) ? (n = t, t = "") : (r = n, n = t, t = "")), k(r) || (r = n, n = void 0), r && P(I(e), function(e, o) {
				var s = Q(o), c = s[0], l = s[1], u = Z(c), d = c in X, f = c in Y;
				u && a.each(function(e, a) {
					if (!(!O(a) && !D(a) && !E(a))) {
						var o = function(e) {
							if (e.target[`___i${e.type}`]) return e.stopImmediatePropagation();
							if (!(e.namespace && !Ke(l, e.namespace.split(J))) && !(!t && (f && (e.target !== a || e.___ot === u) || d && e.relatedTarget && a.contains(e.relatedTarget)))) {
								var s = a;
								if (t) {
									for (var c = e.target; !pe(c, t);) if (c === a || (c = c.parentNode, !c)) return;
									s = c;
								}
								Object.defineProperty(e, "currentTarget", {
									configurable: !0,
									get: function() {
										return s;
									}
								}), Object.defineProperty(e, "delegateTarget", {
									configurable: !0,
									get: function() {
										return a;
									}
								}), Object.defineProperty(e, "data", {
									configurable: !0,
									get: function() {
										return n;
									}
								});
								var p = r.call(s, e, e.___td);
								i && $(a, u, l, t, o), p === !1 && (e.preventDefault(), e.stopPropagation());
							}
						};
						o.guid = r.guid = r.guid || w.guid++, Ge(a, u, l, t, o);
					}
				});
			}), this;
		}
		C.on = qe;
		function Je(e, t, n, r) {
			return this.on(e, t, n, r, !0);
		}
		C.one = Je;
		var Ye = /\r?\n/g;
		function Xe(e, t) {
			return `&${encodeURIComponent(e)}=${encodeURIComponent(t.replace(Ye, "\r\n"))}`;
		}
		var Ze = /file|reset|submit|button|image/i, Qe = /radio|checkbox/i;
		C.serialize = function() {
			var e = "";
			return this.each(function(t, n) {
				P(n.elements || [n], function(t, n) {
					if (!(n.disabled || !n.name || n.tagName === "FIELDSET" || Ze.test(n.type) || Qe.test(n.type) && !n.checked)) {
						var r = ve(n);
						j(r) || P(u(r) ? r : [r], function(t, r) {
							e += Xe(n.name, r);
						});
					}
				});
			}), e.slice(1);
		}, e === void 0 ? r.cash = r.$ = w : t.exports = w;
	})();
})))(), 1), l = {
	live: !1,
	theme: "system",
	edit: "all",
	openDepth: 0,
	node: void 0
}, u = {
	open: !0,
	callback: void 0
}, d = {
	OBJECT: "object",
	ARRAY: "array",
	STRING: "string",
	NUMBER: "number",
	BOOLEAN: "boolean",
	NULL: "null"
}, f = {
	START: "pointerdown",
	MOVE: "pointermove",
	END: "pointerup.json-editor pointercancel.json-editor"
}, p = {
	CLICK: "click.json-editor-context",
	KEYUP: "keyup.json-editor-context"
}, m = {
	START: "drag-over-start",
	END: "drag-over-end",
	ALL: "drag-over-start drag-over-end"
}, h = "<svg viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 12L10 8L6 4\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>", ee = "<svg viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"rotate(-90, 10, 10)\"><path d=\"M7 9L10 12L13 9\" fill=\"currentColor\"/><path d=\"M7 9L10 12L13 9H7Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></g></svg>", g = "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>", _ = {
	object: "<svg viewBox=\"0 0 11 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"t-object\"><g transform=\"translate(0 1)\"><path d=\"M2.296 5.166C2.296 7.238 3.78 8.162 5.166 8.162C6.538 8.162 8.022 7.238 8.022 5.166C8.022 3.094 6.538 2.156 5.166 2.156C3.78 2.156 2.296 3.094 2.296 5.166ZM0 5.18C0 2.03 2.366 0 5.166 0C7.952 0 10.318 2.03 10.318 5.18C10.318 8.316 7.952 10.346 5.166 10.346C2.366 10.346 0 8.316 0 5.18Z\" fill=\"currentColor\"/></g></svg>",
	array: "<svg viewBox=\"0 0 10 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"t-array\"><path d=\"M7.728 9.926L6.902 7.658H2.87L2.044 9.926H0L3.808 0H6.048L9.828 9.926H7.728ZM4.886 2.142L3.514 5.894H6.258L4.886 2.142Z\" fill=\"currentColor\"/></svg>",
	string: "<svg viewBox=\"0 0 8 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"t-string\"><g transform=\"translate(0 1)\"><path d=\"M7.39203 2.576L5.65603 3.108C5.55803 2.562 5.11003 1.708 3.85003 1.708C2.91203 1.708 2.29603 2.31 2.29603 2.968C2.29603 3.514 2.64603 3.948 3.37403 4.088L4.76003 4.354C6.56603 4.704 7.53203 5.88 7.53203 7.28C7.53203 8.806 6.25803 10.346 3.94803 10.346C1.31603 10.346 0.154031 8.652 3.05176e-05 7.238L1.79203 6.762C1.87603 7.742 2.56203 8.624 3.96203 8.624C4.99803 8.624 5.57203 8.106 5.57203 7.406C5.57203 6.832 5.13803 6.384 4.36803 6.23L2.98203 5.95C1.40003 5.628 0.378031 4.606 0.378031 3.108C0.378031 1.344 1.96003 0 3.83603 0C6.24403 0 7.16803 1.456 7.39203 2.576Z\" fill=\"currentColor\"/></g></svg>",
	number: "<svg viewBox=\"0 0 9 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"t-number\"><path d=\"M8.47003 9.926H6.44003L1.93203 2.884V9.926H3.05176e-05V0H2.40803L6.53803 6.566V0H8.47003V9.926Z\" fill=\"currentColor\"/></svg>",
	boolean: "<svg viewBox=\"0 0 7 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"t-boolean\"><path d=\"M3.05176e-05 0H3.57003C5.50203 0 6.59403 1.134 6.59403 2.674C6.59403 3.696 5.97803 4.522 5.15203 4.802C6.11803 5.04 6.90203 5.922 6.90203 7.154C6.90203 8.764 5.69803 9.926 3.83603 9.926H3.05176e-05V0ZM1.90403 4.102H3.27603C4.15803 4.102 4.69003 3.612 4.69003 2.856C4.69003 2.1 4.20003 1.624 3.26203 1.624H1.90403V4.102ZM1.90403 8.316H3.47203C4.41003 8.316 4.97003 7.826 4.97003 7.028C4.97003 6.244 4.46603 5.698 3.50003 5.698H1.90403V8.316Z\" fill=\"currentColor\"/></svg>",
	null: "<svg viewBox=\"0 0 8 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"t-null\"><g transform=\"translate(0 1.5)\"><path d=\"M3.808 10.15C1.694 10.15 0 8.848 0 6.412V0H1.932V6.272C1.932 7.574 2.66 8.26 3.808 8.26C4.984 8.26 5.698 7.574 5.698 6.272V0H7.63V6.412C7.63 8.848 5.936 10.15 3.808 10.15Z\" fill=\"currentColor\"/></g></svg>"
}, v = class {
	#e;
	el = {
		node: void 0,
		type: void 0,
		dialog: void 0
	};
	#t;
	constructor(e, t, n = !1) {
		this.#e = e, this.el.node = (0, c.default)(t), this.#t = String(this.el.node.data("type")), this.el.type = this.el.node.find("& > .node__body > .type"), this.el.type.addClass("open"), this.el.dialog = this.#r(this.#n(), this.#t, n), this.el.dialog.on("click", (e) => e.stopPropagation()), this.el.dialog.find("button").on("click", (e) => this.#i(e)), this.#e.el.wrap.get(0).dispatchEvent(new CustomEvent("context", { detail: {
			body: this.el.dialog.get(0),
			node: this.el.node.get(0),
			type: this.#t,
			isRoot: n,
			$: c.default
		} })), this.el.type.append(this.el.dialog), (0, c.default)(window).on(p.CLICK, (e) => this.close(e)), (0, c.default)(window).on(p.KEYUP, (e) => this.#a(e));
	}
	#n() {
		let { lang: e } = this.#e;
		return [
			{
				key: "change-type",
				label: e.contextChangeType,
				children: [
					{
						key: d.OBJECT,
						label: e.contextTypeObject
					},
					{
						key: d.ARRAY,
						label: e.contextTypeArray
					},
					{
						key: d.STRING,
						label: e.contextTypeString
					},
					{
						key: d.NUMBER,
						label: e.contextTypeNumber
					},
					{
						key: d.BOOLEAN,
						label: e.contextTypeBoolean
					},
					{
						key: d.NULL,
						label: e.contextTypeNull
					}
				]
			},
			{
				key: "insert",
				label: e.contextInsertNode,
				children: [
					{
						key: d.OBJECT,
						label: e.contextTypeObject
					},
					{
						key: d.ARRAY,
						label: e.contextTypeArray
					},
					{
						key: d.STRING,
						label: e.contextTypeString
					},
					{
						key: d.NUMBER,
						label: e.contextTypeNumber
					},
					{
						key: d.BOOLEAN,
						label: e.contextTypeBoolean
					},
					{
						key: d.NULL,
						label: e.contextTypeNull
					}
				]
			},
			{
				key: "duplicate",
				label: e.contextDuplicate
			},
			{
				key: "remove",
				label: e.contextRemove
			}
		];
	}
	#r(e, t, n = !1) {
		function r(e, r) {
			let a = "", { key: o, label: s, children: c } = e;
			if (n) switch (o) {
				case d.STRING:
				case d.NUMBER:
				case d.BOOLEAN:
				case d.NULL:
					if (r === "change-type") return "";
					break;
				case "duplicate":
				case "remove": return "";
			}
			let l = "", u = "", f = "";
			switch (o) {
				case "change-type":
					l = " class=\"dropdown\"", f = " disabled";
					break;
				case "insert":
					if ([
						d.STRING,
						d.NUMBER,
						d.BOOLEAN,
						d.NULL
					].indexOf(t) > -1) return "";
					l = " class=\"dropdown\"", f = " disabled";
					break;
				case "duplicate":
					l = " class=\"duplicate\"", f = " data-mode=\"duplicate\"";
					break;
				case "remove":
					l = " class=\"remove\"", f = " data-mode=\"remove\"";
					break;
				case d.OBJECT:
				case d.ARRAY:
				case d.STRING:
				case d.NUMBER:
				case d.BOOLEAN:
				case d.NULL:
					l = " class=\"type\"", u = `<i class="type-icon type-icon--${o}">${_[o]}</i>`, f = ` data-mode="${r}" data-type="${o}"`, r === "change-type" && o === t && (f = " disabled");
					break;
			}
			return a += `<li${l}>`, a += `<button type="button"${f}>`, a += u, a += `<em class="label">${s}</em>`, (o === "change-type" || o === "insert") && (a += `<span class="arrow">${h}</span>`), a += "</button>", c?.length > 0 && (a += "<div class=\"children\">", a += i(c, o), a += "</div>"), a += "</li>", a;
		}
		function i(e, t = void 0) {
			let n = "<ol>";
			for (let i in e) n += r(e[i], t);
			return n += "</ol>", n;
		}
		let a = `<nav class="context${n ? " is-root" : ""}">`;
		return a += i(e), a += "</nav>", (0, c.default)(a);
	}
	#i(e) {
		let t = (0, c.default)(e.currentTarget), n = t.data("mode"), r = String(t.data("type"));
		r = r === "undefined" ? "" : r, this.close(), this.selectItem && typeof this.selectItem == "function" && this.selectItem(this.el.node, n, r);
	}
	#a(e) {
		e.code === "Escape" && this.close();
	}
	close() {
		this.el.type.removeClass("open"), this.el.dialog.remove(), (0, c.default)(window).off(p.CLICK), (0, c.default)(window).off(p.KEYUP), delete this.#e.context;
	}
};
//#endregion
//#region src/json-editor/libs/util.js
function y(e) {
	return e == null ? "null" : Array.isArray(e) ? "array" : typeof e == "string" ? "string" : typeof e == "number" ? "number" : typeof e == "boolean" ? "boolean" : "object";
}
function te(e) {
	try {
		return typeof e == "string" ? JSON.parse(e) : Array.isArray(e) ? Object.assign([], e) : c.default.isPlainObject(e) ? Object.assign({}, e) : {};
	} catch (e) {
		console.error("error", e.message);
	}
}
function ne(e) {
	return Array.isArray(e) ? e.length : c.default.isPlainObject(e) ? Object.keys(e).length : 0;
}
function b(e) {
	if (e.ctrlKey || e.metaKey) switch (e.code) {
		case "KeyB":
		case "KeyI":
		case "KeyU": return !0;
	}
	return !1;
}
function x(e) {
	e.preventDefault();
	let t = e.currentTarget, n = document.createRange();
	n.selectNodeContents(t);
	let r = window.getSelection();
	r.removeAllRanges(), r.addRange(n);
}
function S(e) {
	e.preventDefault();
	let t = (e.originalEvent || e).clipboardData.getData("text/plain");
	document.execCommand("insertText", !1, t);
}
//#endregion
//#region src/json-editor/libs/lang.js
var C = {
	nodeChangeSort: "Change node sort",
	nodeContextMenu: "Node context menu",
	nodeFold: "Collapse/Expand",
	contextChangeType: "Change type",
	contextInsertNode: "Insert",
	contextTypeObject: "Object",
	contextTypeArray: "Array",
	contextTypeString: "String",
	contextTypeNumber: "Number",
	contextTypeBoolean: "Boolean",
	contextTypeNull: "Null",
	contextDuplicate: "Duplicate",
	contextRemove: "Remove"
}, w = class {
	$;
	el = {
		wrap: null,
		body: null,
		tree: null
	};
	options;
	context;
	#e;
	#t = !1;
	lang = C;
	constructor(e, t = {}) {
		this.$ = c.default, this.el.wrap = (0, c.default)(e), this.el.body = (0, c.default)("<div class=\"json-editor\"></div>"), this.options = new Proxy(Object.assign({}, l, t), {
			get: (e, t) => e[t],
			set: this.#n.bind(this)
		}), this.updateLanguage(), this.el.wrap.append(this.el.body), this.#r(this.options.theme), this.#p(this.options.edit), this.replace(t.node || {}, {}, !1), this.#m(t.openDepth);
	}
	#n(e, t, n) {
		switch (e[t] = n, t) {
			case "theme":
				this.#r(n);
				break;
			case "edit":
				this.#p(n);
				break;
		}
		return !0;
	}
	#r(e) {
		e = [
			"system",
			"light",
			"dark"
		].indexOf(e) > -1 ? e : "system", this.el.body.attr("data-theme", e);
	}
	#i(e, t = !1) {
		let { lang: n } = this, r = `<li data-type="${e}" class="node${t ? " root" : ""}">`;
		return r += "<div class=\"node__body\">", t || (r += `<div class="sort" title="${n.nodeChangeSort}">${g}</div>`), r += `<div class="type"><button type="button" title="${n.nodeContextMenu}"></button></div>`, (e === d.OBJECT || e === d.ARRAY) && (r += `<button type="button" title="${n.nodeFold}" class="fold">${ee}</button>`), t || (r += "<div class=\"key\"></div>"), r += "<em class=\"count\"></em>", t || (r += "<div class=\"value\"></div>"), r += "</div>", r += "<div class=\"node__children\"><ul class=\"tree\"/></div>", r += "</li>", (0, c.default)(r);
	}
	#a(e) {
		let t = y(e), n = this.#i(t, !0);
		return this.#s(n, {
			key: void 0,
			value: e,
			type: t,
			open: !0,
			depth: 0
		}), this.#h(n), this.el.tree = (0, c.default)("<ul/>"), this.el.tree.append(n), this.el.body.append(this.el.tree), n;
	}
	#o(e, t, n) {
		switch (t) {
			case "change-type":
				this.changeType(e, n);
				break;
			case "insert":
				this.fold(e, !0), this.addNode(e, {
					key: "",
					value: "",
					type: n
				});
				break;
			case "duplicate":
				this.duplicate(e);
				break;
			case "remove":
				this.removeNode(e);
				break;
		}
	}
	#s(e, t) {
		let { key: n, value: r, type: i, open: a, depth: o } = t, s = e.hasClass("root"), c = e.children(".node__body");
		if (c.find(".type > button").html(`<i class="type-icon type-icon--${i}">${_[i]}</i>`), (i === d.OBJECT || i === d.ARRAY) && this.fold(e, a), o !== void 0 && e.attr("data-depth", o), !s) {
			c.find(".key").html(`<div class="label-field" contenteditable="true" data-placeholder="empty">${n}</div>`);
			let e = c.find(".value"), t;
			switch (i) {
				case d.STRING:
					e.html(`<div contenteditable="true" data-placeholder="empty" class="label-field type-string">${String(r)}</div>`);
					break;
				case d.NUMBER:
					t = Number(r), isNaN(t) && (t = 0), e.html(`<input type="number" value="${t}" placeholder="0" class="label-field type-number"/>`);
					break;
				case d.BOOLEAN:
					t = r === "false" ? !1 : !!r, e.html(`<button type="button" data-value="${t}" class="label-switch type-boolean"><span><i>${t.toString().toUpperCase()}</i></span></button>`);
					break;
				case d.NULL:
					e.html("<em class=\"label-null type-null\">NULL</em>");
					break;
			}
		}
		if (i === d.OBJECT || i === d.ARRAY) {
			let e = ne(r);
			isNaN(e) || c.find(".count").text(e);
		}
	}
	#c(e) {
		return String(e.data("type"));
	}
	#l(e) {
		let t = this.#c(e), n = e.find("& > .node__body > .value");
		switch (t) {
			case d.OBJECT:
			case d.ARRAY: return "";
			case d.STRING: return n.children(".type-string").get(0).innerText || "";
			case d.NUMBER: return Number(n.children(".type-number").val());
			case d.BOOLEAN: return n.children(".type-boolean").data("value");
			case d.NULL: return null;
		}
	}
	#u() {
		this.options.live && this.el.wrap.get(0).dispatchEvent(new CustomEvent("update", { detail: this.#d() }));
	}
	#d(e) {
		let t = (e, n) => {
			let r = n === d.ARRAY ? [] : {};
			return e.find("& > .node__children > ul > li").each((e, i) => {
				if (!(n === d.ARRAY || n === d.OBJECT)) return !0;
				i = (0, c.default)(i);
				let a = this.#c(i);
				switch (a) {
					case d.OBJECT:
					case d.ARRAY:
						switch (n) {
							case d.ARRAY:
								r.push(t(i, a));
								break;
							case d.OBJECT:
								let e = i.find("& > .node__body > .key").text();
								e && (r[e] = t(i, a));
								break;
						}
						break;
					case d.STRING:
					case d.NUMBER:
					case d.BOOLEAN:
					case d.NULL:
						let e = this.#l(i);
						switch (n) {
							case d.ARRAY:
								r.push(e);
								break;
							case d.OBJECT:
								let t = i.find("& > .node__body > .key").text();
								t && (r[t] = e);
								break;
						}
						break;
				}
			}), r;
		};
		e = (0, c.default)(e);
		let n = e?.length > 0 ? e : this.el.tree.children(".node"), r = this.#c(n);
		if ([d.OBJECT, d.ARRAY].includes(r)) return t(n, r);
	}
	#f(e) {
		e = (0, c.default)(e);
		let t = this.#c(e);
		if (!(t === "object" || t === "array")) return;
		let n = e.find("& > .node__children > ul > li").length;
		isNaN(n) || e.find("& > .node__body > .count").text(n);
	}
	#p(e) {
		e === "all" ? this.el.body.removeAttr("data-edit") : this.el.body.attr("data-edit", e);
	}
	#m(e = 0) {
		e > 0 && this.el.body.find(".node:not(.root)").each((t, n) => {
			(0, c.default)(n).data("depth") < e && this.fold((0, c.default)(n), !0);
		});
	}
	#h(e) {
		let t = e.find(".sort");
		t.length && t.on(f.START, this.#v.bind(this)), e.find(".type > button").on("click", async (e) => {
			if (e.stopPropagation(), this.options.edit !== "all") return;
			let t = (0, c.default)(e.currentTarget);
			if (t.parent().hasClass("open")) this.context && this.context.close();
			else {
				this.context && this.context.close();
				let e = t.closest(".node").hasClass("root");
				this.context = new v(this, t.closest(".node"), e), this.context.selectItem = (e, t, n) => this.#o(e, t, n);
			}
		}), e.find(".fold").on("click", (e) => {
			let t = (0, c.default)(e.currentTarget).closest(".node");
			this.fold(t);
		});
		let n = e.find(".key > .label-field");
		n.length && (n.on("keydown", (e) => {
			if (this.options.edit === "all" && (e.code === "Enter" || b(e))) return e.preventDefault();
		}).on("input", (e) => this.#g(e)).on("blur", (e) => this.#_(e)), this.options.edit === "all" ? n.on("paste", S) : n.on("dblclick", x));
		let r = e.find(".value > .type-string");
		r.length && (r.on("keydown", (e) => {
			if (this.options.edit !== "none" && b(e)) return e.preventDefault();
		}).on("input", (e) => this.#g(e)).on("blur", (e) => this.#_(e)), this.options.edit === "none" ? r.on("dblclick", x) : r.on("paste", S));
		let i = e.find(".value > .type-number");
		i.length && i.on("keydown", (e) => {
			this.options.edit === "none" && e.preventDefault();
		}).on("input", (e) => this.#g(e)).on("blur", (e) => this.#_(e));
		let a = e.find(".value > .type-boolean");
		a.length && a.on("click", (e) => {
			if (this.options.edit === "none") return;
			let t = (0, c.default)(e.currentTarget), n = !t.data("value");
			t.data("value", n).find("i").text(n.toString().toUpperCase()), this.#u();
		});
	}
	#g() {
		this.#t = !0;
	}
	#_() {
		this.#t &&= (this.#u(), !1);
	}
	#v(e) {
		if (this.#e = {}, this.#e.$node = (0, c.default)(e.currentTarget).closest(".node"), this.#e.$area = this.#e.$node.parent(), this.#e.$nodes = this.#e.$area.children(".node"), this.#e.$nodes.length < 2) {
			this.#e = void 0;
			return;
		}
		this.#e.$nodes.on(f.MOVE, this.#y.bind(this)), (0, c.default)(window).on(f.END, this.#b.bind(this));
	}
	#y(e) {
		let t;
		if (e.pointerType === "touch") {
			let { clientX: n, clientY: r } = e, i = document.elementFromPoint(n, r).closest(".node");
			if (!this.#e.$nodes.get().includes(i)) return;
			t = (0, c.default)(i);
		} else t = (0, c.default)(e.currentTarget);
		let n = t.children(".node__body");
		if (!(n.length > 0)) return;
		let { y: r, height: i } = n.get(0).getBoundingClientRect(), a = i * .5 < e.y - r;
		if (this.#e.activeNode || (this.el.body.addClass("dragging"), this.#e.$area.addClass("drag-area"), this.#e.$node.addClass("drag-select")), this.#e.activeNode !== t.get(0)) this.#e.activeNode && (0, c.default)(this.#e.activeNode).removeClass(m.ALL), this.#e.activeNode = t.get(0);
		else if (this.#e.half === a) return;
		this.#e.half = a, t.removeClass(m.ALL).addClass(a ? m.END : m.START);
	}
	#b() {
		this.el.body.removeClass("dragging"), this.#e.$area.removeClass("drag-area"), this.#e.$node.removeClass("drag-select"), this.#e.$nodes.removeClass(m.ALL), this.#e.$nodes.off(f.MOVE), (0, c.default)(window).off(f.END), this.#e.half ? this.#e.$node.insertAfter(this.#e.activeNode) : this.#e.$node.insertBefore(this.#e.activeNode), this.#e = void 0, this.#u();
	}
	addNode(e, t, n = {}, r = !0, i = !0) {
		n = {
			...u,
			...n
		};
		let { open: a, callback: o } = n;
		e = (0, c.default)(e);
		let s = t.type === void 0 ? y(t.value) : t.type, l = this.#i(s, !1);
		this.#s(l, {
			...t,
			open: a,
			type: s,
			depth: e.data("depth") + 1
		}), this.#h(l), e.find("& > .node__children > ul").append(l), i && this.#f(e), (s === d.ARRAY || s === d.OBJECT) && o && typeof o == "function" && o(l.get(0), t.value), r && this.#u();
	}
	removeNode(e, t = !0) {
		e = (0, c.default)(e);
		let n = e.parent().closest(".node");
		e.remove(), this.#f(n), t && this.#u();
	}
	changeType(e, t, n = !0) {
		let r = (0, c.default)(e), i = {
			key: r.find("& > .node__body .key").text(),
			value: this.#l(r),
			type: t,
			open: r.hasClass("open"),
			depth: r.data("depth")
		}, a = r.find("& > .node__children > .tree").html(), o = r.hasClass("root");
		r.empty(), r.html(this.#i(t, o).html()), a && r.find("& > .node__children > .tree").html(a), this.#s(r, i), this.#h(r), r.attr("data-type", t), n && this.#u();
	}
	changeKey(e, t) {
		(0, c.default)(e).find(".key > div").text(t), this.#u();
	}
	changeValue(e, t) {
		(0, c.default)(e).find(".value > div").text(t), this.#u();
	}
	duplicate(e, t = !0) {
		e = (0, c.default)(e);
		let n = (0, c.default)(e.get(0).outerHTML);
		this.#h(n), e.after(n), this.#f(e.parent().closest(".node")), t && this.#u();
	}
	fold(e, t) {
		e = (0, c.default)(e), t === void 0 ? e.toggleClass("open") : t === !0 ? e.addClass("open") : e.removeClass("open");
	}
	clear() {
		this.el.tree && (this.el.body.empty(), this.replace({}, {}, !1), this.#u());
	}
	destroy() {
		(0, c.default)(window).off(f.END).off(p.CLICK).off(p.KEYUP), this.el.wrap.empty();
	}
	replace(e, t = {}, n = !0) {
		this.el.body.empty(), e = te(e);
		let r = this.#a(e);
		this.importData(r, e, !1, !1), n && this.#u(), t?.openDepth && this.#m(t?.openDepth);
	}
	importData(e, t, n = !0, r = !0) {
		e = (0, c.default)(e), c.default.each(t, (t, n) => {
			let r = {
				key: t,
				value: n
			};
			this.addNode(e, r, {
				open: !1,
				callback: (e, t) => this.importData(e, t, !1, !1)
			}, !1, !1);
		}), r && this.#f(e), n && this.#u();
	}
	export(e = void 0, t, n = 2) {
		let r = this.#d(e);
		if (t) {
			let e = 2;
			return n === !0 ? e = "	" : typeof n === d.NUMBER && (e = n), JSON.stringify(r, null, e);
		} else return r;
	}
	updateLanguage() {}
};
//#endregion
export { w as default };
