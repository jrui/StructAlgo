/**
 * SelectionSort is a simple sorting algorithm that divides the input array into a sorted
 * and an unsorted region. It repeatedly selects the smallest (or largest) element from
 * the unsorted region and moves it to the end of the sorted region.
 *
 * The algorithm maintains two subarrays:
 * 1. The subarray which is already sorted
 * 2. The remaining subarray which is unsorted
 *
 * In every iteration, the minimum element from the unsorted subarray is picked and moved
 * to the sorted subarray.
 *
 * The time complexity is O(n^2) in all cases (best, average, and worst), making it
 * inefficient for large datasets. However, it performs well on small lists and requires
 * minimal memory writes compared to other sorting algorithms.
 *
 * @example
 * const selectionSort = new SelectionSort([3, 4, 1]);
 * selectionSort.sort(); // returns new array with [1, 3, 4]
 * // or
 * SelectionSort.sort([3, 4, 1]); // returns new array with [1, 3, 4]
 *
 * @example
 * const selectionSort = new SelectionSort(
 *  ['alice', 'bob', 'charlie', 'alex', 'gavin'],
 *  (a : string, b : string) => a.localeCompare(b)
 * );
 * selectionSort.sort(); // returns new array with ['alex', 'alice', 'bob', 'charlie', 'gavin']
 */
export declare class SelectionSort<T> {
    private readonly values;
    private readonly size;
    private readonly defaultComparator;
    constructor(array?: T[], comparatorFn?: typeof SelectionSort.defaultComparator);
    /**
     * Sorts the array using the SelectionSort algorithm.
     * Static method, no need to instantiate class
     *
     * @param array - the array to be sorted
     * @param comparatorFn - the comparator function used for sorting, defaults to numerical comparison
     * @returns a new array with the elements sorted
     */
    static sort(array: any[], comparatorFn?: typeof SelectionSort.defaultComparator): any[];
    /**
     * Default comparator function used for sorting
     *
     * @param a - first element to compare
     * @param b - second element to compare
     * @returns a negative number if a < b, 0 if a = b, a positive number if a > b
     */
    static defaultComparator(a: any, b: any): number;
    /**
     * Sorts the array using the SelectionSort algorithm.
     *
     * @returns a new array with the elements sorted
     *
     * @example
     * const selectionSort = new SelectionSort([3, 4, 1]);
     * selectionSort.sort(); // returns new array with [1, 3, 4]
     */
    sort(): T[];
}
