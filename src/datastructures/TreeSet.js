"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeSet = void 0;
/**
 * TreeSet is a set of elements ordered by a comparator function.
 * It is implemented as a sorted array.
 *
 * @example
 * const treeSet = new TreeSet<number>((a, b) => a - b);
 * treeSet.setElements([1, 2, 3]);
 * treeSet.size(); // 3
 */
class TreeSet {
    constructor(comparator) {
        this.comparator = comparator;
        this.elements = [];
        this.length = 0;
    }
    setElements(elements) {
        this.elements = elements;
        this.length = elements.length;
    }
    size() {
        return this.elements.length;
    }
    last() {
        if (this.isEmpty())
            return null;
        else if (this.length === 1)
            return this.first();
        else
            return this.elements[this.length - 1];
    }
    first() {
        if (this.isEmpty())
            return null;
        else
            return this.elements[0];
    }
    isEmpty() {
        return this.size() === 0;
    }
    pullLast() {
        if (this.length > 0) {
            this.length--;
            return this.elements.splice(this.length, 1);
        }
        return null;
    }
    pullFirst() {
        if (this.length > 0) {
            this.length--;
            return this.elements.splice(0, 1);
        }
        return null;
    }
    add(element) {
        let index = this.binarySearch(element);
        if (index < 0) {
            index = -(index + 1);
        }
        this.elements.splice(index, 0, element);
        this.length++;
    }
    /**
     * Performs a binary search of value in array
     * @param {number} value - Value to search in array
     * @return {number} If value is found, returns its index in array. Otherwise, returns a negative number indicating where the value should be inserted: -(index + 1)
     */
    binarySearch(value) {
        let low = 0;
        let high = this.elements.length - 1;
        while (low <= high) {
            const mid = (low + high) >>> 1;
            const midValue = this.elements[mid];
            const cmp = this.comparator(midValue, value);
            if (cmp < 0) {
                low = mid + 1;
            }
            else if (cmp > 0) {
                high = mid - 1;
            }
            else {
                return mid;
            }
        }
        return -(low + 1);
    }
}
exports.TreeSet = TreeSet;
