"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LRUCache = void 0;
/**
 * Node class for doubly linked list used in LRU Cache
 */
var LRUNode = /** @class */ (function () {
    function LRUNode(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
    return LRUNode;
}());
/**
 * LRU (Least Recently Used) Cache data structure
 *
 * A cache that stores key-value pairs with a fixed capacity.
 * When the cache is full, it evicts the least recently used item.
 *
 * Time Complexity:
 * - get: O(1)
 * - put: O(1)
 *
 * @example
 * const cache = new LRUCache<number, string>(2);
 * cache.put(1, 'one');
 * cache.put(2, 'two');
 * cache.get(1); // 'one'
 * cache.put(3, 'three'); // evicts key 2
 * cache.get(2); // null
 * cache.get(3); // 'three'
 */
var LRUCache = /** @class */ (function () {
    /**
     * Creates a new LRU Cache with the specified capacity
     * @param capacity Maximum number of items the cache can hold
     */
    function LRUCache(capacity) {
        if (capacity <= 0) {
            throw new Error('Capacity must be greater than 0');
        }
        this.capacity = capacity;
        this.cache = new Map();
        this.head = null;
        this.tail = null;
    }
    /**
     * Gets the value associated with the key
     * Marks the key as recently used
     * @param key The key to look up
     * @returns The value associated with the key, or null if not found
     */
    LRUCache.prototype.get = function (key) {
        var node = this.cache.get(key);
        if (!node) {
            return null;
        }
        // Move to front (most recently used)
        this.moveToFront(node);
        return node.value;
    };
    /**
     * Puts a key-value pair into the cache
     * If the key already exists, updates the value
     * If the cache is at capacity, evicts the least recently used item
     * @param key The key to store
     * @param value The value to store
     */
    LRUCache.prototype.put = function (key, value) {
        var existingNode = this.cache.get(key);
        if (existingNode) {
            // Update existing node
            existingNode.value = value;
            this.moveToFront(existingNode);
        }
        else {
            // Create new node
            var newNode = new LRUNode(key, value);
            // Check capacity
            if (this.cache.size >= this.capacity) {
                this.evictLRU();
            }
            // Add to cache
            this.cache.set(key, newNode);
            this.addToFront(newNode);
        }
    };
    /**
     * Returns the current size of the cache
     * @returns The number of items in the cache
     */
    LRUCache.prototype.size = function () {
        return this.cache.size;
    };
    /**
     * Clears all items from the cache
     */
    LRUCache.prototype.clear = function () {
        this.cache.clear();
        this.head = null;
        this.tail = null;
    };
    /**
     * Checks if a key exists in the cache
     * Does not mark the key as recently used
     * @param key The key to check
     * @returns true if the key exists, false otherwise
     */
    LRUCache.prototype.has = function (key) {
        return this.cache.has(key);
    };
    /**
     * Removes a key from the cache
     * @param key The key to remove
     * @returns true if the key was removed, false if it didn't exist
     */
    LRUCache.prototype.delete = function (key) {
        var node = this.cache.get(key);
        if (!node) {
            return false;
        }
        this.removeNode(node);
        this.cache.delete(key);
        return true;
    };
    /**
     * Returns an array of all keys in the cache, ordered from most to least recently used
     * @returns Array of keys
     */
    LRUCache.prototype.keys = function () {
        var keys = [];
        var current = this.head;
        while (current) {
            keys.push(current.key);
            current = current.next;
        }
        return keys;
    };
    /**
     * Returns an array of all values in the cache, ordered from most to least recently used
     * @returns Array of values
     */
    LRUCache.prototype.values = function () {
        var values = [];
        var current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    };
    /**
     * Moves a node to the front of the list (most recently used position)
     */
    LRUCache.prototype.moveToFront = function (node) {
        if (node === this.head) {
            return; // Already at front
        }
        this.removeNode(node);
        this.addToFront(node);
    };
    /**
     * Adds a node to the front of the list
     */
    LRUCache.prototype.addToFront = function (node) {
        node.next = this.head;
        node.prev = null;
        if (this.head) {
            this.head.prev = node;
        }
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
    };
    /**
     * Removes a node from the list
     */
    LRUCache.prototype.removeNode = function (node) {
        if (node.prev) {
            node.prev.next = node.next;
        }
        else {
            this.head = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }
        else {
            this.tail = node.prev;
        }
    };
    /**
     * Evicts the least recently used item (tail of the list)
     */
    LRUCache.prototype.evictLRU = function () {
        if (!this.tail) {
            return;
        }
        this.cache.delete(this.tail.key);
        this.removeNode(this.tail);
    };
    return LRUCache;
}());
exports.LRUCache = LRUCache;
