
let sentence = "the quick brown fox jumped over the lazy dog";

let words = sentence.split(" ");
// console.log(word);


for (var i = 0; i < words.length; ++i) {
    // console.log("word " + i + ": " + words[i]);
 }

// var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"]; 
// // putstr("Enter a name to search for: ");
// var name = readline();
// var position = names.indexOf(name);
// if (position >= 0) {
//     console.log("Found " + name + " at position " + position);
// } else {
//     console.log(name + " not found in array.");
//     }

var nums = [2,3,4,5];
var newnum = 1;
var N = nums.length; 
for(var i=N; i>=0; --i){
    // console.log('what '+i);
    // console.log( nums[i]);
    console.log(i-1);
    // console.log( nums[i]);
    // console.log(i);
     nums[i] = nums[i-1];
     console.log(nums);

}

// nums[0] = newnum; 
// console.log(nums); // 1,2,3,4,5