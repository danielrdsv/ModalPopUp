const app = document.getElementById("app");
// let pop = document.getElementById("pop");

// Function which creates the btn.
function drawBtn() {
    let btn = document.createElement("button");
    btn.innerHTML = "Click Me !";
    btn.dataset.click = "open";
    app.appendChild(btn);
    btn.setAttribute("id", "popUpBtn");
}
// Drawing the parent container of the modal.
function wrapper() {
    let wrapper = document.createElement("div");
    wrapper.setAttribute("class", "modal-container");
    wrapper.setAttribute("id", "wrapper");
    let myDiv = document.getElementById("pop");
    wrapper.appendChild(myDiv.cloneNode(true));
    myDiv.parentNode.replaceChild(wrapper, myDiv);
    wrapper.dataset.click = "close";
}
// Drawing the actual popup.
function modal() {
    let modal = document.createElement("div");
    modal.innerHTML = "Modal content.";
    app.appendChild(modal);
    modal.setAttribute("class", "modal");
    modal.setAttribute("id", "pop");
}
// Drawing the button wich close the popup.
function drawCloseBtn() {
    let close = document.createElement("span");
    close.dataset.click = "close";
    close.innerHTML = "X";
    pop.appendChild(close);
    close.setAttribute("id", "closeModal");
}

drawBtn();
modal();
drawCloseBtn();
wrapper();

// const open = document.getElementById("popUpBtn");
// const close = document.getElementById("closeModal");
const modalContainer = document.getElementById("wrapper");

function addClassShow() {
    modalContainer.classList.add("show");
}

function removeClassShow() {
    modalContainer.classList.remove("show");
}
const mapClick = {
    open: addClassShow,
    close: removeClassShow
};

function handleClick(e) {
    if (typeof mapClick[e.target.dataset.click] === "function") {
        mapClick[e.target.dataset.click]();
    }
}

document.body.addEventListener("click", handleClick);
