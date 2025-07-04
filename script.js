// Reverse a String
function reversestring(str){
    return str.split('').reverse().join('');

}
console.log(reversestring("my name is harsh"));


// Find Maximum Number in an Array

function findmax(arr){
    return Math.max(...arr);
}
console.log(findmax([763,131,423,2424,243]));