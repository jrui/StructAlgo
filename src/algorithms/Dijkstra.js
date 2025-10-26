"use strict";
/**
 * Dijkstra's Algorithm for finding shortest paths
 * Dijkstra's algorithm finds the shortest path between nodes in a weighted graph.
 * It works by maintaining a set of unvisited nodes and repeatedly selecting the
 * unvisited node with the smallest distance from the start.
 *
 * Time Complexity: O((V + E) log V) with priority queue
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
 * Dijkstra.findShortestPath(graph, 'A', 'E'); // returns { path: ['A', 'C', 'B', 'D', 'E'], distance: 9 }
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dijkstra = void 0;
class Dijkstra {
    /**
     * Finds the shortest path between two nodes using Dijkstra's algorithm
     * @param graph - weighted graph as adjacency list
     * @param start - starting node
     * @param end - ending node
     * @returns object containing the shortest path and its distance, or null if no path exists
     */
    static findShortestPath(graph, start, end) {
        const distances = {};
        const previous = {};
        const unvisited = new Set();
        // Initialize distances
        for (const node in graph) {
            distances[node] = node === start ? 0 : Infinity;
            previous[node] = null;
            unvisited.add(node);
        }
        while (unvisited.size > 0) {
            // Find unvisited node with minimum distance
            let current = null;
            let minDistance = Infinity;
            for (const node of unvisited) {
                if (distances[node] < minDistance) {
                    minDistance = distances[node];
                    current = node;
                }
            }
            if (current === null || distances[current] === Infinity) {
                break; // Remaining nodes are unreachable
            }
            unvisited.delete(current);
            // If we reached the destination, we can stop
            if (current === end) {
                break;
            }
            // Update distances to neighbors
            const neighbors = graph[current] || {};
            for (const neighbor in neighbors) {
                if (unvisited.has(neighbor)) {
                    const newDistance = distances[current] + neighbors[neighbor];
                    if (newDistance < distances[neighbor]) {
                        distances[neighbor] = newDistance;
                        previous[neighbor] = current;
                    }
                }
            }
        }
        // Build path
        if (distances[end] === Infinity) {
            return null; // No path exists
        }
        const path = [];
        let current = end;
        while (current !== null) {
            path.unshift(current);
            current = previous[current];
        }
        return {
            path,
            distance: distances[end]
        };
    }
    /**
     * Finds shortest distances from a start node to all other nodes
     * @param graph - weighted graph as adjacency list
     * @param start - starting node
     * @returns object mapping each node to its shortest distance from start
     */
    static findAllShortestDistances(graph, start) {
        const distances = {};
        const unvisited = new Set();
        // Initialize distances
        for (const node in graph) {
            distances[node] = node === start ? 0 : Infinity;
            unvisited.add(node);
        }
        while (unvisited.size > 0) {
            // Find unvisited node with minimum distance
            let current = null;
            let minDistance = Infinity;
            for (const node of unvisited) {
                if (distances[node] < minDistance) {
                    minDistance = distances[node];
                    current = node;
                }
            }
            if (current === null || distances[current] === Infinity) {
                break; // Remaining nodes are unreachable
            }
            unvisited.delete(current);
            // Update distances to neighbors
            const neighbors = graph[current] || {};
            for (const neighbor in neighbors) {
                if (unvisited.has(neighbor)) {
                    const newDistance = distances[current] + neighbors[neighbor];
                    if (newDistance < distances[neighbor]) {
                        distances[neighbor] = newDistance;
                    }
                }
            }
        }
        return distances;
    }
}
exports.Dijkstra = Dijkstra;
