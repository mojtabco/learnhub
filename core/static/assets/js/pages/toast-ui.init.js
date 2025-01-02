var barChartWidth = document.getElementById("bar-charts").offsetWidth,
    container = document.getElementById("bar-charts"), data = {
        categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور"],
        series: [{name: "بودجه", data: [5e3, 3e3, 5e3, 7e3, 6e3, 4e3]}, {
            name: "درآمد",
            data: [8e3, 1e3, 7e3, 2e3, 5e3, 3e3]
        }]
    }, options = {
        chart: {width: barChartWidth, height: 380, title: "درآمد ماهانه", format: "1,000"},
        yAxis: {title: "ماه"},
        xAxis: {title: "مبلغ", min: 0, max: 9e3, suffix: "تومان"},
        series: {showLabel: !1}
    }, theme = {
        chart: {background: {color: "#fff", opacity: 0}},
        title: {color: "#8791af"},
        xAxis: {title: {color: "#8791af"}, label: {color: "#8791af"}, tickColor: "#8791af"},
        yAxis: {title: {color: "#8791af"}, label: {color: "#8791af"}, tickColor: "#8791af"},
        plot: {lineColor: "rgba(166, 176, 207, 0.1)"},
        series: {colors: ["#0b51b7", "#eeeab5"]},
        legend: {label: {color: "#8791af"}}
    },
    barChart = (tui.chart.registerTheme("myTheme", theme), options.theme = "myTheme", tui.chart.barChart(container, data, options)),
    columnChartWidth = (window.addEventListener("resize", function () {
        barChartWidth = document.getElementById("bar-charts").offsetWidth, barChart.resize({
            width: barChartWidth,
            height: 350
        })
    }), document.getElementById("column-charts").offsetWidth), container = document.getElementById("column-charts"),
    data = {
        categories: ["شهریور, 1397", "مهر, 1397", "آبان, 1397", "آذر, 1397", "دی, 1397", "بهمن, 1397", "اسفند, 1397"],
        series: [{name: "بودجه", data: [5e3, 3e3, 5e3, 7e3, 6e3, 4e3, 1e3]}, {
            name: "درآمد",
            data: [8e3, 1e3, 7e3, 2e3, 6e3, 3e3, 5e3]
        }, {name: "هزینه ها", data: [4e3, 4e3, 6e3, 3e3, 4e3, 5e3, 7e3]}]
    }, options = {
        chart: {width: columnChartWidth, height: 380, title: "درآمد ماهانه", format: "1,000"},
        yAxis: {title: "مبلغ", min: 0, max: 9e3},
        xAxis: {title: "ماه"},
        legend: {align: "top"}
    }, theme = {
        chart: {background: {color: "#fff", opacity: 0}},
        title: {color: "#8791af"},
        xAxis: {title: {color: "#8791af"}, label: {color: "#8791af"}, tickColor: "#8791af"},
        yAxis: {title: {color: "#8791af"}, label: {color: "#8791af"}, tickColor: "#8791af"},
        plot: {lineColor: "rgba(166, 176, 207, 0.1)"},
        legend: {label: {color: "#8791af"}},
        series: {colors: ["#0b51b7", "#1ccab8", "#eeeab5"]}
    },
    columnChart = (tui.chart.registerTheme("myTheme", theme), options.theme = "myTheme", tui.chart.columnChart(container, data, options)),
    lineChartWidth = (window.addEventListener("resize", function () {
        columnChartWidth = document.getElementById("column-charts").offsetWidth, columnChart.resize({
            width: columnChartWidth,
            height: 350
        })
    }), document.getElementById("line-charts").offsetWidth), container = document.getElementById("line-charts"),
    data = {
        categories: ["شهریور", "مهر", "آبان", "آذر", "دی", "بهمن"],
        series: [{name: "بودجه", data: [5e3, 3e3, 6e3, 3e3, 6e3, 4e3]}, {
            name: "درآمد",
            data: [8e3, 1e3, 7e3, 2e3, 5e3, 3e3]
        }, {name: "خروجی", data: [900, 6e3, 1e3, 9e3, 3e3, 1e3]}]
    }, options = {
        chart: {width: lineChartWidth, height: 380, title: "میانگین دمای 24 ساعته"},
        yAxis: {title: "مبلغ", pointOnColumn: !0},
        xAxis: {title: "ماه"},
        series: {spline: !0, showDot: !1},
        tooltip: {suffix: "°C"}
    }, theme = {
        chart: {background: {color: "#fff", opacity: 0}},
        title: {color: "#8791af"},
        xAxis: {title: {color: "#8791af"}, label: {color: "#8791af"}, tickColor: "#8791af"},
        yAxis: {title: {color: "#8791af"}, label: {color: "#8791af"}, tickColor: "#8791af"},
        plot: {lineColor: "rgba(166, 176, 207, 0.1)"},
        legend: {label: {color: "#8791af"}},
        series: {colors: ["#0b51b7", "#1ccab8", "#eeeab5"]}
    },
    lineChart = (tui.chart.registerTheme("myTheme", theme), options.theme = "myTheme", tui.chart.lineChart(container, data, options)),
    areaChartWidth = (window.addEventListener("resize", function () {
        lineChartWidth = document.getElementById("line-charts").offsetWidth, lineChart.resize({
            width: lineChartWidth,
            height: 350
        })
    }), document.getElementById("area-charts").offsetWidth), container = document.getElementById("area-charts"),
    data = {
        categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
        series: [{name: "سئول", data: [20, 40, 25, 50, 15, 45, 33, 34, 20, 30, 22, 13]}, {
            name: "سیدنی",
            data: [5, 30, 21, 18, 59, 50, 28, 33, 7, 20, 10, 30]
        }, {name: "مسکو", data: [30, 5, 18, 21, 33, 41, 29, 15, 30, 10, 33, 5]}]
    }, options = {
        chart: {width: areaChartWidth, height: 380, title: "میانگین دمای 24 ساعته"},
        series: {zoomable: !0, showDot: !1, areaOpacity: 1},
        yAxis: {title: "دما (سلسیوس)", pointOnColumn: !0},
        xAxis: {title: "ماه"},
        tooltip: {suffix: "°C"}
    }, theme = {
        chart: {background: {color: "#fff", opacity: 0}},
        title: {color: "#8791af"},
        xAxis: {title: {color: "#8791af"}, label: {color: "#8791af"}, tickColor: "#8791af"},
        yAxis: {title: {color: "#8791af"}, label: {color: "#8791af"}, tickColor: "#8791af"},
        plot: {lineColor: "rgba(166, 176, 207, 0.1)"},
        legend: {label: {color: "#8791af"}},
        series: {colors: ["#0b51b7", "#1ccab8", "#eeeab5"]}
    },
    areaChart = (tui.chart.registerTheme("myTheme", theme), options.theme = "myTheme", tui.chart.areaChart(container, data, options)),
    radialChartWidth = (window.addEventListener("resize", function () {
        areaChartWidth = document.getElementById("area-charts").offsetWidth, areaChart.resize({
            width: areaChartWidth,
            height: 350
        })
    }), document.getElementById("radial-charts").offsetWidth), container = document.getElementById("radial-charts"),
    data = {
        categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور"],
        series: [{name: "بودجه", data: [5e3, 3e3, 5e3, 7e3, 6e3, 4e3]}, {
            name: "درآمد",
            data: [8e3, 8e3, 7e3, 2e3, 5e3, 3e3]
        }, {name: "هزینه ها", data: [4e3, 4e3, 6e3, 3e3, 4e3, 5e3]}, {
            name: "بدهی",
            data: [6e3, 3e3, 3e3, 1e3, 2e3, 4e3]
        }]
    }, options = {
        chart: {title: "درآمدهای سالانه", width: radialChartWidth, height: 380},
        series: {showDot: !1, showArea: !1},
        plot: {type: "circle"},
        legend: {align: "bottom"}
    }, theme = {
        chart: {background: {color: "#fff", opacity: 0}},
        title: {color: "#8791af"},
        xAxis: {title: {color: "#8791af"}, label: {color: "#8791af"}, tickColor: "#8791af"},
        yAxis: {title: {color: "#8791af"}, label: {color: "#8791af"}, tickColor: "#8791af"},
        plot: {lineColor: "rgba(166, 176, 207, 0.1)"},
        legend: {label: {color: "#8791af"}},
        series: {colors: ["#0b51b7", "#1ccab8", "#eeeab5", "#ecedf1"]}
    },
    radialChart = (tui.chart.registerTheme("myTheme", theme), options.theme = "myTheme", tui.chart.radialChart(container, data, options)),
    bubbleChartWidth = (window.addEventListener("resize", function () {
        radialChartWidth = document.getElementById("radial-charts").offsetWidth, radialChart.resize({
            width: radialChartWidth,
            height: 350
        })
    }), document.getElementById("bubble-charts").offsetWidth), container = document.getElementById("bubble-charts"),
    data = {
        series: [{
            name: "آفریقا",
            data: [{x: 4200, y: 70.35, r: 32209101, label: "مراکش"}, {
                x: 4200,
                y: 70.71,
                r: 76117421,
                label: "مصر"
            }, {x: 5900, y: 56.46, r: 1355246, label: "گابن"}, {
                x: 6600,
                y: 72.74,
                r: 32129324,
                label: "الجزایر"
            }, {x: 6700, y: 76.28, r: 5631585, label: "لیبی"}, {
                x: 7100,
                y: 74.66,
                r: 9974722,
                label: "تونس"
            }, {x: 10500, y: 69.28, r: 1096585, label: "ترینیداد و توباگو"}, {
                x: 12800,
                y: 72.09,
                r: 1220481,
                label: "موریس"
            }, {x: 18200, y: 78.68, r: 396851, label: "مالتا"}]
        }, {
            name: "امریکا",
            data: [{x: 4800, y: 74.64, r: 6191368, label: "پاراگوئه"}, {
                x: 4900,
                y: 70.92,
                r: 6587541,
                label: "El Salvador"
            }, {x: 5600, y: 69.22, r: 2754430, label: "Peru"}, {
                x: 5800,
                y: 74.06,
                r: 2501738,
                label: "ونوزوئلا"
            }, {x: 6300, y: 67.63, r: 8833634, label: "جمهوری دومینیکن"}, {
                x: 6500,
                y: 67.43,
                r: 272945,
                label: "بلیز"
            }, {x: 6600, y: 71.43, r: 4231077, label: "کلمبیا"}, {
                x: 6900,
                y: 72.14,
                r: 3000463,
                label: "پاناما"
            }, {x: 8100, y: 71.41, r: 78410118, label: "برزیل"}, {
                x: 9600,
                y: 76.63,
                r: 3956507,
                label: "کاستاریکا"
            }, {x: 9600, y: 74.94, r: 4495959, label: "مکزیک"}, {
                x: 12400,
                y: 75.7,
                r: 6914475,
                label: "آرژانتین"
            }, {x: 14500, y: 75.92, r: 3399237, label: "اوروگوئه"}, {
                x: 16400,
                y: 71.64,
                r: 278289,
                label: "باربادوس"
            }, {x: 17700, y: 65.63, r: 299697, label: "باهاما، The"}, {
                x: 17700,
                y: 77.49,
                r: 3897960,
                label: "پورتوریکو"
            }, {x: 31500, y: 79.96, r: 32507874, label: "کانادا"}, {
                x: 32100,
                y: 77.43,
                r: 89302754,
                label: "ایالات متحده"
            }]
        }, {
            name: "آسیا",
            data: [{x: 5600, y: 71.96, r: 92988e3, label: "چین"}, {
                x: 5700,
                y: 61.29,
                r: 4863169,
                label: "ترکمنستان"
            }, {x: 7700, y: 69.66, r: 19018924, label: "ایران"}, {
                x: 7800,
                y: 66.07,
                r: 1514370,
                label: "قزاقستان"
            }, {x: 8100, y: 71.41, r: 14865523, label: "تایلند"}, {
                x: 9700,
                y: 71.95,
                r: 23522482,
                label: "مالزی"
            }, {x: 12e3, y: 75.23, r: 25795938, label: "عربستان"}, {
                x: 13100,
                y: 72.85,
                r: 2903165,
                label: "عمان"
            }, {x: 19200, y: 75.58, r: 48598170, label: "کره جنوبی"}, {
                x: 19200,
                y: 73.98,
                r: 677886,
                label: "بحرین"
            }, {x: 20800, y: 79.17, r: 6199008, label: "اسرائیل"}, {
                x: 21300,
                y: 76.84,
                r: 2257549,
                label: "کویت"
            }, {x: 23200, y: 73.4, r: 840290, label: "قطر"}, {
                x: 25200,
                y: 74.99,
                r: 2523915,
                label: "امارات متحده عربی"
            }, {x: 25300, y: 77.06, r: 22749838, label: "تایوان"}, {
                x: 27800,
                y: 81.53,
                r: 4353893,
                label: "سنگاپور"
            }, {x: 29400, y: 81.04, r: 52733300, label: "ژاپن"}, {x: 34200, y: 81.39, r: 6855125, label: "هنگ کنگ"}]
        }, {
            name: "اروپا",
            data: [{x: 7700, y: 71.12, r: 2235555, label: "رومانی"}, {
                x: 8200,
                y: 71.75,
                r: 7517973,
                label: "بلغارستان"
            }, {x: 9800, y: 66.39, r: 54378233, label: "روسیه"}, {
                x: 10700,
                y: 76.38,
                r: 1582395,
                label: "شیلی"
            }, {x: 11200, y: 74.14, r: 4496869, label: "کرواسی"}, {
                x: 11500,
                y: 70.86,
                r: 2306306,
                label: "لتونی"
            }, {x: 12e3, y: 74.16, r: 38626349, label: "لهستان"}, {
                x: 12500,
                y: 73.46,
                r: 3607899,
                label: "لیتوانی"
            }, {x: 14300, y: 71.38, r: 1341664, label: "استونی"}, {
                x: 14500,
                y: 74.19,
                r: 5423567,
                label: "اسلواکی"
            }, {x: 14900, y: 72.25, r: 1003237, label: "مجارستان"}, {
                x: 16800,
                y: 75.78,
                r: 1024617,
                label: "جمهوری چک"
            }, {x: 17900, y: 77.35, r: 1052414, label: "پرتغال"}, {
                x: 19600,
                y: 75.93,
                r: 2011473,
                label: "اسلوونی"
            }, {x: 21300, y: 78.94, r: 10647529, label: "یونان"}, {
                x: 23300,
                y: 79.37,
                r: 40280780,
                label: "اسپانیا"
            }, {x: 27700, y: 79.54, r: 58057477, label: "ایتالیا"}, {
                x: 28400,
                y: 80.3,
                r: 898640,
                label: "سوئد"
            }, {x: 28700, y: 78.54, r: 22424609, label: "آلمان"}, {
                x: 28700,
                y: 79.44,
                r: 30424213,
                label: "فرانسه"
            }, {x: 29e3, y: 78.24, r: 5214512, label: "فنلاند"}, {
                x: 29500,
                y: 78.68,
                r: 16318199,
                label: "هلند"
            }, {x: 29600, y: 78.27, r: 60270708, label: "انگلستان"}, {
                x: 30600,
                y: 78.44,
                r: 10348276,
                label: "بلژیک"
            }, {x: 31300, y: 78.87, r: 8174762, label: "اتریش"}, {
                x: 31900,
                y: 77.36,
                r: 3969558,
                label: "ایرلند"
            }, {x: 31900, y: 80.18, r: 293966, label: "ایسلند"}, {
                x: 32200,
                y: 77.44,
                r: 5413392,
                label: "دانمارک"
            }, {x: 33800, y: 80.31, r: 7450867, label: "سوئیس"}]
        }, {
            name: "اقیانوسیه",
            data: [{x: 2200, y: 64.56, r: 5420280, label: "پاپوآ گینه نو"}, {
                x: 2700,
                y: 61.32,
                r: 100798,
                label: "کیریباتی"
            }, {x: 5900, y: 69.2, r: 880874, label: "فیجی"}, {
                x: 14500,
                y: 78.75,
                r: 108775,
                label: "جزایر ویرجین"
            }, {x: 23200, y: 78.49, r: 1993817, label: "نیوزلند"}, {
                x: 30700,
                y: 80.26,
                r: 5991314,
                label: "استرالیا"
            }]
        }]
    }, options = {
        chart: {
            width: radialChartWidth,
            height: 380,
            title: "نمودار میانگین عمر درآمد ناخالص داخلی (GDP)",
            format: function (e, t, a, r) {
                return "r" !== r && "x" !== r || (e = tui.chart.renderUtil.formatToComma(e), "x" === r && (e = "تومان" + e)), e
            }
        }, yAxis: {title: "میانگین عمر (سال)"}, xAxis: {title: "GDP"}, tooltip: {
            template: function (e, t) {
                return '<div class="tui-chart-default-tooltip"><div class="tui-chart-tooltip-head"><span class="tui-chart-legend-rect" style="' + t.cssText + '; width: 10px; height: 10px"></span><span>' + t.legend + "</span><span>" + t.label + '</span></div><table class="tui-chart-tooltip-body"><tr><td>GDP</td><td class="tui-chart-tooltip-value">' + t.x + '</td></tr><tr><td>میانگین عمر</td><td class="tui-chart-tooltip-value">' + t.y + '</td></tr><tr><td>جمعیت</td><td class="tui-chart-tooltip-value">' + t.r + "</td></tr></table>"
            }
        }
    }, theme = {
        chart: {background: {color: "#fff", opacity: 0}},
        title: {color: "#8791af"},
        xAxis: {title: {color: "#8791af"}, label: {color: "#8791af"}, tickColor: "#8791af"},
        yAxis: {title: {color: "#8791af"}, label: {color: "#8791af"}, tickColor: "#8791af"},
        plot: {lineColor: "rgba(166, 176, 207, 0.1)"},
        legend: {label: {color: "#8791af"}},
        series: {colors: ["#0b51b7", "#1ccab8", "#eeeab5", "#ecedf1"]}
    },
    bubbleChart = (tui.chart.registerTheme("myTheme", theme), options.theme = "myTheme", tui.chart.bubbleChart(container, data, options)),
    scatterChartWidth = (window.addEventListener("resize", function () {
        bubbleChartWidth = document.getElementById("bubble-charts").offsetWidth, bubbleChart.resize({
            width: bubbleChartWidth,
            height: 350
        })
    }), document.getElementById("scatter-charts").offsetWidth), container = document.getElementById("scatter-charts"),
    
    data = {
        series: [{
            name: 'آقا', style: {textAlign: 'right'},
            
            data: [{x: 174, y: 65.6}, {x: 175.3, y: 71.8}, {x: 193.5, y: 80.7}, {x: 186.5, y: 72.6}, {
                x: 187.2,
                y: 78.8
            }, {x: 181.5, y: 74.8}, {x: 184, y: 86.4}, {x: 184.5, y: 78.4}, {x: 175, y: 62}, {x: 184, y: 81.6}, {
                x: 180,
                y: 76.6
            }, {x: 177.8, y: 83.6}, {x: 192, y: 90}, {x: 176, y: 74.6}, {x: 174, y: 71}, {x: 184, y: 79.6}, {
                x: 192.7,
                y: 93.8
            }, {x: 171.5, y: 70}, {x: 173, y: 72.4}, {x: 176, y: 85.9}, {x: 176, y: 78.8}, {
                x: 180.5,
                y: 77.8
            }, {x: 172.7, y: 66.2}, {x: 176, y: 86.4}, {x: 173.5, y: 81.8}, {x: 178, y: 89.6}, {
                x: 180.3,
                y: 82.8
            }, {x: 180.3, y: 76.4}, {x: 164.5, y: 63.2}, {x: 173, y: 60.9}, {x: 183.5, y: 74.8}, {
                x: 175.5,
                y: 70
            }, {x: 188, y: 72.4}, {x: 189.2, y: 84.1}, {x: 172.8, y: 69.1}, {x: 170, y: 59.5}, {
                x: 182,
                y: 67.2
            }, {x: 170, y: 61.3}, {x: 177.8, y: 68.6}, {x: 184.2, y: 80.1}, {x: 186.7, y: 87.8}, {
                x: 171.4,
                y: 84.7
            }, {x: 172.7, y: 73.4}, {x: 175.3, y: 72.1}, {x: 180.3, y: 82.6}, {x: 182.9, y: 88.7}, {
                x: 188,
                y: 84.1
            }, {x: 177.2, y: 94.1}, {x: 172.1, y: 74.9}, {x: 167, y: 59.1}, {x: 169.5, y: 75.6}, {
                x: 174,
                y: 86.2
            }, {x: 172.7, y: 75.3}, {x: 182.2, y: 87.1}, {x: 164.1, y: 55.2}, {x: 163, y: 57}, {
                x: 171.5,
                y: 61.4
            }, {x: 184.2, y: 76.8}, {x: 174, y: 86.8}, {x: 174, y: 72.2}, {x: 177, y: 71.6}, {x: 186, y: 84.8}, {
                x: 167,
                y: 68.2
            }, {x: 171.8, y: 66.1}, {x: 182, y: 72}, {x: 167, y: 64.6}, {x: 177.8, y: 74.8}, {x: 164.5, y: 70}, {
                x: 192,
                y: 101.6
            }, {x: 175.5, y: 63.2}, {x: 171.2, y: 79.1}, {x: 181.6, y: 78.9}, {x: 167.4, y: 67.7}, {
                x: 181.1,
                y: 66
            }, {x: 177, y: 68.2}, {x: 174.5, y: 63.9}, {x: 177.5, y: 72}, {x: 170.5, y: 56.8}, {
                x: 182.4,
                y: 74.5
            }, {x: 197.1, y: 90.9}, {x: 180.1, y: 93}, {x: 175.5, y: 80.9}, {x: 180.6, y: 72.7}, {
                x: 184.4,
                y: 68
            }, {x: 175.5, y: 70.9}, {x: 180.6, y: 72.5}, {x: 177, y: 72.5}, {x: 177.1, y: 83.4}, {
                x: 181.6,
                y: 75.5
            }, {x: 176.5, y: 73}, {x: 175, y: 70.2}, {x: 174, y: 73.4}, {x: 165.1, y: 70.5}, {x: 177, y: 68.9}, {
                x: 192,
                y: 102.3
            }, {x: 176.5, y: 68.4}, {x: 169.4, y: 65.9}, {x: 182.1, y: 75.7}, {x: 179.8, y: 84.5}, {
                x: 175.3,
                y: 87.7
            }, {x: 184.9, y: 86.4}, {x: 177.3, y: 73.2}, {x: 167.4, y: 53.9}, {x: 178.1, y: 72}, {
                x: 168.9,
                y: 55.5
            }, {x: 157.2, y: 58.4}, {x: 180.3, y: 83.2}, {x: 170.2, y: 72.7}, {x: 177.8, y: 64.1}, {
                x: 172.7,
                y: 72.3
            }, {x: 165.1, y: 65}, {x: 186.7, y: 86.4}, {x: 165.1, y: 65}, {x: 174, y: 88.6}, {
                x: 175.3,
                y: 84.1
            }, {x: 185.4, y: 66.8}, {x: 177.8, y: 75.5}, {x: 180.3, y: 93.2}, {x: 180.3, y: 82.7}, {
                x: 177.8,
                y: 58
            }, {x: 177.8, y: 79.5}, {x: 177.8, y: 78.6}, {x: 177.8, y: 71.8}, {x: 177.8, y: 116.4}, {
                x: 163.8,
                y: 72.2
            }, {x: 188, y: 83.6}, {x: 198.1, y: 85.5}, {x: 175.3, y: 90.9}, {x: 166.4, y: 85.9}, {
                x: 190.5,
                y: 89.1
            }, {x: 166.4, y: 75}, {x: 177.8, y: 77.7}, {x: 179.7, y: 86.4}, {x: 172.7, y: 90.9}, {
                x: 190.5,
                y: 73.6
            }, {x: 185.4, y: 76.4}, {x: 168.9, y: 69.1}, {x: 167.6, y: 84.5}, {x: 175.3, y: 64.5}, {
                x: 170.2,
                y: 69.1
            }, {x: 190.5, y: 108.6}, {x: 177.8, y: 86.4}, {x: 190.5, y: 80.9}, {x: 177.8, y: 87.7}, {
                x: 184.2,
                y: 94.5
            }, {x: 176.5, y: 80.2}, {x: 177.8, y: 72}, {x: 180.3, y: 71.4}, {x: 171.4, y: 72.7}, {
                x: 172.7,
                y: 84.1
            }, {x: 172.7, y: 76.8}, {x: 177.8, y: 63.6}, {x: 177.8, y: 80.9}, {x: 182.9, y: 80.9}, {
                x: 170.2,
                y: 85.5
            }, {x: 167.6, y: 68.6}, {x: 175.3, y: 67.7}, {x: 165.1, y: 66.4}, {x: 185.4, y: 102.3}, {
                x: 181.6,
                y: 70.5
            }, {x: 172.7, y: 95.9}, {x: 190.5, y: 84.1}, {x: 179.1, y: 87.3}, {x: 175.3, y: 71.8}, {
                x: 170.2,
                y: 65.9
            }, {x: 193, y: 95.9}, {x: 171.4, y: 91.4}, {x: 177.8, y: 81.8}, {x: 177.8, y: 96.8}, {
                x: 167.6,
                y: 69.1
            }, {x: 167.6, y: 82.7}, {x: 180.3, y: 75.5}, {x: 182.9, y: 79.5}, {x: 176.5, y: 73.6}, {
                x: 186.7,
                y: 91.8
            }, {x: 188, y: 84.1}, {x: 188, y: 85.9}, {x: 177.8, y: 81.8}, {x: 174, y: 82.5}, {
                x: 177.8,
                y: 80.5
            }, {x: 171.4, y: 70}, {x: 185.4, y: 81.8}, {x: 185.4, y: 84.1}, {x: 188, y: 90.5}, {
                x: 188,
                y: 91.4
            }, {x: 182.9, y: 89.1}, {x: 176.5, y: 85}, {x: 175.3, y: 69.1}, {x: 175.3, y: 73.6}, {
                x: 188,
                y: 80.5
            }, {x: 188, y: 82.7}, {x: 175.3, y: 86.4}, {x: 170.5, y: 67.7}, {x: 179.1, y: 92.7}, {
                x: 177.8,
                y: 93.6
            }, {x: 175.3, y: 70.9}, {x: 182.9, y: 75}, {x: 170.8, y: 93.2}, {x: 188, y: 93.2}, {
                x: 180.3,
                y: 77.7
            }, {x: 177.8, y: 61.4}, {x: 185.4, y: 94.1}, {x: 168.9, y: 75}, {x: 185.4, y: 83.6}, {
                x: 180.3,
                y: 85.5
            }, {x: 174, y: 73.9}, {x: 167.6, y: 66.8}, {x: 182.9, y: 87.3}, {x: 160, y: 72.3}, {
                x: 180.3,
                y: 88.6
            }, {x: 167.6, y: 75.5}, {x: 186.7, y: 101.4}, {x: 175.3, y: 91.1}, {x: 175.3, y: 67.3}, {
                x: 175.9,
                y: 77.7
            }, {x: 175.3, y: 81.8}, {x: 179.1, y: 75.5}, {x: 181.6, y: 84.5}, {x: 177.8, y: 76.6}, {
                x: 182.9,
                y: 85
            }, {x: 177.8, y: 102.5}, {x: 184.2, y: 77.3}, {x: 179.1, y: 71.8}, {x: 176.5, y: 87.9}, {
                x: 188,
                y: 94.3
            }, {x: 174, y: 70.9}, {x: 167.6, y: 64.5}, {x: 170.2, y: 77.3}, {x: 167.6, y: 72.3}, {
                x: 188,
                y: 87.3
            }, {x: 174, y: 80}, {x: 176.5, y: 82.3}, {x: 180.3, y: 73.6}, {x: 167.6, y: 74.1}, {
                x: 188,
                y: 85.9
            }, {x: 180.3, y: 73.2}, {x: 167.6, y: 76.3}, {x: 183, y: 65.9}, {x: 183, y: 90.9}, {
                x: 179.1,
                y: 89.1
            }, {x: 170.2, y: 62.3}, {x: 177.8, y: 82.7}, {x: 179.1, y: 79.1}, {x: 190.5, y: 98.2}, {
                x: 177.8,
                y: 84.1
            }, {x: 180.3, y: 83.2}, {x: 180.3, y: 83.2}]
        }, {
            name: "خانم",
            data: [{x: 161.2, y: 51.6}, {x: 167.5, y: 59}, {x: 159.5, y: 49.2}, {x: 157, y: 63}, {
                x: 155.8,
                y: 53.6
            }, {x: 170, y: 59}, {x: 159.1, y: 47.6}, {x: 166, y: 69.8}, {x: 176.2, y: 66.8}, {
                x: 160.2,
                y: 75.2
            }, {x: 172.5, y: 55.2}, {x: 170.9, y: 54.2}, {x: 172.9, y: 62.5}, {x: 153.4, y: 42}, {
                x: 160,
                y: 50
            }, {x: 147.2, y: 49.8}, {x: 168.2, y: 49.2}, {x: 175, y: 73.2}, {x: 157, y: 47.8}, {
                x: 167.6,
                y: 68.8
            }, {x: 159.5, y: 50.6}, {x: 175, y: 82.5}, {x: 166.8, y: 57.2}, {x: 176.5, y: 87.8}, {
                x: 170.2,
                y: 72.8
            }, {x: 174, y: 54.5}, {x: 173, y: 59.8}, {x: 179.9, y: 67.3}, {x: 170.5, y: 67.8}, {
                x: 160,
                y: 47
            }, {x: 154.4, y: 46.2}, {x: 162, y: 55}, {x: 176.5, y: 83}, {x: 160, y: 54.4}, {x: 152, y: 45.8}, {
                x: 162.1,
                y: 53.6
            }, {x: 170, y: 73.2}, {x: 160.2, y: 52.1}, {x: 161.3, y: 67.9}, {x: 166.4, y: 56.6}, {
                x: 168.9,
                y: 62.3
            }, {x: 163.8, y: 58.5}, {x: 167.6, y: 54.5}, {x: 160, y: 50.2}, {x: 161.3, y: 60.3}, {
                x: 167.6,
                y: 58.3
            }, {x: 165.1, y: 56.2}, {x: 160, y: 50.2}, {x: 170, y: 72.9}, {x: 157.5, y: 59.8}, {
                x: 167.6,
                y: 61
            }, {x: 160.7, y: 69.1}, {x: 163.2, y: 55.9}, {x: 152.4, y: 46.5}, {x: 157.5, y: 54.3}, {
                x: 168.3,
                y: 54.8
            }, {x: 180.3, y: 60.7}, {x: 165.5, y: 60}, {x: 165, y: 62}, {x: 164.5, y: 60.3}, {x: 156, y: 52.7}, {
                x: 160,
                y: 74.3
            }, {x: 163, y: 62}, {x: 165.7, y: 73.1}, {x: 161, y: 80}, {x: 162, y: 54.7}, {x: 166, y: 53.2}, {
                x: 174,
                y: 75.7
            }, {x: 172.7, y: 61.1}, {x: 167.6, y: 55.7}, {x: 151.1, y: 48.7}, {x: 164.5, y: 52.3}, {
                x: 163.5,
                y: 50
            }, {x: 152, y: 59.3}, {x: 169, y: 62.5}, {x: 164, y: 55.7}, {x: 161.2, y: 54.8}, {x: 155, y: 45.9}, {
                x: 170,
                y: 70.6
            }, {x: 176.2, y: 67.2}, {x: 170, y: 69.4}, {x: 162.5, y: 58.2}, {x: 170.3, y: 64.8}, {
                x: 164.1,
                y: 71.6
            }, {x: 169.5, y: 52.8}, {x: 163.2, y: 59.8}, {x: 154.5, y: 49}, {x: 159.8, y: 50}, {
                x: 173.2,
                y: 69.2
            }, {x: 170, y: 55.9}, {x: 161.4, y: 63.4}, {x: 169, y: 58.2}, {x: 166.2, y: 58.6}, {
                x: 159.4,
                y: 45.7
            }, {x: 162.5, y: 52.2}, {x: 159, y: 48.6}, {x: 162.8, y: 57.8}, {x: 159, y: 55.6}, {
                x: 179.8,
                y: 66.8
            }, {x: 162.9, y: 59.4}, {x: 161, y: 53.6}, {x: 151.1, y: 73.2}, {x: 168.2, y: 53.4}, {
                x: 168.9,
                y: 69
            }, {x: 173.2, y: 58.4}, {x: 171.8, y: 56.2}, {x: 178, y: 70.6}, {x: 164.3, y: 59.8}, {
                x: 163,
                y: 72
            }, {x: 168.5, y: 65.2}, {x: 166.8, y: 56.6}, {x: 172.7, y: 105.2}, {x: 163.5, y: 51.8}, {
                x: 169.4,
                y: 63.4
            }, {x: 167.8, y: 59}, {x: 159.5, y: 47.6}, {x: 167.6, y: 63}, {x: 161.2, y: 55.2}, {
                x: 160,
                y: 45
            }, {x: 163.2, y: 54}, {x: 162.2, y: 50.2}, {x: 161.3, y: 60.2}, {x: 149.5, y: 44.8}, {
                x: 157.5,
                y: 58.8
            }, {x: 163.2, y: 56.4}, {x: 172.7, y: 62}, {x: 155, y: 49.2}, {x: 156.5, y: 67.2}, {
                x: 164,
                y: 53.8
            }, {x: 160.9, y: 54.4}, {x: 162.8, y: 58}, {x: 167, y: 59.8}, {x: 160, y: 54.8}, {
                x: 160,
                y: 43.2
            }, {x: 168.9, y: 60.5}, {x: 158.2, y: 46.4}, {x: 156, y: 64.4}, {x: 160, y: 48.8}, {
                x: 167.1,
                y: 62.2
            }, {x: 158, y: 55.5}, {x: 167.6, y: 57.8}, {x: 156, y: 54.6}, {x: 162.1, y: 59.2}, {
                x: 173.4,
                y: 52.7
            }, {x: 159.8, y: 53.2}, {x: 170.5, y: 64.5}, {x: 159.2, y: 51.8}, {x: 157.5, y: 56}, {
                x: 161.3,
                y: 63.6
            }, {x: 162.6, y: 63.2}, {x: 160, y: 59.5}, {x: 168.9, y: 56.8}, {x: 165.1, y: 64.1}, {
                x: 162.6,
                y: 50
            }, {x: 165.1, y: 72.3}, {x: 166.4, y: 55}, {x: 160, y: 55.9}, {x: 152.4, y: 60.4}, {
                x: 170.2,
                y: 69.1
            }, {x: 162.6, y: 84.5}, {x: 170.2, y: 55.9}, {x: 158.8, y: 55.5}, {x: 172.7, y: 69.5}, {
                x: 167.6,
                y: 76.4
            }, {x: 162.6, y: 61.4}, {x: 167.6, y: 65.9}, {x: 156.2, y: 58.6}, {x: 175.2, y: 66.8}, {
                x: 172.1,
                y: 56.6
            }, {x: 162.6, y: 58.6}, {x: 160, y: 55.9}, {x: 165.1, y: 59.1}, {x: 182.9, y: 81.8}, {
                x: 166.4,
                y: 70.7
            }, {x: 165.1, y: 56.8}, {x: 177.8, y: 60}, {x: 165.1, y: 58.2}, {x: 175.3, y: 72.7}, {
                x: 154.9,
                y: 54.1
            }, {x: 158.8, y: 49.1}, {x: 172.7, y: 75.9}, {x: 168.9, y: 55}, {x: 161.3, y: 57.3}, {
                x: 167.6,
                y: 55
            }, {x: 165.1, y: 65.5}, {x: 175.3, y: 65.5}, {x: 157.5, y: 48.6}, {x: 163.8, y: 58.6}, {
                x: 167.6,
                y: 63.6
            }, {x: 165.1, y: 55.2}, {x: 165.1, y: 62.7}, {x: 168.9, y: 56.6}, {x: 162.6, y: 53.9}, {
                x: 164.5,
                y: 63.2
            }, {x: 176.5, y: 73.6}, {x: 168.9, y: 62}, {x: 175.3, y: 63.6}, {x: 159.4, y: 53.2}, {
                x: 160,
                y: 53.4
            }, {x: 170.2, y: 55}, {x: 162.6, y: 70.5}, {x: 167.6, y: 54.5}, {x: 162.6, y: 54.5}, {
                x: 160.7,
                y: 55.9
            }, {x: 160, y: 59}, {x: 157.5, y: 63.6}, {x: 162.6, y: 54.5}, {x: 152.4, y: 47.3}, {
                x: 170.2,
                y: 67.7
            }, {x: 165.1, y: 80.9}, {x: 172.7, y: 70.5}, {x: 165.1, y: 60.9}, {x: 170.2, y: 63.6}, {
                x: 170.2,
                y: 54.5
            }, {x: 170.2, y: 59.1}, {x: 161.3, y: 70.5}, {x: 167.6, y: 52.7}, {x: 167.6, y: 62.7}, {
                x: 165.1,
                y: 86.3
            }, {x: 162.6, y: 66.4}, {x: 152.4, y: 67.3}, {x: 168.9, y: 63}, {x: 170.2, y: 73.6}, {
                x: 175.2,
                y: 62.3
            }, {x: 175.2, y: 57.7}, {x: 160, y: 55.4}, {x: 165.1, y: 104.1}, {x: 174, y: 55.5}, {
                x: 170.2,
                y: 77.3
            }, {x: 160, y: 80.5}, {x: 167.6, y: 64.5}, {x: 167.6, y: 72.3}, {x: 167.6, y: 61.4}, {
                x: 154.9,
                y: 58.2
            }, {x: 162.6, y: 81.8}, {x: 175.3, y: 63.6}, {x: 171.4, y: 53.4}, {x: 157.5, y: 54.5}, {
                x: 165.1,
                y: 53.6
            }, {x: 160, y: 60}, {x: 174, y: 73.6}, {x: 162.6, y: 61.4}, {x: 174, y: 55.5}, {
                x: 162.6,
                y: 63.6
            }, {x: 161.3, y: 60.9}, {x: 156.2, y: 60}, {x: 149.9, y: 46.8}, {x: 169.5, y: 57.3}, {
                x: 160,
                y: 64.1
            }, {x: 175.3, y: 63.6}, {x: 169.5, y: 67.3}, {x: 160, y: 75.5}, {x: 172.7, y: 68.2}, {
                x: 162.6,
                y: 61.4
            }, {x: 157.5, y: 76.8}, {x: 176.5, y: 71.8}, {x: 164.4, y: 55.5}, {x: 160.7, y: 48.6}, {
                x: 174,
                y: 66.4
            }, {x: 163.8, y: 67.3}]
        }]
    }, options = {
        chart: {width: scatterChartWidth, height: 380, title: "قد نسبت به وزن"},
        yAxis: {title: "وزن (kg)"},
        xAxis: {title: "قد (cm)"},
        tooltip: {
            template: function (e, t) {
                return '<div class="tui-chart-default-tooltip"><div class="tui-chart-tooltip-head">' + t.legend + '</div><table class="tui-chart-tooltip-body"><tr><td>وزن</td><td class="tui-chart-tooltip-value">' + t.x + 'kg</td></tr><tr><td>قد</td><td class="tui-chart-tooltip-value">' + t.y + "cm</td></tr></table></div>"
            }
        }
    }, theme = {
        chart: {background: {color: "#fff", opacity: 0}},
        title: {color: "#8791af"},
        xAxis: {title: {color: "#8791af"}, label: {color: "#8791af"}, tickColor: "#8791af"},
        yAxis: {title: {color: "#8791af"}, label: {color: "#8791af"}, tickColor: "#8791af"},
        plot: {lineColor: "rgba(166, 176, 207, 0.1)"},
        legend: {label: {color: "#8791af"}},
        series: {colors: ["#0b51b7", "#1ccab8"]}
    },
    scatterChart = (tui.chart.registerTheme("myTheme", theme), options.theme = "myTheme", tui.chart.scatterChart(container, data, options)),
    pieChartWidth = (window.addEventListener("resize", function () {
        scatterChartWidth = document.getElementById("scatter-charts").offsetWidth, scatterChart.resize({
            width: scatterChartWidth,
            height: 350
        })
    }), document.getElementById("pie-charts").offsetWidth), container = document.getElementById("pie-charts"), data = {
        categories: ["مرورگر"],
        series: [{name: "کروم", data: 46.02}, {name: "اینترنت اکسپلورر", data: 20.47}, {name: "فایرفاکس", data: 17.71}, {
            name: "سافاری",
            data: 5.45
        }, {name: "دیگر", data: 10.35}]
    }, options = {chart: {width: pieChartWidth, height: 380, title: "نسبت استفاده از مرورگرهای وب"}, tooltip: {suffix: "%"}},
    theme = {
        chart: {background: {color: "#fff", opacity: 0}},
        title: {color: "#8791af"},
        plot: {lineColor: "rgba(166, 176, 207, 0.1)"},
        legend: {label: {color: "#8791af"}},
        series: {colors: ["#0b51b7", "#1ccab8", "#eeeab5", "#ef4586", "#f1b44c"]}

    },
    pieChart = (tui.chart.registerTheme("myTheme", theme), options.theme = "myTheme", tui.chart.pieChart(container, data, options)),
    donutpieChartWidth = (window.addEventListener("resize", function () {
        pieChartWidth = document.getElementById("pie-charts").offsetWidth, pieChart.resize({
            width: pieChartWidth,
            height: 350
        })
    }), document.getElementById("donut-charts").offsetWidth), container = document.getElementById("donut-charts"),
    data = {
        categories: ["مرورگر"],
        series: [{name: "کروم", data: 46.02}, {name: "اینترنت اکسپلور", data: 20.47}, {
            name: "فایرفاکس",
            data: 17.71
        }, {name: "سافاری", data: 5.45}, {name: "ودیگر", data: 10.35}]
    }, options = {
        chart: {
            width: donutpieChartWidth,
            height: 380,
            title: "نسبت استفاده از مرورگرهای وب",
            format: function (e, t, a, r, o) {
                return "makingSeriesLabel" === a && (e += "%"), e
            }
        }, series: {radiusRange: ["40%", "100%"], showLabel: !0}, tooltip: {suffix: "%"}, legend: {align: "bottom"}
    }, theme = {
        chart: {background: {color: "#fff", opacity: 0}},
        title: {color: "#8791af"},
        plot: {lineColor: "rgba(166, 176, 207, 0.1)"},
        legend: {label: {color: "#8791af"}},
        series: {
            series: {colors: ["#0b51b7", "#1ccab8", "#eeeab5", "#ef4586", "#f1b44c"]},
            label: {color: "#fff", fontFamily: "shabnam"}
        }
    },
    donutChart = (tui.chart.registerTheme("myTheme", theme), options.theme = "myTheme", tui.chart.pieChart(container, data, options)),
    heatmapchartsWidth = (window.addEventListener("resize", function () {
        donutpieChartWidth = document.getElementById("donut-charts").offsetWidth, donutChart.resize({
            width: donutpieChartWidth,
            height: 350
        })
    }), document.getElementById("heatmap-charts").offsetWidth), container = document.getElementById("heatmap-charts"),
    data = {
        categories: {
            x: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
            y: ["سئول", "سیاتل", "سیدنی", "مسکو", "جونگفرو"]
        },
        series: [[-3.5, -1.1, 4, 11.3, 17.5, 21.5, 24.9, 25.2, 20.4, 13.9, 6.6, -.6], [3.8, 5.6, 7, 9.1, 12.4, 15.3, 17.5, 17.8, 15, 10.6, 6.4, 3.7], [22.1, 22, 20.9, 18.3, 15.2, 12.8, 11.8, 13, 15.2, 17.6, 19.4, 21.2], [-10.3, -9.1, -4.1, 4.4, 12.2, 16.3, 18.5, 16.7, 10.9, 4.2, -2, -7.5], [-13.2, -13.7, -13.1, -10.3, -6.1, -3.2, 0, -.1, -1.8, -4.5, -9, -10.9]]
    }, options = {
        chart: {width: heatmapchartsWidth, height: 380, title: "میانگین دمای 24 ساعته"},
        yAxis: {title: "شهر"},
        xAxis: {title: "ماه"},
        series: {showLabel: !0},
        tooltip: {suffix: "°C"}
    }, theme = {
        chart: {background: {color: "#fff", opacity: 0}},
        title: {color: "#8791af"},
        xAxis: {title: {color: "#8791af"}, label: {color: "#8791af"}, tickColor: "#8791af"},
        yAxis: {title: {color: "#8791af"}, label: {color: "#8791af"}, tickColor: "#8791af"},
        plot: {lineColor: "rgba(166, 176, 207, 0.1)"},
        legend: {label: {color: "#8791af"}},
        series: {startColor: "#556ee6", endColor: "#34c38f", overColor: "#75b5aa", borderColor: "#F4511E"}
    },
    heatmapChart = (tui.chart.registerTheme("myTheme", theme), options.theme = "myTheme", tui.chart.heatmapChart(container, data, options)),
    treemapchartsWidth = (window.addEventListener("resize", function () {
        heatmapChartChartWidth = document.getElementById("heatmap-charts").offsetWidth, heatmapChart.resize({
            width: heatmapChartChartWidth,
            height: 350
        })
    }), document.getElementById("treemap-charts").offsetWidth), container = document.getElementById("treemap-charts"),
    data = {
        series: [{
            label: "اسناد",
            children: [{
                label: "docs",
                children: [{label: "صفحات", value: 1.3}, {label: "نکات کلیدی", value: 2.5}, {label: "اعداد", value: 1.2}]
            }, {label: "عکس ها", value: 5.5}, {label: "ویدئوها", value: 20.7}]
        }, {
            label: "دانلودها",
            children: [{label: "اخیرا", value: 5.3}, {label: "1393", value: 10.1}, {label: "1392", value: 8.2}]
        }, {label: "اپلیکیشن", value: 16.4}, {label: "دکستاپ", value: 4.5}]
    }, options = {
        chart: {width: treemapchartsWidth, height: 380, title: "فضای دیسک استفاده شده"},
        series: {showLabel: !0, zoomable: !1, useLeafLabel: !0},
        tooltip: {suffix: "GB"}
    }, theme = {
        chart: {background: {color: "#fff", opacity: 0}},
        title: {color: "#8791af"},
        plot: {lineColor: "rgba(166, 176, 207, 0.1)"},
        legend: {label: {color: "#8791af"}},
        series: {
            colors: ["#0b51b7", "#1ccab8", "#eeeab5", "#ef4586"],
            borderColor: "rgba(255, 255, 255, 0.4)",
            borderWidth: 4
        }
    },
    treemapChart = (tui.chart.registerTheme("myTheme", theme), options.theme = "myTheme", tui.chart.treemapChart(container, data, options)),
    mapchartsWidth = (window.addEventListener("resize", function () {
        treemapChartChartWidth = document.getElementById("treemap-charts").offsetWidth, treemapChart.resize({
            width: treemapChartChartWidth,
            height: 350
        })
    }), document.getElementById("map-charts").offsetWidth), container = document.getElementById("map-charts"), data = {
        series: [{code: "US-AK", data: -3}, {code: "US-AL", data: 17.1}, {code: "US-AZ", data: 15.7}, {
            code: "US-CA",
            data: 15.2
        }, {code: "US-CO", data: 7.3}, {code: "US-CT", data: 9.4}, {code: "US-DC", data: 12.3}, {
            code: "US-DE",
            data: 12.9
        }, {code: "US-FL", data: 21.5}, {code: "US-GA", data: 17.5}, {code: "US-HI", data: 21.1}, {
            code: "US-IA",
            data: 8.8
        }, {code: "US-ID", data: 6.9}, {code: "US-IL", data: 11}, {code: "US-IN", data: 10.9}, {
            code: "US-KS",
            data: 12.4
        }, {code: "US-KY", data: 13.1}, {code: "US-LA", data: 19.1}, {code: "US-MA", data: 8.8}, {
            code: "US-MD",
            data: 12.3
        }, {code: "US-ME", data: 5}, {code: "US-MI", data: 6.9}, {code: "US-MN", data: 5.1}, {
            code: "US-MO",
            data: 12.5
        }, {code: "US-MS", data: 17.4}, {code: "US-NC", data: 15}, {code: "US-ND", data: 4.7}, {
            code: "US-NE",
            data: 9.3
        }, {code: "US-NH", data: 6.6}, {code: "US-NJ", data: 11.5}, {code: "US-NM", data: 11.9}, {
            code: "US-NV",
            data: 9.9
        }, {code: "US-NY", data: 7.4}, {code: "US-OH", data: 10.4}, {code: "US-OK", data: 15.3}, {
            code: "US-OR",
            data: 9.1
        }, {code: "US-PA", data: 9.3}, {code: "US-RI", data: 10.1}, {code: "US-SC", data: 16.9}, {
            code: "US-SD",
            data: 7.3
        }, {code: "US-TN", data: 14.2}, {code: "US-TX", data: 18.2}, {code: "US-UT", data: 9.2}, {
            code: "US-VA",
            data: 12.8
        }, {code: "US-VT", data: 6.1}, {code: "US-WA", data: 9.1}, {code: "US-WI", data: 11}, {
            code: "US-WV",
            data: 6.2
        }, {code: "US-WY", data: 5.6}]
    }, options = {
        chart: {width: mapchartsWidth, height: 380, title: "میانگین دمای سالانه ایالات متحده آمریکا (°C)"},
        map: "usa",
        legend: {align: "right"},
        tooltip: {suffix: "°C"}
    }, theme = {
        chart: {background: {color: "#fff", opacity: 0}},
        title: {color: "#8791af"},
        legend: {label: {color: "#8791af"}},
        series: {startColor: "#556ee6", endColor: "#34c38f", overColor: "#75b5aa", borderColor: "#F4511E"}
    },
    mapChart = (tui.chart.registerTheme("myTheme", theme), options.theme = "myTheme", tui.chart.mapChart(container, data, options)),
    boxplotchartsWidth = (window.addEventListener("resize", function () {
        mapChartChartWidth = document.getElementById("map-charts").offsetWidth, mapChart.resize({
            width: mapChartChartWidth,
            height: 350
        })
    }), document.getElementById("boxplot-charts").offsetWidth), container = document.getElementById("boxplot-charts"),
    data = {
        categories: ["بودجه", "درآمد", "هزینه", "بدهی"],
        series: [{
            name: "1393",
            data: [[1e3, 2500, 3714, 5500, 7e3], [1e3, 2750, 4571, 5250, 8e3], [3e3, 4e3, 4714, 6e3, 7e3], [1e3, 2250, 3142, 4750, 6e3]],
            outliers: [[0, 14e3], [2, 1e4], [3, 9600]]
        }, {
            name: "1394",
            data: [[2e3, 4500, 6714, 11500, 13e3], [3e3, 5750, 7571, 8250, 9e3], [5e3, 8e3, 8714, 9e3, 1e4], [7e3, 9250, 10142, 11750, 12e3]],
            outliers: [[1, 14e3]]
        }]
    }, options = {
        chart: {width: boxplotchartsWidth, height: 380, title: "درآمد ماهانه", format: "1,000"},
        yAxis: {title: "مبلغ", min: 0, max: 15e3},
        xAxis: {title: "ماه"},
        legend: {align: "bottom"}
    }, theme = {
        chart: {background: {color: "#fff", opacity: 0}},
        title: {color: "#8791af"},
        xAxis: {title: {color: "#8791af"}, label: {color: "#8791af"}, tickColor: "#8791af"},
        yAxis: {title: {color: "#8791af"}, label: {color: "#8791af"}, tickColor: "#8791af"},
        plot: {lineColor: "rgba(166, 176, 207, 0.1)"},
        legend: {label: {color: "#8791af"}},
        series: {colors: ["#0b51b7", "#1ccab8"]}
    },
    boxplotChart = (tui.chart.registerTheme("myTheme", theme), options.theme = "myTheme", tui.chart.boxplotChart(container, data, options)),
    bulletchartsWidth = (window.addEventListener("resize", function () {
        boxplotChartChartWidth = document.getElementById("boxplot-charts").offsetWidth, boxplotChart.resize({
            width: boxplotChartChartWidth,
            height: 350
        })
    }), document.getElementById("bullet-charts").offsetWidth), container = document.getElementById("bullet-charts"),
    data = {
        categories: ["مهر", "آبان"],
        series: [{
            name: "بودجه",
            data: 25,
            markers: [28, 2, 15],
            ranges: [[-1, 10], [10, 20], [20, 30]]
        }, {name: "سلام", data: 11, markers: [20], ranges: [[0, 8], [8, 15]]}, {
            name: "دنیا",
            data: 30,
            markers: [25],
            ranges: [[0, 10], [10, 19], [19, 28]]
        }, {name: "درآمد", data: 23, markers: [], ranges: [[19, 25], [13, 19], [0, 13]]}]
    }, options = {
        chart: {width: bulletchartsWidth, height: 380, title: "درآمد ماهانه", format: "1,000"},
        legend: {visible: !0},
        xAxis: {max: 35},
        series: {showLabel: !0, vertical: !1}
    }, theme = {
        chart: {background: {color: "#fff", opacity: 0}},
        title: {color: "#8791af"},
        xAxis: {title: {color: "#8791af"}, label: {color: "#8791af"}, tickColor: "#8791af"},
        yAxis: {title: {color: "#8791af"}, label: {color: "#8791af"}, tickColor: "#8791af"},
        plot: {lineColor: "rgba(166, 176, 207, 0.1)"},
        legend: {label: {color: "#8791af"}},
        series: {
            colors: ["#0b51b7", "#1ccab8", "#eeeab5", "#ef4586"],
            ranges: [{color: "#eee", opacity: .7}, null, {color: "#556ee6"}]
        }
    },
    bulletChart = (tui.chart.registerTheme("myTheme", theme), options.theme = "myTheme", tui.chart.bulletChart(container, data, options));
window.addEventListener("resize", function () {
    bulletChartWidth = document.getElementById("bullet-charts").offsetWidth, bulletChart.resize({
        width: bulletChartWidth,
        height: 350
    })
});