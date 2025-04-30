const  s = "Was it a car or a cat I saw?"
function palindrome(s){
    let s1 = s.toLowerCase().replace(/[^a-z0-9]/g,"")
    let s2 = s1.split("").reverse().join("");
 
return s1 === s2

   

}
const newFunc = palindrome(s);
console.log(newFunc);

// true
