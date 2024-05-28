"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RingBuffer = void 0;
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
 * [ _ _ _ _ ]
 * [ 1 _ _ _ ] push(1)
 * [ 1 2 _ _ ] push(2)
 * [ _ 2 _ _ ] pop()
 */
var RingBuffer = /** @class */ (function () {
    function RingBuffer(size) {
        this._pushIndex = 0;
        this._popIndex = 0;
        this._size = size;
        this.ringBuffer = Array(size).map(function (_) { return null; });
    }
    /**
     * Pushes item into the ringBuffer
     * Will return true in case element is added, false
     * otherwise.
     *
     * @param elem - element to be added
     * @returns boolean
     */
    RingBuffer.prototype.push = function (elem) {
        if (this.ringBuffer[this._pushIndex] == null) {
            // Field is null, we can insert and update index
            this.ringBuffer[this._pushIndex++] = elem;
            this._pushIndex %= this._size;
            return true;
        }
        // console.log(`Ring Buffer is full! Element [${elem}] not added.`);
        return false;
    };
    /**
     * Pops item from the ringBuffer, returning it.
     * Returns null if no elements and notifies there
     * is nothing to pop.
     *
     * @returns T | null
     */
    RingBuffer.prototype.pop = function () {
        if (this.ringBuffer.every(function (elem) { return elem === null; })) {
            // If ringBuffer is empty
            console.log('Nothing left to pop!');
            return null;
        }
        else {
            var popValue = this.ringBuffer[this._popIndex];
            this.ringBuffer[this._popIndex++] = null;
            this._popIndex %= this._size;
            return popValue;
        }
    };
    return RingBuffer;
}());
exports.RingBuffer = RingBuffer;
