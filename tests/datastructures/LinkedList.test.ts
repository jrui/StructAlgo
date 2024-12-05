import { LinkedList } from '../../src/datastructures/LinkedList';
import { describe, expect, test } from '@jest/globals';


describe('LinkedList', () => {
    test('constructor', () => {
        const linkedList = new LinkedList<number>();
        expect(linkedList).toBeDefined();
    });

    const linkedList = new LinkedList<number>();
    test('push', () => {
        linkedList.push(1);
        linkedList.push(2);
        linkedList.push(3);
        expect(linkedList.toString()).toEqual('1 2 3 ');
    });

    test('pop', () => {
        expect(linkedList.pop()).toEqual(3);
        expect(linkedList.toString()).toEqual('1 2 ');
    });

    test('shift', () => {
        expect(linkedList.shift()).toEqual(1);
        expect(linkedList.toString()).toEqual('2 ');
    });

    test('unshift', () => {
        linkedList.unshift(1);
        expect(linkedList.toString()).toEqual('1 2 ');
    });

    test('get', () => {
        expect(linkedList.get(0)).toEqual(1);
        expect(linkedList.get(1)).toEqual(2);
    });

    test('set', () => {
        linkedList.set(0, 3);
        linkedList.set(1, 4);
        expect(linkedList.toString()).toEqual('3 4 ');
    });

    test('insert', () => {
        linkedList.insert(1, 2);
        expect(linkedList.toString()).toEqual('3 2 4 ');
    });

    test('remove', () => {
        linkedList.remove(1);
        expect(linkedList.toString()).toEqual('3 4 ');
    });

    test('indexOf', () => {
        expect(linkedList.indexOf(3)).toEqual(0);
        expect(linkedList.indexOf(4)).toEqual(1);
        expect(linkedList.indexOf(5)).toEqual(-1);
    });

    test('toString', () => {
        expect(linkedList.toString()).toEqual('3 4 ');
    });
});