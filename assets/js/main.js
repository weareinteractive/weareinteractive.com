/*!
 * jQuery JavaScript Library v1.9.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-2-4
 */
!(function (e, t) {
  function n(e) {
    var t = e.length,
      n = le.type(e);
    return (
      !le.isWindow(e) &&
      (!(1 !== e.nodeType || !t) ||
        "array" === n ||
        ("function" !== n &&
          (0 === t || ("number" == typeof t && t > 0 && t - 1 in e))))
    );
  }
  function r(e) {
    var t = (Ce[e] = {});
    return (
      le.each(e.match(ce) || [], function (e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  function i(e, n, r, i) {
    if (le.acceptData(e)) {
      var o,
        a,
        s = le.expando,
        l = "string" == typeof n,
        u = e.nodeType,
        c = u ? le.cache : e,
        f = u ? e[s] : e[s] && s;
      if ((f && c[f] && (i || c[f].data)) || !l || r !== t)
        return (
          f || (u ? (e[s] = f = Z.pop() || le.guid++) : (f = s)),
          c[f] || ((c[f] = {}), u || (c[f].toJSON = le.noop)),
          ("object" != typeof n && "function" != typeof n) ||
            (i
              ? (c[f] = le.extend(c[f], n))
              : (c[f].data = le.extend(c[f].data, n))),
          (o = c[f]),
          i || (o.data || (o.data = {}), (o = o.data)),
          r !== t && (o[le.camelCase(n)] = r),
          l ? null == (a = o[n]) && (a = o[le.camelCase(n)]) : (a = o),
          a
        );
    }
  }
  function o(e, t, n) {
    if (le.acceptData(e)) {
      var r,
        i,
        o,
        a = e.nodeType,
        l = a ? le.cache : e,
        u = a ? e[le.expando] : le.expando;
      if (l[u]) {
        if (t && (o = n ? l[u] : l[u].data)) {
          le.isArray(t)
            ? (t = t.concat(le.map(t, le.camelCase)))
            : t in o
            ? (t = [t])
            : ((t = le.camelCase(t)), (t = t in o ? [t] : t.split(" ")));
          for (r = 0, i = t.length; r < i; r++) delete o[t[r]];
          if (!(n ? s : le.isEmptyObject)(o)) return;
        }
        (n || (delete l[u].data, s(l[u]))) &&
          (a
            ? le.cleanData([e], !0)
            : le.support.deleteExpando || l != l.window
            ? delete l[u]
            : (l[u] = null));
      }
    }
  }
  function a(e, n, r) {
    if (r === t && 1 === e.nodeType) {
      var i = "data-" + n.replace(Ee, "-$1").toLowerCase();
      if ("string" == typeof (r = e.getAttribute(i))) {
        try {
          r =
            "true" === r ||
            ("false" !== r &&
              ("null" === r
                ? null
                : +r + "" === r
                ? +r
                : ke.test(r)
                ? le.parseJSON(r)
                : r));
        } catch (e) {}
        le.data(e, n, r);
      } else r = t;
    }
    return r;
  }
  function s(e) {
    var t;
    for (t in e)
      if (("data" !== t || !le.isEmptyObject(e[t])) && "toJSON" !== t)
        return !1;
    return !0;
  }
  function l() {
    return !0;
  }
  function u() {
    return !1;
  }
  function c(e, t) {
    do {
      e = e[t];
    } while (e && 1 !== e.nodeType);
    return e;
  }
  function f(e, t, n) {
    if (((t = t || 0), le.isFunction(t)))
      return le.grep(e, function (e, r) {
        return !!t.call(e, r, e) === n;
      });
    if (t.nodeType)
      return le.grep(e, function (e) {
        return (e === t) === n;
      });
    if ("string" == typeof t) {
      var r = le.grep(e, function (e) {
        return 1 === e.nodeType;
      });
      if (Ie.test(t)) return le.filter(t, r, !n);
      t = le.filter(t, r);
    }
    return le.grep(e, function (e) {
      return le.inArray(e, t) >= 0 === n;
    });
  }
  function p(e) {
    var t = Ue.split("|"),
      n = e.createDocumentFragment();
    if (n.createElement) for (; t.length; ) n.createElement(t.pop());
    return n;
  }
  function d(e, t) {
    return (
      e.getElementsByTagName(t)[0] ||
      e.appendChild(e.ownerDocument.createElement(t))
    );
  }
  function h(e) {
    var t = e.getAttributeNode("type");
    return (e.type = (t && t.specified) + "/" + e.type), e;
  }
  function m(e) {
    var t = it.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function g(e, t) {
    for (var n, r = 0; null != (n = e[r]); r++)
      le._data(n, "globalEval", !t || le._data(t[r], "globalEval"));
  }
  function y(e, t) {
    if (1 === t.nodeType && le.hasData(e)) {
      var n,
        r,
        i,
        o = le._data(e),
        a = le._data(t, o),
        s = o.events;
      if (s) {
        delete a.handle, (a.events = {});
        for (n in s)
          for (r = 0, i = s[n].length; r < i; r++) le.event.add(t, n, s[n][r]);
      }
      a.data && (a.data = le.extend({}, a.data));
    }
  }
  function v(e, t) {
    var n, r, i;
    if (1 === t.nodeType) {
      if (
        ((n = t.nodeName.toLowerCase()),
        !le.support.noCloneEvent && t[le.expando])
      ) {
        i = le._data(t);
        for (r in i.events) le.removeEvent(t, r, i.handle);
        t.removeAttribute(le.expando);
      }
      "script" === n && t.text !== e.text
        ? ((h(t).text = e.text), m(t))
        : "object" === n
        ? (t.parentNode && (t.outerHTML = e.outerHTML),
          le.support.html5Clone &&
            e.innerHTML &&
            !le.trim(t.innerHTML) &&
            (t.innerHTML = e.innerHTML))
        : "input" === n && tt.test(e.type)
        ? ((t.defaultChecked = t.checked = e.checked),
          t.value !== e.value && (t.value = e.value))
        : "option" === n
        ? (t.defaultSelected = t.selected = e.defaultSelected)
        : ("input" !== n && "textarea" !== n) ||
          (t.defaultValue = e.defaultValue);
    }
  }
  function b(e, n) {
    var r,
      i,
      o = 0,
      a =
        typeof e.getElementsByTagName !== V
          ? e.getElementsByTagName(n || "*")
          : typeof e.querySelectorAll !== V
          ? e.querySelectorAll(n || "*")
          : t;
    if (!a)
      for (a = [], r = e.childNodes || e; null != (i = r[o]); o++)
        !n || le.nodeName(i, n) ? a.push(i) : le.merge(a, b(i, n));
    return n === t || (n && le.nodeName(e, n)) ? le.merge([e], a) : a;
  }
  function x(e) {
    tt.test(e.type) && (e.defaultChecked = e.checked);
  }
  function T(e, t) {
    if (t in e) return t;
    for (
      var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = kt.length;
      i--;

    )
      if ((t = kt[i] + n) in e) return t;
    return r;
  }
  function w(e, t) {
    return (
      (e = t || e),
      "none" === le.css(e, "display") || !le.contains(e.ownerDocument, e)
    );
  }
  function C(e, t) {
    for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)
      (r = e[a]),
        r.style &&
          ((o[a] = le._data(r, "olddisplay")),
          (n = r.style.display),
          t
            ? (o[a] || "none" !== n || (r.style.display = ""),
              "" === r.style.display &&
                w(r) &&
                (o[a] = le._data(r, "olddisplay", S(r.nodeName))))
            : o[a] ||
              ((i = w(r)),
              ((n && "none" !== n) || !i) &&
                le._data(r, "olddisplay", i ? n : le.css(r, "display"))));
    for (a = 0; a < s; a++)
      (r = e[a]),
        r.style &&
          ((t && "none" !== r.style.display && "" !== r.style.display) ||
            (r.style.display = t ? o[a] || "" : "none"));
    return e;
  }
  function k(e, t, n) {
    var r = yt.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }
  function E(e, t, n, r, i) {
    for (
      var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        a = 0;
      o < 4;
      o += 2
    )
      "margin" === n && (a += le.css(e, n + Ct[o], !0, i)),
        r
          ? ("content" === n && (a -= le.css(e, "padding" + Ct[o], !0, i)),
            "margin" !== n &&
              (a -= le.css(e, "border" + Ct[o] + "Width", !0, i)))
          : ((a += le.css(e, "padding" + Ct[o], !0, i)),
            "padding" !== n &&
              (a += le.css(e, "border" + Ct[o] + "Width", !0, i)));
    return a;
  }
  function N(e, t, n) {
    var r = !0,
      i = "width" === t ? e.offsetWidth : e.offsetHeight,
      o = ct(e),
      a =
        le.support.boxSizing && "border-box" === le.css(e, "boxSizing", !1, o);
    if (i <= 0 || null == i) {
      if (
        ((i = ft(e, t, o)),
        (i < 0 || null == i) && (i = e.style[t]),
        vt.test(i))
      )
        return i;
      (r = a && (le.support.boxSizingReliable || i === e.style[t])),
        (i = parseFloat(i) || 0);
    }
    return i + E(e, t, n || (a ? "border" : "content"), r, o) + "px";
  }
  function S(e) {
    var t = Y,
      n = xt[e];
    return (
      n ||
        ((n = A(e, t)),
        ("none" !== n && n) ||
          ((ut = (
            ut ||
            le("<iframe frameborder='0' width='0' height='0'/>").css(
              "cssText",
              "display:block !important"
            )
          ).appendTo(t.documentElement)),
          (t = (ut[0].contentWindow || ut[0].contentDocument).document),
          t.write("<!doctype html><html><body>"),
          t.close(),
          (n = A(e, t)),
          ut.detach()),
        (xt[e] = n)),
      n
    );
  }
  function A(e, t) {
    var n = le(t.createElement(e)).appendTo(t.body),
      r = le.css(n[0], "display");
    return n.remove(), r;
  }
  function D(e, t, n, r) {
    var i;
    if (le.isArray(t))
      le.each(t, function (t, i) {
        n || Nt.test(e)
          ? r(e, i)
          : D(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
      });
    else if (n || "object" !== le.type(t)) r(e, t);
    else for (i in t) D(e + "[" + i + "]", t[i], n, r);
  }
  function j(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var r,
        i = 0,
        o = t.toLowerCase().match(ce) || [];
      if (le.isFunction(n))
        for (; (r = o[i++]); )
          "+" === r[0]
            ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function $(e, t, n, r) {
    function i(s) {
      var l;
      return (
        (o[s] = !0),
        le.each(e[s] || [], function (e, s) {
          var u = s(t, n, r);
          return "string" != typeof u || a || o[u]
            ? a
              ? !(l = u)
              : void 0
            : (t.dataTypes.unshift(u), i(u), !1);
        }),
        l
      );
    }
    var o = {},
      a = e === It;
    return i(t.dataTypes[0]) || (!o["*"] && i("*"));
  }
  function L(e, n) {
    var r,
      i,
      o = le.ajaxSettings.flatOptions || {};
    for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
    return r && le.extend(!0, e, r), e;
  }
  function H(e, n, r) {
    var i,
      o,
      a,
      s,
      l = e.contents,
      u = e.dataTypes,
      c = e.responseFields;
    for (s in c) s in r && (n[c[s]] = r[s]);
    for (; "*" === u[0]; )
      u.shift(),
        o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
    if (o)
      for (s in l)
        if (l[s] && l[s].test(o)) {
          u.unshift(s);
          break;
        }
    if (u[0] in r) a = u[0];
    else {
      for (s in r) {
        if (!u[0] || e.converters[s + " " + u[0]]) {
          a = s;
          break;
        }
        i || (i = s);
      }
      a = a || i;
    }
    if (a) return a !== u[0] && u.unshift(a), r[a];
  }
  function F(e, t) {
    var n,
      r,
      i,
      o,
      a = {},
      s = 0,
      l = e.dataTypes.slice(),
      u = l[0];
    if ((e.dataFilter && (t = e.dataFilter(t, e.dataType)), l[1]))
      for (i in e.converters) a[i.toLowerCase()] = e.converters[i];
    for (; (r = l[++s]); )
      if ("*" !== r) {
        if ("*" !== u && u !== r) {
          if (!(i = a[u + " " + r] || a["* " + r]))
            for (n in a)
              if (
                ((o = n.split(" ")),
                o[1] === r && (i = a[u + " " + o[0]] || a["* " + o[0]]))
              ) {
                !0 === i
                  ? (i = a[n])
                  : !0 !== a[n] && ((r = o[0]), l.splice(s--, 0, r));
                break;
              }
          if (!0 !== i)
            if (i && e["throws"]) t = i(t);
            else
              try {
                t = i(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: i ? e : "No conversion from " + u + " to " + r,
                };
              }
        }
        u = r;
      }
    return { state: "success", data: t };
  }
  function M() {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  }
  function q() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}
  }
  function O() {
    return (
      setTimeout(function () {
        Jt = t;
      }),
      (Jt = le.now())
    );
  }
  function _(e, t) {
    le.each(t, function (t, n) {
      for (
        var r = (rn[t] || []).concat(rn["*"]), i = 0, o = r.length;
        i < o;
        i++
      )
        if (r[i].call(e, t, n)) return;
    });
  }
  function B(e, t, n) {
    var r,
      i,
      o = 0,
      a = nn.length,
      s = le.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (i) return !1;
        for (
          var t = Jt || O(),
            n = Math.max(0, u.startTime + u.duration - t),
            r = n / u.duration || 0,
            o = 1 - r,
            a = 0,
            l = u.tweens.length;
          a < l;
          a++
        )
          u.tweens[a].run(o);
        return (
          s.notifyWith(e, [u, o, n]),
          o < 1 && l ? n : (s.resolveWith(e, [u]), !1)
        );
      },
      u = s.promise({
        elem: e,
        props: le.extend({}, t),
        opts: le.extend(!0, { specialEasing: {} }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Jt || O(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = le.Tween(
            e,
            u.opts,
            t,
            n,
            u.opts.specialEasing[t] || u.opts.easing
          );
          return u.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0,
            r = t ? u.tweens.length : 0;
          if (i) return this;
          for (i = !0; n < r; n++) u.tweens[n].run(1);
          return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this;
        },
      }),
      c = u.props;
    for (P(c, u.opts.specialEasing); o < a; o++)
      if ((r = nn[o].call(u, e, c, u.opts))) return r;
    return (
      _(u, c),
      le.isFunction(u.opts.start) && u.opts.start.call(e, u),
      le.fx.timer(le.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
      u
        .progress(u.opts.progress)
        .done(u.opts.done, u.opts.complete)
        .fail(u.opts.fail)
        .always(u.opts.always)
    );
  }
  function P(e, t) {
    var n, r, i, o, a;
    for (i in e)
      if (
        ((r = le.camelCase(i)),
        (o = t[r]),
        (n = e[i]),
        le.isArray(n) && ((o = n[1]), (n = e[i] = n[0])),
        i !== r && ((e[r] = n), delete e[i]),
        (a = le.cssHooks[r]) && "expand" in a)
      ) {
        (n = a.expand(n)), delete e[r];
        for (i in n) i in e || ((e[i] = n[i]), (t[i] = o));
      } else t[r] = o;
  }
  function W(e, t, n) {
    var r,
      i,
      o,
      a,
      s,
      l,
      u,
      c,
      f,
      p = this,
      d = e.style,
      h = {},
      m = [],
      g = e.nodeType && w(e);
    n.queue ||
      ((c = le._queueHooks(e, "fx")),
      null == c.unqueued &&
        ((c.unqueued = 0),
        (f = c.empty.fire),
        (c.empty.fire = function () {
          c.unqueued || f();
        })),
      c.unqueued++,
      p.always(function () {
        p.always(function () {
          c.unqueued--, le.queue(e, "fx").length || c.empty.fire();
        });
      })),
      1 === e.nodeType &&
        ("height" in t || "width" in t) &&
        ((n.overflow = [d.overflow, d.overflowX, d.overflowY]),
        "inline" === le.css(e, "display") &&
          "none" === le.css(e, "float") &&
          (le.support.inlineBlockNeedsLayout && "inline" !== S(e.nodeName)
            ? (d.zoom = 1)
            : (d.display = "inline-block"))),
      n.overflow &&
        ((d.overflow = "hidden"),
        le.support.shrinkWrapBlocks ||
          p.always(function () {
            (d.overflow = n.overflow[0]),
              (d.overflowX = n.overflow[1]),
              (d.overflowY = n.overflow[2]);
          }));
    for (i in t)
      if (((a = t[i]), Zt.exec(a))) {
        if (
          (delete t[i], (l = l || "toggle" === a), a === (g ? "hide" : "show"))
        )
          continue;
        m.push(i);
      }
    if ((o = m.length)) {
      (s = le._data(e, "fxshow") || le._data(e, "fxshow", {})),
        "hidden" in s && (g = s.hidden),
        l && (s.hidden = !g),
        g
          ? le(e).show()
          : p.done(function () {
              le(e).hide();
            }),
        p.done(function () {
          var t;
          le._removeData(e, "fxshow");
          for (t in h) le.style(e, t, h[t]);
        });
      for (i = 0; i < o; i++)
        (r = m[i]),
          (u = p.createTween(r, g ? s[r] : 0)),
          (h[r] = s[r] || le.style(e, r)),
          r in s ||
            ((s[r] = u.start),
            g &&
              ((u.end = u.start),
              (u.start = "width" === r || "height" === r ? 1 : 0)));
    }
  }
  function R(e, t, n, r, i) {
    return new R.prototype.init(e, t, n, r, i);
  }
  function I(e, t) {
    var n,
      r = { height: e },
      i = 0;
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      (n = Ct[i]), (r["margin" + n] = r["padding" + n] = e);
    return t && (r.opacity = r.width = e), r;
  }
  function z(e) {
    return le.isWindow(e)
      ? e
      : 9 === e.nodeType && (e.defaultView || e.parentWindow);
  }
  var X,
    U,
    V = typeof t,
    Y = e.document,
    G = e.location,
    Q = e.jQuery,
    J = e.$,
    K = {},
    Z = [],
    ee = "1.9.1",
    te = Z.concat,
    ne = Z.push,
    re = Z.slice,
    ie = Z.indexOf,
    oe = K.toString,
    ae = K.hasOwnProperty,
    se = ee.trim,
    le = function (e, t) {
      return new le.fn.init(e, t, U);
    },
    ue = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ce = /\S+/g,
    fe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    pe = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    he = /^[\],:{}\s]*$/,
    me = /(?:^|:|,)(?:\s*\[)+/g,
    ge = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    ye = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    ve = /^-ms-/,
    be = /-([\da-z])/gi,
    xe = function (e, t) {
      return t.toUpperCase();
    },
    Te = function (e) {
      (Y.addEventListener ||
        "load" === e.type ||
        "complete" === Y.readyState) &&
        (we(), le.ready());
    },
    we = function () {
      Y.addEventListener
        ? (Y.removeEventListener("DOMContentLoaded", Te, !1),
          e.removeEventListener("load", Te, !1))
        : (Y.detachEvent("onreadystatechange", Te),
          e.detachEvent("onload", Te));
    };
  (le.fn = le.prototype =
    {
      jquery: ee,
      constructor: le,
      init: function (e, n, r) {
        var i, o;
        if (!e) return this;
        if ("string" == typeof e) {
          if (
            !(i =
              "<" === e.charAt(0) &&
              ">" === e.charAt(e.length - 1) &&
              e.length >= 3
                ? [null, e, null]
                : pe.exec(e)) ||
            (!i[1] && n)
          )
            return !n || n.jquery
              ? (n || r).find(e)
              : this.constructor(n).find(e);
          if (i[1]) {
            if (
              ((n = n instanceof le ? n[0] : n),
              le.merge(
                this,
                le.parseHTML(
                  i[1],
                  n && n.nodeType ? n.ownerDocument || n : Y,
                  !0
                )
              ),
              de.test(i[1]) && le.isPlainObject(n))
            )
              for (i in n)
                le.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
            return this;
          }
          if ((o = Y.getElementById(i[2])) && o.parentNode) {
            if (o.id !== i[2]) return r.find(e);
            (this.length = 1), (this[0] = o);
          }
          return (this.context = Y), (this.selector = e), this;
        }
        return e.nodeType
          ? ((this.context = this[0] = e), (this.length = 1), this)
          : le.isFunction(e)
          ? r.ready(e)
          : (e.selector !== t &&
              ((this.selector = e.selector), (this.context = e.context)),
            le.makeArray(e, this));
      },
      selector: "",
      length: 0,
      size: function () {
        return this.length;
      },
      toArray: function () {
        return re.call(this);
      },
      get: function (e) {
        return null == e
          ? this.toArray()
          : e < 0
          ? this[this.length + e]
          : this[e];
      },
      pushStack: function (e) {
        var t = le.merge(this.constructor(), e);
        return (t.prevObject = this), (t.context = this.context), t;
      },
      each: function (e, t) {
        return le.each(this, e, t);
      },
      ready: function (e) {
        return le.ready.promise().done(e), this;
      },
      slice: function () {
        return this.pushStack(re.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      map: function (e) {
        return this.pushStack(
          le.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: ne,
      sort: [].sort,
      splice: [].splice,
    }),
    (le.fn.init.prototype = le.fn),
    (le.extend = le.fn.extend =
      function () {
        var e,
          n,
          r,
          i,
          o,
          a,
          s = arguments[0] || {},
          l = 1,
          u = arguments.length,
          c = !1;
        for (
          "boolean" == typeof s && ((c = s), (s = arguments[1] || {}), (l = 2)),
            "object" == typeof s || le.isFunction(s) || (s = {}),
            u === l && ((s = this), --l);
          l < u;
          l++
        )
          if (null != (o = arguments[l]))
            for (i in o)
              (e = s[i]),
                (r = o[i]),
                s !== r &&
                  (c && r && (le.isPlainObject(r) || (n = le.isArray(r)))
                    ? (n
                        ? ((n = !1), (a = e && le.isArray(e) ? e : []))
                        : (a = e && le.isPlainObject(e) ? e : {}),
                      (s[i] = le.extend(c, a, r)))
                    : r !== t && (s[i] = r));
        return s;
      }),
    le.extend({
      noConflict: function (t) {
        return (
          e.$ === le && (e.$ = J), t && e.jQuery === le && (e.jQuery = Q), le
        );
      },
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? le.readyWait++ : le.ready(!0);
      },
      ready: function (e) {
        if (!0 === e ? !--le.readyWait : !le.isReady) {
          if (!Y.body) return setTimeout(le.ready);
          (le.isReady = !0),
            (!0 !== e && --le.readyWait > 0) ||
              (X.resolveWith(Y, [le]),
              le.fn.trigger && le(Y).trigger("ready").off("ready"));
        }
      },
      isFunction: function (e) {
        return "function" === le.type(e);
      },
      isArray:
        Array.isArray ||
        function (e) {
          return "array" === le.type(e);
        },
      isWindow: function (e) {
        return null != e && e == e.window;
      },
      isNumeric: function (e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
      },
      type: function (e) {
        return null == e
          ? String(e)
          : "object" == typeof e || "function" == typeof e
          ? K[oe.call(e)] || "object"
          : typeof e;
      },
      isPlainObject: function (e) {
        if (!e || "object" !== le.type(e) || e.nodeType || le.isWindow(e))
          return !1;
        try {
          if (
            e.constructor &&
            !ae.call(e, "constructor") &&
            !ae.call(e.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (e) {
          return !1;
        }
        var n;
        for (n in e);
        return n === t || ae.call(e, n);
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      error: function (e) {
        throw new Error(e);
      },
      parseHTML: function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && ((n = t), (t = !1)), (t = t || Y);
        var r = de.exec(e),
          i = !n && [];
        return r
          ? [t.createElement(r[1])]
          : ((r = le.buildFragment([e], t, i)),
            i && le(i).remove(),
            le.merge([], r.childNodes));
      },
      parseJSON: function (t) {
        return e.JSON && e.JSON.parse
          ? e.JSON.parse(t)
          : null === t
          ? t
          : "string" == typeof t &&
            (t = le.trim(t)) &&
            he.test(t.replace(ge, "@").replace(ye, "]").replace(me, ""))
          ? new Function("return " + t)()
          : void le.error("Invalid JSON: " + t);
      },
      parseXML: function (n) {
        var r, i;
        if (!n || "string" != typeof n) return null;
        try {
          e.DOMParser
            ? ((i = new DOMParser()), (r = i.parseFromString(n, "text/xml")))
            : ((r = new ActiveXObject("Microsoft.XMLDOM")),
              (r.async = "false"),
              r.loadXML(n));
        } catch (e) {
          r = t;
        }
        return (
          (r &&
            r.documentElement &&
            !r.getElementsByTagName("parsererror").length) ||
            le.error("Invalid XML: " + n),
          r
        );
      },
      noop: function () {},
      globalEval: function (t) {
        t &&
          le.trim(t) &&
          (
            e.execScript ||
            function (t) {
              e.eval.call(e, t);
            }
          )(t);
      },
      camelCase: function (e) {
        return e.replace(ve, "ms-").replace(be, xe);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t, r) {
        var i = 0,
          o = e.length,
          a = n(e);
        if (r) {
          if (a) for (; i < o && !1 !== t.apply(e[i], r); i++);
          else for (i in e) if (!1 === t.apply(e[i], r)) break;
        } else if (a) for (; i < o && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      trim:
        se && !se.call("\ufeff\xa0")
          ? function (e) {
              return null == e ? "" : se.call(e);
            }
          : function (e) {
              return null == e ? "" : (e + "").replace(fe, "");
            },
      makeArray: function (e, t) {
        var r = t || [];
        return (
          null != e &&
            (n(Object(e))
              ? le.merge(r, "string" == typeof e ? [e] : e)
              : ne.call(r, e)),
          r
        );
      },
      inArray: function (e, t, n) {
        var r;
        if (t) {
          if (ie) return ie.call(t, e, n);
          for (
            r = t.length, n = n ? (n < 0 ? Math.max(0, r + n) : n) : 0;
            n < r;
            n++
          )
            if (n in t && t[n] === e) return n;
        }
        return -1;
      },
      merge: function (e, n) {
        var r = n.length,
          i = e.length,
          o = 0;
        if ("number" == typeof r) for (; o < r; o++) e[i++] = n[o];
        else for (; n[o] !== t; ) e[i++] = n[o++];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        var r,
          i = [],
          o = 0,
          a = e.length;
        for (n = !!n; o < a; o++) (r = !!t(e[o], o)), n !== r && i.push(e[o]);
        return i;
      },
      map: function (e, t, r) {
        var i,
          o = 0,
          a = e.length,
          s = n(e),
          l = [];
        if (s)
          for (; o < a; o++) null != (i = t(e[o], o, r)) && (l[l.length] = i);
        else for (o in e) null != (i = t(e[o], o, r)) && (l[l.length] = i);
        return te.apply([], l);
      },
      guid: 1,
      proxy: function (e, n) {
        var r, i, o;
        return (
          "string" == typeof n && ((o = e[n]), (n = e), (e = o)),
          le.isFunction(e)
            ? ((r = re.call(arguments, 2)),
              (i = function () {
                return e.apply(n || this, r.concat(re.call(arguments)));
              }),
              (i.guid = e.guid = e.guid || le.guid++),
              i)
            : t
        );
      },
      access: function (e, n, r, i, o, a, s) {
        var l = 0,
          u = e.length,
          c = null == r;
        if ("object" === le.type(r)) {
          o = !0;
          for (l in r) le.access(e, n, l, r[l], !0, a, s);
        } else if (
          i !== t &&
          ((o = !0),
          le.isFunction(i) || (s = !0),
          c &&
            (s
              ? (n.call(e, i), (n = null))
              : ((c = n),
                (n = function (e, t, n) {
                  return c.call(le(e), n);
                }))),
          n)
        )
          for (; l < u; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
        return o ? e : c ? n.call(e) : u ? n(e[0], r) : a;
      },
      now: function () {
        return new Date().getTime();
      },
    }),
    (le.ready.promise = function (t) {
      if (!X)
        if (((X = le.Deferred()), "complete" === Y.readyState))
          setTimeout(le.ready);
        else if (Y.addEventListener)
          Y.addEventListener("DOMContentLoaded", Te, !1),
            e.addEventListener("load", Te, !1);
        else {
          Y.attachEvent("onreadystatechange", Te), e.attachEvent("onload", Te);
          var n = !1;
          try {
            n = null == e.frameElement && Y.documentElement;
          } catch (e) {}
          n &&
            n.doScroll &&
            (function e() {
              if (!le.isReady) {
                try {
                  n.doScroll("left");
                } catch (t) {
                  return setTimeout(e, 50);
                }
                we(), le.ready();
              }
            })();
        }
      return X.promise(t);
    }),
    le.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (e, t) {
        K["[object " + t + "]"] = t.toLowerCase();
      }
    ),
    (U = le(Y));
  var Ce = {};
  (le.Callbacks = function (e) {
    e = "string" == typeof e ? Ce[e] || r(e) : le.extend({}, e);
    var n,
      i,
      o,
      a,
      s,
      l,
      u = [],
      c = !e.once && [],
      f = function (t) {
        for (
          i = e.memory && t, o = !0, s = l || 0, l = 0, a = u.length, n = !0;
          u && s < a;
          s++
        )
          if (!1 === u[s].apply(t[0], t[1]) && e.stopOnFalse) {
            i = !1;
            break;
          }
        (n = !1),
          u && (c ? c.length && f(c.shift()) : i ? (u = []) : p.disable());
      },
      p = {
        add: function () {
          if (u) {
            var t = u.length;
            !(function t(n) {
              le.each(n, function (n, r) {
                var i = le.type(r);
                "function" === i
                  ? (e.unique && p.has(r)) || u.push(r)
                  : r && r.length && "string" !== i && t(r);
              });
            })(arguments),
              n ? (a = u.length) : i && ((l = t), f(i));
          }
          return this;
        },
        remove: function () {
          return (
            u &&
              le.each(arguments, function (e, t) {
                for (var r; (r = le.inArray(t, u, r)) > -1; )
                  u.splice(r, 1), n && (r <= a && a--, r <= s && s--);
              }),
            this
          );
        },
        has: function (e) {
          return e ? le.inArray(e, u) > -1 : !(!u || !u.length);
        },
        empty: function () {
          return (u = []), this;
        },
        disable: function () {
          return (u = c = i = t), this;
        },
        disabled: function () {
          return !u;
        },
        lock: function () {
          return (c = t), i || p.disable(), this;
        },
        locked: function () {
          return !c;
        },
        fireWith: function (e, t) {
          return (
            (t = t || []),
            (t = [e, t.slice ? t.slice() : t]),
            !u || (o && !c) || (n ? c.push(t) : f(t)),
            this
          );
        },
        fire: function () {
          return p.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return p;
  }),
    le.extend({
      Deferred: function (e) {
        var t = [
            ["resolve", "done", le.Callbacks("once memory"), "resolved"],
            ["reject", "fail", le.Callbacks("once memory"), "rejected"],
            ["notify", "progress", le.Callbacks("memory")],
          ],
          n = "pending",
          r = {
            state: function () {
              return n;
            },
            always: function () {
              return i.done(arguments).fail(arguments), this;
            },
            then: function () {
              var e = arguments;
              return le
                .Deferred(function (n) {
                  le.each(t, function (t, o) {
                    var a = o[0],
                      s = le.isFunction(e[t]) && e[t];
                    i[o[1]](function () {
                      var e = s && s.apply(this, arguments);
                      e && le.isFunction(e.promise)
                        ? e
                            .promise()
                            .done(n.resolve)
                            .fail(n.reject)
                            .progress(n.notify)
                        : n[a + "With"](
                            this === r ? n.promise() : this,
                            s ? [e] : arguments
                          );
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? le.extend(e, r) : r;
            },
          },
          i = {};
        return (
          (r.pipe = r.then),
          le.each(t, function (e, o) {
            var a = o[2],
              s = o[3];
            (r[o[1]] = a.add),
              s &&
                a.add(
                  function () {
                    n = s;
                  },
                  t[1 ^ e][2].disable,
                  t[2][2].lock
                ),
              (i[o[0]] = function () {
                return i[o[0] + "With"](this === i ? r : this, arguments), this;
              }),
              (i[o[0] + "With"] = a.fireWith);
          }),
          r.promise(i),
          e && e.call(i, i),
          i
        );
      },
      when: function (e) {
        var t,
          n,
          r,
          i = 0,
          o = re.call(arguments),
          a = o.length,
          s = 1 !== a || (e && le.isFunction(e.promise)) ? a : 0,
          l = 1 === s ? e : le.Deferred(),
          u = function (e, n, r) {
            return function (i) {
              (n[e] = this),
                (r[e] = arguments.length > 1 ? re.call(arguments) : i),
                r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r);
            };
          };
        if (a > 1)
          for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++)
            o[i] && le.isFunction(o[i].promise)
              ? o[i]
                  .promise()
                  .done(u(i, r, o))
                  .fail(l.reject)
                  .progress(u(i, n, t))
              : --s;
        return s || l.resolveWith(r, o), l.promise();
      },
    }),
    (le.support = (function () {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        l,
        u,
        c,
        f = Y.createElement("div");
      if (
        (f.setAttribute("className", "t"),
        (f.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (n = f.getElementsByTagName("*")),
        (r = f.getElementsByTagName("a")[0]),
        !n || !r || !n.length)
      )
        return {};
      (o = Y.createElement("select")),
        (s = o.appendChild(Y.createElement("option"))),
        (i = f.getElementsByTagName("input")[0]),
        (r.style.cssText = "top:1px;float:left;opacity:.5"),
        (t = {
          getSetAttribute: "t" !== f.className,
          leadingWhitespace: 3 === f.firstChild.nodeType,
          tbody: !f.getElementsByTagName("tbody").length,
          htmlSerialize: !!f.getElementsByTagName("link").length,
          style: /top/.test(r.getAttribute("style")),
          hrefNormalized: "/a" === r.getAttribute("href"),
          opacity: /^0.5/.test(r.style.opacity),
          cssFloat: !!r.style.cssFloat,
          checkOn: !!i.value,
          optSelected: s.selected,
          enctype: !!Y.createElement("form").enctype,
          html5Clone:
            "<:nav></:nav>" !== Y.createElement("nav").cloneNode(!0).outerHTML,
          boxModel: "CSS1Compat" === Y.compatMode,
          deleteExpando: !0,
          noCloneEvent: !0,
          inlineBlockNeedsLayout: !1,
          shrinkWrapBlocks: !1,
          reliableMarginRight: !0,
          boxSizingReliable: !0,
          pixelPosition: !1,
        }),
        (i.checked = !0),
        (t.noCloneChecked = i.cloneNode(!0).checked),
        (o.disabled = !0),
        (t.optDisabled = !s.disabled);
      try {
        delete f.test;
      } catch (e) {
        t.deleteExpando = !1;
      }
      (i = Y.createElement("input")),
        i.setAttribute("value", ""),
        (t.input = "" === i.getAttribute("value")),
        (i.value = "t"),
        i.setAttribute("type", "radio"),
        (t.radioValue = "t" === i.value),
        i.setAttribute("checked", "t"),
        i.setAttribute("name", "t"),
        (a = Y.createDocumentFragment()),
        a.appendChild(i),
        (t.appendChecked = i.checked),
        (t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked),
        f.attachEvent &&
          (f.attachEvent("onclick", function () {
            t.noCloneEvent = !1;
          }),
          f.cloneNode(!0).click());
      for (c in { submit: !0, change: !0, focusin: !0 })
        f.setAttribute((l = "on" + c), "t"),
          (t[c + "Bubbles"] = l in e || !1 === f.attributes[l].expando);
      return (
        (f.style.backgroundClip = "content-box"),
        (f.cloneNode(!0).style.backgroundClip = ""),
        (t.clearCloneStyle = "content-box" === f.style.backgroundClip),
        le(function () {
          var n,
            r,
            i,
            o =
              "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
            a = Y.getElementsByTagName("body")[0];
          a &&
            ((n = Y.createElement("div")),
            (n.style.cssText =
              "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"),
            a.appendChild(n).appendChild(f),
            (f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            (i = f.getElementsByTagName("td")),
            (i[0].style.cssText = "padding:0;margin:0;border:0;display:none"),
            (u = 0 === i[0].offsetHeight),
            (i[0].style.display = ""),
            (i[1].style.display = "none"),
            (t.reliableHiddenOffsets = u && 0 === i[0].offsetHeight),
            (f.innerHTML = ""),
            (f.style.cssText =
              "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;"),
            (t.boxSizing = 4 === f.offsetWidth),
            (t.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop),
            e.getComputedStyle &&
              ((t.pixelPosition =
                "1%" !== (e.getComputedStyle(f, null) || {}).top),
              (t.boxSizingReliable =
                "4px" ===
                (e.getComputedStyle(f, null) || { width: "4px" }).width),
              (r = f.appendChild(Y.createElement("div"))),
              (r.style.cssText = f.style.cssText = o),
              (r.style.marginRight = r.style.width = "0"),
              (f.style.width = "1px"),
              (t.reliableMarginRight = !parseFloat(
                (e.getComputedStyle(r, null) || {}).marginRight
              ))),
            typeof f.style.zoom !== V &&
              ((f.innerHTML = ""),
              (f.style.cssText =
                o + "width:1px;padding:1px;display:inline;zoom:1"),
              (t.inlineBlockNeedsLayout = 3 === f.offsetWidth),
              (f.style.display = "block"),
              (f.innerHTML = "<div></div>"),
              (f.firstChild.style.width = "5px"),
              (t.shrinkWrapBlocks = 3 !== f.offsetWidth),
              t.inlineBlockNeedsLayout && (a.style.zoom = 1)),
            a.removeChild(n),
            (n = f = i = r = null));
        }),
        (n = o = a = s = r = i = null),
        t
      );
    })());
  var ke = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    Ee = /([A-Z])/g;
  le.extend({
    cache: {},
    expando: "jQuery" + (ee + Math.random()).replace(/\D/g, ""),
    noData: {
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: !0,
    },
    hasData: function (e) {
      return (
        !!(e = e.nodeType ? le.cache[e[le.expando]] : e[le.expando]) && !s(e)
      );
    },
    data: function (e, t, n) {
      return i(e, t, n);
    },
    removeData: function (e, t) {
      return o(e, t);
    },
    _data: function (e, t, n) {
      return i(e, t, n, !0);
    },
    _removeData: function (e, t) {
      return o(e, t, !0);
    },
    acceptData: function (e) {
      if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
      var t = e.nodeName && le.noData[e.nodeName.toLowerCase()];
      return !t || (!0 !== t && e.getAttribute("classid") === t);
    },
  }),
    le.fn.extend({
      data: function (e, n) {
        var r,
          i,
          o = this[0],
          s = 0,
          l = null;
        if (e === t) {
          if (
            this.length &&
            ((l = le.data(o)), 1 === o.nodeType && !le._data(o, "parsedAttrs"))
          ) {
            for (r = o.attributes; s < r.length; s++)
              (i = r[s].name),
                i.indexOf("data-") ||
                  ((i = le.camelCase(i.slice(5))), a(o, i, l[i]));
            le._data(o, "parsedAttrs", !0);
          }
          return l;
        }
        return "object" == typeof e
          ? this.each(function () {
              le.data(this, e);
            })
          : le.access(
              this,
              function (n) {
                if (n === t) return o ? a(o, e, le.data(o, e)) : null;
                this.each(function () {
                  le.data(this, e, n);
                });
              },
              null,
              n,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          le.removeData(this, e);
        });
      },
    }),
    le.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = le._data(e, t)),
            n &&
              (!r || le.isArray(n)
                ? (r = le._data(e, t, le.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = le.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = le._queueHooks(e, t),
          a = function () {
            le.dequeue(e, t);
          };
        "inprogress" === i && ((i = n.shift()), r--),
          (o.cur = i),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          le._data(e, n) ||
          le._data(e, n, {
            empty: le.Callbacks("once memory").add(function () {
              le._removeData(e, t + "queue"), le._removeData(e, n);
            }),
          })
        );
      },
    }),
    le.fn.extend({
      queue: function (e, n) {
        var r = 2;
        return (
          "string" != typeof e && ((n = e), (e = "fx"), r--),
          arguments.length < r
            ? le.queue(this[0], e)
            : n === t
            ? this
            : this.each(function () {
                var t = le.queue(this, e, n);
                le._queueHooks(this, e),
                  "fx" === e && "inprogress" !== t[0] && le.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          le.dequeue(this, e);
        });
      },
      delay: function (e, t) {
        return (
          (e = le.fx ? le.fx.speeds[e] || e : e),
          (t = t || "fx"),
          this.queue(t, function (t, n) {
            var r = setTimeout(t, e);
            n.stop = function () {
              clearTimeout(r);
            };
          })
        );
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, n) {
        var r,
          i = 1,
          o = le.Deferred(),
          a = this,
          s = this.length,
          l = function () {
            --i || o.resolveWith(a, [a]);
          };
        for ("string" != typeof e && ((n = e), (e = t)), e = e || "fx"; s--; )
          (r = le._data(a[s], e + "queueHooks")) &&
            r.empty &&
            (i++, r.empty.add(l));
        return l(), o.promise(n);
      },
    });
  var Ne,
    Se,
    Ae = /[\t\r\n]/g,
    De = /\r/g,
    je = /^(?:input|select|textarea|button|object)$/i,
    $e = /^(?:a|area)$/i,
    Le =
      /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
    He = /^(?:checked|selected)$/i,
    Fe = le.support.getSetAttribute,
    Me = le.support.input;
  le.fn.extend({
    attr: function (e, t) {
      return le.access(this, le.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        le.removeAttr(this, e);
      });
    },
    prop: function (e, t) {
      return le.access(this, le.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return (
        (e = le.propFix[e] || e),
        this.each(function () {
          try {
            (this[e] = t), delete this[e];
          } catch (e) {}
        })
      );
    },
    addClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a = 0,
        s = this.length,
        l = "string" == typeof e && e;
      if (le.isFunction(e))
        return this.each(function (t) {
          le(this).addClass(e.call(this, t, this.className));
        });
      if (l)
        for (t = (e || "").match(ce) || []; a < s; a++)
          if (
            ((n = this[a]),
            (r =
              1 === n.nodeType &&
              (n.className ? (" " + n.className + " ").replace(Ae, " ") : " ")))
          ) {
            for (o = 0; (i = t[o++]); )
              r.indexOf(" " + i + " ") < 0 && (r += i + " ");
            n.className = le.trim(r);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a = 0,
        s = this.length,
        l = 0 === arguments.length || ("string" == typeof e && e);
      if (le.isFunction(e))
        return this.each(function (t) {
          le(this).removeClass(e.call(this, t, this.className));
        });
      if (l)
        for (t = (e || "").match(ce) || []; a < s; a++)
          if (
            ((n = this[a]),
            (r =
              1 === n.nodeType &&
              (n.className ? (" " + n.className + " ").replace(Ae, " ") : "")))
          ) {
            for (o = 0; (i = t[o++]); )
              for (; r.indexOf(" " + i + " ") >= 0; )
                r = r.replace(" " + i + " ", " ");
            n.className = e ? le.trim(r) : "";
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e,
        r = "boolean" == typeof t;
      return le.isFunction(e)
        ? this.each(function (n) {
            le(this).toggleClass(e.call(this, n, this.className, t), t);
          })
        : this.each(function () {
            if ("string" === n)
              for (
                var i, o = 0, a = le(this), s = t, l = e.match(ce) || [];
                (i = l[o++]);

              )
                (s = r ? s : !a.hasClass(i)),
                  a[s ? "addClass" : "removeClass"](i);
            else
              (n !== V && "boolean" !== n) ||
                (this.className &&
                  le._data(this, "__className__", this.className),
                (this.className =
                  this.className || !1 === e
                    ? ""
                    : le._data(this, "__className__") || ""));
          });
    },
    hasClass: function (e) {
      for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
        if (
          1 === this[n].nodeType &&
          (" " + this[n].className + " ").replace(Ae, " ").indexOf(t) >= 0
        )
          return !0;
      return !1;
    },
    val: function (e) {
      var n,
        r,
        i,
        o = this[0];
      {
        if (arguments.length)
          return (
            (i = le.isFunction(e)),
            this.each(function (n) {
              var o,
                a = le(this);
              1 === this.nodeType &&
                ((o = i ? e.call(this, n, a.val()) : e),
                null == o
                  ? (o = "")
                  : "number" == typeof o
                  ? (o += "")
                  : le.isArray(o) &&
                    (o = le.map(o, function (e) {
                      return null == e ? "" : e + "";
                    })),
                ((r =
                  le.valHooks[this.type] ||
                  le.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in r &&
                  r.set(this, o, "value") !== t) ||
                  (this.value = o));
            })
          );
        if (o)
          return (r =
            le.valHooks[o.type] || le.valHooks[o.nodeName.toLowerCase()]) &&
            "get" in r &&
            (n = r.get(o, "value")) !== t
            ? n
            : ((n = o.value),
              "string" == typeof n ? n.replace(De, "") : null == n ? "" : n);
      }
    },
  }),
    le.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = e.attributes.value;
            return !t || t.specified ? e.value : e.text;
          },
        },
        select: {
          get: function (e) {
            for (
              var t,
                n,
                r = e.options,
                i = e.selectedIndex,
                o = "select-one" === e.type || i < 0,
                a = o ? null : [],
                s = o ? i + 1 : r.length,
                l = i < 0 ? s : o ? i : 0;
              l < s;
              l++
            )
              if (
                ((n = r[l]),
                (n.selected || l === i) &&
                  (le.support.optDisabled
                    ? !n.disabled
                    : null === n.getAttribute("disabled")) &&
                  (!n.parentNode.disabled ||
                    !le.nodeName(n.parentNode, "optgroup")))
              ) {
                if (((t = le(n).val()), o)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            var n = le.makeArray(t);
            return (
              le(e)
                .find("option")
                .each(function () {
                  this.selected = le.inArray(le(this).val(), n) >= 0;
                }),
              n.length || (e.selectedIndex = -1),
              n
            );
          },
        },
      },
      attr: function (e, n, r) {
        var i,
          o,
          a,
          s = e.nodeType;
        if (e && 3 !== s && 8 !== s && 2 !== s)
          return typeof e.getAttribute === V
            ? le.prop(e, n, r)
            : ((o = 1 !== s || !le.isXMLDoc(e)),
              o &&
                ((n = n.toLowerCase()),
                (i = le.attrHooks[n] || (Le.test(n) ? Se : Ne))),
              r === t
                ? i && o && "get" in i && null !== (a = i.get(e, n))
                  ? a
                  : (typeof e.getAttribute !== V && (a = e.getAttribute(n)),
                    null == a ? t : a)
                : null !== r
                ? i && o && "set" in i && (a = i.set(e, r, n)) !== t
                  ? a
                  : (e.setAttribute(n, r + ""), r)
                : void le.removeAttr(e, n));
      },
      removeAttr: function (e, t) {
        var n,
          r,
          i = 0,
          o = t && t.match(ce);
        if (o && 1 === e.nodeType)
          for (; (n = o[i++]); )
            (r = le.propFix[n] || n),
              Le.test(n)
                ? !Fe && He.test(n)
                  ? (e[le.camelCase("default-" + n)] = e[r] = !1)
                  : (e[r] = !1)
                : le.attr(e, n, ""),
              e.removeAttribute(Fe ? n : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (
              !le.support.radioValue &&
              "radio" === t &&
              le.nodeName(e, "input")
            ) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      propFix: {
        tabindex: "tabIndex",
        readonly: "readOnly",
        for: "htmlFor",
        class: "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable",
      },
      prop: function (e, n, r) {
        var i,
          o,
          a,
          s = e.nodeType;
        if (e && 3 !== s && 8 !== s && 2 !== s)
          return (
            (a = 1 !== s || !le.isXMLDoc(e)),
            a && ((n = le.propFix[n] || n), (o = le.propHooks[n])),
            r !== t
              ? o && "set" in o && (i = o.set(e, r, n)) !== t
                ? i
                : (e[n] = r)
              : o && "get" in o && null !== (i = o.get(e, n))
              ? i
              : e[n]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var n = e.getAttributeNode("tabindex");
            return n && n.specified
              ? parseInt(n.value, 10)
              : je.test(e.nodeName) || ($e.test(e.nodeName) && e.href)
              ? 0
              : t;
          },
        },
      },
    }),
    (Se = {
      get: function (e, n) {
        var r = le.prop(e, n),
          i = "boolean" == typeof r && e.getAttribute(n),
          o =
            "boolean" == typeof r
              ? Me && Fe
                ? null != i
                : He.test(n)
                ? e[le.camelCase("default-" + n)]
                : !!i
              : e.getAttributeNode(n);
        return o && !1 !== o.value ? n.toLowerCase() : t;
      },
      set: function (e, t, n) {
        return (
          !1 === t
            ? le.removeAttr(e, n)
            : (Me && Fe) || !He.test(n)
            ? e.setAttribute((!Fe && le.propFix[n]) || n, n)
            : (e[le.camelCase("default-" + n)] = e[n] = !0),
          n
        );
      },
    }),
    (Me && Fe) ||
      (le.attrHooks.value = {
        get: function (e, n) {
          var r = e.getAttributeNode(n);
          return le.nodeName(e, "input")
            ? e.defaultValue
            : r && r.specified
            ? r.value
            : t;
        },
        set: function (e, t, n) {
          if (!le.nodeName(e, "input")) return Ne && Ne.set(e, t, n);
          e.defaultValue = t;
        },
      }),
    Fe ||
      ((Ne = le.valHooks.button =
        {
          get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r &&
              ("id" === n || "name" === n || "coords" === n
                ? "" !== r.value
                : r.specified)
              ? r.value
              : t;
          },
          set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return (
              i || e.setAttributeNode((i = e.ownerDocument.createAttribute(r))),
              (i.value = n += ""),
              "value" === r || n === e.getAttribute(r) ? n : t
            );
          },
        }),
      (le.attrHooks.contenteditable = {
        get: Ne.get,
        set: function (e, t, n) {
          Ne.set(e, "" !== t && t, n);
        },
      }),
      le.each(["width", "height"], function (e, t) {
        le.attrHooks[t] = le.extend(le.attrHooks[t], {
          set: function (e, n) {
            if ("" === n) return e.setAttribute(t, "auto"), n;
          },
        });
      })),
    le.support.hrefNormalized ||
      (le.each(["href", "src", "width", "height"], function (e, n) {
        le.attrHooks[n] = le.extend(le.attrHooks[n], {
          get: function (e) {
            var r = e.getAttribute(n, 2);
            return null == r ? t : r;
          },
        });
      }),
      le.each(["href", "src"], function (e, t) {
        le.propHooks[t] = {
          get: function (e) {
            return e.getAttribute(t, 4);
          },
        };
      })),
    le.support.style ||
      (le.attrHooks.style = {
        get: function (e) {
          return e.style.cssText || t;
        },
        set: function (e, t) {
          return (e.style.cssText = t + "");
        },
      }),
    le.support.optSelected ||
      (le.propHooks.selected = le.extend(le.propHooks.selected, {
        get: function (e) {
          var t = e.parentNode;
          return (
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
          );
        },
      })),
    le.support.enctype || (le.propFix.enctype = "encoding"),
    le.support.checkOn ||
      le.each(["radio", "checkbox"], function () {
        le.valHooks[this] = {
          get: function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          },
        };
      }),
    le.each(["radio", "checkbox"], function () {
      le.valHooks[this] = le.extend(le.valHooks[this], {
        set: function (e, t) {
          if (le.isArray(t))
            return (e.checked = le.inArray(le(e).val(), t) >= 0);
        },
      });
    });
  var qe = /^(?:input|select|textarea)$/i,
    Oe = /^key/,
    _e = /^(?:mouse|contextmenu)|click/,
    Be = /^(?:focusinfocus|focusoutblur)$/,
    Pe = /^([^.]*)(?:\.(.+)|)$/;
  (le.event = {
    global: {},
    add: function (e, n, r, i, o) {
      var a,
        s,
        l,
        u,
        c,
        f,
        p,
        d,
        h,
        m,
        g,
        y = le._data(e);
      if (y) {
        for (
          r.handler && ((u = r), (r = u.handler), (o = u.selector)),
            r.guid || (r.guid = le.guid++),
            (s = y.events) || (s = y.events = {}),
            (f = y.handle) ||
              ((f = y.handle =
                function (e) {
                  return typeof le === V || (e && le.event.triggered === e.type)
                    ? t
                    : le.event.dispatch.apply(f.elem, arguments);
                }),
              (f.elem = e)),
            n = (n || "").match(ce) || [""],
            l = n.length;
          l--;

        )
          (a = Pe.exec(n[l]) || []),
            (h = g = a[1]),
            (m = (a[2] || "").split(".").sort()),
            (c = le.event.special[h] || {}),
            (h = (o ? c.delegateType : c.bindType) || h),
            (c = le.event.special[h] || {}),
            (p = le.extend(
              {
                type: h,
                origType: g,
                data: i,
                handler: r,
                guid: r.guid,
                selector: o,
                needsContext: o && le.expr.match.needsContext.test(o),
                namespace: m.join("."),
              },
              u
            )),
            (d = s[h]) ||
              ((d = s[h] = []),
              (d.delegateCount = 0),
              (c.setup && !1 !== c.setup.call(e, i, m, f)) ||
                (e.addEventListener
                  ? e.addEventListener(h, f, !1)
                  : e.attachEvent && e.attachEvent("on" + h, f))),
            c.add &&
              (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)),
            o ? d.splice(d.delegateCount++, 0, p) : d.push(p),
            (le.event.global[h] = !0);
        e = null;
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        l,
        u,
        c,
        f,
        p,
        d,
        h,
        m,
        g = le.hasData(e) && le._data(e);
      if (g && (c = g.events)) {
        for (t = (t || "").match(ce) || [""], u = t.length; u--; )
          if (
            ((s = Pe.exec(t[u]) || []),
            (d = m = s[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            for (
              f = le.event.special[d] || {},
                d = (r ? f.delegateType : f.bindType) || d,
                p = c[d] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                l = o = p.length;
              o--;

            )
              (a = p[o]),
                (!i && m !== a.origType) ||
                  (n && n.guid !== a.guid) ||
                  (s && !s.test(a.namespace)) ||
                  (r && r !== a.selector && ("**" !== r || !a.selector)) ||
                  (p.splice(o, 1),
                  a.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, a));
            l &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, g.handle)) ||
                le.removeEvent(e, d, g.handle),
              delete c[d]);
          } else for (d in c) le.event.remove(e, d + t[u], n, r, !0);
        le.isEmptyObject(c) && (delete g.handle, le._removeData(e, "events"));
      }
    },
    trigger: function (n, r, i, o) {
      var a,
        s,
        l,
        u,
        c,
        f,
        p,
        d = [i || Y],
        h = ae.call(n, "type") ? n.type : n,
        m = ae.call(n, "namespace") ? n.namespace.split(".") : [];
      if (
        ((l = f = i = i || Y),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !Be.test(h + le.event.triggered) &&
          (h.indexOf(".") >= 0 &&
            ((m = h.split(".")), (h = m.shift()), m.sort()),
          (s = h.indexOf(":") < 0 && "on" + h),
          (n = n[le.expando] ? n : new le.Event(h, "object" == typeof n && n)),
          (n.isTrigger = !0),
          (n.namespace = m.join(".")),
          (n.namespace_re = n.namespace
            ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (n.result = t),
          n.target || (n.target = i),
          (r = null == r ? [n] : le.makeArray(r, [n])),
          (c = le.event.special[h] || {}),
          o || !c.trigger || !1 !== c.trigger.apply(i, r)))
      ) {
        if (!o && !c.noBubble && !le.isWindow(i)) {
          for (
            u = c.delegateType || h, Be.test(u + h) || (l = l.parentNode);
            l;
            l = l.parentNode
          )
            d.push(l), (f = l);
          f === (i.ownerDocument || Y) &&
            d.push(f.defaultView || f.parentWindow || e);
        }
        for (p = 0; (l = d[p++]) && !n.isPropagationStopped(); )
          (n.type = p > 1 ? u : c.bindType || h),
            (a =
              (le._data(l, "events") || {})[n.type] && le._data(l, "handle")),
            a && a.apply(l, r),
            (a = s && l[s]) &&
              le.acceptData(l) &&
              a.apply &&
              !1 === a.apply(l, r) &&
              n.preventDefault();
        if (
          ((n.type = h),
          !o &&
            !n.isDefaultPrevented() &&
            (!c._default || !1 === c._default.apply(i.ownerDocument, r)) &&
            ("click" !== h || !le.nodeName(i, "a")) &&
            le.acceptData(i) &&
            s &&
            i[h] &&
            !le.isWindow(i))
        ) {
          (f = i[s]), f && (i[s] = null), (le.event.triggered = h);
          try {
            i[h]();
          } catch (e) {}
          (le.event.triggered = t), f && (i[s] = f);
        }
        return n.result;
      }
    },
    dispatch: function (e) {
      e = le.event.fix(e);
      var n,
        r,
        i,
        o,
        a,
        s = [],
        l = re.call(arguments),
        u = (le._data(this, "events") || {})[e.type] || [],
        c = le.event.special[e.type] || {};
      if (
        ((l[0] = e),
        (e.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, e))
      ) {
        for (
          s = le.event.handlers.call(this, e, u), n = 0;
          (o = s[n++]) && !e.isPropagationStopped();

        )
          for (
            e.currentTarget = o.elem, a = 0;
            (i = o.handlers[a++]) && !e.isImmediatePropagationStopped();

          )
            (e.namespace_re && !e.namespace_re.test(i.namespace)) ||
              ((e.handleObj = i),
              (e.data = i.data),
              (r = (
                (le.event.special[i.origType] || {}).handle || i.handler
              ).apply(o.elem, l)) !== t &&
                !1 === (e.result = r) &&
                (e.preventDefault(), e.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, n) {
      var r,
        i,
        o,
        a,
        s = [],
        l = n.delegateCount,
        u = e.target;
      if (l && u.nodeType && (!e.button || "click" !== e.type))
        for (; u != this; u = u.parentNode || this)
          if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
            for (o = [], a = 0; a < l; a++)
              (i = n[a]),
                (r = i.selector + " "),
                o[r] === t &&
                  (o[r] = i.needsContext
                    ? le(r, this).index(u) >= 0
                    : le.find(r, this, null, [u]).length),
                o[r] && o.push(i);
            o.length && s.push({ elem: u, handlers: o });
          }
      return l < n.length && s.push({ elem: this, handlers: n.slice(l) }), s;
    },
    fix: function (e) {
      if (e[le.expando]) return e;
      var t,
        n,
        r,
        i = e.type,
        o = e,
        a = this.fixHooks[i];
      for (
        a ||
          (this.fixHooks[i] = a =
            _e.test(i) ? this.mouseHooks : Oe.test(i) ? this.keyHooks : {}),
          r = a.props ? this.props.concat(a.props) : this.props,
          e = new le.Event(o),
          t = r.length;
        t--;

      )
        (n = r[t]), (e[n] = o[n]);
      return (
        e.target || (e.target = o.srcElement || Y),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        (e.metaKey = !!e.metaKey),
        a.filter ? a.filter(e, o) : e
      );
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (e, t) {
        return (
          null == e.which &&
            (e.which = null != t.charCode ? t.charCode : t.keyCode),
          e
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (e, n) {
        var r,
          i,
          o,
          a = n.button,
          s = n.fromElement;
        return (
          null == e.pageX &&
            null != n.clientX &&
            ((i = e.target.ownerDocument || Y),
            (o = i.documentElement),
            (r = i.body),
            (e.pageX =
              n.clientX +
              ((o && o.scrollLeft) || (r && r.scrollLeft) || 0) -
              ((o && o.clientLeft) || (r && r.clientLeft) || 0)),
            (e.pageY =
              n.clientY +
              ((o && o.scrollTop) || (r && r.scrollTop) || 0) -
              ((o && o.clientTop) || (r && r.clientTop) || 0))),
          !e.relatedTarget &&
            s &&
            (e.relatedTarget = s === e.target ? n.toElement : s),
          e.which ||
            a === t ||
            (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
          e
        );
      },
    },
    special: {
      load: { noBubble: !0 },
      click: {
        trigger: function () {
          if (
            le.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
          )
            return this.click(), !1;
        },
      },
      focus: {
        trigger: function () {
          if (this !== Y.activeElement && this.focus)
            try {
              return this.focus(), !1;
            } catch (e) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === Y.activeElement && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      beforeunload: {
        postDispatch: function (e) {
          e.result !== t && (e.originalEvent.returnValue = e.result);
        },
      },
    },
    simulate: function (e, t, n, r) {
      var i = le.extend(new le.Event(), n, {
        type: e,
        isSimulated: !0,
        originalEvent: {},
      });
      r ? le.event.trigger(i, null, t) : le.event.dispatch.call(t, i),
        i.isDefaultPrevented() && n.preventDefault();
    },
  }),
    (le.removeEvent = Y.removeEventListener
      ? function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n, !1);
        }
      : function (e, t, n) {
          var r = "on" + t;
          e.detachEvent &&
            (typeof e[r] === V && (e[r] = null), e.detachEvent(r, n));
        }),
    (le.Event = function (e, t) {
      if (!(this instanceof le.Event)) return new le.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            !1 === e.returnValue ||
            (e.getPreventDefault && e.getPreventDefault())
              ? l
              : u))
        : (this.type = e),
        t && le.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || le.now()),
        (this[le.expando] = !0);
    }),
    (le.Event.prototype = {
      isDefaultPrevented: u,
      isPropagationStopped: u,
      isImmediatePropagationStopped: u,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = l),
          e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = l),
          e &&
            (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        (this.isImmediatePropagationStopped = l), this.stopPropagation();
      },
    }),
    le.each(
      { mouseenter: "mouseover", mouseleave: "mouseout" },
      function (e, t) {
        le.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = this,
              i = e.relatedTarget,
              o = e.handleObj;
            return (
              (i && (i === r || le.contains(r, i))) ||
                ((e.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    le.support.submitBubbles ||
      (le.event.special.submit = {
        setup: function () {
          if (le.nodeName(this, "form")) return !1;
          le.event.add(this, "click._submit keypress._submit", function (e) {
            var n = e.target,
              r =
                le.nodeName(n, "input") || le.nodeName(n, "button")
                  ? n.form
                  : t;
            r &&
              !le._data(r, "submitBubbles") &&
              (le.event.add(r, "submit._submit", function (e) {
                e._submit_bubble = !0;
              }),
              le._data(r, "submitBubbles", !0));
          });
        },
        postDispatch: function (e) {
          e._submit_bubble &&
            (delete e._submit_bubble,
            this.parentNode &&
              !e.isTrigger &&
              le.event.simulate("submit", this.parentNode, e, !0));
        },
        teardown: function () {
          if (le.nodeName(this, "form")) return !1;
          le.event.remove(this, "._submit");
        },
      }),
    le.support.changeBubbles ||
      (le.event.special.change = {
        setup: function () {
          if (qe.test(this.nodeName))
            return (
              ("checkbox" !== this.type && "radio" !== this.type) ||
                (le.event.add(this, "propertychange._change", function (e) {
                  "checked" === e.originalEvent.propertyName &&
                    (this._just_changed = !0);
                }),
                le.event.add(this, "click._change", function (e) {
                  this._just_changed &&
                    !e.isTrigger &&
                    (this._just_changed = !1),
                    le.event.simulate("change", this, e, !0);
                })),
              !1
            );
          le.event.add(this, "beforeactivate._change", function (e) {
            var t = e.target;
            qe.test(t.nodeName) &&
              !le._data(t, "changeBubbles") &&
              (le.event.add(t, "change._change", function (e) {
                !this.parentNode ||
                  e.isSimulated ||
                  e.isTrigger ||
                  le.event.simulate("change", this.parentNode, e, !0);
              }),
              le._data(t, "changeBubbles", !0));
          });
        },
        handle: function (e) {
          var t = e.target;
          if (
            this !== t ||
            e.isSimulated ||
            e.isTrigger ||
            ("radio" !== t.type && "checkbox" !== t.type)
          )
            return e.handleObj.handler.apply(this, arguments);
        },
        teardown: function () {
          return le.event.remove(this, "._change"), !qe.test(this.nodeName);
        },
      }),
    le.support.focusinBubbles ||
      le.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = 0,
          r = function (e) {
            le.event.simulate(t, e.target, le.event.fix(e), !0);
          };
        le.event.special[t] = {
          setup: function () {
            0 == n++ && Y.addEventListener(e, r, !0);
          },
          teardown: function () {
            0 == --n && Y.removeEventListener(e, r, !0);
          },
        };
      }),
    le.fn.extend({
      on: function (e, n, r, i, o) {
        var a, s;
        if ("object" == typeof e) {
          "string" != typeof n && ((r = r || n), (n = t));
          for (a in e) this.on(a, n, r, e[a], o);
          return this;
        }
        if (
          (null == r && null == i
            ? ((i = n), (r = n = t))
            : null == i &&
              ("string" == typeof n
                ? ((i = r), (r = t))
                : ((i = r), (r = n), (n = t))),
          !1 === i)
        )
          i = u;
        else if (!i) return this;
        return (
          1 === o &&
            ((s = i),
            (i = function (e) {
              return le().off(e), s.apply(this, arguments);
            }),
            (i.guid = s.guid || (s.guid = le.guid++))),
          this.each(function () {
            le.event.add(this, e, i, r, n);
          })
        );
      },
      one: function (e, t, n, r) {
        return this.on(e, t, n, r, 1);
      },
      off: function (e, n, r) {
        var i, o;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            le(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (o in e) this.off(o, n, e[o]);
          return this;
        }
        return (
          (!1 !== n && "function" != typeof n) || ((r = n), (n = t)),
          !1 === r && (r = u),
          this.each(function () {
            le.event.remove(this, e, r, n);
          })
        );
      },
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      trigger: function (e, t) {
        return this.each(function () {
          le.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return le.event.trigger(e, t, n, !0);
      },
    })
    /*!
     * Sizzle CSS Selector Engine
     * Copyright 2012 jQuery Foundation and other contributors
     * Released under the MIT license
     * http://sizzlejs.com/
     */,
    (function (e, t) {
      function n(e) {
        return he.test(e + "");
      }
      function r() {
        var e,
          t = [];
        return (e = function (n, r) {
          return (
            t.push((n += " ")) > k.cacheLength && delete e[t.shift()],
            (e[n] = r)
          );
        });
      }
      function i(e) {
        return (e[B] = !0), e;
      }
      function o(e) {
        var t = $.createElement("div");
        try {
          return e(t);
        } catch (e) {
          return !1;
        } finally {
          t = null;
        }
      }
      function a(e, t, n, r) {
        var i, o, a, s, l, u, c, d, h, m;
        if (
          ((t ? t.ownerDocument || t : P) !== $ && j(t),
          (t = t || $),
          (n = n || []),
          !e || "string" != typeof e)
        )
          return n;
        if (1 !== (s = t.nodeType) && 9 !== s) return [];
        if (!H && !r) {
          if ((i = me.exec(e)))
            if ((a = i[1])) {
              if (9 === s) {
                if (!(o = t.getElementById(a)) || !o.parentNode) return n;
                if (o.id === a) return n.push(o), n;
              } else if (
                t.ownerDocument &&
                (o = t.ownerDocument.getElementById(a)) &&
                O(t, o) &&
                o.id === a
              )
                return n.push(o), n;
            } else {
              if (i[2])
                return J.apply(n, K.call(t.getElementsByTagName(e), 0)), n;
              if ((a = i[3]) && W.getByClassName && t.getElementsByClassName)
                return J.apply(n, K.call(t.getElementsByClassName(a), 0)), n;
            }
          if (W.qsa && !F.test(e)) {
            if (
              ((c = !0),
              (d = B),
              (h = t),
              (m = 9 === s && e),
              1 === s && "object" !== t.nodeName.toLowerCase())
            ) {
              for (
                u = f(e),
                  (c = t.getAttribute("id"))
                    ? (d = c.replace(ve, "\\$&"))
                    : t.setAttribute("id", d),
                  d = "[id='" + d + "'] ",
                  l = u.length;
                l--;

              )
                u[l] = d + p(u[l]);
              (h = (de.test(e) && t.parentNode) || t), (m = u.join(","));
            }
            if (m)
              try {
                return J.apply(n, K.call(h.querySelectorAll(m), 0)), n;
              } catch (e) {
              } finally {
                c || t.removeAttribute("id");
              }
          }
        }
        return x(e.replace(ae, "$1"), t, n, r);
      }
      function s(e, t) {
        var n = t && e,
          r = n && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
        if (r) return r;
        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function l(e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }
      function u(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e;
        };
      }
      function c(e) {
        return i(function (t) {
          return (
            (t = +t),
            i(function (n, r) {
              for (var i, o = e([], n.length, t), a = o.length; a--; )
                n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
            })
          );
        });
      }
      function f(e, t) {
        var n,
          r,
          i,
          o,
          s,
          l,
          u,
          c = X[e + " "];
        if (c) return t ? 0 : c.slice(0);
        for (s = e, l = [], u = k.preFilter; s; ) {
          (n && !(r = se.exec(s))) ||
            (r && (s = s.slice(r[0].length) || s), l.push((i = []))),
            (n = !1),
            (r = ue.exec(s)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace(ae, " ") }),
              (s = s.slice(n.length)));
          for (o in k.filter)
            !(r = pe[o].exec(s)) ||
              (u[o] && !(r = u[o](r))) ||
              ((n = r.shift()),
              i.push({ value: n, type: o, matches: r }),
              (s = s.slice(n.length)));
          if (!n) break;
        }
        return t ? s.length : s ? a.error(e) : X(e, l).slice(0);
      }
      function p(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
        return r;
      }
      function d(e, t, n) {
        var r = t.dir,
          i = n && "parentNode" === r,
          o = I++;
        return t.first
          ? function (t, n, o) {
              for (; (t = t[r]); ) if (1 === t.nodeType || i) return e(t, n, o);
            }
          : function (t, n, a) {
              var s,
                l,
                u,
                c = R + " " + o;
              if (a) {
                for (; (t = t[r]); )
                  if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
              } else
                for (; (t = t[r]); )
                  if (1 === t.nodeType || i)
                    if (((u = t[B] || (t[B] = {})), (l = u[r]) && l[0] === c)) {
                      if (!0 === (s = l[1]) || s === C) return !0 === s;
                    } else if (
                      ((l = u[r] = [c]), (l[1] = e(t, n, a) || C), !0 === l[1])
                    )
                      return !0;
            };
      }
      function h(e) {
        return e.length > 1
          ? function (t, n, r) {
              for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
              return !0;
            }
          : e[0];
      }
      function m(e, t, n, r, i) {
        for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)
          (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), u && t.push(s)));
        return a;
      }
      function g(e, t, n, r, o, a) {
        return (
          r && !r[B] && (r = g(r)),
          o && !o[B] && (o = g(o, a)),
          i(function (i, a, s, l) {
            var u,
              c,
              f,
              p = [],
              d = [],
              h = a.length,
              g = i || b(t || "*", s.nodeType ? [s] : s, []),
              y = !e || (!i && t) ? g : m(g, p, e, s, l),
              v = n ? (o || (i ? e : h || r) ? [] : a) : y;
            if ((n && n(y, v, s, l), r))
              for (u = m(v, d), r(u, [], s, l), c = u.length; c--; )
                (f = u[c]) && (v[d[c]] = !(y[d[c]] = f));
            if (i) {
              if (o || e) {
                if (o) {
                  for (u = [], c = v.length; c--; )
                    (f = v[c]) && u.push((y[c] = f));
                  o(null, (v = []), u, l);
                }
                for (c = v.length; c--; )
                  (f = v[c]) &&
                    (u = o ? Z.call(i, f) : p[c]) > -1 &&
                    (i[u] = !(a[u] = f));
              }
            } else (v = m(v === a ? v.splice(h, v.length) : v)), o ? o(null, a, v, l) : J.apply(a, v);
          })
        );
      }
      function y(e) {
        for (
          var t,
            n,
            r,
            i = e.length,
            o = k.relative[e[0].type],
            a = o || k.relative[" "],
            s = o ? 1 : 0,
            l = d(
              function (e) {
                return e === t;
              },
              a,
              !0
            ),
            u = d(
              function (e) {
                return Z.call(t, e) > -1;
              },
              a,
              !0
            ),
            c = [
              function (e, n, r) {
                return (
                  (!o && (r || n !== D)) ||
                  ((t = n).nodeType ? l(e, n, r) : u(e, n, r))
                );
              },
            ];
          s < i;
          s++
        )
          if ((n = k.relative[e[s].type])) c = [d(h(c), n)];
          else {
            if (((n = k.filter[e[s].type].apply(null, e[s].matches)), n[B])) {
              for (r = ++s; r < i && !k.relative[e[r].type]; r++);
              return g(
                s > 1 && h(c),
                s > 1 && p(e.slice(0, s - 1)).replace(ae, "$1"),
                n,
                s < r && y(e.slice(s, r)),
                r < i && y((e = e.slice(r))),
                r < i && p(e)
              );
            }
            c.push(n);
          }
        return h(c);
      }
      function v(e, t) {
        var n = 0,
          r = t.length > 0,
          o = e.length > 0,
          s = function (i, s, l, u, c) {
            var f,
              p,
              d,
              h = [],
              g = 0,
              y = "0",
              v = i && [],
              b = null != c,
              x = D,
              T = i || (o && k.find.TAG("*", (c && s.parentNode) || s)),
              w = (R += null == x ? 1 : Math.random() || 0.1);
            for (b && ((D = s !== $ && s), (C = n)); null != (f = T[y]); y++) {
              if (o && f) {
                for (p = 0; (d = e[p++]); )
                  if (d(f, s, l)) {
                    u.push(f);
                    break;
                  }
                b && ((R = w), (C = ++n));
              }
              r && ((f = !d && f) && g--, i && v.push(f));
            }
            if (((g += y), r && y !== g)) {
              for (p = 0; (d = t[p++]); ) d(v, h, s, l);
              if (i) {
                if (g > 0) for (; y--; ) v[y] || h[y] || (h[y] = Q.call(u));
                h = m(h);
              }
              J.apply(u, h),
                b && !i && h.length > 0 && g + t.length > 1 && a.uniqueSort(u);
            }
            return b && ((R = w), (D = x)), v;
          };
        return r ? i(s) : s;
      }
      function b(e, t, n) {
        for (var r = 0, i = t.length; r < i; r++) a(e, t[r], n);
        return n;
      }
      function x(e, t, n, r) {
        var i,
          o,
          a,
          s,
          l,
          u = f(e);
        if (!r && 1 === u.length) {
          if (
            ((o = u[0] = u[0].slice(0)),
            o.length > 2 &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              !H &&
              k.relative[o[1].type])
          ) {
            if (!(t = k.find.ID(a.matches[0].replace(xe, Te), t)[0])) return n;
            e = e.slice(o.shift().value.length);
          }
          for (
            i = pe.needsContext.test(e) ? 0 : o.length;
            i-- && ((a = o[i]), !k.relative[(s = a.type)]);

          )
            if (
              (l = k.find[s]) &&
              (r = l(
                a.matches[0].replace(xe, Te),
                (de.test(o[0].type) && t.parentNode) || t
              ))
            ) {
              if ((o.splice(i, 1), !(e = r.length && p(o))))
                return J.apply(n, K.call(r, 0)), n;
              break;
            }
        }
        return S(e, u)(r, t, H, n, de.test(e)), n;
      }
      function T() {}
      var w,
        C,
        k,
        E,
        N,
        S,
        A,
        D,
        j,
        $,
        L,
        H,
        F,
        M,
        q,
        O,
        _,
        B = "sizzle" + -new Date(),
        P = e.document,
        W = {},
        R = 0,
        I = 0,
        z = r(),
        X = r(),
        U = r(),
        V = typeof t,
        Y = 1 << 31,
        G = [],
        Q = G.pop,
        J = G.push,
        K = G.slice,
        Z =
          G.indexOf ||
          function (e) {
            for (var t = 0, n = this.length; t < n; t++)
              if (this[t] === e) return t;
            return -1;
          },
        ee = "[\\x20\\t\\r\\n\\f]",
        te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ne = te.replace("w", "w#"),
        re = "([*^$|!~]?=)",
        ie =
          "\\[" +
          ee +
          "*(" +
          te +
          ")" +
          ee +
          "*(?:" +
          re +
          ee +
          "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
          ne +
          ")|)|)" +
          ee +
          "*\\]",
        oe =
          ":(" +
          te +
          ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
          ie.replace(3, 8) +
          ")*)|.*)\\)|)",
        ae = new RegExp(
          "^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$",
          "g"
        ),
        se = new RegExp("^" + ee + "*," + ee + "*"),
        ue = new RegExp("^" + ee + "*([\\x20\\t\\r\\n\\f>+~])" + ee + "*"),
        ce = new RegExp(oe),
        fe = new RegExp("^" + ne + "$"),
        pe = {
          ID: new RegExp("^#(" + te + ")"),
          CLASS: new RegExp("^\\.(" + te + ")"),
          NAME: new RegExp("^\\[name=['\"]?(" + te + ")['\"]?\\]"),
          TAG: new RegExp("^(" + te.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + ie),
          PSEUDO: new RegExp("^" + oe),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              ee +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              ee +
              "*(?:([+-]|)" +
              ee +
              "*(\\d+)|))" +
              ee +
              "*\\)|)",
            "i"
          ),
          needsContext: new RegExp(
            "^" +
              ee +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              ee +
              "*((?:-\\d)?\\d*)" +
              ee +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        de = /[\x20\t\r\n\f]*[+~]/,
        he = /^[^{]+\{\s*\[native code/,
        me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ge = /^(?:input|select|textarea|button)$/i,
        ye = /^h\d$/i,
        ve = /'|\\/g,
        be = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
        xe = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
        Te = function (e, t) {
          var n = "0x" + t - 65536;
          return n !== n
            ? t
            : n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
        };
      try {
        K.call(P.documentElement.childNodes, 0)[0].nodeType;
      } catch (e) {
        K = function (e) {
          for (var t, n = []; (t = this[e++]); ) n.push(t);
          return n;
        };
      }
      (N = a.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName;
        }),
        (j = a.setDocument =
          function (e) {
            var r = e ? e.ownerDocument || e : P;
            return r !== $ && 9 === r.nodeType && r.documentElement
              ? (($ = r),
                (L = r.documentElement),
                (H = N(r)),
                (W.tagNameNoComments = o(function (e) {
                  return (
                    e.appendChild(r.createComment("")),
                    !e.getElementsByTagName("*").length
                  );
                })),
                (W.attributes = o(function (e) {
                  e.innerHTML = "<select></select>";
                  var t = typeof e.lastChild.getAttribute("multiple");
                  return "boolean" !== t && "string" !== t;
                })),
                (W.getByClassName = o(function (e) {
                  return (
                    (e.innerHTML =
                      "<div class='hidden e'></div><div class='hidden'></div>"),
                    !(
                      !e.getElementsByClassName ||
                      !e.getElementsByClassName("e").length
                    ) &&
                      ((e.lastChild.className = "e"),
                      2 === e.getElementsByClassName("e").length)
                  );
                })),
                (W.getByName = o(function (e) {
                  (e.id = B + 0),
                    (e.innerHTML =
                      "<a name='" + B + "'></a><div name='" + B + "'></div>"),
                    L.insertBefore(e, L.firstChild);
                  var t =
                    r.getElementsByName &&
                    r.getElementsByName(B).length ===
                      2 + r.getElementsByName(B + 0).length;
                  return (
                    (W.getIdNotName = !r.getElementById(B)), L.removeChild(e), t
                  );
                })),
                (k.attrHandle = o(function (e) {
                  return (
                    (e.innerHTML = "<a href='#'></a>"),
                    e.firstChild &&
                      typeof e.firstChild.getAttribute !== V &&
                      "#" === e.firstChild.getAttribute("href")
                  );
                })
                  ? {}
                  : {
                      href: function (e) {
                        return e.getAttribute("href", 2);
                      },
                      type: function (e) {
                        return e.getAttribute("type");
                      },
                    }),
                W.getIdNotName
                  ? ((k.find.ID = function (e, t) {
                      if (typeof t.getElementById !== V && !H) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : [];
                      }
                    }),
                    (k.filter.ID = function (e) {
                      var t = e.replace(xe, Te);
                      return function (e) {
                        return e.getAttribute("id") === t;
                      };
                    }))
                  : ((k.find.ID = function (e, n) {
                      if (typeof n.getElementById !== V && !H) {
                        var r = n.getElementById(e);
                        return r
                          ? r.id === e ||
                            (typeof r.getAttributeNode !== V &&
                              r.getAttributeNode("id").value === e)
                            ? [r]
                            : t
                          : [];
                      }
                    }),
                    (k.filter.ID = function (e) {
                      var t = e.replace(xe, Te);
                      return function (e) {
                        var n =
                          typeof e.getAttributeNode !== V &&
                          e.getAttributeNode("id");
                        return n && n.value === t;
                      };
                    })),
                (k.find.TAG = W.tagNameNoComments
                  ? function (e, t) {
                      if (typeof t.getElementsByTagName !== V)
                        return t.getElementsByTagName(e);
                    }
                  : function (e, t) {
                      var n,
                        r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                      if ("*" === e) {
                        for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                        return r;
                      }
                      return o;
                    }),
                (k.find.NAME =
                  W.getByName &&
                  function (e, t) {
                    if (typeof t.getElementsByName !== V)
                      return t.getElementsByName(name);
                  }),
                (k.find.CLASS =
                  W.getByClassName &&
                  function (e, t) {
                    if (typeof t.getElementsByClassName !== V && !H)
                      return t.getElementsByClassName(e);
                  }),
                (M = []),
                (F = [":focus"]),
                (W.qsa = n(r.querySelectorAll)) &&
                  (o(function (e) {
                    (e.innerHTML =
                      "<select><option selected=''></option></select>"),
                      e.querySelectorAll("[selected]").length ||
                        F.push(
                          "\\[" +
                            ee +
                            "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"
                        ),
                      e.querySelectorAll(":checked").length ||
                        F.push(":checked");
                  }),
                  o(function (e) {
                    (e.innerHTML = "<input type='hidden' i=''/>"),
                      e.querySelectorAll("[i^='']").length &&
                        F.push("[*^$]=" + ee + "*(?:\"\"|'')"),
                      e.querySelectorAll(":enabled").length ||
                        F.push(":enabled", ":disabled"),
                      e.querySelectorAll("*,:x"),
                      F.push(",.*:");
                  })),
                (W.matchesSelector = n(
                  (q =
                    L.matchesSelector ||
                    L.mozMatchesSelector ||
                    L.webkitMatchesSelector ||
                    L.oMatchesSelector ||
                    L.msMatchesSelector)
                )) &&
                  o(function (e) {
                    (W.disconnectedMatch = q.call(e, "div")),
                      q.call(e, "[s!='']:x"),
                      M.push("!=", oe);
                  }),
                (F = new RegExp(F.join("|"))),
                (M = new RegExp(M.join("|"))),
                (O =
                  n(L.contains) || L.compareDocumentPosition
                    ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          r = t && t.parentNode;
                        return (
                          e === r ||
                          !(
                            !r ||
                            1 !== r.nodeType ||
                            !(n.contains
                              ? n.contains(r)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(r))
                          )
                        );
                      }
                    : function (e, t) {
                        if (t)
                          for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (_ = L.compareDocumentPosition
                  ? function (e, t) {
                      var n;
                      return e === t
                        ? ((A = !0), 0)
                        : (n =
                            t.compareDocumentPosition &&
                            e.compareDocumentPosition &&
                            e.compareDocumentPosition(t))
                        ? 1 & n ||
                          (e.parentNode && 11 === e.parentNode.nodeType)
                          ? e === r || O(P, e)
                            ? -1
                            : t === r || O(P, t)
                            ? 1
                            : 0
                          : 4 & n
                          ? -1
                          : 1
                        : e.compareDocumentPosition
                        ? -1
                        : 1;
                    }
                  : function (e, t) {
                      var n,
                        i = 0,
                        o = e.parentNode,
                        a = t.parentNode,
                        l = [e],
                        u = [t];
                      if (e === t) return (A = !0), 0;
                      if (!o || !a)
                        return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : 0;
                      if (o === a) return s(e, t);
                      for (n = e; (n = n.parentNode); ) l.unshift(n);
                      for (n = t; (n = n.parentNode); ) u.unshift(n);
                      for (; l[i] === u[i]; ) i++;
                      return i
                        ? s(l[i], u[i])
                        : l[i] === P
                        ? -1
                        : u[i] === P
                        ? 1
                        : 0;
                    }),
                (A = !1),
                [0, 0].sort(_),
                (W.detectDuplicates = A),
                $)
              : $;
          }),
        (a.matches = function (e, t) {
          return a(e, null, null, t);
        }),
        (a.matchesSelector = function (e, t) {
          if (
            ((e.ownerDocument || e) !== $ && j(e),
            (t = t.replace(be, "='$1']")),
            W.matchesSelector && !H && (!M || !M.test(t)) && !F.test(t))
          )
            try {
              var n = q.call(e, t);
              if (
                n ||
                W.disconnectedMatch ||
                (e.document && 11 !== e.document.nodeType)
              )
                return n;
            } catch (e) {}
          return a(t, $, null, [e]).length > 0;
        }),
        (a.contains = function (e, t) {
          return (e.ownerDocument || e) !== $ && j(e), O(e, t);
        }),
        (a.attr = function (e, t) {
          var n;
          return (
            (e.ownerDocument || e) !== $ && j(e),
            H || (t = t.toLowerCase()),
            (n = k.attrHandle[t])
              ? n(e)
              : H || W.attributes
              ? e.getAttribute(t)
              : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) &&
                !0 === e[t]
              ? t
              : n && n.specified
              ? n.value
              : null
          );
        }),
        (a.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (a.uniqueSort = function (e) {
          var t,
            n = [],
            r = 1,
            i = 0;
          if (((A = !W.detectDuplicates), e.sort(_), A)) {
            for (; (t = e[r]); r++) t === e[r - 1] && (i = n.push(r));
            for (; i--; ) e.splice(n[i], 1);
          }
          return e;
        }),
        (E = a.getText =
          function (e) {
            var t,
              n = "",
              r = 0,
              i = e.nodeType;
            if (i) {
              if (1 === i || 9 === i || 11 === i) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += E(e);
              } else if (3 === i || 4 === i) return e.nodeValue;
            } else for (; (t = e[r]); r++) n += E(t);
            return n;
          }),
        (k = a.selectors =
          {
            cacheLength: 50,
            createPseudo: i,
            match: pe,
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (e) {
                return (
                  (e[1] = e[1].replace(xe, Te)),
                  (e[3] = (e[4] || e[5] || "").replace(xe, Te)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function (e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || a.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && a.error(e[0]),
                  e
                );
              },
              PSEUDO: function (e) {
                var t,
                  n = !e[5] && e[2];
                return pe.CHILD.test(e[0])
                  ? null
                  : (e[4]
                      ? (e[2] = e[4])
                      : n &&
                        ce.test(n) &&
                        (t = f(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              },
            },
            filter: {
              TAG: function (e) {
                return "*" === e
                  ? function () {
                      return !0;
                    }
                  : ((e = e.replace(xe, Te).toLowerCase()),
                    function (t) {
                      return t.nodeName && t.nodeName.toLowerCase() === e;
                    });
              },
              CLASS: function (e) {
                var t = z[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) &&
                    z(e, function (e) {
                      return t.test(
                        e.className ||
                          (typeof e.getAttribute !== V &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (e, t, n) {
                return function (r) {
                  var i = a.attr(r, e);
                  return null == i
                    ? "!=" === t
                    : !t ||
                        ((i += ""),
                        "=" === t
                          ? i === n
                          : "!=" === t
                          ? i !== n
                          : "^=" === t
                          ? n && 0 === i.indexOf(n)
                          : "*=" === t
                          ? n && i.indexOf(n) > -1
                          : "$=" === t
                          ? n && i.slice(-n.length) === n
                          : "~=" === t
                          ? (" " + i + " ").indexOf(n) > -1
                          : "|=" === t &&
                            (i === n || i.slice(0, n.length + 1) === n + "-"));
                };
              },
              CHILD: function (e, t, n, r, i) {
                var o = "nth" !== e.slice(0, 3),
                  a = "last" !== e.slice(-4),
                  s = "of-type" === t;
                return 1 === r && 0 === i
                  ? function (e) {
                      return !!e.parentNode;
                    }
                  : function (t, n, l) {
                      var u,
                        c,
                        f,
                        p,
                        d,
                        h,
                        m = o !== a ? "nextSibling" : "previousSibling",
                        g = t.parentNode,
                        y = s && t.nodeName.toLowerCase(),
                        v = !l && !s;
                      if (g) {
                        if (o) {
                          for (; m; ) {
                            for (f = t; (f = f[m]); )
                              if (
                                s
                                  ? f.nodeName.toLowerCase() === y
                                  : 1 === f.nodeType
                              )
                                return !1;
                            h = m = "only" === e && !h && "nextSibling";
                          }
                          return !0;
                        }
                        if (((h = [a ? g.firstChild : g.lastChild]), a && v)) {
                          for (
                            c = g[B] || (g[B] = {}),
                              u = c[e] || [],
                              d = u[0] === R && u[1],
                              p = u[0] === R && u[2],
                              f = d && g.childNodes[d];
                            (f = (++d && f && f[m]) || (p = d = 0) || h.pop());

                          )
                            if (1 === f.nodeType && ++p && f === t) {
                              c[e] = [R, d, p];
                              break;
                            }
                        } else if (
                          v &&
                          (u = (t[B] || (t[B] = {}))[e]) &&
                          u[0] === R
                        )
                          p = u[1];
                        else
                          for (
                            ;
                            (f =
                              (++d && f && f[m]) || (p = d = 0) || h.pop()) &&
                            ((s
                              ? f.nodeName.toLowerCase() !== y
                              : 1 !== f.nodeType) ||
                              !++p ||
                              (v && ((f[B] || (f[B] = {}))[e] = [R, p]),
                              f !== t));

                          );
                        return (p -= i) === r || (p % r == 0 && p / r >= 0);
                      }
                    };
              },
              PSEUDO: function (e, t) {
                var n,
                  r =
                    k.pseudos[e] ||
                    k.setFilters[e.toLowerCase()] ||
                    a.error("unsupported pseudo: " + e);
                return r[B]
                  ? r(t)
                  : r.length > 1
                  ? ((n = [e, e, "", t]),
                    k.setFilters.hasOwnProperty(e.toLowerCase())
                      ? i(function (e, n) {
                          for (var i, o = r(e, t), a = o.length; a--; )
                            (i = Z.call(e, o[a])), (e[i] = !(n[i] = o[a]));
                        })
                      : function (e) {
                          return r(e, 0, n);
                        })
                  : r;
              },
            },
            pseudos: {
              not: i(function (e) {
                var t = [],
                  n = [],
                  r = S(e.replace(ae, "$1"));
                return r[B]
                  ? i(function (e, t, n, i) {
                      for (var o, a = r(e, null, i, []), s = e.length; s--; )
                        (o = a[s]) && (e[s] = !(t[s] = o));
                    })
                  : function (e, i, o) {
                      return (t[0] = e), r(t, null, o, n), !n.pop();
                    };
              }),
              has: i(function (e) {
                return function (t) {
                  return a(e, t).length > 0;
                };
              }),
              contains: i(function (e) {
                return function (t) {
                  return (t.textContent || t.innerText || E(t)).indexOf(e) > -1;
                };
              }),
              lang: i(function (e) {
                return (
                  fe.test(e || "") || a.error("unsupported lang: " + e),
                  (e = e.replace(xe, Te).toLowerCase()),
                  function (t) {
                    var n;
                    do {
                      if (
                        (n = H
                          ? t.getAttribute("xml:lang") || t.getAttribute("lang")
                          : t.lang)
                      )
                        return (
                          (n = n.toLowerCase()) === e ||
                          0 === n.indexOf(e + "-")
                        );
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id;
              },
              root: function (e) {
                return e === L;
              },
              focus: function (e) {
                return (
                  e === $.activeElement &&
                  (!$.hasFocus || $.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: function (e) {
                return !1 === e.disabled;
              },
              disabled: function (e) {
                return !0 === e.disabled;
              },
              checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return (
                  ("input" === t && !!e.checked) ||
                  ("option" === t && !!e.selected)
                );
              },
              selected: function (e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                );
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)
                    return !1;
                return !0;
              },
              parent: function (e) {
                return !k.pseudos.empty(e);
              },
              header: function (e) {
                return ye.test(e.nodeName);
              },
              input: function (e) {
                return ge.test(e.nodeName);
              },
              button: function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && "button" === e.type) || "button" === t;
              },
              text: function (e) {
                var t;
                return (
                  "input" === e.nodeName.toLowerCase() &&
                  "text" === e.type &&
                  (null == (t = e.getAttribute("type")) ||
                    t.toLowerCase() === e.type)
                );
              },
              first: c(function () {
                return [0];
              }),
              last: c(function (e, t) {
                return [t - 1];
              }),
              eq: c(function (e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: c(function (e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: c(function (e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: c(function (e, t, n) {
                for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                return e;
              }),
              gt: c(function (e, t, n) {
                for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                return e;
              }),
            },
          });
      for (w in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        k.pseudos[w] = l(w);
      for (w in { submit: !0, reset: !0 }) k.pseudos[w] = u(w);
      (S = a.compile =
        function (e, t) {
          var n,
            r = [],
            i = [],
            o = U[e + " "];
          if (!o) {
            for (t || (t = f(e)), n = t.length; n--; )
              (o = y(t[n])), o[B] ? r.push(o) : i.push(o);
            o = U(e, v(i, r));
          }
          return o;
        }),
        (k.pseudos.nth = k.pseudos.eq),
        (k.filters = T.prototype = k.pseudos),
        (k.setFilters = new T()),
        j(),
        (a.attr = le.attr),
        (le.find = a),
        (le.expr = a.selectors),
        (le.expr[":"] = le.expr.pseudos),
        (le.unique = a.uniqueSort),
        (le.text = a.getText),
        (le.isXMLDoc = a.isXML),
        (le.contains = a.contains);
    })(e);
  var We = /Until$/,
    Re = /^(?:parents|prev(?:Until|All))/,
    Ie = /^.[^:#\[\.,]*$/,
    ze = le.expr.match.needsContext,
    Xe = { children: !0, contents: !0, next: !0, prev: !0 };
  le.fn.extend({
    find: function (e) {
      var t,
        n,
        r,
        i = this.length;
      if ("string" != typeof e)
        return (
          (r = this),
          this.pushStack(
            le(e).filter(function () {
              for (t = 0; t < i; t++) if (le.contains(r[t], this)) return !0;
            })
          )
        );
      for (n = [], t = 0; t < i; t++) le.find(e, this[t], n);
      return (
        (n = this.pushStack(i > 1 ? le.unique(n) : n)),
        (n.selector = (this.selector ? this.selector + " " : "") + e),
        n
      );
    },
    has: function (e) {
      var t,
        n = le(e, this),
        r = n.length;
      return this.filter(function () {
        for (t = 0; t < r; t++) if (le.contains(this, n[t])) return !0;
      });
    },
    not: function (e) {
      return this.pushStack(f(this, e, !1));
    },
    filter: function (e) {
      return this.pushStack(f(this, e, !0));
    },
    is: function (e) {
      return (
        !!e &&
        ("string" == typeof e
          ? ze.test(e)
            ? le(e, this.context).index(this[0]) >= 0
            : le.filter(e, this).length > 0
          : this.filter(e).length > 0)
      );
    },
    closest: function (e, t) {
      for (
        var n,
          r = 0,
          i = this.length,
          o = [],
          a = ze.test(e) || "string" != typeof e ? le(e, t || this.context) : 0;
        r < i;
        r++
      )
        for (
          n = this[r];
          n && n.ownerDocument && n !== t && 11 !== n.nodeType;

        ) {
          if (a ? a.index(n) > -1 : le.find.matchesSelector(n, e)) {
            o.push(n);
            break;
          }
          n = n.parentNode;
        }
      return this.pushStack(o.length > 1 ? le.unique(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? le.inArray(this[0], le(e))
          : le.inArray(e.jquery ? e[0] : e, this)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      var n =
          "string" == typeof e
            ? le(e, t)
            : le.makeArray(e && e.nodeType ? [e] : e),
        r = le.merge(this.get(), n);
      return this.pushStack(le.unique(r));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    (le.fn.andSelf = le.fn.addBack),
    le.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return le.dir(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return le.dir(e, "parentNode", n);
        },
        next: function (e) {
          return c(e, "nextSibling");
        },
        prev: function (e) {
          return c(e, "previousSibling");
        },
        nextAll: function (e) {
          return le.dir(e, "nextSibling");
        },
        prevAll: function (e) {
          return le.dir(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return le.dir(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return le.dir(e, "previousSibling", n);
        },
        siblings: function (e) {
          return le.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return le.sibling(e.firstChild);
        },
        contents: function (e) {
          return le.nodeName(e, "iframe")
            ? e.contentDocument || e.contentWindow.document
            : le.merge([], e.childNodes);
        },
      },
      function (e, t) {
        le.fn[e] = function (n, r) {
          var i = le.map(this, t, n);
          return (
            We.test(e) || (r = n),
            r && "string" == typeof r && (i = le.filter(r, i)),
            (i = this.length > 1 && !Xe[e] ? le.unique(i) : i),
            this.length > 1 && Re.test(e) && (i = i.reverse()),
            this.pushStack(i)
          );
        };
      }
    ),
    le.extend({
      filter: function (e, t, n) {
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length
            ? le.find.matchesSelector(t[0], e)
              ? [t[0]]
              : []
            : le.find.matches(e, t)
        );
      },
      dir: function (e, n, r) {
        for (
          var i = [], o = e[n];
          o &&
          9 !== o.nodeType &&
          (r === t || 1 !== o.nodeType || !le(o).is(r));

        )
          1 === o.nodeType && i.push(o), (o = o[n]);
        return i;
      },
      sibling: function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
    });
  var Ue =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Ve = / jQuery\d+="(?:null|\d+)"/g,
    Ye = new RegExp("<(?:" + Ue + ")[\\s/>]", "i"),
    Ge = /^\s+/,
    Qe =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Je = /<([\w:]+)/,
    Ke = /<tbody/i,
    Ze = /<|&#?\w+;/,
    et = /<(?:script|style|link)/i,
    tt = /^(?:checkbox|radio)$/i,
    nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    rt = /^$|\/(?:java|ecma)script/i,
    it = /^true\/(.*)/,
    ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    at = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: le.support.htmlSerialize
        ? [0, "", ""]
        : [1, "X<div>", "</div>"],
    },
    st = p(Y),
    lt = st.appendChild(Y.createElement("div"));
  (at.optgroup = at.option),
    (at.tbody = at.tfoot = at.colgroup = at.caption = at.thead),
    (at.th = at.td),
    le.fn.extend({
      text: function (e) {
        return le.access(
          this,
          function (e) {
            return e === t
              ? le.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || Y).createTextNode(e)
                );
          },
          null,
          e,
          arguments.length
        );
      },
      wrapAll: function (e) {
        if (le.isFunction(e))
          return this.each(function (t) {
            le(this).wrapAll(e.call(this, t));
          });
        if (this[0]) {
          var t = le(e, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (
                  var e = this;
                  e.firstChild && 1 === e.firstChild.nodeType;

                )
                  e = e.firstChild;
                return e;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (e) {
        return le.isFunction(e)
          ? this.each(function (t) {
              le(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = le(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = le.isFunction(e);
        return this.each(function (n) {
          le(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            le.nodeName(this, "body") || le(this).replaceWith(this.childNodes);
          })
          .end();
      },
      append: function () {
        return this.domManip(arguments, !0, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            this.appendChild(e);
        });
      },
      prepend: function () {
        return this.domManip(arguments, !0, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            this.insertBefore(e, this.firstChild);
        });
      },
      before: function () {
        return this.domManip(arguments, !1, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return this.domManip(arguments, !1, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      remove: function (e, t) {
        for (var n, r = 0; null != (n = this[r]); r++)
          (!e || le.filter(e, [n]).length > 0) &&
            (t || 1 !== n.nodeType || le.cleanData(b(n)),
            n.parentNode &&
              (t && le.contains(n.ownerDocument, n) && g(b(n, "script")),
              n.parentNode.removeChild(n)));
        return this;
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) {
          for (1 === e.nodeType && le.cleanData(b(e, !1)); e.firstChild; )
            e.removeChild(e.firstChild);
          e.options && le.nodeName(e, "select") && (e.options.length = 0);
        }
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return le.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return le.access(
          this,
          function (e) {
            var n = this[0] || {},
              r = 0,
              i = this.length;
            if (e === t)
              return 1 === n.nodeType ? n.innerHTML.replace(Ve, "") : t;
            if (
              "string" == typeof e &&
              !et.test(e) &&
              (le.support.htmlSerialize || !Ye.test(e)) &&
              (le.support.leadingWhitespace || !Ge.test(e)) &&
              !at[(Je.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = e.replace(Qe, "<$1></$2>");
              try {
                for (; r < i; r++)
                  (n = this[r] || {}),
                    1 === n.nodeType &&
                      (le.cleanData(b(n, !1)), (n.innerHTML = e));
                n = 0;
              } catch (e) {}
            }
            n && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function (e) {
        return (
          le.isFunction(e) ||
            "string" == typeof e ||
            (e = le(e).not(this).detach()),
          this.domManip([e], !0, function (e) {
            var t = this.nextSibling,
              n = this.parentNode;
            n && (le(this).remove(), n.insertBefore(e, t));
          })
        );
      },
      detach: function (e) {
        return this.remove(e, !0);
      },
      domManip: function (e, n, r) {
        e = te.apply([], e);
        var i,
          o,
          a,
          s,
          l,
          u,
          c = 0,
          f = this.length,
          p = this,
          g = f - 1,
          y = e[0],
          v = le.isFunction(y);
        if (
          v ||
          (!(f <= 1 || "string" != typeof y || le.support.checkClone) &&
            nt.test(y))
        )
          return this.each(function (i) {
            var o = p.eq(i);
            v && (e[0] = y.call(this, i, n ? o.html() : t)),
              o.domManip(e, n, r);
          });
        if (
          f &&
          ((u = le.buildFragment(e, this[0].ownerDocument, !1, this)),
          (i = u.firstChild),
          1 === u.childNodes.length && (u = i),
          i)
        ) {
          for (
            n = n && le.nodeName(i, "tr"),
              s = le.map(b(u, "script"), h),
              a = s.length;
            c < f;
            c++
          )
            (o = u),
              c !== g &&
                ((o = le.clone(o, !0, !0)), a && le.merge(s, b(o, "script"))),
              r.call(
                n && le.nodeName(this[c], "table")
                  ? d(this[c], "tbody")
                  : this[c],
                o,
                c
              );
          if (a)
            for (
              l = s[s.length - 1].ownerDocument, le.map(s, m), c = 0;
              c < a;
              c++
            )
              (o = s[c]),
                rt.test(o.type || "") &&
                  !le._data(o, "globalEval") &&
                  le.contains(l, o) &&
                  (o.src
                    ? le.ajax({
                        url: o.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        throws: !0,
                      })
                    : le.globalEval(
                        (o.text || o.textContent || o.innerHTML || "").replace(
                          ot,
                          ""
                        )
                      ));
          u = i = null;
        }
        return this;
      },
    }),
    le.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        le.fn[e] = function (e) {
          for (var n, r = 0, i = [], o = le(e), a = o.length - 1; r <= a; r++)
            (n = r === a ? this : this.clone(!0)),
              le(o[r])[t](n),
              ne.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    ),
    le.extend({
      clone: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          l = le.contains(e.ownerDocument, e);
        if (
          (le.support.html5Clone ||
          le.isXMLDoc(e) ||
          !Ye.test("<" + e.nodeName + ">")
            ? (o = e.cloneNode(!0))
            : ((lt.innerHTML = e.outerHTML),
              lt.removeChild((o = lt.firstChild))),
          !(
            (le.support.noCloneEvent && le.support.noCloneChecked) ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            le.isXMLDoc(e)
          ))
        )
          for (r = b(o), s = b(e), a = 0; null != (i = s[a]); ++a)
            r[a] && v(i, r[a]);
        if (t)
          if (n)
            for (s = s || b(e), r = r || b(o), a = 0; null != (i = s[a]); a++)
              y(i, r[a]);
          else y(e, o);
        return (
          (r = b(o, "script")),
          r.length > 0 && g(r, !l && b(e, "script")),
          (r = s = i = null),
          o
        );
      },
      buildFragment: function (e, t, n, r) {
        for (
          var i, o, a, s, l, u, c, f = e.length, d = p(t), h = [], m = 0;
          m < f;
          m++
        )
          if ((o = e[m]) || 0 === o)
            if ("object" === le.type(o)) le.merge(h, o.nodeType ? [o] : o);
            else if (Ze.test(o)) {
              for (
                s = s || d.appendChild(t.createElement("div")),
                  l = (Je.exec(o) || ["", ""])[1].toLowerCase(),
                  c = at[l] || at._default,
                  s.innerHTML = c[1] + o.replace(Qe, "<$1></$2>") + c[2],
                  i = c[0];
                i--;

              )
                s = s.lastChild;
              if (
                (!le.support.leadingWhitespace &&
                  Ge.test(o) &&
                  h.push(t.createTextNode(Ge.exec(o)[0])),
                !le.support.tbody)
              )
                for (
                  o =
                    "table" !== l || Ke.test(o)
                      ? "<table>" !== c[1] || Ke.test(o)
                        ? 0
                        : s
                      : s.firstChild,
                    i = o && o.childNodes.length;
                  i--;

                )
                  le.nodeName((u = o.childNodes[i]), "tbody") &&
                    !u.childNodes.length &&
                    o.removeChild(u);
              for (
                le.merge(h, s.childNodes), s.textContent = "";
                s.firstChild;

              )
                s.removeChild(s.firstChild);
              s = d.lastChild;
            } else h.push(t.createTextNode(o));
        for (
          s && d.removeChild(s),
            le.support.appendChecked || le.grep(b(h, "input"), x),
            m = 0;
          (o = h[m++]);

        )
          if (
            (!r || -1 === le.inArray(o, r)) &&
            ((a = le.contains(o.ownerDocument, o)),
            (s = b(d.appendChild(o), "script")),
            a && g(s),
            n)
          )
            for (i = 0; (o = s[i++]); ) rt.test(o.type || "") && n.push(o);
        return (s = null), d;
      },
      cleanData: function (e, t) {
        for (
          var n,
            r,
            i,
            o,
            a = 0,
            s = le.expando,
            l = le.cache,
            u = le.support.deleteExpando,
            c = le.event.special;
          null != (n = e[a]);
          a++
        )
          if ((t || le.acceptData(n)) && ((i = n[s]), (o = i && l[i]))) {
            if (o.events)
              for (r in o.events)
                c[r] ? le.event.remove(n, r) : le.removeEvent(n, r, o.handle);
            l[i] &&
              (delete l[i],
              u
                ? delete n[s]
                : typeof n.removeAttribute !== V
                ? n.removeAttribute(s)
                : (n[s] = null),
              Z.push(i));
          }
      },
    });
  var ut,
    ct,
    ft,
    pt = /alpha\([^)]*\)/i,
    dt = /opacity\s*=\s*([^)]*)/,
    ht = /^(top|right|bottom|left)$/,
    mt = /^(none|table(?!-c[ea]).+)/,
    gt = /^margin/,
    yt = new RegExp("^(" + ue + ")(.*)$", "i"),
    vt = new RegExp("^(" + ue + ")(?!px)[a-z%]+$", "i"),
    bt = new RegExp("^([+-])=(" + ue + ")", "i"),
    xt = { BODY: "block" },
    Tt = { position: "absolute", visibility: "hidden", display: "block" },
    wt = { letterSpacing: 0, fontWeight: 400 },
    Ct = ["Top", "Right", "Bottom", "Left"],
    kt = ["Webkit", "O", "Moz", "ms"];
  le.fn.extend({
    css: function (e, n) {
      return le.access(
        this,
        function (e, n, r) {
          var i,
            o,
            a = {},
            s = 0;
          if (le.isArray(n)) {
            for (o = ct(e), i = n.length; s < i; s++)
              a[n[s]] = le.css(e, n[s], !1, o);
            return a;
          }
          return r !== t ? le.style(e, n, r) : le.css(e, n);
        },
        e,
        n,
        arguments.length > 1
      );
    },
    show: function () {
      return C(this, !0);
    },
    hide: function () {
      return C(this);
    },
    toggle: function (e) {
      var t = "boolean" == typeof e;
      return this.each(function () {
        (t ? e : w(this)) ? le(this).show() : le(this).hide();
      });
    },
  }),
    le.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = ft(e, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: le.support.cssFloat ? "cssFloat" : "styleFloat" },
      style: function (e, n, r, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var o,
            a,
            s,
            l = le.camelCase(n),
            u = e.style;
          if (
            ((n = le.cssProps[l] || (le.cssProps[l] = T(u, l))),
            (s = le.cssHooks[n] || le.cssHooks[l]),
            r === t)
          )
            return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
          if (
            !((a = typeof r),
            "string" === a &&
              (o = bt.exec(r)) &&
              ((r = (o[1] + 1) * o[2] + parseFloat(le.css(e, n))),
              (a = "number")),
            null == r ||
              ("number" === a && isNaN(r)) ||
              ("number" !== a || le.cssNumber[l] || (r += "px"),
              le.support.clearCloneStyle ||
                "" !== r ||
                0 !== n.indexOf("background") ||
                (u[n] = "inherit"),
              s && "set" in s && (r = s.set(e, r, i)) === t))
          )
            try {
              u[n] = r;
            } catch (e) {}
        }
      },
      css: function (e, n, r, i) {
        var o,
          a,
          s,
          l = le.camelCase(n);
        return (
          (n = le.cssProps[l] || (le.cssProps[l] = T(e.style, l))),
          (s = le.cssHooks[n] || le.cssHooks[l]),
          s && "get" in s && (a = s.get(e, !0, r)),
          a === t && (a = ft(e, n, i)),
          "normal" === a && n in wt && (a = wt[n]),
          "" === r || r
            ? ((o = parseFloat(a)), !0 === r || le.isNumeric(o) ? o || 0 : a)
            : a
        );
      },
      swap: function (e, t, n, r) {
        var i,
          o,
          a = {};
        for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = a[o];
        return i;
      },
    }),
    e.getComputedStyle
      ? ((ct = function (t) {
          return e.getComputedStyle(t, null);
        }),
        (ft = function (e, n, r) {
          var i,
            o,
            a,
            s = r || ct(e),
            l = s ? s.getPropertyValue(n) || s[n] : t,
            u = e.style;
          return (
            s &&
              ("" !== l ||
                le.contains(e.ownerDocument, e) ||
                (l = le.style(e, n)),
              vt.test(l) &&
                gt.test(n) &&
                ((i = u.width),
                (o = u.minWidth),
                (a = u.maxWidth),
                (u.minWidth = u.maxWidth = u.width = l),
                (l = s.width),
                (u.width = i),
                (u.minWidth = o),
                (u.maxWidth = a))),
            l
          );
        }))
      : Y.documentElement.currentStyle &&
        ((ct = function (e) {
          return e.currentStyle;
        }),
        (ft = function (e, n, r) {
          var i,
            o,
            a,
            s = r || ct(e),
            l = s ? s[n] : t,
            u = e.style;
          return (
            null == l && u && u[n] && (l = u[n]),
            vt.test(l) &&
              !ht.test(n) &&
              ((i = u.left),
              (o = e.runtimeStyle),
              (a = o && o.left),
              a && (o.left = e.currentStyle.left),
              (u.left = "fontSize" === n ? "1em" : l),
              (l = u.pixelLeft + "px"),
              (u.left = i),
              a && (o.left = a)),
            "" === l ? "auto" : l
          );
        })),
    le.each(["height", "width"], function (e, t) {
      le.cssHooks[t] = {
        get: function (e, n, r) {
          if (n)
            return 0 === e.offsetWidth && mt.test(le.css(e, "display"))
              ? le.swap(e, Tt, function () {
                  return N(e, t, r);
                })
              : N(e, t, r);
        },
        set: function (e, n, r) {
          var i = r && ct(e);
          return k(
            e,
            n,
            r
              ? E(
                  e,
                  t,
                  r,
                  le.support.boxSizing &&
                    "border-box" === le.css(e, "boxSizing", !1, i),
                  i
                )
              : 0
          );
        },
      };
    }),
    le.support.opacity ||
      (le.cssHooks.opacity = {
        get: function (e, t) {
          return dt.test(
            (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : t
            ? "1"
            : "";
        },
        set: function (e, t) {
          var n = e.style,
            r = e.currentStyle,
            i = le.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
            o = (r && r.filter) || n.filter || "";
          (n.zoom = 1),
            ((t >= 1 || "" === t) &&
              "" === le.trim(o.replace(pt, "")) &&
              n.removeAttribute &&
              (n.removeAttribute("filter"), "" === t || (r && !r.filter))) ||
              (n.filter = pt.test(o) ? o.replace(pt, i) : o + " " + i);
        },
      }),
    le(function () {
      le.support.reliableMarginRight ||
        (le.cssHooks.marginRight = {
          get: function (e, t) {
            if (t)
              return le.swap(e, { display: "inline-block" }, ft, [
                e,
                "marginRight",
              ]);
          },
        }),
        !le.support.pixelPosition &&
          le.fn.position &&
          le.each(["top", "left"], function (e, t) {
            le.cssHooks[t] = {
              get: function (e, n) {
                if (n)
                  return (
                    (n = ft(e, t)), vt.test(n) ? le(e).position()[t] + "px" : n
                  );
              },
            };
          });
    }),
    le.expr &&
      le.expr.filters &&
      ((le.expr.filters.hidden = function (e) {
        return (
          (e.offsetWidth <= 0 && e.offsetHeight <= 0) ||
          (!le.support.reliableHiddenOffsets &&
            "none" === ((e.style && e.style.display) || le.css(e, "display")))
        );
      }),
      (le.expr.filters.visible = function (e) {
        return !le.expr.filters.hidden(e);
      })),
    le.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (le.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
            r < 4;
            r++
          )
            i[e + Ct[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        },
      }),
        gt.test(e) || (le.cssHooks[e + t].set = k);
    });
  var Et = /%20/g,
    Nt = /\[\]$/,
    St = /\r?\n/g,
    At = /^(?:submit|button|image|reset|file)$/i,
    Dt = /^(?:input|select|textarea|keygen)/i;
  le.fn.extend({
    serialize: function () {
      return le.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var e = le.prop(this, "elements");
        return e ? le.makeArray(e) : this;
      })
        .filter(function () {
          var e = this.type;
          return (
            this.name &&
            !le(this).is(":disabled") &&
            Dt.test(this.nodeName) &&
            !At.test(e) &&
            (this.checked || !tt.test(e))
          );
        })
        .map(function (e, t) {
          var n = le(this).val();
          return null == n
            ? null
            : le.isArray(n)
            ? le.map(n, function (e) {
                return { name: t.name, value: e.replace(St, "\r\n") };
              })
            : { name: t.name, value: n.replace(St, "\r\n") };
        })
        .get();
    },
  }),
    (le.param = function (e, n) {
      var r,
        i = [],
        o = function (e, t) {
          (t = le.isFunction(t) ? t() : null == t ? "" : t),
            (i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
        };
      if (
        (n === t && (n = le.ajaxSettings && le.ajaxSettings.traditional),
        le.isArray(e) || (e.jquery && !le.isPlainObject(e)))
      )
        le.each(e, function () {
          o(this.name, this.value);
        });
      else for (r in e) D(r, e[r], n, o);
      return i.join("&").replace(Et, "+");
    }),
    le.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (e, t) {
        le.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    (le.fn.hover = function (e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    });
  var jt,
    $t,
    Lt = le.now(),
    Ht = /\?/,
    Ft = /#.*$/,
    Mt = /([?&])_=[^&]*/,
    qt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Ot = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    _t = /^(?:GET|HEAD)$/,
    Bt = /^\/\//,
    Pt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    Wt = le.fn.load,
    Rt = {},
    It = {},
    zt = "*/".concat("*");
  try {
    $t = G.href;
  } catch (e) {
    ($t = Y.createElement("a")), ($t.href = ""), ($t = $t.href);
  }
  (jt = Pt.exec($t.toLowerCase()) || []),
    (le.fn.load = function (e, n, r) {
      if ("string" != typeof e && Wt) return Wt.apply(this, arguments);
      var i,
        o,
        a,
        s = this,
        l = e.indexOf(" ");
      return (
        l >= 0 && ((i = e.slice(l, e.length)), (e = e.slice(0, l))),
        le.isFunction(n)
          ? ((r = n), (n = t))
          : n && "object" == typeof n && (a = "POST"),
        s.length > 0 &&
          le
            .ajax({ url: e, type: a, dataType: "html", data: n })
            .done(function (e) {
              (o = arguments),
                s.html(i ? le("<div>").append(le.parseHTML(e)).find(i) : e);
            })
            .complete(
              r &&
                function (e, t) {
                  s.each(r, o || [e.responseText, t, e]);
                }
            ),
        this
      );
    }),
    le.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        le.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    le.each(["get", "post"], function (e, n) {
      le[n] = function (e, r, i, o) {
        return (
          le.isFunction(r) && ((o = o || i), (i = r), (r = t)),
          le.ajax({ url: e, type: n, dataType: o, data: r, success: i })
        );
      };
    }),
    le.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: $t,
        type: "GET",
        isLocal: Ot.test(jt[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": zt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: { xml: "responseXML", text: "responseText" },
        converters: {
          "* text": e.String,
          "text html": !0,
          "text json": le.parseJSON,
          "text xml": le.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? L(L(e, le.ajaxSettings), t) : L(le.ajaxSettings, e);
      },
      ajaxPrefilter: j(Rt),
      ajaxTransport: j(It),
      ajax: function (e, n) {
        function r(e, n, r, i) {
          var o,
            f,
            v,
            b,
            T,
            C = n;
          2 !== x &&
            ((x = 2),
            l && clearTimeout(l),
            (c = t),
            (s = i || ""),
            (w.readyState = e > 0 ? 4 : 0),
            r && (b = H(p, w, r)),
            (e >= 200 && e < 300) || 304 === e
              ? (p.ifModified &&
                  ((T = w.getResponseHeader("Last-Modified")),
                  T && (le.lastModified[a] = T),
                  (T = w.getResponseHeader("etag")) && (le.etag[a] = T)),
                204 === e
                  ? ((o = !0), (C = "nocontent"))
                  : 304 === e
                  ? ((o = !0), (C = "notmodified"))
                  : ((o = F(p, b)),
                    (C = o.state),
                    (f = o.data),
                    (v = o.error),
                    (o = !v)))
              : ((v = C), (!e && C) || ((C = "error"), e < 0 && (e = 0))),
            (w.status = e),
            (w.statusText = (n || C) + ""),
            o ? m.resolveWith(d, [f, C, w]) : m.rejectWith(d, [w, C, v]),
            w.statusCode(y),
            (y = t),
            u && h.trigger(o ? "ajaxSuccess" : "ajaxError", [w, p, o ? f : v]),
            g.fireWith(d, [w, C]),
            u &&
              (h.trigger("ajaxComplete", [w, p]),
              --le.active || le.event.trigger("ajaxStop")));
        }
        "object" == typeof e && ((n = e), (e = t)), (n = n || {});
        var i,
          o,
          a,
          s,
          l,
          u,
          c,
          f,
          p = le.ajaxSetup({}, n),
          d = p.context || p,
          h = p.context && (d.nodeType || d.jquery) ? le(d) : le.event,
          m = le.Deferred(),
          g = le.Callbacks("once memory"),
          y = p.statusCode || {},
          v = {},
          b = {},
          x = 0,
          T = "canceled",
          w = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (2 === x) {
                if (!f)
                  for (f = {}; (t = qt.exec(s)); ) f[t[1].toLowerCase()] = t[2];
                t = f[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return 2 === x ? s : null;
            },
            setRequestHeader: function (e, t) {
              var n = e.toLowerCase();
              return x || ((e = b[n] = b[n] || e), (v[e] = t)), this;
            },
            overrideMimeType: function (e) {
              return x || (p.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (x < 2) for (t in e) y[t] = [y[t], e[t]];
                else w.always(e[w.status]);
              return this;
            },
            abort: function (e) {
              var t = e || T;
              return c && c.abort(t), r(0, t), this;
            },
          };
        if (
          ((m.promise(w).complete = g.add),
          (w.success = w.done),
          (w.error = w.fail),
          (p.url = ((e || p.url || $t) + "")
            .replace(Ft, "")
            .replace(Bt, jt[1] + "//")),
          (p.type = n.method || n.type || p.method || p.type),
          (p.dataTypes = le
            .trim(p.dataType || "*")
            .toLowerCase()
            .match(ce) || [""]),
          null == p.crossDomain &&
            ((i = Pt.exec(p.url.toLowerCase())),
            (p.crossDomain = !(
              !i ||
              (i[1] === jt[1] &&
                i[2] === jt[2] &&
                (i[3] || ("http:" === i[1] ? 80 : 443)) ==
                  (jt[3] || ("http:" === jt[1] ? 80 : 443)))
            ))),
          p.data &&
            p.processData &&
            "string" != typeof p.data &&
            (p.data = le.param(p.data, p.traditional)),
          $(Rt, p, n, w),
          2 === x)
        )
          return w;
        (u = p.global),
          u && 0 == le.active++ && le.event.trigger("ajaxStart"),
          (p.type = p.type.toUpperCase()),
          (p.hasContent = !_t.test(p.type)),
          (a = p.url),
          p.hasContent ||
            (p.data &&
              ((a = p.url += (Ht.test(a) ? "&" : "?") + p.data), delete p.data),
            !1 === p.cache &&
              (p.url = Mt.test(a)
                ? a.replace(Mt, "$1_=" + Lt++)
                : a + (Ht.test(a) ? "&" : "?") + "_=" + Lt++)),
          p.ifModified &&
            (le.lastModified[a] &&
              w.setRequestHeader("If-Modified-Since", le.lastModified[a]),
            le.etag[a] && w.setRequestHeader("If-None-Match", le.etag[a])),
          ((p.data && p.hasContent && !1 !== p.contentType) || n.contentType) &&
            w.setRequestHeader("Content-Type", p.contentType),
          w.setRequestHeader(
            "Accept",
            p.dataTypes[0] && p.accepts[p.dataTypes[0]]
              ? p.accepts[p.dataTypes[0]] +
                  ("*" !== p.dataTypes[0] ? ", " + zt + "; q=0.01" : "")
              : p.accepts["*"]
          );
        for (o in p.headers) w.setRequestHeader(o, p.headers[o]);
        if (p.beforeSend && (!1 === p.beforeSend.call(d, w, p) || 2 === x))
          return w.abort();
        T = "abort";
        for (o in { success: 1, error: 1, complete: 1 }) w[o](p[o]);
        if ((c = $(It, p, n, w))) {
          (w.readyState = 1),
            u && h.trigger("ajaxSend", [w, p]),
            p.async &&
              p.timeout > 0 &&
              (l = setTimeout(function () {
                w.abort("timeout");
              }, p.timeout));
          try {
            (x = 1), c.send(v, r);
          } catch (e) {
            if (!(x < 2)) throw e;
            r(-1, e);
          }
        } else r(-1, "No Transport");
        return w;
      },
      getScript: function (e, n) {
        return le.get(e, t, n, "script");
      },
      getJSON: function (e, t, n) {
        return le.get(e, t, n, "json");
      },
    }),
    le.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function (e) {
          return le.globalEval(e), e;
        },
      },
    }),
    le.ajaxPrefilter("script", function (e) {
      e.cache === t && (e.cache = !1),
        e.crossDomain && ((e.type = "GET"), (e.global = !1));
    }),
    le.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var n,
          r = Y.head || le("head")[0] || Y.documentElement;
        return {
          send: function (t, i) {
            (n = Y.createElement("script")),
              (n.async = !0),
              e.scriptCharset && (n.charset = e.scriptCharset),
              (n.src = e.url),
              (n.onload = n.onreadystatechange =
                function (e, t) {
                  (t ||
                    !n.readyState ||
                    /loaded|complete/.test(n.readyState)) &&
                    ((n.onload = n.onreadystatechange = null),
                    n.parentNode && n.parentNode.removeChild(n),
                    (n = null),
                    t || i(200, "success"));
                }),
              r.insertBefore(n, r.firstChild);
          },
          abort: function () {
            n && n.onload(t, !0);
          },
        };
      }
    });
  var Xt = [],
    Ut = /(=)\?(?=&|$)|\?\?/;
  le.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Xt.pop() || le.expando + "_" + Lt++;
      return (this[e] = !0), e;
    },
  }),
    le.ajaxPrefilter("json jsonp", function (n, r, i) {
      var o,
        a,
        s,
        l =
          !1 !== n.jsonp &&
          (Ut.test(n.url)
            ? "url"
            : "string" == typeof n.data &&
              !(n.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              Ut.test(n.data) &&
              "data");
      if (l || "jsonp" === n.dataTypes[0])
        return (
          (o = n.jsonpCallback =
            le.isFunction(n.jsonpCallback)
              ? n.jsonpCallback()
              : n.jsonpCallback),
          l
            ? (n[l] = n[l].replace(Ut, "$1" + o))
            : !1 !== n.jsonp &&
              (n.url += (Ht.test(n.url) ? "&" : "?") + n.jsonp + "=" + o),
          (n.converters["script json"] = function () {
            return s || le.error(o + " was not called"), s[0];
          }),
          (n.dataTypes[0] = "json"),
          (a = e[o]),
          (e[o] = function () {
            s = arguments;
          }),
          i.always(function () {
            (e[o] = a),
              n[o] && ((n.jsonpCallback = r.jsonpCallback), Xt.push(o)),
              s && le.isFunction(a) && a(s[0]),
              (s = a = t);
          }),
          "script"
        );
    });
  var Vt,
    Yt,
    Gt = 0,
    Qt =
      e.ActiveXObject &&
      function () {
        var e;
        for (e in Vt) Vt[e](t, !0);
      };
  (le.ajaxSettings.xhr = e.ActiveXObject
    ? function () {
        return (!this.isLocal && M()) || q();
      }
    : M),
    (Yt = le.ajaxSettings.xhr()),
    (le.support.cors = !!Yt && "withCredentials" in Yt),
    (Yt = le.support.ajax = !!Yt) &&
      le.ajaxTransport(function (n) {
        if (!n.crossDomain || le.support.cors) {
          var r;
          return {
            send: function (i, o) {
              var a,
                s,
                l = n.xhr();
              if (
                (n.username
                  ? l.open(n.type, n.url, n.async, n.username, n.password)
                  : l.open(n.type, n.url, n.async),
                n.xhrFields)
              )
                for (s in n.xhrFields) l[s] = n.xhrFields[s];
              n.mimeType &&
                l.overrideMimeType &&
                l.overrideMimeType(n.mimeType),
                n.crossDomain ||
                  i["X-Requested-With"] ||
                  (i["X-Requested-With"] = "XMLHttpRequest");
              try {
                for (s in i) l.setRequestHeader(s, i[s]);
              } catch (e) {}
              l.send((n.hasContent && n.data) || null),
                (r = function (e, i) {
                  var s, u, c, f;
                  try {
                    if (r && (i || 4 === l.readyState))
                      if (
                        ((r = t),
                        a &&
                          ((l.onreadystatechange = le.noop),
                          Qt && delete Vt[a]),
                        i)
                      )
                        4 !== l.readyState && l.abort();
                      else {
                        (f = {}),
                          (s = l.status),
                          (u = l.getAllResponseHeaders()),
                          "string" == typeof l.responseText &&
                            (f.text = l.responseText);
                        try {
                          c = l.statusText;
                        } catch (e) {
                          c = "";
                        }
                        s || !n.isLocal || n.crossDomain
                          ? 1223 === s && (s = 204)
                          : (s = f.text ? 200 : 404);
                      }
                  } catch (e) {
                    i || o(-1, e);
                  }
                  f && o(s, c, f, u);
                }),
                n.async
                  ? 4 === l.readyState
                    ? setTimeout(r)
                    : ((a = ++Gt),
                      Qt && (Vt || ((Vt = {}), le(e).unload(Qt)), (Vt[a] = r)),
                      (l.onreadystatechange = r))
                  : r();
            },
            abort: function () {
              r && r(t, !0);
            },
          };
        }
      });
  var Jt,
    Kt,
    Zt = /^(?:toggle|show|hide)$/,
    en = new RegExp("^(?:([+-])=|)(" + ue + ")([a-z%]*)$", "i"),
    tn = /queueHooks$/,
    nn = [W],
    rn = {
      "*": [
        function (e, t) {
          var n,
            r,
            i = this.createTween(e, t),
            o = en.exec(t),
            a = i.cur(),
            s = +a || 0,
            l = 1,
            u = 20;
          if (o) {
            if (
              ((n = +o[2]),
              "px" !== (r = o[3] || (le.cssNumber[e] ? "" : "px")) && s)
            ) {
              s = le.css(i.elem, e, !0) || n || 1;
              do {
                (l = l || ".5"), (s /= l), le.style(i.elem, e, s + r);
              } while (l !== (l = i.cur() / a) && 1 !== l && --u);
            }
            (i.unit = r),
              (i.start = s),
              (i.end = o[1] ? s + (o[1] + 1) * n : n);
          }
          return i;
        },
      ],
    };
  (le.Animation = le.extend(B, {
    tweener: function (e, t) {
      le.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]), (rn[n] = rn[n] || []), rn[n].unshift(t);
    },
    prefilter: function (e, t) {
      t ? nn.unshift(e) : nn.push(e);
    },
  })),
    (le.Tween = R),
    (R.prototype = {
      constructor: R,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || "swing"),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (le.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = R.propHooks[this.prop];
        return e && e.get ? e.get(this) : R.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = R.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                le.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : R.propHooks._default.set(this),
          this
        );
      },
    }),
    (R.prototype.init.prototype = R.prototype),
    (R.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return null == e.elem[e.prop] ||
            (e.elem.style && null != e.elem.style[e.prop])
            ? ((t = le.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0)
            : e.elem[e.prop];
        },
        set: function (e) {
          le.fx.step[e.prop]
            ? le.fx.step[e.prop](e)
            : e.elem.style &&
              (null != e.elem.style[le.cssProps[e.prop]] || le.cssHooks[e.prop])
            ? le.style(e.elem, e.prop, e.now + e.unit)
            : (e.elem[e.prop] = e.now);
        },
      },
    }),
    (R.propHooks.scrollTop = R.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    le.each(["toggle", "show", "hide"], function (e, t) {
      var n = le.fn[t];
      le.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(I(t, !0), e, r, i);
      };
    }),
    le.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(w)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = le.isEmptyObject(e),
          o = le.speed(t, n, r),
          a = function () {
            var t = B(this, le.extend({}, e), o);
            (a.finish = function () {
              t.stop(!0);
            }),
              (i || le._data(this, "finish")) && t.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (e, n, r) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(r);
        };
        return (
          "string" != typeof e && ((r = n), (n = e), (e = t)),
          n && !1 !== e && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              n = null != e && e + "queueHooks",
              o = le.timers,
              a = le._data(this);
            if (n) a[n] && a[n].stop && i(a[n]);
            else for (n in a) a[n] && a[n].stop && tn.test(n) && i(a[n]);
            for (n = o.length; n--; )
              o[n].elem !== this ||
                (null != e && o[n].queue !== e) ||
                (o[n].anim.stop(r), (t = !1), o.splice(n, 1));
            (!t && r) || le.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = le._data(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              o = le.timers,
              a = r ? r.length : 0;
            for (
              n.finish = !0,
                le.queue(this, e, []),
                i && i.cur && i.cur.finish && i.cur.finish.call(this),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < a; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    le.each(
      {
        slideDown: I("show"),
        slideUp: I("hide"),
        slideToggle: I("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        le.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    (le.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? le.extend({}, e)
          : {
              complete: n || (!n && t) || (le.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !le.isFunction(t) && t),
            };
      return (
        (r.duration = le.fx.off
          ? 0
          : "number" == typeof r.duration
          ? r.duration
          : r.duration in le.fx.speeds
          ? le.fx.speeds[r.duration]
          : le.fx.speeds._default),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          le.isFunction(r.old) && r.old.call(this),
            r.queue && le.dequeue(this, r.queue);
        }),
        r
      );
    }),
    (le.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
    }),
    (le.timers = []),
    (le.fx = R.prototype.init),
    (le.fx.tick = function () {
      var e,
        n = le.timers,
        r = 0;
      for (Jt = le.now(); r < n.length; r++)
        (e = n[r])() || n[r] !== e || n.splice(r--, 1);
      n.length || le.fx.stop(), (Jt = t);
    }),
    (le.fx.timer = function (e) {
      e() && le.timers.push(e) && le.fx.start();
    }),
    (le.fx.interval = 13),
    (le.fx.start = function () {
      Kt || (Kt = setInterval(le.fx.tick, le.fx.interval));
    }),
    (le.fx.stop = function () {
      clearInterval(Kt), (Kt = null);
    }),
    (le.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (le.fx.step = {}),
    le.expr &&
      le.expr.filters &&
      (le.expr.filters.animated = function (e) {
        return le.grep(le.timers, function (t) {
          return e === t.elem;
        }).length;
      }),
    (le.fn.offset = function (e) {
      if (arguments.length)
        return e === t
          ? this
          : this.each(function (t) {
              le.offset.setOffset(this, e, t);
            });
      var n,
        r,
        i = { top: 0, left: 0 },
        o = this[0],
        a = o && o.ownerDocument;
      if (a)
        return (
          (n = a.documentElement),
          le.contains(n, o)
            ? (typeof o.getBoundingClientRect !== V &&
                (i = o.getBoundingClientRect()),
              (r = z(a)),
              {
                top:
                  i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left:
                  i.left +
                  (r.pageXOffset || n.scrollLeft) -
                  (n.clientLeft || 0),
              })
            : i
        );
    }),
    (le.offset = {
      setOffset: function (e, t, n) {
        var r = le.css(e, "position");
        "static" === r && (e.style.position = "relative");
        var i,
          o,
          a = le(e),
          s = a.offset(),
          l = le.css(e, "top"),
          u = le.css(e, "left"),
          c =
            ("absolute" === r || "fixed" === r) &&
            le.inArray("auto", [l, u]) > -1,
          f = {},
          p = {};
        c
          ? ((p = a.position()), (i = p.top), (o = p.left))
          : ((i = parseFloat(l) || 0), (o = parseFloat(u) || 0)),
          le.isFunction(t) && (t = t.call(e, n, s)),
          null != t.top && (f.top = t.top - s.top + i),
          null != t.left && (f.left = t.left - s.left + o),
          "using" in t ? t.using.call(e, f) : a.css(f);
      },
    }),
    le.fn.extend({
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = { top: 0, left: 0 },
            r = this[0];
          return (
            "fixed" === le.css(r, "position")
              ? (t = r.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                le.nodeName(e[0], "html") || (n = e.offset()),
                (n.top += le.css(e[0], "borderTopWidth", !0)),
                (n.left += le.css(e[0], "borderLeftWidth", !0))),
            {
              top: t.top - n.top - le.css(r, "marginTop", !0),
              left: t.left - n.left - le.css(r, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent || Y.documentElement;
            e && !le.nodeName(e, "html") && "static" === le.css(e, "position");

          )
            e = e.offsetParent;
          return e || Y.documentElement;
        });
      },
    }),
    le.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, n) {
        var r = /Y/.test(n);
        le.fn[e] = function (i) {
          return le.access(
            this,
            function (e, i, o) {
              var a = z(e);
              if (o === t)
                return a
                  ? n in a
                    ? a[n]
                    : a.document.documentElement[i]
                  : e[i];
              a
                ? a.scrollTo(
                    r ? le(a).scrollLeft() : o,
                    r ? o : le(a).scrollTop()
                  )
                : (e[i] = o);
            },
            e,
            i,
            arguments.length,
            null
          );
        };
      }
    ),
    le.each({ Height: "height", Width: "width" }, function (e, n) {
      le.each(
        { padding: "inner" + e, content: n, "": "outer" + e },
        function (r, i) {
          le.fn[i] = function (i, o) {
            var a = arguments.length && (r || "boolean" != typeof i),
              s = r || (!0 === i || !0 === o ? "margin" : "border");
            return le.access(
              this,
              function (n, r, i) {
                var o;
                return le.isWindow(n)
                  ? n.document.documentElement["client" + e]
                  : 9 === n.nodeType
                  ? ((o = n.documentElement),
                    Math.max(
                      n.body["scroll" + e],
                      o["scroll" + e],
                      n.body["offset" + e],
                      o["offset" + e],
                      o["client" + e]
                    ))
                  : i === t
                  ? le.css(n, r, s)
                  : le.style(n, r, i, s);
              },
              n,
              a ? i : t,
              a,
              null
            );
          };
        }
      );
    }),
    (e.jQuery = e.$ = le),
    "function" == typeof define &&
      define.amd &&
      define.amd.jQuery &&
      define("jquery", [], function () {
        return le;
      });
})(window),
  (function (e) {
    "use strict";
    function t() {
      var e = document.createElement("bootstrap"),
        t = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var n in t) if (e.style[n] !== undefined) return { end: t[n] };
    }
    (e.fn.emulateTransitionEnd = function (t) {
      var n = !1,
        r = this;
      e(this).one(e.support.transition.end, function () {
        n = !0;
      });
      var i = function () {
        n || e(r).trigger(e.support.transition.end);
      };
      return setTimeout(i, t), this;
    }),
      e(function () {
        e.support.transition = t();
      });
  })(jQuery),
  (function (e) {
    "use strict";
    function t(n, r) {
      var i,
        o = e.proxy(this.process, this);
      (this.$element = e(e(n).is("body") ? window : n)),
        (this.$body = e("body")),
        (this.$scrollElement = this.$element.on(
          "scroll.bs.scroll-spy.data-api",
          o
        )),
        (this.options = e.extend({}, t.DEFAULTS, r)),
        (this.selector =
          (this.options.target ||
            ((i = e(n).attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "")) ||
            "") + " .nav li > a"),
        (this.offsets = e([])),
        (this.targets = e([])),
        (this.activeTarget = null),
        this.refresh(),
        this.process();
    }
    (t.DEFAULTS = { offset: 10 }),
      (t.prototype.refresh = function () {
        var t = this.$element[0] == window ? "offset" : "position";
        (this.offsets = e([])), (this.targets = e([]));
        var n = this;
        this.$body
          .find(this.selector)
          .map(function () {
            var r = e(this),
              i = r.data("target") || r.attr("href"),
              o = /^#\w/.test(i) && e(i);
            return (
              (o &&
                o.length && [
                  [
                    o[t]().top +
                      (!e.isWindow(n.$scrollElement.get(0)) &&
                        n.$scrollElement.scrollTop()),
                    i,
                  ],
                ]) ||
              null
            );
          })
          .sort(function (e, t) {
            return e[0] - t[0];
          })
          .each(function () {
            n.offsets.push(this[0]), n.targets.push(this[1]);
          });
      }),
      (t.prototype.process = function () {
        var e,
          t = this.$scrollElement.scrollTop() + this.options.offset,
          n = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
          r = n - this.$scrollElement.height(),
          i = this.offsets,
          o = this.targets,
          a = this.activeTarget;
        if (t >= r) return a != (e = o.last()[0]) && this.activate(e);
        for (e = i.length; e--; )
          a != o[e] &&
            t >= i[e] &&
            (!i[e + 1] || t <= i[e + 1]) &&
            this.activate(o[e]);
      }),
      (t.prototype.activate = function (t) {
        (this.activeTarget = t),
          e(this.selector).parents(".active").removeClass("active");
        var n =
            this.selector +
            '[data-target="' +
            t +
            '"],' +
            this.selector +
            '[href="' +
            t +
            '"]',
          r = e(n).parents("li").addClass("active");
        r.parent(".dropdown-menu").length &&
          (r = r.closest("li.dropdown").addClass("active")),
          r.trigger("activate");
      });
    var n = e.fn.scrollspy;
    (e.fn.scrollspy = function (n) {
      return this.each(function () {
        var r = e(this),
          i = r.data("bs.scrollspy"),
          o = "object" == typeof n && n;
        i || r.data("bs.scrollspy", (i = new t(this, o))),
          "string" == typeof n && i[n]();
      });
    }),
      (e.fn.scrollspy.Constructor = t),
      (e.fn.scrollspy.noConflict = function () {
        return (e.fn.scrollspy = n), this;
      }),
      e(window).on("load", function () {
        e('[data-spy="scroll"]').each(function () {
          var t = e(this);
          t.scrollspy(t.data());
        });
      });
  })(jQuery),
  (function (e) {
    "use strict";
    var t = function (n, r) {
      (this.$element = e(n)),
        (this.options = e.extend({}, t.DEFAULTS, r)),
        (this.transitioning = null),
        this.options.parent && (this.$parent = e(this.options.parent)),
        this.options.toggle && this.toggle();
    };
    (t.DEFAULTS = { toggle: !0 }),
      (t.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height";
      }),
      (t.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var t = e.Event("show.bs.collapse");
          if ((this.$element.trigger(t), !t.isDefaultPrevented())) {
            var n = this.$parent && this.$parent.find("> .panel > .in");
            if (n && n.length) {
              var r = n.data("bs.collapse");
              if (r && r.transitioning) return;
              n.collapse("hide"), r || n.data("bs.collapse", null);
            }
            var i = this.dimension();
            this.$element.removeClass("collapse").addClass("collapsing")[i](0),
              (this.transitioning = 1);
            var o = function () {
              this.$element.removeClass("collapsing").addClass("in")[i]("auto"),
                (this.transitioning = 0),
                this.$element.trigger("shown.bs.collapse");
            };
            if (!e.support.transition) return o.call(this);
            var a = e.camelCase(["scroll", i].join("-"));
            this.$element
              .one(e.support.transition.end, e.proxy(o, this))
              .emulateTransitionEnd(350)
              [i](this.$element[0][a]);
          }
        }
      }),
      (t.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var t = e.Event("hide.bs.collapse");
          if ((this.$element.trigger(t), !t.isDefaultPrevented())) {
            var n = this.dimension();
            this.$element[n](this.$element[n]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse")
                .removeClass("in"),
              (this.transitioning = 1);
            var r = function () {
              (this.transitioning = 0),
                this.$element
                  .trigger("hidden.bs.collapse")
                  .removeClass("collapsing")
                  .addClass("collapse");
            };
            if (!e.support.transition) return r.call(this);
            this.$element[n](0)
              .one(e.support.transition.end, e.proxy(r, this))
              .emulateTransitionEnd(350);
          }
        }
      }),
      (t.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      });
    var n = e.fn.collapse;
    (e.fn.collapse = function (n) {
      return this.each(function () {
        var r = e(this),
          i = r.data("bs.collapse"),
          o = e.extend({}, t.DEFAULTS, r.data(), "object" == typeof n && n);
        i || r.data("bs.collapse", (i = new t(this, o))),
          "string" == typeof n && i[n]();
      });
    }),
      (e.fn.collapse.Constructor = t),
      (e.fn.collapse.noConflict = function () {
        return (e.fn.collapse = n), this;
      }),
      e(document).on(
        "click.bs.collapse.data-api",
        "[data-toggle=collapse]",
        function (t) {
          var n,
            r = e(this),
            i =
              r.attr("data-target") ||
              t.preventDefault() ||
              ((n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")),
            o = e(i),
            a = o.data("bs.collapse"),
            s = a ? "toggle" : r.data(),
            l = r.attr("data-parent"),
            u = l && e(l);
          (a && a.transitioning) ||
            (u &&
              u
                .find('[data-toggle=collapse][data-parent="' + l + '"]')
                .not(r)
                .addClass("collapsed"),
            r[o.hasClass("in") ? "addClass" : "removeClass"]("collapsed")),
            o.collapse(s);
        }
      );
  })(jQuery),
  (function (e) {
    "use strict";
    var t = function (t, n) {
      (this.options = n),
        (this.$element = e(t)),
        (this.$backdrop = this.isShown = null),
        this.options.remote && this.$element.load(this.options.remote);
    };
    (t.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (t.prototype.toggle = function (e) {
        return this[this.isShown ? "hide" : "show"](e);
      }),
      (t.prototype.show = function (t) {
        var n = this,
          r = e.Event("show.bs.modal", { relatedTarget: t });
        this.$element.trigger(r),
          this.isShown ||
            r.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.escape(),
            this.$element.on(
              "click.dismiss.modal",
              '[data-dismiss="modal"]',
              e.proxy(this.hide, this)
            ),
            this.backdrop(function () {
              var r = e.support.transition && n.$element.hasClass("fade");
              n.$element.parent().length || n.$element.appendTo(document.body),
                n.$element.show(),
                r && n.$element[0].offsetWidth,
                n.$element.addClass("in").attr("aria-hidden", !1),
                n.enforceFocus();
              var i = e.Event("shown.bs.modal", { relatedTarget: t });
              r
                ? n.$element
                    .find(".modal-dialog")
                    .one(e.support.transition.end, function () {
                      n.$element.focus().trigger(i);
                    })
                    .emulateTransitionEnd(300)
                : n.$element.focus().trigger(i);
            }));
      }),
      (t.prototype.hide = function (t) {
        t && t.preventDefault(),
          (t = e.Event("hide.bs.modal")),
          this.$element.trigger(t),
          this.isShown &&
            !t.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            e(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .attr("aria-hidden", !0)
              .off("click.dismiss.modal"),
            e.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one(e.support.transition.end, e.proxy(this.hideModal, this))
                  .emulateTransitionEnd(300)
              : this.hideModal());
      }),
      (t.prototype.enforceFocus = function () {
        e(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            e.proxy(function (e) {
              this.$element[0] === e.target ||
                this.$element.has(e.target).length ||
                this.$element.focus();
            }, this)
          );
      }),
      (t.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keyup.dismiss.bs.modal",
              e.proxy(function (e) {
                27 == e.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keyup.dismiss.bs.modal");
      }),
      (t.prototype.hideModal = function () {
        var e = this;
        this.$element.hide(),
          this.backdrop(function () {
            e.removeBackdrop(), e.$element.trigger("hidden.bs.modal");
          });
      }),
      (t.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (t.prototype.backdrop = function (t) {
        var n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var r = e.support.transition && n;
          if (
            ((this.$backdrop = e(
              '<div class="modal-backdrop ' + n + '" />'
            ).appendTo(document.body)),
            this.$element.on(
              "click.dismiss.modal",
              e.proxy(function (e) {
                e.target === e.currentTarget &&
                  ("static" == this.options.backdrop
                    ? this.$element[0].focus.call(this.$element[0])
                    : this.hide.call(this));
              }, this)
            ),
            r && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !t)
          )
            return;
          r
            ? this.$backdrop
                .one(e.support.transition.end, t)
                .emulateTransitionEnd(150)
            : t();
        } else
          !this.isShown && this.$backdrop
            ? (this.$backdrop.removeClass("in"),
              e.support.transition && this.$element.hasClass("fade")
                ? this.$backdrop
                    .one(e.support.transition.end, t)
                    .emulateTransitionEnd(150)
                : t())
            : t && t();
      });
    var n = e.fn.modal;
    (e.fn.modal = function (n, r) {
      return this.each(function () {
        var i = e(this),
          o = i.data("bs.modal"),
          a = e.extend({}, t.DEFAULTS, i.data(), "object" == typeof n && n);
        o || i.data("bs.modal", (o = new t(this, a))),
          "string" == typeof n ? o[n](r) : a.show && o.show(r);
      });
    }),
      (e.fn.modal.Constructor = t),
      (e.fn.modal.noConflict = function () {
        return (e.fn.modal = n), this;
      }),
      e(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (t) {
          var n = e(this),
            r = n.attr("href"),
            i = e(
              n.attr("data-target") || (r && r.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            o = i.data("modal")
              ? "toggle"
              : e.extend({ remote: !/#/.test(r) && r }, i.data(), n.data());
          t.preventDefault(),
            i.modal(o, this).one("hide", function () {
              n.is(":visible") && n.focus();
            });
        }
      ),
      e(document)
        .on("show.bs.modal", ".modal", function () {
          e(document.body).addClass("modal-open");
        })
        .on("hidden.bs.modal", ".modal", function () {
          e(document.body).removeClass("modal-open");
        });
  })(jQuery)
  /*!
   * skrollr core
   *
   * Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr
   *
   * Free to use under terms of MIT license
   */,
  (function (e, t, n) {
    "use strict";
    function r(n) {
      if (
        ((i = t.documentElement),
        (o = t.body),
        I(),
        (oe = this),
        (n = n || {}),
        (ce = n.constants || {}),
        n.easing)
      )
        for (var r in n.easing) U[r] = n.easing[r];
      (ye = n.edgeStrategy || "set"),
        (le = {
          beforerender: n.beforerender,
          render: n.render,
          keyframe: n.keyframe,
        }),
        (ue = !1 !== n.forceHeight),
        ue && (Fe = n.scale || 1),
        (fe = n.mobileDeceleration || C),
        (de = !1 !== n.smoothScrolling),
        (he = n.smoothScrollingDuration || E),
        (me = { targetTop: oe.getScrollTop() }),
        (Re = (
          n.mobileCheck ||
          function () {
            return /Android|iPhone|iPad|iPod|BlackBerry/i.test(
              navigator.userAgent || navigator.vendor || e.opera
            );
          }
        )()),
        Re
          ? ((se = t.getElementById(n.skrollrBody || k)),
            se && ie(),
            V(),
            Ae(i, [v, T], [b]))
          : Ae(i, [v, x], [b]),
        oe.refresh(),
        xe(e, "resize orientationchange", function () {
          var e = i.clientWidth,
            t = i.clientHeight;
          (t === Be && e === _e) || ((Be = t), (_e = e), (Pe = !0));
        });
      var a = z();
      return (
        (function e() {
          Q(), (be = a(e));
        })(),
        oe
      );
    }
    var i,
      o,
      a = {
        get: function () {
          return oe;
        },
        init: function (e) {
          return oe || new r(e);
        },
        VERSION: "0.6.29",
      },
      s = Object.prototype.hasOwnProperty,
      l = e.Math,
      u = e.getComputedStyle,
      c = "touchstart",
      f = "touchmove",
      p = "touchcancel",
      d = "touchend",
      h = "skrollable",
      m = h + "-before",
      g = h + "-between",
      y = h + "-after",
      v = "skrollr",
      b = "no-" + v,
      x = v + "-desktop",
      T = v + "-mobile",
      w = "linear",
      C = 0.004,
      k = "skrollr-body",
      E = 200,
      N = "end",
      S = "center",
      A = "bottom",
      D = "___skrollable_id",
      j = /^(?:input|textarea|button|select)$/i,
      $ = /^\s+|\s+$/g,
      L =
        /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
      H = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
      F = /^(@?[a-z\-]+)\[(\w+)\]$/,
      M = /-([a-z0-9_])/g,
      q = function (e, t) {
        return t.toUpperCase();
      },
      O = /[\-+]?[\d]*\.?[\d]+/g,
      _ = /\{\?\}/g,
      B = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
      P = /[a-z\-]+-gradient/g,
      W = "",
      R = "",
      I = function () {
        var e = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
        if (u) {
          var t = u(o, null);
          for (var n in t)
            if ((W = n.match(e) || (+n == n && t[n].match(e)))) break;
          if (!W) return void (W = R = "");
          (W = W[0]),
            "-" === W.slice(0, 1)
              ? ((R = W),
                (W = {
                  "-webkit-": "webkit",
                  "-moz-": "Moz",
                  "-ms-": "ms",
                  "-o-": "O",
                }[W]))
              : (R = "-" + W.toLowerCase() + "-");
        }
      },
      z = function () {
        var t =
            e.requestAnimationFrame ||
            e[W.toLowerCase() + "RequestAnimationFrame"],
          n = $e();
        return (
          (!Re && t) ||
            (t = function (t) {
              var r = $e() - n,
                i = l.max(0, 1e3 / 60 - r);
              return e.setTimeout(function () {
                (n = $e()), t();
              }, i);
            }),
          t
        );
      },
      X = function () {
        var t =
          e.cancelAnimationFrame || e[W.toLowerCase() + "CancelAnimationFrame"];
        return (
          (!Re && t) ||
            (t = function (t) {
              return e.clearTimeout(t);
            }),
          t
        );
      },
      U = {
        begin: function () {
          return 0;
        },
        end: function () {
          return 1;
        },
        linear: function (e) {
          return e;
        },
        quadratic: function (e) {
          return e * e;
        },
        cubic: function (e) {
          return e * e * e;
        },
        swing: function (e) {
          return -l.cos(e * l.PI) / 2 + 0.5;
        },
        sqrt: function (e) {
          return l.sqrt(e);
        },
        outCubic: function (e) {
          return l.pow(e - 1, 3) + 1;
        },
        bounce: function (e) {
          var t;
          if (e <= 0.5083) t = 3;
          else if (e <= 0.8489) t = 9;
          else if (e <= 0.96208) t = 27;
          else {
            if (!(e <= 0.99981)) return 1;
            t = 91;
          }
          return 1 - l.abs((3 * l.cos(e * t * 1.028)) / t);
        },
      };
    (r.prototype.refresh = function (e) {
      var r,
        i,
        o = !1;
      for (
        e === n
          ? ((o = !0), (ae = []), (We = 0), (e = t.getElementsByTagName("*")))
          : e.length === n && (e = [e]),
          r = 0,
          i = e.length;
        r < i;
        r++
      ) {
        var a = e[r],
          s = a,
          l = [],
          u = de,
          c = ye,
          f = !1;
        if ((o && D in a && delete a[D], a.attributes)) {
          for (var p = 0, d = a.attributes.length; p < d; p++) {
            var m = a.attributes[p];
            if ("data-anchor-target" !== m.name)
              if ("data-smooth-scrolling" !== m.name)
                if ("data-edge-strategy" !== m.name)
                  if ("data-emit-events" !== m.name) {
                    var g = m.name.match(L);
                    if (null !== g) {
                      var y = {
                        props: m.value,
                        element: a,
                        eventType: m.name.replace(M, q),
                      };
                      l.push(y);
                      var v = g[1];
                      v && (y.constant = v.substr(1));
                      var b = g[2];
                      /p$/.test(b)
                        ? ((y.isPercentage = !0),
                          (y.offset = (0 | b.slice(0, -1)) / 100))
                        : (y.offset = 0 | b);
                      var x = g[3],
                        T = g[4] || x;
                      x && "start" !== x && x !== N
                        ? ((y.mode = "relative"), (y.anchors = [x, T]))
                        : ((y.mode = "absolute"),
                          x === N
                            ? (y.isEnd = !0)
                            : y.isPercentage || (y.offset = y.offset * Fe));
                    }
                  } else f = !0;
                else c = m.value;
              else u = "off" !== m.value;
            else if (null === (s = t.querySelector(m.value)))
              throw 'Unable to find anchor target "' + m.value + '"';
          }
          if (l.length) {
            var w, C, k;
            !o && D in a
              ? ((k = a[D]), (w = ae[k].styleAttr), (C = ae[k].classAttr))
              : ((k = a[D] = We++), (w = a.style.cssText), (C = Se(a))),
              (ae[k] = {
                element: a,
                styleAttr: w,
                classAttr: C,
                anchorTarget: s,
                keyFrames: l,
                smoothScrolling: u,
                edgeStrategy: c,
                emitEvents: f,
                lastFrameIndex: -1,
              }),
              Ae(a, [h], []);
          }
        }
      }
      for (ke(), r = 0, i = e.length; r < i; r++) {
        var E = ae[e[r][D]];
        E !== n && (J(E), Z(E));
      }
      return oe;
    }),
      (r.prototype.relativeToAbsolute = function (e, t, n) {
        var r = i.clientHeight,
          o = e.getBoundingClientRect(),
          a = o.top,
          s = o.bottom - o.top;
        return (
          t === A ? (a -= r) : t === S && (a -= r / 2),
          n === A ? (a += s) : n === S && (a += s / 2),
          ((a += oe.getScrollTop()) + 0.5) | 0
        );
      }),
      (r.prototype.animateTo = function (e, t) {
        t = t || {};
        var r = $e(),
          i = oe.getScrollTop(),
          o = t.duration === n ? 1e3 : t.duration;
        return (
          (pe = {
            startTop: i,
            topDiff: e - i,
            targetTop: e,
            duration: o,
            startTime: r,
            endTime: r + o,
            easing: U[t.easing || w],
            done: t.done,
          }),
          pe.topDiff || (pe.done && pe.done.call(oe, !1), (pe = n)),
          oe
        );
      }),
      (r.prototype.stopAnimateTo = function () {
        pe && pe.done && pe.done.call(oe, !0), (pe = n);
      }),
      (r.prototype.isAnimatingTo = function () {
        return !!pe;
      }),
      (r.prototype.isMobile = function () {
        return Re;
      }),
      (r.prototype.setScrollTop = function (t, n) {
        return (
          (ge = !0 === n),
          Re ? (Ie = l.min(l.max(t, 0), He)) : e.scrollTo(0, t),
          oe
        );
      }),
      (r.prototype.getScrollTop = function () {
        return Re ? Ie : e.pageYOffset || i.scrollTop || o.scrollTop || 0;
      }),
      (r.prototype.getMaxScrollTop = function () {
        return He;
      }),
      (r.prototype.on = function (e, t) {
        return (le[e] = t), oe;
      }),
      (r.prototype.off = function (e) {
        return delete le[e], oe;
      }),
      (r.prototype.destroy = function () {
        X()(be), we(), Ae(i, [b], [v, x, T]);
        for (var e = 0, t = ae.length; e < t; e++) re(ae[e].element);
        (i.style.overflow = o.style.overflow = ""),
          (i.style.height = o.style.height = ""),
          se && a.setStyle(se, "transform", "none"),
          (oe = n),
          (se = n),
          (le = n),
          (ue = n),
          (He = 0),
          (Fe = 1),
          (ce = n),
          (fe = n),
          (Me = "down"),
          (qe = -1),
          (_e = 0),
          (Be = 0),
          (Pe = !1),
          (pe = n),
          (de = n),
          (he = n),
          (me = n),
          (ge = n),
          (We = 0),
          (ye = n),
          (Re = !1),
          (Ie = 0),
          (ve = n);
      });
    var V = function () {
        var r, a, s, u, h, m, g, y, v, b, x, T;
        xe(i, [c, f, p, d].join(" "), function (e) {
          var i = e.changedTouches[0];
          for (u = e.target; 3 === u.nodeType; ) u = u.parentNode;
          switch (
            ((h = i.clientY),
            (m = i.clientX),
            (b = e.timeStamp),
            j.test(u.tagName) || e.preventDefault(),
            e.type)
          ) {
            case c:
              r && r.blur(),
                oe.stopAnimateTo(),
                (r = u),
                (a = g = h),
                (s = m),
                (v = b);
              break;
            case f:
              j.test(u.tagName) && t.activeElement !== u && e.preventDefault(),
                (y = h - g),
                (T = b - x),
                oe.setScrollTop(Ie - y, !0),
                (g = h),
                (x = b);
              break;
            default:
            case p:
            case d:
              var o = a - h,
                w = s - m;
              if (w * w + o * o < 49) {
                if (!j.test(r.tagName)) {
                  r.focus();
                  var C = t.createEvent("MouseEvents");
                  C.initMouseEvent(
                    "click",
                    !0,
                    !0,
                    e.view,
                    1,
                    i.screenX,
                    i.screenY,
                    i.clientX,
                    i.clientY,
                    e.ctrlKey,
                    e.altKey,
                    e.shiftKey,
                    e.metaKey,
                    0,
                    null
                  ),
                    r.dispatchEvent(C);
                }
                return;
              }
              r = n;
              var k = y / T;
              k = l.max(l.min(k, 3), -3);
              var E = l.abs(k / fe),
                N = k * E + 0.5 * fe * E * E,
                S = oe.getScrollTop() - N,
                A = 0;
              S > He
                ? ((A = (He - S) / N), (S = He))
                : S < 0 && ((A = -S / N), (S = 0)),
                (E *= 1 - A),
                oe.animateTo((S + 0.5) | 0, {
                  easing: "outCubic",
                  duration: E,
                });
          }
        }),
          e.scrollTo(0, 0),
          (i.style.overflow = o.style.overflow = "hidden");
      },
      Y = function () {
        var e,
          t,
          n,
          r,
          o,
          a,
          s,
          u,
          c,
          f,
          p,
          d = i.clientHeight,
          h = Ee();
        for (u = 0, c = ae.length; u < c; u++)
          for (
            e = ae[u],
              t = e.element,
              n = e.anchorTarget,
              r = e.keyFrames,
              o = 0,
              a = r.length;
            o < a;
            o++
          )
            (s = r[o]),
              (f = s.offset),
              (p = h[s.constant] || 0),
              (s.frame = f),
              s.isPercentage && ((f *= d), (s.frame = f)),
              "relative" === s.mode &&
                (re(t),
                (s.frame =
                  oe.relativeToAbsolute(n, s.anchors[0], s.anchors[1]) - f),
                re(t, !0)),
              (s.frame += p),
              ue && !s.isEnd && s.frame > He && (He = s.frame);
        for (He = l.max(He, Ne()), u = 0, c = ae.length; u < c; u++) {
          for (e = ae[u], r = e.keyFrames, o = 0, a = r.length; o < a; o++)
            (s = r[o]),
              (p = h[s.constant] || 0),
              s.isEnd && (s.frame = He - s.offset + p);
          e.keyFrames.sort(Le);
        }
      },
      G = function (e, t) {
        for (var n = 0, r = ae.length; n < r; n++) {
          var i,
            o,
            l = ae[n],
            u = l.element,
            c = l.smoothScrolling ? e : t,
            f = l.keyFrames,
            p = f.length,
            d = f[0],
            v = f[f.length - 1],
            b = c < d.frame,
            x = c > v.frame,
            T = b ? d : v,
            w = l.emitEvents,
            C = l.lastFrameIndex;
          if (b || x) {
            if ((b && -1 === l.edge) || (x && 1 === l.edge)) continue;
            switch (
              (b
                ? (Ae(u, [m], [y, g]),
                  w &&
                    C > -1 &&
                    (Ce(u, d.eventType, Me), (l.lastFrameIndex = -1)))
                : (Ae(u, [y], [m, g]),
                  w &&
                    C < p &&
                    (Ce(u, v.eventType, Me), (l.lastFrameIndex = p))),
              (l.edge = b ? -1 : 1),
              l.edgeStrategy)
            ) {
              case "reset":
                re(u);
                continue;
              case "ease":
                c = T.frame;
                break;
              default:
              case "set":
                var k = T.props;
                for (i in k)
                  s.call(k, i) &&
                    ((o = ne(k[i].value)),
                    0 === i.indexOf("@")
                      ? u.setAttribute(i.substr(1), o)
                      : a.setStyle(u, i, o));
                continue;
            }
          } else 0 !== l.edge && (Ae(u, [h, g], [m, y]), (l.edge = 0));
          for (var E = 0; E < p - 1; E++)
            if (c >= f[E].frame && c <= f[E + 1].frame) {
              var N = f[E],
                S = f[E + 1];
              for (i in N.props)
                if (s.call(N.props, i)) {
                  var A = (c - N.frame) / (S.frame - N.frame);
                  (A = N.props[i].easing(A)),
                    (o = te(N.props[i].value, S.props[i].value, A)),
                    (o = ne(o)),
                    0 === i.indexOf("@")
                      ? u.setAttribute(i.substr(1), o)
                      : a.setStyle(u, i, o);
                }
              w &&
                C !== E &&
                ("down" === Me
                  ? Ce(u, N.eventType, Me)
                  : Ce(u, S.eventType, Me),
                (l.lastFrameIndex = E));
              break;
            }
        }
      },
      Q = function () {
        Pe && ((Pe = !1), ke());
        var e,
          t,
          r = oe.getScrollTop(),
          i = $e();
        if (pe)
          i >= pe.endTime
            ? ((r = pe.targetTop), (e = pe.done), (pe = n))
            : ((t = pe.easing((i - pe.startTime) / pe.duration)),
              (r = (pe.startTop + t * pe.topDiff) | 0)),
            oe.setScrollTop(r, !0);
        else if (!ge) {
          var o = me.targetTop - r;
          o &&
            (me = {
              startTop: qe,
              topDiff: r - qe,
              targetTop: r,
              startTime: Oe,
              endTime: Oe + he,
            }),
            i <= me.endTime &&
              ((t = U.sqrt((i - me.startTime) / he)),
              (r = (me.startTop + t * me.topDiff) | 0));
        }
        if (ge || qe !== r) {
          (Me = r > qe ? "down" : r < qe ? "up" : Me), (ge = !1);
          var s = { curTop: r, lastTop: qe, maxTop: He, direction: Me };
          !1 !== (le.beforerender && le.beforerender.call(oe, s)) &&
            (G(r, oe.getScrollTop()),
            Re &&
              se &&
              a.setStyle(se, "transform", "translate(0, " + -Ie + "px) " + ve),
            (qe = r),
            le.render && le.render.call(oe, s)),
            e && e.call(oe, !1);
        }
        Oe = i;
      },
      J = function (e) {
        for (var t = 0, n = e.keyFrames.length; t < n; t++) {
          for (
            var r, i, o, a, s = e.keyFrames[t], l = {};
            null !== (a = H.exec(s.props));

          )
            (o = a[1]),
              (i = a[2]),
              (r = o.match(F)),
              null !== r ? ((o = r[1]), (r = r[2])) : (r = w),
              (i = i.indexOf("!") ? K(i) : [i.slice(1)]),
              (l[o] = { value: i, easing: U[r] });
          s.props = l;
        }
      },
      K = function (e) {
        var t = [];
        return (
          (B.lastIndex = 0),
          (e = e.replace(B, function (e) {
            return e.replace(O, function (e) {
              return (e / 255) * 100 + "%";
            });
          })),
          R &&
            ((P.lastIndex = 0),
            (e = e.replace(P, function (e) {
              return R + e;
            }))),
          (e = e.replace(O, function (e) {
            return t.push(+e), "{?}";
          })),
          t.unshift(e),
          t
        );
      },
      Z = function (e) {
        var t,
          n,
          r = {};
        for (t = 0, n = e.keyFrames.length; t < n; t++) ee(e.keyFrames[t], r);
        for (r = {}, t = e.keyFrames.length - 1; t >= 0; t--)
          ee(e.keyFrames[t], r);
      },
      ee = function (e, t) {
        var n;
        for (n in t) s.call(e.props, n) || (e.props[n] = t[n]);
        for (n in e.props) t[n] = e.props[n];
      },
      te = function (e, t, n) {
        var r,
          i = e.length;
        if (i !== t.length)
          throw "Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"';
        var o = [e[0]];
        for (r = 1; r < i; r++) o[r] = e[r] + (t[r] - e[r]) * n;
        return o;
      },
      ne = function (e) {
        var t = 1;
        return (
          (_.lastIndex = 0),
          e[0].replace(_, function () {
            return e[t++];
          })
        );
      },
      re = function (e, t) {
        e = [].concat(e);
        for (var n, r, i = 0, o = e.length; i < o; i++)
          (r = e[i]),
            (n = ae[r[D]]) &&
              (t
                ? ((r.style.cssText = n.dirtyStyleAttr),
                  Ae(r, n.dirtyClassAttr))
                : ((n.dirtyStyleAttr = r.style.cssText),
                  (n.dirtyClassAttr = Se(r)),
                  (r.style.cssText = n.styleAttr),
                  Ae(r, n.classAttr)));
      },
      ie = function () {
        (ve = "translateZ(0)"), a.setStyle(se, "transform", ve);
        var e = u(se),
          t = e.getPropertyValue("transform"),
          n = e.getPropertyValue(R + "transform");
        (t && "none" !== t) || (n && "none" !== n) || (ve = "");
      };
    a.setStyle = function (e, t, n) {
      var r = e.style;
      if ("zIndex" === (t = t.replace(M, q).replace("-", "")))
        isNaN(n) ? (r[t] = n) : (r[t] = "" + (0 | n));
      else if ("float" === t) r.styleFloat = r.cssFloat = n;
      else
        try {
          W && (r[W + t.slice(0, 1).toUpperCase() + t.slice(1)] = n),
            (r[t] = n);
        } catch (e) {}
    };
    var oe,
      ae,
      se,
      le,
      ue,
      ce,
      fe,
      pe,
      de,
      he,
      me,
      ge,
      ye,
      ve,
      be,
      xe = (a.addEvent = function (t, n, r) {
        var i = function (t) {
          return (
            (t = t || e.event),
            t.target || (t.target = t.srcElement),
            t.preventDefault ||
              (t.preventDefault = function () {
                (t.returnValue = !1), (t.defaultPrevented = !0);
              }),
            r.call(this, t)
          );
        };
        n = n.split(" ");
        for (var o, a = 0, s = n.length; a < s; a++)
          (o = n[a]),
            t.addEventListener
              ? t.addEventListener(o, r, !1)
              : t.attachEvent("on" + o, i),
            ze.push({ element: t, name: o, listener: r });
      }),
      Te = (a.removeEvent = function (e, t, n) {
        t = t.split(" ");
        for (var r = 0, i = t.length; r < i; r++)
          e.removeEventListener
            ? e.removeEventListener(t[r], n, !1)
            : e.detachEvent("on" + t[r], n);
      }),
      we = function () {
        for (var e, t = 0, n = ze.length; t < n; t++)
          (e = ze[t]), Te(e.element, e.name, e.listener);
        ze = [];
      },
      Ce = function (e, t, n) {
        le.keyframe && le.keyframe.call(oe, e, t, n);
      },
      ke = function () {
        var e = oe.getScrollTop();
        (He = 0),
          ue && !Re && (o.style.height = ""),
          Y(),
          ue && !Re && (o.style.height = He + i.clientHeight + "px"),
          Re
            ? oe.setScrollTop(l.min(oe.getScrollTop(), He))
            : oe.setScrollTop(e, !0),
          (ge = !0);
      },
      Ee = function () {
        var e,
          t,
          n = i.clientHeight,
          r = {};
        for (e in ce)
          (t = ce[e]),
            "function" == typeof t
              ? (t = t.call(oe))
              : /p$/.test(t) && (t = (t.slice(0, -1) / 100) * n),
            (r[e] = t);
        return r;
      },
      Ne = function () {
        var e = 0;
        return (
          se && (e = l.max(se.offsetHeight, se.scrollHeight)),
          l.max(
            e,
            o.scrollHeight,
            o.offsetHeight,
            i.scrollHeight,
            i.offsetHeight,
            i.clientHeight
          ) - i.clientHeight
        );
      },
      Se = function (t) {
        var n = "className";
        return (
          e.SVGElement &&
            t instanceof e.SVGElement &&
            ((t = t[n]), (n = "baseVal")),
          t[n]
        );
      },
      Ae = function (t, r, i) {
        var o = "className";
        if (
          (e.SVGElement &&
            t instanceof e.SVGElement &&
            ((t = t[o]), (o = "baseVal")),
          i === n)
        )
          return void (t[o] = r);
        for (var a = t[o], s = 0, l = i.length; s < l; s++)
          a = je(a).replace(je(i[s]), " ");
        a = De(a);
        for (var u = 0, c = r.length; u < c; u++)
          -1 === je(a).indexOf(je(r[u])) && (a += " " + r[u]);
        t[o] = De(a);
      },
      De = function (e) {
        return e.replace($, "");
      },
      je = function (e) {
        return " " + e + " ";
      },
      $e =
        Date.now ||
        function () {
          return +new Date();
        },
      Le = function (e, t) {
        return e.frame - t.frame;
      },
      He = 0,
      Fe = 1,
      Me = "down",
      qe = -1,
      Oe = $e(),
      _e = 0,
      Be = 0,
      Pe = !1,
      We = 0,
      Re = !1,
      Ie = 0,
      ze = [];
    "function" == typeof define && define.amd
      ? define([], function () {
          return a;
        })
      : "undefined" != typeof module && module.exports
      ? (module.exports = a)
      : (e.skrollr = a);
  })(window, document),
  function () {
    skrollr.init({ forceHeight: !1, smoothScrolling: !1 }),
      $(document).ready(function () {
        var e, t, n, r, i, o, a, s, l, u, c, f, p, d, h;
        return (
          (d = Math.floor(4 * Math.random())),
          (h = ["#ae2c3c", "#569dd4", "#95a13b", "#e4980b"]),
          $("body").addClass("theme-" + (d + 1)),
          $("body").scrollspy({ target: "#header", offset: 70 }),
          $("#header nav a[href^='#']").on("click", function (e) {
            return (
              e.preventDefault(),
              $("html, body").animate(
                { scrollTop: $(this.hash).offset().top - 69 },
                600
              )
            );
          }),
          (t = 3e3),
          (i = function () {
            return e($(".cd-headline"));
          }),
          (e = function (e) {
            return e.each(function () {
              var e;
              return (
                (e = $(this)),
                setTimeout(function () {
                  return n(e.find(".is-visible").eq(0));
                }, t)
              );
            });
          }),
          (n = function (e) {
            var r;
            return (
              (r = p(e)),
              f(e, r),
              setTimeout(function () {
                return n(r);
              }, t)
            );
          }),
          (p = function (e) {
            return e.is(":last-child") ? e.parent().children().eq(0) : e.next();
          }),
          (f = function (e, t) {
            return (
              e.removeClass("is-visible").addClass("is-hidden"),
              t.removeClass("is-hidden").addClass("is-visible")
            );
          })
        );
      });
  }.call(this);
