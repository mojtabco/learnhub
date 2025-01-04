document.querySelector('button[value="OkayUpdate"]').addEventListener("click", function (event) {
    const title = document.querySelector('[name="title"]');
    const subcategory = document.querySelector('[name="subcategory"]');
    const fileInput_thumbnail = document.querySelector('[name="thumbnail"]');
    const errorMessage = document.getElementById("error-message");


    errorMessage.style.display = "none";

    if (title.value.trim().length === 0) {
        errorMessage.textContent = "وارد کردن عنوان برای دوره ضروری است";
        errorMessage.style.display = "block";
        event.preventDefault();
        return;
    }
    if (subcategory.value.trim().length === 0) {
        errorMessage.textContent = " انتخاب دسته بندی برای دوره ضروری است";
        errorMessage.style.display = "block";
        event.preventDefault();
        return;
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

    errorMessage.style.display = "none";

});