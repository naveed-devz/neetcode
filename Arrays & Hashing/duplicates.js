// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.4

const arr = [1,2,1,3,1,3,1]

function Duplicates (arr){
    let newArr = arr.sort((a,b)=>a-b)
    for(let i=0;i<newArr.length;i++){
        if(newArr[i] == newArr[i+1] || newArr[i] == newArr[i-1]){
            return false
        }
    }
    return true
}
console.log(Duplicates(arr))