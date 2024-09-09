// Linked List implementation
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Methods...
}

// Array List implementation
class ArrayList {
  constructor() {
    this.elements = [];
  }

  // Methods...
}

// Example usage
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

const arrayList = new ArrayList();
arrayList.push(1);
arrayList.push(2);
arrayList.push(3);
