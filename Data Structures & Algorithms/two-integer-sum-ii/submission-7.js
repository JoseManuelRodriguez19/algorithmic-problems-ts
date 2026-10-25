class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length- 1;

        while (left < right){
         
            const suma = numbers[left]+ numbers[right];

            if( suma < target){
                left++;
            }else if( suma > target){
                right--;
            }else {
                return [left+1,right+1];
            }
            
        }
           return [];
        }
     
        }
    