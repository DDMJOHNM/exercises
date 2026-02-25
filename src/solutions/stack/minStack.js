class MinStack {
    constructor() {
        this.stack = [];
    }

    push(val) {
        return this.stack.push(val);
    }

    pop() {
        return this.stack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return Math.min(...this.stack);
    }
}

module.exports = { MinStack };
