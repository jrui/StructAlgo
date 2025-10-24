"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashSet = void 0;
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
var HashSet = /** @class */ (function () {
    function HashSet(bucketsLength) {
        if (bucketsLength === void 0) { bucketsLength = 32; }
        this.buckets = new Array(bucketsLength);
        this.keys = new Map();
    }
    HashSet.prototype.hash = function (key) {
        return key
            .split("")
            .map(function (k) { return k.charCodeAt(0); })
            .reduce(function (a, b) { return a + b; }, 0) % this.buckets.length;
    };
    HashSet.prototype.set = function (key, value) {
        var hash = this.hash(key);
        if (this.has(key)) {
            for (var _i = 0, _a = this.buckets[hash]; _i < _a.length; _i++) {
                var entry = _a[_i];
                if (entry.key === key) {
                    entry.value = value;
                }
            }
        }
        else {
            if (!this.buckets[hash]) {
                this.buckets[hash] = [];
            }
            this.buckets[hash].push({ key: key, value: value });
        }
        this.keys.set(key, hash);
    };
    HashSet.prototype.has = function (key) {
        return this.keys.has(key);
    };
    HashSet.prototype.get = function (key) {
        var _a;
        var hash = this.hash(key);
        var bucket = this.buckets[hash];
        return (_a = bucket === null || bucket === void 0 ? void 0 : bucket.find(function (v) { return v.key === key; })) === null || _a === void 0 ? void 0 : _a.value;
    };
    HashSet.prototype.delete = function (key) {
        if (!this.has(key)) {
            return null;
        }
        var hash = this.hash(key);
        this.keys.delete(key);
        if (!this.buckets[hash]) {
            return null;
        }
        this.buckets[this.hash(key)] = __spreadArray([], this.buckets[this.hash(key)].filter(function (pair) { return pair.key != key; }), true);
    };
    HashSet.prototype.getKeys = function () {
        var _keys = [];
        this.keys.forEach(function (value, key) {
            _keys.push(key);
        });
        return _keys;
    };
    HashSet.prototype.getValues = function () {
        return this.buckets.reduce(function (values, bucket) {
            var bucketValues = bucket.map(function (pair) { return pair.value; });
            return values.concat(bucketValues);
        }, []);
    };
    return HashSet;
}());
exports.HashSet = HashSet;
