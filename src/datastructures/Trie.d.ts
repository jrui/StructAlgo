/**
 * Trie (Prefix Tree) data structure
 * A trie is a tree-like data structure used to store strings.
 * It is commonly used for autocomplete, spell checking, and IP routing.
 *
 * @example
 * const trie = new Trie();
 * trie.insert("apple");
 * trie.search("apple"); // true
 * trie.search("app"); // false
 * trie.startsWith("app"); // true
 * trie.insert("app");
 * trie.search("app"); // true
 */
export declare class Trie {
    private root;
    constructor();
    /**
     * Inserts a word into the trie
     */
    insert(word: string): void;
    /**
     * Returns true if the word is in the trie
     */
    search(word: string): boolean;
    /**
     * Returns true if there is any word in the trie that starts with the given prefix
     */
    startsWith(prefix: string): boolean;
    /**
     * Deletes a word from the trie
     */
    delete(word: string): boolean;
    /**
     * Helper method to recursively delete a word
     */
    private deleteHelper;
    /**
     * Finds the node corresponding to a prefix
     */
    private findNode;
    /**
     * Returns all words in the trie that start with the given prefix
     */
    wordsWithPrefix(prefix: string): string[];
    /**
     * Helper method to collect all words from a node
     */
    private collectWords;
    /**
     * Returns all words in the trie
     */
    getAllWords(): string[];
}
