class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  print() {
    let current = this.head;
    let result = "";

    while (current) {
      result += current.data + " <-> ";
      current = current.next;
    }

    result += "null";
    console.log(result);
  }
}

// Example usage
const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.append(1);
doublyLinkedList.append(2);
doublyLinkedList.append(3);
doublyLinkedList.prepend(0);
doublyLinkedList.print();
