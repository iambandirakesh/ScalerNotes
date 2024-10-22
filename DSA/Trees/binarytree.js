class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }
}
let bt = new BinaryTree();
let n1 = new TreeNode(10);
let n2 = new TreeNode(20);
let n3 = new TreeNode(40);
let n4 = new TreeNode(50);
bt.root = n1;
n1.left = n2;
n1.right = n3;
n3.left = n4;
