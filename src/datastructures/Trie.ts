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

class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;

    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

export class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    /**
     * Inserts a word into the trie
     */
    insert(word: string): void {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char)!;
        }
        node.isEndOfWord = true;
    }

    /**
     * Returns true if the word is in the trie
     */
    search(word: string): boolean {
        const node = this.findNode(word);
        return node !== null && node.isEndOfWord;
    }

    /**
     * Returns true if there is any word in the trie that starts with the given prefix
     */
    startsWith(prefix: string): boolean {
        return this.findNode(prefix) !== null;
    }

    /**
     * Deletes a word from the trie
     */
    delete(word: string): boolean {
        return this.deleteHelper(this.root, word, 0);
    }

    /**
     * Helper method to recursively delete a word
     */
    private deleteHelper(node: TrieNode, word: string, index: number): boolean {
        if (index === word.length) {
            if (!node.isEndOfWord) {
                return false;
            }
            node.isEndOfWord = false;
            return node.children.size === 0;
        }

        const char = word[index];
        const childNode = node.children.get(char);
        if (!childNode) {
            return false;
        }

        const shouldDeleteChild = this.deleteHelper(childNode, word, index + 1);

        if (shouldDeleteChild) {
            node.children.delete(char);
            return node.children.size === 0 && !node.isEndOfWord;
        }

        return false;
    }

    /**
     * Finds the node corresponding to a prefix
     */
    private findNode(prefix: string): TrieNode | null {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children.has(char)) {
                return null;
            }
            node = node.children.get(char)!;
        }
        return node;
    }

    /**
     * Returns all words in the trie that start with the given prefix
     */
    wordsWithPrefix(prefix: string): string[] {
        const node = this.findNode(prefix);
        if (!node) return [];

        const words: string[] = [];
        this.collectWords(node, prefix, words);
        return words;
    }

    /**
     * Helper method to collect all words from a node
     */
    private collectWords(node: TrieNode, prefix: string, words: string[]): void {
        if (node.isEndOfWord) {
            words.push(prefix);
        }

        for (const [char, childNode] of node.children) {
            this.collectWords(childNode, prefix + char, words);
        }
    }

    /**
     * Returns all words in the trie
     */
    getAllWords(): string[] {
        return this.wordsWithPrefix('');
    }
}
