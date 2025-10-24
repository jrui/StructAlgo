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
exports.CountingSort = void 0;
/**
 * CountingSort is a non-comparison based sorting algorithm that works by counting the number
 * of objects having distinct key values, and then using arithmetic to calculate the position
 * of each object in the output sequence.
 *
 * Counting sort is particularly efficient when the range of input data (k) is not significantly
 * greater than the number of objects to be sorted (n). Unlike comparison-based sorting algorithms,
 * counting sort is not limited by the O(n log n) lower bound.
 *
 * The time complexity is O(n + k) where n is the number of elements and k is the range of input,
 * and the space complexity is O(k).
 *
 * Note: This implementation is optimized for integer values. For non-integer types,
 * consider using other sorting algorithms.
 *
 * @example
 * const countingSort = new CountingSort([4, 2, 2, 8, 3, 3, 1]);
 * countingSort.sort(); // returns new array with [1, 2, 2, 3, 3, 4, 8]
 * // or
 * CountingSort.sort([4, 2, 2, 8, 3, 3, 1]); // returns new array with [1, 2, 2, 3, 3, 4, 8]
 *
 * @example
 * const countingSort = new CountingSort([5, 3, 8, 6, 2, 7, 1, 4]);
 * countingSort.sort(); // returns new array with [1, 2, 3, 4, 5, 6, 7, 8]
 */
var CountingSort = /** @class */ (function () {
    function CountingSort(array) {
        if (array === void 0) { array = []; }
        this.values = __spreadArray([], array, true);
        this.size = array.length;
    }
    /**
     * Sorts the array using the CountingSort algorithm.
     * Static method, no need to instantiate class
     *
     * @param array - the array of integers to be sorted
     * @returns a new array with the elements sorted
     */
    CountingSort.sort = function (array) {
        if (array.length <= 1) {
            return __spreadArray([], array, true);
        }
        // Find minimum and maximum values
        var min = array[0];
        var max = array[0];
        for (var i = 1; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
            if (array[i] > max) {
                max = array[i];
            }
        }
        // Create count array
        var range = max - min + 1;
        var count = new Array(range).fill(0);
        // Count occurrences of each element
        for (var i = 0; i < array.length; i++) {
            count[array[i] - min]++;
        }
        // Build the sorted array
        var sortedArray = [];
        for (var i = 0; i < range; i++) {
            for (var j = 0; j < count[i]; j++) {
                sortedArray.push(i + min);
            }
        }
        return sortedArray;
    };
    /**
     * Sorts the array using the CountingSort algorithm.
     *
     * @returns a new array with the elements sorted
     *
     * @example
     * const countingSort = new CountingSort([4, 2, 2, 8, 3, 3, 1]);
     * countingSort.sort(); // returns new array with [1, 2, 2, 3, 3, 4, 8]
     */
    CountingSort.prototype.sort = function () {
        if (this.size <= 1) {
            return __spreadArray([], this.values, true);
        }
        // Find minimum and maximum values
        var min = this.values[0];
        var max = this.values[0];
        for (var i = 1; i < this.size; i++) {
            if (this.values[i] < min) {
                min = this.values[i];
            }
            if (this.values[i] > max) {
                max = this.values[i];
            }
        }
        // Create count array
        var range = max - min + 1;
        var count = new Array(range).fill(0);
        // Count occurrences of each element
        for (var i = 0; i < this.size; i++) {
            count[this.values[i] - min]++;
        }
        // Build the sorted array
        var sortedArray = [];
        for (var i = 0; i < range; i++) {
            for (var j = 0; j < count[i]; j++) {
                sortedArray.push(i + min);
            }
        }
        return sortedArray;
    };
    ;
    return CountingSort;
}());
exports.CountingSort = CountingSort;
