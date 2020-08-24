(function(window, document, location) {
    /* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/
    'use strict';
    var n, aa = {}, p = this || self;
    function ba(a, b, c) {
        a = a.split(".");
        c = c || p;
        a[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
            a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }
    function ca(a) {
        if (a && a != p)
            return la(a.document);
        null === oa && (oa = la(p.document));
        return oa
    }
    var pa = /^[\w+/_-]+[=]{0,2}$/
      , oa = null;
    function la(a) {
        return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && pa.test(a) ? a : ""
    }
    function sa() {}
    function ta(a) {
        a.ob = void 0;
        a.F = function() {
            return a.ob ? a.ob : a.ob = new a
        }
    }
    function ua(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    function va(a) {
        return Object.prototype.hasOwnProperty.call(a, wa) && a[wa] || (a[wa] = ++xa)
    }
    var wa = "closure_uid_" + (1E9 * Math.random() >>> 0)
      , xa = 0;
    function za(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function Aa(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    function Ba(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ba = za : Ba = Aa;
        return Ba.apply(null, arguments)
    }
    function Ca(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }
    var Ga = Date.now;
    function Ha(a, b, c) {
        ba(a, b, c)
    }
    function v(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    }
    function Ia(a) {
        return a
    }
    ;function Ja(a) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, Ja);
        else {
            const b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    v(Ja, Error);
    Ja.prototype.name = "CustomError";
    var La;
    function Ma(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++)
            c += a[e] + (e < b.length ? b[e] : "%s");
        Ja.call(this, c + a[d])
    }
    v(Ma, Ja);
    Ma.prototype.name = "AssertionError";
    function Na(a, b) {
        if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    function Oa(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            e in d && b.call(void 0, d[e], e, a)
    }
    function Pa(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }
    function Qa(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++)
            f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }
    function Ra(a, b, c) {
        var d = c;
        Oa(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }
    function Sa(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return !0;
        return !1
    }
    function Ta(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return e;
        return -1
    }
    function Ua(a, b) {
        return 0 <= Na(a, b)
    }
    function Va(a, b) {
        b = Na(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }
    function Wa(a) {
        return Array.prototype.concat.apply([], arguments)
    }
    function Xa(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    function Ya(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            var e = typeof d;
            e = "object" != e ? e : d ? Array.isArray(d) ? "array" : e : "null";
            if ("array" == e || "object" == e && "number" == typeof d.length) {
                e = a.length || 0;
                var f = d.length || 0;
                a.length = e + f;
                for (var g = 0; g < f; g++)
                    a[e + g] = d[g]
            } else
                a.push(d)
        }
    }
    function $a(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }
    function ab(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (Array.isArray(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var f = ab.apply(null, $a(d, e, e + 8192)), g = 0; g < f.length; g++)
                        b.push(f[g]);
            else
                b.push(d)
        }
        return b
    }
    function bb(a, b) {
        b = b || Math.random;
        for (var c = a.length - 1; 0 < c; c--) {
            var d = Math.floor(b() * (c + 1))
              , e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    }
    ;function cb() {
        return !1
    }
    function db() {
        return !0
    }
    function eb(a) {
        const b = arguments
          , c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments))
                    return !1;
            return !0
        }
    }
    function fb(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }
    function gb(a) {
        let b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }
    function hb(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }
    function ib(a, b) {
        let c = 0;
        return function(d) {
            p.clearTimeout(c);
            const e = arguments;
            c = p.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }
    function mb(a, b) {
        function c() {
            e = p.setTimeout(d, 63);
            a.apply(b, g)
        }
        function d() {
            e = 0;
            f && (f = !1,
            c())
        }
        let e = 0
          , f = !1
          , g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    }
    ;function nb(a, b) {
        const c = {};
        for (const d in a)
            b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }
    function ob(a) {
        var b = pb;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }
    function qb(a, b) {
        return null !== a && b in a
    }
    function rb(a) {
        const b = {};
        for (const c in a)
            b[c] = a[c];
        return b
    }
    var sb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function tb(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (let f = 0; f < sb.length; f++)
                c = sb[f],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }
    ;var vb = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var wb;
    function xb() {
        if (void 0 === wb) {
            var a = null
              , b = p.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Ia,
                        createScript: Ia,
                        createScriptURL: Ia
                    })
                } catch (c) {
                    p.console && p.console.error(c.message)
                }
                wb = a
            } else
                wb = a
        }
        return wb
    }
    ;function yb(a, b) {
        this.l = a === zb && b || "";
        this.m = Ab
    }
    yb.prototype.aa = !0;
    yb.prototype.j = function() {
        return this.l
    }
    ;
    function Bb(a) {
        return a instanceof yb && a.constructor === yb && a.m === Ab ? a.l : "type_error:Const"
    }
    var Ab = {}
      , zb = {};
    var Db = class {
        constructor(a, b) {
            this.m = b === Cb ? a : ""
        }
    }
    ;
    Db.prototype.aa = !0;
    Db.prototype.j = function() {
        return this.m.toString()
    }
    ;
    Db.prototype.nb = !0;
    Db.prototype.l = function() {
        return 1
    }
    ;
    function Ib(a) {
        return a instanceof Db && a.constructor === Db ? a.m : "type_error:TrustedResourceUrl"
    }
    function Jb(a, b) {
        var c = Bb(a);
        if (!Kb.test(c))
            throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(Lb, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e))
                throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof yb ? Bb(d) : encodeURIComponent(String(d))
        });
        return Mb(a)
    }
    var Lb = /%{(\w+)}/g
      , Kb = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i
      , Cb = {};
    function Mb(a) {
        const b = xb();
        a = b ? b.createScriptURL(a) : a;
        return new Db(a,Cb)
    }
    ;function Nb(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    function Ob(a, b) {
        if (b)
            a = a.replace(Pb, "&amp;").replace(Qb, "&lt;").replace(Rb, "&gt;").replace(Sb, "&quot;").replace(Tb, "&#39;").replace(Ub, "&#0;");
        else {
            if (!Vb.test(a))
                return a;
            -1 != a.indexOf("&") && (a = a.replace(Pb, "&amp;"));
            -1 != a.indexOf("<") && (a = a.replace(Qb, "&lt;"));
            -1 != a.indexOf(">") && (a = a.replace(Rb, "&gt;"));
            -1 != a.indexOf('"') && (a = a.replace(Sb, "&quot;"));
            -1 != a.indexOf("'") && (a = a.replace(Tb, "&#39;"));
            -1 != a.indexOf("\x00") && (a = a.replace(Ub, "&#0;"))
        }
        return a
    }
    var Pb = /&/g
      , Qb = /</g
      , Rb = />/g
      , Sb = /"/g
      , Tb = /'/g
      , Ub = /\x00/g
      , Vb = /[\x00&<>"']/;
    function Zb(a, b) {
        let c = 0;
        a = Nb(String(a)).split(".");
        b = Nb(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; 0 == c && g < d; g++) {
            var e = a[g] || ""
              , f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (0 == e[0].length && 0 == f[0].length)
                    break;
                c = $b(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || $b(0 == e[2].length, 0 == f[2].length) || $b(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (0 == c)
        }
        return c
    }
    function $b(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    ;var ec = class {
        constructor(a, b) {
            this.m = b === ac ? a : ""
        }
    }
    ;
    ec.prototype.aa = !0;
    ec.prototype.j = function() {
        return this.m.toString()
    }
    ;
    ec.prototype.nb = !0;
    ec.prototype.l = function() {
        return 1
    }
    ;
    function fc(a) {
        return a instanceof ec && a.constructor === ec ? a.m : "type_error:SafeUrl"
    }
    var gc = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i
      , hc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
    function ic(a) {
        a = String(a);
        a = a.replace(/(%0A|%0D)/g, "");
        var b = a.match(hc);
        return b && gc.test(b[1]) ? new ec(a,ac) : null
    }
    var jc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    function kc(a) {
        if (a instanceof ec)
            return a;
        a = "object" == typeof a && a.aa ? a.j() : String(a);
        return jc.test(a) ? new ec(a,ac) : ic(a)
    }
    function lc(a, b) {
        if (a instanceof ec)
            return a;
        a = "object" == typeof a && a.aa ? a.j() : String(a);
        if (b && /^data:/i.test(a) && (b = ic(a) || mc,
        b.j() == a))
            return b;
        jc.test(a) || (a = "about:invalid#zClosurez");
        return new ec(a,ac)
    }
    var ac = {}
      , mc = new ec("about:invalid#zClosurez",ac);
    var oc = class {
        constructor(a, b) {
            this.l = b === nc ? a : ""
        }
    }
    ;
    oc.prototype.aa = !0;
    oc.prototype.j = function() {
        return this.l
    }
    ;
    var nc = {}
      , pc = new oc("",nc);
    function qc(a) {
        if (a instanceof ec)
            return 'url("' + fc(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof yb)
            a = Bb(a);
        else {
            a = String(a);
            var b = a.replace(rc, "$1").replace(rc, "$1").replace(zc, "url");
            if (Ac.test(b)) {
                if (b = !Fc.test(a)) {
                    for (var c = b = !0, d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && Gc(a)
                }
                a = b ? Hc(a) : "zClosurez"
            } else
                a = "zClosurez"
        }
        if (/[{;}]/.test(a))
            throw new Ma("Value does not allow [{;}], got: %s.",[a]);
        return a
    }
    function Gc(a) {
        for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if ("]" == e) {
                if (b)
                    return !1;
                b = !0
            } else if ("[" == e) {
                if (!b)
                    return !1;
                b = !1
            } else if (!b && !c.test(e))
                return !1
        }
        return b
    }
    var Ac = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/
      , zc = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g
      , rc = /\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g
      , Fc = /\/\*/;
    function Hc(a) {
        return a.replace(zc, function(b, c, d, e) {
            var f = "";
            d = d.replace(/^(['"])(.*)\1$/, function(g, h, k) {
                f = h;
                return k
            });
            b = (kc(d) || mc).j();
            return c + f + b + f + e
        })
    }
    ;var Ic;
    a: {
        var Jc = p.navigator;
        if (Jc) {
            var Kc = Jc.userAgent;
            if (Kc) {
                Ic = Kc;
                break a
            }
        }
        Ic = ""
    }
    function y(a) {
        return -1 != Ic.indexOf(a)
    }
    function Lc(a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a); )
            c.push([d[1], d[2], d[3] || void 0]);
        return c
    }
    ;function Mc() {
        return y("Opera")
    }
    function Nc() {
        return y("Trident") || y("MSIE")
    }
    function Oc() {
        return y("Firefox") || y("FxiOS")
    }
    function Pc() {
        return y("Safari") && !(Qc() || y("Coast") || Mc() || y("Edge") || y("Edg/") || y("OPR") || Oc() || y("Silk") || y("Android"))
    }
    function Qc() {
        return (y("Chrome") || y("CriOS")) && !y("Edge")
    }
    function Rc() {
        function a(e) {
            var f = Ta(e, d);
            return c[0 > f ? null : "string" === typeof e ? e.charAt(f) : e[f]] || ""
        }
        var b = Ic;
        if (Nc())
            return Sc(b);
        b = Lc(b);
        var c = {};
        Oa(b, function(e) {
            c[e[0]] = e[1]
        });
        var d = Ca(qb, c);
        return Mc() ? a(["Version", "Opera"]) : y("Edge") ? a(["Edge"]) : y("Edg/") ? a(["Edg"]) : Qc() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (b = b[2]) && b[1] || ""
    }
    function Sc(a) {
        var b = /rv: *([\d\.]*)/.exec(a);
        if (b && b[1])
            return b[1];
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])
            if (a = /Trident\/(\d.\d)/.exec(a),
            "7.0" == c[1])
                if (a && a[1])
                    switch (a[1]) {
                    case "4.0":
                        b = "8.0";
                        break;
                    case "5.0":
                        b = "9.0";
                        break;
                    case "6.0":
                        b = "10.0";
                        break;
                    case "7.0":
                        b = "11.0"
                    }
                else
                    b = "7.0";
            else
                b = c[1];
        return b
    }
    ;var Uc = class {
        constructor(a, b, c) {
            this.m = c === Tc ? a : "";
            this.o = b
        }
    }
    ;
    Uc.prototype.nb = !0;
    Uc.prototype.l = function() {
        return this.o
    }
    ;
    Uc.prototype.aa = !0;
    Uc.prototype.j = function() {
        return this.m.toString()
    }
    ;
    function Vc(a) {
        return a instanceof Uc && a.constructor === Uc ? a.m : "type_error:SafeHtml"
    }
    function Wc(a) {
        if (a instanceof Uc)
            return a;
        var b = "object" == typeof a
          , c = null;
        b && a.nb && (c = a.l());
        return Xc(Ob(b && a.aa ? a.j() : String(a)), c)
    }
    var Yc = /^[a-zA-Z0-9-]+$/
      , Zc = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    }
      , $c = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };
    function ad(a) {
        function b(f) {
            Array.isArray(f) ? Oa(f, b) : (f = Wc(f),
            e.push(Vc(f).toString()),
            f = f.l(),
            0 == d ? d = f : 0 != f && d != f && (d = null))
        }
        var c = Wc(bd)
          , d = c.l()
          , e = [];
        Oa(a, b);
        return Xc(e.join(Vc(c).toString()), d)
    }
    function cd(a) {
        return ad(Array.prototype.slice.call(arguments))
    }
    var Tc = {};
    function Xc(a, b) {
        const c = xb();
        a = c ? c.createHTML(a) : a;
        return new Uc(a,b,Tc)
    }
    var dd = Xc("<!DOCTYPE html>", 0)
      , bd = new Uc(p.trustedTypes && p.trustedTypes.emptyHTML || "",0,Tc);
    var ed = gb(function() {
        var a = document.createElement("div")
          , b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = Vc(bd);
        return !b.parentElement
    });
    function md(a, b) {
        if (ed())
            for (; a.lastChild; )
                a.removeChild(a.lastChild);
        a.innerHTML = Vc(b)
    }
    function nd(a, b) {
        b = b instanceof ec ? b : lc(b, /^data:image\//i.test(b));
        a.src = fc(b)
    }
    function td(a, b) {
        a.src = Ib(b);
        (b = ca(a.ownerDocument && a.ownerDocument.defaultView)) && a.setAttribute("nonce", b)
    }
    ;function ud(a) {
        return a = Ob(a, void 0)
    }
    function vd(a, b) {
        var c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        var d = b ? b.createElement("div") : p.document.createElement("div");
        return a.replace(wd, function(e, f) {
            var g = c[e];
            if (g)
                return g;
            "#" == f.charAt(0) && (f = Number("0" + f.substr(1)),
            isNaN(f) || (g = String.fromCharCode(f)));
            g || (g = Xc(e + " ", null),
            md(d, g),
            g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var wd = /&([^;\s<&]+);?/g
      , xd = {
        "\x00": "\\0",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\x0B",
        '"': '\\"',
        "\\": "\\\\",
        "<": "\\u003C"
    }
      , yd = {
        "'": "\\'"
    };
    function zd(a) {
        for (var b = 0, c = 0; c < a.length; ++c)
            b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }
    function Ad(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }
    function Bd(a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
            return c + d.toUpperCase()
        })
    }
    ;function Cd(a) {
        Cd[" "](a);
        return a
    }
    Cd[" "] = sa;
    function Dd(a, b) {
        try {
            return Cd(a[b]),
            !0
        } catch (c) {}
        return !1
    }
    function Ed(a, b) {
        var c = Fd;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    }
    ;var Gd = Mc()
      , Hd = Nc()
      , Id = y("Edge")
      , Jd = Id || Hd
      , Kd = y("Gecko") && !(-1 != Ic.toLowerCase().indexOf("webkit") && !y("Edge")) && !(y("Trident") || y("MSIE")) && !y("Edge")
      , Ld = -1 != Ic.toLowerCase().indexOf("webkit") && !y("Edge");
    function Md() {
        var a = p.document;
        return a ? a.documentMode : void 0
    }
    var Nd;
    a: {
        var Od = ""
          , Pd = function() {
            var a = Ic;
            if (Kd)
                return /rv:([^\);]+)(\)|;)/.exec(a);
            if (Id)
                return /Edge\/([\d\.]+)/.exec(a);
            if (Hd)
                return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (Ld)
                return /WebKit\/(\S+)/.exec(a);
            if (Gd)
                return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
        Pd && (Od = Pd ? Pd[1] : "");
        if (Hd) {
            var Qd = Md();
            if (null != Qd && Qd > parseFloat(Od)) {
                Nd = String(Qd);
                break a
            }
        }
        Nd = Od
    }
    var Rd = Nd
      , Fd = {};
    function Sd(a) {
        return Ed(a, function() {
            return 0 <= Zb(Rd, a)
        })
    }
    var Td;
    if (p.document && Hd) {
        var Ud = Md();
        Td = Ud ? Ud : parseInt(Rd, 10) || void 0
    } else
        Td = void 0;
    var Vd = Td;
    var Wd = {}
      , Xd = null;
    function Yd(a, b) {
        void 0 === b && (b = 0);
        if (!Xd) {
            Xd = {};
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                Wd[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === Xd[h] && (Xd[h] = g)
                }
            }
        }
        b = Wd[b];
        c = [];
        for (d = 0; d < a.length; d += 3) {
            var k = a[d]
              , l = (e = d + 1 < a.length) ? a[d + 1] : 0;
            h = (f = d + 2 < a.length) ? a[d + 2] : 0;
            g = k >> 2;
            k = (k & 3) << 4 | l >> 4;
            l = (l & 15) << 2 | h >> 6;
            h &= 63;
            f || (h = 64,
            e || (l = 64));
            c.push(b[g], b[k], b[l] || "", b[h] || "")
        }
        return c.join("")
    }
    function Zd(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255,
            e >>= 8);
            b[c++] = e
        }
        return Yd(b, 3)
    }
    ;function z() {}
    var $d = "function" == typeof Uint8Array;
    function B(a, b, c, d) {
        a.j = null;
        b || (b = []);
        a.D = void 0;
        a.o = -1;
        a.L = b;
        a: {
            if (b = a.L.length) {
                --b;
                var e = a.L[b];
                if (!(null === e || "object" != typeof e || Array.isArray(e) || $d && e instanceof Uint8Array)) {
                    a.v = b - a.o;
                    a.m = e;
                    break a
                }
            }
            a.v = Number.MAX_VALUE
        }
        a.C = {};
        if (c)
            for (b = 0; b < c.length; b++)
                e = c[b],
                e < a.v ? (e += a.o,
                a.L[e] = a.L[e] || ae) : (be(a),
                a.m[e] = a.m[e] || ae);
        if (d && d.length)
            for (b = 0; b < d.length; b++) {
                e = c = void 0;
                for (var f = a, g = d[b], h = 0; h < g.length; h++) {
                    var k = g[h]
                      , l = D(f, k);
                    null != l && (e = k,
                    c = l,
                    I(f, k, void 0))
                }
                e && I(f, e, c)
            }
    }
    var ae = [];
    function be(a) {
        var b = a.v + a.o;
        a.L[b] || (a.m = a.L[b] = {})
    }
    function D(a, b) {
        if (b < a.v) {
            b += a.o;
            var c = a.L[b];
            return c === ae ? a.L[b] = [] : c
        }
        if (a.m)
            return c = a.m[b],
            c === ae ? a.m[b] = [] : c
    }
    function ce(a, b) {
        a = D(a, b);
        return null == a ? a : +a
    }
    function de(a, b) {
        a = D(a, b);
        return null == a ? a : !!a
    }
    function ee(a, b) {
        a = de(a, b);
        return null == a ? !1 : a
    }
    function I(a, b, c) {
        b < a.v ? a.L[b + a.o] = c : (be(a),
        a.m[b] = c);
        return a
    }
    function fe(a, b, c, d) {
        c !== d ? I(a, b, c) : b < a.v ? a.L[b + a.o] = null : (be(a),
        delete a.m[b]);
        return a
    }
    function J(a, b, c) {
        a.j || (a.j = {});
        if (!a.j[c]) {
            var d = D(a, c);
            d && (a.j[c] = new b(d))
        }
        return a.j[c]
    }
    function L(a, b, c) {
        a.j || (a.j = {});
        if (!a.j[c]) {
            for (var d = D(a, c), e = [], f = 0; f < d.length; f++)
                e[f] = new b(d[f]);
            a.j[c] = e
        }
        b = a.j[c];
        b == ae && (b = a.j[c] = []);
        return b
    }
    function ge(a, b, c) {
        a.j || (a.j = {});
        var d = c ? c.L : c;
        a.j[b] = c;
        return I(a, b, d)
    }
    function me(a, b) {
        a.j || (a.j = {});
        b = b || [];
        for (var c = [], d = 0; d < b.length; d++)
            c[d] = b[d].L;
        a.j[5] = b;
        I(a, 5, c)
    }
    z.prototype.A = $d ? function() {
        var a = Uint8Array.prototype.toJSON;
        Uint8Array.prototype.toJSON = function() {
            return Yd(this)
        }
        ;
        try {
            return JSON.stringify(this.L && this.L, ne)
        } finally {
            Uint8Array.prototype.toJSON = a
        }
    }
    : function() {
        return JSON.stringify(this.L && this.L, ne)
    }
    ;
    function ne(a, b) {
        return "number" !== typeof b || !isNaN(b) && Infinity !== b && -Infinity !== b ? b : String(b)
    }
    function oe(a, b) {
        return new a(b ? JSON.parse(b) : null)
    }
    z.prototype.clone = function() {
        return new this.constructor(pe(this.L))
    }
    ;
    function pe(a) {
        if (Array.isArray(a)) {
            for (var b = Array(a.length), c = 0; c < a.length; c++) {
                var d = a[c];
                null != d && (b[c] = "object" == typeof d ? pe(d) : d)
            }
            return b
        }
        if ($d && a instanceof Uint8Array)
            return new Uint8Array(a);
        b = {};
        for (c in a)
            d = a[c],
            null != d && (b[c] = "object" == typeof d ? pe(d) : d);
        return b
    }
    ;function qe(a, b) {
        var c = void 0;
        return new (c || (c = Promise))(function(d, e) {
            function f(k) {
                try {
                    h(b.next(k))
                } catch (l) {
                    e(l)
                }
            }
            function g(k) {
                try {
                    h(b["throw"](k))
                } catch (l) {
                    e(l)
                }
            }
            function h(k) {
                k.done ? d(k.value) : (new c(function(l) {
                    l(k.value)
                }
                )).then(f, g)
            }
            h((b = b.apply(a, void 0)).next())
        }
        )
    }
    ;var ye = new yb(zb,"https://tpc.googlesyndication.com/sodar/%{basename}.js");
    var ze = {
        passive: !0
    }
      , Ae = gb(function() {
        let a = !1;
        try {
            const b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            p.addEventListener("test", null, b)
        } catch (b) {}
        return a
    });
    function Be(a) {
        return a ? a.passive && Ae() ? a : a.capture || !1 : !1
    }
    function Ce(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Be(d)),
        !0) : !1
    }
    function De(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, Be(d)),
        !0) : !1
    }
    ;function Ee(a) {
        var b = window;
        new Promise((c,d)=>{
            function e() {
                f.onload = null;
                f.onerror = null;
                b.document.body.removeChild(f)
            }
            const f = b.document.createElement("script");
            f.onload = ()=>{
                e();
                c()
            }
            ;
            f.onerror = ()=>{
                e();
                d(void 0)
            }
            ;
            f.type = "text/javascript";
            td(f, a);
            "complete" !== b.document.readyState ? Ce(b, "load", ()=>{
                b.document.body.appendChild(f)
            }
            ) : b.document.body.appendChild(f)
        }
        )
    }
    ;function Fe(a) {
        return qe(this, function*() {
            var b = "https://pagead2.googlesyndication.com/getconfig/sodar" + `?sv=${200}&tid=${a.j}` + `&tv=${a.l}&st=` + `${a.qa}`;
            let c = void 0;
            try {
                c = yield Ge(b)
            } catch (d) {}
            if (c && (b = a.Aa || c.sodar_query_id) && c.bg_hash_basename && c.bg_binary)
                return {
                    context: a.m,
                    Rc: c.bg_hash_basename,
                    Qc: c.bg_binary,
                    dd: a.j + "_" + a.l,
                    Aa: b,
                    qa: a.qa
                }
        })
    }
    let Ge = a=>new Promise((b,c)=>{
        const d = new XMLHttpRequest;
        d.onreadystatechange = ()=>{
            d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
        }
        ;
        d.open("GET", a, !0);
        d.send()
    }
    );
    function He(a) {
        qe(this, function*() {
            const b = yield Fe(a);
            if (b) {
                var c = window
                  , d = c.GoogleGcLKhOms;
                d && "function" === typeof d.push || (d = c.GoogleGcLKhOms = []);
                d.push({
                    ["_ctx_"]: b.context,
                    ["_bgv_"]: b.Rc,
                    ["_bgp_"]: b.Qc,
                    ["_li_"]: b.dd,
                    ["_jk_"]: b.Aa,
                    ["_st_"]: b.qa
                });
                if (d = c.GoogleDX5YKUSk)
                    c.GoogleDX5YKUSk = void 0,
                    d[1]();
                c = Jb(ye, {
                    basename: "sodar2"
                });
                Ee(c)
            }
            return b
        })
    }
    ;var Ie = class {
        constructor(a) {
            this.j = a.j;
            this.l = a.l;
            this.m = a.m;
            this.Aa = a.Aa;
            this.win = a.K();
            this.qa = a.qa
        }
    }
      , Je = class {
        constructor(a, b, c) {
            this.j = a;
            this.l = b;
            this.m = c;
            this.win = window;
            this.qa = "env"
        }
        K() {
            return this.win
        }
    }
    ;
    function Ke(a) {
        B(this, a, Le, null)
    }
    v(Ke, z);
    var Le = [2, 3];
    function Me(a) {
        B(this, a, null, null)
    }
    v(Me, z);
    const Ne = {
        Ed: "google_adtest",
        Id: "google_ad_client",
        Jd: "google_ad_format",
        Ld: "google_ad_height",
        Yd: "google_ad_width",
        Pd: "google_ad_layout",
        Qd: "google_ad_layout_key",
        Rd: "google_ad_output",
        Sd: "google_ad_region",
        Vd: "google_ad_slot",
        Wd: "google_ad_type",
        Xd: "google_ad_url",
        Zd: "google_allow_expandable_ads",
        ne: "google_analytics_domain_name",
        pe: "google_analytics_uacct",
        Ee: "google_container_id",
        Oe: "google_gl",
        jf: "google_enable_ose",
        uf: "google_full_width_responsive",
        hg: "google_rl_filtering",
        gg: "google_rl_mode",
        ig: "google_rt",
        fg: "google_rl_dest_url",
        Qf: "google_max_radlink_len",
        Vf: "google_num_radlinks",
        Wf: "google_num_radlinks_per_unit",
        Hd: "google_ad_channel",
        Pf: "google_max_num_ads",
        Rf: "google_max_responsive_height",
        ze: "google_color_border",
        hf: "google_enable_content_recommendations",
        Le: "google_content_recommendation_ui_type",
        Ke: "google_source_type",
        Je: "google_content_recommendation_rows_num",
        Ie: "google_content_recommendation_columns_num",
        He: "google_content_recommendation_ad_positions",
        Me: "google_content_recommendation_use_square_imgs",
        Be: "google_color_link",
        Ae: "google_color_line",
        De: "google_color_url",
        Fd: "google_ad_block",
        Ud: "google_ad_section",
        Gd: "google_ad_callback",
        we: "google_captcha_token",
        Ce: "google_color_text",
        le: "google_alternate_ad_url",
        Od: "google_ad_host_tier_id",
        xe: "google_city",
        Md: "google_ad_host",
        Nd: "google_ad_host_channel",
        me: "google_alternate_color",
        ye: "google_color_bg",
        lf: "google_encoding",
        rf: "google_font_face",
        Re: "google_cust_ch",
        Ue: "google_cust_job",
        Te: "google_cust_interests",
        Se: "google_cust_id",
        Ve: "google_cust_u_url",
        Af: "google_hints",
        Cf: "google_image_size",
        ce: "google_scs",
        bg: "google_core_dbp",
        Sf: "google_mtl",
        Mg: "google_cpm",
        Ge: "google_contents",
        Uf: "google_native_settings_key",
        Tg: "google_video_url_to_fetch",
        Ne: "google_country",
        Eg: "google_targeting",
        tf: "google_font_size",
        Ye: "google_disable_video_autoplay",
        Sg: "google_video_product_type",
        Rg: "google_video_doc_id",
        Xf: "google_only_pyv_ads",
        Lf: "google_lact",
        Qg: "google_cust_gender",
        Vg: "google_yt_up",
        Ug: "google_yt_pt",
        Ag: "google_cust_lh",
        zg: "google_cust_l",
        Lg: "google_tfs",
        Tf: "google_native_ad_template",
        If: "google_kw",
        Bg: "google_tag_for_child_directed_treatment",
        Cg: "google_tag_for_under_age_of_consent",
        kg: "google_region",
        Qe: "google_cust_criteria",
        Td: "google_safe",
        Pe: "google_ctr_threshold",
        mg: "google_resizing_allowed",
        og: "google_resizing_width",
        ng: "google_resizing_height",
        Pg: "google_cust_age",
        LANGUAGE: "google_language",
        Jf: "google_kw_type",
        cg: "google_pucrd",
        ag: "google_page_url",
        Dg: "google_tag_partner",
        kf: "google_enable_single_iframe",
        sg: "google_restrict_data_processing",
        Dd: "google_adbreak_test",
        Kd: "google_ad_frequency_hint"
    };
    var Oe = a=>{
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }
      , Pe = a=>{
        a = Oe(a);
        a.eids || (a.eids = []);
        return a.eids
    }
      , Qe = (a,b)=>{
        a = Oe(a);
        a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
        const c = !a.processed_sra_frame_pingbacks[b];
        a.processed_sra_frame_pingbacks[b] = !0;
        return c
    }
    ;
    var pb = {
        jg: 0,
        mf: 1,
        nf: 2,
        vf: 8,
        vg: 9,
        Nf: 10,
        Of: 11,
        rg: 16,
        Xe: 17,
        We: 24,
        Kf: 25,
        re: 26,
        qe: 27,
        sc: 30,
        Ef: 32,
        Gf: 40
    };
    var Re = {
        se: "google_ads_preview",
        Ze: "google_mc_lab",
        qf: "google_anchor_debug",
        pf: "google_bottom_anchor_debug",
        rc: "google_ia_debug",
        Df: "google_scr_debug",
        Ff: "google_ia_debug_allow_onclick",
        $f: "googleads",
        sc: "google_pedestal_debug",
        lg: "google_resize_debug",
        wg: "google_shoppable_images_debug",
        xg: "google_shoppable_images_cookie",
        yg: "google_shoppable_images_forced",
        uc: "google_responsive_slot_debug",
        qg: "google_responsive_slot_preview",
        pg: "google_responsive_dummy_ad"
    }
      , Se = {
        ["google_bottom_anchor_debug"]: 1,
        ["google_anchor_debug"]: 2,
        ["google_ia_debug"]: 8,
        ["google_resize_debug"]: 16,
        ["google_scr_debug"]: 9,
        ["googleads"]: 2,
        ["google_pedestal_debug"]: 30
    };
    var Te = {
        rc: 1,
        ve: 2,
        Og: 3,
        ug: 4,
        uc: 6
    };
    var Ue = document
      , M = window;
    function Ve(a) {
        B(this, a, null, null)
    }
    v(Ve, z);
    Ve.prototype.getSeconds = function() {
        var a = D(this, 1);
        return null == a ? 0 : a
    }
    ;
    Ve.prototype.setSeconds = function(a) {
        return fe(this, 1, a, 0)
    }
    ;
    function We(a) {
        B(this, a, null, null)
    }
    v(We, z);
    function Xe(a) {
        B(this, a, null, null)
    }
    v(Xe, z);
    function Ye(a) {
        B(this, a, null, null)
    }
    v(Ye, z);
    function Ze(a) {
        this.j = a || {
            cookie: ""
        }
    }
    Ze.prototype.set = function(a, b, c) {
        var d = !1;
        let e;
        if ("object" === typeof c) {
            e = c.ah;
            d = c.xd || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Yb
        }
        if (/[;=\s]/.test(a))
            throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b))
            throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        c = f ? ";domain=" + f : "";
        g = g ? ";path=" + g : "";
        d = d ? ";secure" : "";
        h = 0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(Ga() + 1E3 * h)).toUTCString();
        this.j.cookie = a + "=" + b + c + g + h + d + (null != e ? ";samesite=" + e : "")
    }
    ;
    Ze.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Nb(d[e]);
            if (0 == f.lastIndexOf(c, 0))
                return f.substr(c.length);
            if (f == a)
                return ""
        }
        return b
    }
    ;
    const $e = a=>{
        a = (a = (new Ze(a)).get("FCCDCF", "")) ? a : null;
        try {
            return a ? oe(We, a) : null
        } catch (b) {
            return null
        }
    }
      , af = a=>(a = (new Ze(a)).get("DATA_USE_CONSENT", "")) ? a : null;
    var bf = a=>{
        var b = $e(a);
        if (!b)
            return af(a);
        b = J(b, Xe, 3);
        if (!b || null == D(b, 1))
            return af(a);
        a = D(b, 2);
        const c = Date.now();
        if (a) {
            if (c < a || c > a + 33696E6)
                return null
        } else
            return null;
        return D(b, 1)
    }
    ;
    function cf(a) {
        B(this, a, df, null)
    }
    v(cf, z);
    var df = [1, 2, 3, 4];
    var ef = Hd && !Sd("9");
    function ff(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }
    function gf(a) {
        return Ra(arguments, function(b, c) {
            return b + c
        }, 0)
    }
    function hf(a) {
        return gf.apply(null, arguments) / arguments.length
    }
    ;function jf(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    n = jf.prototype;
    n.clone = function() {
        return new jf(this.x,this.y)
    }
    ;
    n.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    n.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    n.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    n.translate = function(a, b) {
        a instanceof jf ? (this.x += a.x,
        this.y += a.y) : (this.x += Number(a),
        "number" === typeof b && (this.y += b));
        return this
    }
    ;
    n.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    }
    ;
    function kf(a, b) {
        this.width = a;
        this.height = b
    }
    n = kf.prototype;
    n.clone = function() {
        return new kf(this.width,this.height)
    }
    ;
    n.aspectRatio = function() {
        return this.width / this.height
    }
    ;
    n.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    n.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    n.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    n.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    }
    ;
    function lf(a) {
        return a ? new mf(nf(a)) : La || (La = new mf)
    }
    function of(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new kf(a.clientWidth,a.clientHeight)
    }
    function pf(a) {
        var b = a.scrollingElement ? a.scrollingElement : Ld || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return Hd && Sd("10") && a.pageYOffset != b.scrollTop ? new jf(b.scrollLeft,b.scrollTop) : new jf(a.pageXOffset || b.scrollLeft,a.pageYOffset || b.scrollTop)
    }
    function qf(a) {
        return a ? a.parentWindow || a.defaultView : window
    }
    function rf(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }
    function sf(a) {
        var b, c = arguments.length;
        if (!c)
            return null;
        if (1 == c)
            return arguments[0];
        var d = []
          , e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g; )
                f.unshift(g),
                g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b])
                    return f;
            f = g
        }
        return f
    }
    function nf(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    var tf = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    }
      , uf = {
        IMG: " ",
        BR: "\n"
    };
    function vf(a) {
        if (ef && null !== a && "innerText"in a)
            a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var b = [];
            wf(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        ef || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }
    function wf(a, b, c) {
        if (!(a.nodeName in tf))
            if (3 == a.nodeType)
                c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in uf)
                b.push(uf[a.nodeName]);
            else
                for (a = a.firstChild; a; )
                    wf(a, b, c),
                    a = a.nextSibling
    }
    function xf(a, b, c, d) {
        if (!b && !c)
            return null;
        var e = b ? String(b).toUpperCase() : null;
        return yf(a, function(f) {
            return (!e || f.nodeName == e) && (!c || "string" === typeof f.className && Ua(f.className.split(/\s+/), c))
        }, d)
    }
    function yf(a, b, c) {
        for (var d = 0; a && (null == c || d <= c); ) {
            if (b(a))
                return a;
            a = a.parentNode;
            d++
        }
        return null
    }
    function mf(a) {
        this.j = a || p.document || document
    }
    function zf(a, b) {
        return rf(a.j, b)
    }
    mf.prototype.K = function() {
        var a = this.j;
        return a.parentWindow || a.defaultView
    }
    ;
    mf.prototype.contains = function(a, b) {
        if (!a || !b)
            return !1;
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }
    ;
    mf.prototype.l = sf;
    function Af(a) {
        Bf();
        return Mb(a)
    }
    var Bf = sa;
    function Cf() {
        return !(y("iPad") || y("Android") && !y("Mobile") || y("Silk")) && (y("iPod") || y("iPhone") || y("Android") || y("IEMobile"))
    }
    ;var Df = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    function Ef(a) {
        return a ? decodeURI(a) : a
    }
    ;function Ff(a) {
        try {
            return !!a && null != a.location.href && Dd(a, "foo")
        } catch (b) {
            return !1
        }
    }
    function Gf(a, b, c, d) {
        d = d || p;
        c && (d = Hf(d));
        for (c = 0; d && 40 > c++ && (!b && !Ff(d) || !a(d)); )
            d = Hf(d)
    }
    function If() {
        let a = p;
        Gf(b=>{
            a = b;
            return !1
        }
        );
        return a
    }
    function Hf(a) {
        try {
            const b = a.parent;
            if (b && b != a)
                return b
        } catch (b) {}
        return null
    }
    function Jf(a, b) {
        const c = a.createElement("script");
        td(c, "string" === typeof b ? Af(b) : b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }
    function Kf(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }
    function Lf(a, b) {
        if (!Tf()) {
            let c = Math.random();
            if (c < b)
                return c = Uf(p),
                a[Math.floor(c * a.length)]
        }
        return null
    }
    function Uf(a) {
        if (!a.crypto)
            return Math.random();
        try {
            const b = new Uint32Array(1);
            a.crypto.getRandomValues(b);
            return b[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }
    function Vf(a, b) {
        if (a)
            for (const c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }
    function Wf() {
        const a = [];
        Vf(Xf, function(b, c) {
            a.push(c)
        });
        return a
    }
    function Yf(a) {
        const b = [];
        Vf(a, function(c) {
            b.push(c)
        });
        return b
    }
    function Zf(a) {
        const b = a.length;
        if (0 == b)
            return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++)
            c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Tf = gb(()=>Sa(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], $f) || 1E-4 > Math.random());
    const $f = a=>-1 != Ic.indexOf(a);
    var ag = /^([0-9.]+)px$/
      , ng = /^(-?[0-9.]{1,30})$/;
    function og(a) {
        return ng.test(a) && (a = Number(a),
        !isNaN(a)) ? a : null
    }
    function pg(a) {
        return /^true$/.test(a)
    }
    function qg(a) {
        return (a = ag.exec(a)) ? +a[1] : null
    }
    function rg() {
        var a = p.document.URL;
        if (!a)
            return "";
        const b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
        try {
            const c = b.exec(decodeURIComponent(a));
            if (c)
                return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (c) {}
        return ""
    }
    var sg = {
        $d: "allow-forms",
        ae: "allow-modals",
        be: "allow-orientation-lock",
        de: "allow-pointer-lock",
        ee: "allow-popups",
        fe: "allow-popups-to-escape-sandbox",
        ge: "allow-presentation",
        he: "allow-same-origin",
        ie: "allow-scripts",
        je: "allow-top-navigation",
        ke: "allow-top-navigation-by-user-activation"
    };
    const tg = gb(()=>Yf(sg));
    function ug(a) {
        const b = tg();
        return a.length ? Pa(b, c=>!Ua(a, c)) : b
    }
    function vg() {
        const a = rf(document, "IFRAME")
          , b = {};
        Oa(tg(), c=>{
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        }
        );
        return b
    }
    var wg = (a,b)=>{
        try {
            return !(!a.frames || !a.frames[b])
        } catch (c) {
            return !1
        }
    }
      , xg = (a,b)=>{
        for (let c = 0; 50 > c; ++c) {
            if (wg(a, b))
                return a;
            if (!(a = Hf(a)))
                break
        }
        return null
    }
      , Cg = (a,b)=>{
        a.style.setProperty ? Vf(b, (c,d)=>{
            a.style.setProperty(d, c, "important")
        }
        ) : a.style.cssText = yg(zg(Ag(a.style.cssText), Bg(b, c=>c + " !important")))
    }
      , zg = Object.assign || function(a, b) {
        for (let c = 1; c < arguments.length; c++) {
            const d = arguments[c];
            if (d)
                for (let e in d)
                    Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    }
      , Bg = (a,b)=>{
        const c = {};
        for (let d in a)
            Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
        return c
    }
      , yg = a=>{
        const b = [];
        Vf(a, (c,d)=>{
            null != c && "" !== c && b.push(d + ":" + c)
        }
        );
        return b.length ? b.join(";") + ";" : ""
    }
      , Ag = a=>{
        const b = {};
        if (a) {
            const c = /\s*:\s*/;
            Oa((a || "").split(/\s*;\s*/), d=>{
                if (d) {
                    var e = d.split(c);
                    d = e[0];
                    e = e[1];
                    d && e && (b[d.toLowerCase()] = e)
                }
            }
            )
        }
        return b
    }
      , Dg = {
        "http://googleads.g.doubleclick.net": !0,
        "http://pagead2.googlesyndication.com": !0,
        "https://googleads.g.doubleclick.net": !0,
        "https://pagead2.googlesyndication.com": !0
    }
      , Eg = /\.proxy\.googleprod\.com(:\d+)?$/
      , Fg = (a,b=!1)=>!!Dg[a] || b && Eg.test(a)
      , Gg = (a,b)=>{
        b = Ta(a, b);
        if (0 <= b) {
            const c = a[b];
            Array.prototype.splice.call(a, b, 1);
            return c
        }
        return null
    }
      , Hg = a=>{
        if ("number" !== typeof a.goog_pvsid)
            try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: Math.floor(Math.random() * 2 ** 52)
                })
            } catch (b) {}
        return Number(a.goog_pvsid) || -1
    }
    ;
    function Ig(a, b, c, d=[]) {
        const e = new a.MutationObserver(f=>{
            for (const g of f)
                for (const h of g.removedNodes)
                    if (d && (h === b || sf(h, b))) {
                        for (const k of d)
                            k.disconnect();
                        d.length = 0;
                        c();
                        return
                    }
        }
        );
        d.push(e);
        e.observe(a.document.documentElement, {
            childList: !0,
            subtree: !0
        });
        Gf(f=>{
            if (!f.parent || !Ff(f.parent))
                return !1;
            const g = f.parent.document.getElementsByTagName("iframe");
            for (let l = 0; l < g.length; l++)
                try {
                    a: {
                        var h = g[l];
                        try {
                            var k = h.contentWindow || (h.contentDocument ? qf(h.contentDocument) : null);
                            break a
                        } catch (m) {}
                        k = null
                    }
                    if (k == f) {
                        Ig(f.parent, g[l], c, d);
                        break
                    }
                } catch (m) {}
            return !1
        }
        , !1, !1, a)
    }
    var Jg = (a,b)=>{
        Ig(qf(nf(a)), a, b)
    }
    ;
    var Xf = {
        Hf: 0,
        yf: 1,
        xf: 2,
        wf: 3,
        dg: 4,
        eg: 5,
        Bf: 6,
        zf: 7
    };
    var Kg = ()=>wg(p.top, "googlefcPresent");
    const Lg = a=>{
        var b = document;
        try {
            const d = bf(b);
            var c = d ? oe(cf, d) : null
        } catch (d) {
            c = null
        }
        if (!c)
            return 0;
        if (de(c, 7))
            return 4;
        if (a) {
            if (Ua(D(c, 3), a))
                return 2;
            if (Ua(D(c, 4), a))
                return 3
        }
        return 1
    }
    ;
    function Mg() {
        return wg(p.top, "GoogleSetNPA") || wg(If(), "GoogleSetNPA")
    }
    function Ng(a, b, c=!1) {
        switch (a) {
        case 2:
        case 4:
            return !1;
        case 3:
            return !0;
        case 1:
            return b;
        default:
            return c && b
        }
    }
    const Og = gb(()=>{
        const a = /[?&]fc(consent)?=alwaysshow([&#]|$)/;
        try {
            return a.test(p.top.location.href)
        } catch (b) {
            return a.test(p.location.href)
        }
    }
    );
    var Pg = (a,b,c)=>{
        for (var d = Wf().length, e = [], f = 0; f < d; f++)
            e[f] = 0;
        Og() && (a = !0);
        e[0] = a ? 1 : 2;
        c = void 0 !== c ? c : Mg();
        e[5] = c ? 1 : 2;
        e[4] = 2;
        d = !!p.googlefc || Kg();
        e[1] = d ? 1 : 2;
        f = Lg(b);
        0 != f ? b = {
            Rb: f,
            Tb: 3
        } : (f = p.top,
        b = wg(f, "googlefcInactive") ? 4 : b && wg(f, `googlefcPA-${b}`) ? 2 : wg(f, "googlefcNPA") ? 3 : 0,
        b = {
            Rb: b,
            Tb: 2
        });
        const {Rb: g, Tb: h} = b;
        e[h] = g;
        return {
            eh: g,
            ud: c || Ng(g, a, d),
            zd: 0 == g && a && d,
            Sb: e.join(".")
        }
    }
      , Qg = (a,b,c,d)=>{
        const e = Pg(a, b, d);
        e.zd ? p.setTimeout(()=>{
            Qg(a, b, c, d)
        }
        , 1E3) : c(e)
    }
    ;
    function Rg(a) {
        B(this, a, null, null)
    }
    v(Rg, z);
    class Sg {
        constructor(a, b, c, d) {
            this.j = a;
            this.pubWin = b;
            this.iframeWin = c;
            this.B = d || c || {};
            this.o = b.document.getElementById(this.B.google_async_iframe_id + "_anchor");
            this.H = b.document.getElementById(this.B.google_async_iframe_id + "_expand");
            this.v = -1;
            this.A = !1;
            this.D = "";
            this.l = 0;
            this.I = this.J = this.O = null;
            this.G = 0;
            this.C = null;
            this.U = 0;
            this.m = []
        }
    }
    ;var Tg = (a,b)=>{
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? b : a
    }
    ;
    var Ug = ()=>"r20200818"
      , Vg = pg("false")
      , Wg = pg("false")
      , Xg = pg("false")
      , Yg = pg("false")
      , Zg = pg("false")
      , $g = Tg("0.02", 0)
      , ah = Tg("0.0", 0);
    function bh() {
        this.O = this.O;
        this.U = this.U
    }
    bh.prototype.O = !1;
    bh.prototype.Qa = function() {
        this.O || (this.O = !0,
        this.l())
    }
    ;
    bh.prototype.l = function() {
        if (this.U)
            for (; this.U.length; )
                this.U.shift()()
    }
    ;
    function ch(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    n = ch.prototype;
    n.Ta = function() {
        return this.right - this.left
    }
    ;
    n.ga = function() {
        return this.bottom - this.top
    }
    ;
    n.clone = function() {
        return new ch(this.top,this.right,this.bottom,this.left)
    }
    ;
    n.contains = function(a) {
        return this && a ? a instanceof ch ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    }
    ;
    n.expand = function(a, b, c, d) {
        ua(a) ? (this.top -= a.top,
        this.right += a.right,
        this.bottom += a.bottom,
        this.left -= a.left) : (this.top -= a,
        this.right += Number(b),
        this.bottom += Number(c),
        this.left -= Number(d));
        return this
    }
    ;
    function dh(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    n.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    }
    ;
    n.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    }
    ;
    n.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    }
    ;
    n.translate = function(a, b) {
        a instanceof jf ? (this.left += a.x,
        this.right += a.x,
        this.top += a.y,
        this.bottom += a.y) : (this.left += a,
        this.right += a,
        "number" === typeof b && (this.top += b,
        this.bottom += b));
        return this
    }
    ;
    n.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    }
    ;
    function eh(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }
    n = eh.prototype;
    n.clone = function() {
        return new eh(this.left,this.top,this.width,this.height)
    }
    ;
    function fh(a, b) {
        var c = Math.max(a.left, b.left)
          , d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a)
                return new eh(c,e,d - c,a - e)
        }
        return null
    }
    function gh(a, b) {
        var c = fh(a, b);
        if (!c || !c.height || !c.width)
            return [a.clone()];
        c = [];
        var d = a.top
          , e = a.height
          , f = a.left + a.width
          , g = a.top + a.height
          , h = b.left + b.width
          , k = b.top + b.height;
        b.top > a.top && (c.push(new eh(a.left,a.top,a.width,b.top - a.top)),
        d = b.top,
        e -= b.top - a.top);
        k < g && (c.push(new eh(a.left,k,a.width,g - k)),
        e = k - d);
        b.left > a.left && c.push(new eh(a.left,d,b.left - a.left,e));
        h < f && c.push(new eh(h,d,f - h,e));
        return c
    }
    n.contains = function(a) {
        return a instanceof jf ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    }
    ;
    n.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    n.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    n.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    n.translate = function(a, b) {
        a instanceof jf ? (this.left += a.x,
        this.top += a.y) : (this.left += a,
        "number" === typeof b && (this.top += b));
        return this
    }
    ;
    n.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= b;
        this.height *= b;
        return this
    }
    ;
    const hh = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };
    function ih(a=p) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b)
            try {
                b = a.parent.context || a.parent.AMP_CONTEXT_DATA
            } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl)
                return b
        } catch (c) {}
        return null
    }
    function jh() {
        const a = ih();
        return a && a.initialIntersection
    }
    function kh() {
        const a = jh();
        return a && ua(a.rootBounds) ? new kf(a.rootBounds.width,a.rootBounds.height) : null
    }
    function lh(a) {
        return (a = a || ih()) ? Ff(a.master) ? a.master : null : null
    }
    function mh(a, b) {
        function c(g) {
            if (a.ampInaboxInitialized)
                e();
            else {
                var h, k = "amp-ini-load" === g.data;
                a.ampInaboxPendingMessages && !k && (h = /^amp-(\d{15,20})?/.exec(g.data)) && (a.ampInaboxPendingMessages.push(g),
                g = h[1],
                a.ampInaboxInitialized || g && !/^\d{15,20}$/.test(g) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || Jf(a.document, g ? Jb(new yb(zb,"https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"), {
                    ampVersion: g
                }) : Mb(Bb(new yb(zb,"https://cdn.ampproject.org/amp4ads-host-v0.js")))))
            }
        }
        const d = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let e = ()=>{}
          , f = ()=>{}
        ;
        b && (d.push(b),
        f = ()=>{
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            Va(d, b);
            e()
        }
        );
        if (a.ampInaboxInitialized)
            return f;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        d.google_amp_listener_added || (d.google_amp_listener_added = !0,
        Ce(a, "message", c),
        e = ()=>{
            De(a, "message", c)
        }
        );
        return f
    }
    ;function nh(a, b, c=null) {
        oh(a, b, c)
    }
    function oh(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        const d = a.document.createElement("img");
        if (c) {
            const e = f=>{
                c && c(f);
                De(d, "load", e);
                De(d, "error", e)
            }
            ;
            Ce(d, "load", e);
            Ce(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d)
    }
    var ph = a=>{
        var b;
        if (b = p.navigator)
            b = p.navigator.userAgent,
            b = /Chrome/.test(b) && !/Edge/.test(b) ? !0 : !1;
        b && p.navigator.sendBeacon ? p.navigator.sendBeacon(a) : nh(p, a)
    }
      , rh = a=>{
        let b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=gfp_cw_status";
        Vf(a, (c,d)=>{
            c && (b += `&${d}=${encodeURIComponent(c)}`)
        }
        );
        qh(b)
    }
      , qh = a=>{
        var b = window;
        b.fetch ? b.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : nh(b, a)
    }
    ;
    var sh = {};
    var th = class {
    }
      , uh = class extends th {
        constructor(a, b) {
            super();
            if (b !== sh)
                throw Error("Bad secret");
            this.j = a
        }
        toString() {
            return this.j
        }
    }
    ;
    new uh("about:blank",sh);
    new uh("about:invalid#zTSz",sh);
    function vh(a, b, c) {
        if ("string" === typeof b)
            (b = wh(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d]
                  , f = wh(c, d);
                f && (c.style[f] = e)
            }
    }
    var xh = {};
    function wh(a, b) {
        var c = xh[b];
        if (!c) {
            var d = Ad(b);
            c = d;
            void 0 === a.style[d] && (d = (Ld ? "Webkit" : Kd ? "Moz" : Hd ? "ms" : Gd ? "O" : null) + Bd(d),
            void 0 !== a.style[d] && (c = d));
            xh[b] = c
        }
        return c
    }
    function yh(a, b) {
        var c = nf(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }
    function zh(a) {
        return yh(a, "position") || (a.currentStyle ? a.currentStyle.position : null) || a.style && a.style.position
    }
    function Ah(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }
    function Bh(a) {
        var b = nf(a)
          , c = new jf(0,0);
        var d = b ? nf(b) : document;
        d = !Hd || 9 <= Number(Vd) || "CSS1Compat" == lf(d).j.compatMode ? d.documentElement : d.body;
        if (a == d)
            return c;
        a = Ah(a);
        b = pf(lf(b).j);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }
    function Ch(a, b) {
        if (/^\d+px?$/.test(b))
            return parseInt(b, 10);
        var c = a.style.left
          , d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    }
    function Dh(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? Ch(a, b) : 0
    }
    var Eh = {
        thin: 2,
        medium: 4,
        thick: 6
    };
    function Fh(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null))
            return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in Eh ? Eh[b] : Ch(a, b)
    }
    ;var Gh = (a,b)=>{
        if (a)
            for (let c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }
      , Hh = a=>!(!a || !a.call) && "function" === typeof a
      , Ih = ()=>{
        var a = N();
        "google_onload_fired"in a || (a.google_onload_fired = !1,
        Ce(a, "load", ()=>{
            a.google_onload_fired = !0
        }
        ))
    }
      , Jh = (a,b)=>{
        const c = b.slice(-1);
        let d = "?" === c || "#" === c ? "" : "&";
        const e = [b];
        Gh(a, (f,g)=>{
            if (f || 0 === f || !1 === f)
                "boolean" === typeof f && (f = f ? 1 : 0),
                e.push(d),
                e.push(g),
                e.push("="),
                e.push(encodeURIComponent(String(f))),
                d = "&"
        }
        );
        return e.join("")
    }
      , Kh = ()=>{
        try {
            return M.history.length
        } catch (a) {
            return 0
        }
    }
      , Lh = a=>{
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }
      , Mh = a=>{
        let b;
        b = 9 !== a.nodeType && a.id;
        a: {
            if (a && a.nodeName && a.parentElement) {
                var c = a.nodeName.toString().toLowerCase();
                const d = a.parentElement.childNodes;
                let e = 0;
                for (let f = 0; f < d.length; ++f) {
                    const g = d[f];
                    if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
                        if (a === g) {
                            c = "." + e;
                            break a
                        }
                        ++e
                    }
                }
            }
            c = ""
        }
        return (a.nodeName && a.nodeName.toString().toLowerCase()) + (b ? "/" + b : "") + c
    }
      , Nh = a=>!!a.google_async_iframe_id
      , Oh = Nh(window);
    let Ph = Oh && window.parent || window;
    var N = ()=>{
        if (Oh && !Ff(Ph)) {
            let a = "." + Ue.domain;
            try {
                for (; 2 < a.split(".").length && !Ff(Ph); )
                    Ue.domain = a = a.substr(a.indexOf(".") + 1),
                    Ph = window.parent
            } catch (b) {}
            Ff(Ph) || (Ph = window)
        }
        return Ph
    }
      , Qh = /(^| )adsbygoogle($| )/
      , Rh = a=>function() {
        if (a) {
            const b = a;
            a = null;
            b.apply(null, arguments)
        }
    }
      , Th = ()=>{
        if (!M)
            return !1;
        try {
            return !(!M.navigator.standalone && !Sh(M).navigator.standalone)
        } catch (a) {
            return !1
        }
    }
      , Uh = ()=>{
        var a;
        let b;
        const c = window.ActiveXObject;
        if (navigator.plugins && navigator.mimeTypes.length) {
            if ((a = navigator.plugins["Shockwave Flash"]) && a.description)
                return a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
        } else {
            if (navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows CE")) {
                b = 3;
                for (a = 1; a; )
                    try {
                        a = new c("ShockwaveFlash.ShockwaveFlash." + (b + 1)),
                        b++
                    } catch (d) {
                        a = null
                    }
                return b.toString()
            }
            if (Nc()) {
                a = null;
                try {
                    a = new c("ShockwaveFlash.ShockwaveFlash.7")
                } catch (d) {
                    b = 0;
                    try {
                        a = new c("ShockwaveFlash.ShockwaveFlash.6"),
                        b = 6,
                        a.AllowScriptAccess = "always"
                    } catch (e) {
                        if (6 === b)
                            return b.toString()
                    }
                    try {
                        a = new c("ShockwaveFlash.ShockwaveFlash")
                    } catch (e) {}
                }
                if (a)
                    return b = a.GetVariable("$version").split(" ")[1],
                    b.replace(/,/g, ".")
            }
        }
        return "0"
    }
      , Vh = a=>(a = a.google_ad_format) ? 0 < a.indexOf("_0ads") : !1
      , Sh = a=>Xg && a.google_top_window || a.top
      , Wh = a=>{
        a = Sh(a);
        return Ff(a) ? a : null
    }
      , Xh = a=>{
        let b = Number(a.google_ad_width)
          , c = Number(a.google_ad_height);
        if (!(0 < b && 0 < c)) {
            a: {
                try {
                    const e = String(a.google_ad_format);
                    if (e && e.match) {
                        const f = e.match(/(\d+)x(\d+)/i);
                        if (f) {
                            const g = parseInt(f[1], 10)
                              , h = parseInt(f[2], 10);
                            if (0 < g && 0 < h) {
                                var d = {
                                    width: g,
                                    height: h
                                };
                                break a
                            }
                        }
                    }
                } catch (e) {}
                d = null
            }
            a = d;
            if (!a)
                return null;
            b = 0 < b ? b : a.width;
            c = 0 < c ? c : a.height
        }
        return {
            width: b,
            height: c
        }
    }
      , Yh = (a,b)=>a.source !== b.contentWindow && a.source.parent !== b.contentWindow ? !1 : !0;
    var $h = (a,b)=>{
        if (!a)
            return !1;
        a = a.hash;
        if (!a || !a.indexOf)
            return !1;
        if (-1 != a.indexOf(b))
            return !0;
        b = Zh(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }
      , Zh = a=>{
        let b = "";
        Gh(a.split("_"), c=>{
            b += c.substr(0, 2)
        }
        );
        return b
    }
      , ai = ()=>{
        var a = p.location;
        let b = !1;
        Gh(Re, c=>{
            $h(a, c) && (b = !0)
        }
        );
        return b
    }
      , bi = (a,b)=>{
        switch (a) {
        case 1:
            return $h(b, "google_ia_debug");
        case 2:
            return $h(b, "google_bottom_anchor_debug");
        case 3:
            return $h(b, "google_anchor_debug") || $h(b, "googleads");
        case 4:
            return $h(b, "google_scr_debug");
        case 6:
            return $h(b, "google_responsive_slot_debug")
        }
        return !1
    }
    ;
    var ci;
    {
        const a = parseInt("2019", 10);
        ci = isNaN(a) ? 2012 : a
    }
    ;var di = (a,b)=>"relative" === a ? b : ["https://", a, b].join("")
      , ei = a=>{
        a = di("pagead2.googlesyndication.com", a);
        if (2012 < ci) {
            var b = (b = a.match(/(__[a-z0-9_]+)\.js(?:\?|$)/)) ? b[1] : "";
            a = a.replace(new RegExp(String(`${b}.js`).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"),"g"), `_fy${ci}${b}.js`.replace(/\$/g, "$$$$"))
        }
        return a
    }
    ;
    let fi = null
      , gi = null;
    var hi = ()=>{
        if (!Xg)
            return !1;
        if (null != fi)
            return fi;
        fi = !1;
        try {
            const a = Wh(p);
            a && -1 != a.location.hash.indexOf("google_logging") && (fi = !0);
            p.localStorage.getItem("google_logging") && (fi = !0)
        } catch (a) {}
        return fi
    }
      , ii = ()=>{
        if (null != gi)
            return gi;
        gi = !1;
        try {
            const a = Wh(p);
            if (a && -1 != a.location.hash.indexOf("auto_ads_logging") || p.localStorage.getItem("auto_ads_logging"))
                gi = !0
        } catch (a) {}
        return gi
    }
      , ji = (a,b=[])=>{
        let c = !1;
        p.google_logging_queue || (c = !0,
        p.google_logging_queue = []);
        p.google_logging_queue.push([a, b]);
        c && hi() && (a = ei("/pagead/js/logging_library.js"),
        Jf(p.document, Af(a)))
    }
    ;
    var ki = {
        ["google_ad_channel"]: "channel",
        ["google_ad_type"]: "ad_type",
        ["google_ad_format"]: "format",
        ["google_color_bg"]: "color_bg",
        ["google_color_border"]: "color_border",
        ["google_color_link"]: "color_link",
        ["google_color_text"]: "color_text",
        ["google_color_url"]: "color_url",
        ["google_page_url"]: "url",
        ["google_allow_expandable_ads"]: "ea",
        ["google_ad_section"]: "region",
        ["google_cpm"]: "cpm",
        ["google_encoding"]: "oe",
        ["google_safe"]: "adsafe",
        ["google_flash_version"]: "flash",
        ["google_font_face"]: "f",
        ["google_font_size"]: "fs",
        ["google_hints"]: "hints",
        ["google_ad_host"]: "host",
        ["google_ad_host_channel"]: "h_ch",
        ["google_ad_host_tier_id"]: "ht_id",
        ["google_kw_type"]: "kw_type",
        ["google_kw"]: "kw",
        ["google_contents"]: "contents",
        ["google_targeting"]: "targeting",
        ["google_adtest"]: "adtest",
        ["google_alternate_color"]: "alt_color",
        ["google_alternate_ad_url"]: "alternate_ad_url",
        ["google_cust_age"]: "cust_age",
        ["google_cust_ch"]: "cust_ch",
        ["google_cust_gender"]: "cust_gender",
        ["google_cust_interests"]: "cust_interests",
        ["google_cust_job"]: "cust_job",
        ["google_cust_l"]: "cust_l",
        ["google_cust_lh"]: "cust_lh",
        ["google_cust_u_url"]: "cust_u_url",
        ["google_cust_id"]: "cust_id",
        ["google_language"]: "hl",
        ["google_city"]: "gcs",
        ["google_country"]: "gl",
        ["google_region"]: "gr",
        ["google_content_recommendation_ad_positions"]: "ad_pos",
        ["google_content_recommendation_columns_num"]: "cr_col",
        ["google_content_recommendation_rows_num"]: "cr_row",
        ["google_content_recommendation_ui_type"]: "crui",
        ["google_content_recommendation_use_square_imgs"]: "cr_sq_img",
        ["google_color_line"]: "color_line",
        ["google_disable_video_autoplay"]: "disable_video_autoplay",
        ["google_full_width_responsive_allowed"]: "fwr",
        ["google_full_width_responsive"]: "fwrattr",
        ["efwr"]: "efwr",
        ["google_pgb_reactive"]: "pra",
        ["google_resizing_allowed"]: "rs",
        ["google_resizing_height"]: "rh",
        ["google_resizing_width"]: "rw",
        ["rpe"]: "rpe",
        ["google_responsive_formats"]: "resp_fmts",
        ["google_safe_for_responsive_override"]: "sfro",
        ["google_video_doc_id"]: "video_doc_id",
        ["google_video_product_type"]: "video_product_type",
        ["google_webgl_support"]: "wgl",
        ["google_refresh_count"]: "rc"
    }
      , li = {
        ["google_ad_block"]: "ad_block",
        ["google_ad_client"]: "client",
        ["google_ad_output"]: "output",
        ["google_ad_callback"]: "callback",
        ["google_ad_height"]: "h",
        ["google_ad_resize"]: "twa",
        ["google_ad_slot"]: "slotname",
        ["google_ad_unit_key"]: "adk",
        ["google_ad_dom_fingerprint"]: "adf",
        ["google_ad_width"]: "w",
        ["google_captcha_token"]: "captok",
        ["google_content_recommendation_columns_num"]: "cr_col",
        ["google_content_recommendation_rows_num"]: "cr_row",
        ["google_ctr_threshold"]: "ctr_t",
        ["google_cust_criteria"]: "cust_params",
        ["gfwrnwer"]: "fwrn",
        ["gfwrnher"]: "fwrnh",
        ["google_bfa"]: "bfa",
        ["ebfa"]: "ebfa",
        ["ebfaca"]: "ebfaca",
        ["google_image_size"]: "image_size",
        ["google_last_modified_time"]: "lmt",
        ["google_loeid"]: "loeid",
        ["google_max_num_ads"]: "num_ads",
        ["google_max_radlink_len"]: "max_radlink_len",
        ["google_mtl"]: "mtl",
        ["google_native_settings_key"]: "nsk",
        ["google_enable_content_recommendations"]: "ecr",
        ["google_num_radlinks"]: "num_radlinks",
        ["google_num_radlinks_per_unit"]: "num_radlinks_per_unit",
        ["google_pucrd"]: "pucrd",
        ["google_reactive_plaf"]: "plaf",
        ["google_reactive_plat"]: "plat",
        ["google_reactive_fba"]: "fba",
        ["google_reactive_sra_channels"]: "plach",
        ["google_responsive_auto_format"]: "rafmt",
        ["armr"]: "armr",
        ["google_rl_dest_url"]: "rl_dest_url",
        ["google_rl_filtering"]: "rl_filtering",
        ["google_rl_mode"]: "rl_mode",
        ["google_rt"]: "rt",
        ["google_source_type"]: "src_type",
        ["google_restrict_data_processing"]: "rdp",
        ["google_tag_for_child_directed_treatment"]: "tfcd",
        ["google_tag_for_under_age_of_consent"]: "tfua",
        ["google_tag_origin"]: "to",
        ["google_ad_semantic_area"]: "sem",
        ["google_tfs"]: "tfs",
        ["google_package"]: "pwprc",
        ["google_tag_partner"]: "tp",
        ["fra"]: "fpla",
        ["google_ml_rank"]: "mlr",
        ["google_apsail"]: "psa"
    }
      , mi = {
        ["google_core_dbp"]: "dbp",
        ["google_lact"]: "lact",
        ["google_only_pyv_ads"]: "pyv",
        ["google_scs"]: "scs",
        ["google_video_url_to_fetch"]: "durl",
        ["google_yt_pt"]: "yt_pt",
        ["google_yt_up"]: "yt_up"
    };
    var ni = a=>{
        Gh(ki, (b,c)=>{
            a[c] = null
        }
        );
        Gh(li, (b,c)=>{
            a[c] = null
        }
        );
        Gh(mi, (b,c)=>{
            a[c] = null
        }
        );
        a.google_container_id = null;
        a.google_page_location = null;
        a.google_referrer_url = null;
        a.google_enable_single_iframe = null;
        a.google_ad_region = null;
        a.google_gl = null;
        a.google_loader_used = null;
        a.google_loader_features_used = null;
        a.google_debug_params = null
    }
      , oi = (a,b,c)=>{
        a.l |= 2;
        return b[c % b.length]
    }
    ;
    class pi {
        constructor(a, b, c={}) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = c
        }
    }
    ;const qi = [/^https?:\/\/(secure)?pubads\.g\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(googleads|adx)\.g\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(?!adx)ad.*\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(tpc|pagead2)\.googlesyndication\.com(:\d+)?($|\/)/i, /^https?:\/\/www\.googletagservices\.com(:\d+)?($|\/)/i, /^https?:\/\/adservice\.google\.(com?\.)?[a-z]{2,3}(:\d+)?($|\/)/i];
    var ri = a=>Sa(qi, b=>b.test(a));
    function si(a) {
        if (a = /[-\w]+\.[-\w]+$/.exec(a))
            switch (zd(a[0].toLowerCase())) {
            case 1967261364:
                return 0;
            case 3147493546:
                return 1;
            case 1567346461:
                return 2;
            case 2183041838:
                return 3;
            case 763236279:
                return 4;
            case 1342279801:
                return 5;
            case 526831769:
                return 6;
            case 352806002:
                return 7;
            case 2755048925:
                return 8;
            case 3306848407:
                return 9;
            case 2207000920:
                return 10;
            case 484037040:
                return 11;
            case 3506871055:
                return 12;
            case 672143848:
                return 13;
            case 2528751226:
                return 14;
            case 2744854768:
                return 15;
            case 3703278665:
                return 16;
            case 2014749173:
                return 17;
            case 133063824:
                return 18;
            case 2749334602:
                return 19;
            case 3131239845:
                return 20;
            case 2074086763:
                return 21;
            case 795772493:
                return 22;
            case 290857819:
                return 23;
            case 3035947606:
                return 24;
            case 2983138003:
                return 25;
            case 2197138676:
                return 26;
            case 4216016165:
                return 27;
            case 239803524:
                return 28;
            case 975993579:
                return 29;
            case 1794940339:
                return 30;
            case 1314429186:
                return 31;
            case 1643618937:
                return 32;
            case 497159982:
                return 33;
            case 3882239661:
                return 34
            }
        return -1
    }
    function ti(a) {
        if (!a.length)
            return 0;
        let b = [];
        for (var c = 0; 34 >= c; c++)
            b[c] = 0;
        for (c = a.length - 1; 0 <= c; c--) {
            const d = si(a[c]);
            0 <= d && (b[34 - d] = 1)
        }
        return parseInt(b.join(""), 2)
    }
    ;const wi = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;
    function xi(a) {
        var b = a || p;
        const c = [];
        let d, e = null, f, g;
        do {
            g = b;
            Ff(g) ? (d = g.location.href,
            e = g.document && g.document.referrer || null,
            f = !0) : (d = e,
            e = null,
            f = !1);
            c.push(new yi(d || "",g,f));
            try {
                b = g.parent
            } catch (h) {
                b = null
            }
        } while (b && g != b);for (let h = 0, k = c.length - 1; h <= k; ++h)
            c[h].depth = k - h;
        g = a || p;
        if (g.location && g.location.ancestorOrigins && g.location.ancestorOrigins.length == c.length - 1)
            for (a = 1; a < c.length; ++a)
                b = c[a],
                b.url || (b.url = g.location.ancestorOrigins[a - 1] || "",
                b.Vb = !0);
        return c
    }
    function zi(a, b) {
        let c = 0;
        const d = (a = a.l[Math.max(a.l.length - 1, 0)].url || null) && Ef(a.match(Df)[3] || null)
          , e = Math.min(b.length, 26);
        for (let f = 0; f < e; f++)
            a = null != b[f] && Ef(b[f].match(Df)[3] || null) || "",
            c *= 4,
            a && (d && a == d ? c += 3 : ri(b[f]) ? c += 2 : a && 0 <= si(a) && (c += 1));
        return c
    }
    class Ai {
        constructor(a) {
            a = (this.j = a || p) || p;
            this.m = a = a.top == a ? 1 : Ff(a.top) ? 2 : 3;
            3 != this.m && Date.parse(p.top.document.lastModified);
            this.l = xi(this.j)
        }
    }
    var Bi = class {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    }
      , yi = class {
        constructor(a, b, c, d, e) {
            this.url = a;
            this.win = b;
            this.Vb = !!d;
            this.depth = "number" === typeof e ? e : null
        }
    }
    ;
    function Ci(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }
    function Di(a, b, c, d, e) {
        const f = [];
        Vf(a, function(g, h) {
            (g = Ti(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }
    function Ti(a, b, c, d, e) {
        if (null == a)
            return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0,
            d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++)
                    f.push(Ti(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a)
            return e = e || 0,
            2 > e ? encodeURIComponent(Di(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }
    function Ui(a, b, c, d) {
        a.j.push(b);
        a.l[b] = Ci(c, d)
    }
    function Vi(a) {
        if (!a.o)
            return a.A;
        let b = 1;
        for (const c in a.l)
            b = c.length > b ? c.length : b;
        return a.A - a.o.length - b - a.m.length - 1
    }
    function Wi(a, b, c, d) {
        b = b + "//" + c + d;
        let e = Vi(a) - d.length;
        if (0 > e)
            return "";
        a.j.sort(function(g, h) {
            return g - h
        });
        d = null;
        c = "";
        for (var f = 0; f < a.j.length; f++) {
            const g = a.j[f]
              , h = a.l[g];
            for (let k = 0; k < h.length; k++) {
                if (!e) {
                    d = null == d ? g : d;
                    break
                }
                let l = Di(h[k], a.m, a.C);
                if (l) {
                    l = c + l;
                    if (e >= l.length) {
                        e -= l.length;
                        b += l;
                        c = a.m;
                        break
                    }
                    a.v && (c = e,
                    l[c - 1] == a.m && --c,
                    b += l.substr(0, c),
                    c = a.m,
                    e = 0);
                    d = null == d ? g : d
                }
            }
        }
        f = "";
        a.o && null != d && (f = c + a.o + "=" + (a.G || d));
        return b + f
    }
    class Xi {
        constructor(a, b, c, d, e) {
            this.A = c || 4E3;
            this.m = a || "&";
            this.C = b || ",$";
            this.o = void 0 !== d ? d : "trn";
            this.G = e || null;
            this.v = !1;
            this.l = {};
            this.D = 0;
            this.j = []
        }
    }
    ;function Yi(a, b, c, d, e, f) {
        if ((d ? a.j : Math.random()) < (e || a.m))
            try {
                let g;
                c instanceof Xi ? g = c : (g = new Xi,
                Vf(c, (k,l)=>{
                    var m = g
                      , r = m.D++;
                    k = Ci(l, k);
                    m.j.push(r);
                    m.l[r] = k
                }
                ));
                const h = Wi(g, a.A, a.o, a.v + b + "&");
                h && ("undefined" !== typeof f ? nh(p, h, f) : a.l ? ph(h) : nh(p, h))
            } catch (g) {}
    }
    class Zi {
        constructor(a, b, c, d, e=!1) {
            this.A = a;
            this.o = b;
            this.v = c;
            this.m = d;
            this.l = e;
            this.j = Math.random()
        }
    }
    ;let $i = null;
    function aj() {
        if (null === $i) {
            $i = "";
            try {
                let a = "";
                try {
                    a = p.top.location.hash
                } catch (b) {
                    a = p.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    $i = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return $i
    }
    ;var bj = ()=>{
        const a = p.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Ga()
    }
      , cj = ()=>{
        const a = p.performance;
        return a && a.now ? a.now() : null
    }
    ;
    class dj {
        constructor(a, b, c, d=0, e) {
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = d;
            this.uniqueId = Math.random();
            this.slotId = e
        }
    }
    ;const ej = p.performance
      , fj = !!(ej && ej.mark && ej.measure && ej.clearMarks)
      , gj = gb(()=>{
        var a;
        if (a = fj)
            a = aj(),
            a = !!a.indexOf && 0 <= a.indexOf("1337");
        return a
    }
    );
    function hj(a) {
        a && ej && gj() && (ej.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),
        ej.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    function ij(a) {
        a.j = !1;
        a.l != a.m.google_js_reporting_queue && (gj() && Oa(a.l, hj),
        a.l.length = 0)
    }
    function jj(a, b) {
        if (a.j && "number" === typeof b.value) {
            var c = cj() || bj();
            b.duration = c - b.value;
            c = `goog_${b.label}_${b.uniqueId}_end`;
            ej && gj() && ej.mark(c);
            !a.j || 2048 < a.l.length || a.l.push(b)
        }
    }
    function kj(a, b) {
        if (!a.j)
            return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw hj(c),
            e;
        }
        jj(a, c);
        return d
    }
    class lj {
        constructor(a, b) {
            this.l = [];
            this.m = b || p;
            let c = null;
            b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [],
            this.l = b.google_js_reporting_queue,
            c = b.google_measure_js_timing);
            this.j = gj() || (null != c ? c : Math.random() < a)
        }
        start(a, b) {
            if (!this.j)
                return null;
            const c = cj() || bj();
            a = new dj(a,b,c);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            ej && gj() && ej.mark(b);
            return a
        }
    }
    ;function mj(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        a.stack && (b = nj(a.stack, b));
        return b
    }
    function nj(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            let c;
            for (; a != c; )
                c = a,
                a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
            return a.replace(/\n */g, "\n")
        } catch (c) {
            return b
        }
    }
    function oj(a, b, c, d) {
        let e, f;
        try {
            a.m && a.m.j ? (f = a.m.start(b.toString(), 3),
            e = c(),
            jj(a.m, f)) : e = c()
        } catch (g) {
            c = a.o;
            try {
                hj(f),
                c = a.C(b, new pi(g,{
                    message: mj(g)
                }), void 0, d)
            } catch (h) {
                a.j(217, h)
            }
            if (!c)
                throw g;
        }
        return e
    }
    function pj(a, b, c, d, e) {
        return (...f)=>oj(a, b, ()=>c.apply(d, f), e)
    }
    class qj {
        constructor(a, b, c, d=null) {
            this.A = a;
            this.D = b;
            this.o = c;
            this.l = null;
            this.C = this.j;
            this.m = d;
            this.v = !1
        }
        j(a, b, c, d, e) {
            e = e || this.D;
            let f;
            try {
                const k = new Xi;
                k.v = !0;
                Ui(k, 1, "context", a);
                b.error && b.meta && b.id || (b = new pi(b,{
                    message: mj(b)
                }));
                b.msg && Ui(k, 2, "msg", b.msg.substring(0, 512));
                var g = b.meta || {};
                b = g;
                if (this.l)
                    try {
                        this.l(b)
                    } catch (l) {}
                if (d)
                    try {
                        d(b)
                    } catch (l) {}
                d = k;
                g = [g];
                d.j.push(3);
                d.l[3] = g;
                {
                    const l = xi();
                    let m = new yi(p.location.href,p,!0,!1);
                    g = null;
                    const r = l.length - 1;
                    for (d = r; 0 <= d; --d) {
                        var h = l[d];
                        !g && wi.test(h.url) && (g = h);
                        if (h.url && !h.Vb) {
                            m = h;
                            break
                        }
                    }
                    h = null;
                    const t = l.length && l[r].url;
                    0 != m.depth && t && (h = l[r]);
                    f = new Bi(m,h,g)
                }
                f.l && Ui(k, 4, "top", f.l.url || "");
                Ui(k, 5, "url", f.j.url || "");
                Yi(this.A, e, k, this.v, c)
            } catch (k) {
                try {
                    Yi(this.A, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: mj(k),
                        url: f && f.j.url
                    }, this.v, c)
                } catch (l) {}
            }
            return this.o
        }
    }
    ;let rj, sj;
    const tj = N()
      , uj = new lj(1,tj)
      , vj = a=>{
        var b = M.jerExpIds;
        if (Array.isArray(b) && 0 !== b.length) {
            var c = a.eid;
            if (c) {
                b = [...c.split(","), ...b];
                c = {};
                for (var d = 0, e = 0; e < b.length; ) {
                    var f = b[e++];
                    var g = f;
                    g = ua(g) ? "o" + va(g) : (typeof g).charAt(0) + g;
                    Object.prototype.hasOwnProperty.call(c, g) || (c[g] = !0,
                    b[d++] = f)
                }
                b.length = d;
                a.eid = b.join(",")
            } else
                a.eid = b.join(",")
        }
    }
      , wj = a=>{
        const b = M.jerUserAgent;
        b && (a.useragent = b)
    }
    ;
    rj = new Zi("http:" === M.location.protocol ? "http:" : "https:","pagead2.googlesyndication.com","/pagead/gen_204?id=",.01);
    "number" !== typeof tj.google_srt && (tj.google_srt = Math.random());
    var xj = tj.google_srt;
    0 <= xj && 1 >= xj && (rj.j = xj);
    sj = new qj(rj,"jserror",!0,uj);
    sj.l = a=>{
        vj(a);
        wj(a)
    }
    ;
    sj.v = !0;
    "complete" == tj.document.readyState ? tj.google_measure_js_timing || ij(uj) : uj.j && Ce(tj, "load", ()=>{
        tj.google_measure_js_timing || ij(uj)
    }
    );
    var yj = ()=>{}
      , zj = (a,b)=>{
        oj(sj, a, b, void 0)
    }
      , T = (a,b,c)=>pj(sj, a, b, c, void 0)
      , W = (a,b,c)=>{
        Yi(rj, a, b, !0, c, void 0)
    }
    ;
    var Aj = class {
        constructor(a) {
            this.j = this.l = null;
            "function" === typeof a ? this.j = a : this.l = a
        }
        getVerifier(a) {
            return this.l ? this.l[a] : null
        }
        getSchema(a) {
            return this.j ? this.j(a) : null
        }
        doesReturnAnotherSchema() {
            return this.j ? !0 : !1
        }
    }
      , Bj = (a,b,c,d=null)=>{
        const e = g=>{
            let h;
            try {
                h = JSON.parse(g.data)
            } catch (k) {
                return
            }
            !h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
        }
        ;
        Ce(a, "message", e);
        let f = !1;
        return ()=>{
            let g = !1;
            f || (f = !0,
            g = De(a, "message", e));
            return g
        }
    }
      , Cj = (a,b,c,d=null)=>{
        const e = Bj(a, b, eb(c, ()=>e()), d);
        return e
    }
      , Dj = class extends Error {
        constructor() {
            super()
        }
    }
      , Ej = (a,b,c,d,e)=>{
        if (Array.isArray(a)) {
            var f = a;
            for (var g = 0; g < a.length; g++)
                a[g] = Ej(a[g], b, c, d, e)
        } else if (ua(a)) {
            if (b.doesReturnAnotherSchema())
                if (f = b.getSchema(a)) {
                    if (b = f,
                    b.doesReturnAnotherSchema())
                        return Ej(a, b, c, d, e)
                } else
                    throw new Dj("in_sc",c ? c : "root",a);
            f = {};
            for (g in a)
                if (Object.prototype.hasOwnProperty.call(a, g)) {
                    d = b.getVerifier(g);
                    c = a[g];
                    var h = b;
                    if (d) {
                        const k = d.predicate || d;
                        if ("function" === typeof k) {
                            h = k(c);
                            if (!h) {
                                if (!d || !d.nullOnInvalid)
                                    throw new Dj("sm",g,c);
                                e && (e[g] = !0);
                                f[g] = null;
                                continue
                            }
                            if (h instanceof Aj)
                                d = null;
                            else {
                                f[g] = c;
                                continue
                            }
                        }
                    } else if (!ua(c))
                        continue;
                    f[g] = Ej(c, h, g, d, e)
                }
        } else if (f = a,
        b = d ? d.predicate || d : void 0,
        b instanceof RegExp && !b.test("string" === typeof a || void 0 == a ? a : String(a)) || "function" === typeof b && !b(a)) {
            if (!d || !d.nullOnInvalid)
                throw new Dj("sm",c,a);
            e && (e[c] = !0);
            f = null
        }
        return f
    }
      , Gj = (a,b)=>{
        var c = Fj;
        return Bj(a, "ct", (d,e)=>{
            try {
                const f = Ej(d, c, null, null, null);
                b(f, e)
            } catch (f) {
                if (!(f instanceof Dj))
                    throw f;
            }
        }
        )
    }
      , Hj = (a,b,c,d,e)=>{
        if (!(0 >= e) && (c.googMsgType = b,
        a.postMessage(JSON.stringify(c), d),
        a = a.frames))
            for (let f = 0; f < a.length; ++f)
                1 < e && Hj(a[f], b, c, d, --e)
    }
    ;
    var Ij = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5
    }
      , Jj = {
        [1]: 1,
        [2]: 1,
        [8]: 2,
        [27]: 3,
        [9]: 4,
        [30]: 5
    };
    function Kj(a) {
        a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new Lj) : a.google_reactive_ads_global_state = new Mj;
        return a.google_reactive_ads_global_state
    }
    class Mj {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.improveCollisionDetection = 1;
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new Lj
        }
    }
    var Lj = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    }
    ;
    var Nj = 728 * 1.38
      , Oj = (a,b=420)=>(a = Y(a).clientWidth) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384
      , Pj = a=>{
        var b = Y(a).clientWidth;
        a = a.innerWidth;
        return (b = b && a ? b / a : 0) ? 1.05 < b ? 262144 : .95 > b ? 524288 : 0 : 131072
    }
      , Rj = a=>Math.max(0, Qj(a, !0) - Y(a).clientHeight)
      , Y = a=>{
        a = a.document;
        let b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }
      , Qj = (a,b)=>{
        const c = Y(a);
        return b ? c.scrollHeight == Y(a).clientHeight ? c.offsetHeight : c.scrollHeight : c.offsetHeight
    }
      , Sj = (a,b)=>a.adCount ? 1 == b || 2 == b ? !(!a.adCount[1] && !a.adCount[2]) : (a = a.adCount[b]) && 27 !== b && 26 !== b && 10 !== b && 40 !== b ? 1 <= a : !1 : !1
      , Tj = (a,b)=>a && a.source ? a.source === b || a.source.parent === b : !1
      , Uj = a=>void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
      , Vj = a=>void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset
      , Wj = a=>{
        const b = {};
        let c;
        Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
        if (c)
            for (a = 0; a < c.length; a++) {
                const d = c[a];
                if ("key"in d && "value"in d) {
                    const e = d.value;
                    b[d.key] = null == e ? null : String(e)
                }
            }
        return b
    }
      , Xj = (a,b,c,d,e)=>{
        Yi(c, b, {
            c: e.data.substring(0, 500),
            u: a.location.href.substring(0, 500)
        }, !0, .1);
        return !0
    }
    ;
    class Yj extends bh {
        constructor(a, b, c, d=!1) {
            super();
            this.j = a;
            this.Ha = b;
            this.yc = c;
            this.wc = d;
            this.Ia = {};
            this.qc = pj(this.Ha, 168, (e,f)=>{
                a: {
                    try {
                        if (!Fg(f.origin, this.wc))
                            break a
                    } catch (k) {
                        break a
                    }
                    const g = e.msg_type;
                    let h;
                    "string" === typeof g && (h = this.Ia[g]) && h.call(this, e, f)
                }
            }
            );
            this.Sc = pj(this.Ha, 169, (e,f)=>Xj(this.j, "ras::xsf", this.yc, e, f));
            this.Z = [];
            this.W(this.Ia);
            this.Z.push(Bj(this.j, "sth", this.qc, this.Sc))
        }
        l() {
            for (const a of this.Z)
                a();
            this.Z.length = 0;
            super.l()
        }
    }
    ;class Zj extends Yj {
        constructor(a) {
            super(a, sj, rj, Xg);
            this.j = a
        }
    }
    ;function ak(a) {
        try {
            const b = a.localStorage.getItem("google_adsense_settings");
            if (!b)
                return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : nb(c, (d,e)=>Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    }
    class bk extends Zj {
        constructor(a, b) {
            super(a);
            this.m = b;
            this.o = ()=>{}
            ;
            Ce(this.m, "load", this.o)
        }
        l() {
            this.m && De(this.m, "load", this.o);
            super.l();
            this.m = null
        }
        W(a) {
            a["adsense-labs"] = this.v
        }
        v(a) {
            if (a = Wj(a).settings)
                try {
                    var b = new Ke(JSON.parse(a));
                    if (null != D(b, 1)) {
                        {
                            var c = this.j
                              , d = D(b, 1) || "";
                            const e = ak(c);
                            null !== b && (e[d] = b.L);
                            try {
                                c.localStorage.setItem("google_adsense_settings", JSON.stringify(e))
                            } catch (f) {}
                        }
                    }
                } catch (e) {}
        }
    }
    ;Cd("");
    class ck {
        constructor(a) {
            this.methodName = a
        }
    }
    var dk = new ck(15)
      , ek = new ck(2)
      , fk = new ck(3)
      , gk = new ck(5)
      , hk = new ck(6)
      , ik = (a,b,c)=>b[a.methodName] || c || (()=>{}
    );
    var jk = (a=p)=>a.ggeac || (a.ggeac = {});
    function kk(a, b) {
        a.j = c=>{
            ik(ek, b, ()=>[])(c, 1)
        }
        ;
        a.l = ()=>ik(fk, b, ()=>[])(1)
    }
    class lk {
        constructor() {
            this.j = ()=>{}
            ;
            this.l = ()=>[]
        }
    }
    ta(lk);
    function mk(a, b) {
        a.j = (c,d)=>ik(gk, b)(c, d, 1);
        a.m = (c,d)=>ik(hk, b)(c, d, 1);
        a.l = ()=>{
            ik(dk, b)(1)
        }
    }
    class Z {
        constructor() {
            this.j = (a,b=!1)=>b;
            this.m = (a,b=0)=>b;
            this.l = ()=>{}
        }
    }
    ta(Z);
    var nk = (a,b=0)=>Z.F().m(a, b);
    class ok {
        constructor() {}
    }
    ta(ok);
    var pk = (a=jk())=>{
        kk(lk.F(), a);
        mk(Z.F(), a);
        ok.F();
        Z.F().l()
    }
    ;
    var rk = a=>{
        const b = qk(p);
        b && (a.eid = 50 < b.length ? b.substring(0, 50) + "T" : b)
    }
      , qk = a=>{
        const b = lk.F().l();
        a = Pe(a);
        return b.concat(a).join(",")
    }
    ;
    let sk = (new Date).getTime();
    var uk = a=>{
        const b = {};
        b.dtd = tk((new Date).getTime(), sk);
        return Jh(b, a)
    }
      , tk = (a,b,c=1E5)=>{
        a -= b;
        return a >= c ? "M" : 0 <= a ? a : "-M"
    }
    ;
    class vk {
        constructor(a) {
            this.j = a;
            a.google_iframe_oncopy || (a.google_iframe_oncopy = {
                handlers: {},
                upd: (b,c)=>{
                    {
                        var d = b
                          , e = /\brx=(\d+)/;
                        const f = e.exec(d);
                        f && (d = d.replace(e, "rx=" + (+f[1] + 1 || 1)))
                    }
                    e = Number;
                    a: {
                        if (b && (b = b.match("dt=([^&]+)")) && 2 == b.length) {
                            b = b[1];
                            break a
                        }
                        b = ""
                    }
                    b = e(b);
                    d = d.replace(/&dtd=(\d+|-?M)/, "&dtd=" + tk((new Date).getTime(), b));
                    this.set(c, d);
                    return c = d
                }
            });
            this.l = a.google_iframe_oncopy
        }
        set(a, b) {
            this.l.handlers[a] = b;
            this.j.addEventListener && this.j.addEventListener("load", ()=>{
                {
                    const c = this.j.document.getElementById(a);
                    try {
                        const d = c.contentWindow.document;
                        if (c.onload && d && (!d.body || !d.body.firstChild))
                            c.onload()
                    } catch (d) {}
                }
            }
            , !1)
        }
    }
    ud("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");
    var wk = a=>{
        const b = a.iframeWin;
        if (b && Nh(b) && b != b.parent && b.google_async_iframe_close) {
            const c = ()=>{
                b.setTimeout(()=>{
                    b.document.close()
                }
                , 0)
            }
            ;
            a.C ? a.C(c) : c()
        }
    }
    ;
    var xk = (a,b)=>{
        const c = rg();
        return a + (-1 == a.indexOf("?") ? "?" : "&") + [0 < c.length ? "google_debug" + (c ? "=" + c : "") + "&" : "", "xpc=", b, "&p=", encodeURIComponent(p.document.location.protocol), "//", encodeURIComponent(p.document.location.host)].join("")
    }
    ;
    Mb(Bb(new yb(zb,"https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var Fj = new Aj({
        notify: /^expandable-xpc-ready$/
    });
    function yk(a, b, c, d) {
        Fg(d.origin, Xg) && "expandable-xpc-ready" == c.notify && zk(a, b)
    }
    function zk(a, b) {
        var c = a.mb;
        c.google_eas_queue = c.google_eas_queue || [];
        c.google_eas_queue.push({
            a: a.id,
            b: a.url,
            c: a.width,
            d: a.height,
            e: a.Jb,
            f: a.qd,
            g: a.Ic,
            h: a.cd,
            i: void 0
        });
        p.setTimeout(T(220, Rh(Ca(function(d) {
            Jf(c.document, Af(d))
        }, b))), 0)
    }
    ;function Ak(a, b=p) {
        a = a.scrollingElement || ("CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return new jf(b.pageXOffset || a.scrollLeft,b.pageYOffset || a.scrollTop)
    }
    function Bk(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    }
    ;var Ck = (a,b=!1)=>{
        try {
            return b ? (new kf(a.innerWidth,a.innerHeight)).round() : of(a || window).round()
        } catch (c) {
            return new kf(-12245933,-12245933)
        }
    }
      , Dk = (a,b)=>{
        var c;
        var d;
        c = (d = (d = ih()) && (c = d.initialLayoutRect) && "number" === typeof c.top && "number" === typeof c.left && "number" === typeof c.width && "number" === typeof c.height ? new eh(c.left,c.top,c.width,c.height) : null) ? new jf(d.left,d.top) : (c = jh()) && ua(c.rootBounds) ? new jf(c.rootBounds.left + c.boundingClientRect.left,c.rootBounds.top + c.boundingClientRect.top) : null;
        if (c)
            return c;
        try {
            var e = a.j
              , f = new jf(0,0)
              , g = qf(nf(b));
            if (Dd(g, "parent")) {
                a = b;
                do {
                    if (g == e)
                        var h = Bh(a);
                    else {
                        var k = Ah(a);
                        h = new jf(k.left,k.top)
                    }
                    b = h;
                    f.x += b.x;
                    f.y += b.y
                } while (g && g != e && g != g.parent && (a = g.frameElement) && (g = g.parent))
            }
            return f
        } catch (l) {
            return new jf(-12245933,-12245933)
        }
    }
    ;
    function Ek(a) {
        B(this, a, Fk, null)
    }
    v(Ek, z);
    var Fk = [15];
    function Gk(a) {
        B(this, a, null, null)
    }
    v(Gk, z);
    function Hk(a) {
        B(this, a, null, null)
    }
    v(Hk, z);
    function Ik() {
        var a = Jk
          , b = Kk;
        if (!(window && Math.random && navigator))
            return -1;
        if (window.__google_ad_urls) {
            var c = window.__google_ad_urls;
            try {
                if (c && c.getOseId())
                    return c.getOseId()
            } catch (d) {}
        }
        if (!window.__google_ad_urls_id) {
            c = window.google_enable_ose;
            let d;
            !0 === c ? d = 2 : !1 !== c && (d = Lf([0], a),
            null == d && ((d = Lf([2], b)) || (d = 3)));
            if (!d)
                return 0;
            window.__google_ad_urls_id = d
        }
        return window.__google_ad_urls_id
    }
    ;function Lk(a) {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }
    function Mk(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }
    function Nk(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    }
    ;const Ok = new lj(1,N());
    var Pk = ()=>{
        const a = N();
        a && "undefined" != typeof a.google_measure_js_timing && (a.google_measure_js_timing || ij(Ok))
    }
    ;
    (()=>{
        const a = N();
        a && a.document && ("complete" == a.document.readyState ? Pk() : Ok.j && Ce(a, "load", ()=>{
            Pk()
        }
        ))
    }
    )();
    Date.now();
    var Qk = (a,b,c)=>{
        a && (c ? Ce(a, "load", b) : De(a, "load", b))
    }
      , Rk = ()=>{
        const a = (N() || p).google_osd_amcb;
        return "function" === typeof a ? a : null
    }
      , Sk = (a=!1,b="/r20100101")=>(a ? "http:" : "https:") + "//www.googletagservices.com/activeview/js/current/osd.js?cb=" + encodeURIComponent(b);
    function Tk() {
        const a = N()
          , b = a.__google_ad_urls;
        if (!b)
            return a.__google_ad_urls = new Uk(a);
        try {
            if (0 <= b.getOseId())
                return b
        } catch (c) {}
        try {
            return a.__google_ad_urls = new Uk(a,b)
        } catch (c) {
            return a.__google_ad_urls = new Uk(a)
        }
    }
    function Vk(a) {
        var b = a.o ? N() : p;
        a = Af(Wk);
        b = b || p;
        b.google_osd_loaded ? a = !1 : (Jf(b.document, a),
        a = b.google_osd_loaded = !0);
        a && Ih()
    }
    class Uk {
        constructor(a, b) {
            this.l = b && b.l ? b.l : 0;
            this.m = b ? b.m : "";
            this.j = b && b.j ? b.j : [];
            this.o = !0;
            if (b)
                for (a = 0; a < this.j.length; ++a)
                    this.j[a].o = !0
        }
        getNewBlocks(a, b) {
            let c = this.j.length;
            for (let d = 0; d < c; d++) {
                let e = this.j[d];
                !e.m && e.j && (e.m = !0,
                a(e.j, e.A, e.H, e.l, void 0, e.o, e.C, e.G, e.D))
            }
            b && ((N() || p).google_osd_amcb = a)
        }
        setupOse(a) {
            if (this.getOseId())
                return this.getOseId();
            let b = Ik();
            if (!b)
                return 0;
            this.l = b;
            this.m = String(a || 0);
            return this.getOseId()
        }
        getOseId() {
            return window && Math.random && navigator ? this.l : -1
        }
        getCorrelator() {
            return this.m
        }
        numBlocks() {
            return this.j.length
        }
        registerAdBlock(a, b, c, d, e, f, g=()=>{}
        ) {
            e = Rk();
            f = bj() || -1;
            let h = p.pageYOffset;
            0 <= h || (h = -1);
            e && d ? e(d, a, b, !1, void 0, !1, g, f, h) : (c = new Xk(a,b,c,d,g,f,h),
            this.j.push(c),
            Qk(d, c.v, !0),
            Wk || (nh(p, "//pagead2.googlesyndication.com/pagead/gen_204?id=osd&r=om" + `&rs=${b}` + `&req=${a}`),
            Wk = Sk(!1, "/r20190131")),
            Vk(this))
        }
        unloadAdBlock(a, b, c=!1) {
            b = this.o ? N() : window;
            void 0 !== b.Goog_Osd_UnloadAdBlock && b.Goog_Osd_UnloadAdBlock(a);
            c && (c = Gg(this.j, d=>d.j == a)) && Qk(a, c.v, !1)
        }
        setLoadOsdJsOnPubWindow(a) {
            this.o = a
        }
    }
    var Wk = ""
      , Kk = 0
      , Jk = 0
      , Xk = class {
        constructor(a, b, c, d, e=sa, f=-1, g=-1) {
            this.A = a;
            this.H = b;
            this.j = d;
            this.o = this.m = this.l = !1;
            this.C = e;
            this.G = f;
            this.D = g;
            this.v = ()=>this.l = !0
        }
    }
    ;
    ba("Goog_AdSense_getAdAdapterInstance", Tk, void 0);
    ba("Goog_AdSense_OsdAdapter", Uk, void 0);
    function Yk() {
        let a = N();
        const b = a.__google_ad_urls;
        return b ? b : a.__google_ad_urls = new Zk
    }
    class Zk {
        constructor() {}
        getNewBlocks() {}
        setupOse() {}
        getOseId() {
            return -1
        }
        getCorrelator() {
            return ""
        }
        numBlocks() {
            return 0
        }
        registerAdBlock() {}
        unloadAdBlock() {}
        setLoadOsdJsOnPubWindow() {}
    }
    ;let $k = null;
    var al = (a,b)=>{
        let c = 0
          , d = a
          , e = 0;
        for (; a && a != a.parent; )
            if (a = a.parent,
            e++,
            Ff(a))
                d = a,
                c = e;
            else if (b)
                break;
        return {
            win: d,
            level: c
        }
    }
      , bl = ()=>{
        $k || ($k = al(p, !0).win);
        return $k
    }
    ;
    var cl = (a,b,c,d)=>{
        c = c || a.google_ad_width;
        d = d || a.google_ad_height;
        if (a && a.top == a)
            return !1;
        const e = b.documentElement;
        if (c && d) {
            let f = 1
              , g = 1;
            a.innerHeight ? (f = a.innerWidth,
            g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth,
            g = e.clientHeight) : b.body && (f = b.body.clientWidth,
            g = b.body.clientHeight);
            if (g > 2 * d || f > 2 * c)
                return !1
        }
        return !0
    }
      , dl = (a,b)=>{
        Gh(a, (c,d)=>{
            b[d] = c
        }
        )
    }
      , el = a=>{
        let b = a.location.href;
        if (a == a.top)
            return {
                url: b,
                qb: !0
            };
        let c = !1;
        const d = a.document;
        d && d.referrer && (b = d.referrer,
        a.parent == a.top && (c = !0));
        (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 == b.indexOf(a) && (c = !1,
        b = a);
        return {
            url: b,
            qb: c
        }
    }
      , fl = ()=>{
        var a = N();
        if (a == a.top)
            return 0;
        for (; a && a != a.top && Ff(a); a = a.parent) {
            if (a.sf_)
                return 2;
            if (a.$sf)
                return 3;
            if (a.inGptIF)
                return 4;
            if (a.inDapIF)
                return 5
        }
        return 1
    }
    ;
    var gl = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    }
      , hl = /(corp|borg)\.google\.com:\d+$/;
    var il = a=>{
        a = a.google_reactive_ad_format;
        return ob(a) ? "" + a : null
    }
      , jl = a=>!!il(a) || null != a.google_pgb_reactive
      , kl = a=>{
        a = il(a);
        return 26 == a || 27 == a || 30 == a || 16 == a || 40 == a
    }
    ;
    const ll = a=>{
        const b = /[a-zA-Z0-9._~-]/
          , c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
            if (!d.match(c)) {
                const e = decodeURIComponent(d);
                if (e.match(b))
                    return e
            }
            return d.toUpperCase()
        })
    }
      , ml = a=>{
        let b = "";
        const c = /[/%?&=]/;
        for (let d = 0; d < a.length; ++d) {
            const e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    }
    ;
    function nl(a) {
        B(this, a, ol, null)
    }
    v(nl, z);
    function pl(a) {
        B(this, a, null, null)
    }
    v(pl, z);
    function ql(a) {
        B(this, a, null, null)
    }
    v(ql, z);
    var ol = [3];
    function rl(a) {
        B(this, a, sl, null)
    }
    v(rl, z);
    var sl = [2];
    function tl(a) {
        B(this, a, null, null)
    }
    v(tl, z);
    function ul(a) {
        B(this, a, vl, null)
    }
    v(ul, z);
    var vl = [1];
    function wl(a) {
        B(this, a, xl, null)
    }
    v(wl, z);
    var xl = [4];
    function yl(a) {
        B(this, a, null, null)
    }
    v(yl, z);
    yl.prototype.T = function() {
        return J(this, wl, 1)
    }
    ;
    yl.prototype.l = function() {
        return D(this, 2)
    }
    ;
    function zl(a) {
        B(this, a, null, Al)
    }
    v(zl, z);
    function Bl(a) {
        B(this, a, null, null)
    }
    v(Bl, z);
    function Cl(a) {
        B(this, a, null, null)
    }
    v(Cl, z);
    function Dl(a) {
        B(this, a, null, null)
    }
    v(Dl, z);
    var Al = [[1, 2, 3]];
    function El(a) {
        B(this, a, null, null)
    }
    v(El, z);
    function Fl(a) {
        B(this, a, Gl, null)
    }
    v(Fl, z);
    function Hl(a) {
        B(this, a, Il, null)
    }
    v(Hl, z);
    var Gl = [2]
      , Il = [2];
    function Jl(a) {
        B(this, a, Kl, null)
    }
    v(Jl, z);
    var Kl = [4];
    function Ll(a) {
        B(this, a, null, Ml)
    }
    v(Ll, z);
    var Ml = [[1, 2]];
    function Nl(a) {
        B(this, a, Ol, null)
    }
    v(Nl, z);
    var Ol = [1, 2];
    function Pl(a) {
        B(this, a, Ql, null)
    }
    v(Pl, z);
    var Ql = [2];
    function Rl(a) {
        B(this, a, Sl, null)
    }
    v(Rl, z);
    var Sl = [3, 4];
    function Tl(a) {
        B(this, a, null, null)
    }
    v(Tl, z);
    function Ul(a) {
        B(this, a, null, null)
    }
    v(Ul, z);
    function Vl() {
        var a = new Ul;
        return I(a, 2, 1)
    }
    ;function Wl(a) {
        B(this, a, Xl, null)
    }
    v(Wl, z);
    var Xl = [6, 7, 9, 10, 11];
    Wl.prototype.T = function() {
        return J(this, wl, 1)
    }
    ;
    Wl.prototype.l = function() {
        return D(this, 2)
    }
    ;
    function Yl(a) {
        B(this, a, Zl, null)
    }
    v(Yl, z);
    var Zl = [4];
    function $l(a) {
        B(this, a, null, null)
    }
    v($l, z);
    function am(a) {
        B(this, a, bm, null)
    }
    v(am, z);
    function cm(a) {
        B(this, a, null, null)
    }
    v(cm, z);
    var bm = [1];
    function dm(a) {
        B(this, a, null, null)
    }
    v(dm, z);
    function em(a) {
        B(this, a, null, null)
    }
    v(em, z);
    function fm(a) {
        B(this, a, gm, null)
    }
    v(fm, z);
    var gm = [2];
    function hm(a) {
        B(this, a, im, null)
    }
    v(hm, z);
    function jm(a) {
        B(this, a, null, null)
    }
    v(jm, z);
    function km(a) {
        B(this, a, lm, null)
    }
    v(km, z);
    function mm(a) {
        B(this, a, null, null)
    }
    v(mm, z);
    function nm(a) {
        B(this, a, null, null)
    }
    v(nm, z);
    function om(a) {
        B(this, a, null, null)
    }
    v(om, z);
    function pm(a) {
        B(this, a, null, null)
    }
    v(pm, z);
    function qm(a) {
        B(this, a, null, null)
    }
    v(qm, z);
    function rm(a) {
        B(this, a, null, null)
    }
    v(rm, z);
    var im = [1, 2, 5, 7]
      , lm = [2, 5, 6, 11];
    function sm(a) {
        return J(a, om, 13)
    }
    function tm(a) {
        return J(a, qm, 15)
    }
    ;var um = (a,b)=>{
        a = D(a, 2);
        if (!a)
            return !1;
        for (let c = 0; c < a.length; c++)
            if (a[c] == b)
                return !0;
        return !1
    }
    ;
    const wm = (a,b)=>{
        a = ml(ll(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        const c = Zf(a)
          , d = vm(a);
        return b.find(e=>{
            const f = null != D(e, 7) ? D(J(e, mm, 7), 1) : D(e, 1);
            e = null != D(e, 7) ? D(J(e, mm, 7), 2) : 2;
            if ("number" !== typeof f)
                return !1;
            switch (e) {
            case 1:
                return f == c;
            case 2:
                return d[f] || !1
            }
            return !1
        }
        ) || null
    }
      , vm = a=>{
        const b = {};
        for (; ; ) {
            b[Zf(a)] = !0;
            if (!a)
                return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    }
    ;
    function xm(a) {
        const b = [].slice.call(arguments).filter(fb(e=>null === e));
        if (!b.length)
            return null;
        let c = []
          , d = {};
        b.forEach(e=>{
            c = c.concat(e.Kb || []);
            d = Object.assign(d, e.vb)
        }
        );
        return new ym(c,d)
    }
    function zm(a) {
        switch (a) {
        case 1:
            return new ym(null,{
                google_ad_semantic_area: "mc"
            });
        case 2:
            return new ym(null,{
                google_ad_semantic_area: "h"
            });
        case 3:
            return new ym(null,{
                google_ad_semantic_area: "f"
            });
        case 4:
            return new ym(null,{
                google_ad_semantic_area: "s"
            });
        default:
            return null
        }
    }
    class ym {
        constructor(a, b) {
            this.Kb = a;
            this.vb = b
        }
    }
    ;const Am = {
        ["google_ad_channel"]: !0,
        ["google_ad_host"]: !0
    };
    var Bm = (a,b)=>{
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        W("ama", b, .01)
    }
      , Cm = a=>{
        const b = {};
        Vf(Am, (c,d)=>{
            d in a && (b[d] = a[d])
        }
        );
        return b
    }
    ;
    var Dm = a=>{
        try {
            a.localStorage.removeItem("google_ama_config")
        } catch (b) {
            Bm(a, {
                lserr: 1
            })
        }
    }
    ;
    function Em(a) {
        B(this, a, null, null)
    }
    v(Em, z);
    function Fm(a, b) {
        if (b) {
            var c = b.adClient;
            if ("string" === typeof c && c) {
                a.Ja = c;
                a.l = !!b.adTest;
                c = b.pubVars;
                ua(c) && (a.B = c);
                if (Array.isArray(b.fillMessage)) {
                    a.o = {};
                    for (d of b.fillMessage)
                        a.o[d.key] = d.value
                }
                var d = !0
            } else
                d = !1
        } else
            d = !1;
        return d && a.A(b)
    }
    class Gm {
        constructor() {
            this.o = this.B = this.l = this.Ja = null
        }
        A() {
            return !0
        }
    }
    ;class Hm extends Gm {
        constructor() {
            super();
            this.m = !1;
            this.j = null;
            this.v = !1
        }
        A(a) {
            this.m = !!a.enableAma;
            var b = a.amaConfig;
            if (b)
                try {
                    var c = oe(hm, b)
                } catch (d) {
                    c = null
                }
            else
                c = null;
            this.j = c;
            Array.isArray(a.fillMessage) && (this.v = !0);
            return !0
        }
    }
    ;var Km = (a,b)=>{
        const c = new Im(a,1E3,b);
        return ()=>Jm(c)
    }
    ;
    function Jm(a) {
        if (a.j)
            return !1;
        if (null == a.l)
            return Lm(a),
            !0;
        const b = a.l + a.o - (new Date).getTime();
        if (1 > b)
            return Lm(a),
            !0;
        Mm(a, b);
        return !0
    }
    function Lm(a) {
        a.l = (new Date).getTime();
        a.m()
    }
    function Mm(a, b) {
        a.j = !0;
        a.v.setTimeout(()=>{
            a.j = !1;
            Lm(a)
        }
        , b)
    }
    class Im {
        constructor(a, b, c) {
            this.v = a;
            this.o = b;
            this.m = c;
            this.l = null;
            this.j = !1
        }
    }
    ;function Nm(a, b) {
        a.A ? b(a.m) : a.l.push(b)
    }
    function Om(a, b) {
        a.A = !0;
        a.m = b;
        a.l.forEach(c=>{
            c(a.m)
        }
        );
        a.l = []
    }
    class Pm {
        constructor(a) {
            this.j = a;
            this.l = [];
            this.A = !1;
            this.v = this.m = null;
            this.C = Km(a, ()=>{
                if (null != this.v) {
                    var b = Qj(this.j, !0) - this.v;
                    1E3 < b && Om(this, b)
                }
            }
            );
            this.o = null
        }
        P(a, b) {
            null == a ? (this.v = a = Qj(this.j, !0),
            this.j.addEventListener("scroll", this.C),
            null != b && b(a)) : this.o = this.j.setTimeout(()=>{
                this.P(void 0, b)
            }
            , a)
        }
        Qa() {
            null != this.o && this.j.clearTimeout(this.o);
            this.j.removeEventListener("scroll", this.C);
            this.l = [];
            this.m = null
        }
    }
    ;function Qm(a) {
        var b = [], c;
        for (c in a.j)
            void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.l[c]);
        return b
    }
    function Rm(a) {
        var b = [], c;
        for (c in a.j)
            void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.j[c]);
        return b
    }
    var Sm = class {
        constructor() {
            this.j = {};
            this.l = {}
        }
        set(a, b) {
            this.j[a] = b;
            this.l[a] = a
        }
        get(a, b) {
            return void 0 !== this.j[a] ? this.j[a] : b
        }
    }
    ;
    function Tm(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }
    function Um(a) {
        a = Qa(a, b=>new ch(b.top,b.right,b.bottom,b.left));
        a = Vm(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }
    function Vm(a) {
        if (!a.length)
            throw Error("pso:box:m:nb");
        return Ra(a.slice(1), (b,c)=>{
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }
        , a[0].clone())
    }
    ;function Wm(a, b, c) {
        return {
            top: a.j - c,
            right: a.m + a.l + b,
            bottom: a.j + c,
            left: a.m - b
        }
    }
    class Xm {
        constructor(a, b, c) {
            this.m = a;
            this.j = b;
            this.l = c
        }
    }
    ;class Ym {
        constructor(a, b, c) {
            this.j = a;
            this.l = b;
            this.m = c
        }
    }
    ;class Zm {
        constructor(a) {
            this.j = a
        }
        P() {
            const a = this.j.document.createElement("SCRIPT");
            a.src = "//www.google.com/adsense/search/ads.js";
            a.setAttribute("async", "async");
            this.j.document.head.appendChild(a);
            (function(b, c) {
                b[c] = b[c] || function() {
                    (b[c].q = b[c].q || []).push(arguments)
                }
                ;
                b[c].t = 1 * new Date
            }
            )(this.j, "_googCsa")
        }
    }
    ;class $m {
        j() {}
    }
    ;function an(a, b) {
        bn(a).forEach(b, void 0)
    }
    function bn(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++)
            b.push(a[d]);
        return b
    }
    ;function cn(a) {
        var b = [];
        an(a.getElementsByTagName("p"), function(c) {
            100 <= dn(c) && b.push(c)
        });
        return b
    }
    function dn(a) {
        if (3 == a.nodeType)
            return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName)
            return 0;
        var b = 0;
        an(a.childNodes, function(c) {
            b += dn(c)
        });
        return b
    }
    function en(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }
    function fn(a, b) {
        if (null == a.j)
            return b;
        switch (a.j) {
        case 1:
            return b.slice(1);
        case 2:
            return b.slice(0, b.length - 1);
        case 3:
            return b.slice(1, b.length - 1);
        case 0:
            return b;
        default:
            throw Error("Unknown ignore mode: " + a.j);
        }
    }
    function gn(a, b) {
        var c = [];
        try {
            c = b.querySelectorAll(a.o)
        } catch (g) {}
        if (!c.length)
            return [];
        b = Xa(c);
        b = fn(a, b);
        "number" === typeof a.l && (c = a.l,
        0 > c && (c += b.length),
        b = 0 <= c && c < b.length ? [b[c]] : []);
        if ("number" === typeof a.m) {
            c = [];
            for (var d = 0; d < b.length; d++) {
                var e = cn(b[d])
                  , f = a.m;
                0 > f && (f += e.length);
                0 <= f && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }
    var hn = class {
        constructor(a, b, c, d) {
            this.o = a;
            this.l = b;
            this.m = c;
            this.j = d
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.o,
                occurrenceIndex: this.l,
                paragraphIndex: this.m,
                ignoreMode: this.j
            })
        }
    }
    ;
    var jn = (a,b)=>{
        try {
            const c = b.document.documentElement.getBoundingClientRect()
              , d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (c) {
            return null
        }
    }
      , kn = (a,b)=>!!a.google_ad_resizable && !a.google_reactive_ad_format && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && Sh(b) == b
      , ln = (a,b,c)=>{
        a = a.style;
        "rtl" == b ? Z.F().j(251, !1) ? a.setProperty("margin-right", c, "important") : a.marginRight = c : Z.F().j(251, !1) ? a.setProperty("margin-left", c, "important") : a.marginLeft = c
    }
    ;
    const mn = (a,b,c)=>{
        a = jn(b, a);
        return "rtl" == c ? -a.x : a.x
    }
    ;
    var nn = (a,b)=>{
        b = b.parentElement;
        return b ? (a = Kf(b, a)) ? a.direction : "" : ""
    }
      , on = (a,b,c)=>{
        if (0 === mn(a, b, c))
            return !1;
        ln(b, c, "0px");
        const d = mn(a, b, c);
        ln(b, c, -1 * d + "px");
        a = mn(a, b, c);
        0 !== a && a !== d && ln(b, c, d / (a - d) * d + "px");
        return !0
    }
    ;
    function pn(a) {
        if (1 != a.nodeType)
            var b = !1;
        else if (b = "INS" == a.tagName)
            a: {
                b = ["adsbygoogle-placeholder"];
                a = a.className ? a.className.split(/\s+/) : [];
                for (var c = {}, d = 0; d < a.length; ++d)
                    c[a[d]] = !0;
                for (d = 0; d < b.length; ++d)
                    if (!c[b[d]]) {
                        b = !1;
                        break a
                    }
                b = !0
            }
        return b
    }
    function qn(a) {
        return bn(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    }
    ;function rn(a, b) {
        a = zf(new mf(a), "DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }
    function sn(a, b, c) {
        switch (c) {
        case 0:
            b.parentNode && b.parentNode.insertBefore(a, b);
            break;
        case 3:
            if (c = b.parentNode) {
                var d = b.nextSibling;
                if (d && d.parentNode != c)
                    for (; d && 8 == d.nodeType; )
                        d = d.nextSibling;
                c.insertBefore(a, d)
            }
            break;
        case 1:
            b.insertBefore(a, b.firstChild);
            break;
        case 2:
            b.appendChild(a)
        }
        pn(b) && (b.setAttribute("data-init-display", b.style.display),
        b.style.display = "block")
    }
    function tn(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            pn(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    }
    ;var vn = (a,b,c,d=0)=>{
        var e = un(b, c, d);
        if (e.P) {
            for (c = b = e.P; c = e.Sa(c); )
                b = c;
            e = {
                anchor: b,
                position: e.Ya
            }
        } else
            e = {
                anchor: b,
                position: c
            };
        a["google-ama-order-assurance"] = d;
        sn(a, e.anchor, e.position)
    }
      , wn = (a,b,c,d=0)=>{
        Z.F().j(313, !1) ? vn(a, b, c, d) : sn(a, b, c)
    }
    ;
    function un(a, b, c) {
        const d = f=>{
            f = xn(f);
            return f = null == f ? !1 : c < f
        }
          , e = f=>{
            f = xn(f);
            return f = null == f ? !1 : c > f
        }
        ;
        switch (b) {
        case 0:
            return {
                P: yn(a.previousSibling, d),
                Sa: f=>yn(f.previousSibling, d),
                Ya: 0
            };
        case 2:
            return {
                P: yn(a.lastChild, d),
                Sa: f=>yn(f.previousSibling, d),
                Ya: 0
            };
        case 3:
            return {
                P: yn(a.nextSibling, e),
                Sa: f=>yn(f.nextSibling, e),
                Ya: 3
            };
        case 1:
            return {
                P: yn(a.firstChild, e),
                Sa: f=>yn(f.nextSibling, e),
                Ya: 3
            }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }
    function xn(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }
    function yn(a, b) {
        return a && b(a) ? a : null
    }
    ;function zn(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c]
              , e = Ad(d.yb);
            a[e] = d.value
        }
    }
    function An(a, b, c, d, e, f) {
        a = Bn(a, e);
        a.V.setAttribute("data-ad-format", d ? d : "auto");
        Cn(a, b, c, f);
        return a
    }
    function Dn(a, b, c=null) {
        a = Bn(a, {});
        Cn(a, b, null, c);
        return a
    }
    function Cn(a, b, c, d) {
        var e = [];
        if (d = d && d.Kb)
            a.pa.className = d.join(" ");
        a = a.V;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }
    function Bn(a, b) {
        var c = rn(a, b.clearBoth || !1)
          , d = c.style;
        d.textAlign = "center";
        b.Xa && zn(d, b.Xa);
        a = zf(new mf(a), "INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.Fb && (d.marginTop = b.Fb);
        b.fb && (d.marginBottom = b.fb);
        b.ra && zn(d, b.ra);
        c.appendChild(a);
        return {
            pa: c,
            V: a
        }
    }
    function En(a, b, c) {
        b.setAttribute("data-adsbygoogle-status", "reserved");
        b.className += " adsbygoogle-noablate";
        var d = {
            element: b
        };
        c = c && c.vb;
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }
    function Fn(a) {
        var b = qn(a.document);
        Oa(b, function(c) {
            var d = Gn(a, c), e;
            if (e = d)
                e = (e = jn(c, a)) ? e.y : 0,
                e = !(e < Y(a).clientHeight);
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)),
            c.removeAttribute("height"),
            c.style.removeProperty("height"),
            c.removeAttribute("width"),
            c.style.removeProperty("width"),
            En(a, c))
        })
    }
    function Gn(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b])
            return null;
        a = a[b];
        b = {};
        for (let c in Ne)
            a[Ne[c]] && (b[Ne[c]] = a[Ne[c]]);
        return b
    }
    ;function Hn(a) {
        if (!a)
            return null;
        var b = D(a, 7);
        if (D(a, 1) || D(a, 3) || 0 < D(a, 4).length) {
            var c = D(a, 3)
              , d = D(a, 1)
              , e = D(a, 4);
            b = D(a, 2);
            var f = D(a, 5);
            a = In(D(a, 6));
            var g = "";
            d && (g += d);
            c && (g += "#" + en(c));
            if (e)
                for (c = 0; c < e.length; c++)
                    g += "." + en(e[c]);
            b = (e = g) ? new hn(e,b,f,a) : null
        } else
            b = b ? new hn(b,D(a, 2),D(a, 5),In(D(a, 6))) : null;
        return b
    }
    var Jn = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };
    function In(a) {
        return null == a ? a : Jn[a]
    }
    function Kn(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = D(a[c], 1)
              , e = D(a[c], 2);
            if (d && null != e) {
                var f = {};
                f.yb = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }
    function Ln(a, b) {
        var c = {};
        a && (c.Fb = D(a, 1),
        c.fb = D(a, 2),
        c.clearBoth = !!de(a, 3));
        b && (c.Xa = Kn(L(b, El, 3)),
        c.ra = Kn(L(b, El, 4)));
        return c
    }
    var Mn = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    }
      , Nn = {
        0: 1,
        1: 2,
        2: 3,
        3: 4
    };
    class On extends $m {
        constructor(a, b) {
            super();
            this.m = a;
            this.l = b
        }
        j() {
            const a = Hn(this.l);
            return a ? gn(a, this.m.document).map(b=>b.textContent).filter(b=>!!b) : []
        }
    }
    ;class Pn extends $m {
        constructor(a, b) {
            super();
            this.m = a;
            this.l = b
        }
        j() {
            return (new URL(this.l)).searchParams.getAll(this.m)
        }
    }
    ;function Qn(a, b) {
        return b.map(c=>{
            {
                const d = J(c, wl, 1);
                if (d)
                    c = new On(a.l,d);
                else if (c = D(c, 2))
                    c = new Pn(c,a.j);
                else
                    throw Error("Unable to get extractor for SearchQueryIdentifier");
            }
            return c
        }
        )
    }
    class Rn {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    }
    ;class Sn {
        constructor(a, b, c) {
            this.m = a;
            this.l = b;
            this.j = c
        }
        T() {
            return this.m
        }
        Ta() {
            return this.j.l
        }
    }
    ;function Tn(a, b, c) {
        a.l.push(b);
        a.j.push(c)
    }
    function Un(a) {
        if (!a.j.length)
            return null;
        const b = a.j.reduce((d,e)=>Math.min(d, e.left), Number.MAX_VALUE)
          , c = a.j.reduce((d,e)=>Math.max(d, e.right), Number.MIN_VALUE);
        a = a.j.reduce((d,e)=>Math.max(d, e.bottom), Number.MIN_VALUE);
        return new Xm(b,a,c - b)
    }
    class Vn {
        constructor() {
            this.l = [];
            this.j = []
        }
    }
    function Wn(a) {
        return 2 != a.length ? !1 : !!a[0].parentElement && !!a[1].parentElement && a[0].parentElement == a[1].parentElement
    }
    function Xn(a, b) {
        return a.length ? b(a) ? a : a.every(c=>!!c.parentElement) ? Xn(a.map(c=>c.parentElement), b) : null : null
    }
    ;function Yn(a) {
        const b = Y(a.j).clientHeight || 0;
        return Zn(a, c=>{
            c = c.j;
            var d;
            if (d = c.j >= b) {
                d = a.o;
                a: {
                    for (e of d.j)
                        if (Tm(Wm(c, d.l, d.m), e)) {
                            var e = !0;
                            break a
                        }
                    e = !1
                }
                d = !e
            }
            return d
        }
        )
    }
    function $n(a, b) {
        var c = J(a.m, Fl, 2);
        if (!c)
            return null;
        var d = D(c, 1);
        if (!d)
            return null;
        var e = a.j.document.createElement(d);
        zn(e.style, Kn(L(c, El, 2)));
        e.style.width = b.Ta() + "px";
        d = a.j.document.createElement("div");
        e.appendChild(d);
        e = [e];
        if (c = J(c, Hl, 3)) {
            var f = D(c, 1);
            f ? (a = a.j.document.createElement(f),
            zn(a.style, Kn(L(c, El, 2)))) : a = null
        } else
            a = null;
        if (a)
            switch (b.l) {
            case 0:
            case 3:
                e.push(a);
                break;
            case 1:
            case 2:
                e.unshift(a)
            }
        return {
            elements: e,
            container: d
        }
    }
    function ao(a) {
        const b = Yn(a);
        if (!b)
            return null;
        a = $n(a, b);
        if (!a)
            return null;
        a.elements.forEach(c=>{
            sn(c, b.T(), b.l)
        }
        );
        return a.container
    }
    function Zn(a, b) {
        const c = bo(a);
        for (let f = 0; f < c.length; ++f) {
            a: {
                var d = f;
                var e = c.length;
                const g = D(a.m, 4);
                for (let h = 0; h < g.length; ++h)
                    switch (g[h]) {
                    case 1:
                        if (d < e - 1) {
                            d = !0;
                            break a
                        }
                        break;
                    case 2:
                        if (d == e - 1) {
                            d = !0;
                            break a
                        }
                    }
                d = !1
            }
            if (d && (d = c[f + 1] || c[f - 1]) && (e = c[f],
            e = e.l.length ? e.l[e.l.length - 1] : null,
            d = d.l[0] || null,
            d = e && d ? (d = Xn([e, d], Wn)) ? d[0] : null : null,
            d && (e = Un(c[f]))) && (d = new Sn(d,3,e),
            b(d)))
                return d
        }
        return null
    }
    function bo(a) {
        if (0 == a.l.length)
            return [];
        const b = a.l.map(d=>d.getBoundingClientRect())
          , c = [new Vn];
        Tn(c[0], a.l[0], b[0]);
        for (let d = 1; d < b.length; ++d)
            co(b[d - 1], b[d]) || c.push(new Vn),
            Tn(c[c.length - 1], a.l[d], b[d]);
        return c
    }
    class eo {
        constructor(a, b, c, d, e) {
            this.j = a;
            this.o = b;
            this.v = c;
            this.m = d;
            this.l = e.slice(0)
        }
    }
    function co(a, b) {
        return a.top < b.bottom && b.top < a.bottom
    }
    ;function fo(a, b, c) {
        return Tm({
            top: a.j.top - (c + 1),
            right: a.j.right + (c + 1),
            bottom: a.j.bottom + (c + 1),
            left: a.j.left - (c + 1)
        }, b.j)
    }
    function go(a) {
        if (!a.length)
            return null;
        const b = Um(a.map(c=>c.j));
        a = a.reduce((c,d)=>c + d.l, 0);
        return new ho(b,a)
    }
    class ho {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    }
    ;var no = (a,b)=>{
        const c = Xa(b.document.querySelectorAll(".google-auto-placed"))
          , d = io(b)
          , e = jo(b)
          , f = ko(b)
          , g = lo(b)
          , h = Xa(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
          , k = Xa(b.document.querySelectorAll("div.googlepublisherpluginad"));
        let l = Xa(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")).concat(Xa(b.document.querySelectorAll("ins.adsbygoogle")));
        b = [];
        for (const [r,t] of [[a.xa, c], [a.ha, d], [a.ad, e], [a.ya, f], [a.za, g], [a.Zc, h], [a.$c, k]])
            a = t,
            !1 === r ? b = b.concat(a) : l = l.concat(a);
        var m;
        a = mo(l);
        b = mo(b);
        a = a.slice(0);
        for (m of b)
            for (b = 0; b < a.length; b++)
                (m.contains(a[b]) || a[b].contains(m)) && a.splice(b, 1);
        return m = a
    }
    ;
    const oo = a=>{
        try {
            return Pa(Qa(a.googletag.pubads().getSlots(), b=>a.document.getElementById(b.getSlotElementId())), b=>null != b)
        } catch (b) {}
        return null
    }
      , io = a=>Xa(a.document.querySelectorAll('ins.adsbygoogle[data-anchor-shown="true"]'))
      , jo = a=>Xa(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]"))
      , ko = a=>(oo(a) || Xa(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(Xa(a.document.querySelectorAll("iframe[id^=google_ads_iframe]")))
      , lo = a=>Xa(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var mo = a=>{
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    }
    ;
    var po = T(453, no)
      , qo = T(454, (a,b)=>{
        const c = Xa(b.document.querySelectorAll(".google-auto-placed"))
          , d = io(b)
          , e = jo(b)
          , f = ko(b)
          , g = lo(b)
          , h = Xa(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"));
        b = Xa(b.document.querySelectorAll("div.googlepublisherpluginad"));
        return mo((!0 === a.xa ? c : []).concat(!0 === a.ha ? d : [], !0 === a.ad ? e : [], !0 === a.ya ? f : [], !0 === a.za ? g : [], !0 === a.Zc ? h : [], !0 === a.$c ? b : []))
    }
    );
    function ro(a, b, c) {
        const d = so(a);
        b = to(d, b, c);
        return new uo(a,d,b)
    }
    function vo(a) {
        return a.j.map(b=>b.va)
    }
    function wo(a) {
        return a.j.reduce((b,c)=>b + c.va.bottom - c.va.top, 0)
    }
    class uo {
        constructor(a, b, c) {
            this.o = a;
            this.j = b.slice(0);
            this.m = c.slice(0);
            this.l = null
        }
    }
    function so(a) {
        const b = po({
            ha: !1
        }, a)
          , c = Vj(a)
          , d = Uj(a);
        return b.map(e=>{
            var f = e.getBoundingClientRect();
            return f = (e = !!e.className && -1 != e.className.indexOf("google-auto-placed")) || 1 < (f.bottom - f.top) * (f.right - f.left) ? {
                va: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                Wg: e ? 1 : 0
            } : null
        }
        ).filter(fb(e=>null === e))
    }
    function to(a, b, c) {
        return void 0 != b && a.length <= (void 0 != c ? c : 8) ? xo(a, b) : Qa(a, d=>new ho(d.va,1))
    }
    function xo(a, b) {
        a = Qa(a, d=>new ho(d.va,1));
        const c = [];
        for (; 0 < a.length; ) {
            let d = a.pop()
              , e = !0;
            for (; e; ) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (fo(d, a[f], b)) {
                        d = go([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    }
    ;function yo(a) {
        const b = [];
        L(a.j, Nl, 2).forEach(c=>{
            Ya(b, zo(a, c))
        }
        );
        return b
    }
    function zo(a, b) {
        let c = Ao(a, b);
        if (!c)
            return [];
        const d = D(b, 3);
        d && (c = d.replace("%s", c));
        const e = [];
        L(b, Jl, 1).forEach(f=>{
            var g;
            g = (g = J(f, wl, 1)) ? (g = Hn(g)) ? gn(g, a.l.document) : [] : [];
            g.length && e.push(new eo(a.l,a.o,c,f,g))
        }
        );
        return e
    }
    function Ao(a, b) {
        a = Qn(new Rn(a.l,a.v), L(b, Ll, 2));
        return [].concat.apply([], a.map(c=>c.j())).filter(c=>!!c)[0] || null
    }
    class Bo {
        constructor(a, b, c, d, e) {
            this.l = a;
            this.v = b;
            this.j = c;
            this.m = d;
            this.o = e
        }
    }
    ;var Co = class {
        constructor(a) {
            this.j = {};
            this.l = {};
            if (a)
                for (var b = 0; b < a.length; ++b)
                    this.add(a[b])
        }
        add(a) {
            this.j[a] = !0;
            this.l[a] = a
        }
        contains(a) {
            return !!this.j[a]
        }
    }
    ;
    function Do(a) {
        B(this, a, null, null)
    }
    v(Do, z);
    function Eo(a) {
        B(this, a, null, null)
    }
    v(Eo, z);
    function Fo(a) {
        B(this, a, null, null)
    }
    v(Fo, z);
    function Go(a) {
        B(this, a, Ho, null)
    }
    v(Go, z);
    var Ho = [5];
    function Io(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? oe(Go, b) : null
        } catch (b) {
            return null
        }
    }
    function Jo(a, b) {
        if (void 0 !== a.wa || void 0 !== a.Ra || void 0 !== a.eb || void 0 !== a.cb) {
            var c = Io(b);
            c || (c = new Go);
            void 0 !== a.wa && I(c, 2, a.wa);
            void 0 !== a.Ra && I(c, 8, a.Ra);
            void 0 !== a.eb && me(c, a.eb);
            void 0 !== a.cb && ge(c, 6, a.cb);
            a = c;
            var d = Ga() + 864E5;
            I(a, 1, d);
            c = c.A();
            try {
                b.localStorage.setItem("google_ama_settings", c)
            } catch (e) {}
        } else if ((c = Io(b)) && D(c, 1) < Ga())
            try {
                b.localStorage.removeItem("google_ama_settings")
            } catch (e) {}
    }
    ;function Ko(a, b) {
        a.l.push(b);
        b(a.j)
    }
    function Lo(a, b) {
        a.j = b;
        Oa(a.l, c=>{
            c(a.j)
        }
        )
    }
    function Mo(a, b) {
        Ko(b, c=>Lo(a, c))
    }
    class No {
        constructor(a) {
            this.j = a;
            this.l = []
        }
    }
    ;const Oo = ["-webkit-text-fill-color"];
    function Po(a) {
        if (Jd) {
            {
                const c = Kf(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d)
                        a[c[d]] = "initial";
                    a = Qo(a)
                } else
                    a = Ro()
            }
        } else
            a = Ro();
        return a
    }
    var Ro = ()=>{
        const a = {
            all: "initial"
        };
        Oa(Oo, b=>{
            a[b] = "unset"
        }
        );
        return a
    }
    ;
    function Qo(a) {
        Oa(Oo, b=>{
            delete a[b]
        }
        );
        return a
    }
    ;function So(a, b, c=!1) {
        const d = a.document.createElement("img");
        To(a, d);
        nd(d, c ? "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg" : "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg");
        Cg(d, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: null == b ? "auto" : "pointer"
        });
        b && d.addEventListener("click", e=>{
            b();
            e.stopPropagation()
        }
        );
        return d
    }
    function Uo(a, b) {
        const c = b.document.createElement("button");
        To(b, c);
        Cg(c, {
            display: "inline",
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.C));
        c.addEventListener("click", d=>{
            a.D();
            d.stopPropagation()
        }
        );
        return c
    }
    function Vo(a, b, c) {
        const d = b.document.createElement("img");
        nd(d, "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg");
        d.setAttribute("aria-label", a.A);
        To(b, d);
        Cg(d, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        d.addEventListener("click", e=>{
            c();
            e.stopPropagation()
        }
        );
        return d
    }
    function Wo(a) {
        const b = a.document.createElement("ins");
        To(a, b);
        Cg(b, {
            "float": "left",
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)"
        });
        return b
    }
    class Xo {
        constructor(a, b, c) {
            this.C = a;
            this.A = b;
            this.D = c;
            this.j = new No(!1)
        }
        m(a, b, c, d) {
            const e = So(a, d, !0)
              , f = So(a)
              , g = Uo(this, a)
              , h = Vo(this, a, c);
            a = Wo(a);
            a.appendChild(e);
            a.appendChild(f);
            a.appendChild(g);
            a.appendChild(h);
            Ko(this.j, k=>{
                Yo(e, k ? "none" : "inline");
                Yo(f, k ? "inline" : "none");
                Yo(g, k ? "inline" : "none");
                Yo(h, k ? "inline" : "none")
            }
            );
            return a
        }
        l() {
            return 40
        }
        o() {
            Lo(this.j, !1);
            return 0
        }
        v() {
            Lo(this.j, !0)
        }
    }
    function To(a, b) {
        Cg(b, Po(a));
        Cg(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#3C4043",
            "user-select": "none"
        })
    }
    function Yo(a, b) {
        Cg(a, {
            display: b
        })
    }
    ;function Zo(a, b) {
        const c = b.document.createElement("button");
        $o(a, b, c);
        b = {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "8px 0px",
            "background-color": a.l
        };
        a.j && (b["border-top"] = a.j,
        b["border-bottom"] = a.j);
        Cg(c, b);
        c.addEventListener("click", d=>{
            a.A();
            d.stopPropagation()
        }
        );
        return c
    }
    function $o(a, b, c) {
        Cg(c, Po(b));
        Cg(c, {
            "font-family": "Arial,sans-serif",
            "font-weight": a.o,
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: a.C,
            "user-select": "none",
            cursor: "pointer"
        })
    }
    class ap {
        constructor(a, b, c, d, e, f=null, g=null) {
            this.v = a;
            this.A = b;
            this.C = c;
            this.l = d;
            this.o = e;
            this.m = f;
            this.j = g
        }
    }
    ;var bp = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            return An(d.document, a, null, null, this.j, b)
        }
        m() {
            return null
        }
    }
    ;
    var cp = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            var e = 0 < L(this.j, Rl, 9).length ? L(this.j, Rl, 9)[0] : null
              , f = Ln(J(this.j, Tl, 3), e);
            if (!e)
                return null;
            if (e = D(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = zf(new mf(d), g);
                c.style.clear = f.clearBoth ? "both" : "none";
                "A" == g && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.Xa && zn(c.style, f.Xa);
                d = zf(new mf(d), "INS");
                f.ra && zn(d.style, f.ra);
                c.appendChild(d);
                f = {
                    pa: c,
                    V: d
                };
                f.V.setAttribute("data-ad-type", "text");
                f.V.setAttribute("data-native-settings-key", e);
                Cn(f, a, null, b);
                a = f
            } else
                a = null;
            return a
        }
        m() {
            var a = 0 < L(this.j, Rl, 9).length ? L(this.j, Rl, 9)[0] : null;
            if (!a)
                return null;
            a = L(a, El, 3);
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if ("height" == D(c, 1) && 0 < parseInt(D(c, 2), 10))
                    return parseInt(D(c, 2), 10)
            }
            return null
        }
    }
    ;
    class dp {
        constructor(a) {
            this.l = a
        }
        j() {
            return new ym([],{
                ["google_ad_type"]: this.l,
                ["google_reactive_ad_format"]: 26,
                ["google_ad_format"]: "fluid"
            })
        }
    }
    ;var ep = class {
        constructor(a, b) {
            this.o = a;
            this.m = b
        }
        l() {
            return this.m
        }
        j(a) {
            a = gn(this.o, a.document);
            return 0 < a.length ? a[0] : null
        }
    }
    ;
    function fp(a, b, c, d) {
        var e = a.T();
        if (!e)
            return null;
        var f = Hn(e);
        if (!f)
            return null;
        var g = a.l();
        g = Mn[g];
        var h = void 0 === g ? null : g;
        if (null === h)
            return null;
        g = (g = J(a, Tl, 3)) ? de(g, 3) : null;
        f = new ep(f,h);
        h = D(a, 10).slice(0);
        null != D(e, 5) && h.push(1);
        var k = d ? d : {};
        d = D(a, 12);
        e = null != D(a, 4) ? J(a, Ul, 4) : null;
        switch (D(a, 8)) {
        case 1:
            return k = k.Pc || null,
            new gp(f,new bp(Ln(J(a, Tl, 3), null)),k,g,0,h,e,c,b,d,a);
        case 2:
            return new gp(f,new cp(a),k.bd || new dp("text"),g,1,h,e,c,b,d,a)
        }
        return null
    }
    function hp(a, b, c) {
        const d = [];
        for (let e = 0; e < a.length; e++) {
            const f = fp(a[e], e, b, c);
            null !== f && d.push(f)
        }
        return d
    }
    function ip(a) {
        return a.m
    }
    function jp(a, b, c) {
        void 0 !== a.G.j[b] || a.G.set(b, []);
        a.G.get(b).push(c)
    }
    function kp(a) {
        return rn(a.j.document, a.C || !1)
    }
    function lp(a) {
        return a.H.m(a.j)
    }
    function mp(a, b=null, c=null) {
        return new gp(a.A,b || a.H,c || a.J,a.C,a.Wa,a.rb,a.Da,a.j,a.O,a.v,a.o,a.I,a.U)
    }
    class gp {
        constructor(a, b, c, d, e, f, g, h, k, l=null, m=null, r=null, t=null) {
            this.A = a;
            this.H = b;
            this.J = c;
            this.C = d;
            this.Wa = e;
            this.rb = f;
            this.Da = g ? g : new Ul;
            this.j = h;
            this.O = k;
            this.v = l;
            this.o = m;
            this.I = r;
            this.U = t;
            this.D = [];
            this.m = !1;
            this.G = new Sm
        }
        K() {
            return this.j
        }
        l() {
            return this.A.l()
        }
    }
    ;function np(a, b) {
        if (a.R.m)
            throw Error("AMA:AP:AP");
        wn(b, a.T(), a.R.l());
        a = a.R;
        a.m = !0;
        null != b && a.D.push(b)
    }
    var Yp = class {
        constructor(a, b, c) {
            this.R = a;
            this.j = b;
            this.N = c
        }
        T() {
            return this.j
        }
        fill(a, b) {
            var c = this.R;
            (a = c.H.l(a, b, this.j, c.j)) && np(this, a.pa);
            return a
        }
    }
    ;
    var $p = T(754, function(a, b) {
        var c = []
          , d = [];
        try {
            for (var e = [], f = 0; f < a.length; f++) {
                var g = a[f]
                  , h = g.A.j(g.j);
                h && e.push({
                    ec: g,
                    anchorElement: h
                })
            }
            for (f = 0; f < e.length; f++)
                d.push(Zp(e[f]));
            var k = Uj(b)
              , l = Vj(b);
            for (f = 0; f < d.length; f++) {
                a = l;
                b = k;
                var m = d[f].getBoundingClientRect()
                  , r = e[f];
                c.push(new Yp(r.ec,r.anchorElement,new Xm(m.left + a,m.top + b,m.right - m.left)))
            }
        } finally {
            for (f = 0; f < d.length; f++)
                tn(d[f])
        }
        return c
    });
    function Zp(a) {
        var b = a.anchorElement;
        a = a.ec;
        var c = a.C
          , d = a.j.document.createElement("div");
        d.className = "google-auto-placed";
        var e = d.style;
        e.textAlign = "center";
        e.width = "100%";
        e.height = "0px";
        e.clear = c ? "both" : "none";
        try {
            return wn(d, b, a.l()),
            d
        } catch (f) {
            throw tn(d),
            f;
        }
    }
    ;var aq = (a,b)=>{
        b = b.filter(c=>5 == D(J(c, Ul, 4), 1) && 1 == D(c, 8));
        b = hp(b, a);
        a = $p(b, a);
        a.sort((c,d)=>d.N.j - c.N.j);
        return a[0] || null
    }
    ;
    var dq = (a,b)=>{
        {
            let f = 0;
            try {
                f |= a != a.top ? 512 : 0;
                {
                    const g = Math.min(a.screen.width || 0, a.screen.height || 0);
                    var c = g ? 320 > g ? 8192 : 0 : 2048
                }
                f |= c;
                var d;
                if (d = a.navigator) {
                    var e = a.navigator.userAgent;
                    d = /Firefox/.test(e) || /Android 2/.test(e) || /iPhone OS [34]_/.test(e) || /Windows Phone (?:OS )?[67]/.test(e)
                }
                f |= d ? 1048576 : 0
            } catch (g) {
                f |= 32
            }
            c = f
        }
        d = 0;
        try {
            d |= a.innerHeight >= a.innerWidth ? 0 : 8,
            d |= Oj(a, Nj),
            d |= Pj(a)
        } catch (f) {
            d |= 32
        }
        e = !1;
        if (!Z.F().j(269, !1)) {
            switch (b) {
            case 2:
                b = bq(a.innerWidth, 0, Math.round(a.innerWidth / 320 * 50 + 15));
                e = null != cq(a, b);
                break;
            case 1:
                if (b = Z.F().j(1901, !1))
                    b = a.innerHeight,
                    b = bq(a.innerWidth, b - Math.round(a.innerWidth / 320 * 50 + 15), b),
                    b = null != cq(a, b);
                e = b
            }
            e && (d |= 16777216)
        }
        a = d;
        return c | a
    }
      , eq = (a,b)=>{
        const c = a.innerWidth
          , d = a.innerHeight;
        let e = d;
        for (; e > b; ) {
            var f = bq(c, e - b, e);
            f = cq(a, f);
            if (!f)
                return d - e;
            e = f.getBoundingClientRect().top - 1
        }
        return null
    }
      , cq = (a,b)=>{
        for (let g = 0; g < b.length; g++) {
            var c = a;
            var d = b[g]
              , e = c.document;
            e.elementFromPoint(d.x, d.y);
            var f = d.x;
            d = d.y;
            e.hasOwnProperty("_goog_efp_called_") || (e._goog_efp_called_ = e.elementFromPoint(f, d));
            if (d = e.elementFromPoint(f, d))
                if ("fixed" == zh(d))
                    c = d;
                else {
                    b: {
                        c = c.document;
                        for (d = d.offsetParent; d && d != c.body; d = d.offsetParent)
                            if ("fixed" == zh(d)) {
                                c = d;
                                break b
                            }
                        c = null
                    }
                    c = c ? c : null
                }
            else
                c = null;
            if (c)
                return c
        }
        return null
    }
      , bq = (a,b,c)=>{
        const d = [];
        for (let e = 0; 3 > e; e++)
            for (let f = 0; 3 > f; f++)
                d.push({
                    x: f / 2 * a,
                    y: b + e / 2 * (c - b)
                });
        return d
    }
    ;
    function fq(a) {
        if (a.G) {
            const b = Uj(a.j);
            if (b > a.l + 100 || b < a.l - 100)
                gq(a),
                a.l = Rj(a.j)
        }
        a.H && a.j.clearTimeout(a.H);
        a.H = a.j.setTimeout(()=>hq(a), 200)
    }
    function hq(a) {
        var b = Rj(a.j);
        a.l && a.l > b && (a.l = b);
        b = Uj(a.j);
        b >= a.l - 100 && (a.l = Math.max(a.l, b),
        iq(a))
    }
    function jq(a) {
        a.j.removeEventListener("scroll", a.J)
    }
    function gq(a) {
        a.G = !1;
        const b = a.D.o();
        switch (b) {
        case 0:
            Lo(a.v, a.A);
            break;
        case 1:
            a.m && (Cg(a.m, {
                display: "none"
            }),
            Lo(a.v, null));
            break;
        default:
            throw Error("Unhandled OnHideOutcome: " + b);
        }
    }
    function iq(a) {
        a.m || (a.m = kq(a));
        Cg(a.m, {
            display: "block"
        });
        a.G = !0;
        a.D.v();
        Lo(a.v, a.A)
    }
    function kq(a) {
        var b = eq(a.j, a.D.l() + 60);
        b = null == b ? 30 : b + 30;
        const c = a.j.document.createElement("div");
        Cg(c, Po(a.j));
        Cg(c, {
            position: "fixed",
            left: "0px",
            bottom: b + "px",
            width: "100vw",
            "text-align": "center",
            "z-index": 2147483642,
            display: "none",
            "pointer-events": "none"
        });
        a.A = a.D.m(a.j, ()=>a.o(), ()=>{
            jq(a);
            gq(a)
        }
        , ()=>{
            jq(a);
            iq(a)
        }
        );
        c.appendChild(a.A);
        a.I && (c.className = a.I);
        a.j.document.body.appendChild(c);
        return c
    }
    class lq {
        constructor(a, b, c) {
            this.j = a;
            this.D = b;
            this.A = null;
            this.v = new No(null);
            this.I = c || null;
            this.m = null;
            this.G = !1;
            this.l = 0;
            this.H = null;
            this.J = ()=>fq(this)
        }
        P() {
            this.j.addEventListener("scroll", this.J);
            this.l = Rj(this.j);
            hq(this)
        }
        o() {
            this.m && this.m.parentNode && this.m.parentNode.removeChild(this.m);
            this.m = null;
            jq(this);
            Lo(this.v, null)
        }
        C() {
            return this.v
        }
    }
    ;class mq {
        constructor(a, b, c, d) {
            this.D = a;
            this.m = b;
            this.A = c;
            this.v = d || null;
            this.j = null;
            this.l = new No(null)
        }
        P() {
            var a = kp(this.m.R);
            var b = this.A;
            var c = this.D;
            var d = c.document.createElement("div");
            $o(b, c, d);
            Cg(d, {
                display: "inline-flex",
                padding: "8px 0px",
                "background-color": b.l
            });
            if (b.m) {
                var e = c.document.createElement("img");
                nd(e, b.m);
                $o(b, c, e);
                Cg(e, {
                    margin: "0px 8px 0px 0px",
                    width: "24px",
                    height: "24px"
                })
            } else
                e = null;
            e && d.appendChild(e);
            e = c.document.createElement("span");
            $o(b, c, e);
            Cg(e, {
                "line-height": "24px"
            });
            e.appendChild(c.document.createTextNode(b.v));
            d.appendChild(e);
            b = Zo(b, c);
            b.appendChild(d);
            a.appendChild(b);
            this.v && (a.className = this.v);
            this.j = a;
            np(this.m, this.j);
            Lo(this.l, b)
        }
        o() {
            this.j && this.j.parentNode && this.j.parentNode.removeChild(this.j);
            this.j = null;
            Lo(this.l, null)
        }
        C() {
            return this.l
        }
    }
    ;function nq(a) {
        Lo(a.v, 0);
        null != a.m && (a.m.o(),
        a.m = null);
        null != a.l && (a.l.o(),
        a.l = null)
    }
    function oq(a) {
        a.l = new lq(a.D,a.I,a.H);
        a.l.P();
        Mo(a.A, a.l.C());
        Lo(a.v, 2)
    }
    class pq {
        constructor(a, b, c, d, e) {
            this.D = a;
            this.G = b;
            this.J = c;
            this.I = d;
            this.H = e;
            this.v = new No(0);
            this.A = new No(null);
            this.l = this.m = this.j = null
        }
        P() {
            this.G ? (this.m = new mq(this.D,this.G,this.J,this.H),
            this.m.P(),
            Mo(this.A, this.m.C()),
            Lo(this.v, 1),
            null == this.j && (this.j = new Pm(this.D),
            this.j.P(2E3)),
            Nm(this.j, ()=>{
                nq(this);
                oq(this)
            }
            )) : oq(this)
        }
        o() {
            nq(this);
            this.j && (this.j.Qa(),
            this.j = null)
        }
        C() {
            return this.A
        }
    }
    ;var qq = (a,b,c,d,e)=>{
        a = new pq(a,aq(a, e),new ap(b,d,"#FFF","#4A4A4A","normal"),new Xo(b,c,d),"google-dns-link-placeholder");
        a.P();
        return a
    }
    ;
    var rq = a=>a.googlefc = a.googlefc || {}
      , sq = a=>{
        a = a.googlefc = a.googlefc || {};
        return a.ccpa = a.ccpa || {}
    }
    ;
    function tq(a) {
        const b = uq(a);
        Oa(a.j.maxZIndexListeners, c=>c(b))
    }
    function uq(a) {
        a = Yf(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }
    class vq {
        constructor(a) {
            this.j = Kj(a).floatingAdsStacking
        }
    }
    function wq(a) {
        if (null == a.j) {
            {
                var b = a.l;
                var c = a.m;
                const d = b.j.nextRestrictionId++;
                b.j.maxZIndexRestrictions[d] = c;
                tq(b);
                b = d
            }
            a.j = b
        }
    }
    function xq(a) {
        if (null != a.j) {
            var b = a.l;
            delete b.j.maxZIndexRestrictions[a.j];
            tq(b);
            a.j = null
        }
    }
    class yq {
        constructor(a, b) {
            this.l = a;
            this.m = b;
            this.j = null
        }
    }
    ;function zq(a) {
        var b = sq(a.j);
        if (Aq(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
            var c = b.getLocalizedDnsText();
            b = b.getLocalizedDnsCollapseText();
            null != c && null != b && (a.l = qq(a.j, c, b, ()=>Bq(a), a.o))
        }
    }
    function Cq(a) {
        const b = rq(a.j);
        sq(a.j).overrideDnsLink = !0;
        b.callbackQueue = b.callbackQueue || [];
        b.callbackQueue.push({
            INITIAL_CCPA_DATA_READY: ()=>zq(a)
        })
    }
    function Bq(a) {
        wq(a.m);
        sq(a.j).openConfirmationDialog(b=>{
            b && a.l && (a.l.o(),
            a.l = null);
            xq(a.m)
        }
        )
    }
    class Dq {
        constructor(a, b, c) {
            this.j = a;
            this.m = new yq(b,2147483643);
            this.o = c;
            this.l = null
        }
    }
    function Aq(a, b) {
        switch (a) {
        case b.CCPA_DOES_NOT_APPLY:
        case b.OPTED_OUT:
            return !1;
        case b.NOT_OPTED_OUT:
            return !0;
        default:
            return !0
        }
    }
    ;class Eq {
        constructor(a, b, c) {
            this.C = a;
            this.A = b;
            this.j = c
        }
        m(a, b) {
            const c = a.document.createElement("ins");
            Fq(a, c);
            Cg(c, {
                display: "inline-flex",
                padding: "8px 16px",
                "background-color": "#FFF",
                "border-radius": "20px",
                "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)"
            });
            const d = a.document.createElement("img");
            nd(d, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg");
            Fq(a, d);
            Cg(d, {
                margin: "0px 8px 0px 0px",
                width: "24px",
                height: "24px",
                cursor: "pointer"
            });
            d.addEventListener("click", g=>{
                this.j();
                g.stopPropagation()
            }
            );
            const e = a.document.createElement("span");
            Fq(a, e);
            Cg(e, {
                "line-height": "24px",
                cursor: "pointer"
            });
            e.appendChild(a.document.createTextNode(this.C));
            e.addEventListener("click", g=>{
                this.j();
                g.stopPropagation()
            }
            );
            const f = a.document.createElement("img");
            nd(f, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg");
            f.setAttribute("aria-label", this.A);
            Fq(a, f);
            Cg(f, {
                margin: "0px 0px 0px 8px",
                width: "24px",
                height: "24px",
                cursor: "pointer"
            });
            f.addEventListener("click", g=>{
                b();
                g.stopPropagation()
            }
            );
            c.appendChild(d);
            c.appendChild(e);
            c.appendChild(f);
            return c
        }
        l() {
            return 40
        }
        o() {
            return 1
        }
        v() {}
    }
    function Fq(a, b) {
        Cg(b, Po(a));
        Cg(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none"
        })
    }
    ;var Gq = (a,b,c,d,e)=>{
        (new pq(a,aq(a, e),new ap(b,d,"#1A73E8","#FFF","bold","https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg","2px solid #ECEDED"),new Eq(b,c,d),"google-revocation-link-placeholder")).P()
    }
    ;
    function Hq(a) {
        const b = rq(a.j);
        b.callbackQueue = b.callbackQueue || [];
        b.callbackQueue.push(()=>Iq(a))
    }
    function Iq(a) {
        const b = rq(a.j);
        b && b.getConsentStatus() != b.ConsentStatusEnum.CONSENT_NOT_REQUIRED && Gq(a.j, b.getDefaultConsentRevocationText(), b.getDefaultConsentRevocationCloseText(), ()=>b.showRevocationMessage(), a.m);
        xq(a.l)
    }
    class Jq {
        constructor(a, b, c) {
            this.j = a;
            this.l = new yq(b,2147483643);
            this.m = c
        }
    }
    ;class Kq {
        constructor(a, b, c, d, e) {
            this.o = a;
            this.v = b;
            this.l = c;
            this.j = d;
            this.m = e
        }
    }
    ;function Lq(a, b, c) {
        void 0 !== a.j.j[b] || a.j.set(b, []);
        a.j.get(b).push(c)
    }
    class Mq {
        constructor() {
            this.j = new Sm
        }
    }
    ;function Nq(a, b) {
        a.A.wpc = b;
        return a
    }
    function Oq(a, b) {
        for (var c = 0; c < b.length; c++)
            a.$(b[c]);
        return a
    }
    function Pq(a, b) {
        a.l = a.l ? a.l : b;
        return a
    }
    class Qq {
        constructor(a) {
            this.A = {};
            this.A.c = a;
            this.m = [];
            this.l = null;
            this.o = [];
            this.C = 0
        }
        $(a) {
            for (var b = 0; b < this.m.length; b++)
                if (this.m[b] == a)
                    return this;
            this.m.push(a);
            return this
        }
        v(a) {
            var b = rb(this.A);
            0 < this.C && (b.t = this.C);
            b.err = this.m.join();
            b.warn = this.o.join();
            this.l && (b.excp_n = this.l.name,
            b.excp_m = this.l.message && this.l.message.substring(0, 512),
            b.excp_s = this.l.stack && nj(this.l.stack, ""));
            b.w = 0 < a.innerWidth ? a.innerWidth : null;
            b.h = 0 < a.innerHeight ? a.innerHeight : null;
            return b
        }
    }
    ;function Rq(a, b) {
        b && (a.j.apv = D(b, 4));
        return a
    }
    function Sq(a, b) {
        a.j.afm = b.join(",");
        return a
    }
    class Tq extends Qq {
        constructor(a) {
            super(a);
            this.j = {}
        }
        v(a) {
            try {
                this.j.su = a.location.hostname
            } catch (b) {
                this.j.su = "_ex"
            }
            a = super.v(a);
            tb(a, this.j);
            return a
        }
    }
    function Uq(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    }
    ;var Vq = (a,b)=>a.reduce((c,d)=>c.concat(b(d)), []);
    class Wq {
        constructor(a) {
            this.j = new Co(a)
        }
        contains(a) {
            return this.j.contains(a)
        }
    }
    ;var Xq = a=>{
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0,
            b |= a.getComputedStyle ? 0 : 2097152,
            b |= Oj(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    }
      , Yq = a=>{
        if (460 <= a)
            return a = Math.min(a, 1200),
            Math.ceil(800 > a ? a / 4 : 200);
        a = Math.min(a, 600);
        return 420 >= a ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    }
    ;
    var Zq = class {
        constructor(a) {
            this.j = a || {}
        }
        l(a, b, c, d) {
            return An(d.document, a, null, null, this.j, b)
        }
        m(a) {
            return Yq(Math.min(a.screen.width || 0, a.screen.height || 0))
        }
    }
    ;
    class $q {
        constructor(a) {
            this.l = a
        }
        j(a) {
            a = Math.floor(a.l);
            const b = Yq(a);
            return new ym(["ap_container"],{
                ["google_reactive_ad_format"]: 27,
                ["google_responsive_auto_format"]: 16,
                ["google_max_num_ads"]: 1,
                ["google_ad_type"]: this.l,
                ["google_ad_format"]: a + "x" + b,
                ["google_ad_width"]: a,
                ["google_ad_height"]: b
            })
        }
    }
    ;var ar = class {
        constructor(a, b) {
            this.m = a;
            this.o = b
        }
        j() {
            return this.m
        }
        l() {
            return this.o
        }
    }
    ;
    const br = {
        TABLE: {
            ua: new Wq([1, 2])
        },
        THEAD: {
            ua: new Wq([0, 3, 1, 2])
        },
        TBODY: {
            ua: new Wq([0, 3, 1, 2])
        },
        TR: {
            ua: new Wq([0, 3, 1, 2])
        },
        TD: {
            ua: new Wq([0, 3])
        }
    };
    function cr(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c)
            c = Na(e, f),
            0 > c || b.push(new dr(a,[f],c,f,3,vf(f).trim(),d));
        return b
    }
    function er(a, b, c) {
        let d = [];
        const e = []
          , f = b.childNodes
          , g = f.length;
        let h = 0
          , k = "";
        for (let r = 0; r < g; r++) {
            var l = f[r];
            if (1 == l.nodeType || 3 == l.nodeType) {
                a: {
                    var m = l;
                    if (1 != m.nodeType) {
                        m = null;
                        break a
                    }
                    if ("BR" == m.tagName)
                        break a;
                    const t = c.getComputedStyle(m).getPropertyValue("display");
                    m = "inline" == t || "inline-block" == t ? null : m
                }
                m ? (d.length && k && e.push(new dr(a,d,r - 1,m,0,k,c)),
                d = [],
                h = r + 1,
                k = "") : (d.push(l),
                l = vf(l).trim(),
                k += l && k ? " " + l : l)
            }
        }
        d.length && k && e.push(new dr(a,d,h,b,2,k,c));
        return e
    }
    function fr(a, b) {
        return a.j - b.j
    }
    class dr {
        constructor(a, b, c, d, e, f, g) {
            this.m = a;
            this.Pa = b.slice(0);
            this.j = c;
            this.tb = d;
            this.ub = e;
            this.o = f;
            this.l = g
        }
        K() {
            return this.l
        }
    }
    ;function gr(a) {
        return Wa(a.v ? er(a.m, a.j, a.o) : [], a.l ? cr(a.m, a.l, a.j, a.o) : []).filter(b=>{
            var c = b.tb.tagName;
            c ? (c = br[c.toUpperCase()],
            b = null != c && c.ua.contains(b.ub)) : b = !1;
            return !b
        }
        )
    }
    class hr {
        constructor(a, b, c) {
            this.j = a;
            this.l = b.Oa;
            this.v = b.Pb;
            this.m = b.articleStructure;
            this.o = c
        }
    }
    ;const ir = new Co("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));
    const jr = (a,b)=>{
        if (3 == b.nodeType)
            return 3 == b.nodeType ? (b = b.data,
            a = -1 != b.indexOf("&") ? vd(b, a.document) : b,
            a = /\S/.test(a)) : a = !1,
            a;
        if (1 == b.nodeType) {
            var c = a.getComputedStyle(b);
            if (c = "0" == c.opacity || "none" == c.display || "hidden" == c.visibility ? !0 : !1)
                return !1;
            if (c = (c = b.tagName) && ir.contains(c.toUpperCase()))
                return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (jr(a, b[c]))
                    return !0
        }
        return !1
    }
    ;
    function kr(a, b) {
        if (!b)
            return !1;
        const c = va(b)
          , d = a.j.get(c);
        if (null != d)
            return d;
        if (1 == b.nodeType && ("UL" == b.tagName || "OL" == b.tagName) && "none" != a.l.getComputedStyle(b).getPropertyValue("list-style-type"))
            return a.j.set(c, !0),
            !0;
        b = kr(a, b.parentNode);
        a.j.set(c, b);
        return b
    }
    function lr(a, b) {
        return Sa(b.Pa, c=>kr(a, c))
    }
    class mr {
        constructor(a) {
            this.j = new Sm;
            this.l = a
        }
    }
    ;class nr {
        constructor(a, b, c) {
            this.v = a;
            this.o = b;
            this.j = [];
            this.l = [];
            this.m = c
        }
    }
    ;var pr = (a,{Yg: b=!1, Zg: c=3, yd: d=null}={})=>{
        a = gr(a);
        return or(a, b, c, d)
    }
      , or = (a,b=!1,c=3,d=null)=>{
        if (2 > c)
            throw Error("minGroupSize should be at least 2, found " + c);
        var e = a.slice(0);
        e.sort(fr);
        a = [];
        b = new nr(51,b,d);
        for (const l of e) {
            d = b;
            e = {
                Za: l,
                Ua: l.o.length < d.v ? !1 : null != d.m ? !lr(d.m, l) : !0
            };
            if (d.o || e.Ua) {
                if (d.j.length) {
                    var f = d.j[d.j.length - 1].Za;
                    b: {
                        var g = f.K();
                        var h = f.Pa[f.Pa.length - 1];
                        f = e.Za.Pa[0];
                        if (!h || !f) {
                            g = !1;
                            break b
                        }
                        var k = h.parentElement;
                        const m = f.parentElement;
                        if (k && m && k == m) {
                            k = 0;
                            for (h = h.nextSibling; 10 > k && h; ) {
                                if (h == f) {
                                    g = !0;
                                    break b
                                }
                                if (jr(g, h))
                                    break;
                                h = h.nextSibling;
                                k++
                            }
                            g = !1
                        } else
                            g = !1
                    }
                } else
                    g = !0;
                g ? (d.j.push(e),
                e.Ua && d.l.push(e.Za)) : (d.j = [e],
                d.l = e.Ua ? [e.Za] : [])
            }
            if (b.l.length >= c) {
                if (1 >= b.l.length)
                    d = null;
                else {
                    e = b.l[1];
                    for (d = b; d.j.length && !d.j[0].Ua; )
                        d.j.shift();
                    d.j.shift();
                    d.l.shift();
                    d = e
                }
                d && a.push(d)
            }
        }
        return a
    }
    ;
    var rr = (a,b)=>{
        a = qr(a, b);
        const c = new mr(b);
        return Vq(a, d=>pr(d, {
            yd: c
        }))
    }
      , qr = (a,b)=>{
        const c = new Sm;
        a.forEach(d=>{
            var e = Hn(J(d, wl, 1));
            if (e) {
                {
                    const f = e.toString();
                    void 0 !== c.j[f] || c.set(f, {
                        articleStructure: d,
                        Hc: e,
                        Oa: null,
                        Pb: !1
                    });
                    e = c.get(f);
                    (d = (d = J(d, wl, 2)) ? D(d, 7) : null) ? e.Oa = e.Oa ? e.Oa + "," + d : d : e.Pb = !0
                }
            }
        }
        );
        return Rm(c).map(d=>{
            {
                const e = gn(d.Hc, b.document);
                d = e.length ? new hr(e[0],d,b) : null
            }
            return d
        }
        ).filter(d=>null != d)
    }
    ;
    var sr = (a,b,c)=>{
        const d = J(a, am, 6);
        if (!d)
            return [];
        c = rr(L(d, cm, 1), c);
        return (a = tm(a)) && de(a, 11) ? c.map(e=>{
            {
                const f = Vl();
                e = new gp(new ar(e.tb,e.ub),new bp({
                    clearBoth: !0
                }),null,!0,2,[],f,e.l,null,null,null,e.m,e.j)
            }
            return e
        }
        ) : c.map(e=>{
            {
                const f = Vl();
                e = new gp(new ar(e.tb,e.ub),new Zq({
                    clearBoth: !0
                }),new $q(b),!0,2,[],f,e.l,null,null,null,e.m,e.j)
            }
            return e
        }
        )
    }
    ;
    function tr(a, b) {
        a = a.getBoundingClientRect();
        return new ur(a.top + Uj(b),a.bottom - a.top)
    }
    function vr(a) {
        return new ur(Math.round(a.ja),Math.round(a.j))
    }
    class ur {
        constructor(a, b) {
            this.ja = a;
            this.j = b
        }
        ga() {
            return this.j
        }
    }
    ;class wr {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    }
    ;var xr = !Hd && !Pc();
    function yr(a) {
        if (/-[a-z]/.test("adFormat"))
            return null;
        if (xr && a.dataset) {
            if (!(!y("Android") || Qc() || Oc() || Mc() || y("Silk") || "adFormat"in a.dataset))
                return null;
            a = a.dataset.adFormat;
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    }
    ;var zr = (a,b,c)=>{
        if (!b)
            return null;
        const d = rf(document, "INS");
        d.id = "google_pedestal_container";
        d.style.width = "100%";
        d.style.zIndex = "-1";
        if (c) {
            var e = a.getComputedStyle(c)
              , f = "";
            if (e && "static" != e.position) {
                var g = c.parentNode.lastElementChild;
                for (f = e.position; g && g != c; ) {
                    if ("none" != a.getComputedStyle(g).display) {
                        f = a.getComputedStyle(g).position;
                        break
                    }
                    g = g.previousElementSibling
                }
            }
            if (c = f)
                d.style.position = c
        }
        b.appendChild(d);
        if (d) {
            var h = a.document;
            f = h.createElement("div");
            f.style.width = "100%";
            f.style.height = "2000px";
            c = Y(a).clientHeight;
            e = h.body.scrollHeight;
            a = a.innerHeight;
            g = h.body.getBoundingClientRect().bottom;
            d.appendChild(f);
            var k = f.getBoundingClientRect().top;
            h = h.body.getBoundingClientRect().top;
            d.removeChild(f);
            f = e;
            e <= a && 0 < c && 0 < g && (f = g - h);
            a = k - h >= .8 * f
        } else
            a = !1;
        return a ? d : (b.removeChild(d),
        null)
    }
      , Br = a=>{
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0,
            b |= a.getComputedStyle ? 0 : 2097152,
            Cf() || (b |= 1048576),
            1200 >= Math.floor(a.document.body.getBoundingClientRect().width) || (b |= 32768),
            Ar(a) && (b |= 33554432)
        } catch (c) {
            b |= 32
        }
        return b
    }
      , Ar = a=>{
        a = a.document.getElementsByClassName("adsbygoogle");
        for (let b = 0; b < a.length; b++)
            if ("autorelaxed" == yr(a[b]))
                return !0;
        return !1
    }
    ;
    class Cr {
        constructor() {
            this.j = new Promise(a=>{
                this.l = a
            }
            )
        }
    }
    ;function Dr(a) {
        try {
            a.setItem("__storage_test__", "__storage_test__");
            const b = a.getItem("__storage_test__");
            a.removeItem("__storage_test__");
            return "__storage_test__" == b
        } catch (b) {
            return !1
        }
    }
    function Er(a) {
        try {
            if (null == a || !Dr(a))
                return null;
            const b = a.getItem("__lsv__");
            if (!b)
                return [];
            let c;
            try {
                c = JSON.parse(b)
            } catch (d) {}
            return !Array.isArray(c) || Sa(c, d=>!Number.isInteger(d)) ? (a.removeItem("__lsv__"),
            []) : Fr(c)
        } catch (b) {
            return null
        }
    }
    function Fr(a=[]) {
        const b = Date.now();
        return Pa(a, c=>36E5 > b - c)
    }
    ;var Gr = (a,b,c)=>{
        let d = 0;
        try {
            d |= a != a.top ? 512 : 0;
            d |= Pj(a);
            d |= Oj(a);
            d |= a.innerHeight >= a.innerWidth ? 0 : 8;
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var e;
            if (e = b) {
                var f = Er(c);
                e = !(f && 1 > f.length)
            }
            e && (d |= 134217728)
        } catch (g) {
            d |= 32
        }
        return d
    }
    ;
    function Hr(a) {
        var b = ["Could not locate a suitable placement in the content below the fold."];
        bi(4, a.location) && (a = Kj(a).tagSpecificState[1] || null) && (a = a.debugCard && 4 === a.debugCard.getAdType() ? a.debugCard : null) && a.displayAdLoadedContent(b)
    }
    ;const Ir = {
        1: "0.5vp",
        2: "300px"
    }
      , Jr = {
        1: 700,
        2: 1200
    }
      , Kr = {
        [1]: {
            nc: "3vp",
            Db: "1vp",
            mc: "0.3vp"
        },
        [2]: {
            nc: "900px",
            Db: "300px",
            mc: "90px"
        }
    };
    function Lr(a, b) {
        const c = Mr(a);
        a = Y(a).clientHeight || Jr[c];
        if (b = Nr(L(b, nl, 2), c))
            if (b = Or(b, a))
                return b;
        return Pr(c, a)
    }
    function Qr(a) {
        const b = Mr(a);
        return Pr(b, Y(a).clientHeight || Jr[b])
    }
    function Rr(a, b) {
        let c = {
            Ba: a.m,
            ia: a.v
        };
        for (let d of a.A)
            d.adCount <= b && (c = d.Cb);
        return c
    }
    class Sr {
        constructor(a, b, c, d, e, f) {
            this.m = a;
            this.v = b;
            this.A = c.sort((g,h)=>g.adCount - h.adCount);
            this.l = d;
            this.o = e;
            this.j = f
        }
    }
    function Nr(a, b) {
        for (let c of a)
            if (D(c, 1) == b)
                return c;
        return null
    }
    function Or(a, b) {
        const c = Tr(D(a, 2), b)
          , d = Tr(D(a, 5), b);
        if (null === c)
            return null;
        const e = D(a, 4);
        if (null == e)
            return null;
        const f = [];
        var g = L(a, pl, 3);
        for (var h of g) {
            g = D(h, 1);
            const k = Tr(D(h, 2), b)
              , l = Tr(D(h, 3), b);
            if ("number" !== typeof g || null === k)
                return null;
            f.push({
                adCount: g,
                Cb: {
                    Ba: k,
                    ia: l
                }
            })
        }
        b = (h = J(a, ql, 7)) ? Ur(h, b) : void 0;
        return new Sr(c,d,f,e,ce(a, 6),b)
    }
    function Pr(a, b) {
        a = Tr(Ir[a], b);
        return new Sr(null === a ? Infinity : a,null,[],3,null)
    }
    function Tr(a, b) {
        if (!a)
            return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }
    function Mr(a) {
        a = 900 <= Y(a).clientWidth;
        return Cf() && !a ? 1 : 2
    }
    function Vr(a, b, c) {
        if (4 > c)
            return [];
        const d = Math.ceil(c / 2);
        return [{
            adCount: d,
            Cb: {
                Ba: 2 * a,
                ia: 2 * b
            }
        }, {
            adCount: d + Math.ceil((c - d) / 2),
            Cb: {
                Ba: 3 * a,
                ia: 3 * b
            }
        }]
    }
    function Ur(a, b) {
        const c = Tr(D(a, 2), b) || 0
          , d = D(a, 3) || 1;
        a = Tr(D(a, 1), b) || 0;
        return {
            ac: c,
            Zb: d,
            ma: a
        }
    }
    ;function Wr(a) {
        return new ym(["pedestal_container"],{
            ["google_reactive_ad_format"]: 30,
            ["google_phwr"]: 2.189,
            ["google_ad_width"]: Math.floor(a),
            ["google_ad_format"]: "autorelaxed",
            ["google_full_width_responsive"]: !0,
            ["google_enable_content_recommendations"]: !0,
            ["google_content_recommendation_ui_type"]: "pedestal"
        })
    }
    class Xr {
        constructor() {}
        j(a) {
            return Wr(Math.floor(a.l))
        }
    }
    ;var Yr = {};
    function Zr(a, b, c) {
        let d = $r(a, c, b);
        if (!d)
            return !0;
        let e = -1;
        const f = c.A.l;
        for (; d.Ca && d.Ca.length; ) {
            const g = d.Ca.shift()
              , h = lp(g.R)
              , k = g.N.j;
            if ((c.l.Ea || c.l.Fa || c.l.Mb || k > e) && (!h || h <= d.Na) && as(c, g, {
                Xb: d.Na
            })) {
                e = k;
                if (d.La.j.length + 1 >= f)
                    return !0;
                d = $r(a, c, b);
                if (!d)
                    return !0
            }
        }
        return c.m
    }
    var $r = (a,b,c)=>{
        var d = b.A.l
          , e = b.A.o
          , f = b.A;
        f = ro(b.K(), f.j ? f.j.ma : void 0, d);
        if (f.j.length >= d)
            return null;
        e ? (d = f.l || (f.l = Y(f.o).scrollHeight || null),
        e = !d || 0 > d ? -1 : f.l * e - wo(f)) : e = void 0;
        a = null == e || 50 <= e ? bs(b, f, {
            types: a
        }, c) : null;
        return {
            La: f,
            Na: e,
            Ca: a
        }
    }
    ;
    Yr[2] = Ca(function(a, b) {
        a = bs(b, ro(b.K()), {
            types: a,
            la: Qr(b.K())
        }, 2);
        if (0 == a.length)
            return !0;
        for (var c = 0; c < a.length; c++)
            if (as(b, a[c]))
                return !0;
        return b.m ? (b.v.push(11),
        !0) : !1
    }, [0]);
    Yr[5] = Ca(Zr, [0], 5);
    Yr[3] = function(a) {
        if (!a.m)
            return !1;
        var b = bs(a, ro(a.K()), {
            types: [0],
            la: Qr(a.K())
        }, 3);
        if (0 == b.length)
            return !0;
        for (var c = b.length - 1; 0 <= c; c--)
            if (as(a, b[c]))
                return !0;
        a.v.push(11);
        return !0
    }
    ;
    var cs = a=>{
        var b;
        a.l.pc ? b = new Sr(0,null,[],3,null) : b = Qr(a.K());
        return {
            types: [0],
            la: b
        }
    }
      , es = a=>{
        var b = a.K().document.body.getBoundingClientRect().width;
        b = Wr(b);
        var c = a.j;
        var d = c.document.body
          , e = zr(c, d, null);
        if (e)
            c = e;
        else {
            if (c.document.body) {
                e = Math.floor(c.document.body.getBoundingClientRect().width);
                for (var f = [{
                    element: c.document.body,
                    depth: 0,
                    height: 0
                }], g = -1, h = null; 0 < f.length; ) {
                    const m = f.pop()
                      , r = m.element;
                    var k = m.height;
                    0 < m.depth && k > g && (g = k,
                    h = r);
                    if (5 > m.depth)
                        for (k = 0; k < r.children.length; k++) {
                            const t = r.children[k];
                            {
                                var l = e;
                                const u = t.getBoundingClientRect().width;
                                l = (null == u || null == l ? 0 : u >= .9 * l && u <= 1.01 * l) ? !0 : !1
                            }
                            l && f.push({
                                element: t,
                                depth: m.depth + 1,
                                height: t.getBoundingClientRect().height
                            })
                        }
                }
                e = h
            } else
                e = null;
            c = e ? zr(c, e.parentNode || d, e) : null
        }
        c && (b = xm(a.G, b),
        d = An(a.j.document, a.D, null, null, {}, b)) && (wn(d.pa, c, 2, 256),
        ds(a, d, b))
    }
      , gs = (a,b)=>{
        var c = cs(a);
        c.Bb = [5];
        c = bs(a, ro(a.K()), c, 8);
        fs(a, c.reverse(), b)
    }
      , fs = (a,b,c)=>{
        for (const d of b)
            if (b = c.j(d.N),
            as(a, d, {
                Ac: b
            }))
                return !0;
        return !1
    }
    ;
    Yr[8] = function(a) {
        var b = a.K().document;
        if ("complete" != b.readyState)
            return b.addEventListener("readystatechange", ()=>Yr[8](a), {
                once: !0
            }),
            !0;
        if (!a.m)
            return !1;
        if (!a.Va())
            return !0;
        b = cs(a);
        b.Ab = [2, 4, 5];
        b = bs(a, ro(a.K()), b, 8);
        const c = new Xr(a.l.dc || 0);
        if (fs(a, b, c))
            return !0;
        if (a.l.Nb)
            switch (a.l.cc || 0) {
            case 1:
                gs(a, c);
                break;
            default:
                es(a)
            }
        return !0
    }
    ;
    Yr[6] = Ca(Zr, [2], 6);
    Yr[7] = Ca(Zr, [1], 7);
    Yr[9] = function(a) {
        const b = $r([0, 2], a, 9);
        if (!b || !b.Ca)
            return a.v.push(17),
            Hr(a.K()),
            a.m;
        for (var c of b.Ca) {
            var d = c;
            var e = a.l.jb || null;
            null == e ? d = null : (e = mp(d.R, new hs, new is(e,a.K())),
            d = new Yp(e,d.T(),d.N));
            if (d && !(lp(d.R) > b.Na) && as(a, d, {
                Xb: b.Na,
                Tc: !0
            }))
                return a = d.R.D,
                c = c.R,
                a = 0 < a.length ? a[0] : null,
                c.m = !0,
                null != a && c.D.push(a),
                !0
        }
        a.v.push(17);
        Hr(a.K());
        return a.m
    }
    ;
    class hs {
        l(a, b, c, d) {
            return Dn(d.document, a, b)
        }
        m(a) {
            return Y(a).clientHeight || 0
        }
    }
    ;var js = a=>{
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0,
            b |= a.getComputedStyle ? 0 : 2097152,
            b |= a.document.querySelectorAll && a.document.querySelector ? 0 : 4194304,
            b |= Oj(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    }
    ;
    var ks = class {
        constructor() {
            const a = new Cr;
            this.promise = a.j;
            this.resolve = a.l
        }
    }
    ;
    function ls(a, b, c) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        b[a] || (b[a] = new ks,
        c && c());
        return b[a]
    }
    function ms(a, b, c) {
        return ls(a, b, function() {
            Jf(b.document, Af(c))
        }).promise
    }
    ;var ns = a=>{
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0,
            b |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
        } catch (c) {
            b |= 32
        }
        return b
    }
      , os = (a,b,c)=>{
        let d = 0;
        try {
            d |= Oj(a, 2500);
            if (Z.F().j(309, !1)) {
                {
                    const h = Y(a).clientHeight;
                    var e = h ? 320 > h ? -2147483648 : 0 : 1073741824
                }
                d |= e
            }
            d |= Pj(a);
            var f;
            if (f = b) {
                var g = Er(c);
                f = !(g && 1 > g.length)
            }
            f && (d |= 134217728)
        } catch (h) {
            d |= 32
        }
        return d
    }
    ;
    function ps(a, b, c) {
        const d = a.createElement("link");
        try {
            d.rel = "preload",
            d.href = b instanceof Db ? Ib(b).toString() : b instanceof ec ? fc(b) : fc(lc(b))
        } catch (e) {
            return
        }
        d.as = "script";
        c && d.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0])
            try {
                a.appendChild(d)
            } catch (e) {}
    }
    ;const qs = {
        [16]: 4,
        [27]: 512,
        [26]: 128
    };
    var rs = (a,b,c,d)=>{
        switch (c) {
        case 1:
        case 2:
            return !dq(a, c);
        case 8:
            return b = !("on" === b.google_adtest || $h(a.location, "google_ia_debug")),
            0 == (ns(a) | os(a, b, d));
        case 9:
            return b = Z.F().j(230, !1) && !("on" === b.google_adtest || $h(a.location, "google_scr_debug")),
            !Gr(a, b, d);
        case 30:
            return 0 == Br(a);
        case 26:
            return 0 == js(a) && !0;
        case 27:
            return !Xq(a) && !0;
        case 40:
            return !0;
        default:
            return !1
        }
    }
      , ss = (a,b,c,d)=>{
        switch (c) {
        case 0:
            return 0;
        case 1:
        case 2:
            return dq(a, c);
        case 8:
            return b = !("on" === b.google_adtest || $h(a.location, "google_ia_debug")),
            ns(a) | os(a, b, d);
        case 9:
            return Gr(a, Z.F().j(230, !1) && !("on" === b.google_adtest || $h(a.location, "google_scr_debug")), d);
        case 16:
            return kn(b, a) ? 0 : 8388608;
        case 30:
            return Br(a);
        case 26:
            return js(a);
        case 27:
            return Xq(a);
        default:
            return 32
        }
    }
      , ts = a=>!a.google_reactive_ads_config && jl(a) && 16 !== a.google_reactive_ad_format && 10 !== a.google_reactive_ad_format
      , us = a=>{
        if (!a.hash)
            return null;
        let b = null;
        Gh(Re, c=>{
            !b && $h(a, c) && (b = Se[c])
        }
        );
        return b
    }
      , ws = (a,b)=>{
        if (!a.document.getElementById("goog_info_card")) {
            var c = Kj(a).tagSpecificState[1] || null;
            c && Gh(Te, d=>{
                !c.debugCardRequested && bi(d, a.location) && (c.debugCardRequested = !0,
                vs(a, e=>{
                    c.debugCard = e.createDebugCard(d, a, b)
                }
                ))
            }
            )
        }
    }
      , ys = (a,b,c)=>{
        if (!b)
            return null;
        const d = Kj(b);
        let e = 0;
        Gh(pb, f=>{
            const g = qs[f];
            g && 0 === xs(a, b, f, c) && (e |= g)
        }
        );
        d.wasPlaTagProcessed && (e |= 256);
        a.google_reactive_tag_first && (e |= 1024);
        return e ? "" + e : null
    }
      , zs = (a,b,c)=>{
        const d = [];
        Gh(pb, e=>{
            const f = xs(b, a, e, c);
            0 !== f && d.push(e + ":" + f)
        }
        );
        return d.join(",") || null
    }
      , As = a=>{
        const b = []
          , c = {};
        Gh(a, (d,e)=>{
            if ((e = Ij[e]) && !c[e]) {
                c[e] = !0;
                if (d)
                    d = 1;
                else if (!1 === d)
                    d = 2;
                else
                    return;
                b.push(e + ":" + d)
            }
        }
        );
        return b.join(",")
    }
      , Bs = a=>{
        a = a.overlays;
        if (!a)
            return "";
        a = a.bottom;
        return "boolean" === typeof a ? a ? "1" : "0" : ""
    }
      , xs = (a,b,c,d)=>{
        if (!b)
            return 256;
        let e = 0;
        const f = Kj(b)
          , g = Sj(f, c);
        if (a.google_reactive_ad_format == c || 26 != c && 27 != c && g)
            e |= 64;
        let h = !1;
        Gh(f.reactiveTypeDisabledByPublisher, (k,l)=>{
            String(c) === l && (h = !0)
        }
        );
        h && us(b.location) !== c && (e |= 128);
        return e | ss(b, a, c, d)
    }
      , Cs = (a,b)=>{
        if (a) {
            var c = Kj(a)
              , d = {};
            Gh(b, (e,f)=>{
                (f = Ij[f]) && (!1 === e || /^false$/i.test(e)) && (d[f] = !0)
            }
            );
            Gh(pb, e=>{
                d[Jj[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
            }
            )
        }
    }
      , Ds = (a,b)=>{
        a = T(a, b);
        return ms(1, N(), ei(`${"/pagead/js/" + Ug() + "/r20190131"}/reactive_library.js`)).then(a)
    }
      , vs = (a,b)=>{
        b = T(212, b);
        ms(3, a, ei(`${"/pagead/js/" + Ug() + "/r20190131"}/debug_card_library.js`)).then(b)
    }
    ;
    const Es = a=>{
        a.adsbygoogle || (a.adsbygoogle = [],
        Jf(a.document, Af(di("pagead2.googlesyndication.com", "/pagead/js/adsbygoogle.js"))))
    }
    ;
    var Fs = (a,b,c)=>{
        const d = Jj[a]
          , e = {};
        a = b.page_level_pubvars;
        ua(a) && tb(e, a);
        Gh(b, (f,g)=>{
            Ij[g] == d && ua(f) && tb(e, f)
        }
        );
        ua(c) && tb(e, c);
        return e
    }
      , Gs = (a,b)=>{
        Ce(a, "load", ()=>{
            Es(a);
            a.adsbygoogle.push(b)
        }
        )
    }
    ;
    class is {
        constructor(a, b) {
            this.l = a;
            this.m = b
        }
        j() {
            {
                var a = this.l;
                var b = this.m;
                const c = a.B || {};
                c.google_ad_client = a.Ja;
                c.google_ad_height = Y(b).clientHeight || 0;
                c.google_ad_width = Y(b).clientWidth || 0;
                c.google_reactive_ad_format = 9;
                b = new Em;
                I(b, 1, a.m);
                a.j && ge(b, 2, a.j);
                a.v && I(b, 3, !0);
                c.google_rasc = b.A();
                a.l && (c.google_adtest = "on");
                a = c
            }
            return new ym(["fsi_container"],a)
        }
    }
    ;class Hs {
        constructor(a=1) {
            this.j = a
        }
        next() {
            var a = 48271 * this.j % 2147483647;
            this.j = 0 > 2147483647 * a ? a + 2147483647 : a;
            return this.j / 2147483647
        }
    }
    ;function Is(a, b, c) {
        const d = [];
        for (const e of a.j)
            b(e) ? d.push(e) : c(e);
        return new Js(d)
    }
    function Ks(a, b=1) {
        a = a.j.slice(0);
        const c = new Hs(b);
        bb(a, ()=>c.next());
        return new Js(a)
    }
    var Js = class {
        constructor(a) {
            this.j = a.slice(0)
        }
        filter(a) {
            return new Js(Pa(this.j, a))
        }
        apply(a) {
            return new Js(a(this.j.slice(0)))
        }
        sort(a) {
            return new Js(this.j.slice(0).sort(a))
        }
    }
    ;
    function Ls(a, b, c) {
        const d = Wm(c, 1, b + 1);
        return !Sa(a, e=>Tm(e, d))
    }
    function Ms(a, b, c, d, e) {
        e = e.N;
        const f = Wm(e, 0, b)
          , g = Wm(e, 0, c)
          , h = Wm(e, 0, d);
        return !Sa(a, k=>Tm(k, g) || Tm(k, f) && !Tm(k, h))
    }
    function Ns(a, b, c, d) {
        const e = vo(a);
        if (Ls(e, b, d.N))
            return !0;
        if (!Ms(e, b, c.ac, c.ma, d))
            return !1;
        const f = new ho(Wm(d.N, 0, 0),1);
        a = Pa(a.m, g=>fo(g, f, c.ma));
        b = Ra(a, (g,h)=>g + h.l, 1);
        return 0 === a.length || b > c.Zb ? !1 : !0
    }
    ;class Os {
        constructor() {
            this.j = new Sm
        }
        set(a, b) {
            let c = this.j.get(a);
            c || (c = new Co,
            this.j.set(a, c));
            c.add(b)
        }
    }
    ;var Ps = (a,b)=>{
        const c = [];
        let d = a;
        for (a = ()=>{
            c.push({
                anchor: d.anchor,
                position: d.position
            });
            return d.anchor == b.anchor && d.position == b.position
        }
        ; d; ) {
            switch (d.position) {
            case 1:
                if (a())
                    return c;
                d.position = 2;
            case 2:
                if (a())
                    return c;
                if (d.anchor.firstChild) {
                    d = {
                        anchor: d.anchor.firstChild,
                        position: 1
                    };
                    continue
                } else
                    d.position = 3;
            case 3:
                if (a())
                    return c;
                d.position = 4;
            case 4:
                if (a())
                    return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body; ) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a())
                    return c;
                d.position = 4;
                if (a())
                    return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    }
    ;
    function Qs(a, b) {
        const c = new Os
          , d = new Co;
        b.forEach(e=>{
            if (J(e, Bl, 1)) {
                e = J(e, Bl, 1);
                if (J(e, yl, 1) && J(e, yl, 1).T() && J(e, yl, 2) && J(e, yl, 2).T()) {
                    const g = Rs(a, J(e, yl, 1).T())
                      , h = Rs(a, J(e, yl, 2).T());
                    if (g && h)
                        for (var f of Ps({
                            anchor: g,
                            position: J(e, yl, 1).l()
                        }, {
                            anchor: h,
                            position: J(e, yl, 2).l()
                        }))
                            c.set(va(f.anchor), f.position)
                }
                J(e, yl, 3) && J(e, yl, 3).T() && (f = Rs(a, J(e, yl, 3).T())) && c.set(va(f), J(e, yl, 3).l())
            } else
                J(e, Cl, 2) ? Ss(a, J(e, Cl, 2), c) : J(e, Dl, 3) && Ts(a, J(e, Dl, 3), d)
        }
        );
        return new Us(c,d)
    }
    class Us {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    }
    const Ss = (a,b,c)=>{
        J(b, wl, 1) && (a = Vs(a, J(b, wl, 1))) && a.forEach(d=>{
            d = va(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3)
        }
        )
    }
      , Ts = (a,b,c)=>{
        J(b, wl, 1) && (a = Vs(a, J(b, wl, 1))) && a.forEach(d=>{
            c.add(va(d))
        }
        )
    }
      , Rs = (a,b)=>(a = Vs(a, b)) && 0 < a.length ? a[0] : null
      , Vs = (a,b)=>(b = Hn(b)) ? gn(b, a) : null;
    function Ws(a) {
        return function(b) {
            return $p(b, a)
        }
    }
    function Xs(a) {
        const b = Y(a).clientHeight;
        return b ? Ca(Ys, b + Uj(a)) : cb
    }
    function Zs(a, b, c) {
        if (0 > a)
            throw Error("ama::ead:nd");
        if (Infinity === a)
            return cb;
        const d = vo(c || ro(b));
        return e=>Ls(d, a, e.N)
    }
    function $s(a, b, c, d) {
        if (0 > a || 0 > b.ac || 0 > b.Zb || 0 > b.ma)
            throw Error("ama::ead:nd");
        return Infinity === a ? cb : e=>Ns(d || ro(c, b.ma), a, b, e)
    }
    function at(a) {
        if (!a.length)
            return cb;
        const b = new Wq(a);
        return c=>b.contains(c.Wa)
    }
    function bt(a) {
        return function(b) {
            for (let c of b.rb)
                if (-1 < a.indexOf(c))
                    return !1;
            return !0
        }
    }
    function ct(a) {
        return a.length ? function(b) {
            const c = b.rb;
            return a.some(d=>-1 < c.indexOf(d))
        }
        : db
    }
    function dt(a, b) {
        if (0 >= a)
            return db;
        const c = Y(b).scrollHeight - a;
        return function(d) {
            return d.N.j <= c
        }
    }
    function et(a) {
        const b = {};
        a && a.forEach(c=>{
            b[c] = !0
        }
        );
        return function(c) {
            return !b[D(c.Da, 2) || 0]
        }
    }
    function ft(a) {
        return a.length ? b=>a.includes(D(b.Da, 2) || 0) : db
    }
    function gt(a) {
        return a.length ? b=>a.includes(D(b.Da, 1) || 0) : db
    }
    function ht(a, b) {
        const c = Qs(a, b);
        return function(d) {
            var e = d.T();
            d = Nn[d.R.l()];
            var f = va(e);
            f = (f = c.l.j.get(f)) ? f.contains(d) : !1;
            if (!f)
                a: {
                    if (c.j.contains(va(e)))
                        switch (d) {
                        case 2:
                        case 3:
                            f = !0;
                            break a;
                        default:
                            f = !1;
                            break a
                        }
                    for (e = e.parentElement; e; ) {
                        if (c.j.contains(va(e))) {
                            f = !0;
                            break a
                        }
                        e = e.parentElement
                    }
                    f = !1
                }
            return !f
        }
    }
    const Ys = (a,b)=>b.N.j >= a
      , it = (a,b)=>b.N.j < a
      , jt = (a,b,c)=>{
        c = c.N.l;
        return a <= c && c <= b
    }
    ;
    class kt {
        constructor(a=0) {
            this.j = a
        }
    }
    ;class lt {
        constructor(a) {
            this.l = a;
            this.j = -1
        }
    }
    ;function mt(a) {
        const b = a.T();
        a = a.R.l();
        return 0 == a || 3 == a ? nt(b.parentElement) : nt(b)
    }
    function nt(a) {
        let b = 0;
        for (; a; )
            (!b || a.previousElementSibling || a.nextElementSibling) && b++,
            a = a.parentElement;
        return b
    }
    ;function ot(a, b) {
        var c = b.N.j + 200 * Math.min(20, mt(b));
        var d = a.l;
        0 > d.j && (d.j = Y(d.l).scrollHeight || 0);
        d = d.j - b.N.j;
        d = 1E3 < d ? 0 : 2 * (1E3 - d);
        c += d;
        a = a.j;
        b = b.T();
        b = "string" === typeof b.className && 0 <= b.className.indexOf("adsbygoogle-ablated-ad-slot") ? a.j : 0;
        return c + b
    }
    class pt {
        constructor(a, b=0) {
            this.l = new lt(a);
            this.j = new kt(b)
        }
    }
    ;function qt(a, b) {
        {
            a = a.j;
            const c = Y(a).clientHeight;
            a = c ? Ca(it, c + Uj(a)) : cb
        }
        b = b.filter(a);
        return b = b.j.slice(0)
    }
    function rt(a, b) {
        if (null != b) {
            var c = [], d;
            for (d of b) {
                b = null != d ? d.R.O : null;
                var e = null != d ? d.N : null;
                if (null != b && null != e) {
                    var f = new Eo;
                    f = I(f, 1, e.m);
                    f = I(f, 2, e.j);
                    e = I(f, 3, e.l);
                    f = new Fo;
                    b = I(f, 1, b);
                    b = ge(b, 2, e);
                    c.push(b)
                }
            }
            a = a.j;
            if (c) {
                (d = Io(a)) || (d = new Go);
                c = c.concat(L(d, Fo, 5));
                d = new Co;
                b = [];
                for (e = 0; e < c.length; e++)
                    d.contains(D(c[e], 1)) || (b.push(c[e]),
                    d.add(D(c[e], 1)));
                c = b;
                Jo({
                    eb: c
                }, a)
            }
        }
    }
    class st {
        constructor(a, b, c, d=0) {
            this.l = new Js(a);
            this.m = new pt(c,d);
            this.j = c;
            this.o = new Mq
        }
        find(a, b=0) {
            const c = a.Wb ? a.Wb : [0];
            var d = "number" === typeof a.$b ? a.$b : 0
              , e = "number" === typeof a.minWidth ? a.minWidth : 0;
            const f = "number" === typeof a.maxWidth ? a.maxWidth : Infinity
              , g = "number" === typeof a.ia ? a.ia : 0
              , h = new Co(a.Ad || []);
            let k = this.l.filter((l,m)=>!h.contains(m));
            k = Is(Is(Is(Is(Is(Is(Is(k, at(c), tt(1, b)), bt(a.ta || []), tt(2, b)), et(a.ib || []), tt(3, b)), ft(a.$g || []), tt(4, b)), gt(a.Bb || []), tt(5, b)), ct(a.Ab || []), tt(6, b)), fb(ip), tt(7, b));
            k = k.apply(Ws(this.j));
            d = a.Ma && a.Lb ? Is(k, $s(d, a.Lb, this.j, a.La), ut(16, b)) : Is(k, Zs(d, this.j, a.La), ut(9, b));
            d = Is(d, Ca(jt, e, f), ut(10, b));
            a.Ka && (d = Is(d, ht(this.j.document, a.Ka), ut(11, b)));
            a.$a && (e = qt(this, d),
            rt(this, e));
            d = Is(Is(d, Xs(this.j), ut(12, b)), dt(g, this.j), ut(13, b));
            d = a.Fa ? d.sort((l,m)=>{
                {
                    var r = l.R.v;
                    const t = m.R.v;
                    null == r || null == t ? null == r && null == t ? (r = this.m,
                    l = ot(r, l) - ot(r, m)) : l = null == r ? 1 : -1 : l = r - t
                }
                return l
            }
            ) : d.sort((l,m)=>{
                var r = this.m;
                return ot(r, l) - ot(r, m)
            }
            );
            a.Ea && (d = Ks(d, zd(this.j.location.href + this.j.localStorage.google_experiment_mod)));
            1 === c.length && Lq(this.o, c[0], {
                Kc: k.j.length,
                Cd: d.j.length
            });
            return d.j.slice(0)
        }
    }
    const tt = (a,b)=>c=>jp(c, b, a)
      , ut = (a,b)=>c=>jp(c.R, b, a);
    function vt(a, b) {
        if (!a)
            return !1;
        a = Kf(a, b);
        if (!a)
            return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }
    function wt(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType; )
            a = a.previousSibling;
        return a ? a : null
    }
    function xt(a) {
        return !!a.nextSibling || !!a.parentNode && xt(a.parentNode)
    }
    ;function yt(a) {
        const b = Qj(a, !0)
          , c = Y(a).scrollWidth
          , d = Y(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = Uj(a);
        const g = [];
        var h = [];
        const k = []
          , l = [];
        var m = []
          , r = []
          , t = [];
        let u = 0
          , V = 0
          , H = Infinity
          , U = Infinity
          , Da = null;
        var na = no({
            ha: !1
        }, a);
        for (var ja of na) {
            na = ja.getBoundingClientRect();
            const sc = b - (na.bottom + f);
            var da = void 0
              , ka = void 0;
            if (ja.className && -1 != ja.className.indexOf("adsbygoogle-ablated-ad-slot")) {
                da = ja.getAttribute("google_element_uid");
                ka = a.google_sv_map;
                if (!da || !ka || !ka[da])
                    continue;
                da = (ka = Xh(ka[da])) ? ka.height : 0;
                ka = ka ? ka.width : 0
            } else if (da = na.bottom - na.top,
            ka = na.right - na.left,
            1 >= da || 1 >= ka)
                continue;
            g.push(da);
            k.push(ka);
            l.push(da * ka);
            ja.className && -1 != ja.className.indexOf("google-auto-placed") ? (V += 1,
            ja.className && -1 != ja.className.indexOf("pedestal_container") && (Da = da)) : (H = Math.min(H, sc),
            r.push(na),
            u += 1,
            h.push(da),
            m.push(da * ka));
            U = Math.min(U, sc);
            t.push(na)
        }
        H = Infinity === H ? null : H;
        U = Infinity === U ? null : U;
        f = zt(r);
        t = zt(t);
        h = At(b, h);
        r = At(b, g);
        m = At(b * c, m);
        ja = At(b * c, l);
        return new Bt(a,{
            Uc: e,
            wb: b,
            nd: c,
            md: d,
            ed: u,
            Jc: V,
            Mc: Ct(g),
            Nc: Ct(k),
            Lc: Ct(l),
            sb: f,
            kd: t,
            jd: H,
            hd: U,
            hb: h,
            gb: r,
            Gc: m,
            Fc: ja,
            od: Da
        })
    }
    function Dt(a, b, c, d) {
        const e = Cf() && !(900 <= Y(a.l).clientWidth);
        d = Pa(d, f=>Ua(a.m, f)).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.j.Uc,
            pg_h: Et(a.j.wb),
            pg_w: Et(a.j.nd),
            pg_hs: Et(a.j.md),
            c: Et(a.j.ed),
            aa_c: Et(a.j.Jc),
            av_h: Et(a.j.Mc),
            av_w: Et(a.j.Nc),
            av_a: Et(a.j.Lc),
            s: Et(a.j.sb),
            all_s: Et(a.j.kd),
            b: Et(a.j.jd),
            all_b: Et(a.j.hd),
            d: Et(a.j.hb),
            all_d: Et(a.j.gb),
            ard: Et(a.j.Gc),
            all_ard: Et(a.j.Fc),
            pd_h: Et(a.j.od),
            dt: e ? "m" : "d"
        }
    }
    class Bt {
        constructor(a, b) {
            this.l = a;
            this.j = b;
            this.m = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716".split(" ")
        }
    }
    function Ct(a) {
        return hf.apply(null, Pa(a, b=>0 < b)) || null
    }
    function At(a, b) {
        return 0 >= a ? null : gf.apply(null, b) / a
    }
    function zt(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e]
                  , d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                0 < c && (b = Math.min(c, b))
            }
        return Infinity !== b ? b : null
    }
    function Et(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    }
    ;function Ft(a, b) {
        b = (Y(b).clientHeight || 0) - Uj(b);
        let c = 0;
        for (let d = 0; d < a.length; d++) {
            const e = a[d].getBoundingClientRect();
            Gt(e) && e.top <= b && (c += 1)
        }
        return c
    }
    function Ht(a) {
        const b = {};
        var c = po({
            ha: !1,
            xa: !1,
            ya: !1,
            za: !1
        }, a).map(d=>d.getBoundingClientRect()).filter(Gt);
        b.Bc = c.length;
        c = qo({
            ya: !0
        }, a).map(d=>d.getBoundingClientRect()).filter(Gt);
        b.Vc = c.length;
        c = qo({
            za: !0
        }, a).map(d=>d.getBoundingClientRect()).filter(Gt);
        b.ld = c.length;
        c = qo({
            xa: !0
        }, a).map(d=>d.getBoundingClientRect()).filter(Gt);
        b.Ec = c.length;
        c = (Y(a).clientHeight || 0) - Uj(a);
        c = po({
            ha: !1
        }, a).map(d=>d.getBoundingClientRect()).filter(Gt).filter(Ba(It, null, c));
        b.Cc = c.length;
        a = yt(a);
        c = null != a.j.hb ? a.j.hb : null;
        null != c && (b.gd = c);
        a = null != a.j.gb ? a.j.gb : null;
        null != a && (b.Dc = a);
        return b
    }
    function as(a, b, {Xb: c, Ac: d, Tc: e}={}) {
        const f = b.R;
        if (f.m)
            return !1;
        var g = b.T()
          , h = f.l()
          , k = a.m;
        a: {
            var l = a.j;
            switch (h) {
            case 0:
                l = vt(wt(g), l);
                break a;
            case 3:
                l = vt(g, l);
                break a;
            case 2:
                var m = g.lastChild;
                l = vt(m ? 1 == m.nodeType ? m : wt(m) : null, l);
                break a
            }
            l = !1
        }
        if (k = !l && !(!k && 2 == h && !xt(g)))
            g = 1 == h || 2 == h ? g : g.parentNode,
            k = !(g && !pn(g) && 0 >= g.offsetWidth);
        if (!k)
            return !1;
        c = null == c ? null : new ym(null,{
            google_max_responsive_height: c
        });
        g = zm(D(f.Da, 2) || 0);
        h = f.v;
        h = null == h ? null : new ym(null,{
            google_ml_rank: h
        });
        d = xm(a.G, f.J ? f.J.j(b.N) : null, c, d || null, g, h);
        b = b.fill(a.D, d);
        if (e) {
            if (b) {
                e = b.V;
                c = e.style.width;
                e.style.width = "100%";
                g = e.offsetWidth;
                e.style.width = c;
                e = g;
                c = a.j;
                g = b.V;
                h = d && d.vb || {};
                if (Sh(c) != c)
                    k = Wh(c) ? 3 : 16;
                else if (488 > Y(c).clientWidth)
                    if (c.innerHeight >= c.innerWidth)
                        if (k = Y(c).clientWidth,
                        !k || .3 < (k - e) / k)
                            k = 6;
                        else {
                            if (k = "true" != h.google_full_width_responsive)
                                c: {
                                    l = g.parentElement;
                                    for (k = Y(c).clientWidth; l; l = l.parentElement) {
                                        m = Kf(l, c);
                                        if (!m)
                                            continue;
                                        const r = qg(m.width);
                                        if (r && !(r >= k) && "visible" != m.overflow) {
                                            k = !0;
                                            break c
                                        }
                                    }
                                    k = !1
                                }
                            k = k ? 7 : !0
                        }
                    else
                        k = 5;
                else
                    k = 4;
                if (!0 !== k)
                    e = k;
                else {
                    if (!(h = "true" == h.google_full_width_responsive))
                        b: {
                            do
                                if ((h = Kf(g, c)) && "fixed" == h.position) {
                                    h = !1;
                                    break b
                                }
                            while (g = g.parentElement);h = !0
                        }
                    h ? Z.F().j(233, !1) || c.location && "#bffwroe2etoq" == c.location.hash ? e = !0 : (c = Y(c).clientWidth,
                    e = c - e,
                    e = c && 0 <= e ? !0 : c ? -10 > e ? 11 : 0 > e ? 14 : 12 : 10) : e = 9
                }
                if (e) {
                    e = a.j;
                    c = b.V;
                    if (g = nn(e, c))
                        c.style.border = c.style.borderStyle = c.style.outline = c.style.outlineStyle = c.style.transition = "none",
                        c.style.borderSpacing = c.style.padding = "0",
                        ln(c, g, "0px"),
                        c.style.width = Y(e).clientWidth + "px",
                        on(e, c, g),
                        c.style.zIndex = 30;
                    e = !0
                } else
                    tn(b.pa),
                    e = !1
            } else
                e = !1;
            e = !e
        }
        if (e || !ds(a, b, d))
            return !1;
        ji(9, [f.v, f.Wa]);
        return !0
    }
    function bs(a, b, c, d) {
        const e = c.la ? c.la : a.A
          , f = Rr(e, b.j.length);
        return a.o.find({
            Ad: Jt(a),
            Wb: c.types,
            $b: f.Ba,
            La: b,
            ta: a.J,
            ia: f.ia || void 0,
            Ea: !!a.l.Ea,
            Fa: !!a.l.Fa,
            Ab: c.Ab,
            minWidth: c.minWidth,
            maxWidth: c.maxWidth,
            ib: a.O,
            Ka: a.I,
            Bb: c.Bb,
            $a: !!a.l.$a,
            Ma: !!a.l.Ma,
            Lb: e.j
        }, d)
    }
    function Kt(a) {
        return a.C ? a.C : a.C = a.j.google_ama_state
    }
    function Jt(a) {
        if (Z.F().j(1004, !1))
            return [];
        const b = Kt(a);
        return null == b || null == b.placed ? [] : b.placed.map(c=>c.index).filter(c=>0 <= c && c < a.o.l.j.length)
    }
    function ds(a, b, c) {
        if (!b)
            return !1;
        try {
            En(a.j, b.V, c)
        } catch (d) {
            return tn(b.pa),
            a.v.push(6),
            !1
        }
        return !0
    }
    class Lt {
        constructor(a, b, c, d, e={}) {
            this.o = a;
            this.D = b;
            this.j = c;
            this.A = d.la;
            this.J = d.ta || [];
            this.G = d.Wc || null;
            this.O = d.ib || [];
            this.I = d.Ka || [];
            this.l = e;
            this.m = !1;
            this.H = [];
            this.v = [];
            this.C = void 0
        }
        K() {
            return this.j
        }
        $(a) {
            this.H.push(a)
        }
        pb() {
            return !!this.l.kc
        }
        Va() {
            return !Ar(this.j)
        }
    }
    const Gt = a=>1 < (a.bottom - a.top) * (a.right - a.left)
      , It = (a,b)=>b.top <= a;
    function Mt(a, b) {
        return null == a ? b + "ShouldNotBeNull" : 0 == a ? b + "ShouldNotBeZero" : -1 > a ? b + "ShouldNotBeLessMinusOne" : null
    }
    function Nt(a) {
        return Kt(a.m) && Kt(a.m).placed || []
    }
    function Ot(a) {
        return Nt(a).map(b=>vr(tr(b.element, a.l)))
    }
    function Pt(a) {
        return Nt(a).map(b=>b.index)
    }
    function Qt(a, b) {
        const c = b.R;
        return c.o && null != D(c.o, 8) && 1 == D(c.o, 8) ? [] : c.m ? (c.D || []).map(d=>vr(tr(d, a.l))) : [vr(new ur(b.N.j,0))]
    }
    function Rt(a) {
        a.sort((e,f)=>e.ja - f.ja);
        const b = [];
        let c = 0;
        for (let e = 0; e < a.length; ++e) {
            var d = a[e];
            let f = d.ja;
            d = d.ja + d.j;
            f <= c ? c = Math.max(c, d) : (b.push(new ur(c,f - c)),
            c = d)
        }
        return b
    }
    function St(a, b) {
        const c = [];
        let d = 0;
        for (const e of Qm(b)) {
            const f = b.get(e);
            f.sort((g,h)=>h.ga() - g.ga());
            a.D || f.splice(a.A, f.length);
            !a.o && d + f.length > a.j && f.splice(a.j - d, f.length);
            c.push(e + "G" + f.map(g=>g.ja + "~" + g.ga()).join("G"));
            d += f.length;
            if (!a.o && d >= a.j)
                break
        }
        return c
    }
    class Tt {
        constructor(a, b, c, d, e) {
            this.C = -1 == c;
            this.v = c;
            this.D = -1 == d;
            this.A = d;
            this.o = -1 == e;
            this.j = e;
            this.m = b;
            this.l = a
        }
    }
    ;function Ut(a, b, c, d, e) {
        this.sa = a;
        this.ea = b;
        this.Ga = c;
        this.j = d;
        this.l = e
    }
    ;var Vt = (a,b,{Va: c=!1, pb: d=!1, wd: e=!1}={})=>{
        const f = [];
        e && f.push(9);
        -1 < b.indexOf(3) && f.push(6);
        -1 < b.indexOf(4) && !d && c && f.push(8);
        -1 < b.indexOf(1) && (3 === a ? f.push(1, 5) : f.push(1, 2, 3));
        -1 < b.indexOf(2) && f.push(7);
        -1 < b.indexOf(4) && d && c && f.push(8);
        return f
    }
    ;
    class Wt {
        constructor(a, b, c) {
            this.o = a.slice(0);
            this.l = a.slice(0);
            this.m = Va(this.l, 1);
            this.j = c
        }
    }
    ;function Xt(a) {
        if (0 != a.j)
            throw Error("Already resolved/rejected.");
    }
    var Zt = class {
        constructor() {
            this.l = new Yt(this);
            this.j = 0
        }
    }
    ;
    function $t(a) {
        switch (a.j.j) {
        case 0:
            break;
        case 1:
            a.l && a.l(a.j.o);
            break;
        case 2:
            a.m && a.m(a.j.m);
            break;
        default:
            throw Error("Unhandled deferred state.");
        }
    }
    var Yt = class {
        constructor(a) {
            this.j = a
        }
        then(a, b) {
            if (this.l)
                throw Error("Then functions already set.");
            this.l = a;
            this.m = b;
            $t(this)
        }
    }
    ;
    var au = class {
        constructor(a, b) {
            this.j = a;
            this.exception = b
        }
    }
    ;
    function bu(a) {
        B(this, a, null, null)
    }
    v(bu, z);
    function cu(a) {
        try {
            {
                const f = du(a).getItem("adsbygoogle_in_page_survey_freqcap");
                var b = f ? oe(bu, f) : null
            }
            if (b) {
                var c = D(b, 1);
                if (null == c)
                    var d = !0;
                else {
                    var e = D(a.l, 1) || 0;
                    d = c + e < (new Date).getTime()
                }
            } else
                d = !0;
            return d
        } catch (f) {
            return !1
        }
    }
    function eu(a) {
        try {
            var b = (new Date).getTime()
              , c = new bu;
            var d = I(c, 1, b);
            du(a).setItem("adsbygoogle_in_page_survey_freqcap", d.A());
            return !0
        } catch (e) {
            return !1
        }
    }
    function du(a) {
        if (!a.j)
            throw Error("No localStorage");
        return a.j
    }
    class fu {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    }
    ;var gu = new Wq("ar_eg ar_jo ar_ma ar_sa ar_xb ar bg bn bs ca cs da de_at de_ch de el en_au en_ca en_gb en_ie en_in en_nz en_sg en_xa en_xc en en_za es_419 es_ar es_bo es_cl es_co es_cr es_do es_ec es_gt es_hn es_mx es_ni es_pa es_pe es_pr es_py es_sv es_us es_uy es_ve es et fil fi fr_ch fr gsw gu he hi hr hu id in it iw ja km kn ko ln lt lv ml mo mr ms nb nl no pa pl pt_br pt_pt pt ro ru sk sl sr_latn sr sv te th tl tr uk ur vi zh_cn zh_hk zh_tw zh".split(" "));
    function hu(a) {
        if (1 == D(a.o, 1) && gu.contains(a.m) && cu(a.l)) {
            var b = iu(a.j, a.A);
            b && ms(6, a.j, ei(`${"/pagead/js/" + Ug() + "/r20190131"}/user_satisfaction/in_page_surveys__${a.m}.js`)).then(c=>{
                const d = {
                    win: a.j,
                    domInterface: {
                        getDocument: ()=>a.j.document,
                        getContainer: ()=>kp(b.R),
                        attachToDom: e=>np(b, e)
                    },
                    webPropertyCode: a.v,
                    experimentIds: D(a.o, 2)
                };
                eu(a.l) && c.handleRequest(d)
            }
            )
        }
    }
    class ju {
        constructor(a, b, c, d, e, f) {
            this.j = a;
            this.v = b;
            this.m = c.replace("-", "_").toLowerCase();
            this.o = d;
            this.A = e;
            this.l = new fu(f,J(d, dm, 3) || new dm)
        }
    }
    function iu(a, b) {
        b = hp(b, a).filter(ct([5]));
        b = $p(b, a);
        const c = 1.5 * Y(a).clientHeight;
        a = b.filter(d=>d.N.j > c);
        a.sort((d,e)=>d.N.j - e.N.j);
        return a[0] || null
    }
    ;class ku {
        j() {
            const a = {
                ["google_tag_origin"]: "qs"
            };
            Z.F().j(1009, !1) && (a.google_reactive_ad_format = 40);
            return new ym([],a)
        }
    }
    ;class lu {
        j() {
            return new ym(["adsbygoogle-resurrected-ad-slot"],{})
        }
    }
    ;var mu = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            if (!this.j)
                return null;
            const e = this.j.google_ad_format || null
              , f = this.j.google_ad_slot || null;
            if (c = c.style) {
                var g = [];
                for (let h = 0; h < c.length; h++) {
                    const k = c.item(h);
                    "width" !== k && "height" !== k && g.push({
                        yb: k,
                        value: c.getPropertyValue(k)
                    })
                }
                c = {
                    ra: g
                }
            } else
                c = {};
            a = An(d.document, a, f, e, c, b);
            a.V.setAttribute("data-pub-vars", JSON.stringify(this.j));
            return a
        }
        m() {
            return this.j ? parseInt(this.j.google_ad_height, 10) || null : null
        }
    }
    ;
    function nu(a) {
        return qn(a.j.document).map(b=>{
            const c = new ar(b,3);
            b = new mu(Gn(a.j, b));
            return new gp(c,b,a.l,!1,0,[],null,a.j,null)
        }
        )
    }
    class ou {
        constructor(a, b) {
            this.j = a;
            this.l = b || null
        }
    }
    ;const pu = {
        Fb: "10px",
        fb: "10px"
    };
    function qu(a) {
        return bn(a.j.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b=>new gp(new ar(b,1),new bp(pu),a.l,!1,0,[],null,a.j,null))
    }
    class ru {
        constructor(a, b) {
            this.j = a;
            this.l = b || null
        }
    }
    ;function su(a, b, c, d) {
        var e = d.l;
        d = d.v(a.j);
        a.o ? (d.type = b,
        a.j.console.log(d),
        e && a.j.console.error(e)) : 0 < c && (d.r = c,
        W(b, d, c))
    }
    function tu(a, b) {
        su(a, a.l, a.m, b)
    }
    var uu = class {
        constructor(a, b, c, d, e, f) {
            this.v = a;
            this.l = b;
            this.A = c;
            this.m = d;
            this.o = e;
            this.j = f
        }
    }
    ;
    var vu = (a,b,c,d,e,f)=>{
        try {
            const g = a.j
              , h = zf(a, "SCRIPT");
            h.async = !0;
            td(h, b);
            g.head.appendChild(h);
            h.addEventListener("load", ()=>{
                e();
                d && g.head.removeChild(h)
            }
            );
            h.addEventListener("error", ()=>{
                0 < c ? vu(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h),
                f())
            }
            )
        } catch (g) {
            f()
        }
    }
    ;
    var wu = (a,b)=>{
        const c = a.document
          , d = lf(a)
          , e = ()=>{
            if (!a.frames[b])
                if (c.body) {
                    const f = zf(d, "IFRAME");
                    f.style.display = "none";
                    f.style.width = "0px";
                    f.style.height = "0px";
                    f.style.border = "none";
                    f.style.zIndex = "-1000";
                    f.style.left = "-1000px";
                    f.style.top = "-1000px";
                    f.name = b;
                    c.body.appendChild(f)
                } else
                    a.setTimeout(e, 5)
        }
        ;
        e()
    }
    ;
    function xu(a) {
        const b = Jb(new yb(zb,"https://fundingchoicesmessages.google.com/uf/%{id}?ers=%{ers}"), {
            id: a.m,
            ers: a.l
        });
        vu(a.o, b, 0, !1, ()=>{}
        , ()=>{}
        )
    }
    class yu {
        constructor(a, b, c) {
            this.j = a;
            this.o = lf(this.j);
            this.m = b;
            this.l = c
        }
        start() {
            try {
                wu(this.j, "googlefcPresent"),
                xu(this)
            } catch (a) {}
        }
    }
    ;var Au = (a,b,c,d,e,f=null,g=null)=>{
        zu(a, new uu("ama_success","ama_failure",.1,.1,!1,a), b, c, d, e, f, new Pm(a), g)
    }
      , zu = (a,b,c,d,e,f,g=null,h=null,k=null)=>{
        if (c)
            if (d) {
                var l = [];
                J(d, Yl, 18) && l.push(2);
                e.M && l.push(0);
                J(d, Pl, 14) && l.push(1);
                J(d, em, 21) && J(J(d, em, 21), fm, 1) && l.push(3);
                try {
                    Bu(new Cu(a,b,c,d,e,l,f,g,null,h,k))
                } catch (m) {
                    tu(b, Pq(Sq(Rq(Nq(new Tq(0), c), d), l).$(1), m))
                }
            } else
                tu(b, Nq(new Tq(0), c).$(8));
        else
            tu(b, (new Tq(0)).$(9))
    }
      , Du = a=>{
        const b = [];
        for (const c of a) {
            a = {};
            const d = c.G;
            for (const e of Qm(d))
                a[e] = d.get(e);
            a = {
                anchorElement: c.A.j(c.j),
                position: c.l(),
                clearBoth: c.C,
                locationType: c.Wa,
                placed: c.m,
                placementProto: c.o ? c.o.L : null,
                articleStructure: c.I ? c.I.L : null,
                rejectionReasons: a
            };
            b.push(a)
        }
        return {
            placementIdentifiers: b
        }
    }
    ;
    function Bu(a) {
        a.G.forEach(b=>{
            switch (b) {
            case 0:
                {
                    Eu(a) && Fu(a, "p", Gu(a));
                    if (sm(a.j) && 1 === D(sm(a.j), 1)) {
                        const R = J(sm(a.j), pm, 6);
                        R && 2 === D(R, 1) && Fn(a.l)
                    }
                    if (tm(a.j) && ee(tm(a.j), 12)) {
                        {
                            var c = a.l
                              , d = J(a.j, rm, 20);
                            const R = Io(c);
                            var e;
                            if (e = R) {
                                var f = J(R, rm, 7);
                                e = f || d ? f && d ? D(f, 1) !== D(d, 1) : !0 : !1
                            }
                            if (e) {
                                me(R, []);
                                ge(R, 6, void 0);
                                ge(R, 7, d);
                                const ea = R.A();
                                try {
                                    c.localStorage.setItem("google_ama_settings", ea)
                                } catch (ub) {}
                            }
                        }
                    }
                    const qa = a.m.pd;
                    let Za = Lr(a.l, qa);
                    if (a.m.M && null != D(a.m.M, 10)) {
                        const R = ce(J(a.m.M, nm, 10), 1);
                        if (null !== R && void 0 !== R) {
                            {
                                var g = a.l
                                  , h = R;
                                const ea = Mr(g)
                                  , ub = Y(g).clientHeight || Jr[ea];
                                let fd = void 0;
                                if (qa) {
                                    const ha = Nr(L(qa, nl, 2), ea)
                                      , Ea = ha ? J(ha, ql, 7) : void 0;
                                    fd = Ea ? Ur(Ea, ub) : void 0
                                }
                                {
                                    var k = fd;
                                    const ha = Mr(g)
                                      , Ea = Y(g).clientHeight || Jr[ha]
                                      , O = Tr(Kr[ha].Db, Ea);
                                    var l = null === O ? Pr(ha, Ea) : new Sr(O,O,Vr(O, O, 8),8,.3,k)
                                }
                                {
                                    const ha = Tr(Kr[ea].nc, ub)
                                      , Ea = Tr(Kr[ea].Db, ub)
                                      , O = Tr(Kr[ea].mc, ub);
                                    let Eb = l.m;
                                    ha && O && Ea && void 0 !== h && (Eb = .5 >= h ? Ea + (1 - 2 * h) * (ha - Ea) : O + (2 - 2 * h) * (Ea - O));
                                    const gd = Eb;
                                    Za = new Sr(Eb,gd,Vr(Eb, gd, l.l),l.l,l.o,l.j)
                                }
                            }
                        }
                    }
                    const jb = a.m.M ? D(a.m.M, 6) : []
                      , Wb = a.m.M ? L(a.m.M, zl, 5) : [];
                    {
                        var m = a.j;
                        const R = L(m, Wl, 1)
                          , ea = a.m.M && um(a.m.M, 1) ? "text_image" : "text"
                          , ub = new ku
                          , fd = new lu;
                        let ha = hp(R, a.l, {
                            Pc: ub,
                            bd: new dp(ea)
                        });
                        R.length != ha.length && a.D.push(13);
                        ha = ha.concat(qu(new ru(a.l,ub)));
                        let Ea = 0;
                        if (sm(m) && 1 === D(sm(m), 1)) {
                            const O = J(sm(m), pm, 6);
                            if (O && (Ea = D(O, 2) || 0,
                            1 === D(O, 1))) {
                                const Eb = nu(new ou(a.l,fd));
                                ha = ha.concat(Eb)
                            }
                        }
                        ha = ha.concat(sr(m, ea, a.l));
                        var r = new st(ha,{},a.l,Ea)
                    }
                    var t = a.v
                      , u = a.l
                      , V = {
                        la: Za,
                        Wc: a.O,
                        ta: a.m.ta,
                        ib: jb,
                        Ka: Wb
                    };
                    var H = Za;
                    if (tm(a.j)) {
                        var U = tm(a.j)
                          , Da = ee(U, 14)
                          , na = ee(U, 2)
                          , ja = ee(U, 3)
                          , da = ee(U, 4)
                          , ka = ee(U, 5)
                          , sc = ee(U, 6)
                          , Mf = ce(U, 8);
                        var Nf = {
                            Ea: Da,
                            Fa: na,
                            Mb: ja,
                            pc: da,
                            Nb: ka,
                            kc: sc,
                            dc: null == Mf ? 0 : Mf,
                            cc: D(U, 10),
                            $a: ee(U, 12),
                            Ma: Hu(a, H, U),
                            jb: Iu(a)
                        }
                    } else
                        Nf = {
                            Ea: !1,
                            Fa: !1,
                            Mb: !1,
                            pc: !1,
                            Nb: !1,
                            kc: !1,
                            dc: 0,
                            cc: 0,
                            $a: !1,
                            Ma: !1,
                            jb: Iu(a)
                        };
                    a.o = new Lt(r,t,u,V,Nf);
                    const Xb = a.m.M ? D(a.m.M, 2) : [];
                    {
                        var hd = D(qa, 1)
                          , ya = a.o
                          , he = a.l;
                        const R = Vt(hd, Xb, {
                            Va: ya.Va(),
                            pb: ya.pb(),
                            wd: !!ya.l.jb
                        });
                        var Of = new Wt(R,hd,ya,he)
                    }
                    a.A = Of;
                    {
                        var ra = a.A;
                        const R = new Zt;
                        for (ra.j.m = !0; 0 < ra.l.length; ) {
                            {
                                var tc = ra;
                                const ea = Yr[ra.l[0]];
                                if (ea)
                                    var uc = ea(tc.j);
                                else
                                    tc.j.$(12),
                                    uc = !0
                            }
                            uc || ra.j.$(5);
                            ra.l.shift()
                        }
                        try {
                            var vc = new Ut(ra.j.o.l.filter(ip).j.length,ra.j.H.slice(0),ra.j.v.slice(0),ra.j.o.l.j.length,ra.j.o.o.j);
                            var wc = R
                              , ui = new au(vc,void 0);
                            Xt(wc);
                            wc.j = 1;
                            wc.o = ui;
                            $t(wc.l)
                        } catch (ea) {
                            var id = R
                              , Pf = ea;
                            Xt(id);
                            id.j = 2;
                            id.m = Pf;
                            $t(id.l)
                        }
                        var Qf = R.l
                    }
                    Qf.then(Ba(a.Z, a), Ba(a.H, a))
                }
                break;
            case 1:
                {
                    const qa = J(a.j, Pl, 14);
                    if (qa) {
                        {
                            var kb = a.l
                              , jd = a.l.location.href
                              , vi = qa;
                            const Za = new Ym(vo(ro(kb)),5,200);
                            var Yb = new Bo(kb,jd,vi,new Zm(kb),Za)
                        }
                        {
                            const Za = D(Yb.j, 1);
                            if (Za) {
                                Yb.m.P();
                                var ie = yo(Yb);
                                for (let jb = 0; jb < ie.length; ++jb) {
                                    const Wb = ie[jb]
                                      , Xb = ao(Wb);
                                    if (Xb) {
                                        {
                                            var kd = Yb.m
                                              , je = Za
                                              , xc = Xb
                                              , Rf = Wb.v
                                              , Sf = D(Wb.m, 3) || ""
                                              , yc = D(Yb.j, 3) || null;
                                            const R = "afs_container_" + va(xc);
                                            xc.id = R;
                                            const ea = {
                                                pubId: je,
                                                styleId: Sf,
                                                query: Rf
                                            };
                                            yc && (ea.fexp = yc);
                                            kd.j._googCsa("ads", ea, {
                                                container: R
                                            })
                                        }
                                        break
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case 2:
                {
                    const qa = J(a.j, Yl, 18);
                    if (qa) {
                        const Za = a.U || new yu(a.l,a.v,2);
                        {
                            var lb = new Kq(a.l,Za,qa,new vq(a.l),L(a.j, Wl, 1));
                            let jb = !1;
                            if (1 == D(lb.l, 1)) {
                                var ke = new Jq(lb.o,lb.j,lb.m);
                                wq(ke.l);
                                Hq(ke);
                                jb = !0
                            }
                            1 == D(lb.l, 3) && (Cq(new Dq(lb.o,lb.j,lb.m)),
                            jb = !0);
                            jb && lb.v.start()
                        }
                    }
                }
                break;
            case 3:
                {
                    const qa = J(a.j, em, 21);
                    if (qa) {
                        var ld = J(qa, fm, 1);
                        if (ld) {
                            var Fb = J(a.j, $l, 22);
                            if (Fb) {
                                var le = D(Fb, 1);
                                le && hu(new ju(a.l,a.v,le,ld,L(a.j, Wl, 1),a.W))
                            }
                        }
                    }
                }
            }
        }
        )
    }
    function Iu(a) {
        const b = nk(48, .5);
        return a.m.M && null != D(a.m.M, 10) && null != D(J(a.m.M, nm, 10), 1) ? ce(J(a.m.M, nm, 10), 1) >= b ? a.I : null : a.I
    }
    function Hu(a, b, c) {
        switch (D(c, 17)) {
        case 0:
            return !1;
        case 1:
            return !0;
        case 2:
            return a.m.M && null != D(a.m.M, 10) ? .5 <= (ce(J(a.m.M, nm, 10), 1) || 0) : !0;
        case 3:
            return a = yt(a.l),
            a = null != a.j.sb ? a.j.sb : null,
            b = (b.j ? b.j.ma : void 0) || 0,
            null != a && a <= b;
        default:
            return !1
        }
    }
    function Ju(a, b) {
        for (var c = Oq(Oq(new Tq(b.sa), b.ea), a.D), d = b.Ga, e = 0; e < d.length; e++)
            a: {
                for (var f = d[e], g = 0; g < c.o.length; g++)
                    if (c.o[g] == f)
                        break a;
                c.o.push(f)
            }
        c.j.ppos = b.hc;
        c.j.eatf = b.bb;
        c.j.reatf = b.lb;
        c.j.a = a.A.o.slice(0).join(",");
        c = Nq(Sq(Rq(c, a.j), a.G), a.v);
        if (d = b.ab)
            c.j.as_count = d.Bc,
            c.j.d_count = d.Vc,
            c.j.ng_count = d.ld,
            c.j.am_count = d.Ec,
            c.j.atf_count = d.Cc,
            c.j.mdns = Uq(d.gd),
            c.j.alldns = Uq(d.Dc);
        d = b.xb;
        null != d && (c.j.allp = d);
        if (d = b.Xc) {
            e = [];
            for (var h of Qm(d))
                0 < d.get(h).length && (f = d.get(h)[0],
                e.push("(" + [h, f.Kc, f.Cd].join() + ")"));
            c.j.fd = e.join(",")
        }
        h = b.wb;
        null != h && (c.j.pgh = h);
        void 0 !== b.exception && Pq(c, b.exception).$(1);
        0 < b.ea.length || 0 < a.D.length || void 0 !== b.exception ? tu(a.J, c) : (a = a.J,
        su(a, a.v, a.A, c))
    }
    function Ku(a) {
        return sm(a.j) && 1 === D(sm(a.j), 1) ? !(J(sm(a.j), pm, 6) && 1 <= (D(J(sm(a.j), pm, 6), 3) || 0)) : !1
    }
    function Lu(a) {
        if (Ku(a)) {
            a = a.o;
            var b = qo({
                ya: !0,
                za: !0
            }, a.j);
            a = 0 < Ft(b, a.j)
        } else
            a = a.o.j,
            b = po({
                ha: !1,
                xa: !1
            }, a),
            a = 0 < Ft(b, a);
        return a
    }
    function Mu(a) {
        if (Eu(a)) {
            var b = Gu(a);
            a.C.P(null == b ? void 0 : b, ()=>{
                Fu(a, "s", b)
            }
            );
            Nm(a.C, c=>{
                Fu(a, "d", Gu(a), c);
                a.C.Qa()
            }
            )
        }
    }
    function Nu(a, b, c) {
        const d = Ou(a, Kt(a.o), b, c);
        d.ab = Ht(a.o.j);
        if (b = b.j.l)
            d.Xc = b;
        d.wb = Y(a.l).scrollHeight;
        (Xg || ii()) && ji(14, [Du(a.o.o.l.j.slice(0)), a.o.D, d.ab]);
        T(753, ()=>{
            if (Z.F().j(334, !1) && null != a.o) {
                var e = a.l;
                var f = a.o
                  , g = nk(65)
                  , h = nk(66)
                  , k = nk(54)
                  , l = Mt(g, "gapsMeasurementWindow") || Mt(h, "gapsPerMeasurementWindow") || Mt(k, "maxGapsToReport");
                e = null != l ? new wr(null,l) : -1 == h && -1 == k ? new wr(null,"ShouldHaveLimits") : new wr({
                    value: new Tt(e,f,g,h,k)
                },null);
                if (null != e.j) {
                    e = e.j.value;
                    f = $p(e.m.o.l.j.slice(0), e.l);
                    g = Ot(e);
                    h = new Co(Pt(e));
                    for (k = 0; k < f.length; ++k)
                        h.contains(k) || (l = Qt(e, f[k]),
                        g.push(...l));
                    g.push(new ur(0,0));
                    g.push(vr(new ur(Y(e.l).scrollHeight,0)));
                    f = g;
                    f = Rt(f);
                    g = new Sm;
                    for (h = 0; h < f.length; ++h)
                        k = f[h],
                        l = e.C ? 0 : Math.floor(k.ja / e.v),
                        void 0 !== g.j[l] || g.set(l, []),
                        g.get(l).push(k);
                    f = g;
                    f = St(e, f);
                    e = "M" + (e.o ? -1 : e.j) + "H" + (e.C ? -1 : e.v) + "C" + (e.D ? -1 : e.A) + "W" + f.join("W");
                    d.hc = e
                } else
                    d.hc = "E" + (e.l || "Failed")
            }
        }
        )();
        return d
    }
    function Ou(a, b, c, d) {
        const e = c.j
          , f = e.j;
        let g = e.sa
          , h = e.ea.slice()
          , k = e.Ga.slice();
        c = c.exception;
        if (!b)
            return k.push(12),
            a.A.m && k.push(13),
            {
                sa: g,
                xb: f,
                ea: h,
                Ga: k,
                exception: c,
                lb: d,
                bb: !1
            };
        b.numAutoAdsPlaced ? g += b.numAutoAdsPlaced : a.A.m && k.push(13);
        void 0 !== b.exception && (c = b.exception);
        return {
            sa: g,
            xb: f,
            ea: e.ea.slice(),
            Ga: k,
            exception: c,
            lb: d,
            bb: !!b.eatf
        }
    }
    function Fu(a, b, c, d) {
        a = {
            r: b,
            pg_h: Y(a.l).scrollHeight,
            su: a.l.location.hostname,
            d: void 0 == c ? -1 : c
        };
        void 0 !== d && (a.pg_hd = d);
        W("ama_inf_scr", a, 1)
    }
    function Eu(a) {
        return tm(a.j) && ee(tm(a.j), 18) ? !0 : !1
    }
    function Gu(a) {
        let b = null;
        tm(a.j) && null != D(tm(a.j), 19) && (b = D(tm(a.j), 19));
        return b
    }
    class Cu {
        constructor(a, b, c, d, e, f, g, h, k, l, m) {
            this.l = a;
            this.J = b;
            this.v = c;
            this.j = d;
            this.m = e;
            this.G = f;
            this.O = h || null;
            this.D = [];
            this.U = k;
            this.C = l;
            this.I = m;
            this.W = g
        }
        Z(a) {
            try {
                const f = Lu(this) || Ku(this) ? Lu(this) : void 0;
                if (tm(this.j) && ee(tm(this.j), 12)) {
                    if (Ku(this)) {
                        {
                            var b = this.o;
                            const h = qo({
                                ya: !0,
                                za: !0
                            }, b.j);
                            var c = Ft(h, b.j)
                        }
                    } else {
                        {
                            var d = this.o;
                            const h = po({
                                ha: !1,
                                xa: !1
                            }, d.j);
                            c = Ft(h, d.j)
                        }
                    }
                    const g = J(this.j, rl, 19);
                    if (g) {
                        const h = Lr(this.l, g)
                          , k = new Do;
                        var e = Rr(h, 0).Ba;
                        I(k, 3, e);
                        I(k, 1, h.l);
                        Jo({
                            wa: f,
                            Ra: c,
                            cb: k
                        }, this.l)
                    } else
                        Jo({
                            wa: f,
                            Ra: c
                        }, this.l)
                } else
                    Jo({
                        wa: f
                    }, this.l);
                Mu(this);
                Ju(this, Nu(this, a, Lu(this)))
            } catch (f) {
                this.H(f)
            }
        }
        H(a) {
            Ju(this, {
                sa: 0,
                xb: void 0,
                ea: [],
                Ga: [],
                exception: a,
                lb: void 0,
                bb: void 0,
                ab: void 0
            })
        }
    }
    ;var Pu = (a,b,c,d,e,f=null)=>{
        if (Z.F().j(316, !1))
            var g = null;
        else
            try {
                g = a.localStorage.getItem("google_ama_config")
            } catch (m) {
                g = null
            }
        try {
            var h = g ? oe(hm, g) : null
        } catch (m) {
            h = null
        }
        g = h;
        a: {
            if (d)
                try {
                    var k = oe(hm, d);
                    break a
                } catch (m) {
                    Bm(a, {
                        cfg: 1,
                        inv: 1
                    })
                }
            k = null
        }
        if (d = k) {
            k = new jm;
            ge(d, 3, k);
            g = tm(d) && D(tm(d), 13) ? D(tm(d), 13) : 1;
            g = Date.now() + 864E5 * g;
            I(k, 1, g);
            k = new d.constructor(pe(d.L));
            tm(d) && (g = new qm,
            h = ee(tm(d), 12),
            g = I(g, 12, h),
            h = ee(tm(d), 15),
            g = I(g, 15, h),
            ge(k, 15, g));
            g = L(k, Wl, 1);
            for (h = 0; h < g.length; h++)
                I(g[h], 11, []);
            ge(k, 22, void 0);
            if (Z.F().j(316, !1))
                Dm(a);
            else
                try {
                    a.localStorage.setItem("google_ama_config", k.A())
                } catch (m) {
                    Bm(a, {
                        lserr: 1
                    })
                }
            k = wm(a, L(d, km, 7));
            a: {
                if (k && (g = D(k, 3),
                h = J(d, ul, 9),
                g && h)) {
                    b: {
                        h = L(h, tl, 1);
                        for (l of h)
                            if (D(l, 1) == g) {
                                var l = J(l, rl, 2) || null;
                                break b
                            }
                        l = null
                    }
                    if (l)
                        break a
                }
                l = J(d, rl, 8) || new rl
            }
            l = {
                pd: l
            };
            k && (l.M = k);
            k && um(k, 3) && (l.ta = [1]);
            if (7 == c.google_pgb_reactive && (k = l.M,
            !k || !de(k, 8)))
                return !1;
            Qe(a, 2) && (ji(5, [d.L]),
            k = Cm(c),
            c = (c = l.M) && D(c, 4) || "",
            k.google_package = c,
            c = new ym(["google-auto-placed"],k),
            Au(a, b, d, l, e, c, f));
            return !0
        }
        g && (Bm(a, {
            cfg: 1,
            cl: 1
        }),
        Dm(a));
        return !1
    }
    ;
    var Qu = a=>5 == a.google_pgb_reactive && !!a.google_reactive_ads_config
      , Ru = a=>"number" === typeof a.google_reactive_sra_index
      , Wu = (a,b,c)=>{
        const d = b.j || b.pubWin
          , e = b.B;
        e.google_reactive_plat = zs(d, e, c);
        var f = As(a);
        f && (e.google_reactive_plaf = f);
        (f = Bs(a)) && (e.google_reactive_fba = f);
        Su(a, e);
        f = us(d.location);
        Tu(a, f, e);
        f ? (e.fra = f,
        e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
        const g = kh() || Ck(Sh(b.pubWin));
        f = T(429, (l,m)=>Uu(d, e.google_ad_client, a, g, l, m, c));
        const h = Kj(d)
          , k = T(430, Ca(Xj, d, 431, rj));
        Cj(d, "rsrai", f, k);
        h.wasReactiveTagRequestSent = !0;
        Vu(b, a, c)
    }
    ;
    const Vu = (a,b,c)=>{
        const d = a.j || a.pubWin
          , e = a.B
          , f = ua(b.page_level_pubvars) ? b.page_level_pubvars : {};
        a = T(353, (g,h)=>{
            var k = e.google_ad_client;
            return Fg(h.origin, Xg) ? Pu(d, k, f, g.config, c) : !1
        }
        );
        b = T(353, Ca(Xj, d, 353, rj));
        Cj(d, "apcnf", a, b)
    }
    ;
    var Uu = (a,b,c,d,e,f,g)=>{
        if (!Fg(f.origin, Xg))
            return !1;
        f = e.data;
        if (!Array.isArray(f))
            return !1;
        if (!Qe(a, 1))
            return !0;
        f && ji(6, [f]);
        e = e.amaConfig;
        const h = []
          , k = []
          , l = Kj(a);
        let m = null;
        for (let r = 0; r < f.length; r++) {
            if (!f[r])
                continue;
            const t = f[r]
              , u = t.adFormat;
            l && t.enabledInAsfe && (l.reactiveTypeEnabledInAsfe[u] = !0);
            if (!t.noCreative) {
                t.google_reactive_sra_index = r;
                if (9 === u && e) {
                    t.pubVars = Object.assign(t.pubVars || {}, Xu(c, t, d));
                    const V = new Hm;
                    if (Fm(V, t)) {
                        m = V;
                        continue
                    }
                }
                h.push(t);
                k.push(u)
            }
        }
        h.length && (W("rasra::pm", {
            rt: k.join(","),
            c: b
        }, .1),
        Ds(522, r=>{
            Yu(h, a, b, r, c, d, g)
        }
        ));
        e && Pu(a, b, c, e, g, m);
        return !0
    }
      , Xu = (a,b,c)=>{
        var d = b.adFormat;
        if (b.piggyback)
            return d = Fs(d, a, b.pubVars),
            d.google_pgb_reactive = d.google_pgb_reactive || 5,
            b.pubVars = d;
        const e = b.adKey;
        delete b.adKey;
        c = {
            ["google_reactive_viewport_size"]: c
        };
        a = a.page_level_pubvars;
        ua(a) && Object.assign(c, a);
        c.google_ad_unit_key = e;
        c.google_reactive_sra_index = b.google_reactive_sra_index;
        30 === d && (c.google_reactive_ad_format = 30);
        c.google_pgb_reactive = c.google_pgb_reactive || 5;
        return b.pubVars = c
    }
      , Yu = (a,b,c,d,e,f,g)=>{
        const h = [];
        for (let k = 0; k < a.length; k++) {
            const l = a[k]
              , m = l.adFormat
              , r = l.adKey
              , t = l.piggyback
              , u = d.configProcessorForAdFormat(m);
            m && u && (t || r) ? (l.pubVars = Xu(e, l, f),
            delete l.google_reactive_sra_index,
            h.push(m),
            zj(466, ()=>u.verifyAndProcessConfig(b, l, g))) : W("rasra::ivc", {
                af: m,
                ak: r,
                c
            }, .1)
        }
        W("rasra::pr", {
            rt: h.join(","),
            c
        }, .1)
    }
      , Su = (a,b)=>{
        const c = [];
        let d = !1;
        Gh(Ij, (e,f)=>{
            let g;
            if (a.hasOwnProperty(f)) {
                const h = a[f];
                ua(h) && h.google_ad_channel && (g = String(h.google_ad_channel))
            }
            f = Ij[f] - 1;
            c[f] && "+" != c[f] || (c[f] = g ? g.replace(/,/g, "+") : "+",
            d = d || g)
        }
        );
        d && (b.google_reactive_sra_channels = c.join(","))
    }
      , Tu = (a,b,c)=>{
        const d = a.page_level_pubvars;
        !c.google_adtest && ("on" == a.google_adtest || d && "on" == d.google_adtest || b) && (c.google_adtest = "on")
    }
    ;
    Cd("script");
    /* 
 
 Copyright 2019 The AMP HTML Authors. All Rights Reserved. 
 
 Licensed under the Apache License, Version 2.0 (the "License"); 
 you may not use this file except in compliance with the License. 
 You may obtain a copy of the License at 
 
      http://www.apache.org/licenses/LICENSE-2.0 
 
 Unless required by applicable law or agreed to in writing, software 
 distributed under the License is distributed on an "AS-IS" BASIS, 
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
 See the License for the specific language governing permissions and 
 limitations under the License. 
*/
    var Zu = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };
    var $u = "google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_layout google_ad_layout_key google_ad_modifications google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_dom_fingerprint google_ad_semantic_area google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_analytics_domain_name google_analytics_uacct google_apsail google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ad_positions google_content_recommendation_columns_num google_content_recommendation_rows_num google_content_recommendation_ui_type google_content_recommendation_use_square_imgs google_contents google_core_dbp google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_bfa ebfa ebfaca google_enable_content_recommendations google_enable_ose google_encoding google_font_face google_font_size google_frame_id google_full_width_responsive_allowed efwr google_full_width_responsive gfwroh gfwrow gfwroml gfwromr gfwroz gfwrnh gfwrnwer gfwrnher google_gl google_hints google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_max_responsive_height google_ml_rank google_mtl google_native_ad_template google_native_settings_key google_num_radlinks google_num_radlinks_per_unit google_only_pyv_ads google_override_format google_page_url google_pgb_reactive google_pucrd google_referrer_url google_region google_resizing_allowed google_resizing_height google_resizing_width rpe google_responsive_formats google_responsive_auto_format armr google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_safe_for_responsive_override google_scs google_source_type google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_tag_origin google_tag_partner google_targeting google_tfs google_video_doc_id google_video_product_type google_video_url_to_fetch google_webgl_support google_yt_pt google_yt_up google_package google_debug_params google_enable_single_iframe dash google_refresh_count google_restrict_data_processing".split(" ")
      , av = a=>(a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && /google_ad_client/.test(a[1]) ? a[1] : null
      , bv = a=>{
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"),
            (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && /google_ad_client/.test(a[1]))
                return a[1];
        return null
    }
      , ev = a=>{
        try {
            a: {
                var b = a.document.getElementsByTagName("script")
                  , c = a.navigator && a.navigator.userAgent || "";
                const f = /appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa\/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube/i.test(c) || /i(phone|pad|pod)/i.test(c) && /applewebkit/i.test(c) && !/version|safari/i.test(c) && !Th() ? av : bv;
                for (let g = b.length - 1; 0 <= g; g--) {
                    const h = b[g];
                    if (!h.google_parsed_script) {
                        h.google_parsed_script = !0;
                        const k = f(h);
                        if (k) {
                            var d = k;
                            break a
                        }
                    }
                }
                d = null
            }
        } catch (f) {
            return !1
        }
        if (!d)
            return !1;
        try {
            {
                c = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                b = {};
                let f;
                for (; f = c.exec(d); )
                    b[f[1]] = cv(f[2]);
                var e = b
            }
            dv(e, a)
        } catch (f) {
            return !1
        }
        return !!a.google_ad_client
    }
      , fv = a=>{
        const b = {};
        null == a.google_ad_client && ev(a) && (b.google_loader_features_used = 2048);
        dv(a, b);
        return b
    }
      , cv = a=>{
        switch (a) {
        case "true":
            return !0;
        case "false":
            return !1;
        case "null":
            return null;
        case "undefined":
            break;
        default:
            try {
                const b = a.match(/^(?:'(.*)'|"(.*)")$/);
                if (b)
                    return b[1] || b[2] || "";
                if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                    const c = parseFloat(a);
                    return c === c ? c : void 0
                }
            } catch (b) {}
        }
    }
      , dv = (a,b)=>{
        for (let c = 0; c < $u.length; c++) {
            const d = $u[c];
            null == b[d] && null != a[d] && (b[d] = a[d])
        }
    }
    ;
    function gv(a) {
        a = Kj(a);
        a.stateForType[16] || (a.stateForType[16] = []);
        return a.stateForType[16]
    }
    function hv(a, b, c) {
        const d = iv(a, b);
        b.google_full_width_responsive_allowed && (a.style.marginLeft = b.gfwroml || "",
        a.style.marginRight = b.gfwromr || "",
        a.style.height = b.gfwroh ? b.gfwroh + "px" : "",
        a.style.width = b.gfwrow ? b.gfwrow + "px" : "",
        a.style.zIndex = b.gfwroz || "",
        delete b.google_full_width_responsive_allowed);
        delete b.google_ad_format;
        delete b.google_ad_width;
        delete b.google_ad_height;
        delete b.google_content_recommendation_ui_type;
        delete b.google_content_recommendation_rows_num;
        delete b.google_content_recommendation_columns_num;
        N().google_spfd(a, b, c);
        const e = iv(a, b);
        !e && d && 1 == a.childNodes.length ? (jv(d, !1),
        b.google_reactive_ad_format = 16,
        b.google_ad_section = "responsive_resize",
        a.setAttribute("data-adsbygoogle-status", "reserved"),
        a.className += " adsbygoogle-noablate",
        Es(c),
        c.adsbygoogle.push({
            element: a,
            params: b
        })) : e && d ? e != d && (jv(d, !1),
        jv(e, !0)) : W("auto_size_refresh", {
            context: "showOrHideElm",
            url: c.location.href,
            nodes: a.childNodes.length
        })
    }
    function kv(a, b, c) {
        if (!kn(c, b))
            return ()=>{}
            ;
        const d = lv(c, b);
        if (!d)
            return ()=>{}
            ;
        const e = gv(b);
        a = a == c ? fv(a) : rb(c);
        const f = {
            zb: d,
            B: a,
            offsetWidth: d.offsetWidth
        };
        e.push(f);
        return ()=>Va(e, f)
    }
    function lv(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a)
            return null;
        for (a = a.parentElement; a && !Qh.test(a.className); )
            a = a.parentElement;
        return a
    }
    function iv(a, b) {
        for (let g = 0; g < a.childNodes.length; g++) {
            const h = {}
              , k = a.childNodes[g];
            var c = k.style
              , d = h
              , e = ["width", "height"];
            for (let l = 0; l < e.length; l++) {
                const m = "google_ad_" + e[l];
                if (!d.hasOwnProperty(m)) {
                    var f = qg(c[e[l]]);
                    f = null === f ? null : Math.round(f);
                    null != f && (d[m] = f)
                }
            }
            if (h.google_ad_width == b.google_ad_width && h.google_ad_height == b.google_ad_height)
                return k
        }
        return null
    }
    function jv(a, b) {
        a.style.display = b ? "inline-block" : "none"
    }
    class mv {
        constructor() {
            this.j = null
        }
        P(a) {
            const b = Kj(a);
            b.wasReactiveAdConfigReceived[16] || (b.wasReactiveAdConfigReceived[16] = !0,
            this.j = a.innerHeight >= a.innerWidth ? 0 : 90,
            Ce(a, "resize", ()=>{
                var c = a.innerHeight >= a.innerWidth ? 0 : 90;
                if (this.j != c) {
                    this.j = c;
                    c = gv(a);
                    for (let d = 0; d < c.length; d++)
                        if (c[d].zb.offsetWidth != c[d].offsetWidth || c[d].B.google_full_width_responsive_allowed)
                            c[d].offsetWidth = c[d].zb.offsetWidth,
                            zj(467, Ca(hv, c[d].zb, c[d].B, a))
                }
            }
            ))
        }
    }
    ta(mv);
    const nv = {
        ["client"]: "google_ad_client",
        ["format"]: "google_ad_format",
        ["slotname"]: "google_ad_slot",
        ["ad_type"]: "google_ad_type"
    };
    var ov = a=>{
        Vf(nv, (b,c)=>{
            try {
                null != p[b] && (a[c] = p[b])
            } catch (d) {}
        }
        )
    }
      , pv = a=>{
        a.shv = Ug()
    }
    ;
    sj.o = !Xg;
    var qv = class {
        constructor(a, b, c) {
            this.o = a;
            this.m = b;
            this.j = c;
            this.l = null;
            this.v = this.A = 0
        }
        C() {
            10 <= ++this.A && p.clearInterval(this.l);
            var a = nn(this.o, this.m);
            a = on(this.o, this.m, a);
            const b = jn(this.m, this.o);
            null != b && 0 === b.x || p.clearInterval(this.l);
            a && (this.v++,
            W("rspv:al", {
                aligns: this.v,
                attempt: this.A,
                client: this.j.google_ad_client,
                eoffs: null != b ? b.x : null,
                eids: qk(this.j),
                slot: this.j.google_ad_slot,
                url: this.j.google_page_url
            }, .01))
        }
    }
    ;
    function rv(a) {
        try {
            return a.sz()
        } catch (b) {
            return !1
        }
    }
    function sv(a) {
        return !!a && ("object" === typeof a || "function" === typeof a) && rv(a) && Hh(a.nq) && Hh(a.nqa) && Hh(a.al) && Hh(a.rl)
    }
    function tv(a) {
        const b = T(189, Ba(a.O, a));
        a.l.setTimeout(b, 0)
    }
    class uv {
        constructor(a) {
            this.o = [];
            this.l = a || window;
            this.j = 0;
            this.m = null;
            this.D = 0
        }
        G(a, b) {
            0 != this.j || 0 != this.o.length || b && b != window ? this.v(a, b) : (this.j = 2,
            this.C(new vv(a,window)))
        }
        v(a, b) {
            this.o.push(new vv(a,b || this.l));
            tv(this)
        }
        I(a) {
            this.j = 1;
            if (a) {
                const b = T(188, Ba(this.A, this, !0));
                this.m = this.l.setTimeout(b, a)
            }
        }
        A(a) {
            a && ++this.D;
            1 == this.j && (null != this.m && (this.l.clearTimeout(this.m),
            this.m = null),
            this.j = 0);
            tv(this)
        }
        J() {
            return !(!window || !Array)
        }
        H() {
            return this.D
        }
        O() {
            if (0 == this.j && this.o.length) {
                const a = this.o.shift();
                this.j = 2;
                const b = T(190, Ba(this.C, this, a));
                a.win.setTimeout(b, 0);
                tv(this)
            }
        }
        C(a) {
            this.j = 0;
            a.j()
        }
    }
    var wv;
    uv.prototype.nq = uv.prototype.G;
    uv.prototype.nqa = uv.prototype.v;
    uv.prototype.al = uv.prototype.I;
    uv.prototype.rl = uv.prototype.A;
    uv.prototype.sz = uv.prototype.J;
    uv.prototype.tc = uv.prototype.H;
    var vv = class {
        constructor(a, b) {
            this.j = a;
            this.win = b
        }
    }
    ;
    function xv(a, b=window) {
        if (de(a, 5))
            try {
                return b.localStorage
            } catch (c) {}
        return null
    }
    function yv(a, b=document) {
        return de(a, 5) ? b.cookie : null
    }
    function zv(a, b, c=document) {
        b = yv(b, c);
        return null === b ? null : (new Ze({
            cookie: b
        })).get(a) || ""
    }
    function Av(a, b, c, d, e=document) {
        de(c, 5) && (new Ze(e)).set(a, b, d)
    }
    function Bv(a, b=document) {
        de(a, 5) && (a = new Ze(b),
        a.get("GoogleAdServingTest"),
        a.set("GoogleAdServingTest", "", {
            Yb: 0,
            path: void 0,
            domain: void 0
        }))
    }
    ;function Cv(a, b) {
        if (0 === a.l) {
            if (Dv(a, b))
                b = !0;
            else {
                Av("GoogleAdServingTest", "Good", b, void 0, a.j.document);
                var c = "Good" === zv("GoogleAdServingTest", b, a.j.document);
                c && Bv(b, a.j.document);
                b = c
            }
            a.l = b ? 2 : 1
        }
        return 2 === a.l
    }
    function Dv(a, b) {
        return zv("__gads", b, a.j.document)
    }
    var Ev = class {
        constructor(a) {
            this.j = a;
            this.l = 0
        }
    }
    ;
    const Fv = /^\.google\.(com?\.)?[a-z]{2,3}$/
      , Gv = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/;
    let Hv = ()=>p
      , Iv = p;
    const Kv = a=>{
        a = "https://" + `adservice${a}/adsid/integrator.${"js"}`;
        const b = [`domain=${encodeURIComponent(p.location.hostname)}`];
        Jv[3] >= Ga() && b.push(`adsid=${encodeURIComponent(Jv[1])}`);
        return a + "?" + b.join("&")
    }
    ;
    let Jv, Lv;
    const Mv = ()=>{
        Iv = Hv();
        Jv = Iv.googleToken = Iv.googleToken || {};
        var a = Ga();
        Jv[1] && Jv[3] > a && 0 < Jv[2] || (Jv[1] = "",
        Jv[2] = -1,
        Jv[3] = -1,
        Jv[4] = "",
        Jv[6] = "");
        Lv = Iv.googleIMState = Iv.googleIMState || {};
        a = Lv[1];
        Fv.test(a) && !Gv.test(a) || (Lv[1] = ".google.com");
        Array.isArray(Lv[5]) || (Lv[5] = []);
        "boolean" !== typeof Lv[6] && (Lv[6] = !1);
        Array.isArray(Lv[7]) || (Lv[7] = []);
        "number" !== typeof Lv[8] && (Lv[8] = 0)
    }
      , Nv = {
        kb: ()=>0 < Lv[8],
        rd: ()=>{
            Lv[8]++
        }
        ,
        sd: ()=>{
            0 < Lv[8] && Lv[8]--
        }
        ,
        td: ()=>{
            Lv[8] = 0
        }
        ,
        bh: ()=>!1,
        Qb: ()=>Lv[5],
        Ib: a=>{
            try {
                a()
            } catch (b) {
                p.setTimeout(()=>{
                    throw b;
                }
                , 0)
            }
        }
        ,
        ic: ()=>{
            if (!Nv.kb()) {
                var a = p.document
                  , b = e=>{
                    e = Kv(e);
                    a: {
                        try {
                            var f = ca();
                            break a
                        } catch (g) {}
                        f = void 0
                    }
                    ps(a, e, f);
                    f = a.createElement("script");
                    f.type = "text/javascript";
                    f.onerror = ()=>p.processGoogleToken({}, 2);
                    e = Af(e);
                    td(f, e);
                    try {
                        (a.head || a.body || a.documentElement).appendChild(f),
                        Nv.rd()
                    } catch (g) {}
                }
                  , c = Lv[1];
                b(c);
                ".google.com" != c && b(".google.com");
                var d = {
                    ["newToken"]: "FBT"
                };
                p.setTimeout(()=>p.processGoogleToken(d, 1), 1E3)
            }
        }
    }
      , Ov = a=>{
        Mv();
        const b = Iv.googleToken[5] || 0;
        a && (0 != b || Jv[3] >= Ga() ? Nv.Ib(a) : (Nv.Qb().push(a),
        Nv.ic()));
        Jv[3] >= Ga() && Jv[2] >= Ga() || Nv.ic()
    }
    ;
    var Qv = a=>{
        p.processGoogleToken = p.processGoogleToken || ((b,c)=>Pv(b, c));
        Ov(a)
    }
    ;
    const Pv = (a={},b=0)=>{
        var c = a.newToken || ""
          , d = "NT" == c
          , e = parseInt(a.freshLifetimeSecs || "", 10)
          , f = parseInt(a.validLifetimeSecs || "", 10);
        const g = a["1p_jar"] || "";
        a = a.pucrd || "";
        Mv();
        1 == b ? Nv.td() : Nv.sd();
        var h = Iv.googleToken = Iv.googleToken || {}
          , k = 0 == b && c && "string" === typeof c && !d && "number" === typeof e && 0 < e && "number" === typeof f && 0 < f && "string" === typeof g;
        d = d && !Nv.kb() && (!(Jv[3] >= Ga()) || "NT" == Jv[1]);
        var l = !(Jv[3] >= Ga()) && 0 != b;
        if (k || d || l)
            d = Ga(),
            e = d + 1E3 * e,
            f = d + 1E3 * f,
            1E-5 > Math.random() && nh(p, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr" + `&err=${b}`),
            h[5] = b,
            h[1] = c,
            h[2] = e,
            h[3] = f,
            h[4] = g,
            h[6] = a,
            Mv();
        if (k || !Nv.kb()) {
            b = Nv.Qb();
            for (c = 0; c < b.length; c++)
                Nv.Ib(b[c]);
            b.length = 0
        }
    }
    ;
    var Rv = T(215, a=>{
        const b = a.google_sa_queue
          , c = b.shift();
        a.google_sa_impl || W("shimpl", {
            t: "no_fn"
        });
        "function" === typeof c && zj(216, c);
        b.length && a.setTimeout(()=>Rv(a), 0)
    }
    )
      , Sv = a=>{
        const b = rf(document, "IFRAME");
        Gh(a, (c,d)=>{
            null != c && b.setAttribute(d, c)
        }
        );
        return b
    }
      , Tv = a=>{
        const b = ["<iframe"];
        Gh(a, (c,d)=>{
            null != c && b.push(" " + d + '="' + ud(c) + '"')
        }
        );
        b.push("></iframe>");
        return b.join("")
    }
      , Uv = (a,b,c,d)=>{
        null != b && (a.width = b && "" + b);
        null != c && (a.height = c && "" + c);
        a.frameborder = "0";
        d && (a.src = d);
        a.marginwidth = "0";
        a.marginheight = "0";
        a.vspace = "0";
        a.hspace = "0";
        a.allowtransparency = "true";
        a.scrolling = "no";
        a.allowfullscreen = "true"
    }
      , Vv = !Zg;
    function Wv({domain: a, webPropertyCode: b, value: c}) {
        a = `https://${"partner.googleadservices.com"}/gampad/cookie.js?domain=${a}&callback=${"_gfp_s_"}&client=${b}`;
        c && (a += `&cookie=${encodeURIComponent(c)}`);
        return a
    }
    function Xv(a, b) {
        var c = a._gfp_a_;
        if ("boolean" !== typeof c)
            throw Error(`Illegal value of ${"_gfp_a_"}: ${c}`);
        if (c) {
            c = a._gfp_p_;
            if ("boolean" !== typeof c)
                throw Error(`Illegal value of ${"_gfp_p_"}: ${c}`);
            if (!c) {
                if (Z.F().j(225, !1)) {
                    const d = new Rg;
                    I(d, 5, !0);
                    const e = new Ev(a);
                    Cv(e, d) && (a._gfp_s_ = T(629, f=>{
                        delete a._gfp_s_;
                        if (!f)
                            throw Error("Invalid JSONP response");
                        if (f = f._cookies_) {
                            var g = f[0];
                            if (!g)
                                throw Error("Invalid JSONP response");
                            var h = g._value_
                              , k = g._expires_;
                            f = g._path_;
                            g = g._domain_;
                            if ("string" !== typeof h || "number" !== typeof k || "string" !== typeof f || "string" !== typeof g)
                                throw Error("Invalid JSONP response");
                            var l = new Me;
                            h = I(l, 1, h);
                            k = I(h, 2, k);
                            f = I(k, 3, f);
                            f = I(f, 4, g);
                            g = {
                                Yb: D(f, 2) - e.j.Date.now() / 1E3,
                                path: D(f, 3),
                                domain: D(f, 4),
                                xd: !1
                            };
                            Av("__gads", D(f, 1), d, g, e.j.document);
                            de(d, 5) && .01 > e.j.Math.random() && (g = Dv(e, d),
                            rh({
                                domain: D(f, 4),
                                host: e.j.location.host,
                                success: g === D(f, 1) ? "1" : "0"
                            }))
                        }
                    }
                    ),
                    Jf(a.document, Wv({
                        domain: a.location.hostname,
                        webPropertyCode: b,
                        value: Dv(e, d) || ""
                    })))
                }
                a._gfp_p_ = !0
            }
        }
    }
    ;var Yv = (a,b)=>Cj(a, "adpnt", (c,d)=>{
        Tj(d, b.contentWindow) ? (b.dataset.googleQueryId || (c = Wj(c).qid,
        b.setAttribute("data-google-query-id", c)),
        c = !0) : c = !1;
        return c
    }
    );
    function Zv(a, b) {
        const c = a.pubWin.document.getElementById(a.B.google_async_iframe_id + "_expand");
        return c ? new $v(a,b,c) : null
    }
    function aw(a) {
        a.m = a.A;
        a.G.style.transition = "height 500ms";
        a.o.style.transition = "height 500ms";
        a.C.style.transition = "height 500ms";
        a.D.style.transition = "height 500ms";
        bw(a)
    }
    function cw(a, b) {
        (a.v.contentWindow || a.v.contentWindow).postMessage(JSON.stringify({
            ["msg_type"]: "expand-on-scroll-result",
            ["eos_success"]: !0,
            ["eos_amount"]: b,
            googMsgType: "sth"
        }), "*")
    }
    function bw(a) {
        const b = `rect(0px, ${a.v.width}px, ${a.m}px, 0px)`;
        a.D.style.clip = b;
        a.C.style.clip = b;
        a.D && (a.D.setAttribute("height", a.m),
        a.D.style.height = a.m + "px");
        a.C.setAttribute("height", a.m);
        a.C.style.height = a.m + "px";
        a.o.style.height = a.m + "px";
        a.G.style.height = a.m + "px"
    }
    function dw(a, b) {
        b = og(b.r_nh);
        a.A = null == b ? 0 : b;
        if (0 >= a.A)
            return "1";
        a.J = Bh(a.G).y;
        a.H = Uj(a.j);
        if (a.J + a.m < a.H)
            return "2";
        if (a.J > Qj(a.j) - a.j.innerHeight)
            return "3";
        b = a.H;
        a.v.setAttribute("height", a.A);
        a.v.style.height = a.A + "px";
        a.C.style.overflow = "hidden";
        a.G.style.position = "relative";
        a.G.style.transition = "height 100ms";
        a.o.style.transition = "height 100ms";
        a.C.style.transition = "height 100ms";
        a.D.style.transition = "height 100ms";
        b = Math.min(b + a.j.innerHeight - a.J, a.m);
        vh(a.o, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.v.width}px, ${b}px, 0px)`;
        vh(a.D, {
            clip: b
        });
        vh(a.C, {
            clip: b
        });
        return "0"
    }
    function ew(a, b={}) {
        a.X && (b.eid = a.X);
        b.qid = a.ba;
        W("eoscrl", b, Tg(String(a.ca), .05))
    }
    class $v extends Zj {
        constructor(a, b, c) {
            super(a.j);
            this.v = b;
            this.D = (b = a.iframeWin && Nh(a.B) ? a.iframeWin.frameElement : b) ? b : a.o;
            this.C = c.firstElementChild;
            this.o = c;
            this.G = this.o.parentElement && this.o.parentElement.classList.contains("adsbygoogle") ? this.o.parentElement : this.o;
            this.m = parseInt(this.o.style.height, 10);
            this.X = null;
            this.Gb = this.ka = !1;
            this.ba = "";
            this.Y = this.H = this.A = 0;
            this.zc = this.m / 5;
            this.J = Bh(this.G).y;
            this.ca = null;
            this.vc = mb(T(651, ()=>{
                this.J = Bh(this.G).y;
                var d = this.H;
                this.H = Uj(this.j);
                this.m < this.A ? (d = this.H - d,
                0 < d && (this.Y += d,
                this.Y >= this.zc ? (aw(this),
                cw(this, this.A)) : (this.m = Math.min(this.A, this.m + d),
                cw(this, d),
                bw(this)))) : De(this.j, "scroll", this.I)
            }
            ), this);
            this.I = ()=>{
                var d = this.vc;
                M.requestAnimationFrame ? M.requestAnimationFrame(d) : d()
            }
        }
        W(a) {
            a["expand-on-scroll"] = this.xc;
            a["expand-on-scroll-force-expand"] = this.Oc
        }
        xc(a, b) {
            Yh(b, this.v) && (a = Wj(a),
            this.X = a.i_expid,
            this.ba = a.qid,
            this.ca = a.gen204_fraction,
            this.ka || (this.ka = !0,
            a = dw(this, a),
            "0" === a && Ce(this.j, "scroll", this.I, ze),
            b.source.postMessage(JSON.stringify({
                ["msg_type"]: "expand-on-scroll-result",
                ["eos_success"]: "0" === a,
                googMsgType: "sth"
            }), "*"),
            ew(this, {
                err: a
            })))
        }
        Oc(a, b) {
            Yh(b, this.v) && !this.Gb && (this.Gb = !0,
            aw(this),
            De(this.j, "scroll", this.I))
        }
        l() {
            this.I && De(this.j, "scroll", this.I, ze);
            super.l()
        }
    }
    ;function fw(a) {
        const b = a.o.getBoundingClientRect()
          , c = 0 > b.top + b.height;
        return !(b.top > a.m.innerHeight) && !c
    }
    class gw extends bh {
        constructor(a, b, c) {
            super();
            this.m = a;
            this.A = b;
            this.o = c;
            this.C = 0;
            this.o && (this.v = fw(this),
            this.G = ib(this.D, this),
            this.j = T(433, ()=>{
                var d = this.G;
                M.requestAnimationFrame ? M.requestAnimationFrame(d) : d()
            }
            ),
            Ce(this.m, "scroll", this.j, ze))
        }
        D() {
            const a = fw(this);
            if (a && !this.v) {
                {
                    var b = {
                        rr: "vis-bcr"
                    };
                    const c = this.A.contentWindow;
                    c && (Hj(c, "ig", b, "*", 2),
                    10 <= ++this.C && this.j && De(this.m, "scroll", this.j, ze))
                }
            }
            this.v = a
        }
    }
    ;const hw = {
        display: "block",
        left: "auto",
        position: "fixed",
        bottom: "0px"
    };
    function iw(a, b) {
        const c = a.pubWin.document.getElementById(a.B.google_async_iframe_id + "_anchor");
        return c ? new jw(a,b,c) : null
    }
    function kw(a, b) {
        if (!a.ca)
            return "1";
        b = og(b.r_nh);
        a.o = null == b ? 0 : b;
        if (0 >= a.o)
            return "2";
        a.v = Bh(a.A).y;
        b = a.j.innerHeight;
        if (a.v + a.Y < b)
            return "4";
        if (a.v > Qj(a.j) - b)
            return "3";
        a.A && (a.A.setAttribute("height", a.o),
        a.A.style.height = a.o + "px");
        a.C.setAttribute("height", a.o);
        a.C.style.height = a.o + "px";
        vh(a.m, hw);
        a.m.style.height = a.o + "px";
        a.D.style.position = "relative";
        a.ba();
        return "0"
    }
    function lw(a, b={}) {
        a.H && (b.eid = a.H);
        b.qid = a.I;
        W("pscrl", b, Tg(String(a.J), .05))
    }
    class jw extends Zj {
        constructor(a, b, c) {
            a.j && super(a.j);
            this.C = b;
            this.A = (this.G = a.iframeWin && Nh(a.B) ? a.iframeWin.frameElement : b) ? this.G : a.o;
            this.m = c;
            this.D = this.m.parentElement;
            this.Y = parseInt(this.m.style.height, 10);
            this.H = null;
            this.X = !1;
            this.I = "";
            this.o = 0;
            this.v = Bh(this.A).y;
            this.J = null;
            this.ca = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;
            this.ba = T(636, ()=>{
                this.ca.call(this.j, this.ba);
                var d = this.j.innerHeight
                  , e = Uj(this.j);
                this.v = Bh(this.D).y;
                e + d > this.v ? (e = e + d - this.v,
                d = Math.min(e, this.Y),
                e = this.o - e,
                e = Math.max(0, e),
                0 >= e ? vh(this.m, {
                    position: "absolute",
                    top: "0px",
                    bottom: "auto"
                }) : vh(this.m, {
                    position: "fixed",
                    top: "auto",
                    bottom: "0px"
                }),
                vh(this.m, {
                    clip: "rect(" + e + "px, " + this.C.width + "px, " + (e + d) + "px, 0px)"
                })) : vh(this.m, {
                    clip: "rect(3000px, " + this.C.width + "px, 0px, 0px)"
                })
            }
            )
        }
        W(a) {
            a["parallax-scroll"] = this.ka
        }
        ka(a, b) {
            a = Wj(a);
            this.H = a.i_expid;
            this.I = a.qid;
            this.J = a.gen204_fraction;
            !this.X && Yh(b, this.C) && (this.X = !0,
            a = kw(this, a),
            b.source.postMessage(JSON.stringify({
                ["msg_type"]: "parallax-scroll-result",
                ["ps_success"]: "0" === a,
                googMsgType: "sth"
            }), "*"),
            lw(this, {
                err: a
            }))
        }
        l() {
            this.D = this.m = this.A = this.G = null;
            super.l()
        }
    }
    ;function mw(a, b) {
        b = b && b[0];
        if (!b)
            return null;
        b = b.target;
        const c = b.getBoundingClientRect()
          , d = of(a.j.K() || window);
        if (0 >= c.bottom || c.bottom > d.height || 0 >= c.right || c.left >= d.width)
            return null;
        var e = nw(a, b, c, a.j.j.elementsFromPoint(ff(c.left + c.width / 2, c.left, c.right - 1), ff(c.bottom - 1 - a.l, c.top, c.bottom - 1)), 1, [])
          , f = nw(a, b, c, a.j.j.elementsFromPoint(ff(c.left + c.width / 2, c.left, c.right - 1), ff(c.top + a.l, c.top, c.bottom - 1)), 2, e.da)
          , g = nw(a, b, c, a.j.j.elementsFromPoint(ff(c.left + a.l, c.left, c.right - 1), ff(c.top + c.height / 2, c.top, c.bottom - 1)), 3, [...e.da, ...f.da]);
        const h = nw(a, b, c, a.j.j.elementsFromPoint(ff(c.right - 1 - a.l, c.left, c.right - 1), ff(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.da, ...f.da, ...g.da]);
        var k = ow(a, b, c)
          , l = r=>Ua(a.o, r.overlapType) && Ua(a.v, r.overlapDepth) && Ua(a.m, r.overlapDetectionPoint);
        e = Pa([...e.entries, ...f.entries, ...g.entries, ...h.entries], l);
        l = Pa(k, l);
        k = [...e, ...l];
        f = c.left < -a.l || c.right > d.width + a.l;
        f = 0 < k.length || f;
        g = pf(a.j.j);
        const m = new eh(c.left,c.top,c.width,c.height);
        e = [...Qa(e, r=>new eh(r.elementRect.left,r.elementRect.top,r.elementRect.width,r.elementRect.height)), ...ab(Qa(l, r=>gh(m, r.elementRect))), ...Pa(gh(m, new eh(0,0,d.width,d.height)), r=>0 <= r.top && r.top + r.height <= d.height)];
        return {
            entries: k,
            isOverlappingOrOutsideViewport: f,
            scrollPosition: {
                scrollX: g.x,
                scrollY: g.y
            },
            target: b,
            targetRect: c,
            viewportSize: {
                width: d.width,
                height: d.height
            },
            overlappedArea: 20 > e.length ? pw(m, e) : qw(c, e)
        }
    }
    function rw(a, b) {
        const c = a.j.K()
          , d = a.j.j;
        return new Promise((e,f)=>{
            const g = c.IntersectionObserver;
            if (g)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var h = new g(k=>{
                                    const l = new lj(1)
                                      , m = kj(l, ()=>mw(a, k));
                                    m && (l.l.length && (m.executionTime = Math.round(Number(l.l[0].duration))),
                                    h.disconnect(),
                                    e(m))
                                }
                                ,sw);
                                h.observe(b)
                            } else
                                f(Error("5"));
                        else
                            f(Error("4"));
                    else
                        f(Error("3"));
                else
                    f(Error("2"));
            else
                f(Error("1"))
        }
        )
    }
    function nw(a, b, c, d, e, f) {
        if (0 === c.width || 0 === c.height)
            return {
                entries: [],
                da: []
            };
        const g = []
          , h = [];
        for (let r = 0; r < d.length; r++) {
            const t = d[r];
            if (t === b)
                continue;
            if (Ua(f, t))
                continue;
            h.push(t);
            const u = t.getBoundingClientRect();
            if (a.j.contains(t, b)) {
                g.push(tw(a, c, t, u, 1, e));
                continue
            }
            if (a.j.contains(b, t)) {
                g.push(tw(a, c, t, u, 2, e));
                continue
            }
            a: {
                var k = a;
                var l = b
                  , m = t;
                const U = k.j.l(l, m);
                if (!U) {
                    k = null;
                    break a
                }
                const {suspectAncestor: Da, na} = uw(k, l, U, m) || {}
                  , {suspectAncestor: ja, na: da} = uw(k, m, U, l) || {};
                k = Da && na && ja && da ? na <= da ? {
                    suspectAncestor: Da,
                    overlapType: vw[na]
                } : {
                    suspectAncestor: ja,
                    overlapType: ww[da]
                } : Da && na ? {
                    suspectAncestor: Da,
                    overlapType: vw[na]
                } : ja && da ? {
                    suspectAncestor: ja,
                    overlapType: ww[da]
                } : null
            }
            const {suspectAncestor: V, overlapType: H} = k || {};
            V && H ? g.push(tw(a, c, t, u, H, e, V)) : g.push(tw(a, c, t, u, 9, e))
        }
        return {
            entries: g,
            da: h
        }
    }
    function ow(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = Kf(b, a.j.K());
                e && "visible" !== e.overflow && ("auto" !== e.overflowY && "scroll" !== e.overflowY && c.bottom > f.bottom + a.l ? d.push(tw(a, c, b, f, 5, 1)) : (e = "auto" === e.overflowX || "scroll" === e.overflowX,
                !e && c.left < f.left - a.l ? d.push(tw(a, c, b, f, 5, 3)) : !e && c.right > f.right + a.l && d.push(tw(a, c, b, f, 5, 4))))
            }
        }
        return d
    }
    function pw(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length)
            return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a
              , f = 0;
            for (let g = 0; g < b.length && (!(d & 1 << g) || (f++,
            e = fh(e, b[g]),
            e)); g++)
                ;
            e && (c = 1 === f % 2 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }
    function qw(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length)
            return 0;
        let c = 0;
        for (let d = a.left; d <= a.right; d++)
            for (let e = a.top; e <= a.bottom; e++)
                for (let f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }
    function tw(a, b, c, d, e, f, g) {
        const h = {
            element: c,
            elementRect: d,
            overlapType: e,
            overlapDetectionPoint: f
        };
        if (Ua(a.o, e) && Ua(a.m, f)) {
            b = new ch(b.top,b.right - 1,b.bottom - 1,b.left);
            if ((a = xw(a, c)) && dh(b, a))
                c = 4;
            else {
                a = yw(c, d);
                if (Hd) {
                    e = Dh(c, "paddingLeft");
                    f = Dh(c, "paddingRight");
                    var k = Dh(c, "paddingTop")
                      , l = Dh(c, "paddingBottom");
                    e = new ch(k,f,l,e)
                } else
                    e = yh(c, "paddingLeft"),
                    f = yh(c, "paddingRight"),
                    k = yh(c, "paddingTop"),
                    l = yh(c, "paddingBottom"),
                    e = new ch(parseFloat(k),parseFloat(f),parseFloat(l),parseFloat(e));
                a = new ch(a.top + e.top,a.right - e.right,a.bottom - e.bottom,a.left + e.left);
                dh(b, a) ? c = 3 : (c = yw(c, d),
                c = dh(b, c) ? 2 : 1)
            }
            h.overlapDepth = c
        }
        g && (h.suspectAncestor = g);
        return h
    }
    function uw(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement)
            e.unshift(f);
        c = a.j.K();
        for (f = 0; f < e.length; f++) {
            const h = e[f];
            var g = Kf(h, c);
            if (g) {
                if ("fixed" === g.position)
                    return {
                        suspectAncestor: h,
                        na: 1
                    };
                if ("sticky" === g.position && a.j.contains(h.parentElement, d))
                    return {
                        suspectAncestor: h,
                        na: 2
                    };
                if ("absolute" === g.position)
                    return {
                        suspectAncestor: h,
                        na: 3
                    };
                if ("none" !== g.cssFloat) {
                    g = h === e[0];
                    const k = zw(a, e.slice(0, f), h);
                    if (g || k)
                        return {
                            suspectAncestor: h,
                            na: 4
                        }
                }
            }
        }
        return (a = zw(a, e, b)) ? {
            suspectAncestor: a,
            na: 5
        } : null
    }
    function zw(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d)
            return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.j.contains(f, c))
                continue;
            const g = f.getBoundingClientRect();
            if (!g)
                continue;
            const h = Kf(f, a.j.K());
            if (h && d.bottom > g.bottom + a.l && "visible" === h.overflowY)
                return f
        }
        return null
    }
    function xw(a, b) {
        var c = a.j.j;
        a = c.createRange();
        if (!a)
            return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: d=>/^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        });
        for (b = c.nextNode(); c.nextNode(); )
            ;
        c = c.previousNode();
        if (!b || !c)
            return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return 0 === a.width || 0 === a.height ? null : new ch(a.top,a.right,a.bottom,a.left)
    }
    function yw(a, b) {
        if (!Hd || 9 <= Number(Vd)) {
            var c = yh(a, "borderLeftWidth");
            d = yh(a, "borderRightWidth");
            e = yh(a, "borderTopWidth");
            a = yh(a, "borderBottomWidth");
            c = new ch(parseFloat(e),parseFloat(d),parseFloat(a),parseFloat(c))
        } else {
            c = Fh(a, "borderLeft");
            var d = Fh(a, "borderRight")
              , e = Fh(a, "borderTop");
            a = Fh(a, "borderBottom");
            c = new ch(e,d,a,c)
        }
        return new ch(b.top + c.top,b.right - 1 - c.right,b.bottom - 1 - c.bottom,b.left + c.left)
    }
    class Aw {
        constructor(a, b=Bw, c=Cw, d=Dw, e=0) {
            this.j = lf(a);
            this.o = b;
            this.v = c;
            this.m = d;
            this.l = e
        }
    }
    const vw = {
        [1]: 3,
        [4]: 10,
        [3]: 12,
        [2]: 4,
        [5]: 5
    }
      , ww = {
        [1]: 6,
        [4]: 11,
        [3]: 13,
        [2]: 7,
        [5]: 8
    }
      , Bw = Pa(Yf({
        ff: 1,
        gf: 2,
        Gg: 3,
        Hg: 4,
        Jg: 5,
        bf: 6,
        cf: 7,
        ef: 8,
        Yf: 9,
        Ig: 10,
        df: 11,
        Fg: 12,
        $e: 13
    }), a=>!Ua([1, 2], a))
      , Cw = Yf({
        te: 1,
        Zf: 2,
        Fe: 3,
        Kg: 4
    })
      , Dw = Yf({
        ue: 1,
        Ng: 2,
        Mf: 3,
        tg: 4
    })
      , sw = {
        threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
    };
    function Ew(a, b) {
        Array.isArray(b) || (b = [b]);
        b = Qa(b, function(c) {
            return "string" === typeof c ? c : c.yb + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        vh(a, "transition", b.join(","))
    }
    var Fw = gb(function() {
        if (Hd)
            return Sd("10.0");
        var a = rf(document, "DIV")
          , b = Ld ? "-webkit" : Kd ? "-moz" : Hd ? "-ms" : Gd ? "-o" : null
          , c = {
            transition: "opacity 1s linear"
        };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = {
            style: c
        };
        if (!Yc.test("div"))
            throw Error("");
        if ("DIV"in $c)
            throw Error("");
        c = null;
        var d = "";
        if (b)
            for (l in b)
                if (Object.prototype.hasOwnProperty.call(b, l)) {
                    if (!Yc.test(l))
                        throw Error("");
                    var e = b[l];
                    if (null != e) {
                        var f = l;
                        var g = e;
                        if (g instanceof yb)
                            g = Bb(g);
                        else if ("style" == f.toLowerCase()) {
                            e = void 0;
                            if (!ua(g))
                                throw Error("");
                            if (!(g instanceof oc)) {
                                var h = "";
                                for (e in g)
                                    if (Object.prototype.hasOwnProperty.call(g, e)) {
                                        if (!/^[-_a-zA-Z0-9]+$/.test(e))
                                            throw Error("Name allows only [-_a-zA-Z0-9], got: " + e);
                                        var k = g[e];
                                        null != k && (k = Array.isArray(k) ? Qa(k, qc).join(" ") : qc(k),
                                        h += e + ":" + k + ";")
                                    }
                                g = h ? new oc(h,nc) : pc
                            }
                            g = g instanceof oc && g.constructor === oc ? g.l : "type_error:SafeStyle"
                        } else {
                            if (/^on/i.test(f))
                                throw Error("");
                            if (f.toLowerCase()in Zc)
                                if (g instanceof Db)
                                    g = Ib(g).toString();
                                else if (g instanceof ec)
                                    g = fc(g);
                                else if ("string" === typeof g)
                                    g = (kc(g) || mc).j();
                                else
                                    throw Error("");
                        }
                        g.aa && (g = g.j());
                        f = f + '="' + Ob(String(g)) + '"';
                        d += " " + f
                    }
                }
        var l = "<div" + d;
        d = void 0;
        null == d ? d = [] : Array.isArray(d) || (d = [d]);
        !0 === vb.div ? l += ">" : (c = cd(d),
        l += ">" + Vc(c).toString() + "</div>",
        c = c.l());
        (b = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(b) ? c = 0 : c = null);
        b = Xc(l, c);
        md(a, b);
        a = a.firstChild;
        b = a.style[Ad("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[wh(a, "transition")] || "")
    });
    function Gw(a, b, c) {
        0 > a.l[b].indexOf(c) && (a.l[b] += c)
    }
    function Hw(a, b) {
        0 <= a.j.indexOf(b) || (a.j = b + a.j)
    }
    function Iw(a, b) {
        0 > a.m.indexOf(b) && (a.m = b + a.m)
    }
    function Jw(a, b, c, d) {
        return "" != a.m || b ? null : "" == a.j.replace(Kw, "") ? null != c && a.l[0] || null != d && a.l[1] ? !1 : !0 : !1
    }
    function Lw(a) {
        var b = Jw(a, "", null, 0);
        if (null === b)
            return "XS";
        b = b ? "C" : "N";
        a = a.j;
        return 0 <= a.indexOf("a") ? b + "A" : 0 <= a.indexOf("f") ? b + "F" : b + "S"
    }
    var Mw = class {
        constructor(a, b) {
            this.l = ["", ""];
            this.j = a || "";
            this.m = b || ""
        }
        toString() {
            return [this.l[0], this.l[1], this.j, this.m].join("|")
        }
    }
    ;
    function Nw(a) {
        let b = a.W;
        a.H = function() {}
        ;
        Ow(a, a.D, b);
        let c = a.D.parentElement;
        if (!c)
            return a.j;
        let d = !0
          , e = null;
        for (; c; ) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : Kf(c, b)
            } catch (g) {
                Iw(a.j, "c")
            }
            const f = Pw(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.U = !0);
            if (d && !f && Qw(e)) {
                Hw(a.j, "l");
                a.I = c;
                break
            }
            d = d && f;
            if (e && Rw(a, e))
                break;
            c = c.parentElement;
            if (!c) {
                if (b === a.ca)
                    break;
                try {
                    if (c = b.frameElement,
                    b = b.parent,
                    !Ff(b)) {
                        Hw(a.j, "c");
                        break
                    }
                } catch (g) {
                    Hw(a.j, "c");
                    break
                }
            }
        }
        a.G && a.o && Sw(a);
        return a.j
    }
    function Tw(a) {
        function b() {
            Uw(c, f, g);
            if (h && !k && !g) {
                const l = function(m) {
                    for (let r = 0; r < m.length; r++)
                        vh(h, m[r], "0px")
                };
                l(Vw);
                l(Ww)
            }
        }
        const c = a.D;
        c.style.overflow = a.ba ? "visible" : "hidden";
        a.G && (a.I ? (Ew(c, Xw),
        Ew(a.I, Xw)) : Ew(c, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        null !== a.O && (c.style.opacity = a.O);
        const d = null != a.C && null != a.m && (a.X || a.m > a.C) ? a.m : null
          , e = null != a.A && null != a.l && (a.X || a.l > a.A) ? a.l : null;
        if (a.J) {
            const l = a.J.length;
            for (let m = 0; m < l; m++)
                Uw(a.J[m], d, e)
        }
        const f = a.m
          , g = a.l
          , h = a.I
          , k = a.U;
        a.G ? p.setTimeout(b, 1E3) : b()
    }
    function Yw(a) {
        if (a.o && !a.Ha || null == a.m && null == a.l && null == a.O && a.o)
            return a.j;
        var b = a.o;
        a.o = !1;
        Nw(a);
        a.o = b;
        if (!b || null != a.Z && !Jw(a.j, a.Z, a.m, a.l))
            return a.j;
        0 <= a.j.j.indexOf("n") && (a.C = null,
        a.A = null);
        if (null == a.C && null !== a.m || null == a.A && null !== a.l)
            a.G = !1;
        (0 == a.m || 0 == a.l) && 0 <= a.j.j.indexOf("l") && (a.m = 0,
        a.l = 0);
        b = a.j;
        b.l[0] = "";
        b.l[1] = "";
        b.j = "";
        b.m = "";
        Tw(a);
        return Nw(a)
    }
    function Rw(a, b) {
        let c = !1;
        "none" == b.display && (Hw(a.j, "n"),
        a.o && (c = !0));
        "hidden" != b.visibility && "collapse" != b.visibility || Hw(a.j, "v");
        "hidden" == b.overflow && Hw(a.j, "o");
        "absolute" == b.position ? (Hw(a.j, "a"),
        c = !0) : "fixed" == b.position && (Hw(a.j, "f"),
        c = !0);
        return c
    }
    function Ow(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement)
            return !0;
        let e = !1
          , f = 0;
        const g = b.parentElement.childNodes;
        for (let k = 0; k < g.length; k++) {
            var h = g[k];
            h == b ? e = !0 : (h = Zw(a, h, c),
            d |= h,
            e && (f |= h))
        }
        f & 1 && (d & 2 && Gw(a.j, 0, "o"),
        d & 4 && Gw(a.j, 1, "o"));
        return !(d & 1)
    }
    function Pw(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (U) {
            Iw(a.j, "s")
        }
        var f = c.getAttribute("width")
          , g = og(f)
          , h = c.getAttribute("height")
          , k = og(h)
          , l = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        const m = Ow(a, c, b);
        var r = d && d.width
          , t = d && d.height
          , u = e && e.width
          , V = e && e.height
          , H = qg(r) == a.C && qg(t) == a.A;
        r = H ? r : u;
        V = H ? t : V;
        u = qg(r);
        H = qg(V);
        g = null !== a.C && (null !== u && a.C >= u || null !== g && a.C >= g);
        H = null !== a.A && (null !== H && a.A >= H || null !== k && a.A >= k);
        k = !m && Qw(d);
        H = m || H || k || !(f || r || d && (!$w(String(d.minWidth)) || !ax(String(d.maxWidth))));
        l = m || g || k || l || !(h || V || d && (!$w(String(d.minHeight)) || !ax(String(d.maxHeight))));
        bx(a, 0, H, c, "width", f, a.C, a.m);
        cx(a, 0, "d", H, e, d, "width", r, a.C, a.m);
        cx(a, 0, "m", H, e, d, "minWidth", e && e.minWidth, a.C, a.m);
        cx(a, 0, "M", H, e, d, "maxWidth", e && e.maxWidth, a.C, a.m);
        if (a.ka) {
            c = /^html|body$/i.test(c.nodeName);
            t = qg(t);
            h = d ? "auto" === d.overflowY || "scroll" === d.overflowY : !1;
            (f = null != a.l && d && t && Math.round(t) !== a.l) && !(f = !h) && (f = t,
            f = (Z.F().j(260, !1) || b.location && "#gffwroe2ettq" == b.location.hash) && Math.round(f) < .8 * Math.round(b.innerHeight));
            f = f && "100%" !== d.minHeight;
            if (c = a.o && !c && f)
                c = !(a.Ia && d && (Z.F().j(265, !1) || b.location && "#gffwroe2etoq" == b.location.hash) && Math.round(qg(d.minHeight)) === Math.round(b.innerHeight));
            c && (e.setProperty("height", "auto", "important"),
            d && !$w(String(d.minHeight)) && e.setProperty("min-height", "0px", "important"),
            d && !ax(String(d.maxHeight)) && a.l && Math.round(t) < a.l && e.setProperty("max-height", "none", "important"))
        } else
            bx(a, 1, l, c, "height", h, a.A, a.l),
            cx(a, 1, "d", l, e, d, "height", V, a.A, a.l),
            cx(a, 1, "m", l, e, d, "minHeight", e && e.minHeight, a.A, a.l),
            cx(a, 1, "M", l, e, d, "maxHeight", e && e.maxHeight, a.A, a.l);
        return m
    }
    function Sw(a) {
        function b() {
            if (0 < c) {
                var l = Kf(e, d) || {};
                const m = qg(l.width);
                l = qg(l.height);
                null !== m && null !== f && h && h(0, f - m);
                null !== l && null !== g && h && h(1, g - l);
                --c
            } else
                p.clearInterval(k),
                h && (h(0, 0),
                h(1, 0))
        }
        let c = 31.25;
        const d = a.W
          , e = a.D
          , f = a.m
          , g = a.l
          , h = a.H;
        let k;
        p.setTimeout(function() {
            k = p.setInterval(b, 16)
        }, 990)
    }
    function Zw(a, b, c) {
        if (3 == b.nodeType)
            return /\S/.test(b.data) ? 1 : 0;
        if (1 == b.nodeType) {
            if (/^(head|script|style)$/i.test(b.nodeName))
                return 0;
            let d = null;
            try {
                d = Kf(b, c)
            } catch (e) {}
            if (d) {
                if ("none" == d.display || "fixed" == d.position)
                    return 0;
                if ("absolute" == d.position) {
                    if (!a.v.boundingClientRect || "hidden" == d.visibility || "collapse" == d.visibility)
                        return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.v.boundingClientRect.left ? 2 : 0) | (c.bottom > a.v.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }
    function bx(a, b, c, d, e, f, g, h) {
        if (null != h) {
            if ("string" == typeof f) {
                if ("100%" == f || !f)
                    return;
                f = og(f);
                null == f && (Iw(a.j, "n"),
                Gw(a.j, b, "d"))
            }
            if (null != f)
                if (c) {
                    if (a.o)
                        if (a.G) {
                            const k = Math.max(f + h - (g || 0), 0)
                              , l = a.H;
                            a.H = function(m, r) {
                                m == b && d.setAttribute(e, k - r);
                                l && l(m, r)
                            }
                        } else
                            d.setAttribute(e, h)
                } else
                    Gw(a.j, b, "d")
        }
    }
    function cx(a, b, c, d, e, f, g, h, k, l) {
        if (null != l) {
            f = f && f[g];
            "string" != typeof f || ("m" == c ? $w(f) : ax(f)) || (f = qg(f),
            null == f ? Hw(a.j, "p") : null != k && Hw(a.j, f == k ? "E" : "e"));
            if ("string" == typeof h) {
                if ("m" == c ? $w(h) : ax(h))
                    return;
                h = qg(h);
                null == h && (Iw(a.j, "p"),
                Gw(a.j, b, c))
            }
            if (null != h)
                if (d && e) {
                    if (a.o)
                        if (a.G) {
                            const m = Math.max(h + l - (k || 0), 0)
                              , r = a.H;
                            a.H = function(t, u) {
                                t == b && (e[g] = m - u + "px");
                                r && r(t, u)
                            }
                        } else
                            e[g] = l + "px"
                } else
                    Gw(a.j, b, c)
        }
    }
    var hx = class {
        constructor(a, b, c, d, e, f, g) {
            this.ca = a;
            this.J = c;
            this.D = b;
            this.W = (a = this.D.ownerDocument) && (a.defaultView || a.parentWindow);
            this.v = new dx(this.D);
            this.o = g;
            this.Ha = ex(this.v, d.Eb, d.height, d.lc);
            this.C = this.o ? this.v.boundingClientRect ? this.v.boundingClientRect.right - this.v.boundingClientRect.left : null : e;
            this.A = this.o ? this.v.boundingClientRect ? this.v.boundingClientRect.bottom - this.v.boundingClientRect.top : null : f;
            this.m = fx(d.width);
            this.l = fx(d.height);
            this.O = this.o ? fx(d.opacity) : null;
            this.Z = d.check;
            this.G = "animate" == d.Eb && !gx(this.v, this.l, this.Y) && Fw();
            this.ba = !!d.Hb;
            this.j = new Mw;
            gx(this.v, this.l, this.Y) && Hw(this.j, "r");
            e = this.v;
            e.j && e.l >= e.m && Hw(this.j, "b");
            this.I = this.H = null;
            this.U = !1;
            this.X = !!d.vd;
            this.ka = !!d.jc;
            this.Y = !!d.lc;
            this.Ia = d.Ja
        }
    }
    ;
    function gx(a, b, c) {
        var d;
        (d = a.j) && !(d = !a.o) && (c ? (b = a.l + Math.min(b, fx(a.ga())),
        a = a.j && b >= a.m) : a = a.j && a.l >= a.m,
        d = a);
        return d
    }
    var dx = class {
        constructor(a) {
            var b = a && a.ownerDocument, c = b && (b.defaultView || b.parentWindow), d;
            if (d = c)
                d = Ff(c.top) ? c.top : null;
            c = d;
            this.j = !!c;
            this.boundingClientRect = null;
            if (a)
                try {
                    this.boundingClientRect = a.getBoundingClientRect()
                } catch (f) {}
            var e;
            {
                d = a;
                let f = 0
                  , g = this.boundingClientRect;
                for (; d; )
                    try {
                        g && (f += g.top);
                        const h = (e = d.ownerDocument) && (e.defaultView || e.parentWindow);
                        (d = h && h.frameElement) && (g = d.getBoundingClientRect())
                    } catch (h) {
                        break
                    }
                e = f
            }
            this.l = e;
            c = c || p;
            this.m = ("CSS1Compat" == c.document.compatMode ? c.document.documentElement : c.document.body).clientHeight;
            b = b && Lk(b);
            this.o = !!a && !(2 == b || 3 == b) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.o
        }
        Ta() {
            return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
        }
        ga() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    }
    ;
    function ex(a, b, c, d) {
        switch (b) {
        case "no_rsz":
            return !1;
        case "force":
        case "animate":
            return !0;
        default:
            return gx(a, c, d)
        }
    }
    function Qw(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }
    function ix(a, b, c, d) {
        return Yw(new hx(a,b,d,c,null,null,!0))
    }
    var jx = new Mw("s","")
      , Kw = /[lonvafrbpEe]/g;
    function ax(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }
    function $w(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }
    function Uw(a, b, c) {
        null !== b && null !== og(a.getAttribute("width")) && a.setAttribute("width", b);
        null !== c && null !== og(a.getAttribute("height")) && a.setAttribute("height", c);
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    }
    var Vw = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "), Ww = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" "), kx;
    {
        let a = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s"
          , b = Vw;
        for (let c = 0; c < b.length; c++)
            a += ", " + b[c] + " .2s cubic-bezier(.4, 0, 1, 1)";
        b = Ww;
        for (let c = 0; c < b.length; c++)
            a += ", " + b[c] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
        kx = a
    }
    var Xw = kx;
    function fx(a) {
        return "string" === typeof a ? og(a) : "number" === typeof a && isFinite(a) ? a : null
    }
    ;function lx(a, b, c, d, e, f, g, h, k, l) {
        const m = N();
        if (!a.m || !m)
            return l.err = "2",
            mx(a, l, null),
            !1;
        if ("no_rsz" === f)
            return l.err = "7",
            mx(a, l, null),
            !0;
        const r = new dx(a.o || a.m);
        if (!r.j)
            return l.err = "3",
            mx(a, l, null),
            !1;
        var t = r.Ta();
        null != t && (l.w = t);
        t = r.ga();
        null != t && (l.h = t);
        if (ex(r, f, d, k)) {
            var u = a.o && a.o.ownerDocument.getElementById(a.o.id + "_anchor");
            t = u ? [a.o, a.m] : null;
            u = u || a.m;
            const V = Z.F().j(154, !1);
            b = ix(m, u, {
                width: c,
                height: d,
                opacity: e,
                check: b,
                Eb: f,
                Hb: g,
                vd: h,
                jc: V,
                lc: k
            }, t);
            null != c && (l.nw = c);
            null != d && (l.nh = d);
            l.rsz = b.toString();
            l.abl = Lw(b);
            l.frsz = ("force" === f).toString();
            l.err = "0";
            mx(a, l, r);
            Sa(lk.F().l(), H=>Ua([248427477, 248427478], H)) && a.j === m && rw(new Aw(a.j,[5, 8, 9],[3, 4],void 0,2), u).then(H=>{
                ji(8, [H]);
                return H
            }
            ).then(H=>{
                W("resize-ovlp", {
                    adf: a.v,
                    eid: a.G,
                    io: Number(H.isOverlappingOrOutsideViewport),
                    oa: H.overlappedArea.toFixed(2),
                    qid: l.qid || "",
                    slot: a.I,
                    url: a.J,
                    vp: H.viewportSize.width + "x" + H.viewportSize.height
                }, 1)
            }
            ).catch(H=>{
                W("resize-ovlp-err", {
                    err: H.message
                }, 1)
            }
            );
            return !0
        }
        l.err = "1";
        mx(a, l, r);
        return !1
    }
    function nx(a, b, c) {
        const d = {
            scrl: Uj(a.j || N()),
            adk: a.D,
            adf: a.v,
            fmt: a.C
        };
        b && (d.str = gx(b, og(c.r_nh), pg(c.r_cab)),
        d.ad_y = b.l,
        d.vph = b.m);
        Gh(c, (e,f)=>{
            d[f] = e
        }
        );
        return d
    }
    function mx(a, b, c) {
        const d = Tg(String(b.gen204_fraction), .05);
        b = nx(a, c, b);
        b.url = a.j.document.URL;
        W("resize", b, d)
    }
    class ox extends Zj {
        constructor(a, b, c, d) {
            super(a);
            this.m = b;
            this.o = c;
            this.D = String(d.google_ad_unit_key || "");
            this.v = String(d.google_ad_dom_fingerprint || "");
            this.C = String(d.google_ad_format || "");
            this.G = qk(d);
            this.I = String(d.google_ad_slot || "");
            this.J = String(d.google_page_url || "")
        }
        W(a) {
            a["ablate-me"] = this.A;
            a["resize-me"] = this.H
        }
        A(a, b) {
            Tj(b, this.m.contentWindow) && (a = Wj(a),
            b = a.clp_btf_only,
            lx(this, null, null, 0, 0, "animate" === a["collapse-after-close"] ? "animate" : "1" === b ? "safe" : "force", !1, !1, !1, a))
        }
        H(a, b) {
            if (Tj(b, this.m.contentWindow)) {
                a = Wj(a);
                var c = a.r_chk;
                if (null == c || "" === c) {
                    var d = og(a.r_nw)
                      , e = og(a.r_nh)
                      , f = og(a.r_no);
                    null != f || 0 !== d && 0 !== e || (f = 0);
                    var g = a.r_str;
                    g = g ? g : null;
                    d = lx(this, c, d, e, f, g, pg(a.r_ao), pg(a.r_ifr), pg(a.r_cab), a);
                    c = {
                        msg_type: "resize-result"
                    };
                    c.r_str = g;
                    c.r_status = d;
                    b = b.source;
                    c.googMsgType = "sth";
                    b.postMessage(JSON.stringify(c), "*");
                    this.m.dataset.googleQueryId || this.m.setAttribute("data-google-query-id", a.qid)
                }
            }
        }
        l() {
            super.l();
            this.m = null
        }
    }
    ;function px() {
        var a = N()
          , b = ih(a);
        if (b)
            return (b = b || ih()) ? (a = b.pageViewId,
            b = b.clientId,
            "string" === typeof b && (a += b.replace(/\D/g, "").substr(0, 6))) : a = null,
            +a;
        a = al(a, !1).win;
        (b = a.google_global_correlator) || (a.google_global_correlator = b = 1 + Math.floor(Math.random() * Math.pow(2, 43)));
        return b
    }
    function qx() {
        if (rx)
            return rx;
        const a = lh() || N()
          , b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? rx = b : a.google_persistent_state_async = rx = new sx
    }
    function tx(a) {
        return ux[a] || "google_ps_" + a
    }
    function vx(a, b, c) {
        b = tx(b);
        a = a.S;
        const d = a[b];
        return void 0 === d ? a[b] = c : d
    }
    function wx(a, b) {
        var c = vx(a, b, 0) + 1;
        return a.S[tx(b)] = c
    }
    function xx() {
        var a = qx();
        return vx(a, 20, {})
    }
    class sx {
        constructor() {
            this.S = {}
        }
    }
    var rx = null;
    const ux = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };
    let yx = navigator;
    var zx = ()=>{
        try {
            return yx.javaEnabled()
        } catch (a) {
            return !1
        }
    }
      , Ax = a=>{
        let b = 1;
        let c;
        if (void 0 != a && "" != a)
            for (b = 0,
            c = a.length - 1; 0 <= c; c--) {
                var d = a.charCodeAt(c);
                b = (b << 6 & 268435455) + d + (d << 14);
                d = b & 266338304;
                b = 0 != d ? b ^ d >> 21 : b
            }
        return b
    }
      , Bx = (a,b)=>{
        if (!a || "none" == a)
            return 1;
        a = String(a);
        "auto" == a && (a = b,
        "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
        return Ax(a.toLowerCase())
    }
    ;
    const Cx = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/
      , Dx = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/
      , Ex = /^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;
    const Fx = /^blogger$/
      , Gx = /^wordpress(.|\s|$)/i
      , Hx = /^joomla!/i
      , Ix = /^drupal/i
      , Jx = /\/wp-content\//
      , Kx = /\/wp-content\/plugins\/advanced-ads/
      , Lx = /\/wp-content\/themes\/genesis/
      , Mx = /\/wp-content\/plugins\/genesis/;
    var Nx = a=>{
        var b = a.getElementsByTagName("script")
          , c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src");
                if (Kx.test(e))
                    return 5;
                if (Mx.test(e))
                    return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d],
            e.hasAttribute("href") && (e = e.getAttribute("href"),
            Lx.test(e) || Mx.test(e)))
                return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if ("generator" == f.getAttribute("name") && f.hasAttribute("content")) {
                f = f.getAttribute("content");
                if (Fx.test(f))
                    return 1;
                if (Gx.test(f))
                    return 2;
                if (Hx.test(f))
                    return 3;
                if (Ix.test(f))
                    return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a],
            "stylesheet" == d.getAttribute("rel") && d.hasAttribute("href") && (d = d.getAttribute("href"),
            Jx.test(d)))
                return 2;
        return 0
    }
    ;
    function Ox(a) {
        -1 == a.j && (a.j = Ra(a.l, (b,c,d)=>c ? b + 2 ** d : b, 0));
        return a.j
    }
    class Px {
        constructor() {
            this.l = [];
            this.j = -1
        }
        set(a, b=!0) {
            0 <= a && 52 > a && 0 === a % 1 && this.l[a] != b && (this.l[a] = b,
            this.j = -1)
        }
        get(a) {
            return !!this.l[a]
        }
    }
    ;const Qx = /[+, ]/;
    var Rx = a=>{
        try {
            if (a.parentNode)
                return a.parentNode
        } catch (c) {
            return null
        }
        if (9 === a.nodeType)
            a: {
                try {
                    const c = qf(a);
                    if (c) {
                        const d = c.frameElement;
                        if (d && Ff(c.parent)) {
                            var b = d;
                            break a
                        }
                    }
                } catch (c) {}
                b = null
            }
        else
            b = null;
        return b
    }
    ;
    const Sx = a=>{
        try {
            const b = p.top.location.hash;
            if (b) {
                const c = b.match(a);
                return c && c[1] || ""
            }
        } catch (b) {}
        return ""
    }
    ;
    var Tx = (a,b)=>{
        const c = vx(b, 8, {});
        b = vx(b, 9, {});
        const d = a.google_ad_section
          , e = a.google_ad_format;
        a = a.google_ad_slot;
        e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
    }
    ;
    const Ux = (a,b)=>{
        const c = a.J;
        var d = a.I;
        if (d && de(d, 6) || a.B.google_pub_requests_npa || c && c.ud)
            b.npa = 1;
        c && c.Sb && (b.guci = c.Sb);
        d && (null != D(d, 3) && (b.gdpr = de(d, 3) ? "1" : "0"),
        (a = D(d, 1)) && (b.us_privacy = a),
        (a = D(d, 2)) && (b.gdpr_consent = a),
        (a = D(d, 4)) && (b.addtl_consent = a),
        (d = D(d, 7)) && (b.tcfe = d))
    }
    ;
    var Vx = (a,b)=>{
        const c = a.B;
        Gh(li, (d,e)=>{
            b[d] = c[e]
        }
        );
        Ux(a, b);
        Gh(ki, (d,e)=>{
            b[d] = c[e]
        }
        );
        Gh(mi, (d,e)=>{
            b[d] = c[e]
        }
        );
        jl(c) && (a = il(c),
        b.fa = a)
    }
    ;
    const Wx = /YtLoPri/;
    function Xx(a) {
        a.__uspapi || a.frames.__uspapiLocator || Yx(new Zx(a))
    }
    function Yx(a) {
        !a.l || a.j.__uspapi || a.j.frames.__uspapiLocator || (wu(a.j, "__uspapiLocator"),
        Ha("__uspapi", (...b)=>$x(a, ...b)))
    }
    function $x(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.l
        }, !0)
    }
    class Zx {
        constructor(a) {
            this.j = a;
            this.m = a.document;
            if (a = $e(this.m))
                if ((a = J(a, Ye, 5)) && null != D(a, 1)) {
                    var b = J(a, Ve, 1).getSeconds()
                      , c = Date.now() / 1E3;
                    a = b < c && b > c - 33696E3 ? a : null
                } else
                    a = null;
            else
                a = null;
            this.l = a ? D(a, 2) : null
        }
    }
    ;function ay(a) {
        if (a.j)
            return a.j;
        a.j = xg(a.m, "__uspapiLocator");
        return a.j
    }
    function by(a, b) {
        if ("function" === typeof a.m.__uspapi)
            a = a.m.__uspapi,
            a("getUSPData", 1, b);
        else if (ay(a)) {
            cy(a);
            const c = ++a.A;
            a.v[c] = b;
            a.j && a.j.postMessage({
                ["__uspapiCall"]: {
                    command: "getUSPData",
                    version: 1,
                    callId: c
                }
            }, "*")
        }
    }
    function dy(a, b) {
        let c = {};
        if ("function" === typeof a.m.__uspapi || null != ay(a)) {
            var d = hb(()=>b(c));
            by(a, (e,f)=>{
                f && (c = e);
                d()
            }
            );
            setTimeout(d, a.C)
        } else
            b(c)
    }
    function cy(a) {
        a.o || (a.o = b=>{
            try {
                {
                    let d;
                    "string" === typeof b.data ? d = JSON.parse(b.data) : d = b.data;
                    var c = d.__uspapiReturn
                }
                a.v[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }
        ,
        Ce(a.m, "message", a.o))
    }
    class ey extends bh {
        constructor(a, b=500) {
            super();
            this.m = a;
            this.j = null;
            this.v = {};
            this.A = 0;
            this.C = b;
            this.o = null
        }
        l() {
            this.v = {};
            this.o && (De(this.m, "message", this.o),
            delete this.o);
            delete this.v;
            delete this.m;
            delete this.j;
            super.l()
        }
    }
    ;function fy(a) {
        B(this, a, null, null)
    }
    v(fy, z);
    function gy(a) {
        B(this, a, hy, null)
    }
    v(gy, z);
    var hy = [1, 2];
    function iy(a) {
        B(this, a, null, null)
    }
    v(iy, z);
    function jy(a) {
        B(this, a, null, null)
    }
    v(jy, z);
    function ky(a) {
        a.o || (a.o = b=>{
            try {
                const c = new jy(JSON.parse(b.data.__fciReturn));
                (0,
                a.v[D(c, 1)])(c)
            } catch (c) {}
        }
        ,
        Ce(a.m, "message", a.o))
    }
    function ly(a, b) {
        return new Promise(c=>{
            if (a.j)
                if (a.j === a.m) {
                    var d = a.m.googlefc || {};
                    d.__fci = d.__fci || [];
                    d.__fci.push(b, c)
                } else
                    ky(a),
                    d = a.A++,
                    a.v[d] = c,
                    a.j.postMessage({
                        ["__fciCall"]: {
                            command: b,
                            callId: d
                        }
                    }, "*")
        }
        )
    }
    var my = class extends bh {
        constructor(a) {
            super();
            this.m = a;
            this.o = this.j = null;
            this.v = {};
            this.A = 0;
            this.j || (this.m.googlefc ? this.j = this.m : this.j = xg(this.m, "googlefcPresent"))
        }
    }
      , ny = (a,b,c)=>{
        if (!b)
            return Promise.resolve(null);
        const d = J(b, fy, 3);
        b = J(b, iy, 2);
        return d && b && 1 === D(b, 1) && 2 === D(d, 1) ? ly(a, "getM25Consent").then(e=>{
            var f = J(e, gy, 4);
            if (f) {
                if (e = Zg,
                c) {
                    const g = D(f, 1);
                    g && g.includes(c) && (e = !1);
                    (f = D(f, 2)) && f.includes(c) && (e = !0)
                }
            } else
                e = null;
            return e
        }
        ) : Promise.resolve(null)
    }
    ;
    const oy = a=>void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies || void 0 !== a.listenerId && "number" !== typeof a.listenerId || void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3;
    function py(a) {
        return !1 === a.gdprApplies || "error" === a.cmpStatus || "loaded" === a.cmpStatus && ("tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1
    }
    function qy(a) {
        if (a.j)
            return a.j;
        a.j = xg(a.m, "__tcfapiLocator");
        return a.j
    }
    function ry(a, b, c, d) {
        c || (c = ()=>{}
        );
        if ("function" === typeof a.m.__tcfapi)
            a = a.m.__tcfapi,
            a(b, 2, c, d);
        else if (qy(a)) {
            sy(a);
            const e = ++a.A;
            a.v[e] = c;
            a.j && a.j.postMessage({
                ["__tcfapiCall"]: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else
            c({}, !1)
    }
    function ty(a, b) {
        let c = {
            internalErrorState: 0
        };
        const d = hb(()=>b(c));
        let e = setTimeout(()=>{
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }
        , a.C);
        ry(a, "addEventListener", (f,g)=>{
            e && (clearTimeout(e),
            e = 0);
            g && (c = f);
            c.internalErrorState = oy(c);
            0 != c.internalErrorState && (c.tcString = "tcunavailable");
            if (0 != c.internalErrorState || py(c))
                ry(a, "removeEventListener", null, c.listenerId),
                d()
        }
        )
    }
    function uy(a) {
        return new Promise(b=>{
            ty(a, b)
        }
        )
    }
    function sy(a) {
        a.o || (a.o = b=>{
            try {
                {
                    let d;
                    "string" === typeof b.data ? d = JSON.parse(b.data) : d = b.data;
                    var c = d.__tcfapiReturn
                }
                a.v[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }
        ,
        Ce(a.m, "message", a.o))
    }
    class vy extends bh {
        constructor(a, b=500) {
            super();
            this.m = a;
            this.j = null;
            this.v = {};
            this.A = 0;
            this.C = b;
            this.o = null
        }
        l() {
            this.v = {};
            this.o && (De(this.m, "message", this.o),
            delete this.o);
            delete this.v;
            delete this.m;
            delete this.j;
            super.l()
        }
        addEventListener(a) {
            ry(this, "addEventListener", (b,c)=>{
                b = c ? b : {};
                b.internalErrorState = oy(b);
                0 !== b.internalErrorState && (b.tcString = "tcunavailable");
                a(b)
            }
            )
        }
        removeEventListener(a) {
            a && a.listenerId && ry(this, "removeEventListener", null, a.listenerId)
        }
    }
    ;function wy(a) {
        var b = Ug();
        if (Z.F().j(215, !1) && !a.goog_sdr_l) {
            Object.defineProperty(a, "goog_sdr_l", {
                value: !0
            });
            var c = ()=>{
                const d = nk(37)
                  , e = ()=>{
                    var f = String(Hg(a));
                    try {
                        var g = new Je("gda",b,"pt");
                        g.Aa = f;
                        g.win = a;
                        He(new Ie(g))
                    } catch (h) {}
                }
                ;
                d ? a.setTimeout(e, d) : e()
            }
            ;
            "complete" === a.document.readyState ? c() : Ce(a, "load", c)
        }
    }
    ;function xy(a, b) {
        a = {
            type: "send-srr",
            issuer: `${a}`,
            refreshPolicy: "none",
            signRequestData: "include",
            includeTimestampHeader: !0,
            additionalSignedHeaders: ["sec-time", "Sec-Signed-Redemption-Record"]
        };
        b && 0 < Object.keys(b).length && (a.additionalSigningData = Zd(JSON.stringify(b)));
        return a
    }
    ;var zy = async a=>{
        const b = a.iframeWin
          , c = a.vars;
        b && (c.google_iframe_start_time = b.google_iframe_start_time);
        const d = new Sg(Wh(a.pubWin),a.pubWin,b,c);
        d.U = Date.now();
        ji(1, [d.B]);
        try {
            await yy(d)
        } catch (e) {
            if (!sj.j(159, e, void 0, void 0))
                throw e;
        }
        zj(639, ()=>{
            {
                var e = d.B;
                const g = d.j;
                if (g && 1 === e.google_responsive_auto_format && !0 === e.google_full_width_responsive_allowed) {
                    var f;
                    (f = (f = g.document.getElementById(e.google_async_iframe_id)) ? xf(f, "INS", "adsbygoogle") : null) ? (e = new qv(g,f,e),
                    e.l = p.setInterval(Ba(e.C, e), 500),
                    e.C(),
                    e = !0) : e = !1
                } else
                    e = !1
            }
            return e
        }
        );
        zj(160, ()=>{
            var e = d.iframeWin;
            !Nh(d.B) && e ? ni(e) : (e = bl().google_jobrunner,
            sv(e) && e.rl(),
            wk(d))
        }
        )
    }
      , yy = a=>{
        if (/_sdo/.test(a.B.google_ad_format))
            return Promise.resolve();
        {
            var b = qx();
            const c = vx(b, 22, !1);
            c || (b.S[tx(22)] = !0);
            b = !c
        }
        b && (lk.F().j(13),
        lk.F().j(11),
        b = Pe(a.B),
        Nb("") && b.push(""));
        b = !ih() && !Mc();
        return !b || b && !Ay(a) ? By(a) : Promise.resolve()
    }
    ;
    const Cy = (a,b,c=!1)=>{
        b = Dk(a, b);
        const d = kh() || Ck(Sh(a.pubWin));
        if (!b || -12245933 == b.y || -12245933 == d.width || -12245933 == d.height || !d.height)
            return 0;
        let e = 0;
        try {
            const f = Sh(a.pubWin);
            e = Ak(f.document, f).y
        } catch (f) {
            return 0
        }
        a = e + d.height;
        return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0
    }
    ;
    function Dy(a) {
        try {
            return a.iframeWin.frameElement
        } catch (b) {}
        return null
    }
    function Ay(a) {
        return Ey(a) || Fy(a)
    }
    function Ey(a) {
        const b = a.B;
        if (!b.google_pause_ad_requests)
            return !1;
        const c = p.setTimeout(()=>{
            W("abg:cmppar", {
                client: a.B.google_ad_client,
                url: a.B.google_page_url
            })
        }
        , 1E4)
          , d = T(450, ()=>{
            b.google_pause_ad_requests = !1;
            p.clearTimeout(c);
            a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
            Ay(a) || By(a)
        }
        );
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }
    function Fy(a) {
        const b = a.pubWin.document
          , c = Gy();
        if (0 > c.hidden && 0 > c.visible)
            return !1;
        const d = Dy(a)
          , e = d || a.o;
        null == d && null != a.o && W("ins_no_ifr", {
            sf: a.B.google_enable_single_iframe
        });
        const f = Mk(b);
        if (!e || !f)
            return !1;
        if (!Nk(b))
            return Hy(a, c.visible, e);
        if (Cy(a, e) <= c.hidden)
            return !1;
        let g = T(332, ()=>{
            !Nk(b) && g && (De(b, f, g),
            Hy(a, c.visible, e) || By(a),
            g = null)
        }
        );
        return Ce(b, f, g)
    }
    function Gy() {
        const a = {
            hidden: 0,
            visible: nk(30) || 4
        };
        if (!p.IntersectionObserver || Z.F().j(348, !1))
            a.visible = -1;
        if (Cf()) {
            const b = nk(29) || 1;
            a.visible *= b
        }
        return a
    }
    function Hy(a, b, c) {
        if (!c || 0 > b)
            return !1;
        var d = a.B;
        if (jl(d) || d.google_reactive_ads_config || !Bk(c) || Cy(a, c) <= b)
            return !1;
        var e = qx()
          , f = vx(e, 8, {});
        e = vx(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        f = !f[d] && !e[d];
        d = Z.F().j(205, !1) && !!a.pubWin.google_apltlad;
        if (f && !d)
            return !1;
        a.O = new p.IntersectionObserver((g,h)=>{
            Oa(g, k=>{
                0 >= k.intersectionRatio || (h.unobserve(k.target),
                zj(294, ()=>{
                    By(a)
                }
                ))
            }
            )
        }
        ,{
            rootMargin: 100 * b + "%"
        });
        a.O.observe(c);
        return !0
    }
    var By = a=>{
        zj(326, ()=>{
            var c = a.B;
            if (Nh(c) ? 1 == Lh(c) : !Lh(c)) {
                var d = (c = Z.F().j(188, !1)) || Z.F().j(84, !1)
                  , e = N();
                if (d && e === e.top) {
                    var f = new Gk;
                    d = new Hk;
                    var g = Hg(a.pubWin);
                    fe(f, 1, g, 0);
                    g = qk(a.pubWin);
                    fe(f, 5, g, "");
                    fe(f, 2, 1, 0);
                    ge(d, 1, f);
                    f = new Ek;
                    f = fe(f, 10, !0, !1);
                    g = Z.F().j(77, !1);
                    f = fe(f, 8, g, !1);
                    g = Z.F().j(78, !1);
                    f = fe(f, 9, g, !1);
                    g = Z.F().j(76, !1);
                    f = fe(f, 7, g, !1);
                    g = Z.F().j(80, !1);
                    f = fe(f, 13, g, !1);
                    g = Z.F().j(81, !1);
                    f = fe(f, 14, g, !1);
                    ge(d, 2, f);
                    e.google_rum_config = d.L;
                    e = e.document;
                    d = ei("/pagead/js/r20200818/r20190131/rum.js");
                    Xg && c && (d = d.replace("rum", "rum_debug"));
                    c = d;
                    Jf(e, Af(c))
                } else
                    ij(uj)
            }
        }
        );
        a.B.google_ad_channel = Iy(a, a.B.google_ad_channel);
        a.B.google_tag_partner = Jy(a, a.B.google_tag_partner);
        Ky(a);
        var b = a.B.google_start_time;
        "number" === typeof b && (sk = b,
        a.B.google_start_time = null);
        zj(161, ()=>{
            {
                const e = a.B;
                null == e.google_ad_output && (e.google_ad_output = "html");
                if (null != e.google_ad_client) {
                    var c;
                    (c = String(e.google_ad_client)) ? (c = c.toLowerCase()) && "ca-" != c.substring(0, 3) && (c = "ca-" + c) : c = "";
                    e.google_ad_client = c
                }
                null != e.google_ad_slot && (e.google_ad_slot = String(e.google_ad_slot));
                if (null == e.google_flash_version) {
                    try {
                        var d = Uh()
                    } catch (f) {
                        d = "0"
                    }
                    e.google_flash_version = d
                }
                e.google_webgl_support = !!M.WebGLRenderingContext;
                e.google_ad_section = e.google_ad_section || e.google_ad_region || "";
                e.google_country = e.google_country || e.google_gl || "";
                d = (new Date).getTime();
                Array.isArray(e.google_color_bg) && (e.google_color_bg = oi(a, e.google_color_bg, d));
                Array.isArray(e.google_color_text) && (e.google_color_text = oi(a, e.google_color_text, d));
                Array.isArray(e.google_color_link) && (e.google_color_link = oi(a, e.google_color_link, d));
                Array.isArray(e.google_color_url) && (e.google_color_url = oi(a, e.google_color_url, d));
                Array.isArray(e.google_color_border) && (e.google_color_border = oi(a, e.google_color_border, d));
                Array.isArray(e.google_color_line) && (e.google_color_line = oi(a, e.google_color_line, d))
            }
        }
        );
        Ly(a);
        if (!Z.F().j(1003, !1) && (b = new Rg,
        I(b, 5, !0),
        My(a, b)))
            return Promise.resolve();
        jl(a.B) && (ai() && (a.B.google_adtest = a.B.google_adtest || "on"),
        a.B.google_pgb_reactive = a.B.google_pgb_reactive || 3);
        Ny(a.j);
        return Oy(a)
    }
      , Ly = a=>{
        a.j && (ws(a.j, a.B),
        us(a.j.location) && Gs(a.j, {
            ["enable_page_level_ads"]: {
                ["pltais"]: !0
            },
            ["google_ad_client"]: a.B.google_ad_client
        }))
    }
      , Iy = (a,b)=>(b ? [b] : []).concat(Oe(a.B).ad_channels || []).join("+")
      , Jy = (a,b)=>(b ? [b] : []).concat(Oe(a.B).tag_partners || []).join("+")
      , Ry = (a,b,c,d)=>{
        const e = d.iframeWin ? d.B.google_container_id : d.o.id;
        c.src = uk(a);
        const f = (d.iframeWin || d.pubWin).document
          , g = f.currentScript || f.scripts && f.scripts[0]
          , h = N() == window.top;
        if (Mc() || !g && !e)
            c = Tv(c),
            h && (mh(d.pubWin),
            p.setTimeout(T(222, ()=>{
                const k = f.getElementById(b);
                k ? d.m.push(mh(d.pubWin, k)) : W("inabox:no-iframe", {
                    adUrl: a
                })
            }
            ), 0)),
            e ? Py(e, f, c) : f.write(c);
        else {
            const k = zf(new mf(f), "IFRAME");
            Gh(c, (l,m)=>{
                null != l && k.setAttribute(m, l)
            }
            );
            h && d.m.push(mh(d.pubWin, k));
            e ? Qy(e, f, k) : g.parentNode.insertBefore(k, g.nextSibling)
        }
        Z.F().j(236, !1) && !d.B.google_refresh_count && p.setTimeout(T(644, ()=>{
            Jg(f.getElementById(b), ()=>{
                p.setTimeout(()=>{
                    for (const k of d.m)
                        k();
                    d.m.length = 0
                }
                , 200)
            }
            )
        }
        ), 0)
    }
      , Sy = (a,b,c,d)=>{
        if (!a.j)
            return W("jserror", {
                context: "ac_crai"
            }),
            null;
        const e = a.iframeWin ? a.iframeWin.document.body : a.o;
        return 9 == a.B.google_reactive_ad_format && a.H && xf(a.H, null, "fsi_container", void 0) ? (e.appendChild(b),
        Promise.resolve(b)) : Ds(525, f=>{
            (a.iframeWin ? a.iframeWin.document.body : a.o).appendChild(b);
            const g = xv(d, a.pubWin);
            f.createAdSlot(a.j, a.B, c, b, a.H.parentElement, g);
            return b
        }
        )
    }
    ;
    function Ty(a, b, c, d, e=!1) {
        wy(a.pubWin);
        const f = "string" === typeof b ? (a.iframeWin || a.pubWin).document.getElementById(b) : b;
        if (f) {
            var g = a.j
              , h = a.iframeWin && Nh(a.B) ? a.iframeWin.frameElement : f;
            a.B.google_acr && a.B.google_acr(f);
            Ce(f, "load", ()=>{
                f && f.setAttribute("data-load-complete", !0);
                if ((a.B.ovlp || Z.F().j(190, !1)) && g && g === a.pubWin && h) {
                    const k = h.ownerDocument.getElementById(h.id + "_expand");
                    k && Uy(g, a, k, f)
                }
            }
            );
            e = k=>{
                k && a.m.push(()=>k.Qa())
            }
            ;
            Vy(a, f);
            !g || jl(a.B) && !kl(a.B) || (e(new ox(g,f,h,a.B)),
            e(iw(a, f)),
            e(Zv(a, f)),
            e(g.IntersectionObserver ? null : new gw(g,f,a.o)));
            g && (e(new bk(g,f,a.B)),
            a.m.push(kv(a.iframeWin, g, a.B)),
            a.m.push(Yv(g, f)),
            mv.F().P(g));
            a.A && Wy(a, f, a.pubWin.document);
            Xy(a, c, f);
            f && f.setAttribute("data-google-container-id", d);
            e = a.B.iaaso;
            if (null != e && h) {
                const k = h.ownerDocument.getElementById(h.id + "_expand")
                  , l = k.parentElement;
                (l && Qh.test(l.className) ? l : k).setAttribute("data-auto-ad-size", e)
            }
            Yy(a)
        } else
            e ? W("jserror", {
                context: "ac::nfrm",
                url: c
            }) : (e = T(162, ()=>Ty(a, b, c, d, !0)),
            p.setTimeout(e, 0))
    }
    var Vy = (a,b)=>{
        const c = a.iframeWin || a.pubWin;
        if (c)
            var d = a.B.google_ad_client
              , e = xx()
              , f = null
              , g = Bj(c, "pvt", (h,k)=>{
                "string" === typeof h.token && k.source === b.contentWindow && (f = h.token,
                g(),
                e[d] = e[d] || [],
                e[d].push(f),
                100 < e[d].length && e[d].shift())
            }
            )
    }
    ;
    const Yy = a=>{
        const b = ih(a.pubWin);
        if (b)
            if ("AMP-STICKY-AD" === b.container) {
                const c = a.iframeWin || a.pubWin
                  , d = f=>{
                    "fill_sticky" === f.data && (b.renderStart && b.renderStart(),
                    a.iframeWin && De(c, "message", d))
                }
                  , e = T(616, d, this);
                Ce(c, "message", e);
                a.m.push(()=>{
                    De(c, "message", d)
                }
                )
            } else
                b.renderStart && b.renderStart()
    }
      , Uy = (a,b,c,d)=>{
        rw(new Aw(a,[5, 8, 9],[3, 4],void 0,2), c).then(e=>{
            ji(8, [e]);
            return e
        }
        ).then(e=>{
            const f = c.parentElement;
            (f && Qh.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", e.isOverlappingOrOutsideViewport);
            return e
        }
        ).then(e=>{
            const f = b.B.armr || ""
              , g = e.executionTime || ""
              , h = null == b.B.iaaso ? "" : Number(b.B.iaaso)
              , k = Number(e.isOverlappingOrOutsideViewport)
              , l = Qa(e.entries, U=>`${U.overlapType}:${U.overlapDepth}:${U.overlapDetectionPoint}`)
              , m = e.overlappedArea.toFixed(2)
              , r = d.dataset.googleQueryId || ""
              , t = m * e.targetRect.width * e.targetRect.height
              , u = e.scrollPosition.scrollX + "," + e.scrollPosition.scrollY
              , V = Mh(e.target)
              , H = [e.targetRect.left, e.targetRect.top, e.targetRect.right, e.targetRect.bottom].join();
            e = e.viewportSize.width + "x" + e.viewportSize.height;
            W("ovlp", {
                adf: b.B.google_ad_dom_fingerprint,
                armr: f,
                client: b.B.google_ad_client,
                eid: qk(b.B),
                et: g,
                fwrattr: b.B.google_full_width_responsive,
                iaaso: h,
                io: k,
                saldr: b.B.google_loader_used,
                oa: m,
                oe: l.join(","),
                qid: r,
                rafmt: b.B.google_responsive_auto_format,
                roa: t,
                slot: b.B.google_ad_slot,
                sp: u,
                tgt: V,
                tr: H,
                url: b.B.google_page_url,
                vp: e
            }, 1)
        }
        ).catch(e=>{
            ji(8, ["Error:", e.message, c]);
            W("ovlp-err", {
                err: e.message
            }, 1)
        }
        )
    }
    ;
    var Wy = (a,b,c)=>{
        if (3 !== Lk(c))
            Zy(a.D, b);
        else {
            const d = Mk(c);
            if (d) {
                let e = ()=>{
                    De(c, d, f);
                    e = null
                }
                ;
                const f = ()=>{
                    Zy(a.D, b);
                    e && e()
                }
                ;
                Ce(c, d, f);
                a.m.push(()=>e && e())
            }
        }
        a.A = !1
    }
    ;
    const $y = a=>{
        const b = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation"];
        Z.F().j(338, !1) && b.push("allow-pointer-lock");
        a.sandbox = ug(b).join(" ")
    }
    ;
    var az = a=>{
        var b = y("Edge") ? 4E3 : 8100;
        var c = a;
        var d = b - 8;
        c.length > b && (c = c.substring(0, d),
        c = c.replace(/%\w?$/, ""),
        c = c.replace(/&[^=]*=?$/, ""),
        c += "&trunc=1");
        c !== a && (b -= 8,
        d = a.lastIndexOf("&", b),
        -1 === d && (d = a.lastIndexOf("?", b)),
        b = -1 === d ? "" : a.substring(d + 1),
        W("trn", {
            ol: a.length,
            tr: b,
            url: a
        }, .01));
        return c
    }
      , Xy = (a,b,c)=>{
        const d = !Nc() || 0 <= Zb(Rc(), 11) ? Tk() : Yk();
        d.getOseId() && (Ha("Goog_AdSense_getAdAdapterInstance", Tk, N()),
        d.registerAdBlock(b, 1, "", c),
        a.m.push(()=>{
            d.unloadAdBlock(c, !!a.B.google_refresh_count, !0)
        }
        ))
    }
      , My = (a,b)=>{
        var c = a.B.google_reactive_ads_config;
        if (c)
            if (Cs(a.j, c),
            a.j || Z.F().j(1001, !1)) {
                let d = new Rg;
                Z.F().j(1005, !1) ? I(d, 5, !0) : d = b;
                b = xv(d);
                Wu(c, a, b);
                c = c.page_level_pubvars;
                ua(c) && tb(a.B, c)
            } else
                return !0;
        return !1
    }
    ;
    const zz = async(a,b,c,d)=>{
        const e = a.B
          , f = a.pubWin
          , g = xv(d, a.pubWin);
        if (Z.F().j(1003, !1) && My(a, d))
            return Promise.resolve();
        let h = "";
        if (Ru(e))
            h = Jh({
                ["adk"]: e.google_ad_unit_key,
                ["client"]: e.google_ad_client,
                ["fa"]: e.google_reactive_ad_format
            }, di("googleads.g.doubleclick.net", ["/pagead/html/", Ug(), "/r20190131/zrt_lookup.html#", encodeURIComponent("RS-" + e.google_reactive_sra_index + "-")].join(""))),
            Tx(e, qx()),
            bz(e);
        else {
            var k;
            if (!(k = Qu(e) || !ts(e))) {
                {
                    const fa = e.google_reactive_ad_format;
                    if (ob(fa)) {
                        var l = Wh(f);
                        if (l && rs(l, e, fa, g)) {
                            var m = Kj(l);
                            Sj(m, fa) ? k = !1 : (m.adCount[fa] || (m.adCount[fa] = 0),
                            m.adCount[fa]++,
                            k = !0)
                        } else
                            k = !1
                    } else
                        k = !1
                }
            }
            if (k && bz(e)) {
                {
                    var r = d;
                    r || (r = new Rg,
                    I(r, 5, !0));
                    const fa = a.B;
                    var t = fa;
                    {
                        var u = N().document;
                        const q = {}
                          , w = N();
                        {
                            const x = {};
                            x.oc = al(N(), !1).win;
                            x.Bd = el(x.oc);
                            x.Ub = cl(N(), u, t.google_ad_width, t.google_ad_height);
                            {
                                var V = x.Ub
                                  , H = x.Bd.qb;
                                const G = N()
                                  , C = G.top == G ? 0 : Ff(G.top) ? 1 : 2;
                                let P = 4;
                                V || 1 != C ? V || 2 != C ? V && 1 == C ? P = 7 : V && 2 == C && (P = 8) : P = 6 : P = 5;
                                H && (P |= 16);
                                var U = "" + P
                            }
                            x.Yc = U;
                            x.Ob = fl();
                            var Da = x
                        }
                        const F = Da.oc
                          , A = Da.Ub;
                        let E = !!t.google_page_url;
                        q.google_iframing = Da.Yc;
                        0 != Da.Ob && (q.google_iframing_environment = Da.Ob);
                        if (!E && "ad.yieldmanager.com" == u.domain) {
                            let x = u.URL.substring(u.URL.lastIndexOf("http"));
                            for (; -1 < x.indexOf("%"); )
                                try {
                                    x = decodeURIComponent(x)
                                } catch (G) {
                                    break
                                }
                            t.google_page_url = x;
                            E = !!x
                        }
                        if (E) {
                            var na = A
                              , ja = q;
                            ja.google_page_url = t.google_page_url;
                            ja.google_page_location = (na ? u.referrer : u.URL) || "EMPTY"
                        } else if (A && Ff(w.top) && u.referrer && w.top.document.referrer === u.referrer)
                            q.google_page_url = w.top.document.URL,
                            q.google_page_location = null;
                        else {
                            var da = q;
                            da.google_page_url = A ? u.referrer : u.URL;
                            da.google_page_location = null
                        }
                        if (u.URL === q.google_page_url)
                            try {
                                var ka = Math.round(Date.parse(u.lastModified) / 1E3) || null
                            } catch (x) {
                                ka = null
                            }
                        else
                            ka = null;
                        q.google_last_modified_time = ka;
                        if (F == F.top)
                            var sc = F.document.referrer;
                        else {
                            {
                                const x = ih();
                                var Mf = x && x.referrer
                            }
                            sc = Mf || ""
                        }
                        q.google_referrer_url = sc;
                        var Nf = q
                    }
                    dl(Nf, t);
                    {
                        let q = fa.google_page_location || fa.google_page_url;
                        "EMPTY" == q && (q = fa.google_page_url);
                        if (Xg || !q)
                            var hd = !1;
                        else {
                            var ya = q.toString();
                            0 == ya.indexOf("http://") ? ya = ya.substring(7, ya.length) : 0 == ya.indexOf("https://") && (ya = ya.substring(8, ya.length));
                            var he = ya.indexOf("/");
                            -1 == he && (he = ya.length);
                            var Of = ya.substring(0, he);
                            if (hl.test(Of))
                                hd = !1;
                            else {
                                var ra = Of.split(".")
                                  , tc = !1;
                                3 <= ra.length && (tc = ra[ra.length - 3]in gl);
                                2 <= ra.length && (tc = tc || ra[ra.length - 2]in gl);
                                hd = tc
                            }
                        }
                    }
                    const re = hd ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net";
                    {
                        var uc = r;
                        const q = {};
                        Vx(a, q);
                        Mv();
                        q.adsid = Jv[1];
                        Mv();
                        q.pucrd = Jv[6];
                        {
                            const w = a.pubWin.google_user_agent_client_hint;
                            w && (q.uach = Zd(w))
                        }
                        {
                            const w = a.B;
                            {
                                var vc = q;
                                const A = a.B;
                                vc.dt = sk;
                                Nh(A) && A.google_bpp && (vc.bpp = A.google_bpp);
                                {
                                    const G = N();
                                    b: {
                                        const P = N();
                                        try {
                                            const S = P.performance;
                                            if (S && S.timing && S.now) {
                                                var wc = S.timing.navigationStart + Math.round(S.now()) - S.timing.domLoading;
                                                break b
                                            }
                                        } catch (S) {}
                                        wc = null
                                    }
                                    const C = wc;
                                    if (C) {
                                        var ui = sk
                                          , id = G.Date.now() - ui;
                                        var Pf = tk(C, id, 1E6)
                                    } else
                                        Pf = null
                                }
                                const E = Pf;
                                E && (vc.bdt = E);
                                {
                                    const G = A.google_iframe_start_time;
                                    if ("number" !== typeof G)
                                        var Qf = null;
                                    else
                                        A.google_iframe_start_time = null,
                                        Qf = tk(G, sk)
                                }
                                const x = Qf;
                                null != x && (vc.fdt = x);
                                vc.idt = tk(a.U, sk)
                            }
                            {
                                var kb = q;
                                const A = a.B;
                                kb.shv = Ug();
                                kb.cbv = "/r20190131".replace("/", "");
                                "sa" == A.google_loader_used ? kb.ptt = 5 : "aa" == A.google_loader_used && (kb.ptt = 9);
                                /^\w{1,3}$/.test(A.google_loader_used) && (kb.saldr = A.google_loader_used);
                                Vg && (kb.jscb = 1);
                                Wg && (kb.jscd = 1)
                            }
                            {
                                var jd = q;
                                const A = ih(a.pubWin);
                                if (A) {
                                    jd.is_amp = 1;
                                    {
                                        const x = A || ih();
                                        var vi = x && x.mode ? +x.mode.version || null : null
                                    }
                                    jd.amp_v = vi;
                                    {
                                        const x = A || ih();
                                        if (x && x.container) {
                                            const G = x.container.split(",")
                                              , C = [];
                                            for (let P = 0; P < G.length; P++)
                                                C.push(hh[G[P]] || "x");
                                            var Yb = C.join()
                                        } else
                                            Yb = null
                                    }
                                    const E = Yb;
                                    E && (jd.act = E)
                                }
                                N() == window.top && (jd.abxe = 1)
                            }
                            if ("_gfp_a_"in a.pubWin) {
                                const A = a.pubWin._gfp_a_;
                                if ("boolean" !== typeof A)
                                    throw Error(`Illegal value of ${"_gfp_a_"}: ${A}`);
                                if (A && Z.F().j(225, !1)) {
                                    const E = Dv(new Ev(a.pubWin), uc);
                                    E && (q.cookie = E)
                                }
                            }
                            const F = qx();
                            {
                                var ie = w
                                  , kd = F
                                  , je = q;
                                const A = vx(kd, 8, {})
                                  , E = ie.google_ad_section;
                                A[E] && (je.prev_fmts = A[E]);
                                const x = vx(kd, 9, {});
                                x[E] && (je.prev_slotnames = x[E].toLowerCase());
                                Tx(ie, kd);
                                const G = vx(kd, 15, 0);
                                0 < G && (je.nras = String(G))
                            }
                            q.correlator = vx(F, 7, px());
                            Z.F().j(83, !1) && (q.rume = 1);
                            var xc = w
                              , Rf = F
                              , Sf = q;
                            if (xc.google_ad_channel) {
                                const A = vx(Rf, 10, {});
                                let E = "";
                                const x = xc.google_ad_channel.split(Qx);
                                for (let G = 0; G < x.length; G++) {
                                    const C = x[G];
                                    A[C] ? E += C + "+" : A[C] = !0
                                }
                                Sf.pv_ch = E
                            }
                            if (xc.google_ad_host_channel) {
                                {
                                    var yc = vx(Rf, 11, []);
                                    const A = xc.google_ad_host_channel.split("|");
                                    let E = -1;
                                    const x = [];
                                    for (let C = 0; C < A.length; C++) {
                                        const P = A[C].split(Qx);
                                        yc[C] || (yc[C] = {});
                                        let S = "";
                                        for (let K = 0; K < P.length; K++) {
                                            const ia = P[K];
                                            "" !== ia && (yc[C][ia] ? S += "+" + ia : yc[C][ia] = !0)
                                        }
                                        S = S.slice(1);
                                        x[C] = S;
                                        "" !== S && (E = C)
                                    }
                                    let G = "";
                                    if (-1 < E) {
                                        for (let C = 0; C < E; C++)
                                            G += x[C] + "|";
                                        G += x[E]
                                    }
                                    var lb = G
                                }
                                Sf.pv_h_ch = lb
                            }
                            q.frm = w.google_iframing;
                            q.ife = w.google_iframing_environment;
                            var ke = w.google_ad_client;
                            try {
                                const A = bl();
                                let E = A.google_prev_clients;
                                E || (E = A.google_prev_clients = {});
                                if (ke in E)
                                    var ld = 1;
                                else
                                    E[ke] = !0,
                                    ld = 2
                            } catch (A) {
                                ld = 0
                            }
                            q.pv = ld;
                            {
                                var Fb = q;
                                const A = a.pubWin.document
                                  , E = a.B
                                  , x = yv(uc, A) || "";
                                var le = A.domain
                                  , qa = a.pubWin.screen
                                  , Za = A.referrer
                                  , jb = Kh();
                                if (ih())
                                    var Wb = N().gaGlobal || {};
                                else {
                                    var Xb = Math.round((new Date).getTime() / 1E3), R = E.google_analytics_domain_name, ea = "undefined" == typeof R ? Bx("auto", le) : Bx(R, le), ub = -1 < x.indexOf("__utma=" + ea + "."), fd = -1 < x.indexOf("__utmb=" + ea), ha;
                                    if (!(ha = (lh() || N()).gaGlobal)) {
                                        var Ea = {};
                                        ha = (lh() || N()).gaGlobal = Ea
                                    }
                                    var O = ha
                                      , Eb = !1;
                                    if (ub) {
                                        var gd = x.split("__utma=" + ea + ".")[1].split(";")[0].split(".");
                                        fd ? O.sid = gd[3] : O.sid || (O.sid = Xb + "");
                                        O.vid = gd[0] + "." + gd[1];
                                        O.from_cookie = !0
                                    } else {
                                        O.sid || (O.sid = Xb + "");
                                        if (!O.vid) {
                                            Eb = !0;
                                            var cz = Math.round(2147483647 * Math.random());
                                            {
                                                var dz = x
                                                  , op = jb;
                                                let C, P, S = [yx.appName, yx.version, yx.language ? yx.language : yx.browserLanguage, yx.platform, yx.userAgent, zx() ? 1 : 0].join("");
                                                qa ? S += qa.width + "x" + qa.height + qa.colorDepth : p.java && p.java.awt && (P = p.java.awt.Toolkit.getDefaultToolkit().getScreenSize(),
                                                S += P.screen.width + "x" + P.screen.height);
                                                S = S + dz + (Za || "");
                                                for (C = S.length; 0 < op; )
                                                    S += op-- ^ C++;
                                                var ez = Ax(S)
                                            }
                                            O.vid = (cz ^ ez & 2147483647) + "." + Xb
                                        }
                                        O.from_cookie = !1
                                    }
                                    if (!O.cid) {
                                        b: {
                                            var od = R;
                                            let P = 999;
                                            od && (od = 0 == od.indexOf(".") ? od.substr(1) : od,
                                            P = od.split(".").length);
                                            let S, K = 999;
                                            const ia = x.split(";");
                                            for (let Q = 0; Q < ia.length; Q++) {
                                                const X = Cx.exec(ia[Q]) || Dx.exec(ia[Q]) || Ex.exec(ia[Q]);
                                                if (!X)
                                                    continue;
                                                const ma = X[1] || 0;
                                                if (ma == P) {
                                                    var pp = X[2];
                                                    break b
                                                }
                                                ma < K && (K = ma,
                                                S = X[2])
                                            }
                                            pp = S
                                        }
                                        const C = pp;
                                        Eb && C && -1 != C.search(/^\d+\.\d+$/) ? (O.vid = C,
                                        O.from_cookie = !0) : C != O.vid && (O.cid = C)
                                    }
                                    O.dh = ea;
                                    O.hid || (O.hid = Math.round(2147483647 * Math.random()));
                                    Wb = O
                                }
                                const G = Wb;
                                Fb.ga_vid = G.vid;
                                Fb.ga_sid = G.sid;
                                Fb.ga_hid = G.hid;
                                Fb.ga_fc = G.from_cookie;
                                Fb.ga_cid = G.cid;
                                Fb.ga_wpids = E.google_analytics_uacct
                            }
                            {
                                var se = a.pubWin
                                  , pd = q;
                                const A = new Ai(se);
                                if (se.location && se.location.ancestorOrigins) {
                                    {
                                        var te = A;
                                        const x = []
                                          , G = Math.min(te.l.length, 27);
                                        for (let C = 1; C < G; C++)
                                            te.l[C] && te.l[C].url && (x[C - 1] = te.l[C].url);
                                        var fz = zi(te, x.reverse())
                                    }
                                    pd.iag = fz
                                }
                                {
                                    var bg = A;
                                    const x = bg.j.document && bg.j.document.scripts ? bg.j.document.scripts : [];
                                    if (x) {
                                        for (var Ei = [], cg = x.length - 1; 0 <= cg && 26 > Ei.length; )
                                            x[cg].src && Ei.unshift(x[cg].src),
                                            cg--;
                                        var qp = zi(bg, Ei)
                                    } else
                                        qp = 0
                                }
                                pd.icsg = qp;
                                const E = A.l[0].depth;
                                E && 0 < E && (pd.nhd = E);
                                pd.dssz = se.document.scripts ? se.document.scripts.length : 0;
                                {
                                    const x = A.l
                                      , G = [];
                                    for (let C = x.length - 1; 0 < C; C--) {
                                        const P = x[C];
                                        P && null != P.url && G.push(Ef(P.url.match(Df)[3] || null))
                                    }
                                    var gz = ti(G)
                                }
                                pd.mdo = gz;
                                {
                                    const x = A.j.document && A.j.document.scripts ? A.j.document.scripts : [];
                                    if (x) {
                                        var rp = [];
                                        for (let G = x.length - 1; 0 <= G; G--) {
                                            const C = x[G];
                                            C && null != C.src && rp.push(Ef(C.src.match(Df)[3] || null))
                                        }
                                        var sp = ti(rp)
                                    } else
                                        sp = 0
                                }
                                pd.mso = sp
                            }
                            {
                                const A = w.google_ad_layout;
                                A && 0 <= Zu[A] && (q.rplot = Zu[A])
                            }
                        }
                        q.u_tz = -(new Date).getTimezoneOffset();
                        q.u_his = Kh();
                        var Fi;
                        if (Fi = !!M.navigator)
                            Fi = "unknown" !== typeof M.navigator.javaEnabled;
                        q.u_java = Fi && !!M.navigator.javaEnabled && M.navigator.javaEnabled();
                        M.screen && (q.u_h = M.screen.height,
                        q.u_w = M.screen.width,
                        q.u_ah = M.screen.availHeight,
                        q.u_aw = M.screen.availWidth,
                        q.u_cd = M.screen.colorDepth);
                        M.navigator && M.navigator.plugins && (q.u_nplug = M.navigator.plugins.length);
                        M.navigator && M.navigator.mimeTypes && (q.u_nmime = M.navigator.mimeTypes.length);
                        if (b)
                            try {
                                {
                                    const w = Dk(a, b);
                                    q.adx && -12245933 != q.adx && q.ady && -12245933 != q.ady || (q.adx = Math.round(w.x),
                                    q.ady = Math.round(w.y));
                                    Bk(b) || (q.adx = -12245933,
                                    q.ady = -12245933)
                                }
                            } catch (w) {}
                        {
                            const w = kh() || Ck(Sh(a.pubWin));
                            w && (q.biw = w.width,
                            q.bih = w.height);
                            var tp = a.pubWin;
                            if (Sh(tp) != tp) {
                                const F = Ck(a.pubWin);
                                F && (q.isw = F.width,
                                q.ish = F.height)
                            }
                        }
                        {
                            var Bc = a.pubWin;
                            if (null === Bc || Bc == Bc.top)
                                var up = 0;
                            else {
                                var dg = [Bc.document.URL];
                                Bc.name && dg.push(Bc.name);
                                var vp = Ck(Bc, !1);
                                dg.push(vp.width.toString());
                                dg.push(vp.height.toString());
                                up = Zf(dg.join(""))
                            }
                            const w = up;
                            0 !== w && (q.ifk = w)
                        }
                        {
                            let w;
                            const F = Wh(a.pubWin);
                            w = F && F.document ? Ak(F.document, F) : new jf(-12245933,-12245933);
                            q.scr_x = Math.round(w.x);
                            q.scr_y = Math.round(w.y)
                        }
                        {
                            q.eid = qk(a.pubWin);
                            const w = a.B.google_loeid;
                            "string" === typeof w && (a.l |= 4096,
                            q.loeid = w)
                        }
                        a.G && (q.oid = a.G);
                        {
                            const w = xx()[a.B.google_ad_client];
                            w && (q.psts = w.join())
                        }
                        q.pvsid = Hg(a.pubWin);
                        {
                            const w = xv(uc, a.pubWin);
                            a: {
                                let F = -1;
                                try {
                                    w && (F = parseInt(w.getItem("goog_pem_mod"), 10))
                                } catch (A) {
                                    var wp = null;
                                    break a
                                }
                                wp = 0 <= F && 1E3 > F ? F : null
                            }
                            q.pem = wp
                        }
                        if (Z.F().j(370, !1))
                            try {
                                const w = a.pubWin && a.pubWin.external && a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
                                if (w) {
                                    var xp = parseInt(JSON.parse(w("os-mode"))["os-mode"], 10);
                                    0 <= xp && (q.wsm = xp + 1)
                                }
                            } catch (w) {}
                        {
                            const w = a.B
                              , F = a.pubWin
                              , A = a.j
                              , E = bl();
                            q.ref = w.google_referrer_url;
                            q.loc = w.google_page_location;
                            {
                                const K = ih(F);
                                if (K && ua(K.data) && "string" === typeof K.data.type) {
                                    var Gi = K.data.type.toLowerCase();
                                    var yp = "doubleclick" == Gi || "adsense" == Gi ? null : Gi
                                } else
                                    yp = null
                            }
                            const x = yp;
                            x && (q.apn = x.substr(0, 10));
                            const G = el(E);
                            var Hi = G
                              , eg = q;
                            eg.url || eg.loc || !Hi.url || (eg.url = Hi.url,
                            Hi.qb || (eg.usrc = 1));
                            G.url != (q.loc || q.url) && (q.top = G.url);
                            w.google_async_rrc && (q.rr = w.google_async_rrc);
                            q.rx = 0;
                            {
                                if (wv && rv(wv))
                                    var zp = wv;
                                else {
                                    var Ii = bl()
                                      , Ap = Ii.google_jobrunner;
                                    zp = sv(Ap) ? wv = Ap : Ii.google_jobrunner = wv = new uv(Ii)
                                }
                                const K = zp;
                                var Bp = Hh(K.tc) ? K.tc() : null
                            }
                            Bp && (q.jtc = Bp);
                            0 <= a.v && (q.eae = a.v);
                            const C = A ? xv(uc, A) : null
                              , P = ys(w, A, C);
                            P && (q.fc = P);
                            if (!Vh(w)) {
                                var ue = (a.iframeWin || a.pubWin).document
                                  , Cp = "";
                                if (ue.documentMode) {
                                    var Cc = zf(new mf(ue), "IFRAME");
                                    Cc.frameBorder = "0";
                                    Cc.style.height = 0;
                                    Cc.style.width = 0;
                                    Cc.style.position = "absolute";
                                    if (ue.body) {
                                        ue.body.appendChild(Cc);
                                        try {
                                            var fg = Cc.contentWindow.document;
                                            fg.open();
                                            fg.write(Vc(dd));
                                            fg.close();
                                            Cp += fg.documentMode
                                        } catch (K) {}
                                        ue.body.removeChild(Cc)
                                    }
                                }
                                q.docm = Cp
                            }
                            {
                                let K, ia, Q, X, ma, Gb;
                                try {
                                    K = F.screenX,
                                    ia = F.screenY
                                } catch (bc) {}
                                try {
                                    Q = F.outerWidth,
                                    X = F.outerHeight
                                } catch (bc) {}
                                try {
                                    ma = F.innerWidth,
                                    Gb = F.innerHeight
                                } catch (bc) {}
                                var hz = [F.screenLeft, F.screenTop, K, ia, F.screen ? F.screen.availWidth : void 0, F.screen ? F.screen.availTop : void 0, Q, X, ma, Gb]
                            }
                            q.brdim = hz.join();
                            {
                                let K = 0;
                                void 0 === p.postMessage && (K |= 1);
                                var Dp = K
                            }
                            0 < Dp && (q.osd = Dp);
                            q.vis = Lk(F.document);
                            if (b) {
                                {
                                    var iz = F
                                      , Ji = w
                                      , Ep = q;
                                    const K = jl(Ji) ? jx : Yw(new hx(iz,b,null,{
                                        width: 0,
                                        height: 0
                                    },Ji.google_ad_width,Ji.google_ad_height,!1));
                                    Ep.rsz = K.toString();
                                    Ep.abl = Lw(K)
                                }
                            }
                            var Ki = w
                              , jz = q;
                            if (!jl(Ki)) {
                                var Li = Xh(Ki);
                                if (Li) {
                                    let K = 0;
                                    a: {
                                        try {
                                            {
                                                var Fp = Ki.google_async_iframe_id;
                                                const X = N().document;
                                                if (Fp)
                                                    var Gp = X.getElementById(Fp);
                                                else {
                                                    var Hp = X.getElementsByTagName("script")
                                                      , Ip = Hp[Hp.length - 1];
                                                    Gp = Ip && Ip.parentNode || null
                                                }
                                            }
                                            const Q = Gp;
                                            if (Q) {
                                                {
                                                    const X = [];
                                                    let ma = Q
                                                      , Gb = 0;
                                                    const bc = Date.now();
                                                    for (; 100 >= ++Gb && 50 > Date.now() - bc && (ma = Rx(ma)); )
                                                        1 === ma.nodeType && X.push(ma);
                                                    var gg = X
                                                }
                                                b: {
                                                    for (let X = 0; X < gg.length; X++) {
                                                        c: {
                                                            var Hb = gg[X];
                                                            try {
                                                                if (Hb.parentNode && 0 < Hb.offsetWidth && 0 < Hb.offsetHeight && Hb.style && "none" !== Hb.style.display && "hidden" !== Hb.style.visibility && (!Hb.style.opacity || 0 !== Number(Hb.style.opacity))) {
                                                                    const ma = Hb.getBoundingClientRect();
                                                                    var Jp = 0 < ma.right && 0 < ma.bottom;
                                                                    break c
                                                                }
                                                            } catch (ma) {}
                                                            Jp = !1
                                                        }
                                                        if (!Jp) {
                                                            var Kp = !1;
                                                            break b
                                                        }
                                                    }
                                                    Kp = !0
                                                }
                                                if (Kp) {
                                                    b: {
                                                        const X = Date.now()
                                                          , ma = /^html|body$/i
                                                          , Gb = /^fixed/i;
                                                        for (let bc = 0; bc < gg.length && 50 > Date.now() - X; bc++) {
                                                            const hg = gg[bc];
                                                            if (!ma.test(hg.tagName) && Gb.test(hg.style.position || zh(hg))) {
                                                                var Mi = hg;
                                                                break b
                                                            }
                                                        }
                                                        Mi = null
                                                    }
                                                    break a
                                                }
                                            }
                                        } catch (Q) {}
                                        Mi = null
                                    }
                                    const ia = Mi;
                                    ia && ia.offsetWidth * ia.offsetHeight <= 4 * Li.width * Li.height && (K = 1);
                                    jz.pfx = K
                                }
                            }
                            a: {
                                if (.05 > Math.random() && A)
                                    try {
                                        const K = A.document.getElementsByTagName("head")[0];
                                        var Lp = K ? Nx(K) : 0;
                                        break a
                                    } catch (K) {}
                                Lp = 0
                            }
                            const S = Lp;
                            0 !== S && (q.cms = S);
                            w.google_lrv !== Ug() && (q.alvm = w.google_lrv || "none")
                        }
                        q.fu = a.l;
                        {
                            const w = new Px;
                            p.SVGElement && p.document.createElementNS && w.set(0);
                            const F = vg();
                            F["allow-top-navigation-by-user-activation"] && w.set(1);
                            F["allow-popups-to-escape-sandbox"] && w.set(2);
                            p.crypto && p.crypto.subtle && w.set(3);
                            p.TextDecoder && p.TextEncoder && w.set(4);
                            var kz = Ox(w)
                        }
                        q.bc = kz;
                        Mv();
                        q.jar = Jv[4];
                        if (Xg) {
                            var lz = q;
                            if (Xg) {
                                const w = aj();
                                w && (lz.debug_experiment_id = w)
                            }
                            q.creatives = Sx(/\b(?:creatives)=([\d,]+)/);
                            q.adgroups = Sx(/\b(?:adgroups)=([\d,]+)/);
                            q.adgroups && (q.adtest = "on",
                            q.disable_budget_throttling = !0,
                            q.use_budget_filtering = !1,
                            q.retrieve_only = !0,
                            q.disable_fcap = !0)
                        }
                        hi() && (q.atl = !0);
                        var mz = q
                    }
                    {
                        const q = a.B
                          , w = q.google_ad_channel;
                        let F = "/pagead/ads?";
                        "ca-pub-6219811747049371" === q.google_ad_client && Wx.test(w) && (F = "/pagead/lopri?");
                        var nz = F
                    }
                    let ve = di(re, nz);
                    3 === Lk(a.pubWin.document) && (a.A = !0,
                    a.D = ve,
                    ve = di(re, "/pagead/blank.gif#?"));
                    const Ka = Jh(mz, ve + (Xg && fa.google_debug_params ? fa.google_debug_params : ""));
                    fa.google_ad_url = Ka;
                    {
                        var Mp = fa;
                        const q = Mp.google_trust_token_additional_signing_data || {};
                        q.url = Ka;
                        Mp.google_trust_token_additional_signing_data = q
                    }
                    h = Ka
                }
            }
        }
        ji(2, [e, h]);
        b && b.id == c && b && b.parentNode && b.parentNode.removeChild(b);
        if (!h)
            return Promise.resolve();
        if (!Nh(e)) {
            var we = f;
            we = lh(ih(we)) || we;
            we.google_unique_id = (we.google_unique_id || 0) + 1
        }
        const Ni = Lh(e)
          , Np = p.window === p.window.top ? "a!" + Ni.toString(36) : `${Ni.toString(36)}.${Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Ga()).toString(36)}`
          , oz = b ? 0 < Cy(a, b, !0) : !1;
        let Op = {
            ["ifi"]: Ni,
            ["uci"]: Np
        };
        if (oz) {
            const fa = qx();
            Op.btvi = vx(fa, 21, 1);
            wx(fa, 21)
        }
        h = Jh(Op, h);
        {
            const fa = a.B
              , re = Lh(fa)
              , ve = a.iframeWin ? "google_ads_frame" + re : fa.google_async_iframe_id;
            {
                var Fa = h
                  , Pp = re
                  , Oi = 0 === a.v;
                const Ka = a.B
                  , q = Ka.google_async_iframe_id
                  , w = a.iframeWin ? "google_ads_frame" + Pp : q
                  , F = Ka.google_ad_width
                  , A = Ka.google_ad_height
                  , E = {
                    id: w,
                    name: w
                };
                a.iframeWin || (E.style = "left:0;position:absolute;top:0;border:0;" + `width:${F}px;` + `height:${A}px;`);
                const x = Ru(Ka)
                  , G = !x && !Qu(Ka) && ts(Ka);
                {
                    const Q = vg();
                    var Qp = !(!Q["allow-top-navigation-by-user-activation"] || !Q["allow-popups-to-escape-sandbox"])
                }
                if (Qp) {
                    var Dc = Fa;
                    var ig = "fsb=" + encodeURIComponent("1");
                    if (ig) {
                        var qd = Dc.indexOf("#");
                        0 > qd && (qd = Dc.length);
                        var xe = Dc.indexOf("?");
                        if (0 > xe || xe > qd) {
                            xe = qd;
                            var Rp = ""
                        } else
                            Rp = Dc.substring(xe + 1, qd);
                        var rd = [Dc.substr(0, xe), Rp, Dc.substr(qd)];
                        var Pi = rd[1];
                        rd[1] = ig ? Pi ? Pi + "&" + ig : ig : Pi;
                        Fa = rd[0] + (rd[1] ? "?" + rd[1] : "") + rd[2]
                    } else
                        Fa = Dc;
                    $y(E)
                }
                let C = Fa;
                Fa = az(Fa);
                const P = Oi ? Fa.replace(/&ea=[^&]*/, "") + "&ea=0" : Fa;
                Uv(E, F, A, uk(P));
                const S = Tv(E);
                let K = "";
                if (Oi) {
                    for (var pz = 10, Sp = ""; 0 < pz--; )
                        Sp += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(62 * Math.random()));
                    K = Sp;
                    Fa = xk(Fa, K);
                    xk(C, K)
                } else
                    Fa = P;
                Ka.dash && (E.srcdoc = Ka.dash);
                if (Z.F().j(312, !1)) {
                    const Q = a.pubWin.google_trust_token_redemption_status
                      , X = Ka.google_trust_token_additional_signing_data;
                    Q && 5 === Q.state && Q.issuer && (E.trustToken = JSON.stringify(xy(Q.issuer, X)))
                }
                let ia = null;
                if (x) {
                    {
                        var qz = Fa
                          , rz = q;
                        const Q = a.B
                          , X = Q.google_ad_width
                          , ma = Q.google_ad_height
                          , Gb = Q.google_reactive_sra_index;
                        if (X && ma && null != Gb) {
                            var Tp = a.iframeWin ? "google_ads_frame_rsra_" + Gb : a.B.google_async_iframe_id
                              , Qi = {
                                id: Tp,
                                name: Tp
                            };
                            Qp && $y(Qi);
                            Uv(Qi, X, ma, qz);
                            var sz = Sv(Qi);
                            ia = Sy(a, sz, rz, d)
                        } else
                            ia = null
                    }
                } else if (G) {
                    {
                        var Up = E
                          , tz = q;
                        Up.src = uk(Fa);
                        const Q = Sv(Up);
                        ia = Sy(a, Q, tz, d)
                    }
                } else
                    Ry(Fa, w, E, a);
                if (Oi) {
                    {
                        const Q = di("pagead2.googlesyndication.com", "/pagead/js/r20200818/r20190131/creativetoolset/xpc_expansion_embed.js");
                        var cc = {
                            id: w,
                            url: Fa,
                            width: F,
                            height: A,
                            Jb: K,
                            qd: a.pubWin,
                            Ic: q || void 0,
                            Xg: "google_expandable_ad_slot" + Pp,
                            cd: Q,
                            mb: a.iframeWin || a.pubWin
                        };
                        var Vp = !cc.id || !cc.url || 0 >= cc.width || 0 >= cc.height || !cc.Jb || !cc.mb ? void 0 : Gj(cc.mb, Ca(yk, cc, Q));
                        Vp && a.m.push(Vp)
                    }
                }
                if (a.iframeWin && Nh(Ka)) {
                    {
                        var uz = q
                          , jg = ["<!DOCTYPE html><html><body>", S, "</body></html>"].join("");
                        jg = String(jg);
                        for (var Ri = ['"'], kg = 0; kg < jg.length; kg++) {
                            var lg = jg.charAt(kg), Wp = lg.charCodeAt(0), vz = kg + 1, Si;
                            if (!(Si = xd[lg])) {
                                if (31 < Wp && 127 > Wp)
                                    var mg = lg;
                                else {
                                    var dc = lg;
                                    if (dc in yd)
                                        mg = yd[dc];
                                    else if (dc in xd)
                                        mg = yd[dc] = xd[dc];
                                    else {
                                        var Ec = dc.charCodeAt(0);
                                        if (31 < Ec && 127 > Ec)
                                            var sd = dc;
                                        else {
                                            if (256 > Ec) {
                                                if (sd = "\\x",
                                                16 > Ec || 256 < Ec)
                                                    sd += "0"
                                            } else
                                                sd = "\\u",
                                                4096 > Ec && (sd += "0");
                                            sd += Ec.toString(16).toUpperCase()
                                        }
                                        mg = yd[dc] = sd
                                    }
                                }
                                Si = mg
                            }
                            Ri[vz] = Si
                        }
                        Ri.push('"');
                        const Q = "javascript:" + Ri.join("")
                          , X = N();
                        (new vk(X)).set(uz, Q)
                    }
                }
                var wz = ia
            }
            var xz = wz || ve
        }
        h = az(h);
        var Xp = Dy(a) || a.o;
        Xp && a.B.rpe && ix(a.pubWin, Xp, {
            height: a.B.google_ad_height,
            Eb: "force",
            Hb: !0,
            jc: !0,
            Ja: a.B.google_ad_client
        });
        let yz = await xz;
        try {
            Ty(a, yz, h, Np)
        } catch (fa) {
            sj.j(223, fa, void 0, void 0)
        }
    }
      , Az = a=>"aa" !== a.google_loader_used && "sa" !== a.google_loader_used || !(Pc() ? 0 <= Zb(Rc(), 11) : Oc() && 0 <= Zb(Rc(), 65)) ? (Z.F().j(345, !1) && Qv(null),
    Promise.resolve()) : new Promise(b=>{
        Qv(b.bind(null, !0))
    }
    )
      , Bz = a=>{
        const b = new ey(a);
        return new Promise(c=>{
            dy(b, d=>{
                d && "string" === typeof d.uspString ? c(d.uspString) : c()
            }
            )
        }
        )
    }
      , Cz = a=>{
        const b = a.google_ad_client;
        let c = void 0;
        Z.F().j(365, !1) && (c = !!a.google_pub_requests_npa,
        a = Mg(),
        !c && a && W("NpaFrameNoApiAdSense", {
            pubId: b
        }, 1));
        return new Promise(d=>{
            Qg(Zg, b, d, c)
        }
        )
    }
      , Dz = ()=>Kg() && Z.F().j(304, !1) && !wg(p.top, "googlefcLoaded") ? (new Promise(a=>setTimeout(a, 20))).then(Dz) : Promise.resolve()
      , Ez = a=>{
        const b = Kg();
        p.googlefc && !b && W("adsense_fc_has_namespace_but_no_iframes", {
            publisherId: a
        }, 1)
    }
    ;
    var Fz = (a,b,c)=>{
        Hv = N;
        Mv();
        Fv.test(".google.com.vn") && !Gv.test(".google.com.vn") && (Lv[1] = ".google.com.vn");
        Z.F().j(1007, !1) && Xx(a.pubWin);
        const d = h=>{
            const [k,l,m,r,t] = h;
            h = new Rg;
            if (k) {
                if (py(k))
                    if (!1 === k.gdprApplies || "tcunavailable" === k.tcString)
                        var u = !0;
                    else
                        k.purpose && k.vendor ? (u = k.vendor.consents,
                        (u = !(!u || !u["755"])) && k.purposeOneTreatment && "DE" === k.publisherCC ? u = !0 : u && (u = k.purpose.consents,
                        u = !(!u || !u["1"]))) : u = !1;
                else
                    u = !1;
                u = I(h, 5, u);
                u = I(u, 2, k.tcString);
                u = I(u, 4, k.addtlConsent || "");
                I(u, 7, k.internalErrorState);
                void 0 !== k.gdprApplies && I(h, 3, k.gdprApplies)
            } else
                I(h, 5, !0);
            if (de(h, 5) || !Z.F().j(383, !1)) {
                if (de(h, 5) && Z.F().j(371, !1)) {
                    u = a.pubWin;
                    var V = a.B.google_ad_client;
                    "_gfp_p_"in u || (u._gfp_p_ = !1,
                    "_gfp_a_"in u || (u._gfp_a_ = Vv));
                    Xv(u, u.google_ad_client || V)
                }
                l && I(h, 1, l);
                m && (a.J = m);
                null !== r && I(h, 6, r);
                t && (a.C = Qv);
                a.I = h;
                return zz(a, b, c, h)
            }
        }
        ;
        Ez(a.B.google_ad_client);
        let e = null
          , f = null
          , g = null;
        if (Z.F().j(350, !1)) {
            const h = new my(a.pubWin);
            e = h.j ? ly(h, "loaded") : Promise.resolve();
            g = e.then(k=>ny(h, k, a.B.google_ad_client))
        } else
            e = Dz(),
            f = e.then(()=>Cz(a.B));
        return e.then(()=>{
            var h = new vy(a.pubWin);
            h = !Z.F().j(279, !1) || "function" !== typeof h.m.__tcfapi && null == qy(h) ? Promise.resolve() : uy(h);
            h = [h, Bz(a.pubWin), f, g, Az(a.B)];
            return Promise.all(h).then(d)
        }
        )
    }
      , Oy = a=>{
        var b = a.B.google_ad_width;
        var c = a.B.google_ad_height
          , d = a.pubWin.document
          , e = a.B
          , f = 0;
        try {
            !1 === e.google_allow_expandable_ads && (f |= 1);
            if (!d.body || isNaN(e.google_ad_height) || isNaN(e.google_ad_width) || a.iframeWin && d.domain != a.iframeWin.location.hostname || !/^http/.test(d.location.protocol))
                f |= 2;
            a: {
                e = navigator;
                var g = e.userAgent;
                const k = e.platform
                  , l = /WebKit\/(\d+)/
                  , m = /rv:(\d+\.\d+)/
                  , r = /rv:1\.8([^.]|\.0)/;
                if (/Win|Mac|Linux|iPad|iPod|iPhone/.test(k) && !/^Opera/.test(g)) {
                    const t = (l.exec(g) || [0, 0])[1]
                      , u = (m.exec(g) || [0, 0])[1];
                    if (/Win/.test(k) && /Trident/.test(g) && 11 <= d.documentMode || !t && "Gecko" === e.product && 27 <= u && !r.test(g) || 536 <= t) {
                        var h = !0;
                        break a
                    }
                }
                h = !1
            }
            h || (f |= 4)
        } catch (k) {
            f |= 8
        }
        h = f;
        cl(a.pubWin, a.pubWin.document, b, c) && (h |= 2);
        b = h;
        a.v = b;
        0 === a.v || (a.B.google_allow_expandable_ads = !1);
        bl() != a.pubWin && (a.l |= 4);
        Yg && (a.l |= 8);
        3 === Lk(a.pubWin.document) && (a.l |= 32);
        if (b = a.j)
            b = a.j,
            b = !(Y(b).scrollWidth <= Y(b).clientWidth);
        b && (a.l |= 1024);
        null == a.iframeWin && (a.l |= 8192);
        a.B.google_loader_features_used && (a.l |= a.B.google_loader_features_used);
        Wk = Sk();
        Kk = $g;
        Jk = ah;
        b = !Nc() || 0 <= Zb(Rc(), 11) ? Tk() : Yk();
        c = qx();
        a.G = b.setupOse(vx(c, 7, px()));
        b = "";
        (c = a.B.google_async_iframe_id) && null == a.iframeWin ? c = a.o : c ? c = a.pubWin.document.getElementById(c) : (c = b = "google_temp_span",
        h = a.B.google_container_id,
        f = a.iframeWin.document,
        g = h && f.getElementById(h) || f.getElementById(c),
        g || h || !c || (f.write("<span id=" + c + "></span>"),
        g = f.getElementById(c)),
        c = g);
        return Fz(a, c, b)
    }
      , Qy = (a,b,c)=>{
        if (a = b.getElementById(a)) {
            for (a.style.visibility = "visible"; b = a.firstChild; )
                a.removeChild(b);
            a.appendChild(c)
        }
    }
      , Py = (a,b,c)=>{
        a && (a = b.getElementById(a)) && c && (a.style.visibility = "visible",
        Bf(),
        c = Xc(c, null),
        md(a, c))
    }
      , Zy = (a,b)=>{
        var c = b.src
          , d = c.indexOf("/pagead/blank.gif#?");
        a = -1 === d ? c : a + c.substr(d + 19);
        a !== c && (c = b.nextSibling,
        d = b.parentNode,
        d.removeChild(b),
        b.src = a,
        d.insertBefore(b, c))
    }
      , bz = a=>{
        const b = qx()
          , c = a.google_ad_section;
        jl(a) && wx(b, 15);
        if (Vh(a)) {
            if (100 < wx(b, 5))
                return !1
        } else if (100 < wx(b, 6) - vx(b, 15, 0) && "" == c)
            return !1;
        return !0
    }
      , Ky = a=>{
        const b = a.j;
        if (b && !Oe(b).ads_density_stats_processed && !ih(b) && (Oe(b).ads_density_stats_processed = !0,
        Z.F().j(290, !1) || .01 > Uf(b))) {
            const c = ()=>{
                if (b) {
                    var d = Dt(yt(b), a.B.google_ad_client, b.location.hostname, qk(a.B).split(","));
                    W("ama_stats", d, 1)
                }
            }
            ;
            "complete" === b.document.readyState ? p.setTimeout(c, 1E3) : Ce(b, "load", ()=>{
                p.setTimeout(c, 1E3)
            }
            )
        }
    }
      , Ny = a=>{
        a && !Oe(a).host_pinged_back && (Oe(a).host_pinged_back = !0,
        W("abg_host", {
            host: a.location.host
        }, .01))
    }
    ;
    {
        (()=>{
            var b = [pv, ov, rk, yj];
            sj.l = c=>{
                Oa(b, d=>{
                    d(c)
                }
                );
                vj(c);
                wj(c)
            }
        }
        )();
        const a = p.google_sl_win || p;
        a.google_sa_impl || (a.google_sa_impl = zy,
        pk(jk(a)),
        a.google_process_slots && a.google_process_slots())
    }
    ;
}
).call(this, window, document, location)
