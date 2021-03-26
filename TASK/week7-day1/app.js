let x;
function f(x){

  z=x*x*x*x*x-2;
  return z;
 
}

 for(i=0;i<10;i++){
    if(f(i)>0){
     
      j=i-1;
    
      break;
    }
  }
k=0;
while(k<6){
if (f(j)*f(i)<0){
   x0=(i+j)/2;
if (f(j)*f(x0)<0)
{
  i=x0;
}
  else if (f(j)*f(x0)>0) {
    j=x0;
  }
    
}
    k++;

 
console.log("i="+i);
console.log("j="+j);
console.log("tam orta qiymet:"+(i+j)/2);
}
