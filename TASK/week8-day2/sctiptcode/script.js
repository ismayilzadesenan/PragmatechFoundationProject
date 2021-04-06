let nbtn=document.querySelector('.nextbtn');
let pbtn=document.querySelector('.prvbtn');
let photo=document.querySelector('.slider');
let countr=document.querySelector('.img1');

let count=document.querySelectorAll('.img1').length;
 tr=countr.clientWidth;
let source=count*tr;
i=0;
nbtn.addEventListener('click',function(){
   if(i!=(-source+tr)){
    i-=800;
photo.style.transform=`translate(${i}px)`;}

}
)

pbtn.addEventListener('click',function(){
    if(i!=0){
    i+=800;
    photo.style.transform=`translate(${i}px)`;}
  
}
)