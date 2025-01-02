document.querySelector('button[value="OkayUpdate"]').addEventListener("click", function (event) {
    const fileInput = document.querySelector('[name="lesson_content"]');
    const fileInput_thumbnail = document.querySelector('[name="thumbnail"]');
    const errorMessage = document.getElementById("error-message");
    const progressBar = document.querySelector(".progress-bar");

    errorMessage.style.display = "none";

    if (fileInput.files.length !== 0) {
        const allowedExtensions = ['mp3', 'mp4','mpg'];
        const maxFileSize = 250 * 1024 * 1024; // حداکثر حجم ۲۵۰ مگابایت

        // بررسی فایل lesson_content
        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            const fileExtension = file.name.split('.').pop().toLowerCase();

            if (!allowedExtensions.includes(fileExtension)) {
                errorMessage.textContent = "فرمت فایل درس معتبر نیست. فقط فایل‌های mp3,mp4,mpg مجازند.";
                errorMessage.style.display = "block";
                event.preventDefault();
                return;
            }

            if (file.size > maxFileSize) {
                errorMessage.textContent = "  حجم فایل بیشتر از 250 مگابایت است!";
                errorMessage.style.display = "block";
                event.preventDefault();
                return;
            }
        }
    }

    if (fileInput_thumbnail.files.length !== 0) {
        const allowedExtensions_thumbnail = ['jpg', 'gif','png'];
        const maxFileSize_thumbnail = 512 * 1024;

        if (fileInput_thumbnail.files.length > 0) {
            const file_thumbnail = fileInput_thumbnail.files[0];
            const fileExtension_thumbnail = file_thumbnail.name.split('.').pop().toLowerCase();

            if (!allowedExtensions_thumbnail.includes(fileExtension_thumbnail)) {
                errorMessage.textContent = "فرمت عکس معتبر نیست. فقط فایل‌های jpg,gif,png مجازند.";
                errorMessage.style.display = "block";
                event.preventDefault();
                return;
            }

            if (file_thumbnail.size > maxFileSize_thumbnail) {
                errorMessage.textContent = "  حجم عکس بیشتر از 512 کیلوبایت است!";
                errorMessage.style.display = "block";
                event.preventDefault();
                return;
            }
        }
    }

    // در صورت تایید همه شرایط
    errorMessage.style.display = "none";
    let progress = 0;

    const interval = setInterval(() => {
        progress += 5;
        this.disabled = true;

        progressBar.style.width = `${progress}%`;
        progressBar.setAttribute("aria-valuenow", progress);
        progressBar.textContent = `${progress}%`;

        if (progress >= 100) {
            clearInterval(interval);
            progressBar.textContent = "آپلود کامل شد";
        }
    }, 250);
});
