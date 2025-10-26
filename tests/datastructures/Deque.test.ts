import { Deque } from '../../src/datastructures/Deque';
import { describe, expect, test } from '@jest/globals';

describe('Deque', () => {
    test('should create an empty deque', () => {
        const deque = new Deque<number>();
        expect(deque.isEmpty()).toBe(true);
        expect(deque.size()).toBe(0);
        expect(deque.peekFront()).toBe(null);
        expect(deque.peekBack()).toBe(null);
    });

    test('should push and pop from front', () => {
        const deque = new Deque<number>();
        deque.pushFront(1);
        deque.pushFront(2);
        deque.pushFront(3);

        expect(deque.peekFront()).toBe(3);
        expect(deque.popFront()).toBe(3);
        expect(deque.popFront()).toBe(2);
        expect(deque.popFront()).toBe(1);
        expect(deque.popFront()).toBe(null);
    });

    test('should push and pop from back', () => {
        const deque = new Deque<number>();
        deque.pushBack(1);
        deque.pushBack(2);
        deque.pushBack(3);

        expect(deque.peekBack()).toBe(3);
        expect(deque.popBack()).toBe(3);
        expect(deque.popBack()).toBe(2);
        expect(deque.popBack()).toBe(1);
        expect(deque.popBack()).toBe(null);
    });

    test('should handle mixed operations', () => {
        const deque = new Deque<number>();
        deque.pushFront(2);
        deque.pushBack(3);
        deque.pushFront(1);
        deque.pushBack(4);

        expect(deque.toArray()).toEqual([1, 2, 3, 4]);
        expect(deque.popFront()).toBe(1);
        expect(deque.popBack()).toBe(4);
        expect(deque.toArray()).toEqual([2, 3]);
    });

    test('should return correct size', () => {
        const deque = new Deque<number>();
        expect(deque.size()).toBe(0);
        deque.pushFront(1);
        expect(deque.size()).toBe(1);
        deque.pushBack(2);
        expect(deque.size()).toBe(2);
        deque.popFront();
        expect(deque.size()).toBe(1);
    });

    test('should clear the deque', () => {
        const deque = new Deque<number>();
        deque.pushFront(1);
        deque.pushBack(2);
        expect(deque.size()).toBe(2);
        deque.clear();
        expect(deque.size()).toBe(0);
        expect(deque.isEmpty()).toBe(true);
    });

    test('should convert to string', () => {
        const deque = new Deque<number>();
        deque.pushBack(1);
        deque.pushBack(2);
        deque.pushBack(3);
        expect(deque.toString()).toBe('1,2,3');
    });
});
