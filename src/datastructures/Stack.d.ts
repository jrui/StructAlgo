/**
 *  Stack data structure
 *
 *  @example
 *  const stack = new Stack();
 *  stack.push(1);
 *  stack.push(2);
 *  stack.peek(); // 2
 *  stack.pop(); // 2
 *  stack.peek(); // 1
 *  stack.pop(); // 1
 *  stack.peek(); // null
 *  stack.pop(); // null
 *  stack.isEmpty(); // true
 */
export declare class Stack<T> {
    private readonly data;
    constructor();
    /**
     * Appends a new element to a stack
     * @param  {any} value
     */
    push(value: T): void;
    /**
     * Returns the first element of a stack
     * @returns any
     */
    peek(): T | null;
    /**
     * Returns true if a stack is empty
     * @returns boolean
     */
    isEmpty(): boolean;
    /**
     * Removes the last element from a stack and returns it
     * @returns any
     */
    pop(): T | null;
    /**
     * Returns a string representation of a stack
     * @param  {(value: any) => string} stringify? A function that converts an element to a string
     */
    toString(stringify?: (value: T) => string): string;
    /**
     * Returns an array representation of a stack
     * @returns T[]
     */
    toArray(): T[];
}
