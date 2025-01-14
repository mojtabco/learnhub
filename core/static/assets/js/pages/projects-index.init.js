var options = {
    chart: {height: 230, type: "area", stacked: !0, toolbar: {show: !1, autoSelected: "zoom"}},
    colors: ["#2a77f4"],
    dataLabels: {enabled: !1},
    stroke: {curve: "smooth", width: [2, 2], dashArray: [0, 4], lineCap: "round"},
    grid: {borderColor: "#45404a2e", padding: {left: 0, right: 0}, strokeDashArray: 3},
    markers: {size: 0, hover: {size: 0}},
    series: [{name: "بازدید‌های یکتا", data: [10, 10, 50, 20, 70, 20, 80, 30, 75, 40, 60, 60]}],
    xaxis: {
        type: "month",
        categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
        axisBorder: {show: !0, color: "#45404a2e"},
        axisTicks: {show: !0, color: "#45404a2e"},
        offsetX:-5,
    },
    fill: {type: "gradient", gradient: {shadeIntensity: 1, opacityFrom: .4, opacityTo: .3, stops: [0, 90, 100]}},
    tooltip: {x: {format: "dd/MM/yy HH:mm"}},
    legend: {position: "top", horizontalAlign: "left"}
}, chart = new ApexCharts(document.querySelector("#overview"), options), options = (chart.render(), {
    chart: {
        type: "radialBar",
        height: 295,
        dropShadow: {enabled: !0, top: 5, left: 0, bottom: 0, right: 0, blur: 5, color: "#45404a2e", opacity: .35}
    },
    plotOptions: {
        radialBar: {
            offsetY: -10,
            startAngle: 0,
            endAngle: 270,
            hollow: {margin: 5, size: "50%", background: "transparent"},
            track: {show: !1},
            dataLabels: {name: {fontSize: "18px"}, value: {fontSize: "16px", color: "#50649c"}}
        }
    },
    colors: ["#2a76f4", "rgba(42, 118, 244, .5)", "rgba(42, 118, 244, .18)"],
    stroke: {lineCap: "round"},
    series: [71, 63, 100],
    labels: ["تکمیل شد", "فعال", "اختصاص یافته"],
    legend: {show: !0, floating: !0, position: "left", offsetX: -10, offsetY: 0},
    responsive: [{
        breakpoint: 480,
        options: {legend: {show: !0, floating: !0, position: "right", offsetX: 10, offsetY: 0}}
    }]
});
(chart = new ApexCharts(document.querySelector("#task_status"), options)).render(), new Litepicker({
    element: document.getElementById("light_datepicker"),
    singleMode: !0,
    inlineMode: !0
});