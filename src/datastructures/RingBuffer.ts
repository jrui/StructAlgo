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
export class RingBuffer<T> {
    ringBuffer: (T | null)[];
    _size: number;
    _pushIndex: number = 0;
    _popIndex:number = 0;
    
    constructor(size: number) {
        this._size = size;
        this.ringBuffer = Array(size).map(_ => null);
    }
    
    
    /**
     * Pushes item into the ringBuffer
     * Will return true in case element is added, false
     * otherwise.
     * 
     * @param elem - element to be added
     * @returns boolean
     */
    push(elem: T): boolean {
        if (this.ringBuffer[this._pushIndex] == null) {
            // Field is null, we can insert and update index
            this.ringBuffer[this._pushIndex++] = elem;
            this._pushIndex %= this._size;
            
            return true
        }
        
        // console.log(`Ring Buffer is full! Element [${elem}] not added.`);
        return false;
    }
    
    
    /**
     * Pops item from the ringBuffer, returning it.
     * Returns null if no elements and notifies there
     * is nothing to pop.
     * 
     * @returns T | null
     */
    pop(): T | null {
        if (this.ringBuffer.every(elem => elem === null)) {
            // If ringBuffer is empty
            console.log('Nothing left to pop!');
            return null;
        }
        else {
            const popValue = this.ringBuffer[this._popIndex];
            this.ringBuffer[this._popIndex++] = null;
            this._popIndex %= this._size;

            return popValue;
        }
    }
}