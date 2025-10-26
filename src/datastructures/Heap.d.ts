/**
 * Heap data structure (Min Heap implementation)
 * A heap is a specialized tree-based data structure that satisfies the heap property:
 * In a min heap, for any given node I, the value of I is less than or equal to the values of its children.
 *
 * @example
 * const heap = new Heap();
 * heap.insert(5);
 * heap.insert(3);
 * heap.insert(7);
 * heap.peek(); // 3
 * heap.extract(); // 3
 * heap.peek(); // 5
 */
export declare class Heap<T> {
    private data;
    private comparator;
    constructor(comparator?: (a: T, b: T) => number);
    /**
     * Default comparator for min heap (smaller values have higher priority)
     */
    static defaultComparator(a: any, b: any): number;
    /**
     * Returns the number of elements in the heap
     */
    size(): number;
    /**
     * Returns true if the heap is empty
     */
    isEmpty(): boolean;
    /**
     * Returns the top element without removing it
     */
    peek(): T | null;
    /**
     * Inserts a new element into the heap
     */
    insert(value: T): void;
    /**
     * Removes and returns the top element from the heap
     */
    extract(): T | null;
    /**
     * Moves an element up the heap to maintain heap property
     */
    private bubbleUp;
    /**
     * Moves an element down the heap to maintain heap property
     */
    private bubbleDown;
    /**
     * Swaps two elements in the heap
     */
    private swap;
    /**
     * Returns an array representation of the heap
     */
    toArray(): T[];
}
