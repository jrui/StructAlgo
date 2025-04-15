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
export class QuickSort<T> {
    private readonly values: T[];
    private readonly size: number;
    private readonly defaultComparator: (a: T, b: T) => number;


    constructor(array: T[] = [], comparatorFn = QuickSort.defaultComparator) {
        this.values = [...array];
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
    static sort(array: any[], comparatorFn = this.defaultComparator ) : any[] {
        if (array.length <= 1) {
            return array;
        }

        let pivot : any = array[0];
        let leftArr : any[] = [];
        let rightArr : any[] = [];

        for (let i = 1; i < array.length; i++) {
            if (comparatorFn(array[i], pivot) < 0) {
                leftArr.push(array[i]);
            } else {
                rightArr.push(array[i]);
            }
        }

        return [...QuickSort.sort(leftArr), pivot, ...QuickSort.sort(rightArr)];
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
     * Sorts the array using the QuickSort algorithm.
     *
     * @returns a new array with the elements sorted
     *
     * @example
     * const quickSort = new QuickSort([3, 4, 1]);
     * quickSort.sort(); // returns new array with [1, 3, 4]
     */
    sort() : T[] {
        if (this.size <= 1) {
            return this.values;
        }

        let pivot : T = this.values[0];
        let leftArr : T[] = [];
        let rightArr : T[] = [];

        for (let i = 1; i < this.size; i++) {
            if (this.defaultComparator(this.values[i], pivot) < 0) {
                leftArr.push(this.values[i]);
            } else {
                rightArr.push(this.values[i]);
            }
        }

        return [...(new QuickSort(leftArr)).sort(), pivot, ...(new QuickSort(rightArr)).sort()];
    };
}
