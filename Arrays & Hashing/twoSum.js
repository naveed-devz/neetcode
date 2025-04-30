// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

// Return the answer with the smaller index first.



const arr = [3,4,5,6]
const target = 7
// function twoSum(arr,target){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j] === target){
//                 return [i,j]
//             }
//         }
//     }
// }

function twoSum(arr,target){
        let left = 0;
        let right = 1;
        while(left < right){
            if(arr[left]+arr[right] < target){
                left++
            }
            else if(arr[left]+arr[right] > target){
                right --
            }
            else if (arr[left]+arr[right] === target){
                return  [left, right]
            }
            else {
                return [-1,-1]
            }
        }
}
console.log(twoSum(arr,target))