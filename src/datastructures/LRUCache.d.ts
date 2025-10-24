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
export declare class LRUCache<K, V> {
    private capacity;
    private cache;
    private head;
    private tail;
    /**
     * Creates a new LRU Cache with the specified capacity
     * @param capacity Maximum number of items the cache can hold
     */
    constructor(capacity: number);
    /**
     * Gets the value associated with the key
     * Marks the key as recently used
     * @param key The key to look up
     * @returns The value associated with the key, or null if not found
     */
    get(key: K): V | null;
    /**
     * Puts a key-value pair into the cache
     * If the key already exists, updates the value
     * If the cache is at capacity, evicts the least recently used item
     * @param key The key to store
     * @param value The value to store
     */
    put(key: K, value: V): void;
    /**
     * Returns the current size of the cache
     * @returns The number of items in the cache
     */
    size(): number;
    /**
     * Clears all items from the cache
     */
    clear(): void;
    /**
     * Checks if a key exists in the cache
     * Does not mark the key as recently used
     * @param key The key to check
     * @returns true if the key exists, false otherwise
     */
    has(key: K): boolean;
    /**
     * Removes a key from the cache
     * @param key The key to remove
     * @returns true if the key was removed, false if it didn't exist
     */
    delete(key: K): boolean;
    /**
     * Returns an array of all keys in the cache, ordered from most to least recently used
     * @returns Array of keys
     */
    keys(): K[];
    /**
     * Returns an array of all values in the cache, ordered from most to least recently used
     * @returns Array of values
     */
    values(): V[];
    /**
     * Moves a node to the front of the list (most recently used position)
     */
    private moveToFront;
    /**
     * Adds a node to the front of the list
     */
    private addToFront;
    /**
     * Removes a node from the list
     */
    private removeNode;
    /**
     * Evicts the least recently used item (tail of the list)
     */
    private evictLRU;
}
