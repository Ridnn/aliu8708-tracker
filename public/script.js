const myElement = document.getElementById("divOne");
const toggleButton = document.getElementById("toggleElement");


//function showElement() {
//  myElement.classList.remove("hidden");
//}

//function hideElement() {
//  myElement.classList.add("hidden");
//}

// The following toggleElement function is inspired by:
// https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
function toggleElement() {
    var x = document.getElementById("divOne");
    if (x.style.display === "none") {
        myElement.classList.add("hidden"); // works
    } else {
        myElement.classList.remove("hidden"); // does not work atm
    }
}

// Attach event listeners
toggleButton.addEventListener("click", toggleElement);
//toggleButton.addEventListener("click", hideElement);

