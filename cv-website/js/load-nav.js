function loadNav(){
    var burger = document.querySelector(".hamburger");
    var nav = document.querySelector(".nav-bar");

    burger.addEventListener("click", () => {
        burger.classList.toggle("is-active");
        nav.classList.toggle("active");
    });
}

loadNav();