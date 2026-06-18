const nums = [1, 2, 3, 1]

// check whether it has duplicates

function duplicates(nums){
   const set = new Set();
   const dup = [];
   for(let i=0;i<nums.length;i++){
    if(set.has(nums[i])){
        dup.push(nums[i])
        return true
    }
    else{
        set.add(nums[i])
    }
   }

   console.log(dup)
   return false
}
console.log(duplicates(nums))