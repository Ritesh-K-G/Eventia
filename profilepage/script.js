let editable = document.getElementById('edit');
let edit_doneb = document.getElementById('done_b');
let editable_icon = document.getElementById('edit_icon');
editable.addEventListener('click',()=>{
    editable_icon.style.color = 'black';
    edit_doneb.style.visibility = 'visible';
    edit_doneb.style.opacity = '1';
    document.getElementById('name').setAttribute("contenteditable", "true");
    document.getElementById('description').setAttribute("contenteditable", "true");
    document.getElementById('description').style.border = '1px solid black';
    document.getElementById('name').style.border = '1px solid black';
    // document.getElementById('email').setAttribute("contenteditable", "true");
    document.getElementById('phone').setAttribute("contenteditable", "true");
    document.getElementById('phone').style.border = '1px solid black';
    document.getElementById('dob').setAttribute("contenteditable", "true");
    document.getElementById('dob').style.border = '1px solid black';
})
edit_doneb.addEventListener('click',()=>{
    editable_icon.style.color = 'grey';
    edit_doneb.style.visibility = 'hidden';
    edit_doneb.style.opacity = '0';
    document.getElementById('name').setAttribute("contenteditable", "true");
    document.getElementById('name').style.border = 'none';
    document.getElementById('description').style.border = 'none';
    // document.getElementById('email').setAttribute("contenteditable", "true");
    document.getElementById('phone').setAttribute("contenteditable", "true");
    document.getElementById('phone').style.border = 'none';
    document.getElementById('dob').setAttribute("contenteditable", "true");
    document.getElementById('dob').style.border = 'none';
})


var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };