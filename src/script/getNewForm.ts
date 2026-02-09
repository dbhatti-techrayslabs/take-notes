const add_note = document.querySelector("#add-note") as HTMLAnchorElement;
const note_preview_content = document.querySelector("#note-preview-content") as HTMLDivElement;
const form = document.querySelector("form") as ( HTMLFormElement ) || null;
const note_container = document.querySelector("#note-container") as HTMLDivElement;




form.addEventListener("submit", (e) => {
    e.preventDefault();
    

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);  // real object

    localStorage.setItem(`${data.title}`,JSON.stringify(`${data.description}`));

    window.location.href = `${window.location.origin}/index.html`;
})
