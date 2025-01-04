!function () {
    "use strict";
    var e = document.querySelectorAll(".needs-validation"), e = (Array.prototype.slice.call(e).forEach(function (t) {
        t.addEventListener("submit", function (e) {
            t.checkValidity() || (e.preventDefault(), e.stopPropagation()), t.classList.add("was-validated")
        }, !1)
    }), document.getElementById("form-validation-2"));
    const s = document.getElementById("username"), a = document.getElementById("email"),
        n = document.getElementById("password"), r = document.getElementById("password2");

    function l(e, t) {
        e = e.parentElement, console.log(e.children), e.children[1].classList.add("error"), e = e.querySelector("small");
        e.innerText = t, e.classList.add("error"), e.classList.remove("success")
    }

    function c(e) {
        e = e.parentElement, e.children[1].classList.remove("error"), e.children[1].classList.add("success"), e = e.querySelector("small");
        e.classList.add("success"), e.classList.remove("error")
    }

    function i(e, t, s) {
        e.value.length < t ? l(e, o(e) + ` must be at least ${t} characters`) : e.value.length > s ? l(e, o(e) + ` must be les than ${s} characters`) : c(e)
    }

    function o(e) {
        return e.id.charAt(0).toUpperCase() + e.id.slice(1)
    }

    e.addEventListener("submit", function (e) {
        var t;
        e.preventDefault(), [s, a, n, r].forEach(function (e) {
            "" === e.value.trim() ? l(e, o(e) + " is required") : c(e)
        }), i(s, 3, 15), i(n, 6, 25), e = a, /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.value.trim()) ? c(e) : l(e, "Email is not invalid"), e = n, t = r, e.value !== t.value && l(t, "Passwords do not match")
    })
}();