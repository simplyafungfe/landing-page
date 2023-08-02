




const navbar_Toggle = document.querySelector('.navbar-toggler');
const links = document.querySelector('nav-link');


navbar_Toggle.addEventListener("click", function(){
    console.log(links.classlist);
});






// the reviews
const reviews = [
    {
        id:1,
        author: "geogia ruth",
        img: "/assets/images/review1.jpg",
        info: "lorem ipsum jnsn;qajhlkuv;jbvabajhvlkajmjbvkjvaunaihav"
    },

    {
        id:2,
        author: "miss helen",
        img: "/assets/images/review2.jpg",
        info: "lorem antoneta jnsn;qajhlkuv;jbvabajhvlkajmjbvkjvaunaihav"
    }
]

const img = document.getElementById("reviews-card")
const text = document.getElementById("reviews-text")
const author = document.getElementById("reviews-name")


// stating the item
let currentItem = 1;

// load initial item
window.addEventListener("DOMContentLoader", function(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    info.textContent = item.info;

})



