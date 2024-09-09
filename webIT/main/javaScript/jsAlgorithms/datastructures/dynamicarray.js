class DynamicArray {
  constructor() {
    this.length = 0;
    this.capacity = 1;
    this.elements = new Array(this.capacity);
  }

  get(index) {
    if (index >= 0 && index < this.length) {
      return this.elements[index];
    }
    return null;
  }

  set(index, value) {
    if (index >= 0 && index < this.length) {
      this.elements[index] = value;
    }
  }

  push(value) {
    if (this.length === this.capacity) {
      this._resize();
    }
    this.elements[this.length] = value;
    this.length++;
  }

  pop() {
    if (this.length > 0) {
      const value = this.elements[this.length - 1];
      this.length--;
      return value;
    }
    return null;
  }

  _resize() {
    this.capacity *= 2;
    const newArray = new Array(this.capacity);
    for (let i = 0; i < this.length; i++) {
      newArray[i] = this.elements[i];
    }
    this.elements = newArray;
  }
}

// Example usage
const dynamicArray = new DynamicArray();
dynamicArray.push(1);
dynamicArray.push(2);
dynamicArray.push(3);
console.log(dynamicArray.get(1)); // Output: 2
console.log(dynamicArray.pop()); // Output: 3
