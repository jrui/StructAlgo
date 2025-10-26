/**
 * Kruskal's Algorithm for finding Minimum Spanning Tree (MST)
 * Kruskal's algorithm finds a minimum spanning tree for a connected weighted graph.
 * It works by sorting all edges and adding them one by one to the MST if they don't form a cycle.
 *
 * Time Complexity: O(E log E) where E is the number of edges
 * Space Complexity: O(V) where V is the number of vertices
 *
 * @example
 * const edges = [
 *   { from: 'A', to: 'B', weight: 4 },
 *   { from: 'A', to: 'C', weight: 2 },
 *   { from: 'B', to: 'C', weight: 1 },
 *   { from: 'B', to: 'D', weight: 5 },
 *   { from: 'C', to: 'D', weight: 8 },
 *   { from: 'C', to: 'E', weight: 10 },
 *   { from: 'D', to: 'E', weight: 2 }
 * ];
 * const vertices = ['A', 'B', 'C', 'D', 'E'];
 * Kruskal.findMST(vertices, edges); // returns MST edges and total weight
 */
interface Edge {
    from: string;
    to: string;
    weight: number;
}
interface MSTResult {
    edges: Edge[];
    totalWeight: number;
}
export declare class Kruskal {
    /**
     * Finds the Minimum Spanning Tree using Kruskal's algorithm
     * @param vertices - array of vertex names
     * @param edges - array of edges with weights
     * @returns object containing MST edges and total weight
     */
    static findMST(vertices: string[], edges: Edge[]): MSTResult;
    /**
     * Checks if a graph is connected (prerequisite for MST)
     * @param vertices - array of vertex names
     * @param edges - array of edges
     * @returns true if graph is connected, false otherwise
     */
    static isConnected(vertices: string[], edges: Edge[]): boolean;
}
export {};
