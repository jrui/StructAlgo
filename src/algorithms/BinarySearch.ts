/**
 * Binary Search algorithm
 * Binary search is an efficient algorithm for finding an item from a sorted list of items.
 * It works by repeatedly dividing in half the portion of the list that could contain the item.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1) for iterative, O(log n) for recursive
 *
 * @example
 * const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 * BinarySearch.search(arr, 5); // returns 4 (index)
 * BinarySearch.search(arr, 10); // returns -1 (not found)
 *
 * @example
 * const bs = new BinarySearch([1, 2, 3, 4, 5]);
 * bs.search(3); // returns 2 (index)
 */
export class BinarySearch<T> {
    private readonly values: T[];
    private readonly comparator: (a: T, b: T) => number;

    constructor(array: T[] = [], comparator: (a: T, b: T) => number = BinarySearch.defaultComparator) {
        this.values = [...array];
        this.comparator = comparator;
    }

    /**
     * Default comparator function
     */
    static defaultComparator(a: any, b: any): number {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }

    /**
     * Static method to perform binary search on an array
     * @param array - sorted array to search in
     * @param target - element to search for
     * @param comparator - optional comparator function
     * @returns index of the target element, or -1 if not found
     */
    static search(array: any[], target: any, comparator = this.defaultComparator): number {
        let left = 0;
        let right = array.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const cmp = comparator(array[mid], target);

            if (cmp === 0) {
                return mid;
            } else if (cmp < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }

    /**
     * Static recursive method to perform binary search on an array
     * @param array - sorted array to search in
     * @param target - element to search for
     * @param comparator - optional comparator function
     * @returns index of the target element, or -1 if not found
     */
    static searchRecursive(
        array: any[], 
        target: any, 
        comparator = this.defaultComparator,
        left: number = 0,
        right: number = array.length - 1
    ): number {
        if (left > right) {
            return -1;
        }

        const mid = Math.floor((left + right) / 2);
        const cmp = comparator(array[mid], target);

        if (cmp === 0) {
            return mid;
        } else if (cmp < 0) {
            return this.searchRecursive(array, target, comparator, mid + 1, right);
        } else {
            return this.searchRecursive(array, target, comparator, left, mid - 1);
        }
    }

    /**
     * Instance method to search for a target in the stored array
     * @param target - element to search for
     * @returns index of the target element, or -1 if not found
     */
    search(target: T): number {
        let left = 0;
        let right = this.values.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const cmp = this.comparator(this.values[mid], target);

            if (cmp === 0) {
                return mid;
            } else if (cmp < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }

    /**
     * Instance method to search recursively for a target in the stored array
     * @param target - element to search for
     * @returns index of the target element, or -1 if not found
     */
    searchRecursive(target: T, left: number = 0, right: number = this.values.length - 1): number {
        if (left > right) {
            return -1;
        }

        const mid = Math.floor((left + right) / 2);
        const cmp = this.comparator(this.values[mid], target);

        if (cmp === 0) {
            return mid;
        } else if (cmp < 0) {
            return this.searchRecursive(target, mid + 1, right);
        } else {
            return this.searchRecursive(target, left, mid - 1);
        }
    }
}
