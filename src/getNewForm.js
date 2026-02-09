var add_note = document.querySelector("#add-note");
var note_preview_content = document.querySelector("#note-preview-content");
var form = document.querySelector("form") || null;
var note_container = document.querySelector("#note-container");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var formData = new FormData(form);
    var data = Object.fromEntries(formData); // real object
    localStorage.setItem("".concat(data.title), JSON.stringify("".concat(data.description)));
    window.location.href = "".concat(window.location.origin, "/index.html");
});
