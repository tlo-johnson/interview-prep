// https://leetcode.com/problems/design-add-and-search-words-data-structure/

class WordDictionary {
  root = { };

  addWord = word => {
    let node = this.root;
    for (let letter of word) {
      node[letter] ||= { };
      node = node[letter];
    }
    node.isWord = true;
  }

  search = (word, node = this.root) => {
    for (let index = 0; index < word.length; index++) {
      const letter = word[index];
      if (letter === '.') {
        const wordEnd = word.slice(++index);
        return Object.values(node).some(n => this.search(wordEnd, n));
      }

      node = node[letter];
      if (!node)
        return false;
    }

    return node.isWord || false;
  }
}
