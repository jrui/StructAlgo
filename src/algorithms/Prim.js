"use strict";
/**
 * Prim's Algorithm for finding Minimum Spanning Tree (MST)
 * Prim's algorithm finds a minimum spanning tree for a connected weighted graph.
 * It works by starting from an arbitrary vertex and greedily adding the minimum
 * weight edge that connects a vertex in the MST to a vertex outside the MST.
 *
 * Time Complexity: O(E log V) where E is edges and V is vertices
 * Space Complexity: O(V)
 *
 * @example
 * const graph = {
 *   'A': { 'B': 4, 'C': 2 },
 *   'B': { 'A': 4, 'C': 1, 'D': 5 },
 *   'C': { 'A': 2, 'B': 1, 'D': 8, 'E': 10 },
 *   'D': { 'B': 5, 'C': 8, 'E': 2 },
 *   'E': { 'C': 10, 'D': 2 }
 * };
 * Prim.findMST(graph, 'A'); // returns MST edges and total weight
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prim = void 0;
class Prim {
    /**
     * Finds the Minimum Spanning Tree using Prim's algorithm
     * @param graph - weighted graph as adjacency list
     * @param start - starting vertex (optional, uses first vertex if not provided)
     * @returns object containing MST edges and total weight
     */
    static findMST(graph, start) {
        const vertices = Object.keys(graph);
        if (vertices.length === 0) {
            return { edges: [], totalWeight: 0 };
        }
        const startVertex = start || vertices[0];
        const visited = new Set();
        const mstEdges = [];
        let totalWeight = 0;
        // Priority queue (array of edges sorted by weight)
        const edges = [];
        // Start with the initial vertex
        visited.add(startVertex);
        this.addEdges(graph, startVertex, visited, edges);
        while (edges.length > 0 && visited.size < vertices.length) {
            // Get edge with minimum weight
            edges.sort((a, b) => a.weight - b.weight);
            const minEdge = edges.shift();
            // Skip if both vertices are already visited
            if (visited.has(minEdge.to)) {
                continue;
            }
            // Add edge to MST
            mstEdges.push(minEdge);
            totalWeight += minEdge.weight;
            visited.add(minEdge.to);
            // Add new edges from the newly visited vertex
            this.addEdges(graph, minEdge.to, visited, edges);
        }
        return {
            edges: mstEdges,
            totalWeight
        };
    }
    /**
     * Helper method to add edges from a vertex to the edge list
     */
    static addEdges(graph, vertex, visited, edges) {
        const neighbors = graph[vertex] || {};
        for (const neighbor in neighbors) {
            if (!visited.has(neighbor)) {
                edges.push({
                    from: vertex,
                    to: neighbor,
                    weight: neighbors[neighbor]
                });
            }
        }
    }
    /**
     * Converts an edge list to a weighted graph (adjacency list)
     * @param edges - array of edges
     * @returns weighted graph as adjacency list
     */
    static edgesToGraph(edges) {
        const graph = {};
        for (const edge of edges) {
            if (!graph[edge.from]) {
                graph[edge.from] = {};
            }
            if (!graph[edge.to]) {
                graph[edge.to] = {};
            }
            graph[edge.from][edge.to] = edge.weight;
            graph[edge.to][edge.from] = edge.weight; // Undirected graph
        }
        return graph;
    }
    /**
     * Finds MST from edge list format
     * @param vertices - array of vertex names
     * @param edges - array of edges
     * @returns object containing MST edges and total weight
     */
    static findMSTFromEdges(vertices, edges) {
        const graph = this.edgesToGraph(edges);
        return this.findMST(graph, vertices[0]);
    }
}
exports.Prim = Prim;
