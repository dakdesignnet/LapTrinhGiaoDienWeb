const navToggle=document.querySelector('#navToggle');
const nav=document.querySelector('nav');/*Số ít*/
const iconNav=document.querySelectorAll('.icon');/*Vì icon là mảng số nhiều nên*/
navToggle.addEventListener("click",()=>{
    nav.classList.toggle('open-nav');
    iconNav.forEach(icon=>{
        icon.classList.toggle('hidden-nav');
    })

})