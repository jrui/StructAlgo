/**
 * HashSet is a set of elements with no duplicates.
 * It is implemented as an array of buckets, where each bucket is an array of entries.
 * Each entry is an object with a key and a value.
 * The key is the string representation of the element.
 * The value is the element itself.
 * The hash function is the sum of the char codes of the key.
 * The load factor is the ratio of the number of entries to the number of buckets.
 * When the load factor exceeds 0.75, the number of buckets is doubled.
 * When the load factor drops below 0.25, the number of buckets is halved.
 * The number of buckets is always a power of 2.
 *
 * @example
 * const hashSet = new HashSet<number>();
 * hashSet.add(1);
 * hashSet.add(2);
 * hashSet.add(3);
 * hashSet.size(); // 3
 * hashSet.has(2); // true
 * hashSet.remove(2);
 * hashSet.has(2); // false
 * hashSet.size(); // 2
 */
export declare class HashSet<T> {
    private readonly buckets;
    private readonly keys;
    constructor(bucketsLength?: number);
    hash(key: string): number;
    set(key: string, value: any): void;
    has(key: string): boolean;
    get(key: string): any;
    delete(key: string): any;
    getKeys(): string[];
    getValues(): any[];
}
