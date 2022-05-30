let slider = document.querySelector(".slider");
let slides = document.querySelectorAll(".slide");
let prevButton =document.querySelector(".prevButton");
let nextButton = document.querySelector(".nextButton");
let navigation =  document.querySelector(".navigation");

let slideCount = slides.length;
let activeSlideIndex = 0;

slides[activeSlideIndex].classList.add("active");


// create navigation bullets

for(i=0; i<slideCount; i++){
    let bullet = `<input type="radio" class="bullet" name="nav" data-id = ${i} />`
    navigation.innerHTML += bullet;
}

let bullets = document.querySelectorAll(".bullet");
bullets[activeSlideIndex].checked = true;

function resetSlide(){
    slides[activeSlideIndex].classList.remove("active");
    // slides.forEach(slide => slide.classList.remove("active"));
    
}


nextButton.addEventListener("click", function(){
    resetSlide();  
    activeSlideIndex++;
    if(activeSlideIndex > slideCount - 1){
        activeSlideIndex = 0;
    }
    bullets[activeSlideIndex].checked = true;
    console.log(activeSlideIndex);
    slides[activeSlideIndex].classList.add("active");
    
});



prevButton.addEventListener("click", function(){
    resetSlide();
    activeSlideIndex--;
    if(activeSlideIndex < 0){
        activeSlideIndex = slideCount-1;
    }
    bullets[activeSlideIndex].checked = true;
    slides[activeSlideIndex].classList.add("active");
})


//navigating bullets with slides

bullets.forEach((item) =>{
    item.addEventListener("change", function(e){
        resetSlide();
        activeSlideIndex = e.target.dataset.id;
        slides[activeSlideIndex].classList.add("active");
    })
})