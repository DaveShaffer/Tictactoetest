$(document).ready(function() {
  console.log("standing by");
  var $gameCell = $('.cell'); // build array of game cells
  var moves = Array(9).join(".").split("."); // build array to keep track of moves
  var count = 0; // count the number of plays
  var turn = 'X'; // X goes first
  var champ = null; // The winner

  var getWinner = function () { // Who won?
    if (winnerIs(turn)) {
      return turn;
    }
    return null;
  }
  var winnerIs = function (play) { // check rows, columns and diagonals
    return winsRow (play) || winsCol (play) || winsDiag (play);
  }
  var winsRow = function (play) { // Does any row have 3-in-a-row?
    return allThree (play, moves[0], moves[1], moves[2]) || allThree (play, moves[3], moves[4], moves[5]) || allThree (play, moves[6], moves[7], moves[8]);
  }
  var winsCol = function (play) { // Does any column have 3-in-a-row?
    return allThree (play, moves[0], moves[3], moves[6]) || allThree (play, moves[1], moves[4], moves[7]) || allThree (play, moves[2], moves[5], moves[8]);
  }
  var winsDiag = function (play) { // Does either diagonal have 3-in-a-row?
    return allThree (play, moves[0], moves[4], moves[8]) || allThree (play, moves[2], moves[4], moves[6]);
  }
  var allThree = function (play, cell1, cell2, cell3) { // Compare 3 cells for matching moves
    return (cell1 === play) && (cell2 === play) && (cell3 === play);
  }

  $($gameCell).one('click', function() {
    count++; // Increment # of plays
    moves[this.id] = (count % 2) ? 'X' : 'O'; // X plays even turns, O plays odd turns
    $(this).html(turn); // Write the play on the game board
    champ = getWinner(); // Do we have a winner?
    console.log(moves, count, turn, champ);
    if (champ) {
      $('.cell').off();
      console.log(champ);
      return (champ);
    }

  turn = turn == 'X' ? 'O' : 'X'; // Toggle player
  })
});




