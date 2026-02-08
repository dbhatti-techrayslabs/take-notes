const add_note = document.querySelector("#add-note");
const note_preview_content = document.querySelector("#note-preview-content");
const form = document.querySelector("form");
const note_container = document.querySelector("#note-container")


document.addEventListener("DOMContentLoaded", () => {
    let archive = [];
    for (var i = 0; i < localStorage.length; i++) {
        archive[i] = localStorage.getItem(localStorage.key(i));
    }

    // console.log(archive[0]);
    const arch = [];
    archive.forEach((el) => {
        arch.push(JSON.parse(el))
    })

    // console.log(arch[0])   //// it works here


    // console.log(JSON.parse(archive[0]).title)

    // for(let el in arch){
    //     console.log()
    // }

    //    arch.forEach((el) => {
    //     console.log(el. , " \t "  , el.description)
    //    })


    // while (note_container.hasChildNodes()) {
    //     note_container.removeChild(target.lastChild);
    // }



})


form.addEventListener("submit", (e) => {
    e.preventDefault();

    // console.log(e.target)

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);  // real object
    // const parsed = JSON.stringify(data) ;   // parsed JSON string  // but it does not need any more gsn
 
    // console.log(data.title)   // works

    localStorage.setItem(`${data.title}`, data.description);
    console.log(localStorage.getItem("day 3"));

    localStorage.setItem("day 3" , "not a nice day")
    console.log(localStorage.getItem("day 3"));
    localStorage.removeItem("day 3");
    console.log(localStorage.getItem())

    // console.log();

    // updateNoteList(data);
    // window.location.href = `${window.location.origin}/index.html`;


})


async function updateNoteList(newNote) {

    let noteList = document.createElement("div");
    noteList.setAttribute("class", "w-95/100 hover:shadow-black/20 hover:shadow-[0px_10px_30px] hover:translate-x-2.5 hover:bg-[rgba(118,169,250,0.1)] duration-300 ease-out p-6 border border-glass-bg border-l-4 border-l-accent-blue rounded-[20px] bg-[#9ca3af]/40 ")
    noteList.innerHTML = ` <h5 class="mb-2 text-[1.2rem] font-bold ">${newNote.title}</h5>
                        <p class="text-[0.95rem] text-black">${newNote.description}
                        </p>`;


    return console.log(noteList);
    // note_container.appendChild()
}