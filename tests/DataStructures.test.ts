import * as datastructures from '../src/DataStructures';
import { describe, expect, test } from '@jest/globals';

describe('DataStructures', () => {

    test('HashSet should be defined', () => {
        expect(datastructures.HashSet).toBeDefined();
    });

    test('RingBuffer should be defined', () => {
        expect(datastructures.RingBuffer).toBeDefined();
    });

    test('Stack should be defined', () => {
        expect(datastructures.Stack).toBeDefined();
    });

    test('TreeSet should be defined', () => {
        expect(datastructures.TreeSet).toBeDefined();
    });

    test('LinkedList should be defined', () => {
        expect(datastructures.LinkedList).toBeDefined();
    });

    test('Queue should be defined', () => {
        expect(datastructures.Queue).toBeDefined();
    });

    test('LRUCache should be defined', () => {
        expect(datastructures.LRUCache).toBeDefined();
    });
});
