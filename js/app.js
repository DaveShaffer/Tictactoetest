$(document).ready(function() {

var $gameCell = $('.cell');
var moves = Array(9).join(".").split(".");
var count = 0;
var x = 0;
var turn = 'X';

  $($gameCell).one('click', function() {
    // console.log("Board click");
    // console.log(this.id);
    count++;
    x = parseInt(this.id);
    moves[x] = this.id;
    $(this).html(turn);

    // moves[x] = (count % 2) ? 'X' : 'O';
    // turn = moves[x];
    turn = turn == 'X' ? 'O' : 'X';

    // $gameCell.eq[x].append(moves[x]);


    console.log(moves, count, x, turn);


  })
  console.log("standing by");
});

