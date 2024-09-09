class Graph {
  constructor(numVertices) {
    this.numVertices = numVertices;
    this.matrix = [];

    for (let i = 0; i < numVertices; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < numVertices; j++) {
        this.matrix[i][j] = 0;
      }
    }
  }

  addEdge(vertex1, vertex2) {
    this.matrix[vertex1][vertex2] = 1;
    this.matrix[vertex2][vertex1] = 1;
  }
}

// Example usage
const graph = new Graph(4);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
