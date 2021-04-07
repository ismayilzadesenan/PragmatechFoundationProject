let sezen=document.querySelector('.keypoint')
let sezens=document.querySelector('.keypoints')
let sezene=document.querySelector('.keypointe')
let pinj=document.querySelector('#slider')
sezen.addEventListener('click',function(){
    pinj.style.background='url(../img/main-banner-img1.jpg)'
})
sezens.addEventListener('click',function(){
    pinj.style.background='url(../img/main-banner-img2.jpg)'
})
sezene.addEventListener('click',function(){
    pinj.style.background='url(../img/main-banner-img3.jpg)'
})

