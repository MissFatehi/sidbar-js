const crossBtn = document.getElementById("crossBtn");
const menuIcon = document.getElementById("menuIcon");
const menu = document.getElementById("menu");


menuIcon.addEventListener('click' , function (){
menu.classList.toggle("move");
})

crossBtn.addEventListener('click', ()=>{
    menu.classList.add("move");
})