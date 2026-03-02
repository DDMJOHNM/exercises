
import { evaluateRPN } from './evaluateRPN';

describe('evaluateRPN', () => {
    test('return the integer that represents the value of the expressions', () => {
        expect(evaluateRPN(["1","2","+","3","*","4","-"])).toBe(5);
    });

});
