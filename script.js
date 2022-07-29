const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const sliderContainer = document.querySelector('.slider-container');
const sliderPhotos = Array.from(sliderContainer.children);
let sliderPosition = 0;
let index = 0;

function next(){
    if ( sliderContainer.style.left <= -(sliderPhotos.length * 500 + 'px')) {
        sliderContainer.style.left = sliderPosition + 'px';
    }else {
        let index = sliderPosition + 1;
        sliderContainer.style.left += (index) * -500 + 'px';
        sliderContainer.innerHTML += 'a';
    } 

}

nextButton.addEventListener('click', next);

console.log(sliderPhotos)

