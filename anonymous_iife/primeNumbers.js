//d. Return all the prime numbers in an array
// by anonymous function
var sum =function(a){
    var  result="";
    for(i=0;i<a.length;i++)
    {
        var count=0;
        for(j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            result+=a[i]+" "
        }
    }
    return result;
 
}
console.log(sum([1,2,3,4,5,6,7,8,9,11]))