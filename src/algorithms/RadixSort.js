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
exports.RadixSort = void 0;
/**
 * RadixSort is a non-comparison based sorting algorithm that sorts integers by processing
 * individual digits. It processes the digits from least significant to most significant
 * (LSD Radix Sort) or from most significant to least significant (MSD Radix Sort).
 *
 * This implementation uses LSD (Least Significant Digit) Radix Sort, which processes
 * digits from right to left. The algorithm uses counting sort as a subroutine to sort
 * the array based on each digit.
 *
 * Radix sort is particularly efficient for sorting integers with a fixed number of digits.
 * The time complexity is O(d * (n + k)) where n is the number of elements, d is the number
 * of digits in the maximum number, and k is the range of each digit (typically 10 for decimal).
 * The space complexity is O(n + k).
 *
 * Note: This implementation works with non-negative integers. For negative numbers,
 * they are handled by separating them, sorting, and recombining.
 *
 * @example
 * const radixSort = new RadixSort([170, 45, 75, 90, 802, 24, 2, 66]);
 * radixSort.sort(); // returns new array with [2, 24, 45, 66, 75, 90, 170, 802]
 * // or
 * RadixSort.sort([170, 45, 75, 90, 802, 24, 2, 66]); // returns new array with [2, 24, 45, 66, 75, 90, 170, 802]
 *
 * @example
 * const radixSort = new RadixSort([5, 3, 8, 6, 2, 7, 1, 4]);
 * radixSort.sort(); // returns new array with [1, 2, 3, 4, 5, 6, 7, 8]
 */
var RadixSort = /** @class */ (function () {
    function RadixSort(array) {
        if (array === void 0) { array = []; }
        this.values = __spreadArray([], array, true);
        this.size = array.length;
    }
    /**
     * Get the digit at a specific position (from right to left, 0-indexed)
     *
     * @param num - the number to get the digit from
     * @param digitPos - the position of the digit (0 = rightmost)
     * @returns the digit at the specified position
     */
    RadixSort.getDigit = function (num, digitPos) {
        return Math.floor(Math.abs(num) / Math.pow(10, digitPos)) % 10;
    };
    /**
     * Count the number of digits in a number
     *
     * @param num - the number to count digits of
     * @returns the number of digits
     */
    RadixSort.digitCount = function (num) {
        if (num === 0)
            return 1;
        return String(Math.abs(Math.floor(num))).length;
    };
    /**
     * Find the maximum number of digits in an array
     *
     * @param array - the array to find the max digits in
     * @returns the maximum number of digits
     */
    RadixSort.mostDigits = function (array) {
        var maxDigits = 0;
        for (var i = 0; i < array.length; i++) {
            maxDigits = Math.max(maxDigits, this.digitCount(array[i]));
        }
        return maxDigits;
    };
    /**
     * Perform counting sort on an array based on a specific digit position
     *
     * @param array - the array to sort
     * @param digitPos - the digit position to sort by
     * @returns the sorted array for this digit position
     */
    RadixSort.countingSortByDigit = function (array, digitPos) {
        var output = new Array(array.length);
        var count = new Array(10);
        // Initialize count array
        for (var i = 0; i < 10; i++) {
            count[i] = 0;
        }
        // Count occurrences of each digit
        for (var i = 0; i < array.length; i++) {
            var digit = this.getDigit(array[i], digitPos);
            count[digit]++;
        }
        // Calculate cumulative count
        for (var i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }
        // Build the output array (traverse from right to maintain stability)
        for (var i = array.length - 1; i >= 0; i--) {
            var digit = this.getDigit(array[i], digitPos);
            output[count[digit] - 1] = array[i];
            count[digit]--;
        }
        return output;
    };
    /**
     * Sorts the array using the RadixSort algorithm.
     * Static method, no need to instantiate class
     *
     * @param array - the array of integers to be sorted
     * @returns a new array with the elements sorted
     */
    RadixSort.sort = function (array) {
        if (array.length <= 1) {
            return __spreadArray([], array, true);
        }
        // Separate positive and negative numbers
        var negatives = [];
        var positives = [];
        for (var i = 0; i < array.length; i++) {
            if (array[i] < 0) {
                negatives.push(array[i]);
            }
            else {
                positives.push(array[i]);
            }
        }
        // Sort positive numbers
        var sortedPositives = positives;
        if (positives.length > 0) {
            var maxDigits = this.mostDigits(positives);
            for (var k = 0; k < maxDigits; k++) {
                sortedPositives = this.countingSortByDigit(sortedPositives, k);
            }
        }
        // Sort negative numbers (sort absolute values, then reverse)
        var sortedNegatives = negatives;
        if (negatives.length > 0) {
            // Convert to absolute values
            var absNegatives = negatives.map(function (num) { return Math.abs(num); });
            var maxDigits = this.mostDigits(absNegatives);
            // Sort absolute values
            var sorted = absNegatives;
            for (var k = 0; k < maxDigits; k++) {
                sorted = this.countingSortByDigit(sorted, k);
            }
            // Convert back to negative and reverse
            sortedNegatives = sorted.map(function (num) { return -num; }).reverse();
        }
        // Combine sorted negatives and positives
        return __spreadArray(__spreadArray([], sortedNegatives, true), sortedPositives, true);
    };
    /**
     * Sorts the array using the RadixSort algorithm.
     *
     * @returns a new array with the elements sorted
     *
     * @example
     * const radixSort = new RadixSort([170, 45, 75, 90, 802, 24, 2, 66]);
     * radixSort.sort(); // returns new array with [2, 24, 45, 66, 75, 90, 170, 802]
     */
    RadixSort.prototype.sort = function () {
        if (this.size <= 1) {
            return __spreadArray([], this.values, true);
        }
        // Separate positive and negative numbers
        var negatives = [];
        var positives = [];
        for (var i = 0; i < this.size; i++) {
            if (this.values[i] < 0) {
                negatives.push(this.values[i]);
            }
            else {
                positives.push(this.values[i]);
            }
        }
        // Sort positive numbers
        var sortedPositives = positives;
        if (positives.length > 0) {
            var maxDigits = RadixSort.mostDigits(positives);
            for (var k = 0; k < maxDigits; k++) {
                sortedPositives = RadixSort.countingSortByDigit(sortedPositives, k);
            }
        }
        // Sort negative numbers (sort absolute values, then reverse)
        var sortedNegatives = negatives;
        if (negatives.length > 0) {
            // Convert to absolute values
            var absNegatives = negatives.map(function (num) { return Math.abs(num); });
            var maxDigits = RadixSort.mostDigits(absNegatives);
            // Sort absolute values
            var sorted = absNegatives;
            for (var k = 0; k < maxDigits; k++) {
                sorted = RadixSort.countingSortByDigit(sorted, k);
            }
            // Convert back to negative and reverse
            sortedNegatives = sorted.map(function (num) { return -num; }).reverse();
        }
        // Combine sorted negatives and positives
        return __spreadArray(__spreadArray([], sortedNegatives, true), sortedPositives, true);
    };
    return RadixSort;
}());
exports.RadixSort = RadixSort;
