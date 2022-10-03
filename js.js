window.addEventListener("lo", function() {
    const loader = document.querySelector(".lo");
    loader.className += "hidden";

});
let span = document.querySelector(".up");
window.onscroll = function() {
    if (this.scrollY >= 800) {
        span.classList.add("show");
    } else {
        span.classList.remove("show");
    }
};
span.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
};
let sections = document.querySelector(".row");
let lis = document.querySelectorAll(".li");
window.onscroll = function() {
    if (window.scrollY >= 1200) {

        lis.classList.add("it");

    } else {
        lis.classList.remove("it");
    }
};