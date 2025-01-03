var options = {
    chart: {
        height: 305,
        type: "pie",
        dropShadow: {enabled: !0, top: 4, left: 0, bottom: 0, right: 0, blur: 2, color: "#45404a2e", opacity: .35}
    },
    stroke: {show: !0, width: 2, colors: ["transparent"]},
    series: [44, 55, 41, 17, 15],
    labels: ["بسته", "باز", "اختصاص یافته", "تایید شده", "حل شده"],
    colors: ["#0abb87", "#7367f0", "#ff9f43", "#fd3c97", "#41cbd8"],
    legend: {
        show: !0,
        position: "bottom",
        horizontalAlign: "center",
        verticalAlign: "middle",
        floating: !1,
        fontSize: "14px",
        offsetX: 0,
        offsetY: 5
    },
    responsive: [{breakpoint: 600, options: {chart: {height: 240}, legend: {show: !1}}}]
}, chartData = new ApexCharts(document.querySelector("#Tickets_Data"), options), options = {
    chart: {
        height: 275,
        type: "bar",
        toolbar: {show: !1},
        dropShadow: {enabled: !0, top: 5, left: 5, bottom: 0, right: 0, blur: 5, color: "#45404a2e", opacity: .35}
    },
    plotOptions: {bar: {barHeight: "50%", distributed: !1, horizontal: !0, endingShape: "rounded"}},
    dataLabels: {enabled: !1},
    series: [{data: [40, 48, 70, 50, 80, 60, 90]}],
    colors: ["#506ee4"],
    yaxis: {axisBorder: {show: !0, color: "#bec7e0"}, axisTicks: {show: !0, color: "#bec7e0"},labels: { offsetX: -60 ,style:{textAlign:"left"} },
    },
    xaxis: {categories: ["درخواست ارتقاء", "درخواست نصب", "درخواست کد", "رفع باگ", "تولید", "وب", "بیمه"],
   },
    stroke: {show: !0, width: 1, colors: ["#fff"]},
    states: {hover: {filter: "none"}},
    grid: {borderColor: "#f1f3fa", strokeDashArray: 4}
}, chart = new ApexCharts(document.querySelector("#apex_bar1"), options);
window.addEventListener("DOMContentLoaded", e => {
    chart.render(), chartData.render()
});