
        
let images = [
    "public/images/slider1.jpg","public/images/slider2.jpg","public/images/slider3.jpg"
] 
let slides = document.getElementById("wrapper");
let slideIndex = 0; 

slides.innerHTML = "<img src='"+images[slideIndex]+"'>";
let len= images.length;


let prev = document.getElementById("left-arrow");
let next = document.getElementById("right-arrow");

next.addEventListener("click", function (){
    if (slideIndex == len-1) {
        slideIndex = 0;
    }   
    else{
        slideIndex++;
    }             
    slides.innerHTML = "<img src='"+images[slideIndex]+"'>";    
});

prev.addEventListener("click", function (){
    if (slideIndex==0){
        slideIndex = 2
    }
    else {slideIndex--;
    }
    slides.innerHTML = "<img src='"+images[slideIndex]+"'>";
});

// showSlides()
// function showSlides() {
//    prev.style.display = "none";
//    next.style.display = "none";
//     if (slideIndex == len) {
//         slideIndex = 0}    
    
//     slides.innerHTML = "<img src='"+images[slideIndex]+"'>";
//     slideIndex++;
//     setTimeout(showSlides, 2000); 
// }

