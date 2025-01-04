const dataTable = new simpleDatatables.DataTable("#datatable_1", {searchable: !0, fixedHeight: !1}),
    dataTable_2 = new simpleDatatables.DataTable("#datatable_2");
document.querySelector("button.csv").addEventListener("click", () => {
    dataTable_2.export({type: "csv", download: !0, lineDelimiter: "\n\n", columnDelimiter: ";"})
}), document.querySelector("button.sql").addEventListener("click", () => {
    dataTable_2.export({type: "sql", download: !0, tableName: "export_table"})
}), document.querySelector("button.txt").addEventListener("click", () => {
    dataTable_2.export({type: "txt", download: !0})
}), document.querySelector("button.json").addEventListener("click", () => {
    dataTable_2.export({type: "json", download: !0, escapeHTML: !0, space: 3})
});