export function slidingWindow(s1:string, s2:string): boolean {

    if (s1.length > s2.length){
        return false;
    }

    let s1Count = new Array(26).fill(0);
    let s2Count = new Array(26).fill(0);
    
    for (let i = 0; i < s1.length; i++) {
       s1Count[s1.charCodeAt(i) - 97]++;
       s2Count[s2.charCodeAt(i) - 97]++;           
    }
  
    let matches = 0;
    for (let i = 0; i < 26; i++) {
        if (s1Count[i] === s2Count[i]) {
            matches++;
        }
    }

    //updates o(1) instead of scanning the entire array
    let l = 0; //left pointer
    for (let r = s1.length; r < s2.length; r++) { //right pointer
        if (matches === 26) {
            return true;
        }

        let index = s2.charCodeAt(r) - 97;
        s2Count[index]++;
        if (s1Count[index] === s2Count[index]) {
            matches++;
        } else if (s1Count[index] + 1 === s2Count[index]) {
            matches--;
        }

        index = s2.charCodeAt(l) - 97;
        s2Count[index]--;
        if (s1Count[index] === s2Count[index]) {
            matches++;
        } else if (s1Count[index] - 1 === s2Count[index]) {
            matches--;
        }
        l++;
    }
        return matches === 26;
    }


//In your current code, you're using includes(s1), which checks if the exact string s1 exists in s2. 
// However, the problem asks for a permutation of s1. 
// This means the characters can be in any order, as long as the character counts match.
// let s2l :number = s2.length    
// let s1l :number = s1.length  
// for (var i=0; i < s2l; i++){
//     console.log(s2.substring(i,s1l))
//     if (s2.substring(i,s1l).includes(s1)){
//         return true 
//     } 
// }

// return false 

