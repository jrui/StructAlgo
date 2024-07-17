import { QuickSort } from '../../src/algorithms/QuickSort';
import { describe, expect, test } from '@jest/globals';


describe('QuickSort', () => {
    test('constructor', () => {
        const quickSort = new QuickSort();
        expect(quickSort).toBeDefined();
    });

    const array: any[] = [5,4,3,2,1,0,-1,-2,-3,-4,-5];
    const quickSort = new QuickSort(array);
    test('numeric static sort', () => {
        expect(JSON.stringify(QuickSort.sort(array)))
            .toEqual(JSON.stringify([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));
        expect(QuickSort.sort(array).length).toEqual(11);
    });

    test('numeric sort', () => {
        expect(JSON.stringify(quickSort.sort()))
            .toEqual(JSON.stringify([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));
        expect(quickSort.sort().length).toEqual(11);
    });

    test('string static sort', () => {
        expect(JSON.stringify(QuickSort.sort(
            ['alice', 'bob', 'charlie', 'alex', 'gavin'],
            (a : string, b : string) => a.localeCompare(b)
        )))
            .toEqual(JSON.stringify(['alex', 'alice', 'bob', 'charlie', 'gavin']));
        expect(QuickSort.sort(['alice', 'bob', 'charlie', 'alex', 'gavin']).length).toEqual(5);
    });

});
