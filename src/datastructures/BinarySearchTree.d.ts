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
export declare class BinarySearchTree<T> {
    private root;
    private comparator;
    constructor(comparator?: (a: T, b: T) => number);
    /**
     * Default comparator function
     */
    static defaultComparator(a: any, b: any): number;
    /**
     * Inserts a value into the BST
     */
    insert(value: T): void;
    /**
     * Helper method to recursively insert a node
     */
    private insertNode;
    /**
     * Searches for a value in the BST
     */
    search(value: T): boolean;
    /**
     * Helper method to recursively search for a node
     */
    private searchNode;
    /**
     * Deletes a value from the BST
     */
    delete(value: T): void;
    /**
     * Helper method to recursively delete a node
     */
    private deleteNode;
    /**
     * Finds the minimum value node in a subtree
     */
    private findMin;
    /**
     * Finds the maximum value node in a subtree
     */
    private findMax;
    /**
     * Returns the minimum value in the BST
     */
    min(): T | null;
    /**
     * Returns the maximum value in the BST
     */
    max(): T | null;
    /**
     * Returns an in-order traversal of the BST
     */
    inOrder(): T[];
    /**
     * Helper method for in-order traversal
     */
    private inOrderTraversal;
    /**
     * Returns a pre-order traversal of the BST
     */
    preOrder(): T[];
    /**
     * Helper method for pre-order traversal
     */
    private preOrderTraversal;
    /**
     * Returns a post-order traversal of the BST
     */
    postOrder(): T[];
    /**
     * Helper method for post-order traversal
     */
    private postOrderTraversal;
    /**
     * Returns true if the tree is empty
     */
    isEmpty(): boolean;
}
