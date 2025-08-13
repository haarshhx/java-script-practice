//vowels count in string 
let string = "hello devs my name is harsh";
let vowels = "aeiou";
let count = 0;

for (char of string ){
    if (vowels.includes(char)){
        count++;
    }

}
console.log("vowels count is :",count);
