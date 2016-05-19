var checkPermutation = function(str1, str2) {
  var check = true;
  //check if the length of the strings is the same
  if (str1.length === str2.length) {
   
   //convert to an array & use the sort method
   var split1 = str1.split('').sort();
   var split2 = str2.split('').sort();

    //check for equality
    //iterate over split 1 and split2
    for (var i = 0; i < split1.length; i ++) {

      if(split1[i] !== split2[i]) {
        check = false;
      } else {
        check = true && check;
      }
      return check;
    }

  //if the length is not the same then return false
  } else {
    return check = false;
  }
};

console.log(checkPermutation("baaa", "bbbb")); //false
console.log(checkPermutation("a ac", "ca a")); //true
console.log(checkPermutation("cat", "toe")); //true
console.log(checkPermutation("boyf", "foyb")); //true
console.log(checkPermutation("tritia", "timmins")); //false