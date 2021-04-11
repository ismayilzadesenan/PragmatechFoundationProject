let keypoint=document.getElementsByClassName('keypoint')
let slid=document.querySelector('#slider');
console.log(keypoint[0])
keypoint[0].addEventListener('click',function(){
    slid.style.background="url('../img/main-banner-img1.jpg')";
    keypoint[0].style.background='red'
})
keypoint[1].addEventListener('click',function(){
    slid.style.background="url('../img/main-banner-img2.jpg')";
})
keypoint[2].addEventListener('click',function(){
    slid.style.background="url('../img/main-banner-img3.jpg')";
})