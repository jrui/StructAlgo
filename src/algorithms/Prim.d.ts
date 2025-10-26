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
interface WeightedGraph {
    [key: string]: {
        [key: string]: number;
    };
}
interface Edge {
    from: string;
    to: string;
    weight: number;
}
interface MSTResult {
    edges: Edge[];
    totalWeight: number;
}
export declare class Prim {
    /**
     * Finds the Minimum Spanning Tree using Prim's algorithm
     * @param graph - weighted graph as adjacency list
     * @param start - starting vertex (optional, uses first vertex if not provided)
     * @returns object containing MST edges and total weight
     */
    static findMST(graph: WeightedGraph, start?: string): MSTResult;
    /**
     * Helper method to add edges from a vertex to the edge list
     */
    private static addEdges;
    /**
     * Converts an edge list to a weighted graph (adjacency list)
     * @param edges - array of edges
     * @returns weighted graph as adjacency list
     */
    static edgesToGraph(edges: Edge[]): WeightedGraph;
    /**
     * Finds MST from edge list format
     * @param vertices - array of vertex names
     * @param edges - array of edges
     * @returns object containing MST edges and total weight
     */
    static findMSTFromEdges(vertices: string[], edges: Edge[]): MSTResult;
}
export {};
