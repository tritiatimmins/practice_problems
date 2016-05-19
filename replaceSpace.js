var replaceSpace = function(string) {

  //trim the string first... then replace
  //replace the space with %20 using a regex
  var urlString = string.trim().replace(/ /g, '%20');
  //return the new string
    return urlString;
};

console.log(replaceSpace("string thing ")); //'string%20thing'
console.log(replaceSpace("hello it's me")); //hello%20it's%20me%20%20%20%20 want --> 'hello%20it's%20me'
console.log(replaceSpace("    hey gurl   "));