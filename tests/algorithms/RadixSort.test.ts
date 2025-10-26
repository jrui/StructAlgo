import { RadixSort } from '../../src/algorithms/RadixSort';
import { describe, expect, test } from '@jest/globals';


describe('RadixSort', () => {
    test('constructor', () => {
        const radixSort = new RadixSort();
        expect(radixSort).toBeDefined();
    });

    const array: number[] = [5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5];
    const radixSort = new RadixSort(array);

    test('numeric static sort', () => {
        expect(JSON.stringify(RadixSort.sort(array)))
            .toEqual(JSON.stringify([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));
        expect(RadixSort.sort(array).length).toEqual(11);
    });

    test('numeric sort', () => {
        expect(JSON.stringify(radixSort.sort()))
            .toEqual(JSON.stringify([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));
        expect(radixSort.sort().length).toEqual(11);
    });

    test('sort with duplicates', () => {
        const duplicatesArray = [4, 2, 2, 8, 3, 3, 1];
        expect(JSON.stringify(RadixSort.sort(duplicatesArray)))
            .toEqual(JSON.stringify([1, 2, 2, 3, 3, 4, 8]));
    });

    test('sort already sorted array', () => {
        const sortedArray = [1, 2, 3, 4, 5];
        expect(JSON.stringify(RadixSort.sort(sortedArray)))
            .toEqual(JSON.stringify([1, 2, 3, 4, 5]));
    });

    test('sort reverse sorted array', () => {
        const reverseArray = [5, 4, 3, 2, 1];
        expect(JSON.stringify(RadixSort.sort(reverseArray)))
            .toEqual(JSON.stringify([1, 2, 3, 4, 5]));
    });

    test('sort single element', () => {
        const singleElement = [42];
        expect(JSON.stringify(RadixSort.sort(singleElement)))
            .toEqual(JSON.stringify([42]));
    });

    test('sort empty array', () => {
        const emptyArray: number[] = [];
        expect(JSON.stringify(RadixSort.sort(emptyArray)))
            .toEqual(JSON.stringify([]));
    });

    test('sort array with all same elements', () => {
        const sameElements = [5, 5, 5, 5, 5];
        expect(JSON.stringify(RadixSort.sort(sameElements)))
            .toEqual(JSON.stringify([5, 5, 5, 5, 5]));
    });

    test('sort array with negative numbers', () => {
        const negativeArray = [-10, -5, -20, -1, -15];
        expect(JSON.stringify(RadixSort.sort(negativeArray)))
            .toEqual(JSON.stringify([-20, -15, -10, -5, -1]));
    });

    test('sort array with mixed positive and negative numbers', () => {
        const mixedArray = [3, -1, 2, -5, 0, 4, -2];
        expect(JSON.stringify(RadixSort.sort(mixedArray)))
            .toEqual(JSON.stringify([-5, -2, -1, 0, 2, 3, 4]));
    });

    test('sort array with large numbers', () => {
        const largeArray = [170, 45, 75, 90, 802, 24, 2, 66];
        expect(JSON.stringify(RadixSort.sort(largeArray)))
            .toEqual(JSON.stringify([2, 24, 45, 66, 75, 90, 170, 802]));
    });

    test('sort array with varying digit lengths', () => {
        const varyingArray = [1, 10, 100, 1000, 5, 50, 500];
        expect(JSON.stringify(RadixSort.sort(varyingArray)))
            .toEqual(JSON.stringify([1, 5, 10, 50, 100, 500, 1000]));
    });

    test('sort array with zero', () => {
        const zeroArray = [0, 5, -3, 0, 2, 0];
        expect(JSON.stringify(RadixSort.sort(zeroArray)))
            .toEqual(JSON.stringify([-3, 0, 0, 0, 2, 5]));
    });

    test('sort array with single digit numbers', () => {
        const singleDigitArray = [9, 1, 8, 2, 7, 3, 6, 4, 5];
        expect(JSON.stringify(RadixSort.sort(singleDigitArray)))
            .toEqual(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]));
    });

});
