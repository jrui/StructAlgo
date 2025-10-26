/**
 * Disjoint Set (Union-Find) data structure
 * A disjoint-set data structure (also called union-find) keeps track of a set of elements
 * partitioned into a number of disjoint (non-overlapping) subsets.
 * It supports two operations: union (join two subsets) and find (determine which subset an element is in).
 *
 * @example
 * const ds = new DisjointSet(5);
 * ds.union(0, 1);
 * ds.union(2, 3);
 * ds.isConnected(0, 1); // true
 * ds.isConnected(0, 2); // false
 * ds.union(1, 2);
 * ds.isConnected(0, 3); // true
 */
export declare class DisjointSet {
    private parent;
    private rank;
    private count;
    /**
     * Creates a new Disjoint Set with n elements (0 to n-1)
     */
    constructor(size: number);
    /**
     * Finds the root of the set containing element x
     * Uses path compression for optimization
     */
    find(x: number): number;
    /**
     * Unites the sets containing elements x and y
     * Uses union by rank for optimization
     */
    union(x: number, y: number): boolean;
    /**
     * Checks if elements x and y are in the same set
     */
    isConnected(x: number, y: number): boolean;
    /**
     * Returns the number of disjoint sets
     */
    getCount(): number;
    /**
     * Returns the size of the disjoint set structure
     */
    size(): number;
    /**
     * Returns all elements in the same set as element x
     */
    getSet(x: number): number[];
}
