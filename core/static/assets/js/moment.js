!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
}(this, function () {
    "use strict";
    var F;

    function f() {
        return F.apply(null, arguments)
    }

    function d(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
    }

    function L(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e)
    }

    function c(e) {
        return void 0 === e
    }

    function N(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
    }

    function G(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    }

    function V(e, t) {
        for (var n = [], s = 0; s < e.length; ++s) n.push(t(e[s], s));
        return n
    }

    function m(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }

    function _(e, t) {
        for (var n in t) m(t, n) && (e[n] = t[n]);
        return m(t, "toString") && (e.toString = t.toString), m(t, "valueOf") && (e.valueOf = t.valueOf), e
    }

    function l(e, t, n, s) {
        return Ht(e, t, n, s, !0).utc()
    }

    function y(e) {
        return null == e._pf && (e._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }), e._pf
    }

    function E(e) {
        if (null == e._isValid) {
            var t = y(e), n = A.call(t.parsedDateParts, function (e) {
                    return null != e
                }),
                n = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
            if (e._strict && (n = n && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return n;
            e._isValid = n
        }
        return e._isValid
    }

    function I(e) {
        var t = l(NaN);
        return null != e ? _(y(t), e) : y(t).userInvalidated = !0, t
    }

    var A = Array.prototype.some || function (e) {
        for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++) if (s in t && e.call(this, t[s], s, t)) return !0;
        return !1
    }, j = f.momentProperties = [];

    function Z(e, t) {
        var n, s, i;
        if (c(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), c(t._i) || (e._i = t._i), c(t._f) || (e._f = t._f), c(t._l) || (e._l = t._l), c(t._strict) || (e._strict = t._strict), c(t._tzm) || (e._tzm = t._tzm), c(t._isUTC) || (e._isUTC = t._isUTC), c(t._offset) || (e._offset = t._offset), c(t._pf) || (e._pf = y(t)), c(t._locale) || (e._locale = t._locale), 0 < j.length) for (n = 0; n < j.length; n++) c(i = t[s = j[n]]) || (e[s] = i);
        return e
    }

    var z = !1;

    function $(e) {
        Z(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === z && (z = !0, f.updateOffset(this), z = !1)
    }

    function g(e) {
        return e instanceof $ || null != e && null != e._isAMomentObject
    }

    function h(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
    }

    function p(e) {
        var e = +e, t = 0;
        return t = 0 != e && isFinite(e) ? h(e) : t
    }

    function q(e, t, n) {
        for (var s = Math.min(e.length, t.length), i = Math.abs(e.length - t.length), r = 0, a = 0; a < s; a++) (n && e[a] !== t[a] || !n && p(e[a]) !== p(t[a])) && r++;
        return r + i
    }

    function J(e) {
        !1 === f.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }

    function e(i, r) {
        var a = !0;
        return _(function () {
            if (null != f.deprecationHandler && f.deprecationHandler(null, i), a) {
                for (var e, t = [], n = 0; n < arguments.length; n++) {
                    if (e = "", "object" == typeof arguments[n]) {
                        for (var s in e += "\n[" + n + "] ", arguments[0]) e += s + ": " + arguments[0][s] + ", ";
                        e = e.slice(0, -2)
                    } else e = arguments[n];
                    t.push(e)
                }
                J(i + "\nArguments: " + Array.prototype.slice.call(t).join("") + "\n" + (new Error).stack), a = !1
            }
            return r.apply(this, arguments)
        }, r)
    }

    var B = {};

    function Q(e, t) {
        null != f.deprecationHandler && f.deprecationHandler(e, t), B[e] || (J(t), B[e] = !0)
    }

    function a(e) {
        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
    }

    function X(e, t) {
        var n, s = _({}, e);
        for (n in t) m(t, n) && (L(e[n]) && L(t[n]) ? (s[n] = {}, _(s[n], e[n]), _(s[n], t[n])) : null != t[n] ? s[n] = t[n] : delete s[n]);
        for (n in e) m(e, n) && !m(t, n) && L(e[n]) && (s[n] = _({}, s[n]));
        return s
    }

    function K(e) {
        null != e && this.set(e)
    }

    f.suppressDeprecationWarnings = !1, f.deprecationHandler = null;
    var ee = Object.keys || function (e) {
        var t, n = [];
        for (t in e) m(e, t) && n.push(t);
        return n
    };
    var te = {};

    function t(e, t) {
        var n = e.toLowerCase();
        te[n] = te[n + "s"] = te[t] = e
    }

    function o(e) {
        return "string" == typeof e ? te[e] || te[e.toLowerCase()] : void 0
    }

    function ne(e) {
        var t, n, s = {};
        for (n in e) m(e, n) && (t = o(n)) && (s[t] = e[n]);
        return s
    }

    var se = {};

    function n(e, t) {
        se[e] = t
    }

    function r(e, t, n) {
        var s = "" + Math.abs(e);
        return (0 <= e ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, t - s.length)).toString().substr(1) + s
    }

    var ie = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        re = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, ae = {}, oe = {};

    function s(e, t, n, s) {
        var i = "string" == typeof s ? function () {
            return this[s]()
        } : s;
        e && (oe[e] = i), t && (oe[t[0]] = function () {
            return r(i.apply(this, arguments), t[1], t[2])
        }), n && (oe[n] = function () {
            return this.localeData().ordinal(i.apply(this, arguments), e)
        })
    }

    function ue(e, t) {
        return e.isValid() ? (t = le(t, e.localeData()), ae[t] = ae[t] || function (s) {
            for (var e, i = s.match(ie), t = 0, r = i.length; t < r; t++) oe[i[t]] ? i[t] = oe[i[t]] : i[t] = (e = i[t]).match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
            return function (e) {
                for (var t = "", n = 0; n < r; n++) t += a(i[n]) ? i[n].call(e, s) : i[n];
                return t
            }
        }(t), ae[t](e)) : e.localeData().invalidDate()
    }

    function le(e, t) {
        var n = 5;

        function s(e) {
            return t.longDateFormat(e) || e
        }

        for (re.lastIndex = 0; 0 <= n && re.test(e);) e = e.replace(re, s), re.lastIndex = 0, --n;
        return e
    }

    var i = /\d/, u = /\d\d/, he = /\d{3}/, de = /\d{4}/, ce = /[+-]?\d{6}/, w = /\d\d?/, fe = /\d\d\d\d?/,
        me = /\d\d\d\d\d\d?/, _e = /\d{1,3}/, ye = /\d{1,4}/, ge = /[+-]?\d{1,6}/, pe = /\d+/, we = /[+-]?\d+/,
        Me = /Z|[+-]\d\d:?\d\d/gi, ve = /Z|[+-]\d\d(?::?\d\d)?/gi,
        ke = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        Se = {};

    function M(e, n, s) {
        Se[e] = a(n) ? n : function (e, t) {
            return e && s ? s : n
        }
    }

    function De(e, t) {
        return m(Se, e) ? Se[e](t._strict, t._locale) : new RegExp(Ye(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, s, i) {
            return t || n || s || i
        })))
    }

    function Ye(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    var Oe = {};

    function v(e, n) {
        var t, s = n;
        for ("string" == typeof e && (e = [e]), N(n) && (s = function (e, t) {
            t[n] = p(e)
        }), t = 0; t < e.length; t++) Oe[e[t]] = s
    }

    function Te(e, i) {
        v(e, function (e, t, n, s) {
            n._w = n._w || {}, i(e, n._w, n, s)
        })
    }

    var k = 0, S = 1, D = 2, Y = 3, O = 4, T = 5, be = 6, xe = 7, Pe = 8;

    function We(e) {
        return Ce(e) ? 366 : 365
    }

    function Ce(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }

    s("Y", 0, 0, function () {
        var e = this.year();
        return e <= 9999 ? "" + e : "+" + e
    }), s(0, ["YY", 2], 0, function () {
        return this.year() % 100
    }), s(0, ["YYYY", 4], 0, "year"), s(0, ["YYYYY", 5], 0, "year"), s(0, ["YYYYYY", 6, !0], 0, "year"), t("year", "y"), n("year", 1), M("Y", we), M("YY", w, u), M("YYYY", ye, de), M("YYYYY", ge, ce), M("YYYYYY", ge, ce), v(["YYYYY", "YYYYYY"], k), v("YYYY", function (e, t) {
        t[k] = 2 === e.length ? f.parseTwoDigitYear(e) : p(e)
    }), v("YY", function (e, t) {
        t[k] = f.parseTwoDigitYear(e)
    }), v("Y", function (e, t) {
        t[k] = parseInt(e, 10)
    }), f.parseTwoDigitYear = function (e) {
        return p(e) + (68 < p(e) ? 1900 : 2e3)
    };
    var b, He = Re("FullYear", !0);

    function Re(t, n) {
        return function (e) {
            return null != e ? (Fe(this, t, e), f.updateOffset(this, n), this) : Ue(this, t)
        }
    }

    function Ue(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
    }

    function Fe(e, t, n) {
        e.isValid() && !isNaN(n) && ("FullYear" === t && Ce(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Le(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
    }

    function Le(e, t) {
        var n;
        return isNaN(e) || isNaN(t) ? NaN : (n = (t % (n = 12) + n) % n, e += (t - n) / 12, 1 == n ? Ce(e) ? 29 : 28 : 31 - n % 7 % 2)
    }

    b = Array.prototype.indexOf || function (e) {
        for (var t = 0; t < this.length; ++t) if (this[t] === e) return t;
        return -1
    }, s("M", ["MM", 2], "Mo", function () {
        return this.month() + 1
    }), s("MMM", 0, 0, function (e) {
        return this.localeData().monthsShort(this, e)
    }), s("MMMM", 0, 0, function (e) {
        return this.localeData().months(this, e)
    }), t("month", "M"), n("month", 8), M("M", w), M("MM", w, u), M("MMM", function (e, t) {
        return t.monthsShortRegex(e)
    }), M("MMMM", function (e, t) {
        return t.monthsRegex(e)
    }), v(["M", "MM"], function (e, t) {
        t[S] = p(e) - 1
    }), v(["MMM", "MMMM"], function (e, t, n, s) {
        s = n._locale.monthsParse(e, s, n._strict);
        null != s ? t[S] = s : y(n).invalidMonth = e
    });
    var Ne = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        Ge = "فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند".split("_");
    var Ve = "فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند".split("_");

    function Ee(e, t) {
        var n;
        if (e.isValid()) {
            if ("string" == typeof t) if (/^\d+$/.test(t)) t = p(t); else if (!N(t = e.localeData().monthsParse(t))) return;
            n = Math.min(e.date(), Le(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n)
        }
    }

    function Ie(e) {
        return null != e ? (Ee(this, e), f.updateOffset(this, !0), this) : Ue(this, "Month")
    }

    var Ae = ke;
    var je = ke;

    function Ze() {
        function e(e, t) {
            return t.length - e.length
        }

        for (var t, n = [], s = [], i = [], r = 0; r < 12; r++) t = l([2e3, r]), n.push(this.monthsShort(t, "")), s.push(this.months(t, "")), i.push(this.months(t, "")), i.push(this.monthsShort(t, ""));
        for (n.sort(e), s.sort(e), i.sort(e), r = 0; r < 12; r++) n[r] = Ye(n[r]), s[r] = Ye(s[r]);
        for (r = 0; r < 24; r++) i[r] = Ye(i[r]);
        this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
    }

    function ze(e, t, n, s, i, r, a) {
        var o;
        return e < 100 && 0 <= e ? (o = new Date(e + 400, t, n, s, i, r, a), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, n, s, i, r, a), o
    }

    function $e(e) {
        var t;
        return e < 100 && 0 <= e ? ((t = Array.prototype.slice.call(arguments))[0] = e + 400, t = new Date(Date.UTC.apply(null, t)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t
    }

    function qe(e, t, n) {
        n = 7 + t - n;
        return n - (7 + $e(e, 0, n).getUTCDay() - t) % 7 - 1
    }

    function Je(e, t, n, s, i) {
        var r, t = 1 + 7 * (t - 1) + (7 + n - s) % 7 + qe(e, s, i),
            n = t <= 0 ? We(r = e - 1) + t : t > We(e) ? (r = e + 1, t - We(e)) : (r = e, t);
        return {year: r, dayOfYear: n}
    }

    function Be(e, t, n) {
        var s, i, r = qe(e.year(), t, n), r = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
        return r < 1 ? s = r + Qe(i = e.year() - 1, t, n) : r > Qe(e.year(), t, n) ? (s = r - Qe(e.year(), t, n), i = e.year() + 1) : (i = e.year(), s = r), {
            week: s,
            year: i
        }
    }

    function Qe(e, t, n) {
        var s = qe(e, t, n), t = qe(e + 1, t, n);
        return (We(e) - s + t) / 7
    }

    s("w", ["ww", 2], "wo", "week"), s("W", ["WW", 2], "Wo", "isoWeek"), t("week", "w"), t("isoWeek", "W"), n("week", 5), n("isoWeek", 5), M("w", w), M("ww", w, u), M("W", w), M("WW", w, u), Te(["w", "ww", "W", "WW"], function (e, t, n, s) {
        t[s.substr(0, 1)] = p(e)
    });

    function Xe(e, t) {
        return e.slice(t, 7).concat(e.slice(0, t))
    }

    s("d", 0, "do", "day"), s("dd", 0, 0, function (e) {
        return this.localeData().weekdaysMin(this, e)
    }), s("ddd", 0, 0, function (e) {
        return this.localeData().weekdaysShort(this, e)
    }), s("dddd", 0, 0, function (e) {
        return this.localeData().weekdays(this, e)
    }), s("e", 0, 0, "weekday"), s("E", 0, 0, "isoWeekday"), t("day", "d"), t("weekday", "e"), t("isoWeekday", "E"), n("day", 11), n("weekday", 11), n("isoWeekday", 11), M("d", w), M("e", w), M("E", w), M("dd", function (e, t) {
        return t.weekdaysMinRegex(e)
    }), M("ddd", function (e, t) {
        return t.weekdaysShortRegex(e)
    }), M("dddd", function (e, t) {
        return t.weekdaysRegex(e)
    }), Te(["dd", "ddd", "dddd"], function (e, t, n, s) {
        s = n._locale.weekdaysParse(e, s, n._strict);
        null != s ? t.d = s : y(n).invalidWeekday = e
    }), Te(["d", "e", "E"], function (e, t, n, s) {
        t[s] = p(e)
    });
    var Ke = "شنبه_یکشنبه_دوشنبه_سه شنبه_چهارشنبه_پنجشنبه_جمعه".split("_");
    var et = "شنبه_یکشنبه_دوشنبه_سه شنبه_چهارشنبه_پنجشنبه_جمعه".split("_");
    var tt = "ش_یک_دو_سه_چهار_پنج_جمعه".split("_");
    var nt = ke;
    var st = ke;
    var it = ke;

    function rt() {
        function e(e, t) {
            return t.length - e.length
        }

        for (var t, n, s, i = [], r = [], a = [], o = [], u = 0; u < 7; u++) s = l([2e3, 1]).day(u), t = this.weekdaysMin(s, ""), n = this.weekdaysShort(s, ""), s = this.weekdays(s, ""), i.push(t), r.push(n), a.push(s), o.push(t), o.push(n), o.push(s);
        for (i.sort(e), r.sort(e), a.sort(e), o.sort(e), u = 0; u < 7; u++) r[u] = Ye(r[u]), a[u] = Ye(a[u]), o[u] = Ye(o[u]);
        this._weekdaysRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
    }

    function at() {
        return this.hours() % 12 || 12
    }

    function ot(e, t) {
        s(e, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }

    function ut(e, t) {
        return t._meridiemParse
    }

    s("H", ["HH", 2], 0, "hour"), s("h", ["hh", 2], 0, at), s("k", ["kk", 2], 0, function () {
        return this.hours() || 24
    }), s("hmm", 0, 0, function () {
        return "" + at.apply(this) + r(this.minutes(), 2)
    }), s("hmmss", 0, 0, function () {
        return "" + at.apply(this) + r(this.minutes(), 2) + r(this.seconds(), 2)
    }), s("Hmm", 0, 0, function () {
        return "" + this.hours() + r(this.minutes(), 2)
    }), s("Hmmss", 0, 0, function () {
        return "" + this.hours() + r(this.minutes(), 2) + r(this.seconds(), 2)
    }), ot("a", !0), ot("A", !1), t("hour", "h"), n("hour", 13), M("a", ut), M("A", ut), M("H", w), M("h", w), M("k", w), M("HH", w, u), M("hh", w, u), M("kk", w, u), M("hmm", fe), M("hmmss", me), M("Hmm", fe), M("Hmmss", me), v(["H", "HH"], Y), v(["k", "kk"], function (e, t, n) {
        e = p(e);
        t[Y] = 24 === e ? 0 : e
    }), v(["a", "A"], function (e, t, n) {
        n._isPm = n._locale.isPM(e), n._meridiem = e
    }), v(["h", "hh"], function (e, t, n) {
        t[Y] = p(e), y(n).bigHour = !0
    }), v("hmm", function (e, t, n) {
        var s = e.length - 2;
        t[Y] = p(e.substr(0, s)), t[O] = p(e.substr(s)), y(n).bigHour = !0
    }), v("hmmss", function (e, t, n) {
        var s = e.length - 4, i = e.length - 2;
        t[Y] = p(e.substr(0, s)), t[O] = p(e.substr(s, 2)), t[T] = p(e.substr(i)), y(n).bigHour = !0
    }), v("Hmm", function (e, t, n) {
        var s = e.length - 2;
        t[Y] = p(e.substr(0, s)), t[O] = p(e.substr(s))
    }), v("Hmmss", function (e, t, n) {
        var s = e.length - 4, i = e.length - 2;
        t[Y] = p(e.substr(0, s)), t[O] = p(e.substr(s, 2)), t[T] = p(e.substr(i))
    });
    var lt, ke = Re("Hours", !0), ht = {
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        invalidDate: "Invalid date",
        ordinal: "%d",
        dayOfMonthOrdinalParse: /\d{1,2}/,
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        months: Ge,
        monthsShort: Ve,
        week: {dow: 0, doy: 6},
        weekdays: Ke,
        weekdaysMin: tt,
        weekdaysShort: et,
        meridiemParse: /[ap]\.?m?\.?/i
    }, x = {}, dt = {};

    function ct(e) {
        return e && e.toLowerCase().replace("_", "-")
    }

    function ft(e) {
        if (!x[e] && "undefined" != typeof module && module && module.exports) try {
            var t = lt._abbr;
            require("./locale/" + e), mt(t)
        } catch (e) {
        }
        return x[e]
    }

    function mt(e, t) {
        return e && ((t = c(t) ? yt(e) : _t(e, t)) ? lt = t : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), lt._abbr
    }

    function _t(e, t) {
        if (null === t) return delete x[e], null;
        var n, s = ht;
        if (t.abbr = e, null != x[e]) Q("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), s = x[e]._config; else if (null != t.parentLocale) if (null != x[t.parentLocale]) s = x[t.parentLocale]._config; else {
            if (null == (n = ft(t.parentLocale))) return dt[t.parentLocale] || (dt[t.parentLocale] = []), dt[t.parentLocale].push({
                name: e,
                config: t
            }), null;
            s = n._config
        }
        return x[e] = new K(X(s, t)), dt[e] && dt[e].forEach(function (e) {
            _t(e.name, e.config)
        }), mt(e), x[e]
    }

    function yt(e) {
        var t;
        if (e = e && e._locale && e._locale._abbr ? e._locale._abbr : e) {
            if (!d(e)) {
                if (t = ft(e)) return t;
                e = [e]
            }
            for (var n, s, i, r, a = e, o = 0; o < a.length;) {
                for (n = (r = ct(a[o]).split("-")).length, s = (s = ct(a[o + 1])) ? s.split("-") : null; 0 < n;) {
                    if (i = ft(r.slice(0, n).join("-"))) return i;
                    if (s && s.length >= n && q(r, s, !0) >= n - 1) break;
                    n--
                }
                o++
            }
        }
        return lt
    }

    function gt(e) {
        var t = e._a;
        return t && -2 === y(e).overflow && (t = t[S] < 0 || 11 < t[S] ? S : t[D] < 1 || t[D] > Le(t[k], t[S]) ? D : t[Y] < 0 || 24 < t[Y] || 24 === t[Y] && (0 !== t[O] || 0 !== t[T] || 0 !== t[be]) ? Y : t[O] < 0 || 59 < t[O] ? O : t[T] < 0 || 59 < t[T] ? T : t[be] < 0 || 999 < t[be] ? be : -1, y(e)._overflowDayOfYear && (t < k || D < t) && (t = D), y(e)._overflowWeeks && -1 === t && (t = xe), y(e)._overflowWeekday && -1 === t && (t = Pe), y(e).overflow = t), e
    }

    function pt(e, t, n) {
        return null != e ? e : null != t ? t : n
    }

    function wt(e) {
        var t, n, s, i, r, a, o, u, l, h, d, c = [];
        if (!e._d) {
            for (s = e, i = new Date(f.now()), n = s._useUTC ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()] : [i.getFullYear(), i.getMonth(), i.getDate()], e._w && null == e._a[D] && null == e._a[S] && (null != (i = (s = e)._w).GG || null != i.W || null != i.E ? (u = 1, l = 4, r = pt(i.GG, s._a[k], Be(P(), 1, 4).year), a = pt(i.W, 1), ((o = pt(i.E, 1)) < 1 || 7 < o) && (h = !0)) : (u = s._locale._week.dow, l = s._locale._week.doy, d = Be(P(), u, l), r = pt(i.gg, s._a[k], d.year), a = pt(i.w, d.week), null != i.d ? ((o = i.d) < 0 || 6 < o) && (h = !0) : null != i.e ? (o = i.e + u, (i.e < 0 || 6 < i.e) && (h = !0)) : o = u), a < 1 || a > Qe(r, u, l) ? y(s)._overflowWeeks = !0 : null != h ? y(s)._overflowWeekday = !0 : (d = Je(r, a, o, u, l), s._a[k] = d.year, s._dayOfYear = d.dayOfYear)), null != e._dayOfYear && (i = pt(e._a[k], n[k]), (e._dayOfYear > We(i) || 0 === e._dayOfYear) && (y(e)._overflowDayOfYear = !0), h = $e(i, 0, e._dayOfYear), e._a[S] = h.getUTCMonth(), e._a[D] = h.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = c[t] = n[t];
            for (; t < 7; t++) e._a[t] = c[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            24 === e._a[Y] && 0 === e._a[O] && 0 === e._a[T] && 0 === e._a[be] && (e._nextDay = !0, e._a[Y] = 0), e._d = (e._useUTC ? $e : ze).apply(null, c), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Y] = 24), e._w && void 0 !== e._w.d && e._w.d !== r && (y(e).weekdayMismatch = !0)
        }
    }

    var Mt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        vt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        kt = /Z|[+-]\d\d(?::?\d\d)?/,
        St = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
        Dt = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
        Yt = /^\/?Date\((\-?\d+)/i;

    function Ot(e) {
        var t, n, s, i, r, a, o = e._i, u = Mt.exec(o) || vt.exec(o);
        if (u) {
            for (y(e).iso = !0, t = 0, n = St.length; t < n; t++) if (St[t][1].exec(u[1])) {
                i = St[t][0], s = !1 !== St[t][2];
                break
            }
            if (null == i) e._isValid = !1; else {
                if (u[3]) {
                    for (t = 0, n = Dt.length; t < n; t++) if (Dt[t][1].exec(u[3])) {
                        r = (u[2] || " ") + Dt[t][0];
                        break
                    }
                    if (null == r) return void (e._isValid = !1)
                }
                if (s || null == r) {
                    if (u[4]) {
                        if (!kt.exec(u[4])) return void (e._isValid = !1);
                        a = "Z"
                    }
                    e._f = i + (r || "") + (a || ""), Wt(e)
                } else e._isValid = !1
            }
        } else e._isValid = !1
    }

    var Tt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(فروردین|اردیبهشت|خرداد|تیر|مرداد|شهریور|مهر|آبان|آذر|دی|بهمن|اسفند)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function bt(e, t, n, s, i, r) {
        e = [function (e) {
            e = parseInt(e, 10);
            {
                if (e <= 49) return 2e3 + e;
                if (e <= 999) return 1900 + e
            }
            return e
        }(e), Ve.indexOf(t), parseInt(n, 10), parseInt(s, 10), parseInt(i, 10)];
        return r && e.push(parseInt(r, 10)), e
    }

    var xt = {UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480};

    function Pt(e) {
        var t, n,
            s = Tt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
        s ? (t = bt(s[4], s[3], s[2], s[5], s[6], s[7]), function (e, t, n) {
            if (!e || et.indexOf(e) === new Date(t[0], t[1], t[2]).getDay()) return 1;
            y(n).weekdayMismatch = !0, n._isValid = !1
        }(s[1], t, e) && (e._a = t, e._tzm = (t = s[8], n = s[9], s = s[10], t ? xt[t] : n ? 0 : 60 * (((t = parseInt(s, 10)) - (n = t % 100)) / 100) + n), e._d = $e.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), y(e).rfc2822 = !0)) : e._isValid = !1
    }

    function Wt(e) {
        if (e._f === f.ISO_8601) Ot(e); else if (e._f === f.RFC_2822) Pt(e); else {
            e._a = [], y(e).empty = !0;
            for (var t, n, s, i, r, a = "" + e._i, o = a.length, u = 0, l = le(e._f, e._locale).match(ie) || [], h = 0; h < l.length; h++) n = l[h], (t = (a.match(De(n, e)) || [])[0]) && (0 < (s = a.substr(0, a.indexOf(t))).length && y(e).unusedInput.push(s), a = a.slice(a.indexOf(t) + t.length), u += t.length), oe[n] ? (t ? y(e).empty = !1 : y(e).unusedTokens.push(n), s = n, r = e, null != (i = t) && m(Oe, s) && Oe[s](i, r._a, r, s)) : e._strict && !t && y(e).unusedTokens.push(n);
            y(e).charsLeftOver = o - u, 0 < a.length && y(e).unusedInput.push(a), e._a[Y] <= 12 && !0 === y(e).bigHour && 0 < e._a[Y] && (y(e).bigHour = void 0), y(e).parsedDateParts = e._a.slice(0), y(e).meridiem = e._meridiem, e._a[Y] = function (e, t, n) {
                if (null == n) return t;
                return null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((e = e.isPM(n)) && t < 12 && (t += 12), t = e || 12 !== t ? t : 0) : t
            }(e._locale, e._a[Y], e._meridiem), wt(e), gt(e)
        }
    }

    function Ct(e) {
        var t, n, s = e._i, i = e._f;
        if (e._locale = e._locale || yt(e._l), null === s || void 0 === i && "" === s) return I({nullInput: !0});
        if ("string" == typeof s && (e._i = s = e._locale.preparse(s)), g(s)) return new $(gt(s));
        if (G(s)) e._d = s; else if (d(i)) {
            var r, a, o, u, l, h = e;
            if (0 === h._f.length) y(h).invalidFormat = !0, h._d = new Date(NaN); else {
                for (u = 0; u < h._f.length; u++) l = 0, r = Z({}, h), null != h._useUTC && (r._useUTC = h._useUTC), r._f = h._f[u], Wt(r), E(r) && (l = (l += y(r).charsLeftOver) + 10 * y(r).unusedTokens.length, y(r).score = l, null == o || l < o) && (o = l, a = r);
                _(h, a || r)
            }
        } else if (i) Wt(e); else if (c(i = (s = e)._i)) s._d = new Date(f.now()); else G(i) ? s._d = new Date(i.valueOf()) : "string" == typeof i ? (n = s, null !== (t = Yt.exec(n._i)) ? n._d = new Date(+t[1]) : (Ot(n), !1 === n._isValid && (delete n._isValid, Pt(n), !1 === n._isValid) && (delete n._isValid, f.createFromInputFallback(n)))) : d(i) ? (s._a = V(i.slice(0), function (e) {
            return parseInt(e, 10)
        }), wt(s)) : L(i) ? (t = s)._d || (n = ne(t._i), t._a = V([n.year, n.month, n.day || n.date, n.hour, n.minute, n.second, n.millisecond], function (e) {
            return e && parseInt(e, 10)
        }), wt(t)) : N(i) ? s._d = new Date(i) : f.createFromInputFallback(s);
        return E(e) || (e._d = null), e
    }

    function Ht(e, t, n, s, i) {
        var r = {};
        return !0 !== n && !1 !== n || (s = n, n = void 0), (L(e) && function (e) {
            if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
            for (var t in e) if (e.hasOwnProperty(t)) return;
            return 1
        }(e) || d(e) && 0 === e.length) && (e = void 0), r._isAMomentObject = !0, r._useUTC = r._isUTC = i, r._l = n, r._i = e, r._f = t, r._strict = s, (i = new $(gt(Ct(i = r))))._nextDay && (i.add(1, "d"), i._nextDay = void 0), i
    }

    function P(e, t, n, s) {
        return Ht(e, t, n, s, !1)
    }

    f.createFromInputFallback = e("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    }), f.ISO_8601 = function () {
    }, f.RFC_2822 = function () {
    };
    fe = e("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
        var e = P.apply(null, arguments);
        return this.isValid() && e.isValid() ? e < this ? this : e : I()
    }), me = e("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
        var e = P.apply(null, arguments);
        return this.isValid() && e.isValid() ? this < e ? this : e : I()
    });

    function Rt(e, t) {
        var n, s;
        if (!(t = 1 === t.length && d(t[0]) ? t[0] : t).length) return P();
        for (n = t[0], s = 1; s < t.length; ++s) t[s].isValid() && !t[s][e](n) || (n = t[s]);
        return n
    }

    var Ut = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

    function Ft(e) {
        var e = ne(e), t = e.year || 0, n = e.quarter || 0, s = e.month || 0, i = e.week || e.isoWeek || 0,
            r = e.day || 0, a = e.hour || 0, o = e.minute || 0, u = e.second || 0, l = e.millisecond || 0;
        this._isValid = function (e) {
            for (var t in e) if (-1 === b.call(Ut, t) || null != e[t] && isNaN(e[t])) return !1;
            for (var n = !1, s = 0; s < Ut.length; ++s) if (e[Ut[s]]) {
                if (n) return !1;
                parseFloat(e[Ut[s]]) !== p(e[Ut[s]]) && (n = !0)
            }
            return !0
        }(e), this._milliseconds = +l + 1e3 * u + 6e4 * o + 1e3 * a * 60 * 60, this._days = +r + 7 * i, this._months = +s + 3 * n + 12 * t, this._data = {}, this._locale = yt(), this._bubble()
    }

    function Lt(e) {
        return e instanceof Ft
    }

    function Nt(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
    }

    function Gt(e, n) {
        s(e, 0, 0, function () {
            var e = this.utcOffset(), t = "+";
            return e < 0 && (e = -e, t = "-"), t + r(~~(e / 60), 2) + n + r(~~e % 60, 2)
        })
    }

    Gt("Z", ":"), Gt("ZZ", ""), M("Z", ve), M("ZZ", ve), v(["Z", "ZZ"], function (e, t, n) {
        n._useUTC = !0, n._tzm = Et(ve, e)
    });
    var Vt = /([\+\-]|\d\d)/gi;

    function Et(e, t) {
        var t = (t || "").match(e);
        return null === t ? null : 0 === (t = 60 * (e = ((t[t.length - 1] || []) + "").match(Vt) || ["-", 0, 0])[1] + p(e[2])) ? 0 : "+" === e[0] ? t : -t
    }

    function It(e, t) {
        var n;
        return t._isUTC ? (t = t.clone(), n = (g(e) || G(e) ? e : P(e)).valueOf() - t.valueOf(), t._d.setTime(t._d.valueOf() + n), f.updateOffset(t, !1), t) : P(e).local()
    }

    function At(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
    }

    function jt() {
        return !!this.isValid() && this._isUTC && 0 === this._offset
    }

    f.updateOffset = function () {
    };
    var Zt = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        zt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function W(e, t) {
        var n, s = e;
        return Lt(e) ? s = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : N(e) ? (s = {}, t ? s[t] = e : s.milliseconds = e) : (t = Zt.exec(e)) ? (n = "-" === t[1] ? -1 : 1, s = {
            y: 0,
            d: p(t[D]) * n,
            h: p(t[Y]) * n,
            m: p(t[O]) * n,
            s: p(t[T]) * n,
            ms: p(Nt(1e3 * t[be])) * n
        }) : (t = zt.exec(e)) ? (n = "-" === t[1] ? -1 : 1, s = {
            y: $t(t[2], n),
            M: $t(t[3], n),
            w: $t(t[4], n),
            d: $t(t[5], n),
            h: $t(t[6], n),
            m: $t(t[7], n),
            s: $t(t[8], n)
        }) : null == s ? s = {} : "object" == typeof s && ("from" in s || "to" in s) && (t = function (e, t) {
            var n;
            if (!e.isValid() || !t.isValid()) return {milliseconds: 0, months: 0};
            t = It(t, e), e.isBefore(t) ? n = qt(e, t) : ((n = qt(t, e)).milliseconds = -n.milliseconds, n.months = -n.months);
            return n
        }(P(s.from), P(s.to)), (s = {}).ms = t.milliseconds, s.M = t.months), n = new Ft(s), Lt(e) && m(e, "_locale") && (n._locale = e._locale), n
    }

    function $t(e, t) {
        e = e && parseFloat(e.replace(",", "."));
        return (isNaN(e) ? 0 : e) * t
    }

    function qt(e, t) {
        var n = {};
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
    }

    function Jt(s, i) {
        return function (e, t) {
            var n;
            return null === t || isNaN(+t) || (Q(i, "moment()." + i + "(period, number) is deprecated. Please use moment()." + i + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), n = e, e = t, t = n), Bt(this, W(e = "string" == typeof e ? +e : e, t), s), this
        }
    }

    function Bt(e, t, n, s) {
        var i = t._milliseconds, r = Nt(t._days), t = Nt(t._months);
        e.isValid() && (s = null == s || s, t && Ee(e, Ue(e, "Month") + t * n), r && Fe(e, "Date", Ue(e, "Date") + r * n), i && e._d.setTime(e._d.valueOf() + i * n), s) && f.updateOffset(e, r || t)
    }

    W.fn = Ft.prototype, W.invalid = function () {
        return W(NaN)
    };
    Ge = Jt(1, "add"), Ke = Jt(-1, "subtract");

    function Qt(e, t) {
        var n = 12 * (t.year() - e.year()) + (t.month() - e.month()), s = e.clone().add(n, "months"),
            t = t - s < 0 ? (t - s) / (s - e.clone().add(n - 1, "months")) : (t - s) / (e.clone().add(1 + n, "months") - s);
        return -(n + t) || 0
    }

    function Xt(e) {
        return void 0 === e ? this._locale._abbr : (null != (e = yt(e)) && (this._locale = e), this)
    }

    f.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", f.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    tt = e("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
        return void 0 === e ? this.localeData() : this.locale(e)
    });

    function Kt() {
        return this._locale
    }

    var en = 126227808e5;

    function tn(e, t) {
        return (e % t + t) % t
    }

    function nn(e, t, n) {
        return e < 100 && 0 <= e ? new Date(e + 400, t, n) - en : new Date(e, t, n).valueOf()
    }

    function sn(e, t, n) {
        return e < 100 && 0 <= e ? Date.UTC(e + 400, t, n) - en : Date.UTC(e, t, n)
    }

    function rn(e, t) {
        s(0, [e, e.length], 0, t)
    }

    function an(e, t, n, s, i) {
        var r;
        return null == e ? Be(this, s, i).year : (r = Qe(e, s, i), function (e, t, n, s, i) {
            e = Je(e, t, n, s, i), t = $e(e.year, 0, e.dayOfYear);
            return this.year(t.getUTCFullYear()), this.month(t.getUTCMonth()), this.date(t.getUTCDate()), this
        }.call(this, e, t = r < t ? r : t, n, s, i))
    }

    s(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100
    }), s(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100
    }), rn("gggg", "weekYear"), rn("ggggg", "weekYear"), rn("GGGG", "isoWeekYear"), rn("GGGGG", "isoWeekYear"), t("weekYear", "gg"), t("isoWeekYear", "GG"), n("weekYear", 1), n("isoWeekYear", 1), M("G", we), M("g", we), M("GG", w, u), M("gg", w, u), M("GGGG", ye, de), M("gggg", ye, de), M("GGGGG", ge, ce), M("ggggg", ge, ce), Te(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, s) {
        t[s.substr(0, 2)] = p(e)
    }), Te(["gg", "GG"], function (e, t, n, s) {
        t[s] = f.parseTwoDigitYear(e)
    }), s("Q", 0, "Qo", "quarter"), t("quarter", "Q"), n("quarter", 7), M("Q", i), v("Q", function (e, t) {
        t[S] = 3 * (p(e) - 1)
    }), s("D", ["DD", 2], "Do", "date"), t("date", "D"), n("date", 9), M("D", w), M("DD", w, u), M("Do", function (e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
    }), v(["D", "DD"], D), v("Do", function (e, t) {
        t[D] = p(e.match(w)[0])
    });
    ye = Re("Date", !0);
    s("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), t("dayOfYear", "DDD"), n("dayOfYear", 4), M("DDD", _e), M("DDDD", he), v(["DDD", "DDDD"], function (e, t, n) {
        n._dayOfYear = p(e)
    }), s("m", ["mm", 2], 0, "minute"), t("minute", "m"), n("minute", 14), M("m", w), M("mm", w, u), v(["m", "mm"], O);
    var on, de = Re("Minutes", !1),
        ge = (s("s", ["ss", 2], 0, "second"), t("second", "s"), n("second", 15), M("s", w), M("ss", w, u), v(["s", "ss"], T), Re("Seconds", !1));
    for (s("S", 0, 0, function () {
        return ~~(this.millisecond() / 100)
    }), s(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10)
    }), s(0, ["SSS", 3], 0, "millisecond"), s(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond()
    }), s(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond()
    }), s(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond()
    }), s(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond()
    }), s(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond()
    }), s(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond()
    }), t("millisecond", "ms"), n("millisecond", 16), M("S", _e, i), M("SS", _e, u), M("SSS", _e, he), on = "SSSS"; on.length <= 9; on += "S") M(on, pe);

    function un(e, t) {
        t[be] = p(1e3 * ("0." + e))
    }

    for (on = "S"; on.length <= 9; on += "S") v(on, un);
    ce = Re("Milliseconds", !1);
    s("z", 0, 0, "zoneAbbr"), s("zz", 0, 0, "zoneName");
    i = $.prototype;

    function ln(e) {
        return e
    }

    i.add = Ge, i.calendar = function (e, t) {
        var n = It(e = e || P(), this).startOf("day"), n = f.calendarFormat(this, n) || "sameElse",
            t = t && (a(t[n]) ? t[n].call(this, e) : t[n]);
        return this.format(t || this.localeData().calendar(n, this, P(e)))
    }, i.clone = function () {
        return new $(this)
    }, i.diff = function (e, t, n) {
        var s, i, r;
        if (!this.isValid()) return NaN;
        if (!(s = It(e, this)).isValid()) return NaN;
        switch (i = 6e4 * (s.utcOffset() - this.utcOffset()), t = o(t)) {
            case"year":
                r = Qt(this, s) / 12;
                break;
            case"month":
                r = Qt(this, s);
                break;
            case"quarter":
                r = Qt(this, s) / 3;
                break;
            case"second":
                r = (this - s) / 1e3;
                break;
            case"minute":
                r = (this - s) / 6e4;
                break;
            case"hour":
                r = (this - s) / 36e5;
                break;
            case"day":
                r = (this - s - i) / 864e5;
                break;
            case"week":
                r = (this - s - i) / 6048e5;
                break;
            default:
                r = this - s
        }
        return n ? r : h(r)
    }, i.endOf = function (e) {
        var t;
        if (void 0 !== (e = o(e)) && "millisecond" !== e && this.isValid()) {
            var n = this._isUTC ? sn : nn;
            switch (e) {
                case"year":
                    t = n(this.year() + 1, 0, 1) - 1;
                    break;
                case"quarter":
                    t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                    break;
                case"month":
                    t = n(this.year(), this.month() + 1, 1) - 1;
                    break;
                case"week":
                    t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                    break;
                case"isoWeek":
                    t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                    break;
                case"day":
                case"date":
                    t = n(this.year(), this.month(), this.date() + 1) - 1;
                    break;
                case"hour":
                    t = this._d.valueOf(), t += 36e5 - tn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
                    break;
                case"minute":
                    t = this._d.valueOf(), t += 6e4 - tn(t, 6e4) - 1;
                    break;
                case"second":
                    t = this._d.valueOf(), t += 1e3 - tn(t, 1e3) - 1
            }
            this._d.setTime(t), f.updateOffset(this, !0)
        }
        return this
    }, i.format = function (e) {
        return e = e || (this.isUtc() ? f.defaultFormatUtc : f.defaultFormat), e = ue(this, e), this.localeData().postformat(e)
    }, i.from = function (e, t) {
        return this.isValid() && (g(e) && e.isValid() || P(e).isValid()) ? W({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }, i.fromNow = function (e) {
        return this.from(P(), e)
    }, i.to = function (e, t) {
        return this.isValid() && (g(e) && e.isValid() || P(e).isValid()) ? W({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }, i.toNow = function (e) {
        return this.to(P(), e)
    }, i.get = function (e) {
        return a(this[e = o(e)]) ? this[e]() : this
    }, i.invalidAt = function () {
        return y(this).overflow
    }, i.isAfter = function (e, t) {
        return e = g(e) ? e : P(e), !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = o(t) || "millisecond") ? this.valueOf() > e.valueOf() : e.valueOf() < this.clone().startOf(t).valueOf())
    }, i.isBefore = function (e, t) {
        return e = g(e) ? e : P(e), !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = o(t) || "millisecond") ? this.valueOf() < e.valueOf() : this.clone().endOf(t).valueOf() < e.valueOf())
    }, i.isBetween = function (e, t, n, s) {
        return e = g(e) ? e : P(e), t = g(t) ? t : P(t), !!(this.isValid() && e.isValid() && t.isValid()) && ("(" === (s = s || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === s[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
    }, i.isSame = function (e, t) {
        var e = g(e) ? e : P(e);
        return !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = o(t) || "millisecond") ? this.valueOf() === e.valueOf() : (e = e.valueOf(), this.clone().startOf(t).valueOf() <= e && e <= this.clone().endOf(t).valueOf()))
    }, i.isSameOrAfter = function (e, t) {
        return this.isSame(e, t) || this.isAfter(e, t)
    }, i.isSameOrBefore = function (e, t) {
        return this.isSame(e, t) || this.isBefore(e, t)
    }, i.isValid = function () {
        return E(this)
    }, i.lang = tt, i.locale = Xt, i.localeData = Kt, i.max = me, i.min = fe, i.parsingFlags = function () {
        return _({}, y(this))
    }, i.set = function (e, t) {
        if ("object" == typeof e) for (var n = function (e) {
            var t, n = [];
            for (t in e) n.push({unit: t, priority: se[t]});
            return n.sort(function (e, t) {
                return e.priority - t.priority
            }), n
        }(e = ne(e)), s = 0; s < n.length; s++) this[n[s].unit](e[n[s].unit]); else if (a(this[e = o(e)])) return this[e](t);
        return this
    }, i.startOf = function (e) {
        var t;
        if (void 0 !== (e = o(e)) && "millisecond" !== e && this.isValid()) {
            var n = this._isUTC ? sn : nn;
            switch (e) {
                case"year":
                    t = n(this.year(), 0, 1);
                    break;
                case"quarter":
                    t = n(this.year(), this.month() - this.month() % 3, 1);
                    break;
                case"month":
                    t = n(this.year(), this.month(), 1);
                    break;
                case"week":
                    t = n(this.year(), this.month(), this.date() - this.weekday());
                    break;
                case"isoWeek":
                    t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                    break;
                case"day":
                case"date":
                    t = n(this.year(), this.month(), this.date());
                    break;
                case"hour":
                    t = this._d.valueOf(), t -= tn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
                    break;
                case"minute":
                    t = this._d.valueOf(), t -= tn(t, 6e4);
                    break;
                case"second":
                    t = this._d.valueOf(), t -= tn(t, 1e3)
            }
            this._d.setTime(t), f.updateOffset(this, !0)
        }
        return this
    }, i.subtract = Ke, i.toArray = function () {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
    }, i.toObject = function () {
        var e = this;
        return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
        }
    }, i.toDate = function () {
        return new Date(this.valueOf())
    }, i.toISOString = function (e) {
        var t;
        return this.isValid() ? (t = (e = !0 !== e) ? this.clone().utc() : this).year() < 0 || 9999 < t.year() ? ue(t, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : a(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", ue(t, "Z")) : ue(t, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ") : null
    }, i.inspect = function () {
        var e, t, n;
        return this.isValid() ? (t = "moment", e = "", this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z"), t = "[" + t + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", this.format(t + n + "-MM-DD[T]HH:mm:ss.SSS" + (e + '[")]'))) : "moment.invalid(/* " + this._i + " */)"
    }, i.toJSON = function () {
        return this.isValid() ? this.toISOString() : null
    }, i.toString = function () {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }, i.unix = function () {
        return Math.floor(this.valueOf() / 1e3)
    }, i.valueOf = function () {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }, i.creationData = function () {
        return {input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict}
    }, i.year = He, i.isLeapYear = function () {
        return Ce(this.year())
    }, i.weekYear = function (e) {
        return an.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }, i.isoWeekYear = function (e) {
        return an.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
    }, i.quarter = i.quarters = function (e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
    }, i.month = Ie, i.daysInMonth = function () {
        return Le(this.year(), this.month())
    }, i.week = i.weeks = function (e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d")
    }, i.isoWeek = i.isoWeeks = function (e) {
        var t = Be(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d")
    }, i.weeksInYear = function () {
        var e = this.localeData()._week;
        return Qe(this.year(), e.dow, e.doy)
    }, i.isoWeeksInYear = function () {
        return Qe(this.year(), 1, 4)
    }, i.date = ye, i.day = i.days = function (e) {
        var t, n, s;
        return this.isValid() ? (t = this._isUTC ? this._d.getUTCDay() : this._d.getDay(), null != e ? (n = e, s = this.localeData(), e = "string" != typeof n ? n : isNaN(n) ? "number" == typeof (n = s.weekdaysParse(n)) ? n : null : parseInt(n, 10), this.add(e - t, "d")) : t) : null != e ? this : NaN
    }, i.weekday = function (e) {
        var t;
        return this.isValid() ? (t = (this.day() + 7 - this.localeData()._week.dow) % 7, null == e ? t : this.add(e - t, "d")) : null != e ? this : NaN
    }, i.isoWeekday = function (e) {
        var t, n;
        return this.isValid() ? null != e ? (t = e, n = this.localeData(), n = "string" == typeof t ? n.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t, this.day(this.day() % 7 ? n : n - 7)) : this.day() || 7 : null != e ? this : NaN
    }, i.dayOfYear = function (e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t : this.add(e - t, "d")
    }, i.hour = i.hours = ke, i.minute = i.minutes = de, i.second = i.seconds = ge, i.millisecond = i.milliseconds = ce, i.utcOffset = function (e, t, n) {
        var s, i = this._offset || 0;
        if (!this.isValid()) return null != e ? this : NaN;
        if (null == e) return this._isUTC ? i : At(this);
        if ("string" == typeof e) {
            if (null === (e = Et(ve, e))) return this
        } else Math.abs(e) < 16 && !n && (e *= 60);
        return !this._isUTC && t && (s = At(this)), this._offset = e, this._isUTC = !0, null != s && this.add(s, "m"), i !== e && (!t || this._changeInProgress ? Bt(this, W(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, f.updateOffset(this, !0), this._changeInProgress = null)), this
    }, i.utc = function (e) {
        return this.utcOffset(0, e)
    }, i.local = function (e) {
        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e) && this.subtract(At(this), "m"), this
    }, i.parseZone = function () {
        var e;
        return null != this._tzm ? this.utcOffset(this._tzm, !1, !0) : "string" == typeof this._i && (null != (e = Et(Me, this._i)) ? this.utcOffset(e) : this.utcOffset(0, !0)), this
    }, i.hasAlignedHourOffset = function (e) {
        return !!this.isValid() && (e = e ? P(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
    }, i.isDST = function () {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }, i.isLocal = function () {
        return !!this.isValid() && !this._isUTC
    }, i.isUtcOffset = function () {
        return !!this.isValid() && this._isUTC
    }, i.isUtc = jt, i.isUTC = jt, i.zoneAbbr = function () {
        return this._isUTC ? "UTC" : ""
    }, i.zoneName = function () {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }, i.dates = e("dates accessor is deprecated. Use date instead.", ye), i.months = e("months accessor is deprecated. Use month instead", Ie), i.years = e("years accessor is deprecated. Use year instead", He), i.zone = e("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (e, t) {
        return null != e ? (this.utcOffset(e = "string" != typeof e ? -e : e, t), this) : -this.utcOffset()
    }), i.isDSTShifted = e("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
        var e, t;
        return c(this._isDSTShifted) && (Z(e = {}, this), (e = Ct(e))._a ? (t = (e._isUTC ? l : P)(e._a), this._isDSTShifted = this.isValid() && 0 < q(e._a, t.toArray())) : this._isDSTShifted = !1), this._isDSTShifted
    });
    u = K.prototype;

    function hn(e, t, n, s) {
        var i = yt(), s = l().set(s, t);
        return i[n](s, e)
    }

    function dn(e, t, n) {
        if (N(e) && (t = e, e = void 0), e = e || "", null != t) return hn(e, t, n, "month");
        for (var s = [], i = 0; i < 12; i++) s[i] = hn(e, i, n, "month");
        return s
    }

    function cn(e, t, n, s) {
        t = ("boolean" == typeof e ? N(t) && (n = t, t = void 0) : (t = e, e = !1, N(n = t) && (n = t, t = void 0)), t || "");
        var i = yt(), r = e ? i._week.dow : 0;
        if (null != n) return hn(t, (n + r) % 7, s, "day");
        for (var a = [], o = 0; o < 7; o++) a[o] = hn(t, (o + r) % 7, s, "day");
        return a
    }

    u.calendar = function (e, t, n) {
        return a(e = this._calendar[e] || this._calendar.sameElse) ? e.call(t, n) : e
    }, u.longDateFormat = function (e) {
        var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
        return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) {
            return e.slice(1)
        }), this._longDateFormat[e])
    }, u.invalidDate = function () {
        return this._invalidDate
    }, u.ordinal = function (e) {
        return this._ordinal.replace("%d", e)
    }, u.preparse = ln, u.postformat = ln, u.relativeTime = function (e, t, n, s) {
        var i = this._relativeTime[n];
        return a(i) ? i(e, t, n, s) : i.replace(/%d/i, e)
    }, u.pastFuture = function (e, t) {
        return a(e = this._relativeTime[0 < e ? "future" : "past"]) ? e(t) : e.replace(/%s/i, t)
    }, u.set = function (e) {
        var t, n;
        for (n in e) a(t = e[n]) ? this[n] = t : this["_" + n] = t;
        this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }, u.months = function (e, t) {
        return e ? (d(this._months) ? this._months : this._months[(this._months.isFormat || Ne).test(t) ? "format" : "standalone"])[e.month()] : d(this._months) ? this._months : this._months.standalone
    }, u.monthsShort = function (e, t) {
        return e ? (d(this._monthsShort) ? this._monthsShort : this._monthsShort[Ne.test(t) ? "format" : "standalone"])[e.month()] : d(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }, u.monthsParse = function (e, t, n) {
        var s, i;
        if (this._monthsParseExact) return function (e, t, n) {
            var s, i, r, e = e.toLocaleLowerCase();
            if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s) r = l([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase();
            return n ? "MMM" === t ? -1 !== (i = b.call(this._shortMonthsParse, e)) ? i : null : -1 !== (i = b.call(this._longMonthsParse, e)) ? i : null : "MMM" === t ? -1 !== (i = b.call(this._shortMonthsParse, e)) || -1 !== (i = b.call(this._longMonthsParse, e)) ? i : null : -1 !== (i = b.call(this._longMonthsParse, e)) || -1 !== (i = b.call(this._shortMonthsParse, e)) ? i : null
        }.call(this, e, t, n);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) {
            if (i = l([2e3, s]), n && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[s] || (i = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[s] = new RegExp(i.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[s].test(e)) return s;
            if (n && "MMM" === t && this._shortMonthsParse[s].test(e)) return s;
            if (!n && this._monthsParse[s].test(e)) return s
        }
    }, u.monthsRegex = function (e) {
        return this._monthsParseExact ? (m(this, "_monthsRegex") || Ze.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (m(this, "_monthsRegex") || (this._monthsRegex = je), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
    }, u.monthsShortRegex = function (e) {
        return this._monthsParseExact ? (m(this, "_monthsRegex") || Ze.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (m(this, "_monthsShortRegex") || (this._monthsShortRegex = Ae), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }, u.week = function (e) {
        return Be(e, this._week.dow, this._week.doy).week
    }, u.firstDayOfYear = function () {
        return this._week.doy
    }, u.firstDayOfWeek = function () {
        return this._week.dow
    }, u.weekdays = function (e, t) {
        return t = d(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"], !0 === e ? Xe(t, this._week.dow) : e ? t[e.day()] : t
    }, u.weekdaysMin = function (e) {
        return !0 === e ? Xe(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
    }, u.weekdaysShort = function (e) {
        return !0 === e ? Xe(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
    }, u.weekdaysParse = function (e, t, n) {
        var s, i;
        if (this._weekdaysParseExact) return function (e, t, n) {
            var s, i, r, e = e.toLocaleLowerCase();
            if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s) r = l([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase();
            return n ? "dddd" === t ? -1 !== (i = b.call(this._weekdaysParse, e)) ? i : null : "ddd" === t ? -1 !== (i = b.call(this._shortWeekdaysParse, e)) ? i : null : -1 !== (i = b.call(this._minWeekdaysParse, e)) ? i : null : "dddd" === t ? -1 !== (i = b.call(this._weekdaysParse, e)) || -1 !== (i = b.call(this._shortWeekdaysParse, e)) || -1 !== (i = b.call(this._minWeekdaysParse, e)) ? i : null : "ddd" === t ? -1 !== (i = b.call(this._shortWeekdaysParse, e)) || -1 !== (i = b.call(this._weekdaysParse, e)) || -1 !== (i = b.call(this._minWeekdaysParse, e)) ? i : null : -1 !== (i = b.call(this._minWeekdaysParse, e)) || -1 !== (i = b.call(this._weekdaysParse, e)) || -1 !== (i = b.call(this._shortWeekdaysParse, e)) ? i : null
        }.call(this, e, t, n);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
            if (i = l([2e3, 1]).day(s), n && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[s] || (i = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[s] = new RegExp(i.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[s].test(e)) return s;
            if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e)) return s;
            if (n && "dd" === t && this._minWeekdaysParse[s].test(e)) return s;
            if (!n && this._weekdaysParse[s].test(e)) return s
        }
    }, u.weekdaysRegex = function (e) {
        return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || rt.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (m(this, "_weekdaysRegex") || (this._weekdaysRegex = nt), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }, u.weekdaysShortRegex = function (e) {
        return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || rt.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (m(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = st), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }, u.weekdaysMinRegex = function (e) {
        return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || rt.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (m(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = it), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }, u.isPM = function (e) {
        return "p" === (e + "").toLowerCase().charAt(0)
    }, u.meridiem = function (e, t, n) {
        return 11 < e ? n ? "pm" : "PM" : n ? "am" : "AM"
    }, mt("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function (e) {
            var t = e % 10;
            return e + (1 === p(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
        }
    }), f.lang = e("moment.lang is deprecated. Use moment.locale instead.", mt), f.langData = e("moment.langData is deprecated. Use moment.localeData instead.", yt);
    var C = Math.abs;

    function fn(e, t, n, s) {
        t = W(t, n);
        return e._milliseconds += s * t._milliseconds, e._days += s * t._days, e._months += s * t._months, e._bubble()
    }

    function mn(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e)
    }

    function _n(e) {
        return 4800 * e / 146097
    }

    function yn(e) {
        return 146097 * e / 4800
    }

    function H(e) {
        return function () {
            return this.as(e)
        }
    }

    _e = H("ms"), he = H("s"), Ge = H("m"), me = H("h"), fe = H("d"), Ke = H("w"), ke = H("M"), de = H("Q"), ge = H("y");

    function gn(e) {
        return function () {
            return this.isValid() ? this._data[e] : NaN
        }
    }

    var ce = gn("milliseconds"), ye = gn("seconds"), He = gn("minutes"), u = gn("hours"), pn = gn("days"),
        wn = gn("months"), Mn = gn("years");
    var vn = Math.round, R = {ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11};

    function kn(e, t, n) {
        var s = W(e).abs(), i = vn(s.as("s")), r = vn(s.as("m")), a = vn(s.as("h")), o = vn(s.as("d")),
            u = vn(s.as("M")), s = vn(s.as("y")),
            i = (i <= R.ss ? ["s", i] : i < R.s && ["ss", i]) || (r <= 1 ? ["m"] : r < R.m && ["mm", r]) || (a <= 1 ? ["h"] : a < R.h && ["hh", a]) || (o <= 1 ? ["d"] : o < R.d && ["dd", o]) || (u <= 1 ? ["M"] : u < R.M && ["MM", u]) || (s <= 1 ? ["y"] : ["yy", s]);
        return i[2] = t, i[3] = 0 < +e, i[4] = n, function (e, t, n, s, i) {
            return i.relativeTime(t || 1, !!n, e, s)
        }.apply(null, i)
    }

    var Sn = Math.abs;

    function Dn(e) {
        return (0 < e) - (e < 0) || +e
    }

    function Yn() {
        var e, t, n, s, i, r, a, o, u, l;
        return this.isValid() ? (r = Sn(this._milliseconds) / 1e3, n = Sn(this._days), t = Sn(this._months), i = h(r / 60), s = h(i / 60), r %= 60, i %= 60, e = h(t / 12), t = t %= 12, n = n, s = s, i = i, r = r ? r.toFixed(3).replace(/\.?0+$/, "") : "", (a = this.asSeconds()) ? (o = Dn(this._months) !== Dn(a) ? "-" : "", u = Dn(this._days) !== Dn(a) ? "-" : "", l = Dn(this._milliseconds) !== Dn(a) ? "-" : "", (a < 0 ? "-" : "") + "P" + (e ? o + e + "Y" : "") + (t ? o + t + "M" : "") + (n ? u + n + "D" : "") + (s || i || r ? "T" : "") + (s ? l + s + "H" : "") + (i ? l + i + "M" : "") + (r ? l + r + "S" : "")) : "P0D") : this.localeData().invalidDate()
    }

    var U = Ft.prototype;
    return U.isValid = function () {
        return this._isValid
    }, U.abs = function () {
        var e = this._data;
        return this._milliseconds = C(this._milliseconds), this._days = C(this._days), this._months = C(this._months), e.milliseconds = C(e.milliseconds), e.seconds = C(e.seconds), e.minutes = C(e.minutes), e.hours = C(e.hours), e.months = C(e.months), e.years = C(e.years), this
    }, U.add = function (e, t) {
        return fn(this, e, t, 1)
    }, U.subtract = function (e, t) {
        return fn(this, e, t, -1)
    }, U.as = function (e) {
        if (!this.isValid()) return NaN;
        var t, n, s = this._milliseconds;
        if ("month" === (e = o(e)) || "quarter" === e || "year" === e) switch (t = this._days + s / 864e5, n = this._months + _n(t), e) {
            case"month":
                return n;
            case"quarter":
                return n / 3;
            case"year":
                return n / 12
        } else switch (t = this._days + Math.round(yn(this._months)), e) {
            case"week":
                return t / 7 + s / 6048e5;
            case"day":
                return t + s / 864e5;
            case"hour":
                return 24 * t + s / 36e5;
            case"minute":
                return 1440 * t + s / 6e4;
            case"second":
                return 86400 * t + s / 1e3;
            case"millisecond":
                return Math.floor(864e5 * t) + s;
            default:
                throw new Error("Unknown unit " + e)
        }
    }, U.asMilliseconds = _e, U.asSeconds = he, U.asMinutes = Ge, U.asHours = me, U.asDays = fe, U.asWeeks = Ke, U.asMonths = ke, U.asQuarters = de, U.asYears = ge, U.valueOf = function () {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * p(this._months / 12) : NaN
    }, U._bubble = function () {
        var e = this._milliseconds, t = this._days, n = this._months, s = this._data;
        return 0 <= e && 0 <= t && 0 <= n || e <= 0 && t <= 0 && n <= 0 || (e += 864e5 * mn(yn(n) + t), n = t = 0), s.milliseconds = e % 1e3, e = h(e / 1e3), s.seconds = e % 60, e = h(e / 60), s.minutes = e % 60, e = h(e / 60), s.hours = e % 24, t += h(e / 24), n += e = h(_n(t)), t -= mn(yn(e)), e = h(n / 12), n %= 12, s.days = t, s.months = n, s.years = e, this
    }, U.clone = function () {
        return W(this)
    }, U.get = function (e) {
        return e = o(e), this.isValid() ? this[e + "s"]() : NaN
    }, U.milliseconds = ce, U.seconds = ye, U.minutes = He, U.hours = u, U.days = pn, U.weeks = function () {
        return h(this.days() / 7)
    }, U.months = wn, U.years = Mn, U.humanize = function (e) {
        var t, n;
        return this.isValid() ? (t = this.localeData(), n = kn(this, !e, t), e && (n = t.pastFuture(+this, n)), t.postformat(n)) : this.localeData().invalidDate()
    }, U.toISOString = Yn, U.toString = Yn, U.toJSON = Yn, U.locale = Xt, U.localeData = Kt, U.toIsoString = e("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Yn), U.lang = tt, s("X", 0, 0, "unix"), s("x", 0, 0, "valueOf"), M("x", we), M("X", /[+-]?\d+(\.\d{1,3})?/), v("X", function (e, t, n) {
        n._d = new Date(1e3 * parseFloat(e, 10))
    }), v("x", function (e, t, n) {
        n._d = new Date(p(e))
    }), f.version = "2.24.0", F = P, f.fn = i, f.min = function () {
        return Rt("isBefore", [].slice.call(arguments, 0))
    }, f.max = function () {
        return Rt("isAfter", [].slice.call(arguments, 0))
    }, f.now = function () {
        return Date.now ? Date.now() : +new Date
    }, f.utc = l, f.unix = function (e) {
        return P(1e3 * e)
    }, f.months = function (e, t) {
        return dn(e, t, "months")
    }, f.isDate = G, f.locale = mt, f.invalid = I, f.duration = W, f.isMoment = g, f.weekdays = function (e, t, n) {
        return cn(e, t, n, "weekdays")
    }, f.parseZone = function () {
        return P.apply(null, arguments).parseZone()
    }, f.localeData = yt, f.isDuration = Lt, f.monthsShort = function (e, t) {
        return dn(e, t, "monthsShort")
    }, f.weekdaysMin = function (e, t, n) {
        return cn(e, t, n, "weekdaysMin")
    }, f.defineLocale = _t, f.updateLocale = function (e, t) {
        var n, s;
        return null != t ? (n = ht, (s = new K(t = X(n = null != (s = ft(e)) ? s._config : n, t))).parentLocale = x[e], x[e] = s, mt(e)) : null != x[e] && (null != x[e].parentLocale ? x[e] = x[e].parentLocale : null != x[e] && delete x[e]), x[e]
    }, f.locales = function () {
        return ee(x)
    }, f.weekdaysShort = function (e, t, n) {
        return cn(e, t, n, "weekdaysShort")
    }, f.normalizeUnits = o, f.relativeTimeRounding = function (e) {
        return void 0 === e ? vn : "function" == typeof e && (vn = e, !0)
    }, f.relativeTimeThreshold = function (e, t) {
        return void 0 !== R[e] && (void 0 === t ? R[e] : (R[e] = t, "s" === e && (R.ss = t - 1), !0))
    }, f.calendarFormat = function (e, t) {
        return (e = e.diff(t, "days", !0)) < -6 ? "sameElse" : e < -1 ? "lastWeek" : e < 0 ? "lastDay" : e < 1 ? "sameDay" : e < 2 ? "nextDay" : e < 7 ? "nextWeek" : "sameElse"
    }, f.prototype = i, f.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
    }, f
});