function executeExample(e) {
    switch (e) {
        case"basicMessage":
            return void Swal.fire("هر کسی می تواند از کامپیوتر استفاده کند.");
        case"titleText":
            return void Swal.fire("اینترنت؟", "آن چیز هنوز در اطراف است؟", "سوال");
        case"errorType":
            return void Swal.fire({
                icon: "error",
                title: "اوه...",
                text: "مشکلی پیش آمد!",
                footer: "<a href>چرا این مشکل را دارم؟</a>"
            });
        case"customHtml":
            return void Swal.fire({
                title: "<strong>مثال <u>HTML</u></strong>",
                icon: "info",
                html:  'شما می توانید از <b>متن پررنگ</b>, <a href="//sweetalert2.github.io">لینک</a> و سایر تگ های HTML استفاده کنید.',
                showCloseButton: !0,
                showCancelButton: !0,
                focusConfirm: !1,
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> عالی!',
                confirmButtonAriaLabel: "Thumbs up, great!",
                cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
                cancelButtonAriaLabel: "Thumbs down"
            });
        case"threeButtons":
            return void Swal.fire({
                title: "آیا می‌خواهید تغییرات را ذخیره کنید؟",
                showDenyButton: !0,
                showCancelButton: !0,
                confirmButtonText: "ذخیره",
                denyButtonText: "لغو"
            }).then(e => {
                e.isConfirmed ? Swal.fire("ذخیره شد!", "", "موفقیت") : e.isDenied && Swal.fire("تغییرات ذخیره نشده‌اند", "", "اطلاعات")
            });
        case"customPosition":
            return void Swal.fire({
                position: "top-end",
                icon: "success",
                title: "کار شما ذخیره شده است.",
                showConfirmButton: !1,
                timer: 1500
            });
        case"customAnimation":
            return void Swal.fire({
                title: "انیمیشن سفارشی با Animate.css",
                showClass: {popup: "animate__animated animate__fadeInDown"},
                hideClass: {popup: "animate__animated animate__fadeOutUp"}
            });
        case"warningConfirm":
            return void Swal.fire({
                title: "آیا شما مطمئن هستید؟",
                text: "شما قادر به بازگشت این عمل نخواهید بود!",
                icon: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "بله, حذف کنید!"
            }).then(function (e) {
                e.isConfirmed && Swal.fire("حذف شد!", "فایل شما حذف شده است.", "موفقیت")
            });
        case"handleDismiss":
            const i = Swal.mixin({
                customClass: {confirmButton: "btn btn-success", cancelButton: "btn btn-danger me-2"},
                buttonsStyling: !1
            });
            return void i.fire({
                title: "آیا شما مطمئن هستید؟",
                text: "شما قادر به بازگشت این عمل نخواهید بود!",
                icon: "warning",
                showCancelButton: !0,
                confirmButtonText: "بله، حذف کنید!",
                cancelButtonText: "نه، لغو کنید!",
                reverseButtons: !0
            }).then(e => {
                e.isConfirmed ? i.fire("حذف شد!", "فایل شما حذف شده است.", "موفقیت") : e.dismiss === Swal.DismissReason.cancel && i.fire("لغو شد", "فایل خیالی شما ایمن است :)", "خطا")
            });
        case"customImage":
            return void Swal.fire({
                title: "متریکا!",
                text: "مودال با لوگوی برند.",
                imageUrl: "assets/images/logo-sm.png",
                imageWidth: 80,
                imageHeight: 80,
                imageAlt: "Custom image"
            });
        case"customWidth":
            return void Swal.fire({
                title: "عرض سفارشی, حاشیه, پس زمینه.",
                width: 600,
                padding: 50,
                background: "rgba(254,254,254,1) url(assets/images/pattern.png)"
            });
        case"timer":
            let t;
            return void Swal.fire({
                title: "هشدار خودکار بسته شود!",
                html: "I will close in <b></b> milliseconds.",
                timer: 2e3,
                timerProgressBar: !0,
                didOpen: () => {
                    Swal.showLoading();
                    const e = Swal.getHtmlContainer().querySelector("b");
                    t = setInterval(() => {
                        e.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(t)
                }
            }).then(e => {
                e.dismiss === Swal.DismissReason.timer && console.log("توسط تایمر بسته شد.")
            });
        case"rtl":
            return void Swal.fire({
                title: "می خواهید ادامه دهید؟",
                icon: "question",
                iconHtml: "؟",
                confirmButtonText: "بله",
                cancelButtonText: "خیر",
                showCancelButton: !0,
                showCloseButton: !0
            });
        case"ajaxRequest":
            return void Swal.fire({
                title: "نام کاربری Github خود را ارسال کنید.",
                input: "text",
                inputAttributes: {autocapitalize: "off"},
                showCancelButton: !0,
                confirmButtonText: "جستجو",
                showLoaderOnConfirm: !0,
                preConfirm: e => fetch("//api.github.com/users/" + e).then(e => {
                    if (e.ok) return e.json();
                    throw new Error(e.statusText)
                }).catch(e => {
                    Swal.showValidationMessage("Request failed: " + e)
                }),
                allowOutsideClick: () => !Swal.isLoading()
            }).then(e => {
                e.isConfirmed && Swal.fire({title: e.value.login + "'s avatar", imageUrl: e.value.avatar_url})
            });
        case"chainingModals":
            return void Swal.mixin({
                input: "text",
                confirmButtonText: "Next &rarr;",
                showCancelButton: !0,
                progressSteps: ["1", "2", "3"]
            }).queue([{
                title: "سوال  1",
                text: "زنجیره‌سازی مودال‌های swal2 آسان است."
            }, "Question 2", "Question 3"]).then(e => {
                e.value && (e = JSON.stringify(e.value), Swal.fire({
                    title: "All done!", html: `
                  Your answers:
                  <pre><code>${e}</code></pre>
                `, confirmButtonText: "Lovely!"
                }))
            });
        case"dynamicQueue":
            return void Swal.queue([{
                title: "IP عمومی شما",
                confirmButtonText: "نشان دادن IP عمومی من",
                text: "Your public IP will be received via AJAX request",
                showLoaderOnConfirm: !0,
                preConfirm: () => fetch("//api.ipify.org?format=json").then(e => e.json()).then(e => Swal.insertQueueStep(e.ip)).catch(() => {
                    Swal.insertQueueStep({icon: "error", title: "دریافت IP عمومی شما ممکن نیست"})
                })
            }]);
        case"mixin":
            return void Swal.mixin({
                toast: !0,
                position: "top-end",
                showConfirmButton: !1,
                timer: 3e3,
                timerProgressBar: !0,
                didOpen: e => {
                    e.addEventListener("mouseenter", Swal.stopTimer), e.addEventListener("mouseleave", Swal.resumeTimer)
                }
            }).fire({icon: "success", title: "با موفقیت وارد شده اید."});
        case"declarativeTemplate":
            return void Swal.fire({template: "#my-template"});
        case"TriggerModalToast":
            return Swal.bindClickHandler(), void Swal.mixin({toast: !0}).bindClickHandler("data-swal-toast-template");
        case"success":
            return void Swal.fire({icon: "success", title: "کار شما ذخیره شده است.", timer: 1500});
        case"error":
            return void Swal.fire({icon: "error", title: "اوه...", text: "مشکلی پیش آمد!"});
        case"warning":
            return void Swal.fire({icon: "warning", title: "اوه...", text: "آیکون هشدار!"});
        case"info":
            return void Swal.fire({icon: "info", title: "اوه...", text: "آیکون اطلاعات!"});
        case"question":
            return void Swal.fire({icon: "question", title: "اوه...", text: "آیکون سوال!"})
    }
}