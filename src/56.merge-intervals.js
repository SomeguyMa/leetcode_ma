/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 *
 * https://leetcode.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (35.48%)
 * Likes:    2013
 * Dislikes: 155
 * Total Accepted:    343.4K
 * Total Submissions: 965.6K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * Given a collection of intervals, merge all overlapping intervals.
 * 
 * Example 1:
 * 
 * 
 * Input: [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into
 * [1,6].
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 * 
 * NOTE: input types have been changed on April 15, 2019. Please reset to
 * default code definition to get new method signature.
 * 
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) {
      return intervals;
    }
    intervals.sort((a, b) => a[0] - b[0]);
    let index = 0;
    let results = [];
    while (index < intervals.length) {
      let start = intervals[index][0];
      let end = intervals[index][1];
      while(intervals[index] && intervals[index][0] <= end ) {
        end = Math.max(end, intervals[index][1]);
        index++;
      }
      results.push([start, end]);
    }
    return results;
};
// @lc code=end
