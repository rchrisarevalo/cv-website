function loadNav(){
    var burger = document.querySelector(".hamburger");
    var nav = document.querySelector(".nav-bar");

    burger.addEventListener("click", () => {

        burger.classList.toggle("is-active");

        if (nav.classList.toggle("active") == true){
            document.body.style.cssText = 'overflow: hidden;';
        } else{
            document.body.style.cssText = ' ';
        }
        
    });
}

loadNav();
