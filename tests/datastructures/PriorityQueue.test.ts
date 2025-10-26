import { PriorityQueue } from '../../src/datastructures/PriorityQueue';
import { describe, expect, test } from '@jest/globals';

describe('PriorityQueue', () => {
    test('should create an empty priority queue', () => {
        const pq = new PriorityQueue<number>();
        expect(pq.isEmpty()).toBe(true);
        expect(pq.size()).toBe(0);
        expect(pq.peek()).toBe(null);
    });

    test('should enqueue and dequeue elements by priority', () => {
        const pq = new PriorityQueue<number>();
        pq.enqueue(5);
        pq.enqueue(3);
        pq.enqueue(7);
        pq.enqueue(1);

        expect(pq.peek()).toBe(1);
        expect(pq.dequeue()).toBe(1);
        expect(pq.dequeue()).toBe(3);
        expect(pq.dequeue()).toBe(5);
        expect(pq.dequeue()).toBe(7);
        expect(pq.dequeue()).toBe(null);
    });

    test('should work as max priority queue with custom comparator', () => {
        const pq = new PriorityQueue<number>((a, b) => b - a);
        pq.enqueue(5);
        pq.enqueue(3);
        pq.enqueue(7);
        pq.enqueue(1);

        expect(pq.peek()).toBe(7);
        expect(pq.dequeue()).toBe(7);
        expect(pq.dequeue()).toBe(5);
        expect(pq.dequeue()).toBe(3);
        expect(pq.dequeue()).toBe(1);
    });

    test('should return correct size', () => {
        const pq = new PriorityQueue<number>();
        expect(pq.size()).toBe(0);
        pq.enqueue(1);
        expect(pq.size()).toBe(1);
        pq.enqueue(2);
        expect(pq.size()).toBe(2);
        pq.dequeue();
        expect(pq.size()).toBe(1);
    });

    test('should clear the queue', () => {
        const pq = new PriorityQueue<number>();
        pq.enqueue(1);
        pq.enqueue(2);
        pq.enqueue(3);
        expect(pq.size()).toBe(3);
        pq.clear();
        expect(pq.size()).toBe(0);
        expect(pq.isEmpty()).toBe(true);
    });

    test('should handle priority queue with objects', () => {
        interface Task {
            name: string;
            priority: number;
        }
        const pq = new PriorityQueue<Task>((a, b) => a.priority - b.priority);
        pq.enqueue({ name: 'Low', priority: 3 });
        pq.enqueue({ name: 'High', priority: 1 });
        pq.enqueue({ name: 'Medium', priority: 2 });

        expect(pq.dequeue()?.name).toBe('High');
        expect(pq.dequeue()?.name).toBe('Medium');
        expect(pq.dequeue()?.name).toBe('Low');
    });
});
