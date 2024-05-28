import { RingBuffer } from '../../src/datastructures/RingBuffer';
import { describe, expect, test } from '@jest/globals';


describe('RingBuffer', () => {
    let size: number = 6
    let buff = new RingBuffer<number>(size);
    let currentElem: number = 1;

    const fillRingBuffer = () => {
        for(let i = 0; i < size; i++) {
            buff.push(currentElem++);    
        }
        // console.log(`Added ${size} elements to the ringBuffer`);
        // console.log(`RingBuffer: ${JSON.stringify(buff)}\n`);
    }

    const emptyRingBuffer = () => {
        for(let i = 0; i < size; i++) {
            buff.pop();
        }
        // console.log(`Emptied ringBuffer`);
        // console.log(`RingBuffer: ${JSON.stringify(buff)}\n`);
    }

    test('push', () => {
        expect(buff).toBeDefined();
        fillRingBuffer();
        expect(buff.push(currentElem)).toEqual(false);
        expect(buff.pop()).toEqual(1);
        expect(buff.push(currentElem)).toEqual(true);
    });

    test('pop', () => {
        expect(buff).toBeDefined();
        emptyRingBuffer();
        expect(buff.pop()).toBeNull();
        expect(buff.push(currentElem)).toEqual(true);
        expect(buff.pop()).toEqual(currentElem);
    });
});
