// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let obj = {};
    for (var x of str) {
        if(!obj[x]) {
            obj[x] = 1;
        }
        else {
            obj[x]++;
        }
    }
    console.log(obj);
    let max = 0;
    for(var i in obj) {

        if(obj[i] > max) {
            max = obj[i];
            maxChar = i;
        }
        console.log("max is now : ", max);
    }
    return maxChar;
}

module.exports = maxChar;
