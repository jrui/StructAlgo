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
var Graph = /** @class */ (function () {
    function Graph(numberOfNodes, defaultWeight) {
        if (numberOfNodes === void 0) { numberOfNodes = 32; }
        if (defaultWeight === void 0) { defaultWeight = 0; }
        this.weightMatrix = new Array(numberOfNodes);
        this.defaultWeight = defaultWeight;
        for (var i = 0; i < numberOfNodes; i++) {
            this.weightMatrix[i] = new Array(numberOfNodes)
                .fill(this.defaultWeight);
        }
    }
    Graph.prototype.addEdge = function (source, destination, weight) {
        this.weightMatrix[source][destination] = weight;
        this.weightMatrix[destination][source] = weight;
    };
    Graph.prototype.removeEdge = function (source, destination) {
        this.weightMatrix[source][destination] = this.defaultWeight;
        this.weightMatrix[destination][source] = this.defaultWeight;
    };
    Graph.prototype.isEdge = function (source, destination) {
        return this.weightMatrix[source][destination] !== this.defaultWeight;
    };
    Graph.prototype.getWeight = function (source, destination) {
        return this.weightMatrix[source][destination];
    };
    Graph.prototype.getNeighbors = function (node) {
        var neighbors = [];
        for (var i = 0; i < this.weightMatrix[node].length; i++) {
            if (this.weightMatrix[node][i] !== this.defaultWeight) {
                neighbors.push(i);
            }
        }
        return neighbors;
    };
    Graph.prototype.getAllEdges = function () {
        var edges = [];
        for (var i = 0; i < this.weightMatrix.length; i++) {
            for (var j = 0; j < this.weightMatrix[i].length; j++) {
                if (this.weightMatrix[i][j] !== this.defaultWeight) {
                    edges.push([i, j, this.weightMatrix[i][j]]);
                }
            }
        }
        return edges;
    };
    Graph.prototype.getAllNodes = function () {
        var nodes = [];
        for (var i = 0; i < this.weightMatrix.length; i++) {
            nodes.push(i);
        }
        return nodes;
    };
    Graph.prototype.getWeightMatrix = function () {
        return this.weightMatrix;
    };
    Graph.prototype.getDefaultWeight = function () {
        return this.defaultWeight;
    };
    return Graph;
}());
exports.Graph = Graph;
