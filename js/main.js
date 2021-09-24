$(function(){
    $('.reviewsslider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        variableWidth: true,
        variableHeight: true,
        arrows: false,
        centerMode: true,
    });
});
let header = document.querySelector(".header");
window.onscroll = function (e) {
    if(window.scrollY>=1){
        header.classList.add("active");
    }
    if(window.scrollY==0){
        header.classList.remove("active");
    }
};

let nav=document.querySelector(".navigation");
let brgrbtn=document.querySelector(".burgerbtn");
brgrbtn.onclick = function(){
    nav.classList.toggle("_active");
}
let none=document.querySelector(".goog-te-banner");
let langbtn = document.querySelector(".footercontainerbotlang");
langbtn.onclick= function(){
    none.innerHTML= "";
}