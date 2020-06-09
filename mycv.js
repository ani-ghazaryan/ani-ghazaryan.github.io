var underlines = document.getElementsByTagName("hr");
var newlines = document.getElementsByTagName("br");

window.addEventListener("resize", function() {
    // hide underlines and newlines 
    if (window.innerWidth <= 600 || window.innerHeight <= 700) {
        for (let item of underlines) {
            item.style.display = "none";
        }

        for (let item of newlines) {
            item.style.display = "none";
        }
    } else {
        // show underlines and newlines
        for (let item of underlines) {
            item.style.visibility = "block";
        }

        for (let item of newlines) {
            item.style.display = "block";
        }
    }
});

