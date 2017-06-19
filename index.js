#!/usr/bin/env node
'use strict';

const program = require('prompt');

class TicTacToe {
  constructor() {
    this.board = {
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
    }
  }

  printBoard() {
    var keys = Object.keys(this.board);
    var newBoard = [];
    for (var y = 0; y < 9; y = y + 3) {
      var row = [];
      for (var x = y; x < y + 3; x++) {
        row.push(x + 1)
      }
      newBoard.push(row)
      console.log(row)
    }
  // console.log(newBoard)
  }
}

var test = new TicTacToe();
test.printBoard();