class Solution {
    /**
     * @param {string[]} strs
     * @returns {string} de
     */
    encode(strs: string[]): string {
        return strs.map(s => s.length + '#' + s).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const strs = [];
        let i = 0;
        while (i < str.length) {
            let j = str.indexOf('#', i);
            let length = parseInt(str.substring(i, j));
            i = j + 1;
            strs.push(str.substring(i, i + length));
            i += length;
        }
        return strs;
    }
}