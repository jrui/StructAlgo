import { InsertionSort } from '../../src/algorithms/InsertionSort';
import { describe, expect, test } from '@jest/globals';


describe('InsertionSort', () => {
    test('constructor', () => {
        const insertionSort = new InsertionSort();
        expect(insertionSort).toBeDefined();
    });

    const array: any[] = [5,4,3,2,1,0,-1,-2,-3,-4,-5];
    const insertionSort = new InsertionSort(array);
    test('numeric static sort', () => {
        expect(JSON.stringify(InsertionSort.sort(array)))
            .toEqual(JSON.stringify([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));
        expect(InsertionSort.sort(array).length).toEqual(11);
    });

    test('numeric sort', () => {
        expect(JSON.stringify(insertionSort.sort()))
            .toEqual(JSON.stringify([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));
        expect(insertionSort.sort().length).toEqual(11);
    });

    test('string static sort', () => {
        expect(JSON.stringify(InsertionSort.sort(
            ['alice', 'bob', 'charlie', 'alex', 'gavin'],
            (a : string, b : string) => a.localeCompare(b)
        )))
            .toEqual(JSON.stringify(['alex', 'alice', 'bob', 'charlie', 'gavin']));
        expect(InsertionSort.sort(['alice', 'bob', 'charlie', 'alex', 'gavin']).length).toEqual(5);
    });

});
