// I want to test stack class that is implemented in minStack.ts

import { MinStack } from './minStack';

describe('MinStack', () => {
    test('should push values and return the minimum value of 0', () => {
        const minStack = new MinStack();
        minStack.push(1);
        minStack.push(2);
        minStack.push(0);
        expect(minStack.getMin()).toBe(0);
    });

    test('should pop values and return the minimum value of 1', () => {
        const minStack = new MinStack();
        minStack.push(1);
        minStack.push(2);
        minStack.push(0);
        minStack.pop();
        minStack.pop();
        expect(minStack.getMin()).toBe(1);
    });
});
