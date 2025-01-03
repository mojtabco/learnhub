!function () {
    function O(t) {
        function n(e) {
            "readystatechange" == e.type && "complete" != c.readyState || (("load" == e.type ? i : c)[s](o + e.type, n, !1), r) || (r = !0, t.call(i, e.type || e))
        }

        var e = c.addEventListener, r = !1, a = !0, l = e ? "addEventListener" : "attachEvent",
            s = e ? "removeEventListener" : "detachEvent", o = e ? "" : "on";
        if ("complete" == c.readyState) t.call(i, "lazy"); else {
            if (c.createEventObject && u.doScroll) {
                try {
                    a = !i.frameElement
                } catch (e) {
                }
                a && function t() {
                    try {
                        u.doScroll("left")
                    } catch (e) {
                        return void i.setTimeout(t, 50)
                    }
                    n("poll")
                }()
            }
            c[l](o + "DOMContentLoaded", n, !1), c[l](o + "readystatechange", n, !1), i[l](o + "load", n, !1)
        }
    }

    function t() {
        s && O(function () {
            var t = p.length;
            D(t ? function () {
                for (var e = 0; e < t; ++e) !function (e) {
                    i.setTimeout(function () {
                        i.exports[p[e]].apply(i, arguments)
                    }, 0)
                }(e)
            } : void 0)
        })
    }

    for (var i = window, c = document, u = c.documentElement, r = c.head || c.getElementsByTagName("head")[0] || u, e = "", n = (m = c.getElementsByTagName("script")).length; 0 <= --n;) {
        var a = m[n], l = a.src.match(/^[^?#]*\/run_prettify\.js(\?[^#]*)?(?:#.*)?$/);
        if (l) {
            e = l[1] || "", a.parentNode.removeChild(a);
            break
        }
    }
    var s = !0, o = [], d = [], p = [];
    for (e.replace(/[?&]([^&=]+)=([^&]+)/g, function (e, t, n) {
        n = decodeURIComponent(n), "autorun" == (t = decodeURIComponent(t)) ? s = !/^[0fn]/i.test(n) : "lang" == t ? o.push(n) : "skin" == t ? d.push(n) : "callback" == t && p.push(n)
    }), n = 0, e = o.length; n < e; ++n) !function () {
        var e = c.createElement("script");
        e.onload = e.onerror = e.onreadystatechange = function () {
            !e || e.readyState && !/loaded|complete/.test(e.readyState) || (e.onerror = e.onload = e.onreadystatechange = null, --g || i.setTimeout(t, 0), e.parentNode && e.parentNode.removeChild(e), e = null)
        }, e.type = "text/javascript", e.src = "https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/lang-" + encodeURIComponent(o[n]) + ".js", r.insertBefore(e, r.firstChild)
    }();
    for (var f, h, g = o.length, m = [], n = 0, e = d.length; n < e; ++n) m.push("https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/skins/" + encodeURIComponent(d[n]) + ".css");
    m.push("https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/prettify.css"), h = (f = m).length, function e(t) {
        var n;
        t !== h && ((n = c.createElement("link")).rel = "stylesheet", n.type = "text/css", t + 1 < h && (n.error = n.onerror = function () {
            e(t + 1)
        }), n.href = f[t], r.appendChild(n))
    }(0), "undefined" != typeof window && (window.PR_SHOULD_USE_CONTINUATION = !0), E = "undefined" != typeof window ? window : {}, N = /^(DIR|FILE|array|vector|(de|priority_)?queue|(forward_)?list|stack|(const_)?(reverse_)?iterator|(unordered_)?(multi)?(set|map)|bitset|u?(int|float)\d*)\b/, _ = /\S/, T = A({
        keywords: [b = [v = [[y = ["break,continue,do,else,for,if,return,while"], "auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,restrict,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"], "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"], "alignas,alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,noexcept,noreturn,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"], w = [v, "abstract,add,alias,as,ascending,async,await,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,get,global,group,implicit,in,interface,internal,into,is,join,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,remove,sbyte,sealed,select,set,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,value,var,virtual,where,yield"], x = [v, "abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"], v = [v, "abstract,async,await,constructor,debugger,enum,eval,export,from,function,get,import,implements,instanceof,interface,let,null,of,set,undefined,var,with,yield,Infinity,NaN"], "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END", S = [y, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"], C = [y, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"], y = [y, "case,done,elif,esac,eval,fi,function,in,local,set,then,until"]],
        hashComments: !0,
        cStyleComments: !0,
        multiLineStrings: !0,
        regexLiterals: !0
    }), k = {}, P(T, ["default-code"]), P($([], [["pln", /^[^<?]+/], ["dec", /^<!\w[^>]*(?:>|$)/], ["com", /^<\!--[\s\S]*?(?:-\->|$)/], ["lang-", /^<\?([\s\S]+?)(?:\?>|$)/], ["lang-", /^<%([\s\S]+?)(?:%>|$)/], ["pun", /^(?:<[%?]|[%?]>)/], ["lang-", /^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i], ["lang-js", /^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i], ["lang-css", /^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i], ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]]), "default-markup htm html mxml xhtml xml xsl".split(" ")), P($([["pln", /^[\s]+/, null, " \t\r\n"], ["atv", /^(?:\"[^\"]*\"?|\'[^\']*\'?)/, null, "\"'"]], [["tag", /^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i], ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i], ["lang-uq.val", /^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/], ["pun", /^[=<>\/]+/], ["lang-js", /^on\w+\s*=\s*\"([^\"]+)\"/i], ["lang-js", /^on\w+\s*=\s*\'([^\']+)\'/i], ["lang-js", /^on\w+\s*=\s*([^\"\'>\s]+)/i], ["lang-css", /^style\s*=\s*\"([^\"]+)\"/i], ["lang-css", /^style\s*=\s*\'([^\']+)\'/i], ["lang-css", /^style\s*=\s*([^\"\'>\s]+)/i]]), ["in.tag"]), P($([], [["atv", /^[\s\S]+/]]), ["uq.val"]), P(A({
        keywords: b,
        hashComments: !0,
        cStyleComments: !0,
        types: N
    }), "c cc cpp cxx cyc m".split(" ")), P(A({keywords: "null,true,false"}), ["json"]), P(A({
        keywords: w,
        hashComments: !0,
        cStyleComments: !0,
        verbatimStrings: !0,
        types: N
    }), ["cs"]), P(A({keywords: x, cStyleComments: !0}), ["java"]), P(A({
        keywords: y,
        hashComments: !0,
        multiLineStrings: !0
    }), ["bash", "bsh", "csh", "sh"]), P(A({
        keywords: S,
        hashComments: !0,
        multiLineStrings: !0,
        tripleQuotedStrings: !0
    }), ["cv", "py", "python"]), P(A({
        keywords: "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",
        hashComments: !0,
        multiLineStrings: !0,
        regexLiterals: 2
    }), ["perl", "pl", "pm"]), P(A({
        keywords: C,
        hashComments: !0,
        multiLineStrings: !0,
        regexLiterals: !0
    }), ["rb", "ruby"]), P(A({
        keywords: v,
        cStyleComments: !0,
        regexLiterals: !0
    }), ["javascript", "js", "ts", "typescript"]), P(A({
        keywords: "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",
        hashComments: 3,
        cStyleComments: !0,
        multilineStrings: !0,
        tripleQuotedStrings: !0,
        regexLiterals: !0
    }), ["coffee"]), P($([], [["str", /^[\s\S]+/]]), ["regex"]), R = E.PR = {
        createSimpleLexer: $,
        registerLangHandler: P,
        sourceDecorator: A,
        PR_ATTRIB_NAME: "atn",
        PR_ATTRIB_VALUE: "atv",
        PR_COMMENT: "com",
        PR_DECLARATION: "dec",
        PR_KEYWORD: "kwd",
        PR_LITERAL: "lit",
        PR_NOCODE: "nocode",
        PR_PLAIN: "pln",
        PR_PUNCTUATION: "pun",
        PR_SOURCE: "src",
        PR_STRING: "str",
        PR_TAG: "tag",
        PR_TYPE: "typ",
        prettyPrintOne: function (e, t, n) {
            n = n || !1, t = t || null;
            var r = document.createElement("div");
            return r.innerHTML = "<pre>" + e + "</pre>", r = r.firstChild, n && j(r, n, !0), M({
                j: t,
                m: n,
                h: r,
                l: 1,
                a: null,
                i: null,
                c: null,
                g: null
            }), r.innerHTML
        },
        prettyPrint: T = function (c, e) {
            for (var u = (t = e || document.body).ownerDocument || document, t = [t.getElementsByTagName("pre"), t.getElementsByTagName("code"), t.getElementsByTagName("xmp")], d = [], n = 0; n < t.length; ++n) for (var r = 0, a = t[n].length; r < a; ++r) d.push(t[n][r]);
            var t = null, p = Date, f = (p.now || (p = {
                    now: function () {
                        return +new Date
                    }
                }), 0), h = /\blang(?:uage)?-([\w.]+)(?!\S)/, g = /\bprettyprint\b/, m = /\bprettyprinted\b/,
                y = /pre|xmp/i, v = /^code$/i, b = /^(?:pre|code|xmp)$/i, x = {};
            !function e() {
                for (var t = E.PR_SHOULD_USE_CONTINUATION ? p.now() + 250 : 1 / 0; f < d.length && p.now() < t; f++) {
                    for (var n, r, a, l, s = d[f], o = x, i = s; (i = i.previousSibling) && ((l = (7 === (n = i.nodeType) || 8 === n) && i.nodeValue) ? /^\??prettify\b/.test(l) : 3 === n && !/\S/.test(i.nodeValue));) if (l) {
                        o = {}, l.replace(/\b(\w+)=([\w:.%+-]+)/g, function (e, t, n) {
                            o[t] = n
                        });
                        break
                    }
                    if (i = s.className, (o !== x || g.test(i)) && !m.test(i)) {
                        for (n = !1, l = s.parentNode; l; l = l.parentNode) if (b.test(l.tagName) && l.className && g.test(l.className)) {
                            n = !0;
                            break
                        }
                        n || (s.className += " prettyprinted", n = (n = o.lang) || (n = !(n = i.match(h)) && (r = function (e) {
                            for (var t = void 0, n = e.firstChild; n; n = n.nextSibling) var r = n.nodeType, t = 1 === r ? t ? e : n : 3 === r && _.test(n.nodeValue) ? e : t;
                            return t === e ? void 0 : t
                        }(s)) && v.test(r.tagName) ? r.className.match(h) : n) && n[1], l = y.test(s.tagName) ? 1 : (l = s.currentStyle, a = u.defaultView, (l = l ? l.whiteSpace : a && a.getComputedStyle ? a.getComputedStyle(s, null).getPropertyValue("white-space") : 0) && "pre" === l.substring(0, 3)), (a = (a = "true" === (a = o.linenums) || +a) || !!(a = i.match(/\blinenums\b(?::(\d+))?/)) && (!a[1] || !a[1].length || +a[1])) && j(s, a, l), M({
                            j: n,
                            h: s,
                            m: a,
                            l: l,
                            a: null,
                            i: null,
                            c: null,
                            g: null
                        }))
                    }
                }
                f < d.length ? E.setTimeout(e, 250) : "function" == typeof c && c()
            }()
        }
    }, "function" == typeof (b = E.define) && b.amd && b("google-code-prettify", [], function () {
        return R
    });
    var E, y, v, b, x, w, S, C, N, _, T, k, R, D = T;

    function z(e) {
        function o(e) {
            var t = e.charCodeAt(0);
            return 92 !== t ? t : (t = e.charAt(1), s[t] || ("0" <= t && t <= "7" ? parseInt(e.substring(1), 8) : "u" === t || "x" === t ? parseInt(e.substring(2), 16) : e.charCodeAt(1)))
        }

        function i(e) {
            return e < 32 ? (e < 16 ? "\\x0" : "\\x") + e.toString(16) : "\\" === (e = String.fromCharCode(e)) || "-" === e || "]" === e || "^" === e ? "\\" + e : e
        }

        function t(e) {
            for (var t = e.source.match(RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)", "g")), n = t.length, r = [], a = 0, l = 0; a < n; ++a) {
                var s = t[a];
                "(" === s ? ++l : "\\" === s.charAt(0) && (s = +s.substring(1)) && (s <= l ? r[s] = -1 : t[a] = i(s))
            }
            for (a = 1; a < r.length; ++a) -1 === r[a] && (r[a] = ++c);
            for (l = a = 0; a < n; ++a) "(" === (s = t[a]) ? r[++l] || (t[a] = "(?:") : "\\" === s.charAt(0) && (s = +s.substring(1)) && s <= l && (t[a] = "\\" + r[s]);
            for (a = 0; a < n; ++a) "^" === t[a] && "^" !== t[a + 1] && (t[a] = "");
            if (e.ignoreCase && u) for (a = 0; a < n; ++a) e = (s = t[a]).charAt(0), 2 <= s.length && "[" === e ? t[a] = function (e) {
                var t = e.substring(1, e.length - 1).match(RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]", "g")),
                    n = (e = [], ["["]);
                (r = "^" === t[0]) && n.push("^");
                for (var r = r ? 1 : 0, a = t.length; r < a; ++r) {
                    var l, s = t[r];
                    /\\[bdsw]/i.test(s) ? n.push(s) : (s = o(s), r + 2 < a && "-" === t[r + 1] ? (l = o(t[r + 2]), r += 2) : l = s, e.push([s, l]), l < 65 || 122 < s || (l < 65 || 90 < s || e.push([32 | Math.max(65, s), 32 | Math.min(l, 90)]), l < 97) || 122 < s || e.push([-33 & Math.max(97, s), -33 & Math.min(l, 122)]))
                }
                for (e.sort(function (e, t) {
                    return e[0] - t[0] || t[1] - e[1]
                }), t = [], a = [], r = 0; r < e.length; ++r) (s = e[r])[0] <= a[1] + 1 ? a[1] = Math.max(a[1], s[1]) : t.push(a = s);
                for (r = 0; r < t.length; ++r) s = t[r], n.push(i(s[0])), s[1] > s[0] && (s[1] + 1 > s[0] && n.push("-"), n.push(i(s[1])));
                return n.push("]"), n.join("")
            }(s) : "\\" !== e && (t[a] = s.replace(/[a-zA-Z]/g, function (e) {
                return e = e.charCodeAt(0), "[" + String.fromCharCode(-33 & e, 32 | e) + "]"
            }));
            return t.join("")
        }

        for (var c = 0, u = !1, n = !1, r = 0, a = e.length; r < a; ++r) {
            var l = e[r];
            if (l.ignoreCase) n = !0; else if (/[a-z]/i.test(l.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi, ""))) {
                n = !(u = !0);
                break
            }
        }
        for (var s = {b: 8, t: 9, n: 10, v: 11, f: 12, r: 13}, d = [], r = 0, a = e.length; r < a; ++r) {
            if ((l = e[r]).global || l.multiline) throw Error("" + l);
            d.push("(?:" + t(l) + ")")
        }
        return new RegExp(d.join("|"), n ? "gi" : "g")
    }

    function B(e, r) {
        var a = /(?:^|\s)nocode(?:\s|$)/, l = [], s = 0, o = [], i = 0;
        return function e(t) {
            var n = t.nodeType;
            if (1 == n) {
                if (!a.test(t.className)) {
                    for (n = t.firstChild; n; n = n.nextSibling) e(n);
                    "br" !== (n = t.nodeName.toLowerCase()) && "li" !== n || (l[i] = "\n", o[i << 1] = s++, o[i++ << 1 | 1] = t)
                }
            } else 3 != n && 4 != n || (n = t.nodeValue).length && (n = r ? n.replace(/\r\n?/g, "\n") : n.replace(/[ \t\r\n]+/g, " "), l[i] = n, o[i << 1] = s, s += n.length, o[i++ << 1 | 1] = t)
        }(e), {a: l.join("").replace(/\n$/, ""), c: o}
    }

    function L(e, t, n, r, a) {
        n && (r(e = {h: e, l: 1, j: null, m: null, a: n, c: null, i: t, g: null}), a.push.apply(a, e.g))
    }

    function $(e, y) {
        for (var v, b = {}, t = e.concat(y), n = [], r = {}, a = 0, l = t.length; a < l; ++a) {
            var s = t[a], o = s[3];
            if (o) for (var i = o.length; 0 <= --i;) b[o.charAt(i)] = s;
            s = s[1], r.hasOwnProperty(o = "" + s) || (n.push(s), r[o] = null)
        }
        n.push(/[\0-\uffff]/), v = z(n);
        var x = y.length;
        return function e(t) {
            for (var n = t.i, r = t.h, a = [n, "pln"], l = 0, s = t.a.match(v) || [], o = {}, i = 0, c = s.length; i < c; ++i) {
                var u, d, p, f = s[i], h = o[f], g = void 0;
                if ("string" == typeof h) u = !1; else {
                    var m = b[f.charAt(0)];
                    if (m) g = f.match(m[1]), h = m[0]; else {
                        for (u = 0; u < x; ++u) if (m = y[u], g = f.match(m[1])) {
                            h = m[0];
                            break
                        }
                        g || (h = "pln")
                    }
                    !(u = 5 <= h.length && "lang-" === h.substring(0, 5)) || g && "string" == typeof g[1] || (u = !1, h = "src"), u || (o[f] = h)
                }
                m = l, l += f.length, u ? (u = g[1], p = (d = f.indexOf(u)) + u.length, g[2] && (d = (p = f.length - g[2].length) - u.length), h = h.substring(5), L(r, n + m, f.substring(0, d), e, a), L(r, n + m + d, u, I(h, u), a), L(r, n + m + p, f.substring(p), e, a)) : a.push(n + m, h)
            }
            t.g = a
        }
    }

    function A(e) {
        var t, n = [], r = [],
            a = (e.tripleQuotedStrings ? n.push(["str", /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/, null, "'\""]) : e.multiLineStrings ? n.push(["str", /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/, null, "'\"`"]) : n.push(["str", /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/, null, "\"'"]), e.verbatimStrings && r.push(["str", /^@\"(?:[^\"]|\"\")*(?:\"|$)/, null]), e.hashComments);
        return a && (e.cStyleComments ? (n.push(1 < a ? ["com", /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, null, "#"] : ["com", /^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/, null, "#"]), r.push(["str", /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/, null])) : n.push(["com", /^#[^\r\n]*/, null, "#"])), e.cStyleComments && (r.push(["com", /^\/\/[^\r\n]*/, null]), r.push(["com", /^\/\*[\s\S]*?(?:\*\/|$)/, null])), (a = e.regexLiterals) && (t = (a = 1 < a ? "" : "\n\r") ? "." : "[\\S\\s]", r.push(["lang-regex", RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(/(?=[^/*" + a + "])(?:[^/\\x5B\\x5C" + a + "]|\\x5C" + t + "|\\x5B(?:[^\\x5C\\x5D" + a + "]|\\x5C" + t + ")*(?:\\x5D|$))+/)")])), (a = e.types) && r.push(["typ", a]), (a = ("" + e.keywords).replace(/^ | $/g, "")).length && r.push(["kwd", new RegExp("^(?:" + a.replace(/[\s,]+/g, "|") + ")\\b"), null]), n.push(["pln", /^\s+/, null, " \r\n\t "]), a = "^.[^\\s\\w.$@'\"`/\\\\]*", e.regexLiterals && (a += "(?!s*/)"), r.push(["lit", /^@[a-z_$][a-z_$@0-9]*/i, null], ["typ", /^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/, null], ["pln", /^[a-z_$][a-z_$@0-9]*/i, null], ["lit", /^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i, null, "0123456789"], ["pln", /^\\[\s\S]?/, null], ["pun", new RegExp(a), null]), $(n, r)
    }

    function j(e, t, l) {
        function s(e) {
            for (; !e.nextSibling;) if (!(e = e.parentNode)) return;
            e = function e(t, n) {
                n = n ? t.cloneNode(!1) : t;
                if (r = t.parentNode) {
                    var r = e(r, 1), a = t.nextSibling;
                    r.appendChild(n);
                    for (var l = a; l; l = a) a = l.nextSibling, r.appendChild(l)
                }
                return n
            }(e.nextSibling, 0);
            for (var t; (t = e.parentNode) && 1 === t.nodeType;) e = t;
            r.push(e)
        }

        for (var o = /(?:^|\s)nocode(?:\s|$)/, i = /\r\n?|\n/, c = e.ownerDocument, n = c.createElement("li"); e.firstChild;) n.appendChild(e.firstChild);
        for (var r = [n], a = 0; a < r.length; ++a) !function e(t) {
            var n, r, a = t.nodeType;
            if (1 != a || o.test(t.className)) 3 != a && 4 != a || !l || (r = (n = t.nodeValue).match(i)) && (a = n.substring(0, r.index), t.nodeValue = a, (n = n.substring(r.index + r[0].length)) && t.parentNode.insertBefore(c.createTextNode(n), t.nextSibling), s(t), a || t.parentNode.removeChild(t)); else if ("br" === t.nodeName.toLowerCase()) s(t), t.parentNode && t.parentNode.removeChild(t); else for (t = t.firstChild; t; t = t.nextSibling) e(t)
        }(r[a]);
        t === (0 | t) && r[0].setAttribute("value", t);
        var u = c.createElement("ol");
        u.className = "linenums", t = Math.max(0, t - 1 | 0) || 0;
        for (var a = 0, d = r.length; a < d; ++a) (n = r[a]).className = "L" + (a + t) % 10, n.firstChild || n.appendChild(c.createTextNode(" ")), u.appendChild(n);
        e.appendChild(u)
    }

    function P(e, t) {
        for (var n = t.length; 0 <= --n;) {
            var r = t[n];
            k.hasOwnProperty(r) ? E.console && console.warn("cannot override language handler %s", r) : k[r] = e
        }
    }

    function I(e, t) {
        return e && k.hasOwnProperty(e) || (e = /^\s*</.test(t) ? "default-markup" : "default-code"), k[e]
    }

    function M(e) {
        var t = e.j;
        try {
            var n = (i = B(e.h, e.l)).a;
            e.a = n, e.c = i.c, e.i = 0, I(t, n)(e);
            var r, a, l = (l = /\bMSIE\s(\d+)/.exec(navigator.userAgent)) && +l[1] <= 8, t = /\n/g, s = e.a,
                o = s.length, i = 0, c = e.c, u = c.length, n = 0, d = e.g, p = d.length, f = 0;
            for (d[p] = o, a = r = 0; a < p;) d[a] !== d[a + 2] ? (d[r++] = d[a++], d[r++] = d[a++]) : a += 2;
            for (p = r, a = r = 0; a < p;) {
                for (var h = d[a], g = d[a + 1], m = a + 2; m + 2 <= p && d[m + 1] === g;) m += 2;
                d[r++] = h, d[r++] = g, a = m
            }
            d.length = r;
            var y = e.h;
            e = "", y && (e = y.style.display, y.style.display = "none");
            try {
                for (; n < u;) {
                    var v, b, x, w, S = c[n + 2] || o, C = d[f + 2] || o, m = Math.min(S, C), N = c[n + 1];
                    1 !== N.nodeType && (v = s.substring(i, m)) && (l && (v = v.replace(t, "\r")), N.nodeValue = v, (x = (b = N.ownerDocument).createElement("span")).className = d[f + 1], (w = N.parentNode).replaceChild(x, N), x.appendChild(N), i < S) && (c[n + 1] = N = b.createTextNode(s.substring(m, S)), w.insertBefore(N, x.nextSibling)), S <= (i = m) && (n += 2), C <= i && (f += 2)
                }
            } finally {
                y && (y.style.display = e)
            }
        } catch (e) {
            E.console && console.log(e && e.stack || e)
        }
    }

    g || i.setTimeout(t, 0)
}();