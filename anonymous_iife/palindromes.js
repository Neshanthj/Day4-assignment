//e. Return all the palindromes in an array
// by iife function

(function(a){
    var result="";
    var answer="";
    for(i=0;i<a.length;i++)
    {
        result+=a[i];
        var count=0
        
        for(j=0;j<result.length;j++)
        {
            if(result[j]===result[((result.length-1)-j)])
            {
                count++
                
            }
        }
        if(count===result.length)
        {
            answer+=result+" "
        }
        result="";
    }
    console.log(answer);
 
}) ([1,11,343,411,575,600,7887,80108,999,11]);