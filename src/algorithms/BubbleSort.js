"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleSort = void 0;
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
class BubbleSort {
    constructor(array = [], comparatorFn = BubbleSort.defaultComparator) {
        this.values = [...array];
        this.size = array.length;
        this.defaultComparator = comparatorFn;
    }
    /**
     * Sorts the array using the BubbleSort algorithm.
     * Static method, no need to instantiate class
     *
     * @param array - the array to be sorted
     * @param comparatorFn - the comparator function used for sorting, defaults to numerical comparison
     * @returns a new array with the elements sorted
     */
    static sort(array, comparatorFn = this.defaultComparator) {
        if (array.length <= 1) {
            return array;
        }
        const sortedArray = [...array];
        const n = sortedArray.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (comparatorFn(sortedArray[j], sortedArray[j + 1]) > 0) {
                    // Swap elements
                    const temp = sortedArray[j];
                    sortedArray[j] = sortedArray[j + 1];
                    sortedArray[j + 1] = temp;
                }
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
    static defaultComparator(a, b) {
        if (a < b) {
            return -1;
        }
        else if (a === b) {
            return 0;
        }
        else {
            return 1;
        }
    }
    /**
     * Sorts the array using the BubbleSort algorithm.
     *
     * @returns a new array with the elements sorted
     *
     * @example
     * const bubbleSort = new BubbleSort([3, 4, 1]);
     * bubbleSort.sort(); // returns new array with [1, 3, 4]
     */
    sort() {
        if (this.size <= 1) {
            return this.values;
        }
        const sortedArray = [...this.values];
        for (let i = 0; i < this.size - 1; i++) {
            for (let j = 0; j < this.size - i - 1; j++) {
                if (this.defaultComparator(sortedArray[j], sortedArray[j + 1]) > 0) {
                    // Swap elements
                    const temp = sortedArray[j];
                    sortedArray[j] = sortedArray[j + 1];
                    sortedArray[j + 1] = temp;
                }
            }
        }
        return sortedArray;
    }
    ;
}
exports.BubbleSort = BubbleSort;
