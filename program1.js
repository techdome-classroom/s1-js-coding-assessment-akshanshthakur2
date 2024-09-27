const getTotalIsles = function (grid) {


  // write your code here
  const rows = grid.length;
    const cols = grid[0].length;
    let islandCount = 0;

    const dfs = (r, c) => {
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 'W') {
            return;
        }
        grid[r][c] = 'W'; // Mark the land as visited
        // Explore all four directions
        dfs(r - 1, c); // Up
        dfs(r + 1, c); // Down
        dfs(r, c - 1); // Left
        dfs(r, c + 1); // Right
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 'L') {
                islandCount++;
                dfs(r, c);
            }
        }
    }

    return islandCount;

};

module.exports = getTotalIsles;