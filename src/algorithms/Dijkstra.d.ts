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
 * Dijkstra.findShortestPath(graph, 'A', 'E'); // returns { path: ['A', 'C', 'B', 'D', 'E'], distance: 10 }
 */
interface WeightedGraph {
    [key: string]: {
        [key: string]: number;
    };
}
interface PathResult {
    path: string[];
    distance: number;
}
export declare class Dijkstra {
    /**
     * Finds the shortest path between two nodes using Dijkstra's algorithm
     * @param graph - weighted graph as adjacency list
     * @param start - starting node
     * @param end - ending node
     * @returns object containing the shortest path and its distance, or null if no path exists
     */
    static findShortestPath(graph: WeightedGraph, start: string, end: string): PathResult | null;
    /**
     * Finds shortest distances from a start node to all other nodes
     * @param graph - weighted graph as adjacency list
     * @param start - starting node
     * @returns object mapping each node to its shortest distance from start
     */
    static findAllShortestDistances(graph: WeightedGraph, start: string): {
        [key: string]: number;
    };
}
export {};
