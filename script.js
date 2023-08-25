let getBtn = document.querySelector('.getBtn');
let menu = document.querySelector('.menu');


getBtn.addEventListener("click",function(){
    menu.classList.toggle("open");
});


let cancel = document.querySelector('.cancel')


cancel.addEventListener("click", () => {
    menu.classList.toggle("open");
});