//f. Return median of two sorted arrays of the same size.
//by iife function
(function(a,b){
    var c=[];
    var n=a.length;
    var p=b.length;
    var i=0;
    var j=0;
    var median=0;
    while(i<n && j<p)
    {
        if(a[i]<b[j])
        {
            c.push(a[i])
            i++
        }
        else
        {
            c.push(b[j])
            j++
        }
    }
    
     if(i<n)
     {
         for(let k=i;k<n;k++)
         {
             c.push(a[k])
         }
     }
     else if(j<p)
     {
         for(let m=j;m<p;m++)
         {
             c.push(b[m])
         }
     }
     if(c.length%2===0)
     {
         median=(c[(c.length/2)-1]+c[c.length/2])/2
     }
     else
     {
         median=c[Math.floor(c.length/2)]
     }
     console.log(median);
    
}) ([1,2,3,7],[4,5,6,8]);