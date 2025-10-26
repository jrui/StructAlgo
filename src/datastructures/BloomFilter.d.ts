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
export declare class BloomFilter {
    private bitArray;
    private size;
    private hashCount;
    /**
     * Creates a new Bloom Filter
     * @param size - The size of the bit array
     * @param hashCount - The number of hash functions to use
     */
    constructor(size?: number, hashCount?: number);
    /**
     * Adds an element to the Bloom filter
     */
    add(item: string): void;
    /**
     * Checks if an element might be in the set
     * Returns true if the element might be present (could be false positive)
     * Returns false if the element is definitely not present
     */
    contains(item: string): boolean;
    /**
     * Hash function using DJB2 algorithm with seed
     */
    private hash;
    /**
     * Clears the Bloom filter
     */
    clear(): void;
    /**
     * Returns the size of the bit array
     */
    getSize(): number;
    /**
     * Returns the number of hash functions
     */
    getHashCount(): number;
    /**
     * Estimates the false positive probability
     */
    estimateFalsePositiveRate(itemsAdded: number): number;
}
