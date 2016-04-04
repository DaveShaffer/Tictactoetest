//window.onload = playGame();
//function playGame() {

var champ = null; // The winner
scoreX = 0;
scoreO = 0;
var turn = prompt("Which side goes first, X or O?", "X"); // Does X or O go first?
if ((turn === 'o') || (turn == 0)) { // If answer is o or 0, make it an O
  turn = 'O';
}
if ((turn !== 'X' ) && (turn !== 'O')) { // If answer is neither X or O, make it X
  turn = 'X';
}

// var playGame = function() {
$(document).ready(function() {
  console.log("standing by");
  var $gameCell = $('.cell'); // build array of game cells
  var moves = Array(9).join(".").split("."); // build array to keep track of moves
  var count = 0; // count the number of plays

  var getWinner = function() { // Who won?
    if (winnerIs(turn)) {
      return turn;
    }
    return null;
  }
  var winnerIs = function(play) { // check rows, columns and diagonals
    return winsRow (play) || winsCol (play) || winsDiag (play);
  }
  var winsRow = function(play) { // Does any row have 3-in-a-row?
    return allThree (play, moves[0], moves[1], moves[2]) || allThree (play, moves[3], moves[4], moves[5]) || allThree (play, moves[6], moves[7], moves[8]);
  }
  var winsCol = function(play) { // Does any column have 3-in-a-row?
    return allThree (play, moves[0], moves[3], moves[6]) || allThree (play, moves[1], moves[4], moves[7]) || allThree (play, moves[2], moves[5], moves[8]);
  }
  var winsDiag = function(play) { // Does either diagonal have 3-in-a-row?
    return allThree (play, moves[0], moves[4], moves[8]) || allThree (play, moves[2], moves[4], moves[6]);
  }
  var allThree = function(play, cell1, cell2, cell3) { // Compare 3 cells for matching moves
    return (cell1 === play) && (cell2 === play) && (cell3 === play);
  }

  $($gameCell).one('click', function() {
    count++; // Increment # of plays
    moves[this.id] = turn; // Update moves
    $(this).html(turn); // Write the play on the game board
    champ = getWinner(); // Do we have a winner?
    console.log(moves, count, turn, champ);
    if (count == 9 || champ) { // Is board full or has a player won?
      $('.cell').off(); // disable remaining cells
      console.log(champ);
      if (champ == 'X') {
        scoreX++;
        //alert('The winner is ' + xName);
      }
      if (champ == 'O') {
        scoreO++
        //alert('The winner is ' + oName);
      }
      alert('X = ' + scoreX + '. O = ' + scoreO + '.' + 'The winner is ' + champ);
      return;
    }

  turn = turn == 'X' ? 'O' : 'X'; // Toggle player
  })

});

// for (var ndx = 0; ndx < 5; ndx++) {
// playGame ();
// }
