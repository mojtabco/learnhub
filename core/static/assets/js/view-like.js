document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".like-href").forEach(function (likeLink) {
        likeLink.addEventListener("click", function (event) {
            event.preventDefault();

            const likeButton = this.querySelector("button");
            const likeIcon = likeButton.querySelector("i");
            const likeCountSpan = likeButton.querySelector(".like-count");
            const url = this.getAttribute("data-href-template");
            const csrfToken = this.querySelector("input[name='csrfmiddlewaretoken']").value;

            fetch(url, {
                method: "POST",
                headers: {
                    "X-CSRFToken": csrfToken,
                    "Content-Type": "application/json",
                },
            })
                .then(response => response.json())
                .then(data => {
                    likeCountSpan.textContent = data.total_likes > 0 ? data.total_likes : "";
                    if (data.status === "liked") {
                        likeButton.classList.remove("btn-de-blue");
                        likeButton.classList.add("btn-blue");
                        likeIcon.setAttribute("data-feather", "thumbs-up");
                    } else {
                        likeButton.classList.remove("btn-blue");
                        likeButton.classList.add("btn-de-blue");
                        likeIcon.setAttribute("data-feather", "thumbs-up");
                    }

                    feather.replace();
                })
                .catch(error => console.error("Error:", error));
        });
    });

    document.querySelectorAll(".lesson-completed-href").forEach(function (completeLink) {
        completeLink.addEventListener("click", function (event) {
            event.preventDefault();

            const completeButton = this.querySelector("button");
            const completeIcon = completeButton.querySelector("i");
            const url = this.getAttribute("data-href-template");
            const csrfToken = document.querySelector("input[name='csrfmiddlewaretoken']").value;


            fetch(url, {
                method: "POST",
                headers: {
                    "X-CSRFToken": csrfToken,
                    "Content-Type": "application/json",
                },
            })
                .then(response => response.json())
                .then(data => {
                    if (data.completed) {
                        completeButton.classList.remove("btn-de-primary");
                        completeButton.classList.add("btn-primary");
                        completeIcon.setAttribute("data-feather", "check-square");
                    } else {
                        completeButton.classList.remove("btn-primary");
                        completeButton.classList.add("btn-de-primary");
                        completeIcon.setAttribute("data-feather", "check-square");
                    }

                    feather.replace();
                })
                .catch(error => console.error("Error:", error));
        });
    });
});