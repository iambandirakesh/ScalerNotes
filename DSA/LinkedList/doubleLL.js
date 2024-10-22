class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
class Dll {
  constructor() {
    this.head = null;
  }
  //traversal
  traversal() {
    let temp = this.head;
    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
    console.log("Reverse Traversal");
    let a = this.head;
    while (a.next != null) {
      a = a.next;
    }
    while (a != null) {
      console.log(a.data);
      a = a.prev;
    }
  }
  insertAtBeggining(data) {
    let temp = this.head;
    let newNode = new Node(data);
    newNode.next = temp;
    temp.prev = newNode;
    this.head = newNode;
  }
  insertAtEnd(data) {
    let temp = this.head;
    let newNode = new Node(data);
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = newNode;
    newNode.prev = temp;
  }
  insertAtAny(data, position) {
    let temp = this.head;
    let newNode = new Node(data);
    for (let i = 1; i < position - 1; i++) {
      temp = temp.next;
    }
    let val = temp.next.next;
    temp.next = newNode;
    newNode.prev = temp;
    newNode.next = val;
    val.prev = newNode;
  }
}
let dll = new Dll();
let n1 = new Node(10);
let n2 = new Node(11);
let n3 = new Node(12);
let n4 = new Node(13);
let n5 = new Node(14);
dll.head = n1;
n1.next = n2;
n2.prev = n1;
n2.next = n3;
n3.prev = n2;
n3.next = n4;
n4.prev = n3;
n4.next = n5;
n5.prev = n4;
// dll.traversal();
dll.insertAtBeggining(0);
dll.insertAtEnd(99);
dll.insertAtAny(66, 3);
dll.traversal();
