"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = void 0;
/**
 * A Graph structure is useful for modeling relationships and connections between multiple entities.
 * They consist of a set of vertices (also known as nodes) and  edges, which connect the vertices together.
 *
 * @example
 * const graph = new Graph(5);
 * graph.addEdge(0, 1, 2);
 * graph.addEdge(1, 2, 3);
 * graph.addEdge(2, 3, 4);
 *
 * graph.getWeight(0, 1); // 2
 * graph.getNeighbors(1); // [0, 2]
 * graph.getAllEdges(); // [[0, 1, 2], [1, 2, 3], [2, 3, 4]]
 * graph.getAllNodes(); // [0, 1, 2, 3]
 */
class Graph {
    constructor(numberOfNodes = 32, defaultWeight = 0) {
        this.weightMatrix = new Array(numberOfNodes);
        this.defaultWeight = defaultWeight;
        for (let i = 0; i < numberOfNodes; i++) {
            this.weightMatrix[i] = new Array(numberOfNodes)
                .fill(this.defaultWeight);
        }
    }
    addEdge(source, destination, weight) {
        this.weightMatrix[source][destination] = weight;
        this.weightMatrix[destination][source] = weight;
    }
    removeEdge(source, destination) {
        this.weightMatrix[source][destination] = this.defaultWeight;
        this.weightMatrix[destination][source] = this.defaultWeight;
    }
    isEdge(source, destination) {
        return this.weightMatrix[source][destination] !== this.defaultWeight;
    }
    getWeight(source, destination) {
        return this.weightMatrix[source][destination];
    }
    getNeighbors(node) {
        const neighbors = [];
        for (let i = 0; i < this.weightMatrix[node].length; i++) {
            if (this.weightMatrix[node][i] !== this.defaultWeight) {
                neighbors.push(i);
            }
        }
        return neighbors;
    }
    getAllEdges() {
        const edges = [];
        for (let i = 0; i < this.weightMatrix.length; i++) {
            for (let j = 0; j < this.weightMatrix[i].length; j++) {
                if (this.weightMatrix[i][j] !== this.defaultWeight) {
                    edges.push([i, j, this.weightMatrix[i][j]]);
                }
            }
        }
        return edges;
    }
    getAllNodes() {
        const nodes = [];
        for (let i = 0; i < this.weightMatrix.length; i++) {
            nodes.push(i);
        }
        return nodes;
    }
    getWeightMatrix() {
        return this.weightMatrix;
    }
    getDefaultWeight() {
        return this.defaultWeight;
    }
}
exports.Graph = Graph;
