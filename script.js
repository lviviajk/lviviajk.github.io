function toggleDropdown() {
    document
        .getElementById("projectDropdown")
        .classList.toggle("show");
}


/* Close dropdown if you click somewhere else */

window.onclick = function(event) {

    if (!event.target.matches(".project-button")) {

        let dropdown = document.getElementById("projectDropdown");

        if (dropdown.classList.contains("show")) {
            dropdown.classList.remove("show");
        }

    }

};
