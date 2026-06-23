const name = "anveed";

function countFreq(name){
    const map =  new Map();

    for(let str of name){
        map.set(str, (map.get(str) || 0) + 1)
    }

    return map;
}   

console.log(countFreq(name))