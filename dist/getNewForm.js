"use strict";
const note_preview_content = document.querySelector("#note-preview-content");
const form = document.querySelector("form") || null;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData); // real object
    localStorage.setItem(`${data.title}`, JSON.stringify(`${data.description}`));
    window.location.href = `${window.location.origin}/index.html`;
});
