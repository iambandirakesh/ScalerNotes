class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Sll {
  constructor() {
    this.head = null;
  }
  traversal() {
    let temp = this.head;
    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}
let sll = new Sll();
let n1 = new Node(10);
let n2 = new Node(20);
let n3 = new Node(30);
let n4 = new Node(40);
sll.head = n1;
n1.next = n2;
n2.next = n3;
n3.next = n4;
sll.traversal();
