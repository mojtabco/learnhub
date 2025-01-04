!function () {
    var t = {
        id: "welcome_tour",
        steps: [{
            title: "سوالات متداول",
            content: "سوالی دارید؟",
            target: "#tourFaq",
            placement: "top"
        }, {
            title: "کارت رنگی",
            content: "این کارت های رنگی است.",
            target: document.querySelector("#bg_colorCard"),
            placement: "bottom"
        }],
        showPrevButton: !0,
        scrollTopMargin: 100
    };
    hopscotch.startTour(t)
}();