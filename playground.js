var copyRandomList = function(head) {
  
  let hashTable = new Map();
  let curr = head;
  while (curr !== null) {
    hashTable.set(curr, new Node(curr.val, null, null));
    curr = curr.next;
  }
  curr = head;
  while (curr !== null) {
    hashTable.get(curr).next = hashTable.get(curr.next) ? hashTable.get(curr.next) : null;
    hashTable.get(curr).random = hashTable.get(curr.random) ? hashTable.get(curr.random) : null;
    curr = curr.next;
  }
  return hashTable.get(head);
};

function Node(val,next,random) {
   this.val = val;
   this.next = next;
   this.random = random;
};

let node1 = new Node(1, null, null);
let node2 = new Node(2, null, null);
node1.next = node2;
node1.random = node2;
node2.random = node2;


let newHead = copyRandomList(node1);
console.log(newHead)
