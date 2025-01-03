var options = {
    chart: {height: 340, type: "area", toolbar: {show: !1}},
    colors: ["#2a76f4"],
    dataLabels: {enabled: !1},
    markers: {
        discrete: [{
            seriesIndex: 0,
            dataPointIndex: 7,
            fillColor: "#aeb9db",
            strokeColor: "#aeb9db",
            size: 5
        }, {seriesIndex: 2, dataPointIndex: 11, fillColor: "#aeb9db", strokeColor: "#aeb9db", size: 4}]
    },
    stroke: {show: !0, curve: "smooth", width: 2, lineCap: "square"},
    series: [{
        name: "درآمد",
        data: [0, 160, 100, 210, 145, 400, 155, 210, 120, 275, 110, 200, 100, 90, 220, 100, 180, 140, 315, 130, 105, 165, 120, 160, 100, 210, 145, 400, 155, 210, 120]
    }],
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
    yaxis: {
        labels: {
            offsetX: -40,
            formatter: function (e) {
                return  e + " تومان"
            }
        }
    },
    grid: {borderColor: "#e0e6ed", strokeDashArray: 5, xaxis: {lines: {show: !0}}, yaxis: {lines: {show: !1}}},
    legend: {show: !1},
    tooltip: {marker: {show: !0}, x: {show: !1}},
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
    },
    responsive: [{breakpoint: 575}]
}, chart = new ApexCharts(document.querySelector("#Revenu_Status"), options), options = (chart.render(), {
    chart: {height: 100, type: "bar", toolbar: {show: !1}},
    plotOptions: {bar: {horizontal: !1, columnWidth: "50%"}},
    colors: ["#e5effe"],
    dataLabels: {enabled: !1},
    stroke: {show: !0, width: 2},
    series: [{
        name: "درآمد",
        data: [0, 160, 100, 210, 145, 400, 155, 210, 120, 275, 110, 200, 100, 90, 220, 100, 180, 140, 315, 130, 105, 165, 120, 160, 100, 210, 145, 400, 155, 210, 120]
    }],
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
    xaxis: {labels: {show: !1}, axisTicks: {show: !1}},
    grid: {borderColor: "#e5effe", strokeDashArray: 2, xaxis: {lines: {show: !1}}, yaxis: {lines: {show: !1}}},
    legend: {show: !1},
    tooltip: {marker: {show: !0}, x: {show: !1}},
    yaxis: {
        labels: {
            show: !1, formatter: function (e) {
                return e  + " تومان"
            }, offsetX: -12, offsetY: 0
        }
    },
    fill: {opacity: 1}
});
(chart = new ApexCharts(document.querySelector("#Revenu_Status_bar"), options)).render();