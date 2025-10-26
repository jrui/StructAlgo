/**
 * Binary Search algorithm
 * Binary search is an efficient algorithm for finding an item from a sorted list of items.
 * It works by repeatedly dividing in half the portion of the list that could contain the item.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1) for iterative, O(log n) for recursive
 *
 * @example
 * const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 * BinarySearch.search(arr, 5); // returns 4 (index)
 * BinarySearch.search(arr, 10); // returns -1 (not found)
 *
 * @example
 * const bs = new BinarySearch([1, 2, 3, 4, 5]);
 * bs.search(3); // returns 2 (index)
 */
export declare class BinarySearch<T> {
    private readonly values;
    private readonly comparator;
    constructor(array?: T[], comparator?: (a: T, b: T) => number);
    /**
     * Default comparator function
     */
    static defaultComparator(a: any, b: any): number;
    /**
     * Static method to perform binary search on an array
     * @param array - sorted array to search in
     * @param target - element to search for
     * @param comparator - optional comparator function
     * @returns index of the target element, or -1 if not found
     */
    static search(array: any[], target: any, comparator?: typeof BinarySearch.defaultComparator): number;
    /**
     * Static recursive method to perform binary search on an array
     * @param array - sorted array to search in
     * @param target - element to search for
     * @param comparator - optional comparator function
     * @returns index of the target element, or -1 if not found
     */
    static searchRecursive(array: any[], target: any, comparator?: typeof BinarySearch.defaultComparator, left?: number, right?: number): number;
    /**
     * Instance method to search for a target in the stored array
     * @param target - element to search for
     * @returns index of the target element, or -1 if not found
     */
    search(target: T): number;
    /**
     * Instance method to search recursively for a target in the stored array
     * @param target - element to search for
     * @returns index of the target element, or -1 if not found
     */
    searchRecursive(target: T, left?: number, right?: number): number;
}
