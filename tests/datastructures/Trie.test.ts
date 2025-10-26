import { Trie } from '../../src/datastructures/Trie';
import { describe, expect, test } from '@jest/globals';

describe('Trie', () => {
    test('should create an empty trie', () => {
        const trie = new Trie();
        expect(trie.search('test')).toBe(false);
        expect(trie.startsWith('test')).toBe(false);
    });

    test('should insert and search words', () => {
        const trie = new Trie();
        trie.insert('apple');
        expect(trie.search('apple')).toBe(true);
        expect(trie.search('app')).toBe(false);
        expect(trie.startsWith('app')).toBe(true);
    });

    test('should handle multiple words', () => {
        const trie = new Trie();
        trie.insert('apple');
        trie.insert('app');
        trie.insert('application');
        trie.insert('apply');

        expect(trie.search('apple')).toBe(true);
        expect(trie.search('app')).toBe(true);
        expect(trie.search('application')).toBe(true);
        expect(trie.search('apply')).toBe(true);
        expect(trie.search('appl')).toBe(false);
    });

    test('should check prefixes correctly', () => {
        const trie = new Trie();
        trie.insert('apple');
        trie.insert('banana');

        expect(trie.startsWith('app')).toBe(true);
        expect(trie.startsWith('ban')).toBe(true);
        expect(trie.startsWith('orange')).toBe(false);
    });

    test('should delete words', () => {
        const trie = new Trie();
        trie.insert('apple');
        trie.insert('app');
        
        expect(trie.search('apple')).toBe(true);
        trie.delete('apple');
        expect(trie.search('apple')).toBe(false);
        expect(trie.search('app')).toBe(true);
    });

    test('should get words with prefix', () => {
        const trie = new Trie();
        trie.insert('apple');
        trie.insert('app');
        trie.insert('application');
        trie.insert('banana');

        const words = trie.wordsWithPrefix('app');
        expect(words.length).toBe(3);
        expect(words).toContain('app');
        expect(words).toContain('apple');
        expect(words).toContain('application');
    });

    test('should get all words', () => {
        const trie = new Trie();
        trie.insert('apple');
        trie.insert('banana');
        trie.insert('cherry');

        const words = trie.getAllWords();
        expect(words.length).toBe(3);
        expect(words).toContain('apple');
        expect(words).toContain('banana');
        expect(words).toContain('cherry');
    });
});
