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
export class Queue<T> {
    private readonly data: any[];

    constructor() {
        this.data = [];
    }


    /**
     * Appends a new element to the end of the queue
     * @param  {any} value
     */
    enqueue(value: T) {
        this.data.push(value);
    }


    /**
     * Returns the first element of a queue
     * @returns any
     */
    peek(): T | null {
        if (this.isEmpty()) {
            return null;
        }

        return this.data[0];
    }


    /**
     * Returns true if a queue is empty
     * @returns boolean
     */
    isEmpty(): boolean {
        return this.data.length == 0;
    }


    /**
     * Removes the first element from a queue and returns it
     * @returns any
     */
    dequeue(): T | null {
        if (this.isEmpty()) {
            return null;
        }

        return this.data.shift();
    }


    /**
     * Returns the number of elements in the queue
     * @returns number
     */
    size(): number {
        return this.data.length;
    }


    /**
     * Returns a string representation of a queue
     * @param  {(value: any) => string} stringify? A function that converts an element to a string
     */
    toString(stringify?: (value: T) => string) {
        return this.toArray().map(i => stringify ? stringify(i) : `${i}`).join(',');
    }


    /**
     * Returns an array representation of a queue
     * @returns T[]
     */
    toArray(): T[] {
        return [...this.data];
    }
}
