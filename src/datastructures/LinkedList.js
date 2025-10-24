"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListNode = exports.LinkedList = void 0;
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
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    /**
     * Adds a new value to the end of the LinkedList.
     *
     * @param value - value to be added
     */
    push(value) {
        const newNode = new LinkedListNode(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }
    /**
     * Removes the last node from the LinkedList and returns its value.
     */
    pop() {
        if (this.tail == null) {
            return null;
        }
        let value = this.tail.value;
        if (this.tail.prev != null) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        else {
            this.head = null;
            this.tail = null;
        }
        this.length--;
        return value;
    }
    /**
     * Removes the first value from the LinkedList.
     */
    shift() {
        if (this.head == null) {
            return null;
        }
        let value = this.head.value;
        if (this.head.next != null) {
            this.head = this.head.next;
            this.head.prev = null;
        }
        else {
            this.head = null;
            this.tail = null;
        }
        this.length--;
        return value;
    }
    /**
     * Adds a new value to the beginning of the LinkedList.
     *
     * @param value - value to be added
     */
    unshift(value) {
        const newNode = new LinkedListNode(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }
    /**
     * Returns the value of the node at the given index.
     *
     * @param index - index to be searched
     * @returns T | null
     */
    getValue(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode.value;
    }
    /**
     * Returns the node at the given index.
     *
     * @param index - index to be searched
     * @returns LinkedListNode<T> | null
     */
    getNode(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    /**
     * Sets the value at the given index.
     *
     * @param index - index to be set
     * @param value - value to be set
     * @returns boolean
     */
    set(index, value) {
        if (index < 0 || index >= this.length) {
            return false;
        }
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        currentNode.value = value;
        return true;
    }
    /**
     * Inserts a new value at the given index.
     *
     * @param index - index to be inserted
     * @param value - value to be inserted
     * @returns boolean
     */
    insert(index, value) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === 0) {
            this.unshift(value);
        }
        else if (index === this.length) {
            this.push(value);
        }
        else {
            const newNode = new LinkedListNode(value);
            let currentNode = this.head;
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.next;
            }
            newNode.next = currentNode;
            newNode.prev = currentNode.prev;
            currentNode.prev.next = newNode;
            currentNode.prev = newNode;
            this.length++;
        }
        return true;
    }
    /**
     * Removes the value at the given index.
     *
     * @param index - index to be removed
     * @returns T | null
     */
    remove(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        if (currentNode.prev != null) {
            currentNode.prev.next = currentNode.next;
        }
        else {
            this.head = currentNode.next;
        }
        if (currentNode.next != null) {
            currentNode.next.prev = currentNode.prev;
        }
        else {
            this.tail = currentNode.prev;
        }
        this.length--;
        return currentNode.value;
    }
    /**
     * Returns the index of the given value.
     *
     * @param value - value to be searched
     * @returns number
     */
    indexOf(value) {
        let currentNode = this.head;
        for (let i = 0; i < this.length; i++) {
            if (currentNode.value === value) {
                return i;
            }
            currentNode = currentNode.next;
        }
        return -1;
    }
    /**
     * Returns a string representation of the LinkedList.
     *
     * @returns string
     */
    toString() {
        let currentNode = this.head;
        let str = '';
        while (currentNode != null) {
            str += currentNode.value + ' -> ';
            currentNode = currentNode.next;
        }
        return str.slice(0, -4);
    }
}
exports.LinkedList = LinkedList;
/**
 *      Node of a LinkedList data structure.
 *  Constructor takes a value and initializes it.
 *  Next and previous pointers are set to null.
 */
class LinkedListNode {
    constructor(value) {
        this.next = null;
        this.prev = null;
        this.value = value;
    }
}
exports.LinkedListNode = LinkedListNode;
