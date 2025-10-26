/**
 * Breadth-First Search (BFS) algorithm
 * BFS is an algorithm for traversing or searching tree or graph data structures.
 * It starts at a chosen node and explores all neighbor nodes at the present depth
 * before moving on to nodes at the next depth level.
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
 * BFS.traverse(graph, 'A'); // returns ['A', 'B', 'C', 'D', 'E', 'F']
 * BFS.findPath(graph, 'A', 'F'); // returns ['A', 'C', 'F']
 */
export class BFS {
    /**
     * Performs BFS traversal starting from a given node
     * @param graph - adjacency list representation of the graph
     * @param start - starting node
     * @returns array of nodes in BFS order
     */
    static traverse(graph: { [key: string]: string[] }, start: string): string[] {
        const visited = new Set<string>();
        const queue: string[] = [start];
        const result: string[] = [];

        visited.add(start);

        while (queue.length > 0) {
            const node = queue.shift()!;
            result.push(node);

            const neighbors = graph[node] || [];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }

        return result;
    }

    /**
     * Finds shortest path between two nodes using BFS
     * @param graph - adjacency list representation of the graph
     * @param start - starting node
     * @param end - ending node
     * @returns array representing the shortest path, or null if no path exists
     */
    static findPath(graph: { [key: string]: string[] }, start: string, end: string): string[] | null {
        if (start === end) return [start];

        const visited = new Set<string>();
        const queue: Array<{ node: string; path: string[] }> = [{ node: start, path: [start] }];
        visited.add(start);

        while (queue.length > 0) {
            const { node, path } = queue.shift()!;

            const neighbors = graph[node] || [];
            for (const neighbor of neighbors) {
                if (neighbor === end) {
                    return [...path, neighbor];
                }

                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push({ node: neighbor, path: [...path, neighbor] });
                }
            }
        }

        return null; // No path found
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
     * Finds all nodes at a given distance from the start node
     * @param graph - adjacency list representation of the graph
     * @param start - starting node
     * @param distance - distance from start node
     * @returns array of nodes at the given distance
     */
    static nodesAtDistance(graph: { [key: string]: string[] }, start: string, distance: number): string[] {
        if (distance === 0) return [start];

        const visited = new Set<string>();
        const queue: Array<{ node: string; dist: number }> = [{ node: start, dist: 0 }];
        const result: string[] = [];
        visited.add(start);

        while (queue.length > 0) {
            const { node, dist } = queue.shift()!;

            if (dist === distance) {
                result.push(node);
                continue;
            }

            if (dist < distance) {
                const neighbors = graph[node] || [];
                for (const neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        visited.add(neighbor);
                        queue.push({ node: neighbor, dist: dist + 1 });
                    }
                }
            }
        }

        return result;
    }
}
