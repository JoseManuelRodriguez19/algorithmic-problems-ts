class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        
    let maxP = 0;
    let minP = prices[0];

    for( let sell of prices){
        maxP = Math.max(maxP,sell - minP);
        minP = Math.min(minP,sell);
    }
    return maxP;
}
}
