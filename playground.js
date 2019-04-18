var Node = function (key, value) {
  this.key = key;
  this.value = value;
  this.next = null;
  this.prev = null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.limit = capacity;
  this.head = null;
  this.tail = null;
  this.size = 0;
  this.cache = {};
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (keyFromPara) {
  if (!this.cache[keyFromPara]) return -1;
  let node = this.cache[keyFromPara];
  const { key, value } = node;
  this.remove(key);
  this.addToHead(new Node(key, value));
  return value;
};

LRUCache.prototype.remove = function (key) {
  let node = this.cache[key];
  const { prev, next } = node;
  if (prev && next) {
    prev.next = node.next;
    next.prev = node.prev;
  } else if (prev) {
    prev.next = null;
    this.tail = prev;
  } else if (next) {
    next.prev = null;
    this.head = next;
  } else {
    this.head = null;
    this.tail = null;
  }
  delete this.cache[key];
  this.size--;
}

LRUCache.prototype.addToHead = function (node) {
  node.next = this.head;
  const { key } = node;
  let currentHead = this.head;
  if (currentHead) {
    currentHead.prev = node;
  }
  this.head = node;
  if (!this.tail) {
    this.tail = node;
  }
  this.cache[key] = node;
  this.size++;
}

LRUCache.prototype.removeFromTail = function () {
  let tail = this.tail;
  const { key, prev } = tail;
  if (prev === null) {
    this.head = null;
    this.tail = null;
  } else {
    prev.next = null;
    this.tail = prev;
  }
  delete this.cache[key];
  this.size--;
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache[key]) {
    this.remove(key);
    this.addToHead(new Node(key, value));
  } else {
    if (this.size >= this.limit) {
      this.removeFromTail();
    }
    this.addToHead(new Node(key, value));
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

 let cache = new LRUCache(10);
// let options = [[10, 13], [3, 17], [6, 11], [10, 5], [9, 10], [13], [2, 19], [2], [3], [5, 25], [8], [9, 22], [5, 5], [1, 30], [11], [9, 12], [7], [5], [8], [9], [4, 30], [9, 3], [9], [10], [10], [6, 14], [3, 1], [3], [10, 11], [8], [2, 14], [1], [5], [4], [11, 4], [12, 24], [5, 18], [13], [7, 23], [8], [12], [3, 27], [2, 12], [5], [2, 9], [13, 4], [8, 18], [1, 7], [6], [9, 29], [8, 21], [5], [6, 30], [1, 12], [10], [4, 15], [7, 22], [11, 26], [8, 17], [9, 29], [5], [3, 4], [11, 30], [12], [4, 29], [3], [9], [6], [3, 4], [1], [10], [3, 29], [10, 28], [1, 20], [11, 13], [3], [3, 12], [3, 8], [10, 9], [3, 26], [8], [7], [5], [13, 17], [2, 27], [11, 15], [12], [9, 19], [2, 15], [3, 16], [1], [12, 17], [9, 1], [6, 19], [4], [5], [5], [8, 1], [11, 7], [5, 2], [9, 28], [1], [2, 2], [7, 4], [4, 22], [7, 24], [9, 26], [13, 28], [11, 26]];
let options = [[2], [2, 1], [1, 1], [2], [4, 1], [1], [2]]
 for (let option of options) {
   if (option.length === 2) {
     cache.put(option[0], option[1]);
   } else {
     cache.get(option[0]);
   }
 }
 