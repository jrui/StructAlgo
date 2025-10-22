/**
 * Class implementation form RingBuffer object
 * Should allow for push and pop operations on it,
 * reusing indexes (when free), saving up space.
 * Will wrap arround and use freed up places to save
 * up newly pushed values.
 *
 * arg size - size of ringbuffer
 *
 * @Example
 * 1. `[ _ _ _ _ ]` - new RingBuffer<number>(4)
 * 2. `[ 1 _ _ _ ]` - push(1)
 * 3. `[ 1 2 _ _ ]` - push(2)
 * 4. `[ _ 2 _ _ ]` - pop()
 * 5. `[ _ 2 3 _ ]` - push(3)
 * 6. `[ _ _ 3 _ ]` - pop()
 * 7. `[ _ _ 3 4 ]` - push(4)
 * 8. `[ 5 _ 3 4 ]` - push(5)
 * 9. `[ 5 6 3 4 ]` - push(6)
 * 10. `[ 5 6 3 4 ]` - push(7) // Buffer is full, 7 is not added
 * 11. `[ 5 6 _ 4 ]` - pop()
 * 12. `[ 5 6 _ _ ]` - pop()
 * 13. `[ _ 6 _ _ ]` - pop()
 * 14. `[ _ 6 7 _ ]` - push(7)
 */
export declare class RingBuffer<T> {
    ringBuffer: (T | null)[];
    _size: number;
    _pushIndex: number;
    _popIndex: number;
    constructor(size: number);
    /**
     * Pushes item into the ringBuffer
     * Will return true in case element is added, false
     * otherwise.
     *
     * @param elem - element to be added
     * @returns boolean
     */
    push(elem: T): boolean;
    /**
     * Pops item from the ringBuffer, returning it.
     * Returns null if no elements and notifies there
     * is nothing to pop.
     *
     * @returns T | null
     */
    pop(): T | null;
}
