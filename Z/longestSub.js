const str =  "ababccbb"

function longest(str){
    let map = new Map();
    let left = 0;
    let count = 0;
for(let i=0;i<str.length;i++){
   while(map.has(str[i])){
    map.delete(str[left]);
    left++
   }

   map.set(str[i],i)
   count = Math.max(count,i-left+1)
}
return  count
    
}

console.log(longest(str))