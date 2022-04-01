let navBar = document.querySelector('.nav');
let menuBtn = document.querySelector('#menu-btn'); 

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navBar.classList.toggle('active'); 
};
