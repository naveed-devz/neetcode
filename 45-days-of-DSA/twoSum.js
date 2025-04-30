// function twoSum(nums,target){
//     const numsWithIndex = nums.map((num,index)=>({num,index}))
//     numsWithIndex.sort((a,b)=>(a.num-b.num))

//     let left = 0;
//     let right= numsWithIndex.length-1

//     while(left < right){
//         const sum =  numsWithIndex[left].num + numsWithIndex[right].num

//         if(sum<target){
//             left++
//         }
//         else if(sum>target){
//             right--
//         }
//         else{
//             return [numsWithIndex[left].index , numsWithIndex[right].index] 
//         }
//     }


// }

function twoSum(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] + arr[j] === target){
                return[i,j];
            }
        }
    }
}


const nums = [3,4,5,6]
const target = 7;

console.log(twoSum(nums,target));
