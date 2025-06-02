import It, { createContext as ko, forwardRef as Ti, useState as $o, useRef as Ci, useMemo as Lt, useEffect as Mt, createElement as Re, useContext as Do } from "react";
import Ni from "react-dom";
var jn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _i(t) {
  if (t.__esModule)
    return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), r;
}
var Mr = { exports: {} }, rt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fn;
function ji() {
  if (Fn)
    return rt;
  Fn = 1;
  var t = It, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(l, f, c) {
    var u, d = {}, m = null, v = null;
    c !== void 0 && (m = "" + c), f.key !== void 0 && (m = "" + f.key), f.ref !== void 0 && (v = f.ref);
    for (u in f)
      n.call(f, u) && !a.hasOwnProperty(u) && (d[u] = f[u]);
    if (l && l.defaultProps)
      for (u in f = l.defaultProps, f)
        d[u] === void 0 && (d[u] = f[u]);
    return { $$typeof: e, type: l, key: m, ref: v, props: d, _owner: o.current };
  }
  return rt.Fragment = r, rt.jsx = i, rt.jsxs = i, rt;
}
var nt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kn;
function Fi() {
  return kn || (kn = 1, process.env.NODE_ENV !== "production" && function() {
    var t = It, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y = Symbol.iterator, S = "@@iterator";
    function b(s) {
      if (s === null || typeof s != "object")
        return null;
      var g = y && s[y] || s[S];
      return typeof g == "function" ? g : null;
    }
    var A = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(s) {
      {
        for (var g = arguments.length, w = new Array(g > 1 ? g - 1 : 0), P = 1; P < g; P++)
          w[P - 1] = arguments[P];
        x("error", s, w);
      }
    }
    function x(s, g, w) {
      {
        var P = A.ReactDebugCurrentFrame, _ = P.getStackAddendum();
        _ !== "" && (g += "%s", w = w.concat([_]));
        var F = w.map(function(N) {
          return String(N);
        });
        F.unshift("Warning: " + g), Function.prototype.apply.call(console[s], console, F);
      }
    }
    var I = !1, k = !1, $ = !1, q = !1, ne = !1, X;
    X = Symbol.for("react.module.reference");
    function ie(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === n || s === a || ne || s === o || s === c || s === u || q || s === v || I || k || $ || typeof s == "object" && s !== null && (s.$$typeof === m || s.$$typeof === d || s.$$typeof === i || s.$$typeof === l || s.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === X || s.getModuleId !== void 0));
    }
    function be(s, g, w) {
      var P = s.displayName;
      if (P)
        return P;
      var _ = g.displayName || g.name || "";
      return _ !== "" ? w + "(" + _ + ")" : w;
    }
    function oe(s) {
      return s.displayName || "Context";
    }
    function D(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case l:
            var g = s;
            return oe(g) + ".Consumer";
          case i:
            var w = s;
            return oe(w._context) + ".Provider";
          case f:
            return be(s, s.render, "ForwardRef");
          case d:
            var P = s.displayName || null;
            return P !== null ? P : D(s.type) || "Memo";
          case m: {
            var _ = s, F = _._payload, N = _._init;
            try {
              return D(N(F));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, U = 0, ce, we, Ee, ae, Pe, Qe, bt;
    function wt() {
    }
    wt.__reactDisabledLog = !0;
    function G() {
      {
        if (U === 0) {
          ce = console.log, we = console.info, Ee = console.warn, ae = console.error, Pe = console.group, Qe = console.groupCollapsed, bt = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: wt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: s,
            log: s,
            warn: s,
            error: s,
            group: s,
            groupCollapsed: s,
            groupEnd: s
          });
        }
        U++;
      }
    }
    function Ze() {
      {
        if (U--, U === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, s, {
              value: ce
            }),
            info: z({}, s, {
              value: we
            }),
            warn: z({}, s, {
              value: Ee
            }),
            error: z({}, s, {
              value: ae
            }),
            group: z({}, s, {
              value: Pe
            }),
            groupCollapsed: z({}, s, {
              value: Qe
            }),
            groupEnd: z({}, s, {
              value: bt
            })
          });
        }
        U < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var sr = A.ReactCurrentDispatcher, lr;
    function St(s, g, w) {
      {
        if (lr === void 0)
          try {
            throw Error();
          } catch (_) {
            var P = _.stack.trim().match(/\n( *(at )?)/);
            lr = P && P[1] || "";
          }
        return `
` + lr + s;
      }
    }
    var cr = !1, xt;
    {
      var ni = typeof WeakMap == "function" ? WeakMap : Map;
      xt = new ni();
    }
    function vn(s, g) {
      if (!s || cr)
        return "";
      {
        var w = xt.get(s);
        if (w !== void 0)
          return w;
      }
      var P;
      cr = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var F;
      F = sr.current, sr.current = null, G();
      try {
        if (g) {
          var N = function() {
            throw Error();
          };
          if (Object.defineProperty(N.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(N, []);
            } catch (ee) {
              P = ee;
            }
            Reflect.construct(s, [], N);
          } else {
            try {
              N.call();
            } catch (ee) {
              P = ee;
            }
            s.call(N.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ee) {
            P = ee;
          }
          s();
        }
      } catch (ee) {
        if (ee && P && typeof ee.stack == "string") {
          for (var C = ee.stack.split(`
`), Q = P.stack.split(`
`), M = C.length - 1, B = Q.length - 1; M >= 1 && B >= 0 && C[M] !== Q[B]; )
            B--;
          for (; M >= 1 && B >= 0; M--, B--)
            if (C[M] !== Q[B]) {
              if (M !== 1 || B !== 1)
                do
                  if (M--, B--, B < 0 || C[M] !== Q[B]) {
                    var se = `
` + C[M].replace(" at new ", " at ");
                    return s.displayName && se.includes("<anonymous>") && (se = se.replace("<anonymous>", s.displayName)), typeof s == "function" && xt.set(s, se), se;
                  }
                while (M >= 1 && B >= 0);
              break;
            }
        }
      } finally {
        cr = !1, sr.current = F, Ze(), Error.prepareStackTrace = _;
      }
      var qe = s ? s.displayName || s.name : "", Ne = qe ? St(qe) : "";
      return typeof s == "function" && xt.set(s, Ne), Ne;
    }
    function oi(s, g, w) {
      return vn(s, !1);
    }
    function ai(s) {
      var g = s.prototype;
      return !!(g && g.isReactComponent);
    }
    function Et(s, g, w) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return vn(s, ai(s));
      if (typeof s == "string")
        return St(s);
      switch (s) {
        case c:
          return St("Suspense");
        case u:
          return St("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case f:
            return oi(s.render);
          case d:
            return Et(s.type, g, w);
          case m: {
            var P = s, _ = P._payload, F = P._init;
            try {
              return Et(F(_), g, w);
            } catch {
            }
          }
        }
      return "";
    }
    var et = Object.prototype.hasOwnProperty, bn = {}, wn = A.ReactDebugCurrentFrame;
    function Pt(s) {
      if (s) {
        var g = s._owner, w = Et(s.type, s._source, g ? g.type : null);
        wn.setExtraStackFrame(w);
      } else
        wn.setExtraStackFrame(null);
    }
    function ii(s, g, w, P, _) {
      {
        var F = Function.call.bind(et);
        for (var N in s)
          if (F(s, N)) {
            var C = void 0;
            try {
              if (typeof s[N] != "function") {
                var Q = Error((P || "React class") + ": " + w + " type `" + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[N] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Q.name = "Invariant Violation", Q;
              }
              C = s[N](g, N, P, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (M) {
              C = M;
            }
            C && !(C instanceof Error) && (Pt(_), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", P || "React class", w, N, typeof C), Pt(null)), C instanceof Error && !(C.message in bn) && (bn[C.message] = !0, Pt(_), E("Failed %s type: %s", w, C.message), Pt(null));
          }
      }
    }
    var si = Array.isArray;
    function ur(s) {
      return si(s);
    }
    function li(s) {
      {
        var g = typeof Symbol == "function" && Symbol.toStringTag, w = g && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return w;
      }
    }
    function ci(s) {
      try {
        return Sn(s), !1;
      } catch {
        return !0;
      }
    }
    function Sn(s) {
      return "" + s;
    }
    function xn(s) {
      if (ci(s))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", li(s)), Sn(s);
    }
    var tt = A.ReactCurrentOwner, ui = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, En, Pn, fr;
    fr = {};
    function fi(s) {
      if (et.call(s, "ref")) {
        var g = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function di(s) {
      if (et.call(s, "key")) {
        var g = Object.getOwnPropertyDescriptor(s, "key").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function pi(s, g) {
      if (typeof s.ref == "string" && tt.current && g && tt.current.stateNode !== g) {
        var w = D(tt.current.type);
        fr[w] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(tt.current.type), s.ref), fr[w] = !0);
      }
    }
    function hi(s, g) {
      {
        var w = function() {
          En || (En = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        w.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: w,
          configurable: !0
        });
      }
    }
    function mi(s, g) {
      {
        var w = function() {
          Pn || (Pn = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        w.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: w,
          configurable: !0
        });
      }
    }
    var yi = function(s, g, w, P, _, F, N) {
      var C = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: s,
        key: g,
        ref: w,
        props: N,
        // Record the component responsible for creating this element.
        _owner: F
      };
      return C._store = {}, Object.defineProperty(C._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(C, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.defineProperty(C, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(C.props), Object.freeze(C)), C;
    };
    function gi(s, g, w, P, _) {
      {
        var F, N = {}, C = null, Q = null;
        w !== void 0 && (xn(w), C = "" + w), di(g) && (xn(g.key), C = "" + g.key), fi(g) && (Q = g.ref, pi(g, _));
        for (F in g)
          et.call(g, F) && !ui.hasOwnProperty(F) && (N[F] = g[F]);
        if (s && s.defaultProps) {
          var M = s.defaultProps;
          for (F in M)
            N[F] === void 0 && (N[F] = M[F]);
        }
        if (C || Q) {
          var B = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          C && hi(N, B), Q && mi(N, B);
        }
        return yi(s, C, Q, _, P, tt.current, N);
      }
    }
    var dr = A.ReactCurrentOwner, Rn = A.ReactDebugCurrentFrame;
    function Me(s) {
      if (s) {
        var g = s._owner, w = Et(s.type, s._source, g ? g.type : null);
        Rn.setExtraStackFrame(w);
      } else
        Rn.setExtraStackFrame(null);
    }
    var pr;
    pr = !1;
    function hr(s) {
      return typeof s == "object" && s !== null && s.$$typeof === e;
    }
    function On() {
      {
        if (dr.current) {
          var s = D(dr.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
    }
    function vi(s) {
      {
        if (s !== void 0) {
          var g = s.fileName.replace(/^.*[\\\/]/, ""), w = s.lineNumber;
          return `

Check your code at ` + g + ":" + w + ".";
        }
        return "";
      }
    }
    var An = {};
    function bi(s) {
      {
        var g = On();
        if (!g) {
          var w = typeof s == "string" ? s : s.displayName || s.name;
          w && (g = `

Check the top-level render call using <` + w + ">.");
        }
        return g;
      }
    }
    function Tn(s, g) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var w = bi(g);
        if (An[w])
          return;
        An[w] = !0;
        var P = "";
        s && s._owner && s._owner !== dr.current && (P = " It was passed a child from " + D(s._owner.type) + "."), Me(s), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, P), Me(null);
      }
    }
    function Cn(s, g) {
      {
        if (typeof s != "object")
          return;
        if (ur(s))
          for (var w = 0; w < s.length; w++) {
            var P = s[w];
            hr(P) && Tn(P, g);
          }
        else if (hr(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var _ = b(s);
          if (typeof _ == "function" && _ !== s.entries)
            for (var F = _.call(s), N; !(N = F.next()).done; )
              hr(N.value) && Tn(N.value, g);
        }
      }
    }
    function wi(s) {
      {
        var g = s.type;
        if (g == null || typeof g == "string")
          return;
        var w;
        if (typeof g == "function")
          w = g.propTypes;
        else if (typeof g == "object" && (g.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        g.$$typeof === d))
          w = g.propTypes;
        else
          return;
        if (w) {
          var P = D(g);
          ii(w, s.props, "prop", P, s);
        } else if (g.PropTypes !== void 0 && !pr) {
          pr = !0;
          var _ = D(g);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Si(s) {
      {
        for (var g = Object.keys(s.props), w = 0; w < g.length; w++) {
          var P = g[w];
          if (P !== "children" && P !== "key") {
            Me(s), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", P), Me(null);
            break;
          }
        }
        s.ref !== null && (Me(s), E("Invalid attribute `ref` supplied to `React.Fragment`."), Me(null));
      }
    }
    var Nn = {};
    function _n(s, g, w, P, _, F) {
      {
        var N = ie(s);
        if (!N) {
          var C = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (C += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Q = vi(_);
          Q ? C += Q : C += On();
          var M;
          s === null ? M = "null" : ur(s) ? M = "array" : s !== void 0 && s.$$typeof === e ? (M = "<" + (D(s.type) || "Unknown") + " />", C = " Did you accidentally export a JSX literal instead of a component?") : M = typeof s, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", M, C);
        }
        var B = gi(s, g, w, _, F);
        if (B == null)
          return B;
        if (N) {
          var se = g.children;
          if (se !== void 0)
            if (P)
              if (ur(se)) {
                for (var qe = 0; qe < se.length; qe++)
                  Cn(se[qe], s);
                Object.freeze && Object.freeze(se);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Cn(se, s);
        }
        if (et.call(g, "key")) {
          var Ne = D(s), ee = Object.keys(g).filter(function(Ai) {
            return Ai !== "key";
          }), mr = ee.length > 0 ? "{key: someKey, " + ee.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Nn[Ne + mr]) {
            var Oi = ee.length > 0 ? "{" + ee.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, mr, Ne, Oi, Ne), Nn[Ne + mr] = !0;
          }
        }
        return s === n ? Si(B) : wi(B), B;
      }
    }
    function xi(s, g, w) {
      return _n(s, g, w, !0);
    }
    function Ei(s, g, w) {
      return _n(s, g, w, !1);
    }
    var Pi = Ei, Ri = xi;
    nt.Fragment = n, nt.jsx = Pi, nt.jsxs = Ri;
  }()), nt;
}
process.env.NODE_ENV === "production" ? Mr.exports = ji() : Mr.exports = Fi();
var p = Mr.exports;
function $n(t) {
  return typeof t == "object" && t !== null;
}
function qr(t, e, r) {
  const n = Object.keys(e);
  for (let o = 0; o < n.length; o++) {
    const a = n[o], i = e[a], l = t[a], f = r(l, i, a, t, e);
    f != null ? t[a] = f : Array.isArray(i) ? t[a] = qr(l ?? [], i, r) : $n(l) && $n(i) ? t[a] = qr(l ?? {}, i, r) : (l === void 0 || i !== void 0) && (t[a] = i);
  }
  return t;
}
var Je = TypeError;
const ki = {}, $i = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ki
}, Symbol.toStringTag, { value: "Module" })), Di = /* @__PURE__ */ _i($i);
var an = typeof Map == "function" && Map.prototype, yr = Object.getOwnPropertyDescriptor && an ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, qt = an && yr && typeof yr.get == "function" ? yr.get : null, Dn = an && Map.prototype.forEach, sn = typeof Set == "function" && Set.prototype, gr = Object.getOwnPropertyDescriptor && sn ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Ut = sn && gr && typeof gr.get == "function" ? gr.get : null, In = sn && Set.prototype.forEach, Ii = typeof WeakMap == "function" && WeakMap.prototype, lt = Ii ? WeakMap.prototype.has : null, Li = typeof WeakSet == "function" && WeakSet.prototype, ct = Li ? WeakSet.prototype.has : null, Mi = typeof WeakRef == "function" && WeakRef.prototype, Ln = Mi ? WeakRef.prototype.deref : null, qi = Boolean.prototype.valueOf, Ui = Object.prototype.toString, Bi = Function.prototype.toString, Hi = String.prototype.match, ln = String.prototype.slice, Oe = String.prototype.replace, Wi = String.prototype.toUpperCase, Mn = String.prototype.toLowerCase, Io = RegExp.prototype.test, qn = Array.prototype.concat, ve = Array.prototype.join, Vi = Array.prototype.slice, Un = Math.floor, Ur = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, vr = Object.getOwnPropertySymbols, Br = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, ze = typeof Symbol == "function" && typeof Symbol.iterator == "object", ut = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === ze || "symbol") ? Symbol.toStringTag : null, Lo = Object.prototype.propertyIsEnumerable, Bn = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function Hn(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Io.call(/e/, e))
    return e;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var n = t < 0 ? -Un(-t) : Un(t);
    if (n !== t) {
      var o = String(n), a = ln.call(e, o.length + 1);
      return Oe.call(o, r, "$&_") + "." + Oe.call(Oe.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Oe.call(e, r, "$&_");
}
var Hr = Di, Wn = Hr.custom, Vn = Uo(Wn) ? Wn : null, Mo = {
  __proto__: null,
  double: '"',
  single: "'"
}, zi = {
  __proto__: null,
  double: /(["\\])/g,
  single: /(['\\])/g
}, Kt = function t(e, r, n, o) {
  var a = r || {};
  if (xe(a, "quoteStyle") && !xe(Mo, a.quoteStyle))
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (xe(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var i = xe(a, "customInspect") ? a.customInspect : !0;
  if (typeof i != "boolean" && i !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (xe(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (xe(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var l = a.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return Ho(e, a);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var f = String(e);
    return l ? Hn(e, f) : f;
  }
  if (typeof e == "bigint") {
    var c = String(e) + "n";
    return l ? Hn(e, c) : c;
  }
  var u = typeof a.depth > "u" ? 5 : a.depth;
  if (typeof n > "u" && (n = 0), n >= u && u > 0 && typeof e == "object")
    return Wr(e) ? "[Array]" : "[Object]";
  var d = us(a, n);
  if (typeof o > "u")
    o = [];
  else if (Bo(o, e) >= 0)
    return "[Circular]";
  function m(D, z, U) {
    if (z && (o = Vi.call(o), o.push(z)), U) {
      var ce = {
        depth: a.depth
      };
      return xe(a, "quoteStyle") && (ce.quoteStyle = a.quoteStyle), t(D, ce, n + 1, o);
    }
    return t(D, a, n + 1, o);
  }
  if (typeof e == "function" && !zn(e)) {
    var v = ts(e), y = Rt(e, m);
    return "[Function" + (v ? ": " + v : " (anonymous)") + "]" + (y.length > 0 ? " { " + ve.call(y, ", ") + " }" : "");
  }
  if (Uo(e)) {
    var S = ze ? Oe.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Br.call(e);
    return typeof e == "object" && !ze ? ot(S) : S;
  }
  if (ss(e)) {
    for (var b = "<" + Mn.call(String(e.nodeName)), A = e.attributes || [], E = 0; E < A.length; E++)
      b += " " + A[E].name + "=" + qo(Gi(A[E].value), "double", a);
    return b += ">", e.childNodes && e.childNodes.length && (b += "..."), b += "</" + Mn.call(String(e.nodeName)) + ">", b;
  }
  if (Wr(e)) {
    if (e.length === 0)
      return "[]";
    var x = Rt(e, m);
    return d && !cs(x) ? "[" + Vr(x, d) + "]" : "[ " + ve.call(x, ", ") + " ]";
  }
  if (Ji(e)) {
    var I = Rt(e, m);
    return !("cause" in Error.prototype) && "cause" in e && !Lo.call(e, "cause") ? "{ [" + String(e) + "] " + ve.call(qn.call("[cause]: " + m(e.cause), I), ", ") + " }" : I.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + ve.call(I, ", ") + " }";
  }
  if (typeof e == "object" && i) {
    if (Vn && typeof e[Vn] == "function" && Hr)
      return Hr(e, { depth: u - n });
    if (i !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (rs(e)) {
    var k = [];
    return Dn && Dn.call(e, function(D, z) {
      k.push(m(z, e, !0) + " => " + m(D, e));
    }), Gn("Map", qt.call(e), k, d);
  }
  if (as(e)) {
    var $ = [];
    return In && In.call(e, function(D) {
      $.push(m(D, e));
    }), Gn("Set", Ut.call(e), $, d);
  }
  if (ns(e))
    return br("WeakMap");
  if (is(e))
    return br("WeakSet");
  if (os(e))
    return br("WeakRef");
  if (Xi(e))
    return ot(m(Number(e)));
  if (Zi(e))
    return ot(m(Ur.call(e)));
  if (Qi(e))
    return ot(qi.call(e));
  if (Yi(e))
    return ot(m(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (typeof globalThis < "u" && e === globalThis || typeof jn < "u" && e === jn)
    return "{ [object globalThis] }";
  if (!Ki(e) && !zn(e)) {
    var q = Rt(e, m), ne = Bn ? Bn(e) === Object.prototype : e instanceof Object || e.constructor === Object, X = e instanceof Object ? "" : "null prototype", ie = !ne && ut && Object(e) === e && ut in e ? ln.call(Ce(e), 8, -1) : X ? "Object" : "", be = ne || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", oe = be + (ie || X ? "[" + ve.call(qn.call([], ie || [], X || []), ": ") + "] " : "");
    return q.length === 0 ? oe + "{}" : d ? oe + "{" + Vr(q, d) + "}" : oe + "{ " + ve.call(q, ", ") + " }";
  }
  return String(e);
};
function qo(t, e, r) {
  var n = r.quoteStyle || e, o = Mo[n];
  return o + t + o;
}
function Gi(t) {
  return Oe.call(String(t), /"/g, "&quot;");
}
function Le(t) {
  return !ut || !(typeof t == "object" && (ut in t || typeof t[ut] < "u"));
}
function Wr(t) {
  return Ce(t) === "[object Array]" && Le(t);
}
function Ki(t) {
  return Ce(t) === "[object Date]" && Le(t);
}
function zn(t) {
  return Ce(t) === "[object RegExp]" && Le(t);
}
function Ji(t) {
  return Ce(t) === "[object Error]" && Le(t);
}
function Yi(t) {
  return Ce(t) === "[object String]" && Le(t);
}
function Xi(t) {
  return Ce(t) === "[object Number]" && Le(t);
}
function Qi(t) {
  return Ce(t) === "[object Boolean]" && Le(t);
}
function Uo(t) {
  if (ze)
    return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol")
    return !0;
  if (!t || typeof t != "object" || !Br)
    return !1;
  try {
    return Br.call(t), !0;
  } catch {
  }
  return !1;
}
function Zi(t) {
  if (!t || typeof t != "object" || !Ur)
    return !1;
  try {
    return Ur.call(t), !0;
  } catch {
  }
  return !1;
}
var es = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function xe(t, e) {
  return es.call(t, e);
}
function Ce(t) {
  return Ui.call(t);
}
function ts(t) {
  if (t.name)
    return t.name;
  var e = Hi.call(Bi.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function Bo(t, e) {
  if (t.indexOf)
    return t.indexOf(e);
  for (var r = 0, n = t.length; r < n; r++)
    if (t[r] === e)
      return r;
  return -1;
}
function rs(t) {
  if (!qt || !t || typeof t != "object")
    return !1;
  try {
    qt.call(t);
    try {
      Ut.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {
  }
  return !1;
}
function ns(t) {
  if (!lt || !t || typeof t != "object")
    return !1;
  try {
    lt.call(t, lt);
    try {
      ct.call(t, ct);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {
  }
  return !1;
}
function os(t) {
  if (!Ln || !t || typeof t != "object")
    return !1;
  try {
    return Ln.call(t), !0;
  } catch {
  }
  return !1;
}
function as(t) {
  if (!Ut || !t || typeof t != "object")
    return !1;
  try {
    Ut.call(t);
    try {
      qt.call(t);
    } catch {
      return !0;
    }
    return t instanceof Set;
  } catch {
  }
  return !1;
}
function is(t) {
  if (!ct || !t || typeof t != "object")
    return !1;
  try {
    ct.call(t, ct);
    try {
      lt.call(t, lt);
    } catch {
      return !0;
    }
    return t instanceof WeakSet;
  } catch {
  }
  return !1;
}
function ss(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function Ho(t, e) {
  if (t.length > e.maxStringLength) {
    var r = t.length - e.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return Ho(ln.call(t, 0, e.maxStringLength), e) + n;
  }
  var o = zi[e.quoteStyle || "single"];
  o.lastIndex = 0;
  var a = Oe.call(Oe.call(t, o, "\\$1"), /[\x00-\x1f]/g, ls);
  return qo(a, "single", e);
}
function ls(t) {
  var e = t.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + Wi.call(e.toString(16));
}
function ot(t) {
  return "Object(" + t + ")";
}
function br(t) {
  return t + " { ? }";
}
function Gn(t, e, r, n) {
  var o = n ? Vr(r, n) : ve.call(r, ", ");
  return t + " (" + e + ") {" + o + "}";
}
function cs(t) {
  for (var e = 0; e < t.length; e++)
    if (Bo(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function us(t, e) {
  var r;
  if (t.indent === "	")
    r = "	";
  else if (typeof t.indent == "number" && t.indent > 0)
    r = ve.call(Array(t.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: ve.call(Array(e + 1), r)
  };
}
function Vr(t, e) {
  if (t.length === 0)
    return "";
  var r = `
` + e.prev + e.base;
  return r + ve.call(t, "," + r) + `
` + e.prev;
}
function Rt(t, e) {
  var r = Wr(t), n = [];
  if (r) {
    n.length = t.length;
    for (var o = 0; o < t.length; o++)
      n[o] = xe(t, o) ? e(t[o], t) : "";
  }
  var a = typeof vr == "function" ? vr(t) : [], i;
  if (ze) {
    i = {};
    for (var l = 0; l < a.length; l++)
      i["$" + a[l]] = a[l];
  }
  for (var f in t)
    xe(t, f) && (r && String(Number(f)) === f && f < t.length || ze && i["$" + f] instanceof Symbol || (Io.call(/[^\w$]/, f) ? n.push(e(f, t) + ": " + e(t[f], t)) : n.push(f + ": " + e(t[f], t))));
  if (typeof vr == "function")
    for (var c = 0; c < a.length; c++)
      Lo.call(t, a[c]) && n.push("[" + e(a[c]) + "]: " + e(t[a[c]], t));
  return n;
}
var fs = Kt, ds = Je, Jt = function(t, e, r) {
  for (var n = t, o; (o = n.next) != null; n = o)
    if (o.key === e)
      return n.next = o.next, r || (o.next = /** @type {NonNullable<typeof list.next>} */
      t.next, t.next = o), o;
}, ps = function(t, e) {
  if (t) {
    var r = Jt(t, e);
    return r && r.value;
  }
}, hs = function(t, e, r) {
  var n = Jt(t, e);
  n ? n.value = r : t.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: e,
    next: t.next,
    value: r
  };
}, ms = function(t, e) {
  return t ? !!Jt(t, e) : !1;
}, ys = function(t, e) {
  if (t)
    return Jt(t, e, !0);
}, gs = function() {
  var e, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new ds("Side channel does not contain " + fs(n));
    },
    delete: function(n) {
      var o = e && e.next, a = ys(e, n);
      return a && o && o === a && (e = void 0), !!a;
    },
    get: function(n) {
      return ps(e, n);
    },
    has: function(n) {
      return ms(e, n);
    },
    set: function(n, o) {
      e || (e = {
        next: void 0
      }), hs(
        /** @type {NonNullable<typeof $o>} */
        e,
        n,
        o
      );
    }
  };
  return r;
}, Wo = Object, vs = Error, bs = EvalError, ws = RangeError, Ss = ReferenceError, xs = SyntaxError, Es = URIError, Ps = Math.abs, Rs = Math.floor, Os = Math.max, As = Math.min, Ts = Math.pow, Cs = Math.round, Ns = Number.isNaN || function(e) {
  return e !== e;
}, _s = Ns, js = function(e) {
  return _s(e) || e === 0 ? e : e < 0 ? -1 : 1;
}, Fs = Object.getOwnPropertyDescriptor, Tt = Fs;
if (Tt)
  try {
    Tt([], "length");
  } catch {
    Tt = null;
  }
var Vo = Tt, Ct = Object.defineProperty || !1;
if (Ct)
  try {
    Ct({}, "a", { value: 1 });
  } catch {
    Ct = !1;
  }
var ks = Ct, wr, Kn;
function $s() {
  return Kn || (Kn = 1, wr = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var e = {}, r = Symbol("test"), n = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var o = 42;
    e[r] = o;
    for (var a in e)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
      return !1;
    var i = Object.getOwnPropertySymbols(e);
    if (i.length !== 1 || i[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var l = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(e, r)
      );
      if (l.value !== o || l.enumerable !== !0)
        return !1;
    }
    return !0;
  }), wr;
}
var Sr, Jn;
function Ds() {
  if (Jn)
    return Sr;
  Jn = 1;
  var t = typeof Symbol < "u" && Symbol, e = $s();
  return Sr = function() {
    return typeof t != "function" || typeof Symbol != "function" || typeof t("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : e();
  }, Sr;
}
var xr, Yn;
function zo() {
  return Yn || (Yn = 1, xr = typeof Reflect < "u" && Reflect.getPrototypeOf || null), xr;
}
var Er, Xn;
function Go() {
  if (Xn)
    return Er;
  Xn = 1;
  var t = Wo;
  return Er = t.getPrototypeOf || null, Er;
}
var Is = "Function.prototype.bind called on incompatible ", Ls = Object.prototype.toString, Ms = Math.max, qs = "[object Function]", Qn = function(e, r) {
  for (var n = [], o = 0; o < e.length; o += 1)
    n[o] = e[o];
  for (var a = 0; a < r.length; a += 1)
    n[a + e.length] = r[a];
  return n;
}, Us = function(e, r) {
  for (var n = [], o = r || 0, a = 0; o < e.length; o += 1, a += 1)
    n[a] = e[o];
  return n;
}, Bs = function(t, e) {
  for (var r = "", n = 0; n < t.length; n += 1)
    r += t[n], n + 1 < t.length && (r += e);
  return r;
}, Hs = function(e) {
  var r = this;
  if (typeof r != "function" || Ls.apply(r) !== qs)
    throw new TypeError(Is + r);
  for (var n = Us(arguments, 1), o, a = function() {
    if (this instanceof o) {
      var u = r.apply(
        this,
        Qn(n, arguments)
      );
      return Object(u) === u ? u : this;
    }
    return r.apply(
      e,
      Qn(n, arguments)
    );
  }, i = Ms(0, r.length - n.length), l = [], f = 0; f < i; f++)
    l[f] = "$" + f;
  if (o = Function("binder", "return function (" + Bs(l, ",") + "){ return binder.apply(this,arguments); }")(a), r.prototype) {
    var c = function() {
    };
    c.prototype = r.prototype, o.prototype = new c(), c.prototype = null;
  }
  return o;
}, Ws = Hs, Yt = Function.prototype.bind || Ws, cn = Function.prototype.call, Pr, Zn;
function Ko() {
  return Zn || (Zn = 1, Pr = Function.prototype.apply), Pr;
}
var Vs = typeof Reflect < "u" && Reflect && Reflect.apply, zs = Yt, Gs = Ko(), Ks = cn, Js = Vs, Ys = Js || zs.call(Ks, Gs), Xs = Yt, Qs = Je, Zs = cn, el = Ys, Jo = function(e) {
  if (e.length < 1 || typeof e[0] != "function")
    throw new Qs("a function is required");
  return el(Xs, Zs, e);
}, Rr, eo;
function tl() {
  if (eo)
    return Rr;
  eo = 1;
  var t = Jo, e = Vo, r;
  try {
    r = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (i) {
    if (!i || typeof i != "object" || !("code" in i) || i.code !== "ERR_PROTO_ACCESS")
      throw i;
  }
  var n = !!r && e && e(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), o = Object, a = o.getPrototypeOf;
  return Rr = n && typeof n.get == "function" ? t([n.get]) : typeof a == "function" ? (
    /** @type {import('./get')} */
    function(l) {
      return a(l == null ? l : o(l));
    }
  ) : !1, Rr;
}
var Or, to;
function rl() {
  if (to)
    return Or;
  to = 1;
  var t = zo(), e = Go(), r = tl();
  return Or = t ? function(o) {
    return t(o);
  } : e ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return e(o);
  } : r ? function(o) {
    return r(o);
  } : null, Or;
}
var Ar, ro;
function nl() {
  if (ro)
    return Ar;
  ro = 1;
  var t = Function.prototype.call, e = Object.prototype.hasOwnProperty, r = Yt;
  return Ar = r.call(t, e), Ar;
}
var T, ol = Wo, al = vs, il = bs, sl = ws, ll = Ss, Ge = xs, We = Je, cl = Es, ul = Ps, fl = Rs, dl = Os, pl = As, hl = Ts, ml = Cs, yl = js, Yo = Function, Tr = function(t) {
  try {
    return Yo('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, pt = Vo, gl = ks, Cr = function() {
  throw new We();
}, vl = pt ? function() {
  try {
    return arguments.callee, Cr;
  } catch {
    try {
      return pt(arguments, "callee").get;
    } catch {
      return Cr;
    }
  }
}() : Cr, Ue = Ds()(), K = rl(), bl = Go(), wl = zo(), Xo = Ko(), mt = cn, He = {}, Sl = typeof Uint8Array > "u" || !K ? T : K(Uint8Array), $e = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? T : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? T : ArrayBuffer,
  "%ArrayIteratorPrototype%": Ue && K ? K([][Symbol.iterator]()) : T,
  "%AsyncFromSyncIteratorPrototype%": T,
  "%AsyncFunction%": He,
  "%AsyncGenerator%": He,
  "%AsyncGeneratorFunction%": He,
  "%AsyncIteratorPrototype%": He,
  "%Atomics%": typeof Atomics > "u" ? T : Atomics,
  "%BigInt%": typeof BigInt > "u" ? T : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? T : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? T : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? T : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": al,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": il,
  "%Float16Array%": typeof Float16Array > "u" ? T : Float16Array,
  "%Float32Array%": typeof Float32Array > "u" ? T : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? T : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? T : FinalizationRegistry,
  "%Function%": Yo,
  "%GeneratorFunction%": He,
  "%Int8Array%": typeof Int8Array > "u" ? T : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? T : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? T : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Ue && K ? K(K([][Symbol.iterator]())) : T,
  "%JSON%": typeof JSON == "object" ? JSON : T,
  "%Map%": typeof Map > "u" ? T : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Ue || !K ? T : K((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": ol,
  "%Object.getOwnPropertyDescriptor%": pt,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? T : Promise,
  "%Proxy%": typeof Proxy > "u" ? T : Proxy,
  "%RangeError%": sl,
  "%ReferenceError%": ll,
  "%Reflect%": typeof Reflect > "u" ? T : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? T : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Ue || !K ? T : K((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? T : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Ue && K ? K(""[Symbol.iterator]()) : T,
  "%Symbol%": Ue ? Symbol : T,
  "%SyntaxError%": Ge,
  "%ThrowTypeError%": vl,
  "%TypedArray%": Sl,
  "%TypeError%": We,
  "%Uint8Array%": typeof Uint8Array > "u" ? T : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? T : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? T : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? T : Uint32Array,
  "%URIError%": cl,
  "%WeakMap%": typeof WeakMap > "u" ? T : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? T : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? T : WeakSet,
  "%Function.prototype.call%": mt,
  "%Function.prototype.apply%": Xo,
  "%Object.defineProperty%": gl,
  "%Object.getPrototypeOf%": bl,
  "%Math.abs%": ul,
  "%Math.floor%": fl,
  "%Math.max%": dl,
  "%Math.min%": pl,
  "%Math.pow%": hl,
  "%Math.round%": ml,
  "%Math.sign%": yl,
  "%Reflect.getPrototypeOf%": wl
};
if (K)
  try {
    null.error;
  } catch (t) {
    var xl = K(K(t));
    $e["%Error.prototype%"] = xl;
  }
var El = function t(e) {
  var r;
  if (e === "%AsyncFunction%")
    r = Tr("async function () {}");
  else if (e === "%GeneratorFunction%")
    r = Tr("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    r = Tr("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var n = t("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var o = t("%AsyncGenerator%");
    o && K && (r = K(o.prototype));
  }
  return $e[e] = r, r;
}, no = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, yt = Yt, Bt = nl(), Pl = yt.call(mt, Array.prototype.concat), Rl = yt.call(Xo, Array.prototype.splice), oo = yt.call(mt, String.prototype.replace), Ht = yt.call(mt, String.prototype.slice), Ol = yt.call(mt, RegExp.prototype.exec), Al = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Tl = /\\(\\)?/g, Cl = function(e) {
  var r = Ht(e, 0, 1), n = Ht(e, -1);
  if (r === "%" && n !== "%")
    throw new Ge("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new Ge("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return oo(e, Al, function(a, i, l, f) {
    o[o.length] = l ? oo(f, Tl, "$1") : i || a;
  }), o;
}, Nl = function(e, r) {
  var n = e, o;
  if (Bt(no, n) && (o = no[n], n = "%" + o[0] + "%"), Bt($e, n)) {
    var a = $e[n];
    if (a === He && (a = El(n)), typeof a > "u" && !r)
      throw new We("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: n,
      value: a
    };
  }
  throw new Ge("intrinsic " + e + " does not exist!");
}, un = function(e, r) {
  if (typeof e != "string" || e.length === 0)
    throw new We("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new We('"allowMissing" argument must be a boolean');
  if (Ol(/^%?[^%]*%?$/, e) === null)
    throw new Ge("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = Cl(e), o = n.length > 0 ? n[0] : "", a = Nl("%" + o + "%", r), i = a.name, l = a.value, f = !1, c = a.alias;
  c && (o = c[0], Rl(n, Pl([0, 1], c)));
  for (var u = 1, d = !0; u < n.length; u += 1) {
    var m = n[u], v = Ht(m, 0, 1), y = Ht(m, -1);
    if ((v === '"' || v === "'" || v === "`" || y === '"' || y === "'" || y === "`") && v !== y)
      throw new Ge("property names with quotes must have matching quotes");
    if ((m === "constructor" || !d) && (f = !0), o += "." + m, i = "%" + o + "%", Bt($e, i))
      l = $e[i];
    else if (l != null) {
      if (!(m in l)) {
        if (!r)
          throw new We("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (pt && u + 1 >= n.length) {
        var S = pt(l, m);
        d = !!S, d && "get" in S && !("originalValue" in S.get) ? l = S.get : l = l[m];
      } else
        d = Bt(l, m), l = l[m];
      d && !f && ($e[i] = l);
    }
  }
  return l;
}, Qo = un, Zo = Jo, _l = Zo([Qo("%String.prototype.indexOf%")]), ea = function(e, r) {
  var n = (
    /** @type {(this: unknown, ...args: unknown[]) => unknown} */
    Qo(e, !!r)
  );
  return typeof n == "function" && _l(e, ".prototype.") > -1 ? Zo(
    /** @type {const} */
    [n]
  ) : n;
}, jl = un, gt = ea, Fl = Kt, kl = Je, ao = jl("%Map%", !0), $l = gt("Map.prototype.get", !0), Dl = gt("Map.prototype.set", !0), Il = gt("Map.prototype.has", !0), Ll = gt("Map.prototype.delete", !0), Ml = gt("Map.prototype.size", !0), ta = !!ao && /** @type {Exclude<import('.'), false>} */
function() {
  var e, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new kl("Side channel does not contain " + Fl(n));
    },
    delete: function(n) {
      if (e) {
        var o = Ll(e, n);
        return Ml(e) === 0 && (e = void 0), o;
      }
      return !1;
    },
    get: function(n) {
      if (e)
        return $l(e, n);
    },
    has: function(n) {
      return e ? Il(e, n) : !1;
    },
    set: function(n, o) {
      e || (e = new ao()), Dl(e, n, o);
    }
  };
  return r;
}, ql = un, Xt = ea, Ul = Kt, Ot = ta, Bl = Je, Be = ql("%WeakMap%", !0), Hl = Xt("WeakMap.prototype.get", !0), Wl = Xt("WeakMap.prototype.set", !0), Vl = Xt("WeakMap.prototype.has", !0), zl = Xt("WeakMap.prototype.delete", !0), Gl = Be ? (
  /** @type {Exclude<import('.'), false>} */
  function() {
    var e, r, n = {
      assert: function(o) {
        if (!n.has(o))
          throw new Bl("Side channel does not contain " + Ul(o));
      },
      delete: function(o) {
        if (Be && o && (typeof o == "object" || typeof o == "function")) {
          if (e)
            return zl(e, o);
        } else if (Ot && r)
          return r.delete(o);
        return !1;
      },
      get: function(o) {
        return Be && o && (typeof o == "object" || typeof o == "function") && e ? Hl(e, o) : r && r.get(o);
      },
      has: function(o) {
        return Be && o && (typeof o == "object" || typeof o == "function") && e ? Vl(e, o) : !!r && r.has(o);
      },
      set: function(o, a) {
        Be && o && (typeof o == "object" || typeof o == "function") ? (e || (e = new Be()), Wl(e, o, a)) : Ot && (r || (r = Ot()), r.set(o, a));
      }
    };
    return n;
  }
) : Ot, Kl = Je, Jl = Kt, Yl = gs, Xl = ta, Ql = Gl, Zl = Ql || Xl || Yl, ec = function() {
  var e, r = {
    assert: function(n) {
      if (!r.has(n))
        throw new Kl("Side channel does not contain " + Jl(n));
    },
    delete: function(n) {
      return !!e && e.delete(n);
    },
    get: function(n) {
      return e && e.get(n);
    },
    has: function(n) {
      return !!e && e.has(n);
    },
    set: function(n, o) {
      e || (e = Zl()), e.set(n, o);
    }
  };
  return r;
}, tc = String.prototype.replace, rc = /%20/g, Nr = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, fn = {
  default: Nr.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return tc.call(t, rc, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: Nr.RFC1738,
  RFC3986: Nr.RFC3986
}, nc = fn, _r = Object.prototype.hasOwnProperty, je = Array.isArray, me = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), oc = function(e) {
  for (; e.length > 1; ) {
    var r = e.pop(), n = r.obj[r.prop];
    if (je(n)) {
      for (var o = [], a = 0; a < n.length; ++a)
        typeof n[a] < "u" && o.push(n[a]);
      r.obj[r.prop] = o;
    }
  }
}, ra = function(e, r) {
  for (var n = r && r.plainObjects ? { __proto__: null } : {}, o = 0; o < e.length; ++o)
    typeof e[o] < "u" && (n[o] = e[o]);
  return n;
}, ac = function t(e, r, n) {
  if (!r)
    return e;
  if (typeof r != "object" && typeof r != "function") {
    if (je(e))
      e.push(r);
    else if (e && typeof e == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !_r.call(Object.prototype, r)) && (e[r] = !0);
    else
      return [e, r];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(r);
  var o = e;
  return je(e) && !je(r) && (o = ra(e, n)), je(e) && je(r) ? (r.forEach(function(a, i) {
    if (_r.call(e, i)) {
      var l = e[i];
      l && typeof l == "object" && a && typeof a == "object" ? e[i] = t(l, a, n) : e.push(a);
    } else
      e[i] = a;
  }), e) : Object.keys(r).reduce(function(a, i) {
    var l = r[i];
    return _r.call(a, i) ? a[i] = t(a[i], l, n) : a[i] = l, a;
  }, o);
}, ic = function(e, r) {
  return Object.keys(r).reduce(function(n, o) {
    return n[o] = r[o], n;
  }, e);
}, sc = function(t, e, r) {
  var n = t.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, jr = 1024, lc = function(e, r, n, o, a) {
  if (e.length === 0)
    return e;
  var i = e;
  if (typeof e == "symbol" ? i = Symbol.prototype.toString.call(e) : typeof e != "string" && (i = String(e)), n === "iso-8859-1")
    return escape(i).replace(/%u[0-9a-f]{4}/gi, function(v) {
      return "%26%23" + parseInt(v.slice(2), 16) + "%3B";
    });
  for (var l = "", f = 0; f < i.length; f += jr) {
    for (var c = i.length >= jr ? i.slice(f, f + jr) : i, u = [], d = 0; d < c.length; ++d) {
      var m = c.charCodeAt(d);
      if (m === 45 || m === 46 || m === 95 || m === 126 || m >= 48 && m <= 57 || m >= 65 && m <= 90 || m >= 97 && m <= 122 || a === nc.RFC1738 && (m === 40 || m === 41)) {
        u[u.length] = c.charAt(d);
        continue;
      }
      if (m < 128) {
        u[u.length] = me[m];
        continue;
      }
      if (m < 2048) {
        u[u.length] = me[192 | m >> 6] + me[128 | m & 63];
        continue;
      }
      if (m < 55296 || m >= 57344) {
        u[u.length] = me[224 | m >> 12] + me[128 | m >> 6 & 63] + me[128 | m & 63];
        continue;
      }
      d += 1, m = 65536 + ((m & 1023) << 10 | c.charCodeAt(d) & 1023), u[u.length] = me[240 | m >> 18] + me[128 | m >> 12 & 63] + me[128 | m >> 6 & 63] + me[128 | m & 63];
    }
    l += u.join("");
  }
  return l;
}, cc = function(e) {
  for (var r = [{ obj: { o: e }, prop: "o" }], n = [], o = 0; o < r.length; ++o)
    for (var a = r[o], i = a.obj[a.prop], l = Object.keys(i), f = 0; f < l.length; ++f) {
      var c = l[f], u = i[c];
      typeof u == "object" && u !== null && n.indexOf(u) === -1 && (r.push({ obj: i, prop: c }), n.push(u));
    }
  return oc(r), e;
}, uc = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, fc = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, dc = function(e, r) {
  return [].concat(e, r);
}, pc = function(e, r) {
  if (je(e)) {
    for (var n = [], o = 0; o < e.length; o += 1)
      n.push(r(e[o]));
    return n;
  }
  return r(e);
}, na = {
  arrayToObject: ra,
  assign: ic,
  combine: dc,
  compact: cc,
  decode: sc,
  encode: lc,
  isBuffer: fc,
  isRegExp: uc,
  maybeMap: pc,
  merge: ac
}, oa = ec, Nt = na, ft = fn, hc = Object.prototype.hasOwnProperty, aa = {
  brackets: function(e) {
    return e + "[]";
  },
  comma: "comma",
  indices: function(e, r) {
    return e + "[" + r + "]";
  },
  repeat: function(e) {
    return e;
  }
}, ge = Array.isArray, mc = Array.prototype.push, ia = function(t, e) {
  mc.apply(t, ge(e) ? e : [e]);
}, yc = Date.prototype.toISOString, io = ft.default, W = {
  addQueryPrefix: !1,
  allowDots: !1,
  allowEmptyArrays: !1,
  arrayFormat: "indices",
  charset: "utf-8",
  charsetSentinel: !1,
  commaRoundTrip: !1,
  delimiter: "&",
  encode: !0,
  encodeDotInKeys: !1,
  encoder: Nt.encode,
  encodeValuesOnly: !1,
  filter: void 0,
  format: io,
  formatter: ft.formatters[io],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return yc.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, gc = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, Fr = {}, vc = function t(e, r, n, o, a, i, l, f, c, u, d, m, v, y, S, b, A, E) {
  for (var x = e, I = E, k = 0, $ = !1; (I = I.get(Fr)) !== void 0 && !$; ) {
    var q = I.get(e);
    if (k += 1, typeof q < "u") {
      if (q === k)
        throw new RangeError("Cyclic object value");
      $ = !0;
    }
    typeof I.get(Fr) > "u" && (k = 0);
  }
  if (typeof u == "function" ? x = u(r, x) : x instanceof Date ? x = v(x) : n === "comma" && ge(x) && (x = Nt.maybeMap(x, function(Pe) {
    return Pe instanceof Date ? v(Pe) : Pe;
  })), x === null) {
    if (i)
      return c && !b ? c(r, W.encoder, A, "key", y) : r;
    x = "";
  }
  if (gc(x) || Nt.isBuffer(x)) {
    if (c) {
      var ne = b ? r : c(r, W.encoder, A, "key", y);
      return [S(ne) + "=" + S(c(x, W.encoder, A, "value", y))];
    }
    return [S(r) + "=" + S(String(x))];
  }
  var X = [];
  if (typeof x > "u")
    return X;
  var ie;
  if (n === "comma" && ge(x))
    b && c && (x = Nt.maybeMap(x, c)), ie = [{ value: x.length > 0 ? x.join(",") || null : void 0 }];
  else if (ge(u))
    ie = u;
  else {
    var be = Object.keys(x);
    ie = d ? be.sort(d) : be;
  }
  var oe = f ? String(r).replace(/\./g, "%2E") : String(r), D = o && ge(x) && x.length === 1 ? oe + "[]" : oe;
  if (a && ge(x) && x.length === 0)
    return D + "[]";
  for (var z = 0; z < ie.length; ++z) {
    var U = ie[z], ce = typeof U == "object" && U && typeof U.value < "u" ? U.value : x[U];
    if (!(l && ce === null)) {
      var we = m && f ? String(U).replace(/\./g, "%2E") : String(U), Ee = ge(x) ? typeof n == "function" ? n(D, we) : D : D + (m ? "." + we : "[" + we + "]");
      E.set(e, k);
      var ae = oa();
      ae.set(Fr, E), ia(X, t(
        ce,
        Ee,
        n,
        o,
        a,
        i,
        l,
        f,
        n === "comma" && b && ge(x) ? null : c,
        u,
        d,
        m,
        v,
        y,
        S,
        b,
        A,
        ae
      ));
    }
  }
  return X;
}, bc = function(e) {
  if (!e)
    return W;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.encodeDotInKeys < "u" && typeof e.encodeDotInKeys != "boolean")
    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = e.charset || W.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = ft.default;
  if (typeof e.format < "u") {
    if (!hc.call(ft.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var o = ft.formatters[n], a = W.filter;
  (typeof e.filter == "function" || ge(e.filter)) && (a = e.filter);
  var i;
  if (e.arrayFormat in aa ? i = e.arrayFormat : "indices" in e ? i = e.indices ? "indices" : "repeat" : i = W.arrayFormat, "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var l = typeof e.allowDots > "u" ? e.encodeDotInKeys === !0 ? !0 : W.allowDots : !!e.allowDots;
  return {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : W.addQueryPrefix,
    allowDots: l,
    allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : W.allowEmptyArrays,
    arrayFormat: i,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : W.charsetSentinel,
    commaRoundTrip: !!e.commaRoundTrip,
    delimiter: typeof e.delimiter > "u" ? W.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : W.encode,
    encodeDotInKeys: typeof e.encodeDotInKeys == "boolean" ? e.encodeDotInKeys : W.encodeDotInKeys,
    encoder: typeof e.encoder == "function" ? e.encoder : W.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : W.encodeValuesOnly,
    filter: a,
    format: n,
    formatter: o,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : W.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : W.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : W.strictNullHandling
  };
}, wc = function(t, e) {
  var r = t, n = bc(e), o, a;
  typeof n.filter == "function" ? (a = n.filter, r = a("", r)) : ge(n.filter) && (a = n.filter, o = a);
  var i = [];
  if (typeof r != "object" || r === null)
    return "";
  var l = aa[n.arrayFormat], f = l === "comma" && n.commaRoundTrip;
  o || (o = Object.keys(r)), n.sort && o.sort(n.sort);
  for (var c = oa(), u = 0; u < o.length; ++u) {
    var d = o[u], m = r[d];
    n.skipNulls && m === null || ia(i, vc(
      m,
      d,
      l,
      f,
      n.allowEmptyArrays,
      n.strictNullHandling,
      n.skipNulls,
      n.encodeDotInKeys,
      n.encode ? n.encoder : null,
      n.filter,
      n.sort,
      n.allowDots,
      n.serializeDate,
      n.format,
      n.formatter,
      n.encodeValuesOnly,
      n.charset,
      c
    ));
  }
  var v = i.join(n.delimiter), y = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? y += "utf8=%26%2310003%3B&" : y += "utf8=%E2%9C%93&"), v.length > 0 ? y + v : "";
}, De = na, zr = Object.prototype.hasOwnProperty, so = Array.isArray, L = {
  allowDots: !1,
  allowEmptyArrays: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decodeDotInKeys: !1,
  decoder: De.decode,
  delimiter: "&",
  depth: 5,
  duplicates: "combine",
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictDepth: !1,
  strictNullHandling: !1,
  throwOnLimitExceeded: !1
}, Sc = function(t) {
  return t.replace(/&#(\d+);/g, function(e, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, sa = function(t, e, r) {
  if (t && typeof t == "string" && e.comma && t.indexOf(",") > -1)
    return t.split(",");
  if (e.throwOnLimitExceeded && r >= e.arrayLimit)
    throw new RangeError("Array limit exceeded. Only " + e.arrayLimit + " element" + (e.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
  return t;
}, xc = "utf8=%26%2310003%3B", Ec = "utf8=%E2%9C%93", Pc = function(e, r) {
  var n = { __proto__: null }, o = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e;
  o = o.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  var a = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, i = o.split(
    r.delimiter,
    r.throwOnLimitExceeded ? a + 1 : a
  );
  if (r.throwOnLimitExceeded && i.length > a)
    throw new RangeError("Parameter limit exceeded. Only " + a + " parameter" + (a === 1 ? "" : "s") + " allowed.");
  var l = -1, f, c = r.charset;
  if (r.charsetSentinel)
    for (f = 0; f < i.length; ++f)
      i[f].indexOf("utf8=") === 0 && (i[f] === Ec ? c = "utf-8" : i[f] === xc && (c = "iso-8859-1"), l = f, f = i.length);
  for (f = 0; f < i.length; ++f)
    if (f !== l) {
      var u = i[f], d = u.indexOf("]="), m = d === -1 ? u.indexOf("=") : d + 1, v, y;
      m === -1 ? (v = r.decoder(u, L.decoder, c, "key"), y = r.strictNullHandling ? null : "") : (v = r.decoder(u.slice(0, m), L.decoder, c, "key"), y = De.maybeMap(
        sa(
          u.slice(m + 1),
          r,
          so(n[v]) ? n[v].length : 0
        ),
        function(b) {
          return r.decoder(b, L.decoder, c, "value");
        }
      )), y && r.interpretNumericEntities && c === "iso-8859-1" && (y = Sc(String(y))), u.indexOf("[]=") > -1 && (y = so(y) ? [y] : y);
      var S = zr.call(n, v);
      S && r.duplicates === "combine" ? n[v] = De.combine(n[v], y) : (!S || r.duplicates === "last") && (n[v] = y);
    }
  return n;
}, Rc = function(t, e, r, n) {
  var o = 0;
  if (t.length > 0 && t[t.length - 1] === "[]") {
    var a = t.slice(0, -1).join("");
    o = Array.isArray(e) && e[a] ? e[a].length : 0;
  }
  for (var i = n ? e : sa(e, r, o), l = t.length - 1; l >= 0; --l) {
    var f, c = t[l];
    if (c === "[]" && r.parseArrays)
      f = r.allowEmptyArrays && (i === "" || r.strictNullHandling && i === null) ? [] : De.combine([], i);
    else {
      f = r.plainObjects ? { __proto__: null } : {};
      var u = c.charAt(0) === "[" && c.charAt(c.length - 1) === "]" ? c.slice(1, -1) : c, d = r.decodeDotInKeys ? u.replace(/%2E/g, ".") : u, m = parseInt(d, 10);
      !r.parseArrays && d === "" ? f = { 0: i } : !isNaN(m) && c !== d && String(m) === d && m >= 0 && r.parseArrays && m <= r.arrayLimit ? (f = [], f[m] = i) : d !== "__proto__" && (f[d] = i);
    }
    i = f;
  }
  return i;
}, Oc = function(e, r, n, o) {
  if (e) {
    var a = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, i = /(\[[^[\]]*])/, l = /(\[[^[\]]*])/g, f = n.depth > 0 && i.exec(a), c = f ? a.slice(0, f.index) : a, u = [];
    if (c) {
      if (!n.plainObjects && zr.call(Object.prototype, c) && !n.allowPrototypes)
        return;
      u.push(c);
    }
    for (var d = 0; n.depth > 0 && (f = l.exec(a)) !== null && d < n.depth; ) {
      if (d += 1, !n.plainObjects && zr.call(Object.prototype, f[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      u.push(f[1]);
    }
    if (f) {
      if (n.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + n.depth + " and strictDepth is true");
      u.push("[" + a.slice(f.index) + "]");
    }
    return Rc(u, r, n, o);
  }
}, Ac = function(e) {
  if (!e)
    return L;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.decodeDotInKeys < "u" && typeof e.decodeDotInKeys != "boolean")
    throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.decoder !== null && typeof e.decoder < "u" && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  if (typeof e.throwOnLimitExceeded < "u" && typeof e.throwOnLimitExceeded != "boolean")
    throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
  var r = typeof e.charset > "u" ? L.charset : e.charset, n = typeof e.duplicates > "u" ? L.duplicates : e.duplicates;
  if (n !== "combine" && n !== "first" && n !== "last")
    throw new TypeError("The duplicates option must be either combine, first, or last");
  var o = typeof e.allowDots > "u" ? e.decodeDotInKeys === !0 ? !0 : L.allowDots : !!e.allowDots;
  return {
    allowDots: o,
    allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : L.allowEmptyArrays,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : L.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : L.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : L.arrayLimit,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : L.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : L.comma,
    decodeDotInKeys: typeof e.decodeDotInKeys == "boolean" ? e.decodeDotInKeys : L.decodeDotInKeys,
    decoder: typeof e.decoder == "function" ? e.decoder : L.decoder,
    delimiter: typeof e.delimiter == "string" || De.isRegExp(e.delimiter) ? e.delimiter : L.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : L.depth,
    duplicates: n,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : L.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : L.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : L.plainObjects,
    strictDepth: typeof e.strictDepth == "boolean" ? !!e.strictDepth : L.strictDepth,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : L.strictNullHandling,
    throwOnLimitExceeded: typeof e.throwOnLimitExceeded == "boolean" ? e.throwOnLimitExceeded : !1
  };
}, Tc = function(t, e) {
  var r = Ac(e);
  if (t === "" || t === null || typeof t > "u")
    return r.plainObjects ? { __proto__: null } : {};
  for (var n = typeof t == "string" ? Pc(t, r) : t, o = r.plainObjects ? { __proto__: null } : {}, a = Object.keys(n), i = 0; i < a.length; ++i) {
    var l = a[i], f = Oc(l, n[l], r, typeof t == "string");
    o = De.merge(o, f, r);
  }
  return r.allowSparse === !0 ? o : De.compact(o);
}, Cc = wc, Nc = Tc, _c = fn, lo = {
  formats: _c,
  parse: Nc,
  stringify: Cc
};
function la(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: jc } = Object.prototype, { getPrototypeOf: dn } = Object, { iterator: Qt, toStringTag: ca } = Symbol, Zt = ((t) => (e) => {
  const r = jc.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), pe = (t) => (t = t.toLowerCase(), (e) => Zt(e) === t), er = (t) => (e) => typeof e === t, { isArray: Ye } = Array, ht = er("undefined");
function Fc(t) {
  return t !== null && !ht(t) && t.constructor !== null && !ht(t.constructor) && re(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const ua = pe("ArrayBuffer");
function kc(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && ua(t.buffer), e;
}
const $c = er("string"), re = er("function"), fa = er("number"), tr = (t) => t !== null && typeof t == "object", Dc = (t) => t === !0 || t === !1, _t = (t) => {
  if (Zt(t) !== "object")
    return !1;
  const e = dn(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(ca in t) && !(Qt in t);
}, Ic = pe("Date"), Lc = pe("File"), Mc = pe("Blob"), qc = pe("FileList"), Uc = (t) => tr(t) && re(t.pipe), Bc = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || re(t.append) && ((e = Zt(t)) === "formdata" || // detect form-data instance
  e === "object" && re(t.toString) && t.toString() === "[object FormData]"));
}, Hc = pe("URLSearchParams"), [Wc, Vc, zc, Gc] = ["ReadableStream", "Request", "Response", "Headers"].map(pe), Kc = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function vt(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, o;
  if (typeof t != "object" && (t = [t]), Ye(t))
    for (n = 0, o = t.length; n < o; n++)
      e.call(null, t[n], n, t);
  else {
    const a = r ? Object.getOwnPropertyNames(t) : Object.keys(t), i = a.length;
    let l;
    for (n = 0; n < i; n++)
      l = a[n], e.call(null, t[l], l, t);
  }
}
function da(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], e === o.toLowerCase())
      return o;
  return null;
}
const Fe = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), pa = (t) => !ht(t) && t !== Fe;
function Gr() {
  const { caseless: t } = pa(this) && this || {}, e = {}, r = (n, o) => {
    const a = t && da(e, o) || o;
    _t(e[a]) && _t(n) ? e[a] = Gr(e[a], n) : _t(n) ? e[a] = Gr({}, n) : Ye(n) ? e[a] = n.slice() : e[a] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && vt(arguments[n], r);
  return e;
}
const Jc = (t, e, r, { allOwnKeys: n } = {}) => (vt(e, (o, a) => {
  r && re(o) ? t[a] = la(o, r) : t[a] = o;
}, { allOwnKeys: n }), t), Yc = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Xc = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, Qc = (t, e, r, n) => {
  let o, a, i;
  const l = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (o = Object.getOwnPropertyNames(t), a = o.length; a-- > 0; )
      i = o[a], (!n || n(i, t, e)) && !l[i] && (e[i] = t[i], l[i] = !0);
    t = r !== !1 && dn(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, Zc = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, eu = (t) => {
  if (!t)
    return null;
  if (Ye(t))
    return t;
  let e = t.length;
  if (!fa(e))
    return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, tu = ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && dn(Uint8Array)), ru = (t, e) => {
  const n = (t && t[Qt]).call(t);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const a = o.value;
    e.call(t, a[0], a[1]);
  }
}, nu = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, ou = pe("HTMLFormElement"), au = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), co = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), iu = pe("RegExp"), ha = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  vt(r, (o, a) => {
    let i;
    (i = e(o, a, t)) !== !1 && (n[a] = i || o);
  }), Object.defineProperties(t, n);
}, su = (t) => {
  ha(t, (e, r) => {
    if (re(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = t[r];
    if (re(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, lu = (t, e) => {
  const r = {}, n = (o) => {
    o.forEach((a) => {
      r[a] = !0;
    });
  };
  return Ye(t) ? n(t) : n(String(t).split(e)), r;
}, cu = () => {
}, uu = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function fu(t) {
  return !!(t && re(t.append) && t[ca] === "FormData" && t[Qt]);
}
const du = (t) => {
  const e = new Array(10), r = (n, o) => {
    if (tr(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[o] = n;
        const a = Ye(n) ? [] : {};
        return vt(n, (i, l) => {
          const f = r(i, o + 1);
          !ht(f) && (a[l] = f);
        }), e[o] = void 0, a;
      }
    }
    return n;
  };
  return r(t, 0);
}, pu = pe("AsyncFunction"), hu = (t) => t && (tr(t) || re(t)) && re(t.then) && re(t.catch), ma = ((t, e) => t ? setImmediate : e ? ((r, n) => (Fe.addEventListener("message", ({ source: o, data: a }) => {
  o === Fe && a === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), Fe.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  re(Fe.postMessage)
), mu = typeof queueMicrotask < "u" ? queueMicrotask.bind(Fe) : typeof process < "u" && process.nextTick || ma, yu = (t) => t != null && re(t[Qt]), h = {
  isArray: Ye,
  isArrayBuffer: ua,
  isBuffer: Fc,
  isFormData: Bc,
  isArrayBufferView: kc,
  isString: $c,
  isNumber: fa,
  isBoolean: Dc,
  isObject: tr,
  isPlainObject: _t,
  isReadableStream: Wc,
  isRequest: Vc,
  isResponse: zc,
  isHeaders: Gc,
  isUndefined: ht,
  isDate: Ic,
  isFile: Lc,
  isBlob: Mc,
  isRegExp: iu,
  isFunction: re,
  isStream: Uc,
  isURLSearchParams: Hc,
  isTypedArray: tu,
  isFileList: qc,
  forEach: vt,
  merge: Gr,
  extend: Jc,
  trim: Kc,
  stripBOM: Yc,
  inherits: Xc,
  toFlatObject: Qc,
  kindOf: Zt,
  kindOfTest: pe,
  endsWith: Zc,
  toArray: eu,
  forEachEntry: ru,
  matchAll: nu,
  isHTMLForm: ou,
  hasOwnProperty: co,
  hasOwnProp: co,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ha,
  freezeMethods: su,
  toObjectSet: lu,
  toCamelCase: au,
  noop: cu,
  toFiniteNumber: uu,
  findKey: da,
  global: Fe,
  isContextDefined: pa,
  isSpecCompliantForm: fu,
  toJSONObject: du,
  isAsyncFn: pu,
  isThenable: hu,
  setImmediate: ma,
  asap: mu,
  isIterable: yu
};
function O(t, e, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
}
h.inherits(O, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: h.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const ya = O.prototype, ga = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((t) => {
  ga[t] = { value: t };
});
Object.defineProperties(O, ga);
Object.defineProperty(ya, "isAxiosError", { value: !0 });
O.from = (t, e, r, n, o, a) => {
  const i = Object.create(ya);
  return h.toFlatObject(t, i, function(f) {
    return f !== Error.prototype;
  }, (l) => l !== "isAxiosError"), O.call(i, t.message, e, r, n, o), i.cause = t, i.name = t.name, a && Object.assign(i, a), i;
};
const gu = null;
function Kr(t) {
  return h.isPlainObject(t) || h.isArray(t);
}
function va(t) {
  return h.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function uo(t, e, r) {
  return t ? t.concat(e).map(function(o, a) {
    return o = va(o), !r && a ? "[" + o + "]" : o;
  }).join(r ? "." : "") : e;
}
function vu(t) {
  return h.isArray(t) && !t.some(Kr);
}
const bu = h.toFlatObject(h, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function rr(t, e, r) {
  if (!h.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = h.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(S, b) {
    return !h.isUndefined(b[S]);
  });
  const n = r.metaTokens, o = r.visitor || u, a = r.dots, i = r.indexes, f = (r.Blob || typeof Blob < "u" && Blob) && h.isSpecCompliantForm(e);
  if (!h.isFunction(o))
    throw new TypeError("visitor must be a function");
  function c(y) {
    if (y === null)
      return "";
    if (h.isDate(y))
      return y.toISOString();
    if (!f && h.isBlob(y))
      throw new O("Blob is not supported. Use a Buffer instead.");
    return h.isArrayBuffer(y) || h.isTypedArray(y) ? f && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y;
  }
  function u(y, S, b) {
    let A = y;
    if (y && !b && typeof y == "object") {
      if (h.endsWith(S, "{}"))
        S = n ? S : S.slice(0, -2), y = JSON.stringify(y);
      else if (h.isArray(y) && vu(y) || (h.isFileList(y) || h.endsWith(S, "[]")) && (A = h.toArray(y)))
        return S = va(S), A.forEach(function(x, I) {
          !(h.isUndefined(x) || x === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? uo([S], I, a) : i === null ? S : S + "[]",
            c(x)
          );
        }), !1;
    }
    return Kr(y) ? !0 : (e.append(uo(b, S, a), c(y)), !1);
  }
  const d = [], m = Object.assign(bu, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: Kr
  });
  function v(y, S) {
    if (!h.isUndefined(y)) {
      if (d.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + S.join("."));
      d.push(y), h.forEach(y, function(A, E) {
        (!(h.isUndefined(A) || A === null) && o.call(
          e,
          A,
          h.isString(E) ? E.trim() : E,
          S,
          m
        )) === !0 && v(A, S ? S.concat(E) : [E]);
      }), d.pop();
    }
  }
  if (!h.isObject(t))
    throw new TypeError("data must be an object");
  return v(t), e;
}
function fo(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(n) {
    return e[n];
  });
}
function pn(t, e) {
  this._pairs = [], t && rr(t, this, e);
}
const ba = pn.prototype;
ba.append = function(e, r) {
  this._pairs.push([e, r]);
};
ba.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, fo);
  } : fo;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function wu(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function wa(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || wu;
  h.isFunction(r) && (r = {
    serialize: r
  });
  const o = r && r.serialize;
  let a;
  if (o ? a = o(e, r) : a = h.isURLSearchParams(e) ? e.toString() : new pn(e, r).toString(n), a) {
    const i = t.indexOf("#");
    i !== -1 && (t = t.slice(0, i)), t += (t.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return t;
}
class Su {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, r, n) {
    return this.handlers.push({
      fulfilled: e,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    h.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const po = Su, Sa = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, xu = typeof URLSearchParams < "u" ? URLSearchParams : pn, Eu = typeof FormData < "u" ? FormData : null, Pu = typeof Blob < "u" ? Blob : null, Ru = {
  isBrowser: !0,
  classes: {
    URLSearchParams: xu,
    FormData: Eu,
    Blob: Pu
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, hn = typeof window < "u" && typeof document < "u", Jr = typeof navigator == "object" && navigator || void 0, Ou = hn && (!Jr || ["ReactNative", "NativeScript", "NS"].indexOf(Jr.product) < 0), Au = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Tu = hn && window.location.href || "http://localhost", Cu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: hn,
  hasStandardBrowserEnv: Ou,
  hasStandardBrowserWebWorkerEnv: Au,
  navigator: Jr,
  origin: Tu
}, Symbol.toStringTag, { value: "Module" })), Y = {
  ...Cu,
  ...Ru
};
function Nu(t, e) {
  return rr(t, new Y.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, a) {
      return Y.isNode && h.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function _u(t) {
  return h.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function ju(t) {
  const e = {}, r = Object.keys(t);
  let n;
  const o = r.length;
  let a;
  for (n = 0; n < o; n++)
    a = r[n], e[a] = t[a];
  return e;
}
function xa(t) {
  function e(r, n, o, a) {
    let i = r[a++];
    if (i === "__proto__")
      return !0;
    const l = Number.isFinite(+i), f = a >= r.length;
    return i = !i && h.isArray(o) ? o.length : i, f ? (h.hasOwnProp(o, i) ? o[i] = [o[i], n] : o[i] = n, !l) : ((!o[i] || !h.isObject(o[i])) && (o[i] = []), e(r, n, o[i], a) && h.isArray(o[i]) && (o[i] = ju(o[i])), !l);
  }
  if (h.isFormData(t) && h.isFunction(t.entries)) {
    const r = {};
    return h.forEachEntry(t, (n, o) => {
      e(_u(n), o, r, 0);
    }), r;
  }
  return null;
}
function Fu(t, e, r) {
  if (h.isString(t))
    try {
      return (e || JSON.parse)(t), h.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(t);
}
const mn = {
  transitional: Sa,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, a = h.isObject(e);
    if (a && h.isHTMLForm(e) && (e = new FormData(e)), h.isFormData(e))
      return o ? JSON.stringify(xa(e)) : e;
    if (h.isArrayBuffer(e) || h.isBuffer(e) || h.isStream(e) || h.isFile(e) || h.isBlob(e) || h.isReadableStream(e))
      return e;
    if (h.isArrayBufferView(e))
      return e.buffer;
    if (h.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let l;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Nu(e, this.formSerializer).toString();
      if ((l = h.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return rr(
          l ? { "files[]": e } : e,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return a || o ? (r.setContentType("application/json", !1), Fu(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || mn.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (h.isResponse(e) || h.isReadableStream(e))
      return e;
    if (e && h.isString(e) && (n && !this.responseType || o)) {
      const i = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(e);
      } catch (l) {
        if (i)
          throw l.name === "SyntaxError" ? O.from(l, O.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Y.classes.FormData,
    Blob: Y.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
h.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  mn.headers[t] = {};
});
const yn = mn, ku = h.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), $u = (t) => {
  const e = {};
  let r, n, o;
  return t && t.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), r = i.substring(0, o).trim().toLowerCase(), n = i.substring(o + 1).trim(), !(!r || e[r] && ku[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, ho = Symbol("internals");
function at(t) {
  return t && String(t).trim().toLowerCase();
}
function jt(t) {
  return t === !1 || t == null ? t : h.isArray(t) ? t.map(jt) : String(t);
}
function Du(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
const Iu = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function kr(t, e, r, n, o) {
  if (h.isFunction(n))
    return n.call(this, e, r);
  if (o && (e = r), !!h.isString(e)) {
    if (h.isString(n))
      return e.indexOf(n) !== -1;
    if (h.isRegExp(n))
      return n.test(e);
  }
}
function Lu(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function Mu(t, e) {
  const r = h.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(t, n + r, {
      value: function(o, a, i) {
        return this[n].call(this, e, o, a, i);
      },
      configurable: !0
    });
  });
}
class nr {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, n) {
    const o = this;
    function a(l, f, c) {
      const u = at(f);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = h.findKey(o, u);
      (!d || o[d] === void 0 || c === !0 || c === void 0 && o[d] !== !1) && (o[d || f] = jt(l));
    }
    const i = (l, f) => h.forEach(l, (c, u) => a(c, u, f));
    if (h.isPlainObject(e) || e instanceof this.constructor)
      i(e, r);
    else if (h.isString(e) && (e = e.trim()) && !Iu(e))
      i($u(e), r);
    else if (h.isObject(e) && h.isIterable(e)) {
      let l = {}, f, c;
      for (const u of e) {
        if (!h.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        l[c = u[0]] = (f = l[c]) ? h.isArray(f) ? [...f, u[1]] : [f, u[1]] : u[1];
      }
      i(l, r);
    } else
      e != null && a(r, e, n);
    return this;
  }
  get(e, r) {
    if (e = at(e), e) {
      const n = h.findKey(this, e);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return Du(o);
        if (h.isFunction(r))
          return r.call(this, o, n);
        if (h.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = at(e), e) {
      const n = h.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!r || kr(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let o = !1;
    function a(i) {
      if (i = at(i), i) {
        const l = h.findKey(n, i);
        l && (!r || kr(n, n[l], l, r)) && (delete n[l], o = !0);
      }
    }
    return h.isArray(e) ? e.forEach(a) : a(e), o;
  }
  clear(e) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const a = r[n];
      (!e || kr(this, this[a], a, e, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(e) {
    const r = this, n = {};
    return h.forEach(this, (o, a) => {
      const i = h.findKey(n, a);
      if (i) {
        r[i] = jt(o), delete r[a];
        return;
      }
      const l = e ? Lu(a) : String(a).trim();
      l !== a && delete r[a], r[l] = jt(o), n[l] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const r = /* @__PURE__ */ Object.create(null);
    return h.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = e && h.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, r]) => e + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...r) {
    const n = new this(e);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(e) {
    const n = (this[ho] = this[ho] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(i) {
      const l = at(i);
      n[l] || (Mu(o, i), n[l] = !0);
    }
    return h.isArray(e) ? e.forEach(a) : a(e), this;
  }
}
nr.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
h.reduceDescriptors(nr.prototype, ({ value: t }, e) => {
  let r = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(n) {
      this[r] = n;
    }
  };
});
h.freezeMethods(nr);
const de = nr;
function $r(t, e) {
  const r = this || yn, n = e || r, o = de.from(n.headers);
  let a = n.data;
  return h.forEach(t, function(l) {
    a = l.call(r, a, o.normalize(), e ? e.status : void 0);
  }), o.normalize(), a;
}
function Ea(t) {
  return !!(t && t.__CANCEL__);
}
function Xe(t, e, r) {
  O.call(this, t ?? "canceled", O.ERR_CANCELED, e, r), this.name = "CanceledError";
}
h.inherits(Xe, O, {
  __CANCEL__: !0
});
function Pa(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new O(
    "Request failed with status code " + r.status,
    [O.ERR_BAD_REQUEST, O.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function qu(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function Uu(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let o = 0, a = 0, i;
  return e = e !== void 0 ? e : 1e3, function(f) {
    const c = Date.now(), u = n[a];
    i || (i = c), r[o] = f, n[o] = c;
    let d = a, m = 0;
    for (; d !== o; )
      m += r[d++], d = d % t;
    if (o = (o + 1) % t, o === a && (a = (a + 1) % t), c - i < e)
      return;
    const v = u && c - u;
    return v ? Math.round(m * 1e3 / v) : void 0;
  };
}
function Bu(t, e) {
  let r = 0, n = 1e3 / e, o, a;
  const i = (c, u = Date.now()) => {
    r = u, o = null, a && (clearTimeout(a), a = null), t.apply(null, c);
  };
  return [(...c) => {
    const u = Date.now(), d = u - r;
    d >= n ? i(c, u) : (o = c, a || (a = setTimeout(() => {
      a = null, i(o);
    }, n - d)));
  }, () => o && i(o)];
}
const Wt = (t, e, r = 3) => {
  let n = 0;
  const o = Uu(50, 250);
  return Bu((a) => {
    const i = a.loaded, l = a.lengthComputable ? a.total : void 0, f = i - n, c = o(f), u = i <= l;
    n = i;
    const d = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: f,
      rate: c || void 0,
      estimated: c && l && u ? (l - i) / c : void 0,
      event: a,
      lengthComputable: l != null,
      [e ? "download" : "upload"]: !0
    };
    t(d);
  }, r);
}, mo = (t, e) => {
  const r = t != null;
  return [(n) => e[0]({
    lengthComputable: r,
    total: t,
    loaded: n
  }), e[1]];
}, yo = (t) => (...e) => h.asap(() => t(...e)), Hu = Y.hasStandardBrowserEnv ? ((t, e) => (r) => (r = new URL(r, Y.origin), t.protocol === r.protocol && t.host === r.host && (e || t.port === r.port)))(
  new URL(Y.origin),
  Y.navigator && /(msie|trident)/i.test(Y.navigator.userAgent)
) : () => !0, Wu = Y.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, r, n, o, a) {
      const i = [t + "=" + encodeURIComponent(e)];
      h.isNumber(r) && i.push("expires=" + new Date(r).toGMTString()), h.isString(n) && i.push("path=" + n), h.isString(o) && i.push("domain=" + o), a === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(t) {
      const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return e ? decodeURIComponent(e[3]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Vu(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function zu(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Ra(t, e, r) {
  let n = !Vu(e);
  return t && (n || r == !1) ? zu(t, e) : e;
}
const go = (t) => t instanceof de ? { ...t } : t;
function Ie(t, e) {
  e = e || {};
  const r = {};
  function n(c, u, d, m) {
    return h.isPlainObject(c) && h.isPlainObject(u) ? h.merge.call({ caseless: m }, c, u) : h.isPlainObject(u) ? h.merge({}, u) : h.isArray(u) ? u.slice() : u;
  }
  function o(c, u, d, m) {
    if (h.isUndefined(u)) {
      if (!h.isUndefined(c))
        return n(void 0, c, d, m);
    } else
      return n(c, u, d, m);
  }
  function a(c, u) {
    if (!h.isUndefined(u))
      return n(void 0, u);
  }
  function i(c, u) {
    if (h.isUndefined(u)) {
      if (!h.isUndefined(c))
        return n(void 0, c);
    } else
      return n(void 0, u);
  }
  function l(c, u, d) {
    if (d in e)
      return n(c, u);
    if (d in t)
      return n(void 0, c);
  }
  const f = {
    url: a,
    method: a,
    data: a,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (c, u, d) => o(go(c), go(u), d, !0)
  };
  return h.forEach(Object.keys(Object.assign({}, t, e)), function(u) {
    const d = f[u] || o, m = d(t[u], e[u], u);
    h.isUndefined(m) && d !== l || (r[u] = m);
  }), r;
}
const Oa = (t) => {
  const e = Ie({}, t);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: a, headers: i, auth: l } = e;
  e.headers = i = de.from(i), e.url = wa(Ra(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), l && i.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let f;
  if (h.isFormData(r)) {
    if (Y.hasStandardBrowserEnv || Y.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((f = i.getContentType()) !== !1) {
      const [c, ...u] = f ? f.split(";").map((d) => d.trim()).filter(Boolean) : [];
      i.setContentType([c || "multipart/form-data", ...u].join("; "));
    }
  }
  if (Y.hasStandardBrowserEnv && (n && h.isFunction(n) && (n = n(e)), n || n !== !1 && Hu(e.url))) {
    const c = o && a && Wu.read(a);
    c && i.set(o, c);
  }
  return e;
}, Gu = typeof XMLHttpRequest < "u", Ku = Gu && function(t) {
  return new Promise(function(r, n) {
    const o = Oa(t);
    let a = o.data;
    const i = de.from(o.headers).normalize();
    let { responseType: l, onUploadProgress: f, onDownloadProgress: c } = o, u, d, m, v, y;
    function S() {
      v && v(), y && y(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let b = new XMLHttpRequest();
    b.open(o.method.toUpperCase(), o.url, !0), b.timeout = o.timeout;
    function A() {
      if (!b)
        return;
      const x = de.from(
        "getAllResponseHeaders" in b && b.getAllResponseHeaders()
      ), k = {
        data: !l || l === "text" || l === "json" ? b.responseText : b.response,
        status: b.status,
        statusText: b.statusText,
        headers: x,
        config: t,
        request: b
      };
      Pa(function(q) {
        r(q), S();
      }, function(q) {
        n(q), S();
      }, k), b = null;
    }
    "onloadend" in b ? b.onloadend = A : b.onreadystatechange = function() {
      !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(A);
    }, b.onabort = function() {
      b && (n(new O("Request aborted", O.ECONNABORTED, t, b)), b = null);
    }, b.onerror = function() {
      n(new O("Network Error", O.ERR_NETWORK, t, b)), b = null;
    }, b.ontimeout = function() {
      let I = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const k = o.transitional || Sa;
      o.timeoutErrorMessage && (I = o.timeoutErrorMessage), n(new O(
        I,
        k.clarifyTimeoutError ? O.ETIMEDOUT : O.ECONNABORTED,
        t,
        b
      )), b = null;
    }, a === void 0 && i.setContentType(null), "setRequestHeader" in b && h.forEach(i.toJSON(), function(I, k) {
      b.setRequestHeader(k, I);
    }), h.isUndefined(o.withCredentials) || (b.withCredentials = !!o.withCredentials), l && l !== "json" && (b.responseType = o.responseType), c && ([m, y] = Wt(c, !0), b.addEventListener("progress", m)), f && b.upload && ([d, v] = Wt(f), b.upload.addEventListener("progress", d), b.upload.addEventListener("loadend", v)), (o.cancelToken || o.signal) && (u = (x) => {
      b && (n(!x || x.type ? new Xe(null, t, b) : x), b.abort(), b = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const E = qu(o.url);
    if (E && Y.protocols.indexOf(E) === -1) {
      n(new O("Unsupported protocol " + E + ":", O.ERR_BAD_REQUEST, t));
      return;
    }
    b.send(a || null);
  });
}, Ju = (t, e) => {
  const { length: r } = t = t ? t.filter(Boolean) : [];
  if (e || r) {
    let n = new AbortController(), o;
    const a = function(c) {
      if (!o) {
        o = !0, l();
        const u = c instanceof Error ? c : this.reason;
        n.abort(u instanceof O ? u : new Xe(u instanceof Error ? u.message : u));
      }
    };
    let i = e && setTimeout(() => {
      i = null, a(new O(`timeout ${e} of ms exceeded`, O.ETIMEDOUT));
    }, e);
    const l = () => {
      t && (i && clearTimeout(i), i = null, t.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(a) : c.removeEventListener("abort", a);
      }), t = null);
    };
    t.forEach((c) => c.addEventListener("abort", a));
    const { signal: f } = n;
    return f.unsubscribe = () => h.asap(l), f;
  }
}, Yu = Ju, Xu = function* (t, e) {
  let r = t.byteLength;
  if (!e || r < e) {
    yield t;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + e, yield t.slice(n, o), n = o;
}, Qu = async function* (t, e) {
  for await (const r of Zu(t))
    yield* Xu(r, e);
}, Zu = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const e = t.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await e.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await e.cancel();
  }
}, vo = (t, e, r, n) => {
  const o = Qu(t, e);
  let a = 0, i, l = (f) => {
    i || (i = !0, n && n(f));
  };
  return new ReadableStream({
    async pull(f) {
      try {
        const { done: c, value: u } = await o.next();
        if (c) {
          l(), f.close();
          return;
        }
        let d = u.byteLength;
        if (r) {
          let m = a += d;
          r(m);
        }
        f.enqueue(new Uint8Array(u));
      } catch (c) {
        throw l(c), c;
      }
    },
    cancel(f) {
      return l(f), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, or = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Aa = or && typeof ReadableStream == "function", ef = or && (typeof TextEncoder == "function" ? ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), Ta = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, tf = Aa && Ta(() => {
  let t = !1;
  const e = new Request(Y.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), bo = 64 * 1024, Yr = Aa && Ta(() => h.isReadableStream(new Response("").body)), Vt = {
  stream: Yr && ((t) => t.body)
};
or && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !Vt[e] && (Vt[e] = h.isFunction(t[e]) ? (r) => r[e]() : (r, n) => {
      throw new O(`Response type '${e}' is not supported`, O.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const rf = async (t) => {
  if (t == null)
    return 0;
  if (h.isBlob(t))
    return t.size;
  if (h.isSpecCompliantForm(t))
    return (await new Request(Y.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (h.isArrayBufferView(t) || h.isArrayBuffer(t))
    return t.byteLength;
  if (h.isURLSearchParams(t) && (t = t + ""), h.isString(t))
    return (await ef(t)).byteLength;
}, nf = async (t, e) => {
  const r = h.toFiniteNumber(t.getContentLength());
  return r ?? rf(e);
}, of = or && (async (t) => {
  let {
    url: e,
    method: r,
    data: n,
    signal: o,
    cancelToken: a,
    timeout: i,
    onDownloadProgress: l,
    onUploadProgress: f,
    responseType: c,
    headers: u,
    withCredentials: d = "same-origin",
    fetchOptions: m
  } = Oa(t);
  c = c ? (c + "").toLowerCase() : "text";
  let v = Yu([o, a && a.toAbortSignal()], i), y;
  const S = v && v.unsubscribe && (() => {
    v.unsubscribe();
  });
  let b;
  try {
    if (f && tf && r !== "get" && r !== "head" && (b = await nf(u, n)) !== 0) {
      let k = new Request(e, {
        method: "POST",
        body: n,
        duplex: "half"
      }), $;
      if (h.isFormData(n) && ($ = k.headers.get("content-type")) && u.setContentType($), k.body) {
        const [q, ne] = mo(
          b,
          Wt(yo(f))
        );
        n = vo(k.body, bo, q, ne);
      }
    }
    h.isString(d) || (d = d ? "include" : "omit");
    const A = "credentials" in Request.prototype;
    y = new Request(e, {
      ...m,
      signal: v,
      method: r.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: A ? d : void 0
    });
    let E = await fetch(y);
    const x = Yr && (c === "stream" || c === "response");
    if (Yr && (l || x && S)) {
      const k = {};
      ["status", "statusText", "headers"].forEach((X) => {
        k[X] = E[X];
      });
      const $ = h.toFiniteNumber(E.headers.get("content-length")), [q, ne] = l && mo(
        $,
        Wt(yo(l), !0)
      ) || [];
      E = new Response(
        vo(E.body, bo, q, () => {
          ne && ne(), S && S();
        }),
        k
      );
    }
    c = c || "text";
    let I = await Vt[h.findKey(Vt, c) || "text"](E, t);
    return !x && S && S(), await new Promise((k, $) => {
      Pa(k, $, {
        data: I,
        headers: de.from(E.headers),
        status: E.status,
        statusText: E.statusText,
        config: t,
        request: y
      });
    });
  } catch (A) {
    throw S && S(), A && A.name === "TypeError" && /Load failed|fetch/i.test(A.message) ? Object.assign(
      new O("Network Error", O.ERR_NETWORK, t, y),
      {
        cause: A.cause || A
      }
    ) : O.from(A, A && A.code, t, y);
  }
}), Xr = {
  http: gu,
  xhr: Ku,
  fetch: of
};
h.forEach(Xr, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const wo = (t) => `- ${t}`, af = (t) => h.isFunction(t) || t === null || t === !1, Ca = {
  getAdapter: (t) => {
    t = h.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    const o = {};
    for (let a = 0; a < e; a++) {
      r = t[a];
      let i;
      if (n = r, !af(r) && (n = Xr[(i = String(r)).toLowerCase()], n === void 0))
        throw new O(`Unknown adapter '${i}'`);
      if (n)
        break;
      o[i || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(o).map(
        ([l, f]) => `adapter ${l} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = e ? a.length > 1 ? `since :
` + a.map(wo).join(`
`) : " " + wo(a[0]) : "as no adapter specified";
      throw new O(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Xr
};
function Dr(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Xe(null, t);
}
function So(t) {
  return Dr(t), t.headers = de.from(t.headers), t.data = $r.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Ca.getAdapter(t.adapter || yn.adapter)(t).then(function(n) {
    return Dr(t), n.data = $r.call(
      t,
      t.transformResponse,
      n
    ), n.headers = de.from(n.headers), n;
  }, function(n) {
    return Ea(n) || (Dr(t), n && n.response && (n.response.data = $r.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = de.from(n.response.headers))), Promise.reject(n);
  });
}
const Na = "1.9.0", ar = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  ar[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const xo = {};
ar.transitional = function(e, r, n) {
  function o(a, i) {
    return "[Axios v" + Na + "] Transitional option '" + a + "'" + i + (n ? ". " + n : "");
  }
  return (a, i, l) => {
    if (e === !1)
      throw new O(
        o(i, " has been removed" + (r ? " in " + r : "")),
        O.ERR_DEPRECATED
      );
    return r && !xo[i] && (xo[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(a, i, l) : !0;
  };
};
ar.spelling = function(e) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
};
function sf(t, e, r) {
  if (typeof t != "object")
    throw new O("options must be an object", O.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let o = n.length;
  for (; o-- > 0; ) {
    const a = n[o], i = e[a];
    if (i) {
      const l = t[a], f = l === void 0 || i(l, a, t);
      if (f !== !0)
        throw new O("option " + a + " must be " + f, O.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new O("Unknown option " + a, O.ERR_BAD_OPTION);
  }
}
const Ft = {
  assertOptions: sf,
  validators: ar
}, ye = Ft.validators;
class zt {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new po(),
      response: new po()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(e, r) {
    try {
      return await this._request(e, r);
    } catch (n) {
      if (n instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const a = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? a && !String(n.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + a) : n.stack = a;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(e, r) {
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = Ie(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: a } = r;
    n !== void 0 && Ft.assertOptions(n, {
      silentJSONParsing: ye.transitional(ye.boolean),
      forcedJSONParsing: ye.transitional(ye.boolean),
      clarifyTimeoutError: ye.transitional(ye.boolean)
    }, !1), o != null && (h.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : Ft.assertOptions(o, {
      encode: ye.function,
      serialize: ye.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), Ft.assertOptions(r, {
      baseUrl: ye.spelling("baseURL"),
      withXsrfToken: ye.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i = a && h.merge(
      a.common,
      a[r.method]
    );
    a && h.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (y) => {
        delete a[y];
      }
    ), r.headers = de.concat(i, a);
    const l = [];
    let f = !0;
    this.interceptors.request.forEach(function(S) {
      typeof S.runWhen == "function" && S.runWhen(r) === !1 || (f = f && S.synchronous, l.unshift(S.fulfilled, S.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(S) {
      c.push(S.fulfilled, S.rejected);
    });
    let u, d = 0, m;
    if (!f) {
      const y = [So.bind(this), void 0];
      for (y.unshift.apply(y, l), y.push.apply(y, c), m = y.length, u = Promise.resolve(r); d < m; )
        u = u.then(y[d++], y[d++]);
      return u;
    }
    m = l.length;
    let v = r;
    for (d = 0; d < m; ) {
      const y = l[d++], S = l[d++];
      try {
        v = y(v);
      } catch (b) {
        S.call(this, b);
        break;
      }
    }
    try {
      u = So.call(this, v);
    } catch (y) {
      return Promise.reject(y);
    }
    for (d = 0, m = c.length; d < m; )
      u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(e) {
    e = Ie(this.defaults, e);
    const r = Ra(e.baseURL, e.url, e.allowAbsoluteUrls);
    return wa(r, e.params, e.paramsSerializer);
  }
}
h.forEach(["delete", "get", "head", "options"], function(e) {
  zt.prototype[e] = function(r, n) {
    return this.request(Ie(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
h.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(a, i, l) {
      return this.request(Ie(l || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: i
      }));
    };
  }
  zt.prototype[e] = r(), zt.prototype[e + "Form"] = r(!0);
});
const kt = zt;
class gn {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(a) {
      r = a;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners)
        return;
      let a = n._listeners.length;
      for (; a-- > 0; )
        n._listeners[a](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let a;
      const i = new Promise((l) => {
        n.subscribe(l), a = l;
      }).then(o);
      return i.cancel = function() {
        n.unsubscribe(a);
      }, i;
    }, e(function(a, i, l) {
      n.reason || (n.reason = new Xe(a, i, l), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(e);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), r = (n) => {
      e.abort(n);
    };
    return this.subscribe(r), e.signal.unsubscribe = () => this.unsubscribe(r), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new gn(function(o) {
        e = o;
      }),
      cancel: e
    };
  }
}
const lf = gn;
function cf(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function uf(t) {
  return h.isObject(t) && t.isAxiosError === !0;
}
const Qr = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Qr).forEach(([t, e]) => {
  Qr[e] = t;
});
const ff = Qr;
function _a(t) {
  const e = new kt(t), r = la(kt.prototype.request, e);
  return h.extend(r, kt.prototype, e, { allOwnKeys: !0 }), h.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(o) {
    return _a(Ie(t, o));
  }, r;
}
const H = _a(yn);
H.Axios = kt;
H.CanceledError = Xe;
H.CancelToken = lf;
H.isCancel = Ea;
H.VERSION = Na;
H.toFormData = rr;
H.AxiosError = O;
H.Cancel = H.CanceledError;
H.all = function(e) {
  return Promise.all(e);
};
H.spread = cf;
H.isAxiosError = uf;
H.mergeConfig = Ie;
H.AxiosHeaders = de;
H.formToJSON = (t) => xa(h.isHTMLForm(t) ? new FormData(t) : t);
H.getAdapter = Ca.getAdapter;
H.HttpStatusCode = ff;
H.default = H;
const Eo = H;
function Zr(t, e) {
  let r;
  return function(...n) {
    clearTimeout(r), r = setTimeout(() => t.apply(this, n), e);
  };
}
function he(t, e) {
  return document.dispatchEvent(new CustomEvent(`inertia:${t}`, e));
}
var Po = (t) => he("before", { cancelable: !0, detail: { visit: t } }), df = (t) => he("error", { detail: { errors: t } }), pf = (t) => he("exception", { cancelable: !0, detail: { exception: t } }), hf = (t) => he("finish", { detail: { visit: t } }), mf = (t) => he("invalid", { cancelable: !0, detail: { response: t } }), dt = (t) => he("navigate", { detail: { page: t } }), yf = (t) => he("progress", { detail: { progress: t } }), gf = (t) => he("start", { detail: { visit: t } }), vf = (t) => he("success", { detail: { page: t } }), bf = (t, e) => he("prefetched", { detail: { fetchedAt: Date.now(), response: t.data, visit: e } }), wf = (t) => he("prefetching", { detail: { visit: t } }), Z = class {
  static set(e, r) {
    typeof window < "u" && window.sessionStorage.setItem(e, JSON.stringify(r));
  }
  static get(e) {
    if (typeof window < "u")
      return JSON.parse(window.sessionStorage.getItem(e) || "null");
  }
  static merge(e, r) {
    let n = this.get(e);
    n === null ? this.set(e, r) : this.set(e, { ...n, ...r });
  }
  static remove(e) {
    typeof window < "u" && window.sessionStorage.removeItem(e);
  }
  static removeNested(e, r) {
    let n = this.get(e);
    n !== null && (delete n[r], this.set(e, n));
  }
  static exists(e) {
    try {
      return this.get(e) !== null;
    } catch {
      return !1;
    }
  }
  static clear() {
    typeof window < "u" && window.sessionStorage.clear();
  }
};
Z.locationVisitKey = "inertiaLocationVisit";
var Sf = async (t) => {
  if (typeof window > "u")
    throw new Error("Unable to encrypt history");
  let e = ja(), r = await Fa(), n = await Af(r);
  if (!n)
    throw new Error("Unable to encrypt history");
  return await Ef(e, n, t);
}, Ke = { key: "historyKey", iv: "historyIv" }, xf = async (t) => {
  let e = ja(), r = await Fa();
  if (!r)
    throw new Error("Unable to decrypt history");
  return await Pf(e, r, t);
}, Ef = async (t, e, r) => {
  if (typeof window > "u")
    throw new Error("Unable to encrypt history");
  if (typeof window.crypto.subtle > "u")
    return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(r);
  let n = new TextEncoder(), o = JSON.stringify(r), a = new Uint8Array(o.length * 3), i = n.encodeInto(o, a);
  return window.crypto.subtle.encrypt({ name: "AES-GCM", iv: t }, e, a.subarray(0, i.written));
}, Pf = async (t, e, r) => {
  if (typeof window.crypto.subtle > "u")
    return console.warn("Decryption is not supported in this environment. SSL is required."), Promise.resolve(r);
  let n = await window.crypto.subtle.decrypt({ name: "AES-GCM", iv: t }, e, r);
  return JSON.parse(new TextDecoder().decode(n));
}, ja = () => {
  let t = Z.get(Ke.iv);
  if (t)
    return new Uint8Array(t);
  let e = window.crypto.getRandomValues(new Uint8Array(12));
  return Z.set(Ke.iv, Array.from(e)), e;
}, Rf = async () => typeof window.crypto.subtle > "u" ? (console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(null)) : window.crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, !0, ["encrypt", "decrypt"]), Of = async (t) => {
  if (typeof window.crypto.subtle > "u")
    return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve();
  let e = await window.crypto.subtle.exportKey("raw", t);
  Z.set(Ke.key, Array.from(new Uint8Array(e)));
}, Af = async (t) => {
  if (t)
    return t;
  let e = await Rf();
  return e ? (await Of(e), e) : null;
}, Fa = async () => {
  let t = Z.get(Ke.key);
  return t ? await window.crypto.subtle.importKey("raw", new Uint8Array(t), { name: "AES-GCM", length: 256 }, !0, ["encrypt", "decrypt"]) : null;
}, fe = class {
  static save() {
    j.saveScrollPositions(Array.from(this.regions()).map((t) => ({ top: t.scrollTop, left: t.scrollLeft })));
  }
  static regions() {
    return document.querySelectorAll("[scroll-region]");
  }
  static reset() {
    typeof window < "u" && window.scrollTo(0, 0), this.regions().forEach((t) => {
      typeof t.scrollTo == "function" ? t.scrollTo(0, 0) : (t.scrollTop = 0, t.scrollLeft = 0);
    }), this.save(), window.location.hash && setTimeout(() => {
      var t;
      return (t = document.getElementById(window.location.hash.slice(1))) == null ? void 0 : t.scrollIntoView();
    });
  }
  static restore(t) {
    this.restoreDocument(), this.regions().forEach((e, r) => {
      let n = t[r];
      n && (typeof e.scrollTo == "function" ? e.scrollTo(n.left, n.top) : (e.scrollTop = n.top, e.scrollLeft = n.left));
    });
  }
  static restoreDocument() {
    let t = j.getDocumentScrollPosition();
    typeof window < "u" && window.scrollTo(t.left, t.top);
  }
  static onScroll(t) {
    let e = t.target;
    typeof e.hasAttribute == "function" && e.hasAttribute("scroll-region") && this.save();
  }
  static onWindowScroll() {
    j.saveDocumentScrollPosition({ top: window.scrollY, left: window.scrollX });
  }
};
function en(t) {
  return t instanceof File || t instanceof Blob || t instanceof FileList && t.length > 0 || t instanceof FormData && Array.from(t.values()).some((e) => en(e)) || typeof t == "object" && t !== null && Object.values(t).some((e) => en(e));
}
var Ro = (t) => t instanceof FormData;
function ka(t, e = new FormData(), r = null) {
  t = t || {};
  for (let n in t)
    Object.prototype.hasOwnProperty.call(t, n) && Da(e, $a(r, n), t[n]);
  return e;
}
function $a(t, e) {
  return t ? t + "[" + e + "]" : e;
}
function Da(t, e, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => Da(t, $a(e, n.toString()), r[n]));
  if (r instanceof Date)
    return t.append(e, r.toISOString());
  if (r instanceof File)
    return t.append(e, r, r.name);
  if (r instanceof Blob)
    return t.append(e, r);
  if (typeof r == "boolean")
    return t.append(e, r ? "1" : "0");
  if (typeof r == "string")
    return t.append(e, r);
  if (typeof r == "number")
    return t.append(e, `${r}`);
  if (r == null)
    return t.append(e, "");
  ka(r, t, e);
}
function Ae(t) {
  return new URL(t.toString(), typeof window > "u" ? void 0 : window.location.toString());
}
var Tf = (t, e, r, n, o) => {
  let a = typeof t == "string" ? Ae(t) : t;
  if ((en(e) || n) && !Ro(e) && (e = ka(e)), Ro(e))
    return [a, e];
  let [i, l] = Ia(r, a, e, o);
  return [Ae(i), l];
};
function Ia(t, e, r, n = "brackets") {
  let o = /^[a-z][a-z0-9+.-]*:\/\//i.test(e.toString()), a = o || e.toString().startsWith("/"), i = !a && !e.toString().startsWith("#") && !e.toString().startsWith("?"), l = e.toString().includes("?") || t === "get" && Object.keys(r).length, f = e.toString().includes("#"), c = new URL(e.toString(), "http://localhost");
  return t === "get" && Object.keys(r).length && (c.search = lo.stringify(qr(lo.parse(c.search, { ignoreQueryPrefix: !0 }), r, (u, d, m, v) => {
    d === void 0 && delete v[m];
  }), { encodeValuesOnly: !0, arrayFormat: n }), r = {}), [[o ? `${c.protocol}//${c.host}` : "", a ? c.pathname : "", i ? c.pathname.substring(1) : "", l ? c.search : "", f ? c.hash : ""].join(""), r];
}
function Gt(t) {
  return t = new URL(t.href), t.hash = "", t;
}
var Oo = (t, e) => {
  t.hash && !e.hash && Gt(t).href === e.href && (e.hash = t.hash);
}, tn = (t, e) => Gt(t).href === Gt(e).href, Cf = class {
  constructor() {
    this.componentId = {}, this.listeners = [], this.isFirstPageLoad = !0, this.cleared = !1;
  }
  init({ initialPage: t, swapComponent: e, resolveComponent: r }) {
    return this.page = t, this.swapComponent = e, this.resolveComponent = r, this;
  }
  set(t, { replace: e = !1, preserveScroll: r = !1, preserveState: n = !1 } = {}) {
    this.componentId = {};
    let o = this.componentId;
    return t.clearHistory && j.clear(), this.resolve(t.component).then((a) => {
      if (o !== this.componentId)
        return;
      t.rememberedState ?? (t.rememberedState = {});
      let i = typeof window < "u" ? window.location : new URL(t.url);
      return e = e || tn(Ae(t.url), i), new Promise((l) => {
        e ? j.replaceState(t, () => l(null)) : j.pushState(t, () => l(null));
      }).then(() => {
        let l = !this.isTheSame(t);
        return this.page = t, this.cleared = !1, l && this.fireEventsFor("newComponent"), this.isFirstPageLoad && this.fireEventsFor("firstLoad"), this.isFirstPageLoad = !1, this.swap({ component: a, page: t, preserveState: n }).then(() => {
          r || fe.reset(), ke.fireInternalEvent("loadDeferredProps"), e || dt(t);
        });
      });
    });
  }
  setQuietly(t, { preserveState: e = !1 } = {}) {
    return this.resolve(t.component).then((r) => (this.page = t, this.cleared = !1, j.setCurrent(t), this.swap({ component: r, page: t, preserveState: e })));
  }
  clear() {
    this.cleared = !0;
  }
  isCleared() {
    return this.cleared;
  }
  get() {
    return this.page;
  }
  merge(t) {
    this.page = { ...this.page, ...t };
  }
  setUrlHash(t) {
    this.page.url.includes(t) || (this.page.url += t);
  }
  remember(t) {
    this.page.rememberedState = t;
  }
  swap({ component: t, page: e, preserveState: r }) {
    return this.swapComponent({ component: t, page: e, preserveState: r });
  }
  resolve(t) {
    return Promise.resolve(this.resolveComponent(t));
  }
  isTheSame(t) {
    return this.page.component === t.component;
  }
  on(t, e) {
    return this.listeners.push({ event: t, callback: e }), () => {
      this.listeners = this.listeners.filter((r) => r.event !== t && r.callback !== e);
    };
  }
  fireEventsFor(t) {
    this.listeners.filter((e) => e.event === t).forEach((e) => e.callback());
  }
}, R = new Cf(), La = class {
  constructor() {
    this.items = [], this.processingPromise = null;
  }
  add(t) {
    return this.items.push(t), this.process();
  }
  process() {
    return this.processingPromise ?? (this.processingPromise = this.processNext().then(() => {
      this.processingPromise = null;
    })), this.processingPromise;
  }
  processNext() {
    let t = this.items.shift();
    return t ? Promise.resolve(t()).then(() => this.processNext()) : Promise.resolve();
  }
}, st = typeof window > "u", it = new La(), Ao = !st && /CriOS/.test(window.navigator.userAgent), Nf = class {
  constructor() {
    this.rememberedState = "rememberedState", this.scrollRegions = "scrollRegions", this.preserveUrl = !1, this.current = {}, this.initialState = null;
  }
  remember(e, r) {
    var n;
    this.replaceState({ ...R.get(), rememberedState: { ...((n = R.get()) == null ? void 0 : n.rememberedState) ?? {}, [r]: e } });
  }
  restore(e) {
    var r, n;
    if (!st)
      return (n = (r = this.initialState) == null ? void 0 : r[this.rememberedState]) == null ? void 0 : n[e];
  }
  pushState(e, r = null) {
    if (!st) {
      if (this.preserveUrl) {
        r && r();
        return;
      }
      this.current = e, it.add(() => this.getPageData(e).then((n) => {
        let o = () => {
          this.doPushState({ page: n }, e.url), r && r();
        };
        Ao ? setTimeout(o) : o();
      }));
    }
  }
  getPageData(e) {
    return new Promise((r) => e.encryptHistory ? Sf(e).then(r) : r(e));
  }
  processQueue() {
    return it.process();
  }
  decrypt(e = null) {
    var n;
    if (st)
      return Promise.resolve(e ?? R.get());
    let r = e ?? ((n = window.history.state) == null ? void 0 : n.page);
    return this.decryptPageData(r).then((o) => {
      if (!o)
        throw new Error("Unable to decrypt history");
      return this.initialState === null ? this.initialState = o ?? void 0 : this.current = o ?? {}, o;
    });
  }
  decryptPageData(e) {
    return e instanceof ArrayBuffer ? xf(e) : Promise.resolve(e);
  }
  saveScrollPositions(e) {
    it.add(() => Promise.resolve().then(() => {
      var r;
      (r = window.history.state) != null && r.page && this.doReplaceState({ page: window.history.state.page, scrollRegions: e });
    }));
  }
  saveDocumentScrollPosition(e) {
    it.add(() => Promise.resolve().then(() => {
      var r;
      (r = window.history.state) != null && r.page && this.doReplaceState({ page: window.history.state.page, documentScrollPosition: e });
    }));
  }
  getScrollRegions() {
    var e;
    return ((e = window.history.state) == null ? void 0 : e.scrollRegions) || [];
  }
  getDocumentScrollPosition() {
    var e;
    return ((e = window.history.state) == null ? void 0 : e.documentScrollPosition) || { top: 0, left: 0 };
  }
  replaceState(e, r = null) {
    if (R.merge(e), !st) {
      if (this.preserveUrl) {
        r && r();
        return;
      }
      this.current = e, it.add(() => this.getPageData(e).then((n) => {
        let o = () => {
          this.doReplaceState({ page: n }, e.url), r && r();
        };
        Ao ? setTimeout(o) : o();
      }));
    }
  }
  doReplaceState(e, r) {
    var n, o;
    window.history.replaceState({ ...e, scrollRegions: e.scrollRegions ?? ((n = window.history.state) == null ? void 0 : n.scrollRegions), documentScrollPosition: e.documentScrollPosition ?? ((o = window.history.state) == null ? void 0 : o.documentScrollPosition) }, "", r);
  }
  doPushState(e, r) {
    window.history.pushState(e, "", r);
  }
  getState(e, r) {
    var n;
    return ((n = this.current) == null ? void 0 : n[e]) ?? r;
  }
  deleteState(e) {
    this.current[e] !== void 0 && (delete this.current[e], this.replaceState(this.current));
  }
  hasAnyState() {
    return !!this.getAllState();
  }
  clear() {
    Z.remove(Ke.key), Z.remove(Ke.iv);
  }
  setCurrent(e) {
    this.current = e;
  }
  isValidState(e) {
    return !!e.page;
  }
  getAllState() {
    return this.current;
  }
};
typeof window < "u" && window.history.scrollRestoration && (window.history.scrollRestoration = "manual");
var j = new Nf(), _f = class {
  constructor() {
    this.internalListeners = [];
  }
  init() {
    typeof window < "u" && (window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), window.addEventListener("scroll", Zr(fe.onWindowScroll.bind(fe), 100), !0)), typeof document < "u" && document.addEventListener("scroll", Zr(fe.onScroll.bind(fe), 100), !0);
  }
  onGlobalEvent(t, e) {
    let r = (n) => {
      let o = e(n);
      n.cancelable && !n.defaultPrevented && o === !1 && n.preventDefault();
    };
    return this.registerListener(`inertia:${t}`, r);
  }
  on(t, e) {
    return this.internalListeners.push({ event: t, listener: e }), () => {
      this.internalListeners = this.internalListeners.filter((r) => r.listener !== e);
    };
  }
  onMissingHistoryItem() {
    R.clear(), this.fireInternalEvent("missingHistoryItem");
  }
  fireInternalEvent(t) {
    this.internalListeners.filter((e) => e.event === t).forEach((e) => e.listener());
  }
  registerListener(t, e) {
    return document.addEventListener(t, e), () => document.removeEventListener(t, e);
  }
  handlePopstateEvent(t) {
    let e = t.state || null;
    if (e === null) {
      let r = Ae(R.get().url);
      r.hash = window.location.hash, j.replaceState({ ...R.get(), url: r.href }), fe.reset();
      return;
    }
    if (!j.isValidState(e))
      return this.onMissingHistoryItem();
    j.decrypt(e.page).then((r) => {
      if (R.get().version !== r.version) {
        this.onMissingHistoryItem();
        return;
      }
      R.setQuietly(r, { preserveState: !1 }).then(() => {
        fe.restore(j.getScrollRegions()), dt(R.get());
      });
    }).catch(() => {
      this.onMissingHistoryItem();
    });
  }
}, ke = new _f(), jf = class {
  constructor() {
    this.type = this.resolveType();
  }
  resolveType() {
    return typeof window > "u" ? "navigate" : window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType("navigation").length > 0 ? window.performance.getEntriesByType("navigation")[0].type : "navigate";
  }
  get() {
    return this.type;
  }
  isBackForward() {
    return this.type === "back_forward";
  }
  isReload() {
    return this.type === "reload";
  }
}, Ir = new jf(), Ff = class {
  static handle() {
    this.clearRememberedStateOnReload(), [this.handleBackForward, this.handleLocation, this.handleDefault].find((t) => t.bind(this)());
  }
  static clearRememberedStateOnReload() {
    Ir.isReload() && j.deleteState(j.rememberedState);
  }
  static handleBackForward() {
    if (!Ir.isBackForward() || !j.hasAnyState())
      return !1;
    let t = j.getScrollRegions();
    return j.decrypt().then((e) => {
      R.set(e, { preserveScroll: !0, preserveState: !0 }).then(() => {
        fe.restore(t), dt(R.get());
      });
    }).catch(() => {
      ke.onMissingHistoryItem();
    }), !0;
  }
  static handleLocation() {
    if (!Z.exists(Z.locationVisitKey))
      return !1;
    let t = Z.get(Z.locationVisitKey) || {};
    return Z.remove(Z.locationVisitKey), typeof window < "u" && R.setUrlHash(window.location.hash), j.decrypt(R.get()).then(() => {
      let e = j.getState(j.rememberedState, {}), r = j.getScrollRegions();
      R.remember(e), R.set(R.get(), { preserveScroll: t.preserveScroll, preserveState: !0 }).then(() => {
        t.preserveScroll && fe.restore(r), dt(R.get());
      });
    }).catch(() => {
      ke.onMissingHistoryItem();
    }), !0;
  }
  static handleDefault() {
    typeof window < "u" && R.setUrlHash(window.location.hash), R.set(R.get(), { preserveScroll: !0, preserveState: !0 }).then(() => {
      Ir.isReload() && fe.restore(j.getScrollRegions()), dt(R.get());
    });
  }
}, kf = class {
  constructor(e, r, n) {
    this.id = null, this.throttle = !1, this.keepAlive = !1, this.cbCount = 0, this.keepAlive = n.keepAlive ?? !1, this.cb = r, this.interval = e, (n.autoStart ?? !0) && this.start();
  }
  stop() {
    this.id && clearInterval(this.id);
  }
  start() {
    typeof window > "u" || (this.stop(), this.id = window.setInterval(() => {
      (!this.throttle || this.cbCount % 10 === 0) && this.cb(), this.throttle && this.cbCount++;
    }, this.interval));
  }
  isInBackground(e) {
    this.throttle = this.keepAlive ? !1 : e, this.throttle && (this.cbCount = 0);
  }
}, $f = class {
  constructor() {
    this.polls = [], this.setupVisibilityListener();
  }
  add(t, e, r) {
    let n = new kf(t, e, r);
    return this.polls.push(n), { stop: () => n.stop(), start: () => n.start() };
  }
  clear() {
    this.polls.forEach((t) => t.stop()), this.polls = [];
  }
  setupVisibilityListener() {
    typeof document > "u" || document.addEventListener("visibilitychange", () => {
      this.polls.forEach((t) => t.isInBackground(document.hidden));
    }, !1);
  }
}, Df = new $f(), Ma = (t, e, r) => {
  if (t === e)
    return !0;
  for (let n in t)
    if (!r.includes(n) && t[n] !== e[n] && !If(t[n], e[n]))
      return !1;
  return !0;
}, If = (t, e) => {
  switch (typeof t) {
    case "object":
      return Ma(t, e, []);
    case "function":
      return t.toString() === e.toString();
    default:
      return t === e;
  }
}, Lf = { ms: 1, s: 1e3, m: 6e4, h: 36e5, d: 864e5 }, To = (t) => {
  if (typeof t == "number")
    return t;
  for (let [e, r] of Object.entries(Lf))
    if (t.endsWith(e))
      return parseFloat(t) * r;
  return parseInt(t);
}, Mf = class {
  constructor() {
    this.cached = [], this.inFlightRequests = [], this.removalTimers = [], this.currentUseId = null;
  }
  add(e, r, { cacheFor: n }) {
    if (this.findInFlight(e))
      return Promise.resolve();
    let o = this.findCached(e);
    if (!e.fresh && o && o.staleTimestamp > Date.now())
      return Promise.resolve();
    let [a, i] = this.extractStaleValues(n), l = new Promise((f, c) => {
      r({ ...e, onCancel: () => {
        this.remove(e), e.onCancel(), c();
      }, onError: (u) => {
        this.remove(e), e.onError(u), c();
      }, onPrefetching(u) {
        e.onPrefetching(u);
      }, onPrefetched(u, d) {
        e.onPrefetched(u, d);
      }, onPrefetchResponse(u) {
        f(u);
      } });
    }).then((f) => (this.remove(e), this.cached.push({ params: { ...e }, staleTimestamp: Date.now() + a, response: l, singleUse: n === 0, timestamp: Date.now(), inFlight: !1 }), this.scheduleForRemoval(e, i), this.inFlightRequests = this.inFlightRequests.filter((c) => !this.paramsAreEqual(c.params, e)), f.handlePrefetch(), f));
    return this.inFlightRequests.push({ params: { ...e }, response: l, staleTimestamp: null, inFlight: !0 }), l;
  }
  removeAll() {
    this.cached = [], this.removalTimers.forEach((e) => {
      clearTimeout(e.timer);
    }), this.removalTimers = [];
  }
  remove(e) {
    this.cached = this.cached.filter((r) => !this.paramsAreEqual(r.params, e)), this.clearTimer(e);
  }
  extractStaleValues(e) {
    let [r, n] = this.cacheForToStaleAndExpires(e);
    return [To(r), To(n)];
  }
  cacheForToStaleAndExpires(e) {
    if (!Array.isArray(e))
      return [e, e];
    switch (e.length) {
      case 0:
        return [0, 0];
      case 1:
        return [e[0], e[0]];
      default:
        return [e[0], e[1]];
    }
  }
  clearTimer(e) {
    let r = this.removalTimers.find((n) => this.paramsAreEqual(n.params, e));
    r && (clearTimeout(r.timer), this.removalTimers = this.removalTimers.filter((n) => n !== r));
  }
  scheduleForRemoval(e, r) {
    if (!(typeof window > "u") && (this.clearTimer(e), r > 0)) {
      let n = window.setTimeout(() => this.remove(e), r);
      this.removalTimers.push({ params: e, timer: n });
    }
  }
  get(e) {
    return this.findCached(e) || this.findInFlight(e);
  }
  use(e, r) {
    let n = `${r.url.pathname}-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    return this.currentUseId = n, e.response.then((o) => {
      if (this.currentUseId === n)
        return o.mergeParams({ ...r, onPrefetched: () => {
        } }), this.removeSingleUseItems(r), o.handle();
    });
  }
  removeSingleUseItems(e) {
    this.cached = this.cached.filter((r) => this.paramsAreEqual(r.params, e) ? !r.singleUse : !0);
  }
  findCached(e) {
    return this.cached.find((r) => this.paramsAreEqual(r.params, e)) || null;
  }
  findInFlight(e) {
    return this.inFlightRequests.find((r) => this.paramsAreEqual(r.params, e)) || null;
  }
  paramsAreEqual(e, r) {
    return Ma(e, r, ["showProgress", "replace", "prefetch", "onBefore", "onStart", "onProgress", "onFinish", "onCancel", "onSuccess", "onError", "onPrefetched", "onCancelToken", "onPrefetching", "async"]);
  }
}, _e = new Mf(), qf = class qa {
  constructor(e) {
    if (this.callbacks = [], !e.prefetch)
      this.params = e;
    else {
      let r = { onBefore: this.wrapCallback(e, "onBefore"), onStart: this.wrapCallback(e, "onStart"), onProgress: this.wrapCallback(e, "onProgress"), onFinish: this.wrapCallback(e, "onFinish"), onCancel: this.wrapCallback(e, "onCancel"), onSuccess: this.wrapCallback(e, "onSuccess"), onError: this.wrapCallback(e, "onError"), onCancelToken: this.wrapCallback(e, "onCancelToken"), onPrefetched: this.wrapCallback(e, "onPrefetched"), onPrefetching: this.wrapCallback(e, "onPrefetching") };
      this.params = { ...e, ...r, onPrefetchResponse: e.onPrefetchResponse || (() => {
      }) };
    }
  }
  static create(e) {
    return new qa(e);
  }
  data() {
    return this.params.method === "get" ? null : this.params.data;
  }
  queryParams() {
    return this.params.method === "get" ? this.params.data : {};
  }
  isPartial() {
    return this.params.only.length > 0 || this.params.except.length > 0 || this.params.reset.length > 0;
  }
  onCancelToken(e) {
    this.params.onCancelToken({ cancel: e });
  }
  markAsFinished() {
    this.params.completed = !0, this.params.cancelled = !1, this.params.interrupted = !1;
  }
  markAsCancelled({ cancelled: e = !0, interrupted: r = !1 }) {
    this.params.onCancel(), this.params.completed = !1, this.params.cancelled = e, this.params.interrupted = r;
  }
  wasCancelledAtAll() {
    return this.params.cancelled || this.params.interrupted;
  }
  onFinish() {
    this.params.onFinish(this.params);
  }
  onStart() {
    this.params.onStart(this.params);
  }
  onPrefetching() {
    this.params.onPrefetching(this.params);
  }
  onPrefetchResponse(e) {
    this.params.onPrefetchResponse && this.params.onPrefetchResponse(e);
  }
  all() {
    return this.params;
  }
  headers() {
    let e = { ...this.params.headers };
    this.isPartial() && (e["X-Inertia-Partial-Component"] = R.get().component);
    let r = this.params.only.concat(this.params.reset);
    return r.length > 0 && (e["X-Inertia-Partial-Data"] = r.join(",")), this.params.except.length > 0 && (e["X-Inertia-Partial-Except"] = this.params.except.join(",")), this.params.reset.length > 0 && (e["X-Inertia-Reset"] = this.params.reset.join(",")), this.params.errorBag && this.params.errorBag.length > 0 && (e["X-Inertia-Error-Bag"] = this.params.errorBag), e;
  }
  setPreserveOptions(e) {
    this.params.preserveScroll = this.resolvePreserveOption(this.params.preserveScroll, e), this.params.preserveState = this.resolvePreserveOption(this.params.preserveState, e);
  }
  runCallbacks() {
    this.callbacks.forEach(({ name: e, args: r }) => {
      this.params[e](...r);
    });
  }
  merge(e) {
    this.params = { ...this.params, ...e };
  }
  wrapCallback(e, r) {
    return (...n) => {
      this.recordCallback(r, n), e[r](...n);
    };
  }
  recordCallback(e, r) {
    this.callbacks.push({ name: e, args: r });
  }
  resolvePreserveOption(e, r) {
    return typeof e == "function" ? e(r) : e === "errors" ? Object.keys(r.props.errors || {}).length > 0 : e;
  }
}, Uf = { modal: null, listener: null, show(t) {
  typeof t == "object" && (t = `All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(t)}`);
  let e = document.createElement("html");
  e.innerHTML = t, e.querySelectorAll("a").forEach((n) => n.setAttribute("target", "_top")), this.modal = document.createElement("div"), this.modal.style.position = "fixed", this.modal.style.width = "100vw", this.modal.style.height = "100vh", this.modal.style.padding = "50px", this.modal.style.boxSizing = "border-box", this.modal.style.backgroundColor = "rgba(0, 0, 0, .6)", this.modal.style.zIndex = 2e5, this.modal.addEventListener("click", () => this.hide());
  let r = document.createElement("iframe");
  if (r.style.backgroundColor = "white", r.style.borderRadius = "5px", r.style.width = "100%", r.style.height = "100%", this.modal.appendChild(r), document.body.prepend(this.modal), document.body.style.overflow = "hidden", !r.contentWindow)
    throw new Error("iframe not yet ready.");
  r.contentWindow.document.open(), r.contentWindow.document.write(e.outerHTML), r.contentWindow.document.close(), this.listener = this.hideOnEscape.bind(this), document.addEventListener("keydown", this.listener);
}, hide() {
  this.modal.outerHTML = "", this.modal = null, document.body.style.overflow = "visible", document.removeEventListener("keydown", this.listener);
}, hideOnEscape(t) {
  t.keyCode === 27 && this.hide();
} }, Bf = new La(), Co = class Ua {
  constructor(e, r, n) {
    this.requestParams = e, this.response = r, this.originatingPage = n;
  }
  static create(e, r, n) {
    return new Ua(e, r, n);
  }
  async handlePrefetch() {
    tn(this.requestParams.all().url, window.location) && this.handle();
  }
  async handle() {
    return Bf.add(() => this.process());
  }
  async process() {
    if (this.requestParams.all().prefetch)
      return this.requestParams.all().prefetch = !1, this.requestParams.all().onPrefetched(this.response, this.requestParams.all()), bf(this.response, this.requestParams.all()), Promise.resolve();
    if (this.requestParams.runCallbacks(), !this.isInertiaResponse())
      return this.handleNonInertiaResponse();
    await j.processQueue(), j.preserveUrl = this.requestParams.all().preserveUrl, await this.setPage();
    let e = R.get().props.errors || {};
    if (Object.keys(e).length > 0) {
      let r = this.getScopedErrors(e);
      return df(r), this.requestParams.all().onError(r);
    }
    vf(R.get()), await this.requestParams.all().onSuccess(R.get()), j.preserveUrl = !1;
  }
  mergeParams(e) {
    this.requestParams.merge(e);
  }
  async handleNonInertiaResponse() {
    if (this.isLocationVisit()) {
      let r = Ae(this.getHeader("x-inertia-location"));
      return Oo(this.requestParams.all().url, r), this.locationVisit(r);
    }
    let e = { ...this.response, data: this.getDataFromResponse(this.response.data) };
    if (mf(e))
      return Uf.show(e.data);
  }
  isInertiaResponse() {
    return this.hasHeader("x-inertia");
  }
  hasStatus(e) {
    return this.response.status === e;
  }
  getHeader(e) {
    return this.response.headers[e];
  }
  hasHeader(e) {
    return this.getHeader(e) !== void 0;
  }
  isLocationVisit() {
    return this.hasStatus(409) && this.hasHeader("x-inertia-location");
  }
  locationVisit(e) {
    try {
      if (Z.set(Z.locationVisitKey, { preserveScroll: this.requestParams.all().preserveScroll === !0 }), typeof window > "u")
        return;
      tn(window.location, e) ? window.location.reload() : window.location.href = e.href;
    } catch {
      return !1;
    }
  }
  async setPage() {
    let e = this.getDataFromResponse(this.response.data);
    return this.shouldSetPage(e) ? (this.mergeProps(e), await this.setRememberedState(e), this.requestParams.setPreserveOptions(e), e.url = j.preserveUrl ? R.get().url : this.pageUrl(e), R.set(e, { replace: this.requestParams.all().replace, preserveScroll: this.requestParams.all().preserveScroll, preserveState: this.requestParams.all().preserveState })) : Promise.resolve();
  }
  getDataFromResponse(e) {
    if (typeof e != "string")
      return e;
    try {
      return JSON.parse(e);
    } catch {
      return e;
    }
  }
  shouldSetPage(e) {
    if (!this.requestParams.all().async || this.originatingPage.component !== e.component)
      return !0;
    if (this.originatingPage.component !== R.get().component)
      return !1;
    let r = Ae(this.originatingPage.url), n = Ae(R.get().url);
    return r.origin === n.origin && r.pathname === n.pathname;
  }
  pageUrl(e) {
    let r = Ae(e.url);
    return Oo(this.requestParams.all().url, r), r.pathname + r.search + r.hash;
  }
  mergeProps(e) {
    if (!this.requestParams.isPartial() || e.component !== R.get().component)
      return;
    let r = e.mergeProps || [], n = e.deepMergeProps || [];
    r.forEach((o) => {
      let a = e.props[o];
      Array.isArray(a) ? e.props[o] = [...R.get().props[o] || [], ...a] : typeof a == "object" && a !== null && (e.props[o] = { ...R.get().props[o] || [], ...a });
    }), n.forEach((o) => {
      let a = e.props[o], i = R.get().props[o], l = (f, c) => Array.isArray(c) ? [...Array.isArray(f) ? f : [], ...c] : typeof c == "object" && c !== null ? Object.keys(c).reduce((u, d) => (u[d] = l(f ? f[d] : void 0, c[d]), u), { ...f }) : c;
      e.props[o] = l(i, a);
    }), e.props = { ...R.get().props, ...e.props };
  }
  async setRememberedState(e) {
    let r = await j.getState(j.rememberedState, {});
    this.requestParams.all().preserveState && r && e.component === R.get().component && (e.rememberedState = r);
  }
  getScopedErrors(e) {
    return this.requestParams.all().errorBag ? e[this.requestParams.all().errorBag || ""] || {} : e;
  }
}, No = class Ba {
  constructor(e, r) {
    this.page = r, this.requestHasFinished = !1, this.requestParams = qf.create(e), this.cancelToken = new AbortController();
  }
  static create(e, r) {
    return new Ba(e, r);
  }
  async send() {
    this.requestParams.onCancelToken(() => this.cancel({ cancelled: !0 })), gf(this.requestParams.all()), this.requestParams.onStart(), this.requestParams.all().prefetch && (this.requestParams.onPrefetching(), wf(this.requestParams.all()));
    let e = this.requestParams.all().prefetch;
    return Eo({ method: this.requestParams.all().method, url: Gt(this.requestParams.all().url).href, data: this.requestParams.data(), params: this.requestParams.queryParams(), signal: this.cancelToken.signal, headers: this.getHeaders(), onUploadProgress: this.onProgress.bind(this), responseType: "text" }).then((r) => (this.response = Co.create(this.requestParams, r, this.page), this.response.handle())).catch((r) => r != null && r.response ? (this.response = Co.create(this.requestParams, r.response, this.page), this.response.handle()) : Promise.reject(r)).catch((r) => {
      if (!Eo.isCancel(r) && pf(r))
        return Promise.reject(r);
    }).finally(() => {
      this.finish(), e && this.response && this.requestParams.onPrefetchResponse(this.response);
    });
  }
  finish() {
    this.requestParams.wasCancelledAtAll() || (this.requestParams.markAsFinished(), this.fireFinishEvents());
  }
  fireFinishEvents() {
    this.requestHasFinished || (this.requestHasFinished = !0, hf(this.requestParams.all()), this.requestParams.onFinish());
  }
  cancel({ cancelled: e = !1, interrupted: r = !1 }) {
    this.requestHasFinished || (this.cancelToken.abort(), this.requestParams.markAsCancelled({ cancelled: e, interrupted: r }), this.fireFinishEvents());
  }
  onProgress(e) {
    this.requestParams.data() instanceof FormData && (e.percentage = e.progress ? Math.round(e.progress * 100) : 0, yf(e), this.requestParams.all().onProgress(e));
  }
  getHeaders() {
    let e = { ...this.requestParams.headers(), Accept: "text/html, application/xhtml+xml", "X-Requested-With": "XMLHttpRequest", "X-Inertia": !0 };
    return R.get().version && (e["X-Inertia-Version"] = R.get().version), e;
  }
}, _o = class {
  constructor({ maxConcurrent: t, interruptible: e }) {
    this.requests = [], this.maxConcurrent = t, this.interruptible = e;
  }
  send(t) {
    this.requests.push(t), t.send().then(() => {
      this.requests = this.requests.filter((e) => e !== t);
    });
  }
  interruptInFlight() {
    this.cancel({ interrupted: !0 }, !1);
  }
  cancelInFlight() {
    this.cancel({ cancelled: !0 }, !0);
  }
  cancel({ cancelled: t = !1, interrupted: e = !1 } = {}, r) {
    var n;
    this.shouldCancel(r) && ((n = this.requests.shift()) == null || n.cancel({ interrupted: e, cancelled: t }));
  }
  shouldCancel(t) {
    return t ? !0 : this.interruptible && this.requests.length >= this.maxConcurrent;
  }
}, Hf = class {
  constructor() {
    this.syncRequestStream = new _o({ maxConcurrent: 1, interruptible: !0 }), this.asyncRequestStream = new _o({ maxConcurrent: 1 / 0, interruptible: !1 });
  }
  init({ initialPage: t, resolveComponent: e, swapComponent: r }) {
    R.init({ initialPage: t, resolveComponent: e, swapComponent: r }), Ff.handle(), ke.init(), ke.on("missingHistoryItem", () => {
      typeof window < "u" && this.visit(window.location.href, { preserveState: !0, preserveScroll: !0, replace: !0 });
    }), ke.on("loadDeferredProps", () => {
      this.loadDeferredProps();
    });
  }
  get(t, e = {}, r = {}) {
    return this.visit(t, { ...r, method: "get", data: e });
  }
  post(t, e = {}, r = {}) {
    return this.visit(t, { preserveState: !0, ...r, method: "post", data: e });
  }
  put(t, e = {}, r = {}) {
    return this.visit(t, { preserveState: !0, ...r, method: "put", data: e });
  }
  patch(t, e = {}, r = {}) {
    return this.visit(t, { preserveState: !0, ...r, method: "patch", data: e });
  }
  delete(t, e = {}) {
    return this.visit(t, { preserveState: !0, ...e, method: "delete" });
  }
  reload(t = {}) {
    if (!(typeof window > "u"))
      return this.visit(window.location.href, { ...t, preserveScroll: !0, preserveState: !0, async: !0, headers: { ...t.headers || {}, "Cache-Control": "no-cache" } });
  }
  remember(t, e = "default") {
    j.remember(t, e);
  }
  restore(t = "default") {
    return j.restore(t);
  }
  on(t, e) {
    return typeof window > "u" ? () => {
    } : ke.onGlobalEvent(t, e);
  }
  cancel() {
    this.syncRequestStream.cancelInFlight();
  }
  cancelAll() {
    this.asyncRequestStream.cancelInFlight(), this.syncRequestStream.cancelInFlight();
  }
  poll(t, e = {}, r = {}) {
    return Df.add(t, () => this.reload(e), { autoStart: r.autoStart ?? !0, keepAlive: r.keepAlive ?? !1 });
  }
  visit(t, e = {}) {
    let r = this.getPendingVisit(t, { ...e, showProgress: e.showProgress ?? !e.async }), n = this.getVisitEvents(e);
    if (n.onBefore(r) === !1 || !Po(r))
      return;
    let o = r.async ? this.asyncRequestStream : this.syncRequestStream;
    o.interruptInFlight(), !R.isCleared() && !r.preserveUrl && fe.save();
    let a = { ...r, ...n }, i = _e.get(a);
    i ? (jo(i.inFlight), _e.use(i, a)) : (jo(!0), o.send(No.create(a, R.get())));
  }
  getCached(t, e = {}) {
    return _e.findCached(this.getPrefetchParams(t, e));
  }
  flush(t, e = {}) {
    _e.remove(this.getPrefetchParams(t, e));
  }
  flushAll() {
    _e.removeAll();
  }
  getPrefetching(t, e = {}) {
    return _e.findInFlight(this.getPrefetchParams(t, e));
  }
  prefetch(t, e = {}, { cacheFor: r = 3e4 }) {
    if (e.method !== "get")
      throw new Error("Prefetch requests must use the GET method");
    let n = this.getPendingVisit(t, { ...e, async: !0, showProgress: !1, prefetch: !0 }), o = n.url.origin + n.url.pathname + n.url.search, a = window.location.origin + window.location.pathname + window.location.search;
    if (o === a)
      return;
    let i = this.getVisitEvents(e);
    if (i.onBefore(n) === !1 || !Po(n))
      return;
    Ja(), this.asyncRequestStream.interruptInFlight();
    let l = { ...n, ...i };
    new Promise((f) => {
      let c = () => {
        R.get() ? f() : setTimeout(c, 50);
      };
      c();
    }).then(() => {
      _e.add(l, (f) => {
        this.asyncRequestStream.send(No.create(f, R.get()));
      }, { cacheFor: r });
    });
  }
  clearHistory() {
    j.clear();
  }
  decryptHistory() {
    return j.decrypt();
  }
  replace(t) {
    this.clientVisit(t, { replace: !0 });
  }
  push(t) {
    this.clientVisit(t);
  }
  clientVisit(t, { replace: e = !1 } = {}) {
    let r = R.get(), n = typeof t.props == "function" ? t.props(r.props) : t.props ?? r.props;
    R.set({ ...r, ...t, props: n }, { replace: e, preserveScroll: t.preserveScroll, preserveState: t.preserveState });
  }
  getPrefetchParams(t, e) {
    return { ...this.getPendingVisit(t, { ...e, async: !0, showProgress: !1, prefetch: !0 }), ...this.getVisitEvents(e) };
  }
  getPendingVisit(t, e, r = {}) {
    let n = { method: "get", data: {}, replace: !1, preserveScroll: !1, preserveState: !1, only: [], except: [], headers: {}, errorBag: "", forceFormData: !1, queryStringArrayFormat: "brackets", async: !1, showProgress: !0, fresh: !1, reset: [], preserveUrl: !1, prefetch: !1, ...e }, [o, a] = Tf(t, n.data, n.method, n.forceFormData, n.queryStringArrayFormat);
    return { cancelled: !1, completed: !1, interrupted: !1, ...n, ...r, url: o, data: a };
  }
  getVisitEvents(t) {
    return { onCancelToken: t.onCancelToken || (() => {
    }), onBefore: t.onBefore || (() => {
    }), onStart: t.onStart || (() => {
    }), onProgress: t.onProgress || (() => {
    }), onFinish: t.onFinish || (() => {
    }), onCancel: t.onCancel || (() => {
    }), onSuccess: t.onSuccess || (() => {
    }), onError: t.onError || (() => {
    }), onPrefetched: t.onPrefetched || (() => {
    }), onPrefetching: t.onPrefetching || (() => {
    }) };
  }
  loadDeferredProps() {
    var e;
    let t = (e = R.get()) == null ? void 0 : e.deferredProps;
    t && Object.entries(t).forEach(([r, n]) => {
      this.reload({ only: n });
    });
  }
}, Wf = { buildDOMElement(t) {
  let e = document.createElement("template");
  e.innerHTML = t;
  let r = e.content.firstChild;
  if (!t.startsWith("<script "))
    return r;
  let n = document.createElement("script");
  return n.innerHTML = r.innerHTML, r.getAttributeNames().forEach((o) => {
    n.setAttribute(o, r.getAttribute(o) || "");
  }), n;
}, isInertiaManagedElement(t) {
  return t.nodeType === Node.ELEMENT_NODE && t.getAttribute("inertia") !== null;
}, findMatchingElementIndex(t, e) {
  let r = t.getAttribute("inertia");
  return r !== null ? e.findIndex((n) => n.getAttribute("inertia") === r) : -1;
}, update: Zr(function(t) {
  let e = t.map((r) => this.buildDOMElement(r));
  Array.from(document.head.childNodes).filter((r) => this.isInertiaManagedElement(r)).forEach((r) => {
    var a, i;
    let n = this.findMatchingElementIndex(r, e);
    if (n === -1) {
      (a = r == null ? void 0 : r.parentNode) == null || a.removeChild(r);
      return;
    }
    let o = e.splice(n, 1)[0];
    o && !r.isEqualNode(o) && ((i = r == null ? void 0 : r.parentNode) == null || i.replaceChild(o, r));
  }), e.forEach((r) => document.head.appendChild(r));
}, 1) };
function Vf(t, e, r) {
  let n = {}, o = 0;
  function a() {
    let u = o += 1;
    return n[u] = [], u.toString();
  }
  function i(u) {
    u === null || Object.keys(n).indexOf(u) === -1 || (delete n[u], c());
  }
  function l(u, d = []) {
    u !== null && Object.keys(n).indexOf(u) > -1 && (n[u] = d), c();
  }
  function f() {
    let u = e(""), d = { ...u ? { title: `<title inertia="">${u}</title>` } : {} }, m = Object.values(n).reduce((v, y) => v.concat(y), []).reduce((v, y) => {
      if (y.indexOf("<") === -1)
        return v;
      if (y.indexOf("<title ") === 0) {
        let b = y.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return v.title = b ? `${b[1]}${e(b[2])}${b[3]}` : y, v;
      }
      let S = y.match(/ inertia="[^"]+"/);
      return S ? v[S[0]] = y : v[Object.keys(v).length] = y, v;
    }, d);
    return Object.values(m);
  }
  function c() {
    t ? r(f()) : Wf.update(f());
  }
  return c(), { forceUpdate: c, createProvider: function() {
    let u = a();
    return { update: (d) => l(u, d), disconnect: () => i(u) };
  } };
}
var V = "nprogress", te, J = { minimum: 0.08, easing: "linear", positionUsing: "translate3d", speed: 200, trickle: !0, trickleSpeed: 200, showSpinner: !0, barSelector: '[role="bar"]', spinnerSelector: '[role="spinner"]', parent: "body", color: "#29d", includeCSS: !0, template: ['<div class="bar" role="bar">', '<div class="peg"></div>', "</div>", '<div class="spinner" role="spinner">', '<div class="spinner-icon"></div>', "</div>"].join("") }, Te = null, zf = (t) => {
  Object.assign(J, t), J.includeCSS && Qf(J.color), te = document.createElement("div"), te.id = V, te.innerHTML = J.template;
}, ir = (t) => {
  let e = Ha();
  t = Ka(t, J.minimum, 1), Te = t === 1 ? null : t;
  let r = Kf(!e), n = r.querySelector(J.barSelector), o = J.speed, a = J.easing;
  r.offsetWidth, Xf((i) => {
    let l = J.positionUsing === "translate3d" ? { transition: `all ${o}ms ${a}`, transform: `translate3d(${$t(t)}%,0,0)` } : J.positionUsing === "translate" ? { transition: `all ${o}ms ${a}`, transform: `translate(${$t(t)}%,0)` } : { marginLeft: `${$t(t)}%` };
    for (let f in l)
      n.style[f] = l[f];
    if (t !== 1)
      return setTimeout(i, o);
    r.style.transition = "none", r.style.opacity = "1", r.offsetWidth, setTimeout(() => {
      r.style.transition = `all ${o}ms linear`, r.style.opacity = "0", setTimeout(() => {
        Ga(), r.style.transition = "", r.style.opacity = "", i();
      }, o);
    }, o);
  });
}, Ha = () => typeof Te == "number", Wa = () => {
  Te || ir(0);
  let t = function() {
    setTimeout(function() {
      Te && (Va(), t());
    }, J.trickleSpeed);
  };
  J.trickle && t();
}, Gf = (t) => {
  !t && !Te || (Va(0.3 + 0.5 * Math.random()), ir(1));
}, Va = (t) => {
  let e = Te;
  if (e === null)
    return Wa();
  if (!(e > 1))
    return t = typeof t == "number" ? t : (() => {
      let r = { 0.1: [0, 0.2], 0.04: [0.2, 0.5], 0.02: [0.5, 0.8], 5e-3: [0.8, 0.99] };
      for (let n in r)
        if (e >= r[n][0] && e < r[n][1])
          return parseFloat(n);
      return 0;
    })(), ir(Ka(e + t, 0, 0.994));
}, Kf = (t) => {
  var o;
  if (Jf())
    return document.getElementById(V);
  document.documentElement.classList.add(`${V}-busy`);
  let e = te.querySelector(J.barSelector), r = t ? "-100" : $t(Te || 0), n = za();
  return e.style.transition = "all 0 linear", e.style.transform = `translate3d(${r}%,0,0)`, J.showSpinner || ((o = te.querySelector(J.spinnerSelector)) == null || o.remove()), n !== document.body && n.classList.add(`${V}-custom-parent`), n.appendChild(te), te;
}, za = () => Yf(J.parent) ? J.parent : document.querySelector(J.parent), Ga = () => {
  document.documentElement.classList.remove(`${V}-busy`), za().classList.remove(`${V}-custom-parent`), te == null || te.remove();
}, Jf = () => document.getElementById(V) !== null, Yf = (t) => typeof HTMLElement == "object" ? t instanceof HTMLElement : t && typeof t == "object" && t.nodeType === 1 && typeof t.nodeName == "string";
function Ka(t, e, r) {
  return t < e ? e : t > r ? r : t;
}
var $t = (t) => (-1 + t) * 100, Xf = (() => {
  let t = [], e = () => {
    let r = t.shift();
    r && r(e);
  };
  return (r) => {
    t.push(r), t.length === 1 && e();
  };
})(), Qf = (t) => {
  let e = document.createElement("style");
  e.textContent = `
    #${V} {
      pointer-events: none;
    }

    #${V} .bar {
      background: ${t};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #${V} .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${t}, 0 0 5px ${t};
      opacity: 1.0;

      transform: rotate(3deg) translate(0px, -4px);
    }

    #${V} .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #${V} .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${t};
      border-left-color: ${t};
      border-radius: 50%;

      animation: ${V}-spinner 400ms linear infinite;
    }

    .${V}-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .${V}-custom-parent #${V} .spinner,
    .${V}-custom-parent #${V} .bar {
      position: absolute;
    }

    @keyframes ${V}-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `, document.head.appendChild(e);
}, Zf = () => {
  te && (te.style.display = "");
}, ed = () => {
  te && (te.style.display = "none");
}, le = { configure: zf, isStarted: Ha, done: Gf, set: ir, remove: Ga, start: Wa, status: Te, show: Zf, hide: ed }, Dt = 0, jo = (t = !1) => {
  Dt = Math.max(0, Dt - 1), (t || Dt === 0) && le.show();
}, Ja = () => {
  Dt++, le.hide();
};
function td(t) {
  document.addEventListener("inertia:start", (e) => rd(e, t)), document.addEventListener("inertia:progress", nd);
}
function rd(t, e) {
  t.detail.visit.showProgress || Ja();
  let r = setTimeout(() => le.start(), e);
  document.addEventListener("inertia:finish", (n) => od(n, r), { once: !0 });
}
function nd(t) {
  var e;
  le.isStarted() && ((e = t.detail.progress) != null && e.percentage) && le.set(Math.max(le.status, t.detail.progress.percentage / 100 * 0.9));
}
function od(t, e) {
  clearTimeout(e), le.isStarted() && (t.detail.visit.completed ? le.done() : t.detail.visit.interrupted ? le.set(0) : t.detail.visit.cancelled && (le.done(), le.remove()));
}
function ad({ delay: t = 250, color: e = "#29d", includeCSS: r = !0, showSpinner: n = !1 } = {}) {
  td(t), le.configure({ showSpinner: n, includeCSS: r, color: e });
}
function Lr(t) {
  let e = t.currentTarget.tagName.toLowerCase() === "a";
  return !(t.target && (t == null ? void 0 : t.target).isContentEditable || t.defaultPrevented || e && t.altKey || e && t.ctrlKey || e && t.metaKey || e && t.shiftKey || e && "button" in t && t.button !== 0);
}
var Ve = new Hf();
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
* @license MIT */
var Ya = ko(void 0);
Ya.displayName = "InertiaHeadContext";
var rn = Ya, Xa = ko(void 0);
Xa.displayName = "InertiaPageContext";
var nn = Xa;
function Qa({ children: t, initialPage: e, initialComponent: r, resolveComponent: n, titleCallback: o, onHeadUpdate: a }) {
  let [i, l] = $o({ component: r || null, page: e, key: null }), f = Lt(() => Vf(typeof window > "u", o || ((u) => u), a || (() => {
  })), []);
  if (Mt(() => {
    Ve.init({ initialPage: e, resolveComponent: n, swapComponent: async ({ component: u, page: d, preserveState: m }) => {
      l((v) => ({ component: u, page: d, key: m ? v.key : Date.now() }));
    } }), Ve.on("navigate", () => f.forceUpdate());
  }, []), !i.component)
    return Re(rn.Provider, { value: f }, Re(nn.Provider, { value: i.page }, null));
  let c = t || (({ Component: u, props: d, key: m }) => {
    let v = Re(u, { key: m, ...d });
    return typeof u.layout == "function" ? u.layout(v) : Array.isArray(u.layout) ? u.layout.concat(v).reverse().reduce((y, S) => Re(S, { children: y, ...d })) : v;
  });
  return Re(rn.Provider, { value: f }, Re(nn.Provider, { value: i.page }, c({ Component: i.component, key: i.key, props: i.page.props })));
}
Qa.displayName = "Inertia";
async function id({ id: t = "app", resolve: e, setup: r, title: n, progress: o = {}, page: a, render: i }) {
  let l = typeof window > "u", f = l ? null : document.getElementById(t), c = a || JSON.parse(f.dataset.page), u = (v) => Promise.resolve(e(v)).then((y) => y.default || y), d = [], m = await Promise.all([u(c.component), Ve.decryptHistory().catch(() => {
  })]).then(([v]) => r({ el: f, App: Qa, props: { initialPage: c, initialComponent: v, resolveComponent: u, titleCallback: n, onHeadUpdate: l ? (y) => d = y : null } }));
  if (!l && o && ad(o), l) {
    let v = await i(Re("div", { id: t, "data-page": JSON.stringify(c) }, m));
    return { head: d, body: v };
  }
}
function Za() {
  let t = Do(nn);
  if (!t)
    throw new Error("usePage must be used within the Inertia component");
  return t;
}
var sd = function({ children: t, title: e }) {
  let r = Do(rn), n = Lt(() => r.createProvider(), [r]);
  Mt(() => () => {
    n.disconnect();
  }, [n]);
  function o(d) {
    return ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"].indexOf(d.type) > -1;
  }
  function a(d) {
    let m = Object.keys(d.props).reduce((v, y) => {
      if (["head-key", "children", "dangerouslySetInnerHTML"].includes(y))
        return v;
      let S = d.props[y];
      return S === "" ? v + ` ${y}` : v + ` ${y}="${S}"`;
    }, "");
    return `<${d.type}${m}>`;
  }
  function i(d) {
    return typeof d.props.children == "string" ? d.props.children : d.props.children.reduce((m, v) => m + l(v), "");
  }
  function l(d) {
    let m = a(d);
    return d.props.children && (m += i(d)), d.props.dangerouslySetInnerHTML && (m += d.props.dangerouslySetInnerHTML.__html), o(d) || (m += `</${d.type}>`), m;
  }
  function f(d) {
    return It.cloneElement(d, { inertia: d.props["head-key"] !== void 0 ? d.props["head-key"] : "" });
  }
  function c(d) {
    return l(f(d));
  }
  function u(d) {
    let m = It.Children.toArray(d).filter((v) => v).map((v) => c(v));
    return e && !m.find((v) => v.startsWith("<title")) && m.push(`<title inertia>${e}</title>`), m;
  }
  return n.update(u(t)), null;
}, ei = sd, Se = () => {
}, ti = Ti(({ children: t, as: e = "a", data: r = {}, href: n, method: o = "get", preserveScroll: a = !1, preserveState: i = null, replace: l = !1, only: f = [], except: c = [], headers: u = {}, queryStringArrayFormat: d = "brackets", async: m = !1, onClick: v = Se, onCancelToken: y = Se, onBefore: S = Se, onStart: b = Se, onProgress: A = Se, onFinish: E = Se, onCancel: x = Se, onSuccess: I = Se, onError: k = Se, prefetch: $ = !1, cacheFor: q = 0, ...ne }, X) => {
  let [ie, be] = $o(0), oe = Ci(null);
  e = e.toLowerCase(), o = typeof n == "object" ? n.method : o.toLowerCase();
  let [D, z] = Ia(o, typeof n == "object" ? n.url : n || "", r, d), U = D;
  r = z;
  let ce = { data: r, method: o, preserveScroll: a, preserveState: i ?? o !== "get", replace: l, only: f, except: c, headers: u, async: m }, we = { ...ce, onCancelToken: y, onBefore: S, onStart(G) {
    be((Ze) => Ze + 1), b(G);
  }, onProgress: A, onFinish(G) {
    be((Ze) => Ze - 1), E(G);
  }, onCancel: x, onSuccess: I, onError: k }, Ee = () => {
    Ve.prefetch(U, ce, { cacheFor: Pe });
  }, ae = Lt(() => $ === !0 ? ["hover"] : $ === !1 ? [] : Array.isArray($) ? $ : [$], Array.isArray($) ? $ : [$]), Pe = Lt(() => q !== 0 ? q : ae.length === 1 && ae[0] === "click" ? 0 : 3e4, [q, ae]);
  Mt(() => () => {
    clearTimeout(oe.current);
  }, []), Mt(() => {
    ae.includes("mount") && setTimeout(() => Ee());
  }, ae);
  let Qe = { onClick: (G) => {
    v(G), Lr(G) && (G.preventDefault(), Ve.visit(U, we));
  } }, bt = { onMouseEnter: () => {
    oe.current = window.setTimeout(() => {
      Ee();
    }, 75);
  }, onMouseLeave: () => {
    clearTimeout(oe.current);
  }, onClick: Qe.onClick }, wt = { onMouseDown: (G) => {
    Lr(G) && (G.preventDefault(), Ee());
  }, onMouseUp: (G) => {
    G.preventDefault(), Ve.visit(U, we);
  }, onClick: (G) => {
    v(G), Lr(G) && G.preventDefault();
  } };
  return o !== "get" && (e = "button"), Re(e, { ...ne, ...{ a: { href: U }, button: { type: "button" } }[e] || {}, ref: X, ...ae.includes("hover") ? bt : ae.includes("click") ? wt : Qe, "data-loading": ie > 0 ? "" : void 0 }, t);
});
ti.displayName = "InertiaLink";
var ue = ti;
function ri({ children: t }) {
  return /* @__PURE__ */ p.jsx("div", { className: "min-h-screen bg-black text-white", children: t });
}
function ld() {
  const { groups: t, filters: e } = Za().props;
  return /* @__PURE__ */ p.jsxs(ri, { children: [
    /* @__PURE__ */ p.jsx(ei, { title: "Gruplar" }),
    /* @__PURE__ */ p.jsx("div", { className: "py-12", children: /* @__PURE__ */ p.jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ p.jsx("div", { className: "bg-white overflow-hidden shadow-sm sm:rounded-lg", children: /* @__PURE__ */ p.jsxs("div", { className: "p-6 text-gray-900", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ p.jsx("h1", { className: "text-2xl font-bold", children: "Gruplar" }),
        /* @__PURE__ */ p.jsx(
          ue,
          {
            href: route("web.groups.create"),
            className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
            children: "Yeni Grup Oluştur"
          }
        )
      ] }),
      /* @__PURE__ */ p.jsx("div", { className: "mb-6", children: /* @__PURE__ */ p.jsxs("form", { method: "get", className: "flex gap-4", children: [
        /* @__PURE__ */ p.jsx(
          "input",
          {
            type: "text",
            name: "search",
            placeholder: "Grup ara...",
            defaultValue: e.search,
            className: "flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          }
        ),
        /* @__PURE__ */ p.jsx(
          "button",
          {
            type: "submit",
            className: "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded",
            children: "Ara"
          }
        )
      ] }) }),
      /* @__PURE__ */ p.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: t.map((r) => /* @__PURE__ */ p.jsxs("div", { className: "bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow", children: [
        r.image && /* @__PURE__ */ p.jsx(
          "img",
          {
            src: r.image,
            alt: r.name,
            className: "w-full h-48 object-cover rounded-t-lg"
          }
        ),
        /* @__PURE__ */ p.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-semibold mb-2", children: /* @__PURE__ */ p.jsx(
            ue,
            {
              href: route("web.groups.show", r.id),
              className: "text-blue-600 hover:text-blue-800",
              children: r.name
            }
          ) }),
          /* @__PURE__ */ p.jsx("p", { className: "text-gray-600 text-sm mb-3", children: r.description }),
          /* @__PURE__ */ p.jsxs("div", { className: "flex justify-between items-center text-sm text-gray-500", children: [
            /* @__PURE__ */ p.jsxs("span", { children: [
              r.member_count,
              " üye"
            ] }),
            /* @__PURE__ */ p.jsx("span", { children: new Date(r.created_at).toLocaleDateString("tr-TR") })
          ] })
        ] })
      ] }, r.id)) }),
      t.length === 0 && /* @__PURE__ */ p.jsxs("div", { className: "text-center py-12", children: [
        /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "Henüz grup bulunmuyor" }),
        /* @__PURE__ */ p.jsx("p", { className: "text-gray-500 mb-4", children: "İlk grubu sen oluştur!" }),
        /* @__PURE__ */ p.jsx(
          ue,
          {
            href: route("web.groups.create"),
            className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
            children: "Grup Oluştur"
          }
        )
      ] })
    ] }) }) }) })
  ] });
}
const cd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ld
}, Symbol.toStringTag, { value: "Module" }));
function ud() {
  var a, i, l, f;
  const { posts: t, trending_groups: e, suggested_users: r, auth: n } = Za().props, o = (c) => {
    const u = new Date(c), m = (/* @__PURE__ */ new Date()).getTime() - u.getTime(), v = Math.floor(m / 6e4), y = Math.floor(v / 60), S = Math.floor(y / 24);
    return v < 1 ? "now" : v < 60 ? `${v}m` : y < 24 ? `${y}h` : `${S}d`;
  };
  return /* @__PURE__ */ p.jsxs(ri, { children: [
    /* @__PURE__ */ p.jsx(ei, { title: "Home" }),
    /* @__PURE__ */ p.jsxs("div", { className: "min-h-screen bg-black text-white", children: [
      /* @__PURE__ */ p.jsx("header", { className: "sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800", children: /* @__PURE__ */ p.jsxs("div", { className: "max-w-6xl mx-auto px-4 h-16 flex items-center justify-between", children: [
        /* @__PURE__ */ p.jsx(ue, { href: "/home", className: "text-2xl font-bold text-white hover:text-blue-400 transition-colors", children: "𝕏 Jemiyet" }),
        /* @__PURE__ */ p.jsx("div", { className: "flex items-center space-x-6", children: (n == null ? void 0 : n.user) && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
          /* @__PURE__ */ p.jsxs("span", { className: "text-sm text-gray-300", children: [
            "Welcome, ",
            n.user.name
          ] }),
          /* @__PURE__ */ p.jsx(ue, { href: "/profile", className: "text-blue-400 hover:text-blue-300 transition-colors", children: "Profile" }),
          /* @__PURE__ */ p.jsx(ue, { href: "/logout", method: "post", as: "button", className: "text-gray-400 hover:text-white transition-colors", children: "Logout" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ p.jsxs("div", { className: "max-w-6xl mx-auto flex", children: [
        /* @__PURE__ */ p.jsxs("aside", { className: "w-64 p-6 border-r border-gray-800 sticky top-16 h-screen overflow-y-auto", children: [
          /* @__PURE__ */ p.jsxs("nav", { className: "space-y-2", children: [
            /* @__PURE__ */ p.jsxs(
              ue,
              {
                href: "/home",
                className: "flex items-center space-x-4 p-3 rounded-full hover:bg-gray-900 transition-colors group",
                children: [
                  /* @__PURE__ */ p.jsx("div", { className: "p-2 rounded-full group-hover:bg-white/10", children: /* @__PURE__ */ p.jsx("svg", { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ p.jsx("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" }) }) }),
                  /* @__PURE__ */ p.jsx("span", { className: "text-xl font-medium", children: "Home" })
                ]
              }
            ),
            /* @__PURE__ */ p.jsxs(
              ue,
              {
                href: "/groups",
                className: "flex items-center space-x-4 p-3 rounded-full hover:bg-gray-900 transition-colors group",
                children: [
                  /* @__PURE__ */ p.jsx("div", { className: "p-2 rounded-full group-hover:bg-white/10", children: /* @__PURE__ */ p.jsx("svg", { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ p.jsx("path", { d: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" }) }) }),
                  /* @__PURE__ */ p.jsx("span", { className: "text-xl font-medium", children: "Groups" })
                ]
              }
            ),
            /* @__PURE__ */ p.jsxs(
              ue,
              {
                href: "/events",
                className: "flex items-center space-x-4 p-3 rounded-full hover:bg-gray-900 transition-colors group",
                children: [
                  /* @__PURE__ */ p.jsx("div", { className: "p-2 rounded-full group-hover:bg-white/10", children: /* @__PURE__ */ p.jsx("svg", { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ p.jsx("path", { fillRule: "evenodd", d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z", clipRule: "evenodd" }) }) }),
                  /* @__PURE__ */ p.jsx("span", { className: "text-xl font-medium", children: "Events" })
                ]
              }
            ),
            /* @__PURE__ */ p.jsxs(
              ue,
              {
                href: "/profile",
                className: "flex items-center space-x-4 p-3 rounded-full hover:bg-gray-900 transition-colors group",
                children: [
                  /* @__PURE__ */ p.jsx("div", { className: "p-2 rounded-full group-hover:bg-white/10", children: /* @__PURE__ */ p.jsx("svg", { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ p.jsx("path", { fillRule: "evenodd", d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z", clipRule: "evenodd" }) }) }),
                  /* @__PURE__ */ p.jsx("span", { className: "text-xl font-medium", children: "Profile" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ p.jsx("button", { className: "w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full mt-8 transition-colors", children: "Post Something" })
        ] }),
        /* @__PURE__ */ p.jsxs("main", { className: "flex-1 max-w-2xl border-r border-gray-800", children: [
          /* @__PURE__ */ p.jsxs("div", { className: "sticky top-16 bg-black/80 backdrop-blur-md border-b border-gray-800 p-4 z-40", children: [
            /* @__PURE__ */ p.jsx("h1", { className: "text-xl font-bold", children: "Home" }),
            /* @__PURE__ */ p.jsx("p", { className: "text-sm text-gray-500 mt-1", children: "Latest posts from your network" })
          ] }),
          /* @__PURE__ */ p.jsx("div", { className: "border-b border-gray-800 p-6", children: /* @__PURE__ */ p.jsxs("div", { className: "flex space-x-4", children: [
            /* @__PURE__ */ p.jsx(
              "img",
              {
                src: ((a = n == null ? void 0 : n.user) == null ? void 0 : a.avatar) || "/default-avatar.png",
                alt: (i = n == null ? void 0 : n.user) == null ? void 0 : i.name,
                className: "w-12 h-12 rounded-full bg-gray-700",
                onError: (c) => {
                  var d;
                  const u = c.target;
                  u.style.display = "none", (d = u.nextElementSibling) == null || d.classList.remove("hidden");
                }
              }
            ),
            /* @__PURE__ */ p.jsx("div", { className: "w-12 h-12 rounded-full bg-gray-700 hidden flex items-center justify-center", children: /* @__PURE__ */ p.jsx("span", { className: "text-white font-bold text-lg", children: (f = (l = n == null ? void 0 : n.user) == null ? void 0 : l.name) == null ? void 0 : f.charAt(0).toUpperCase() }) }),
            /* @__PURE__ */ p.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ p.jsx(
                "textarea",
                {
                  placeholder: "What's happening?",
                  className: "w-full bg-transparent text-xl placeholder-gray-500 border-none resize-none focus:outline-none min-h-[120px]"
                }
              ),
              /* @__PURE__ */ p.jsxs("div", { className: "flex justify-between items-center mt-4", children: [
                /* @__PURE__ */ p.jsxs("div", { className: "flex space-x-4 text-blue-500", children: [
                  /* @__PURE__ */ p.jsx("button", { className: "hover:bg-blue-900/20 p-2 rounded-full transition-colors", children: /* @__PURE__ */ p.jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ p.jsx("path", { fillRule: "evenodd", d: "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z", clipRule: "evenodd" }) }) }),
                  /* @__PURE__ */ p.jsx("button", { className: "hover:bg-blue-900/20 p-2 rounded-full transition-colors", children: /* @__PURE__ */ p.jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ p.jsx("path", { fillRule: "evenodd", d: "M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z", clipRule: "evenodd" }) }) })
                ] }),
                /* @__PURE__ */ p.jsx("button", { className: "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded-full disabled:opacity-50 transition-colors", children: "Post" })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ p.jsx("div", { className: "divide-y divide-gray-800", children: t.map((c) => /* @__PURE__ */ p.jsx("article", { className: "p-6 hover:bg-gray-950/50 transition-colors", children: /* @__PURE__ */ p.jsxs("div", { className: "flex space-x-4", children: [
            /* @__PURE__ */ p.jsx(
              "img",
              {
                src: c.user.avatar || "/default-avatar.png",
                alt: c.user.name,
                className: "w-12 h-12 rounded-full bg-gray-700",
                onError: (u) => {
                  var m;
                  const d = u.target;
                  d.style.display = "none", (m = d.nextElementSibling) == null || m.classList.remove("hidden");
                }
              }
            ),
            /* @__PURE__ */ p.jsx("div", { className: "w-12 h-12 rounded-full bg-gray-700 hidden flex items-center justify-center", children: /* @__PURE__ */ p.jsx("span", { className: "text-white font-bold text-lg", children: c.user.name.charAt(0).toUpperCase() }) }),
            /* @__PURE__ */ p.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ p.jsxs("div", { className: "flex items-center space-x-2 mb-2", children: [
                /* @__PURE__ */ p.jsx("h3", { className: "font-bold hover:underline cursor-pointer truncate", children: c.user.name }),
                /* @__PURE__ */ p.jsxs("span", { className: "text-gray-500 truncate", children: [
                  "@",
                  c.user.username
                ] }),
                /* @__PURE__ */ p.jsx("span", { className: "text-gray-500", children: "·" }),
                /* @__PURE__ */ p.jsx("time", { className: "text-gray-500 hover:underline cursor-pointer flex-shrink-0", children: o(c.created_at) })
              ] }),
              /* @__PURE__ */ p.jsxs("div", { className: "mb-4", children: [
                /* @__PURE__ */ p.jsx("p", { className: "text-white leading-relaxed whitespace-pre-wrap", children: c.content }),
                c.images && c.images.length > 0 && /* @__PURE__ */ p.jsx("div", { className: "mt-4 rounded-2xl overflow-hidden", children: /* @__PURE__ */ p.jsx(
                  "img",
                  {
                    src: c.images[0],
                    alt: "Post image",
                    className: "w-full max-h-96 object-cover"
                  }
                ) })
              ] }),
              /* @__PURE__ */ p.jsxs("div", { className: "flex justify-between max-w-md text-gray-500", children: [
                /* @__PURE__ */ p.jsxs("button", { className: "flex items-center space-x-2 hover:text-blue-500 group transition-colors", children: [
                  /* @__PURE__ */ p.jsx("div", { className: "p-2 rounded-full group-hover:bg-blue-900/20 transition-colors", children: /* @__PURE__ */ p.jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ p.jsx("path", { fillRule: "evenodd", d: "M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z", clipRule: "evenodd" }) }) }),
                  /* @__PURE__ */ p.jsx("span", { className: "text-sm", children: c.comments_count })
                ] }),
                /* @__PURE__ */ p.jsxs("button", { className: `flex items-center space-x-2 group transition-colors ${c.is_liked ? "text-red-500" : "hover:text-red-500"}`, children: [
                  /* @__PURE__ */ p.jsx("div", { className: "p-2 rounded-full group-hover:bg-red-900/20 transition-colors", children: /* @__PURE__ */ p.jsx("svg", { className: "w-5 h-5", fill: c.is_liked ? "currentColor" : "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ p.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" }) }) }),
                  /* @__PURE__ */ p.jsx("span", { className: "text-sm", children: c.likes_count })
                ] }),
                /* @__PURE__ */ p.jsx("button", { className: "flex items-center space-x-2 hover:text-green-500 group transition-colors", children: /* @__PURE__ */ p.jsx("div", { className: "p-2 rounded-full group-hover:bg-green-900/20 transition-colors", children: /* @__PURE__ */ p.jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ p.jsx("path", { d: "M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" }) }) }) })
              ] })
            ] })
          ] }) }, c.id)) })
        ] }),
        /* @__PURE__ */ p.jsxs("aside", { className: "w-80 p-6 sticky top-16 h-screen overflow-y-auto", children: [
          /* @__PURE__ */ p.jsxs("div", { className: "bg-gray-900/50 rounded-2xl p-6 mb-6", children: [
            /* @__PURE__ */ p.jsx("h2", { className: "text-xl font-bold mb-4", children: "Trending Groups" }),
            /* @__PURE__ */ p.jsx("div", { className: "space-y-3", children: e.slice(0, 5).map((c) => /* @__PURE__ */ p.jsx(
              ue,
              {
                href: `/groups/${c.id}`,
                className: "block p-3 rounded-xl hover:bg-gray-800/50 transition-colors",
                children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ p.jsxs("div", { children: [
                    /* @__PURE__ */ p.jsx("h3", { className: "font-medium", children: c.name }),
                    /* @__PURE__ */ p.jsxs("p", { className: "text-sm text-gray-400", children: [
                      c.member_count,
                      " members"
                    ] })
                  ] }),
                  /* @__PURE__ */ p.jsx("button", { className: "text-xs bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full transition-colors", children: "Join" })
                ] })
              },
              c.id
            )) })
          ] }),
          /* @__PURE__ */ p.jsxs("div", { className: "bg-gray-900/50 rounded-2xl p-6", children: [
            /* @__PURE__ */ p.jsx("h2", { className: "text-xl font-bold mb-4", children: "Who to follow" }),
            /* @__PURE__ */ p.jsx("div", { className: "space-y-4", children: r.map((c) => /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ p.jsxs("div", { className: "flex items-center space-x-3", children: [
                /* @__PURE__ */ p.jsx(
                  "img",
                  {
                    src: c.avatar || "/default-avatar.png",
                    alt: c.name,
                    className: "w-10 h-10 rounded-full bg-gray-700",
                    onError: (u) => {
                      var m;
                      const d = u.target;
                      d.style.display = "none", (m = d.nextElementSibling) == null || m.classList.remove("hidden");
                    }
                  }
                ),
                /* @__PURE__ */ p.jsx("div", { className: "w-10 h-10 rounded-full bg-gray-700 hidden flex items-center justify-center", children: /* @__PURE__ */ p.jsx("span", { className: "text-white font-bold text-sm", children: c.name.charAt(0).toUpperCase() }) }),
                /* @__PURE__ */ p.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ p.jsx("h4", { className: "font-medium truncate", children: c.name }),
                  /* @__PURE__ */ p.jsxs("p", { className: "text-sm text-gray-400 truncate", children: [
                    "@",
                    c.username
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ p.jsx("button", { className: "text-xs bg-white text-black hover:bg-gray-200 font-bold px-4 py-1.5 rounded-full transition-colors", children: "Follow" })
            ] }, c.id)) })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const fd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ud
}, Symbol.toStringTag, { value: "Module" }));
var on, At = Ni;
if (process.env.NODE_ENV === "production")
  on = At.createRoot, At.hydrateRoot;
else {
  var Fo = At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  on = function(t, e) {
    Fo.usingClientEntryPoint = !0;
    try {
      return At.createRoot(t, e);
    } finally {
      Fo.usingClientEntryPoint = !1;
    }
  };
}
id({
  title: (t) => `${t} - Jemiyet`,
  resolve: (t) => {
    const e = /* @__PURE__ */ Object.assign({ "./Pages/Web/Groups/Index.tsx": cd, "./Pages/Web/Home.tsx": fd }), r = `./Pages/${t}.tsx`;
    return e[r] ? e[r] : (console.log("Available pages:", Object.keys(e)), console.log("Looking for:", r), e["./Pages/Web/Home.tsx"] || { default: () => /* @__PURE__ */ p.jsxs("div", { children: [
      "Page not found: ",
      t
    ] }) });
  },
  setup({ el: t, App: e, props: r }) {
    on(t).render(/* @__PURE__ */ p.jsx(e, { ...r }));
  },
  progress: {
    color: "#29d"
  }
});
