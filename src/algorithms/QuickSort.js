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
exports.QuickSort = void 0;
/**
 * QuickSort is a method of sorting an array by recursively dividing the array into smaller subarrays.
 * It is a divide-and-conquer algorithm that selects a 'pivot' element from the array and partitions
 * the other elements into two sub-arrays according to whether they are less than or greater than the
 * pivot.
 * The sub-arrays are then sorted recursively.
 * The base case of the recursion is an array of zero or one element, which is guaranteed to be sorted.
 * The pivot selection and partitioning steps can be done in different ways and the efficiency of the
 * algorithm depends on the choice of these steps.
 *
 * The worst-case time complexity of QuickSort is O(n^2), but the average-case time complexity is O(n log n)
 * and the best-case time complexity is O(n log n).
 *
 * @example
 * const quickSort = new QuickSort([3, 4, 1]);
 * quickSort.sort(); // returns new array with [1, 3, 4]
 * // or
 * QuickSort.sort([3, 4, 1]); // returns new array with [1, 3, 4]
 *
 * @example
 * const quickSort = new QuickSort(
 *  ['alice', 'bob', 'charlie', 'alex', 'gavin'],
 *  (a : string, b : string) => a.localeCompare(b)
 * );
 * quickSort.sort(); // returns new array with ['alex', 'alice', 'bob', 'charlie', 'gavin']
 */
var QuickSort = /** @class */ (function () {
    function QuickSort(array, comparatorFn) {
        if (array === void 0) { array = []; }
        if (comparatorFn === void 0) { comparatorFn = QuickSort.defaultComparator; }
        this.values = __spreadArray([], array, true);
        this.size = array.length;
        this.defaultComparator = comparatorFn;
    }
    /**
     * Sorts the array using the QuickSort algorithm.
     * Static method, no need to instantiate class
     *
     * @param array - the array to be sorted
     * @param comparatorFn - the comparator function used for sorting, defaults to numerical comparison
     * @returns a new array with the elements sorted
     */
    QuickSort.sort = function (array, comparatorFn) {
        if (comparatorFn === void 0) { comparatorFn = this.defaultComparator; }
        if (array.length <= 1) {
            return array;
        }
        var pivot = array[0];
        var leftArr = [];
        var rightArr = [];
        for (var i = 1; i < array.length; i++) {
            if (comparatorFn(array[i], pivot) < 0) {
                leftArr.push(array[i]);
            }
            else {
                rightArr.push(array[i]);
            }
        }
        return __spreadArray(__spreadArray(__spreadArray([], QuickSort.sort(leftArr), true), [pivot], false), QuickSort.sort(rightArr), true);
    };
    /**
     * Default comparator function used for sorting
     *
     * @param a - first element to compare
     * @param b - second element to compare
     * @returns a negative number if a < b, 0 if a = b, a positive number if a > b
     */
    QuickSort.defaultComparator = function (a, b) {
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
     * Sorts the array using the QuickSort algorithm.
     *
     * @returns a new array with the elements sorted
     *
     * @example
     * const quickSort = new QuickSort([3, 4, 1]);
     * quickSort.sort(); // returns new array with [1, 3, 4]
     */
    QuickSort.prototype.sort = function () {
        if (this.size <= 1) {
            return this.values;
        }
        var pivot = this.values[0];
        var leftArr = [];
        var rightArr = [];
        for (var i = 1; i < this.size; i++) {
            if (this.defaultComparator(this.values[i], pivot) < 0) {
                leftArr.push(this.values[i]);
            }
            else {
                rightArr.push(this.values[i]);
            }
        }
        return __spreadArray(__spreadArray(__spreadArray([], (new QuickSort(leftArr)).sort(), true), [pivot], false), (new QuickSort(rightArr)).sort(), true);
    };
    ;
    return QuickSort;
}());
exports.QuickSort = QuickSort;
