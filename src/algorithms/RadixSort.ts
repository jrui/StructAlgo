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
export class RadixSort {
    private readonly values: number[];
    private readonly size: number;


    constructor(array: number[] = []) {
        this.values = [...array];
        this.size = array.length;
    }


    /**
     * Get the digit at a specific position (from right to left, 0-indexed)
     * 
     * @param num - the number to get the digit from
     * @param digitPos - the position of the digit (0 = rightmost)
     * @returns the digit at the specified position
     */
    private static getDigit(num: number, digitPos: number): number {
        return Math.floor(Math.abs(num) / Math.pow(10, digitPos)) % 10;
    }


    /**
     * Count the number of digits in a number
     * 
     * @param num - the number to count digits of
     * @returns the number of digits
     */
    private static digitCount(num: number): number {
        if (num === 0) return 1;
        return String(Math.abs(Math.floor(num))).length;
    }


    /**
     * Find the maximum number of digits in an array
     * 
     * @param array - the array to find the max digits in
     * @returns the maximum number of digits
     */
    private static mostDigits(array: number[]): number {
        let maxDigits = 0;
        for (let i = 0; i < array.length; i++) {
            maxDigits = Math.max(maxDigits, this.digitCount(array[i]));
        }
        return maxDigits;
    }


    /**
     * Perform counting sort on an array based on a specific digit position
     * 
     * @param array - the array to sort
     * @param digitPos - the digit position to sort by
     * @returns the sorted array for this digit position
     */
    private static countingSortByDigit(array: number[], digitPos: number): number[] {
        const output: number[] = new Array(array.length);
        const count: number[] = new Array(10);
        
        // Initialize count array
        for (let i = 0; i < 10; i++) {
            count[i] = 0;
        }

        // Count occurrences of each digit
        for (let i = 0; i < array.length; i++) {
            const digit = this.getDigit(array[i], digitPos);
            count[digit]++;
        }

        // Calculate cumulative count
        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        // Build the output array (traverse from right to maintain stability)
        for (let i = array.length - 1; i >= 0; i--) {
            const digit = this.getDigit(array[i], digitPos);
            output[count[digit] - 1] = array[i];
            count[digit]--;
        }

        return output;
    }


    /**
     * Sorts the array using the RadixSort algorithm.
     * Static method, no need to instantiate class
     *
     * @param array - the array of integers to be sorted
     * @returns a new array with the elements sorted
     */
    static sort(array: number[]): number[] {
        if (array.length <= 1) {
            return [...array];
        }

        // Separate positive and negative numbers
        const negatives: number[] = [];
        const positives: number[] = [];

        for (let i = 0; i < array.length; i++) {
            if (array[i] < 0) {
                negatives.push(array[i]);
            } else {
                positives.push(array[i]);
            }
        }

        // Sort positive numbers
        let sortedPositives = positives;
        if (positives.length > 0) {
            const maxDigits = this.mostDigits(positives);
            for (let k = 0; k < maxDigits; k++) {
                sortedPositives = this.countingSortByDigit(sortedPositives, k);
            }
        }

        // Sort negative numbers (sort absolute values, then reverse)
        let sortedNegatives = negatives;
        if (negatives.length > 0) {
            // Convert to absolute values
            const absNegatives = negatives.map(num => Math.abs(num));
            const maxDigits = this.mostDigits(absNegatives);
            
            // Sort absolute values
            let sorted = absNegatives;
            for (let k = 0; k < maxDigits; k++) {
                sorted = this.countingSortByDigit(sorted, k);
            }
            
            // Convert back to negative and reverse
            sortedNegatives = sorted.map(num => -num).reverse();
        }

        // Combine sorted negatives and positives
        return [...sortedNegatives, ...sortedPositives];
    }


    /**
     * Sorts the array using the RadixSort algorithm.
     *
     * @returns a new array with the elements sorted
     *
     * @example
     * const radixSort = new RadixSort([170, 45, 75, 90, 802, 24, 2, 66]);
     * radixSort.sort(); // returns new array with [2, 24, 45, 66, 75, 90, 170, 802]
     */
    sort(): number[] {
        if (this.size <= 1) {
            return [...this.values];
        }

        // Separate positive and negative numbers
        const negatives: number[] = [];
        const positives: number[] = [];

        for (let i = 0; i < this.size; i++) {
            if (this.values[i] < 0) {
                negatives.push(this.values[i]);
            } else {
                positives.push(this.values[i]);
            }
        }

        // Sort positive numbers
        let sortedPositives = positives;
        if (positives.length > 0) {
            const maxDigits = RadixSort.mostDigits(positives);
            for (let k = 0; k < maxDigits; k++) {
                sortedPositives = RadixSort.countingSortByDigit(sortedPositives, k);
            }
        }

        // Sort negative numbers (sort absolute values, then reverse)
        let sortedNegatives = negatives;
        if (negatives.length > 0) {
            // Convert to absolute values
            const absNegatives = negatives.map(num => Math.abs(num));
            const maxDigits = RadixSort.mostDigits(absNegatives);
            
            // Sort absolute values
            let sorted = absNegatives;
            for (let k = 0; k < maxDigits; k++) {
                sorted = RadixSort.countingSortByDigit(sorted, k);
            }
            
            // Convert back to negative and reverse
            sortedNegatives = sorted.map(num => -num).reverse();
        }

        // Combine sorted negatives and positives
        return [...sortedNegatives, ...sortedPositives];
    }
}
