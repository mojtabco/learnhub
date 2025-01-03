var options = {
    chart: {height: 325, type: "area", toolbar: {show: !1}},
    colors: ["#67c8ff", "#6d81f5"],
    dataLabels: {enabled: !1},
    stroke: {show: !0, curve: "smooth", width: [1.5, 1.5], dashArray: [0, 4], lineCap: "round"},
    series: [{name: "درآمد", data: [45, 45, 20, 20, 20, 100, 100, 100, 35, 35, 80, 80]}, {
        name: "هزینه",
        data: [0, 30, 10, 40, 30, 60, 50, 80, 70, 100, 90, 130]
    }],
    labels:  ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
    yaxis: {labels: {offsetX: -12, offsetY: 0}},
    xaxis: {labels: {offsetX: -2, }},
    grid: {borderColor: "#e0e6ed", strokeDashArray: 3, xaxis: {lines: {show: !0}}, yaxis: {lines: {show: !1}}},
    legend: {show: !1},
    fill: {
        type: "gradient",
        gradient: {
            type: "vertical",
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: .28,
            opacityTo: .05,
            stops: [45, 100]
        }
    }
}, chart = new ApexCharts(document.querySelector("#Tickets_Status"), options), dash_spark_1 = (chart.render(), {
    chart: {type: "area", height: 60, sparkline: {enabled: !0}},
    stroke: {curve: "smooth", width: 2},
    fill: {
        opacity: 1,
        gradient: {
            shade: "#2c77f4",
            type: "horizontal",
            shadeIntensity: .5,
            inverseColors: !0,
            opacityFrom: .1,
            opacityTo: .1,
            stops: [0, 80, 100],
            colorStops: []
        }
    },
    series: [{data: [4, 8, 5, 10, 4, 16, 5, 11, 6, 11, 30, 10, 13, 4, 6, 3, 6]}],
    yaxis: {min: 0},
    colors: ["#2c77f4"],
    tooltip: {show: !1}
}), dash_spark_2 = (new ApexCharts(document.querySelector("#dash_spark_1"), dash_spark_1).render(), {
    chart: {
        type: "area",
        height: 60,
        sparkline: {enabled: !0}
    },
    stroke: {curve: "smooth", width: 2},
    fill: {
        opacity: 1,
        gradient: {
            shade: "#fdb5c8",
            type: "horizontal",
            shadeIntensity: .5,
            inverseColors: !0,
            opacityFrom: .1,
            opacityTo: .1,
            stops: [0, 80, 100],
            colorStops: []
        }
    },
    series: [{data: [4, 8, 5, 10, 4, 25, 5, 11, 6, 11, 5, 10, 3, 14, 6, 8, 6]}],
    yaxis: {min: 0},
    colors: ["#2c77f4"]
}), options = (new ApexCharts(document.querySelector("#dash_spark_2"), dash_spark_2).render(), {
    chart: {
        height: 240,
        type: "donut"
    },
    plotOptions: {pie: {donut: {size: "85%"}}},
    dataLabels: {enabled: !1},
    stroke: {show: !0, width: 2, colors: ["transparent"]},
    series: [65, 20, 10, 5],
    legend: {
        show: !1,
        position: "bottom",
        horizontalAlign: "center",
        verticalAlign: "middle",
        floating: !1,
        fontSize: "14px",
        offsetX: 0,
        offsetY: -13
    },
    labels: ["عالی", "بسیار خوب", "خوب", "ضعیف"],
    colors: ["#2a76f4", "#fdb5c8", "#67c8ff", "#c693ff"],
    responsive: [{
        breakpoint: 600,
        options: {plotOptions: {donut: {customScale: .2}}, chart: {height: 240}, legend: {show: !1}}
    }],
    tooltip: {
        y: {
            formatter: function (e) {
                return e + " %"
            }
        }
    }
});
(chart = new ApexCharts(document.querySelector("#ana_device"), options)).render();