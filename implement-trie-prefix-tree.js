// https://leetcode.com/problems/implement-trie-prefix-tree/
// Time spent: 15.5m

var Trie = function() {
  this.nodes = {};
  return this;
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  const firstCharacter = word[0];
  this.nodes[firstCharacter] ||= { };

  let node = this.nodes[firstCharacter];
  for (let index = 1; index < word.length; index++) {
    const character = word[index];
    node[character] ||= { };
    node = node[character];
  }

  node.isWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let node = this.nodes;

  for (let index = 0; index < word.length; index++) {
    const character = word[index];
    node = node[character];
    if (!node)
      return false;
  }

  return node.isWord || false;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let node = this.nodes;

  for (let index = 0; index < prefix.length; index++) {
    const character = prefix[index];
    node = node[character];
    if (!node)
      return false;
  }

  return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
