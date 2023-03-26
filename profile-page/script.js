let image = document.getElementById("proimg");
image.addEventListener("contextmenu",function(event){
    // console.log(event.offsetX,event.offsetY);
    event.preventDefault();
    let contextmenu = document.getElementById("context-menu");
    contextmenu.style.top += event.pageY;
    contextmenu.style.left += event.pageX;
    contextmenu.classList.add("active");
});
window.addEventListener("click",function(){
    let contextmenu = document.getElementById("context-menu");
    contextmenu.classList.remove("active");
});

