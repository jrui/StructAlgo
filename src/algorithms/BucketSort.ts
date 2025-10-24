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
export class BucketSort<T> {
    private readonly values: T[];
    private readonly size: number;
    private readonly defaultComparator: (a: T, b: T) => number;
    private readonly bucketCount: number;


    constructor(array: T[] = [], comparatorFn = BucketSort.defaultComparator, bucketCount = 10) {
        this.values = [...array];
        this.size = array.length;
        this.defaultComparator = comparatorFn;
        this.bucketCount = bucketCount;
    }


    /**
     * Sorts the array using the BucketSort algorithm.
     * Static method, no need to instantiate class
     *
     * @param array - the array to be sorted
     * @param comparatorFn - the comparator function used for sorting, defaults to numerical comparison
     * @param bucketCount - the number of buckets to use, defaults to 10
     * @returns a new array with the elements sorted
     */
    static sort(array: any[], comparatorFn = this.defaultComparator, bucketCount = 10) : any[] {
        if (array.length <= 1) {
            return array;
        }

        // Find minimum and maximum values
        let min = array[0];
        let max = array[0];
        for (let i = 1; i < array.length; i++) {
            if (comparatorFn(array[i], min) < 0) {
                min = array[i];
            }
            if (comparatorFn(array[i], max) > 0) {
                max = array[i];
            }
        }

        // Create buckets
        const buckets: any[][] = new Array(bucketCount);
        for (let i = 0; i < bucketCount; i++) {
            buckets[i] = [];
        }

        // Distribute elements into buckets
        const range = max - min;
        for (let i = 0; i < array.length; i++) {
            const bucketIndex = range === 0 ? 0 : Math.floor(((array[i] - min) / range) * (bucketCount - 1));
            buckets[bucketIndex].push(array[i]);
        }

        // Sort each bucket and concatenate
        const sortedArray: any[] = [];
        for (let i = 0; i < bucketCount; i++) {
            if (buckets[i].length > 0) {
                // Use insertion sort for individual buckets
                buckets[i].sort(comparatorFn);
                sortedArray.push(...buckets[i]);
            }
        }

        return sortedArray;
    }


    /**
     * Default comparator function used for sorting
     *
     * @param a - first element to compare
     * @param b - second element to compare
     * @returns a negative number if a < b, 0 if a = b, a positive number if a > b
     */
    static defaultComparator(a: any, b: any) : number {
        if (a < b) {
            return -1;
        } else if (a === b) {
            return 0;
        } else {
            return 1;
        }
    }


    /**
     * Sorts the array using the BucketSort algorithm.
     *
     * @returns a new array with the elements sorted
     *
     * @example
     * const bucketSort = new BucketSort([0.42, 0.32, 0.33, 0.52, 0.37, 0.47, 0.51]);
     * bucketSort.sort(); // returns new array with [0.32, 0.33, 0.37, 0.42, 0.47, 0.51, 0.52]
     */
    sort() : T[] {
        if (this.size <= 1) {
            return this.values;
        }

        // Find minimum and maximum values
        let min = this.values[0];
        let max = this.values[0];
        for (let i = 1; i < this.size; i++) {
            if (this.defaultComparator(this.values[i], min) < 0) {
                min = this.values[i];
            }
            if (this.defaultComparator(this.values[i], max) > 0) {
                max = this.values[i];
            }
        }

        // Create buckets
        const buckets: T[][] = new Array(this.bucketCount);
        for (let i = 0; i < this.bucketCount; i++) {
            buckets[i] = [];
        }

        // Distribute elements into buckets
        const range = (max as any) - (min as any);
        for (let i = 0; i < this.size; i++) {
            const bucketIndex = range === 0 ? 0 : Math.floor((((this.values[i] as any) - (min as any)) / range) * (this.bucketCount - 1));
            buckets[bucketIndex].push(this.values[i]);
        }

        // Sort each bucket and concatenate
        const sortedArray: T[] = [];
        for (let i = 0; i < this.bucketCount; i++) {
            if (buckets[i].length > 0) {
                // Use insertion sort for individual buckets
                buckets[i].sort(this.defaultComparator);
                sortedArray.push(...buckets[i]);
            }
        }

        return sortedArray;
    };
}
