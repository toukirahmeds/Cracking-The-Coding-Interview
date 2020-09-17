// Given two strings, write a method to decide if one is a permutation of the other.

function checkPermutation(str1, str2) {
    const str1Len = str1.length, str2Len = str2.length;
    let startIndex = Number.POSITIVE_INFINITY, endIndex = Number.NEGATIVE_INFINITY;
    if(str1Len !== str2Len) {
        return false;
    }

    // If both string has length 1 and are same then they are permutations of each other.
    // If both string has length more than 1 and both are same strings then they are not permutations.
    if(str1.length === 1 && str1 === str2) {
        return true;
    } else if(str1 === str2) {
        return false;
    }

    // Store the count of each characters with index as their character code.
    const charArr1 = [];
    for(let i = 0; i < str1Len; i++) {
        const charCode = str1.charCodeAt(i);
        if(charArr1[charCode]) {
            charArr1[charCode]++;
        } else {
            charArr1[charCode] = 1;
        }

        if(charCode < startIndex) {
            startIndex = charCode;
        }

        if(charCode > endIndex) {
            endIndex = charCode;
        }
    }

    // Store the count of each characters with index as their character code.
    const charArr2 = [];
    for(let i = 0; i < str2Len; i++) {
        const charCode = str2.charCodeAt(i);
        if(charArr2[charCode]) {
            charArr2[charCode]++;
        } else {
            charArr2[charCode] = 1;
        }

        if(charCode < startIndex) {
            startIndex = charCode;
        }

        if(charCode > endIndex) {
            endIndex = charCode;
        }
    }

    // For each index from start index to end index in both charArr1 and charArr2, if the value for count does not match
    // then the strings are not permutations of each other.
    for(let i = startIndex; i <= endIndex; i++) {
        if(charArr1[i] !== charArr2[i]) {
            return false;
        }
    }

    return true;
}

console.log(checkPermutation("abc", "cba"));
