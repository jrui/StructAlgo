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
var Stack = /** @class */ (function () {
    function Stack() {
        this.data = [];
    }
    /**
     * Appends a new element to a stack
     * @param  {any} value
     */
    Stack.prototype.push = function (value) {
        this.data.push(value);
    };
    /**
     * Returns the first element of a stack
     * @returns any
     */
    Stack.prototype.peek = function () {
        if (this.isEmpty()) {
            return null;
        }
        return this.data[this.data.length - 1];
    };
    /**
     * Returns true if a stack is empty
     * @returns boolean
     */
    Stack.prototype.isEmpty = function () {
        return this.data.length == 0;
    };
    /**
     * Removes the last element from a stack and returns it
     * @returns any
     */
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            return null;
        }
        return this.data.pop();
    };
    /**
     * Returns a string representation of a stack
     * @param  {(value: any) => string} stringify? A function that converts an element to a string
     */
    Stack.prototype.toString = function (stringify) {
        return this.toArray().map(function (i) { return stringify ? stringify(i) : "".concat(i); }).join(',');
    };
    /**
     * Returns an array representation of a stack
     * @returns T[]
     */
    Stack.prototype.toArray = function () {
        return __spreadArray([], this.data, true).reverse();
    };
    return Stack;
}());
exports.Stack = Stack;
