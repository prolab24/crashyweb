window.addEventListener("scroll",function(){
    var nav_down = document.querySelector("div");
    nav_down.classList.toggle("down",window.scrollY > 0);
})

$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('ul').toggleClass('show')
    })
})

var menu= document.getElementById("class");
 menu.onclick = function(){
     menu.classList.toggle("op")
 }
