class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const passed = new Map;
     
            for ( let i = 0; i< nums.length; i++){
                const diff = target - nums[i];
                if (passed.has(diff)){
                    return [passed.get(diff),i]
                }
                passed.set(nums[i],i);
       
        }
        return[];

    
    }
} 
