const add_note = document.querySelector("#add-note");
const note_preview_content = document.querySelector("#note-preview-content");
const form = document.querySelector("form");
const note_container = document.querySelector("#note-container");
const card = document.querySelector("#card")

document.addEventListener("DOMContentLoaded", () => {

    note_container.innerHTML = '';
    let key = localStorage.key(0);
    let value = localStorage.getItem(key);
    console.log(key, value);


    console.log("khbalhsbrfv from index file");



    for (let i = 0; i < localStorage.length; i++) {
        let title = localStorage.key(i);
        let description = localStorage.getItem(title);
        console.log(title, description)

        let nList = document.createElement("div");
        nList.setAttribute("class", " line-clamp-4 w-95/100 hover:shadow-black/20 hover:shadow-[0px_10px_30px] hover:translate-x-2.5 hover:bg-[rgba(118,169,250,0.1)] duration-300 ease-out p-6 border border-glass-bg border-l-4 border-l-accent-blue rounded-[20px] bg-[#9ca3af]/40 ")
        nList.innerHTML = ` <h5 class="mb-2 text-[1.2rem] font-bold ">${title}</h5>
                        <p class="text-[0.95rem] text-black">${description}
                        </p>`;
        nList.setAttribute("id" , "card")

        note_container.appendChild(nList)
    }
})






