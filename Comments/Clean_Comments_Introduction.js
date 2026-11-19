//BAD COMMENTS



// gets all longest strings
function longestString(inputArray) {
    // initialize the longest string to first value
    let length = inputArray[0].length;
    
    for (let i = 1; i < inputArray.length; i++) {
        // checks if current string is longer than current longest
        if(length < inputArray[i].length) {
            length = inputArray[i].length;
        }
    }
    
    // filters out any values not equal to the longest string
    const strs = inputArray.filter((word) => word.length === length);
    
    return strs;
}

////////////////////////////////////////////////////////



function getLongestStrings(inputArray) {
    let longestWordLength = inputArray[0].length;
    
    for (let i = 1; i < inputArray.length; i++) {
        if(longestWordLength < inputArray[i].length) {
            longestWordLength = inputArray[i].length;
        }
    }
    
    const longestWords = inputArray.filter((word) => word.length === longestWordLength);
    
    return longestWords;
}