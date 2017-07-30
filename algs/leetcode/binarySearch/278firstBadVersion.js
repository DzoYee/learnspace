/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
      var start = 0;
      var end = n;
      var midpoint;
      while (start <= end) {
        midpoint = start + Math.floor(end-start/2);
        if (isBadVersion(midpoint)) {
          end = midpoint - 1;
        } else {
          start = midpoint + 1;
        }

      } 
      return start;
    };
};