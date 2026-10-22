class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const count = new Map();
        for(let i=0; i< nums.length; i++){
            if (count.has(nums[i])){
              count.set(nums[i], (count.get(nums[i]) + 1));
            }else{
                count.set(nums[i],1);
            }
            
        }   

        const resultado = [...count.entries()]
        .sort((a, b) => b[1] - a[1]) 
        .slice(0, k)                
        .map(entry => entry[0]); 

        return resultado;
        
    }
}
