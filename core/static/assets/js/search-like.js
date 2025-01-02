document.addEventListener("DOMContentLoaded", function () {
    // Handling like functionality
    document.querySelectorAll(".like-href").forEach(function (likeLink) {
        likeLink.addEventListener("click", function (event) {
            event.preventDefault();

            const likeSection = this.closest(".like-section");
            const likeIcon = likeSection.querySelector(".like-icon");
            const likeCountElement = likeSection.querySelector(".like-count");
            const url = this.getAttribute("data-href-template");

            fetch(url, {
                method: "POST",
                headers: {
                    "X-CSRFToken": getCSRFToken(),
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(data => {
                    if (data.status === "liked") {
                        likeIcon.classList.remove("mdi-heart-outline");
                        likeIcon.classList.add("mdi-heart");
                    } else {
                        likeIcon.classList.remove("mdi-heart");
                        likeIcon.classList.add("mdi-heart-outline");
                    }
                    if (data.total_likes > 0) {
                        likeCountElement.textContent = data.total_likes;
                    } else {
                        likeCountElement.textContent = "";
                    }
                })
                .catch(error => console.error("Error:", error));
        });
    });

    // Handling tag functionality
    document.querySelectorAll(".tag-href").forEach(function (tagLink) {
        tagLink.addEventListener("click", function (event) {
            event.preventDefault();

            const tagSection = this.closest(".tag-section");
            const tagIcon = tagSection.querySelector(".tag-icon");
            const url = this.getAttribute("data-href-template");
            const csrfToken = document.querySelector("input[name='csrfmiddlewaretoken']").value;

            fetch(url, {
                method: "POST",
                headers: {
                    "X-CSRFToken": csrfToken,
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(data => {
                    if (data.status === "taged") {
                        tagIcon.classList.remove("mdi-bookmark-outline");
                        tagIcon.classList.add("mdi-bookmark");
                    } else {
                        tagIcon.classList.remove("mdi-bookmark");
                        tagIcon.classList.add("mdi-bookmark-outline");
                    }
                })
                .catch(error => console.error("Error:", error));
        });
    });
});

function getCSRFToken() {
    return document.querySelector('[name=csrfmiddlewaretoken]').value;
}

