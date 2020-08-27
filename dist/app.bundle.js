!(function (e) {
  function t(t) {
    for (var n, o, i = t[0], a = t[1], c = 0, s = []; c < i.length; c++)
      (o = i[c]),
        Object.prototype.hasOwnProperty.call(r, o) && r[o] && s.push(r[o][0]),
        (r[o] = 0)
    for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
    for (u && u(t); s.length; ) s.shift()()
  }
  var n = {},
    r = { 0: 0 }
  function o(t) {
    if (n[t]) return n[t].exports
    var r = (n[t] = { i: t, l: !1, exports: {} })
    return e[t].call(r.exports, r, r.exports, o), (r.l = !0), r.exports
  }
  ;(o.e = function (e) {
    var t = [],
      n = r[e]
    if (0 !== n)
      if (n) t.push(n[2])
      else {
        var i = new Promise(function (t, o) {
          n = r[e] = [t, o]
        })
        t.push((n[2] = i))
        var a,
          c = document.createElement("script")
        ;(c.charset = "utf-8"),
          (c.timeout = 120),
          o.nc && c.setAttribute("nonce", o.nc),
          (c.src = (function (e) {
            return o.p + "" + e + ".app.bundle.js"
          })(e))
        var u = new Error()
        a = function (t) {
          ;(c.onerror = c.onload = null), clearTimeout(s)
          var n = r[e]
          if (0 !== n) {
            if (n) {
              var o = t && ("load" === t.type ? "missing" : t.type),
                i = t && t.target && t.target.src
              ;(u.message =
                "Loading chunk " + e + " failed.\n(" + o + ": " + i + ")"),
                (u.name = "ChunkLoadError"),
                (u.type = o),
                (u.request = i),
                n[1](u)
            }
            r[e] = void 0
          }
        }
        var s = setTimeout(function () {
          a({ type: "timeout", target: c })
        }, 12e4)
        ;(c.onerror = c.onload = a), document.head.appendChild(c)
      }
    return Promise.all(t)
  }),
    (o.m = e),
    (o.c = n),
    (o.d = function (e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 })
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e
      if (4 & t && "object" == typeof e && e && e.__esModule) return e
      var n = Object.create(null)
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          o.d(
            n,
            r,
            function (t) {
              return e[t]
            }.bind(null, r)
          )
      return n
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default
            }
          : function () {
              return e
            }
      return o.d(t, "a", t), t
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (o.p = ""),
    (o.oe = function (e) {
      throw (console.error(e), e)
    })
  var i = (window.webpackJsonp = window.webpackJsonp || []),
    a = i.push.bind(i)
  ;(i.push = t), (i = i.slice())
  for (var c = 0; c < i.length; c++) t(i[c])
  var u = a
  o((o.s = 34))
})([
  function (e, t) {
    e.exports = React
  },
  function (e, t) {
    var n = (e.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")())
    "number" == typeof __g && (__g = n)
  },
  function (e, t, n) {
    var r = n(8),
      o = n(19)
    e.exports = n(4)
      ? function (e, t, n) {
          return r.f(e, t, o(1, n))
        }
      : function (e, t, n) {
          return (e[t] = n), e
        }
  },
  function (e, t, n) {
    var r = n(14)("wks"),
      o = n(13),
      i = n(1).Symbol,
      a = "function" == typeof i
    ;(e.exports = function (e) {
      return r[e] || (r[e] = (a && i[e]) || (a ? i : o)("Symbol." + e))
    }).store = r
  },
  function (e, t, n) {
    e.exports = !n(18)(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7
          },
        }).a
      )
    })
  },
  function (e, t) {
    var n = {}.hasOwnProperty
    e.exports = function (e, t) {
      return n.call(e, t)
    }
  },
  function (e, t, n) {
    var r = n(1),
      o = n(7),
      i = n(2),
      a = n(12),
      c = n(21),
      u = function (e, t, n) {
        var s,
          l,
          f,
          p,
          _ = e & u.F,
          d = e & u.G,
          v = e & u.S,
          h = e & u.P,
          y = e & u.B,
          b = d ? r : v ? r[t] || (r[t] = {}) : (r[t] || {}).prototype,
          m = d ? o : o[t] || (o[t] = {}),
          g = m.prototype || (m.prototype = {})
        for (s in (d && (n = t), n))
          (f = ((l = !_ && b && void 0 !== b[s]) ? b : n)[s]),
            (p =
              y && l
                ? c(f, r)
                : h && "function" == typeof f
                ? c(Function.call, f)
                : f),
            b && a(b, s, f, e & u.U),
            m[s] != f && i(m, s, p),
            h && g[s] != f && (g[s] = f)
      }
    ;(r.core = o),
      (u.F = 1),
      (u.G = 2),
      (u.S = 4),
      (u.P = 8),
      (u.B = 16),
      (u.W = 32),
      (u.U = 64),
      (u.R = 128),
      (e.exports = u)
  },
  function (e, t) {
    var n = (e.exports = { version: "2.6.11" })
    "number" == typeof __e && (__e = n)
  },
  function (e, t, n) {
    var r = n(9),
      o = n(36),
      i = n(37),
      a = Object.defineProperty
    t.f = n(4)
      ? Object.defineProperty
      : function (e, t, n) {
          if ((r(e), (t = i(t, !0)), r(n), o))
            try {
              return a(e, t, n)
            } catch (e) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported!")
          return "value" in n && (e[t] = n.value), e
        }
  },
  function (e, t, n) {
    var r = n(10)
    e.exports = function (e) {
      if (!r(e)) throw TypeError(e + " is not an object!")
      return e
    }
  },
  function (e, t) {
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e
    }
  },
  function (e, t, n) {
    var r = n(10),
      o = n(1).document,
      i = r(o) && r(o.createElement)
    e.exports = function (e) {
      return i ? o.createElement(e) : {}
    }
  },
  function (e, t, n) {
    var r = n(1),
      o = n(2),
      i = n(5),
      a = n(13)("src"),
      c = n(38),
      u = ("" + c).split("toString")
    ;(n(7).inspectSource = function (e) {
      return c.call(e)
    }),
      (e.exports = function (e, t, n, c) {
        var s = "function" == typeof n
        s && (i(n, "name") || o(n, "name", t)),
          e[t] !== n &&
            (s && (i(n, a) || o(n, a, e[t] ? "" + e[t] : u.join(String(t)))),
            e === r
              ? (e[t] = n)
              : c
              ? e[t]
                ? (e[t] = n)
                : o(e, t, n)
              : (delete e[t], o(e, t, n)))
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && this[a]) || c.call(this)
      })
  },
  function (e, t) {
    var n = 0,
      r = Math.random()
    e.exports = function (e) {
      return "Symbol(".concat(
        void 0 === e ? "" : e,
        ")_",
        (++n + r).toString(36)
      )
    }
  },
  function (e, t, n) {
    var r = n(7),
      o = n(1),
      i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {})
    ;(e.exports = function (e, t) {
      return i[e] || (i[e] = void 0 !== t ? t : {})
    })("versions", []).push({
      version: r.version,
      mode: n(20) ? "pure" : "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
    })
  },
  function (e, t) {
    e.exports = {}
  },
  function (e, t, n) {
    var r = n(48),
      o = n(24)
    e.exports = function (e) {
      return r(o(e))
    }
  },
  function (e, t, n) {
    var r = n(14)("keys"),
      o = n(13)
    e.exports = function (e) {
      return r[e] || (r[e] = o(e))
    }
  },
  function (e, t) {
    e.exports = function (e) {
      try {
        return !!e()
      } catch (e) {
        return !0
      }
    }
  },
  function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      }
    }
  },
  function (e, t) {
    e.exports = !1
  },
  function (e, t, n) {
    var r = n(39)
    e.exports = function (e, t, n) {
      if ((r(e), void 0 === t)) return e
      switch (n) {
        case 1:
          return function (n) {
            return e.call(t, n)
          }
        case 2:
          return function (n, r) {
            return e.call(t, n, r)
          }
        case 3:
          return function (n, r, o) {
            return e.call(t, n, r, o)
          }
      }
      return function () {
        return e.apply(t, arguments)
      }
    }
  },
  function (e, t, n) {
    var r = n(1).document
    e.exports = r && r.documentElement
  },
  function (e, t) {
    var n = {}.toString
    e.exports = function (e) {
      return n.call(e).slice(8, -1)
    }
  },
  function (e, t) {
    e.exports = function (e) {
      if (null == e) throw TypeError("Can't call method on  " + e)
      return e
    }
  },
  function (e, t, n) {
    var r = n(53),
      o = n(27)
    e.exports =
      Object.keys ||
      function (e) {
        return r(e, o)
      }
  },
  function (e, t) {
    var n = Math.ceil,
      r = Math.floor
    e.exports = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e)
    }
  },
  function (e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
      ","
    )
  },
  function (e, t, n) {
    var r = n(8).f,
      o = n(5),
      i = n(3)("toStringTag")
    e.exports = function (e, t, n) {
      e &&
        !o((e = n ? e : e.prototype), i) &&
        r(e, i, { configurable: !0, value: t })
    }
  },
  function (e, t) {
    e.exports = ReactDOM
  },
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict"
    ;(function (module) {
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        ),
        _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59),
        _styles_css__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          _styles_css__WEBPACK_IMPORTED_MODULE_1__
        ),
        react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32),
        react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          react_hot_loader__WEBPACK_IMPORTED_MODULE_2__
        ),
        enterModule
      function _defineProperty(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
      ;(enterModule =
        "undefined" != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal.enterModule
          : void 0),
        enterModule && enterModule(module)
      var __signature__ =
        "undefined" != typeof reactHotLoaderGlobal
          ? reactHotLoaderGlobal.default.signature
          : function (e) {
              return e
            }
      const Warning = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() =>
        __webpack_require__.e(1).then(__webpack_require__.bind(null, 63))
      )
      class App extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
        constructor(...e) {
          super(...e), _defineProperty(this, "state", { count: 0 })
        }
        render() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "div",
              null,
              "Hey there Akki !!!"
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "h2",
              { className: this.state.count > 12 ? "warning" : "" },
              "Count is : ",
              this.state.count
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "button",
              {
                onClick: () =>
                  this.setState({ ...this.state, count: this.state.count + 2 }),
              },
              "++"
            ),
            this.state.count > 12
              ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.Suspense,
                  { fallback: null },
                  " ",
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    Warning,
                    null
                  ),
                  " "
                )
              : ""
          )
        }
        __reactstandin__regenerateByEval(key, code) {
          this[key] = eval(code)
        }
      }
      const _default = Object(
        react_hot_loader__WEBPACK_IMPORTED_MODULE_2__.hot
      )(module)(App)
      var reactHotLoader, leaveModule
      ;(__webpack_exports__.a = _default),
        (reactHotLoader =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default
            : void 0),
        reactHotLoader &&
          (reactHotLoader.register(
            Warning,
            "Warning",
            "C:\\Users\\Akshay Patel\\Desktop\\egghead_learning\\react-webpack\\src\\App.js"
          ),
          reactHotLoader.register(
            App,
            "App",
            "C:\\Users\\Akshay Patel\\Desktop\\egghead_learning\\react-webpack\\src\\App.js"
          ),
          reactHotLoader.register(
            _default,
            "default",
            "C:\\Users\\Akshay Patel\\Desktop\\egghead_learning\\react-webpack\\src\\App.js"
          )),
        (leaveModule =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.leaveModule
            : void 0),
        leaveModule && leaveModule(module)
    }.call(this, __webpack_require__(33)(module)))
  },
  function (e, t, n) {
    "use strict"
    e.exports = function (e) {
      var t = []
      return (
        (t.toString = function () {
          return this.map(function (t) {
            var n = (function (e, t) {
              var n = e[1] || "",
                r = e[3]
              if (!r) return n
              if (t && "function" == typeof btoa) {
                var o =
                    ((a = r),
                    (c = btoa(unescape(encodeURIComponent(JSON.stringify(a))))),
                    (u = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                      c
                    )),
                    "/*# ".concat(u, " */")),
                  i = r.sources.map(function (e) {
                    return "/*# sourceURL="
                      .concat(r.sourceRoot || "")
                      .concat(e, " */")
                  })
                return [n].concat(i).concat([o]).join("\n")
              }
              var a, c, u
              return [n].join("\n")
            })(t, e)
            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
          }).join("")
        }),
        (t.i = function (e, n, r) {
          "string" == typeof e && (e = [[null, e, ""]])
          var o = {}
          if (r)
            for (var i = 0; i < this.length; i++) {
              var a = this[i][0]
              null != a && (o[a] = !0)
            }
          for (var c = 0; c < e.length; c++) {
            var u = [].concat(e[c])
            ;(r && o[u[0]]) ||
              (n &&
                (u[2]
                  ? (u[2] = "".concat(n, " and ").concat(u[2]))
                  : (u[2] = n)),
              t.push(u))
          }
        }),
        t
      )
    }
  },
  function (e, t, n) {
    "use strict"
    e.exports = n(62)
  },
  function (e, t) {
    e.exports = function (e) {
      if (!e.webpackPolyfill) {
        var t = Object.create(e)
        t.children || (t.children = []),
          Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
              return t.l
            },
          }),
          Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
              return t.i
            },
          }),
          Object.defineProperty(t, "exports", { enumerable: !0 }),
          (t.webpackPolyfill = 1)
      }
      return t
    }
  },
  function (e, t, n) {
    "use strict"
    n.r(t)
    n(35), n(41), n(44)
    var r = n(0),
      o = n.n(r),
      i = n(29),
      a = n.n(i),
      c = n(30)
    "undefined" != typeof reactHotLoaderGlobal &&
      reactHotLoaderGlobal.default.signature
    a.a.render(o.a.createElement(c.a, null), document.getElementById("root"))
  },
  function (e, t, n) {
    var r = n(1),
      o = n(6),
      i = n(40),
      a = [].slice,
      c = /MSIE .\./.test(i),
      u = function (e) {
        return function (t, n) {
          var r = arguments.length > 2,
            o = !!r && a.call(arguments, 2)
          return e(
            r
              ? function () {
                  ;("function" == typeof t ? t : Function(t)).apply(this, o)
                }
              : t,
            n
          )
        }
      }
    o(o.G + o.B + o.F * c, {
      setTimeout: u(r.setTimeout),
      setInterval: u(r.setInterval),
    })
  },
  function (e, t, n) {
    e.exports =
      !n(4) &&
      !n(18)(function () {
        return (
          7 !=
          Object.defineProperty(n(11)("div"), "a", {
            get: function () {
              return 7
            },
          }).a
        )
      })
  },
  function (e, t, n) {
    var r = n(10)
    e.exports = function (e, t) {
      if (!r(e)) return e
      var n, o
      if (t && "function" == typeof (n = e.toString) && !r((o = n.call(e))))
        return o
      if ("function" == typeof (n = e.valueOf) && !r((o = n.call(e)))) return o
      if (!t && "function" == typeof (n = e.toString) && !r((o = n.call(e))))
        return o
      throw TypeError("Can't convert object to primitive value")
    }
  },
  function (e, t, n) {
    e.exports = n(14)("native-function-to-string", Function.toString)
  },
  function (e, t) {
    e.exports = function (e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!")
      return e
    }
  },
  function (e, t, n) {
    var r = n(1).navigator
    e.exports = (r && r.userAgent) || ""
  },
  function (e, t, n) {
    var r = n(6),
      o = n(42)
    r(r.G + r.B, { setImmediate: o.set, clearImmediate: o.clear })
  },
  function (e, t, n) {
    var r,
      o,
      i,
      a = n(21),
      c = n(43),
      u = n(22),
      s = n(11),
      l = n(1),
      f = l.process,
      p = l.setImmediate,
      _ = l.clearImmediate,
      d = l.MessageChannel,
      v = l.Dispatch,
      h = 0,
      y = {},
      b = function () {
        var e = +this
        if (y.hasOwnProperty(e)) {
          var t = y[e]
          delete y[e], t()
        }
      },
      m = function (e) {
        b.call(e.data)
      }
    ;(p && _) ||
      ((p = function (e) {
        for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++])
        return (
          (y[++h] = function () {
            c("function" == typeof e ? e : Function(e), t)
          }),
          r(h),
          h
        )
      }),
      (_ = function (e) {
        delete y[e]
      }),
      "process" == n(23)(f)
        ? (r = function (e) {
            f.nextTick(a(b, e, 1))
          })
        : v && v.now
        ? (r = function (e) {
            v.now(a(b, e, 1))
          })
        : d
        ? ((i = (o = new d()).port2),
          (o.port1.onmessage = m),
          (r = a(i.postMessage, i, 1)))
        : l.addEventListener &&
          "function" == typeof postMessage &&
          !l.importScripts
        ? ((r = function (e) {
            l.postMessage(e + "", "*")
          }),
          l.addEventListener("message", m, !1))
        : (r =
            "onreadystatechange" in s("script")
              ? function (e) {
                  u.appendChild(s("script")).onreadystatechange = function () {
                    u.removeChild(this), b.call(e)
                  }
                }
              : function (e) {
                  setTimeout(a(b, e, 1), 0)
                })),
      (e.exports = { set: p, clear: _ })
  },
  function (e, t) {
    e.exports = function (e, t, n) {
      var r = void 0 === n
      switch (t.length) {
        case 0:
          return r ? e() : e.call(n)
        case 1:
          return r ? e(t[0]) : e.call(n, t[0])
        case 2:
          return r ? e(t[0], t[1]) : e.call(n, t[0], t[1])
        case 3:
          return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2])
        case 4:
          return r
            ? e(t[0], t[1], t[2], t[3])
            : e.call(n, t[0], t[1], t[2], t[3])
      }
      return e.apply(n, t)
    }
  },
  function (e, t, n) {
    for (
      var r = n(45),
        o = n(25),
        i = n(12),
        a = n(1),
        c = n(2),
        u = n(15),
        s = n(3),
        l = s("iterator"),
        f = s("toStringTag"),
        p = u.Array,
        _ = {
          CSSRuleList: !0,
          CSSStyleDeclaration: !1,
          CSSValueList: !1,
          ClientRectList: !1,
          DOMRectList: !1,
          DOMStringList: !1,
          DOMTokenList: !0,
          DataTransferItemList: !1,
          FileList: !1,
          HTMLAllCollection: !1,
          HTMLCollection: !1,
          HTMLFormElement: !1,
          HTMLSelectElement: !1,
          MediaList: !0,
          MimeTypeArray: !1,
          NamedNodeMap: !1,
          NodeList: !0,
          PaintRequestList: !1,
          Plugin: !1,
          PluginArray: !1,
          SVGLengthList: !1,
          SVGNumberList: !1,
          SVGPathSegList: !1,
          SVGPointList: !1,
          SVGStringList: !1,
          SVGTransformList: !1,
          SourceBufferList: !1,
          StyleSheetList: !0,
          TextTrackCueList: !1,
          TextTrackList: !1,
          TouchList: !1,
        },
        d = o(_),
        v = 0;
      v < d.length;
      v++
    ) {
      var h,
        y = d[v],
        b = _[y],
        m = a[y],
        g = m && m.prototype
      if (g && (g[l] || c(g, l, p), g[f] || c(g, f, y), (u[y] = p), b))
        for (h in r) g[h] || i(g, h, r[h], !0)
    }
  },
  function (e, t, n) {
    "use strict"
    var r = n(46),
      o = n(47),
      i = n(15),
      a = n(16)
    ;(e.exports = n(49)(
      Array,
      "Array",
      function (e, t) {
        ;(this._t = a(e)), (this._i = 0), (this._k = t)
      },
      function () {
        var e = this._t,
          t = this._k,
          n = this._i++
        return !e || n >= e.length
          ? ((this._t = void 0), o(1))
          : o(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
      },
      "values"
    )),
      (i.Arguments = i.Array),
      r("keys"),
      r("values"),
      r("entries")
  },
  function (e, t, n) {
    var r = n(3)("unscopables"),
      o = Array.prototype
    null == o[r] && n(2)(o, r, {}),
      (e.exports = function (e) {
        o[r][e] = !0
      })
  },
  function (e, t) {
    e.exports = function (e, t) {
      return { value: t, done: !!e }
    }
  },
  function (e, t, n) {
    var r = n(23)
    e.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function (e) {
          return "String" == r(e) ? e.split("") : Object(e)
        }
  },
  function (e, t, n) {
    "use strict"
    var r = n(20),
      o = n(6),
      i = n(12),
      a = n(2),
      c = n(15),
      u = n(50),
      s = n(28),
      l = n(57),
      f = n(3)("iterator"),
      p = !([].keys && "next" in [].keys()),
      _ = function () {
        return this
      }
    e.exports = function (e, t, n, d, v, h, y) {
      u(n, t, d)
      var b,
        m,
        g,
        E = function (e) {
          if (!p && e in x) return x[e]
          switch (e) {
            case "keys":
            case "values":
              return function () {
                return new n(this, e)
              }
          }
          return function () {
            return new n(this, e)
          }
        },
        O = t + " Iterator",
        M = "values" == v,
        P = !1,
        x = e.prototype,
        L = x[f] || x["@@iterator"] || (v && x[v]),
        w = L || E(v),
        C = v ? (M ? E("entries") : w) : void 0,
        T = ("Array" == t && x.entries) || L
      if (
        (T &&
          (g = l(T.call(new e()))) !== Object.prototype &&
          g.next &&
          (s(g, O, !0), r || "function" == typeof g[f] || a(g, f, _)),
        M &&
          L &&
          "values" !== L.name &&
          ((P = !0),
          (w = function () {
            return L.call(this)
          })),
        (r && !y) || (!p && !P && x[f]) || a(x, f, w),
        (c[t] = w),
        (c[O] = _),
        v)
      )
        if (
          ((b = {
            values: M ? w : E("values"),
            keys: h ? w : E("keys"),
            entries: C,
          }),
          y)
        )
          for (m in b) m in x || i(x, m, b[m])
        else o(o.P + o.F * (p || P), t, b)
      return b
    }
  },
  function (e, t, n) {
    "use strict"
    var r = n(51),
      o = n(19),
      i = n(28),
      a = {}
    n(2)(a, n(3)("iterator"), function () {
      return this
    }),
      (e.exports = function (e, t, n) {
        ;(e.prototype = r(a, { next: o(1, n) })), i(e, t + " Iterator")
      })
  },
  function (e, t, n) {
    var r = n(9),
      o = n(52),
      i = n(27),
      a = n(17)("IE_PROTO"),
      c = function () {},
      u = function () {
        var e,
          t = n(11)("iframe"),
          r = i.length
        for (
          t.style.display = "none",
            n(22).appendChild(t),
            t.src = "javascript:",
            (e = t.contentWindow.document).open(),
            e.write("<script>document.F=Object</script>"),
            e.close(),
            u = e.F;
          r--;

        )
          delete u.prototype[i[r]]
        return u()
      }
    e.exports =
      Object.create ||
      function (e, t) {
        var n
        return (
          null !== e
            ? ((c.prototype = r(e)),
              (n = new c()),
              (c.prototype = null),
              (n[a] = e))
            : (n = u()),
          void 0 === t ? n : o(n, t)
        )
      }
  },
  function (e, t, n) {
    var r = n(8),
      o = n(9),
      i = n(25)
    e.exports = n(4)
      ? Object.defineProperties
      : function (e, t) {
          o(e)
          for (var n, a = i(t), c = a.length, u = 0; c > u; )
            r.f(e, (n = a[u++]), t[n])
          return e
        }
  },
  function (e, t, n) {
    var r = n(5),
      o = n(16),
      i = n(54)(!1),
      a = n(17)("IE_PROTO")
    e.exports = function (e, t) {
      var n,
        c = o(e),
        u = 0,
        s = []
      for (n in c) n != a && r(c, n) && s.push(n)
      for (; t.length > u; ) r(c, (n = t[u++])) && (~i(s, n) || s.push(n))
      return s
    }
  },
  function (e, t, n) {
    var r = n(16),
      o = n(55),
      i = n(56)
    e.exports = function (e) {
      return function (t, n, a) {
        var c,
          u = r(t),
          s = o(u.length),
          l = i(a, s)
        if (e && n != n) {
          for (; s > l; ) if ((c = u[l++]) != c) return !0
        } else
          for (; s > l; l++) if ((e || l in u) && u[l] === n) return e || l || 0
        return !e && -1
      }
    }
  },
  function (e, t, n) {
    var r = n(26),
      o = Math.min
    e.exports = function (e) {
      return e > 0 ? o(r(e), 9007199254740991) : 0
    }
  },
  function (e, t, n) {
    var r = n(26),
      o = Math.max,
      i = Math.min
    e.exports = function (e, t) {
      return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t)
    }
  },
  function (e, t, n) {
    var r = n(5),
      o = n(58),
      i = n(17)("IE_PROTO"),
      a = Object.prototype
    e.exports =
      Object.getPrototypeOf ||
      function (e) {
        return (
          (e = o(e)),
          r(e, i)
            ? e[i]
            : "function" == typeof e.constructor && e instanceof e.constructor
            ? e.constructor.prototype
            : e instanceof Object
            ? a
            : null
        )
      }
  },
  function (e, t, n) {
    var r = n(24)
    e.exports = function (e) {
      return Object(r(e))
    }
  },
  function (e, t, n) {
    var r = n(60),
      o = n(61)
    "string" == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[e.i, o, ""]])
    var i = { insert: "head", singleton: !1 }
    r(o, i)
    e.exports = o.locals || {}
  },
  function (e, t, n) {
    "use strict"
    var r,
      o = function () {
        return (
          void 0 === r &&
            (r = Boolean(window && document && document.all && !window.atob)),
          r
        )
      },
      i = (function () {
        var e = {}
        return function (t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t)
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head
              } catch (e) {
                n = null
              }
            e[t] = n
          }
          return e[t]
        }
      })(),
      a = []
    function c(e) {
      for (var t = -1, n = 0; n < a.length; n++)
        if (a[n].identifier === e) {
          t = n
          break
        }
      return t
    }
    function u(e, t) {
      for (var n = {}, r = [], o = 0; o < e.length; o++) {
        var i = e[o],
          u = t.base ? i[0] + t.base : i[0],
          s = n[u] || 0,
          l = "".concat(u, " ").concat(s)
        n[u] = s + 1
        var f = c(l),
          p = { css: i[1], media: i[2], sourceMap: i[3] }
        ;-1 !== f
          ? (a[f].references++, a[f].updater(p))
          : a.push({ identifier: l, updater: h(p, t), references: 1 }),
          r.push(l)
      }
      return r
    }
    function s(e) {
      var t = document.createElement("style"),
        r = e.attributes || {}
      if (void 0 === r.nonce) {
        var o = n.nc
        o && (r.nonce = o)
      }
      if (
        (Object.keys(r).forEach(function (e) {
          t.setAttribute(e, r[e])
        }),
        "function" == typeof e.insert)
      )
        e.insert(t)
      else {
        var a = i(e.insert || "head")
        if (!a)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          )
        a.appendChild(t)
      }
      return t
    }
    var l,
      f =
        ((l = []),
        function (e, t) {
          return (l[e] = t), l.filter(Boolean).join("\n")
        })
    function p(e, t, n, r) {
      var o = n
        ? ""
        : r.media
        ? "@media ".concat(r.media, " {").concat(r.css, "}")
        : r.css
      if (e.styleSheet) e.styleSheet.cssText = f(t, o)
      else {
        var i = document.createTextNode(o),
          a = e.childNodes
        a[t] && e.removeChild(a[t]),
          a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
      }
    }
    function _(e, t, n) {
      var r = n.css,
        o = n.media,
        i = n.sourceMap
      if (
        (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
        i &&
          btoa &&
          (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = r
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild)
        e.appendChild(document.createTextNode(r))
      }
    }
    var d = null,
      v = 0
    function h(e, t) {
      var n, r, o
      if (t.singleton) {
        var i = v++
        ;(n = d || (d = s(t))),
          (r = p.bind(null, n, i, !1)),
          (o = p.bind(null, n, i, !0))
      } else
        (n = s(t)),
          (r = _.bind(null, n, t)),
          (o = function () {
            !(function (e) {
              if (null === e.parentNode) return !1
              e.parentNode.removeChild(e)
            })(n)
          })
      return (
        r(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return
            r((e = t))
          } else o()
        }
      )
    }
    e.exports = function (e, t) {
      ;(t = t || {}).singleton ||
        "boolean" == typeof t.singleton ||
        (t.singleton = o())
      var n = u((e = e || []), t)
      return function (e) {
        if (
          ((e = e || []),
          "[object Array]" === Object.prototype.toString.call(e))
        ) {
          for (var r = 0; r < n.length; r++) {
            var o = c(n[r])
            a[o].references--
          }
          for (var i = u(e, t), s = 0; s < n.length; s++) {
            var l = c(n[s])
            0 === a[l].references && (a[l].updater(), a.splice(l, 1))
          }
          n = i
        }
      }
    }
  },
  function (e, t, n) {
    "use strict"
    n.r(t)
    var r = n(31),
      o = n.n(r)()(!1)
    o.push([
      e.i,
      "* {\r\n  box-sizing: border-box;\r\n  background-color: aqua;\r\n}\r\n\r\n.warning {\r\n  color: red;\r\n}\r\n",
      "",
    ]),
      (t.default = o)
  },
  function (e, t, n) {
    "use strict"
    Object.defineProperty(t, "__esModule", { value: !0 })
    var r,
      o = (r = n(0)) && "object" == typeof r && "default" in r ? r.default : r
    function i(e) {
      return (
        i.warnAboutHMRDisabled &&
          ((i.warnAboutHMRDisabled = !0),
          console.error(
            "React-Hot-Loader: misconfiguration detected, using production version in non-production environment."
          ),
          console.error(
            "React-Hot-Loader: Hot Module Replacement is not enabled."
          )),
        o.Children.only(e.children)
      )
    }
    i.warnAboutHMRDisabled = !1
    var a = function e() {
      return e.shouldWrapWithAppContainer
        ? function (e) {
            return function (t) {
              return o.createElement(i, null, o.createElement(e, t))
            }
          }
        : function (e) {
            return e
          }
    }
    a.shouldWrapWithAppContainer = !1
    ;(t.AppContainer = i),
      (t.hot = a),
      (t.areComponentsEqual = function (e, t) {
        return e === t
      }),
      (t.setConfig = function () {}),
      (t.cold = function (e) {
        return e
      }),
      (t.configureComponent = function () {})
  },
])
