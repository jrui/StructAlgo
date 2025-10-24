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
var BubbleSort = /** @class */ (function () {
    function BubbleSort(array, comparatorFn) {
        if (array === void 0) { array = []; }
        if (comparatorFn === void 0) { comparatorFn = BubbleSort.defaultComparator; }
        this.values = __spreadArray([], array, true);
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
    BubbleSort.sort = function (array, comparatorFn) {
        if (comparatorFn === void 0) { comparatorFn = this.defaultComparator; }
        if (array.length <= 1) {
            return array;
        }
        var sortedArray = __spreadArray([], array, true);
        var n = sortedArray.length;
        for (var i = 0; i < n - 1; i++) {
            for (var j = 0; j < n - i - 1; j++) {
                if (comparatorFn(sortedArray[j], sortedArray[j + 1]) > 0) {
                    // Swap elements
                    var temp = sortedArray[j];
                    sortedArray[j] = sortedArray[j + 1];
                    sortedArray[j + 1] = temp;
                }
            }
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
    BubbleSort.defaultComparator = function (a, b) {
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
     * Sorts the array using the BubbleSort algorithm.
     *
     * @returns a new array with the elements sorted
     *
     * @example
     * const bubbleSort = new BubbleSort([3, 4, 1]);
     * bubbleSort.sort(); // returns new array with [1, 3, 4]
     */
    BubbleSort.prototype.sort = function () {
        if (this.size <= 1) {
            return this.values;
        }
        var sortedArray = __spreadArray([], this.values, true);
        for (var i = 0; i < this.size - 1; i++) {
            for (var j = 0; j < this.size - i - 1; j++) {
                if (this.defaultComparator(sortedArray[j], sortedArray[j + 1]) > 0) {
                    // Swap elements
                    var temp = sortedArray[j];
                    sortedArray[j] = sortedArray[j + 1];
                    sortedArray[j + 1] = temp;
                }
            }
        }
        return sortedArray;
    };
    ;
    return BubbleSort;
}());
exports.BubbleSort = BubbleSort;
