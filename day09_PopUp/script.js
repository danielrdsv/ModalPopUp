let app = document.getElementById("app")

// Function which creates the btn.
function drawBtn() {
    let btn = document.createElement("button");
    btn.innerHTML = "Click Me !";
    app.appendChild(btn);
    btn.setAttribute("id", "popUpBtn")
}
// Drawing the parent container of the modal.
function wrapper() {
    let wrapper = document.createElement('div');
    wrapper.setAttribute("class", "modal-container")
    wrapper.setAttribute("id", "wrapper")
    let myDiv = document.getElementById('pop');
    wrapper.appendChild(myDiv.cloneNode(true));
    myDiv.parentNode.replaceChild(wrapper, myDiv);
}
// Drawing the actual popup.
function modal() {
    let modal = document.createElement("div");
    modal.innerHTML = "Modal content.";
    app.appendChild(modal);
    modal.setAttribute("class", "modal");
    modal.setAttribute("id", "pop")
}
// Drawing the button wich close the popup.
function drawCloseBtn() {
    let close = document.createElement("span");
    close.innerHTML = "X";
    pop.appendChild(close);
    close.setAttribute("id", "closeModal");
}

drawBtn();
modal();
drawCloseBtn();
wrapper()

const open = document.getElementById("popUpBtn");
const close = document.getElementById("closeModal");
const modalContainer = document.getElementById("wrapper");

open.addEventListener('click', () => {
    modalContainer.classList.add('show');
})

close.addEventListener('click', () => {
    modalContainer.classList.remove('show');
})

window.onclick = function (e) {
    if (e.target == modalContainer) {
        modalContainer.classList.remove('show');
    }
}

// setTimeout(function () {
//     modalContainer.classList.remove('show');
// }, 5000);



