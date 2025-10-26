/**
 * Deque (Double-ended Queue) data structure
 * A deque is a linear data structure that allows insertion and deletion at both ends.
 *
 * @example
 * const deque = new Deque();
 * deque.pushFront(1);
 * deque.pushBack(2);
 * deque.peekFront(); // 1
 * deque.peekBack(); // 2
 * deque.popFront(); // 1
 * deque.popBack(); // 2
 */
export declare class Deque<T> {
    private data;
    constructor();
    /**
     * Adds an element to the front of the deque
     */
    pushFront(value: T): void;
    /**
     * Adds an element to the back of the deque
     */
    pushBack(value: T): void;
    /**
     * Removes and returns the element at the front of the deque
     */
    popFront(): T | null;
    /**
     * Removes and returns the element at the back of the deque
     */
    popBack(): T | null;
    /**
     * Returns the element at the front without removing it
     */
    peekFront(): T | null;
    /**
     * Returns the element at the back without removing it
     */
    peekBack(): T | null;
    /**
     * Returns true if the deque is empty
     */
    isEmpty(): boolean;
    /**
     * Returns the number of elements in the deque
     */
    size(): number;
    /**
     * Clears all elements from the deque
     */
    clear(): void;
    /**
     * Returns an array representation of the deque
     */
    toArray(): T[];
    /**
     * Returns a string representation of the deque
     */
    toString(stringify?: (value: T) => string): string;
}
