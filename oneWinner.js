var oneWinner = function(players) {
  //while the length of the players is greater than 1
  while(players.length > 1) {
    //define first player
    var firstPlayer = players[0];
    //remove the first player
    players.shift();
      console.log(players);      
    //add the first player to the end
    players.push(firstPlayer);
      console.log(players);
    //remove the new first player
    players.shift();
      console.log(players);

  }
  //return the winner
  return players[0];
};

console.log(oneWinner([1,2,3,4,5,6])); //5

console.log(oneWinner([1,2,3]));
