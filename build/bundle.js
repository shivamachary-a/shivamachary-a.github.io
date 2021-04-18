var app = function () { "use strict"; function t() { } const e = t => t; function n(t) { return t() } function i() { return Object.create(null) } function o(t) { t.forEach(n) } function s(t) { return "function" == typeof t } function r(t, e) { return t != t ? e == e : t !== e || t && "object" == typeof t || "function" == typeof t } const l = "undefined" != typeof window; let a = l ? () => window.performance.now() : () => Date.now(), c = l ? t => requestAnimationFrame(t) : t; const u = new Set; function d(t) { u.forEach((e => { e.c(t) || (u.delete(e), e.f()) })), 0 !== u.size && c(d) } function p(t, e) { t.appendChild(e) } function f(t, e, n) { t.insertBefore(e, n || null) } function m(t) { t.parentNode.removeChild(t) } function h(t) { return document.createElement(t) } function y() { return t = " ", document.createTextNode(t); var t } function g(t, e, n) { null == n ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n) } const b = new Set; let $, v = 0; function _(t, e, n, i, o, s, r, l = 0) { const a = 16.666 / i; let c = "{\n"; for (let t = 0; t <= 1; t += a) { const i = e + (n - e) * s(t); c += 100 * t + `%{${r(i, 1 - i)}}\n` } const u = c + `100% {${r(n, 1 - n)}}\n}`, d = `__svelte_${function (t) { let e = 5381, n = t.length; for (; n--;)e = (e << 5) - e ^ t.charCodeAt(n); return e >>> 0 }(u)}_${l}`, p = t.ownerDocument; b.add(p); const f = p.__svelte_stylesheet || (p.__svelte_stylesheet = p.head.appendChild(h("style")).sheet), m = p.__svelte_rules || (p.__svelte_rules = {}); m[d] || (m[d] = !0, f.insertRule(`@keyframes ${d} ${u}`, f.cssRules.length)); const y = t.style.animation || ""; return t.style.animation = `${y ? `${y}, ` : ""}${d} ${i}ms linear ${o}ms 1 both`, v += 1, d } function w(t, e) { const n = (t.style.animation || "").split(", "), i = n.filter(e ? t => t.indexOf(e) < 0 : t => -1 === t.indexOf("__svelte")), o = n.length - i.length; o && (t.style.animation = i.join(", "), v -= o, v || c((() => { v || (b.forEach((t => { const e = t.__svelte_stylesheet; let n = e.cssRules.length; for (; n--;)e.deleteRule(n); t.__svelte_rules = {} })), b.clear()) }))) } function x(t) { $ = t } const k = [], j = [], E = [], C = [], A = Promise.resolve(); let T = !1; function M(t) { E.push(t) } let P = !1; const S = new Set; function O() { if (!P) { P = !0; do { for (let t = 0; t < k.length; t += 1) { const e = k[t]; x(e), H(e.$$) } for (x(null), k.length = 0; j.length;)j.pop()(); for (let t = 0; t < E.length; t += 1) { const e = E[t]; S.has(e) || (S.add(e), e()) } E.length = 0 } while (k.length); for (; C.length;)C.pop()(); T = !1, P = !1, S.clear() } } function H(t) { if (null !== t.fragment) { t.update(), o(t.before_update); const e = t.dirty; t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(M) } } let L; function N(t, e, n) { t.dispatchEvent(function (t, e) { const n = document.createEvent("CustomEvent"); return n.initCustomEvent(t, !1, !1, e), n }(`${e ? "intro" : "outro"}${n}`)) } const R = new Set; let q; function z(t, e) { t && t.i && (R.delete(t), t.i(e)) } const D = { duration: 0 }; function B(n, i, r, l) { let p = i(n, r), f = l ? 0 : 1, m = null, h = null, y = null; function g() { y && w(n, y) } function b(t, e) { const n = t.b - f; return e *= Math.abs(n), { a: f, b: t.b, d: n, duration: e, start: t.start, end: t.start + e, group: t.group } } function $(i) { const { delay: s = 0, duration: r = 300, easing: l = e, tick: $ = t, css: v } = p || D, w = { start: a() + s, b: i }; i || (w.group = q, q.r += 1), m || h ? h = w : (v && (g(), y = _(n, f, i, r, s, l, v)), i && $(0, 1), m = b(w, r), M((() => N(n, i, "start"))), function (t) { let e; 0 === u.size && c(d), new Promise((n => { u.add(e = { c: t, f: n }) })) }((t => { if (h && t > h.start && (m = b(h, r), h = null, N(n, m.b, "start"), v && (g(), y = _(n, f, m.b, m.duration, 0, l, p.css))), m) if (t >= m.end) $(f = m.b, 1 - f), N(n, m.b, "end"), h || (m.b ? g() : --m.group.r || o(m.group.c)), m = null; else if (t >= m.start) { const e = t - m.start; f = m.a + m.d * l(e / m.duration), $(f, 1 - f) } return !(!m && !h) }))) } return { run(t) { s(p) ? (L || (L = Promise.resolve(), L.then((() => { L = null }))), L).then((() => { p = p(), $(t) })) : $(t) }, end() { g(), m = h = null } } } function F(t, e) { -1 === t.$$.dirty[0] && (k.push(t), T || (T = !0, A.then(O)), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31 } function G(e, r, l, a, c, u, d = [-1]) { const p = $; x(e); const f = e.$$ = { fragment: null, ctx: null, props: u, update: t, not_equal: c, bound: i(), on_mount: [], on_destroy: [], on_disconnect: [], before_update: [], after_update: [], context: new Map(p ? p.$$.context : r.context || []), callbacks: i(), dirty: d, skip_bound: !1 }; let h = !1; if (f.ctx = l ? l(e, r.props || {}, ((t, n, ...i) => { const o = i.length ? i[0] : n; return f.ctx && c(f.ctx[t], f.ctx[t] = o) && (!f.skip_bound && f.bound[t] && f.bound[t](o), h && F(e, t)), n })) : [], f.update(), h = !0, o(f.before_update), f.fragment = !!a && a(f.ctx), r.target) { if (r.hydrate) { const t = function (t) { return Array.from(t.childNodes) }(r.target); f.fragment && f.fragment.l(t), t.forEach(m) } else f.fragment && f.fragment.c(); r.intro && z(e.$$.fragment), function (t, e, i, r) { const { fragment: l, on_mount: a, on_destroy: c, after_update: u } = t.$$; l && l.m(e, i), r || M((() => { const e = a.map(n).filter(s); c ? c.push(...e) : o(e), t.$$.on_mount = [] })), u.forEach(M) }(e, r.target, r.anchor, r.customElement), O() } x(p) } function I(t) { const e = t - 1; return e * e * e + 1 } function J(t, { delay: e = 0, duration: n = 400, easing: i = I, x: o = 0, y: s = 0, opacity: r = 0 } = {}) { const l = getComputedStyle(t), a = +l.opacity, c = "none" === l.transform ? "" : l.transform, u = a * (1 - r); return { delay: e, duration: n, easing: i, css: (t, e) => `\n\t\t\ttransform: ${c} translate(${(1 - t) * o}px, ${(1 - t) * s}px);\n\t\t\topacity: ${a - u * e}` } } function K(e) { let n, i, o = function (e) { let n, i, o, s, r, l, a, c, u, d, b, $, v, _, w; return { c() { n = h("div"), i = h("grid"), o = h("me"), o.innerHTML = '<h1 class="svelte-8pmcy2">shivam acharya</h1>', s = y(), r = h("myPic"), l = h("img"), c = y(), u = h("meText"), u.innerHTML = "<p>hi, my name is shivam. im a fullstack developer.</p> \n\t\t\t<p>i&#39;ve made websites, web applications, and mobile applications on many technologies, such as:</p> \n\t\t\t<ul><li><p>frontend:</p> \n\t\t\t\t\t<ul><li>react.js + react native (typescript &amp; javascript)</li> \n\t\t\t\t\t\t<li>next.js</li> \n\t\t\t\t\t\t<li>vue.js</li> \n\t\t\t\t\t\t<li>svelte (that&#39;s what this websites made using)</li> \n\t\t\t\t\t\t<li>flutter (dart)</li> \n\t\t\t\t\t\t<li>vanilla js, html and css</li></ul></li> \n\t\t\t\t<li><p>backend:</p> \n\t\t\t\t\t<ul><li><p>languages:</p> \n\t\t\t\t\t\t\t<ul><li>javascript/typescript</li> \n\t\t\t\t\t\t\t\t<li>python</li> \n\t\t\t\t\t\t\t\t<li>C#</li> \n\t\t\t\t\t\t\t\t<li>java</li> \n\t\t\t\t\t\t\t\t<li>golang</li></ul></li> \n\t\t\t\t\t\t<li><p>frameworks</p> \n\t\t\t\t\t\t\t<ul><li>express.js</li> \n\t\t\t\t\t\t\t\t<li>django</li> \n\t\t\t\t\t\t\t\t<li>flask</li> \n\t\t\t\t\t\t\t\t<li>ASP.NET Core</li> \n\t\t\t\t\t\t\t\t<li>spring boot</li> \n\t\t\t\t\t\t\t\t<li>go-kit</li></ul></li> \n\t\t\t\t\t\t<li><p>databases</p> \n\t\t\t\t\t\t\t<ul><li>firebase</li> \n\t\t\t\t\t\t\t\t<li>mongodb</li> \n\t\t\t\t\t\t\t\t<li>postgres</li></ul></li></ul></li></ul>", d = y(), b = h("underPic"), b.innerHTML = "<h3>based in london</h3>", $ = y(), v = h("do"), v.innerHTML = '<h2 class="svelte-8pmcy2">what can i do for you?</h2> \n\t\t\t<p>today, your business&#39; website is the best way to get new customers and enrich your brand.</p> \n\t\t\t<p>its the digital equivalent of your storefront; its the landing page for your advertising, where people find you and make their first impressions of your business.</p> \n\t\t\t<p>having a modern, beautiful, robust website and/or web application gives you a great advantage - in every industry and every field.</p> \n\t\t\t<p>maybe you could benefit from a mobile app? or a first party system to handle your day to day business logic?</p> \n\t\t\t<p>whatever it is, i can work with you to figure it out, build and maintain it for you.</p> \n\t\t\t<p>whoever you are - cafe, restaurant, merchandise store, etc. - and whatever your goals are, i can help.</p> \n\t\t\t<p>just send me an email: shivamacharya116@gmail.com</p>', g(o, "class", "svelte-8pmcy2"), l.src !== (a = Q) && g(l, "src", a), g(l, "alt", "me"), g(l, "width", "440px"), g(l, "height", "600px"), g(r, "class", "svelte-8pmcy2"), g(u, "class", "svelte-8pmcy2"), g(b, "class", "svelte-8pmcy2"), g(v, "class", "svelte-8pmcy2"), g(i, "class", "svelte-8pmcy2") }, m(t, e) { f(t, n, e), p(n, i), p(i, o), p(i, s), p(i, r), p(r, l), p(i, c), p(i, u), p(i, d), p(i, b), p(i, $), p(i, v), w = !0 }, p: t, i(t) { w || (M((() => { _ || (_ = B(n, J, { y: 200, duration: 2e3 }, !0)), _.run(1) })), w = !0) }, o(t) { _ || (_ = B(n, J, { y: 200, duration: 2e3 }, !1)), _.run(0), w = !1 }, d(t) { t && m(n), t && _ && _.end() } } }(); return { c() { n = h("main"), o && o.c(), g(n, "class", "svelte-8pmcy2") }, m(t, e) { f(t, n, e), o && o.m(n, null), i = !0 }, p(t, [e]) { o.p(t, e) }, i(t) { i || (z(o), i = !0) }, o(t) { !function (t, e, n, i) { if (t && t.o) { if (R.has(t)) return; R.add(t), q.c.push((() => { R.delete(t), i && (n && t.d(1), i()) })), t.o(e) } }(o), i = !1 }, d(t) { t && m(n), o && o.d() } } } let Q = "https://cdn.discordapp.com/attachments/692861972731002995/761949499508654110/20200513_201253.jpg"; return new class extends class { $destroy() { !function (t, e) { const n = t.$$; null !== n.fragment && (o(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []) }(this, 1), this.$destroy = t } $on(t, e) { const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []); return n.push(e), () => { const t = n.indexOf(e); -1 !== t && n.splice(t, 1) } } $set(t) { var e; this.$$set && (e = t, 0 !== Object.keys(e).length) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1) } }{ constructor(t) { super(), G(this, t, null, K, r, {}) } }({ target: document.body, props: { name: "world" } }) }();
//# sourceMappingURL=bundle.js.map
