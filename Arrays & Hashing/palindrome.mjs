const s = "Was it a car or a cat I saw?"

function palindrome(s){
   
    const s1 = s.split(" ").join("");

    return s1 === s;



}
console.log(palindrome(s));