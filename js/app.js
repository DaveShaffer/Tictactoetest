$(document).ready(function() {

var $gameCell = $('.cell');
var moves = Array(9).join(".").split(".");
var count = 0;
// var x = 0;
var turn = 'X';
var champ = null;
var getWinner = function () {
  if (winnerIs('X')) {
    return 'X';
  }
  if (winnerIs('O')) {
    return 'O';
  } else {
    return null;
  }
}
var winnerIs = function (turn) {
  return winsRow (turn) || winsCol (turn) || winsDiag (turn);
}
var winsRow = function (turn) {
  return allThree (turn, moves[0], moves[1], moves[2]) || allThree (turn, moves[3], moves[4], moves[5]) || allThree (turn, moves[6], moves[7], moves[8]);
}
var winsCol = function (turn) {
  return allThree (turn, moves[0], moves[3], moves[6]) || allThree (turn, moves[1], moves[4], moves[7]) || allThree (turn, moves[2], moves[5], moves[8]);
}
var winsDiag = function (turn) {
  return allThree (turn, moves[0], moves[4], moves[8]) || allThree (turn, moves[2], moves[4], moves[6]);
}
var allThree = function (turn, cell1, cell2, cell3) {
  return (cell1 === turn) && (cell2 === turn) && (cell3 === turn);
}


    // if (count => 5) {
  $($gameCell).one('click', function() {
    count++;
    moves[this.id] = (count % 2) ? 'X' : 'O';
    $(this).html(turn);

      champ = getWinner();
      console.log(moves, count, turn, champ);


    turn = turn == 'X' ? 'O' : 'X';

    // console.log(moves, count, turn);


  })
// }
    console.log("standing by");
});


