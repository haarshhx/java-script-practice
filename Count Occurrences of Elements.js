//Count Occurrences of Elements 
let fruits= ["apple","banana","kiwi","apple","licchi","kiwi","banana","apple"];
let count={};

for ( fruit of fruits) {

    count[fruit]= (count[fruit] ||0)+1;

}
    console.log (count);