"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Anagram {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const smap = new Map();
        const tmap = new Map();
        const schars = s.split('');
        const tchars = t.split('');
        const fm = new Map([...smap, ...tmap]);
        if (s.length !== t.length) {
            return false;
        }
        for (let i = 0; i < schars.length; i++) {
            smap.set(i, schars[i]);
            tmap.set(i, tchars[i]);
        }
        fm.forEach((v, k) => {
            console.log(v, k);
        });
        return true;
    }
}
const s = "racecar";
const t = "carrace";
const solution = new Anagram();
solution.isAnagram(s, t);
module.exports = { Anagram };
//# sourceMappingURL=anagram.js.map