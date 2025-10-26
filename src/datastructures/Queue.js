"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
/**
 *  Queue data structure
 *
 *  @example
 *  const queue = new Queue();
 *  queue.enqueue(1);
 *  queue.enqueue(2);
 *  queue.peek(); // 1
 *  queue.dequeue(); // 1
 *  queue.peek(); // 2
 *  queue.dequeue(); // 2
 *  queue.peek(); // null
 *  queue.dequeue(); // null
 *  queue.isEmpty(); // true
 */
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    /**
     * Appends a new element to the end of the queue
     * @param  {any} value
     */
    Queue.prototype.enqueue = function (value) {
        this.data.push(value);
    };
    /**
     * Returns the first element of a queue
     * @returns any
     */
    Queue.prototype.peek = function () {
        if (this.isEmpty()) {
            return null;
        }
        return this.data[0];
    };
    /**
     * Returns true if a queue is empty
     * @returns boolean
     */
    Queue.prototype.isEmpty = function () {
        return this.data.length == 0;
    };
    /**
     * Removes the first element from a queue and returns it
     * @returns any
     */
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            return null;
        }
        return this.data.shift();
    };
    /**
     * Returns the number of elements in the queue
     * @returns number
     */
    Queue.prototype.size = function () {
        return this.data.length;
    };
    /**
     * Returns a string representation of a queue
     * @param  {(value: any) => string} stringify? A function that converts an element to a string
     */
    Queue.prototype.toString = function (stringify) {
        return this.toArray().map(function (i) { return stringify ? stringify(i) : "".concat(i); }).join(',');
    };
    /**
     * Returns an array representation of a queue
     * @returns T[]
     */
    Queue.prototype.toArray = function () {
        return __spreadArray([], this.data, true);
    };
    return Queue;
}());
exports.Queue = Queue;
