"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BloomFilter = void 0;
/**
 * Bloom Filter data structure
 * A Bloom filter is a space-efficient probabilistic data structure used to test
 * whether an element is a member of a set. False positive matches are possible,
 * but false negatives are not.
 *
 * @example
 * const bloom = new BloomFilter(1000, 3);
 * bloom.add("apple");
 * bloom.contains("apple"); // true (definitely added)
 * bloom.contains("banana"); // false (probably not added)
 */
class BloomFilter {
    /**
     * Creates a new Bloom Filter
     * @param size - The size of the bit array
     * @param hashCount - The number of hash functions to use
     */
    constructor(size = 1000, hashCount = 3) {
        this.size = size;
        this.hashCount = hashCount;
        this.bitArray = new Array(size).fill(false);
    }
    /**
     * Adds an element to the Bloom filter
     */
    add(item) {
        for (let i = 0; i < this.hashCount; i++) {
            const hash = this.hash(item, i);
            this.bitArray[hash] = true;
        }
    }
    /**
     * Checks if an element might be in the set
     * Returns true if the element might be present (could be false positive)
     * Returns false if the element is definitely not present
     */
    contains(item) {
        for (let i = 0; i < this.hashCount; i++) {
            const hash = this.hash(item, i);
            if (!this.bitArray[hash]) {
                return false;
            }
        }
        return true;
    }
    /**
     * Hash function using DJB2 algorithm with seed
     */
    hash(item, seed) {
        let hash = 5381 + seed;
        for (let i = 0; i < item.length; i++) {
            hash = ((hash << 5) + hash) + item.charCodeAt(i);
        }
        return Math.abs(hash % this.size);
    }
    /**
     * Clears the Bloom filter
     */
    clear() {
        this.bitArray.fill(false);
    }
    /**
     * Returns the size of the bit array
     */
    getSize() {
        return this.size;
    }
    /**
     * Returns the number of hash functions
     */
    getHashCount() {
        return this.hashCount;
    }
    /**
     * Estimates the false positive probability
     */
    estimateFalsePositiveRate(itemsAdded) {
        if (itemsAdded === 0)
            return 0;
        // Formula: (1 - e^(-k*n/m))^k
        // where k = hashCount, n = items added, m = size
        const exponent = -(this.hashCount * itemsAdded) / this.size;
        return Math.pow(1 - Math.exp(exponent), this.hashCount);
    }
}
exports.BloomFilter = BloomFilter;
