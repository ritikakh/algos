// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    var reversedStr = [];
    for( var i = str.length-1 ; i >= 0 ; i--) {
        reversedStr.push(str[i]);
    }
    //var reversed = reversedStr.toString();
    var reversed = reversedStr.join('');
    return reversed;

}

module.exports = reverse;