// Node definition for a binary tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// In-order traversal
function inOrderTraversal(node) {
  if (node !== null) {
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
  }
}

// Pre-order traversal
function preOrderTraversal(node) {
  if (node !== null) {
    console.log(node.value);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
  }
}

// Post-order traversal
function postOrderTraversal(node) {
  if (node !== null) {
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    console.log(node.value);
  }
}

// Example usage
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("In-order traversal:");
inOrderTraversal(root);

console.log("Pre-order traversal:");
preOrderTraversal(root);

console.log("Post-order traversal:");
postOrderTraversal(root);
