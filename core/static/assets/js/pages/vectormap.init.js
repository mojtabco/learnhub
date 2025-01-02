var map = new jsVectorMap({
    map: "world",
    selector: "#map_1",
    zoomOnScroll: !1,
    zoomButtons: !1,
    selectedMarkers: [0, 2],
    markersSelectable: !0,
    markers: [{name: "فلسطین", coords: [31.9474, 35.2272]}, {
        name: "روسیه",
        coords: [61.524, 105.3188]
    }, {name: "کانادا", coords: [56.1304, -106.3468]}, {name: "گرینلند", coords: [71.7069, -42.6043]}],
    markerStyle: {initial: {fill: "#5c5cff"}, selected: {fill: "#ff5da0"}},
    labels: {markers: {render: a => a.name}}
}), map_2 = new jsVectorMap({
    map: "world",
    selector: "#map_2",
    zoomOnScroll: !1,
    zoomButtons: !1,
    markers: [{name: "گرینلند", coords: [72, -42]}, {name: "کانادا", coords: [56.1304, -106.3468]}, {
        name: "برزیل",
        coords: [-14.235, -51.9253]
    }, {name: "مصر", coords: [26.8206, 30.8025]}, {name: "روسیه", coords: [61, 105]}, {
        name: "چین",
        coords: [35.8617, 104.1954]
    }, {name: "ایالات متحده", coords: [37.0902, -95.7129]}, {
        name: "نروژ",
        coords: [60.472024, 8.468946]
    }, {name: "اوکراین", coords: [48.379433, 31.16558]}],
    lines: [{from: "کانادا", to: "مصر"}, {from: "روسیه", to: "مصر"}, {from: "گرینلند", to: "مصر"}, {
        from: "برزیل",
        to: "مصر"
    }, {from: "ایالات متحده", to: "مصر"}, {from: "چین", to: "مصر"}, {from: "نروژ", to: "مصر"}, {
        from: "اکراین",
        to: "مصر"
    }],
    labels: {markers: {render: a => a.name}},
    lineStyle: {animation: !0, strokeDasharray: "6 3 6"}
});