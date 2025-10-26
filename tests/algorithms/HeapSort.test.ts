import { HeapSort } from '../../src/algorithms/HeapSort';
import { describe, expect, test } from '@jest/globals';


describe('HeapSort', () => {
    test('constructor', () => {
        const heapSort = new HeapSort();
        expect(heapSort).toBeDefined();
    });

    const array: any[] = [5,4,3,2,1,0,-1,-2,-3,-4,-5];
    const heapSort = new HeapSort(array);
    test('numeric static sort', () => {
        expect(JSON.stringify(HeapSort.sort(array)))
            .toEqual(JSON.stringify([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));
        expect(HeapSort.sort(array).length).toEqual(11);
    });

    test('numeric sort', () => {
        expect(JSON.stringify(heapSort.sort()))
            .toEqual(JSON.stringify([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));
        expect(heapSort.sort().length).toEqual(11);
    });

    test('string static sort', () => {
        expect(JSON.stringify(HeapSort.sort(
            ['alice', 'bob', 'charlie', 'alex', 'gavin'],
            (a : string, b : string) => a.localeCompare(b)
        )))
            .toEqual(JSON.stringify(['alex', 'alice', 'bob', 'charlie', 'gavin']));
        expect(HeapSort.sort(['alice', 'bob', 'charlie', 'alex', 'gavin']).length).toEqual(5);
    });

});
