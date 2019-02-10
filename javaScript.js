var slideIndex = 0;
var slide = document.getElementsByClassName("slides");


function NextImage()
{
    slide[slideIndex].style.display = "none";
    slideIndex++;
    if(slideIndex > slide.length -1){ slideIndex = 0};
    slide[slideIndex].style.display = "block";
}


function PrevImage()
{
    slide[slideIndex].style.display = "none";
    slideIndex--;
    if(slideIndex < 0){ slideIndex = slide.length-1};
    slide[slideIndex].style.display = "block";
}

function openMenu() {
    document.getElementById("sideMenu").style.width = "40%";
}


function closeMenu() {
    document.getElementById("sideMenu").style.width = "0";
}
