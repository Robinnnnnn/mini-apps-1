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

*/

//if true X otherwise O
let whichMark = true;
let mark;
let score = 0;
let moveCount = 0;
let board = document.getElementById('board');
let allChildren = Array.from(board.children);

//function that adds a mark to a board location
 let playMove = (event) => {

  //logic for mark
  if(whichMark){
    mark = "X"
  } else {
    mark = "O";
  }
  if(event.target.innerHTML == ""){
    event.target.innerHTML = mark;
    whichMark = !whichMark;
    moveCount++;
    console.log(moveCount)
  }else{
    console.log('Must play in an unoccupied spot!')
  }


  //functionality to check for winner
  if (moveCount >= 5 && moveCount < 9 ) {
    checkForWinner('X');
    checkForWinner('O');
  } else if (moveCount == 9){
    let xs = checkForWinner('X');
    let os = checkForWinner('O');
    if(xs == null && os == null){
      console.log('It\'s a Tie, Play again!')
    }
  }

 }


/*
              012
              345
              678
              048
              246
              036
              147
              258
*/

//resets the board markers, counts && scores
let reset = () => {

  allChildren.forEach(child => {
    child.innerHTML = "";
  });

  moveCount = 0;
  whichMark = true;

}
 //function that loops through the divs/array and checks for a winning pattern
 let checkForWinner = (mark) => {
  if(allChildren[0].innerHTML == mark && allChildren[1].innerHTML == mark && allChildren[2].innerHTML == mark) {
    console.log(`${mark} wins! Play Again!`)
  } else if(allChildren[3].innerHTML == mark && allChildren[4].innerHTML == mark && allChildren[5].innerHTML == mark) {
    console.log(`${mark} wins! Play Again!`)
  } else if(allChildren[6].innerHTML == mark && allChildren[7].innerHTML == mark && allChildren[8].innerHTML == mark) {
    console.log(`${mark} wins! Play Again!`)
  } else if(allChildren[0].innerHTML == mark && allChildren[4].innerHTML == mark && allChildren[8].innerHTML == mark) {
    console.log(`${mark} wins! Play Again!`)
  } else if(allChildren[2].innerHTML == mark && allChildren[4].innerHTML == mark && allChildren[6].innerHTML == mark) {
    console.log(`${mark} wins! Play Again!`)
  } else if(allChildren[0].innerHTML == mark && allChildren[3].innerHTML == mark && allChildren[6].innerHTML == mark) {
    console.log(`${mark} wins! Play Again!`)
  } else if(allChildren[1].innerHTML == mark && allChildren[4].innerHTML == mark && allChildren[7].innerHTML == mark) {
    console.log(`${mark} wins! Play Again!`)
  } else if(allChildren[2].innerHTML == mark && allChildren[5].innerHTML == mark && allChildren[8].innerHTML == mark) {
    console.log(`${mark} wins! Play Again!`)
  } else{
    return null;
  }
 }

 //adds event listeners to each spot that listen for click to place move
 // invokes the play move fuction on click
 let giveSpotsFunctionality = () => {

   //console.log(allChildren)
   allChildren.forEach(child => {
    child.addEventListener('click', function(event){
      playMove(event);
    })
   })
 };




 giveSpotsFunctionality();

