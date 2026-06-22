const s = "listen";
const t = "silent";

// function anagram (s,t){
//     return s.split("").sort().join("")  === t.split("").sort().join("");
// }
// console.log(anagram(s,t))

function anagram(s,t){
    let map = new Map();
    
    if(s.length !== t.length){
        return false
    }
     
    for(let i=0;i<s.length;i++){
        if(map.has(s[i])){
            map.set(s[i], map.get(s[i]) + 1)
        }
        else{
            map.set(s[i], 1)
        }
    }

    for(let i=0;i<t.length;i++){

        if(!map.has(t[i])){
            return false
        }

        if(map.has(t[i])){
            map.set(t[i], map.get(t[i])-1)

        }else{
            map.set(t[i],-1)
        }

        if(map.get(t[i]) < 0){
            return false;
        }

    }
    return true;




}
console.log(anagram(s,t))