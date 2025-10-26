import { MergeSort } from '../../src/algorithms/MergeSort';
import { describe, expect, test } from '@jest/globals';


describe('MergeSort', () => {
    test('constructor', () => {
        const mergeSort = new MergeSort();
        expect(mergeSort).toBeDefined();
    });

    const array: any[] = [5,4,3,2,1,0,-1,-2,-3,-4,-5];
    const mergeSort = new MergeSort(array);
    test('numeric static sort', () => {
        expect(JSON.stringify(MergeSort.sort(array)))
            .toEqual(JSON.stringify([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));
        expect(MergeSort.sort(array).length).toEqual(11);
    });

    test('numeric sort', () => {
        expect(JSON.stringify(mergeSort.sort()))
            .toEqual(JSON.stringify([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));
        expect(mergeSort.sort().length).toEqual(11);
    });

    test('string static sort', () => {
        expect(JSON.stringify(MergeSort.sort(
            ['alice', 'bob', 'charlie', 'alex', 'gavin'],
            (a : string, b : string) => a.localeCompare(b)
        )))
            .toEqual(JSON.stringify(['alex', 'alice', 'bob', 'charlie', 'gavin']));
        expect(MergeSort.sort(['alice', 'bob', 'charlie', 'alex', 'gavin']).length).toEqual(5);
    });

    test('empty array', () => {
        expect(MergeSort.sort([])).toEqual([]);
    });

    test('single element array', () => {
        expect(MergeSort.sort([1])).toEqual([1]);
    });

    test('already sorted array', () => {
        expect(JSON.stringify(MergeSort.sort([1, 2, 3, 4, 5])))
            .toEqual(JSON.stringify([1, 2, 3, 4, 5]));
    });

    test('reverse sorted array', () => {
        expect(JSON.stringify(MergeSort.sort([5, 4, 3, 2, 1])))
            .toEqual(JSON.stringify([1, 2, 3, 4, 5]));
    });

    test('array with duplicates', () => {
        expect(JSON.stringify(MergeSort.sort([3, 1, 4, 1, 5, 9, 2, 6, 5])))
            .toEqual(JSON.stringify([1, 1, 2, 3, 4, 5, 5, 6, 9]));
    });

});
