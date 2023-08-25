let getBtn = document.querySelector('.getBtn');
let menu = document.querySelector('.menu');


getBtn.addEventListener("click",function(){
    menu.classList.toggle("open");
});


let cancel = document.querySelector('.cancel')


cancel.addEventListener("click", () => {
    menu.classList.toggle("open");
});

//carousel
// const carouselRow = document.querySelector('.container');
// const carouselSlides = document.querySelector('.slide-row');
// const dots = document.querySelector('.dot');
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');

// dots[0].addEventListener("click", function(){
//     carouselRow.style.transform = "translateX(0px)";
// });
// dots[1].addEventListener("click", function(){
//     carouselRow.style.transform = "translateX(-800px)";
// });
// dots[2].addEventListener("click", function(){
//     carouselRow.style.transform = "translateX(-1600px)";
// });






let scrollContainer = document.querySelector(".container");
let leftBtn = document.querySelector(".prev");
let rightBtn = document.querySelector(".next");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

rightBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

leftBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});
// let index = 1;
//  let width = carouselSlides[0].clientWidth;
// carouselRow.style.transform ="translateX('+ (- width * index) + 'px)";
// //go to next slide
// nextBtn.addEventListener('click , nextSlide');
// function nextSlide(){
//     if(index >= carouselSlides.length - 1){return};
//     carouselRow.style.transition = "transform 0.4s ease-out";
//     index++;
//     carouselRow.style.transform ="translateX('+ (- width * index) + 'px)";
// }

