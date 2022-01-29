let slideContainer = document.querySelector('.slide-container');
let bottomSlide = document.querySelector('.bottom-slide');
let topSlide = document.querySelector('.top-slide');
let buttonRight = document.querySelector('.button-right');
let buttonLeft = document.querySelector('.button-left');
let slidelength = topSlide.querySelectorAll('div').length;
let activeSlide = 0;
bottomSlide.style.left = `-${(slidelength-1) * 100}vw`;
buttonRight.addEventListener('click', () => changeSlide('Right'));
buttonLeft.addEventListener('click', () => changeSlide('Left'));

const changeSlide = (direction) =>{
   const sliderwidth = slideContainer.clientWidth;
    if(direction === "Right"){
    activeSlide++;
    if(activeSlide >= slidelength){
        activeSlide = 0;
    }
   } 
   else{
       activeSlide--;
       if(activeSlide < 0){
           activeSlide = 3;
       }
   }
   topSlide.style.transform = `translateX(-${activeSlide * 100}vw)`;
   bottomSlide.style.transform = `translateX(${activeSlide * 100}vw)`
   
}
