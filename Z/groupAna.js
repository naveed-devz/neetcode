const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

function groupAn(strs){
    let map = new Map();

    for(let i=0;i<strs.length;i++){
        const newKey = strs[i].split("").sort().join("")

        if(map.has(newKey)){
            map.get(newKey).push(strs[i])
        }
        else{
            map.set(newKey,[strs[i]])
        }
    }

    return Array.from(map.values()).sort((a,b)=>a-b)

}
console.log(groupAn(strs))