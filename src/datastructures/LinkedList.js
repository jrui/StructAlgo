"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
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
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    /**
     * Adds a new value to the end of the LinkedList.
     *
     * @param value - value to be added
     */
    LinkedList.prototype.push = function (value) {
        var newNode = new LinkedListNode(value);
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
    };
    /**
     * Removes the last value from the LinkedList.
     */
    LinkedList.prototype.pop = function () {
        if (this.tail == null) {
            return null;
        }
        var value = this.tail.value;
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
    };
    /**
     * Removes the first value from the LinkedList.
     */
    LinkedList.prototype.shift = function () {
        if (this.head == null) {
            return null;
        }
        var value = this.head.value;
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
    };
    /**
     * Adds a new value to the beginning of the LinkedList.
     *
     * @param value - value to be added
     */
    LinkedList.prototype.unshift = function (value) {
        var newNode = new LinkedListNode(value);
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
    };
    /**
     * Returns the value at the given index.
     *
     * @param index - index to be searched
     * @returns T | null
     */
    LinkedList.prototype.get = function (index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        var currentNode = this.head;
        for (var i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode.value;
    };
    /**
     * Sets the value at the given index.
     *
     * @param index - index to be set
     * @param value - value to be set
     * @returns boolean
     */
    LinkedList.prototype.set = function (index, value) {
        if (index < 0 || index >= this.length) {
            return false;
        }
        var currentNode = this.head;
        for (var i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        currentNode.value = value;
        return true;
    };
    /**
     * Inserts a new value at the given index.
     *
     * @param index - index to be inserted
     * @param value - value to be inserted
     * @returns boolean
     */
    LinkedList.prototype.insert = function (index, value) {
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
            var newNode = new LinkedListNode(value);
            var currentNode = this.head;
            for (var i = 0; i < index; i++) {
                currentNode = currentNode.next;
            }
            newNode.next = currentNode;
            newNode.prev = currentNode.prev;
            currentNode.prev.next = newNode;
            currentNode.prev = newNode;
            this.length++;
        }
        return true;
    };
    /**
     * Removes the value at the given index.
     *
     * @param index - index to be removed
     * @returns T | null
     */
    LinkedList.prototype.remove = function (index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        var currentNode = this.head;
        for (var i = 0; i < index; i++) {
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
    };
    /**
     * Returns the index of the given value.
     *
     * @param value - value to be searched
     * @returns number
     */
    LinkedList.prototype.indexOf = function (value) {
        var currentNode = this.head;
        for (var i = 0; i < this.length; i++) {
            if (currentNode.value === value) {
                return i;
            }
            currentNode = currentNode.next;
        }
        return -1;
    };
    /**
     * Returns a string representation of the LinkedList.
     *
     * @returns string
     */
    LinkedList.prototype.toString = function () {
        var currentNode = this.head;
        var str = '';
        while (currentNode != null) {
            str += currentNode.value + ' ';
            currentNode = currentNode.next;
        }
        return str;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
/**
 *      Node of a LinkedList data structure.
 *  Constructor takes a value and initializes it.
 *  Next and previous pointers are set to null.
 */
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(value) {
        this.next = null;
        this.prev = null;
        this.value = value;
    }
    return LinkedListNode;
}());
