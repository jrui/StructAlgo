/**
 * BucketSort is a sorting algorithm that works by distributing the elements of an array
 * into a number of buckets. Each bucket is then sorted individually, either using a different
 * sorting algorithm or by recursively applying the bucket sorting algorithm.
 *
 * Bucket sort is mainly useful when input is uniformly distributed over a range.
 * The algorithm has a time complexity of O(n + k) in the best and average case,
 * where n is the number of elements and k is the number of buckets.
 * The worst-case time complexity is O(n^2) when all elements are placed in the same bucket.
 *
 * Note: This implementation is optimized for numeric values. For non-numeric types,
 * consider using other sorting algorithms.
 *
 * @example
 * const bucketSort = new BucketSort([0.42, 0.32, 0.33, 0.52, 0.37, 0.47, 0.51]);
 * bucketSort.sort(); // returns new array with [0.32, 0.33, 0.37, 0.42, 0.47, 0.51, 0.52]
 * // or
 * BucketSort.sort([0.42, 0.32, 0.33, 0.52, 0.37, 0.47, 0.51]); // returns new array with [0.32, 0.33, 0.37, 0.42, 0.47, 0.51, 0.52]
 *
 * @example
 * const bucketSort = new BucketSort(
 *  [5, 3, 8, 6, 2, 7, 1, 4],
 *  (a : number, b : number) => a - b,
 *  10
 * );
 * bucketSort.sort(); // returns new array with [1, 2, 3, 4, 5, 6, 7, 8]
 */
export declare class BucketSort<T> {
    private readonly values;
    private readonly size;
    private readonly defaultComparator;
    private readonly bucketCount;
    constructor(array?: T[], comparatorFn?: typeof BucketSort.defaultComparator, bucketCount?: number);
    /**
     * Sorts the array using the BucketSort algorithm.
     * Static method, no need to instantiate class
     *
     * @param array - the array to be sorted
     * @param comparatorFn - the comparator function used for sorting, defaults to numerical comparison
     * @param bucketCount - the number of buckets to use, defaults to 10
     * @returns a new array with the elements sorted
     */
    static sort(array: any[], comparatorFn?: typeof BucketSort.defaultComparator, bucketCount?: number): any[];
    /**
     * Default comparator function used for sorting
     *
     * @param a - first element to compare
     * @param b - second element to compare
     * @returns a negative number if a < b, 0 if a = b, a positive number if a > b
     */
    static defaultComparator(a: any, b: any): number;
    /**
     * Sorts the array using the BucketSort algorithm.
     *
     * @returns a new array with the elements sorted
     *
     * @example
     * const bucketSort = new BucketSort([0.42, 0.32, 0.33, 0.52, 0.37, 0.47, 0.51]);
     * bucketSort.sort(); // returns new array with [0.32, 0.33, 0.37, 0.42, 0.47, 0.51, 0.52]
     */
    sort(): T[];
}
