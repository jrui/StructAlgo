export declare class TreeSet<T> {
    private comparator;
    private length;
    private elements;
    constructor(comparator: (a: T, b: T) => number);
    size(): number;
    last(): any;
    first(): any;
    isEmpty(): boolean;
    pollLast(): any[] | null;
    pollFirst(): any[] | null;
    add(element: T): void;
    /**
     * Performs a binary search of value in array
     * @param {number} value - Value to search in array
     * @return {number} If value is found, returns its index in array. Otherwise, returns a negative number indicating where the value should be inserted: -(index + 1)
     */
    binarySearch(value: T): number;
}
