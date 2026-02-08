const add_note = document.querySelector("#add-note");
const note_preview_content = document.querySelector("#note-preview-content");
const form = document.querySelector("form");
const note_container = document.querySelector("#note-container");




form.addEventListener("submit", (e) => {
    e.preventDefault();

    // console.log(e.target)

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);  // real object


    localStorage.setItem(`${data.title}`,JSON.stringify(`${data.description}`));


    window.location.href = `${window.location.origin}/index.html`;


})
