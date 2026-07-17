class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
     
      let i = 0,
           f = s.length-1;

      while (i<f){
        while ( i < f && !this.alphaNum(s[i])){
            i++;
        }
        while (f > i && !this.alphaNum(s[f])) {
            f--;
        }
        if (s[i].toLowerCase() !== s[f].toLowerCase()){
            return false;
        }
        i++;
        f--;
      }
      return true;

    }
    alphaNum(c){
        return(
             (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        );
    }
}

        
    
