"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Anagram {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const fm = new Map();
        if (s.length !== t.length) {
            return false;
        }
        for (const char of s) {
            fm.set(char, (fm.get(char) || 0) + 1);
        }
        for (const char of t) {
            //non null operator = ts
            if (!fm.has(char))
                return false;
            fm.set(char, (fm.get(char) || 0) - 1);
            if (fm.get(char) < 0)
                return false;
        }
        console.log(fm);
        return true;
    }
}
const s = "racecar";
const t = "carrace";
const solution = new Anagram();
solution.isAnagram(s, t);
module.exports = { Anagram };
//# sourceMappingURL=anagram.js.map