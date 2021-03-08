//vars
let menu = document.querySelector("#topBar-menu");
let listSpace = document.getElementById("listSpace");
let bodySpace = document.getElementById("bodySpace");

//add event
menu.addEventListener('click', clickmenu);

//vars
let menuOpen = false;

//event function
function clickmenu(e) {
    if (menuOpen == false) {
        menuOpen = true;
        open();
    }else if (menuOpen == true) {
        menuOpen = false;
        close()
    }
}

//function
function open() {
    console.log("open");
    listSpace.style.display = "flex";
    bodySpace.style.display = "none";
}

function close() {
    console.log("close");
    listSpace.style.display = "none";
    bodySpace.style.display = "block";
}