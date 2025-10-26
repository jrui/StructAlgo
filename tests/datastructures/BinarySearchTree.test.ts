import { BinarySearchTree } from '../../src/datastructures/BinarySearchTree';
import { describe, expect, test } from '@jest/globals';

describe('BinarySearchTree', () => {
    test('should create an empty BST', () => {
        const bst = new BinarySearchTree<number>();
        expect(bst.isEmpty()).toBe(true);
        expect(bst.search(5)).toBe(false);
    });

    test('should insert and search elements', () => {
        const bst = new BinarySearchTree<number>();
        bst.insert(5);
        bst.insert(3);
        bst.insert(7);
        bst.insert(1);
        bst.insert(9);

        expect(bst.search(5)).toBe(true);
        expect(bst.search(3)).toBe(true);
        expect(bst.search(7)).toBe(true);
        expect(bst.search(10)).toBe(false);
    });

    test('should not insert duplicates', () => {
        const bst = new BinarySearchTree<number>();
        bst.insert(5);
        bst.insert(5);
        
        const inOrder = bst.inOrder();
        expect(inOrder.length).toBe(1);
        expect(inOrder[0]).toBe(5);
    });

    test('should delete elements', () => {
        const bst = new BinarySearchTree<number>();
        bst.insert(5);
        bst.insert(3);
        bst.insert(7);
        bst.insert(1);
        bst.insert(9);

        expect(bst.search(3)).toBe(true);
        bst.delete(3);
        expect(bst.search(3)).toBe(false);
    });

    test('should find min and max', () => {
        const bst = new BinarySearchTree<number>();
        bst.insert(5);
        bst.insert(3);
        bst.insert(7);
        bst.insert(1);
        bst.insert(9);

        expect(bst.min()).toBe(1);
        expect(bst.max()).toBe(9);
    });

    test('should perform in-order traversal', () => {
        const bst = new BinarySearchTree<number>();
        bst.insert(5);
        bst.insert(3);
        bst.insert(7);
        bst.insert(1);
        bst.insert(9);

        expect(bst.inOrder()).toEqual([1, 3, 5, 7, 9]);
    });

    test('should perform pre-order traversal', () => {
        const bst = new BinarySearchTree<number>();
        bst.insert(5);
        bst.insert(3);
        bst.insert(7);

        expect(bst.preOrder()).toEqual([5, 3, 7]);
    });

    test('should perform post-order traversal', () => {
        const bst = new BinarySearchTree<number>();
        bst.insert(5);
        bst.insert(3);
        bst.insert(7);

        expect(bst.postOrder()).toEqual([3, 7, 5]);
    });

    test('should work with custom comparator', () => {
        const bst = new BinarySearchTree<string>((a, b) => a.localeCompare(b));
        bst.insert('banana');
        bst.insert('apple');
        bst.insert('cherry');

        expect(bst.inOrder()).toEqual(['apple', 'banana', 'cherry']);
    });
});
