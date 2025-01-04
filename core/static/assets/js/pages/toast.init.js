var toastElList = [].slice.call(document.querySelectorAll(".toast")), toastList = toastElList.map(function (t) {
    new bootstrap.Toast(t, {autohide: !1}).show()
}), toastPlacement = document.getElementById("toastPlacement");
toastPlacement && document.getElementById("selectToastPlacement").addEventListener("change", function () {
    toastPlacement.dataset.originalClass || (toastPlacement.dataset.originalClass = toastPlacement.className), toastPlacement.className = toastPlacement.dataset.originalClass + " " + this.value
});