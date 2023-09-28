//2. a Print odd numbers in an array
oddNumbers = (a) => {
    var  result="";
    for(i=0;i<a.length-1;i++)
    
        if(a[i]%2!==0)
        {
            result+=a[i]+" ";
        }

    result+=a[a.length-1];
    return result;
};
console.log(oddNumbers([1,2,3,4,5]))
       

     