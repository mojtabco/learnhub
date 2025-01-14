var slider = document.getElementById("slider"), hidingTooltipSlider = (noUiSlider.create(slider, {
        start: [5],
        step: 1,
        range: {min: [0], max: [10]}
    }), slider.noUiSlider.on("hover", function (e) {
        console.log(e)
    }), document.getElementById("slider_2")), range = (noUiSlider.create(hidingTooltipSlider, {
        start: [20, 80],
        connect: !0,
        range: {min: 0, max: 100},
        tooltips: !0
    }), document.getElementById("range")), valuesDivs = (noUiSlider.create(range, {
        range: {min: 1300, max: 3250},
        step: 150,
        start: [1450, 2050, 2350, 3e3],
        margin: 300,
        limit: 600,
        connect: !0,
        direction: "rtl",
        orientation: "vertical",
        behaviour: "tap-drag",
        tooltips: !0,
        format: wNumb({decimals: 0}),
        pips: {mode: "steps", stepped: !0, density: 4}
    }), range.style.height = "400px", range.style.margin = "0 auto 30px", [document.getElementById("range-value-1"), document.getElementById("range-value-2"), document.getElementById("range-value-3"), document.getElementById("range-value-4")]),
    diffDivs = [document.getElementById("range-diff-1"), document.getElementById("range-diff-2"), document.getElementById("range-diff-3")];

function timestamp(e) {
    return new Date(e).getTime()
}

range.noUiSlider.on("update", function (e, t) {
    valuesDivs[t].innerHTML = e[t], diffDivs[0].innerHTML = e[1] - e[0], diffDivs[1].innerHTML = e[2] - e[1], diffDivs[2].innerHTML = e[3] - e[2]
});
var weekdays = ["شنبه", "1شنبه", "2شنبه", "3شنبه", "4شنبه", "5شنبه", "جمعه"],
    months = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];

function nth(e) {
    if (3 < e && e < 21) return "th";
    switch (e % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th"
    }
}

function formatDate(e) {
    return weekdays[e.getDay()] + ", " + e.getDate() + nth(e.getDate()) + " " + months[e.getMonth()] + " " + e.getFullYear()
}

for (var dateSlider = document.getElementById("slider-date"), dateValues = (noUiSlider.create(dateSlider, {
    range: {
        min: timestamp("1388"),
        max: timestamp("1393")
    }, step: 6048e5, start: [timestamp("1389"), timestamp("1392")], format: wNumb({decimals: 0})
}), [document.getElementById("event-start"), document.getElementById("event-end")]), select = (dateSlider.noUiSlider.on("update", function (e, t) {
    dateValues[t].innerHTML = formatDate(new Date(+e[t]))
}), document.getElementById("input-select")), i = -20; i <= 40; i++) {
    var option = document.createElement("option");
    option.text = i, option.value = i, select.appendChild(option)
}
var html5Slider = document.getElementById("html5"), inputNumber = (noUiSlider.create(html5Slider, {
        start: [10, 30],
        connect: !0,
        range: {min: -20, max: 40}
    }), document.getElementById("input-number")), skipSlider = (html5Slider.noUiSlider.on("update", function (e, t) {
        e = e[t];
        t ? inputNumber.value = e : select.value = Math.round(e)
    }), select.addEventListener("change", function () {
        html5Slider.noUiSlider.set([this.value, null])
    }), inputNumber.addEventListener("change", function () {
        html5Slider.noUiSlider.set([null, this.value])
    }), document.getElementById("skipstep")), skipValues = (noUiSlider.create(skipSlider, {
        range: {
            min: 0,
            "10%": 10,
            "20%": 20,
            "30%": 30,
            "50%": 50,
            "60%": 60,
            "70%": 70,
            "90%": 90,
            max: 100
        }, snap: !0, start: [20, 90]
    }), [document.getElementById("skip-value-lower"), document.getElementById("skip-value-upper")]),
    pipsSlider = (skipSlider.noUiSlider.on("update", function (e, t) {
        skipValues[t].innerHTML = e[t]
    }), document.getElementById("slider-pips")), pips = (noUiSlider.create(pipsSlider, {
        range: {min: 0, max: 100},
        start: [50],
        pips: {mode: "count", values: 5}
    }), pipsSlider.querySelectorAll(".noUi-value"));

function clickOnPip() {
    var e = Number(this.getAttribute("data-value"));
    pipsSlider.noUiSlider.set(e)
}

for (i = 0; i < pips.length; i++) pips[i].style.cursor = "pointer", pips[i].addEventListener("click", clickOnPip);
var softSlider = document.getElementById("soft");
noUiSlider.create(softSlider, {
    start: 50,
    range: {min: 0, max: 100},
    pips: {mode: "values", values: [20, 80], density: 4},
    tooltips: !0
}), softSlider.noUiSlider.on("change", function (e, t) {
    e[t] < 20 ? softSlider.noUiSlider.set(20) : 80 < e[t] && softSlider.noUiSlider.set(80)
});