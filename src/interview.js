<<<<<<< HEAD
var TreeNode = function (val) {
  this.val = val;
  this.map = new Map();
  this.isComplete = false;
}

/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
  this.root = new TreeNode(null);
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let curr = this.root;
  for (let i = 0; i < word.length; i++) {
    if (curr.map.has(word[i])) {
      curr = curr.map.get(word[i]);
    } else {
      curr.map.set(word[i], new TreeNode(word[i]));
      curr = curr.map.get(word[i]);
    }
    if (i + 1 === word.length) {
      curr.isComplete = true;
    }
=======
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function (s) {
  s = s.reverse();
  for (let i = 0, j = 0; i < s.length, j < s.length;) {
    while (s[j] && s[j] !== ' ') {
      j++;
    };
    let nextStart = j + 1;
    j--;
    swap(s, i, j);
    i = nextStart;
    j = nextStart;
  }
};

const swap = function (s, i, j) {
  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
>>>>>>> dbf3157441cc55fe0972a22e188112ea172d38ad
  }
};

<<<<<<< HEAD
/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  var helper = function (node, word) {
    if (word.length === 0) return node.isComplete;
    if (word[0] === '.') {
      let children = node.map.values();
      let res = false;
      for (let child of children) {
        res = res || helper(child, word.slice(1));
      }
      return res;
    } else {
      if (node.map.has(word[0])) {
        return helper(node.map.get(word[0]), word.slice(1));
      } else {
        return false;
      }
    }
  }
  return helper(this.root, word);
};

let dic = new WordDictionary();
dic.addWord("at");
dic.addWord("and");
dic.addWord("an");
dic.addWord("add");
dic.search("a");
=======
reverseWords(["t", "h", "e", " ", "s", "k", "y", " ", "i", "s", " ", "b", "l", "u", "e"])
>>>>>>> dbf3157441cc55fe0972a22e188112ea172d38ad
