import { Queue } from '../../src/datastructures/Queue';
import { describe, expect, test } from '@jest/globals';

describe('Queue', () => {
    test('should create an empty queue', () => {
        const queue = new Queue();
        expect(queue.isEmpty()).toBe(true);
        expect(queue.peek()).toBe(null);
        expect(queue.dequeue()).toBe(null);
        expect(queue.size()).toBe(0);
    });


    test('enqueue elements to a queue', () => {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue.isEmpty()).toBe(false);
        expect(queue.peek()).toBe(1);
        expect(queue.size()).toBe(1);
        queue.enqueue(2);
        expect(queue.peek()).toBe(1);
        expect(queue.size()).toBe(2);
    });

    test('should dequeue elements from queue in FIFO order', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(2);
        expect(queue.dequeue()).toBe(3);
        expect(queue.dequeue()).toBe(null);
    });

    test('should represent elements correctly', () => {
        const queue = new Queue();
        expect(queue.toString()).toBe('');
        queue.enqueue(1);
        expect(queue.toString()).toBe('1');
        queue.enqueue(2);
        expect(queue.toString()).toBe('1,2');
        queue.enqueue(3);
        expect(queue.toString(a => a + ' ')).toBe('1 ,2 ,3 ');
    });

    test('should be possible to convert queue to array', () => {
        const queue = new Queue();
        expect(queue.peek()).toBe(null);
        queue.enqueue(1);
        expect(queue.peek()).toBe(1);
        queue.enqueue(2);
        expect(queue.peek()).toBe(1);
        queue.enqueue(3);
        expect(queue.peek()).toBe(1);
        expect(queue.toArray()).toEqual([1, 2, 3]);
    });

    test('should maintain correct size after operations', () => {
        const queue = new Queue();
        expect(queue.size()).toBe(0);
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.size()).toBe(3);
        queue.dequeue();
        expect(queue.size()).toBe(2);
        queue.dequeue();
        expect(queue.size()).toBe(1);
        queue.dequeue();
        expect(queue.size()).toBe(0);
    });

    test('should handle mixed enqueue and dequeue operations', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.dequeue()).toBe(1);
        queue.enqueue(3);
        expect(queue.dequeue()).toBe(2);
        expect(queue.dequeue()).toBe(3);
        expect(queue.isEmpty()).toBe(true);
    });
});
