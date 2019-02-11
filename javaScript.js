var slideIndex = 0;
var slide = document.getElementsByClassName("slides");

  

function NextImage()
{
    console.log("Hello");
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

function toggleColorMode() {
    if(document.getElementById("body").className == "LightMode"){
        SetDarkMode();
    }
        
    else {
        SetLightMode();
    }
    
}

function SetDarkMode(){
    document.getElementById("body").className = "DarkMode";
    document.documentElement.style.setProperty('--TextColor', 'white');
    document.documentElement.style.setProperty('--BackgroundColor', 'black');
    document.documentElement.style.setProperty('--NavbarColor', '#333');
}

function SetLightMode(){
    document.getElementById("body").className = "LightMode";
    document.documentElement.style.setProperty('--TextColor', 'black');
    document.documentElement.style.setProperty('--BackgroundColor', '#ffc9ca');
    document.documentElement.style.setProperty('--NavbarColor', '#333');
}