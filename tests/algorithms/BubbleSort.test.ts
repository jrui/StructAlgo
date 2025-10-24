import { BubbleSort } from '../../src/algorithms/BubbleSort';
import { describe, expect, test } from '@jest/globals';


describe('BubbleSort', () => {
    test('constructor', () => {
        const bubbleSort = new BubbleSort();
        expect(bubbleSort).toBeDefined();
    });

    const array: any[] = [5,4,3,2,1,0,-1,-2,-3,-4,-5];
    const bubbleSort = new BubbleSort(array);
    test('numeric static sort', () => {
        expect(JSON.stringify(BubbleSort.sort(array)))
            .toEqual(JSON.stringify([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));
        expect(BubbleSort.sort(array).length).toEqual(11);
    });

    test('numeric sort', () => {
        expect(JSON.stringify(bubbleSort.sort()))
            .toEqual(JSON.stringify([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));
        expect(bubbleSort.sort().length).toEqual(11);
    });

    test('string static sort', () => {
        expect(JSON.stringify(BubbleSort.sort(
            ['alice', 'bob', 'charlie', 'alex', 'gavin'],
            (a : string, b : string) => a.localeCompare(b)
        )))
            .toEqual(JSON.stringify(['alex', 'alice', 'bob', 'charlie', 'gavin']));
        expect(BubbleSort.sort(['alice', 'bob', 'charlie', 'alex', 'gavin']).length).toEqual(5);
    });

});
