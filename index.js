const add_note = document.querySelector("#add-note");
const note_container = document.querySelector("#note-container");
const dlt_button = document.querySelector("#dlt-btn");
const upd_button = document.querySelector("#upd-btn");
const sidebar = document.querySelector("#sidebar");
const note_prev_content = document.querySelector("#note-preview-content");


const updateList = () => {

    for (let i = 0; i < localStorage.length; i++) {
        let title = localStorage.key(i);
        let description = localStorage.getItem(title);

        let nList = document.createElement("div");
        nList.setAttribute("class", " card line-clamp-4 w-95/100 hover:shadow-black/20 hover:shadow-[0px_10px_30px] hover:translate-x-2.5 hover:bg-[rgba(118,169,250,0.1)] duration-300 ease-out p-6 border border-glass-bg border-l-4 border-l-accent-blue rounded-[20px] bg-[#9ca3af]/40 ")
        nList.innerHTML = ` <h5 class="mb-2 text-[1.2rem] font-bold ">${title}</h5>
                        <p class="text-[0.95rem] text-black">${description}
                        </p>`;

        note_container.appendChild(nList);
    }
}

updateList();


upd_button.addEventListener("click", () => {

    let Prev_title = document.querySelector("#title-text").innerHTML;
    let Prev_description = document.querySelector("#description-text").innerHTML;

    // console.log(Prev_title , Prev_description);


    let editForm = document.createElement("form");
    editForm.setAttribute("class", "w-[75%]  flex flex-col items-center justify-center gap-4 ")
    editForm.setAttribute("id", "upd-form");
    // console.log(editForm)

    editForm.innerHTML = `<div class=" mt-2 min-h-25 flex items-center justify-between w-95/100 text-white   
                rounded-2xl p-4 bg-[#009578]/80">
                <input id="title-text" value="${Prev_title}" name="title"
                    class="font-bold block text-shadow-black text-shadow-2xs text-left text-[2.5rem] leading-[1.2]"/> 
                    
                <div class="flex flex-row justify-between max-w-150">
                    <button id="upd-form-btn" type="submit"
                        class="max-w-50 shrink mt-2 text-center hover:-translate-y-0.5 shadow shadow-transparent border border-[#ffffff45] hover:shadow-[0_10px_30px] hover:shadow-accent-glow duration-300 ease-out box-border w-95/100 text-white font-bold text-[1rem]  rounded-2xl p-4 bg-[#009578]">Update</button>
                </div>
            </div>
            <textarea id="description-text" name="description"
                class="w-95/100 text-2xl min-h-200 p-6 border border-glass-bg  rounded-[20px] bg-[#9ca3af]/40 ">
             ${Prev_description}
            </textarea>` ;



    // console.log(editForm)
    sidebar.removeChild(note_prev_content);
    sidebar.appendChild(editForm);


    let edit_form = document.querySelector("#upd-form");
    console.log(edit_form)


    // const edit_form_submit = document.querySelector("#upd-form");
    editForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(editForm);
        const data = Object.fromEntries(formData);

        let desc = data.description;
        // console.log(`${data.title}`, JSON.stringify(`${desc.trim()}`));
        // console.log(desc.trim());
        localStorage.setItem(`${data.title}`, JSON.stringify(`${desc.trim()}`));


        let template = document.createElement("div");
        template.setAttribute("class", "w-[75%]  flex flex-col items-center justify-center gap-4 ");
        template.setAttribute("id", "note-preview-content");

        template.innerHTML = `<div class=" mt-2 min-h-25 flex items-center justify-between w-95/100 text-white   
                rounded-2xl p-4 bg-[#009578]/80">
                <div id="title-text"
                    class="font-bold text-shadow-black text-shadow-2xs text-left text-[2.5rem] leading-[1.2]"> Note
                    Title</div>
                <div class="flex flex-row justify-between max-w-150">
                    <button id="upd-btn"
                        class="max-w-50 shrink mt-2 text-center hover:-translate-y-0.5 shadow shadow-transparent border border-[#ffffff45] hover:shadow-[0_10px_30px] hover:shadow-accent-glow duration-300 ease-out box-border w-95/100 text-white font-bold text-[1rem]  rounded-2xl p-4 bg-[#009578]">Update</button>
                    <button id="dlt-btn"
                        class="max-w-50 hover:bg-rose-500/90 shrink mt-2 text-center hover:-translate-y-0.5 shadow shadow-transparent border border-[#ffffff45] hover:shadow-[0_10px_30px] hover:shadow-accent-glow duration-300 ease-out box-border w-95/100 text-white font-bold text-[1rem]  rounded-2xl p-4 bg-rose-500/70">Delete</button>
                </div>
            </div>
            <div id="description-text"
                class="w-95/100 text-2xl min-h-200 p-6 border border-glass-bg  rounded-[20px] bg-[#9ca3af]/40 ">
                "Capture your ideas instantly. Take-Note is the fastest way to jot down thoughts, create checklists,
                and keep your life organized without the clutter."
            </div>`;

        sidebar.removeChild(editForm);
        sidebar.appendChild(template);
    })
})


dlt_button.addEventListener("click", () => {
    let Prev_title = document.querySelector("#title-text").innerHTML;
    let Prev_description = document.querySelector("#description-text").innerHTML;

    let txt = Prev_description.innerHTML;



    if (Prev_title.trim() == "Note Title") {
        alert("choose the valid note to delete")
    } else {

        console.log(localStorage.removeItem(Prev_title));
        console.log(`note is deleted from the storage`);
    }
})

// note_container.innerHTML = '';
// let key = localStorage.key(0);
// let value = localStorage.getItem(key);







// for (let i = 0; i < localStorage.length; i++) {
//     let title = localStorage.key(i);
//     let description = localStorage.getItem(title);

//     let nList = document.createElement("div");
//     nList.setAttribute("class", " card line-clamp-4 w-95/100 hover:shadow-black/20 hover:shadow-[0px_10px_30px] hover:translate-x-2.5 hover:bg-[rgba(118,169,250,0.1)] duration-300 ease-out p-6 border border-glass-bg border-l-4 border-l-accent-blue rounded-[20px] bg-[#9ca3af]/40 ")
//     nList.innerHTML = ` <h5 class="mb-2 text-[1.2rem] font-bold ">${title}</h5>
//                         <p class="text-[0.95rem] text-black">${description}
//                         </p>`;

//     note_container.appendChild(nList);
// }



document.addEventListener("DOMContentLoaded", () => {

    note_container.innerHTML = '';
    let key = localStorage.key(0);
    let value = localStorage.getItem(key);
    // console.log(key, value);


    // console.log("khbalhsbrfv from index file");


    updateList();
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




