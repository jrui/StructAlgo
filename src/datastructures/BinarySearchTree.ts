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

class BSTNode<T> {
    value: T;
    left: BSTNode<T> | null;
    right: BSTNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class BinarySearchTree<T> {
    private root: BSTNode<T> | null;
    private comparator: (a: T, b: T) => number;

    constructor(comparator: (a: T, b: T) => number = BinarySearchTree.defaultComparator) {
        this.root = null;
        this.comparator = comparator;
    }

    /**
     * Default comparator function
     */
    static defaultComparator(a: any, b: any): number {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }

    /**
     * Inserts a value into the BST
     */
    insert(value: T): void {
        this.root = this.insertNode(this.root, value);
    }

    /**
     * Helper method to recursively insert a node
     */
    private insertNode(node: BSTNode<T> | null, value: T): BSTNode<T> {
        if (node === null) {
            return new BSTNode(value);
        }

        const cmp = this.comparator(value, node.value);
        if (cmp < 0) {
            node.left = this.insertNode(node.left, value);
        } else if (cmp > 0) {
            node.right = this.insertNode(node.right, value);
        }
        // If equal, don't insert (no duplicates)

        return node;
    }

    /**
     * Searches for a value in the BST
     */
    search(value: T): boolean {
        return this.searchNode(this.root, value);
    }

    /**
     * Helper method to recursively search for a node
     */
    private searchNode(node: BSTNode<T> | null, value: T): boolean {
        if (node === null) {
            return false;
        }

        const cmp = this.comparator(value, node.value);
        if (cmp === 0) {
            return true;
        } else if (cmp < 0) {
            return this.searchNode(node.left, value);
        } else {
            return this.searchNode(node.right, value);
        }
    }

    /**
     * Deletes a value from the BST
     */
    delete(value: T): void {
        this.root = this.deleteNode(this.root, value);
    }

    /**
     * Helper method to recursively delete a node
     */
    private deleteNode(node: BSTNode<T> | null, value: T): BSTNode<T> | null {
        if (node === null) {
            return null;
        }

        const cmp = this.comparator(value, node.value);
        if (cmp < 0) {
            node.left = this.deleteNode(node.left, value);
        } else if (cmp > 0) {
            node.right = this.deleteNode(node.right, value);
        } else {
            // Node found, delete it
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
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
    private findMin(node: BSTNode<T>): BSTNode<T> {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    /**
     * Finds the maximum value node in a subtree
     */
    private findMax(node: BSTNode<T>): BSTNode<T> {
        while (node.right !== null) {
            node = node.right;
        }
        return node;
    }

    /**
     * Returns the minimum value in the BST
     */
    min(): T | null {
        if (this.root === null) return null;
        return this.findMin(this.root).value;
    }

    /**
     * Returns the maximum value in the BST
     */
    max(): T | null {
        if (this.root === null) return null;
        return this.findMax(this.root).value;
    }

    /**
     * Returns an in-order traversal of the BST
     */
    inOrder(): T[] {
        const result: T[] = [];
        this.inOrderTraversal(this.root, result);
        return result;
    }

    /**
     * Helper method for in-order traversal
     */
    private inOrderTraversal(node: BSTNode<T> | null, result: T[]): void {
        if (node !== null) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
    }

    /**
     * Returns a pre-order traversal of the BST
     */
    preOrder(): T[] {
        const result: T[] = [];
        this.preOrderTraversal(this.root, result);
        return result;
    }

    /**
     * Helper method for pre-order traversal
     */
    private preOrderTraversal(node: BSTNode<T> | null, result: T[]): void {
        if (node !== null) {
            result.push(node.value);
            this.preOrderTraversal(node.left, result);
            this.preOrderTraversal(node.right, result);
        }
    }

    /**
     * Returns a post-order traversal of the BST
     */
    postOrder(): T[] {
        const result: T[] = [];
        this.postOrderTraversal(this.root, result);
        return result;
    }

    /**
     * Helper method for post-order traversal
     */
    private postOrderTraversal(node: BSTNode<T> | null, result: T[]): void {
        if (node !== null) {
            this.postOrderTraversal(node.left, result);
            this.postOrderTraversal(node.right, result);
            result.push(node.value);
        }
    }

    /**
     * Returns true if the tree is empty
     */
    isEmpty(): boolean {
        return this.root === null;
    }
}
