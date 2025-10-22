/**
 * TreeSet is a set of elements ordered by a comparator function.
 * It is implemented as a sorted array.
 *
 * @example
 * const treeSet = new TreeSet<number>((a, b) => a - b);
 * treeSet.setElements([1, 2, 3]);
 * treeSet.size(); // 3
 */
export declare class TreeSet<T> {
    private readonly comparator;
    private length;
    private elements;
    constructor(comparator: (a: T, b: T) => number);
    setElements(elements: T[]): void;
    size(): number;
    last(): any;
    first(): any;
    isEmpty(): boolean;
    pullLast(): any[] | null;
    pullFirst(): any[] | null;
    add(element: T): void;
    /**
     * Performs a binary search of value in array
     * @param {number} value - Value to search in array
     * @return {number} If value is found, returns its index in array. Otherwise, returns a negative number indicating where the value should be inserted: -(index + 1)
     */
    binarySearch(value: T): number;
}
