// Open modal
const modal = document.querySelector(".overlay");

function openModal(){
    modal.classList.remove("hide-modal");
    modal.classList.add("show-modal");
}
// Close modal
function closeModal(){
    modal.classList.remove("show-modal");
    modal.classList.add("hide-modal");
}