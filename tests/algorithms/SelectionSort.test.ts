import { SelectionSort } from '../../src/algorithms/SelectionSort';
import { describe, expect, test } from '@jest/globals';


describe('SelectionSort', () => {
    test('constructor', () => {
        const selectionSort = new SelectionSort();
        expect(selectionSort).toBeDefined();
    });

    const array: any[] = [5,4,3,2,1,0,-1,-2,-3,-4,-5];
    const selectionSort = new SelectionSort(array);
    test('numeric static sort', () => {
        expect(JSON.stringify(SelectionSort.sort(array)))
            .toEqual(JSON.stringify([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));
        expect(SelectionSort.sort(array).length).toEqual(11);
    });

    test('numeric sort', () => {
        expect(JSON.stringify(selectionSort.sort()))
            .toEqual(JSON.stringify([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));
        expect(selectionSort.sort().length).toEqual(11);
    });

    test('string static sort', () => {
        expect(JSON.stringify(SelectionSort.sort(
            ['alice', 'bob', 'charlie', 'alex', 'gavin'],
            (a : string, b : string) => a.localeCompare(b)
        )))
            .toEqual(JSON.stringify(['alex', 'alice', 'bob', 'charlie', 'gavin']));
        expect(SelectionSort.sort(['alice', 'bob', 'charlie', 'alex', 'gavin']).length).toEqual(5);
    });

});
