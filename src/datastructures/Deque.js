"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deque = void 0;
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
class Deque {
    constructor() {
        this.data = [];
    }
    /**
     * Adds an element to the front of the deque
     */
    pushFront(value) {
        this.data.unshift(value);
    }
    /**
     * Adds an element to the back of the deque
     */
    pushBack(value) {
        this.data.push(value);
    }
    /**
     * Removes and returns the element at the front of the deque
     */
    popFront() {
        if (this.isEmpty())
            return null;
        return this.data.shift();
    }
    /**
     * Removes and returns the element at the back of the deque
     */
    popBack() {
        if (this.isEmpty())
            return null;
        return this.data.pop();
    }
    /**
     * Returns the element at the front without removing it
     */
    peekFront() {
        if (this.isEmpty())
            return null;
        return this.data[0];
    }
    /**
     * Returns the element at the back without removing it
     */
    peekBack() {
        if (this.isEmpty())
            return null;
        return this.data[this.data.length - 1];
    }
    /**
     * Returns true if the deque is empty
     */
    isEmpty() {
        return this.data.length === 0;
    }
    /**
     * Returns the number of elements in the deque
     */
    size() {
        return this.data.length;
    }
    /**
     * Clears all elements from the deque
     */
    clear() {
        this.data = [];
    }
    /**
     * Returns an array representation of the deque
     */
    toArray() {
        return [...this.data];
    }
    /**
     * Returns a string representation of the deque
     */
    toString(stringify) {
        return this.data.map(i => stringify ? stringify(i) : `${i}`).join(',');
    }
}
exports.Deque = Deque;
