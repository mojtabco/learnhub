const handleChange = function () {
    var e = document.querySelector("#input-file").files;
    0 !== e.length && (e = e[0], readFile(e))
}, readFile = function (e) {
    if (e) {
        const n = new FileReader;
        n.onload = function () {
            document.querySelector(".preview-box").innerHTML = `<img class="preview-content" src=${n.result} />`
        }, n.readAsDataURL(e)
    }
};
var uppy = new Uppy.Uppy;
uppy.use(Uppy.DragDrop, {target: "#drag-drop-area"}), uppy.use(Uppy.Tus, {endpoint: "https://google.com"});