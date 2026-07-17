class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
     
        const junto = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
        
        const reves = junto.split('').reverse().join('');

        return junto === reves;
        
            
    }
}

        
    
