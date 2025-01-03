var options = {
    chart: {height: 270, type: "donut"},
    plotOptions: {pie: {donut: {size: "85%"}}},
    dataLabels: {enabled: !1},
    stroke: {show: !0, width: 2, colors: ["transparent"]},
    series: [50, 25, 25],
    legend: {
        show: !0,
        position: "bottom",
        horizontalAlign: "center",
        verticalAlign: "middle",
        floating: !1,
        fontSize: "13px",
        offsetX: 0,
        offsetY: 0
    },
    labels: ["Binance", "Kraken", "Bittrex"],
    colors: ["#2a76f4", "rgba(42, 118, 244, .5)", "rgba(42, 118, 244, .18)"],
    responsive: [{
        breakpoint: 600,
        options: {plotOptions: {donut: {customScale: .2}}, chart: {height: 240}, legend: {show: !1}}
    }],
    tooltip: {
        y: {
            formatter: function (t) {
                return t + " %"
            }
        }
    }
}, chart = new ApexCharts(document.querySelector("#ana_device"), options);
chart.render();