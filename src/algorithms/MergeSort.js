"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeSort = void 0;
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
class MergeSort {
    constructor(array = [], comparatorFn = MergeSort.defaultComparator) {
        this.values = [...array];
        this.size = array.length;
        this.defaultComparator = comparatorFn;
    }
    /**
     * Merges two sorted arrays into a single sorted array.
     * Static helper method used by the sort algorithm.
     *
     * @param left - the left sorted array
     * @param right - the right sorted array
     * @param comparatorFn - the comparator function used for sorting
     * @returns a new array with elements from both arrays sorted
     */
    static merge(left, right, comparatorFn) {
        const result = [];
        let leftIndex = 0;
        let rightIndex = 0;
        // Compare elements from left and right arrays and add the smaller one to result
        while (leftIndex < left.length && rightIndex < right.length) {
            if (comparatorFn(left[leftIndex], right[rightIndex]) <= 0) {
                result.push(left[leftIndex]);
                leftIndex++;
            }
            else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }
        // Add remaining elements from left array (if any)
        while (leftIndex < left.length) {
            result.push(left[leftIndex]);
            leftIndex++;
        }
        // Add remaining elements from right array (if any)
        while (rightIndex < right.length) {
            result.push(right[rightIndex]);
            rightIndex++;
        }
        return result;
    }
    /**
     * Sorts the array using the MergeSort algorithm.
     * Static method, no need to instantiate class
     *
     * @param array - the array to be sorted
     * @param comparatorFn - the comparator function used for sorting, defaults to numerical comparison
     * @returns a new array with the elements sorted
     */
    static sort(array, comparatorFn = this.defaultComparator) {
        // Base case: arrays with 0 or 1 element are already sorted
        if (array.length <= 1) {
            return array;
        }
        // Divide the array into two halves
        const middle = Math.floor(array.length / 2);
        const left = array.slice(0, middle);
        const right = array.slice(middle);
        // Recursively sort both halves and merge them
        return MergeSort.merge(MergeSort.sort(left, comparatorFn), MergeSort.sort(right, comparatorFn), comparatorFn);
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
     * Instance helper method to merge two sorted arrays.
     *
     * @param left - the left sorted array
     * @param right - the right sorted array
     * @returns a new array with elements from both arrays sorted
     */
    merge(left, right) {
        const result = [];
        let leftIndex = 0;
        let rightIndex = 0;
        while (leftIndex < left.length && rightIndex < right.length) {
            if (this.defaultComparator(left[leftIndex], right[rightIndex]) <= 0) {
                result.push(left[leftIndex]);
                leftIndex++;
            }
            else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }
        while (leftIndex < left.length) {
            result.push(left[leftIndex]);
            leftIndex++;
        }
        while (rightIndex < right.length) {
            result.push(right[rightIndex]);
            rightIndex++;
        }
        return result;
    }
    /**
     * Sorts the array using the MergeSort algorithm.
     *
     * @returns a new array with the elements sorted
     *
     * @example
     * const mergeSort = new MergeSort([3, 4, 1]);
     * mergeSort.sort(); // returns new array with [1, 3, 4]
     */
    sort() {
        if (this.size <= 1) {
            return this.values;
        }
        const middle = Math.floor(this.size / 2);
        const left = this.values.slice(0, middle);
        const right = this.values.slice(middle);
        return this.merge((new MergeSort(left, this.defaultComparator)).sort(), (new MergeSort(right, this.defaultComparator)).sort());
    }
}
exports.MergeSort = MergeSort;
