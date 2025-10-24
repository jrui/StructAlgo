/**
 * BubbleSort is a simple sorting algorithm that repeatedly steps through the array,
 * compares adjacent elements and swaps them if they are in the wrong order.
 * The pass through the array is repeated until the array is sorted.
 *
 * The algorithm gets its name from the way smaller elements "bubble" to the top of the array.
 * Although simple, it is not efficient for large datasets as it has a time complexity of O(n^2)
 * in both the average and worst case scenarios.
 *
 * The best-case time complexity is O(n) when the array is already sorted.
 *
 * @example
 * const bubbleSort = new BubbleSort([3, 4, 1]);
 * bubbleSort.sort(); // returns new array with [1, 3, 4]
 * // or
 * BubbleSort.sort([3, 4, 1]); // returns new array with [1, 3, 4]
 *
 * @example
 * const bubbleSort = new BubbleSort(
 *  ['alice', 'bob', 'charlie', 'alex', 'gavin'],
 *  (a : string, b : string) => a.localeCompare(b)
 * );
 * bubbleSort.sort(); // returns new array with ['alex', 'alice', 'bob', 'charlie', 'gavin']
 */
export declare class BubbleSort<T> {
    private readonly values;
    private readonly size;
    private readonly defaultComparator;
    constructor(array?: T[], comparatorFn?: typeof BubbleSort.defaultComparator);
    /**
     * Sorts the array using the BubbleSort algorithm.
     * Static method, no need to instantiate class
     *
     * @param array - the array to be sorted
     * @param comparatorFn - the comparator function used for sorting, defaults to numerical comparison
     * @returns a new array with the elements sorted
     */
    static sort(array: any[], comparatorFn?: typeof BubbleSort.defaultComparator): any[];
    /**
     * Default comparator function used for sorting
     *
     * @param a - first element to compare
     * @param b - second element to compare
     * @returns a negative number if a < b, 0 if a = b, a positive number if a > b
     */
    static defaultComparator(a: any, b: any): number;
    /**
     * Sorts the array using the BubbleSort algorithm.
     *
     * @returns a new array with the elements sorted
     *
     * @example
     * const bubbleSort = new BubbleSort([3, 4, 1]);
     * bubbleSort.sort(); // returns new array with [1, 3, 4]
     */
    sort(): T[];
}
