/**
 * AVLNode represents a node in an AVL Tree.
 * Each node contains a value, left and right child pointers, and a height value.
 */
export declare class AVLNode<T> {
    value: T;
    left: AVLNode<T> | null;
    right: AVLNode<T> | null;
    height: number;
    constructor(value: T);
}
/**
 * AVLTree is a self-balancing binary search tree where the heights of the two child
 * subtrees of any node differ by at most one. It maintains O(log n) time complexity
 * for insert, delete, and search operations through automatic rebalancing.
 *
 * @example
 * const avlTree = new AVLTree<number>((a, b) => a - b);
 * avlTree.insert(10);
 * avlTree.insert(20);
 * avlTree.insert(5);
 * avlTree.contains(10); // true
 * avlTree.delete(10);
 * avlTree.contains(10); // false
 */
export declare class AVLTree<T> {
    private root;
    private readonly comparator;
    private nodeCount;
    /**
     * Creates a new AVL Tree with the specified comparator function.
     *
     * @param comparator - Function to compare two values. Should return:
     *                     - negative number if a < b
     *                     - zero if a === b
     *                     - positive number if a > b
     */
    constructor(comparator: (a: T, b: T) => number);
    /**
     * Returns the height of a node. Null nodes have height 0.
     *
     * @param node - The node to get height from
     * @returns The height of the node
     */
    private getHeight;
    /**
     * Returns the balance factor of a node (height of left subtree - height of right subtree).
     *
     * @param node - The node to get balance factor from
     * @returns The balance factor
     */
    private getBalance;
    /**
     * Updates the height of a node based on its children's heights.
     *
     * @param node - The node to update height for
     */
    private updateHeight;
    /**
     * Performs a right rotation on the given node.
     *
     * @param y - The node to rotate
     * @returns The new root after rotation
     */
    private rotateRight;
    /**
     * Performs a left rotation on the given node.
     *
     * @param x - The node to rotate
     * @returns The new root after rotation
     */
    private rotateLeft;
    /**
     * Balances a node if necessary based on its balance factor.
     *
     * @param node - The node to balance
     * @returns The balanced node (may be a different node after rotation)
     */
    private balance;
    /**
     * Inserts a value into the AVL tree.
     *
     * @param value - The value to insert
     */
    insert(value: T): void;
    /**
     * Internal method to insert a node recursively.
     *
     * @param node - The current node
     * @param value - The value to insert
     * @returns The new root of this subtree
     */
    private insertNode;
    /**
     * Deletes a value from the AVL tree.
     *
     * @param value - The value to delete
     * @returns true if the value was found and deleted, false otherwise
     */
    delete(value: T): boolean;
    /**
     * Internal method to delete a node recursively.
     *
     * @param node - The current node
     * @param value - The value to delete
     * @returns The new root of this subtree
     */
    private deleteNode;
    /**
     * Finds the node with the minimum value in a subtree.
     *
     * @param node - The root of the subtree
     * @returns The node with minimum value
     */
    private findMin;
    /**
     * Searches for a value in the tree.
     *
     * @param value - The value to search for
     * @returns true if the value exists, false otherwise
     */
    contains(value: T): boolean;
    /**
     * Internal method to search for a value recursively.
     *
     * @param node - The current node
     * @param value - The value to search for
     * @returns The node containing the value, or null if not found
     */
    private search;
    /**
     * Returns the number of nodes in the tree.
     *
     * @returns The size of the tree
     */
    size(): number;
    /**
     * Checks if the tree is empty.
     *
     * @returns true if the tree has no nodes, false otherwise
     */
    isEmpty(): boolean;
    /**
     * Returns the height of the tree.
     *
     * @returns The height of the tree
     */
    getTreeHeight(): number;
    /**
     * Performs an inorder traversal of the tree (left, root, right).
     *
     * @returns An array of values in inorder sequence
     */
    inorderTraversal(): T[];
    /**
     * Helper method for inorder traversal.
     *
     * @param node - The current node
     * @param result - The array to store values
     */
    private inorderHelper;
    /**
     * Performs a preorder traversal of the tree (root, left, right).
     *
     * @returns An array of values in preorder sequence
     */
    preorderTraversal(): T[];
    /**
     * Helper method for preorder traversal.
     *
     * @param node - The current node
     * @param result - The array to store values
     */
    private preorderHelper;
    /**
     * Performs a postorder traversal of the tree (left, right, root).
     *
     * @returns An array of values in postorder sequence
     */
    postorderTraversal(): T[];
    /**
     * Helper method for postorder traversal.
     *
     * @param node - The current node
     * @param result - The array to store values
     */
    private postorderHelper;
    /**
     * Finds the minimum value in the tree.
     *
     * @returns The minimum value, or null if tree is empty
     */
    min(): T | null;
    /**
     * Finds the maximum value in the tree.
     *
     * @returns The maximum value, or null if tree is empty
     */
    max(): T | null;
    /**
     * Clears all nodes from the tree.
     */
    clear(): void;
}
