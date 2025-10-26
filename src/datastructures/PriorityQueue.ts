/**
 * Priority Queue data structure
 * A priority queue is an abstract data type where each element has a priority.
 * Elements with higher priority are served before elements with lower priority.
 * This implementation uses a min heap internally.
 *
 * @example
 * const pq = new PriorityQueue();
 * pq.enqueue(5);
 * pq.enqueue(3);
 * pq.enqueue(7);
 * pq.peek(); // 3
 * pq.dequeue(); // 3
 * pq.peek(); // 5
 */
export class PriorityQueue<T> {
    private data: T[];
    private comparator: (a: T, b: T) => number;

    constructor(comparator: (a: T, b: T) => number = PriorityQueue.defaultComparator) {
        this.data = [];
        this.comparator = comparator;
    }

    /**
     * Default comparator for min priority queue (smaller values have higher priority)
     */
    static defaultComparator(a: any, b: any): number {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }

    /**
     * Returns the number of elements in the queue
     */
    size(): number {
        return this.data.length;
    }

    /**
     * Returns true if the queue is empty
     */
    isEmpty(): boolean {
        return this.data.length === 0;
    }

    /**
     * Returns the element with highest priority without removing it
     */
    peek(): T | null {
        return this.data.length > 0 ? this.data[0] : null;
    }

    /**
     * Adds an element to the queue
     */
    enqueue(value: T): void {
        this.data.push(value);
        this.bubbleUp(this.data.length - 1);
    }

    /**
     * Removes and returns the element with highest priority
     */
    dequeue(): T | null {
        if (this.isEmpty()) return null;
        if (this.data.length === 1) return this.data.pop()!;

        const top = this.data[0];
        this.data[0] = this.data.pop()!;
        this.bubbleDown(0);
        return top;
    }

    /**
     * Moves an element up the heap to maintain heap property
     */
    private bubbleUp(index: number): void {
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
    private bubbleDown(index: number): void {
        while (true) {
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;
            let highest = index;

            if (leftChild < this.data.length && 
                this.comparator(this.data[leftChild], this.data[highest]) < 0) {
                highest = leftChild;
            }

            if (rightChild < this.data.length && 
                this.comparator(this.data[rightChild], this.data[highest]) < 0) {
                highest = rightChild;
            }

            if (highest === index) break;

            this.swap(index, highest);
            index = highest;
        }
    }

    /**
     * Swaps two elements in the heap
     */
    private swap(i: number, j: number): void {
        const temp = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = temp;
    }

    /**
     * Returns an array representation of the queue
     */
    toArray(): T[] {
        return [...this.data];
    }

    /**
     * Clears all elements from the queue
     */
    clear(): void {
        this.data = [];
    }
}
