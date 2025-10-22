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
export declare class Graph {
    private readonly weightMatrix;
    private readonly defaultWeight;
    constructor(numberOfNodes?: number, defaultWeight?: number);
    addEdge(source: number, destination: number, weight: number): void;
    removeEdge(source: number, destination: number): void;
    isEdge(source: number, destination: number): boolean;
    getWeight(source: number, destination: number): number;
    getNeighbors(node: number): number[];
    getAllEdges(): Array<Array<number>>;
    getAllNodes(): number[];
    getWeightMatrix(): Array<Array<number>>;
    getDefaultWeight(): number;
}
