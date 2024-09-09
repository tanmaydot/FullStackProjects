class HashTable {
  constructor() {
    this.table = {};
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  }

  put(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = {};
    }
    this.table[index][key] = value;
  }

  get(key) {
    const index = this.hash(key);
    if (this.table[index] && this.table[index][key]) {
      return this.table[index][key];
    }
    return null;
  }

  remove(key) {
    const index = this.hash(key);
    if (this.table[index] && this.table[index][key]) {
      delete this.table[index][key];
    }
  }
}

// Example usage
const hashTable = new HashTable();
hashTable.put("name", "John");
hashTable.put("age", 25);
console.log(hashTable.get("name")); // Output: "John"
hashTable.remove("age");
console.log(hashTable.get("age")); // Output: null
