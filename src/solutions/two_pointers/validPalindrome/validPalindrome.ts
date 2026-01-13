export function isValidPalindrome(s: string | undefined): boolean {
    
    // Was it a car or a cat I saw?
    if (!s) return false;
    let l = 0, r = s.length - 1;
    while (l < r) {
        if (!isAlphaNumeric(s?.[l] || '')) {
            l++;
            continue;
        }
        if (!isAlphaNumeric(s?.[r] || '')) {
            r--;
            continue;
        }
        if ((s?.[l]?.toLowerCase() ?? '') !== (s?.[r]?.toLowerCase() ?? '')) {
            return false;
        }
        l++;
        r--;  
    } 
    return true;
}

function isAlphaNumeric(char: string): boolean {
    return /^[a-zA-Z0-9]$/.test(char);
}