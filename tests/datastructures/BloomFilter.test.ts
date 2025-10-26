import { BloomFilter } from '../../src/datastructures/BloomFilter';
import { describe, expect, test } from '@jest/globals';

describe('BloomFilter', () => {
    test('should create an empty Bloom filter', () => {
        const bloom = new BloomFilter(1000, 3);
        expect(bloom.contains('test')).toBe(false);
    });

    test('should add and check elements', () => {
        const bloom = new BloomFilter(1000, 3);
        bloom.add('apple');
        bloom.add('banana');
        bloom.add('cherry');

        expect(bloom.contains('apple')).toBe(true);
        expect(bloom.contains('banana')).toBe(true);
        expect(bloom.contains('cherry')).toBe(true);
    });

    test('should return false for elements not added', () => {
        const bloom = new BloomFilter(1000, 3);
        bloom.add('apple');
        
        // Might occasionally return true due to false positives, but usually false
        expect(bloom.contains('orange')).toBe(false);
    });

    test('should clear the filter', () => {
        const bloom = new BloomFilter(1000, 3);
        bloom.add('apple');
        bloom.add('banana');
        
        expect(bloom.contains('apple')).toBe(true);
        bloom.clear();
        expect(bloom.contains('apple')).toBe(false);
        expect(bloom.contains('banana')).toBe(false);
    });

    test('should return correct size and hash count', () => {
        const bloom = new BloomFilter(500, 4);
        expect(bloom.getSize()).toBe(500);
        expect(bloom.getHashCount()).toBe(4);
    });

    test('should estimate false positive rate', () => {
        const bloom = new BloomFilter(1000, 3);
        
        // With 0 items, false positive rate should be 0
        expect(bloom.estimateFalsePositiveRate(0)).toBe(0);
        
        // With items added, should return a number between 0 and 1
        const rate = bloom.estimateFalsePositiveRate(100);
        expect(rate).toBeGreaterThanOrEqual(0);
        expect(rate).toBeLessThanOrEqual(1);
    });

    test('should handle multiple additions of same element', () => {
        const bloom = new BloomFilter(1000, 3);
        bloom.add('apple');
        bloom.add('apple');
        bloom.add('apple');
        
        expect(bloom.contains('apple')).toBe(true);
    });
});
