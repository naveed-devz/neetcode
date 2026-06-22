const nums = [1, 2, 3, 1]

function returnDup(arr){
    const set = new Set();
    const dup = [];
    for(let i=0;i<arr.length;i++){
        if(set.has(arr[i])){
            dup.push(arr[i])
        }
        else{
            set.add(arr[i])
        }
    }
    return dup;
}

console.log(returnDup(nums))