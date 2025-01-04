var options = {
    chart: {height: 375, type: "line", toolbar: {show: !1}},
    stroke: {width: 3, curve: "smooth"},
    series: [{name: "لایک ها", data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]}],
    xaxis: {
        type: "datetime",
        categories: ["1/11/2000", "2/11/2000", "3/11/2000", "4/11/2000", "5/11/2000", "6/11/2000", "7/11/2000", "8/11/2000", "9/11/2000", "10/11/2000", "11/11/2000", "12/11/2000", "1/11/2001", "2/11/2001", "3/11/2001", "4/11/2001", "5/11/2001", "6/11/2001"],
        axisBorder: {show: !0, color: "#bec7e0"},
        axisTicks: {show: !0, color: "#bec7e0"}
    },
    colors: ["#5766da"],
    markers: {
        size: 3,
        opacity: .9,
        colors: ["#fdb5c8"],
        strokeColors: "#fff",
        strokeWidth: 1,
        style: "inverted",
        hover: {size: 5}
    },
    yaxis: {min: -10, max: 40,
        title: {
        text: "مشارکت",
        offsetX:-30,
        }},
    grid: {row: {colors: ["transparent", "transparent"], opacity: .2}, strokeDashArray: 3.5},
    responsive: [{breakpoint: 600, options: {chart: {toolbar: {show: !1}}, legend: {show: !1}}}]
}, chart = new ApexCharts(document.querySelector("#apex_line1"), options), options5 = {
    series: [{
        name: "بازدیدکنندگان جدید",
        data: [68, 44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {name: "بازدیدکنندگان یکتا", data: [51, 76, 85, 101, 98, 87, 105, 91, 114, 94]}],
    chart: {type: "bar", width: 200, height: 35, sparkline: {enabled: !0}},
    colors: ["#4d79f6", "#e0e7fd"],
    plotOptions: {bar: {columnWidth: "50%"}},
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {crosshairs: {width: 2}},
    tooltip: {
        fixed: {enabled: !1}, x: {show: !1}, y: {
            title: {
                formatter: function (e) {
                    return ""
                }
            }
        }, marker: {show: !1}
    }
}, chart5 = new ApexCharts(document.querySelector("#bar-1"), options5), options7 = {
    series: [45],
    chart: {type: "radialBar", width: 50, height: 50, sparkline: {enabled: !0}},
    dataLabels: {enabled: !1},
    plotOptions: {radialBar: {hollow: {margin: 0, size: "50%"}, track: {margin: 0}, dataLabels: {show: !1}}}
}, chart7 = new ApexCharts(document.querySelector("#radialBar-1"), options7), options1 = {
    series: [{data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]}],
    chart: {type: "line", width: 200, height: 35, sparkline: {enabled: !0}},
    stroke: {show: !0, curve: "smooth", width: [2], lineCap: "round"},
    tooltip: {
        fixed: {enabled: !1}, x: {show: !1}, y: {
            title: {
                formatter: function (e) {
                    return ""
                }
            }
        }, marker: {show: !1}
    }
}, chart1 = new ApexCharts(document.querySelector("#line-1"), options1), tabledata = [{
    id: 1,
    image: "<img alt='' style='width: 30px; height: 30px' class='rounded' src='assets/images/users/user-1.jpg'>",
    name: "باربد جهانی",
    progress: 12,
    gender: "آقا",
    rating: 1,
    col: "قرمز",
    dob: "1362/02/19",
    car: 1
}, {
    id: 2,
    image: "<img alt='' style='width: 30px; height: 30px' class='rounded' src='assets/images/users/user-2.jpg'>",
    name: "مریم مهدوی",
    progress: 1,
    gender: "خانم",
    rating: 2,
    col: "آبی",
    dob: "1360/02/14",
    car: !0
}, {
    id: 3,
    image: "<img alt='' style='width: 30px; height: 30px' class='rounded' src='assets/images/users/user-3.jpg'>",
    name: "کریستینا لالوی",
    progress: 42,
    gender: "خانم",
    rating: 0,
    col: "سبز",
    dob: "1360/05/22",
    car: "true"
}, {
    id: 4,
    image: "<img alt='' style='width: 30px; height: 30px' class='rounded' src='assets/images/users/user-4.jpg'>",
    name: "فیلیپس بهرامی",
    progress: 100,
    gender: "آقا",
    rating: 1,
    col: "نارنجی",
    dob: "1358/01/08"
}, {
    id: 5,
    image: "<img alt='' style='width: 30px; height: 30px' class='rounded' src='assets/images/users/user-5.jpg'>",
    name: "مارگارد مجنونی",
    progress: 16,
    gender: "خانم",
    rating: 5,
    col: "زرد",
    dob: "1377/05/31"
}, {
    id: 6,
    image: "<img alt='' style='width: 30px; height: 30px' class='rounded' src='assets/images/users/user-6.jpg'>",
    name: "فرید حیدری",
    progress: 38,
    gender: "آقا",
    rating: 4,
    col: "قرمز",
    dob: "1355/05/12",
    car: 1
}, {
    id: 1,
    image: "<img alt='' style='width: 30px; height: 30px' class='rounded' src='assets/images/users/user-7.jpg'>",
    name: "باربد جوان",
    progress: 12,
    gender: "آقا",
    rating: 1,
    col: "قرمز",
    dob: "1362/04/19",
    car: 1
}, {
    id: 2,
    image: "<img alt='' style='width: 30px; height: 30px' class='rounded' src='assets/images/users/user-8.jpg'>",
    name: "مریم مهدوی",
    progress: 1,
    gender: "خانم",
    rating: 2,
    col: "آبی",
    dob: "1360/03/14",
    car: !0
}, {
    id: 3,
    image: "<img alt='' style='width: 30px; height: 30px' class='rounded' src='assets/images/users/user-9.jpg'>",
    name: "کریستینا لالوی",
    progress: 42,
    gender: "خانم",
    rating: 0,
    col: "سبز",
    dob: "1360/05/22",
    car: "true"
}, {
    id: 4,
    image: "<img alt='' style='width: 30px; height: 30px' class='rounded' src='assets/images/users/user-10.jpg'>",
    name: "فلیپس آقایی",
    progress: 100,
    gender: "آقا",
    rating: 1,
    col: "نارنجی",
    dob: "1358/01/08"
}, {
    id: 5,
    image: "<img alt='' style='width: 30px; height: 30px' class='rounded' src='assets/images/users/user-2.jpg'>",
    name: "مارگارد مجنونی",
    progress: 16,
    gender: "خانم",
    rating: 5,
    col: "زرد",
    dob: "1377/01/31"
}, {
    id: 6,
    image: "<img alt='' style='width: 30px; height: 30px' class='rounded' src='assets/images/users/user-4.jpg'>",
    name: "فرید حیدری",
    progress: 38,
    gender: "آقا",
    rating: 4,
    col: "قرمز",
    dob: "1344/05/13",
    car: 1
}], table = new Tabulator("#datatable-1", {
    data: tabledata,
    layout: "fitColumns",
    responsiveLayout: "collapse",
    tooltips: !0,
    addRowPos: "top",
    history: !0,
    pagination: "local",
    paginationSize: 10,
    movableColumns: !0,
    resizableRows: !0,
    initialSort: [{column: "name", dir: "asc"}],
    columns: [{title: "User", field: "image", formatter: "html", width: 70}, {
        title: "نام",
        field: "name",
        editor: "input"
    }, {
        title: "میزان پیشرفت",
        field: "progress",
        hozAlign: "right",
        formatter: "progress",
        editor: !0
    }, {
        title: "جنسیت",
        field: "gender",
        width: 95,
        editor: "select",
        editorParams: {values: ["آقا", "خانم"]}
    }, {
        title: "امتیازدهی",
        field: "rating",
        formatter: "star",
        hozAlign: "center",
        width: 100,
        editor: !0
    }, {title: "رنگ", field: "col", width: 130, editor: "input"}, {
        title: "تاریخ تولد",
        field: "dob",
        width: 130,
        sorter: "date",
        hozAlign: "center"
    }, {
        title: "راننده",
        field: "car",
        width: 90,
        hozAlign: "center",
        formatter: "tickCross",
        sorter: "boolean",
        editor: !0
    }]
});
window.addEventListener("DOMContentLoaded", e => {
    chart.render(), chart1.render(), chart7.render(), chart5.render()
});