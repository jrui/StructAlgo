"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
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
class Stack {
    constructor() {
        this.data = [];
    }
    /**
     * Appends a new element to a stack
     * @param  {any} value
     */
    push(value) {
        this.data.push(value);
    }
    /**
     * Returns the first element of a stack
     * @returns any
     */
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.data[this.data.length - 1];
    }
    /**
     * Returns true if a stack is empty
     * @returns boolean
     */
    isEmpty() {
        return this.data.length == 0;
    }
    /**
     * Removes the last element from a stack and returns it
     * @returns any
     */
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.data.pop();
    }
    /**
     * Returns a string representation of a stack
     * @param  {(value: any) => string} stringify? A function that converts an element to a string
     */
    toString(stringify) {
        return this.toArray().map(i => stringify ? stringify(i) : `${i}`).join(',');
    }
    /**
     * Returns an array representation of a stack
     * @returns T[]
     */
    toArray() {
        return [...this.data].reverse();
    }
}
exports.Stack = Stack;
