import { TreeSet } from '../src/TreeSet';
import { describe, expect, test, beforeEach } from '@jest/globals';

describe('TreeSet', () => {
    test('constructor with comparator', () => {
        const treeSet = new TreeSet<number>((a, b) => a - b);
        expect(treeSet).toBeDefined();
    });

    const treeSet = new TreeSet<number>((a, b) => a.toString().localeCompare(b.toString()));

    test('setElements', () => {
        treeSet.setElements([1, 2, 3]);
        expect(treeSet.size()).toBe(3);
    });

    test('size', () => {
        expect(treeSet.size()).toBe(3);
    });

    test('last', () => {
        expect(treeSet.last()).toBe(3);
        expect(treeSet.size()).toBe(3);
    });

    test('first', () => {
        expect(treeSet.first()).toBe(1);
        expect(treeSet.size()).toBe(3);
    });

    test('isEmpty', () => {
        expect(treeSet.isEmpty()).toBe(false);
    });

    test('pullLast', () => {
        expect(treeSet.pullLast()).toEqual([3]);
        expect(treeSet.size()).toBe(2);
    });

    test('pullFirst', () => {
        expect(treeSet.pullFirst()).toEqual([1]);
        expect(treeSet.size()).toBe(1);
    });

    test('add', () => {
        treeSet.add(4);
        expect(treeSet.size()).toBe(2);
        expect(treeSet.last()).toBe(4);
        expect(treeSet.first()).toBe(2);
    });

    test('binarySearch', () => {
        expect(treeSet.binarySearch(3)).toBeLessThan(0);
        expect(treeSet.binarySearch(2)).toBe(0);
        expect(treeSet.binarySearch(4)).toBe(1);
        expect(treeSet.size()).toBe(2);
    });
});
