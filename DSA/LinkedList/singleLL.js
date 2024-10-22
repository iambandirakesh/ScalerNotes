//Creaate a linked list

// Creating the Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
// Creating the SingleLinked List class
class Sll {
  constructor() {
    this.head = null;
  }
  // Traversal
  traversal() {
    let temp = this.head;
    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
  // Insertion at the beginning
  insertAtBeginning(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  // Insertion at the end
  insertAtEnd(data) {
    let newNode = new Node(data);
    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = newNode;
  }
  // Insertion at the middle
  insertAtAny(data, position) {
    let newNode = new Node(data);
    let temp = this.head;
    while (position - 1 > 1) {
      temp = temp.next;
      position--;
    }
    let val = temp.next.next;
    temp.next = newNode;
    newNode.next = val;
  }
  // Deletion at the beginning
  deleteAtBeginning() {
    let temp = this.head;
    this.head = temp.next;
  }
  // Deletion at the end
  deleteAtEnd() {
    let temp = this.head;
    while (temp.next.next != null) {
      temp = temp.next;
    }
    temp.next = null;
  }
  // Deletion at the middle
  deleteAtAny(position) {
    let temp = this.head;
    for (let i = 1; i < position - 1; i++) {
      temp = temp.next;
    }
    temp.next = temp.next.next;
  }
}
// Creating the object of the class
let sll = new Sll();
let n1 = new Node(10);
let n2 = new Node(20);
let n3 = new Node(30);
let n4 = new Node(40);
let n5 = new Node(50);
sll.head = n1;
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
// sll.traversal();
// sll.insertAtBeginning(78);
// sll.traversal();
sll.insertAtEnd(21);
// sll.traversal();
sll.insertAtAny(100, 3);
sll.traversal();
// sll.deleteAtBeginning();
// sll.traversal();
// sll.deleteAtEnd();
// sll.traversal();
sll.deleteAtAny(4);
console.log("After Deletion");
sll.traversal();
