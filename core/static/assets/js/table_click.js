
// بررسی اینکه آیا صفحه شامل جدولی است
function hasTable() {
    return document.body.querySelector('table') !== null;
}

// بررسی اینکه آیا صفحه شامل یک ردیف با کلاس "clickable-row" است
function hasClickableRow() {
    return document.body.querySelector('tr.clickable-row') !== null;
}

// بررسی اینکه آیا هر دو شرط قبلی برقرار است
function isTargetPage() {
    return hasTable() && hasClickableRow();
}

// اگر صفحه هدف است، اجرا کن کد اصلی
if (isTargetPage()) {
    document.addEventListener('DOMContentLoaded', function() {
        const tableRows = document.querySelectorAll('tr.clickable-row');

        tableRows.forEach(row => {
            row.style.cursor = 'pointer';

            // خواندن data-link از ردیف
            const link = row.dataset.link;

            // انتخاب همه tdها در ردیف
            const tds = row.querySelectorAll('td');

            tds.forEach(td => {
                td.addEventListener('click', function(e) {
                    e.stopPropagation();
                    window.location.href = link;
                });
            });
        });
    });
}
