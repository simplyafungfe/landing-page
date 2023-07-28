




const navbar_Toggle = document.querySelector('.navbar-toggler');
const links = document.querySelector('nav-link');


navbar_Toggle.addEventListener("click", function(){
    console.log(links.classlist);
});