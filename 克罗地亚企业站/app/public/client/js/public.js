var $lt =document.querySelector(".swiper-button-prev");
var _sx=document.querySelector(".sx");
var $gt =document.querySelector(".swiper-button-next");
var _sz=document.querySelector(".sz");
$lt.onmouseover =function (){
    _sx.style.display="none";
}
$lt.onmouseout =function (){
    _sx.style.display="block";
}
$gt.onmouseover =function (){
    _sz.style.display="none";
}
$gt.onmouseout =function (){
    _sz.style.display="block";
}
