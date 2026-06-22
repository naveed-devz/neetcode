function ransomeNote(ransom, magazine){
    const map = new Map()


    for(let i=0;i<ransom.length;i++){
        if(map.has(ransom[i])){
            map.set(ransom[i], map.get(ransom[i]) + 1)
        }
        else{
            map.set(ransom[i], 1)
        }
    }
    

    for(let j=0;j<magazine.length;j++){
        if(map.has(magazine[j])){
            map.set(magazine[i],map.get(magazine[i]) + 1)
        }
        else{
            map.set(magazine[j],1)
        }
    }

    

}

const ransom = "aa"
const magazine = "aab"

console.log(ransomeNote(ransom, magazine))