/*
 Create a tictactoe game
 first move always starts with x
  you can have a tue false variable that switches the value everytime a player plays a move

  1. Display a win or tie [ Complete ]
    a. must keep track of the score
    b. a tie means all spots have been filled and no one has 3 in a row
      i. Must define all possible 3 in a row combinations on the board
  2. A button that resets the board [ Complete ]
    a. grab all the elements on the board and cleat their inner html text
    b. css grid will make this pretty easy / may not bee able to use css
  3. on click event add a mark to the board [ Complete ]
    a. after a move is played, run a function that checks the board for wins
    b keep track of move count
      i. if 9 moves have been played and no one wins its a draw

    Winning Patterns
              012
              345
              678
              048
              246
              036
              147
              258

*/

/*

      MODEL

*/

 let whichMark = true;
 let mark= "";
 let score = 0;
 let moveCount = 0;
 let board = document.getElementById('board');
 let allChildren = Array.from(board.children);
 let display = document.getElementById('display');
 let xPoints = 0;
 let oPoints = 0;

//function that adds a mark to a board location
//user interaction
 let playMove = (event) => {

  //logic for mark
  if(whichMark){
    mark = "X"
  } else {
    mark = "O";
  }

  //show mark on DOM by replacing elements text
  if(event.target.innerText == ""){
    event.target.innerText = mark;
    whichMark = !whichMark;
    moveCount++;
  }else if (event.target.innerText !== ""){
    display.innerHTML = 'Must play in an unoccupied spot!';
  }


  //functionality to check for winner
  if (moveCount >= 5 && moveCount < 9 ) {
    checkForWinner('X');
    checkForWinner('O');
  } else if (moveCount == 9){
    let xs = checkForWinner('X');
    let os = checkForWinner('O');
    if(xs == null && os == null){
      setTimeout(function(){
        reset();
      }, 3000)
      console.log('It\'s a Tie, Play again!')
    }
  }

 }

//resets the board markers, counts && scores
//user interaction
let reset = () => {
  allChildren.forEach(child => {
    child.innerHTML = "";
  });

  moveCount = 0;
  whichMark = true;
  display.innerHTML = 'Make your move!';


}

/*

      VIEW

*/

//things to do upon a winning game
//views
 let actionsOnWin = (mark) => {
  display.innerHTML = `${mark}'s win! Play Again!`;

  //increment score for winning team
  if (mark == 'X'){
    xPoints++;
  }else{
    oPoints++;
  }

  //assign points to the winner on the scoreboard
  assignPoints(mark);

  //after 2 sec. reset the board, and let the winner go first on next game.
  setTimeout(function(){
    reset();
    if(mark == "O"){
      whichMark = false;
    }
  }, 2000)


 }
// give winners points
//view
 let assignPoints = (mark) => {
  //finding dom elements for each teams score
  let x = document.getElementById('xTeamPoints');
  let o = document.getElementById('oTeamPoints');

  //assigning points to those elements
  x.innerHTML = xPoints.toString();
  o.innerHTML = oPoints.toString();

 }

 /*

      CONTROLLERS

*/

 //adds event listeners to each spot that listen for click to place move
 // invokes the play move fuction on click
 //controller
 let giveSpotsFunctionality = () => {
   //console.log(allChildren)
   allChildren.forEach(child => {
    child.addEventListener('click', function(event){
      playMove(event);
      board.transform = 'rotate(90)';
    })
   })
 };

//controllers
 let assignTeamNames = () => {
   let xTeamName = prompt('X Team Player Name');
   let oTeamName = prompt('O Team Player Name');

   if (xTeamName) {
     document.getElementById('xTeamName').innerText = `${xTeamName} : `;
   } else {
     xTeamName = "X";
     document.getElementById('xTeamName').innerText = `${xTeamName} : `;
   }

   if (oTeamName) {
    document.getElementById('oTeamName').innerText = `${oTeamName} : `;
   } else {
    oTeamName = "O";
    document.getElementById('oTeamName').innerText = `${oTeamName} : `;
   }

   display.innerHTML = `Welcome Conqueror ${xTeamName} & Slayer ${oTeamName}.`

   setTimeout(function(){
     display.innerHTML = "Make your move!"
   }, 5000)

 }

  //function that loops through the divs/array and checks for a winning pattern
 //controller
 let checkForWinner = (mark) => {
  if(allChildren[0].innerHTML == mark && allChildren[1].innerHTML == mark && allChildren[2].innerHTML == mark) {
    actionsOnWin(mark);
  } else if(allChildren[3].innerHTML == mark && allChildren[4].innerHTML == mark && allChildren[5].innerHTML == mark) {
    actionsOnWin(mark);
  } else if(allChildren[6].innerHTML == mark && allChildren[7].innerHTML == mark && allChildren[8].innerHTML == mark) {
    actionsOnWin(mark);
  } else if(allChildren[0].innerHTML == mark && allChildren[4].innerHTML == mark && allChildren[8].innerHTML == mark) {
    actionsOnWin(mark);
  } else if(allChildren[2].innerHTML == mark && allChildren[4].innerHTML == mark && allChildren[6].innerHTML == mark) {
    actionsOnWin(mark);
  } else if(allChildren[0].innerHTML == mark && allChildren[3].innerHTML == mark && allChildren[6].innerHTML == mark) {
    actionsOnWin(mark);
  } else if(allChildren[1].innerHTML == mark && allChildren[4].innerHTML == mark && allChildren[7].innerHTML == mark) {
    actionsOnWin(mark);
  } else if(allChildren[2].innerHTML == mark && allChildren[5].innerHTML == mark && allChildren[8].innerHTML == mark) {
    actionsOnWin(mark);
  } else{
    return null;
  }
 }

/*

      GAME INITIALIZATION

*/
//need to invoke this functin on page load
 giveSpotsFunctionality();
 //assigns team names prior to start of the game
 assignTeamNames();


