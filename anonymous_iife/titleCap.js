//b. Convert all the strings to title caps in a string array
// by anonymous function
var str=function (string) {
    var sent = string.toLowerCase().split(" ");
    for(var i = 0; i< sent.length; i++){
       sent[i] = sent[i][0].toUpperCase() + sent[i].slice(1);
    }
 sent.join(" ");
 var result="";
 for(let i=0;i<sent.length-1;i++)
 {
     result+=sent[i]+" "
 }
 result+=sent[sent.length-1]
 return result;
 }
 console.log(str("hi how are you"));
