/**
 * QuickSort is a method of sorting an array by recursively dividing the array into smaller subarrays.
 * It is a divide-and-conquer algorithm that selects a 'pivot' element from the array and partitions
 * the other elements into two sub-arrays according to whether they are less than or greater than the
 * pivot.
 * The sub-arrays are then sorted recursively.
 * The base case of the recursion is an array of zero or one element, which is guaranteed to be sorted.
 * The pivot selection and partitioning steps can be done in different ways and the efficiency of the
 * algorithm depends on the choice of these steps.
 *
 * The worst-case time complexity of QuickSort is O(n^2), but the average-case time complexity is O(n log n)
 * and the best-case time complexity is O(n log n).
 *
 * @example
 * const quickSort = new QuickSort([3, 4, 1]);
 * quickSort.sort(); // returns new array with [1, 3, 4]
 * // or
 * QuickSort.sort([3, 4, 1]); // returns new array with [1, 3, 4]
 *
 * @example
 * const quickSort = new QuickSort(
 *  ['alice', 'bob', 'charlie', 'alex', 'gavin'],
 *  (a : string, b : string) => a.localeCompare(b)
 * );
 * quickSort.sort(); // returns new array with ['alex', 'alice', 'bob', 'charlie', 'gavin']
 */
export declare class QuickSort<T> {
    private readonly values;
    private readonly size;
    private readonly defaultComparator;
    constructor(array?: T[], comparatorFn?: typeof QuickSort.defaultComparator);
    /**
     * Sorts the array using the QuickSort algorithm.
     * Static method, no need to instantiate class
     *
     * @param array - the array to be sorted
     * @param comparatorFn - the comparator function used for sorting, defaults to numerical comparison
     * @returns a new array with the elements sorted
     */
    static sort(array: any[], comparatorFn?: typeof QuickSort.defaultComparator): any[];
    /**
     * Default comparator function used for sorting
     *
     * @param a - first element to compare
     * @param b - second element to compare
     * @returns a negative number if a < b, 0 if a = b, a positive number if a > b
     */
    static defaultComparator(a: any, b: any): number;
    /**
     * Sorts the array using the QuickSort algorithm.
     *
     * @returns a new array with the elements sorted
     *
     * @example
     * const quickSort = new QuickSort([3, 4, 1]);
     * quickSort.sort(); // returns new array with [1, 3, 4]
     */
    sort(): T[];
}
