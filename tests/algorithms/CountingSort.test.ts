import { CountingSort } from '../../src/algorithms/CountingSort';
import { describe, expect, test } from '@jest/globals';


describe('CountingSort', () => {
    test('constructor', () => {
        const countingSort = new CountingSort();
        expect(countingSort).toBeDefined();
    });

    const array: number[] = [5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5];
    const countingSort = new CountingSort(array);

    test('numeric static sort', () => {
        expect(JSON.stringify(CountingSort.sort(array)))
            .toEqual(JSON.stringify([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));
        expect(CountingSort.sort(array).length).toEqual(11);
    });

    test('numeric sort', () => {
        expect(JSON.stringify(countingSort.sort()))
            .toEqual(JSON.stringify([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));
        expect(countingSort.sort().length).toEqual(11);
    });

    test('sort with duplicates', () => {
        const duplicatesArray = [4, 2, 2, 8, 3, 3, 1];
        expect(JSON.stringify(CountingSort.sort(duplicatesArray)))
            .toEqual(JSON.stringify([1, 2, 2, 3, 3, 4, 8]));
    });

    test('sort already sorted array', () => {
        const sortedArray = [1, 2, 3, 4, 5];
        expect(JSON.stringify(CountingSort.sort(sortedArray)))
            .toEqual(JSON.stringify([1, 2, 3, 4, 5]));
    });

    test('sort reverse sorted array', () => {
        const reverseArray = [5, 4, 3, 2, 1];
        expect(JSON.stringify(CountingSort.sort(reverseArray)))
            .toEqual(JSON.stringify([1, 2, 3, 4, 5]));
    });

    test('sort single element', () => {
        const singleElement = [42];
        expect(JSON.stringify(CountingSort.sort(singleElement)))
            .toEqual(JSON.stringify([42]));
    });

    test('sort empty array', () => {
        const emptyArray: number[] = [];
        expect(JSON.stringify(CountingSort.sort(emptyArray)))
            .toEqual(JSON.stringify([]));
    });

    test('sort array with all same elements', () => {
        const sameElements = [5, 5, 5, 5, 5];
        expect(JSON.stringify(CountingSort.sort(sameElements)))
            .toEqual(JSON.stringify([5, 5, 5, 5, 5]));
    });

    test('sort array with negative numbers', () => {
        const negativeArray = [-10, -5, -20, -1, -15];
        expect(JSON.stringify(CountingSort.sort(negativeArray)))
            .toEqual(JSON.stringify([-20, -15, -10, -5, -1]));
    });

    test('sort array with mixed positive and negative numbers', () => {
        const mixedArray = [3, -1, 2, -5, 0, 4, -2];
        expect(JSON.stringify(CountingSort.sort(mixedArray)))
            .toEqual(JSON.stringify([-5, -2, -1, 0, 2, 3, 4]));
    });

});
