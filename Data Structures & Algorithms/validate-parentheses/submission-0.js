class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
    
            const map = {
                ')' : '(', 
                ']' : '[', 
                '}' : '{'
            };
            const pila = [];

            for(let c of s){
                if( map[c]){
                    if(pila.length >0 && pila[pila.length-1]=== map[c]){
                        pila.pop();
                    }else return false;
                }else {
                    pila.push(c);
            }
            }   
        return pila.length === 0;
    }
}

