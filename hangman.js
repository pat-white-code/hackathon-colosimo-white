console.log('hangman.js here...')

const codeWord = 'coding';

//takes a codeword and returns an array the length of the word, where each element in the array is *
const createBoard = (codeWord) => {
  const board = [];
  for(let i = 0 ; i<codeWord.length ; i++) {
    board[i] = '*'
  }
  return board
}

//creates board using codeWord
const board = createBoard(codeWord)

//renders the board to the GUI...
const renderBoard = () => {
  
  //targets board section of gui
  const boardSection = document.querySelector('.board')

  //for each item in board, create an element and place it in board section
  for (let i = 0 ; i < board.length ; i++) {
    let newPiece = document.createElement('span');
    newPiece.classList.add('board__piece');
    newPiece.textContent = '*';
    //creates unique data-piece for each piece, corresponding with the spot in the array
    newPiece.dataset.piece=i;
    boardSection.appendChild(newPiece)
  }
}

renderBoard();

const displayBoard = board.join();

console.log(board);

const renderGuess = () => {
  let textArea = document.querySelector('#guess-input');
  let userInput = textArea.value;
}

//target submit button
const submit = document.querySelector('#guess-submit');

//When submit button is clicked, render guess
submit.addEventListener('click', renderGuess);

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