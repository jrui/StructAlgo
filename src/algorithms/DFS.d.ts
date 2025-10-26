/**
 * Depth-First Search (DFS) algorithm
 * DFS is an algorithm for traversing or searching tree or graph data structures.
 * It starts at a chosen node and explores as far as possible along each branch
 * before backtracking.
 *
 * Time Complexity: O(V + E) where V is vertices and E is edges
 * Space Complexity: O(V)
 *
 * @example
 * const graph = {
 *   'A': ['B', 'C'],
 *   'B': ['A', 'D', 'E'],
 *   'C': ['A', 'F'],
 *   'D': ['B'],
 *   'E': ['B', 'F'],
 *   'F': ['C', 'E']
 * };
 * DFS.traverse(graph, 'A'); // returns nodes in DFS order
 * DFS.findPath(graph, 'A', 'F'); // returns a path from A to F
 */
export declare class DFS {
    /**
     * Performs DFS traversal starting from a given node (iterative)
     * @param graph - adjacency list representation of the graph
     * @param start - starting node
     * @returns array of nodes in DFS order
     */
    static traverse(graph: {
        [key: string]: string[];
    }, start: string): string[];
    /**
     * Performs DFS traversal starting from a given node (recursive)
     * @param graph - adjacency list representation of the graph
     * @param start - starting node
     * @returns array of nodes in DFS order
     */
    static traverseRecursive(graph: {
        [key: string]: string[];
    }, start: string): string[];
    /**
     * Finds a path between two nodes using DFS
     * @param graph - adjacency list representation of the graph
     * @param start - starting node
     * @param end - ending node
     * @returns array representing a path, or null if no path exists
     */
    static findPath(graph: {
        [key: string]: string[];
    }, start: string, end: string): string[] | null;
    /**
     * Finds a path between two nodes using DFS (recursive)
     * @param graph - adjacency list representation of the graph
     * @param start - starting node
     * @param end - ending node
     * @returns array representing a path, or null if no path exists
     */
    static findPathRecursive(graph: {
        [key: string]: string[];
    }, start: string, end: string): string[] | null;
    /**
     * Checks if there is a path between two nodes
     * @param graph - adjacency list representation of the graph
     * @param start - starting node
     * @param end - ending node
     * @returns true if a path exists, false otherwise
     */
    static hasPath(graph: {
        [key: string]: string[];
    }, start: string, end: string): boolean;
    /**
     * Detects if a graph has a cycle using DFS
     * @param graph - adjacency list representation of the graph
     * @returns true if the graph has a cycle, false otherwise
     */
    static hasCycle(graph: {
        [key: string]: string[];
    }): boolean;
}
