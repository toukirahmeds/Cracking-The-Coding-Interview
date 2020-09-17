// Implement an algorithm to determine if a string has all unique characters

function isUnique(str) {
    if(str.length <= 1) {
        return true;
    }
    // Array to store the each characters with index as their character code.
    const charArr = [];
    for(let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        // If character already exists in the index, the character is not unique.
        // Otherwise store the character at the index in the array.
        if(charArr[charCode]) {
            return false;
        } else {
            charArr[charCode] = str[i];
        }
    }

    return true;
}

console.log(isUnique("abcdefgahi"));
