class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element, priority) {
    const queueElement = { element, priority };

    if (this.isEmpty()) {
      this.items.push(queueElement);
    } else {
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      if (!added) {
        this.items.push(queueElement);
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift().element;
  }

  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0].element;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

// Example usage
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Task 1", 2);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 3);
console.log(priorityQueue.front()); // Output: "Task 2"
console.log(priorityQueue.dequeue()); // Output: "Task 2"
console.log(priorityQueue.size()); // Output: 2
