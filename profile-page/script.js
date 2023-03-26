document.getElementById("proimg").addEventListener("contextmenu",function(event){
    // console.log(event.offsetX,event.offsetY);
    event.preventDefault();
    var contextmenu = document.getElementById("context-menu");
    contextmenu.style.top = event.offsetY+"px";
    contextmenu.style.left = event.offsetX+"px";
    contextmenu.classList.add("active");
});
window.addEventListener("click",function(){
    var contextmenu = document.getElementById("context-menu");
    contextmenu.classList.remove("active");
});
