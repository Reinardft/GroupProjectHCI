let index = 1;
showSlides(index);

function plusSlides(n){
    showSlides(index+=n);
}
function currentSlide(n){
    showSlides(index=n);
}
function showSlides(n){
    var i;
    var slide = $(".slide")
    var dot = $(".dot")
    if(n > slide.length){
        index=1;
    }
    if(n<1){
        index = slide.length;
    }
    for(i=0; i<slide.length; i++){
        slide[i].style.display = "none";
    }
    slide[index-1].style.display = "block";
    for(i=0; i<dot.length; i++){
        dot[i].className = dot[i].className.replace(" select", "");
    }
    dot[index-1].className += " select";
}