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
export declare class RadixSort {
    private readonly values;
    private readonly size;
    constructor(array?: number[]);
    /**
     * Get the digit at a specific position (from right to left, 0-indexed)
     *
     * @param num - the number to get the digit from
     * @param digitPos - the position of the digit (0 = rightmost)
     * @returns the digit at the specified position
     */
    private static getDigit;
    /**
     * Count the number of digits in a number
     *
     * @param num - the number to count digits of
     * @returns the number of digits
     */
    private static digitCount;
    /**
     * Find the maximum number of digits in an array
     *
     * @param array - the array to find the max digits in
     * @returns the maximum number of digits
     */
    private static mostDigits;
    /**
     * Perform counting sort on an array based on a specific digit position
     *
     * @param array - the array to sort
     * @param digitPos - the digit position to sort by
     * @returns the sorted array for this digit position
     */
    private static countingSortByDigit;
    /**
     * Sorts the array using the RadixSort algorithm.
     * Static method, no need to instantiate class
     *
     * @param array - the array of integers to be sorted
     * @returns a new array with the elements sorted
     */
    static sort(array: number[]): number[];
    /**
     * Sorts the array using the RadixSort algorithm.
     *
     * @returns a new array with the elements sorted
     *
     * @example
     * const radixSort = new RadixSort([170, 45, 75, 90, 802, 24, 2, 66]);
     * radixSort.sort(); // returns new array with [2, 24, 45, 66, 75, 90, 170, 802]
     */
    sort(): number[];
}
