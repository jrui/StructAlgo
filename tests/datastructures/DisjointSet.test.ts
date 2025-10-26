import { DisjointSet } from '../../src/datastructures/DisjointSet';
import { describe, expect, test } from '@jest/globals';

describe('DisjointSet', () => {
    test('should create a disjoint set', () => {
        const ds = new DisjointSet(5);
        expect(ds.size()).toBe(5);
        expect(ds.getCount()).toBe(5);
    });

    test('should initially have each element in its own set', () => {
        const ds = new DisjointSet(5);
        expect(ds.isConnected(0, 1)).toBe(false);
        expect(ds.isConnected(0, 2)).toBe(false);
        expect(ds.isConnected(1, 2)).toBe(false);
    });

    test('should union two elements', () => {
        const ds = new DisjointSet(5);
        ds.union(0, 1);
        expect(ds.isConnected(0, 1)).toBe(true);
        expect(ds.getCount()).toBe(4);
    });

    test('should handle multiple unions', () => {
        const ds = new DisjointSet(5);
        ds.union(0, 1);
        ds.union(2, 3);
        ds.union(1, 2);

        expect(ds.isConnected(0, 1)).toBe(true);
        expect(ds.isConnected(2, 3)).toBe(true);
        expect(ds.isConnected(0, 3)).toBe(true);
        expect(ds.isConnected(0, 4)).toBe(false);
        expect(ds.getCount()).toBe(2);
    });

    test('should return false when unioning already connected elements', () => {
        const ds = new DisjointSet(5);
        expect(ds.union(0, 1)).toBe(true);
        expect(ds.union(0, 1)).toBe(false);
    });

    test('should find correct root', () => {
        const ds = new DisjointSet(5);
        ds.union(0, 1);
        ds.union(1, 2);

        const root0 = ds.find(0);
        const root1 = ds.find(1);
        const root2 = ds.find(2);
        
        expect(root0).toBe(root1);
        expect(root1).toBe(root2);
    });

    test('should get all elements in a set', () => {
        const ds = new DisjointSet(6);
        ds.union(0, 1);
        ds.union(1, 2);
        ds.union(3, 4);

        const set0 = ds.getSet(0);
        expect(set0.length).toBe(3);
        expect(set0).toContain(0);
        expect(set0).toContain(1);
        expect(set0).toContain(2);

        const set3 = ds.getSet(3);
        expect(set3.length).toBe(2);
        expect(set3).toContain(3);
        expect(set3).toContain(4);
    });

    test('should handle large number of elements', () => {
        const ds = new DisjointSet(1000);
        for (let i = 0; i < 999; i++) {
            ds.union(i, i + 1);
        }
        expect(ds.isConnected(0, 999)).toBe(true);
        expect(ds.getCount()).toBe(1);
    });
});
