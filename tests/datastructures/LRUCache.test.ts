import { LRUCache } from '../../src/datastructures/LRUCache';
import { describe, expect, test } from '@jest/globals';

describe('LRUCache', () => {
    test('should create an empty cache with specified capacity', () => {
        const cache = new LRUCache<number, string>(3);
        expect(cache.size()).toBe(0);
        expect(cache.get(1)).toBe(null);
    });

    test('should throw error when capacity is zero or negative', () => {
        expect(() => new LRUCache<number, string>(0)).toThrow('Capacity must be greater than 0');
        expect(() => new LRUCache<number, string>(-1)).toThrow('Capacity must be greater than 0');
    });

    test('should put and get a single item', () => {
        const cache = new LRUCache<number, string>(2);
        cache.put(1, 'one');
        expect(cache.get(1)).toBe('one');
        expect(cache.size()).toBe(1);
    });

    test('should update value for existing key', () => {
        const cache = new LRUCache<number, string>(2);
        cache.put(1, 'one');
        cache.put(1, 'ONE');
        expect(cache.get(1)).toBe('ONE');
        expect(cache.size()).toBe(1);
    });

    test('should evict least recently used item when capacity is exceeded', () => {
        const cache = new LRUCache<number, string>(2);
        cache.put(1, 'one');
        cache.put(2, 'two');
        cache.put(3, 'three'); // Should evict key 1
        expect(cache.get(1)).toBe(null);
        expect(cache.get(2)).toBe('two');
        expect(cache.get(3)).toBe('three');
        expect(cache.size()).toBe(2);
    });

    test('should mark item as recently used when accessed', () => {
        const cache = new LRUCache<number, string>(2);
        cache.put(1, 'one');
        cache.put(2, 'two');
        cache.get(1); // Mark 1 as recently used
        cache.put(3, 'three'); // Should evict key 2, not 1
        expect(cache.get(1)).toBe('one');
        expect(cache.get(2)).toBe(null);
        expect(cache.get(3)).toBe('three');
    });

    test('should mark item as recently used when updated', () => {
        const cache = new LRUCache<number, string>(2);
        cache.put(1, 'one');
        cache.put(2, 'two');
        cache.put(1, 'ONE'); // Update 1, marking it as recently used
        cache.put(3, 'three'); // Should evict key 2, not 1
        expect(cache.get(1)).toBe('ONE');
        expect(cache.get(2)).toBe(null);
        expect(cache.get(3)).toBe('three');
    });

    test('should handle capacity of 1', () => {
        const cache = new LRUCache<number, string>(1);
        cache.put(1, 'one');
        expect(cache.get(1)).toBe('one');
        cache.put(2, 'two');
        expect(cache.get(1)).toBe(null);
        expect(cache.get(2)).toBe('two');
    });

    test('should clear all items', () => {
        const cache = new LRUCache<number, string>(3);
        cache.put(1, 'one');
        cache.put(2, 'two');
        cache.put(3, 'three');
        expect(cache.size()).toBe(3);
        cache.clear();
        expect(cache.size()).toBe(0);
        expect(cache.get(1)).toBe(null);
        expect(cache.get(2)).toBe(null);
        expect(cache.get(3)).toBe(null);
    });

    test('should check if key exists without marking as recently used', () => {
        const cache = new LRUCache<number, string>(2);
        cache.put(1, 'one');
        cache.put(2, 'two');
        expect(cache.has(1)).toBe(true);
        expect(cache.has(2)).toBe(true);
        expect(cache.has(3)).toBe(false);
        // has() should not affect eviction order
        cache.put(3, 'three'); // Should evict key 1
        expect(cache.has(1)).toBe(false);
    });

    test('should delete a key', () => {
        const cache = new LRUCache<number, string>(3);
        cache.put(1, 'one');
        cache.put(2, 'two');
        expect(cache.delete(1)).toBe(true);
        expect(cache.get(1)).toBe(null);
        expect(cache.size()).toBe(1);
        expect(cache.delete(1)).toBe(false); // Already deleted
    });

    test('should return keys in order from most to least recently used', () => {
        const cache = new LRUCache<number, string>(3);
        cache.put(1, 'one');
        cache.put(2, 'two');
        cache.put(3, 'three');
        expect(cache.keys()).toEqual([3, 2, 1]);
        cache.get(1); // Move 1 to front
        expect(cache.keys()).toEqual([1, 3, 2]);
    });

    test('should return values in order from most to least recently used', () => {
        const cache = new LRUCache<number, string>(3);
        cache.put(1, 'one');
        cache.put(2, 'two');
        cache.put(3, 'three');
        expect(cache.values()).toEqual(['three', 'two', 'one']);
        cache.get(1); // Move 1 to front
        expect(cache.values()).toEqual(['one', 'three', 'two']);
    });

    test('should work with string keys', () => {
        const cache = new LRUCache<string, number>(2);
        cache.put('a', 1);
        cache.put('b', 2);
        expect(cache.get('a')).toBe(1);
        cache.put('c', 3); // Evict 'b'
        expect(cache.get('b')).toBe(null);
        expect(cache.get('c')).toBe(3);
    });

    test('should work with object values', () => {
        const cache = new LRUCache<number, { name: string }>(2);
        cache.put(1, { name: 'Alice' });
        cache.put(2, { name: 'Bob' });
        expect(cache.get(1)).toEqual({ name: 'Alice' });
        cache.put(3, { name: 'Charlie' });
        expect(cache.get(2)).toBe(null);
    });

    test('should handle multiple evictions', () => {
        const cache = new LRUCache<number, string>(2);
        cache.put(1, 'one');
        cache.put(2, 'two');
        cache.put(3, 'three');
        cache.put(4, 'four');
        expect(cache.get(1)).toBe(null);
        expect(cache.get(2)).toBe(null);
        expect(cache.get(3)).toBe('three');
        expect(cache.get(4)).toBe('four');
    });

    test('should maintain correct size after deletions', () => {
        const cache = new LRUCache<number, string>(3);
        cache.put(1, 'one');
        cache.put(2, 'two');
        cache.put(3, 'three');
        expect(cache.size()).toBe(3);
        cache.delete(2);
        expect(cache.size()).toBe(2);
        cache.put(4, 'four');
        expect(cache.size()).toBe(3);
    });

    test('should handle interleaved operations', () => {
        const cache = new LRUCache<number, string>(3);
        cache.put(1, 'one');
        cache.put(2, 'two');
        expect(cache.get(1)).toBe('one');
        cache.put(3, 'three');
        cache.put(4, 'four'); // Evict 2
        expect(cache.get(2)).toBe(null);
        expect(cache.get(1)).toBe('one');
        expect(cache.get(3)).toBe('three');
        expect(cache.get(4)).toBe('four');
    });
});
