document.addEventListener("scroll", function(){
    const menuBox = document.querySelector("#mainhd");
    const currentMP = window.scrollY; 

    // main image's height
    const minMP = document.getElementById('startIMG').clientHeight;
    
    if(currentMP >= minMP) {
        menuBox.style.background = "#222222";
        
    }else {
        menuBox.style.background = "linear-gradient(#1e3a4ed8,rgba(73, 148, 201, 0))";
    }

})