var tabledata = [{
        id: 1,
        name: "باربد جوان",
        progress: 12,
        gender: "آقا",
        rating: 1,
        col: "قرمز",
        dob: "1362/02/19",
        car: 1
    }, {id: 2, name: "مریم مهدوی", progress: 1, gender: "خانم", rating: 2, col: "آبی", dob: "1362/04/14", car: !0}, {
        id: 3,
        name: "کریستینا لالوی",
        progress: 42,
        gender: "خانم",
        rating: 0,
        col: "سبز",
        dob: "1360/05/22",
        car: "true"
    }, {id: 4, name: "فلیپس بهرامی", progress: 100, gender: "آقا", rating: 1, col: "نارنجی", dob: "1358/04/19"}, {
        id: 5,
        name: "مارگارد مهدوی",
        progress: 16,
        gender: "خانم",
        rating: 5,
        col: "زرد",
        dob: "1377/01/31"
    }, {
        id: 6,
        name: "فرید تقوی",
        progress: 38,
        gender: "آقا",
        rating: 4,
        col: "قرمز",
        dob: "1344/05/12",
        car: 1
    },
        {id: 1, name: "باربد جوان",
    progress: 12,
    gender: "آقا",
    rating: 1,
    col: "قرمز",
    dob: "1362/02/19", car: 1},
    {id: 2, name: "مریم مهدوی", progress: 1, gender: "خانم", rating: 2, col: "آبی", dob: "1362/04/14", car: !0}, {
        id: 3,
        name: "کریستینا لالوی",
        progress: 42,
        gender: "خانم",
        rating: 0,
        col: "سبز",
        dob: "1360/05/22",
        car: "true"
    }, {id: 4, name: "فلیپس بهرامی", progress: 100, gender: "آقا", rating: 1, col: "نارنجی", dob: "1358/04/19"}, {
        id: 5,
        name: "مارگارد مهدوی",
        progress: 16,
        gender: "خانم",
        rating: 5,
        col: "زرد",
        dob: "1377/01/31"
    }, {id: 6, name: "فرید بهرامی", progress: 38, gender: "آقا", rating: 4, col: "قرمز", dob: "1344/05/31", car: 1}],
    dateEditor = function (e, t, r, a) {
        var n = moment(e.getValue(), "DD/MM/YYYY").format("YYYY-MM-DD"), o = document.createElement("input");

        function i() {
            o.value != n ? r(moment(o.value, "YYYY-MM-DD").format("DD/MM/YYYY")) : a()
        }

        return o.setAttribute("type", "date"), o.style.padding = "4px", o.style.width = "100%", o.style.boxSizing = "border-box", o.value = n, t(function () {
            o.focus(), o.style.height = "100%"
        }), o.addEventListener("blur", i), o.addEventListener("keydown", function (e) {
            13 == e.keyCode && i(), 27 == e.keyCode && a()
        }), o
    }, table = new Tabulator("#editable", {
        height: "310px",
        layout: "fitColumns",
        reactiveData: !0,
        data: tabledata,
        columns: [{title: "نام", field: "name", width: 150, editor: "input"}, {
            title: "موقعیت",
            field: "location",
            width: 130,
            editor: "autocomplete",
            editorParams: {allowEmpty: !0, showListOnEmpty: !0, values: !0}
        }, {
            title: "پیشرفت",
            field: "progress",
            sorter: "number",
            hozAlign: "right",
            formatter: "progress",
            width: 140,
            editor: !0
        }, {
            title: "جنسیت",
            field: "gender",
            editor: "select",
            editorParams: {values: {male: "آقا", female: "خانم", unknown: "نامشخص"}}
        }, {
            title: "امتیازدهی",
            field: "rating",
            formatter: "star",
            hozAlign: "center",
            width: 100,
            editor: !0
        }, {
            title: "تاریخ تولد",
            field: "dob",
            hozAlign: "center",
            sorter: "date",
            width: 140,
            editor: dateEditor
        }, {title: "راننده", field: "car", hozAlign: "center", editor: !0, formatter: "tickCross"}]
    });
document.getElementById("reactivity-add").addEventListener("click", function () {
    tabledata.push({name: "IM A NEW ROW", progress: 100, gender: "male"})
}), document.getElementById("reactivity-delete").addEventListener("click", function () {
    tabledata.pop()
}), document.getElementById("reactivity-update").addEventListener("click", function () {
    tabledata[0].name = "IVE BEEN UPDATED"
});