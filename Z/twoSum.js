const nums = [2, 7, 11, 15], target = 9

function twoSum(nums,target){
    const map = new Map();
    for(let i=0;i<nums.length;i++){
        let q = target-nums[i]
        if(map.has(q)){
            return [map.get(q),i]
        }
        else{
            map.set(nums[i],i)
        }
    }

}

console.log(twoSum(nums,target))