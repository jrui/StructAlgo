/**
 * SelectionSort is a simple sorting algorithm that divides the input array into a sorted
 * and an unsorted region. It repeatedly selects the smallest (or largest) element from
 * the unsorted region and moves it to the end of the sorted region.
 * 
 * The algorithm maintains two subarrays:
 * 1. The subarray which is already sorted
 * 2. The remaining subarray which is unsorted
 * 
 * In every iteration, the minimum element from the unsorted subarray is picked and moved
 * to the sorted subarray.
 *
 * The time complexity is O(n^2) in all cases (best, average, and worst), making it
 * inefficient for large datasets. However, it performs well on small lists and requires
 * minimal memory writes compared to other sorting algorithms.
 *
 * @example
 * const selectionSort = new SelectionSort([3, 4, 1]);
 * selectionSort.sort(); // returns new array with [1, 3, 4]
 * // or
 * SelectionSort.sort([3, 4, 1]); // returns new array with [1, 3, 4]
 *
 * @example
 * const selectionSort = new SelectionSort(
 *  ['alice', 'bob', 'charlie', 'alex', 'gavin'],
 *  (a : string, b : string) => a.localeCompare(b)
 * );
 * selectionSort.sort(); // returns new array with ['alex', 'alice', 'bob', 'charlie', 'gavin']
 */
export class SelectionSort<T> {
    private readonly values: T[];
    private readonly size: number;
    private readonly defaultComparator: (a: T, b: T) => number;


    constructor(array: T[] = [], comparatorFn = SelectionSort.defaultComparator) {
        this.values = [...array];
        this.size = array.length;
        this.defaultComparator = comparatorFn;
    }


    /**
     * Sorts the array using the SelectionSort algorithm.
     * Static method, no need to instantiate class
     *
     * @param array - the array to be sorted
     * @param comparatorFn - the comparator function used for sorting, defaults to numerical comparison
     * @returns a new array with the elements sorted
     */
    static sort(array: any[], comparatorFn = this.defaultComparator) : any[] {
        if (array.length <= 1) {
            return array;
        }

        const sortedArray = [...array];
        const n = sortedArray.length;

        for (let i = 0; i < n - 1; i++) {
            // Find the minimum element in the unsorted portion
            let minIndex = i;
            for (let j = i + 1; j < n; j++) {
                if (comparatorFn(sortedArray[j], sortedArray[minIndex]) < 0) {
                    minIndex = j;
                }
            }

            // Swap the found minimum element with the first element
            if (minIndex !== i) {
                const temp = sortedArray[i];
                sortedArray[i] = sortedArray[minIndex];
                sortedArray[minIndex] = temp;
            }
        }

        return sortedArray;
    }


    /**
     * Default comparator function used for sorting
     *
     * @param a - first element to compare
     * @param b - second element to compare
     * @returns a negative number if a < b, 0 if a = b, a positive number if a > b
     */
    static defaultComparator(a: any, b: any) : number {
        if (a < b) {
            return -1;
        } else if (a === b) {
            return 0;
        } else {
            return 1;
        }
    }


    /**
     * Sorts the array using the SelectionSort algorithm.
     *
     * @returns a new array with the elements sorted
     *
     * @example
     * const selectionSort = new SelectionSort([3, 4, 1]);
     * selectionSort.sort(); // returns new array with [1, 3, 4]
     */
    sort() : T[] {
        if (this.size <= 1) {
            return this.values;
        }

        const sortedArray = [...this.values];

        for (let i = 0; i < this.size - 1; i++) {
            // Find the minimum element in the unsorted portion
            let minIndex = i;
            for (let j = i + 1; j < this.size; j++) {
                if (this.defaultComparator(sortedArray[j], sortedArray[minIndex]) < 0) {
                    minIndex = j;
                }
            }

            // Swap the found minimum element with the first element
            if (minIndex !== i) {
                const temp = sortedArray[i];
                sortedArray[i] = sortedArray[minIndex];
                sortedArray[minIndex] = temp;
            }
        }

        return sortedArray;
    };
}
