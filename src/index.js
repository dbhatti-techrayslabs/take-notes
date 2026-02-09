var add_note = document.querySelector("#add-note");
var note_container = document.querySelector("#note-container");
var dlt_button = document.querySelector("#dlt-btn");
var upd_button = document.querySelector("#upd-btn");
var sidebar = document.querySelector("#sidebar");
var note_prev_content = document.querySelector("#note-preview-content");
document.addEventListener("DOMContentLoaded", function () {
    updateList();
});
var updateList = function () {
    note_container.innerHTML = '';
    for (var i = 0; i < localStorage.length; i++) {
        var title = localStorage.key(i);
        if (title == null) {
            return;
        }
        var description = localStorage.getItem(title);
        var nList = document.createElement("div");
        nList.setAttribute("class", " card line-clamp-4 w-95/100 hover:shadow-black/20 hover:shadow-[0px_10px_30px] hover:translate-x-2.5 hover:bg-[rgba(118,169,250,0.1)] duration-300 ease-out p-6 border border-glass-bg border-l-4 border-l-accent-blue rounded-[20px] bg-[#9ca3af]/40 ");
        nList.innerHTML = " <h5 class=\"mb-2 text-[1.2rem] font-bold \">".concat(title, "</h5>\n                        <p class=\"text-[0.95rem] text-black\">").concat(description, "\n                        </p>");
        note_container.appendChild(nList);
    }
};
upd_button.addEventListener("click", function () {
    var Prev_title = document.querySelector("#title-text");
    var Prev_description = document.querySelector("#description-text");
    // console.log(Prev_title , Prev_description);
    var editForm = document.createElement("form");
    editForm.setAttribute("class", "w-[75%]  flex flex-col items-center justify-center gap-4 ");
    editForm.setAttribute("id", "upd-form");
    // console.log(editForm)
    editForm.innerHTML = "<div class=\" mt-2 min-h-25 flex items-center justify-between w-95/100 text-white   \n                rounded-2xl p-4 bg-[#009578]/80\">\n                <input id=\"title-text\" value=\"".concat(Prev_title.innerText.trim(), "\" name=\"title\"\n                    class=\"font-bold block text-shadow-black text-shadow-2xs text-left text-[2.5rem] leading-[1.2]\"/> \n                    \n                <div class=\"flex flex-row justify-between max-w-150\">\n                    <button id=\"upd-form-btn\" type=\"submit\"\n                        class=\"max-w-50 shrink mt-2 text-center hover:-translate-y-0.5 shadow shadow-transparent border border-[#ffffff45] hover:shadow-[0_10px_30px] hover:shadow-accent-glow duration-300 ease-out box-border w-95/100 text-white font-bold text-[1rem]  rounded-2xl p-4 bg-[#009578]\">Update</button>\n                </div>\n            </div>\n            <textarea id=\"description-text\" name=\"description\"\n                class=\"w-95/100 text-2xl min-h-200 p-6 border border-glass-bg  rounded-[20px] bg-[#9ca3af]/40 \">\n             ").concat(Prev_description.innerText.trim(), "\n            </textarea>");
    // console.log(editForm)
    sidebar.removeChild(note_prev_content);
    sidebar.appendChild(editForm);
    var edit_form = document.querySelector("#upd-form");
    console.log(edit_form);
    // const edit_form_submit = document.querySelector("#upd-form");
    editForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var formData = new FormData(editForm);
        var data = Object.fromEntries(formData);
        var desc = JSON.stringify(data.description);
        if ((data.title !== Prev_title.innerText.trim())) {
            localStorage.removeItem("".concat(Prev_title.innerText.trim()));
        }
        localStorage.setItem("".concat(data.title), JSON.stringify("".concat(desc.trim())));
        var template = document.createElement("div");
        template.setAttribute("class", "w-[75%]  flex flex-col items-center justify-center gap-4 ");
        template.setAttribute("id", "note-preview-content");
        template.innerHTML = "<div class=\" mt-2 min-h-25 flex items-center justify-between w-95/100 text-white   \n                rounded-2xl p-4 bg-[#009578]/80\">\n                <div id=\"title-text\"\n                    class=\"font-bold text-shadow-black text-shadow-2xs text-left text-[2.5rem] leading-[1.2]\"> Note\n                    Title</div>\n                <div class=\"flex flex-row justify-between max-w-150\">\n                    <button id=\"upd-btn\"\n                        class=\"max-w-50 shrink mt-2 text-center hover:-translate-y-0.5 shadow shadow-transparent border border-[#ffffff45] hover:shadow-[0_10px_30px] hover:shadow-accent-glow duration-300 ease-out box-border w-95/100 text-white font-bold text-[1rem]  rounded-2xl p-4 bg-[#009578]\">Update</button>\n                    <button id=\"dlt-btn\"\n                        class=\"max-w-50 hover:bg-rose-500/90 shrink mt-2 text-center hover:-translate-y-0.5 shadow shadow-transparent border border-[#ffffff45] hover:shadow-[0_10px_30px] hover:shadow-accent-glow duration-300 ease-out box-border w-95/100 text-white font-bold text-[1rem]  rounded-2xl p-4 bg-rose-500/70\">Delete</button>\n                </div>\n            </div>\n            <div id=\"description-text\"\n                class=\"w-95/100 text-2xl min-h-200 p-6 border border-glass-bg  rounded-[20px] bg-[#9ca3af]/40 \">\n                \"Capture your ideas instantly. Take-Note is the fastest way to jot down thoughts, create checklists,\n                and keep your life organized without the clutter.\"\n            </div>";
        sidebar.removeChild(editForm);
        sidebar.appendChild(template);
        updateList();
    });
});
dlt_button.addEventListener("click", function () {
    var Prev_title = document.querySelector("#title-text");
    var Prev_description = document.querySelector("#description-text");
    var titleText = Prev_title === null || Prev_title === void 0 ? void 0 : Prev_title.innerHTML;
    if (titleText == "Note Title") {
        alert("choose the valid note to delete");
    }
    else {
        console.log(localStorage.removeItem(Prev_title === null || Prev_title === void 0 ? void 0 : Prev_title.innerHTML));
        console.log("note is deleted from the storage");
    }
    window.location.reload();
});
var card = document.querySelectorAll("#note-container > div");
note_container.addEventListener("click", function (ev) {
    var card = ev.target.closest(".card");
    if (!card) {
        return;
    }
    var h5 = card.querySelector("h5");
    var p = card.querySelector("p");
    var title = h5.innerHTML;
    var description = p.innerHTML;
    // console.log(description)
    var Prev_title = document.querySelector("#title-text");
    var Prev_description = document.querySelector("#description-text");
    Prev_title.innerHTML = title;
    Prev_description.innerHTML = JSON.parse(description);
});
