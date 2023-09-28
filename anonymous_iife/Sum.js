//c. Sum of all numbers in an array
// by anonymous function
var sum =function(a){
    var  result=0;
    for(i=0;i<a.length;i++)
    {
            result=result + a[i]
    }
    return result;
 
}
console.log(sum([1,2,3,4,5,6]))