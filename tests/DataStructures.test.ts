import * as datastructures from '../src/DataStructures';
import { describe, expect, test } from '@jest/globals';

describe('DataStructures', () => {

    test('TreeSet should be defined', () => {
        expect(datastructures.TreeSet).toBeDefined();
    });

    test('HashSet should be defined', () => {
        expect(datastructures.HashSet).toBeDefined();
    });
});
