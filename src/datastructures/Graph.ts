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
export class Graph {
    private readonly weightMatrix: Array<Array<number>>;
    private readonly defaultWeight: number;


    constructor(numberOfNodes: number = 32, defaultWeight: number = 0) {
        this.weightMatrix = new Array<Array<number>>(numberOfNodes);
        this.defaultWeight = defaultWeight;

        for (let i = 0; i < numberOfNodes; i++) {
            this.weightMatrix[i] = new Array<number>(numberOfNodes)
                .fill(this.defaultWeight);
        }
    }


    addEdge(source: number, destination: number, weight: number): void {
        this.weightMatrix[source][destination] = weight;
        this.weightMatrix[destination][source] = weight;
    }


    removeEdge(source: number, destination: number): void {
        this.weightMatrix[source][destination] = this.defaultWeight;
        this.weightMatrix[destination][source] = this.defaultWeight;
    }


    isEdge(source: number, destination: number): boolean {
        return this.weightMatrix[source][destination] !== this.defaultWeight;
    }
    
    
    getWeight(source: number, destination: number): number {
        return this.weightMatrix[source][destination];
    }
    
    
    getNeighbors(node: number): number[] {
        const neighbors: number[] = [];
        for (let i = 0; i < this.weightMatrix[node].length; i++) {
            if (this.weightMatrix[node][i] !== this.defaultWeight) {
                neighbors.push(i);
            }
        }
        return neighbors;
    }
    
    
    getAllEdges(): Array<Array<number>> {
        const edges: Array<Array<number>> = [];
        for (let i = 0; i < this.weightMatrix.length; i++) {
            for (let j = 0; j < this.weightMatrix[i].length; j++) {
                if (this.weightMatrix[i][j] !== this.defaultWeight) {
                    edges.push([i, j, this.weightMatrix[i][j]]);
                }
            }
        }
        return edges;
    }
    
    
    getAllNodes(): number[] {
        const nodes: number[] = [];
        for (let i = 0; i < this.weightMatrix.length; i++) {
            nodes.push(i);
        }
        return nodes;
    }
    
    
    getWeightMatrix(): Array<Array<number>> {
        return this.weightMatrix;
    }


    getDefaultWeight(): number {
        return this.defaultWeight;
    }
}
