const codeWord = 'coding';
let board = ['*','*','*','*','*','*'];

const displayBoard = board.join();

console.log(board);

const guess = (letter) => {
  //if any letter in code word matches letter input,
  //call the updateBoard function, and pass in letter and index.
  let success = false;
  for (let i = 0 ; i < codeWord.length ; i++) {
    if (codeWord[i] === letter) {
      updateBoard(letter, i)
      success = true
    }
  }
  if (success) {
    console.log(`Success! ... ${board}`)
  } else {
    console.log (`Letter is not in codeword : ( ... ${board}`)
  }
  checkWin()
}

const updateBoard = (letter, index) => {
  board[index] = letter;
}

const checkWin = () => {
  if (!board.includes('*')) {
    console.log(`YOU WINN! THE WORD WAS ${codeWord}!!!`)
  }
}

guess('d');
guess('c');
guess('o');
guess('i');
guess('n');
guess('g');