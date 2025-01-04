/*! For license information please see apexcharts.amd.js.LICENSE.txt */
!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ApexCharts = e() : t.ApexCharts = e()
}(self, (() => (() => {
    var t = {
        922: t => {
            "use strict";
            t.exports = function (t) {
                var e = [];
                return e.toString = function () {
                    return this.map((function (e) {
                        var i = function (t, e) {
                            var i, a, r, s = t[1] || "", n = t[3];
                            if (!n) return s;
                            if (e && "function" == typeof btoa) {
                                var o = (i = n, a = btoa(unescape(encodeURIComponent(JSON.stringify(i)))), r = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a), "/*# ".concat(r, " */")),
                                    l = n.sources.map((function (t) {
                                        return "/*# sourceURL=".concat(n.sourceRoot || "").concat(t, " */")
                                    }));
                                return [s].concat(l).concat([o]).join("\n")
                            }
                            return [s].join("\n")
                        }(e, t);
                        return e[2] ? "@media ".concat(e[2], " {").concat(i, "}") : i
                    })).join("")
                }, e.i = function (t, i) {
                    "string" == typeof t && (t = [[null, t, ""]]);
                    for (var a = 0; a < t.length; a++) {
                        var r = [].concat(t[a]);
                        i && (r[2] ? r[2] = "".concat(i, " and ").concat(r[2]) : r[2] = i), e.push(r)
                    }
                }, e
            }
        }, 372: function () {
            function t(e) {
                return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, t(e)
            }

            (function () {
                function e(t) {
                    t.remember("_draggable", this), this.el = t
                }

                e.prototype.init = function (t, e) {
                    var i = this;
                    this.constraint = t, this.value = e, this.el.on("mousedown.drag", (function (t) {
                        i.start(t)
                    })), this.el.on("touchstart.drag", (function (t) {
                        i.start(t)
                    }))
                }, e.prototype.transformPoint = function (t, e) {
                    var i = (t = t || window.event).changedTouches && t.changedTouches[0] || t;
                    return this.p.x = i.clientX - (e || 0), this.p.y = i.clientY, this.p.matrixTransform(this.m)
                }, e.prototype.getBBox = function () {
                    var t = this.el.bbox();
                    return this.el instanceof SVG.Nested && (t = this.el.rbox()), (this.el instanceof SVG.G || this.el instanceof SVG.Use || this.el instanceof SVG.Nested) && (t.x = this.el.x(), t.y = this.el.y()), t
                }, e.prototype.start = function (t) {
                    if ("click" != t.type && "mousedown" != t.type && "mousemove" != t.type || 1 == (t.which || t.buttons)) {
                        var e = this;
                        if (this.el.fire("beforedrag", {event: t, handler: this}), !this.el.event().defaultPrevented) {
                            t.preventDefault(), t.stopPropagation(), this.parent = this.parent || this.el.parent(SVG.Nested) || this.el.parent(SVG.Doc), this.p = this.parent.node.createSVGPoint(), this.m = this.el.node.getScreenCTM().inverse();
                            var i, a = this.getBBox();
                            if (this.el instanceof SVG.Text) switch (i = this.el.node.getComputedTextLength(), this.el.attr("text-anchor")) {
                                case"middle":
                                    i /= 2;
                                    break;
                                case"start":
                                    i = 0
                            }
                            this.startPoints = {
                                point: this.transformPoint(t, i),
                                box: a,
                                transform: this.el.transform()
                            }, SVG.on(window, "mousemove.drag", (function (t) {
                                e.drag(t)
                            })), SVG.on(window, "touchmove.drag", (function (t) {
                                e.drag(t)
                            })), SVG.on(window, "mouseup.drag", (function (t) {
                                e.end(t)
                            })), SVG.on(window, "touchend.drag", (function (t) {
                                e.end(t)
                            })), this.el.fire("dragstart", {
                                event: t,
                                p: this.startPoints.point,
                                m: this.m,
                                handler: this
                            })
                        }
                    }
                }, e.prototype.drag = function (e) {
                    var i = this.getBBox(), a = this.transformPoint(e),
                        r = this.startPoints.box.x + a.x - this.startPoints.point.x,
                        s = this.startPoints.box.y + a.y - this.startPoints.point.y, n = this.constraint,
                        o = a.x - this.startPoints.point.x, l = a.y - this.startPoints.point.y;
                    if (this.el.fire("dragmove", {
                        event: e,
                        p: a,
                        m: this.m,
                        handler: this
                    }), this.el.event().defaultPrevented) return a;
                    if ("function" == typeof n) {
                        var c = n.call(this.el, r, s, this.m);
                        "boolean" == typeof c && (c = {
                            x: c,
                            y: c
                        }), !0 === c.x ? this.el.x(r) : !1 !== c.x && this.el.x(c.x), !0 === c.y ? this.el.y(s) : !1 !== c.y && this.el.y(c.y)
                    } else "object" == t(n) && (null != n.minX && r < n.minX ? o = (r = n.minX) - this.startPoints.box.x : null != n.maxX && r > n.maxX - i.width && (o = (r = n.maxX - i.width) - this.startPoints.box.x), null != n.minY && s < n.minY ? l = (s = n.minY) - this.startPoints.box.y : null != n.maxY && s > n.maxY - i.height && (l = (s = n.maxY - i.height) - this.startPoints.box.y), null != n.snapToGrid && (r -= r % n.snapToGrid, s -= s % n.snapToGrid, o -= o % n.snapToGrid, l -= l % n.snapToGrid), this.el instanceof SVG.G ? this.el.matrix(this.startPoints.transform).transform({
                        x: o,
                        y: l
                    }, !0) : this.el.move(r, s));
                    return a
                }, e.prototype.end = function (t) {
                    var e = this.drag(t);
                    this.el.fire("dragend", {
                        event: t,
                        p: e,
                        m: this.m,
                        handler: this
                    }), SVG.off(window, "mousemove.drag"), SVG.off(window, "touchmove.drag"), SVG.off(window, "mouseup.drag"), SVG.off(window, "touchend.drag")
                }, SVG.extend(SVG.Element, {
                    draggable: function (i, a) {
                        "function" != typeof i && "object" != t(i) || (a = i, i = !0);
                        var r = this.remember("_draggable") || new e(this);
                        return (i = void 0 === i || i) ? r.init(a || {}, i) : (this.off("mousedown.drag"), this.off("touchstart.drag")), this
                    }
                })
            }).call(this)
        }, 872: function () {
            (function () {
                SVG.Filter = SVG.invent({
                    create: "filter", inherit: SVG.Parent, extend: {
                        source: "SourceGraphic",
                        sourceAlpha: "SourceAlpha",
                        background: "BackgroundImage",
                        backgroundAlpha: "BackgroundAlpha",
                        fill: "FillPaint",
                        stroke: "StrokePaint",
                        autoSetIn: !0,
                        put: function (t, e) {
                            return this.add(t, e), !t.attr("in") && this.autoSetIn && t.attr("in", this.source), t.attr("result") || t.attr("result", t), t
                        },
                        blend: function (t, e, i) {
                            return this.put(new SVG.BlendEffect(t, e, i))
                        },
                        colorMatrix: function (t, e) {
                            return this.put(new SVG.ColorMatrixEffect(t, e))
                        },
                        convolveMatrix: function (t) {
                            return this.put(new SVG.ConvolveMatrixEffect(t))
                        },
                        componentTransfer: function (t) {
                            return this.put(new SVG.ComponentTransferEffect(t))
                        },
                        composite: function (t, e, i) {
                            return this.put(new SVG.CompositeEffect(t, e, i))
                        },
                        flood: function (t, e) {
                            return this.put(new SVG.FloodEffect(t, e))
                        },
                        offset: function (t, e) {
                            return this.put(new SVG.OffsetEffect(t, e))
                        },
                        image: function (t) {
                            return this.put(new SVG.ImageEffect(t))
                        },
                        merge: function () {
                            var t = [void 0];
                            for (var e in arguments) t.push(arguments[e]);
                            return this.put(new (SVG.MergeEffect.bind.apply(SVG.MergeEffect, t)))
                        },
                        gaussianBlur: function (t, e) {
                            return this.put(new SVG.GaussianBlurEffect(t, e))
                        },
                        morphology: function (t, e) {
                            return this.put(new SVG.MorphologyEffect(t, e))
                        },
                        diffuseLighting: function (t, e, i) {
                            return this.put(new SVG.DiffuseLightingEffect(t, e, i))
                        },
                        displacementMap: function (t, e, i, a, r) {
                            return this.put(new SVG.DisplacementMapEffect(t, e, i, a, r))
                        },
                        specularLighting: function (t, e, i, a) {
                            return this.put(new SVG.SpecularLightingEffect(t, e, i, a))
                        },
                        tile: function () {
                            return this.put(new SVG.TileEffect)
                        },
                        turbulence: function (t, e, i, a, r) {
                            return this.put(new SVG.TurbulenceEffect(t, e, i, a, r))
                        },
                        toString: function () {
                            return "url(#" + this.attr("id") + ")"
                        }
                    }
                }), SVG.extend(SVG.Defs, {
                    filter: function (t) {
                        var e = this.put(new SVG.Filter);
                        return "function" == typeof t && t.call(e, e), e
                    }
                }), SVG.extend(SVG.Container, {
                    filter: function (t) {
                        return this.defs().filter(t)
                    }
                }), SVG.extend(SVG.Element, SVG.G, SVG.Nested, {
                    filter: function (t) {
                        return this.filterer = t instanceof SVG.Element ? t : this.doc().filter(t), this.doc() && this.filterer.doc() !== this.doc() && this.doc().defs().add(this.filterer), this.attr("filter", this.filterer), this.filterer
                    }, unfilter: function (t) {
                        return this.filterer && !0 === t && this.filterer.remove(), delete this.filterer, this.attr("filter", null)
                    }
                }), SVG.Effect = SVG.invent({
                    create: function () {
                        this.constructor.call(this)
                    }, inherit: SVG.Element, extend: {
                        in: function (t) {
                            return null == t ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", t)
                        }, result: function (t) {
                            return null == t ? this.attr("result") : this.attr("result", t)
                        }, toString: function () {
                            return this.result()
                        }
                    }
                }), SVG.ParentEffect = SVG.invent({
                    create: function () {
                        this.constructor.call(this)
                    }, inherit: SVG.Parent, extend: {
                        in: function (t) {
                            return null == t ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", t)
                        }, result: function (t) {
                            return null == t ? this.attr("result") : this.attr("result", t)
                        }, toString: function () {
                            return this.result()
                        }
                    }
                });
                var t = {
                    blend: function (t, e) {
                        return this.parent() && this.parent().blend(this, t, e)
                    }, colorMatrix: function (t, e) {
                        return this.parent() && this.parent().colorMatrix(t, e).in(this)
                    }, convolveMatrix: function (t) {
                        return this.parent() && this.parent().convolveMatrix(t).in(this)
                    }, componentTransfer: function (t) {
                        return this.parent() && this.parent().componentTransfer(t).in(this)
                    }, composite: function (t, e) {
                        return this.parent() && this.parent().composite(this, t, e)
                    }, flood: function (t, e) {
                        return this.parent() && this.parent().flood(t, e)
                    }, offset: function (t, e) {
                        return this.parent() && this.parent().offset(t, e).in(this)
                    }, image: function (t) {
                        return this.parent() && this.parent().image(t)
                    }, merge: function () {
                        return this.parent() && this.parent().merge.apply(this.parent(), [this].concat(arguments))
                    }, gaussianBlur: function (t, e) {
                        return this.parent() && this.parent().gaussianBlur(t, e).in(this)
                    }, morphology: function (t, e) {
                        return this.parent() && this.parent().morphology(t, e).in(this)
                    }, diffuseLighting: function (t, e, i) {
                        return this.parent() && this.parent().diffuseLighting(t, e, i).in(this)
                    }, displacementMap: function (t, e, i, a) {
                        return this.parent() && this.parent().displacementMap(this, t, e, i, a)
                    }, specularLighting: function (t, e, i, a) {
                        return this.parent() && this.parent().specularLighting(t, e, i, a).in(this)
                    }, tile: function () {
                        return this.parent() && this.parent().tile().in(this)
                    }, turbulence: function (t, e, i, a, r) {
                        return this.parent() && this.parent().turbulence(t, e, i, a, r).in(this)
                    }
                };
                SVG.extend(SVG.Effect, t), SVG.extend(SVG.ParentEffect, t), SVG.ChildEffect = SVG.invent({
                    create: function () {
                        this.constructor.call(this)
                    }, inherit: SVG.Element, extend: {
                        in: function (t) {
                            this.attr("in", t)
                        }
                    }
                });
                var e = {
                    blend: function (t, e, i) {
                        this.attr({in: t, in2: e, mode: i || "normal"})
                    }, colorMatrix: function (t, e) {
                        "matrix" == t && (e = r(e)), this.attr({type: t, values: void 0 === e ? null : e})
                    }, convolveMatrix: function (t) {
                        t = r(t), this.attr({order: Math.sqrt(t.split(" ").length), kernelMatrix: t})
                    }, composite: function (t, e, i) {
                        this.attr({in: t, in2: e, operator: i})
                    }, flood: function (t, e) {
                        this.attr("flood-color", t), null != e && this.attr("flood-opacity", e)
                    }, offset: function (t, e) {
                        this.attr({dx: t, dy: e})
                    }, image: function (t) {
                        this.attr("href", t, SVG.xlink)
                    }, displacementMap: function (t, e, i, a, r) {
                        this.attr({in: t, in2: e, scale: i, xChannelSelector: a, yChannelSelector: r})
                    }, gaussianBlur: function (t, e) {
                        null != t || null != e ? this.attr("stdDeviation", function (t) {
                            if (!Array.isArray(t)) return t;
                            for (var e = 0, i = t.length, a = []; e < i; e++) a.push(t[e]);
                            return a.join(" ")
                        }(Array.prototype.slice.call(arguments))) : this.attr("stdDeviation", "0 0")
                    }, morphology: function (t, e) {
                        this.attr({operator: t, radius: e})
                    }, tile: function () {
                    }, turbulence: function (t, e, i, a, r) {
                        this.attr({numOctaves: e, seed: i, stitchTiles: a, baseFrequency: t, type: r})
                    }
                }, i = {
                    merge: function () {
                        var t;
                        if (arguments[0] instanceof SVG.Set) {
                            var e = this;
                            arguments[0].each((function (t) {
                                this instanceof SVG.MergeNode ? e.put(this) : (this instanceof SVG.Effect || this instanceof SVG.ParentEffect) && e.put(new SVG.MergeNode(this))
                            }))
                        } else {
                            t = Array.isArray(arguments[0]) ? arguments[0] : arguments;
                            for (var i = 0; i < t.length; i++) t[i] instanceof SVG.MergeNode ? this.put(t[i]) : this.put(new SVG.MergeNode(t[i]))
                        }
                    }, componentTransfer: function (t) {
                        if (this.rgb = new SVG.Set, ["r", "g", "b", "a"].forEach(function (t) {
                            this[t] = new (SVG["Func" + t.toUpperCase()])("identity"), this.rgb.add(this[t]), this.node.appendChild(this[t].node)
                        }.bind(this)), t) for (var e in t.rgb && (["r", "g", "b"].forEach(function (e) {
                            this[e].attr(t.rgb)
                        }.bind(this)), delete t.rgb), t) this[e].attr(t[e])
                    }, diffuseLighting: function (t, e, i) {
                        this.attr({surfaceScale: t, diffuseConstant: e, kernelUnitLength: i})
                    }, specularLighting: function (t, e, i, a) {
                        this.attr({surfaceScale: t, diffuseConstant: e, specularExponent: i, kernelUnitLength: a})
                    }
                }, a = {
                    distantLight: function (t, e) {
                        this.attr({azimuth: t, elevation: e})
                    }, pointLight: function (t, e, i) {
                        this.attr({x: t, y: e, z: i})
                    }, spotLight: function (t, e, i, a, r, s) {
                        this.attr({x: t, y: e, z: i, pointsAtX: a, pointsAtY: r, pointsAtZ: s})
                    }, mergeNode: function (t) {
                        this.attr("in", t)
                    }
                };

                function r(t) {
                    return Array.isArray(t) && (t = new SVG.Array(t)), t.toString().replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s+/g, " ")
                }

                function s() {
                    var t = function () {
                    };
                    for (var e in "function" == typeof arguments[arguments.length - 1] && (t = arguments[arguments.length - 1], Array.prototype.splice.call(arguments, arguments.length - 1, 1)), arguments) for (var i in arguments[e]) t(arguments[e][i], i, arguments[e])
                }

                ["r", "g", "b", "a"].forEach((function (t) {
                    a["Func" + t.toUpperCase()] = function (t) {
                        switch (this.attr("type", t), t) {
                            case"table":
                                this.attr("tableValues", arguments[1]);
                                break;
                            case"linear":
                                this.attr("slope", arguments[1]), this.attr("intercept", arguments[2]);
                                break;
                            case"gamma":
                                this.attr("amplitude", arguments[1]), this.attr("exponent", arguments[2]), this.attr("offset", arguments[2])
                        }
                    }
                })), s(e, (function (t, e) {
                    var i = e.charAt(0).toUpperCase() + e.slice(1);
                    SVG[i + "Effect"] = SVG.invent({
                        create: function () {
                            this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments), this.result(this.attr("id") + "Out")
                        }, inherit: SVG.Effect, extend: {}
                    })
                })), s(i, (function (t, e) {
                    var i = e.charAt(0).toUpperCase() + e.slice(1);
                    SVG[i + "Effect"] = SVG.invent({
                        create: function () {
                            this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments), this.result(this.attr("id") + "Out")
                        }, inherit: SVG.ParentEffect, extend: {}
                    })
                })), s(a, (function (t, e) {
                    var i = e.charAt(0).toUpperCase() + e.slice(1);
                    SVG[i] = SVG.invent({
                        create: function () {
                            this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments)
                        }, inherit: SVG.ChildEffect, extend: {}
                    })
                })), SVG.extend(SVG.MergeEffect, {
                    in: function (t) {
                        return t instanceof SVG.MergeNode ? this.add(t, 0) : this.add(new SVG.MergeNode(t), 0), this
                    }
                }), SVG.extend(SVG.CompositeEffect, SVG.BlendEffect, SVG.DisplacementMapEffect, {
                    in2: function (t) {
                        return null == t ? this.parent() && this.parent().select('[result="' + this.attr("in2") + '"]').get(0) || this.attr("in2") : this.attr("in2", t)
                    }
                }), SVG.filter = {sepiatone: [.343, .669, .119, 0, 0, .249, .626, .13, 0, 0, .172, .334, .111, 0, 0, 0, 0, 0, 1, 0]}
            }).call(this)
        }, 25: () => {
            !function () {
                "use strict";

                function t(t, r, s, n, o, l, c) {
                    for (var h = t.slice(r, s || c), d = n.slice(o, l || c), u = 0, g = {
                        pos: [0, 0],
                        start: [0, 0]
                    }, f = {
                        pos: [0, 0],
                        start: [0, 0]
                    }; h[u] = e.call(g, h[u]), d[u] = e.call(f, d[u]), h[u][0] != d[u][0] || "M" == h[u][0] || "A" == h[u][0] && (h[u][4] != d[u][4] || h[u][5] != d[u][5]) ? (Array.prototype.splice.apply(h, [u, 1].concat(a.call(g, h[u]))), Array.prototype.splice.apply(d, [u, 1].concat(a.call(f, d[u])))) : (h[u] = i.call(g, h[u]), d[u] = i.call(f, d[u])), ++u != h.length || u != d.length;) u == h.length && h.push(["C", g.pos[0], g.pos[1], g.pos[0], g.pos[1], g.pos[0], g.pos[1]]), u == d.length && d.push(["C", f.pos[0], f.pos[1], f.pos[0], f.pos[1], f.pos[0], f.pos[1]]);
                    return {start: h, dest: d}
                }

                function e(t) {
                    switch (t[0]) {
                        case"z":
                        case"Z":
                            t[0] = "L", t[1] = this.start[0], t[2] = this.start[1];
                            break;
                        case"H":
                            t[0] = "L", t[2] = this.pos[1];
                            break;
                        case"V":
                            t[0] = "L", t[2] = t[1], t[1] = this.pos[0];
                            break;
                        case"T":
                            t[0] = "Q", t[3] = t[1], t[4] = t[2], t[1] = this.reflection[1], t[2] = this.reflection[0];
                            break;
                        case"S":
                            t[0] = "C", t[6] = t[4], t[5] = t[3], t[4] = t[2], t[3] = t[1], t[2] = this.reflection[1], t[1] = this.reflection[0]
                    }
                    return t
                }

                function i(t) {
                    var e = t.length;
                    return this.pos = [t[e - 2], t[e - 1]], -1 != "SCQT".indexOf(t[0]) && (this.reflection = [2 * this.pos[0] - t[e - 4], 2 * this.pos[1] - t[e - 3]]), t
                }

                function a(t) {
                    var e = [t];
                    switch (t[0]) {
                        case"M":
                            return this.pos = this.start = [t[1], t[2]], e;
                        case"L":
                            t[5] = t[3] = t[1], t[6] = t[4] = t[2], t[1] = this.pos[0], t[2] = this.pos[1];
                            break;
                        case"Q":
                            t[6] = t[4], t[5] = t[3], t[4] = 1 * t[4] / 3 + 2 * t[2] / 3, t[3] = 1 * t[3] / 3 + 2 * t[1] / 3, t[2] = 1 * this.pos[1] / 3 + 2 * t[2] / 3, t[1] = 1 * this.pos[0] / 3 + 2 * t[1] / 3;
                            break;
                        case"A":
                            e = function (t, e) {
                                var i, a, r, s, n, o, l, c, h, d, u, g, f, p, x, b, v, m, y, w, k, A, S, C, P, L,
                                    O = Math.abs(e[1]), T = Math.abs(e[2]), I = e[3] % 360, E = e[4], M = e[5],
                                    z = e[6], X = e[7], Y = new SVG.Point(t), R = new SVG.Point(z, X), F = [];
                                if (0 === O || 0 === T || Y.x === R.x && Y.y === R.y) return [["C", Y.x, Y.y, R.x, R.y, R.x, R.y]];
                                for ((a = (i = new SVG.Point((Y.x - R.x) / 2, (Y.y - R.y) / 2).transform((new SVG.Matrix).rotate(I))).x * i.x / (O * O) + i.y * i.y / (T * T)) > 1 && (O *= a = Math.sqrt(a), T *= a), r = (new SVG.Matrix).rotate(I).scale(1 / O, 1 / T).rotate(-I), Y = Y.transform(r), o = (s = [(R = R.transform(r)).x - Y.x, R.y - Y.y])[0] * s[0] + s[1] * s[1], n = Math.sqrt(o), s[0] /= n, s[1] /= n, l = o < 4 ? Math.sqrt(1 - o / 4) : 0, E === M && (l *= -1), c = new SVG.Point((R.x + Y.x) / 2 + l * -s[1], (R.y + Y.y) / 2 + l * s[0]), h = new SVG.Point(Y.x - c.x, Y.y - c.y), d = new SVG.Point(R.x - c.x, R.y - c.y), u = Math.acos(h.x / Math.sqrt(h.x * h.x + h.y * h.y)), h.y < 0 && (u *= -1), g = Math.acos(d.x / Math.sqrt(d.x * d.x + d.y * d.y)), d.y < 0 && (g *= -1), M && u > g && (g += 2 * Math.PI), !M && u < g && (g -= 2 * Math.PI), b = [], v = u, f = (g - u) / (p = Math.ceil(2 * Math.abs(u - g) / Math.PI)), x = 4 * Math.tan(f / 4) / 3, k = 0; k <= p; k++) y = Math.cos(v), m = Math.sin(v), w = new SVG.Point(c.x + y, c.y + m), b[k] = [new SVG.Point(w.x + x * m, w.y - x * y), w, new SVG.Point(w.x - x * m, w.y + x * y)], v += f;
                                for (b[0][0] = b[0][1].clone(), b[b.length - 1][2] = b[b.length - 1][1].clone(), r = (new SVG.Matrix).rotate(I).scale(O, T).rotate(-I), k = 0, A = b.length; k < A; k++) b[k][0] = b[k][0].transform(r), b[k][1] = b[k][1].transform(r), b[k][2] = b[k][2].transform(r);
                                for (k = 1, A = b.length; k < A; k++) S = (w = b[k - 1][2]).x, C = w.y, P = (w = b[k][0]).x, L = w.y, z = (w = b[k][1]).x, X = w.y, F.push(["C", S, C, P, L, z, X]);
                                return F
                            }(this.pos, t), t = e[0]
                    }
                    return t[0] = "C", this.pos = [t[5], t[6]], this.reflection = [2 * t[5] - t[3], 2 * t[6] - t[4]], e
                }

                function r(t, e) {
                    if (!1 === e) return !1;
                    for (var i = e, a = t.length; i < a; ++i) if ("M" == t[i][0]) return i;
                    return !1
                }

                SVG.extend(SVG.PathArray, {
                    morph: function (e) {
                        for (var i = this.value, a = this.parse(e), s = 0, n = 0, o = !1, l = !1; !1 !== s || !1 !== n;) {
                            var c;
                            o = r(i, !1 !== s && s + 1), l = r(a, !1 !== n && n + 1), !1 === s && (s = 0 == (c = new SVG.PathArray(h.start).bbox()).height || 0 == c.width ? i.push(i[0]) - 1 : i.push(["M", c.x + c.width / 2, c.y + c.height / 2]) - 1), !1 === n && (n = 0 == (c = new SVG.PathArray(h.dest).bbox()).height || 0 == c.width ? a.push(a[0]) - 1 : a.push(["M", c.x + c.width / 2, c.y + c.height / 2]) - 1);
                            var h = t(i, s, o, a, n, l);
                            i = i.slice(0, s).concat(h.start, !1 === o ? [] : i.slice(o)), a = a.slice(0, n).concat(h.dest, !1 === l ? [] : a.slice(l)), s = !1 !== o && s + h.start.length, n = !1 !== l && n + h.dest.length
                        }
                        return this.value = i, this.destination = new SVG.PathArray, this.destination.value = a, this
                    }
                })
            }()
        }, 882: () => {
            !function () {
                "use strict";
                (function () {
                    function t(t) {
                        t.remember("_resizeHandler", this), this.el = t, this.parameters = {}, this.lastUpdateCall = null, this.p = t.doc().node.createSVGPoint()
                    }

                    t.prototype.transformPoint = function (t, e, i) {
                        return this.p.x = t - (this.offset.x - window.pageXOffset), this.p.y = e - (this.offset.y - window.pageYOffset), this.p.matrixTransform(i || this.m)
                    }, t.prototype._extractPosition = function (t) {
                        return {
                            x: null != t.clientX ? t.clientX : t.touches[0].clientX,
                            y: null != t.clientY ? t.clientY : t.touches[0].clientY
                        }
                    }, t.prototype.init = function (t) {
                        var e = this;
                        if (this.stop(), "stop" !== t) {
                            for (var i in this.options = {}, this.el.resize.defaults) this.options[i] = this.el.resize.defaults[i], void 0 !== t[i] && (this.options[i] = t[i]);
                            this.el.on("lt.resize", (function (t) {
                                e.resize(t || window.event)
                            })), this.el.on("rt.resize", (function (t) {
                                e.resize(t || window.event)
                            })), this.el.on("rb.resize", (function (t) {
                                e.resize(t || window.event)
                            })), this.el.on("lb.resize", (function (t) {
                                e.resize(t || window.event)
                            })), this.el.on("t.resize", (function (t) {
                                e.resize(t || window.event)
                            })), this.el.on("r.resize", (function (t) {
                                e.resize(t || window.event)
                            })), this.el.on("b.resize", (function (t) {
                                e.resize(t || window.event)
                            })), this.el.on("l.resize", (function (t) {
                                e.resize(t || window.event)
                            })), this.el.on("rot.resize", (function (t) {
                                e.resize(t || window.event)
                            })), this.el.on("point.resize", (function (t) {
                                e.resize(t || window.event)
                            })), this.update()
                        }
                    }, t.prototype.stop = function () {
                        return this.el.off("lt.resize"), this.el.off("rt.resize"), this.el.off("rb.resize"), this.el.off("lb.resize"), this.el.off("t.resize"), this.el.off("r.resize"), this.el.off("b.resize"), this.el.off("l.resize"), this.el.off("rot.resize"), this.el.off("point.resize"), this
                    }, t.prototype.resize = function (t) {
                        var e = this;
                        this.m = this.el.node.getScreenCTM().inverse(), this.offset = {
                            x: window.pageXOffset,
                            y: window.pageYOffset
                        };
                        var i = this._extractPosition(t.detail.event);
                        if (this.parameters = {
                            type: this.el.type,
                            p: this.transformPoint(i.x, i.y),
                            x: t.detail.x,
                            y: t.detail.y,
                            box: this.el.bbox(),
                            rotation: this.el.transform().rotation
                        }, "text" === this.el.type && (this.parameters.fontSize = this.el.attr()["font-size"]), void 0 !== t.detail.i) {
                            var a = this.el.array().valueOf();
                            this.parameters.i = t.detail.i, this.parameters.pointCoords = [a[t.detail.i][0], a[t.detail.i][1]]
                        }
                        switch (t.type) {
                            case"lt":
                                this.calc = function (t, e) {
                                    var i = this.snapToGrid(t, e);
                                    if (this.parameters.box.width - i[0] > 0 && this.parameters.box.height - i[1] > 0) {
                                        if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x + i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - i[0]);
                                        i = this.checkAspectRatio(i), this.el.move(this.parameters.box.x + i[0], this.parameters.box.y + i[1]).size(this.parameters.box.width - i[0], this.parameters.box.height - i[1])
                                    }
                                };
                                break;
                            case"rt":
                                this.calc = function (t, e) {
                                    var i = this.snapToGrid(t, e, 2);
                                    if (this.parameters.box.width + i[0] > 0 && this.parameters.box.height - i[1] > 0) {
                                        if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x - i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + i[0]);
                                        i = this.checkAspectRatio(i, !0), this.el.move(this.parameters.box.x, this.parameters.box.y + i[1]).size(this.parameters.box.width + i[0], this.parameters.box.height - i[1])
                                    }
                                };
                                break;
                            case"rb":
                                this.calc = function (t, e) {
                                    var i = this.snapToGrid(t, e, 0);
                                    if (this.parameters.box.width + i[0] > 0 && this.parameters.box.height + i[1] > 0) {
                                        if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x - i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + i[0]);
                                        i = this.checkAspectRatio(i), this.el.move(this.parameters.box.x, this.parameters.box.y).size(this.parameters.box.width + i[0], this.parameters.box.height + i[1])
                                    }
                                };
                                break;
                            case"lb":
                                this.calc = function (t, e) {
                                    var i = this.snapToGrid(t, e, 1);
                                    if (this.parameters.box.width - i[0] > 0 && this.parameters.box.height + i[1] > 0) {
                                        if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x + i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - i[0]);
                                        i = this.checkAspectRatio(i, !0), this.el.move(this.parameters.box.x + i[0], this.parameters.box.y).size(this.parameters.box.width - i[0], this.parameters.box.height + i[1])
                                    }
                                };
                                break;
                            case"t":
                                this.calc = function (t, e) {
                                    var i = this.snapToGrid(t, e, 2);
                                    if (this.parameters.box.height - i[1] > 0) {
                                        if ("text" === this.parameters.type) return;
                                        this.el.move(this.parameters.box.x, this.parameters.box.y + i[1]).height(this.parameters.box.height - i[1])
                                    }
                                };
                                break;
                            case"r":
                                this.calc = function (t, e) {
                                    var i = this.snapToGrid(t, e, 0);
                                    if (this.parameters.box.width + i[0] > 0) {
                                        if ("text" === this.parameters.type) return;
                                        this.el.move(this.parameters.box.x, this.parameters.box.y).width(this.parameters.box.width + i[0])
                                    }
                                };
                                break;
                            case"b":
                                this.calc = function (t, e) {
                                    var i = this.snapToGrid(t, e, 0);
                                    if (this.parameters.box.height + i[1] > 0) {
                                        if ("text" === this.parameters.type) return;
                                        this.el.move(this.parameters.box.x, this.parameters.box.y).height(this.parameters.box.height + i[1])
                                    }
                                };
                                break;
                            case"l":
                                this.calc = function (t, e) {
                                    var i = this.snapToGrid(t, e, 1);
                                    if (this.parameters.box.width - i[0] > 0) {
                                        if ("text" === this.parameters.type) return;
                                        this.el.move(this.parameters.box.x + i[0], this.parameters.box.y).width(this.parameters.box.width - i[0])
                                    }
                                };
                                break;
                            case"rot":
                                this.calc = function (t, e) {
                                    var i = t + this.parameters.p.x, a = e + this.parameters.p.y,
                                        r = Math.atan2(this.parameters.p.y - this.parameters.box.y - this.parameters.box.height / 2, this.parameters.p.x - this.parameters.box.x - this.parameters.box.width / 2),
                                        s = Math.atan2(a - this.parameters.box.y - this.parameters.box.height / 2, i - this.parameters.box.x - this.parameters.box.width / 2),
                                        n = this.parameters.rotation + 180 * (s - r) / Math.PI + this.options.snapToAngle / 2;
                                    this.el.center(this.parameters.box.cx, this.parameters.box.cy).rotate(n - n % this.options.snapToAngle, this.parameters.box.cx, this.parameters.box.cy)
                                };
                                break;
                            case"point":
                                this.calc = function (t, e) {
                                    var i = this.snapToGrid(t, e, this.parameters.pointCoords[0], this.parameters.pointCoords[1]),
                                        a = this.el.array().valueOf();
                                    a[this.parameters.i][0] = this.parameters.pointCoords[0] + i[0], a[this.parameters.i][1] = this.parameters.pointCoords[1] + i[1], this.el.plot(a)
                                }
                        }
                        this.el.fire("resizestart", {
                            dx: this.parameters.x,
                            dy: this.parameters.y,
                            event: t
                        }), SVG.on(window, "touchmove.resize", (function (t) {
                            e.update(t || window.event)
                        })), SVG.on(window, "touchend.resize", (function () {
                            e.done()
                        })), SVG.on(window, "mousemove.resize", (function (t) {
                            e.update(t || window.event)
                        })), SVG.on(window, "mouseup.resize", (function () {
                            e.done()
                        }))
                    }, t.prototype.update = function (t) {
                        if (t) {
                            var e = this._extractPosition(t), i = this.transformPoint(e.x, e.y),
                                a = i.x - this.parameters.p.x, r = i.y - this.parameters.p.y;
                            this.lastUpdateCall = [a, r], this.calc(a, r), this.el.fire("resizing", {
                                dx: a,
                                dy: r,
                                event: t
                            })
                        } else this.lastUpdateCall && this.calc(this.lastUpdateCall[0], this.lastUpdateCall[1])
                    }, t.prototype.done = function () {
                        this.lastUpdateCall = null, SVG.off(window, "mousemove.resize"), SVG.off(window, "mouseup.resize"), SVG.off(window, "touchmove.resize"), SVG.off(window, "touchend.resize"), this.el.fire("resizedone")
                    }, t.prototype.snapToGrid = function (t, e, i, a) {
                        var r;
                        return void 0 !== a ? r = [(i + t) % this.options.snapToGrid, (a + e) % this.options.snapToGrid] : (i = null == i ? 3 : i, r = [(this.parameters.box.x + t + (1 & i ? 0 : this.parameters.box.width)) % this.options.snapToGrid, (this.parameters.box.y + e + (2 & i ? 0 : this.parameters.box.height)) % this.options.snapToGrid]), t < 0 && (r[0] -= this.options.snapToGrid), e < 0 && (r[1] -= this.options.snapToGrid), t -= Math.abs(r[0]) < this.options.snapToGrid / 2 ? r[0] : r[0] - (t < 0 ? -this.options.snapToGrid : this.options.snapToGrid), e -= Math.abs(r[1]) < this.options.snapToGrid / 2 ? r[1] : r[1] - (e < 0 ? -this.options.snapToGrid : this.options.snapToGrid), this.constraintToBox(t, e, i, a)
                    }, t.prototype.constraintToBox = function (t, e, i, a) {
                        var r, s, n = this.options.constraint || {};
                        return void 0 !== a ? (r = i, s = a) : (r = this.parameters.box.x + (1 & i ? 0 : this.parameters.box.width), s = this.parameters.box.y + (2 & i ? 0 : this.parameters.box.height)), void 0 !== n.minX && r + t < n.minX && (t = n.minX - r), void 0 !== n.maxX && r + t > n.maxX && (t = n.maxX - r), void 0 !== n.minY && s + e < n.minY && (e = n.minY - s), void 0 !== n.maxY && s + e > n.maxY && (e = n.maxY - s), [t, e]
                    }, t.prototype.checkAspectRatio = function (t, e) {
                        if (!this.options.saveAspectRatio) return t;
                        var i = t.slice(), a = this.parameters.box.width / this.parameters.box.height,
                            r = this.parameters.box.width + t[0], s = this.parameters.box.height - t[1], n = r / s;
                        return n < a ? (i[1] = r / a - this.parameters.box.height, e && (i[1] = -i[1])) : n > a && (i[0] = this.parameters.box.width - s * a, e && (i[0] = -i[0])), i
                    }, SVG.extend(SVG.Element, {
                        resize: function (e) {
                            return (this.remember("_resizeHandler") || new t(this)).init(e || {}), this
                        }
                    }), SVG.Element.prototype.resize.defaults = {
                        snapToAngle: .1,
                        snapToGrid: 1,
                        constraint: {},
                        saveAspectRatio: !1
                    }
                }).call(this)
            }()
        }, 769: () => {
            function t(e) {
                return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, t(e)
            }

            !function () {
                "use strict";

                function e(t) {
                    this.el = t, t.remember("_selectHandler", this), this.pointSelection = {isSelected: !1}, this.rectSelection = {isSelected: !1}, this.pointsList = {
                        lt: [0, 0],
                        rt: ["width", 0],
                        rb: ["width", "height"],
                        lb: [0, "height"],
                        t: ["width", 0],
                        r: ["width", "height"],
                        b: ["width", "height"],
                        l: [0, "height"]
                    }, this.pointCoord = function (t, e, i) {
                        var a = "string" != typeof t ? t : e[t];
                        return i ? a / 2 : a
                    }, this.pointCoords = function (t, e) {
                        var i = this.pointsList[t];
                        return {
                            x: this.pointCoord(i[0], e, "t" === t || "b" === t),
                            y: this.pointCoord(i[1], e, "r" === t || "l" === t)
                        }
                    }
                }

                e.prototype.init = function (t, e) {
                    var i = this.el.bbox();
                    this.options = {};
                    var a = this.el.selectize.defaults.points;
                    for (var r in this.el.selectize.defaults) this.options[r] = this.el.selectize.defaults[r], void 0 !== e[r] && (this.options[r] = e[r]);
                    var s = ["points", "pointsExclude"];
                    for (var r in s) {
                        var n = this.options[s[r]];
                        "string" == typeof n ? n = n.length > 0 ? n.split(/\s*,\s*/i) : [] : "boolean" == typeof n && "points" === s[r] && (n = n ? a : []), this.options[s[r]] = n
                    }
                    this.options.points = [a, this.options.points].reduce((function (t, e) {
                        return t.filter((function (t) {
                            return e.indexOf(t) > -1
                        }))
                    })), this.options.points = [this.options.points, this.options.pointsExclude].reduce((function (t, e) {
                        return t.filter((function (t) {
                            return e.indexOf(t) < 0
                        }))
                    })), this.parent = this.el.parent(), this.nested = this.nested || this.parent.group(), this.nested.matrix(new SVG.Matrix(this.el).translate(i.x, i.y)), this.options.deepSelect && -1 !== ["line", "polyline", "polygon"].indexOf(this.el.type) ? this.selectPoints(t) : this.selectRect(t), this.observe(), this.cleanup()
                }, e.prototype.selectPoints = function (t) {
                    return this.pointSelection.isSelected = t, this.pointSelection.set || (this.pointSelection.set = this.parent.set(), this.drawPoints()), this
                }, e.prototype.getPointArray = function () {
                    var t = this.el.bbox();
                    return this.el.array().valueOf().map((function (e) {
                        return [e[0] - t.x, e[1] - t.y]
                    }))
                }, e.prototype.drawPoints = function () {
                    for (var t = this, e = this.getPointArray(), i = 0, a = e.length; i < a; ++i) {
                        var r = function (e) {
                                return function (i) {
                                    (i = i || window.event).preventDefault ? i.preventDefault() : i.returnValue = !1, i.stopPropagation();
                                    var a = i.pageX || i.touches[0].pageX, r = i.pageY || i.touches[0].pageY;
                                    t.el.fire("point", {x: a, y: r, i: e, event: i})
                                }
                            }(i),
                            s = this.drawPoint(e[i][0], e[i][1]).addClass(this.options.classPoints).addClass(this.options.classPoints + "_point").on("touchstart", r).on("mousedown", r);
                        this.pointSelection.set.add(s)
                    }
                }, e.prototype.drawPoint = function (t, e) {
                    var i = this.options.pointType;
                    switch (i) {
                        case"circle":
                            return this.drawCircle(t, e);
                        case"rect":
                            return this.drawRect(t, e);
                        default:
                            if ("function" == typeof i) return i.call(this, t, e);
                            throw new Error("Unknown " + i + " point type!")
                    }
                }, e.prototype.drawCircle = function (t, e) {
                    return this.nested.circle(this.options.pointSize).center(t, e)
                }, e.prototype.drawRect = function (t, e) {
                    return this.nested.rect(this.options.pointSize, this.options.pointSize).center(t, e)
                }, e.prototype.updatePointSelection = function () {
                    var t = this.getPointArray();
                    this.pointSelection.set.each((function (e) {
                        this.cx() === t[e][0] && this.cy() === t[e][1] || this.center(t[e][0], t[e][1])
                    }))
                }, e.prototype.updateRectSelection = function () {
                    var t = this, e = this.el.bbox();
                    if (this.rectSelection.set.get(0).attr({
                        width: e.width,
                        height: e.height
                    }), this.options.points.length && this.options.points.map((function (i, a) {
                        var r = t.pointCoords(i, e);
                        t.rectSelection.set.get(a + 1).center(r.x, r.y)
                    })), this.options.rotationPoint) {
                        var i = this.rectSelection.set.length();
                        this.rectSelection.set.get(i - 1).center(e.width / 2, 20)
                    }
                }, e.prototype.selectRect = function (t) {
                    var e = this, i = this.el.bbox();

                    function a(t) {
                        return function (i) {
                            (i = i || window.event).preventDefault ? i.preventDefault() : i.returnValue = !1, i.stopPropagation();
                            var a = i.pageX || i.touches[0].pageX, r = i.pageY || i.touches[0].pageY;
                            e.el.fire(t, {x: a, y: r, event: i})
                        }
                    }

                    if (this.rectSelection.isSelected = t, this.rectSelection.set = this.rectSelection.set || this.parent.set(), this.rectSelection.set.get(0) || this.rectSelection.set.add(this.nested.rect(i.width, i.height).addClass(this.options.classRect)), this.options.points.length && this.rectSelection.set.length() < 2 && (this.options.points.map((function (t, r) {
                        var s = e.pointCoords(t, i),
                            n = e.drawPoint(s.x, s.y).attr("class", e.options.classPoints + "_" + t).on("mousedown", a(t)).on("touchstart", a(t));
                        e.rectSelection.set.add(n)
                    })), this.rectSelection.set.each((function () {
                        this.addClass(e.options.classPoints)
                    }))), this.options.rotationPoint && (this.options.points && !this.rectSelection.set.get(9) || !this.options.points && !this.rectSelection.set.get(1))) {
                        var r = function (t) {
                                (t = t || window.event).preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation();
                                var i = t.pageX || t.touches[0].pageX, a = t.pageY || t.touches[0].pageY;
                                e.el.fire("rot", {x: i, y: a, event: t})
                            },
                            s = this.drawPoint(i.width / 2, 20).attr("class", this.options.classPoints + "_rot").on("touchstart", r).on("mousedown", r);
                        this.rectSelection.set.add(s)
                    }
                }, e.prototype.handler = function () {
                    var t = this.el.bbox();
                    this.nested.matrix(new SVG.Matrix(this.el).translate(t.x, t.y)), this.rectSelection.isSelected && this.updateRectSelection(), this.pointSelection.isSelected && this.updatePointSelection()
                }, e.prototype.observe = function () {
                    var t = this;
                    if (MutationObserver) if (this.rectSelection.isSelected || this.pointSelection.isSelected) this.observerInst = this.observerInst || new MutationObserver((function () {
                        t.handler()
                    })), this.observerInst.observe(this.el.node, {attributes: !0}); else try {
                        this.observerInst.disconnect(), delete this.observerInst
                    } catch (t) {
                    } else this.el.off("DOMAttrModified.select"), (this.rectSelection.isSelected || this.pointSelection.isSelected) && this.el.on("DOMAttrModified.select", (function () {
                        t.handler()
                    }))
                }, e.prototype.cleanup = function () {
                    !this.rectSelection.isSelected && this.rectSelection.set && (this.rectSelection.set.each((function () {
                        this.remove()
                    })), this.rectSelection.set.clear(), delete this.rectSelection.set), !this.pointSelection.isSelected && this.pointSelection.set && (this.pointSelection.set.each((function () {
                        this.remove()
                    })), this.pointSelection.set.clear(), delete this.pointSelection.set), this.pointSelection.isSelected || this.rectSelection.isSelected || (this.nested.remove(), delete this.nested)
                }, SVG.extend(SVG.Element, {
                    selectize: function (i, a) {
                        return "object" === t(i) && (a = i, i = !0), (this.remember("_selectHandler") || new e(this)).init(void 0 === i || i, a || {}), this
                    }
                }), SVG.Element.prototype.selectize.defaults = {
                    points: ["lt", "rt", "rb", "lb", "t", "r", "b", "l"],
                    pointsExclude: [],
                    classRect: "svg_select_boundingRect",
                    classPoints: "svg_select_points",
                    pointSize: 7,
                    rotationPoint: !0,
                    deepSelect: !1,
                    pointType: "circle"
                }
            }()
        }, 600: () => {
            window.TreemapSquared = {}, function () {
                "use strict";
                window.TreemapSquared.generate = function () {
                    function t(e, i, a, r) {
                        this.xoffset = e, this.yoffset = i, this.height = r, this.width = a, this.shortestEdge = function () {
                            return Math.min(this.height, this.width)
                        }, this.getCoordinates = function (t) {
                            var e, i = [], a = this.xoffset, r = this.yoffset, n = s(t) / this.height,
                                o = s(t) / this.width;
                            if (this.width >= this.height) for (e = 0; e < t.length; e++) i.push([a, r, a + n, r + t[e] / n]), r += t[e] / n; else for (e = 0; e < t.length; e++) i.push([a, r, a + t[e] / o, r + o]), a += t[e] / o;
                            return i
                        }, this.cutArea = function (e) {
                            var i;
                            if (this.width >= this.height) {
                                var a = e / this.height, r = this.width - a;
                                i = new t(this.xoffset + a, this.yoffset, r, this.height)
                            } else {
                                var s = e / this.width, n = this.height - s;
                                i = new t(this.xoffset, this.yoffset + s, this.width, n)
                            }
                            return i
                        }
                    }

                    function e(e, a, r, n, o) {
                        n = void 0 === n ? 0 : n, o = void 0 === o ? 0 : o;
                        var l = i(function (t, e) {
                            var i, a = [], r = e / s(t);
                            for (i = 0; i < t.length; i++) a[i] = t[i] * r;
                            return a
                        }(e, a * r), [], new t(n, o, a, r), []);
                        return function (t) {
                            var e, i, a = [];
                            for (e = 0; e < t.length; e++) for (i = 0; i < t[e].length; i++) a.push(t[e][i]);
                            return a
                        }(l)
                    }

                    function i(t, e, r, n) {
                        var o, l, c;
                        if (0 !== t.length) return o = r.shortestEdge(), function (t, e, i) {
                            var r;
                            return 0 === t.length || ((r = t.slice()).push(e), a(t, i) >= a(r, i))
                        }(e, l = t[0], o) ? (e.push(l), i(t.slice(1), e, r, n)) : (c = r.cutArea(s(e), n), n.push(r.getCoordinates(e)), i(t, [], c, n)), n;
                        n.push(r.getCoordinates(e))
                    }

                    function a(t, e) {
                        var i = Math.min.apply(Math, t), a = Math.max.apply(Math, t), r = s(t);
                        return Math.max(Math.pow(e, 2) * a / Math.pow(r, 2), Math.pow(r, 2) / (Math.pow(e, 2) * i))
                    }

                    function r(t) {
                        return t && t.constructor === Array
                    }

                    function s(t) {
                        var e, i = 0;
                        for (e = 0; e < t.length; e++) i += t[e];
                        return i
                    }

                    function n(t) {
                        var e, i = 0;
                        if (r(t[0])) for (e = 0; e < t.length; e++) i += n(t[e]); else i = s(t);
                        return i
                    }

                    return function t(i, a, s, o, l) {
                        o = void 0 === o ? 0 : o, l = void 0 === l ? 0 : l;
                        var c, h, d = [], u = [];
                        if (r(i[0])) {
                            for (h = 0; h < i.length; h++) d[h] = n(i[h]);
                            for (c = e(d, a, s, o, l), h = 0; h < i.length; h++) u.push(t(i[h], c[h][2] - c[h][0], c[h][3] - c[h][1], c[h][0], c[h][1]))
                        } else u = e(i, a, s, o, l);
                        return u
                    }
                }()
            }()
        }, 482: function (t, e, i) {
            var a, r;

            function s(t) {
                return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, s(t)
            }

            r = "undefined" != typeof window ? window : this, a = function () {
                return function (t, e) {
                    var i = (void 0 !== this ? this : t).SVG = function (t) {
                        if (i.supported) return t = new i.Doc(t), i.parser.draw || i.prepare(), t
                    };
                    if (i.ns = "http://www.w3.org/2000/svg", i.xmlns = "http://www.w3.org/2000/xmlns/", i.xlink = "http://www.w3.org/1999/xlink", i.svgjs = "http://svgjs.dev", i.supported = !0, !i.supported) return !1;
                    i.did = 1e3, i.eid = function (t) {
                        return "Svgjs" + d(t) + i.did++
                    }, i.create = function (t) {
                        var i = e.createElementNS(this.ns, t);
                        return i.setAttribute("id", this.eid(t)), i
                    }, i.extend = function () {
                        var t, e;
                        e = (t = [].slice.call(arguments)).pop();
                        for (var a = t.length - 1; a >= 0; a--) if (t[a]) for (var r in e) t[a].prototype[r] = e[r];
                        i.Set && i.Set.inherit && i.Set.inherit()
                    }, i.invent = function (t) {
                        var e = "function" == typeof t.create ? t.create : function () {
                            this.constructor.call(this, i.create(t.create))
                        };
                        return t.inherit && (e.prototype = new t.inherit), t.extend && i.extend(e, t.extend), t.construct && i.extend(t.parent || i.Container, t.construct), e
                    }, i.adopt = function (e) {
                        return e ? e.instance ? e.instance : ((a = "svg" == e.nodeName ? e.parentNode instanceof t.SVGElement ? new i.Nested : new i.Doc : "linearGradient" == e.nodeName ? new i.Gradient("linear") : "radialGradient" == e.nodeName ? new i.Gradient("radial") : i[d(e.nodeName)] ? new (i[d(e.nodeName)]) : new i.Element(e)).type = e.nodeName, a.node = e, e.instance = a, a instanceof i.Doc && a.namespace().defs(), a.setData(JSON.parse(e.getAttribute("svgjs:data")) || {}), a) : null;
                        var a
                    }, i.prepare = function () {
                        var t = e.getElementsByTagName("body")[0],
                            a = (t ? new i.Doc(t) : i.adopt(e.documentElement).nested()).size(2, 0);
                        i.parser = {
                            body: t || e.documentElement,
                            draw: a.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node,
                            poly: a.polyline().node,
                            path: a.path().node,
                            native: i.create("svg")
                        }
                    }, i.parser = {native: i.create("svg")}, e.addEventListener("DOMContentLoaded", (function () {
                        i.parser.draw || i.prepare()
                    }), !1), i.regex = {
                        numberAndUnit: /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,
                        hex: /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
                        rgb: /rgb\((\d+),(\d+),(\d+)\)/,
                        reference: /#([a-z0-9\-_]+)/i,
                        transforms: /\)\s*,?\s*/,
                        whitespace: /\s/g,
                        isHex: /^#[a-f0-9]{3,6}$/i,
                        isRgb: /^rgb\(/,
                        isCss: /[^:]+:[^;]+;?/,
                        isBlank: /^(\s+)?$/,
                        isNumber: /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
                        isPercent: /^-?[\d\.]+%$/,
                        isImage: /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,
                        delimiter: /[\s,]+/,
                        hyphen: /([^e])\-/gi,
                        pathLetters: /[MLHVCSQTAZ]/gi,
                        isPathLetter: /[MLHVCSQTAZ]/i,
                        numbersWithDots: /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,
                        dots: /\./g
                    }, i.utils = {
                        map: function (t, e) {
                            for (var i = t.length, a = [], r = 0; r < i; r++) a.push(e(t[r]));
                            return a
                        }, filter: function (t, e) {
                            for (var i = t.length, a = [], r = 0; r < i; r++) e(t[r]) && a.push(t[r]);
                            return a
                        }, filterSVGElements: function (e) {
                            return this.filter(e, (function (e) {
                                return e instanceof t.SVGElement
                            }))
                        }
                    }, i.defaults = {
                        attrs: {
                            "fill-opacity": 1,
                            "stroke-opacity": 1,
                            "stroke-width": 0,
                            "stroke-linejoin": "miter",
                            "stroke-linecap": "butt",
                            fill: "#000000",
                            stroke: "#000000",
                            opacity: 1,
                            x: 0,
                            y: 0,
                            cx: 0,
                            cy: 0,
                            width: 0,
                            height: 0,
                            r: 0,
                            rx: 0,
                            ry: 0,
                            offset: 0,
                            "stop-opacity": 1,
                            "stop-color": "#000000",
                            "font-size": 16,
                            "font-family": "shabnam, sans-serif",
                            "text-anchor": "start"
                        }
                    }, i.Color = function (t) {
                        var e, a;
                        this.r = 0, this.g = 0, this.b = 0, t && ("string" == typeof t ? i.regex.isRgb.test(t) ? (e = i.regex.rgb.exec(t.replace(i.regex.whitespace, "")), this.r = parseInt(e[1]), this.g = parseInt(e[2]), this.b = parseInt(e[3])) : i.regex.isHex.test(t) && (e = i.regex.hex.exec(4 == (a = t).length ? ["#", a.substring(1, 2), a.substring(1, 2), a.substring(2, 3), a.substring(2, 3), a.substring(3, 4), a.substring(3, 4)].join("") : a), this.r = parseInt(e[1], 16), this.g = parseInt(e[2], 16), this.b = parseInt(e[3], 16)) : "object" === s(t) && (this.r = t.r, this.g = t.g, this.b = t.b))
                    }, i.extend(i.Color, {
                        toString: function () {
                            return this.toHex()
                        }, toHex: function () {
                            return "#" + u(this.r) + u(this.g) + u(this.b)
                        }, toRgb: function () {
                            return "rgb(" + [this.r, this.g, this.b].join() + ")"
                        }, brightness: function () {
                            return this.r / 255 * .3 + this.g / 255 * .59 + this.b / 255 * .11
                        }, morph: function (t) {
                            return this.destination = new i.Color(t), this
                        }, at: function (t) {
                            return this.destination ? (t = t < 0 ? 0 : t > 1 ? 1 : t, new i.Color({
                                r: ~~(this.r + (this.destination.r - this.r) * t),
                                g: ~~(this.g + (this.destination.g - this.g) * t),
                                b: ~~(this.b + (this.destination.b - this.b) * t)
                            })) : this
                        }
                    }), i.Color.test = function (t) {
                        return t += "", i.regex.isHex.test(t) || i.regex.isRgb.test(t)
                    }, i.Color.isRgb = function (t) {
                        return t && "number" == typeof t.r && "number" == typeof t.g && "number" == typeof t.b
                    }, i.Color.isColor = function (t) {
                        return i.Color.isRgb(t) || i.Color.test(t)
                    }, i.Array = function (t, e) {
                        0 == (t = (t || []).valueOf()).length && e && (t = e.valueOf()), this.value = this.parse(t)
                    }, i.extend(i.Array, {
                        toString: function () {
                            return this.value.join(" ")
                        }, valueOf: function () {
                            return this.value
                        }, parse: function (t) {
                            return t = t.valueOf(), Array.isArray(t) ? t : this.split(t)
                        }
                    }), i.PointArray = function (t, e) {
                        i.Array.call(this, t, e || [[0, 0]])
                    }, i.PointArray.prototype = new i.Array, i.PointArray.prototype.constructor = i.PointArray;
                    for (var a = {
                        M: function (t, e, i) {
                            return e.x = i.x = t[0], e.y = i.y = t[1], ["M", e.x, e.y]
                        }, L: function (t, e) {
                            return e.x = t[0], e.y = t[1], ["L", t[0], t[1]]
                        }, H: function (t, e) {
                            return e.x = t[0], ["H", t[0]]
                        }, V: function (t, e) {
                            return e.y = t[0], ["V", t[0]]
                        }, C: function (t, e) {
                            return e.x = t[4], e.y = t[5], ["C", t[0], t[1], t[2], t[3], t[4], t[5]]
                        }, Q: function (t, e) {
                            return e.x = t[2], e.y = t[3], ["Q", t[0], t[1], t[2], t[3]]
                        }, S: function (t, e) {
                            return e.x = t[2], e.y = t[3], ["S", t[0], t[1], t[2], t[3]]
                        }, Z: function (t, e, i) {
                            return e.x = i.x, e.y = i.y, ["Z"]
                        }
                    }, r = "mlhvqtcsaz".split(""), n = 0, o = r.length; n < o; ++n) a[r[n]] = function (t) {
                        return function (e, i, r) {
                            if ("H" == t) e[0] = e[0] + i.x; else if ("V" == t) e[0] = e[0] + i.y; else if ("A" == t) e[5] = e[5] + i.x, e[6] = e[6] + i.y; else for (var s = 0, n = e.length; s < n; ++s) e[s] = e[s] + (s % 2 ? i.y : i.x);
                            if (a && "function" == typeof a[t]) return a[t](e, i, r)
                        }
                    }(r[n].toUpperCase());
                    i.PathArray = function (t, e) {
                        i.Array.call(this, t, e || [["M", 0, 0]])
                    }, i.PathArray.prototype = new i.Array, i.PathArray.prototype.constructor = i.PathArray, i.extend(i.PathArray, {
                        toString: function () {
                            return function (t) {
                                for (var e = 0, i = t.length, a = ""; e < i; e++) a += t[e][0], null != t[e][1] && (a += t[e][1], null != t[e][2] && (a += " ", a += t[e][2], null != t[e][3] && (a += " ", a += t[e][3], a += " ", a += t[e][4], null != t[e][5] && (a += " ", a += t[e][5], a += " ", a += t[e][6], null != t[e][7] && (a += " ", a += t[e][7])))));
                                return a + " "
                            }(this.value)
                        }, move: function (t, e) {
                            var i = this.bbox();
                            return i.x, i.y, this
                        }, at: function (t) {
                            if (!this.destination) return this;
                            for (var e = this.value, a = this.destination.value, r = [], s = new i.PathArray, n = 0, o = e.length; n < o; n++) {
                                r[n] = [e[n][0]];
                                for (var l = 1, c = e[n].length; l < c; l++) r[n][l] = e[n][l] + (a[n][l] - e[n][l]) * t;
                                "A" === r[n][0] && (r[n][4] = +(0 != r[n][4]), r[n][5] = +(0 != r[n][5]))
                            }
                            return s.value = r, s
                        }, parse: function (t) {
                            if (t instanceof i.PathArray) return t.valueOf();
                            var e, r = {M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7, Z: 0};
                            t = "string" == typeof t ? t.replace(i.regex.numbersWithDots, c).replace(i.regex.pathLetters, " $& ").replace(i.regex.hyphen, "$1 -").trim().split(i.regex.delimiter) : t.reduce((function (t, e) {
                                return [].concat.call(t, e)
                            }), []);
                            var s = [], n = new i.Point, o = new i.Point, l = 0, h = t.length;
                            do {
                                i.regex.isPathLetter.test(t[l]) ? (e = t[l], ++l) : "M" == e ? e = "L" : "m" == e && (e = "l"), s.push(a[e].call(null, t.slice(l, l += r[e.toUpperCase()]).map(parseFloat), n, o))
                            } while (h > l);
                            return s
                        }, bbox: function () {
                            return i.parser.draw || i.prepare(), i.parser.path.setAttribute("d", this.toString()), i.parser.path.getBBox()
                        }
                    }), i.Number = i.invent({
                        create: function (t, e) {
                            this.value = 0, this.unit = e || "", "number" == typeof t ? this.value = isNaN(t) ? 0 : isFinite(t) ? t : t < 0 ? -34e37 : 34e37 : "string" == typeof t ? (e = t.match(i.regex.numberAndUnit)) && (this.value = parseFloat(e[1]), "%" == e[5] ? this.value /= 100 : "s" == e[5] && (this.value *= 1e3), this.unit = e[5]) : t instanceof i.Number && (this.value = t.valueOf(), this.unit = t.unit)
                        }, extend: {
                            toString: function () {
                                return ("%" == this.unit ? ~~(1e8 * this.value) / 1e6 : "s" == this.unit ? this.value / 1e3 : this.value) + this.unit
                            }, toJSON: function () {
                                return this.toString()
                            }, valueOf: function () {
                                return this.value
                            }, plus: function (t) {
                                return t = new i.Number(t), new i.Number(this + t, this.unit || t.unit)
                            }, minus: function (t) {
                                return t = new i.Number(t), new i.Number(this - t, this.unit || t.unit)
                            }, times: function (t) {
                                return t = new i.Number(t), new i.Number(this * t, this.unit || t.unit)
                            }, divide: function (t) {
                                return t = new i.Number(t), new i.Number(this / t, this.unit || t.unit)
                            }, to: function (t) {
                                var e = new i.Number(this);
                                return "string" == typeof t && (e.unit = t), e
                            }, morph: function (t) {
                                return this.destination = new i.Number(t), t.relative && (this.destination.value += this.value), this
                            }, at: function (t) {
                                return this.destination ? new i.Number(this.destination).minus(this).times(t).plus(this) : this
                            }
                        }
                    }), i.Element = i.invent({
                        create: function (t) {
                            this._stroke = i.defaults.attrs.stroke, this._event = null, this.dom = {}, (this.node = t) && (this.type = t.nodeName, this.node.instance = this, this._stroke = t.getAttribute("stroke") || this._stroke)
                        }, extend: {
                            x: function (t) {
                                return this.attr("x", t)
                            }, y: function (t) {
                                return this.attr("y", t)
                            }, cx: function (t) {
                                return null == t ? this.x() + this.width() / 2 : this.x(t - this.width() / 2)
                            }, cy: function (t) {
                                return null == t ? this.y() + this.height() / 2 : this.y(t - this.height() / 2)
                            }, move: function (t, e) {
                                return this.x(t).y(e)
                            }, center: function (t, e) {
                                return this.cx(t).cy(e)
                            }, width: function (t) {
                                return this.attr("width", t)
                            }, height: function (t) {
                                return this.attr("height", t)
                            }, size: function (t, e) {
                                var a = g(this, t, e);
                                return this.width(new i.Number(a.width)).height(new i.Number(a.height))
                            }, clone: function (t) {
                                this.writeDataToDom();
                                var e = x(this.node.cloneNode(!0));
                                return t ? t.add(e) : this.after(e), e
                            }, remove: function () {
                                return this.parent() && this.parent().removeElement(this), this
                            }, replace: function (t) {
                                return this.after(t).remove(), t
                            }, addTo: function (t) {
                                return t.put(this)
                            }, putIn: function (t) {
                                return t.add(this)
                            }, id: function (t) {
                                return this.attr("id", t)
                            }, show: function () {
                                return this.style("display", "")
                            }, hide: function () {
                                return this.style("display", "none")
                            }, visible: function () {
                                return "none" != this.style("display")
                            }, toString: function () {
                                return this.attr("id")
                            }, classes: function () {
                                var t = this.attr("class");
                                return null == t ? [] : t.trim().split(i.regex.delimiter)
                            }, hasClass: function (t) {
                                return -1 != this.classes().indexOf(t)
                            }, addClass: function (t) {
                                if (!this.hasClass(t)) {
                                    var e = this.classes();
                                    e.push(t), this.attr("class", e.join(" "))
                                }
                                return this
                            }, removeClass: function (t) {
                                return this.hasClass(t) && this.attr("class", this.classes().filter((function (e) {
                                    return e != t
                                })).join(" ")), this
                            }, toggleClass: function (t) {
                                return this.hasClass(t) ? this.removeClass(t) : this.addClass(t)
                            }, reference: function (t) {
                                return i.get(this.attr(t))
                            }, parent: function (e) {
                                var a = this;
                                if (!a.node.parentNode) return null;
                                if (a = i.adopt(a.node.parentNode), !e) return a;
                                for (; a && a.node instanceof t.SVGElement;) {
                                    if ("string" == typeof e ? a.matches(e) : a instanceof e) return a;
                                    if (!a.node.parentNode || "#document" == a.node.parentNode.nodeName) return null;
                                    a = i.adopt(a.node.parentNode)
                                }
                            }, doc: function () {
                                return this instanceof i.Doc ? this : this.parent(i.Doc)
                            }, parents: function (t) {
                                var e = [], i = this;
                                do {
                                    if (!(i = i.parent(t)) || !i.node) break;
                                    e.push(i)
                                } while (i.parent);
                                return e
                            }, matches: function (t) {
                                return function (t, e) {
                                    return (t.matches || t.matchesSelector || t.msMatchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || t.oMatchesSelector).call(t, e)
                                }(this.node, t)
                            }, native: function () {
                                return this.node
                            }, svg: function (t) {
                                var a = e.createElement("svg");
                                if (!(t && this instanceof i.Parent)) return a.appendChild(t = e.createElement("svg")), this.writeDataToDom(), t.appendChild(this.node.cloneNode(!0)), a.innerHTML.replace(/^<svg>/, "").replace(/<\/svg>$/, "");
                                a.innerHTML = "<svg>" + t.replace(/\n/, "").replace(/<([\w:-]+)([^<]+?)\/>/g, "<$1$2></$1>") + "</svg>";
                                for (var r = 0, s = a.firstChild.childNodes.length; r < s; r++) this.node.appendChild(a.firstChild.firstChild);
                                return this
                            }, writeDataToDom: function () {
                                return (this.each || this.lines) && (this.each ? this : this.lines()).each((function () {
                                    this.writeDataToDom()
                                })), this.node.removeAttribute("svgjs:data"), Object.keys(this.dom).length && this.node.setAttribute("svgjs:data", JSON.stringify(this.dom)), this
                            }, setData: function (t) {
                                return this.dom = t, this
                            }, is: function (t) {
                                return function (t, e) {
                                    return t instanceof e
                                }(this, t)
                            }
                        }
                    }), i.easing = {
                        "-": function (t) {
                            return t
                        }, "<>": function (t) {
                            return -Math.cos(t * Math.PI) / 2 + .5
                        }, ">": function (t) {
                            return Math.sin(t * Math.PI / 2)
                        }, "<": function (t) {
                            return 1 - Math.cos(t * Math.PI / 2)
                        }
                    }, i.morph = function (t) {
                        return function (e, a) {
                            return new i.MorphObj(e, a).at(t)
                        }
                    }, i.Situation = i.invent({
                        create: function (t) {
                            this.init = !1, this.reversed = !1, this.reversing = !1, this.duration = new i.Number(t.duration).valueOf(), this.delay = new i.Number(t.delay).valueOf(), this.start = +new Date + this.delay, this.finish = this.start + this.duration, this.ease = t.ease, this.loop = 0, this.loops = !1, this.animations = {}, this.attrs = {}, this.styles = {}, this.transforms = [], this.once = {}
                        }
                    }), i.FX = i.invent({
                        create: function (t) {
                            this._target = t, this.situations = [], this.active = !1, this.situation = null, this.paused = !1, this.lastPos = 0, this.pos = 0, this.absPos = 0, this._speed = 1
                        }, extend: {
                            animate: function (t, e, a) {
                                "object" === s(t) && (e = t.ease, a = t.delay, t = t.duration);
                                var r = new i.Situation({
                                    duration: t || 1e3,
                                    delay: a || 0,
                                    ease: i.easing[e || "-"] || e
                                });
                                return this.queue(r), this
                            }, target: function (t) {
                                return t && t instanceof i.Element ? (this._target = t, this) : this._target
                            }, timeToAbsPos: function (t) {
                                return (t - this.situation.start) / (this.situation.duration / this._speed)
                            }, absPosToTime: function (t) {
                                return this.situation.duration / this._speed * t + this.situation.start
                            }, startAnimFrame: function () {
                                this.stopAnimFrame(), this.animationFrame = t.requestAnimationFrame(function () {
                                    this.step()
                                }.bind(this))
                            }, stopAnimFrame: function () {
                                t.cancelAnimationFrame(this.animationFrame)
                            }, start: function () {
                                return !this.active && this.situation && (this.active = !0, this.startCurrent()), this
                            }, startCurrent: function () {
                                return this.situation.start = +new Date + this.situation.delay / this._speed, this.situation.finish = this.situation.start + this.situation.duration / this._speed, this.initAnimations().step()
                            }, queue: function (t) {
                                return ("function" == typeof t || t instanceof i.Situation) && this.situations.push(t), this.situation || (this.situation = this.situations.shift()), this
                            }, dequeue: function () {
                                return this.stop(), this.situation = this.situations.shift(), this.situation && (this.situation instanceof i.Situation ? this.start() : this.situation.call(this)), this
                            }, initAnimations: function () {
                                var t, e = this.situation;
                                if (e.init) return this;
                                for (var a in e.animations) {
                                    t = this.target()[a](), Array.isArray(t) || (t = [t]), Array.isArray(e.animations[a]) || (e.animations[a] = [e.animations[a]]);
                                    for (var r = t.length; r--;) e.animations[a][r] instanceof i.Number && (t[r] = new i.Number(t[r])), e.animations[a][r] = t[r].morph(e.animations[a][r])
                                }
                                for (var a in e.attrs) e.attrs[a] = new i.MorphObj(this.target().attr(a), e.attrs[a]);
                                for (var a in e.styles) e.styles[a] = new i.MorphObj(this.target().style(a), e.styles[a]);
                                return e.initialTransformation = this.target().matrixify(), e.init = !0, this
                            }, clearQueue: function () {
                                return this.situations = [], this
                            }, clearCurrent: function () {
                                return this.situation = null, this
                            }, stop: function (t, e) {
                                var i = this.active;
                                return this.active = !1, e && this.clearQueue(), t && this.situation && (!i && this.startCurrent(), this.atEnd()), this.stopAnimFrame(), this.clearCurrent()
                            }, after: function (t) {
                                var e = this.last();
                                return this.target().on("finished.fx", (function i(a) {
                                    a.detail.situation == e && (t.call(this, e), this.off("finished.fx", i))
                                })), this._callStart()
                            }, during: function (t) {
                                var e = this.last(), a = function (a) {
                                    a.detail.situation == e && t.call(this, a.detail.pos, i.morph(a.detail.pos), a.detail.eased, e)
                                };
                                return this.target().off("during.fx", a).on("during.fx", a), this.after((function () {
                                    this.off("during.fx", a)
                                })), this._callStart()
                            }, afterAll: function (t) {
                                var e = function e(i) {
                                    t.call(this), this.off("allfinished.fx", e)
                                };
                                return this.target().off("allfinished.fx", e).on("allfinished.fx", e), this._callStart()
                            }, last: function () {
                                return this.situations.length ? this.situations[this.situations.length - 1] : this.situation
                            }, add: function (t, e, i) {
                                return this.last()[i || "animations"][t] = e, this._callStart()
                            }, step: function (t) {
                                var e, i, a;
                                t || (this.absPos = this.timeToAbsPos(+new Date)), !1 !== this.situation.loops ? (e = Math.max(this.absPos, 0), i = Math.floor(e), !0 === this.situation.loops || i < this.situation.loops ? (this.pos = e - i, a = this.situation.loop, this.situation.loop = i) : (this.absPos = this.situation.loops, this.pos = 1, a = this.situation.loop - 1, this.situation.loop = this.situation.loops), this.situation.reversing && (this.situation.reversed = this.situation.reversed != Boolean((this.situation.loop - a) % 2))) : (this.absPos = Math.min(this.absPos, 1), this.pos = this.absPos), this.pos < 0 && (this.pos = 0), this.situation.reversed && (this.pos = 1 - this.pos);
                                var r = this.situation.ease(this.pos);
                                for (var s in this.situation.once) s > this.lastPos && s <= r && (this.situation.once[s].call(this.target(), this.pos, r), delete this.situation.once[s]);
                                return this.active && this.target().fire("during", {
                                    pos: this.pos,
                                    eased: r,
                                    fx: this,
                                    situation: this.situation
                                }), this.situation ? (this.eachAt(), 1 == this.pos && !this.situation.reversed || this.situation.reversed && 0 == this.pos ? (this.stopAnimFrame(), this.target().fire("finished", {
                                    fx: this,
                                    situation: this.situation
                                }), this.situations.length || (this.target().fire("allfinished"), this.situations.length || (this.target().off(".fx"), this.active = !1)), this.active ? this.dequeue() : this.clearCurrent()) : !this.paused && this.active && this.startAnimFrame(), this.lastPos = r, this) : this
                            }, eachAt: function () {
                                var t, e = this, a = this.target(), r = this.situation;
                                for (var s in r.animations) t = [].concat(r.animations[s]).map((function (t) {
                                    return "string" != typeof t && t.at ? t.at(r.ease(e.pos), e.pos) : t
                                })), a[s].apply(a, t);
                                for (var s in r.attrs) t = [s].concat(r.attrs[s]).map((function (t) {
                                    return "string" != typeof t && t.at ? t.at(r.ease(e.pos), e.pos) : t
                                })), a.attr.apply(a, t);
                                for (var s in r.styles) t = [s].concat(r.styles[s]).map((function (t) {
                                    return "string" != typeof t && t.at ? t.at(r.ease(e.pos), e.pos) : t
                                })), a.style.apply(a, t);
                                if (r.transforms.length) {
                                    t = r.initialTransformation, s = 0;
                                    for (var n = r.transforms.length; s < n; s++) {
                                        var o = r.transforms[s];
                                        o instanceof i.Matrix ? t = o.relative ? t.multiply((new i.Matrix).morph(o).at(r.ease(this.pos))) : t.morph(o).at(r.ease(this.pos)) : (o.relative || o.undo(t.extract()), t = t.multiply(o.at(r.ease(this.pos))))
                                    }
                                    a.matrix(t)
                                }
                                return this
                            }, once: function (t, e, i) {
                                var a = this.last();
                                return i || (t = a.ease(t)), a.once[t] = e, this
                            }, _callStart: function () {
                                return setTimeout(function () {
                                    this.start()
                                }.bind(this), 0), this
                            }
                        }, parent: i.Element, construct: {
                            animate: function (t, e, a) {
                                return (this.fx || (this.fx = new i.FX(this))).animate(t, e, a)
                            }, delay: function (t) {
                                return (this.fx || (this.fx = new i.FX(this))).delay(t)
                            }, stop: function (t, e) {
                                return this.fx && this.fx.stop(t, e), this
                            }, finish: function () {
                                return this.fx && this.fx.finish(), this
                            }
                        }
                    }), i.MorphObj = i.invent({
                        create: function (t, e) {
                            return i.Color.isColor(e) ? new i.Color(t).morph(e) : i.regex.delimiter.test(t) ? i.regex.pathLetters.test(t) ? new i.PathArray(t).morph(e) : new i.Array(t).morph(e) : i.regex.numberAndUnit.test(e) ? new i.Number(t).morph(e) : (this.value = t, void (this.destination = e))
                        }, extend: {
                            at: function (t, e) {
                                return e < 1 ? this.value : this.destination
                            }, valueOf: function () {
                                return this.value
                            }
                        }
                    }), i.extend(i.FX, {
                        attr: function (t, e, i) {
                            if ("object" === s(t)) for (var a in t) this.attr(a, t[a]); else this.add(t, e, "attrs");
                            return this
                        }, plot: function (t, e, i, a) {
                            return 4 == arguments.length ? this.plot([t, e, i, a]) : this.add("plot", new (this.target().morphArray)(t))
                        }
                    }), i.Box = i.invent({
                        create: function (t, e, a, r) {
                            if (!("object" !== s(t) || t instanceof i.Element)) return i.Box.call(this, null != t.left ? t.left : t.x, null != t.top ? t.top : t.y, t.width, t.height);
                            var n;
                            4 == arguments.length && (this.x = t, this.y = e, this.width = a, this.height = r), null == (n = this).x && (n.x = 0, n.y = 0, n.width = 0, n.height = 0), n.w = n.width, n.h = n.height, n.x2 = n.x + n.width, n.y2 = n.y + n.height, n.cx = n.x + n.width / 2, n.cy = n.y + n.height / 2
                        }
                    }), i.BBox = i.invent({
                        create: function (t) {
                            if (i.Box.apply(this, [].slice.call(arguments)), t instanceof i.Element) {
                                var a;
                                try {
                                    if (!e.documentElement.contains) {
                                        for (var r = t.node; r.parentNode;) r = r.parentNode;
                                        if (r != e) throw new Error("Element not in the dom")
                                    }
                                    a = t.node.getBBox()
                                } catch (e) {
                                    if (t instanceof i.Shape) {
                                        i.parser.draw || i.prepare();
                                        var s = t.clone(i.parser.draw.instance).show();
                                        s && s.node && "function" == typeof s.node.getBBox && (a = s.node.getBBox()), s && "function" == typeof s.remove && s.remove()
                                    } else a = {
                                        x: t.node.clientLeft,
                                        y: t.node.clientTop,
                                        width: t.node.clientWidth,
                                        height: t.node.clientHeight
                                    }
                                }
                                i.Box.call(this, a)
                            }
                        }, inherit: i.Box, parent: i.Element, construct: {
                            bbox: function () {
                                return new i.BBox(this)
                            }
                        }
                    }), i.BBox.prototype.constructor = i.BBox, i.Matrix = i.invent({
                        create: function (t) {
                            var e = p([1, 0, 0, 1, 0, 0]);
                            t = null === t ? e : t instanceof i.Element ? t.matrixify() : "string" == typeof t ? p(t.split(i.regex.delimiter).map(parseFloat)) : 6 == arguments.length ? p([].slice.call(arguments)) : Array.isArray(t) ? p(t) : t && "object" === s(t) ? t : e;
                            for (var a = v.length - 1; a >= 0; --a) this[v[a]] = null != t[v[a]] ? t[v[a]] : e[v[a]]
                        }, extend: {
                            extract: function () {
                                var t = f(this, 0, 1), e = (f(this, 1, 0), 180 / Math.PI * Math.atan2(t.y, t.x) - 90);
                                return {
                                    x: this.e,
                                    y: this.f,
                                    transformedX: (this.e * Math.cos(e * Math.PI / 180) + this.f * Math.sin(e * Math.PI / 180)) / Math.sqrt(this.a * this.a + this.b * this.b),
                                    transformedY: (this.f * Math.cos(e * Math.PI / 180) + this.e * Math.sin(-e * Math.PI / 180)) / Math.sqrt(this.c * this.c + this.d * this.d),
                                    rotation: e,
                                    a: this.a,
                                    b: this.b,
                                    c: this.c,
                                    d: this.d,
                                    e: this.e,
                                    f: this.f,
                                    matrix: new i.Matrix(this)
                                }
                            }, clone: function () {
                                return new i.Matrix(this)
                            }, morph: function (t) {
                                return this.destination = new i.Matrix(t), this
                            }, multiply: function (t) {
                                return new i.Matrix(this.native().multiply(function (t) {
                                    return t instanceof i.Matrix || (t = new i.Matrix(t)), t
                                }(t).native()))
                            }, inverse: function () {
                                return new i.Matrix(this.native().inverse())
                            }, translate: function (t, e) {
                                return new i.Matrix(this.native().translate(t || 0, e || 0))
                            }, native: function () {
                                for (var t = i.parser.native.createSVGMatrix(), e = v.length - 1; e >= 0; e--) t[v[e]] = this[v[e]];
                                return t
                            }, toString: function () {
                                return "matrix(" + b(this.a) + "," + b(this.b) + "," + b(this.c) + "," + b(this.d) + "," + b(this.e) + "," + b(this.f) + ")"
                            }
                        }, parent: i.Element, construct: {
                            ctm: function () {
                                return new i.Matrix(this.node.getCTM())
                            }, screenCTM: function () {
                                if (this instanceof i.Nested) {
                                    var t = this.rect(1, 1), e = t.node.getScreenCTM();
                                    return t.remove(), new i.Matrix(e)
                                }
                                return new i.Matrix(this.node.getScreenCTM())
                            }
                        }
                    }), i.Point = i.invent({
                        create: function (t, e) {
                            var i;
                            i = Array.isArray(t) ? {x: t[0], y: t[1]} : "object" === s(t) ? {
                                x: t.x,
                                y: t.y
                            } : null != t ? {x: t, y: null != e ? e : t} : {x: 0, y: 0}, this.x = i.x, this.y = i.y
                        }, extend: {
                            clone: function () {
                                return new i.Point(this)
                            }, morph: function (t, e) {
                                return this.destination = new i.Point(t, e), this
                            }
                        }
                    }), i.extend(i.Element, {
                        point: function (t, e) {
                            return new i.Point(t, e).transform(this.screenCTM().inverse())
                        }
                    }), i.extend(i.Element, {
                        attr: function (t, e, a) {
                            if (null == t) {
                                for (t = {}, a = (e = this.node.attributes).length - 1; a >= 0; a--) t[e[a].nodeName] = i.regex.isNumber.test(e[a].nodeValue) ? parseFloat(e[a].nodeValue) : e[a].nodeValue;
                                return t
                            }
                            if ("object" === s(t)) for (var r in t) this.attr(r, t[r]); else if (null === e) this.node.removeAttribute(t); else {
                                if (null == e) return null == (e = this.node.getAttribute(t)) ? i.defaults.attrs[t] : i.regex.isNumber.test(e) ? parseFloat(e) : e;
                                "stroke-width" == t ? this.attr("stroke", parseFloat(e) > 0 ? this._stroke : null) : "stroke" == t && (this._stroke = e), "fill" != t && "stroke" != t || (i.regex.isImage.test(e) && (e = this.doc().defs().image(e, 0, 0)), e instanceof i.Image && (e = this.doc().defs().pattern(0, 0, (function () {
                                    this.add(e)
                                })))), "number" == typeof e ? e = new i.Number(e) : i.Color.isColor(e) ? e = new i.Color(e) : Array.isArray(e) && (e = new i.Array(e)), "leading" == t ? this.leading && this.leading(e) : "string" == typeof a ? this.node.setAttributeNS(a, t, e.toString()) : this.node.setAttribute(t, e.toString()), !this.rebuild || "font-size" != t && "x" != t || this.rebuild(t, e)
                            }
                            return this
                        }
                    }), i.extend(i.Element, {
                        transform: function (t, e) {
                            var a;
                            return "object" !== s(t) ? (a = new i.Matrix(this).extract(), "string" == typeof t ? a[t] : a) : (a = new i.Matrix(this), e = !!e || !!t.relative, null != t.a && (a = e ? a.multiply(new i.Matrix(t)) : new i.Matrix(t)), this.attr("transform", a))
                        }
                    }), i.extend(i.Element, {
                        untransform: function () {
                            return this.attr("transform", null)
                        }, matrixify: function () {
                            return (this.attr("transform") || "").split(i.regex.transforms).slice(0, -1).map((function (t) {
                                var e = t.trim().split("(");
                                return [e[0], e[1].split(i.regex.delimiter).map((function (t) {
                                    return parseFloat(t)
                                }))]
                            })).reduce((function (t, e) {
                                return "matrix" == e[0] ? t.multiply(p(e[1])) : t[e[0]].apply(t, e[1])
                            }), new i.Matrix)
                        }, toParent: function (t) {
                            if (this == t) return this;
                            var e = this.screenCTM(), i = t.screenCTM().inverse();
                            return this.addTo(t).untransform().transform(i.multiply(e)), this
                        }, toDoc: function () {
                            return this.toParent(this.doc())
                        }
                    }), i.Transformation = i.invent({
                        create: function (t, e) {
                            if (arguments.length > 1 && "boolean" != typeof e) return this.constructor.call(this, [].slice.call(arguments));
                            if (Array.isArray(t)) for (var i = 0, a = this.arguments.length; i < a; ++i) this[this.arguments[i]] = t[i]; else if (t && "object" === s(t)) for (i = 0, a = this.arguments.length; i < a; ++i) this[this.arguments[i]] = t[this.arguments[i]];
                            this.inversed = !1, !0 === e && (this.inversed = !0)
                        }
                    }), i.Translate = i.invent({
                        parent: i.Matrix, inherit: i.Transformation, create: function (t, e) {
                            this.constructor.apply(this, [].slice.call(arguments))
                        }, extend: {arguments: ["transformedX", "transformedY"], method: "translate"}
                    }), i.extend(i.Element, {
                        style: function (t, e) {
                            if (0 == arguments.length) return this.node.style.cssText || "";
                            if (arguments.length < 2) if ("object" === s(t)) for (var a in t) this.style(a, t[a]); else {
                                if (!i.regex.isCss.test(t)) return this.node.style[h(t)];
                                for (t = t.split(/\s*;\s*/).filter((function (t) {
                                    return !!t
                                })).map((function (t) {
                                    return t.split(/\s*:\s*/)
                                })); e = t.pop();) this.style(e[0], e[1])
                            } else this.node.style[h(t)] = null === e || i.regex.isBlank.test(e) ? "" : e;
                            return this
                        }
                    }), i.Parent = i.invent({
                        create: function (t) {
                            this.constructor.call(this, t)
                        }, inherit: i.Element, extend: {
                            children: function () {
                                return i.utils.map(i.utils.filterSVGElements(this.node.childNodes), (function (t) {
                                    return i.adopt(t)
                                }))
                            }, add: function (t, e) {
                                return null == e ? this.node.appendChild(t.node) : t.node != this.node.childNodes[e] && this.node.insertBefore(t.node, this.node.childNodes[e]), this
                            }, put: function (t, e) {
                                return this.add(t, e), t
                            }, has: function (t) {
                                return this.index(t) >= 0
                            }, index: function (t) {
                                return [].slice.call(this.node.childNodes).indexOf(t.node)
                            }, get: function (t) {
                                return i.adopt(this.node.childNodes[t])
                            }, first: function () {
                                return this.get(0)
                            }, last: function () {
                                return this.get(this.node.childNodes.length - 1)
                            }, each: function (t, e) {
                                for (var a = this.children(), r = 0, s = a.length; r < s; r++) a[r] instanceof i.Element && t.apply(a[r], [r, a]), e && a[r] instanceof i.Container && a[r].each(t, e);
                                return this
                            }, removeElement: function (t) {
                                return this.node.removeChild(t.node), this
                            }, clear: function () {
                                for (; this.node.hasChildNodes();) this.node.removeChild(this.node.lastChild);
                                return delete this._defs, this
                            }, defs: function () {
                                return this.doc().defs()
                            }
                        }
                    }), i.extend(i.Parent, {
                        ungroup: function (t, e) {
                            return 0 === e || this instanceof i.Defs || this.node == i.parser.draw || (t = t || (this instanceof i.Doc ? this : this.parent(i.Parent)), e = e || 1 / 0, this.each((function () {
                                return this instanceof i.Defs ? this : this instanceof i.Parent ? this.ungroup(t, e - 1) : this.toParent(t)
                            })), this.node.firstChild || this.remove()), this
                        }, flatten: function (t, e) {
                            return this.ungroup(t, e)
                        }
                    }), i.Container = i.invent({
                        create: function (t) {
                            this.constructor.call(this, t)
                        }, inherit: i.Parent
                    }), i.ViewBox = i.invent({
                        parent: i.Container,
                        construct: {}
                    }), ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel"].forEach((function (t) {
                        i.Element.prototype[t] = function (e) {
                            return i.on(this.node, t, e), this
                        }
                    })), i.listeners = [], i.handlerMap = [], i.listenerId = 0, i.on = function (t, e, a, r, s) {
                        var n = a.bind(r || t.instance || t),
                            o = (i.handlerMap.indexOf(t) + 1 || i.handlerMap.push(t)) - 1, l = e.split(".")[0],
                            c = e.split(".")[1] || "*";
                        i.listeners[o] = i.listeners[o] || {}, i.listeners[o][l] = i.listeners[o][l] || {}, i.listeners[o][l][c] = i.listeners[o][l][c] || {}, a._svgjsListenerId || (a._svgjsListenerId = ++i.listenerId), i.listeners[o][l][c][a._svgjsListenerId] = n, t.addEventListener(l, n, s || {passive: !0})
                    }, i.off = function (t, e, a) {
                        var r = i.handlerMap.indexOf(t), s = e && e.split(".")[0], n = e && e.split(".")[1], o = "";
                        if (-1 != r) if (a) {
                            if ("function" == typeof a && (a = a._svgjsListenerId), !a) return;
                            i.listeners[r][s] && i.listeners[r][s][n || "*"] && (t.removeEventListener(s, i.listeners[r][s][n || "*"][a], !1), delete i.listeners[r][s][n || "*"][a])
                        } else if (n && s) {
                            if (i.listeners[r][s] && i.listeners[r][s][n]) {
                                for (var l in i.listeners[r][s][n]) i.off(t, [s, n].join("."), l);
                                delete i.listeners[r][s][n]
                            }
                        } else if (n) for (var c in i.listeners[r]) for (var o in i.listeners[r][c]) n === o && i.off(t, [c, n].join(".")); else if (s) {
                            if (i.listeners[r][s]) {
                                for (var o in i.listeners[r][s]) i.off(t, [s, o].join("."));
                                delete i.listeners[r][s]
                            }
                        } else {
                            for (var c in i.listeners[r]) i.off(t, c);
                            delete i.listeners[r], delete i.handlerMap[r]
                        }
                    }, i.extend(i.Element, {
                        on: function (t, e, a, r) {
                            return i.on(this.node, t, e, a, r), this
                        }, off: function (t, e) {
                            return i.off(this.node, t, e), this
                        }, fire: function (e, a) {
                            return e instanceof t.Event ? this.node.dispatchEvent(e) : this.node.dispatchEvent(e = new i.CustomEvent(e, {
                                detail: a,
                                cancelable: !0
                            })), this._event = e, this
                        }, event: function () {
                            return this._event
                        }
                    }), i.Defs = i.invent({create: "defs", inherit: i.Container}), i.G = i.invent({
                        create: "g",
                        inherit: i.Container,
                        extend: {
                            x: function (t) {
                                return null == t ? this.transform("x") : this.transform({x: t - this.x()}, !0)
                            }
                        },
                        construct: {
                            group: function () {
                                return this.put(new i.G)
                            }
                        }
                    }), i.Doc = i.invent({
                        create: function (t) {
                            t && ("svg" == (t = "string" == typeof t ? e.getElementById(t) : t).nodeName ? this.constructor.call(this, t) : (this.constructor.call(this, i.create("svg")), t.appendChild(this.node), this.size("100%", "100%")), this.namespace().defs())
                        }, inherit: i.Container, extend: {
                            namespace: function () {
                                return this.attr({
                                    xmlns: i.ns,
                                    version: "1.1"
                                }).attr("xmlns:xlink", i.xlink, i.xmlns).attr("xmlns:svgjs", i.svgjs, i.xmlns)
                            }, defs: function () {
                                var t;
                                return this._defs || ((t = this.node.getElementsByTagName("defs")[0]) ? this._defs = i.adopt(t) : this._defs = new i.Defs, this.node.appendChild(this._defs.node)), this._defs
                            }, parent: function () {
                                return this.node.parentNode && "#document" != this.node.parentNode.nodeName ? this.node.parentNode : null
                            }, remove: function () {
                                return this.parent() && this.parent().removeChild(this.node), this
                            }, clear: function () {
                                for (; this.node.hasChildNodes();) this.node.removeChild(this.node.lastChild);
                                return delete this._defs, i.parser.draw && !i.parser.draw.parentNode && this.node.appendChild(i.parser.draw), this
                            }, clone: function (t) {
                                this.writeDataToDom();
                                var e = this.node, i = x(e.cloneNode(!0));
                                return t ? (t.node || t).appendChild(i.node) : e.parentNode.insertBefore(i.node, e.nextSibling), i
                            }
                        }
                    }), i.extend(i.Element, {}), i.Gradient = i.invent({
                        create: function (t) {
                            this.constructor.call(this, i.create(t + "Gradient")), this.type = t
                        }, inherit: i.Container, extend: {
                            at: function (t, e, a) {
                                return this.put(new i.Stop).update(t, e, a)
                            }, update: function (t) {
                                return this.clear(), "function" == typeof t && t.call(this, this), this
                            }, fill: function () {
                                return "url(#" + this.id() + ")"
                            }, toString: function () {
                                return this.fill()
                            }, attr: function (t, e, a) {
                                return "transform" == t && (t = "gradientTransform"), i.Container.prototype.attr.call(this, t, e, a)
                            }
                        }, construct: {
                            gradient: function (t, e) {
                                return this.defs().gradient(t, e)
                            }
                        }
                    }), i.extend(i.Gradient, i.FX, {
                        from: function (t, e) {
                            return "radial" == (this._target || this).type ? this.attr({
                                fx: new i.Number(t),
                                fy: new i.Number(e)
                            }) : this.attr({x1: new i.Number(t), y1: new i.Number(e)})
                        }, to: function (t, e) {
                            return "radial" == (this._target || this).type ? this.attr({
                                cx: new i.Number(t),
                                cy: new i.Number(e)
                            }) : this.attr({x2: new i.Number(t), y2: new i.Number(e)})
                        }
                    }), i.extend(i.Defs, {
                        gradient: function (t, e) {
                            return this.put(new i.Gradient(t)).update(e)
                        }
                    }), i.Stop = i.invent({
                        create: "stop", inherit: i.Element, extend: {
                            update: function (t) {
                                return ("number" == typeof t || t instanceof i.Number) && (t = {
                                    offset: arguments[0],
                                    color: arguments[1],
                                    opacity: arguments[2]
                                }), null != t.opacity && this.attr("stop-opacity", t.opacity), null != t.color && this.attr("stop-color", t.color), null != t.offset && this.attr("offset", new i.Number(t.offset)), this
                            }
                        }
                    }), i.Pattern = i.invent({
                        create: "pattern", inherit: i.Container, extend: {
                            fill: function () {
                                return "url(#" + this.id() + ")"
                            }, update: function (t) {
                                return this.clear(), "function" == typeof t && t.call(this, this), this
                            }, toString: function () {
                                return this.fill()
                            }, attr: function (t, e, a) {
                                return "transform" == t && (t = "patternTransform"), i.Container.prototype.attr.call(this, t, e, a)
                            }
                        }, construct: {
                            pattern: function (t, e, i) {
                                return this.defs().pattern(t, e, i)
                            }
                        }
                    }), i.extend(i.Defs, {
                        pattern: function (t, e, a) {
                            return this.put(new i.Pattern).update(a).attr({
                                x: 0,
                                y: 0,
                                width: t,
                                height: e,
                                patternUnits: "userSpaceOnUse"
                            })
                        }
                    }), i.Shape = i.invent({
                        create: function (t) {
                            this.constructor.call(this, t)
                        }, inherit: i.Element
                    }), i.Symbol = i.invent({
                        create: "symbol", inherit: i.Container, construct: {
                            symbol: function () {
                                return this.put(new i.Symbol)
                            }
                        }
                    }), i.Use = i.invent({
                        create: "use", inherit: i.Shape, extend: {
                            element: function (t, e) {
                                return this.attr("href", (e || "") + "#" + t, i.xlink)
                            }
                        }, construct: {
                            use: function (t, e) {
                                return this.put(new i.Use).element(t, e)
                            }
                        }
                    }), i.Rect = i.invent({
                        create: "rect", inherit: i.Shape, construct: {
                            rect: function (t, e) {
                                return this.put(new i.Rect).size(t, e)
                            }
                        }
                    }), i.Circle = i.invent({
                        create: "circle", inherit: i.Shape, construct: {
                            circle: function (t) {
                                return this.put(new i.Circle).rx(new i.Number(t).divide(2)).move(0, 0)
                            }
                        }
                    }), i.extend(i.Circle, i.FX, {
                        rx: function (t) {
                            return this.attr("r", t)
                        }, ry: function (t) {
                            return this.rx(t)
                        }
                    }), i.Ellipse = i.invent({
                        create: "ellipse",
                        inherit: i.Shape,
                        construct: {
                            ellipse: function (t, e) {
                                return this.put(new i.Ellipse).size(t, e).move(0, 0)
                            }
                        }
                    }), i.extend(i.Ellipse, i.Rect, i.FX, {
                        rx: function (t) {
                            return this.attr("rx", t)
                        }, ry: function (t) {
                            return this.attr("ry", t)
                        }
                    }), i.extend(i.Circle, i.Ellipse, {
                        x: function (t) {
                            return null == t ? this.cx() - this.rx() : this.cx(t + this.rx())
                        }, y: function (t) {
                            return null == t ? this.cy() - this.ry() : this.cy(t + this.ry())
                        }, cx: function (t) {
                            return null == t ? this.attr("cx") : this.attr("cx", t)
                        }, cy: function (t) {
                            return null == t ? this.attr("cy") : this.attr("cy", t)
                        }, width: function (t) {
                            return null == t ? 2 * this.rx() : this.rx(new i.Number(t).divide(2))
                        }, height: function (t) {
                            return null == t ? 2 * this.ry() : this.ry(new i.Number(t).divide(2))
                        }, size: function (t, e) {
                            var a = g(this, t, e);
                            return this.rx(new i.Number(a.width).divide(2)).ry(new i.Number(a.height).divide(2))
                        }
                    }), i.Line = i.invent({
                        create: "line", inherit: i.Shape, extend: {
                            array: function () {
                                return new i.PointArray([[this.attr("x1"), this.attr("y1")], [this.attr("x2"), this.attr("y2")]])
                            }, plot: function (t, e, a, r) {
                                return null == t ? this.array() : (t = void 0 !== e ? {
                                    x1: t,
                                    y1: e,
                                    x2: a,
                                    y2: r
                                } : new i.PointArray(t).toLine(), this.attr(t))
                            }, move: function (t, e) {
                                return this.attr(this.array().move(t, e).toLine())
                            }, size: function (t, e) {
                                var i = g(this, t, e);
                                return this.attr(this.array().size(i.width, i.height).toLine())
                            }
                        }, construct: {
                            line: function (t, e, a, r) {
                                return i.Line.prototype.plot.apply(this.put(new i.Line), null != t ? [t, e, a, r] : [0, 0, 0, 0])
                            }
                        }
                    }), i.Polyline = i.invent({
                        create: "polyline",
                        inherit: i.Shape,
                        construct: {
                            polyline: function (t) {
                                return this.put(new i.Polyline).plot(t || new i.PointArray)
                            }
                        }
                    }), i.Polygon = i.invent({
                        create: "polygon", inherit: i.Shape, construct: {
                            polygon: function (t) {
                                return this.put(new i.Polygon).plot(t || new i.PointArray)
                            }
                        }
                    }), i.extend(i.Polyline, i.Polygon, {
                        array: function () {
                            return this._array || (this._array = new i.PointArray(this.attr("points")))
                        }, plot: function (t) {
                            return null == t ? this.array() : this.clear().attr("points", "string" == typeof t ? t : this._array = new i.PointArray(t))
                        }, clear: function () {
                            return delete this._array, this
                        }, move: function (t, e) {
                            return this.attr("points", this.array().move(t, e))
                        }, size: function (t, e) {
                            var i = g(this, t, e);
                            return this.attr("points", this.array().size(i.width, i.height))
                        }
                    }), i.extend(i.Line, i.Polyline, i.Polygon, {
                        morphArray: i.PointArray, x: function (t) {
                            return null == t ? this.bbox().x : this.move(t, this.bbox().y)
                        }, y: function (t) {
                            return null == t ? this.bbox().y : this.move(this.bbox().x, t)
                        }, width: function (t) {
                            var e = this.bbox();
                            return null == t ? e.width : this.size(t, e.height)
                        }, height: function (t) {
                            var e = this.bbox();
                            return null == t ? e.height : this.size(e.width, t)
                        }
                    }), i.Path = i.invent({
                        create: "path",
                        inherit: i.Shape,
                        extend: {
                            morphArray: i.PathArray, array: function () {
                                return this._array || (this._array = new i.PathArray(this.attr("d")))
                            }, plot: function (t) {
                                return null == t ? this.array() : this.clear().attr("d", "string" == typeof t ? t : this._array = new i.PathArray(t))
                            }, clear: function () {
                                return delete this._array, this
                            }
                        },
                        construct: {
                            path: function (t) {
                                return this.put(new i.Path).plot(t || new i.PathArray)
                            }
                        }
                    }), i.Image = i.invent({
                        create: "image", inherit: i.Shape, extend: {
                            load: function (e) {
                                if (!e) return this;
                                var a = this, r = new t.Image;
                                return i.on(r, "load", (function () {
                                    i.off(r);
                                    var t = a.parent(i.Pattern);
                                    null !== t && (0 == a.width() && 0 == a.height() && a.size(r.width, r.height), t && 0 == t.width() && 0 == t.height() && t.size(a.width(), a.height()), "function" == typeof a._loaded && a._loaded.call(a, {
                                        width: r.width,
                                        height: r.height,
                                        ratio: r.width / r.height,
                                        url: e
                                    }))
                                })), i.on(r, "error", (function (t) {
                                    i.off(r), "function" == typeof a._error && a._error.call(a, t)
                                })), this.attr("href", r.src = this.src = e, i.xlink)
                            }, loaded: function (t) {
                                return this._loaded = t, this
                            }, error: function (t) {
                                return this._error = t, this
                            }
                        }, construct: {
                            image: function (t, e, a) {
                                return this.put(new i.Image).load(t).size(e || 0, a || e || 0)
                            }
                        }
                    }), i.Text = i.invent({
                        create: function () {
                            this.constructor.call(this, i.create("text")), this.dom.leading = new i.Number(1.3), this._rebuild = !0, this._build = !1, this.attr("font-family", i.defaults.attrs["font-family"])
                        }, inherit: i.Shape, extend: {
                            x: function (t) {
                                return null == t ? this.attr("x") : this.attr("x", t)
                            }, text: function (t) {
                                if (void 0 === t) {
                                    t = "";
                                    for (var e = this.node.childNodes, a = 0, r = e.length; a < r; ++a) 0 != a && 3 != e[a].nodeType && 1 == i.adopt(e[a]).dom.newLined && (t += "\n"), t += e[a].textContent;
                                    return t
                                }
                                if (this.clear().build(!0), "function" == typeof t) t.call(this, this); else {
                                    a = 0;
                                    for (var s = (t = t.split("\n")).length; a < s; a++) this.tspan(t[a]).newLine()
                                }
                                return this.build(!1).rebuild()
                            }, size: function (t) {
                                return this.attr("font-size", t).rebuild()
                            }, leading: function (t) {
                                return null == t ? this.dom.leading : (this.dom.leading = new i.Number(t), this.rebuild())
                            }, lines: function () {
                                var t = (this.textPath && this.textPath() || this).node,
                                    e = i.utils.map(i.utils.filterSVGElements(t.childNodes), (function (t) {
                                        return i.adopt(t)
                                    }));
                                return new i.Set(e)
                            }, rebuild: function (t) {
                                if ("boolean" == typeof t && (this._rebuild = t), this._rebuild) {
                                    var e = this, a = 0, r = this.dom.leading * new i.Number(this.attr("font-size"));
                                    this.lines().each((function () {
                                        this.dom.newLined && (e.textPath() || this.attr("x", e.attr("x")), "\n" == this.text() ? a += r : (this.attr("dy", r + a), a = 0))
                                    })), this.fire("rebuild")
                                }
                                return this
                            }, build: function (t) {
                                return this._build = !!t, this
                            }, setData: function (t) {
                                return this.dom = t, this.dom.leading = new i.Number(t.leading || 1.3), this
                            }
                        }, construct: {
                            text: function (t) {
                                return this.put(new i.Text).text(t)
                            }, plain: function (t) {
                                return this.put(new i.Text).plain(t)
                            }
                        }
                    }), i.Tspan = i.invent({
                        create: "tspan", inherit: i.Shape, extend: {
                            text: function (t) {
                                return null == t ? this.node.textContent + (this.dom.newLined ? "\n" : "") : ("function" == typeof t ? t.call(this, this) : this.plain(t), this)
                            }, dx: function (t) {
                                return this.attr("dx", t)
                            }, dy: function (t) {
                                return this.attr("dy", t)
                            }, newLine: function () {
                                var t = this.parent(i.Text);
                                return this.dom.newLined = !0, this.dy(t.dom.leading * t.attr("font-size")).attr("x", t.x())
                            }
                        }
                    }), i.extend(i.Text, i.Tspan, {
                        plain: function (t) {
                            return !1 === this._build && this.clear(), this.node.appendChild(e.createTextNode(t)), this
                        }, tspan: function (t) {
                            var e = (this.textPath && this.textPath() || this).node, a = new i.Tspan;
                            return !1 === this._build && this.clear(), e.appendChild(a.node), a.text(t)
                        }, clear: function () {
                            for (var t = (this.textPath && this.textPath() || this).node; t.hasChildNodes();) t.removeChild(t.lastChild);
                            return this
                        }, length: function () {
                            return this.node.getComputedTextLength()
                        }
                    }), i.TextPath = i.invent({
                        create: "textPath",
                        inherit: i.Parent,
                        parent: i.Text,
                        construct: {
                            morphArray: i.PathArray, array: function () {
                                var t = this.track();
                                return t ? t.array() : null
                            }, plot: function (t) {
                                var e = this.track(), i = null;
                                return e && (i = e.plot(t)), null == t ? i : this
                            }, track: function () {
                                var t = this.textPath();
                                if (t) return t.reference("href")
                            }, textPath: function () {
                                if (this.node.firstChild && "textPath" == this.node.firstChild.nodeName) return i.adopt(this.node.firstChild)
                            }
                        }
                    }), i.Nested = i.invent({
                        create: function () {
                            this.constructor.call(this, i.create("svg")), this.style("overflow", "visible")
                        }, inherit: i.Container, construct: {
                            nested: function () {
                                return this.put(new i.Nested)
                            }
                        }
                    });
                    var l = {
                        stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"],
                        fill: ["color", "opacity", "rule"],
                        prefix: function (t, e) {
                            return "color" == e ? t : t + "-" + e
                        }
                    };

                    function c(t, e, a, r) {
                        return a + r.replace(i.regex.dots, " .")
                    }

                    function h(t) {
                        return t.toLowerCase().replace(/-(.)/g, (function (t, e) {
                            return e.toUpperCase()
                        }))
                    }

                    function d(t) {
                        return t.charAt(0).toUpperCase() + t.slice(1)
                    }

                    function u(t) {
                        var e = t.toString(16);
                        return 1 == e.length ? "0" + e : e
                    }

                    function g(t, e, i) {
                        if (null == e || null == i) {
                            var a = t.bbox();
                            null == e ? e = a.width / a.height * i : null == i && (i = a.height / a.width * e)
                        }
                        return {width: e, height: i}
                    }

                    function f(t, e, i) {
                        return {x: e * t.a + i * t.c + 0, y: e * t.b + i * t.d + 0}
                    }

                    function p(t) {
                        return {a: t[0], b: t[1], c: t[2], d: t[3], e: t[4], f: t[5]}
                    }

                    function x(e) {
                        for (var a = e.childNodes.length - 1; a >= 0; a--) e.childNodes[a] instanceof t.SVGElement && x(e.childNodes[a]);
                        return i.adopt(e).id(i.eid(e.nodeName))
                    }

                    function b(t) {
                        return Math.abs(t) > 1e-37 ? t : 0
                    }

                    ["fill", "stroke"].forEach((function (t) {
                        var e = {};
                        e[t] = function (e) {
                            if (void 0 === e) return this;
                            if ("string" == typeof e || i.Color.isRgb(e) || e && "function" == typeof e.fill) this.attr(t, e); else for (var a = l[t].length - 1; a >= 0; a--) null != e[l[t][a]] && this.attr(l.prefix(t, l[t][a]), e[l[t][a]]);
                            return this
                        }, i.extend(i.Element, i.FX, e)
                    })), i.extend(i.Element, i.FX, {
                        translate: function (t, e) {
                            return this.transform({x: t, y: e})
                        }, matrix: function (t) {
                            return this.attr("transform", new i.Matrix(6 == arguments.length ? [].slice.call(arguments) : t))
                        }, opacity: function (t) {
                            return this.attr("opacity", t)
                        }, dx: function (t) {
                            return this.x(new i.Number(t).plus(this instanceof i.FX ? 0 : this.x()), !0)
                        }, dy: function (t) {
                            return this.y(new i.Number(t).plus(this instanceof i.FX ? 0 : this.y()), !0)
                        }
                    }), i.extend(i.Path, {
                        length: function () {
                            return this.node.getTotalLength()
                        }, pointAt: function (t) {
                            return this.node.getPointAtLength(t)
                        }
                    }), i.Set = i.invent({
                        create: function (t) {
                            Array.isArray(t) ? this.members = t : this.clear()
                        }, extend: {
                            add: function () {
                                for (var t = [].slice.call(arguments), e = 0, i = t.length; e < i; e++) this.members.push(t[e]);
                                return this
                            }, remove: function (t) {
                                var e = this.index(t);
                                return e > -1 && this.members.splice(e, 1), this
                            }, each: function (t) {
                                for (var e = 0, i = this.members.length; e < i; e++) t.apply(this.members[e], [e, this.members]);
                                return this
                            }, clear: function () {
                                return this.members = [], this
                            }, length: function () {
                                return this.members.length
                            }, has: function (t) {
                                return this.index(t) >= 0
                            }, index: function (t) {
                                return this.members.indexOf(t)
                            }, get: function (t) {
                                return this.members[t]
                            }, first: function () {
                                return this.get(0)
                            }, last: function () {
                                return this.get(this.members.length - 1)
                            }, valueOf: function () {
                                return this.members
                            }
                        }, construct: {
                            set: function (t) {
                                return new i.Set(t)
                            }
                        }
                    }), i.FX.Set = i.invent({
                        create: function (t) {
                            this.set = t
                        }
                    }), i.Set.inherit = function () {
                        var t = [];
                        for (var e in i.Shape.prototype) "function" == typeof i.Shape.prototype[e] && "function" != typeof i.Set.prototype[e] && t.push(e);
                        for (var e in t.forEach((function (t) {
                            i.Set.prototype[t] = function () {
                                for (var e = 0, a = this.members.length; e < a; e++) this.members[e] && "function" == typeof this.members[e][t] && this.members[e][t].apply(this.members[e], arguments);
                                return "animate" == t ? this.fx || (this.fx = new i.FX.Set(this)) : this
                            }
                        })), t = [], i.FX.prototype) "function" == typeof i.FX.prototype[e] && "function" != typeof i.FX.Set.prototype[e] && t.push(e);
                        t.forEach((function (t) {
                            i.FX.Set.prototype[t] = function () {
                                for (var e = 0, i = this.set.members.length; e < i; e++) this.set.members[e].fx[t].apply(this.set.members[e].fx, arguments);
                                return this
                            }
                        }))
                    }, i.extend(i.Element, {}), i.extend(i.Element, {
                        remember: function (t, e) {
                            if ("object" === s(arguments[0])) for (var i in t) this.remember(i, t[i]); else {
                                if (1 == arguments.length) return this.memory()[t];
                                this.memory()[t] = e
                            }
                            return this
                        }, forget: function () {
                            if (0 == arguments.length) this._memory = {}; else for (var t = arguments.length - 1; t >= 0; t--) delete this.memory()[arguments[t]];
                            return this
                        }, memory: function () {
                            return this._memory || (this._memory = {})
                        }
                    }), i.get = function (t) {
                        var a = e.getElementById(function (t) {
                            var e = (t || "").toString().match(i.regex.reference);
                            if (e) return e[1]
                        }(t) || t);
                        return i.adopt(a)
                    }, i.select = function (t, a) {
                        return new i.Set(i.utils.map((a || e).querySelectorAll(t), (function (t) {
                            return i.adopt(t)
                        })))
                    }, i.extend(i.Parent, {
                        select: function (t) {
                            return i.select(t, this.node)
                        }
                    });
                    var v = "abcdef".split("");
                    if ("function" != typeof t.CustomEvent) {
                        var m = function (t, i) {
                            i = i || {bubbles: !1, cancelable: !1, detail: void 0};
                            var a = e.createEvent("CustomEvent");
                            return a.initCustomEvent(t, i.bubbles, i.cancelable, i.detail), a
                        };
                        m.prototype = t.Event.prototype, i.CustomEvent = m
                    } else i.CustomEvent = t.CustomEvent;
                    return i
                }(r, r.document)
            }.call(e, i, e, t), void 0 === a || (t.exports = a)
        }, 539: (t, e, i) => {
            (e = i(922)(!1)).push([t.id, '@keyframes opaque {\n  0% {\n      opacity: 0\n  }\n\n  to {\n      opacity: 1\n  }\n}\n\n@keyframes resizeanim {\n  0%,to {\n      opacity: 0\n  }\n}\n\n.apexcharts-canvas {\n  position: relative;\n  user-select: none\n}\n\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px\n}\n\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0,0,0,.5);\n  box-shadow: 0 0 1px rgba(255,255,255,.5);\n  -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5)\n}\n\n.apexcharts-inner {\n  position: relative\n}\n\n.apexcharts-text tspan {\n  font-family: inherit\n}\n\n.legend-mouseover-inactive {\n  transition: .15s ease all;\n  opacity: .2\n}\n\n.apexcharts-legend-text {\n  padding-left: 15px;\n  margin-left: -15px;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: .15s ease all\n}\n\n.apexcharts-tooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-tooltip.apexcharts-theme-light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255,255,255,.96)\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark {\n  color: #fff;\n  background: rgba(30,30,30,.8)\n}\n\n.apexcharts-tooltip * {\n  font-family: inherit\n}\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px\n}\n\n.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {\n  background: #eceff1;\n  border-bottom: 1px solid #ddd\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {\n  background: rgba(0,0,0,.7);\n  border-bottom: 1px solid #333\n}\n\n.apexcharts-tooltip-text-goals-value,.apexcharts-tooltip-text-y-value,.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  margin-left: 5px;\n  font-weight: 600\n}\n\n.apexcharts-tooltip-text-goals-label:empty,.apexcharts-tooltip-text-goals-value:empty,.apexcharts-tooltip-text-y-label:empty,.apexcharts-tooltip-text-y-value:empty,.apexcharts-tooltip-text-z-value:empty,.apexcharts-tooltip-title:empty {\n  display: none\n}\n\n.apexcharts-tooltip-text-goals-label,.apexcharts-tooltip-text-goals-value {\n  padding: 6px 0 5px\n}\n\n.apexcharts-tooltip-goals-group,.apexcharts-tooltip-text-goals-label,.apexcharts-tooltip-text-goals-value {\n  display: flex\n}\n\n.apexcharts-tooltip-text-goals-label:not(:empty),.apexcharts-tooltip-text-goals-value:not(:empty) {\n  margin-top: -6px\n}\n\n.apexcharts-tooltip-marker {\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: 0;\n  margin-right: 10px;\n  border-radius: 50%\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {\n  opacity: 1\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active,.apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px\n}\n\n.apexcharts-tooltip-series-group-hidden {\n  opacity: 0;\n  height: 0;\n  line-height: 0;\n  padding: 0!important\n}\n\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px\n}\n\n.apexcharts-custom-tooltip,.apexcharts-tooltip-box {\n  padding: 4px 8px\n}\n\n.apexcharts-tooltip-boxPlot {\n  display: flex;\n  flex-direction: column-reverse\n}\n\n.apexcharts-tooltip-box>div {\n  margin: 4px 0\n}\n\n.apexcharts-tooltip-box span.value {\n  font-weight: 700\n}\n\n.apexcharts-tooltip-rangebar {\n  padding: 5px 8px\n}\n\n.apexcharts-tooltip-rangebar .category {\n  font-weight: 600;\n  color: #777\n}\n\n.apexcharts-tooltip-rangebar .series-name {\n  font-weight: 700;\n  display: block;\n  margin-bottom: 5px\n}\n\n.apexcharts-xaxistooltip,.apexcharts-yaxistooltip {\n  opacity: 0;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #eceff1;\n  border: 1px solid #90a4ae\n}\n\n.apexcharts-xaxistooltip {\n  padding: 9px 10px;\n  transition: .15s ease all\n}\n\n.apexcharts-xaxistooltip.apexcharts-theme-dark {\n  background: rgba(0,0,0,.7);\n  border: 1px solid rgba(0,0,0,.5);\n  color: #fff\n}\n\n.apexcharts-xaxistooltip:after,.apexcharts-xaxistooltip:before {\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-xaxistooltip:after {\n  border-color: transparent;\n  border-width: 6px;\n  margin-left: -6px\n}\n\n.apexcharts-xaxistooltip:before {\n  border-color: transparent;\n  border-width: 7px;\n  margin-left: -7px\n}\n\n.apexcharts-xaxistooltip-bottom:after,.apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%\n}\n\n.apexcharts-xaxistooltip-top:after,.apexcharts-xaxistooltip-top:before {\n  top: 100%\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #eceff1\n}\n\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90a4ae\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after,.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {\n  border-bottom-color: rgba(0,0,0,.5)\n}\n\n.apexcharts-xaxistooltip-top:after {\n  border-top-color: #eceff1\n}\n\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90a4ae\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after,.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {\n  border-top-color: rgba(0,0,0,.5)\n}\n\n.apexcharts-xaxistooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-yaxistooltip {\n  padding: 4px 10px\n}\n\n.apexcharts-yaxistooltip.apexcharts-theme-dark {\n  background: rgba(0,0,0,.7);\n  border: 1px solid rgba(0,0,0,.5);\n  color: #fff\n}\n\n.apexcharts-yaxistooltip:after,.apexcharts-yaxistooltip:before {\n  top: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-yaxistooltip:after {\n  border-color: transparent;\n  border-width: 6px;\n  margin-top: -6px\n}\n\n.apexcharts-yaxistooltip:before {\n  border-color: transparent;\n  border-width: 7px;\n  margin-top: -7px\n}\n\n.apexcharts-yaxistooltip-left:after,.apexcharts-yaxistooltip-left:before {\n  left: 100%\n}\n\n.apexcharts-yaxistooltip-right:after,.apexcharts-yaxistooltip-right:before {\n  right: 100%\n}\n\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #eceff1\n}\n\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90a4ae\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after,.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {\n  border-left-color: rgba(0,0,0,.5)\n}\n\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #eceff1\n}\n\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90a4ae\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after,.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {\n  border-right-color: rgba(0,0,0,.5)\n}\n\n.apexcharts-yaxistooltip.apexcharts-active {\n  opacity: 1\n}\n\n.apexcharts-yaxistooltip-hidden {\n  display: none\n}\n\n.apexcharts-xcrosshairs,.apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: .15s ease all\n}\n\n.apexcharts-xcrosshairs.apexcharts-active,.apexcharts-ycrosshairs.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0\n}\n\n.apexcharts-selection-rect {\n  cursor: move\n}\n\n.svg_select_boundingRect,.svg_select_points_rot {\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden\n}\n\n.apexcharts-selection-rect+g .svg_select_boundingRect,.apexcharts-selection-rect+g .svg_select_points_rot {\n  opacity: 0;\n  visibility: hidden\n}\n\n.apexcharts-selection-rect+g .svg_select_points_l,.apexcharts-selection-rect+g .svg_select_points_r {\n  cursor: ew-resize;\n  opacity: 1;\n  visibility: visible\n}\n\n.svg_select_points {\n  fill: #efefef;\n  stroke: #333;\n  rx: 2\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-zoom {\n  cursor: crosshair\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-pan {\n  cursor: move\n}\n\n.apexcharts-menu-icon,.apexcharts-pan-icon,.apexcharts-reset-icon,.apexcharts-selection-icon,.apexcharts-toolbar-custom-icon,.apexcharts-zoom-icon,.apexcharts-zoomin-icon,.apexcharts-zoomout-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  line-height: 24px;\n  color: #6e8192;\n  text-align: center\n}\n\n.apexcharts-menu-icon svg,.apexcharts-reset-icon svg,.apexcharts-zoom-icon svg,.apexcharts-zoomin-icon svg,.apexcharts-zoomout-icon svg {\n  fill: #6e8192\n}\n\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(.76)\n}\n\n.apexcharts-theme-dark .apexcharts-menu-icon svg,.apexcharts-theme-dark .apexcharts-pan-icon svg,.apexcharts-theme-dark .apexcharts-reset-icon svg,.apexcharts-theme-dark .apexcharts-selection-icon svg,.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg,.apexcharts-theme-dark .apexcharts-zoom-icon svg,.apexcharts-theme-dark .apexcharts-zoomin-icon svg,.apexcharts-theme-dark .apexcharts-zoomout-icon svg {\n  fill: #f3f4f5\n}\n\n.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg,.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg {\n  fill: #008ffb\n}\n\n.apexcharts-theme-light .apexcharts-menu-icon:hover svg,.apexcharts-theme-light .apexcharts-reset-icon:hover svg,.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg {\n  fill: #333\n}\n\n.apexcharts-menu-icon,.apexcharts-selection-icon {\n  position: relative\n}\n\n.apexcharts-reset-icon {\n  margin-left: 5px\n}\n\n.apexcharts-menu-icon,.apexcharts-reset-icon,.apexcharts-zoom-icon {\n  transform: scale(.85)\n}\n\n.apexcharts-zoomin-icon,.apexcharts-zoomout-icon {\n  transform: scale(.7)\n}\n\n.apexcharts-zoomout-icon {\n  margin-right: 3px\n}\n\n.apexcharts-pan-icon {\n  transform: scale(.62);\n  position: relative;\n  left: 1px;\n  top: 0\n}\n\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6e8192;\n  stroke-width: 2\n}\n\n.apexcharts-pan-icon.apexcharts-selected svg {\n  stroke: #008ffb\n}\n\n.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {\n  stroke: #333\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0 6px 2px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: .15s ease all;\n  pointer-events: none\n}\n\n.apexcharts-menu.apexcharts-menu-open {\n  opacity: 1;\n  pointer-events: all;\n  transition: .15s ease all\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer\n}\n\n.apexcharts-theme-light .apexcharts-menu-item:hover {\n  background: #eee\n}\n\n.apexcharts-theme-dark .apexcharts-menu {\n  background: rgba(0,0,0,.7);\n  color: #fff\n}\n\n@media screen and (min-width:768px) {\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n      opacity: 1\n  }\n}\n\n.apexcharts-canvas .apexcharts-element-hidden,.apexcharts-datalabel.apexcharts-element-hidden,.apexcharts-hide .apexcharts-series-points {\n  opacity: 0\n}\n\n.apexcharts-hidden-element-shown {\n  opacity: 1;\n  transition: 0.25s ease all;\n}\n.apexcharts-datalabel,.apexcharts-datalabel-label,.apexcharts-datalabel-value,.apexcharts-datalabels,.apexcharts-pie-label {\n  cursor: default;\n  pointer-events: none\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: .3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease\n}\n\n.apexcharts-radialbar-label {\n  cursor: pointer;\n}\n\n.apexcharts-annotation-rect,.apexcharts-area-series .apexcharts-area,.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,.apexcharts-gridline,.apexcharts-line,.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,.apexcharts-point-annotation-label,.apexcharts-radar-series path,.apexcharts-radar-series polygon,.apexcharts-toolbar svg,.apexcharts-tooltip .apexcharts-marker,.apexcharts-xaxis-annotation-label,.apexcharts-yaxis-annotation-label,.apexcharts-zoom-rect {\n  pointer-events: none\n}\n\n.apexcharts-marker {\n  transition: .15s ease all\n}\n\n.resize-triggers {\n  animation: 1ms resizeanim;\n  visibility: hidden;\n  opacity: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden\n}\n\n.contract-trigger:before,.resize-triggers,.resize-triggers>div {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0\n}\n\n.resize-triggers>div {\n  height: 100%;\n  width: 100%;\n  background: #eee;\n  overflow: auto\n}\n\n.contract-trigger:before {\n  overflow: hidden;\n  width: 200%;\n  height: 200%\n}\n\n.apexcharts-bar-goals-markers{\n  pointer-events: none\n}\n\n.apexcharts-bar-shadows{\n  pointer-events: none\n}\n\n.apexcharts-rangebar-goals-markers{\n  pointer-events: none\n}', ""]), t.exports = e
        }, 274: (t, e, i) => {
            var a = i(379), r = i(539);
            "string" == typeof (r = r.__esModule ? r.default : r) && (r = [[t.id, r, ""]]);
            var s = (a(t.id, r, {insert: "head", singleton: !1}), r.locals ? r.locals : {});
            t.exports = s
        }, 379: (t, e, i) => {
            "use strict";
            var a, r = function () {
                var t = {};
                return function (e) {
                    if (void 0 === t[e]) {
                        var i = document.querySelector(e);
                        if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement) try {
                            i = i.contentDocument.head
                        } catch (t) {
                            i = null
                        }
                        t[e] = i
                    }
                    return t[e]
                }
            }(), s = {};

            function n(t, e, i) {
                for (var a = 0; a < e.length; a++) {
                    var r = {css: e[a][1], media: e[a][2], sourceMap: e[a][3]};
                    s[t][a] ? s[t][a](r) : s[t].push(f(r, i))
                }
            }

            function o(t) {
                var e = document.createElement("style"), a = t.attributes || {};
                if (void 0 === a.nonce) {
                    var s = i.nc;
                    s && (a.nonce = s)
                }
                if (Object.keys(a).forEach((function (t) {
                    e.setAttribute(t, a[t])
                })), "function" == typeof t.insert) t.insert(e); else {
                    var n = r(t.insert || "head");
                    if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    n.appendChild(e)
                }
                return e
            }

            var l, c = (l = [], function (t, e) {
                return l[t] = e, l.filter(Boolean).join("\n")
            });

            function h(t, e, i, a) {
                var r = i ? "" : a.css;
                if (t.styleSheet) t.styleSheet.cssText = c(e, r); else {
                    var s = document.createTextNode(r), n = t.childNodes;
                    n[e] && t.removeChild(n[e]), n.length ? t.insertBefore(s, n[e]) : t.appendChild(s)
                }
            }

            function d(t, e, i) {
                var a = i.css, r = i.media, s = i.sourceMap;
                if (r ? t.setAttribute("media", r) : t.removeAttribute("media"), s && btoa && (a += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s)))), " */")), t.styleSheet) t.styleSheet.cssText = a; else {
                    for (; t.firstChild;) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(a))
                }
            }

            var u = null, g = 0;

            function f(t, e) {
                var i, a, r;
                if (e.singleton) {
                    var s = g++;
                    i = u || (u = o(e)), a = h.bind(null, i, s, !1), r = h.bind(null, i, s, !0)
                } else i = o(e), a = d.bind(null, i, e), r = function () {
                    !function (t) {
                        if (null === t.parentNode) return !1;
                        t.parentNode.removeChild(t)
                    }(i)
                };
                return a(t), function (e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                        a(t = e)
                    } else r()
                }
            }

            t.exports = function (t, e, i) {
                return (i = i || {}).singleton || "boolean" == typeof i.singleton || (i.singleton = (void 0 === a && (a = Boolean(window && document && document.all && !window.atob)), a)), t = i.base ? t + i.base : t, e = e || [], s[t] || (s[t] = []), n(t, e, i), function (e) {
                    if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                        s[t] || (s[t] = []), n(t, e, i);
                        for (var a = e.length; a < s[t].length; a++) s[t][a]();
                        s[t].length = e.length, 0 === s[t].length && delete s[t]
                    }
                }
            }
        }, 149: t => {
            t.exports = '<svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>'
        }, 355: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>'
        }, 686: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>'
        }, 798: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" viewBox="0 0 24 24"><defs><path d="M0 0h24v24H0z" id="a"></path></defs><clipPath id="b"><use overflow="visible" xlink:href="#a"></use></clipPath><path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path></svg>'
        }, 323: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>'
        }, 618: t => {
            t.exports = '<svg fill="#6E8192" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"></path></svg>'
        }, 688: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></svg>'
        }
    }, e = {};

    function i(a) {
        var r = e[a];
        if (void 0 !== r) return r.exports;
        var s = e[a] = {id: a, exports: {}};
        return t[a].call(s.exports, s, s.exports, i), s.exports
    }

    i.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return i.d(e, {a: e}), e
    }, i.d = (t, e) => {
        for (var a in e) i.o(e, a) && !i.o(t, a) && Object.defineProperty(t, a, {enumerable: !0, get: e[a]})
    }, i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), i.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, i.nc = void 0;
    var a = {};
    return (() => {
        "use strict";

        function t(e) {
            return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, t(e)
        }

        function e(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        i.r(a), i.d(a, {default: () => Fa});
        const r = function () {
            function i() {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, i)
            }

            var a, r, s;
            return a = i, s = [{
                key: "bind", value: function (t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                }
            }, {
                key: "isObject", value: function (e) {
                    return e && "object" === t(e) && !Array.isArray(e) && null != e
                }
            }, {
                key: "is", value: function (t, e) {
                    return Object.prototype.toString.call(e) === "[object " + t + "]"
                }
            }, {
                key: "listToArray", value: function (t) {
                    var e, i = [];
                    for (e = 0; e < t.length; e++) i[e] = t[e];
                    return i
                }
            }, {
                key: "extend", value: function (t, e) {
                    var i = this;
                    "function" != typeof Object.assign && (Object.assign = function (t) {
                        if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                        for (var e = Object(t), i = 1; i < arguments.length; i++) {
                            var a = arguments[i];
                            if (null != a) for (var r in a) a.hasOwnProperty(r) && (e[r] = a[r])
                        }
                        return e
                    });
                    var a = Object.assign({}, t);
                    return this.isObject(t) && this.isObject(e) && Object.keys(e).forEach((function (r) {
                        i.isObject(e[r]) && r in t ? a[r] = i.extend(t[r], e[r]) : Object.assign(a, function (t, e, i) {
                            return e in t ? Object.defineProperty(t, e, {
                                value: i,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[e] = i, t
                        }({}, r, e[r]))
                    })), a
                }
            }, {
                key: "extendArray", value: function (t, e) {
                    var a = [];
                    return t.map((function (t) {
                        a.push(i.extend(e, t))
                    })), a
                }
            }, {
                key: "monthMod", value: function (t) {
                    return t % 12
                }
            }, {
                key: "clone", value: function (e) {
                    if (i.is("Array", e)) {
                        for (var a = [], r = 0; r < e.length; r++) a[r] = this.clone(e[r]);
                        return a
                    }
                    if (i.is("Null", e)) return null;
                    if (i.is("Date", e)) return e;
                    if ("object" === t(e)) {
                        var s = {};
                        for (var n in e) e.hasOwnProperty(n) && (s[n] = this.clone(e[n]));
                        return s
                    }
                    return e
                }
            }, {
                key: "log10", value: function (t) {
                    return Math.log(t) / Math.LN10
                }
            }, {
                key: "roundToBase10", value: function (t) {
                    return Math.pow(10, Math.floor(Math.log10(t)))
                }
            }, {
                key: "roundToBase", value: function (t, e) {
                    return Math.pow(e, Math.floor(Math.log(t) / Math.log(e)))
                }
            }, {
                key: "parseNumber", value: function (t) {
                    return null === t ? t : parseFloat(t)
                }
            }, {
                key: "stripNumber", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                    return Number.isInteger(t) ? t : parseFloat(t.toPrecision(e))
                }
            }, {
                key: "randomId", value: function () {
                    return (Math.random() + 1).toString(36).substring(4)
                }
            }, {
                key: "noExponents", value: function (t) {
                    var e = String(t).split(/[eE]/);
                    if (1 === e.length) return e[0];
                    var i = "", a = t < 0 ? "-" : "", r = e[0].replace(".", ""), s = Number(e[1]) + 1;
                    if (s < 0) {
                        for (i = a + "0."; s++;) i += "0";
                        return i + r.replace(/^-/, "")
                    }
                    for (s -= r.length; s--;) i += "0";
                    return r + i
                }
            }, {
                key: "getDimensions", value: function (t) {
                    var e = getComputedStyle(t, null), i = t.clientHeight, a = t.clientWidth;
                    return i -= parseFloat(e.paddingTop) + parseFloat(e.paddingBottom), [a -= parseFloat(e.paddingLeft) + parseFloat(e.paddingRight), i]
                }
            }, {
                key: "getBoundingClientRect", value: function (t) {
                    var e = t.getBoundingClientRect();
                    return {
                        top: e.top,
                        right: e.right,
                        bottom: e.bottom,
                        left: e.left,
                        width: t.clientWidth,
                        height: t.clientHeight,
                        x: e.left,
                        y: e.top
                    }
                }
            }, {
                key: "getLargestStringFromArr", value: function (t) {
                    return t.reduce((function (t, e) {
                        return Array.isArray(e) && (e = e.reduce((function (t, e) {
                            return t.length > e.length ? t : e
                        }))), t.length > e.length ? t : e
                    }), 0)
                }
            }, {
                key: "hexToRgba", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "#999999",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .6;
                    "#" !== t.substring(0, 1) && (t = "#999999");
                    var i = t.replace("#", "");
                    i = i.match(new RegExp("(.{" + i.length / 3 + "})", "g"));
                    for (var a = 0; a < i.length; a++) i[a] = parseInt(1 === i[a].length ? i[a] + i[a] : i[a], 16);
                    return void 0 !== e && i.push(e), "rgba(" + i.join(",") + ")"
                }
            }, {
                key: "getOpacityFromRGBA", value: function (t) {
                    return parseFloat(t.replace(/^.*,(.+)\)/, "$1"))
                }
            }, {
                key: "rgb2hex", value: function (t) {
                    return (t = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && 4 === t.length ? "#" + ("0" + parseInt(t[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t[3], 10).toString(16)).slice(-2) : ""
                }
            }, {
                key: "isColorHex", value: function (t) {
                    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(t)
                }
            }, {
                key: "getPolygonPos", value: function (t, e) {
                    for (var i = [], a = 2 * Math.PI / e, r = 0; r < e; r++) {
                        var s = {};
                        s.x = t * Math.sin(r * a), s.y = -t * Math.cos(r * a), i.push(s)
                    }
                    return i
                }
            }, {
                key: "polarToCartesian", value: function (t, e, i, a) {
                    var r = (a - 90) * Math.PI / 180;
                    return {x: t + i * Math.cos(r), y: e + i * Math.sin(r)}
                }
            }, {
                key: "escapeString", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x",
                        i = t.toString().slice();
                    return i.replace(/[` ~!@#$%^&*()|+\=?;:'",.<>{}[\]\\/]/gi, e)
                }
            }, {
                key: "negToZero", value: function (t) {
                    return t < 0 ? 0 : t
                }
            }, {
                key: "moveIndexInArray", value: function (t, e, i) {
                    if (i >= t.length) for (var a = i - t.length + 1; a--;) t.push(void 0);
                    return t.splice(i, 0, t.splice(e, 1)[0]), t
                }
            }, {
                key: "extractNumber", value: function (t) {
                    return parseFloat(t.replace(/[^\d.]*/g, ""))
                }
            }, {
                key: "findAncestor", value: function (t, e) {
                    for (; (t = t.parentElement) && !t.classList.contains(e);) ;
                    return t
                }
            }, {
                key: "setELstyles", value: function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t.style.key = e[i])
                }
            }, {
                key: "isNumber", value: function (t) {
                    return !isNaN(t) && parseFloat(Number(t)) === t && !isNaN(parseInt(t, 10))
                }
            }, {
                key: "isFloat", value: function (t) {
                    return Number(t) === t && t % 1 != 0
                }
            }, {
                key: "isSafari", value: function () {
                    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
                }
            }, {
                key: "isFirefox", value: function () {
                    return navigator.userAgent.toLowerCase().indexOf("firefox") > -1
                }
            }, {
                key: "isIE11", value: function () {
                    if (-1 !== window.navigator.userAgent.indexOf("MSIE") || window.navigator.appVersion.indexOf("Trident/") > -1) return !0
                }
            }, {
                key: "isIE", value: function () {
                    var t = window.navigator.userAgent, e = t.indexOf("MSIE ");
                    if (e > 0) return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
                    if (t.indexOf("Trident/") > 0) {
                        var i = t.indexOf("rv:");
                        return parseInt(t.substring(i + 3, t.indexOf(".", i)), 10)
                    }
                    var a = t.indexOf("Edge/");
                    return a > 0 && parseInt(t.substring(a + 5, t.indexOf(".", a)), 10)
                }
            }], (r = [{
                key: "shadeRGBColor", value: function (t, e) {
                    var i = e.split(","), a = t < 0 ? 0 : 255, r = t < 0 ? -1 * t : t, s = parseInt(i[0].slice(4), 10),
                        n = parseInt(i[1], 10), o = parseInt(i[2], 10);
                    return "rgb(" + (Math.round((a - s) * r) + s) + "," + (Math.round((a - n) * r) + n) + "," + (Math.round((a - o) * r) + o) + ")"
                }
            }, {
                key: "shadeHexColor", value: function (t, e) {
                    var i = parseInt(e.slice(1), 16), a = t < 0 ? 0 : 255, r = t < 0 ? -1 * t : t, s = i >> 16,
                        n = i >> 8 & 255, o = 255 & i;
                    return "#" + (16777216 + 65536 * (Math.round((a - s) * r) + s) + 256 * (Math.round((a - n) * r) + n) + (Math.round((a - o) * r) + o)).toString(16).slice(1)
                }
            }, {
                key: "shadeColor", value: function (t, e) {
                    return i.isColorHex(e) ? this.shadeHexColor(t, e) : this.shadeRGBColor(t, e)
                }
            }]) && e(a.prototype, r), s && e(a, s), i
        }();

        function s(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var n = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.setEasingFunctions()
            }

            var e, i;
            return e = t, (i = [{
                key: "setEasingFunctions", value: function () {
                    var t;
                    if (!this.w.globals.easing) {
                        switch (this.w.config.chart.animations.easing) {
                            case"linear":
                                t = "-";
                                break;
                            case"easein":
                                t = "<";
                                break;
                            case"easeout":
                                t = ">";
                                break;
                            case"easeinout":
                            default:
                                t = "<>";
                                break;
                            case"swing":
                                t = function (t) {
                                    var e = 1.70158;
                                    return (t -= 1) * t * ((e + 1) * t + e) + 1
                                };
                                break;
                            case"bounce":
                                t = function (t) {
                                    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                                };
                                break;
                            case"elastic":
                                t = function (t) {
                                    return t === !!t ? t : Math.pow(2, -10 * t) * Math.sin((t - .075) * (2 * Math.PI) / .3) + 1
                                }
                        }
                        this.w.globals.easing = t
                    }
                }
            }, {
                key: "animateLine", value: function (t, e, i, a) {
                    t.attr(e).animate(a).attr(i)
                }
            }, {
                key: "animateMarker", value: function (t, e, i, a, r, s) {
                    e || (e = 0), t.attr({r: e, width: e, height: e}).animate(a, r).attr({
                        r: i,
                        width: i.width,
                        height: i.height
                    }).afterAll((function () {
                        s()
                    }))
                }
            }, {
                key: "animateCircle", value: function (t, e, i, a, r) {
                    t.attr({r: e.r, cx: e.cx, cy: e.cy}).animate(a, r).attr({r: i.r, cx: i.cx, cy: i.cy})
                }
            }, {
                key: "animateRect", value: function (t, e, i, a, r) {
                    t.attr(e).animate(a).attr(i).afterAll((function () {
                        return r()
                    }))
                }
            }, {
                key: "animatePathsGradually", value: function (t) {
                    var e = t.el, i = t.realIndex, a = t.j, r = t.fill, s = t.pathFrom, n = t.pathTo, o = t.speed,
                        l = t.delay, c = this.w, h = 0;
                    c.config.chart.animations.animateGradually.enabled && (h = c.config.chart.animations.animateGradually.delay), c.config.chart.animations.dynamicAnimation.enabled && c.globals.dataChanged && "bar" !== c.config.chart.type && (h = 0), this.morphSVG(e, i, a, "line" !== c.config.chart.type || c.globals.comboCharts ? r : "stroke", s, n, o, l * h)
                }
            }, {
                key: "showDelayedElements", value: function () {
                    this.w.globals.delayedElements.forEach((function (t) {
                        var e = t.el;
                        e.classList.remove("apexcharts-element-hidden"), e.classList.add("apexcharts-hidden-element-shown")
                    }))
                }
            }, {
                key: "animationCompleted", value: function (t) {
                    var e = this.w;
                    e.globals.animationEnded || (e.globals.animationEnded = !0, this.showDelayedElements(), "function" == typeof e.config.chart.events.animationEnd && e.config.chart.events.animationEnd(this.ctx, {
                        el: t,
                        w: e
                    }))
                }
            }, {
                key: "morphSVG", value: function (t, e, i, a, s, n, o, l) {
                    var c = this, h = this.w;
                    s || (s = t.attr("pathFrom")), n || (n = t.attr("pathTo"));
                    var d = function (t) {
                        return "radar" === h.config.chart.type && (o = 1), "M 0 ".concat(h.globals.gridHeight)
                    };
                    (!s || s.indexOf("undefined") > -1 || s.indexOf("NaN") > -1) && (s = d()), (!n || n.indexOf("undefined") > -1 || n.indexOf("NaN") > -1) && (n = d()), h.globals.shouldAnimate || (o = 1), t.plot(s).animate(1, h.globals.easing, l).plot(s).animate(o, h.globals.easing, l).plot(n).afterAll((function () {
                        r.isNumber(i) ? i === h.globals.series[h.globals.maxValsInArrayIndex].length - 2 && h.globals.shouldAnimate && c.animationCompleted(t) : "none" !== a && h.globals.shouldAnimate && (!h.globals.comboCharts && e === h.globals.series.length - 1 || h.globals.comboCharts) && c.animationCompleted(t), c.showDelayedElements()
                    }))
                }
            }]) && s(e.prototype, i), t
        }();

        function o(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        const l = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i;
            return e = t, i = [{
                key: "getDefaultFilter", value: function (t, e) {
                    var i = this.w;
                    t.unfilter(!0), (new window.SVG.Filter).size("120%", "180%", "-5%", "-40%"), "none" !== i.config.states.normal.filter ? this.applyFilter(t, e, i.config.states.normal.filter.type, i.config.states.normal.filter.value) : i.config.chart.dropShadow.enabled && this.dropShadow(t, i.config.chart.dropShadow, e)
                }
            }, {
                key: "addNormalFilter", value: function (t, e) {
                    var i = this.w;
                    i.config.chart.dropShadow.enabled && !t.node.classList.contains("apexcharts-marker") && this.dropShadow(t, i.config.chart.dropShadow, e)
                }
            }, {
                key: "addLightenFilter", value: function (t, e, i) {
                    var a = this, r = this.w, s = i.intensity;
                    t.unfilter(!0), new window.SVG.Filter, t.filter((function (t) {
                        var i = r.config.chart.dropShadow;
                        (i.enabled ? a.addShadow(t, e, i) : t).componentTransfer({
                            rgb: {
                                type: "linear",
                                slope: 1.5,
                                intercept: s
                            }
                        })
                    })), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t.filterer.node)
                }
            }, {
                key: "addDarkenFilter", value: function (t, e, i) {
                    var a = this, r = this.w, s = i.intensity;
                    t.unfilter(!0), new window.SVG.Filter, t.filter((function (t) {
                        var i = r.config.chart.dropShadow;
                        (i.enabled ? a.addShadow(t, e, i) : t).componentTransfer({rgb: {type: "linear", slope: s}})
                    })), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t.filterer.node)
                }
            }, {
                key: "applyFilter", value: function (t, e, i) {
                    var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
                    switch (i) {
                        case"none":
                            this.addNormalFilter(t, e);
                            break;
                        case"lighten":
                            this.addLightenFilter(t, e, {intensity: a});
                            break;
                        case"darken":
                            this.addDarkenFilter(t, e, {intensity: a})
                    }
                }
            }, {
                key: "addShadow", value: function (t, e, i) {
                    var a = i.blur, r = i.top, s = i.left, n = i.color, o = i.opacity,
                        l = t.flood(Array.isArray(n) ? n[e] : n, o).composite(t.sourceAlpha, "in").offset(s, r).gaussianBlur(a).merge(t.source);
                    return t.blend(t.source, l)
                }
            }, {
                key: "dropShadow", value: function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, a = e.top, s = e.left,
                        n = e.blur, o = e.color, l = e.opacity, c = e.noUserSpaceOnUse, h = this.w;
                    return t.unfilter(!0), r.isIE() && "radialBar" === h.config.chart.type || (o = Array.isArray(o) ? o[i] : o, t.filter((function (t) {
                        var e;
                        e = r.isSafari() || r.isFirefox() || r.isIE() ? t.flood(o, l).composite(t.sourceAlpha, "in").offset(s, a).gaussianBlur(n) : t.flood(o, l).composite(t.sourceAlpha, "in").offset(s, a).gaussianBlur(n).merge(t.source), t.blend(t.source, e)
                    })), c || t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t.filterer.node)), t
                }
            }, {
                key: "setSelectionFilter", value: function (t, e, i) {
                    var a = this.w;
                    if (void 0 !== a.globals.selectedDataPoints[e] && a.globals.selectedDataPoints[e].indexOf(i) > -1) {
                        t.node.setAttribute("selected", !0);
                        var r = a.config.states.active.filter;
                        "none" !== r && this.applyFilter(t, e, r.type, r.value)
                    }
                }
            }, {
                key: "_scaleFilterSize", value: function (t) {
                    !function (e) {
                        for (var i in e) e.hasOwnProperty(i) && t.setAttribute(i, e[i])
                    }({width: "200%", height: "200%", x: "-50%", y: "-50%"})
                }
            }], i && o(e.prototype, i), t
        }();

        function c(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, a)
            }
            return i
        }

        function h(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? c(Object(i), !0).forEach((function (e) {
                    d(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : c(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function d(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function u(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        const g = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i, a;
            return e = t, i = [{
                key: "roundPathCorners", value: function (t, e) {
                    function i(t, e, i) {
                        var r = e.x - t.x, s = e.y - t.y, n = Math.sqrt(r * r + s * s);
                        return a(t, e, Math.min(1, i / n))
                    }

                    function a(t, e, i) {
                        return {x: t.x + (e.x - t.x) * i, y: t.y + (e.y - t.y) * i}
                    }

                    function r(t, e) {
                        t.length > 2 && (t[t.length - 2] = e.x, t[t.length - 1] = e.y)
                    }

                    function s(t) {
                        return {x: parseFloat(t[t.length - 2]), y: parseFloat(t[t.length - 1])}
                    }

                    t.indexOf("NaN") > -1 && (t = "");
                    var n = t.split(/[,\s]/).reduce((function (t, e) {
                        var i = e.match("([a-zA-Z])(.+)");
                        return i ? (t.push(i[1]), t.push(i[2])) : t.push(e), t
                    }), []).reduce((function (t, e) {
                        return parseFloat(e) == e && t.length ? t[t.length - 1].push(e) : t.push([e]), t
                    }), []), o = [];
                    if (n.length > 1) {
                        var l = s(n[0]), c = null;
                        "Z" == n[n.length - 1][0] && n[0].length > 2 && (c = ["L", l.x, l.y], n[n.length - 1] = c), o.push(n[0]);
                        for (var h = 1; h < n.length; h++) {
                            var d = o[o.length - 1], u = n[h], g = u == c ? n[1] : n[h + 1];
                            if (g && d && d.length > 2 && "L" == u[0] && g.length > 2 && "L" == g[0]) {
                                var f, p, x = s(d), b = s(u), v = s(g);
                                f = i(b, x, e), p = i(b, v, e), r(u, f), u.origPoint = b, o.push(u);
                                var m = a(f, b, .5), y = a(b, p, .5), w = ["C", m.x, m.y, y.x, y.y, p.x, p.y];
                                w.origPoint = b, o.push(w)
                            } else o.push(u)
                        }
                        if (c) {
                            var k = s(o[o.length - 1]);
                            o.push(["Z"]), r(o[0], k)
                        }
                    } else o = n;
                    return o.reduce((function (t, e) {
                        return t + e.join(" ") + " "
                    }), "")
                }
            }, {
                key: "drawLine", value: function (t, e, i, a) {
                    var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "#a8a8a8",
                        s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                        n = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                        o = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : "butt";
                    return this.w.globals.dom.Paper.line().attr({
                        x1: t,
                        y1: e,
                        x2: i,
                        y2: a,
                        stroke: r,
                        "stroke-dasharray": s,
                        "stroke-width": n,
                        "stroke-linecap": o
                    })
                }
            }, {
                key: "drawRect", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                        s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "#fefefe",
                        n = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
                        o = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                        l = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
                        c = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
                        h = this.w.globals.dom.Paper.rect();
                    return h.attr({
                        x: t,
                        y: e,
                        width: i > 0 ? i : 0,
                        height: a > 0 ? a : 0,
                        rx: r,
                        ry: r,
                        opacity: n,
                        "stroke-width": null !== o ? o : 0,
                        stroke: null !== l ? l : "none",
                        "stroke-dasharray": c
                    }), h.node.setAttribute("fill", s), h
                }
            }, {
                key: "drawPolygon", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "#e1e1e1",
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "none";
                    return this.w.globals.dom.Paper.polygon(t).attr({fill: a, stroke: e, "stroke-width": i})
                }
            }, {
                key: "drawCircle", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    t < 0 && (t = 0);
                    var i = this.w.globals.dom.Paper.circle(2 * t);
                    return null !== e && i.attr(e), i
                }
            }, {
                key: "drawPath", value: function (t) {
                    var e = t.d, i = void 0 === e ? "" : e, a = t.stroke, r = void 0 === a ? "#a8a8a8" : a,
                        s = t.strokeWidth, n = void 0 === s ? 1 : s, o = t.fill, l = t.fillOpacity,
                        c = void 0 === l ? 1 : l, h = t.strokeOpacity, d = void 0 === h ? 1 : h, u = t.classes,
                        g = t.strokeLinecap, f = void 0 === g ? null : g, p = t.strokeDashArray,
                        x = void 0 === p ? 0 : p, b = this.w;
                    return null === f && (f = b.config.stroke.lineCap), (i.indexOf("undefined") > -1 || i.indexOf("NaN") > -1) && (i = "M 0 ".concat(b.globals.gridHeight)), b.globals.dom.Paper.path(i).attr({
                        fill: o,
                        "fill-opacity": c,
                        stroke: r,
                        "stroke-opacity": d,
                        "stroke-linecap": f,
                        "stroke-width": n,
                        "stroke-dasharray": x,
                        class: u
                    })
                }
            }, {
                key: "group", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        e = this.w.globals.dom.Paper.group();
                    return null !== t && e.attr(t), e
                }
            }, {
                key: "move", value: function (t, e) {
                    return ["M", t, e].join(" ")
                }
            }, {
                key: "line", value: function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a = null;
                    return null === i ? a = [" L", t, e].join(" ") : "H" === i ? a = [" H", t].join(" ") : "V" === i && (a = [" V", e].join(" ")), a
                }
            }, {
                key: "curve", value: function (t, e, i, a, r, s) {
                    return ["C", t, e, i, a, r, s].join(" ")
                }
            }, {
                key: "quadraticCurve", value: function (t, e, i, a) {
                    return ["Q", t, e, i, a].join(" ")
                }
            }, {
                key: "arc", value: function (t, e, i, a, r, s, n) {
                    var o = "A";
                    return arguments.length > 7 && void 0 !== arguments[7] && arguments[7] && (o = "a"), [o, t, e, i, a, r, s, n].join(" ")
                }
            }, {
                key: "renderPaths", value: function (t) {
                    var e, i = t.j, a = t.realIndex, r = t.pathFrom, s = t.pathTo, o = t.stroke, c = t.strokeWidth,
                        d = t.strokeLinecap, u = t.fill, g = t.animationDelay, f = t.initialSpeed,
                        p = t.dataChangeSpeed, x = t.className, b = t.shouldClipToGrid, v = void 0 === b || b,
                        m = t.bindEventsOnPaths, y = void 0 === m || m, w = t.drawShadow, k = void 0 === w || w,
                        A = this.w, S = new l(this.ctx), C = new n(this.ctx),
                        P = this.w.config.chart.animations.enabled,
                        L = P && this.w.config.chart.animations.dynamicAnimation.enabled,
                        O = !!(P && !A.globals.resized || L && A.globals.dataChanged && A.globals.shouldAnimate);
                    O ? e = r : (e = s, A.globals.animationEnded = !0);
                    var T, I = A.config.stroke.dashArray;
                    T = Array.isArray(I) ? I[a] : A.config.stroke.dashArray;
                    var E = this.drawPath({
                        d: e,
                        stroke: o,
                        strokeWidth: c,
                        fill: u,
                        fillOpacity: 1,
                        classes: x,
                        strokeLinecap: d,
                        strokeDashArray: T
                    });
                    if (E.attr("index", a), v && E.attr({"clip-path": "url(#gridRectMask".concat(A.globals.cuid, ")")}), "none" !== A.config.states.normal.filter.type) S.getDefaultFilter(E, a); else if (A.config.chart.dropShadow.enabled && k && (!A.config.chart.dropShadow.enabledOnSeries || A.config.chart.dropShadow.enabledOnSeries && -1 !== A.config.chart.dropShadow.enabledOnSeries.indexOf(a))) {
                        var M = A.config.chart.dropShadow;
                        S.dropShadow(E, M, a)
                    }
                    y && (E.node.addEventListener("mouseenter", this.pathMouseEnter.bind(this, E)), E.node.addEventListener("mouseleave", this.pathMouseLeave.bind(this, E)), E.node.addEventListener("mousedown", this.pathMouseDown.bind(this, E))), E.attr({
                        pathTo: s,
                        pathFrom: r
                    });
                    var z = {el: E, j: i, realIndex: a, pathFrom: r, pathTo: s, fill: u, strokeWidth: c, delay: g};
                    return !P || A.globals.resized || A.globals.dataChanged ? !A.globals.resized && A.globals.dataChanged || C.showDelayedElements() : C.animatePathsGradually(h(h({}, z), {}, {speed: f})), A.globals.dataChanged && L && O && C.animatePathsGradually(h(h({}, z), {}, {speed: p})), E
                }
            }, {
                key: "drawPattern", value: function (t, e, i) {
                    var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "#a8a8a8",
                        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                    return this.w.globals.dom.Paper.pattern(e, i, (function (s) {
                        "horizontalLines" === t ? s.line(0, 0, i, 0).stroke({
                            color: a,
                            width: r + 1
                        }) : "verticalLines" === t ? s.line(0, 0, 0, e).stroke({
                            color: a,
                            width: r + 1
                        }) : "slantedLines" === t ? s.line(0, 0, e, i).stroke({
                            color: a,
                            width: r
                        }) : "squares" === t ? s.rect(e, i).fill("none").stroke({
                            color: a,
                            width: r
                        }) : "circles" === t && s.circle(e).fill("none").stroke({color: a, width: r})
                    }))
                }
            }, {
                key: "drawGradient", value: function (t, e, i, a, s) {
                    var n, o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                        l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                        c = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                        h = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, d = this.w;
                    e.length < 9 && 0 === e.indexOf("#") && (e = r.hexToRgba(e, a)), i.length < 9 && 0 === i.indexOf("#") && (i = r.hexToRgba(i, s));
                    var u = 0, g = 1, f = 1, p = null;
                    null !== l && (u = void 0 !== l[0] ? l[0] / 100 : 0, g = void 0 !== l[1] ? l[1] / 100 : 1, f = void 0 !== l[2] ? l[2] / 100 : 1, p = void 0 !== l[3] ? l[3] / 100 : null);
                    var x = !("donut" !== d.config.chart.type && "pie" !== d.config.chart.type && "polarArea" !== d.config.chart.type && "bubble" !== d.config.chart.type);
                    if (n = null === c || 0 === c.length ? d.globals.dom.Paper.gradient(x ? "radial" : "linear", (function (t) {
                        t.at(u, e, a), t.at(g, i, s), t.at(f, i, s), null !== p && t.at(p, e, a)
                    })) : d.globals.dom.Paper.gradient(x ? "radial" : "linear", (function (t) {
                        (Array.isArray(c[h]) ? c[h] : c).forEach((function (e) {
                            t.at(e.offset / 100, e.color, e.opacity)
                        }))
                    })), x) {
                        var b = d.globals.gridWidth / 2, v = d.globals.gridHeight / 2;
                        "bubble" !== d.config.chart.type ? n.attr({
                            gradientUnits: "userSpaceOnUse",
                            cx: b,
                            cy: v,
                            r: o
                        }) : n.attr({cx: .5, cy: .5, r: .8, fx: .2, fy: .2})
                    } else "vertical" === t ? n.from(0, 0).to(0, 1) : "diagonal" === t ? n.from(0, 0).to(1, 1) : "horizontal" === t ? n.from(0, 1).to(1, 1) : "diagonal2" === t && n.from(1, 0).to(0, 1);
                    return n
                }
            }, {
                key: "getTextBasedOnMaxWidth", value: function (t) {
                    var e = t.text, i = t.maxWidth, a = t.fontSize, r = t.fontFamily, s = this.getTextRects(e, a, r),
                        n = s.width / e.length, o = Math.floor(i / n);
                    return i < s.width ? e.slice(0, o - 3) + "..." : e
                }
            }, {
                key: "drawText", value: function (t) {
                    var e = this, i = t.x, a = t.y, r = t.text, s = t.textAnchor, n = t.fontSize, o = t.fontFamily,
                        l = t.fontWeight, c = t.foreColor, d = t.opacity, u = t.maxWidth, g = t.cssClass,
                        f = void 0 === g ? "" : g, p = t.isPlainText, x = void 0 === p || p, b = t.dominantBaseline,
                        v = void 0 === b ? "auto" : b, m = this.w;
                    void 0 === r && (r = "");
                    var y = r;
                    s || (s = "start"), c && c.length || (c = m.config.chart.foreColor), o = o || m.config.chart.fontFamily, l = l || "regular";
                    var w, k = {maxWidth: u, fontSize: n = n || "11px", fontFamily: o};
                    return Array.isArray(r) ? w = m.globals.dom.Paper.text((function (t) {
                        for (var i = 0; i < r.length; i++) y = r[i], u && (y = e.getTextBasedOnMaxWidth(h({text: r[i]}, k))), 0 === i ? t.tspan(y) : t.tspan(y).newLine()
                    })) : (u && (y = this.getTextBasedOnMaxWidth(h({text: r}, k))), w = x ? m.globals.dom.Paper.plain(r) : m.globals.dom.Paper.text((function (t) {
                        return t.tspan(y)
                    }))), w.attr({
                        x: i,
                        y: a,
                        "text-anchor": s,
                        "dominant-baseline": v,
                        "font-size": n,
                        "font-family": o,
                        "font-weight": l,
                        fill: c,
                        class: "apexcharts-text " + f
                    }), w.node.style.fontFamily = o, w.node.style.opacity = d, w
                }
            }, {
                key: "drawMarker", value: function (t, e, i) {
                    t = t || 0;
                    var a = i.pSize || 0, s = null;
                    if ("square" === i.shape || "rect" === i.shape) {
                        var n = void 0 === i.pRadius ? a / 2 : i.pRadius;
                        null !== e && a || (a = 0, n = 0);
                        var o = 1.2 * a + n, l = this.drawRect(o, o, o, o, n);
                        l.attr({
                            x: t - o / 2,
                            y: e - o / 2,
                            cx: t,
                            cy: e,
                            class: i.class ? i.class : "",
                            fill: i.pointFillColor,
                            "fill-opacity": i.pointFillOpacity ? i.pointFillOpacity : 1,
                            stroke: i.pointStrokeColor,
                            "stroke-width": i.pointStrokeWidth ? i.pointStrokeWidth : 0,
                            "stroke-opacity": i.pointStrokeOpacity ? i.pointStrokeOpacity : 1
                        }), s = l
                    } else "circle" !== i.shape && i.shape || (r.isNumber(e) || (a = 0, e = 0), s = this.drawCircle(a, {
                        cx: t,
                        cy: e,
                        class: i.class ? i.class : "",
                        stroke: i.pointStrokeColor,
                        fill: i.pointFillColor,
                        "fill-opacity": i.pointFillOpacity ? i.pointFillOpacity : 1,
                        "stroke-width": i.pointStrokeWidth ? i.pointStrokeWidth : 0,
                        "stroke-opacity": i.pointStrokeOpacity ? i.pointStrokeOpacity : 1
                    }));
                    return s
                }
            }, {
                key: "pathMouseEnter", value: function (t, e) {
                    var i = this.w, a = new l(this.ctx), r = parseInt(t.node.getAttribute("index"), 10),
                        s = parseInt(t.node.getAttribute("j"), 10);
                    if ("function" == typeof i.config.chart.events.dataPointMouseEnter && i.config.chart.events.dataPointMouseEnter(e, this.ctx, {
                        seriesIndex: r,
                        dataPointIndex: s,
                        w: i
                    }), this.ctx.events.fireEvent("dataPointMouseEnter", [e, this.ctx, {
                        seriesIndex: r,
                        dataPointIndex: s,
                        w: i
                    }]), ("none" === i.config.states.active.filter.type || "true" !== t.node.getAttribute("selected")) && "none" !== i.config.states.hover.filter.type && !i.globals.isTouchDevice) {
                        var n = i.config.states.hover.filter;
                        a.applyFilter(t, r, n.type, n.value)
                    }
                }
            }, {
                key: "pathMouseLeave", value: function (t, e) {
                    var i = this.w, a = new l(this.ctx), r = parseInt(t.node.getAttribute("index"), 10),
                        s = parseInt(t.node.getAttribute("j"), 10);
                    "function" == typeof i.config.chart.events.dataPointMouseLeave && i.config.chart.events.dataPointMouseLeave(e, this.ctx, {
                        seriesIndex: r,
                        dataPointIndex: s,
                        w: i
                    }), this.ctx.events.fireEvent("dataPointMouseLeave", [e, this.ctx, {
                        seriesIndex: r,
                        dataPointIndex: s,
                        w: i
                    }]), "none" !== i.config.states.active.filter.type && "true" === t.node.getAttribute("selected") || "none" !== i.config.states.hover.filter.type && a.getDefaultFilter(t, r)
                }
            }, {
                key: "pathMouseDown", value: function (t, e) {
                    var i = this.w, a = new l(this.ctx), r = parseInt(t.node.getAttribute("index"), 10),
                        s = parseInt(t.node.getAttribute("j"), 10), n = "false";
                    if ("true" === t.node.getAttribute("selected")) {
                        if (t.node.setAttribute("selected", "false"), i.globals.selectedDataPoints[r].indexOf(s) > -1) {
                            var o = i.globals.selectedDataPoints[r].indexOf(s);
                            i.globals.selectedDataPoints[r].splice(o, 1)
                        }
                    } else {
                        if (!i.config.states.active.allowMultipleDataPointsSelection && i.globals.selectedDataPoints.length > 0) {
                            i.globals.selectedDataPoints = [];
                            var c = i.globals.dom.Paper.select(".apexcharts-series path").members,
                                h = i.globals.dom.Paper.select(".apexcharts-series circle, .apexcharts-series rect").members,
                                d = function (t) {
                                    Array.prototype.forEach.call(t, (function (t) {
                                        t.node.setAttribute("selected", "false"), a.getDefaultFilter(t, r)
                                    }))
                                };
                            d(c), d(h)
                        }
                        t.node.setAttribute("selected", "true"), n = "true", void 0 === i.globals.selectedDataPoints[r] && (i.globals.selectedDataPoints[r] = []), i.globals.selectedDataPoints[r].push(s)
                    }
                    if ("true" === n) {
                        var u = i.config.states.active.filter;
                        if ("none" !== u) a.applyFilter(t, r, u.type, u.value); else if ("none" !== i.config.states.hover.filter && !i.globals.isTouchDevice) {
                            var g = i.config.states.hover.filter;
                            a.applyFilter(t, r, g.type, g.value)
                        }
                    } else "none" !== i.config.states.active.filter.type && ("none" === i.config.states.hover.filter.type || i.globals.isTouchDevice ? a.getDefaultFilter(t, r) : (g = i.config.states.hover.filter, a.applyFilter(t, r, g.type, g.value)));
                    "function" == typeof i.config.chart.events.dataPointSelection && i.config.chart.events.dataPointSelection(e, this.ctx, {
                        selectedDataPoints: i.globals.selectedDataPoints,
                        seriesIndex: r,
                        dataPointIndex: s,
                        w: i
                    }), e && this.ctx.events.fireEvent("dataPointSelection", [e, this.ctx, {
                        selectedDataPoints: i.globals.selectedDataPoints,
                        seriesIndex: r,
                        dataPointIndex: s,
                        w: i
                    }])
                }
            }, {
                key: "rotateAroundCenter", value: function (t) {
                    var e = {};
                    return t && "function" == typeof t.getBBox && (e = t.getBBox()), {
                        x: e.x + e.width / 2,
                        y: e.y + e.height / 2
                    }
                }
            }, {
                key: "getTextRects", value: function (t, e, i, a) {
                    var r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], s = this.w,
                        n = this.drawText({
                            x: -200,
                            y: -200,
                            text: t,
                            textAnchor: "start",
                            fontSize: e,
                            fontFamily: i,
                            foreColor: "#fff",
                            opacity: 0
                        });
                    a && n.attr("transform", a), s.globals.dom.Paper.add(n);
                    var o = n.bbox();
                    return r || (o = n.node.getBoundingClientRect()), n.remove(), {width: o.width, height: o.height}
                }
            }, {
                key: "placeTextWithEllipsis", value: function (t, e, i) {
                    if ("function" == typeof t.getComputedTextLength && (t.textContent = e, e.length > 0 && t.getComputedTextLength() >= i / 1.1)) {
                        for (var a = e.length - 3; a > 0; a -= 3) if (t.getSubStringLength(0, a) <= i / 1.1) return void (t.textContent = e.substring(0, a) + "...");
                        t.textContent = "."
                    }
                }
            }], a = [{
                key: "setAttrs", value: function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && t.setAttribute(i, e[i])
                }
            }], i && u(e.prototype, i), a && u(e, a), t
        }();

        function f(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        const p = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i, a;
            return e = t, i = [{
                key: "getStackedSeriesTotals", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = this.w, i = [];
                    if (0 === e.globals.series.length) return i;
                    for (var a = 0; a < e.globals.series[e.globals.maxValsInArrayIndex].length; a++) {
                        for (var r = 0, s = 0; s < e.globals.series.length; s++) void 0 !== e.globals.series[s][a] && -1 === t.indexOf(s) && (r += e.globals.series[s][a]);
                        i.push(r)
                    }
                    return i
                }
            }, {
                key: "getSeriesTotalByIndex", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    return null === t ? this.w.config.series.reduce((function (t, e) {
                        return t + e
                    }), 0) : this.w.globals.series[t].reduce((function (t, e) {
                        return t + e
                    }), 0)
                }
            }, {
                key: "getStackedSeriesTotalsByGroups", value: function () {
                    var t = this, e = this.w, i = [];
                    return e.globals.seriesGroups.forEach((function (a) {
                        var r = [];
                        e.config.series.forEach((function (t, e) {
                            a.indexOf(t.name) > -1 && r.push(e)
                        }));
                        var s = e.globals.series.map((function (t, e) {
                            return -1 === r.indexOf(e) ? e : -1
                        })).filter((function (t) {
                            return -1 !== t
                        }));
                        i.push(t.getStackedSeriesTotals(s))
                    })), i
                }
            }, {
                key: "isSeriesNull", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    return 0 === (null === t ? this.w.config.series.filter((function (t) {
                        return null !== t
                    })) : this.w.config.series[t].data.filter((function (t) {
                        return null !== t
                    }))).length
                }
            }, {
                key: "seriesHaveSameValues", value: function (t) {
                    return this.w.globals.series[t].every((function (t, e, i) {
                        return t === i[0]
                    }))
                }
            }, {
                key: "getCategoryLabels", value: function (t) {
                    var e = this.w, i = t.slice();
                    return e.config.xaxis.convertedCatToNumeric && (i = t.map((function (t, i) {
                        return e.config.xaxis.labels.formatter(t - e.globals.minX + 1)
                    }))), i
                }
            }, {
                key: "getLargestSeries", value: function () {
                    var t = this.w;
                    t.globals.maxValsInArrayIndex = t.globals.series.map((function (t) {
                        return t.length
                    })).indexOf(Math.max.apply(Math, t.globals.series.map((function (t) {
                        return t.length
                    }))))
                }
            }, {
                key: "getLargestMarkerSize", value: function () {
                    var t = this.w, e = 0;
                    return t.globals.markers.size.forEach((function (t) {
                        e = Math.max(e, t)
                    })), t.config.markers.discrete && t.config.markers.discrete.length && t.config.markers.discrete.forEach((function (t) {
                        e = Math.max(e, t.size)
                    })), e > 0 && (e += t.config.markers.hover.sizeOffset + 1), t.globals.markers.largestSize = e, e
                }
            }, {
                key: "getSeriesTotals", value: function () {
                    var t = this.w;
                    t.globals.seriesTotals = t.globals.series.map((function (t, e) {
                        var i = 0;
                        if (Array.isArray(t)) for (var a = 0; a < t.length; a++) i += t[a]; else i += t;
                        return i
                    }))
                }
            }, {
                key: "getSeriesTotalsXRange", value: function (t, e) {
                    var i = this.w;
                    return i.globals.series.map((function (a, r) {
                        for (var s = 0, n = 0; n < a.length; n++) i.globals.seriesX[r][n] > t && i.globals.seriesX[r][n] < e && (s += a[n]);
                        return s
                    }))
                }
            }, {
                key: "getPercentSeries", value: function () {
                    var t = this.w;
                    t.globals.seriesPercent = t.globals.series.map((function (e, i) {
                        var a = [];
                        if (Array.isArray(e)) for (var r = 0; r < e.length; r++) {
                            var s = t.globals.stackedSeriesTotals[r], n = 0;
                            s && (n = 100 * e[r] / s), a.push(n)
                        } else {
                            var o = 100 * e / t.globals.seriesTotals.reduce((function (t, e) {
                                return t + e
                            }), 0);
                            a.push(o)
                        }
                        return a
                    }))
                }
            }, {
                key: "getCalculatedRatios", value: function () {
                    var t, e, i, a = this.w.globals, r = [], s = 0, n = [], o = .1, l = 0;
                    if (a.yRange = [], a.isMultipleYAxis) for (var c = 0; c < a.minYArr.length; c++) a.yRange.push(Math.abs(a.minYArr[c] - a.maxYArr[c])), n.push(0); else a.yRange.push(Math.abs(a.minY - a.maxY));
                    a.xRange = Math.abs(a.maxX - a.minX), a.zRange = Math.abs(a.maxZ - a.minZ);
                    for (var h = 0; h < a.yRange.length; h++) r.push(a.yRange[h] / a.gridHeight);
                    if (e = a.xRange / a.gridWidth, t = a.yRange / a.gridWidth, i = a.xRange / a.gridHeight, (s = a.zRange / a.gridHeight * 16) || (s = 1), a.minY !== Number.MIN_VALUE && 0 !== Math.abs(a.minY) && (a.hasNegs = !0), a.isMultipleYAxis) {
                        n = [];
                        for (var d = 0; d < r.length; d++) n.push(-a.minYArr[d] / r[d])
                    } else n.push(-a.minY / r[0]), a.minY !== Number.MIN_VALUE && 0 !== Math.abs(a.minY) && (o = -a.minY / t, l = a.minX / e);
                    return {
                        yRatio: r,
                        invertedYRatio: t,
                        zRatio: s,
                        xRatio: e,
                        invertedXRatio: i,
                        baseLineInvertedY: o,
                        baseLineY: n,
                        baseLineX: l
                    }
                }
            }, {
                key: "getLogSeries", value: function (t) {
                    var e = this, i = this.w;
                    return i.globals.seriesLog = t.map((function (t, a) {
                        return i.config.yaxis[a] && i.config.yaxis[a].logarithmic ? t.map((function (t) {
                            return null === t ? null : e.getLogVal(i.config.yaxis[a].logBase, t, a)
                        })) : t
                    })), i.globals.invalidLogScale ? t : i.globals.seriesLog
                }
            }, {
                key: "getBaseLog", value: function (t, e) {
                    return Math.log(e) / Math.log(t)
                }
            }, {
                key: "getLogVal", value: function (t, e, i) {
                    if (0 === e) return 0;
                    var a = this.w, r = 0 === a.globals.minYArr[i] ? -1 : this.getBaseLog(t, a.globals.minYArr[i]),
                        s = (0 === a.globals.maxYArr[i] ? 0 : this.getBaseLog(t, a.globals.maxYArr[i])) - r;
                    return e < 1 ? e / s : (this.getBaseLog(t, e) - r) / s
                }
            }, {
                key: "getLogYRatios", value: function (t) {
                    var e = this, i = this.w, a = this.w.globals;
                    return a.yLogRatio = t.slice(), a.logYRange = a.yRange.map((function (t, r) {
                        if (i.config.yaxis[r] && e.w.config.yaxis[r].logarithmic) {
                            var s, n = -Number.MAX_VALUE, o = Number.MIN_VALUE;
                            return a.seriesLog.forEach((function (t, e) {
                                t.forEach((function (t) {
                                    i.config.yaxis[e] && i.config.yaxis[e].logarithmic && (n = Math.max(t, n), o = Math.min(t, o))
                                }))
                            })), s = Math.pow(a.yRange[r], Math.abs(o - n) / a.yRange[r]), a.yLogRatio[r] = s / a.gridHeight, s
                        }
                    })), a.invalidLogScale ? t.slice() : a.yLogRatio
                }
            }], a = [{
                key: "checkComboSeries", value: function (t) {
                    var e = !1, i = 0, a = 0;
                    return t.length && void 0 !== t[0].type && t.forEach((function (t) {
                        "bar" !== t.type && "column" !== t.type && "candlestick" !== t.type && "boxPlot" !== t.type || i++, void 0 !== t.type && a++
                    })), a > 0 && (e = !0), {comboBarCount: i, comboCharts: e}
                }
            }, {
                key: "extendArrayProps", value: function (t, e, i) {
                    return e.yaxis && (e = t.extendYAxis(e, i)), e.annotations && (e.annotations.yaxis && (e = t.extendYAxisAnnotations(e)), e.annotations.xaxis && (e = t.extendXAxisAnnotations(e)), e.annotations.points && (e = t.extendPointAnnotations(e))), e
                }
            }], i && f(e.prototype, i), a && f(e, a), t
        }();

        function x(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var b = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.w = e.w, this.annoCtx = e
            }

            var e, i;
            return e = t, i = [{
                key: "setOrientations", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = this.w;
                    if ("vertical" === t.label.orientation) {
                        var a = null !== e ? e : 0,
                            r = i.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(a, "']"));
                        if (null !== r) {
                            var s = r.getBoundingClientRect();
                            r.setAttribute("x", parseFloat(r.getAttribute("x")) - s.height + 4), "top" === t.label.position ? r.setAttribute("y", parseFloat(r.getAttribute("y")) + s.width) : r.setAttribute("y", parseFloat(r.getAttribute("y")) - s.width);
                            var n = this.annoCtx.graphics.rotateAroundCenter(r), o = n.x, l = n.y;
                            r.setAttribute("transform", "rotate(-90 ".concat(o, " ").concat(l, ")"))
                        }
                    }
                }
            }, {
                key: "addBackgroundToAnno", value: function (t, e) {
                    var i = this.w;
                    if (!t || void 0 === e.label.text || void 0 !== e.label.text && !String(e.label.text).trim()) return null;
                    var a = i.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(),
                        r = t.getBoundingClientRect(), s = e.label.style.padding.left, n = e.label.style.padding.right,
                        o = e.label.style.padding.top, l = e.label.style.padding.bottom;
                    "vertical" === e.label.orientation && (o = e.label.style.padding.left, l = e.label.style.padding.right, s = e.label.style.padding.top, n = e.label.style.padding.bottom);
                    var c = r.left - a.left - s, h = r.top - a.top - o,
                        d = this.annoCtx.graphics.drawRect(c - i.globals.barPadForNumericAxis, h, r.width + s + n, r.height + o + l, e.label.borderRadius, e.label.style.background, 1, e.label.borderWidth, e.label.borderColor, 0);
                    return e.id && d.node.classList.add(e.id), d
                }
            }, {
                key: "annotationsBackground", value: function () {
                    var t = this, e = this.w, i = function (i, a, r) {
                        var s = e.globals.dom.baseEl.querySelector(".apexcharts-".concat(r, "-annotations .apexcharts-").concat(r, "-annotation-label[rel='").concat(a, "']"));
                        if (s) {
                            var n = s.parentNode, o = t.addBackgroundToAnno(s, i);
                            o && (n.insertBefore(o.node, s), i.label.mouseEnter && o.node.addEventListener("mouseenter", i.label.mouseEnter.bind(t, i)), i.label.mouseLeave && o.node.addEventListener("mouseleave", i.label.mouseLeave.bind(t, i)), i.label.click && o.node.addEventListener("click", i.label.click.bind(t, i)))
                        }
                    };
                    e.config.annotations.xaxis.map((function (t, e) {
                        i(t, e, "xaxis")
                    })), e.config.annotations.yaxis.map((function (t, e) {
                        i(t, e, "yaxis")
                    })), e.config.annotations.points.map((function (t, e) {
                        i(t, e, "point")
                    }))
                }
            }, {
                key: "getY1Y2", value: function (t, e) {
                    var i, a = "y1" === t ? e.y : e.y2, r = this.w;
                    if (this.annoCtx.invertAxis) {
                        var s = r.globals.labels.indexOf(a);
                        r.config.xaxis.convertedCatToNumeric && (s = r.globals.categoryLabels.indexOf(a));
                        var n = r.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child(" + (s + 1) + ")");
                        n && (i = parseFloat(n.getAttribute("y"))), void 0 !== e.seriesIndex && r.globals.barHeight && (i = i - r.globals.barHeight / 2 * (r.globals.series.length - 1) + r.globals.barHeight * e.seriesIndex)
                    } else {
                        var o;
                        o = r.config.yaxis[e.yAxisIndex].logarithmic ? (a = new p(this.annoCtx.ctx).getLogVal(a, e.yAxisIndex)) / r.globals.yLogRatio[e.yAxisIndex] : (a - r.globals.minYArr[e.yAxisIndex]) / (r.globals.yRange[e.yAxisIndex] / r.globals.gridHeight), i = r.globals.gridHeight - o, !e.marker || void 0 !== e.y && null !== e.y || (i = 0), r.config.yaxis[e.yAxisIndex] && r.config.yaxis[e.yAxisIndex].reversed && (i = o)
                    }
                    return "string" == typeof a && a.indexOf("px") > -1 && (i = parseFloat(a)), i
                }
            }, {
                key: "getX1X2", value: function (t, e) {
                    var i = this.w, a = this.annoCtx.invertAxis ? i.globals.minY : i.globals.minX,
                        r = this.annoCtx.invertAxis ? i.globals.maxY : i.globals.maxX,
                        s = this.annoCtx.invertAxis ? i.globals.yRange[0] : i.globals.xRange,
                        n = (e.x - a) / (s / i.globals.gridWidth);
                    this.annoCtx.inversedReversedAxis && (n = (r - e.x) / (s / i.globals.gridWidth)), "category" !== i.config.xaxis.type && !i.config.xaxis.convertedCatToNumeric || this.annoCtx.invertAxis || i.globals.dataFormatXNumeric || (n = this.getStringX(e.x));
                    var o = (e.x2 - a) / (s / i.globals.gridWidth);
                    return this.annoCtx.inversedReversedAxis && (o = (r - e.x2) / (s / i.globals.gridWidth)), "category" !== i.config.xaxis.type && !i.config.xaxis.convertedCatToNumeric || this.annoCtx.invertAxis || i.globals.dataFormatXNumeric || (o = this.getStringX(e.x2)), void 0 !== e.x && null !== e.x || !e.marker || (n = i.globals.gridWidth), "x1" === t && "string" == typeof e.x && e.x.indexOf("px") > -1 && (n = parseFloat(e.x)), "x2" === t && "string" == typeof e.x2 && e.x2.indexOf("px") > -1 && (o = parseFloat(e.x2)), void 0 !== e.seriesIndex && i.globals.barWidth && !this.annoCtx.invertAxis && (n = n - i.globals.barWidth / 2 * (i.globals.series.length - 1) + i.globals.barWidth * e.seriesIndex), "x1" === t ? n : o
                }
            }, {
                key: "getStringX", value: function (t) {
                    var e = this.w, i = t;
                    e.config.xaxis.convertedCatToNumeric && e.globals.categoryLabels.length && (t = e.globals.categoryLabels.indexOf(t) + 1);
                    var a = e.globals.labels.indexOf(t),
                        r = e.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child(" + (a + 1) + ")");
                    return r && (i = parseFloat(r.getAttribute("x"))), i
                }
            }], i && x(e.prototype, i), t
        }();

        function v(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var m = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.w = e.w, this.annoCtx = e, this.invertAxis = this.annoCtx.invertAxis, this.helpers = new b(this.annoCtx)
            }

            var e, i;
            return e = t, (i = [{
                key: "addXaxisAnnotation", value: function (t, e, i) {
                    var a, s = this.w, n = this.helpers.getX1X2("x1", t), o = t.label.text, l = t.strokeDashArray;
                    if (r.isNumber(n)) {
                        if (null === t.x2 || void 0 === t.x2) {
                            var c = this.annoCtx.graphics.drawLine(n + t.offsetX, 0 + t.offsetY, n + t.offsetX, s.globals.gridHeight + t.offsetY, t.borderColor, l, t.borderWidth);
                            e.appendChild(c.node), t.id && c.node.classList.add(t.id)
                        } else {
                            if ((a = this.helpers.getX1X2("x2", t)) < n) {
                                var h = n;
                                n = a, a = h
                            }
                            var d = this.annoCtx.graphics.drawRect(n + t.offsetX, 0 + t.offsetY, a - n, s.globals.gridHeight + t.offsetY, 0, t.fillColor, t.opacity, 1, t.borderColor, l);
                            d.node.classList.add("apexcharts-annotation-rect"), d.attr("clip-path", "url(#gridRectMask".concat(s.globals.cuid, ")")), e.appendChild(d.node), t.id && d.node.classList.add(t.id)
                        }
                        var u = this.annoCtx.graphics.getTextRects(o, parseFloat(t.label.style.fontSize)),
                            g = "top" === t.label.position ? 4 : "center" === t.label.position ? s.globals.gridHeight / 2 + ("vertical" === t.label.orientation ? u.width / 2 : 0) : s.globals.gridHeight,
                            f = this.annoCtx.graphics.drawText({
                                x: n + t.label.offsetX,
                                y: g + t.label.offsetY - ("vertical" === t.label.orientation ? "top" === t.label.position ? u.width / 2 - 12 : -u.width / 2 : 0),
                                text: o,
                                textAnchor: t.label.textAnchor,
                                fontSize: t.label.style.fontSize,
                                fontFamily: t.label.style.fontFamily,
                                fontWeight: t.label.style.fontWeight,
                                foreColor: t.label.style.color,
                                cssClass: "apexcharts-xaxis-annotation-label ".concat(t.label.style.cssClass, " ").concat(t.id ? t.id : "")
                            });
                        f.attr({rel: i}), e.appendChild(f.node), this.annoCtx.helpers.setOrientations(t, i)
                    }
                }
            }, {
                key: "drawXAxisAnnotations", value: function () {
                    var t = this, e = this.w, i = this.annoCtx.graphics.group({class: "apexcharts-xaxis-annotations"});
                    return e.config.annotations.xaxis.map((function (e, a) {
                        t.addXaxisAnnotation(e, i.node, a)
                    })), i
                }
            }]) && v(e.prototype, i), t
        }();

        function y(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var w = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.w = e.w, this.annoCtx = e, this.helpers = new b(this.annoCtx)
            }

            var e, i;
            return e = t, (i = [{
                key: "addYaxisAnnotation", value: function (t, e, i) {
                    var a, r = this.w, s = t.strokeDashArray, n = this.helpers.getY1Y2("y1", t), o = t.label.text;
                    if (null === t.y2 || void 0 === t.y2) {
                        var l = this.annoCtx.graphics.drawLine(0 + t.offsetX, n + t.offsetY, this._getYAxisAnnotationWidth(t), n + t.offsetY, t.borderColor, s, t.borderWidth);
                        e.appendChild(l.node), t.id && l.node.classList.add(t.id)
                    } else {
                        if ((a = this.helpers.getY1Y2("y2", t)) > n) {
                            var c = n;
                            n = a, a = c
                        }
                        var h = this.annoCtx.graphics.drawRect(0 + t.offsetX, a + t.offsetY, this._getYAxisAnnotationWidth(t), n - a, 0, t.fillColor, t.opacity, 1, t.borderColor, s);
                        h.node.classList.add("apexcharts-annotation-rect"), h.attr("clip-path", "url(#gridRectMask".concat(r.globals.cuid, ")")), e.appendChild(h.node), t.id && h.node.classList.add(t.id)
                    }
                    var d = "right" === t.label.position ? r.globals.gridWidth : "center" === t.label.position ? r.globals.gridWidth / 2 : 0,
                        u = this.annoCtx.graphics.drawText({
                            x: d + t.label.offsetX,
                            y: (null != a ? a : n) + t.label.offsetY - 3,
                            text: o,
                            textAnchor: t.label.textAnchor,
                            fontSize: t.label.style.fontSize,
                            fontFamily: t.label.style.fontFamily,
                            fontWeight: t.label.style.fontWeight,
                            foreColor: t.label.style.color,
                            cssClass: "apexcharts-yaxis-annotation-label ".concat(t.label.style.cssClass, " ").concat(t.id ? t.id : "")
                        });
                    u.attr({rel: i}), e.appendChild(u.node)
                }
            }, {
                key: "_getYAxisAnnotationWidth", value: function (t) {
                    var e = this.w;
                    return e.globals.gridWidth, (t.width.indexOf("%") > -1 ? e.globals.gridWidth * parseInt(t.width, 10) / 100 : parseInt(t.width, 10)) + t.offsetX
                }
            }, {
                key: "drawYAxisAnnotations", value: function () {
                    var t = this, e = this.w, i = this.annoCtx.graphics.group({class: "apexcharts-yaxis-annotations"});
                    return e.config.annotations.yaxis.map((function (e, a) {
                        t.addYaxisAnnotation(e, i.node, a)
                    })), i
                }
            }]) && y(e.prototype, i), t
        }();

        function k(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var A = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.w = e.w, this.annoCtx = e, this.helpers = new b(this.annoCtx)
            }

            var e, i;
            return e = t, (i = [{
                key: "addPointAnnotation", value: function (t, e, i) {
                    this.w;
                    var a = this.helpers.getX1X2("x1", t), s = this.helpers.getY1Y2("y1", t);
                    if (r.isNumber(a)) {
                        var n = {
                            pSize: t.marker.size,
                            pointStrokeWidth: t.marker.strokeWidth,
                            pointFillColor: t.marker.fillColor,
                            pointStrokeColor: t.marker.strokeColor,
                            shape: t.marker.shape,
                            pRadius: t.marker.radius,
                            class: "apexcharts-point-annotation-marker ".concat(t.marker.cssClass, " ").concat(t.id ? t.id : "")
                        }, o = this.annoCtx.graphics.drawMarker(a + t.marker.offsetX, s + t.marker.offsetY, n);
                        e.appendChild(o.node);
                        var l = t.label.text ? t.label.text : "", c = this.annoCtx.graphics.drawText({
                            x: a + t.label.offsetX,
                            y: s + t.label.offsetY - t.marker.size - parseFloat(t.label.style.fontSize) / 1.6,
                            text: l,
                            textAnchor: t.label.textAnchor,
                            fontSize: t.label.style.fontSize,
                            fontFamily: t.label.style.fontFamily,
                            fontWeight: t.label.style.fontWeight,
                            foreColor: t.label.style.color,
                            cssClass: "apexcharts-point-annotation-label ".concat(t.label.style.cssClass, " ").concat(t.id ? t.id : "")
                        });
                        if (c.attr({rel: i}), e.appendChild(c.node), t.customSVG.SVG) {
                            var h = this.annoCtx.graphics.group({class: "apexcharts-point-annotations-custom-svg " + t.customSVG.cssClass});
                            h.attr({transform: "translate(".concat(a + t.customSVG.offsetX, ", ").concat(s + t.customSVG.offsetY, ")")}), h.node.innerHTML = t.customSVG.SVG, e.appendChild(h.node)
                        }
                        if (t.image.path) {
                            var d = t.image.width ? t.image.width : 20, u = t.image.height ? t.image.height : 20;
                            o = this.annoCtx.addImage({
                                x: a + t.image.offsetX - d / 2,
                                y: s + t.image.offsetY - u / 2,
                                width: d,
                                height: u,
                                path: t.image.path,
                                appendTo: ".apexcharts-point-annotations"
                            })
                        }
                        t.mouseEnter && o.node.addEventListener("mouseenter", t.mouseEnter.bind(this, t)), t.mouseLeave && o.node.addEventListener("mouseleave", t.mouseLeave.bind(this, t)), t.click && o.node.addEventListener("click", t.click.bind(this, t))
                    }
                }
            }, {
                key: "drawPointAnnotations", value: function () {
                    var t = this, e = this.w, i = this.annoCtx.graphics.group({class: "apexcharts-point-annotations"});
                    return e.config.annotations.points.map((function (e, a) {
                        t.addPointAnnotation(e, i.node, a)
                    })), i
                }
            }]) && k(e.prototype, i), t
        }();
        const S = JSON.parse('{"name":"en","options":{"months":["January","February","March","April","May","June","July","August","September","October","November","December"],"shortMonths":["Jan","Feb","اسفند","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"days":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"shortDays":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"toolbar":{"exportToSVG":"Download SVG","exportToPNG":"Download PNG","exportToCSV":"Download CSV","menu":"Menu","selection":"Selection","selectionZoom":"Selection Zoom","zoomIn":"Zoom In","zoomOut":"Zoom Out","pan":"Panning","reset":"Reset Zoom"}}}');

        function C(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var P = function () {
            function t() {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.yAxis = {
                    show: !0,
                    showAlways: !1,
                    showForNullSeries: !0,
                    seriesName: void 0,
                    opposite: !1,
                    reversed: !1,
                    logarithmic: !1,
                    logBase: 10,
                    tickAmount: void 0,
                    stepSize: void 0,
                    forceNiceScale: !1,
                    max: void 0,
                    min: void 0,
                    floating: !1,
                    decimalsInFloat: void 0,
                    labels: {
                        show: !0,
                        minWidth: 0,
                        maxWidth: 160,
                        offsetX: 0,
                        offsetY: 0,
                        align: void 0,
                        rotate: 0,
                        padding: 20,
                        style: {colors: [], fontSize: "11px", fontWeight: 400, fontFamily: void 0, cssClass: ""},
                        formatter: void 0
                    },
                    axisBorder: {show: !1, color: "#e0e0e0", width: 1, offsetX: 0, offsetY: 0},
                    axisTicks: {show: !1, color: "#e0e0e0", width: 6, offsetX: 0, offsetY: 0},
                    title: {
                        text: void 0,
                        rotate: -90,
                        offsetY: 0,
                        offsetX: 0,
                        style: {color: void 0, fontSize: "11px", fontWeight: 900, fontFamily: void 0, cssClass: ""}
                    },
                    tooltip: {enabled: !1, offsetX: 0},
                    crosshairs: {show: !0, position: "front", stroke: {color: "#b6b6b6", width: 1, dashArray: 0}}
                }, this.pointAnnotation = {
                    id: void 0,
                    x: 0,
                    y: null,
                    yAxisIndex: 0,
                    seriesIndex: void 0,
                    mouseEnter: void 0,
                    mouseLeave: void 0,
                    click: void 0,
                    marker: {
                        size: 4,
                        fillColor: "#fff",
                        strokeWidth: 2,
                        strokeColor: "#333",
                        shape: "circle",
                        offsetX: 0,
                        offsetY: 0,
                        radius: 2,
                        cssClass: ""
                    },
                    label: {
                        borderColor: "#c2c2c2",
                        borderWidth: 1,
                        borderRadius: 2,
                        text: void 0,
                        textAnchor: "middle",
                        offsetX: 0,
                        offsetY: 0,
                        mouseEnter: void 0,
                        mouseLeave: void 0,
                        click: void 0,
                        style: {
                            background: "#fff",
                            color: void 0,
                            fontSize: "11px",
                            fontFamily: void 0,
                            fontWeight: 400,
                            cssClass: "",
                            padding: {left: 5, right: 5, top: 2, bottom: 2}
                        }
                    },
                    customSVG: {SVG: void 0, cssClass: void 0, offsetX: 0, offsetY: 0},
                    image: {path: void 0, width: 20, height: 20, offsetX: 0, offsetY: 0}
                }, this.yAxisAnnotation = {
                    id: void 0,
                    y: 0,
                    y2: null,
                    strokeDashArray: 1,
                    fillColor: "#c2c2c2",
                    borderColor: "#c2c2c2",
                    borderWidth: 1,
                    opacity: .3,
                    offsetX: 0,
                    offsetY: 0,
                    width: "100%",
                    yAxisIndex: 0,
                    label: {
                        borderColor: "#c2c2c2",
                        borderWidth: 1,
                        borderRadius: 2,
                        text: void 0,
                        textAnchor: "end",
                        position: "right",
                        offsetX: 0,
                        offsetY: -3,
                        mouseEnter: void 0,
                        mouseLeave: void 0,
                        click: void 0,
                        style: {
                            background: "#fff",
                            color: void 0,
                            fontSize: "11px",
                            fontFamily: void 0,
                            fontWeight: 400,
                            cssClass: "",
                            padding: {left: 5, right: 5, top: 2, bottom: 2}
                        }
                    }
                }, this.xAxisAnnotation = {
                    id: void 0,
                    x: 0,
                    x2: null,
                    strokeDashArray: 1,
                    fillColor: "#c2c2c2",
                    borderColor: "#c2c2c2",
                    borderWidth: 1,
                    opacity: .3,
                    offsetX: 0,
                    offsetY: 0,
                    label: {
                        borderColor: "#c2c2c2",
                        borderWidth: 1,
                        borderRadius: 2,
                        text: void 0,
                        textAnchor: "middle",
                        orientation: "vertical",
                        position: "top",
                        offsetX: 0,
                        offsetY: 0,
                        mouseEnter: void 0,
                        mouseLeave: void 0,
                        click: void 0,
                        style: {
                            background: "#fff",
                            color: void 0,
                            fontSize: "11px",
                            fontFamily: void 0,
                            fontWeight: 400,
                            cssClass: "",
                            padding: {left: 5, right: 5, top: 2, bottom: 2}
                        }
                    }
                }, this.text = {
                    x: 0,
                    y: 0,
                    text: "",
                    textAnchor: "start",
                    foreColor: void 0,
                    fontSize: "13px",
                    fontFamily: void 0,
                    fontWeight: 400,
                    appendTo: ".apexcharts-annotations",
                    backgroundColor: "transparent",
                    borderColor: "#c2c2c2",
                    borderRadius: 0,
                    borderWidth: 0,
                    paddingLeft: 4,
                    paddingRight: 4,
                    paddingTop: 2,
                    paddingBottom: 2
                }
            }

            var e, i;
            return e = t, (i = [{
                key: "init", value: function () {
                    return {
                        annotations: {
                            yaxis: [this.yAxisAnnotation],
                            xaxis: [this.xAxisAnnotation],
                            points: [this.pointAnnotation],
                            texts: [],
                            images: [],
                            shapes: []
                        },
                        chart: {
                            animations: {
                                enabled: !0,
                                easing: "easeinout",
                                speed: 800,
                                animateGradually: {delay: 150, enabled: !0},
                                dynamicAnimation: {enabled: !0, speed: 350}
                            },
                            background: "transparent",
                            locales: [S],
                            defaultLocale: "en",
                            dropShadow: {
                                enabled: !1,
                                enabledOnSeries: void 0,
                                top: 2,
                                left: 2,
                                blur: 4,
                                color: "#000",
                                opacity: .35
                            },
                            events: {
                                animationEnd: void 0,
                                beforeMount: void 0,
                                mounted: void 0,
                                updated: void 0,
                                click: void 0,
                                mouseMove: void 0,
                                mouseLeave: void 0,
                                xAxisLabelClick: void 0,
                                legendClick: void 0,
                                markerClick: void 0,
                                selection: void 0,
                                dataPointSelection: void 0,
                                dataPointMouseEnter: void 0,
                                dataPointMouseLeave: void 0,
                                beforeZoom: void 0,
                                beforeResetZoom: void 0,
                                zoomed: void 0,
                                scrolled: void 0,
                                brushScrolled: void 0
                            },
                            foreColor: "#373d3f",
                            fontFamily: "shabnam, Helvetica, Arial, sans-serif",
                            height: "auto",
                            parentHeightOffset: 15,
                            redrawOnParentResize: !0,
                            redrawOnWindowResize: !0,
                            id: void 0,
                            group: void 0,
                            nonce: void 0,
                            offsetX: 0,
                            offsetY: 0,
                            selection: {
                                enabled: !1,
                                type: "x",
                                fill: {color: "#24292e", opacity: .1},
                                stroke: {width: 1, color: "#24292e", opacity: .4, dashArray: 3},
                                xaxis: {min: void 0, max: void 0},
                                yaxis: {min: void 0, max: void 0}
                            },
                            sparkline: {enabled: !1},
                            brush: {enabled: !1, autoScaleYaxis: !0, target: void 0, targets: void 0},
                            stacked: !1,
                            stackOnlyBar: !0,
                            stackType: "normal",
                            toolbar: {
                                show: !0,
                                offsetX: 0,
                                offsetY: 0,
                                tools: {
                                    download: !0,
                                    selection: !0,
                                    zoom: !0,
                                    zoomin: !0,
                                    zoomout: !0,
                                    pan: !0,
                                    reset: !0,
                                    customIcons: []
                                },
                                export: {
                                    csv: {
                                        filename: void 0,
                                        columnDelimiter: ",",
                                        headerCategory: "category",
                                        headerValue: "value",
                                        dateFormatter: function (t) {
                                            return new Date(t).toDateString()
                                        }
                                    }, png: {filename: void 0}, svg: {filename: void 0}
                                },
                                autoSelected: "zoom"
                            },
                            type: "line",
                            width: "100%",
                            zoom: {
                                enabled: !0,
                                type: "x",
                                autoScaleYaxis: !1,
                                zoomedArea: {
                                    fill: {color: "#90CAF9", opacity: .4},
                                    stroke: {color: "#0D47A1", opacity: .4, width: 1}
                                }
                            }
                        },
                        plotOptions: {
                            area: {fillTo: "origin"},
                            bar: {
                                horizontal: !1,
                                columnWidth: "70%",
                                barHeight: "70%",
                                distributed: !1,
                                borderRadius: 0,
                                borderRadiusApplication: "around",
                                borderRadiusWhenStacked: "last",
                                rangeBarOverlap: !0,
                                rangeBarGroupRows: !1,
                                hideZeroBarsWhenGrouped: !1,
                                isDumbbell: !1,
                                dumbbellColors: void 0,
                                isFunnel: !1,
                                isFunnel3d: !0,
                                colors: {
                                    ranges: [],
                                    backgroundBarColors: [],
                                    backgroundBarOpacity: 1,
                                    backgroundBarRadius: 0
                                },
                                dataLabels: {
                                    position: "top",
                                    maxItems: 100,
                                    hideOverflowingLabels: !0,
                                    orientation: "horizontal",
                                    total: {
                                        enabled: !1,
                                        formatter: void 0,
                                        offsetX: 0,
                                        offsetY: 0,
                                        style: {color: "#373d3f", fontSize: "12px", fontFamily: void 0, fontWeight: 600}
                                    }
                                }
                            },
                            bubble: {zScaling: !0, minBubbleRadius: void 0, maxBubbleRadius: void 0},
                            candlestick: {colors: {upward: "#00B746", downward: "#EF403C"}, wick: {useFillColor: !0}},
                            boxPlot: {colors: {upper: "#00E396", lower: "#008FFB"}},
                            heatmap: {
                                radius: 2,
                                enableShades: !0,
                                shadeIntensity: .5,
                                reverseNegativeShade: !1,
                                distributed: !1,
                                useFillColorAsStroke: !1,
                                colorScale: {inverse: !1, ranges: [], min: void 0, max: void 0}
                            },
                            treemap: {
                                enableShades: !0,
                                shadeIntensity: .5,
                                distributed: !1,
                                reverseNegativeShade: !1,
                                useFillColorAsStroke: !1,
                                borderRadius: 4,
                                dataLabels: {format: "scale"},
                                colorScale: {inverse: !1, ranges: [], min: void 0, max: void 0}
                            },
                            radialBar: {
                                inverseOrder: !1,
                                startAngle: 0,
                                endAngle: 360,
                                offsetX: 0,
                                offsetY: 0,
                                hollow: {
                                    margin: 5,
                                    size: "50%",
                                    background: "transparent",
                                    image: void 0,
                                    imageWidth: 150,
                                    imageHeight: 150,
                                    imageOffsetX: 0,
                                    imageOffsetY: 0,
                                    imageClipped: !0,
                                    position: "front",
                                    dropShadow: {enabled: !1, top: 0, left: 0, blur: 3, color: "#000", opacity: .5}
                                },
                                track: {
                                    show: !0,
                                    startAngle: void 0,
                                    endAngle: void 0,
                                    background: "#f2f2f2",
                                    strokeWidth: "97%",
                                    opacity: 1,
                                    margin: 5,
                                    dropShadow: {enabled: !1, top: 0, left: 0, blur: 3, color: "#000", opacity: .5}
                                },
                                dataLabels: {
                                    show: !0,
                                    name: {
                                        show: !0,
                                        fontSize: "16px",
                                        fontFamily: void 0,
                                        fontWeight: 600,
                                        color: void 0,
                                        offsetY: 0,
                                        formatter: function (t) {
                                            return t
                                        }
                                    },
                                    value: {
                                        show: !0,
                                        fontSize: "14px",
                                        fontFamily: void 0,
                                        fontWeight: 400,
                                        color: void 0,
                                        offsetY: 16,
                                        formatter: function (t) {
                                            return t + "%"
                                        }
                                    },
                                    total: {
                                        show: !1,
                                        label: "مجموع",
                                        fontSize: "16px",
                                        fontWeight: 600,
                                        fontFamily: void 0,
                                        color: void 0,
                                        formatter: function (t) {
                                            return t.globals.seriesTotals.reduce((function (t, e) {
                                                return t + e
                                            }), 0) / t.globals.series.length + "%"
                                        }
                                    }
                                },
                                barLabels: {
                                    enabled: !1,
                                    margin: 5,
                                    useSeriesColors: !0,
                                    fontFamily: void 0,
                                    fontWeight: 600,
                                    fontSize: "16px",
                                    formatter: function (t) {
                                        return t
                                    },
                                    onClick: void 0
                                }
                            },
                            pie: {
                                customScale: 1,
                                offsetX: 0,
                                offsetY: 0,
                                startAngle: 0,
                                endAngle: 360,
                                expandOnClick: !0,
                                dataLabels: {offset: 0, minAngleToShowLabel: 10},
                                donut: {
                                    size: "65%",
                                    background: "transparent",
                                    labels: {
                                        show: !1,
                                        name: {
                                            show: !0,
                                            fontSize: "16px",
                                            fontFamily: void 0,
                                            fontWeight: 600,
                                            color: void 0,
                                            offsetY: -10,
                                            formatter: function (t) {
                                                return t
                                            }
                                        },
                                        value: {
                                            show: !0,
                                            fontSize: "20px",
                                            fontFamily: void 0,
                                            fontWeight: 400,
                                            color: void 0,
                                            offsetY: 10,
                                            formatter: function (t) {
                                                return t
                                            }
                                        },
                                        total: {
                                            show: !1,
                                            showAlways: !1,
                                            label: "مجموع",
                                            fontSize: "16px",
                                            fontWeight: 400,
                                            fontFamily: void 0,
                                            color: void 0,
                                            formatter: function (t) {
                                                return t.globals.seriesTotals.reduce((function (t, e) {
                                                    return t + e
                                                }), 0)
                                            }
                                        }
                                    }
                                }
                            },
                            polarArea: {
                                rings: {strokeWidth: 1, strokeColor: "#e8e8e8"},
                                spokes: {strokeWidth: 1, connectorColors: "#e8e8e8"}
                            },
                            radar: {
                                size: void 0,
                                offsetX: 0,
                                offsetY: 0,
                                polygons: {
                                    strokeWidth: 1,
                                    strokeColors: "#e8e8e8",
                                    connectorColors: "#e8e8e8",
                                    fill: {colors: void 0}
                                }
                            }
                        },
                        colors: void 0,
                        dataLabels: {
                            enabled: !0,
                            enabledOnSeries: void 0,
                            formatter: function (t) {
                                return null !== t ? t : ""
                            },
                            textAnchor: "middle",
                            distributed: !1,
                            offsetX: 0,
                            offsetY: 0,
                            style: {fontSize: "12px", fontFamily: void 0, fontWeight: 600, colors: void 0},
                            background: {
                                enabled: !0,
                                foreColor: "#fff",
                                borderRadius: 2,
                                padding: 4,
                                opacity: .9,
                                borderWidth: 1,
                                borderColor: "#fff",
                                dropShadow: {enabled: !1, top: 1, left: 1, blur: 1, color: "#000", opacity: .45}
                            },
                            dropShadow: {enabled: !1, top: 1, left: 1, blur: 1, color: "#000", opacity: .45}
                        },
                        fill: {
                            type: "solid",
                            colors: void 0,
                            opacity: .85,
                            gradient: {
                                shade: "dark",
                                type: "horizontal",
                                shadeIntensity: .5,
                                gradientToColors: void 0,
                                inverseColors: !0,
                                opacityFrom: 1,
                                opacityTo: 1,
                                stops: [0, 50, 100],
                                colorStops: []
                            },
                            image: {src: [], width: void 0, height: void 0},
                            pattern: {style: "squares", width: 6, height: 6, strokeWidth: 2}
                        },
                        forecastDataPoints: {count: 0, fillOpacity: .5, strokeWidth: void 0, dashArray: 4},
                        grid: {
                            show: !0,
                            borderColor: "#e0e0e0",
                            strokeDashArray: 0,
                            position: "back",
                            xaxis: {lines: {show: !1}},
                            yaxis: {lines: {show: !0}},
                            row: {colors: void 0, opacity: .5},
                            column: {colors: void 0, opacity: .5},
                            padding: {top: 0, right: 10, bottom: 0, left: 12}
                        },
                        labels: [],
                        legend: {
                            show: !0,
                            showForSingleSeries: !1,
                            showForNullSeries: !0,
                            showForZeroSeries: !0,
                            floating: !1,
                            position: "bottom",
                            horizontalAlign: "center",
                            inverseOrder: !1,
                            fontSize: "12px",
                            fontFamily: void 0,
                            fontWeight: 400,
                            width: void 0,
                            height: void 0,
                            formatter: void 0,
                            tooltipHoverFormatter: void 0,
                            offsetX: -20,
                            offsetY: 4,
                            customLegendItems: [],
                            labels: {colors: void 0, useSeriesColors: !1},
                            markers: {
                                width: 12,
                                height: 12,
                                strokeWidth: 0,
                                fillColors: void 0,
                                strokeColor: "#fff",
                                radius: 12,
                                customHTML: void 0,
                                offsetX: 0,
                                offsetY: 0,
                                onClick: void 0
                            },
                            itemMargin: {horizontal: 5, vertical: 2},
                            onItemClick: {toggleDataSeries: !0},
                            onItemHover: {highlightDataSeries: !0}
                        },
                        markers: {
                            discrete: [],
                            size: 0,
                            colors: void 0,
                            strokeColors: "#fff",
                            strokeWidth: 2,
                            strokeOpacity: .9,
                            strokeDashArray: 0,
                            fillOpacity: 1,
                            shape: "circle",
                            width: 8,
                            height: 8,
                            radius: 2,
                            offsetX: 0,
                            offsetY: 0,
                            onClick: void 0,
                            onDblClick: void 0,
                            showNullDataPoints: !0,
                            hover: {size: void 0, sizeOffset: 3}
                        },
                        noData: {
                            text: void 0,
                            align: "center",
                            verticalAlign: "middle",
                            offsetX: 0,
                            offsetY: 0,
                            style: {color: void 0, fontSize: "14px", fontFamily: void 0}
                        },
                        responsive: [],
                        series: void 0,
                        states: {
                            normal: {filter: {type: "none", value: 0}},
                            hover: {filter: {type: "lighten", value: .1}},
                            active: {allowMultipleDataPointsSelection: !1, filter: {type: "darken", value: .5}}
                        },
                        title: {
                            text: void 0,
                            align: "left",
                            margin: 5,
                            offsetX: 0,
                            offsetY: 0,
                            floating: !1,
                            style: {fontSize: "14px", fontWeight: 900, fontFamily: void 0, color: void 0}
                        },
                        subtitle: {
                            text: void 0,
                            align: "left",
                            margin: 5,
                            offsetX: 0,
                            offsetY: 30,
                            floating: !1,
                            style: {fontSize: "12px", fontWeight: 400, fontFamily: void 0, color: void 0}
                        },
                        stroke: {
                            show: !0,
                            curve: "smooth",
                            lineCap: "butt",
                            width: 2,
                            colors: void 0,
                            dashArray: 0,
                            fill: {
                                type: "solid",
                                colors: void 0,
                                opacity: .85,
                                gradient: {
                                    shade: "dark",
                                    type: "horizontal",
                                    shadeIntensity: .5,
                                    gradientToColors: void 0,
                                    inverseColors: !0,
                                    opacityFrom: 1,
                                    opacityTo: 1,
                                    stops: [0, 50, 100],
                                    colorStops: []
                                }
                            }
                        },
                        tooltip: {
                            enabled: !0,
                            enabledOnSeries: void 0,
                            shared: !0,
                            hideEmptySeries: !1,
                            followCursor: !1,
                            intersect: !1,
                            inverseOrder: !1,
                            custom: void 0,
                            fillSeriesColor: !1,
                            theme: "light",
                            cssClass: "",
                            style: {fontSize: "12px", fontFamily: void 0},
                            onDatasetHover: {highlightDataSeries: !1},
                            x: {show: !0, format: "dd MMM", formatter: void 0},
                            y: {
                                formatter: void 0, title: {
                                    formatter: function (t) {
                                        return t ? t + ": " : ""
                                    }
                                }
                            },
                            z: {formatter: void 0, title: "اندازه: "},
                            marker: {show: !0, fillColors: void 0},
                            items: {display: "flex"},
                            fixed: {enabled: !1, position: "topRight", offsetX: 0, offsetY: 0}
                        },
                        xaxis: {
                            type: "category",
                            categories: [],
                            convertedCatToNumeric: !1,
                            offsetX: 0,
                            offsetY: 0,
                            overwriteCategories: void 0,
                            labels: {
                                show: !0,
                                rotate: -45,
                                rotateAlways: !1,
                                hideOverlappingLabels: !0,
                                trim: !1,
                                minHeight: void 0,
                                maxHeight: 120,
                                showDuplicates: !0,
                                style: {
                                    colors: [],
                                    fontSize: "12px",
                                    fontWeight: 400,
                                    fontFamily: void 0,
                                    cssClass: ""
                                },
                                offsetX: 0,
                                offsetY: 0,
                                format: void 0,
                                formatter: void 0,
                                datetimeUTC: !0,
                                datetimeFormatter: {
                                    year: "yyyy",
                                    month: "MMM 'yy",
                                    day: "dd MMM",
                                    hour: "HH:mm",
                                    minute: "HH:mm:ss",
                                    second: "HH:mm:ss"
                                }
                            },
                            group: {
                                groups: [],
                                style: {colors: [], fontSize: "12px", fontWeight: 400, fontFamily: void 0, cssClass: ""}
                            },
                            axisBorder: {show: !0, color: "#e0e0e0", width: "100%", height: 1, offsetX: 0, offsetY: 0},
                            axisTicks: {show: !0, color: "#e0e0e0", height: 6, offsetX: 0, offsetY: 0},
                            stepSize: void 0,
                            tickAmount: void 0,
                            tickPlacement: "on",
                            min: void 0,
                            max: void 0,
                            range: void 0,
                            floating: !1,
                            decimalsInFloat: void 0,
                            position: "bottom",
                            title: {
                                text: void 0,
                                offsetX: 0,
                                offsetY: 0,
                                style: {
                                    color: void 0,
                                    fontSize: "12px",
                                    fontWeight: 900,
                                    fontFamily: void 0,
                                    cssClass: ""
                                }
                            },
                            crosshairs: {
                                show: !0,
                                width: 1,
                                position: "back",
                                opacity: .9,
                                stroke: {color: "#b6b6b6", width: 1, dashArray: 3},
                                fill: {
                                    type: "solid",
                                    color: "#B1B9C4",
                                    gradient: {
                                        colorFrom: "#D8E3F0",
                                        colorTo: "#BED1E6",
                                        stops: [0, 100],
                                        opacityFrom: .4,
                                        opacityTo: .5
                                    }
                                },
                                dropShadow: {enabled: !1, left: 0, top: 0, blur: 1, opacity: .4}
                            },
                            tooltip: {
                                enabled: !0,
                                offsetY: 0,
                                formatter: void 0,
                                style: {fontSize: "12px", fontFamily: void 0}
                            }
                        },
                        yaxis: this.yAxis,
                        theme: {
                            mode: "light",
                            palette: "palette1",
                            monochrome: {enabled: !1, color: "#008FFB", shadeTo: "light", shadeIntensity: .65}
                        }
                    }
                }
            }]) && C(e.prototype, i), t
        }();

        function L(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var O = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.graphics = new g(this.ctx), this.w.globals.isBarHorizontal && (this.invertAxis = !0), this.helpers = new b(this), this.xAxisAnnotations = new m(this), this.yAxisAnnotations = new w(this), this.pointsAnnotations = new A(this), this.w.globals.isBarHorizontal && this.w.config.yaxis[0].reversed && (this.inversedReversedAxis = !0), this.xDivision = this.w.globals.gridWidth / this.w.globals.dataPoints
            }

            var e, i;
            return e = t, (i = [{
                key: "drawAxesAnnotations", value: function () {
                    var t = this.w;
                    if (t.globals.axisCharts) {
                        for (var e = this.yAxisAnnotations.drawYAxisAnnotations(), i = this.xAxisAnnotations.drawXAxisAnnotations(), a = this.pointsAnnotations.drawPointAnnotations(), r = t.config.chart.animations.enabled, s = [e, i, a], n = [i.node, e.node, a.node], o = 0; o < 3; o++) t.globals.dom.elGraphical.add(s[o]), !r || t.globals.resized || t.globals.dataChanged || "scatter" !== t.config.chart.type && "bubble" !== t.config.chart.type && t.globals.dataPoints > 1 && n[o].classList.add("apexcharts-element-hidden"), t.globals.delayedElements.push({
                            el: n[o],
                            index: 0
                        });
                        this.helpers.annotationsBackground()
                    }
                }
            }, {
                key: "drawImageAnnos", value: function () {
                    var t = this;
                    this.w.config.annotations.images.map((function (e, i) {
                        t.addImage(e, i)
                    }))
                }
            }, {
                key: "drawTextAnnos", value: function () {
                    var t = this;
                    this.w.config.annotations.texts.map((function (e, i) {
                        t.addText(e, i)
                    }))
                }
            }, {
                key: "addXaxisAnnotation", value: function (t, e, i) {
                    this.xAxisAnnotations.addXaxisAnnotation(t, e, i)
                }
            }, {
                key: "addYaxisAnnotation", value: function (t, e, i) {
                    this.yAxisAnnotations.addYaxisAnnotation(t, e, i)
                }
            }, {
                key: "addPointAnnotation", value: function (t, e, i) {
                    this.pointsAnnotations.addPointAnnotation(t, e, i)
                }
            }, {
                key: "addText", value: function (t, e) {
                    var i = t.x, a = t.y, r = t.text, s = t.textAnchor, n = t.foreColor, o = t.fontSize,
                        l = t.fontFamily, c = t.fontWeight, h = t.cssClass, d = t.backgroundColor, u = t.borderWidth,
                        g = t.strokeDashArray, f = t.borderRadius, p = t.borderColor, x = t.appendTo,
                        b = void 0 === x ? ".apexcharts-svg" : x, v = t.paddingLeft, m = void 0 === v ? 4 : v,
                        y = t.paddingRight, w = void 0 === y ? 4 : y, k = t.paddingBottom, A = void 0 === k ? 2 : k,
                        S = t.paddingTop, C = void 0 === S ? 2 : S, P = this.w, L = this.graphics.drawText({
                            x: i,
                            y: a,
                            text: r,
                            textAnchor: s || "start",
                            fontSize: o || "12px",
                            fontWeight: c || "regular",
                            fontFamily: l || P.config.chart.fontFamily,
                            foreColor: n || P.config.chart.foreColor,
                            cssClass: h
                        }), O = P.globals.dom.baseEl.querySelector(b);
                    O && O.appendChild(L.node);
                    var T = L.bbox();
                    if (r) {
                        var I = this.graphics.drawRect(T.x - m, T.y - C, T.width + m + w, T.height + A + C, f, d || "transparent", 1, u, p, g);
                        O.insertBefore(I.node, L.node)
                    }
                }
            }, {
                key: "addImage", value: function (t, e) {
                    var i = this.w, a = t.path, r = t.x, s = void 0 === r ? 0 : r, n = t.y, o = void 0 === n ? 0 : n,
                        l = t.width, c = void 0 === l ? 20 : l, h = t.height, d = void 0 === h ? 20 : h, u = t.appendTo,
                        g = void 0 === u ? ".apexcharts-svg" : u, f = i.globals.dom.Paper.image(a);
                    f.size(c, d).move(s, o);
                    var p = i.globals.dom.baseEl.querySelector(g);
                    return p && p.appendChild(f.node), f
                }
            }, {
                key: "addXaxisAnnotationExternal", value: function (t, e, i) {
                    return this.addAnnotationExternal({
                        params: t,
                        pushToMemory: e,
                        context: i,
                        type: "xaxis",
                        contextMethod: i.addXaxisAnnotation
                    }), i
                }
            }, {
                key: "addYaxisAnnotationExternal", value: function (t, e, i) {
                    return this.addAnnotationExternal({
                        params: t,
                        pushToMemory: e,
                        context: i,
                        type: "yaxis",
                        contextMethod: i.addYaxisAnnotation
                    }), i
                }
            }, {
                key: "addPointAnnotationExternal", value: function (t, e, i) {
                    return void 0 === this.invertAxis && (this.invertAxis = i.w.globals.isBarHorizontal), this.addAnnotationExternal({
                        params: t,
                        pushToMemory: e,
                        context: i,
                        type: "point",
                        contextMethod: i.addPointAnnotation
                    }), i
                }
            }, {
                key: "addAnnotationExternal", value: function (t) {
                    var e = t.params, i = t.pushToMemory, a = t.context, s = t.type, n = t.contextMethod, o = a,
                        l = o.w, c = l.globals.dom.baseEl.querySelector(".apexcharts-".concat(s, "-annotations")),
                        h = c.childNodes.length + 1, d = new P,
                        u = Object.assign({}, "xaxis" === s ? d.xAxisAnnotation : "yaxis" === s ? d.yAxisAnnotation : d.pointAnnotation),
                        g = r.extend(u, e);
                    switch (s) {
                        case"xaxis":
                            this.addXaxisAnnotation(g, c, h);
                            break;
                        case"yaxis":
                            this.addYaxisAnnotation(g, c, h);
                            break;
                        case"point":
                            this.addPointAnnotation(g, c, h)
                    }
                    var f = l.globals.dom.baseEl.querySelector(".apexcharts-".concat(s, "-annotations .apexcharts-").concat(s, "-annotation-label[rel='").concat(h, "']")),
                        p = this.helpers.addBackgroundToAnno(f, g);
                    return p && c.insertBefore(p.node, f), i && l.globals.memory.methodsToExec.push({
                        context: o,
                        id: g.id ? g.id : r.randomId(),
                        method: n,
                        label: "addAnnotation",
                        params: e
                    }), a
                }
            }, {
                key: "clearAnnotations", value: function (t) {
                    var e = t.w,
                        i = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations");
                    e.globals.memory.methodsToExec.map((function (t, i) {
                        "addText" !== t.label && "addAnnotation" !== t.label || e.globals.memory.methodsToExec.splice(i, 1)
                    })), i = r.listToArray(i), Array.prototype.forEach.call(i, (function (t) {
                        for (; t.firstChild;) t.removeChild(t.firstChild)
                    }))
                }
            }, {
                key: "removeAnnotation", value: function (t, e) {
                    var i = t.w, a = i.globals.dom.baseEl.querySelectorAll(".".concat(e));
                    a && (i.globals.memory.methodsToExec.map((function (t, a) {
                        t.id === e && i.globals.memory.methodsToExec.splice(a, 1)
                    })), Array.prototype.forEach.call(a, (function (t) {
                        t.parentElement.removeChild(t)
                    })))
                }
            }]) && L(e.prototype, i), t
        }();

        function T(t) {
            return function (t) {
                if (Array.isArray(t)) return I(t)
            }(t) || function (t) {
                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
            }(t) || function (t, e) {
                if (t) {
                    if ("string" == typeof t) return I(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? I(t, e) : void 0
                }
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function I(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, a = new Array(e); i < e; i++) a[i] = t[i];
            return a
        }

        function E(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        const M = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.months31 = [1, 3, 5, 7, 8, 10, 12], this.months30 = [2, 4, 6, 9, 11], this.daysCntOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
            }

            var e, i;
            return e = t, (i = [{
                key: "isValidDate", value: function (t) {
                    return "number" != typeof t && !isNaN(this.parseDate(t))
                }
            }, {
                key: "getTimeStamp", value: function (t) {
                    return Date.parse(t) ? this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(t).toISOString().substr(0, 25)).getTime() : new Date(t).getTime() : t
                }
            }, {
                key: "getDate", value: function (t) {
                    return this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(t).toUTCString()) : new Date(t)
                }
            }, {
                key: "parseDate", value: function (t) {
                    var e = Date.parse(t);
                    if (!isNaN(e)) return this.getTimeStamp(t);
                    var i = Date.parse(t.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
                    return this.getTimeStamp(i)
                }
            }, {
                key: "parseDateWithTimezone", value: function (t) {
                    return Date.parse(t.replace(/-/g, "/").replace(/[a-z]+/gi, " "))
                }
            }, {
                key: "formatDate", value: function (t, e) {
                    var i = this.w.globals.locale, a = this.w.config.xaxis.labels.datetimeUTC,
                        r = ["\0"].concat(T(i.months)), s = [""].concat(T(i.shortMonths)), n = [""].concat(T(i.days)),
                        o = [""].concat(T(i.shortDays));

                    function l(t, e) {
                        var i = t + "";
                        for (e = e || 2; i.length < e;) i = "0" + i;
                        return i
                    }

                    var c = a ? t.getUTCFullYear() : t.getFullYear();
                    e = (e = (e = e.replace(/(^|[^\\])yyyy+/g, "$1" + c)).replace(/(^|[^\\])yy/g, "$1" + c.toString().substr(2, 2))).replace(/(^|[^\\])y/g, "$1" + c);
                    var h = (a ? t.getUTCMonth() : t.getMonth()) + 1;
                    e = (e = (e = (e = e.replace(/(^|[^\\])MMMM+/g, "$1" + r[0])).replace(/(^|[^\\])MMM/g, "$1" + s[0])).replace(/(^|[^\\])MM/g, "$1" + l(h))).replace(/(^|[^\\])M/g, "$1" + h);
                    var d = a ? t.getUTCDate() : t.getDate();
                    e = (e = (e = (e = e.replace(/(^|[^\\])dddd+/g, "$1" + n[0])).replace(/(^|[^\\])ddd/g, "$1" + o[0])).replace(/(^|[^\\])dd/g, "$1" + l(d))).replace(/(^|[^\\])d/g, "$1" + d);
                    var u = a ? t.getUTCHours() : t.getHours(), g = u > 12 ? u - 12 : 0 === u ? 12 : u;
                    e = (e = (e = (e = e.replace(/(^|[^\\])HH+/g, "$1" + l(u))).replace(/(^|[^\\])H/g, "$1" + u)).replace(/(^|[^\\])hh+/g, "$1" + l(g))).replace(/(^|[^\\])h/g, "$1" + g);
                    var f = a ? t.getUTCMinutes() : t.getMinutes();
                    e = (e = e.replace(/(^|[^\\])mm+/g, "$1" + l(f))).replace(/(^|[^\\])m/g, "$1" + f);
                    var p = a ? t.getUTCSeconds() : t.getSeconds();
                    e = (e = e.replace(/(^|[^\\])ss+/g, "$1" + l(p))).replace(/(^|[^\\])s/g, "$1" + p);
                    var x = a ? t.getUTCMilliseconds() : t.getMilliseconds();
                    e = e.replace(/(^|[^\\])fff+/g, "$1" + l(x, 3)), x = Math.round(x / 10), e = e.replace(/(^|[^\\])ff/g, "$1" + l(x)), x = Math.round(x / 10);
                    var b = u < 12 ? "AM" : "PM";
                    e = (e = (e = e.replace(/(^|[^\\])f/g, "$1" + x)).replace(/(^|[^\\])TT+/g, "$1" + b)).replace(/(^|[^\\])T/g, "$1" + b.charAt(0));
                    var v = b.toLowerCase();
                    e = (e = e.replace(/(^|[^\\])tt+/g, "$1" + v)).replace(/(^|[^\\])t/g, "$1" + v.charAt(0));
                    var m = -t.getTimezoneOffset(), y = a || !m ? "Z" : m > 0 ? "+" : "-";
                    if (!a) {
                        var w = (m = Math.abs(m)) % 60;
                        y += l(Math.floor(m / 60)) + ":" + l(w)
                    }
                    e = e.replace(/(^|[^\\])K/g, "$1" + y);
                    var k = (a ? t.getUTCDay() : t.getDay()) + 1;
                    return (e = (e = (e = (e = e.replace(new RegExp(n[0], "g"), n[k])).replace(new RegExp(o[0], "g"), o[k])).replace(new RegExp(r[0], "g"), r[h])).replace(new RegExp(s[0], "g"), s[h])).replace(/\\(.)/g, "$1")
                }
            }, {
                key: "getTimeUnitsfromTimestamp", value: function (t, e, i) {
                    var a = this.w;
                    void 0 !== a.config.xaxis.min && (t = a.config.xaxis.min), void 0 !== a.config.xaxis.max && (e = a.config.xaxis.max);
                    var r = this.getDate(t), s = this.getDate(e),
                        n = this.formatDate(r, "yyyy MM dd HH mm ss fff").split(" "),
                        o = this.formatDate(s, "yyyy MM dd HH mm ss fff").split(" ");
                    return {
                        minMillisecond: parseInt(n[6], 10),
                        maxMillisecond: parseInt(o[6], 10),
                        minSecond: parseInt(n[5], 10),
                        maxSecond: parseInt(o[5], 10),
                        minMinute: parseInt(n[4], 10),
                        maxMinute: parseInt(o[4], 10),
                        minHour: parseInt(n[3], 10),
                        maxHour: parseInt(o[3], 10),
                        minDate: parseInt(n[2], 10),
                        maxDate: parseInt(o[2], 10),
                        minMonth: parseInt(n[1], 10) - 1,
                        maxMonth: parseInt(o[1], 10) - 1,
                        minYear: parseInt(n[0], 10),
                        maxYear: parseInt(o[0], 10)
                    }
                }
            }, {
                key: "isLeapYear", value: function (t) {
                    return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
                }
            }, {
                key: "calculcateLastDaysOfMonth", value: function (t, e, i) {
                    return this.determineDaysOfMonths(t, e) - i
                }
            }, {
                key: "determineDaysOfYear", value: function (t) {
                    var e = 365;
                    return this.isLeapYear(t) && (e = 366), e
                }
            }, {
                key: "determineRemainingDaysOfYear", value: function (t, e, i) {
                    var a = this.daysCntOfYear[e] + i;
                    return e > 1 && this.isLeapYear() && a++, a
                }
            }, {
                key: "determineDaysOfMonths", value: function (t, e) {
                    var i = 30;
                    switch (t = r.monthMod(t), !0) {
                        case this.months30.indexOf(t) > -1:
                            2 === t && (i = this.isLeapYear(e) ? 29 : 28);
                            break;
                        case this.months31.indexOf(t) > -1:
                        default:
                            i = 31
                    }
                    return i
                }
            }]) && E(e.prototype, i), t
        }();

        function z(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        const X = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.tooltipKeyFormat = "dd MMM"
            }

            var e, i;
            return e = t, (i = [{
                key: "xLabelFormat", value: function (t, e, i, a) {
                    var r = this.w;
                    if ("datetime" === r.config.xaxis.type && void 0 === r.config.xaxis.labels.formatter && void 0 === r.config.tooltip.x.formatter) {
                        var s = new M(this.ctx);
                        return s.formatDate(s.getDate(e), r.config.tooltip.x.format)
                    }
                    return t(e, i, a)
                }
            }, {
                key: "defaultGeneralFormatter", value: function (t) {
                    return Array.isArray(t) ? t.map((function (t) {
                        return t
                    })) : t
                }
            }, {
                key: "defaultYFormatter", value: function (t, e, i) {
                    var a = this.w;
                    return r.isNumber(t) && (t = 0 !== a.globals.yValueDecimal ? t.toFixed(void 0 !== e.decimalsInFloat ? e.decimalsInFloat : a.globals.yValueDecimal) : a.globals.maxYArr[i] - a.globals.minYArr[i] < 5 ? t.toFixed(1) : t.toFixed(0)), t
                }
            }, {
                key: "setLabelFormatters", value: function () {
                    var t = this, e = this.w;
                    return e.globals.xaxisTooltipFormatter = function (e) {
                        return t.defaultGeneralFormatter(e)
                    }, e.globals.ttKeyFormatter = function (e) {
                        return t.defaultGeneralFormatter(e)
                    }, e.globals.ttZFormatter = function (t) {
                        return t
                    }, e.globals.legendFormatter = function (e) {
                        return t.defaultGeneralFormatter(e)
                    }, void 0 !== e.config.xaxis.labels.formatter ? e.globals.xLabelFormatter = e.config.xaxis.labels.formatter : e.globals.xLabelFormatter = function (t) {
                        if (r.isNumber(t)) {
                            if (!e.config.xaxis.convertedCatToNumeric && "numeric" === e.config.xaxis.type) {
                                if (r.isNumber(e.config.xaxis.decimalsInFloat)) return t.toFixed(e.config.xaxis.decimalsInFloat);
                                var i = e.globals.maxX - e.globals.minX;
                                return i > 0 && i < 100 ? t.toFixed(1) : t.toFixed(0)
                            }
                            return e.globals.isBarHorizontal && e.globals.maxY - e.globals.minYArr < 4 ? t.toFixed(1) : t.toFixed(0)
                        }
                        return t
                    }, "function" == typeof e.config.tooltip.x.formatter ? e.globals.ttKeyFormatter = e.config.tooltip.x.formatter : e.globals.ttKeyFormatter = e.globals.xLabelFormatter, "function" == typeof e.config.xaxis.tooltip.formatter && (e.globals.xaxisTooltipFormatter = e.config.xaxis.tooltip.formatter), (Array.isArray(e.config.tooltip.y) || void 0 !== e.config.tooltip.y.formatter) && (e.globals.ttVal = e.config.tooltip.y), void 0 !== e.config.tooltip.z.formatter && (e.globals.ttZFormatter = e.config.tooltip.z.formatter), void 0 !== e.config.legend.formatter && (e.globals.legendFormatter = e.config.legend.formatter), e.config.yaxis.forEach((function (i, a) {
                        void 0 !== i.labels.formatter ? e.globals.yLabelFormatters[a] = i.labels.formatter : e.globals.yLabelFormatters[a] = function (r) {
                            return e.globals.xyCharts ? Array.isArray(r) ? r.map((function (e) {
                                return t.defaultYFormatter(e, i, a)
                            })) : t.defaultYFormatter(r, i, a) : r
                        }
                    })), e.globals
                }
            }, {
                key: "heatmapLabelFormatters", value: function () {
                    var t = this.w;
                    if ("heatmap" === t.config.chart.type) {
                        t.globals.yAxisScale[0].result = t.globals.seriesNames.slice();
                        var e = t.globals.seriesNames.reduce((function (t, e) {
                            return t.length > e.length ? t : e
                        }), 0);
                        t.globals.yAxisScale[0].niceMax = e, t.globals.yAxisScale[0].niceMin = e
                    }
                }
            }]) && z(e.prototype, i), t
        }();

        function Y(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, a)
            }
            return i
        }

        function R(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Y(Object(i), !0).forEach((function (e) {
                    F(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Y(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function F(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function D(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var H = function (t) {
            var e, i = t.isTimeline, a = t.ctx, r = t.seriesIndex, s = t.dataPointIndex, n = t.y1, o = t.y2, l = t.w,
                c = l.globals.seriesRangeStart[r][s], h = l.globals.seriesRangeEnd[r][s], d = l.globals.labels[s],
                u = l.config.series[r].name ? l.config.series[r].name : "", g = l.globals.ttKeyFormatter,
                f = l.config.tooltip.y.title.formatter, p = {w: l, seriesIndex: r, dataPointIndex: s, start: c, end: h};
            "function" == typeof f && (u = f(u, p)), null !== (e = l.config.series[r].data[s]) && void 0 !== e && e.x && (d = l.config.series[r].data[s].x), i || "datetime" === l.config.xaxis.type && (d = new X(a).xLabelFormat(l.globals.ttKeyFormatter, d, d, {
                i: void 0,
                dateFormatter: new M(a).formatDate,
                w: l
            })), "function" == typeof g && (d = g(d, p)), Number.isFinite(n) && Number.isFinite(o) && (c = n, h = o);
            var x = "", b = "", v = l.globals.colors[r];
            if (void 0 === l.config.tooltip.x.formatter) if ("datetime" === l.config.xaxis.type) {
                var m = new M(a);
                x = m.formatDate(m.getDate(c), l.config.tooltip.x.format), b = m.formatDate(m.getDate(h), l.config.tooltip.x.format)
            } else x = c, b = h; else x = l.config.tooltip.x.formatter(c), b = l.config.tooltip.x.formatter(h);
            return {start: c, end: h, startVal: x, endVal: b, ylabel: d, color: v, seriesName: u}
        }, N = function (t) {
            var e = t.color, i = t.seriesName, a = t.ylabel, r = t.start, s = t.end, n = t.seriesIndex,
                o = t.dataPointIndex, l = t.ctx.tooltip.tooltipLabels.getFormatters(n);
            r = l.yLbFormatter(r), s = l.yLbFormatter(s);
            var c = l.yLbFormatter(t.w.globals.series[n][o]),
                h = '<span class="value start-value">\n  '.concat(r, '\n  </span> <span class="separator">-</span> <span class="value end-value">\n  ').concat(s, "\n  </span>");
            return '<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: ' + e + '">' + (i || "") + '</span></div><div> <span class="category">' + a + ": </span> " + (t.w.globals.comboCharts ? "rangeArea" === t.w.config.series[n].type || "rangeBar" === t.w.config.series[n].type ? h : "<span>".concat(c, "</span>") : h) + " </div></div>"
        }, W = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.opts = e
            }

            var e, i;
            return e = t, (i = [{
                key: "hideYAxis", value: function () {
                    this.opts.yaxis[0].show = !1, this.opts.yaxis[0].title.text = "", this.opts.yaxis[0].axisBorder.show = !1, this.opts.yaxis[0].axisTicks.show = !1, this.opts.yaxis[0].floating = !0
                }
            }, {
                key: "line", value: function () {
                    return {
                        chart: {animations: {easing: "swing"}},
                        dataLabels: {enabled: !1},
                        stroke: {width: 5, curve: "straight"},
                        markers: {size: 0, hover: {sizeOffset: 6}},
                        xaxis: {crosshairs: {width: 1}}
                    }
                }
            }, {
                key: "sparkline", value: function (t) {
                    return this.hideYAxis(), r.extend(t, {
                        grid: {
                            show: !1,
                            padding: {left: 0, right: 0, top: 0, bottom: 0}
                        },
                        legend: {show: !1},
                        xaxis: {
                            labels: {show: !1},
                            tooltip: {enabled: !1},
                            axisBorder: {show: !1},
                            axisTicks: {show: !1}
                        },
                        chart: {toolbar: {show: !1}, zoom: {enabled: !1}},
                        dataLabels: {enabled: !1}
                    })
                }
            }, {
                key: "bar", value: function () {
                    return {
                        chart: {stacked: !1, animations: {easing: "swing"}},
                        plotOptions: {bar: {dataLabels: {position: "center"}}},
                        dataLabels: {style: {colors: ["#fff"]}, background: {enabled: !1}},
                        stroke: {width: 0, lineCap: "round"},
                        fill: {opacity: .85},
                        legend: {markers: {shape: "square", radius: 2, size: 8}},
                        tooltip: {shared: !1, intersect: !0},
                        xaxis: {
                            tooltip: {enabled: !1},
                            tickPlacement: "between",
                            crosshairs: {
                                width: "barWidth",
                                position: "back",
                                fill: {type: "gradient"},
                                dropShadow: {enabled: !1},
                                stroke: {width: 0}
                            }
                        }
                    }
                }
            }, {
                key: "funnel", value: function () {
                    return this.hideYAxis(), R(R({}, this.bar()), {}, {
                        chart: {
                            animations: {
                                easing: "linear",
                                speed: 800,
                                animateGradually: {enabled: !1}
                            }
                        },
                        plotOptions: {
                            bar: {
                                horizontal: !0,
                                borderRadiusApplication: "around",
                                borderRadius: 0,
                                dataLabels: {position: "center"}
                            }
                        },
                        grid: {show: !1, padding: {left: 0, right: 0}},
                        xaxis: {
                            labels: {show: !1},
                            tooltip: {enabled: !1},
                            axisBorder: {show: !1},
                            axisTicks: {show: !1}
                        }
                    })
                }
            }, {
                key: "candlestick", value: function () {
                    var t = this;
                    return {
                        stroke: {width: 1, colors: ["#333"]},
                        fill: {opacity: 1},
                        dataLabels: {enabled: !1},
                        tooltip: {
                            shared: !0, custom: function (e) {
                                var i = e.seriesIndex, a = e.dataPointIndex, r = e.w;
                                return t._getBoxTooltip(r, i, a, ["باز", "بالاترین", "", "پایین‌ترین", "پایانی"], "قیمت پایانی")
                            }
                        },
                        states: {active: {filter: {type: "none"}}},
                        xaxis: {crosshairs: {width: 1}}
                    }
                }
            }, {
                key: "boxPlot", value: function () {
                    var t = this;
                    return {
                        chart: {animations: {dynamicAnimation: {enabled: !1}}},
                        stroke: {width: 1, colors: ["#24292e"]},
                        dataLabels: {enabled: !1},
                        tooltip: {
                            shared: !0, custom: function (e) {
                                var i = e.seriesIndex, a = e.dataPointIndex, r = e.w;
                                return t._getBoxTooltip(r, i, a, ["Minimum", "Q1", "Median", "Q3", "Maximum"], "boxPlot")
                            }
                        },
                        markers: {size: 5, strokeWidth: 1, strokeColors: "#111"},
                        xaxis: {crosshairs: {width: 1}}
                    }
                }
            }, {
                key: "rangeBar", value: function () {
                    return {
                        chart: {animations: {animateGradually: !1}},
                        stroke: {width: 0, lineCap: "square"},
                        plotOptions: {bar: {borderRadius: 0, dataLabels: {position: "center"}}},
                        dataLabels: {
                            enabled: !1, formatter: function (t, e) {
                                e.ctx;
                                var i = e.seriesIndex, a = e.dataPointIndex, r = e.w, s = function () {
                                    var t = r.globals.seriesRangeStart[i][a];
                                    return r.globals.seriesRangeEnd[i][a] - t
                                };
                                return r.globals.comboCharts ? "rangeBar" === r.config.series[i].type || "rangeArea" === r.config.series[i].type ? s() : t : s()
                            }, background: {enabled: !1}, style: {colors: ["#fff"]}
                        },
                        markers: {size: 10},
                        tooltip: {
                            shared: !1, followCursor: !0, custom: function (t) {
                                return t.w.config.plotOptions && t.w.config.plotOptions.bar && t.w.config.plotOptions.bar.horizontal ? function (t) {
                                    var e = H(R(R({}, t), {}, {isTimeline: !0})), i = e.color, a = e.seriesName,
                                        r = e.ylabel, s = e.startVal, n = e.endVal;
                                    return N(R(R({}, t), {}, {color: i, seriesName: a, ylabel: r, start: s, end: n}))
                                }(t) : function (t) {
                                    var e = H(t), i = e.color, a = e.seriesName, r = e.ylabel, s = e.start, n = e.end;
                                    return N(R(R({}, t), {}, {color: i, seriesName: a, ylabel: r, start: s, end: n}))
                                }(t)
                            }
                        },
                        xaxis: {tickPlacement: "between", tooltip: {enabled: !1}, crosshairs: {stroke: {width: 0}}}
                    }
                }
            }, {
                key: "dumbbell", value: function (t) {
                    var e, i;
                    return null !== (e = t.plotOptions.bar) && void 0 !== e && e.barHeight || (t.plotOptions.bar.barHeight = 2), null !== (i = t.plotOptions.bar) && void 0 !== i && i.columnWidth || (t.plotOptions.bar.columnWidth = 2), t
                }
            }, {
                key: "area", value: function () {
                    return {
                        stroke: {
                            width: 4,
                            fill: {
                                type: "solid",
                                gradient: {
                                    inverseColors: !1,
                                    shade: "light",
                                    type: "vertical",
                                    opacityFrom: .65,
                                    opacityTo: .5,
                                    stops: [0, 100, 100]
                                }
                            }
                        },
                        fill: {
                            type: "gradient",
                            gradient: {
                                inverseColors: !1,
                                shade: "light",
                                type: "vertical",
                                opacityFrom: .65,
                                opacityTo: .5,
                                stops: [0, 100, 100]
                            }
                        },
                        markers: {size: 0, hover: {sizeOffset: 6}},
                        tooltip: {followCursor: !1}
                    }
                }
            }, {
                key: "rangeArea", value: function () {
                    return {
                        stroke: {curve: "straight", width: 0},
                        fill: {type: "solid", opacity: .6},
                        markers: {size: 0},
                        states: {hover: {filter: {type: "none"}}, active: {filter: {type: "none"}}},
                        tooltip: {
                            intersect: !1, shared: !0, followCursor: !0, custom: function (t) {
                                return function (t) {
                                    var e = H(t), i = e.color, a = e.seriesName, r = e.ylabel, s = e.start, n = e.end;
                                    return N(R(R({}, t), {}, {color: i, seriesName: a, ylabel: r, start: s, end: n}))
                                }(t)
                            }
                        }
                    }
                }
            }, {
                key: "brush", value: function (t) {
                    return r.extend(t, {
                        chart: {toolbar: {autoSelected: "selection", show: !1}, zoom: {enabled: !1}},
                        dataLabels: {enabled: !1},
                        stroke: {width: 1},
                        tooltip: {enabled: !1},
                        xaxis: {tooltip: {enabled: !1}}
                    })
                }
            }, {
                key: "stacked100", value: function (t) {
                    t.dataLabels = t.dataLabels || {}, t.dataLabels.formatter = t.dataLabels.formatter || void 0;
                    var e = t.dataLabels.formatter;
                    return t.yaxis.forEach((function (e, i) {
                        t.yaxis[i].min = 0, t.yaxis[i].max = 100
                    })), "bar" === t.chart.type && (t.dataLabels.formatter = e || function (t) {
                        return "number" == typeof t && t ? t.toFixed(0) + "%" : t
                    }), t
                }
            }, {
                key: "stackedBars", value: function () {
                    var t = this.bar();
                    return R(R({}, t), {}, {
                        plotOptions: R(R({}, t.plotOptions), {}, {
                            bar: R(R({}, t.plotOptions.bar), {}, {
                                borderRadiusApplication: "end",
                                borderRadiusWhenStacked: "last"
                            })
                        })
                    })
                }
            }, {
                key: "convertCatToNumeric", value: function (t) {
                    return t.xaxis.convertedCatToNumeric = !0, t
                }
            }, {
                key: "convertCatToNumericXaxis", value: function (t, e, i) {
                    t.xaxis.type = "numeric", t.xaxis.labels = t.xaxis.labels || {}, t.xaxis.labels.formatter = t.xaxis.labels.formatter || function (t) {
                        return r.isNumber(t) ? Math.floor(t) : t
                    };
                    var a = t.xaxis.labels.formatter,
                        s = t.xaxis.categories && t.xaxis.categories.length ? t.xaxis.categories : t.labels;
                    return i && i.length && (s = i.map((function (t) {
                        return Array.isArray(t) ? t : String(t)
                    }))), s && s.length && (t.xaxis.labels.formatter = function (t) {
                        return r.isNumber(t) ? a(s[Math.floor(t) - 1]) : a(t)
                    }), t.xaxis.categories = [], t.labels = [], t.xaxis.tickAmount = t.xaxis.tickAmount || "dataPoints", t
                }
            }, {
                key: "bubble", value: function () {
                    return {
                        dataLabels: {style: {colors: ["#fff"]}},
                        tooltip: {shared: !1, intersect: !0},
                        xaxis: {crosshairs: {width: 0}},
                        fill: {
                            type: "solid",
                            gradient: {shade: "light", inverse: !0, shadeIntensity: .55, opacityFrom: .4, opacityTo: .8}
                        }
                    }
                }
            }, {
                key: "scatter", value: function () {
                    return {
                        dataLabels: {enabled: !1},
                        tooltip: {shared: !1, intersect: !0},
                        markers: {size: 6, strokeWidth: 1, hover: {sizeOffset: 2}}
                    }
                }
            }, {
                key: "heatmap", value: function () {
                    return {
                        chart: {stacked: !1},
                        fill: {opacity: 1},
                        dataLabels: {style: {colors: ["#fff"]}},
                        stroke: {colors: ["#fff"]},
                        tooltip: {followCursor: !0, marker: {show: !1}, x: {show: !1}},
                        legend: {position: "top", markers: {shape: "square", size: 10, offsetY: 2}},
                        grid: {padding: {right: 20}}
                    }
                }
            }, {
                key: "treemap", value: function () {
                    return {
                        chart: {zoom: {enabled: !1}},
                        dataLabels: {style: {fontSize: 14, fontWeight: 600, colors: ["#fff"]}},
                        stroke: {show: !0, width: 2, colors: ["#fff"]},
                        legend: {show: !1},
                        fill: {gradient: {stops: [0, 100]}},
                        tooltip: {followCursor: !0, x: {show: !1}},
                        grid: {padding: {left: 0, right: 0}},
                        xaxis: {crosshairs: {show: !1}, tooltip: {enabled: !1}}
                    }
                }
            }, {
                key: "pie", value: function () {
                    return {
                        chart: {toolbar: {show: !1}},
                        plotOptions: {pie: {donut: {labels: {show: !1}}}},
                        dataLabels: {
                            formatter: function (t) {
                                return t.toFixed(1) + "%"
                            }, style: {colors: ["#fff"]}, background: {enabled: !1}, dropShadow: {enabled: !0}
                        },
                        stroke: {colors: ["#fff"]},
                        fill: {opacity: 1, gradient: {shade: "light", stops: [0, 100]}},
                        tooltip: {theme: "dark", fillSeriesColor: !0},
                        legend: {position: "right"}
                    }
                }
            }, {
                key: "donut", value: function () {
                    return {
                        chart: {toolbar: {show: !1}},
                        dataLabels: {
                            formatter: function (t) {
                                return t.toFixed(1) + "%"
                            }, style: {colors: ["#fff"]}, background: {enabled: !1}, dropShadow: {enabled: !0}
                        },
                        stroke: {colors: ["#fff"]},
                        fill: {
                            opacity: 1,
                            gradient: {
                                shade: "light",
                                shadeIntensity: .35,
                                stops: [80, 100],
                                opacityFrom: 1,
                                opacityTo: 1
                            }
                        },
                        tooltip: {theme: "dark", fillSeriesColor: !0},
                        legend: {position: "right"}
                    }
                }
            }, {
                key: "polarArea", value: function () {
                    return this.opts.yaxis[0].tickAmount = this.opts.yaxis[0].tickAmount ? this.opts.yaxis[0].tickAmount : 6, {
                        chart: {toolbar: {show: !1}},
                        dataLabels: {
                            formatter: function (t) {
                                return t.toFixed(1) + "%"
                            }, enabled: !1
                        },
                        stroke: {show: !0, width: 2},
                        fill: {opacity: .7},
                        tooltip: {theme: "dark", fillSeriesColor: !0},
                        legend: {position: "right"}
                    }
                }
            }, {
                key: "radar", value: function () {
                    return this.opts.yaxis[0].labels.offsetY = this.opts.yaxis[0].labels.offsetY ? this.opts.yaxis[0].labels.offsetY : 6, {
                        dataLabels: {
                            enabled: !1,
                            style: {fontSize: "11px"}
                        },
                        stroke: {width: 2},
                        markers: {size: 3, strokeWidth: 1, strokeOpacity: 1},
                        fill: {opacity: .2},
                        tooltip: {shared: !1, intersect: !0, followCursor: !0},
                        grid: {show: !1},
                        xaxis: {
                            labels: {
                                formatter: function (t) {
                                    return t
                                }, style: {colors: ["#a8a8a8"], fontSize: "11px"}
                            }, tooltip: {enabled: !1}, crosshairs: {show: !1}
                        }
                    }
                }
            }, {
                key: "radialBar", value: function () {
                    return {
                        chart: {animations: {dynamicAnimation: {enabled: !0, speed: 800}}, toolbar: {show: !1}},
                        fill: {
                            gradient: {
                                shade: "dark",
                                shadeIntensity: .4,
                                inverseColors: !1,
                                type: "diagonal2",
                                opacityFrom: 1,
                                opacityTo: 1,
                                stops: [70, 98, 100]
                            }
                        },
                        legend: {show: !1, position: "right"},
                        tooltip: {enabled: !1, fillSeriesColor: !0}
                    }
                }
            }, {
                key: "_getBoxTooltip", value: function (t, e, i, a, r) {
                    var s = t.globals.seriesCandleO[e][i], n = t.globals.seriesCandleH[e][i],
                        o = t.globals.seriesCandleM[e][i], l = t.globals.seriesCandleL[e][i],
                        c = t.globals.seriesCandleC[e][i];
                    return t.config.series[e].type && t.config.series[e].type !== r ? '<div class="apexcharts-custom-tooltip">\n          '.concat(t.config.series[e].name ? t.config.series[e].name : "series-" + (e + 1), ": <strong>").concat(t.globals.series[e][i], "</strong>\n        </div>") : '<div class="apexcharts-tooltip-box apexcharts-tooltip-'.concat(t.config.chart.type, '">') + "<div>".concat(a[0], ': <span class="value">') + s + "</span></div>" + "<div>".concat(a[1], ': <span class="value">') + n + "</span></div>" + (o ? "<div>".concat(a[2], ': <span class="value">') + o + "</span></div>" : "") + "<div>".concat(a[3], ': <span class="value">') + l + "</span></div>" + "<div>".concat(a[4], ': <span class="value">') + c + "</span></div></div>"
                }
            }]) && D(e.prototype, i), t
        }();

        function j(t) {
            return j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, j(t)
        }

        function B(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var G = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.opts = e
            }

            var e, i;
            return e = t, (i = [{
                key: "init", value: function (t) {
                    var e = t.responsiveOverride, i = this.opts, a = new P, s = new W(i);
                    this.chartType = i.chart.type, i = this.extendYAxis(i), i = this.extendAnnotations(i);
                    var n = a.init(), o = {};
                    if (i && "object" === j(i)) {
                        var l, c, h, d, u, g, f, p, x = {};
                        x = -1 !== ["line", "area", "bar", "candlestick", "boxPlot", "rangeBar", "rangeArea", "bubble", "scatter", "heatmap", "treemap", "pie", "polarArea", "donut", "radar", "radialBar"].indexOf(i.chart.type) ? s[i.chart.type]() : s.line(), null !== (l = i.plotOptions) && void 0 !== l && null !== (c = l.bar) && void 0 !== c && c.isFunnel && (x = s.funnel()), i.chart.stacked && "bar" === i.chart.type && (x = s.stackedBars()), null !== (h = i.chart.brush) && void 0 !== h && h.enabled && (x = s.brush(x)), i.chart.stacked && "100%" === i.chart.stackType && (i = s.stacked100(i)), null !== (d = i.plotOptions) && void 0 !== d && null !== (u = d.bar) && void 0 !== u && u.isDumbbell && (i = s.dumbbell(i)), this.checkForDarkTheme(window.Apex), this.checkForDarkTheme(i), i.xaxis = i.xaxis || window.Apex.xaxis || {}, e || (i.xaxis.convertedCatToNumeric = !1), (null !== (g = (i = this.checkForCatToNumericXAxis(this.chartType, x, i)).chart.sparkline) && void 0 !== g && g.enabled || null !== (f = window.Apex.chart) && void 0 !== f && null !== (p = f.sparkline) && void 0 !== p && p.enabled) && (x = s.sparkline(x)), o = r.extend(n, x)
                    }
                    var b = r.extend(o, window.Apex);
                    return n = r.extend(b, i), this.handleUserInputErrors(n)
                }
            }, {
                key: "checkForCatToNumericXAxis", value: function (t, e, i) {
                    var a, r, s = new W(i),
                        n = ("bar" === t || "boxPlot" === t) && (null === (a = i.plotOptions) || void 0 === a || null === (r = a.bar) || void 0 === r ? void 0 : r.horizontal),
                        o = "pie" === t || "polarArea" === t || "donut" === t || "radar" === t || "radialBar" === t || "heatmap" === t,
                        l = "datetime" !== i.xaxis.type && "numeric" !== i.xaxis.type,
                        c = i.xaxis.tickPlacement ? i.xaxis.tickPlacement : e.xaxis && e.xaxis.tickPlacement;
                    return n || o || !l || "between" === c || (i = s.convertCatToNumeric(i)), i
                }
            }, {
                key: "extendYAxis", value: function (t, e) {
                    var i = new P;
                    (void 0 === t.yaxis || !t.yaxis || Array.isArray(t.yaxis) && 0 === t.yaxis.length) && (t.yaxis = {}), t.yaxis.constructor !== Array && window.Apex.yaxis && window.Apex.yaxis.constructor !== Array && (t.yaxis = r.extend(t.yaxis, window.Apex.yaxis)), t.yaxis.constructor !== Array ? t.yaxis = [r.extend(i.yAxis, t.yaxis)] : t.yaxis = r.extendArray(t.yaxis, i.yAxis);
                    var a = !1;
                    t.yaxis.forEach((function (t) {
                        t.logarithmic && (a = !0)
                    }));
                    var s = t.series;
                    return e && !s && (s = e.config.series), a && s.length !== t.yaxis.length && s.length && (t.yaxis = s.map((function (e, a) {
                        if (e.name || (s[a].name = "series-".concat(a + 1)), t.yaxis[a]) return t.yaxis[a].seriesName = s[a].name, t.yaxis[a];
                        var n = r.extend(i.yAxis, t.yaxis[0]);
                        return n.show = !1, n
                    }))), a && s.length > 1 && s.length !== t.yaxis.length && console.warn("A multi-series logarithmic chart should have equal number of series and y-axes"), t
                }
            }, {
                key: "extendAnnotations", value: function (t) {
                    return void 0 === t.annotations && (t.annotations = {}, t.annotations.yaxis = [], t.annotations.xaxis = [], t.annotations.points = []), t = this.extendYAxisAnnotations(t), t = this.extendXAxisAnnotations(t), this.extendPointAnnotations(t)
                }
            }, {
                key: "extendYAxisAnnotations", value: function (t) {
                    var e = new P;
                    return t.annotations.yaxis = r.extendArray(void 0 !== t.annotations.yaxis ? t.annotations.yaxis : [], e.yAxisAnnotation), t
                }
            }, {
                key: "extendXAxisAnnotations", value: function (t) {
                    var e = new P;
                    return t.annotations.xaxis = r.extendArray(void 0 !== t.annotations.xaxis ? t.annotations.xaxis : [], e.xAxisAnnotation), t
                }
            }, {
                key: "extendPointAnnotations", value: function (t) {
                    var e = new P;
                    return t.annotations.points = r.extendArray(void 0 !== t.annotations.points ? t.annotations.points : [], e.pointAnnotation), t
                }
            }, {
                key: "checkForDarkTheme", value: function (t) {
                    t.theme && "dark" === t.theme.mode && (t.tooltip || (t.tooltip = {}), "light" !== t.tooltip.theme && (t.tooltip.theme = "dark"), t.chart.foreColor || (t.chart.foreColor = "#f6f7f8"), t.chart.background || (t.chart.background = "#424242"), t.theme.palette || (t.theme.palette = "palette4"))
                }
            }, {
                key: "handleUserInputErrors", value: function (t) {
                    var e = t;
                    if (e.tooltip.shared && e.tooltip.intersect) throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");
                    if ("bar" === e.chart.type && e.plotOptions.bar.horizontal) {
                        if (e.yaxis.length > 1) throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");
                        e.yaxis[0].reversed && (e.yaxis[0].opposite = !0), e.xaxis.tooltip.enabled = !1, e.yaxis[0].tooltip.enabled = !1, e.chart.zoom.enabled = !1
                    }
                    return "bar" !== e.chart.type && "rangeBar" !== e.chart.type || e.tooltip.shared && "barWidth" === e.xaxis.crosshairs.width && e.series.length > 1 && (e.xaxis.crosshairs.width = "tickWidth"), "candlestick" !== e.chart.type && "boxPlot" !== e.chart.type || e.yaxis[0].reversed && (console.warn("Reversed y-axis in ".concat(e.chart.type, " chart is not supported.")), e.yaxis[0].reversed = !1), e
                }
            }]) && B(e.prototype, i), t
        }();

        function V(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var _ = function () {
            function t() {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }

            var e, i;
            return e = t, (i = [{
                key: "initGlobalVars", value: function (t) {
                    t.series = [], t.seriesCandleO = [], t.seriesCandleH = [], t.seriesCandleM = [], t.seriesCandleL = [], t.seriesCandleC = [], t.seriesRangeStart = [], t.seriesRangeEnd = [], t.seriesRange = [], t.seriesPercent = [], t.seriesGoals = [], t.seriesX = [], t.seriesZ = [], t.seriesNames = [], t.seriesTotals = [], t.seriesLog = [], t.seriesColors = [], t.stackedSeriesTotals = [], t.seriesXvalues = [], t.seriesYvalues = [], t.labels = [], t.hasXaxisGroups = !1, t.groups = [], t.hasSeriesGroups = !1, t.seriesGroups = [], t.categoryLabels = [], t.timescaleLabels = [], t.noLabelsProvided = !1, t.resizeTimer = null, t.selectionResizeTimer = null, t.delayedElements = [], t.pointsArray = [], t.dataLabelsRects = [], t.isXNumeric = !1, t.skipLastTimelinelabel = !1, t.skipFirstTimelinelabel = !1, t.isDataXYZ = !1, t.isMultiLineX = !1, t.isMultipleYAxis = !1, t.maxY = -Number.MAX_VALUE, t.minY = Number.MIN_VALUE, t.minYArr = [], t.maxYArr = [], t.maxX = -Number.MAX_VALUE, t.minX = Number.MAX_VALUE, t.initialMaxX = -Number.MAX_VALUE, t.initialMinX = Number.MAX_VALUE, t.maxDate = 0, t.minDate = Number.MAX_VALUE, t.minZ = Number.MAX_VALUE, t.maxZ = -Number.MAX_VALUE, t.minXDiff = Number.MAX_VALUE, t.yAxisScale = [], t.xAxisScale = null, t.xAxisTicksPositions = [], t.yLabelsCoords = [], t.yTitleCoords = [], t.barPadForNumericAxis = 0, t.padHorizontal = 0, t.xRange = 0, t.yRange = [], t.zRange = 0, t.dataPoints = 0, t.xTickAmount = 0
                }
            }, {
                key: "globalVars", value: function (t) {
                    return {
                        chartID: null,
                        cuid: null,
                        events: {
                            beforeMount: [],
                            mounted: [],
                            updated: [],
                            clicked: [],
                            selection: [],
                            dataPointSelection: [],
                            zoomed: [],
                            scrolled: []
                        },
                        colors: [],
                        clientX: null,
                        clientY: null,
                        fill: {colors: []},
                        stroke: {colors: []},
                        dataLabels: {style: {colors: []}},
                        radarPolygons: {fill: {colors: []}},
                        markers: {colors: [], size: t.markers.size, largestSize: 0},
                        animationEnded: !1,
                        isTouchDevice: "ontouchstart" in window || navigator.msMaxTouchPoints,
                        isDirty: !1,
                        isExecCalled: !1,
                        initialConfig: null,
                        initialSeries: [],
                        lastXAxis: [],
                        lastYAxis: [],
                        columnSeries: null,
                        labels: [],
                        timescaleLabels: [],
                        noLabelsProvided: !1,
                        allSeriesCollapsed: !1,
                        collapsedSeries: [],
                        collapsedSeriesIndices: [],
                        ancillaryCollapsedSeries: [],
                        ancillaryCollapsedSeriesIndices: [],
                        risingSeries: [],
                        dataFormatXNumeric: !1,
                        capturedSeriesIndex: -1,
                        capturedDataPointIndex: -1,
                        selectedDataPoints: [],
                        goldenPadding: 35,
                        invalidLogScale: !1,
                        ignoreYAxisIndexes: [],
                        yAxisSameScaleIndices: [],
                        maxValsInArrayIndex: 0,
                        radialSize: 0,
                        selection: void 0,
                        zoomEnabled: "zoom" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.zoom && t.chart.zoom.enabled,
                        panEnabled: "pan" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.pan,
                        selectionEnabled: "selection" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.selection,
                        yaxis: null,
                        mousedown: !1,
                        lastClientPosition: {},
                        visibleXRange: void 0,
                        yValueDecimal: 0,
                        total: 0,
                        SVGNS: "http://www.w3.org/2000/svg",
                        svgWidth: 0,
                        svgHeight: 0,
                        noData: !1,
                        locale: {},
                        dom: {},
                        memory: {methodsToExec: []},
                        shouldAnimate: !0,
                        skipLastTimelinelabel: !1,
                        skipFirstTimelinelabel: !1,
                        delayedElements: [],
                        axisCharts: !0,
                        isDataXYZ: !1,
                        resized: !1,
                        resizeTimer: null,
                        comboCharts: !1,
                        dataChanged: !1,
                        previousPaths: [],
                        allSeriesHasEqualX: !0,
                        pointsArray: [],
                        dataLabelsRects: [],
                        lastDrawnDataLabelsIndexes: [],
                        hasNullValues: !1,
                        easing: null,
                        zoomed: !1,
                        gridWidth: 0,
                        gridHeight: 0,
                        rotateXLabels: !1,
                        defaultLabels: !1,
                        xLabelFormatter: void 0,
                        yLabelFormatters: [],
                        xaxisTooltipFormatter: void 0,
                        ttKeyFormatter: void 0,
                        ttVal: void 0,
                        ttZFormatter: void 0,
                        LINE_HEIGHT_RATIO: 1.618,
                        xAxisLabelsHeight: 0,
                        xAxisGroupLabelsHeight: 0,
                        xAxisLabelsWidth: 0,
                        yAxisLabelsWidth: 0,
                        scaleX: 1,
                        scaleY: 1,
                        translateX: 0,
                        translateY: 0,
                        translateYAxisX: [],
                        yAxisWidths: [],
                        translateXAxisY: 0,
                        translateXAxisX: 0,
                        tooltip: null
                    }
                }
            }, {
                key: "init", value: function (t) {
                    var e = this.globalVars(t);
                    return this.initGlobalVars(e), e.initialConfig = r.extend({}, t), e.initialSeries = r.clone(t.series), e.lastXAxis = r.clone(e.initialConfig.xaxis), e.lastYAxis = r.clone(e.initialConfig.yaxis), e
                }
            }]) && V(e.prototype, i), t
        }();

        function U(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var q = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.opts = e
            }

            var e, i;
            return e = t, (i = [{
                key: "init", value: function () {
                    var t = new G(this.opts).init({responsiveOverride: !1});
                    return {config: t, globals: (new _).init(t)}
                }
            }]) && U(e.prototype, i), t
        }();

        function Z(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, a)
            }
            return i
        }

        function $(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Z(Object(i), !0).forEach((function (e) {
                    J(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Z(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function J(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function Q(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        const K = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.opts = null, this.seriesIndex = 0
            }

            var e, i;
            return e = t, (i = [{
                key: "clippedImgArea", value: function (t) {
                    var e = this.w, i = e.config, a = parseInt(e.globals.gridWidth, 10),
                        r = parseInt(e.globals.gridHeight, 10), s = a > r ? a : r, n = t.image, o = 0, l = 0;
                    void 0 === t.width && void 0 === t.height ? void 0 !== i.fill.image.width && void 0 !== i.fill.image.height ? (o = i.fill.image.width + 1, l = i.fill.image.height) : (o = s + 1, l = s) : (o = t.width, l = t.height);
                    var c = document.createElementNS(e.globals.SVGNS, "pattern");
                    g.setAttrs(c, {
                        id: t.patternID,
                        patternUnits: t.patternUnits ? t.patternUnits : "userSpaceOnUse",
                        width: o + "px",
                        height: l + "px"
                    });
                    var h = document.createElementNS(e.globals.SVGNS, "image");
                    c.appendChild(h), h.setAttributeNS(window.SVG.xlink, "href", n), g.setAttrs(h, {
                        x: 0,
                        y: 0,
                        preserveAspectRatio: "none",
                        width: o + "px",
                        height: l + "px"
                    }), h.style.opacity = t.opacity, e.globals.dom.elDefs.node.appendChild(c)
                }
            }, {
                key: "getSeriesIndex", value: function (t) {
                    var e = this.w, i = e.config.chart.type;
                    return ("bar" === i || "rangeBar" === i) && e.config.plotOptions.bar.distributed || "heatmap" === i || "treemap" === i ? this.seriesIndex = t.seriesNumber : this.seriesIndex = t.seriesNumber % e.globals.series.length, this.seriesIndex
                }
            }, {
                key: "fillPath", value: function (t) {
                    var e = this.w;
                    this.opts = t;
                    var i, a, s, n = this.w.config;
                    this.seriesIndex = this.getSeriesIndex(t);
                    var o = this.getFillColors()[this.seriesIndex];
                    void 0 !== e.globals.seriesColors[this.seriesIndex] && (o = e.globals.seriesColors[this.seriesIndex]), "function" == typeof o && (o = o({
                        seriesIndex: this.seriesIndex,
                        dataPointIndex: t.dataPointIndex,
                        value: t.value,
                        w: e
                    }));
                    var l = t.fillType ? t.fillType : this.getFillType(this.seriesIndex),
                        c = Array.isArray(n.fill.opacity) ? n.fill.opacity[this.seriesIndex] : n.fill.opacity;
                    t.color && (o = t.color), o || (o = "#fff", console.warn("undefined color - ApexCharts"));
                    var h = o;
                    if (-1 === o.indexOf("rgb") ? o.length < 9 && (h = r.hexToRgba(o, c)) : o.indexOf("rgba") > -1 && (c = r.getOpacityFromRGBA(o)), t.opacity && (c = t.opacity), "pattern" === l && (a = this.handlePatternFill({
                        fillConfig: t.fillConfig,
                        patternFill: a,
                        fillColor: o,
                        fillOpacity: c,
                        defaultColor: h
                    })), "gradient" === l && (s = this.handleGradientFill({
                        fillConfig: t.fillConfig,
                        fillColor: o,
                        fillOpacity: c,
                        i: this.seriesIndex
                    })), "image" === l) {
                        var d = n.fill.image.src, u = t.patternID ? t.patternID : "";
                        this.clippedImgArea({
                            opacity: c,
                            image: Array.isArray(d) ? t.seriesNumber < d.length ? d[t.seriesNumber] : d[0] : d,
                            width: t.width ? t.width : void 0,
                            height: t.height ? t.height : void 0,
                            patternUnits: t.patternUnits,
                            patternID: "pattern".concat(e.globals.cuid).concat(t.seriesNumber + 1).concat(u)
                        }), i = "url(#pattern".concat(e.globals.cuid).concat(t.seriesNumber + 1).concat(u, ")")
                    } else i = "gradient" === l ? s : "pattern" === l ? a : h;
                    return t.solid && (i = h), i
                }
            }, {
                key: "getFillType", value: function (t) {
                    var e = this.w;
                    return Array.isArray(e.config.fill.type) ? e.config.fill.type[t] : e.config.fill.type
                }
            }, {
                key: "getFillColors", value: function () {
                    var t = this.w, e = t.config, i = this.opts, a = [];
                    return t.globals.comboCharts ? "line" === t.config.series[this.seriesIndex].type ? Array.isArray(t.globals.stroke.colors) ? a = t.globals.stroke.colors : a.push(t.globals.stroke.colors) : Array.isArray(t.globals.fill.colors) ? a = t.globals.fill.colors : a.push(t.globals.fill.colors) : "line" === e.chart.type ? Array.isArray(t.globals.stroke.colors) ? a = t.globals.stroke.colors : a.push(t.globals.stroke.colors) : Array.isArray(t.globals.fill.colors) ? a = t.globals.fill.colors : a.push(t.globals.fill.colors), void 0 !== i.fillColors && (a = [], Array.isArray(i.fillColors) ? a = i.fillColors.slice() : a.push(i.fillColors)), a
                }
            }, {
                key: "handlePatternFill", value: function (t) {
                    var e = t.fillConfig, i = (t.patternFill, t.fillColor), a = t.fillOpacity, r = t.defaultColor,
                        s = this.w.config.fill;
                    e && (s = e);
                    var n = this.opts, o = new g(this.ctx),
                        l = Array.isArray(s.pattern.strokeWidth) ? s.pattern.strokeWidth[this.seriesIndex] : s.pattern.strokeWidth,
                        c = i;
                    return Array.isArray(s.pattern.style) ? void 0 !== s.pattern.style[n.seriesNumber] ? o.drawPattern(s.pattern.style[n.seriesNumber], s.pattern.width, s.pattern.height, c, l, a) : r : o.drawPattern(s.pattern.style, s.pattern.width, s.pattern.height, c, l, a)
                }
            }, {
                key: "handleGradientFill", value: function (t) {
                    var e = t.fillColor, i = t.fillOpacity, a = t.fillConfig, s = t.i, n = this.w.config.fill;
                    a && (n = $($({}, n), a));
                    var o, l = this.opts, c = new g(this.ctx), h = new r, d = n.gradient.type, u = e,
                        f = void 0 === n.gradient.opacityFrom ? i : Array.isArray(n.gradient.opacityFrom) ? n.gradient.opacityFrom[s] : n.gradient.opacityFrom;
                    u.indexOf("rgba") > -1 && (f = r.getOpacityFromRGBA(u));
                    var p = void 0 === n.gradient.opacityTo ? i : Array.isArray(n.gradient.opacityTo) ? n.gradient.opacityTo[s] : n.gradient.opacityTo;
                    if (void 0 === n.gradient.gradientToColors || 0 === n.gradient.gradientToColors.length) o = "dark" === n.gradient.shade ? h.shadeColor(-1 * parseFloat(n.gradient.shadeIntensity), e.indexOf("rgb") > -1 ? r.rgb2hex(e) : e) : h.shadeColor(parseFloat(n.gradient.shadeIntensity), e.indexOf("rgb") > -1 ? r.rgb2hex(e) : e); else if (n.gradient.gradientToColors[l.seriesNumber]) {
                        var x = n.gradient.gradientToColors[l.seriesNumber];
                        o = x, x.indexOf("rgba") > -1 && (p = r.getOpacityFromRGBA(x))
                    } else o = e;
                    if (n.gradient.gradientFrom && (u = n.gradient.gradientFrom), n.gradient.gradientTo && (o = n.gradient.gradientTo), n.gradient.inverseColors) {
                        var b = u;
                        u = o, o = b
                    }
                    return u.indexOf("rgb") > -1 && (u = r.rgb2hex(u)), o.indexOf("rgb") > -1 && (o = r.rgb2hex(o)), c.drawGradient(d, u, o, f, p, l.size, n.gradient.stops, n.gradient.colorStops, s)
                }
            }]) && Q(e.prototype, i), t
        }();

        function tt(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var et = function () {
            function t(e, i) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i;
            return e = t, i = [{
                key: "setGlobalMarkerSize", value: function () {
                    var t = this.w;
                    if (t.globals.markers.size = Array.isArray(t.config.markers.size) ? t.config.markers.size : [t.config.markers.size], t.globals.markers.size.length > 0) {
                        if (t.globals.markers.size.length < t.globals.series.length + 1) for (var e = 0; e <= t.globals.series.length; e++) void 0 === t.globals.markers.size[e] && t.globals.markers.size.push(t.globals.markers.size[0])
                    } else t.globals.markers.size = t.config.series.map((function (e) {
                        return t.config.markers.size
                    }))
                }
            }, {
                key: "plotChartMarkers", value: function (t, e, i, a) {
                    var s, n = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], o = this.w, c = e,
                        h = t, d = null, u = new g(this.ctx),
                        f = o.config.markers.discrete && o.config.markers.discrete.length;
                    if ((o.globals.markers.size[e] > 0 || n || f) && (d = u.group({class: n || f ? "" : "apexcharts-series-markers"})).attr("clip-path", "url(#gridRectMarkerMask".concat(o.globals.cuid, ")")), Array.isArray(h.x)) for (var p = 0; p < h.x.length; p++) {
                        var x = i;
                        1 === i && 0 === p && (x = 0), 1 === i && 1 === p && (x = 1);
                        var b = "apexcharts-marker";
                        if ("line" !== o.config.chart.type && "area" !== o.config.chart.type || o.globals.comboCharts || o.config.tooltip.intersect || (b += " no-pointer-events"), (Array.isArray(o.config.markers.size) ? o.globals.markers.size[e] > 0 : o.config.markers.size > 0) || n || f) {
                            r.isNumber(h.y[p]) ? b += " w".concat(r.randomId()) : b = "apexcharts-nullpoint";
                            var v = this.getMarkerConfig({cssClass: b, seriesIndex: e, dataPointIndex: x});
                            o.config.series[c].data[x] && (o.config.series[c].data[x].fillColor && (v.pointFillColor = o.config.series[c].data[x].fillColor), o.config.series[c].data[x].strokeColor && (v.pointStrokeColor = o.config.series[c].data[x].strokeColor)), a && (v.pSize = a), (h.x[p] < 0 || h.x[p] > o.globals.gridWidth || h.y[p] < -o.globals.markers.largestSize || h.y[p] > o.globals.gridHeight + o.globals.markers.largestSize) && (v.pSize = 0), (s = u.drawMarker(h.x[p], h.y[p], v)).attr("rel", x), s.attr("j", x), s.attr("index", e), s.node.setAttribute("default-marker-size", v.pSize), new l(this.ctx).setSelectionFilter(s, e, x), this.addEvents(s), d && d.add(s)
                        } else void 0 === o.globals.pointsArray[e] && (o.globals.pointsArray[e] = []), o.globals.pointsArray[e].push([h.x[p], h.y[p]])
                    }
                    return d
                }
            }, {
                key: "getMarkerConfig", value: function (t) {
                    var e = t.cssClass, i = t.seriesIndex, a = t.dataPointIndex, r = void 0 === a ? null : a,
                        s = t.finishRadius, n = void 0 === s ? null : s, o = this.w, l = this.getMarkerStyle(i),
                        c = o.globals.markers.size[i], h = o.config.markers;
                    return null !== r && h.discrete.length && h.discrete.map((function (t) {
                        t.seriesIndex === i && t.dataPointIndex === r && (l.pointStrokeColor = t.strokeColor, l.pointFillColor = t.fillColor, c = t.size, l.pointShape = t.shape)
                    })), {
                        pSize: null === n ? c : n,
                        pRadius: h.radius,
                        width: Array.isArray(h.width) ? h.width[i] : h.width,
                        height: Array.isArray(h.height) ? h.height[i] : h.height,
                        pointStrokeWidth: Array.isArray(h.strokeWidth) ? h.strokeWidth[i] : h.strokeWidth,
                        pointStrokeColor: l.pointStrokeColor,
                        pointFillColor: l.pointFillColor,
                        shape: l.pointShape || (Array.isArray(h.shape) ? h.shape[i] : h.shape),
                        class: e,
                        pointStrokeOpacity: Array.isArray(h.strokeOpacity) ? h.strokeOpacity[i] : h.strokeOpacity,
                        pointStrokeDashArray: Array.isArray(h.strokeDashArray) ? h.strokeDashArray[i] : h.strokeDashArray,
                        pointFillOpacity: Array.isArray(h.fillOpacity) ? h.fillOpacity[i] : h.fillOpacity,
                        seriesIndex: i
                    }
                }
            }, {
                key: "addEvents", value: function (t) {
                    var e = this.w, i = new g(this.ctx);
                    t.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this.ctx, t)), t.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this.ctx, t)), t.node.addEventListener("mousedown", i.pathMouseDown.bind(this.ctx, t)), t.node.addEventListener("click", e.config.markers.onClick), t.node.addEventListener("dblclick", e.config.markers.onDblClick), t.node.addEventListener("touchstart", i.pathMouseDown.bind(this.ctx, t), {passive: !0})
                }
            }, {
                key: "getMarkerStyle", value: function (t) {
                    var e = this.w, i = e.globals.markers.colors,
                        a = e.config.markers.strokeColor || e.config.markers.strokeColors;
                    return {pointStrokeColor: Array.isArray(a) ? a[t] : a, pointFillColor: Array.isArray(i) ? i[t] : i}
                }
            }], i && tt(e.prototype, i), t
        }();

        function it(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var at = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled
            }

            var e, i;
            return e = t, (i = [{
                key: "draw", value: function (t, e, i) {
                    var a = this.w, r = new g(this.ctx), s = i.realIndex, n = i.pointsPos, o = i.zRatio, l = i.elParent,
                        c = r.group({class: "apexcharts-series-markers apexcharts-series-".concat(a.config.chart.type)});
                    if (c.attr("clip-path", "url(#gridRectMarkerMask".concat(a.globals.cuid, ")")), Array.isArray(n.x)) for (var h = 0; h < n.x.length; h++) {
                        var d = e + 1, u = !0;
                        0 === e && 0 === h && (d = 0), 0 === e && 1 === h && (d = 1);
                        var f = 0, p = a.globals.markers.size[s];
                        if (o !== 1 / 0) {
                            var x = a.config.plotOptions.bubble;
                            p = a.globals.seriesZ[s][d], x.zScaling && (p /= o), x.minBubbleRadius && p < x.minBubbleRadius && (p = x.minBubbleRadius), x.maxBubbleRadius && p > x.maxBubbleRadius && (p = x.maxBubbleRadius)
                        }
                        a.config.chart.animations.enabled || (f = p);
                        var b = n.x[h], v = n.y[h];
                        if (f = f || 0, null !== v && void 0 !== a.globals.series[s][d] || (u = !1), u) {
                            var m = this.drawPoint(b, v, f, p, s, d, e);
                            c.add(m)
                        }
                        l.add(c)
                    }
                }
            }, {
                key: "drawPoint", value: function (t, e, i, a, r, s, o) {
                    var c = this.w, h = r, d = new n(this.ctx), u = new l(this.ctx), f = new K(this.ctx),
                        p = new et(this.ctx), x = new g(this.ctx), b = p.getMarkerConfig({
                            cssClass: "apexcharts-marker",
                            seriesIndex: h,
                            dataPointIndex: s,
                            finishRadius: "bubble" === c.config.chart.type || c.globals.comboCharts && c.config.series[r] && "bubble" === c.config.series[r].type ? a : null
                        });
                    a = b.pSize;
                    var v, m = f.fillPath({
                        seriesNumber: r,
                        dataPointIndex: s,
                        color: b.pointFillColor,
                        patternUnits: "objectBoundingBox",
                        value: c.globals.series[r][o]
                    });
                    if ("circle" === b.shape ? v = x.drawCircle(i) : "square" !== b.shape && "rect" !== b.shape || (v = x.drawRect(0, 0, b.width - b.pointStrokeWidth / 2, b.height - b.pointStrokeWidth / 2, b.pRadius)), c.config.series[h].data[s] && c.config.series[h].data[s].fillColor && (m = c.config.series[h].data[s].fillColor), v.attr({
                        x: t - b.width / 2 - b.pointStrokeWidth / 2,
                        y: e - b.height / 2 - b.pointStrokeWidth / 2,
                        cx: t,
                        cy: e,
                        fill: m,
                        "fill-opacity": b.pointFillOpacity,
                        stroke: b.pointStrokeColor,
                        r: a,
                        "stroke-width": b.pointStrokeWidth,
                        "stroke-dasharray": b.pointStrokeDashArray,
                        "stroke-opacity": b.pointStrokeOpacity
                    }), c.config.chart.dropShadow.enabled) {
                        var y = c.config.chart.dropShadow;
                        u.dropShadow(v, y, r)
                    }
                    if (!this.initialAnim || c.globals.dataChanged || c.globals.resized) c.globals.animationEnded = !0; else {
                        var w = c.config.chart.animations.speed;
                        d.animateMarker(v, 0, "circle" === b.shape ? a : {
                            width: b.width,
                            height: b.height
                        }, w, c.globals.easing, (function () {
                            window.setTimeout((function () {
                                d.animationCompleted(v)
                            }), 100)
                        }))
                    }
                    if (c.globals.dataChanged && "circle" === b.shape) if (this.dynamicAnim) {
                        var k, A, S, C, P = c.config.chart.animations.dynamicAnimation.speed;
                        null != (C = c.globals.previousPaths[r] && c.globals.previousPaths[r][o]) && (k = C.x, A = C.y, S = void 0 !== C.r ? C.r : a);
                        for (var L = 0; L < c.globals.collapsedSeries.length; L++) c.globals.collapsedSeries[L].index === r && (P = 1, a = 0);
                        0 === t && 0 === e && (a = 0), d.animateCircle(v, {cx: k, cy: A, r: S}, {
                            cx: t,
                            cy: e,
                            r: a
                        }, P, c.globals.easing)
                    } else v.attr({r: a});
                    return v.attr({
                        rel: s,
                        j: s,
                        index: r,
                        "default-marker-size": a
                    }), u.setSelectionFilter(v, r, s), p.addEvents(v), v.node.classList.add("apexcharts-marker"), v
                }
            }, {
                key: "centerTextInBubble", value: function (t) {
                    var e = this.w;
                    return {y: t += parseInt(e.config.dataLabels.style.fontSize, 10) / 4}
                }
            }]) && it(e.prototype, i), t
        }();

        function rt(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        const st = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i;
            return e = t, (i = [{
                key: "dataLabelsCorrection", value: function (t, e, i, a, r, s, n) {
                    var o = this.w, l = !1, c = new g(this.ctx).getTextRects(i, n), h = c.width, d = c.height;
                    e < 0 && (e = 0), e > o.globals.gridHeight + d && (e = o.globals.gridHeight + d / 2), void 0 === o.globals.dataLabelsRects[a] && (o.globals.dataLabelsRects[a] = []), o.globals.dataLabelsRects[a].push({
                        x: t,
                        y: e,
                        width: h,
                        height: d
                    });
                    var u = o.globals.dataLabelsRects[a].length - 2,
                        f = void 0 !== o.globals.lastDrawnDataLabelsIndexes[a] ? o.globals.lastDrawnDataLabelsIndexes[a][o.globals.lastDrawnDataLabelsIndexes[a].length - 1] : 0;
                    if (void 0 !== o.globals.dataLabelsRects[a][u]) {
                        var p = o.globals.dataLabelsRects[a][f];
                        (t > p.x + p.width || e > p.y + p.height || e + d < p.y || t + h < p.x) && (l = !0)
                    }
                    return (0 === r || s) && (l = !0), {x: t, y: e, textRects: c, drawnextLabel: l}
                }
            }, {
                key: "drawDataLabel", value: function (t) {
                    var e = this, i = t.type, a = t.pos, r = t.i, s = t.j, n = t.isRangeStart, o = t.strokeWidth,
                        l = void 0 === o ? 2 : o, c = this.w, h = new g(this.ctx), d = c.config.dataLabels, u = 0,
                        f = 0, p = s, x = null;
                    if (!d.enabled || !Array.isArray(a.x)) return x;
                    x = h.group({class: "apexcharts-data-labels"});
                    for (var b = 0; b < a.x.length; b++) if (u = a.x[b] + d.offsetX, f = a.y[b] + d.offsetY + l, !isNaN(u)) {
                        1 === s && 0 === b && (p = 0), 1 === s && 1 === b && (p = 1);
                        var v = c.globals.series[r][p];
                        "rangeArea" === i && (v = n ? c.globals.seriesRangeStart[r][p] : c.globals.seriesRangeEnd[r][p]);
                        var m = "", y = function (t) {
                            return c.config.dataLabels.formatter(t, {
                                ctx: e.ctx,
                                seriesIndex: r,
                                dataPointIndex: p,
                                w: c
                            })
                        };
                        "bubble" === c.config.chart.type ? (m = y(v = c.globals.seriesZ[r][p]), f = a.y[b], f = new at(this.ctx).centerTextInBubble(f, r, p).y) : void 0 !== v && (m = y(v)), this.plotDataLabelsText({
                            x: u,
                            y: f,
                            text: m,
                            i: r,
                            j: p,
                            parent: x,
                            offsetCorrection: !0,
                            dataLabelsConfig: c.config.dataLabels
                        })
                    }
                    return x
                }
            }, {
                key: "plotDataLabelsText", value: function (t) {
                    var e = this.w, i = new g(this.ctx), a = t.x, r = t.y, s = t.i, n = t.j, o = t.text,
                        c = t.textAnchor, h = t.fontSize, d = t.parent, u = t.dataLabelsConfig, f = t.color,
                        p = t.alwaysDrawDataLabel, x = t.offsetCorrection;
                    if (!(Array.isArray(e.config.dataLabels.enabledOnSeries) && e.config.dataLabels.enabledOnSeries.indexOf(s) < 0)) {
                        var b = {x: a, y: r, drawnextLabel: !0, textRects: null};
                        x && (b = this.dataLabelsCorrection(a, r, o, s, n, p, parseInt(u.style.fontSize, 10))), e.globals.zoomed || (a = b.x, r = b.y), b.textRects && (a < -20 - b.textRects.width || a > e.globals.gridWidth + b.textRects.width + 30) && (o = "");
                        var v = e.globals.dataLabels.style.colors[s];
                        (("bar" === e.config.chart.type || "rangeBar" === e.config.chart.type) && e.config.plotOptions.bar.distributed || e.config.dataLabels.distributed) && (v = e.globals.dataLabels.style.colors[n]), "function" == typeof v && (v = v({
                            series: e.globals.series,
                            seriesIndex: s,
                            dataPointIndex: n,
                            w: e
                        })), f && (v = f);
                        var m = u.offsetX, y = u.offsetY;
                        if ("bar" !== e.config.chart.type && "rangeBar" !== e.config.chart.type || (m = 0, y = 0), b.drawnextLabel) {
                            var w = i.drawText({
                                width: 100,
                                height: parseInt(u.style.fontSize, 10),
                                x: a + m,
                                y: r + y,
                                foreColor: v,
                                textAnchor: c || u.textAnchor,
                                text: o,
                                fontSize: h || u.style.fontSize,
                                fontFamily: u.style.fontFamily,
                                fontWeight: u.style.fontWeight || "normal"
                            });
                            if (w.attr({class: "apexcharts-datalabel", cx: a, cy: r}), u.dropShadow.enabled) {
                                var k = u.dropShadow;
                                new l(this.ctx).dropShadow(w, k)
                            }
                            d.add(w), void 0 === e.globals.lastDrawnDataLabelsIndexes[s] && (e.globals.lastDrawnDataLabelsIndexes[s] = []), e.globals.lastDrawnDataLabelsIndexes[s].push(n)
                        }
                    }
                }
            }, {
                key: "addBackgroundToDataLabel", value: function (t, e) {
                    var i = this.w, a = i.config.dataLabels.background, r = a.padding, s = a.padding / 2, n = e.width,
                        o = e.height,
                        c = new g(this.ctx).drawRect(e.x - r, e.y - s / 2, n + 2 * r, o + s, a.borderRadius, "transparent" === i.config.chart.background ? "#fff" : i.config.chart.background, a.opacity, a.borderWidth, a.borderColor);
                    return a.dropShadow.enabled && new l(this.ctx).dropShadow(c, a.dropShadow), c
                }
            }, {
                key: "dataLabelsBackground", value: function () {
                    var t = this.w;
                    if ("bubble" !== t.config.chart.type) for (var e = t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels text"), i = 0; i < e.length; i++) {
                        var a = e[i], r = a.getBBox(), s = null;
                        if (r.width && r.height && (s = this.addBackgroundToDataLabel(a, r)), s) {
                            a.parentNode.insertBefore(s.node, a);
                            var n = a.getAttribute("fill");
                            !t.config.chart.animations.enabled || t.globals.resized || t.globals.dataChanged ? s.attr({fill: n}) : s.animate().attr({fill: n}), a.setAttribute("fill", t.config.dataLabels.background.foreColor)
                        }
                    }
                }
            }, {
                key: "bringForward", value: function () {
                    for (var t = this.w, e = t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels"), i = t.globals.dom.baseEl.querySelector(".apexcharts-plot-series:last-child"), a = 0; a < e.length; a++) i && i.insertBefore(e[a], i.nextSibling)
                }
            }]) && rt(e.prototype, i), t
        }();

        function nt(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var ot = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.legendInactiveClass = "legend-mouseover-inactive"
            }

            var e, i;
            return e = t, i = [{
                key: "getAllSeriesEls", value: function () {
                    return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series")
                }
            }, {
                key: "getSeriesByName", value: function (t) {
                    return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner .apexcharts-series[seriesName='".concat(r.escapeString(t), "']"))
                }
            }, {
                key: "isSeriesHidden", value: function (t) {
                    var e = this.getSeriesByName(t), i = parseInt(e.getAttribute("data:realIndex"), 10);
                    return {isHidden: e.classList.contains("apexcharts-series-collapsed"), realIndex: i}
                }
            }, {
                key: "addCollapsedClassToSeries", value: function (t, e) {
                    var i = this.w;

                    function a(i) {
                        for (var a = 0; a < i.length; a++) i[a].index === e && t.node.classList.add("apexcharts-series-collapsed")
                    }

                    a(i.globals.collapsedSeries), a(i.globals.ancillaryCollapsedSeries)
                }
            }, {
                key: "toggleSeries", value: function (t) {
                    var e = this.isSeriesHidden(t);
                    return this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex, e.isHidden), e.isHidden
                }
            }, {
                key: "showSeries", value: function (t) {
                    var e = this.isSeriesHidden(t);
                    e.isHidden && this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex, !0)
                }
            }, {
                key: "hideSeries", value: function (t) {
                    var e = this.isSeriesHidden(t);
                    e.isHidden || this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex, !1)
                }
            }, {
                key: "resetSeries", value: function () {
                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], a = this.w,
                        s = r.clone(a.globals.initialSeries);
                    a.globals.previousPaths = [], i ? (a.globals.collapsedSeries = [], a.globals.ancillaryCollapsedSeries = [], a.globals.collapsedSeriesIndices = [], a.globals.ancillaryCollapsedSeriesIndices = []) : s = this.emptyCollapsedSeries(s), a.config.series = s, t && (e && (a.globals.zoomed = !1, this.ctx.updateHelpers.revertDefaultAxisMinMax()), this.ctx.updateHelpers._updateSeries(s, a.config.chart.animations.dynamicAnimation.enabled))
                }
            }, {
                key: "emptyCollapsedSeries", value: function (t) {
                    for (var e = this.w, i = 0; i < t.length; i++) e.globals.collapsedSeriesIndices.indexOf(i) > -1 && (t[i].data = []);
                    return t
                }
            }, {
                key: "toggleSeriesOnHover", value: function (t, e) {
                    var i = this.w;
                    e || (e = t.target);
                    var a = i.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels");
                    if ("mousemove" === t.type) {
                        var r = parseInt(e.getAttribute("rel"), 10) - 1, s = null, n = null;
                        i.globals.axisCharts || "radialBar" === i.config.chart.type ? i.globals.axisCharts ? (s = i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(r, "']")), n = i.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(r, "']"))) : s = i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(r + 1, "']")) : s = i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(r + 1, "'] path"));
                        for (var o = 0; o < a.length; o++) a[o].classList.add(this.legendInactiveClass);
                        null !== s && (i.globals.axisCharts || s.parentNode.classList.remove(this.legendInactiveClass), s.classList.remove(this.legendInactiveClass), null !== n && n.classList.remove(this.legendInactiveClass))
                    } else if ("mouseout" === t.type) for (var l = 0; l < a.length; l++) a[l].classList.remove(this.legendInactiveClass)
                }
            }, {
                key: "highlightRangeInSeries", value: function (t, e) {
                    var i = this, a = this.w,
                        r = a.globals.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect"), s = function (t) {
                            for (var e = 0; e < r.length; e++) r[e].classList[t](i.legendInactiveClass)
                        };
                    if ("mousemove" === t.type) {
                        var n = parseInt(e.getAttribute("rel"), 10) - 1;
                        s("add"), function (t) {
                            for (var e = 0; e < r.length; e++) {
                                var a = parseInt(r[e].getAttribute("val"), 10);
                                a >= t.from && a <= t.to && r[e].classList.remove(i.legendInactiveClass)
                            }
                        }(a.config.plotOptions.heatmap.colorScale.ranges[n])
                    } else "mouseout" === t.type && s("remove")
                }
            }, {
                key: "getActiveConfigSeriesIndex", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "asc",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], i = this.w, a = 0;
                    if (i.config.series.length > 1) for (var r = i.config.series.map((function (t, a) {
                        return t.data && t.data.length > 0 && -1 === i.globals.collapsedSeriesIndices.indexOf(a) && (!i.globals.comboCharts || 0 === e.length || e.length && e.indexOf(i.config.series[a].type) > -1) ? a : -1
                    })), s = "asc" === t ? 0 : r.length - 1; "asc" === t ? s < r.length : s >= 0; "asc" === t ? s++ : s--) if (-1 !== r[s]) {
                        a = r[s];
                        break
                    }
                    return a
                }
            }, {
                key: "getBarSeriesIndices", value: function () {
                    return this.w.globals.comboCharts ? this.w.config.series.map((function (t, e) {
                        return "bar" === t.type || "column" === t.type ? e : -1
                    })).filter((function (t) {
                        return -1 !== t
                    })) : this.w.config.series.map((function (t, e) {
                        return e
                    }))
                }
            }, {
                key: "getPreviousPaths", value: function () {
                    var t = this.w;

                    function e(e, i, a) {
                        for (var r = e[i].childNodes, s = {
                            type: a,
                            paths: [],
                            realIndex: e[i].getAttribute("data:realIndex")
                        }, n = 0; n < r.length; n++) if (r[n].hasAttribute("pathTo")) {
                            var o = r[n].getAttribute("pathTo");
                            s.paths.push({d: o})
                        }
                        t.globals.previousPaths.push(s)
                    }

                    t.globals.previousPaths = [], ["line", "area", "bar", "rangebar", "rangeArea", "candlestick", "radar"].forEach((function (i) {
                        for (var a, r = (a = i, t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(a, "-series .apexcharts-series"))), s = 0; s < r.length; s++) e(r, s, i)
                    })), this.handlePrevBubbleScatterPaths("bubble"), this.handlePrevBubbleScatterPaths("scatter");
                    var i = t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t.config.chart.type, " .apexcharts-series"));
                    if (i.length > 0) for (var a = function (e) {
                        for (var i = t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t.config.chart.type, " .apexcharts-series[data\\:realIndex='").concat(e, "'] rect")), a = [], r = function (t) {
                            var e = function (e) {
                                return i[t].getAttribute(e)
                            }, r = {
                                x: parseFloat(e("x")),
                                y: parseFloat(e("y")),
                                width: parseFloat(e("width")),
                                height: parseFloat(e("height"))
                            };
                            a.push({rect: r, color: i[t].getAttribute("color")})
                        }, s = 0; s < i.length; s++) r(s);
                        t.globals.previousPaths.push(a)
                    }, r = 0; r < i.length; r++) a(r);
                    t.globals.axisCharts || (t.globals.previousPaths = t.globals.series)
                }
            }, {
                key: "handlePrevBubbleScatterPaths", value: function (t) {
                    var e = this.w,
                        i = e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t, "-series .apexcharts-series"));
                    if (i.length > 0) for (var a = 0; a < i.length; a++) {
                        for (var r = e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t, "-series .apexcharts-series[data\\:realIndex='").concat(a, "'] circle")), s = [], n = 0; n < r.length; n++) s.push({
                            x: r[n].getAttribute("cx"),
                            y: r[n].getAttribute("cy"),
                            r: r[n].getAttribute("r")
                        });
                        e.globals.previousPaths.push(s)
                    }
                }
            }, {
                key: "clearPreviousPaths", value: function () {
                    var t = this.w;
                    t.globals.previousPaths = [], t.globals.allSeriesCollapsed = !1
                }
            }, {
                key: "handleNoData", value: function () {
                    var t = this.w, e = t.config.noData, i = new g(this.ctx), a = t.globals.svgWidth / 2,
                        r = t.globals.svgHeight / 2, s = "middle";
                    if (t.globals.noData = !0, t.globals.animationEnded = !0, "left" === e.align ? (a = 10, s = "start") : "right" === e.align && (a = t.globals.svgWidth - 10, s = "end"), "top" === e.verticalAlign ? r = 50 : "bottom" === e.verticalAlign && (r = t.globals.svgHeight - 50), a += e.offsetX, r = r + parseInt(e.style.fontSize, 10) + 2 + e.offsetY, void 0 !== e.text && "" !== e.text) {
                        var n = i.drawText({
                            x: a,
                            y: r,
                            text: e.text,
                            textAnchor: s,
                            fontSize: e.style.fontSize,
                            fontFamily: e.style.fontFamily,
                            foreColor: e.style.color,
                            opacity: 1,
                            class: "apexcharts-text-nodata"
                        });
                        t.globals.dom.Paper.add(n)
                    }
                }
            }, {
                key: "setNullSeriesToZeroValues", value: function (t) {
                    for (var e = this.w, i = 0; i < t.length; i++) if (0 === t[i].length) for (var a = 0; a < t[e.globals.maxValsInArrayIndex].length; a++) t[i].push(0);
                    return t
                }
            }, {
                key: "hasAllSeriesEqualX", value: function () {
                    for (var t = !0, e = this.w, i = this.filteredSeriesX(), a = 0; a < i.length - 1; a++) if (i[a][0] !== i[a + 1][0]) {
                        t = !1;
                        break
                    }
                    return e.globals.allSeriesHasEqualX = t, t
                }
            }, {
                key: "filteredSeriesX", value: function () {
                    return this.w.globals.seriesX.map((function (t) {
                        return t.length > 0 ? t : []
                    }))
                }
            }], i && nt(e.prototype, i), t
        }();

        function lt(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, a = new Array(e); i < e; i++) a[i] = t[i];
            return a
        }

        function ct(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var ht = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.twoDSeries = [], this.threeDSeries = [], this.twoDSeriesX = [], this.seriesGoals = [], this.coreUtils = new p(this.ctx)
            }

            var e, i;
            return e = t, i = [{
                key: "isMultiFormat", value: function () {
                    return this.isFormatXY() || this.isFormat2DArray()
                }
            }, {
                key: "isFormatXY", value: function () {
                    var t = this.w.config.series.slice(), e = new ot(this.ctx);
                    if (this.activeSeriesIndex = e.getActiveConfigSeriesIndex(), void 0 !== t[this.activeSeriesIndex].data && t[this.activeSeriesIndex].data.length > 0 && null !== t[this.activeSeriesIndex].data[0] && void 0 !== t[this.activeSeriesIndex].data[0].x && null !== t[this.activeSeriesIndex].data[0]) return !0
                }
            }, {
                key: "isFormat2DArray", value: function () {
                    var t = this.w.config.series.slice(), e = new ot(this.ctx);
                    if (this.activeSeriesIndex = e.getActiveConfigSeriesIndex(), void 0 !== t[this.activeSeriesIndex].data && t[this.activeSeriesIndex].data.length > 0 && void 0 !== t[this.activeSeriesIndex].data[0] && null !== t[this.activeSeriesIndex].data[0] && t[this.activeSeriesIndex].data[0].constructor === Array) return !0
                }
            }, {
                key: "handleFormat2DArray", value: function (t, e) {
                    for (var i = this.w.config, a = this.w.globals, s = "boxPlot" === i.chart.type || "boxPlot" === i.series[e].type, n = 0; n < t[e].data.length; n++) if (void 0 !== t[e].data[n][1] && (Array.isArray(t[e].data[n][1]) && 4 === t[e].data[n][1].length && !s ? this.twoDSeries.push(r.parseNumber(t[e].data[n][1][3])) : t[e].data[n].length >= 5 ? this.twoDSeries.push(r.parseNumber(t[e].data[n][4])) : this.twoDSeries.push(r.parseNumber(t[e].data[n][1])), a.dataFormatXNumeric = !0), "datetime" === i.xaxis.type) {
                        var o = new Date(t[e].data[n][0]);
                        o = new Date(o).getTime(), this.twoDSeriesX.push(o)
                    } else this.twoDSeriesX.push(t[e].data[n][0]);
                    for (var l = 0; l < t[e].data.length; l++) void 0 !== t[e].data[l][2] && (this.threeDSeries.push(t[e].data[l][2]), a.isDataXYZ = !0)
                }
            }, {
                key: "handleFormatXY", value: function (t, e) {
                    var i = this.w.config, a = this.w.globals, s = new M(this.ctx), n = e;
                    a.collapsedSeriesIndices.indexOf(e) > -1 && (n = this.activeSeriesIndex);
                    for (var o = 0; o < t[e].data.length; o++) void 0 !== t[e].data[o].y && (Array.isArray(t[e].data[o].y) ? this.twoDSeries.push(r.parseNumber(t[e].data[o].y[t[e].data[o].y.length - 1])) : this.twoDSeries.push(r.parseNumber(t[e].data[o].y))), void 0 !== t[e].data[o].goals && Array.isArray(t[e].data[o].goals) ? (void 0 === this.seriesGoals[e] && (this.seriesGoals[e] = []), this.seriesGoals[e].push(t[e].data[o].goals)) : (void 0 === this.seriesGoals[e] && (this.seriesGoals[e] = []), this.seriesGoals[e].push(null));
                    for (var l = 0; l < t[n].data.length; l++) {
                        var c = "string" == typeof t[n].data[l].x, h = Array.isArray(t[n].data[l].x),
                            d = !h && !!s.isValidDate(t[n].data[l].x);
                        if (c || d) if (c || i.xaxis.convertedCatToNumeric) {
                            var u = a.isBarHorizontal && a.isRangeData;
                            "datetime" !== i.xaxis.type || u ? (this.fallbackToCategory = !0, this.twoDSeriesX.push(t[n].data[l].x), isNaN(t[n].data[l].x) || "category" === this.w.config.xaxis.type || "string" == typeof t[n].data[l].x || (a.isXNumeric = !0)) : this.twoDSeriesX.push(s.parseDate(t[n].data[l].x))
                        } else "datetime" === i.xaxis.type ? this.twoDSeriesX.push(s.parseDate(t[n].data[l].x.toString())) : (a.dataFormatXNumeric = !0, a.isXNumeric = !0, this.twoDSeriesX.push(parseFloat(t[n].data[l].x))); else h ? (this.fallbackToCategory = !0, this.twoDSeriesX.push(t[n].data[l].x)) : (a.isXNumeric = !0, a.dataFormatXNumeric = !0, this.twoDSeriesX.push(t[n].data[l].x))
                    }
                    if (t[e].data[0] && void 0 !== t[e].data[0].z) {
                        for (var g = 0; g < t[e].data.length; g++) this.threeDSeries.push(t[e].data[g].z);
                        a.isDataXYZ = !0
                    }
                }
            }, {
                key: "handleRangeData", value: function (t, e) {
                    var i = this.w.globals, a = {};
                    return this.isFormat2DArray() ? a = this.handleRangeDataFormat("array", t, e) : this.isFormatXY() && (a = this.handleRangeDataFormat("xy", t, e)), i.seriesRangeStart.push(a.start), i.seriesRangeEnd.push(a.end), i.seriesRange.push(a.rangeUniques), i.seriesRange.forEach((function (t, e) {
                        t && t.forEach((function (t, e) {
                            t.y.forEach((function (e, i) {
                                for (var a = 0; a < t.y.length; a++) if (i !== a) {
                                    var r = e.y1, s = e.y2, n = t.y[a].y1;
                                    r <= t.y[a].y2 && n <= s && (t.overlaps.indexOf(e.rangeName) < 0 && t.overlaps.push(e.rangeName), t.overlaps.indexOf(t.y[a].rangeName) < 0 && t.overlaps.push(t.y[a].rangeName))
                                }
                            }))
                        }))
                    })), a
                }
            }, {
                key: "handleCandleStickBoxData", value: function (t, e) {
                    var i = this.w.globals, a = {};
                    return this.isFormat2DArray() ? a = this.handleCandleStickBoxDataFormat("array", t, e) : this.isFormatXY() && (a = this.handleCandleStickBoxDataFormat("xy", t, e)), i.seriesCandleO[e] = a.o, i.seriesCandleH[e] = a.h, i.seriesCandleM[e] = a.m, i.seriesCandleL[e] = a.l, i.seriesCandleC[e] = a.c, a
                }
            }, {
                key: "handleRangeDataFormat", value: function (t, e, i) {
                    var a = [], s = [], n = e[i].data.filter((function (t, e, i) {
                        return e === i.findIndex((function (e) {
                            return e.x === t.x
                        }))
                    })).map((function (t, e) {
                        return {x: t.x, overlaps: [], y: []}
                    }));
                    if ("array" === t) for (var o = 0; o < e[i].data.length; o++) Array.isArray(e[i].data[o]) ? (a.push(e[i].data[o][1][0]), s.push(e[i].data[o][1][1])) : (a.push(e[i].data[o]), s.push(e[i].data[o])); else if ("xy" === t) for (var l = function (t) {
                        var o = Array.isArray(e[i].data[t].y), l = r.randomId(), c = e[i].data[t].x, h = {
                            y1: o ? e[i].data[t].y[0] : e[i].data[t].y,
                            y2: o ? e[i].data[t].y[1] : e[i].data[t].y,
                            rangeName: l
                        };
                        e[i].data[t].rangeName = l;
                        var d = n.findIndex((function (t) {
                            return t.x === c
                        }));
                        n[d].y.push(h), a.push(h.y1), s.push(h.y2)
                    }, c = 0; c < e[i].data.length; c++) l(c);
                    return {start: a, end: s, rangeUniques: n}
                }
            }, {
                key: "handleCandleStickBoxDataFormat", value: function (t, e, i) {
                    var a = this.w, r = "boxPlot" === a.config.chart.type || "boxPlot" === a.config.series[i].type,
                        s = [], n = [], o = [], l = [], c = [];
                    if ("array" === t) if (r && 6 === e[i].data[0].length || !r && 5 === e[i].data[0].length) for (var h = 0; h < e[i].data.length; h++) s.push(e[i].data[h][1]), n.push(e[i].data[h][2]), r ? (o.push(e[i].data[h][3]), l.push(e[i].data[h][4]), c.push(e[i].data[h][5])) : (l.push(e[i].data[h][3]), c.push(e[i].data[h][4])); else for (var d = 0; d < e[i].data.length; d++) Array.isArray(e[i].data[d][1]) && (s.push(e[i].data[d][1][0]), n.push(e[i].data[d][1][1]), r ? (o.push(e[i].data[d][1][2]), l.push(e[i].data[d][1][3]), c.push(e[i].data[d][1][4])) : (l.push(e[i].data[d][1][2]), c.push(e[i].data[d][1][3]))); else if ("xy" === t) for (var u = 0; u < e[i].data.length; u++) Array.isArray(e[i].data[u].y) && (s.push(e[i].data[u].y[0]), n.push(e[i].data[u].y[1]), r ? (o.push(e[i].data[u].y[2]), l.push(e[i].data[u].y[3]), c.push(e[i].data[u].y[4])) : (l.push(e[i].data[u].y[2]), c.push(e[i].data[u].y[3])));
                    return {o: s, h: n, m: o, l, c}
                }
            }, {
                key: "parseDataAxisCharts", value: function (t) {
                    var e, i, a = this, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.ctx,
                        n = this.w.config, o = this.w.globals, l = new M(s),
                        c = n.labels.length > 0 ? n.labels.slice() : n.xaxis.categories.slice();
                    if (o.isRangeBar = "rangeBar" === n.chart.type && o.isBarHorizontal, o.hasXaxisGroups = "category" === n.xaxis.type && n.xaxis.group.groups.length > 0, o.hasXaxisGroups && (o.groups = n.xaxis.group.groups), o.hasSeriesGroups = null === (e = t[0]) || void 0 === e ? void 0 : e.group, o.hasSeriesGroups) {
                        var h = [], d = function (t) {
                            if (Array.isArray(t)) return lt(t)
                        }(i = new Set(t.map((function (t) {
                            return t.group
                        })))) || function (t) {
                            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                        }(i) || function (t, e) {
                            if (t) {
                                if ("string" == typeof t) return lt(t, e);
                                var i = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? lt(t, e) : void 0
                            }
                        }(i) || function () {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }();
                        t.forEach((function (t, e) {
                            var i = d.indexOf(t.group);
                            h[i] || (h[i] = []), h[i].push(t.name)
                        })), o.seriesGroups = h
                    }
                    for (var u = function () {
                        for (var t = 0; t < c.length; t++) if ("string" == typeof c[t]) {
                            if (!l.isValidDate(c[t])) throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");
                            a.twoDSeriesX.push(l.parseDate(c[t]))
                        } else a.twoDSeriesX.push(c[t])
                    }, g = 0; g < t.length; g++) {
                        if (this.twoDSeries = [], this.twoDSeriesX = [], this.threeDSeries = [], void 0 === t[g].data) return void console.error("It is a possibility that you may have not included 'data' property in series.");
                        if ("rangeBar" !== n.chart.type && "rangeArea" !== n.chart.type && "rangeBar" !== t[g].type && "rangeArea" !== t[g].type || (o.isRangeData = !0, "rangeBar" !== n.chart.type && "rangeArea" !== n.chart.type || this.handleRangeData(t, g)), this.isMultiFormat()) this.isFormat2DArray() ? this.handleFormat2DArray(t, g) : this.isFormatXY() && this.handleFormatXY(t, g), "candlestick" !== n.chart.type && "candlestick" !== t[g].type && "boxPlot" !== n.chart.type && "boxPlot" !== t[g].type || this.handleCandleStickBoxData(t, g), o.series.push(this.twoDSeries), o.labels.push(this.twoDSeriesX), o.seriesX.push(this.twoDSeriesX), o.seriesGoals = this.seriesGoals, g !== this.activeSeriesIndex || this.fallbackToCategory || (o.isXNumeric = !0); else {
                            "datetime" === n.xaxis.type ? (o.isXNumeric = !0, u(), o.seriesX.push(this.twoDSeriesX)) : "numeric" === n.xaxis.type && (o.isXNumeric = !0, c.length > 0 && (this.twoDSeriesX = c, o.seriesX.push(this.twoDSeriesX))), o.labels.push(this.twoDSeriesX);
                            var f = t[g].data.map((function (t) {
                                return r.parseNumber(t)
                            }));
                            o.series.push(f)
                        }
                        o.seriesZ.push(this.threeDSeries), void 0 !== t[g].name ? o.seriesNames.push(t[g].name) : o.seriesNames.push("series-" + parseInt(g + 1, 10)), void 0 !== t[g].color ? o.seriesColors.push(t[g].color) : o.seriesColors.push(void 0)
                    }
                    return this.w
                }
            }, {
                key: "parseDataNonAxisCharts", value: function (t) {
                    var e = this.w.globals, i = this.w.config;
                    e.series = t.slice(), e.seriesNames = i.labels.slice();
                    for (var a = 0; a < e.series.length; a++) void 0 === e.seriesNames[a] && e.seriesNames.push("series-" + (a + 1));
                    return this.w
                }
            }, {
                key: "handleExternalLabelsData", value: function (t) {
                    var e = this.w.config, i = this.w.globals;
                    e.xaxis.categories.length > 0 ? i.labels = e.xaxis.categories : e.labels.length > 0 ? i.labels = e.labels.slice() : this.fallbackToCategory ? (i.labels = i.labels[0], i.seriesRange.length && (i.seriesRange.map((function (t) {
                        t.forEach((function (t) {
                            i.labels.indexOf(t.x) < 0 && t.x && i.labels.push(t.x)
                        }))
                    })), i.labels = Array.from(new Set(i.labels.map(JSON.stringify)), JSON.parse)), e.xaxis.convertedCatToNumeric && (new W(e).convertCatToNumericXaxis(e, this.ctx, i.seriesX[0]), this._generateExternalLabels(t))) : this._generateExternalLabels(t)
                }
            }, {
                key: "_generateExternalLabels", value: function (t) {
                    var e = this.w.globals, i = this.w.config, a = [];
                    if (e.axisCharts) {
                        if (e.series.length > 0) if (this.isFormatXY()) for (var r = i.series.map((function (t, e) {
                            return t.data.filter((function (t, e, i) {
                                return i.findIndex((function (e) {
                                    return e.x === t.x
                                })) === e
                            }))
                        })), s = r.reduce((function (t, e, i, a) {
                            return a[t].length > e.length ? t : i
                        }), 0), n = 0; n < r[s].length; n++) a.push(n + 1); else for (var o = 0; o < e.series[e.maxValsInArrayIndex].length; o++) a.push(o + 1);
                        e.seriesX = [];
                        for (var l = 0; l < t.length; l++) e.seriesX.push(a);
                        this.w.globals.isBarHorizontal || (e.isXNumeric = !0)
                    }
                    if (0 === a.length) {
                        a = e.axisCharts ? [] : e.series.map((function (t, e) {
                            return e + 1
                        }));
                        for (var c = 0; c < t.length; c++) e.seriesX.push(a)
                    }
                    e.labels = a, i.xaxis.convertedCatToNumeric && (e.categoryLabels = a.map((function (t) {
                        return i.xaxis.labels.formatter(t)
                    }))), e.noLabelsProvided = !0
                }
            }, {
                key: "parseData", value: function (t) {
                    var e = this.w, i = e.config, a = e.globals;
                    if (this.excludeCollapsedSeriesInYAxis(), this.fallbackToCategory = !1, this.ctx.core.resetGlobals(), this.ctx.core.isMultipleY(), a.axisCharts ? (this.parseDataAxisCharts(t), this.coreUtils.getLargestSeries()) : this.parseDataNonAxisCharts(t), i.chart.stacked) {
                        var r = new ot(this.ctx);
                        a.series = r.setNullSeriesToZeroValues(a.series)
                    }
                    this.coreUtils.getSeriesTotals(), a.axisCharts && (a.stackedSeriesTotals = this.coreUtils.getStackedSeriesTotals(), a.stackedSeriesTotalsByGroups = this.coreUtils.getStackedSeriesTotalsByGroups()), this.coreUtils.getPercentSeries(), a.dataFormatXNumeric || a.isXNumeric && ("numeric" !== i.xaxis.type || 0 !== i.labels.length || 0 !== i.xaxis.categories.length) || this.handleExternalLabelsData(t);
                    for (var s = this.coreUtils.getCategoryLabels(a.labels), n = 0; n < s.length; n++) if (Array.isArray(s[n])) {
                        a.isMultiLineX = !0;
                        break
                    }
                }
            }, {
                key: "excludeCollapsedSeriesInYAxis", value: function () {
                    var t = this, e = this.w;
                    e.globals.ignoreYAxisIndexes = e.globals.collapsedSeries.map((function (i, a) {
                        if (t.w.globals.isMultipleYAxis && !e.config.chart.stacked) return i.index
                    }))
                }
            }], i && ct(e.prototype, i), t
        }();

        function dt(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var ut = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i;
            return e = t, i = [{
                key: "getLabel", value: function (t, e, i, a) {
                    var r, s, n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
                        o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "12px",
                        l = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6], c = this.w,
                        h = void 0 === t[a] ? "" : t[a], d = h, u = c.globals.xLabelFormatter,
                        f = c.config.xaxis.labels.formatter, p = !1, x = new X(this.ctx), b = h;
                    l && (d = x.xLabelFormat(u, h, b, {
                        i: a,
                        dateFormatter: new M(this.ctx).formatDate,
                        w: c
                    }), void 0 !== f && (d = f(h, t[a], {
                        i: a,
                        dateFormatter: new M(this.ctx).formatDate,
                        w: c
                    }))), e.length > 0 ? (r = e[a].unit, s = null, e.forEach((function (t) {
                        "month" === t.unit ? s = "year" : "day" === t.unit ? s = "month" : "hour" === t.unit ? s = "day" : "minute" === t.unit && (s = "hour")
                    })), p = s === r, i = e[a].position, d = e[a].value) : "datetime" === c.config.xaxis.type && void 0 === f && (d = ""), void 0 === d && (d = ""), d = Array.isArray(d) ? d : d.toString();
                    var v, m = new g(this.ctx);
                    v = c.globals.rotateXLabels && l ? m.getTextRects(d, parseInt(o, 10), null, "rotate(".concat(c.config.xaxis.labels.rotate, " 0 0)"), !1) : m.getTextRects(d, parseInt(o, 10));
                    var y = !c.config.xaxis.labels.showDuplicates && this.ctx.timeScale;
                    return !Array.isArray(d) && (0 === d.indexOf("NaN") || 0 === d.toLowerCase().indexOf("invalid") || d.toLowerCase().indexOf("infinity") >= 0 || n.indexOf(d) >= 0 && y) && (d = ""), {
                        x: i,
                        text: d,
                        textRect: v,
                        isBold: p
                    }
                }
            }, {
                key: "checkLabelBasedOnTickamount", value: function (t, e, i) {
                    var a = this.w, r = a.config.xaxis.tickAmount;
                    return "dataPoints" === r && (r = Math.round(a.globals.gridWidth / 120)), r > i || t % Math.round(i / (r + 1)) == 0 || (e.text = ""), e
                }
            }, {
                key: "checkForOverflowingLabels", value: function (t, e, i, a, r) {
                    var s = this.w;
                    if (0 === t && s.globals.skipFirstTimelinelabel && (e.text = ""), t === i - 1 && s.globals.skipLastTimelinelabel && (e.text = ""), s.config.xaxis.labels.hideOverlappingLabels && a.length > 0) {
                        var n = r[r.length - 1];
                        e.x < n.textRect.width / (s.globals.rotateXLabels ? Math.abs(s.config.xaxis.labels.rotate) / 12 : 1.01) + n.x && (e.text = "")
                    }
                    return e
                }
            }, {
                key: "checkForReversedLabels", value: function (t, e) {
                    var i = this.w;
                    return i.config.yaxis[t] && i.config.yaxis[t].reversed && e.reverse(), e
                }
            }, {
                key: "isYAxisHidden", value: function (t) {
                    var e = this.w, i = new p(this.ctx);
                    return !e.config.yaxis[t].show || !e.config.yaxis[t].showForNullSeries && i.isSeriesNull(t) && -1 === e.globals.collapsedSeriesIndices.indexOf(t)
                }
            }, {
                key: "getYAxisForeColor", value: function (t, e) {
                    var i = this.w;
                    return Array.isArray(t) && i.globals.yAxisScale[e] && this.ctx.theme.pushExtraColors(t, i.globals.yAxisScale[e].result.length, !1), t
                }
            }, {
                key: "drawYAxisTicks", value: function (t, e, i, a, r, s, n) {
                    var o = this.w, l = new g(this.ctx), c = o.globals.translateY;
                    if (a.show && e > 0) {
                        !0 === o.config.yaxis[r].opposite && (t += a.width);
                        for (var h = e; h >= 0; h--) {
                            var d = c + e / 10 + o.config.yaxis[r].labels.offsetY - 1;
                            o.globals.isBarHorizontal && (d = s * h), "heatmap" === o.config.chart.type && (d += s / 2);
                            var u = l.drawLine(t + i.offsetX - a.width + a.offsetX, d + a.offsetY, t + i.offsetX + a.offsetX, d + a.offsetY, a.color);
                            n.add(u), c += s
                        }
                    }
                }
            }], i && dt(e.prototype, i), t
        }();

        function gt(t) {
            return function (t) {
                if (Array.isArray(t)) return ft(t)
            }(t) || function (t) {
                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
            }(t) || function (t, e) {
                if (t) {
                    if ("string" == typeof t) return ft(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? ft(t, e) : void 0
                }
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function ft(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, a = new Array(e); i < e; i++) a[i] = t[i];
            return a
        }

        function pt(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        const xt = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i;
            return e = t, (i = [{
                key: "scaleSvgNode", value: function (t, e) {
                    var i = parseFloat(t.getAttributeNS(null, "width")),
                        a = parseFloat(t.getAttributeNS(null, "height"));
                    t.setAttributeNS(null, "width", i * e), t.setAttributeNS(null, "height", a * e), t.setAttributeNS(null, "viewBox", "0 0 " + i + " " + a)
                }
            }, {
                key: "fixSvgStringForIe11", value: function (t) {
                    if (!r.isIE11()) return t.replace(/&nbsp;/g, "&#160;");
                    var e = 0, i = t.replace(/xmlns="http:\/\/www.w3.org\/2000\/svg"/g, (function (t) {
                        return 2 == ++e ? 'xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev"' : t
                    }));
                    return (i = i.replace(/xmlns:NS\d+=""/g, "")).replace(/NS\d+:(\w+:\w+=")/g, "$1")
                }
            }, {
                key: "getSvgString", value: function (t) {
                    null == t && (t = 1);
                    var e = this.w.globals.dom.Paper.svg();
                    if (1 !== t) {
                        var i = this.w.globals.dom.Paper.node.cloneNode(!0);
                        this.scaleSvgNode(i, t), e = (new XMLSerializer).serializeToString(i)
                    }
                    return this.fixSvgStringForIe11(e)
                }
            }, {
                key: "cleanup", value: function () {
                    var t = this.w, e = t.globals.dom.baseEl.getElementsByClassName("apexcharts-xcrosshairs"),
                        i = t.globals.dom.baseEl.getElementsByClassName("apexcharts-ycrosshairs"),
                        a = t.globals.dom.baseEl.querySelectorAll(".apexcharts-zoom-rect, .apexcharts-selection-rect");
                    Array.prototype.forEach.call(a, (function (t) {
                        t.setAttribute("width", 0)
                    })), e && e[0] && (e[0].setAttribute("x", -500), e[0].setAttribute("x1", -500), e[0].setAttribute("x2", -500)), i && i[0] && (i[0].setAttribute("y", -100), i[0].setAttribute("y1", -100), i[0].setAttribute("y2", -100))
                }
            }, {
                key: "svgUrl", value: function () {
                    this.cleanup();
                    var t = this.getSvgString(), e = new Blob([t], {type: "image/svg+xml;charset=utf-8"});
                    return URL.createObjectURL(e)
                }
            }, {
                key: "dataURI", value: function (t) {
                    var e = this;
                    return new Promise((function (i) {
                        var a = e.w, s = t ? t.scale || t.width / a.globals.svgWidth : 1;
                        e.cleanup();
                        var n = document.createElement("canvas");
                        n.width = a.globals.svgWidth * s, n.height = parseInt(a.globals.dom.elWrap.style.height, 10) * s;
                        var o = "transparent" === a.config.chart.background ? "#fff" : a.config.chart.background,
                            l = n.getContext("2d");
                        l.fillStyle = o, l.fillRect(0, 0, n.width * s, n.height * s);
                        var c = e.getSvgString(s);
                        if (window.canvg && r.isIE11()) {
                            var h = window.canvg.Canvg.fromString(l, c, {ignoreClear: !0, ignoreDimensions: !0});
                            h.start();
                            var d = n.msToBlob();
                            h.stop(), i({blob: d})
                        } else {
                            var u = "data:image/svg+xml," + encodeURIComponent(c), g = new Image;
                            g.crossOrigin = "anonymous", g.onload = function () {
                                if (l.drawImage(g, 0, 0), n.msToBlob) {
                                    var t = n.msToBlob();
                                    i({blob: t})
                                } else {
                                    var e = n.toDataURL("image/png");
                                    i({imgURI: e})
                                }
                            }, g.src = u
                        }
                    }))
                }
            }, {
                key: "exportToSVG", value: function () {
                    this.triggerDownload(this.svgUrl(), this.w.config.chart.toolbar.export.svg.filename, ".svg")
                }
            }, {
                key: "exportToPng", value: function () {
                    var t = this;
                    this.dataURI().then((function (e) {
                        var i = e.imgURI, a = e.blob;
                        a ? navigator.msSaveOrOpenBlob(a, t.w.globals.chartID + ".png") : t.triggerDownload(i, t.w.config.chart.toolbar.export.png.filename, ".png")
                    }))
                }
            }, {
                key: "exportToCSV", value: function (t) {
                    var e = this, i = t.series, a = t.fileName, s = t.columnDelimiter, n = void 0 === s ? "," : s,
                        o = t.lineDelimiter, l = void 0 === o ? "\n" : o, c = this.w;
                    i || (i = c.config.series);
                    var h, d, u = [], g = [], f = "", p = c.globals.series.map((function (t, e) {
                        return -1 === c.globals.collapsedSeriesIndices.indexOf(e) ? t : []
                    })), x = function (t) {
                        return "datetime" === c.config.xaxis.type && String(t).length >= 10
                    }, b = Math.max.apply(Math, gt(i.map((function (t) {
                        return t.data ? t.data.length : 0
                    })))), v = new ht(this.ctx), m = new ut(this.ctx), y = function (t) {
                        var i = "";
                        if (c.globals.axisCharts) {
                            if ("category" === c.config.xaxis.type || c.config.xaxis.convertedCatToNumeric) if (c.globals.isBarHorizontal) {
                                var a = c.globals.yLabelFormatters[0], s = new ot(e.ctx).getActiveConfigSeriesIndex();
                                i = a(c.globals.labels[t], {seriesIndex: s, dataPointIndex: t, w: c})
                            } else i = m.getLabel(c.globals.labels, c.globals.timescaleLabels, 0, t).text;
                            "datetime" === c.config.xaxis.type && (c.config.xaxis.categories.length ? i = c.config.xaxis.categories[t] : c.config.labels.length && (i = c.config.labels[t]))
                        } else i = c.config.labels[t];
                        return Array.isArray(i) && (i = i.join(" ")), r.isNumber(i) ? i : i.split(n).join("")
                    };
                    u.push(c.config.chart.toolbar.export.csv.headerCategory), "boxPlot" === c.config.chart.type ? (u.push("minimum"), u.push("q1"), u.push("median"), u.push("q3"), u.push("maximum")) : "candlestick" === c.config.chart.type ? (u.push("open"), u.push("high"), u.push("low"), u.push("close")) : "rangeBar" === c.config.chart.type ? (u.push("minimum"), u.push("maximum")) : i.map((function (t, e) {
                        var i = (t.name ? t.name : "series-".concat(e)) + "";
                        c.globals.axisCharts && u.push(i.split(n).join("") ? i.split(n).join("") : "series-".concat(e))
                    })), c.globals.axisCharts || (u.push(c.config.chart.toolbar.export.csv.headerValue), g.push(u.join(n))), c.globals.allSeriesHasEqualX || !c.globals.axisCharts || c.config.xaxis.categories.length || c.config.labels.length ? i.map((function (t, e) {
                        c.globals.axisCharts ? function (t, e) {
                            if (u.length && 0 === e && g.push(u.join(n)), t.data) {
                                t.data = t.data.length && t.data || gt(Array(b)).map((function () {
                                    return ""
                                }));
                                for (var a = 0; a < t.data.length; a++) {
                                    u = [];
                                    var s = y(a);
                                    if (s || (v.isFormatXY() ? s = i[e].data[a].x : v.isFormat2DArray() && (s = i[e].data[a] ? i[e].data[a][0] : "")), 0 === e) {
                                        u.push(x(s) ? c.config.chart.toolbar.export.csv.dateFormatter(s) : r.isNumber(s) ? s : s.split(n).join(""));
                                        for (var o = 0; o < c.globals.series.length; o++) {
                                            var l;
                                            v.isFormatXY() ? u.push(null === (l = i[o].data[a]) || void 0 === l ? void 0 : l.y) : u.push(p[o][a])
                                        }
                                    }
                                    ("candlestick" === c.config.chart.type || t.type && "candlestick" === t.type) && (u.pop(), u.push(c.globals.seriesCandleO[e][a]), u.push(c.globals.seriesCandleH[e][a]), u.push(c.globals.seriesCandleL[e][a]), u.push(c.globals.seriesCandleC[e][a])), ("boxPlot" === c.config.chart.type || t.type && "boxPlot" === t.type) && (u.pop(), u.push(c.globals.seriesCandleO[e][a]), u.push(c.globals.seriesCandleH[e][a]), u.push(c.globals.seriesCandleM[e][a]), u.push(c.globals.seriesCandleL[e][a]), u.push(c.globals.seriesCandleC[e][a])), "rangeBar" === c.config.chart.type && (u.pop(), u.push(c.globals.seriesRangeStart[e][a]), u.push(c.globals.seriesRangeEnd[e][a])), u.length && g.push(u.join(n))
                                }
                            }
                        }(t, e) : ((u = []).push(c.globals.labels[e].split(n).join("")), u.push(p[e]), g.push(u.join(n)))
                    })) : (h = new Set, d = {}, i.forEach((function (t, e) {
                        null == t || t.data.forEach((function (t) {
                            var a, r;
                            if (v.isFormatXY()) a = t.x, r = t.y; else {
                                if (!v.isFormat2DArray()) return;
                                a = t[0], r = t[1]
                            }
                            d[a] || (d[a] = Array(i.length).fill("")), d[a][e] = r, h.add(a)
                        }))
                    })), u.length && g.push(u.join(n)), Array.from(h).sort().forEach((function (t) {
                        g.push([x(t) && "datetime" === c.config.xaxis.type ? c.config.chart.toolbar.export.csv.dateFormatter(t) : r.isNumber(t) ? t : t.split(n).join(""), d[t].join(n)])
                    }))), f += g.join(l), this.triggerDownload("data:text/csv; charset=utf-8," + encodeURIComponent("\ufeff" + f), a || c.config.chart.toolbar.export.csv.filename, ".csv")
                }
            }, {
                key: "triggerDownload", value: function (t, e, i) {
                    var a = document.createElement("a");
                    a.href = t, a.download = (e || this.w.globals.chartID) + i, document.body.appendChild(a), a.click(), document.body.removeChild(a)
                }
            }]) && pt(e.prototype, i), t
        }();

        function bt(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var vt = function () {
            function t(e, i) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.elgrid = i, this.w = e.w;
                var a = this.w;
                this.axesUtils = new ut(e), this.xaxisLabels = a.globals.labels.slice(), a.globals.timescaleLabels.length > 0 && !a.globals.isBarHorizontal && (this.xaxisLabels = a.globals.timescaleLabels.slice()), a.config.xaxis.overwriteCategories && (this.xaxisLabels = a.config.xaxis.overwriteCategories), this.drawnLabels = [], this.drawnLabelsRects = [], "top" === a.config.xaxis.position ? this.offY = 0 : this.offY = a.globals.gridHeight + 1, this.offY = this.offY + a.config.xaxis.axisBorder.offsetY, this.isCategoryBarHorizontal = "bar" === a.config.chart.type && a.config.plotOptions.bar.horizontal, this.xaxisFontSize = a.config.xaxis.labels.style.fontSize, this.xaxisFontFamily = a.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = a.config.xaxis.labels.style.colors, this.xaxisBorderWidth = a.config.xaxis.axisBorder.width, this.isCategoryBarHorizontal && (this.xaxisBorderWidth = a.config.yaxis[0].axisBorder.width.toString()), this.xaxisBorderWidth.indexOf("%") > -1 ? this.xaxisBorderWidth = a.globals.gridWidth * parseInt(this.xaxisBorderWidth, 10) / 100 : this.xaxisBorderWidth = parseInt(this.xaxisBorderWidth, 10), this.xaxisBorderHeight = a.config.xaxis.axisBorder.height, this.yaxis = a.config.yaxis[0]
            }

            var e, i;
            return e = t, i = [{
                key: "drawXaxis", value: function () {
                    var t = this.w, e = new g(this.ctx), i = e.group({
                        class: "apexcharts-xaxis",
                        transform: "translate(".concat(t.config.xaxis.offsetX, ", ").concat(t.config.xaxis.offsetY, ")")
                    }), a = e.group({
                        class: "apexcharts-xaxis-texts-g",
                        transform: "translate(".concat(t.globals.translateXAxisX, ", ").concat(t.globals.translateXAxisY, ")")
                    });
                    i.add(a);
                    for (var r = [], s = 0; s < this.xaxisLabels.length; s++) r.push(this.xaxisLabels[s]);
                    if (this.drawXAxisLabelAndGroup(!0, e, a, r, t.globals.isXNumeric, (function (t, e) {
                        return e
                    })), t.globals.hasXaxisGroups) {
                        var n = t.globals.groups;
                        r = [];
                        for (var o = 0; o < n.length; o++) r.push(n[o].title);
                        var l = {};
                        t.config.xaxis.group.style && (l.xaxisFontSize = t.config.xaxis.group.style.fontSize, l.xaxisFontFamily = t.config.xaxis.group.style.fontFamily, l.xaxisForeColors = t.config.xaxis.group.style.colors, l.fontWeight = t.config.xaxis.group.style.fontWeight, l.cssClass = t.config.xaxis.group.style.cssClass), this.drawXAxisLabelAndGroup(!1, e, a, r, !1, (function (t, e) {
                            return n[t].cols * e
                        }), l)
                    }
                    if (void 0 !== t.config.xaxis.title.text) {
                        var c = e.group({class: "apexcharts-xaxis-title"}), h = e.drawText({
                            x: t.globals.gridWidth / 2 + t.config.xaxis.title.offsetX,
                            y: this.offY + parseFloat(this.xaxisFontSize) + ("bottom" === t.config.xaxis.position ? t.globals.xAxisLabelsHeight : -t.globals.xAxisLabelsHeight - 10) + t.config.xaxis.title.offsetY,
                            text: t.config.xaxis.title.text,
                            textAnchor: "middle",
                            fontSize: t.config.xaxis.title.style.fontSize,
                            fontFamily: t.config.xaxis.title.style.fontFamily,
                            fontWeight: t.config.xaxis.title.style.fontWeight,
                            foreColor: t.config.xaxis.title.style.color,
                            cssClass: "apexcharts-xaxis-title-text " + t.config.xaxis.title.style.cssClass
                        });
                        c.add(h), i.add(c)
                    }
                    if (t.config.xaxis.axisBorder.show) {
                        var d = t.globals.barPadForNumericAxis,
                            u = e.drawLine(t.globals.padHorizontal + t.config.xaxis.axisBorder.offsetX - d, this.offY, this.xaxisBorderWidth + d, this.offY, t.config.xaxis.axisBorder.color, 0, this.xaxisBorderHeight);
                        this.elgrid && this.elgrid.elGridBorders && t.config.grid.show ? this.elgrid.elGridBorders.add(u) : i.add(u)
                    }
                    return i
                }
            }, {
                key: "drawXAxisLabelAndGroup", value: function (t, e, i, a, r, s) {
                    var n, o = this, l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {}, c = [],
                        h = [], d = this.w, u = l.xaxisFontSize || this.xaxisFontSize,
                        g = l.xaxisFontFamily || this.xaxisFontFamily, f = l.xaxisForeColors || this.xaxisForeColors,
                        p = l.fontWeight || d.config.xaxis.labels.style.fontWeight,
                        x = l.cssClass || d.config.xaxis.labels.style.cssClass, b = d.globals.padHorizontal,
                        v = a.length, m = "category" === d.config.xaxis.type ? d.globals.dataPoints : v;
                    if (0 === m && v > m && (m = v), r) {
                        var y = m > 1 ? m - 1 : m;
                        n = d.globals.gridWidth / Math.min(y, v - 1), b = b + s(0, n) / 2 + d.config.xaxis.labels.offsetX
                    } else n = d.globals.gridWidth / m, b = b + s(0, n) + d.config.xaxis.labels.offsetX;
                    for (var w = function (r) {
                        var l = b - s(r, n) / 2 + d.config.xaxis.labels.offsetX;
                        0 === r && 1 === v && n / 2 === b && 1 === m && (l = d.globals.gridWidth / 2);
                        var y = o.axesUtils.getLabel(a, d.globals.timescaleLabels, l, r, c, u, t), w = 28;
                        if (d.globals.rotateXLabels && t && (w = 22), d.config.xaxis.title.text && "top" === d.config.xaxis.position && (w += parseFloat(d.config.xaxis.title.style.fontSize) + 2), t || (w = w + parseFloat(u) + (d.globals.xAxisLabelsHeight - d.globals.xAxisGroupLabelsHeight) + (d.globals.rotateXLabels ? 10 : 0)), y = void 0 !== d.config.xaxis.tickAmount && "dataPoints" !== d.config.xaxis.tickAmount && "datetime" !== d.config.xaxis.type ? o.axesUtils.checkLabelBasedOnTickamount(r, y, v) : o.axesUtils.checkForOverflowingLabels(r, y, v, c, h), d.config.xaxis.labels.show) {
                            var k = e.drawText({
                                x: y.x,
                                y: o.offY + d.config.xaxis.labels.offsetY + w - ("top" === d.config.xaxis.position ? d.globals.xAxisHeight + d.config.xaxis.axisTicks.height - 2 : 0),
                                text: y.text,
                                textAnchor: "middle",
                                fontWeight: y.isBold ? 600 : p,
                                fontSize: u,
                                fontFamily: g,
                                foreColor: Array.isArray(f) ? t && d.config.xaxis.convertedCatToNumeric ? f[d.globals.minX + r - 1] : f[r] : f,
                                isPlainText: !1,
                                cssClass: (t ? "apexcharts-xaxis-label " : "apexcharts-xaxis-group-label ") + x
                            });
                            if (i.add(k), k.on("click", (function (t) {
                                if ("function" == typeof d.config.chart.events.xAxisLabelClick) {
                                    var e = Object.assign({}, d, {labelIndex: r});
                                    d.config.chart.events.xAxisLabelClick(t, o.ctx, e)
                                }
                            })), t) {
                                var A = document.createElementNS(d.globals.SVGNS, "title");
                                A.textContent = Array.isArray(y.text) ? y.text.join(" ") : y.text, k.node.appendChild(A), "" !== y.text && (c.push(y.text), h.push(y))
                            }
                        }
                        r < v - 1 && (b += s(r + 1, n))
                    }, k = 0; k <= v - 1; k++) w(k)
                }
            }, {
                key: "drawXaxisInversed", value: function (t) {
                    var e, i, a = this, r = this.w, s = new g(this.ctx),
                        n = r.config.yaxis[0].opposite ? r.globals.translateYAxisX[t] : 0,
                        o = s.group({class: "apexcharts-yaxis apexcharts-xaxis-inversed", rel: t}), l = s.group({
                            class: "apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g",
                            transform: "translate(" + n + ", 0)"
                        });
                    o.add(l);
                    var c = [];
                    if (r.config.yaxis[t].show) for (var h = 0; h < this.xaxisLabels.length; h++) c.push(this.xaxisLabels[h]);
                    e = r.globals.gridHeight / c.length, i = -e / 2.2;
                    var d = r.globals.yLabelFormatters[0], u = r.config.yaxis[0].labels;
                    if (u.show) for (var f = function (n) {
                        var o = void 0 === c[n] ? "" : c[n];
                        o = d(o, {seriesIndex: t, dataPointIndex: n, w: r});
                        var h = a.axesUtils.getYAxisForeColor(u.style.colors, t), g = 0;
                        Array.isArray(o) && (g = o.length / 2 * parseInt(u.style.fontSize, 10));
                        var f = u.offsetX - 15, p = "end";
                        a.yaxis.opposite && (p = "start"), "left" === r.config.yaxis[0].labels.align ? (f = u.offsetX, p = "start") : "center" === r.config.yaxis[0].labels.align ? (f = u.offsetX, p = "middle") : "right" === r.config.yaxis[0].labels.align && (p = "end");
                        var x = s.drawText({
                            x: f,
                            y: i + e + u.offsetY - g,
                            text: o,
                            textAnchor: p,
                            foreColor: Array.isArray(h) ? h[n] : h,
                            fontSize: u.style.fontSize,
                            fontFamily: u.style.fontFamily,
                            fontWeight: u.style.fontWeight,
                            isPlainText: !1,
                            cssClass: "apexcharts-yaxis-label " + u.style.cssClass,
                            maxWidth: u.maxWidth
                        });
                        l.add(x), x.on("click", (function (t) {
                            if ("function" == typeof r.config.chart.events.xAxisLabelClick) {
                                var e = Object.assign({}, r, {labelIndex: n});
                                r.config.chart.events.xAxisLabelClick(t, a.ctx, e)
                            }
                        }));
                        var b = document.createElementNS(r.globals.SVGNS, "title");
                        if (b.textContent = Array.isArray(o) ? o.join(" ") : o, x.node.appendChild(b), 0 !== r.config.yaxis[t].labels.rotate) {
                            var v = s.rotateAroundCenter(x.node);
                            x.node.setAttribute("transform", "rotate(".concat(r.config.yaxis[t].labels.rotate, " 0 ").concat(v.y, ")"))
                        }
                        i += e
                    }, p = 0; p <= c.length - 1; p++) f(p);
                    if (void 0 !== r.config.yaxis[0].title.text) {
                        var x = s.group({
                            class: "apexcharts-yaxis-title apexcharts-xaxis-title-inversed",
                            transform: "translate(" + n + ", 0)"
                        }), b = s.drawText({
                            x: r.config.yaxis[0].title.offsetX,
                            y: r.globals.gridHeight / 2 + r.config.yaxis[0].title.offsetY,
                            text: r.config.yaxis[0].title.text,
                            textAnchor: "middle",
                            foreColor: r.config.yaxis[0].title.style.color,
                            fontSize: r.config.yaxis[0].title.style.fontSize,
                            fontWeight: r.config.yaxis[0].title.style.fontWeight,
                            fontFamily: r.config.yaxis[0].title.style.fontFamily,
                            cssClass: "apexcharts-yaxis-title-text " + r.config.yaxis[0].title.style.cssClass
                        });
                        x.add(b), o.add(x)
                    }
                    var v = 0;
                    this.isCategoryBarHorizontal && r.config.yaxis[0].opposite && (v = r.globals.gridWidth);
                    var m = r.config.xaxis.axisBorder;
                    if (m.show) {
                        var y = s.drawLine(r.globals.padHorizontal + m.offsetX + v, 1 + m.offsetY, r.globals.padHorizontal + m.offsetX + v, r.globals.gridHeight + m.offsetY, m.color, 0);
                        this.elgrid && this.elgrid.elGridBorders && r.config.grid.show ? this.elgrid.elGridBorders.add(y) : o.add(y)
                    }
                    return r.config.yaxis[0].axisTicks.show && this.axesUtils.drawYAxisTicks(v, c.length, r.config.yaxis[0].axisBorder, r.config.yaxis[0].axisTicks, 0, e, o), o
                }
            }, {
                key: "drawXaxisTicks", value: function (t, e, i) {
                    var a = this.w, r = t;
                    if (!(t < 0 || t - 2 > a.globals.gridWidth)) {
                        var s = this.offY + a.config.xaxis.axisTicks.offsetY;
                        if (e = e + s + a.config.xaxis.axisTicks.height, "top" === a.config.xaxis.position && (e = s - a.config.xaxis.axisTicks.height), a.config.xaxis.axisTicks.show) {
                            var n = new g(this.ctx).drawLine(t + a.config.xaxis.axisTicks.offsetX, s + a.config.xaxis.offsetY, r + a.config.xaxis.axisTicks.offsetX, e + a.config.xaxis.offsetY, a.config.xaxis.axisTicks.color);
                            i.add(n), n.node.classList.add("apexcharts-xaxis-tick")
                        }
                    }
                }
            }, {
                key: "getXAxisTicksPositions", value: function () {
                    var t = this.w, e = [], i = this.xaxisLabels.length, a = t.globals.padHorizontal;
                    if (t.globals.timescaleLabels.length > 0) for (var r = 0; r < i; r++) a = this.xaxisLabels[r].position, e.push(a); else for (var s = i, n = 0; n < s; n++) {
                        var o = s;
                        t.globals.isXNumeric && "bar" !== t.config.chart.type && (o -= 1), a += t.globals.gridWidth / o, e.push(a)
                    }
                    return e
                }
            }, {
                key: "xAxisLabelCorrections", value: function () {
                    var t = this.w, e = new g(this.ctx),
                        i = t.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"),
                        a = t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text:not(.apexcharts-xaxis-group-label)"),
                        r = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"),
                        s = t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan");
                    if (t.globals.rotateXLabels || t.config.xaxis.labels.rotateAlways) for (var n = 0; n < a.length; n++) {
                        var o = e.rotateAroundCenter(a[n]);
                        o.y = o.y - 1, o.x = o.x + 1, a[n].setAttribute("transform", "rotate(".concat(t.config.xaxis.labels.rotate, " ").concat(o.x, " ").concat(o.y, ")")), a[n].setAttribute("text-anchor", "end"), i.setAttribute("transform", "translate(0, ".concat(-10, ")"));
                        var l = a[n].childNodes;
                        t.config.xaxis.labels.trim && Array.prototype.forEach.call(l, (function (i) {
                            e.placeTextWithEllipsis(i, i.textContent, t.globals.xAxisLabelsHeight - ("bottom" === t.config.legend.position ? 20 : 10))
                        }))
                    } else !function () {
                        for (var i = t.globals.gridWidth / (t.globals.labels.length + 1), r = 0; r < a.length; r++) {
                            var s = a[r].childNodes;
                            t.config.xaxis.labels.trim && "datetime" !== t.config.xaxis.type && Array.prototype.forEach.call(s, (function (t) {
                                e.placeTextWithEllipsis(t, t.textContent, i)
                            }))
                        }
                    }();
                    if (r.length > 0) {
                        var c = r[r.length - 1].getBBox(), h = r[0].getBBox();
                        c.x < -20 && r[r.length - 1].parentNode.removeChild(r[r.length - 1]), h.x + h.width > t.globals.gridWidth && !t.globals.isBarHorizontal && r[0].parentNode.removeChild(r[0]);
                        for (var d = 0; d < s.length; d++) e.placeTextWithEllipsis(s[d], s[d].textContent, t.config.yaxis[0].labels.maxWidth - (t.config.yaxis[0].title.text ? 2 * parseFloat(t.config.yaxis[0].title.style.fontSize) : 0) - 15)
                    }
                }
            }], i && bt(e.prototype, i), t
        }();

        function mt(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        const yt = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w;
                var i = this.w;
                this.xaxisLabels = i.globals.labels.slice(), this.axesUtils = new ut(e), this.isRangeBar = i.globals.seriesRange.length && i.globals.isBarHorizontal, i.globals.timescaleLabels.length > 0 && (this.xaxisLabels = i.globals.timescaleLabels.slice())
            }

            var e, i;
            return e = t, i = [{
                key: "drawGridArea", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, e = this.w,
                        i = new g(this.ctx);
                    null === t && (t = i.group({class: "apexcharts-grid"}));
                    var a = i.drawLine(e.globals.padHorizontal, 1, e.globals.padHorizontal, e.globals.gridHeight, "transparent"),
                        r = i.drawLine(e.globals.padHorizontal, e.globals.gridHeight, e.globals.gridWidth, e.globals.gridHeight, "transparent");
                    return t.add(r), t.add(a), t
                }
            }, {
                key: "drawGrid", value: function () {
                    var t = null;
                    return this.w.globals.axisCharts && (t = this.renderGrid(), this.drawGridArea(t.el)), t
                }
            }, {
                key: "createGridMask", value: function () {
                    var t = this.w, e = t.globals, i = new g(this.ctx),
                        a = Array.isArray(t.config.stroke.width) ? 0 : t.config.stroke.width;
                    if (Array.isArray(t.config.stroke.width)) {
                        var r = 0;
                        t.config.stroke.width.forEach((function (t) {
                            r = Math.max(r, t)
                        })), a = r
                    }
                    e.dom.elGridRectMask = document.createElementNS(e.SVGNS, "clipPath"), e.dom.elGridRectMask.setAttribute("id", "gridRectMask".concat(e.cuid)), e.dom.elGridRectMarkerMask = document.createElementNS(e.SVGNS, "clipPath"), e.dom.elGridRectMarkerMask.setAttribute("id", "gridRectMarkerMask".concat(e.cuid)), e.dom.elForecastMask = document.createElementNS(e.SVGNS, "clipPath"), e.dom.elForecastMask.setAttribute("id", "forecastMask".concat(e.cuid)), e.dom.elNonForecastMask = document.createElementNS(e.SVGNS, "clipPath"), e.dom.elNonForecastMask.setAttribute("id", "nonForecastMask".concat(e.cuid));
                    var s = t.config.chart.type, n = 0, o = 0;
                    ("bar" === s || "rangeBar" === s || "candlestick" === s || "boxPlot" === s || t.globals.comboBarCount > 0) && t.globals.isXNumeric && !t.globals.isBarHorizontal && (n = t.config.grid.padding.left, o = t.config.grid.padding.right, e.barPadForNumericAxis > n && (n = e.barPadForNumericAxis, o = e.barPadForNumericAxis)), e.dom.elGridRect = i.drawRect(-a - n - 2, 2 * -a - 2, e.gridWidth + a + o + n + 4, e.gridHeight + 4 * a + 4, 0, "#fff");
                    var l = t.globals.markers.largestSize + 1;
                    e.dom.elGridRectMarker = i.drawRect(2 * -l, 2 * -l, e.gridWidth + 4 * l, e.gridHeight + 4 * l, 0, "#fff"), e.dom.elGridRectMask.appendChild(e.dom.elGridRect.node), e.dom.elGridRectMarkerMask.appendChild(e.dom.elGridRectMarker.node);
                    var c = e.dom.baseEl.querySelector("defs");
                    c.appendChild(e.dom.elGridRectMask), c.appendChild(e.dom.elForecastMask), c.appendChild(e.dom.elNonForecastMask), c.appendChild(e.dom.elGridRectMarkerMask)
                }
            }, {
                key: "_drawGridLines", value: function (t) {
                    var e = t.i, i = t.x1, a = t.y1, r = t.x2, s = t.y2, n = t.xCount, o = t.parent, l = this.w;
                    if (!(0 === e && l.globals.skipFirstTimelinelabel || e === n - 1 && l.globals.skipLastTimelinelabel && !l.config.xaxis.labels.formatter || "radar" === l.config.chart.type)) {
                        l.config.grid.xaxis.lines.show && this._drawGridLine({
                            i: e,
                            x1: i,
                            y1: a,
                            x2: r,
                            y2: s,
                            xCount: n,
                            parent: o
                        });
                        var c = 0;
                        if (l.globals.hasXaxisGroups && "between" === l.config.xaxis.tickPlacement) {
                            var h = l.globals.groups;
                            if (h) {
                                for (var d = 0, u = 0; d < e && u < h.length; u++) d += h[u].cols;
                                d === e && (c = .6 * l.globals.xAxisLabelsHeight)
                            }
                        }
                        new vt(this.ctx).drawXaxisTicks(i, c, l.globals.dom.elGraphical)
                    }
                }
            }, {
                key: "_drawGridLine", value: function (t) {
                    var e = t.i, i = t.x1, a = t.y1, r = t.x2, s = t.y2, n = t.xCount, o = t.parent, l = this.w, c = !1,
                        h = o.node.classList.contains("apexcharts-gridlines-horizontal"),
                        d = l.config.grid.strokeDashArray, u = l.globals.barPadForNumericAxis;
                    (0 === a && 0 === s || 0 === i && 0 === r) && (c = !0), a === l.globals.gridHeight && s === l.globals.gridHeight && (c = !0), !l.globals.isBarHorizontal || 0 !== e && e !== n - 1 || (c = !0);
                    var f = new g(this).drawLine(i - (h ? u : 0), a, r + (h ? u : 0), s, l.config.grid.borderColor, d);
                    f.node.classList.add("apexcharts-gridline"), c && l.config.grid.show ? this.elGridBorders.add(f) : o.add(f)
                }
            }, {
                key: "_drawGridBandRect", value: function (t) {
                    var e = t.c, i = t.x1, a = t.y1, r = t.x2, s = t.y2, n = t.type, o = this.w, l = new g(this.ctx),
                        c = o.globals.barPadForNumericAxis;
                    if ("column" !== n || "datetime" !== o.config.xaxis.type) {
                        var h = o.config.grid[n].colors[e],
                            d = l.drawRect(i - ("row" === n ? c : 0), a, r + ("row" === n ? 2 * c : 0), s, 0, h, o.config.grid[n].opacity);
                        this.elg.add(d), d.attr("clip-path", "url(#gridRectMask".concat(o.globals.cuid, ")")), d.node.classList.add("apexcharts-grid-".concat(n))
                    }
                }
            }, {
                key: "_drawXYLines", value: function (t) {
                    var e = this, i = t.xCount, a = t.tickAmount, r = this.w;
                    if (r.config.grid.xaxis.lines.show || r.config.xaxis.axisTicks.show) {
                        var s, n = r.globals.padHorizontal, o = r.globals.gridHeight;
                        r.globals.timescaleLabels.length ? function (t) {
                            for (var a = t.xC, r = t.x1, s = t.y1, n = t.x2, o = t.y2, l = 0; l < a; l++) r = e.xaxisLabels[l].position, n = e.xaxisLabels[l].position, e._drawGridLines({
                                i: l,
                                x1: r,
                                y1: s,
                                x2: n,
                                y2: o,
                                xCount: i,
                                parent: e.elgridLinesV
                            })
                        }({
                            xC: i,
                            x1: n,
                            y1: 0,
                            x2: s,
                            y2: o
                        }) : (r.globals.isXNumeric && (i = r.globals.xAxisScale.result.length), function (t) {
                            for (var a = t.xC, s = t.x1, n = t.y1, o = t.x2, l = t.y2, c = 0; c < a + (r.globals.isXNumeric ? 0 : 1); c++) 0 === c && 1 === a && 1 === r.globals.dataPoints && (o = s = r.globals.gridWidth / 2), e._drawGridLines({
                                i: c,
                                x1: s,
                                y1: n,
                                x2: o,
                                y2: l,
                                xCount: i,
                                parent: e.elgridLinesV
                            }), o = s += r.globals.gridWidth / (r.globals.isXNumeric ? a - 1 : a)
                        }({xC: i, x1: n, y1: 0, x2: s, y2: o}))
                    }
                    if (r.config.grid.yaxis.lines.show) {
                        var l = 0, c = 0, h = r.globals.gridWidth, d = a + 1;
                        this.isRangeBar && (d = r.globals.labels.length);
                        for (var u = 0; u < d + (this.isRangeBar ? 1 : 0); u++) this._drawGridLine({
                            i: u,
                            xCount: d + (this.isRangeBar ? 1 : 0),
                            x1: 0,
                            y1: l,
                            x2: h,
                            y2: c,
                            parent: this.elgridLinesH
                        }), c = l += r.globals.gridHeight / (this.isRangeBar ? d : a)
                    }
                }
            }, {
                key: "_drawInvertedXYLines", value: function (t) {
                    var e = t.xCount, i = this.w;
                    if (i.config.grid.xaxis.lines.show || i.config.xaxis.axisTicks.show) for (var a, r = i.globals.padHorizontal, s = i.globals.gridHeight, n = 0; n < e + 1; n++) i.config.grid.xaxis.lines.show && this._drawGridLine({
                        i: n,
                        xCount: e + 1,
                        x1: r,
                        y1: 0,
                        x2: a,
                        y2: s,
                        parent: this.elgridLinesV
                    }), new vt(this.ctx).drawXaxisTicks(r, 0, i.globals.dom.elGraphical), a = r = r + i.globals.gridWidth / e + .3;
                    if (i.config.grid.yaxis.lines.show) for (var o = 0, l = 0, c = i.globals.gridWidth, h = 0; h < i.globals.dataPoints + 1; h++) this._drawGridLine({
                        i: h,
                        xCount: i.globals.dataPoints + 1,
                        x1: 0,
                        y1: o,
                        x2: c,
                        y2: l,
                        parent: this.elgridLinesH
                    }), l = o += i.globals.gridHeight / i.globals.dataPoints
                }
            }, {
                key: "renderGrid", value: function () {
                    var t, e, i, a = this.w, r = new g(this.ctx);
                    this.elg = r.group({class: "apexcharts-grid"}), this.elgridLinesH = r.group({class: "apexcharts-gridlines-horizontal"}), this.elgridLinesV = r.group({class: "apexcharts-gridlines-vertical"}), this.elGridBorders = r.group({class: "apexcharts-grid-borders"}), this.elg.add(this.elgridLinesH), this.elg.add(this.elgridLinesV), a.config.grid.show || (this.elgridLinesV.hide(), this.elgridLinesH.hide(), this.elGridBorders.hide());
                    for (var s, n = a.globals.yAxisScale.length ? a.globals.yAxisScale[0].result.length - 1 : 5, o = 0; o < a.globals.series.length && (void 0 !== a.globals.yAxisScale[o] && (n = a.globals.yAxisScale[o].result.length - 1), !(n > 2)); o++) ;
                    return !a.globals.isBarHorizontal || this.isRangeBar ? (s = this.xaxisLabels.length, this.isRangeBar && (s--, n = a.globals.labels.length, a.config.xaxis.tickAmount && a.config.xaxis.labels.formatter && (s = a.config.xaxis.tickAmount), (null === (t = a.globals.yAxisScale) || void 0 === t || null === (e = t[0]) || void 0 === e || null === (i = e.result) || void 0 === i ? void 0 : i.length) > 0 && "datetime" !== a.config.xaxis.type && (s = a.globals.yAxisScale[0].result.length - 1)), this._drawXYLines({
                        xCount: s,
                        tickAmount: n
                    })) : (s = n, n = a.globals.xTickAmount, this._drawInvertedXYLines({
                        xCount: s,
                        tickAmount: n
                    })), this.drawGridBands(s, n), {
                        el: this.elg,
                        elGridBorders: this.elGridBorders,
                        xAxisTickWidth: a.globals.gridWidth / s
                    }
                }
            }, {
                key: "drawGridBands", value: function (t, e) {
                    var i = this.w;
                    if (void 0 !== i.config.grid.row.colors && i.config.grid.row.colors.length > 0) for (var a = 0, r = i.globals.gridHeight / e, s = i.globals.gridWidth, n = 0, o = 0; n < e; n++, o++) o >= i.config.grid.row.colors.length && (o = 0), this._drawGridBandRect({
                        c: o,
                        x1: 0,
                        y1: a,
                        x2: s,
                        y2: r,
                        type: "row"
                    }), a += i.globals.gridHeight / e;
                    if (void 0 !== i.config.grid.column.colors && i.config.grid.column.colors.length > 0) for (var l = i.globals.isBarHorizontal || "on" !== i.config.xaxis.tickPlacement || "category" !== i.config.xaxis.type && !i.config.xaxis.convertedCatToNumeric ? t : t - 1, c = i.globals.padHorizontal, h = i.globals.padHorizontal + i.globals.gridWidth / l, d = i.globals.gridHeight, u = 0, g = 0; u < t; u++, g++) g >= i.config.grid.column.colors.length && (g = 0), this._drawGridBandRect({
                        c: g,
                        x1: c,
                        y1: 0,
                        x2: h,
                        y2: d,
                        type: "column"
                    }), c += i.globals.gridWidth / l
                }
            }], i && mt(e.prototype, i), t
        }();

        function wt(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var kt = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i;
            return e = t, i = [{
                key: "niceScale", value: function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        s = arguments.length > 4 ? arguments[4] : void 0, n = this.w, o = Math.abs(e - t);
                    if ("dataPoints" === (i = this._adjustTicksForSmallRange(i, a, o)) && (i = n.globals.dataPoints - 1), t === Number.MIN_VALUE && 0 === e || !r.isNumber(t) && !r.isNumber(e) || t === Number.MIN_VALUE && e === -Number.MAX_VALUE) return t = 0, e = i, this.linearScale(t, e, i, a, n.config.yaxis[a].stepSize);
                    t > e ? (console.warn("axis.min cannot be greater than axis.max"), e = t + .1) : t === e && (t = 0 === t ? 0 : t - .5, e = 0 === e ? 2 : e + .5);
                    var l = [];
                    o < 1 && s && ("candlestick" === n.config.chart.type || "candlestick" === n.config.series[a].type || "boxPlot" === n.config.chart.type || "boxPlot" === n.config.series[a].type || n.globals.isRangeData) && (e *= 1.01);
                    var c = i + 1;
                    c < 2 ? c = 2 : c > 2 && (c -= 2);
                    var h = o / c, d = Math.floor(r.log10(h)), u = Math.pow(10, d), g = Math.round(h / u);
                    g < 1 && (g = 1);
                    var f = g * u;
                    n.config.yaxis[a].stepSize && (f = n.config.yaxis[a].stepSize), n.globals.isBarHorizontal && n.config.xaxis.stepSize && "datetime" !== n.config.xaxis.type && (f = n.config.xaxis.stepSize);
                    var p = f * Math.floor(t / f), x = f * Math.ceil(e / f), b = p;
                    if (s && o > 2) {
                        for (; l.push(r.stripNumber(b, 7)), !((b += f) > x);) ;
                        return {result: l, niceMin: l[0], niceMax: l[l.length - 1]}
                    }
                    var v = t;
                    (l = []).push(r.stripNumber(v, 7));
                    for (var m = Math.abs(e - t) / i, y = 0; y <= i; y++) v += m, l.push(v);
                    return l[l.length - 2] >= e && l.pop(), {result: l, niceMin: l[0], niceMax: l[l.length - 1]}
                }
            }, {
                key: "linearScale", value: function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0,
                        s = Math.abs(e - t);
                    "dataPoints" === (i = this._adjustTicksForSmallRange(i, a, s)) && (i = this.w.globals.dataPoints - 1), r || (r = s / i), i === Number.MAX_VALUE && (i = 5, r = 1);
                    for (var n = [], o = t; i >= 0;) n.push(o), o += r, i -= 1;
                    return {result: n, niceMin: n[0], niceMax: n[n.length - 1]}
                }
            }, {
                key: "logarithmicScaleNice", value: function (t, e, i) {
                    e <= 0 && (e = Math.max(t, i)), t <= 0 && (t = Math.min(e, i));
                    for (var a = [], r = Math.ceil(Math.log(e) / Math.log(i) + 1), s = Math.floor(Math.log(t) / Math.log(i)); s < r; s++) a.push(Math.pow(i, s));
                    return {result: a, niceMin: a[0], niceMax: a[a.length - 1]}
                }
            }, {
                key: "logarithmicScale", value: function (t, e, i) {
                    e <= 0 && (e = Math.max(t, i)), t <= 0 && (t = Math.min(e, i));
                    for (var a = [], r = Math.log(e) / Math.log(i), s = Math.log(t) / Math.log(i), n = r - s, o = Math.round(n), l = n / o, c = 0, h = s; c < o; c++, h += l) a.push(Math.pow(i, h));
                    return a.push(Math.pow(i, r)), {result: a, niceMin: t, niceMax: e}
                }
            }, {
                key: "_adjustTicksForSmallRange", value: function (t, e, i) {
                    var a = t;
                    if (void 0 !== e && this.w.config.yaxis[e].labels.formatter && void 0 === this.w.config.yaxis[e].tickAmount) {
                        var s = Number(this.w.config.yaxis[e].labels.formatter(1));
                        r.isNumber(s) && 0 === this.w.globals.yValueDecimal && (a = Math.ceil(i))
                    }
                    return a < t ? a : t
                }
            }, {
                key: "setYScaleForIndex", value: function (t, e, i) {
                    var a = this.w.globals, s = this.w.config, n = a.isBarHorizontal ? s.xaxis : s.yaxis[t];
                    void 0 === a.yAxisScale[t] && (a.yAxisScale[t] = []);
                    var o = Math.abs(i - e);
                    if (n.logarithmic && o <= 5 && (a.invalidLogScale = !0), n.logarithmic && o > 5) a.allSeriesCollapsed = !1, a.yAxisScale[t] = this.logarithmicScale(e, i, n.logBase), a.yAxisScale[t] = n.forceNiceScale ? this.logarithmicScaleNice(e, i, n.logBase) : this.logarithmicScale(e, i, n.logBase); else if (i !== -Number.MAX_VALUE && r.isNumber(i)) if (a.allSeriesCollapsed = !1, void 0 === n.min && void 0 === n.max || n.forceNiceScale) {
                        var l = void 0 === s.yaxis[t].max && void 0 === s.yaxis[t].min || s.yaxis[t].forceNiceScale;
                        a.yAxisScale[t] = this.niceScale(e, i, n.tickAmount ? n.tickAmount : o < 5 && o > 1 ? o + 1 : 5, t, l)
                    } else a.yAxisScale[t] = this.linearScale(e, i, n.tickAmount, t, s.yaxis[t].stepSize); else a.yAxisScale[t] = this.linearScale(0, 5, 5, t, s.yaxis[t].stepSize)
                }
            }, {
                key: "setXScale", value: function (t, e) {
                    var i = this.w, a = i.globals, s = Math.abs(e - t);
                    return e !== -Number.MAX_VALUE && r.isNumber(e) ? a.xAxisScale = this.linearScale(t, e, i.config.xaxis.tickAmount ? i.config.xaxis.tickAmount : s < 5 && s > 1 ? s + 1 : 5, 0, i.config.xaxis.stepSize) : a.xAxisScale = this.linearScale(0, 5, 5), a.xAxisScale
                }
            }, {
                key: "setMultipleYScales", value: function () {
                    var t = this, e = this.w.globals, i = this.w.config, a = e.minYArr.concat([]),
                        r = e.maxYArr.concat([]), s = [];
                    i.yaxis.forEach((function (e, n) {
                        var o = n;
                        i.series.forEach((function (t, i) {
                            t.name === e.seriesName && (o = i, n !== i ? s.push({
                                index: i,
                                similarIndex: n,
                                alreadyExists: !0
                            }) : s.push({index: i}))
                        }));
                        var l = a[o], c = r[o];
                        t.setYScaleForIndex(n, l, c)
                    })), this.sameScaleInMultipleAxes(a, r, s)
                }
            }, {
                key: "sameScaleInMultipleAxes", value: function (t, e, i) {
                    var a = this, r = this.w.config, s = this.w.globals, n = [];
                    i.forEach((function (t) {
                        t.alreadyExists && (void 0 === n[t.index] && (n[t.index] = []), n[t.index].push(t.index), n[t.index].push(t.similarIndex))
                    })), s.yAxisSameScaleIndices = n, n.forEach((function (t, e) {
                        n.forEach((function (i, a) {
                            var r, s;
                            e !== a && (r = t, s = i, r.filter((function (t) {
                                return -1 !== s.indexOf(t)
                            }))).length > 0 && (n[e] = n[e].concat(n[a]))
                        }))
                    }));
                    var o = n.map((function (t) {
                        return t.filter((function (e, i) {
                            return t.indexOf(e) === i
                        }))
                    })).map((function (t) {
                        return t.sort()
                    }));
                    n = n.filter((function (t) {
                        return !!t
                    }));
                    var l = o.slice(), c = l.map((function (t) {
                        return JSON.stringify(t)
                    }));
                    l = l.filter((function (t, e) {
                        return c.indexOf(JSON.stringify(t)) === e
                    }));
                    var h = [], d = [];
                    t.forEach((function (t, i) {
                        l.forEach((function (a, r) {
                            a.indexOf(i) > -1 && (void 0 === h[r] && (h[r] = [], d[r] = []), h[r].push({
                                key: i,
                                value: t
                            }), d[r].push({key: i, value: e[i]}))
                        }))
                    }));
                    var u = Array.apply(null, Array(l.length)).map(Number.prototype.valueOf, Number.MIN_VALUE),
                        g = Array.apply(null, Array(l.length)).map(Number.prototype.valueOf, -Number.MAX_VALUE);
                    h.forEach((function (t, e) {
                        t.forEach((function (t, i) {
                            u[e] = Math.min(t.value, u[e])
                        }))
                    })), d.forEach((function (t, e) {
                        t.forEach((function (t, i) {
                            g[e] = Math.max(t.value, g[e])
                        }))
                    })), t.forEach((function (t, e) {
                        d.forEach((function (t, i) {
                            var n = u[i], o = g[i];
                            r.chart.stacked && (o = 0, t.forEach((function (t, e) {
                                t.value !== -Number.MAX_VALUE && (o += t.value), n !== Number.MIN_VALUE && (n += h[i][e].value)
                            }))), t.forEach((function (i, l) {
                                t[l].key === e && (void 0 !== r.yaxis[e].min && (n = "function" == typeof r.yaxis[e].min ? r.yaxis[e].min(s.minY) : r.yaxis[e].min), void 0 !== r.yaxis[e].max && (o = "function" == typeof r.yaxis[e].max ? r.yaxis[e].max(s.maxY) : r.yaxis[e].max), a.setYScaleForIndex(e, n, o))
                            }))
                        }))
                    }))
                }
            }, {
                key: "autoScaleY", value: function (t, e, i) {
                    t || (t = this);
                    var a = t.w;
                    if (a.globals.isMultipleYAxis || a.globals.collapsedSeries.length) return console.warn("autoScaleYaxis not supported in a multi-yaxis chart."), e;
                    var r = a.globals.seriesX[0], s = a.config.chart.stacked;
                    return e.forEach((function (t, n) {
                        for (var o = 0, l = 0; l < r.length; l++) if (r[l] >= i.xaxis.min) {
                            o = l;
                            break
                        }
                        var c, h, d = a.globals.minYArr[n], u = a.globals.maxYArr[n], g = a.globals.stackedSeriesTotals;
                        a.globals.series.forEach((function (n, l) {
                            var f = n[o];
                            s ? (f = g[o], c = h = f, g.forEach((function (t, e) {
                                r[e] <= i.xaxis.max && r[e] >= i.xaxis.min && (t > h && null !== t && (h = t), n[e] < c && null !== n[e] && (c = n[e]))
                            }))) : (c = h = f, n.forEach((function (t, e) {
                                if (r[e] <= i.xaxis.max && r[e] >= i.xaxis.min) {
                                    var s = t, n = t;
                                    a.globals.series.forEach((function (i, a) {
                                        null !== t && (s = Math.min(i[e], s), n = Math.max(i[e], n))
                                    })), n > h && null !== n && (h = n), s < c && null !== s && (c = s)
                                }
                            }))), void 0 === c && void 0 === h && (c = d, h = u), h *= h < 0 ? .9 : 1.1, 0 == (c *= c < 0 ? 1.1 : .9) && 0 === h && (c = -1, h = 1), h < 0 && h < u && (h = u), c < 0 && c > d && (c = d), e.length > 1 ? (e[l].min = void 0 === t.min ? c : t.min, e[l].max = void 0 === t.max ? h : t.max) : (e[0].min = void 0 === t.min ? c : t.min, e[0].max = void 0 === t.max ? h : t.max)
                        }))
                    })), e
                }
            }], i && wt(e.prototype, i), t
        }();

        function At(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, a = new Array(e); i < e; i++) a[i] = t[i];
            return a
        }

        function St(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        const Ct = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.scales = new kt(e)
            }

            var e, i;
            return e = t, i = [{
                key: "init", value: function () {
                    this.setYRange(), this.setXRange(), this.setZRange()
                }
            }, {
                key: "getMinYMaxY", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -Number.MAX_VALUE,
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, s = this.w.config,
                        n = this.w.globals, o = -Number.MAX_VALUE, l = Number.MIN_VALUE;
                    null === a && (a = t + 1);
                    var c = n.series, h = c, d = c;
                    "candlestick" === s.chart.type ? (h = n.seriesCandleL, d = n.seriesCandleH) : "boxPlot" === s.chart.type ? (h = n.seriesCandleO, d = n.seriesCandleC) : n.isRangeData && (h = n.seriesRangeStart, d = n.seriesRangeEnd);
                    for (var u = t; u < a; u++) {
                        n.dataPoints = Math.max(n.dataPoints, c[u].length), n.categoryLabels.length && (n.dataPoints = n.categoryLabels.filter((function (t) {
                            return void 0 !== t
                        })).length), n.labels.length && "datetime" !== s.xaxis.type && 0 !== n.series.reduce((function (t, e) {
                            return t + e.length
                        }), 0) && (n.dataPoints = Math.max(n.dataPoints, n.labels.length));
                        for (var g = 0; g < n.series[u].length; g++) {
                            var f = c[u][g];
                            null !== f && r.isNumber(f) ? (void 0 !== d[u][g] && (o = Math.max(o, d[u][g]), e = Math.min(e, d[u][g])), void 0 !== h[u][g] && (e = Math.min(e, h[u][g]), i = Math.max(i, h[u][g])), "candlestick" !== this.w.config.chart.type && "boxPlot" !== this.w.config.chart.type && "rangeArea" === this.w.config.chart.type && "rangeBar" === this.w.config.chart.type || ("candlestick" !== this.w.config.chart.type && "boxPlot" !== this.w.config.chart.type || void 0 !== n.seriesCandleC[u][g] && (o = Math.max(o, n.seriesCandleO[u][g]), o = Math.max(o, n.seriesCandleH[u][g]), o = Math.max(o, n.seriesCandleL[u][g]), o = Math.max(o, n.seriesCandleC[u][g]), "boxPlot" === this.w.config.chart.type && (o = Math.max(o, n.seriesCandleM[u][g]))), !s.series[u].type || "candlestick" === s.series[u].type && "boxPlot" === s.series[u].type && "rangeArea" === s.series[u].type && "rangeBar" === s.series[u].type || (o = Math.max(o, n.series[u][g]), e = Math.min(e, n.series[u][g])), i = o), n.seriesGoals[u] && n.seriesGoals[u][g] && Array.isArray(n.seriesGoals[u][g]) && n.seriesGoals[u][g].forEach((function (t) {
                                l !== Number.MIN_VALUE && (l = Math.min(l, t.value), e = l), o = Math.max(o, t.value), i = o
                            })), r.isFloat(f) && (f = r.noExponents(f), n.yValueDecimal = Math.max(n.yValueDecimal, f.toString().split(".")[1].length)), l > h[u][g] && h[u][g] < 0 && (l = h[u][g])) : n.hasNullValues = !0
                        }
                    }
                    return "rangeBar" === s.chart.type && n.seriesRangeStart.length && n.isBarHorizontal && (l = e), "bar" === s.chart.type && (l < 0 && o < 0 && (o = 0), l === Number.MIN_VALUE && (l = 0)), {
                        minY: l,
                        maxY: o,
                        lowestY: e,
                        highestY: i
                    }
                }
            }, {
                key: "setYRange", value: function () {
                    var t = this.w.globals, e = this.w.config;
                    t.maxY = -Number.MAX_VALUE, t.minY = Number.MIN_VALUE;
                    var i = Number.MAX_VALUE;
                    if (t.isMultipleYAxis) for (var a = 0; a < t.series.length; a++) {
                        var r = this.getMinYMaxY(a, i, null, a + 1);
                        t.minYArr.push(r.minY), t.maxYArr.push(r.maxY), i = r.lowestY
                    }
                    var s = this.getMinYMaxY(0, i, null, t.series.length);
                    if (t.minY = s.minY, t.maxY = s.maxY, i = s.lowestY, e.chart.stacked && this._setStackedMinMax(), ("line" === e.chart.type || "area" === e.chart.type || "candlestick" === e.chart.type || "boxPlot" === e.chart.type || "rangeBar" === e.chart.type && !t.isBarHorizontal) && t.minY === Number.MIN_VALUE && i !== -Number.MAX_VALUE && i !== t.maxY) {
                        var n = t.maxY - i;
                        (i >= 0 && i <= 10 || void 0 !== e.yaxis[0].min || void 0 !== e.yaxis[0].max) && (n = 0), t.minY = i - 5 * n / 100, i > 0 && t.minY < 0 && (t.minY = 0), t.maxY = t.maxY + 5 * n / 100
                    }
                    return e.yaxis.forEach((function (e, i) {
                        void 0 !== e.max && ("number" == typeof e.max ? t.maxYArr[i] = e.max : "function" == typeof e.max && (t.maxYArr[i] = e.max(t.isMultipleYAxis ? t.maxYArr[i] : t.maxY)), t.maxY = t.maxYArr[i]), void 0 !== e.min && ("number" == typeof e.min ? t.minYArr[i] = e.min : "function" == typeof e.min && (t.minYArr[i] = e.min(t.isMultipleYAxis ? t.minYArr[i] === Number.MIN_VALUE ? 0 : t.minYArr[i] : t.minY)), t.minY = t.minYArr[i])
                    })), t.isBarHorizontal && ["min", "max"].forEach((function (i) {
                        void 0 !== e.xaxis[i] && "number" == typeof e.xaxis[i] && ("min" === i ? t.minY = e.xaxis[i] : t.maxY = e.xaxis[i])
                    })), t.isMultipleYAxis ? (this.scales.setMultipleYScales(), t.minY = i, t.yAxisScale.forEach((function (e, i) {
                        t.minYArr[i] = e.niceMin, t.maxYArr[i] = e.niceMax
                    }))) : (this.scales.setYScaleForIndex(0, t.minY, t.maxY), t.minY = t.yAxisScale[0].niceMin, t.maxY = t.yAxisScale[0].niceMax, t.minYArr[0] = t.yAxisScale[0].niceMin, t.maxYArr[0] = t.yAxisScale[0].niceMax), {
                        minY: t.minY,
                        maxY: t.maxY,
                        minYArr: t.minYArr,
                        maxYArr: t.maxYArr,
                        yAxisScale: t.yAxisScale
                    }
                }
            }, {
                key: "setXRange", value: function () {
                    var t = this.w.globals, e = this.w.config,
                        i = "numeric" === e.xaxis.type || "datetime" === e.xaxis.type || "category" === e.xaxis.type && !t.noLabelsProvided || t.noLabelsProvided || t.isXNumeric;
                    if (t.isXNumeric && function () {
                        for (var e = 0; e < t.series.length; e++) if (t.labels[e]) for (var i = 0; i < t.labels[e].length; i++) null !== t.labels[e][i] && r.isNumber(t.labels[e][i]) && (t.maxX = Math.max(t.maxX, t.labels[e][i]), t.initialMaxX = Math.max(t.maxX, t.labels[e][i]), t.minX = Math.min(t.minX, t.labels[e][i]), t.initialMinX = Math.min(t.minX, t.labels[e][i]))
                    }(), t.noLabelsProvided && 0 === e.xaxis.categories.length && (t.maxX = t.labels[t.labels.length - 1], t.initialMaxX = t.labels[t.labels.length - 1], t.minX = 1, t.initialMinX = 1), t.isXNumeric || t.noLabelsProvided || t.dataFormatXNumeric) {
                        var a;
                        if (void 0 === e.xaxis.tickAmount ? (a = Math.round(t.svgWidth / 150), "numeric" === e.xaxis.type && t.dataPoints < 30 && (a = t.dataPoints - 1), a > t.dataPoints && 0 !== t.dataPoints && (a = t.dataPoints - 1)) : "dataPoints" === e.xaxis.tickAmount ? (t.series.length > 1 && (a = t.series[t.maxValsInArrayIndex].length - 1), t.isXNumeric && (a = t.maxX - t.minX - 1)) : a = e.xaxis.tickAmount, t.xTickAmount = a, void 0 !== e.xaxis.max && "number" == typeof e.xaxis.max && (t.maxX = e.xaxis.max), void 0 !== e.xaxis.min && "number" == typeof e.xaxis.min && (t.minX = e.xaxis.min), void 0 !== e.xaxis.range && (t.minX = t.maxX - e.xaxis.range), t.minX !== Number.MAX_VALUE && t.maxX !== -Number.MAX_VALUE) if (e.xaxis.convertedCatToNumeric && !t.dataFormatXNumeric) {
                            for (var s = [], n = t.minX - 1; n < t.maxX; n++) s.push(n + 1);
                            t.xAxisScale = {result: s, niceMin: s[0], niceMax: s[s.length - 1]}
                        } else t.xAxisScale = this.scales.setXScale(t.minX, t.maxX); else t.xAxisScale = this.scales.linearScale(0, a, a, 0, e.xaxis.stepSize), t.noLabelsProvided && t.labels.length > 0 && (t.xAxisScale = this.scales.linearScale(1, t.labels.length, a - 1, 0, e.xaxis.stepSize), t.seriesX = t.labels.slice());
                        i && (t.labels = t.xAxisScale.result.slice())
                    }
                    return t.isBarHorizontal && t.labels.length && (t.xTickAmount = t.labels.length), this._handleSingleDataPoint(), this._getMinXDiff(), {
                        minX: t.minX,
                        maxX: t.maxX
                    }
                }
            }, {
                key: "setZRange", value: function () {
                    var t = this.w.globals;
                    if (t.isDataXYZ) for (var e = 0; e < t.series.length; e++) if (void 0 !== t.seriesZ[e]) for (var i = 0; i < t.seriesZ[e].length; i++) null !== t.seriesZ[e][i] && r.isNumber(t.seriesZ[e][i]) && (t.maxZ = Math.max(t.maxZ, t.seriesZ[e][i]), t.minZ = Math.min(t.minZ, t.seriesZ[e][i]))
                }
            }, {
                key: "_handleSingleDataPoint", value: function () {
                    var t = this.w.globals, e = this.w.config;
                    if (t.minX === t.maxX) {
                        var i = new M(this.ctx);
                        if ("datetime" === e.xaxis.type) {
                            var a = i.getDate(t.minX);
                            e.xaxis.labels.datetimeUTC ? a.setUTCDate(a.getUTCDate() - 2) : a.setDate(a.getDate() - 2), t.minX = new Date(a).getTime();
                            var r = i.getDate(t.maxX);
                            e.xaxis.labels.datetimeUTC ? r.setUTCDate(r.getUTCDate() + 2) : r.setDate(r.getDate() + 2), t.maxX = new Date(r).getTime()
                        } else ("numeric" === e.xaxis.type || "category" === e.xaxis.type && !t.noLabelsProvided) && (t.minX = t.minX - 2, t.initialMinX = t.minX, t.maxX = t.maxX + 2, t.initialMaxX = t.maxX)
                    }
                }
            }, {
                key: "_getMinXDiff", value: function () {
                    var t = this.w.globals;
                    t.isXNumeric && t.seriesX.forEach((function (e, i) {
                        1 === e.length && e.push(t.seriesX[t.maxValsInArrayIndex][t.seriesX[t.maxValsInArrayIndex].length - 1]);
                        var a = e.slice();
                        a.sort((function (t, e) {
                            return t - e
                        })), a.forEach((function (e, i) {
                            if (i > 0) {
                                var r = e - a[i - 1];
                                r > 0 && (t.minXDiff = Math.min(r, t.minXDiff))
                            }
                        })), 1 !== t.dataPoints && t.minXDiff !== Number.MAX_VALUE || (t.minXDiff = .5)
                    }))
                }
            }, {
                key: "_setStackedMinMax", value: function () {
                    var t = this, e = this.w.globals;
                    if (e.series.length) {
                        var i = e.seriesGroups;
                        i.length || (i = [this.w.config.series.map((function (t) {
                            return t.name
                        }))]);
                        var a = {}, s = {};
                        i.forEach((function (i) {
                            a[i] = [], s[i] = [], t.w.config.series.map((function (t, e) {
                                return i.indexOf(t.name) > -1 ? e : null
                            })).filter((function (t) {
                                return null !== t
                            })).forEach((function (n) {
                                for (var o = 0; o < e.series[e.maxValsInArrayIndex].length; o++) {
                                    var l, c;
                                    void 0 === a[i][o] && (a[i][o] = 0, s[i][o] = 0), (t.w.config.chart.stacked && !e.comboCharts || t.w.config.chart.stacked && e.comboCharts && (!t.w.config.chart.stackOnlyBar || "bar" === (null === (l = t.w.config.series) || void 0 === l || null === (c = l[n]) || void 0 === c ? void 0 : c.type))) && null !== e.series[n][o] && r.isNumber(e.series[n][o]) && (e.series[n][o] > 0 ? a[i][o] += parseFloat(e.series[n][o]) + 1e-4 : s[i][o] += parseFloat(e.series[n][o]))
                                }
                            }))
                        })), Object.entries(a).forEach((function (t) {
                            var i, r, n = (i = t, r = 1, function (t) {
                                if (Array.isArray(t)) return t
                            }(i) || function (t, e) {
                                var i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                if (null != i) {
                                    var a, r, s = [], n = !0, o = !1;
                                    try {
                                        for (i = i.call(t); !(n = (a = i.next()).done) && (s.push(a.value), !e || s.length !== e); n = !0) ;
                                    } catch (t) {
                                        o = !0, r = t
                                    } finally {
                                        try {
                                            n || null == i.return || i.return()
                                        } finally {
                                            if (o) throw r
                                        }
                                    }
                                    return s
                                }
                            }(i, r) || function (t, e) {
                                if (t) {
                                    if ("string" == typeof t) return At(t, e);
                                    var i = Object.prototype.toString.call(t).slice(8, -1);
                                    return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? At(t, e) : void 0
                                }
                            }(i, r) || function () {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }())[0];
                            a[n].forEach((function (t, i) {
                                e.maxY = Math.max(e.maxY, a[n][i]), e.minY = Math.min(e.minY, s[n][i])
                            }))
                        }))
                    }
                }
            }], i && St(e.prototype, i), t
        }();

        function Pt(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Lt = function () {
            function t(e, i) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.elgrid = i, this.w = e.w;
                var a = this.w;
                this.xaxisFontSize = a.config.xaxis.labels.style.fontSize, this.axisFontFamily = a.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = a.config.xaxis.labels.style.colors, this.isCategoryBarHorizontal = "bar" === a.config.chart.type && a.config.plotOptions.bar.horizontal, this.xAxisoffX = 0, "bottom" === a.config.xaxis.position && (this.xAxisoffX = a.globals.gridHeight), this.drawnLabels = [], this.axesUtils = new ut(e)
            }

            var e, i;
            return e = t, (i = [{
                key: "drawYaxis", value: function (t) {
                    var e = this, i = this.w, a = new g(this.ctx), r = i.config.yaxis[t].labels.style, s = r.fontSize,
                        n = r.fontFamily, o = r.fontWeight, l = a.group({
                            class: "apexcharts-yaxis",
                            rel: t,
                            transform: "translate(" + i.globals.translateYAxisX[t] + ", 0)"
                        });
                    if (this.axesUtils.isYAxisHidden(t)) return l;
                    var c = a.group({class: "apexcharts-yaxis-texts-g"});
                    l.add(c);
                    var h = i.globals.yAxisScale[t].result.length - 1, d = i.globals.gridHeight / h,
                        u = i.globals.translateY, f = i.globals.yLabelFormatters[t],
                        p = i.globals.yAxisScale[t].result.slice();
                    p = this.axesUtils.checkForReversedLabels(t, p);
                    var x = "";
                    if (i.config.yaxis[t].labels.show) for (var b = function (l) {
                        var g = p[l];
                        g = f(g, l, i);
                        var b = i.config.yaxis[t].labels.padding;
                        i.config.yaxis[t].opposite && 0 !== i.config.yaxis.length && (b *= -1);
                        var v = "end";
                        i.config.yaxis[t].opposite && (v = "start"), "left" === i.config.yaxis[t].labels.align ? v = "start" : "center" === i.config.yaxis[t].labels.align ? v = "middle" : "right" === i.config.yaxis[t].labels.align && (v = "end");
                        var m = e.axesUtils.getYAxisForeColor(r.colors, t), y = i.config.yaxis[t].labels.offsetY;
                        "heatmap" === i.config.chart.type && (y -= (i.globals.gridHeight / i.globals.series.length - 1) / 2);
                        var w = a.drawText({
                            x: b,
                            y: u + h / 10 + y + 1,
                            text: g,
                            textAnchor: v,
                            fontSize: s,
                            fontFamily: n,
                            fontWeight: o,
                            maxWidth: i.config.yaxis[t].labels.maxWidth,
                            foreColor: Array.isArray(m) ? m[l] : m,
                            isPlainText: !1,
                            cssClass: "apexcharts-yaxis-label " + r.cssClass
                        });
                        l === h && (x = w), c.add(w);
                        var k = document.createElementNS(i.globals.SVGNS, "title");
                        if (k.textContent = Array.isArray(g) ? g.join(" ") : g, w.node.appendChild(k), 0 !== i.config.yaxis[t].labels.rotate) {
                            var A = a.rotateAroundCenter(x.node), S = a.rotateAroundCenter(w.node);
                            w.node.setAttribute("transform", "rotate(".concat(i.config.yaxis[t].labels.rotate, " ").concat(A.x, " ").concat(S.y, ")"))
                        }
                        u += d
                    }, v = h; v >= 0; v--) b(v);
                    if (void 0 !== i.config.yaxis[t].title.text) {
                        var m = a.group({class: "apexcharts-yaxis-title"}), y = 0;
                        i.config.yaxis[t].opposite && (y = i.globals.translateYAxisX[t]);
                        var w = a.drawText({
                            x: y,
                            y: i.globals.gridHeight / 2 + i.globals.translateY + i.config.yaxis[t].title.offsetY,
                            text: i.config.yaxis[t].title.text,
                            textAnchor: "end",
                            foreColor: i.config.yaxis[t].title.style.color,
                            fontSize: i.config.yaxis[t].title.style.fontSize,
                            fontWeight: i.config.yaxis[t].title.style.fontWeight,
                            fontFamily: i.config.yaxis[t].title.style.fontFamily,
                            cssClass: "apexcharts-yaxis-title-text " + i.config.yaxis[t].title.style.cssClass
                        });
                        m.add(w), l.add(m)
                    }
                    var k = i.config.yaxis[t].axisBorder, A = 31 + k.offsetX;
                    if (i.config.yaxis[t].opposite && (A = -31 - k.offsetX), k.show) {
                        var S = a.drawLine(A, i.globals.translateY + k.offsetY - 2, A, i.globals.gridHeight + i.globals.translateY + k.offsetY + 2, k.color, 0, k.width);
                        l.add(S)
                    }
                    return i.config.yaxis[t].axisTicks.show && this.axesUtils.drawYAxisTicks(A, h, k, i.config.yaxis[t].axisTicks, t, d, l), l
                }
            }, {
                key: "drawYaxisInversed", value: function (t) {
                    var e = this.w, i = new g(this.ctx),
                        a = i.group({class: "apexcharts-xaxis apexcharts-yaxis-inversed"}), r = i.group({
                            class: "apexcharts-xaxis-texts-g",
                            transform: "translate(".concat(e.globals.translateXAxisX, ", ").concat(e.globals.translateXAxisY, ")")
                        });
                    a.add(r);
                    var s = e.globals.yAxisScale[t].result.length - 1, n = e.globals.gridWidth / s + .1,
                        o = n + e.config.xaxis.labels.offsetX, l = e.globals.xLabelFormatter,
                        c = e.globals.yAxisScale[t].result.slice(), h = e.globals.timescaleLabels;
                    h.length > 0 && (this.xaxisLabels = h.slice(), s = (c = h.slice()).length), c = this.axesUtils.checkForReversedLabels(t, c);
                    var d = h.length;
                    if (e.config.xaxis.labels.show) for (var u = d ? 0 : s; d ? u < d : u >= 0; d ? u++ : u--) {
                        var f = c[u];
                        f = l(f, u, e);
                        var p = e.globals.gridWidth + e.globals.padHorizontal - (o - n + e.config.xaxis.labels.offsetX);
                        if (h.length) {
                            var x = this.axesUtils.getLabel(c, h, p, u, this.drawnLabels, this.xaxisFontSize);
                            p = x.x, f = x.text, this.drawnLabels.push(x.text), 0 === u && e.globals.skipFirstTimelinelabel && (f = ""), u === c.length - 1 && e.globals.skipLastTimelinelabel && (f = "")
                        }
                        var b = i.drawText({
                            x: p,
                            y: this.xAxisoffX + e.config.xaxis.labels.offsetY + 30 - ("top" === e.config.xaxis.position ? e.globals.xAxisHeight + e.config.xaxis.axisTicks.height - 2 : 0),
                            text: f,
                            textAnchor: "middle",
                            foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[t] : this.xaxisForeColors,
                            fontSize: this.xaxisFontSize,
                            fontFamily: this.xaxisFontFamily,
                            fontWeight: e.config.xaxis.labels.style.fontWeight,
                            isPlainText: !1,
                            cssClass: "apexcharts-xaxis-label " + e.config.xaxis.labels.style.cssClass
                        });
                        r.add(b), b.tspan(f);
                        var v = document.createElementNS(e.globals.SVGNS, "title");
                        v.textContent = f, b.node.appendChild(v), o += n
                    }
                    return this.inversedYAxisTitleText(a), this.inversedYAxisBorder(a), a
                }
            }, {
                key: "inversedYAxisBorder", value: function (t) {
                    var e = this.w, i = new g(this.ctx), a = e.config.xaxis.axisBorder;
                    if (a.show) {
                        var r = 0;
                        "bar" === e.config.chart.type && e.globals.isXNumeric && (r -= 15);
                        var s = i.drawLine(e.globals.padHorizontal + r + a.offsetX, this.xAxisoffX, e.globals.gridWidth, this.xAxisoffX, a.color, 0, a.height);
                        this.elgrid && this.elgrid.elGridBorders && e.config.grid.show ? this.elgrid.elGridBorders.add(s) : t.add(s)
                    }
                }
            }, {
                key: "inversedYAxisTitleText", value: function (t) {
                    var e = this.w, i = new g(this.ctx);
                    if (void 0 !== e.config.xaxis.title.text) {
                        var a = i.group({class: "apexcharts-xaxis-title apexcharts-yaxis-title-inversed"}),
                            r = i.drawText({
                                x: e.globals.gridWidth / 2 + e.config.xaxis.title.offsetX,
                                y: this.xAxisoffX + parseFloat(this.xaxisFontSize) + parseFloat(e.config.xaxis.title.style.fontSize) + e.config.xaxis.title.offsetY + 20,
                                text: e.config.xaxis.title.text,
                                textAnchor: "middle",
                                fontSize: e.config.xaxis.title.style.fontSize,
                                fontFamily: e.config.xaxis.title.style.fontFamily,
                                fontWeight: e.config.xaxis.title.style.fontWeight,
                                foreColor: e.config.xaxis.title.style.color,
                                cssClass: "apexcharts-xaxis-title-text " + e.config.xaxis.title.style.cssClass
                            });
                        a.add(r), t.add(a)
                    }
                }
            }, {
                key: "yAxisTitleRotate", value: function (t, e) {
                    var i = this.w, a = new g(this.ctx), r = {width: 0, height: 0}, s = {width: 0, height: 0},
                        n = i.globals.dom.baseEl.querySelector(" .apexcharts-yaxis[rel='".concat(t, "'] .apexcharts-yaxis-texts-g"));
                    null !== n && (r = n.getBoundingClientRect());
                    var o = i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t, "'] .apexcharts-yaxis-title text"));
                    if (null !== o && (s = o.getBoundingClientRect()), null !== o) {
                        var l = this.xPaddingForYAxisTitle(t, r, s, e);
                        o.setAttribute("x", l.xPos - (e ? 10 : 0))
                    }
                    if (null !== o) {
                        var c = a.rotateAroundCenter(o);
                        o.setAttribute("transform", "rotate(".concat(e ? -1 * i.config.yaxis[t].title.rotate : i.config.yaxis[t].title.rotate, " ").concat(c.x, " ").concat(c.y, ")"))
                    }
                }
            }, {
                key: "xPaddingForYAxisTitle", value: function (t, e, i, a) {
                    var r = this.w, s = 0, n = 0, o = 10;
                    return void 0 === r.config.yaxis[t].title.text || t < 0 ? {
                        xPos: n,
                        padd: 0
                    } : (a ? (n = e.width + r.config.yaxis[t].title.offsetX + i.width / 2 + o / 2, 0 === (s += 1) && (n -= o / 2)) : (n = -1 * e.width + r.config.yaxis[t].title.offsetX + o / 2 + i.width / 2, r.globals.isBarHorizontal && (o = 25, n = -1 * e.width - r.config.yaxis[t].title.offsetX - o)), {
                        xPos: n,
                        padd: o
                    })
                }
            }, {
                key: "setYAxisXPosition", value: function (t, e) {
                    var i = this.w, a = 0, r = 0, s = 18, n = 1;
                    i.config.yaxis.length > 1 && (this.multipleYs = !0), i.config.yaxis.map((function (o, l) {
                        var c = i.globals.ignoreYAxisIndexes.indexOf(l) > -1 || !o.show || o.floating || 0 === t[l].width,
                            h = t[l].width + e[l].width;
                        o.opposite ? i.globals.isBarHorizontal ? (r = i.globals.gridWidth + i.globals.translateX - 1, i.globals.translateYAxisX[l] = r - o.labels.offsetX) : (r = i.globals.gridWidth + i.globals.translateX + n, c || (n = n + h + 20), i.globals.translateYAxisX[l] = r - o.labels.offsetX + 20) : (a = i.globals.translateX - s, c || (s = s + h + 20), i.globals.translateYAxisX[l] = a + o.labels.offsetX)
                    }))
                }
            }, {
                key: "setYAxisTextAlignments", value: function () {
                    var t = this.w, e = t.globals.dom.baseEl.getElementsByClassName("apexcharts-yaxis");
                    (e = r.listToArray(e)).forEach((function (e, i) {
                        var a = t.config.yaxis[i];
                        if (a && !a.floating && void 0 !== a.labels.align) {
                            var s = t.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(i, "'] .apexcharts-yaxis-texts-g")),
                                n = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(i, "'] .apexcharts-yaxis-label"));
                            n = r.listToArray(n);
                            var o = s.getBoundingClientRect();
                            "left" === a.labels.align ? (n.forEach((function (t, e) {
                                t.setAttribute("text-anchor", "start")
                            })), a.opposite || s.setAttribute("transform", "translate(-".concat(o.width, ", 0)"))) : "center" === a.labels.align ? (n.forEach((function (t, e) {
                                t.setAttribute("text-anchor", "middle")
                            })), s.setAttribute("transform", "translate(".concat(o.width / 2 * (a.opposite ? 1 : -1), ", 0)"))) : "right" === a.labels.align && (n.forEach((function (t, e) {
                                t.setAttribute("text-anchor", "end")
                            })), a.opposite && s.setAttribute("transform", "translate(".concat(o.width, ", 0)")))
                        }
                    }))
                }
            }]) && Pt(e.prototype, i), t
        }();

        function Ot(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Tt = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.documentEvent = r.bind(this.documentEvent, this)
            }

            var e, i;
            return e = t, (i = [{
                key: "addEventListener", value: function (t, e) {
                    var i = this.w;
                    i.globals.events.hasOwnProperty(t) ? i.globals.events[t].push(e) : i.globals.events[t] = [e]
                }
            }, {
                key: "removeEventListener", value: function (t, e) {
                    var i = this.w;
                    if (i.globals.events.hasOwnProperty(t)) {
                        var a = i.globals.events[t].indexOf(e);
                        -1 !== a && i.globals.events[t].splice(a, 1)
                    }
                }
            }, {
                key: "fireEvent", value: function (t, e) {
                    var i = this.w;
                    if (i.globals.events.hasOwnProperty(t)) {
                        e && e.length || (e = []);
                        for (var a = i.globals.events[t], r = a.length, s = 0; s < r; s++) a[s].apply(null, e)
                    }
                }
            }, {
                key: "setupEventHandlers", value: function () {
                    var t = this, e = this.w, i = this.ctx,
                        a = e.globals.dom.baseEl.querySelector(e.globals.chartClass);
                    this.ctx.eventList.forEach((function (t) {
                        a.addEventListener(t, (function (t) {
                            var a = Object.assign({}, e, {
                                seriesIndex: e.globals.capturedSeriesIndex,
                                dataPointIndex: e.globals.capturedDataPointIndex
                            });
                            "mousemove" === t.type || "touchmove" === t.type ? "function" == typeof e.config.chart.events.mouseMove && e.config.chart.events.mouseMove(t, i, a) : "mouseleave" === t.type || "touchleave" === t.type ? "function" == typeof e.config.chart.events.mouseLeave && e.config.chart.events.mouseLeave(t, i, a) : ("mouseup" === t.type && 1 === t.which || "touchend" === t.type) && ("function" == typeof e.config.chart.events.click && e.config.chart.events.click(t, i, a), i.ctx.events.fireEvent("click", [t, i, a]))
                        }), {capture: !1, passive: !0})
                    })), this.ctx.eventList.forEach((function (i) {
                        e.globals.dom.baseEl.addEventListener(i, t.documentEvent, {passive: !0})
                    })), this.ctx.core.setupBrushHandler()
                }
            }, {
                key: "documentEvent", value: function (t) {
                    var e = this.w, i = t.target.className;
                    if ("click" === t.type) {
                        var a = e.globals.dom.baseEl.querySelector(".apexcharts-menu");
                        a && a.classList.contains("apexcharts-menu-open") && "apexcharts-menu-icon" !== i && a.classList.remove("apexcharts-menu-open")
                    }
                    e.globals.clientX = "touchmove" === t.type ? t.touches[0].clientX : t.clientX, e.globals.clientY = "touchmove" === t.type ? t.touches[0].clientY : t.clientY
                }
            }]) && Ot(e.prototype, i), t
        }();

        function It(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Et = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i;
            return e = t, (i = [{
                key: "setCurrentLocaleValues", value: function (t) {
                    var e = this.w.config.chart.locales;
                    window.Apex.chart && window.Apex.chart.locales && window.Apex.chart.locales.length > 0 && (e = this.w.config.chart.locales.concat(window.Apex.chart.locales));
                    var i = e.filter((function (e) {
                        return e.name === t
                    }))[0];
                    if (!i) throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");
                    var a = r.extend(S, i);
                    this.w.globals.locale = a.options
                }
            }]) && It(e.prototype, i), t
        }();

        function Mt(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var zt = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i;
            return e = t, (i = [{
                key: "drawAxis", value: function (t, e) {
                    var i, a, r = this, s = this.w.globals, n = this.w.config, o = new vt(this.ctx, e),
                        l = new Lt(this.ctx, e);
                    s.axisCharts && "radar" !== t && (s.isBarHorizontal ? (a = l.drawYaxisInversed(0), i = o.drawXaxisInversed(0), s.dom.elGraphical.add(i), s.dom.elGraphical.add(a)) : (i = o.drawXaxis(), s.dom.elGraphical.add(i), n.yaxis.map((function (t, e) {
                        if (-1 === s.ignoreYAxisIndexes.indexOf(e) && (a = l.drawYaxis(e), s.dom.Paper.add(a), "back" === r.w.config.grid.position)) {
                            var i = s.dom.Paper.children()[1];
                            i.remove(), s.dom.Paper.add(i)
                        }
                    }))))
                }
            }]) && Mt(e.prototype, i), t
        }();

        function Xt(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        const Yt = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i;
            return e = t, (i = [{
                key: "drawXCrosshairs", value: function () {
                    var t = this.w, e = new g(this.ctx), i = new l(this.ctx),
                        a = t.config.xaxis.crosshairs.fill.gradient, s = t.config.xaxis.crosshairs.dropShadow,
                        n = t.config.xaxis.crosshairs.fill.type, o = a.colorFrom, c = a.colorTo, h = a.opacityFrom,
                        d = a.opacityTo, u = a.stops, f = s.enabled, p = s.left, x = s.top, b = s.blur, v = s.color,
                        m = s.opacity, y = t.config.xaxis.crosshairs.fill.color;
                    if (t.config.xaxis.crosshairs.show) {
                        "gradient" === n && (y = e.drawGradient("vertical", o, c, h, d, null, u, null));
                        var w = e.drawRect();
                        1 === t.config.xaxis.crosshairs.width && (w = e.drawLine());
                        var k = t.globals.gridHeight;
                        (!r.isNumber(k) || k < 0) && (k = 0);
                        var A = t.config.xaxis.crosshairs.width;
                        (!r.isNumber(A) || A < 0) && (A = 0), w.attr({
                            class: "apexcharts-xcrosshairs",
                            x: 0,
                            y: 0,
                            y2: k,
                            width: A,
                            height: k,
                            fill: y,
                            filter: "none",
                            "fill-opacity": t.config.xaxis.crosshairs.opacity,
                            stroke: t.config.xaxis.crosshairs.stroke.color,
                            "stroke-width": t.config.xaxis.crosshairs.stroke.width,
                            "stroke-dasharray": t.config.xaxis.crosshairs.stroke.dashArray
                        }), f && (w = i.dropShadow(w, {
                            left: p,
                            top: x,
                            blur: b,
                            color: v,
                            opacity: m
                        })), t.globals.dom.elGraphical.add(w)
                    }
                }
            }, {
                key: "drawYCrosshairs", value: function () {
                    var t = this.w, e = new g(this.ctx), i = t.config.yaxis[0].crosshairs,
                        a = t.globals.barPadForNumericAxis;
                    if (t.config.yaxis[0].crosshairs.show) {
                        var r = e.drawLine(-a, 0, t.globals.gridWidth + a, 0, i.stroke.color, i.stroke.dashArray, i.stroke.width);
                        r.attr({class: "apexcharts-ycrosshairs"}), t.globals.dom.elGraphical.add(r)
                    }
                    var s = e.drawLine(-a, 0, t.globals.gridWidth + a, 0, i.stroke.color, 0, 0);
                    s.attr({class: "apexcharts-ycrosshairs-hidden"}), t.globals.dom.elGraphical.add(s)
                }
            }]) && Xt(e.prototype, i), t
        }();

        function Rt(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Ft = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i;
            return e = t, i = [{
                key: "checkResponsiveConfig", value: function (t) {
                    var e = this, i = this.w, a = i.config;
                    if (0 !== a.responsive.length) {
                        var s = a.responsive.slice();
                        s.sort((function (t, e) {
                            return t.breakpoint > e.breakpoint ? 1 : e.breakpoint > t.breakpoint ? -1 : 0
                        })).reverse();
                        var n = new G({}), o = function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                a = s[0].breakpoint, o = window.innerWidth > 0 ? window.innerWidth : screen.width;
                            if (o > a) {
                                var l = p.extendArrayProps(n, i.globals.initialConfig, i);
                                t = r.extend(l, t), t = r.extend(i.config, t), e.overrideResponsiveOptions(t)
                            } else for (var c = 0; c < s.length; c++) o < s[c].breakpoint && (t = p.extendArrayProps(n, s[c].options, i), t = r.extend(i.config, t), e.overrideResponsiveOptions(t))
                        };
                        if (t) {
                            var l = p.extendArrayProps(n, t, i);
                            l = r.extend(i.config, l), o(l = r.extend(l, t))
                        } else o({})
                    }
                }
            }, {
                key: "overrideResponsiveOptions", value: function (t) {
                    var e = new G(t).init({responsiveOverride: !0});
                    this.w.config = e
                }
            }], i && Rt(e.prototype, i), t
        }();

        function Dt(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Ht = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.colors = [], this.w = e.w;
                var i = this.w;
                this.isColorFn = !1, this.isHeatmapDistributed = "treemap" === i.config.chart.type && i.config.plotOptions.treemap.distributed || "heatmap" === i.config.chart.type && i.config.plotOptions.heatmap.distributed, this.isBarDistributed = i.config.plotOptions.bar.distributed && ("bar" === i.config.chart.type || "rangeBar" === i.config.chart.type)
            }

            var e, i;
            return e = t, i = [{
                key: "init", value: function () {
                    this.setDefaultColors()
                }
            }, {
                key: "setDefaultColors", value: function () {
                    var t, e = this, i = this.w, a = new r;
                    if (i.globals.dom.elWrap.classList.add("apexcharts-theme-".concat(i.config.theme.mode)), void 0 === i.config.colors || 0 === (null === (t = i.config.colors) || void 0 === t ? void 0 : t.length) ? i.globals.colors = this.predefined() : (i.globals.colors = i.config.colors, Array.isArray(i.config.colors) && i.config.colors.length > 0 && "function" == typeof i.config.colors[0] && (i.globals.colors = i.config.series.map((function (t, a) {
                        var r = i.config.colors[a];
                        return r || (r = i.config.colors[0]), "function" == typeof r ? (e.isColorFn = !0, r({
                            value: i.globals.axisCharts ? i.globals.series[a][0] ? i.globals.series[a][0] : 0 : i.globals.series[a],
                            seriesIndex: a,
                            dataPointIndex: a,
                            w: i
                        })) : r
                    })))), i.globals.seriesColors.map((function (t, e) {
                        t && (i.globals.colors[e] = t)
                    })), i.config.theme.monochrome.enabled) {
                        var s = [], n = i.globals.series.length;
                        (this.isBarDistributed || this.isHeatmapDistributed) && (n = i.globals.series[0].length * i.globals.series.length);
                        for (var o = i.config.theme.monochrome.color, l = 1 / (n / i.config.theme.monochrome.shadeIntensity), c = i.config.theme.monochrome.shadeTo, h = 0, d = 0; d < n; d++) {
                            var u = void 0;
                            "dark" === c ? (u = a.shadeColor(-1 * h, o), h += l) : (u = a.shadeColor(h, o), h += l), s.push(u)
                        }
                        i.globals.colors = s.slice()
                    }
                    var g = i.globals.colors.slice();
                    this.pushExtraColors(i.globals.colors), ["fill", "stroke"].forEach((function (t) {
                        void 0 === i.config[t].colors ? i.globals[t].colors = e.isColorFn ? i.config.colors : g : i.globals[t].colors = i.config[t].colors.slice(), e.pushExtraColors(i.globals[t].colors)
                    })), void 0 === i.config.dataLabels.style.colors ? i.globals.dataLabels.style.colors = g : i.globals.dataLabels.style.colors = i.config.dataLabels.style.colors.slice(), this.pushExtraColors(i.globals.dataLabels.style.colors, 50), void 0 === i.config.plotOptions.radar.polygons.fill.colors ? i.globals.radarPolygons.fill.colors = ["dark" === i.config.theme.mode ? "#424242" : "none"] : i.globals.radarPolygons.fill.colors = i.config.plotOptions.radar.polygons.fill.colors.slice(), this.pushExtraColors(i.globals.radarPolygons.fill.colors, 20), void 0 === i.config.markers.colors ? i.globals.markers.colors = g : i.globals.markers.colors = i.config.markers.colors.slice(), this.pushExtraColors(i.globals.markers.colors)
                }
            }, {
                key: "pushExtraColors", value: function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a = this.w,
                        r = e || a.globals.series.length;
                    if (null === i && (i = this.isBarDistributed || this.isHeatmapDistributed || "heatmap" === a.config.chart.type && a.config.plotOptions.heatmap.colorScale.inverse), i && a.globals.series.length && (r = a.globals.series[a.globals.maxValsInArrayIndex].length * a.globals.series.length), t.length < r) for (var s = r - t.length, n = 0; n < s; n++) t.push(t[n])
                }
            }, {
                key: "updateThemeOptions", value: function (t) {
                    t.chart = t.chart || {}, t.tooltip = t.tooltip || {};
                    var e = t.theme.mode || "light",
                        i = t.theme.palette ? t.theme.palette : "dark" === e ? "palette4" : "palette1",
                        a = t.chart.foreColor ? t.chart.foreColor : "dark" === e ? "#f6f7f8" : "#373d3f";
                    return t.tooltip.theme = e, t.chart.foreColor = a, t.theme.palette = i, t
                }
            }, {
                key: "predefined", value: function () {
                    switch (this.w.config.theme.palette) {
                        case"palette1":
                        default:
                            this.colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"];
                            break;
                        case"palette2":
                            this.colors = ["#3f51b5", "#03a9f4", "#4caf50", "#f9ce1d", "#FF9800"];
                            break;
                        case"palette3":
                            this.colors = ["#33b2df", "#546E7A", "#d4526e", "#13d8aa", "#A5978B"];
                            break;
                        case"palette4":
                            this.colors = ["#4ecdc4", "#c7f464", "#81D4FA", "#fd6a6a", "#546E7A"];
                            break;
                        case"palette5":
                            this.colors = ["#2b908f", "#f9a3a4", "#90ee7e", "#fa4443", "#69d2e7"];
                            break;
                        case"palette6":
                            this.colors = ["#449DD1", "#F86624", "#EA3546", "#662E9B", "#C5D86D"];
                            break;
                        case"palette7":
                            this.colors = ["#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"];
                            break;
                        case"palette8":
                            this.colors = ["#662E9B", "#F86624", "#F9C80E", "#EA3546", "#43BCCD"];
                            break;
                        case"palette9":
                            this.colors = ["#5C4742", "#A5978B", "#8D5B4C", "#5A2A27", "#C4BBAF"];
                            break;
                        case"palette10":
                            this.colors = ["#A300D6", "#7D02EB", "#5653FE", "#2983FF", "#00B1F2"]
                    }
                    return this.colors
                }
            }], i && Dt(e.prototype, i), t
        }();

        function Nt(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Wt = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i;
            return e = t, (i = [{
                key: "draw", value: function () {
                    this.drawTitleSubtitle("title"), this.drawTitleSubtitle("subtitle")
                }
            }, {
                key: "drawTitleSubtitle", value: function (t) {
                    var e = this.w, i = "title" === t ? e.config.title : e.config.subtitle, a = e.globals.svgWidth / 2,
                        r = i.offsetY, s = "middle";
                    if ("left" === i.align ? (a = 10, s = "start") : "right" === i.align && (a = e.globals.svgWidth - 10, s = "end"), a += i.offsetX, r = r + parseInt(i.style.fontSize, 10) + i.margin / 2, void 0 !== i.text) {
                        var n = new g(this.ctx).drawText({
                            x: a,
                            y: r,
                            text: i.text,
                            textAnchor: s,
                            fontSize: i.style.fontSize,
                            fontFamily: i.style.fontFamily,
                            fontWeight: i.style.fontWeight,
                            foreColor: i.style.color,
                            opacity: 1
                        });
                        n.node.setAttribute("class", "apexcharts-".concat(t, "-text")), e.globals.dom.Paper.add(n)
                    }
                }
            }]) && Nt(e.prototype, i), t
        }();

        function jt(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, a = new Array(e); i < e; i++) a[i] = t[i];
            return a
        }

        function Bt(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Gt = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.w = e.w, this.dCtx = e
            }

            var e, i;
            return e = t, (i = [{
                key: "getTitleSubtitleCoords", value: function (t) {
                    var e = this.w, i = 0, a = 0,
                        r = "title" === t ? e.config.title.floating : e.config.subtitle.floating,
                        s = e.globals.dom.baseEl.querySelector(".apexcharts-".concat(t, "-text"));
                    if (null !== s && !r) {
                        var n = s.getBoundingClientRect();
                        i = n.width, a = e.globals.axisCharts ? n.height + 5 : n.height
                    }
                    return {width: i, height: a}
                }
            }, {
                key: "getLegendsRect", value: function () {
                    var t = this.w, e = t.globals.dom.elLegendWrap;
                    t.config.legend.height || "top" !== t.config.legend.position && "bottom" !== t.config.legend.position || (e.style.maxHeight = t.globals.svgHeight / 2 + "px");
                    var i = Object.assign({}, r.getBoundingClientRect(e));
                    return null !== e && !t.config.legend.floating && t.config.legend.show ? this.dCtx.lgRect = {
                        x: i.x,
                        y: i.y,
                        height: i.height,
                        width: 0 === i.height ? 0 : i.width
                    } : this.dCtx.lgRect = {
                        x: 0,
                        y: 0,
                        height: 0,
                        width: 0
                    }, "left" !== t.config.legend.position && "right" !== t.config.legend.position || 1.5 * this.dCtx.lgRect.width > t.globals.svgWidth && (this.dCtx.lgRect.width = t.globals.svgWidth / 1.5), this.dCtx.lgRect
                }
            }, {
                key: "getLargestStringFromMultiArr", value: function (t, e) {
                    var i = t;
                    if (this.w.globals.isMultiLineX) {
                        var a = e.map((function (t, e) {
                            return Array.isArray(t) ? t.length : 1
                        })), r = Math.max.apply(Math, function (t) {
                            return function (t) {
                                if (Array.isArray(t)) return jt(t)
                            }(t) || function (t) {
                                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                            }(t) || function (t, e) {
                                if (t) {
                                    if ("string" == typeof t) return jt(t, e);
                                    var i = Object.prototype.toString.call(t).slice(8, -1);
                                    return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? jt(t, e) : void 0
                                }
                            }(t) || function () {
                                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }(a));
                        i = e[a.indexOf(r)]
                    }
                    return i
                }
            }]) && Bt(e.prototype, i), t
        }();

        function Vt(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var _t = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.w = e.w, this.dCtx = e
            }

            var e, i;
            return e = t, (i = [{
                key: "getxAxisLabelsCoords", value: function () {
                    var t, e = this.w, i = e.globals.labels.slice();
                    if (e.config.xaxis.convertedCatToNumeric && 0 === i.length && (i = e.globals.categoryLabels), e.globals.timescaleLabels.length > 0) {
                        var a = this.getxAxisTimeScaleLabelsCoords();
                        t = {width: a.width, height: a.height}, e.globals.rotateXLabels = !1
                    } else {
                        this.dCtx.lgWidthForSideLegends = "left" !== e.config.legend.position && "right" !== e.config.legend.position || e.config.legend.floating ? 0 : this.dCtx.lgRect.width;
                        var s = e.globals.xLabelFormatter, n = r.getLargestStringFromArr(i),
                            o = this.dCtx.dimHelpers.getLargestStringFromMultiArr(n, i);
                        e.globals.isBarHorizontal && (o = n = e.globals.yAxisScale[0].result.reduce((function (t, e) {
                            return t.length > e.length ? t : e
                        }), 0));
                        var l = new X(this.dCtx.ctx), c = n;
                        n = l.xLabelFormat(s, n, c, {
                            i: void 0,
                            dateFormatter: new M(this.dCtx.ctx).formatDate,
                            w: e
                        }), o = l.xLabelFormat(s, o, c, {
                            i: void 0,
                            dateFormatter: new M(this.dCtx.ctx).formatDate,
                            w: e
                        }), (e.config.xaxis.convertedCatToNumeric && void 0 === n || "" === String(n).trim()) && (o = n = "1");
                        var h = new g(this.dCtx.ctx), d = h.getTextRects(n, e.config.xaxis.labels.style.fontSize),
                            u = d;
                        if (n !== o && (u = h.getTextRects(o, e.config.xaxis.labels.style.fontSize)), (t = {
                            width: d.width >= u.width ? d.width : u.width,
                            height: d.height >= u.height ? d.height : u.height
                        }).width * i.length > e.globals.svgWidth - this.dCtx.lgWidthForSideLegends - this.dCtx.yAxisWidth - this.dCtx.gridPad.left - this.dCtx.gridPad.right && 0 !== e.config.xaxis.labels.rotate || e.config.xaxis.labels.rotateAlways) {
                            if (!e.globals.isBarHorizontal) {
                                e.globals.rotateXLabels = !0;
                                var f = function (t) {
                                    return h.getTextRects(t, e.config.xaxis.labels.style.fontSize, e.config.xaxis.labels.style.fontFamily, "rotate(".concat(e.config.xaxis.labels.rotate, " 0 0)"), !1)
                                };
                                d = f(n), n !== o && (u = f(o)), t.height = (d.height > u.height ? d.height : u.height) / 1.5, t.width = d.width > u.width ? d.width : u.width
                            }
                        } else e.globals.rotateXLabels = !1
                    }
                    return e.config.xaxis.labels.show || (t = {width: 0, height: 0}), {width: t.width, height: t.height}
                }
            }, {
                key: "getxAxisGroupLabelsCoords", value: function () {
                    var t, e = this.w;
                    if (!e.globals.hasXaxisGroups) return {width: 0, height: 0};
                    var i,
                        a = (null === (t = e.config.xaxis.group.style) || void 0 === t ? void 0 : t.fontSize) || e.config.xaxis.labels.style.fontSize,
                        s = e.globals.groups.map((function (t) {
                            return t.title
                        })), n = r.getLargestStringFromArr(s),
                        o = this.dCtx.dimHelpers.getLargestStringFromMultiArr(n, s), l = new g(this.dCtx.ctx),
                        c = l.getTextRects(n, a), h = c;
                    return n !== o && (h = l.getTextRects(o, a)), i = {
                        width: c.width >= h.width ? c.width : h.width,
                        height: c.height >= h.height ? c.height : h.height
                    }, e.config.xaxis.labels.show || (i = {width: 0, height: 0}), {width: i.width, height: i.height}
                }
            }, {
                key: "getxAxisTitleCoords", value: function () {
                    var t = this.w, e = 0, i = 0;
                    if (void 0 !== t.config.xaxis.title.text) {
                        var a = new g(this.dCtx.ctx).getTextRects(t.config.xaxis.title.text, t.config.xaxis.title.style.fontSize);
                        e = a.width, i = a.height
                    }
                    return {width: e, height: i}
                }
            }, {
                key: "getxAxisTimeScaleLabelsCoords", value: function () {
                    var t, e = this.w;
                    this.dCtx.timescaleLabels = e.globals.timescaleLabels.slice();
                    var i = this.dCtx.timescaleLabels.map((function (t) {
                        return t.value
                    })), a = i.reduce((function (t, e) {
                        return void 0 === t ? (console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"), 0) : t.length > e.length ? t : e
                    }), 0);
                    return 1.05 * (t = new g(this.dCtx.ctx).getTextRects(a, e.config.xaxis.labels.style.fontSize)).width * i.length > e.globals.gridWidth && 0 !== e.config.xaxis.labels.rotate && (e.globals.overlappingXLabels = !0), t
                }
            }, {
                key: "additionalPaddingXLabels", value: function (t) {
                    var e = this, i = this.w, a = i.globals, r = i.config, s = r.xaxis.type, n = t.width;
                    a.skipLastTimelinelabel = !1, a.skipFirstTimelinelabel = !1;
                    var o = i.config.yaxis[0].opposite && i.globals.isBarHorizontal;
                    r.yaxis.forEach((function (t, l) {
                        o ? (e.dCtx.gridPad.left < n && (e.dCtx.xPadLeft = n / 2 + 1), e.dCtx.xPadRight = n / 2 + 1) : function (t, o) {
                            r.yaxis.length > 1 && function (t) {
                                return -1 !== a.collapsedSeriesIndices.indexOf(t)
                            }(o) || function (t) {
                                if (e.dCtx.timescaleLabels && e.dCtx.timescaleLabels.length) {
                                    var o = e.dCtx.timescaleLabels[0],
                                        l = e.dCtx.timescaleLabels[e.dCtx.timescaleLabels.length - 1].position + n / 1.75 - e.dCtx.yAxisWidthRight,
                                        c = o.position - n / 1.75 + e.dCtx.yAxisWidthLeft,
                                        h = "right" === i.config.legend.position && e.dCtx.lgRect.width > 0 ? e.dCtx.lgRect.width : 0;
                                    l > a.svgWidth - a.translateX - h && (a.skipLastTimelinelabel = !0), c < -(t.show && !t.floating || "bar" !== r.chart.type && "candlestick" !== r.chart.type && "rangeBar" !== r.chart.type && "boxPlot" !== r.chart.type ? 10 : n / 1.75) && (a.skipFirstTimelinelabel = !0)
                                } else "datetime" === s ? e.dCtx.gridPad.right < n && !a.rotateXLabels && (a.skipLastTimelinelabel = !0) : "datetime" !== s && e.dCtx.gridPad.right < n / 2 - e.dCtx.yAxisWidthRight && !a.rotateXLabels && !i.config.xaxis.labels.trim && ("between" !== i.config.xaxis.tickPlacement || i.globals.isBarHorizontal) && (e.dCtx.xPadRight = n / 2 + 1)
                            }(t)
                        }(t, l)
                    }))
                }
            }]) && Vt(e.prototype, i), t
        }();

        function Ut(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var qt = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.w = e.w, this.dCtx = e
            }

            var e, i;
            return e = t, (i = [{
                key: "getyAxisLabelsCoords", value: function () {
                    var t = this, e = this.w, i = [], a = 10, s = new ut(this.dCtx.ctx);
                    return e.config.yaxis.map((function (n, o) {
                        var l = {seriesIndex: o, dataPointIndex: -1, w: e}, c = e.globals.yAxisScale[o], h = 0;
                        if (!s.isYAxisHidden(o) && n.labels.show && void 0 !== n.labels.minWidth && (h = n.labels.minWidth), !s.isYAxisHidden(o) && n.labels.show && c.result.length) {
                            var d = e.globals.yLabelFormatters[o], u = c.niceMin === Number.MIN_VALUE ? 0 : c.niceMin,
                                f = c.result.reduce((function (t, e) {
                                    var i, a;
                                    return (null === (i = String(d(t, l))) || void 0 === i ? void 0 : i.length) > (null === (a = String(d(e, l))) || void 0 === a ? void 0 : a.length) ? t : e
                                }), u), p = f = d(f, l);
                            if (void 0 !== f && 0 !== f.length || (f = c.niceMax), e.globals.isBarHorizontal) {
                                a = 0;
                                var x = e.globals.labels.slice();
                                f = r.getLargestStringFromArr(x), f = d(f, {
                                    seriesIndex: o,
                                    dataPointIndex: -1,
                                    w: e
                                }), p = t.dCtx.dimHelpers.getLargestStringFromMultiArr(f, x)
                            }
                            var b = new g(t.dCtx.ctx), v = "rotate(".concat(n.labels.rotate, " 0 0)"),
                                m = b.getTextRects(f, n.labels.style.fontSize, n.labels.style.fontFamily, v, !1), y = m;
                            f !== p && (y = b.getTextRects(p, n.labels.style.fontSize, n.labels.style.fontFamily, v, !1)), i.push({
                                width: (h > y.width || h > m.width ? h : y.width > m.width ? y.width : m.width) + a,
                                height: y.height > m.height ? y.height : m.height
                            })
                        } else i.push({width: 0, height: 0})
                    })), i
                }
            }, {
                key: "getyAxisTitleCoords", value: function () {
                    var t = this, e = this.w, i = [];
                    return e.config.yaxis.map((function (e, a) {
                        if (e.show && void 0 !== e.title.text) {
                            var r = new g(t.dCtx.ctx), s = "rotate(".concat(e.title.rotate, " 0 0)"),
                                n = r.getTextRects(e.title.text, e.title.style.fontSize, e.title.style.fontFamily, s, !1);
                            i.push({width: n.width, height: n.height})
                        } else i.push({width: 0, height: 0})
                    })), i
                }
            }, {
                key: "getTotalYAxisWidth", value: function () {
                    var t = this.w, e = 0, i = 0, a = 0, r = t.globals.yAxisScale.length > 1 ? 10 : 0,
                        s = new ut(this.dCtx.ctx), n = function (n, o) {
                            var l = t.config.yaxis[o].floating, c = 0;
                            n.width > 0 && !l ? (c = n.width + r, function (e) {
                                return t.globals.ignoreYAxisIndexes.indexOf(e) > -1
                            }(o) && (c = c - n.width - r)) : c = l || s.isYAxisHidden(o) ? 0 : 5, t.config.yaxis[o].opposite ? a += c : i += c, e += c
                        };
                    return t.globals.yLabelsCoords.map((function (t, e) {
                        n(t, e)
                    })), t.globals.yTitleCoords.map((function (t, e) {
                        n(t, e)
                    })), t.globals.isBarHorizontal && !t.config.yaxis[0].floating && (e = t.globals.yLabelsCoords[0].width + t.globals.yTitleCoords[0].width + 15), this.dCtx.yAxisWidthLeft = i, this.dCtx.yAxisWidthRight = a, e
                }
            }]) && Ut(e.prototype, i), t
        }();

        function Zt(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var $t = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.w = e.w, this.dCtx = e
            }

            var e, i;
            return e = t, (i = [{
                key: "gridPadForColumnsInNumericAxis", value: function (t) {
                    var e = this.w;
                    if (e.globals.noData || e.globals.allSeriesCollapsed) return 0;
                    var i = function (t) {
                        return "bar" === t || "rangeBar" === t || "candlestick" === t || "boxPlot" === t
                    }, a = e.config.chart.type, r = 0, s = i(a) ? e.config.series.length : 1;
                    if (e.globals.comboBarCount > 0 && (s = e.globals.comboBarCount), e.globals.collapsedSeries.forEach((function (t) {
                        i(t.type) && (s -= 1)
                    })), e.config.chart.stacked && (s = 1), (i(a) || e.globals.comboBarCount > 0) && e.globals.isXNumeric && !e.globals.isBarHorizontal && s > 0) {
                        var n, o, l = Math.abs(e.globals.initialMaxX - e.globals.initialMinX);
                        l <= 3 && (l = e.globals.dataPoints), n = l / t, e.globals.minXDiff && e.globals.minXDiff / n > 0 && (o = e.globals.minXDiff / n), o > t / 2 && (o /= 2), (r = o / s * parseInt(e.config.plotOptions.bar.columnWidth, 10) / 100) < 1 && (r = 1), r = r / (s > 1 ? 1 : 1.5) + 5, e.globals.barPadForNumericAxis = r
                    }
                    return r
                }
            }, {
                key: "gridPadFortitleSubtitle", value: function () {
                    var t = this, e = this.w, i = e.globals,
                        a = this.dCtx.isSparkline || !e.globals.axisCharts ? 0 : 10;
                    ["title", "subtitle"].forEach((function (i) {
                        void 0 !== e.config[i].text ? a += e.config[i].margin : a += t.dCtx.isSparkline || !e.globals.axisCharts ? 0 : 5
                    })), !e.config.legend.show || "bottom" !== e.config.legend.position || e.config.legend.floating || e.globals.axisCharts || (a += 10);
                    var r = this.dCtx.dimHelpers.getTitleSubtitleCoords("title"),
                        s = this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");
                    i.gridHeight = i.gridHeight - r.height - s.height - a, i.translateY = i.translateY + r.height + s.height + a
                }
            }, {
                key: "setGridXPosForDualYAxis", value: function (t, e) {
                    var i = this.w, a = new ut(this.dCtx.ctx);
                    i.config.yaxis.map((function (r, s) {
                        -1 !== i.globals.ignoreYAxisIndexes.indexOf(s) || r.floating || a.isYAxisHidden(s) || (r.opposite && (i.globals.translateX = i.globals.translateX - (e[s].width + t[s].width) - parseInt(i.config.yaxis[s].labels.style.fontSize, 10) / 1.2 - 12), i.globals.translateX < 2 && (i.globals.translateX = 2))
                    }))
                }
            }]) && Zt(e.prototype, i), t
        }();

        function Jt(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, a = new Array(e); i < e; i++) a[i] = t[i];
            return a
        }

        function Qt(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Kt = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.lgRect = {}, this.yAxisWidth = 0, this.yAxisWidthLeft = 0, this.yAxisWidthRight = 0, this.xAxisHeight = 0, this.isSparkline = this.w.config.chart.sparkline.enabled, this.dimHelpers = new Gt(this), this.dimYAxis = new qt(this), this.dimXAxis = new _t(this), this.dimGrid = new $t(this), this.lgWidthForSideLegends = 0, this.gridPad = this.w.config.grid.padding, this.xPadRight = 0, this.xPadLeft = 0
            }

            var e, i;
            return e = t, (i = [{
                key: "plotCoords", value: function () {
                    var t = this, e = this.w, i = e.globals;
                    this.lgRect = this.dimHelpers.getLegendsRect(), this.isSparkline && ((e.config.markers.discrete.length > 0 || e.config.markers.size > 0) && Object.entries(this.gridPad).forEach((function (e) {
                        var i, a, r = (a = 2, function (t) {
                            if (Array.isArray(t)) return t
                        }(i = e) || function (t, e) {
                            var i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (null != i) {
                                var a, r, s = [], n = !0, o = !1;
                                try {
                                    for (i = i.call(t); !(n = (a = i.next()).done) && (s.push(a.value), !e || s.length !== e); n = !0) ;
                                } catch (t) {
                                    o = !0, r = t
                                } finally {
                                    try {
                                        n || null == i.return || i.return()
                                    } finally {
                                        if (o) throw r
                                    }
                                }
                                return s
                            }
                        }(i, a) || function (t, e) {
                            if (t) {
                                if ("string" == typeof t) return Jt(t, e);
                                var i = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Jt(t, e) : void 0
                            }
                        }(i, a) || function () {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()), s = r[0], n = r[1];
                        t.gridPad[s] = Math.max(n, t.w.globals.markers.largestSize / 1.5)
                    })), this.gridPad.top = Math.max(e.config.stroke.width / 2, this.gridPad.top), this.gridPad.bottom = Math.max(e.config.stroke.width / 2, this.gridPad.bottom)), i.axisCharts ? this.setDimensionsForAxisCharts() : this.setDimensionsForNonAxisCharts(), this.dimGrid.gridPadFortitleSubtitle(), i.gridHeight = i.gridHeight - this.gridPad.top - this.gridPad.bottom, i.gridWidth = i.gridWidth - this.gridPad.left - this.gridPad.right - this.xPadRight - this.xPadLeft;
                    var a = this.dimGrid.gridPadForColumnsInNumericAxis(i.gridWidth);
                    i.gridWidth = i.gridWidth - 2 * a, i.translateX = i.translateX + this.gridPad.left + this.xPadLeft + (a > 0 ? a + 4 : 0), i.translateY = i.translateY + this.gridPad.top
                }
            }, {
                key: "setDimensionsForAxisCharts", value: function () {
                    var t = this, e = this.w, i = e.globals, a = this.dimYAxis.getyAxisLabelsCoords(),
                        r = this.dimYAxis.getyAxisTitleCoords();
                    e.globals.yLabelsCoords = [], e.globals.yTitleCoords = [], e.config.yaxis.map((function (t, i) {
                        e.globals.yLabelsCoords.push({
                            width: a[i].width,
                            index: i
                        }), e.globals.yTitleCoords.push({width: r[i].width, index: i})
                    })), this.yAxisWidth = this.dimYAxis.getTotalYAxisWidth();
                    var s = this.dimXAxis.getxAxisLabelsCoords(), n = this.dimXAxis.getxAxisGroupLabelsCoords(),
                        o = this.dimXAxis.getxAxisTitleCoords();
                    this.conditionalChecksForAxisCoords(s, o, n), i.translateXAxisY = e.globals.rotateXLabels ? this.xAxisHeight / 8 : -4, i.translateXAxisX = e.globals.rotateXLabels && e.globals.isXNumeric && e.config.xaxis.labels.rotate <= -45 ? -this.xAxisWidth / 4 : 0, e.globals.isBarHorizontal && (i.rotateXLabels = !1, i.translateXAxisY = parseInt(e.config.xaxis.labels.style.fontSize, 10) / 1.5 * -1), i.translateXAxisY = i.translateXAxisY + e.config.xaxis.labels.offsetY, i.translateXAxisX = i.translateXAxisX + e.config.xaxis.labels.offsetX;
                    var l = this.yAxisWidth, c = this.xAxisHeight;
                    i.xAxisLabelsHeight = this.xAxisHeight - o.height, i.xAxisGroupLabelsHeight = i.xAxisLabelsHeight - s.height, i.xAxisLabelsWidth = this.xAxisWidth, i.xAxisHeight = this.xAxisHeight;
                    var h = 10;
                    ("radar" === e.config.chart.type || this.isSparkline) && (l = 0, c = i.goldenPadding), this.isSparkline && (this.lgRect = {
                        height: 0,
                        width: 0
                    }), (this.isSparkline || "treemap" === e.config.chart.type) && (l = 0, c = 0, h = 0), this.isSparkline || this.dimXAxis.additionalPaddingXLabels(s);
                    var d = function () {
                        i.translateX = l, i.gridHeight = i.svgHeight - t.lgRect.height - c - (t.isSparkline || "treemap" === e.config.chart.type ? 0 : e.globals.rotateXLabels ? 10 : 15), i.gridWidth = i.svgWidth - l
                    };
                    switch ("top" === e.config.xaxis.position && (h = i.xAxisHeight - e.config.xaxis.axisTicks.height - 5), e.config.legend.position) {
                        case"bottom":
                            i.translateY = h, d();
                            break;
                        case"top":
                            i.translateY = this.lgRect.height + h, d();
                            break;
                        case"left":
                            i.translateY = h, i.translateX = this.lgRect.width + l, i.gridHeight = i.svgHeight - c - 12, i.gridWidth = i.svgWidth - this.lgRect.width - l;
                            break;
                        case"right":
                            i.translateY = h, i.translateX = l, i.gridHeight = i.svgHeight - c - 12, i.gridWidth = i.svgWidth - this.lgRect.width - l - 5;
                            break;
                        default:
                            throw new Error("Legend position not supported")
                    }
                    this.dimGrid.setGridXPosForDualYAxis(r, a), new Lt(this.ctx).setYAxisXPosition(a, r)
                }
            }, {
                key: "setDimensionsForNonAxisCharts", value: function () {
                    var t = this.w, e = t.globals, i = t.config, a = 0;
                    t.config.legend.show && !t.config.legend.floating && (a = 20);
                    var r = "pie" === i.chart.type || "polarArea" === i.chart.type || "donut" === i.chart.type ? "pie" : "radialBar",
                        s = i.plotOptions[r].offsetY, n = i.plotOptions[r].offsetX;
                    if (!i.legend.show || i.legend.floating) return e.gridHeight = e.svgHeight - i.grid.padding.left + i.grid.padding.right, e.gridWidth = e.gridHeight, e.translateY = s, void (e.translateX = n + (e.svgWidth - e.gridWidth) / 2);
                    switch (i.legend.position) {
                        case"bottom":
                            e.gridHeight = e.svgHeight - this.lgRect.height - e.goldenPadding, e.gridWidth = e.svgWidth, e.translateY = s - 10, e.translateX = n + (e.svgWidth - e.gridWidth) / 2;
                            break;
                        case"top":
                            e.gridHeight = e.svgHeight - this.lgRect.height - e.goldenPadding, e.gridWidth = e.svgWidth, e.translateY = this.lgRect.height + s + 10, e.translateX = n + (e.svgWidth - e.gridWidth) / 2;
                            break;
                        case"left":
                            e.gridWidth = e.svgWidth - this.lgRect.width - a, e.gridHeight = "auto" !== i.chart.height ? e.svgHeight : e.gridWidth, e.translateY = s, e.translateX = n + this.lgRect.width + a;
                            break;
                        case"right":
                            e.gridWidth = e.svgWidth - this.lgRect.width - a - 5, e.gridHeight = "auto" !== i.chart.height ? e.svgHeight : e.gridWidth, e.translateY = s, e.translateX = n + 10;
                            break;
                        default:
                            throw new Error("Legend position not supported")
                    }
                }
            }, {
                key: "conditionalChecksForAxisCoords", value: function (t, e, i) {
                    var a = this.w, r = a.globals.hasXaxisGroups ? 2 : 1, s = i.height + t.height + e.height,
                        n = a.globals.isMultiLineX ? 1.2 : a.globals.LINE_HEIGHT_RATIO,
                        o = a.globals.rotateXLabels ? 22 : 10,
                        l = a.globals.rotateXLabels && "bottom" === a.config.legend.position ? 10 : 0;
                    this.xAxisHeight = s * n + r * o + l, this.xAxisWidth = t.width, this.xAxisHeight - e.height > a.config.xaxis.labels.maxHeight && (this.xAxisHeight = a.config.xaxis.labels.maxHeight), a.config.xaxis.labels.minHeight && this.xAxisHeight < a.config.xaxis.labels.minHeight && (this.xAxisHeight = a.config.xaxis.labels.minHeight), a.config.xaxis.floating && (this.xAxisHeight = 0);
                    var c = 0, h = 0;
                    a.config.yaxis.forEach((function (t) {
                        c += t.labels.minWidth, h += t.labels.maxWidth
                    })), this.yAxisWidth < c && (this.yAxisWidth = c), this.yAxisWidth > h && (this.yAxisWidth = h)
                }
            }]) && Qt(e.prototype, i), t
        }();

        function te(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var ee = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.w = e.w, this.lgCtx = e
            }

            var e, i;
            return e = t, (i = [{
                key: "getLegendStyles", value: function () {
                    var t, e, i, a = document.createElement("style");
                    a.setAttribute("type", "text/css");
                    var r = (null === (t = this.lgCtx.ctx) || void 0 === t || null === (e = t.opts) || void 0 === e || null === (i = e.chart) || void 0 === i ? void 0 : i.nonce) || this.w.config.chart.nonce;
                    r && a.setAttribute("nonce", r);
                    var s = document.createTextNode("\n      .apexcharts-legend {\n        display: flex;\n        overflow: auto;\n        padding: 0 10px;\n      }\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\n        flex-wrap: wrap\n      }\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        flex-direction: column;\n        bottom: 0;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        justify-content: flex-start;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n        justify-content: center;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n        justify-content: flex-end;\n      }\n      .apexcharts-legend-series {\n        cursor: pointer;\n        line-height: normal;\n      }\n      .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{\n        display: flex;\n        align-items: center;\n      }\n      .apexcharts-legend-text {\n        position: relative;\n        font-size: 14px;\n      }\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\n        pointer-events: none;\n      }\n      .apexcharts-legend-marker {\n        position: relative;\n        display: inline-block;\n        cursor: pointer;\n        margin-right: 3px;\n        border-style: solid;\n      }\n\n      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{\n        display: inline-block;\n      }\n      .apexcharts-legend-series.apexcharts-no-click {\n        cursor: auto;\n      }\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\n        display: none !important;\n      }\n      .apexcharts-inactive-legend {\n        opacity: 0.45;\n      }");
                    return a.appendChild(s), a
                }
            }, {
                key: "getLegendBBox", value: function () {
                    var t = this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(),
                        e = t.width;
                    return {clwh: t.height, clww: e}
                }
            }, {
                key: "appendToForeignObject", value: function () {
                    this.w.globals.dom.elLegendForeign.appendChild(this.getLegendStyles())
                }
            }, {
                key: "toggleDataSeries", value: function (t, e) {
                    var i = this, a = this.w;
                    if (a.globals.axisCharts || "radialBar" === a.config.chart.type) {
                        a.globals.resized = !0;
                        var r = null, s = null;
                        a.globals.risingSeries = [], a.globals.axisCharts ? (r = a.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t, "']")), s = parseInt(r.getAttribute("data:realIndex"), 10)) : (r = a.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(t + 1, "']")), s = parseInt(r.getAttribute("rel"), 10) - 1), e ? [{
                            cs: a.globals.collapsedSeries,
                            csi: a.globals.collapsedSeriesIndices
                        }, {
                            cs: a.globals.ancillaryCollapsedSeries,
                            csi: a.globals.ancillaryCollapsedSeriesIndices
                        }].forEach((function (t) {
                            i.riseCollapsedSeries(t.cs, t.csi, s)
                        })) : this.hideSeries({seriesEl: r, realIndex: s})
                    } else {
                        var n = a.globals.dom.Paper.select(" .apexcharts-series[rel='".concat(t + 1, "'] path")),
                            o = a.config.chart.type;
                        if ("pie" === o || "polarArea" === o || "donut" === o) {
                            var l = a.config.plotOptions.pie.donut.labels;
                            new g(this.lgCtx.ctx).pathMouseDown(n.members[0], null), this.lgCtx.ctx.pie.printDataLabelsInner(n.members[0].node, l)
                        }
                        n.fire("click")
                    }
                }
            }, {
                key: "hideSeries", value: function (t) {
                    var e = t.seriesEl, i = t.realIndex, a = this.w, s = r.clone(a.config.series);
                    if (a.globals.axisCharts) {
                        var n = !1;
                        if (a.config.yaxis[i] && a.config.yaxis[i].show && a.config.yaxis[i].showAlways && (n = !0, a.globals.ancillaryCollapsedSeriesIndices.indexOf(i) < 0 && (a.globals.ancillaryCollapsedSeries.push({
                            index: i,
                            data: s[i].data.slice(),
                            type: e.parentNode.className.baseVal.split("-")[1]
                        }), a.globals.ancillaryCollapsedSeriesIndices.push(i))), !n) {
                            a.globals.collapsedSeries.push({
                                index: i,
                                data: s[i].data.slice(),
                                type: e.parentNode.className.baseVal.split("-")[1]
                            }), a.globals.collapsedSeriesIndices.push(i);
                            var o = a.globals.risingSeries.indexOf(i);
                            a.globals.risingSeries.splice(o, 1)
                        }
                    } else a.globals.collapsedSeries.push({
                        index: i,
                        data: s[i]
                    }), a.globals.collapsedSeriesIndices.push(i);
                    for (var l = e.childNodes, c = 0; c < l.length; c++) l[c].classList.contains("apexcharts-series-markers-wrap") && (l[c].classList.contains("apexcharts-hide") ? l[c].classList.remove("apexcharts-hide") : l[c].classList.add("apexcharts-hide"));
                    a.globals.allSeriesCollapsed = a.globals.collapsedSeries.length === a.config.series.length, s = this._getSeriesBasedOnCollapsedState(s), this.lgCtx.ctx.updateHelpers._updateSeries(s, a.config.chart.animations.dynamicAnimation.enabled)
                }
            }, {
                key: "riseCollapsedSeries", value: function (t, e, i) {
                    var a = this.w, s = r.clone(a.config.series);
                    if (t.length > 0) {
                        for (var n = 0; n < t.length; n++) t[n].index === i && (a.globals.axisCharts ? (s[i].data = t[n].data.slice(), t.splice(n, 1), e.splice(n, 1), a.globals.risingSeries.push(i)) : (s[i] = t[n].data, t.splice(n, 1), e.splice(n, 1), a.globals.risingSeries.push(i)));
                        s = this._getSeriesBasedOnCollapsedState(s), this.lgCtx.ctx.updateHelpers._updateSeries(s, a.config.chart.animations.dynamicAnimation.enabled)
                    }
                }
            }, {
                key: "_getSeriesBasedOnCollapsedState", value: function (t) {
                    var e = this.w;
                    return e.globals.axisCharts ? t.forEach((function (i, a) {
                        e.globals.collapsedSeriesIndices.indexOf(a) > -1 && (t[a].data = [])
                    })) : t.forEach((function (i, a) {
                        e.globals.collapsedSeriesIndices.indexOf(a) > -1 && (t[a] = 0)
                    })), t
                }
            }]) && te(e.prototype, i), t
        }();

        function ie(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        const ae = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.onLegendClick = this.onLegendClick.bind(this), this.onLegendHovered = this.onLegendHovered.bind(this), this.isBarsDistributed = "bar" === this.w.config.chart.type && this.w.config.plotOptions.bar.distributed && 1 === this.w.config.series.length, this.legendHelpers = new ee(this)
            }

            var e, i;
            return e = t, (i = [{
                key: "init", value: function () {
                    var t = this.w, e = t.globals, i = t.config;
                    if ((i.legend.showForSingleSeries && 1 === e.series.length || this.isBarsDistributed || e.series.length > 1 || !e.axisCharts) && i.legend.show) {
                        for (; e.dom.elLegendWrap.firstChild;) e.dom.elLegendWrap.removeChild(e.dom.elLegendWrap.firstChild);
                        this.drawLegends(), r.isIE11() ? document.getElementsByTagName("head")[0].appendChild(this.legendHelpers.getLegendStyles()) : this.legendHelpers.appendToForeignObject(), "bottom" === i.legend.position || "top" === i.legend.position ? this.legendAlignHorizontal() : "right" !== i.legend.position && "left" !== i.legend.position || this.legendAlignVertical()
                    }
                }
            }, {
                key: "drawLegends", value: function () {
                    var t = this, e = this.w, i = e.config.legend.fontFamily, a = e.globals.seriesNames,
                        s = e.globals.colors.slice();
                    if ("heatmap" === e.config.chart.type) {
                        var n = e.config.plotOptions.heatmap.colorScale.ranges;
                        a = n.map((function (t) {
                            return t.name ? t.name : t.from + " - " + t.to
                        })), s = n.map((function (t) {
                            return t.color
                        }))
                    } else this.isBarsDistributed && (a = e.globals.labels.slice());
                    e.config.legend.customLegendItems.length && (a = e.config.legend.customLegendItems);
                    for (var o = e.globals.legendFormatter, l = e.config.legend.inverseOrder, c = l ? a.length - 1 : 0; l ? c >= 0 : c <= a.length - 1; l ? c-- : c++) {
                        var h, d = o(a[c], {seriesIndex: c, w: e}), u = !1, f = !1;
                        if (e.globals.collapsedSeries.length > 0) for (var x = 0; x < e.globals.collapsedSeries.length; x++) e.globals.collapsedSeries[x].index === c && (u = !0);
                        if (e.globals.ancillaryCollapsedSeriesIndices.length > 0) for (var b = 0; b < e.globals.ancillaryCollapsedSeriesIndices.length; b++) e.globals.ancillaryCollapsedSeriesIndices[b] === c && (f = !0);
                        var v = document.createElement("span");
                        v.classList.add("apexcharts-legend-marker");
                        var m = e.config.legend.markers.offsetX, y = e.config.legend.markers.offsetY,
                            w = e.config.legend.markers.height, k = e.config.legend.markers.width,
                            A = e.config.legend.markers.strokeWidth, S = e.config.legend.markers.strokeColor,
                            C = e.config.legend.markers.radius, P = v.style;
                        P.background = s[c], P.color = s[c], P.setProperty("background", s[c], "important"), e.config.legend.markers.fillColors && e.config.legend.markers.fillColors[c] && (P.background = e.config.legend.markers.fillColors[c]), void 0 !== e.globals.seriesColors[c] && (P.background = e.globals.seriesColors[c], P.color = e.globals.seriesColors[c]), P.height = Array.isArray(w) ? parseFloat(w[c]) + "px" : parseFloat(w) + "px", P.width = Array.isArray(k) ? parseFloat(k[c]) + "px" : parseFloat(k) + "px", P.left = (Array.isArray(m) ? parseFloat(m[c]) : parseFloat(m)) + "px", P.top = (Array.isArray(y) ? parseFloat(y[c]) : parseFloat(y)) + "px", P.borderWidth = Array.isArray(A) ? A[c] : A, P.borderColor = Array.isArray(S) ? S[c] : S, P.borderRadius = Array.isArray(C) ? parseFloat(C[c]) + "px" : parseFloat(C) + "px", e.config.legend.markers.customHTML && (Array.isArray(e.config.legend.markers.customHTML) ? e.config.legend.markers.customHTML[c] && (v.innerHTML = e.config.legend.markers.customHTML[c]()) : v.innerHTML = e.config.legend.markers.customHTML()), g.setAttrs(v, {
                            rel: c + 1,
                            "data:collapsed": u || f
                        }), (u || f) && v.classList.add("apexcharts-inactive-legend");
                        var L = document.createElement("div"), O = document.createElement("span");
                        O.classList.add("apexcharts-legend-text"), O.innerHTML = Array.isArray(d) ? d.join(" ") : d;
                        var T = e.config.legend.labels.useSeriesColors ? e.globals.colors[c] : Array.isArray(e.config.legend.labels.colors) ? null === (h = e.config.legend.labels.colors) || void 0 === h ? void 0 : h[c] : e.config.legend.labels.colors;
                        T || (T = e.config.chart.foreColor), O.style.color = T, O.style.fontSize = parseFloat(e.config.legend.fontSize) + "px", O.style.fontWeight = e.config.legend.fontWeight, O.style.fontFamily = i || e.config.chart.fontFamily, g.setAttrs(O, {
                            rel: c + 1,
                            i: c,
                            "data:default-text": encodeURIComponent(d),
                            "data:collapsed": u || f
                        }), L.appendChild(v), L.appendChild(O);
                        var I = new p(this.ctx);
                        e.config.legend.showForZeroSeries || 0 === I.getSeriesTotalByIndex(c) && I.seriesHaveSameValues(c) && !I.isSeriesNull(c) && -1 === e.globals.collapsedSeriesIndices.indexOf(c) && -1 === e.globals.ancillaryCollapsedSeriesIndices.indexOf(c) && L.classList.add("apexcharts-hidden-zero-series"), e.config.legend.showForNullSeries || I.isSeriesNull(c) && -1 === e.globals.collapsedSeriesIndices.indexOf(c) && -1 === e.globals.ancillaryCollapsedSeriesIndices.indexOf(c) && L.classList.add("apexcharts-hidden-null-series"), e.globals.dom.elLegendWrap.appendChild(L), e.globals.dom.elLegendWrap.classList.add("apexcharts-align-".concat(e.config.legend.horizontalAlign)), e.globals.dom.elLegendWrap.classList.add("apx-legend-position-" + e.config.legend.position), L.classList.add("apexcharts-legend-series"), L.style.margin = "".concat(e.config.legend.itemMargin.vertical, "px ").concat(e.config.legend.itemMargin.horizontal, "px"), e.globals.dom.elLegendWrap.style.width = e.config.legend.width ? e.config.legend.width + "px" : "", e.globals.dom.elLegendWrap.style.height = e.config.legend.height ? e.config.legend.height + "px" : "", g.setAttrs(L, {
                            rel: c + 1,
                            seriesName: r.escapeString(a[c]),
                            "data:collapsed": u || f
                        }), (u || f) && L.classList.add("apexcharts-inactive-legend"), e.config.legend.onItemClick.toggleDataSeries || L.classList.add("apexcharts-no-click")
                    }
                    e.globals.dom.elWrap.addEventListener("click", t.onLegendClick, !0), e.config.legend.onItemHover.highlightDataSeries && 0 === e.config.legend.customLegendItems.length && (e.globals.dom.elWrap.addEventListener("mousemove", t.onLegendHovered, !0), e.globals.dom.elWrap.addEventListener("mouseout", t.onLegendHovered, !0))
                }
            }, {
                key: "setLegendWrapXY", value: function (t, e) {
                    var i = this.w, a = i.globals.dom.elLegendWrap, r = a.getBoundingClientRect(), s = 0, n = 0;
                    if ("bottom" === i.config.legend.position) n += i.globals.svgHeight - r.height / 2; else if ("top" === i.config.legend.position) {
                        var o = new Kt(this.ctx), l = o.dimHelpers.getTitleSubtitleCoords("title").height,
                            c = o.dimHelpers.getTitleSubtitleCoords("subtitle").height;
                        n = n + (l > 0 ? l - 10 : 0) + (c > 0 ? c - 10 : 0)
                    }
                    a.style.position = "absolute", s = s + t + i.config.legend.offsetX, n = n + e + i.config.legend.offsetY, a.style.left = s + "px", a.style.top = n + "px", "bottom" === i.config.legend.position ? (a.style.top = "auto", a.style.bottom = 5 - i.config.legend.offsetY + "px") : "right" === i.config.legend.position && (a.style.left = "auto", a.style.right = 25 + i.config.legend.offsetX + "px"), ["width", "height"].forEach((function (t) {
                        a.style[t] && (a.style[t] = parseInt(i.config.legend[t], 10) + "px")
                    }))
                }
            }, {
                key: "legendAlignHorizontal", value: function () {
                    var t = this.w;
                    t.globals.dom.elLegendWrap.style.right = 0;
                    var e = this.legendHelpers.getLegendBBox(), i = new Kt(this.ctx),
                        a = i.dimHelpers.getTitleSubtitleCoords("title"),
                        r = i.dimHelpers.getTitleSubtitleCoords("subtitle"), s = 0;
                    "bottom" === t.config.legend.position ? s = -e.clwh / 1.8 : "top" === t.config.legend.position && (s = a.height + r.height + t.config.title.margin + t.config.subtitle.margin - 10), this.setLegendWrapXY(20, s)
                }
            }, {
                key: "legendAlignVertical", value: function () {
                    var t = this.w, e = this.legendHelpers.getLegendBBox(), i = 0;
                    "left" === t.config.legend.position && (i = 20), "right" === t.config.legend.position && (i = t.globals.svgWidth - e.clww - 10), this.setLegendWrapXY(i, 20)
                }
            }, {
                key: "onLegendHovered", value: function (t) {
                    var e = this.w,
                        i = t.target.classList.contains("apexcharts-legend-series") || t.target.classList.contains("apexcharts-legend-text") || t.target.classList.contains("apexcharts-legend-marker");
                    if ("heatmap" === e.config.chart.type || this.isBarsDistributed) {
                        if (i) {
                            var a = parseInt(t.target.getAttribute("rel"), 10) - 1;
                            this.ctx.events.fireEvent("legendHover", [this.ctx, a, this.w]), new ot(this.ctx).highlightRangeInSeries(t, t.target)
                        }
                    } else !t.target.classList.contains("apexcharts-inactive-legend") && i && new ot(this.ctx).toggleSeriesOnHover(t, t.target)
                }
            }, {
                key: "onLegendClick", value: function (t) {
                    var e = this.w;
                    if (!e.config.legend.customLegendItems.length && (t.target.classList.contains("apexcharts-legend-series") || t.target.classList.contains("apexcharts-legend-text") || t.target.classList.contains("apexcharts-legend-marker"))) {
                        var i = parseInt(t.target.getAttribute("rel"), 10) - 1,
                            a = "true" === t.target.getAttribute("data:collapsed"),
                            r = this.w.config.chart.events.legendClick;
                        "function" == typeof r && r(this.ctx, i, this.w), this.ctx.events.fireEvent("legendClick", [this.ctx, i, this.w]);
                        var s = this.w.config.legend.markers.onClick;
                        "function" == typeof s && t.target.classList.contains("apexcharts-legend-marker") && (s(this.ctx, i, this.w), this.ctx.events.fireEvent("legendMarkerClick", [this.ctx, i, this.w])), "treemap" !== e.config.chart.type && "heatmap" !== e.config.chart.type && !this.isBarsDistributed && e.config.legend.onItemClick.toggleDataSeries && this.legendHelpers.toggleDataSeries(i, a)
                    }
                }
            }]) && ie(e.prototype, i), t
        }();
        var re = i(798), se = i.n(re), ne = i(688), oe = i.n(ne), le = i(149), ce = i.n(le), he = i(323), de = i.n(he),
            ue = i(686), ge = i.n(ue), fe = i(618), pe = i.n(fe), xe = i(355), be = i.n(xe);

        function ve(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var me = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w;
                var i = this.w;
                this.ev = this.w.config.chart.events, this.selectedClass = "apexcharts-selected", this.localeValues = this.w.globals.locale.toolbar, this.minX = i.globals.minX, this.maxX = i.globals.maxX
            }

            var e, i;
            return e = t, (i = [{
                key: "createToolbar", value: function () {
                    var t = this, e = this.w, i = function () {
                        return document.createElement("div")
                    }, a = i();
                    if (a.setAttribute("class", "apexcharts-toolbar"), a.style.top = e.config.chart.toolbar.offsetY + "px", a.style.right = 3 - e.config.chart.toolbar.offsetX + "px", e.globals.dom.elWrap.appendChild(a), this.elZoom = i(), this.elZoomIn = i(), this.elZoomOut = i(), this.elPan = i(), this.elSelection = i(), this.elZoomReset = i(), this.elMenuIcon = i(), this.elMenu = i(), this.elCustomIcons = [], this.t = e.config.chart.toolbar.tools, Array.isArray(this.t.customIcons)) for (var s = 0; s < this.t.customIcons.length; s++) this.elCustomIcons.push(i());
                    var n = [], o = function (i, a, r) {
                        var s = i.toLowerCase();
                        t.t[s] && e.config.chart.zoom.enabled && n.push({
                            el: a,
                            icon: "string" == typeof t.t[s] ? t.t[s] : r,
                            title: t.localeValues[i],
                            class: "apexcharts-".concat(s, "-icon")
                        })
                    };
                    o("zoomIn", this.elZoomIn, de()), o("zoomOut", this.elZoomOut, ge());
                    var l = function (i) {
                        t.t[i] && e.config.chart[i].enabled && n.push({
                            el: "zoom" === i ? t.elZoom : t.elSelection,
                            icon: "string" == typeof t.t[i] ? t.t[i] : "zoom" === i ? oe() : pe(),
                            title: t.localeValues["zoom" === i ? "selectionZoom" : "selection"],
                            class: e.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-".concat(i, "-icon")
                        })
                    };
                    l("zoom"), l("selection"), this.t.pan && e.config.chart.zoom.enabled && n.push({
                        el: this.elPan,
                        icon: "string" == typeof this.t.pan ? this.t.pan : se(),
                        title: this.localeValues.pan,
                        class: e.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-pan-icon"
                    }), o("reset", this.elZoomReset, ce()), this.t.download && n.push({
                        el: this.elMenuIcon,
                        icon: "string" == typeof this.t.download ? this.t.download : be(),
                        title: this.localeValues.menu,
                        class: "apexcharts-menu-icon"
                    });
                    for (var c = 0; c < this.elCustomIcons.length; c++) n.push({
                        el: this.elCustomIcons[c],
                        icon: this.t.customIcons[c].icon,
                        title: this.t.customIcons[c].title,
                        index: this.t.customIcons[c].index,
                        class: "apexcharts-toolbar-custom-icon " + this.t.customIcons[c].class
                    });
                    n.forEach((function (t, e) {
                        t.index && r.moveIndexInArray(n, e, t.index)
                    }));
                    for (var h = 0; h < n.length; h++) g.setAttrs(n[h].el, {
                        class: n[h].class,
                        title: n[h].title
                    }), n[h].el.innerHTML = n[h].icon, a.appendChild(n[h].el);
                    this._createHamburgerMenu(a), e.globals.zoomEnabled ? this.elZoom.classList.add(this.selectedClass) : e.globals.panEnabled ? this.elPan.classList.add(this.selectedClass) : e.globals.selectionEnabled && this.elSelection.classList.add(this.selectedClass), this.addToolbarEventListeners()
                }
            }, {
                key: "_createHamburgerMenu", value: function (t) {
                    this.elMenuItems = [], t.appendChild(this.elMenu), g.setAttrs(this.elMenu, {class: "apexcharts-menu"});
                    for (var e = [{name: "exportSVG", title: this.localeValues.exportToSVG}, {
                        name: "exportPNG",
                        title: this.localeValues.exportToPNG
                    }, {
                        name: "exportCSV",
                        title: this.localeValues.exportToCSV
                    }], i = 0; i < e.length; i++) this.elMenuItems.push(document.createElement("div")), this.elMenuItems[i].innerHTML = e[i].title, g.setAttrs(this.elMenuItems[i], {
                        class: "apexcharts-menu-item ".concat(e[i].name),
                        title: e[i].title
                    }), this.elMenu.appendChild(this.elMenuItems[i])
                }
            }, {
                key: "addToolbarEventListeners", value: function () {
                    var t = this;
                    this.elZoomReset.addEventListener("click", this.handleZoomReset.bind(this)), this.elSelection.addEventListener("click", this.toggleZoomSelection.bind(this, "selection")), this.elZoom.addEventListener("click", this.toggleZoomSelection.bind(this, "zoom")), this.elZoomIn.addEventListener("click", this.handleZoomIn.bind(this)), this.elZoomOut.addEventListener("click", this.handleZoomOut.bind(this)), this.elPan.addEventListener("click", this.togglePanning.bind(this)), this.elMenuIcon.addEventListener("click", this.toggleMenu.bind(this)), this.elMenuItems.forEach((function (e) {
                        e.classList.contains("exportSVG") ? e.addEventListener("click", t.handleDownload.bind(t, "svg")) : e.classList.contains("exportPNG") ? e.addEventListener("click", t.handleDownload.bind(t, "png")) : e.classList.contains("exportCSV") && e.addEventListener("click", t.handleDownload.bind(t, "csv"))
                    }));
                    for (var e = 0; e < this.t.customIcons.length; e++) this.elCustomIcons[e].addEventListener("click", this.t.customIcons[e].click.bind(this, this.ctx, this.ctx.w))
                }
            }, {
                key: "toggleZoomSelection", value: function (t) {
                    this.ctx.getSyncedCharts().forEach((function (e) {
                        e.ctx.toolbar.toggleOtherControls();
                        var i = "selection" === t ? e.ctx.toolbar.elSelection : e.ctx.toolbar.elZoom,
                            a = "selection" === t ? "selectionEnabled" : "zoomEnabled";
                        e.w.globals[a] = !e.w.globals[a], i.classList.contains(e.ctx.toolbar.selectedClass) ? i.classList.remove(e.ctx.toolbar.selectedClass) : i.classList.add(e.ctx.toolbar.selectedClass)
                    }))
                }
            }, {
                key: "getToolbarIconsReference", value: function () {
                    var t = this.w;
                    this.elZoom || (this.elZoom = t.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")), this.elPan || (this.elPan = t.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")), this.elSelection || (this.elSelection = t.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"))
                }
            }, {
                key: "enableZoomPanFromToolbar", value: function (t) {
                    this.toggleOtherControls(), "pan" === t ? this.w.globals.panEnabled = !0 : this.w.globals.zoomEnabled = !0;
                    var e = "pan" === t ? this.elPan : this.elZoom, i = "pan" === t ? this.elZoom : this.elPan;
                    e && e.classList.add(this.selectedClass), i && i.classList.remove(this.selectedClass)
                }
            }, {
                key: "togglePanning", value: function () {
                    this.ctx.getSyncedCharts().forEach((function (t) {
                        t.ctx.toolbar.toggleOtherControls(), t.w.globals.panEnabled = !t.w.globals.panEnabled, t.ctx.toolbar.elPan.classList.contains(t.ctx.toolbar.selectedClass) ? t.ctx.toolbar.elPan.classList.remove(t.ctx.toolbar.selectedClass) : t.ctx.toolbar.elPan.classList.add(t.ctx.toolbar.selectedClass)
                    }))
                }
            }, {
                key: "toggleOtherControls", value: function () {
                    var t = this, e = this.w;
                    e.globals.panEnabled = !1, e.globals.zoomEnabled = !1, e.globals.selectionEnabled = !1, this.getToolbarIconsReference(), [this.elPan, this.elSelection, this.elZoom].forEach((function (e) {
                        e && e.classList.remove(t.selectedClass)
                    }))
                }
            }, {
                key: "handleZoomIn", value: function () {
                    var t = this.w;
                    t.globals.isRangeBar && (this.minX = t.globals.minY, this.maxX = t.globals.maxY);
                    var e = (this.minX + this.maxX) / 2, i = (this.minX + e) / 2, a = (this.maxX + e) / 2,
                        r = this._getNewMinXMaxX(i, a);
                    t.globals.disableZoomIn || this.zoomUpdateOptions(r.minX, r.maxX)
                }
            }, {
                key: "handleZoomOut", value: function () {
                    var t = this.w;
                    if (t.globals.isRangeBar && (this.minX = t.globals.minY, this.maxX = t.globals.maxY), !("datetime" === t.config.xaxis.type && new Date(this.minX).getUTCFullYear() < 1e3)) {
                        var e = (this.minX + this.maxX) / 2, i = this.minX - (e - this.minX),
                            a = this.maxX - (e - this.maxX), r = this._getNewMinXMaxX(i, a);
                        t.globals.disableZoomOut || this.zoomUpdateOptions(r.minX, r.maxX)
                    }
                }
            }, {
                key: "_getNewMinXMaxX", value: function (t, e) {
                    var i = this.w.config.xaxis.convertedCatToNumeric;
                    return {minX: i ? Math.floor(t) : t, maxX: i ? Math.floor(e) : e}
                }
            }, {
                key: "zoomUpdateOptions", value: function (t, e) {
                    var i = this.w;
                    if (void 0 !== t || void 0 !== e) {
                        if (!(i.config.xaxis.convertedCatToNumeric && (t < 1 && (t = 1, e = i.globals.dataPoints), e - t < 2))) {
                            var a = {min: t, max: e}, s = this.getBeforeZoomRange(a);
                            s && (a = s.xaxis);
                            var n = {xaxis: a}, o = r.clone(i.globals.initialConfig.yaxis);
                            i.config.chart.zoom.autoScaleYaxis && (o = new kt(this.ctx).autoScaleY(this.ctx, o, {xaxis: a})), i.config.chart.group || (n.yaxis = o), this.w.globals.zoomed = !0, this.ctx.updateHelpers._updateOptions(n, !1, this.w.config.chart.animations.dynamicAnimation.enabled), this.zoomCallback(a, o)
                        }
                    } else this.handleZoomReset()
                }
            }, {
                key: "zoomCallback", value: function (t, e) {
                    "function" == typeof this.ev.zoomed && this.ev.zoomed(this.ctx, {xaxis: t, yaxis: e})
                }
            }, {
                key: "getBeforeZoomRange", value: function (t, e) {
                    var i = null;
                    return "function" == typeof this.ev.beforeZoom && (i = this.ev.beforeZoom(this, {
                        xaxis: t,
                        yaxis: e
                    })), i
                }
            }, {
                key: "toggleMenu", value: function () {
                    var t = this;
                    window.setTimeout((function () {
                        t.elMenu.classList.contains("apexcharts-menu-open") ? t.elMenu.classList.remove("apexcharts-menu-open") : t.elMenu.classList.add("apexcharts-menu-open")
                    }), 0)
                }
            }, {
                key: "handleDownload", value: function (t) {
                    var e = this.w, i = new xt(this.ctx);
                    switch (t) {
                        case"svg":
                            i.exportToSVG(this.ctx);
                            break;
                        case"png":
                            i.exportToPng(this.ctx);
                            break;
                        case"csv":
                            i.exportToCSV({
                                series: e.config.series,
                                columnDelimiter: e.config.chart.toolbar.export.csv.columnDelimiter
                            })
                    }
                }
            }, {
                key: "handleZoomReset", value: function (t) {
                    this.ctx.getSyncedCharts().forEach((function (t) {
                        var e = t.w;
                        if (e.globals.lastXAxis.min = e.globals.initialConfig.xaxis.min, e.globals.lastXAxis.max = e.globals.initialConfig.xaxis.max, t.updateHelpers.revertDefaultAxisMinMax(), "function" == typeof e.config.chart.events.beforeResetZoom) {
                            var i = e.config.chart.events.beforeResetZoom(t, e);
                            i && t.updateHelpers.revertDefaultAxisMinMax(i)
                        }
                        "function" == typeof e.config.chart.events.zoomed && t.ctx.toolbar.zoomCallback({
                            min: e.config.xaxis.min,
                            max: e.config.xaxis.max
                        }), e.globals.zoomed = !1;
                        var a = t.ctx.series.emptyCollapsedSeries(r.clone(e.globals.initialSeries));
                        t.updateHelpers._updateSeries(a, e.config.chart.animations.dynamicAnimation.enabled)
                    }))
                }
            }, {
                key: "destroy", value: function () {
                    this.elZoom = null, this.elZoomIn = null, this.elZoomOut = null, this.elPan = null, this.elSelection = null, this.elZoomReset = null, this.elMenuIcon = null
                }
            }]) && ve(e.prototype, i), t
        }();

        function ye(t) {
            return ye = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, ye(t)
        }

        function we(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        function ke(t, e) {
            return ke = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            }, ke(t, e)
        }

        function Ae(t) {
            return Ae = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }, Ae(t)
        }

        var Se = function (t) {
            !function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && ke(t, e)
            }(o, t);
            var e, i, a, s, n = (a = o, s = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                    }))), !0
                } catch (t) {
                    return !1
                }
            }(), function () {
                var t, e = Ae(a);
                if (s) {
                    var i = Ae(this).constructor;
                    t = Reflect.construct(e, arguments, i)
                } else t = e.apply(this, arguments);
                return function (t, e) {
                    if (e && ("object" === ye(e) || "function" == typeof e)) return e;
                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                    return function (t) {
                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t)
                }(this, t)
            });

            function o(t) {
                var e;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, o), (e = n.call(this, t)).ctx = t, e.w = t.w, e.dragged = !1, e.graphics = new g(e.ctx), e.eventList = ["mousedown", "mouseleave", "mousemove", "touchstart", "touchmove", "mouseup", "touchend"], e.clientX = 0, e.clientY = 0, e.startX = 0, e.endX = 0, e.dragX = 0, e.startY = 0, e.endY = 0, e.dragY = 0, e.moveDirection = "none", e
            }

            return e = o, (i = [{
                key: "init", value: function (t) {
                    var e = this, i = t.xyRatios, a = this.w, r = this;
                    this.xyRatios = i, this.zoomRect = this.graphics.drawRect(0, 0, 0, 0), this.selectionRect = this.graphics.drawRect(0, 0, 0, 0), this.gridRect = a.globals.dom.baseEl.querySelector(".apexcharts-grid"), this.zoomRect.node.classList.add("apexcharts-zoom-rect"), this.selectionRect.node.classList.add("apexcharts-selection-rect"), a.globals.dom.elGraphical.add(this.zoomRect), a.globals.dom.elGraphical.add(this.selectionRect), "x" === a.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({
                        minX: 0,
                        minY: 0,
                        maxX: a.globals.gridWidth,
                        maxY: a.globals.gridHeight
                    }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : "y" === a.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({
                        minX: 0,
                        maxX: a.globals.gridWidth
                    }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : this.slDraggableRect = this.selectionRect.draggable().on("dragmove", this.selectionDragging.bind(this, "dragging")), this.preselectedSelection(), this.hoverArea = a.globals.dom.baseEl.querySelector("".concat(a.globals.chartClass, " .apexcharts-svg")), this.hoverArea.classList.add("apexcharts-zoomable"), this.eventList.forEach((function (t) {
                        e.hoverArea.addEventListener(t, r.svgMouseEvents.bind(r, i), {capture: !1, passive: !0})
                    }))
                }
            }, {
                key: "destroy", value: function () {
                    this.slDraggableRect && (this.slDraggableRect.draggable(!1), this.slDraggableRect.off(), this.selectionRect.off()), this.selectionRect = null, this.zoomRect = null, this.gridRect = null
                }
            }, {
                key: "svgMouseEvents", value: function (t, e) {
                    var i = this.w, a = this, r = this.ctx.toolbar,
                        s = i.globals.zoomEnabled ? i.config.chart.zoom.type : i.config.chart.selection.type,
                        n = i.config.chart.toolbar.autoSelected;
                    if (e.shiftKey ? (this.shiftWasPressed = !0, r.enableZoomPanFromToolbar("pan" === n ? "zoom" : "pan")) : this.shiftWasPressed && (r.enableZoomPanFromToolbar(n), this.shiftWasPressed = !1), e.target) {
                        var o, l = e.target.classList;
                        if (e.target.parentNode && null !== e.target.parentNode && (o = e.target.parentNode.classList), !(l.contains("apexcharts-selection-rect") || l.contains("apexcharts-legend-marker") || l.contains("apexcharts-legend-text") || o && o.contains("apexcharts-toolbar"))) {
                            if (a.clientX = "touchmove" === e.type || "touchstart" === e.type ? e.touches[0].clientX : "touchend" === e.type ? e.changedTouches[0].clientX : e.clientX, a.clientY = "touchmove" === e.type || "touchstart" === e.type ? e.touches[0].clientY : "touchend" === e.type ? e.changedTouches[0].clientY : e.clientY, "mousedown" === e.type && 1 === e.which) {
                                var c = a.gridRect.getBoundingClientRect();
                                a.startX = a.clientX - c.left, a.startY = a.clientY - c.top, a.dragged = !1, a.w.globals.mousedown = !0
                            }
                            if (("mousemove" === e.type && 1 === e.which || "touchmove" === e.type) && (a.dragged = !0, i.globals.panEnabled ? (i.globals.selection = null, a.w.globals.mousedown && a.panDragging({
                                context: a,
                                zoomtype: s,
                                xyRatios: t
                            })) : (a.w.globals.mousedown && i.globals.zoomEnabled || a.w.globals.mousedown && i.globals.selectionEnabled) && (a.selection = a.selectionDrawing({
                                context: a,
                                zoomtype: s
                            }))), "mouseup" === e.type || "touchend" === e.type || "mouseleave" === e.type) {
                                var h = a.gridRect.getBoundingClientRect();
                                a.w.globals.mousedown && (a.endX = a.clientX - h.left, a.endY = a.clientY - h.top, a.dragX = Math.abs(a.endX - a.startX), a.dragY = Math.abs(a.endY - a.startY), (i.globals.zoomEnabled || i.globals.selectionEnabled) && a.selectionDrawn({
                                    context: a,
                                    zoomtype: s
                                }), i.globals.panEnabled && i.config.xaxis.convertedCatToNumeric && a.delayedPanScrolled()), i.globals.zoomEnabled && a.hideSelectionRect(this.selectionRect), a.dragged = !1, a.w.globals.mousedown = !1
                            }
                            this.makeSelectionRectDraggable()
                        }
                    }
                }
            }, {
                key: "makeSelectionRectDraggable", value: function () {
                    var t = this.w;
                    if (this.selectionRect) {
                        var e = this.selectionRect.node.getBoundingClientRect();
                        e.width > 0 && e.height > 0 && this.slDraggableRect.selectize({
                            points: "l, r",
                            pointSize: 8,
                            pointType: "rect"
                        }).resize({
                            constraint: {
                                minX: 0,
                                minY: 0,
                                maxX: t.globals.gridWidth,
                                maxY: t.globals.gridHeight
                            }
                        }).on("resizing", this.selectionDragging.bind(this, "resizing"))
                    }
                }
            }, {
                key: "preselectedSelection", value: function () {
                    var t = this.w, e = this.xyRatios;
                    if (!t.globals.zoomEnabled) if (void 0 !== t.globals.selection && null !== t.globals.selection) this.drawSelectionRect(t.globals.selection); else if (void 0 !== t.config.chart.selection.xaxis.min && void 0 !== t.config.chart.selection.xaxis.max) {
                        var i = (t.config.chart.selection.xaxis.min - t.globals.minX) / e.xRatio,
                            a = t.globals.gridWidth - (t.globals.maxX - t.config.chart.selection.xaxis.max) / e.xRatio - i;
                        t.globals.isRangeBar && (i = (t.config.chart.selection.xaxis.min - t.globals.yAxisScale[0].niceMin) / e.invertedYRatio, a = (t.config.chart.selection.xaxis.max - t.config.chart.selection.xaxis.min) / e.invertedYRatio);
                        var r = {
                            x: i,
                            y: 0,
                            width: a,
                            height: t.globals.gridHeight,
                            translateX: 0,
                            translateY: 0,
                            selectionEnabled: !0
                        };
                        this.drawSelectionRect(r), this.makeSelectionRectDraggable(), "function" == typeof t.config.chart.events.selection && t.config.chart.events.selection(this.ctx, {
                            xaxis: {
                                min: t.config.chart.selection.xaxis.min,
                                max: t.config.chart.selection.xaxis.max
                            }, yaxis: {}
                        })
                    }
                }
            }, {
                key: "drawSelectionRect", value: function (t) {
                    var e = t.x, i = t.y, a = t.width, r = t.height, s = t.translateX, n = void 0 === s ? 0 : s,
                        o = t.translateY, l = void 0 === o ? 0 : o, c = this.w, h = this.zoomRect,
                        d = this.selectionRect;
                    if (this.dragged || null !== c.globals.selection) {
                        var u = {transform: "translate(" + n + ", " + l + ")"};
                        c.globals.zoomEnabled && this.dragged && (a < 0 && (a = 1), h.attr({
                            x: e,
                            y: i,
                            width: a,
                            height: r,
                            fill: c.config.chart.zoom.zoomedArea.fill.color,
                            "fill-opacity": c.config.chart.zoom.zoomedArea.fill.opacity,
                            stroke: c.config.chart.zoom.zoomedArea.stroke.color,
                            "stroke-width": c.config.chart.zoom.zoomedArea.stroke.width,
                            "stroke-opacity": c.config.chart.zoom.zoomedArea.stroke.opacity
                        }), g.setAttrs(h.node, u)), c.globals.selectionEnabled && (d.attr({
                            x: e,
                            y: i,
                            width: a > 0 ? a : 0,
                            height: r > 0 ? r : 0,
                            fill: c.config.chart.selection.fill.color,
                            "fill-opacity": c.config.chart.selection.fill.opacity,
                            stroke: c.config.chart.selection.stroke.color,
                            "stroke-width": c.config.chart.selection.stroke.width,
                            "stroke-dasharray": c.config.chart.selection.stroke.dashArray,
                            "stroke-opacity": c.config.chart.selection.stroke.opacity
                        }), g.setAttrs(d.node, u))
                    }
                }
            }, {
                key: "hideSelectionRect", value: function (t) {
                    t && t.attr({x: 0, y: 0, width: 0, height: 0})
                }
            }, {
                key: "selectionDrawing", value: function (t) {
                    var e, i = t.context, a = t.zoomtype, r = this.w, s = i, n = this.gridRect.getBoundingClientRect(),
                        o = s.startX - 1, l = s.startY, c = !1, h = !1, d = s.clientX - n.left - o,
                        u = s.clientY - n.top - l;
                    return Math.abs(d + o) > r.globals.gridWidth ? d = r.globals.gridWidth - o : s.clientX - n.left < 0 && (d = o), o > s.clientX - n.left && (c = !0, d = Math.abs(d)), l > s.clientY - n.top && (h = !0, u = Math.abs(u)), e = "x" === a ? {
                        x: c ? o - d : o,
                        y: 0,
                        width: d,
                        height: r.globals.gridHeight
                    } : "y" === a ? {x: 0, y: h ? l - u : l, width: r.globals.gridWidth, height: u} : {
                        x: c ? o - d : o,
                        y: h ? l - u : l,
                        width: d,
                        height: u
                    }, s.drawSelectionRect(e), s.selectionDragging("resizing"), e
                }
            }, {
                key: "selectionDragging", value: function (t, e) {
                    var i = this, a = this.w, r = this.xyRatios, s = this.selectionRect, n = 0;
                    "resizing" === t && (n = 30);
                    var o = function (t) {
                        return parseFloat(s.node.getAttribute(t))
                    }, l = {x: o("x"), y: o("y"), width: o("width"), height: o("height")};
                    a.globals.selection = l, "function" == typeof a.config.chart.events.selection && a.globals.selectionEnabled && (clearTimeout(this.w.globals.selectionResizeTimer), this.w.globals.selectionResizeTimer = window.setTimeout((function () {
                        var t, e, n, o, l = i.gridRect.getBoundingClientRect(), c = s.node.getBoundingClientRect();
                        a.globals.isRangeBar ? (t = a.globals.yAxisScale[0].niceMin + (c.left - l.left) * r.invertedYRatio, e = a.globals.yAxisScale[0].niceMin + (c.right - l.left) * r.invertedYRatio, n = 0, o = 1) : (t = a.globals.xAxisScale.niceMin + (c.left - l.left) * r.xRatio, e = a.globals.xAxisScale.niceMin + (c.right - l.left) * r.xRatio, n = a.globals.yAxisScale[0].niceMin + (l.bottom - c.bottom) * r.yRatio[0], o = a.globals.yAxisScale[0].niceMax - (c.top - l.top) * r.yRatio[0]);
                        var h = {xaxis: {min: t, max: e}, yaxis: {min: n, max: o}};
                        a.config.chart.events.selection(i.ctx, h), a.config.chart.brush.enabled && void 0 !== a.config.chart.events.brushScrolled && a.config.chart.events.brushScrolled(i.ctx, h)
                    }), n))
                }
            }, {
                key: "selectionDrawn", value: function (t) {
                    var e = t.context, i = t.zoomtype, a = this.w, s = e, n = this.xyRatios, o = this.ctx.toolbar;
                    if (s.startX > s.endX) {
                        var l = s.startX;
                        s.startX = s.endX, s.endX = l
                    }
                    if (s.startY > s.endY) {
                        var c = s.startY;
                        s.startY = s.endY, s.endY = c
                    }
                    var h = void 0, d = void 0;
                    a.globals.isRangeBar ? (h = a.globals.yAxisScale[0].niceMin + s.startX * n.invertedYRatio, d = a.globals.yAxisScale[0].niceMin + s.endX * n.invertedYRatio) : (h = a.globals.xAxisScale.niceMin + s.startX * n.xRatio, d = a.globals.xAxisScale.niceMin + s.endX * n.xRatio);
                    var u = [], g = [];
                    if (a.config.yaxis.forEach((function (t, e) {
                        u.push(a.globals.yAxisScale[e].niceMax - n.yRatio[e] * s.startY), g.push(a.globals.yAxisScale[e].niceMax - n.yRatio[e] * s.endY)
                    })), s.dragged && (s.dragX > 10 || s.dragY > 10) && h !== d) if (a.globals.zoomEnabled) {
                        var f = r.clone(a.globals.initialConfig.yaxis), p = r.clone(a.globals.initialConfig.xaxis);
                        if (a.globals.zoomed = !0, a.config.xaxis.convertedCatToNumeric && (h = Math.floor(h), d = Math.floor(d), h < 1 && (h = 1, d = a.globals.dataPoints), d - h < 2 && (d = h + 1)), "xy" !== i && "x" !== i || (p = {
                            min: h,
                            max: d
                        }), "xy" !== i && "y" !== i || f.forEach((function (t, e) {
                            f[e].min = g[e], f[e].max = u[e]
                        })), a.config.chart.zoom.autoScaleYaxis) {
                            var x = new kt(s.ctx);
                            f = x.autoScaleY(s.ctx, f, {xaxis: p})
                        }
                        if (o) {
                            var b = o.getBeforeZoomRange(p, f);
                            b && (p = b.xaxis ? b.xaxis : p, f = b.yaxis ? b.yaxis : f)
                        }
                        var v = {xaxis: p};
                        a.config.chart.group || (v.yaxis = f), s.ctx.updateHelpers._updateOptions(v, !1, s.w.config.chart.animations.dynamicAnimation.enabled), "function" == typeof a.config.chart.events.zoomed && o.zoomCallback(p, f)
                    } else if (a.globals.selectionEnabled) {
                        var m, y = null;
                        m = {
                            min: h,
                            max: d
                        }, "xy" !== i && "y" !== i || (y = r.clone(a.config.yaxis)).forEach((function (t, e) {
                            y[e].min = g[e], y[e].max = u[e]
                        })), a.globals.selection = s.selection, "function" == typeof a.config.chart.events.selection && a.config.chart.events.selection(s.ctx, {
                            xaxis: m,
                            yaxis: y
                        })
                    }
                }
            }, {
                key: "panDragging", value: function (t) {
                    var e = t.context, i = this.w, a = e;
                    if (void 0 !== i.globals.lastClientPosition.x) {
                        var r = i.globals.lastClientPosition.x - a.clientX,
                            s = i.globals.lastClientPosition.y - a.clientY;
                        Math.abs(r) > Math.abs(s) && r > 0 ? this.moveDirection = "left" : Math.abs(r) > Math.abs(s) && r < 0 ? this.moveDirection = "right" : Math.abs(s) > Math.abs(r) && s > 0 ? this.moveDirection = "up" : Math.abs(s) > Math.abs(r) && s < 0 && (this.moveDirection = "down")
                    }
                    i.globals.lastClientPosition = {x: a.clientX, y: a.clientY};
                    var n = i.globals.isRangeBar ? i.globals.minY : i.globals.minX,
                        o = i.globals.isRangeBar ? i.globals.maxY : i.globals.maxX;
                    i.config.xaxis.convertedCatToNumeric || a.panScrolled(n, o)
                }
            }, {
                key: "delayedPanScrolled", value: function () {
                    var t = this.w, e = t.globals.minX, i = t.globals.maxX, a = (t.globals.maxX - t.globals.minX) / 2;
                    "left" === this.moveDirection ? (e = t.globals.minX + a, i = t.globals.maxX + a) : "right" === this.moveDirection && (e = t.globals.minX - a, i = t.globals.maxX - a), e = Math.floor(e), i = Math.floor(i), this.updateScrolledChart({
                        xaxis: {
                            min: e,
                            max: i
                        }
                    }, e, i)
                }
            }, {
                key: "panScrolled", value: function (t, e) {
                    var i = this.w, a = this.xyRatios, s = r.clone(i.globals.initialConfig.yaxis), n = a.xRatio,
                        o = i.globals.minX, l = i.globals.maxX;
                    i.globals.isRangeBar && (n = a.invertedYRatio, o = i.globals.minY, l = i.globals.maxY), "left" === this.moveDirection ? (t = o + i.globals.gridWidth / 15 * n, e = l + i.globals.gridWidth / 15 * n) : "right" === this.moveDirection && (t = o - i.globals.gridWidth / 15 * n, e = l - i.globals.gridWidth / 15 * n), i.globals.isRangeBar || (t < i.globals.initialMinX || e > i.globals.initialMaxX) && (t = o, e = l);
                    var c = {min: t, max: e};
                    i.config.chart.zoom.autoScaleYaxis && (s = new kt(this.ctx).autoScaleY(this.ctx, s, {xaxis: c}));
                    var h = {xaxis: {min: t, max: e}};
                    i.config.chart.group || (h.yaxis = s), this.updateScrolledChart(h, t, e)
                }
            }, {
                key: "updateScrolledChart", value: function (t, e, i) {
                    var a = this.w;
                    this.ctx.updateHelpers._updateOptions(t, !1, !1), "function" == typeof a.config.chart.events.scrolled && a.config.chart.events.scrolled(this.ctx, {
                        xaxis: {
                            min: e,
                            max: i
                        }
                    })
                }
            }]) && we(e.prototype, i), o
        }(me);

        function Ce(t) {
            return function (t) {
                if (Array.isArray(t)) return Pe(t)
            }(t) || function (t) {
                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
            }(t) || function (t, e) {
                if (t) {
                    if ("string" == typeof t) return Pe(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Pe(t, e) : void 0
                }
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function Pe(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, a = new Array(e); i < e; i++) a[i] = t[i];
            return a
        }

        function Le(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Oe = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.w = e.w, this.ttCtx = e, this.ctx = e.ctx
            }

            var e, i;
            return e = t, (i = [{
                key: "getNearestValues", value: function (t) {
                    var e = t.hoverArea, i = t.elGrid, a = t.clientX, s = t.clientY, n = this.w,
                        o = i.getBoundingClientRect(), l = o.width, c = o.height, h = l / (n.globals.dataPoints - 1),
                        d = c / n.globals.dataPoints, u = this.hasBars();
                    !n.globals.comboCharts && !u || n.config.xaxis.convertedCatToNumeric || (h = l / n.globals.dataPoints);
                    var g = a - o.left - n.globals.barPadForNumericAxis, f = s - o.top;
                    g < 0 || f < 0 || g > l || f > c ? (e.classList.remove("hovering-zoom"), e.classList.remove("hovering-pan")) : n.globals.zoomEnabled ? (e.classList.remove("hovering-pan"), e.classList.add("hovering-zoom")) : n.globals.panEnabled && (e.classList.remove("hovering-zoom"), e.classList.add("hovering-pan"));
                    var p = Math.round(g / h), x = Math.floor(f / d);
                    u && !n.config.xaxis.convertedCatToNumeric && (p = Math.ceil(g / h), p -= 1);
                    var b = null, v = null, m = n.globals.seriesXvalues.map((function (t) {
                        return t.filter((function (t) {
                            return r.isNumber(t)
                        }))
                    })), y = n.globals.seriesYvalues.map((function (t) {
                        return t.filter((function (t) {
                            return r.isNumber(t)
                        }))
                    }));
                    if (n.globals.isXNumeric) {
                        var w = this.ttCtx.getElGrid().getBoundingClientRect(), k = g * (w.width / l),
                            A = f * (w.height / c);
                        b = (v = this.closestInMultiArray(k, A, m, y)).index, p = v.j, null !== b && (m = n.globals.seriesXvalues[b], p = (v = this.closestInArray(k, m)).index)
                    }
                    return n.globals.capturedSeriesIndex = null === b ? -1 : b, (!p || p < 1) && (p = 0), n.globals.isBarHorizontal ? n.globals.capturedDataPointIndex = x : n.globals.capturedDataPointIndex = p, {
                        capturedSeries: b,
                        j: n.globals.isBarHorizontal ? x : p,
                        hoverX: g,
                        hoverY: f
                    }
                }
            }, {
                key: "closestInMultiArray", value: function (t, e, i, a) {
                    var r = this.w, s = 0, n = null, o = -1;
                    r.globals.series.length > 1 ? s = this.getFirstActiveXArray(i) : n = 0;
                    var l = i[s][0], c = Math.abs(t - l);
                    if (i.forEach((function (e) {
                        e.forEach((function (e, i) {
                            var a = Math.abs(t - e);
                            a <= c && (c = a, o = i)
                        }))
                    })), -1 !== o) {
                        var h = a[s][o], d = Math.abs(e - h);
                        n = s, a.forEach((function (t, i) {
                            var a = Math.abs(e - t[o]);
                            a <= d && (d = a, n = i)
                        }))
                    }
                    return {index: n, j: o}
                }
            }, {
                key: "getFirstActiveXArray", value: function (t) {
                    for (var e = this.w, i = 0, a = t.map((function (t, e) {
                        return t.length > 0 ? e : -1
                    })), r = 0; r < a.length; r++) if (-1 !== a[r] && -1 === e.globals.collapsedSeriesIndices.indexOf(r) && -1 === e.globals.ancillaryCollapsedSeriesIndices.indexOf(r)) {
                        i = a[r];
                        break
                    }
                    return i
                }
            }, {
                key: "closestInArray", value: function (t, e) {
                    for (var i = e[0], a = null, r = Math.abs(t - i), s = 0; s < e.length; s++) {
                        var n = Math.abs(t - e[s]);
                        n < r && (r = n, a = s)
                    }
                    return {index: a}
                }
            }, {
                key: "isXoverlap", value: function (t) {
                    var e = [], i = this.w.globals.seriesX.filter((function (t) {
                        return void 0 !== t[0]
                    }));
                    if (i.length > 0) for (var a = 0; a < i.length - 1; a++) void 0 !== i[a][t] && void 0 !== i[a + 1][t] && i[a][t] !== i[a + 1][t] && e.push("unEqual");
                    return 0 === e.length
                }
            }, {
                key: "isInitialSeriesSameLen", value: function () {
                    for (var t = !0, e = this.w.globals.initialSeries, i = 0; i < e.length - 1; i++) if (e[i].data.length !== e[i + 1].data.length) {
                        t = !1;
                        break
                    }
                    return t
                }
            }, {
                key: "getBarsHeight", value: function (t) {
                    return Ce(t).reduce((function (t, e) {
                        return t + e.getBBox().height
                    }), 0)
                }
            }, {
                key: "getElMarkers", value: function (t) {
                    return "number" == typeof t ? this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:realIndex='".concat(t, "'] .apexcharts-series-markers-wrap > *")) : this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap > *")
                }
            }, {
                key: "getAllMarkers", value: function () {
                    var t = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap");
                    (t = Ce(t)).sort((function (t, e) {
                        var i = Number(t.getAttribute("data:realIndex")), a = Number(e.getAttribute("data:realIndex"));
                        return a < i ? 1 : a > i ? -1 : 0
                    }));
                    var e = [];
                    return t.forEach((function (t) {
                        e.push(t.querySelector(".apexcharts-marker"))
                    })), e
                }
            }, {
                key: "hasMarkers", value: function (t) {
                    return this.getElMarkers(t).length > 0
                }
            }, {
                key: "getElBars", value: function () {
                    return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-boxPlot-series, .apexcharts-rangebar-series")
                }
            }, {
                key: "hasBars", value: function () {
                    return this.getElBars().length > 0
                }
            }, {
                key: "getHoverMarkerSize", value: function (t) {
                    var e = this.w, i = e.config.markers.hover.size;
                    return void 0 === i && (i = e.globals.markers.size[t] + e.config.markers.hover.sizeOffset), i
                }
            }, {
                key: "toggleAllTooltipSeriesGroups", value: function (t) {
                    var e = this.w, i = this.ttCtx;
                    0 === i.allTooltipSeriesGroups.length && (i.allTooltipSeriesGroups = e.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));
                    for (var a = i.allTooltipSeriesGroups, r = 0; r < a.length; r++) "enable" === t ? (a[r].classList.add("apexcharts-active"), a[r].style.display = e.config.tooltip.items.display) : (a[r].classList.remove("apexcharts-active"), a[r].style.display = "none")
                }
            }]) && Le(e.prototype, i), t
        }();

        function Te(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, a)
            }
            return i
        }

        function Ie(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Te(Object(i), !0).forEach((function (e) {
                    Ee(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Te(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function Ee(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function Me(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var ze = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.w = e.w, this.ctx = e.ctx, this.ttCtx = e, this.tooltipUtil = new Oe(e)
            }

            var e, i;
            return e = t, (i = [{
                key: "drawSeriesTexts", value: function (t) {
                    var e = t.shared, i = void 0 === e || e, a = t.ttItems, r = t.i, s = void 0 === r ? 0 : r, n = t.j,
                        o = void 0 === n ? null : n, l = t.y1, c = t.y2, h = t.e, d = this.w;
                    void 0 !== d.config.tooltip.custom ? this.handleCustomTooltip({
                        i: s,
                        j: o,
                        y1: l,
                        y2: c,
                        w: d
                    }) : this.toggleActiveInactiveSeries(i);
                    var u = this.getValuesToPrint({i: s, j: o});
                    this.printLabels({i: s, j: o, values: u, ttItems: a, shared: i, e: h});
                    var g = this.ttCtx.getElTooltip();
                    this.ttCtx.tooltipRect.ttWidth = g.getBoundingClientRect().width, this.ttCtx.tooltipRect.ttHeight = g.getBoundingClientRect().height
                }
            }, {
                key: "printLabels", value: function (t) {
                    var e, i = this, a = t.i, r = t.j, s = t.values, n = t.ttItems, o = t.shared, l = t.e, c = this.w,
                        h = [], d = function (t) {
                            return c.globals.seriesGoals[t] && c.globals.seriesGoals[t][r] && Array.isArray(c.globals.seriesGoals[t][r])
                        }, u = s.xVal, g = s.zVal, f = s.xAxisTTVal, p = "", x = c.globals.colors[a];
                    null !== r && c.config.plotOptions.bar.distributed && (x = c.globals.colors[r]);
                    for (var b = function (t, s) {
                        var b = i.getFormatters(a);
                        p = i.getSeriesName({
                            fn: b.yLbTitleFormatter,
                            index: a,
                            seriesIndex: a,
                            j: r
                        }), "treemap" === c.config.chart.type && (p = b.yLbTitleFormatter(String(c.config.series[a].data[r].x), {
                            series: c.globals.series,
                            seriesIndex: a,
                            dataPointIndex: r,
                            w: c
                        }));
                        var v = c.config.tooltip.inverseOrder ? s : t;
                        if (c.globals.axisCharts) {
                            var m = function (t) {
                                var e, i, a, s;
                                return c.globals.isRangeData ? b.yLbFormatter(null === (e = c.globals.seriesRangeStart) || void 0 === e || null === (i = e[t]) || void 0 === i ? void 0 : i[r], {
                                    series: c.globals.seriesRangeStart,
                                    seriesIndex: t,
                                    dataPointIndex: r,
                                    w: c
                                }) + " - " + b.yLbFormatter(null === (a = c.globals.seriesRangeEnd) || void 0 === a || null === (s = a[t]) || void 0 === s ? void 0 : s[r], {
                                    series: c.globals.seriesRangeEnd,
                                    seriesIndex: t,
                                    dataPointIndex: r,
                                    w: c
                                }) : b.yLbFormatter(c.globals.series[t][r], {
                                    series: c.globals.series,
                                    seriesIndex: t,
                                    dataPointIndex: r,
                                    w: c
                                })
                            };
                            if (o) b = i.getFormatters(v), p = i.getSeriesName({
                                fn: b.yLbTitleFormatter,
                                index: v,
                                seriesIndex: a,
                                j: r
                            }), x = c.globals.colors[v], e = m(v), d(v) && (h = c.globals.seriesGoals[v][r].map((function (t) {
                                return {
                                    attrs: t,
                                    val: b.yLbFormatter(t.value, {seriesIndex: v, dataPointIndex: r, w: c})
                                }
                            }))); else {
                                var y,
                                    w = null == l || null === (y = l.target) || void 0 === y ? void 0 : y.getAttribute("fill");
                                w && (x = -1 !== w.indexOf("url") ? document.querySelector(w.substr(4).slice(0, -1)).childNodes[0].getAttribute("stroke") : w), e = m(a), d(a) && Array.isArray(c.globals.seriesGoals[a][r]) && (h = c.globals.seriesGoals[a][r].map((function (t) {
                                    return {
                                        attrs: t,
                                        val: b.yLbFormatter(t.value, {seriesIndex: a, dataPointIndex: r, w: c})
                                    }
                                })))
                            }
                        }
                        null === r && (e = b.yLbFormatter(c.globals.series[a], Ie(Ie({}, c), {}, {
                            seriesIndex: a,
                            dataPointIndex: a
                        }))), i.DOMHandling({
                            i: a,
                            t: v,
                            j: r,
                            ttItems: n,
                            values: {val: e, goalVals: h, xVal: u, xAxisTTVal: f, zVal: g},
                            seriesName: p,
                            shared: o,
                            pColor: x
                        })
                    }, v = 0, m = c.globals.series.length - 1; v < c.globals.series.length; v++, m--) b(v, m)
                }
            }, {
                key: "getFormatters", value: function (t) {
                    var e, i = this.w, a = i.globals.yLabelFormatters[t];
                    return void 0 !== i.globals.ttVal ? Array.isArray(i.globals.ttVal) ? (a = i.globals.ttVal[t] && i.globals.ttVal[t].formatter, e = i.globals.ttVal[t] && i.globals.ttVal[t].title && i.globals.ttVal[t].title.formatter) : (a = i.globals.ttVal.formatter, "function" == typeof i.globals.ttVal.title.formatter && (e = i.globals.ttVal.title.formatter)) : e = i.config.tooltip.y.title.formatter, "function" != typeof a && (a = i.globals.yLabelFormatters[0] ? i.globals.yLabelFormatters[0] : function (t) {
                        return t
                    }), "function" != typeof e && (e = function (t) {
                        return t
                    }), {yLbFormatter: a, yLbTitleFormatter: e}
                }
            }, {
                key: "getSeriesName", value: function (t) {
                    var e = t.fn, i = t.index, a = t.seriesIndex, r = t.j, s = this.w;
                    return e(String(s.globals.seriesNames[i]), {
                        series: s.globals.series,
                        seriesIndex: a,
                        dataPointIndex: r,
                        w: s
                    })
                }
            }, {
                key: "DOMHandling", value: function (t) {
                    t.i;
                    var e = t.t, i = t.j, a = t.ttItems, r = t.values, s = t.seriesName, n = t.shared, o = t.pColor,
                        l = this.w, c = this.ttCtx, h = r.val, d = r.goalVals, u = r.xVal, g = r.xAxisTTVal, f = r.zVal,
                        p = null;
                    p = a[e].children, l.config.tooltip.fillSeriesColor && (a[e].style.backgroundColor = o, p[0].style.display = "none"), c.showTooltipTitle && (null === c.tooltipTitle && (c.tooltipTitle = l.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")), c.tooltipTitle.innerHTML = u), c.isXAxisTooltipEnabled && (c.xaxisTooltipText.innerHTML = "" !== g ? g : u);
                    var x = a[e].querySelector(".apexcharts-tooltip-text-y-label");
                    x && (x.innerHTML = s || "");
                    var b = a[e].querySelector(".apexcharts-tooltip-text-y-value");
                    b && (b.innerHTML = void 0 !== h ? h : ""), p[0] && p[0].classList.contains("apexcharts-tooltip-marker") && (l.config.tooltip.marker.fillColors && Array.isArray(l.config.tooltip.marker.fillColors) && (o = l.config.tooltip.marker.fillColors[e]), p[0].style.backgroundColor = o), l.config.tooltip.marker.show || (p[0].style.display = "none");
                    var v = a[e].querySelector(".apexcharts-tooltip-text-goals-label"),
                        m = a[e].querySelector(".apexcharts-tooltip-text-goals-value");
                    if (d.length && l.globals.seriesGoals[e]) {
                        var y = function () {
                            var t = "<div >", e = "<div>";
                            d.forEach((function (i, a) {
                                t += ' <div style="display: flex"><span class="apexcharts-tooltip-marker" style="background-color: '.concat(i.attrs.strokeColor, '; height: 3px; border-radius: 0; top: 5px;"></span> ').concat(i.attrs.name, "</div>"), e += "<div>".concat(i.val, "</div>")
                            })), v.innerHTML = t + "</div>", m.innerHTML = e + "</div>"
                        };
                        n ? l.globals.seriesGoals[e][i] && Array.isArray(l.globals.seriesGoals[e][i]) ? y() : (v.innerHTML = "", m.innerHTML = "") : y()
                    } else v.innerHTML = "", m.innerHTML = "";
                    if (null !== f && (a[e].querySelector(".apexcharts-tooltip-text-z-label").innerHTML = l.config.tooltip.z.title, a[e].querySelector(".apexcharts-tooltip-text-z-value").innerHTML = void 0 !== f ? f : ""), n && p[0]) {
                        if (l.config.tooltip.hideEmptySeries) {
                            var w = a[e].querySelector(".apexcharts-tooltip-marker"),
                                k = a[e].querySelector(".apexcharts-tooltip-text");
                            0 == parseFloat(h) ? (w.style.display = "none", k.style.display = "none") : (w.style.display = "block", k.style.display = "block")
                        }
                        null == h || l.globals.ancillaryCollapsedSeriesIndices.indexOf(e) > -1 || l.globals.collapsedSeriesIndices.indexOf(e) > -1 ? p[0].parentNode.style.display = "none" : p[0].parentNode.style.display = l.config.tooltip.items.display
                    }
                }
            }, {
                key: "toggleActiveInactiveSeries", value: function (t) {
                    var e = this.w;
                    if (t) this.tooltipUtil.toggleAllTooltipSeriesGroups("enable"); else {
                        this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");
                        var i = e.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group");
                        i && (i.classList.add("apexcharts-active"), i.style.display = e.config.tooltip.items.display)
                    }
                }
            }, {
                key: "getValuesToPrint", value: function (t) {
                    var e = t.i, i = t.j, a = this.w, r = this.ctx.series.filteredSeriesX(), s = "", n = "", o = null,
                        l = null, c = {series: a.globals.series, seriesIndex: e, dataPointIndex: i, w: a},
                        h = a.globals.ttZFormatter;
                    null === i ? l = a.globals.series[e] : a.globals.isXNumeric && "treemap" !== a.config.chart.type ? (s = r[e][i], 0 === r[e].length && (s = r[this.tooltipUtil.getFirstActiveXArray(r)][i])) : s = void 0 !== a.globals.labels[i] ? a.globals.labels[i] : "";
                    var d = s;
                    return s = a.globals.isXNumeric && "datetime" === a.config.xaxis.type ? new X(this.ctx).xLabelFormat(a.globals.ttKeyFormatter, d, d, {
                        i: void 0,
                        dateFormatter: new M(this.ctx).formatDate,
                        w: this.w
                    }) : a.globals.isBarHorizontal ? a.globals.yLabelFormatters[0](d, c) : a.globals.xLabelFormatter(d, c), void 0 !== a.config.tooltip.x.formatter && (s = a.globals.ttKeyFormatter(d, c)), a.globals.seriesZ.length > 0 && a.globals.seriesZ[e].length > 0 && (o = h(a.globals.seriesZ[e][i], a)), n = "function" == typeof a.config.xaxis.tooltip.formatter ? a.globals.xaxisTooltipFormatter(d, c) : s, {
                        val: Array.isArray(l) ? l.join(" ") : l,
                        xVal: Array.isArray(s) ? s.join(" ") : s,
                        xAxisTTVal: Array.isArray(n) ? n.join(" ") : n,
                        zVal: o
                    }
                }
            }, {
                key: "handleCustomTooltip", value: function (t) {
                    var e = t.i, i = t.j, a = t.y1, r = t.y2, s = t.w, n = this.ttCtx.getElTooltip(),
                        o = s.config.tooltip.custom;
                    Array.isArray(o) && o[e] && (o = o[e]), n.innerHTML = o({
                        ctx: this.ctx,
                        series: s.globals.series,
                        seriesIndex: e,
                        dataPointIndex: i,
                        y1: a,
                        y2: r,
                        w: s
                    })
                }
            }]) && Me(e.prototype, i), t
        }();

        function Xe(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Ye = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ttCtx = e, this.ctx = e.ctx, this.w = e.w
            }

            var e, i;
            return e = t, i = [{
                key: "moveXCrosshairs", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = this.ttCtx,
                        a = this.w, r = i.getElXCrosshairs(), s = t - i.xcrosshairsWidth / 2,
                        n = a.globals.labels.slice().length;
                    if (null !== e && (s = a.globals.gridWidth / n * e), null === r || a.globals.isBarHorizontal || (r.setAttribute("x", s), r.setAttribute("x1", s), r.setAttribute("x2", s), r.setAttribute("y2", a.globals.gridHeight), r.classList.add("apexcharts-active")), s < 0 && (s = 0), s > a.globals.gridWidth && (s = a.globals.gridWidth), i.isXAxisTooltipEnabled) {
                        var o = s;
                        "tickWidth" !== a.config.xaxis.crosshairs.width && "barWidth" !== a.config.xaxis.crosshairs.width || (o = s + i.xcrosshairsWidth / 2), this.moveXAxisTooltip(o)
                    }
                }
            }, {
                key: "moveYCrosshairs", value: function (t) {
                    var e = this.ttCtx;
                    null !== e.ycrosshairs && g.setAttrs(e.ycrosshairs, {
                        y1: t,
                        y2: t
                    }), null !== e.ycrosshairsHidden && g.setAttrs(e.ycrosshairsHidden, {y1: t, y2: t})
                }
            }, {
                key: "moveXAxisTooltip", value: function (t) {
                    var e = this.w, i = this.ttCtx;
                    if (null !== i.xaxisTooltip && 0 !== i.xcrosshairsWidth) {
                        i.xaxisTooltip.classList.add("apexcharts-active");
                        var a,
                            r = i.xaxisOffY + e.config.xaxis.tooltip.offsetY + e.globals.translateY + 1 + e.config.xaxis.offsetY;
                        t -= i.xaxisTooltip.getBoundingClientRect().width / 2, isNaN(t) || (t += e.globals.translateX, a = new g(this.ctx).getTextRects(i.xaxisTooltipText.innerHTML), i.xaxisTooltipText.style.minWidth = a.width + "px", i.xaxisTooltip.style.left = t + "px", i.xaxisTooltip.style.top = r + "px")
                    }
                }
            }, {
                key: "moveYAxisTooltip", value: function (t) {
                    var e = this.w, i = this.ttCtx;
                    null === i.yaxisTTEls && (i.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
                    var a = parseInt(i.ycrosshairsHidden.getAttribute("y1"), 10), r = e.globals.translateY + a,
                        s = i.yaxisTTEls[t].getBoundingClientRect().height, n = e.globals.translateYAxisX[t] - 2;
                    e.config.yaxis[t].opposite && (n -= 26), r -= s / 2, -1 === e.globals.ignoreYAxisIndexes.indexOf(t) ? (i.yaxisTTEls[t].classList.add("apexcharts-active"), i.yaxisTTEls[t].style.top = r + "px", i.yaxisTTEls[t].style.left = n + e.config.yaxis[t].tooltip.offsetX + "px") : i.yaxisTTEls[t].classList.remove("apexcharts-active")
                }
            }, {
                key: "moveTooltip", value: function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a = this.w,
                        r = this.ttCtx, s = r.getElTooltip(), n = r.tooltipRect, o = null !== i ? parseFloat(i) : 1,
                        l = parseFloat(t) + o + 5, c = parseFloat(e) + o / 2;
                    if (l > a.globals.gridWidth / 2 && (l = l - n.ttWidth - o - 10), l > a.globals.gridWidth - n.ttWidth - 10 && (l = a.globals.gridWidth - n.ttWidth), l < -20 && (l = -20), a.config.tooltip.followCursor) {
                        var h = r.getElGrid().getBoundingClientRect();
                        (l = r.e.clientX - h.left) > a.globals.gridWidth / 2 && (l -= r.tooltipRect.ttWidth), (c = r.e.clientY + a.globals.translateY - h.top) > a.globals.gridHeight / 2 && (c -= r.tooltipRect.ttHeight)
                    } else a.globals.isBarHorizontal || n.ttHeight / 2 + c > a.globals.gridHeight && (c = a.globals.gridHeight - n.ttHeight + a.globals.translateY);
                    isNaN(l) || (l += a.globals.translateX, s.style.left = l + "px", s.style.top = c + "px")
                }
            }, {
                key: "moveMarkers", value: function (t, e) {
                    var i = this.w, a = this.ttCtx;
                    if (i.globals.markers.size[t] > 0) for (var r = i.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(t, "'] .apexcharts-marker")), s = 0; s < r.length; s++) parseInt(r[s].getAttribute("rel"), 10) === e && (a.marker.resetPointsSize(), a.marker.enlargeCurrentPoint(e, r[s])); else a.marker.resetPointsSize(), this.moveDynamicPointOnHover(e, t)
                }
            }, {
                key: "moveDynamicPointOnHover", value: function (t, e) {
                    var i, a, r = this.w, s = this.ttCtx, n = r.globals.pointsArray,
                        o = s.tooltipUtil.getHoverMarkerSize(e), l = r.config.series[e].type;
                    if (!l || "column" !== l && "candlestick" !== l && "boxPlot" !== l) {
                        i = n[e][t][0], a = n[e][t][1] ? n[e][t][1] : 0;
                        var c = r.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e, "'] .apexcharts-series-markers circle"));
                        c && a < r.globals.gridHeight && a > 0 && (c.setAttribute("r", o), c.setAttribute("cx", i), c.setAttribute("cy", a)), this.moveXCrosshairs(i), s.fixedTooltip || this.moveTooltip(i, a, o)
                    }
                }
            }, {
                key: "moveDynamicPointsOnHover", value: function (t) {
                    var e, i = this.ttCtx, a = i.w, r = 0, s = 0, n = a.globals.pointsArray;
                    e = new ot(this.ctx).getActiveConfigSeriesIndex("asc", ["line", "area", "scatter", "bubble"]);
                    var o = i.tooltipUtil.getHoverMarkerSize(e);
                    n[e] && (r = n[e][t][0], s = n[e][t][1]);
                    var l = i.tooltipUtil.getAllMarkers();
                    if (null !== l) for (var c = 0; c < a.globals.series.length; c++) {
                        var h = n[c];
                        if (a.globals.comboCharts && void 0 === h && l.splice(c, 0, null), h && h.length) {
                            var d = n[c][t][1], u = void 0;
                            if (l[c].setAttribute("cx", r), "rangeArea" === a.config.chart.type && !a.globals.comboCharts) {
                                var g = t + a.globals.series[c].length;
                                u = n[c][g][1], d -= Math.abs(d - u) / 2
                            }
                            null !== d && !isNaN(d) && d < a.globals.gridHeight + o && d + o > 0 ? (l[c] && l[c].setAttribute("r", o), l[c] && l[c].setAttribute("cy", d)) : l[c] && l[c].setAttribute("r", 0)
                        }
                    }
                    this.moveXCrosshairs(r), i.fixedTooltip || this.moveTooltip(r, s || a.globals.gridHeight, o)
                }
            }, {
                key: "moveStickyTooltipOverBars", value: function (t, e) {
                    var i = this.w, a = this.ttCtx,
                        r = i.globals.columnSeries ? i.globals.columnSeries.length : i.globals.series.length,
                        s = r >= 2 && r % 2 == 0 ? Math.floor(r / 2) : Math.floor(r / 2) + 1;
                    i.globals.isBarHorizontal && (s = new ot(this.ctx).getActiveConfigSeriesIndex("desc") + 1);
                    var n = i.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='".concat(s, "'] path[j='").concat(t, "'], .apexcharts-candlestick-series .apexcharts-series[rel='").concat(s, "'] path[j='").concat(t, "'], .apexcharts-boxPlot-series .apexcharts-series[rel='").concat(s, "'] path[j='").concat(t, "'], .apexcharts-rangebar-series .apexcharts-series[rel='").concat(s, "'] path[j='").concat(t, "']"));
                    n || "number" != typeof e || (n = i.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[data\\:realIndex='".concat(e, "'] path[j='").concat(t, "'],\n        .apexcharts-candlestick-series .apexcharts-series[data\\:realIndex='").concat(e, "'] path[j='").concat(t, "'],\n        .apexcharts-boxPlot-series .apexcharts-series[data\\:realIndex='").concat(e, "'] path[j='").concat(t, "'],\n        .apexcharts-rangebar-series .apexcharts-series[data\\:realIndex='").concat(e, "'] path[j='").concat(t, "']")));
                    var o = n ? parseFloat(n.getAttribute("cx")) : 0, l = n ? parseFloat(n.getAttribute("cy")) : 0,
                        c = n ? parseFloat(n.getAttribute("barWidth")) : 0, h = a.getElGrid().getBoundingClientRect(),
                        d = n && (n.classList.contains("apexcharts-candlestick-area") || n.classList.contains("apexcharts-boxPlot-area"));
                    i.globals.isXNumeric ? (n && !d && (o -= r % 2 != 0 ? c / 2 : 0), n && d && i.globals.comboCharts && (o -= c / 2)) : i.globals.isBarHorizontal || (o = a.xAxisTicksPositions[t - 1] + a.dataPointsDividedWidth / 2, isNaN(o) && (o = a.xAxisTicksPositions[t] - a.dataPointsDividedWidth / 2)), i.globals.isBarHorizontal ? l -= a.tooltipRect.ttHeight : i.config.tooltip.followCursor ? l = a.e.clientY - h.top - a.tooltipRect.ttHeight / 2 : l + a.tooltipRect.ttHeight + 15 > i.globals.gridHeight && (l = i.globals.gridHeight), i.globals.isBarHorizontal || this.moveXCrosshairs(o), a.fixedTooltip || this.moveTooltip(o, l || i.globals.gridHeight)
                }
            }], i && Xe(e.prototype, i), t
        }();

        function Re(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, a = new Array(e); i < e; i++) a[i] = t[i];
            return a
        }

        function Fe(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var De = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.w = e.w, this.ttCtx = e, this.ctx = e.ctx, this.tooltipPosition = new Ye(e)
            }

            var e, i;
            return e = t, i = [{
                key: "drawDynamicPoints", value: function () {
                    var t, e = this.w, i = new g(this.ctx), a = new et(this.ctx),
                        r = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
                    r = function (t) {
                        if (Array.isArray(t)) return Re(t)
                    }(t = r) || function (t) {
                        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                    }(t) || function (t, e) {
                        if (t) {
                            if ("string" == typeof t) return Re(t, e);
                            var i = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Re(t, e) : void 0
                        }
                    }(t) || function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }(), e.config.chart.stacked && r.sort((function (t, e) {
                        return parseFloat(t.getAttribute("data:realIndex")) - parseFloat(e.getAttribute("data:realIndex"))
                    }));
                    for (var s = 0; s < r.length; s++) {
                        var n = r[s].querySelector(".apexcharts-series-markers-wrap");
                        if (null !== n) {
                            var o = void 0,
                                l = "apexcharts-marker w".concat((Math.random() + 1).toString(36).substring(4));
                            "line" !== e.config.chart.type && "area" !== e.config.chart.type || e.globals.comboCharts || e.config.tooltip.intersect || (l += " no-pointer-events");
                            var c = a.getMarkerConfig({
                                cssClass: l,
                                seriesIndex: Number(n.getAttribute("data:realIndex"))
                            });
                            (o = i.drawMarker(0, 0, c)).node.setAttribute("default-marker-size", 0);
                            var h = document.createElementNS(e.globals.SVGNS, "g");
                            h.classList.add("apexcharts-series-markers"), h.appendChild(o.node), n.appendChild(h)
                        }
                    }
                }
            }, {
                key: "enlargeCurrentPoint", value: function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, r = this.w;
                    "bubble" !== r.config.chart.type && this.newPointSize(t, e);
                    var s = e.getAttribute("cx"), n = e.getAttribute("cy");
                    if (null !== i && null !== a && (s = i, n = a), this.tooltipPosition.moveXCrosshairs(s), !this.fixedTooltip) {
                        if ("radar" === r.config.chart.type) {
                            var o = this.ttCtx.getElGrid().getBoundingClientRect();
                            s = this.ttCtx.e.clientX - o.left
                        }
                        this.tooltipPosition.moveTooltip(s, n, r.config.markers.hover.size)
                    }
                }
            }, {
                key: "enlargePoints", value: function (t) {
                    for (var e = this.w, i = this, a = this.ttCtx, r = t, s = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), n = e.config.markers.hover.size, o = 0; o < s.length; o++) {
                        var l = s[o].getAttribute("rel"), c = s[o].getAttribute("index");
                        if (void 0 === n && (n = e.globals.markers.size[c] + e.config.markers.hover.sizeOffset), r === parseInt(l, 10)) {
                            i.newPointSize(r, s[o]);
                            var h = s[o].getAttribute("cx"), d = s[o].getAttribute("cy");
                            i.tooltipPosition.moveXCrosshairs(h), a.fixedTooltip || i.tooltipPosition.moveTooltip(h, d, n)
                        } else i.oldPointSize(s[o])
                    }
                }
            }, {
                key: "newPointSize", value: function (t, e) {
                    var i = this.w, a = i.config.markers.hover.size,
                        r = 0 === t ? e.parentNode.firstChild : e.parentNode.lastChild;
                    if ("0" !== r.getAttribute("default-marker-size")) {
                        var s = parseInt(r.getAttribute("index"), 10);
                        void 0 === a && (a = i.globals.markers.size[s] + i.config.markers.hover.sizeOffset), a < 0 && (a = 0), r.setAttribute("r", a)
                    }
                }
            }, {
                key: "oldPointSize", value: function (t) {
                    var e = parseFloat(t.getAttribute("default-marker-size"));
                    t.setAttribute("r", e)
                }
            }, {
                key: "resetPointsSize", value: function () {
                    for (var t = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), e = 0; e < t.length; e++) {
                        var i = parseFloat(t[e].getAttribute("default-marker-size"));
                        r.isNumber(i) && i >= 0 ? t[e].setAttribute("r", i) : t[e].setAttribute("r", 0)
                    }
                }
            }], i && Fe(e.prototype, i), t
        }();

        function He(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        const Ne = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.w = e.w;
                var i = this.w;
                this.ttCtx = e, this.isVerticalGroupedRangeBar = !i.globals.isBarHorizontal && "rangeBar" === i.config.chart.type && i.config.plotOptions.bar.rangeBarGroupRows
            }

            var e, i;
            return e = t, (i = [{
                key: "getAttr", value: function (t, e) {
                    return parseFloat(t.target.getAttribute(e))
                }
            }, {
                key: "handleHeatTreeTooltip", value: function (t) {
                    var e = t.e, i = t.opt, a = t.x, r = t.y, s = t.type, n = this.ttCtx, o = this.w;
                    if (e.target.classList.contains("apexcharts-".concat(s, "-rect"))) {
                        var l = this.getAttr(e, "i"), c = this.getAttr(e, "j"), h = this.getAttr(e, "cx"),
                            d = this.getAttr(e, "cy"), u = this.getAttr(e, "width"), g = this.getAttr(e, "height");
                        if (n.tooltipLabels.drawSeriesTexts({
                            ttItems: i.ttItems,
                            i: l,
                            j: c,
                            shared: !1,
                            e
                        }), o.globals.capturedSeriesIndex = l, o.globals.capturedDataPointIndex = c, a = h + n.tooltipRect.ttWidth / 2 + u, r = d + n.tooltipRect.ttHeight / 2 - g / 2, n.tooltipPosition.moveXCrosshairs(h + u / 2), a > o.globals.gridWidth / 2 && (a = h - n.tooltipRect.ttWidth / 2 + u), n.w.config.tooltip.followCursor) {
                            var f = o.globals.dom.elWrap.getBoundingClientRect();
                            a = o.globals.clientX - f.left - (a > o.globals.gridWidth / 2 ? n.tooltipRect.ttWidth : 0), r = o.globals.clientY - f.top - (r > o.globals.gridHeight / 2 ? n.tooltipRect.ttHeight : 0)
                        }
                    }
                    return {x: a, y: r}
                }
            }, {
                key: "handleMarkerTooltip", value: function (t) {
                    var e, i, a = t.e, s = t.opt, n = t.x, o = t.y, l = this.w, c = this.ttCtx;
                    if (a.target.classList.contains("apexcharts-marker")) {
                        var h = parseInt(s.paths.getAttribute("cx"), 10), d = parseInt(s.paths.getAttribute("cy"), 10),
                            u = parseFloat(s.paths.getAttribute("val"));
                        if (i = parseInt(s.paths.getAttribute("rel"), 10), e = parseInt(s.paths.parentNode.parentNode.parentNode.getAttribute("rel"), 10) - 1, c.intersect) {
                            var g = r.findAncestor(s.paths, "apexcharts-series");
                            g && (e = parseInt(g.getAttribute("data:realIndex"), 10))
                        }
                        if (c.tooltipLabels.drawSeriesTexts({
                            ttItems: s.ttItems,
                            i: e,
                            j: i,
                            shared: !c.showOnIntersect && l.config.tooltip.shared,
                            e: a
                        }), "mouseup" === a.type && c.markerClick(a, e, i), l.globals.capturedSeriesIndex = e, l.globals.capturedDataPointIndex = i, n = h, o = d + l.globals.translateY - 1.4 * c.tooltipRect.ttHeight, c.w.config.tooltip.followCursor) {
                            var f = c.getElGrid().getBoundingClientRect();
                            o = c.e.clientY + l.globals.translateY - f.top
                        }
                        u < 0 && (o = d), c.marker.enlargeCurrentPoint(i, s.paths, n, o)
                    }
                    return {x: n, y: o}
                }
            }, {
                key: "handleBarTooltip", value: function (t) {
                    var e, i, a = t.e, r = t.opt, s = this.w, n = this.ttCtx, o = n.getElTooltip(), l = 0, c = 0, h = 0,
                        d = this.getBarTooltipXY({e: a, opt: r});
                    e = d.i;
                    var u = d.barHeight, g = d.j;
                    s.globals.capturedSeriesIndex = e, s.globals.capturedDataPointIndex = g, s.globals.isBarHorizontal && n.tooltipUtil.hasBars() || !s.config.tooltip.shared ? (c = d.x, h = d.y, i = Array.isArray(s.config.stroke.width) ? s.config.stroke.width[e] : s.config.stroke.width, l = c) : s.globals.comboCharts || s.config.tooltip.shared || (l /= 2), isNaN(h) && (h = s.globals.svgHeight - n.tooltipRect.ttHeight);
                    var f = parseInt(r.paths.parentNode.getAttribute("data:realIndex"), 10),
                        p = s.globals.isMultipleYAxis ? s.config.yaxis[f] && s.config.yaxis[f].reversed : s.config.yaxis[0].reversed;
                    if (c + n.tooltipRect.ttWidth > s.globals.gridWidth && !p ? c -= n.tooltipRect.ttWidth : c < 0 && (c = 0), n.w.config.tooltip.followCursor) {
                        var x = n.getElGrid().getBoundingClientRect();
                        h = n.e.clientY - x.top
                    }
                    null === n.tooltip && (n.tooltip = s.globals.dom.baseEl.querySelector(".apexcharts-tooltip")), s.config.tooltip.shared || (s.globals.comboBarCount > 0 ? n.tooltipPosition.moveXCrosshairs(l + i / 2) : n.tooltipPosition.moveXCrosshairs(l)), !n.fixedTooltip && (!s.config.tooltip.shared || s.globals.isBarHorizontal && n.tooltipUtil.hasBars()) && (p && (c -= n.tooltipRect.ttWidth) < 0 && (c = 0), !p || s.globals.isBarHorizontal && n.tooltipUtil.hasBars() || (h = h + u - 2 * (s.globals.series[e][g] < 0 ? u : 0)), h = h + s.globals.translateY - n.tooltipRect.ttHeight / 2, o.style.left = c + s.globals.translateX + "px", o.style.top = h + "px")
                }
            }, {
                key: "getBarTooltipXY", value: function (t) {
                    var e = this, i = t.e, a = t.opt, r = this.w, s = null, n = this.ttCtx, o = 0, l = 0, c = 0, h = 0,
                        d = 0, u = i.target.classList;
                    if (u.contains("apexcharts-bar-area") || u.contains("apexcharts-candlestick-area") || u.contains("apexcharts-boxPlot-area") || u.contains("apexcharts-rangebar-area")) {
                        var g = i.target, f = g.getBoundingClientRect(), p = a.elGrid.getBoundingClientRect(),
                            x = f.height;
                        d = f.height;
                        var b = f.width, v = parseInt(g.getAttribute("cx"), 10), m = parseInt(g.getAttribute("cy"), 10);
                        h = parseFloat(g.getAttribute("barWidth"));
                        var y = "touchmove" === i.type ? i.touches[0].clientX : i.clientX;
                        s = parseInt(g.getAttribute("j"), 10), o = parseInt(g.parentNode.getAttribute("rel"), 10) - 1;
                        var w = g.getAttribute("data-range-y1"), k = g.getAttribute("data-range-y2");
                        r.globals.comboCharts && (o = parseInt(g.parentNode.getAttribute("data:realIndex"), 10));
                        var A = function (t) {
                            return r.globals.isXNumeric ? v - b / 2 : e.isVerticalGroupedRangeBar ? v + b / 2 : v - n.dataPointsDividedWidth + b / 2
                        }, S = function () {
                            return m - n.dataPointsDividedHeight + x / 2 - n.tooltipRect.ttHeight / 2
                        };
                        n.tooltipLabels.drawSeriesTexts({
                            ttItems: a.ttItems,
                            i: o,
                            j: s,
                            y1: w ? parseInt(w, 10) : null,
                            y2: k ? parseInt(k, 10) : null,
                            shared: !n.showOnIntersect && r.config.tooltip.shared,
                            e: i
                        }), r.config.tooltip.followCursor ? r.globals.isBarHorizontal ? (l = y - p.left + 15, c = S()) : (l = A(), c = i.clientY - p.top - n.tooltipRect.ttHeight / 2 - 15) : r.globals.isBarHorizontal ? ((l = v) < n.xyRatios.baseLineInvertedY && (l = v - n.tooltipRect.ttWidth), c = S()) : (l = A(), c = m)
                    }
                    return {x: l, y: c, barHeight: d, barWidth: h, i: o, j: s}
                }
            }]) && He(e.prototype, i), t
        }();

        function We(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        const je = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.w = e.w, this.ttCtx = e
            }

            var e, i;
            return e = t, (i = [{
                key: "drawXaxisTooltip", value: function () {
                    var t = this.w, e = this.ttCtx, i = "bottom" === t.config.xaxis.position;
                    e.xaxisOffY = i ? t.globals.gridHeight + 1 : -t.globals.xAxisHeight - t.config.xaxis.axisTicks.height + 3;
                    var a = i ? "apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom" : "apexcharts-xaxistooltip apexcharts-xaxistooltip-top",
                        r = t.globals.dom.elWrap;
                    e.isXAxisTooltipEnabled && null === t.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip") && (e.xaxisTooltip = document.createElement("div"), e.xaxisTooltip.setAttribute("class", a + " apexcharts-theme-" + t.config.tooltip.theme), r.appendChild(e.xaxisTooltip), e.xaxisTooltipText = document.createElement("div"), e.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"), e.xaxisTooltipText.style.fontFamily = t.config.xaxis.tooltip.style.fontFamily || t.config.chart.fontFamily, e.xaxisTooltipText.style.fontSize = t.config.xaxis.tooltip.style.fontSize, e.xaxisTooltip.appendChild(e.xaxisTooltipText))
                }
            }, {
                key: "drawYaxisTooltip", value: function () {
                    for (var t = this.w, e = this.ttCtx, i = function (i) {
                        var a = t.config.yaxis[i].opposite || t.config.yaxis[i].crosshairs.opposite;
                        e.yaxisOffX = a ? t.globals.gridWidth + 1 : 1;
                        var r = "apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i, a ? " apexcharts-yaxistooltip-right" : " apexcharts-yaxistooltip-left");
                        t.globals.yAxisSameScaleIndices.map((function (e, a) {
                            e.map((function (e, a) {
                                a === i && (r += t.config.yaxis[a].show ? " " : " apexcharts-yaxistooltip-hidden")
                            }))
                        }));
                        var s = t.globals.dom.elWrap;
                        null === t.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i)) && (e.yaxisTooltip = document.createElement("div"), e.yaxisTooltip.setAttribute("class", r + " apexcharts-theme-" + t.config.tooltip.theme), s.appendChild(e.yaxisTooltip), 0 === i && (e.yaxisTooltipText = []), e.yaxisTooltipText[i] = document.createElement("div"), e.yaxisTooltipText[i].classList.add("apexcharts-yaxistooltip-text"), e.yaxisTooltip.appendChild(e.yaxisTooltipText[i]))
                    }, a = 0; a < t.config.yaxis.length; a++) i(a)
                }
            }, {
                key: "setXCrosshairWidth", value: function () {
                    var t = this.w, e = this.ttCtx, i = e.getElXCrosshairs();
                    if (e.xcrosshairsWidth = parseInt(t.config.xaxis.crosshairs.width, 10), t.globals.comboCharts) {
                        var a = t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
                        if (null !== a && "barWidth" === t.config.xaxis.crosshairs.width) {
                            var r = parseFloat(a.getAttribute("barWidth"));
                            e.xcrosshairsWidth = r
                        } else if ("tickWidth" === t.config.xaxis.crosshairs.width) {
                            var s = t.globals.labels.length;
                            e.xcrosshairsWidth = t.globals.gridWidth / s
                        }
                    } else if ("tickWidth" === t.config.xaxis.crosshairs.width) {
                        var n = t.globals.labels.length;
                        e.xcrosshairsWidth = t.globals.gridWidth / n
                    } else if ("barWidth" === t.config.xaxis.crosshairs.width) {
                        var o = t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
                        if (null !== o) {
                            var l = parseFloat(o.getAttribute("barWidth"));
                            e.xcrosshairsWidth = l
                        } else e.xcrosshairsWidth = 1
                    }
                    t.globals.isBarHorizontal && (e.xcrosshairsWidth = 0), null !== i && e.xcrosshairsWidth > 0 && i.setAttribute("width", e.xcrosshairsWidth)
                }
            }, {
                key: "handleYCrosshair", value: function () {
                    var t = this.w, e = this.ttCtx;
                    e.ycrosshairs = t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"), e.ycrosshairsHidden = t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden")
                }
            }, {
                key: "drawYaxisTooltipText", value: function (t, e, i) {
                    var a = this.ttCtx, r = this.w, s = r.globals.yLabelFormatters[t];
                    if (a.yaxisTooltips[t]) {
                        var n = a.getElGrid().getBoundingClientRect(), o = (e - n.top) * i.yRatio[t],
                            l = r.globals.maxYArr[t] - r.globals.minYArr[t], c = r.globals.minYArr[t] + (l - o);
                        a.tooltipPosition.moveYCrosshairs(e - n.top), a.yaxisTooltipText[t].innerHTML = s(c), a.tooltipPosition.moveYAxisTooltip(t)
                    }
                }
            }]) && We(e.prototype, i), t
        }();

        function Be(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, a)
            }
            return i
        }

        function Ge(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Be(Object(i), !0).forEach((function (e) {
                    Ve(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Be(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function Ve(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function _e(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Ue = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w;
                var i = this.w;
                this.tConfig = i.config.tooltip, this.tooltipUtil = new Oe(this), this.tooltipLabels = new ze(this), this.tooltipPosition = new Ye(this), this.marker = new De(this), this.intersect = new Ne(this), this.axesTooltip = new je(this), this.showOnIntersect = this.tConfig.intersect, this.showTooltipTitle = this.tConfig.x.show, this.fixedTooltip = this.tConfig.fixed.enabled, this.xaxisTooltip = null, this.yaxisTTEls = null, this.isBarShared = !i.globals.isBarHorizontal && this.tConfig.shared, this.lastHoverTime = Date.now()
            }

            var e, i;
            return e = t, i = [{
                key: "getElTooltip", value: function (t) {
                    return t || (t = this), t.w.globals.dom.baseEl ? t.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip") : null
                }
            }, {
                key: "getElXCrosshairs", value: function () {
                    return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs")
                }
            }, {
                key: "getElGrid", value: function () {
                    return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid")
                }
            }, {
                key: "drawTooltip", value: function (t) {
                    var e = this.w;
                    this.xyRatios = t, this.isXAxisTooltipEnabled = e.config.xaxis.tooltip.enabled && e.globals.axisCharts, this.yaxisTooltips = e.config.yaxis.map((function (t, i) {
                        return !!(t.show && t.tooltip.enabled && e.globals.axisCharts)
                    })), this.allTooltipSeriesGroups = [], e.globals.axisCharts || (this.showTooltipTitle = !1);
                    var i = document.createElement("div");
                    if (i.classList.add("apexcharts-tooltip"), e.config.tooltip.cssClass && i.classList.add(e.config.tooltip.cssClass), i.classList.add("apexcharts-theme-".concat(this.tConfig.theme)), e.globals.dom.elWrap.appendChild(i), e.globals.axisCharts) {
                        this.axesTooltip.drawXaxisTooltip(), this.axesTooltip.drawYaxisTooltip(), this.axesTooltip.setXCrosshairWidth(), this.axesTooltip.handleYCrosshair();
                        var a = new vt(this.ctx);
                        this.xAxisTicksPositions = a.getXAxisTicksPositions()
                    }
                    if (!e.globals.comboCharts && !this.tConfig.intersect && "rangeBar" !== e.config.chart.type || this.tConfig.shared || (this.showOnIntersect = !0), 0 !== e.config.markers.size && 0 !== e.globals.markers.largestSize || this.marker.drawDynamicPoints(this), e.globals.collapsedSeries.length !== e.globals.series.length) {
                        this.dataPointsDividedHeight = e.globals.gridHeight / e.globals.dataPoints, this.dataPointsDividedWidth = e.globals.gridWidth / e.globals.dataPoints, this.showTooltipTitle && (this.tooltipTitle = document.createElement("div"), this.tooltipTitle.classList.add("apexcharts-tooltip-title"), this.tooltipTitle.style.fontFamily = this.tConfig.style.fontFamily || e.config.chart.fontFamily, this.tooltipTitle.style.fontSize = this.tConfig.style.fontSize, i.appendChild(this.tooltipTitle));
                        var r = e.globals.series.length;
                        (e.globals.xyCharts || e.globals.comboCharts) && this.tConfig.shared && (r = this.showOnIntersect ? 1 : e.globals.series.length), this.legendLabels = e.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-text"), this.ttItems = this.createTTElements(r), this.addSVGEvents()
                    }
                }
            }, {
                key: "createTTElements", value: function (t) {
                    for (var e = this, i = this.w, a = [], r = this.getElTooltip(), s = function (s) {
                        var n = document.createElement("div");
                        n.classList.add("apexcharts-tooltip-series-group"), n.style.order = i.config.tooltip.inverseOrder ? t - s : s + 1, e.tConfig.shared && e.tConfig.enabledOnSeries && Array.isArray(e.tConfig.enabledOnSeries) && e.tConfig.enabledOnSeries.indexOf(s) < 0 && n.classList.add("apexcharts-tooltip-series-group-hidden");
                        var o = document.createElement("span");
                        o.classList.add("apexcharts-tooltip-marker"), o.style.backgroundColor = i.globals.colors[s], n.appendChild(o);
                        var l = document.createElement("div");
                        l.classList.add("apexcharts-tooltip-text"), l.style.fontFamily = e.tConfig.style.fontFamily || i.config.chart.fontFamily, l.style.fontSize = e.tConfig.style.fontSize, ["y", "goals", "z"].forEach((function (t) {
                            var e = document.createElement("div");
                            e.classList.add("apexcharts-tooltip-".concat(t, "-group"));
                            var i = document.createElement("span");
                            i.classList.add("apexcharts-tooltip-text-".concat(t, "-label")), e.appendChild(i);
                            var a = document.createElement("span");
                            a.classList.add("apexcharts-tooltip-text-".concat(t, "-value")), e.appendChild(a), l.appendChild(e)
                        })), n.appendChild(l), r.appendChild(n), a.push(n)
                    }, n = 0; n < t; n++) s(n);
                    return a
                }
            }, {
                key: "addSVGEvents", value: function () {
                    var t = this.w, e = t.config.chart.type, i = this.getElTooltip(),
                        a = !("bar" !== e && "candlestick" !== e && "boxPlot" !== e && "rangeBar" !== e),
                        r = "area" === e || "line" === e || "scatter" === e || "bubble" === e || "radar" === e,
                        s = t.globals.dom.Paper.node, n = this.getElGrid();
                    n && (this.seriesBound = n.getBoundingClientRect());
                    var o, l = [], c = [],
                        h = {hoverArea: s, elGrid: n, tooltipEl: i, tooltipY: l, tooltipX: c, ttItems: this.ttItems};
                    if (t.globals.axisCharts && (r ? o = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker") : a ? o = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-boxPlot-area, .apexcharts-series .apexcharts-rangebar-area") : "heatmap" !== e && "treemap" !== e || (o = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap")), o && o.length)) for (var d = 0; d < o.length; d++) l.push(o[d].getAttribute("cy")), c.push(o[d].getAttribute("cx"));
                    if (t.globals.xyCharts && !this.showOnIntersect || t.globals.comboCharts && !this.showOnIntersect || a && this.tooltipUtil.hasBars() && this.tConfig.shared) this.addPathsEventListeners([s], h); else if (a && !t.globals.comboCharts || r && this.showOnIntersect) this.addDatapointEventsListeners(h); else if (!t.globals.axisCharts || "heatmap" === e || "treemap" === e) {
                        var u = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
                        this.addPathsEventListeners(u, h)
                    }
                    if (this.showOnIntersect) {
                        var g = t.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker");
                        g.length > 0 && this.addPathsEventListeners(g, h), this.tooltipUtil.hasBars() && !this.tConfig.shared && this.addDatapointEventsListeners(h)
                    }
                }
            }, {
                key: "drawFixedTooltipRect", value: function () {
                    var t = this.w, e = this.getElTooltip(), i = e.getBoundingClientRect(), a = i.width + 10,
                        r = i.height + 10, s = this.tConfig.fixed.offsetX, n = this.tConfig.fixed.offsetY,
                        o = this.tConfig.fixed.position.toLowerCase();
                    return o.indexOf("right") > -1 && (s = s + t.globals.svgWidth - a + 10), o.indexOf("bottom") > -1 && (n = n + t.globals.svgHeight - r - 10), e.style.left = s + "px", e.style.top = n + "px", {
                        x: s,
                        y: n,
                        ttWidth: a,
                        ttHeight: r
                    }
                }
            }, {
                key: "addDatapointEventsListeners", value: function (t) {
                    var e = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-boxPlot-area, .apexcharts-rangebar-area");
                    this.addPathsEventListeners(e, t)
                }
            }, {
                key: "addPathsEventListeners", value: function (t, e) {
                    for (var i = this, a = function (a) {
                        var r = {
                            paths: t[a],
                            tooltipEl: e.tooltipEl,
                            tooltipY: e.tooltipY,
                            tooltipX: e.tooltipX,
                            elGrid: e.elGrid,
                            hoverArea: e.hoverArea,
                            ttItems: e.ttItems
                        };
                        ["mousemove", "mouseup", "touchmove", "mouseout", "touchend"].map((function (e) {
                            return t[a].addEventListener(e, i.onSeriesHover.bind(i, r), {capture: !1, passive: !0})
                        }))
                    }, r = 0; r < t.length; r++) a(r)
                }
            }, {
                key: "onSeriesHover", value: function (t, e) {
                    var i = this, a = Date.now() - this.lastHoverTime;
                    a >= 100 ? this.seriesHover(t, e) : (clearTimeout(this.seriesHoverTimeout), this.seriesHoverTimeout = setTimeout((function () {
                        i.seriesHover(t, e)
                    }), 100 - a))
                }
            }, {
                key: "seriesHover", value: function (t, e) {
                    var i = this;
                    this.lastHoverTime = Date.now();
                    var a = [], r = this.w;
                    r.config.chart.group && (a = this.ctx.getGroupedCharts()), r.globals.axisCharts && (r.globals.minX === -1 / 0 && r.globals.maxX === 1 / 0 || 0 === r.globals.dataPoints) || (a.length ? a.forEach((function (a) {
                        var r = i.getElTooltip(a), s = {
                            paths: t.paths,
                            tooltipEl: r,
                            tooltipY: t.tooltipY,
                            tooltipX: t.tooltipX,
                            elGrid: t.elGrid,
                            hoverArea: t.hoverArea,
                            ttItems: a.w.globals.tooltip.ttItems
                        };
                        a.w.globals.minX === i.w.globals.minX && a.w.globals.maxX === i.w.globals.maxX && a.w.globals.tooltip.seriesHoverByContext({
                            chartCtx: a,
                            ttCtx: a.w.globals.tooltip,
                            opt: s,
                            e
                        })
                    })) : this.seriesHoverByContext({chartCtx: this.ctx, ttCtx: this.w.globals.tooltip, opt: t, e}))
                }
            }, {
                key: "seriesHoverByContext", value: function (t) {
                    var e = t.chartCtx, i = t.ttCtx, a = t.opt, r = t.e, s = e.w, n = this.getElTooltip();
                    n && (i.tooltipRect = {
                        x: 0,
                        y: 0,
                        ttWidth: n.getBoundingClientRect().width,
                        ttHeight: n.getBoundingClientRect().height
                    }, i.e = r, !i.tooltipUtil.hasBars() || s.globals.comboCharts || i.isBarShared || this.tConfig.onDatasetHover.highlightDataSeries && new ot(e).toggleSeriesOnHover(r, r.target.parentNode), i.fixedTooltip && i.drawFixedTooltipRect(), s.globals.axisCharts ? i.axisChartsTooltips({
                        e: r,
                        opt: a,
                        tooltipRect: i.tooltipRect
                    }) : i.nonAxisChartsTooltips({e: r, opt: a, tooltipRect: i.tooltipRect}))
                }
            }, {
                key: "axisChartsTooltips", value: function (t) {
                    var e, i, a = t.e, r = t.opt, s = this.w, n = r.elGrid.getBoundingClientRect(),
                        o = "touchmove" === a.type ? a.touches[0].clientX : a.clientX,
                        l = "touchmove" === a.type ? a.touches[0].clientY : a.clientY;
                    if (this.clientY = l, this.clientX = o, s.globals.capturedSeriesIndex = -1, s.globals.capturedDataPointIndex = -1, l < n.top || l > n.top + n.height) this.handleMouseOut(r); else {
                        if (Array.isArray(this.tConfig.enabledOnSeries) && !s.config.tooltip.shared) {
                            var c = parseInt(r.paths.getAttribute("index"), 10);
                            if (this.tConfig.enabledOnSeries.indexOf(c) < 0) return void this.handleMouseOut(r)
                        }
                        var h = this.getElTooltip(), d = this.getElXCrosshairs(),
                            u = s.globals.xyCharts || "bar" === s.config.chart.type && !s.globals.isBarHorizontal && this.tooltipUtil.hasBars() && this.tConfig.shared || s.globals.comboCharts && this.tooltipUtil.hasBars();
                        if ("mousemove" === a.type || "touchmove" === a.type || "mouseup" === a.type) {
                            if (s.globals.collapsedSeries.length + s.globals.ancillaryCollapsedSeries.length === s.globals.series.length) return;
                            null !== d && d.classList.add("apexcharts-active");
                            var g = this.yaxisTooltips.filter((function (t) {
                                return !0 === t
                            }));
                            if (null !== this.ycrosshairs && g.length && this.ycrosshairs.classList.add("apexcharts-active"), u && !this.showOnIntersect) this.handleStickyTooltip(a, o, l, r); else if ("heatmap" === s.config.chart.type || "treemap" === s.config.chart.type) {
                                var f = this.intersect.handleHeatTreeTooltip({
                                    e: a,
                                    opt: r,
                                    x: e,
                                    y: i,
                                    type: s.config.chart.type
                                });
                                e = f.x, i = f.y, h.style.left = e + "px", h.style.top = i + "px"
                            } else this.tooltipUtil.hasBars() && this.intersect.handleBarTooltip({
                                e: a,
                                opt: r
                            }), this.tooltipUtil.hasMarkers() && this.intersect.handleMarkerTooltip({
                                e: a,
                                opt: r,
                                x: e,
                                y: i
                            });
                            if (this.yaxisTooltips.length) for (var p = 0; p < s.config.yaxis.length; p++) this.axesTooltip.drawYaxisTooltipText(p, l, this.xyRatios);
                            r.tooltipEl.classList.add("apexcharts-active")
                        } else "mouseout" !== a.type && "touchend" !== a.type || this.handleMouseOut(r)
                    }
                }
            }, {
                key: "nonAxisChartsTooltips", value: function (t) {
                    var e = t.e, i = t.opt, a = t.tooltipRect, r = this.w, s = i.paths.getAttribute("rel"),
                        n = this.getElTooltip(), o = r.globals.dom.elWrap.getBoundingClientRect();
                    if ("mousemove" === e.type || "touchmove" === e.type) {
                        n.classList.add("apexcharts-active"), this.tooltipLabels.drawSeriesTexts({
                            ttItems: i.ttItems,
                            i: parseInt(s, 10) - 1,
                            shared: !1
                        });
                        var l = r.globals.clientX - o.left - a.ttWidth / 2,
                            c = r.globals.clientY - o.top - a.ttHeight - 10;
                        if (n.style.left = l + "px", n.style.top = c + "px", r.config.legend.tooltipHoverFormatter) {
                            var h = s - 1,
                                d = (0, r.config.legend.tooltipHoverFormatter)(this.legendLabels[h].getAttribute("data:default-text"), {
                                    seriesIndex: h,
                                    dataPointIndex: h,
                                    w: r
                                });
                            this.legendLabels[h].innerHTML = d
                        }
                    } else "mouseout" !== e.type && "touchend" !== e.type || (n.classList.remove("apexcharts-active"), r.config.legend.tooltipHoverFormatter && this.legendLabels.forEach((function (t) {
                        var e = t.getAttribute("data:default-text");
                        t.innerHTML = decodeURIComponent(e)
                    })))
                }
            }, {
                key: "handleStickyTooltip", value: function (t, e, i, a) {
                    var r = this.w, s = this.tooltipUtil.getNearestValues({
                        context: this,
                        hoverArea: a.hoverArea,
                        elGrid: a.elGrid,
                        clientX: e,
                        clientY: i
                    }), n = s.j, o = s.capturedSeries;
                    r.globals.collapsedSeriesIndices.includes(o) && (o = null);
                    var l = a.elGrid.getBoundingClientRect();
                    if (s.hoverX < 0 || s.hoverX > l.width) this.handleMouseOut(a); else if (null !== o) this.handleStickyCapturedSeries(t, o, a, n); else if (this.tooltipUtil.isXoverlap(n) || r.globals.isBarHorizontal) {
                        var c = r.globals.series.findIndex((function (t, e) {
                            return !r.globals.collapsedSeriesIndices.includes(e)
                        }));
                        this.create(t, this, c, n, a.ttItems)
                    }
                }
            }, {
                key: "handleStickyCapturedSeries", value: function (t, e, i, a) {
                    var r = this.w;
                    if (this.tConfig.shared || null !== r.globals.series[e][a]) {
                        if (void 0 !== r.globals.series[e][a]) this.tConfig.shared && this.tooltipUtil.isXoverlap(a) && this.tooltipUtil.isInitialSeriesSameLen() ? this.create(t, this, e, a, i.ttItems) : this.create(t, this, e, a, i.ttItems, !1); else if (this.tooltipUtil.isXoverlap(a)) {
                            var s = r.globals.series.findIndex((function (t, e) {
                                return !r.globals.collapsedSeriesIndices.includes(e)
                            }));
                            this.create(t, this, s, a, i.ttItems)
                        }
                    } else this.handleMouseOut(i)
                }
            }, {
                key: "deactivateHoverFilter", value: function () {
                    for (var t = this.w, e = new g(this.ctx), i = t.globals.dom.Paper.select(".apexcharts-bar-area"), a = 0; a < i.length; a++) e.pathMouseLeave(i[a])
                }
            }, {
                key: "handleMouseOut", value: function (t) {
                    var e = this.w, i = this.getElXCrosshairs();
                    if (t.tooltipEl.classList.remove("apexcharts-active"), this.deactivateHoverFilter(), "bubble" !== e.config.chart.type && this.marker.resetPointsSize(), null !== i && i.classList.remove("apexcharts-active"), null !== this.ycrosshairs && this.ycrosshairs.classList.remove("apexcharts-active"), this.isXAxisTooltipEnabled && this.xaxisTooltip.classList.remove("apexcharts-active"), this.yaxisTooltips.length) {
                        null === this.yaxisTTEls && (this.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
                        for (var a = 0; a < this.yaxisTTEls.length; a++) this.yaxisTTEls[a].classList.remove("apexcharts-active")
                    }
                    e.config.legend.tooltipHoverFormatter && this.legendLabels.forEach((function (t) {
                        var e = t.getAttribute("data:default-text");
                        t.innerHTML = decodeURIComponent(e)
                    }))
                }
            }, {
                key: "markerClick", value: function (t, e, i) {
                    var a = this.w;
                    "function" == typeof a.config.chart.events.markerClick && a.config.chart.events.markerClick(t, this.ctx, {
                        seriesIndex: e,
                        dataPointIndex: i,
                        w: a
                    }), this.ctx.events.fireEvent("markerClick", [t, this.ctx, {
                        seriesIndex: e,
                        dataPointIndex: i,
                        w: a
                    }])
                }
            }, {
                key: "create", value: function (t, e, i, a, r) {
                    var s, n, o, l, c, h, d, u, f, p, x, b, v, m, y, w,
                        k = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null, A = this.w, S = e;
                    "mouseup" === t.type && this.markerClick(t, i, a), null === k && (k = this.tConfig.shared);
                    var C = this.tooltipUtil.hasMarkers(i), P = this.tooltipUtil.getElBars();
                    if (A.config.legend.tooltipHoverFormatter) {
                        var L = A.config.legend.tooltipHoverFormatter, O = Array.from(this.legendLabels);
                        O.forEach((function (t) {
                            var e = t.getAttribute("data:default-text");
                            t.innerHTML = decodeURIComponent(e)
                        }));
                        for (var T = 0; T < O.length; T++) {
                            var I = O[T], E = parseInt(I.getAttribute("i"), 10),
                                M = decodeURIComponent(I.getAttribute("data:default-text")),
                                z = L(M, {seriesIndex: k ? E : i, dataPointIndex: a, w: A});
                            if (k) I.innerHTML = A.globals.collapsedSeriesIndices.indexOf(E) < 0 ? z : M; else if (I.innerHTML = E === i ? z : M, i === E) break
                        }
                    }
                    var X = Ge(Ge({
                        ttItems: r,
                        i,
                        j: a
                    }, void 0 !== (null === (s = A.globals.seriesRange) || void 0 === s || null === (n = s[i]) || void 0 === n || null === (o = n[a]) || void 0 === o || null === (l = o.y[0]) || void 0 === l ? void 0 : l.y1) && {y1: null === (c = A.globals.seriesRange) || void 0 === c || null === (h = c[i]) || void 0 === h || null === (d = h[a]) || void 0 === d || null === (u = d.y[0]) || void 0 === u ? void 0 : u.y1}), void 0 !== (null === (f = A.globals.seriesRange) || void 0 === f || null === (p = f[i]) || void 0 === p || null === (x = p[a]) || void 0 === x || null === (b = x.y[0]) || void 0 === b ? void 0 : b.y2) && {y2: null === (v = A.globals.seriesRange) || void 0 === v || null === (m = v[i]) || void 0 === m || null === (y = m[a]) || void 0 === y || null === (w = y.y[0]) || void 0 === w ? void 0 : w.y2});
                    if (k) {
                        if (S.tooltipLabels.drawSeriesTexts(Ge(Ge({}, X), {}, {shared: !this.showOnIntersect && this.tConfig.shared})), C) A.globals.markers.largestSize > 0 ? S.marker.enlargePoints(a) : S.tooltipPosition.moveDynamicPointsOnHover(a); else if (this.tooltipUtil.hasBars() && (this.barSeriesHeight = this.tooltipUtil.getBarsHeight(P), this.barSeriesHeight > 0)) {
                            var Y = new g(this.ctx),
                                R = A.globals.dom.Paper.select(".apexcharts-bar-area[j='".concat(a, "']"));
                            this.deactivateHoverFilter(), this.tooltipPosition.moveStickyTooltipOverBars(a, i);
                            for (var F = 0; F < R.length; F++) Y.pathMouseEnter(R[F])
                        }
                    } else S.tooltipLabels.drawSeriesTexts(Ge({shared: !1}, X)), this.tooltipUtil.hasBars() && S.tooltipPosition.moveStickyTooltipOverBars(a, i), C && S.tooltipPosition.moveMarkers(i, a)
                }
            }], i && _e(e.prototype, i), t
        }();

        function qe(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, a)
            }
            return i
        }

        function Ze(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? qe(Object(i), !0).forEach((function (e) {
                    $e(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : qe(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function $e(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function Je(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Qe = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.w = e.w, this.barCtx = e, this.totalFormatter = this.w.config.plotOptions.bar.dataLabels.total.formatter, this.totalFormatter || (this.totalFormatter = this.w.config.dataLabels.formatter)
            }

            var e, i;
            return e = t, (i = [{
                key: "handleBarDataLabels", value: function (t) {
                    var e = t.x, i = t.y, a = t.y1, r = t.y2, s = t.i, n = t.j, o = t.realIndex, l = t.groupIndex,
                        c = t.series, h = t.barHeight, d = t.barWidth, u = t.barXPosition, f = t.barYPosition,
                        p = t.visibleSeries, x = t.renderedPath, b = this.w, v = new g(this.barCtx.ctx),
                        m = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[o] : this.barCtx.strokeWidth,
                        y = e + parseFloat(d * p), w = i + parseFloat(h * p);
                    b.globals.isXNumeric && !b.globals.isBarHorizontal && (y = e + parseFloat(d * (p + 1)), w = i + parseFloat(h * (p + 1)) - m);
                    var k, A, S = null, C = e, P = i, L = b.config.dataLabels, O = this.barCtx.barOptions.dataLabels,
                        T = this.barCtx.barOptions.dataLabels.total;
                    void 0 !== f && this.barCtx.isRangeBar && (w = f, P = f), void 0 !== u && this.barCtx.isVerticalGroupedRangeBar && (y = u, C = u);
                    var I = L.offsetX, E = L.offsetY, M = {width: 0, height: 0};
                    if (b.config.dataLabels.enabled) {
                        var z = this.barCtx.series[s][n];
                        M = v.getTextRects(b.globals.yLabelFormatters[0](z), parseFloat(L.style.fontSize))
                    }
                    var X = {
                        x: e,
                        y: i,
                        i: s,
                        j: n,
                        realIndex: o,
                        groupIndex: l || -1,
                        renderedPath: x,
                        bcx: y,
                        bcy: w,
                        barHeight: h,
                        barWidth: d,
                        textRects: M,
                        strokeWidth: m,
                        dataLabelsX: C,
                        dataLabelsY: P,
                        dataLabelsConfig: L,
                        barDataLabelsConfig: O,
                        barTotalDataLabelsConfig: T,
                        offX: I,
                        offY: E
                    };
                    return A = this.barCtx.isHorizontal ? this.calculateBarsDataLabelsPosition(X) : this.calculateColumnsDataLabelsPosition(X), x.attr({
                        cy: A.bcy,
                        cx: A.bcx,
                        j: n,
                        val: c[s][n],
                        barHeight: h,
                        barWidth: d
                    }), k = this.drawCalculatedDataLabels({
                        x: A.dataLabelsX,
                        y: A.dataLabelsY,
                        val: this.barCtx.isRangeBar ? [a, r] : c[s][n],
                        i: o,
                        j: n,
                        barWidth: d,
                        barHeight: h,
                        textRects: M,
                        dataLabelsConfig: L
                    }), b.config.chart.stacked && T.enabled && (S = this.drawTotalDataLabels({
                        x: A.totalDataLabelsX,
                        y: A.totalDataLabelsY,
                        barWidth: d,
                        barHeight: h,
                        realIndex: o,
                        textAnchor: A.totalDataLabelsAnchor,
                        val: this.getStackedTotalDataLabel({realIndex: o, j: n}),
                        dataLabelsConfig: L,
                        barTotalDataLabelsConfig: T
                    })), {dataLabels: k, totalDataLabels: S}
                }
            }, {
                key: "getStackedTotalDataLabel", value: function (t) {
                    var e = t.realIndex, i = t.j, a = this.w, r = this.barCtx.stackedSeriesTotals[i];
                    return this.totalFormatter && (r = this.totalFormatter(r, Ze(Ze({}, a), {}, {
                        seriesIndex: e,
                        dataPointIndex: i,
                        w: a
                    }))), r
                }
            }, {
                key: "calculateColumnsDataLabelsPosition", value: function (t) {
                    var e, i, a = this.w, r = t.i, s = t.j, n = t.realIndex, o = t.groupIndex, l = t.y, c = t.bcx,
                        h = t.barWidth, d = t.barHeight, u = t.textRects, f = t.dataLabelsX, p = t.dataLabelsY,
                        x = t.dataLabelsConfig, b = t.barDataLabelsConfig, v = t.barTotalDataLabelsConfig,
                        m = t.strokeWidth, y = t.offX, w = t.offY;
                    d = Math.abs(d);
                    var k = "vertical" === a.config.plotOptions.bar.dataLabels.orientation,
                        A = this.barCtx.barHelpers.getZeroValueEncounters({i: r, j: s}).zeroEncounters;
                    c = c - m / 2 + (-1 !== o ? o * h : 0);
                    var S = a.globals.gridWidth / a.globals.dataPoints;
                    this.barCtx.isVerticalGroupedRangeBar ? f += h / 2 : (f = a.globals.isXNumeric ? c - h / 2 + y : c - S + h / 2 + y, A > 0 && a.config.plotOptions.bar.hideZeroBarsWhenGrouped && (f -= h * A)), k && (f = f + u.height / 2 - m / 2 - 2);
                    var C = this.barCtx.series[r][s] < 0, P = l;
                    switch (this.barCtx.isReversed && (P = l - d + (C ? 2 * d : 0), l -= d), b.position) {
                        case"center":
                            p = k ? C ? P - d / 2 + w : P + d / 2 - w : C ? P - d / 2 + u.height / 2 + w : P + d / 2 + u.height / 2 - w;
                            break;
                        case"bottom":
                            p = k ? C ? P - d + w : P + d - w : C ? P - d + u.height + m + w : P + d - u.height / 2 + m - w;
                            break;
                        case"top":
                            p = k ? C ? P + w : P - w : C ? P - u.height / 2 - w : P + u.height + w
                    }
                    if (this.barCtx.lastActiveBarSerieIndex === n && v.enabled) {
                        var L = new g(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({
                            realIndex: n,
                            j: s
                        }), x.fontSize);
                        e = C ? P - L.height / 2 - w - v.offsetY + 18 : P + L.height + w + v.offsetY - 18, i = f + v.offsetX
                    }
                    return a.config.chart.stacked || (p < 0 ? p = 0 + m : p + u.height / 3 > a.globals.gridHeight && (p = a.globals.gridHeight - m)), {
                        bcx: c,
                        bcy: l,
                        dataLabelsX: f,
                        dataLabelsY: p,
                        totalDataLabelsX: i,
                        totalDataLabelsY: e,
                        totalDataLabelsAnchor: "middle"
                    }
                }
            }, {
                key: "calculateBarsDataLabelsPosition", value: function (t) {
                    var e = this.w, i = t.x, a = t.i, r = t.j, s = t.realIndex, n = t.groupIndex, o = t.bcy,
                        l = t.barHeight, c = t.barWidth, h = t.textRects, d = t.dataLabelsX, u = t.strokeWidth,
                        f = t.dataLabelsConfig, p = t.barDataLabelsConfig, x = t.barTotalDataLabelsConfig, b = t.offX,
                        v = t.offY, m = e.globals.gridHeight / e.globals.dataPoints;
                    c = Math.abs(c);
                    var y, w,
                        k = (o += -1 !== n ? n * l : 0) - (this.barCtx.isRangeBar ? 0 : m) + l / 2 + h.height / 2 + v - 3,
                        A = "start", S = this.barCtx.series[a][r] < 0, C = i;
                    switch (this.barCtx.isReversed && (C = i + c - (S ? 2 * c : 0), i = e.globals.gridWidth - c), p.position) {
                        case"center":
                            d = S ? C + c / 2 - b : Math.max(h.width / 2, C - c / 2) + b;
                            break;
                        case"bottom":
                            d = S ? C + c - u - Math.round(h.width / 2) - b : C - c + u + Math.round(h.width / 2) + b;
                            break;
                        case"top":
                            d = S ? C - u + Math.round(h.width / 2) - b : C - u - Math.round(h.width / 2) + b
                    }
                    if (this.barCtx.lastActiveBarSerieIndex === s && x.enabled) {
                        var P = new g(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({
                            realIndex: s,
                            j: r
                        }), f.fontSize);
                        S ? (y = C - u + Math.round(P.width / 2) - b - x.offsetX - 15, A = "end") : y = C - u - Math.round(P.width / 2) + b + x.offsetX + 15, w = k + x.offsetY
                    }
                    return e.config.chart.stacked || (d < 0 ? d = d + h.width + u : d + h.width / 2 > e.globals.gridWidth && (d = e.globals.gridWidth - h.width - u)), {
                        bcx: i,
                        bcy: o,
                        dataLabelsX: d,
                        dataLabelsY: k,
                        totalDataLabelsX: y,
                        totalDataLabelsY: w,
                        totalDataLabelsAnchor: A
                    }
                }
            }, {
                key: "drawCalculatedDataLabels", value: function (t) {
                    var e = t.x, i = t.y, a = t.val, r = t.i, s = t.j, n = t.textRects, o = t.barHeight, l = t.barWidth,
                        c = t.dataLabelsConfig, h = this.w, d = "rotate(0)";
                    "vertical" === h.config.plotOptions.bar.dataLabels.orientation && (d = "rotate(-90, ".concat(e, ", ").concat(i, ")"));
                    var u = new st(this.barCtx.ctx), f = new g(this.barCtx.ctx), p = c.formatter, x = null,
                        b = h.globals.collapsedSeriesIndices.indexOf(r) > -1;
                    if (c.enabled && !b) {
                        x = f.group({class: "apexcharts-data-labels", transform: d});
                        var v = "";
                        void 0 !== a && (v = p(a, Ze(Ze({}, h), {}, {
                            seriesIndex: r,
                            dataPointIndex: s,
                            w: h
                        }))), !a && h.config.plotOptions.bar.hideZeroBarsWhenGrouped && (v = "");
                        var m = h.globals.series[r][s] < 0, y = h.config.plotOptions.bar.dataLabels.position;
                        "vertical" === h.config.plotOptions.bar.dataLabels.orientation && ("top" === y && (c.textAnchor = m ? "end" : "start"), "center" === y && (c.textAnchor = "middle"), "bottom" === y && (c.textAnchor = m ? "end" : "start")), this.barCtx.isRangeBar && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && l < f.getTextRects(v, parseFloat(c.style.fontSize)).width && (v = ""), h.config.chart.stacked && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && (this.barCtx.isHorizontal ? n.width / 1.6 > Math.abs(l) && (v = "") : n.height / 1.6 > Math.abs(o) && (v = ""));
                        var w = Ze({}, c);
                        this.barCtx.isHorizontal && a < 0 && ("start" === c.textAnchor ? w.textAnchor = "end" : "end" === c.textAnchor && (w.textAnchor = "start")), u.plotDataLabelsText({
                            x: e,
                            y: i,
                            text: v,
                            i: r,
                            j: s,
                            parent: x,
                            dataLabelsConfig: w,
                            alwaysDrawDataLabel: !0,
                            offsetCorrection: !0
                        })
                    }
                    return x
                }
            }, {
                key: "drawTotalDataLabels", value: function (t) {
                    var e, i = t.x, a = t.y, r = t.val, s = t.barWidth, n = t.barHeight, o = t.realIndex,
                        l = t.textAnchor, c = t.barTotalDataLabelsConfig, h = this.w, d = new g(this.barCtx.ctx);
                    return c.enabled && void 0 !== i && void 0 !== a && this.barCtx.lastActiveBarSerieIndex === o && (e = d.drawText({
                        x: i - (!h.globals.isBarHorizontal && h.globals.seriesGroups.length ? s / h.globals.seriesGroups.length : 0),
                        y: a - (h.globals.isBarHorizontal && h.globals.seriesGroups.length ? n / h.globals.seriesGroups.length : 0),
                        foreColor: c.style.color,
                        text: r,
                        textAnchor: l,
                        fontFamily: c.style.fontFamily,
                        fontSize: c.style.fontSize,
                        fontWeight: c.style.fontWeight
                    })), e
                }
            }]) && Je(e.prototype, i), t
        }();

        function Ke(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, a)
            }
            return i
        }

        function ti(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Ke(Object(i), !0).forEach((function (e) {
                    ei(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Ke(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function ei(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function ii(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var ai = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.w = e.w, this.barCtx = e
            }

            var e, i;
            return e = t, i = [{
                key: "initVariables", value: function (t) {
                    var e = this.w;
                    this.barCtx.series = t, this.barCtx.totalItems = 0, this.barCtx.seriesLen = 0, this.barCtx.visibleI = -1, this.barCtx.visibleItems = 1;
                    for (var i = 0; i < t.length; i++) if (t[i].length > 0 && (this.barCtx.seriesLen = this.barCtx.seriesLen + 1, this.barCtx.totalItems += t[i].length), e.globals.isXNumeric) for (var a = 0; a < t[i].length; a++) e.globals.seriesX[i][a] > e.globals.minX && e.globals.seriesX[i][a] < e.globals.maxX && this.barCtx.visibleItems++; else this.barCtx.visibleItems = e.globals.dataPoints;
                    0 === this.barCtx.seriesLen && (this.barCtx.seriesLen = 1), this.barCtx.zeroSerieses = [], e.globals.comboCharts || this.checkZeroSeries({series: t})
                }
            }, {
                key: "initialPositions", value: function () {
                    var t, e, i, a, r, s, n, o, l = this.w, c = l.globals.dataPoints;
                    this.barCtx.isRangeBar && (c = l.globals.labels.length);
                    var h = this.barCtx.seriesLen;
                    if (l.config.plotOptions.bar.rangeBarGroupRows && (h = 1), this.barCtx.isHorizontal) r = (i = l.globals.gridHeight / c) / h, l.globals.isXNumeric && (r = (i = l.globals.gridHeight / this.barCtx.totalItems) / this.barCtx.seriesLen), r = r * parseInt(this.barCtx.barOptions.barHeight, 10) / 100, -1 === String(this.barCtx.barOptions.barHeight).indexOf("%") && (r = parseInt(this.barCtx.barOptions.barHeight, 10)), o = this.barCtx.baseLineInvertedY + l.globals.padHorizontal + (this.barCtx.isReversed ? l.globals.gridWidth : 0) - (this.barCtx.isReversed ? 2 * this.barCtx.baseLineInvertedY : 0), this.barCtx.isFunnel && (o = l.globals.gridWidth / 2), e = (i - r * this.barCtx.seriesLen) / 2; else {
                        if (a = l.globals.gridWidth / this.barCtx.visibleItems, l.config.xaxis.convertedCatToNumeric && (a = l.globals.gridWidth / l.globals.dataPoints), s = a / h * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100, l.globals.isXNumeric) {
                            var d = this.barCtx.xRatio;
                            l.globals.minXDiff && .5 !== l.globals.minXDiff && l.globals.minXDiff / d > 0 && (a = l.globals.minXDiff / d), (s = a / h * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100) < 1 && (s = 1)
                        }
                        -1 === String(this.barCtx.barOptions.columnWidth).indexOf("%") && (s = parseInt(this.barCtx.barOptions.columnWidth, 10)), n = l.globals.gridHeight - this.barCtx.baseLineY[this.barCtx.yaxisIndex] - (this.barCtx.isReversed ? l.globals.gridHeight : 0) + (this.barCtx.isReversed ? 2 * this.barCtx.baseLineY[this.barCtx.yaxisIndex] : 0), t = l.globals.padHorizontal + (a - s * this.barCtx.seriesLen) / 2
                    }
                    return l.globals.barHeight = r, l.globals.barWidth = s, {
                        x: t,
                        y: e,
                        yDivision: i,
                        xDivision: a,
                        barHeight: r,
                        barWidth: s,
                        zeroH: n,
                        zeroW: o
                    }
                }
            }, {
                key: "initializeStackedPrevVars", value: function (t) {
                    var e = t.w;
                    e.globals.hasSeriesGroups ? e.globals.seriesGroups.forEach((function (e) {
                        t[e] || (t[e] = {}), t[e].prevY = [], t[e].prevX = [], t[e].prevYF = [], t[e].prevXF = [], t[e].prevYVal = [], t[e].prevXVal = []
                    })) : (t.prevY = [], t.prevX = [], t.prevYF = [], t.prevXF = [], t.prevYVal = [], t.prevXVal = [])
                }
            }, {
                key: "initializeStackedXYVars", value: function (t) {
                    var e = t.w;
                    e.globals.hasSeriesGroups ? e.globals.seriesGroups.forEach((function (e) {
                        t[e] || (t[e] = {}), t[e].xArrj = [], t[e].xArrjF = [], t[e].xArrjVal = [], t[e].yArrj = [], t[e].yArrjF = [], t[e].yArrjVal = []
                    })) : (t.xArrj = [], t.xArrjF = [], t.xArrjVal = [], t.yArrj = [], t.yArrjF = [], t.yArrjVal = [])
                }
            }, {
                key: "getPathFillColor", value: function (t, e, i, a) {
                    var r, s, n, o, l = this.w, c = new K(this.barCtx.ctx), h = null,
                        d = this.barCtx.barOptions.distributed ? i : e;
                    return this.barCtx.barOptions.colors.ranges.length > 0 && this.barCtx.barOptions.colors.ranges.map((function (a) {
                        t[e][i] >= a.from && t[e][i] <= a.to && (h = a.color)
                    })), l.config.series[e].data[i] && l.config.series[e].data[i].fillColor && (h = l.config.series[e].data[i].fillColor), c.fillPath({
                        seriesNumber: this.barCtx.barOptions.distributed ? d : a,
                        dataPointIndex: i,
                        color: h,
                        value: t[e][i],
                        fillConfig: null === (r = l.config.series[e].data[i]) || void 0 === r ? void 0 : r.fill,
                        fillType: null !== (s = l.config.series[e].data[i]) && void 0 !== s && null !== (n = s.fill) && void 0 !== n && n.type ? null === (o = l.config.series[e].data[i]) || void 0 === o ? void 0 : o.fill.type : Array.isArray(l.config.fill.type) ? l.config.fill.type[e] : l.config.fill.type
                    })
                }
            }, {
                key: "getStrokeWidth", value: function (t, e, i) {
                    var a = 0, r = this.w;
                    return void 0 === this.barCtx.series[t][e] || null === this.barCtx.series[t][e] ? this.barCtx.isNullValue = !0 : this.barCtx.isNullValue = !1, r.config.stroke.show && (this.barCtx.isNullValue || (a = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[i] : this.barCtx.strokeWidth)), a
                }
            }, {
                key: "shouldApplyRadius", value: function (t) {
                    var e = this.w, i = !1;
                    return e.config.plotOptions.bar.borderRadius > 0 && (e.config.chart.stacked && "last" === e.config.plotOptions.bar.borderRadiusWhenStacked ? this.barCtx.lastActiveBarSerieIndex === t && (i = !0) : i = !0), i
                }
            }, {
                key: "barBackground", value: function (t) {
                    var e = t.j, i = t.i, a = t.x1, r = t.x2, s = t.y1, n = t.y2, o = t.elSeries, l = this.w,
                        c = new g(this.barCtx.ctx), h = new ot(this.barCtx.ctx).getActiveConfigSeriesIndex();
                    if (this.barCtx.barOptions.colors.backgroundBarColors.length > 0 && h === i) {
                        e >= this.barCtx.barOptions.colors.backgroundBarColors.length && (e %= this.barCtx.barOptions.colors.backgroundBarColors.length);
                        var d = this.barCtx.barOptions.colors.backgroundBarColors[e],
                            u = c.drawRect(void 0 !== a ? a : 0, void 0 !== s ? s : 0, void 0 !== r ? r : l.globals.gridWidth, void 0 !== n ? n : l.globals.gridHeight, this.barCtx.barOptions.colors.backgroundBarRadius, d, this.barCtx.barOptions.colors.backgroundBarOpacity);
                        o.add(u), u.node.classList.add("apexcharts-backgroundBar")
                    }
                }
            }, {
                key: "getColumnPaths", value: function (t) {
                    var e, i = t.barWidth, a = t.barXPosition, r = t.y1, s = t.y2, n = t.strokeWidth, o = t.seriesGroup,
                        l = t.realIndex, c = t.i, h = t.j, d = t.w, u = new g(this.barCtx.ctx);
                    (n = Array.isArray(n) ? n[l] : n) || (n = 0);
                    var f = i, p = a;
                    null !== (e = d.config.series[l].data[h]) && void 0 !== e && e.columnWidthOffset && (p = a - d.config.series[l].data[h].columnWidthOffset / 2, f = i + d.config.series[l].data[h].columnWidthOffset);
                    var x = p, b = p + f;
                    r += .001, s += .001;
                    var v = u.move(x, r), m = u.move(x, r), y = u.line(b - n, r);
                    if (d.globals.previousPaths.length > 0 && (m = this.barCtx.getPreviousPath(l, h, !1)), v = v + u.line(x, s) + u.line(b - n, s) + u.line(b - n, r) + ("around" === d.config.plotOptions.bar.borderRadiusApplication ? " Z" : " z"), m = m + u.line(x, r) + y + y + y + y + y + u.line(x, r) + ("around" === d.config.plotOptions.bar.borderRadiusApplication ? " Z" : " z"), this.shouldApplyRadius(l) && (v = u.roundPathCorners(v, d.config.plotOptions.bar.borderRadius)), d.config.chart.stacked) {
                        var w = this.barCtx;
                        d.globals.hasSeriesGroups && o && (w = this.barCtx[o]), w.yArrj.push(s), w.yArrjF.push(Math.abs(r - s)), w.yArrjVal.push(this.barCtx.series[c][h])
                    }
                    return {pathTo: v, pathFrom: m}
                }
            }, {
                key: "getBarpaths", value: function (t) {
                    var e, i = t.barYPosition, a = t.barHeight, r = t.x1, s = t.x2, n = t.strokeWidth,
                        o = t.seriesGroup, l = t.realIndex, c = t.i, h = t.j, d = t.w, u = new g(this.barCtx.ctx);
                    (n = Array.isArray(n) ? n[l] : n) || (n = 0);
                    var f = i, p = a;
                    null !== (e = d.config.series[l].data[h]) && void 0 !== e && e.barHeightOffset && (f = i - d.config.series[l].data[h].barHeightOffset / 2, p = a + d.config.series[l].data[h].barHeightOffset);
                    var x = f, b = f + p;
                    r += .001, s += .001;
                    var v = u.move(r, x), m = u.move(r, x);
                    d.globals.previousPaths.length > 0 && (m = this.barCtx.getPreviousPath(l, h, !1));
                    var y = u.line(r, b - n);
                    if (v = v + u.line(s, x) + u.line(s, b - n) + y + ("around" === d.config.plotOptions.bar.borderRadiusApplication ? " Z" : " z"), m = m + u.line(r, x) + y + y + y + y + y + u.line(r, x) + ("around" === d.config.plotOptions.bar.borderRadiusApplication ? " Z" : " z"), this.shouldApplyRadius(l) && (v = u.roundPathCorners(v, d.config.plotOptions.bar.borderRadius)), d.config.chart.stacked) {
                        var w = this.barCtx;
                        d.globals.hasSeriesGroups && o && (w = this.barCtx[o]), w.xArrj.push(s), w.xArrjF.push(Math.abs(r - s)), w.xArrjVal.push(this.barCtx.series[c][h])
                    }
                    return {pathTo: v, pathFrom: m}
                }
            }, {
                key: "checkZeroSeries", value: function (t) {
                    for (var e = t.series, i = this.w, a = 0; a < e.length; a++) {
                        for (var r = 0, s = 0; s < e[i.globals.maxValsInArrayIndex].length; s++) r += e[a][s];
                        0 === r && this.barCtx.zeroSerieses.push(a)
                    }
                }
            }, {
                key: "getXForValue", value: function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] ? null : e;
                    return null != t && (i = e + t / this.barCtx.invertedYRatio - 2 * (this.barCtx.isReversed ? t / this.barCtx.invertedYRatio : 0)), i
                }
            }, {
                key: "getYForValue", value: function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && !arguments[2] ? null : e;
                    return null != t && (i = e - t / this.barCtx.yRatio[this.barCtx.yaxisIndex] + 2 * (this.barCtx.isReversed ? t / this.barCtx.yRatio[this.barCtx.yaxisIndex] : 0)), i
                }
            }, {
                key: "getGoalValues", value: function (t, e, i, a, r) {
                    var s = this, n = this.w, o = [], l = function (a, r) {
                        var n;
                        o.push((ei(n = {}, t, "x" === t ? s.getXForValue(a, e, !1) : s.getYForValue(a, i, !1)), ei(n, "attrs", r), n))
                    };
                    if (n.globals.seriesGoals[a] && n.globals.seriesGoals[a][r] && Array.isArray(n.globals.seriesGoals[a][r]) && n.globals.seriesGoals[a][r].forEach((function (t) {
                        l(t.value, t)
                    })), this.barCtx.barOptions.isDumbbell && n.globals.seriesRange.length) {
                        var c = this.barCtx.barOptions.dumbbellColors ? this.barCtx.barOptions.dumbbellColors : n.globals.colors,
                            h = {
                                strokeHeight: "x" === t ? 0 : n.globals.markers.size[a],
                                strokeWidth: "x" === t ? n.globals.markers.size[a] : 0,
                                strokeDashArray: 0,
                                strokeLineCap: "round",
                                strokeColor: Array.isArray(c[a]) ? c[a][0] : c[a]
                            };
                        l(n.globals.seriesRangeStart[a][r], h), l(n.globals.seriesRangeEnd[a][r], ti(ti({}, h), {}, {strokeColor: Array.isArray(c[a]) ? c[a][1] : c[a]}))
                    }
                    return o
                }
            }, {
                key: "drawGoalLine", value: function (t) {
                    var e = t.barXPosition, i = t.barYPosition, a = t.goalX, r = t.goalY, s = t.barWidth,
                        n = t.barHeight, o = new g(this.barCtx.ctx),
                        l = o.group({className: "apexcharts-bar-goals-groups"});
                    l.node.classList.add("apexcharts-element-hidden"), this.barCtx.w.globals.delayedElements.push({el: l.node}), l.attr("clip-path", "url(#gridRectMarkerMask".concat(this.barCtx.w.globals.cuid, ")"));
                    var c = null;
                    return this.barCtx.isHorizontal ? Array.isArray(a) && a.forEach((function (t) {
                        var e = void 0 !== t.attrs.strokeHeight ? t.attrs.strokeHeight : n / 2, a = i + e + n / 2;
                        c = o.drawLine(t.x, a - 2 * e, t.x, a, t.attrs.strokeColor ? t.attrs.strokeColor : void 0, t.attrs.strokeDashArray, t.attrs.strokeWidth ? t.attrs.strokeWidth : 2, t.attrs.strokeLineCap), l.add(c)
                    })) : Array.isArray(r) && r.forEach((function (t) {
                        var i = void 0 !== t.attrs.strokeWidth ? t.attrs.strokeWidth : s / 2, a = e + i + s / 2;
                        c = o.drawLine(a - 2 * i, t.y, a, t.y, t.attrs.strokeColor ? t.attrs.strokeColor : void 0, t.attrs.strokeDashArray, t.attrs.strokeHeight ? t.attrs.strokeHeight : 2, t.attrs.strokeLineCap), l.add(c)
                    })), l
                }
            }, {
                key: "drawBarShadow", value: function (t) {
                    var e = t.prevPaths, i = t.currPaths, a = t.color, s = this.w, n = e.x, o = e.x1,
                        l = e.barYPosition, c = i.x, h = i.x1, d = i.barYPosition, u = l + i.barHeight,
                        f = new g(this.barCtx.ctx), p = new r,
                        x = f.move(o, u) + f.line(n, u) + f.line(c, d) + f.line(h, d) + f.line(o, u) + ("around" === s.config.plotOptions.bar.borderRadiusApplication ? " Z" : " z");
                    return f.drawPath({
                        d: x,
                        fill: p.shadeColor(.5, r.rgb2hex(a)),
                        stroke: "none",
                        strokeWidth: 0,
                        fillOpacity: 1,
                        classes: "apexcharts-bar-shadows"
                    })
                }
            }, {
                key: "getZeroValueEncounters", value: function (t) {
                    var e = t.i, i = t.j, a = this.w, r = 0, s = 0;
                    return a.globals.seriesPercent.forEach((function (t, a) {
                        t[i] && r++, a < e && 0 === t[i] && s++
                    })), {nonZeroColumns: r, zeroEncounters: s}
                }
            }], i && ii(e.prototype, i), t
        }();

        function ri(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, a)
            }
            return i
        }

        function si(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? ri(Object(i), !0).forEach((function (e) {
                    ni(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ri(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function ni(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function oi(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        const li = function () {
            function t(e, i) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w;
                var a = this.w;
                this.barOptions = a.config.plotOptions.bar, this.isHorizontal = this.barOptions.horizontal, this.strokeWidth = a.config.stroke.width, this.isNullValue = !1, this.isRangeBar = a.globals.seriesRange.length && this.isHorizontal, this.isVerticalGroupedRangeBar = !a.globals.isBarHorizontal && a.globals.seriesRange.length && a.config.plotOptions.bar.rangeBarGroupRows, this.isFunnel = this.barOptions.isFunnel, this.xyRatios = i, null !== this.xyRatios && (this.xRatio = i.xRatio, this.yRatio = i.yRatio, this.invertedXRatio = i.invertedXRatio, this.invertedYRatio = i.invertedYRatio, this.baseLineY = i.baseLineY, this.baseLineInvertedY = i.baseLineInvertedY), this.yaxisIndex = 0, this.seriesLen = 0, this.pathArr = [];
                var r = new ot(this.ctx);
                this.lastActiveBarSerieIndex = r.getActiveConfigSeriesIndex("desc", ["bar", "column"]);
                var s = r.getBarSeriesIndices(), n = new p(this.ctx);
                this.stackedSeriesTotals = n.getStackedSeriesTotals(this.w.config.series.map((function (t, e) {
                    return -1 === s.indexOf(e) ? e : -1
                })).filter((function (t) {
                    return -1 !== t
                }))), this.barHelpers = new ai(this)
            }

            var e, i;
            return e = t, (i = [{
                key: "draw", value: function (t, e) {
                    var i = this.w, a = new g(this.ctx), s = new p(this.ctx, i);
                    t = s.getLogSeries(t), this.series = t, this.yRatio = s.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t);
                    var n = a.group({class: "apexcharts-bar-series apexcharts-plot-series"});
                    i.config.dataLabels.enabled && this.totalItems > this.barOptions.dataLabels.maxItems && console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering - ApexCharts");
                    for (var o = 0, l = 0; o < t.length; o++, l++) {
                        var c, h, d, u, f = void 0, x = void 0, b = [], v = [], m = i.globals.comboCharts ? e[o] : o,
                            y = a.group({
                                class: "apexcharts-series",
                                rel: o + 1,
                                seriesName: r.escapeString(i.globals.seriesNames[m]),
                                "data:realIndex": m
                            });
                        this.ctx.series.addCollapsedClassToSeries(y, m), t[o].length > 0 && (this.visibleI = this.visibleI + 1);
                        var w = 0, k = 0;
                        this.yRatio.length > 1 && (this.yaxisIndex = m), this.isReversed = i.config.yaxis[this.yaxisIndex] && i.config.yaxis[this.yaxisIndex].reversed;
                        var A = this.barHelpers.initialPositions();
                        x = A.y, w = A.barHeight, h = A.yDivision, u = A.zeroW, f = A.x, k = A.barWidth, c = A.xDivision, d = A.zeroH, this.horizontal || v.push(f + k / 2);
                        var S = a.group({class: "apexcharts-datalabels", "data:realIndex": m});
                        i.globals.delayedElements.push({el: S.node}), S.node.classList.add("apexcharts-element-hidden");
                        var C = a.group({class: "apexcharts-bar-goals-markers"}),
                            P = a.group({class: "apexcharts-bar-shadows"});
                        i.globals.delayedElements.push({el: P.node}), P.node.classList.add("apexcharts-element-hidden");
                        for (var L = 0; L < i.globals.dataPoints; L++) {
                            var O = this.barHelpers.getStrokeWidth(o, L, m), T = null, I = {
                                indexes: {i: o, j: L, realIndex: m, bc: l},
                                x: f,
                                y: x,
                                strokeWidth: O,
                                elSeries: y
                            };
                            this.isHorizontal ? (T = this.drawBarPaths(si(si({}, I), {}, {
                                barHeight: w,
                                zeroW: u,
                                yDivision: h
                            })), k = this.series[o][L] / this.invertedYRatio) : (T = this.drawColumnPaths(si(si({}, I), {}, {
                                xDivision: c,
                                barWidth: k,
                                zeroH: d
                            })), w = this.series[o][L] / this.yRatio[this.yaxisIndex]);
                            var E = this.barHelpers.getPathFillColor(t, o, L, m);
                            if (this.isFunnel && this.barOptions.isFunnel3d && this.pathArr.length && L > 0) {
                                var M = this.barHelpers.drawBarShadow({
                                    color: "string" == typeof E && -1 === (null == E ? void 0 : E.indexOf("url")) ? E : r.hexToRgba(i.globals.colors[o]),
                                    prevPaths: this.pathArr[this.pathArr.length - 1],
                                    currPaths: T
                                });
                                M && P.add(M)
                            }
                            this.pathArr.push(T);
                            var z = this.barHelpers.drawGoalLine({
                                barXPosition: T.barXPosition,
                                barYPosition: T.barYPosition,
                                goalX: T.goalX,
                                goalY: T.goalY,
                                barHeight: w,
                                barWidth: k
                            });
                            z && C.add(z), x = T.y, f = T.x, L > 0 && v.push(f + k / 2), b.push(x), this.renderSeries({
                                realIndex: m,
                                pathFill: E,
                                j: L,
                                i: o,
                                pathFrom: T.pathFrom,
                                pathTo: T.pathTo,
                                strokeWidth: O,
                                elSeries: y,
                                x: f,
                                y: x,
                                series: t,
                                barHeight: T.barHeight ? T.barHeight : w,
                                barWidth: T.barWidth ? T.barWidth : k,
                                elDataLabelsWrap: S,
                                elGoalsMarkers: C,
                                elBarShadows: P,
                                visibleSeries: this.visibleI,
                                type: "bar"
                            })
                        }
                        i.globals.seriesXvalues[m] = v, i.globals.seriesYvalues[m] = b, n.add(y)
                    }
                    return n
                }
            }, {
                key: "renderSeries", value: function (t) {
                    var e = t.realIndex, i = t.pathFill, a = t.lineFill, r = t.j, s = t.i, n = t.groupIndex,
                        o = t.pathFrom, c = t.pathTo, h = t.strokeWidth, d = t.elSeries, u = t.x, f = t.y, p = t.y1,
                        x = t.y2, b = t.series, v = t.barHeight, m = t.barWidth, y = t.barXPosition, w = t.barYPosition,
                        k = t.elDataLabelsWrap, A = t.elGoalsMarkers, S = t.elBarShadows, C = t.visibleSeries,
                        P = t.type, L = this.w, O = new g(this.ctx);
                    a || (a = this.barOptions.distributed ? L.globals.stroke.colors[r] : L.globals.stroke.colors[e]), L.config.series[s].data[r] && L.config.series[s].data[r].strokeColor && (a = L.config.series[s].data[r].strokeColor), this.isNullValue && (i = "none");
                    var T = r / L.config.chart.animations.animateGradually.delay * (L.config.chart.animations.speed / L.globals.dataPoints) / 2.4,
                        I = O.renderPaths({
                            i: s,
                            j: r,
                            realIndex: e,
                            pathFrom: o,
                            pathTo: c,
                            stroke: a,
                            strokeWidth: h,
                            strokeLineCap: L.config.stroke.lineCap,
                            fill: i,
                            animationDelay: T,
                            initialSpeed: L.config.chart.animations.speed,
                            dataChangeSpeed: L.config.chart.animations.dynamicAnimation.speed,
                            className: "apexcharts-".concat(P, "-area")
                        });
                    I.attr("clip-path", "url(#gridRectMask".concat(L.globals.cuid, ")"));
                    var E = L.config.forecastDataPoints;
                    E.count > 0 && r >= L.globals.dataPoints - E.count && (I.node.setAttribute("stroke-dasharray", E.dashArray), I.node.setAttribute("stroke-width", E.strokeWidth), I.node.setAttribute("fill-opacity", E.fillOpacity)), void 0 !== p && void 0 !== x && (I.attr("data-range-y1", p), I.attr("data-range-y2", x)), new l(this.ctx).setSelectionFilter(I, e, r), d.add(I);
                    var M = new Qe(this).handleBarDataLabels({
                        x: u,
                        y: f,
                        y1: p,
                        y2: x,
                        i: s,
                        j: r,
                        series: b,
                        realIndex: e,
                        groupIndex: n,
                        barHeight: v,
                        barWidth: m,
                        barXPosition: y,
                        barYPosition: w,
                        renderedPath: I,
                        visibleSeries: C
                    });
                    return null !== M.dataLabels && k.add(M.dataLabels), M.totalDataLabels && k.add(M.totalDataLabels), d.add(k), A && d.add(A), S && d.add(S), d
                }
            }, {
                key: "drawBarPaths", value: function (t) {
                    var e, i = t.indexes, a = t.barHeight, r = t.strokeWidth, s = t.zeroW, n = t.x, o = t.y,
                        l = t.yDivision, c = t.elSeries, h = this.w, d = i.i, u = i.j;
                    if (h.globals.isXNumeric) e = (o = (h.globals.seriesX[d][u] - h.globals.minX) / this.invertedXRatio - a) + a * this.visibleI; else if (h.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
                        var g = 0, f = 0;
                        h.globals.seriesPercent.forEach((function (t, e) {
                            t[u] && g++, e < d && 0 === t[u] && f++
                        })), g > 0 && (a = this.seriesLen * a / g), e = o + a * this.visibleI, e -= a * f
                    } else e = o + a * this.visibleI;
                    this.isFunnel && (s -= (this.barHelpers.getXForValue(this.series[d][u], s) - s) / 2), n = this.barHelpers.getXForValue(this.series[d][u], s);
                    var p = this.barHelpers.getBarpaths({
                        barYPosition: e,
                        barHeight: a,
                        x1: s,
                        x2: n,
                        strokeWidth: r,
                        series: this.series,
                        realIndex: i.realIndex,
                        i: d,
                        j: u,
                        w: h
                    });
                    return h.globals.isXNumeric || (o += l), this.barHelpers.barBackground({
                        j: u,
                        i: d,
                        y1: e - a * this.visibleI,
                        y2: a * this.seriesLen,
                        elSeries: c
                    }), {
                        pathTo: p.pathTo,
                        pathFrom: p.pathFrom,
                        x1: s,
                        x: n,
                        y: o,
                        goalX: this.barHelpers.getGoalValues("x", s, null, d, u),
                        barYPosition: e,
                        barHeight: a
                    }
                }
            }, {
                key: "drawColumnPaths", value: function (t) {
                    var e, i = t.indexes, a = t.x, r = t.y, s = t.xDivision, n = t.barWidth, o = t.zeroH,
                        l = t.strokeWidth, c = t.elSeries, h = this.w, d = i.realIndex, u = i.i, g = i.j, f = i.bc;
                    if (h.globals.isXNumeric) {
                        var p = this.getBarXForNumericXAxis({x: a, j: g, realIndex: d, barWidth: n});
                        a = p.x, e = p.barXPosition
                    } else if (h.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
                        var x = this.barHelpers.getZeroValueEncounters({i: u, j: g}), b = x.nonZeroColumns,
                            v = x.zeroEncounters;
                        b > 0 && (n = this.seriesLen * n / b), e = a + n * this.visibleI, e -= n * v
                    } else e = a + n * this.visibleI;
                    r = this.barHelpers.getYForValue(this.series[u][g], o);
                    var m = this.barHelpers.getColumnPaths({
                        barXPosition: e,
                        barWidth: n,
                        y1: o,
                        y2: r,
                        strokeWidth: l,
                        series: this.series,
                        realIndex: i.realIndex,
                        i: u,
                        j: g,
                        w: h
                    });
                    return h.globals.isXNumeric || (a += s), this.barHelpers.barBackground({
                        bc: f,
                        j: g,
                        i: u,
                        x1: e - l / 2 - n * this.visibleI,
                        x2: n * this.seriesLen + l / 2,
                        elSeries: c
                    }), {
                        pathTo: m.pathTo,
                        pathFrom: m.pathFrom,
                        x: a,
                        y: r,
                        goalY: this.barHelpers.getGoalValues("y", null, o, u, g),
                        barXPosition: e,
                        barWidth: n
                    }
                }
            }, {
                key: "getBarXForNumericXAxis", value: function (t) {
                    var e = t.x, i = t.barWidth, a = t.realIndex, r = t.j, s = this.w, n = a;
                    return s.globals.seriesX[a].length || (n = s.globals.maxValsInArrayIndex), s.globals.seriesX[n][r] && (e = (s.globals.seriesX[n][r] - s.globals.minX) / this.xRatio - i * this.seriesLen / 2), {
                        barXPosition: e + i * this.visibleI,
                        x: e
                    }
                }
            }, {
                key: "getPreviousPath", value: function (t, e) {
                    for (var i, a = this.w, r = 0; r < a.globals.previousPaths.length; r++) {
                        var s = a.globals.previousPaths[r];
                        s.paths && s.paths.length > 0 && parseInt(s.realIndex, 10) === parseInt(t, 10) && void 0 !== a.globals.previousPaths[r].paths[e] && (i = a.globals.previousPaths[r].paths[e].d)
                    }
                    return i
                }
            }]) && oi(e.prototype, i), t
        }();

        function ci(t) {
            return ci = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, ci(t)
        }

        function hi(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, a)
            }
            return i
        }

        function di(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? hi(Object(i), !0).forEach((function (e) {
                    ui(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : hi(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function ui(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function gi(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        function fi(t, e) {
            return fi = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            }, fi(t, e)
        }

        function pi(t) {
            return pi = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }, pi(t)
        }

        const xi = function (t) {
            !function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && fi(t, e)
            }(o, t);
            var e, i, a, s, n = (a = o, s = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                    }))), !0
                } catch (t) {
                    return !1
                }
            }(), function () {
                var t, e = pi(a);
                if (s) {
                    var i = pi(this).constructor;
                    t = Reflect.construct(e, arguments, i)
                } else t = e.apply(this, arguments);
                return function (t, e) {
                    if (e && ("object" === ci(e) || "function" == typeof e)) return e;
                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                    return function (t) {
                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t)
                }(this, t)
            });

            function o() {
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, o), n.apply(this, arguments)
            }

            return e = o, (i = [{
                key: "draw", value: function (t, e) {
                    var i = this, a = this.w;
                    this.graphics = new g(this.ctx), this.bar = new li(this.ctx, this.xyRatios);
                    var s = new p(this.ctx, a);
                    t = s.getLogSeries(t), this.yRatio = s.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t), "100%" === a.config.chart.stackType && (t = a.globals.seriesPercent.slice()), this.series = t, this.barHelpers.initializeStackedPrevVars(this);
                    for (var n = this.graphics.group({class: "apexcharts-bar-series apexcharts-plot-series"}), o = 0, l = 0, c = function (s, c) {
                        var h = void 0, d = void 0, u = void 0, g = void 0, f = -1;
                        i.groupCtx = i, a.globals.seriesGroups.forEach((function (t, e) {
                            t.indexOf(a.config.series[s].name) > -1 && (f = e)
                        })), -1 !== f && (i.groupCtx = i[a.globals.seriesGroups[f]]);
                        var p = [], x = [], b = a.globals.comboCharts ? e[s] : s;
                        i.yRatio.length > 1 && (i.yaxisIndex = b), i.isReversed = a.config.yaxis[i.yaxisIndex] && a.config.yaxis[i.yaxisIndex].reversed;
                        var v = i.graphics.group({
                            class: "apexcharts-series",
                            seriesName: r.escapeString(a.globals.seriesNames[b]),
                            rel: s + 1,
                            "data:realIndex": b
                        });
                        i.ctx.series.addCollapsedClassToSeries(v, b);
                        var m = i.graphics.group({class: "apexcharts-datalabels", "data:realIndex": b}),
                            y = i.graphics.group({class: "apexcharts-bar-goals-markers"}), w = 0, k = 0,
                            A = i.initialPositions(o, l, h, d, u, g);
                        l = A.y, w = A.barHeight, d = A.yDivision, g = A.zeroW, o = A.x, k = A.barWidth, h = A.xDivision, u = A.zeroH, a.globals.barHeight = w, a.globals.barWidth = k, i.barHelpers.initializeStackedXYVars(i), 1 === i.groupCtx.prevY.length && i.groupCtx.prevY[0].every((function (t) {
                            return isNaN(t)
                        })) && (i.groupCtx.prevY[0] = i.groupCtx.prevY[0].map((function (t) {
                            return u
                        })), i.groupCtx.prevYF[0] = i.groupCtx.prevYF[0].map((function (t) {
                            return 0
                        })));
                        for (var S = 0; S < a.globals.dataPoints; S++) {
                            var C = i.barHelpers.getStrokeWidth(s, S, b), P = {
                                indexes: {i: s, j: S, realIndex: b, bc: c},
                                strokeWidth: C,
                                x: o,
                                y: l,
                                elSeries: v,
                                groupIndex: f,
                                seriesGroup: a.globals.seriesGroups[f]
                            }, L = null;
                            i.isHorizontal ? (L = i.drawStackedBarPaths(di(di({}, P), {}, {
                                zeroW: g,
                                barHeight: w,
                                yDivision: d
                            })), k = i.series[s][S] / i.invertedYRatio) : (L = i.drawStackedColumnPaths(di(di({}, P), {}, {
                                xDivision: h,
                                barWidth: k,
                                zeroH: u
                            })), w = i.series[s][S] / i.yRatio[i.yaxisIndex]);
                            var O = i.barHelpers.drawGoalLine({
                                barXPosition: L.barXPosition,
                                barYPosition: L.barYPosition,
                                goalX: L.goalX,
                                goalY: L.goalY,
                                barHeight: w,
                                barWidth: k
                            });
                            O && y.add(O), l = L.y, o = L.x, p.push(o), x.push(l);
                            var T = i.barHelpers.getPathFillColor(t, s, S, b);
                            v = i.renderSeries({
                                realIndex: b,
                                pathFill: T,
                                j: S,
                                i: s,
                                groupIndex: f,
                                pathFrom: L.pathFrom,
                                pathTo: L.pathTo,
                                strokeWidth: C,
                                elSeries: v,
                                x: o,
                                y: l,
                                series: t,
                                barHeight: w,
                                barWidth: k,
                                elDataLabelsWrap: m,
                                elGoalsMarkers: y,
                                type: "bar",
                                visibleSeries: 0
                            })
                        }
                        a.globals.seriesXvalues[b] = p, a.globals.seriesYvalues[b] = x, i.groupCtx.prevY.push(i.groupCtx.yArrj), i.groupCtx.prevYF.push(i.groupCtx.yArrjF), i.groupCtx.prevYVal.push(i.groupCtx.yArrjVal), i.groupCtx.prevX.push(i.groupCtx.xArrj), i.groupCtx.prevXF.push(i.groupCtx.xArrjF), i.groupCtx.prevXVal.push(i.groupCtx.xArrjVal), n.add(v)
                    }, h = 0, d = 0; h < t.length; h++, d++) c(h, d);
                    return n
                }
            }, {
                key: "initialPositions", value: function (t, e, i, a, r, s) {
                    var n, o, l, c, h = this.w;
                    return this.isHorizontal ? (l = (l = a = h.globals.gridHeight / h.globals.dataPoints) * parseInt(h.config.plotOptions.bar.barHeight, 10) / 100, -1 === String(h.config.plotOptions.bar.barHeight).indexOf("%") && (l = parseInt(h.config.plotOptions.bar.barHeight, 10)), s = this.baseLineInvertedY + h.globals.padHorizontal + (this.isReversed ? h.globals.gridWidth : 0) - (this.isReversed ? 2 * this.baseLineInvertedY : 0), e = (a - l) / 2) : (c = i = h.globals.gridWidth / h.globals.dataPoints, c = h.globals.isXNumeric && h.globals.dataPoints > 1 ? (i = h.globals.minXDiff / this.xRatio) * parseInt(this.barOptions.columnWidth, 10) / 100 : c * parseInt(h.config.plotOptions.bar.columnWidth, 10) / 100, -1 === String(h.config.plotOptions.bar.columnWidth).indexOf("%") && (c = parseInt(h.config.plotOptions.bar.columnWidth, 10)), r = h.globals.gridHeight - this.baseLineY[this.yaxisIndex] - (this.isReversed ? h.globals.gridHeight : 0) + (this.isReversed ? 2 * this.baseLineY[this.yaxisIndex] : 0), t = h.globals.padHorizontal + (i - c) / 2), {
                        x: t,
                        y: e,
                        yDivision: a,
                        xDivision: i,
                        barHeight: null !== (n = h.globals.seriesGroups) && void 0 !== n && n.length ? l / h.globals.seriesGroups.length : l,
                        barWidth: null !== (o = h.globals.seriesGroups) && void 0 !== o && o.length ? c / h.globals.seriesGroups.length : c,
                        zeroH: r,
                        zeroW: s
                    }
                }
            }, {
                key: "drawStackedBarPaths", value: function (t) {
                    for (var e, i = t.indexes, a = t.barHeight, r = t.strokeWidth, s = t.zeroW, n = t.x, o = t.y, l = t.groupIndex, c = t.seriesGroup, h = t.yDivision, d = t.elSeries, u = this.w, g = o + (-1 !== l ? l * a : 0), f = i.i, p = i.j, x = 0, b = 0; b < this.groupCtx.prevXF.length; b++) x += this.groupCtx.prevXF[b][p];
                    var v = f;
                    if (c && (v = c.indexOf(u.config.series[f].name)), v > 0) {
                        var m = s;
                        this.groupCtx.prevXVal[v - 1][p] < 0 ? m = this.series[f][p] >= 0 ? this.groupCtx.prevX[v - 1][p] + x - 2 * (this.isReversed ? x : 0) : this.groupCtx.prevX[v - 1][p] : this.groupCtx.prevXVal[v - 1][p] >= 0 && (m = this.series[f][p] >= 0 ? this.groupCtx.prevX[v - 1][p] : this.groupCtx.prevX[v - 1][p] - x + 2 * (this.isReversed ? x : 0)), e = m
                    } else e = s;
                    n = null === this.series[f][p] ? e : e + this.series[f][p] / this.invertedYRatio - 2 * (this.isReversed ? this.series[f][p] / this.invertedYRatio : 0);
                    var y = this.barHelpers.getBarpaths({
                        barYPosition: g,
                        barHeight: a,
                        x1: e,
                        x2: n,
                        strokeWidth: r,
                        series: this.series,
                        realIndex: i.realIndex,
                        seriesGroup: c,
                        i: f,
                        j: p,
                        w: u
                    });
                    return this.barHelpers.barBackground({
                        j: p,
                        i: f,
                        y1: g,
                        y2: a,
                        elSeries: d
                    }), o += h, {
                        pathTo: y.pathTo,
                        pathFrom: y.pathFrom,
                        goalX: this.barHelpers.getGoalValues("x", s, null, f, p),
                        barYPosition: g,
                        x: n,
                        y: o
                    }
                }
            }, {
                key: "drawStackedColumnPaths", value: function (t) {
                    var e = t.indexes, i = t.x, a = t.y, r = t.xDivision, s = t.barWidth, n = t.zeroH, o = t.groupIndex,
                        l = t.seriesGroup, c = t.elSeries, h = this.w, d = e.i, u = e.j, g = e.bc;
                    if (h.globals.isXNumeric) {
                        var f = h.globals.seriesX[d][u];
                        f || (f = 0), i = (f - h.globals.minX) / this.xRatio - s / 2, h.globals.seriesGroups.length && (i = (f - h.globals.minX) / this.xRatio - s / 2 * h.globals.seriesGroups.length)
                    }
                    for (var p, x = i + (-1 !== o ? o * s : 0), b = 0, v = 0; v < this.groupCtx.prevYF.length; v++) b += isNaN(this.groupCtx.prevYF[v][u]) ? 0 : this.groupCtx.prevYF[v][u];
                    var m = d;
                    if (l && (m = l.indexOf(h.config.series[d].name)), m > 0 && !h.globals.isXNumeric || m > 0 && h.globals.isXNumeric && h.globals.seriesX[d - 1][u] === h.globals.seriesX[d][u]) {
                        var y, w, k, A = Math.min(this.yRatio.length + 1, d + 1);
                        if (void 0 !== this.groupCtx.prevY[m - 1] && this.groupCtx.prevY[m - 1].length) for (var S = 1; S < A; S++) {
                            var C;
                            if (!isNaN(null === (C = this.groupCtx.prevY[m - S]) || void 0 === C ? void 0 : C[u])) {
                                k = this.groupCtx.prevY[m - S][u];
                                break
                            }
                        }
                        for (var P = 1; P < A; P++) {
                            var L, O;
                            if ((null === (L = this.groupCtx.prevYVal[m - P]) || void 0 === L ? void 0 : L[u]) < 0) {
                                w = this.series[d][u] >= 0 ? k - b + 2 * (this.isReversed ? b : 0) : k;
                                break
                            }
                            if ((null === (O = this.groupCtx.prevYVal[m - P]) || void 0 === O ? void 0 : O[u]) >= 0) {
                                w = this.series[d][u] >= 0 ? k : k + b - 2 * (this.isReversed ? b : 0);
                                break
                            }
                        }
                        void 0 === w && (w = h.globals.gridHeight), p = null !== (y = this.groupCtx.prevYF[0]) && void 0 !== y && y.every((function (t) {
                            return 0 === t
                        })) && this.groupCtx.prevYF.slice(1, m).every((function (t) {
                            return t.every((function (t) {
                                return isNaN(t)
                            }))
                        })) ? n : w
                    } else p = n;
                    a = this.series[d][u] ? p - this.series[d][u] / this.yRatio[this.yaxisIndex] + 2 * (this.isReversed ? this.series[d][u] / this.yRatio[this.yaxisIndex] : 0) : p;
                    var T = this.barHelpers.getColumnPaths({
                        barXPosition: x,
                        barWidth: s,
                        y1: p,
                        y2: a,
                        yRatio: this.yRatio[this.yaxisIndex],
                        strokeWidth: this.strokeWidth,
                        series: this.series,
                        seriesGroup: l,
                        realIndex: e.realIndex,
                        i: d,
                        j: u,
                        w: h
                    });
                    return this.barHelpers.barBackground({
                        bc: g,
                        j: u,
                        i: d,
                        x1: x,
                        x2: s,
                        elSeries: c
                    }), i += r, {
                        pathTo: T.pathTo,
                        pathFrom: T.pathFrom,
                        goalY: this.barHelpers.getGoalValues("y", null, n, d, u),
                        barXPosition: x,
                        x: h.globals.isXNumeric ? i - r : i,
                        y: a
                    }
                }
            }]) && gi(e.prototype, i), o
        }(li);

        function bi(t) {
            return bi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, bi(t)
        }

        function vi(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, a)
            }
            return i
        }

        function mi(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? vi(Object(i), !0).forEach((function (e) {
                    yi(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : vi(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function yi(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function wi(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        function ki(t, e) {
            return ki = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            }, ki(t, e)
        }

        function Ai(t) {
            return Ai = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }, Ai(t)
        }

        const Si = function (t) {
            !function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && ki(t, e)
            }(o, t);
            var e, i, a, s, n = (a = o, s = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                    }))), !0
                } catch (t) {
                    return !1
                }
            }(), function () {
                var t, e = Ai(a);
                if (s) {
                    var i = Ai(this).constructor;
                    t = Reflect.construct(e, arguments, i)
                } else t = e.apply(this, arguments);
                return function (t, e) {
                    if (e && ("object" === bi(e) || "function" == typeof e)) return e;
                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                    return function (t) {
                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t)
                }(this, t)
            });

            function o() {
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, o), n.apply(this, arguments)
            }

            return e = o, (i = [{
                key: "draw", value: function (t, e, i) {
                    var a = this, s = this.w, n = new g(this.ctx), o = s.globals.comboCharts ? e : s.config.chart.type,
                        l = new K(this.ctx);
                    this.candlestickOptions = this.w.config.plotOptions.candlestick, this.boxOptions = this.w.config.plotOptions.boxPlot, this.isHorizontal = s.config.plotOptions.bar.horizontal;
                    var c = new p(this.ctx, s);
                    t = c.getLogSeries(t), this.series = t, this.yRatio = c.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t);
                    for (var h = n.group({class: "apexcharts-".concat(o, "-series apexcharts-plot-series")}), d = function (e) {
                        a.isBoxPlot = "boxPlot" === s.config.chart.type || "boxPlot" === s.config.series[e].type;
                        var o, c, d, u, g, f, p = void 0, x = void 0, b = [], v = [],
                            m = s.globals.comboCharts ? i[e] : e, y = n.group({
                                class: "apexcharts-series",
                                seriesName: r.escapeString(s.globals.seriesNames[m]),
                                rel: e + 1,
                                "data:realIndex": m
                            });
                        a.ctx.series.addCollapsedClassToSeries(y, m), t[e].length > 0 && (a.visibleI = a.visibleI + 1), a.yRatio.length > 1 && (a.yaxisIndex = m);
                        var w = a.barHelpers.initialPositions();
                        x = w.y, g = w.barHeight, c = w.yDivision, u = w.zeroW, p = w.x, f = w.barWidth, o = w.xDivision, d = w.zeroH, v.push(p + f / 2);
                        for (var k = n.group({class: "apexcharts-datalabels", "data:realIndex": m}), A = function (i) {
                            var r = a.barHelpers.getStrokeWidth(e, i, m), n = null,
                                h = {indexes: {i: e, j: i, realIndex: m}, x: p, y: x, strokeWidth: r, elSeries: y};
                            n = a.isHorizontal ? a.drawHorizontalBoxPaths(mi(mi({}, h), {}, {
                                yDivision: c,
                                barHeight: g,
                                zeroW: u
                            })) : a.drawVerticalBoxPaths(mi(mi({}, h), {}, {
                                xDivision: o,
                                barWidth: f,
                                zeroH: d
                            })), x = n.y, p = n.x, i > 0 && v.push(p + f / 2), b.push(x), n.pathTo.forEach((function (o, c) {
                                var h = !a.isBoxPlot && a.candlestickOptions.wick.useFillColor ? n.color[c] : s.globals.stroke.colors[e],
                                    d = l.fillPath({
                                        seriesNumber: m,
                                        dataPointIndex: i,
                                        color: n.color[c],
                                        value: t[e][i]
                                    });
                                a.renderSeries({
                                    realIndex: m,
                                    pathFill: d,
                                    lineFill: h,
                                    j: i,
                                    i: e,
                                    pathFrom: n.pathFrom,
                                    pathTo: o,
                                    strokeWidth: r,
                                    elSeries: y,
                                    x: p,
                                    y: x,
                                    series: t,
                                    barHeight: g,
                                    barWidth: f,
                                    elDataLabelsWrap: k,
                                    visibleSeries: a.visibleI,
                                    type: s.config.chart.type
                                })
                            }))
                        }, S = 0; S < s.globals.dataPoints; S++) A(S);
                        s.globals.seriesXvalues[m] = v, s.globals.seriesYvalues[m] = b, h.add(y)
                    }, u = 0; u < t.length; u++) d(u);
                    return h
                }
            }, {
                key: "drawVerticalBoxPaths", value: function (t) {
                    var e = t.indexes, i = t.x, a = (t.y, t.xDivision), r = t.barWidth, s = t.zeroH, n = t.strokeWidth,
                        o = this.w, l = new g(this.ctx), c = e.i, h = e.j, d = !0,
                        u = o.config.plotOptions.candlestick.colors.upward,
                        f = o.config.plotOptions.candlestick.colors.downward, p = "";
                    this.isBoxPlot && (p = [this.boxOptions.colors.lower, this.boxOptions.colors.upper]);
                    var x = this.yRatio[this.yaxisIndex], b = e.realIndex, v = this.getOHLCValue(b, h), m = s, y = s;
                    v.o > v.c && (d = !1);
                    var w = Math.min(v.o, v.c), k = Math.max(v.o, v.c), A = v.m;
                    o.globals.isXNumeric && (i = (o.globals.seriesX[b][h] - o.globals.minX) / this.xRatio - r / 2);
                    var S = i + r * this.visibleI;
                    void 0 === this.series[c][h] || null === this.series[c][h] ? (w = s, k = s) : (w = s - w / x, k = s - k / x, m = s - v.h / x, y = s - v.l / x, A = s - v.m / x);
                    var C = l.move(S, s), P = l.move(S + r / 2, w);
                    return o.globals.previousPaths.length > 0 && (P = this.getPreviousPath(b, h, !0)), C = this.isBoxPlot ? [l.move(S, w) + l.line(S + r / 2, w) + l.line(S + r / 2, m) + l.line(S + r / 4, m) + l.line(S + r - r / 4, m) + l.line(S + r / 2, m) + l.line(S + r / 2, w) + l.line(S + r, w) + l.line(S + r, A) + l.line(S, A) + l.line(S, w + n / 2), l.move(S, A) + l.line(S + r, A) + l.line(S + r, k) + l.line(S + r / 2, k) + l.line(S + r / 2, y) + l.line(S + r - r / 4, y) + l.line(S + r / 4, y) + l.line(S + r / 2, y) + l.line(S + r / 2, k) + l.line(S, k) + l.line(S, A) + "z"] : [l.move(S, k) + l.line(S + r / 2, k) + l.line(S + r / 2, m) + l.line(S + r / 2, k) + l.line(S + r, k) + l.line(S + r, w) + l.line(S + r / 2, w) + l.line(S + r / 2, y) + l.line(S + r / 2, w) + l.line(S, w) + l.line(S, k - n / 2)], P += l.move(S, w), o.globals.isXNumeric || (i += a), {
                        pathTo: C,
                        pathFrom: P,
                        x: i,
                        y: k,
                        barXPosition: S,
                        color: this.isBoxPlot ? p : d ? [u] : [f]
                    }
                }
            }, {
                key: "drawHorizontalBoxPaths", value: function (t) {
                    var e = t.indexes, i = (t.x, t.y), a = t.yDivision, r = t.barHeight, s = t.zeroW, n = t.strokeWidth,
                        o = this.w, l = new g(this.ctx), c = e.i, h = e.j, d = this.boxOptions.colors.lower;
                    this.isBoxPlot && (d = [this.boxOptions.colors.lower, this.boxOptions.colors.upper]);
                    var u = this.invertedYRatio, f = e.realIndex, p = this.getOHLCValue(f, h), x = s, b = s,
                        v = Math.min(p.o, p.c), m = Math.max(p.o, p.c), y = p.m;
                    o.globals.isXNumeric && (i = (o.globals.seriesX[f][h] - o.globals.minX) / this.invertedXRatio - r / 2);
                    var w = i + r * this.visibleI;
                    void 0 === this.series[c][h] || null === this.series[c][h] ? (v = s, m = s) : (v = s + v / u, m = s + m / u, x = s + p.h / u, b = s + p.l / u, y = s + p.m / u);
                    var k = l.move(s, w), A = l.move(v, w + r / 2);
                    return o.globals.previousPaths.length > 0 && (A = this.getPreviousPath(f, h, !0)), k = [l.move(v, w) + l.line(v, w + r / 2) + l.line(x, w + r / 2) + l.line(x, w + r / 2 - r / 4) + l.line(x, w + r / 2 + r / 4) + l.line(x, w + r / 2) + l.line(v, w + r / 2) + l.line(v, w + r) + l.line(y, w + r) + l.line(y, w) + l.line(v + n / 2, w), l.move(y, w) + l.line(y, w + r) + l.line(m, w + r) + l.line(m, w + r / 2) + l.line(b, w + r / 2) + l.line(b, w + r - r / 4) + l.line(b, w + r / 4) + l.line(b, w + r / 2) + l.line(m, w + r / 2) + l.line(m, w) + l.line(y, w) + "z"], A += l.move(v, w), o.globals.isXNumeric || (i += a), {
                        pathTo: k,
                        pathFrom: A,
                        x: m,
                        y: i,
                        barYPosition: w,
                        color: d
                    }
                }
            }, {
                key: "getOHLCValue", value: function (t, e) {
                    var i = this.w;
                    return {
                        o: this.isBoxPlot ? i.globals.seriesCandleH[t][e] : i.globals.seriesCandleO[t][e],
                        h: this.isBoxPlot ? i.globals.seriesCandleO[t][e] : i.globals.seriesCandleH[t][e],
                        m: i.globals.seriesCandleM[t][e],
                        l: this.isBoxPlot ? i.globals.seriesCandleC[t][e] : i.globals.seriesCandleL[t][e],
                        c: this.isBoxPlot ? i.globals.seriesCandleL[t][e] : i.globals.seriesCandleC[t][e]
                    }
                }
            }]) && wi(e.prototype, i), o
        }(li);

        function Ci(t) {
            return function (t) {
                if (Array.isArray(t)) return Pi(t)
            }(t) || function (t) {
                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
            }(t) || function (t, e) {
                if (t) {
                    if ("string" == typeof t) return Pi(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Pi(t, e) : void 0
                }
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function Pi(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, a = new Array(e); i < e; i++) a[i] = t[i];
            return a
        }

        function Li(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Oi = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i;
            return e = t, (i = [{
                key: "checkColorRange", value: function () {
                    var t = this.w, e = !1, i = t.config.plotOptions[t.config.chart.type];
                    return i.colorScale.ranges.length > 0 && i.colorScale.ranges.map((function (t, i) {
                        t.from <= 0 && (e = !0)
                    })), e
                }
            }, {
                key: "getShadeColor", value: function (t, e, i, a) {
                    var s = this.w, n = 1, o = s.config.plotOptions[t].shadeIntensity, l = this.determineColor(t, e, i);
                    s.globals.hasNegs || a ? n = s.config.plotOptions[t].reverseNegativeShade ? l.percent < 0 ? l.percent / 100 * (1.25 * o) : (1 - l.percent / 100) * (1.25 * o) : l.percent <= 0 ? 1 - (1 + l.percent / 100) * o : (1 - l.percent / 100) * o : (n = 1 - l.percent / 100, "treemap" === t && (n = (1 - l.percent / 100) * (1.25 * o)));
                    var c = l.color, h = new r;
                    return s.config.plotOptions[t].enableShades && (c = "dark" === this.w.config.theme.mode ? r.hexToRgba(h.shadeColor(-1 * n, l.color), s.config.fill.opacity) : r.hexToRgba(h.shadeColor(n, l.color), s.config.fill.opacity)), {
                        color: c,
                        colorProps: l
                    }
                }
            }, {
                key: "determineColor", value: function (t, e, i) {
                    var a = this.w, r = a.globals.series[e][i], s = a.config.plotOptions[t],
                        n = s.colorScale.inverse ? i : e;
                    s.distributed && "treemap" === a.config.chart.type && (n = i);
                    var o = a.globals.colors[n], l = null, c = Math.min.apply(Math, Ci(a.globals.series[e])),
                        h = Math.max.apply(Math, Ci(a.globals.series[e]));
                    s.distributed || "heatmap" !== t || (c = a.globals.minY, h = a.globals.maxY), void 0 !== s.colorScale.min && (c = s.colorScale.min < a.globals.minY ? s.colorScale.min : a.globals.minY, h = s.colorScale.max > a.globals.maxY ? s.colorScale.max : a.globals.maxY);
                    var d = Math.abs(h) + Math.abs(c), u = 100 * r / (0 === d ? d - 1e-6 : d);
                    return s.colorScale.ranges.length > 0 && s.colorScale.ranges.map((function (t, e) {
                        if (r >= t.from && r <= t.to) {
                            o = t.color, l = t.foreColor ? t.foreColor : null, c = t.from, h = t.to;
                            var i = Math.abs(h) + Math.abs(c);
                            u = 100 * r / (0 === i ? i - 1e-6 : i)
                        }
                    })), {color: o, foreColor: l, percent: u}
                }
            }, {
                key: "calculateDataLabels", value: function (t) {
                    var e = t.text, i = t.x, a = t.y, r = t.i, s = t.j, n = t.colorProps, o = t.fontSize,
                        l = this.w.config.dataLabels, c = new g(this.ctx), h = new st(this.ctx), d = null;
                    if (l.enabled) {
                        d = c.group({class: "apexcharts-data-labels"});
                        var u = l.offsetX, f = l.offsetY, p = i + u, x = a + parseFloat(l.style.fontSize) / 3 + f;
                        h.plotDataLabelsText({
                            x: p,
                            y: x,
                            text: e,
                            i: r,
                            j: s,
                            color: n.foreColor,
                            parent: d,
                            fontSize: o,
                            dataLabelsConfig: l
                        })
                    }
                    return d
                }
            }, {
                key: "addListeners", value: function (t) {
                    var e = new g(this.ctx);
                    t.node.addEventListener("mouseenter", e.pathMouseEnter.bind(this, t)), t.node.addEventListener("mouseleave", e.pathMouseLeave.bind(this, t)), t.node.addEventListener("mousedown", e.pathMouseDown.bind(this, t))
                }
            }]) && Li(e.prototype, i), t
        }();

        function Ti(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Ii = function () {
            function t(e, i) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.xRatio = i.xRatio, this.yRatio = i.yRatio, this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.helpers = new Oi(e), this.rectRadius = this.w.config.plotOptions.heatmap.radius, this.strokeWidth = this.w.config.stroke.show ? this.w.config.stroke.width : 0
            }

            var e, i;
            return e = t, (i = [{
                key: "draw", value: function (t) {
                    var e = this.w, i = new g(this.ctx), a = i.group({class: "apexcharts-heatmap"});
                    a.attr("clip-path", "url(#gridRectMask".concat(e.globals.cuid, ")"));
                    var s = e.globals.gridWidth / e.globals.dataPoints,
                        n = e.globals.gridHeight / e.globals.series.length, o = 0, c = !1;
                    this.negRange = this.helpers.checkColorRange();
                    var h = t.slice();
                    e.config.yaxis[0].reversed && (c = !0, h.reverse());
                    for (var d = c ? 0 : h.length - 1; c ? d < h.length : d >= 0; c ? d++ : d--) {
                        var u = i.group({
                            class: "apexcharts-series apexcharts-heatmap-series",
                            seriesName: r.escapeString(e.globals.seriesNames[d]),
                            rel: d + 1,
                            "data:realIndex": d
                        });
                        if (this.ctx.series.addCollapsedClassToSeries(u, d), e.config.chart.dropShadow.enabled) {
                            var f = e.config.chart.dropShadow;
                            new l(this.ctx).dropShadow(u, f, d)
                        }
                        for (var p = 0, x = e.config.plotOptions.heatmap.shadeIntensity, b = 0; b < h[d].length; b++) {
                            var v = this.helpers.getShadeColor(e.config.chart.type, d, b, this.negRange), m = v.color,
                                y = v.colorProps;
                            "image" === e.config.fill.type && (m = new K(this.ctx).fillPath({
                                seriesNumber: d,
                                dataPointIndex: b,
                                opacity: e.globals.hasNegs ? y.percent < 0 ? 1 - (1 + y.percent / 100) : x + y.percent / 100 : y.percent / 100,
                                patternID: r.randomId(),
                                width: e.config.fill.image.width ? e.config.fill.image.width : s,
                                height: e.config.fill.image.height ? e.config.fill.image.height : n
                            }));
                            var w = this.rectRadius, k = i.drawRect(p, o, s, n, w);
                            if (k.attr({
                                cx: p,
                                cy: o
                            }), k.node.classList.add("apexcharts-heatmap-rect"), u.add(k), k.attr({
                                fill: m,
                                i: d,
                                index: d,
                                j: b,
                                val: t[d][b],
                                "stroke-width": this.strokeWidth,
                                stroke: e.config.plotOptions.heatmap.useFillColorAsStroke ? m : e.globals.stroke.colors[0],
                                color: m
                            }), this.helpers.addListeners(k), e.config.chart.animations.enabled && !e.globals.dataChanged) {
                                var A = 1;
                                e.globals.resized || (A = e.config.chart.animations.speed), this.animateHeatMap(k, p, o, s, n, A)
                            }
                            if (e.globals.dataChanged) {
                                var S = 1;
                                if (this.dynamicAnim.enabled && e.globals.shouldAnimate) {
                                    S = this.dynamicAnim.speed;
                                    var C = e.globals.previousPaths[d] && e.globals.previousPaths[d][b] && e.globals.previousPaths[d][b].color;
                                    C || (C = "rgba(255, 255, 255, 0)"), this.animateHeatColor(k, r.isColorHex(C) ? C : r.rgb2hex(C), r.isColorHex(m) ? m : r.rgb2hex(m), S)
                                }
                            }
                            var P = (0, e.config.dataLabels.formatter)(e.globals.series[d][b], {
                                value: e.globals.series[d][b],
                                seriesIndex: d,
                                dataPointIndex: b,
                                w: e
                            }), L = this.helpers.calculateDataLabels({
                                text: P,
                                x: p + s / 2,
                                y: o + n / 2,
                                i: d,
                                j: b,
                                colorProps: y,
                                series: h
                            });
                            null !== L && u.add(L), p += s
                        }
                        o += n, a.add(u)
                    }
                    var O = e.globals.yAxisScale[0].result.slice();
                    return e.config.yaxis[0].reversed ? O.unshift("") : O.push(""), e.globals.yAxisScale[0].result = O, a
                }
            }, {
                key: "animateHeatMap", value: function (t, e, i, a, r, s) {
                    var o = new n(this.ctx);
                    o.animateRect(t, {x: e + a / 2, y: i + r / 2, width: 0, height: 0}, {
                        x: e,
                        y: i,
                        width: a,
                        height: r
                    }, s, (function () {
                        o.animationCompleted(t)
                    }))
                }
            }, {
                key: "animateHeatColor", value: function (t, e, i, a) {
                    t.attr({fill: e}).animate(a).attr({fill: i})
                }
            }]) && Ti(e.prototype, i), t
        }();

        function Ei(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Mi = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i;
            return e = t, (i = [{
                key: "drawYAxisTexts", value: function (t, e, i, a) {
                    var r = this.w, s = r.config.yaxis[0], n = r.globals.yLabelFormatters[0];
                    return new g(this.ctx).drawText({
                        x: t + s.labels.offsetX,
                        y: e + s.labels.offsetY,
                        text: n(a, i),
                        textAnchor: "middle",
                        fontSize: s.labels.style.fontSize,
                        fontFamily: s.labels.style.fontFamily,
                        foreColor: Array.isArray(s.labels.style.colors) ? s.labels.style.colors[i] : s.labels.style.colors
                    })
                }
            }]) && Ei(e.prototype, i), t
        }();

        function zi(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        const Xi = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w;
                var i = this.w;
                this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animBeginArr = [0], this.animDur = 0, this.donutDataLabels = this.w.config.plotOptions.pie.donut.labels, this.lineColorArr = void 0 !== i.globals.stroke.colors ? i.globals.stroke.colors : i.globals.colors, this.defaultSize = Math.min(i.globals.gridWidth, i.globals.gridHeight), this.centerY = this.defaultSize / 2, this.centerX = i.globals.gridWidth / 2, "radialBar" === i.config.chart.type ? this.fullAngle = 360 : this.fullAngle = Math.abs(i.config.plotOptions.pie.endAngle - i.config.plotOptions.pie.startAngle), this.initialAngle = i.config.plotOptions.pie.startAngle % this.fullAngle, i.globals.radialSize = this.defaultSize / 2.05 - i.config.stroke.width - (i.config.chart.sparkline.enabled ? 0 : i.config.chart.dropShadow.blur), this.donutSize = i.globals.radialSize * parseInt(i.config.plotOptions.pie.donut.size, 10) / 100, this.maxY = 0, this.sliceLabels = [], this.sliceSizes = [], this.prevSectorAngleArr = []
            }

            var e, i;
            return e = t, (i = [{
                key: "draw", value: function (t) {
                    var e = this, i = this.w, a = new g(this.ctx);
                    if (this.ret = a.group({class: "apexcharts-pie"}), i.globals.noData) return this.ret;
                    for (var s = 0, n = 0; n < t.length; n++) s += r.negToZero(t[n]);
                    var o = [], l = a.group();
                    0 === s && (s = 1e-5), t.forEach((function (t) {
                        e.maxY = Math.max(e.maxY, t)
                    })), i.config.yaxis[0].max && (this.maxY = i.config.yaxis[0].max), "back" === i.config.grid.position && "polarArea" === this.chartType && this.drawPolarElements(this.ret);
                    for (var c = 0; c < t.length; c++) {
                        var h = this.fullAngle * r.negToZero(t[c]) / s;
                        o.push(h), "polarArea" === this.chartType ? (o[c] = this.fullAngle / t.length, this.sliceSizes.push(i.globals.radialSize * t[c] / this.maxY)) : this.sliceSizes.push(i.globals.radialSize)
                    }
                    if (i.globals.dataChanged) {
                        for (var d, u = 0, f = 0; f < i.globals.previousPaths.length; f++) u += r.negToZero(i.globals.previousPaths[f]);
                        for (var p = 0; p < i.globals.previousPaths.length; p++) d = this.fullAngle * r.negToZero(i.globals.previousPaths[p]) / u, this.prevSectorAngleArr.push(d)
                    }
                    this.donutSize < 0 && (this.donutSize = 0);
                    var x = i.config.plotOptions.pie.customScale, b = i.globals.gridWidth / 2,
                        v = i.globals.gridHeight / 2, m = b - i.globals.gridWidth / 2 * x,
                        y = v - i.globals.gridHeight / 2 * x;
                    if ("donut" === this.chartType) {
                        var w = a.drawCircle(this.donutSize);
                        w.attr({
                            cx: this.centerX,
                            cy: this.centerY,
                            fill: i.config.plotOptions.pie.donut.background ? i.config.plotOptions.pie.donut.background : "transparent"
                        }), l.add(w)
                    }
                    var k = this.drawArcs(o, t);
                    if (this.sliceLabels.forEach((function (t) {
                        k.add(t)
                    })), l.attr({transform: "translate(".concat(m, ", ").concat(y, ") scale(").concat(x, ")")}), l.add(k), this.ret.add(l), this.donutDataLabels.show) {
                        var A = this.renderInnerDataLabels(this.donutDataLabels, {
                            hollowSize: this.donutSize,
                            centerX: this.centerX,
                            centerY: this.centerY,
                            opacity: this.donutDataLabels.show,
                            translateX: m,
                            translateY: y
                        });
                        this.ret.add(A)
                    }
                    return "front" === i.config.grid.position && "polarArea" === this.chartType && this.drawPolarElements(this.ret), this.ret
                }
            }, {
                key: "drawArcs", value: function (t, e) {
                    var i = this.w, a = new l(this.ctx), s = new g(this.ctx), n = new K(this.ctx),
                        o = s.group({class: "apexcharts-slices"}), c = this.initialAngle, h = this.initialAngle,
                        d = this.initialAngle, u = this.initialAngle;
                    this.strokeWidth = i.config.stroke.show ? i.config.stroke.width : 0;
                    for (var f = 0; f < t.length; f++) {
                        var p = s.group({
                            class: "apexcharts-series apexcharts-pie-series",
                            seriesName: r.escapeString(i.globals.seriesNames[f]),
                            rel: f + 1,
                            "data:realIndex": f
                        });
                        o.add(p), h = u, d = (c = d) + t[f], u = h + this.prevSectorAngleArr[f];
                        var x = d < c ? this.fullAngle + d - c : d - c,
                            b = n.fillPath({seriesNumber: f, size: this.sliceSizes[f], value: e[f]}),
                            v = this.getChangedPath(h, u), m = s.drawPath({
                                d: v,
                                stroke: Array.isArray(this.lineColorArr) ? this.lineColorArr[f] : this.lineColorArr,
                                strokeWidth: 0,
                                fill: b,
                                fillOpacity: i.config.fill.opacity,
                                classes: "apexcharts-pie-area apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(f)
                            });
                        if (m.attr({
                            index: 0,
                            j: f
                        }), a.setSelectionFilter(m, 0, f), i.config.chart.dropShadow.enabled) {
                            var y = i.config.chart.dropShadow;
                            a.dropShadow(m, y, f)
                        }
                        this.addListeners(m, this.donutDataLabels), g.setAttrs(m.node, {
                            "data:angle": x,
                            "data:startAngle": c,
                            "data:strokeWidth": this.strokeWidth,
                            "data:value": e[f]
                        });
                        var w = {x: 0, y: 0};
                        "pie" === this.chartType || "polarArea" === this.chartType ? w = r.polarToCartesian(this.centerX, this.centerY, i.globals.radialSize / 1.25 + i.config.plotOptions.pie.dataLabels.offset, (c + x / 2) % this.fullAngle) : "donut" === this.chartType && (w = r.polarToCartesian(this.centerX, this.centerY, (i.globals.radialSize + this.donutSize) / 2 + i.config.plotOptions.pie.dataLabels.offset, (c + x / 2) % this.fullAngle)), p.add(m);
                        var k = 0;
                        if (!this.initialAnim || i.globals.resized || i.globals.dataChanged ? this.animBeginArr.push(0) : (0 == (k = x / this.fullAngle * i.config.chart.animations.speed) && (k = 1), this.animDur = k + this.animDur, this.animBeginArr.push(this.animDur)), this.dynamicAnim && i.globals.dataChanged ? this.animatePaths(m, {
                            size: this.sliceSizes[f],
                            endAngle: d,
                            startAngle: c,
                            prevStartAngle: h,
                            prevEndAngle: u,
                            animateStartingPos: !0,
                            i: f,
                            animBeginArr: this.animBeginArr,
                            shouldSetPrevPaths: !0,
                            dur: i.config.chart.animations.dynamicAnimation.speed
                        }) : this.animatePaths(m, {
                            size: this.sliceSizes[f],
                            endAngle: d,
                            startAngle: c,
                            i: f,
                            totalItems: t.length - 1,
                            animBeginArr: this.animBeginArr,
                            dur: k
                        }), i.config.plotOptions.pie.expandOnClick && "polarArea" !== this.chartType && m.click(this.pieClicked.bind(this, f)), void 0 !== i.globals.selectedDataPoints[0] && i.globals.selectedDataPoints[0].indexOf(f) > -1 && this.pieClicked(f), i.config.dataLabels.enabled) {
                            var A = w.x, S = w.y, C = 100 * x / this.fullAngle + "%";
                            if (0 !== x && i.config.plotOptions.pie.dataLabels.minAngleToShowLabel < t[f]) {
                                var P = i.config.dataLabels.formatter;
                                void 0 !== P && (C = P(i.globals.seriesPercent[f][0], {seriesIndex: f, w: i}));
                                var L = i.globals.dataLabels.style.colors[f],
                                    O = s.group({class: "apexcharts-datalabels"}), T = s.drawText({
                                        x: A,
                                        y: S,
                                        text: C,
                                        textAnchor: "middle",
                                        fontSize: i.config.dataLabels.style.fontSize,
                                        fontFamily: i.config.dataLabels.style.fontFamily,
                                        fontWeight: i.config.dataLabels.style.fontWeight,
                                        foreColor: L
                                    });
                                if (O.add(T), i.config.dataLabels.dropShadow.enabled) {
                                    var I = i.config.dataLabels.dropShadow;
                                    a.dropShadow(T, I)
                                }
                                T.node.classList.add("apexcharts-pie-label"), i.config.chart.animations.animate && !1 === i.globals.resized && (T.node.classList.add("apexcharts-pie-label-delay"), T.node.style.animationDelay = i.config.chart.animations.speed / 940 + "s"), this.sliceLabels.push(O)
                            }
                        }
                    }
                    return o
                }
            }, {
                key: "addListeners", value: function (t, e) {
                    var i = new g(this.ctx);
                    t.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this, t)), t.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this, t)), t.node.addEventListener("mouseleave", this.revertDataLabelsInner.bind(this, t.node, e)), t.node.addEventListener("mousedown", i.pathMouseDown.bind(this, t)), this.donutDataLabels.total.showAlways || (t.node.addEventListener("mouseenter", this.printDataLabelsInner.bind(this, t.node, e)), t.node.addEventListener("mousedown", this.printDataLabelsInner.bind(this, t.node, e)))
                }
            }, {
                key: "animatePaths", value: function (t, e) {
                    var i = this.w,
                        a = e.endAngle < e.startAngle ? this.fullAngle + e.endAngle - e.startAngle : e.endAngle - e.startAngle,
                        r = a, s = e.startAngle, n = e.startAngle;
                    void 0 !== e.prevStartAngle && void 0 !== e.prevEndAngle && (s = e.prevEndAngle, r = e.prevEndAngle < e.prevStartAngle ? this.fullAngle + e.prevEndAngle - e.prevStartAngle : e.prevEndAngle - e.prevStartAngle), e.i === i.config.series.length - 1 && (a + n > this.fullAngle ? e.endAngle = e.endAngle - (a + n) : a + n < this.fullAngle && (e.endAngle = e.endAngle + (this.fullAngle - (a + n)))), a === this.fullAngle && (a = this.fullAngle - .01), this.animateArc(t, s, n, a, r, e)
                }
            }, {
                key: "animateArc", value: function (t, e, i, a, r, s) {
                    var o, l = this, c = this.w, h = new n(this.ctx), d = s.size;
                    (isNaN(e) || isNaN(r)) && (e = i, r = a, s.dur = 0);
                    var u = a, g = i, f = e < i ? this.fullAngle + e - i : e - i;
                    c.globals.dataChanged && s.shouldSetPrevPaths && s.prevEndAngle && (o = l.getPiePath({
                        me: l,
                        startAngle: s.prevStartAngle,
                        angle: s.prevEndAngle < s.prevStartAngle ? this.fullAngle + s.prevEndAngle - s.prevStartAngle : s.prevEndAngle - s.prevStartAngle,
                        size: d
                    }), t.attr({d: o})), 0 !== s.dur ? t.animate(s.dur, c.globals.easing, s.animBeginArr[s.i]).afterAll((function () {
                        "pie" !== l.chartType && "donut" !== l.chartType && "polarArea" !== l.chartType || this.animate(c.config.chart.animations.dynamicAnimation.speed).attr({"stroke-width": l.strokeWidth}), s.i === c.config.series.length - 1 && h.animationCompleted(t)
                    })).during((function (n) {
                        u = f + (a - f) * n, s.animateStartingPos && (u = r + (a - r) * n, g = e - r + (i - (e - r)) * n), o = l.getPiePath({
                            me: l,
                            startAngle: g,
                            angle: u,
                            size: d
                        }), t.node.setAttribute("data:pathOrig", o), t.attr({d: o})
                    })) : (o = l.getPiePath({
                        me: l,
                        startAngle: g,
                        angle: a,
                        size: d
                    }), s.isTrack || (c.globals.animationEnded = !0), t.node.setAttribute("data:pathOrig", o), t.attr({
                        d: o,
                        "stroke-width": l.strokeWidth
                    }))
                }
            }, {
                key: "pieClicked", value: function (t) {
                    var e, i = this.w, a = this, r = a.sliceSizes[t] + (i.config.plotOptions.pie.expandOnClick ? 4 : 0),
                        s = i.globals.dom.Paper.select(".apexcharts-".concat(a.chartType.toLowerCase(), "-slice-").concat(t)).members[0];
                    if ("true" !== s.attr("data:pieClicked")) {
                        var n = i.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area");
                        Array.prototype.forEach.call(n, (function (t) {
                            t.setAttribute("data:pieClicked", "false");
                            var e = t.getAttribute("data:pathOrig");
                            e && t.setAttribute("d", e)
                        })), s.attr("data:pieClicked", "true");
                        var o = parseInt(s.attr("data:startAngle"), 10), l = parseInt(s.attr("data:angle"), 10);
                        e = a.getPiePath({me: a, startAngle: o, angle: l, size: r}), 360 !== l && s.plot(e)
                    } else {
                        s.attr({"data:pieClicked": "false"}), this.revertDataLabelsInner(s.node, this.donutDataLabels);
                        var c = s.attr("data:pathOrig");
                        s.attr({d: c})
                    }
                }
            }, {
                key: "getChangedPath", value: function (t, e) {
                    var i = "";
                    return this.dynamicAnim && this.w.globals.dataChanged && (i = this.getPiePath({
                        me: this,
                        startAngle: t,
                        angle: e - t,
                        size: this.size
                    })), i
                }
            }, {
                key: "getPiePath", value: function (t) {
                    var e, i = t.me, a = t.startAngle, s = t.angle, n = t.size, o = new g(this.ctx), l = a,
                        c = Math.PI * (l - 90) / 180, h = s + a;
                    Math.ceil(h) >= this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle && (h = this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle - .01), Math.ceil(h) > this.fullAngle && (h -= this.fullAngle);
                    var d = Math.PI * (h - 90) / 180, u = i.centerX + n * Math.cos(c), f = i.centerY + n * Math.sin(c),
                        p = i.centerX + n * Math.cos(d), x = i.centerY + n * Math.sin(d),
                        b = r.polarToCartesian(i.centerX, i.centerY, i.donutSize, h),
                        v = r.polarToCartesian(i.centerX, i.centerY, i.donutSize, l), m = s > 180 ? 1 : 0,
                        y = ["M", u, f, "A", n, n, 0, m, 1, p, x];
                    return e = "donut" === i.chartType ? [].concat(y, ["L", b.x, b.y, "A", i.donutSize, i.donutSize, 0, m, 0, v.x, v.y, "L", u, f, "z"]).join(" ") : "pie" === i.chartType || "polarArea" === i.chartType ? [].concat(y, ["L", i.centerX, i.centerY, "L", u, f]).join(" ") : [].concat(y).join(" "), o.roundPathCorners(e, 2 * this.strokeWidth)
                }
            }, {
                key: "drawPolarElements", value: function (t) {
                    var e = this.w, i = new kt(this.ctx), a = new g(this.ctx), r = new Mi(this.ctx), s = a.group(),
                        n = a.group(), o = i.niceScale(0, Math.ceil(this.maxY), e.config.yaxis[0].tickAmount, 0, !0),
                        l = o.result.reverse(), c = o.result.length;
                    this.maxY = o.niceMax;
                    for (var h = e.globals.radialSize, d = h / (c - 1), u = 0; u < c - 1; u++) {
                        var f = a.drawCircle(h);
                        if (f.attr({
                            cx: this.centerX,
                            cy: this.centerY,
                            fill: "none",
                            "stroke-width": e.config.plotOptions.polarArea.rings.strokeWidth,
                            stroke: e.config.plotOptions.polarArea.rings.strokeColor
                        }), e.config.yaxis[0].show) {
                            var p = r.drawYAxisTexts(this.centerX, this.centerY - h + parseInt(e.config.yaxis[0].labels.style.fontSize, 10) / 2, u, l[u]);
                            n.add(p)
                        }
                        s.add(f), h -= d
                    }
                    this.drawSpokes(t), t.add(s), t.add(n)
                }
            }, {
                key: "renderInnerDataLabels", value: function (t, e) {
                    var i = this.w, a = new g(this.ctx), r = a.group({
                        class: "apexcharts-datalabels-group",
                        transform: "translate(".concat(e.translateX ? e.translateX : 0, ", ").concat(e.translateY ? e.translateY : 0, ") scale(").concat(i.config.plotOptions.pie.customScale, ")")
                    }), s = t.total.show;
                    r.node.style.opacity = e.opacity;
                    var n, o, l = e.centerX, c = e.centerY;
                    n = void 0 === t.name.color ? i.globals.colors[0] : t.name.color;
                    var h = t.name.fontSize, d = t.name.fontFamily, u = t.name.fontWeight;
                    o = void 0 === t.value.color ? i.config.chart.foreColor : t.value.color;
                    var f = t.value.formatter, p = "", x = "";
                    if (s ? (n = t.total.color, h = t.total.fontSize, d = t.total.fontFamily, u = t.total.fontWeight, x = t.total.label, p = t.total.formatter(i)) : 1 === i.globals.series.length && (p = f(i.globals.series[0], i), x = i.globals.seriesNames[0]), x && (x = t.name.formatter(x, t.total.show, i)), t.name.show) {
                        var b = a.drawText({
                            x: l,
                            y: c + parseFloat(t.name.offsetY),
                            text: x,
                            textAnchor: "middle",
                            foreColor: n,
                            fontSize: h,
                            fontWeight: u,
                            fontFamily: d
                        });
                        b.node.classList.add("apexcharts-datalabel-label"), r.add(b)
                    }
                    if (t.value.show) {
                        var v = t.name.show ? parseFloat(t.value.offsetY) + 16 : t.value.offsetY, m = a.drawText({
                            x: l,
                            y: c + v,
                            text: p,
                            textAnchor: "middle",
                            foreColor: o,
                            fontWeight: t.value.fontWeight,
                            fontSize: t.value.fontSize,
                            fontFamily: t.value.fontFamily
                        });
                        m.node.classList.add("apexcharts-datalabel-value"), r.add(m)
                    }
                    return r
                }
            }, {
                key: "printInnerLabels", value: function (t, e, i, a) {
                    var r, s = this.w;
                    a ? r = void 0 === t.name.color ? s.globals.colors[parseInt(a.parentNode.getAttribute("rel"), 10) - 1] : t.name.color : s.globals.series.length > 1 && t.total.show && (r = t.total.color);
                    var n = s.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"),
                        o = s.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");
                    i = (0, t.value.formatter)(i, s), a || "function" != typeof t.total.formatter || (i = t.total.formatter(s));
                    var l = e === t.total.label;
                    e = t.name.formatter(e, l, s), null !== n && (n.textContent = e), null !== o && (o.textContent = i), null !== n && (n.style.fill = r)
                }
            }, {
                key: "printDataLabelsInner", value: function (t, e) {
                    var i = this.w, a = t.getAttribute("data:value"),
                        r = i.globals.seriesNames[parseInt(t.parentNode.getAttribute("rel"), 10) - 1];
                    i.globals.series.length > 1 && this.printInnerLabels(e, r, a, t);
                    var s = i.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");
                    null !== s && (s.style.opacity = 1)
                }
            }, {
                key: "drawSpokes", value: function (t) {
                    var e = this, i = this.w, a = new g(this.ctx), s = i.config.plotOptions.polarArea.spokes;
                    if (0 !== s.strokeWidth) {
                        for (var n = [], o = 360 / i.globals.series.length, l = 0; l < i.globals.series.length; l++) n.push(r.polarToCartesian(this.centerX, this.centerY, i.globals.radialSize, i.config.plotOptions.pie.startAngle + o * l));
                        n.forEach((function (i, r) {
                            var n = a.drawLine(i.x, i.y, e.centerX, e.centerY, Array.isArray(s.connectorColors) ? s.connectorColors[r] : s.connectorColors);
                            t.add(n)
                        }))
                    }
                }
            }, {
                key: "revertDataLabelsInner", value: function (t, e, i) {
                    var a = this, r = this.w, s = r.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group"),
                        n = !1, o = r.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area"),
                        l = function (t) {
                            var i = t.makeSliceOut, r = t.printLabel;
                            Array.prototype.forEach.call(o, (function (t) {
                                "true" === t.getAttribute("data:pieClicked") && (i && (n = !0), r && a.printDataLabelsInner(t, e))
                            }))
                        };
                    if (l({
                        makeSliceOut: !0,
                        printLabel: !1
                    }), e.total.show && r.globals.series.length > 1) n && !e.total.showAlways ? l({
                        makeSliceOut: !1,
                        printLabel: !0
                    }) : this.printInnerLabels(e, e.total.label, e.total.formatter(r)); else if (l({
                        makeSliceOut: !1,
                        printLabel: !0
                    }), !n) if (r.globals.selectedDataPoints.length && r.globals.series.length > 1) if (r.globals.selectedDataPoints[0].length > 0) {
                        var c = r.globals.selectedDataPoints[0],
                            h = r.globals.dom.baseEl.querySelector(".apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(c));
                        this.printDataLabelsInner(h, e)
                    } else s && r.globals.selectedDataPoints.length && 0 === r.globals.selectedDataPoints[0].length && (s.style.opacity = 0); else s && r.globals.series.length > 1 && (s.style.opacity = 0)
                }
            }]) && zi(e.prototype, i), t
        }();

        function Yi(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, a)
            }
            return i
        }

        function Ri(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Yi(Object(i), !0).forEach((function (e) {
                    Fi(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Yi(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function Fi(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function Di(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        const Hi = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animDur = 0;
                var i = this.w;
                this.graphics = new g(this.ctx), this.lineColorArr = void 0 !== i.globals.stroke.colors ? i.globals.stroke.colors : i.globals.colors, this.defaultSize = i.globals.svgHeight < i.globals.svgWidth ? i.globals.gridHeight + 1.5 * i.globals.goldenPadding : i.globals.gridWidth, this.isLog = i.config.yaxis[0].logarithmic, this.coreUtils = new p(this.ctx), this.maxValue = this.isLog ? this.coreUtils.getLogVal(i.globals.maxY, 0) : i.globals.maxY, this.minValue = this.isLog ? this.coreUtils.getLogVal(this.w.globals.minY, 0) : i.globals.minY, this.polygons = i.config.plotOptions.radar.polygons, this.strokeWidth = i.config.stroke.show ? i.config.stroke.width : 0, this.size = this.defaultSize / 2.1 - this.strokeWidth - i.config.chart.dropShadow.blur, i.config.xaxis.labels.show && (this.size = this.size - i.globals.xAxisLabelsWidth / 1.75), void 0 !== i.config.plotOptions.radar.size && (this.size = i.config.plotOptions.radar.size), this.dataRadiusOfPercent = [], this.dataRadius = [], this.angleArr = [], this.yaxisLabelsTextsPos = []
            }

            var e, i;
            return e = t, i = [{
                key: "draw", value: function (t) {
                    var e = this, i = this.w, a = new K(this.ctx), s = [], n = new st(this.ctx);
                    t.length && (this.dataPointsLen = t[i.globals.maxValsInArrayIndex].length), this.disAngle = 2 * Math.PI / this.dataPointsLen;
                    var o = i.globals.gridWidth / 2, c = i.globals.gridHeight / 2,
                        h = o + i.config.plotOptions.radar.offsetX, d = c + i.config.plotOptions.radar.offsetY,
                        u = this.graphics.group({
                            class: "apexcharts-radar-series apexcharts-plot-series",
                            transform: "translate(".concat(h || 0, ", ").concat(d || 0, ")")
                        }), g = [], f = null, p = null;
                    if (this.yaxisLabels = this.graphics.group({class: "apexcharts-yaxis"}), t.forEach((function (t, o) {
                        var c = t.length === i.globals.dataPoints, h = e.graphics.group().attr({
                            class: "apexcharts-series",
                            "data:longestSeries": c,
                            seriesName: r.escapeString(i.globals.seriesNames[o]),
                            rel: o + 1,
                            "data:realIndex": o
                        });
                        e.dataRadiusOfPercent[o] = [], e.dataRadius[o] = [], e.angleArr[o] = [], t.forEach((function (t, i) {
                            var a = Math.abs(e.maxValue - e.minValue);
                            t += Math.abs(e.minValue), e.isLog && (t = e.coreUtils.getLogVal(t, 0)), e.dataRadiusOfPercent[o][i] = t / a, e.dataRadius[o][i] = e.dataRadiusOfPercent[o][i] * e.size, e.angleArr[o][i] = i * e.disAngle
                        })), g = e.getDataPointsPos(e.dataRadius[o], e.angleArr[o]);
                        var d = e.createPaths(g, {x: 0, y: 0});
                        f = e.graphics.group({class: "apexcharts-series-markers-wrap apexcharts-element-hidden"}), p = e.graphics.group({
                            class: "apexcharts-datalabels",
                            "data:realIndex": o
                        }), i.globals.delayedElements.push({el: f.node, index: o});
                        var u = {
                            i: o,
                            realIndex: o,
                            animationDelay: o,
                            initialSpeed: i.config.chart.animations.speed,
                            dataChangeSpeed: i.config.chart.animations.dynamicAnimation.speed,
                            className: "apexcharts-radar",
                            shouldClipToGrid: !1,
                            bindEventsOnPaths: !1,
                            stroke: i.globals.stroke.colors[o],
                            strokeLineCap: i.config.stroke.lineCap
                        }, x = null;
                        i.globals.previousPaths.length > 0 && (x = e.getPreviousPath(o));
                        for (var b = 0; b < d.linePathsTo.length; b++) {
                            var v = e.graphics.renderPaths(Ri(Ri({}, u), {}, {
                                pathFrom: null === x ? d.linePathsFrom[b] : x,
                                pathTo: d.linePathsTo[b],
                                strokeWidth: Array.isArray(e.strokeWidth) ? e.strokeWidth[o] : e.strokeWidth,
                                fill: "none",
                                drawShadow: !1
                            }));
                            h.add(v);
                            var m = a.fillPath({seriesNumber: o}), y = e.graphics.renderPaths(Ri(Ri({}, u), {}, {
                                pathFrom: null === x ? d.areaPathsFrom[b] : x,
                                pathTo: d.areaPathsTo[b],
                                strokeWidth: 0,
                                fill: m,
                                drawShadow: !1
                            }));
                            if (i.config.chart.dropShadow.enabled) {
                                var w = new l(e.ctx), k = i.config.chart.dropShadow;
                                w.dropShadow(y, Object.assign({}, k, {noUserSpaceOnUse: !0}), o)
                            }
                            h.add(y)
                        }
                        t.forEach((function (t, a) {
                            var r = new et(e.ctx).getMarkerConfig({
                                cssClass: "apexcharts-marker",
                                seriesIndex: o,
                                dataPointIndex: a
                            }), s = e.graphics.drawMarker(g[a].x, g[a].y, r);
                            s.attr("rel", a), s.attr("j", a), s.attr("index", o), s.node.setAttribute("default-marker-size", r.pSize);
                            var l = e.graphics.group({class: "apexcharts-series-markers"});
                            l && l.add(s), f.add(l), h.add(f);
                            var c = i.config.dataLabels;
                            if (c.enabled) {
                                var d = c.formatter(i.globals.series[o][a], {seriesIndex: o, dataPointIndex: a, w: i});
                                n.plotDataLabelsText({
                                    x: g[a].x,
                                    y: g[a].y,
                                    text: d,
                                    textAnchor: "middle",
                                    i: o,
                                    j: o,
                                    parent: p,
                                    offsetCorrection: !1,
                                    dataLabelsConfig: Ri({}, c)
                                })
                            }
                            h.add(p)
                        })), s.push(h)
                    })), this.drawPolygons({parent: u}), i.config.xaxis.labels.show) {
                        var x = this.drawXAxisTexts();
                        u.add(x)
                    }
                    return s.forEach((function (t) {
                        u.add(t)
                    })), u.add(this.yaxisLabels), u
                }
            }, {
                key: "drawPolygons", value: function (t) {
                    for (var e = this, i = this.w, a = t.parent, s = new Mi(this.ctx), n = i.globals.yAxisScale[0].result.reverse(), o = n.length, l = [], c = this.size / (o - 1), h = 0; h < o; h++) l[h] = c * h;
                    l.reverse();
                    var d = [], u = [];
                    l.forEach((function (t, i) {
                        var a = r.getPolygonPos(t, e.dataPointsLen), s = "";
                        a.forEach((function (t, a) {
                            if (0 === i) {
                                var r = e.graphics.drawLine(t.x, t.y, 0, 0, Array.isArray(e.polygons.connectorColors) ? e.polygons.connectorColors[a] : e.polygons.connectorColors);
                                u.push(r)
                            }
                            0 === a && e.yaxisLabelsTextsPos.push({x: t.x, y: t.y}), s += t.x + "," + t.y + " "
                        })), d.push(s)
                    })), d.forEach((function (t, r) {
                        var s = e.polygons.strokeColors, n = e.polygons.strokeWidth,
                            o = e.graphics.drawPolygon(t, Array.isArray(s) ? s[r] : s, Array.isArray(n) ? n[r] : n, i.globals.radarPolygons.fill.colors[r]);
                        a.add(o)
                    })), u.forEach((function (t) {
                        a.add(t)
                    })), i.config.yaxis[0].show && this.yaxisLabelsTextsPos.forEach((function (t, i) {
                        var a = s.drawYAxisTexts(t.x, t.y, i, n[i]);
                        e.yaxisLabels.add(a)
                    }))
                }
            }, {
                key: "drawXAxisTexts", value: function () {
                    var t = this, e = this.w, i = e.config.xaxis.labels,
                        a = this.graphics.group({class: "apexcharts-xaxis"}),
                        s = r.getPolygonPos(this.size, this.dataPointsLen);
                    return e.globals.labels.forEach((function (r, n) {
                        var o = e.config.xaxis.labels.formatter, l = new st(t.ctx);
                        if (s[n]) {
                            var c = t.getTextPos(s[n], t.size), h = o(r, {seriesIndex: -1, dataPointIndex: n, w: e});
                            l.plotDataLabelsText({
                                x: c.newX,
                                y: c.newY,
                                text: h,
                                textAnchor: c.textAnchor,
                                i: n,
                                j: n,
                                parent: a,
                                color: Array.isArray(i.style.colors) && i.style.colors[n] ? i.style.colors[n] : "#a8a8a8",
                                dataLabelsConfig: Ri({textAnchor: c.textAnchor, dropShadow: {enabled: !1}}, i),
                                offsetCorrection: !1
                            })
                        }
                    })), a
                }
            }, {
                key: "createPaths", value: function (t, e) {
                    var i = this, a = [], r = [], s = [], n = [];
                    if (t.length) {
                        r = [this.graphics.move(e.x, e.y)], n = [this.graphics.move(e.x, e.y)];
                        var o = this.graphics.move(t[0].x, t[0].y), l = this.graphics.move(t[0].x, t[0].y);
                        t.forEach((function (e, a) {
                            o += i.graphics.line(e.x, e.y), l += i.graphics.line(e.x, e.y), a === t.length - 1 && (o += "Z", l += "Z")
                        })), a.push(o), s.push(l)
                    }
                    return {linePathsFrom: r, linePathsTo: a, areaPathsFrom: n, areaPathsTo: s}
                }
            }, {
                key: "getTextPos", value: function (t, e) {
                    var i = "middle", a = t.x, r = t.y;
                    return Math.abs(t.x) >= 10 ? t.x > 0 ? (i = "start", a += 10) : t.x < 0 && (i = "end", a -= 10) : i = "middle", Math.abs(t.y) >= e - 10 && (t.y < 0 ? r -= 10 : t.y > 0 && (r += 10)), {
                        textAnchor: i,
                        newX: a,
                        newY: r
                    }
                }
            }, {
                key: "getPreviousPath", value: function (t) {
                    for (var e = this.w, i = null, a = 0; a < e.globals.previousPaths.length; a++) {
                        var r = e.globals.previousPaths[a];
                        r.paths.length > 0 && parseInt(r.realIndex, 10) === parseInt(t, 10) && void 0 !== e.globals.previousPaths[a].paths[0] && (i = e.globals.previousPaths[a].paths[0].d)
                    }
                    return i
                }
            }, {
                key: "getDataPointsPos", value: function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.dataPointsLen;
                    t = t || [], e = e || [];
                    for (var a = [], r = 0; r < i; r++) {
                        var s = {};
                        s.x = t[r] * Math.sin(e[r]), s.y = -t[r] * Math.cos(e[r]), a.push(s)
                    }
                    return a
                }
            }], i && Di(e.prototype, i), t
        }();

        function Ni(t) {
            return Ni = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, Ni(t)
        }

        function Wi(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        function ji(t, e) {
            return ji = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            }, ji(t, e)
        }

        function Bi(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function Gi(t) {
            return Gi = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }, Gi(t)
        }

        const Vi = function (t) {
            !function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && ji(t, e)
            }(o, t);
            var e, i, a, s, n = (a = o, s = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                    }))), !0
                } catch (t) {
                    return !1
                }
            }(), function () {
                var t, e = Gi(a);
                if (s) {
                    var i = Gi(this).constructor;
                    t = Reflect.construct(e, arguments, i)
                } else t = e.apply(this, arguments);
                return function (t, e) {
                    if (e && ("object" === Ni(e) || "function" == typeof e)) return e;
                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                    return Bi(t)
                }(this, t)
            });

            function o(t) {
                var e;
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, o), (e = n.call(this, t)).ctx = t, e.w = t.w, e.animBeginArr = [0], e.animDur = 0;
                var i = e.w;
                return e.startAngle = i.config.plotOptions.radialBar.startAngle, e.endAngle = i.config.plotOptions.radialBar.endAngle, e.totalAngle = Math.abs(i.config.plotOptions.radialBar.endAngle - i.config.plotOptions.radialBar.startAngle), e.trackStartAngle = i.config.plotOptions.radialBar.track.startAngle, e.trackEndAngle = i.config.plotOptions.radialBar.track.endAngle, e.barLabels = e.w.config.plotOptions.radialBar.barLabels, e.donutDataLabels = e.w.config.plotOptions.radialBar.dataLabels, e.radialDataLabels = e.donutDataLabels, e.trackStartAngle || (e.trackStartAngle = e.startAngle), e.trackEndAngle || (e.trackEndAngle = e.endAngle), 360 === e.endAngle && (e.endAngle = 359.99), e.margin = parseInt(i.config.plotOptions.radialBar.track.margin, 10), e.onBarLabelClick = e.onBarLabelClick.bind(Bi(e)), e
            }

            return e = o, (i = [{
                key: "draw", value: function (t) {
                    var e = this.w, i = new g(this.ctx), a = i.group({class: "apexcharts-radialbar"});
                    if (e.globals.noData) return a;
                    var r = i.group(), s = this.defaultSize / 2, n = e.globals.gridWidth / 2,
                        o = this.defaultSize / 2.05;
                    e.config.chart.sparkline.enabled || (o = o - e.config.stroke.width - e.config.chart.dropShadow.blur);
                    var l = e.globals.fill.colors;
                    if (e.config.plotOptions.radialBar.track.show) {
                        var c = this.drawTracks({size: o, centerX: n, centerY: s, colorArr: l, series: t});
                        r.add(c)
                    }
                    var h = this.drawArcs({size: o, centerX: n, centerY: s, colorArr: l, series: t}), d = 360;
                    e.config.plotOptions.radialBar.startAngle < 0 && (d = this.totalAngle);
                    var u = (360 - d) / 360;
                    if (e.globals.radialSize = o - o * u, this.radialDataLabels.value.show) {
                        var f = Math.max(this.radialDataLabels.value.offsetY, this.radialDataLabels.name.offsetY);
                        e.globals.radialSize += f * u
                    }
                    return r.add(h.g), "front" === e.config.plotOptions.radialBar.hollow.position && (h.g.add(h.elHollow), h.dataLabels && h.g.add(h.dataLabels)), a.add(r), a
                }
            }, {
                key: "drawTracks", value: function (t) {
                    var e = this.w, i = new g(this.ctx), a = i.group({class: "apexcharts-tracks"}), r = new l(this.ctx),
                        s = new K(this.ctx), n = this.getStrokeWidth(t);
                    t.size = t.size - n / 2;
                    for (var o = 0; o < t.series.length; o++) {
                        var c = i.group({class: "apexcharts-radialbar-track apexcharts-track"});
                        a.add(c), c.attr({rel: o + 1}), t.size = t.size - n - this.margin;
                        var h = e.config.plotOptions.radialBar.track, d = s.fillPath({
                            seriesNumber: 0,
                            size: t.size,
                            fillColors: Array.isArray(h.background) ? h.background[o] : h.background,
                            solid: !0
                        }), u = this.trackStartAngle, f = this.trackEndAngle;
                        Math.abs(f) + Math.abs(u) >= 360 && (f = 360 - Math.abs(this.startAngle) - .1);
                        var p = i.drawPath({
                            d: "",
                            stroke: d,
                            strokeWidth: n * parseInt(h.strokeWidth, 10) / 100,
                            fill: "none",
                            strokeOpacity: h.opacity,
                            classes: "apexcharts-radialbar-area"
                        });
                        if (h.dropShadow.enabled) {
                            var x = h.dropShadow;
                            r.dropShadow(p, x)
                        }
                        c.add(p), p.attr("id", "apexcharts-radialbarTrack-" + o), this.animatePaths(p, {
                            centerX: t.centerX,
                            centerY: t.centerY,
                            endAngle: f,
                            startAngle: u,
                            size: t.size,
                            i: o,
                            totalItems: 2,
                            animBeginArr: 0,
                            dur: 0,
                            isTrack: !0,
                            easing: e.globals.easing
                        })
                    }
                    return a
                }
            }, {
                key: "drawArcs", value: function (t) {
                    var e = this.w, i = new g(this.ctx), a = new K(this.ctx), s = new l(this.ctx), n = i.group(),
                        o = this.getStrokeWidth(t);
                    t.size = t.size - o / 2;
                    var c = e.config.plotOptions.radialBar.hollow.background,
                        h = t.size - o * t.series.length - this.margin * t.series.length - o * parseInt(e.config.plotOptions.radialBar.track.strokeWidth, 10) / 100 / 2,
                        d = h - e.config.plotOptions.radialBar.hollow.margin;
                    void 0 !== e.config.plotOptions.radialBar.hollow.image && (c = this.drawHollowImage(t, n, h, c));
                    var u = this.drawHollow({
                        size: d,
                        centerX: t.centerX,
                        centerY: t.centerY,
                        fill: c || "transparent"
                    });
                    if (e.config.plotOptions.radialBar.hollow.dropShadow.enabled) {
                        var f = e.config.plotOptions.radialBar.hollow.dropShadow;
                        s.dropShadow(u, f)
                    }
                    var p = 1;
                    !this.radialDataLabels.total.show && e.globals.series.length > 1 && (p = 0);
                    var x = null;
                    this.radialDataLabels.show && (x = this.renderInnerDataLabels(this.radialDataLabels, {
                        hollowSize: h,
                        centerX: t.centerX,
                        centerY: t.centerY,
                        opacity: p
                    })), "back" === e.config.plotOptions.radialBar.hollow.position && (n.add(u), x && n.add(x));
                    var b = !1;
                    e.config.plotOptions.radialBar.inverseOrder && (b = !0);
                    for (var v = b ? t.series.length - 1 : 0; b ? v >= 0 : v < t.series.length; b ? v-- : v++) {
                        var m = i.group({
                            class: "apexcharts-series apexcharts-radial-series",
                            seriesName: r.escapeString(e.globals.seriesNames[v])
                        });
                        n.add(m), m.attr({
                            rel: v + 1,
                            "data:realIndex": v
                        }), this.ctx.series.addCollapsedClassToSeries(m, v), t.size = t.size - o - this.margin;
                        var y = a.fillPath({seriesNumber: v, size: t.size, value: t.series[v]}), w = this.startAngle,
                            k = void 0, A = r.negToZero(t.series[v] > 100 ? 100 : t.series[v]) / 100,
                            S = Math.round(this.totalAngle * A) + this.startAngle, C = void 0;
                        e.globals.dataChanged && (k = this.startAngle, C = Math.round(this.totalAngle * r.negToZero(e.globals.previousPaths[v]) / 100) + k), Math.abs(S) + Math.abs(w) >= 360 && (S -= .01), Math.abs(C) + Math.abs(k) >= 360 && (C -= .01);
                        var P = S - w,
                            L = Array.isArray(e.config.stroke.dashArray) ? e.config.stroke.dashArray[v] : e.config.stroke.dashArray,
                            O = i.drawPath({
                                d: "",
                                stroke: y,
                                strokeWidth: o,
                                fill: "none",
                                fillOpacity: e.config.fill.opacity,
                                classes: "apexcharts-radialbar-area apexcharts-radialbar-slice-" + v,
                                strokeDashArray: L
                            });
                        if (g.setAttrs(O.node, {
                            "data:angle": P,
                            "data:value": t.series[v]
                        }), e.config.chart.dropShadow.enabled) {
                            var T = e.config.chart.dropShadow;
                            s.dropShadow(O, T, v)
                        }
                        if (s.setSelectionFilter(O, 0, v), this.addListeners(O, this.radialDataLabels), m.add(O), O.attr({
                            index: 0,
                            j: v
                        }), this.barLabels.enabled) {
                            var I = r.polarToCartesian(t.centerX, t.centerY, t.size, w),
                                E = this.barLabels.formatter(e.globals.seriesNames[v], {seriesIndex: v, w: e}),
                                M = ["apexcharts-radialbar-label"];
                            this.barLabels.onClick || M.push("apexcharts-no-click");
                            var z = this.barLabels.useSeriesColors ? e.globals.colors[v] : e.config.chart.foreColor;
                            z || (z = e.config.chart.foreColor);
                            var X = I.x - this.barLabels.margin, Y = I.y, R = i.drawText({
                                x: X,
                                y: Y,
                                text: E,
                                textAnchor: "end",
                                dominantBaseline: "middle",
                                fontFamily: this.barLabels.fontFamily,
                                fontWeight: this.barLabels.fontWeight,
                                fontSize: this.barLabels.fontSize,
                                foreColor: z,
                                cssClass: M.join(" ")
                            });
                            R.on("click", this.onBarLabelClick), R.attr({rel: v + 1}), 0 !== w && R.attr({
                                "transform-origin": "".concat(X, " ").concat(Y),
                                transform: "rotate(".concat(w, " 0 0)")
                            }), m.add(R)
                        }
                        var F = 0;
                        !this.initialAnim || e.globals.resized || e.globals.dataChanged || (F = e.config.chart.animations.speed), e.globals.dataChanged && (F = e.config.chart.animations.dynamicAnimation.speed), this.animDur = F / (1.2 * t.series.length) + this.animDur, this.animBeginArr.push(this.animDur), this.animatePaths(O, {
                            centerX: t.centerX,
                            centerY: t.centerY,
                            endAngle: S,
                            startAngle: w,
                            prevEndAngle: C,
                            prevStartAngle: k,
                            size: t.size,
                            i: v,
                            totalItems: 2,
                            animBeginArr: this.animBeginArr,
                            dur: F,
                            shouldSetPrevPaths: !0,
                            easing: e.globals.easing
                        })
                    }
                    return {g: n, elHollow: u, dataLabels: x}
                }
            }, {
                key: "drawHollow", value: function (t) {
                    var e = new g(this.ctx).drawCircle(2 * t.size);
                    return e.attr({
                        class: "apexcharts-radialbar-hollow",
                        cx: t.centerX,
                        cy: t.centerY,
                        r: t.size,
                        fill: t.fill
                    }), e
                }
            }, {
                key: "drawHollowImage", value: function (t, e, i, a) {
                    var s = this.w, n = new K(this.ctx), o = r.randomId(),
                        l = s.config.plotOptions.radialBar.hollow.image;
                    if (s.config.plotOptions.radialBar.hollow.imageClipped) n.clippedImgArea({
                        width: i,
                        height: i,
                        image: l,
                        patternID: "pattern".concat(s.globals.cuid).concat(o)
                    }), a = "url(#pattern".concat(s.globals.cuid).concat(o, ")"); else {
                        var c = s.config.plotOptions.radialBar.hollow.imageWidth,
                            h = s.config.plotOptions.radialBar.hollow.imageHeight;
                        if (void 0 === c && void 0 === h) {
                            var d = s.globals.dom.Paper.image(l).loaded((function (e) {
                                this.move(t.centerX - e.width / 2 + s.config.plotOptions.radialBar.hollow.imageOffsetX, t.centerY - e.height / 2 + s.config.plotOptions.radialBar.hollow.imageOffsetY)
                            }));
                            e.add(d)
                        } else {
                            var u = s.globals.dom.Paper.image(l).loaded((function (e) {
                                this.move(t.centerX - c / 2 + s.config.plotOptions.radialBar.hollow.imageOffsetX, t.centerY - h / 2 + s.config.plotOptions.radialBar.hollow.imageOffsetY), this.size(c, h)
                            }));
                            e.add(u)
                        }
                    }
                    return a
                }
            }, {
                key: "getStrokeWidth", value: function (t) {
                    var e = this.w;
                    return t.size * (100 - parseInt(e.config.plotOptions.radialBar.hollow.size, 10)) / 100 / (t.series.length + 1) - this.margin
                }
            }, {
                key: "onBarLabelClick", value: function (t) {
                    var e = parseInt(t.target.getAttribute("rel"), 10) - 1, i = this.barLabels.onClick, a = this.w;
                    i && i(a.globals.seriesNames[e], {w: a, seriesIndex: e})
                }
            }]) && Wi(e.prototype, i), o
        }(Xi);

        function _i(t) {
            return _i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, _i(t)
        }

        function Ui(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, a)
            }
            return i
        }

        function qi(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Ui(Object(i), !0).forEach((function (e) {
                    Zi(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Ui(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function Zi(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function $i(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        function Ji(t, e) {
            return Ji = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            }, Ji(t, e)
        }

        function Qi(t) {
            return Qi = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }, Qi(t)
        }

        const Ki = function (t) {
            !function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Ji(t, e)
            }(o, t);
            var e, i, a, s, n = (a = o, s = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                    }))), !0
                } catch (t) {
                    return !1
                }
            }(), function () {
                var t, e = Qi(a);
                if (s) {
                    var i = Qi(this).constructor;
                    t = Reflect.construct(e, arguments, i)
                } else t = e.apply(this, arguments);
                return function (t, e) {
                    if (e && ("object" === _i(e) || "function" == typeof e)) return e;
                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                    return function (t) {
                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t)
                }(this, t)
            });

            function o() {
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, o), n.apply(this, arguments)
            }

            return e = o, (i = [{
                key: "draw", value: function (t, e) {
                    var i = this.w, a = new g(this.ctx);
                    this.rangeBarOptions = this.w.config.plotOptions.rangeBar, this.series = t, this.seriesRangeStart = i.globals.seriesRangeStart, this.seriesRangeEnd = i.globals.seriesRangeEnd, this.barHelpers.initVariables(t);
                    for (var s = a.group({class: "apexcharts-rangebar-series apexcharts-plot-series"}), n = 0; n < t.length; n++) {
                        var o, l, c, h, d = void 0, u = void 0, f = i.globals.comboCharts ? e[n] : n, p = a.group({
                            class: "apexcharts-series",
                            seriesName: r.escapeString(i.globals.seriesNames[f]),
                            rel: n + 1,
                            "data:realIndex": f
                        });
                        this.ctx.series.addCollapsedClassToSeries(p, f), t[n].length > 0 && (this.visibleI = this.visibleI + 1);
                        var x = 0, b = 0;
                        this.yRatio.length > 1 && (this.yaxisIndex = f);
                        var v = this.barHelpers.initialPositions();
                        u = v.y, h = v.zeroW, d = v.x, b = v.barWidth, x = v.barHeight, o = v.xDivision, l = v.yDivision, c = v.zeroH;
                        for (var m = a.group({
                            class: "apexcharts-datalabels",
                            "data:realIndex": f
                        }), y = a.group({class: "apexcharts-rangebar-goals-markers"}), w = 0; w < i.globals.dataPoints; w++) {
                            var k, A = this.barHelpers.getStrokeWidth(n, w, f), S = this.seriesRangeStart[n][w],
                                C = this.seriesRangeEnd[n][w], P = null, L = null, O = null,
                                T = {x: d, y: u, strokeWidth: A, elSeries: p}, I = this.seriesLen;
                            if (i.config.plotOptions.bar.rangeBarGroupRows && (I = 1), void 0 === i.config.series[n].data[w]) break;
                            if (this.isHorizontal) {
                                O = u + x * this.visibleI;
                                var E = (l - x * I) / 2;
                                if (i.config.series[n].data[w].x) {
                                    var M = this.detectOverlappingBars({
                                        i: n,
                                        j: w,
                                        barYPosition: O,
                                        srty: E,
                                        barHeight: x,
                                        yDivision: l,
                                        initPositions: v
                                    });
                                    x = M.barHeight, O = M.barYPosition
                                }
                                b = (P = this.drawRangeBarPaths(qi({
                                    indexes: {i: n, j: w, realIndex: f},
                                    barHeight: x,
                                    barYPosition: O,
                                    zeroW: h,
                                    yDivision: l,
                                    y1: S,
                                    y2: C
                                }, T))).barWidth
                            } else {
                                i.globals.isXNumeric && (d = (i.globals.seriesX[n][w] - i.globals.minX) / this.xRatio - b / 2), L = d + b * this.visibleI;
                                var z = (o - b * I) / 2;
                                if (i.config.series[n].data[w].x) {
                                    var X = this.detectOverlappingBars({
                                        i: n,
                                        j: w,
                                        barXPosition: L,
                                        srtx: z,
                                        barWidth: b,
                                        xDivision: o,
                                        initPositions: v
                                    });
                                    b = X.barWidth, L = X.barXPosition
                                }
                                x = (P = this.drawRangeColumnPaths(qi({
                                    indexes: {i: n, j: w, realIndex: f},
                                    barWidth: b,
                                    barXPosition: L,
                                    zeroH: c,
                                    xDivision: o
                                }, T))).barHeight
                            }
                            var Y = this.barHelpers.drawGoalLine({
                                barXPosition: P.barXPosition,
                                barYPosition: O,
                                goalX: P.goalX,
                                goalY: P.goalY,
                                barHeight: x,
                                barWidth: b
                            });
                            Y && y.add(Y), u = P.y, d = P.x;
                            var R = this.barHelpers.getPathFillColor(t, n, w, f), F = i.globals.stroke.colors[f];
                            this.renderSeries((Zi(k = {
                                realIndex: f,
                                pathFill: R,
                                lineFill: F,
                                j: w,
                                i: n,
                                x: d,
                                y: u,
                                y1: S,
                                y2: C,
                                pathFrom: P.pathFrom,
                                pathTo: P.pathTo,
                                strokeWidth: A,
                                elSeries: p,
                                series: t,
                                barHeight: x,
                                barWidth: b,
                                barXPosition: L,
                                barYPosition: O
                            }, "barWidth", b), Zi(k, "elDataLabelsWrap", m), Zi(k, "elGoalsMarkers", y), Zi(k, "visibleSeries", this.visibleI), Zi(k, "type", "rangebar"), k))
                        }
                        s.add(p)
                    }
                    return s
                }
            }, {
                key: "detectOverlappingBars", value: function (t) {
                    var e = t.i, i = t.j, a = t.barYPosition, r = t.barXPosition, s = t.srty, n = t.srtx,
                        o = t.barHeight, l = t.barWidth, c = t.yDivision, h = t.xDivision, d = t.initPositions,
                        u = this.w, g = [], f = u.config.series[e].data[i].rangeName, p = u.config.series[e].data[i].x,
                        x = Array.isArray(p) ? p.join(" ") : p, b = u.globals.labels.map((function (t) {
                            return Array.isArray(t) ? t.join(" ") : t
                        })).indexOf(x), v = u.globals.seriesRange[e].findIndex((function (t) {
                            return t.x === x && t.overlaps.length > 0
                        }));
                    return this.isHorizontal ? (a = u.config.plotOptions.bar.rangeBarGroupRows ? s + c * b : s + o * this.visibleI + c * b, v > -1 && !u.config.plotOptions.bar.rangeBarOverlap && (g = u.globals.seriesRange[e][v].overlaps).indexOf(f) > -1 && (a = (o = d.barHeight / g.length) * this.visibleI + c * (100 - parseInt(this.barOptions.barHeight, 10)) / 100 / 2 + o * (this.visibleI + g.indexOf(f)) + c * b)) : (b > -1 && (r = u.config.plotOptions.bar.rangeBarGroupRows ? n + h * b : n + l * this.visibleI + h * b), v > -1 && !u.config.plotOptions.bar.rangeBarOverlap && (g = u.globals.seriesRange[e][v].overlaps).indexOf(f) > -1 && (r = (l = d.barWidth / g.length) * this.visibleI + h * (100 - parseInt(this.barOptions.barWidth, 10)) / 100 / 2 + l * (this.visibleI + g.indexOf(f)) + h * b)), {
                        barYPosition: a,
                        barXPosition: r,
                        barHeight: o,
                        barWidth: l
                    }
                }
            }, {
                key: "drawRangeColumnPaths", value: function (t) {
                    var e = t.indexes, i = t.x, a = t.xDivision, r = t.barWidth, s = t.barXPosition, n = t.zeroH,
                        o = this.w, l = e.i, c = e.j, h = this.yRatio[this.yaxisIndex], d = e.realIndex,
                        u = this.getRangeValue(d, c), g = Math.min(u.start, u.end), f = Math.max(u.start, u.end);
                    void 0 === this.series[l][c] || null === this.series[l][c] ? g = n : (g = n - g / h, f = n - f / h);
                    var p = Math.abs(f - g), x = this.barHelpers.getColumnPaths({
                        barXPosition: s,
                        barWidth: r,
                        y1: g,
                        y2: f,
                        strokeWidth: this.strokeWidth,
                        series: this.seriesRangeEnd,
                        realIndex: e.realIndex,
                        i: d,
                        j: c,
                        w: o
                    });
                    if (o.globals.isXNumeric) {
                        var b = this.getBarXForNumericXAxis({x: i, j: c, realIndex: d, barWidth: r});
                        i = b.x, s = b.barXPosition
                    } else i += a;
                    return {
                        pathTo: x.pathTo,
                        pathFrom: x.pathFrom,
                        barHeight: p,
                        x: i,
                        y: f,
                        goalY: this.barHelpers.getGoalValues("y", null, n, l, c),
                        barXPosition: s
                    }
                }
            }, {
                key: "drawRangeBarPaths", value: function (t) {
                    var e = t.indexes, i = t.y, a = t.y1, r = t.y2, s = t.yDivision, n = t.barHeight,
                        o = t.barYPosition, l = t.zeroW, c = this.w, h = l + a / this.invertedYRatio,
                        d = l + r / this.invertedYRatio, u = Math.abs(d - h), g = this.barHelpers.getBarpaths({
                            barYPosition: o,
                            barHeight: n,
                            x1: h,
                            x2: d,
                            strokeWidth: this.strokeWidth,
                            series: this.seriesRangeEnd,
                            i: e.realIndex,
                            realIndex: e.realIndex,
                            j: e.j,
                            w: c
                        });
                    return c.globals.isXNumeric || (i += s), {
                        pathTo: g.pathTo,
                        pathFrom: g.pathFrom,
                        barWidth: u,
                        x: d,
                        goalX: this.barHelpers.getGoalValues("x", l, null, e.realIndex, e.j),
                        y: i
                    }
                }
            }, {
                key: "getRangeValue", value: function (t, e) {
                    var i = this.w;
                    return {start: i.globals.seriesRangeStart[t][e], end: i.globals.seriesRangeEnd[t][e]}
                }
            }]) && $i(e.prototype, i), o
        }(li);

        function ta(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var ea = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.w = e.w, this.lineCtx = e
            }

            var e, i;
            return e = t, (i = [{
                key: "sameValueSeriesFix", value: function (t, e) {
                    var i = this.w;
                    if (("gradient" === i.config.fill.type || "gradient" === i.config.fill.type[t]) && new p(this.lineCtx.ctx, i).seriesHaveSameValues(t)) {
                        var a = e[t].slice();
                        a[a.length - 1] = a[a.length - 1] + 1e-6, e[t] = a
                    }
                    return e
                }
            }, {
                key: "calculatePoints", value: function (t) {
                    var e = t.series, i = t.realIndex, a = t.x, s = t.y, n = t.i, o = t.j, l = t.prevY, c = this.w,
                        h = [], d = [];
                    if (0 === o) {
                        var u = this.lineCtx.categoryAxisCorrection + c.config.markers.offsetX;
                        c.globals.isXNumeric && (u = (c.globals.seriesX[i][0] - c.globals.minX) / this.lineCtx.xRatio + c.config.markers.offsetX), h.push(u), d.push(r.isNumber(e[n][0]) ? l + c.config.markers.offsetY : null), h.push(a + c.config.markers.offsetX), d.push(r.isNumber(e[n][o + 1]) ? s + c.config.markers.offsetY : null)
                    } else h.push(a + c.config.markers.offsetX), d.push(r.isNumber(e[n][o + 1]) ? s + c.config.markers.offsetY : null);
                    return {x: h, y: d}
                }
            }, {
                key: "checkPreviousPaths", value: function (t) {
                    for (var e = t.pathFromLine, i = t.pathFromArea, a = t.realIndex, r = this.w, s = 0; s < r.globals.previousPaths.length; s++) {
                        var n = r.globals.previousPaths[s];
                        ("line" === n.type || "area" === n.type) && n.paths.length > 0 && parseInt(n.realIndex, 10) === parseInt(a, 10) && ("line" === n.type ? (this.lineCtx.appendPathFrom = !1, e = r.globals.previousPaths[s].paths[0].d) : "area" === n.type && (this.lineCtx.appendPathFrom = !1, i = r.globals.previousPaths[s].paths[0].d, r.config.stroke.show && r.globals.previousPaths[s].paths[1] && (e = r.globals.previousPaths[s].paths[1].d)))
                    }
                    return {pathFromLine: e, pathFromArea: i}
                }
            }, {
                key: "determineFirstPrevY", value: function (t) {
                    var e, i, a = t.i, r = t.series, s = t.prevY, n = t.lineYPosition, o = this.w,
                        l = o.config.chart.stacked && !o.globals.comboCharts || o.config.chart.stacked && o.globals.comboCharts && (!this.w.config.chart.stackOnlyBar || "bar" === (null === (e = this.w.config.series[a]) || void 0 === e ? void 0 : e.type));
                    if (void 0 !== (null === (i = r[a]) || void 0 === i ? void 0 : i[0])) s = (n = l && a > 0 ? this.lineCtx.prevSeriesY[a - 1][0] : this.lineCtx.zeroY) - r[a][0] / this.lineCtx.yRatio[this.lineCtx.yaxisIndex] + 2 * (this.lineCtx.isReversed ? r[a][0] / this.lineCtx.yRatio[this.lineCtx.yaxisIndex] : 0); else if (l && a > 0 && void 0 === r[a][0]) for (var c = a - 1; c >= 0; c--) if (null !== r[c][0] && void 0 !== r[c][0]) {
                        s = n = this.lineCtx.prevSeriesY[c][0];
                        break
                    }
                    return {prevY: s, lineYPosition: n}
                }
            }]) && ta(e.prototype, i), t
        }(), ia = function (t) {
            for (var e = "", i = 0; i < t.length; i++) {
                var a = t[i], r = a.length;
                r > 4 ? (e += "C".concat(a[0], ", ").concat(a[1]), e += ", ".concat(a[2], ", ").concat(a[3]), e += ", ".concat(a[4], ", ").concat(a[5])) : r > 2 && (e += "S".concat(a[0], ", ").concat(a[1]), e += ", ".concat(a[2], ", ").concat(a[3]))
            }
            return e
        }, aa = function (t) {
            var e = function (t) {
                for (var e, i, a, r, s = function (t) {
                    for (var e = [], i = t[0], a = t[1], r = e[0] = ra(i, a), s = 1, n = t.length - 1; s < n; s++) i = a, a = t[s + 1], e[s] = .5 * (r + (r = ra(i, a)));
                    return e[s] = r, e
                }(t), n = t.length - 1, o = [], l = 0; l < n; l++) a = ra(t[l], t[l + 1]), Math.abs(a) < 1e-6 ? s[l] = s[l + 1] = 0 : (r = (e = s[l] / a) * e + (i = s[l + 1] / a) * i) > 9 && (r = 3 * a / Math.sqrt(r), s[l] = r * e, s[l + 1] = r * i);
                for (var c = 0; c <= n; c++) r = (t[Math.min(n, c + 1)][0] - t[Math.max(0, c - 1)][0]) / (6 * (1 + s[c] * s[c])), o.push([r || 0, s[c] * r || 0]);
                return o
            }(t), i = t[1], a = t[0], r = [], s = e[1], n = e[0];
            r.push(a, [a[0] + n[0], a[1] + n[1], i[0] - s[0], i[1] - s[1], i[0], i[1]]);
            for (var o = 2, l = e.length; o < l; o++) {
                var c = t[o], h = e[o];
                r.push([c[0] - h[0], c[1] - h[1], c[0], c[1]])
            }
            return r
        };

        function ra(t, e) {
            return (e[1] - t[1]) / (e[0] - t[0])
        }

        function sa(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, a)
            }
            return i
        }

        function na(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? sa(Object(i), !0).forEach((function (e) {
                    oa(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : sa(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function oa(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function la(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        const ca = function () {
            function t(e, i, a) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.xyRatios = i, this.pointsChart = !("bubble" !== this.w.config.chart.type && "scatter" !== this.w.config.chart.type) || a, this.scatter = new at(this.ctx), this.noNegatives = this.w.globals.minX === Number.MAX_VALUE, this.lineHelpers = new ea(this), this.markers = new et(this.ctx), this.prevSeriesY = [], this.categoryAxisCorrection = 0, this.yaxisIndex = 0
            }

            var e, i;
            return e = t, (i = [{
                key: "draw", value: function (t, e, i, a) {
                    var r, s = this.w, n = new g(this.ctx), o = s.globals.comboCharts ? e : s.config.chart.type,
                        l = n.group({class: "apexcharts-".concat(o, "-series apexcharts-plot-series")}),
                        c = new p(this.ctx, s);
                    this.yRatio = this.xyRatios.yRatio, this.zRatio = this.xyRatios.zRatio, this.xRatio = this.xyRatios.xRatio, this.baseLineY = this.xyRatios.baseLineY, t = c.getLogSeries(t), this.yRatio = c.getLogYRatios(this.yRatio);
                    for (var h = [], d = 0; d < t.length; d++) {
                        t = this.lineHelpers.sameValueSeriesFix(d, t);
                        var u = s.globals.comboCharts ? i[d] : d;
                        this._initSerieVariables(t, d, u);
                        var f = [], x = [], b = [], v = s.globals.padHorizontal + this.categoryAxisCorrection;
                        this.ctx.series.addCollapsedClassToSeries(this.elSeries, u), s.globals.isXNumeric && s.globals.seriesX.length > 0 && (v = (s.globals.seriesX[u][0] - s.globals.minX) / this.xRatio), b.push(v);
                        var m, y = v, w = void 0, k = y, A = this.zeroY, S = this.zeroY;
                        A = this.lineHelpers.determineFirstPrevY({
                            i: d,
                            series: t,
                            prevY: A,
                            lineYPosition: 0
                        }).prevY, "monotonCubic" === s.config.stroke.curve && null === t[d][0] ? f.push(null) : f.push(A), m = A, "rangeArea" === o && (w = S = this.lineHelpers.determineFirstPrevY({
                            i: d,
                            series: a,
                            prevY: S,
                            lineYPosition: 0
                        }).prevY, x.push(S));
                        var C = {
                            type: o,
                            series: t,
                            realIndex: u,
                            i: d,
                            x: v,
                            y: 1,
                            pX: y,
                            pY: m,
                            pathsFrom: this._calculatePathsFrom({
                                type: o,
                                series: t,
                                i: d,
                                realIndex: u,
                                prevX: k,
                                prevY: A,
                                prevY2: S
                            }),
                            linePaths: [],
                            areaPaths: [],
                            seriesIndex: i,
                            lineYPosition: 0,
                            xArrj: b,
                            yArrj: f,
                            y2Arrj: x,
                            seriesRangeEnd: a
                        }, P = this._iterateOverDataPoints(na(na({}, C), {}, {
                            iterations: "rangeArea" === o ? t[d].length - 1 : void 0,
                            isRangeStart: !0
                        }));
                        if ("rangeArea" === o) {
                            var L = this._calculatePathsFrom({series: a, i: d, realIndex: u, prevX: k, prevY: S}),
                                O = this._iterateOverDataPoints(na(na({}, C), {}, {
                                    series: a,
                                    pY: w,
                                    pathsFrom: L,
                                    iterations: a[d].length - 1,
                                    isRangeStart: !1
                                }));
                            P.linePaths[0] = O.linePath + P.linePath, P.pathFromLine = O.pathFromLine + P.pathFromLine
                        }
                        this._handlePaths({
                            type: o,
                            realIndex: u,
                            i: d,
                            paths: P
                        }), this.elSeries.add(this.elPointsMain), this.elSeries.add(this.elDataLabelsWrap), h.push(this.elSeries)
                    }
                    if (void 0 !== (null === (r = s.config.series[0]) || void 0 === r ? void 0 : r.zIndex) && h.sort((function (t, e) {
                        return Number(t.node.getAttribute("zIndex")) - Number(e.node.getAttribute("zIndex"))
                    })), s.config.chart.stacked) for (var T = h.length; T > 0; T--) l.add(h[T - 1]); else for (var I = 0; I < h.length; I++) l.add(h[I]);
                    return l
                }
            }, {
                key: "_initSerieVariables", value: function (t, e, i) {
                    var a = this.w, s = new g(this.ctx);
                    this.xDivision = a.globals.gridWidth / (a.globals.dataPoints - ("on" === a.config.xaxis.tickPlacement ? 1 : 0)), this.strokeWidth = Array.isArray(a.config.stroke.width) ? a.config.stroke.width[i] : a.config.stroke.width, this.yRatio.length > 1 && (this.yaxisIndex = i), this.isReversed = a.config.yaxis[this.yaxisIndex] && a.config.yaxis[this.yaxisIndex].reversed, this.zeroY = a.globals.gridHeight - this.baseLineY[this.yaxisIndex] - (this.isReversed ? a.globals.gridHeight : 0) + (this.isReversed ? 2 * this.baseLineY[this.yaxisIndex] : 0), this.areaBottomY = this.zeroY, (this.zeroY > a.globals.gridHeight || "end" === a.config.plotOptions.area.fillTo) && (this.areaBottomY = a.globals.gridHeight), this.categoryAxisCorrection = this.xDivision / 2, this.elSeries = s.group({
                        class: "apexcharts-series",
                        zIndex: void 0 !== a.config.series[i].zIndex ? a.config.series[i].zIndex : i,
                        seriesName: r.escapeString(a.globals.seriesNames[i])
                    }), this.elPointsMain = s.group({
                        class: "apexcharts-series-markers-wrap",
                        "data:realIndex": i
                    }), this.elDataLabelsWrap = s.group({class: "apexcharts-datalabels", "data:realIndex": i});
                    var n = t[e].length === a.globals.dataPoints;
                    this.elSeries.attr({
                        "data:longestSeries": n,
                        rel: e + 1,
                        "data:realIndex": i
                    }), this.appendPathFrom = !0
                }
            }, {
                key: "_calculatePathsFrom", value: function (t) {
                    var e, i, a, r, s = t.type, n = t.series, o = t.i, l = t.realIndex, c = t.prevX, h = t.prevY,
                        d = t.prevY2, u = this.w, f = new g(this.ctx);
                    if (null === n[o][0]) {
                        for (var p = 0; p < n[o].length; p++) if (null !== n[o][p]) {
                            c = this.xDivision * p, h = this.zeroY - n[o][p] / this.yRatio[this.yaxisIndex], e = f.move(c, h), i = f.move(c, this.areaBottomY);
                            break
                        }
                    } else e = f.move(c, h), "rangeArea" === s && (e = f.move(c, d) + f.line(c, h)), i = f.move(c, this.areaBottomY) + f.line(c, h);
                    if (a = f.move(-1, this.zeroY) + f.line(-1, this.zeroY), r = f.move(-1, this.zeroY) + f.line(-1, this.zeroY), u.globals.previousPaths.length > 0) {
                        var x = this.lineHelpers.checkPreviousPaths({pathFromLine: a, pathFromArea: r, realIndex: l});
                        a = x.pathFromLine, r = x.pathFromArea
                    }
                    return {prevX: c, prevY: h, linePath: e, areaPath: i, pathFromLine: a, pathFromArea: r}
                }
            }, {
                key: "_handlePaths", value: function (t) {
                    var e = t.type, i = t.realIndex, a = t.i, r = t.paths, s = this.w, n = new g(this.ctx),
                        o = new K(this.ctx);
                    this.prevSeriesY.push(r.yArrj), s.globals.seriesXvalues[i] = r.xArrj, s.globals.seriesYvalues[i] = r.yArrj;
                    var l = s.config.forecastDataPoints;
                    if (l.count > 0 && "rangeArea" !== e) {
                        var c = s.globals.seriesXvalues[i][s.globals.seriesXvalues[i].length - l.count - 1],
                            h = n.drawRect(c, 0, s.globals.gridWidth, s.globals.gridHeight, 0);
                        s.globals.dom.elForecastMask.appendChild(h.node);
                        var d = n.drawRect(0, 0, c, s.globals.gridHeight, 0);
                        s.globals.dom.elNonForecastMask.appendChild(d.node)
                    }
                    this.pointsChart || s.globals.delayedElements.push({el: this.elPointsMain.node, index: i});
                    var u = {
                        i: a,
                        realIndex: i,
                        animationDelay: a,
                        initialSpeed: s.config.chart.animations.speed,
                        dataChangeSpeed: s.config.chart.animations.dynamicAnimation.speed,
                        className: "apexcharts-".concat(e)
                    };
                    if ("area" === e) for (var f = o.fillPath({seriesNumber: i}), p = 0; p < r.areaPaths.length; p++) {
                        var x = n.renderPaths(na(na({}, u), {}, {
                            pathFrom: r.pathFromArea,
                            pathTo: r.areaPaths[p],
                            stroke: "none",
                            strokeWidth: 0,
                            strokeLineCap: null,
                            fill: f
                        }));
                        this.elSeries.add(x)
                    }
                    if (s.config.stroke.show && !this.pointsChart) {
                        var b = null;
                        if ("line" === e) b = o.fillPath({
                            seriesNumber: i,
                            i: a
                        }); else if ("solid" === s.config.stroke.fill.type) b = s.globals.stroke.colors[i]; else {
                            var v = s.config.fill;
                            s.config.fill = s.config.stroke.fill, b = o.fillPath({
                                seriesNumber: i,
                                i: a
                            }), s.config.fill = v
                        }
                        for (var m = 0; m < r.linePaths.length; m++) {
                            var y = b;
                            "rangeArea" === e && (y = o.fillPath({seriesNumber: i}));
                            var w = na(na({}, u), {}, {
                                pathFrom: r.pathFromLine,
                                pathTo: r.linePaths[m],
                                stroke: b,
                                strokeWidth: this.strokeWidth,
                                strokeLineCap: s.config.stroke.lineCap,
                                fill: "rangeArea" === e ? y : "none"
                            }), k = n.renderPaths(w);
                            if (this.elSeries.add(k), k.attr("fill-rule", "evenodd"), l.count > 0 && "rangeArea" !== e) {
                                var A = n.renderPaths(w);
                                A.node.setAttribute("stroke-dasharray", l.dashArray), l.strokeWidth && A.node.setAttribute("stroke-width", l.strokeWidth), this.elSeries.add(A), A.attr("clip-path", "url(#forecastMask".concat(s.globals.cuid, ")")), k.attr("clip-path", "url(#nonForecastMask".concat(s.globals.cuid, ")"))
                            }
                        }
                    }
                }
            }, {
                key: "_iterateOverDataPoints", value: function (t) {
                    var e, i = this, a = t.type, s = t.series, n = t.iterations, o = t.realIndex, l = t.i, c = t.x,
                        h = t.y, d = t.pX, u = t.pY, f = t.pathsFrom, p = t.linePaths, x = t.areaPaths,
                        b = t.seriesIndex, v = t.lineYPosition, m = t.xArrj, y = t.yArrj, w = t.y2Arrj,
                        k = t.isRangeStart, A = t.seriesRangeEnd, S = this.w, C = new g(this.ctx), P = this.yRatio,
                        L = f.prevY, O = f.linePath, T = f.areaPath, I = f.pathFromLine, E = f.pathFromArea,
                        M = r.isNumber(S.globals.minYArr[o]) ? S.globals.minYArr[o] : S.globals.minY;
                    n || (n = S.globals.dataPoints > 1 ? S.globals.dataPoints - 1 : S.globals.dataPoints);
                    for (var z = function (t, e) {
                        return e - t / P[i.yaxisIndex] + 2 * (i.isReversed ? t / P[i.yaxisIndex] : 0)
                    }, X = h, Y = S.config.chart.stacked && !S.globals.comboCharts || S.config.chart.stacked && S.globals.comboCharts && (!this.w.config.chart.stackOnlyBar || "bar" === (null === (e = this.w.config.series[o]) || void 0 === e ? void 0 : e.type)), R = 0; R < n; R++) {
                        var F = void 0 === s[l][R + 1] || null === s[l][R + 1];
                        if (S.globals.isXNumeric) {
                            var D = S.globals.seriesX[o][R + 1];
                            void 0 === S.globals.seriesX[o][R + 1] && (D = S.globals.seriesX[o][n - 1]), c = (D - S.globals.minX) / this.xRatio
                        } else c += this.xDivision;
                        v = Y && l > 0 && S.globals.collapsedSeries.length < S.config.series.length - 1 ? this.prevSeriesY[function (t) {
                            for (var e = t, i = 0; i < S.globals.series.length; i++) if (S.globals.collapsedSeriesIndices.indexOf(t) > -1) {
                                e--;
                                break
                            }
                            return e >= 0 ? e : 0
                        }(l - 1)][R + 1] : this.zeroY, F ? h = z(M, v) : (h = z(s[l][R + 1], v), "rangeArea" === a && (X = z(A[l][R + 1], v))), m.push(c), F && "smooth" === S.config.stroke.curve ? y.push(null) : y.push(h), w.push(X);
                        var H = this.lineHelpers.calculatePoints({
                            series: s,
                            x: c,
                            y: h,
                            realIndex: o,
                            i: l,
                            j: R,
                            prevY: L
                        }), N = this._createPaths({
                            type: a,
                            series: s,
                            i: l,
                            realIndex: o,
                            j: R,
                            x: c,
                            y: h,
                            y2: X,
                            xArrj: m,
                            yArrj: y,
                            y2Arrj: w,
                            pX: d,
                            pY: u,
                            linePath: O,
                            areaPath: T,
                            linePaths: p,
                            areaPaths: x,
                            seriesIndex: b,
                            isRangeStart: k
                        });
                        x = N.areaPaths, p = N.linePaths, d = N.pX, u = N.pY, T = N.areaPath, O = N.linePath, !this.appendPathFrom || "monotoneCubic" === S.config.stroke.curve && "rangeArea" === a || (I += C.line(c, this.zeroY), E += C.line(c, this.zeroY)), this.handleNullDataPoints(s, H, l, R, o), this._handleMarkersAndLabels({
                            type: a,
                            pointsPos: H,
                            i: l,
                            j: R,
                            realIndex: o,
                            isRangeStart: k
                        })
                    }
                    return {
                        yArrj: y,
                        xArrj: m,
                        pathFromArea: E,
                        areaPaths: x,
                        pathFromLine: I,
                        linePaths: p,
                        linePath: O,
                        areaPath: T
                    }
                }
            }, {
                key: "_handleMarkersAndLabels", value: function (t) {
                    var e = t.type, i = t.pointsPos, a = t.isRangeStart, r = t.i, s = t.j, n = t.realIndex, o = this.w,
                        l = new st(this.ctx);
                    if (this.pointsChart) this.scatter.draw(this.elSeries, s, {
                        realIndex: n,
                        pointsPos: i,
                        zRatio: this.zRatio,
                        elParent: this.elPointsMain
                    }); else {
                        o.globals.series[r].length > 1 && this.elPointsMain.node.classList.add("apexcharts-element-hidden");
                        var c = this.markers.plotChartMarkers(i, n, s + 1);
                        null !== c && this.elPointsMain.add(c)
                    }
                    var h = l.drawDataLabel({type: e, isRangeStart: a, pos: i, i: n, j: s + 1});
                    null !== h && this.elDataLabelsWrap.add(h)
                }
            }, {
                key: "_createPaths", value: function (t) {
                    var e = t.type, i = t.series, a = t.i, r = t.realIndex, s = t.j, n = t.x, o = t.y, l = t.xArrj,
                        c = t.yArrj, h = t.y2, d = t.y2Arrj, u = t.pX, f = t.pY, p = t.linePath, x = t.areaPath,
                        b = t.linePaths, v = t.areaPaths, m = t.seriesIndex, y = t.isRangeStart, w = this.w,
                        k = new g(this.ctx), A = w.config.stroke.curve, S = this.areaBottomY;
                    if (Array.isArray(w.config.stroke.curve) && (A = Array.isArray(m) ? w.config.stroke.curve[m[a]] : w.config.stroke.curve[a]), "rangeArea" === e && (w.globals.hasNullValues || w.config.forecastDataPoints.count > 0) && "monotoneCubic" === A && (A = "straight"), "monotoneCubic" === A) {
                        var C = "rangeArea" === e ? l.length === w.globals.dataPoints : s === i[a].length - 2,
                            P = l.map((function (t, e) {
                                return [l[e], c[e]]
                            })).filter((function (t) {
                                return null !== t[1]
                            }));
                        if (C && P.length > 1) {
                            var L = aa(P);
                            if (p += ia(L), null === i[a][0] ? x = p : x += ia(L), "rangeArea" === e && y) {
                                p += k.line(l[l.length - 1], d[d.length - 1]);
                                var O = l.slice().reverse(), T = d.slice().reverse(), I = O.map((function (t, e) {
                                    return [O[e], T[e]]
                                })), E = aa(I);
                                x = p += ia(E)
                            } else x += k.line(P[P.length - 1][0], S) + k.line(P[0][0], S) + k.move(P[0][0], P[0][1]) + "z";
                            b.push(p), v.push(x)
                        }
                    } else if ("smooth" === A) {
                        var M = .35 * (n - u);
                        w.globals.hasNullValues ? (null !== i[a][s] && (null !== i[a][s + 1] ? (p = k.move(u, f) + k.curve(u + M, f, n - M, o, n + 1, o), x = k.move(u + 1, f) + k.curve(u + M, f, n - M, o, n + 1, o) + k.line(n, S) + k.line(u, S) + "z") : (p = k.move(u, f), x = k.move(u, f) + "z")), b.push(p), v.push(x)) : (p += k.curve(u + M, f, n - M, o, n, o), x += k.curve(u + M, f, n - M, o, n, o)), u = n, f = o, s === i[a].length - 2 && (x = x + k.curve(u, f, n, o, n, S) + k.move(n, o) + "z", "rangeArea" === e && y ? p = p + k.curve(u, f, n, o, n, h) + k.move(n, h) + "z" : w.globals.hasNullValues || (b.push(p), v.push(x)))
                    } else {
                        if (null === i[a][s + 1]) {
                            p += k.move(n, o);
                            var z = w.globals.isXNumeric ? (w.globals.seriesX[r][s] - w.globals.minX) / this.xRatio : n - this.xDivision;
                            x = x + k.line(z, S) + k.move(n, o) + "z"
                        }
                        null === i[a][s] && (p += k.move(n, o), x += k.move(n, S)), "stepline" === A ? (p = p + k.line(n, null, "H") + k.line(null, o, "V"), x = x + k.line(n, null, "H") + k.line(null, o, "V")) : "straight" === A && (p += k.line(n, o), x += k.line(n, o)), s === i[a].length - 2 && (x = x + k.line(n, S) + k.move(n, o) + "z", "rangeArea" === e && y ? p = p + k.line(n, h) + k.move(n, h) + "z" : (b.push(p), v.push(x)))
                    }
                    return {linePaths: b, areaPaths: v, pX: u, pY: f, linePath: p, areaPath: x}
                }
            }, {
                key: "handleNullDataPoints", value: function (t, e, i, a, r) {
                    var s = this.w;
                    if (null === t[i][a] && s.config.markers.showNullDataPoints || 1 === t[i].length) {
                        var n = this.markers.plotChartMarkers(e, r, a + 1, this.strokeWidth - s.config.markers.strokeWidth / 2, !0);
                        null !== n && this.elPointsMain.add(n)
                    }
                }
            }]) && la(e.prototype, i), t
        }();

        function ha(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        i(600);
        var da = function () {
            function t(e, i) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.strokeWidth = this.w.config.stroke.width, this.helpers = new Oi(e), this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.labels = []
            }

            var e, i;
            return e = t, (i = [{
                key: "draw", value: function (t) {
                    var e = this, i = this.w, a = new g(this.ctx), s = new K(this.ctx),
                        n = a.group({class: "apexcharts-treemap"});
                    if (i.globals.noData) return n;
                    var o = [];
                    return t.forEach((function (t) {
                        var e = t.map((function (t) {
                            return Math.abs(t)
                        }));
                        o.push(e)
                    })), this.negRange = this.helpers.checkColorRange(), i.config.series.forEach((function (t, i) {
                        t.data.forEach((function (t) {
                            Array.isArray(e.labels[i]) || (e.labels[i] = []), e.labels[i].push(t.x)
                        }))
                    })), window.TreemapSquared.generate(o, i.globals.gridWidth, i.globals.gridHeight).forEach((function (o, c) {
                        var h = a.group({
                            class: "apexcharts-series apexcharts-treemap-series",
                            seriesName: r.escapeString(i.globals.seriesNames[c]),
                            rel: c + 1,
                            "data:realIndex": c
                        });
                        if (i.config.chart.dropShadow.enabled) {
                            var d = i.config.chart.dropShadow;
                            new l(e.ctx).dropShadow(n, d, c)
                        }
                        var u = a.group({class: "apexcharts-data-labels"});
                        o.forEach((function (r, n) {
                            var o = r[0], l = r[1], d = r[2], u = r[3],
                                g = a.drawRect(o, l, d - o, u - l, i.config.plotOptions.treemap.borderRadius, "#fff", 1, e.strokeWidth, i.config.plotOptions.treemap.useFillColorAsStroke ? p : i.globals.stroke.colors[c]);
                            g.attr({cx: o, cy: l, index: c, i: c, j: n, width: d - o, height: u - l});
                            var f = e.helpers.getShadeColor(i.config.chart.type, c, n, e.negRange), p = f.color;
                            void 0 !== i.config.series[c].data[n] && i.config.series[c].data[n].fillColor && (p = i.config.series[c].data[n].fillColor);
                            var x = s.fillPath({color: p, seriesNumber: c, dataPointIndex: n});
                            g.node.classList.add("apexcharts-treemap-rect"), g.attr({fill: x}), e.helpers.addListeners(g);
                            var b = {x: o + (d - o) / 2, y: l + (u - l) / 2, width: 0, height: 0},
                                v = {x: o, y: l, width: d - o, height: u - l};
                            if (i.config.chart.animations.enabled && !i.globals.dataChanged) {
                                var m = 1;
                                i.globals.resized || (m = i.config.chart.animations.speed), e.animateTreemap(g, b, v, m)
                            }
                            if (i.globals.dataChanged) {
                                var y = 1;
                                e.dynamicAnim.enabled && i.globals.shouldAnimate && (y = e.dynamicAnim.speed, i.globals.previousPaths[c] && i.globals.previousPaths[c][n] && i.globals.previousPaths[c][n].rect && (b = i.globals.previousPaths[c][n].rect), e.animateTreemap(g, b, v, y))
                            }
                            var w = e.getFontSize(r), k = i.config.dataLabels.formatter(e.labels[c][n], {
                                value: i.globals.series[c][n],
                                seriesIndex: c,
                                dataPointIndex: n,
                                w: i
                            });
                            "truncate" === i.config.plotOptions.treemap.dataLabels.format && (w = parseInt(i.config.dataLabels.style.fontSize, 10), k = e.truncateLabels(k, w, o, l, d, u));
                            var A = e.helpers.calculateDataLabels({
                                text: k,
                                x: (o + d) / 2,
                                y: (l + u) / 2 + e.strokeWidth / 2 + w / 3,
                                i: c,
                                j: n,
                                colorProps: f,
                                fontSize: w,
                                series: t
                            });
                            i.config.dataLabels.enabled && A && e.rotateToFitLabel(A, w, k, o, l, d, u), h.add(g), null !== A && h.add(A)
                        })), h.add(u), n.add(h)
                    })), n
                }
            }, {
                key: "getFontSize", value: function (t) {
                    var e, i, a = this.w, r = function t(e) {
                        var i, a = 0;
                        if (Array.isArray(e[0])) for (i = 0; i < e.length; i++) a += t(e[i]); else for (i = 0; i < e.length; i++) a += e[i].length;
                        return a
                    }(this.labels) / function t(e) {
                        var i, a = 0;
                        if (Array.isArray(e[0])) for (i = 0; i < e.length; i++) a += t(e[i]); else for (i = 0; i < e.length; i++) a += 1;
                        return a
                    }(this.labels);
                    return e = (t[2] - t[0]) * (t[3] - t[1]), i = Math.pow(e, .5), Math.min(i / r, parseInt(a.config.dataLabels.style.fontSize, 10))
                }
            }, {
                key: "rotateToFitLabel", value: function (t, e, i, a, r, s, n) {
                    var o = new g(this.ctx), l = o.getTextRects(i, e);
                    if (l.width + this.w.config.stroke.width + 5 > s - a && l.width <= n - r) {
                        var c = o.rotateAroundCenter(t.node);
                        t.node.setAttribute("transform", "rotate(-90 ".concat(c.x, " ").concat(c.y, ") translate(").concat(l.height / 3, ")"))
                    }
                }
            }, {
                key: "truncateLabels", value: function (t, e, i, a, r, s) {
                    var n = new g(this.ctx),
                        o = n.getTextRects(t, e).width + this.w.config.stroke.width + 5 > r - i && s - a > r - i ? s - a : r - i,
                        l = n.getTextBasedOnMaxWidth({text: t, maxWidth: o, fontSize: e});
                    return t.length !== l.length && o / e < 5 ? "" : l
                }
            }, {
                key: "animateTreemap", value: function (t, e, i, a) {
                    var r = new n(this.ctx);
                    r.animateRect(t, {x: e.x, y: e.y, width: e.width, height: e.height}, {
                        x: i.x,
                        y: i.y,
                        width: i.width,
                        height: i.height
                    }, a, (function () {
                        r.animationCompleted(t)
                    }))
                }
            }]) && ha(e.prototype, i), t
        }();

        function ua(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, a)
            }
            return i
        }

        function ga(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? ua(Object(i), !0).forEach((function (e) {
                    fa(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ua(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function fa(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function pa(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        const xa = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.timeScaleArray = [], this.utc = this.w.config.xaxis.labels.datetimeUTC
            }

            var e, i;
            return e = t, (i = [{
                key: "calculateTimeScaleTicks", value: function (t, e) {
                    var i = this, a = this.w;
                    if (a.globals.allSeriesCollapsed) return a.globals.labels = [], a.globals.timescaleLabels = [], [];
                    var r = new M(this.ctx), s = (e - t) / 864e5;
                    this.determineInterval(s), a.globals.disableZoomIn = !1, a.globals.disableZoomOut = !1, s < .00011574074074074075 ? a.globals.disableZoomIn = !0 : s > 5e4 && (a.globals.disableZoomOut = !0);
                    var n = r.getTimeUnitsfromTimestamp(t, e, this.utc), o = a.globals.gridWidth / s, l = o / 24,
                        c = l / 60, h = c / 60, d = Math.floor(24 * s), u = Math.floor(1440 * s),
                        g = Math.floor(86400 * s), f = Math.floor(s), p = Math.floor(s / 30), x = Math.floor(s / 365),
                        b = {
                            minMillisecond: n.minMillisecond,
                            minSecond: n.minSecond,
                            minMinute: n.minMinute,
                            minHour: n.minHour,
                            minDate: n.minDate,
                            minMonth: n.minMonth,
                            minYear: n.minYear
                        }, v = {
                            firstVal: b,
                            currentMillisecond: b.minMillisecond,
                            currentSecond: b.minSecond,
                            currentMinute: b.minMinute,
                            currentHour: b.minHour,
                            currentMonthDate: b.minDate,
                            currentDate: b.minDate,
                            currentMonth: b.minMonth,
                            currentYear: b.minYear,
                            daysWidthOnXAxis: o,
                            hoursWidthOnXAxis: l,
                            minutesWidthOnXAxis: c,
                            secondsWidthOnXAxis: h,
                            numberOfSeconds: g,
                            numberOfMinutes: u,
                            numberOfHours: d,
                            numberOfDays: f,
                            numberOfMonths: p,
                            numberOfYears: x
                        };
                    switch (this.tickInterval) {
                        case"years":
                            this.generateYearScale(v);
                            break;
                        case"months":
                        case"half_year":
                            this.generateMonthScale(v);
                            break;
                        case"months_days":
                        case"months_fortnight":
                        case"days":
                        case"week_days":
                            this.generateDayScale(v);
                            break;
                        case"hours":
                            this.generateHourScale(v);
                            break;
                        case"minutes_fives":
                        case"minutes":
                            this.generateMinuteScale(v);
                            break;
                        case"seconds_tens":
                        case"seconds_fives":
                        case"seconds":
                            this.generateSecondScale(v)
                    }
                    var m = this.timeScaleArray.map((function (t) {
                        var e = {
                            position: t.position,
                            unit: t.unit,
                            year: t.year,
                            day: t.day ? t.day : 1,
                            hour: t.hour ? t.hour : 0,
                            month: t.month + 1
                        };
                        return "month" === t.unit ? ga(ga({}, e), {}, {
                            day: 1,
                            value: t.value + 1
                        }) : "day" === t.unit || "hour" === t.unit ? ga(ga({}, e), {}, {value: t.value}) : "minute" === t.unit ? ga(ga({}, e), {}, {
                            value: t.value,
                            minute: t.value
                        }) : "second" === t.unit ? ga(ga({}, e), {}, {
                            value: t.value,
                            minute: t.minute,
                            second: t.second
                        }) : t
                    }));
                    return m.filter((function (t) {
                        var e = 1, r = Math.ceil(a.globals.gridWidth / 120), s = t.value;
                        void 0 !== a.config.xaxis.tickAmount && (r = a.config.xaxis.tickAmount), m.length > r && (e = Math.floor(m.length / r));
                        var n = !1, o = !1;
                        switch (i.tickInterval) {
                            case"years":
                                "year" === t.unit && (n = !0);
                                break;
                            case"half_year":
                                e = 7, "year" === t.unit && (n = !0);
                                break;
                            case"months":
                                e = 1, "year" === t.unit && (n = !0);
                                break;
                            case"months_fortnight":
                                e = 15, "year" !== t.unit && "month" !== t.unit || (n = !0), 30 === s && (o = !0);
                                break;
                            case"months_days":
                                e = 10, "month" === t.unit && (n = !0), 30 === s && (o = !0);
                                break;
                            case"week_days":
                                e = 8, "month" === t.unit && (n = !0);
                                break;
                            case"days":
                                e = 1, "month" === t.unit && (n = !0);
                                break;
                            case"hours":
                                "day" === t.unit && (n = !0);
                                break;
                            case"minutes_fives":
                            case"seconds_fives":
                                s % 5 != 0 && (o = !0);
                                break;
                            case"seconds_tens":
                                s % 10 != 0 && (o = !0)
                        }
                        if ("hours" === i.tickInterval || "minutes_fives" === i.tickInterval || "seconds_tens" === i.tickInterval || "seconds_fives" === i.tickInterval) {
                            if (!o) return !0
                        } else if ((s % e == 0 || n) && !o) return !0
                    }))
                }
            }, {
                key: "recalcDimensionsBasedOnFormat", value: function (t, e) {
                    var i = this.w, a = this.formatDates(t), r = this.removeOverlappingTS(a);
                    i.globals.timescaleLabels = r.slice(), new Kt(this.ctx).plotCoords()
                }
            }, {
                key: "determineInterval", value: function (t) {
                    var e = 24 * t, i = 60 * e;
                    switch (!0) {
                        case t / 365 > 5:
                            this.tickInterval = "years";
                            break;
                        case t > 800:
                            this.tickInterval = "half_year";
                            break;
                        case t > 180:
                            this.tickInterval = "months";
                            break;
                        case t > 90:
                            this.tickInterval = "months_fortnight";
                            break;
                        case t > 60:
                            this.tickInterval = "months_days";
                            break;
                        case t > 30:
                            this.tickInterval = "week_days";
                            break;
                        case t > 2:
                            this.tickInterval = "days";
                            break;
                        case e > 2.4:
                            this.tickInterval = "hours";
                            break;
                        case i > 15:
                            this.tickInterval = "minutes_fives";
                            break;
                        case i > 5:
                            this.tickInterval = "minutes";
                            break;
                        case i > 1:
                            this.tickInterval = "seconds_tens";
                            break;
                        case 60 * i > 20:
                            this.tickInterval = "seconds_fives";
                            break;
                        default:
                            this.tickInterval = "seconds"
                    }
                }
            }, {
                key: "generateYearScale", value: function (t) {
                    var e = t.firstVal, i = t.currentMonth, a = t.currentYear, s = t.daysWidthOnXAxis,
                        n = t.numberOfYears, o = e.minYear, l = 0, c = new M(this.ctx), h = "year";
                    if (e.minDate > 1 || e.minMonth > 0) {
                        var d = c.determineRemainingDaysOfYear(e.minYear, e.minMonth, e.minDate);
                        l = (c.determineDaysOfYear(e.minYear) - d + 1) * s, o = e.minYear + 1, this.timeScaleArray.push({
                            position: l,
                            value: o,
                            unit: h,
                            year: o,
                            month: r.monthMod(i + 1)
                        })
                    } else 1 === e.minDate && 0 === e.minMonth && this.timeScaleArray.push({
                        position: l,
                        value: o,
                        unit: h,
                        year: a,
                        month: r.monthMod(i + 1)
                    });
                    for (var u = o, g = l, f = 0; f < n; f++) u++, g = c.determineDaysOfYear(u - 1) * s + g, this.timeScaleArray.push({
                        position: g,
                        value: u,
                        unit: h,
                        year: u,
                        month: 1
                    })
                }
            }, {
                key: "generateMonthScale", value: function (t) {
                    var e = t.firstVal, i = t.currentMonthDate, a = t.currentMonth, s = t.currentYear,
                        n = t.daysWidthOnXAxis, o = t.numberOfMonths, l = a, c = 0, h = new M(this.ctx), d = "month",
                        u = 0;
                    if (e.minDate > 1) {
                        c = (h.determineDaysOfMonths(a + 1, e.minYear) - i + 1) * n, l = r.monthMod(a + 1);
                        var g = s + u, f = r.monthMod(l), p = l;
                        0 === l && (d = "year", p = g, f = 1, g += u += 1), this.timeScaleArray.push({
                            position: c,
                            value: p,
                            unit: d,
                            year: g,
                            month: f
                        })
                    } else this.timeScaleArray.push({position: c, value: l, unit: d, year: s, month: r.monthMod(a)});
                    for (var x = l + 1, b = c, v = 0, m = 1; v < o; v++, m++) {
                        0 === (x = r.monthMod(x)) ? (d = "year", u += 1) : d = "month";
                        var y = this._getYear(s, x, u);
                        b = h.determineDaysOfMonths(x, y) * n + b;
                        var w = 0 === x ? y : x;
                        this.timeScaleArray.push({position: b, value: w, unit: d, year: y, month: 0 === x ? 1 : x}), x++
                    }
                }
            }, {
                key: "generateDayScale", value: function (t) {
                    var e = t.firstVal, i = t.currentMonth, a = t.currentYear, s = t.hoursWidthOnXAxis,
                        n = t.numberOfDays, o = new M(this.ctx), l = "day", c = e.minDate + 1, h = c,
                        d = function (t, e, i) {
                            return t > o.determineDaysOfMonths(e + 1, i) ? (h = 1, l = "month", g = e += 1, e) : e
                        }, u = (24 - e.minHour) * s, g = c, f = d(h, i, a);
                    0 === e.minHour && 1 === e.minDate ? (u = 0, g = r.monthMod(e.minMonth), l = "month", h = e.minDate) : 1 !== e.minDate && 0 === e.minHour && 0 === e.minMinute && (u = 0, c = e.minDate, g = c, f = d(h = c, i, a)), this.timeScaleArray.push({
                        position: u,
                        value: g,
                        unit: l,
                        year: this._getYear(a, f, 0),
                        month: r.monthMod(f),
                        day: h
                    });
                    for (var p = u, x = 0; x < n; x++) {
                        l = "day", f = d(h += 1, f, this._getYear(a, f, 0));
                        var b = this._getYear(a, f, 0);
                        p = 24 * s + p;
                        var v = 1 === h ? r.monthMod(f) : h;
                        this.timeScaleArray.push({
                            position: p,
                            value: v,
                            unit: l,
                            year: b,
                            month: r.monthMod(f),
                            day: v
                        })
                    }
                }
            }, {
                key: "generateHourScale", value: function (t) {
                    var e = t.firstVal, i = t.currentDate, a = t.currentMonth, s = t.currentYear,
                        n = t.minutesWidthOnXAxis, o = t.numberOfHours, l = new M(this.ctx), c = "hour",
                        h = function (t, e) {
                            return t > l.determineDaysOfMonths(e + 1, s) && (x = 1, e += 1), {month: e, date: x}
                        }, d = function (t, e) {
                            return t > l.determineDaysOfMonths(e + 1, s) ? e += 1 : e
                        }, u = 60 - (e.minMinute + e.minSecond / 60), g = u * n, f = e.minHour + 1, p = f;
                    60 === u && (g = 0, p = f = e.minHour);
                    var x = i;
                    p >= 24 && (p = 0, x += 1, c = "day");
                    var b = h(x, a).month;
                    b = d(x, b), this.timeScaleArray.push({
                        position: g,
                        value: f,
                        unit: c,
                        day: x,
                        hour: p,
                        year: s,
                        month: r.monthMod(b)
                    }), p++;
                    for (var v = g, m = 0; m < o; m++) {
                        c = "hour", p >= 24 && (p = 0, c = "day", b = h(x += 1, b).month, b = d(x, b));
                        var y = this._getYear(s, b, 0);
                        v = 60 * n + v;
                        var w = 0 === p ? x : p;
                        this.timeScaleArray.push({
                            position: v,
                            value: w,
                            unit: c,
                            hour: p,
                            day: x,
                            year: y,
                            month: r.monthMod(b)
                        }), p++
                    }
                }
            }, {
                key: "generateMinuteScale", value: function (t) {
                    for (var e = t.currentMillisecond, i = t.currentSecond, a = t.currentMinute, s = t.currentHour, n = t.currentDate, o = t.currentMonth, l = t.currentYear, c = t.minutesWidthOnXAxis, h = t.secondsWidthOnXAxis, d = t.numberOfMinutes, u = a + 1, g = n, f = o, p = l, x = s, b = (60 - i - e / 1e3) * h, v = 0; v < d; v++) u >= 60 && (u = 0, 24 === (x += 1) && (x = 0)), this.timeScaleArray.push({
                        position: b,
                        value: u,
                        unit: "minute",
                        hour: x,
                        minute: u,
                        day: g,
                        year: this._getYear(p, f, 0),
                        month: r.monthMod(f)
                    }), b += c, u++
                }
            }, {
                key: "generateSecondScale", value: function (t) {
                    for (var e = t.currentMillisecond, i = t.currentSecond, a = t.currentMinute, s = t.currentHour, n = t.currentDate, o = t.currentMonth, l = t.currentYear, c = t.secondsWidthOnXAxis, h = t.numberOfSeconds, d = i + 1, u = a, g = n, f = o, p = l, x = s, b = (1e3 - e) / 1e3 * c, v = 0; v < h; v++) d >= 60 && (d = 0, ++u >= 60 && (u = 0, 24 == ++x && (x = 0))), this.timeScaleArray.push({
                        position: b,
                        value: d,
                        unit: "second",
                        hour: x,
                        minute: u,
                        second: d,
                        day: g,
                        year: this._getYear(p, f, 0),
                        month: r.monthMod(f)
                    }), b += c, d++
                }
            }, {
                key: "createRawDateString", value: function (t, e) {
                    var i = t.year;
                    return 0 === t.month && (t.month = 1), i += "-" + ("0" + t.month.toString()).slice(-2), "day" === t.unit ? i += "day" === t.unit ? "-" + ("0" + e).slice(-2) : "-01" : i += "-" + ("0" + (t.day ? t.day : "1")).slice(-2), "hour" === t.unit ? i += "hour" === t.unit ? "T" + ("0" + e).slice(-2) : "T00" : i += "T" + ("0" + (t.hour ? t.hour : "0")).slice(-2), "minute" === t.unit ? i += ":" + ("0" + e).slice(-2) : i += ":" + (t.minute ? ("0" + t.minute).slice(-2) : "00"), "second" === t.unit ? i += ":" + ("0" + e).slice(-2) : i += ":00", this.utc && (i += ".000Z"), i
                }
            }, {
                key: "formatDates", value: function (t) {
                    var e = this, i = this.w;
                    return t.map((function (t) {
                        var a = t.value.toString(), r = new M(e.ctx), s = e.createRawDateString(t, a),
                            n = r.getDate(r.parseDate(s));
                        if (e.utc || (n = r.getDate(r.parseDateWithTimezone(s))), void 0 === i.config.xaxis.labels.format) {
                            var o = "dd MMM", l = i.config.xaxis.labels.datetimeFormatter;
                            "year" === t.unit && (o = l.year), "month" === t.unit && (o = l.month), "day" === t.unit && (o = l.day), "hour" === t.unit && (o = l.hour), "minute" === t.unit && (o = l.minute), "second" === t.unit && (o = l.second), a = r.formatDate(n, o)
                        } else a = r.formatDate(n, i.config.xaxis.labels.format);
                        return {
                            dateString: s,
                            position: t.position,
                            value: a,
                            unit: t.unit,
                            year: t.year,
                            month: t.month
                        }
                    }))
                }
            }, {
                key: "removeOverlappingTS", value: function (t) {
                    var e, i = this, a = new g(this.ctx), r = !1;
                    t.length > 0 && t[0].value && t.every((function (e) {
                        return e.value.length === t[0].value.length
                    })) && (r = !0, e = a.getTextRects(t[0].value).width);
                    var s = 0, n = t.map((function (n, o) {
                        if (o > 0 && i.w.config.xaxis.labels.hideOverlappingLabels) {
                            var l = r ? e : a.getTextRects(t[s].value).width, c = t[s].position;
                            return n.position > c + l + 10 ? (s = o, n) : null
                        }
                        return n
                    }));
                    return n.filter((function (t) {
                        return null !== t
                    }))
                }
            }, {
                key: "_getYear", value: function (t, e, i) {
                    return t + Math.floor(e / 12) + i
                }
            }]) && pa(e.prototype, i), t
        }();

        function ba(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, a)
            }
            return i
        }

        function va(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? ba(Object(i), !0).forEach((function (e) {
                    ma(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ba(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function ma(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function ya(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, a = new Array(e); i < e; i++) a[i] = t[i];
            return a
        }

        function wa(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var ka = function () {
            function t(e, i) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = i, this.w = i.w, this.el = e
            }

            var e, i;
            return e = t, (i = [{
                key: "setupElements", value: function () {
                    var t = this.w.globals, e = this.w.config, i = e.chart.type;
                    t.axisCharts = ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "scatter", "bubble", "radar", "heatmap", "treemap"].indexOf(i) > -1, t.xyCharts = ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "scatter", "bubble"].indexOf(i) > -1, t.isBarHorizontal = ("bar" === e.chart.type || "rangeBar" === e.chart.type || "boxPlot" === e.chart.type) && e.plotOptions.bar.horizontal, t.chartClass = ".apexcharts" + t.chartID, t.dom.baseEl = this.el, t.dom.elWrap = document.createElement("div"), g.setAttrs(t.dom.elWrap, {
                        id: t.chartClass.substring(1),
                        class: "apexcharts-canvas " + t.chartClass.substring(1)
                    }), this.el.appendChild(t.dom.elWrap), t.dom.Paper = new window.SVG.Doc(t.dom.elWrap), t.dom.Paper.attr({
                        class: "apexcharts-svg",
                        "xmlns:data": "ApexChartsNS",
                        transform: "translate(".concat(e.chart.offsetX, ", ").concat(e.chart.offsetY, ")")
                    }), t.dom.Paper.node.style.background = "dark" !== e.theme.mode || e.chart.background ? e.chart.background : "rgba(0, 0, 0, 0.8)", this.setSVGDimensions(), t.dom.elLegendForeign = document.createElementNS(t.SVGNS, "foreignObject"), g.setAttrs(t.dom.elLegendForeign, {
                        x: 0,
                        y: 0,
                        width: t.svgWidth,
                        height: t.svgHeight
                    }), t.dom.elLegendWrap = document.createElement("div"), t.dom.elLegendWrap.classList.add("apexcharts-legend"), t.dom.elLegendWrap.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), t.dom.elLegendForeign.appendChild(t.dom.elLegendWrap), t.dom.Paper.node.appendChild(t.dom.elLegendForeign), t.dom.elGraphical = t.dom.Paper.group().attr({class: "apexcharts-inner apexcharts-graphical"}), t.dom.elDefs = t.dom.Paper.defs(), t.dom.Paper.add(t.dom.elGraphical), t.dom.elGraphical.add(t.dom.elDefs)
                }
            }, {
                key: "plotChartType", value: function (t, e) {
                    var i = this.w, a = i.config, r = i.globals, s = {series: [], i: []}, n = {series: [], i: []},
                        o = {series: [], i: []}, l = {series: [], i: []}, c = {series: [], i: []},
                        h = {series: [], i: []}, d = {series: [], i: []}, u = {series: [], i: []},
                        g = {series: [], seriesRangeEnd: [], i: []};
                    r.series.map((function (e, f) {
                        var p = 0;
                        void 0 !== t[f].type ? ("column" === t[f].type || "bar" === t[f].type ? (r.series.length > 1 && a.plotOptions.bar.horizontal && console.warn("Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`"), c.series.push(e), c.i.push(f), p++, i.globals.columnSeries = c.series) : "area" === t[f].type ? (n.series.push(e), n.i.push(f), p++) : "line" === t[f].type ? (s.series.push(e), s.i.push(f), p++) : "scatter" === t[f].type ? (o.series.push(e), o.i.push(f)) : "bubble" === t[f].type ? (l.series.push(e), l.i.push(f), p++) : "candlestick" === t[f].type ? (h.series.push(e), h.i.push(f), p++) : "boxPlot" === t[f].type ? (d.series.push(e), d.i.push(f), p++) : "rangeBar" === t[f].type ? (u.series.push(e), u.i.push(f), p++) : "rangeArea" === t[f].type ? (g.series.push(r.seriesRangeStart[f]), g.seriesRangeEnd.push(r.seriesRangeEnd[f]), g.i.push(f), p++) : console.warn("You have specified an unrecognized chart type. Available types for this property are line/area/column/bar/scatter/bubble/candlestick/boxPlot/rangeBar/rangeArea"), p > 1 && (r.comboCharts = !0)) : (s.series.push(e), s.i.push(f))
                    }));
                    var f = new ca(this.ctx, e), p = new Si(this.ctx, e);
                    this.ctx.pie = new Xi(this.ctx);
                    var x = new Vi(this.ctx);
                    this.ctx.rangeBar = new Ki(this.ctx, e);
                    var b = new Hi(this.ctx), v = [];
                    if (r.comboCharts) {
                        if (n.series.length > 0 && v.push(f.draw(n.series, "area", n.i)), c.series.length > 0) if (i.config.chart.stacked) {
                            var m = new xi(this.ctx, e);
                            v.push(m.draw(c.series, c.i))
                        } else this.ctx.bar = new li(this.ctx, e), v.push(this.ctx.bar.draw(c.series, c.i));
                        if (g.series.length > 0 && v.push(f.draw(g.series, "rangeArea", g.i, g.seriesRangeEnd)), s.series.length > 0 && v.push(f.draw(s.series, "line", s.i)), h.series.length > 0 && v.push(p.draw(h.series, "candlestick", h.i)), d.series.length > 0 && v.push(p.draw(d.series, "boxPlot", d.i)), u.series.length > 0 && v.push(this.ctx.rangeBar.draw(u.series, u.i)), o.series.length > 0) {
                            var y = new ca(this.ctx, e, !0);
                            v.push(y.draw(o.series, "scatter", o.i))
                        }
                        if (l.series.length > 0) {
                            var w = new ca(this.ctx, e, !0);
                            v.push(w.draw(l.series, "bubble", l.i))
                        }
                    } else switch (a.chart.type) {
                        case"line":
                            v = f.draw(r.series, "line");
                            break;
                        case"area":
                            v = f.draw(r.series, "area");
                            break;
                        case"bar":
                            a.chart.stacked ? v = new xi(this.ctx, e).draw(r.series) : (this.ctx.bar = new li(this.ctx, e), v = this.ctx.bar.draw(r.series));
                            break;
                        case"candlestick":
                            v = new Si(this.ctx, e).draw(r.series, "candlestick");
                            break;
                        case"boxPlot":
                            v = new Si(this.ctx, e).draw(r.series, a.chart.type);
                            break;
                        case"rangeBar":
                            v = this.ctx.rangeBar.draw(r.series);
                            break;
                        case"rangeArea":
                            v = f.draw(r.seriesRangeStart, "rangeArea", void 0, r.seriesRangeEnd);
                            break;
                        case"heatmap":
                            v = new Ii(this.ctx, e).draw(r.series);
                            break;
                        case"treemap":
                            v = new da(this.ctx, e).draw(r.series);
                            break;
                        case"pie":
                        case"donut":
                        case"polarArea":
                            v = this.ctx.pie.draw(r.series);
                            break;
                        case"radialBar":
                            v = x.draw(r.series);
                            break;
                        case"radar":
                            v = b.draw(r.series);
                            break;
                        default:
                            v = f.draw(r.series)
                    }
                    return v
                }
            }, {
                key: "setSVGDimensions", value: function () {
                    var t = this.w.globals, e = this.w.config;
                    t.svgWidth = e.chart.width, t.svgHeight = e.chart.height;
                    var i = r.getDimensions(this.el), a = e.chart.width.toString().split(/[0-9]+/g).pop();
                    "%" === a ? r.isNumber(i[0]) && (0 === i[0].width && (i = r.getDimensions(this.el.parentNode)), t.svgWidth = i[0] * parseInt(e.chart.width, 10) / 100) : "px" !== a && "" !== a || (t.svgWidth = parseInt(e.chart.width, 10));
                    var s = e.chart.height.toString().split(/[0-9]+/g).pop();
                    if ("auto" !== t.svgHeight && "" !== t.svgHeight) if ("%" === s) {
                        var n = r.getDimensions(this.el.parentNode);
                        t.svgHeight = n[1] * parseInt(e.chart.height, 10) / 100
                    } else t.svgHeight = parseInt(e.chart.height, 10); else t.axisCharts ? t.svgHeight = t.svgWidth / 1.61 : t.svgHeight = t.svgWidth / 1.2;
                    if (t.svgWidth < 0 && (t.svgWidth = 0), t.svgHeight < 0 && (t.svgHeight = 0), g.setAttrs(t.dom.Paper.node, {
                        width: t.svgWidth,
                        height: t.svgHeight
                    }), "%" !== s) {
                        var o = e.chart.sparkline.enabled ? 0 : t.axisCharts ? e.chart.parentHeightOffset : 0;
                        t.dom.Paper.node.parentNode.parentNode.style.minHeight = t.svgHeight + o + "px"
                    }
                    t.dom.elWrap.style.width = t.svgWidth + "px", t.dom.elWrap.style.height = t.svgHeight + "px"
                }
            }, {
                key: "shiftGraphPosition", value: function () {
                    var t = this.w.globals, e = t.translateY,
                        i = {transform: "translate(" + t.translateX + ", " + e + ")"};
                    g.setAttrs(t.dom.elGraphical.node, i)
                }
            }, {
                key: "resizeNonAxisCharts", value: function () {
                    var t = this.w, e = t.globals, i = 0, a = t.config.chart.sparkline.enabled ? 1 : 15;
                    a += t.config.grid.padding.bottom, "top" !== t.config.legend.position && "bottom" !== t.config.legend.position || !t.config.legend.show || t.config.legend.floating || (i = new ae(this.ctx).legendHelpers.getLegendBBox().clwh + 10);
                    var s = t.globals.dom.baseEl.querySelector(".apexcharts-radialbar, .apexcharts-pie"),
                        n = 2.05 * t.globals.radialSize;
                    if (s && !t.config.chart.sparkline.enabled && 0 !== t.config.plotOptions.radialBar.startAngle) {
                        var o = r.getBoundingClientRect(s);
                        n = o.bottom;
                        var l = o.bottom - o.top;
                        n = Math.max(2.05 * t.globals.radialSize, l)
                    }
                    var c = n + e.translateY + i + a;
                    e.dom.elLegendForeign && e.dom.elLegendForeign.setAttribute("height", c), t.config.chart.height && String(t.config.chart.height).indexOf("%") > 0 || (e.dom.elWrap.style.height = c + "px", g.setAttrs(e.dom.Paper.node, {height: c}), e.dom.Paper.node.parentNode.parentNode.style.minHeight = c + "px")
                }
            }, {
                key: "coreCalculations", value: function () {
                    new Ct(this.ctx).init()
                }
            }, {
                key: "resetGlobals", value: function () {
                    var t = this, e = function () {
                        return t.w.config.series.map((function (t) {
                            return []
                        }))
                    }, i = new _, a = this.w.globals;
                    i.initGlobalVars(a), a.seriesXvalues = e(), a.seriesYvalues = e()
                }
            }, {
                key: "isMultipleY", value: function () {
                    if (this.w.config.yaxis.constructor === Array && this.w.config.yaxis.length > 1) return this.w.globals.isMultipleYAxis = !0, !0
                }
            }, {
                key: "xySettings", value: function () {
                    var t = null, e = this.w;
                    if (e.globals.axisCharts) {
                        if ("back" === e.config.xaxis.crosshairs.position && new Yt(this.ctx).drawXCrosshairs(), "back" === e.config.yaxis[0].crosshairs.position && new Yt(this.ctx).drawYCrosshairs(), "datetime" === e.config.xaxis.type && void 0 === e.config.xaxis.labels.formatter) {
                            this.ctx.timeScale = new xa(this.ctx);
                            var i = [];
                            isFinite(e.globals.minX) && isFinite(e.globals.maxX) && !e.globals.isBarHorizontal ? i = this.ctx.timeScale.calculateTimeScaleTicks(e.globals.minX, e.globals.maxX) : e.globals.isBarHorizontal && (i = this.ctx.timeScale.calculateTimeScaleTicks(e.globals.minY, e.globals.maxY)), this.ctx.timeScale.recalcDimensionsBasedOnFormat(i)
                        }
                        t = new p(this.ctx).getCalculatedRatios()
                    }
                    return t
                }
            }, {
                key: "updateSourceChart", value: function (t) {
                    this.ctx.w.globals.selection = void 0, this.ctx.updateHelpers._updateOptions({
                        chart: {
                            selection: {
                                xaxis: {
                                    min: t.w.globals.minX,
                                    max: t.w.globals.maxX
                                }
                            }
                        }
                    }, !1, !1)
                }
            }, {
                key: "setupBrushHandler", value: function () {
                    var t = this, e = this.w;
                    if (e.config.chart.brush.enabled && "function" != typeof e.config.chart.events.selection) {
                        var i = Array.isArray(e.config.chart.brush.targets) ? e.config.chart.brush.targets : [e.config.chart.brush.target];
                        i.forEach((function (e) {
                            var i = ApexCharts.getChartByID(e);
                            i.w.globals.brushSource = t.ctx, "function" != typeof i.w.config.chart.events.zoomed && (i.w.config.chart.events.zoomed = function () {
                                t.updateSourceChart(i)
                            }), "function" != typeof i.w.config.chart.events.scrolled && (i.w.config.chart.events.scrolled = function () {
                                t.updateSourceChart(i)
                            })
                        })), e.config.chart.events.selection = function (t, a) {
                            i.forEach((function (t) {
                                var i = ApexCharts.getChartByID(t), s = r.clone(e.config.yaxis);
                                if (e.config.chart.brush.autoScaleYaxis && 1 === i.w.globals.series.length) {
                                    var n = new kt(i);
                                    s = n.autoScaleY(i, s, a)
                                }
                                var o = i.w.config.yaxis.reduce((function (t, e, a) {
                                    return [].concat(function (t) {
                                        if (Array.isArray(t)) return ya(t)
                                    }(r = t) || function (t) {
                                        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                                    }(r) || function (t, e) {
                                        if (t) {
                                            if ("string" == typeof t) return ya(t, e);
                                            var i = Object.prototype.toString.call(t).slice(8, -1);
                                            return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? ya(t, e) : void 0
                                        }
                                    }(r) || function () {
                                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }(), [va(va({}, i.w.config.yaxis[a]), {}, {min: s[0].min, max: s[0].max})]);
                                    var r
                                }), []);
                                i.ctx.updateHelpers._updateOptions({
                                    xaxis: {min: a.xaxis.min, max: a.xaxis.max},
                                    yaxis: o
                                }, !1, !1, !1, !1)
                            }))
                        }
                    }
                }
            }]) && wa(e.prototype, i), t
        }();

        function Aa(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, a)
            }
            return i
        }

        function Sa(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Aa(Object(i), !0).forEach((function (e) {
                    Ca(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Aa(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function Ca(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function Pa(t) {
            return Pa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, Pa(t)
        }

        function La(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Oa = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i;
            return e = t, i = [{
                key: "_updateOptions", value: function (t) {
                    var e = this, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        s = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        n = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    return new Promise((function (o) {
                        var l = [e.ctx];
                        s && (l = e.ctx.getSyncedCharts()), e.ctx.w.globals.isExecCalled && (l = [e.ctx], e.ctx.w.globals.isExecCalled = !1), l.forEach((function (s, c) {
                            var h = s.w;
                            if (h.globals.shouldAnimate = a, i || (h.globals.resized = !0, h.globals.dataChanged = !0, a && s.series.getPreviousPaths()), t && "object" === Pa(t) && (s.config = new G(t), t = p.extendArrayProps(s.config, t, h), s.w.globals.chartID !== e.ctx.w.globals.chartID && delete t.series, h.config = r.extend(h.config, t), n && (h.globals.lastXAxis = t.xaxis ? r.clone(t.xaxis) : [], h.globals.lastYAxis = t.yaxis ? r.clone(t.yaxis) : [], h.globals.initialConfig = r.extend({}, h.config), h.globals.initialSeries = r.clone(h.config.series), t.series))) {
                                for (var d = 0; d < h.globals.collapsedSeriesIndices.length; d++) {
                                    var u = h.config.series[h.globals.collapsedSeriesIndices[d]];
                                    h.globals.collapsedSeries[d].data = h.globals.axisCharts ? u.data.slice() : u
                                }
                                for (var g = 0; g < h.globals.ancillaryCollapsedSeriesIndices.length; g++) {
                                    var f = h.config.series[h.globals.ancillaryCollapsedSeriesIndices[g]];
                                    h.globals.ancillaryCollapsedSeries[g].data = h.globals.axisCharts ? f.data.slice() : f
                                }
                                s.series.emptyCollapsedSeries(h.config.series)
                            }
                            return s.update(t).then((function () {
                                c === l.length - 1 && o(s)
                            }))
                        }))
                    }))
                }
            }, {
                key: "_updateSeries", value: function (t, e) {
                    var i = this, a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return new Promise((function (s) {
                        var n, o = i.w;
                        return o.globals.shouldAnimate = e, o.globals.dataChanged = !0, e && i.ctx.series.getPreviousPaths(), o.globals.axisCharts ? (0 === (n = t.map((function (t, e) {
                            return i._extendSeries(t, e)
                        }))).length && (n = [{data: []}]), o.config.series = n) : o.config.series = t.slice(), a && (o.globals.initialConfig.series = r.clone(o.config.series), o.globals.initialSeries = r.clone(o.config.series)), i.ctx.update().then((function () {
                            s(i.ctx)
                        }))
                    }))
                }
            }, {
                key: "_extendSeries", value: function (t, e) {
                    var i = this.w, a = i.config.series[e];
                    return Sa(Sa({}, i.config.series[e]), {}, {
                        name: t.name ? t.name : null == a ? void 0 : a.name,
                        color: t.color ? t.color : null == a ? void 0 : a.color,
                        type: t.type ? t.type : null == a ? void 0 : a.type,
                        group: t.group ? t.group : null == a ? void 0 : a.group,
                        data: t.data ? t.data : null == a ? void 0 : a.data,
                        zIndex: void 0 !== t.zIndex ? t.zIndex : e
                    })
                }
            }, {
                key: "toggleDataPointSelection", value: function (t, e) {
                    var i = this.w, a = null, r = ".apexcharts-series[data\\:realIndex='".concat(t, "']");
                    return i.globals.axisCharts ? a = i.globals.dom.Paper.select("".concat(r, " path[j='").concat(e, "'], ").concat(r, " circle[j='").concat(e, "'], ").concat(r, " rect[j='").concat(e, "']")).members[0] : void 0 === e && (a = i.globals.dom.Paper.select("".concat(r, " path[j='").concat(t, "']")).members[0], "pie" !== i.config.chart.type && "polarArea" !== i.config.chart.type && "donut" !== i.config.chart.type || this.ctx.pie.pieClicked(t)), a ? (new g(this.ctx).pathMouseDown(a, null), a.node ? a.node : null) : (console.warn("toggleDataPointSelection: Element not found"), null)
                }
            }, {
                key: "forceXAxisUpdate", value: function (t) {
                    var e = this.w;
                    if (["min", "max"].forEach((function (i) {
                        void 0 !== t.xaxis[i] && (e.config.xaxis[i] = t.xaxis[i], e.globals.lastXAxis[i] = t.xaxis[i])
                    })), t.xaxis.categories && t.xaxis.categories.length && (e.config.xaxis.categories = t.xaxis.categories), e.config.xaxis.convertedCatToNumeric) {
                        var i = new W(t);
                        t = i.convertCatToNumericXaxis(t, this.ctx)
                    }
                    return t
                }
            }, {
                key: "forceYAxisUpdate", value: function (t) {
                    return t.chart && t.chart.stacked && "100%" === t.chart.stackType && (Array.isArray(t.yaxis) ? t.yaxis.forEach((function (e, i) {
                        t.yaxis[i].min = 0, t.yaxis[i].max = 100
                    })) : (t.yaxis.min = 0, t.yaxis.max = 100)), t
                }
            }, {
                key: "revertDefaultAxisMinMax", value: function (t) {
                    var e = this, i = this.w, a = i.globals.lastXAxis, r = i.globals.lastYAxis;
                    t && t.xaxis && (a = t.xaxis), t && t.yaxis && (r = t.yaxis), i.config.xaxis.min = a.min, i.config.xaxis.max = a.max;
                    i.config.yaxis.map((function (t, a) {
                        i.globals.zoomed || void 0 !== r[a] ? function (t) {
                            void 0 !== r[t] && (i.config.yaxis[t].min = r[t].min, i.config.yaxis[t].max = r[t].max)
                        }(a) : void 0 !== e.ctx.opts.yaxis[a] && (t.min = e.ctx.opts.yaxis[a].min, t.max = e.ctx.opts.yaxis[a].max)
                    }))
                }
            }], i && La(e.prototype, i), t
        }();

        function Ta(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        i(482), i(872), i(25), i(372), i(769), i(882), void 0 === window.Apex && (window.Apex = {});
        var Ia = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i;
            return e = t, (i = [{
                key: "initModules", value: function () {
                    this.ctx.publicMethods = ["updateOptions", "updateSeries", "appendData", "appendSeries", "isSeriesHidden", "toggleSeries", "showSeries", "hideSeries", "setLocale", "resetSeries", "zoomX", "toggleDataPointSelection", "dataURI", "exportToCSV", "addXaxisAnnotation", "addYaxisAnnotation", "addPointAnnotation", "clearAnnotations", "removeAnnotation", "paper", "destroy"], this.ctx.eventList = ["click", "mousedown", "mousemove", "mouseleave", "touchstart", "touchmove", "touchleave", "mouseup", "touchend"], this.ctx.animations = new n(this.ctx), this.ctx.axes = new zt(this.ctx), this.ctx.core = new ka(this.ctx.el, this.ctx), this.ctx.config = new G({}), this.ctx.data = new ht(this.ctx), this.ctx.grid = new yt(this.ctx), this.ctx.graphics = new g(this.ctx), this.ctx.coreUtils = new p(this.ctx), this.ctx.crosshairs = new Yt(this.ctx), this.ctx.events = new Tt(this.ctx), this.ctx.exports = new xt(this.ctx), this.ctx.localization = new Et(this.ctx), this.ctx.options = new P, this.ctx.responsive = new Ft(this.ctx), this.ctx.series = new ot(this.ctx), this.ctx.theme = new Ht(this.ctx), this.ctx.formatters = new X(this.ctx), this.ctx.titleSubtitle = new Wt(this.ctx), this.ctx.legend = new ae(this.ctx), this.ctx.toolbar = new me(this.ctx), this.ctx.tooltip = new Ue(this.ctx), this.ctx.dimensions = new Kt(this.ctx), this.ctx.updateHelpers = new Oa(this.ctx), this.ctx.zoomPanSelection = new Se(this.ctx), this.ctx.w.globals.tooltip = new Ue(this.ctx)
                }
            }]) && Ta(e.prototype, i), t
        }();

        function Ea(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Ma = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i;
            return e = t, (i = [{
                key: "clear", value: function (t) {
                    var e = t.isUpdating;
                    this.ctx.zoomPanSelection && this.ctx.zoomPanSelection.destroy(), this.ctx.toolbar && this.ctx.toolbar.destroy(), this.ctx.animations = null, this.ctx.axes = null, this.ctx.annotations = null, this.ctx.core = null, this.ctx.data = null, this.ctx.grid = null, this.ctx.series = null, this.ctx.responsive = null, this.ctx.theme = null, this.ctx.formatters = null, this.ctx.titleSubtitle = null, this.ctx.legend = null, this.ctx.dimensions = null, this.ctx.options = null, this.ctx.crosshairs = null, this.ctx.zoomPanSelection = null, this.ctx.updateHelpers = null, this.ctx.toolbar = null, this.ctx.localization = null, this.ctx.w.globals.tooltip = null, this.clearDomElements({isUpdating: e})
                }
            }, {
                key: "killSVG", value: function (t) {
                    t.each((function (t, e) {
                        this.removeClass("*"), this.off(), this.stop()
                    }), !0), t.ungroup(), t.clear()
                }
            }, {
                key: "clearDomElements", value: function (t) {
                    var e = this, i = t.isUpdating, a = this.w.globals.dom.Paper.node;
                    a.parentNode && a.parentNode.parentNode && !i && (a.parentNode.parentNode.style.minHeight = "unset");
                    var r = this.w.globals.dom.baseEl;
                    r && this.ctx.eventList.forEach((function (t) {
                        r.removeEventListener(t, e.ctx.events.documentEvent)
                    }));
                    var s = this.w.globals.dom;
                    if (null !== this.ctx.el) for (; this.ctx.el.firstChild;) this.ctx.el.removeChild(this.ctx.el.firstChild);
                    this.killSVG(s.Paper), s.Paper.remove(), s.elWrap = null, s.elGraphical = null, s.elLegendWrap = null, s.elLegendForeign = null, s.baseEl = null, s.elGridRect = null, s.elGridRectMask = null, s.elGridRectMarkerMask = null, s.elForecastMask = null, s.elNonForecastMask = null, s.elDefs = null
                }
            }]) && Ea(e.prototype, i), t
        }(), za = new WeakMap, Xa = i(274), Ya = i.n(Xa);

        function Ra(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Fa = function () {
            function t(e, i) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.opts = i, this.ctx = this, this.w = new q(i).init(), this.el = e, this.w.globals.cuid = r.randomId(), this.w.globals.chartID = this.w.config.chart.id ? r.escapeString(this.w.config.chart.id) : this.w.globals.cuid, new Ia(this).initModules(), this.create = r.bind(this.create, this), this.windowResizeHandler = this._windowResizeHandler.bind(this), this.parentResizeHandler = this._parentResizeCallback.bind(this)
            }

            var e, i, a;
            return e = t, i = [{
                key: "render", value: function () {
                    var t = this;
                    return new Promise((function (e, i) {
                        if (null !== t.el) {
                            void 0 === Apex._chartInstances && (Apex._chartInstances = []), t.w.config.chart.id && Apex._chartInstances.push({
                                id: t.w.globals.chartID,
                                group: t.w.config.chart.group,
                                chart: t
                            }), t.setLocale(t.w.config.chart.defaultLocale);
                            var a = t.w.config.chart.events.beforeMount;
                            if ("function" == typeof a && a(t, t.w), t.events.fireEvent("beforeMount", [t, t.w]), window.addEventListener("resize", t.windowResizeHandler), function (t, e) {
                                var i = !1;
                                if (t.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
                                    var a = t.getBoundingClientRect();
                                    "none" !== t.style.display && 0 !== a.width || (i = !0)
                                }
                                var r = new ResizeObserver((function (a) {
                                    i && e.call(t, a), i = !0
                                }));
                                t.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? Array.from(t.children).forEach((function (t) {
                                    return r.observe(t)
                                })) : r.observe(t), za.set(e, r)
                            }(t.el.parentNode, t.parentResizeHandler), !t.css) {
                                var s = t.el.getRootNode && t.el.getRootNode(), n = r.is("ShadowRoot", s),
                                    o = t.el.ownerDocument, l = o.getElementById("apexcharts-css");
                                if (n || !l) {
                                    var c;
                                    t.css = document.createElement("style"), t.css.id = "apexcharts-css", t.css.textContent = Ya();
                                    var h = (null === (c = t.opts.chart) || void 0 === c ? void 0 : c.nonce) || t.w.config.chart.nonce;
                                    h && t.css.setAttribute("nonce", h), n ? s.prepend(t.css) : o.head.appendChild(t.css)
                                }
                            }
                            var d = t.create(t.w.config.series, {});
                            if (!d) return e(t);
                            t.mount(d).then((function () {
                                "function" == typeof t.w.config.chart.events.mounted && t.w.config.chart.events.mounted(t, t.w), t.events.fireEvent("mounted", [t, t.w]), e(d)
                            })).catch((function (t) {
                                i(t)
                            }))
                        } else i(new Error("Element not found"))
                    }))
                }
            }, {
                key: "create", value: function (t, e) {
                    var i = this.w;
                    new Ia(this).initModules();
                    var a = this.w.globals;
                    if (a.noData = !1, a.animationEnded = !1, this.responsive.checkResponsiveConfig(e), i.config.xaxis.convertedCatToNumeric && new W(i.config).convertCatToNumericXaxis(i.config, this.ctx), null === this.el) return a.animationEnded = !0, null;
                    if (this.core.setupElements(), "treemap" === i.config.chart.type && (i.config.grid.show = !1, i.config.yaxis[0].show = !1), 0 === a.svgWidth) return a.animationEnded = !0, null;
                    var r = p.checkComboSeries(t);
                    a.comboCharts = r.comboCharts, a.comboBarCount = r.comboBarCount;
                    var s = t.every((function (t) {
                        return t.data && 0 === t.data.length
                    }));
                    (0 === t.length || s) && this.series.handleNoData(), this.events.setupEventHandlers(), this.data.parseData(t), this.theme.init(), new et(this).setGlobalMarkerSize(), this.formatters.setLabelFormatters(), this.titleSubtitle.draw(), a.noData && a.collapsedSeries.length !== a.series.length && !i.config.legend.showForSingleSeries || this.legend.init(), this.series.hasAllSeriesEqualX(), a.axisCharts && (this.core.coreCalculations(), "category" !== i.config.xaxis.type && this.formatters.setLabelFormatters(), this.ctx.toolbar.minX = i.globals.minX, this.ctx.toolbar.maxX = i.globals.maxX), this.formatters.heatmapLabelFormatters(), new p(this).getLargestMarkerSize(), this.dimensions.plotCoords();
                    var n = this.core.xySettings();
                    this.grid.createGridMask();
                    var o = this.core.plotChartType(t, n), l = new st(this);
                    return l.bringForward(), i.config.dataLabels.background.enabled && l.dataLabelsBackground(), this.core.shiftGraphPosition(), {
                        elGraph: o,
                        xyRatios: n,
                        dimensions: {
                            plot: {
                                left: i.globals.translateX,
                                top: i.globals.translateY,
                                width: i.globals.gridWidth,
                                height: i.globals.gridHeight
                            }
                        }
                    }
                }
            }, {
                key: "mount", value: function () {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, i = this,
                        a = i.w;
                    return new Promise((function (r, s) {
                        if (null === i.el) return s(new Error("Not enough data to display or target element not found"));
                        (null === e || a.globals.allSeriesCollapsed) && i.series.handleNoData(), i.grid = new yt(i);
                        var n, o, l = i.grid.drawGrid();
                        if (i.annotations = new O(i), i.annotations.drawImageAnnos(), i.annotations.drawTextAnnos(), "back" === a.config.grid.position && (l && a.globals.dom.elGraphical.add(l.el), null != l && null !== (n = l.elGridBorders) && void 0 !== n && n.node && a.globals.dom.elGraphical.add(l.elGridBorders)), Array.isArray(e.elGraph)) for (var c = 0; c < e.elGraph.length; c++) a.globals.dom.elGraphical.add(e.elGraph[c]); else a.globals.dom.elGraphical.add(e.elGraph);
                        "front" === a.config.grid.position && (l && a.globals.dom.elGraphical.add(l.el), null != l && null !== (o = l.elGridBorders) && void 0 !== o && o.node && a.globals.dom.elGraphical.add(l.elGridBorders)), "front" === a.config.xaxis.crosshairs.position && i.crosshairs.drawXCrosshairs(), "front" === a.config.yaxis[0].crosshairs.position && i.crosshairs.drawYCrosshairs(), "treemap" !== a.config.chart.type && i.axes.drawAxis(a.config.chart.type, l);
                        var h = new vt(t.ctx, l), d = new Lt(t.ctx, l);
                        if (null !== l && (h.xAxisLabelCorrections(l.xAxisTickWidth), d.setYAxisTextAlignments(), a.config.yaxis.map((function (t, e) {
                            -1 === a.globals.ignoreYAxisIndexes.indexOf(e) && d.yAxisTitleRotate(e, t.opposite)
                        }))), i.annotations.drawAxesAnnotations(), !a.globals.noData) {
                            if (a.config.tooltip.enabled && !a.globals.noData && i.w.globals.tooltip.drawTooltip(e.xyRatios), a.globals.axisCharts && (a.globals.isXNumeric || a.config.xaxis.convertedCatToNumeric || a.globals.isRangeBar)) (a.config.chart.zoom.enabled || a.config.chart.selection && a.config.chart.selection.enabled || a.config.chart.pan && a.config.chart.pan.enabled) && i.zoomPanSelection.init({xyRatios: e.xyRatios}); else {
                                var u = a.config.chart.toolbar.tools;
                                ["zoom", "zoomin", "zoomout", "selection", "pan", "reset"].forEach((function (t) {
                                    u[t] = !1
                                }))
                            }
                            a.config.chart.toolbar.show && !a.globals.allSeriesCollapsed && i.toolbar.createToolbar()
                        }
                        a.globals.memory.methodsToExec.length > 0 && a.globals.memory.methodsToExec.forEach((function (t) {
                            t.method(t.params, !1, t.context)
                        })), a.globals.axisCharts || a.globals.noData || i.core.resizeNonAxisCharts(), r(i)
                    }))
                }
            }, {
                key: "destroy", value: function () {
                    var t, e;
                    window.removeEventListener("resize", this.windowResizeHandler), this.el.parentNode, t = this.parentResizeHandler, (e = za.get(t)) && (e.disconnect(), za.delete(t));
                    var i = this.w.config.chart.id;
                    i && Apex._chartInstances.forEach((function (t, e) {
                        t.id === r.escapeString(i) && Apex._chartInstances.splice(e, 1)
                    })), new Ma(this.ctx).clear({isUpdating: !1})
                }
            }, {
                key: "updateOptions", value: function (t) {
                    var e = this, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], n = this.w;
                    return n.globals.selection = void 0, t.series && (this.series.resetSeries(!1, !0, !1), t.series.length && t.series[0].data && (t.series = t.series.map((function (t, i) {
                        return e.updateHelpers._extendSeries(t, i)
                    }))), this.updateHelpers.revertDefaultAxisMinMax()), t.xaxis && (t = this.updateHelpers.forceXAxisUpdate(t)), t.yaxis && (t = this.updateHelpers.forceYAxisUpdate(t)), n.globals.collapsedSeriesIndices.length > 0 && this.series.clearPreviousPaths(), t.theme && (t = this.theme.updateThemeOptions(t)), this.updateHelpers._updateOptions(t, i, a, r, s)
                }
            }, {
                key: "updateSeries", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    return this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(t, e, i)
                }
            }, {
                key: "appendSeries", value: function (t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        a = this.w.config.series.slice();
                    return a.push(t), this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(a, e, i)
                }
            }, {
                key: "appendData", value: function (t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = this;
                    i.w.globals.dataChanged = !0, i.series.getPreviousPaths();
                    for (var a = i.w.config.series.slice(), s = 0; s < a.length; s++) if (null !== t[s] && void 0 !== t[s]) for (var n = 0; n < t[s].data.length; n++) a[s].data.push(t[s].data[n]);
                    return i.w.config.series = a, e && (i.w.globals.initialSeries = r.clone(i.w.config.series)), this.update()
                }
            }, {
                key: "update", value: function (t) {
                    var e = this;
                    return new Promise((function (i, a) {
                        new Ma(e.ctx).clear({isUpdating: !0});
                        var r = e.create(e.w.config.series, t);
                        if (!r) return i(e);
                        e.mount(r).then((function () {
                            "function" == typeof e.w.config.chart.events.updated && e.w.config.chart.events.updated(e, e.w), e.events.fireEvent("updated", [e, e.w]), e.w.globals.isDirty = !0, i(e)
                        })).catch((function (t) {
                            a(t)
                        }))
                    }))
                }
            }, {
                key: "getSyncedCharts", value: function () {
                    var t = this.getGroupedCharts(), e = [this];
                    return t.length && (e = [], t.forEach((function (t) {
                        e.push(t)
                    }))), e
                }
            }, {
                key: "getGroupedCharts", value: function () {
                    var t = this;
                    return Apex._chartInstances.filter((function (t) {
                        if (t.group) return !0
                    })).map((function (e) {
                        return t.w.config.chart.group === e.group ? e.chart : t
                    }))
                }
            }, {
                key: "toggleSeries", value: function (t) {
                    return this.series.toggleSeries(t)
                }
            }, {
                key: "highlightSeriesOnLegendHover", value: function (t, e) {
                    return this.series.toggleSeriesOnHover(t, e)
                }
            }, {
                key: "showSeries", value: function (t) {
                    this.series.showSeries(t)
                }
            }, {
                key: "hideSeries", value: function (t) {
                    this.series.hideSeries(t)
                }
            }, {
                key: "isSeriesHidden", value: function (t) {
                    this.series.isSeriesHidden(t)
                }
            }, {
                key: "resetSeries", value: function () {
                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this.series.resetSeries(t, e)
                }
            }, {
                key: "addEventListener", value: function (t, e) {
                    this.events.addEventListener(t, e)
                }
            }, {
                key: "removeEventListener", value: function (t, e) {
                    this.events.removeEventListener(t, e)
                }
            }, {
                key: "addXaxisAnnotation", value: function (t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, a = this;
                    i && (a = i), a.annotations.addXaxisAnnotationExternal(t, e, a)
                }
            }, {
                key: "addYaxisAnnotation", value: function (t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, a = this;
                    i && (a = i), a.annotations.addYaxisAnnotationExternal(t, e, a)
                }
            }, {
                key: "addPointAnnotation", value: function (t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, a = this;
                    i && (a = i), a.annotations.addPointAnnotationExternal(t, e, a)
                }
            }, {
                key: "clearAnnotations", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, e = this;
                    t && (e = t), e.annotations.clearAnnotations(e)
                }
            }, {
                key: "removeAnnotation", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, i = this;
                    e && (i = e), i.annotations.removeAnnotation(i, t)
                }
            }, {
                key: "getChartArea", value: function () {
                    return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner")
                }
            }, {
                key: "getSeriesTotalXRange", value: function (t, e) {
                    return this.coreUtils.getSeriesTotalsXRange(t, e)
                }
            }, {
                key: "getHighestValueInSeries", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return new Ct(this.ctx).getMinYMaxY(t).highestY
                }
            }, {
                key: "getLowestValueInSeries", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return new Ct(this.ctx).getMinYMaxY(t).lowestY
                }
            }, {
                key: "getSeriesTotal", value: function () {
                    return this.w.globals.seriesTotals
                }
            }, {
                key: "toggleDataPointSelection", value: function (t, e) {
                    return this.updateHelpers.toggleDataPointSelection(t, e)
                }
            }, {
                key: "zoomX", value: function (t, e) {
                    this.ctx.toolbar.zoomUpdateOptions(t, e)
                }
            }, {
                key: "setLocale", value: function (t) {
                    this.localization.setCurrentLocaleValues(t)
                }
            }, {
                key: "dataURI", value: function (t) {
                    return new xt(this.ctx).dataURI(t)
                }
            }, {
                key: "exportToCSV", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return new xt(this.ctx).exportToCSV(t)
                }
            }, {
                key: "paper", value: function () {
                    return this.w.globals.dom.Paper
                }
            }, {
                key: "_parentResizeCallback", value: function () {
                    this.w.globals.animationEnded && this.w.config.chart.redrawOnParentResize && this._windowResize()
                }
            }, {
                key: "_windowResize", value: function () {
                    var t = this;
                    clearTimeout(this.w.globals.resizeTimer), this.w.globals.resizeTimer = window.setTimeout((function () {
                        t.w.globals.resized = !0, t.w.globals.dataChanged = !1, t.ctx.update()
                    }), 150)
                }
            }, {
                key: "_windowResizeHandler", value: function () {
                    var t = this.w.config.chart.redrawOnWindowResize;
                    "function" == typeof t && (t = t()), t && this._windowResize()
                }
            }], a = [{
                key: "getChartByID", value: function (t) {
                    var e = r.escapeString(t);
                    if (Apex._chartInstances) {
                        var i = Apex._chartInstances.filter((function (t) {
                            return t.id === e
                        }))[0];
                        return i && i.chart
                    }
                }
            }, {
                key: "initOnLoad", value: function () {
                    for (var e = document.querySelectorAll("[data-apexcharts]"), i = 0; i < e.length; i++) new t(e[i], JSON.parse(e[i].getAttribute("data-options"))).render()
                }
            }, {
                key: "exec", value: function (t, e) {
                    var i = this.getChartByID(t);
                    if (i) {
                        i.w.globals.isExecCalled = !0;
                        var a = null;
                        if (-1 !== i.publicMethods.indexOf(e)) {
                            for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), n = 2; n < r; n++) s[n - 2] = arguments[n];
                            a = i[e].apply(i, s)
                        }
                        return a
                    }
                }
            }, {
                key: "merge", value: function (t, e) {
                    return r.extend(t, e)
                }
            }], i && Ra(e.prototype, i), a && Ra(e, a), t
        }()
    })(), a
})()));