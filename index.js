const add_note = document.querySelector("#add-note");
const note_preview_content = document.querySelector("#note-preview-content");
const form = document.querySelector("form");
const note_container = document.querySelector("#note-container");
const dlt_button = document.querySelector("#dlt-btn");

dlt_button.addEventListener("click", () => {
    let Prev_title = document.querySelector("#title-text").innerHTML;
    let Prev_description = document.querySelector("#description-text").innerHTML;

    let txt = Prev_description.innerHTML;

    if (Prev_title.trim() == "Note Title") {
        alert("choose the valid note to delete")
    } else {
        console.log(`note is deleted from the storage`);  
    }
})

note_container.innerHTML = '';
let key = localStorage.key(0);
let value = localStorage.getItem(key);



for (let i = 0; i < localStorage.length; i++) {
    let title = localStorage.key(i);
    let description = localStorage.getItem(title);

    let nList = document.createElement("div");
    nList.setAttribute("class", " card line-clamp-4 w-95/100 hover:shadow-black/20 hover:shadow-[0px_10px_30px] hover:translate-x-2.5 hover:bg-[rgba(118,169,250,0.1)] duration-300 ease-out p-6 border border-glass-bg border-l-4 border-l-accent-blue rounded-[20px] bg-[#9ca3af]/40 ")
    nList.innerHTML = ` <h5 class="mb-2 text-[1.2rem] font-bold ">${title}</h5>
                        <p class="text-[0.95rem] text-black">${description}
                        </p>`;

    note_container.appendChild(nList)
}

document.addEventListener("DOMContentLoaded", () => {

    note_container.innerHTML = '';
    let key = localStorage.key(0);
    let value = localStorage.getItem(key);
    // console.log(key, value);


    // console.log("khbalhsbrfv from index file");



    for (let i = 0; i < localStorage.length; i++) {
        let title = localStorage.key(i);
        let description = localStorage.getItem(title);

        let nList = document.createElement("div");
        nList.setAttribute("class", " card line-clamp-4 w-95/100 hover:shadow-black/20 hover:shadow-[0px_10px_30px] hover:translate-x-2.5 hover:bg-[rgba(118,169,250,0.1)] duration-300 ease-out p-6 border border-glass-bg border-l-4 border-l-accent-blue rounded-[20px] bg-[#9ca3af]/40 ")
        nList.innerHTML = ` <h5 class="mb-2 text-[1.2rem] font-bold ">${title}</h5>
                        <p class="text-[0.95rem] text-black">${description}
                        </p>`;

        nList.setAttribute("id", "card")

        note_container.appendChild(nList)
    }
})


const card = document.querySelectorAll("#note-container > div")

note_container.addEventListener("click", (ev) => {
    const card = ev.target.closest(".card");

    let h5 = card.querySelector("h5");
    let p = card.querySelector("p");

    let title = h5.innerHTML;
    let description = p.innerHTML;
    // console.log(description)

    let Prev_title = document.querySelector("#title-text");
    let Prev_description = document.querySelector("#description-text");

    Prev_title.innerHTML = title;
    Prev_description.innerHTML = JSON.parse(description);


})




