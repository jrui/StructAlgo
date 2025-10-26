"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AVLTree = exports.AVLNode = void 0;
/**
 * AVLNode represents a node in an AVL Tree.
 * Each node contains a value, left and right child pointers, and a height value.
 */
var AVLNode = /** @class */ (function () {
    function AVLNode(value) {
        this.left = null;
        this.right = null;
        this.height = 1;
        this.value = value;
    }
    return AVLNode;
}());
exports.AVLNode = AVLNode;
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
var AVLTree = /** @class */ (function () {
    /**
     * Creates a new AVL Tree with the specified comparator function.
     *
     * @param comparator - Function to compare two values. Should return:
     *                     - negative number if a < b
     *                     - zero if a === b
     *                     - positive number if a > b
     */
    function AVLTree(comparator) {
        this.root = null;
        this.nodeCount = 0;
        this.comparator = comparator;
    }
    /**
     * Returns the height of a node. Null nodes have height 0.
     *
     * @param node - The node to get height from
     * @returns The height of the node
     */
    AVLTree.prototype.getHeight = function (node) {
        return node ? node.height : 0;
    };
    /**
     * Returns the balance factor of a node (height of left subtree - height of right subtree).
     *
     * @param node - The node to get balance factor from
     * @returns The balance factor
     */
    AVLTree.prototype.getBalance = function (node) {
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    };
    /**
     * Updates the height of a node based on its children's heights.
     *
     * @param node - The node to update height for
     */
    AVLTree.prototype.updateHeight = function (node) {
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    };
    /**
     * Performs a right rotation on the given node.
     *
     * @param y - The node to rotate
     * @returns The new root after rotation
     */
    AVLTree.prototype.rotateRight = function (y) {
        var x = y.left;
        var T2 = x.right;
        // Perform rotation
        x.right = y;
        y.left = T2;
        // Update heights
        this.updateHeight(y);
        this.updateHeight(x);
        return x;
    };
    /**
     * Performs a left rotation on the given node.
     *
     * @param x - The node to rotate
     * @returns The new root after rotation
     */
    AVLTree.prototype.rotateLeft = function (x) {
        var y = x.right;
        var T2 = y.left;
        // Perform rotation
        y.left = x;
        x.right = T2;
        // Update heights
        this.updateHeight(x);
        this.updateHeight(y);
        return y;
    };
    /**
     * Balances a node if necessary based on its balance factor.
     *
     * @param node - The node to balance
     * @returns The balanced node (may be a different node after rotation)
     */
    AVLTree.prototype.balance = function (node) {
        this.updateHeight(node);
        var balance = this.getBalance(node);
        // Left heavy
        if (balance > 1) {
            // Left-Right case
            if (this.getBalance(node.left) < 0) {
                node.left = this.rotateLeft(node.left);
            }
            // Left-Left case
            return this.rotateRight(node);
        }
        // Right heavy
        if (balance < -1) {
            // Right-Left case
            if (this.getBalance(node.right) > 0) {
                node.right = this.rotateRight(node.right);
            }
            // Right-Right case
            return this.rotateLeft(node);
        }
        return node;
    };
    /**
     * Inserts a value into the AVL tree.
     *
     * @param value - The value to insert
     */
    AVLTree.prototype.insert = function (value) {
        this.root = this.insertNode(this.root, value);
    };
    /**
     * Internal method to insert a node recursively.
     *
     * @param node - The current node
     * @param value - The value to insert
     * @returns The new root of this subtree
     */
    AVLTree.prototype.insertNode = function (node, value) {
        // Perform normal BST insertion
        if (!node) {
            this.nodeCount++;
            return new AVLNode(value);
        }
        var cmp = this.comparator(value, node.value);
        if (cmp < 0) {
            node.left = this.insertNode(node.left, value);
        }
        else if (cmp > 0) {
            node.right = this.insertNode(node.right, value);
        }
        else {
            // Duplicate values are not inserted
            return node;
        }
        // Balance the node
        return this.balance(node);
    };
    /**
     * Deletes a value from the AVL tree.
     *
     * @param value - The value to delete
     * @returns true if the value was found and deleted, false otherwise
     */
    AVLTree.prototype.delete = function (value) {
        var initialCount = this.nodeCount;
        this.root = this.deleteNode(this.root, value);
        return this.nodeCount < initialCount;
    };
    /**
     * Internal method to delete a node recursively.
     *
     * @param node - The current node
     * @param value - The value to delete
     * @returns The new root of this subtree
     */
    AVLTree.prototype.deleteNode = function (node, value) {
        if (!node) {
            return null;
        }
        var cmp = this.comparator(value, node.value);
        if (cmp < 0) {
            node.left = this.deleteNode(node.left, value);
        }
        else if (cmp > 0) {
            node.right = this.deleteNode(node.right, value);
        }
        else {
            // Node to be deleted found
            this.nodeCount--;
            // Node with only one child or no child
            if (!node.left) {
                return node.right;
            }
            else if (!node.right) {
                return node.left;
            }
            // Node with two children: get the inorder successor (smallest in the right subtree)
            var successor = this.findMin(node.right);
            node.value = successor.value;
            node.right = this.deleteNode(node.right, successor.value);
            this.nodeCount++; // Adjust count since we didn't actually delete a node, just replaced value
        }
        // Balance the node
        return this.balance(node);
    };
    /**
     * Finds the node with the minimum value in a subtree.
     *
     * @param node - The root of the subtree
     * @returns The node with minimum value
     */
    AVLTree.prototype.findMin = function (node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    };
    /**
     * Searches for a value in the tree.
     *
     * @param value - The value to search for
     * @returns true if the value exists, false otherwise
     */
    AVLTree.prototype.contains = function (value) {
        return this.search(this.root, value) !== null;
    };
    /**
     * Internal method to search for a value recursively.
     *
     * @param node - The current node
     * @param value - The value to search for
     * @returns The node containing the value, or null if not found
     */
    AVLTree.prototype.search = function (node, value) {
        if (!node) {
            return null;
        }
        var cmp = this.comparator(value, node.value);
        if (cmp < 0) {
            return this.search(node.left, value);
        }
        else if (cmp > 0) {
            return this.search(node.right, value);
        }
        else {
            return node;
        }
    };
    /**
     * Returns the number of nodes in the tree.
     *
     * @returns The size of the tree
     */
    AVLTree.prototype.size = function () {
        return this.nodeCount;
    };
    /**
     * Checks if the tree is empty.
     *
     * @returns true if the tree has no nodes, false otherwise
     */
    AVLTree.prototype.isEmpty = function () {
        return this.nodeCount === 0;
    };
    /**
     * Returns the height of the tree.
     *
     * @returns The height of the tree
     */
    AVLTree.prototype.getTreeHeight = function () {
        return this.getHeight(this.root);
    };
    /**
     * Performs an inorder traversal of the tree (left, root, right).
     *
     * @returns An array of values in inorder sequence
     */
    AVLTree.prototype.inorderTraversal = function () {
        var result = [];
        this.inorderHelper(this.root, result);
        return result;
    };
    /**
     * Helper method for inorder traversal.
     *
     * @param node - The current node
     * @param result - The array to store values
     */
    AVLTree.prototype.inorderHelper = function (node, result) {
        if (node) {
            this.inorderHelper(node.left, result);
            result.push(node.value);
            this.inorderHelper(node.right, result);
        }
    };
    /**
     * Performs a preorder traversal of the tree (root, left, right).
     *
     * @returns An array of values in preorder sequence
     */
    AVLTree.prototype.preorderTraversal = function () {
        var result = [];
        this.preorderHelper(this.root, result);
        return result;
    };
    /**
     * Helper method for preorder traversal.
     *
     * @param node - The current node
     * @param result - The array to store values
     */
    AVLTree.prototype.preorderHelper = function (node, result) {
        if (node) {
            result.push(node.value);
            this.preorderHelper(node.left, result);
            this.preorderHelper(node.right, result);
        }
    };
    /**
     * Performs a postorder traversal of the tree (left, right, root).
     *
     * @returns An array of values in postorder sequence
     */
    AVLTree.prototype.postorderTraversal = function () {
        var result = [];
        this.postorderHelper(this.root, result);
        return result;
    };
    /**
     * Helper method for postorder traversal.
     *
     * @param node - The current node
     * @param result - The array to store values
     */
    AVLTree.prototype.postorderHelper = function (node, result) {
        if (node) {
            this.postorderHelper(node.left, result);
            this.postorderHelper(node.right, result);
            result.push(node.value);
        }
    };
    /**
     * Finds the minimum value in the tree.
     *
     * @returns The minimum value, or null if tree is empty
     */
    AVLTree.prototype.min = function () {
        if (!this.root) {
            return null;
        }
        return this.findMin(this.root).value;
    };
    /**
     * Finds the maximum value in the tree.
     *
     * @returns The maximum value, or null if tree is empty
     */
    AVLTree.prototype.max = function () {
        if (!this.root) {
            return null;
        }
        var node = this.root;
        while (node.right) {
            node = node.right;
        }
        return node.value;
    };
    /**
     * Clears all nodes from the tree.
     */
    AVLTree.prototype.clear = function () {
        this.root = null;
        this.nodeCount = 0;
    };
    return AVLTree;
}());
exports.AVLTree = AVLTree;
