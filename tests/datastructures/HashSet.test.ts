import { HashSet } from '../../src/datastructures/HashSet';
import { describe, expect, test } from '@jest/globals';


describe('HashSet', () => {
    test('constructor with comparator', () => {
        const hashSet = new HashSet<any>();
        expect(hashSet).toBeDefined();
    });


    const hashSet = new HashSet<{name: string, age: number}>();
    test('set', () => {
        expect(hashSet.getValues().length).toEqual(0);

        hashSet.set('captain', 20);
        expect(hashSet.get('captain')).toEqual(20);
    });

    test('hash', () => {
        expect(hashSet.getValues().length).toEqual(1);
        expect(hashSet.hash('captain')).toEqual(0);
    });

    test('has', () => {
        expect(hashSet.has('captain')).toBeTruthy();
        expect(hashSet.has('captain2')).toBeFalsy();
    });

    test('get', () => {
        expect(hashSet.get('captain')).toEqual(20);
        expect(hashSet.get('captain2')).toBeUndefined();
    });

    test('delete', () => {
        hashSet.delete('captain');
        expect(hashSet.get('captain')).toBeUndefined();
    });

    test('getValues', () => {
        hashSet.set('captain', 20);
        hashSet.set('captain2', 30);
        expect(hashSet.getValues()).toEqual([20, 30]);
    });

    test('getKeys', () => {
        expect(hashSet.getKeys()).toEqual(['captain', 'captain2']);
    });
});
