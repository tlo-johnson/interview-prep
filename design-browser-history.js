// https://leetcode.com/problems/design-browser-history/
// Time Spent: 14.5m

/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
  this.stack = [homepage];
  this.position = 1;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
  this.stack = this.stack.slice(0, this.position);
  this.stack.push(url);
  this.position++;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
  while (steps-- > 0)
    this.position--;

  if (this.position < 1)
    this.position = 1;

  return this.stack[this.position - 1];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
  while (steps-- > 0)
    this.position++;

  if (this.position > this.stack.length)
    this.position = this.stack.length;

  return this.stack[this.position - 1];
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
