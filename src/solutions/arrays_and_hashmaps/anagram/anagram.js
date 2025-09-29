var Anagram = /** @class */ (function () {
    function Anagram() {
    }
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    Anagram.prototype.isAnagram = function (s, t) {
        var fm = new Map();
        if (s.length !== t.length) {
            return false;
        }
        for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
            var char = s_1[_i];
            fm.set(char, (fm.get(char) || 0) + 1);
        }
        for (var _a = 0, t_1 = t; _a < t_1.length; _a++) {
            var char = t_1[_a];
            if (!fm.has(char))
                return false;
            fm.set(char, (fm.get(char) || 0) - 1);
            if (fm.get(char) < 0)
                return false;
        }
        console.log(fm);
        return true;
    };
    return Anagram;
}());
var s = "racecar";
var t = "carrace";
var solution = new Anagram();
solution.isAnagram(s, t);
module.exports = { Anagram: Anagram };
