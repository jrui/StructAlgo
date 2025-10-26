/**
 * Priority Queue data structure
 * A priority queue is an abstract data type where each element has a priority.
 * Elements with higher priority are served before elements with lower priority.
 * This implementation uses a min heap internally.
 *
 * @example
 * const pq = new PriorityQueue();
 * pq.enqueue(5);
 * pq.enqueue(3);
 * pq.enqueue(7);
 * pq.peek(); // 3
 * pq.dequeue(); // 3
 * pq.peek(); // 5
 */
export declare class PriorityQueue<T> {
    private data;
    private comparator;
    constructor(comparator?: (a: T, b: T) => number);
    /**
     * Default comparator for min priority queue (smaller values have higher priority)
     */
    static defaultComparator(a: any, b: any): number;
    /**
     * Returns the number of elements in the queue
     */
    size(): number;
    /**
     * Returns true if the queue is empty
     */
    isEmpty(): boolean;
    /**
     * Returns the element with highest priority without removing it
     */
    peek(): T | null;
    /**
     * Adds an element to the queue
     */
    enqueue(value: T): void;
    /**
     * Removes and returns the element with highest priority
     */
    dequeue(): T | null;
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
     * Returns an array representation of the queue
     */
    toArray(): T[];
    /**
     * Clears all elements from the queue
     */
    clear(): void;
}
