import { BucketSort } from '../../src/algorithms/BucketSort';
import { describe, expect, test } from '@jest/globals';


describe('BucketSort', () => {
    test('constructor', () => {
        const bucketSort = new BucketSort();
        expect(bucketSort).toBeDefined();
    });

    const array: any[] = [5,4,3,2,1,0,-1,-2,-3,-4,-5];
    const bucketSort = new BucketSort(array);
    test('numeric static sort', () => {
        expect(JSON.stringify(BucketSort.sort(array)))
            .toEqual(JSON.stringify([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));
        expect(BucketSort.sort(array).length).toEqual(11);
    });

    test('numeric sort', () => {
        expect(JSON.stringify(bucketSort.sort()))
            .toEqual(JSON.stringify([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));
        expect(bucketSort.sort().length).toEqual(11);
    });

    test('float static sort', () => {
        const floatArray = [0.42, 0.32, 0.33, 0.52, 0.37, 0.47, 0.51];
        expect(JSON.stringify(BucketSort.sort(floatArray)))
            .toEqual(JSON.stringify([0.32, 0.33, 0.37, 0.42, 0.47, 0.51, 0.52]));
        expect(BucketSort.sort(floatArray).length).toEqual(7);
    });



    test('empty array', () => {
        expect(BucketSort.sort([])).toEqual([]);
    });

    test('single element array', () => {
        expect(BucketSort.sort([1])).toEqual([1]);
    });

    test('already sorted array', () => {
        const sortedArray = [1, 2, 3, 4, 5];
        expect(BucketSort.sort(sortedArray)).toEqual([1, 2, 3, 4, 5]);
    });

    test('reverse sorted array', () => {
        const reverseArray = [5, 4, 3, 2, 1];
        expect(BucketSort.sort(reverseArray)).toEqual([1, 2, 3, 4, 5]);
    });

    test('array with duplicates', () => {
        const duplicateArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
        expect(JSON.stringify(BucketSort.sort(duplicateArray)))
            .toEqual(JSON.stringify([1, 1, 2, 3, 3, 4, 5, 5, 6, 9]));
    });

    test('array with all same elements', () => {
        const sameArray = [5, 5, 5, 5, 5];
        expect(BucketSort.sort(sameArray)).toEqual([5, 5, 5, 5, 5]);
    });

});
