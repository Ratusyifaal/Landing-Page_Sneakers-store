/* script.js */
document.getElementById("moreBtn").addEventListener("click", function() {
    var moreText = document.getElementById("moreText");
    if (moreText.classList.contains("hidden")) {
        moreText.classList.remove("hidden");
        this.textContent = "Read Less";
    } else {
        moreText.classList.add("hidden");
        this.textContent = "Read More";
    }
});

function showDetails(element) {
    var description = element.querySelector("p");
    if (description.classList.contains("hidden")) {
        description.classList.remove("hidden");
    } else {
        description.classList.add("hidden");
    }
}
