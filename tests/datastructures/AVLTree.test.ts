import { AVLTree, AVLNode } from '../../src/datastructures/AVLTree';
import { describe, expect, test, beforeEach } from '@jest/globals';

describe('AVLTree', () => {
    test('constructor with comparator', () => {
        const tree = new AVLTree<number>((a, b) => a - b);
        expect(tree).toBeDefined();
        expect(tree.isEmpty()).toBe(true);
        expect(tree.size()).toBe(0);
    });

    describe('Insert operations', () => {
        test('insert single element', () => {
            const tree = new AVLTree<number>((a, b) => a - b);
            tree.insert(10);
            expect(tree.size()).toBe(1);
            expect(tree.contains(10)).toBe(true);
            expect(tree.isEmpty()).toBe(false);
        });

        test('insert multiple elements', () => {
            const tree = new AVLTree<number>((a, b) => a - b);
            tree.insert(10);
            tree.insert(20);
            tree.insert(5);
            tree.insert(15);
            expect(tree.size()).toBe(4);
            expect(tree.contains(10)).toBe(true);
            expect(tree.contains(20)).toBe(true);
            expect(tree.contains(5)).toBe(true);
            expect(tree.contains(15)).toBe(true);
        });

        test('insert duplicate values', () => {
            const tree = new AVLTree<number>((a, b) => a - b);
            tree.insert(10);
            tree.insert(10);
            tree.insert(10);
            expect(tree.size()).toBe(1);
        });

        test('insert maintains sorted order', () => {
            const tree = new AVLTree<number>((a, b) => a - b);
            tree.insert(50);
            tree.insert(30);
            tree.insert(70);
            tree.insert(20);
            tree.insert(40);
            tree.insert(60);
            tree.insert(80);
            
            const inorder = tree.inorderTraversal();
            expect(inorder).toEqual([20, 30, 40, 50, 60, 70, 80]);
        });
    });

    describe('Delete operations', () => {
        test('delete from empty tree', () => {
            const tree = new AVLTree<number>((a, b) => a - b);
            expect(tree.delete(10)).toBe(false);
        });

        test('delete existing element', () => {
            const tree = new AVLTree<number>((a, b) => a - b);
            tree.insert(10);
            tree.insert(20);
            tree.insert(5);
            
            expect(tree.delete(10)).toBe(true);
            expect(tree.size()).toBe(2);
            expect(tree.contains(10)).toBe(false);
            expect(tree.contains(20)).toBe(true);
            expect(tree.contains(5)).toBe(true);
        });

        test('delete non-existing element', () => {
            const tree = new AVLTree<number>((a, b) => a - b);
            tree.insert(10);
            tree.insert(20);
            
            expect(tree.delete(30)).toBe(false);
            expect(tree.size()).toBe(2);
        });

        test('delete leaf node', () => {
            const tree = new AVLTree<number>((a, b) => a - b);
            tree.insert(10);
            tree.insert(5);
            tree.insert(15);
            
            tree.delete(5);
            expect(tree.contains(5)).toBe(false);
            expect(tree.size()).toBe(2);
        });

        test('delete node with one child', () => {
            const tree = new AVLTree<number>((a, b) => a - b);
            tree.insert(10);
            tree.insert(5);
            tree.insert(3);
            
            tree.delete(5);
            expect(tree.contains(5)).toBe(false);
            expect(tree.contains(3)).toBe(true);
            expect(tree.size()).toBe(2);
        });

        test('delete node with two children', () => {
            const tree = new AVLTree<number>((a, b) => a - b);
            tree.insert(10);
            tree.insert(5);
            tree.insert(15);
            tree.insert(3);
            tree.insert(7);
            
            tree.delete(5);
            expect(tree.contains(5)).toBe(false);
            expect(tree.contains(3)).toBe(true);
            expect(tree.contains(7)).toBe(true);
            expect(tree.size()).toBe(4);
        });

        test('delete all elements', () => {
            const tree = new AVLTree<number>((a, b) => a - b);
            tree.insert(10);
            tree.insert(20);
            tree.insert(5);
            
            tree.delete(10);
            tree.delete(20);
            tree.delete(5);
            
            expect(tree.isEmpty()).toBe(true);
            expect(tree.size()).toBe(0);
        });
    });

    describe('Search operations', () => {
        test('contains returns false for empty tree', () => {
            const tree = new AVLTree<number>((a, b) => a - b);
            expect(tree.contains(10)).toBe(false);
        });

        test('contains returns true for existing element', () => {
            const tree = new AVLTree<number>((a, b) => a - b);
            tree.insert(10);
            tree.insert(20);
            tree.insert(5);
            
            expect(tree.contains(10)).toBe(true);
            expect(tree.contains(20)).toBe(true);
            expect(tree.contains(5)).toBe(true);
        });

        test('contains returns false for non-existing element', () => {
            const tree = new AVLTree<number>((a, b) => a - b);
            tree.insert(10);
            tree.insert(20);
            
            expect(tree.contains(5)).toBe(false);
            expect(tree.contains(30)).toBe(false);
        });
    });

    describe('Balancing - Right rotation (LL case)', () => {
        test('right rotation on insert', () => {
            const tree = new AVLTree<number>((a, b) => a - b);
            tree.insert(30);
            tree.insert(20);
            tree.insert(10); // This should trigger right rotation
            
            expect(tree.getTreeHeight()).toBe(2);
            expect(tree.inorderTraversal()).toEqual([10, 20, 30]);
        });
    });

    describe('Balancing - Left rotation (RR case)', () => {
        test('left rotation on insert', () => {
            const tree = new AVLTree<number>((a, b) => a - b);
            tree.insert(10);
            tree.insert(20);
            tree.insert(30); // This should trigger left rotation
            
            expect(tree.getTreeHeight()).toBe(2);
            expect(tree.inorderTraversal()).toEqual([10, 20, 30]);
        });
    });

    describe('Balancing - Left-Right rotation (LR case)', () => {
        test('left-right rotation on insert', () => {
            const tree = new AVLTree<number>((a, b) => a - b);
            tree.insert(30);
            tree.insert(10);
            tree.insert(20); // This should trigger left-right rotation
            
            expect(tree.getTreeHeight()).toBe(2);
            expect(tree.inorderTraversal()).toEqual([10, 20, 30]);
        });
    });

    describe('Balancing - Right-Left rotation (RL case)', () => {
        test('right-left rotation on insert', () => {
            const tree = new AVLTree<number>((a, b) => a - b);
            tree.insert(10);
            tree.insert(30);
            tree.insert(20); // This should trigger right-left rotation
            
            expect(tree.getTreeHeight()).toBe(2);
            expect(tree.inorderTraversal()).toEqual([10, 20, 30]);
        });
    });

    describe('Balancing on delete', () => {
        test('maintains balance after deletion', () => {
            const tree = new AVLTree<number>((a, b) => a - b);
            tree.insert(50);
            tree.insert(25);
            tree.insert(75);
            tree.insert(10);
            tree.insert(30);
            tree.insert(60);
            tree.insert(80);
            tree.insert(5);
            tree.insert(15);
            
            tree.delete(80);
            tree.delete(75);
            
            const inorder = tree.inorderTraversal();
            expect(inorder).toEqual([5, 10, 15, 25, 30, 50, 60]);
            // Tree should still be balanced
            expect(tree.getTreeHeight()).toBeLessThanOrEqual(4);
        });
    });

    describe('Traversal operations', () => {
        let tree: AVLTree<number>;

        beforeEach(() => {
            tree = new AVLTree<number>((a, b) => a - b);
            tree.insert(50);
            tree.insert(30);
            tree.insert(70);
            tree.insert(20);
            tree.insert(40);
            tree.insert(60);
            tree.insert(80);
        });

        test('inorder traversal', () => {
            expect(tree.inorderTraversal()).toEqual([20, 30, 40, 50, 60, 70, 80]);
        });

        test('preorder traversal', () => {
            const preorder = tree.preorderTraversal();
            expect(preorder.length).toBe(7);
            expect(preorder[0]).toBe(50); // Root should be first
        });

        test('postorder traversal', () => {
            const postorder = tree.postorderTraversal();
            expect(postorder.length).toBe(7);
            expect(postorder[postorder.length - 1]).toBe(50); // Root should be last
        });
    });

    describe('Min and Max operations', () => {
        test('min and max on empty tree', () => {
            const tree = new AVLTree<number>((a, b) => a - b);
            expect(tree.min()).toBe(null);
            expect(tree.max()).toBe(null);
        });

        test('min and max on single element tree', () => {
            const tree = new AVLTree<number>((a, b) => a - b);
            tree.insert(10);
            expect(tree.min()).toBe(10);
            expect(tree.max()).toBe(10);
        });

        test('min and max on multiple elements', () => {
            const tree = new AVLTree<number>((a, b) => a - b);
            tree.insert(50);
            tree.insert(30);
            tree.insert(70);
            tree.insert(20);
            tree.insert(80);
            
            expect(tree.min()).toBe(20);
            expect(tree.max()).toBe(80);
        });
    });

    describe('Clear operation', () => {
        test('clear removes all elements', () => {
            const tree = new AVLTree<number>((a, b) => a - b);
            tree.insert(10);
            tree.insert(20);
            tree.insert(5);
            
            tree.clear();
            
            expect(tree.isEmpty()).toBe(true);
            expect(tree.size()).toBe(0);
            expect(tree.contains(10)).toBe(false);
        });
    });

    describe('Height operations', () => {
        test('height of empty tree', () => {
            const tree = new AVLTree<number>((a, b) => a - b);
            expect(tree.getTreeHeight()).toBe(0);
        });

        test('height of single node', () => {
            const tree = new AVLTree<number>((a, b) => a - b);
            tree.insert(10);
            expect(tree.getTreeHeight()).toBe(1);
        });

        test('height is logarithmic for balanced tree', () => {
            const tree = new AVLTree<number>((a, b) => a - b);
            // Insert 15 elements
            for (let i = 1; i <= 15; i++) {
                tree.insert(i);
            }
            
            // Height should be at most log2(15) + 1 ≈ 5
            expect(tree.getTreeHeight()).toBeLessThanOrEqual(5);
        });
    });

    describe('String comparator', () => {
        test('works with string values', () => {
            const tree = new AVLTree<string>((a, b) => a.localeCompare(b));
            tree.insert('dog');
            tree.insert('cat');
            tree.insert('bird');
            tree.insert('elephant');
            
            expect(tree.size()).toBe(4);
            expect(tree.inorderTraversal()).toEqual(['bird', 'cat', 'dog', 'elephant']);
            expect(tree.contains('cat')).toBe(true);
            
            tree.delete('cat');
            expect(tree.contains('cat')).toBe(false);
            expect(tree.inorderTraversal()).toEqual(['bird', 'dog', 'elephant']);
        });
    });

    describe('Stress test', () => {
        test('handles large number of insertions and deletions', () => {
            const tree = new AVLTree<number>((a, b) => a - b);
            const values = [];
            
            // Insert 100 elements
            for (let i = 0; i < 100; i++) {
                const val = Math.floor(Math.random() * 1000);
                values.push(val);
                tree.insert(val);
            }
            
            // Verify tree properties
            const inorder = tree.inorderTraversal();
            // Check that inorder is sorted
            for (let i = 1; i < inorder.length; i++) {
                expect(inorder[i]).toBeGreaterThanOrEqual(inorder[i - 1]);
            }
            
            // Height should be logarithmic
            expect(tree.getTreeHeight()).toBeLessThanOrEqual(Math.ceil(Math.log2(tree.size())) * 2);
            
            // Delete half the elements
            for (let i = 0; i < values.length / 2; i++) {
                tree.delete(values[i]);
            }
            
            // Tree should still be balanced
            const inorderAfterDelete = tree.inorderTraversal();
            for (let i = 1; i < inorderAfterDelete.length; i++) {
                expect(inorderAfterDelete[i]).toBeGreaterThanOrEqual(inorderAfterDelete[i - 1]);
            }
        });
    });
});

describe('AVLNode', () => {
    test('constructor', () => {
        const node = new AVLNode(10);
        expect(node).toBeDefined();
        expect(node.value).toBe(10);
        expect(node.left).toBe(null);
        expect(node.right).toBe(null);
        expect(node.height).toBe(1);
    });
});
