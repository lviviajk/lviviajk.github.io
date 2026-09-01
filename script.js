function showProjects() {
    var projects = document.getElementById("projects");

    if (projects.style.display == "block") {
        projects.style.display = "none";
    } else {
        projects.style.display = "block";
    }
}


function duckClick(duck) {
    duck.style.transform = "rotate(20deg)";

    setTimeout(function() {
        duck.style.transform = "rotate(0deg)";
    }, 300);
}
