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
export class DFS {
    /**
     * Performs DFS traversal starting from a given node (iterative)
     * @param graph - adjacency list representation of the graph
     * @param start - starting node
     * @returns array of nodes in DFS order
     */
    static traverse(graph: { [key: string]: string[] }, start: string): string[] {
        const visited = new Set<string>();
        const stack: string[] = [start];
        const result: string[] = [];

        while (stack.length > 0) {
            const node = stack.pop()!;

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
    static traverseRecursive(graph: { [key: string]: string[] }, start: string): string[] {
        const visited = new Set<string>();
        const result: string[] = [];

        const dfs = (node: string) => {
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
    static findPath(graph: { [key: string]: string[] }, start: string, end: string): string[] | null {
        if (start === end) return [start];

        const visited = new Set<string>();
        const stack: Array<{ node: string; path: string[] }> = [{ node: start, path: [start] }];

        while (stack.length > 0) {
            const { node, path } = stack.pop()!;

            if (visited.has(node)) continue;
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
    static findPathRecursive(graph: { [key: string]: string[] }, start: string, end: string): string[] | null {
        const visited = new Set<string>();

        const dfs = (node: string, path: string[]): string[] | null => {
            if (node === end) return path;
            visited.add(node);

            const neighbors = graph[node] || [];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    const result = dfs(neighbor, [...path, neighbor]);
                    if (result) return result;
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
    static hasPath(graph: { [key: string]: string[] }, start: string, end: string): boolean {
        return this.findPath(graph, start, end) !== null;
    }

    /**
     * Detects if a graph has a cycle using DFS
     * @param graph - adjacency list representation of the graph
     * @returns true if the graph has a cycle, false otherwise
     */
    static hasCycle(graph: { [key: string]: string[] }): boolean {
        const visited = new Set<string>();
        const recStack = new Set<string>();

        const hasCycleUtil = (node: string, parent: string | null): boolean => {
            visited.add(node);
            recStack.add(node);

            const neighbors = graph[node] || [];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    if (hasCycleUtil(neighbor, node)) return true;
                } else if (recStack.has(neighbor) && neighbor !== parent) {
                    return true;
                }
            }

            recStack.delete(node);
            return false;
        };

        for (const node in graph) {
            if (!visited.has(node)) {
                if (hasCycleUtil(node, null)) return true;
            }
        }

        return false;
    }
}
