/**
 * MergeSort is a divide-and-conquer sorting algorithm that divides the input array into two halves,
 * recursively sorts them, and then merges the two sorted halves.
 * It is one of the most efficient sorting algorithms with a time complexity of O(n log n) in all cases.
 *
 * The algorithm works by repeatedly dividing the array in half until each sub-array contains a single
 * element (which is inherently sorted), and then merging those sorted sub-arrays back together.
 * The merge operation compares elements from both sub-arrays and places them in the correct order.
 *
 * MergeSort is stable (maintains relative order of equal elements) and has a space complexity of O(n)
 * due to the auxiliary arrays needed for merging.
 *
 * The time complexity is O(n log n) for best, average, and worst cases.
 * The space complexity is O(n) for the auxiliary arrays.
 *
 * @example
 * const mergeSort = new MergeSort([3, 4, 1]);
 * mergeSort.sort(); // returns new array with [1, 3, 4]
 * // or
 * MergeSort.sort([3, 4, 1]); // returns new array with [1, 3, 4]
 *
 * @example
 * const mergeSort = new MergeSort(
 *  ['alice', 'bob', 'charlie', 'alex', 'gavin'],
 *  (a : string, b : string) => a.localeCompare(b)
 * );
 * mergeSort.sort(); // returns new array with ['alex', 'alice', 'bob', 'charlie', 'gavin']
 */
export declare class MergeSort<T> {
    private readonly values;
    private readonly size;
    private readonly defaultComparator;
    constructor(array?: T[], comparatorFn?: typeof MergeSort.defaultComparator);
    /**
     * Merges two sorted arrays into a single sorted array.
     * Static helper method used by the sort algorithm.
     *
     * @param left - the left sorted array
     * @param right - the right sorted array
     * @param comparatorFn - the comparator function used for sorting
     * @returns a new array with elements from both arrays sorted
     */
    private static merge;
    /**
     * Sorts the array using the MergeSort algorithm.
     * Static method, no need to instantiate class
     *
     * @param array - the array to be sorted
     * @param comparatorFn - the comparator function used for sorting, defaults to numerical comparison
     * @returns a new array with the elements sorted
     */
    static sort(array: any[], comparatorFn?: typeof MergeSort.defaultComparator): any[];
    /**
     * Default comparator function used for sorting
     *
     * @param a - first element to compare
     * @param b - second element to compare
     * @returns a negative number if a < b, 0 if a = b, a positive number if a > b
     */
    static defaultComparator(a: any, b: any): number;
    /**
     * Instance helper method to merge two sorted arrays.
     *
     * @param left - the left sorted array
     * @param right - the right sorted array
     * @returns a new array with elements from both arrays sorted
     */
    private merge;
    /**
     * Sorts the array using the MergeSort algorithm.
     *
     * @returns a new array with the elements sorted
     *
     * @example
     * const mergeSort = new MergeSort([3, 4, 1]);
     * mergeSort.sort(); // returns new array with [1, 3, 4]
     */
    sort(): T[];
}
