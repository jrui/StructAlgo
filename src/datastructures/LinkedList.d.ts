/**
 *      LinkedList data structure. It is a linear data structure where elements are stored in a non-contiguous manner.
 * Each element is a separate object and contains a reference to the next and previous elements in the LinkedList.
 * Each element is called a node and consists of a value and a reference to the next and previous nodes.
 * The first node is called the head and the last node is called the tail.
 *
 *     The LinkedList class has the following methods:
 * - push(value: T): void - Adds a new value to the end of the LinkedList.
 * - pop(): T | null - Removes the last value from the LinkedList.
 * - shift(): T | null - Removes the first value from the LinkedList.
 * - unshift(value: T): void - Adds a new value to the beginning of the LinkedList.
 * - get(index: number): T | null - Returns the value at the given index.
 * - set(index: number, value: T): boolean - Sets the value at the given index.
 * - insert(index: number, value: T): boolean - Inserts a new value at the given index.
 * - remove(index: number): T | null - Removes the value at the given index.
 * - indexOf(value: T): number - Returns the index of the given value.
 * - toString(): string - Returns a string representation of the LinkedList.
 */
export declare class LinkedList<T> {
    head: LinkedListNode<T> | null;
    tail: LinkedListNode<T> | null;
    length: number;
    /**
     * Adds a new value to the end of the LinkedList.
     *
     * @param value - value to be added
     */
    push(value: T): void;
    /**
     * Removes the last node from the LinkedList and returns its value.
     */
    pop(): T | null;
    /**
     * Removes the first value from the LinkedList.
     */
    shift(): T | null;
    /**
     * Adds a new value to the beginning of the LinkedList.
     *
     * @param value - value to be added
     */
    unshift(value: T): void;
    /**
     * Returns the value of the node at the given index.
     *
     * @param index - index to be searched
     * @returns T | null
     */
    getValue(index: number): T | null;
    /**
     * Returns the node at the given index.
     *
     * @param index - index to be searched
     * @returns LinkedListNode<T> | null
     */
    getNode(index: number): LinkedListNode<T> | null;
    /**
     * Sets the value at the given index.
     *
     * @param index - index to be set
     * @param value - value to be set
     * @returns boolean
     */
    set(index: number, value: T): boolean;
    /**
     * Inserts a new value at the given index.
     *
     * @param index - index to be inserted
     * @param value - value to be inserted
     * @returns boolean
     */
    insert(index: number, value: T): boolean;
    /**
     * Removes the value at the given index.
     *
     * @param index - index to be removed
     * @returns T | null
     */
    remove(index: number): T | null;
    /**
     * Returns the index of the given value.
     *
     * @param value - value to be searched
     * @returns number
     */
    indexOf(value: T): number;
    /**
     * Returns a string representation of the LinkedList.
     *
     * @returns string
     */
    toString(): string;
}
/**
 *      Node of a LinkedList data structure.
 *  Constructor takes a value and initializes it.
 *  Next and previous pointers are set to null.
 */
export declare class LinkedListNode<T> {
    value: T;
    next: LinkedListNode<T> | null;
    prev: LinkedListNode<T> | null;
    constructor(value: T);
}
