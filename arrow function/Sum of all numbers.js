//c. Sum of all numbers in an array

sum = (a)=>{
    var result = 0;
         for(var i = 0 ; i< a.length ; i++){
            result = result + a[i];
          }
          return result;
          }
          console.log(sum([1,2,3,4,5,6]))
          