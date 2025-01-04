(function (f) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f()
    } else if (typeof define === "function" && define.amd) {
        define([], f)
    } else {
        var g;
        if (typeof window !== "undefined") {
            g = window
        } else if (typeof global !== "undefined") {
            g = global
        } else if (typeof self !== "undefined") {
            g = self
        } else {
            g = this
        }
        g.simpleDatatables = f()
    }
})(function () {
    var define, module, exports;
    return (function () {
        function r(e, n, t) {
            function o(i, f) {
                if (!n[i]) {
                    if (!e[i]) {
                        var c = "function" == typeof require && require;
                        if (!f && c) return c(i, !0);
                        if (u) return u(i, !0);
                        var a = new Error("Cannot find module '" + i + "'");
                        throw a.code = "MODULE_NOT_FOUND", a
                    }
                    var p = n[i] = {exports: {}};
                    e[i][0].call(p.exports, function (r) {
                        var n = e[i][1][r];
                        return o(n || r)
                    }, p, p.exports, r, e, n, t)
                }
                return n[i].exports
            }

            for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
            return o
        }

        return r
    })()({
        1: [function (require, module, exports) {
            (function (global) {
                (function () {
                    "use strict";
                    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
                    var t = {exports: {}}, e = t.exports = function () {
                        var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", a = "hour",
                            o = "day", u = "week", f = "month", h = "quarter", c = "year", d = "date",
                            l = "Invalid Date",
                            $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                            M = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                            m = {
                                name: "en",
                                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
                            }, D = function (t, e, n) {
                                var r = String(t);
                                return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t
                            }, v = {
                                s: D, z: function (t) {
                                    var e = -t.utcOffset(), n = Math.abs(e), r = Math.floor(n / 60), i = n % 60;
                                    return (e <= 0 ? "+" : "-") + D(r, 2, "0") + ":" + D(i, 2, "0")
                                }, m: function t(e, n) {
                                    if (e.date() < n.date()) return -t(n, e);
                                    var r = 12 * (n.year() - e.year()) + (n.month() - e.month()), i = e.clone().add(r, f),
                                        s = n - i < 0, a = e.clone().add(r + (s ? -1 : 1), f);
                                    return +(-(r + (n - i) / (s ? i - a : a - i)) || 0)
                                }, a: function (t) {
                                    return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
                                }, p: function (t) {
                                    return {
                                        M: f,
                                        y: c,
                                        w: u,
                                        d: o,
                                        D: d,
                                        h: a,
                                        m: s,
                                        s: i,
                                        ms: r,
                                        Q: h
                                    }[t] || String(t || "").toLowerCase().replace(/s$/, "")
                                }, u: function (t) {
                                    return void 0 === t
                                }
                            }, p = "en", g = {};
                        g[p] = m;
                        var y = function (t) {
                            return t instanceof L
                        }, Y = function t(e, n, r) {
                            var i;
                            if (!e) return p;
                            if ("string" == typeof e) {
                                var s = e.toLowerCase();
                                g[s] && (i = s), n && (g[s] = n, i = s);
                                var a = e.split("-");
                                if (!i && a.length > 1) return t(a[0])
                            } else {
                                var o = e.name;
                                g[o] = e, i = o
                            }
                            return !r && i && (p = i), i || !r && p
                        }, w = function (t, e) {
                            if (y(t)) return t.clone();
                            var n = "object" == typeof e ? e : {};
                            return n.date = t, n.args = arguments, new L(n)
                        }, S = v;
                        S.l = Y, S.i = y, S.w = function (t, e) {
                            return w(t, {locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset})
                        };
                        var L = function () {
                            function m(t) {
                                this.$L = Y(t.locale, null, !0), this.parse(t)
                            }

                            var D = m.prototype;
                            return D.parse = function (t) {
                                this.$d = function (t) {
                                    var e = t.date, n = t.utc;
                                    if (null === e) return new Date(NaN);
                                    if (S.u(e)) return new Date;
                                    if (e instanceof Date) return new Date(e);
                                    if ("string" == typeof e && !/Z$/i.test(e)) {
                                        var r = e.match($);
                                        if (r) {
                                            var i = r[2] - 1 || 0, s = (r[7] || "0").substring(0, 3);
                                            return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)
                                        }
                                    }
                                    return new Date(e)
                                }(t), this.$x = t.x || {}, this.init()
                            }, D.init = function () {
                                var t = this.$d;
                                this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds()
                            }, D.$utils = function () {
                                return S
                            }, D.isValid = function () {
                                return !(this.$d.toString() === l)
                            }, D.isSame = function (t, e) {
                                var n = w(t);
                                return this.startOf(e) <= n && n <= this.endOf(e)
                            }, D.isAfter = function (t, e) {
                                return w(t) < this.startOf(e)
                            }, D.isBefore = function (t, e) {
                                return this.endOf(e) < w(t)
                            }, D.$g = function (t, e, n) {
                                return S.u(t) ? this[e] : this.set(n, t)
                            }, D.unix = function () {
                                return Math.floor(this.valueOf() / 1e3)
                            }, D.valueOf = function () {
                                return this.$d.getTime()
                            }, D.startOf = function (t, e) {
                                var n = this, r = !!S.u(e) || e, h = S.p(t), l = function (t, e) {
                                    var i = S.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
                                    return r ? i : i.endOf(o)
                                }, $ = function (t, e) {
                                    return S.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n)
                                }, M = this.$W, m = this.$M, D = this.$D, v = "set" + (this.$u ? "UTC" : "");
                                switch (h) {
                                    case c:
                                        return r ? l(1, 0) : l(31, 11);
                                    case f:
                                        return r ? l(1, m) : l(0, m + 1);
                                    case u:
                                        var p = this.$locale().weekStart || 0, g = (M < p ? M + 7 : M) - p;
                                        return l(r ? D - g : D + (6 - g), m);
                                    case o:
                                    case d:
                                        return $(v + "Hours", 0);
                                    case a:
                                        return $(v + "Minutes", 1);
                                    case s:
                                        return $(v + "Seconds", 2);
                                    case i:
                                        return $(v + "Milliseconds", 3);
                                    default:
                                        return this.clone()
                                }
                            }, D.endOf = function (t) {
                                return this.startOf(t, !1)
                            }, D.$set = function (t, e) {
                                var n, u = S.p(t), h = "set" + (this.$u ? "UTC" : ""),
                                    l = (n = {}, n[o] = h + "Date", n[d] = h + "Date", n[f] = h + "Month", n[c] = h + "FullYear", n[a] = h + "Hours", n[s] = h + "Minutes", n[i] = h + "Seconds", n[r] = h + "Milliseconds", n)[u],
                                    $ = u === o ? this.$D + (e - this.$W) : e;
                                if (u === f || u === c) {
                                    var M = this.clone().set(d, 1);
                                    M.$d[l]($), M.init(), this.$d = M.set(d, Math.min(this.$D, M.daysInMonth())).$d
                                } else l && this.$d[l]($);
                                return this.init(), this
                            }, D.set = function (t, e) {
                                return this.clone().$set(t, e)
                            }, D.get = function (t) {
                                return this[S.p(t)]()
                            }, D.add = function (r, h) {
                                var d, l = this;
                                r = Number(r);
                                var $ = S.p(h), M = function (t) {
                                    var e = w(l);
                                    return S.w(e.date(e.date() + Math.round(t * r)), l)
                                };
                                if ($ === f) return this.set(f, this.$M + r);
                                if ($ === c) return this.set(c, this.$y + r);
                                if ($ === o) return M(1);
                                if ($ === u) return M(7);
                                var m = (d = {}, d[s] = e, d[a] = n, d[i] = t, d)[$] || 1,
                                    D = this.$d.getTime() + r * m;
                                return S.w(D, this)
                            }, D.subtract = function (t, e) {
                                return this.add(-1 * t, e)
                            }, D.format = function (t) {
                                var e = this, n = this.$locale();
                                if (!this.isValid()) return n.invalidDate || l;
                                var r = t || "YYYY-MM-DDTHH:mm:ssZ", i = S.z(this), s = this.$H, a = this.$m,
                                    o = this.$M, u = n.weekdays, f = n.months, h = function (t, n, i, s) {
                                        return t && (t[n] || t(e, r)) || i[n].slice(0, s)
                                    }, c = function (t) {
                                        return S.s(s % 12 || 12, t, "0")
                                    }, d = n.meridiem || function (t, e, n) {
                                        var r = t < 12 ? "AM" : "PM";
                                        return n ? r.toLowerCase() : r
                                    }, $ = {
                                        YY: String(this.$y).slice(-2),
                                        YYYY: this.$y,
                                        M: o + 1,
                                        MM: S.s(o + 1, 2, "0"),
                                        MMM: h(n.monthsShort, o, f, 3),
                                        MMMM: h(f, o),
                                        D: this.$D,
                                        DD: S.s(this.$D, 2, "0"),
                                        d: String(this.$W),
                                        dd: h(n.weekdaysMin, this.$W, u, 2),
                                        ddd: h(n.weekdaysShort, this.$W, u, 3),
                                        dddd: u[this.$W],
                                        H: String(s),
                                        HH: S.s(s, 2, "0"),
                                        h: c(1),
                                        hh: c(2),
                                        a: d(s, a, !0),
                                        A: d(s, a, !1),
                                        m: String(a),
                                        mm: S.s(a, 2, "0"),
                                        s: String(this.$s),
                                        ss: S.s(this.$s, 2, "0"),
                                        SSS: S.s(this.$ms, 3, "0"),
                                        Z: i
                                    };
                                return r.replace(M, (function (t, e) {
                                    return e || $[t] || i.replace(":", "")
                                }))
                            }, D.utcOffset = function () {
                                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                            }, D.diff = function (r, d, l) {
                                var $, M = S.p(d), m = w(r), D = (m.utcOffset() - this.utcOffset()) * e, v = this - m,
                                    p = S.m(this, m);
                                return p = ($ = {}, $[c] = p / 12, $[f] = p, $[h] = p / 3, $[u] = (v - D) / 6048e5, $[o] = (v - D) / 864e5, $[a] = v / n, $[s] = v / e, $[i] = v / t, $)[M] || v, l ? p : S.a(p)
                            }, D.daysInMonth = function () {
                                return this.endOf(f).$D
                            }, D.$locale = function () {
                                return g[this.$L]
                            }, D.locale = function (t, e) {
                                if (!t) return this.$L;
                                var n = this.clone(), r = Y(t, e, !0);
                                return r && (n.$L = r), n
                            }, D.clone = function () {
                                return S.w(this.$d, this)
                            }, D.toDate = function () {
                                return new Date(this.valueOf())
                            }, D.toJSON = function () {
                                return this.isValid() ? this.toISOString() : null
                            }, D.toISOString = function () {
                                return this.$d.toISOString()
                            }, D.toString = function () {
                                return this.$d.toUTCString()
                            }, m
                        }(), O = L.prototype;
                        return w.prototype = O, [["$ms", r], ["$s", i], ["$m", s], ["$H", a], ["$W", o], ["$M", f], ["$y", c], ["$D", d]].forEach((function (t) {
                            O[t[1]] = function (e) {
                                return this.$g(e, t[0], t[1])
                            }
                        })), w.extend = function (t, e) {
                            return t.$i || (t(e, L, w), t.$i = !0), w
                        }, w.locale = Y, w.isDayjs = y, w.unix = function (t) {
                            return w(1e3 * t)
                        }, w.en = g[p], w.Ls = g, w.p = {}, w
                    }(), n = {exports: {}}, r = n.exports = function () {
                        var t = {
                                LTS: "h:mm:ss A",
                                LT: "h:mm A",
                                L: "MM/DD/YYYY",
                                LL: "MMMM D, YYYY",
                                LLL: "MMMM D, YYYY h:mm A",
                                LLLL: "dddd, MMMM D, YYYY h:mm A"
                            },
                            e = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
                            n = /\d\d/, r = /\d\d?/, i = /\d*[^-_:/,()\s\d]+/, s = {}, a = function (t) {
                                return (t = +t) + (t > 68 ? 1900 : 2e3)
                            }, o = function (t) {
                                return function (e) {
                                    this[t] = +e
                                }
                            }, u = [/[+-]\d\d:?(\d\d)?|Z/, function (t) {
                                (this.zone || (this.zone = {})).offset = function (t) {
                                    if (!t) return 0;
                                    if ("Z" === t) return 0;
                                    var e = t.match(/([+-]|\d\d)/g), n = 60 * e[1] + (+e[2] || 0);
                                    return 0 === n ? 0 : "+" === e[0] ? -n : n
                                }(t)
                            }], f = function (t) {
                                var e = s[t];
                                return e && (e.indexOf ? e : e.s.concat(e.f))
                            }, h = function (t, e) {
                                var n, r = s.meridiem;
                                if (r) {
                                    for (var i = 1; i <= 24; i += 1) if (t.indexOf(r(i, 0, e)) > -1) {
                                        n = i > 12;
                                        break
                                    }
                                } else n = t === (e ? "pm" : "PM");
                                return n
                            }, c = {
                                A: [i, function (t) {
                                    this.afternoon = h(t, !1)
                                }],
                                a: [i, function (t) {
                                    this.afternoon = h(t, !0)
                                }],
                                S: [/\d/, function (t) {
                                    this.milliseconds = 100 * +t
                                }],
                                SS: [n, function (t) {
                                    this.milliseconds = 10 * +t
                                }],
                                SSS: [/\d{3}/, function (t) {
                                    this.milliseconds = +t
                                }],
                                s: [r, o("seconds")],
                                ss: [r, o("seconds")],
                                m: [r, o("minutes")],
                                mm: [r, o("minutes")],
                                H: [r, o("hours")],
                                h: [r, o("hours")],
                                HH: [r, o("hours")],
                                hh: [r, o("hours")],
                                D: [r, o("day")],
                                DD: [n, o("day")],
                                Do: [i, function (t) {
                                    var e = s.ordinal, n = t.match(/\d+/);
                                    if (this.day = n[0], e) for (var r = 1; r <= 31; r += 1) e(r).replace(/\[|\]/g, "") === t && (this.day = r)
                                }],
                                M: [r, o("month")],
                                MM: [n, o("month")],
                                MMM: [i, function (t) {
                                    var e = f("months"), n = (f("monthsShort") || e.map((function (t) {
                                        return t.slice(0, 3)
                                    }))).indexOf(t) + 1;
                                    if (n < 1) throw new Error;
                                    this.month = n % 12 || n
                                }],
                                MMMM: [i, function (t) {
                                    var e = f("months").indexOf(t) + 1;
                                    if (e < 1) throw new Error;
                                    this.month = e % 12 || e
                                }],
                                Y: [/[+-]?\d+/, o("year")],
                                YY: [n, function (t) {
                                    this.year = a(t)
                                }],
                                YYYY: [/\d{4}/, o("year")],
                                Z: u,
                                ZZ: u
                            };

                        function d(n) {
                            var r, i;
                            r = n, i = s && s.formats;
                            for (var a = (n = r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function (e, n, r) {
                                var s = r && r.toUpperCase();
                                return n || i[r] || t[r] || i[s].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function (t, e, n) {
                                    return e || n.slice(1)
                                }))
                            }))).match(e), o = a.length, u = 0; u < o; u += 1) {
                                var f = a[u], h = c[f], d = h && h[0], l = h && h[1];
                                a[u] = l ? {regex: d, parser: l} : f.replace(/^\[|\]$/g, "")
                            }
                            return function (t) {
                                for (var e = {}, n = 0, r = 0; n < o; n += 1) {
                                    var i = a[n];
                                    if ("string" == typeof i) r += i.length; else {
                                        var s = i.regex, u = i.parser, f = t.slice(r), h = s.exec(f)[0];
                                        u.call(e, h), t = t.replace(h, "")
                                    }
                                }
                                return function (t) {
                                    var e = t.afternoon;
                                    if (void 0 !== e) {
                                        var n = t.hours;
                                        e ? n < 12 && (t.hours += 12) : 12 === n && (t.hours = 0), delete t.afternoon
                                    }
                                }(e), e
                            }
                        }

                        return function (t, e, n) {
                            n.p.customParseFormat = !0, t && t.parseTwoDigitYear && (a = t.parseTwoDigitYear);
                            var r = e.prototype, i = r.parse;
                            r.parse = function (t) {
                                var e = t.date, r = t.utc, a = t.args;
                                this.$u = r;
                                var o = a[1];
                                if ("string" == typeof o) {
                                    var u = !0 === a[2], f = !0 === a[3], h = u || f, c = a[2];
                                    f && (c = a[2]), s = this.$locale(), !u && c && (s = n.Ls[c]), this.$d = function (t, e, n) {
                                        try {
                                            if (["x", "X"].indexOf(e) > -1) return new Date(("X" === e ? 1e3 : 1) * t);
                                            var r = d(e)(t), i = r.year, s = r.month, a = r.day, o = r.hours,
                                                u = r.minutes, f = r.seconds, h = r.milliseconds, c = r.zone,
                                                l = new Date, $ = a || (i || s ? 1 : l.getDate()),
                                                M = i || l.getFullYear(), m = 0;
                                            i && !s || (m = s > 0 ? s - 1 : l.getMonth());
                                            var D = o || 0, v = u || 0, p = f || 0, g = h || 0;
                                            return c ? new Date(Date.UTC(M, m, $, D, v, p, g + 60 * c.offset * 1e3)) : n ? new Date(Date.UTC(M, m, $, D, v, p, g)) : new Date(M, m, $, D, v, p, g)
                                        } catch (t) {
                                            return new Date("")
                                        }
                                    }(e, o, r), this.init(), c && !0 !== c && (this.$L = this.locale(c).$L), h && e != this.format(o) && (this.$d = new Date("")), s = {}
                                } else if (o instanceof Array) for (var l = o.length, $ = 1; $ <= l; $ += 1) {
                                    a[1] = o[$ - 1];
                                    var M = n.apply(this, a);
                                    if (M.isValid()) {
                                        this.$d = M.$d, this.$L = M.$L, this.init();
                                        break
                                    }
                                    $ === l && (this.$d = new Date(""))
                                } else i.call(this, t)
                            }
                        }
                    }();
                    e.extend(r);
                    exports.parseDate = (t, n) => {
                        let r = !1;
                        if (n) switch (n) {
                            case"ISO_8601":
                                r = t;
                                break;
                            case"RFC_2822":
                                r = e(t.slice(5), "DD MMM YYYY HH:mm:ss ZZ").unix();
                                break;
                            case"MYSQL":
                                r = e(t, "YYYY-MM-DD hh:mm:ss").unix();
                                break;
                            case"UNIX":
                                r = e(t).unix();
                                break;
                            default:
                                r = e(t, n, !0).valueOf()
                        }
                        return r
                    };


                }).call(this)
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
        }, {}], 2: [function (require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {value: !0});
            const t = t => "[object Object]" === Object.prototype.toString.call(t), e = (t, e) => {
                const s = document.createElement(t);
                if (e && "object" == typeof e) for (const t in e) "html" === t ? s.innerHTML = e[t] : s.setAttribute(t, e[t]);
                return s
            }, s = t => {
                t instanceof NodeList ? t.forEach((t => s(t))) : t.innerHTML = ""
            }, i = (t, s, i) => e("li", {class: t, html: `<a href="#" data-page="${s}">${i}</a>`}), a = (t, e) => {
                let s, i;
                1 === e ? (s = 0, i = t.length) : -1 === e && (s = t.length - 1, i = -1);
                for (let a = !0; a;) {
                    a = !1;
                    for (let n = s; n != i; n += e) if (t[n + e] && t[n].value > t[n + e].value) {
                        const s = t[n], i = t[n + e], r = s;
                        t[n] = i, t[n + e] = r, a = !0
                    }
                }
                return t
            };

            class n {
                constructor(t, e) {
                    return this.dt = t, this.rows = e, this
                }

                build(t) {
                    const s = e("tr");
                    let i = this.dt.headings;
                    return i.length || (i = t.map((() => ""))), i.forEach(((i, a) => {
                        const n = e("td");
                        t[a] && t[a].length || (t[a] = ""), n.innerHTML = t[a], n.data = t[a], s.appendChild(n)
                    })), s
                }

                render(t) {
                    return t
                }

                add(t) {
                    if (Array.isArray(t)) {
                        const e = this.dt;
                        Array.isArray(t[0]) ? t.forEach((t => {
                            e.data.push(this.build(t))
                        })) : e.data.push(this.build(t)), e.data.length && (e.hasRows = !0), this.update(), e.columns().rebuild()
                    }
                }

                remove(t) {
                    const e = this.dt;
                    Array.isArray(t) ? (t.sort(((t, e) => e - t)), t.forEach((t => {
                        e.data.splice(t, 1)
                    }))) : "all" == t ? e.data = [] : e.data.splice(t, 1), e.data.length || (e.hasRows = !1), this.update(), e.columns().rebuild()
                }

                update() {
                    this.dt.data.forEach(((t, e) => {
                        t.dataIndex = e
                    }))
                }

                findRowIndex(t, e) {
                    return this.dt.data.findIndex((s => s.children[t].innerText.toLowerCase().includes(String(e).toLowerCase())))
                }

                findRow(t, e) {
                    const s = this.findRowIndex(t, e);
                    if (s < 0) return {index: -1, row: null, cols: []};
                    const i = this.dt.data[s];
                    return {index: s, row: i, cols: [...i.cells].map((t => t.innerHTML))}
                }

                updateRow(t, e) {
                    const s = this.build(e);
                    this.dt.data.splice(t, 1, s), this.update(), this.dt.columns().rebuild()
                }
            }

            class r {
                constructor(t) {
                    return this.dt = t, this
                }

                swap(t) {
                    if (t.length && 2 === t.length) {
                        const e = [];
                        this.dt.headings.forEach(((t, s) => {
                            e.push(s)
                        }));
                        const s = t[0], i = t[1], a = e[i];
                        e[i] = e[s], e[s] = a, this.order(e)
                    }
                }

                order(t) {
                    let e, s, i, a, n, r, h;
                    const l = [[], [], [], []], o = this.dt;
                    t.forEach(((t, i) => {
                        n = o.headings[t], r = "false" !== n.getAttribute("data-sortable"), e = n.cloneNode(!0), e.originalCellIndex = i, e.sortable = r, l[0].push(e), o.hiddenColumns.includes(t) || (s = n.cloneNode(!0), s.originalCellIndex = i, s.sortable = r, l[1].push(s))
                    })), o.data.forEach(((e, s) => {
                        i = e.cloneNode(!1), a = e.cloneNode(!1), i.dataIndex = a.dataIndex = s, null !== e.searchIndex && void 0 !== e.searchIndex && (i.searchIndex = a.searchIndex = e.searchIndex), t.forEach((t => {
                            h = e.cells[t].cloneNode(!0), h.data = e.cells[t].data, i.appendChild(h), o.hiddenColumns.includes(t) || (h = e.cells[t].cloneNode(!0), h.data = e.cells[t].data, a.appendChild(h))
                        })), l[2].push(i), l[3].push(a)
                    })), o.headings = l[0], o.activeHeadings = l[1], o.data = l[2], o.activeRows = l[3], o.update()
                }

                hide(t) {
                    if (t.length) {
                        const e = this.dt;
                        t.forEach((t => {
                            e.hiddenColumns.includes(t) || e.hiddenColumns.push(t)
                        })), this.rebuild()
                    }
                }

                show(t) {
                    if (t.length) {
                        let e;
                        const s = this.dt;
                        t.forEach((t => {
                            e = s.hiddenColumns.indexOf(t), e > -1 && s.hiddenColumns.splice(e, 1)
                        })), this.rebuild()
                    }
                }

                visible(t) {
                    let e;
                    const s = this.dt;
                    return t = t || s.headings.map((t => t.originalCellIndex)), isNaN(t) ? Array.isArray(t) && (e = [], t.forEach((t => {
                        e.push(!s.hiddenColumns.includes(t))
                    }))) : e = !s.hiddenColumns.includes(t), e
                }

                add(t) {
                    let e;
                    const s = document.createElement("th");
                    if (!this.dt.headings.length) return this.dt.insert({
                        headings: [t.heading],
                        data: t.data.map((t => [t]))
                    }), void this.rebuild();
                    this.dt.hiddenHeader ? s.innerHTML = "" : t.heading.nodeName ? s.appendChild(t.heading) : s.innerHTML = t.heading, this.dt.headings.push(s), this.dt.data.forEach(((s, i) => {
                        t.data[i] && (e = document.createElement("td"), t.data[i].nodeName ? e.appendChild(t.data[i]) : e.innerHTML = t.data[i], e.data = e.innerHTML, t.render && (e.innerHTML = t.render.call(this, e.data, e, s)), s.appendChild(e))
                    })), t.type && s.setAttribute("data-type", t.type), t.format && s.setAttribute("data-format", t.format), t.hasOwnProperty("sortable") && (s.sortable = t.sortable, s.setAttribute("data-sortable", !0 === t.sortable ? "true" : "false")), this.rebuild(), this.dt.renderHeader()
                }

                remove(t) {
                    Array.isArray(t) ? (t.sort(((t, e) => e - t)), t.forEach((t => this.remove(t)))) : (this.dt.headings.splice(t, 1), this.dt.data.forEach((e => {
                        e.removeChild(e.cells[t])
                    }))), this.rebuild()
                }

                filter(t, e, s, i) {
                    const a = this.dt;
                    if (a.filterState || (a.filterState = {originalData: a.data}), !a.filterState[t]) {
                        const e = [...i, () => !0];
                        a.filterState[t] = function () {
                            let t = 0;
                            return () => e[t++ % e.length]
                        }()
                    }
                    const n = a.filterState[t](), r = Array.from(a.filterState.originalData).filter((e => {
                        const s = e.cells[t],
                            i = s.hasAttribute("data-content") ? s.getAttribute("data-content") : s.innerText;
                        return "function" == typeof n ? n(i) : i === n
                    }));
                    a.data = r, a.data.length ? (this.rebuild(), a.update()) : (a.clear(), a.hasRows = !1, a.setMessage(a.options.labels.noRows)), s || a.emit("datatable.sort", t, e)
                }

                sort(t, e, s) {
                    const i = this.dt;
                    if (i.hasHeadings && (t < 0 || t > i.headings.length)) return !1;
                    const n = i.options.filters && i.options.filters[i.headings[t].textContent];
                    if (n && 0 !== n.length) return void this.filter(t, e, s, n);
                    i.sorting = !0, s || i.emit("datatable.sorting", t, e);
                    let r = i.data;
                    const h = [], l = [];
                    let o = 0, d = 0;
                    const c = i.headings[t], p = [];
                    if ("date" === c.getAttribute("data-type")) {
                        let t = !1;
                        c.hasAttribute("data-format") && (t = c.getAttribute("data-format")), p.push(Promise.resolve().then((function () {
                            return require("./date-7061ceee.js")
                        })).then((({parseDate: e}) => s => e(s, t))))
                    }
                    Promise.all(p).then((n => {
                        const p = n[0];
                        let u, g;
                        Array.from(r).forEach((e => {
                            const s = e.cells[t],
                                i = s.hasAttribute("data-content") ? s.getAttribute("data-content") : s.innerText;
                            let a;
                            a = p ? p(i) : "string" == typeof i ? i.replace(/(\$|,|\s|%)/g, "") : i, parseFloat(a) == a ? l[d++] = {
                                value: Number(a),
                                row: e
                            } : h[o++] = {value: "string" == typeof i ? i.toLowerCase() : i, row: e}
                        })), e || (e = c.classList.contains("asc") ? "desc" : "asc"), "desc" == e ? (u = a(h, -1), g = a(l, -1), c.classList.remove("asc"), c.classList.add("desc")) : (u = a(l, 1), g = a(h, 1), c.classList.remove("desc"), c.classList.add("asc")), i.lastTh && c != i.lastTh && (i.lastTh.classList.remove("desc"), i.lastTh.classList.remove("asc")), i.lastTh = c, r = u.concat(g), i.data = [];
                        const f = [];
                        r.forEach(((t, e) => {
                            i.data.push(t.row), null !== t.row.searchIndex && void 0 !== t.row.searchIndex && f.push(e)
                        })), i.searchData = f, this.rebuild(), i.update(), s || i.emit("datatable.sort", t, e)
                    }))
                }

                rebuild() {
                    let t, e, s, i;
                    const a = this.dt, n = [];
                    a.activeRows = [], a.activeHeadings = [], a.headings.forEach(((t, e) => {
                        t.originalCellIndex = e, t.sortable = "false" !== t.getAttribute("data-sortable"), a.hiddenColumns.includes(e) || a.activeHeadings.push(t)
                    })), a.data.forEach(((r, h) => {
                        t = r.cloneNode(!1), e = r.cloneNode(!1), t.dataIndex = e.dataIndex = h, null !== r.searchIndex && void 0 !== r.searchIndex && (t.searchIndex = e.searchIndex = r.searchIndex), Array.from(r.cells).forEach((n => {
                            s = n.cloneNode(!0), s.data = n.data, t.appendChild(s), a.hiddenColumns.includes(s.cellIndex) || (i = s.cloneNode(!0), i.data = s.data, e.appendChild(i))
                        })), n.push(t), a.activeRows.push(e)
                    })), a.data = n, a.update()
                }
            }

            const h = function (t) {
                let s = !1, i = !1;
                if ((t = t || this.options.data).headings) {
                    s = e("thead");
                    const i = e("tr");
                    t.headings.forEach((t => {
                        const s = e("th", {html: t});
                        i.appendChild(s)
                    })), s.appendChild(i)
                }
                t.data && t.data.length && (i = e("tbody"), t.data.forEach((s => {
                    if (t.headings && t.headings.length !== s.length) throw new Error("The number of rows do not match the number of headings.");
                    const a = e("tr");
                    s.forEach((t => {
                        const s = e("td", {html: t});
                        a.appendChild(s)
                    })), i.appendChild(a)
                }))), s && (null !== this.dom.tHead && this.dom.removeChild(this.dom.tHead), this.dom.appendChild(s)), i && (this.dom.tBodies.length && this.dom.removeChild(this.dom.tBodies[0]), this.dom.appendChild(i))
            }, l = {
                sortable: !0,
                searchable: !0,
                paging: !0,
                perPage: 10,
                perPageSelect: [5, 10, 15, 20, 25],
                nextPrev: !0,
                firstLast: !1,
                prevText: "&lsaquo;",
                nextText: "&rsaquo;",
                firstText: "&laquo;",
                lastText: "&raquo;",
                ellipsisText: "&hellip;",
                ascText: "▴",
                descText: "▾",
                truncatePager: !0,
                pagerDelta: 2,
                scrollY: "",
                fixedColumns: !0,
                fixedHeight: !1,
                header: !0,
                hiddenHeader: !1,
                footer: !1,
                labels: {
                    placeholder: "جستجو...",
                    perPage: "  ورودی در هر صفحه {select}",
                    noRows: "هیچ ورودی یافت نشد",
                    noResults: "هیچ نتیجه ای با عبارت جستجوی شما مطابقت ندارد",
                    info: " نمایش {start} تا {end} از {rows} ورودی"
                },
                layout: {top: "{select}{search}", bottom: "{info}{pager}"}
            };

            class o {
                constructor(t, e = {}) {
                    const s = "string" == typeof t ? document.querySelector(t) : t;
                    if (this.options = {
                        ...l, ...e,
                        layout: {...l.layout, ...e.layout},
                        labels: {...l.labels, ...e.labels}
                    }, this.initialized = !1, this.initialLayout = s.innerHTML, this.initialSortable = this.options.sortable, this.options.header || (this.options.sortable = !1), null === s.tHead && (!this.options.data || this.options.data && !this.options.data.headings) && (this.options.sortable = !1), s.tBodies.length && !s.tBodies[0].rows.length && this.options.data && !this.options.data.data) throw new Error("You seem to be using the data option, but you've not defined any rows.");
                    this.dom = s, this.table = this.dom, this.listeners = {onResize: t => this.onResize(t)}, this.init()
                }

                static extend(t, e) {
                    "function" == typeof e ? o.prototype[t] = e : o[t] = e
                }

                init(t) {
                    if (this.initialized || this.dom.classList.contains("dataTable-table")) return !1;
                    Object.assign(this.options, t || {}), this.currentPage = 1, this.onFirstPage = !0, this.hiddenColumns = [], this.columnRenderers = [], this.selectedColumns = [], this.render(), setTimeout((() => {
                        this.emit("datatable.init"), this.initialized = !0, this.options.plugins && Object.entries(this.options.plugins).forEach((([t, s]) => {
                            this[t] && "function" == typeof this[t] && (this[t] = this[t](s, {createElement: e}), s.enabled && this[t].init && "function" == typeof this[t].init && this[t].init())
                        }))
                    }), 10)
                }

                render(t) {
                    if (t) {
                        switch (t) {
                            case"page":
                                this.renderPage();
                                break;
                            case"pager":
                                this.renderPager();
                                break;
                            case"header":
                                this.renderHeader()
                        }
                        return !1
                    }
                    const s = this.options;
                    let i = "";
                    if (s.data && h.call(this), this.body = this.dom.tBodies[0], this.head = this.dom.tHead, this.foot = this.dom.tFoot, this.body || (this.body = e("tbody"), this.dom.appendChild(this.body)), this.hasRows = this.body.rows.length > 0, !this.head) {
                        const t = e("thead"), i = e("tr");
                        this.hasRows && (Array.from(this.body.rows[0].cells).forEach((() => {
                            i.appendChild(e("th"))
                        })), t.appendChild(i)), this.head = t, this.dom.insertBefore(this.head, this.body), this.hiddenHeader = s.hiddenHeader
                    }
                    if (this.headings = [], this.hasHeadings = this.head.rows.length > 0, this.hasHeadings && (this.header = this.head.rows[0], this.headings = [].slice.call(this.header.cells)), s.header || this.head && this.dom.removeChild(this.dom.tHead), s.footer ? this.head && !this.foot && (this.foot = e("tfoot", {html: this.head.innerHTML}), this.dom.appendChild(this.foot)) : this.foot && this.dom.removeChild(this.dom.tFoot), this.wrapper = e("div", {class: "dataTable-wrapper dataTable-loading"}), i += "<div class='dataTable-top'>", i += s.layout.top, i += "</div>", s.scrollY.length ? i += `<div class='dataTable-container' style='height: ${s.scrollY}; overflow-Y: auto;'></div>` : i += "<div class='dataTable-container'></div>", i += "<div class='dataTable-bottom'>", i += s.layout.bottom, i += "</div>", i = i.replace("{info}", s.paging ? "<div class='dataTable-info'></div>" : ""), s.paging && s.perPageSelect) {
                        let t = "<div class='dataTable-dropdown'><label>";
                        t += s.labels.perPage, t += "</label></div>";
                        const a = e("select", {class: "dataTable-selector"});
                        s.perPageSelect.forEach((t => {
                            const e = t === s.perPage, i = new Option(t, t, e, e);
                            a.add(i)
                        })), t = t.replace("{select}", a.outerHTML), i = i.replace("{select}", t)
                    } else i = i.replace("{select}", "");
                    if (s.searchable) {
                        const t = `<div class='dataTable-search'><input class='dataTable-input' placeholder='${s.labels.placeholder}' type='text'></div>`;
                        i = i.replace("{search}", t)
                    } else i = i.replace("{search}", "");
                    this.hasHeadings && this.render("header"), this.dom.classList.add("dataTable-table");
                    const a = e("nav", {class: "dataTable-pagination"}),
                        n = e("ul", {class: "dataTable-pagination-list"});
                    a.appendChild(n), i = i.replace(/\{pager\}/g, a.outerHTML), this.wrapper.innerHTML = i, this.container = this.wrapper.querySelector(".dataTable-container"), this.pagers = this.wrapper.querySelectorAll(".dataTable-pagination-list"), this.label = this.wrapper.querySelector(".dataTable-info"), this.dom.parentNode.replaceChild(this.wrapper, this.dom), this.container.appendChild(this.dom), this.rect = this.dom.getBoundingClientRect(), this.data = Array.from(this.body.rows), this.activeRows = this.data.slice(), this.activeHeadings = this.headings.slice(), this.update(), this.setColumns(), this.fixHeight(), this.fixColumns(), s.header || this.wrapper.classList.add("no-header"), s.footer || this.wrapper.classList.add("no-footer"), s.sortable && this.wrapper.classList.add("sortable"), s.searchable && this.wrapper.classList.add("searchable"), s.fixedHeight && this.wrapper.classList.add("fixed-height"), s.fixedColumns && this.wrapper.classList.add("fixed-columns"), this.bindEvents()
                }

                renderPage() {
                    if (this.hasHeadings && (s(this.header), this.activeHeadings.forEach((t => this.header.appendChild(t)))), this.hasRows && this.totalPages) {
                        this.currentPage > this.totalPages && (this.currentPage = 1);
                        const t = this.currentPage - 1, e = document.createDocumentFragment();
                        this.pages[t].forEach((t => e.appendChild(this.rows().render(t)))), this.clear(e), this.onFirstPage = 1 === this.currentPage, this.onLastPage = this.currentPage === this.lastPage
                    } else this.setMessage(this.options.labels.noRows);
                    let t, e = 0, i = 0, a = 0;
                    if (this.totalPages && (e = this.currentPage - 1, i = e * this.options.perPage, a = i + this.pages[e].length, i += 1, t = this.searching ? this.searchData.length : this.data.length), this.label && this.options.labels.info.length) {
                        const e = this.options.labels.info.replace("{start}", i).replace("{end}", a).replace("{page}", this.currentPage).replace("{pages}", this.totalPages).replace("{rows}", t);
                        this.label.innerHTML = t ? e : ""
                    }
                    1 == this.currentPage && this.fixHeight()
                }

                renderPager() {
                    if (s(this.pagers), this.totalPages > 1) {
                        const t = "pager", s = document.createDocumentFragment(),
                            a = this.onFirstPage ? 1 : this.currentPage - 1,
                            n = this.onLastPage ? this.totalPages : this.currentPage + 1;
                        this.options.firstLast && s.appendChild(i(t, 1, this.options.firstText)), this.options.nextPrev && !this.onFirstPage && s.appendChild(i(t, a, this.options.prevText));
                        let r = this.links;
                        this.options.truncatePager && (r = ((t, s, i, a, n) => {
                            let r;
                            const h = 2 * (a = a || 2);
                            let l = s - a, o = s + a;
                            const d = [], c = [];
                            s < 4 - a + h ? o = 3 + h : s > i - (3 - a + h) && (l = i - (2 + h));
                            for (let e = 1; e <= i; e++) if (1 == e || e == i || e >= l && e <= o) {
                                const s = t[e - 1];
                                s.classList.remove("active"), d.push(s)
                            }
                            return d.forEach((s => {
                                const i = s.children[0].getAttribute("data-page");
                                if (r) {
                                    const s = r.children[0].getAttribute("data-page");
                                    if (i - s == 2) c.push(t[s]); else if (i - s != 1) {
                                        const t = e("li", {class: "ellipsis", html: `<a href="#">${n}</a>`});
                                        c.push(t)
                                    }
                                }
                                c.push(s), r = s
                            })), c
                        })(this.links, this.currentPage, this.pages.length, this.options.pagerDelta, this.options.ellipsisText)), this.links[this.currentPage - 1].classList.add("active"), r.forEach((t => {
                            t.classList.remove("active"), s.appendChild(t)
                        })), this.links[this.currentPage - 1].classList.add("active"), this.options.nextPrev && !this.onLastPage && s.appendChild(i(t, n, this.options.nextText)), this.options.firstLast && s.appendChild(i(t, this.totalPages, this.options.lastText)), this.pagers.forEach((t => {
                            t.appendChild(s.cloneNode(!0))
                        }))
                    }
                }

                renderHeader() {
                    this.labels = [], this.headings && this.headings.length && this.headings.forEach(((t, s) => {
                        if (this.labels[s] = t.textContent, t.firstElementChild && t.firstElementChild.classList.contains("dataTable-sorter") && (t.innerHTML = t.firstElementChild.innerHTML), t.sortable = "false" !== t.getAttribute("data-sortable"), t.originalCellIndex = s, this.options.sortable && t.sortable) {
                            const s = e("a", {href: "#", class: "dataTable-sorter", html: t.innerHTML});
                            t.innerHTML = "", t.setAttribute("data-sortable", ""), t.appendChild(s)
                        }
                    })), this.fixColumns()
                }

                bindEvents() {
                    const t = this.options;
                    if (t.perPageSelect) {
                        const e = this.wrapper.querySelector(".dataTable-selector");
                        e && e.addEventListener("change", (() => {
                            t.perPage = parseInt(e.value, 10), this.update(), this.fixHeight(), this.emit("datatable.perpage", t.perPage)
                        }), !1)
                    }
                    t.searchable && (this.input = this.wrapper.querySelector(".dataTable-input"), this.input && this.input.addEventListener("keyup", (() => this.search(this.input.value)), !1)), this.wrapper.addEventListener("click", (e => {
                        const s = e.target.closest("a");
                        s && "a" === s.nodeName.toLowerCase() && (s.hasAttribute("data-page") ? (this.page(s.getAttribute("data-page")), e.preventDefault()) : t.sortable && s.classList.contains("dataTable-sorter") && "false" != s.parentNode.getAttribute("data-sortable") && (this.columns().sort(this.headings.indexOf(s.parentNode)), e.preventDefault()))
                    }), !1), window.addEventListener("resize", this.listeners.onResize)
                }

                onResize() {
                    this.rect = this.container.getBoundingClientRect(), this.rect.width && this.fixColumns()
                }

                setColumns(t) {
                    t || this.data.forEach((t => {
                        Array.from(t.cells).forEach((t => {
                            t.data = t.innerHTML
                        }))
                    })), this.options.columns && this.headings.length && this.options.columns.forEach((t => {
                        Array.isArray(t.select) || (t.select = [t.select]), t.hasOwnProperty("render") && "function" == typeof t.render && (this.selectedColumns = this.selectedColumns.concat(t.select), this.columnRenderers.push({
                            columns: t.select,
                            renderer: t.render
                        })), t.select.forEach((e => {
                            const s = this.headings[e];
                            s && (t.type && s.setAttribute("data-type", t.type), t.format && s.setAttribute("data-format", t.format), t.hasOwnProperty("sortable") && s.setAttribute("data-sortable", t.sortable), t.hasOwnProperty("hidden") && !1 !== t.hidden && this.columns().hide([e]), t.hasOwnProperty("sort") && 1 === t.select.length && this.columns().sort(t.select[0], t.sort, !0))
                        }))
                    })), this.hasRows && (this.data.forEach(((t, e) => {
                        t.dataIndex = e, Array.from(t.cells).forEach((t => {
                            t.data = t.innerHTML
                        }))
                    })), this.selectedColumns.length && this.data.forEach((t => {
                        Array.from(t.cells).forEach(((e, s) => {
                            this.selectedColumns.includes(s) && this.columnRenderers.forEach((i => {
                                i.columns.includes(s) && (e.innerHTML = i.renderer.call(this, e.data, e, t))
                            }))
                        }))
                    })), this.columns().rebuild()), this.render("header")
                }

                destroy() {
                    this.dom.innerHTML = this.initialLayout, this.dom.classList.remove("dataTable-table"), this.wrapper.parentNode.replaceChild(this.dom, this.wrapper), this.initialized = !1, window.removeEventListener("resize", this.listeners.onResize)
                }

                update() {
                    this.wrapper.classList.remove("dataTable-empty"), this.paginate(this), this.render("page"), this.links = [];
                    let t = this.pages.length;
                    for (; t--;) {
                        const e = t + 1;
                        this.links[t] = i(0 === t ? "active" : "", e, e)
                    }
                    this.sorting = !1, this.render("pager"), this.rows().update(), this.emit("datatable.update")
                }

                paginate() {
                    const t = this.options.perPage;
                    let e = this.activeRows;
                    return this.searching && (e = [], this.searchData.forEach((t => e.push(this.activeRows[t])))), this.options.paging ? this.pages = e.map(((s, i) => i % t == 0 ? e.slice(i, i + t) : null)).filter((t => t)) : this.pages = [e], this.totalPages = this.lastPage = this.pages.length, this.totalPages
                }

                fixColumns() {
                    if ((this.options.scrollY.length || this.options.fixedColumns) && this.activeHeadings && this.activeHeadings.length) {
                        let t, s = !1;
                        if (this.columnWidths = [], this.dom.tHead) {
                            this.options.scrollY.length && (s = e("thead"), s.appendChild(e("tr")), s.style.height = "0px", this.headerTable && (this.dom.tHead = this.headerTable.tHead)), this.activeHeadings.forEach((t => {
                                t.style.width = ""
                            }));
                            const t = this.activeHeadings.reduce(((t, e) => t + e.offsetWidth), 0);
                            if (this.activeHeadings.forEach(((i, a) => {
                                const n = i.offsetWidth, r = n / t * 100;
                                if (i.style.width = `${r}%`, this.columnWidths[a] = n, this.options.scrollY.length) {
                                    const t = e("th");
                                    s.firstElementChild.appendChild(t), t.style.width = `${r}%`, t.style.paddingTop = "0", t.style.paddingBottom = "0", t.style.border = "0"
                                }
                            })), this.options.scrollY.length) {
                                const t = this.dom.parentElement;
                                if (!this.headerTable) {
                                    this.headerTable = e("table", {class: "dataTable-table"});
                                    const s = e("div", {class: "dataTable-headercontainer"});
                                    s.appendChild(this.headerTable), t.parentElement.insertBefore(s, t)
                                }
                                const i = this.dom.tHead;
                                this.dom.replaceChild(s, i), this.headerTable.tHead = i, this.headerTable.parentElement.style.paddingRight = `${this.headerTable.clientWidth - this.dom.clientWidth + parseInt(this.headerTable.parentElement.style.paddingRight || "0", 10)}px`, t.scrollHeight > t.clientHeight && (t.style.overflowY = "scroll")
                            }
                        } else {
                            t = [], s = e("thead");
                            const i = e("tr");
                            Array.from(this.dom.tBodies[0].rows[0].cells).forEach((() => {
                                const s = e("th");
                                i.appendChild(s), t.push(s)
                            })), s.appendChild(i), this.dom.insertBefore(s, this.body);
                            const a = [];
                            t.forEach(((t, e) => {
                                const s = t.offsetWidth, i = s / this.rect.width * 100;
                                a.push(i), this.columnWidths[e] = s
                            })), this.data.forEach((t => {
                                Array.from(t.cells).forEach(((t, e) => {
                                    this.columns(t.cellIndex).visible() && (t.style.width = `${a[e]}%`)
                                }))
                            })), this.dom.removeChild(s)
                        }
                    }
                }

                fixHeight() {
                    this.options.fixedHeight && (this.container.style.height = null, this.rect = this.container.getBoundingClientRect(), this.container.style.height = `${this.rect.height}px`)
                }

                search(t) {
                    return !!this.hasRows && (t = t.toLowerCase(), this.currentPage = 1, this.searching = !0, this.searchData = [], t.length ? (this.clear(), this.data.forEach(((e, s) => {
                        const i = this.searchData.includes(e);
                        t.split(" ").reduce(((t, s) => {
                            let i = !1, a = null, n = null;
                            for (let t = 0; t < e.cells.length; t++) if (a = e.cells[t], n = a.hasAttribute("data-content") ? a.getAttribute("data-content") : a.textContent, n.toLowerCase().includes(s) && this.columns(a.cellIndex).visible()) {
                                i = !0;
                                break
                            }
                            return t && i
                        }), !0) && !i ? (e.searchIndex = s, this.searchData.push(s)) : e.searchIndex = null
                    })), this.wrapper.classList.add("search-results"), this.searchData.length ? this.update() : (this.wrapper.classList.remove("search-results"), this.setMessage(this.options.labels.noResults)), void this.emit("datatable.search", t, this.searchData)) : (this.searching = !1, this.update(), this.emit("datatable.search", t, this.searchData), this.wrapper.classList.remove("search-results"), !1))
                }

                page(t) {
                    return t != this.currentPage && (isNaN(t) || (this.currentPage = parseInt(t, 10)), !(t > this.pages.length || t < 0) && (this.render("page"), this.render("pager"), void this.emit("datatable.page", t)))
                }

                sortColumn(t, e) {
                    this.columns().sort(t, e)
                }

                insert(s) {
                    let i = [];
                    if (t(s)) {
                        if (s.headings && !this.hasHeadings && !this.hasRows) {
                            const t = e("tr");
                            s.headings.forEach((s => {
                                const i = e("th", {html: s});
                                t.appendChild(i)
                            })), this.head.appendChild(t), this.header = t, this.headings = [].slice.call(t.cells), this.hasHeadings = !0, this.options.sortable = this.initialSortable, this.render("header"), this.activeHeadings = this.headings.slice()
                        }
                        s.data && Array.isArray(s.data) && (i = s.data)
                    } else Array.isArray(s) && s.forEach((t => {
                        const e = [];
                        Object.entries(t).forEach((([t, s]) => {
                            const i = this.labels.indexOf(t);
                            i > -1 && (e[i] = s)
                        })), i.push(e)
                    }));
                    i.length && (this.rows().add(i), this.hasRows = !0), this.update(), this.setColumns(), this.fixColumns()
                }

                refresh() {
                    this.options.searchable && (this.input.value = "", this.searching = !1), this.currentPage = 1, this.onFirstPage = !0, this.update(), this.emit("datatable.refresh")
                }

                clear(t) {
                    this.body && s(this.body);
                    let e = this.body;
                    if (this.body || (e = this.dom), t) {
                        if ("string" == typeof t) {
                            document.createDocumentFragment().innerHTML = t
                        }
                        e.appendChild(t)
                    }
                }

                export(e) {
                    if (!this.hasHeadings && !this.hasRows) return !1;
                    const s = this.activeHeadings;
                    let i = [];
                    const a = [];
                    let n, r, h, l;
                    if (!t(e)) return !1;
                    const o = {
                        download: !0,
                        skipColumn: [],
                        lineDelimiter: "\n",
                        columnDelimiter: ",",
                        tableName: "myTable",
                        replacer: null,
                        space: 4, ...e
                    };
                    if (o.type) {
                        if ("txt" !== o.type && "csv" !== o.type || (i[0] = this.header), o.selection) if (isNaN(o.selection)) {
                            if (Array.isArray(o.selection)) for (n = 0; n < o.selection.length; n++) i = i.concat(this.pages[o.selection[n] - 1])
                        } else i = i.concat(this.pages[o.selection - 1]); else i = i.concat(this.activeRows);
                        if (i.length) {
                            if ("txt" === o.type || "csv" === o.type) {
                                for (h = "", n = 0; n < i.length; n++) {
                                    for (r = 0; r < i[n].cells.length; r++) if (!o.skipColumn.includes(s[r].originalCellIndex) && this.columns(s[r].originalCellIndex).visible()) {
                                        let t = i[n].cells[r].textContent;
                                        t = t.trim(), t = t.replace(/\s{2,}/g, " "), t = t.replace(/\n/g, "  "), t = t.replace(/"/g, '""'), t = t.replace(/#/g, "%23"), t.includes(",") && (t = `"${t}"`), h += t + o.columnDelimiter
                                    }
                                    h = h.trim().substring(0, h.length - 1), h += o.lineDelimiter
                                }
                                h = h.trim().substring(0, h.length - 1), o.download && (h = `data:text/csv;charset=utf-8,${h}`)
                            } else if ("sql" === o.type) {
                                for (h = `INSERT INTO \`${o.tableName}\` (`, n = 0; n < s.length; n++) !o.skipColumn.includes(s[n].originalCellIndex) && this.columns(s[n].originalCellIndex).visible() && (h += `\`${s[n].textContent}\`,`);
                                for (h = h.trim().substring(0, h.length - 1), h += ") VALUES ", n = 0; n < i.length; n++) {
                                    for (h += "(", r = 0; r < i[n].cells.length; r++) !o.skipColumn.includes(s[r].originalCellIndex) && this.columns(s[r].originalCellIndex).visible() && (h += `"${i[n].cells[r].textContent}",`);
                                    h = h.trim().substring(0, h.length - 1), h += "),"
                                }
                                h = h.trim().substring(0, h.length - 1), h += ";", o.download && (h = `data:application/sql;charset=utf-8,${h}`)
                            } else if ("json" === o.type) {
                                for (r = 0; r < i.length; r++) for (a[r] = a[r] || {}, n = 0; n < s.length; n++) !o.skipColumn.includes(s[n].originalCellIndex) && this.columns(s[n].originalCellIndex).visible() && (a[r][s[n].textContent] = i[r].cells[n].textContent);
                                h = JSON.stringify(a, o.replacer, o.space), o.download && (h = `data:application/json;charset=utf-8,${h}`)
                            }
                            return o.download && (o.filename = o.filename || "datatable_export", o.filename += `.${o.type}`, h = encodeURI(h), l = document.createElement("a"), l.href = h, l.download = o.filename, document.body.appendChild(l), l.click(), document.body.removeChild(l)), h
                        }
                    }
                    return !1
                }

                import(e) {
                    let s = !1;
                    if (!t(e)) return !1;
                    const i = {lineDelimiter: "\n", columnDelimiter: ",", removeDoubleQuotes: !1, ...e};
                    if (i.data.length || t(i.data)) {
                        if ("csv" === i.type) {
                            s = {data: []};
                            const t = i.data.split(i.lineDelimiter);
                            t.length && (i.headings && (s.headings = t[0].split(i.columnDelimiter), i.removeDoubleQuotes && (s.headings = s.headings.map((t => t.trim().replace(/(^"|"$)/g, "")))), t.shift()), t.forEach(((t, e) => {
                                s.data[e] = [];
                                const a = t.split(i.columnDelimiter);
                                a.length && a.forEach((t => {
                                    i.removeDoubleQuotes && (t = t.trim().replace(/(^"|"$)/g, "")), s.data[e].push(t)
                                }))
                            })))
                        } else if ("json" === i.type) {
                            const e = (e => {
                                let s = !1;
                                try {
                                    s = JSON.parse(e)
                                } catch (t) {
                                    return !1
                                }
                                return !(null === s || !Array.isArray(s) && !t(s)) && s
                            })(i.data);
                            e && (s = {headings: [], data: []}, e.forEach(((t, e) => {
                                s.data[e] = [], Object.entries(t).forEach((([t, i]) => {
                                    s.headings.includes(t) || s.headings.push(t), s.data[e].push(i)
                                }))
                            })))
                        }
                        t(i.data) && (s = i.data), s && this.insert(s)
                    }
                    return !1
                }

                print() {
                    const t = this.activeHeadings, s = this.activeRows, i = e("table"), a = e("thead"), n = e("tbody"),
                        r = e("tr");
                    t.forEach((t => {
                        r.appendChild(e("th", {html: t.textContent}))
                    })), a.appendChild(r), s.forEach((t => {
                        const s = e("tr");
                        Array.from(t.cells).forEach((t => {
                            s.appendChild(e("td", {html: t.textContent}))
                        })), n.appendChild(s)
                    })), i.appendChild(a), i.appendChild(n);
                    const h = window.open();
                    h.document.body.appendChild(i), h.print()
                }

                setMessage(t) {
                    let s = 1;
                    this.hasRows ? s = this.data[0].cells.length : this.activeHeadings.length && (s = this.activeHeadings.length), this.wrapper.classList.add("dataTable-empty"), this.label && (this.label.innerHTML = ""), this.totalPages = 0, this.render("pager"), this.clear(e("tr", {html: `<td class="dataTables-empty" colspan="${s}">${t}</td>`}))
                }

                columns(t) {
                    return new r(this, t)
                }

                rows(t) {
                    return new n(this, t)
                }

                on(t, e) {
                    this.events = this.events || {}, this.events[t] = this.events[t] || [], this.events[t].push(e)
                }

                off(t, e) {
                    this.events = this.events || {}, t in this.events != !1 && this.events[t].splice(this.events[t].indexOf(e), 1)
                }

                emit(t) {
                    if (this.events = this.events || {}, t in this.events != !1) for (let e = 0; e < this.events[t].length; e++) this.events[t][e].apply(this, Array.prototype.slice.call(arguments, 1))
                }
            }

            exports.DataTable = o;


        }, {"./date-7061ceee.js": 1}]
    }, {}, [2])(2)
});
