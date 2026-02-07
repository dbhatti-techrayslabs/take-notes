const add_note = document.querySelector("#add-note");
const note_preview_content = document.querySelector("#note-preview-content");
const form = document.querySelector("form");
import fs from 'fs';




form.addEventListener("submit", (e) => {
    e.preventDefault();

    // console.log(e.target)

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const parsed = JSON.stringify(data)


    fs.writeFile("./notes.json", parsed, function (err, result) {
        if (err) {
            console.log('error', err);
            return;
        };
    });

    // let  title = data.
})
