/**
 * HeapSort is a comparison-based sorting algorithm that uses a binary heap data structure.
 * It divides its input into a sorted and an unsorted region, and iteratively shrinks the
 * unsorted region by extracting the largest element and moving it to the sorted region.
 *
 * The algorithm works by:
 * 1. Building a max heap from the input data
 * 2. Repeatedly extracting the maximum element from the heap and placing it at the end
 * 3. Reducing the heap size and re-heapifying
 *
 * HeapSort is an in-place algorithm (though this implementation returns a new array for
 * consistency with other sorting algorithms in this library). It has a time complexity of
 * O(n log n) in all cases (best, average, and worst), making it efficient for large datasets.
 *
 * Unlike QuickSort, HeapSort's worst-case time complexity is O(n log n), but it generally
 * performs slower than QuickSort in practice due to poor cache locality.
 *
 * @example
 * const heapSort = new HeapSort([3, 4, 1]);
 * heapSort.sort(); // returns new array with [1, 3, 4]
 * // or
 * HeapSort.sort([3, 4, 1]); // returns new array with [1, 3, 4]
 *
 * @example
 * const heapSort = new HeapSort(
 *  ['alice', 'bob', 'charlie', 'alex', 'gavin'],
 *  (a : string, b : string) => a.localeCompare(b)
 * );
 * heapSort.sort(); // returns new array with ['alex', 'alice', 'bob', 'charlie', 'gavin']
 */
export declare class HeapSort<T> {
    private readonly values;
    private readonly size;
    private readonly defaultComparator;
    constructor(array?: T[], comparatorFn?: typeof HeapSort.defaultComparator);
    /**
     * Sorts the array using the HeapSort algorithm.
     * Static method, no need to instantiate class
     *
     * @param array - the array to be sorted
     * @param comparatorFn - the comparator function used for sorting, defaults to numerical comparison
     * @returns a new array with the elements sorted
     */
    static sort(array: any[], comparatorFn?: typeof HeapSort.defaultComparator): any[];
    /**
     * Heapify a subtree rooted at index i
     *
     * @param array - the array to heapify
     * @param heapSize - size of the heap
     * @param rootIndex - index of the root of the subtree
     * @param comparatorFn - comparator function for comparison
     */
    private static heapify;
    /**
     * Default comparator function used for sorting
     *
     * @param a - first element to compare
     * @param b - second element to compare
     * @returns a negative number if a < b, 0 if a = b, a positive number if a > b
     */
    static defaultComparator(a: any, b: any): number;
    /**
     * Heapify a subtree rooted at index i (instance method)
     *
     * @param array - the array to heapify
     * @param heapSize - size of the heap
     * @param rootIndex - index of the root of the subtree
     */
    private heapify;
    /**
     * Sorts the array using the HeapSort algorithm.
     *
     * @returns a new array with the elements sorted
     *
     * @example
     * const heapSort = new HeapSort([3, 4, 1]);
     * heapSort.sort(); // returns new array with [1, 3, 4]
     */
    sort(): T[];
}
