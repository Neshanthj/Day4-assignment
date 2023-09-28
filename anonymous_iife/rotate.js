//h. Rotate an array by k times
//by iife function
(function(a,k){
    n=a.length;
 c=[];
  rotate="";
  for(i=0;i<n;i++)
  {
      c[(i+k)%(n)]=a[i]
  }
  for(i=0;i<c.length-1;i++)
  {
      rotate+=c[i]+" "
  }
  rotate+=c[c.length-1]
  console.log(rotate);
}) ([1,2,3,4,5,6,7,8,9,0],5);