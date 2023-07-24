// https://www.algoexpert.io/questions/suffix-trie-construction

// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.
class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

  // time: O(n^2)
  // space: O(n^2)
  populateSuffixTrieFrom(str) {
    for (let index = 0; index < str.length; index++)
      this.populateSuffixTreeHelper(str, index);
  }

  // time: O(n)
  // space: O(n)
  populateSuffixTreeHelper(str, index) {
    let node = this.root;
    while (index < str.length) {
      const character = str[index++];
      node[character] = node[character] || {};
      node = node[character];
    }
    node[this.endSymbol] = true;
  }

  // time: O(n)
  // space: O(1)
  contains(str) {
    let node = this.root;
    for (let character of str) {
      if (!node[character]) return false;
      node = node[character];
    }
    return node[this.endSymbol] || false;
  }
}

// Do not edit the line below.
exports.SuffixTrie = SuffixTrie;
