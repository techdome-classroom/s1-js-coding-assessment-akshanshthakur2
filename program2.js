const decodeTheRing = function (s, p) {

    // write your code here
    const dp = Array(s.length + 1).fill(false).map(() => Array(p.length + 1).fill(false));
    dp[0][0] = true; // Both string and pattern are empty

    for (let j = 1; j <= p.length; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1]; // '*' can match empty
        }
    }

    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            if (p[j - 1] === s[i - 1] || p[j - 1] === '?') {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i - 1][j] || dp[i][j - 1]; // '*' can match any sequence
            }
        }
    }

    return dp[s.length][p.length];

};
  
module.exports = decodeTheRing;