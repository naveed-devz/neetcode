// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

// Each product is guaranteed to fit in a 32-bit integer.



const nums = [1,2,4,6]

// Output: [48,24,12,8]

// function product(nums){
//     let prod = 1;
//     const arr = [];
//     const newArr = [];
//     for(let i=0;i<nums.length;i++){
//         if(nums[i] !== 0){
//             prod*=nums[i]
            
//         }
//         arr.push(prod)
//     }
//     for(let i=0;i<nums.length;i++){
//         newArr.push(arr[arr.length-1]/nums[i])
//     }

//     return newArr
// }

// console.log(product(nums))


function product(arr){
    let n = arr.length;
    let result = new Array(n).fill(1);

    console.log(result)

    let prefix = 1;
    for(let i=0;i<n;i++){
        result[i] = prefix;
        prefix *= arr[i]
    }

    let postfix = 1;
    for(let j=n-1;j>=0;j--){

        result[j] = postfix;
        postfix *= arr[j]
    }
return result
}

console.log(product(nums))