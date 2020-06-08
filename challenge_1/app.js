/*
 Create a tictactoe game
 first move always starts with x
  you can have a tue false variable that switches the value everytime a player plays a move

  1. Display a win or tie
    a. must keep track of the score
    b. a tie means all spots have been filled and no one has 3 in a row
      i. Must define all possible 3 in a row combinations on the board
  2. A button that resets the board
    a. grab all the elements on the board and cleat their inner html text
    b. css grid will make this pretty easy / may not bee able to use css
  3. on click event add a mark to the board
    a. after a move is played, run a function that checks the board for wins
    b keep track of move count
      i. if 9 moves have been played and no one wins its a draw

  let board = [[], [], [],
              [], [], [],
              [], [], []]

  winning array patterns / css grid patterns
              123
              456
              789
              159
              357
              147
              258
              369

*/

//if true X otherwise O
let whichMark = true;
let mark;
let score = 0;
let board = document.getElementById('board');


let getArrayIndexFromElement = () => {

}

//function that adds a mark to a board location
 let playMove = (event) => {

  //logic for mark
  if(whichMark){
    mark = "X"
  } else {
    mark = "O";
  }

  event.target.innerHTML = mark;
  whichMark = !whichMark;

  //functionality to check for winner
  checkForWinner();
 }

 //function that loops through the divs/array and checks for a winning pattern
 let checkForWinner = () => {

 }

 let giveSpotsFunctionality = () => {
   let allChildren = Array.from(board.children);
   //console.log(allChildren)
   allChildren.forEach(child => {
    child.addEventListener('click', function(event){
      playMove(event);
    })
   })
 };

 giveSpotsFunctionality();

