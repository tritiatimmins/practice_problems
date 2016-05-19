var isUnique = function(string) {

  var firstCharacter = string[0];

  //loop through the string
  for (var i = 1; i < string.length; i ++) {

    if(firstCharacter === string[i]) {
      //set unique letter to true
      return false;
    }
      return true;
  }

};

//console.log(isUnique("hey")); //true
//console.log(isUnique("hay111")); //false


//keep track of all values
//look for 1 duplicate in array
//return false

//otherwise return true


//nested loop
var isUniqueTwo = function(string) {
  //this for loop stays at 0 until j reaches the end of its iterations
  for(var i = 0; i < string.length; i ++) {
    //nested loop starting at the next value from i
    for(var j = i + 1; j < string.length; j ++) {
      console.log("i =", + i);
      console.log("j =", + j);
      //if string[i] === string[j]
      if(string[i] === string[j]) {
        return false;
      }
    }
  }
    return true;
};

// console.log(isUniqueTwo("hey  ")); //true
// console.log(isUniqueTwo("wow!")); //false