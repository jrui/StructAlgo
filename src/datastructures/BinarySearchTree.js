"use strict";
/**
 * Binary Search Tree (BST) data structure
 * A binary search tree is a binary tree where each node has at most two children,
 * and for each node, all elements in the left subtree are less than the node,
 * and all elements in the right subtree are greater than the node.
 *
 * @example
 * const bst = new BinarySearchTree();
 * bst.insert(5);
 * bst.insert(3);
 * bst.insert(7);
 * bst.search(3); // true
 * bst.search(4); // false
 * bst.delete(3);
 * bst.search(3); // false
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearchTree = void 0;
class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor(comparator = BinarySearchTree.defaultComparator) {
        this.root = null;
        this.comparator = comparator;
    }
    /**
     * Default comparator function
     */
    static defaultComparator(a, b) {
        if (a < b)
            return -1;
        if (a > b)
            return 1;
        return 0;
    }
    /**
     * Inserts a value into the BST
     */
    insert(value) {
        this.root = this.insertNode(this.root, value);
    }
    /**
     * Helper method to recursively insert a node
     */
    insertNode(node, value) {
        if (node === null) {
            return new BSTNode(value);
        }
        const cmp = this.comparator(value, node.value);
        if (cmp < 0) {
            node.left = this.insertNode(node.left, value);
        }
        else if (cmp > 0) {
            node.right = this.insertNode(node.right, value);
        }
        // If equal, don't insert (no duplicates)
        return node;
    }
    /**
     * Searches for a value in the BST
     */
    search(value) {
        return this.searchNode(this.root, value);
    }
    /**
     * Helper method to recursively search for a node
     */
    searchNode(node, value) {
        if (node === null) {
            return false;
        }
        const cmp = this.comparator(value, node.value);
        if (cmp === 0) {
            return true;
        }
        else if (cmp < 0) {
            return this.searchNode(node.left, value);
        }
        else {
            return this.searchNode(node.right, value);
        }
    }
    /**
     * Deletes a value from the BST
     */
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }
    /**
     * Helper method to recursively delete a node
     */
    deleteNode(node, value) {
        if (node === null) {
            return null;
        }
        const cmp = this.comparator(value, node.value);
        if (cmp < 0) {
            node.left = this.deleteNode(node.left, value);
        }
        else if (cmp > 0) {
            node.right = this.deleteNode(node.right, value);
        }
        else {
            // Node found, delete it
            if (node.left === null) {
                return node.right;
            }
            else if (node.right === null) {
                return node.left;
            }
            // Node with two children: get inorder successor
            const minRight = this.findMin(node.right);
            node.value = minRight.value;
            node.right = this.deleteNode(node.right, minRight.value);
        }
        return node;
    }
    /**
     * Finds the minimum value node in a subtree
     */
    findMin(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }
    /**
     * Finds the maximum value node in a subtree
     */
    findMax(node) {
        while (node.right !== null) {
            node = node.right;
        }
        return node;
    }
    /**
     * Returns the minimum value in the BST
     */
    min() {
        if (this.root === null)
            return null;
        return this.findMin(this.root).value;
    }
    /**
     * Returns the maximum value in the BST
     */
    max() {
        if (this.root === null)
            return null;
        return this.findMax(this.root).value;
    }
    /**
     * Returns an in-order traversal of the BST
     */
    inOrder() {
        const result = [];
        this.inOrderTraversal(this.root, result);
        return result;
    }
    /**
     * Helper method for in-order traversal
     */
    inOrderTraversal(node, result) {
        if (node !== null) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
    }
    /**
     * Returns a pre-order traversal of the BST
     */
    preOrder() {
        const result = [];
        this.preOrderTraversal(this.root, result);
        return result;
    }
    /**
     * Helper method for pre-order traversal
     */
    preOrderTraversal(node, result) {
        if (node !== null) {
            result.push(node.value);
            this.preOrderTraversal(node.left, result);
            this.preOrderTraversal(node.right, result);
        }
    }
    /**
     * Returns a post-order traversal of the BST
     */
    postOrder() {
        const result = [];
        this.postOrderTraversal(this.root, result);
        return result;
    }
    /**
     * Helper method for post-order traversal
     */
    postOrderTraversal(node, result) {
        if (node !== null) {
            this.postOrderTraversal(node.left, result);
            this.postOrderTraversal(node.right, result);
            result.push(node.value);
        }
    }
    /**
     * Returns true if the tree is empty
     */
    isEmpty() {
        return this.root === null;
    }
}
exports.BinarySearchTree = BinarySearchTree;
