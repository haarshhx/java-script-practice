//Count Occurrences of Elements 
let nums=[1,3,5,3,6,5,1,2,4,6,7,6,6,4];
let count={};

for ( num of nums) {

    count[num]= (count[num] ||0)+1;

}
    console.log (count);