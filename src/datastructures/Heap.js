"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heap = void 0;
/**
 * Heap data structure (Min Heap implementation)
 * A heap is a specialized tree-based data structure that satisfies the heap property:
 * In a min heap, for any given node I, the value of I is less than or equal to the values of its children.
 *
 * Note: This class shares similar implementation with PriorityQueue. The separation is intentional
 * to provide distinct abstractions - Heap focuses on the data structure itself, while PriorityQueue
 * provides a queue-like interface.
 *
 * @example
 * const heap = new Heap();
 * heap.insert(5);
 * heap.insert(3);
 * heap.insert(7);
 * heap.peek(); // 3
 * heap.extract(); // 3
 * heap.peek(); // 5
 */
class Heap {
    constructor(comparator = Heap.defaultComparator) {
        this.data = [];
        this.comparator = comparator;
    }
    /**
     * Default comparator for min heap (smaller values have higher priority)
     */
    static defaultComparator(a, b) {
        if (a < b)
            return -1;
        if (a > b)
            return 1;
        return 0;
    }
    /**
     * Returns the number of elements in the heap
     */
    size() {
        return this.data.length;
    }
    /**
     * Returns true if the heap is empty
     */
    isEmpty() {
        return this.data.length === 0;
    }
    /**
     * Returns the top element without removing it
     */
    peek() {
        return this.data.length > 0 ? this.data[0] : null;
    }
    /**
     * Inserts a new element into the heap
     */
    insert(value) {
        this.data.push(value);
        this.bubbleUp(this.data.length - 1);
    }
    /**
     * Removes and returns the top element from the heap
     */
    extract() {
        if (this.isEmpty())
            return null;
        if (this.data.length === 1)
            return this.data.pop();
        const top = this.data[0];
        this.data[0] = this.data.pop();
        this.bubbleDown(0);
        return top;
    }
    /**
     * Moves an element up the heap to maintain heap property
     */
    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.comparator(this.data[index], this.data[parentIndex]) >= 0) {
                break;
            }
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }
    /**
     * Moves an element down the heap to maintain heap property
     */
    bubbleDown(index) {
        while (true) {
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;
            let smallest = index;
            if (leftChild < this.data.length &&
                this.comparator(this.data[leftChild], this.data[smallest]) < 0) {
                smallest = leftChild;
            }
            if (rightChild < this.data.length &&
                this.comparator(this.data[rightChild], this.data[smallest]) < 0) {
                smallest = rightChild;
            }
            if (smallest === index)
                break;
            this.swap(index, smallest);
            index = smallest;
        }
    }
    /**
     * Swaps two elements in the heap
     */
    swap(i, j) {
        const temp = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = temp;
    }
    /**
     * Returns an array representation of the heap
     */
    toArray() {
        return [...this.data];
    }
}
exports.Heap = Heap;
