class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let res = 0;
        const charrset = new Set();
        
        for (let r = 0; r< s.length; r++){
           while (charrset.has(s[r])){
                charrset.delete(s[l]);
                l++;
           }
           charrset.add(s[r]);
           res = Math.max(res,r-l+1);
           
        }
        return res;

        }
    }

