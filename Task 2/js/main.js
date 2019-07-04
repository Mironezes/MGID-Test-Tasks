function slider() {

  let slideIndex = 1;

  let slides = document.querySelectorAll('.slide');
  let sliderIndicatorTotal = document.querySelector('.slide_indicator__total');
  let sliderIndicatorCurrent = document.querySelector('.slide_indicator__current');
  let totalSlides = slides.length;

  let sliderInterval = setInterval(nextSlide, 5000);


  sliderIndicatorTotal.innerHTML+=totalSlides;

  let prevSlideBtn = document.querySelector('.slide_prev');
  let nextSlideBtn = document.querySelector('.slide_next');


  prevSlideBtn.addEventListener("click", function() {  
    clearInterval(sliderInterval); 
    prevSlide();
  });
  nextSlideBtn.addEventListener("click", function() { 
    clearInterval(sliderInterval);     
    nextSlide();
  });




  showSlides(slideIndex);


  function prevSlide() {
    showSlides(slideIndex += -1);
  }

  function nextSlide() {  
    showSlides(slideIndex += 1);


  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    slides[slideIndex-1].classList.add("active"); 

    sliderIndicatorCurrent.innerHTML = "";
    sliderIndicatorCurrent.innerHTML+=slideIndex;  
  }
}
slider();


