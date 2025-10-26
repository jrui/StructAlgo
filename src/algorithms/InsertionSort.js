"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertionSort = void 0;
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
var InsertionSort = /** @class */ (function () {
    function InsertionSort(array, comparatorFn) {
        if (array === void 0) { array = []; }
        if (comparatorFn === void 0) { comparatorFn = InsertionSort.defaultComparator; }
        this.values = __spreadArray([], array, true);
        this.size = array.length;
        this.defaultComparator = comparatorFn;
    }
    /**
     * Sorts the array using the InsertionSort algorithm.
     * Static method, no need to instantiate class
     *
     * @param array - the array to be sorted
     * @param comparatorFn - the comparator function used for sorting, defaults to numerical comparison
     * @returns a new array with the elements sorted
     */
    InsertionSort.sort = function (array, comparatorFn) {
        if (comparatorFn === void 0) { comparatorFn = this.defaultComparator; }
        if (array.length <= 1) {
            return array;
        }
        var sortedArray = __spreadArray([], array, true);
        var n = sortedArray.length;
        for (var i = 1; i < n; i++) {
            var key = sortedArray[i];
            var j = i - 1;
            // Move elements of sortedArray[0..i-1] that are greater than key
            // to one position ahead of their current position
            while (j >= 0 && comparatorFn(sortedArray[j], key) > 0) {
                sortedArray[j + 1] = sortedArray[j];
                j = j - 1;
            }
            sortedArray[j + 1] = key;
        }
        return sortedArray;
    };
    /**
     * Default comparator function used for sorting
     *
     * @param a - first element to compare
     * @param b - second element to compare
     * @returns a negative number if a < b, 0 if a = b, a positive number if a > b
     */
    InsertionSort.defaultComparator = function (a, b) {
        if (a < b) {
            return -1;
        }
        else if (a === b) {
            return 0;
        }
        else {
            return 1;
        }
    };
    /**
     * Sorts the array using the InsertionSort algorithm.
     *
     * @returns a new array with the elements sorted
     *
     * @example
     * const insertionSort = new InsertionSort([3, 4, 1]);
     * insertionSort.sort(); // returns new array with [1, 3, 4]
     */
    InsertionSort.prototype.sort = function () {
        if (this.size <= 1) {
            return this.values;
        }
        var sortedArray = __spreadArray([], this.values, true);
        for (var i = 1; i < this.size; i++) {
            var key = sortedArray[i];
            var j = i - 1;
            // Move elements of sortedArray[0..i-1] that are greater than key
            // to one position ahead of their current position
            while (j >= 0 && this.defaultComparator(sortedArray[j], key) > 0) {
                sortedArray[j + 1] = sortedArray[j];
                j = j - 1;
            }
            sortedArray[j + 1] = key;
        }
        return sortedArray;
    };
    return InsertionSort;
}());
exports.InsertionSort = InsertionSort;
