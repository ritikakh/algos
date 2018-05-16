// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    var count = 0;
    var vowles = "aeiou";
    var strLow = str.toLowerCase();
    for(var index of strLow) {
        if(vowles.includes(index)) {
            count++;
        }
    }
    return count;
}

module.exports = vowels;


// var count = 0;
// var strLow = str.toLowerCase();
// for(var index of strLow) {
//     if(index === "a") {
//         count++;
//     }
//     if(index === "e") {
//         count++;
//     }
//     if(index === "i") {
//         count++;
//     }
//     if(index === "o") {
//         count++;
//     }
//     if(index === "u") {
//         count++;
//     }
// }
// return count;







// var count = 0;
// for (var index of str) {
//     if(index === "a") {
//         count++;
//     }
//     if(index === "e") {
//         count++;
//     }
//     if(index === "i") {
//         count++;
//     }
//     if(index === "o") {
//         count++;
//     }
//     if(index === "u") {
//         count++;
//     }
//     if(index === "A") {
//         count++;
//     }
//     if(index === "E") {
//         count++;
//     }
//     if(index === "I") {
//         count++;
//     }
//     if(index === "O") {
//         count++;
//     }
//     if(index === "U") {
//         count++;
//     }
// }
// return count;
