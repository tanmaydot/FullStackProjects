class Graph {
  constructor() {
    this.vertices = [];
    this.edges = {};
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
    this.edges[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.edges[vertex1].push(vertex2);
    this.edges[vertex2].push(vertex1);
  }

  dfs(startVertex) {
    const visited = new Set();
    this._dfsRecursive(startVertex, visited);
  }

  _dfsRecursive(vertex, visited) {
    visited.add(vertex);
    console.log(vertex);

    const neighbors = this.edges[vertex];
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        this._dfsRecursive(neighbor, visited);
      }
    }
  }
}

// Example usage
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.dfs("A");
