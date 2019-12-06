const codeWord = 'coding';

let board = [" ", " ", " ", " "," ", " "];


console.log(board);


function updateBoard(letter, index) {
  board[index] = letter;
}


//takes in a letter, if any letter in word matches letter in input, call update board function and pass in letter and index. 
function guess (letter) {
  let success = false;
  for (i=0; i < codeWord.length; i++) {
    if (codeWord[i] === letter) {
      updateBoard(letter, i)
      success = true;
    }
  } 
    if (success) {
      console.log(`Success!...${board}`) 
    } else {
      console.log(`Letter is not in codeword : (...${board})`)
    }
}

function CheckWin() {
  if (!board.includes(' ')) {
    console.log(`YOU WIN THE WORD WAS ${codeWord}!!!`)
  }
}
