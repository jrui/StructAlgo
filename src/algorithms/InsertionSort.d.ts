/**
 * InsertionSort is a simple sorting algorithm that builds the final sorted array one item at a time.
 * It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.
 * However, insertion sort provides several advantages:
 * - Simple implementation
 * - Efficient for small data sets
 * - Adaptive: efficient for data sets that are already substantially sorted
 * - Stable: does not change the relative order of elements with equal keys
 * - In-place: only requires a constant amount O(1) of additional memory space
 *
 * The algorithm iterates through the input array, growing the sorted array behind it.
 * At each iteration, it removes one element from the input data, finds the location it belongs
 * within the sorted list, and inserts it there. It repeats until no input elements remain.
 *
 * The worst-case time complexity is O(n^2), the average-case time complexity is O(n^2),
 * and the best-case time complexity is O(n) when the array is already sorted.
 *
 * @example
 * const insertionSort = new InsertionSort([3, 4, 1]);
 * insertionSort.sort(); // returns new array with [1, 3, 4]
 * // or
 * InsertionSort.sort([3, 4, 1]); // returns new array with [1, 3, 4]
 *
 * @example
 * const insertionSort = new InsertionSort(
 *  ['alice', 'bob', 'charlie', 'alex', 'gavin'],
 *  (a : string, b : string) => a.localeCompare(b)
 * );
 * insertionSort.sort(); // returns new array with ['alex', 'alice', 'bob', 'charlie', 'gavin']
 */
export declare class InsertionSort<T> {
    private readonly values;
    private readonly size;
    private readonly defaultComparator;
    constructor(array?: T[], comparatorFn?: typeof InsertionSort.defaultComparator);
    /**
     * Sorts the array using the InsertionSort algorithm.
     * Static method, no need to instantiate class
     *
     * @param array - the array to be sorted
     * @param comparatorFn - the comparator function used for sorting, defaults to numerical comparison
     * @returns a new array with the elements sorted
     */
    static sort(array: any[], comparatorFn?: typeof InsertionSort.defaultComparator): any[];
    /**
     * Default comparator function used for sorting
     *
     * @param a - first element to compare
     * @param b - second element to compare
     * @returns a negative number if a < b, 0 if a = b, a positive number if a > b
     */
    static defaultComparator(a: any, b: any): number;
    /**
     * Sorts the array using the InsertionSort algorithm.
     *
     * @returns a new array with the elements sorted
     *
     * @example
     * const insertionSort = new InsertionSort([3, 4, 1]);
     * insertionSort.sort(); // returns new array with [1, 3, 4]
     */
    sort(): T[];
}
