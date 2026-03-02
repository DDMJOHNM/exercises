"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluateRPN = evaluateRPN;
function evaluateRPN(tokens) {
    var stack = [];
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (token === '+') {
            var b = stack.pop();
            var a = stack.pop();
            stack.push(a + b);
        }
        else if (token === '-') {
            var b = stack.pop();
            var a = stack.pop();
            stack.push(a - b);
        }
        else if (token === '*') {
            var b = stack.pop();
            var a = stack.pop();
            stack.push(a * b);
        }
        else if (token === '/') {
            var b = stack.pop();
            var a = stack.pop();
            stack.push(Math.trunc(a / b));
        }
        else {
            stack.push(Number(token));
        }
    }
    console.log(stack);
    return stack[0];
}
