"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisjointSet = void 0;
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
class DisjointSet {
    /**
     * Creates a new Disjoint Set with n elements (0 to n-1)
     */
    constructor(size) {
        this.parent = new Array(size);
        this.rank = new Array(size).fill(0);
        this.count = size;
        // Initially, each element is its own parent
        for (let i = 0; i < size; i++) {
            this.parent[i] = i;
        }
    }
    /**
     * Finds the root of the set containing element x
     * Uses path compression for optimization
     */
    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // Path compression
        }
        return this.parent[x];
    }
    /**
     * Unites the sets containing elements x and y
     * Uses union by rank for optimization
     */
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX === rootY) {
            return false; // Already in the same set
        }
        // Union by rank
        if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        }
        else if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        }
        else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++;
        }
        this.count--;
        return true;
    }
    /**
     * Checks if elements x and y are in the same set
     */
    isConnected(x, y) {
        return this.find(x) === this.find(y);
    }
    /**
     * Returns the number of disjoint sets
     */
    getCount() {
        return this.count;
    }
    /**
     * Returns the size of the disjoint set structure
     */
    size() {
        return this.parent.length;
    }
    /**
     * Returns all elements in the same set as element x
     */
    getSet(x) {
        const root = this.find(x);
        const set = [];
        for (let i = 0; i < this.parent.length; i++) {
            if (this.find(i) === root) {
                set.push(i);
            }
        }
        return set;
    }
}
exports.DisjointSet = DisjointSet;
