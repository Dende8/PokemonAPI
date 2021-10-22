
function expandMenu(){
    const button = document.querySelector(".nav__img");
    const menu = document.querySelector(".nav__menuBox");
    const text = document.querySelector(".input__text");
    const leftArrow = document.querySelector(".nav__left");
    const rightArrow = document.querySelector(".nav__right");


    button.addEventListener('click', function(){
        if (menu.classList.contains("nav__menuBox--expand") === true){
            menu.classList.remove("nav__menuBox--expand");
            leftArrow.classList.remove("hidden__arrow");
            rightArrow.classList.remove("hidden__arrow");
        } else {
            menu.classList.add("nav__menuBox--expand");
            leftArrow.classList.add("hidden__arrow");
            rightArrow.classList.add("hidden__arrow");
            text.value = "";
            text.addEventListener('focus', function(){
                text.value = "";
            });
        }
    });
}
export { expandMenu };