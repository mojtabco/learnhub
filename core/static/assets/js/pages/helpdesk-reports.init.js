var options = {
    chart: {height: 325, type: "bar", toolbar: {show: !1}},
    plotOptions: {bar: {horizontal: !1, endingShape: "rounded", columnWidth: "25%"}},
    dataLabels: {enabled: !1},
    stroke: {show: !0, width: 2, colors: ["transparent"]},
    colors: ["rgba(42, 118, 244, .18)", "#2a76f4"],
    series: [{name: "تیکت های جدید", data: [68, 44, 55, 57, 56, 61, 58, 63, 60, 66]}, {
        name: "تیکت‌های حل شده",
        data: [51, 76, 85, 101, 98, 87, 105, 91, 114, 94]
    }],
    xaxis: {
        categories:  ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی"],
        axisBorder: {show: !0},
        axisTicks: {show: !0}
    },
    legend: {offsetY: 6},
    yaxis: {
        title:
            {text:  "تیکت ها", offsetX: -25},
    label:{ offsetY: -80 },},
    fill: {opacity: 1},
    grid: {row: {colors: ["transparent", "transparent"], opacity: .2}, borderColor: "#f1f3fa", strokeDashArray: 3.5},
    tooltip: {
        y: {
            formatter: function (e) {
                return "" + e
            }
        }
    }
}, chart = new ApexCharts(document.querySelector("#reports_tickets"), options), dash_spark_1 = (chart.render(), {
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
    colors: ["#506ee4"]
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
            shade: "#fd3c97",
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
    colors: ["#fd3c97"]
});
new ApexCharts(document.querySelector("#dash_spark_2"), dash_spark_2).render();