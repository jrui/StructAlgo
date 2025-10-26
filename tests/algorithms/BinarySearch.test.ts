import { BinarySearch } from '../../src/algorithms/BinarySearch';
import { describe, expect, test } from '@jest/globals';

describe('BinarySearch', () => {
    test('should find element in sorted array (static)', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(BinarySearch.search(arr, 5)).toBe(4);
        expect(BinarySearch.search(arr, 1)).toBe(0);
        expect(BinarySearch.search(arr, 9)).toBe(8);
    });

    test('should return -1 for element not in array (static)', () => {
        const arr = [1, 2, 3, 4, 5];
        expect(BinarySearch.search(arr, 10)).toBe(-1);
        expect(BinarySearch.search(arr, 0)).toBe(-1);
    });

    test('should work with instance method', () => {
        const bs = new BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(bs.search(5)).toBe(4);
        expect(bs.search(10)).toBe(-1);
    });

    test('should work recursively', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(BinarySearch.searchRecursive(arr, 5)).toBe(4);
        expect(BinarySearch.searchRecursive(arr, 10)).toBe(-1);
    });

    test('should work with custom comparator', () => {
        const arr = ['alice', 'bob', 'charlie', 'david', 'eve'];
        const result = BinarySearch.search(arr, 'charlie', (a, b) => a.localeCompare(b));
        expect(result).toBe(2);
    });

    test('should handle empty array', () => {
        expect(BinarySearch.search([], 5)).toBe(-1);
    });

    test('should handle single element array', () => {
        expect(BinarySearch.search([5], 5)).toBe(0);
        expect(BinarySearch.search([5], 3)).toBe(-1);
    });

    test('should handle two element array', () => {
        expect(BinarySearch.search([3, 5], 3)).toBe(0);
        expect(BinarySearch.search([3, 5], 5)).toBe(1);
        expect(BinarySearch.search([3, 5], 4)).toBe(-1);
    });
});
