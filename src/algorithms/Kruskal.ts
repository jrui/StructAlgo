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

class UnionFind {
    private parent: Map<string, string>;
    private rank: Map<string, number>;

    constructor(vertices: string[]) {
        this.parent = new Map();
        this.rank = new Map();
        
        for (const vertex of vertices) {
            this.parent.set(vertex, vertex);
            this.rank.set(vertex, 0);
        }
    }

    find(x: string): string {
        if (this.parent.get(x) !== x) {
            this.parent.set(x, this.find(this.parent.get(x)!));
        }
        return this.parent.get(x)!;
    }

    union(x: string, y: string): boolean {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX === rootY) {
            return false;
        }

        const rankX = this.rank.get(rootX)!;
        const rankY = this.rank.get(rootY)!;

        if (rankX < rankY) {
            this.parent.set(rootX, rootY);
        } else if (rankX > rankY) {
            this.parent.set(rootY, rootX);
        } else {
            this.parent.set(rootY, rootX);
            this.rank.set(rootX, rankX + 1);
        }

        return true;
    }
}

export class Kruskal {
    /**
     * Finds the Minimum Spanning Tree using Kruskal's algorithm
     * @param vertices - array of vertex names
     * @param edges - array of edges with weights
     * @returns object containing MST edges and total weight
     */
    static findMST(vertices: string[], edges: Edge[]): MSTResult {
        // Sort edges by weight
        const sortedEdges = [...edges].sort((a, b) => a.weight - b.weight);
        
        const unionFind = new UnionFind(vertices);
        const mstEdges: Edge[] = [];
        let totalWeight = 0;

        for (const edge of sortedEdges) {
            // Add edge if it doesn't create a cycle
            if (unionFind.union(edge.from, edge.to)) {
                mstEdges.push(edge);
                totalWeight += edge.weight;
                
                // MST is complete when we have V-1 edges
                if (mstEdges.length === vertices.length - 1) {
                    break;
                }
            }
        }

        return {
            edges: mstEdges,
            totalWeight
        };
    }

    /**
     * Checks if a graph is connected (prerequisite for MST)
     * @param vertices - array of vertex names
     * @param edges - array of edges
     * @returns true if graph is connected, false otherwise
     */
    static isConnected(vertices: string[], edges: Edge[]): boolean {
        if (vertices.length === 0) return true;
        if (edges.length === 0) return vertices.length === 1;

        const unionFind = new UnionFind(vertices);
        
        for (const edge of edges) {
            unionFind.union(edge.from, edge.to);
        }

        const root = unionFind.find(vertices[0]);
        for (let i = 1; i < vertices.length; i++) {
            if (unionFind.find(vertices[i]) !== root) {
                return false;
            }
        }

        return true;
    }
}
