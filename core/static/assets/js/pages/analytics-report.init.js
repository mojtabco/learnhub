var optionsCircle = {
        chart: {type: "radialBar", height: 265},
        plotOptions: {
            radialBar: {
                inverseOrder: !0,
                hollow: {margin: 5, size: "60%", background: "transparent"},
                track: {show: !0, background: "#ddd", strokeWidth: "10%", opacity: 1, margin: 5},
                dataLabels: {name: {fontSize: "18px"}, value: {fontSize: "16px", color: "#50649c"}}
            }
        },
        series: [71, 63],
        labels: ["داخلی", "بین المللی"],
        legend: {
            show: !0, position: "bottom", offsetX: -40, offsetY: -5, formatter: function (t, e) {
                return t + " - " + e.w.globals.series[e.seriesIndex] + "%"
            }
        },
        colors: ["#1ccab8", "#2a76f4"],
        stroke: {lineCap: "round", width: 2}
    }, chartCircle = new ApexCharts(document.querySelector("#circlechart"), optionsCircle),
    iteration = (chartCircle.render(), 11);

function getRandom() {
    var t = iteration;
    return (Math.sin(t / trigoStrength) * (t / trigoStrength) + t / trigoStrength + 1) * (2 * trigoStrength)
}

function getRangeRandom(t) {
    return Math.floor(Math.random() * (t.max - t.min + 1)) + t.min
}

window.setInterval(function () {
    iteration++, chartCircle.updateSeries([getRangeRandom({min: 10, max: 100}), getRangeRandom({min: 10, max: 100})])
}, 3e3);