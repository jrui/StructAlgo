import { Heap } from '../../src/datastructures/Heap';
import { describe, expect, test } from '@jest/globals';

describe('Heap', () => {
    test('should create an empty heap', () => {
        const heap = new Heap<number>();
        expect(heap.isEmpty()).toBe(true);
        expect(heap.size()).toBe(0);
        expect(heap.peek()).toBe(null);
    });

    test('should insert elements and maintain min heap property', () => {
        const heap = new Heap<number>();
        heap.insert(5);
        expect(heap.peek()).toBe(5);
        heap.insert(3);
        expect(heap.peek()).toBe(3);
        heap.insert(7);
        expect(heap.peek()).toBe(3);
        heap.insert(1);
        expect(heap.peek()).toBe(1);
    });

    test('should extract elements in sorted order', () => {
        const heap = new Heap<number>();
        heap.insert(5);
        heap.insert(3);
        heap.insert(7);
        heap.insert(1);
        heap.insert(9);

        expect(heap.extract()).toBe(1);
        expect(heap.extract()).toBe(3);
        expect(heap.extract()).toBe(5);
        expect(heap.extract()).toBe(7);
        expect(heap.extract()).toBe(9);
        expect(heap.extract()).toBe(null);
    });

    test('should work with custom comparator for max heap', () => {
        const maxHeap = new Heap<number>((a, b) => b - a);
        maxHeap.insert(5);
        maxHeap.insert(3);
        maxHeap.insert(7);
        maxHeap.insert(1);

        expect(maxHeap.peek()).toBe(7);
        expect(maxHeap.extract()).toBe(7);
        expect(maxHeap.extract()).toBe(5);
        expect(maxHeap.extract()).toBe(3);
        expect(maxHeap.extract()).toBe(1);
    });

    test('should return correct size', () => {
        const heap = new Heap<number>();
        expect(heap.size()).toBe(0);
        heap.insert(1);
        expect(heap.size()).toBe(1);
        heap.insert(2);
        expect(heap.size()).toBe(2);
        heap.extract();
        expect(heap.size()).toBe(1);
    });

    test('should convert to array', () => {
        const heap = new Heap<number>();
        heap.insert(5);
        heap.insert(3);
        heap.insert(7);
        const arr = heap.toArray();
        expect(arr.length).toBe(3);
        expect(arr).toContain(3);
        expect(arr).toContain(5);
        expect(arr).toContain(7);
    });
});
