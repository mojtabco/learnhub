function body() {
    this.myFunction();
    document.getElementById("body")
}

function myFunction() {
    const c = document.querySelector("#animate-me");
    document.querySelectorAll("[data-test]").forEach(t => {
        t.addEventListener("click", t => {
            t = t.target.dataset.test;
            c.classList.add("magictime", t)
        }), t.addEventListener("click", e => {
            setTimeout(function () {
                var t = e.target.dataset.test;
                c.classList.remove("magictime", t)
            }, 1e3)
        })
    })
}