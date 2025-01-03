document.addEventListener("DOMContentLoaded", function () {
    var e = document.getElementById("calendar");
    new FullCalendar.Calendar(e, {
        defaultDate: "2022-09-12",
        timeZone: "Asia/Tehran",
        locale: "fa",
        initialView: "dayGridMonth",
        editable: !0,
        selectable: !0,
        events: [{
            title: "Business Lunch",
            start: "2022-09-03T13:00:00",
            constraint: "businessHours",
            className: "bg-soft-warning"
        }, {
            title: "Meeting",
            start: "2022-09-13T11:00:00",
            constraint: "availableForMeeting",
            className: "bg-soft-purple",
            textColor: "white"
        }, {
            title: "Conference",
            start: "2022-09-27",
            end: "2022-09-29",
            className: "bg-soft-primary"
        }, {
            title: "Conference",
            start: "2021-02-27",
            end: "2021-02-29",
            className: "bg-soft-primary"
        }, {
            groupId: "availableForMeeting",
            start: "2022-09-11T10:00:00",
            end: "2022-09-11T16:00:00",
            title: "Repeating Event",
            className: "bg-soft-purple"
        }, {
            groupId: "availableForMeeting",
            start: "2022-09-15T10:00:00",
            end: "2022-09-15T16:00:00",
            title: "holiday",
            className: "bg-soft-success"
        }, {
            groupId: "availableForMeeting",
            start: "2021-02-15T10:00:00",
            end: "2021-02-15T16:00:00",
            title: "holiday",
            className: "bg-soft-success"
        }, {start: "2022-09-06", end: "2022-09-08", overlap: !1, title: "New Event", className: "bg-soft-pink"}]
    }).render()
});