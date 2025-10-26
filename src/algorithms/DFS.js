"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DFS = void 0;
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
class DFS {
    /**
     * Performs DFS traversal starting from a given node (iterative)
     * @param graph - adjacency list representation of the graph
     * @param start - starting node
     * @returns array of nodes in DFS order
     */
    static traverse(graph, start) {
        const visited = new Set();
        const stack = [start];
        const result = [];
        while (stack.length > 0) {
            const node = stack.pop();
            if (!visited.has(node)) {
                visited.add(node);
                result.push(node);
                const neighbors = graph[node] || [];
                // Push neighbors in reverse order to maintain left-to-right traversal
                for (let i = neighbors.length - 1; i >= 0; i--) {
                    if (!visited.has(neighbors[i])) {
                        stack.push(neighbors[i]);
                    }
                }
            }
        }
        return result;
    }
    /**
     * Performs DFS traversal starting from a given node (recursive)
     * @param graph - adjacency list representation of the graph
     * @param start - starting node
     * @returns array of nodes in DFS order
     */
    static traverseRecursive(graph, start) {
        const visited = new Set();
        const result = [];
        const dfs = (node) => {
            visited.add(node);
            result.push(node);
            const neighbors = graph[node] || [];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }
        };
        dfs(start);
        return result;
    }
    /**
     * Finds a path between two nodes using DFS
     * @param graph - adjacency list representation of the graph
     * @param start - starting node
     * @param end - ending node
     * @returns array representing a path, or null if no path exists
     */
    static findPath(graph, start, end) {
        if (start === end)
            return [start];
        const visited = new Set();
        const stack = [{ node: start, path: [start] }];
        while (stack.length > 0) {
            const { node, path } = stack.pop();
            if (visited.has(node))
                continue;
            visited.add(node);
            const neighbors = graph[node] || [];
            for (const neighbor of neighbors) {
                if (neighbor === end) {
                    return [...path, neighbor];
                }
                if (!visited.has(neighbor)) {
                    stack.push({ node: neighbor, path: [...path, neighbor] });
                }
            }
        }
        return null; // No path found
    }
    /**
     * Finds a path between two nodes using DFS (recursive)
     * @param graph - adjacency list representation of the graph
     * @param start - starting node
     * @param end - ending node
     * @returns array representing a path, or null if no path exists
     */
    static findPathRecursive(graph, start, end) {
        const visited = new Set();
        const dfs = (node, path) => {
            if (node === end)
                return path;
            visited.add(node);
            const neighbors = graph[node] || [];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    const result = dfs(neighbor, [...path, neighbor]);
                    if (result)
                        return result;
                }
            }
            return null;
        };
        return dfs(start, [start]);
    }
    /**
     * Checks if there is a path between two nodes
     * @param graph - adjacency list representation of the graph
     * @param start - starting node
     * @param end - ending node
     * @returns true if a path exists, false otherwise
     */
    static hasPath(graph, start, end) {
        return this.findPath(graph, start, end) !== null;
    }
    /**
     * Detects if a graph has a cycle using DFS
     * @param graph - adjacency list representation of the graph
     * @returns true if the graph has a cycle, false otherwise
     */
    static hasCycle(graph) {
        const visited = new Set();
        const recStack = new Set();
        const hasCycleUtil = (node, parent) => {
            visited.add(node);
            recStack.add(node);
            const neighbors = graph[node] || [];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    if (hasCycleUtil(neighbor, node))
                        return true;
                }
                else if (recStack.has(neighbor) && neighbor !== parent) {
                    return true;
                }
            }
            recStack.delete(node);
            return false;
        };
        for (const node in graph) {
            if (!visited.has(node)) {
                if (hasCycleUtil(node, null))
                    return true;
            }
        }
        return false;
    }
}
exports.DFS = DFS;
