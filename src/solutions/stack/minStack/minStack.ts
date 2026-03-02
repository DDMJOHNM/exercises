export class MinStack {

    private MinStack: number[];

    constructor() {
        this.MinStack = [];
    }

    push(val: number) {
        return this.MinStack.push(val);
    }

    pop() {
        return this.MinStack.pop();
    }

    top() {
        return this.MinStack[this.MinStack.length - 1];
    }

    getMin() {
        return Math.min(...this.MinStack);
    }
}

const minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(0);
console.log(minStack.getMin());