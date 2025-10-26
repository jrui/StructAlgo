import * as algorithms from '../src/Algorithms';
import { describe, expect, test } from '@jest/globals';

describe('Algorithms', () => {

    test('QuickSort should be defined', () => {
        expect(algorithms.QuickSort).toBeDefined();
    });

    test('BubbleSort should be defined', () => {
        expect(algorithms.BubbleSort).toBeDefined();
    });

    test('CountingSort should be defined', () => {
        expect(algorithms.CountingSort).toBeDefined();
    });

});
