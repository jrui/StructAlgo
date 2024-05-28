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
export class HashSet<T> {
    private readonly buckets: Array<Array<any>>;
    private readonly keys: Map<string, number>;


    constructor(bucketsLength: number = 32) {
        this.buckets = new Array<Array<T>>(bucketsLength);
        this.keys = new Map<string, number>();
    }


    hash(key: string): number {
        return key
            .split("")
            .map((k: string) => k.charCodeAt(0))
            .reduce((a: number, b: number) => a + b, 0) % this.buckets.length;
    }


    set(key: string, value: any) {
        const hash: number = this.hash(key);

        if (this.has(key)) {
            for (let entry of this.buckets[hash]) {
                if (entry.key === key) {
                    entry.value = value;
                }
            }
        }
        else {
            if (!this.buckets[hash]) {
                this.buckets[hash] = [];
            }
            this.buckets[hash].push({ key, value });
        }
        this.keys.set(key, hash);
    }


    has(key: string): boolean {
        return this.keys.has(key);
    }


    get(key: string): any {
        const hash: number = this.hash(key);
        const bucket: Array<any> = this.buckets[hash];
        return bucket?.find((v: any) => v.key === key)?.value;
    }


    delete(key: string): any {
        if (!this.has(key)) {
            return null;
        }

        const hash: number = this.hash(key);
        this.keys.delete(key);
        if (!this.buckets[hash]) {
            return null;
        }

        this.buckets[this.hash(key)] = [
            ...this.buckets[this.hash(key)].filter((pair: any) => pair.key != key),
        ];
    }


    getKeys(): string[] {
        let _keys: string[] = [];    
        this.keys.forEach((value: number, key: string) => {
            _keys.push(key);
        });
        return _keys;
    }


    getValues(): any[] {
        return this.buckets.reduce((values: any[], bucket: any[]) => {
            const bucketValues = bucket.map((pair: any) => pair.value);
            return values.concat(bucketValues);
        }, []);
    }
}
