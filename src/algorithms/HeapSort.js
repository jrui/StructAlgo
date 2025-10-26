"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeapSort = void 0;
/**
 * HeapSort is a comparison-based sorting algorithm that uses a binary heap data structure.
 * It divides its input into a sorted and an unsorted region, and iteratively shrinks the
 * unsorted region by extracting the largest element and moving it to the sorted region.
 *
 * The algorithm works by:
 * 1. Building a max heap from the input data
 * 2. Repeatedly extracting the maximum element from the heap and placing it at the end
 * 3. Reducing the heap size and re-heapifying
 *
 * HeapSort is an in-place algorithm (though this implementation returns a new array for
 * consistency with other sorting algorithms in this library). It has a time complexity of
 * O(n log n) in all cases (best, average, and worst), making it efficient for large datasets.
 *
 * Unlike QuickSort, HeapSort's worst-case time complexity is O(n log n), but it generally
 * performs slower than QuickSort in practice due to poor cache locality.
 *
 * @example
 * const heapSort = new HeapSort([3, 4, 1]);
 * heapSort.sort(); // returns new array with [1, 3, 4]
 * // or
 * HeapSort.sort([3, 4, 1]); // returns new array with [1, 3, 4]
 *
 * @example
 * const heapSort = new HeapSort(
 *  ['alice', 'bob', 'charlie', 'alex', 'gavin'],
 *  (a : string, b : string) => a.localeCompare(b)
 * );
 * heapSort.sort(); // returns new array with ['alex', 'alice', 'bob', 'charlie', 'gavin']
 */
class HeapSort {
    constructor(array = [], comparatorFn = HeapSort.defaultComparator) {
        this.values = [...array];
        this.size = array.length;
        this.defaultComparator = comparatorFn;
    }
    /**
     * Sorts the array using the HeapSort algorithm.
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
        // Build max heap
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            HeapSort.heapify(sortedArray, n, i, comparatorFn);
        }
        // Extract elements from heap one by one
        for (let i = n - 1; i > 0; i--) {
            // Move current root to end
            const temp = sortedArray[0];
            sortedArray[0] = sortedArray[i];
            sortedArray[i] = temp;
            // Heapify the reduced heap
            HeapSort.heapify(sortedArray, i, 0, comparatorFn);
        }
        return sortedArray;
    }
    /**
     * Heapify a subtree rooted at index i
     *
     * @param array - the array to heapify
     * @param heapSize - size of the heap
     * @param rootIndex - index of the root of the subtree
     * @param comparatorFn - comparator function for comparison
     */
    static heapify(array, heapSize, rootIndex, comparatorFn) {
        let largest = rootIndex;
        const leftChild = 2 * rootIndex + 1;
        const rightChild = 2 * rootIndex + 2;
        // If left child is larger than root
        if (leftChild < heapSize && comparatorFn(array[leftChild], array[largest]) > 0) {
            largest = leftChild;
        }
        // If right child is larger than largest so far
        if (rightChild < heapSize && comparatorFn(array[rightChild], array[largest]) > 0) {
            largest = rightChild;
        }
        // If largest is not root
        if (largest !== rootIndex) {
            const temp = array[rootIndex];
            array[rootIndex] = array[largest];
            array[largest] = temp;
            // Recursively heapify the affected subtree
            HeapSort.heapify(array, heapSize, largest, comparatorFn);
        }
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
     * Heapify a subtree rooted at index i (instance method)
     *
     * @param array - the array to heapify
     * @param heapSize - size of the heap
     * @param rootIndex - index of the root of the subtree
     */
    heapify(array, heapSize, rootIndex) {
        let largest = rootIndex;
        const leftChild = 2 * rootIndex + 1;
        const rightChild = 2 * rootIndex + 2;
        // If left child is larger than root
        if (leftChild < heapSize && this.defaultComparator(array[leftChild], array[largest]) > 0) {
            largest = leftChild;
        }
        // If right child is larger than largest so far
        if (rightChild < heapSize && this.defaultComparator(array[rightChild], array[largest]) > 0) {
            largest = rightChild;
        }
        // If largest is not root
        if (largest !== rootIndex) {
            const temp = array[rootIndex];
            array[rootIndex] = array[largest];
            array[largest] = temp;
            // Recursively heapify the affected subtree
            this.heapify(array, heapSize, largest);
        }
    }
    /**
     * Sorts the array using the HeapSort algorithm.
     *
     * @returns a new array with the elements sorted
     *
     * @example
     * const heapSort = new HeapSort([3, 4, 1]);
     * heapSort.sort(); // returns new array with [1, 3, 4]
     */
    sort() {
        if (this.size <= 1) {
            return this.values;
        }
        const sortedArray = [...this.values];
        // Build max heap
        for (let i = Math.floor(this.size / 2) - 1; i >= 0; i--) {
            this.heapify(sortedArray, this.size, i);
        }
        // Extract elements from heap one by one
        for (let i = this.size - 1; i > 0; i--) {
            // Move current root to end
            const temp = sortedArray[0];
            sortedArray[0] = sortedArray[i];
            sortedArray[i] = temp;
            // Heapify the reduced heap
            this.heapify(sortedArray, i, 0);
        }
        return sortedArray;
    }
    ;
}
exports.HeapSort = HeapSort;
