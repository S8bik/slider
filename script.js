const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const sliderContainer = document.querySelector('.slider-container');
const sliderPhotos = Array.from(sliderContainer.children);
let sliderPosition = 0;

function next(){
    if ( sliderContainer.style.left <= -(sliderPhotos.length * 500 + 'px')) {
        sliderContainer.style.left = sliderPosition + 'px';
    }else {
        sliderContainer.style.left += -500 + 'px';
        sliderContainer.innerHTML += 'a';
    } 

}

nextButton.addEventListener('click', next);

console.log(sliderPhotos)

