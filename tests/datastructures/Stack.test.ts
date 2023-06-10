import { Stack } from '../../src/datastructures/Stack';
import { describe, expect, test } from '@jest/globals';

describe('Stack', () => {
    test('should create an empty stack', () => {
        const stack = new Stack();
        expect(stack.isEmpty()).toBe(true);
        expect(stack.peek()).toBe(null);
        expect(stack.pop()).toBe(null);
    });


    test('push elements to a stack', () => {
        const stack = new Stack();
        stack.push(1);
        expect(stack.isEmpty()).toBe(false);
        expect(stack.peek()).toBe(1);
        stack.push(2);
        expect(stack.peek()).toBe(2);
    });

    test('should pop elements from stack in LIFO order', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.pop()).toBe(3);
        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(1);
        expect(stack.pop()).toBe(null);
    });

    test('should represent elements correctly', () => {
        const stack = new Stack();
        expect(stack.toString()).toBe('');
        stack.push(1);
        expect(stack.toString()).toBe('1');
        stack.push(2);
        expect(stack.toString()).toBe('2,1');
        stack.push(3);
        expect(stack.toString(a => a + ' ')).toBe('3 ,2 ,1 ');
    });

    test('should be possible to convert stack to array', () => {
        const stack = new Stack();
        expect(stack.peek()).toBe(null);
        stack.push(1);
        expect(stack.peek()).toBe(1);
        stack.push(2);
        expect(stack.peek()).toBe(2);
        stack.push(3);
        expect(stack.peek()).toBe(3);
        expect(stack.toArray()).toEqual([3, 2, 1]);
    });
});
